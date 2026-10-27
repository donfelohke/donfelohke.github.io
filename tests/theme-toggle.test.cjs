const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const match = html.match(/<script>\s*([\s\S]*?)<\/script>/);
assert.ok(match, "inline application script exists");

function makeButton() {
  return {
    textContent: "",
    attrs: {},
    listeners: {},
    addEventListener(event, fn) { this.listeners[event] = fn; },
    setAttribute(key, value) { this.attrs[key] = value; },
  };
}

function boot({ storedTheme = null, storedLanguage = null, systemDark = false, storageThrows = false } = {}) {
  const attributes = {};
  const mediaListeners = {};
  const root = {
    lang: "en",
    setAttribute(key, value) { attributes[key] = value; },
    removeAttribute(key) { delete attributes[key]; },
  };
  const themeMeta = { content: "", setAttribute(key, value) { this[key] = value; } };
  const descriptionMeta = { content: "" };
  const ogDescriptionMeta = { content: "" };
  const twitterDescriptionMeta = { content: "" };
  const ogTitleMeta = { content: "" };
  const twitterTitleMeta = { content: "" };
  const themeButton = makeButton();
  const headerLanguageButton = makeButton();
  const footerLanguageButton = makeButton();
  const whatsappLinks = ["loc", "tech", "general"].map(purpose => ({ href: "", getAttribute(key) { return key === "data-wa-purpose" ? purpose : null; } }));
  const values = {};
  if (storedTheme !== null) values["nakebusen-theme"] = storedTheme;
  if (storedLanguage !== null) values["nakebusen-language"] = storedLanguage;
  const media = {
    matches: systemDark,
    addEventListener(event, fn) { mediaListeners[event] = fn; },
    addListener(fn) { mediaListeners.change = fn; },
  };
  const document = {
    documentElement: root,
    readyState: "complete",
    title: "",
    querySelector(selector) {
      if (selector === 'meta[name="theme-color"]') return themeMeta;
      if (selector === 'meta[name="description"]') return descriptionMeta;
      if (selector === 'meta[property="og:description"]') return ogDescriptionMeta;
      if (selector === 'meta[name="twitter:description"]') return twitterDescriptionMeta;
      if (selector === 'meta[property="og:title"]') return ogTitleMeta;
      if (selector === 'meta[name="twitter:title"]') return twitterTitleMeta;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === "#language-toggle, #language-toggle-footer") {
        return [headerLanguageButton, footerLanguageButton];
      }
      if (selector === "[data-wa-purpose]") return whatsappLinks;
      return [];
    },
    getElementById(id) {
      if (id === "theme-toggle") return themeButton;
      if (id === "language-toggle") return headerLanguageButton;
      if (id === "language-toggle-footer") return footerLanguageButton;
      return null;
    },
    addEventListener() {},
  };
  const context = {
    document,
    window: { matchMedia: () => media, addEventListener() {} },
    localStorage: {
      getItem(key) {
        if (storageThrows) throw new Error("storage unavailable");
        return values[key] ?? null;
      },
      setItem(key, value) {
        if (storageThrows) throw new Error("storage unavailable");
        values[key] = value;
      },
    },
  };
  vm.runInNewContext(match[1], context);
  return {
    attributes, root, themeMeta, descriptionMeta, ogDescriptionMeta, twitterDescriptionMeta, ogTitleMeta, twitterTitleMeta, themeButton,
    headerLanguageButton, footerLanguageButton, whatsappLinks, values, media, mediaListeners, documentTitle: document.title,
  };
}

const light = boot();
assert.equal(light.themeButton.textContent, "Dark", "light theme offers dark mode");
assert.equal(light.themeButton.attrs["aria-label"], "Switch to dark theme");
assert.equal(light.themeButton.attrs["aria-pressed"], "false");
light.themeButton.listeners.click();
assert.equal(light.attributes["data-theme"], "dark", "click switches to dark");
assert.equal(light.themeButton.textContent, "Light");
assert.equal(light.themeButton.attrs["aria-label"], "Switch to light theme");
assert.equal(light.themeButton.attrs["aria-pressed"], "true");
assert.equal(light.values["nakebusen-theme"], "dark", "choice is persisted");

const restored = boot({ storedTheme: light.values["nakebusen-theme"] });
assert.equal(restored.attributes["data-theme"], "dark", "saved theme is restored");
assert.equal(restored.themeButton.textContent, "Light");

const system = boot({ systemDark: true });
assert.equal(system.attributes["data-theme"], undefined, "system choice leaves explicit data-theme unset");
assert.equal(system.themeButton.textContent, "Light", "system dark preference is reflected");
system.media.matches = false;
system.mediaListeners.change();
assert.equal(system.themeButton.textContent, "Dark", "system preference changes are reflected");

const language = boot();
assert.equal(language.root.lang, "en", "English is the default language");
assert.match(language.twitterDescriptionMeta.content, /Loc care in Eldoret/);
assert.match(language.ogTitleMeta.content, /NAKEBUSEN Locs • Digital/);
assert.match(language.twitterTitleMeta.content, /NAKEBUSEN Locs • Digital/);
assert.match(language.ogTitleMeta.content, /Powered by WARENA/);
assert.match(language.twitterTitleMeta.content, /Powered by WARENA/);
assert.match(language.documentTitle, /Powered by WARENA/);
assert.equal(language.headerLanguageButton.textContent, "Kiswahili");
assert.equal(language.headerLanguageButton.attrs["aria-label"], "Switch language to Kiswahili", "English toggle announces its action in English");
assert.match(language.whatsappLinks[0].href, /I%20am%20enquiring%20about%20loc%20care/, "English loc enquiry has an English prefilled message");
language.headerLanguageButton.listeners.click();
assert.equal(language.root.lang, "sw", "header toggle switches to Kiswahili");
assert.equal(language.headerLanguageButton.attrs["aria-label"], "Badili lugha iwe Kiingereza", "Kiswahili toggle announces its action in Kiswahili");
assert.match(language.whatsappLinks[0].href, /naulizia%20huduma%20za%20loc/, "Kiswahili loc enquiry has a Kiswahili prefilled message");
assert.match(language.whatsappLinks[1].href, /mradi%20wa%20teknolojia/, "Kiswahili technology enquiry has a Kiswahili prefilled message");
assert.equal(language.values["nakebusen-language"], "sw", "language choice persists");
assert.match(language.twitterDescriptionMeta.content, /Huduma za loc/);
assert.match(language.twitterDescriptionMeta.content, /Huduma za loc/);
assert.match(language.ogTitleMeta.content, /NAKEBUSEN Locs • Digital/);
assert.match(language.twitterTitleMeta.content, /NAKEBUSEN Locs • Digital/);
assert.match(language.ogTitleMeta.content, /Inaendeshwa na WARENA/);
assert.match(language.twitterTitleMeta.content, /Inaendeshwa na WARENA/);
assert.equal(language.headerLanguageButton.textContent, "English");
assert.equal(language.footerLanguageButton.textContent, "English");
language.footerLanguageButton.listeners.click();
assert.equal(language.root.lang, "en", "footer toggle switches back to English");
assert.equal(language.values["nakebusen-language"], "en");

const restoredLanguage = boot({ storedLanguage: "sw" });
assert.equal(restoredLanguage.root.lang, "sw", "saved language preference is restored");
const noStorage = boot({ storageThrows: true });
assert.equal(noStorage.root.lang, "en", "page remains usable with English default when storage is unavailable");
noStorage.themeButton.listeners.click();
assert.equal(noStorage.attributes["data-theme"], "dark", "theme control works without storage");

console.log("PASS: theme state, persistence, system preference, bilingual toggles, and storage fallback.");
