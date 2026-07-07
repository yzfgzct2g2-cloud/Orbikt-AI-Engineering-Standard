# Layer 21 — Memory

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-21 |
| Title | Memory Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how events, observations, and working state are recorded over time. Memory is the
append-only raw material of the standard: unverified but faithful records, from which
knowledge is later distilled.

## Scope

- Record structure, retention, and the promotion path from memory to knowledge.

## Non-Scope

- Curated, verified truth ([20-knowledge](../20-knowledge/README.md)).
- Task-time working sets ([22-context](../22-context/README.md)).
- Any vendor's "memory" feature; this layer defines the record discipline, not a product.

## Responsibilities

- Guarantee that what happened can always be reconstructed, and that raw records never
  masquerade as verified knowledge.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [20-knowledge](../20-knowledge/README.md)

## Interfaces

- **Inbound:** workflows write evidence into memory; context assembly may retrieve from
  it with its lower trust level marked.
- **Outbound:** promotion into the knowledge layer under knowledge-layer rules.

## Contents

| Document | Identifier |
| --- | --- |
| [memory-specification.md](memory-specification.md) | OAES-SPEC-009 |

## Future Extension

- Additional record types are added to the Memory Specification's type table by minor
  change.

## Related Documents

- [Memory Record Template](../60-templates/tmpl-007-memory-record.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
