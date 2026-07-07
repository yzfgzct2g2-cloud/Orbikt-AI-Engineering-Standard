# Decision: Specification Review Cadence

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-009 |
| Title | Default 24-month review cadence with per-document override |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Record how "every standard has an expected review cadence" was implemented (IMP-05).

## Scope

- Review cadence policy for the standard's own documents.

## Non-Scope

- Review cadences of adopter artifacts (set by adopters under the same pattern).

## Dependencies

- [Improvement Specification](../../51-evolution/improvement-specification.md)

## Interfaces

- **Inbound:** cited by IMP-05.
- **Outbound:** none.

## Problem

A standard that is never re-read fossilizes; one whose every document carries an
individually negotiated cadence turns review planning into a scheduling project. The
cadence rule itself had to be cheap to operate for decades.

## Options Considered

1. **Mandatory per-document cadence field.** Precise, but requires editing every
   existing document now and negotiating a number for each forever — high ceremony,
   little evidence any two documents truly need different numbers yet.
2. **Fixed global cadence, no exceptions.** Cheapest to operate, but genuinely
   fast-moving documents (validation rule sets tracking specification changes) and
   glacial ones (the Constitution) demonstrably differ.
3. **Default cadence of 24 months for all Active band-0x–5x documents, overridable by an
   optional header declaration, with an edition-time staleness sweep (IMP-06) as the
   backstop.**

## Decision

Option 3. One rule covers everything today; the override exists for the exceptions when
evidence for them appears; the sweep makes overdue reviews visible even if triage lapses.

## Consequences

- Easier: no mass edit, no per-document negotiation, mechanical overdue detection.
- Harder: 24 months is a judgment, not a measurement — accepted, and itself subject to
  revision at the first review cycle it governs.

## Future Extension

- Superseded if review history shows systematically different natural cadences per
  document class.

## Related Documents

- [Improvement Specification](../../51-evolution/improvement-specification.md)
- [Evolution Specification](../../51-evolution/evolution-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial record. |
