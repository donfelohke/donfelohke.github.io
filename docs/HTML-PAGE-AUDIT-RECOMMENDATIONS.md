# NAKEBUSEN HTML Page Audit and Step-by-Step Recommendations

Status: proposal based on source inspection; live browser behavior is not yet verified.
Scope: `index.html`, inline CSS/JavaScript, accessibility, service conversion, metadata, links, tests, and deployment checks.
Constraint: the public website remains text-only. Do not add embedded images, SVG, emoji/icon decoration, graphic favicons, CSS image backgrounds, external fonts, trackers, or social-preview images. Gallery is a separate linked destination.

## 1. Executive order

Implement one concern per reviewable pull request. Preserve the existing page and prices. Do not merge or deploy until checks pass and a human reviews the diff.

1. Theme control semantics and text-only label.
2. Mobile navigation and header layout.
3. Contact and booking journey.
4. HTML semantics and accessibility checks.
5. Metadata and structured-data accuracy.
6. Content hierarchy and service copy.
7. Crawl/link integrity and deployment verification.
8. Browser QA at mobile and desktop viewports.

## 2. P0 — Theme toggle

### Source finding
The current source uses moon/sun Unicode symbols in the theme button and sets an accessible label describing the active theme rather than the action. An open PR, #17, proposes replacing symbols with plain text labels.

### Recommendation
- Review PR #17 first; avoid duplicating its changes.
- Use visible text labels only (e.g. `Dark` / `Light`) and no decorative glyphs.
- Make the accessible name describe the action, such as “Switch to dark theme” or “Switch to light theme”; update it after every state change.
- Keep `aria-pressed` semantics consistent with the documented meaning of the button. If it is a toggle button, expose a stable action/name and pressed state; if it is an action button with changing label, do not mix models.
- Keep the system preference as the default and storage failure as a supported fallback.
- Test first load, system dark/light changes, manual toggle, refresh persistence, keyboard activation, and storage disabled/private mode.

Acceptance: no icons/glyphs; accurate accessible name/state; no console errors; test suite covers both themes and fallback behavior.

## 3. P0 — Header and mobile navigation

### Source finding
The header is sticky; the theme control is absolutely positioned. Navigation reserves right-side space, and separate CSS rules change layout below 760px and 360px. This is a plausible overlap risk, not proof of an observed defect.

### Recommendation
- Test widths 320, 360, 390, 430, 768, 1024, and 1440 CSS pixels.
- Confirm wordmark, every navigation link, and theme button remain visible, reachable, and non-overlapping.
- Confirm the header does not consume an excessive fraction of a short mobile viewport.
- Check anchor jumps with sticky-header scroll padding so section headings are not hidden.
- Prefer a simple wrapping layout over a complex menu; do not add a JavaScript hamburger menu unless evidence shows it is necessary.
- Check 200% zoom and text-spacing overrides; avoid fixed heights on text-bearing navigation.
- Keep touch targets comfortable (the existing 44px minimum is a useful baseline).

Acceptance: no horizontal page overflow; no clipped or overlapping controls; all links reachable by keyboard and touch; focused controls are not obscured by the sticky header.

## 4. P0 — Contact and booking journey

### Source finding
The page explains services and directs visitors toward Connect, but actual live contact-link behavior has not been verified in a browser.

### Recommendation
- Keep loc-care booking as the primary conversion path and digital-service enquiries as a separate secondary path.
- Use a clear booking call to action near the service list and a second contact route in Connect.
- Inspect every `href`: verify `tel:+254719635415`, the intended email address, and any messaging link against owner-approved details before publishing them.
- For WhatsApp links, use a verified international-format number and URL-encode any prefilled text. Do not invent a booking endpoint.
- State that an enquiry is a request, not a confirmed appointment; preserve manual confirmation.
- Make the service and price visible before the booking CTA. Avoid fake forms, dead buttons, and claims of automatic booking.
- Keep digital-service enquiries distinct from loc-care bookings to reduce misdirected requests.
- Confirm the contact options remain readable and actionable with JavaScript disabled.

Acceptance: each CTA has a clear purpose and valid destination; no dead links; manual confirmation is explicit; no unapproved prices or service promises.

## 5. P1 — HTML semantics and accessibility

### Source finding
The source has a skip link, semantic sections, labelled navigation, focus styling, responsive type, and reduced-motion handling. Static checks do not prove full WCAG conformance.

### Recommendation
- Preserve one clear primary `h1`; use ordered section headings and meaningful link text.
- Keep the skip link functional and visible on focus.
- Verify all controls can be operated by keyboard and have visible focus.
- Check text contrast in both themes, including muted text, accent colors, borders, button states, and focus outlines.
- Test 200% zoom, browser text-spacing overrides, 320px viewport width, and reduced-motion preference.
- Confirm sticky navigation does not obscure focused links or anchor targets.
- Avoid using color alone to distinguish GRACE, GRIT, and GLORY; retain textual labels.
- Do not add ARIA where native HTML already provides the needed semantics.
- Run an automated accessibility checker if available, followed by manual keyboard and screen-reader spot checks.

Acceptance: no critical automated findings; all primary flows keyboard-usable; contrast and focus reviewed in both themes. Record known exceptions rather than claiming formal WCAG certification.

## 6. P1 — SEO and structured data

### Source finding
The source includes a descriptive title, meta description, canonical URL, Open Graph text fields, Twitter summary fields, and Organization JSON-LD. These text fields are compatible with the no-graphics rule.

### Recommendation
- Keep one canonical URL and verify it matches the deployed GitHub Pages address.
- Make title and description accurately describe the actual page and its primary services; avoid keyword stuffing or claims that cannot be substantiated.
- Review whether Organization is the most accurate structured-data type for the page. Use LocalBusiness/subtype data only if the business details and public location are accurate and intended for publication.
- Do not add empty or guessed social profiles to `sameAs`; include only verified official profiles.
- Validate JSON-LD syntax and ensure every field matches visible page content.
- Keep text-only social metadata; do not add `og:image`, Twitter image metadata, or a graphic favicon under the current policy.
- Confirm `robots.txt` and `sitemap.xml` reference the canonical domain and that the homepage is crawlable.
- Set up Google Search Console and a Business Profile only if eligible and owner-controlled; neither guarantees ranking.

Acceptance: no malformed structured data; canonical, robots, sitemap, title, and description agree with the deployed site. Search appearance is not guaranteed.

## 7. P1 — Content and information architecture

### Recommendation
Keep the page organized around the visitor's decision, not the internal project taxonomy:

1. Hero: what NAKEBUSEN does, where it serves, and the two main paths.
2. Beauty / loc care: services, starting prices, what affects final cost, booking CTA.
3. Technology / WARENA: concrete, bounded service categories and an enquiry CTA.
4. Creative practice / GENJE: concise explanation, subordinate to commercial service journeys.
5. About / authorship: human author and relationship among practices.
6. Connect: distinct loc-care and digital enquiries, then relevant social/Gallery links.

- Use plain-language descriptions before internal terminology.
- Retain “GENJE ZA WARENA” as cultural/creative context, but make the customer-facing service offer immediately understandable.
- Preserve approved prices: Retouch & Styling KES 700; Sisterlocs Retie KES 1,500; Artificial Locs Installation KES 3,500. Confirm current owner approval before any price change.
- Keep “starting price” wording if final cost varies by work/materials; ensure the visible price text and internal tests agree.
- Avoid testimonials, customer counts, certifications, performance claims, or product capabilities without evidence.
- Describe IKAI as in development, not as a released product.
- Keep Gallery as a text link to the separate repository; do not embed its assets on the webpage.

Acceptance: users can identify services, prices, location, booking process, and digital enquiry path without decoding internal project language.

## 8. P2 — CSS, performance, and maintainability

### Recommendation
- Keep the page dependency-free and locally self-contained unless a measured need justifies a dependency.
- Retain system font stacks; do not fetch web fonts or third-party scripts.
- Keep CSS variables for palette and themes; avoid duplicating conflicting declarations.
- Consider splitting long minified CSS/JavaScript into readable lines for maintainability without changing behavior.
- Keep decorative CSS elements minimal and non-semantic; text-only policy prohibits image/graphic assets, not necessary layout borders.
- Avoid adding analytics/tracking by default. If measurement is later required, choose a privacy-respecting approach and document it.
- Check that JavaScript failure does not hide essential content or make contact links unusable.

Acceptance: no new network dependencies; no console errors; no unnecessary runtime code; content remains readable if JavaScript fails.

## 9. Test suite improvements

Extend static tests to verify:
- One primary `h1`, valid section IDs, internal anchor targets, and descriptive navigation labels.
- Text-only theme button and accessible name/state.
- No `img`, `picture`, `svg`, `canvas`, embedded media, CSS image URL/background, graphic favicon, `og:image`, or social image metadata.
- No external font, analytics, or tracking dependencies.
- Service names and approved starting prices.
- Valid contact schemes and expected approved destinations.
- Canonical URL, title, description, JSON-LD parsing, robots and sitemap consistency.
- No duplicate IDs and no broken internal links.

Static tests cannot detect all visual overlap, contrast, or browser interaction issues. Keep browser checks as a separate release gate.

## 10. Release and verification protocol

1. Inspect current main and all open PRs before editing.
2. Make one concern per branch and PR; preserve existing changes.
3. Run repository tests on the branch.
4. Inspect the diff and check for accidental assets, changed prices, or changed contact details.
5. Verify workflow status on the exact PR head commit.
6. Review at real browser viewports on mobile and desktop; capture the viewport, browser, date, and findings in the audit record.
7. Merge only after review and passing required checks.
8. Confirm the Pages deployment workflow succeeded for the merge commit.
9. Re-open the deployed URL and verify the actual deployed revision; do not treat a successful workflow as proof of visual correctness.
10. Record unresolved issues and do not state that a change is live until verified.

## 11. Priority summary

- **P0:** Review existing theme-label PR; test/fix header wrapping; verify contact and booking destinations.
- **P1:** Accessibility checks; metadata and JSON-LD accuracy; content hierarchy; stronger static assertions.
- **P2:** CSS readability, performance checks, optional privacy-respecting measurement.
- **Release blocker:** any unverified contact detail, incorrect price, navigation overlap, broken CTA, graphics-policy violation, failing required check, or mismatch between source and deployed revision.

## Evidence boundaries

Source inspection confirms the markup and CSS rules described above. It does not establish live rendering, actual customer conversion, search ranking, or formal WCAG conformance. Verify those separately before describing them as facts.
