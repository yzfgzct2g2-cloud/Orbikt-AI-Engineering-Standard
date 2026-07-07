# Layer 50 — Governance

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-50 |
| Title | Governance Layer |
| Type | Layer Definition |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define who decides what: the governance bodies of the standard, their decision rights, the
waiver mechanism, and the decision-record discipline that makes every consequential choice
traceable.

## Scope

- Governance bodies, decision rights, waivers, and decision records; the register of
  decisions taken about this standard.

## Non-Scope

- Day-to-day role duties ([10-organization](../10-organization/README.md)).
- The mechanics of changing documents ([51-evolution](../51-evolution/README.md)).

## Responsibilities

- Guarantee that authority is explicit, that no requirement is bypassed without a recorded
  waiver, and that decisions survive the people who made them.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [10-organization](../10-organization/README.md)
- [40-quality](../40-quality/README.md)

## Interfaces

- **Inbound:** escalations (ORG-06) terminate here; waivers (PRJ-04, QUA-10) are granted
  here; the evolution layer executes what is decided here.
- **Outbound:** roles from organization; review types from quality.

## Contents

| Document | Identifier |
| --- | --- |
| [governance-specification.md](governance-specification.md) | OAES-SPEC-016 |
| [decision-specification.md](decision-specification.md) | OAES-SPEC-017 |
| [role-register.md](role-register.md) | OAES-ROLE-REGISTER |
| [decisions/](decisions/) | OAES-DEC-001 … |

## Future Extension

- Additional governance bodies (for example, a security council) are added to the
  Governance Specification's body table by minor change.

## Related Documents

- [Decision Record Template](../60-templates/tmpl-003-decision-record.md)
- [Evolution Specification](../51-evolution/evolution-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-08 | OAES Standards Committee | Added the role register (OAES-ROLE-REGISTER). |
