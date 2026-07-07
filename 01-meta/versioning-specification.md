# Versioning Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-002 |
| Title | Versioning Specification |
| Layer | 01-meta |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how OAES artifacts and the standard as a whole are versioned, and the lifecycle
states an artifact passes through, so that any reader can determine exactly which rules
were in force at any point in time.

## Scope

- Version numbering of individual documents.
- Edition numbering of the standard as a whole.
- Artifact lifecycle states and transitions.

## Non-Scope

- The change process that produces new versions
  ([Evolution Specification](../51-evolution/evolution-specification.md)).
- Version control tooling (any system providing immutable history satisfies this
  specification).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Naming Specification](naming-specification.md)

## Interfaces

- **Inbound:** every document header carries a version and status governed by this
  specification; [CHANGELOG.md](../CHANGELOG.md) records edition history.
- **Outbound:** none.

## Requirements

### Document versions

- **VER-01** Every document MUST carry a version of the form `MAJOR.MINOR.PATCH`
  (Semantic Versioning 2.0.0 semantics applied to normative content).
- **VER-02** MAJOR MUST be incremented when a normative statement is removed, weakened, or
  changed such that previously conforming artifacts may no longer conform.
- **VER-03** MINOR MUST be incremented when normative statements are added or strengthened
  in a backward-compatible way.
- **VER-04** PATCH MUST be incremented for editorial changes that alter no normative
  meaning.
- **VER-05** A document's version MUST change if and only if its content changes; the
  Revision History table MUST gain one row per version.

### Editions of the standard

- **VER-06** The standard as a whole is released in **editions** named
  `Foundation <MAJOR>.<MINOR>` and recorded in [CHANGELOG.md](../CHANGELOG.md).
- **VER-07** An edition MUST pin the exact version of every Active document; an edition is
  immutable once released.
- **VER-08** An edition MINOR increment MUST NOT contain a MAJOR increment of any document
  in bands 0x–5x.

### Lifecycle status

- **VER-09** Every artifact MUST carry exactly one status:

  | Status | Meaning | Normative force |
  | --- | --- | --- |
  | Draft | Under authorship; may change freely | None |
  | Review | Submitted to the review process | None |
  | Active | Approved and in force | Full |
  | Deprecated | In force but scheduled for withdrawal; successor named | Full, with warning |
  | Archived | Withdrawn; retained in layer 90 | None |

- **VER-10** Permitted transitions are: Draft → Review, Review → Draft, Review → Active,
  Active → Deprecated, Deprecated → Archived, and Active → Archived only when a MAJOR
  change replaces the document. No other transitions are permitted.
- **VER-11** A Deprecated artifact MUST name its successor and its planned withdrawal
  edition in its header.
- **VER-12** Status transitions into and out of Active are approvals reserved to humans
  under Article V of the [Constitution](../00-constitution/constitution.md).

## Validation

- Header fields, version format, revision-history consistency, and status values are
  enforced by [Document Conformance Rules](../63-validators/document-conformance-rules.md).

## Future Extension

- Pre-release qualifiers (for example `1.1.0-draft.2`) may be introduced by a minor change
  to this specification if parallel draft tracks become necessary.

## Related Documents

- [Naming Specification](naming-specification.md)
- [Evolution Specification](../51-evolution/evolution-specification.md)
- [CHANGELOG.md](../CHANGELOG.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
