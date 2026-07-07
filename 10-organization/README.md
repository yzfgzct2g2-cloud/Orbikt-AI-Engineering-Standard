# Layer 10 — Organization

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-10 |
| Title | Organization Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the roles that participate in OAES-governed work, their responsibilities, and how
accountability is assigned — independent of any particular team, company, or tooling.

## Scope

- Role definitions, responsibility assignment, and escalation paths.

## Non-Scope

- Requirements on automated executors ([11-capabilities](../11-capabilities/README.md)).
- Decision authority of governance bodies ([50-governance](../50-governance/README.md)).

## Responsibilities

- Guarantee that every artifact and every activity has an identified accountable human
  role (Constitution Article V).

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)

## Interfaces

- **Inbound:** workflows assign stages to roles defined here; governance bodies are
  composed of roles defined here.
- **Outbound:** normative-core rules.

## Contents

| Document | Identifier |
| --- | --- |
| [organization-specification.md](organization-specification.md) | OAES-SPEC-005 |

## Future Extension

- New roles are added to the role table of the Organization Specification by minor change.

## Related Documents

- [Governance Specification](../50-governance/governance-specification.md)
- [Agent Specification](../11-capabilities/agent-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
