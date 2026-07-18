/**
 * OAES v2 State transitions.
 * Spec: ../../spec/STATE_MODEL.md (STA-03..STA-08)
 */

import type { ActionKind, Knowledge, KnowledgeState } from "./model.js";

export function requiresImplementation(k: Knowledge): boolean {
  return k.requires_implementation === true;
}

/**
 * The forward transition table (STA-06). Returns true when `from → to` is a
 * valid forward transition for this record.
 */
export function isValidForwardTransition(
  k: Knowledge,
  from: KnowledgeState,
  to: KnowledgeState,
): boolean {
  if (from === "Unknown" && to === "Known") return true;
  if (from === "Known" && to === "Implemented") return true;
  if (from === "Known" && to === "Verified") return !requiresImplementation(k);
  if (from === "Implemented" && to === "Verified") return true;
  return false;
}

export interface ForwardStep {
  kind: Exclude<ActionKind, "invalidate">;
  to: KnowledgeState;
}

/**
 * The single next forward step for a record (RUN-14), or null when Verified.
 */
export function nextForwardStep(k: Knowledge): ForwardStep | null {
  switch (k.state) {
    case "Unknown":
      return { kind: "establish", to: "Known" };
    case "Known":
      return requiresImplementation(k)
        ? { kind: "implement", to: "Implemented" }
        : { kind: "verify", to: "Verified" };
    case "Implemented":
      return { kind: "verify", to: "Verified" };
    case "Verified":
      return null;
  }
}

/**
 * Apply a forward transition, rejecting anything outside STA-06. Backward
 * movement never goes through here — only through an explicit invalidate
 * Action (STA-07), handled by the engine.
 */
export function applyForwardTransition(
  k: Knowledge,
  to: KnowledgeState,
  now: string,
): void {
  if (!isValidForwardTransition(k, k.state, to)) {
    throw new Error(
      `Invalid state transition for ${k.id}: ${k.state} -> ${to}` +
        (requiresImplementation(k) ? " (requires_implementation is true)" : ""),
    );
  }
  k.state = to;
  k.updated_at = now;
}

/**
 * Apply an invalidation (STA-07): explicit backward transition to Unknown.
 * The caller (engine) is responsible for recording the invalidate Action.
 */
export function applyInvalidation(k: Knowledge, now: string): void {
  if (k.state === "Unknown") {
    throw new Error(`Cannot invalidate ${k.id}: it is already Unknown`);
  }
  k.state = "Unknown";
  k.updated_at = now;
}
