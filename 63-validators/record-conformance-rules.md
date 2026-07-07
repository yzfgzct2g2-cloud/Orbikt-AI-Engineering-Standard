# Record Conformance Rules

| Field | Value |
| --- | --- |
| Identifier | OAES-VAL-003 |
| Title | Record Conformance Rules |
| Layer | 63-validators |
| Type | Validation Rule Set |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Enumerate the mechanically decidable checks for *operational records* — discovery
records, risk records, messages, metric definitions, engagement records, memory records,
review records, and backlog items — so that every "deterministically checkable" claim in
the operating specifications resolves to a published rule.

## Scope

- Records produced under the operating specifications (OAES-SPEC-021 to 032 and
  OAES-SPEC-009/012), in this repository and in adopter scopes that apply OAES record
  forms.

## Non-Scope

- Document structure ([Document Conformance Rules](document-conformance-rules.md)).
- Repository structure ([Repository Structure Rules](repository-structure-rules.md)).
- Content judgment (materiality, honesty, adequacy — human review per QUA-01).

## Dependencies

- None normative (ARCH-06); each rule cites the requirement it derives from.

## Interfaces

- **Inbound:** gates whose evidence includes these record types run the applicable rules
  at structural review (QUA-03); adopters run them over their registers.
- **Outbound:** rules derive from the operating specifications named per rule.

## Rules

Each rule is pass/fail per record. A conforming validator reports every failed rule with
record identifier and missing or invalid element.

| Rule | Check | Derives from |
| --- | --- | --- |
| VREC-01 | A discovery record contains all ten DSC-02 stage sections. | DSC-02 |
| VREC-02 | A discovery record contains 5–10 question blocks, or a confidence declaration naming its countersigning approver. | DSC-05, DSC-06 |
| VREC-03 | Every question block states: why it exists (uncertainty removed), the decision that depends on it, the risk if unanswered, and an answer reference or open status. | DSC-05, DSC-07 |
| VREC-04 | Every goal row carries a success criterion and an owner. | DSC-04 |
| VREC-05 | Every constraint row carries a class and either a source or an explicit accepted-assumption marker. | DSC-09 |
| VREC-06 | A risk record carries likelihood, impact, owner, and a response in {avoid, mitigate, transfer, accept}; an accept response names a human and a date. | DSC-10 |
| VREC-07 | A message of record carries all COM-02 fields and a type from the COM-03 table. | COM-02, COM-03 |
| VREC-08 | Every Request, Question, and Escalation message carries a response window. | COM-05 |
| VREC-09 | A metric definition carries all MET-01 fields, including at least one known gaming mode. | MET-01 |
| VREC-10 | Engagement records use only the CAP-01 states, and every state transition has an Event record. | CAP-01, CAP-02 |
| VREC-11 | A memory record carries timestamp, producer (role, plus agent definition if agent-produced), and a type from the MEM-02 table. | MEM-01, MEM-02 |
| VREC-12 | A review record carries artifact identifier and version, requirements in scope, reviewer, and a verdict in {pass, pass with findings, fail}; every finding row cites evidence. | QUA-04, QUA-05, QUA-07 |
| VREC-13 | Every improvement-backlog item carries a source, a raised date, and an outcome in {accepted, rejected, parked}; parked items carry a revisit date or trigger. | IMP-01, IMP-02 |
| VREC-14 | A project charter declares its pinned edition, conformance level, data classes, and adapters (or "none"). | PRJ-01, PRJ-02, PRV-02, ADP-07 |

## Future Extension

- Rules are added only when their source requirements change, citing the motivating
  requirement change in this document's revision history — the same discipline as the
  sibling rule sets.

## Related Documents

- [Document Conformance Rules](document-conformance-rules.md)
- [Repository Structure Rules](repository-structure-rules.md)
- [Tooling Specification](../64-tools/tooling-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial release, Foundation edition 1.2 (OAES-DEC-010). |
