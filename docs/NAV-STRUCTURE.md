# NAKEBUSEN — Navigation and Information Architecture

**Document ID:** NB-NS-01  
**Version:** M2 · 10 November 2026  
**Status:** Approved single-page information architecture  
**Implementation source:** index.html

## 1. Purpose

Make the two commercial paths obvious while preserving a concise single-page website and its existing section anchors.

Do not introduce new routes or a booking engine as part of this change.

## 2. Primary navigation

- Brand lockup — `#top` (home)
- Locs — `#crown`
- Digital — `#code`
- @donfeloh — `#founder`
- Connect — `#connect`

The service-path cards may link to the corresponding LOCS and DIGITAL sections.

## 3. Page sequence

1. Hero and enterprise introduction.
2. Two service-path cards.
3. LOCS service catalogue and starting prices.
4. DIGITAL service areas and enquiry.
5. Philosophy and GENJE ZA WARENA.
6. About / founder.
7. Community and contact.
8. Footer.

The philosophy and community content should not compete with the two customer-facing service paths.

## 4. Header and controls

The primary navigation is **Locs · Digital · @donfeloh · Connect**. The founder anchor is attached to the founder heading inside the Connect section; it does not create a separate page or route.

- Exact typographic lockup: **NAKEBUSEN Locs ° Powered by WARENA**.
- Sticky header with primary navigation.
- WhatsApp enquiry action.
- English / Kiswahili control.
- Light / dark theme control.
- Accessible mobile menu.

The floating mobile dock remains a separate quick-navigation layer with Home, Locs, Digital, Connect and WhatsApp enquiry destinations. It supplements, not replaces, the primary navigation.

## 5. Mobile and keyboard behaviour

- Menu button exposes accurate `aria-expanded` and `aria-controls`.
- Menu is keyboard operable.
- Escape closes the mobile menu and returns focus to its toggle.
- Selecting a navigation destination closes the mobile menu.
- The More panel closes on Escape and restores focus to its toggle.
- Anchor targets must not be hidden beneath the sticky header.
- Floating navigation must not obscure page content, footer links or keyboard focus.
- Respect reduced-motion preferences and safe-area insets.

## 6. Footer

Keep the footer in normal document flow.

Include:
- Brand lockup and founder role.
- Locs, Digital, @donfeloh and Connect links, plus the source repository.
- WhatsApp, telephone, email and current Eldoret location.
- Separate M-PESA payment-enquiry and voluntary independent-support areas.
- No public Till number or merchant details until account authority and payment-purpose verification are complete.
- Existing founder/copyright treatment until rights-holder confirmation.

## 7. Commercial and factual boundaries

- ONLY NAKEBUSEN TRANSACTS.
- WhatsApp is an enquiry, not a confirmed booking.
- LOCS starting prices: Retouch & Styling KES 700; Sisterlocs Retie KES 1,500; Artificial Locs Installation KES 3,500.
- DIGITAL is scoped and quoted per engagement.
- GENJE is governing identity, not a separate checkout.
- WARENA Systems is within DIGITAL.
- IKAI is research, not a released product.
- Do not invent street address, map pin or opening hours.

## 8. Future routes

Separate routes such as `/locs/`, `/digital/`, `/about/`, `/contact/` and `/research/ikai/` are deferred. The current approved implementation is a single-page static site with section anchors. Any route migration requires a separate route inventory and redirect plan.

## 9. Verification

Test desktop and mobile navigation, keyboard focus, Escape behaviour, anchor offsets, dock overlap, both languages, both themes and all contact destinations.
