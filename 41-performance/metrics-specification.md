# Metrics Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-028 |
| Title | Metrics Specification |
| Layer | 41-performance |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Define the metrics framework: how engineering measures are defined, bound to goals as
KPIs, collected as evidence, and protected against the one failure mode that destroys
every metrics program — optimizing the number instead of the work.

## Scope

- Metric definitions, KPI binding, the mandatory KPI classes, measurement governance,
  and anti-gaming rules, extending the
  [Performance Specification](performance-specification.md).

## Non-Scope

- Concrete targets and formulas (adopter-defined through the metric definition record).
- Product performance measurement mechanics (PER-01 to PER-08 — unchanged; this
  framework governs the *catalog* of measures).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Performance Specification](performance-specification.md)
- [Quality Specification](../40-quality/quality-specification.md)

## Interfaces

- **Inbound:** the performance owner (ENT-03) maintains the KPI catalog; lifecycle debt
  measures (KLC-06, MLC-07), context efficiency (CTP-07), and loop metrics (ASR) report
  through this framework.
- **Outbound:** measurement discipline (PER-04 to PER-06), evidence storage (MEM-02),
  improvement items on threshold breaches (IMP-01).

## Requirements

### Definitions and binding

- **MET-01** Every metric in use MUST have a *metric definition record* stating: name,
  purpose (the question it answers), measurement procedure in PER-01 form, unit, source
  records, collection cadence, owner, threshold semantics (what breach means and what it
  triggers), and known gaming modes. The
  [Metric Definition Template](../60-templates/tmpl-013-metric-definition.md) implements
  this requirement. A number without a definition record is not a metric.
- **MET-02** A *KPI* is a metric bound to a declared goal with an accountable owner
  (ENT-03 concern owners for process KPIs; goal owners per DSC-04 for project KPIs).
  Every scope MUST maintain its KPI catalog in its register.

### Mandatory KPI classes

- **MET-03** Every enterprise-tier KPI catalog MUST cover these classes, with formulas
  chosen by the adopter through MET-01 records:

  | Class | Question it answers | Fed by |
  | --- | --- | --- |
  | Delivery flow | Is work moving through phases? | PLC records |
  | Quality | Are defects found, and found early? | QUA-09 records, ASR catch rates |
  | Rework | How often do gates fail and return? | WFL-10 records |
  | Review latency | How long does verification wait? | QUA-04 records |
  | Conformance currency | Are declarations and audits in date? | PRJ-09, ENT-09 |
  | Knowledge freshness | Is the knowledge base trustworthy? | KLC-06 knowledge debt |
  | Memory health | Are sweeps running, is debt bounded? | MLC-07 memory debt |
  | Context efficiency | Are working sets minimal and sufficient? | CTP-07 observations |
  | Agent reliability | Do agents stay inside boundaries and pass evaluations? | AGT-13, CAP metrics |
  | Improvement throughput | Is the standard actually improving? | IMP backlog records |

  Classes are added by minor change; removing a class is a major change.

### Governance and anti-gaming

- **MET-04** No consequential decision about an individual person may rest on a metric
  alone, and no single metric may be a target without a paired counter-metric watching
  what the target would distort (speed pairs with defect escape; coverage pairs with
  yield). A KPI observed to distort behavior MUST be reviewed and revised or retired —
  the metric serves the work, never the reverse.
- **MET-05** Measurements are evidence: produced by the PER-04 repeatable procedure,
  stored per PER-05, never adjusted after the fact. Derived presentations (dashboards,
  summaries) are informative; the records are authoritative (Constitution Article X
  pattern).
- **MET-06** The KPI catalog itself is reviewed on the specification review cadence
  (IMP-05): dead metrics retired, gaming modes updated, thresholds re-justified against
  current baselines (PER-07).

## Extension Points

- New KPI classes via the MET-03 table.
- Adopter- and adapter-supplied KPI defaults plug in as MET-01 records (ADP-02).

## Metrics

- This framework measures itself through the Improvement throughput class and catalog
  review currency (MET-06) — a stale catalog is the framework's own debt signal.

## Failure Modes and Recovery

- *Goodhart collapse* (targets replace purposes): countered by MET-04 counter-metric
  pairing; recovery is retiring the distorting KPI and recording the episode as a
  known gaming mode.
- *Vanity metrics* (numbers nobody acts on): visible at MET-06 review as thresholds that
  never triggered anything; recovery is retirement — an unread metric costs collection
  effort and trust.
- *Collection drift* (procedure changes silently): prohibited by MET-05/PER-04;
  detected when baselines jump without cause; recovery is re-baselining with a recorded
  procedure version.

## Validation

- Definition-record completeness (MET-01), catalog coverage (MET-03), and evidence
  storage (MET-05) are deterministically checkable; MET-04 distortion review is a
  conformance-review judgment.

## Future Extension

- An informative catalog of proven formulas per KPI class (the Performance
  Specification's declared future extension) once adopter evidence accumulates.

## Related Documents

- [Metric Definition Template](../60-templates/tmpl-013-metric-definition.md)
- [Performance Specification](performance-specification.md)
- [Improvement Specification](../51-evolution/improvement-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
