# Glossary

| Field | Value |
| --- | --- |
| Identifier | OAES-REF-001 |
| Title | Glossary |
| Layer | 71-reference |
| Type | Reference |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define every term OAES uses with special meaning, exactly once. Where a term appears in a
specification, the defining requirement is cited.

## Scope

- Terminology of this standard.

## Non-Scope

- Domain or technology terminology.

## Dependencies

- None normative (ARCH-06); serves DOCU-14 informatively.

## Interfaces

- **Inbound:** all documents and all readers.
- **Outbound:** definitions cite their defining requirements.

## Terms

| Term | Definition | Defined by |
| --- | --- | --- |
| Agent | Any executor of a bounded engineering task, deterministic or probabilistic, acting for exactly one accountable role holder. | AGT-01, AGT-05 |
| Agent definition | The written declaration an agent must have before participating in governed work. | AGT-03 |
| Archive | Layer 90; the immutable home of every retired artifact. | Constitution Art. X |
| Artifact | Any identified, versioned unit of the standard or of a governed project: document, record, template, rule set. | NAM-01 |
| Authority boundary | The enumerated set of actions an agent may take autonomously, with confirmation, or never. | AGT-06 |
| Band | A group of layers sharing a concern and a leading digit. | OAES-SPEC-004 |
| Blocking defect | A defect that invalidates a gate or a conformance claim until resolved. | QUA-09 |
| Change class | Editorial, minor, or major — the classification every change receives before review. | EVO-01 |
| Conformance declaration | A project's published statement of edition, level, waivers, and last review. | PRJ-09 |
| Conformance level | Level 1 (structural), 2 (process), or 3 (audited). | QUA-02 |
| Context | The set of information supplied for one task; minimal, assembled by retrieval, and recorded. | CTX-01, CTX-02 |
| Context budget | The declared upper bound on context size for a task class. | CTX-07 |
| Decision record | The immutable account of a consequential choice: problem, options, decision, consequences. | DEC-02 |
| Defect | A verified deviation from a requirement or from declared artifacts. | QUA-09 |
| Deterministic | Producing identical outputs for identical inputs, always. | AGT-01 |
| Edition | An immutable release of the standard pinning every document version. | VER-06, VER-07 |
| Evidence | Recorded material supporting a claim, gate, or review; a memory record type. | MEM-02, QUA-07 |
| Gate | The checkpoint between workflow stages; passes only on met exit criteria with evidence. | WFL-04 |
| Human checkpoint | A gate whose passage is a human decision. | WFL-05 |
| Knowledge artifact | A curated, verified, single-sourced statement of fact, convention, procedure, or constraint. | KNO-01, KNO-03 |
| Layer | A top-level unit of the architecture with exactly one responsibility. | ARCH-02 |
| Memory record | An append-only, typed, attributed account of an event, observation, evidence, or state. | MEM-01 |
| Probabilistic | Possibly producing different outputs for identical inputs; requires justification and verification. | AGT-01, AGT-02 |
| Promotion | Verifying a memory record and restating it as a knowledge artifact. | MEM-05 |
| Provenance | The recorded origin and verification of an artifact's content. | KNO-04 |
| Requirement | A statement using the Article VII conformance keywords, individually identified and testable. | DOCU-10 |
| Retention rule | The declared lifetime of a class of records. | MEM-06 |
| Review record | The recorded account of a content or conformance review: scope, findings, verdict. | QUA-04 |
| Single Source of Truth (SSOT) | The principle that every fact has exactly one authoritative location. | Constitution Art. III.2 |
| Steward | The role accountable for the technical content of one layer. | ORG-01 |
| Structural review | Deterministic validation against published rule sets. | QUA-01 |
| Template | A copyable skeleton yielding a structurally conformant artifact when filled truthfully. | TPL-01 |
| Validator | A tool that evaluates a published rule set exactly and reports violations. | TOOL-09 |
| Waiver | A time-bounded, recorded permission to deviate from a specific requirement. | GOV-07 |
| Workflow | A defined process of stages, gates, criteria, and failure paths. | WFL-01 |

## Future Extension

- A term is added in the same change as the document introducing it (DOCU-14).

## Related Documents

- [Documentation Specification](../01-meta/documentation-specification.md)
- [Normative References](normative-references.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
