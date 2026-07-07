# Layer 22 — Context

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-22 |
| Title | Context Layer |
| Type | Layer Definition |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how the working set for a specific task is assembled from knowledge and memory:
minimally, by retrieval before reasoning, and with full provenance of what was included
and why.

## Scope

- Context assembly rules, budgets, and provenance for any task executed under OAES.

## Non-Scope

- The stores context draws from ([20-knowledge](../20-knowledge/README.md),
  [21-memory](../21-memory/README.md)).
- Any technology's "context window"; the rules here apply equally to a human preparing a
  briefing and an automated retrieval pipeline.

## Responsibilities

- Enforce the context-minimization and retrieval-before-reasoning principles at the point
  where they matter: task execution.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [20-knowledge](../20-knowledge/README.md)
- [21-memory](../21-memory/README.md)

## Interfaces

- **Inbound:** every task assignment to an agent is accompanied by a context assembled
  under this layer's rules.
- **Outbound:** retrieval from knowledge and memory under their rules.

## Contents

| Document | Identifier |
| --- | --- |
| [context-specification.md](context-specification.md) | OAES-SPEC-010 |
| [context-pipeline-specification.md](context-pipeline-specification.md) | OAES-SPEC-025 |

## Future Extension

- Standard context profiles for recurring task classes may be added once adopter patterns
  stabilize.

## Related Documents

- [Context Specification](context-specification.md)
- [Agent Specification](../11-capabilities/agent-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-07 | OAES Standards Committee | Added the Context Pipeline Specification (OAES-SPEC-025). |
