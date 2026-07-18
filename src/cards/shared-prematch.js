// Shared pre-match sections (prediction, odds, injuries) used by the Team and
// Match Center cards. Shown for upcoming and live matches (hidden once finished)
// so the pre-match snapshot stays visible as context during the game; each
// returns '' when the match doesn't carry the data, so nothing shows when empty.
import { html, css } from 'lit-element';
import { translateAdvice } from './shared-advice.js';
import { predictionModel, oddsModel, capList, comparisonModel, expectedGoals, formatGoalLine } from './shared-prematch-model.js';

// Cap each team's absentee list so the section can't grow unbounded.
const MAX_INJURIES = 6;

const _pct = v => (v === null || v === undefined) ? '–' : `${v}%`;

// A small "pre-match" chip shown during a live match, where prediction/odds are
// the pre-kickoff snapshot kept as context (they don't update live), so viewers
// don't read them as live numbers.
function sectionStatus(match, t) {
  if (match && match.state === 'in') return html`<span class="sec-status">${t('team.status_prematch')}</span>`;
  return '';
}

export function renderPrediction(match, { t, lang, showDetails = true }) {
  const p = match.prediction;
  if (!p || match.state === 'post') return '';
  const m = predictionModel(p);
  const rawAdvice = (p.advice && p.advice !== 'N/A') ? p.advice : '';
  const advice = translateAdvice(rawAdvice, lang);
  // The comparison bars and goal lines are the tall "details"; hide them when
  // show_prediction_details is off (the win-probability bar and advice stay).
  const cmp = showDetails ? comparisonModel(p) : [];
  const xg = showDetails ? expectedGoals(p) : null;
  if (!m.hasBar && !advice && !cmp.length && !xg) return '';
  const homeAbbr = match.home_abbrev || match.home_team || '';
  const awayAbbr = match.away_abbrev || match.away_team || '';
  return html`
    <div class="pred">
      <div class="sec-head">
        <span class="pred-title info" title="${t('team.prediction_note')}" aria-label="${t('team.prediction_note')}">${t('team.prediction')}</span>
        ${sectionStatus(match, t)}
      </div>
      ${m.hasBar ? html`
        <div class="pred-bar">
          <div class="pred-seg home" style="width:${m.wHome}%" title="${homeAbbr} ${_pct(m.home)}"></div>
          <div class="pred-seg draw" style="width:${m.wDraw}%" title="${t('match.draw')} ${_pct(m.draw)}"></div>
          <div class="pred-seg away" style="width:${m.wAway}%" title="${awayAbbr} ${_pct(m.away)}"></div>
        </div>
        <div class="pred-legend">
          <span class="pred-l home">${homeAbbr} ${_pct(m.home)}</span>
          <span class="pred-l draw">${t('match.draw')} ${_pct(m.draw)}</span>
          <span class="pred-l away">${_pct(m.away)} ${awayAbbr}</span>
        </div>
      ` : ''}
      ${cmp.length ? html`
        <div class="pred-cmp">
          ${cmp.map(r => html`
            <div class="pred-cmp-head">
              <span class="pred-cmp-v home">${_pct(r.home)}</span>
              <span class="pred-cmp-label">${t('team.cmp_' + r.key)}</span>
              <span class="pred-cmp-v away">${_pct(r.away)}</span>
            </div>
            <div class="pred-cmp-bar">
              <div class="pred-cmp-seg home" style="width:${r.wHome}%"></div>
              <div class="pred-cmp-seg away" style="width:${r.wAway}%"></div>
            </div>
          `)}
        </div>
      ` : ''}
      ${xg ? html`
        <div class="pred-xg" title="${t('team.goal_lines_note')}" aria-label="${t('team.goal_lines_note')}">
          <span class="pred-xg-label info">${t('team.goal_lines')}</span>
          <span class="pred-xg-val">${homeAbbr} ${formatGoalLine(xg.home, lang) || '—'} · ${awayAbbr} ${formatGoalLine(xg.away, lang) || '—'}${xg.line ? ` · ${t('team.goal_lines_total')} ${formatGoalLine(xg.line, lang)}` : ''}</span>
        </div>
      ` : ''}
      ${advice ? html`<div class="pred-advice">${advice}</div>` : ''}
    </div>
  `;
}

export function renderOdds(match, { t }) {
  if (match.state === 'post') return '';
  const o = match.odds;
  if (!o) return '';
  const m = oddsModel(o);
  if (!m.present) return '';
  const homeAbbr = match.home_abbrev || match.home_team || '';
  const awayAbbr = match.away_abbrev || match.away_team || '';
  const avgKey = m.singular ? 'team.odds_avg_one' : 'team.odds_avg';
  // 1 / X / 2 is the international betting notation (home / draw / away).
  const col = (cls, sign, label, v) => {
    const isFav = m.showFav && v !== null && v === m.min;
    const favLabel = isFav ? t('team.favourite') : '';
    return html`
      <div class="odds-col ${cls}${isFav ? ' fav' : ''}" title="${favLabel}" aria-label="${favLabel}">
        <div class="odds-sign">${sign}</div>
        <div class="odds-team">${label}</div>
        <div class="odds-val">${v !== null ? v.toFixed(2) : '–'}</div>
      </div>`;
  };
  return html`
    <div class="odds">
      <div class="odds-head">
        <span class="odds-title info" title="${m.live ? t('team.odds_live_note') : t('team.odds_note')}" aria-label="${m.live ? t('team.odds_live_note') : t('team.odds_note')}">${m.live ? t('team.odds_live') : t('team.odds')}</span>
        ${m.live ? html`<span class="odds-sub live">${t('team.odds_live_badge')}</span>` : (m.count ? html`<span class="odds-sub">${t(avgKey, { n: m.count })}</span>` : '')}
        ${!m.live ? sectionStatus(match, t) : ''}
      </div>
      <div class="odds-row">
        ${col('home', '1', homeAbbr, m.home)}
        ${col('draw', 'X', t('match.draw'), m.draw)}
        ${col('away', '2', awayAbbr, m.away)}
      </div>
    </div>
  `;
}

export function renderInjuries(match, { t }) {
  if (match.state === 'post') return '';
  const home = match.injuries_home || [];
  const away = match.injuries_away || [];
  if (!home.length && !away.length) return '';
  const row = p => {
    const label = p.suspended ? t('team.suspended') : t('team.injured');
    return html`
      <div class="inj-row">
        <span class="inj-ic" role="img" aria-label="${label}" title="${label}">${p.suspended ? '🚫' : '🩹'}</span>
        <span class="inj-name">${p.player}</span>
        ${p.reason ? html`<span class="inj-reason">${p.reason}</span>` : ''}
      </div>`;
  };
  const col = (team, list) => {
    const { shown, extra } = capList(list, MAX_INJURIES);
    return html`
      <div class="inj-col">
        <div class="inj-team">${team}</div>
        ${shown.length ? shown.map(row) : html`<div class="inj-none">–</div>`}
        ${extra > 0 ? html`<div class="inj-more">${t('team.and_more', { n: extra })}</div>` : ''}
      </div>`;
  };
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
    letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8);
  }
  .sec-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
  .sec-status {
    font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
    color: var(--cl-text-2, #94a3b8); background: var(--cl-chip-bg, rgba(255,255,255,0.08));
    border: 1px solid var(--cl-chip-border, rgba(255,255,255,0.12)); border-radius: 5px; padding: 2px 6px; white-space: nowrap;
  }
  /* Subtle affordance that the section title carries an explanatory tooltip. */
  .info {
    cursor: help;
    text-decoration: underline dotted;
    text-underline-offset: 2px;
    text-decoration-color: var(--cl-divider, rgba(148,163,184,0.5));
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
  .pred-cmp { margin-top: 10px; display: flex; flex-direction: column; gap: 6px; }
  .pred-cmp-head {
    display: flex; justify-content: space-between; align-items: baseline;
    font-size: 10px; font-weight: 700; color: var(--cl-text-2, #94a3b8);
  }
  .pred-cmp-label { text-transform: uppercase; letter-spacing: 0.05em; font-size: 9px; }
  .pred-cmp-v.home { color: var(--cl-accent, #6366f1); }
  .pred-cmp-v.away { color: var(--cl-live, #ef4444); }
  .pred-cmp-bar {
    display: flex; height: 5px; border-radius: 3px; overflow: hidden;
    background: var(--cl-divider, rgba(255,255,255,0.08)); margin-top: 2px;
  }
  .pred-cmp-seg { height: 100%; }
  .pred-cmp-seg.home { background: var(--cl-accent, #6366f1); }
  .pred-cmp-seg.away { background: var(--cl-live, #ef4444); }
  .pred-xg {
    margin-top: 8px; display: flex; justify-content: space-between; align-items: baseline;
    gap: 8px; font-size: 10px; color: var(--cl-text-2, #94a3b8);
  }
  .pred-xg-label { font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; font-size: 9px; }
  .pred-xg-val { font-weight: 700; color: var(--cl-text, #e2e8f0); }
  .pred-advice {
    margin-top: 8px; font-size: 11px; color: var(--cl-text, #e2e8f0);
    font-style: italic; text-align: center;
  }
  .odds {
    margin: 8px 12px 4px; padding: 10px 12px;
    background: var(--cl-card-2, rgba(255,255,255,0.03)); border-radius: 10px;
  }
  .odds-head { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
  .odds-title {
    font-size: 10px; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8);
  }
  .odds-sub {
    font-size: 9px; font-weight: 600; color: var(--cl-text-2, #94a3b8); opacity: 0.75;
  }
  .odds-sub.live {
    color: var(--cl-live, #ef4444); opacity: 1; font-weight: 800;
    text-transform: uppercase; letter-spacing: 0.06em;
    display: inline-flex; align-items: center; gap: 4px;
  }
  .odds-sub.live::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--cl-live, #ef4444); animation: odds-live-pulse 1.4s ease-in-out infinite;
  }
  @keyframes odds-live-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
  .odds-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
  .odds-col {
    display: flex; flex-direction: column; align-items: center; gap: 2px;
    padding: 7px 4px; border-radius: 8px;
    background: var(--cl-card, rgba(255,255,255,0.02));
  }
  .odds-sign {
    font-size: 12px; font-weight: 900; line-height: 1; color: var(--cl-text-2, #94a3b8);
  }
  .odds-col.home .odds-sign { color: var(--cl-accent, #6366f1); }
  .odds-col.away .odds-sign { color: var(--cl-live, #ef4444); }
  .odds-team {
    font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em;
    color: var(--cl-text-2, #94a3b8);
    max-width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .odds-val {
    font-size: 16px; font-weight: 800; color: var(--cl-text, #e2e8f0);
    font-variant-numeric: tabular-nums; margin-top: 1px;
  }
  /* Subtle marker for the lowest (favourite) odd — not a recommendation. */
  .odds-col.fav { background: var(--cl-accent-soft, rgba(99,102,241,0.10)); }
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
  .inj-more { color: var(--cl-text-2, #94a3b8); font-size: 10px; font-weight: 700; padding-top: 2px; opacity: 0.85; }
`;
