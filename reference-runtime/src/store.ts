/**
 * Filesystem persistence (RUN-30..RUN-32, CDM-50).
 * The persisted JSON document is the only authoritative runtime state.
 */

import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { Project } from "./model.js";
import { assertProject } from "./validate.js";

export function loadProject(path: string): Project {
  const raw = readFileSync(path, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (cause) {
    throw new Error(`Persisted state at ${path} is not valid JSON: ${String(cause)}`);
  }
  return assertProject(parsed);
}

export function saveProject(path: string, project: Project): void {
  assertProject(project);
  mkdirSync(dirname(path), { recursive: true });
  const tmp = join(dirname(path), `.${Date.now()}.project.tmp`);
  writeFileSync(tmp, JSON.stringify(project, null, 2) + "\n", "utf8");
  renameSync(tmp, path);
}
