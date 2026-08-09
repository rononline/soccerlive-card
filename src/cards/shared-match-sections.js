import { html } from 'lit';
import { EVENT_I18N, SKIP, isGoalEvent } from './shared-event-i18n.js';
import { renderPitch } from './shared-pitch.js';

export function renderPopupSectionStyles(prefix, lineupGap = 10) {
  return html`<style>
    .${prefix}-section-lineup{background:rgba(16,185,129,.08);border-color:#10b981}
    .${prefix}-section-timeline{background:rgba(251,191,36,.08);border-color:#fbbf24}
    .${prefix}-section-title.lineup{color:#10b981}
    .${prefix}-section-title.timeline{color:#fbbf24}
    .${prefix}-lineup-team{margin-bottom:${lineupGap}px}
    .${prefix}-lineup-team:last-child{margin-bottom:0}
    .${prefix}-lineup-header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px}
    .${prefix}-lineup-header span:first-child{font-size:12px;font-weight:800;color:#fff}
    .${prefix}-formation{font-size:10px;font-weight:700;color:var(--cl-accent,#6366f1);letter-spacing:.1em}
    .${prefix}-lineup-players{font-size:12px;color:#cbd5e1;line-height:1.7}
    .${prefix}-player{display:inline-block;padding:2px 8px;background:rgba(255,255,255,.05);border-radius:6px;margin:2px}
    .${prefix}-jersey{color:#fbbf24;font-weight:800}
    .${prefix}-timeline-list{margin:0;padding:0;list-style:none}
    .${prefix}-timeline-item{display:flex;gap:8px;align-items:flex-start;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:12px;color:#cbd5e1}
    .${prefix}-timeline-item:last-child{border-bottom:0}
    .${prefix}-tl-clock{min-width:32px;text-align:right;font-size:11px;font-weight:700;color:#94a3b8;font-variant-numeric:tabular-nums;padding-top:2px;flex-shrink:0}
    .${prefix}-tl-badge{display:inline-block;font-size:8px;font-weight:800;padding:1px 5px;border-radius:3px;text-transform:uppercase;letter-spacing:.04em;flex-shrink:0;line-height:15px;white-space:nowrap;margin-top:1px}
    .${prefix}-tl-badge.goal{background:rgba(99,102,241,.18);color:#6366f1}
    .${prefix}-tl-badge.yellow{background:rgba(245,158,11,.18);color:#f59e0b}
    .${prefix}-tl-badge.red{background:rgba(239,68,68,.18);color:#ef4444}
    .${prefix}-tl-badge.sub{background:rgba(148,163,184,.12);color:#94a3b8}
    .${prefix}-tl-badge.meta{background:transparent;color:#94a3b8;font-size:14px;padding:0 4px;letter-spacing:0}
    .${prefix}-tl-text strong{color:#fff}
    .${prefix}-tl-team{color:#94a3b8;font-size:11px}
  </style>`;
}

export function timelineEventKind(event) {
  const type = String(event?.type || '').toLowerCase();
  const text = String(event?.type_text || '').toLowerCase();
  if (isGoalEvent(event)) return 'goal';
  if (text.includes('yellow')) return 'yellow';
  if (text.includes('red card')) return 'red';
  if (type === 'substitution' || text.includes('substitut')) return 'sub';
  return 'meta';
}

export function visibleTimelineEvents(match) {
  return (match?.key_events || []).filter(event => {
    const text = String(event?.type_text || '').toLowerCase();
    return !SKIP.some(skip => text.includes(skip));
  });
}

export function timelineEventText(event, translate) {
  const athletes = (event?.athletes || []).filter(Boolean);
  const kind = timelineEventKind(event);

  // Substitution: show direction rather than two ambiguous names. Providers set
  // player=out and assist=in (athletes=[out, in]); fall back to the pair.
  if (kind === 'sub') {
    const playerIn = event?.assist || athletes[1] || '';
    const playerOut = event?.player || athletes[0] || '';
    if (playerIn && playerOut) return `▲ ${playerIn} ▼ ${playerOut}`;
  }

  let text = athletes.length
    ? athletes.join(', ')
    : (EVENT_I18N[String(event?.type_text || '').toLowerCase()]
        ? translate(EVENT_I18N[String(event?.type_text || '').toLowerCase()])
        : (event?.type_text || event?.short_text || ''));

  // Goal: append a marker for own goals and penalties so they're distinguishable.
  if (kind === 'goal') {
    const type_text = String(event?.type_text || '').toLowerCase();
    if (type_text.includes('own goal') || type_text.includes('own-goal')) {
      text += ` (${translate('event.own_goal')})`;
    } else if (type_text.includes('penalty')) {
      text += ` (${translate('event.penalty')})`;
    }
  }
  return text;
}

function eventBadge(kind, translate, prefix) {
  const labels = {
    goal: 'event.goal',
    yellow: 'event.yellow_card',
    red: 'event.red_card',
    sub: 'event.substitution',
  };
  return labels[kind]
    ? html`<span class="${prefix}-tl-badge ${kind}">${translate(labels[kind])}</span>`
    : html`<span class="${prefix}-tl-badge meta">·</span>`;
}

export function renderPopupTimeline(match, { translate, prefix = 'mp' }) {
  const events = visibleTimelineEvents(match);
  if (!events.length) return '';
  return html`
    <div class="${prefix}-section ${prefix}-section-timeline">
      <h5 class="${prefix}-section-title timeline">${translate('popup.timeline')}</h5>
      <ul class="${prefix}-timeline-list">
        ${events.map(event => {
          const kind = timelineEventKind(event);
          return html`
            <li class="${prefix}-timeline-item">
              <span class="${prefix}-tl-clock">${event.clock || event.minute || ''}</span>
              ${eventBadge(kind, translate, prefix)}
              <span class="${prefix}-tl-text">
                <strong>${timelineEventText(event, translate)}</strong>
                ${event.team ? html`<br><span class="${prefix}-tl-team">${event.team}</span>` : ''}
              </span>
            </li>`;
        })}
      </ul>
    </div>`;
}

// The expected/predicted lineup is only meaningful before kickoff; once a match
// is live or finished the actual lineup supersedes it, yet some providers keep
// the predicted fields populated. Unknown/empty state counts as pre-match so a
// genuine pre-match preview is never hidden.
export function isPrematchState(state) {
  return !state || state === 'pre';
}

export function splitLineup(players, startersOnly = false) {
  const list = Array.isArray(players) ? players : [];
  const hasFlags = list.some(player => player.starter === true || player.starter === false);
  const starters = hasFlags ? list.filter(player => player.starter === true) : list;
  return {
    starters,
    substitutes: startersOnly || !hasFlags ? [] : list.filter(player => player.starter === false),
  };
}

export function renderPopupLineup(match, {
  translate,
  prefix = 'mp',
  startersOnly = false,
}) {
  const home = match?.lineup_home || [];
  const away = match?.lineup_away || [];
  if (!home.length && !away.length) return '';
  const pitch = renderPitch(match, { t: translate });
  if (pitch) return html`
    <div class="${prefix}-section ${prefix}-section-lineup">
      <h5 class="${prefix}-section-title lineup">${translate('popup.lineups')}</h5>
      ${pitch}
    </div>`;

  const team = (players, formation, label) => {
    const { starters, substitutes } = splitLineup(players, startersOnly);
    if (!starters.length) return '';
    const player = item => html`<span class="${prefix}-player">${item.jersey
      ? html`<strong class="${prefix}-jersey">${item.jersey}</strong> `
      : ''}${item.short_name || item.name || ''}</span>`;
    return html`
      <div class="${prefix}-lineup-team">
        <div class="${prefix}-lineup-header">
          <span>${label || ''}</span>
          ${formation ? html`<span class="${prefix}-formation">${formation}</span>` : ''}
        </div>
        <div class="${prefix}-lineup-players">${starters.map(player)}</div>
        ${substitutes.length ? html`
          <div class="${prefix}-lineup-header"><span>${translate('popup.substitutes')}</span></div>
          <div class="${prefix}-lineup-players">${substitutes.map(player)}</div>
        ` : ''}
      </div>`;
  };

  return html`
    <div class="${prefix}-section ${prefix}-section-lineup">
      <h5 class="${prefix}-section-title lineup">${translate('popup.lineups')}</h5>
      ${team(home, match.formation_home, match.home_team)}
      ${team(away, match.formation_away, match.away_team)}
    </div>`;
}
