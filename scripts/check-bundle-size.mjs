import { readFile, readdir, stat } from "node:fs/promises";
import { gzipSync } from "node:zlib";

const bundlePath = new URL("../dist/soccer-live-card.bundle.js", import.meta.url);
const preferredBytes = 720 * 1024;
const maximumBytes = 735 * 1024;
const { size } = await stat(bundlePath);
const gzipBytes = gzipSync(await readFile(bundlePath), { level: 9 }).byteLength;
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
const gzipKiB = (gzipBytes / 1024).toFixed(1);

if (size > maximumBytes) {
  console.error(
    `Bundle is ${sizeKiB} KiB; the maximum is ${maximumBytes / 1024} KiB.`,
  );
  process.exitCode = 1;
} else {
  console.log(`Bundle size: ${sizeKiB} KiB / ${gzipKiB} KiB gzip (limit: ${maximumBytes / 1024} KiB).`);
  if (size > preferredBytes) {
    console.warn(`Bundle exceeds the preferred ${preferredBytes / 1024} KiB target.`);
  }
}
