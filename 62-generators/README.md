# Layer 62 — Generators

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-62 |
| Title | Generators Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Home of scaffolding artifacts: anything that instantiates a template into a new,
structurally correct document. Foundation 1.0 defines the requirements such generators
must meet; concrete generator implementations are registered here by the maintainers as
they are qualified.

## Scope

- Generator descriptors: one registered document per qualified generator, per the
  [Tooling Specification](../64-tools/tooling-specification.md) (TOOL-07).

## Non-Scope

- Qualification requirements themselves — owned by the Tooling Specification per
  [OAES-DEC-005](../50-governance/decisions/dec-005-single-tooling-specification.md).
- Validation ([63-validators](../63-validators/README.md)).

## Responsibilities

- Ensure every registered generator produces only artifacts that pass structural review
  unedited.

## Dependencies

- None normative (enablement band, ARCH-06).

## Interfaces

- **Inbound:** authors invoke registered generators to start new artifacts.
- **Outbound:** generators consume templates (layer 60) and are qualified under the
  Tooling Specification (layer 64).

## Contents

| Document | Identifier |
| --- | --- |
| *No generators registered in Foundation 1.0.* | — |

A manual fallback always exists: copying a template by hand satisfies every requirement a
generator satisfies (Constitution Article III.10 — human maintainability).

## Future Extension

- Generator descriptors are added here as implementations are qualified per TOOL-04 to
  TOOL-07.

## Related Documents

- [Tooling Specification](../64-tools/tooling-specification.md)
- [Layer 60 — Templates](../60-templates/README.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
