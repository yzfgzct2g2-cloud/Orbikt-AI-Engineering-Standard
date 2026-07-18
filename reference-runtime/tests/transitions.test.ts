/** State transition tests (STA-03..STA-08). */

import { strict as assert } from "node:assert";
import { test } from "node:test";
import { KNOWLEDGE_STATES, type KnowledgeState } from "../src/model.js";
import {
  applyForwardTransition,
  applyInvalidation,
  isValidForwardTransition,
  nextForwardStep,
} from "../src/transitions.js";
import { makeKnowledge } from "./helpers.js";

const NOW = "2026-07-18T01:00:00.000Z";

test("the standard forward path is allowed step by step", () => {
  const k = makeKnowledge({ id: "k-a", requires_implementation: true });
  applyForwardTransition(k, "Known", NOW);
  applyForwardTransition(k, "Implemented", NOW);
  applyForwardTransition(k, "Verified", NOW);
  assert.equal(k.state, "Verified");
  assert.equal(k.updated_at, NOW);
});

test("non-implementation knowledge may go Known -> Verified directly", () => {
  const k = makeKnowledge({ id: "k-a", state: "Known" });
  applyForwardTransition(k, "Verified", NOW);
  assert.equal(k.state, "Verified");
});

test("Known -> Verified is rejected when implementation is required (STA-05)", () => {
  const k = makeKnowledge({ id: "k-a", state: "Known", requires_implementation: true });
  assert.throws(() => applyForwardTransition(k, "Verified", NOW), /Invalid state transition/);
});

test("every transition outside STA-06 is rejected", () => {
  const allowed = new Set(["Unknown->Known", "Known->Implemented", "Known->Verified", "Implemented->Verified"]);
  for (const from of KNOWLEDGE_STATES) {
    for (const to of KNOWLEDGE_STATES) {
      const k = makeKnowledge({ id: "k-a", state: from as KnowledgeState });
      const valid = isValidForwardTransition(k, from, to);
      assert.equal(
        valid,
        allowed.has(`${from}->${to}`),
        `transition ${from} -> ${to} validity mismatch`,
      );
    }
  }
});

test("skips such as Unknown -> Implemented and Unknown -> Verified are rejected", () => {
  const k = makeKnowledge({ id: "k-a" });
  assert.throws(() => applyForwardTransition(k, "Implemented", NOW));
  assert.throws(() => applyForwardTransition(k, "Verified", NOW));
});

test("nextForwardStep follows RUN-14 for every state", () => {
  assert.deepEqual(nextForwardStep(makeKnowledge({ id: "k", state: "Unknown" })), {
    kind: "establish",
    to: "Known",
  });
  assert.deepEqual(
    nextForwardStep(makeKnowledge({ id: "k", state: "Known", requires_implementation: true })),
    { kind: "implement", to: "Implemented" },
  );
  assert.deepEqual(nextForwardStep(makeKnowledge({ id: "k", state: "Known" })), {
    kind: "verify",
    to: "Verified",
  });
  assert.deepEqual(nextForwardStep(makeKnowledge({ id: "k", state: "Implemented" })), {
    kind: "verify",
    to: "Verified",
  });
  assert.equal(nextForwardStep(makeKnowledge({ id: "k", state: "Verified" })), null);
});

test("invalidation moves any non-Unknown state back to Unknown (STA-07)", () => {
  for (const state of ["Known", "Implemented", "Verified"] as const) {
    const k = makeKnowledge({ id: "k-a", state });
    applyInvalidation(k, NOW);
    assert.equal(k.state, "Unknown");
  }
});

test("invalidating Unknown knowledge is rejected", () => {
  const k = makeKnowledge({ id: "k-a" });
  assert.throws(() => applyInvalidation(k, NOW), /already Unknown/);
});
