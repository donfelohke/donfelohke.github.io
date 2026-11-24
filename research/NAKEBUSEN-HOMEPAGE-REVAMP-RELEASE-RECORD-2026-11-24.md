# NAKEBUSEN homepage revamp — release record

**Date:** 24 November 2026  
**Repository:** `donfelohke/donfelohke.github.io`  
**Branch:** `revamp/naKEBUSEN-design-copy-2026-11-24`  
**Status:** Implementation prepared; automated validation and production deployment pending.

## Approved direction

The owner approved the Rooted Editorial Service Portal design and copy direction documented in [NAKEBUSEN Page Design, Copy and Experience Research](NAKEBUSEN-PAGE-DESIGN-COPY-RESEARCH-2026-11-24.md).

## Implemented in this change

- Reframed the hero around the customer task: loc care in Eldoret, published prices and direct enquiry.
- Added a secondary, clearly separate WARENA technical-support pathway.
- Added the founder authorship mark to the desktop topbar.
- Tightened the English service descriptions and the service-selection guide.
- Removed the second repeated “agree details” panel; the booking process and FAQ retain the necessary safeguards.
- Shortened the English founder biography and clarified the distinct status of IKAI and GENJE.
- Changed the floating navigation label from VISIT to CONNECT; retained the descriptive “Visit & Contact” section.
- Refined the visual hierarchy, typography scale, cards, spacing, glass surfaces and responsive treatments in the existing stylesheet.
- Updated the copy, navigation and repository documentation to match the implementation.

## Preserved public facts and boundaries

- Retouch & Styling — **KES 700**
- Sisterlocs Retie — **KES 1,500**
- Artificial Locs Installation — **KES 3,500**
- No braiding or shaving; the founder does not cut clients' natural hair.
- An enquiry does not confirm a booking. Availability and final terms are agreed directly.
- Existing location, map references, phone, WhatsApp and email remain unchanged.
- The footer's manual M-PESA payment instructions, Till, account / merchant name, safety wording and separate voluntary Support Us content are unchanged.
- NAKEBUSEN remains the customer-facing transaction point. WARENA remains the technical capability domain.

## Technical scope

- Existing hand-authored HTML and CSS only.
- No JavaScript runtime, framework, package manager, CMS, analytics, tracking, remote fonts or new image dependency.
- Existing native English / Kiswahili selector retained. English editorial copy was revised; existing Kiswahili remains the published baseline and was not represented as newly human-reviewed.
- Footer/payment/support markup and wording were not edited.

## Validation and deployment gates

### Automated
- Run `python -m unittest discover -s tests -v`.
- Verify one page-level H1, unique IDs, all fragment targets, price strings, service boundaries, language controls, payment facts and absence of runtime dependencies.
- Confirm GitHub Pages workflow succeeds after merge.

### Manual — not yet claimed complete
- Capture actual browser screenshots at 320, 360, 390, 430, 768, 1024 and 1440 CSS px.
- Check 200% and 400% zoom, keyboard focus, fixed-dock overlap, light/dark themes, reduced motion and reduced transparency.
- Test TalkBack on Android and a desktop screen reader.
- Review English/Kiswahili parity with a competent Kiswahili speaker.
- Verify contact and map handoff on a physical mobile device.
- Record actual browser, device, commit and results before claiming WCAG conformance or performance improvement.

WCAG 2.2 AA includes reflow at 320 CSS px and Focus Not Obscured (Minimum); these remain verification requirements, not conformance claims.

## Rollback

If the deployed revision causes a regression, revert the production implementation pull request's merge commit. The prior production source remains available in Git history. Do not roll back the separate approved research record unless it is itself incorrect.
