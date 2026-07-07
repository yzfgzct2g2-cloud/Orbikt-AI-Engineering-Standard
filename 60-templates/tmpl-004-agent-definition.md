# Template: Agent Definition

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-004 |
| Title | Agent Definition Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-006 (Agent Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Declare an agent — deterministic or probabilistic, of any technology — before it
participates in governed work (AGT-03), including its authority boundary and evaluation
criteria.

## Responsibilities

- A filled instance is accountable for bounding everything the agent may do; anything not
  listed as permitted is prohibited (AGT-06).

## Inputs

- The task classes the agent will serve and the accountable role (AGT-05).
- The AGT-02 justification if the agent is probabilistic.

## Outputs

- An agent definition against which any conforming implementation can be substituted
  (AGT-12) and evaluated (AGT-13).

## Interfaces

- **Inbound:** copied when admitting a new agent.
- **Outbound:** mirrors OAES-SPEC-006 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Field presence, AGT-07 prohibited actions, and measurable evaluation criteria are
  checked in content review.

## Future Extension

- Capability-profile variants may be derived from this template.

## Related Documents

- [Agent Specification](../11-capabilities/agent-specification.md)
- [Example Agent Definition](../61-examples/example-agent-definition.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# Agent Definition: {{agent-name}}

| Field | Value |
| --- | --- |
| Identifier | {{project-agent-id}} |
| Title | {{agent-name}} |
| Layer | {{project-location}} |
| Type | Agent Definition |
| Version | {{version}} |
| Status | {{status}} |
| Author | {{accountable-role-AGT-05}} |
| Approved | {{yyyy-mm-dd}} |

## Purpose

{{the-single-purpose-of-this-agent}}

## Scope

- Task classes: {{task-classes-served}}

## Non-Scope

- {{tasks-this-agent-must-not-be-used-for}}

## Classification

- {{deterministic-or-probabilistic}} (AGT-01).
- {{if-probabilistic-why-a-deterministic-agent-cannot-meet-the-quality-requirements}} (AGT-02).

## Inputs

- {{declared-inputs-including-context-budget-per-CTX-07-and-whether-personal-data-may-appear-per-PRV-07}}

## Outputs

- {{declared-outputs-and-the-verification-they-require-before-use-per-AGT-09}}

## Authority Boundary

- Autonomous: {{actions-permitted-without-confirmation}}
- Requires human confirmation: {{actions}}
- Prohibited: {{actions — must include the Article V.2 reserved actions}} (AGT-07)

## Escalation

- {{when-the-agent-must-stop-and-to-whom-it-escalates}} (AGT-08)

## Evaluation Criteria

- {{measurable-criteria-and-re-evaluation-interval}} (AGT-13)

## Dependencies

- {{governing-documents}}

## Interfaces

- **Inbound:** {{workflows-and-stages-that-invoke-this-agent}}
- **Outbound:** {{stores-and-artifacts-the-agent-reads-or-writes}}

## Future Extension

- {{anticipated-changes}}

## Related Documents

- {{links}}

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{version}} | {{yyyy-mm-dd}} | {{author}} | {{change-summary}} |
```
