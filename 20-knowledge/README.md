# Layer 20 — Knowledge

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-20 |
| Title | Knowledge Layer |
| Type | Layer Definition |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how curated, authoritative knowledge is structured, sourced, and kept trustworthy.
This layer is the rule-set behind the Single Source of Truth principle: every fact has
exactly one authoritative home.

## Scope

- Structure, provenance, validity, and lifecycle rules for knowledge artifacts.

## Non-Scope

- Raw recorded events and state ([21-memory](../21-memory/README.md)).
- Task-time assembly of information ([22-context](../22-context/README.md)).
- Any actual domain knowledge — forbidden in this repository; adopters hold their
  knowledge in their own repositories under these rules.

## Responsibilities

- Guarantee that anything called "knowledge" is authoritative, sourced, current, and
  findable.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)

## Interfaces

- **Inbound:** the context layer retrieves from knowledge; the memory layer promotes
  records into knowledge; agents cite knowledge as evidence.
- **Outbound:** normative-core rules.

## Contents

| Document | Identifier |
| --- | --- |
| [knowledge-specification.md](knowledge-specification.md) | OAES-SPEC-008 |
| [knowledge-lifecycle-specification.md](knowledge-lifecycle-specification.md) | OAES-SPEC-026 |

## Future Extension

- Classification taxonomies for knowledge domains may be added by adopters; the structural
  rules here remain domain-free.

## Related Documents

- [Knowledge Artifact Template](../60-templates/tmpl-006-knowledge-artifact.md)
- [Memory Specification](../21-memory/memory-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-07 | OAES Standards Committee | Added the Knowledge Lifecycle Specification (OAES-SPEC-026). |
