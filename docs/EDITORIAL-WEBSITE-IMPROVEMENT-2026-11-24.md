# Editorial website improvement — 24 November 2026

**Repository:** `donfelohke/donfelohke.github.io`  
**Implementation branch:** `feat/editorial-brand-led-website-2026-11`  
**Publication model:** static GitHub Pages; branch review before merge  
**Scope:** historical brand hierarchy, homepage editorial copy, conversion path, responsive visual refinement and publication checks.  
**Current implementation authority:** Superseded for hero hierarchy and first-screen composition by [Front-Page Portal — Consolidated Design, Copy and Standards Research](../research/FRONT-PAGE-PORTAL-DESIGN-COPY-AND-STANDARDS-2026-11-24.md). Keep its technical, commercial and release constraints where they remain consistent.

## Governing identity

**NAKEBUSEN × WARENA POWERED**  
**GRACE · GRIT · GLORY**  
**BEAUTIFUL ROOTS. SOVEREIGN SYSTEMS.**  
**@donfelohke · #HisGenjeness**

NAKEBUSEN remains the only customer-facing transaction and booking point. WARENA is the distinct systems and infrastructure capability domain; GENJE is creative and embodied practice; IKAI is reflective-computing research; FELOH is the human author and connective philosophy. These roles must not be collapsed into multiple storefronts.

## Editorial architecture

1. **Hero:** NAKEBUSEN × WARENA POWERED, the approved signature, a concise proposition, direct NAKEBUSEN WhatsApp enquiry and a clear route to loc services.
2. **NAKEBUSEN LOCS:** loc care first; service scope, approved prices, location, WhatsApp, enquiry steps and the enquiry-is-not-a-booking disclosure.
3. **WARENA / DIGITAL:** practical GNU/Linux, computer, network and infrastructure capability; explain the problems addressed and the reuse/adapt/implement principle. State that scope and availability are confirmed per engagement.
4. **FELOH / ABOUT:** identify the human author and explain the relationship among the practices without making unsupported biographical or institutional claims.
5. **IKAI / MIRROR:** retain research and work-in-progress status; human agency and consent remain explicit.
6. **GENJE / EXPRESSION:** Genge-rooted sound, E-Genge, livecoding, algorithmic improvisation, movement, Laban-informed inquiry and choreohacking; creative practice, not a shop.
7. **FELOH CORPUS:** source records, decisions and project repositories.
8. **CONNECT / FOOTER:** one clear business contact path; preserve manual payment safeguards and keep voluntary support distinct from service payments.

## Design system

Retain the existing ivory, forest, ochre/gold and terracotta palette; Cormorant Garamond / system sans / monospace typography; text-first editorial composition; restrained glass surfaces; English/Kiswahili native controls; light/dark preference; and three-item mobile dock. Improve hero scale, contrast, line length, information grouping and mobile stacking without introducing a generic template.

## Technical constraints

- Keep the publication native HTML and CSS; no JavaScript runtime, framework, analytics, trackers, remote fonts or third-party runtime.
- Preserve semantic landmarks, one H1, fragment integrity, visible focus, skip link, language attributes, reduced-motion and reduced-transparency support, and safe-area-aware navigation.
- Preserve the existing service prices and scope, phone, email, location, payment details and safety disclosures.
- No booking form, automated booking confirmation, checkout, payment API, STK push or automated payment-success claim.
- Label research and provisional capabilities honestly; do not imply a prototype is a released product.

## Verification and release gates

- Run `python -m unittest discover -s tests -v`.
- Check heading hierarchy, unique IDs, fragment links, language switching, mobile dock, service prices, enquiry destinations and payment boundaries.
- Inspect 320, 360, 390, 768, 1024 and 1440 px layouts.
- Perform keyboard, screen-reader, reduced-motion, reduced-transparency and light/dark checks.
- Verify GitHub Actions and GitHub Pages separately. A source commit or passing unit test does not prove that the live site has updated.
- Merge only after reviewing the complete pull-request diff and release checks.