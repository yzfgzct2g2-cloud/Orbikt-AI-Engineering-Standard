# OAES North Star

| Field | Value |
| --- | --- |
| Identifier | OAES-VISION-001 |
| Title | North Star |
| Layer | 01-meta |
| Type | Vision |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

State the enduring vision of the Orbikt AI Engineering Standard: why it exists, what it
must always solve, what it must never become, and how every future idea is to be judged.
This document is the first test applied to any proposed change; the
[Constitution](../00-constitution/constitution.md) remains the supreme *rule*, and this
document is the supreme *intent* behind the rules. It is informative in form (DOCU-02) and
decisive in practice: architecture reviews (IMP-04) evaluate proposals against it.

## Scope

- The permanent intent of the standard.

## Non-Scope

- Rules (the Constitution and specifications); rationale for individual decisions
  (decision records and the
  [Architecture Decision Journal](../02-architecture/architecture-decision-journal.md)).

## Dependencies

- None. Like the Constitution, this document depends on nothing; unlike the Constitution,
  nothing is invalidated by conflicting with it — it persuades reviewers rather than
  voiding text.

## Interfaces

- **Inbound:** architecture reviews, RFC evaluations, and edition planning test proposals
  against this document.
- **Outbound:** none.

## Why does OAES exist?

Software engineering is absorbing collaborators whose output is fast, plausible, and
unverified. Without discipline, organizations drift into engineering whose artifacts no
one can explain, whose facts have no source, whose decisions have no record, and whose
processes work only with one vendor's product of one particular year. OAES exists so that
engineering assisted by automated agents remains **correct, auditable, reproducible, and
maintainable by humans** — permanently, and independently of any technology generation.

## What problems should OAES solve forever?

These problems are technology-independent; they existed before AI and will outlast every
model generation:

1. **Truth management** — every fact has one home, a source, and an expiry
   (knowledge layer).
2. **History management** — what happened is reconstructible and never silently rewritten
   (memory layer, archive).
3. **Attention management** — every task gets the smallest sufficient, provenance-marked
   working set (context layer).
4. **Authority management** — every actor, human or automated, acts within declared,
   inspectable limits, and accountability always lands on a human (capabilities,
   organization, enterprise layers).
5. **Change management** — everything can evolve, and nothing evolves ungoverned
   (evolution, governance layers).
6. **Beginning management** — no work starts before it is understood: goals aligned,
   questions asked, risks and constraints surfaced (discovery layer).

## What will OAES always protect?

Whatever else changes, the standard protects six things, and each protection has teeth —
a citable requirement, not a sentiment:

1. **The human who is accountable** — from being blamed for automation they could not
   inspect (authority boundaries, checkpoint catalog).
2. **The engineer who inherits the work** — from unexplained rules and unrecorded
   reasoning (decision records, the journal, this document).
3. **The truth** — from duplication, staleness, and confident fabrication (single
   sourcing, provenance, lifecycle states).
4. **The record** — from silent rewriting (append-only history, integrity duties).
5. **The person in the data** — from convenience (privacy classification, minimization,
   the one lawful exception to append-only).
6. **The standard itself** — from capture by any vendor, model, domain, or fashion
   (neutrality, adapters, governed change).

## What should OAES never become?

- **A prompt library.** The day OAES contains instructions addressed to an AI system, it
  has died and something cheaper has taken its name.
- **A vendor artifact.** Never optimized for, dependent on, or branded by any model,
  product, or platform — including whichever one is dominant at the time of reading.
- **A domain encyclopedia.** Domain content lives in adapters and adopter repositories;
  the core stays permanently domain-free.
- **A bureaucracy.** Every required record must earn its cost by preventing a real,
  named failure. A rule that only produces paperwork is a defect (the improvement loop
  exists to remove it).
- **A museum.** A standard that no longer changes has not succeeded; it has been
  abandoned. Review cadences (IMP-05) exist to force the question.

## What engineering principles are non-negotiable?

The twelve principles of Constitution Article III, and three consequences of them that
future maintainers should hold with equal force:

- **Boring beats clever.** Deterministic checks, plain text, explicit registries — the
  unfashionable mechanisms are the ones that still work in year ten.
- **The standard must survive its tools** (TOOL-02) **and its authors** (this document,
  the journal, and the decision registers exist for exactly that).
- **Honesty over appearance.** A declared Level 1 conformance outranks a hollow Level 3;
  a recorded rejection outranks an undocumented consensus; an admitted gap outranks a
  confident guess.

## How should future maintainers evaluate new ideas?

Ask, in order — a "no" at any step means redesign or reject:

1. Does it violate the Constitution? (If yes: stop.)
2. Would it still make sense if every current AI vendor disappeared tomorrow?
3. Would it still make sense if agents became 100× more capable? (Rules that merely
   patch today's model weaknesses do not belong in the standard.)
4. Does it create a second source of truth for anything?
5. Does it add a concern to a layer that already has one (ARCH-02)?
6. Can a human perform it with no tooling at all (III.10)?
7. Can its conformance be checked — deterministically if possible?
8. Does it name a real failure it prevents, and is the record cost proportionate?
9. Will the person who maintains this in ten years understand *why* from the change
   itself (decision record, journal entry)?

## Which values remain unchanged even if everything else changes?

Human accountability. Single-sourced truth. Evidence before assumption. Append-only
history. Explicit authority. Minimal context. Governed change. Vendor independence.
If AI, languages, vendors, platforms, and even the definition of "software" change
completely, these remain the values of the standard — and every one of them is enforced
by a specific, citable requirement, which is what makes them values rather than slogans.

## How should the repository grow?

- **Depth before breadth:** extend existing layers with companion specifications before
  proposing new layers; new layers before new bands; a new band is a once-a-decade event.
- **Core stays small:** anything domain-, technology-, or organization-specific grows in
  adapters and adopter repositories, never here. The core's growth rate should *decline*
  over time as it approaches completeness; accelerating core growth is a warning sign.
- **Every extension arrives with its validation:** a new specification without
  deterministically checkable rules is not finished.

## What would success look like after 10 years?

- Projects in unrelated domains, on technologies that do not exist today, run on the same
  core with only adapters differing.
- A newcomer can trace any rule to its reason (decision record or journal) without
  finding the authors.
- The archive is populated — meaning the standard evolved — and every retirement has a
  successor pointer.
- Editions released regularly; migration statements short; no adopter ever surprised by
  a breaking change.
- Most conformance defects are caught by validators before any human looks.

## What would failure look like?

- Normative text naming a vendor, model, or framework — neutrality lost.
- Two documents answering the same question differently — single sourcing lost.
- Gates passing on agent say-so; review records that say "looks good" — accountability
  and evidence lost.
- A fork maintained "because changing the standard is too hard" — governance lost.
- No changes for years while practice drifts — the museum failure, quieter than the
  others and just as fatal.

## Future Extension

- This document changes rarely and only by the same authority as constitutional
  amendment intent: Standards Committee, recorded decision, explicit supersession of the
  affected answer.

## Related Documents

- [Constitution](../00-constitution/constitution.md)
- [Architecture Decision Journal](../02-architecture/architecture-decision-journal.md)
- [Improvement Specification](../51-evolution/improvement-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
| 1.1.0 | 2026-07-08 | OAES Standards Committee | Added "What will OAES always protect?"; all other answers reaffirmed at the edition 1.2 review (OAES-DEC-010). |
