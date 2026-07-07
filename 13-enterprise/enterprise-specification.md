# Enterprise Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-021 |
| Title | Enterprise Specification |
| Layer | 13-enterprise |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the operating model of an *enterprise* — any organization running more than one
OAES project under shared governance — so that scale never dilutes accountability: every
concern owned, every shared asset governed, every recurring operation a defined procedure.

## Scope

- Enterprise tiers, the ownership map, shared assets, standard operating procedures, and
  the enterprise register.

## Non-Scope

- Role definitions ([Organization Specification](../10-organization/organization-specification.md)).
- Message mechanics ([Communication Specification](communication-specification.md)).
- Single-project adopters: they satisfy this specification trivially by holding all
  enterprise duties in the project itself.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)

## Interfaces

- **Inbound:** project charters bind to an enterprise register; discovery classification
  (layer 31) and adapter registration (layer 32) read enterprise-tier registers;
  escalations terminate at the enterprise tier.
- **Outbound:** roles (ORG-01), workflow structure (WFL-01), agent definitions (AGT-03).

## Requirements

### Tiers

- **ENT-01** An enterprise operates in at most three tiers, each with a declared mandate:
  **Enterprise** (shared standards, shared assets, cross-project decisions), **Program**
  (optional grouping of related projects with delegated authority), and **Project**
  (delivery, per the [Project Specification](../30-projects/project-specification.md)).
  Absent tiers collapse upward: a missing Program tier means its duties sit at Enterprise.
- **ENT-02** Authority flows downward by explicit delegation recorded in the enterprise
  register; a tier MUST NOT exercise authority it was not delegated, and delegation MUST
  NOT include the human-reserved actions of Constitution Article V.2.

### Ownership map

- **ENT-03** The enterprise MUST maintain an *ownership map* assigning every engineering
  concern to exactly one accountable role holder per tier where the concern exists. The
  minimum concern set is:

  | Concern | Owner's duty |
  | --- | --- |
  | Quality | Review standards applied; conformance reviews happen on cadence (QUA-02). |
  | Performance | Metrics defined and honest (OAES-SPEC-013, OAES-SPEC-028). |
  | Risk | Risk registers current; acceptances explicit (DSC-10). |
  | Security | SEC duties enforced; incidents handled (SEC-11). |
  | Privacy | Data classes declared; retention enforced (PRV-02, PRV-08). |
  | Knowledge stewardship | Knowledge lifecycle sweeps run (OAES-SPEC-026). |
  | Memory stewardship | Retention and promotion sweeps run (OAES-SPEC-027). |
  | Context | Context budgets and pipelines maintained (CTX-07, OAES-SPEC-025). |
  | Architecture | Structural conformance; extension discipline (ARCH-10 to ARCH-12). |
  | Improvement | The improvement backlog triaged on cadence (OAES-SPEC-032). |

- **ENT-04** A concern without a current owner is a blocking defect; interim ownership
  defaults upward to the tier's Maintainer until reassigned, and the gap is recorded.
- **ENT-05** Ownership means accountability, not exclusivity: owners define and verify;
  everyone executes. An owner MAY delegate execution, never accountability (ORG-04).

### Shared assets

- **ENT-06** Assets used by more than one project — knowledge bases, agent definitions,
  workflow definitions, adapters, tool qualifications — MUST be held at the lowest tier
  that spans their users, governed by the same rules as project artifacts, and listed in
  the enterprise register.
- **ENT-07** A project MAY strengthen a shared asset locally; diverging from one
  (weakening or forking) requires the asset owner's recorded agreement or a waiver
  (GOV-07).

### Operating procedures

- **ENT-08** Recurring cross-project operations (conformance audits, register
  maintenance, lifecycle sweeps, edition upgrades) MUST be defined as *standard operating
  procedures*: workflow definitions per WFL-01, owned per ENT-03, listed in the
  enterprise register. An operation performed twice without a procedure is an
  improvement-backlog item.
- **ENT-09** The enterprise tier MUST audit each project's conformance declaration
  (PRJ-09) at the project's declared review interval; a lapsed audit invalidates the
  enterprise's own aggregate conformance claim.

### The enterprise register

- **ENT-10** The enterprise MUST maintain an *enterprise register* — the single source of
  truth for: tiers and delegations (ENT-02), the ownership map (ENT-03), shared assets
  (ENT-06), procedures (ENT-08), and the adapter registry (ADP-04). It follows the
  registry pattern of [INDEX.md](../INDEX.md) and is versioned like any artifact.

## Extension Points

- New concerns are added to the ENT-03 table by minor change.
- Additional tiers (for example, a division tier) require a major change to ENT-01;
  the three-tier collapse rule is designed to make this rarely necessary.

## Metrics

- Ownership coverage: concerns with current owners / concerns required (target: all).
- Escalation latency: time from escalation record to resolution or parking (ORG-07).
- Audit currency: projects with in-interval conformance audits / all projects.

## Failure Modes and Recovery

- *Orphaned concern* (owner leaves): ENT-04 default-upward keeps accountability
  continuous; recovery is reassignment recorded in the register.
- *Shadow procedures* (work done outside SOPs): detected by audits (ENT-09); recovery is
  ENT-08 — define the procedure or explicitly reject the practice.
- *Register drift* (register no longer matches reality): same class as PRJ-07 drift; a
  conformance defect whichever side is wrong; recovery through the change process, never
  by silent correction.

## Validation

- Register presence, ownership completeness (ENT-03/04), and SOP registration (ENT-08)
  are deterministically checkable against the enterprise register; delegation discipline
  (ENT-02) and audit currency (ENT-09) are conformance-review checks.

## Future Extension

- Federation of registers across cooperating enterprises (expected v3; see the
  [Architecture Decision Journal](../02-architecture/architecture-decision-journal.md)).

## Related Documents

- [Communication Specification](communication-specification.md)
- [Project Specification](../30-projects/project-specification.md)
- [Improvement Specification](../51-evolution/improvement-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
