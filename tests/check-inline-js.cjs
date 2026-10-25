#!/usr/bin/env node
"use strict";

// Compile each executable inline script without running page code.
// JSON-LD is data, not JavaScript, and is intentionally excluded.
const fs = require("node:fs");
const vm = require("node:vm");
const html = fs.readFileSync("index.html", "utf8");
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
let checked = 0;

for (const [index, match] of scripts.entries()) {
  const attributes = match[1];
  const source = match[2];
  if (/type\s*=\s*["']application\/ld\+json["']/i.test(attributes)) continue;
  new vm.Script(source, { filename: "index.html:inline-script-" + (index + 1) });
  checked += 1;
}

if (checked === 0) throw new Error("No executable inline scripts were checked");
console.log("PASS: JavaScript syntax checked in " + checked + " inline script(s).");
