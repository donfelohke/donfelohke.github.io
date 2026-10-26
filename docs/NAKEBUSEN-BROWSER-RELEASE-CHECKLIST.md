# NAKEBUSEN Browser-Based Release Checklist

Status: proposed operational checklist; test evidence must be recorded per release candidate.
Scope: browser and end-to-end verification of the NAKEBUSEN Locs • Digital public site.
Repository: `donfelohke/donfelohke.github.io`
Public URL: https://donfelohke.github.io/
Related review: PR #33 — Integrate NAKEBUSEN webcopy and bilingual controls.

## How to use this checklist

- Test the exact candidate commit and record its full SHA.
- Mark each item **Pass**, **Fail**, **Blocked**, or **Not tested**. Do not treat an unchecked item as passed.
- Record the browser and version, operating system/device, viewport in CSS pixels, steps, expected result, actual result, tester/date, and evidence URL or screenshot.
- File defects with reproducible steps, severity, and the affected browser/device.
- Static CI success, local browser evidence, and live-site verification are separate evidence classes.
- Do not claim a browser, assistive-technology, or live-site check was performed without evidence.
- This checklist is not permission to merge, close a pull request, or deploy.

## Release-blocking policy decision: default language

The current repository documents conflict:
- `README.md` states that English is the default and primary language.
- `docs/WEB-DESIGN-STANDARDS.md` has stated that Kiswahili is the default language.
- The homepage implementation has been reviewed as English-default.

**Gate: Blocked until the site owner explicitly chooses the default language and the implementation, standards, README, and tests agree.** Do not infer or silently choose a policy while running the release. Once decided, update this section and test expected behaviour accordingly.

## A. Candidate and automated baseline

- [ ] Record candidate branch, commit SHA, pull request, and date.
- [ ] Confirm the change set contains only reviewed, intended files.
- [ ] Run `python3 tests/test_site.py`; save the command result.
- [ ] Run `node tests/theme-toggle.test.cjs`; save the command result.
- [ ] Confirm the relevant GitHub Actions workflow completed successfully on the candidate SHA.
- [ ] Review test coverage gaps; do not treat fake-DOM assertions as proof of real browser rendering or visible-text translation.
- [ ] Confirm service prices and booking caveats match the approved catalogue.
- [ ] Confirm no private customer data, credentials, trackers, or prohibited embedded graphics were introduced.

## B. Browser and viewport matrix

Run the critical checks in the following environments where available. Record unavailable environments as **Not tested**, not Pass.

| Environment | Required coverage |
| --- | --- |
| Android Chrome | 320, 360, 390 and 430 CSS-pixel widths; touch interaction; reload |
| Desktop Chrome/Chromium | Narrow responsive width, laptop width, wide desktop |
| Desktop Firefox | Responsive layout, keyboard, theme, language |
| Safari on iOS/macOS | If available: layout, storage, system preference, contact handoff |
| Live GitHub Pages | Only after a separately approved release; never substitute local testing for live verification |

For each browser/viewport, record browser version, OS/device, viewport, date, result, and evidence.

## C. Responsive layout and content

- [ ] At 320 CSS px, no unintended horizontal page overflow.
- [ ] At 360, 390 and 430 CSS px, headings, cards, prices, links and controls remain readable.
- [ ] Desktop layout has sensible line lengths, spacing, hierarchy and navigation.
- [ ] Header, navigation, hero and top-right theme/language controls do not overlap.
- [ ] Long Kiswahili and English strings wrap without clipping or hiding controls.
- [ ] Footer remains readable and reachable on narrow and wide screens.
- [ ] Browser zoom at 200% remains usable without loss of content or functionality.
- [ ] No unexpected layout shift, broken assets, blank regions or browser error overlays.
- [ ] The no-embedded-graphics rule is respected: no inline images, SVG, canvas, video, iframe, CSS image backgrounds, graphic favicon, or social-image metadata.

## D. Language switching and localisation

Run after the default-language policy decision is resolved.

- [ ] Initial page language matches the approved default.
- [ ] Header language control changes the language and updates visible content.
- [ ] Footer language control performs the same action and stays synchronised with the header.
- [ ] Check all visible copy: navigation, hero, service descriptions, prices/caveats, CTAs, contact copy and footer.
- [ ] Switch English → Kiswahili and then Kiswahili → English; verify both directions.
- [ ] No untranslated keys, missing strings, stale mixed-language copy, or accidental translation of protected brand names.
- [ ] `html lang` matches the selected language.
- [ ] Page title and relevant description/social-description metadata match the approved language behaviour.
- [ ] Language preference persists across reload if storage is available.
- [ ] With storage blocked/unavailable, page remains usable and follows the approved fallback.
- [ ] Fresh session, existing preference, and browser back/forward do not create contradictory language states.
- [ ] A fluent human reviewer checks natural Kenyan Kiswahili and service terminology before release.

## E. Theme, preferences and visual accessibility

- [ ] Light theme is readable and all controls remain visible.
- [ ] Dark theme is readable and all controls remain visible.
- [ ] Theme toggle works by pointer/touch and keyboard.
- [ ] Theme preference persists as documented, independently of language preference.
- [ ] With storage unavailable, theme still works for the current session and content remains usable.
- [ ] System colour preference behaviour matches the documented implementation.
- [ ] No flash or transient unreadable state makes content inaccessible during load or preference changes.
- [ ] Reduced-motion preference is respected wherever transitions or motion are used.
- [ ] Contrast of text, links, borders, focus indicators and controls is checked against WCAG 2.2 AA targets.

## F. Keyboard, semantics and assistive technology

- [ ] Complete primary navigation and all actions with keyboard only.
- [ ] Focus order follows the visual/content order and does not skip important controls.
- [ ] Focus indicator is visible in both themes and never obscured.
- [ ] Enter and Space activate controls according to their semantics.
- [ ] Theme/language controls have meaningful accessible names and correct roles/states.
- [ ] Toggle state announcements are coherent; do not mix an action-label pattern and a pressed-state pattern ambiguously.
- [ ] Heading levels, landmarks, lists and link text are meaningful.
- [ ] Content remains understandable with a screen reader; test at least one available screen-reader/browser pairing if feasible.
- [ ] No keyboard trap, duplicate IDs, inaccessible hidden content, or focus loss after switching preferences.
- [ ] At 200% zoom and narrow widths, controls remain reachable and their labels do not overlap.

## G. Service catalogue and booking/contact flow

- [ ] Retouch & Styling is shown at **from KES 700**.
- [ ] Sisterlocs Retie is shown at **from KES 1,500**.
- [ ] Artificial Locs Installation is shown at **from KES 3,500**.
- [ ] Prices and service scope match across languages and any repeated page locations.
- [ ] Copy does not advertise braiding or other unapproved services.
- [ ] Copy explains that prices are starting prices where applicable and final scope/price requires direct confirmation.
- [ ] An enquiry is not represented as a confirmed appointment, accepted project, or payment.
- [ ] WhatsApp/telephone target is the intended number: **+254 719 635 415** (display may use 0719 635 415).
- [ ] WhatsApp link resolves to the intended destination and prefilled text is correctly URL-encoded.
- [ ] Prefilled message is readable, does not contain stale or misleading service details, and supports the intended enquiry.
- [ ] Contact links are tested on desktop and mobile; if the required app is unavailable, record the observed fallback.
- [ ] Social links open the correct profiles and do not lead to placeholders or unintended destinations.
- [ ] No fake booking form, unverified availability claim, fabricated testimonial, credential or guarantee is present.

## H. SEO, metadata, privacy and browser health

- [ ] Canonical URL matches the approved public URL.
- [ ] Title and meta description are accurate, non-empty and consistent with visible content.
- [ ] Open Graph and Twitter text metadata are present and consistent with the no-social-image policy.
- [ ] Structured data, if present, parses and matches factual visible business details.
- [ ] Favicon references are valid and comply with the approved text-only/no-graphic rule.
- [ ] Internal links resolve; no unexpected placeholders or broken anchors remain.
- [ ] Browser console has no uncaught JavaScript errors; warnings are triaged.
- [ ] Network failures are investigated and not hidden by a successful page shell.
- [ ] Reload and direct navigation work; browser back/forward does not break state.
- [ ] No unexpected analytics, trackers, third-party scripts or data collection were introduced.
- [ ] Page remains useful with unnecessary external network requests blocked.

## I. Evidence and release decision

For every test, use a record such as:

| Field | Record |
| --- | --- |
| Test ID / section | |
| Candidate commit SHA | |
| Browser + version | |
| OS / device | |
| Viewport (CSS px) | |
| Steps | |
| Expected result | |
| Actual result | |
| Status (Pass / Fail / Blocked / Not tested) | |
| Evidence URL / screenshot | |
| Defect link / severity | |
| Tester and date | |

### Release gates

- [ ] Language-default policy conflict is resolved and all policy/implementation/test references agree.
- [ ] Automated tests pass on the exact candidate SHA.
- [ ] Critical mobile and desktop checks have recorded evidence.
- [ ] Language switching and both theme states pass in a real browser.
- [ ] Keyboard and accessibility checks pass, with exceptions documented.
- [ ] Service prices, contact handoff and booking disclaimers pass.
- [ ] SEO, metadata, privacy and browser-console checks pass.
- [ ] No open release-blocking or high-severity defects remain.
- [ ] Reviewer records a clear recommendation and outstanding risks.
- [ ] Merge approval is obtained separately; this checklist does not authorise merging.
- [ ] After a separately approved release, verify the actual live URL and record timestamp, deployed commit, browser/device, and evidence. Until then, live verification remains **Not tested**.

## Severity guidance

- **Critical / High:** blocks core content or contact flow; exposes private data; makes essential controls unusable; materially misstates services/prices; severe accessibility failure; or prevents reliable use on common mobile browsers. Do not release with unresolved issues.
- **Medium:** meaningful usability, translation, metadata or responsive defect with a workaround. Resolve or explicitly accept with rationale before release.
- **Low:** minor visual inconsistency or non-blocking polish. Record and prioritise without misrepresenting the overall status.

## Explicit non-goals

This checklist does not approve changing the language default, altering service prices/copy, merging or closing any PR, or deploying the site. Those decisions require their own explicit approval.
