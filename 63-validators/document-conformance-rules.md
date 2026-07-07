# Document Conformance Rules

| Field | Value |
| --- | --- |
| Identifier | OAES-VAL-001 |
| Title | Document Conformance Rules |
| Layer | 63-validators |
| Type | Validation Rule Set |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Enumerate the mechanically decidable checks a document must pass in structural review.
Each rule derives from exactly one requirement; the rule adds nothing to it.

## Scope

- Every markdown document in this repository; adopters apply the same rules to their
  OAES-structured artifacts.

## Non-Scope

- Content judgment of any kind (content review, QUA-01).
- Repository-level structure ([Repository Structure Rules](repository-structure-rules.md)).

## Dependencies

- None normative (ARCH-06); each rule cites its source requirement.

## Interfaces

- **Inbound:** evaluated at stages 2 and 5 of the change workflow; implementable by any
  qualified validator (TOOL-04).
- **Outbound:** rules derive from OAES-SPEC-001, -002, -003, and -019.

## Rules

Each rule is pass/fail per document. A conforming validator reports every failed rule with
file and location.

| Rule | Check | Derives from |
| --- | --- | --- |
| VDOC-01 | The file begins with exactly one level-1 heading. | DOCU-03 |
| VDOC-02 | A header table follows the title and contains the fields Identifier, Title, Type, Version, Status, Author, Approved. | DOCU-03 |
| VDOC-03 | The header table contains a Layer field, or the file is a repository-root registry (README.md, INDEX.md, CONTRIBUTING.md, CHANGELOG.md). | DOCU-03 |
| VDOC-04 | The Identifier value matches `OAES-<TYPE>-<NNN>` with a type code registered in NAM-05, or is a reserved registry identifier registered in NAM-13, or is a project-local identifier outside this repository. | NAM-01, NAM-05, NAM-13 |
| VDOC-05 | The Type value is a class listed in DOCU-01. | DOCU-01 |
| VDOC-06 | The Version value matches `MAJOR.MINOR.PATCH` with numeric components. | VER-01 |
| VDOC-07 | The Status value is one of Draft, Review, Active, Deprecated, Archived. | VER-09 |
| VDOC-08 | The Approved value matches `YYYY-MM-DD`. | DOCU-13 |
| VDOC-09 | The sections Purpose, Scope, Non-Scope, Dependencies, Interfaces, Future Extension, Related Documents, Revision History are each present exactly once and in that relative order. | DOCU-05 |
| VDOC-10 | If Type is Specification: sections Requirements and Validation are present. | DOCU-06 |
| VDOC-11 | If Type is Layer Definition: sections Responsibilities and Contents are present. | DOCU-06 |
| VDOC-12 | If Type is Template: the TPL-04 section set is present and the document contains exactly one fenced skeleton block. | TPL-04 |
| VDOC-13 | The Revision History is a table with header columns Version, Date, Author, Change and at least one data row. | DOCU-09 |
| VDOC-14 | The newest Revision History row's Version equals the header Version. | VER-05 |
| VDOC-15 | The Interfaces section contains both an "Inbound" and an "Outbound" item. | DOCU-08 |
| VDOC-16 | Every relative link in the document resolves to an existing file. | DOCU-12 |
| VDOC-17 | Outside template skeleton blocks, the document contains no token matching the slot pattern `{{` `[a-z0-9-]+` `}}` (TPL-05 slot syntax). | TPL-05 |
| VDOC-18 | All dates in the document body match ISO 8601 where they follow the labels Approved, Date, or Timestamp. | DOCU-13 |
| VDOC-19 | If Status is Deprecated: the header names a successor (or "none") and a planned withdrawal edition. | VER-11 |
| VDOC-20 | Requirement identifiers in a Requirements section match `<PREFIX>-<NN>` with the prefix registered for this document in INDEX.md, are unique, and do not renumber (no gaps filled by later versions). | NAM-06, NAM-07 |

## Future Extension

- Rules are added, and only added, when their source requirements change; each rule set
  version cites the motivating requirement change in its revision history.

## Related Documents

- [Documentation Specification](../01-meta/documentation-specification.md)
- [Repository Structure Rules](repository-structure-rules.md)
- [Tooling Specification](../64-tools/tooling-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-08 | OAES Standards Committee | VDOC-04 recognizes NAM-13 reserved registry identifiers (motivated by NAM 1.2.0). |
