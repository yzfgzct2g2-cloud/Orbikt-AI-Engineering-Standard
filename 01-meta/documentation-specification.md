# Documentation Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-003 |
| Title | Documentation Specification |
| Layer | 01-meta |
| Type | Specification |
| Version | 1.2.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the mandatory structure and editorial rules for every OAES document, so that the
repository remains uniform, machine-checkable, and fully maintainable by human engineers
without any automated assistance.

## Scope

- Document classes, required sections, header metadata, and writing rules for all
  documents in this repository.

## Non-Scope

- Naming and identifiers ([Naming Specification](naming-specification.md)).
- Version numbers and lifecycle ([Versioning Specification](versioning-specification.md)).
- Reading and adoption guidance ([70-documentation](../70-documentation/README.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Naming Specification](naming-specification.md)
- [Versioning Specification](versioning-specification.md)

## Interfaces

- **Inbound:** every document in the repository; the
  [Document Template](../60-templates/tmpl-001-document.md) implements this specification.
- **Outbound:** none.

## Requirements

### Document classes

- **DOCU-01** Every document MUST declare exactly one type in its header:
  *Constitution*, *Vision*, *Layer Definition*, *Specification*, *Template*,
  *Decision Record*, *Validation Rule Set*, *Example*, *Guide*, *Reference*, or
  *Registry Document*.
- **DOCU-02** Only the Constitution, Specifications, and Validation Rule Sets may contain
  normative requirements. All other classes are informative.

### Header

- **DOCU-03** Every document MUST begin with a level-1 title followed by a header table
  containing at least: Identifier, Title, Type, Version, Status, Author, Approved (date);
  documents other than the repository-root registries MUST also state their Layer.
- **DOCU-04** The Author field names the accountable role or body (for example, "OAES
  Standards Committee"), not an individual's transient contact details and not a tool.

### Required sections

- **DOCU-05** Every document MUST contain these sections, in this order relative to each
  other: **Purpose**, **Scope**, **Non-Scope**, **Dependencies**, **Interfaces**, body
  sections, **Future Extension**, **Related Documents**, **Revision History**.
- **DOCU-06** Layer Definitions MUST additionally contain **Responsibilities** and
  **Contents**; Specifications MUST additionally contain **Requirements** and
  **Validation**; Templates MUST follow the section set of the
  [Template Specification](../60-templates/template-specification.md). Specifications
  that define recurring processes SHOULD additionally contain **Extension Points**,
  **Metrics**, and **Failure Modes and Recovery** — required practice for new process
  specifications; the pre-1.2 normative-core and rule specifications are exempt by
  recorded decision (OAES-DEC-010) and adopt these sections at their next revision.
- **DOCU-07** The Dependencies section lists only documents this document normatively
  depends on; "None" is stated explicitly when empty.
- **DOCU-08** The Interfaces section MUST distinguish **Inbound** (who consumes this
  document) from **Outbound** (what this document consumes).
- **DOCU-09** The Revision History MUST be a table with columns Version, Date, Author,
  Change, one row per released version, newest last or newest first consistently within
  the document.

### Writing rules

- **DOCU-10** Normative requirements MUST use the conformance keywords of Constitution
  Article VII, one requirement per identified statement (NAM-06), and MUST be testable —
  a reviewer must be able to decide objectively whether an artifact satisfies it.
- **DOCU-11** Documents MUST use plain engineering English: no marketing language, no
  prompt-engineering phrasing (no "you are...", no imperative instructions addressed to an
  AI system), and no vendor, model, product, language, or framework names in normative
  text.
- **DOCU-12** Cross-references within the repository MUST be relative links; external
  references MUST go through the
  [Normative References](../71-reference/normative-references.md) register when they are
  normative.
- **DOCU-13** Dates MUST use ISO 8601 (`YYYY-MM-DD`). Diagrams MUST have a text
  equivalent (a table or fenced text diagram) so no binary format is load-bearing.
- **DOCU-14** Terms with special meaning MUST be used as defined in the
  [Glossary](../71-reference/glossary.md); a document introducing a new term MUST propose
  its glossary entry in the same change.

## Validation

- Structural rules (DOCU-01, DOCU-03 to DOCU-09, DOCU-13) are deterministically enforced by
  [Document Conformance Rules](../63-validators/document-conformance-rules.md).
- Editorial rules (DOCU-10 to DOCU-12, DOCU-14) are enforced by human review under the
  [Quality Specification](../40-quality/quality-specification.md).

## Future Extension

- New document classes are added to DOCU-01 by minor change together with their required
  sections in DOCU-06.

## Related Documents

- [Document Template](../60-templates/tmpl-001-document.md)
- [Glossary](../71-reference/glossary.md)
- [Quality Specification](../40-quality/quality-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-07 | OAES Standards Committee | Added Vision document class (DOCU-01) for the North Star (OAES-DEC-007). |
| 1.2.0 | 2026-07-08 | OAES Standards Committee | Extended section set for process specifications in DOCU-06 (OAES-DEC-010). |
