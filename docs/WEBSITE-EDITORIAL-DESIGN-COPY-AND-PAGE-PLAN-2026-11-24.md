# Website Editorial, Design Copy and Page Plan

**Date:** 24 November 2026  
**Status:** Proposed refinement for the active website review  
**Publication model:** One static, text-first page with anchored editorial sections  
**Visual direction:** African Desert editorial × Ghetto-Luxe Dark Academia × Silicon Savannah neo-naturalism  
**Technical baseline:** Native HTML and CSS; no application framework or JavaScript runtime.

## 1. Page recommendation

**Keep one page. Improve the editorial journey.**

The current site already has the right structural foundation: a NAKEBUSEN-led hero, LOCS, DIGITAL / WARENA, ABOUT, IKAI, GENJE, FELOH CORPUS and CONNECT. A second top-level page would add navigation and maintenance cost without solving a demonstrated user problem.

Use the existing About section as the human and philosophical centre. Link from it to the [F3L0H Sovereign Master Corpus](https://github.com/donfelohke/feloh-corpus/blob/main/docs/F3L0H-SOVEREIGN-MASTER-CORPUS-2026-11-20.md). Keep the home page focused on discovery, clear service information and credible introductions to the research and creative domains.

### Proposed reading order

1. **Hero — NAKEBUSEN · WARENA POWERED**  
   Immediate identity, concise proposition, location and primary NAKEBUSEN enquiry.
2. **LOCS — ROOT / GRACE**  
   Services, published prices, scope, location, enquiry process and booking disclosure.
3. **DIGITAL — WARENA / CAPABILITY**  
   Customer problems, potential outcomes, reuse/adapt/implement principle and per-engagement scope.
4. **ABOUT — DON FELOH / F3L0H**  
   Human author, situated practice, worldview and relationship among the domains.
5. **IKAI — MIRROR**  
   Research proposition, participant authority, consent and work-in-progress status.
6. **GENJE — EXPRESSION**  
   Genge, sound, livecoding, movement and choreohacking; no commercial CTA.
7. **FELOH CORPUS — KNOWLEDGE**  
   Canon, sources, decisions and evidence; link to the foundational case.
8. **CONNECT / FOOTER**  
   One business contact path, location, manual payment safeguards and distinct voluntary support.

## 2. Copy hierarchy

### Master lockup

**NAKEBUSEN · WARENA POWERED**  
**GRACE · GRIT · GLORY**  
**BEAUTIFUL ROOTS. SOVEREIGN SYSTEMS.**  
**GENJE ZA WARENA**  
**@donfelohke · #HisGenjeness**

### Short public description

NAKEBUSEN brings together professional loc care and practical technology services in Eldoret Town, Kenya. Loc care leads; technical work is scoped through NAKEBUSEN with WARENA systems capability.

### About proposition

One human author connects distinct practices across community-based physical care, systems engineering, reflective research, sound and movement. They share principles without becoming one undifferentiated company.

### Domain sentence

**FELOH generates. NAKEBUSEN grounds. IKAI reflects. WARENA enables. GENJE embodies.**

### Transaction boundary

**ONLY NAKEBUSEN TRANSACTS.**

This statement should appear where it clarifies the customer relationship, not be repeated as decorative copy in every section.

## 3. Design direction

### Composition

- Editorial, text-first, asymmetric grid.
- Strong typography and disciplined negative space.
- Clear section transitions; avoid a generic four-card portfolio.
- Hero communicates the commercial entry point before the wider practice architecture.
- Use image assets only when rights, consent, provenance and publication approval are recorded.
- Prefer original craft, material, movement and system imagery over generic stock or decorative AI imagery.

### Palette

Use the established token family rather than introducing a second palette:

- Ink / near-black: `#111111`
- Ivory: `#F2EFEA`
- Forest: `#123B2D`
- Deep green: `#033500`
- Ochre / gold: `#D4AF37`
- Terracotta: `#E2725B`

The newer forest/canopy, sage and clay tokens may be used where already defined in the stylesheet. Avoid default Rasta shorthand, purple/neon AI gradients and gold-on-cream low-contrast combinations.

### Type

- Display: Cormorant Garamond or the existing serif stack.
- Body and controls: system sans-serif.
- Metadata and technical labels: JetBrains Mono or a local/system monospace fallback.
- Keep long-form text readable; do not use monospace for paragraphs.

### Dark / light behaviour

- Respect `prefers-color-scheme`.
- Maintain independent contrast checks in both modes.
- Dark mode should use near-black foundations and forest depth, not flat grey panels.
- Gold is an accent, not a default body-text colour.
- Preserve reduced-motion and reduced-transparency fallbacks.

### Mobile

- Retain the three-destination dock: LOCS, DIGITAL, CONNECT.
- Keep tap targets at least 44px class.
- Prevent hero typography from clipping at 320px.
- Stack the hero proposition and architecture panel without losing hierarchy.
- Respect safe-area insets.
- Keep the About and research sections readable without excessive card framing.

## 4. Page-level conversion logic

- **Primary commercial action:** WhatsApp enquiry to NAKEBUSEN.
- **Secondary action:** jump to loc services.
- **Digital enquiry:** route through NAKEBUSEN; WARENA is capability, not a separate storefront.
- **IKAI / GENJE / Corpus:** source and research links, not booking buttons.
- **Enquiry disclosure:** an enquiry does not confirm a booking.
- **Payments:** manual information only unless a separately approved and verified payment integration is implemented.
- **Support:** voluntary support remains separate from service payments.

## 5. Search and social metadata

**Title:** NAKEBUSEN · WARENA POWERED | Beautiful Roots. Sovereign Systems.

**Description:** Professional loc care and practical technology services in Eldoret Town, Kenya. Enquire directly with NAKEBUSEN; availability and final terms are agreed before booking.

Use the same accurate title and description for Open Graph and Twitter metadata. Do not add an unapproved social image. If an image is later approved, record its source, creator, rights, consent and intended crop before publication.

## 6. Editorial and factual guardrails

- NAKEBUSEN is the only live commercial practice and transaction interface.
- WARENA capability claims must match demonstrated work and current scope.
- IKAI is research / work in progress; no released mirror product is implied.
- GENJE is creative practice; no commercial product or performance system is implied without evidence.
- The proposed IKAI association with “home” remains linguistically unverified; do not state it as settled etymology.
- “The Fire of the Formidable” is an adopted GENJE creative interpretation, not a universal etymology.
- Separate NAKEBUSEN's business history from the founder's personal biography.
- Do not invent credentials, testimonials, client outcomes, availability or guarantees.
- Do not publish braiding or shaving services.
- Use the current service catalogue as the price authority.

## 7. Verification and release gates

- Run `python -m unittest discover -s tests -v`.
- Validate one H1, semantic landmarks, unique IDs and all fragment links.
- Check the exact mobile dock destinations and bilingual controls.
- Confirm public prices and service scope against the approved catalogue.
- Test 320, 360, 390, 768, 1024 and 1440px widths.
- Test keyboard navigation, focus visibility, screen-reader order and language changes.
- Test light/dark, reduced motion and reduced transparency.
- Verify social metadata and payment language.
- Verify GitHub Actions and GitHub Pages independently.
- Review the complete pull request before merge. A source commit or passing unit test does not prove live publication.

## 8. Canonical supporting records

- [Website copy](WEBCOPY.md)
- [Public facts register](PUBLIC-FACTS-REGISTER.md)
- [Service catalogue](SERVICE-CATALOG.md)
- [Publication register](PUBLICATION-REGISTER.md)
- [Navigation contract](NAV-STRUCTURE.md)
- [Editorial website improvement specification](EDITORIAL-WEBSITE-IMPROVEMENT-2026-11-24.md)
- [F3L0H Sovereign Master Corpus](https://github.com/donfelohke/feloh-corpus/blob/main/docs/F3L0H-SOVEREIGN-MASTER-CORPUS-2026-11-20.md)
- [NAKEBUSEN campaign copy playbook](https://github.com/donfelohke/NAKEBUSEN/blob/main/docs/NAKEBUSEN-LOC-AD-COPY-AND-CAMPAIGN-PLAYBOOK-2026-11-24.md)
