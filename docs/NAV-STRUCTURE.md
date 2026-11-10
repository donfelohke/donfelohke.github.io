# NAKEBUSEN — Navigation and Information Architecture

**Document ID:** NB-NS-01  
**Version:** M3 · 10 November 2026  
**Status:** Approved single-page navigation architecture  
**Implementation source:** index.html

## 1. Navigation model

Use one primary navigation system: the floating bottom dock. Do not duplicate section links in the topbar or footer.

## 2. Floating topbar

- Transparent, floating glass topbar.
- Brand title and compact language/theme toggles only.
- No section links, menu, or second navigation row.
- Brand title links to the page start.
- Keep toggles keyboard accessible with 44 × 44 CSS-pixel hit areas.

## 3. Floating bottom navigation

The sole section navigation contains exactly three icon-led destinations:

- Locs — `#crown`
- Digital — `#code`
- Connect — `#connect`

No Home, Enquire, founder, or extra destination in this dock. Enquiry actions remain in the relevant page content and contact area.

## 4. Footer

The footer is informational, not navigational. Remove the footer section-link row. Retain brand identity, founder role, contact methods, service location, payment-enquiry instructions, independent-support information, source/copyright information and signature.

## 5. Accessibility and responsive behaviour

- Use a labelled navigation landmark for the bottom dock.
- Each destination has a visible text label and a distinct icon; icons are decorative to assistive technology.
- Keep minimum 44 × 44 CSS-pixel touch targets.
- Preserve visible keyboard focus, active-section indication, safe-area inset spacing and reduced-motion support.
- Ensure the dock does not obscure content or footer controls at narrow viewports.
- Topbar controls remain available in both themes and languages.

## 6. Commercial and factual boundaries

- ONLY NAKEBUSEN TRANSACTS.
- WhatsApp is an enquiry, not a confirmed booking.
- LOCS starting prices: Retouch & Styling KES 700; Sisterlocs Retie KES 1,500; Artificial Locs Installation KES 3,500.
- DIGITAL is scoped and quoted per engagement.
- No public Till number or merchant details until account authority and payment-purpose verification are complete.
- Do not invent street address, map pin or opening hours.

## 7. Verification

Test the three dock destinations at mobile and desktop widths, absence of duplicate section navigation, topbar controls, keyboard focus, anchor offsets, dock overlap, both languages, both themes and all contact destinations.
