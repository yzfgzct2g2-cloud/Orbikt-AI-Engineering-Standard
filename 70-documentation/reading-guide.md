# Reading Guide

| Field | Value |
| --- | --- |
| Identifier | OAES-GUIDE-001 |
| Title | Reading Guide |
| Layer | 70-documentation |
| Type | Guide |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Give each kind of reader the shortest correct path through the standard.

## Scope

- Reading paths and orientation. Informative only.

## Non-Scope

- The rules themselves.

## Dependencies

- None normative (ARCH-06).

## Interfaces

- **Inbound:** linked from the root README.
- **Outbound:** links into all layers.

## How the standard fits together

One sentence per band: the **Constitution** states what must always hold; **meta and
architecture** make documents and structure uniform; the **operating model** (roles,
agents, workflows) says who and what may act and how work flows; the **information
layers** (knowledge, memory, context) say what is true, what happened, and what a task
gets to see; **projects** bind it all to real work; **assurance** verifies it;
**stewardship** decides and changes it; **enablement and documentation** make it
convenient; the **archive** makes it permanent.

## Reading paths

**Everyone (about 30 minutes):**
[Constitution](../00-constitution/constitution.md) →
[Architecture Specification](../02-architecture/architecture-specification.md) →
[Glossary](../71-reference/glossary.md).

**Evaluating adoption:** the path above, then the
[Project Specification](../30-projects/project-specification.md), the
[Quality Specification](../40-quality/quality-specification.md) (conformance levels), and
the [Adoption Guide](adoption-guide.md).

**Working under the standard daily:** the operating model
([Organization](../10-organization/organization-specification.md),
[Agent](../11-capabilities/agent-specification.md),
[Workflow](../12-workflow/workflow-specification.md)) and the information layers
([Knowledge](../20-knowledge/knowledge-specification.md),
[Memory](../21-memory/memory-specification.md),
[Context](../22-context/context-specification.md)); use the
[templates](../60-templates/README.md) with the [examples](../61-examples/README.md)
beside them.

**Reviewing or auditing:** the [Quality Specification](../40-quality/quality-specification.md),
the [validation rule sets](../63-validators/README.md), and the assurance band
([Performance](../41-performance/performance-specification.md),
[Privacy](../42-privacy/privacy-specification.md),
[Security](../43-security/security-specification.md)).

**Changing the standard:** the [Maintenance Guide](maintenance-guide.md), then
[Governance](../50-governance/governance-specification.md),
[Decision](../50-governance/decision-specification.md), and
[Evolution](../51-evolution/evolution-specification.md) specifications.

## Conventions worth knowing before reading

- Capitalized MUST/SHOULD/MAY are requirements (Constitution Article VII); everything
  else is explanation.
- Every requirement has an identifier like `KNO-05`; cite these, not page positions.
- Documents are found by identifier through [INDEX.md](../INDEX.md); identifiers never
  change even when files move.

## Future Extension

- Paths are revised as layers grow.

## Related Documents

- [INDEX.md](../INDEX.md)
- [Adoption Guide](adoption-guide.md)
- [Maintenance Guide](maintenance-guide.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
