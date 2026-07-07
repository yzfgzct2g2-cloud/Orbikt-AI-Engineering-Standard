# Decision: Definitive Edition Hardening

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-010 |
| Title | Edition 1.2 hardens self-conformance instead of restructuring |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Record the scope decision of the final architectural pass (edition 1.2): what the
red-team and future (2036) reviews found, and why the response was targeted hardening
rather than restructuring.

## Scope

- The disposition of every finding of the edition 1.2 red-team review.

## Non-Scope

- The individual fixes (each is recorded in its document's revision history citing this
  decision).

## Dependencies

- [OAES Constitution](../../00-constitution/constitution.md)
- [North Star](../../01-meta/north-star.md)

## Interfaces

- **Inbound:** cited by every document amended in edition 1.2.
- **Outbound:** applies the North Star evaluation questions as the review standard.

## Problem

An adversarial review of editions 1.0–1.1 confirmed the architecture (layering,
identity, adapters, governance) but found the standard **violating itself** in specific,
fixable ways: mandated registers that did not exist (GOV-03 role register, IMP-01
backlog), registry identifiers outside the NAM-01 grammar, "deterministically checkable"
claims with no published rules, glossary drift against DOCU-14, discovery questions
without the epistemics that make them auditable, no conformable founding state for a
one-person maintainer, and a section-set asymmetry between Foundation and operating
specifications. The 2036 review found no technology binding requiring redesign.

## Options Considered

1. **Defer everything to the improvement backlog.** Cheapest now, but shipping a
   "definitive edition" that knowingly violates its own requirements fails the North
   Star's honesty test and QUA discipline; self-violations are blocking, not backlog.
2. **Restructure broadly** — retrofit all twenty Foundation specifications with the
   extended section set, renumber registry identifiers into the NAM-01 grammar, convert
   the example charter into a real one. Maximal symmetry, but it churns stable,
   conforming documents without changing any behavior — failing the Foundation Rule
   (replacement requires demonstrated insufficiency) and NAM-03's spirit for
   identifiers already cited elsewhere.
3. **Targeted hardening:** create the two missing registers with real state; legalize
   registry identity (NAM-13); publish the missing rule set (OAES-VAL-003); sync the
   glossary; strengthen DSC-05 question epistemics; add GOV-09 bootstrap mode; make the
   extended section set required-going-forward at SHOULD strength (DOCU-06) with the
   pre-1.2 exemption recorded here.

## Decision

Option 3. Every self-violation is fixed in this edition; every stylistic asymmetry is
either legalized with rationale or scheduled through the backlog the edition itself
creates. Nothing stable was restructured, because no finding demonstrated the existing
structure insufficient — the findings demonstrated missing *instances*, not missing
*architecture*.

## Consequences

- Easier: the standard now satisfies its own registers, rules, and grammar — the
  self-conformance a standards body must have before auditing anyone else.
- Harder: two section-set generations coexist among specifications until natural
  revisions align them (bounded by the IMP-05 review cycle, 24 months).
- Accepted risk: the standard remains field-untested; no documentation pass can
  substitute for a real adopter cycle (IMP-B-006).

## Future Extension

- The pre-1.2 section-set exemption expires document-by-document as each specification
  is next revised.

## Related Documents

- [Improvement Backlog](../../51-evolution/improvement-backlog.md)
- [Role Register](../role-register.md)
- [Architecture Decision Journal](../../02-architecture/architecture-decision-journal.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial record. |
