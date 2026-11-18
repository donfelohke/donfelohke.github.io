const { test, expect } = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const AxeBuilder = require("@axe-core/playwright").default;

const root = path.resolve(__dirname, "..");
const pageUrl = pathToFileURL(path.join(root, "index.html")).href;
const evidenceDir = path.join(root, "test-results", "evidence");
fs.mkdirSync(evidenceDir, { recursive: true });

const widths = [320, 360, 390, 430, 768, 1024, 1280];

for (const width of widths) {
  test(`layout holds at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(pageUrl);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("h1")).toHaveText("Your Beauty ° Your Way.");
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    expect(metrics.document, `no horizontal overflow at ${width}px`).toBeLessThanOrEqual(metrics.viewport);
    await page.screenshot({ path: path.join(evidenceDir, `layout-${width}.png`), fullPage: true });
  });
}

test("hero prioritises loc care while exposing the research destination", async ({ page }) => {
  await page.goto(pageUrl);
  const hero = page.locator("#top");
  await expect(hero.locator("h1")).toHaveCount(1);
  await expect(hero.locator("h1")).toHaveText("Your Beauty ° Your Way.");
  await expect(hero.locator(".lead")).toContainText("NAKEBUSEN is a beauty and digital-services practice founded by Felix Lwova (Don Feloh)");
  await expect(hero.locator(".hero-overview .hero-path")).toHaveCount(3);
  await expect(hero).toContainText("BEAUTY & LOC CARE");
  await expect(hero).toContainText("DIGITAL · WARENA");
  await expect(hero).toContainText("RESEARCH & CREATIVE");
  await expect(hero.getByRole("link", { name: "Explore research" })).toHaveAttribute("href", "/research/");
  await expect(page.locator("#connect")).toContainText("RESEARCH & CREATIVE");
  await expect(page.locator("#connect")).toContainText("not services for purchase");
  await expect(page.locator("#connect")).toContainText("ONLY NAKEBUSEN TRANSACTS.");
  await expect(page.locator("#code")).toContainText("not a separate checkout");
  await expect(hero.getByRole("link")).toHaveCount(3);
  await expect(page.locator('#code a[href="https://github.com/donfelohke"]')).toHaveCount(1);
  await expect(hero).not.toContainText("GRACE · GRIT · GLORY");
});

test("single bottom navigation exposes exactly Locs, Digital and Connect", async ({ page }) => {
  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(pageUrl);
    const dock = page.getByRole("navigation", { name: "Section navigation" });
    await expect(dock.getByRole("link")).toHaveCount(3);
    await dock.getByRole("link", { name: "Locs" }).click();
    await expect(page.locator("#crown")).toBeVisible();
    await dock.getByRole("link", { name: "Digital" }).click();
    await expect(page.locator("#code")).toBeVisible();
    await dock.getByRole("link", { name: "Connect" }).click();
    await expect(page.locator("#connect")).toBeVisible();
    await expect(page.locator("#site-navigation")).toHaveCount(0);
    const footerRepositories = page.locator("footer .footer-nav a");
    await expect(footerRepositories).toHaveCount(1);
    await expect(footerRepositories).toContainText("GitHub repositories");
    await expect(footerRepositories).toHaveAttribute("href", "https://github.com/donfelohke?tab=repositories");
    await expect(page.locator("header .brand")).toBeVisible();
    await expect(page.locator("#language-toggle")).toBeVisible();
    await expect(page.locator("#theme-toggle")).toBeVisible();
  }
});

test("approved services, starting prices and enquiry boundary are present", async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator("#crown")).toContainText("Retouch & Styling");
  await expect(page.locator("#crown")).toContainText("KES 700+");
  await expect(page.locator("#crown")).toContainText("Sisterlocs Retie");
  await expect(page.locator("#crown")).toContainText("KES 1,500+");
  await expect(page.locator("#crown")).toContainText("Artificial Locs Installation");
  await expect(page.locator("#crown")).toContainText("KES 3,500");
  await expect(page.locator("#crown")).not.toContainText("KES 3,500+");
  await expect(page.locator("#connect")).toContainText("ONLY NAKEBUSEN TRANSACTS.");
  await expect(page.locator("#crown")).toContainText("An enquiry does not confirm a booking.");
  await expect(page.locator("#connect")).toContainText("Founder · CTO · Loctician · Creative Technologist");
  await expect(page.locator("body")).not.toContainText("LOCS Retie");
  await expect(page.locator("footer")).toContainText("Buy Goods Till Number: 3511456");
  await expect(page.locator("footer")).toContainText("Account / Merchant name: FELIX LWOVA");
  await expect(page.locator("footer")).toContainText("M-PESA Buy Goods");
  await expect(page.locator("footer")).toContainText("Pay only after the service and total amount are agreed directly with NAKEBUSEN.");
});

test("theme and language controls work and preserve preferences", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto(pageUrl);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("h1")).toHaveText("Your Beauty ° Your Way.");

  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();

  await page.getByRole("button", { name: "Switch language to Kiswahili" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "sw");
  await expect(page.locator("h1")).toHaveText("Uzuri Wako ° Kwa Namna Yako.");
  await expect(page.locator("#crown")).toContainText("Sisterlocs Retie");
  await expect(page.locator("#connect")).toContainText("Miamala yote hupitia NAKEBUSEN pekee.");
  await expect(page.locator("#code")).toContainText("si sehemu tofauti ya malipo");
  await expect(page.locator("footer")).toContainText("SOVEREIGN FUTURES");
  await expect(page.locator("#connect [data-i18n='role']")).toHaveText("Mwanzilishi · CTO · Loctician · Creative Technologist");
  const swDock = page.getByRole("navigation", { name: "Urambazaji wa sehemu" });
  await expect(swDock.getByRole("link")).toHaveCount(3);
  await expect(page.locator("header nav")).toHaveCount(0);

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "sw");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("h1")).toHaveText("Uzuri Wako ° Kwa Namna Yako.");

  await page.getByRole("button", { name: "Badilisha lugha hadi Kiingereza" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("h1")).toHaveText("Your Beauty ° Your Way.");
});

test("all WhatsApp purposes and service links update with the selected language", async ({ page }) => {
  await page.goto(pageUrl);
  const purposeLinks = page.locator("a[data-wa-purpose]");
  await expect(purposeLinks).toHaveCount(5);
  for (const purpose of ["loc", "tech", "general", "payment", "support"]) {
    await expect(page.locator(`a[data-wa-purpose="${purpose}"]`).first()).toHaveAttribute("href", /wa\.me\/254719635415\?text=/);
  }
  for (const service of ["retouch", "retie", "artificial"]) {
    await expect(page.locator(`a[data-wa-service="${service}"]`)).toHaveAttribute("href", /wa\.me\/254719635415\?text=/);
  }
  await expect(page.locator('a[data-wa-service="retie"]')).toHaveAttribute("href", /Sisterlocs/);
  await expect(page.locator('a[data-wa-service="artificial"]')).toHaveAttribute("href", /Artificial/);

  await page.getByRole("button", { name: "Switch language to Kiswahili" }).click();
  await expect(page.locator('a[data-wa-purpose="loc"]').first()).toHaveAttribute("href", /ninaulizia/);
  await expect(page.locator('a[data-wa-purpose="tech"]')).toHaveAttribute("href", /ninaulizia/);
  await expect(page.locator('a[data-wa-purpose="general"]').first()).toHaveAttribute("href", /huduma/);
  await expect(page.locator('a[data-wa-purpose="payment"]')).toHaveAttribute("href", /maelezo/);
  await expect(page.locator('a[data-wa-purpose="support"]')).toHaveAttribute("href", /kuunga/);
  await expect(page.locator('a[data-wa-service="retie"]')).toHaveAttribute("href", /Sisterlocs/);
  await expect(page.locator('a[data-wa-service="retouch"]')).toHaveAttribute("href", /Retouch/);
  await expect(page.locator('a[data-wa-service="artificial"]')).toHaveAttribute("href", /Artificial/);
});

test("Connect owns the contact directory; footer stays minimal", async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator('#connect a[href="tel:+254719635415"]')).toBeVisible();
  await expect(page.locator('#connect a[href="mailto:mela9ine@proton.me"]')).toBeVisible();
  await expect(page.locator("#connect")).toContainText("Commercial enquiries route through NAKEBUSEN.");
  await expect(page.locator("#crown")).toContainText("Eldoret Town / Karibu Mdosi");
  await expect(page.locator("#connect")).not.toContainText("Eldoret Town / Karibu Mdosi");
  await expect(page.locator("footer")).not.toContainText("Eldoret Town / Karibu Mdosi");
  await expect(page.locator("footer")).toContainText("Support Us");
  await expect(page.locator('footer a[href^="tel:"]')).toHaveCount(0);
  await expect(page.locator('footer a[href^="mailto:"]')).toHaveCount(0);
});

test("research page explains project maturity without creating a commercial path", async ({ page }) => {
  const researchUrl = pathToFileURL(path.join(root, "research", "index.html")).href;
  await page.goto(researchUrl);
  await expect(page.getByRole("heading", { name: "Research & Creative Practice" })).toBeVisible();
  await expect(page.locator(".status-key strong")).toHaveText(["LIVE", "PROTOTYPE", "RESEARCH", "PROPOSAL"]);
  await expect(page.locator("body")).toContainText("not the overall maturity of an entire research domain");
  await expect(page.locator("body")).toContainText("ONLY NAKEBUSEN TRANSACTS");
  await expect(page.locator("body")).not.toContainText("Book a research session");
});

test("loc enquiry guidance and technical engagement process are explicit", async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator(".enquiry-steps li")).toHaveCount(3);
  await expect(page.locator(".enquiry-guide")).toContainText("final price directly");
  await expect(page.locator(".digital-process li")).toHaveCount(3);
  await expect(page.locator(".digital-process")).toContainText("practical handover");
  await page.getByRole("button", { name: "Switch language to Kiswahili" }).click();
  await expect(page.locator(".enquiry-guide")).toContainText("bei ya mwisho");
  await expect(page.locator(".digital-process")).toContainText("makabidhiano");
});

test("keyboard focus is visible on interactive controls and dark surfaces", async ({ page }) => {
  await page.goto(pageUrl);
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip")).toBeFocused();
  await expect(page.locator(".skip")).toBeVisible();

  for (const selector of ["#code a", "#connect a", "footer a"]) {
    const control = page.locator(selector).first();
    await control.focus();
    const focus = await control.evaluate(el => ({
      visible: el.matches(":focus-visible"),
      color: getComputedStyle(el).outlineColor,
      style: getComputedStyle(el).outlineStyle,
      width: getComputedStyle(el).outlineWidth,
    }));
    expect(focus.visible, `${selector} receives keyboard-style focus`).toBeTruthy();
    expect(focus.style).toBe("solid");
    expect(focus.width).not.toBe("0px");
    expect(focus.color).toBe("rgb(214, 198, 165)");
  }
});

test("theme colour metadata follows the selected theme", async ({ page }) => {
  await page.goto(pageUrl);
  const themeColor = page.locator('meta[name="theme-color"]');
  await expect(themeColor).toHaveAttribute("content", "#173D32");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(themeColor).toHaveAttribute("content", "#000000");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(themeColor).toHaveAttribute("content", "#173D32");
});

test("light and dark themes meet automated WCAG 2.2 AA checks", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ colorScheme: "light", reducedMotion: "reduce" });
  await page.goto(pageUrl);
  for (const theme of ["light", "dark"]) {
    if (theme === "dark") await page.getByRole("button", { name: "Switch to dark theme" }).click();
    const results = await new AxeBuilder({ page }).withTags(["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa"]).analyze();
    expect(results.violations, `${theme} theme accessibility violations`).toEqual([]);
  }
});

test("bottom dock targets remain touch-sized at 320px and section anchors clear the sticky header", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(pageUrl);
  for (const id of ["crown","code","connect"]) {
    const link = page.locator(`.floating-dock a[href="#${id}"]`);
    const box = await link.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(box.height).toBeGreaterThanOrEqual(44);
    await link.click();
    const top = await page.locator(`#${id}`).evaluate(el => el.getBoundingClientRect().top);
    expect(top).toBeGreaterThanOrEqual(0);
  }
});

test("language and theme controls remain usable when local storage is unavailable", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      get() { throw new Error("storage disabled by test"); }
    });
  });
  await page.goto(pageUrl);
  await page.getByRole("button", { name: "Switch language to Kiswahili" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "sw");
  await page.getByRole("button", { name: "Badilisha hadi mandhari meusi" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.getByRole("button", { name: "Badilisha hadi mandhari mepesi" })).toBeVisible();
});

test("research page explains the four domains and remains non-commercial", async ({ page }) => {
  const researchUrl = pathToFileURL(path.join(root, "research", "index.html")).href;
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(researchUrl);
  await expect(page.locator("h1")).toHaveText("Research & Creative Practice");
  for (const label of ["FELOH Corpus", "IKAI", "GENJE", "WARENA"]) {
    await expect(page.locator("main")).toContainText(label);
  }
  await expect(page.locator("main")).toContainText("ONLY NAKEBUSEN TRANSACTS.");
  await expect(page.locator("main")).toContainText("not a released product");
  await expect(page.locator('a[href="https://doi.org/10.1145/3631431"]')).toBeVisible();
  await expect(page.getByRole("link", { name: "IKAI", exact: true })).toBeVisible();
  const axe = await new AxeBuilder({ page }).withTags(["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa"]).analyze();
  expect(axe.violations, "research page accessibility violations").toEqual([]);
  for (const width of [320, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    expect(metrics.document, `research page has no horizontal overflow at ${width}px`).toBeLessThanOrEqual(metrics.viewport);
  }
});

test("depth interactions are tactile and respect reduced-motion preferences", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto(pageUrl);
  const service = page.locator(".svc").first();
  await service.hover();
  await expect.poll(() => service.evaluate(el => getComputedStyle(el).transform)).not.toBe("none");
  await page.emulateMedia({ reducedMotion: "reduce" });
  const reduced = await page.evaluate(() => ({
    heroAnimation: getComputedStyle(document.querySelector(".hero .wrap")).animationName,
    sectionAnimation: getComputedStyle(document.querySelector(".experience")).animationName,
    serviceTransform: getComputedStyle(document.querySelector(".svc")).transform,
    serviceTransition: getComputedStyle(document.querySelector(".svc")).transitionProperty,
  }));
  expect(reduced.heroAnimation).toBe("none");
  expect(reduced.sectionAnimation).toBe("none");
  expect(reduced.serviceTransform).toBe("none");
  expect(reduced.serviceTransition).not.toContain("transform");
  const metrics = await page.evaluate(() => ({viewport:document.documentElement.clientWidth,document:document.documentElement.scrollWidth}));
  expect(metrics.document).toBeLessThanOrEqual(metrics.viewport);
});
