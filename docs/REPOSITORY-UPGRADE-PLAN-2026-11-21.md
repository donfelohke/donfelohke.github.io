> **Supersession notice — 27 November 2026:** This 21 November upgrade plan is retained as historical planning context. Its loc-care-first hero and “starting price” wording are superseded by the balanced FELOH ecosystem introduction and the fixed published prices: Retouch & Styling KES 700; Sisterlocs Retie KES 1,500; Artificial Locs Installation KES 3,500. Current requirements are governed by [UI-UX-PRODUCT-SPEC.md](UI-UX-PRODUCT-SPEC.md), [WEBCOPY.md](WEBCOPY.md), [PUBLIC-FACTS-REGISTER.md](PUBLIC-FACTS-REGISTER.md) and [SERVICE-CATALOG.md](SERVICE-CATALOG.md). Preserve the historical implementation record below; do not treat it as a current task list without revalidation.

# Repository upgrade plan — 2026-11-21

**Repository:** `donfelohke.github.io`  
**Primary role:** Public NAKEBUSEN ROOT website  
**Status:** Upgrade plan; implementation and verification must be evidenced separately.

## Non-negotiable product boundaries

- NAKEBUSEN leads the public experience; WARENA is supporting technical capability.
- **ONLY NAKEBUSEN TRANSACTS.** IKAI, WARENA and GENJE are not alternative checkout or booking surfaces.
- Enquiry does not confirm a booking; availability and final terms are agreed directly.
- Preserve the current approved service facts, starting prices, M-PESA Support Us footer treatment and manual confirmation language. No payment API, STK push, automated verification or fabricated success state.
- English remains the default; Kiswahili is an optional language path. Do not silently replace or auto-translate approved English copy.
- Keep the site text-first; Gallery assets are linked, not embedded.

## Upgrade workstreams

1. **Information architecture:** retain the commercial-first, balanced hero; Locs and Digital remain distinct, with Locs primary and Digital secondary. Keep the floating Locs / Digital / Connect navigation and remove redundant controls only after mobile review.
2. **Visual system:** preserve the Liquid Glass Terminal + Editorial Hybrid direction; forest-green top bar, terracotta/ochre accents, ochre/terracotta Locs cards and forest-green Digital card. Maintain readable contrast, expressive but restrained glass, and reduced-motion support.
3. **Service accuracy:** validate service names, scope, starting prices, location and enquiry disclosure against the NAKEBUSEN source of record before changing public facts.
4. **Accessibility:** keyboard navigation, visible focus, semantic landmarks, accessible names, 44px-class touch targets, contrast and reduced-motion behaviour.
5. **Performance and resilience:** no mandatory third-party runtime, analytics or tracking; graceful operation on low-bandwidth mobile; local assets; no unnecessary dependencies.
6. **Quality assurance:** run existing build, validation, Playwright and responsive checks; inspect mobile and desktop screenshots; verify all links and language controls.
7. **Release discipline:** a successful build is not a deployment. Record commit, test evidence, Pages result and post-deployment smoke test.

## Release gates

- No unapproved commercial facts, payment details or claims.
- No production deployment until the proposed diff and checks are reviewed.
- Do not introduce JavaScript frameworks or application dependencies as a default; keep the published site lightweight and static.
- Preserve customer privacy; do not add analytics, pixels or covert capture.

## Immediate sequence

1. Reconcile open website PRs and issue #35 against current `main`.
2. Audit current HTML/CSS/JS and existing Playwright coverage before redesigning.
3. Implement the smallest coherent visual/accessibility/performance changes in reviewable commits.
4. Validate all public facts against NAKEBUSEN and Corpus records.
5. Deploy only after checks pass; perform a live smoke test.

## Release evidence record

Use the [website release evidence matrix](SITE-RELEASE-EVIDENCE-MATRIX-2026-11-21.md) to record source review, automated checks, manual accessibility/browser review, Pages deployment and live smoke testing separately. It is a checklist template; it does not authorize deployment or claim a release.


## Execution addendum — 2026-11-22

Direct-to-main implementation was authorised and applied. The site remains a single static HTML/CSS page: canonical forest/ivory/charcoal/ochre/terracotta tokens, immersive navigation glass, hybrid opaque editorial/pricing surfaces and slower ambient motion were reconciled. The public starting prices now match NAKEBUSEN's source catalogue: Retouch & Styling KES 700, Sisterlocs Retie KES 1,500, Artificial Locs Installation KES 3,500. The browser theme colour and dependency-free assertions were updated. Active design, accessibility, publication and service-fact documents were reconciled.

**Verification:** source validation passed and the GitHub Pages validate/build/deploy workflow completed successfully on 2026-11-22. This is deployment evidence, not a manual browser, keyboard, screen-reader or device QA report; those reviews remain outstanding.
