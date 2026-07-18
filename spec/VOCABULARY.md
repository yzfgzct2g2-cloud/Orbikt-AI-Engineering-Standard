# OAES v2 Vocabulary

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-VOCAB |
| Title | OAES v2 Vocabulary |
| Type | Specification |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Define the open vocabularies that sit *outside* the frozen Kernel: Knowledge Types,
Actor types, and the authoritative bilingual terminology mapping. Vocabulary may be
extended without touching the Kernel (KRN-04); extension is the first escalation path
when a concept seems missing.

## Knowledge Types

`Knowledge.type` is an open vocabulary. The baseline types are:

| Type | Meaning |
| --- | --- |
| `requirement` | A claim about what the outcome must satisfy. |
| `constraint` | A boundary the solution must respect. |
| `risk` | A claim about what may endanger the Objective. |
| `decision` | A recorded choice among alternatives. |
| `architecture` | A claim about solution structure. |
| `implementation` | A claim about a concrete realized artifact. |
| `evidence` | A claim that records observation or verification results. |

- **VOC-01** Types classify what a Knowledge claim is *about*; they carry no maturity
  semantics. Maturity is expressed only by State (STA-02).
- **VOC-02** Adding a Knowledge Type is a Vocabulary change, not a Kernel change.

## Actor Types

`Actor.type` is one of:

```text
Human
AI
Automation
External System
```

- **VOC-03** Claude, Codex, ChatGPT, GitHub Actions, scripts, and named people are
  Actor instances or names, never Actor types and never Kernel concepts.

## Terminology Mapping（術語對照）

Canonical technical identifiers remain in English. This is the single authoritative
Chinese mapping; do not introduce competing translations.

| English (canonical) | 中文 |
| --- | --- |
| Objective | 目標 |
| Knowledge | 知識 |
| State | 狀態 |
| Action | 行動 |
| Actor | 行動者 |
| Unknown | 未知 |
| Known | 已知 |
| Implemented | 已實作 |
| Verified | 已驗證 |

## Related Documents

- [KERNEL.md](KERNEL.md)
- [CANONICAL_DATA_MODEL.md](CANONICAL_DATA_MODEL.md)
- [STATE_MODEL.md](STATE_MODEL.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial OAES v2 vocabulary. |
