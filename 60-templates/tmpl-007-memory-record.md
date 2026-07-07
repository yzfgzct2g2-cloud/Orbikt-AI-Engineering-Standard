# Template: Memory Record

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-007 |
| Title | Memory Record Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-009 (Memory Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Write an append-only, typed, attributable record of an event, observation, evidence, or
state snapshot (MEM-01, MEM-02).

## Scope

- The skeleton for memory records of all MEM-02 types.

## Non-Scope

- Knowledge artifacts (OAES-TMPL-006) — memory is unverified by definition (MEM-04).

## Responsibilities

- A filled instance is accountable for being a faithful account of what happened, never
  edited afterward (MEM-03).

## Inputs

- The occurrence to record, its type, and the producing role (and agent definition, if
  agent-produced).

## Outputs

- An immutable memory record usable as gate evidence (QUA-08) or promotion material
  (MEM-05).

## Interfaces

- **Inbound:** copied by workflows depositing evidence and state.
- **Outbound:** mirrors OAES-SPEC-009 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Timestamp, producer, and type fields are deterministically checkable.

## Future Extension

- Structured state-snapshot variants may be derived if OAES-SPEC-009 standardizes them.

## Related Documents

- [Memory Specification](../21-memory/memory-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# Memory Record: {{short-title}}

| Field | Value |
| --- | --- |
| Identifier | {{project-record-id}} |
| Timestamp | {{yyyy-mm-ddThh:mm:ssZ}} |
| Type | {{event-observation-evidence-or-state}} (MEM-02) |
| Produced by | {{role — and-agent-definition-id-if-agent-produced}} (MEM-01) |
| Retention rule | {{keep-indefinitely-condition-or-period}} (MEM-06) |
| Corrects | {{record-id-or-none}} (MEM-03) |

## Content

{{the-faithful-account — for-evidence:-what-claim-or-gate-it-supports;
for-state:-what-is-needed-to-resume-per-WFL-09}}

## Trust Note

This is a memory record: unverified by definition (MEM-04). Promotion to knowledge
requires verification per MEM-05.
```
