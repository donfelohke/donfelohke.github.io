# NAKEBUSEN — Top navigation (final direction)

**Status:** Implemented baseline on `main` · 2026-10-26  
**Research note:** Baymard mobile nav findings support clear scope and meaningful links; this doc is the site spec, not a claim that every viewport was lab-tested.

## Structure

| Position | Element | Behaviour |
|----------|---------|----------|
| Top left | NAKEBUSEN | Home (`#top`) |
| Under brand | Locs • Digital | Descriptor only |
| Top right | WA | WhatsApp · accessible name *Contact NAKEBUSEN on WhatsApp* |
| Top right | EN / SW | Real language toggle |
| Top right | ◐ | Theme toggle |
| Second row (mobile / default) | Locs · Digital · @donfelohke | Section anchors |
| ≥900px | Same elements, one horizontal row | Links centre; utilities right |

## Rules

- No hamburger for three primary destinations unless a future viewport test requires it.  
- Touch targets ≈ 44×44 CSS px (`min-width/height: 2.75rem`).  
- Sticky header with `scroll-padding-top` / section `scroll-margin-top` so headings stay visible.  
- Active section: `aria-current="true"` via IntersectionObserver.  
- Theme and language persist in `localStorage` (best effort).  

## Verification checklist

- [ ] Brand strongest; WARENA not in header competition  
- [ ] 320 / 360 / 390 CSS px: no overlap  
- [ ] WA, language, theme each work  
- [ ] Keyboard focus visible; contrast OK  
- [ ] Locs / Digital / @donfelohke land on correct sections  
- [ ] Sticky: focused controls remain usable  
