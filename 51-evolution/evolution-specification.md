# Evolution Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-018 |
| Title | Evolution Specification |
| Layer | 51-evolution |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the only path by which this standard changes. Evolution discipline is what lets
OAES promise adopters a stable foundation while still improving for ten years.

## Scope

- Change classes, the change workflow, deprecation, releases, and migration for this
  repository.

## Non-Scope

- Approval authority ([Governance Specification](../50-governance/governance-specification.md), GOV-02).
- Version increment rules ([Versioning Specification](../01-meta/versioning-specification.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Versioning Specification](../01-meta/versioning-specification.md)
- [Workflow Specification](../12-workflow/workflow-specification.md)
- [Quality Specification](../40-quality/quality-specification.md)
- [Governance Specification](../50-governance/governance-specification.md)

## Interfaces

- **Inbound:** all changes to any artifact in this repository pass through the workflow
  below; [CONTRIBUTING.md](../CONTRIBUTING.md) is its contributor-facing summary.
- **Outbound:** GOV-02 approvals, QUA-01 reviews, VER-01 to VER-12 versioning.

## Requirements

### Change classes

- **EVO-01** Every change MUST be classified before review as **editorial** (PATCH-level,
  no normative meaning changed), **minor** (backward-compatible normative addition or
  strengthening), or **major** (anything that can invalidate existing conformance);
  classification follows VER-02 to VER-04 and is itself reviewable.

### The change workflow

- **EVO-02** The standard changes only through this workflow (structured per WFL-01):

  | Stage | Exit criterion |
  | --- | --- |
  | 1. Proposal | A change request exists per the [Change Request Template](../60-templates/tmpl-009-change-request.md): problem, proposed change, class, affected documents, migration statement. |
  | 2. Structural review | All deterministic checks pass (QUA-03). |
  | 3. Content review | Review record with pass verdict from the affected layers' Stewards; cross-layer impact analysis for every document listing an affected document as a dependency. |
  | 4. Approval | The GOV-02 authority for the change class has decided; decision recorded if DEC-01 applies. |
  | 5. Integration | Versions incremented, revision histories updated, INDEX.md and cross-references updated, all in one merge. |

- **EVO-03** A change MUST update, in the same change: every affected document's version
  and revision history, the registry entries in [INDEX.md](../INDEX.md), and every
  cross-reference it breaks. A merged change leaving the repository internally
  inconsistent is a blocking defect.
- **EVO-04** Major changes MUST include a *migration statement*: what an adopter of the
  previous edition must do, stated concretely enough to execute without asking the
  authors.

### Deprecation

- **EVO-05** Withdrawal of any Active artifact or requirement MUST pass through
  Deprecated status (VER-09) for at least one full edition before archival, except where
  a security or privacy defect forces immediate withdrawal — which then requires a
  decision record.
- **EVO-06** Deprecation MUST name the successor (or state that there is none) and the
  planned withdrawal edition (VER-11).

### Releases

- **EVO-07** Editions are released per VER-06 to VER-08 and recorded in
  [CHANGELOG.md](../CHANGELOG.md) with: edition number, date, every document version
  pinned, all changes since the previous edition by class, and all migration statements.
- **EVO-08** Between editions, the repository's default state MAY contain approved
  changes not yet in any edition; adopters conform to editions, not to the moving state
  (PRJ-02).

### Continuity safeguards

- **EVO-09** No change may bypass this workflow, including changes by Maintainers and
  changes prepared by agents; an agent MAY draft any stage's artifacts but no stage's
  exit is an agent's decision (Constitution Article V).
- **EVO-10** The archive is part of every withdrawal: content leaves the Active tree only
  by moving to [90-archive](../90-archive/README.md) per its layer rules, never by
  deletion (Constitution Article X).

## Validation

- Stage evidence (change request, review records, decision records, changelog entries) is
  structurally checkable; EVO-03 same-change consistency is enforced by running the
  repository validators at stage 2 and again before stage 5 completes.

## Future Extension

- A scheduled-release cadence and a lightweight fast-track for editorial changes may be
  added by minor change once release history justifies them.

## Related Documents

- [Change Request Template](../60-templates/tmpl-009-change-request.md)
- [CONTRIBUTING.md](../CONTRIBUTING.md)
- [CHANGELOG.md](../CHANGELOG.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
