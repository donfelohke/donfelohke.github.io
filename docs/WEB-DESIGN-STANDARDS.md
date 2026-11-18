# NAKEBUSEN — Web Design Standards

**Document ID:** NB-WDS-01  
**Version:** M3 · 19 November 2026  
**Status:** Approved design direction · AMOLED implementation on review branch; automated verification in progress; manual browser/accessibility verification pending  
**Related specification:** [Distinct Native Experience System](./NATIVE-EXPERIENCE-SYSTEM.md)

## 1. Design direction

**Reflective · Embodied · Creative Hacker.**

The public gateway remains NAKEBUSEN-led, with independent native expressions for Locs, Digital / WARENA and Don Feloh / Connect. The interface is editorial, grounded, culturally aware and technically literate.

Avoid generic salon luxury, default Rasta palettes, neon hacker clichés, fake terminal interfaces, excessive blur, decorative gradients, ornamental animation and unnecessary imagery.

## 2. Brand and experience hierarchy

- **NAKEBUSEN:** beauty, heritage, craft, human dignity and the commercial service relationship.
- **WARENA:** technology, infrastructure, freedom, capability and engineering evidence.
- **Don Feloh:** human authorship, creative practice, reflection and expression.
- **IKAI, GENJE and FELOH Corpus:** research, practice and knowledge domains; do not represent them as released commercial products by default.

**ONLY NAKEBUSEN TRANSACTS.** An enquiry does not confirm a booking.

The existing public site remains a lightweight single-page gateway. Distinct section treatments do not imply that separate brand websites or applications have been deployed.

## 3. Approved colour system

| Token | Hex | Primary role |
|---|---|---|
| Forest | `#173D32` | Top bar and WARENA |
| Deep forest | `#102D25` | WARENA deep surface |
| Charcoal | `#242923` | Don Feloh and floating dock |
| Warm paper | `#F3EEE4` | Editorial and Locs canvas |
| Terracotta | `#A34F3B` | NAKEBUSEN identity and active accent |
| Deep ochre | `#8B5E16` | Heritage highlight |
| Muted sage | `#87917A` | Decorative / non-text technical accent; do not use for normal-sized text on warm paper |
| Text-safe sage | `#626B58` | Muted text on warm paper; approximately 4.83:1 contrast |
| Sandstone | `#D6C6A5` | Secondary text and highlight |

Use colours according to experience ownership. Do not make every section use every accent. Test each text/control pairing; the palette is not itself proof of WCAG contrast.


### AMOLED dark-theme extension · 19 November 2026

The optional dark theme is a first-class experience; the warm-paper light theme remains supported. Resolve the saved preference or system colour preference before the main stylesheet paints.

| Token | Hex | Dark-theme role |
|---|---|---|
| OLED canvas | `#000000` | Page and Locs canvas |
| Raised surface | `#151515` | Service, Connect and payment panels |
| Secondary surface | `#080808` | Hero and footer surfaces |
| Primary text | `#F2EFEA` | Main copy |
| Secondary text | `#B8B0A5` | Muted copy on black |
| Forest | `#033500` | WARENA and header surface |
| Terracotta | `#E2725B` | Locs identity marker |
| Ochre | `#D4AF37` | Price and restrained emphasis |
| Sandstone | `#D6C6A5` | Secondary emphasis and focus |
| Blue | `#3A6D8C` | Secondary interface accent only |

Native ownership in dark mode: Locs uses black/near-black with terracotta; WARENA uses deep forest; Connect uses charcoal. The header and floating dock may use functional glass with opaque reduced-transparency fallbacks. Content panels remain opaque. Test every actual text, border, control and focus pairing; palette values alone do not establish WCAG conformance.

## 4. Native experience treatments

### Locs · NAKEBUSEN
- Warm paper canvas.
- Terracotta section marker and service-card edge.
- Ochre used sparingly for emphasis.
- Clear service names, starting prices, location and WhatsApp enquiry.
- Human, tactile and beauty-first presentation.

### Digital · WARENA
- Deep forest surface and warm ivory text.
- Sage and sandstone supporting accents.
- Systems-oriented information hierarchy.
- Capability, scope, evidence, repositories and technical enquiry.
- Distinguish proposal, research, prototype, tested and deployed states.

### Connect · Don Feloh
- Charcoal surface with warm ivory text.
- Sandstone supporting text and restrained terracotta marker.
- Editorial authorship and creative practice.
- Founder identity remains human and factual; no invented credentials or claims.

## 5. Navigation and glass

- Top bar: dark forest glass, subtle border, readable solid fallback.
- Floating dock: charcoal glass with destination-specific active states.
- Dock destinations: Locs, Digital, Connect only.
- Preserve compact language and theme controls.
- Blur is progressive enhancement, never required for legibility.
- Keep glass to functional navigation surfaces (topbar and floating dock); hero, service cards and payment instructions use opaque content surfaces.
- Provide solid defaults before `@supports` backdrop-filter enhancements.
- Respect reduced-transparency preferences.
- Maintain visible keyboard focus, safe-area spacing and anchor offsets.

## 6. Typography

- Editorial headings: Georgia/system serif.
- Body and controls: system sans-serif.
- Technical labels: system monospace.
- No external font CDN. Self-host only if font licensing and performance are verified.
- Avoid long paragraphs in monospace.

## 7. Graphics, layout and motion

- Text-first, lightweight static HTML.
- Functional icons are permitted; no decorative illustrations required.
- Genuine loc photography only with permission.
- Use spacing, alignment and typography before cards, borders or shadows.
- Avoid nested cards and excessive glass.
- Respect reduced-motion preferences; no information depends on animation.
- No unnecessary scripts, trackers or third-party dependencies.

## 8. Responsive requirements

Review at 320, 360, 390, 430, 760/768, 1024, 1280 and 1440 CSS px.

- No unintended horizontal scrolling.
- No clipped lockup or navigation.
- English and Kiswahili labels remain legible.
- Prices and service details remain easy to scan.
- Floating dock does not obscure content or keyboard focus.
- Check zoom and reflow.

## 9. Accessibility

Target WCAG 2.2 AA:
- semantic landmarks, one H1 and logical heading hierarchy;
- skip link and visible focus;
- keyboard-operable controls with accessible names and state;
- adequate text and interface contrast in both themes; use context-aware focus rings on light and dark content/navigation surfaces, including WARENA, Don Feloh and footer controls;
- text-safe sage for normal-sized text on warm paper; decorative sage is not a text colour;
- touch targets around 44 × 44 CSS px where practical;
- reduced motion and reduced transparency;
- language declaration updates with the selected language.

Automated checks do not replace manual keyboard, screen-reader and browser review.

## 10. Performance, privacy and release

- No required CDN, external font service, analytics or tracking pixel.
- Preserve progressive enhancement.
- Do not promise privacy or local-first guarantees beyond actual implementation.
- Verify the reviewed commit in a browser after merge.
- A green workflow is not browser proof, deployment proof or full WCAG certification.

## 11. Governing implementation specification

See [NATIVE-EXPERIENCE-SYSTEM.md](./NATIVE-EXPERIENCE-SYSTEM.md) for the complete experience ownership, navigation, interaction, content invariants and release gates.
