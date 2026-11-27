> **Historical remediation record — 27 November 2026:** This document records fixes to the 20 November source baseline and remains useful for their provenance. It is not the current homepage design specification. The current public hierarchy is the balanced FELOH ecosystem introduction with NAKEBUSEN as the primary enterprise and sole transaction interface. Current exact prices and copy are governed by [PUBLIC-FACTS-REGISTER.md](PUBLIC-FACTS-REGISTER.md), [SERVICE-CATALOG.md](SERVICE-CATALOG.md) and [WEBCOPY.md](WEBCOPY.md). No live visual or accessibility verification is implied by the earlier workflow results.

# Website Quality Remediation — 20 November 2026

## Scope

Resolve the two reproducible failures in the latest website-quality workflow for `donfelohke.github.io` while preserving the approved NAKEBUSEN public-site specification.

- Baseline commit: `d48fe4229d36d05fc7ae7200355c6dae656e4f03`
- Target branch: `main`
- Workflow at baseline: [Website quality and GitHub Pages run #227](https://github.com/donfelohke/donfelohke.github.io/actions/runs/44755490818)
- Static HTML check at baseline: [run #534](https://github.com/donfelohke/donfelohke.github.io/actions/runs/44755490686)

## Defect 1 — footer muted-text contrast

The light theme uses a dark footer surface (`#242923`). The global `.small` / `.muted` rule inherits the text-safe sage token (`#626B58`), which is intended for light surfaces and is insufficiently contrasted on the footer. The affected visible example is the copyright line.

**Correction:** scope `footer .small` and `footer .muted` to sandstone (`#D6C6A5`). This is a context-specific text treatment; it does not change the global palette or any service/content colours. It remains legible in the dark theme as well.

## Defect 2 — hover test contradicts editorial interaction design

The service-card stylesheet intentionally avoids spatial movement and shadow escalation. On pointer-capable devices it provides restrained background feedback. The previous Playwright test instead required a non-`none` transform, making the test assert a discarded interaction treatment.

**Correction:** the browser test now verifies that the service-card background changes on hover and that its transform remains `none`. Existing reduced-motion assertions continue to verify that transitions and transforms are suppressed.

## Preserved invariants

- NAKEBUSEN remains the commercial lead; **ONLY NAKEBUSEN TRANSACTS**.
- Approved loc-care names and starting prices remain unchanged.
- Enquiry does not imply booking or availability.
- WARENA remains technical capability; IKAI and GENJE remain research/creative domains.
- Published M-PESA details, payment safety copy and voluntary Support Us separation remain unchanged.
- No framework, dependency, analytics, checkout, booking backend, tracker or external runtime was added.
- GitHub Pages deployment remains behind the existing manual release gate.

## Verification and release status

The source and test corrections are committed directly to `main`. The follow-up GitHub Actions run must be inspected before declaring the automated suite green. A passing workflow does not replace:

1. real-device checks, including Android Chrome and the approved viewport matrix;
2. keyboard and screen-reader review;
3. manual visual/contrast review in both themes;
4. verification of the exact deployed Pages artifact after an explicitly dispatched release.

Do not mark any manual or live-site check as complete without evidence. No deployment is initiated by this remediation.


## Follow-up implementation — 20 November 2026

- PR #139 separated homepage structure, styling and progressive enhancement; merge commit `5303ba247df5a4a77fc26cb36f144f258283569f`.
- PR #142 consolidated the homepage design system; merge commit `89828556e41f3b5ade9830cb7a764f30b12a7434`.
- PR #144 added the Glass Terminal research experience and linked it from the research index; merge commit `e8e7a035dbe2f402a3a0a13494ac9f20e942e99b`.
- The completion candidate consolidates Glass Terminal visual refinements into canonical component rules, externalises both research-page stylesheets, shares the theme preference on the research index, and extends responsive/accessibility coverage.
- These are source and automated-test changes. Manual assistive-technology, physical-device and live Pages checks remain outstanding. The manual Pages release gate remains in force.


## Final completion candidate — 20 November 2026

PR #145 merged as `cee99f686061f4e26533d398d0ce390f14ee32c2`. The exact candidate `0c0ba5a586949f9f5946bf96bf1dade94ed9dfa0` passed static workflow #585 (`44793386056`) and browser quality workflow #278 (`44793386128`). Browser coverage includes the commercial homepage, Research & Creative index, and dark-first Glass Terminal research page, with 320px reflow and automated WCAG checks. The source changes are merged, but the GitHub Pages deployment gate was skipped; manual assistive-technology, physical-device, real-network and live-site checks remain outstanding.
