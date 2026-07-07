# Layer 63 — Validators

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-63 |
| Title | Validators Layer |
| Type | Layer Definition |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Publish the deterministic rule sets used in structural review (QUA-01): enumerated,
mechanically decidable checks derived from the specifications. The rule sets are the
contract; any implementation that evaluates them exactly is a conforming validator.

## Scope

- Validation rule sets (OAES-VAL documents) and descriptors of qualified validator
  implementations.

## Non-Scope

- The requirements the rules derive from (owned by the specifications; a rule set never
  adds a requirement, per ARCH-06 and TOOL-09).
- Qualification of implementations
  ([Tooling Specification](../64-tools/tooling-specification.md), per
  [OAES-DEC-005](../50-governance/decisions/dec-005-single-tooling-specification.md)).

## Responsibilities

- Keep every rule traceable to the requirement it checks, and every mechanically checkable
  requirement covered by a rule.

## Dependencies

- None normative (enablement band, ARCH-06); each rule cites the requirement it derives
  from.

## Interfaces

- **Inbound:** stage-2 and stage-5 gates of the change workflow run these rule sets;
  adopters run them over their own artifacts.
- **Outbound:** rules derive from meta-layer and architecture-layer requirements.

## Contents

| Document | Identifier |
| --- | --- |
| [document-conformance-rules.md](document-conformance-rules.md) | OAES-VAL-001 |
| [repository-structure-rules.md](repository-structure-rules.md) | OAES-VAL-002 |
| [record-conformance-rules.md](record-conformance-rules.md) | OAES-VAL-003 |

## Future Extension

- New rule sets are added as specifications gain mechanically checkable requirements;
  every rule set change cites the requirement change that motivated it.

## Related Documents

- [Quality Specification](../40-quality/quality-specification.md)
- [Tooling Specification](../64-tools/tooling-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-08 | OAES Standards Committee | Added the Record Conformance Rules (OAES-VAL-003). |
