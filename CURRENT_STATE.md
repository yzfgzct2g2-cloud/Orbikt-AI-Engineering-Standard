# Current State

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-CURRENT-STATE |
| Title | Current Repository State |
| Type | Registry Document |
| Version | 2.0.1 |
| Status | Active |
| Authority | Current (OAES v2) — human-readable projection of [runtime-state/project.json](runtime-state/project.json) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

> Machine-readable state is authoritative for Runtime execution
> ([runtime-state/project.json](runtime-state/project.json)). This file is a
> synchronized projection, updated at every checkpoint.

## Snapshot (last checkpoint)

| Item | Value |
| --- | --- |
| Current Objective | `obj-oaes-v2` — OAES v2 frozen specification, reference runtime, continuation contract |
| Current verified specification version | OAES v2.0.0 (spec/ frozen; see [VERSION.md](VERSION.md)) |
| Current branch | `feat/oaes-v2-reference-runtime` |
| Latest completed checkpoint | OAES v2.0.0 release checkpoint: README/INDEX/CHANGELOG authority updates; tag `v2.0.0` on this commit |
| Current selected or pending Action | `verify k-release-validation`: confirm the pushed tag and branch/remote alignment, then record the evidence (final bookkeeping commit) |
| Verification status | Spec, runtime, and continuation **Verified** (typecheck clean; 48/48 tests incl. invariants and resumption; demo passes; docs consistency scan passes). Release validation **Implemented**, tag verification pending |
| Known risks or blockers | None open. Merge of the feature branch into `main` is reserved to the repository owner |

## Current Knowledge Summary

| Knowledge | State | Meaning |
| --- | --- | --- |
| `k-v2-spec` | Verified | spec/ + OAES-DEC-011..017; consistency scan passes |
| `k-reference-runtime` | Verified | runtime + schemas + 48 tests + demo all pass |
| `k-continuation-contract` | Verified | BOOTSTRAP/adapters/handoff/runtime-state; scan checks pass |
| `k-release-validation` | Implemented | release commit + tag made; remote verification is the pending step |

## Exact Next Safe Command

```bash
cd reference-runtime && npm install && npm run check:all
```

Then follow [HANDOFF.md](HANDOFF.md).

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial current-state projection. |
| 2.0.1 | 2026-07-18 | OAES Standards Committee | Release-checkpoint projection: spec/runtime/continuation Verified; release validation Implemented. |
