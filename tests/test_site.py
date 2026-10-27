#!/usr/bin/env python3
"""Dependency-free structural checks for the static NAKEBUSEN website."""
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / "index.html").read_text(encoding="utf-8")


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.id_values = []
        self.hrefs = []
        self.images = []
        self.graphic_tags = []
        self.metas = {}
        self.links = []
        self.h1_count = 0
        self.form_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
            self.id_values.append(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.hrefs.append(attrs["href"])
        if tag == "img":
            self.images.append(attrs)
        if tag in {"img", "picture", "canvas", "video", "iframe", "object", "embed"}:
            self.graphic_tags.append(tag)
        if tag == "meta":
            key = attrs.get("name") or attrs.get("property")
            if key:
                self.metas[key] = attrs.get("content", "")
        if tag == "link":
            self.links.append(attrs)
        if tag == "h1":
            self.h1_count += 1
        if tag == "form":
            self.form_count += 1


def check(condition, message):
    if not condition:
        raise AssertionError(message)


p = SiteParser()
p.feed(html)
p.close()

check(html.count("<html") == 1, "Expected one html root")
check(html.count("<body") == 1, "Expected one body")
check("\\n@media(max-width:520px)" not in html, "Mobile scroll-margin media query must start on a real CSS line")
check("@media(max-width:520px){section[id],.hero[id]{scroll-margin-top:9rem}}" in html, "Mobile anchor targets must clear the sticky header")
check('<html lang="en">' in html, "English must be the default document language")
check(p.id_values.count("language-toggle") == 1, "Expected one header language toggle")
check(p.id_values.count("language-toggle-footer") == 1, "Expected one footer language toggle")
check("nakebusen-language" in html and "localStorage.setItem(languageKey,language)" in html, "Language preference must persist")
check('data-i18n="bookingNote"' in html and 'data-i18n="digitalIntro"' in html, "Translate core service and technical copy")
check('data-i18n="navLocs"' in html and 'data-i18n="navDigital"' in html and '<a href="#connect" data-i18n="navConnect">Connect</a>' in html, "Header navigation must expose Locs, Digital, and Connect")
check('navLocs:"Locs"' in html and 'navDigital:"Digital"' in html, "English header navigation labels must describe the two primary paths")
check('navLocs:"Locs"' in html and 'navDigital:"Digital"' in html, "Kiswahili header navigation must preserve the concise Locs and Digital labels")
check('section[id],.hero[id]{scroll-margin-top:9rem}' in html, "Mobile section anchors must account for sticky header height")
check('price700:"KES 700"' in html and 'price1500:"KES 1,500"' in html and 'price3500:"KES 3,500"' in html, "English price translations must match the current service catalogue")
check(p.h1_count == 1, f"Expected one h1, found {p.h1_count}")
check("description" in p.metas and len(p.metas["description"]) >= 50, "Missing or too-short meta description")
check(
    any(link.get("rel") == "canonical" and link.get("href") == "https://donfelohke.github.io/" for link in p.links),
    "Missing canonical URL",
)
check(p.metas.get("og:title"), "Missing Open Graph title")
check(p.metas.get("og:description"), "Missing Open Graph description")
check(p.metas.get("og:url") == "https://donfelohke.github.io/", "Incorrect Open Graph URL")
check(p.metas.get("twitter:card") == "summary", "Missing Twitter summary card")
check(not p.graphic_tags, f"Keep page text-first; found media tags: {p.graphic_tags}")
check(not p.images, "Do not embed images; link Gallery repo instead")
check(len(p.id_values) == len(p.ids), "Duplicate HTML id values are not allowed")
check(not any(link.get("rel") == "icon" for link in p.links), "No graphic favicon under the text-only policy")
check('id="theme-toggle"' in html and 'id="theme-toggle" aria-label="Switch to dark theme"' in html, "Theme toggle must retain an accessible action label")
check('id="theme-toggle"' in html and 'class="toggle-icon"' in html and 'viewBox="0 0 24 24"' in html, "Theme toggle must use inline icon artwork")
check('id="language-toggle" aria-label="Switch language to Kiswahili"' in html and 'class="toggle-icon"' in html, "Language toggle must use an icon and accessible label")
check('menu.innerHTML=opened?' in html and 'aria-expanded' in html, "Mobile menu must use icons and retain expanded state")
check('<p class="small muted" data-i18n="heroStatus">Eldoret Town / Karibu Mdosi, Kenya · Loc services · Enquiries confirmed manually.</p>' in html, "English hero fallback must use the approved Eldoret Town / Karibu Mdosi wording")
check('heroStatus:"Eldoret Town / Karibu Mdosi, Kenya · Loc services · Enquiries confirmed manually."' in html, "English hero translation must preserve the approved location wording")
check('heroStatus:"Eldoret Town / Karibu Mdosi, Kenya · Huduma za loc · Maombi yanathibitishwa moja kwa moja."' in html, "Kiswahili hero translation must preserve the approved location wording")
check('<h1 data-i18n="tagline">Your Beauty ° Your Way.</h1>' in html, "Approved hero headline must be preserved")
check('href="tel:+254719635415">Call 0719 635 415</a>' in html, "Footer telephone link required")
check('href="mailto:mela9ine@proton.me">Email</a>' in html, "Footer email link required")
check('href="https://github.com/donfelohke/donfelohke.github.io">GitHub / Source</a>' in html, "Footer source link required")
check("KES 700" in html and "KES 1,500" in html and "KES 3,500" in html, "All three approved service prices must be present")
check(not any(key in p.metas for key in ("og:image", "twitter:image")), "No social-preview image meta")
check("background-image" not in html.lower(), "No CSS image backgrounds")
check("application/ld+json" in html and "Organization" in html, "Missing Organization structured data")
check(p.form_count == 0, "Do not add a fake booking form")
check("wa.me/254719635415" in html, "WhatsApp enquiry link required")
check("ONLY NAKEBUSEN TRANSACTS" not in html.upper(), "Internal transaction wording must not appear in public copy")

for href in p.hrefs:
    if href.startswith("#"):
        check(href[1:] in p.ids, f"Broken internal anchor: {href}")
    elif href.startswith("/") and not href.startswith("//"):
        check((ROOT / href.lstrip("/")).exists(), f"Broken local link: {href}")
    elif not (
        href.startswith("https://")
        or href.startswith("http://")
        or href.startswith("tel:")
        or href.startswith("mailto:")
    ):
        check(False, f"Unsupported or malformed link: {href}")

check("NAKEBUSEN" in html and "Powered by WARENA" in html and "@donfelohke" in html, "Footer must attribute NAKEBUSEN, WARENA, and @donfelohke")
check('data-i18n="boundary"' in html and "ONLY NAKEBUSEN TRANSACTS" not in html, "Public boundary copy must be customer-facing")
check('<span data-i18n="bookingNote">' in html, "bookingNote translation must not nest inside another data-i18n parent")

for expected in ("KES 700", "KES 1,500", "KES 3,500", "Retouch", "Sisterlocs", "Artificial"):
    check(expected in html, f"Public service catalogue missing token: {expected}")

robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
check("Sitemap: https://donfelohke.github.io/sitemap.xml" in robots, "robots.txt must reference sitemap")
check("<loc>https://donfelohke.github.io/</loc>" in sitemap, "Sitemap must include canonical homepage")

print("PASS: structure, anchors, metadata, text-first policy, WhatsApp, service tokens, crawl files.")
