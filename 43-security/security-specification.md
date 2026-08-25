# Security Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-015 |
| Title | Security Specification |
| Layer | 43-security |
| Type | Specification |
| Version | 1.1.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the security duties that keep OAES-governed engineering trustworthy: least
privilege, secret hygiene, record integrity, and controlled trust in agents, tools, and
inbound content. The threat model assumes both classic attackers and the newer failure
mode of over-trusted automation.

## Scope

- Security of the engineering process, its repositories, stores, agents, and tools.

## Non-Scope

- Security requirements of delivered products (written by adopters using OAES forms).
- Personal-data duties ([Privacy Specification](../42-privacy/privacy-specification.md)).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Agent Specification](../11-capabilities/agent-specification.md)
- [Project Specification](../30-projects/project-specification.md)

## Interfaces

- **Inbound:** agent definitions (AGT-06) and tool qualifications (TOOL-04) embed the
  duties below; escalations route per ORG-06.
- **Outbound:** roles, authority boundaries, project declarations.

## Requirements

### Least privilege

- **SEC-01** Every human role, agent, and tool MUST operate with the minimum access
  required for its declared duties; access not derivable from a declared duty MUST be
  removed.
- **SEC-02** An agent's effective access MUST NOT exceed its declared authority boundary
  (AGT-06); granting an agent broader access "for convenience" is a blocking defect.
- **SEC-03** Write access to the authoritative repositories of a standard or project MUST
  be limited to Maintainers; all other contributions arrive through the reviewed change
  path.

### Secrets

- **SEC-04** Secrets (credentials, keys, tokens) MUST NOT appear in any OAES-governed
  artifact: not in documents, knowledge, memory records, contexts, or examples. A secret
  that appears is treated as compromised and rotated.
- **SEC-05** Contexts assembled for agents MUST NOT contain secrets; a task requiring an
  agent to authenticate is designed so the secret stays outside the agent's context.

### Integrity of records

- **SEC-06** Repositories and stores MUST preserve attributable history: every change to
  an artifact is traceable to an identified human (directly or via ORG-03
  accountability), and history cannot be silently rewritten.
- **SEC-07** Released editions (VER-07) MUST be integrity-protected such that any
  alteration after release is detectable.

### Trust boundaries

- **SEC-08** Content entering from outside the project's trust boundary — including
  documents, data, and any material retrieved from external sources — is untrusted input.
  It MUST NOT be treated as instruction: an agent's task and authority come only from its
  agent definition and assigned context, never from the content it processes.
- **SEC-09** Tools and agents are admitted to OAES-governed work only after qualification
  per the [Tooling Specification](../64-tools/tooling-specification.md) and agent
  evaluation (AGT-13); unqualified helpers are outside the trust boundary regardless of
  convenience.
- **SEC-10** Dependencies of qualified tools (their own upstream components) MUST be
  identifiable and their provenance recorded, so a compromise upstream can be traced to
  every affected artifact.

### Incidents

- **SEC-11** A suspected security compromise MUST be recorded and escalated immediately
  per ORG-06; artifacts produced under a compromised agent, tool, or credential are
  quarantined from gates until re-verified.

### Emergency access

Emergency privileged access is the path taken when normal authentication is unavailable
and the system must still be reachable. It is the highest-value credential a system
holds, and the one most often left as a permanent shared password.

- **SEC-12** A system requiring emergency privileged access MUST name a **System Owner**:
  the human accountable for authorizing that access. System Owner is a *governance*
  designation recorded in the role register (GOV-03), not a runtime role. It MUST NOT be
  assumed identical to any application administrator role — the same human may hold both,
  but a standard that conflates them cannot express least privilege at the boundary where
  it matters most.
- **SEC-13** Emergency access SHOULD NOT rely on a human-memorized, permanent, shared
  password as its normal model. The preferred design is an **owner-controlled one-time
  emergency credential**, authorized by the System Owner, which:
  - is scoped to one environment and one stated purpose;
  - is generated from a cryptographically secure random source;
  - carries a short time-to-live and expires automatically if unused;
  - is usable at most once and is invalidated atomically on successful use;
  - is held server-side only as a verifier or hash where the architecture permits;
  - is never placed in a URL or query string, never logged, never committed, and never
    included in release evidence (SEC-04 applies without exception);
  - never becomes a routine login method.
- **SEC-14** Every emergency-credential lifecycle event MUST be auditable as
  `BREAK_GLASS_CREATED`, `BREAK_GLASS_USED`, `BREAK_GLASS_EXPIRED`, or
  `BREAK_GLASS_REVOKED`. Audit records carry classifications and metadata only — never
  the credential, and never a value from which it could be recovered.
- **SEC-15** Emergency access MUST be isolated per environment: staging emergency access
  cannot authenticate production, and production emergency access cannot authenticate
  staging. Secret material, issuance, audit, revocation, and scope are separate; a
  break-glass credential is never reused across environments.
- **SEC-16** A static shared emergency key is a **legacy interim** implementation of
  SEC-13. It MAY remain where removing it would create operational risk, but it MUST NOT
  be used for routine login, MUST remain high entropy, MUST be protected as a secret, and
  MUST be rotated after any intentional human disclosure. Its migration to an
  owner-controlled one-time credential is a recorded improvement item, planned as a
  separate change rather than performed under release pressure.

## Validation

- SEC-04 (secret scanning) and SEC-06 (history attribution) are deterministically
  checkable; SEC-01/SEC-02 access minimality and SEC-08 boundary discipline are
  conformance-review checks.
- SEC-14 audit-event presence and SEC-15 environment separation are deterministically
  checkable wherever emergency access exists; SEC-12 ownership, SEC-13 credential design,
  and SEC-16 legacy classification are conformance-review checks. A system claiming no
  emergency access satisfies SEC-12 to SEC-16 only if that claim is itself recorded — an
  undocumented shared password is a SEC-13 defect, not an absence.

## Future Extension

- An informative threat catalog for AI-assisted engineering, and hardening profiles per
  conformance level, may be added as companion documents.

## Related Documents

- [Agent Specification](../11-capabilities/agent-specification.md)
- [Tooling Specification](../64-tools/tooling-specification.md)
- [Privacy Specification](../42-privacy/privacy-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.0. |
| 1.1.0 | 2026-08-25 | Founding Maintainer (bootstrap, GOV-09) | Added the Emergency access requirements SEC-12 to SEC-16 (owner-controlled one-time break glass, System Owner designation, lifecycle audit, environment isolation, legacy static-key classification) per [OAES-DEC-019](../50-governance/decisions/dec-019-owner-controlled-break-glass.md). Analysis prepared by an agent; decided by a human per GOV-05. |
