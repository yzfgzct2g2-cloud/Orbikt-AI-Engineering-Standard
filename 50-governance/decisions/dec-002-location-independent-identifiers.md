# Decision: Location-Independent Identifiers

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-002 |
| Title | Location-independent identifiers with a single flat registry |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record the choice of identifier scheme for OAES artifacts.

## Scope

- Artifact identity (NAM-01 to NAM-05) and the role of INDEX.md.

## Non-Scope

- File and directory naming (decided alongside, in OAES-SPEC-001).

## Dependencies

- [Naming Specification](../../01-meta/naming-specification.md)

## Interfaces

- **Inbound:** cited by the Naming Specification.
- **Outbound:** none.

## Problem

Documents will be cited from outside the repository and from long-lived records. Over ten
years, documents will move between layers as the architecture is refactored. Citations
must survive every move.

## Options Considered

1. **Path-based identity** (the file path is the identifier). Zero bookkeeping, but every
   restructuring breaks every external citation and every decision record — unacceptable
   for an append-only record discipline.
2. **Layer-encoded identifiers** (for example `OAES-40-SPEC-...`). Human-friendly hint,
   but moving a document between layers would change its identity or make the hint lie;
   both outcomes are worse than no hint.
3. **Opaque sequential identifiers per type (`OAES-SPEC-012`) with a flat registry in
   INDEX.md.** Requires maintaining one registry, but identity survives any relocation,
   the registry doubles as the complete navigation index, and validators can enforce
   registry/reality agreement mechanically.

## Decision

Option 3: opaque, type-scoped sequential identifiers; INDEX.md is the single authoritative
registry (NAM-04); identifiers are never reused (NAM-03).

## Consequences

- Easier: refactoring, archiving, external citation, mechanical validation.
- Harder: one registry must be kept current — accepted, because registry drift is exactly
  the class of defect deterministic validation catches at zero human cost.

## Future Extension

- None beyond normal supersession.

## Related Documents

- [Naming Specification](../../01-meta/naming-specification.md)
- [INDEX.md](../../INDEX.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
