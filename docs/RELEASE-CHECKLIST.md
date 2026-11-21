# Website Release Checklist

A specification or passing source test is not proof of deployment.

## Source validation
- [ ] Python standard-library tests pass.
- [ ] One public HTML document; no JavaScript files, scripts or Node dependencies.
- [ ] Internal anchors and local assets resolve.
- [ ] Public prices, location, contacts and payment instructions match the facts register.
- [ ] Research maturity and commercial boundaries are accurate.
- [ ] Documentation and sitemap match implementation.

## Manual review
- [ ] 320–1440 CSS-pixel responsive review.
- [ ] Light and dark system themes.
- [ ] Keyboard-only operation and visible focus.
- [ ] Screen-reader landmarks and heading hierarchy.
- [ ] Contrast and reduced-motion/transparency review.
- [ ] WhatsApp, telephone and email handoff.
- [ ] M-PESA merchant and amount wording reviewed against the register.

## Release
- [ ] Review complete diff and CI result.
- [ ] Merge to main under repository contribution rules.
- [ ] Authorize Pages deployment separately through the existing manual workflow.
- [ ] Record deployed commit SHA and Pages result.
- [ ] Inspect the live homepage and key contact/payment content.
- [ ] Record post-deployment smoke-test evidence.

Do not claim a release until deployment and live inspection are evidenced.
