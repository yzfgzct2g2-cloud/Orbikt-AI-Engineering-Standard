/**
 * The OAES v2 reference engine: Observe → Reason → Choose Action → Execute →
 * Update Knowledge (RUN-01). One responsibility: choose the next best Action.
 */

import type { Action, ActionKind, Knowledge, Project } from "./model.js";
import { findKnowledge } from "./model.js";
import { selectNextAction, isComplete, type Selection } from "./select.js";
import { applyForwardTransition, applyInvalidation } from "./transitions.js";
import { loadProject, saveProject } from "./store.js";

/** Performs the real-world effect of a selected Action. May throw to fail the step. */
export type Executor = (target: Knowledge, project: Project) => void;

export interface EngineOptions {
  statePath: string;
  /** Registered Actor performing this engine's Actions. */
  actorId: string;
  /** Injectable clock for reproducible tests. */
  clock?: () => string;
  executors?: Partial<Record<Exclude<ActionKind, "invalidate">, Executor>>;
}

export type StepResult =
  | { status: "complete" }
  | { status: "acted"; action: Action }
  | { status: "emitted"; action: Action };

export class Engine {
  readonly project: Project;
  private readonly statePath: string;
  private readonly actorId: string;
  private readonly clock: () => string;
  private readonly executors: Partial<Record<Exclude<ActionKind, "invalidate">, Executor>>;

  /** Observe (RUN-31): all state comes from disk; nothing from prior memory. */
  constructor(options: EngineOptions) {
    this.statePath = options.statePath;
    this.actorId = options.actorId;
    this.clock = options.clock ?? (() => new Date().toISOString());
    this.executors = options.executors ?? {};
    this.project = loadProject(this.statePath);
    if (!this.project.actors.some((a) => a.id === this.actorId)) {
      throw new Error(`Actor ${this.actorId} is not registered in the project`);
    }
  }

  private nextActionId(): string {
    let n = this.project.actions.length + 1;
    let id = `a-${String(n).padStart(3, "0")}`;
    while (this.project.actions.some((a) => a.id === id)) {
      n += 1;
      id = `a-${String(n).padStart(3, "0")}`;
    }
    return id;
  }

  private recordAction(selection: Selection): Action {
    const action: Action = {
      id: this.nextActionId(),
      actor: this.actorId,
      target_knowledge: [selection.knowledge.id],
      description: `${selection.step.kind} ${selection.knowledge.id} (${selection.knowledge.state} -> ${selection.step.to})`,
      created_at: this.clock(),
      kind: selection.step.kind,
      rationale: selection.rationale,
      resulting_state: selection.step.to,
    };
    this.project.actions.push(action);
    return action;
  }

  /** One full loop iteration. Persists before returning (RUN-32). */
  step(): StepResult {
    if (isComplete(this.project)) {
      this.project.checkpoint.pending_action = null;
      this.project.checkpoint.updated_at = this.clock();
      saveProject(this.statePath, this.project);
      return { status: "complete" };
    }

    const selection = selectNextAction(this.project)!;
    const executor = this.executors[selection.step.kind];
    const action = this.recordAction(selection);

    if (!executor) {
      // RUN-18: no executor — record as pending and emit for external execution.
      this.project.checkpoint.pending_action = action.id;
      this.project.checkpoint.updated_at = this.clock();
      saveProject(this.statePath, this.project);
      return { status: "emitted", action };
    }

    executor(selection.knowledge, this.project);
    applyForwardTransition(selection.knowledge, selection.step.to, this.clock());
    this.project.checkpoint.pending_action = null;
    this.project.checkpoint.updated_at = this.clock();
    saveProject(this.statePath, this.project);
    return { status: "acted", action };
  }

  /** Run until complete or an action is emitted for external execution. */
  run(maxSteps = 1000): StepResult {
    for (let i = 0; i < maxSteps; i++) {
      const result = this.step();
      if (result.status !== "acted") return result;
    }
    throw new Error(`Objective not complete after ${maxSteps} steps`);
  }

  /**
   * STA-07: explicit backward transition. Records an observable invalidate
   * Action carrying the reason; never mutates history.
   */
  invalidate(knowledgeId: string, reason: string): Action {
    const target = findKnowledge(this.project, knowledgeId);
    const previousState = target.state;
    applyInvalidation(target, this.clock());
    const action: Action = {
      id: this.nextActionId(),
      actor: this.actorId,
      target_knowledge: [target.id],
      description: `invalidate ${target.id} (${previousState} -> Unknown): ${reason}`,
      created_at: this.clock(),
      kind: "invalidate",
      rationale: reason,
      resulting_state: "Unknown",
    };
    this.project.actions.push(action);
    this.project.checkpoint.updated_at = this.clock();
    saveProject(this.statePath, this.project);
    return action;
  }
}
