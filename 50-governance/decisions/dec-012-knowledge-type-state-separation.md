# Decision: Knowledge Type and Knowledge State Are Independent

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-012 |
| Title | Knowledge Type and Knowledge State are separate, independent dimensions |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Repository owner mandate, recorded by OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Record that what a Knowledge claim is *about* (Type) and how mature it is (State) are
independent dimensions, and that Types never carry State semantics.

## Scope

- The Type/State separation (STA-02, VOC-01) binding all OAES v2 implementations.

## Non-Scope

- The specific State set ([OAES-DEC-013](dec-013-four-knowledge-states.md)); the open
  Type vocabulary itself ([VOCABULARY.md](../../spec/VOCABULARY.md)).

## Dependencies

- [OAES v2 Kernel](../../spec/KERNEL.md)
- [OAES v2 State Model](../../spec/STATE_MODEL.md)

## Interfaces

- **Inbound:** cited by schema validation and the State-model tests.
- **Outbound:** builds on [OAES-DEC-011](dec-011-oaes-v2-frozen-kernel.md).

## Problem

Lifecycle models commonly conflate classification with maturity (e.g. treating
`Decision` or `Hypothesis` as lifecycle states). The Foundation-era knowledge
lifecycle used rich per-class lifecycles. Conflation multiplies states, makes
transition rules class-specific, and blocks a single deterministic runtime rule set.

## Options Considered

1. **Per-type lifecycles.** Expressive, but every new Type would demand new transition
   rules, and the Kernel State guard would be unenforceable.
2. **One orthogonal State dimension over an open Type vocabulary.** Four transitions
   cover every Type; Types stay freely extensible without touching the Kernel.

## Decision

Option 2. `Knowledge.type` classifies content and is an open vocabulary;
`Knowledge.state` expresses maturity and is closed (four canonical States). No Type may
imply or encode a State; no State may be introduced disguised as a Type-specific
lifecycle stage.

## Consequences

- Easier: one transition table; Vocabulary growth without Kernel change.
- Harder: nuanced per-type lifecycles must be modeled as separate Knowledge records or
  metadata rather than extra states.

## Future Extension

- None planned; supersession requires an owner-approved Kernel change.

## Related Documents

- [OAES v2 State Model](../../spec/STATE_MODEL.md)
- [OAES v2 Vocabulary](../../spec/VOCABULARY.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-18 | OAES Standards Committee | Initial record. |
