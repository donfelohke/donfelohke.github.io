# NAKEBUSEN — Brand Implementation Checklist

**Document ID:** NB-BIC-01  
**Version:** M3 · 9 November 2026  
**Status:** Implementation and verification checklist

Status meanings: APPROVED = decision approved; IMPLEMENTED = code changed; TESTED = checks executed; VERIFIED = evidence supports acceptance; RELEASED = deployed and checked.

## 1. Approved brand decisions

- [x] Homepage H1: Your Beauty ° Your Way. (approved 9 November 2026; supersedes the M1 editorial-first H1)
- [x] Supporting statement: Craft, technology and culture rooted in African ingenuity.
- [x] Six-colour palette approved.
- [x] Typography strategy approved.
- [x] Text-first graphics policy approved.
- [x] Canonical lockup: NAKEBUSEN Locs ° Powered by WARENA.
- [x] Supporting signature: @donfelohke · #HisGenjeness.
- [x] Two commercial paths: LOCS · CROWN and DIGITAL · WARENA.
- [x] ONLY NAKEBUSEN TRANSACTS.
- [x] GENJE ZA WARENA is governing intention, not a separate commercial division.
- [x] WARENA Systems belongs within DIGITAL.
- [x] IKAI is research, not a released product.
- [x] Sisterlocs Retie is the canonical public service label; KES 1,500+ remains the starting price.
- [x] Public role line: Founder · CTO · Loctician · Creative Technologist.

These checkboxes record approved decisions, not test results.

## 2. Homepage content

- [ ] Hero headline, supporting statement and beauty-first information order match approved copy.
- [ ] Enterprise introduction matches approved copy.
- [ ] LOCS and DIGITAL are the two obvious service paths.
- [ ] LOCS service descriptions and prices match SERVICE-CATALOG.md.
- [ ] Sisterlocs Retie label and description are consistent across page, catalogue, facts register and WhatsApp message.
- [ ] No braiding or shaving claims.
- [ ] DIGITAL capability wording remains scoped and evidence-led.
- [ ] Philosophy, GENJE and community copy do not displace service information or reintroduce retired homepage copy.
- [ ] Founder public role line includes CTO; founder display-name and copyright evidence statuses remain explicit.
- [ ] Enquiry is not described as a confirmed booking.

## 3. Brand and visual system

- [ ] Exact lockup, including degree sign, in header and footer.
- [ ] Palette tokens match approved hex values.
- [ ] No unrelated colour families remain in active UI styling.
- [ ] Typography uses approved roles and fallbacks.
- [ ] No external font CDN.
- [ ] Decorative artwork and unnecessary visual effects removed.
- [ ] Functional icons remain accessible.
- [ ] LOCS photography has documented permission.

## 4. Navigation and interaction

- [ ] Primary navigation destinations work.
- [ ] Anchor targets clear sticky header.
- [ ] Language control updates content, accessible labels and document lang.
- [ ] Theme control works with system preference and user preference.
- [ ] Language and theme controls remain functional when local storage is unavailable.
- [ ] Every WhatsApp CTA updates its pre-filled message when the language changes.
- [ ] WhatsApp, telephone and email destinations work.

## 5. Accessibility and responsive testing

- [ ] 320, 360, 390, 430, 768, 1024 CSS px and desktop.
- [ ] No horizontal overflow.
- [ ] Visible focus and keyboard-only operation.
- [ ] Screen-reader review.
- [ ] Colour contrast in light and dark themes.
- [ ] Reduced-motion support.
- [ ] Zoom and reflow.
- [ ] Accessible labels and state.

## 6. Technical and factual checks

- [ ] HTML validation.
- [ ] JavaScript syntax and browser console.
- [ ] Metadata and canonical URL.
- [ ] Kiswahili translation reviewed for semantic parity.
- [ ] Public facts match PUBLIC-FACTS-REGISTER.md.
- [ ] DIGITAL service availability confirmed before stronger claims.
- [ ] Linguistic interpretations qualified.
- [ ] Copyright attribution remains unchanged pending confirmation.
- [ ] No unsupported security, uptime or reproducibility claims.
- [ ] No placeholder or broken links.

## 7. Release evidence

Record the exact commit, test date, browsers/devices, routes tested, results, defects and reviewer. Test evidence must refer to the exact release candidate.

- [ ] Static HTML checks pass.
- [ ] Browser tests pass.
- [ ] Responsive screenshots reviewed.
- [ ] Deployed page checked separately after an authorised merge.
- [ ] Release explicitly authorised.

## 8. Change control and current status

- Stage A PR #112 was merged to `main` on 9 November 2026 at merge commit `e9a0c4c395a731f7082a80e85f88dfcf22ced64a`.
- This confirms the source merge only; it does not by itself establish successful deployment or independent live-browser verification.
- The current correction branch is `audit/website-accuracy-reconciliation`.
- Current correction work is not merged or released. Do not change this status until the corresponding evidence exists.
- Use a reviewed pull request for material website changes. Do not merge or deploy based solely on a successful commit.
- Keep specification, implementation, testing, verification and release states distinct.
