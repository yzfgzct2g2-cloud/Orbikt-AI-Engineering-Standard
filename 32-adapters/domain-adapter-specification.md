# Domain Adapter Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-030 |
| Title | Domain Adapter Specification |
| Layer | 32-adapters |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the Domain Adapter: the one lawful home for everything Constitution Article IV
bans from the core — domain knowledge, technology guidance, organizational conventions —
packaged so that a thousand projects across every domain can run on one unchanging core.

## Scope

- Structure, conformance, versioning, and registration of adapters.

## Non-Scope

- Adapter content (external and adopter-owned by definition).
- Adopter project rules (OAES-SPEC-011; adapters serve projects, they are not projects).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Knowledge Specification](../20-knowledge/knowledge-specification.md)
- [Enterprise Specification](../13-enterprise/enterprise-specification.md)
- [Discovery Specification](../31-discovery/discovery-specification.md)

## Interfaces

- **Inbound:** discovery classification (DSC-03) and project charters (ADP-07) select
  adapters; the enterprise adapter registry lists them.
- **Outbound:** the core extension points an adapter may fill (ADP-02 table).

## Requirements

### Definition and isolation

- **ADP-01** A *domain adapter* is an external, versioned package binding OAES to a
  domain, technology, or organizational context. Adapters live in their own
  repositories; nothing in this repository ever contains or references a specific
  adapter (Constitution Article IV). The dependency is strictly one-way: an adapter pins
  a core edition (VER-07); the core knows only that adapters exist.
- **ADP-02** An adapter MAY fill exactly these core extension points, and MUST declare
  which it fills:

  | Extension point | Core anchor |
  | --- | --- |
  | Classification taxonomies | DSC-03 |
  | Question banks | DSC-05, DSC-07 |
  | Constraint catalogs | DSC-09 |
  | Risk catalogs | DSC-10 |
  | Knowledge base seeds | KNO-01 to KNO-11 |
  | Domain validation rule sets | TOOL-09 pattern |
  | KPI defaults | MET-02 |
  | Glossary extensions | DOCU-14 pattern |
  | Agent definition profiles | AGT-03 pattern |
  | Workflow definition profiles | WFL-01 pattern |

  New extension points are added to this table by minor change to this specification —
  which is the *only* way the set grows.

### Content rules

- **ADP-03** Adapter artifacts follow the core's meta rules: identified (NAM pattern with
  the adapter's own namespace), versioned (VER), structured (DOCU), and validated (the
  core rule sets apply to adapter documents).
- **ADP-04** An adapter MAY be domain-specific and even technology-specific — that is
  its purpose — but its artifacts MUST still satisfy every core requirement that applies
  to their kind: adapter knowledge has provenance and validity, adapter agents have
  authority boundaries, adapter workflows have gates.
- **ADP-05** An adapter MUST NOT weaken any core requirement (the PRJ-04 rule applied to
  adapters); it may only add and strengthen. A conflict between an adapter and the core
  invalidates the adapter clause (Constitution Article I applied transitively).

### Versioning and registration

- **ADP-06** Adapters version independently under their own SemVer, MUST declare the
  core edition they pin, and MUST publish a migration statement when moving between core
  editions (EVO-04 pattern).
- **ADP-07** A project declares its adapters (name, version, pinned core edition) in its
  charter; an enterprise lists its approved adapters in the adapter registry (ENT-10).
  Using an unregistered adapter is an exception to be recorded, not a convenience.
- **ADP-08** An adapter reimplementing a *core* concern (rather than extending it) is a
  signal of a core gap: it MUST be reported as an improvement item (IMP-01) rather than
  silently shipped — this is how the core learns from the field.

## Extension Points

- The ADP-02 table is this specification's own extension point; everything else about
  adapters extends in adapter space, not here.

## Metrics

- Adapter coverage (projects using registered adapters / projects needing domain
  content); adapter lag (adapters pinned to superseded core editions); core-gap reports
  filed per ADP-08.

## Failure Modes and Recovery

- *Core leakage* (domain content committed to the core): blocked by neutrality review
  and the validators' neutrality scan; recovery is relocation to an adapter and a defect
  record.
- *Adapter sprawl* (many overlapping adapters for one domain): an enterprise governance
  concern — the adapter registry (ADP-07) makes it visible; recovery is consolidation
  under the knowledge single-sourcing rule (KNO-02) at adapter scope.
- *Frozen adapters* (pinned to ancient editions): visible as adapter lag; recovery is
  scheduled adapter maintenance as an enterprise SOP (ENT-08).

## Validation

- Declarations (ADP-02, ADP-06, ADP-07) are deterministically checkable in charters and
  registries; ADP-05 non-weakening is a content-review check during adapter admission.

## Future Extension

- Adapter certification (independent conformance review of adapters as products) and a
  public adapter index are expected v3 work.

## Related Documents

- [Discovery Specification](../31-discovery/discovery-specification.md)
- [Project Specification](../30-projects/project-specification.md)
- [OAES-DEC-008 — Domain adapter isolation](../50-governance/decisions/dec-008-domain-adapter-isolation.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
