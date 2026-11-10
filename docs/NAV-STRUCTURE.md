# NAKEBUSEN — Navigation and Information Architecture

**Document ID:** NB-NS-01  
**Version:** M5 · 10 November 2026  
**Status:** Approved single-page navigation architecture  
**Implementation source:** index.html

## 1. Navigation model

Use one primary navigation system: the floating bottom dock. Do not duplicate section links in the topbar or footer.

## 2. Floating topbar

- Dark-forest floating glass topbar using `#173D32` in light theme and deep forest `#102D25` in dark theme.
- Brand title and compact language/theme toggles only.
- 20px blur and 150% saturation where backdrop filtering is supported; solid-theme fallback otherwise.
- Respect reduced-transparency preferences without relying on blur for legibility.
- No section links, menu, or second navigation row.
- Brand title links to the page start.
- Keep toggles keyboard accessible with 44 × 44 CSS-pixel hit areas.

## 3. Floating bottom navigation

The sole section navigation uses a charcoal glass surface and contains exactly three icon-led destinations:

- Locs — `#crown`
- Digital — `#code`
- Connect — `#connect`

Use terracotta active treatment for Locs, sage for Digital and ochre for Connect. No Home, Enquire, founder, or extra destination in this dock. Enquiry actions remain in the relevant page content and contact area.

## 4. Footer

The footer is primarily informational, not a second section-navigation system. Retain brand identity, founder role, contact methods, service location, payment-enquiry instructions, independent-support information, source/copyright information and signature. Permit exactly one visually subordinate external repository link: **GitHub repositories**. Do not repeat Locs, Digital or Connect links in the footer.

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
- LOCS starting prices: Retouch & Styling KES 700+; Sisterlocs Retie KES 1,500+; Artificial Locs Installation KES 3,500+.
- DIGITAL is scoped and quoted per engagement.
- Published M-PESA Buy Goods details: **Till 3511456 · Account / Merchant name FELIX LWOVA**. Changes require re-verification of merchant authority and payment purpose. Payment is due only after the service and total amount are agreed; confirm the merchant name and amount before entering a PIN. Never share a PIN or one-time code.
- Do not invent street address, map pin or opening hours.

## 7. Verification

Test the three dock destinations at mobile and desktop widths, absence of duplicate section navigation, exactly one footer GitHub repositories link, topbar controls, context-aware keyboard focus on dark and light surfaces, anchor offsets, dock overlap, both languages, both themes and all contact destinations.


## Footer repository navigation

The footer uses one minimal external repository-navigation link: **GitHub repositories** → `https://github.com/donfelohke?tab=repositories`. Keep detailed project links in the WARENA Digital section, not duplicated as a long footer directory. The footer link must remain keyboard accessible and visually subordinate to contact and business information.
