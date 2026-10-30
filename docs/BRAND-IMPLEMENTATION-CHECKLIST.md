# NAKEBUSEN — Brand Implementation Checklist

**Document ID:** NB-BIC-01  
**Version:** M1 · 30 October 2026  
**Status:** Implementation and verification checklist

Status meanings: APPROVED = decision approved; IMPLEMENTED = code changed; TESTED = checks executed; VERIFIED = evidence supports acceptance; RELEASED = deployed and checked.

## 1. Approved M1 decisions

- [x] Homepage H1: Beautiful Roots. Sovereign Systems.
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
- [x] LOCS Retie is the canonical public service label.

These checkboxes record approved decisions, not test results.

## 2. Homepage content

- [ ] Hero headline and supporting statement match approved copy.
- [ ] Enterprise introduction matches approved copy.
- [ ] LOCS and DIGITAL are the two obvious service paths.
- [ ] LOCS service descriptions and prices match SERVICE-CATALOG.md.
- [ ] LOCS Retie replaces Sisterlocks / Sisterlocs terminology.
- [ ] No braiding or shaving claims.
- [ ] DIGITAL capability wording remains scoped and evidence-led.
- [ ] Philosophy, GENJE and community copy are correctly positioned.
- [ ] Founder identity remains provisional where applicable.
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
- [ ] Mobile menu exposes correct expanded state.
- [ ] Escape closes mobile menu and restores focus.
- [ ] More panel opens and closes by keyboard and touch.
- [ ] Anchor targets clear sticky header.
- [ ] Floating dock does not cover content or focus.
- [ ] Language control updates content and document lang.
- [ ] Theme control works with system preference.
- [ ] WhatsApp, telephone and email destinations work.

## 5. Accessibility and responsive testing

- [ ] 320, 360, 390, 430, 760, 1024 CSS px and desktop.
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
- [ ] Kiswahili translation reviewed.
- [ ] Public facts match PUBLIC-FACTS-REGISTER.md.
- [ ] DIGITAL service availability confirmed before stronger claims.
- [ ] Linguistic interpretations qualified.
- [ ] Copyright attribution not changed without confirmation.
- [ ] No unsupported security, uptime or reproducibility claims.
- [ ] No placeholder or broken links.

## 7. Release evidence

Record the exact commit, test date, browsers/devices, routes tested, results, defects and reviewer. Test evidence must refer to the exact release candidate.

- [ ] CI checks reviewed.
- [ ] Browser tests completed.
- [ ] Deployed page checked separately.
- [ ] Release explicitly authorised.

## 8. Change control

Use a reviewed pull request for material website changes. Do not merge or deploy based solely on a successful commit. Keep specification, implementation, testing, verification and release states distinct.

**Current checklist status:** M1 content and implementation changes are proposed in a review branch; deployment and browser verification remain pending.
