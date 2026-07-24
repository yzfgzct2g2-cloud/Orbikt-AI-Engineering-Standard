# Decision: Minimum Continue Card Contract

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-018 |
| Title | CURRENT_STATE is the bounded routine Continue Card |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Repository owner mandate, recorded by OAES Standards Committee |
| Approved | 2026-07-24 |
| Supersedes | [OAES-DEC-016](dec-016-repository-persisted-continuation.md) |

## Purpose

Define the minimum operational contract by which any Actor resumes OAES work from a
confirmed GitHub checkpoint without conversation history or broad routine context.
This record supersedes OAES-DEC-016 while preserving its repository-persisted,
tool-neutral continuation principle.

## Scope

- Routine continuation through [CURRENT_STATE.md](../../CURRENT_STATE.md).
- Update responsibility for `runtime-state/project.json`, CURRENT_STATE, and
  [HANDOFF.md](../../HANDOFF.md).
- GitHub/local-copy continuity, safe interruption, and No Blind Retry.

## Non-Scope

- The frozen Kernel, Runtime behavior, canonical State Model, persisted-project
  schema, general incident management, or a `continue` CLI.

## Dependencies

- [OAES v2 Runtime Specification](../../spec/RUNTIME.md)
- [OAES v2 Canonical Data Model](../../spec/CANONICAL_DATA_MODEL.md)

## Interfaces

- **Inbound:** [BOOTSTRAP.md](../../BOOTSTRAP.md) implements the routine entry and
  conditional-reading rules.
- **Outbound:** CURRENT_STATE projects current operational state; HANDOFF retains
  detailed conditional governance and exceptional handoff information.

## Problem

OAES-DEC-016 made continuation durable but required every routine session to load and
update multiple projections. That burden duplicates status, increases drift risk, and
obscures the single Objective and next Action that an interrupted Actor needs.

## Options Considered

1. **Keep JSON, CURRENT_STATE, and HANDOFF as equal routine views.** Preserves the
   original rule but retains its duplication and context cost.
2. **Create another continuation file or generated service.** Could be bounded, but
   adds a drift surface or new runtime mechanism.
3. **Use CURRENT_STATE as the one bounded routine Continue Card.** Reuses an existing
   projection, keeps JSON authoritative for Runtime state, and leaves HANDOFF
   available only when its subject is relevant.

## Decision

Option 3.

### Authority and Update Cadence

- Confirmed pushed GitHub history is the location-independent shared repository SSOT.
  Local repositories are working copies and may contain newer work.
- `runtime-state/project.json` remains authoritative for Runtime state and is updated
  when that authoritative state changes.
- CURRENT_STATE is the single routine human-readable Continue Card and is updated at
  every routine continuation checkpoint.
- HANDOFF is updated only when its approval boundaries, exceptional handoff
  information, human decisions, or governance subject changes.
- Ordinary startup verifies Git and then reads CURRENT_STATE. Runtime, Kernel,
  decisions, HANDOFF, and history are loaded only when the current Next action,
  Guard Rails, an authority conflict, or an approval boundary requires them.
- This contract creates no new State Model, persisted schema, Runtime, or SSOT.

### Continue Card

CURRENT_STATE exposes exactly six routine fields: Objective, Current, Next, Blocker,
Repository, and Guard Rails. It shows one active Objective and exactly one Next
action. Repository identity and expected branch are persisted; actual HEAD, remote
HEAD, synchronization, and working-tree facts are derived from live Git.

### GitHub and Local Work

The expected GitHub repository must be verified before continuation. A successful
`git push` is insufficient: the Actor must fetch or query the remote and confirm that
the intended remote ref contains the checkpoint commit. Dirty, ahead, behind, or
divergent state stops ordinary continuation. GitHub is never justification to discard
unexpected local work; reset, clean, stash, rebase, overwrite, or force-push requires
explicit human approval.

### Safe Interruption

Incomplete work may be committed and pushed only on an
approved non-production feature branch when its diff is understood, unrelated work is
excluded, no secret,
credential, prohibited personal data, or destructive artifact is present, minimum
relevant validation has run, the incomplete state and one Next action are recorded,
and remote presence is verified. Incomplete work must not be pushed to a protected or
production branch without explicit approval.

Unsafe work is not committed or pushed. The Actor preserves the working copy without
reset, clean, stash, rebase, or overwrite; reports the repository path, branch, HEAD,
affected files, evidence, and one Next action; states that continuity remains tied to
the current computer; and stops.

### No Blind Retry

The same failed action is the same command or narrowly defined task against materially
unchanged code, inputs, dependencies, environment, target, and expected result. New
evidence is a new diagnostic observation; changed code, configuration, input,
dependency, or environment; a verified external-state change; or human authorization
that changes the conditions. Time passing, switching AI tools, or rewording the
action is not new evidence.

There are zero retries without new evidence. A verified transient change permits at
most one evidence-backed retry. If the same failure signature recurs, the Actor
persists Blocker with the failed action, observed evidence, failure classification,
retry gate, and required changed condition, then stops.

The Actor must also stop when evidence is insufficient, the retry gate is unmet, a
correction requires approval, or continuation risks a destructive, secret-bearing,
or production effect.

An environment defect is supported by evidence tying the failure to machine state,
toolchain, permissions, network, credentials, or dependency availability rather than
repository behavior. A code defect is supported after the relevant environment is
validated and evidence ties the failure to repository code or configuration. If the
classification is uncertain, the single Next action gathers evidence; it does not
repeat the failed action.

## Consequences

- Easier: routine continuation requires one bounded project-status file after Git
  verification; one Objective and one Next action remain visible.
- Harder: checkpoint discipline must keep JSON and CURRENT_STATE aligned when Runtime
  state changes, and exceptional local-only work cannot be recovered elsewhere until
  a safe remote checkpoint exists.

## Related Documents

- [BOOTSTRAP.md](../../BOOTSTRAP.md)
- [CURRENT_STATE.md](../../CURRENT_STATE.md)
- [HANDOFF.md](../../HANDOFF.md)
- [OAES-DEC-014](dec-014-specification-first-authority.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-24 | OAES Standards Committee | Supersedes OAES-DEC-016 with the minimum Continue Card contract. |
