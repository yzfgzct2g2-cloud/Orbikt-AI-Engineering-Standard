# Example — Workflow Definition: Standard Change Workflow

| Field | Value |
| --- | --- |
| Identifier | OAES-EXA-002 |
| Title | Example Workflow Definition: Standard Change Workflow |
| Layer | 61-examples |
| Type | Example |
| Instantiates | OAES-TMPL-005 (Workflow Definition Template) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Show a correctly filled workflow definition. The subject is the standard's own change
workflow (EVO-02), expressed in template form. The normative definition remains
EVO-02; this instance demonstrates the *form*.

## Scope

- Demonstration of OAES-TMPL-005 usage.

## Non-Scope

- Normative force; on any divergence, OAES-SPEC-018 prevails.

## Dependencies

- None normative (ARCH-06).

## Interfaces

- **Inbound:** read by authors filling OAES-TMPL-005.
- **Outbound:** instantiates OAES-TMPL-005.

## Filled Instance

# Workflow Definition: Standard Change Workflow

| Field | Value |
| --- | --- |
| Identifier | OAES-WF-EX1 |
| Title | Standard Change Workflow |
| Layer | 51-evolution |
| Type | Workflow Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | Maintainer |
| Approved | 2026-07-07 |

### Purpose

Carry a proposed change to any OAES artifact from problem statement to integrated,
released text without ever leaving the repository inconsistent.

### Scope

- Trigger: a Contributor submits a change request per OAES-TMPL-009.

### Non-Scope

- Changes inside adopting projects.

### Stages

#### Stage 1: Proposal

- Entry criteria: a change request exists.
- Activities: author completes problem, proposal, class, affected documents, migration
  statement.
- Accountable role: Contributor (ORG-04).
- Permitted agent task classes: drafting and impact-analysis assistance.
- Exit criteria: every field of the change request is filled; class assigned per EVO-01.
- Evidence: the change request (memory record type Evidence).
- Gate review type: structural (QUA-01).
- Human checkpoint: no.

#### Stage 2: Structural review

- Entry criteria: stage 1 gate passed.
- Activities: run all layer-63 rule sets over the proposed state.
- Accountable role: Contributor.
- Permitted agent task classes: deterministic validation.
- Exit criteria: zero rule violations (WFL-03 — objectively decidable).
- Evidence: validator report.
- Gate review type: structural.
- Human checkpoint: no.

#### Stage 3: Content review

- Entry criteria: stage 2 gate passed.
- Activities: Stewards of affected layers review per QUA-04; impact analysis over all
  dependent documents.
- Accountable role: Steward (author-independent per ORG-05).
- Permitted agent task classes: review assistance (verdict remains human per QUA-06).
- Exit criteria: review record with verdict pass or pass-with-findings; no blocking
  defects open.
- Evidence: review record(s).
- Gate review type: content.
- Human checkpoint: yes.

#### Stage 4: Approval

- Entry criteria: stage 3 gate passed.
- Activities: the GOV-02 authority for the change class decides; decision record written
  if DEC-01 applies.
- Accountable role: per GOV-02.
- Permitted agent task classes: none (Constitution Article V.2).
- Exit criteria: recorded approval by the correct authority.
- Evidence: approval record / decision record.
- Gate review type: conformance.
- Human checkpoint: yes (WFL-05 satisfied).

#### Stage 5: Integration

- Entry criteria: stage 4 gate passed.
- Activities: apply the change; bump versions and revision histories; update INDEX.md and
  cross-references; rerun stage-2 validation (EVO-03).
- Accountable role: Maintainer.
- Permitted agent task classes: mechanical application and re-validation.
- Exit criteria: change merged; validators pass on the merged state.
- Evidence: merged revision identifier and final validator report.
- Gate review type: structural.
- Human checkpoint: no (the merge act itself is the Maintainer's, per SEC-03).

### Failure Paths

- Rework: a failed gate at stages 2–4 returns the change to stage 1 with findings
  attached (WFL-10).
- Abort: the Contributor withdraws, or the stage-4 authority rejects; the change request
  and its records are retained (DEC-06 spirit: rejections are kept).

## Future Extension

- Updated whenever OAES-TMPL-005 or EVO-02 changes (TPL-07).

## Related Documents

- [Workflow Definition Template](../60-templates/tmpl-005-workflow-definition.md)
- [Evolution Specification](../51-evolution/evolution-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
