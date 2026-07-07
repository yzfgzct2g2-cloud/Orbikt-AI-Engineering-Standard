# Decision: North Star Placement and the Vision Document Class

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-007 |
| Title | North Star as a Vision-class document in 01-meta |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Record where the standard's vision document lives, what class it has, and its relation
to the Constitution.

## Scope

- Placement, classification, and authority of OAES-VISION-001.

## Non-Scope

- The North Star's content.

## Dependencies

- [Documentation Specification](../../01-meta/documentation-specification.md)
- [Naming Specification](../../01-meta/naming-specification.md)

## Interfaces

- **Inbound:** cited by the meta layer README and the North Star itself.
- **Outbound:** exercises the DOCU-01 and NAM-05 extension points.

## Problem

The standard needed a permanent statement of intent — the test applied to future ideas —
requested at the path `meta/North-Star.md`. Three questions had to be settled: which
layer owns it, what document class it is, and how it relates to the Constitution without
creating two supreme documents.

## Options Considered

1. **Fold the vision into the Constitution as new articles.** One supreme document, but
   it mixes rules (testable, binding) with intent (persuasive, interpretive) — and makes
   the vision amendable only by unanimous vote, discouraging the honest evolution of
   wording that intent documents need.
2. **A root-level file outside the layer model.** Maximally visible, but the root is
   reserved for registries; a document outside every layer has no steward and weakens
   ARCH-01.
3. **A new Vision document class (DOCU-01) and VISION type code (NAM-05), placed in
   01-meta with the layer's purpose widened to "the standard's self-description".**
   Normatively informative (DOCU-02 unchanged — it binds through the architecture
   review, IMP-04, not through conformance), stewarded like everything else.

## Decision

Option 3. The requested path is honored as `01-meta/north-star.md` — the meta layer *is*
the "meta/" directory, and NAM-09 requires kebab-case file names. Authority relation:
the Constitution voids conflicting text; the North Star fails proposals in architecture
review. Rules bind; intent persuades — and both are written down.

## Consequences

- Easier: intent is citable in reviews without inflating the Constitution; the two
  extension mechanisms (document class, type code) got exercised and proven.
- Harder: newcomers must learn that "supreme rule" and "supreme intent" are two
  documents — mitigated by each linking the other in its header sections.

## Future Extension

- None beyond normal supersession; the North Star's own revision rule is stated in its
  Future Extension section.

## Related Documents

- [North Star](../../01-meta/north-star.md)
- [Improvement Specification](../../51-evolution/improvement-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial record. |
