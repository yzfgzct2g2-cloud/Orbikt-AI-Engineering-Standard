/** Shared test fixtures. */

import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { Knowledge, Project } from "../src/model.js";

export function tempDir(prefix: string): string {
  return mkdtempSync(join(tmpdir(), `oaes-${prefix}-`));
}

/** A deterministic clock: strictly increasing fixed timestamps. */
export function fixedClock(): () => string {
  let tick = 0;
  return () => new Date(Date.UTC(2026, 6, 18, 0, 0, tick++)).toISOString();
}

export function makeKnowledge(overrides: Partial<Knowledge> & { id: string }): Knowledge {
  return {
    type: "requirement",
    content: `content of ${overrides.id}`,
    state: "Unknown",
    parent: null,
    depends_on: [],
    source: "test",
    updated_at: "2026-07-18T00:00:00.000Z",
    ...overrides,
  };
}

/** A minimal valid project; knowledge list and criteria are configurable. */
export function makeProject(options: {
  knowledge: Knowledge[];
  criteria?: { id: string; knowledge: string }[];
}): Project {
  const criteria =
    options.criteria ??
    options.knowledge.map((k) => ({ id: `sc-${k.id}`, knowledge: k.id }));
  return {
    format: "oaes-project",
    format_version: "2.0.0",
    objective: {
      id: "obj-test",
      title: "Test objective",
      description: "Synthetic objective for unit tests.",
      success_criteria: criteria.map((c) => ({
        id: c.id,
        description: `${c.knowledge} is Verified`,
        knowledge: c.knowledge,
      })),
    },
    actors: [{ id: "actor-test", type: "Automation", name: "Test actor" }],
    knowledge: options.knowledge,
    actions: [],
    checkpoint: { pending_action: null, updated_at: "2026-07-18T00:00:00.000Z" },
  };
}

/** Deep-clone a project (all persisted data is plain JSON). */
export function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
