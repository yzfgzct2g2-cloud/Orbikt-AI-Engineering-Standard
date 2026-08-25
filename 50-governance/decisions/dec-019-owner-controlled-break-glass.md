# Decision: Owner-Controlled One-Time Break Glass

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-019 |
| Title | Emergency access becomes an owner-authorized one-time credential, not a shared password |
| Layer | 50-governance |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted |
| Author | Founding Maintainer (bootstrap, GOV-09) |
| Approved | 2026-08-25 |

## Purpose

Record why the Security Specification gains an Emergency access section (SEC-12 to
SEC-16), and why the target model is an owner-controlled one-time credential rather than
the permanent shared emergency password that most systems ship with.

## Scope

- The normative treatment of emergency privileged access in OAES-governed systems.
- The governance designation *System Owner* as distinct from application administrator
  roles.

## Non-Scope

- Any implementation. This decision changes the standard, not a running system; adopting
  projects migrate on their own schedule under SEC-16.
- Runtime role models of adopting projects. No project is required to create a
  `system_owner` role, in identity policy or anywhere else.

## Dependencies

- [Security Specification](../../43-security/security-specification.md)
- [Governance Specification](../governance-specification.md)
- [Role Register](../role-register.md)

## Interfaces

- **Inbound:** cited by the Security Specification revision history (1.1.0).
- **Outbound:** GOV-03 role register (System Owner is recorded there), ORG-06 escalation,
  SEC-04 secret hygiene.

## Problem

OAES required least privilege (SEC-01), secret hygiene (SEC-04) and incident handling
(SEC-11), but said nothing about the credential that bypasses all of them. In practice
the gap is filled by a shared static password: memorized or stored by one or more humans,
permanent, identical across deployments, and frequently reused between staging and
production. It is the highest-value credential a system holds and the least governed.

Three failure modes follow. The credential is disclosed during ordinary operational work
and never rotated, because nothing says it must be. It authenticates more than one
environment, so a staging convenience becomes a production exposure. And its use leaves
no audit trail distinguishable from a normal login, so the one event most worth
reviewing is the one least visible.

A live example prompted this decision. Emergency access to a staging environment was
needed for a mobile review. The credential had to be disclosed to a human over a chat
channel, which under SEC-04 makes it compromised on disclosure. The operational answer —
issue a short-lived value, hand it over once, rotate it away immediately after use, keep
the resulting session valid — worked, but nothing in the standard required it or would
have caught its absence.

## Options Considered

1. **Leave emergency access unspecified.** Cheapest, and defensible on the grounds that
   it is an implementation concern. Rejected: SEC-01 and SEC-04 already reach into
   implementation where the risk justifies it, and an unspecified break-glass path is
   precisely where least privilege silently fails. Saying nothing is not neutrality here;
   it is a standard that inspects the front door and ignores the key under the mat.
2. **Ban static emergency keys outright.** Strongest signal, and wrong. Removing a working
   break-glass path under deadline is itself an availability risk, and a standard whose
   only compliant move is a risky migration invites quiet non-conformance. Rejected in
   favour of classifying the static key as legacy with a required migration path.
3. **Require an owner-controlled one-time credential as the preferred model, classify the
   static shared key as legacy interim, and mandate ownership, lifecycle audit and
   environment isolation.** Chosen. It states the target design, permits the existing
   mechanism to keep operating under explicit conditions (not routine login, high
   entropy, secret-protected, rotated after any disclosure), and makes the properties
   that actually prevent harm — single use, expiry, isolation, audit — normative now
   rather than aspirational.

## Decision

Adopt option 3. The Security Specification gains SEC-12 to SEC-16 and moves to 1.1.0.

Two boundaries were drawn deliberately:

- **System Owner is a governance designation, not a runtime role** (SEC-12). The same
  human commonly holds both System Owner and application administrator, but a standard
  that assumes they are the same concept cannot express the case where they diverge —
  which is exactly the case that matters when an administrator account is the thing that
  has failed. Recording the designation costs nothing; conflating the two costs the
  distinction permanently.
- **SEC-13 is SHOULD, not MUST.** The properties that follow it are MUST once such a
  credential exists, and SEC-16 makes the legacy path conditional rather than free. A
  MUST on the model itself would have made every adopting system non-conformant on the
  day of publication, which converts a real requirement into ignored text.

## Consequences

- Adopting projects with emergency access must name a System Owner in their role register
  and classify any static emergency key under SEC-16.
- Systems with no emergency access at all are conformant only if that claim is recorded;
  an undocumented shared password is a SEC-13 defect rather than an absence.
- Migration from a static key to a one-time credential is a planned change. SEC-16
  explicitly forbids performing it under release pressure, which is when the temptation
  is highest and the review weakest.
- Conformance review gains checkable questions where it previously had none.

## Decider

Founding Maintainer, under GOV-09 bootstrap mode, holding the Steward seat for layer
43-security and the Maintainer seat required by GOV-02 for a minor single-layer change.
The author-reviewer conflict inherent in bootstrap is recorded per ORG-05.

Per GOV-05, the analysis and drafting were prepared by an agent; the decision was made by
a human. The agent cast no decision and is not a decider of record.

## Related Documents

- [Security Specification](../../43-security/security-specification.md) — SEC-12 to SEC-16
- [Governance Specification](../governance-specification.md) — GOV-02, GOV-05, GOV-09
- [Role Register](../role-register.md) — where System Owner is recorded

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-08-25 | Founding Maintainer (bootstrap, GOV-09) | Initial record. |
