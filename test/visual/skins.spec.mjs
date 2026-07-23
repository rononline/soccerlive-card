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

test('team card — branded custom gradient + crest watermark', async ({ page }) => {
  await open(page, { mode: 'card', branded: '1' });
  await expect(target(page)).toHaveScreenshot('team-branded.png');
});

test('editor — custom palette advanced background fields', async ({ page }) => {
  await open(page, { mode: 'editor', palette: 'custom', gradient_from: '#8e0e00', gradient_to: '#1f1c18', watermark_opacity: '0.12' });
  // Expand the "Advanced colours" details (inside the editor's shadow DOM) so
  // the gradient/watermark input fields themselves are captured.
  await page.evaluate(() => {
    const ed = document.querySelector('soccer-live-team-editor');
    const d = ed && ed.shadowRoot && ed.shadowRoot.querySelector('details.skin-adv');
    if (d) d.open = true;
  });
  await page.waitForTimeout(80);
  await expect(target(page)).toHaveScreenshot('editor-custom-advanced.png');
});

// --- Sync-status states (shared renderer) + friendly branding ---

const SYNC_STATES = ['initializing', 'rate_limited', 'authentication_failed', 'provider_unavailable'];
for (const s of SYNC_STATES) {
  test(`sync status — ${s}`, async ({ page }) => {
    await open(page, { mode: 'card', sync_status: s });
    await expect(target(page)).toHaveScreenshot(`sync-${s}.png`);
  });
}

test('multi team — one working + one auth-failed sensor', async ({ page }) => {
  await open(page, { mode: 'multiteam' });
  await expect(target(page)).toHaveScreenshot('multiteam-mixed.png');
});

test('friendly — FIFA competition logo is suppressed (neutral badge)', async ({ page }) => {
  await open(page, { mode: 'card', friendly: '1' });
  await expect(target(page)).toHaveScreenshot('team-friendly.png');
});

test('club — analysis, comparison and transfer top-layer popup', async ({ page }) => {
  await open(page, { mode: 'club', lang: 'nl' });
  await page.evaluate(() => {
    const card = document.querySelector('soccer-live-club');
    const root = card.shadowRoot;
    const compare = [...root.querySelectorAll('.clb-compare-toggle')];
    compare[0].click();
    compare[1].click();
  });
  await page.waitForFunction(() => document.querySelector('soccer-live-club')?.shadowRoot?.querySelector('.clb-comparison')?.textContent?.includes('Back'));
  const state = await page.evaluate(() => {
    const root = document.querySelector('soccer-live-club').shadowRoot;
    return {
      analysis: Boolean(root.querySelector('.clb-analysis')),
      injuries: Boolean(root.querySelector('.clb-injuries')),
      comparison: root.querySelector('.clb-comparison')?.textContent || '',
    };
  });
  expect(state.analysis).toBe(true);
  expect(state.injuries).toBe(true);
  expect(state.comparison).toContain('Keeper');
  expect(state.comparison).toContain('Back');
  await page.evaluate(() => {
    const root = document.querySelector('soccer-live-club').shadowRoot;
    root.querySelector('.clb-favorite-toggle').click();
    const search = root.querySelector('.clb-squad-tools input');
    search.value = 'Back';
    search.dispatchEvent(new Event('input', { bubbles: true }));
    root.querySelector('.clb-collapse-squad').open = true;
  });
  await page.waitForFunction(() => {
    const root = document.querySelector('soccer-live-club')?.shadowRoot;
    const stored = JSON.parse(localStorage.getItem('soccer-live-club:sensor.preview_team') || '{}');
    return root?.querySelector('.clb-favorites') && root.querySelectorAll('.clb-player').length === 1 && stored.sections?.squad === true;
  });
  await expect(page.locator('soccer-live-club')).toContainText('Favoriete spelers');
  await page.reload();
  await page.waitForFunction(() => document.body.dataset.ready === '1');
  const persisted = await page.evaluate(() => {
    const root = document.querySelector('soccer-live-club').shadowRoot;
    return { favorite: root.querySelector('.clb-favorites')?.textContent || '', squadOpen: root.querySelector('.clb-collapse-squad')?.open };
  });
  expect(persisted.favorite).toContain('Keeper');
  expect(persisted.squadOpen).toBe(true);
  await page.evaluate(() => document.querySelector('soccer-live-club').shadowRoot.querySelector('.clb-transfer').click());
  const dialog = page.locator('dialog.soccer-live-club-player-portal');
  await expect(dialog).toHaveAttribute('open', '');
  await expect(dialog).toContainText('Nieuwe speler');
  await expect(dialog).toContainText('Andere club');
  await page.evaluate(() => {
    document.querySelector('soccer-live-club')._selectedTransfer = null;
    const root = document.querySelector('soccer-live-club').shadowRoot;
    [...root.querySelectorAll('.clb-transfer')].find(row => row.textContent.includes('Calvin Stengs')).click();
  });
  await expect(dialog).toContainText('Calvin Stengs');
  await expect(dialog).toContainText('Transfervrij');
  await expect(dialog).not.toContainText('Free agent');
});

test('club — dashboard mode and configured section order', async ({ page }) => {
  await open(page, { mode: 'club', lang: 'nl', dashboard_mode: '1', section_order: 'changes,matchday,favorites,injuries,transfers,profile' });
  const state = await page.evaluate(() => {
    const root = document.querySelector('soccer-live-club').shadowRoot;
    const content = root.querySelector('.card-content');
    const meaningful = [...content.children].filter(item => !item.classList.contains('hero-bg'));
    return {
      firstSection: meaningful.find(item => item.matches?.('.clb-changes,.clb-matchday,.clb-profile'))?.className || '',
      changes: root.querySelector('.clb-changes')?.textContent || '',
      analysis: Boolean(root.querySelector('.clb-analysis')),
      squad: Boolean(root.querySelector('.clb-squad-tools')),
      transfers: root.querySelectorAll('.clb-transfer').length,
    };
  });
  expect(state.firstSection).toContain('clb-changes');
  expect(state.changes).toContain('Nieuwe speler');
  expect(state.analysis).toBe(false);
  expect(state.squad).toBe(false);
  expect(state.transfers).toBe(1);
});

test('matches — prematch detail popup is capability based', async ({ page }) => {
  await open(page, { mode: 'matches', lang: 'nl' });
  await page.evaluate(() => {
    const rows = [...document.querySelector('soccer-live-matches').shadowRoot.querySelectorAll('.match-row')];
    rows.find(row => row.textContent.includes('Rayo Vallecano')).click();
  });
  const dialog = page.locator('dialog.soccer-live-matches-popup-portal');
  await expect(dialog).toHaveAttribute('open', '');
  await expect(dialog).toContainText('Vorm');
  await expect(dialog).toContainText('Positie op de ranglijst');
  await expect(dialog).toContainText('Voorspelling');
  await expect(dialog).toContainText('Databron');
  await expect(dialog).toContainText('Oefenwedstrijd');
  await expect(dialog.locator('.mp-countdown')).toContainText(/Aftrap over \d+ dagen?( en \d+ uur)?/);
  await expect(dialog.locator('.mp-countdown')).not.toContainText(/^\s*Aftrap over \d+ min\s*$/);
});

// --- Complete card matrix: every registered type must survive rich, partial
// and empty standalone data without a render exception or page-level overflow.

const CARD_MATRIX = [
  'team', 'standings', 'matches', 'countdown', 'news', 'bracket',
  'mini-standings', 'scorers', 'multi-team', 'team-competitions',
  'match-center', 'team-form', 'club', 'diagnostics', 'ticker',
  'lineup', 'timeline', 'minimal',
];

async function expectHealthyCard(page, type) {
  await expect(target(page).locator(':scope > *')).toHaveCount(1);
  const health = await page.evaluate(() => {
    const el = document.querySelector('#target > *');
    const card = el?.shadowRoot?.querySelector('ha-card') || el;
    return {
      text: (el?.shadowRoot?.textContent || el?.textContent || '').replace(/\s+/g, ' ').trim(),
      documentOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      cardWidth: card?.getBoundingClientRect().width || 0,
    };
  });
  expect(health.text, `${type} should render a meaningful state`).not.toBe('');
  expect(health.documentOverflow, `${type} should not overflow the viewport`).toBeLessThanOrEqual(2);
  expect(health.cardWidth, `${type} should have a visible card`).toBeGreaterThan(0);
}

for (const type of CARD_MATRIX) {
  test(`${type} — rich desktop, partial mobile and empty standalone`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));

    await page.setViewportSize({ width: 1000, height: 1200 });
    await open(page, { mode: 'matrix', type, data: 'rich', lang: 'nl' });
    await expectHealthyCard(page, type);

    await page.setViewportSize({ width: 320, height: 1000 });
    await open(page, { mode: 'matrix', type, data: 'partial', lang: 'nl' });
    await expectHealthyCard(page, type);

    await open(page, { mode: 'matrix', type, data: 'empty', provider: 'api_football', lang: 'nl' });
    await expectHealthyCard(page, type);
    expect(errors, `${type} emitted browser exceptions`).toEqual([]);
  });
}

for (const type of ['team', 'matches', 'countdown', 'match-center', 'team-form', 'club']) {
  test(`${type} — optional FotMob enrichment remains provider-neutral`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewportSize({ width: 360, height: 1100 });
    await open(page, { mode: 'matrix', type, provider: 'fotmob', lang: 'nl' });
    await expectHealthyCard(page, type);
    expect(errors).toEqual([]);
  });
}

for (const type of ['team', 'matches', 'countdown', 'match-center', 'lineup', 'timeline']) {
  test(`${type} — synthetic live and full-time phases`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewportSize({ width: 360, height: 1100 });

    await open(page, { mode: 'matrix', type, phase: 'live', lang: 'nl' });
    await expectHealthyCard(page, type);
    await expect(target(page)).toContainText(/2\s*[-–]\s*1|67/);

    await open(page, { mode: 'matrix', type, phase: 'post', lang: 'nl' });
    await expectHealthyCard(page, type);
    await expect(target(page)).toContainText(/3\s*[-–]\s*1|Einde wedstrijd|Afgelopen/);
    expect(errors).toEqual([]);
  });
}

test('enriched post-match insights and selection impact stay capability based', async ({ page }) => {
  await page.setViewportSize({ width: 420, height: 1200 });

  await open(page, { mode: 'matrix', type: 'match-center', phase: 'post', lang: 'nl' });
  await expect(target(page)).toContainText('Verwachting versus werkelijkheid');
  await expect(target(page)).toContainText('Thuiswinst');

  await open(page, { mode: 'matrix', type: 'matches', phase: 'post', lang: 'nl' });
  await page.evaluate(() => document.querySelector('soccer-live-matches').shadowRoot.querySelector('.match-row').click());
  const dialog = page.locator('dialog.soccer-live-matches-popup-portal');
  await expect(dialog).toContainText('Wedstrijdverhaal');
  await expect(dialog).toContainText('Verwachting versus werkelijkheid');

  await open(page, { mode: 'matrix', type: 'club', phase: 'pre', lang: 'nl' });
  await expect(target(page)).toContainText('spelers afwezig');

  await open(page, { mode: 'matrix', type: 'match-center', phase: 'post', data: 'partial', lang: 'nl' });
  await expect(target(page)).not.toContainText('Verwachting versus werkelijkheid');
});
