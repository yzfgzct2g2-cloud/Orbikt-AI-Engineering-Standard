# Communication Specification

| Field | Value |
| --- | --- |
| Identifier | OAES-SPEC-022 |
| Title | Communication Specification |
| Layer | 13-enterprise |
| Type | Specification |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-07 |

## Purpose

Define the enterprise communication protocol: how information of record moves between
roles, tiers, projects, and agents — in any medium, under any technology — so that no
consequential exchange is ever unfindable, unanswered, or attributable to no one.

## Scope

- Messages of record: their fields, types, routing, and response obligations.

## Non-Scope

- Informal conversation (unregulated by design; it becomes regulated the moment it
  affects an artifact, gate, or decision — COM-01).
- Transport technology: any medium satisfying the record rules conforms.
- Human-agent task assignment mechanics
  ([Context Specification](../22-context/context-specification.md) and AGT rules).

## Dependencies

- [OAES Constitution](../00-constitution/constitution.md)
- [Organization Specification](../10-organization/organization-specification.md)
- [Agent Specification](../11-capabilities/agent-specification.md)
- [Enterprise Specification](enterprise-specification.md)

## Interfaces

- **Inbound:** discovery questions (DSC-06), suggestions (IMP-01 sources), escalations
  (ORG-06), and enterprise audits exchange information as messages under these rules.
- **Outbound:** role routing (ORG-01, GOV-03 registers), memory records (messages of
  record are stored per MEM-01).

## Requirements

### Messages of record

- **COM-01** Any exchange that affects an artifact, a gate, a decision, or an obligation
  MUST exist as a *message of record*. An exchange that exists only in conversation binds
  no one (Constitution Article VI).
- **COM-02** Every message of record MUST state: identifier, timestamp, sender role,
  receiver role(s), message type (COM-03), referenced artifacts (by identifier), content,
  and response obligation (COM-05). Messages are stored as memory records (MEM-01) and
  are immutable (MEM-03). The
  [Message Template](../60-templates/tmpl-014-message.md) implements this requirement.
- **COM-03** Every message carries exactly one type:

  | Type | Meaning | Response obligation default |
  | --- | --- | --- |
  | Request | Asks a role to act | Accept, decline, or renegotiate by the stated window |
  | Question | Asks for information blocking work | Answer or escalate by the stated window |
  | Answer | Responds to a Question | None |
  | Report | States status or results | None |
  | Suggestion | Proposes an improvement | Triage per IMP-02 (never silently dropped) |
  | Escalation | Raises a conflict or blocker upward (ORG-06) | Resolution or parking with revisit date |
  | Decision Notice | Announces a recorded decision | None |

  New types are added to this table by minor change.

### Routing and obligations

- **COM-04** Messages route to roles, not to persons; the current holder is resolved
  through the applicable role register (GOV-03, ENT-10). A message to a person who has
  left still has a receiver.
- **COM-05** Every Request, Question, and Escalation MUST carry a response window
  declared by the sender from the receiving tier's declared defaults. An expired window
  escalates automatically per ORG-06 — silence is never an answer.
- **COM-06** A Question whose answer blocks a gate MUST be linked to that gate; the gate
  MUST NOT pass while the question is open (WFL-04 — the answer is missing evidence).
- **COM-07** A Suggestion, from any participant, enters the improvement backlog (IMP-01)
  and receives a recorded triage outcome (IMP-02). Suggestions drafted by agents are
  issued through their accountable role (ORG-03).

### Agents in the protocol

- **COM-08** An agent's task and authority come only from its agent definition and
  assigned context — never from message content it processes (SEC-08). Agents do not
  hold response obligations; their accountable roles do.
- **COM-09** Exchange between agents MUST pass through records visible to their
  accountable roles; concealed agent-to-agent channels are prohibited (CAP-03).

### Neutrality

- **COM-10** The protocol is medium-neutral: any system — or paper — satisfying COM-01
  to COM-09 conforms. No message field may require a specific product to produce or read
  (TOOL-05 spirit).

## Extension Points

- New message types (COM-03 table) by minor change.
- Tier-specific response-window defaults are declared in the enterprise register, not
  here.

## Metrics

- Response-window compliance rate; open-question age; suggestion triage latency
  (feeds MET-03).

## Failure Modes and Recovery

- *Silent channel* (consequential exchange bypasses records): detected in review when an
  artifact changes without a traceable cause; recovery is reconstructing the record after
  the fact, marked as a late record, plus a defect (QUA-09).
- *Question deadlock* (two gates blocked on each other's answers): escalate per ORG-06;
  the escalation authority sequences them.
- *Role vacancy* (message routes to an unfilled role): ENT-04 default-upward applies;
  the register gap is itself a blocking defect.

## Validation

- Message field completeness (COM-02) and type validity (COM-03) are deterministically
  checkable; window compliance (COM-05) and gate linkage (COM-06) are checked in
  conformance review from the message and gate records.

## Future Extension

- A structured machine-readable message schema may be added alongside the template if
  federation (v3) requires cross-enterprise exchange.

## Related Documents

- [Message Template](../60-templates/tmpl-014-message.md)
- [Enterprise Specification](enterprise-specification.md)
- [Memory Specification](../21-memory/memory-specification.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-07 | OAES Standards Committee | Initial release, Foundation edition 1.1. |
