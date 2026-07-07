# Decision: Wave-2 Extension Strategy

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-006 |
| Title | Enterprise wave extends via band-gap layers and companion specifications; engines become process specifications |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Record how the enterprise operating capabilities (Foundation 1.1) were fitted into the
stable Foundation 1.0 architecture.

## Scope

- Placement of all Wave-2 capabilities and the treatment of "engine"-style requirements.

## Non-Scope

- The content of the individual specifications.

## Dependencies

- [Architecture Specification](../../02-architecture/architecture-specification.md)

## Interfaces

- **Inbound:** cited by the Wave-2 layer READMEs and the Architecture Decision Journal.
- **Outbound:** builds on OAES-DEC-001 (banded numbering).

## Problem

Wave 2 required roughly thirty new capabilities — enterprise operation, discovery,
lifecycles, pipelines, metrics, loops, adapters — specified in the vocabulary of
machinery ("discovery engine", "question engine", "improvement engine"). They had to
land without redesigning Foundation, without cycles, and without binding the standard to
any technology generation.

## Options Considered

1. **A new band 8x "operations" holding everything.** Keeps Wave 2 visually separate,
   but scatters concerns away from their owning layers (lifecycle rules far from
   knowledge/memory; loops far from quality), recreating the central-folder mistake
   rejected in OAES-DEC-003 — and spends the reserved band on a wave rather than a
   genuinely new concern class.
2. **One monolithic Enterprise Operating Specification.** Fast to write, impossible to
   steward: one document owned by everyone is owned by no one, and every future change
   would version the whole.
3. **Three new layers in existing band gaps (13-enterprise, 31-discovery, 32-adapters)
   plus companion specifications inside the nine existing layers they extend; every
   "engine" specified as a process pattern — inputs, rules, records, outcomes — that
   humans can execute unaided and any future automation can implement.**

## Decision

Option 3. Foundation's extension points (ARCH-10, band gaps, companion documents) were
used exactly as designed; no Foundation requirement was changed, only added to (all
changes minor; edition 1.1).

## Consequences

- Easier: stewardship stays layer-scoped; Foundation adopters upgrade without migration;
  the architecture demonstrated it can absorb a major wave without renumbering anything.
- Harder: Wave-2 capabilities are distributed across twelve documents rather than one —
  mitigated by INDEX.md and the Architecture Decision Journal's narrative map.
- Accepted risk: "engine" as process-pattern is less prescriptive than software would
  be; adopters wanting turnkey automation must build it themselves against the
  specifications (TOOL rules) — deliberately, per Constitution III.10.

## Future Extension

- Superseded only if a future wave cannot be expressed through existing extension
  points — which would itself be the signal to design v2.

## Related Documents

- [Architecture Decision Journal](../../02-architecture/architecture-decision-journal.md)
- [OAES-DEC-003 — Specifications live in owning layers](dec-003-specs-in-owning-layers.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial record. |
