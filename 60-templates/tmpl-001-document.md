# Template: General Document

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-001 |
| Title | General Document Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-003 (Documentation Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Start any OAES-conformant document with the mandatory header and section set of
DOCU-03 to DOCU-09, for document classes that have no more specific template.

## Responsibilities

- A filled instance is accountable for stating its own identity, scope boundaries,
  dependencies, and history truthfully.

## Inputs

- An allocated identifier (NAM-01, registered in INDEX.md or the project's index).
- The document class (DOCU-01) and owning layer.

## Outputs

- A document passing structural review against OAES-SPEC-003.

## Interfaces

- **Inbound:** copied by authors and generators.
- **Outbound:** mirrors OAES-SPEC-003 required sections.

## Dependencies

- None normative (TPL-02); defective if it diverges from OAES-SPEC-003.

## Validation

- Filled instances are checked by [Document Conformance Rules](../63-validators/document-conformance-rules.md);
  no `{{...}}` slot may survive (TPL-05).

## Future Extension

- Class-specific templates supersede this one for their class as they are added.

## Related Documents

- [Documentation Specification](../01-meta/documentation-specification.md)
- [Template Specification](template-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# {{title}}

| Field | Value |
| --- | --- |
| Identifier | {{identifier}} |
| Title | {{title}} |
| Layer | {{layer}} |
| Type | {{document-class}} |
| Version | {{version}} |
| Status | {{status}} |
| Author | {{accountable-role-or-body}} |
| Approved | {{yyyy-mm-dd}} |

## Purpose

{{one-paragraph-purpose}}

## Scope

- {{what-this-document-covers}}

## Non-Scope

- {{what-it-deliberately-does-not-cover-and-where-that-lives}}

## Dependencies

- {{normative-dependencies-or-none}}

## Interfaces

- **Inbound:** {{who-consumes-this-document}}
- **Outbound:** {{what-this-document-consumes}}

## {{body-sections}}

{{content}}

## Future Extension

- {{how-this-document-is-expected-to-grow}}

## Related Documents

- {{informative-links}}

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{version}} | {{yyyy-mm-dd}} | {{author}} | {{change-summary}} |
```
