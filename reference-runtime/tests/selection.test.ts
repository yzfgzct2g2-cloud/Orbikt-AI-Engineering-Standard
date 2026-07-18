/** Deterministic selection tests (RUN-10, RUN-12..RUN-16, RUN-20). */

import { strict as assert } from "node:assert";
import { test } from "node:test";
import { isComplete, requiredKnowledgeIds, selectNextAction } from "../src/select.js";
import { clone, makeKnowledge, makeProject } from "./helpers.js";

test("selection is identical for identical persisted input", () => {
  const project = makeProject({
    knowledge: [
      makeKnowledge({ id: "k-b" }),
      makeKnowledge({ id: "k-a" }),
      makeKnowledge({ id: "k-c", state: "Known" }),
    ],
  });
  const first = selectNextAction(clone(project));
  const second = selectNextAction(clone(project));
  assert.deepEqual(first, second);
});

test("more advanced states are selected first (RUN-15)", () => {
  const project = makeProject({
    knowledge: [
      makeKnowledge({ id: "k-a" }),
      makeKnowledge({ id: "k-b", state: "Known" }),
      makeKnowledge({ id: "k-c", state: "Implemented", requires_implementation: true }),
    ],
  });
  const selection = selectNextAction(project)!;
  assert.equal(selection.knowledge.id, "k-c");
  assert.deepEqual(selection.step, { kind: "verify", to: "Verified" });
});

test("ties at the same state rank break by lexicographic id (RUN-16)", () => {
  const project = makeProject({
    knowledge: [makeKnowledge({ id: "k-b" }), makeKnowledge({ id: "k-a" })],
  });
  assert.equal(selectNextAction(project)!.knowledge.id, "k-a");
});

test("knowledge with unverified dependencies is never selected (RUN-13)", () => {
  const project = makeProject({
    knowledge: [
      makeKnowledge({ id: "k-a", state: "Known", depends_on: ["k-b"] }),
      makeKnowledge({ id: "k-b" }),
    ],
    criteria: [{ id: "sc-1", knowledge: "k-a" }],
  });
  // k-a is more advanced (Known) but blocked; the dependency must be chosen.
  assert.equal(selectNextAction(project)!.knowledge.id, "k-b");
});

test("knowledge outside the required set is never selected (RUN-12)", () => {
  const project = makeProject({
    knowledge: [
      makeKnowledge({ id: "k-a", state: "Known" }),
      makeKnowledge({ id: "k-unrelated", state: "Implemented", requires_implementation: true }),
    ],
    criteria: [{ id: "sc-1", knowledge: "k-a" }],
  });
  assert.deepEqual(requiredKnowledgeIds(project), new Set(["k-a"]));
  assert.equal(selectNextAction(project)!.knowledge.id, "k-a");
});

test("the required set includes transitive dependencies (RUN-12)", () => {
  const project = makeProject({
    knowledge: [
      makeKnowledge({ id: "k-top", depends_on: ["k-mid"] }),
      makeKnowledge({ id: "k-mid", depends_on: ["k-base"] }),
      makeKnowledge({ id: "k-base" }),
    ],
    criteria: [{ id: "sc-1", knowledge: "k-top" }],
  });
  assert.deepEqual(requiredKnowledgeIds(project), new Set(["k-top", "k-mid", "k-base"]));
});

test("selection returns null exactly when the objective is complete (RUN-20)", () => {
  const project = makeProject({
    knowledge: [makeKnowledge({ id: "k-a", state: "Verified" })],
  });
  assert.equal(isComplete(project), true);
  assert.equal(selectNextAction(project), null);
});

test("a selection carries a recorded rationale (RUN-17)", () => {
  const project = makeProject({ knowledge: [makeKnowledge({ id: "k-a" })] });
  const selection = selectNextAction(project)!;
  assert.ok(selection.rationale.includes("RUN-15"));
});
