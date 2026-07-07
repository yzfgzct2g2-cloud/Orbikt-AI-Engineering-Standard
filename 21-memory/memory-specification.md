# Memory Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-009 |
| Title | Memory Specification |
| Layer | 21-memory |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how OAES-governed work records what happened — events, observations, decisions in
flight, and working state — so that history is reconstructible, evidence is preserved, and
raw records are never confused with verified knowledge.

## Scope

- Memory record structure, trust level, retention, and promotion into knowledge.

## Non-Scope

- Verified knowledge ([Knowledge Specification](../20-knowledge/knowledge-specification.md)).
- Storage technology; any medium providing append-only, timestamped records satisfies this
  specification.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)

## Interfaces

- **Inbound:** workflows deposit gate evidence as memory records (WFL-09); context
  assembly may retrieve memory with its trust level marked.
- **Outbound:** promotion of records into the knowledge layer per KNO-04 to KNO-06.

## Requirements

### Records

- **MEM-01** A *memory record* is an append-only, timestamped account of something
  observed or done. Every record MUST state: when (ISO 8601 timestamp), who or what
  produced it (role, and agent definition if agent-produced), what kind of record it is
  (MEM-02), and its content.
- **MEM-02** Every record MUST carry exactly one type from this table:

  | Type | Contents |
  | --- | --- |
  | Event | Something that happened (a gate passed, an evaluation ran). |
  | Observation | Something noticed but not yet verified (a suspected defect, a measurement). |
  | Evidence | Material supporting a specific gate, review, or claim. |
  | State | A snapshot of work in progress enabling resumption (WFL-09). |

  New types are added by minor change to this table.
- **MEM-03** Records MUST be immutable once written. Corrections are new records that
  reference the record they correct; the original remains.

### Trust

- **MEM-04** Memory is unverified by definition. A memory record MUST NOT be cited as if
  it were knowledge; when retrieved into context it MUST be marked with its memory trust
  level (Constitution Article III.3).
- **MEM-05** A memory record becomes knowledge only through *promotion*: verification and
  restatement as a knowledge artifact meeting KNO-04 to KNO-06, with the record retained
  as provenance.

### Retention

- **MEM-06** Every class of memory records MUST have a declared retention rule: keep
  indefinitely, keep until a named condition, or keep for a stated period. Records subject
  to privacy constraints follow the
  [Privacy Specification](../42-privacy/privacy-specification.md), which prevails on
  personal data.
- **MEM-07** Expired records are archived or destroyed per their retention rule and
  privacy constraints; destruction of records that served as evidence for an Active
  artifact is prohibited while that artifact remains Active.

## Validation

- Record structure (MEM-01, MEM-02) is deterministically checkable; immutability and
  promotion discipline (MEM-03, MEM-05) are verified in review.

## Future Extension

- Structured state-snapshot formats for long-running workflows may be standardized as a
  companion document when adopter patterns stabilize.

## Related Documents

- [Memory Record Template](../60-templates/tmpl-007-memory-record.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)
- [Privacy Specification](../42-privacy/privacy-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
