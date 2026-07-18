# Decision: Repository-Persisted Cross-Session Continuation

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-016 |
| Title | The repository, not any conversation, is the continuation medium |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Repository owner mandate, recorded by OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Record that all state needed to continue OAES work is persisted in repository files,
so any future Actor (Claude Code, Codex, ChatGPT, human, CI) can continue solely from
the repository.

## Scope

- The continuation contract: [BOOTSTRAP.md](../../BOOTSTRAP.md),
  [CURRENT_STATE.md](../../CURRENT_STATE.md), [HANDOFF.md](../../HANDOFF.md),
  [`runtime-state/project.json`](../../runtime-state/project.json), and the adapter
  files [CLAUDE.md](../../CLAUDE.md) and [AGENTS.md](../../AGENTS.md).

## Non-Scope

- The runtime persistence format itself
  ([CANONICAL_DATA_MODEL.md](../../spec/CANONICAL_DATA_MODEL.md)).

## Dependencies

- [OAES v2 Runtime Specification](../../spec/RUNTIME.md)

## Interfaces

- **Inbound:** every implementation session begins by reading the continuation files.
- **Outbound:** builds on [OAES-DEC-014](dec-014-specification-first-authority.md).

## Problem

AI-assisted engineering sessions die with their context windows. If continuation
depends on chat transcripts, the project is hostage to one tool, one vendor, and one
conversation's survival. The Foundation lineage already held "memory outlives
sessions" as a principle; v2 must make it operational and machine-readable.

## Options Considered

1. **Conversation export / transcript archives.** Complete but unstructured,
   provider-specific, privacy-hazardous, and unreadable by a runtime.
2. **Repository-persisted state: machine-readable JSON as authority, human-readable
   projections beside it.** Tool-agnostic and diffable; requires checkpoint
   discipline to stay current.

## Decision

Option 2. Machine-readable `runtime-state/project.json` is authoritative for Runtime
execution; `CURRENT_STATE.md` and `HANDOFF.md` are synchronized human-readable
projections; `BOOTSTRAP.md` is the single canonical boot protocol; `CLAUDE.md` and
`AGENTS.md` are thin adapters pointing at it and must not contain divergent
governance. Every checkpoint updates these files before commit. No session may
require conversation history.

## Consequences

- Easier: any Actor resumes from a cold clone; audits read plain files.
- Harder: every checkpoint pays the cost of updating continuation files.

## Future Extension

- Additional adapter files for new Actor tools may be added; all must point to
  BOOTSTRAP.md.

## Related Documents

- [BOOTSTRAP.md](../../BOOTSTRAP.md)
- [OAES v2 Canonical Data Model](../../spec/CANONICAL_DATA_MODEL.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-18 | OAES Standards Committee | Initial record. |
