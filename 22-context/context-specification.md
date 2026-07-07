# Context Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-010 |
| Title | Context Specification |
| Layer | 22-context |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define how the information given to an executor of a task — human or agent — is selected,
bounded, and recorded. Context discipline is where the principles of context minimization
and retrieval before reasoning become enforceable engineering practice.

## Scope

- Assembly, content, budget, and provenance rules for task contexts.

## Non-Scope

- Storage and curation of the underlying information (knowledge and memory layers).
- Mechanics of any retrieval technology; requirements here are satisfiable manually.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)
- [Memory Specification](../21-memory/memory-specification.md)

## Interfaces

- **Inbound:** workflows deliver each task to its executor with a context conforming to
  this specification; quality reviews inspect context records when diagnosing defects.
- **Outbound:** retrieval from knowledge (KNO-08 indexes) and memory (MEM-04 trust
  marking).

## Requirements

### Assembly

- **CTX-01** A *context* is the set of information supplied for one task. Context MUST be
  assembled by retrieval from the knowledge and memory layers before any new reasoning or
  generation begins (Constitution Article III.5).
- **CTX-02** Context MUST be the smallest set sufficient for the task: each included item
  MUST be traceable to a stated need of the task. Unneeded inclusion is a defect, not a
  safety margin (Constitution Article III.4).
- **CTX-03** Items MUST be included by reference to their authoritative location wherever
  the executor can resolve references; copies are permitted only where resolution is
  impossible, and a copy MUST name its source and version.

### Content rules

- **CTX-04** Every context item MUST carry its trust level: *knowledge* (verified),
  *memory* (recorded, unverified), or *external* (neither, for example task-supplied
  input). Executors treat unverified items per Constitution Article III.3.
- **CTX-05** When items conflict, the executor MUST NOT silently choose: the conflict is
  reported and resolved through the knowledge layer (KNO-02) or by the task's accountable
  role.
- **CTX-06** Context MUST include the task's authority boundary (AGT-06) whenever the
  executor is an agent.

### Budget

- **CTX-07** Every task class MUST declare a context budget: an upper bound on context
  size in a stated unit (items, words, or another measurable unit). Exceeding the budget
  requires narrowing the task or splitting it — never silently truncating items.
- **CTX-08** If required information does not exist in knowledge or memory, the gap is
  recorded and resolved before or alongside the task; inventing the missing information
  within the task is prohibited.

### Provenance

- **CTX-09** For every task whose output feeds a gate, the context actually supplied MUST
  be recorded (as a memory record of type Evidence) precisely enough to reproduce it:
  item identifiers, versions, and trust levels.

## Validation

- CTX-04, CTX-07, and CTX-09 are deterministically checkable from context records; CTX-02
  minimality and CTX-05 conflict handling are review checks.

## Future Extension

- Named context profiles (standard budgets and item sets per task class) may be added as
  companion documents by minor change.

## Related Documents

- [Agent Specification](../11-capabilities/agent-specification.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)
- [Memory Specification](../21-memory/memory-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
