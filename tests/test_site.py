#!/usr/bin/env python3
"""Dependency-free publication checks for the four-destination DonFelohke site."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import unittest

ROOT = Path(__file__).resolve().parents[1]
PAGES = {
    "personal": ROOT / "index.html",
    "nakebusen": ROOT / "nakebusen/index.html",
    "technical": ROOT / "technical/index.html",
    "creative": ROOT / "creative/index.html",
}
CSS = (ROOT / "assets/css/site.css").read_text(encoding="utf-8")
DESTINATION_CSS = (ROOT / "assets/css/destinations.css").read_text(encoding="utf-8")


class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links, self.ids, self.duplicates = [], set(), []
        self.scripts, self.handlers, self.landmarks = [], [], set()
        self.h1_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            if attrs["id"] in self.ids:
                self.duplicates.append(attrs["id"])
            self.ids.add(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag == "script":
            self.scripts.append(attrs)
        if tag == "h1":
            self.h1_count += 1
        if tag in {"header", "nav", "main", "footer"}:
            self.landmarks.add(tag)
        self.handlers.extend(k for k in attrs if k.lower().startswith("on"))


class PublicationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.documents = {}
        cls.parsers = {}
        for name, path in PAGES.items():
            source = path.read_text(encoding="utf-8")
            parser = AuditParser()
            parser.feed(source)
            parser.close()
            cls.documents[name] = source
            cls.parsers[name] = parser

    def test_exact_four_routes(self):
        pages = sorted(p.relative_to(ROOT).as_posix() for p in ROOT.rglob("*.html"))
        self.assertEqual(["creative/index.html", "index.html", "nakebusen/index.html", "technical/index.html"], pages)
        for name, path in PAGES.items():
            self.assertTrue(path.is_file(), name)

    def test_each_page_is_semantic_and_script_free(self):
        for name, html in self.documents.items():
            parser = self.parsers[name]
            self.assertIn('<html lang="en">', html, name)
            self.assertEqual(1, parser.h1_count, name)
            self.assertTrue({"header", "nav", "main", "footer"}.issubset(parser.landmarks), name)
            self.assertEqual([], parser.duplicates, name)
            self.assertEqual([], parser.scripts, name)
            self.assertEqual([], parser.handlers, name)
            self.assertNotIn("javascript:", html.lower(), name)
            for previous, current in zip(
                [int(x) for x in __import__("re").findall(r"<h([1-6])\b", html, flags=__import__("re").I)],
                [int(x) for x in __import__("re").findall(r"<h([1-6])\b", html, flags=__import__("re").I)][1:],
            ):
                self.assertLessEqual(current - previous, 1, name)

    def test_local_links_resolve(self):
        for name, parser in self.parsers.items():
            for href in parser.links:
                if href.startswith("#"):
                    self.assertIn(href[1:], parser.ids, f"{name}: missing anchor {href}")
                    continue
                parsed = urlparse(href)
                if parsed.scheme or parsed.netloc or not href:
                    continue
                path = parsed.path
                if path:
                    target = (ROOT / path.lstrip("/")).resolve()
                    self.assertTrue(target.exists(), f"{name}: missing local link {href}")

    def test_personal_hub_positioning(self):
        html = self.documents["personal"]
        self.assertIn("<title>Don Feloh · Black Excellence, Digital Sovereignty, Creative Expression</title>", html)
        self.assertIn("Black Excellence. Digital Sovereignty. Creative Expression.", html)
        self.assertIn("Founder · CTO · Loctician · Creative Technologist", html)
        self.assertIn("Kanamkemer and Lodwar, Turkana County", html)
        for route in ("/nakebusen/", "/technical/", "/creative/"):
            self.assertIn(f'href="{route}"', html)
        self.assertIn("FELOH Corpus", html)
        self.assertIn("ONLY NAKEBUSEN TRANSACTS.", html)

    def test_nakebusen_service_facts_and_boundaries(self):
        html = self.documents["nakebusen"]
        for phrase in ("KES 700+", "KES 1,500+", "KES 3,500", "Sisterlocs Retie",
                       "Artificial Locs Installation", "Eldoret Town / Karibu Mdosi",
                       "An enquiry does not confirm a booking.", "3511456", "FELIX LWOVA",
                       "Never share your M-PESA PIN", "Support Us"):
            self.assertIn(phrase, html)
        self.assertIn("NAKEBUSEN is a Turkana name meaning", html)
        self.assertIn("Black Beauty, Digital Sovereignty and Creative Expression", html)
        self.assertIn("does not offer braiding", html)
        self.assertIn("does not cut clients’ natural hair", html)
        self.assertIn("manual payment information", html)
        self.assertNotIn("STK push", html)
        self.assertNotIn("payment-success state", html)

    def test_technical_and_creative_boundaries(self):
        technical = self.documents["technical"]
        creative = self.documents["creative"]
        self.assertIn("Freedom Is a System", technical)
        self.assertIn("libre-first, not GNU-exclusive", technical)
        self.assertIn("ONLY NAKEBUSEN TRANSACTS", technical)
        self.assertIn("Genge-rooted", creative)
        self.assertIn("livecoding", creative)
        self.assertIn("IKAI is a Turkana female name meaning “home.”", creative)
        self.assertIn("mirror, not a judge", creative.lower())
        self.assertIn("not a released product", creative.lower())
        self.assertIn("Gallery remains an approval-controlled archive", creative)

    def test_publication_docs_and_sitemap_match(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        doc = (ROOT / "docs/PUBLICATION-SYSTEM-ARCHITECTURE-2026-11-22.md").read_text(encoding="utf-8")
        sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        for route in ("/nakebusen/", "/technical/", "/creative/"):
            self.assertIn(route, readme)
            self.assertIn(route, doc)
            self.assertIn(f"https://donfelohke.github.io{route}", sitemap)
        self.assertIn("Four Public Destinations", readme)
        self.assertIn("Four-Destination Architecture", doc)
        self.assertNotIn("single-homepage information architecture", doc)

    def test_static_responsive_accessible_design(self):
        combined = CSS + DESTINATION_CSS
        self.assertIn("@media(prefers-color-scheme:dark)", CSS)
        self.assertIn("@media(prefers-reduced-motion:reduce)", combined)
        self.assertIn("min-height:44px", CSS)
        self.assertIn("backdrop-filter:blur(20px)", CSS)
        self.assertIn("@media(max-width:700px)", DESTINATION_CSS)
        self.assertNotIn("fonts.googleapis.com", combined)
        self.assertNotIn("googletagmanager", combined.lower())
        self.assertNotIn("@import", combined)
        self.assertFalse((ROOT / "package.json").exists())
        self.assertFalse((ROOT / "node_modules").exists())
        self.assertTrue((ROOT / "LICENSE").exists())


if __name__ == "__main__":
    unittest.main(verbosity=2)
