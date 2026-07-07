# Memory Lifecycle Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-027 |
| Title | Memory Lifecycle Specification |
| Layer | 21-memory |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the lifecycle of memory: what gets captured, how long it lives, how observations
become knowledge, and how expiry actually happens — so memory stores neither swallow
everything forever nor lose what mattered.

## Scope

- Capture discipline, promotion sweeps, compaction, and expiry execution, extending the
  [Memory Specification](memory-specification.md).

## Non-Scope

- Record structure and trust rules (OAES-SPEC-009 — unchanged).
- Knowledge states after promotion
  ([Knowledge Lifecycle Specification](../20-knowledge/knowledge-lifecycle-specification.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Memory Specification](memory-specification.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)

## Interfaces

- **Inbound:** the memory steward (ENT-03) executes the sweeps defined here; capture
  points are declared by workflows, engagements (CAP-02), and messages (COM-02).
- **Outbound:** record rules (MEM-01 to MEM-07); privacy retention duties apply
  cross-cuttingly per ARCH-07.

## Requirements

### Capture

- **MLC-01** Every record moves through: Captured → Retained → (Promoted | Expired) →
  Archived or Destroyed. There is no editing state — corrections are new records
  (MEM-03).
- **MLC-02** Capture happens at *declared capture points* — gate evidence (WFL-02),
  engagement transitions (CAP-02), messages of record (COM-02), and any points a
  workflow adds. Memory is not surveillance: capturing beyond declared points violates
  minimization, and personal data at any capture point follows the privacy layer's
  duties (ARCH-07).

### Promotion

- **MLC-03** The memory steward MUST run a *promotion sweep* on a declared cadence (at
  most quarterly for active scopes): review Observation records for content worth
  promoting (MEM-05), and record an outcome per candidate — promoted, declined (with
  reason), or deferred (with revisit date). Unswept observation backlog is *memory debt*.
- **MLC-04** Promotion produces a Proposed knowledge artifact (KLC-01) citing the source
  records as provenance; the records remain in memory (MEM-05).

### Compaction

- **MLC-05** Stores MAY compact: a *summary record* may be created over a set of records,
  citing every source. Summaries are new records, never replacements; sources expire only
  by their own retention rules. A summary inherits the lowest trust level of its sources.

### Expiry

- **MLC-06** Expiry MUST be executed, not merely declared: the steward's *retention
  sweep* (same cadence class as MLC-03) applies retention rules (MEM-06), respecting the
  evidence hold of MEM-07 and executing personal-data removal duties (the privacy
  layer's sole append-only exception). Each execution is itself recorded — without
  reproducing removed content.

### Debt

- **MLC-07** Memory debt — unswept observations, overdue sweeps, past-due retentions —
  MUST be measured per MET rules; threshold breaches raise improvement items (IMP-01).

## Extension Points

- New capture points are declared in workflow definitions, not here.
- Structured state-snapshot formats (OAES-SPEC-009's declared future extension) slot in
  as a record subtype without changing this lifecycle.

## Metrics

- Memory debt (MLC-07); promotion yield (promoted / reviewed — chronically zero suggests
  capture points are wrong); retention execution latency.

## Failure Modes and Recovery

- *Hoarding* (retention rules all say "indefinite"): surfaced by retention sweeps having
  nothing to do plus privacy review (PRV-08 forbids indefinite personal data); recovery
  is a retention-rule review.
- *Promotion starvation* (valuable observations never reviewed): visible as memory debt;
  recovery is cadence enforcement through ownership (ENT-04).
- *Lossy compaction* (summary cited, sources gone early): prohibited by MLC-05 source
  retention; if discovered, the summary is demoted to Observation trust until sources
  are re-verified.

## Validation

- Sweep records, per-candidate outcomes (MLC-03), and expiry execution records (MLC-06)
  are deterministically checkable; capture-point discipline (MLC-02) is a
  conformance-review check.

## Future Extension

- Cross-scope memory transfer (project closure depositing into enterprise memory) may be
  specified as a companion when PLC-05 closure practice matures.

## Related Documents

- [Memory Specification](memory-specification.md)
- [Knowledge Lifecycle Specification](../20-knowledge/knowledge-lifecycle-specification.md)
- [Privacy Specification](../42-privacy/privacy-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
