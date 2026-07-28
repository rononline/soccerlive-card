import { readdir, stat } from "node:fs/promises";

const bundlePath = new URL("../dist/soccer-live-card.bundle.js", import.meta.url);
const maximumBytes = 750 * 1024;
const { size } = await stat(bundlePath);
const distFiles = await readdir(new URL("../dist/", import.meta.url));
const unexpectedChunks = distFiles.filter(name => (
  name.endsWith(".js") && name !== "soccer-live-card.bundle.js"
));
if (unexpectedChunks.length) {
  console.error(
    `Unexpected JavaScript chunks: ${unexpectedChunks.join(", ")}. HACS installs one plugin asset.`,
  );
  process.exitCode = 1;
}
const sizeKiB = (size / 1024).toFixed(1);

if (size > maximumBytes) {
  console.error(
    `Bundle is ${sizeKiB} KiB; the maximum is ${maximumBytes / 1024} KiB.`,
  );
  process.exitCode = 1;
} else {
  console.log(`Bundle size: ${sizeKiB} KiB (limit: ${maximumBytes / 1024} KiB).`);
}
