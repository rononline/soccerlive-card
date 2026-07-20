import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const HARNESS = pathToFileURL(resolve('test/visual/harness.html')).href;

async function open(page, params) {
  const q = new URLSearchParams(params).toString();
  await page.goto(`${HARNESS}?${q}`);
  await page.waitForFunction(() => document.body.dataset.ready === '1');
  await page.evaluate(() => document.fonts && document.fonts.ready);
}

const target = (page) => page.locator('#target');

// --- Team card: appearance × palette, legacy skin, inline names ---

test('team card — dark + purple', async ({ page }) => {
  await open(page, { mode: 'card', appearance: 'dark', palette: 'purple' });
  await expect(target(page)).toHaveScreenshot('team-dark-purple.png');
});

test('team card — light + purple', async ({ page }) => {
  await open(page, { mode: 'card', appearance: 'light', palette: 'purple' });
  await expect(target(page)).toHaveScreenshot('team-light-purple.png');
});

test('team card — Home Assistant appearance', async ({ page }) => {
  await open(page, { mode: 'card', appearance: 'ha', palette: 'blue' });
  await expect(target(page)).toHaveScreenshot('team-ha-blue.png');
});

test('team card — legacy skin: red-white', async ({ page }) => {
  await open(page, { mode: 'card', skin: 'red-white' });
  await expect(target(page)).toHaveScreenshot('team-legacy-red-white.png');
});

test('team card — inline names + tracked underline (light + white-gold)', async ({ page }) => {
  await open(page, { mode: 'card', appearance: 'light', palette: 'white-gold', my_team: 'Feyenoord' });
  await expect(target(page)).toHaveScreenshot('team-light-white-gold-tracked.png');
});

test('team card — tracked underline visible (light + black-white)', async ({ page }) => {
  // Guards the --cl-accent-visible fix: black-white's accent is white, so the
  // underline must use the explicit slate, not the (white) secondary.
  await open(page, { mode: 'card', appearance: 'light', palette: 'black-white', my_team: 'Feyenoord' });
  await expect(target(page)).toHaveScreenshot('team-light-black-white-tracked.png');
});

test('team card — missing abbreviation and colour', async ({ page }) => {
  await open(page, { mode: 'card', variant: 'missing' });
  await expect(target(page)).toHaveScreenshot('team-missing-abbrev.png');
});

test('team card — very long team name at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 1000 });
  await open(page, { mode: 'card', variant: 'longname' });
  await expect(target(page)).toHaveScreenshot('team-longname-320.png');
});

test('team card — Home Assistant appearance with a real theme', async ({ page }) => {
  await open(page, { mode: 'card', appearance: 'ha', palette: 'blue', ha_theme: '1' });
  await expect(target(page)).toHaveScreenshot('team-ha-themed.png');
});

// --- Editor: swatches, custom contrast warning, shared inheritance ---

test('editor — palette swatches (desktop)', async ({ page }) => {
  await open(page, { mode: 'editor' });
  await expect(target(page)).toHaveScreenshot('editor-desktop.png');
});

test('editor — palette swatches (mobile)', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 1000 });
  await open(page, { mode: 'editor' });
  await expect(target(page)).toHaveScreenshot('editor-mobile.png');
});

test('editor — custom palette contrast warning', async ({ page }) => {
  // Light appearance with a light text on a light background -> low contrast.
  await open(page, { mode: 'editor', appearance: 'light', palette: 'custom', background_color: '#f5f5f5', text_color: '#eeeeee' });
  await expect(target(page)).toHaveScreenshot('editor-custom-contrast.png');
});

test('editor — shared inheritance shown', async ({ page }) => {
  // Sensor shares red-white; the card sets nothing -> inherit shows "· shared".
  await open(page, { mode: 'editor', card_defaults: JSON.stringify({ palette: 'red-white', language: 'nl' }) });
  await expect(target(page)).toHaveScreenshot('editor-shared.png');
});

test('editor — multi-entity shows the shared source', async ({ page }) => {
  // A multi-entity card names the sensor its shared defaults come from: "(via ...)".
  await open(page, {
    mode: 'editor',
    entities: JSON.stringify(['sensor.preview_team', 'sensor.preview_team_2']),
    card_defaults: JSON.stringify({ palette: 'red-white', language: 'nl' }),
  });
  await expect(target(page)).toHaveScreenshot('editor-multi-via.png');
});

// --- Minimal card variants (narrow / 320px) ---

for (const variant of ['fixtures', 'next', 'standings', 'form']) {
  test(`minimal — ${variant} at 320px`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    await open(page, { mode: 'minimal', variant, my_team: 'Feyenoord' });
    await expect(target(page)).toHaveScreenshot(`minimal-${variant}-320.png`);
  });
}

test('minimal — next prefers a live match (320px)', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await open(page, { mode: 'minimal', variant: 'next', live: '1', my_team: 'Feyenoord' });
  await expect(target(page)).toHaveScreenshot('minimal-next-live-320.png');
});
