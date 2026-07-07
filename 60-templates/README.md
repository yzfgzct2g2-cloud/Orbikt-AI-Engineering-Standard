# Layer 60 — Templates

| Field | Value |
| --- | --- |
| Identifier | OAES-LAYER-60 |
| Title | Templates Layer |
| Type | Layer Definition |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Provide reusable document skeletons that implement the specifications, so that authors
start every artifact structurally correct instead of reconstructing the rules by hand.

## Scope

- The Template Specification and all OAES templates.

## Non-Scope

- Normative force: templates implement requirements; the requirements live in the
  specifications (ARCH-06). Deleting every template would remove convenience, not meaning.

## Responsibilities

- Keep every template synchronized with the specification it implements.

## Dependencies

- None normative (enablement band, ARCH-06). Each template informatively implements the
  specification named in its header.

## Interfaces

- **Inbound:** authors copy templates; generators (layer 62) instantiate them.
- **Outbound:** each template mirrors the required fields of exactly one specification.

## Contents

| Document | Identifier | Implements |
| --- | --- | --- |
| [template-specification.md](template-specification.md) | OAES-SPEC-019 | — |
| [tmpl-001-document.md](tmpl-001-document.md) | OAES-TMPL-001 | OAES-SPEC-003 |
| [tmpl-002-specification.md](tmpl-002-specification.md) | OAES-TMPL-002 | OAES-SPEC-003 |
| [tmpl-003-decision-record.md](tmpl-003-decision-record.md) | OAES-TMPL-003 | OAES-SPEC-017 |
| [tmpl-004-agent-definition.md](tmpl-004-agent-definition.md) | OAES-TMPL-004 | OAES-SPEC-006 |
| [tmpl-005-workflow-definition.md](tmpl-005-workflow-definition.md) | OAES-TMPL-005 | OAES-SPEC-007 |
| [tmpl-006-knowledge-artifact.md](tmpl-006-knowledge-artifact.md) | OAES-TMPL-006 | OAES-SPEC-008 |
| [tmpl-007-memory-record.md](tmpl-007-memory-record.md) | OAES-TMPL-007 | OAES-SPEC-009 |
| [tmpl-008-project-charter.md](tmpl-008-project-charter.md) | OAES-TMPL-008 | OAES-SPEC-011 |
| [tmpl-009-change-request.md](tmpl-009-change-request.md) | OAES-TMPL-009 | OAES-SPEC-018 |
| [tmpl-010-review-record.md](tmpl-010-review-record.md) | OAES-TMPL-010 | OAES-SPEC-012 |

## Future Extension

- New templates are added with the next free OAES-TMPL number whenever a specification
  gains a recurring artifact type.

## Related Documents

- [Template Specification](template-specification.md)
- [Layer 61 — Examples](../61-examples/README.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
