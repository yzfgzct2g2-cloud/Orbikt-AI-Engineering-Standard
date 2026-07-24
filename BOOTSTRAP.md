# OAES Universal Boot Protocol

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-BOOTSTRAP |
| Title | Universal Boot Protocol |
| Type | Governance Document |
| Version | 2.1.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-24 |

This is the single canonical entry protocol for every Actor. The normal entry intent
is `continue`; it is a protocol word, not a CLI implementation. No conversation
history is required.

## Routine Continue

1. Identify the repository and confirm that `origin` is
   `https://github.com/yzfgzct2g2-cloud/Orbikt-AI-Engineering-Standard.git`.
2. Fetch `origin` without merging.
3. Confirm that the current branch is the expected `main` branch.
4. Compare local HEAD with the fetched remote branch.
5. Inspect the working tree, including untracked files.
6. Stop and report any wrong remote or branch, dirty tree, ahead, behind, or divergent
   relationship. Never reset, clean, stash, rebase, merge, switch, overwrite, or
   force-push as an automatic correction.
7. Read CURRENT_STATE, check Blocker and Guard Rails, and report the repository
   relationship, one Objective, Current position, one Next action, and any stop
   condition.
8. Execute exactly the one Next action.

Ordinary continuation reads only CURRENT_STATE.md after Git verification.

## Conditional authority reading

Read additional authority only when:

- Next cites it;
- Guard Rails require it;
- repository evidence contradicts the Continue Card;
- a Kernel or canonical State change is implicated; or
- an approval boundary is unclear.

Conditional sources include [`runtime-state/project.json`](runtime-state/project.json)
for authoritative Runtime state, [HANDOFF.md](HANDOFF.md) for detailed governance,
[spec/RUNTIME.md](spec/RUNTIME.md) for selection behavior,
[spec/KERNEL.md](spec/KERNEL.md) for frozen-model boundaries, and current Decision
Records. Specifications govern implementation
([OAES-DEC-014](50-governance/decisions/dec-014-specification-first-authority.md)).

## Checkpoint and Stop

When Runtime state changes, update `runtime-state/project.json`. At every routine
continuation checkpoint, update CURRENT_STATE. Update HANDOFF only when its approval
boundaries, exceptional handoff information, human decisions, or governance subject
changes. Run the required validation once, make a focused commit, push to the
authorized branch, fetch or query the remote, verify that it contains the commit, and
stop.

For No Blind Retry, GitHub/local-copy rules, and safe interruption, follow
[OAES-DEC-018](50-governance/decisions/dec-018-minimum-continue-card-contract.md).

## Authority Order

1. Existing repository evidence
2. The accepted OAES v2 mandate (recorded in OAES-DEC-011 onward)
3. Decision Records
4. Governance documents
5. Journals and historical notes
6. Implementation code

Specifications govern implementation
([OAES-DEC-014](50-governance/decisions/dec-014-specification-first-authority.md)).
The v1 lineage is historical, not current authority
([history/README.md](history/README.md)).

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial universal boot protocol. |
| 2.1.0 | 2026-07-24 | OAES Standards Committee | Reduced routine continuation to Git verification plus the CURRENT_STATE Continue Card. |
