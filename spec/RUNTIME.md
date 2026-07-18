# OAES v2 Runtime Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-RUNTIME |
| Title | OAES v2 Runtime Specification |
| Type | Specification |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

## Runtime Responsibility

The Runtime has exactly one responsibility: **choose the next best Action.**

Canonical loop:

```text
Observe
↓
Reason
↓
Choose Action
↓
Execute
↓
Update Knowledge
```

- **RUN-01** The Runtime may implement these operations as functions or modules, but
  they must not become additional Kernel concepts.
- **RUN-02** The Runtime must **not** implement: a Workflow Engine, Planning Engine,
  Decision Engine, Generator Engine, Knowledge Engine, State Engine, Conversation
  Compiler, Semantic IR as a separate ontology, or autonomous multi-agent
  orchestration. Planning, questioning, implementation, review, and testing are
  possible Actions selected through reasoning.
- **RUN-03** Conversation is an interface, not the source of truth. The Runtime reasons
  over persisted repository data only — never over hidden conversation context.

## Reasoning Rule

The central Runtime question is:

**What Action most improves the current Knowledge toward satisfying the Objective?**

The Runtime must:

1. observe persisted Objective and Knowledge;
2. identify Knowledge gaps or unverified dependencies;
3. determine eligible Actions;
4. select the highest-value eligible Action deterministically;
5. record why that Action was selected;
6. execute it through an Actor or emit it for external execution;
7. persist the resulting Knowledge changes;
8. repeat until the Objective success criteria are Verified.

## Deterministic Selection Policy

- **RUN-10** The reference runtime must be deterministic for identical persisted input.
- **RUN-11** The reference runtime must not use an external LLM API, must not require
  API keys, and must not bind to any model provider.
- **RUN-12** **Required set.** A Knowledge record is *required* if it is referenced by
  an Objective success criterion, or is a transitive dependency (`depends_on`) of a
  required record.
- **RUN-13** **Dependency readiness.** An Action targeting Knowledge `K` is eligible
  only when every record in `K.depends_on` is `Verified`. Actions on Knowledge with
  unready dependencies must not be selected.
- **RUN-14** **Candidate Actions.** For each required, non-`Verified` Knowledge record
  whose dependencies are ready, the candidate Action is the single next forward
  transition permitted by [STATE_MODEL.md](STATE_MODEL.md):

  | Current State | Candidate Action kind | Resulting State |
  | --- | --- | --- |
  | Unknown | `establish` | Known |
  | Known (`requires_implementation` = true) | `implement` | Implemented |
  | Known (`requires_implementation` = false) | `verify` | Verified |
  | Implemented | `verify` | Verified |

- **RUN-15** **Value ordering.** Among eligible candidates, select the Knowledge whose
  State is most advanced (`Implemented` before `Known` before `Unknown`). This drives
  work already in flight to `Verified` before opening new fronts.
- **RUN-16** **Tie-breaking.** When candidates share the same State rank, select the
  one with the lexicographically smallest (code-point order) Knowledge `id`. This
  tie-breaker is total and stable.
- **RUN-17** The selected Action must be recorded with its Actor, target Knowledge,
  description, timestamp, kind, and selection rationale before or upon execution.
- **RUN-18** If no executor exists for a selected Action, the Runtime records it as
  pending in the checkpoint and emits it for external execution; it must not silently
  skip it.

## Completion Detection

- **RUN-20** The Objective is complete exactly when every success criterion's
  referenced Knowledge is `Verified` (CDM-11). On completion the Runtime selects no
  further Action.

## Persistence and Resumption

- **RUN-30** All authoritative Runtime state is serialized per
  [CANONICAL_DATA_MODEL.md](CANONICAL_DATA_MODEL.md) to repository files. No database,
  no network persistence.
- **RUN-31** A fresh Runtime process must be able to resume from disk alone and reach
  the same `Verified` result, with no prior process memory and no conversation history.
- **RUN-32** Every State change must be observable in persisted data and Action
  history (auditability).

## Minimum Capabilities

The reference runtime must support: validation of canonical records; loading a complete
project from disk (observation); identifying the next eligible gap (reasoning);
deterministic Action selection; Action recording; valid-transition-only State updates;
dependency blocking; completion detection; resumption from disk; and full
auditability.

## Related Documents

- [KERNEL.md](KERNEL.md)
- [CANONICAL_DATA_MODEL.md](CANONICAL_DATA_MODEL.md)
- [STATE_MODEL.md](STATE_MODEL.md)
- [Reference runtime](../reference-runtime/README.md)
- [OAES-DEC-015](../50-governance/decisions/dec-015-deterministic-reference-runtime.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial OAES v2 Runtime specification. |
