# Visual regression tests

Screenshot tests for the card/editor skins, driven by Playwright. They render
`test/visual/harness.html` (which loads the built bundle with a mock Home
Assistant state) and compare screenshots against committed baselines.

Covered: dark / light / Home Assistant appearance, a legacy `skin:`, the inline
match-list team names with the tracked-team underline (light + white-gold), and
the editor (palette swatches on desktop + mobile, the custom-palette contrast
warning, and the shared-inheritance status).

## Run

```bash
npm run build           # the harness loads dist/soccer-live-card.bundle.js
npm run test:visual
```

First-time setup (once): `npx playwright install chromium`.

These are **not** part of `npm test` (which stays browser-free); run them
explicitly.

## Updating baselines

After an intentional visual change:

```bash
npm run build
npm run test:visual -- --update-snapshots
```

Baselines are **platform-specific** — Playwright suffixes them with the OS (e.g.
`-darwin.png`). The committed baselines are generated on macOS. To run in CI on
Linux, generate Linux baselines there (e.g. in the official
`mcr.microsoft.com/playwright` container) and commit the `-linux.png` variants.
