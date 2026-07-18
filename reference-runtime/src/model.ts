/**
 * OAES v2 Kernel model.
 * Spec: ../../spec/KERNEL.md, ../../spec/CANONICAL_DATA_MODEL.md
 *
 * The Kernel is frozen (KRN-01..KRN-05). The two constant arrays below are the
 * mechanical guard surface: tests fail if either set changes.
 */

export const KERNEL_CONCEPTS = [
  "Objective",
  "Knowledge",
  "State",
  "Action",
  "Actor",
] as const;

export const KNOWLEDGE_STATES = [
  "Unknown",
  "Known",
  "Implemented",
  "Verified",
] as const;

export type KnowledgeState = (typeof KNOWLEDGE_STATES)[number];

export const ACTOR_TYPES = ["Human", "AI", "Automation", "External System"] as const;

export type ActorType = (typeof ACTOR_TYPES)[number];

/** Action kinds are implementation metadata (CDM-32), not Kernel concepts. */
export const ACTION_KINDS = ["establish", "implement", "verify", "invalidate"] as const;

export type ActionKind = (typeof ACTION_KINDS)[number];

export interface SuccessCriterion {
  id: string;
  description: string;
  /** Id of the Knowledge record whose Verified state satisfies this criterion (CDM-10). */
  knowledge: string;
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  success_criteria: SuccessCriterion[];
}

export interface Knowledge {
  id: string;
  type: string;
  content: string;
  state: KnowledgeState;
  parent: string | null;
  depends_on: string[];
  source: string;
  updated_at: string;
  /** Implementation metadata (CDM-26): must pass through Implemented when true. */
  requires_implementation?: boolean;
}

export interface Action {
  id: string;
  actor: string;
  target_knowledge: string[];
  description: string;
  created_at: string;
  kind?: ActionKind;
  rationale?: string;
  resulting_state?: KnowledgeState;
}

export interface Actor {
  id: string;
  type: ActorType;
  name: string;
}

export interface Checkpoint {
  /** Id of an emitted-but-unexecuted Action (RUN-18), or null. */
  pending_action: string | null;
  updated_at: string;
}

export interface Project {
  format: "oaes-project";
  format_version: "2.0.0";
  objective: Objective;
  actors: Actor[];
  knowledge: Knowledge[];
  actions: Action[];
  checkpoint: Checkpoint;
}

export function findKnowledge(project: Project, id: string): Knowledge {
  const record = project.knowledge.find((k) => k.id === id);
  if (!record) {
    throw new Error(`Knowledge record not found: ${id}`);
  }
  return record;
}
