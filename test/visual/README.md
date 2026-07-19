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
`-darwin.png`). The committed baselines are generated on macOS.

## CI (Linux baselines)

`.github/workflows/visual.yml` runs the suite in the official
`mcr.microsoft.com/playwright` container on push/PR. It gates on `-linux.png`
baselines, which don't exist yet. To bootstrap them once:

1. Run the **Visual** workflow manually (`workflow_dispatch`) with `update: true`.
2. Download the `visual-results` artifact — it contains the generated
   `*-linux.png` files.
3. Commit them under `test/visual/__snapshots__/…`.

After that, push/PR runs gate against the Linux baselines. Regenerate them the
same way after an intentional visual change.
