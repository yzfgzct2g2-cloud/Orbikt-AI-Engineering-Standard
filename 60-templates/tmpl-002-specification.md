# Template: Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-002 |
| Title | Specification Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-003 (Documentation Specification, Specification class) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Start a new specification with the section set required of the Specification class
(DOCU-05, DOCU-06), including identified, testable requirements.

## Responsibilities

- A filled instance is accountable for stating requirements that are individually
  identified (NAM-06), testable (DOCU-10), and validated (its Validation section).

## Inputs

- An allocated OAES-SPEC identifier and requirement prefix (registered in INDEX.md).
- The owning layer and the concern the specification governs.

## Outputs

- A specification passing structural review and ready for content review.

## Interfaces

- **Inbound:** copied by authors and generators.
- **Outbound:** mirrors OAES-SPEC-003 for the Specification class.

## Dependencies

- None normative (TPL-02).

## Validation

- Filled instances are checked by [Document Conformance Rules](../63-validators/document-conformance-rules.md),
  including requirement-identifier format.

## Future Extension

- None planned; tracks OAES-SPEC-003.

## Related Documents

- [Documentation Specification](../01-meta/documentation-specification.md)
- [Naming Specification](../01-meta/naming-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# {{title}}

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-{{nnn}} |
| Title | {{title}} |
| Layer | {{layer}} |
| Type | Specification |
| Version | {{version}} |
| Status | {{status}} |
| Author | {{accountable-role-or-body}} |
| Approved | {{yyyy-mm-dd}} |

## Purpose

{{what-this-specification-guarantees-and-why}}

## Scope

- {{governed-concern}}

## Non-Scope

- {{excluded-concerns-and-their-owning-documents}}

## Dependencies

- {{normative-dependencies}}

## Interfaces

- **Inbound:** {{documents-and-processes-that-consume-these-requirements}}
- **Outbound:** {{requirements-this-specification-builds-on}}

## Requirements

### {{requirement-group}}

- **{{PREFIX}}-01** {{single-testable-requirement-using-conformance-keywords}}
- **{{PREFIX}}-02** {{...}}

## Validation

- {{which-requirements-are-deterministically-checkable-and-by-what;
    which-require-human-review-and-in-which-review-type}}

## Future Extension

- {{anticipated-growth-and-its-change-class}}

## Related Documents

- {{informative-links}}

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{version}} | {{yyyy-mm-dd}} | {{author}} | {{change-summary}} |
```
