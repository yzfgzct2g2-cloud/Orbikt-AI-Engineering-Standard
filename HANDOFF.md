# Handoff

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-HANDOFF |
| Title | Cross-Session Handoff |
| Type | Registry Document |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

Every implementation session — human or AI — begins here (or via an adapter that
points here). No conversation history is required or assumed.

## How to Continue

1. Follow the canonical boot protocol: [BOOTSTRAP.md](BOOTSTRAP.md).
2. Read [CURRENT_STATE.md](CURRENT_STATE.md) and
   [`runtime-state/project.json`](runtime-state/project.json) for the exact position.
3. Validate before and after any change:

   ```bash
   cd reference-runtime
   npm install
   npm run check:all   # typecheck + tests + docs consistency scan
   ```

4. At every checkpoint: update `runtime-state/project.json`, CURRENT_STATE.md, and
   this file; run validation; make a focused conventional commit; push; verify
   local/remote alignment (`git status`, `git log -1 --oneline`, `git branch -vv`).

## Approval Boundaries (stop and ask the repository owner)

- Any Kernel change or additional canonical State ([spec/KERNEL.md](spec/KERNEL.md) is frozen).
- Deleting existing work, rewriting git history, force-pushes, or destructive commands.
- Moving an existing release tag.
- Merging `feat/oaes-v2-reference-runtime` into `main` (reserved to the owner).
- Publishing anything that could contain secrets or personal data.

Routine implementation decisions inside the frozen specification do **not** require
approval; continue autonomously and checkpoint.

## Working Agreements

- Specification governs implementation ([OAES-DEC-014](50-governance/decisions/dec-014-specification-first-authority.md)).
- The v1 lineage (numbered layer directories) is historical evidence — never edit it
  to make checks pass ([OAES-DEC-017](50-governance/decisions/dec-017-v1-lineage-preservation.md)).
- Machine-readable state is authoritative; markdown projections are synchronized at
  checkpoints ([OAES-DEC-016](50-governance/decisions/dec-016-repository-persisted-continuation.md)).
- Conventional commits; never commit `node_modules/`, `dist/`, `.demo/`, `.env`, or
  any credential.

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial handoff protocol. |
