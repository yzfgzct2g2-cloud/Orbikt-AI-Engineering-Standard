# Layer 30 — Projects

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-30 |
| Title | Projects Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how real projects adopt and apply the standard: what a project must declare, which
artifacts it must maintain, and how it states its conformance.

## Scope

- Project charters, project lifecycle obligations, and conformance declaration.

## Non-Scope

- The projects themselves; no project content lives in this repository.
- Project management methodology (schedules, budgets, staffing).

## Responsibilities

- Provide the single bridge between this standard and the concrete repositories in which
  engineering work happens.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [10-organization](../10-organization/README.md), [11-capabilities](../11-capabilities/README.md), [12-workflow](../12-workflow/README.md)
- [20-knowledge](../20-knowledge/README.md), [21-memory](../21-memory/README.md), [22-context](../22-context/README.md)

## Interfaces

- **Inbound:** assurance layers audit projects through the artifacts required here.
- **Outbound:** operating-model and information layers, which projects instantiate.

## Contents

| Document | Identifier |
| --- | --- |
| [project-specification.md](project-specification.md) | OAES-SPEC-011 |

## Future Extension

- Project archetypes (standing product, time-boxed delivery, research) may be added as
  companion documents defining archetype-specific obligations.

## Related Documents

- [Project Charter Template](../60-templates/tmpl-008-project-charter.md)
- [Example Project Charter](../61-examples/example-project-charter.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
