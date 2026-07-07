# Example — Project Charter: OAES Foundation Maintenance

| Field | Value |
| --- | --- |
| Identifier | OAES-EXA-003 |
| Title | Example Project Charter: OAES Foundation Maintenance |
| Layer | 61-examples |
| Type | Example |
| Instantiates | OAES-TMPL-008 (Project Charter Template) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Show a correctly filled project charter. The subject is the standing project that
maintains this repository — the one project that is domain-neutral by construction.

## Scope

- Demonstration of OAES-TMPL-008 usage.

## Non-Scope

- Normative force; the real governance of this repository lives in layers 50 and 51.

## Dependencies

- None normative (ARCH-06).

## Interfaces

- **Inbound:** read by authors filling OAES-TMPL-008.
- **Outbound:** instantiates OAES-TMPL-008.

## Filled Instance

# Project Charter: OAES Foundation Maintenance

| Field | Value |
| --- | --- |
| Identifier | OAES-PROJ-EX1 |
| Title | OAES Foundation Maintenance Charter |
| Layer | repository root governance |
| Type | Project Charter |
| Version | 1.0.0 |
| Status | Active |
| Author | Standards Committee |
| Approved | 2026-07-07 |

### Purpose

Maintain the Orbikt AI Engineering Standard: process change requests, keep registries
consistent, release editions, and steward the archive.

### Scope

- All artifacts in this repository.

### Non-Scope

- Any adopting project's content; any domain knowledge.

### Standard Adoption

- OAES edition pinned: Foundation 1.0 (PRJ-02) — the standard maintains itself under its
  own current edition.
- Intended conformance level: Level 3 — Audited (QUA-02).
- Conformance review interval: once per edition, at minimum annually.

### Roles

| Role | Holder |
| --- | --- |
| Maintainer | named in the governance role register (GOV-03) |
| Steward(s) | one per layer, named in the role register |
| Committee Members | named in the role register |

### Data Classes

- Classes handled: public only (PRV-02). Personal and confidential data are prohibited in
  this repository; their appearance is a blocking defect.
- Storage boundary: the public repository.

### Instantiated Artifacts

- Role register: 50-governance (GOV-03)
- Agent definitions: maintainers' tooling register (AGT-03)
- Workflow definitions: EVO-02, demonstrated in OAES-EXA-002 (WFL-01)
- Knowledge index: INDEX.md (KNO-08)
- Memory retention rules: repository history and review records — kept indefinitely
  (MEM-06)

### Waivers

- None (PRJ-04).

## Future Extension

- Updated whenever OAES-TMPL-008 changes (TPL-07).

## Related Documents

- [Project Charter Template](../60-templates/tmpl-008-project-charter.md)
- [Project Specification](../30-projects/project-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
