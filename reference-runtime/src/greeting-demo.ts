/**
 * Executors and helpers for the synthetic greeting demonstration
 * (examples/greeting-demo/). Shared by the demo CLI and the test suite.
 */

import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Executor } from "./engine.js";
import type { Knowledge } from "./model.js";

const HERE = dirname(fileURLToPath(import.meta.url));
/** Repository root, resolved relative to the compiled file (dist/src/). */
export const REPO_ROOT = resolve(HERE, "..", "..", "..");
export const SEED_PATH = join(REPO_ROOT, "examples", "greeting-demo", "seed.project.json");

export interface DemoPaths {
  workDir: string;
  statePath: string;
  artifactPath: string;
}

export function demoPaths(workDir: string): DemoPaths {
  return {
    workDir,
    statePath: join(workDir, "project.json"),
    artifactPath: join(workDir, "greeting.txt"),
  };
}

/** Reset the working directory and seed it from the committed example. */
export function seedDemo(paths: DemoPaths): void {
  rmSync(paths.workDir, { recursive: true, force: true });
  mkdirSync(paths.workDir, { recursive: true });
  copyFileSync(SEED_PATH, paths.statePath);
}

/** The required greeting, parsed from the requirement Knowledge content. */
export function expectedGreeting(requirement: Knowledge): string {
  const match = requirement.content.match(/exactly: (.+)$/);
  if (!match || !match[1]) {
    throw new Error(`Requirement ${requirement.id} does not declare its exact content`);
  }
  return match[1];
}

/** Build the demo executors for a given working directory. */
export function demoExecutors(paths: DemoPaths): {
  establish: Executor;
  implement: Executor;
  verify: Executor;
} {
  return {
    // Establishing a claim needs no external effect in this demo.
    establish: () => {},

    implement: (target, project) => {
      if (target.id !== "k-greeting-artifact") {
        throw new Error(`No implementation defined for ${target.id}`);
      }
      const requirement = project.knowledge.find((k) => k.id === "k-greeting-content")!;
      writeFileSync(paths.artifactPath, expectedGreeting(requirement) + "\n", "utf8");
    },

    verify: (target, project) => {
      if (target.id === "k-greeting-content") {
        // Verification scope: the requirement declares one exact content.
        expectedGreeting(target);
        return;
      }
      if (target.id === "k-greeting-artifact") {
        const requirement = project.knowledge.find((k) => k.id === "k-greeting-content")!;
        const actual = readFileSync(paths.artifactPath, "utf8");
        const expected = expectedGreeting(requirement) + "\n";
        if (actual !== expected) {
          throw new Error(
            `Verification failed for ${target.id}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
          );
        }
        return;
      }
      throw new Error(`No verification defined for ${target.id}`);
    },
  };
}
