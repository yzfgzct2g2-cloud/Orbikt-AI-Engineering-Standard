# Layer 31 — Discovery

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-31 |
| Title | Discovery Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how every project begins: the reusable Discovery Framework that turns a raw
request into an approved charter through classification, goal alignment, questions,
suggestions, constraint discovery, risk discovery, and requirement validation — before
any implementation work starts.

## Scope

- The Discovery Framework and its records.

## Non-Scope

- The charter's ongoing obligations ([30-projects](../30-projects/README.md)).
- Domain-specific question banks, constraint catalogs, and risk catalogs — supplied by
  adapters ([32-adapters](../32-adapters/README.md)); this layer defines the domain-free
  framework they plug into.

## Responsibilities

- Guarantee that no OAES-governed work is executed on an ununderstood request: goals
  aligned, material questions answered, risks and constraints on record, approval human.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [10-organization](../10-organization/README.md), [12-workflow](../12-workflow/README.md), [13-enterprise](../13-enterprise/README.md)
- [20-knowledge](../20-knowledge/README.md), [22-context](../22-context/README.md)
- [30-projects](../30-projects/README.md)

## Interfaces

- **Inbound:** project intake at any tier enters here; the project lifecycle (OAES-SPEC-031)
  makes Discovery its mandatory first phase.
- **Outbound:** charters (PRJ-01), questions as messages (COM-03), classification from
  enterprise taxonomies and adapters.

## Contents

| Document | Identifier |
| --- | --- |
| [discovery-specification.md](discovery-specification.md) | OAES-SPEC-023 |

## Future Extension

- Re-discovery profiles for standing products (periodic lightweight discovery) may be
  added as a companion document.

## Related Documents

- [Discovery Record Template](../60-templates/tmpl-011-discovery-record.md)
- [Risk Record Template](../60-templates/tmpl-012-risk-record.md)
- [Project Lifecycle Specification](../30-projects/project-lifecycle-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
