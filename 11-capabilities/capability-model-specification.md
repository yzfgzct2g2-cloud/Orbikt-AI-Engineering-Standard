# Capability Model Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-024 |
| Title | Capability Model Specification |
| Layer | 11-capabilities |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how declared agents behave at runtime and how they compose: the states an
engagement passes through, and the rules that keep chained or parallel agents inside
declared authority — so automation can deepen for a decade without authority ever
becoming implicit.

## Scope

- The engagement runtime model and the capability composition model, extending the
  [Agent Specification](agent-specification.md).

## Non-Scope

- Agent declaration and qualification (OAES-SPEC-006 — unchanged).
- Workflow anatomy (OAES-SPEC-007); compositions are expressed *as* workflows.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Agent Specification](agent-specification.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)

## Interfaces

- **Inbound:** workflows invoke engagements; the context pipeline (OAES-SPEC-025)
  prepares them; quality evaluates their outputs.
- **Outbound:** agent definitions (AGT-03), workflow definitions (WFL-01), memory
  records (MEM-01).

## Requirements

### Engagement runtime model

- **CAP-01** An *engagement* is one agent executing one task under one agent definition.
  Every engagement passes through these states, and no others:

  | State | Meaning |
  | --- | --- |
  | Assigned | Task bound to an agent definition and accountable role |
  | Prepared | Context assembled and recorded (CTX-09) |
  | Executing | Work in progress within the authority boundary |
  | Escalated | Stopped at the authority edge, awaiting the accountable role (AGT-08) |
  | Delivered | Output produced, standing as proposal (AGT-09) |
  | Verified / Rejected | Verification outcome per the task class (QUA rules) |
  | Closed | Evidence archived; engagement complete |

- **CAP-02** State transitions MUST produce memory records (type Event) sufficient to
  reconstruct the engagement history (WFL-09 applied to agents).
- **CAP-03** An engagement exchanges information only through its declared inputs and
  outputs. Output of one engagement reaches another only as recorded artifacts routed
  through the owning workflow — never through concealed channels (COM-09).

### Composition model

- **CAP-04** A *composite capability* — multiple engagements arranged to produce one
  outcome — MUST be declared as a workflow definition (WFL-01) naming its participating
  agent definitions per stage. There is no other composition mechanism.
- **CAP-05** Authority does not accumulate: within a composition, an action is permitted
  only if it is inside the authority boundary of the agent performing it *and* not
  prohibited for the composition as a whole. Delegation beyond the delegator's own
  authority is void (ENT-02 applied to agents).
- **CAP-06** A composite has its own evaluation criteria and is evaluated as a whole
  (AGT-13); passing components do not imply a passing composite.
- **CAP-07** Substitution (AGT-12) holds inside compositions: replacing a component agent
  with another conforming to the same definition MUST NOT require changing the
  composition.
- **CAP-08** Concurrent engagements MUST NOT modify the same artifact unless their
  workflow declares the merge or serialization rule; unmanaged last-write-wins is
  prohibited.
- **CAP-09** Every scope (enterprise tier or project) MUST maintain a *capability
  register* listing its agent definitions and composites with current runtime status
  (available, or withdrawn per AGT-14), as part of its register (ENT-10, PRJ-03).

## Extension Points

- New engagement states require a minor change to CAP-01's table (expected rarely; the
  Escalated state already absorbs most "waiting" variants).
- Composition patterns (pipelines, fan-out review, redundant execution with comparison)
  may be cataloged as named workflow definitions in layer 12 without changing this
  specification.

## Metrics

- Escalation rate per agent definition (healthy is non-zero — zero suggests boundary
  violations going unnoticed); verification rejection rate; composite vs component
  evaluation deltas (feeds MET-03 agent reliability).

## Failure Modes and Recovery

- *Runaway engagement* (no state change beyond a declared duration): the accountable
  role withdraws it; the engagement closes as Rejected with reason.
- *Authority laundering* (a composition achieving what no component may do alone):
  prohibited by CAP-05; detected in composite review (CAP-06); recovery is redesign of
  the composition with a human checkpoint at the offending step.
- *Register staleness* (withdrawn agent still invoked): the invoking gate fails
  structural review against the capability register; recovery is register correction and
  re-run.

## Validation

- Engagement records (CAP-02) and register presence (CAP-09) are deterministically
  checkable; CAP-05 authority intersection is verified in the content review of each
  composite's workflow definition.

## Future Extension

- A formal composition algebra, if deep nesting outgrows CAP-04 to CAP-07 (flagged as
  v3 territory in the
  [Architecture Decision Journal](../02-architecture/architecture-decision-journal.md)).

## Related Documents

- [Agent Specification](agent-specification.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Context Pipeline Specification](../22-context/context-pipeline-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
