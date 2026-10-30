# NAKEBUSEN — Web Design Standards

**Document ID:** NB-WDS-01  
**Version:** M1 · 30 October 2026  
**Status:** Approved design specification · browser verification pending

## 1. Design direction

Ghetto-Luxe Dark Academia × African Desert Editorial × Silicon Savannah Neo-naturalism.

The interface should feel grounded, editorial, culturally aware and technically literate. Avoid generic luxury/salon styling, default Rasta palettes, AI-neon effects, excessive blur, ornamental gradients and decorative animation.

## 2. Approved palette

| Token | Hex |
|---|---|
| Ink | `#111111` |
| Ivory | `#F2EFEA` |
| Ochre | `#D4AF37` |
| Terracotta | `#E2725B` |
| Forest | `#033500` |
| Blue | `#3A6D8C` |

Use alpha transparency only for subtle borders and surface separation. Do not introduce unrelated palette colours. Test every actual text and control pairing; accents are not automatically valid body-text colours.

## 3. Typography

- Editorial: Cormorant Garamond, Georgia fallback.
- Body/interface: Inter, system sans-serif fallback.
- Technical labels: JetBrains Mono, system monospace fallback.

No external font CDN. Self-host only with verified licences. If no local font files are present, system fallbacks are the actual rendered fonts.

## 4. Graphics and imagery

- Text-first layout.
- Functional interface icons permitted.
- Decorative illustrations and unnecessary SVG artwork excluded.
- Genuine LOCS photography permitted only with client permission.
- Never represent stock or generated images as client results.
- No unnecessary third-party scripts or tracking.
- No media is required for the page to communicate its services.

## 5. Layout and navigation

- Single-page static HTML is the current architecture.
- Preserve semantic anchors: `#top`, `#crown`, `#code`, `#philosophy`, `#founder`, `#connect`.
- Sticky header and existing mobile quick-navigation must remain accessible.
- Keep the two service paths more prominent than research or founder content.
- Footer remains in normal document flow.

## 6. Responsive requirements

Test at 320, 360, 390, 430, 760, 1024 CSS px and wide desktop.

- No unintended horizontal scrolling.
- No clipped lockup or navigation.
- Logical content order.
- Readable service and price information.
- Touch targets approximately 44 × 44 CSS px where practical.
- Floating navigation must not cover content or keyboard focus.

## 7. Accessibility

Target WCAG 2.2 AA.

- Semantic landmarks and one H1.
- Skip-to-content link.
- Logical heading structure.
- Visible keyboard focus.
- Accessible names and state for controls.
- Keyboard-operable menus and panels.
- Escape handling and focus restoration.
- Text and interface contrast tested in both themes.
- Correct language declaration.
- Reviewed translations.
- Reduced-motion support.
- Reflow and zoom testing.

Automated audits are not a substitute for manual keyboard and screen-reader testing.

## 8. Performance and privacy

- No required CDN or external font service.
- Minimise JavaScript and third-party dependencies.
- Preserve progressive enhancement.
- Avoid unnecessary tracking and advertising profiles.
- Do not promise privacy or local-first guarantees beyond the actual implementation.

## 9. Release gate

A successful CI workflow is not browser proof. Verify the reviewed commit on the deployed site, test both themes and languages, check mobile layouts, validate links and record accessibility findings.
