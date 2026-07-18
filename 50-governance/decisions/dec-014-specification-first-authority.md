# Decision: Specification-First Authority

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-014 |
| Title | Specifications govern implementation; implementation never silently redefines them |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Repository owner mandate, recorded by OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Record the authority order for OAES v2 work and the rule that the specification
governs the implementation.

## Scope

- The source-of-truth order for all OAES v2 sessions and implementations.

## Non-Scope

- The content of any individual specification.

## Dependencies

- [OAES v2 Specification Index](../../spec/README.md)

## Interfaces

- **Inbound:** cited by [BOOTSTRAP.md](../../BOOTSTRAP.md) and the consistency scan.
- **Outbound:** builds on the Foundation constitution's document-supremacy principle.

## Problem

When an implementation and its specification drift, one of them silently becomes the
real standard. With multiple Actor kinds (humans, AI sessions, CI) continuing the
repository independently, an explicit authority order is the only defense against
divergent local interpretations.

## Options Considered

1. **Implementation-defined behavior.** Fast, but the standard would then be whatever
   the last committer's code does — unverifiable and unportable.
2. **Specification-first with an explicit authority order.** Slower per change (spec
   and Decision Record before code), but every conformance question has one answer.

## Decision

Option 2. The authority order is: (1) existing repository evidence, (2) the accepted
OAES v2 mandate, (3) Decision Records, (4) governance documents, (5) journals and
historical notes, (6) implementation code. Implementations that need to deviate must
first change the specification through a Decision Record.

## Consequences

- Easier: any Actor can resolve conflicts without the original conversation.
- Harder: spec updates are mandatory overhead for behavior changes.

## Future Extension

- None planned.

## Related Documents

- [OAES v2 Specification Index](../../spec/README.md)
- [BOOTSTRAP.md](../../BOOTSTRAP.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-18 | OAES Standards Committee | Initial record. |
