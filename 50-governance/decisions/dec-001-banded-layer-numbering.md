# Decision: Banded Numeric Layer Prefixes

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-001 |
| Title | Banded numeric layer prefixes |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record the choice of directory scheme for the standard's layers.

## Scope

- Top-level repository structure.

## Non-Scope

- File naming within layers (OAES-SPEC-001).

## Dependencies

- [Architecture Specification](../../02-architecture/architecture-specification.md)

## Interfaces

- **Inbound:** cited by the Architecture and Naming Specifications.
- **Outbound:** none.

## Problem

Twenty-four layers must be presented so that reading order, precedence, and grouping are
visible in a plain directory listing, while remaining stable when layers are added over a
decade.

## Options Considered

1. **Unnumbered names, order defined only in a manifest.** Maximally rename-proof, but a
   directory listing shows alphabetical noise; precedence (Constitution Article I) becomes
   invisible exactly where people browse.
2. **Sequential two-digit prefixes (01–24).** Visible order, but inserting a layer
   mid-sequence forces renumbering — which ARCH-03 must forbid for reference stability —
   so the sequence would fossilize immediately.
3. **Banded prefixes (00–02, 10–12, 20–22, 30, 40–43, 50–51, 60–64, 70–71, 90).**
   Visible order and grouping; each band keeps free numbers, so insertion never renumbers
   anything; the band digit doubles as a precedence signal.

## Decision

Option 3: banded prefixes, with band 8x reserved and numbers assigned once, never reused
(ARCH-03).

## Consequences

- Easier: navigation, precedence resolution, structural validation, future insertion.
- Harder: band semantics must be learned (mitigated by the band table in OAES-SPEC-004);
  a full band (ten layers) would force a new band rather than renumbering.

## Future Extension

- Superseding this decision requires a major structural change per ARCH-12.

## Related Documents

- [Architecture Specification](../../02-architecture/architecture-specification.md)
- [Naming Specification](../../01-meta/naming-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
