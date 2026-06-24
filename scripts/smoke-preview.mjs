import { readFileSync } from "node:fs";

const preview = readFileSync("docs/preview.html", "utf8");
const bundle = readFileSync("dist/soccer-live-card.bundle.js", "utf8");
const cardSource = readFileSync("src/soccer-live-card.js", "utf8");

const required = [
  "soccer-live-card.bundle.js",
  "sensor.preview_team",
  "sensor.preview_empty",
  "sensor.preview_unavailable",
  "sensor.preview_missing_logos",
  "sensor.preview_live_empty",
  "Team Competitions",
  "Diagnostics · unavailable",
  "Ticker · no live matches",
  'headline: "Netherlands prepare for Sweden"',
];

const missing = required.filter((needle) => !preview.includes(needle));
if (missing.length) {
  console.error(`Preview smoke test failed. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

if (!bundle.includes("soccer-live-card")) {
  console.error("Preview smoke test failed. Bundle does not contain soccer-live-card.");
  process.exit(1);
}

const registryBlock = cardSource.match(/const CARD_REGISTRY = \[([\s\S]*?)\n\];/);
const cardsBlock = preview.match(/const cards = \[([\s\S]*?)\n    \];/);
if (!registryBlock || !cardsBlock) {
  console.error("Preview smoke test failed. Could not parse card registry or preview panels.");
  process.exit(1);
}

const registryTypes = [...registryBlock[1].matchAll(/value:\s*'([^']+)'/g)].map(match => match[1]);
const previewTypes = [
  ...cardsBlock[1].matchAll(/\[\s*"[^"]+"\s*,\s*"([^"]+)"\s*,\s*\{/g),
].map(match => match[1]);
const missingTypes = registryTypes.filter(type => !previewTypes.includes(type));
const unknownTypes = previewTypes.filter(type => !registryTypes.includes(type));

if (missingTypes.length || unknownTypes.length) {
  console.error([
    "Preview smoke test failed.",
    missingTypes.length ? `Missing card types: ${missingTypes.join(", ")}` : "",
    unknownTypes.length ? `Unknown card types: ${unknownTypes.join(", ")}` : "",
  ].filter(Boolean).join(" "));
  process.exit(1);
}

if (previewTypes.length < registryTypes.length) {
  console.error(`Preview smoke test failed. Expected at least ${registryTypes.length} panels, found ${previewTypes.length}.`);
  process.exit(1);
}

console.log(`Preview smoke test passed (${previewTypes.length} panels, all ${registryTypes.length} card types covered).`);
