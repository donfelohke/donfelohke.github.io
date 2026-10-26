const { test, expect } = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const pageUrl = pathToFileURL(path.resolve("index.html")).href;
const evidenceDir = path.resolve("test-results/evidence");
fs.mkdirSync(evidenceDir, { recursive: true });

test("responsive widths remain usable without horizontal overflow", async ({ page }) => {
  await page.goto(pageUrl);
  for (const width of [320, 360, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      brand: document.querySelector(".brand").getBoundingClientRect().toJSON(),
      controls: document.querySelector(".nav-right").getBoundingClientRect().toJSON(),
    }));
    expect(metrics.document, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(metrics.viewport);
    expect(
      metrics.brand.right <= metrics.controls.left + 1 || metrics.brand.bottom <= metrics.controls.top + 1,
      `brand overlaps navigation controls at ${width}px`,
    ).toBeTruthy();
    await expect(page.locator("#theme-toggle")).toBeVisible();
    await expect(page.locator("#language-toggle")).toBeVisible();
    if (width === 390) {
      await page.screenshot({ path: path.join(evidenceDir, "mobile-390.png"), fullPage: true });
    }
    if (width === 1440) {
      await page.screenshot({ path: path.join(evidenceDir, "desktop-1440.png"), fullPage: true });
    }
  }
});

test("section links scroll clear of the sticky header", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(pageUrl);
  await page.locator('.hero a[href="#crown"]').click();
  const result = await page.evaluate(() => ({
    targetTop: document.querySelector("#crown").getBoundingClientRect().top,
    headerBottom: document.querySelector("header").getBoundingClientRect().bottom,
  }));
  expect(result.targetTop).toBeGreaterThanOrEqual(result.headerBottom - 2);
});

test("theme, language, and enquiry paths work in the browser", async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.locator("#theme-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.locator("#language-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("lang", "sw");
  await page.locator("#language-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  const locHref = await page.locator('a[data-wa-purpose="loc"]').first().getAttribute("href");
  const techHref = await page.locator('a[data-wa-purpose="tech"]').first().getAttribute("href");
  expect(locHref).toContain("wa.me/254719635415");
  expect(techHref).toContain("wa.me/254719635415");
  expect(techHref).not.toBe(locHref);
});
