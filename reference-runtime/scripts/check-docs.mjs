#!/usr/bin/env node
/**
 * OAES v2 documentation consistency scan (mandate §24).
 *
 * Scope: current-authority (v2) documents only. The v1 lineage (numbered layer
 * directories) is historical evidence and is deliberately excluded — history is
 * never rewritten to make a scan pass (OAES-DEC-017). The live decision
 * register is scanned from OAES-DEC-011 onward.
 *
 * Checks:
 *   1. every required v2 file exists;
 *   2. spec/KERNEL.md declares exactly the five frozen Kernel concepts;
 *   3. spec/STATE_MODEL.md declares exactly the four canonical States;
 *   4. no fenced state block in v2 authority docs lists a divergent State set;
 *   5. schemas match the canonical data model (state/actor enums, required fields);
 *   6. every relative markdown link in v2 authority docs resolves;
 *   7. adapters (CLAUDE.md, AGENTS.md) point to BOOTSTRAP.md and carry no
 *      divergent canonical definitions; BOOTSTRAP.md references the state files;
 *   8. no v2 authority doc presents "Decision" (or similar labels) as a State;
 *   9. runtime-state/project.json is structurally sound (format markers, states).
 *  10. the minimum Continue Card contract is present and internally aligned.
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

const KERNEL_CONCEPTS = ["Objective", "Knowledge", "State", "Action", "Actor"];
const KNOWLEDGE_STATES = ["Unknown", "Known", "Implemented", "Verified"];
const ACTOR_TYPES = ["Human", "AI", "Automation", "External System"];

const REQUIRED_FILES = [
  "README.md",
  "VERSION.md",
  "CHANGELOG.md",
  "BOOTSTRAP.md",
  "CLAUDE.md",
  "AGENTS.md",
  "CURRENT_STATE.md",
  "HANDOFF.md",
  "spec/README.md",
  "spec/KERNEL.md",
  "spec/CANONICAL_DATA_MODEL.md",
  "spec/STATE_MODEL.md",
  "spec/RUNTIME.md",
  "spec/VOCABULARY.md",
  "history/README.md",
  "schemas/objective.schema.json",
  "schemas/knowledge.schema.json",
  "schemas/action.schema.json",
  "schemas/actor.schema.json",
  "schemas/project.schema.json",
  "runtime-state/project.json",
  "reference-runtime/README.md",
  "examples/greeting-demo/README.md",
  "examples/greeting-demo/seed.project.json",
  "50-governance/decisions/dec-018-minimum-continue-card-contract.md",
];

/** v2 current-authority markdown documents (the scan scope). */
function authorityDocs() {
  const docs = [
    "README.md",
    "VERSION.md",
    "BOOTSTRAP.md",
    "CLAUDE.md",
    "AGENTS.md",
    "CURRENT_STATE.md",
    "HANDOFF.md",
    "history/README.md",
    "reference-runtime/README.md",
    "examples/greeting-demo/README.md",
  ];
  for (const f of readdirSync(join(ROOT, "spec"))) {
    if (f.endsWith(".md")) docs.push(`spec/${f}`);
  }
  for (const f of readdirSync(join(ROOT, "50-governance", "decisions"))) {
    const match = f.match(/^dec-(\d{3})-/);
    if (match && Number(match[1]) >= 11 && f.endsWith(".md")) {
      docs.push(`50-governance/decisions/${f}`);
    }
  }
  return docs;
}

const errors = [];
// Normalize CRLF so the scan is line-ending agnostic across checkouts.
const read = (rel) => readFileSync(join(ROOT, rel), "utf8").replace(/\r\n/g, "\n");

// 1. Required files
for (const rel of REQUIRED_FILES) {
  if (!existsSync(join(ROOT, rel))) errors.push(`missing required file: ${rel}`);
}

// 2. Kernel block
{
  const kernel = read("spec/KERNEL.md");
  if (!kernel.includes(KERNEL_CONCEPTS.join("\n"))) {
    errors.push("spec/KERNEL.md: canonical five-concept block missing or altered");
  }
}

// 3 + 4. State blocks: any fenced block starting with "Unknown\nKnown" must be
// exactly the four canonical States (catches a silently added fifth State).
{
  const stateModel = read("spec/STATE_MODEL.md");
  if (!stateModel.includes(KNOWLEDGE_STATES.join("\n"))) {
    errors.push("spec/STATE_MODEL.md: canonical four-state block missing or altered");
  }
  for (const rel of authorityDocs()) {
    const text = read(rel);
    for (const match of text.matchAll(/```text\n(Unknown\n[\s\S]*?)```/g)) {
      const lines = match[1].trim().split("\n");
      if (lines[1] === "Known" && lines.join("\n") !== KNOWLEDGE_STATES.join("\n")) {
        errors.push(`${rel}: a state block diverges from the canonical four States`);
      }
    }
  }
}

// 5. Schemas vs canonical data model
{
  const schema = (rel) => JSON.parse(read(rel));
  const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const knowledge = schema("schemas/knowledge.schema.json");
  if (!eq(knowledge.properties.state.enum, KNOWLEDGE_STATES)) {
    errors.push("schemas/knowledge.schema.json: state enum diverges from canonical States");
  }
  if (!eq(knowledge.required, ["id", "type", "content", "state", "parent", "depends_on", "source", "updated_at"])) {
    errors.push("schemas/knowledge.schema.json: required fields diverge from CDM");
  }
  const actor = schema("schemas/actor.schema.json");
  if (!eq(actor.properties.type.enum, ACTOR_TYPES)) {
    errors.push("schemas/actor.schema.json: actor type enum diverges from vocabulary");
  }
  if (!eq(schema("schemas/objective.schema.json").required, ["id", "title", "description", "success_criteria"])) {
    errors.push("schemas/objective.schema.json: required fields diverge from CDM");
  }
  if (!eq(schema("schemas/action.schema.json").required, ["id", "actor", "target_knowledge", "description", "created_at"])) {
    errors.push("schemas/action.schema.json: required fields diverge from CDM");
  }
  const action = schema("schemas/action.schema.json");
  if (!eq(action.properties.resulting_state.enum, KNOWLEDGE_STATES)) {
    errors.push("schemas/action.schema.json: resulting_state enum diverges from canonical States");
  }
}

// 6. Relative markdown links resolve
for (const rel of authorityDocs()) {
  const text = read(rel);
  for (const match of text.matchAll(/\]\(([^)#\s]+)(#[^)]*)?\)/g)) {
    const target = match[1];
    if (/^[a-z]+:\/\//i.test(target) || target.startsWith("mailto:")) continue;
    const resolved = resolve(join(ROOT, dirname(rel)), target);
    if (!existsSync(resolved)) {
      errors.push(`${rel}: broken relative link -> ${target}`);
    }
  }
}

// 7. Adapters and boot protocol
for (const adapter of ["CLAUDE.md", "AGENTS.md"]) {
  const text = read(adapter);
  if (!text.includes("BOOTSTRAP.md")) {
    errors.push(`${adapter}: must point to the canonical boot protocol BOOTSTRAP.md`);
  }
  if (/contains exactly|canonical (Knowledge )?States are/i.test(text)) {
    errors.push(`${adapter}: adapters must not restate canonical definitions (divergence risk)`);
  }
}
{
  const boot = read("BOOTSTRAP.md");
  for (const needed of ["runtime-state/project.json", "CURRENT_STATE.md", "HANDOFF.md", "spec/KERNEL.md"]) {
    if (!boot.includes(needed)) errors.push(`BOOTSTRAP.md: must reference ${needed}`);
  }
}

// 8. No forbidden label presented as a State in current-authority prose
{
  const forbidden = ["Hypothesis", "Decision", "Specification", "Pending", "In Progress", "Blocked", "Rejected", "Approved", "Deprecated"];
  for (const rel of authorityDocs()) {
    for (const line of read(rel).split("\n")) {
      for (const label of forbidden) {
        const pattern = new RegExp(`\\b${label}\\b[^.\\n]{0,40}\\bis an? (canonical |Kernel )?State`, "i");
        if (pattern.test(line) && !/\bnot\b|\bnever\b/i.test(line)) {
          errors.push(`${rel}: presents "${label}" as a State: ${line.trim().slice(0, 80)}`);
        }
      }
    }
  }
}

// 9. runtime-state/project.json structural soundness
{
  const project = JSON.parse(read("runtime-state/project.json"));
  if (project.format !== "oaes-project" || project.format_version !== "2.0.0") {
    errors.push("runtime-state/project.json: format markers diverge from CDM");
  }
  for (const k of project.knowledge ?? []) {
    if (!KNOWLEDGE_STATES.includes(k.state)) {
      errors.push(`runtime-state/project.json: ${k.id} has non-canonical state ${k.state}`);
    }
  }
  for (const a of project.actors ?? []) {
    if (!ACTOR_TYPES.includes(a.type)) {
      errors.push(`runtime-state/project.json: ${a.id} has non-canonical actor type ${a.type}`);
    }
  }
}

// 10. Minimum Continue Card contract
{
  const currentState = read("CURRENT_STATE.md");
  const requiredSections = [
    "Objective",
    "Current",
    "Next",
    "Blocker",
    "Repository",
    "Guard Rails",
  ];
  const sectionHeadings = [...currentState.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
  for (const section of requiredSections) {
    const count = sectionHeadings.filter((heading) => heading === section).length;
    if (count !== 1) {
      errors.push(`CURRENT_STATE.md: must contain exactly one "## ${section}" section`);
    }
  }
  if (sectionHeadings.length !== requiredSections.length) {
    errors.push("CURRENT_STATE.md: routine Continue Card must contain only the six approved sections");
  }

  const sectionBody = (heading) => {
    const marker = `## ${heading}\n`;
    const start = currentState.indexOf(marker);
    if (start === -1) return "";
    const remainder = currentState.slice(start + marker.length);
    const nextHeading = remainder.search(/^## /m);
    return nextHeading === -1 ? remainder : remainder.slice(0, nextHeading);
  };
  const objectiveIds = [...sectionBody("Objective").matchAll(/^- ID: `([^`]+)`$/gm)];
  if (objectiveIds.length !== 1) {
    errors.push("CURRENT_STATE.md: must expose exactly one Objective ID");
  }
  const nextActions = [...sectionBody("Next").matchAll(/^- Action: (.+)$/gm)];
  if (nextActions.length !== 1) {
    errors.push("CURRENT_STATE.md: must expose exactly one Next action");
  }
  const forbiddenRoutineSections = ["Roadmap", "Backlog", "History", "Architecture Summary", "Optional Next"];
  for (const section of forbiddenRoutineSections) {
    if (sectionHeadings.includes(section)) {
      errors.push(`CURRENT_STATE.md: routine Continue Card must not contain a "${section}" section`);
    }
  }
  if (!currentState.includes("https://github.com/yzfgzct2g2-cloud/Orbikt-AI-Engineering-Standard.git")) {
    errors.push("CURRENT_STATE.md: expected GitHub repository URL missing");
  }
  if (!currentState.includes("- Expected branch: `main`")) {
    errors.push("CURRENT_STATE.md: expected branch missing");
  }
  if (!/No Blind Retry/i.test(currentState)) {
    errors.push("CURRENT_STATE.md: No Blind Retry rule or reference missing");
  }

  const readme = read("README.md");
  if (!readme.includes("sole routine Continue Card")) {
    errors.push("README.md: must identify CURRENT_STATE.md as the sole routine Continue Card");
  }
  if (/\[CURRENT_STATE\.md\]\(CURRENT_STATE\.md\) and\s+\[HANDOFF\.md\]\(HANDOFF\.md\)/s.test(readme)) {
    errors.push("README.md: must not require HANDOFF.md for routine continuation");
  }
  if (!readme.includes("OAES-DEC-011…018")) {
    errors.push("README.md: current decision range must include OAES-DEC-018");
  }

  const project = JSON.parse(read("runtime-state/project.json"));
  if (objectiveIds.length === 1 && objectiveIds[0][1] !== project.objective?.id) {
    errors.push("CURRENT_STATE.md: Objective ID diverges from runtime-state/project.json");
  }

  const boot = read("BOOTSTRAP.md");
  if (!boot.includes("Ordinary continuation reads only CURRENT_STATE.md after Git verification.")) {
    errors.push("BOOTSTRAP.md: routine startup must point to CURRENT_STATE.md as the sole status view");
  }
  if (!boot.includes("Conditional authority reading")) {
    errors.push("BOOTSTRAP.md: conditional authority rule missing");
  }

  const handoff = read("HANDOFF.md");
  if (!handoff.includes("HANDOFF.md is not a routine status view.")) {
    errors.push("HANDOFF.md: must declare its conditional role");
  }
  if (!handoff.includes("Update this file only when")) {
    errors.push("HANDOFF.md: conditional update rule missing");
  }
  if (/At every checkpoint:[\s\S]{0,200}HANDOFF\.md/i.test(handoff)) {
    errors.push("HANDOFF.md: still requires routine checkpoint duplication");
  }

  const decisionPath = "50-governance/decisions/dec-018-minimum-continue-card-contract.md";
  if (existsSync(join(ROOT, decisionPath))) {
    const decision = read(decisionPath);
    for (const required of [
      "Supersedes OAES-DEC-016",
      "zero retries without new evidence",
      "one evidence-backed retry",
      "approved non-production feature branch",
    ]) {
      if (!decision.includes(required)) {
        errors.push(`${decisionPath}: required contract language missing -> ${required}`);
      }
    }
  }
  const priorDecision = read("50-governance/decisions/dec-016-repository-persisted-continuation.md");
  if (!priorDecision.includes("| Status | Superseded |")) {
    errors.push("OAES-DEC-016: must be marked Superseded");
  }
  if (!priorDecision.includes("| Superseded by | [OAES-DEC-018]")) {
    errors.push("OAES-DEC-016: superseding decision link missing");
  }
}

if (errors.length > 0) {
  console.error(`Documentation consistency scan FAILED (${errors.length} finding(s)):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`Documentation consistency scan passed (${authorityDocs().length} authority docs, ${REQUIRED_FILES.length} required files).`);
