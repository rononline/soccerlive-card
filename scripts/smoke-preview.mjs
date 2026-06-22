import { readFileSync } from "node:fs";

const preview = readFileSync("docs/preview.html", "utf8");
const bundle = readFileSync("dist/soccer-live-card.bundle.js", "utf8");

const required = [
  "soccer-live-card.bundle.js",
  "sensor.preview_team",
  "sensor.preview_empty",
  "sensor.preview_unavailable",
  "sensor.preview_missing_logos",
  "sensor.preview_live_empty",
  "Team Competitions",
  "Diagnostics · unavailable",
  "Ticker · live hidden when empty",
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

const panelCount = (preview.match(/\["/g) || []).length;
if (panelCount < 24) {
  console.error(`Preview smoke test failed. Expected at least 24 card panels, found ${panelCount}.`);
  process.exit(1);
}

console.log(`Preview smoke test passed (${panelCount} card panels).`);
