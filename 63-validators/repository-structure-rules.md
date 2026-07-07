# Repository Structure Rules

| Field | Value |
| --- | --- |
| Identifier | OAES-VAL-002 |
| Title | Repository Structure Rules |
| Layer | 63-validators |
| Type | Validation Rule Set |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Enumerate the mechanically decidable checks the repository as a whole must pass: layer
structure, naming, and registry consistency.

## Scope

- The repository tree and the registries (INDEX.md, CHANGELOG.md).

## Non-Scope

- Per-document structure ([Document Conformance Rules](document-conformance-rules.md)).

## Dependencies

- None normative (ARCH-06); each rule cites its source requirement.

## Interfaces

- **Inbound:** evaluated at stages 2 and 5 of the change workflow.
- **Outbound:** rules derive from OAES-SPEC-001 and OAES-SPEC-004.

## Rules

| Rule | Check | Derives from |
| --- | --- | --- |
| VREP-01 | Every top-level directory (excluding version-control metadata) matches `<NN>-<kebab-name>` and appears in the band table of OAES-SPEC-004. | ARCH-01, NAM-08 |
| VREP-02 | Every layer directory contains a README.md whose header Type is Layer Definition. | NAM-10 |
| VREP-03 | Every file name in the repository is lower-case kebab-case ASCII with an approved extension, except the root registries (README.md, INDEX.md, CONTRIBUTING.md, CHANGELOG.md) and per-layer README.md. | NAM-09 |
| VREP-04 | Every document's header Identifier appears exactly once in INDEX.md, and every INDEX.md entry resolves to an existing file. | NAM-04 |
| VREP-05 | No identifier appears in the headers of two different files. | NAM-01 |
| VREP-06 | Identifier sequence numbers within each type code are unique; retired numbers are marked Archived in INDEX.md, never reassigned. | NAM-03 |
| VREP-07 | Decision record files match `dec-<NNN>-<short-title>.md` and `<NNN>` equals the record's identifier number. | NAM-11 |
| VREP-08 | Every document's header Layer field matches the directory it resides in, or the document resides in 90-archive with its original layer stated. | NAM-02, ARCH-12 |
| VREP-09 | Every INDEX.md entry's recorded version equals the header version of the file it points to. | NAM-04, VER-05 |
| VREP-10 | No file outside 90-archive has header Status Archived, and every file inside 90-archive has Status Archived. | VER-09, ARCH-12 |

## Future Extension

- Registry-to-changelog consistency rules (edition pinning per VER-07) are added when the
  first post-1.0 edition is prepared.

## Related Documents

- [Naming Specification](../01-meta/naming-specification.md)
- [Architecture Specification](../02-architecture/architecture-specification.md)
- [Document Conformance Rules](document-conformance-rules.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
