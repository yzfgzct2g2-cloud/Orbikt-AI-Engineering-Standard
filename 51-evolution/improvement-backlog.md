# OAES Improvement Backlog

| Field | Value |
| --- | --- |
| Identifier | OAES-IMPROVEMENT-BACKLOG |
| Title | Improvement Backlog |
| Layer | 51-evolution |
| Type | Registry Document |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

The single register where every improvement signal for this standard lands and receives
a recorded outcome (IMP-01, IMP-02). An improvement idea living anywhere else does not
exist.

## Scope

- Improvement items for this repository.

## Non-Scope

- Backlogs of adopting enterprises and projects (they maintain their own per IMP-01).
- The changes themselves (accepted items become change requests in EVO-02).

## Dependencies

- None (registry document; content governed by IMP-01 and IMP-02).

## Interfaces

- **Inbound:** suggestions (COM-07), defects (QUA-09), loop outputs (ASR-06),
  retrospectives (PLC-05), metric breaches, lifecycle debt, adapter core-gap reports
  (ADP-08).
- **Outbound:** change requests into the change workflow (EVO-02).

## Backlog

| Item | Source | Raised | Outcome | Disposition |
| --- | --- | --- | --- | --- |
| IMP-B-001 — Filled examples for OAES-TMPL-011 through 014 (examples layer target: one per template) | Wave-2 self-review | 2026-07-08 | Accepted | Change request due next edition |
| IMP-B-002 — Choose a repository license (standards text is typically openly licensed; adoption is legally blocked without one) | Foundation 1.0 review | 2026-07-07 | Parked | Reserved human decision of the repository owner (Article V spirit); revisit at next edition |
| IMP-B-003 — Form the Standards Committee and exit bootstrap mode (GOV-09) | Red-team review, edition 1.2 | 2026-07-08 | Accepted | Standing until three named humans hold seats; tracked in the [role register](../50-governance/role-register.md) |
| IMP-B-004 — Review forward informative references from band-1x specifications (ENT, COM) for tightening | Architecture Decision Journal risk list | 2026-07-08 | Parked | Revisit with the first major change; not defective under ARCH-07 precedent |
| IMP-B-005 — Split INDEX.md into per-layer sub-registries | Architecture Decision Journal risk list | 2026-07-08 | Parked | Trigger: registry exceeds ~300 artifacts |
| IMP-B-006 — Run a first real adopter project through the full lifecycle and feed findings back (the standard is field-untested) | Red-team review, edition 1.2 | 2026-07-08 | Accepted | Standing; highest-value validation the standard can receive |

Items are never deleted: closed items move to a Completed section below with their
resolving change.

## Completed

| Item | Resolution |
| --- | --- |
| Small-team governance guidance (raised in the Architecture Decision Journal, 2026-07-08) | Resolved by GOV-09 bootstrap mode in edition 1.2 (OAES-DEC-010) |

## Future Extension

- One row per signal, per IMP-02 triage; sections stay two: open and completed.

## Related Documents

- [Improvement Specification](improvement-specification.md)
- [Evolution Specification](evolution-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial backlog with open items from editions 1.0–1.2 (OAES-DEC-010). |
