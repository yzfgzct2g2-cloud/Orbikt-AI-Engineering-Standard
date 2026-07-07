# Naming Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-001 |
| Title | Naming Specification |
| Layer | 01-meta |
| Type | Specification |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how every artifact in OAES — layers, documents, requirements, decisions, templates,
and files — is named and identified, so that references remain stable for the life of the
standard.

## Scope

- Identifiers, file names, directory names, and requirement numbering for all OAES
  artifacts.

## Non-Scope

- Version numbers and lifecycle status ([Versioning Specification](versioning-specification.md)).
- Naming conventions inside adopting projects' source code (out of OAES scope entirely).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)

## Interfaces

- **Inbound:** every document and every registry (notably [INDEX.md](../INDEX.md)) uses the
  identifier scheme defined here.
- **Outbound:** none.

## Requirements

### Identifiers

- **NAM-01** Every artifact MUST carry exactly one identifier of the form
  `OAES-<TYPE>-<NNN>`, where `<TYPE>` is a registered type code and `<NNN>` is a
  zero-padded sequence number unique within that type.
- **NAM-02** Identifiers MUST be location-independent: moving a file MUST NOT change its
  identifier, and no identifier may encode a path, layer number, or band.
- **NAM-03** Identifiers MUST never be reused. A retired identifier remains reserved
  forever and resolves to the archived artifact.
- **NAM-04** The authoritative identifier registry is [INDEX.md](../INDEX.md). An
  identifier not listed there does not exist.
- **NAM-05** The registered type codes are:

  | Type code | Artifact type | Example |
  | --- | --- | --- |
  | `CONST` | Constitution | OAES-CONST-001 |
  | `LAYER` | Layer definition (uses the two-digit layer number as `NNN`) | OAES-LAYER-01 |
  | `SPEC` | Specification | OAES-SPEC-001 |
  | `TMPL` | Template | OAES-TMPL-001 |
  | `DEC` | Decision record | OAES-DEC-001 |
  | `VAL` | Validation rule set | OAES-VAL-001 |
  | `EXA` | Example | OAES-EXA-001 |
  | `GUIDE` | Guide | OAES-GUIDE-001 |
  | `REF` | Reference document | OAES-REF-001 |
  | `VISION` | Vision document | OAES-VISION-001 |

  New type codes are added to this table through a minor change to this specification.

### Requirement identifiers

- **NAM-06** Every normative requirement MUST carry an identifier `<PREFIX>-<NN>` unique
  within its document, where `<PREFIX>` is the document's registered requirement prefix
  (declared in [INDEX.md](../INDEX.md)) and `<NN>` is a two-digit number.
- **NAM-07** Requirement identifiers MUST never be renumbered. A withdrawn requirement
  keeps its number and is marked *Withdrawn*; new requirements take the next free number.

### Files and directories

- **NAM-08** Layer directories MUST be named `<NN>-<layer-name>`, where `<NN>` is the
  two-digit layer number assigned by the
  [Architecture Specification](../02-architecture/architecture-specification.md) and
  `<layer-name>` is lower-case kebab-case.
- **NAM-09** File names MUST be lower-case kebab-case ASCII (`[a-z0-9-]`), with the `.md`
  extension for documents, and MUST describe content, not history (never `-new`, `-v2`,
  `-final`).
- **NAM-10** Every layer directory MUST contain a `README.md` that is that layer's layer
  definition document.
- **NAM-11** Decision record files MUST be named `dec-<NNN>-<short-title>.md` matching the
  decision's identifier number.

### Names in prose

- **NAM-12** The standard MUST be referred to as "OAES" or "the Orbikt AI Engineering
  Standard"; documents MUST be cited by identifier, title, or relative link — never by
  bare path fragments that would break on relocation.

## Validation

- Rules NAM-01 through NAM-12 are deterministically checkable and are enforced by
  [Repository Structure Rules](../63-validators/repository-structure-rules.md) and
  [Document Conformance Rules](../63-validators/document-conformance-rules.md).

## Future Extension

- Additional type codes (NAM-05 table) and additional artifact classes may be registered
  through minor changes; the identifier grammar itself changes only through a major change.

## Related Documents

- [Versioning Specification](versioning-specification.md)
- [Documentation Specification](documentation-specification.md)
- [INDEX.md](../INDEX.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-07 | OAES Standards Committee | Registered VISION type code (NAM-05) for the North Star (OAES-DEC-007). |
