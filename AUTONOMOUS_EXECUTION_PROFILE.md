# OAES Autonomous Execution Profile

| Field | Value |
| --- | --- |
| Identifier | OAES-AUTONOMOUS-EXECUTION-PROFILE |
| Type | Governance Document |
| Version | 1.0.0 |
| Authority | Mission execution governance; adopted through OAES-DEC-020 |
| Scope | Explicit engineering Missions in OAES and adopting projects |

## Purpose and integration

A Mission defines **what to achieve**; this Profile defines **how an Actor executes**
within that authorization. It is reusable by Codex, Claude Code, human operators,
scripts, and other coding agents across QA-Engine, AA01, Orbikt, Dispatch, LINE Expense
Ledger, and future projects. Naming a project here does not authorize work in it.

Enter through [BOOTSTRAP.md](BOOTSTRAP.md). This is an execution policy, not another
continuation file, agent framework, Runtime, schema, or canonical State. The frozen
[Kernel](spec/KERNEL.md), [specification-first authority](50-governance/decisions/dec-014-specification-first-authority.md),
[Continue Card contract](50-governance/decisions/dec-018-minimum-continue-card-contract.md),
and [owner-controlled emergency access](50-governance/decisions/dec-019-owner-controlled-break-glass.md)
remain authoritative. Adoption is recorded in
[OAES-DEC-020](50-governance/decisions/dec-020-autonomous-execution-profile.md).

Routine `continue` still uses CURRENT_STATE and exactly its one Next action. An
explicit Mission can authorize a new bounded assignment and its feature branch;
it does not silently override a substantive repository prohibition. Unresolved
Mission/OAES/repository conflicts require a Human Gate. Project Overlays specialize
this policy without weakening Human Gates. Tool availability is never authorization.

Mission, autonomy level, Overlay, Human Gate, PASS, and BLOCKED are governance labels
only; none adds a Kernel entity, canonical State, Runtime entity, or schema field.

## Autonomy levels

Use `AUTONOMY-L1`, `AUTONOMY-L2`, or `AUTONOMY-L3`. Mission shorthand `OAES-L1`,
`OAES-L2`, and `OAES-L3` means the corresponding level; these are execution labels,
not Knowledge States. L2 is the default for an explicit ordinary engineering Mission.

| Level | Authorized operations within Mission scope |
| --- | --- |
| AUTONOMY-L1 — Inspect Only | Read, search, Git status/log/diff, dependency inspection, inventory, benchmark existing behavior without modifying files, data, or environment. Use an existing read-only harness; if it writes artifacts, defer that operation to L2. |
| AUTONOMY-L2 — Safe Engineering | L1 plus branch and isolated worktree, source edits, tests, lint, typecheck, build, focused/regression/differential tests, benchmark, local app launch, browser/UI smoke tests, non-destructive refactor, diagnose/debug/repair/retry, Mission-caused regression repair, and local Git checkpoint commits. |
| AUTONOMY-L3 — Controlled High Impact | L2 plus only individually authorized operations: push, PR creation, staging deploy, schema migration rehearsal, external API integration, new dependency, model replacement, or data migration. Each remains subject to Human Gates. A bare L3 label is not blanket permission. |

L3 operations require explicit Mission authorization. Push/PR may instead be
explicitly authorized by the adopted Project Overlay. Installing already declared,
locked dependencies in an isolated local environment is L2; adding or upgrading a
dependency requires the relevant L3 authorization. A tool lacking safe local
configuration does not gain access to production under L2.

## Pre-flight and repository identity

Before any branch, worktree, edit, or commit, record the target repository from the
Mission or authoritative project declaration, then run:

```powershell
git rev-parse --show-toplevel
git remote -v
git status -sb
git branch --show-current
git rev-parse HEAD
```

For OAES itself, origin must identify
`yzfgzct2g2-cloud/Orbikt-AI-Engineering-Standard` (HTTPS or equivalent SSH), and the
tree must contain its governance documents. A directory name alone is insufficient.
For adopters, verify their declared repository, not the OAES repository. Report
`REPOSITORY_IDENTITY: PASS` only with actual absolute path, repository, branch, full
HEAD, and clean/modified status. No writes before PASS.

If wrong: `DO NOT MODIFY → LOCATE CORRECT REPOSITORY`. Mark
`CURRENT_WORKSPACE_NOT_OAES` for a wrong OAES candidate. Do not checkout, reset,
clean, stash, pull, merge, rebase, branch, or create a worktree there. Search only
Git metadata in reasonable project locations, starting with the user's Documents
directory and known Codex/project directories; do not read unrelated project content.

- One correct clone: change working directory and repeat the identity gate.
- Multiple clones: report each absolute path, branch, full HEAD, origin, status,
  tracked modification count, untracked count, and last commit date. Mark a
  `PREFERRED_CANDIDATE` only with evidence of canonical use (expected location,
  correct remote, main, clean, current remote HEAD). If evidence does not settle
  selection, stop at `BLOCKED AT: Multiple OAES clones`; do not modify candidates.
- No clone: verify the declared remote with `git ls-remote <url> HEAD`. Clone only
  into a verified nonexistent safe path, never over an unknown directory, and repeat
  identity verification. Report access, permission, or clone failure without mutation
  of an existing candidate. Clone requires write authority (L2 or explicit permission).

After identity, fetch without merging where authorized (required by OAES boot),
compare HEAD with the expected remote branch, and inspect staged, unstaged, untracked,
and local-only commits. Unknown changes stop at
`BLOCKED AT: Existing OAES working-tree changes` (use the project name for adopters).
Do not stash, discard, or commit unknown work. Expected Mission-owned local commits
in its isolated branch are checkpoints, not unexpected changes; routine continuation
still obeys DEC-018's stricter synchronization gate.

Pre-flight also records: applicable OAES version, Project Overlay, project AGENTS.md
and other adapters, acceptance criteria, baseline, security/privacy risks, concurrent
work and worktree inventory. Missing material acceptance or unresolved authority is
a Human Gate; gather safe evidence first when it can settle the issue autonomously.

## Plan, isolation, and baseline

Plan a bounded change with affected files, verification commands, evidence locations,
and rollback approach. All source-changing work defaults to **branch + isolated
worktree**; reuse verified existing isolation. Use a non-production feature branch
for incomplete work. Respect project naming (OAES uses `codex/` for Codex-created
branches). Verify any in-repository worktree directory is ignored; an external sibling
worktree also avoids modifying the original checkout.
Repository governance may explicitly permit an exception for documentation-only or
very small local-only work; record the applicable exception and isolation choice.

Before modifying, save base HEAD, exact baseline commands/results, existing failure
signatures, coverage if available (otherwise record unavailable), and benchmark inputs,
environment and measurements when applicable. Record why a check is not applicable;
do not claim unmeasured coverage or performance. Use the existing toolchain and fixtures.

When baseline failures exist, use `NO_NEW_REGRESSION`: compare like-for-like commands,
environment, inputs and failure identities, not just failure counts. Focused tests for
new behavior must pass. Every remaining failure must match documented unrelated
baseline evidence; a new or worsened failure blocks acceptance. Do not hide failures
by deleting tests, weakening assertions, changing thresholds, or excluding suites.
Record the baseline failure set, head failure set, new failures, changed failure
signatures, and coverage differential where applicable. Unrelated baseline debt
does not permanently block a Mission that meets this differential and its acceptance.

Rollback is limited to understood Mission-owned edits using a reviewed reverse patch
or non-destructive revert. Preserve baseline and other sessions' work. Unknown file
deletion, data restoration that overwrites user data, or destructive Git needs a Human
Gate. Isolation is not a backup of production data.

## Autonomous execution loop

```text
MISSION
  ↓
PRE-FLIGHT
  ↓
PLAN
  ↓
ISOLATED EXECUTION
  ↓
VERIFY
  ↓
FAIL? ─ YES → DIAGNOSE → REPAIR → VERIFY
  │ NO
  ↓
SECURITY / PRIVACY / GOVERNANCE GATE
  ↓
ACCEPTANCE
  ↓
CHECKPOINT
  ↓
DONE
```

Check authorization **before each action**, not only at the final gate. Progress
updates are not requests to reauthorize ordinary work. Continue through normal
engineering errors until acceptance passes, a Human Gate is reached, or the retry
budget is exhausted. Reaching acceptance proceeds through checkpoint and completion
report before stopping; merely writing code is not DONE.

### Self-repair and retry

Lint/type/build/focused-test failures, Mission-caused regressions, dependency/import
errors, changed UI selectors, fixture defects, implementation bugs, and benchmarks
below acceptance follow `DIAGNOSE → REPAIR → VERIFY`. Repair within the authorized
scope. A missing import may be fixed at L2; adding a new dependency is still L3.

Do not opportunistically repair unrelated technical debt, UI bugs, or coverage debt.
Demonstrate a direct Mission blocker first; any necessary scope expansion goes through
a Human Gate. Do not lower acceptance criteria to manufacture PASS.

For one root cause allow at most **three substantively different repair attempts**.
Record root cause, diagnostic evidence, changed hypothesis/condition, patch or action,
verification result, and attempt number. Cosmetic edits, reworded commands, switching
agents/tools, or elapsed time do not reset the counter. A new root cause needs evidence,
not relabeling. If three repairs do not resolve it, preserve work and report
`BLOCKED: RETRY_BUDGET_EXCEEDED`.

This ceiling does not grant three blind retries. DEC-018 still requires **zero retries
without new evidence**. A verified transient change permits at most **one evidence-backed
retry** of that failed action; if its failure signature recurs, stop under that retry
gate. Materially different code repairs and unchanged-action transient retries are
distinct. An unmet retry gate ends the available budget even below three. If failure
classification is uncertain, gather diagnostics instead of repeating the failed action;
if safe evidence cannot resolve it, report the unresolved authority/resource decision
at a Human Gate. Keep DEC-018's failed action, evidence, classification, retry gate,
and required changed condition in the existing project blocker/report mechanism.

### Blocked conditions

An ordinary engineering bug is not BLOCKED; apply the authorized repair loop.
BLOCKED applies to a Human Gate, unresolved architecture decision, unavailable
permission or credential, destructive risk, privacy/security conflict, unavailable
external dependency, exhausted retry budget, insufficient evidence, or governance
conflict that prevents safe progress. Record the concrete condition and required
resolution; do not request renewed authorization for routine in-scope repairs.

## Human Gates

Stop before the gated action and provide a concrete, reviewable proposal: affected
resources, reason, evidence, impact, safe alternatives/rollback, and exact human
decision required. A prior explicit approval of that exact action and scope remains
valid; an autonomy level or broad Mission is not such approval. Never infer permission
from urgency or an available credential. Resume only within the decision received.

| Gate | Actions or conditions requiring a human decision |
| --- | --- |
| Data Loss | Destructive deletion (including production data), unknown file deletion, destructive migration, overwrite of user data, destructive reset, force checkout, force push, history rewrite. Never perform these autonomously. |
| Production | Production deploy, production DB mutation, production secrets use/change, production permission change. |
| Privacy / Security | Personal data sent to a new third party; real long-term-care data leaving its approved environment; new cloud AI or STT; authentication/authorization boundary, secrets handling, encryption or security policy changes. Preserve DEC-019 owner authorization and environment isolation for emergency access. |
| Domain / Policy | Create/delete formal QA Rules, Rule semantics, business meaning of thresholds, generalizing special cases, or automating previously human professional decisions. |
| Product Direction | Two or more significant mutually exclusive directions that acceptance criteria cannot decide. |
| Governance / Scope | Unresolved Mission/OAES/repository conflict, frozen-model change, unauthorized L3 action, or work beyond Mission scope. |

### Privacy and external services

Use **LOCAL-FIRST** for long-term-care, medical, identity, and contact information.
Tests use synthetic or anonymized fixtures. Do not autonomously upload real content,
put it in issues or logs, or transmit it to a new AI API, STT vendor, or external SaaS. Evidence must
also respect this rule, including screenshots and command output.

First introduction of AI API, STT, SaaS, cloud DB, telemetry, or analytics requires a
Human Gate even in L3. Before approval provide: purpose, transmitted data, retention,
region, security, cost, and fallback. Existing integrations may be exercised only
within their approved data/environment scope. Local launches must use local/test
configuration; a smoke test that triggers an external or production effect is gated.

## Evidence, verification, and Git

Every PASS must cite applicable evidence: command and exit/result, test output, diff,
benchmark, code reference, screenshot/browser result, or log. These are evidence
types, not a requirement to manufacture every type for every Mission. Record inputs
and scope so results can be reproduced. Assumptions such as "should work" are not
acceptance evidence. Mark non-applicable checks with a reason.

Engineering tool preference: filesystem/code → Git → CLI → automated tests → browser
automation → Computer Use. Use GUI primarily for visual validation, smoke tests, and
workflow verification when needed. Do not substitute a screenshot for a missing test
of behavior it cannot demonstrate, or GUI clicks for an available deterministic CLI.

Before DONE require acceptance PASS, focused tests PASS, regression or differential
no-new-regression PASS, applicable security/privacy gates PASS, known Git state, and a
complete report. For governance-only work, focused verification includes requirement
review and the tabletop cases below; a tabletop does not prove runtime enforcement.
For changes in this repository, run `cd reference-runtime && npm run check:all` once
after the relevant change, following No Blind Retry if it fails.

Review the final diff and stage only understood Mission files. Local checkpoint
commits are L2. Never autonomously force-push, destructively reset, or rewrite history.
Push/PR require explicit Mission or Project Overlay permission; production actions
remain gated. A local-only checkpoint can complete a Mission whose acceptance does
not require publication, but is not remote-confirmed and remains tied to this computer.
If publication is authorized, verify the remote contains the commit after pushing.
Use [HANDOFF.md](HANDOFF.md) and DEC-018 for safe interruption and routine checkpoints.

The report includes repository identity/path, branch/base and final HEAD, changed
files, acceptance evidence, baseline comparison, security/privacy disposition,
tabletop results if applicable, repair attempts, final Git status, local/remote
checkpoint distinction, limitations, and one next action. A blocked report includes
`BLOCKED AT`, `REASON`, `SAFE STATE`, `EVIDENCE`, and `REQUIRED HUMAN DECISION`.

## Project Autonomous Execution Overlay

Keep project details in the adopting project's existing governance location; link
this Profile instead of copying it. A minimal Overlay declares:

- Project identity, authoritative repository, owner/approval route and applicable
  project adapters/governance.
- Default autonomy, explicit push/PR permissions and destinations, and references
  to individually Mission-authorized L3 operations. An Overlay alone cannot authorize
  other L3 operations; absent permission means no such operation is authorized.
- Setup/baseline/focused/regression/benchmark/UI commands and safe local environment.
- Data classes, approved services, domain gates, evidence locations and acceptance
  conventions, with tighter project restrictions preserved.

### QA-Engine Autonomous Execution Overlay

This minimal governance Overlay applies when explicitly selected for QA-Engine.
It does not select a QA-Engine clone, assert its baseline, or authorize implementation.
Obtain repository identity and executable commands from that project's own governance.
Default: AUTONOMY-L2; no push, PR, deployment, or additional service permission implied.

- **Formal QA Rule:** create, delete, semantic change, and domain threshold change
  require Human Gate. Do not promote a special case to a formal Rule autonomously.
- **Manual Debug evidence:** anonymized, provenance preserved, no fabricated
  provenance, uncertainty explicit. Retain safe source identifiers/transform history;
  if anonymization prevents a claim from being traced, disclose that limitation.
- **Voice:** new cloud STT, external ASR, or speech retention requires Human Gate.
  Local ASR benchmarks, prototypes and model evaluation are L2 with existing approved
  local tools/models and synthetic/anonymized inputs. Installing new dependencies or
  replacing the adopted model still needs L3 authorization; evaluation is not replacement.
- **Scope:** this OAES governance Mission does not perform R1-B classification,
  Realtime ASR implementation, QA Rule edits, QA-Engine baseline repair, deployment,
  production mutation, or Orbikt-Dispatch changes.

## Tabletop validation

Replay each case against the cited policy, recording the action and rationale. All
seven required cases A–G and the additional retry-budget case H must match before
tabletop PASS. These are synthetic desk
scenarios; never perform the destructive action to test a gate.

| Case / input | Expected disposition | Policy trace / observable decision |
| --- | --- | --- |
| A: L2 focused test fails because of a Mission patch; diagnostic output identifies an in-scope defect | AUTO-REPAIR | Self-repair: record evidence, make a different repair, rerun focused verification within budget; no routine permission request. |
| B: completing the Mission would require production DB deletion | HUMAN GATE | Data Loss and Production: stop before executing deletion; report proposal and safe state. |
| C: QA-Engine solution would change formal QA Rule semantics | HUMAN GATE | Domain / Policy and QA-Engine Overlay: stop before Rule edit; request a scoped domain decision. |
| D: opened directory has an origin different from the Mission target | DO NOT MODIFY → LOCATE CORRECT REPOSITORY | Identity gate: inspect Git metadata only, locate candidates, repeat gate; ambiguous clones require human selection. |
| E: baseline has unrelated failing tests and Mission-focused tests pass | NO_NEW_REGRESSION DIFFERENTIAL | Compare failure identities under equivalent inputs; accept only if all residual failures match unrelated baseline and none is new/worse. |
| F: unchanged command failed; no new evidence | NO BLIND RETRY | DEC-018: zero unchanged retries; diagnose, never use the three-repair ceiling as permission to repeat. |
| G: L3 integration would introduce third-party cloud STT for real long-term-care speech | HUMAN GATE | Privacy, first external service, and Voice gates still apply; stop before transmission and prepare the seven service disclosures. |
| H: third materially different, evidence-backed repair leaves the same root cause unresolved; no stricter gate stopped earlier | BLOCKED: RETRY_BUDGET_EXCEEDED | Preserve local work, record attempts and required changed condition, stop. |

## Future Mission syntax

```text
Mission: <bounded outcome>
Repository: <expected owner/repository>
Autonomy: OAES-L2
Overlay: <project overlay path or QA-Engine section of this Profile>
Acceptance:
- <observable outcome and verification command/evidence>
- Privacy PASS
- No-New-Regression PASS
Scope exclusions: <work that must not be performed>
L3 authorization: none
Human Gates: <applicable Profile and Overlay gates; exact prior approvals if any>
Stop Condition:
- Acceptance verified, local checkpoint and report complete
- Human Gate
- Retry Budget Exhausted
```

An illustrative future QA-Engine Mission could require 47/47 evidence dispositions,
44 usable evidence items under controlled classification, and a Rule Candidate
Inventory as its endpoint, explicitly excluding production Rule implementation.
Those numbers are example acceptance inputs, not claims verified by this Profile.
