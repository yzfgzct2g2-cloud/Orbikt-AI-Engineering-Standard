/**
 * Deterministic next-Action selection.
 * Spec: ../../spec/RUNTIME.md (RUN-12..RUN-16, RUN-20)
 */

import { findKnowledge, type Knowledge, type KnowledgeState, type Project } from "./model.js";
import { nextForwardStep, type ForwardStep } from "./transitions.js";

export interface Selection {
  knowledge: Knowledge;
  step: ForwardStep;
  rationale: string;
}

/**
 * RUN-12: the required set is every success-criterion Knowledge plus the
 * transitive closure of its depends_on edges.
 */
export function requiredKnowledgeIds(project: Project): Set<string> {
  const required = new Set<string>();
  const queue = project.objective.success_criteria.map((c) => c.knowledge);
  while (queue.length > 0) {
    const id = queue.shift()!;
    if (required.has(id)) continue;
    required.add(id);
    queue.push(...findKnowledge(project, id).depends_on);
  }
  return required;
}

/** RUN-13: dependencies are ready only when all of them are Verified. */
export function dependenciesReady(project: Project, k: Knowledge): boolean {
  return k.depends_on.every((dep) => findKnowledge(project, dep).state === "Verified");
}

/** RUN-20 / CDM-11: complete when every criterion's Knowledge is Verified. */
export function isComplete(project: Project): boolean {
  return project.objective.success_criteria.every(
    (c) => findKnowledge(project, c.knowledge).state === "Verified",
  );
}

/** RUN-15: more advanced states first. Lower rank = selected first. */
const STATE_RANK: Record<KnowledgeState, number> = {
  Implemented: 0,
  Known: 1,
  Unknown: 2,
  Verified: 3,
};

/**
 * Select the single next Action deterministically, or null when the
 * Objective is complete. For identical persisted input the result is
 * identical (RUN-10).
 */
export function selectNextAction(project: Project): Selection | null {
  if (isComplete(project)) return null;

  const required = requiredKnowledgeIds(project);
  const candidates = project.knowledge
    .filter((k) => required.has(k.id) && k.state !== "Verified")
    .filter((k) => dependenciesReady(project, k))
    .sort((a, b) => {
      const rank = STATE_RANK[a.state] - STATE_RANK[b.state];
      if (rank !== 0) return rank;
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; // RUN-16 stable tie-break
    });

  const chosen = candidates[0];
  if (!chosen) {
    // Unreachable with an acyclic, reference-complete project: any required
    // non-Verified record either has ready dependencies or depends
    // (transitively) on one that does.
    throw new Error(
      "No eligible action although the objective is incomplete; persisted state is inconsistent",
    );
  }
  const step = nextForwardStep(chosen)!;
  const rationale =
    `required for objective ${project.objective.id}; state ${chosen.state}; ` +
    `dependencies verified; highest state rank among ${candidates.length} eligible candidate(s), ` +
    `tie-broken by id order (RUN-15/RUN-16)`;
  return { knowledge: chosen, step, rationale };
}
