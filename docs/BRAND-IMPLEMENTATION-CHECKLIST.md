# NAKEBUSEN — Brand Implementation Checklist

**Document ID:** NB-BIC-01  
**Version:** M5 · 19 November 2026  
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

### AMOLED-first theme decision — 19 November 2026

- [x] Dark theme uses a true-black `#000000` page canvas for OLED displays.
- [x] Dark theme uses layered `#151515` card surfaces and the established forest-green WARENA section.
- [x] Warm ivory `#F2EFEA` is the primary dark-theme text colour; muted warm grey `#B8B0A5` is reserved for secondary text.
- [x] Terracotta `#E2725B`, ochre `#D4AF37` and forest green `#173D32` for primary brand actions and `#033500` for the WARENA surface provide restrained brand accents in dark mode.
- [x] Light theme remains a complete, user-selectable warm-paper experience.
- [x] Green-section supporting text and links use accessible high-contrast ivory.
- [ ] Verify all foreground/background pairs with automated WCAG 2.2 AA checks and manual review.
- [ ] Measure real-device OLED power behaviour; do not publish a fixed battery-saving claim.

Implementation state: AMOLED token changes and WARENA-section contrast correction are implemented on the PR branch. Automated verification is pending.

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

- 19 November 2026: approved AMOLED-first direction implemented on the PR branch: true-black dark-theme canvas, layered charcoal surfaces, warm ivory text, terracotta/ochre accents, and corrected high-contrast WARENA section links. Light theme remains available. Browser accessibility verification is pending; no OLED battery-saving percentage is claimed.

- 18 November 2026: research-led refinements prepared on `fix/nakebusen-site-quality-2026-11-18`: consolidated the stylesheet, aligned hero copy and practice overview to WEBCOPY, corrected Artificial Locs Installation to KES 3,500, made the ONLY NAKEBUSEN TRANSACTS boundary explicit, clarified WARENA's non-checkout role and per-engagement DIGITAL scope, and added automated responsive, interaction, anchor, storage-fallback and axe accessibility coverage. These are implementation changes; test execution and release remain pending.

- Stage A PR #112 was merged to `main` on 9 November 2026 at merge commit `e9a0c4c395a731f7082a80e85f88dfcf22ced64a`.
- This confirms the source merge only; it does not by itself establish successful deployment or independent live-browser verification.
- The 19 November copy and research-page revision is on `copy/research-page-homepage-refresh-2026-11-19`; it is reviewed in [PR #133](https://github.com/donfelohke/donfelohke.github.io/pull/133) and is not yet released.
- Current implementation work is not merged or released. Do not change this status until the corresponding evidence exists.
- Use a reviewed pull request for material website changes. Do not merge or deploy based solely on a successful commit.
- Keep specification, implementation, testing, verification and release states distinct.


### Homepage copy and research destination — 19 November 2026

- Implemented on review branch `copy/research-page-homepage-refresh-2026-11-19`: aligned the hero lead to the approved practice statement, retained loc care as the primary customer proposition, added a third informational research discovery card, and refined WARENA's scoped technical-services explanation.
- Added `research/index.html` as a dedicated Research & Creative Practice page covering FELOH Corpus, IKAI, GENJE and WARENA, selected scholarly reading, source repositories and evidence principles.
- Updated `README.md` and `docs/WEBCOPY.md` to link and define the new destination. Added `docs/WEBSITE-COPY-RESEARCH-AND-IMPLEMENTATION-2026-11-19.md` as the audit and implementation record.
- Added Playwright expectations for the new hero hierarchy and research page. CI execution is pending.
- **Not verified:** live Pages route, browser rendering, screen-reader behaviour, contrast audit, social previews or production deployment.

- PR #133 was opened against `main` on 19 November 2026. At the time of this record, the GitHub connector returned no workflow runs or combined commit statuses for the PR head; automated checks must be confirmed from the PR Checks tab before merge.
