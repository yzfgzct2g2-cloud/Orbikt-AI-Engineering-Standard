# Template: Decision Record

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-003 |
| Title | Decision Record Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-017 (Decision Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record a consequential decision with its problem, real alternatives, reasoning, and
consequences (DEC-02, DEC-03).

## Responsibilities

- A filled instance is accountable for showing that the decision could have gone
  otherwise and why it did not.

## Inputs

- An allocated OAES-DEC identifier (or the project's decision index number).
- The options actually considered, with their trade-offs, and the deciders per GOV-02.

## Outputs

- An immutable decision record (DEC-05) citable as provenance (KNO-04).

## Interfaces

- **Inbound:** copied by anyone recording a decision.
- **Outbound:** mirrors OAES-SPEC-017 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Field presence per DEC-02 is deterministically checkable; option substance (DEC-03) is
  a content-review check.

## Future Extension

- None planned; tracks OAES-SPEC-017.

## Related Documents

- [Decision Specification](../50-governance/decision-specification.md)
- [Decisions register](../50-governance/decisions/)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# Decision: {{short-title}}

| Field | Value |
| --- | --- |
| Identifier | {{OAES-DEC-nnn-or-project-id}} |
| Title | {{full-title}} |
| Layer | {{layer}} |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | {{Proposed-Accepted-Superseded-Rejected}} |
| Author | {{deciders-per-GOV-02}} |
| Approved | {{yyyy-mm-dd}} |

## Purpose

Record {{what-choice-this-record-settles}}.

## Scope

- {{what-the-decision-binds}}

## Non-Scope

- {{adjacent-choices-not-settled-here}}

## Dependencies

- {{governing-documents}}

## Interfaces

- **Inbound:** {{who-cites-this-decision}}
- **Outbound:** {{decisions-or-requirements-this-builds-on}}

## Problem

{{the-forces-that-made-a-decision-necessary}}

## Options Considered

1. **{{option-1}}.** {{substantive-trade-offs}}
2. **{{option-2}}.** {{substantive-trade-offs}}

## Decision

{{the-chosen-option-and-its-exact-consequence-for-practice}}

## Consequences

- Easier: {{what-improves}}
- Harder: {{what-costs-are-accepted-and-any-mitigation}}

## Future Extension

- {{supersession-conditions-or-none}}

## Related Documents

- {{links}}

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | {{yyyy-mm-dd}} | {{author}} | Initial record. |
```
