# Layer 40 — Quality

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-40 |
| Title | Quality Layer |
| Type | Layer Definition |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how work is verified: review types, evidence requirements, defect handling, and the
conformance levels a project can achieve against the standard.

## Scope

- Verification and review rules for all OAES-governed artifacts and for the standard's own
  documents.

## Non-Scope

- Performance measurement ([41-performance](../41-performance/README.md)).
- Deterministic rule sets themselves ([63-validators](../63-validators/README.md) publishes
  them; this layer mandates their use).

## Responsibilities

- Turn "evidence before assumption" into concrete review obligations and make conformance
  a measurable claim rather than a slogan.

## Dependencies

- [00-constitution](../00-constitution/README.md)
- [01-meta](../01-meta/README.md)
- [02-architecture](../02-architecture/README.md)
- [10-organization](../10-organization/README.md), [11-capabilities](../11-capabilities/README.md), [12-workflow](../12-workflow/README.md)
- [30-projects](../30-projects/README.md)

## Interfaces

- **Inbound:** every gate in every workflow consumes the review types defined here; the
  evolution layer requires them for changes to the standard itself.
- **Outbound:** workflow structure, role separation rules, project artifacts.

## Contents

| Document | Identifier |
| --- | --- |
| [quality-specification.md](quality-specification.md) | OAES-SPEC-012 |
| [assurance-loops-specification.md](assurance-loops-specification.md) | OAES-SPEC-029 |

## Future Extension

- Additional review types and conformance levels are added to the Quality Specification's
  tables by minor change.

## Related Documents

- [Review Record Template](../60-templates/tmpl-010-review-record.md)
- [Document Conformance Rules](../63-validators/document-conformance-rules.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-07 | OAES Standards Committee | Added the Assurance Loops Specification (OAES-SPEC-029). |
