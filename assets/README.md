# Website asset policy — text-first, graphic-free

## Non-negotiable website rule

The public NAKEBUSEN webpage is text-only. Do not add or link any asset in a way that renders it as a graphic on the webpage. This excludes:

- HTML image, picture, SVG, canvas, video, iframe, object, or embed elements.
- CSS image backgrounds, CSS `url(...)` image assets, and data-URI artwork.
- Graphic favicons.
- Open Graph or Twitter image metadata.
- Decorative icon fonts, emoji-as-artwork, or elaborate CSS illustrations.

The website may link to the separate [Gallery repository](https://github.com/donfelohke/Gallery) using descriptive text links. Gallery files must not be copied into the website repository or rendered inline on the webpage.

## Where assets belong

Gallery is the separate destination for curated brand, beauty, technology, and creative materials. Its `ASSET-MANIFEST.md` records provenance, rights, approval status, intended use, and restrictions. A file is not approved merely because it exists in the repository or has been proposed in a pull request.

Only publish assets in Gallery after checking, as applicable:

- Exact filename/version and checksum.
- Creator, original source, copyright holder, licence, attribution and redistribution permission.
- Consent and permitted publication scope for identifiable people.
- Brand/domain, intended use, restrictions, and review date.
- Quality, integrity, and privacy risks.

Use the approval states documented in the Gallery contribution guide. Approval for one use does not automatically permit another use.

## Current status

No approved service photography or technical/creative portfolio assets are established by this file. The Gallery manifest currently records that its inventory and approval are pending. Do not represent stock or generated imagery as genuine client work, service delivery, testimonials, or live technical evidence. Do not publish private customer material, credentials, device/network details, or unlicensed third-party work.

If no asset meets the evidence and rights standard, publish no asset.

## Release checks

Before changing the website, run:

- `python3 tests/test_site.py`
- `node tests/theme-toggle.test.cjs`

Review the diff for embedded graphics, image URLs, image social metadata, stale prices, unsupported claims, and accidental asset copies. A passing static test does not prove real-browser rendering or successful deployment; record those separately.

The governing principle is: **the website links to Gallery; the website does not display Gallery graphics.**
