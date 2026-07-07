# Decision: Specifications Live in Their Owning Layers

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-003 |
| Title | Specifications live in their owning layers, not a central folder |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record where specification documents are placed in the repository.

## Scope

- Placement of all OAES-SPEC documents.

## Non-Scope

- Their identifiers (OAES-DEC-002) or internal structure (OAES-SPEC-003).

## Dependencies

- [Architecture Specification](../../02-architecture/architecture-specification.md)

## Interfaces

- **Inbound:** cited by the Architecture layer README.
- **Outbound:** none.

## Problem

Twenty specifications could sit together in one `specifications/` directory or be
distributed into the layers whose concern they define. Both patterns exist in mature
standards bodies.

## Options Considered

1. **Central `specifications/` directory.** One place to find every normative document;
   but it detaches each specification from its layer, turns layer directories into empty
   shells, and creates a second structure that must be kept consistent with the layer
   model — a standing violation of single sourcing.
2. **Specification inside its owning layer, with a flat registry in INDEX.md.** The layer
   directory is self-contained (definition + specification + companions); cohesion follows
   the architecture; the flat "see everything" view is provided by the registry, which
   must exist anyway (NAM-04).

## Decision

Option 2. Each layer directory contains its layer definition (README.md) and the
specifications it owns; INDEX.md provides the flat view.

## Consequences

- Easier: layer-scoped stewardship (one Steward owns one directory), coherent reading,
  archiving a layer as a unit.
- Harder: browsing all specifications requires the index — accepted, since the index is
  authoritative anyway.

## Future Extension

- None beyond normal supersession.

## Related Documents

- [Architecture Specification](../../02-architecture/architecture-specification.md)
- [INDEX.md](../../INDEX.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
