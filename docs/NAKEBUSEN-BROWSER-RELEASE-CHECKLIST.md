# NAKEBUSEN — Browser and Release Verification

This checklist remains the manual verification gate for the static one-page site.

## Source and automated validation
- [ ] `python -m unittest discover -s tests -v` passes.
- [ ] One public HTML document and one primary CSS stylesheet.
- [ ] No JavaScript runtime, Node dependencies, trackers or remote fonts.
- [ ] Sitemap and canonical metadata match the homepage.

## Browser review
Review the deployed candidate at 320, 360, 390, 430, 768, 1024, 1280 and 1440 CSS pixels.
- [ ] Header and bottom dock fit and remain usable.
- [ ] No content is hidden behind the dock.
- [ ] Service cards stack correctly on mobile.
- [ ] Light and dark system themes are legible.
- [ ] Kiswahili disclosure opens and closes natively.
- [ ] Keyboard focus remains visible.
- [ ] Reduced motion and reduced transparency preferences are respected.
- [ ] WhatsApp, telephone and email links open the intended destinations.

## Commercial verification
- [ ] All three service labels and prices match the facts register.
- [ ] Location and enquiry-not-booking wording match approved copy.
- [ ] M-PESA Till and merchant name match the published record.
- [ ] PIN/OTP safety instructions are visible.
- [ ] Support Us is separate from service payments.

## Release evidence
Record commit SHA, test run, browser/version, device/viewport, procedure, expected and observed result, defects and retest. Record Pages artifact, separately authorized deployment and live URL inspection as distinct events.

A passing test suite is not proof of visual accessibility or production deployment.
