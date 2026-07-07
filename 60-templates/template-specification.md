# Template Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-019 |
| Title | Template Specification |
| Layer | 60-templates |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define what an OAES template is, what every template must contain, and how templates stay
truthful to the specifications they implement.

## Scope

- Structure, content rules, and maintenance duties for all OAES templates.

## Non-Scope

- The artifacts produced from templates (governed by their own specifications).
- Automated instantiation ([Tooling Specification](../64-tools/tooling-specification.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Documentation Specification](../01-meta/documentation-specification.md)

## Interfaces

- **Inbound:** authors and generators consume templates; the templates layer README
  registers them.
- **Outbound:** each template mirrors exactly one specification's required fields.

## Requirements

### Nature and neutrality

- **TPL-01** A template is a copyable skeleton that, when filled truthfully, yields an
  artifact satisfying the structural requirements of exactly one specification, which the
  template MUST name in its header as "Implements".
- **TPL-02** Templates are informative (ARCH-06): where a template and its specification
  disagree, the specification prevails and the template is defective.
- **TPL-03** Templates MUST be generic: no domain content, no vendor, model, language, or
  framework references, and no prompt phrasing — a template is filled by a human or agent,
  never "executed".

### Structure

- **TPL-04** Every template document MUST contain these sections about itself:
  **Purpose**, **Responsibilities** (what the filled artifact is accountable for),
  **Inputs** (what the author needs before filling it), **Outputs** (what the filled
  artifact provides), **Interfaces**, **Dependencies**, **Validation** (how a filled
  instance is checked), **Future Extension**, **Related Documents**, and **Revision
  History** — followed by the fill-in skeleton in a single fenced block.
- **TPL-05** Fill-in slots in the skeleton MUST use the form `{{slot-name}}` and nothing
  else; every slot MUST be either filled or explicitly struck as not applicable in a
  conforming instance — a surviving `{{...}}` in a merged artifact is a structural defect.
- **TPL-06** Skeletons MUST reproduce the header table and required sections of the
  implemented specification exactly, including a Revision History table, so instances are
  born conformant.

### Maintenance

- **TPL-07** A change to a specification's required fields MUST update its template in the
  same change (EVO-03); templates carry their own versions per OAES-SPEC-002.

## Validation

- TPL-04 sections, TPL-05 slot syntax, and TPL-06 mirroring are deterministically
  checkable per [Document Conformance Rules](../63-validators/document-conformance-rules.md).

## Future Extension

- Machine-readable slot manifests (for generator use) may be added alongside skeletons by
  minor change; the markdown skeleton remains authoritative.

## Related Documents

- [Documentation Specification](../01-meta/documentation-specification.md)
- [Tooling Specification](../64-tools/tooling-specification.md)
- [Layer 60 README](README.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
