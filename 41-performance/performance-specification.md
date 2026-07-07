# Performance Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-013 |
| Title | Performance Specification |
| Layer | 41-performance |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the discipline for performance: how any performance requirement — of a delivered
artifact or of the engineering process itself — is stated, measured against a baseline,
and verified with evidence. OAES sets no targets; it makes targets impossible to fake.

## Scope

- Form of performance requirements, measurement rules, baselines, and regression handling.

## Non-Scope

- Any concrete metric, threshold, technology, or domain target.
- Cost accounting and budgeting of adopter organizations.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Quality Specification](../40-quality/quality-specification.md)

## Interfaces

- **Inbound:** projects state their performance requirements in this form; gates verify
  them like any other exit criterion.
- **Outbound:** evidence storage (MEM-01), review records (QUA-04).

## Requirements

### Stating requirements

- **PER-01** Every performance requirement MUST state: the quantity measured, the unit,
  the measurement procedure, the conditions under which it is measured, and the acceptance
  threshold. A requirement missing any element is not a performance requirement.
- **PER-02** Performance requirements apply to two subjects, and each requirement MUST
  declare which: **product performance** (behavior of delivered artifacts) and **process
  performance** (efficiency of the engineering process — for example, context size per
  task class per CTX-07, review latency, or rework rate).
- **PER-03** Performance requirements MUST be recorded where their subject is defined: in
  the project's artifacts for product performance, in workflow definitions for process
  performance.

### Measurement

- **PER-04** Measurements MUST be produced by a deterministic, repeatable procedure;
  a measurement whose procedure cannot be rerun is an observation, not a measurement.
- **PER-05** Every measurement used at a gate MUST be stored as evidence (MEM-02) with its
  procedure, conditions, and raw result.
- **PER-06** Estimates and predictions — including agent-produced ones — MUST be labeled
  as such and MUST NOT satisfy a performance requirement; only measurements do
  (Constitution Article III.3).

### Baselines and regression

- **PER-07** Every performance requirement under ongoing verification MUST have a recorded
  baseline: the accepted measurement against which change is judged.
- **PER-08** A regression — a measurement worse than baseline beyond the requirement's
  stated tolerance — is a defect per QUA-09 and follows defect handling; accepting a new,
  worse baseline is a recorded human decision, never a silent update.

## Validation

- PER-01 completeness and PER-05 evidence presence are deterministically checkable;
  procedure repeatability (PER-04) is verified in content review.

## Future Extension

- An informative catalog of process-performance indicators proven useful across adopters
  may be added as a companion document.

## Related Documents

- [Quality Specification](../40-quality/quality-specification.md)
- [Context Specification](../22-context/context-specification.md)
- [Memory Specification](../21-memory/memory-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
