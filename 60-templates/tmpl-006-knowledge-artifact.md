# Template: Knowledge Artifact

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-006 |
| Title | Knowledge Artifact Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-008 (Knowledge Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record one verified fact, convention, procedure, or constraint as a single-sourced,
sourced, and dated knowledge artifact (KNO-01 to KNO-05).

## Responsibilities

- A filled instance is accountable for being the *only* authoritative statement of its
  content and for declaring when it must be re-verified.

## Inputs

- The verified content, its provenance (KNO-04), and its classification (KNO-03).

## Outputs

- A retrievable knowledge artifact citable as evidence.

## Interfaces

- **Inbound:** copied when promoting verified content into a knowledge base.
- **Outbound:** mirrors OAES-SPEC-008 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Classification, validity, and provenance fields are deterministically checkable;
  verification sufficiency (KNO-06) is a content-review check.

## Future Extension

- Confidence-grading fields may be added if OAES-SPEC-008 adopts them.

## Related Documents

- [Knowledge Specification](../20-knowledge/knowledge-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# {{artifact-title}}

| Field | Value |
| --- | --- |
| Identifier | {{project-knowledge-id}} |
| Title | {{artifact-title}} |
| Layer | {{knowledge-base-location}} |
| Type | Knowledge Artifact |
| Classification | {{fact-convention-procedure-or-constraint}} (KNO-03) |
| Version | {{version}} |
| Status | {{status}} |
| Author | {{verifying-role}} |
| Approved | {{yyyy-mm-dd}} |
| Valid until / unless | {{review-date-or-invalidating-condition}} (KNO-05) |

## Purpose

{{why-this-artifact-exists-and-who-needs-it}}

## Scope

- {{exactly-one-fact-convention-procedure-or-constraint}} (KNO-07)

## Non-Scope

- {{neighboring-content-and-where-it-lives}}

## Content

{{the-single-sourced-content}}

## Provenance

- Source: {{documents-measurements-or-decisions-this-derives-from}} (KNO-04)
- Verified by: {{role-and-date}}

## Dependencies

- {{knowledge-artifacts-this-depends-on-per-KNO-09-or-none}}

## Interfaces

- **Inbound:** {{who-retrieves-this}}
- **Outbound:** {{artifacts-cited}}

## Future Extension

- {{expected-evolution}}

## Related Documents

- {{links}}

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{version}} | {{yyyy-mm-dd}} | {{author}} | {{change-summary}} |
```
