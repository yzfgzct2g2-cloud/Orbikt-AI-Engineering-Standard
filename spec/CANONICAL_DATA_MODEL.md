# OAES v2 Canonical Data Model

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-CDM |
| Title | OAES v2 Canonical Data Model |
| Type | Specification |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

## Purpose

Define the canonical machine-readable shape of the five Kernel concepts and of a
persisted project. The machine-readable schemas in [`/schemas`](../schemas/) are the
precise validation contract for this model; this document and those schemas must not
disagree (checked by the documentation consistency scan).

## General Rules

- **CDM-01** Every record carries a unique `id`. IDs are non-empty strings, unique
  within their record class in one project.
- **CDM-02** The fields listed below are the **canonical minimum**. Implementations may
  add implementation-level fields, but added fields must not function as hidden
  additional Kernel entities (KRN-03).
- **CDM-03** All references (`parent`, `depends_on`, `target_knowledge`, `actor`,
  `knowledge` in success criteria) must resolve to existing records. Dangling
  references are invalid.
- **CDM-04** Timestamps are ISO 8601 UTC strings.
- **CDM-05** Canonical persisted state is JSON (see [Persistence](#persistence)).

## Objective

Canonical minimum fields:

```text
id
title
description
success_criteria
```

- **CDM-10** `success_criteria` is a non-empty list. Each success criterion has:
  - `id` — unique among the objective's criteria;
  - `description` — the observable outcome;
  - `knowledge` — the id of the Knowledge record whose `Verified` State satisfies
    this criterion.
- **CDM-11** The Objective is complete exactly when every success criterion's
  referenced Knowledge is `Verified`.

## Knowledge

Canonical minimum fields:

```text
id
type
content
state
parent
depends_on
source
updated_at
```

- **CDM-20** `type` is a Knowledge Type from [VOCABULARY.md](VOCABULARY.md). Type and
  State are independent.
- **CDM-21** `state` is one of the four canonical States
  ([STATE_MODEL.md](STATE_MODEL.md)).
- **CDM-22** `parent` is a Knowledge id or `null`. A record must not be its own parent,
  and the parent must exist.
- **CDM-23** `depends_on` is a list of Knowledge ids. Dependencies must exist, must not
  include the record itself, and the dependency graph must be acyclic.
- **CDM-24** `source` records provenance (an Actor id, a document path, a URL, or a
  free-text origin claim).
- **CDM-25** `updated_at` is the timestamp of the last State or content change.
- **CDM-26** Implementation-level optional field `requires_implementation`
  (boolean, default `false`) declares whether the record must pass through
  `Implemented` on its way to `Verified` (see STA-04/STA-05 in
  [STATE_MODEL.md](STATE_MODEL.md)). This is implementation metadata, not a Kernel
  concept.

## Action

Canonical minimum fields:

```text
id
actor
target_knowledge
description
created_at
```

- **CDM-30** `actor` is the id of a registered Actor.
- **CDM-31** `target_knowledge` is a non-empty list of Knowledge ids.
- **CDM-32** Implementation-level optional fields used by the reference runtime:
  `kind` (the selected operation, e.g. `establish`, `implement`, `verify`,
  `invalidate`), `rationale` (why this Action was selected), and `resulting_state`
  (the Knowledge State produced). These are metadata, not Kernel concepts.

## Actor

Canonical minimum fields:

```text
id
type
name
```

- **CDM-40** `type` is an Actor type from [VOCABULARY.md](VOCABULARY.md):
  `Human`, `AI`, `Automation`, or `External System`.

## Persistence

A persisted project is one JSON document (canonically
[`runtime-state/project.json`](../runtime-state/project.json)) containing:

```text
format          — the string "oaes-project"
format_version  — the persisted-format version (currently "2.0.0")
objective       — one Objective
actors          — the Actor registry
knowledge       — all Knowledge records
actions         — the complete Action history, in execution order
checkpoint      — runtime checkpoint metadata: last selected/pending action id
                  (or null), and the timestamp of the last update
```

- **CDM-50** A project must be fully recoverable from this document alone. No hidden
  in-memory state and no conversation transcript may be required for resumption.
- **CDM-51** The Action history is append-only. Completed Actions are never mutated or
  deleted.
- **CDM-52** The JSON Schemas in [`/schemas`](../schemas/) are the validation contract:
  `objective.schema.json`, `knowledge.schema.json`, `action.schema.json`,
  `actor.schema.json`, `project.schema.json`.

## Related Documents

- [KERNEL.md](KERNEL.md)
- [STATE_MODEL.md](STATE_MODEL.md)
- [RUNTIME.md](RUNTIME.md)
- [VOCABULARY.md](VOCABULARY.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial OAES v2 canonical data model. |
