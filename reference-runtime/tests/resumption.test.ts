/**
 * Interruption/resumption proof (RUN-31, mandate §22): run part of the
 * process, destroy the runtime instance, reload purely from disk, continue,
 * and reach the same Verified result — with no conversation or process
 * memory carried across the boundary.
 */

import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { Engine } from "../src/engine.js";
import { loadProject } from "../src/store.js";
import { isComplete } from "../src/select.js";
import { demoExecutors, demoPaths, seedDemo } from "../src/greeting-demo.js";
import { fixedClock, tempDir } from "./helpers.js";

/** The deterministic expected action trace of the greeting demo. */
const EXPECTED_TRACE: [string, string][] = [
  ["establish", "k-greeting-content"],
  ["verify", "k-greeting-content"],
  ["establish", "k-greeting-artifact"],
  ["implement", "k-greeting-artifact"],
  ["verify", "k-greeting-artifact"],
];

function trace(path: string): [string, string][] {
  return loadProject(path).actions.map((a) => [a.kind ?? "?", a.target_knowledge[0]!]);
}

test("a fresh engine resumes from disk and completes the objective", () => {
  const paths = demoPaths(tempDir("resume"));
  seedDemo(paths);
  const options = {
    statePath: paths.statePath,
    actorId: "actor-runtime",
    clock: fixedClock(),
    executors: demoExecutors(paths),
  };

  // Phase 1: partial run, then the instance is discarded (interruption).
  {
    const engine = new Engine(options);
    assert.equal(engine.step().status, "acted");
    assert.equal(engine.step().status, "acted");
  }
  assert.deepEqual(trace(paths.statePath), EXPECTED_TRACE.slice(0, 2));
  assert.equal(isComplete(loadProject(paths.statePath)), false);

  // Phase 2: a brand-new engine observes only the persisted files.
  {
    const engine = new Engine(options);
    const result = engine.run();
    assert.equal(result.status, "complete");
  }

  const final = loadProject(paths.statePath);
  assert.equal(isComplete(final), true);
  assert.ok(final.knowledge.every((k) => k.state === "Verified"));
  assert.deepEqual(trace(paths.statePath), EXPECTED_TRACE);
  assert.equal(readFileSync(paths.artifactPath, "utf8"), "Hello, OAES!\n");
});

test("an uninterrupted run produces the identical trace and result", () => {
  const paths = demoPaths(tempDir("straight"));
  seedDemo(paths);
  const engine = new Engine({
    statePath: paths.statePath,
    actorId: "actor-runtime",
    clock: fixedClock(),
    executors: demoExecutors(paths),
  });
  assert.equal(engine.run().status, "complete");
  assert.deepEqual(trace(paths.statePath), EXPECTED_TRACE);
  assert.equal(readFileSync(paths.artifactPath, "utf8"), "Hello, OAES!\n");
});

test("dependency ordering holds: the artifact is never touched before its requirement is Verified", () => {
  const paths = demoPaths(tempDir("deporder"));
  seedDemo(paths);
  const engine = new Engine({
    statePath: paths.statePath,
    actorId: "actor-runtime",
    clock: fixedClock(),
    executors: demoExecutors(paths),
  });
  engine.run();
  const actions = loadProject(paths.statePath).actions;
  const firstArtifactAction = actions.findIndex((a) =>
    a.target_knowledge.includes("k-greeting-artifact"),
  );
  const requirementVerified = actions.findIndex(
    (a) => a.kind === "verify" && a.target_knowledge.includes("k-greeting-content"),
  );
  assert.ok(requirementVerified !== -1 && firstArtifactAction > requirementVerified);
});

test("an engine without executors emits the pending action instead of skipping it (RUN-18)", () => {
  const paths = demoPaths(tempDir("emit"));
  seedDemo(paths);
  const engine = new Engine({
    statePath: paths.statePath,
    actorId: "actor-runtime",
    clock: fixedClock(),
  });
  const result = engine.run();
  assert.equal(result.status, "emitted");
  const onDisk = loadProject(paths.statePath);
  assert.equal(onDisk.checkpoint.pending_action, result.status === "emitted" ? result.action.id : null);
  // The knowledge state was not advanced without execution.
  assert.equal(onDisk.knowledge.find((k) => k.id === "k-greeting-content")!.state, "Unknown");
});
