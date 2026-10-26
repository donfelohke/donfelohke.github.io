# Top navigation — final direction

**Status:** Implemented baseline on `main` (2026-10-26)  
**Research note:** Spec is research-backed; full Baymard-style lab validation is separate.

## Structure

| Position | Element | Behaviour |
|----------|---------|----------|
| Top left | NAKEBUSEN | Home (`#top`) |
| Under brand | Locs • Digital | Descriptor only |
| Top right | WA | WhatsApp enquiry · accessible name: *Contact NAKEBUSEN on WhatsApp* |
| Top right | EN / SW | Language toggle (real translation) |
| Top right | ◐ | Theme toggle · aria-label updates |
| Second row | Locs · Digital · @donfelohke | Section anchors |

## Mobile

Two-tier: brand + utilities, then service links. No hamburger for three destinations.

## Touch & a11y

- Utility controls ≥ 2.75rem (~44px) target  
- Visible focus  
- Sticky header with scroll-margin on sections  
- `aria-current="true"` on the section in view (IntersectionObserver)  

## Release checks (manual)

- [ ] 320 / 360 / 390 px no collision  
- [ ] WA / language / theme work  
- [ ] Locs Digital @donfelohke land on correct headings  
- [ ] Sticky does not hide focused content  
