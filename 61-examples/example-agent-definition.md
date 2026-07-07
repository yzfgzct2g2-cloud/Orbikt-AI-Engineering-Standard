# Example — Agent Definition: Document Conformance Checker

| Field | Value |
| --- | --- |
| Identifier | OAES-EXA-001 |
| Title | Example Agent Definition: Document Conformance Checker |
| Layer | 61-examples |
| Type | Example |
| Instantiates | OAES-TMPL-004 (Agent Definition Template) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Show a correctly filled agent definition. The subject is the deterministic checker that
enforces the validation rule sets of layer 63 against this repository. It is an example of
*form*; the OAES maintainers separately admit a real checker by writing their own instance.

## Scope

- Demonstration of OAES-TMPL-004 usage.

## Non-Scope

- Normative force; any real checker is admitted through its own definition.

## Dependencies

- None normative (ARCH-06).

## Interfaces

- **Inbound:** read by authors filling OAES-TMPL-004.
- **Outbound:** instantiates OAES-TMPL-004.

## Filled Instance

# Agent Definition: Document Conformance Checker

| Field | Value |
| --- | --- |
| Identifier | OAES-AGENT-EX1 |
| Title | Document Conformance Checker |
| Layer | maintainers' tooling register |
| Type | Agent Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | Maintainer (accountable per AGT-05) |
| Approved | 2026-07-07 |

### Purpose

Check every changed document against the deterministic rules of
[Document Conformance Rules](../63-validators/document-conformance-rules.md) and
[Repository Structure Rules](../63-validators/repository-structure-rules.md), and report
each violated rule with file and line.

### Scope

- Task classes: structural review (QUA-01) at stage 2 and stage 5 of the change workflow.

### Non-Scope

- Content judgment of any kind: correctness, clarity, and classification are human review
  concerns.

### Classification

- Deterministic (AGT-01): identical repository state always yields the identical report.
  AGT-02 justification not required — determinism is the preferred case.

### Inputs

- The repository working tree at a stated revision. Context budget (CTX-07): the changed
  files plus the two rule sets; nothing else. No personal data (PRV-07): none required.

### Outputs

- A report listing each violated rule identifier, file, and line. The report is evidence
  (MEM-02) for the structural-review gate; per AGT-09 it needs no further verification
  because the agent is deterministic and its rules are the published rule sets.

### Authority Boundary

- Autonomous: read the working tree; write its report to the evidence store.
- Requires human confirmation: none — it takes no action beyond reporting.
- Prohibited: modifying any artifact; approving or rejecting any gate; all actions
  reserved by Constitution Article V.2 (AGT-07).

### Escalation

- On any rule it cannot evaluate mechanically (missing input, unreadable file), it stops
  and reports the file to the Maintainer instead of guessing (AGT-08).

### Evaluation Criteria

- Against a maintained fixture set of known-conformant and known-defective documents:
  zero false passes, zero false failures. Re-evaluated on every change to the rule sets
  and at least once per edition (AGT-13).

## Future Extension

- Updated whenever OAES-TMPL-004 changes (TPL-07).

## Related Documents

- [Agent Definition Template](../60-templates/tmpl-004-agent-definition.md)
- [Agent Specification](../11-capabilities/agent-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
