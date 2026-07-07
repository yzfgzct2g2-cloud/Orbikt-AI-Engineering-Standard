# Decision Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-017 |
| Title | Decision Specification |
| Layer | 50-governance |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the decision record: the durable, uniform account of every consequential choice, so
that future engineers inherit not only what was decided but why, and never unknowingly
re-fight settled questions.

## Scope

- When a decision record is required, its content, its lifecycle, and its register.

## Non-Scope

- Who may decide ([Governance Specification](governance-specification.md)).
- Decisions internal to adopting projects (they apply this specification in their own
  repositories per PRJ-03).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Documentation Specification](../01-meta/documentation-specification.md)
- [Governance Specification](governance-specification.md)

## Interfaces

- **Inbound:** governance bodies produce records under these rules; knowledge artifacts
  cite decisions as provenance (KNO-04).
- **Outbound:** naming and structure rules from the meta layer.

## Requirements

### When required

- **DEC-01** A decision record MUST be written whenever a choice (a) selects between
  architecturally significant alternatives, (b) grants a waiver, (c) resolves an
  escalation (ORG-06), or (d) supersedes a previous decision. Routine choices fully
  determined by existing requirements need no record.

### Content

- **DEC-02** Every decision record MUST contain: identifier (`OAES-DEC-NNN` per NAM-05),
  title, date, decider(s), status, the problem, the options considered with their
  substantive trade-offs, the decision, the reason, and the consequences (what becomes
  easier, what becomes harder, what must change). The
  [Decision Record Template](../60-templates/tmpl-003-decision-record.md) implements this
  requirement.
- **DEC-03** A record listing only one option, or options without trade-offs, does not
  satisfy DEC-02: the record must show the decision could have gone otherwise.

### Lifecycle

- **DEC-04** A decision record's status is exactly one of **Proposed**, **Accepted**,
  **Superseded**, or **Rejected**. Only Accepted decisions bind.
- **DEC-05** Decision records are immutable once Accepted or Rejected, except for the
  status change to Superseded and the addition of a link to the superseding record.
  Changing a decision means writing a new record (GOV-06).
- **DEC-06** All decision records about this standard live in
  [50-governance/decisions/](decisions/) and are listed in [INDEX.md](../INDEX.md);
  rejected proposals are kept — a documented rejection is as valuable as an acceptance.

## Validation

- DEC-02 field presence and DEC-04 status values are deterministically checkable; DEC-03
  substance is a content-review check.

## Future Extension

- A cross-reference convention linking decisions to the requirements they motivated may be
  formalized by minor change once the decision register grows.

## Related Documents

- [Decision Record Template](../60-templates/tmpl-003-decision-record.md)
- [Governance Specification](governance-specification.md)
- [Decisions register](decisions/)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
