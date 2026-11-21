#!/usr/bin/env python3
"""Dependency-free publication and architecture checks for the Don Feloh site."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import unittest

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "index.html"
CSS_PATH = ROOT / "assets/css/site.css"
HTML = HTML_PATH.read_text(encoding="utf-8")
CSS = CSS_PATH.read_text(encoding="utf-8")


class DocumentParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.duplicate_ids = []
        self.links = []
        self.scripts = []
        self.inline_handlers = []
        self.h1_count = 0
        self.landmarks = set()
        self.heading_levels = []
        self.section_ids = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            if attrs["id"] in self.ids:
                self.duplicate_ids.append(attrs["id"])
            self.ids.add(attrs["id"])
            if tag == "section":
                self.section_ids.append(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag == "script":
            self.scripts.append(attrs)
        for name in attrs:
            if name.lower().startswith("on"):
                self.inline_handlers.append(name)
        if tag == "h1":
            self.h1_count += 1
        if tag in {"header", "nav", "main", "footer"}:
            self.landmarks.add(tag)
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self.heading_levels.append(int(tag[1]))


class SiteTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.parser = DocumentParser()
        cls.parser.feed(HTML)
        cls.parser.close()

    def test_one_public_html_document(self):
        pages = [p for p in ROOT.rglob("*.html") if ".git" not in p.parts]
        self.assertEqual([HTML_PATH], pages)

    def test_no_javascript_or_node_runtime(self):
        self.assertEqual([], self.parser.scripts)
        self.assertEqual([], self.parser.inline_handlers)
        self.assertNotIn("javascript:", HTML.lower())
        self.assertFalse((ROOT / "package.json").exists())
        self.assertFalse((ROOT / "node_modules").exists())
        self.assertFalse((ROOT / "assets/js").exists())
        runtime_suffixes = {".js", ".mjs", ".cjs"}
        self.assertFalse([p for p in ROOT.rglob("*") if p.is_file() and p.suffix in runtime_suffixes])

    def test_semantic_document(self):
        self.assertIn('<html lang="en">', HTML)
        self.assertEqual(1, self.parser.h1_count)
        self.assertTrue({"header", "nav", "main", "footer"}.issubset(self.parser.landmarks))
        self.assertEqual([], self.parser.duplicate_ids)
        self.assertIn('lang="sw"', HTML)
        self.assertIn("<details", HTML)
        for previous, current in zip(self.parser.heading_levels, self.parser.heading_levels[1:]):
            self.assertLessEqual(current - previous, 1)

    def test_local_links_and_anchor_targets(self):
        for href in self.parser.links:
            if href.startswith("#"):
                self.assertIn(href[1:], self.parser.ids, f"Missing anchor: {href}")
                continue
            parsed = urlparse(href)
            if parsed.scheme or parsed.netloc or not href:
                continue
            path = parsed.path
            if path:
                target = (ROOT / path.lstrip("/")).resolve()
                self.assertTrue(target.exists(), f"Missing local link target: {href}")

    def test_search_and_conversion_first_hero(self):
        self.assertIn('<title>NAKEBUSEN Loc Care in Eldoret | Don Feloh</title>', HTML)
        self.assertIn('name="description" content="Natural loc care in Eldoret Town, Kenya.', HTML)
        self.assertIn('<h1 id="page-title">Natural Loc Care in Eldoret.</h1>', HTML)
        self.assertIn('class="hero-service-list"', HTML)
        for anchor in ("#service-retouch", "#service-sisterlocs", "#service-artificial"):
            self.assertIn(f'href="{anchor}"', HTML)
            self.assertIn(f'id="{anchor[1:]}"', HTML)
        self.assertIn("Your Beauty", HTML)

    def test_canonical_service_facts(self):
        for phrase in (
            "Your Beauty", "Retouch &amp; Styling", "Sisterlocs Retie",
            "Artificial Locs Installation", "KES 700+", "KES 1,500+",
            "KES 3,500", "Eldoret Town / Karibu Mdosi",
        ):
            self.assertIn(phrase, HTML)
        self.assertNotIn("KES 3,500+", HTML)
        self.assertIn("An enquiry does not confirm a booking.", HTML)
        self.assertIn("ONLY NAKEBUSEN TRANSACTS.", HTML)

    def test_domain_sections_and_hierarchy(self):
        expected = [
            "nakebusen", "services", "warena", "don-feloh",
            "ikai", "genje", "feloh-corpus", "kiswahili",
        ]
        positions = [HTML.index(f'id="{section}"') for section in expected]
        self.assertEqual(sorted(positions), positions)
        self.assertIn("WARENA is a distinct technical capability domain", HTML)
        self.assertIn("not a second live commercial brand", HTML)
        self.assertIn("IKAI is a research track", HTML)
        self.assertIn("GENJE", HTML)
        self.assertIn("FELOH Corpus", HTML)
        self.assertNotIn("Enquire about a technical project", HTML)

    def test_corpus_author_and_footer_roles(self):
        self.assertIn("Knowledge governance, documentation, research provenance and source repositories.", HTML)
        self.assertIn("Founder · CTO · Loctician · Creative Technologist", HTML)
        self.assertIn("Contact directory", HTML)
        self.assertIn("NAKEBUSEN</strong> · <strong>WARENA</strong> · <strong>DON FELOH", HTML)
        self.assertIn("Business information and service payments belong to NAKEBUSEN.", HTML)
        self.assertIn("NAKEBUSEN · LOC CARE", HTML)
        self.assertIn("Loc care · Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya", HTML)

    def test_business_and_research_boundaries(self):
        self.assertIn("IKAI is a research track, not a released product", HTML)
        self.assertIn("GENJE is a creative practice", HTML)
        self.assertNotIn("braiding service", HTML.lower())
        self.assertNotIn("shaving service", HTML.lower())

    def test_contact_payment_and_support(self):
        for phrase in (
            "https://wa.me/254719635415", "tel:+254719635415",
            "mailto:mela9ine@proton.me", "3511456",
            "FELIX LWOVA", "Never share your M-PESA PIN",
            "Support Us", "separate from NAKEBUSEN service payments",
        ):
            self.assertIn(phrase, HTML)

    def test_navigation_contract(self):
        for anchor in (
            'href="#nakebusen"', 'href="#warena"', 'href="#don-feloh"',
            'href="#ikai"', 'href="#genje"', 'href="#feloh-corpus"',
        ):
            self.assertIn(anchor, HTML)
        self.assertIn("FELOH CORPUS</a>", HTML)
        self.assertIn("GitHub · @donfelohke", HTML)
        self.assertIn("Back to top", HTML)

    def test_native_preferences_and_responsive_rules(self):
        self.assertIn("@media(prefers-color-scheme:dark)", CSS)
        self.assertIn("@media(prefers-reduced-motion:reduce)", CSS)
        self.assertIn("@media(prefers-reduced-transparency:reduce)", CSS)
        self.assertIn("min-height:44px", CSS)
        self.assertIn("scroll-snap-type:x proximity", CSS)
        self.assertIn("backdrop-filter:blur(20px)", CSS)
        self.assertIn("@media(max-width:760px)", CSS)

    def test_no_remote_runtime_dependencies(self):
        self.assertNotIn("fonts.googleapis.com", HTML + CSS)
        self.assertNotIn("googletagmanager", (HTML + CSS).lower())
        self.assertNotIn("@import", CSS)
        self.assertTrue(CSS_PATH.exists())
        self.assertTrue((ROOT / "assets/favicon.svg").exists())

    def test_sitemap_only_lists_homepage(self):
        sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        self.assertIn("https://donfelohke.github.io/", sitemap)
        self.assertNotIn("/research/", sitemap)


if __name__ == "__main__":
    unittest.main(verbosity=2)
