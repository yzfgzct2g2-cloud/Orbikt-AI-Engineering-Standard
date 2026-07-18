# OAES Document Index

| Field | Value |
| --- | --- |
| Identifier | OAES-INDEX |
| Title | Document Index |
| Type | Registry Document |
| Version | 1.2.1 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

> **Historical lineage notice (2026-07-18).** This index registers the OAES v1
> lineage (Foundation editions 1.0–1.2), which is preserved in place as historical
> evidence and is no longer current OAES authority. The current authoritative
> specification is OAES v2 in [spec/](spec/README.md); see
> [history/README.md](history/README.md) and
> [OAES-DEC-017](50-governance/decisions/dec-017-v1-lineage-preservation.md).

## Purpose

The authoritative registry of every OAES artifact (NAM-04): its identifier, location,
version, status, and — for specifications — its requirement prefix (NAM-06). An identifier
not listed here does not exist; an entry here must resolve to an existing file (VREP-04).

## Scope

- Every artifact in this repository.

## Non-Scope

- Edition history ([CHANGELOG.md](CHANGELOG.md)); artifacts of adopting projects.

## Dependencies

- None (registry document; maintained under EVO-03).

## Interfaces

- **Inbound:** all references by identifier resolve through this registry; validators
  check it (VREP-04 to VREP-06, VREP-09).
- **Outbound:** every registered document.

## Constitution

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-CONST-001 | Constitution | [00-constitution/constitution.md](00-constitution/constitution.md) | 1.0.0 | Active |

## Vision

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-VISION-001 | North Star | [01-meta/north-star.md](01-meta/north-star.md) | 1.1.0 | Active |

## Layer Definitions

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-LAYER-00 | Constitution Layer | [00-constitution/README.md](00-constitution/README.md) | 1.0.0 | Active |
| OAES-LAYER-01 | Meta Layer | [01-meta/README.md](01-meta/README.md) | 1.1.0 | Active |
| OAES-LAYER-02 | Architecture Layer | [02-architecture/README.md](02-architecture/README.md) | 1.1.0 | Active |
| OAES-LAYER-10 | Organization Layer | [10-organization/README.md](10-organization/README.md) | 1.0.0 | Active |
| OAES-LAYER-11 | Capabilities Layer | [11-capabilities/README.md](11-capabilities/README.md) | 1.1.0 | Active |
| OAES-LAYER-12 | Workflow Layer | [12-workflow/README.md](12-workflow/README.md) | 1.0.0 | Active |
| OAES-LAYER-13 | Enterprise Layer | [13-enterprise/README.md](13-enterprise/README.md) | 1.0.0 | Active |
| OAES-LAYER-20 | Knowledge Layer | [20-knowledge/README.md](20-knowledge/README.md) | 1.1.0 | Active |
| OAES-LAYER-21 | Memory Layer | [21-memory/README.md](21-memory/README.md) | 1.1.0 | Active |
| OAES-LAYER-22 | Context Layer | [22-context/README.md](22-context/README.md) | 1.1.0 | Active |
| OAES-LAYER-30 | Projects Layer | [30-projects/README.md](30-projects/README.md) | 1.1.0 | Active |
| OAES-LAYER-31 | Discovery Layer | [31-discovery/README.md](31-discovery/README.md) | 1.0.0 | Active |
| OAES-LAYER-32 | Adapters Layer | [32-adapters/README.md](32-adapters/README.md) | 1.0.0 | Active |
| OAES-LAYER-40 | Quality Layer | [40-quality/README.md](40-quality/README.md) | 1.1.0 | Active |
| OAES-LAYER-41 | Performance Layer | [41-performance/README.md](41-performance/README.md) | 1.1.0 | Active |
| OAES-LAYER-42 | Privacy Layer | [42-privacy/README.md](42-privacy/README.md) | 1.0.0 | Active |
| OAES-LAYER-43 | Security Layer | [43-security/README.md](43-security/README.md) | 1.0.0 | Active |
| OAES-LAYER-50 | Governance Layer | [50-governance/README.md](50-governance/README.md) | 1.1.0 | Active |
| OAES-LAYER-51 | Evolution Layer | [51-evolution/README.md](51-evolution/README.md) | 1.2.0 | Active |
| OAES-LAYER-60 | Templates Layer | [60-templates/README.md](60-templates/README.md) | 1.1.0 | Active |
| OAES-LAYER-61 | Examples Layer | [61-examples/README.md](61-examples/README.md) | 1.0.0 | Active |
| OAES-LAYER-62 | Generators Layer | [62-generators/README.md](62-generators/README.md) | 1.0.0 | Active |
| OAES-LAYER-63 | Validators Layer | [63-validators/README.md](63-validators/README.md) | 1.1.0 | Active |
| OAES-LAYER-64 | Tools Layer | [64-tools/README.md](64-tools/README.md) | 1.0.0 | Active |
| OAES-LAYER-70 | Documentation Layer | [70-documentation/README.md](70-documentation/README.md) | 1.0.0 | Active |
| OAES-LAYER-71 | Reference Layer | [71-reference/README.md](71-reference/README.md) | 1.0.0 | Active |
| OAES-LAYER-90 | Archive Layer | [90-archive/README.md](90-archive/README.md) | 1.0.0 | Active |

## Specifications

| Identifier | Title | Requirement prefix | Location | Version | Status |
| --- | --- | --- | --- | --- | --- |
| OAES-SPEC-001 | Naming Specification | NAM | [01-meta/naming-specification.md](01-meta/naming-specification.md) | 1.2.0 | Active |
| OAES-SPEC-002 | Versioning Specification | VER | [01-meta/versioning-specification.md](01-meta/versioning-specification.md) | 1.0.0 | Active |
| OAES-SPEC-003 | Documentation Specification | DOCU | [01-meta/documentation-specification.md](01-meta/documentation-specification.md) | 1.2.0 | Active |
| OAES-SPEC-004 | Architecture Specification | ARCH | [02-architecture/architecture-specification.md](02-architecture/architecture-specification.md) | 1.1.0 | Active |
| OAES-SPEC-005 | Organization Specification | ORG | [10-organization/organization-specification.md](10-organization/organization-specification.md) | 1.0.0 | Active |
| OAES-SPEC-006 | Agent Specification | AGT | [11-capabilities/agent-specification.md](11-capabilities/agent-specification.md) | 1.0.0 | Active |
| OAES-SPEC-007 | Workflow Specification | WFL | [12-workflow/workflow-specification.md](12-workflow/workflow-specification.md) | 1.0.0 | Active |
| OAES-SPEC-008 | Knowledge Specification | KNO | [20-knowledge/knowledge-specification.md](20-knowledge/knowledge-specification.md) | 1.0.0 | Active |
| OAES-SPEC-009 | Memory Specification | MEM | [21-memory/memory-specification.md](21-memory/memory-specification.md) | 1.0.0 | Active |
| OAES-SPEC-010 | Context Specification | CTX | [22-context/context-specification.md](22-context/context-specification.md) | 1.0.0 | Active |
| OAES-SPEC-011 | Project Specification | PRJ | [30-projects/project-specification.md](30-projects/project-specification.md) | 1.0.0 | Active |
| OAES-SPEC-012 | Quality Specification | QUA | [40-quality/quality-specification.md](40-quality/quality-specification.md) | 1.0.0 | Active |
| OAES-SPEC-013 | Performance Specification | PER | [41-performance/performance-specification.md](41-performance/performance-specification.md) | 1.0.0 | Active |
| OAES-SPEC-014 | Privacy Specification | PRV | [42-privacy/privacy-specification.md](42-privacy/privacy-specification.md) | 1.0.0 | Active |
| OAES-SPEC-015 | Security Specification | SEC | [43-security/security-specification.md](43-security/security-specification.md) | 1.0.0 | Active |
| OAES-SPEC-016 | Governance Specification | GOV | [50-governance/governance-specification.md](50-governance/governance-specification.md) | 1.1.0 | Active |
| OAES-SPEC-017 | Decision Specification | DEC | [50-governance/decision-specification.md](50-governance/decision-specification.md) | 1.0.0 | Active |
| OAES-SPEC-018 | Evolution Specification | EVO | [51-evolution/evolution-specification.md](51-evolution/evolution-specification.md) | 1.0.0 | Active |
| OAES-SPEC-019 | Template Specification | TPL | [60-templates/template-specification.md](60-templates/template-specification.md) | 1.0.0 | Active |
| OAES-SPEC-020 | Tooling Specification | TOOL | [64-tools/tooling-specification.md](64-tools/tooling-specification.md) | 1.0.0 | Active |
| OAES-SPEC-021 | Enterprise Specification | ENT | [13-enterprise/enterprise-specification.md](13-enterprise/enterprise-specification.md) | 1.0.0 | Active |
| OAES-SPEC-022 | Communication Specification | COM | [13-enterprise/communication-specification.md](13-enterprise/communication-specification.md) | 1.0.0 | Active |
| OAES-SPEC-023 | Discovery Specification | DSC | [31-discovery/discovery-specification.md](31-discovery/discovery-specification.md) | 1.1.0 | Active |
| OAES-SPEC-024 | Capability Model Specification | CAP | [11-capabilities/capability-model-specification.md](11-capabilities/capability-model-specification.md) | 1.0.0 | Active |
| OAES-SPEC-025 | Context Pipeline Specification | CTP | [22-context/context-pipeline-specification.md](22-context/context-pipeline-specification.md) | 1.0.0 | Active |
| OAES-SPEC-026 | Knowledge Lifecycle Specification | KLC | [20-knowledge/knowledge-lifecycle-specification.md](20-knowledge/knowledge-lifecycle-specification.md) | 1.0.0 | Active |
| OAES-SPEC-027 | Memory Lifecycle Specification | MLC | [21-memory/memory-lifecycle-specification.md](21-memory/memory-lifecycle-specification.md) | 1.0.0 | Active |
| OAES-SPEC-028 | Metrics Specification | MET | [41-performance/metrics-specification.md](41-performance/metrics-specification.md) | 1.0.0 | Active |
| OAES-SPEC-029 | Assurance Loops Specification | ASR | [40-quality/assurance-loops-specification.md](40-quality/assurance-loops-specification.md) | 1.0.0 | Active |
| OAES-SPEC-030 | Domain Adapter Specification | ADP | [32-adapters/domain-adapter-specification.md](32-adapters/domain-adapter-specification.md) | 1.0.0 | Active |
| OAES-SPEC-031 | Project Lifecycle Specification | PLC | [30-projects/project-lifecycle-specification.md](30-projects/project-lifecycle-specification.md) | 1.0.0 | Active |
| OAES-SPEC-032 | Improvement Specification | IMP | [51-evolution/improvement-specification.md](51-evolution/improvement-specification.md) | 1.0.0 | Active |

## Templates

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-TMPL-001 | General Document Template | [60-templates/tmpl-001-document.md](60-templates/tmpl-001-document.md) | 1.0.0 | Active |
| OAES-TMPL-002 | Specification Template | [60-templates/tmpl-002-specification.md](60-templates/tmpl-002-specification.md) | 1.0.0 | Active |
| OAES-TMPL-003 | Decision Record Template | [60-templates/tmpl-003-decision-record.md](60-templates/tmpl-003-decision-record.md) | 1.0.0 | Active |
| OAES-TMPL-004 | Agent Definition Template | [60-templates/tmpl-004-agent-definition.md](60-templates/tmpl-004-agent-definition.md) | 1.0.0 | Active |
| OAES-TMPL-005 | Workflow Definition Template | [60-templates/tmpl-005-workflow-definition.md](60-templates/tmpl-005-workflow-definition.md) | 1.0.0 | Active |
| OAES-TMPL-006 | Knowledge Artifact Template | [60-templates/tmpl-006-knowledge-artifact.md](60-templates/tmpl-006-knowledge-artifact.md) | 1.0.0 | Active |
| OAES-TMPL-007 | Memory Record Template | [60-templates/tmpl-007-memory-record.md](60-templates/tmpl-007-memory-record.md) | 1.0.0 | Active |
| OAES-TMPL-008 | Project Charter Template | [60-templates/tmpl-008-project-charter.md](60-templates/tmpl-008-project-charter.md) | 1.0.0 | Active |
| OAES-TMPL-009 | Change Request Template | [60-templates/tmpl-009-change-request.md](60-templates/tmpl-009-change-request.md) | 1.0.0 | Active |
| OAES-TMPL-010 | Review Record Template | [60-templates/tmpl-010-review-record.md](60-templates/tmpl-010-review-record.md) | 1.0.0 | Active |
| OAES-TMPL-011 | Discovery Record Template | [60-templates/tmpl-011-discovery-record.md](60-templates/tmpl-011-discovery-record.md) | 1.1.0 | Active |
| OAES-TMPL-012 | Risk Record Template | [60-templates/tmpl-012-risk-record.md](60-templates/tmpl-012-risk-record.md) | 1.0.0 | Active |
| OAES-TMPL-013 | Metric Definition Template | [60-templates/tmpl-013-metric-definition.md](60-templates/tmpl-013-metric-definition.md) | 1.0.0 | Active |
| OAES-TMPL-014 | Message of Record Template | [60-templates/tmpl-014-message.md](60-templates/tmpl-014-message.md) | 1.0.0 | Active |

## Decision Records

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-DEC-001 | Banded numeric layer prefixes | [50-governance/decisions/dec-001-banded-layer-numbering.md](50-governance/decisions/dec-001-banded-layer-numbering.md) | 1.0.0 | Accepted |
| OAES-DEC-002 | Location-independent identifiers | [50-governance/decisions/dec-002-location-independent-identifiers.md](50-governance/decisions/dec-002-location-independent-identifiers.md) | 1.0.0 | Accepted |
| OAES-DEC-003 | Specifications live in owning layers | [50-governance/decisions/dec-003-specs-in-owning-layers.md](50-governance/decisions/dec-003-specs-in-owning-layers.md) | 1.0.0 | Accepted |
| OAES-DEC-004 | Document rules in meta; guides in documentation | [50-governance/decisions/dec-004-document-rules-in-meta.md](50-governance/decisions/dec-004-document-rules-in-meta.md) | 1.0.0 | Accepted |
| OAES-DEC-005 | One Tooling Specification for three layers | [50-governance/decisions/dec-005-single-tooling-specification.md](50-governance/decisions/dec-005-single-tooling-specification.md) | 1.0.0 | Accepted |
| OAES-DEC-006 | Wave-2 extension strategy | [50-governance/decisions/dec-006-wave-2-extension-strategy.md](50-governance/decisions/dec-006-wave-2-extension-strategy.md) | 1.0.0 | Accepted |
| OAES-DEC-007 | North Star placement and Vision class | [50-governance/decisions/dec-007-north-star-placement.md](50-governance/decisions/dec-007-north-star-placement.md) | 1.0.0 | Accepted |
| OAES-DEC-008 | Domain adapter isolation | [50-governance/decisions/dec-008-domain-adapter-isolation.md](50-governance/decisions/dec-008-domain-adapter-isolation.md) | 1.0.0 | Accepted |
| OAES-DEC-009 | Specification review cadence | [50-governance/decisions/dec-009-specification-review-cadence.md](50-governance/decisions/dec-009-specification-review-cadence.md) | 1.0.0 | Accepted |
| OAES-DEC-010 | Definitive edition hardening | [50-governance/decisions/dec-010-definitive-edition-hardening.md](50-governance/decisions/dec-010-definitive-edition-hardening.md) | 1.0.0 | Accepted |

## Validation Rule Sets

| Identifier | Title | Rule prefix | Location | Version | Status |
| --- | --- | --- | --- | --- | --- |
| OAES-VAL-001 | Document Conformance Rules | VDOC | [63-validators/document-conformance-rules.md](63-validators/document-conformance-rules.md) | 1.1.0 | Active |
| OAES-VAL-002 | Repository Structure Rules | VREP | [63-validators/repository-structure-rules.md](63-validators/repository-structure-rules.md) | 1.0.0 | Active |
| OAES-VAL-003 | Record Conformance Rules | VREC | [63-validators/record-conformance-rules.md](63-validators/record-conformance-rules.md) | 1.0.0 | Active |

## Examples

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-EXA-001 | Example Agent Definition | [61-examples/example-agent-definition.md](61-examples/example-agent-definition.md) | 1.0.0 | Active |
| OAES-EXA-002 | Example Workflow Definition | [61-examples/example-workflow-definition.md](61-examples/example-workflow-definition.md) | 1.0.0 | Active |
| OAES-EXA-003 | Example Project Charter | [61-examples/example-project-charter.md](61-examples/example-project-charter.md) | 1.0.0 | Active |

## Guides

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-GUIDE-001 | Reading Guide | [70-documentation/reading-guide.md](70-documentation/reading-guide.md) | 1.1.0 | Active |
| OAES-GUIDE-002 | Adoption Guide | [70-documentation/adoption-guide.md](70-documentation/adoption-guide.md) | 1.1.0 | Active |
| OAES-GUIDE-003 | Maintenance Guide | [70-documentation/maintenance-guide.md](70-documentation/maintenance-guide.md) | 1.0.0 | Active |

## Reference Documents

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-REF-001 | Glossary | [71-reference/glossary.md](71-reference/glossary.md) | 1.1.0 | Active |
| OAES-REF-002 | Normative References | [71-reference/normative-references.md](71-reference/normative-references.md) | 1.0.0 | Active |
| OAES-REF-003 | Architecture Decision Journal | [02-architecture/architecture-decision-journal.md](02-architecture/architecture-decision-journal.md) | 1.1.0 | Active |

## Registry Documents

| Identifier | Title | Location | Version | Status |
| --- | --- | --- | --- | --- |
| OAES-README | Repository Overview | [README.md](README.md) | 1.1.0 | Active |
| OAES-INDEX | Document Index | [INDEX.md](INDEX.md) | 1.2.0 | Active |
| OAES-CONTRIBUTING | Contribution Standard | [CONTRIBUTING.md](CONTRIBUTING.md) | 1.1.0 | Active |
| OAES-CHANGELOG | Edition History | [CHANGELOG.md](CHANGELOG.md) | 1.2.0 | Active |
| OAES-ROLE-REGISTER | Role Register | [50-governance/role-register.md](50-governance/role-register.md) | 1.0.0 | Active |
| OAES-IMPROVEMENT-BACKLOG | Improvement Backlog | [51-evolution/improvement-backlog.md](51-evolution/improvement-backlog.md) | 1.0.0 | Active |

## Future Extension

- One row per new artifact, added in the same change that creates it (EVO-03).

## Related Documents

- [Naming Specification](01-meta/naming-specification.md)
- [CHANGELOG.md](CHANGELOG.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-07-08 | OAES Standards Committee | Registered all Foundation 1.1 artifacts (Vision, layers 13/31/32, OAES-SPEC-021…032, OAES-TMPL-011…014, OAES-DEC-006…009, OAES-REF-003) and updated amended document versions. |
| 1.2.0 | 2026-07-08 | OAES Standards Committee | Registered edition 1.2 artifacts (OAES-VAL-003, OAES-DEC-010, OAES-ROLE-REGISTER, OAES-IMPROVEMENT-BACKLOG) and updated amended document versions. |
| 1.2.1 | 2026-07-18 | OAES Standards Committee | Added the historical-lineage notice: this registry covers the v1 lineage; current authority is OAES v2 (OAES-DEC-017). No registry entries changed. |
