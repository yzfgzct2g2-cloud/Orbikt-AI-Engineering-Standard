# Normative References

| Field | Value |
| --- | --- |
| Identifier | OAES-REF-002 |
| Title | Normative References |
| Layer | 71-reference |
| Type | Reference |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Register every external document OAES cites, with the exact version cited, so external
references are as stable as internal ones (DOCU-12).

## Scope

- External documents cited normatively or informatively by this standard.

## Non-Scope

- Internal references (INDEX.md).

## Dependencies

- None normative (ARCH-06); serves DOCU-12 informatively.

## Interfaces

- **Inbound:** documents cite externals via this register.
- **Outbound:** the referenced publications.

## Normative references

External documents whose cited parts carry normative force where OAES invokes them:

| Reference | Publication | Version cited | Invoked by |
| --- | --- | --- | --- |
| RFC 2119 | *Key words for use in RFCs to Indicate Requirement Levels*, IETF, 1997 | as published | Constitution Article VII |
| ISO 8601 | *Date and time — Representations for information interchange* | ISO 8601-1:2019 | Constitution Article IX, DOCU-13 |
| SemVer | *Semantic Versioning* | 2.0.0 | VER-01 |

## Informative references

Consulted in design; carrying no normative force:

| Reference | Publication | Relevance |
| --- | --- | --- |
| ISO/IEC/IEEE 42010 | *Systems and software engineering — Architecture description* | Architecture-description discipline behind OAES-SPEC-004 |
| RFC 8174 | *Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words*, IETF, 2017 | The uppercase-only convention adopted in Article VII |

## Rules of this register

- An external citation not listed here is a structural defect (DOCU-12).
- Version upgrades of a referenced publication are minor changes here plus impact review
  of every invoking document.
- Only vendor-neutral, openly accessible publications may be referenced normatively
  (Constitution Article IV).

## Future Extension

- Grows only as new external citations are introduced; shrinking requires deprecating the
  citing text first.

## Related Documents

- [Documentation Specification](../01-meta/documentation-specification.md)
- [Glossary](glossary.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
