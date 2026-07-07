# Knowledge Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-008 |
| Title | Knowledge Specification |
| Layer | 20-knowledge |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define what qualifies as *knowledge* in OAES-governed work and the rules that keep a
knowledge base authoritative for a decade: single sourcing, provenance, validity, and
controlled change.

## Scope

- Structural and lifecycle rules for knowledge artifacts in any OAES-governed knowledge
  base.

## Non-Scope

- The content of any knowledge base (domain knowledge is out of scope for this
  repository).
- Event and state records ([Memory Specification](../21-memory/memory-specification.md)).
- Retrieval mechanics at task time
  ([Context Specification](../22-context/context-specification.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Documentation Specification](../01-meta/documentation-specification.md)

## Interfaces

- **Inbound:** context assembly retrieves knowledge artifacts; agents cite them as
  evidence (AGT-11); memory records are promoted into them.
- **Outbound:** normative-core rules.

## Requirements

### Definition and single sourcing

- **KNO-01** A *knowledge artifact* is a curated statement of fact, convention,
  procedure, or constraint that has passed verification and is intended for reuse. Every
  knowledge artifact MUST have exactly one authoritative location; every other occurrence
  MUST be a reference to it (Constitution Article III.2).
- **KNO-02** Discovering the same fact maintained in two locations is a defect; the
  resolution MUST designate one authoritative location and convert the others to
  references, recorded as a correction.
- **KNO-03** Every knowledge artifact MUST be classified as exactly one of: **fact**
  (verifiable state of the world), **convention** (agreed choice among alternatives),
  **procedure** (ordered steps to an outcome), or **constraint** (boundary that must not
  be crossed). The classification determines its verification per the Quality
  Specification.

### Provenance and validity

- **KNO-04** Every knowledge artifact MUST record its provenance: where the content came
  from (source documents, measurements, decisions) and who verified it. An artifact
  without provenance is an assumption, not knowledge (Constitution Article III.3).
- **KNO-05** Every knowledge artifact MUST carry a validity declaration: either a review
  date by which it must be re-verified, or the conditions under which it becomes invalid.
  Expired artifacts MUST be marked stale and MUST NOT be cited as evidence until
  re-verified.
- **KNO-06** Output of a probabilistic agent MUST NOT become a knowledge artifact until a
  human-accountable verification has confirmed it (AGT-09).

### Structure and findability

- **KNO-07** Knowledge artifacts MUST be small enough to be retrieved independently: one
  artifact carries one fact, convention, procedure, or constraint. Compound documents are
  containers of artifacts, not artifacts themselves.
- **KNO-08** Every knowledge base MUST maintain an index through which every artifact is
  reachable, following the registry pattern of [INDEX.md](../INDEX.md).
- **KNO-09** Knowledge artifacts MUST declare the artifacts they depend on; circular
  dependence between artifacts is a defect.

### Change

- **KNO-10** Knowledge artifacts change only by versioned revision per the
  [Versioning Specification](../01-meta/versioning-specification.md); superseded content
  is archived, never overwritten silently.
- **KNO-11** When a decision record changes a convention or constraint, every knowledge
  artifact citing it MUST be reviewed for staleness as part of the same change.

## Validation

- Structural rules (KNO-01 header/location, KNO-03 classification, KNO-05 validity field,
  KNO-08 indexing) are deterministically checkable; provenance sufficiency (KNO-04) and
  promotion discipline (KNO-06) are review checks under the
  [Quality Specification](../40-quality/quality-specification.md).

## Future Extension

- Confidence grading of artifacts (beyond the binary verified/assumption distinction) may
  be added by minor change if adopters need finer trust levels.

## Related Documents

- [Knowledge Artifact Template](../60-templates/tmpl-006-knowledge-artifact.md)
- [Memory Specification](../21-memory/memory-specification.md)
- [Context Specification](../22-context/context-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
