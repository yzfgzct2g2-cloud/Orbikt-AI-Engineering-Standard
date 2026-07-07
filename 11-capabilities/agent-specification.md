# Agent Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-006 |
| Title | Agent Specification |
| Layer | 11-capabilities |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the requirements any *agent* — a bounded executor of engineering tasks, whether a
deterministic program or a probabilistic AI system of any vendor — must satisfy to
participate in OAES-governed work. The requirements are written so that agents remain
interchangeable as technology changes: any conforming agent can replace any other.

## Scope

- Definition, declaration, authority limits, task assignment discipline, output handling,
  and evaluation of agents.

## Non-Scope

- Human roles and accountability
  ([Organization Specification](../10-organization/organization-specification.md)).
- Configuration of any specific agent technology (prompts, model parameters, and similar
  are adopter concerns and forbidden content in this repository).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)

## Interfaces

- **Inbound:** the [Workflow Specification](../12-workflow/workflow-specification.md)
  assigns activities to declared agents; the
  [Quality Specification](../40-quality/quality-specification.md) evaluates their output;
  the [Context Specification](../22-context/context-specification.md) governs what they
  are given.
- **Outbound:** organization-layer accountability rules.

## Requirements

### Definition and classification

- **AGT-01** An *agent* is any executor of a bounded engineering task. Every agent MUST be
  classified as either **deterministic** (identical inputs always produce identical
  outputs) or **probabilistic** (outputs may vary for identical inputs).
- **AGT-02** For every task class, a deterministic agent MUST be used when one can meet
  the task's quality requirements; a probabilistic agent is permitted only where
  determinism is infeasible or demonstrably insufficient, and this justification MUST be
  stated in the agent's declaration (Constitution Article III.1).

### Declaration

- **AGT-03** No agent may participate in OAES-governed work without a written *agent
  definition* containing at minimum: identity, purpose, task classes, classification per
  AGT-01, inputs, outputs, authority boundary, escalation rules, and evaluation criteria.
  The [Agent Definition Template](../60-templates/tmpl-004-agent-definition.md) implements
  this requirement.
- **AGT-04** An agent definition MUST be technology-independent: it states *what* the
  agent does and under which limits, never *which product* implements it. Bindings from a
  definition to a concrete implementation are adopter-local records outside this
  repository.
- **AGT-05** Every agent acts on behalf of exactly one accountable role holder per
  ORG-03; the agent definition MUST name the accountable role.

### Authority boundary

- **AGT-06** An agent definition MUST enumerate the actions the agent may take
  autonomously, the actions requiring human confirmation, and the actions that are
  prohibited. Anything not enumerated as permitted is prohibited.
- **AGT-07** The actions reserved to humans by Constitution Article V.2 MUST appear in the
  prohibited set of every agent definition.
- **AGT-08** An agent encountering the edge of its authority MUST stop and escalate per
  its declared escalation rules; proceeding on assumption is a defect.

### Output discipline

- **AGT-09** Output of a probabilistic agent is a *proposal* until verified. It MUST NOT
  enter the knowledge layer, be released, or be treated as evidence until it has passed
  the verification defined for its task class in the
  [Quality Specification](../40-quality/quality-specification.md).
- **AGT-10** Every agent-produced artifact MUST be attributable: the receiving record
  states which agent definition produced it and which role holder is accountable.
- **AGT-11** An agent MUST ground factual claims in retrievable sources per the
  [Knowledge Specification](../20-knowledge/knowledge-specification.md); claims without
  evidence are marked as assumptions and treated per Constitution Article III.3.

### Substitution and evaluation

- **AGT-12** Any agent satisfying an agent definition MAY replace any other agent bound to
  that definition without change to workflows, documents, or accountability. Agent
  definitions MUST NOT contain requirements satisfiable by only one vendor's product.
- **AGT-13** Every agent definition MUST state measurable evaluation criteria, and agents
  MUST be re-evaluated against them whenever their implementation changes and at a
  declared interval otherwise.
- **AGT-14** An agent that fails its evaluation criteria MUST be withdrawn from the task
  classes it fails until it passes again; withdrawal and reinstatement are recorded.

## Validation

- Agent definitions are checked structurally against the template's required fields and
  substantively in review against AGT-02, AGT-06, AGT-07, and AGT-12.

## Future Extension

- Capability profiles — reusable requirement bundles for recurring task classes (for
  example, "review agent", "generation agent") — may be added as companion documents by
  minor change.

## Related Documents

- [Agent Definition Template](../60-templates/tmpl-004-agent-definition.md)
- [Example Agent Definition](../61-examples/example-agent-definition.md)
- [Quality Specification](../40-quality/quality-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
