import { html, css } from 'lit-element';

/**
 * Shared match meta component: venue row + broadcast/attendance/link chips.
 *
 * Usage:
 *   renderMatchMeta(match, { lang, t, weatherBadge, showDate })
 *
 * @param {object} match        - Match data object from sensor attributes
 * @param {object} opts
 *   @param {string}  opts.lang         - BCP-47 locale string (for toLocaleString)
 *   @param {Function} opts.t           - Translation function (key) => string
 *   @param {any}     opts.weatherBadge - Pre-rendered weather badge template, or null
 *   @param {boolean} opts.showDate     - Show date/time in the venue row (default false)
 */
export const renderMatchMeta = (match, { lang = 'en', t = k => k, weatherBadge = null, showDate = false, hideBroadcasts = false } = {}) => {
  if (!match) return html``;

  const venue       = match.venue      && match.venue      !== 'N/A' ? match.venue      : '';
  const venueCity   = match.venue_city && match.venue_city !== 'N/A' ? match.venue_city : '';
  const venueLabel  = venue ? (venueCity ? `${venue}, ${venueCity}` : venue) : '';
  const neutralSite = match.neutral_site || false;

  const rawBroadcasts = hideBroadcasts ? [] : (
    Array.isArray(match.broadcasts) && match.broadcasts.length
      ? match.broadcasts
      : (match.broadcast && match.broadcast !== 'N/A' ? [match.broadcast] : [])
  );

  const attendance  = parseInt(match.attendance, 10);
  const hasAttendance = !isNaN(attendance) && attendance > 0;

  const links = match.links || {};
  const hasStats       = match.has_stats       && (links.stats       || links.summary);
  const hasCommentary  = match.has_commentary  && (links.commentary  || links.summary);
  const hasVideo       = !!links.video;

  // neutralSite is shown in the venue row, not as a chip — keep it out of hasChips
  const hasChips = rawBroadcasts.length || hasAttendance || hasStats || hasCommentary || hasVideo;

  const openLink = (url) => url && window.open(url, '_blank', 'noopener,noreferrer');

  return html`
    ${venueLabel || weatherBadge || showDate ? html`
      <div class="smm-venue-row">
        ${venueLabel ? html`
          <div class="smm-venue">
            <svg class="smm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span title="${neutralSite ? (t('ui.neutral_site') || 'Neutral venue') : ''}">${venueLabel}${neutralSite ? ' ⚖️' : ''}</span>
          </div>
        ` : ''}
        ${weatherBadge ? weatherBadge : ''}
        ${showDate && match.date ? html`
          <div class="smm-date">
            <svg class="smm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>${match.date}</span>
          </div>
        ` : ''}
      </div>
    ` : ''}

    ${hasChips ? html`
      <div class="smm-chips">
        ${rawBroadcasts.length ? html`
          <span class="smm-chip broadcast">
            <svg class="smm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="13" rx="2"/>
              <polyline points="17 2 12 7 7 2"/>
            </svg>
            ${rawBroadcasts.join(' · ')}
          </span>
        ` : ''}
        ${hasAttendance ? html`
          <span class="smm-chip attendance">
            <svg class="smm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
            ${attendance.toLocaleString(lang)} ${t('team.spectators') || ''}
          </span>
        ` : ''}
        ${hasStats ? html`
          <span class="smm-chip link" title="${t('ui.open_stats') || ''}" @click=${() => openLink(links.stats || links.summary)}>
            📊 ${t('card.stats') || 'Stats'}
          </span>
        ` : ''}
        ${hasCommentary ? html`
          <span class="smm-chip link" title="${t('ui.open_commentary') || ''}" @click=${() => openLink(links.commentary || links.summary)}>
            💬 ${t('card.commentary') || 'Commentary'}
          </span>
        ` : ''}
        ${hasVideo ? html`
          <span class="smm-chip link" title="${t('ui.open_video') || ''}" @click=${() => openLink(links.video)}>
            🎬 ${t('card.video') || 'Video'}
          </span>
        ` : ''}
      </div>
    ` : ''}
  `;
};

export const matchMetaStyles = css`
  .smm-venue-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 18px;
    font-size: 11px;
    color: var(--cl-text-2, #94a3b8);
    border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06));
  }
  .smm-venue, .smm-date {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
  }
  .smm-venue span, .smm-date span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .smm-icon {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    opacity: 0.7;
  }
  .smm-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 10px 18px;
    border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06));
  }
  .smm-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 700;
    background: var(--cl-surface, rgba(255,255,255,0.06));
    color: var(--cl-text-2, #94a3b8);
    white-space: nowrap;
  }
  .smm-chip.link {
    cursor: pointer;
    color: var(--cl-accent, #6366f1);
    background: rgba(var(--cl-accent-rgb, 99 102 241), 0.1);
  }
  .smm-chip.link:hover {
    background: rgba(var(--cl-accent-rgb, 99 102 241), 0.2);
  }
`;
