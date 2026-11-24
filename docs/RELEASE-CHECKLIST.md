# Website Release Checklist

A specification or passing source test is not proof of deployment. This checklist follows the repository's current `.github/workflows/pages.yml` behaviour.

## Source validation

- [ ] Python standard-library tests pass.
- [ ] One public HTML document; no JavaScript files, scripts or Node dependencies.
- [ ] Internal anchors and local assets resolve.
- [ ] Public prices, location, contacts and payment instructions match the facts register and service-specific source catalogue.
- [ ] Research maturity and commercial boundaries are accurate.
- [ ] Documentation and sitemap match implementation.
- [ ] Review the complete diff for accidental changes to payment details, customer-facing claims or language parity.

## Manual review

- [ ] 320–1440 CSS-pixel responsive review.
- [ ] Light and dark system themes.
- [ ] Keyboard-only operation and visible focus.
- [ ] Screen-reader landmarks and heading hierarchy.
- [ ] Contrast and reduced-motion/transparency review.
- [ ] WhatsApp, telephone and email handoff.
- [ ] M-PESA merchant and amount wording reviewed against the register.
- [ ] Confirm no unapproved checkout, booking, analytics, tracking or third-party runtime has been introduced.

## GitHub Pages publication model

- Pull-request workflows validate the proposed source; they do not publish the site.
- A push to `main` triggers the Pages workflow, which builds and deploys the site when its jobs succeed.
- The workflow also supports `workflow_dispatch` for an authorised manual run. This is an alternative trigger, not a separate mandatory authorisation step after every merge.
- A green validation workflow is not proof that the Pages deployment job completed. Inspect the actual Pages workflow run and deployment result.

## Release evidence

- [ ] Review complete diff and required CI results.
- [ ] Merge to `main` under repository contribution rules.
- [ ] Confirm the Pages workflow triggered for the resulting `main` commit.
- [ ] Confirm build and deployment jobs succeeded; record workflow run URL and deployed commit SHA.
- [ ] Inspect the live homepage and key service, contact, location and payment content.
- [ ] Record post-deployment smoke-test evidence, including representative mobile and desktop checks.

Do not claim a release until the deployment job and live inspection are evidenced.