# Decision: OAES v2 Frozen Five-Concept Kernel

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-011 |
| Title | OAES v2 adopts a frozen Kernel of exactly five concepts |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Repository owner mandate, recorded by OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Record the adoption of the OAES v2 Kernel: exactly five concepts — Objective,
Knowledge, State, Action, Actor — frozen against feature expansion.

## Scope

- The conceptual core of OAES v2 and its freeze rules (KRN-01…KRN-05).

## Non-Scope

- Knowledge State semantics ([OAES-DEC-013](dec-013-four-knowledge-states.md));
  runtime behavior ([OAES-DEC-015](dec-015-deterministic-reference-runtime.md)).

## Dependencies

- [OAES v2 Kernel](../../spec/KERNEL.md)

## Interfaces

- **Inbound:** cited by every OAES v2 specification and by the kernel-invariant test.
- **Outbound:** supersedes the Foundation-era layered concept model as current
  authority (see [OAES-DEC-017](dec-017-v1-lineage-preservation.md)).

## Problem

The Foundation editions (1.0–1.2) grew to 24 layers, 32 specifications, and 14
templates. That breadth is valuable evidence, but it is not a minimal reasoning model
an Actor can hold and execute. OAES v2 requires a core small enough to be mechanically
guarded and stable enough to survive model, vendor, and language churn.

## Options Considered

1. **Evolve the Foundation layer model incrementally.** Preserves continuity, but the
   layer model encodes organizational breadth, not a reasoning loop; trimming it to
   five concepts would be a rewrite wearing an amendment's clothes.
2. **Adopt a frozen five-concept Kernel and preserve Foundation as lineage.** A clean,
   mechanically checkable core; the cost is maintaining a clear historical boundary so
   old and new authority are never confused.

## Decision

Option 2. The OAES v2 Kernel contains exactly Objective, Knowledge, State, Action,
Actor. No sixth concept, no renames, no aliases functioning as hidden Kernel entities.
Kernel changes require a demonstrated contradiction or defect plus explicit approval
by the standard's human owner.

## Consequences

- Easier: mechanical invariant checking; cross-Actor continuation; ten-year stability.
- Harder: pressure to widen the Kernel must be absorbed by Vocabulary, Knowledge
  Packs, or implementation metadata (escalation order in
  [KERNEL.md](../../spec/KERNEL.md)).

## Future Extension

- Superseded only by an explicit owner-approved Kernel change record.

## Related Documents

- [OAES v2 Kernel](../../spec/KERNEL.md)
- [OAES-DEC-017](dec-017-v1-lineage-preservation.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-18 | OAES Standards Committee | Initial record. |
