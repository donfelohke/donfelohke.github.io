# Front-Page Portal — Consolidated Design, Copy and Standards Research

**Date:** 24 November 2026  
**Status:** Consolidated research and design direction; implementation proposal, not yet deployed  
**Repository:** `donfelohke/donfelohke.github.io`  
**Programme:** [FELOH Corpus issue #78](https://github.com/donfelohke/feloh-corpus/issues/78)  
**Scope:** Public front page / portal, information architecture, visual system, copy, navigation, source notes and international accessibility/search standards

## 1. Executive decision

**Keep one page. Redesign it as a task-first editorial service portal.**

The current single-page architecture is sound: it gives visitors a route to NAKEBUSEN loc care, WARENA technical capability, founder context, IKAI research, GENJE creative practice, FELOH Corpus records and Connect. A second route or separate portal is not justified by the evidence presently available. The public page should be the front door and orientation layer; specialist repositories remain the detailed research and source-of-record destinations.

The page should answer, in this order:

1. What is offered?
2. Where is it offered?
3. What are the published prices?
4. How does someone enquire?
5. What other technical, research and creative work exists?

The brand signature remains important, but it must not delay the practical offer.

## 2. Audit baseline

### 2.1 Current source

Inspected current `main`:
- `index.html`
- `assets/css/site.css`
- `docs/WEBCOPY.md`
- `docs/PUBLIC-FACTS-REGISTER.md`
- `docs/NAV-STRUCTURE.md`
- `docs/EDITORIAL-WEBSITE-IMPROVEMENT-2026-11-24.md`
- `docs/WEBSITE-EDITORIAL-DESIGN-COPY-AND-PAGE-PLAN-2026-11-24.md`
- `research/DESIGN-RESEARCH-AND-REFERENCE-AUDIT-2026-11-24.md`
- `research/COPY-AND-CONTENT-RESEARCH-AUDIT-2026-11-24.md`
- NAKEBUSEN's current service catalogue.

### 2.2 Current strengths

- Single-page static HTML/CSS publication; English default and authored Kiswahili alternate.
- Current service cards, exact approved prices, service-specific WhatsApp enquiry links and booking disclosure.
- WARENA capability is separate from NAKEBUSEN loc-care services.
- IKAI is labelled research / work in progress; GENJE is creative practice.
- Founder authorship, FELOH Corpus and current specialist research are discoverable.
- Manual M-PESA safeguards and separate voluntary Support Us treatment remain in the footer.
- Floating LOCS / DIGITAL / CONNECT navigation, skip link, semantic landmarks, language attributes, reduced-motion and reduced-transparency support are present.

### 2.3 Main issues

1. **Hero hierarchy:** H1 is “Beautiful Roots. Sovereign Systems.” The practical proposition “Professional loc care in Eldoret. Practical computing and network support.” is subordinate. Brand recognition is strong, but task recognition should be faster.
2. **Hero density:** five identity rows appear before the service section. They are individually valid, but the complete architecture competes with the offer and price cues.
3. **Service discovery:** prices are present, but visitors must move beyond a tall hero before comparing the three services.
4. **CSS maintainability:** the stylesheet has successive historical hero and visual overrides. Consolidate into one token/component system rather than adding another override layer.
5. **Reference design:** research links are present, but a consistent citation/source-note pattern is not yet defined across research cards and longer records.
6. **Navigation validation:** the floating dock already exists. Its presence is not proof that it behaves well at 320 CSS px, 400% zoom, keyboard focus, landscape or assistive technology.
7. **Deployment evidence:** source on `main` is inspected. A fresh public browser capture was unavailable in this audit; live appearance and deployment remain unverified.

### 2.4 Changelog and proposal reconciliation

- The website is the only repository with a root `CHANGELOG.md` at that exact path among the ten repositories checked. A repository-wide GitHub code search for `CHANGELOG` returned no matching file in the other nine repositories. Those repositories still have commits, PRs and local change records; do not mistake absence of a root file for absence of history.
- The website changelog previously placed new 24 November entries before its `# Changelog` heading. This record normalises that ordering.
- Keep Git commits and PRs as detailed history. Do not duplicate every commit into ten separate hand-maintained logs.
- Merged single-page, factual-correction, bilingual-footer, glass-style, research-index and copy-standard changes remain valid foundations.
- Closed/unmerged proposals are historical unless explicitly reinstated. Website PR #165's icon-only control proposal is not current: main retains native EN/SW radio controls and the LOCS / DIGITAL / CONNECT dock.
- Older hero/page proposals conflict in emphasis. The latest canonical identity copy is the five-identity architecture: FELOH is human authorship, not a fifth practice. NAKEBUSEN, WARENA, IKAI and GENJE remain distinct practice domains.
- Existing editorial page-plan documents remain useful, but their recommendations must be reconciled to current source facts and current identity decisions rather than copied verbatim.

## 3. Governing identity and facts

Preserve:
- **NAKEBUSEN · WARENA POWERED**
- **GRACE · GRIT · GLORY**
- **BEAUTIFUL ROOTS. SOVEREIGN SYSTEMS.**
- **GENJE ZA WARENA**
- **@donfelohke · #HisGenjeness**
- **ONLY NAKEBUSEN TRANSACTS.**

Roles:
- NAKEBUSEN — loc care, beauty, heritage, craft and the only customer-facing transaction interface.
- WARENA — distinct technical capability and systems engineering.
- IKAI — reflective-computing research / work in progress, not a released product.
- GENJE — creative and embodied practice.
- FELOH — human authorship and creative direction, not a fifth practice.
- FELOH Corpus — shared canon, governance, evidence and provenance.

Approved loc-care prices:
- Retouch & Styling — **KES 700**
- Sisterlocs Retie — **KES 1,500**
- Artificial Locs Installation — **KES 3,500**

Do not add plus signs or “from”. Do not invent service inclusions, hours, availability, guarantees, credentials or testimonials. No braiding or shaving. The founder does not cut clients' natural hair.

Location: Beside King's Square on Kisumu Road, Eldoret Town, Uasin Gishu County, Kenya; supplied directions reference F743+R35 and the owner-provided map pin. Home calls may be arranged across the wider Eldoret Town service area only after confirming exact location, suitability, availability and travel costs.

An enquiry does not confirm a booking. Availability, scope and final terms are agreed directly. Manual M-PESA information is for agreed service payments only; verify merchant name and amount before entering a PIN. Never share a PIN or one-time code. No API, STK push, automated verification, checkout or payment-success state. Voluntary Support Us remains separate from service payment.

## 4. Recommended page architecture

### Hook / Line / Sinker

**Hook — immediate relevance**
- NAKEBUSEN identity and loc-care proposition.
- Eldoret location.
- Three service names and approved prices.
- Primary enquiry and secondary services/prices action.
- Brand signature as the supporting identity layer.

**Line — explanation and trust**
- LOCS service detail and enquiry process.
- WARENA capability and per-engagement scope caveat.
- Concise founder/authorship narrative.
- Compact four-practice map with FELOH as author.
- IKAI, GENJE and FELOH Corpus pathways with maturity labels and dated research links.

**Sinker — action and reference detail**
- Practical directions and contact methods.
- Conditional home-call details.
- Booking, payment and support disclosures.
- Credits, source references, copyright and repository links.

### Top / Middle / Footer

**Top**
1. Slim brand header and native EN/SW control.
2. Task-first hero proposition.
3. Short service list and visible price cue.
4. Primary loc-care enquiry and secondary services/prices anchor.
5. Brand signature and concise WARENA capability cue.

**Middle**
1. Three LOCS service cards with exact prices, brief scope and specific enquiry actions.
2. Booking sequence and enquiry-not-booking disclosure.
3. DIGITAL / WARENA capability with clear scope and availability qualification.
4. Don Feloh authorship, concise biography and philosophy.
5. Four-practice map.
6. IKAI research, GENJE creative practice and FELOH Corpus/source index.

**Footer**
1. Connect, location and directions.
2. WhatsApp, phone and email.
3. Manual service-payment instructions and safety warning.
4. Separate voluntary Support Us.
5. Repository/source credits and copyright.

## 5. Copy direction

This is the preferred copy direction for implementation, subject to final bilingual editorial review.

### Hero

**Eyebrow:** NAKEBUSEN · WARENA POWERED  
**H1:** Loc care in Eldoret.  
**Lead:** Retouch & Styling, Sisterlocs Retie and Artificial Locs Installation.  
**Supporting line:** Practical GNU/Linux, computer and network support through WARENA.  
**Brand signature:** Beautiful Roots. Sovereign Systems. · GRACE · GRIT · GLORY  
**Primary CTA:** Enquire about loc care  
**Secondary CTA:** View services & prices

Where the viewport permits, show the three exact published prices in a compact first-screen service cue. Do not force a dense price table into a narrow hero; retain a clean route to the service cards.

### Services

Keep each card's anatomy consistent:
- service name
- exact published price
- one factual sentence describing the scope
- service-specific enquiry link

Do not invent inclusions. Keep additional work/materials and final scope caveat adjacent to the service decision.

### WARENA

**Heading:** Freedom is a system.  
**Lead:** Practical GNU/Linux, computer and network support for individuals, homes, businesses and organisations.  
**Scope cue:** Each engagement is assessed around the equipment, requirements and intended outcome. Scope and availability are confirmed directly through NAKEBUSEN.

### Founder

**Lead:** I'm Felix Lwova, known as Don Feloh.  
**Body direction:** I work across loc care, systems engineering, reflective research, sound and movement. NAKEBUSEN is the grounded enterprise; WARENA develops technical capability; IKAI holds reflective-computing research; GENJE carries creative practice. FELOH Corpus records shared sources and decisions.

Keep biography human, situated and concise. Avoid repeating the full brand constitution in every section.

### Research and creative work

Use a consistent structure:
- name and domain
- one-sentence proposition
- status label
- what the linked record contains
- descriptive link with date

Examples of status: RESEARCH / WORK IN PROGRESS; CREATIVE PRACTICE; DOCUMENTATION; VALIDATED only when evidence exists. Do not label a research protocol as a tested prototype or released product.

## 6. Visual system and interaction

**Direction:** Rooted Editorial Service Portal — a distinct NAKEBUSEN service front door with the broader FELOH practice ecosystem behind it.

Retain:
- warm ivory and near-black reading surfaces
- forest-green technical surfaces
- ochre/gold and terracotta as restrained accents
- Cormorant Garamond for display, Inter/system sans for reading and controls, JetBrains Mono/system monospace for metadata
- asymmetric editorial grid, strong hierarchy and generous negative space
- glass only for the topbar and floating dock; all hero, price, service and payment content surfaces remain opaque

Improve:
- shorten the hero's visual height
- make the practical offer visually dominant
- move detailed practice taxonomy below the main service choice
- show the service-price cue sooner
- make service cards consistent
- reduce repeated paragraphs and repeated location/contact instructions
- consolidate CSS and remove obsolete selectors after confirming they are unused
- maintain opaque fallbacks and legible text surfaces

Avoid generic luxury templates, decorative code clutter, stock imagery, unapproved client photographs, generic cultural motifs, remote fonts, tracking, unnecessary motion and external runtime dependencies.

### Floating navigation

Retain exactly three destinations: **LOCS / DIGITAL / CONNECT**.

Acceptance:
- keyboard reachable in logical order
- visible focus with sufficient contrast
- 44px-class primary touch targets
- safe-area-aware placement
- anchor offsets account for the fixed topbar
- dock never fully obscures keyboard focus or primary content
- static/non-fixed fallback at narrow or highly zoomed layouts if the fixed dock consumes reading space
- no second competing desktop/mobile navigation layer
- no unsupported active-scroll state; use only behaviour that works within the static/no-JavaScript architecture

## 7. Footnotes, citations and source notes

Do not impose print-style numbered footnotes on ordinary service or marketing copy.

- Service exclusions, booking terms, price conditions and payment warnings belong inline beside the decision they affect.
- Research claims should link to contextual “Sources & further reading” blocks at the end of the relevant research section.
- Longer technical/research records should use a structured references list with creator/organisation, title, publication date/version, source URL, access/review date where useful, and a short relevance note.
- Attribute creative assets and third-party work clearly; preserve creator credit and provenance.
- Use numbered linked note markers only when traceability materially helps. Test keyboard and screen-reader navigation in both directions.
- Distinguish primary standards, scholarly literature, vendor documentation, community reports and founder-provided context. A citation is not proof that a proposed system has been implemented or validated.

## 8. International standards and research basis

### Accessibility — WCAG 2.2

Use WCAG 2.2 AA as the engineering target; do not claim conformance until a full audit is completed.

- Reflow without loss of content/function at 320 CSS px (including 400% zoom context).
- Text contrast: 4.5:1 for normal text and 3:1 for large text.
- Pointer target minimum: 24×24 CSS px under WCAG 2.2 AA, subject to stated exceptions. Keep 44×44px-class controls for important touch navigation as a stronger design target.
- Keyboard focus must be visible and not fully obscured by fixed author content.
- Use semantic landmarks, logical heading hierarchy, meaningful link purpose, language attributes and skip navigation.
- Verify EN and SW language states independently.
- Respect reduced-motion and reduced-transparency preferences.

### Content design

- Front-load the most important user information.
- Use descriptive headings and concrete action labels.
- Prefer one clear sentence over layered abstract language where visitors need operational facts.
- Make each section answer a visitor task.
- Translate for meaning and local usage, not word-for-word symmetry.

### Search presentation

- Keep the document title, H1, visible offer, Open Graph title and metadata consistent.
- Use a unique, concise title that accurately identifies NAKEBUSEN, loc care and Eldoret.
- Keep meta description factual; search engines may derive snippets from page content instead.
- No keyword stuffing or unsupported local-service claims.

### Performance

Measure real performance rather than infer it from a small static source tree. Use Core Web Vitals at the 75th percentile for mobile and desktop where field data exists:
- LCP ≤ 2.5 seconds
- INP ≤ 200 milliseconds
- CLS ≤ 0.1

Do not claim current performance targets are met without measurements.

### Primary references

- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- W3C WAI, [Understanding Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow).
- W3C WAI, [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).
- W3C WAI, [Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum).
- W3C WAI, [Page Structure Tutorial](https://www.w3.org/WAI/tutorials/page-structure/).
- GOV.UK, [Create a clear structure for your content](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/).
- GOV.UK Design System, [Styles, components and patterns](https://design-system.service.gov.uk/).
- Google Search Central, [Influencing title links](https://developers.google.com/search/docs/appearance/title-link).
- Google Search Central, [Core Web Vitals and Search](https://developers.google.com/search/docs/appearance/core-web-vitals).

## 9. Implementation and validation gates

### Source and automated checks
- Run `python -m unittest discover -s tests -v`.
- One page-level H1, semantic landmarks, unique IDs and valid fragment targets.
- EN/SW selector and complete language-state checks.
- Exact prices, service labels, conditional home-call wording and enquiry boundary.
- Payment safety, manual-only boundary and Support Us separation.
- Canonical identity and research status labels.
- All source links resolve; no stale or duplicate navigation.
- No JavaScript runtime, remote fonts, analytics, trackers or new external runtime dependencies.

### Manual verification
- Widths: 320, 360, 390, 430, 760, 1024 and desktop.
- 200% and 400% zoom / reflow.
- Keyboard-only operation, visible focus and fixed-dock obstruction.
- Screen-reader landmarks, headings, language changes and link purpose.
- Light/dark, reduced motion and reduced transparency.
- Contrast sampling on actual rendered surfaces, including translucent fallback cases.
- Android Chrome and at least one desktop browser.
- Field or lab performance measurements, clearly labelled.
- GitHub Pages deployment and public page inspection, separately from source merge.

### Research limitations

This is source-grounded desk research. No recruited visitor testing, live conversion data, search-query data, screen-reader session, human Kiswahili review, fresh public browser capture or WCAG conformance audit was completed here. Those are explicit future validation gates.

## 10. Decision log

- Keep the one-page static portal; do not create a new repository or separate portal route.
- Make “Loc care in Eldoret.” the task-first H1; retain “Beautiful Roots. Sovereign Systems.” as the signature.
- Keep all three published prices exact and visible near the service entry.
- Keep WARENA capability secondary and separately scoped.
- Keep IKAI research, GENJE creative practice, FELOH authorship and Corpus governance distinct.
- Keep the LOCS / DIGITAL / CONNECT floating dock, with a tested narrow/zoom fallback.
- Use inline operational disclosures and contextual research references, not decorative footnote clutter.
- Consolidate CSS rather than stacking overrides.
- Preserve **ONLY NAKEBUSEN TRANSACTS.**


## 11. Proposal and discrepancy reconciliation

The current disposition of historical website proposals and the Phase 1 discrepancy register is maintained in [Website Proposal and Discrepancy Disposition — 24 November 2026](WEBSITE-PROPOSAL-AND-DISCREPANCY-STATUS-2026-11-24.md). That record distinguishes current decisions, superseded proposals, implemented source changes, partially resolved findings and manual verification still outstanding.

The active visual rule is now explicit: **glass belongs to navigation; information belongs on opaque surfaces.** The hero price panel is an opaque forest surface. Decorative hero circles and radial artwork are removed. The forest gradient remains as a restrained background surface. This is aligned with the native-experience specification and is covered by source regression checks.

The standalone research-page proposal is not current: no `research/index.html` exists in the repository and the Pages workflow stages only the root homepage and primary stylesheet. The single page exposes dated research links in context; repository documents remain the deeper source records.
