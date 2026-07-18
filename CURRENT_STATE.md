# Current State

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-CURRENT-STATE |
| Title | Current Repository State |
| Type | Registry Document |
| Version | 2.0.3 |
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
| Current branch | `main` (default; OAES v2 promoted via merge commit `349a9a0` on 2026-07-18 with owner authorization; `feat/oaes-v2-reference-runtime` retained for historical clarity) |
| Latest completed checkpoint | OAES v2.0.0 released (tag `v2.0.0` on `1cf51e7`) and promoted to `main` (merge `349a9a0`); post-merge validation green after a line-ending guard fix (`e498d5d`) |
| Current selected or pending Action | None — `obj-oaes-v2` is **complete** (all four success criteria Verified). Next authorized work begins with a new Objective defined by the repository owner |
| Verification status | All Knowledge Verified: typecheck clean; 48/48 tests (incl. kernel/state invariant guards and interruption/resumption); demo passes; docs consistency scan passes; security scan clean; tag `v2.0.0` on origin points at the release commit |
| Known risks or blockers | None open |

## Current Knowledge Summary

| Knowledge | State | Meaning |
| --- | --- | --- |
| `k-v2-spec` | Verified | spec/ + OAES-DEC-011..017; consistency scan passes |
| `k-reference-runtime` | Verified | runtime + schemas + 48 tests + demo all pass |
| `k-continuation-contract` | Verified | BOOTSTRAP/adapters/handoff/runtime-state; scan checks pass |
| `k-release-validation` | Verified | tag `v2.0.0` verified on origin; heads aligned; evidence in action `a-012` |

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
| 2.0.2 | 2026-07-18 | OAES Standards Committee | Objective complete: release validation Verified against the remote tag. |
| 2.0.3 | 2026-07-18 | OAES Standards Committee | Recorded owner-authorized promotion to `main` (merge `349a9a0`); default branch is now the continuation branch. |
