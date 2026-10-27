# NAKEBUSEN Master Implementation Brief

**Version:** 1.0  
**Date:** 27 October 2026  
**Status:** Approved direction; implementation and deployment must be verified independently.

## Master direction

**Liquid Glass Terminal + Editorial Hybrid**  
**Optimisation:** balanced across conversion, brand identity and performance.

NAKEBUSEN presents beauty and technology as two distinct practices under one coherent identity. Editorial typography and tactile warm materials lead the Locs experience. Forest-green terminal surfaces and restrained reflective teal distinguish NAKEBUSEN Digital, powered by WARENA. Glass is a functional layer for navigation and transient controls, not a coating for every surface.

## Canonical content

- Brand: **NAKEBUSEN**
- Tagline: **Your Beauty ° Your Way.**
- Descriptor: **NAKEBUSEN · Locs · Powered by WARENA**
- Location: **Eldoret Town / Karibu Mdosi · Kenya**
- Founder identity: **@donfelohke · #HisGenjeness**
- Primary CTA: **Enquire about loc care**
- Secondary CTA: **Explore Digital**
- Required disclosure: **An enquiry is not a confirmed booking.**
- No braiding service should be advertised.

### Locs services and prices

| Service | Price |
|---|---:|
| Retouch & Styling | KES 700 |
| Sisterlocs Retie | KES 1,500 |
| Artificial Locs Installation | KES 3,500 |

Keep prices visible, legible, and unchanged. The enquiry flow must not imply instant booking or guaranteed availability.

## Visual tokens

- Charcoal: `#111111`
- Forest green: `#033500`
- Warm ivory: `#F2EFEA`
- Terracotta: `#E2725B`
- Ochre/gold: `#D4AF37`
- Reflective teal: `#79D7D2`

Typography: Cormorant Garamond for expressive display headings, Inter/system sans-serif for body and controls, JetBrains Mono for restrained technical metadata. Do not require remote font or image requests for the page to remain usable.

## Component specification

1. **Header/navigation:** compact floating glass-terminal capsule; preserve brand and desktop links; retain icon-based theme/language/menu controls. Glass should have a solid fallback.
2. **Hero:** strong editorial type, clear Eldoret location, loc-care CTA first and Digital CTA second. The hero must communicate service and price quickly.
3. **Locs cards:** separate warm terracotta-tinted, mostly opaque cards; show each exact service price and a direct enquiry route.
4. **Digital cards:** distinct forest-green terminal modules with teal accents; describe actual GNU/Linux, computer systems, networking and local-first infrastructure services.
5. **Founder/craft:** support trust and identity without outranking the primary service journey.
6. **Mobile dock:** Locs, Digital, Connect, More; stable anchors, active section state, safe-area spacing and dismissible More panel.
7. **Footer:** modular Locs, Digital and Connect surfaces; verified contact links; no single oversized glass slab and no dock overlap.

## Interaction and performance

- Keep the existing static-first GitHub Pages architecture; avoid adding a framework for visual effects.
- Use semantic HTML, stable section IDs, valid anchors, minimal JavaScript and accessible control names.
- Support keyboard focus, reduced motion and reduced transparency. Provide opaque fallbacks when backdrop filtering is unsupported or disabled.
- Glass is reserved for navigation and transient controls; long-form content, service cards and footer panels remain opaque or lightly tinted.
- Avoid excessive blur, decorative animation, external dependencies and unnecessary image payloads.
- Maintain working WhatsApp, phone and email destinations; do not invent or silently replace contact links.

## Acceptance criteria

### Content
- All three service prices remain exact.
- Eldoret Town / Karibu Mdosi is visible.
- The enquiry-not-booking disclosure remains visible.
- Locs and Digital remain clearly distinct; no braiding is advertised.

### Design
- Editorial hero prioritises loc-care conversion.
- Terracotta/ochre distinguishes Locs; forest green/teal distinguishes Digital.
- Glass is restrained to navigation/transient controls.
- Light and dark themes remain readable.

### Accessibility and QA
- Check responsive layout at 320, 360, 390 and 430 CSS px, landscape and desktop.
- Check keyboard operation, visible focus, screen-reader labels, contrast, safe areas and no horizontal overflow.
- Verify prices, language/theme controls, mobile menu, active navigation, and all contact links.
- Run static and browser UI checks. Verify the actual GitHub Pages deployment separately after merge; passing pull-request checks does not prove deployment.

## Git workflow

Implement on a feature branch, review the diff, run checks, inspect the deployed page after merge, and report each state accurately. Never claim a commit, merge, or live deployment without verifying it.
