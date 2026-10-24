# Operations

## Change workflow
1. Update from main.
2. Create a descriptive feature branch.
3. Make a focused change and update docs.
4. Run HTML checks and inspect mobile/desktop.
5. Open a PR with summary, evidence, tests and limitations.
6. Merge after review/checks and verify Pages deployment.

## GitHub Pages
In Settings → Pages select GitHub Actions. Inspect Actions, verify the workflow succeeds, then open the public URL. A workflow file alone does not prove publication.

## Rollback
Identify the last known-good commit and revert through a new commit/PR. Do not force-push main. Re-run checks and verify deployment.

## Access recovery
Sign into GitHub as repository owner. Review Settings → Applications → Installed GitHub Apps. Ensure the intended app is installed for donfelohke and includes donfelohke.github.io. Reconnect/reauthorize ChatGPT if prompted. Verify the connector can list the repository before writes. Never share passwords, recovery codes, private keys or tokens in chat.
