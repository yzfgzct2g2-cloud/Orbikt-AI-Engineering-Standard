# Template: Project Charter

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-008 |
| Title | Project Charter Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-011 (Project Specification) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Establish a project's adoption of OAES before governed work begins: scope, roles, pinned
edition, conformance intent, data classes, and waivers (PRJ-01, PRJ-02, PRV-02).

## Responsibilities

- A filled instance is accountable for being the project's single authoritative statement
  of what it adopted and who answers for it.

## Inputs

- Accountable humans for each ORG-01 role; the OAES edition to pin; intended conformance
  level (QUA-02); data classes handled (PRV-01).

## Outputs

- A charter against which conformance reviews audit the project (PRJ-09).

## Interfaces

- **Inbound:** copied at project start; amended through the project's change process.
- **Outbound:** mirrors OAES-SPEC-011 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Field presence is deterministically checkable; role and waiver validity are
  conformance-review checks.

## Future Extension

- Archetype-specific charter variants may be added if OAES-SPEC-011 defines archetypes.

## Related Documents

- [Project Specification](../30-projects/project-specification.md)
- [Example Project Charter](../61-examples/example-project-charter.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |

## Skeleton

```markdown
# Project Charter: {{project-name}}

| Field | Value |
| --- | --- |
| Identifier | {{project-charter-id}} |
| Title | {{project-name}} Charter |
| Layer | {{project-repository-location}} |
| Type | Project Charter |
| Version | {{version}} |
| Status | {{status}} |
| Author | {{chartering-authority}} |
| Approved | {{yyyy-mm-dd}} |

## Purpose

{{what-the-project-exists-to-deliver}}

## Scope

- {{what-the-project-covers}}

## Non-Scope

- {{explicit-exclusions}}

## Standard Adoption

- OAES edition pinned: {{Foundation-x.y}} (PRJ-02)
- Intended conformance level: {{level-1-2-or-3}} (QUA-02)
- Conformance review interval: {{interval}}

## Roles

| Role | Holder |
| --- | --- |
| Maintainer | {{name}} |
| Steward(s) | {{names-per-area}} |
| {{further-roles}} | {{names}} |

## Data Classes

- Classes handled: {{public-internal-confidential-personal}} (PRV-02)
- Storage boundary per class: {{where-each-class-may-live}}

## Instantiated Artifacts

- Role register: {{location}} (ORG-02)
- Agent definitions: {{location}} (AGT-03)
- Workflow definitions: {{location}} (WFL-01)
- Knowledge index: {{location}} (KNO-08)
- Memory retention rules: {{location}} (MEM-06)

## Waivers

- {{active-waivers-per-GOV-07-or-none}} (PRJ-04)

## Dependencies

- {{the-pinned-OAES-edition-and-project-governing-documents}}

## Interfaces

- **Inbound:** {{who-audits-or-consumes-this-charter}}
- **Outbound:** {{organizational-authorities-this-charter-derives-from}}

## Future Extension

- {{planned-charter-amendments}}

## Related Documents

- {{links}}

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{version}} | {{yyyy-mm-dd}} | {{author}} | {{change-summary}} |
```
