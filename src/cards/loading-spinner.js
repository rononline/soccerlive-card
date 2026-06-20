import { html, css } from 'lit-element';

export const spinnerStyles = css`
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    min-height: 100px;
  }

  .spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid var(--cl-chip-border, rgba(255, 255, 255, 0.3));
    border-radius: 50%;
    border-top-color: var(--cl-accent, var(--primary-color, #2196F3));
    animation: spinner-rotate 1s linear infinite;
  }

  @keyframes spinner-rotate {
    to { transform: rotate(360deg); }
  }

  .spinner-text {
    margin-left: 12px;
    font-size: 12px;
    color: var(--cl-text-2, var(--secondary-text-color));
  }
`;

export const renderLoading = (message = 'Loading...') => html`
  <div class="spinner-container">
    <div class="spinner"></div>
    <span class="spinner-text">${message}</span>
  </div>
`;

export const renderSkeletonCard = () => html`
  <ha-card style="padding: 16px;">
    <div style="background: rgba(0,0,0,0.1); height: 16px; margin: 8px 0; border-radius: 4px; animation: pulse 1.5s ease-in-out infinite;"></div>
    <div style="background: rgba(0,0,0,0.1); height: 12px; margin: 8px 0; width: 80%; border-radius: 4px; animation: pulse 1.5s ease-in-out infinite; animation-delay: 0.1s;"></div>
    <div style="background: rgba(0,0,0,0.1); height: 12px; margin: 8px 0; width: 60%; border-radius: 4px; animation: pulse 1.5s ease-in-out infinite; animation-delay: 0.2s;"></div>
  </ha-card>
`;

export const skeletonAnimation = css`
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;
