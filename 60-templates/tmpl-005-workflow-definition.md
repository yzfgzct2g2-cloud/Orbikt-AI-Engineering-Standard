# Template: Workflow Definition

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-005 |
| Title | Workflow Definition Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-007 (Workflow Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define a recurring process as stages with objective entry/exit criteria, gates, evidence,
and failure paths (WFL-01, WFL-02, WFL-10).

## Responsibilities

- A filled instance is accountable for making the process inspectable at every gate and
  resumable from recorded evidence (WFL-09).

## Inputs

- The process trigger, its stages, and the accountable role per stage (ORG-04).
- The review type each gate requires (QUA-01).

## Outputs

- A workflow definition executable by any qualified humans and agents.

## Interfaces

- **Inbound:** copied when defining any recurring process.
- **Outbound:** mirrors OAES-SPEC-007 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Stage-field completeness is deterministically checkable; criterion objectivity (WFL-03)
  is a content-review check.

## Future Extension

- A sub-workflow composition slot may be added when WFL nesting rules are specified.

## Related Documents

- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Example Workflow Definition](../61-examples/example-workflow-definition.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# Workflow Definition: {{workflow-name}}

| Field | Value |
| --- | --- |
| Identifier | {{project-workflow-id}} |
| Title | {{workflow-name}} |
| Layer | {{project-location}} |
| Type | Workflow Definition |
| Version | {{version}} |
| Status | {{status}} |
| Author | {{owning-role}} |
| Approved | {{yyyy-mm-dd}} |

## Purpose

{{what-this-workflow-reliably-produces}}

## Scope

- Trigger: {{what-starts-an-instance}}

## Non-Scope

- {{adjacent-processes-not-covered}}

## Stages

### Stage {{n}}: {{stage-name}}

- Entry criteria: {{objective-conditions}}
- Activities: {{what-happens}}
- Accountable role: {{one-role}} (ORG-04)
- Permitted agent task classes: {{classes-or-none}}
- Exit criteria: {{objectively-decidable-conditions}} (WFL-03)
- Evidence: {{records-produced-per-MEM-02}}
- Gate review type: {{structural-content-or-conformance}} (QUA-01)
- Human checkpoint: {{yes-or-no — at-least-one-stage-must-be-yes-per-WFL-05}}

## Failure Paths

- Rework: {{failed-gate → returns-to-stage-n}}
- Abort: {{conditions-and-recorded-reason}} (WFL-10)

## Dependencies

- {{governing-documents}}

## Interfaces

- **Inbound:** {{what-invokes-this-workflow}}
- **Outbound:** {{roles-agents-and-stores-used}}

## Future Extension

- {{anticipated-changes}}

## Related Documents

- {{links}}

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{version}} | {{yyyy-mm-dd}} | {{author}} | {{change-summary}} |
```
