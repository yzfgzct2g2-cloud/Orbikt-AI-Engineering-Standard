# Agent Adapter (Codex, ChatGPT, and other Actors)

This repository is the **Orbikt AI Engineering Standard (OAES) v2**.

Follow the single canonical boot protocol in [BOOTSTRAP.md](BOOTSTRAP.md). Do not
assume conversation history; the repository is the only source of truth.

Quick orientation:

- Current state: [CURRENT_STATE.md](CURRENT_STATE.md) and
  [`runtime-state/project.json`](runtime-state/project.json) (machine-readable
  authority).
- Continuation instructions and approval boundaries: [HANDOFF.md](HANDOFF.md).
- Authoritative specification: [spec/](spec/README.md). The Kernel and the four
  Knowledge States are frozen — see [spec/KERNEL.md](spec/KERNEL.md).
- Validate any change with: `cd reference-runtime && npm install && npm run check:all`.

This adapter intentionally contains no governance of its own.
