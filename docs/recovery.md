# Recovery and rollback

## First principles
Git history is the source of truth. Do not force-push `main`, rewrite history to hide an incident, or commit credentials while troubleshooting. Preserve the GPL-3.0 licence and keep the human maintainer responsible for public decisions.

## Diagnose
1. Open the repository Actions tab.
2. Inspect the most recent Static HTML checks run.
3. Inspect the most recent Deploy GitHub Pages run, including both build and deploy jobs.
4. Compare the deployed commit with the latest intended commit on `main`.
5. Check repository Settings → Pages if no deployment run is occurring.

## Roll back a bad content release
1. Identify the last known-good commit in the repository history.
2. Prefer a revert commit or a focused corrective change on a new branch.
3. Open a pull request against `main`.
4. Wait for required checks, review the diff and merge.
5. Confirm a new Pages deployment succeeds and verify the published URL.

Avoid resetting or force-pushing the production branch. A revert keeps the incident and recovery visible in the audit trail.

## If a secret is exposed
1. Revoke or rotate the credential immediately at the issuing service.
2. Review logs and usage for suspicious activity.
3. Remove the secret from active files and prevent reintroduction.
4. Follow GitHub's guidance for removing sensitive data from history if needed; history rewriting alone does not revoke a credential.
5. Do not copy the exposed value into an issue, pull request or chat.

## Incident record
Record the affected URL or workflow, approximate time, impact, commit or run identifier, corrective action, verification performed and remaining uncertainty. Do not include private customer data or secret values.
