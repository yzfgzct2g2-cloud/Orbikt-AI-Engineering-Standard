# Governance Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-016 |
| Title | Governance Specification |
| Layer | 50-governance |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the governance of the standard: which bodies exist, what each may decide, how they
decide, and how exceptions to any requirement are granted — so authority remains explicit
when the standard is ten years old and none of its founders are present.

## Scope

- Governance bodies, decision rights, decision procedure, waivers, and the role register.

## Non-Scope

- The format of decision records ([Decision Specification](decision-specification.md)).
- Executing approved changes ([Evolution Specification](../51-evolution/evolution-specification.md)).
- Governance of adopting organizations (they mirror this structure locally per PRJ-03).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Quality Specification](../40-quality/quality-specification.md)

## Interfaces

- **Inbound:** escalations (ORG-06), waiver requests (PRJ-04, QUA-10), and constitutional
  amendments (Constitution Article VIII) arrive here.
- **Outbound:** decisions are recorded per the Decision Specification and executed via
  the Evolution Specification.

## Requirements

### Bodies

- **GOV-01** The standard is governed by the **Standards Committee**: at least three
  humans, including every Maintainer. The committee's composition is recorded in the role
  register (GOV-03).
- **GOV-02** Decision rights are allocated as follows; anything not listed belongs to the
  Standards Committee:

  | Decision | Decided by |
  | --- | --- |
  | Editorial (PATCH) changes | Steward of the affected layer |
  | Minor changes to one layer | Steward + one Maintainer |
  | Minor changes crossing layers, new layers | Standards Committee, majority |
  | Major changes, new/removed layers or bands | Standards Committee, two-thirds |
  | Constitutional amendment | Standards Committee, unanimous (Article VIII) |
  | Waivers | Standards Committee, majority |

- **GOV-03** The governance layer MUST maintain a *role register* naming the current
  holders of Maintainer, Steward (per layer), and Committee membership; a decision made
  under an out-of-date register is voidable.

### Procedure

- **GOV-04** Decisions MAY be made in any medium, but a decision exists only when its
  decision record (per the [Decision Specification](decision-specification.md)) is merged;
  an unrecorded decision binds no one (Constitution Article VI).
- **GOV-05** Every decision MUST name its decider(s), the options considered, and the
  reason for the choice; every decider is a human (Constitution Article V — agents may
  prepare analyses, never cast decisions).
- **GOV-06** A decision MAY be revisited only by a new decision that explicitly
  supersedes it; re-arguing a recorded decision without new information is closed by
  pointing to the record.

### Waivers

- **GOV-07** A *waiver* is a time-bounded, recorded permission to deviate from a specific
  requirement. Every waiver MUST state: the requirement waived, the scope, the reason,
  the compensating measure (or the accepted risk, accepted by a named human), and its
  expiry (a date or completable condition).
- **GOV-08** Waivers MUST NOT be granted against the Constitution or against GOV-07
  itself. An expired waiver reverts automatically; continuing the deviation is then a
  blocking defect.

## Validation

- Decision records and waivers are structurally checkable against their templates; GOV-02
  thresholds are verified in review against the role register.

## Future Extension

- Delegated sub-bodies with scoped decision rights may be added to the GOV-02 table by
  minor change as the committee grows.

## Related Documents

- [Decision Specification](decision-specification.md)
- [Evolution Specification](../51-evolution/evolution-specification.md)
- [Organization Specification](../10-organization/organization-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
