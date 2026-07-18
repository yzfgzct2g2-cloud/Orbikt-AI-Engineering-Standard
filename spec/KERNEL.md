# OAES v2 Kernel

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-KERNEL |
| Title | OAES v2 Kernel Specification |
| Type | Specification |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

## Definition

**OAES is a minimal engineering reasoning model that continuously transforms knowledge
into verified outcomes through observable actions.**

Chinese canonical translation:

**OAES 是一個最小化的工程推理模型，透過可觀察的行動，持續將知識轉化為可驗證的成果。**

OAES is **not**:

- an AI product;
- a prompt framework;
- an agent marketplace;
- a workflow builder;
- a chatbot personality;
- a model-provider abstraction product;
- a project management suite.

AI systems, humans, scripts, CI processes, and external systems are all **Actors**.

## The Frozen Kernel

The OAES v2 Kernel contains **exactly five** concepts:

```text
Objective
Knowledge
State
Action
Actor
```

- **KRN-01** No sixth Kernel concept may be introduced.
- **KRN-02** The five Kernel concepts must not be renamed.
- **KRN-03** No alias may be created that functions as a hidden additional Kernel entity.
- **KRN-04** The Kernel is frozen against feature expansion. Kernel changes are permitted
  only for demonstrated contradictions or defects, and require explicit approval by the
  standard's human owner (see [Kernel Change Escalation](#kernel-change-escalation)).
- **KRN-05** Kernel invariants must be mechanically checked by the reference runtime test
  suite (see [RUNTIME.md](RUNTIME.md)). A build that adds a Kernel concept or a canonical
  State must fail.

## Canonical Meaning of the Five Concepts

### Objective

The outcome being pursued. An Objective must have observable success criteria.

Project-management constructs such as Sprint, Epic, Story, Roadmap, or Priority are
**not** Kernel fields. They may exist as Vocabulary or external implementation metadata.

### Knowledge

A claim about the Objective, domain, constraints, decisions, implementation, or
evidence. Knowledge is the central unit of reasoning.

Requirements, constraints, risks, decisions, architecture, evidence, and implementation
facts are **Knowledge Types** (see [VOCABULARY.md](VOCABULARY.md)). They are not
separate Kernel entities.

### State

State represents Knowledge maturity. The only canonical Knowledge States are:

```text
Unknown
Known
Implemented
Verified
```

Knowledge Type and Knowledge State are independent dimensions. The full State model,
including transitions, is defined in [STATE_MODEL.md](STATE_MODEL.md).

### Action

An observable operation intended to improve Knowledge maturity or advance the
Objective. Every Action must target one or more Knowledge records.

Status, result, timing, rationale, and evidence metadata on Actions are
implementation-level fields or associated Knowledge — not new Kernel concepts.

### Actor

The performer of an Action. Actor types include Human, AI, Automation, and External
System. Claude, Codex, ChatGPT, GitHub Actions, scripts, and named people are Actor
*instances or names*, not Kernel types.

## Engineering Definition

**Engineering is the continuous refinement of Knowledge until it becomes Verified.**

The Runtime operationalizes this definition without creating additional engines
(see [RUNTIME.md](RUNTIME.md)).

## Kernel Change Escalation

When implementation reveals a perceived missing concept, apply this order:

1. solve through existing Runtime behavior;
2. solve through Knowledge Type or Vocabulary;
3. solve through a Knowledge Pack;
4. solve through implementation metadata;
5. create a Decision Record explaining the unresolved contradiction.

Do not change the Kernel. Do not add a State. Only the standard's human owner may
authorize reopening the frozen Kernel.

## Related Documents

- [CANONICAL_DATA_MODEL.md](CANONICAL_DATA_MODEL.md) — canonical minimum fields
- [STATE_MODEL.md](STATE_MODEL.md) — the four States and their transitions
- [RUNTIME.md](RUNTIME.md) — Runtime responsibility and deterministic selection
- [VOCABULARY.md](VOCABULARY.md) — Knowledge Types, Actor types, terminology mapping
- [OAES-DEC-011](../50-governance/decisions/dec-011-oaes-v2-frozen-kernel.md) — adoption decision

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Frozen OAES v2 Kernel adopted (OAES-DEC-011). |
