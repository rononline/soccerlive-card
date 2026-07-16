// Shared pre-match sections (prediction, odds, injuries) used by the Team and
// Match Center cards. Each returns '' unless the match is upcoming (state
// 'pre') and actually carries the data, so nothing shows when there is none.
import { html, css } from 'lit-element';
import { translateAdvice } from './shared-advice.js';

export function renderPrediction(match, { t, lang }) {
  const p = match.prediction;
  if (!p || match.state !== 'pre') return '';
  const num = v => (typeof v === 'number' && isFinite(v)) ? v : null;
  const h = num(p.percent_home), d = num(p.percent_draw), a = num(p.percent_away);
  const hasBar = h !== null || d !== null || a !== null;
  const rawAdvice = (p.advice && p.advice !== 'N/A') ? p.advice : '';
  const advice = translateAdvice(rawAdvice, lang);
  if (!hasBar && !advice) return '';
  const homeAbbr = match.home_abbrev || match.home_team || '';
  const awayAbbr = match.away_abbrev || match.away_team || '';
  return html`
    <div class="pred">
      <div class="pred-title">${t('team.prediction')}</div>
      ${hasBar ? html`
        <div class="pred-bar">
          <div class="pred-seg home" style="width:${h ?? 0}%"></div>
          <div class="pred-seg draw" style="width:${d ?? 0}%"></div>
          <div class="pred-seg away" style="width:${a ?? 0}%"></div>
        </div>
        <div class="pred-legend">
          <span class="pred-l home">${homeAbbr} ${h ?? 0}%</span>
          <span class="pred-l draw">${t('match.draw')} ${d ?? 0}%</span>
          <span class="pred-l away">${a ?? 0}% ${awayAbbr}</span>
        </div>
      ` : ''}
      ${advice ? html`<div class="pred-advice">${advice}</div>` : ''}
    </div>
  `;
}

export function renderOdds(match, { t }) {
  if (match.state !== 'pre') return '';
  const o = match.odds;
  if (!o) return '';
  const num = v => (typeof v === 'number' && isFinite(v)) ? v : null;
  const h = num(o.home), d = num(o.draw), a = num(o.away);
  const present = [h, d, a].filter(v => v !== null);
  if (!present.length) return '';
  const min = Math.min(...present); // lowest odd = favourite
  const homeAbbr = match.home_abbrev || match.home_team || '';
  const awayAbbr = match.away_abbrev || match.away_team || '';
  const col = (cls, label, v) => html`
    <div class="odds-col ${cls}${v !== null && v === min ? ' fav' : ''}">
      <div class="odds-team">${label}</div>
      <div class="odds-val">${v !== null ? v.toFixed(2) : '–'}</div>
    </div>`;
  return html`
    <div class="odds">
      <div class="odds-title">${t('team.odds')}</div>
      <div class="odds-row">
        ${col('home', homeAbbr, h)}
        ${col('draw', t('match.draw'), d)}
        ${col('away', awayAbbr, a)}
      </div>
    </div>
  `;
}

export function renderInjuries(match, { t }) {
  if (match.state !== 'pre') return '';
  const home = match.injuries_home || [];
  const away = match.injuries_away || [];
  if (!home.length && !away.length) return '';
  const row = p => html`
    <div class="inj-row">
      <span class="inj-ic">${p.suspended ? '🚫' : '🩹'}</span>
      <span class="inj-name">${p.player}</span>
      ${p.reason ? html`<span class="inj-reason">${p.reason}</span>` : ''}
    </div>`;
  const col = (team, list) => html`
    <div class="inj-col">
      <div class="inj-team">${team}</div>
      ${list.length ? list.map(row) : html`<div class="inj-none">–</div>`}
    </div>`;
  return html`
    <div class="inj">
      <div class="inj-title">${t('team.injuries')}</div>
      <div class="inj-cols">
        ${col(match.home_team || '', home)}
        ${col(match.away_team || '', away)}
      </div>
    </div>
  `;
}

export const prematchStyles = css`
  .pred {
    margin: 10px 12px 4px;
    padding: 10px 12px;
    background: var(--cl-card-2, rgba(255,255,255,0.03));
    border-radius: 10px;
  }
  .pred-title {
    font-size: 10px; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8); margin-bottom: 8px;
  }
  .pred-bar {
    display: flex; height: 10px; border-radius: 5px; overflow: hidden;
    background: var(--cl-divider, rgba(255,255,255,0.08));
  }
  .pred-seg { height: 100%; }
  .pred-seg.home { background: var(--cl-accent, #6366f1); }
  .pred-seg.draw { background: #64748b; }
  .pred-seg.away { background: var(--cl-live, #ef4444); }
  .pred-legend {
    display: flex; justify-content: space-between; margin-top: 5px;
    font-size: 10px; font-weight: 700; color: var(--cl-text-2, #94a3b8);
  }
  .pred-l.home { color: var(--cl-accent, #6366f1); }
  .pred-l.away { color: var(--cl-live, #ef4444); }
  .pred-advice {
    margin-top: 8px; font-size: 11px; color: var(--cl-text, #e2e8f0);
    font-style: italic; text-align: center;
  }
  .odds {
    margin: 8px 12px 4px; padding: 10px 12px;
    background: var(--cl-card-2, rgba(255,255,255,0.03)); border-radius: 10px;
  }
  .odds-title {
    font-size: 10px; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8); margin-bottom: 8px;
  }
  .odds-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
  .odds-col {
    display: flex; flex-direction: column; align-items: center; gap: 3px;
    padding: 7px 4px; border-radius: 8px;
    background: var(--cl-card, rgba(255,255,255,0.02));
    border: 1px solid transparent;
  }
  .odds-team {
    font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.03em;
    color: var(--cl-text-2, #94a3b8);
    max-width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .odds-col.home .odds-team { color: var(--cl-accent, #6366f1); }
  .odds-col.away .odds-team { color: var(--cl-live, #ef4444); }
  .odds-val {
    font-size: 17px; font-weight: 800; color: var(--cl-text, #e2e8f0);
    font-variant-numeric: tabular-nums;
  }
  .odds-col.fav {
    background: var(--cl-accent-soft, rgba(99,102,241,0.14));
    border-color: var(--cl-accent, #6366f1);
  }
  .odds-col.fav .odds-val { color: var(--cl-accent, #6366f1); }
  .inj {
    margin: 8px 12px 4px;
    padding: 10px 12px;
    background: var(--cl-card-2, rgba(255,255,255,0.03));
    border-radius: 10px;
  }
  .inj-title {
    font-size: 10px; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8); margin-bottom: 8px;
  }
  .inj-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .inj-team {
    font-size: 10px; font-weight: 800; color: var(--cl-text, #e2e8f0);
    margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .inj-row { display: flex; align-items: baseline; gap: 5px; padding: 2px 0; font-size: 11px; }
  .inj-ic { font-size: 10px; flex-shrink: 0; }
  .inj-name { font-weight: 600; color: var(--cl-text, #e2e8f0); white-space: nowrap; }
  .inj-reason {
    color: var(--cl-text-2, #94a3b8); font-size: 10px;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .inj-none { color: var(--cl-text-2, #94a3b8); font-size: 11px; }
`;
