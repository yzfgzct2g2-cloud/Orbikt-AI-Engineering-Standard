/** Schema/reference validation tests (CDM-01..CDM-52). */

import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { validateProject, assertProject, ValidationError } from "../src/validate.js";
import { SEED_PATH } from "../src/greeting-demo.js";
import { clone, makeKnowledge, makeProject } from "./helpers.js";

const seed = JSON.parse(readFileSync(SEED_PATH, "utf8")) as unknown;

test("the committed demo seed is a valid persisted project", () => {
  assert.deepEqual(validateProject(seed), []);
});

test("a minimal synthetic project is valid", () => {
  const project = makeProject({ knowledge: [makeKnowledge({ id: "k-a" })] });
  assert.deepEqual(validateProject(project), []);
});

test("non-object roots and malformed documents are rejected", () => {
  assert.ok(validateProject(null).length > 0);
  assert.ok(validateProject([]).length > 0);
  assert.ok(validateProject("{}").length > 0);
  assert.ok(validateProject({}).length > 0);
});

test("wrong format markers are rejected", () => {
  const project = clone(makeProject({ knowledge: [makeKnowledge({ id: "k-a" })] }));
  (project as { format: string }).format = "something-else";
  assert.ok(validateProject(project).some((e) => e.includes("format")));
});

test("an unknown knowledge state is rejected", () => {
  const project = clone(makeProject({ knowledge: [makeKnowledge({ id: "k-a" })] }));
  (project.knowledge[0] as { state: string }).state = "Pending";
  assert.ok(validateProject(project).some((e) => e.includes("state")));
});

test("duplicate knowledge ids are rejected", () => {
  const project = makeProject({
    knowledge: [makeKnowledge({ id: "k-a" }), makeKnowledge({ id: "k-a" })],
    criteria: [{ id: "sc-1", knowledge: "k-a" }],
  });
  assert.ok(validateProject(project).some((e) => e.includes("duplicate")));
});

test("a success criterion referencing missing knowledge is rejected", () => {
  const project = makeProject({
    knowledge: [makeKnowledge({ id: "k-a" })],
    criteria: [{ id: "sc-1", knowledge: "k-missing" }],
  });
  assert.ok(validateProject(project).some((e) => e.includes("k-missing")));
});

test("an invalid parent reference is rejected", () => {
  const project = makeProject({
    knowledge: [makeKnowledge({ id: "k-a", parent: "k-missing" })],
  });
  assert.ok(validateProject(project).some((e) => e.includes("parent")));
});

test("a self-parent is rejected", () => {
  const project = makeProject({ knowledge: [makeKnowledge({ id: "k-a", parent: "k-a" })] });
  assert.ok(validateProject(project).some((e) => e.includes("own parent")));
});

test("an invalid dependency reference is rejected", () => {
  const project = makeProject({
    knowledge: [makeKnowledge({ id: "k-a", depends_on: ["k-missing"] })],
  });
  assert.ok(validateProject(project).some((e) => e.includes("depends_on")));
});

test("a self-dependency is rejected", () => {
  const project = makeProject({
    knowledge: [makeKnowledge({ id: "k-a", depends_on: ["k-a"] })],
  });
  assert.ok(validateProject(project).some((e) => e.includes("depend on itself")));
});

test("a dependency cycle is rejected", () => {
  const project = makeProject({
    knowledge: [
      makeKnowledge({ id: "k-a", depends_on: ["k-b"] }),
      makeKnowledge({ id: "k-b", depends_on: ["k-c"] }),
      makeKnowledge({ id: "k-c", depends_on: ["k-a"] }),
    ],
  });
  assert.ok(validateProject(project).some((e) => e.includes("cycle")));
});

test("an action referencing an unknown actor or knowledge is rejected", () => {
  const project = clone(makeProject({ knowledge: [makeKnowledge({ id: "k-a" })] }));
  project.actions.push({
    id: "a-001",
    actor: "actor-missing",
    target_knowledge: ["k-missing"],
    description: "bad action",
    created_at: "2026-07-18T00:00:00.000Z",
  });
  const errors = validateProject(project);
  assert.ok(errors.some((e) => e.includes("actor-missing")));
  assert.ok(errors.some((e) => e.includes("k-missing")));
});

test("an empty success_criteria list is rejected", () => {
  const project = clone(makeProject({ knowledge: [makeKnowledge({ id: "k-a" })] }));
  project.objective.success_criteria = [];
  assert.ok(validateProject(project).some((e) => e.includes("success_criteria")));
});

test("a checkpoint pending_action referencing a missing action is rejected", () => {
  const project = clone(makeProject({ knowledge: [makeKnowledge({ id: "k-a" })] }));
  project.checkpoint.pending_action = "a-missing";
  assert.ok(validateProject(project).some((e) => e.includes("pending_action")));
});

test("assertProject throws ValidationError carrying every violation", () => {
  assert.throws(
    () => assertProject({}),
    (error: unknown) => error instanceof ValidationError && error.errors.length > 0,
  );
});
