# OAES Role Register

| Field | Value |
| --- | --- |
| Identifier | OAES-ROLE-REGISTER |
| Title | Role Register |
| Layer | 50-governance |
| Type | Registry Document |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

The authoritative record of who currently holds each governance role for this standard
(GOV-03). Decisions made under an out-of-date register are voidable; this file is
therefore updated in the same change as any role transition.

## Scope

- Role holders for this repository: Committee membership, Maintainer(s), and the Steward
  of every layer.

## Non-Scope

- Role registers of adopting enterprises and projects (they maintain their own under the
  same rules, per PRJ-03 and ENT-10).

## Dependencies

- None (registry document; content governed by GOV-01 to GOV-03 and GOV-09).

## Interfaces

- **Inbound:** GOV-02 approvals and COM-04 message routing resolve role holders here.
- **Outbound:** role definitions (ORG-01), bootstrap rules (GOV-09).

## Governance mode

**Bootstrap mode is in effect (GOV-09).** The Standards Committee has not yet reached
the GOV-01 minimum of three humans. Consequences while this holds:

- The Founding Maintainer holds every seat below.
- Every author-reviewer conflict is recorded per ORG-05.
- Conformance claims for this repository are capped at Level 2 (QUA-02).
- Committee formation is standing improvement item
  [IMP-B-003](../51-evolution/improvement-backlog.md).

## Register

| Role | Holder | Since |
| --- | --- | --- |
| Founding Maintainer | Repository owner (record legal name here upon committee formation) | 2026-07-07 |
| Committee Member seats (min. 3) | Founding Maintainer (bootstrap) — 2 seats vacant | 2026-07-07 |
| Steward, all layers 00–90 | Founding Maintainer (bootstrap) | 2026-07-07 |

Exit condition for bootstrap: three named humans hold Committee seats and at least the
normative-core layers (00–02) have a Steward distinct from the Maintainer. On exit, this
register is revised, the Governance mode section above is removed, and the Level cap
lifts.

## Future Extension

- One row per role as seats are filled; layer stewardship rows split per layer as
  stewards diverge.

## Related Documents

- [Governance Specification](governance-specification.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Improvement Backlog](../51-evolution/improvement-backlog.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial register; bootstrap mode declared (GOV-09, OAES-DEC-010). |
