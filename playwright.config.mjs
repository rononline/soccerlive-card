import { defineConfig } from '@playwright/test';

// Visual regression for the cards/editor skins. Baselines are platform-specific
// (Playwright suffixes them with the OS); generate/update with:
//   npm run test:visual -- --update-snapshots
export default defineConfig({
  testDir: './test/visual',
  snapshotDir: './test/visual/__snapshots__',
  fullyParallel: true,
  reporter: [['list']],
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      // Allow only a little anti-aliasing noise between runs.
      maxDiffPixelRatio: 0.01,
    },
  },
  use: {
    viewport: { width: 440, height: 1000 },
    deviceScaleFactor: 1,
  },
});
