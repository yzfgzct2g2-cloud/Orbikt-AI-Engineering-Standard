# Decision: One Tooling Specification for Three Enablement Layers

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-005 |
| Title | One Tooling Specification governs generators, validators, and tools |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Record why layers 62-generators, 63-validators, and 64-tools share a single specification
instead of carrying one each.

## Scope

- Normative coverage of the three tool-oriented enablement layers.

## Non-Scope

- The layers' existence and separation (kept — they hold different artifact kinds).

## Dependencies

- [Architecture Specification](../../02-architecture/architecture-specification.md)

## Interfaces

- **Inbound:** cited by the READMEs of layers 62, 63, and 64.
- **Outbound:** none.

## Problem

Generators, validators, and general tools need qualification rules (determinism,
neutrality, registration). Drafting three specifications produced three near-identical
documents differing only in the artifact's direction of action — duplication that would
drift apart over a decade.

## Options Considered

1. **Three parallel specifications.** Symmetrical, but ~80% duplicated text; every future
   qualification change must be made three times, and divergence between the copies is
   inevitable.
2. **One Tooling Specification (OAES-SPEC-020) in 64-tools defining common qualification
   plus one short class-specific section per class.** Single source for the shared rules;
   the three layers remain distinct homes for the artifacts themselves.
3. **Merge the three layers into one.** Removes the duplication and the layer distinction,
   but validators' rule sets and generators' scaffolds are different artifact kinds with
   different stewards and change cadence; merging loses that.

## Decision

Option 2. Layers 62, 63, and 64 remain separate artifact homes; their normative
requirements live in the single Tooling Specification owned by 64-tools.

## Consequences

- Easier: consistent qualification rules; one place to strengthen them.
- Harder: layers 62 and 63 point to a sibling layer's specification — acceptable inside
  one band, since all three are non-normative (ARCH-06) and the reference is downward in
  layer number from nothing.

## Future Extension

- If any class accumulates enough class-specific rules, it may be split out by minor
  change, superseding this decision in part.

## Related Documents

- [Tooling Specification](../../64-tools/tooling-specification.md)
- [Architecture Specification](../../02-architecture/architecture-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
