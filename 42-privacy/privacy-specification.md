# Privacy Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-014 |
| Title | Privacy Specification |
| Layer | 42-privacy |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define jurisdiction-neutral duties for handling data in OAES-governed work: classify
everything, minimize by default, and treat personal data as a liability that must justify
its presence at every step.

## Scope

- Data classification, minimization, purpose limitation, retention, and disclosure duties
  across knowledge, memory, context, and project artifacts.

## Non-Scope

- Legal advice or mapping to specific regulations (adopter duty).
- Access control and threat protection
  ([Security Specification](../43-security/security-specification.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)
- [Memory Specification](../21-memory/memory-specification.md)
- [Context Specification](../22-context/context-specification.md)
- [Project Specification](../30-projects/project-specification.md)

## Interfaces

- **Inbound:** MEM-06 defers to this specification on personal data; project charters
  declare data classes under PRV-02.
- **Outbound:** storage and retention mechanics of the information layers.

## Requirements

### Classification

- **PRV-01** All data handled in OAES-governed work MUST be classified as one of:
  **public**, **internal**, **confidential**, or **personal** (relating to an identified
  or identifiable person). Personal data additionally inherits the strictest otherwise
  applicable class.
- **PRV-02** Every project charter MUST declare which classes the project handles and
  where each class may be stored; handling an undeclared class is a blocking defect.

### Minimization and purpose

- **PRV-03** Personal data MUST NOT enter a knowledge base, memory store, or context
  unless the task is impossible without it; identifiers MUST be removed or replaced with
  role descriptions or pseudonyms wherever the purpose survives the replacement.
- **PRV-04** Personal data collected for one recorded purpose MUST NOT be reused for
  another without a new recorded justification by the accountable role.
- **PRV-05** Contexts (CTX-02) MUST exclude personal data by default; inclusion requires
  the task to state the need, and the context record (CTX-09) makes the inclusion
  auditable.

### Agents and external parties

- **PRV-06** Personal or confidential data MUST NOT be supplied to an agent whose
  implementation transmits data outside the project's declared storage boundary, unless
  that transmission is itself declared in the project charter and accepted by the
  accountable role.
- **PRV-07** Agent definitions for agents that may touch personal data MUST state this in
  their inputs and authority boundary (AGT-03, AGT-06).

### Retention and removal

- **PRV-08** Personal data MUST have a retention rule with a definite end (a date or a
  completable condition); "indefinite" is not a lawful retention rule for personal data.
- **PRV-09** On expiry or on a substantiated removal obligation, personal data MUST be
  destroyed or irreversibly de-identified across knowledge, memory, and archives; this is
  the sole exception to the append-only rule (MEM-03) and MUST itself be recorded
  (without reproducing the removed data).

### Incidents

- **PRV-10** Suspected unauthorized disclosure of personal or confidential data MUST be
  recorded as an observation immediately and escalated per ORG-06 without waiting for
  confirmation.

## Validation

- Classification presence (PRV-01, PRV-02) and retention declarations (PRV-08) are
  deterministically checkable; minimization (PRV-03, PRV-05) is a content-review check on
  context and knowledge changes.

## Future Extension

- An informative guide mapping these duties to major regulatory regimes may be added in
  the documentation layer; requirements here remain jurisdiction-neutral.

## Related Documents

- [Security Specification](../43-security/security-specification.md)
- [Memory Specification](../21-memory/memory-specification.md)
- [Context Specification](../22-context/context-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
