# OAES Historical Lineage (v1)

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-HISTORY-INDEX |
| Title | OAES v1 Historical Lineage Index |
| Type | Registry Document |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) — indexing Historical material |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Index the OAES v1 lineage — Foundation editions 1.0 (2026-07-07), 1.1 (2026-07-08),
and 1.2 (2026-07-08) — which is preserved **in place, unmodified**, as historical
engineering evidence. See [OAES-DEC-017](../50-governance/decisions/dec-017-v1-lineage-preservation.md).

**Historical material is not current OAES authority.** The current authoritative
specification is [`/spec`](../spec/README.md) (OAES v2).

## What the v1 Lineage Is

The Foundation editions defined OAES as a vendor-neutral documentation standard for
AI-assisted engineering: a constitution, 24 numbered layers in 9 bands, 32
specifications, 14 templates, validators, and decision records OAES-DEC-001…010. Its
registry is [INDEX.md](../INDEX.md); its edition history is
[CHANGELOG.md](../CHANGELOG.md) (Foundation entries).

## Historical Scope

Everything under the numbered layer directories is v1 lineage:

```text
00-constitution/  01-meta/  02-architecture/
10-organization/  11-capabilities/  12-workflow/  13-enterprise/
20-knowledge/  21-memory/  22-context/
30-projects/  31-discovery/  32-adapters/
40-quality/  41-performance/  42-privacy/  43-security/
50-governance/  51-evolution/
60-templates/  61-examples/  62-generators/  63-validators/  64-tools/
70-documentation/  71-reference/
90-archive/
CONTRIBUTING.md  INDEX.md
```

Exception: [`50-governance/decisions/`](../50-governance/decisions/) remains the
**live** decision register for both lineages — records OAES-DEC-001…010 are v1-era,
OAES-DEC-011 onward are v2-era. The register was kept in place so decision
traceability is unbroken.

Historical documents may describe models that OAES v2 does not use (layer bands,
six-state document lifecycles, per-class knowledge lifecycles). That is expected;
they are evidence of how the standard evolved, and they are excluded from
current-authority consistency scans.

## The v1 → v2 Transition

Foundation 1.2 completed the documentation standard. OAES v2 (2026-07-18) redefined
OAES as a **minimal engineering reasoning model** — a frozen five-concept Kernel
(Objective, Knowledge, State, Action, Actor), four Knowledge States, a deterministic
reference runtime, and a repository-persisted continuation contract. The reasoning is
recorded in [OAES-DEC-011](../50-governance/decisions/dec-011-oaes-v2-frozen-kernel.md)
through [OAES-DEC-017](../50-governance/decisions/dec-017-v1-lineage-preservation.md).

Continuity of intent: the v1 North Star's demands — durability across models and
vendors, honesty, records that outlive sessions — are carried into v2 as the frozen
Kernel, specification-first authority, and the continuation contract.

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial historical lineage index. |
