# Homepage PR consolidation — #45 / #46 / #47

**Date:** 26 October 2026  
**Disposition:** PR **#47** merged to `main` as the beauty-first integration candidate.

## Why #47

- Mergeable against current `main`
- English-first HTML + Kiswahili dictionary retained
- Hero direction: *Your beauty. Your way.* / Loc care · Practical technology
- Prices preserved (700 / 1,500 / 3,500)
- Home-visit claim removed
- `docs/BEAUTY-TECH-RESEARCH.md` added
- Static + browser CI reported green on the PR head

## What was not auto-merged

| PR | Reason |
|----|--------|
| **#45** | Stale base; CSS newline fix largely already present on `main`; 3-link nav partially overlaps #47 |
| **#46** | Overlaps `index.html` / WEBCOPY with #47; do not merge both |
| **#20–#25** | Superseded by current production site |

## Residual follow-ups (optional)

1. Confirm live Pages shows #47 hero (“Your beauty. Your way.”).
2. If nav still lists Culture/About instead of three links (Locs · Digital · @donfelohke), port only that slice from #45 on a fresh branch.
3. Close #45, #46, and stale #20–#25 after visual confirmation.
4. Browser gates remain separate: 320–760px, EN/SW, themes, WhatsApp.

## Non-negotiables

ONLY NAKEBUSEN TRANSACTS · enquiry ≠ booking · IKAI = WIP · text-first · Gallery linked not embedded.
