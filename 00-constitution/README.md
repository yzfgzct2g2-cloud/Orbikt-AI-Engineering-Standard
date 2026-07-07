# Layer 00 — Constitution

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-00 |
| Title | Constitution Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Hold the single supreme document of the standard: the OAES Constitution. This layer is the
root of all authority in the repository. Every other document is subordinate to it.

## Scope

- The Constitution and nothing else.

## Non-Scope

- Procedures, formats, and technical rules. Those belong to lower-precedence layers.
- Amendment mechanics (defined in the [Evolution Specification](../51-evolution/evolution-specification.md);
  the Constitution only sets the amendment threshold).

## Responsibilities

- Define the mission, the enduring principles, and the precedence order of the standard.
- Define what may never be delegated to automated agents.
- Define the conditions under which the Constitution itself may change.

## Dependencies

- None. This layer is the root of the dependency graph.

## Interfaces

- **Inbound:** every OAES document derives its authority from this layer and must not
  contradict it.
- **Outbound:** none. The Constitution references other documents only informatively.

## Contents

| Document | Identifier |
| --- | --- |
| [constitution.md](constitution.md) | OAES-CONST-001 |

## Future Extension

- Amendments are appended as new articles; existing articles are superseded, never deleted.

## Related Documents

- [Architecture Specification](../02-architecture/architecture-specification.md)
- [Evolution Specification](../51-evolution/evolution-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
