# Decision: Provider-Independent Deterministic Reference Runtime

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-015 |
| Title | The reference runtime is deterministic, local, and bound to no model provider |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Repository owner mandate, recorded by OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Record the technology and determinism decisions for the OAES v2 reference runtime.

## Scope

- Determinism, provider independence, and the technology baseline of
  [`/reference-runtime`](../../reference-runtime/).

## Non-Scope

- Adopter runtimes (which may use LLM Actors); the selection policy details
  ([RUNTIME.md](../../spec/RUNTIME.md)).

## Dependencies

- [OAES v2 Runtime Specification](../../spec/RUNTIME.md)

## Interfaces

- **Inbound:** cited by the reference runtime README and its tests.
- **Outbound:** builds on [OAES-DEC-011](dec-011-oaes-v2-frozen-kernel.md).

## Problem

A reference implementation that calls an external model cannot prove the standard's
claims: its behavior would vary per provider, per key, per day, and could not run in
CI or offline. The repository also had no established implementation language, so one
had to be chosen.

## Options Considered

1. **LLM-backed reference runtime.** Demonstrates AI actors directly, but is
   non-deterministic, needs keys, binds to a vendor, and makes every test flaky.
2. **Deterministic rule-based runtime, TypeScript on Node.js.** Provable, testable,
   offline; the repository has no prior language, and TypeScript offers strict types
   with zero-dependency JSON handling and a built-in test runner (`node:test`).

## Decision

Option 2. The reference runtime uses TypeScript (strict) on current Node.js LTS-compatible
syntax, filesystem persistence, no external APIs, no API keys, no model-provider SDKs,
no server, no database, no frontend, and a minimal explicit selection policy
(RUN-12…RUN-16). Its only dev dependency is the TypeScript compiler.

## Consequences

- Easier: identical results for identical persisted input; CI-friendly; ten-year
  portability.
- Harder: AI-driven action execution is demonstrated by adopters, not by the reference
  runtime.

## Future Extension

- A second reference implementation in another language may be added without changing
  this decision.

## Related Documents

- [OAES v2 Runtime Specification](../../spec/RUNTIME.md)
- [Reference runtime](../../reference-runtime/README.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-18 | OAES Standards Committee | Initial record. |
