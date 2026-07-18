/**
 * Synthetic demonstration CLI (`npm run demo`).
 *
 * Proves, against real persisted files: deterministic selection, the four
 * States, dependency ordering, Action history, a genuine process-boundary
 * interruption (a fresh Engine instance re-reading disk), resumption, and
 * Objective completion detection.
 */

import { join } from "node:path";
import { Engine } from "./engine.js";
import { demoExecutors, demoPaths, seedDemo, REPO_ROOT } from "./greeting-demo.js";
import { isComplete } from "./select.js";
import { loadProject } from "./store.js";

const paths = demoPaths(join(REPO_ROOT, "reference-runtime", ".demo"));
seedDemo(paths);
console.log(`Seeded demo project at ${paths.statePath}\n`);

const options = {
  statePath: paths.statePath,
  actorId: "actor-runtime",
  executors: demoExecutors(paths),
};

// --- Phase 1: run two steps, then "crash" (discard the engine instance) ---
console.log("Phase 1: first process runs two steps, then is interrupted.");
const first = new Engine(options);
for (let i = 0; i < 2; i++) {
  const result = first.step();
  if (result.status !== "acted") throw new Error(`Unexpected step result: ${result.status}`);
  console.log(`  ${result.action.id}  ${result.action.description}`);
}
console.log("  -- interruption: engine instance discarded; only disk survives --\n");

// --- Phase 2: a fresh process resumes purely from disk ---
console.log("Phase 2: fresh engine resumes from persisted state.");
const resumed = new Engine(options);
while (true) {
  const result = resumed.step();
  if (result.status === "complete") break;
  if (result.status !== "acted") throw new Error(`Unexpected step result: ${result.status}`);
  console.log(`  ${result.action.id}  ${result.action.description}`);
}

// --- Report and self-check ---
const final = loadProject(paths.statePath);
console.log("\nFinal knowledge states:");
for (const k of final.knowledge) {
  console.log(`  ${k.id}: ${k.state}`);
}
console.log("\nPersisted action history:");
for (const a of final.actions) {
  console.log(`  ${a.id}  [${a.kind}]  ${a.description}`);
}

if (!isComplete(final)) throw new Error("Demo failed: objective not complete");
if (final.actions.length !== 5) throw new Error("Demo failed: unexpected action count");
if (!final.knowledge.every((k) => k.state === "Verified")) {
  throw new Error("Demo failed: not all knowledge Verified");
}
console.log("\nObjective complete: every success criterion is Verified. ✔");
