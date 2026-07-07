# Improvement Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-032 |
| Title | Improvement Specification |
| Layer | 51-evolution |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Close the loop that keeps OAES alive: a permanent mechanism through which findings,
suggestions, metrics, and retrospectives become governed change — plus the review
cadences that force every standard to periodically re-earn its place. The change
workflow (EVO-02) moves individual changes; this specification ensures changes keep
arriving and nothing rots unnoticed.

## Scope

- The improvement backlog, the RFC process, the architecture review workflow, the
  specification review cycle, and the compatibility policy, extending the
  [Evolution Specification](evolution-specification.md).

## Non-Scope

- The change workflow itself (EVO-02 — unchanged; improvements enter it as change
  requests).
- Improvement of adopter artifacts (adopters mirror this mechanism per PRJ-03).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Communication Specification](../13-enterprise/communication-specification.md)
- [Quality Specification](../40-quality/quality-specification.md)
- [Governance Specification](../50-governance/governance-specification.md)
- [Evolution Specification](evolution-specification.md)

## Interfaces

- **Inbound:** suggestions (COM-07), defects (QUA-09), loop outputs (ASR-06),
  retrospectives (PLC-05), metric threshold breaches (MET-01), lifecycle debt signals
  (KLC-06, MLC-07), and adapter core-gap reports (ADP-08) all land in the backlog.
- **Outbound:** change requests into EVO-02; decisions per GOV-02; review records per
  QUA-04.

## Requirements

### The improvement backlog

- **IMP-01** Every governance scope (this standard; each adopting enterprise and
  project) MUST maintain a single *improvement backlog*: the register where every
  improvement signal lands. Its mandatory sources are the inbound interfaces above; an
  improvement idea living anywhere else does not exist (COM-01 applied to improvement).
- **IMP-02** The improvement owner (ENT-03) MUST triage the backlog on a declared
  cadence (at most quarterly). Every item receives a recorded outcome: **accepted**
  (becomes a change request in EVO-02), **rejected** (with reason, retained), or
  **parked** (with revisit date). Items past their revisit date reappear at the next
  triage automatically. Silent disappearance of an item is a process defect.

### The RFC process

- **IMP-03** A change request whose class is major, or which exercises a structural
  extension point (ARCH-10 to ARCH-12, new bands, new document classes, new type codes),
  MUST pass an *RFC phase* inserted between stages 1 and 3 of EVO-02: the proposal is
  published to all Stewards and affected adopter representatives with a declared comment
  window; every comment receives a recorded disposition (accepted, rejected with reason,
  or deferred) before content review begins.
- **IMP-04** Structural RFCs additionally receive an *architecture review*: a recorded
  content review verifying, explicitly and in this order, consistency with the
  [Constitution](../00-constitution/constitution.md), the
  [North Star](../01-meta/north-star.md) evaluation questions, the dependency rules
  (ARCH-04 to ARCH-08), and the single-responsibility rule (ARCH-02). An RFC failing
  any of these is reworked or rejected — never approved with the conflict open.

### The specification review cycle

- **IMP-05** Every Active document in bands 0x–5x MUST be reviewed at least once every
  24 months (or sooner where its header declares a shorter cadence). The review is
  recorded (QUA-04) and concludes in exactly one outcome: **reaffirm** (fit for purpose
  as is), **revise** (a change request is opened), or **deprecate** (EVO-05 begins). An
  overdue review is a conformance finding against the standard itself, visible in its
  own audits.
- **IMP-06** Edition preparation (EVO-07) MUST include a staleness sweep: listing every
  document's last review date and flagging overdue ones; an edition MAY ship with
  flagged documents only by recorded Standards Committee decision.

### Compatibility and breaking change

- **IMP-07** Backward compatibility is the default obligation: between editions,
  conforming adopter artifacts MUST remain conforming unless the change is major. A
  breaking (major) change additionally requires, beyond EVO-04's migration statement and
  EVO-05's deprecation period: an RFC (IMP-03) and a recorded *adopter impact
  assessment* naming which required artifacts change and the expected migration effort
  class (trivial, bounded, structural).
- **IMP-08** Compatibility runs forward, not backward: new editions MUST NOT require
  adopters to rewrite history — records, decisions, and archived artifacts made under
  prior editions remain valid as records forever (Constitution Article VI).

## Extension Points

- New backlog sources are added by minor change to IMP-01's inbound list.
- Comment-window lengths and triage cadences are declared per scope, not here.

## Metrics

- Improvement throughput and backlog age (MET-03); review-cycle currency (documents in
  date / all Active documents); RFC comment disposition completeness.

## Failure Modes and Recovery

- *Backlog as graveyard* (items accumulate, nothing ships): visible as backlog age;
  recovery is triage-cadence enforcement through ownership (ENT-04) and honest
  rejection — a full graveyard beats a fake roadmap.
- *RFC theater* (comment windows nobody uses): visible as zero-comment RFCs; recovery
  is checking reach (were the right Stewards notified?) before concluding consent.
- *Review-cycle rubber-stamping* (everything reaffirmed forever): countered by IMP-06
  edition sweeps making reaffirmations visible in aggregate; a document reaffirmed
  three times while its layer accumulates waivers is a contradiction reviewers are
  expected to catch (GOV-06 new-information rule).

## Validation

- Backlog outcomes (IMP-02), RFC records and dispositions (IMP-03), architecture review
  records (IMP-04), and review dates (IMP-05, IMP-06) are deterministically checkable;
  review substance is conformance-review judgment.

## Future Extension

- A public RFC index and adopter voting mechanics, if the adopter community grows beyond
  direct representation.

## Related Documents

- [Evolution Specification](evolution-specification.md)
- [North Star](../01-meta/north-star.md)
- [OAES-DEC-009 — Specification review cadence](../50-governance/decisions/dec-009-specification-review-cadence.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
