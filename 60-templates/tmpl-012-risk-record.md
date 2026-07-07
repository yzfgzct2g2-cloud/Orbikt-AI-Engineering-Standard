# Template: Risk Record

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-012 |
| Title | Risk Record Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-023 (Discovery Specification, DSC-10) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Record one risk with its assessment, owner, and response — including the human decision
that acceptance always is (DSC-10, Constitution Article V.2).

## Scope

- The skeleton for individual risks, referenced from risk registers in discovery records
  and project charters.

## Non-Scope

- The register itself (a table in the discovery record, OAES-TMPL-011).
- Defects — realized deviations are QUA-09 records, not risks.

## Responsibilities

- A filled instance is accountable for naming who owns the risk and what was decided
  about it; a risk with no owner or no response is an observation, not a managed risk.

## Inputs

- The risk statement, the scope's declared likelihood/impact scales, and the ownership
  map (ENT-03).

## Outputs

- A citable risk record; for accepted risks, the recorded acceptance.

## Interfaces

- **Inbound:** copied during risk discovery (DSC stage 7) and whenever a new risk
  surfaces later.
- **Outbound:** mirrors DSC-10 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Field completeness and the human acceptance record are deterministically checkable;
  assessment honesty is a content-review check.

## Future Extension

- Quantitative assessment fields may be added if adopters standardize on them; the
  qualitative scales are the durable minimum.

## Related Documents

- [Discovery Specification](../31-discovery/discovery-specification.md)
- [Discovery Record Template](tmpl-011-discovery-record.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial release, Foundation edition 1.1. |

## Skeleton

```markdown
# Risk: {{short-title}}

| Field | Value |
| --- | --- |
| Identifier | {{risk-record-id}} |
| Type | Risk Record |
| Raised by / date | {{role}} / {{yyyy-mm-dd}} |
| Status | {{open-mitigating-accepted-transferred-avoided-closed-realized}} |

## Risk

{{what-could-happen-and-what-it-would-damage}}

## Assessment

- Likelihood: {{value-on-declared-scale}} — basis: {{evidence-or-judgment-stated-as-such}}
- Impact: {{value-on-declared-scale}} — basis: {{evidence-or-judgment-stated-as-such}}

## Ownership

- Risk owner: {{role-per-ownership-map}} (ENT-03)

## Response

- Chosen response: {{avoid-mitigate-transfer-accept}}
- If mitigate/transfer: {{measures-and-their-verification}}
- If accept: accepted by {{named-human}} on {{yyyy-mm-dd}} — reserved human decision
  (Article V.2); revisit condition: {{date-or-trigger}}

## Review

- Revisit at: {{date-or-trigger}}
- History: {{status-changes-with-dates}}
```
