# Context Pipeline Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-025 |
| Title | Context Pipeline Specification |
| Layer | 22-context |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define context assembly as a staged, repeatable pipeline with a feedback loop — so that
"retrieval before reasoning" and "context minimization" are executed the same way every
time, measured, and improved deliberately rather than tuned by folklore.

## Scope

- The context engineering pipeline: its stages, retrieval order, optimization loop, and
  per-task-class configuration, extending the
  [Context Specification](context-specification.md).

## Non-Scope

- Context content rules (CTX-01 to CTX-09 — unchanged; the pipeline is how they are
  executed).
- Retrieval technology; every stage is performable by hand (Constitution III.10).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Context Specification](context-specification.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)
- [Knowledge Lifecycle Specification](../20-knowledge/knowledge-lifecycle-specification.md)
- [Memory Specification](../21-memory/memory-specification.md)

## Interfaces

- **Inbound:** every engagement preparation (CAP-01 Prepared state) runs this pipeline;
  the context owner (ENT-03) maintains its configurations.
- **Outbound:** knowledge indexes (KNO-08), artifact lifecycle states (KLC-01), memory
  trust marking (MEM-04).

## Requirements

### The pipeline

- **CTP-01** Context for any task is assembled through these stages, in order:

  | Stage | Output |
  | --- | --- |
  | 1. Need analysis | The information classes the task requires, derived from its task class |
  | 2. Retrieval | Candidate items from knowledge first, then memory, then task-supplied external input (CTX-01) |
  | 3. Selection | Candidates kept or dropped against declared relevance criteria (CTX-02) |
  | 4. Budget enforcement | A set within the task class's context budget (CTX-07) |
  | 5. Packaging | Ordered, trust-labeled context: authority boundary and constraints first (CTX-04, CTX-06) |
  | 6. Delivery and record | Context supplied; assembly recorded where CTX-09 requires |
  | 7. Feedback | Post-task observations for optimization (CTP-06) |

- **CTP-02** Stages 2 through 5 MUST be deterministic wherever the underlying stores
  permit: given the same stores, task, and configuration, the same context results
  (Constitution III.1). Probabilistic assistance in selection is permitted only as a
  proposer; the kept set must satisfy the declared criteria checkably.

### Retrieval rules

- **CTP-03** Retrieval consults the knowledge index (KNO-08) before memory, and memory
  before external input; each item enters with its trust level (CTX-04).
- **CTP-04** Retrieval MUST exclude knowledge artifacts not citable in their current
  lifecycle state (KLC-01) — Stale and Retired artifacts do not enter context except
  when the task is *about* them (re-verification, audit), explicitly marked.
- **CTP-05** Where an authoritative artifact and copies both match, the authoritative
  one is retrieved (KNO-01); copies are dropped at selection.

### Configuration

- **CTP-06** Every recurring task class MUST have a *pipeline configuration*: its need
  profile (stage 1), relevance criteria (stage 3), budget (CTX-07), and packaging order
  (stage 5). Configurations are versioned artifacts owned by the context owner; ad-hoc
  deviation is recorded as an exception (WFL-07 pattern).

### Optimization loop

- **CTP-07** Stage 7 records, per task where feasible: supplied-but-unused items and
  needed-but-missing items (as Observation records). These feed context-efficiency
  metrics (MET-03) and, at declared thresholds, improvement items (IMP-01).
- **CTP-08** Optimization changes — tightened criteria, adjusted budgets, reordered
  packaging — are made only by versioning the pipeline configuration (CTP-06), never by
  silently drifting practice; a configuration change cites the observations motivating
  it (evidence before assumption).

## Extension Points

- New stages require a minor change to CTP-01 (the stage table is the contract).
- Named context profiles per task class (the Context Specification's declared future
  extension) are CTP-06 configurations given shared names.

## Metrics

- Context utilization (used / supplied); gap rate (needed-but-missing per task); budget
  pressure (assembled size / budget). All feed MET-03.

## Failure Modes and Recovery

- *Context stuffing* (budgets raised instead of selection improved): visible as rising
  budgets with flat utilization; recovery is CTP-08 review of the configuration, with
  CTX-02 as the standard — excess is a defect, not a margin.
- *Retrieval blindness* (relevant knowledge exists but is never retrieved): visible as
  gap-rate observations naming items that existed; recovery targets the knowledge index
  (KNO-08) or the need profile, whichever failed.
- *Feedback silence* (stage 7 never runs): the optimization loop degrades to guesswork;
  detected by absent observation records; recovery through context ownership (ENT-04).

## Validation

- Assembly records (CTX-09) against configurations (CTP-06), lifecycle-state exclusion
  (CTP-04), and configuration versioning (CTP-08) are deterministically checkable;
  relevance-criteria quality is a content-review check.

## Future Extension

- Cross-store federation (retrieving from another enterprise's knowledge under SEC-08
  boundary rules) is v3 territory alongside enterprise federation.

## Related Documents

- [Context Specification](context-specification.md)
- [Capability Model Specification](../11-capabilities/capability-model-specification.md)
- [Metrics Specification](../41-performance/metrics-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
