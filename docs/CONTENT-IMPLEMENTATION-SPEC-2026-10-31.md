# Website content implementation specification

**Date:** 2026-10-31  
**Repository:** donfelohke/donfelohke.github.io  
**Status:** PROPOSED IMPLEMENTATION SPECIFICATION — not approval to publish unresolved facts

## 1. Purpose and audience

The website is the public audience view for NAKEBUSEN. It should make two practical routes immediately understandable:
1. **LOCS · CROWN** — loc care and styling.
2. **DIGITAL · WARENA** — practical technology services powered by WARENA.

GENJE provides cultural/creative context. IKAI is research context only. Neither should distract from the two commercial paths or appear as a checkout option.

## 2. Identity lock

**H1:** Beautiful Roots. Sovereign Systems.  
**Supporting line:** Craft, technology and culture rooted in African ingenuity.  
**Canonical lockup:** NAKEBUSEN Locs ° Powered by WARENA.  
**Commercial rule:** ONLY NAKEBUSEN TRANSACTS.

Use the degree sign (°), not a bullet, middle dot or multiplication sign, in the canonical lockup. Other section labels may use a middle dot where semantically appropriate.

## 3. Recommended information hierarchy

1. Header: canonical lockup; compact navigation; theme/language controls; one clear enquiry action.
2. Hero: H1, supporting line, concise explanation of NAKEBUSEN, and two clear paths.
3. LOCS · CROWN: primary customer offer; three approved loc services and starting prices; clear scope/quote/booking disclaimer.
4. DIGITAL · WARENA: plain-language list of scoped practical services; no claim that research stack components are deployed.
5. GRACE · GRIT · GLORY: short philosophical framework, subordinate to customer needs.
6. GENJE ZA WARENA: authored creative practice and identity; no commercial booking CTA.
7. Founder: Felix Lwova · Don Feloh only after owner approval of exact public attribution; do not publish CTO unless separately approved and substantiated.
8. Contact: verified WhatsApp/telephone/email and confirmed social links; make location-specific enquiry explicit.
9. Footer: exact canonical lockup, enterprise boundary, copyright/author attribution and language control.

## 4. Canonical public LOCS copy

### LOCS · CROWN

**Your Crown. Your Craft.**

Professional loc care and styling in Eldoret Town / Karibu Mdosi, Kenya.

| Service | Starting price |
|---|---:|
| Retouch & Styling | KES 700+ |
| LOCS Retie | KES 1,500+ |
| Artificial Locs Installation | KES 3,500+ |

Prices are starting points, not final quotes. Final cost depends on loc condition, scope, materials and complexity. Confirm service location, timing, availability and final price directly. An enquiry is not a confirmed booking.

Do not list braiding or shaving. Do not add nail services or historical prices without separate current approval.

## 5. DIGITAL copy contract

**DIGITAL · WARENA — Powered by WARENA.**

Practical computing and systems support, scoped to the actual need:
- GNU/Linux and workstation support.
- Computer diagnostics and maintenance.
- Small-office networking and Wi-Fi.
- Local-first and offline-capable systems.
- Infrastructure planning and documented handover.

Use “available by engagement” only if that engagement pathway is operational. Avoid claims about a named server, 40-tool fleet, M-Pesa integration, KRA eTIMS integration, production payment core, installed stack or deployed community network unless a current evidence record supports the exact claim.

## 6. GENJE and IKAI copy boundaries

- GENJE ZA WARENA is the founder's cultural and creative identity: Genge-rooted sound, AfroTech, livecoding, movement, choreography and choreohacking.
- “THE FIRE OF THE FORMIDABLE” is an adopted creative interpretation, not a verified dictionary translation or etymology.
- IKAI is reflective-compute research / work in progress, not a released product. Do not advertise features, availability, outcomes, biometric functions or sensor integrations without implementation evidence.
- Commercial enquiries and transactions route through NAKEBUSEN only.

## 7. Founder and credentials

Until explicitly approved:
- Provisional attribution: **Felix Lwova · Don Feloh**.
- Do not publish **CTO**, professional certifications, institutional affiliations, client counts, awards or other credentials without owner approval and suitable evidence.
- Do not infer identity, age, ethnicity or other personal characteristics from a portrait. Use only owner-supplied caption and approved usage rights.

## 8. Location, payment and social links

- Current LOCS campaign language: **Eldoret Town / Karibu Mdosi**.
- Lodwar / Kanamkemer may be described as roots or historical business context, not current service availability unless confirmed.
- Do not promise “other locations by arrangement”, home calls or travel availability without current owner confirmation and a clear travel-fee policy.
- Payment instructions, merchant names, Till/Paybill numbers and payment-support copy must remain unpublished until independently checked against current merchant records and owner confirmation.
- Verify every social URL by opening it and confirming ownership, intended public role and monitoring. A link in a README is not proof of account ownership or availability.

## 9. Language and localization

English is the default structural language. Kiswahili should be natural, audience-appropriate and human-reviewed. Sheng is contextual, not a literal word-for-word substitute. Do not claim “reviewed Kiswahili” until:
- a competent human reviewer has checked meaning, register and spelling;
- all visible strings and relevant accessibility labels are translated;
- the actual language control is tested on mobile and desktop;
- the review date and reviewer role are recorded.

Use correct lang attributes for the page and language-specific passages.

## 10. Design and accessibility implementation

- Keep the text-first, static HTML and progressive-enhancement architecture.
- Preserve the established palette: Bone #F2EFEA, Dark Jungle Green #033500, Terracotta #E2725B, Muted Cyan #3A6D8C, Matte Black #111111.
- Typography: system-safe Inter / serif fallback / JetBrains Mono; do not introduce required external font or CDN dependencies.
- No analytics, tracking pixels or third-party scripts without explicit privacy review.
- Ensure semantic landmarks, one H1, meaningful heading order, descriptive links, visible keyboard focus, keyboard-operable controls and accessible names.
- Check text contrast, text resize to 200%, reduced motion, target size and responsive reflow against WCAG 2.2 AA.
- Do not remove meaningful imagery merely to call the page text-first. If a portrait or campaign image is later approved, provide purposeful alternative text and preserve a complete text equivalent. Gallery images must not be embedded unless policy is explicitly revised and rights are cleared.

## 11. Technical release verification

### Source checks
- Validate HTML with the Nu Html Checker and review warnings.
- Run JavaScript syntax checks and test all event handlers.
- Check metadata, canonical URL, Open Graph, Twitter card and structured data.
- Verify no broken internal anchors or outbound links.
- Check no secrets, customer records or payment credentials are committed.

### Interaction checks
- Keyboard-only navigation and skip link.
- Theme toggle and language toggle.
- Mobile menu open/close and focus handling.
- WhatsApp, telephone, email and all external links.
- Reduced-motion behaviour.
- Screen-reader landmark, heading and control-name review.

### Responsive checks
Test widths: 320, 360, 390, 430, 760, 1024 px and desktop. Record browser/device and screenshots or test notes.

### Deployment checks
- Review pull request and required checks.
- Merge only through the approved repository process.
- Confirm GitHub Pages workflow completed and deployment environment reports success.
- Open the actual public URL and verify the deployed commit, not merely the branch source.
- Record commit SHA, workflow run, URL, date, browser, viewport and known limitations.

A successful workflow is not a substitute for browser verification. A validator result is not a complete accessibility audit.

## 12. Evidence references

- [W3C WCAG 2.2](https://www.w3.org/TR/wcag/)
- [W3C Images Tutorial](https://www.w3.org/WAI/tutorials/images/)
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/)
- [Nu Html Checker](https://validator.nu/)
- [GitHub Pages publishing source and Actions guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## 13. Approval gates

This specification does not confirm founder title/credentials, payment instructions, service location beyond the current approved campaign, home visits/travel, Kiswahili review, social account ownership, image rights/consent, final campaign approval, deployed status or accessibility conformance. Resolve each with an explicit evidence record before publication.
