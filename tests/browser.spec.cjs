const { test, expect } = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const root = path.resolve(__dirname, "..");
const pageUrl = pathToFileURL(path.join(root, "index.html")).href;
const evidenceDir = path.join(root, "test-results", "browser-evidence");
fs.mkdirSync(evidenceDir, { recursive: true });

const widths = [320, 360, 390, 430, 768, 1280];

for (const width of widths) {
  test(`layout holds at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(pageUrl);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("h1")).toBeVisible();
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    expect(metrics.document, `no horizontal overflow at ${width}px`).toBeLessThanOrEqual(metrics.viewport);
    await page.screenshot({ path: path.join(evidenceDir, `layout-${width}.png`), fullPage: true });
  });
}

test("primary navigation reaches Locs, Digital and founder", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(pageUrl);
  await page.locator('a[href="#crown"]').first().click();
  await expect(page.locator("#crown")).toBeVisible();
  await page.locator('a[href="#code"]').first().click();
  await expect(page.locator("#code")).toBeVisible();
  await page.locator('a[href="#founder"]').first().click();
  await expect(page.locator("#founder")).toBeVisible();
});

test("theme and language toggles work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(pageUrl);
  await expect(page.locator(".hero h1")).toHaveText("Beautiful Roots. Sovereign Systems.");
  await expect(page.locator(".hero [data-i18n='heroStatus']")).toHaveText("Eldoret Town, Uasin Gishu County, Kenya · LOCS and DIGITAL services.");
  await expect(page.locator(".hero [data-i18n='heroSubline']")).toHaveText("Craft, technology and culture rooted in African ingenuity.");
  await expect(page.locator(".hero")).toContainText("KES 700");
  await expect(page.locator(".hero")).toContainText("KES 1,500");
  await expect(page.locator(".hero")).toContainText("KES 3,500");
  await expect(page.locator(".hero")).toContainText("An enquiry is not a confirmed booking");
  await expect(page.locator("#philosophy")).toContainText("GENJE ZA WARENA");
  await expect(page.locator("#philosophy")).toContainText("The root becomes the runtime.");
  await expect(page.locator("#crown")).toContainText("Sisterlocs Retightening");
  await expect(page.locator(".footer-payments")).toContainText("Till: 3511456");
  await expect(page.locator(".footer-payments")).toContainText("FELIX LWOVA");
  await expect(page.locator(".footer-payments")).toContainText("Voluntary support");
  await expect(page.locator("body")).not.toContainText("ONLY NAKEBUSEN TRANSACTS");
  await expect(page.locator('.hero a[data-wa-purpose="loc"]')).toHaveAttribute("href", /wa\.me\/254719635415\?text=/);
  await page.locator("#language-toggle").click();
  await expect(page.locator(".hero h1")).toHaveText("Mizizi Mizuri. Mifumo Huru.");
  await expect(page.locator(".hero [data-i18n='heroStatus']")).toHaveText("Eldoret Town, Kaunti ya Uasin Gishu, Kenya · Huduma za LOCS na DIGITAL.");
  await expect(page.locator(".hero [data-i18n='heroSubline']")).toHaveText("Huduma za utunzaji wa loc na teknolojia za vitendo, zenye mizizi katika ubunifu wa Kiafrika.");
});

test("mobile quick navigation prioritises service paths and WhatsApp", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(pageUrl);
  const quickNav = page.locator(".floating-nav");
  await expect(quickNav).toBeVisible();
  await expect(quickNav.locator('a[href="#crown"]')).toBeVisible();
  await expect(quickNav.locator('a[href="#code"]')).toBeVisible();
  const whatsapp = quickNav.locator("a.floating-wa");
  await expect(whatsapp).toHaveAttribute("href", /wa\.me\/254719635415\?text=/);
  await quickNav.locator("#floating-more-toggle").click();
  await expect(page.locator("#floating-more-panel")).toBeVisible();
  await expect(page.locator("#floating-more-panel")).toContainText("@donfelohke");
  await expect(page.locator("#floating-more-panel")).toContainText("GENJE ZA WARENA");
});

test("mobile menu closes on Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(pageUrl);
  const toggle = page.locator("#mobile-menu-toggle");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
});

test("deployed GitHub Pages homepage is reachable and readable on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const response = await page.goto("https://donfelohke.github.io/", {
    waitUntil: "networkidle",
    timeout: 45000,
  });
  expect(response, "GitHub Pages should return an HTTP response").toBeTruthy();
  expect(response.status(), "GitHub Pages should return a successful response").toBeLessThan(400);
  await expect(page.locator("header")).toBeVisible();
  await expect(page.locator("h1")).toBeVisible();
  const metrics = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
  }));
  expect(metrics.document, "deployed page should not overflow horizontally at 390px").toBeLessThanOrEqual(metrics.viewport);
  await page.screenshot({ path: path.join(evidenceDir, "live-mobile-390.png"), fullPage: true });
});
