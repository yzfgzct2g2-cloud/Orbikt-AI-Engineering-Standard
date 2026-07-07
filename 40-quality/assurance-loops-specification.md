# Assurance Loops Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-029 |
| Title | Assurance Loops Specification |
| Layer | 40-quality |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the recurring assurance loops that keep quality active rather than reactive: the
self-review loop before submission, the challenge loop against significant artifacts, the
refactoring loop against accumulated drift — and the catalog of human checkpoints that no
loop, however automated, may absorb.

## Scope

- Loop definitions, their records, their bounds, and the mandatory human checkpoint
  catalog, extending the [Quality Specification](quality-specification.md).

## Non-Scope

- Review types and verdicts (QUA-01 to QUA-10 — the loops produce inputs to them).
- Improvement backlog handling (OAES-SPEC-032 — the loops feed it).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Agent Specification](../11-capabilities/agent-specification.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Discovery Specification](../31-discovery/discovery-specification.md)
- [Quality Specification](quality-specification.md)

## Interfaces

- **Inbound:** gates require self-review evidence; significance thresholds trigger
  challenges; cadences trigger refactoring passes.
- **Outbound:** review records (QUA-04), defects (QUA-09), improvement items (IMP-01).

## Requirements

### Self-review loop

- **ASR-01** Before any artifact is submitted to a gate, its producer — human or agent —
  MUST perform a recorded *self-review* against a checklist derived from that gate's
  exit criteria. For agents, the self-review is part of the engagement (CAP-01 Delivered
  requires it); its record travels with the output.
- **ASR-02** Self-review never substitutes for independent review: it raises the floor
  of what reaches reviewers (QUA-03 economy), it does not lower the bar they apply
  (ORG-05, QUA-06 unchanged).

### Challenge loop

- **ASR-03** Every scope MUST declare a *significance threshold* (by artifact class,
  change class, or risk rating). At or above it, the artifact receives a *challenge
  review*: an adversarial pass whose explicit objective is to find the conditions under
  which the artifact fails — not to confirm that it works.
- **ASR-04** The challenger MUST be independent of both producer and approver (a third
  party where ORG-05 requires two). Challenges MAY use agents as proposers of failure
  hypotheses; each hypothesis is verified or dismissed with reason in the review record
  (QUA-07) — a dismissed-without-reason hypothesis is an incomplete review.
- **ASR-05** A challenge that finds nothing MUST say what was attacked and how;
  "no findings" without attack surface described is not a challenge (the QUA-07
  evidence bar applied adversarially).

### Refactoring loop

- **ASR-06** Every artifact class in active use MUST have a declared *refactoring
  cadence*: a scheduled pass over the class looking for duplication (KNO-02 at any
  scale), drift between documents and practice (PRJ-07), dead references, and
  simplification opportunities.
- **ASR-07** Refactoring passes produce change requests and improvement items — never
  direct edits outside the change process (EVO-09). The pass record lists what was
  examined and what was raised, even when the answer is "nothing".

### Loop bounds

- **ASR-08** Every loop iteration MUST have exit criteria and an iteration bound
  declared in advance. A loop that reaches its bound without exit escalates (ORG-06);
  iterating past the bound "because it's almost done" is a defect. Loops are convergence
  instruments, not perpetual motion.

### Human checkpoint catalog

- **ASR-09** The following checkpoints are human decisions in every OAES-governed
  lifecycle and MUST NOT be delegated to agents or absorbed into any loop:

  | Checkpoint | Anchor |
  | --- | --- |
  | Discovery approval | DSC-12 |
  | Charter approval | PRJ-01, PLC-01 |
  | Risk acceptance | DSC-10, Constitution Article V.2 |
  | Requirement waiver | GOV-07 |
  | Release decision | Constitution Article V.2 |
  | Edition release of a standard | VER-12, EVO-07 |
  | Closure approval | PLC-01 |
  | Agent admission and withdrawal | AGT-03, AGT-14 |

  Additions to this catalog are minor changes; removals are major changes.

## Extension Points

- New loop kinds (for example, a periodic security challenge) are added as sections by
  minor change; ASR-08 bounds apply to all present and future loops automatically.
- Significance thresholds and cadences are declared per scope (enterprise register or
  project charter), never here.

## Metrics

- Self-review catch rate (defects caught before gate / total found); challenge yield
  (verified findings per challenge); refactoring debt trend (items raised vs resolved).
  All feed MET-03.

## Failure Modes and Recovery

- *Rubber-stamp self-review*: visible when gate reviewers find what checklists cover;
  recovery is checklist revision and producer feedback, not more checklist.
- *Challenge capture* (challenger too close to producer): prevented by ASR-04
  independence; where head count makes it impossible, the ORG-05 recorded-conflict
  mechanism applies.
- *Loop churn* (endless polish): bounded by ASR-08; the escalation authority decides
  ship, rework, or stop.

## Validation

- Self-review records at gates, challenge records above thresholds, pass records on
  cadence, and declared bounds are deterministically checkable; adversarial quality
  (ASR-05) is itself subject to conformance review.

## Future Extension

- Standard challenge playbooks per artifact class may be cataloged as informative
  companions once practice accumulates.

## Related Documents

- [Quality Specification](quality-specification.md)
- [Capability Model Specification](../11-capabilities/capability-model-specification.md)
- [Improvement Specification](../51-evolution/improvement-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
