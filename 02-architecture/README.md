# Layer 02 — Architecture

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-02 |
| Title | Architecture Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the structural architecture of the standard: the layer model, the band structure,
the dependency rules between layers, and the procedure for structural change. This layer
answers "where does a concern live, and what may it depend on?"

## Scope

- The layer/band model, layer numbering, dependency rules, and extension points of the
  repository structure.

## Non-Scope

- The content of any individual layer.
- Software architecture of adopting projects (out of OAES scope).

## Responsibilities

- Keep the repository structure acyclic, navigable, and stable under growth.
- Provide the authoritative layer dependency map.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)

## Interfaces

- **Inbound:** every layer's position, number, and permitted dependencies are assigned
  here; validators enforce the structure defined here.
- **Outbound:** meta-layer rules for its own documents.

## Contents

| Document | Identifier |
| --- | --- |
| [architecture-specification.md](architecture-specification.md) | OAES-SPEC-004 |

## Future Extension

- New layers and bands are introduced only via the extension procedure in the Architecture
  Specification (requirements ARCH-10 to ARCH-12).

## Related Documents

- [Repository Structure Rules](../63-validators/repository-structure-rules.md)
- [Decision OAES-DEC-001 — Banded layer numbering](../50-governance/decisions/dec-001-banded-layer-numbering.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
