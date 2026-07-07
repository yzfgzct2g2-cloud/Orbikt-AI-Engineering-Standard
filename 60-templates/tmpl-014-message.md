# Template: Message of Record

| Field | Value |
| --- | --- |
| Identifier | OAES-TMPL-014 |
| Title | Message of Record Template |
| Layer | 60-templates |
| Type | Template |
| Implements | OAES-SPEC-022 (Communication Specification, COM-02) |
| Version | 1.0.0 |
| Status | Active |
| Author | OAES Standards Committee |
| Approved | 2026-07-08 |

## Purpose

Record one message of the enterprise communication protocol — request, question, answer,
report, suggestion, escalation, or decision notice — with routing, references, and
response obligation (COM-02, COM-03).

## Scope

- The skeleton for messages of record in any medium.

## Non-Scope

- Informal conversation (unregulated until it affects an artifact, gate, or decision —
  COM-01).

## Responsibilities

- A filled instance is accountable for being answerable: a named receiver role, a stated
  obligation, and references precise enough to act on.

## Inputs

- The message type (COM-03), the receiving role from the applicable role register
  (COM-04), and the scope's response-window defaults (COM-05).

## Outputs

- An immutable memory record (MEM-01/MEM-03) that routes work, blocks gates (COM-06), or
  feeds the improvement backlog (COM-07).

## Interfaces

- **Inbound:** copied whenever a consequential exchange occurs.
- **Outbound:** mirrors COM-02 required content.

## Dependencies

- None normative (TPL-02).

## Validation

- Field completeness and type validity are deterministically checkable (COM-02, COM-03).

## Future Extension

- A machine-readable schema variant if cross-enterprise federation requires one.

## Related Documents

- [Communication Specification](../13-enterprise/communication-specification.md)
- [Memory Record Template](tmpl-007-memory-record.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.0.0 | 2026-07-08 | OAES Standards Committee | Initial release, Foundation edition 1.1. |

## Skeleton

```markdown
# Message: {{short-subject}}

| Field | Value |
| --- | --- |
| Identifier | {{message-id}} |
| Timestamp | {{yyyy-mm-ddThh:mm:ssZ}} |
| Type | {{request-question-answer-report-suggestion-escalation-decision-notice}} (COM-03) |
| Sender role | {{role}} |
| Receiver role(s) | {{roles-resolved-via-role-register}} (COM-04) |
| References | {{artifact-and-record-identifiers}} |
| Response obligation | {{obligation-and-window-or-none}} (COM-05) |
| Blocks gate | {{gate-reference-or-none}} (COM-06) |
| In reply to | {{message-id-or-none}} |

## Content

{{the-exchange — for-questions:-what-decision-the-answer-unblocks;
for-suggestions:-the-proposal-and-its-expected-benefit;
for-escalations:-the-conflict,-what-was-tried,-and-what-is-requested}}
```
