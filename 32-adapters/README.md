# Layer 32 — Adapters

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-32 |
| Title | Adapters Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how domain-, technology-, and organization-specific content binds to the standard
without ever entering it: the Domain Adapter architecture. Adapters are external,
versioned packages; this layer holds only the rules they must satisfy.

## Scope

- The Domain Adapter Specification. No adapter content lives here — ever.

## Non-Scope

- Adapter content itself (external, adopter-owned; Constitution Article IV keeps it out
  of this repository permanently).
- Project obligations ([30-projects](../30-projects/README.md)).

## Responsibilities

- Keep the dependency direction absolute: adapters depend on the core; the core never
  depends on any adapter.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [13-enterprise](../13-enterprise/README.md)
- [20-knowledge](../20-knowledge/README.md)
- [30-projects](../30-projects/README.md), [31-discovery](../31-discovery/README.md)

## Interfaces

- **Inbound:** discovery classification selects adapters (DSC-03); project charters
  declare them (ADP-07); the enterprise register lists them (ENT-10).
- **Outbound:** core extension points the adapters fill (question banks, catalogs,
  knowledge seeds, validators, KPI defaults).

## Contents

| Document | Identifier |
| --- | --- |
| [domain-adapter-specification.md](domain-adapter-specification.md) | OAES-SPEC-030 |

## Future Extension

- Adapter certification (conformance review of adapters as products) is expected v3
  territory.

## Related Documents

- [Discovery Specification](../31-discovery/discovery-specification.md)
- [OAES-DEC-008 — Domain adapter isolation](../50-governance/decisions/dec-008-domain-adapter-isolation.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
