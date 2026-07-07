# Project Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-011 |
| Title | Project Specification |
| Layer | 30-projects |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define what an adopting project must establish and maintain so that the standard actually
governs its work: a charter, the instantiated layers, and an honest conformance
declaration.

## Scope

- Obligations of any project that declares adoption of OAES.

## Non-Scope

- The project's engineering content, methodology, technology choices, and management.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Agent Specification](../11-capabilities/agent-specification.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)
- [Context Specification](../22-context/context-specification.md)

## Interfaces

- **Inbound:** assurance-layer audits read the artifacts this specification requires;
  the edition mechanism (VER-06) tells projects what they conform to.
- **Outbound:** all operating-model and information-layer rules, which the project
  instantiates locally.

## Requirements

### Charter

- **PRJ-01** Every adopting project MUST have a *project charter* before OAES-governed
  work begins, containing at minimum: purpose, scope, non-scope, accountable roles
  (mapped to ORG-01), the OAES edition adopted, and the intended conformance level
  (QUA-02). The [Project Charter Template](../60-templates/tmpl-008-project-charter.md)
  implements this requirement.
- **PRJ-02** The charter MUST pin one OAES edition (VER-07). Moving to a newer edition is
  an explicit, recorded change with a review of the edition's migration statements.

### Instantiation

- **PRJ-03** A project MUST instantiate, in its own repository: a role register (ORG-02),
  agent definitions for every agent it uses (AGT-03), workflow definitions for its
  recurring processes (WFL-01), a knowledge index (KNO-08), and retention rules for its
  memory (MEM-06).
- **PRJ-04** Project-local rules MAY strengthen but MUST NOT weaken any OAES requirement;
  a needed weakening is a *waiver*, granted only per GOV-07 and recorded in the project
  charter.
- **PRJ-05** Domain knowledge, technology choices, and model or vendor bindings live in
  the project's repository, never in this standard (Constitution Article IV).

### Lifecycle

- **PRJ-06** Project phases and their gates are defined by the project as workflow
  definitions; every project MUST at minimum define its start (charter approval) and its
  closure (PRJ-08) as human checkpoints.
- **PRJ-07** A project MUST keep its conformance artifacts current: an artifact that no
  longer reflects practice is a conformance defect, whether the drift is in the artifact
  or in the practice.
- **PRJ-08** At closure, a project MUST archive its records per the
  [Memory Specification](../21-memory/memory-specification.md) retention rules and record
  a closure statement naming what was delivered and where its knowledge was deposited.

### Conformance declaration

- **PRJ-09** A project claiming OAES conformance MUST publish a *conformance declaration*
  stating: the edition, the conformance level achieved per the
  [Quality Specification](../40-quality/quality-specification.md), all active waivers,
  and the date of the last conformance review.
- **PRJ-10** A conformance declaration with an undisclosed waiver or a lapsed review date
  is invalid.

## Validation

- Presence and structure of charter, registers, and declaration are deterministically
  checkable; PRJ-07 currency is verified by periodic conformance review.

## Future Extension

- Multi-project programs (shared charters, shared knowledge bases) may be specified in a
  companion document when adopters require them.

## Related Documents

- [Project Charter Template](../60-templates/tmpl-008-project-charter.md)
- [Example Project Charter](../61-examples/example-project-charter.md)
- [Quality Specification](../40-quality/quality-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
