import { html, css } from 'lit-element';

/**
 * Shared header component matching the Team card design contract.
 *
 * @param {string|null} logo     - URL of logo shown in the comp-icon wrapper
 * @param {string}      title    - Main title text (competition name, team name, …)
 * @param {TemplateResult|null} badge - Optional right-side badge (use renderSoccerBadge)
 * @param {string}      fallbackIcon - Emoji shown when logo is absent (default '⚽')
 */
export const renderSoccerHeader = ({ logo, title, badge = null, fallbackIcon = '⚽' }) => html`
  <div class="top-bar">
    <div class="competition">
      <span class="comp-icon">
        ${logo ? html`<img src="${logo}" alt="" @error=${e => e.target.style.display = 'none'}>` : fallbackIcon}
      </span>
      <span class="comp-name">${title || ' '}</span>
    </div>
    ${badge || ''}
  </div>
`;

/**
 * Standard badge variants: 'live' | 'ft' | 'date' | 'neutral'
 */
export const renderSoccerBadge = (text, variant = 'date') => html`
  <span class="sh-badge ${variant}">${text}</span>
`;

export const soccerHeaderStyles = css`
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.08));
  }
  .competition {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
    color: var(--cl-text);
    letter-spacing: -0.01em;
    min-width: 0;
  }
  .comp-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #8b5cf6));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    box-shadow: 0 2px 8px rgba(var(--cl-accent-rgb, 99 102 241), 0.4);
    overflow: hidden;
  }
  .comp-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .comp-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* Badge variants */
  .sh-badge {
    flex-shrink: 0;
    padding: 5px 11px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.06em;
  }
  .sh-badge.live    { background: #e53935; color: #fff; }
  .sh-badge.ft      { background: var(--cl-card-2, rgba(0,0,0,0.35)); border: 1px solid var(--cl-glass-border, rgba(255,255,255,0.1)); color: var(--cl-text, #fff); }
  .sh-badge.date    { background: var(--cl-card-2, rgba(0,0,0,0.35)); border: 1px solid var(--cl-glass-border, rgba(255,255,255,0.1)); color: var(--cl-text, #fff); }
  .sh-badge.neutral { background: var(--cl-surface, rgba(255,255,255,0.08)); color: var(--cl-text-2, #94a3b8); }
`;
