# Distinct Native Experience System

**Document ID:** EC-DNES-01  
**Version:** M2 · 22 November 2026  
**Status:** Implemented and merged to `main`; browser, keyboard and assistive-technology verification remains pending  
**Implementation:** `index.html`  
**Scope:** Public NAKEBUSEN gateway and its Locs, Digital and founder sections

## 1. Governing direction

Build one connected ecosystem with independently recognisable experiences. Share technical foundations, not one generic visual template.

- **NAKEBUSEN leads:** the public-facing, beauty-first commercial identity.
- **WARENA enables:** the technical endorsement and engineering identity behind Digital.
- **Don Feloh authors:** the human founder, CTO, loctician and creative technologist.
- **IKAI, GENJE and FELOH Corpus:** research, creative practice and knowledge domains; do not present them as additional checkout brands or released products without evidence.

**Commercial boundary:** ONLY NAKEBUSEN TRANSACTS. Enquiry is not booking.

## 2. Experience ownership

| Experience | Purpose | Visual ownership | Primary visitor action |
|---|---|---|---|
| NAKEBUSEN / Locs | Loc care, craft, heritage and service | Warm paper, terracotta, ochre | Enquire about a loc service |
| WARENA / Digital | Practical computing, systems and infrastructure | Deep forest, warm ivory, sage | Discuss a technical project |
| Don Feloh / Connect | Human authorship, creative practice and contact | Charcoal, sandstone, terracotta | Explore authorship or connect |

The current site is a single-page NAKEBUSEN gateway. These are native section experiences, not a claim that three independent applications or domains have been deployed. Future standalone destinations require their own information architecture and review.

## 3. Shared colour foundations

| Token | Value | Role |
|---|---|---|
| Forest | `#173D32` | Ecosystem header and WARENA identity |
| Deep forest | `#102D25` | WARENA base surface |
| Charcoal | `#242923` | Don Feloh and dock surface |
| Warm paper | `#F3EEE4` | Editorial canvas |
| Terracotta | `#87402F` (light) / `#E2725B` (dark) | NAKEBUSEN identity and selected action accents |
| Ochre | `#80540F` (light) / `#D4AF37` (dark) | Heritage accent and price emphasis |
| Muted sage | `#596252` (light) / `#C6C0B4` (dark) | Secondary text; validate actual foreground/background pairings |
| Soft surface | `#E9E1D3` (light) / `#0E120F` (dark) | Editorial separation and quiet content surfaces |
| Surface | `#FFFDF8` (light) / `#151815` (dark) | Opaque reading surfaces |

Colour ownership:
- Locs: warm paper canvas; terracotta section marker and service-card edge; ochre price and heritage highlights.
- Digital: deep forest canvas; warm ivory text; sage and sandstone supporting accents.
- Founder: warm editorial surfaces; charcoal text; terracotta identity marker.
- Header: dark forest glass in both themes, with a solid fallback.
- Floating dock: charcoal glass, with a solid fallback and destination-specific active treatment.
- Hero, service cards and payment instructions: opaque content surfaces; do not apply glass blur to content.
- Glass intensity is immersive but limited to the forest topbar and charcoal floating dock; canvas is hybrid, motion ambient and density balanced.

Do not use palette membership as proof of contrast. Verify every actual foreground/background pair, including focus, hover, active and disabled states, against WCAG 2.2 AA.

## 4. Navigation

- Keep the brand lockup in the top bar.
- Top bar is dark forest glass; language and theme controls remain compact, labelled and keyboard operable.
- The bottom dock remains the sole section navigation: Locs, Digital, Connect.
- The dock is charcoal glass with a destination-specific active state: terracotta for Locs, sage for Digital, ochre for Connect.
- Keep enquiry actions in their relevant content sections; do not turn the dock into a booking bar.
- Preserve safe-area insets, visible focus, anchor offsets and reduced-transparency fallbacks.

## 5. Native interaction patterns

### Locs
- Service cards retain the approved names, published prices without plus signs and WhatsApp enquiry paths.
- Service-specific enquiry links retain language-aware prefilled messages.
- The enquiry boundary remains visible.
- No simulated booking calendar, checkout or availability claim.

### Digital
- Explain practical outcomes before technical terminology.
- Keep GNU/Linux, workstation, diagnostics, networking, Wi-Fi and local-first service scope legible.
- Link to source repositories as evidence and exploration, not as proof that every described capability is deployed.
- Technical enquiries remain scoped per engagement.

### Founder / Connect
- Keep the founder as the human author and public point of contact.
- Preserve the current role line and factual controls.
- Present the creative and technical work as authorship, not as a second checkout channel.
- Independent support remains distinct from NAKEBUSEN service payments.

## 6. Typography and implementation

- Editorial headings: Cormorant Garamond with Georgia/system serif fallback.
- Body and controls: Inter with system sans-serif fallback.
- Technical labels: JetBrains Mono with system monospace fallback.
- No external font CDN or new runtime dependency.
- Use semantic HTML, existing section anchors, progressive enhancement and the existing language/theme controls.
- Keep text-first content and avoid decorative imagery, fake terminal interfaces, fake dashboards and unnecessary animation.

## 7. Responsive and accessibility requirements

Review at 320, 360, 390, 430, 760, 1024 CSS px and desktop:
- no unintended horizontal overflow;
- no clipped brand or controls;
- service names, prices and Kiswahili copy remain legible;
- floating dock does not obscure content or focus;
- all controls are keyboard operable with visible focus;
- reduced-motion and reduced-transparency preferences are respected;
- actual contrast is checked in both themes, including context-aware focus rings on dark navigation surfaces;
- decorative sage `#87917A` is not used for normal-sized text on warm paper; use text-safe sage `#626B58`.

Automated static checks do not establish screen-reader, browser, device or WCAG conformance.

## 8. Content and factual invariants

Preserve:
- Retouch & Styling — KES 700.
- Sisterlocs Retie — KES 1,500.
- Artificial Locs Installation — KES 3,500.
- Loc care · Eldoret Town / Karibu Mdosi · Kenya.
- No braiding or shaving claims.
- No unverified address, opening hours, availability, certification or customer outcomes.
- An enquiry does not confirm a booking.
- Use the verified published M-PESA Buy Goods details: **Till 3511456 · Account / Merchant name FELIX LWOVA**. Any change requires re-verification. Pay only after the service and total amount are agreed; verify the merchant and amount before entering a PIN. Never share a PIN or one-time code.
- IKAI remains research; GENJE remains creative practice; neither becomes a checkout destination by this change.

## 9. Footer navigation

Keep footer navigation minimal and purposeful. Provide one clearly labelled external link, **GitHub repositories**, to the public `@donfelohke` repositories view. Detailed repository links remain in the WARENA Digital section, where their purpose can be explained. Do not duplicate the full primary navigation or list every project in the footer. Preserve a visible keyboard focus state and a practical touch target.

## 10. Release and verification status

The native experience implementation is merged to `main`. This records source state, not complete release verification. The remaining verification work is:
1. Run all available repository checks.
2. Inspect the full diff for accidental copy, price, contact or translation changes.
3. Verify both themes and both languages in a real browser.
4. Test all required responsive widths, keyboard focus, reduced motion and reduced transparency.
5. Check anchor navigation and dock overlap.
6. Verify the deployed GitHub Pages commit after the corrective changes merge.

A merged source change or successful deployment is not evidence of browser accessibility, screen-reader usability or full WCAG conformance.
