# NAKEBUSEN Navigation and Brand UI/UX Research

**Revision:** 2026-10-26  
**Scope:** Public single-page GitHub Pages site — navigation, brand hierarchy, mobile header, service discovery and accessibility  
**Status:** Research-led implementation candidate; browser and live deployment verification remain outstanding.

## Executive decision

Keep the site as a lightweight, text-first single page. Make the navigation more descriptive without adding a menu drawer, external assets, analytics, a booking form or new brand divisions. The primary customer journey is loc care → understand starting prices → enquire on WhatsApp → confirm suitability, price and availability directly.

The navigation labels are now explicitly separated from internal section/brand terminology:

| Destination | English | Kiswahili |
|---|---|---|
| Loc-care services | Loc Care | Locs |
| Technology services | Digital | Digital |
| Cultural/creative practice | Culture | Utamaduni |
| Founder context | About | Kuhusu |
| Contact/enquiry | Contact | Wasiliana |

The WhatsApp header action remains the strongest conversion control. Theme and language controls remain text-only and independent. The change adds sticky-header anchor offsets and static regression checks. It does **not** establish that the layout has passed visual testing.

## Repository observations

Reviewed the current `index.html`, `README.md`, `docs/WEB-DESIGN-STANDARDS.md`, and existing static test conventions.

1. **Single-page architecture is appropriate.** The site has five primary destinations and clear service sections. A hamburger menu would add state and hide destinations without a demonstrated information-architecture need.
2. **Previous navigation labels were short but partly internal.** “Systems” and “GENJE” communicate less to a first-time customer than “Digital” and “Culture”. “Founder” is also less conversational than “About”.
3. **The header is space-constrained.** It combines the wordmark, five links, WhatsApp, language and theme controls. Mobile wrapping is allowed; the important requirement is that it remains orderly, readable and free of horizontal overflow.
4. **Sticky-header offsets need explicit attention.** A valid in-page link can still produce a poor experience if the sticky header covers the destination heading. Mobile and desktop offsets are now specified separately.
5. **The canonical brand lockup belongs in the content, not as a compressed header slogan:**  
   **NAKEBUSEN Locs • Digital**  
   **Powered by WARENA**  
   **@donfelohke · #HisGenjeness**
6. **Commercial hierarchy must remain unambiguous.** NAKEBUSEN handles customer enquiries. WARENA is the technical attribution; GENJE is creative/cultural practice; IKAI is research/WIP. Do not let the technical or cultural story displace the loc-care offer.
7. **Language policy: English is the default.** The homepage declares `lang="en"`, the README names English as the default and primary language, and the design standards now align with that decision. Kiswahili remains available via the language toggle. The regression tests check English as the initial language and confirm English remains the fallback if storage is unavailable.

## Brand and conversion hierarchy

### Level 1 — Immediate customer understanding

- Brand: **NAKEBUSEN Locs • Digital**
- Current primary local service context: **Eldoret Town / Karibu Mdosi**
- Service price cues remain starting prices: Retouch & Styling — **KES 700**; Sisterlocs Retie — **KES 1,500**; Artificial Locs Installation — **KES 3,500**.
- Primary action: WhatsApp loc-care enquiry.
- Booking boundary: an enquiry is not a confirmed booking; availability, suitability, final price and appointment details are confirmed directly.

### Level 2 — Secondary service route

**NAKEBUSEN Digital — Powered by WARENA** should describe practical GNU/Linux, networking, repair, infrastructure and local-first systems work. Use a distinct technology enquiry path; do not imply that IKAI is a released product.

### Level 3 — Author and practice

**Felix Lwova · Don Feloh / @donfelohke · #HisGenjeness** provides authorship and context. **GENJE** and **IKAI** remain meaningful names in their sections, but navigation labels should be understandable before a visitor has learned the internal vocabulary.

## Navigation principles applied

- **Plain-language labels:** link text describes the destination.
- **Stable order:** Loc Care → Digital → Culture → About → Contact in both languages.
- **Visible links:** no drawer or hamburger control until user evidence indicates the page needs one.
- **Distinct action:** WhatsApp stays visually distinct from in-page navigation.
- **Independent preferences:** language selection must not reset theme selection, and vice versa.
- **Anchors that land well:** destination headings should not be obscured by the sticky header.
- **Progressive simplicity:** no external fonts, icon fonts, decorative images, trackers or unnecessary JavaScript.
- **Human-centred trust:** no invented reviews, credentials, availability, guaranteed outcomes or fake booking flow.

## Validation matrix

Run in a real browser on the branch and again against the deployed page after release approval. These checks are not implied by static CI.

| Viewport | Required observations |
|---|---|
| 320 × 640 | No horizontal scrolling; controls remain reachable; nav labels wrap without overlap; first section anchors remain visible |
| 360 × 800 | Header hierarchy and primary action remain obvious |
| 390 × 844 | Common Android viewport; check language and theme controls together |
| 430 × 932 | Larger mobile; no excessive whitespace or odd navigation distribution |
| 521 × 900 | Breakpoint transition does not cause a sudden collision |
| 760 × 1024 | Tablet portrait; header and service grid remain coherent |
| 1024 × 768 | Desktop/tablet landscape; nav stays compact |
| 1440 × 900 | Content line length and hierarchy remain controlled |

For each viewport, verify:
- English and Kiswahili labels, full page content and document `lang`.
- Light, dark and system-preference theme states.
- Keyboard-only focus order, visible focus, skip link, and all anchor destinations.
- 200% browser zoom and text resizing without loss of content or functionality.
- Sticky-header anchor positioning after selecting every navigation link.
- WhatsApp links open the correct prefilled language and enquiry purpose; verify actual handoff on a real device.
- Starting prices and booking disclaimer remain visible and consistent.
- No horizontal overflow, clipped focus indicator, duplicate IDs or console errors.
- The deployed source corresponds to the reviewed commit.

## Prioritised release issues

### P0 — Release blockers
1. Keep the English-default policy consistent across homepage, README, standards and tests; change it only through an explicit future decision.
2. Perform actual viewport, keyboard, zoom and theme checks; static tests do not prove rendering.
3. Verify WhatsApp handoff and deployed output.
4. Confirm that all section links land with headings visible beneath the sticky header.

### P1 — Conversion and clarity
1. Retain plain-language labels in both languages.
2. Keep loc care first and technology/culture secondary.
3. Keep the WhatsApp enquiry action distinguishable from navigation links.
4. Preserve the three-line canonical brand lockup and creator signature in content.

### P2 — Refinement after evidence
1. Capture mobile and desktop screenshots at the matrix widths.
2. Gather a small set of real customer tasks (find loc prices, enquire about loc care, find digital services, contact the founder) and observe whether visitors complete them.
3. Change navigation further only when testing identifies a concrete problem; avoid speculative redesign.

## Research references

- W3C, **Web Content Accessibility Guidelines (WCAG) 2.2** — keyboard access, focus visibility, resize text, link purpose, consistent navigation, and minimum target size: https://www.w3.org/TR/WCAG22/
- W3C WAI, **What's New in WCAG 2.2** — focus not obscured and target-size minimum: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- web.dev, **Building the main navigation for a website** — semantic navigation, progressive enhancement, visible links and cautions against unnecessary ARIA menu patterns: https://web.dev/articles/website-navigation
- Baymard Institute, **Mobile navigation best practices** — useful ecommerce benchmark context, not evidence of NAKEBUSEN-specific user behaviour: https://baymard.com/research-articles/ecommerce-navigation-best-practice
- Asili Grooming (Kenya), service-business reference: https://mobixgen.com/portfolio/asili-grooming/
- Braiding Nairobi, local beauty-service reference: https://braidingnairobi.com/

### Evidence limits

The public-site source and repository documents were inspected. The implementation change is deliberately narrow. This research does not claim usability-test results, measured conversion uplift, a WCAG conformance audit, successful browser rendering, live WhatsApp handoff, or deployed-site verification. Competitive examples are references for comparison, not proof that their patterns should be copied.

## Implementation record

This branch updates `index.html` navigation labels and mobile anchor spacing, adds static checks for bilingual labels, and documents the design standard. English is the default; Kiswahili is available through the language toggle. Review the pull request and automated checks before deciding whether to merge. Do not deploy until the browser release gates are resolved.
