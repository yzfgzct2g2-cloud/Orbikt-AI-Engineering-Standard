# Decision: Domain Adapter Isolation

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-008 |
| Title | Domain adapters are external packages with a strictly one-way dependency on the core |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Record how domain, technology, and organizational content binds to a core that must stay
permanently neutral.

## Scope

- The adapter architecture's isolation model (layer 32).

## Non-Scope

- Adapter internals (OAES-SPEC-030 governs them).

## Dependencies

- [OAES Constitution](../../00-constitution/constitution.md)
- [Architecture Specification](../../02-architecture/architecture-specification.md)

## Interfaces

- **Inbound:** cited by layer 32 and the Domain Adapter Specification.
- **Outbound:** enforces Constitution Article IV structurally.

## Problem

Thousands of projects across every domain need domain knowledge, domain question banks,
domain risk catalogs, and often technology-specific guidance. Article IV bans all of it
from this repository — but a ban without a sanctioned home guarantees violation by
convenience: the content will be written somewhere, and "somewhere" defaults to the
nearest repository.

## Options Considered

1. **Domain sublayers inside this repository** (for example, per-domain directories
   under a quarantined band). Convenient and searchable, but Article IV would be
   breached the day the first one merged, and the core's change process would become the
   bottleneck for every domain's evolution.
2. **No adapter concept — leave domain binding entirely to each project.** Maximally
   hands-off, but every project reinvents the binding, nothing is reusable across
   projects, and discovery (DSC-03) has nothing standard to adapt with.
3. **External adapter packages, governed by a rules-only core layer (32): adapters pin a
   core edition, fill enumerated extension points (ADP-02), may be as specific as their
   domain requires, and the core never references any of them.**

## Decision

Option 3. The dependency arrow points one way, forever: adapters know the core; the core
knows only that adapters exist. Technology-specific guidance (languages, frameworks,
platforms) is explicitly adapter territory — that is the escape valve that keeps the
core's neutrality cheap to maintain instead of heroic.

## Consequences

- Easier: core neutrality is enforceable (nothing to review but leakage); domains evolve
  at their own cadence; one project's adapter investment is reusable by every other.
- Harder: adapter quality is outside this repository's direct control — mitigated by
  ADP-03/ADP-05 (core rules apply to adapter artifacts) and the planned v3 certification.
- Accepted risk: adapter fragmentation across the ecosystem; the enterprise adapter
  registry (ADP-07) contains it within each organization, and ADP-08 routes core gaps
  back as improvement signals.

## Future Extension

- Adapter certification and a public adapter index (v3 candidates per the
  [Architecture Decision Journal](../../02-architecture/architecture-decision-journal.md)).

## Related Documents

- [Domain Adapter Specification](../../32-adapters/domain-adapter-specification.md)
- [Discovery Specification](../../31-discovery/discovery-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial record. |
