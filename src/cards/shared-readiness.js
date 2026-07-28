import { css, html } from 'lit';

const present = value => {
  if (value === null || value === undefined) return false;
  if (
    typeof value === 'string'
    && ['', 'n/a', 'unknown', 'none', 'null', '-'].includes(value.trim().toLowerCase())
  ) return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
};

export function readinessModel(match) {
  if (match?.match_readiness?.score != null) return match.match_readiness;
  const checks = {
    kickoff: present(match?.date_iso || match?.date),
    competition: present(match?.competition_name || match?.league_name),
    venue: present(match?.venue),
    broadcasts: Boolean(match?.broadcasts?.length),
    weather: present(match?.weather) || present(match?.temperature) || present(match?.venue_lat),
    head_to_head: Boolean(match?.head_to_head?.length),
    prediction: present(match?.prediction),
    odds: present(match?.odds),
    absences: Boolean(match?.injuries_home?.length || match?.injuries_away?.length || match?.absences?.length),
    lineup: Boolean(
      match?.lineup_home?.length || match?.lineup_away?.length
      || match?.expected_lineup_home?.length || match?.expected_lineup_away?.length
    ),
  };
  const weights = {
    kickoff: 15, competition: 10, venue: 10, broadcasts: 5, weather: 5,
    head_to_head: 10, prediction: 10, odds: 10, absences: 10, lineup: 15,
  };
  const score = Object.entries(checks).reduce(
    (total, [key, available]) => total + (available ? weights[key] : 0),
    0,
  );
  return {
    score,
    level: score >= 80 ? 'ready' : score >= 55 ? 'good' : score >= 30 ? 'building' : 'early',
    available: Object.keys(checks).filter(key => checks[key]),
    missing: Object.keys(checks).filter(key => !checks[key]),
  };
}

export function renderReadiness(match, t, { compact = false } = {}) {
  if (!match || match.state !== 'pre') return '';
  const model = readinessModel(match);
  return html`
    <section class="readiness ${compact ? 'compact' : ''}">
      <div class="readiness-head">
        <span>${t('readiness.title')}</span>
        <b>${model.score}% · ${t(`readiness.${model.level}`)}</b>
      </div>
      <div class="readiness-track"><i style=${`width:${model.score}%`}></i></div>
      ${!compact && model.available.length ? html`
        <div class="readiness-chips">
          ${model.available.map(key => html`<span>${t(`readiness.item_${key}`)}</span>`)}
        </div>
      ` : ''}
    </section>
  `;
}

export const readinessStyles = css`
  .readiness{margin:10px 0;padding:10px;border:1px solid var(--cl-divider);border-radius:12px;background:var(--cl-surface)}
  .readiness-head{display:flex;justify-content:space-between;gap:8px;color:var(--cl-text-2);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.05em}
  .readiness-head b{color:var(--cl-accent);text-align:right}.readiness-track{height:5px;margin-top:8px;overflow:hidden;border-radius:99px;background:var(--cl-chip-bg)}
  .readiness-track i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--cl-accent),var(--cl-accent-2));transition:width .25s ease}
  .readiness-chips{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}.readiness-chips span{padding:3px 6px;border-radius:99px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:8px}
  .readiness.compact{margin:0;padding:7px 8px}.readiness.compact .readiness-track{margin-top:5px}
`;
