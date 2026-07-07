# Contributing to OAES

| Field | Value |
| --- | --- |
| Identifier | OAES-CONTRIBUTING |
| Title | Contribution Standard |
| Type | Registry Document |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Tell a contributor exactly how a change to this standard is proposed and lands. This is
the practical summary of the [Evolution Specification](51-evolution/evolution-specification.md);
where they diverge, the specification prevails.

## Scope

- Contributions to this repository.

## Non-Scope

- Contributions to adopting projects (they define their own process under PRJ-03).

## Dependencies

- None (registry document summarizing OAES-SPEC-018, -016, -012).

## Interfaces

- **Inbound:** the first document a contributor reads.
- **Outbound:** the change workflow (EVO-02) it summarizes.

## Before you write

1. Search [INDEX.md](INDEX.md) and the
   [decision records](50-governance/decisions/) — your idea may be settled (GOV-06) or
   already live somewhere (single sourcing, KNO-02).
2. Classify your change: **editorial** (wording, typos), **minor** (compatible addition),
   **major** (anything that could invalidate existing conformance). See EVO-01. When
   unsure, propose and let review classify.
3. Locate the owning layer — one concern, one layer (ARCH-02). If it seems to belong in
   two, that is a decision-record question, not a copy-twice answer.

## The path of a change (EVO-02)

1. **Propose.** Fill the [Change Request Template](60-templates/tmpl-009-change-request.md):
   problem, exact change, class, every affected document, migration statement.
2. **Validate.** Your proposed state must pass the
   [Document Conformance Rules](63-validators/document-conformance-rules.md) and
   [Repository Structure Rules](63-validators/repository-structure-rules.md). Structural
   defects never reach a human reviewer (QUA-03).
3. **Review.** The affected layers' Stewards review content; you cannot review your own
   change (ORG-05).
4. **Approval.** By the authority for your change class (GOV-02).
5. **Integration.** Versions, revision histories, INDEX.md, and cross-references move in
   the same merge (EVO-03). A Maintainer merges (SEC-03).

## Ground rules

- **No domain or vendor content, ever.** Nothing medical, legal, framework-, language-,
  model-, or product-specific enters this repository (Constitution Article IV). Such
  content belongs in adopting projects.
- **Write requirements, not prompts.** Engineering English, testable statements, DOCU-10
  and DOCU-11 apply.
- **Templates start you correct.** Author from [60-templates](60-templates/README.md);
  the [examples](61-examples/README.md) show filled instances.
- **Agent-drafted contributions are welcome and are yours.** You are accountable for
  every line (ORG-03); unverified agent claims are proposals, not facts (AGT-09).
- **Append, never rewrite.** History, decisions, and archives are immutable (Article VI).

## Future Extension

- Tracks the Evolution Specification.

## Related Documents

- [Evolution Specification](51-evolution/evolution-specification.md)
- [Governance Specification](50-governance/governance-specification.md)
- [Maintenance Guide](70-documentation/maintenance-guide.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
