# Decision: Four Canonical Knowledge States

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-013 |
| Title | The canonical Knowledge States are exactly Unknown, Known, Implemented, Verified |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Repository owner mandate, recorded by OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Record the adoption of exactly four canonical Knowledge States and the rejection of
richer lifecycle sets as Kernel States.

## Scope

- The canonical State set and its mechanical guard (STA-01, KRN-05).

## Non-Scope

- Transition rules in detail ([STATE_MODEL.md](../../spec/STATE_MODEL.md)); Type/State
  separation ([OAES-DEC-012](dec-012-knowledge-type-state-separation.md)).

## Dependencies

- [OAES v2 Kernel](../../spec/KERNEL.md)

## Interfaces

- **Inbound:** cited by the state-invariant test and schema enums.
- **Outbound:** builds on [OAES-DEC-011](dec-011-oaes-v2-frozen-kernel.md).

## Problem

Earlier lifecycle models (including six-state document lifecycles in the Foundation
lineage, e.g. Draft/Review/Active/Deprecated/Archived) describe document
administration, not engineering maturity. The Runtime needs the smallest State set
over which a deterministic next-Action rule is total.

## Options Considered

1. **Reuse the Foundation document lifecycle.** Familiar, but it measures editorial
   status, not whether a claim is established, realized, or proven.
2. **A rich engineering lifecycle (Hypothesis, Pending, Blocked, Approved, …).**
   Expressive, but most such labels are either Types, derived views (Blocked is
   computable from dependencies), or workflow status — and each extra State multiplies
   transitions.
3. **Exactly four States: Unknown, Known, Implemented, Verified.** Minimal, total,
   and sufficient: every candidate label maps to a Type, an attribute, or a derived
   view.

## Decision

Option 3. The canonical States are exactly `Unknown`, `Known`, `Implemented`,
`Verified`. `Hypothesis`, `Decision`, `Specification`, `Pending`, `In Progress`,
`Blocked`, `Rejected`, `Approved`, `Deprecated` are explicitly not States. A
mechanical test fails if an implementation adds a State.

## Consequences

- Easier: one four-row transition table; deterministic selection; stable schemas.
- Harder: workflow status must be derived or held as metadata, never persisted as
  State.

## Future Extension

- Superseded only by an owner-approved Kernel change.

## Related Documents

- [OAES v2 State Model](../../spec/STATE_MODEL.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-18 | OAES Standards Committee | Initial record. |
