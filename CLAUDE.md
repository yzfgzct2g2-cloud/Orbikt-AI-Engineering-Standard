# Claude Code Adapter

This repository is the **Orbikt AI Engineering Standard (OAES) v2**.

Follow the single canonical boot protocol in [BOOTSTRAP.md](BOOTSTRAP.md). Do not
assume conversation history; the repository is the only source of truth.

Quick orientation:

- Routine `continue`: verify Git as directed by BOOTSTRAP.md, then read only
  [CURRENT_STATE.md](CURRENT_STATE.md), the bounded Continue Card.
- [`runtime-state/project.json`](runtime-state/project.json) remains machine-readable
  Runtime authority; [HANDOFF.md](HANDOFF.md) is conditional governance.
- Authoritative specification: [spec/](spec/README.md). The Kernel and the four
  Knowledge States are frozen — see [spec/KERNEL.md](spec/KERNEL.md).
- Validate a relevant change once with: `cd reference-runtime && npm run check:all`.

This adapter intentionally contains no governance of its own.
