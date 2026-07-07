# Layer 11 — Capabilities

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-11 |
| Title | Capabilities Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define what an *agent* is in OAES — any bounded executor of engineering tasks, whether a
deterministic program or a probabilistic AI system — and the requirements every agent must
satisfy before it may participate in OAES-governed work.

## Scope

- Agent definition, declaration, authority boundaries, substitution, and evaluation.

## Non-Scope

- Who is accountable for agents ([10-organization](../10-organization/README.md)).
- How agents are sequenced into work ([12-workflow](../12-workflow/README.md)).
- Qualification of supporting tools ([64-tools](../64-tools/README.md)).

## Responsibilities

- Keep the standard model-neutral: every capability is expressed as a testable requirement
  that any conforming implementation — of any vendor, or none — can satisfy.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [10-organization](../10-organization/README.md)

## Interfaces

- **Inbound:** workflows invoke agents declared under this layer; quality evaluates them.
- **Outbound:** organization-layer accountability rules.

## Contents

| Document | Identifier |
| --- | --- |
| [agent-specification.md](agent-specification.md) | OAES-SPEC-006 |

## Future Extension

- Capability profiles (named bundles of agent requirements for recurring task classes) may
  be added as further documents in this layer.

## Related Documents

- [Agent Definition Template](../60-templates/tmpl-004-agent-definition.md)
- [Example Agent Definition](../61-examples/example-agent-definition.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
