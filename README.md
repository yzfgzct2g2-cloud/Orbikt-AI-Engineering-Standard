# Orbikt AI Engineering Standard (OAES)

| Field | Value |
| --- | --- |
| Identifier | OAES-README |
| Title | Repository Overview |
| Type | Registry Document |
| Version | 2.1.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-24 |

## What OAES Is

**OAES is a minimal engineering reasoning model that continuously transforms knowledge
into verified outcomes through observable actions.**

**OAES 是一個最小化的工程推理模型，透過可觀察的行動，持續將知識轉化為可驗證的成果。**

The current authoritative definition is **OAES v2**: a frozen Kernel of exactly five
concepts — Objective, Knowledge, State, Action, Actor — four canonical Knowledge
States (Unknown, Known, Implemented, Verified), a deterministic reference runtime,
and a repository-persisted continuation contract. AI systems, humans, scripts, CI,
and external systems are all Actors.

OAES is not an AI product, a prompt framework, an agent marketplace, a workflow
builder, a chatbot personality, a model-provider abstraction product, or a project
management suite.

## How to Read This Repository

1. **Specification (authoritative):** [spec/](spec/README.md) — Kernel, canonical
   data model, State model, Runtime, vocabulary.
2. **Continuing work here (human or AI):** [BOOTSTRAP.md](BOOTSTRAP.md) — the single
   canonical boot protocol; then [CURRENT_STATE.md](CURRENT_STATE.md), the sole
   routine Continue Card. Read [HANDOFF.md](HANDOFF.md) only when the Continue Card
   or an approval boundary requires it.
3. **Machine-readable project state:**
   [`runtime-state/project.json`](runtime-state/project.json) (validated by
   [schemas/](schemas/)).
4. **Reference implementation:** [reference-runtime/](reference-runtime/README.md) —
   deterministic, provider-independent, fully tested; synthetic demo in
   [examples/greeting-demo/](examples/greeting-demo/README.md).
5. **Why v2 is shaped this way:** decision records
   [OAES-DEC-011…018](50-governance/decisions/), followed by
   [OAES-DEC-019](50-governance/decisions/dec-019-owner-controlled-break-glass.md)
   (owner-controlled emergency access) and
   [OAES-DEC-020](50-governance/decisions/dec-020-autonomous-execution-profile.md).
6. **Explicit engineering Missions:** the
   [OAES Autonomous Execution Profile](AUTONOMOUS_EXECUTION_PROFILE.md), adopted in
   [OAES-DEC-020](50-governance/decisions/dec-020-autonomous-execution-profile.md),
   defines autonomy levels, Human Gates, self-repair, and a minimal QA-Engine Overlay.

## Repository Map

| Path | Authority | Contents |
| --- | --- | --- |
| [spec/](spec/README.md) | **Current** | The frozen OAES v2 specification. |
| [schemas/](schemas/) | **Current** | JSON Schemas — the validation contract. |
| [reference-runtime/](reference-runtime/README.md) | **Current** | Deterministic TypeScript reference runtime and tests. |
| [runtime-state/](runtime-state/project.json) | **Current** | Machine-readable project state (authoritative for the Runtime). |
| [examples/](examples/greeting-demo/README.md) | **Current** | Synthetic demonstration. |
| [BOOTSTRAP.md](BOOTSTRAP.md), [CLAUDE.md](CLAUDE.md), [AGENTS.md](AGENTS.md), [CURRENT_STATE.md](CURRENT_STATE.md), [HANDOFF.md](HANDOFF.md) | **Current** | Continuation contract. |
| [VERSION.md](VERSION.md), [CHANGELOG.md](CHANGELOG.md) | **Current** | Version and edition records. |
| [history/](history/README.md) | Index | Guide to the historical v1 lineage. |
| `00-…` – `90-…` numbered layers, [INDEX.md](INDEX.md), [CONTRIBUTING.md](CONTRIBUTING.md) | **Historical (v1)** | Foundation editions 1.0–1.2, preserved in place unmodified ([OAES-DEC-017](50-governance/decisions/dec-017-v1-lineage-preservation.md)). Exception: [50-governance/decisions/](50-governance/decisions/) remains the live decision register. |

## Historical Lineage

OAES v1 — the Foundation editions 1.0, 1.1, and 1.2 (a vendor-neutral documentation
standard: constitution, 24 layers, 32 specifications) — is preserved **in place,
unmodified**, as engineering evidence. It is not current authority. Start at
[history/README.md](history/README.md) for the lineage index and the v1 → v2
transition narrative.

## Validation

```bash
cd reference-runtime
npm install
npm run check:all   # typecheck + tests (incl. kernel/state invariant guards) + docs scan
```

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-08 | OAES Standards Committee | Added layers 13, 31, 32 and the North Star to the maps (Foundation edition 1.1). |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | OAES v2: repository entry point now presents the v2 specification as current; Foundation 1.x preserved as historical lineage (OAES-DEC-017). |
| 2.1.0 | 2026-07-24 | OAES Standards Committee | Established CURRENT_STATE.md as the sole routine Continue Card and made HANDOFF.md conditional (OAES-DEC-018). |
