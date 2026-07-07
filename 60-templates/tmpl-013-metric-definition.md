# Template: Metric Definition

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-013 |
| Title | Metric Definition Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-028 (Metrics Specification, MET-01) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Define one metric completely — question, procedure, thresholds, and known gaming modes —
so that a number can be trusted, repeated, and retired deliberately (MET-01).

## Scope

- The skeleton for every metric and KPI in a scope's catalog (MET-02).

## Non-Scope

- The measurements themselves (evidence records per PER-05/MET-05).

## Responsibilities

- A filled instance is accountable for making the metric reproducible by a stranger and
  for naming, in advance, how the metric can lie.

## Inputs

- The question the metric answers; the source records; the declared scales/units; the
  KPI class it serves (MET-03) if any.

## Outputs

- A catalog entry against which measurements are collected and thresholds act.

## Interfaces

- **Inbound:** copied by the performance owner when adding to the catalog.
- **Outbound:** mirrors MET-01 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Field completeness (MET-01) is deterministically checkable; procedure repeatability is
  verified per PER-04.

## Future Extension

- Tracks OAES-SPEC-028; counter-metric pairing (MET-04) may become a required field if
  practice shows it is skipped.

## Related Documents

- [Metrics Specification](../41-performance/metrics-specification.md)
- [Performance Specification](../41-performance/performance-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial release, Foundation edition 1.1. |

## Skeleton

```markdown
# Metric: {{metric-name}}

| Field | Value |
| --- | --- |
| Identifier | {{metric-id}} |
| Type | Metric Definition |
| KPI class | {{MET-03-class-or-none}} |
| Owner | {{accountable-role}} |
| Status | {{active-retired}} |
| Version | {{version}} |
| Approved | {{yyyy-mm-dd}} |

## Question

{{the-single-question-this-metric-answers-and-for-whom}}

## Measurement

- Quantity and unit: {{what-is-counted-or-measured}} (PER-01)
- Procedure: {{repeatable-steps-a-stranger-could-run}} (PER-04)
- Conditions: {{when-and-over-what-population}}
- Source records: {{record-types-and-locations}}
- Cadence: {{collection-interval}}

## Thresholds

- Baseline: {{accepted-baseline-and-date}} (PER-07)
- Threshold semantics: {{what-breach-means}} → triggers {{improvement-item-escalation-or-review}}

## Bound Goal (if KPI)

- Goal: {{goal-statement-and-owner}} (MET-02)
- Counter-metric: {{paired-metric-watching-for-distortion}} (MET-04)

## Known Gaming Modes

- {{how-this-number-can-be-made-to-look-good-while-the-work-gets-worse}}

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{version}} | {{yyyy-mm-dd}} | {{author}} | {{change-summary}} |
```
