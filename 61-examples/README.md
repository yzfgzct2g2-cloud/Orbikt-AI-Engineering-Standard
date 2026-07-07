# Layer 61 — Examples

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-61 |
| Title | Examples Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Hold completed, domain-neutral instances of the templates, so authors can see a correctly
filled artifact before writing their own. To stay domain-free, every example takes its
subject from the standard itself.

## Scope

- Filled template instances about OAES's own operation.

## Non-Scope

- Domain, technology, or vendor examples of any kind — forbidden by Constitution
  Article IV. Adopters keep their own examples in their own repositories.
- Normative force (ARCH-06): where an example and a specification disagree, the example
  is defective.

## Responsibilities

- Keep each example synchronized with its template (TPL-07 applies transitively).

## Dependencies

- None normative (enablement band, ARCH-06).

## Interfaces

- **Inbound:** read by authors learning a template.
- **Outbound:** each example instantiates exactly one template.

## Contents

| Document | Identifier | Instantiates |
| --- | --- | --- |
| [example-agent-definition.md](example-agent-definition.md) | OAES-EXA-001 | OAES-TMPL-004 |
| [example-workflow-definition.md](example-workflow-definition.md) | OAES-EXA-002 | OAES-TMPL-005 |
| [example-project-charter.md](example-project-charter.md) | OAES-EXA-003 | OAES-TMPL-008 |

## Future Extension

- One example per template is the target; further examples are added as templates are
  added.

## Related Documents

- [Layer 60 — Templates](../60-templates/README.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
