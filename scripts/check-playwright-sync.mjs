import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const packageLock = JSON.parse(
  await readFile(new URL("package-lock.json", root), "utf8"),
);
const workflow = await readFile(
  new URL(".github/workflows/visual.yml", root),
  "utf8",
);

const packageVersion =
  packageLock.packages?.["node_modules/@playwright/test"]?.version;
const imageVersion = workflow.match(
  /mcr\.microsoft\.com\/playwright:v([^-\s]+)-noble/,
)?.[1];

if (!packageVersion || !imageVersion) {
  console.error("Could not determine the Playwright package or container version.");
  process.exitCode = 1;
} else if (packageVersion !== imageVersion) {
  console.error(
    `Playwright mismatch: package ${packageVersion}, container ${imageVersion}.`,
  );
  process.exitCode = 1;
} else {
  console.log(`Playwright package and container match at ${packageVersion}.`);
}
