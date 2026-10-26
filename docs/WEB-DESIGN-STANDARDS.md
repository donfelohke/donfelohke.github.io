# NAKEBUSEN Website Design and Engineering Standards

Status: approved project constraints; implementation and release evidence must be recorded separately.

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

**Release-blocking policy conflict — explicit owner decision required.**

The repository has inconsistent default-language guidance:
- `README.md` currently states that English (`en`) is the default and primary language.
- Earlier wording in this standards document stated that Kiswahili (`sw`) is the public homepage default.
- The homepage implementation has been reviewed as English-default.

Do not silently choose a policy or treat these statements as reconciled. Until the site owner explicitly decides the default, record the language-policy release gate as **Blocked**. After the decision, align the homepage implementation, README, this document, translations, and automated tests before release.

Once the policy is approved:

- Provide a clearly labelled, text-only language toggle in the header and footer.
- Both controls must perform the same action and share one preference stored under `nakebusen-language`; do not duplicate language state or use duplicate HTML IDs.
- Update `html lang`, all visible translated copy, page title, description and relevant social-description metadata according to the approved language policy.
- Keep language preference independent of the light/dark theme preference.
- If storage is unavailable, the page must remain usable and follow the approved default/fallback behaviour.
- Every public content change must update both language dictionaries and preserve service prices, booking disclaimers, brand names and technical maturity labels.
- Prefer natural Kenyan Kiswahili; keep well-understood service/technical terms where translation would reduce clarity. Human review is a release task.

## Accessibility and usability

- Target WCAG 2.2 AA.
- Maintain visible keyboard focus and logical navigation.
- Use semantic HTML and descriptive link text.
- Ensure both themes have sufficient text and control contrast.
- Test theme and language controls for coherent accessible names, roles and state announcements.
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

Use the complete test matrix, result definitions and evidence template in [NAKEBUSEN Browser-Based Release Checklist](NAKEBUSEN-BROWSER-RELEASE-CHECKLIST.md).

1. Resolve the default-language policy conflict and align documentation, implementation and tests.
2. Run `python3 tests/test_site.py`.
3. Run `node tests/theme-toggle.test.cjs`.
4. Review the diff for accidental graphics, stale pricing, inconsistent translations and unsupported claims.
5. Verify responsive rendering at 320, 360, 390 and 430 CSS-pixel widths plus desktop layouts in available real browsers.
6. Verify visible translations, language metadata, both theme states, preference persistence/fallback, keyboard access and relevant assistive-technology behaviour.
7. Verify service prices, contact links, WhatsApp handoff and booking disclaimers.
8. Inspect the GitHub Actions result and record browser QA separately from static CI results.
9. Verify the deployed site only after a separately approved release; record the live URL, deployed commit, browser/device and evidence.

A passing static test is not proof of real-browser correctness or live visual correctness. Do not claim browser testing or deployment verification without evidence. The checklist does not itself authorise merging, closing a pull request, or deploying.
