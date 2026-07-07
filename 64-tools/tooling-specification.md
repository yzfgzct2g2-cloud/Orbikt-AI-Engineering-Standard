# Tooling Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-020 |
| Title | Tooling Specification |
| Layer | 64-tools |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how supporting tools — generators, validators, and utilities — are qualified,
registered, and constrained, so tooling accelerates the standard without ever becoming a
dependency the standard cannot live without.

## Scope

- Qualification, registration, and operating constraints for all tools used on
  OAES-governed artifacts; class-specific duties for generators and validators.

## Non-Scope

- Autonomous action on artifacts — that is agency, governed by the
  [Agent Specification](../11-capabilities/agent-specification.md) in addition to this
  document.
- Adopters' product tooling.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Security Specification](../43-security/security-specification.md)

## Interfaces

- **Inbound:** layers 62, 63, and 64 register their artifacts under these rules; SEC-09
  admits tools by this qualification.
- **Outbound:** security duties (SEC-01, SEC-04, SEC-10).

## Requirements

### Position of tooling

- **TOOL-01** Tools implement the standard; they never define it (Constitution
  Article I.3). Every behavior of a qualified tool MUST be traceable to a published
  document; a tool behavior with no documentary source is a defect in the tool.
- **TOOL-02** Every task a tool performs MUST remain performable by hand from the
  published documents alone (Constitution Article III.10). A rule enforceable only by a
  particular tool is not a rule.

### Qualification

- **TOOL-03** A tool is admitted to OAES-governed work only after a recorded
  qualification stating: the tool's function, the documents it implements, its inputs and
  outputs, its upstream dependencies (SEC-10), and the evidence that it implements its
  documents faithfully.
- **TOOL-04** Tools that gate anything (validators, and generators whose output is merged
  unedited) MUST be deterministic: identical inputs produce identical outputs. A
  probabilistic helper may draft, but its output enters gates only through the
  verification path of AGT-09.
- **TOOL-05** Qualified tools MUST operate on open, plain-text representations of
  artifacts; a tool requiring a proprietary format for authoritative content disqualifies
  itself (Constitution Article IV).
- **TOOL-06** A tool's qualification lapses when its implementation or its implemented
  documents change; requalification follows the same path.

### Registration

- **TOOL-07** Every qualified tool MUST have a descriptor registered in its home layer
  (62 for generators, 63 for validator implementations, 64 otherwise) naming its
  qualification record and its accountable Maintainer.
- **TOOL-08** An unregistered tool MAY be used for private drafting only; its output has
  no standing at any gate.

### Class-specific duties

- **TOOL-09** *Validators:* an implementation MUST evaluate a published rule set (layer
  63) exactly — no additional checks, no omitted checks — and report violations by rule
  identifier, file, and location. Extending checking means changing the rule set first.
- **TOOL-10** *Generators:* output MUST pass the applicable rule sets without manual
  repair, MUST fill only from its inputs (inventing no content), and MUST leave every
  unfillable slot visibly unfilled per TPL-05.

## Validation

- Descriptors and qualification records are structurally checkable; TOOL-04 determinism
  and TOOL-09 exactness are verified against fixture sets during qualification
  (as in the evaluation criteria of
  [OAES-EXA-001](../61-examples/example-agent-definition.md)).

## Future Extension

- Class-specific duties may be split into per-class specifications if they grow beyond a
  section, superseding [OAES-DEC-005](../50-governance/decisions/dec-005-single-tooling-specification.md)
  in part.

## Related Documents

- [Agent Specification](../11-capabilities/agent-specification.md)
- [Security Specification](../43-security/security-specification.md)
- [Document Conformance Rules](../63-validators/document-conformance-rules.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
