# NAKEBUSEN — Brand Implementation Checklist

**Document ID:** NB-BIC-01  
**Version:** M6 · 20 November 2026  
**Status:** Implementation and automated verification baseline · manual release checks outstanding

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

- [x] Hero headline, supporting statement and beauty-first information order match approved copy.
- [x] Enterprise introduction matches approved copy.
- [x] LOCS and DIGITAL are the two obvious service paths.
- [x] LOCS service descriptions and prices match SERVICE-CATALOG.md.
- [x] Sisterlocs Retie label and description are consistent across page, catalogue, facts register and WhatsApp message.
- [x] No braiding or shaving claims.
- [x] DIGITAL capability wording remains scoped and evidence-led.
- [x] Philosophy, GENJE and community copy do not displace service information or reintroduce retired homepage copy.
- [x] Founder public role line includes CTO; founder display-name and copyright evidence statuses remain explicit.
- [x] Enquiry is not described as a confirmed booking.

## 3. Brand and visual system

- [x] Exact lockup, including degree sign, in header and footer.
- [x] Palette tokens match approved hex values.
- [ ] No unrelated colour families remain in active UI styling.
- [x] Typography uses approved roles and fallbacks.
- [x] No external font CDN.
- [x] Decorative artwork and unnecessary visual effects removed.
- [x] Functional icons remain accessible.
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

Implementation state: the homepage structure, external asset separation and consolidated design system are merged to main. Static HTML checks and the browser quality workflow passed on the exact candidate commit. Manual screen-reader, physical-device and live Pages checks remain outstanding.

## 4. Navigation and interaction

- [x] Primary navigation destinations work.
- [x] Anchor targets clear sticky header.
- [x] Language control updates content, accessible labels and document lang.
- [x] Theme control works with system preference and user preference.
- [x] Language and theme controls remain functional when local storage is unavailable.
- [x] Every WhatsApp CTA updates its pre-filled message when the language changes.
- [ ] WhatsApp, telephone and email destinations work.

## 5. Accessibility and responsive testing

- [x] 320, 360, 390, 430, 768, 1024 CSS px and desktop.
- [x] No horizontal overflow.
- [x] Visible focus and keyboard-only operation.
- [ ] Screen-reader review.
- [x] Colour contrast in light and dark themes.
- [x] Reduced-motion support.
- [ ] Zoom and reflow.
- [ ] Accessible labels and state.

## 6. Technical and factual checks

- [x] HTML validation.
- [x] JavaScript syntax and browser console.
- [x] Metadata and canonical URL.
- [ ] Kiswahili translation reviewed for semantic parity.
- [x] Public facts match PUBLIC-FACTS-REGISTER.md.
- [ ] DIGITAL service availability confirmed before stronger claims.
- [x] Linguistic interpretations qualified.
- [x] Copyright attribution remains unchanged pending confirmation.
- [x] No unsupported security, uptime or reproducibility claims.
- [x] No placeholder or broken links.

## 7. Release evidence

Record the exact commit, test date, browsers/devices, routes tested, results, defects and reviewer. Test evidence must refer to the exact release candidate.

- [x] Static HTML checks pass.
- [x] Browser tests pass.
- [ ] Responsive screenshots reviewed.
- [ ] Deployed page checked separately after an authorised merge.
- [ ] Release explicitly authorised.

## 8. Change control and current status

- 19 November 2026: approved AMOLED-first direction implemented on the PR branch: true-black dark-theme canvas, layered charcoal surfaces, warm ivory text, terracotta/ochre accents, and corrected high-contrast WARENA section links. Light theme remains available. Browser accessibility verification is pending; no OLED battery-saving percentage is claimed.

- 18 November 2026: research-led refinements prepared on `fix/nakebusen-site-quality-2026-11-18`: consolidated the stylesheet, aligned hero copy and practice overview to WEBCOPY, corrected Artificial Locs Installation to KES 3,500, made the ONLY NAKEBUSEN TRANSACTS boundary explicit, clarified WARENA's non-checkout role and per-engagement DIGITAL scope, and added automated responsive, interaction, anchor, storage-fallback and axe accessibility coverage. These are implementation changes; test execution and release remain pending.

- Stage A PR #112 was merged to `main` on 9 November 2026 at merge commit `e9a0c4c395a731f7082a80e85f88dfcf22ced64a`.
- This confirms the source merge only; it does not by itself establish successful deployment or independent live-browser verification.
- The research destination is present at `/research/` and is now included in the sitemap. The research index now has a shared theme control and page-specific styling; the Glass Terminal page remains dark-first. Manual screen-reader and physical-device checks remain outstanding.
- Homepage foundation PR #139 and design-system PR #142 are merged. The source changes are not yet deployed; do not label the live site RELEASED until the manual Pages release and post-deployment checks are completed.
- Use a reviewed pull request for material website changes. Do not merge or deploy based solely on a successful commit.
- Keep specification, implementation, testing, verification and release states distinct.


### Homepage copy and research destination — 19 November 2026

- Implemented on review branch `copy/research-page-homepage-refresh-2026-11-19`: aligned the hero lead to the approved practice statement, retained loc care as the primary customer proposition, added a third informational research discovery card, and refined WARENA's scoped technical-services explanation.
- Added `research/index.html` as a dedicated Research & Creative Practice page covering FELOH Corpus, IKAI, GENJE and WARENA, selected scholarly reading, source repositories and evidence principles.
- Updated `README.md` and `docs/WEBCOPY.md` to link and define the new destination. Added `docs/WEBSITE-COPY-RESEARCH-AND-IMPLEMENTATION-2026-11-19.md` as the audit and implementation record.
- Added Playwright expectations for the new hero hierarchy and research page. CI execution is pending.
- **Not verified:** live Pages route, browser rendering, screen-reader behaviour, contrast audit, social previews or production deployment.

- PR #133 was opened against `main` on 19 November 2026. At the time of this record, the GitHub connector returned no workflow runs or combined commit statuses for the PR head; automated checks must be confirmed from the PR Checks tab before merge.


## 9. Verified main-branch implementation snapshot — 20 November 2026

- PR #139 — [separate structure, styles and interactions](https://github.com/donfelohke/donfelohke.github.io/pull/139), merge commit `5303ba247df5a4a77fc26cb36f144f258283569f`.
- PR #142 — [consolidated responsive design system](https://github.com/donfelohke/donfelohke.github.io/pull/142), merge commit `89828556e41f3b5ade9830cb7a764f30b12a7434`.
- Candidate commit tested: `10587cd0fae4dfb16cad7e2c782847eb3c5c47a1`.
- Static HTML workflow #563: passed, run `44789211140`.
- Browser quality workflow #256: passed, run `44789211087`.
- Browser evidence was uploaded by the workflow. This is automated evidence, not a manual screen-reader or physical-device audit.
- GitHub Pages deploy job was skipped under the existing manual release gate. The live site has not been declared updated by these merges.

- PR #144 — [Glass Terminal research experience](https://github.com/donfelohke/donfelohke.github.io/pull/144), merge commit `e8e7a035dbe2f402a3a0a13494ac9f20e942e99b`. This is a research/design page, not a released WARENA/IKAI/GENJE runtime.


## 10. Glass Terminal and research-route implementation snapshot — 20 November 2026

- PR #144 merged the Glass Terminal research presentation and added it to the research index and sitemap. It is labelled RESEARCH / DESIGN DIRECTION, not a released shell, XR platform or hardware implementation.
- The research index shares the homepage's theme preference and remains explicitly English-only; no full Kiswahili translation is claimed.
- The Glass Terminal page is dark-first and static. Its page stylesheet is externalised; no JavaScript runtime or third-party asset dependency is added.
- Homepage Glass Terminal surface refinements are integrated into canonical component rules rather than appended override patches.
- Responsive and automated accessibility coverage for both research routes is part of the current candidate; results are recorded only after the candidate workflow completes.
- Manual screen-reader, physical-device and live Pages checks remain outstanding.
