# Continue Card

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-CURRENT-STATE |
| Title | Current Repository State |
| Type | Registry Document |
| Version | 2.1.0 |
| Status | Active |
| Authority | Current (OAES v2) — bounded projection of [`runtime-state/project.json`](runtime-state/project.json) |
| Author | OAES Standards Committee |
| Approved | 2026-07-24 |

`runtime-state/project.json` remains authoritative for Runtime state. Live Git remains
authoritative for repository facts. This card is the sole routine continuation view.

## Objective

- ID: `obj-implement-current-state-continue-card`
- Completion: A new Actor can verify Git, read this one bounded card, identify one
  Next action, and continue without routine loading of other OAES authority.

## Current

- Position: The minimum Continue Card contract is implemented through
  [OAES-DEC-018](50-governance/decisions/dec-018-minimum-continue-card-contract.md).
- Validation: `cd reference-runtime && npm run check:all` — passed for this checkpoint
  with zero failures.
- Checkpoint status: derive from live Git. It is committed when the working tree is
  clean and HEAD contains this card; it is remote-confirmed only when fetched
  `origin/main` equals local HEAD.

## Next

- Action: Wait for human review; do not begin an adapter or modify another repository.

## Blocker

- None.

If a failure occurs, follow No Blind Retry in
[OAES-DEC-018](50-governance/decisions/dec-018-minimum-continue-card-contract.md):
record the failed action, evidence, classification, retry gate, and required changed
condition. Without new evidence, retry zero times.

## Repository

- Expected GitHub: `https://github.com/yzfgzct2g2-cloud/Orbikt-AI-Engineering-Standard.git`
- Expected branch: `main`
- Live facts: fetch, then derive local HEAD, `origin/main`, ahead/behind, and
  working-tree state from Git. Stored commit claims never override live Git.
- Stop on a wrong remote or branch, unexpected local changes, or any ahead, behind,
  or divergent relationship. Preserve local work; do not auto-correct.

## Guard Rails

- Prohibited: new continuation file, Runtime/Kernel/State/schema changes, AA01 or
  Orbikt adaptation, destructive Git, force-push, and publishing secrets.
- Approval: stop for destructive action, protected-branch incomplete work, unclear
  authority, or any frozen-model change.
- Validation: run `cd reference-runtime && npm run check:all` once after a relevant
  change; do not repeat a failure without new evidence.
- Branches: completed validated checkpoints may use the authorized continuation
  branch; incomplete checkpoints require an approved non-production feature branch.
- Conditional detail: read [HANDOFF.md](HANDOFF.md) only when an approval boundary or
  exceptional recovery condition requires it.
