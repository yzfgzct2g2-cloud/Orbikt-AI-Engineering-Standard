# Workflow Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-007 |
| Title | Workflow Specification |
| Layer | 12-workflow |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the mandatory structure of every OAES-governed workflow so that work is always
inspectable, interruptible, and recoverable — regardless of which humans, agents, or
methodologies execute it.

## Scope

- Workflow anatomy (stages, gates, criteria, evidence), execution rules, and failure
  handling.

## Non-Scope

- Specific methodologies, ceremonies, or scheduling.
- The content of any particular workflow (defined by the layer or project that owns it).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Agent Specification](../11-capabilities/agent-specification.md)

## Interfaces

- **Inbound:** the [Project Specification](../30-projects/project-specification.md),
  [Quality Specification](../40-quality/quality-specification.md), and
  [Evolution Specification](../51-evolution/evolution-specification.md) express their
  processes as workflows under these rules.
- **Outbound:** roles (organization) and agents (capabilities).

## Requirements

### Definition

- **WFL-01** Every recurring process MUST be defined in a written *workflow definition*
  containing: purpose, trigger, ordered stages, roles, and failure paths. The
  [Workflow Definition Template](../60-templates/tmpl-005-workflow-definition.md)
  implements this requirement.
- **WFL-02** Every stage MUST declare: entry criteria, activities, the single accountable
  role (ORG-04), permitted agent task classes, exit criteria, and the evidence it
  produces.
- **WFL-03** Exit criteria MUST be objectively decidable from the stage's evidence;
  "looks good" is not a criterion.

### Gates and checkpoints

- **WFL-04** Stages are separated by *gates*. A gate MUST NOT pass unless all exit
  criteria of the preceding stage are met and their evidence is recorded.
- **WFL-05** Every workflow MUST contain at least one human checkpoint, and every gate
  whose passage triggers an action reserved to humans (Constitution Article V.2) MUST be a
  human checkpoint.
- **WFL-06** Deterministic checks available for a gate (validators, automated tests) MUST
  run and pass before human judgment is spent at that gate (Constitution Article III.1).

### Execution

- **WFL-07** Work not covered by a defined workflow MAY proceed only as an explicitly
  labeled exception, recorded with reason and accountable role; recurring exceptions MUST
  be converted into a defined workflow or explicitly rejected by decision record.
- **WFL-08** A stage MUST operate only on its declared inputs and produce only its
  declared outputs; scope discovered mid-stage is routed to the workflow's owner, not
  absorbed silently.
- **WFL-09** Workflow state MUST be reconstructible from recorded evidence alone, so that
  any qualified person or agent can resume an interrupted workflow.

### Failure

- **WFL-10** Every workflow MUST define its failure paths: what happens when exit
  criteria cannot be met, including at minimum *rework* (return to a named stage) and
  *abort* (terminate with a recorded reason).
- **WFL-11** A gate failure MUST never be resolved by weakening the criteria within the
  running instance; criteria change only by changing the workflow definition through the
  change process.

## Validation

- Workflow definitions are checked against the template's required fields; execution
  conformance (WFL-04, WFL-06, WFL-09) is verified in review by inspecting gate evidence.

## Future Extension

- Composition rules for nesting workflows (sub-workflows as stages) may be added by minor
  change when adopters need them.

## Related Documents

- [Workflow Definition Template](../60-templates/tmpl-005-workflow-definition.md)
- [Example Workflow Definition](../61-examples/example-workflow-definition.md)
- [Quality Specification](../40-quality/quality-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
