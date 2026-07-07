# Maintenance Guide

| Field | Value |
| --- | --- |
| Identifier | OAES-GUIDE-003 |
| Title | Maintenance Guide |
| Layer | 70-documentation |
| Type | Guide |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Equip a future maintainer — possibly one who has never met the authors — to keep this
standard healthy: what to check routinely, how to change things safely, and which
invariants must never be traded away.

## Scope

- Maintenance practice for this repository. Informative; the stewardship-band
  specifications prevail.

## Non-Scope

- Maintenance of adopting projects.

## Dependencies

- None normative (ARCH-06).

## Interfaces

- **Inbound:** read by Maintainers and Stewards.
- **Outbound:** summarizes the governance and evolution layers.

## The invariants

If you preserve nothing else, preserve these; each is constitutionally anchored:

1. **Nothing normative names a vendor, model, language, or framework** (Article IV). The
   day one does, the standard's ten-year clock resets.
2. **Every change goes through the change workflow** (EVO-02, EVO-09) — including yours,
   including "trivial" ones. The workflow is cheap; untracked drift is not.
3. **Records are append-only** (Article VI, MEM-03, DEC-05). Fix forward, supersede,
   archive — never rewrite history. Sole exception: personal-data removal (PRV-09).
4. **Identifiers are forever** (NAM-03). Never reuse, never renumber.
5. **Humans decide** (Article V). Agents may draft anything; no gate exits on an agent's
   say-so.

## Routine duties

- **On every change:** run the layer-63 rule sets before and after integration (EVO-03);
  verify the INDEX.md entry, version bump, and revision-history row moved together.
- **Per edition:** pin document versions in [CHANGELOG.md](../CHANGELOG.md) (VER-07),
  collect migration statements (EVO-04), review Deprecated items against their withdrawal
  editions (VER-11).
- **Periodically:** confirm the role register is current (GOV-03) — decisions under a
  stale register are voidable; re-verify knowledge artifacts past their validity dates
  (KNO-05); confirm the standard's own conformance review is within its interval (the
  [example charter](../61-examples/example-project-charter.md) shows the commitment).

## Making structural changes

Growth is designed in — use the extension points rather than bending structure:

- New document in an existing layer: allocate the next identifier (NAM-05), register it in
  INDEX.md, done.
- New layer: free number within a band, minor change to OAES-SPEC-004, decision record,
  README (ARCH-10, ARCH-11).
- New band: major change; band 8x is reserved first.
- Retiring anything: Deprecated for at least one edition, then to
  [90-archive](../90-archive/README.md) (EVO-05, EVO-10).

## When judgment is needed

The specifications decide most questions mechanically. When they do not: precedence order
resolves conflicts (Article I); a concern fitting two layers gets a decision record, not
duplication (ARCH-02); re-argued decisions are closed by pointing at their record
(GOV-06). If genuinely novel, write the decision record first — the next maintainer will
face it again.

## Future Extension

- Grows with maintainer experience; candidate content comes from recurring review
  findings.

## Related Documents

- [Evolution Specification](../51-evolution/evolution-specification.md)
- [Governance Specification](../50-governance/governance-specification.md)
- [CONTRIBUTING.md](../CONTRIBUTING.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
