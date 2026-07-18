# Greeting Demo (Synthetic)

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-EXAMPLE-GREETING |
| Title | Synthetic Greeting Demonstration |
| Type | Example |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

A deliberately tiny, fully synthetic project whose only purpose is to prove OAES v2
runtime behavior (mandate: no production/domain requirements in the first test).

**Objective:** create a locally stored greeting artifact and verify its content.

- `k-greeting-content` — a `requirement` (no implementation required):
  `Unknown → Known → Verified`.
- `k-greeting-artifact` — an `implementation` depending on the requirement:
  `Unknown → Known → Implemented → Verified`. Blocked until the requirement is
  Verified (RUN-13).

Deterministic action trace (always, for this seed):

```text
a-001  establish  k-greeting-content   (Unknown -> Known)
a-002  verify     k-greeting-content   (Known -> Verified)
a-003  establish  k-greeting-artifact  (Unknown -> Known)
a-004  implement  k-greeting-artifact  (Known -> Implemented)   writes greeting.txt
a-005  verify     k-greeting-artifact  (Implemented -> Verified)
```

Run it:

```bash
cd reference-runtime
npm install
npm run demo
```

The demo seeds `reference-runtime/.demo/project.json` from
[seed.project.json](seed.project.json), runs two steps in one engine instance,
**discards the instance** (real interruption — only disk survives), then a fresh
engine resumes purely from the persisted file and completes the Objective. The test
suite (`npm test`) asserts the same behavior, including that the interrupted and
uninterrupted runs produce the identical trace and Verified result.

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial synthetic demo. |
