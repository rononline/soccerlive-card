// Shared football-pitch lineup renderer.
// Used by the MatchCenter, Lineup and popup (Team / Tutte) cards so the
// formation view is defined and styled in a single place.

import { html, css } from "lit-element";

/** Parse "4-3-3" / "4-4-1-1" into outfield line counts. Lenient: keeps any
 *  positive integers, so partial/odd formations still render something. */
export function parseFormation(str) {
  if (!str) return [];
  return String(str).split(/[-\s]+/).map(Number).filter(n => Number.isFinite(n) && n > 0);
}

function _isGk(p) {
  const pos = String(p?.position ?? '').toUpperCase();
  return pos === 'GK' || pos === 'G';
}

function _splitByFormation(starters, formation) {
  if (!starters.length) return [];
  let gkIdx = starters.findIndex(_isGk);
  if (gkIdx === -1) gkIdx = 0;
  const gk = starters[gkIdx];
  const out = starters.filter((_, i) => i !== gkIdx);
  const rows = [[gk]];
  let i = 0;
  for (const n of formation) {
    if (i >= out.length) break;
    rows.push(out.slice(i, i + n));
    i += n;
  }
  if (i < out.length) rows.push(out.slice(i));
  return rows;
}

function _lastName(p) {
  const s = p.short_name || p.name || '';
  return /^[A-Z]\. /.test(s) ? s.slice(3) : s;
}

/**
 * Render the starting XI on a vertical pitch, both teams facing each other.
 * Returns a lit template, or null when a pitch cannot be drawn (no lineups,
 * or neither team has a formation) — the caller should then fall back to a
 * list view.
 *
 * @param {object} match  match model with lineup_home/away + formation_home/away
 * @param {object} opts   { t?: translate fn, showBench?: boolean (default true) }
 */
export function renderPitch(match, opts = {}) {
  const t = opts.t || (k => k);
  const showBench = opts.showBench !== false;

  const home = match.lineup_home || [];
  const away = match.lineup_away || [];
  if (!home.length && !away.length) return null;

  const fmHome = parseFormation(match.formation_home);
  const fmAway = parseFormation(match.formation_away);
  if (!fmHome.length && !fmAway.length) return null;

  const hasFlags = arr => arr.some(p => p.starter === true || p.starter === false);
  const homeStart = hasFlags(home) ? home.filter(p => p.starter === true) : home;
  const homeBench = hasFlags(home) ? home.filter(p => p.starter === false) : [];
  const awayStart = hasFlags(away) ? away.filter(p => p.starter === true) : away;
  const awayBench = hasFlags(away) ? away.filter(p => p.starter === false) : [];

  const homeRows = _splitByFormation(homeStart, fmHome);
  const awayRows = _splitByFormation(awayStart, fmAway);
  // Away half: GK at top → forwards toward the center line.
  const awayDisplay = awayRows;
  // Home half: forwards nearest center → GK at the bottom.
  const homeDisplay = homeRows.length > 1
    ? [...homeRows.slice(1).reverse(), homeRows[0]]
    : homeRows;

  const dot = (p, side) => html`
    <div class="pit-player">
      <div class="pit-dot ${side}${_isGk(p) ? ' gk' : ''}">${p.jersey || ''}</div>
      <div class="pit-name">${_lastName(p)}</div>
    </div>
  `;
  const pitRow = (players, side) => html`
    <div class="pit-row">${players.map(p => dot(p, side))}</div>
  `;
  const benchRow = p => html`
    <div class="pit-bench-p">
      <span class="pit-bench-num">${p.jersey || ''}</span>
      <span>${p.short_name || p.name || ''}</span>
    </div>
  `;

  return html`
    <div class="pit-outer">
      <div class="pit-field">
        <svg class="pit-lines" viewBox="0 0 100 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="98" height="148" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1"/>
          <rect x="20" y="1" width="60" height="24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
          <rect x="37" y="1" width="26" height="8" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <circle cx="50" cy="17" r="1.5" fill="rgba(255,255,255,0.5)"/>
          <path d="M 44 25 A 10 10 0 0 1 56 25" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
          <line x1="1" y1="75" x2="99" y2="75" stroke="rgba(255,255,255,0.55)" stroke-width="1"/>
          <circle cx="50" cy="75" r="13" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="0.8"/>
          <circle cx="50" cy="75" r="1.5" fill="rgba(255,255,255,0.5)"/>
          <rect x="20" y="125" width="60" height="24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
          <rect x="37" y="141" width="26" height="8" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <circle cx="50" cy="133" r="1.5" fill="rgba(255,255,255,0.5)"/>
          <path d="M 44 125 A 10 10 0 0 1 56 125" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
          <path d="M 1 6 A 5 5 0 0 1 6 1" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <path d="M 94 1 A 5 5 0 0 1 99 6" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <path d="M 1 144 A 5 5 0 0 1 6 149" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <path d="M 94 149 A 5 5 0 0 1 99 144" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
        </svg>
        ${match.formation_away ? html`<div class="pit-fm away">${match.formation_away}</div>` : ''}
        <div class="pit-half">${awayDisplay.map(r => pitRow(r, 'away'))}</div>
        <div class="pit-mid"></div>
        <div class="pit-half">${homeDisplay.map(r => pitRow(r, 'home'))}</div>
        ${match.formation_home ? html`<div class="pit-fm home">${match.formation_home}</div>` : ''}
      </div>
      ${showBench && (homeBench.length || awayBench.length) ? html`
        <div class="pit-bench">
          <div>
            <div class="pit-bench-title">${match.home_team || t('generic.home')}</div>
            ${homeBench.map(benchRow)}
          </div>
          <div>
            <div class="pit-bench-title">${match.away_team || t('generic.away')}</div>
            ${awayBench.map(benchRow)}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

export const pitchStyles = css`
  .pit-outer { }
  .pit-field {
    position: relative;
    background-color: #2d7d30;
    background-image: repeating-linear-gradient(180deg, transparent, transparent 36px, rgba(0,0,0,0.06) 36px, rgba(0,0,0,0.06) 72px);
    border-radius: 6px;
    margin: 12px;
    overflow: hidden;
  }
  .pit-lines {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none;
  }
  .pit-fm {
    position: absolute; z-index: 1;
    font-size: 9px; font-weight: 800; letter-spacing: 0.04em;
    color: rgba(255,255,255,0.6);
    padding: 3px 6px;
  }
  .pit-fm.away { top: 4px; right: 6px; }
  .pit-fm.home { bottom: 4px; left: 6px; }
  .pit-half { display: flex; flex-direction: column; gap: 10px; padding: 10px 8px; }
  .pit-mid { height: 24px; }
  .pit-row { display: flex; justify-content: space-around; align-items: flex-start; }
  .pit-player { display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 34px; }
  .pit-dot {
    width: 30px; height: 30px; border-radius: 50%;
    background: var(--cl-accent, #6366f1);
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 800; color: white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.5);
  }
  .pit-dot.away { background: #374151; }
  .pit-dot.gk { background: #d946ef; }
  .pit-dot.away.gk { background: #6b7280; }
  .pit-name {
    font-size: 8px; font-weight: 600; color: rgba(255,255,255,0.95);
    text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    max-width: 54px; text-shadow: 0 1px 3px rgba(0,0,0,0.9);
  }
  .pit-bench {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
    padding: 12px 16px;
    border-top: 1px solid var(--cl-divider, rgba(255,255,255,0.06));
  }
  .pit-bench-title {
    font-size: 9px; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8); margin-bottom: 6px;
  }
  .pit-bench-p {
    display: flex; align-items: center; gap: 5px; font-size: 11px; padding: 3px 0;
    border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.04));
  }
  .pit-bench-num { font-size: 10px; font-weight: 800; color: var(--cl-accent, #6366f1); min-width: 16px; }
`;
