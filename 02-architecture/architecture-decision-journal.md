# Architecture Decision Journal

| Field | Value |
| --- | --- |
| Identifier | OAES-REF-003 |
| Title | Architecture Decision Journal |
| Layer | 02-architecture |
| Type | Reference |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Preserve architectural *intent* for future maintainers: why the architecture is shaped
this way, which alternatives lost and why, which trade-offs were accepted with open eyes,
which risks remain, and where the standard is expected to evolve. Individual choices are
recorded in [decision records](../50-governance/decisions/); this journal is the
connected narrative across them.

## Scope

- Narrative rationale, accepted trade-offs, remaining risks, open assumptions, and the
  expected evolution of the standard.

## Non-Scope

- Binding rules (the specifications) and individual decision details (decision records).
  On any divergence, those prevail; this journal is informative (DOCU-02).

## Dependencies

- None normative.

## Interfaces

- **Inbound:** architecture reviews (IMP-04) and future maintainers read this before
  proposing structural change.
- **Outbound:** cites decision records and specifications.

## Why the architecture is shaped this way

**Everything is a document in one repository.** The alternative — databases, services,
tool-backed registries — was rejected before the first file was written. Documents in
plain text under version control are the only artifact class with a fifty-year track
record of surviving technology change. Constitution Article X ("the repository is the
standard") is the anchor; TOOL-02 keeps it true by requiring every operation to remain
possible by hand.

**Banded layers instead of a flat topic list** ([OAES-DEC-001](../50-governance/decisions/dec-001-banded-layer-numbering.md)).
The bands encode the one structural rule that prevents decay: dependencies flow downward.
Wave 2 exercised the design as intended — three layers (13, 31, 32) were inserted into
band gaps without renumbering anything
([OAES-DEC-006](../50-governance/decisions/dec-006-wave-2-extension-strategy.md)).

**Identity is divorced from location** ([OAES-DEC-002](../50-governance/decisions/dec-002-location-independent-identifiers.md)).
The registry (INDEX.md) costs a little bookkeeping on every change and buys the freedom
to restructure forever. The bookkeeping is exactly the kind of defect deterministic
validators catch for free, which is why the trade was accepted.

**"Engines" are process specifications, not software**
([OAES-DEC-006](../50-governance/decisions/dec-006-wave-2-extension-strategy.md)).
The enterprise wave was requested in the vocabulary of machinery — discovery engine,
question engine, improvement engine. Implementing machinery would have bound the standard
to a technology generation and violated III.10. Each engine became a specification of
*inputs, rules, records, and outcomes* that a team of humans could run with paper, and
that any future automation can implement without the standard changing.

**Domain content is exiled, with a lawful home**
([OAES-DEC-008](../50-governance/decisions/dec-008-domain-adapter-isolation.md)).
Article IV bans domain and technology content from the core, but a ban without an outlet
invites violation. The adapter layer (32) is the outlet: adapters may be as
domain-specific and even technology-specific as adopters need, in their own repositories,
pinned to a core edition, with a strictly one-way dependency. The core's purity is now
cheap to maintain because there is somewhere legitimate to put everything else.

## Trade-offs accepted

- **Ceremony over speed.** Every consequential act produces a record. Cost: friction on
  small changes. Accepted because the alternative — unrecorded drift — is the documented
  failure mode of every long-lived standard. Mitigation: change classes (EVO-01) keep
  editorial changes light, and the improvement loop (IMP) is required to remove rules
  whose cost exceeds their prevented failure (North Star: "not a bureaucracy").
- **Qualitative conformance levels over scores.** Numeric maturity scores invite gaming
  and false precision; three auditable levels (QUA-02) invite honesty. Cost: less
  granularity for comparing projects. Accepted; the metrics framework (OAES-SPEC-028)
  now provides granularity where it is safe — on processes, not on people (MET-04).
- **English-only normative text** (Article IX). Cost to non-English adopters; accepted
  for single-sourcing of meaning, with translations explicitly informative.
- **Default review cadence rather than per-document cadences**
  ([OAES-DEC-009](../50-governance/decisions/dec-009-specification-review-cadence.md)).
  Uniformity beats precision here: one sweep, one overdue rule, no per-document
  negotiation. Documents that genuinely need a different cadence can declare one.

## Remaining risks

1. **Registry gravity.** INDEX.md grows linearly with artifacts. At hundreds of entries
   it needs sectioning discipline; at thousands it may need per-layer sub-registries. The
   identifier scheme already permits that split without breaking references.
2. **Governance bootstrap.** GOV-01 assumes at least three committee humans. A one-person
   adopter can hold all roles, but ORG-05 separation then relies on the recorded-conflict
   escape hatch. This is honest but weaker; small-team guidance is expected future work.
3. **Validator drift.** Rule sets must track specifications (one change, both updated —
   EVO-03). The discipline is specified but its failure mode is silent: a stale rule set
   still passes. The specification review cycle (IMP-05) is the backstop.
4. **Discovery theater.** The discovery framework can be performed ritually — questions
   asked, nobody listening. DSC ties every question to the charter field it unblocks
   precisely to resist this, but no standard can fully prevent performative compliance.

## Assumptions intentionally left open

- **What agents will be.** The agent model (AGT-01's deterministic/probabilistic split)
  deliberately assumes nothing about implementation. If a future agent class breaks the
  dichotomy, AGT-01 is the single point of revision.
- **Storage and tooling.** Any medium with immutable, attributable history satisfies the
  standard. Git is used today; nothing anywhere assumes it.
- **Organization size.** The enterprise layer defines tiers and ownership, not head
  counts; a three-person company and a thousand-person company instantiate the same
  model at different densities.

## Expected evolution (v2, v3, and beyond)

- **Likely v2 (next major):** capability profiles for recurring agent task classes
  (AGT future extension); named standard workflow library (layer 12); small-team
  governance profile; per-layer sub-registries if INDEX outgrows one file; machine-
  readable slot manifests for templates (TPL future extension).
- **Likely v3 and beyond:** adapter certification (conformance review of adapters as
  products); federation — multiple cooperating enterprises sharing knowledge under
  boundary rules extending SEC-08; formalized composition algebra for capabilities if
  CAP-03..CAP-05 prove insufficient for deeply nested automation.
- **Signals that should trigger unplanned evolution:** any recurring waiver against the
  same requirement (the requirement is wrong); any adapter reimplementing a core concern
  (the core has a gap); accelerating growth of the core itself (the North Star's warning
  sign).

## Future Extension

- One narrative section per wave of structural change, appended with each edition that
  contains one.

## Related Documents

- [North Star](../01-meta/north-star.md)
- [Architecture Specification](architecture-specification.md)
- [Decisions register](../50-governance/decisions/)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
