# OAES v2 State Model

| Field | Value |
| --- | --- |
| Identifier | OAES-V2-STATE |
| Title | OAES v2 Knowledge State Model |
| Type | Specification |
| Version | 2.0.0 |
| Status | Active |
| Authority | Current (OAES v2) |
| Author | OAES Standards Committee |
| Approved | 2026-07-18 |

## The Four Canonical States

State represents Knowledge maturity. The only canonical Knowledge States are:

```text
Unknown
Known
Implemented
Verified
```

| State | Meaning |
| --- | --- |
| Unknown | Required Knowledge is absent, unresolved, or insufficiently grounded. |
| Known | The Knowledge claim is sufficiently established to support the next Action. Known does not necessarily mean implemented or independently verified. |
| Implemented | The Knowledge claim has a concrete implementation or realized artifact. |
| Verified | The claim or implementation has passed its declared verification criteria and may be relied upon within its stated scope. |

- **STA-01** No additional canonical State may be introduced. In particular, the
  following are **not** States: `Hypothesis`, `Decision`, `Specification`, `Pending`,
  `In Progress`, `Blocked`, `Rejected`, `Approved`, `Deprecated`. Those may be
  Knowledge Types, attributes, vocabulary, UI labels, or derived views — never Kernel
  States.
- **STA-02** Knowledge Type and Knowledge State are independent. A `decision` may be
  `Unknown`; a `requirement` may be `Verified`.

## Canonical Transitions

- **STA-03** The standard forward path is:

  ```text
  Unknown → Known → Implemented → Verified
  ```

- **STA-04** Knowledge that does not require implementation
  (`requires_implementation` = `false`, the default; CDM-26) may take the short path:

  ```text
  Unknown → Known → Verified
  ```

- **STA-05** Knowledge with `requires_implementation` = `true` must pass through
  `Implemented`; for such records `Known → Verified` is invalid.
- **STA-06** The complete forward transition table is:

  | From | To | Valid when |
  | --- | --- | --- |
  | Unknown | Known | always |
  | Known | Implemented | always |
  | Known | Verified | only if `requires_implementation` is false |
  | Implemented | Verified | always |

  Every transition not listed here (and not covered by STA-07) is invalid and must be
  rejected — including skips such as `Unknown → Implemented`, `Unknown → Verified`,
  and `Known → Known` self-transitions.

## Backward Transitions (Invalidation)

- **STA-07** Backward transitions occur **only** through an explicit, observable
  `invalidate` Action that records why the prior Knowledge is no longer reliable. An
  invalidation returns the record to `Unknown` and appends to the Action history; it
  never edits or deletes prior Actions.
- **STA-08** `Verified` Knowledge must never be silently mutated backward. Any code
  path that changes a State without recording an Action is non-conformant.

## Validation

- **STA-09** The reference runtime must reject invalid transitions and must carry tests
  for both allowed and rejected transitions, including a mechanical guard that the
  canonical State set is exactly the four States above (KRN-05).

## Related Documents

- [KERNEL.md](KERNEL.md)
- [CANONICAL_DATA_MODEL.md](CANONICAL_DATA_MODEL.md)
- [RUNTIME.md](RUNTIME.md)
- [OAES-DEC-013](../50-governance/decisions/dec-013-four-knowledge-states.md)

## Revision History

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 2.0.0 | 2026-07-18 | OAES Standards Committee | Initial OAES v2 State model. |
