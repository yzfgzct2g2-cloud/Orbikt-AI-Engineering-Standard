# Project Lifecycle Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-031 |
| Title | Project Lifecycle Specification |
| Layer | 30-projects |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the phases every OAES project passes through — from intake to closure — and the
gates between them, so that "where is this project and what must happen next" is always
answerable from records.

## Scope

- Project phases, phase gates, per-phase artifact obligations, suspension, and closure,
  extending the [Project Specification](project-specification.md).

## Non-Scope

- Scheduling, estimation, and management methodology (adopter concerns).
- The Discovery phase's internal stages (OAES-SPEC-023 owns them).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Project Specification](project-specification.md)
- [Discovery Specification](../31-discovery/discovery-specification.md)

## Interfaces

- **Inbound:** enterprise intake routes new work into this lifecycle; audits (ENT-09)
  read phase state from its records.
- **Outbound:** Discovery (phase 1), charter obligations (PRJ-01 to PRJ-10), workflow
  structure (WFL rules), retrospectives into the improvement backlog (IMP-01).

## Requirements

### Phases

- **PLC-01** Every project passes through these phases; each is a workflow (WFL-01) whose
  final gate is listed:

  | Phase | Concludes with (gate) |
  | --- | --- |
  | 1. Discovery | Approval gate (DSC-12) — human checkpoint |
  | 2. Chartering | Charter approved (PRJ-01) — human checkpoint |
  | 3. Planning | Workflows, agents, budgets, and registers instantiated (PRJ-03) |
  | 4. Execution | Delivery criteria met, per the charter's success criteria |
  | 5. Delivery | Release decision — human checkpoint (Constitution Article V.2) |
  | 6. Closure | Closure statement recorded (PRJ-08, PLC-05) — human checkpoint |

  Standing products cycle phases 4–5 continuously and hold periodic re-discovery
  (DSC-12 reopening) instead of a single phase 1.
- **PLC-02** Phases scale with the project — a small project's Planning may be one page
  — but no phase is skipped: each gate's evidence exists, however brief (the DSC-01
  proportionality rule generalized).
- **PLC-03** If execution begins materially later than discovery approval, the approver
  MUST re-confirm the discovery record (or reopen it per DSC-12) before phase 4 starts;
  approvals do not age gracefully.
- **PLC-04** Phase regression (returning to an earlier phase) is a normal failure path
  (WFL-10), recorded with reason; it is not a defect. Pretending a project is in a later
  phase than its records support is.

### Suspension and closure

- **PLC-05** Closure MUST include, beyond PRJ-08: a *retrospective record* — what worked,
  what failed, and which improvement items (IMP-01) and knowledge promotions (MLC-04)
  result. A closure without lessons recorded is incomplete.
- **PLC-06** A project MAY be suspended: a recorded state with a revisit date and an
  owner (ORG-07 pattern). A suspended project past its revisit date without action is a
  conformance finding at the next audit (ENT-09).

## Extension Points

- Project archetypes (OAES-SPEC-011's declared future extension) would specialize the
  PLC-01 table per archetype; the six-phase skeleton is the invariant.

## Metrics

- Phase cycle time; regression rate per phase; closure completeness (closures with
  retrospectives / all closures); suspension aging. All feed MET-03.

## Failure Modes and Recovery

- *Phase skipping under pressure*: blocked structurally — the next gate's entry criteria
  cite the previous gate's evidence (WFL-04); recovery from a discovered skip is
  retroactive completion of the skipped record plus a defect record.
- *Zombie projects* (no activity, never closed or suspended): surfaced by audit
  (ENT-09) and suspension aging; recovery is forced disposition — resume, suspend, or
  close.
- *Lessons lost* (closure without retrospective): PLC-05 makes it checkable; recovery is
  a post-closure retrospective while participants remain available.

## Validation

- Phase gate evidence, closure statements, retrospective records, and suspension records
  are deterministically checkable for presence; gate quality is content review per QUA
  rules.

## Future Extension

- Program-level lifecycle (coordinated phases across related projects) may be added as a
  companion once the enterprise tier accumulates practice.

## Related Documents

- [Project Specification](project-specification.md)
- [Discovery Specification](../31-discovery/discovery-specification.md)
- [Improvement Specification](../51-evolution/improvement-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
