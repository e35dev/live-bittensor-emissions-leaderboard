# Contributing

<!-- builderloops:contributing -->
## How to contribute to this repository

This product is built one step at a time by an automated maintainer that turns the product vision into a working product through your contributions. Read this before opening a pull request.

### Work the one active step
At any moment there is exactly **one** open issue labeled `bl:active-step`. That issue is the only work being accepted right now. It describes what to build and a clear **Acceptance** (definition of done). Find it in this repo's Issues filtered by the `bl:active-step` label.

### Open a pull request that completes that step
- Your PR must fully satisfy the active step's Acceptance, and reference it (for example, "Closes #<number>").
- Keep it focused: do that step and nothing unrelated.

### Your PR is run, not just read
Every PR is checked out and executed in a sandbox: it must build, the existing tests must still pass, and the repo's acceptance checks (see `.builderloops/verify.json` if present) must pass. A PR that does not build, breaks tests, or fails acceptance is closed automatically. Make sure it genuinely works.

### What gets merged, what gets closed
- The best PR that completes the active step and passes review and execution is merged. When it merges, the step closes and the maintainer opens the next step.
- PRs that do something other than the active step are closed, even if the work is good. Wait until that work becomes the active step.
- A PR is merged only when it clearly completes the step and its benefit outweighs the added complexity; otherwise it is closed with a specific reason.

### Labels
This repo does not require Gittensor scoring labels on merged PRs. The maintainer may use operational labels such as active-step labels only for workflow control.
<!-- /builderloops:contributing -->
