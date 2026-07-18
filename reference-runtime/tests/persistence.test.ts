/** Serialization round-trip and Action-history persistence (CDM-50, CDM-51). */

import { strict as assert } from "node:assert";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { Engine } from "../src/engine.js";
import { loadProject, saveProject } from "../src/store.js";
import { demoExecutors, demoPaths, seedDemo } from "../src/greeting-demo.js";
import { fixedClock, makeKnowledge, makeProject, tempDir } from "./helpers.js";

test("save/load is a lossless round trip", () => {
  const dir = tempDir("roundtrip");
  const path = join(dir, "project.json");
  const project = makeProject({
    knowledge: [makeKnowledge({ id: "k-a" }), makeKnowledge({ id: "k-b", depends_on: ["k-a"] })],
  });
  saveProject(path, project);
  assert.deepEqual(loadProject(path), project);
});

test("malformed persisted JSON is rejected on load", () => {
  const dir = tempDir("malformed");
  const path = join(dir, "project.json");
  writeFileSync(path, "{ not json", "utf8");
  assert.throws(() => loadProject(path), /not valid JSON/);
  writeFileSync(path, JSON.stringify({ format: "oaes-project" }), "utf8");
  assert.throws(() => loadProject(path), /Invalid OAES project state/);
});

test("every engine step appends to the persisted action history", () => {
  const paths = demoPaths(tempDir("history"));
  seedDemo(paths);
  const engine = new Engine({
    statePath: paths.statePath,
    actorId: "actor-runtime",
    clock: fixedClock(),
    executors: demoExecutors(paths),
  });
  const seen: string[] = [];
  for (let i = 0; i < 3; i++) {
    const result = engine.step();
    assert.equal(result.status, "acted");
    if (result.status === "acted") seen.push(result.action.id);
    const onDisk = loadProject(paths.statePath);
    assert.equal(onDisk.actions.length, i + 1);
    assert.deepEqual(onDisk.actions.map((a) => a.id), seen);
  }
});

test("invalidation is recorded as an explicit observable action (STA-07/STA-08)", () => {
  const paths = demoPaths(tempDir("invalidate"));
  seedDemo(paths);
  const engine = new Engine({
    statePath: paths.statePath,
    actorId: "actor-runtime",
    clock: fixedClock(),
    executors: demoExecutors(paths),
  });
  engine.run(); // complete the objective
  const action = engine.invalidate("k-greeting-artifact", "artifact deleted by operator");
  const onDisk = loadProject(paths.statePath);
  const persisted = onDisk.actions.find((a) => a.id === action.id)!;
  assert.equal(persisted.kind, "invalidate");
  assert.ok(persisted.description.includes("artifact deleted by operator"));
  assert.equal(onDisk.knowledge.find((k) => k.id === "k-greeting-artifact")!.state, "Unknown");
  // Prior history is untouched (append-only).
  assert.equal(onDisk.actions.length, 6);
});
