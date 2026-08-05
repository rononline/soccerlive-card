import { css, html } from 'lit';
import { momentumPoints } from './shared-match-popup-model.js';

export const analysisStyles = css`
  .sl-analysis-momentum { margin:14px 0; padding:14px; border-left:3px solid var(--cl-accent,#6366f1); border-radius:10px; background:rgba(99,102,241,.07); }
  .sl-analysis-title { margin:0 0 10px; color:var(--cl-text,#f8fafc); font-size:12px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
  .sl-analysis-chart { width:100%; height:90px; overflow:visible; }
  .sl-analysis-chart line { stroke:rgba(148,163,184,.3); stroke-width:1; }
  .sl-analysis-chart path { fill:none; stroke:var(--cl-accent,#6366f1); stroke-width:3; vector-effect:non-scaling-stroke; }
`;

export function renderMomentumAnalysis(match, { t } = {}) {
  const points = momentumPoints(match);
  if (!points.length) return '';
  const width = 300;
  const height = 90;
  const mid = height / 2;
  const maximum = Math.max(1, ...points.map(point => Math.abs(Number(point.value) || 0)));
  const path = points.map((point, index) => {
    const x = points.length === 1 ? width / 2 : index * width / (points.length - 1);
    const y = mid - ((Number(point.value) || 0) / maximum) * (mid - 8);
    return `${index ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return html`<section class="sl-analysis-momentum">
    <h5 class="sl-analysis-title">${t ? t('popup.momentum') : 'Match momentum'}</h5>
    <svg class="sl-analysis-chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label=${t ? t('popup.momentum') : 'Match momentum'}>
      <line x1="0" y1="${mid}" x2="${width}" y2="${mid}"></line>
      <path d="${path}"></path>
    </svg>
  </section>`;
}
