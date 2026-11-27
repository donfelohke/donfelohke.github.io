# NAKEBUSEN-ng — Research-led homepage refinement

**Date:** 24 November 2026  
**Status:** Approved direction · implementation under validation  
**Base:** main at e14aa1ae8904f25a21036fdd071bc1c6e459d699  
**Working branch:** prototype/nakebusen-ng-glass-2026-11-24

## Outcome

Improve the existing single-page website through evidence-led copy, hierarchy and visual refinement. The page remains a static, text-first publication, not a web application.

## Research decisions

- Keep **Beautiful Roots. Sovereign Systems.** as the master positioning. It links NAKEBUSEN's beauty/heritage practice to WARENA's systems capability. Use **Sovereign Futures** as supporting horizon language, not as a replacement master line.
- Keep **Freedom Is a System.** as WARENA's technical line.
- Lead the homepage with an immediately understandable offer: professional loc care in Eldoret and practical computing/network support.
- Make the primary action specific to the principal customer journey: **Enquire about loc care**. The secondary action exposes services and prices.
- Use a concise local-search title and description that accurately describe loc care in Eldoret. Do not keyword-stuff or imply unverified opening hours or booking availability.
- Move NAKEBUSEN's Lodwar business history out of the hero panel and into the founder/about narrative, keeping it distinct from personal biography.

## Decisions implemented

- Preserve the existing one-page information architecture, existing IDs, service catalogue, contact links and service enquiry paths while refining the hero copy in both languages.
- Retain the balanced forest-green hero with editorial typography and restrained glass framing.
- Keep service cards, prices, booking terms, payment details and voluntary support on opaque, readable surfaces.
- Retain the three-item mobile dock: LOCS, DIGITAL, CONNECT.
- Retain the native CSS-only language selector and operating-system light/dark preference.
- Provide opaque fallbacks before backdrop-filter; reduced-transparency preferences receive opaque surfaces.
- Preserve reduced-motion handling and avoid introducing new motion.
- No JavaScript, framework, package manager, remote font, image, analytics, tracking, API, payment automation or external runtime dependency.

## Brand and business guardrails

- NAKEBUSEN leads the commercial relationship; WARENA supplies distinct technical capability.
- **ONLY NAKEBUSEN TRANSACTS.**
- Published loc-care prices remain Retouch & Styling — from KES 700+; Sisterlocs Retie — from KES 1,500+; Artificial Locs Installation — KES 3,500 fixed.
- No braiding or shaving claims are introduced.
- An enquiry does not confirm a booking.
- Manual M-PESA service-payment information and separate Support Us language remain unchanged.
- IKAI remains research / work in progress; GENJE remains creative practice.

## Accessibility and performance acceptance

- Preserve visible keyboard focus and skip navigation.
- Keep primary touch targets at or above 44 CSS pixels.
- Test reflow at 320, 360, 390, 768, 1024 and 1440 CSS pixels.
- Verify both language states, light/dark preference, reduced motion and reduced transparency.
- Verify that the fixed dock does not obscure focused controls or anchored destinations.
- Verify contrast on rendered hero surfaces, including the glass panel. Token calculations alone are not a rendered contrast audit.
- No third-party requests, scripts or fonts are introduced.
- Core Web Vitals are measurement targets, not claims of achieved performance: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile.

## Validation status

The static-site validation workflow must pass on the branch. Manual browser QA at the listed widths, keyboard-only navigation, screen-reader reading order, both languages, both colour schemes and accessibility media preferences remains a separate verification task. CI/source tests do not establish visual correctness, WCAG conformance or live deployment.

## Review boundary

This branch contains the approved direction and implementation candidate. Merge and deployment are separate from source-level validation; record the exact deployed commit and inspect the live site after publication.
