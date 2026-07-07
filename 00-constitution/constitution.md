# OAES Constitution

| Field | Value |
| --- | --- |
| Identifier | OAES-CONST-001 |
| Title | Constitution of the Orbikt AI Engineering Standard |
| Layer | 00-constitution |
| Type | Constitution |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Establish the supreme, slowest-changing rules of the Orbikt AI Engineering Standard (OAES).
All other documents in this standard derive their authority from this Constitution and are
void where they contradict it.

## Scope

- Mission, principles, precedence, neutrality, accountability, and amendment threshold of
  the standard.

## Non-Scope

- Procedures, document formats, tooling, and all technical detail. The Constitution states
  *what must always hold*; specifications state *how it is achieved*.

## Dependencies

- None.

## Interfaces

- **Inbound:** all OAES documents. Conflict with this document invalidates the conflicting
  clause, not this document.
- **Outbound:** none normative.

---

## Article I — Authority and Supremacy

1. This Constitution is the supreme document of OAES.
2. In any conflict between documents, precedence follows layer order: a document in a
   lower-numbered band prevails over a document in a higher-numbered band; within a band,
   the lower-numbered layer prevails; within a layer, the document with the more recent
   approved version prevails.
3. No template, example, generator, validator, or tool has normative force. Enablement
   artifacts implement the standard; they never define it.

## Article II — Mission

OAES exists so that software engineering work performed with the assistance of automated
agents remains **correct, auditable, reproducible, and maintainable by humans** — regardless
of which agents, vendors, models, languages, frameworks, or platforms are in use at any
point in time.

## Article III — Principles

The following principles bind every document, process, and participant. Specifications may
refine them; nothing may weaken them.

1. **Deterministic before AI.** Where a deterministic method can perform a task to the
   required quality, it is preferred over a probabilistic agent.
2. **Single Source of Truth.** Every fact, rule, or decision has exactly one authoritative
   location. All other occurrences are references to it.
3. **Evidence before assumption.** Claims are grounded in verifiable evidence. Unverified
   output of any agent is a proposal, not a fact.
4. **Context minimization.** Work is performed with the smallest sufficient set of
   information. Excess context is a defect, not a convenience.
5. **Retrieval before reasoning.** Recorded knowledge is retrieved and consulted before new
   conclusions are derived.
6. **Separation of concerns.** Each layer, document, and role has one responsibility and
   does not absorb its neighbors'.
7. **Composable architecture.** Parts combine through declared interfaces and can be
   replaced independently.
8. **Explicit interfaces.** Every dependency and every exchange between parts is declared,
   never implied.
9. **Modular evolution.** The standard changes part by part, through the defined change
   process, without requiring wholesale rewrites.
10. **Human maintainability.** The standard must remain fully operable by human engineers
    alone. If all automated agents disappeared, the standard would still function.
11. **Vendor independence.** No normative statement names or presumes a specific vendor,
    product, or model.
12. **Long-term sustainability.** Decisions are evaluated against a ten-year horizon, not
    against the convenience of the present.

## Article IV — Neutrality

1. Normative text must not reference any specific AI model, AI vendor, programming
   language, framework, operating system, or application domain.
2. Any capability required from an automated agent must be expressed as a testable,
   implementation-independent requirement.
3. Adoption of OAES must never require a commercial relationship with any particular party.

## Article V — Human Accountability

1. Accountability for engineering outcomes rests with identified humans, never with
   automated agents.
2. The following may not be delegated to automated agents: approval of changes to this
   standard, acceptance of risk, waiver of a requirement, and release decisions.
3. Automated agents act only within an authority boundary declared in advance per the
   [Agent Specification](../11-capabilities/agent-specification.md).

## Article VI — Record and Traceability

1. Every decision of consequence is recorded per the
   [Decision Specification](../50-governance/decision-specification.md).
2. Records are append-only: superseded material is archived, never deleted or silently
   rewritten.
3. Every document carries its own identity, version, and revision history.

## Article VII — Conformance Language

1. The key words **MUST**, **MUST NOT**, **SHALL**, **SHOULD**, **SHOULD NOT**, and **MAY**
   in OAES documents are to be interpreted as described in RFC 2119.
2. A statement using these key words in capitals is a *requirement*; all other text is
   informative.

## Article VIII — Amendment

1. This Constitution may be amended only through a **major** change under the
   [Evolution Specification](../51-evolution/evolution-specification.md), approved
   unanimously by the Standards Committee defined in the
   [Governance Specification](../50-governance/governance-specification.md).
2. An amendment must include: the motivating problem, the exact text change, an impact
   analysis over all layers, and a migration statement.
3. Articles are never deleted; a superseding article marks its predecessor as superseded.

## Article IX — Language of Record

1. The language of record is English. Dates use ISO 8601 (`YYYY-MM-DD`).
2. Translations are informative; only the English text is normative.

## Article X — Continuity

1. The repository is the standard. There is no authoritative state outside it.
2. Retired material moves to the [Archive layer](../90-archive/README.md) with its history
   intact, so that any past state of the standard can be reconstructed.

---

## Future Extension

- New articles are appended after Article X through the amendment process of Article VIII.

## Related Documents

- [Architecture Specification](../02-architecture/architecture-specification.md)
- [Governance Specification](../50-governance/governance-specification.md)
- [Evolution Specification](../51-evolution/evolution-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
