# NAKEBUSEN Design and Copy Rebrand Research

**Revision:** 2026-10-26  
**Target:** https://donfelohke.github.io/  
**Scope:** Brand hierarchy, homepage copy, mobile navigation, service discovery, accessibility and release gates.  
**Status:** Implementation candidate on a feature branch. Live-browser and deployed-site verification remain outstanding.

## Executive decision

Rebrand the page around a memorable customer promise and two practical service paths:

- **Headline:** Your beauty. Your way.
- **Supporting line:** Loc care in Eldoret. Practical technology, built around your needs.
- **Primary paths:** Locs · Digital.
- **Founder identity:** @donfelohke.
- **Technical attribution:** NAKEBUSEN Digital · Powered by WARENA.

NAKEBUSEN should feel like one coherent brand, not three equally weighted pillars. Loc care is the clearest immediate customer journey; Digital remains directly discoverable; culture and research remain available below the commercial paths without competing for the first click.

## Evidence and principles

This is a source-led UX recommendation, not a claim of user-tested conversion lift.

1. **Mobile navigation needs visible, understandable destinations.** Avoid hiding the primary paths behind a menu drawer when a short, single-page navigation can remain visible. Nielsen Norman Group's mobile-navigation research discusses discoverability and navigation patterns: https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/ and https://www.nngroup.com/articles/mobile-navigation-patterns/
2. **Use clear hierarchy, spacing and responsive layouts.** W3C WAI recommends grouping information with headings and spacing, and designing for different viewport sizes: https://www.w3.org/WAI/tips/designing/
3. **Treat accessibility as a testable release requirement.** WCAG 2.2 includes contrast, keyboard access, focus visibility, descriptive headings and navigable content: https://www.w3.org/TR/WCAG/
4. **A small business homepage should answer core questions quickly.** Visitors should understand the service, location, price cues, credibility and next step without decoding internal terminology. Research guidance: https://www.greenlakedigital.com/blog/web-design-best-practices-small-business

These sources support the design principles; they do not independently prove local customer preferences or business performance.

## Diagnosis of the previous direction

- **Too much internal vocabulary at the entry point.** GRACE/GRIT/GLORY, GENJE and IKAI are meaningful parts of the brand ecosystem, but they make a first-time service visitor do unnecessary interpretive work.
- **Three equal homepage cards diluted the main decision.** Research/culture should not be a third primary service competing with Locs and Digital.
- **The hero was doing too many jobs.** A customer promise, brand lockup, biography, service list and multiple CTAs competed for attention.
- **Navigation layout risked wrapping into a crowded control cluster.** Keep the brand top-left, contact/theme controls top-right, and the three short destination links in their own row.
- **Generic quality claims did not differentiate the offer.** Specific service names, starting prices, location and a transparent confirmation process are more useful.
- **Technical copy should be scoped, not overpromised.** Explain the types of work and agree feasibility, deliverables and price case by case.
- **Visual restraint is a feature.** The existing project constraint prohibits embedded graphics and external dependencies. Use typography, whitespace, linework and colour rather than stock photography or decorative illustration.

## Recommended information architecture

1. **Header:** NAKEBUSEN / @donfelohke; WhatsApp and Dark/Light control; Locs, Digital, @donfelohke.
2. **Hero:** “Your beauty. Your way.”, location cue, supporting line, canonical three-line lockup, concise service explanation, one primary loc-care enquiry CTA.
3. **Choose your path:** exactly two choices — Loc care and Digital.
4. **Loc care:** services and starting prices visible without hunting; scope and booking disclaimer adjacent to CTA.
5. **Digital:** concrete GNU/Linux, computer, networking and local-first systems scope; separate technology enquiry message.
6. **Culture / creative practice:** GENJE and related work as supporting context, not a third sales pillar.
7. **About / Connect:** Felix Lwova · Don Feloh, direct contact links and the canonical lockup.

## Visual system

- **Palette:** warm cream `#F2EFEA`, charcoal `#111111`, muted gold `#D4AF37`; use terracotta only as a restrained accent.
- **Typography:** a strong serif headline with a neutral system sans for body copy and monospaced labels for prices/metadata. No external font dependency.
- **Layout:** constrained readable line lengths; generous but purposeful section spacing; simple service rows; two-column paths on wider screens and a single column on mobile.
- **Controls:** visible text labels, minimum comfortable touch areas, focus indicators, reduced-motion support and independent theme/language preferences.
- **No graphic assets:** retain the text-first, offline-friendly policy; the Gallery remains a separate linked destination.

## Copy principles

- Lead with the visitor's need and service, not the founder's biography.
- Use English as the first-visit default; keep Kiswahili available.
- Use “from” / “starting price” for the KES 700, KES 1,500 and KES 3,500 catalogue.
- Do not advertise braiding, home visits, same-day availability or unverified guarantees.
- Make the booking boundary explicit: an enquiry is not a confirmed appointment.
- Keep WARENA as the technical layer powering Digital.
- Identify IKAI as work in progress, not a released product.
- Use the exact lockup: **NAKEBUSEN Locs • Digital / Powered by WARENA / @donfelohke · #HisGenjeness**.

## Validation plan

Static source checks and live browser checks are separate release gates.

| Viewport | Required checks |
|---|---|
| 320 × 640 | No horizontal overflow; controls and navigation readable |
| 360 × 800 | Header hierarchy and CTA clarity |
| 390 × 844 | Common Android viewport; theme/language controls |
| 430 × 932 | Wrapping, spacing and service rows |
| 521 × 900 | Breakpoint transition |
| 760 × 1024 | Tablet portrait |
| 1024 × 768 | Wider layout and nav balance |
| 1440 × 900 | Line length, whitespace and hierarchy |

Also test English default, saved Kiswahili, unavailable local storage, both themes, keyboard-only operation, visible focus, skip link, 200% zoom, all anchor destinations, language-aware WhatsApp messages, duplicate IDs, browser console errors and deployed commit identity.

## Release status

- Source changes and structural assertions are prepared on a feature branch.
- Automated CI results must be inspected after the pull request is opened.
- Browser rendering and the deployed GitHub Pages version have **not** been verified by this document.
- Do not merge or deploy until checks pass and the remaining visual release gate is completed.
