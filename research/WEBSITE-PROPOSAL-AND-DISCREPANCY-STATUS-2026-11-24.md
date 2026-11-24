# Website Proposal and Discrepancy Disposition — 24 November 2026

**Status:** Current reconciliation record; PRs #195, #198 and #200 merged  
**Website source baseline:** `main` after PR #200, merge commit `548909a0f8335b4cf5696dae30c2ac718d7c802b`  
**Design authority:** [Front-Page Portal — Consolidated Design, Copy and Standards Research](FRONT-PAGE-PORTAL-DESIGN-COPY-AND-STANDARDS-2026-11-24.md)  
**Factual authority:** `docs/PUBLIC-FACTS-REGISTER.md`, `docs/SERVICE-CATALOG.md`, NAKEBUSEN source catalogue  
**Programme:** [FELOH Corpus issue #78](https://github.com/donfelohke/feloh-corpus/issues/78)

## 1. Purpose and audit boundary

This record consolidates website-specific proposals, copy directions, navigation ideas and discrepancy findings relevant to the current public page. It is not a line-by-line revalidation of every historical HTML corpus file or every proposal across unrelated WARENA/IKAI/GENJE engineering programmes.

The audit checked the ten public repositories, recent pull-request/commit history, the website root changelog, relevant website design/copy specifications, the HTML corpus extraction register, the website discrepancy register, current facts/service sources and current public source files.

The website is the only repository among the ten checked with a root `CHANGELOG.md` at that exact path. The other repositories have Git history, pull requests and local documentation records. A root changelog is not required in every repository merely for uniformity.

## 2. Consolidated decision register

| Topic | Competing proposals or historical direction | Current decision | Status |
|---|---|---|---|
| Public architecture | Separate portal, multiple top-level pages, dedicated research route | One bilingual static front page with anchored sections; repositories hold deeper records | Current |
| Commercial hierarchy | Brand-first identity hub; multi-storefront ecosystem | NAKEBUSEN leads commercially; WARENA is technical capability; only NAKEBUSEN transacts | Canonical |
| Hero headline | “Beautiful Roots. Sovereign Systems.” as H1; abstract brand-led hero | H1: **Loc care in Eldoret.** Keep the master phrase as supporting signature | Implemented in PR #194 |
| Hero content | Five-row identity/practice taxonomy | Compact published-price panel; full practice distinctions remain lower in the page | Implemented in PR #194 |
| Service discovery | Three cards only after a tall hero; optional price teaser | Exact three published prices appear in first-screen panel and remain in service cards | Implemented in PR #194 |
| Primary action | Generic “Connect” or broad discovery action | “Enquire about loc care” to NAKEBUSEN WhatsApp | Implemented |
| Secondary action | Unclear or competing CTA | “View services & prices” to LOCS section | Implemented |
| Digital capability | WARENA as a parallel storefront | Practical technical capability, scoped per engagement and contacted through NAKEBUSEN | Implemented |
| Founder / practice map | Five identities presented as five equal practices | FELOH is human authorship; four practice domains remain distinct; Corpus is governance/provenance | Current |
| Research and creative work | Separate research landing page; generic portfolio cards | Contextual IKAI / GENJE / Corpus pathways and dated records on single page | Current |
| Navigation | Icon-only selector; extra top-level destinations; duplicate desktop/mobile navigation | LOCS / DIGITAL / CONNECT floating dock; no competing second nav | Current |
| Small-screen navigation | Fixed dock at all sizes | Floating dock retained; static fallback at ≤380 CSS px | Implemented in PR #194 |
| Glass treatment | Glass across hero, content cards and controls | Glass only on navigation surfaces; readable content and prices remain opaque | Implemented in PR #195 |
| Hero decoration | Radial gradients and non-functional circular artwork | Remove decorative hero circles/radial effects; retain restrained forest surface | Being enforced in PR #195 |
| Footnotes | Print-style numbered notes across public page | Operational disclosures inline; contextual dated sources in research sections | Current |
| Images | Hero image, stock photography, AI imagery, gallery | Text-first; no page image without specific rights, consent, provenance and approval | Current |
| Language | English default plus Kiswahili; machine-mirrored copy | English default; Kiswahili is a separate authored state and requires human review | Current; translation review pending |
| Payment | Automated checkout, STK/API or simulated success | Manual M-PESA information only after direct agreement; voluntary support remains separate | Canonical |
| Runtime | Framework or JS-enhanced portal | Native HTML/CSS, no JavaScript runtime, no framework, no trackers or remote fonts | Canonical |

### Historical proposal disposition

- Website PR #165's icon-only control/navigation proposal was closed unmerged. It is not current.
- The earlier four-destination/multi-page proposal was superseded by the single-page architecture on 22 November.
- The older slogan-led hero and five-row hero taxonomy are superseded by PR #194.
- The old “African Desert editorial × Ghetto-Luxe × Silicon Savannah” visual label has been retired. Use the more precise **Rooted Editorial Service Portal** direction without generic cultural shorthand or borrowed motifs.
- Old prices, historical home-visit premiums, old service names and old business hierarchy in extracted HTML drafts remain archival. Current prices and service facts come from current registers and the NAKEBUSEN catalogue.
- The previous proposal for a standalone `research/index.html` is not current. No `research/index.html` exists in the website repository, and the Pages workflow stages only the approved root `index.html` and stylesheet. The single page's research section links to repository records instead.
- The old `tests/browser.spec.cjs` reference is stale: that file is absent. The active automated test suite is `tests/test_site.py`, run by GitHub Actions.

## 3. Current discrepancy disposition

The original [Website Audit Discrepancy Register](../docs/WEBSITE-AUDIT-DISCREPANCY-REGISTER.md) is a historical baseline with later reconciliation notes. Its old findings must not be read as current defects without checking the latest source.

| Finding | Current status | Evidence / remaining work |
|---|---|---|
| WADR-001 — previous hero copy and hierarchy | Superseded | PR #194 introduces one task-first H1 and current approved service proposition. Manual visual review remains. |
| WADR-002 — overview of practice domains | Reconciled in structure | Page retains separate WARENA, IKAI, GENJE and Corpus sections; no additional hero taxonomy is needed. |
| WADR-003 — Connect/footer ownership | Implemented in PR #198 | Connect is the sole contact directory; footer contains manual payment, voluntary support, signature/copyright and one GitHub repositories link. Duplicated location/contact copy is removed. Rendered review remains. |
| WADR-004 — CSS override accumulation | Partially resolved | PRs #194–#200 reduce stylesheet from 642 to 433 lines and remove historical hero override layers; full token/component audit remains open. |
| WADR-005 — decorative hero gradients/circles and glass on content | Implemented in PRs #195, #198 and #200 | Hero radial circles/gradients removed in both themes; hero, price, service, booking, founder and WARENA capability content surfaces use opaque fills; glass remains a navigation treatment. Verify rendered contrast and reduced-transparency behaviour. |
| WADR-006 — stale sage tokens | Not observed in current active stylesheet | Current stylesheet does not contain cited blue-sage token values. Full palette/contrast matrix remains open. |
| WADR-007 — theme-toggle accessible name | Not applicable to current architecture | There is no theme toggle; the site follows `prefers-color-scheme`. |
| WADR-008 — Kiswahili metadata and indexability | Documented single-URL behaviour | EN/SW is a presentation/language switch on one canonical URL; metadata remains English. A separately indexable Kiswahili route is not implemented. |
| WADR-009 — payment and service facts | Preserved | No price, payment number or merchant string changed. Merchant authority/settlement is not independently verified by source audit. |
| WADR-010 — digital scope | Preserved | Public capabilities remain scoped per engagement; no blanket guarantee added. |
| WADR-011 — IKAI/GENJE status | Reconciled | IKAI remains research/WIP; GENJE remains creative practice. No checkout or release claim added. |
| WADR-012 — metadata / structured data validation | Open | Source metadata is present; no external validator or live search/social preview evidence captured. |
| WADR-013 — test coverage | Partially resolved | Python static suite passes on PR #194. Browser, screen-reader, zoom/reflow and physical-device checks remain open. |
| WADR-014 — historical branch reference | Open | Verify the old branch pointer in the implementation checklist before editing or deleting historical branches. |
| WADR-015 — current specification index | Partially resolved | README now indexes current copy, research and source authorities; remaining old briefs must retain clear historical labels. |
| WADR-016 — dock glyph rendering | Not applicable to current design intent | Dock uses visible text labels and ordinal markers rather than icon-only glyphs; assistive-technology review remains part of manual QA. |
| WADR-017 — hero and service CTA | Implemented in source | PR #194 and passing Python tests; visual and human editorial review remain. |
| WADR-018 — dedicated research page | Superseded | No standalone research route is present or staged for deployment; contextual research links remain in the single-page Knowledge section. |
| WADR-019 — README and copy reconciliation | Implemented in source | README and `docs/WEBCOPY.md` reflect the task-first proposition. |
| WADR-020 — browser test file | Stale reference | `tests/browser.spec.cjs` is absent; do not claim Playwright/axe coverage. |
| WADR-021 / WADR-022 — historical browser/hover defects | Historical, not revalidated | Earlier findings were tied to an older baseline and browser suite. Current Python checks do not prove browser behaviour. |

## 4. Current release evidence

- PR #193 merged the consolidated research and changelog correction.
- PR #194 merged the task-first hero, first-screen price panel, CSS hero-layer cleanup, canonical copy updates and regression-test updates.
- The PR #194 GitHub Actions validation workflow completed successfully. The `validate` job passed; Pages build/deploy jobs were skipped because this was a pull request.
- Static source checks after PR #194 confirmed one H1, unique IDs, valid fragment targets, three dock destinations, exact prices, one transaction statement, no script tags and a static-dock fallback at narrow widths.
- PR #195 merged the opaque-content / decorative-hero refinement. Its GitHub Actions validation completed successfully; Pages build/deploy jobs were skipped on the pull request. PR #198 merged the Connect/footer split and dark-mode hero surface refinement; its Python static validation also passed. PR #198 reconciled Connect/footer ownership, removed duplicate contact/location details and removed the remaining dark-mode hero radial gradients. Its Python static validation passed; Pages build/deploy jobs were skipped on the pull request. PR #200 standardised opaque content surfaces across service, booking, founder and WARENA capability areas. Its Python static validation passed; Pages build/deploy jobs were skipped on the pull request.
- A successful PR validation does not prove a GitHub Pages deployment. The exact post-merge Pages run and deployed commit still require verification.

## 5. Remaining work

1. Verify the push-to-main Pages build/deployment after merge.
2. Inspect the deployed page at 320, 360, 390, 430, 760, 1024 and desktop widths.
3. Test 200%/400% zoom, keyboard focus, screen-reader structure, EN/SW switching, light/dark and reduced-motion/transparency.
4. Complete human Kiswahili review.
5. Run a rendered contrast matrix for text, links, controls and focus states.
6. Validate title, canonical metadata, social metadata and structured data externally.
7. Recheck payment merchant authority before any payment-detail change or campaign.
8. Review remaining historical design docs for stale claims before treating them as current.

## 6. Authority and change control

Use this record with the consolidated portal research, current public-facts register, service catalogue and canonical website copy. Preserve historical records for provenance, but never let a closed proposal, old screenshot, archived HTML draft or stale changelog entry silently override current approved decisions.

**Core boundary:** NAKEBUSEN leads commercially. WARENA provides capability. IKAI is research. GENJE is creative practice. FELOH is the human author. FELOH Corpus governs shared knowledge and provenance. **ONLY NAKEBUSEN TRANSACTS.**
