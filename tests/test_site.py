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
check(not any(key in p.metas for key in ("og:image", "twitter:image")), "No social-preview image meta")
check(not any(link.get("rel") == "icon" for link in p.links), "No graphic favicon under text-only policy")
check("☾" not in html and "☀" not in html, "Theme control must use text labels, not icon glyphs")
check("Eldoret Town / Karibu Mdosi" in html, "Primary location wording required")
check("From KES 700" in html and "From KES 1,500" in html and "From KES 3,500" in html, "All service prices must be labelled as starting prices")
check("background-image" not in html.lower(), "No CSS image backgrounds")
check("application/ld+json" in html and "Organization" in html, "Missing Organization structured data")
check(p.form_count == 0, "Do not add a fake booking form")
check("wa.me/254719635415" in html, "WhatsApp enquiry link required")
check("ONLY NAKEBUSEN TRANSACTS" in html, "Transaction boundary missing")

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

for expected in ("KES 700", "KES 1,500", "KES 3,500", "Retouch", "Sisterlocs", "Artificial"):
    check(expected in html, f"Public service catalogue missing token: {expected}")

robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
check("Sitemap: https://donfelohke.github.io/sitemap.xml" in robots, "robots.txt must reference sitemap")
check("<loc>https://donfelohke.github.io/</loc>" in sitemap, "Sitemap must include canonical homepage")

print("PASS: structure, anchors, metadata, text-first policy, WhatsApp, service tokens, crawl files.")
