# OAES v2 Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-SPEC-INDEX |
| Title | OAES v2 Specification Index |
| Type | Registry Document |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

## Authority

This directory holds the **current authoritative OAES v2 specification**. It
supersedes the OAES v1 lineage (Foundation editions 1.0–1.2, preserved in place in the
numbered layer directories) as the definition of what OAES *is*. The v1 lineage
remains valid historical engineering evidence — see the
[historical lineage index](../history/README.md) and
[OAES-DEC-017](../50-governance/decisions/dec-017-v1-lineage-preservation.md).

Specifications govern implementation. The implementation must never silently redefine
the specification.

## Documents

| Document | Contents |
| --- | --- |
| [KERNEL.md](KERNEL.md) | The frozen definition and the five Kernel concepts. |
| [CANONICAL_DATA_MODEL.md](CANONICAL_DATA_MODEL.md) | Canonical minimum fields and the persisted-project format. |
| [STATE_MODEL.md](STATE_MODEL.md) | The four Knowledge States and all valid transitions. |
| [RUNTIME.md](RUNTIME.md) | Runtime responsibility, deterministic selection, persistence, resumption. |
| [VOCABULARY.md](VOCABULARY.md) | Knowledge Types, Actor types, bilingual terminology mapping. |

The machine-readable validation contract lives in [`/schemas`](../schemas/). The
reference implementation lives in [`/reference-runtime`](../reference-runtime/).

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial OAES v2 specification index. |
