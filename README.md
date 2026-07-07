# Orbikt AI Engineering Standard (OAES)

| Field | Value |
| --- | --- |
| Identifier | OAES-README |
| Title | Repository Overview |
| Type | Registry Document |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

This repository contains the **Orbikt AI Engineering Standard (OAES)**: a vendor-neutral,
model-neutral, language-neutral engineering standard for AI-assisted software engineering.

OAES defines *how engineering work is organized, recorded, verified, and evolved* when
automated agents participate in it. It deliberately defines **no** domain knowledge, no
programming-language guidance, no framework guidance, and no instructions for any specific
AI model or vendor. Those concerns belong to downstream projects that adopt this standard.

The standard is designed to remain valid across changes of AI models, programming languages,
frameworks, vendors, operating systems, and application domains, with a design horizon of at
least ten years.

## Scope

- The complete OAES Foundation, edition 1.0: constitution, specifications, templates,
  governance, and supporting documentation.

## Non-Scope

- Domain knowledge of any kind (medical, legal, financial, or otherwise).
- Technology-specific guidance (languages, frameworks, platforms, models, vendors).
- Executable tooling. Tool *requirements* are specified in [64-tools](64-tools/README.md);
  implementations live in adopter-controlled repositories.

## How to Read This Repository

1. Start with the [Constitution](00-constitution/constitution.md) — the supreme document.
   Everything else derives its authority from it.
2. Read the [Architecture Specification](02-architecture/architecture-specification.md) —
   it explains the layer model and the dependency rules between layers.
3. Use the [Document Index](INDEX.md) — the complete registry of every document, its
   identifier, version, and location.
4. For a guided path by role (adopter, maintainer, contributor), read the
   [Reading Guide](70-documentation/reading-guide.md).

## Layer Map

| Band | Layers | Concern |
| --- | --- | --- |
| 0x — Normative Core | [00-constitution](00-constitution/README.md), [01-meta](01-meta/README.md), [02-architecture](02-architecture/README.md) | Supreme principles; rules for documents; rules for structure |
| 1x — Operating Model | [10-organization](10-organization/README.md), [11-capabilities](11-capabilities/README.md), [12-workflow](12-workflow/README.md) | Who works, what can act, how work flows |
| 2x — Information | [20-knowledge](20-knowledge/README.md), [21-memory](21-memory/README.md), [22-context](22-context/README.md) | Curated truth; recorded state; assembled working sets |
| 3x — Delivery | [30-projects](30-projects/README.md) | How the standard is applied to real projects |
| 4x — Assurance | [40-quality](40-quality/README.md), [41-performance](41-performance/README.md), [42-privacy](42-privacy/README.md), [43-security](43-security/README.md) | Verification of work and protection of people and systems |
| 5x — Stewardship | [50-governance](50-governance/README.md), [51-evolution](51-evolution/README.md) | Decision authority; controlled change of the standard |
| 6x — Enablement | [60-templates](60-templates/README.md), [61-examples](61-examples/README.md), [62-generators](62-generators/README.md), [63-validators](63-validators/README.md), [64-tools](64-tools/README.md) | Reusable implementations of the normative layers |
| 7x — Documentation | [70-documentation](70-documentation/README.md), [71-reference](71-reference/README.md) | Guides, glossary, external references |
| 9x — Terminal | [90-archive](90-archive/README.md) | Retired material; nothing is ever deleted |

## Dependencies

- None. This is the repository entry point.

## Interfaces

- **Inbound:** first document read by any human or agent entering the repository.
- **Outbound:** links to the Constitution, the Architecture Specification, and the Index.

## Future Extension

- New bands and layers are added only through the change process defined in the
  [Evolution Specification](51-evolution/evolution-specification.md).

## Related Documents

- [INDEX.md](INDEX.md) — complete document registry
- [CONTRIBUTING.md](CONTRIBUTING.md) — how to propose changes
- [CHANGELOG.md](CHANGELOG.md) — edition history

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
