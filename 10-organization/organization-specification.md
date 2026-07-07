# Organization Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-005 |
| Title | Organization Specification |
| Layer | 10-organization |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the roles through which humans participate in OAES-governed work and the rules for
assigning responsibility, so that accountability survives changes of team size, company
structure, and tooling.

## Scope

- Roles, their duties, responsibility assignment, and escalation.

## Non-Scope

- Composition and procedures of governance bodies
  ([Governance Specification](../50-governance/governance-specification.md)).
- Employment, staffing, or organizational-chart concerns of adopters.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Documentation Specification](../01-meta/documentation-specification.md)

## Interfaces

- **Inbound:** the [Workflow Specification](../12-workflow/workflow-specification.md)
  binds stages to these roles; the
  [Governance Specification](../50-governance/governance-specification.md) composes bodies
  from them; document Author fields name them.
- **Outbound:** normative-core rules.

## Requirements

### Roles

- **ORG-01** The standard defines the following roles. One person MAY hold several roles;
  a role MAY be held by several people; every role holder is a human.

  | Role | Duty |
  | --- | --- |
  | Maintainer | Accountable for the integrity of a set of layers; merges approved changes; keeps registries current. |
  | Steward | Accountable for the technical content of one layer; first reviewer for changes to it. |
  | Reviewer | Examines a change against the specifications and records findings. |
  | Contributor | Authors changes; may be assisted by agents within [Agent Specification](../11-capabilities/agent-specification.md) limits. |
  | Committee Member | Member of the Standards Committee (defined in the Governance Specification). |

- **ORG-02** Every layer MUST have at least one named Steward, and the repository MUST
  have at least one named Maintainer, recorded in the governance layer's role register.
- **ORG-03** Automated agents MUST NOT hold roles. An agent acts *for* a role holder, who
  remains accountable for the agent's output (Constitution Article V).

### Responsibility assignment

- **ORG-04** Every activity in a workflow MUST name exactly one accountable role;
  additional roles may be consulted or informed, but accountability is never shared.
- **ORG-05** Authoring and reviewing the same change MUST be performed by different
  people. Where head-count makes this impossible, the conflict MUST be recorded in the
  change's review record and accepted explicitly by a Maintainer.

### Escalation

- **ORG-06** Disagreements escalate in this order: Reviewer/Contributor → Steward →
  Maintainer → Standards Committee, whose decision is final and recorded as a decision
  record.
- **ORG-07** An escalation MUST be resolved or explicitly parked with a stated revisit
  date; silent abandonment is a process defect.

## Validation

- Role assignments are verified during change review against the role register; ORG-05 is
  checked on every change per the
  [Quality Specification](../40-quality/quality-specification.md).

## Future Extension

- Specialized roles (for example, a dedicated Security Steward) are added to the ORG-01
  table by minor change; the accountability rules ORG-03 to ORG-05 are stable.

## Related Documents

- [Agent Specification](../11-capabilities/agent-specification.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Governance Specification](../50-governance/governance-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
