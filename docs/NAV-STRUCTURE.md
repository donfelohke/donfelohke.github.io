# Website Navigation Contract

**Status:** Single-page architecture · 22 November 2026

## Public navigation

The website is one page at the root URL. Its four primary destinations are:

- LOCS → `#locs` (Kiswahili: `#locs-sw`)
- DIGITAL → `#digital` (Kiswahili: `#kidijitali`)
- ABOUT → `#about` (Kiswahili: `#kuhusu`)
- CONNECT → `#connect` (Kiswahili: `#wasiliana`)

Desktop uses four visible text links in the compact top bar. Mobile uses the same four destinations in a floating bottom dock. There is no hamburger menu or duplicate route system.

## Header controls

The compact header contains the Don Feloh identity and two independent icon-only controls:

- Languages icon: English ↔ Kiswahili.
- Sun / Moon icon: light ↔ dark appearance.

Both controls use native buttons, accessible names, pressed states, visible keyboard focus and 44px touch targets. The theme follows the system preference until the visitor explicitly selects a theme. No selection is stored or transmitted.

## Information hierarchy

The hero follows the canonical webcopy: approved headline and NAKEBUSEN loc-care entry point first, then starting prices and direct enquiry. Don Feloh's human authorship remains visible in the same first-screen hierarchy. NAKEBUSEN / ROOT is the only live commercial practice and exposes LOCS and DIGITAL service paths. WARENA / CAPABILITY is distinct technical capability, not a sub-brand or separate checkout. IKAI / MIRROR is research / WIP. GENJE / EXPRESSION is creative practice. FELOH Corpus is shared knowledge governance.

## Language and progressive enhancement

- English is the default document language and no-JavaScript fallback.
- English and Kiswahili content are authored in the same page.
- The language control changes the visible language, root `lang`, navigation labels and fragment destinations together.
- Preference controls are hidden unless the small inline controller successfully initializes.
- Without JavaScript, English remains readable and CSS respects the system colour preference.
- No analytics, tracking, framework, remote fonts, CDN, scroll observer or third-party runtime.

## Accessibility

Semantic landmarks, one H1 per mutually exclusive language view, visible focus, 44px-class controls, safe-area spacing, native anchor navigation, reduced-motion support and reduced-transparency fallbacks. Icon artwork is decorative; button labels are available to assistive technology.

## Commercial boundary

**ONLY NAKEBUSEN TRANSACTS.** LOCS and DIGITAL enquiries route through NAKEBUSEN. An enquiry is not a confirmed booking. The footer retains the approved manual M-PESA information and separate voluntary Support Us statement.
