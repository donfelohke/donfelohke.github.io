# NAKEBUSEN Website Design and Engineering Standards

Status: approved project constraint; implementation evidence must be recorded separately.

## Non-negotiable presentation rule

The GitHub Pages webpage contains **no embedded graphics**. Do not add:

- HTML image, picture, SVG, canvas, video, iframe, object, or embed elements.
- CSS image backgrounds, CSS `url(...)` image assets, or base64/data-URI artwork.
- Graphic favicons linked from the webpage.
- Open Graph or Twitter image metadata.
- Decorative graphics disguised as emoji, icon fonts, or elaborate CSS illustrations.

The separate Gallery repository is the home for visual assets. The website may link to the Gallery or to individual assets using descriptive text links, but must not render them inline.

## Visual direction

- Editorial typography, readable line lengths, generous whitespace, and clear hierarchy.
- Restrained charcoal, warm cream, gold, terracotta, and approved accent colours.
- Use semantic headings, lists, borders, spacing, and colour—not decorative artwork—to organise content.
- Keep the top-right light/dark theme control accessible and functional.
- Mobile-first layout; no horizontal overflow at narrow widths.
- Respect `prefers-reduced-motion`; do not add motion that delays content access.
- Avoid external fonts, trackers, unnecessary JavaScript, and mandatory third-party assets.

## Language and localisation

- Kiswahili (`sw`) is the default language on the public homepage; English (`en`) is available through a text-only language toggle in both the header and footer.
- Both controls must perform the same action and share one preference stored under `nakebusen-language`; do not duplicate language state or use duplicate HTML IDs.
- Update `html lang`, visible navigation and page copy, page title, description and social description when the language changes.
- Keep language preference independent of the light/dark theme preference. If storage is unavailable, the page must remain usable with Kiswahili as the default.
- Every public content change must update both language dictionaries and preserve service prices, booking disclaimers, brand names and technical maturity labels.
- Prefer natural Kenyan Kiswahili; keep well-understood service/technical terms where translation would reduce clarity. Treat human review as a release task.

## Accessibility and usability

- Target WCAG 2.2 AA.
- Maintain visible keyboard focus and logical navigation.
- Use semantic HTML and descriptive link text.
- Ensure both themes have sufficient text and control contrast.
- Do not add a fake booking form. An enquiry does not equal a confirmed booking or payment.

## Content integrity

- Treat the service catalogue as the authoritative public price source.
- Current starting prices: Retouch & Styling — KES 700; Sisterlocs Retie — KES 1,500; Artificial Locs Installation — KES 3,500.
- Confirm public wording, contact links, location, and availability before release.
- Never fabricate testimonials, qualifications, customer identities, or guarantees.
- Do not commit customer records, private messages, payment references, or credentials.

## SEO and privacy

- Keep unique, accurate page titles, meta descriptions, canonical URL, and text-only social metadata.
- Do not add social-preview image metadata.
- Keep structured data factual and consistent with visible public information.
- Do not introduce analytics, tracking pixels, or third-party scripts without explicit review.

## Release gates

1. Run `python3 tests/test_site.py`.
2. Run `node tests/theme-toggle.test.cjs`.
3. Review the diff for accidental graphics, stale pricing, and unsupported claims.
4. Verify mobile and desktop rendering, keyboard operation, and both theme states in a real browser.
5. Inspect the GitHub Actions result and verify the deployed site separately.
6. Record repository evidence, automated test results, and live-browser verification as distinct statuses.

A passing static test is not proof of live visual correctness. Do not claim browser testing or deployment verification without evidence.
