# Knowledge Lifecycle Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-026 |
| Title | Knowledge Lifecycle Specification |
| Layer | 20-knowledge |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the full lifecycle of knowledge artifacts — from proposal to retirement — so that
knowledge bases stay trustworthy over decades instead of silently rotting: every artifact
has a state, every state has an exit, and staleness is measured, not suspected.

## Scope

- Knowledge artifact states, transitions, review sweeps, retirement, and knowledge debt,
  extending the [Knowledge Specification](knowledge-specification.md).

## Non-Scope

- Artifact structure and single-sourcing rules (OAES-SPEC-008 — unchanged).
- Raw record lifecycle ([Memory Lifecycle Specification](../21-memory/memory-lifecycle-specification.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Knowledge Specification](knowledge-specification.md)

## Interfaces

- **Inbound:** the context pipeline (OAES-SPEC-025) reads artifact states to decide
  retrievability; the knowledge steward (ENT-03) executes the sweeps defined here.
- **Outbound:** artifact rules (KNO-01 to KNO-11), versioning (VER-09 status vocabulary
  reused).

## Requirements

### States

- **KLC-01** Every knowledge artifact is in exactly one lifecycle state:

  | State | Meaning | Citable as evidence? |
  | --- | --- | --- |
  | Proposed | Content awaiting verification (KNO-06) | No |
  | Active | Verified, within validity (KNO-05) | Yes |
  | Stale | Validity date passed or invalidating condition met | No, until re-verified |
  | Deprecated | Superseded or scheduled for retirement; successor named | Yes, with warning |
  | Retired | Withdrawn; archived with provenance intact | No |

- **KLC-02** Permitted transitions: Proposed → Active (verification), Active → Stale
  (automatic on validity expiry — no human action required or permitted to prevent it),
  Stale → Active (re-verification), Active/Stale → Deprecated (supersession decision),
  Deprecated → Retired (retirement), Proposed → Retired (rejection, retained). No other
  transitions exist.

### Sweeps

- **KLC-03** The knowledge steward MUST run a *review sweep* on a declared cadence (at
  most yearly): mark artifacts past validity as Stale, detect duplicates for merging
  (KNO-02), and re-queue Stale artifacts for re-verification or deprecation.
- **KLC-04** Re-verification follows the same evidence bar as first verification
  (KNO-04, KNO-06); "still looks right" is not re-verification.

### Retirement

- **KLC-05** Retirement MUST record the reason (superseded, obsolete, or rejected), the
  successor (or "none"), and MUST trigger the citation review of KNO-11 over everything
  that depended on the artifact. Retired artifacts move to the archive pattern of the
  adopter's knowledge base; their identifiers stay reserved (NAM-03 applied locally).

### Knowledge debt

- **KLC-06** *Knowledge debt* — the count and age of Stale artifacts and overdue sweeps —
  MUST be measured per MET rules; a declared debt threshold breach raises an
  improvement-backlog item (IMP-01) automatically.

## Extension Points

- Additional states require a minor change to KLC-01 (expected rarely; the five states
  cover the trust question, which is the only question the lifecycle exists to answer).
- Sweep cadences are declared per knowledge base, not here.

## Metrics

- Knowledge debt (KLC-06); re-verification latency; retirement citation-review
  completion rate.

## Failure Modes and Recovery

- *Zombie knowledge* (stale content still being cited): prevented by KLC-01's citability
  column enforced at context assembly (CTP rules); recovery on discovery is a defect
  record plus re-verification or retirement.
- *Sweep decay* (sweeps quietly stop): the overdue sweep is itself knowledge debt
  (KLC-06) and surfaces through metrics; recovery is ENT-04 ownership enforcement.
- *Merge damage* (deduplication loses a nuance): mitigated by KNO-10 — merges are
  versioned revisions with the merged sources retained as provenance.

## Validation

- State values, validity dates, and successor fields are deterministically checkable;
  sweep execution and re-verification quality are conformance-review checks against
  sweep records.

## Future Extension

- Confidence grading (the Knowledge Specification's declared future extension) would add
  a dimension to KLC-01's citability rules; the state machine itself is designed to
  survive that addition.

## Related Documents

- [Knowledge Specification](knowledge-specification.md)
- [Memory Lifecycle Specification](../21-memory/memory-lifecycle-specification.md)
- [Context Pipeline Specification](../22-context/context-pipeline-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
