# Adoption Guide

| Field | Value |
| --- | --- |
| Identifier | OAES-GUIDE-002 |
| Title | Adoption Guide |
| Layer | 70-documentation |
| Type | Guide |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Walk a project from "we want to adopt OAES" to a valid conformance declaration, in the
order that avoids rework.

## Scope

- Practical sequencing of the obligations in the
  [Project Specification](../30-projects/project-specification.md). Informative only —
  the specification prevails on any divergence.

## Non-Scope

- Advice on domains, technologies, vendors, or methodologies.

## Dependencies

- None normative (ARCH-06).

## Interfaces

- **Inbound:** read by adopting projects.
- **Outbound:** summarizes PRJ-01 to PRJ-10 and their upstream requirements.

## Adoption steps

1. **Pin an edition.** Choose the OAES edition from [CHANGELOG.md](../CHANGELOG.md) and
   record it; you will conform to that frozen document set, not to the repository's moving
   state (PRJ-02, EVO-08).
2. **Write the charter first.** Fill the
   [Project Charter Template](../60-templates/tmpl-008-project-charter.md) — purpose,
   scope, roles, data classes, intended conformance level. The
   [example charter](../61-examples/example-project-charter.md) shows a completed one
   (PRJ-01).
3. **Name humans.** Fill the role register: at least one Maintainer, Stewards for what
   you will govern (ORG-02). Every later step assumes accountability exists.
4. **Instantiate the information layers.** Create your knowledge index (KNO-08), decide
   memory retention rules (MEM-06), and set context budgets for your first task classes
   (CTX-07). Start small; these grow with use.
5. **Declare your agents.** For every automated helper that will act on artifacts, write
   an agent definition from the
   [template](../60-templates/tmpl-004-agent-definition.md) — classification, authority
   boundary, evaluation criteria (AGT-01 to AGT-14). No definition, no participation
   (AGT-03).
6. **Define your first workflows.** At minimum, your change workflow and your review
   gates, using the [workflow template](../60-templates/tmpl-005-workflow-definition.md);
   the [example](../61-examples/example-workflow-definition.md) shows the shape (WFL-01).
7. **Wire in validation.** Adopt the layer-63 rule sets for your OAES-structured
   artifacts so structural review is free from day one (QUA-03).
8. **Declare conformance honestly.** Start at Level 1 (artifacts exist and validate),
   move to Level 2 when gates produce evidence, claim Level 3 only after an independent
   conformance review (QUA-02, PRJ-09). An honest Level 1 outranks a hollow Level 3.

## Common failure modes

- **Charter drift:** practice changes but the charter does not — a conformance defect
  either way (PRJ-07). Amend the charter as deliberately as code.
- **Agent scope creep:** an agent gains abilities its definition never granted (SEC-02).
  Re-issue the definition first, capability second.
- **Knowledge by accretion:** pasting agent output into the knowledge base unverified —
  prohibited by KNO-06; route it through memory and promotion (MEM-05).
- **Waiver amnesia:** deviations without recorded waivers invalidate the conformance
  declaration (PRJ-10); record them per GOV-07, with expiry.

## Future Extension

- Archetype-specific walk-throughs will follow if OAES-SPEC-011 adds project archetypes.

## Related Documents

- [Project Specification](../30-projects/project-specification.md)
- [Reading Guide](reading-guide.md)
- [Quality Specification](../40-quality/quality-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
