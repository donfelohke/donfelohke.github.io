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
        self.button_ids = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.hrefs.append(attrs["href"])
        if tag == "img":
            self.images.append(attrs)
        if tag in {"img", "picture", "svg", "canvas", "video", "iframe", "object", "embed"}:
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
        if tag == "button" and attrs.get("id"):
            self.button_ids.add(attrs["id"])


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
check(any(link.get("rel") == "canonical" and link.get("href") == "https://donfelohke.github.io/" for link in p.links), "Missing canonical URL")
check(p.metas.get("og:title"), "Missing Open Graph title")
check(p.metas.get("og:description"), "Missing Open Graph description")
check(p.metas.get("og:url") == "https://donfelohke.github.io/", "Incorrect Open Graph URL")
check(p.metas.get("twitter:card") == "summary", "Missing Twitter summary card")
check(not p.graphic_tags, f"Website must remain text-first and graphic-free; found tags: {p.graphic_tags}")
check(not p.images, "Do not embed images in the webpage; link to the separate Gallery repository instead")
check(not any(key in p.metas for key in ("og:image", "twitter:image")), "Do not advertise embedded social-preview graphics")
check("background-image" not in html.lower() and "url(" not in html.lower(), "Do not add CSS image backgrounds or URL-based graphic assets")
check(not any(link.get("rel") == "icon" for link in p.links), "Custom graphic favicons are excluded by the no-graphics policy")
check("application/ld+json" in html and '"@type": "Organization"' in html, "Missing Organization structured data")
check("theme-toggle" in p.ids and "theme-toggle" in p.button_ids, "Missing theme toggle button")
check("nakebusen-theme" in html and "localStorage" in html, "Theme preference persistence is missing")
check(p.form_count == 0, "Do not add a fake booking form")
check(all(img.get("alt") is not None for img in p.images), "Every content image needs an alt attribute")

for href in p.hrefs:
    if href.startswith("#"):
        check(href[1:] in p.ids, f"Broken internal anchor: {href}")
    elif href.startswith("/") and not href.startswith("//"):
        check((ROOT / href.lstrip("/")).exists(), f"Broken local link: {href}")
    elif not (href.startswith("https://") or href.startswith("http://") or href.startswith("tel:") or href.startswith("mailto:")):
        check(False, f"Unsupported or malformed link: {href}")

check("https://wa.me/254719635415?text=Hello%20NAKEBUSEN%2C%20I%27d%20like%20to%20enquire%20about%20loc%20care." in html, "Loc care CTA must use its own WhatsApp enquiry message")
check("https://wa.me/254719635415?text=Hello%20WARENA%2C%20I%27d%20like%20to%20enquire%20about%20digital%20systems." in html, "Digital services CTA must use its own WhatsApp enquiry message")

for expected in ("Retouch & Styling", "From KES 700", "Sisterlocs Retie", "From KES 1,500", "Artificial Locs Installation", "From KES 3,500"):
    check(expected in html, f"Public service catalogue missing: {expected}")

robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
check("Sitemap: https://donfelohke.github.io/sitemap.xml" in robots, "robots.txt must reference sitemap")
check("<loc>https://donfelohke.github.io/</loc>" in sitemap, "Sitemap must include canonical homepage")

print("PASS: HTML structure, anchors, text-only metadata, no-graphics policy, theme hook, service catalogue, and crawl files.")
