# OAES Universal Boot Protocol

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-BOOTSTRAP |
| Title | Universal Boot Protocol |
| Type | Governance Document |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

This is the **single canonical boot protocol** for every Actor continuing this
repository — Claude Code, Codex, ChatGPT, human developers, CI, or any other tool.
Adapter files ([CLAUDE.md](CLAUDE.md), [AGENTS.md](AGENTS.md)) point here and must
never contain divergent governance ([OAES-DEC-016](50-governance/decisions/dec-016-repository-persisted-continuation.md)).

## Protocol

You are continuing the OAES repository.

Do not assume conversation history.

The repository is the only source of truth.

1. **Observe** the current repository state: `git status`, `git branch --show-current`,
   `git log --oneline -5`.
2. **Identify the current Objective**: read
   [`runtime-state/project.json`](runtime-state/project.json) (machine-readable
   authority) and [CURRENT_STATE.md](CURRENT_STATE.md) (human-readable projection).
3. **Read persisted Knowledge and its State** from the same files.
4. **Inspect the latest Decision Records**
   ([50-governance/decisions/](50-governance/decisions/), OAES-DEC-011 onward is the
   v2 era) **and the latest checkpoint** ([HANDOFF.md](HANDOFF.md)).
5. **Determine the highest-value eligible next Action** using the Runtime rule
   ([spec/RUNTIME.md](spec/RUNTIME.md)): what Action most improves the current
   Knowledge toward satisfying the Objective?
6. **Execute only actions that remain within the frozen Kernel
   ([spec/KERNEL.md](spec/KERNEL.md)) and current authorization.** The approval
   boundaries are listed in [HANDOFF.md](HANDOFF.md).
7. **Update persisted Knowledge** (`runtime-state/project.json`) **and the
   human-readable handoff state** (CURRENT_STATE.md, HANDOFF.md).
8. **Validate the result**: `cd reference-runtime && npm install && npm run check:all`.
9. **Commit and push the checkpoint** (focused conventional commit; verify local and
   remote heads align).
10. **Continue** until the current authorized Objective is complete or a genuine
    approval boundary is reached.

## Authority Order

1. Existing repository evidence
2. The accepted OAES v2 mandate (recorded in OAES-DEC-011…017)
3. Decision Records
4. Governance documents
5. Journals and historical notes
6. Implementation code

Specifications govern implementation
([OAES-DEC-014](50-governance/decisions/dec-014-specification-first-authority.md)).
The OAES v1 lineage is historical, not current authority
([history/README.md](history/README.md)).

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial universal boot protocol. |
