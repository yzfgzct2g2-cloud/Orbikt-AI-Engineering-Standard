# OAES Edition History

| Field | Value |
| --- | --- |
| Identifier | OAES-CHANGELOG |
| Title | Edition History |
| Type | Registry Document |
| Version | 2.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record every released edition of the standard: what it pins, what changed, and how
adopters migrate (VER-06 to VER-08, EVO-07).

## Scope

- Editions of this standard.

## Non-Scope

- Per-document histories (each document's Revision History) and unreleased changes
  (EVO-08).

## Dependencies

- None (registry document maintained under EVO-07).

## Interfaces

- **Inbound:** project charters pin editions listed here (PRJ-02).
- **Outbound:** the pinned document versions in [INDEX.md](INDEX.md).

## Editions

### OAES 2.0.0 — 2026-07-18

The v2 redefinition: OAES becomes a minimal engineering reasoning model with a frozen
five-concept Kernel (Objective, Knowledge, State, Action, Actor), four canonical
Knowledge States (Unknown, Known, Implemented, Verified), a deterministic
provider-independent reference runtime, and a repository-persisted cross-session
continuation contract. The complete Foundation 1.0–1.2 lineage is preserved in place
as historical evidence (OAES-DEC-017); git tag `v2.0.0`.

- **Authoritative documents:** [spec/](spec/README.md) (Kernel, Canonical Data Model,
  State Model, Runtime, Vocabulary), [schemas/](schemas/), [VERSION.md](VERSION.md),
  the continuation contract ([BOOTSTRAP.md](BOOTSTRAP.md), [CLAUDE.md](CLAUDE.md),
  [AGENTS.md](AGENTS.md), [CURRENT_STATE.md](CURRENT_STATE.md),
  [HANDOFF.md](HANDOFF.md), `runtime-state/project.json`).
- **Added:** the reference runtime ([reference-runtime/](reference-runtime/README.md))
  with kernel/state invariant guards, deterministic selection, and an
  interruption/resumption proof; the synthetic greeting demo
  ([examples/greeting-demo/](examples/greeting-demo/README.md)); decision records
  OAES-DEC-011…017; the historical lineage index ([history/README.md](history/README.md)).
- **Amended:** README (v2 entry point, 2.0.0), INDEX (historical-lineage notice,
  1.2.1), this changelog (2.0.0).
- **Migration statements:** none required for the v1 lineage — it is preserved
  unmodified and remains valid as historical records. Adopters of OAES going forward
  target the v2 specification.

### Foundation 1.2 — 2026-07-08

The definitive Foundation + Enterprise edition: the final frontier-model architectural
pass. No restructuring — an adversarial (red-team) review and a ten-year future review
confirmed the architecture and found self-conformance defects, all fixed in this edition
(OAES-DEC-010 records every finding and disposition).

- **Pinned document versions:** as listed per document in [INDEX.md](INDEX.md) at this
  date.
- **Added:** Record Conformance Rules (OAES-VAL-003) — deterministic checks for
  operational records; the standard's own Role Register (OAES-ROLE-REGISTER, in GOV-09
  bootstrap mode) and Improvement Backlog (OAES-IMPROVEMENT-BACKLOG, with all open items
  from editions 1.0–1.2); decision record OAES-DEC-010.
- **Amended (minor):** OAES-SPEC-001 (NAM-13 reserved registry identifiers);
  OAES-SPEC-003 (extended section set for process specifications); OAES-SPEC-016
  (GOV-09 bootstrap mode); OAES-SPEC-023 and OAES-TMPL-011 (every discovery question
  states its uncertainty, dependent decision, and unanswered risk); OAES-VAL-001
  (VDOC-04 recognizes NAM-13); North Star (added "What will OAES always protect?");
  Glossary (edition 1.1/1.2 terms); Architecture Decision Journal (edition 1.2
  narrative); layer READMEs 50, 51, 63.
- **Migration statements:** none required. Adopters gain the VREC rule set and the
  strengthened question form; existing discovery records made under 1.1 remain valid as
  records (IMP-08).

### Foundation 1.1 — 2026-07-08

The enterprise operating edition: extends Foundation 1.0 into a complete engineering
operating standard. Entirely additive — every change is minor or a new document; no
Foundation 1.0 requirement was removed or weakened.

- **Pinned document versions:** as listed per document in [INDEX.md](INDEX.md) at this
  date (new documents at 1.0.0; amended documents at 1.1.0; all others unchanged at
  1.0.0).
- **Added:** North Star (OAES-VISION-001) with new Vision class (DOCU-01) and VISION
  type code (NAM-05); Architecture Decision Journal (OAES-REF-003); layers
  13-enterprise, 31-discovery, 32-adapters (ARCH-10); specifications OAES-SPEC-021
  (Enterprise), 022 (Communication), 023 (Discovery), 024 (Capability Model), 025
  (Context Pipeline), 026 (Knowledge Lifecycle), 027 (Memory Lifecycle), 028 (Metrics),
  029 (Assurance Loops), 030 (Domain Adapter), 031 (Project Lifecycle), 032
  (Improvement); templates OAES-TMPL-011 to 014; decision records OAES-DEC-006 to 009.
- **Amended (minor):** OAES-SPEC-001 (VISION type code), OAES-SPEC-003 (Vision class),
  OAES-SPEC-004 (three new layers in the band table); layer READMEs 01, 02, 11, 20, 21,
  22, 30, 40, 41, 51, 60 (contents); guides 001 and 002 and CONTRIBUTING (discovery,
  enterprise, and RFC paths); README and INDEX registries.
- **Migration statements:** none required. Adopters of Foundation 1.0 remain conformant;
  moving to 1.1 adds obligations only where the new specifications apply (enterprises,
  new projects entering Discovery, metric catalogs).

### Foundation 1.0 — 2026-07-07

The initial release: the complete foundation with no domain content.

- **Pinned document versions:** every artifact registered in
  [INDEX.md](INDEX.md) at version 1.0.0.
- **Contents:** Constitution; 24 layer definitions in 9 bands; 20 specifications
  (OAES-SPEC-001 … 020); 10 templates (OAES-TMPL-001 … 010); 5 founding decision records
  (OAES-DEC-001 … 005); 2 validation rule sets (OAES-VAL-001, -002); 3 examples; 3 guides;
  glossary and normative references; empty archive.
- **Changes since previous edition:** none — first edition.
- **Migration statements:** none required.

## Future Extension

- One section per edition, newest first, appended by the release step of the change
  workflow.

## Related Documents

- [Versioning Specification](01-meta/versioning-specification.md)
- [Evolution Specification](51-evolution/evolution-specification.md)
- [INDEX.md](INDEX.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-08 | OAES Standards Committee | Recorded edition Foundation 1.1. |
| 1.2.0 | 2026-07-08 | OAES Standards Committee | Recorded edition Foundation 1.2. |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Recorded edition OAES 2.0.0. |
