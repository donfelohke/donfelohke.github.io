# NAKEBUSEN — Brand and Website Implementation Checklist

**Document ID:** NB-BIC-01  
**Version:** M7 · 24 November 2026  
**Status:** Current source baseline · automated checks passed for the latest recorded main candidate · manual live and assistive-technology checks remain outstanding

Status meanings: APPROVED = decision approved; IMPLEMENTED = code changed; TESTED = checks executed; VERIFIED = evidence supports acceptance; RELEASED = deployed and inspected. A checked approval or implementation item is not automatically a verified or released outcome.

## 1. Current approved identity and publication decisions

- [x] Master platform: **NAKEBUSEN · WARENA POWERED**.
- [x] Pillar line: **GRACE · GRIT · GLORY**.
- [x] Public statement: **BEAUTIFUL ROOTS. SOVEREIGN SYSTEMS.**
- [x] Supporting signature: **GENJE ZA WARENA** and **@donfelohke · #HisGenjeness**.
- [x] GRACE → NAKEBUSEN; GRIT → WARENA; GLORY → GENJE / GENJENESS; FELOH remains the human author.
- [x] NAKEBUSEN is the primary customer-facing commercial entry and the only transaction point.
- [x] WARENA is a distinct technical capability domain, not a NAKEBUSEN sub-brand or separate checkout.
- [x] GENJE is creative and embodied practice, not a separate commercial division.
- [x] IKAI is reflective-computing research / work in progress, not a released product.
- [x] FELOH Corpus is shared knowledge, governance and provenance, not a fifth practice domain.
- [x] Public role line: Founder, NAKEBUSEN · Founder & CTO, WARENA · Loctician · Creative Technologist.

## 2. Public offer and factual invariants

- [x] Retouch & Styling — **from KES 700+**.
- [x] Sisterlocs Retie — **from KES 1,500+**.
- [x] Artificial Locs Installation — **KES 3,500**.
- [x] The first two prices are starting prices; Artificial Locs Installation remains fixed at KES 3,500.
- [x] No braiding or shaving.
- [x] The founder does not cut clients' natural hair.
- [x] An enquiry does not confirm a booking; availability and final terms are agreed directly.
- [x] Location wording: Beside King's Square · Kisumu Road · Eldoret Town · Uasin Gishu · Kenya.
- [x] F743+R35 and the supplied map pin are directions references, not a claim of an independently verified street address.
- [x] Loc-care home calls are subject to exact-location, suitability, availability and travel-cost confirmation.
- [x] Digital service capability is scoped per engagement; no unsupported fixed prices, warranties, certifications, uptime or security guarantees.
- [x] Manual M-PESA details and the voluntary Support Us distinction are preserved; changes require separate merchant-authority verification.
- [x] IKAI's “home” meaning is a founder-approved identity statement, not independent linguistic certification.

## 3. Architecture and visual system

- [x] One-page, text-first static publication with section anchors.
- [x] English default and authored Kiswahili language state.
- [x] Three-destination mobile dock: LOCS / DIGITAL / CONNECT.
- [x] Native HTML and CSS; no JavaScript application runtime, framework, package manager, analytics, tracking, remote fonts, CDN or third-party runtime.
- [x] System light/dark preference, reduced-motion and reduced-transparency support are implemented in source.
- [ ] Complete manual contrast review across all foreground/background and interaction states.
- [ ] Complete physical-device visual review, including OLED/dark and light themes.
- [ ] Confirm text scaling, zoom and reflow at supported viewport sizes.
- [ ] Confirm touch-target behaviour and safe-area layout on target devices.

## 4. Navigation, language and interaction

- [x] Primary anchor destinations and floating dock are implemented.
- [x] CSS-only language control switches between authored English and Kiswahili content states.
- [ ] Document-level html lang remains en in the static implementation; assess whether this limitation is acceptable for assistive technology or requires a separately approved language-routing solution.
- [x] Light/dark presentation follows the operating-system prefers-color-scheme setting.
- [x] No user-controlled theme toggle or preference storage is implemented; do not describe one as present.
- [x] WhatsApp enquiry messages are language-aware.
- [ ] Complete manual keyboard-only review on current desktop and mobile browsers.
- [ ] Complete TalkBack and at least one desktop screen-reader review.
- [ ] Verify real WhatsApp, telephone and email handoff from target devices.

## 5. Automated verification

- [x] Static HTML/source validation workflow passed for the latest recorded main candidate.
- [ ] No browser-automation workflow is configured on current main; current automated checks are dependency-free Python source tests.
- [x] GitHub Pages build/deploy workflow passed for the latest recorded main candidate.
- [ ] Re-run and record source/browser workflows for this documentation-only pull request.
- [ ] Confirm the Pages deployment commit and inspect the live page after merge.

Latest recorded workflow evidence before this revamp:
- Static validation: https://github.com/donfelohke/donfelohke.github.io/actions/runs/46066203895
- GitHub Pages build/deploy: https://github.com/donfelohke/donfelohke.github.io/actions/runs/46066203873

These runs relate to the 27 November 2026 main commit, not to this revamp branch. Update this evidence only after the new pull request and deployment workflows complete.

Automated browser and accessibility checks do not replace manual screen-reader, physical-device, real-network handoff or live-page review.

## 6. Release and governance

- [x] Material changes are prepared through reviewed pull requests.
- [x] GitHub Pages deploys on pushes to `main`; pull-request checks do not publish.
- [x] `workflow_dispatch` is available as an alternative workflow trigger.
- [ ] Verify required status checks and branch protection/rulesets on the repository settings.
- [ ] Record live post-deployment inspection for the current public page.
- [ ] Establish a backup maintainer and periodic access review.
- [ ] Test repository backup, recovery and publishing procedures.
- [ ] Review historical branches for unique work before considering deletion.

## 7. Current source-of-truth documents

- `docs/PUBLIC-FACTS-REGISTER.md` — approved public facts and evidence classes.
- `docs/SERVICE-CATALOG.md` — current public services, prices, scope and booking boundary.
- `docs/WEBCOPY.md` — approved website copy and translation rules.
- `CHANGELOG.md` — material publication and documentation changes.
- `docs/RELEASE-CHECKLIST.md` — current Pages workflow and release evidence.
- `docs/ROADMAP.md` — remaining site and stewardship work.
- `docs/WEBSITE-AUDIT-DISCREPANCY-REGISTER.md` — historical findings plus current resolution record.

Historical design briefs and audit recommendations remain provenance records. Do not treat superseded hero copy, lockups, prices, location wording or architecture as current requirements.

## 8. Change-control rules

- Keep source facts, approved copy, implementation, automated tests, manual verification and deployment as separate states.
- A price or service-scope change must update the NAKEBUSEN source catalogue, this repository's facts register, service catalogue, website copy and page in one reviewed change set.
- Do not alter payment details without separate owner verification of merchant authority and payment purpose.
- Do not introduce checkout, appointment booking, payment automation, tracking, analytics, a JavaScript runtime or third-party runtime without a separate explicit decision and review.
- Do not delete historical branches or audit records until unique work and provenance have been assessed.

**Release status:** The source and automated workflow evidence are established. Manual live-page, screen-reader and physical-device checks remain open; this checklist does not certify WCAG conformance, current merchant authority or service availability.
