# Architecture Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-004 |
| Title | Architecture Specification |
| Layer | 02-architecture |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the layered architecture of OAES: which layers exist, what each is responsible for,
how they may depend on one another, and how the structure evolves — so the standard grows
for a decade without accumulating cycles or ambiguity about where a concern belongs.

## Scope

- Bands, layers, layer numbering, inter-layer dependency rules, and the structural
  extension procedure.

## Non-Scope

- Rules for individual documents ([01-meta](../01-meta/README.md)).
- Architecture of software systems built by adopters.

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Naming Specification](../01-meta/naming-specification.md)

## Interfaces

- **Inbound:** all layers receive their number, band, and dependency budget from this
  document; [Repository Structure Rules](../63-validators/repository-structure-rules.md)
  mechanically enforce it.
- **Outbound:** meta-layer document rules.

## The Layer Model

### Bands and layers

| Band | Nr | Layer | Responsibility (one sentence) |
| --- | --- | --- | --- |
| 0x Normative Core | 00 | constitution | Supreme principles and precedence. |
| | 01 | meta | Rules for documents: naming, versioning, structure. |
| | 02 | architecture | Rules for structure: layers, bands, dependencies. |
| 1x Operating Model | 10 | organization | Roles, responsibilities, and accountability of participants. |
| | 11 | capabilities | Requirements on agents — any bounded executor, human-operated or automated. |
| | 12 | workflow | How work moves through stages, gates, and checkpoints. |
| 2x Information | 20 | knowledge | Curated, authoritative truth (the SSOT store). |
| | 21 | memory | Recorded events and state; raw material that may become knowledge. |
| | 22 | context | Minimal working sets assembled for a specific task. |
| 3x Delivery | 30 | projects | How adopting projects apply and declare conformance to the standard. |
| 4x Assurance | 40 | quality | Verification, review, evidence, and defect handling. |
| | 41 | performance | How performance requirements are specified and measured. |
| | 42 | privacy | Data classification, minimization, and personal-data handling. |
| | 43 | security | Protection of artifacts, secrets, and the engineering process. |
| 5x Stewardship | 50 | governance | Decision authority, bodies, and decision records. |
| | 51 | evolution | Controlled change, deprecation, and release of the standard. |
| 6x Enablement | 60 | templates | Reusable document skeletons implementing the specifications. |
| | 61 | examples | Completed, domain-neutral instances of templates. |
| | 62 | generators | Requirements for tools that instantiate templates. |
| | 63 | validators | Deterministic rule sets that check conformance. |
| | 64 | tools | Qualification and registry requirements for all supporting tools. |
| 7x Documentation | 70 | documentation | Human-facing guides for reading, adopting, and maintaining OAES. |
| | 71 | reference | Glossary and register of external references. |
| 9x Terminal | 90 | archive | Immutable storage of retired artifacts. |

Band 8x is intentionally unassigned and reserved for future use.

### Dependency map

Arrows mean "may depend normatively on". Dependencies flow strictly downward in band
number; the enablement, documentation, and terminal bands are non-normative and nothing
may depend on them normatively.

```text
                 +--------------------------------------------+
                 |            0x  NORMATIVE CORE              |
                 |   00 constitution <- 01 meta <- 02 arch    |
                 +--------------------▲-----------------------+
            ┌────────────┬────────────┼────────────┬─────────────┐
   +--------┴---+  +-----┴------+  +--┴───-----+  +┴---------+  +┴----------+
   | 1x OPERATE |  | 2x INFORM  |  | 3x DELIVER|  | 4x ASSURE|  | 5x STEWARD|
   | 10 org     |  | 20 know    |  | 30 proj   |  | 40 qual  |  | 50 gov    |
   | 11 capab   |  | 21 memory  |  |           |  | 41 perf  |  | 51 evol   |
   | 12 workflow|  | 22 context |  |           |  | 42 priv  |  |           |
   +------------+  +------------+  +-----------+  | 43 sec   |  +-----------+
        ▲               ▲               ▲         +----------+       ▲
        └───────────────┴───────┬───────┴──────────────┴─────────────┘
                                │ (implement / describe, non-normative)
                 +--------------┴-----------------------------+
                 | 6x ENABLE: 60 tmpl 61 exa 62 gen 63 val    |
                 |            64 tools                        |
                 | 7x DOCUMENT: 70 docs 71 reference          |
                 | 9x TERMINAL: 90 archive                    |
                 +--------------------------------------------+
```

## Requirements

### Structure

- **ARCH-01** Every top-level directory except repository registries and version-control
  metadata MUST be a layer listed in the band table above or added per ARCH-10.
- **ARCH-02** Each layer MUST have exactly one responsibility as stated in the band table;
  a concern that fits two layers is a defect to be resolved by a decision record, not by
  duplication.
- **ARCH-03** Layer numbers are assigned once and MUST never be reused or renumbered;
  gaps within bands are the extension mechanism.

### Dependencies

- **ARCH-04** A document MAY depend normatively on documents in band 0x and on documents
  in strictly lower-numbered bands than its own.
- **ARCH-05** Within a band, dependencies MUST be acyclic; within band 0x the order is
  fixed: 00 ← 01 ← 02.
- **ARCH-06** No document MAY depend normatively on any artifact in bands 6x, 7x, or 9x.
  References from normative documents to templates, examples, validators, tools, or guides
  are informative conveniences: if every artifact in those bands were deleted, no normative
  statement would lose meaning.
- **ARCH-07** Bands 4x (assurance) and 5x (stewardship) apply to all other bands as
  cross-cutting processes; this application is procedural and does not create reverse
  normative dependencies.
- **ARCH-08** Every dependency MUST be declared in the depending document's Dependencies
  section; undeclared dependencies are conformance defects.
- **ARCH-09** All exchange between layers happens through documents. No layer may rely on
  informal, out-of-repository agreements (Constitution Article X).

### Extension

- **ARCH-10** A new layer MUST be introduced by a minor change to this specification that
  assigns its number within an existing band (or a major change if a new band is needed),
  states its single responsibility, and its dependency budget per ARCH-04.
- **ARCH-11** A new layer MUST be accompanied by a decision record and a layer definition
  README conforming to [OAES-SPEC-003](../01-meta/documentation-specification.md).
- **ARCH-12** Removing a layer is a major change; its contents move to
  [90-archive](../90-archive/README.md), and its number stays reserved (ARCH-03).

## Validation

- ARCH-01, ARCH-03, and directory naming are enforced by
  [Repository Structure Rules](../63-validators/repository-structure-rules.md); dependency
  rules (ARCH-04 to ARCH-08) are checked in document review against each document's
  Dependencies section.

## Future Extension

- Band 8x is reserved. Sub-layers (three-digit numbering under a layer) may be introduced
  by a minor change if a layer's content outgrows a single directory.

## Related Documents

- [OAES-DEC-001 — Banded layer numbering](../50-governance/decisions/dec-001-banded-layer-numbering.md)
- [OAES-DEC-003 — Specifications live in their owning layer](../50-governance/decisions/dec-003-specs-in-owning-layers.md)
- [Repository Structure Rules](../63-validators/repository-structure-rules.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
