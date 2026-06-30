/**
 * Smoke tests for i18n date utilities.
 * Run with: node scripts/smoke-i18n.mjs
 */
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

// Inline minimal implementations extracted from src/i18n.js for node-only testing
// (avoids bundling the full LitElement dependency chain)
function parseMatchDate(dateStr) {
  if (!dateStr || dateStr === "N/A") return null;
  const m = String(dateStr).match(/^(\d{2})[-/](\d{2})[-/](\d{4})(?:\s+(\d{2}):(\d{2}))?/);
  if (m) {
    const date = new Date(+m[3], +m[2] - 1, +m[1], +(m[4] || 0), +(m[5] || 0));
    return Number.isFinite(date.getTime()) ? date : null;
  }
  const iso = new Date(dateStr);
  return Number.isFinite(iso.getTime()) ? iso : null;
}

const cases = [
  // custom ESPN format (DD-MM-YYYY HH:MM)
  { input: "23-06-2022 18:00", expectYear: 2022, expectMonth: 5, expectDay: 23, label: "custom format" },
  { input: "01-01-2024 00:00", expectYear: 2024, expectMonth: 0, expectDay: 1, label: "custom format Jan 1" },
  // ISO 8601 — H2H dates from ESPN
  { input: "2022-06-23T18:00Z", expectYear: 2022, expectMonth: 5, expectDay: 23, label: "ISO with time+Z" },
  { input: "2023-03-15T20:45:00.000Z", expectYear: 2023, expectMonth: 2, expectDay: 15, label: "ISO with ms+Z" },
  { input: "2024-12-01", expectYear: 2024, expectMonth: 11, expectDay: 1, label: "ISO date-only" },
  // sentinel / edge cases
  { input: null, expectNull: true, label: "null" },
  { input: "N/A", expectNull: true, label: "N/A sentinel" },
  { input: "", expectNull: true, label: "empty string" },
  { input: "not-a-date", expectNull: true, label: "garbage" },
];

let passed = 0;
let failed = 0;

for (const c of cases) {
  const result = parseMatchDate(c.input);
  if (c.expectNull) {
    if (result === null) {
      passed++;
    } else {
      console.error(`FAIL [${c.label}]: expected null, got ${result}`);
      failed++;
    }
    continue;
  }
  if (!result) {
    console.error(`FAIL [${c.label}]: parseMatchDate(${JSON.stringify(c.input)}) returned null`);
    failed++;
    continue;
  }
  const utc = new Date(Date.UTC(result.getFullYear(), result.getMonth(), result.getDate()));
  const yOk = result.getFullYear() === c.expectYear;
  const mOk = result.getMonth() === c.expectMonth;
  const dOk = result.getDate() === c.expectDay;
  if (yOk && mOk && dOk) {
    passed++;
  } else {
    console.error(
      `FAIL [${c.label}]: parseMatchDate(${JSON.stringify(c.input)}) ` +
      `→ ${result.getFullYear()}-${result.getMonth()}-${result.getDate()} ` +
      `(expected ${c.expectYear}-${c.expectMonth}-${c.expectDay})`
    );
    failed++;
  }
}

if (failed) {
  console.error(`\ni18n smoke test FAILED: ${failed} failed, ${passed} passed`);
  process.exit(1);
}
console.log(`i18n smoke test passed (${passed} cases)`);
