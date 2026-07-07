# Template: Change Request

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-009 |
| Title | Change Request Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-018 (Evolution Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Open stage 1 of the change workflow (EVO-02): state the problem, the proposed change, its
class, its blast radius, and how adopters migrate.

## Scope

- The skeleton for change requests against this standard (adopters may reuse it for their
  own change processes).

## Non-Scope

- Decision records (OAES-TMPL-003) — a change request proposes; a decision record settles.

## Responsibilities

- A filled instance is accountable for declaring every affected document, so review can
  verify EVO-03 same-change consistency.

## Inputs

- The problem evidence, the proposed text or structure change, and its EVO-01 class.

## Outputs

- A reviewable change request that carries the change through all five stages.

## Interfaces

- **Inbound:** copied by any Contributor proposing a change.
- **Outbound:** mirrors OAES-SPEC-018 stage-1 exit criteria.

## Dependencies

- None normative (TPL-02).

## Validation

- Field presence is deterministically checkable; class correctness (EVO-01) is verified
  at content review.

## Future Extension

- A fast-track variant may be added if OAES-SPEC-018 adopts one.

## Related Documents

- [Evolution Specification](../51-evolution/evolution-specification.md)
- [CONTRIBUTING.md](../CONTRIBUTING.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# Change Request: {{short-title}}

| Field | Value |
| --- | --- |
| Identifier | {{change-request-id}} |
| Title | {{short-title}} |
| Type | Change Request |
| Class | {{editorial-minor-or-major}} (EVO-01) |
| Author | {{contributor}} |
| Date | {{yyyy-mm-dd}} |
| Status | {{stage-of-EVO-02}} |

## Problem

{{what-is-wrong-or-missing-with-evidence}}

## Proposed Change

{{the-exact-change — text-structure-or-both}}

## Affected Documents

| Document | Current version | Change |
| --- | --- | --- |
| {{identifier}} | {{x.y.z}} | {{what-changes-in-it}} |

## Impact Analysis

- Documents depending on the affected documents: {{list-and-assessment}}
- Registries to update: {{INDEX-CHANGELOG-cross-references}}

## Migration Statement

{{for-major-changes:-what-an-adopter-must-do — otherwise-"none-required"}} (EVO-04)

## Approval

- Required authority per GOV-02: {{who}}
- Decision record required per DEC-01: {{yes-no-why}}
```
