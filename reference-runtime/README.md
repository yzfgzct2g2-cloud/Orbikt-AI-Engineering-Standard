# OAES v2 Reference Runtime

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-RUNTIME-IMPL |
| Title | OAES v2 Reference Runtime |
| Type | Reference Implementation |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) — implementation governed by [/spec](../spec/README.md) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

A minimal, deterministic implementation of the OAES v2 Runtime
([spec/RUNTIME.md](../spec/RUNTIME.md)). TypeScript on Node.js (≥ 20). No external
APIs, no API keys, no model-provider SDKs, no server, no database, no frontend. The
only dependencies are the TypeScript compiler and Node type definitions (dev-only).

The specification governs this implementation ([OAES-DEC-014](../50-governance/decisions/dec-014-specification-first-authority.md)).
If behavior and specification disagree, the implementation is wrong.

## Commands

```bash
cd reference-runtime
npm install
npm run typecheck    # strict TypeScript, no emit
npm test             # build + full test suite (node:test)
npm run build        # compile to dist/
npm run demo         # synthetic greeting demo incl. interruption + resumption
npm run check:docs   # documentation consistency scan (spec vs schemas vs adapters)
npm run check:all    # typecheck + test + check:docs
```

## Layout

| Path | Contents |
| --- | --- |
| `src/model.ts` | Kernel types and the frozen constant sets (guard surface for KRN-05). |
| `src/transitions.ts` | The STA-06 transition table, forward steps, invalidation. |
| `src/validate.ts` | Persisted-project validation mirroring [/schemas](../schemas/). |
| `src/store.ts` | Filesystem load/save (validating, atomic-rename write). |
| `src/select.ts` | Deterministic selection policy (RUN-12…RUN-16), completion detection. |
| `src/engine.ts` | The Observe → Reason → Choose Action → Execute → Update Knowledge loop. |
| `src/greeting-demo.ts`, `src/demo.ts` | The synthetic demonstration (see [examples/greeting-demo](../examples/greeting-demo/README.md)). |
| `tests/` | Kernel/state invariant guards, validation, transitions, selection, persistence, interruption/resumption. |
| `scripts/check-docs.mjs` | Documentation consistency scan. |

Build output (`dist/`) and the demo working directory (`.demo/`) are git-ignored.

## Determinism

For identical persisted input the runtime selects the identical next Action
(RUN-10): candidates are ranked by state advancement (RUN-15) and tie-broken by
code-point id order (RUN-16). Timestamps come from an injectable clock so tests are
fully reproducible.

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial reference runtime. |
