# Template: Review Record

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-010 |
| Title | Review Record Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-012 (Quality Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record a content or conformance review with findings traceable to evidence and an
unambiguous verdict (QUA-04, QUA-05, QUA-07).

## Scope

- The skeleton for content and conformance review records (QUA-01).

## Non-Scope

- Structural reviews — their record is the validator report itself (QUA-03, TOOL-09).

## Responsibilities

- A filled instance is accountable for showing *what* was examined against *which*
  requirements, so a later reader can re-perform the review.

## Inputs

- The artifact and version under review, the requirements in scope, the review type, and
  the reviewer (independent per ORG-05 where required).

## Outputs

- Gate evidence (QUA-08) and, for each deviation found, a defect record per QUA-09.

## Interfaces

- **Inbound:** copied at every content/conformance gate.
- **Outbound:** mirrors OAES-SPEC-012 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Field presence and verdict values are deterministically checkable; evidence traceability
  (QUA-07) is itself audited in conformance review.

## Future Extension

- None planned; tracks OAES-SPEC-012.

## Related Documents

- [Quality Specification](../40-quality/quality-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# Review Record: {{artifact-reviewed}}

| Field | Value |
| --- | --- |
| Identifier | {{review-record-id}} |
| Type | Review Record |
| Review type | {{content-or-conformance}} (QUA-01) |
| Artifact reviewed | {{identifier-and-version}} |
| Requirements in scope | {{requirement-ids-or-specification-ids}} |
| Reviewer | {{name — independence-per-ORG-05:-yes-no}} |
| Agent assistance | {{agent-definition-id-or-none}} (QUA-06) |
| Date | {{yyyy-mm-dd}} |

## Findings

| # | Requirement | Observation | Evidence | Severity |
| --- | --- | --- | --- | --- |
| 1 | {{req-id}} | {{what-was-found}} | {{record-or-artifact-cited}} | {{blocking-non-blocking-or-note}} |

## Verdict

{{pass — pass-with-findings — or-fail}} (QUA-05)

## Defects Raised

- {{defect-record-ids-per-QUA-09-or-none}}
```
