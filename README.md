# FELOH / DonFeloh — Public Portfolio

Repository: `donfelohke/donfelohke.github.io`  
Public URL: https://donfelohke.github.io/  
Stable branch: `main`

Canonical public brand lockup:\n\n> NAKEBUSEN Locs • Digital  \n> Powered by WARENA  \n> @donfelohke · #HisGenjeness\n\nFELOH / DonFeloh is the public portfolio of Felix Lwova: human author, systems engineer, loctician and creative technologist. It connects NAKEBUSEN Locs, WARENA systems engineering, IKAI reflective-compute research, GENJE creative technology and the FELOH corpus.

> FELOH generates. NAKEBUSEN grounds. IKAI reflects. WARENA enables. GENJE embodies.

This static website presents services and routes enquiries; it does not confirm appointments or process payments.

## Language policy

**English is the default and primary language** for the global audience, including the homepage, README, technical copy, research summaries, project documentation, metadata and contributor guidance.

Provide a clearly labelled **Kiswahili / English language toggle** for Kenyan and regional audiences, local research, community-facing explanations and service copy. Where a page offers both languages, the toggle should be accessible by keyboard, use accurate language labels, update the document language and relevant page metadata, and preserve the user's choice where practical. Do not make Kiswahili content a prerequisite for understanding the primary English page.

Language principles:
- English-first does not mean English-only: local context and Kiswahili research remain part of the public record.
- Translate meaning, not just words; retain culturally specific terms where translation would erase their meaning, and explain them when useful.
- Mark draft translations for fluent editorial review; do not present unreviewed translation as authoritative.
- Keep prices, service scope, contact details and operational claims consistent across languages.
- For research and technical documentation, preserve original-language quotations and source wording when relevant, alongside a clearly identified translation.
- Keep source material, translation decisions and substantive revisions version-controlled.

## Canonical domains\n\nUse the three-line lockup above consistently across the homepage hero/footer, README, approved webcopy, metadata and brand documentation. Keep the wording and line order exact; do not substitute “NAKEBUSEN Locs & Digital” or omit the WARENA attribution or creator signature in canonical brand placements.

- **FELOH / DonFeloh — GLORY / Author:** human authorship, expression and creative practice.
- **NAKEBUSEN — GRACE / Crown:** loc care, craft, livelihood and customer contact.
- **WARENA — GRIT / Enable:** GNU/Linux, reproducible/local-first computing and maintainable infrastructure.
- **IKAI — Mirror / Reflect:** reflective-compute research; a mirror, not a judge. Treat as work in progress unless release evidence says otherwise.
- **GENJE / GENJE ZA WARENA — Wave / Embody:** AfroTech, Genge, live coding, movement and choreohacking.

## Current public service catalogue

All listed prices are starting prices in Kenyan shillings; final quotes depend on the client's locs, requested work, materials and any agreed additional services.

- Retouch & Styling — from KES 700.
- Sisterlocs Retie — from KES 1,500.
- Artificial Locs Installation — from KES 3,500.
- Primary location phrase: **Eldoret Town / Karibu Mdosi**.
- WhatsApp / telephone: 0719 635 415 — https://wa.me/254719635415
- Handle: **@donfelohke**.

Confirm availability, suitability, final price and timing directly. An enquiry is not a confirmed booking or accepted project. Do not invent testimonials, certifications, clients, service guarantees, durations or availability. Braiding is not part of the current advertised service scope.

## Public brand and copy hierarchy

Lead with the customer's need and the service offered; explain the internal brand philosophy only after the practical offer is clear.

- **Master identity:** NAKEBUSEN Locs & Digital — Powered by WARENA — by @donfelohke.
- **Core beauty message:** “Your Beauty. Your Way.” Loc care is the primary customer-facing beauty offer; use the verified Eldoret Town / Karibu Mdosi location phrase.
- **Beauty conversion path:** service and starting price → scope/pricing caveat → WhatsApp enquiry → direct confirmation. An enquiry is not a confirmed appointment.
- **Digital message:** “Practical technology. Greater digital independence.” Explain GNU/Linux, computer systems, networking, infrastructure and development workflows through concrete client needs and agreed deliverables.
- **WARENA message:** “Freedom Is a System.” Describe maintainability, understandable systems and greater digital independence without promising unsupported outcomes.
- **IKAI status:** reflective-compute research in progress; never imply that IKAI is a released product.
- **GENJE / FELOH:** creative technology, living memory, movement and human authorship are supporting identity context, not substitutes for the service descriptions.
- **Voice:** clear, grounded, specific and respectful. Avoid generic luxury claims, invented proof, unexplained jargon and inflated guarantees.
- **Metadata:** keep the page title and descriptions aligned with loc care in Eldoret and practical technology powered by WARENA. The website's text-only asset policy remains in force.
- **Language:** English is the default for global audiences. Kiswahili translations should preserve prices, service boundaries and enquiry caveats, and be reviewed for meaning and local usage.

## Website and assets

**Webpage rule: no graphics.** The public HTML page must not embed images, SVG artwork, video, canvas, CSS image backgrounds, graphic favicons or social-preview images. Use typography, spacing, borders, colour and accessible text controls. Visual assets belong in the separate Gallery repository and may be linked as text destinations, never rendered inline on this page.

- `index.html` — public website, language/theme controls, metadata and organization structured data.
- `assets/README.md` — asset policy and repository guidance. No graphic favicon is linked from the webpage.
- `sitemap.xml` and `robots.txt` — basic crawl discovery.
- `tests/test_site.py` — dependency-free HTML/content/link checks, including enforcement of the no-graphics policy.
- `tests/theme-toggle.test.cjs` — Node-based theme preference behavior checks.
- `.github/workflows/` — static checks and GitHub Pages deployment.

**Photography status:** no approved client/service photos or approved technical/creative portfolio images were present in the repository at the time of the documented audit. Do not present generated or stock imagery as real client work. Add only owner-approved assets with appropriate permission and useful alternative text.

## Principles

- Static HTML/CSS and Markdown by default; no build system required.
- No analytics, trackers, external fonts or required CDN unless a reviewed decision explicitly changes this policy.
- Git is the source of truth; use branches and pull requests for meaningful changes.
- Distinguish proposed, researched, designed, prototyped, tested and deployed work.
- Keep research source-first: record citations, source dates, translation choices, uncertainty and unresolved questions.
- Never commit secrets or private customer data.
- IKAI must not introduce face identification, diagnosis, scoring, covert surveillance or hidden profiling.
- Preserve the existing GPL-3.0 LICENSE file.

## GitHub Pages and verification

In repository Settings → Pages, choose GitHub Actions as the build/deployment source. Inspect Actions and verify the published URL. A successful workflow confirms its configured steps completed; it does not substitute for desktop/mobile browser testing or editorial review of bilingual copy.

For language-toggle changes, verify:
- English is the default on a fresh visit.
- Both language controls, if duplicated in header/footer, stay in sync.
- The document `lang`, title and description match the selected language where supported.
- Language preference does not overwrite the independent light/dark theme preference.
- Both languages are complete and usable at narrow mobile widths and with keyboard navigation.
- The live deployed page matches the reviewed commit.

## Research, documentation and contribution

Use English as the primary cross-project documentation language, with Kiswahili alongside it where local understanding, community participation or source fidelity benefits. Keep original sources linked and distinguish evidence from interpretation, recommendations and unknowns.

Before contributing:
1. Inspect current issues, pull requests and repository conventions.
2. Preserve existing work and make focused, reviewable changes on a branch.
3. Include the reason for the change, evidence, affected files and checks performed.
4. Do not claim browser verification or deployment without corresponding evidence.
5. Review both language versions when changing public-facing copy.

## Delivery status

Record the PR, commit, successful workflow run and live visual verification separately. Do not claim desktop/mobile rendering was tested unless screenshots or browser-test evidence exists.
