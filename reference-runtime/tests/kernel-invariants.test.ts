/**
 * Mechanical Kernel guards (KRN-05, STA-01, STA-09).
 * These tests must fail if any implementation or schema silently adds a
 * Kernel concept or a canonical Knowledge State.
 */

import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { ACTOR_TYPES, KERNEL_CONCEPTS, KNOWLEDGE_STATES } from "../src/model.js";
import { REPO_ROOT } from "../src/greeting-demo.js";

test("the Kernel contains exactly the five frozen concepts", () => {
  assert.deepEqual([...KERNEL_CONCEPTS], [
    "Objective",
    "Knowledge",
    "State",
    "Action",
    "Actor",
  ]);
});

test("the canonical Knowledge States are exactly the four frozen states", () => {
  assert.deepEqual([...KNOWLEDGE_STATES], [
    "Unknown",
    "Known",
    "Implemented",
    "Verified",
  ]);
});

test("knowledge.schema.json state enum matches the frozen state set", () => {
  const schema = JSON.parse(
    readFileSync(join(REPO_ROOT, "schemas", "knowledge.schema.json"), "utf8"),
  ) as { properties: { state: { enum: string[] } } };
  assert.deepEqual(schema.properties.state.enum, [...KNOWLEDGE_STATES]);
});

test("actor.schema.json type enum matches the actor type set", () => {
  const schema = JSON.parse(
    readFileSync(join(REPO_ROOT, "schemas", "actor.schema.json"), "utf8"),
  ) as { properties: { type: { enum: string[] } } };
  assert.deepEqual(schema.properties.type.enum, [...ACTOR_TYPES]);
});

test("schemas carry the canonical minimum fields of the data model", () => {
  const required = (file: string): string[] =>
    (JSON.parse(readFileSync(join(REPO_ROOT, "schemas", file), "utf8")) as {
      required: string[];
    }).required;

  assert.deepEqual(required("objective.schema.json"), [
    "id",
    "title",
    "description",
    "success_criteria",
  ]);
  assert.deepEqual(required("knowledge.schema.json"), [
    "id",
    "type",
    "content",
    "state",
    "parent",
    "depends_on",
    "source",
    "updated_at",
  ]);
  assert.deepEqual(required("action.schema.json"), [
    "id",
    "actor",
    "target_knowledge",
    "description",
    "created_at",
  ]);
  assert.deepEqual(required("actor.schema.json"), ["id", "type", "name"]);
});

test("spec/KERNEL.md declares exactly the five concepts in its kernel block", () => {
  const kernel = readFileSync(join(REPO_ROOT, "spec", "KERNEL.md"), "utf8");
  assert.ok(
    kernel.includes("Objective\nKnowledge\nState\nAction\nActor"),
    "KERNEL.md must contain the canonical five-concept block",
  );
});

test("spec/STATE_MODEL.md declares exactly the four states in its state block", () => {
  const stateModel = readFileSync(join(REPO_ROOT, "spec", "STATE_MODEL.md"), "utf8");
  assert.ok(
    stateModel.includes("Unknown\nKnown\nImplemented\nVerified"),
    "STATE_MODEL.md must contain the canonical four-state block",
  );
});
