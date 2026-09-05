# Decision: Mission-Scoped Autonomous Execution Profile

| Field | Value |
| --- | --- |
| Identifier | OAES-DEC-020 |
| Type | Decision Record |
| Version | 1.0.0 |
| Status | Accepted for the explicit Profile Mission |
| Authority | Repository owner Mission to establish this Profile |
| Date | 2026-09-05 |

## Purpose

Record the explicit owner Mission to establish a small, reusable, tool-agnostic
execution policy that lets an Actor complete authorized engineering work without
repeated approval of ordinary diagnose/repair/verify steps.

## Decision

Adopt [OAES Autonomous Execution Profile](../../AUTONOMOUS_EXECUTION_PROFILE.md)
for explicit Missions, with L1 inspection, default L2 safe engineering, specifically
authorized L3 actions, Human Gates, evidence-backed repair, and a three-different-repair
ceiling per root cause. Include a minimal QA-Engine governance Overlay and tabletop
cases in the same document. No machine-readable configuration or execution engine is
introduced because no current consumer requires it.

[BOOTSTRAP.md](../../BOOTSTRAP.md) remains the single entry point. Add a conditional
explicit-Mission route; routine `continue` still reads only CURRENT_STATE after Git
verification and executes exactly its one Next action. Thin adapters continue to
point to BOOTSTRAP rather than duplicate the policy.

## Compatibility and boundaries

- No Kernel, canonical State, Runtime behavior, or schema change. Mission, autonomy
  level, Overlay, Human Gate, PASS and BLOCKED are governance labels, not new Kernel entities.
- [DEC-014](dec-014-specification-first-authority.md) remains the authority order.
- [DEC-018](dec-018-minimum-continue-card-contract.md) remains the continuation and
  No Blind Retry authority. Zero unchanged-action retries without new evidence and
  the one verified-transient retry restriction remain intact. Up to three materially
  different, evidence-backed code repairs is a ceiling, not a replacement for that
  stricter gate. Exhaustion of the applicable gate stops work even before three.
- [DEC-019](dec-019-owner-controlled-break-glass.md) remains applicable to emergency
  access. This Profile does not authorize credential, security-policy or production
  changes as ordinary local repair.
- Explicit Missions authorize their scoped local engineering work and isolation.
  Push/PR remain separately permissioned. Local completion does not assert a shared
  remote checkpoint. Routine continuation publication rules are unchanged.
- The existing Runtime objective and Continue Card describe the prior routine
  checkpoint. This standalone governance Mission does not run or change Runtime
  state. Its local commit and completion report carry this deliverable; no second
  continuation ledger is introduced.

## Alternatives and consequences

Embedding the full policy in every adapter would duplicate authority. Adding an agent
framework or YAML without a consumer would expand scope. One Profile with a small
embedded Overlay keeps one policy source while leaving project details with adopters.

Human Gates remain mandatory; a project adopting this document must supply its actual
repository, commands, data boundaries and approval route. This policy is not a runtime
enforcement mechanism. No QA-Engine work or other project modification is authorized
by this governance deliverable.

## Validation

Review Profile requirements and replay tabletop A–G plus retry-budget case H.
Run the repository's existing `npm run check:all` after the document changes,
and verify new document links as focused documentation validation. Record actual
results in the completion report; this decision does not itself claim test success.
