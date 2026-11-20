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

The original two-defect remediation was superseded by the reviewed homepage foundation and design-system changes:

- PR #139 separated the static document, stylesheet and progressive-enhancement script; it also reconciled the hero copy and explicit NAKEBUSEN transaction boundary.
- PR #142 replaced the historical CSS override cascade with canonical light/dark tokens and grouped responsive component rules. It corrected narrow-screen footer payment overflow, dark service-card surfaces and dark Connect CTA contrast.
- Automated checks passed on candidate `10587cd0fae4dfb16cad7e2c782847eb3c5c47a1`: static run #563 (`44789211140`) and browser quality run #256 (`44789211087`).
- The browser workflow uploaded responsive and interaction evidence. Its automated accessibility checks passed in both themes. Manual assistive-technology and physical-device checks remain outstanding.
- The merge commits are `5303ba247df5a4a77fc26cb36f144f258283569f` and `89828556e41f3b5ade9830cb7a764f30b12a7434`.
- The Pages deploy job was skipped; the manual release gate remains. No live-site deployment is claimed.
