# Layer 01 — Meta

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-01 |
| Title | Meta Layer |
| Type | Layer Definition |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Hold the standard's self-description: the enduring vision (North Star) and the rules that
govern OAES documents themselves — how artifacts are named and identified, how they are
versioned, and how they are structured and written. Every document in every layer must
conform to this layer's rules.

## Scope

- The North Star vision of the standard.
- Identity, naming, versioning, lifecycle status, and structural/editorial rules for all
  OAES artifacts.

## Non-Scope

- The content of any specific layer.
- Human-facing guides and manuals (layer [70-documentation](../70-documentation/README.md)).
- The process by which documents change (layer [51-evolution](../51-evolution/README.md)).

## Responsibilities

- Guarantee that every artifact is uniquely identifiable, versioned, and structurally
  uniform, so that humans and deterministic validators can process the repository without
  interpretation.

## Dependencies

- [00-constitution](../00-constitution/README.md)

## Interfaces

- **Inbound:** all layers; every document must satisfy the three specifications below.
- **Outbound:** none beyond the Constitution.

## Contents

| Document | Identifier |
| --- | --- |
| [north-star.md](north-star.md) | OAES-VISION-001 |
| [naming-specification.md](naming-specification.md) | OAES-SPEC-001 |
| [versioning-specification.md](versioning-specification.md) | OAES-SPEC-002 |
| [documentation-specification.md](documentation-specification.md) | OAES-SPEC-003 |

## Future Extension

- Additional meta specifications (for example, a localization specification) are added as
  new documents in this layer through the standard change process.

## Related Documents

- [Architecture Specification](../02-architecture/architecture-specification.md)
- [Document Conformance Rules](../63-validators/document-conformance-rules.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-07 | OAES Standards Committee | Added North Star (OAES-VISION-001); widened purpose to the standard's self-description (OAES-DEC-007). |
