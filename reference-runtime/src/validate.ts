/**
 * OAES v2 persisted-project validation.
 * Spec: ../../spec/CANONICAL_DATA_MODEL.md
 *
 * This validator implements the same contract as /schemas/*.schema.json.
 * A test cross-checks the enumerations and required-field lists against the
 * schema files so the two cannot silently drift (CDM-52).
 */

import {
  ACTION_KINDS,
  ACTOR_TYPES,
  KNOWLEDGE_STATES,
  type Project,
} from "./model.js";

export class ValidationError extends Error {
  constructor(public readonly errors: string[]) {
    super(`Invalid OAES project state:\n- ${errors.join("\n- ")}`);
    this.name = "ValidationError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.length > 0;
}

function isIsoTimestamp(value: unknown): boolean {
  return typeof value === "string" && !Number.isNaN(Date.parse(value));
}

/**
 * Validate an arbitrary parsed JSON value as a persisted project.
 * Returns the list of violations; an empty list means valid.
 */
export function validateProject(value: unknown): string[] {
  const errors: string[] = [];
  if (!isRecord(value)) {
    return ["project: root must be a JSON object"];
  }

  if (value["format"] !== "oaes-project") {
    errors.push(`project.format: must be "oaes-project"`);
  }
  if (value["format_version"] !== "2.0.0") {
    errors.push(`project.format_version: must be "2.0.0"`);
  }

  // --- Actors ---
  const actorIds = new Set<string>();
  const actors = value["actors"];
  if (!Array.isArray(actors) || actors.length === 0) {
    errors.push("project.actors: must be a non-empty array");
  } else {
    actors.forEach((a, i) => {
      if (!isRecord(a)) {
        errors.push(`actors[${i}]: must be an object`);
        return;
      }
      if (!isNonEmptyString(a["id"])) errors.push(`actors[${i}].id: required non-empty string`);
      else if (actorIds.has(a["id"])) errors.push(`actors[${i}].id: duplicate id "${a["id"]}"`);
      else actorIds.add(a["id"]);
      if (!ACTOR_TYPES.includes(a["type"] as never)) {
        errors.push(`actors[${i}].type: must be one of ${ACTOR_TYPES.join(", ")}`);
      }
      if (!isNonEmptyString(a["name"])) errors.push(`actors[${i}].name: required non-empty string`);
    });
  }

  // --- Knowledge ---
  const knowledgeIds = new Set<string>();
  const knowledge = value["knowledge"];
  if (!Array.isArray(knowledge)) {
    errors.push("project.knowledge: must be an array");
  } else {
    knowledge.forEach((k, i) => {
      if (!isRecord(k)) {
        errors.push(`knowledge[${i}]: must be an object`);
        return;
      }
      if (!isNonEmptyString(k["id"])) errors.push(`knowledge[${i}].id: required non-empty string`);
      else if (knowledgeIds.has(k["id"])) errors.push(`knowledge[${i}].id: duplicate id "${k["id"]}"`);
      else knowledgeIds.add(k["id"]);
      if (!isNonEmptyString(k["type"])) errors.push(`knowledge[${i}].type: required non-empty string`);
      if (!isNonEmptyString(k["content"])) errors.push(`knowledge[${i}].content: required non-empty string`);
      if (!KNOWLEDGE_STATES.includes(k["state"] as never)) {
        errors.push(`knowledge[${i}].state: must be one of ${KNOWLEDGE_STATES.join(", ")}`);
      }
      if (!(k["parent"] === null || isNonEmptyString(k["parent"]))) {
        errors.push(`knowledge[${i}].parent: must be a knowledge id or null`);
      }
      if (!Array.isArray(k["depends_on"]) || k["depends_on"].some((d) => !isNonEmptyString(d))) {
        errors.push(`knowledge[${i}].depends_on: must be an array of knowledge ids`);
      }
      if (!isNonEmptyString(k["source"])) errors.push(`knowledge[${i}].source: required non-empty string`);
      if (!isIsoTimestamp(k["updated_at"])) errors.push(`knowledge[${i}].updated_at: must be an ISO 8601 timestamp`);
      if (k["requires_implementation"] !== undefined && typeof k["requires_implementation"] !== "boolean") {
        errors.push(`knowledge[${i}].requires_implementation: must be a boolean when present`);
      }
    });

    // Reference integrity (CDM-03, CDM-22, CDM-23)
    knowledge.forEach((k, i) => {
      if (!isRecord(k) || !isNonEmptyString(k["id"])) return;
      const id = k["id"];
      const parent = k["parent"];
      if (isNonEmptyString(parent)) {
        if (parent === id) errors.push(`knowledge[${i}] (${id}).parent: a record cannot be its own parent`);
        else if (!knowledgeIds.has(parent)) errors.push(`knowledge[${i}] (${id}).parent: unknown knowledge id "${parent}"`);
      }
      if (Array.isArray(k["depends_on"])) {
        for (const dep of k["depends_on"]) {
          if (!isNonEmptyString(dep)) continue;
          if (dep === id) errors.push(`knowledge[${i}] (${id}).depends_on: a record cannot depend on itself`);
          else if (!knowledgeIds.has(dep)) errors.push(`knowledge[${i}] (${id}).depends_on: unknown knowledge id "${dep}"`);
        }
      }
    });

    // Dependency cycles (CDM-23)
    const cycle = findDependencyCycle(knowledge);
    if (cycle) {
      errors.push(`knowledge: dependency cycle detected: ${cycle.join(" -> ")}`);
    }
  }

  // --- Objective ---
  const objective = value["objective"];
  if (!isRecord(objective)) {
    errors.push("project.objective: must be an object");
  } else {
    if (!isNonEmptyString(objective["id"])) errors.push("objective.id: required non-empty string");
    if (!isNonEmptyString(objective["title"])) errors.push("objective.title: required non-empty string");
    if (typeof objective["description"] !== "string") errors.push("objective.description: required string");
    const criteria = objective["success_criteria"];
    if (!Array.isArray(criteria) || criteria.length === 0) {
      errors.push("objective.success_criteria: must be a non-empty array (CDM-10)");
    } else {
      const criterionIds = new Set<string>();
      criteria.forEach((c, i) => {
        if (!isRecord(c)) {
          errors.push(`success_criteria[${i}]: must be an object`);
          return;
        }
        if (!isNonEmptyString(c["id"])) errors.push(`success_criteria[${i}].id: required non-empty string`);
        else if (criterionIds.has(c["id"])) errors.push(`success_criteria[${i}].id: duplicate id "${c["id"]}"`);
        else criterionIds.add(c["id"]);
        if (!isNonEmptyString(c["description"])) errors.push(`success_criteria[${i}].description: required non-empty string`);
        if (!isNonEmptyString(c["knowledge"])) {
          errors.push(`success_criteria[${i}].knowledge: required non-empty string`);
        } else if (!knowledgeIds.has(c["knowledge"])) {
          errors.push(`success_criteria[${i}].knowledge: unknown knowledge id "${c["knowledge"]}"`);
        }
      });
    }
  }

  // --- Actions ---
  const actionIds = new Set<string>();
  const actions = value["actions"];
  if (!Array.isArray(actions)) {
    errors.push("project.actions: must be an array");
  } else {
    actions.forEach((a, i) => {
      if (!isRecord(a)) {
        errors.push(`actions[${i}]: must be an object`);
        return;
      }
      if (!isNonEmptyString(a["id"])) errors.push(`actions[${i}].id: required non-empty string`);
      else if (actionIds.has(a["id"])) errors.push(`actions[${i}].id: duplicate id "${a["id"]}"`);
      else actionIds.add(a["id"]);
      if (!isNonEmptyString(a["actor"])) errors.push(`actions[${i}].actor: required non-empty string`);
      else if (!actorIds.has(a["actor"])) errors.push(`actions[${i}].actor: unknown actor id "${a["actor"]}"`);
      const targets = a["target_knowledge"];
      if (!Array.isArray(targets) || targets.length === 0) {
        errors.push(`actions[${i}].target_knowledge: must be a non-empty array (CDM-31)`);
      } else {
        for (const t of targets) {
          if (!isNonEmptyString(t) || !knowledgeIds.has(t)) {
            errors.push(`actions[${i}].target_knowledge: unknown knowledge id "${String(t)}"`);
          }
        }
      }
      if (!isNonEmptyString(a["description"])) errors.push(`actions[${i}].description: required non-empty string`);
      if (!isIsoTimestamp(a["created_at"])) errors.push(`actions[${i}].created_at: must be an ISO 8601 timestamp`);
      if (a["kind"] !== undefined && !ACTION_KINDS.includes(a["kind"] as never)) {
        errors.push(`actions[${i}].kind: must be one of ${ACTION_KINDS.join(", ")}`);
      }
      if (a["resulting_state"] !== undefined && !KNOWLEDGE_STATES.includes(a["resulting_state"] as never)) {
        errors.push(`actions[${i}].resulting_state: must be one of ${KNOWLEDGE_STATES.join(", ")}`);
      }
    });
  }

  // --- Checkpoint ---
  const checkpoint = value["checkpoint"];
  if (!isRecord(checkpoint)) {
    errors.push("project.checkpoint: must be an object");
  } else {
    const pending = checkpoint["pending_action"];
    if (!(pending === null || isNonEmptyString(pending))) {
      errors.push("checkpoint.pending_action: must be an action id or null");
    } else if (isNonEmptyString(pending) && !actionIds.has(pending)) {
      errors.push(`checkpoint.pending_action: unknown action id "${pending}"`);
    }
    if (!isIsoTimestamp(checkpoint["updated_at"])) {
      errors.push("checkpoint.updated_at: must be an ISO 8601 timestamp");
    }
  }

  return errors;
}

/** DFS cycle detection over depends_on. Returns one cycle path or null. */
function findDependencyCycle(knowledge: unknown[]): string[] | null {
  const deps = new Map<string, string[]>();
  for (const k of knowledge) {
    if (isRecord(k) && isNonEmptyString(k["id"]) && Array.isArray(k["depends_on"])) {
      deps.set(
        k["id"],
        k["depends_on"].filter((d): d is string => isNonEmptyString(d) && d !== k["id"]),
      );
    }
  }
  const visiting = new Set<string>();
  const done = new Set<string>();

  function visit(id: string, path: string[]): string[] | null {
    if (done.has(id)) return null;
    if (visiting.has(id)) return [...path.slice(path.indexOf(id)), id];
    visiting.add(id);
    for (const dep of deps.get(id) ?? []) {
      if (!deps.has(dep)) continue;
      const cycle = visit(dep, [...path, id]);
      if (cycle) return cycle;
    }
    visiting.delete(id);
    done.add(id);
    return null;
  }

  for (const id of deps.keys()) {
    const cycle = visit(id, []);
    if (cycle) return cycle;
  }
  return null;
}

/** Validate and narrow, throwing ValidationError on any violation. */
export function assertProject(value: unknown): Project {
  const errors = validateProject(value);
  if (errors.length > 0) {
    throw new ValidationError(errors);
  }
  return value as Project;
}
