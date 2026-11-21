# Website Migration Record — 22 November 2026

## Scope
Move the public service-discovery experience to a one-page, hand-authored HTML/CSS implementation with no JavaScript or build dependency.

## Preservation
The former research index and Glass Terminal presentation are retained as non-rendered source snapshots under `docs/archive/`. Concise research summaries and authoritative project links remain on the homepage. Markdown research records remain in `research/`.

## Migration map
| Previous source | Treatment |
|---|---|
| `index.html` | Rebuilt as commercial-first one-page experience |
| `assets/css/nakebusen-foundation.css` | Replaced by `assets/css/site.css` |
| Homepage/research JavaScript | Removed; native links, disclosure and CSS preferences |
| Research HTML/CSS presentations | Preserved as source archives; public routes retired |
| Node/Playwright configuration and tests | Removed; Python standard-library validation |
| Pages workflow | Python validation, artifact build and separately dispatched deployment |
| Sitemap | Canonical homepage only |
| Markdown research records | Retained |

## Rollback
Previous production source remains in Git history. If the new page fails validation or production inspection, revert the reviewed migration commit or restore the last verified production commit, rerun checks and document the result.
