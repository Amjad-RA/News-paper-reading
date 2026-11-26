#!/usr/bin/env node
/*
 * Check whether a headline is worth adding, and optionally add it.
 *
 *   node tools/check.js "SC questions curbs as Delhi AQI nears 400"
 *   node tools/check.js --add "Headline one" "Headline two"
 *
 * Prints the headline rules and newspaper words the page will find in it.
 * With --add, good headlines that are not already there are added to the
 * end of headlines.js (title only).
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const FILE = path.join(ROOT, "headlines.js");
globalThis.window = globalThis;
for (const f of ["guide.js", "core.js", "headlines.js", "analyze.js"]) require(path.join(ROOT, f));

const args = process.argv.slice(2);
const add = args.includes("--add");
const titles = args.filter((a) => a !== "--add").map((t) => t.replace(/\s+/g, " ").trim()).filter(Boolean);
if (!titles.length) {
  console.log('Usage: node tools/check.js [--add] "Headline" ["Another headline" ...]');
  process.exit(1);
}

const have = new Set(window.HEADLINES.map((h) => (Array.isArray(h) ? h[0] : h).toLowerCase()));
const toAdd = [];
for (const t of titles) {
  const a = window.analyzeHeadline(t);
  console.log("\n" + t);
  a.rules.forEach((r) => console.log(`  rule ${r.i + 1}: ${window.GUIDE[r.i].title}` + (r.hits.length ? `  [${r.hits.join(", ")}]` : "")));
  a.words.forEach((w) => console.log(`  word: ${w.p.en} = ${w.p.ml}`));
  const dup = have.has(t.toLowerCase());
  const verdict = dup ? "already in headlines.js"
    : a.score >= 2 ? `good: ${a.score} things to learn`
    : a.score === 1 ? "weak: only 1 thing to learn; add it only if that one point is worth practising"
    : "skip: nothing headline-specific to learn here";
  console.log("  -> " + verdict);
  if (add && !dup && a.score >= 1) { toAdd.push(t); have.add(t.toLowerCase()); }
}

if (add) {
  if (!toAdd.length) { console.log("\nNothing added."); process.exit(0); }
  const src = fs.readFileSync(FILE, "utf8");
  const end = src.lastIndexOf("];");
  const head = src.slice(0, end).replace(/\s*$/, "");
  const lines = toAdd.map((t) => "  " + JSON.stringify(t)).join(",\n");
  fs.writeFileSync(FILE, head + (head.endsWith("[") ? "\n" : ",\n") + lines + "\n" + src.slice(end));
  console.log(`\nAdded ${toAdd.length} headline${toAdd.length === 1 ? "" : "s"} to headlines.js.`);
}
