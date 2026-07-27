import { stat } from "node:fs/promises";

const bundlePath = new URL("../dist/soccer-live-card.bundle.js", import.meta.url);
const maximumBytes = 950 * 1024;
const { size } = await stat(bundlePath);
const sizeKiB = (size / 1024).toFixed(1);

if (size > maximumBytes) {
  console.error(
    `Bundle is ${sizeKiB} KiB; the maximum is ${maximumBytes / 1024} KiB.`,
  );
  process.exitCode = 1;
} else {
  console.log(`Bundle size: ${sizeKiB} KiB (limit: ${maximumBytes / 1024} KiB).`);
}
