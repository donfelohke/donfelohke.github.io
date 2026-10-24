# Deployment: GitHub Pages

## Source of truth
- Repository: `donfelohke/donfelohke.github.io`
- Production branch: `main`
- Site entry point: `index.html`
- Workflow: `.github/workflows/pages.yml`

## Expected release path
1. Make substantive changes on a descriptive feature branch.
2. Open a pull request against `main`.
3. Confirm the Static HTML checks workflow passes.
4. Review the diff and merge only when the change is ready.
5. A push to `main` triggers the Deploy GitHub Pages workflow.
6. Confirm the deployment run succeeds and inspect the published URL.

Expected public URL: https://donfelohke.github.io/

## GitHub settings to verify
In repository Settings → Pages, confirm publishing is configured for GitHub Actions. In Settings → Environments, review the `github-pages` environment and its deployment branch restrictions. In Settings → Rules, consider requiring the HTML check for pull requests to `main`.

These settings cannot be inferred from the presence of a workflow file. Record the observed state before reporting that production deployment is configured.

## Permissions
The deployment workflow needs read access to repository contents and Pages deployment permissions. Keep write and OIDC permissions limited to the deployment job where practical. The validation workflow should remain read-only. A basic static Pages deployment should not require a personal access token or a repository secret.

## Failure triage
- If validation fails, inspect the Static HTML checks run and fix the reported issue on a branch.
- If deployment fails, inspect the Deploy GitHub Pages build and deploy jobs.
- If the workflow succeeds but the site appears stale, verify the deployment URL, check the latest successful deployment, and retry after allowing for propagation.
- Never claim a release is live solely because a pull request merged.

## Rollback
Use the recovery procedure in [recovery.md](recovery.md). Keep the rollback change auditable through Git history and a pull request whenever the site is still functioning well enough to follow the normal path.
