# NAKEBUSEN — Web Design Standards

**Document ID:** NB-WDS-01  
**Version:** M2 · 10 November 2026  
**Status:** Approved direction · implementation review pending  
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
| Muted sage | `#87917A` | Technical supporting accent |
| Sandstone | `#D6C6A5` | Secondary text and highlight |

Use colours according to experience ownership. Do not make every section use every accent. Test each text/control pairing; the palette is not itself proof of WCAG contrast.

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

Review at 320, 360, 390, 430, 760, 1024 CSS px and wide desktop.

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
- adequate text and interface contrast in both themes;
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
