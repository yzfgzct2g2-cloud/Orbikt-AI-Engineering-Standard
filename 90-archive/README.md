# Layer 90 — Archive

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-90 |
| Title | Archive Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Hold every retired artifact of the standard, immutably and findably, so that any past
state of the standard can be reconstructed and any old citation still resolves
(Constitution Article X).

## Scope

- Artifacts whose status is Archived (VER-09), moved here through the withdrawal path
  (EVO-05, EVO-10).

## Non-Scope

- Backups (an operational concern) and version-control history (which exists in addition
  to, not instead of, this layer).

## Responsibilities

- Preserve archived artifacts byte-for-byte, with their identity, final version, and the
  reference to what superseded them.

## Archive rules

1. An artifact enters only through the evolution workflow; direct additions are
   prohibited.
2. On entry, the artifact keeps its file content unchanged except two header updates:
   Status becomes Archived, and a Superseded-by field names the successor (or "none").
   Its original layer is stated so VREP-08 remains checkable.
3. Artifacts are filed under `<original-layer>/` subdirectories mirroring where they
   lived.
4. Nothing here is ever edited, deleted, or restored-in-place; reviving content means a
   new artifact citing the archived one. Sole exception: irreversible personal-data
   removal per PRV-09, itself recorded.
5. INDEX.md keeps every archived identifier listed, marked Archived (VREP-06).

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [51-evolution](../51-evolution/README.md)

## Interfaces

- **Inbound:** the evolution workflow deposits withdrawn artifacts.
- **Outbound:** none; the archive is terminal.

## Contents

| Document | Identifier |
| --- | --- |
| *Empty in Foundation 1.0 — nothing has been retired yet.* | — |

## Future Extension

- Subdirectories appear as layers retire artifacts; the rules above do not change with
  volume.

## Related Documents

- [Evolution Specification](../51-evolution/evolution-specification.md)
- [Versioning Specification](../01-meta/versioning-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
