# Decision: Preservation of the OAES v1 Lineage

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-017 |
| Title | Foundation editions 1.0–1.2 are preserved in place as the historical OAES v1 lineage |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Repository owner mandate, recorded by OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Record how the OAES v1 lineage (Foundation editions 1.0, 1.1, 1.2) is preserved when
OAES v2 becomes the current authority.

## Scope

- The authority status and physical location of every pre-v2 document in this
  repository.

## Non-Scope

- The content of the v2 specification ([OAES-DEC-011](dec-011-oaes-v2-frozen-kernel.md)).

## Dependencies

- [Historical lineage index](../../history/README.md)

## Interfaces

- **Inbound:** cited by [README.md](../../README.md), [INDEX.md](../../INDEX.md), and
  the consistency scan's scoping rules.
- **Outbound:** supersedes the Foundation editions *as current authority* while
  preserving them as evidence.

## Problem

OAES v2 replaces the Foundation architecture as the definition of OAES. The Foundation
documents (103 files, 24 layers, decision records DEC-001…010) are irreplaceable
engineering evidence, and their internal links assume their current paths. Moving or
rewriting them would destroy traceability; leaving them unmarked would present a
superseded model as current.

## Options Considered

1. **Move all v1 material into `90-archive/` or `history/`.** A clean current tree,
   but it breaks hundreds of internal links, churns 100+ files, and violates the
   lineage's own archival rules (which expect deliberate per-document retirement).
2. **Preserve v1 in place; mark authority at the entry points.** No file moves, no
   link breakage; the boundary is drawn by the root README, INDEX banner, a
   `history/` index, and consistency-scan scoping. Cost: historical directories
   remain visible at the repository root.

## Decision

Option 2. All Foundation-era documents remain at their original paths with their
content untouched. Authority is marked at entry points: the root
[README.md](../../README.md) presents OAES v2 as current; [INDEX.md](../../INDEX.md)
carries a historical-lineage banner; [`history/README.md`](../../history/README.md)
is the lineage index and v1→v2 transition narrative. The documentation consistency
scan treats the numbered layer directories as historical scope and only enforces v2
authority rules on v2 documents.

## Consequences

- Easier: full traceability; every v1 link keeps working; git history untouched.
- Harder: readers must respect the authority markers; the scan must stay correctly
  scoped.

## Future Extension

- Individual v1 documents may later be formally archived through the lineage's own
  evolution process; that is not required for v2.

## Related Documents

- [Historical lineage index](../../history/README.md)
- [CHANGELOG.md](../../CHANGELOG.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-18 | OAES Standards Committee | Initial record. |
