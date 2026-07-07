# Layer 42 — Privacy

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-42 |
| Title | Privacy Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how data — especially data about people — is classified, minimized, and handled in
OAES-governed work, in a way that remains valid under any jurisdiction's law by staying
stricter than convenience and neutral to legal regimes.

## Scope

- Data classification, minimization, and handling duties across all layers that store or
  move data (knowledge, memory, context, projects).

## Non-Scope

- Legal compliance advice; adopters map these rules to their applicable law.
- Protection of artifacts against attackers ([43-security](../43-security/README.md)).

## Responsibilities

- Ensure no OAES-governed store or context accumulates personal data by accident or keeps
  it beyond need.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [20-knowledge](../20-knowledge/README.md), [21-memory](../21-memory/README.md), [22-context](../22-context/README.md)
- [30-projects](../30-projects/README.md)

## Interfaces

- **Inbound:** memory retention (MEM-06) and context assembly defer to this layer on
  personal data; project charters declare their data classes.
- **Outbound:** information-layer storage rules.

## Contents

| Document | Identifier |
| --- | --- |
| [privacy-specification.md](privacy-specification.md) | OAES-SPEC-014 |

## Future Extension

- Jurisdiction mapping guides (informative) may be added in the documentation layer;
  normative rules here stay jurisdiction-neutral.

## Related Documents

- [Security Specification](../43-security/security-specification.md)
- [Memory Specification](../21-memory/memory-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
