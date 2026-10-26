# Top navigation — final direction

**Status:** Implemented on `main` (2026-10-26)

## Structure

| Position | Element | Behaviour |
|----------|---------|----------|
| Top left | **NAKEBUSEN** | Home (`#top`) |
| Under brand | Locs • Digital | Descriptor |
| Top right | **WA** | WhatsApp · `aria-label`: Contact NAKEBUSEN on WhatsApp |
| Top right | **EN / SW** | Language toggle |
| Top right | **◐** | Theme toggle |
| Second row | Locs · Digital · @donfelohke | Section anchors |
| Desktop ≥900px | Single row | Brand · centred links · utilities |

## Mobile

Two-tier layout. No hamburger for three destinations.

## Behaviour

- Sticky header with section `scroll-margin`
- Touch targets ≥ 2.75rem (~44px)
- `aria-current="true"` via IntersectionObserver (`setupActiveNav`)
- Theme preference in `localStorage`

## Release checklist (manual)

- [ ] 320 / 360 / 390 px no collisions
- [ ] WA / EN / theme work
- [ ] Section links land on headings (not under sticky bar)
- [ ] Keyboard focus visible
- [ ] Active link updates while scrolling
