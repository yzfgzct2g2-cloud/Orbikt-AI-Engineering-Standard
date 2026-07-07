# Layer 64 — Tools

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-64 |
| Title | Tools Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Own the Tooling Specification — the qualification and registry rules for every supporting
tool (generators, validators, and general utilities) — and hold the descriptors of
qualified general-purpose tools.

## Scope

- The Tooling Specification and descriptors of qualified tools that are neither
  generators (layer 62) nor validators (layer 63).

## Non-Scope

- Tool implementations: no executable code lives in this repository; the standard must
  remain readable and operable without running anything.
- Agent capability requirements ([11-capabilities](../11-capabilities/README.md)) — a tool
  becomes an agent the moment it acts on artifacts autonomously, and then needs an agent
  definition too.

## Responsibilities

- Keep the shared qualification bar for all three tool-oriented layers in one place
  ([OAES-DEC-005](../50-governance/decisions/dec-005-single-tooling-specification.md)).

## Dependencies

- None normative (enablement band, ARCH-06).

## Interfaces

- **Inbound:** layers 62 and 63 apply this layer's qualification rules; SEC-09 admits only
  tools qualified here.
- **Outbound:** security duties (SEC-01, SEC-10) referenced by qualification.

## Contents

| Document | Identifier |
| --- | --- |
| [tooling-specification.md](tooling-specification.md) | OAES-SPEC-020 |

## Future Extension

- Tool descriptors are registered here as tools are qualified.

## Related Documents

- [Layer 62 — Generators](../62-generators/README.md)
- [Layer 63 — Validators](../63-validators/README.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
