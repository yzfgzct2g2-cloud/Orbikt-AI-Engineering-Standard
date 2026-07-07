# Discovery Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-023 |
| Title | Discovery Specification |
| Layer | 31-discovery |
| Type | Specification |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the Discovery Framework: the mandatory, adaptable process that stands between a
request and its execution. Discovery exists because the cheapest defect to fix is the one
in the request itself — and because agents make it dangerously easy to build the wrong
thing quickly.

## Scope

- Discovery stages, records, question discipline, and the approval gate, for any unit of
  work large enough to have a charter (projects) and, proportionally, for material change
  requests within them.

## Non-Scope

- Charter obligations after approval (OAES-SPEC-011).
- Domain question banks and catalogs (supplied by adapters, ADP-01).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Communication Specification](../13-enterprise/communication-specification.md)
- [Project Specification](../30-projects/project-specification.md)

## Interfaces

- **Inbound:** intake from any source (enterprise, program, project, or change process);
  the project lifecycle (PLC-01) invokes Discovery as its first phase.
- **Outbound:** questions and suggestions as messages of record (COM-03); classification
  taxonomies and question banks from the enterprise register and adapters; the charter
  template (PRJ-01).

## Requirements

### Primacy

- **DSC-01** No implementation work begins before Discovery completes at its approval
  gate. Proportionality is permitted — a small effort gets a small Discovery — but
  absence is not: every stage below MUST produce its record, however brief.
- **DSC-02** Discovery is a workflow (WFL-01) with the following stages; each stage's
  record accumulates into the *discovery record*
  ([template](../60-templates/tmpl-011-discovery-record.md)):

  | Stage | Output |
  | --- | --- |
  | 1. Intake | The request as received: source, requester, initial statement |
  | 2. Classification | Project class from the applicable taxonomy |
  | 3. Goal alignment | Goals, each mapped to measurable success criteria and an owner |
  | 4. Clarification | Material questions asked and answered (DSC-05 to DSC-07) |
  | 5. Options and suggestions | Alternatives considered, with trade-offs |
  | 6. Constraint discovery | The constraint register (DSC-09) |
  | 7. Risk discovery | The risk register (DSC-10) |
  | 8. Requirement validation | Requirements tested for testability and goal linkage |
  | 9. Chartering | Charter, scope, non-scope, success criteria assembled (PRJ-01) |
  | 10. Approval gate | Human checkpoint: approve, rework, or reject |

### Classification and adaptation

- **DSC-03** Classification (stage 2) selects the project class from the enterprise
  taxonomy and the applicable adapters (ADP-07). The class determines which question
  banks, constraint catalogs, and risk catalogs apply — this is how the framework adapts
  to project type without the core containing any domain content.
- **DSC-04** Goals (stage 3) MUST each have: a statement, a measurable success criterion
  (PER-01 form where quantitative), an accountable owner, and a recorded resolution of
  any conflict with other goals. Goal conflicts discovered later reopen stage 3
  (DSC-12).

### Question discipline

- **DSC-05** Stage 4 MUST produce between five and ten *material* clarification
  questions, unless the confidence rule (DSC-06) applies. A question is material only if
  its answer changes a charter field, a constraint, a risk, or a success criterion.
  Every question MUST state, explicitly: (a) why it exists — the uncertainty it removes;
  (b) the decision or charter element that depends on the answer; and (c) the risk that
  remains if it goes unanswered — which, if material, enters the risk register (DSC-10)
  as an accepted assumption's risk. A question missing any of these is padding, and
  padding to reach five is a defect; stopping at ten forces prioritization.
- **DSC-06** The question minimum is waived only by a recorded *confidence declaration*:
  the discovery lead states that every charter field is derivable from the intake and
  existing knowledge without assumption, and the approval-gate approver countersigns it.
  A wrong confidence declaration found later is a process defect, not a misfortune.
- **DSC-07** Questions are issued as messages of record (COM-03 Question) to the roles
  that can answer them; unanswered material questions block the approval gate (COM-06).
  Question sets draw from the class's question banks (DSC-03) plus the core base set:
  purpose, users, success measure, non-goals, constraints, risks, data classes (PRV-02),
  and who decides.

### Suggestions, constraints, risks

- **DSC-08** Stage 5 MUST record at least the alternatives seriously considered — 
  including "do nothing" and "do less" — with substantive trade-offs (the DEC-03
  honesty bar applied before the project exists). Suggestions to the requester are
  issued per COM-03.
- **DSC-09** The *constraint register* enumerates constraints by class — regulatory,
  organizational, technical, resource, and data (PRV-01 classes) — each with its source
  as evidence. An unsourced constraint is an assumption and is either verified or
  recorded as an accepted assumption.
- **DSC-10** The *risk register*
  ([template](../60-templates/tmpl-012-risk-record.md)) records each risk with:
  description, qualitative likelihood and impact on declared scales, owner (per the
  ownership map, ENT-03), and response — avoid, mitigate, transfer, or accept.
  Acceptance is a human decision by the risk owner (Constitution Article V.2), recorded.

### Validation and approval

- **DSC-11** Stage 8 rejects or renegotiates any requirement that is untestable
  (DOCU-10 standard) or traceable to no goal; orphan requirements do not enter the
  charter.
- **DSC-12** The approval gate (stage 10) is a human checkpoint (WFL-05). Its evidence
  is the complete discovery record. Material change to goals, constraints, or risks
  after approval reopens Discovery scoped to the change — execution of unaffected work
  MAY continue.

## Extension Points

- Question banks, constraint catalogs, risk catalogs, and classification taxonomies plug
  in via adapters (ADP-01) and the enterprise register — the framework never changes to
  accommodate a domain.
- Stage additions require a minor change to DSC-02.

## Metrics

- Question yield (charter fields changed per question asked); discovery escape rate
  (defects later traced to a wrong or missing discovery answer); confidence-declaration
  error rate (DSC-06 declarations later proven wrong). All feed MET-03.

## Failure Modes and Recovery

- *Discovery theater* (stages performed, nothing learned): countered by DSC-05's
  materiality rule and measured by question yield; recovery is retraining the practice,
  not adding stages.
- *Endless discovery* (never reaching the gate): stages have the workflow layer's
  failure paths (WFL-10); the approval authority can force approve-with-assumptions
  (recorded) or reject.
- *Stale discovery* (approved long before execution starts): the approval gate evidence
  carries dates; the project lifecycle requires re-confirmation when execution starts
  materially later (PLC-03).

## Validation

- Record completeness per stage, question count and linkage (DSC-05), confidence
  declarations (DSC-06), and register field completeness (DSC-09, DSC-10) are
  deterministically checkable; materiality and trade-off substance are content-review
  checks at the approval gate.

## Future Extension

- Lightweight re-discovery profiles for standing products; negotiation records for
  multi-stakeholder goal conflicts.

## Related Documents

- [Discovery Record Template](../60-templates/tmpl-011-discovery-record.md)
- [Risk Record Template](../60-templates/tmpl-012-risk-record.md)
- [Project Lifecycle Specification](../30-projects/project-lifecycle-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
| 1.1.0 | 2026-07-08 | OAES Standards Committee | DSC-05 strengthened: every question states its uncertainty, dependent decision, and unanswered risk (OAES-DEC-010). |
