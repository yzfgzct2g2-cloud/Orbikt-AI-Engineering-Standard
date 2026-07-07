# Quality Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-012 |
| Title | Quality Specification |
| Layer | 40-quality |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how quality is verified in OAES-governed work: what kinds of review exist, what
evidence they require, how defects are handled, and what a claim of conformance to this
standard actually means.

## Scope

- Review types, evidence rules, defect handling, and conformance levels — applied both to
  adopter artifacts and to this standard's own documents.

## Non-Scope

- Domain-specific quality criteria (defined by adopting projects).
- The content of deterministic rule sets
  ([63-validators](../63-validators/README.md) publishes them under the
  [Tooling Specification](../64-tools/tooling-specification.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Agent Specification](../11-capabilities/agent-specification.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Project Specification](../30-projects/project-specification.md)

## Interfaces

- **Inbound:** every workflow gate invokes a review type defined here; the
  [Evolution Specification](../51-evolution/evolution-specification.md) mandates these
  reviews for changes to the standard.
- **Outbound:** role-separation rules (ORG-05), agent output discipline (AGT-09), gate
  structure (WFL-04).

## Requirements

### Review types

- **QUA-01** OAES defines three review types. Every gate MUST state which it requires:

  | Type | Performed by | Question answered |
  | --- | --- | --- |
  | Structural review | Deterministic validation | Does the artifact satisfy all mechanically checkable rules? |
  | Content review | Human reviewer (agent-assisted permitted) | Is the artifact correct, complete, and consistent with its dependencies? |
  | Conformance review | Human reviewer independent of the work | Does the practice match the declared artifacts (PRJ-07), and are all requirements met or waived? |

- **QUA-02** Conformance to OAES is claimed at exactly one of three levels:

  | Level | Meaning |
  | --- | --- |
  | Level 1 — Structural | All required artifacts exist and pass structural review. |
  | Level 2 — Process | Level 1, plus work demonstrably flows through defined workflows with gate evidence. |
  | Level 3 — Audited | Level 2, plus a conformance review within the last declared review interval. |

### Review discipline

- **QUA-03** Structural review MUST precede content review, and content review MUST
  precede conformance review; human attention is never spent on defects a deterministic
  check can find (Constitution Article III.1).
- **QUA-04** Every content and conformance review MUST produce a *review record* stating:
  what was reviewed (identifier and version), against which requirements, the findings,
  and the verdict. The
  [Review Record Template](../60-templates/tmpl-010-review-record.md) implements this
  requirement.
- **QUA-05** A review verdict MUST be one of: **pass**, **pass with findings** (defects
  recorded, none blocking), or **fail**. A gate MUST NOT pass on a fail verdict (WFL-04).
- **QUA-06** Reviews performed with agent assistance remain the reviewer's verdict; the
  reviewer MUST examine the evidence, not merely the agent's summary of it (AGT-09,
  Constitution Article V).

### Evidence

- **QUA-07** Every claim in a review record MUST be traceable to evidence: a validator
  output, a cited artifact and version, or a recorded observation. "Reviewed and fine" is
  not a review record.
- **QUA-08** Evidence MUST be stored as memory records (type Evidence) and retained per
  MEM-07 for as long as the reviewed artifact is Active.

### Defects

- **QUA-09** A *defect* is any verified deviation from a requirement of this standard or
  from the project's declared artifacts. Every defect MUST be recorded with: the violated
  requirement, the artifact affected, severity (**blocking** — invalidates a gate or a
  conformance claim — or **non-blocking**), and its resolution or waiver.
- **QUA-10** A defect is closed only by fixing the artifact, fixing the practice, or a
  waiver per GOV-07. Closing a defect by deleting its record is prohibited (MEM-03).

## Validation

- Review records and defect records are structurally checkable; QUA-03 ordering and
  QUA-06 reviewer diligence are verified by conformance review.

## Future Extension

- Quantitative quality metrics (defect density, review latency) may be added as an
  informative companion document; conformance levels stay qualitative and auditable.

## Related Documents

- [Review Record Template](../60-templates/tmpl-010-review-record.md)
- [Document Conformance Rules](../63-validators/document-conformance-rules.md)
- [Governance Specification](../50-governance/governance-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
