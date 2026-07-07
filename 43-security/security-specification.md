# Security Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-015 |
| Title | Security Specification |
| Layer | 43-security |
| Type | Specification |
| Version | 1.0.0 |
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

## Validation

- SEC-04 (secret scanning) and SEC-06 (history attribution) are deterministically
  checkable; SEC-01/SEC-02 access minimality and SEC-08 boundary discipline are
  conformance-review checks.

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
