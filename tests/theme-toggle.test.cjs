const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const html = fs.readFileSync("index.html", "utf8");
const match = html.match(/<script>\s*([\s\S]*?)<\/script>/);
assert.ok(match, "inline theme script exists");

function boot({ stored = null, systemDark = false } = {}) {
  const attributes = {};
  const listeners = {};
  const mediaListeners = {};
  const root = {
    setAttribute: (key, value) => { attributes[key] = value; },
    removeAttribute: (key) => { delete attributes[key]; },
  };
  const meta = { content: "", setAttribute(key, value) { this[key] = value; } };
  const button = {
    textContent: "",
    attrs: {},
    addEventListener: (event, fn) => { listeners[event] = fn; },
    setAttribute(key, value) { this.attrs[key] = value; },
  };
  const values = {};
  if (stored !== null) values["nakebusen-theme"] = stored;
  const media = {
    matches: systemDark,
    addEventListener: (event, fn) => { mediaListeners[event] = fn; },
    addListener: (fn) => { mediaListeners.change = fn; },
  };
  const document = {
    documentElement: root,
    readyState: "complete",
    querySelector: () => meta,
    getElementById: (id) => id === "theme-toggle" ? button : null,
    addEventListener: () => {},
  };
  const context = {
    document,
    window: { matchMedia: () => media },
    localStorage: {
      getItem: (key) => values[key] ?? null,
      setItem: (key, value) => { values[key] = value; },
    },
  };
  vm.runInNewContext(match[1], context);
  return { attributes, meta, button, values, media, mediaListeners, listeners };
}

const light = boot();
assert.equal(light.button.textContent, "Dark", "light system default offers dark mode");
assert.equal(light.button.attrs["aria-pressed"], "false");
light.listeners.click();
assert.equal(light.attributes["data-theme"], "dark", "click switches to dark");
assert.equal(light.button.textContent, "Light");
assert.equal(light.button.attrs["aria-pressed"], "true");
assert.equal(light.values["nakebusen-theme"], "dark", "choice is persisted");

const restored = boot({ stored: light.values["nakebusen-theme"] });
assert.equal(restored.attributes["data-theme"], "dark", "saved theme is restored");

const system = boot({ systemDark: true });
assert.equal(system.attributes["data-theme"], undefined, "system choice leaves explicit data-theme unset");
assert.equal(system.button.textContent, "☀ Light", "system dark preference is reflected");
system.media.matches = false;
system.mediaListeners.change();
assert.equal(system.button.textContent, "☾ Dark", "system preference changes are reflected");

console.log("PASS: theme toggle click, persistence, restore, and system preference.");
