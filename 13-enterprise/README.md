# Layer 13 — Enterprise

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-13 |
| Title | Enterprise Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how an organization operating many OAES projects works as a whole: its tiers, its
ownership of every engineering concern, its standard operating procedures, and the
communication protocol through which its parts exchange information of record.

## Scope

- The enterprise operating model (tiers, ownership, shared assets, procedures) and the
  enterprise communication protocol.

## Non-Scope

- Individual roles and their duties ([10-organization](../10-organization/README.md)).
- Decision authority over this standard ([50-governance](../50-governance/README.md)) —
  adopting enterprises mirror that structure for their own assets.
- Any specific org chart, head count, or company structure.

## Responsibilities

- Guarantee that at enterprise scale, every concern has exactly one owner, every exchange
  of record is traceable, and cross-project operations run as defined procedures.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [10-organization](../10-organization/README.md)
- [11-capabilities](../11-capabilities/README.md)
- [12-workflow](../12-workflow/README.md)

## Interfaces

- **Inbound:** projects escalate to and inherit shared assets from the enterprise tier;
  discovery classification and adapters are registered at this tier.
- **Outbound:** roles (organization), agents (capabilities), workflows (workflow layer).

## Contents

| Document | Identifier |
| --- | --- |
| [enterprise-specification.md](enterprise-specification.md) | OAES-SPEC-021 |
| [communication-specification.md](communication-specification.md) | OAES-SPEC-022 |

## Future Extension

- Federation between cooperating enterprises is expected v3 territory (see the
  [Architecture Decision Journal](../02-architecture/architecture-decision-journal.md)).

## Related Documents

- [Organization Specification](../10-organization/organization-specification.md)
- [Governance Specification](../50-governance/governance-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
