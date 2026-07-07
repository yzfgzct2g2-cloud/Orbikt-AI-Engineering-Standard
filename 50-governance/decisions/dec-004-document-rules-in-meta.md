# Decision: Document Rules Live in Meta, Guides in Documentation

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-004 |
| Title | Document rules live in the meta layer; the documentation layer holds guides |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record the split of "documentation" between two layers, which resolves a dependency cycle
present in the naive layering.

## Scope

- Placement of the Documentation Specification (OAES-SPEC-003) and of human-facing guides.

## Non-Scope

- The content of either.

## Dependencies

- [Architecture Specification](../../02-architecture/architecture-specification.md)

## Interfaces

- **Inbound:** cited by the meta and documentation layer READMEs.
- **Outbound:** none.

## Problem

Every document in every layer must obey the document-structure rules. If those rules lived
in layer 70-documentation, every document — including the normative core — would depend
normatively on a band-7x artifact, violating the downward-only dependency rule (ARCH-04)
and creating a cycle at the root of the standard.

## Options Considered

1. **Keep document rules in 70-documentation and exempt them from the dependency rule.**
   Preserves the intuitive name, but the very first structural rule of the architecture
   would ship with an exemption — an invitation to further exemptions.
2. **Move the documentation layer into band 0x.** Fixes the cycle but overloads the
   normative core with guides, manuals, and reading paths that are informative by nature.
3. **Split the concern: normative document rules (OAES-SPEC-003) in 01-meta; informative
   guides in 70-documentation.** The dependency rule holds without exemption; the split
   also matches normative/informative classification (DOCU-02).

## Decision

Option 3. Layer 01-meta owns naming, versioning, and documentation rules; layer
70-documentation owns only informative guides, on which nothing depends normatively
(ARCH-06).

## Consequences

- Easier: a clean, exemption-free dependency rule; validators enforce document structure
  from a band-0x source.
- Harder: newcomers may look for document rules in "documentation" first — mitigated by a
  pointer in the 70-documentation README.

## Future Extension

- None beyond normal supersession.

## Related Documents

- [Documentation Specification](../../01-meta/documentation-specification.md)
- [Layer 70 README](../../70-documentation/README.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
