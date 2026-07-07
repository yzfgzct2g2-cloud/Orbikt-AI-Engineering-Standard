# Layer 12 — Workflow

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-12 |
| Title | Workflow Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how work moves: the structure every OAES-governed workflow must have — stages,
entry and exit criteria, gates, evidence, and human checkpoints.

## Scope

- The mandatory anatomy of workflows and the rules for defining, executing, and changing
  them.

## Non-Scope

- Who performs work ([10-organization](../10-organization/README.md)) and what executes it
  ([11-capabilities](../11-capabilities/README.md)).
- Any concrete development methodology; OAES constrains workflow *structure*, not the
  adopter's choice of process.

## Responsibilities

- Guarantee that all work is inspectable at gates, that failures have defined paths, and
  that no stage silently expands its mandate.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [10-organization](../10-organization/README.md)
- [11-capabilities](../11-capabilities/README.md)

## Interfaces

- **Inbound:** the project, quality, and evolution layers define their processes as
  workflows conforming to this layer.
- **Outbound:** roles from organization; agents from capabilities.

## Contents

| Document | Identifier |
| --- | --- |
| [workflow-specification.md](workflow-specification.md) | OAES-SPEC-007 |

## Future Extension

- A library of named standard workflows may be added as sibling documents once recurring
  patterns stabilize across adopters.

## Related Documents

- [Workflow Definition Template](../60-templates/tmpl-005-workflow-definition.md)
- [Example Workflow Definition](../61-examples/example-workflow-definition.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
