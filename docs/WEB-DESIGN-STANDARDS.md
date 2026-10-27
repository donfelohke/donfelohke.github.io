# Web design standards — donfelohke.github.io

**Status:** LIVE · aligned with `index.html` and `docs/NAV-STRUCTURE.md` · 27 October 2026

## Architecture

- Single static `index.html` preferred  
- No required CDN, analytics, or external fonts  
- **No embedded graphics** (images, SVG art, video, canvas, CSS image backgrounds, graphic favicons, OG images)  
- Gallery: text link only  

## Information architecture

1. Hero — beauty-first commercial offer  
2. Path cards — Locs · Digital · About  
3. LOCS catalogue + prices  
4. DIGITAL + WARENA  
5. GENJE / founder / IKAI (WIP)  
6. Connect + footer  

## Header

- Left: NAKEBUSEN · Locs • Digital · @donfelohke  
- Right: WhatsApp · Language · Theme  
- Links: Loc Care · Digital · @donfelohke (or equivalent three destinations)  

## Language

- Default **English** in HTML source (`lang`, title, meta, body fallback)  
- Kiswahili via toggle; persist preference; independent of theme  
- Header and footer controls stay in sync if both exist  

## Theme

- Light / dark · `localStorage` key `nakebusen-theme`  
- Respect `prefers-color-scheme` when unset  
- Text-only control labels  

## Tokens

| Token | Value |
|-------|--------|
| Forest canvas / canopy | `#14251D` / `#1D3428` |
| Warm ivory / sage | `#F3EDE2` / `#A9BBA9` |
| Terracotta / ochre | `#C76F4A` / `#D6AD54` |
| Light-theme muted text | `#46554A` |
| Focus | Theme-aware high-contrast outline; validate against adjacent surfaces |
| Serif / sans / mono | Georgia stack · system-ui · ui-monospace |

## Accessibility

- One `h1`  
- Visible focus  
- Keyboard operable controls  
- Contrast for text and controls  
- Reflow without horizontal scroll at 320 CSS px  
- Sticky header: adequate `scroll-margin` on sections  

## Release gates

Static CI ≠ browser proof. Before calling a release complete:

- 320, 360, 390, 430, 760 CSS px + desktop  
- Both themes · both languages · WhatsApp on a real device  
- Deployed Pages matches reviewed commit  

See [WEBCOPY.md](./WEBCOPY.md) · [PR-CONSOLIDATION-45-46-47.md](./PR-CONSOLIDATION-45-46-47.md)
