# Layer 43 — Security

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-43 |
| Title | Security Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how the engineering process and its artifacts are protected: least privilege for
humans and agents, secret hygiene, integrity of records, and scrutiny of everything that
enters the trusted set.

## Scope

- Security duties for OAES-governed repositories, stores, agents, and tools.

## Non-Scope

- Application security of delivered products (adopter engineering concern, governed by the
  adopter's own requirements written under OAES rules).
- Personal-data handling ([42-privacy](../42-privacy/README.md)).

## Responsibilities

- Keep the standard's chain of trust intact: what is recorded is what happened, and only
  authorized parties could have recorded it.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [10-organization](../10-organization/README.md), [11-capabilities](../11-capabilities/README.md)
- [30-projects](../30-projects/README.md)

## Interfaces

- **Inbound:** agent authority boundaries and tool qualification incorporate the duties
  defined here; governance handles security escalations.
- **Outbound:** roles, agent definitions, project declarations.

## Contents

| Document | Identifier |
| --- | --- |
| [security-specification.md](security-specification.md) | OAES-SPEC-015 |

## Future Extension

- A threat catalog for AI-assisted engineering (informative) may be added as a companion
  document as the threat landscape evolves.

## Related Documents

- [Privacy Specification](../42-privacy/privacy-specification.md)
- [Tooling Specification](../64-tools/tooling-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
