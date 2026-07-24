# Handoff

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-HANDOFF |
| Title | Conditional Cross-Session Handoff Governance |
| Type | Registry Document |
| Version | 2.1.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-24 |

HANDOFF.md is not a routine status view. Routine continuation uses
[BOOTSTRAP.md](BOOTSTRAP.md) and the bounded
[CURRENT_STATE.md](CURRENT_STATE.md) Continue Card. Read this file only when a Guard
Rail, approval boundary, exceptional recovery condition, or human decision requires
detailed context.

## Approval Boundaries

Stop and ask the repository owner before:

- changing the frozen Kernel or adding a canonical State;
- deleting work, rewriting Git history, force-pushing, or using destructive commands;
- moving an existing release tag;
- deleting a retained historical branch;
- publishing secrets, credentials, personal data, or unsafe artifacts;
- pushing incomplete work to a protected or production branch;
- resolving an authority contradiction that repository evidence does not settle.

Routine implementation inside the frozen specification may continue autonomously
when the Continue Card authorizes it.

## Exceptional Continuation

- Wrong remote or branch, unexpected local changes, or ahead/behind/divergent history
  stops ordinary continuation. Preserve the working copy and report the evidence.
- Safe incomplete work may be checkpointed only on an approved non-production feature
  branch under [OAES-DEC-018](50-governance/decisions/dec-018-minimum-continue-card-contract.md).
- Unsafe-to-commit work remains local: do not commit, push, reset, clean, stash,
  rebase, or overwrite it. Report that cross-computer recovery is unavailable until
  a safe preservation path is approved.
- No Blind Retry and failure classification are normative in OAES-DEC-018.

## Update Rule

Update this file only when its approval boundaries, exceptional handoff information,
human decisions, or governance subject changes. Do not duplicate routine Objective,
Current, Next, validation, branch, commit, or remote-synchronization status here.

## Working Agreements

- Machine-readable Runtime state remains authoritative in
  [`runtime-state/project.json`](runtime-state/project.json).
- CURRENT_STATE is the sole routine human-readable continuation projection.
- Confirmed pushed GitHub history is the shared location-independent repository SSOT;
  local working copies may contain newer work and must never be discarded
  automatically.
- Conventional commits; never commit `node_modules/`, `dist/`, `.demo/`, `.env`, or
  credentials.

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial handoff protocol. |
| 2.0.1 | 2026-07-18 | OAES Standards Committee | Recorded owner-authorized promotion to main. |
| 2.1.0 | 2026-07-24 | OAES Standards Committee | Removed routine status duplication and retained conditional governance only. |
