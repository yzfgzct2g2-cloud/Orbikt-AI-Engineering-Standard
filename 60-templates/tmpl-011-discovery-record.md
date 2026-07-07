# Template: Discovery Record

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-011 |
| Title | Discovery Record Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-023 (Discovery Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Accumulate the complete evidence of a Discovery — intake through approval gate — as one
record (DSC-02), so the approval decision and every later audit read from a single
artifact.

## Scope

- The skeleton for full project Discovery and, proportionally reduced, for material
  change requests (DSC-01).

## Non-Scope

- The charter itself (OAES-TMPL-008 — stage 9 produces it as a separate artifact).
- Individual risk records (OAES-TMPL-012 — the register here lists them).

## Responsibilities

- A filled instance is accountable for showing that execution was approved on understood
  goals, answered questions, and owned risks — or explicitly on declared confidence
  (DSC-06).

## Inputs

- The intake request; the applicable classification taxonomy and adapter question banks
  (DSC-03); access to the roles who can answer questions.

## Outputs

- The approval-gate evidence (DSC-12) and the charter's source material.

## Interfaces

- **Inbound:** copied at the start of every Discovery (PLC-01 phase 1).
- **Outbound:** mirrors DSC-02's stage outputs.

## Dependencies

- None normative (TPL-02).

## Validation

- Stage completeness, question count and linkage (DSC-05), and confidence declarations
  (DSC-06) are deterministically checkable; materiality is judged at the approval gate.

## Future Extension

- A reduced re-discovery variant may be derived when re-discovery profiles are specified.

## Related Documents

- [Discovery Specification](../31-discovery/discovery-specification.md)
- [Risk Record Template](tmpl-012-risk-record.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial release, Foundation edition 1.1. |

## Skeleton

```markdown
# Discovery Record: {{request-name}}

| Field | Value |
| --- | --- |
| Identifier | {{discovery-record-id}} |
| Title | {{request-name}} Discovery |
| Type | Discovery Record |
| Discovery lead | {{role}} |
| Started / gate date | {{yyyy-mm-dd}} / {{yyyy-mm-dd}} |
| Status | {{in-progress-approved-rework-rejected}} |

## 1. Intake

- Source and requester: {{who-asked}}
- Request as received: {{verbatim-or-summarized-with-source}}

## 2. Classification

- Project class: {{class-from-taxonomy}} (basis: {{taxonomy-and-adapters-applied}})

## 3. Goal Alignment

| Goal | Success criterion (measurable) | Owner | Conflicts and resolution |
| --- | --- | --- | --- |
| {{goal}} | {{criterion}} | {{role}} | {{none-or-resolution}} |

## 4. Clarification Questions (5–10 material, or confidence declaration)

| # | Question | Unblocks (charter field / constraint / risk) | Asked of | Answer (message id) |
| --- | --- | --- | --- | --- |
| 1 | {{question}} | {{what-it-unblocks}} | {{role}} | {{answer-ref}} |

- Confidence declaration (only if waiving the minimum): {{derivation-statement}} —
  countersigned by {{approver}} (DSC-06)

## 5. Options and Suggestions

| Option (incl. do-nothing / do-less) | Trade-offs | Disposition |
| --- | --- | --- |
| {{option}} | {{trade-offs}} | {{chosen-rejected-deferred}} |

## 6. Constraint Register

| Constraint | Class | Source (evidence) or accepted assumption |
| --- | --- | --- |
| {{constraint}} | {{regulatory-organizational-technical-resource-data}} | {{source}} |

## 7. Risk Register

| Risk record | Likelihood | Impact | Owner | Response |
| --- | --- | --- | --- | --- |
| {{risk-record-id}} | {{scale-value}} | {{scale-value}} | {{role}} | {{avoid-mitigate-transfer-accept}} |

## 8. Requirement Validation

| Requirement | Testable? | Traces to goal | Disposition |
| --- | --- | --- | --- |
| {{requirement}} | {{yes-how}} | {{goal}} | {{accepted-renegotiated-rejected}} |

## 9. Chartering

- Charter: {{charter-id-and-link}} — scope, non-scope, success criteria assembled there.

## 10. Approval Gate

- Decision: {{approve-rework-reject}} by {{approver}} on {{yyyy-mm-dd}}
- Conditions or assumptions attached: {{list-or-none}}
```
