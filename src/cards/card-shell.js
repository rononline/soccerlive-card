import { css, html } from "lit-element";

export const soccerCardShellStyles = css`
  ha-card {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.24));
    background: var(--cl-bg);
    color: var(--cl-text);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.18), transparent 55%),
      radial-gradient(ellipse at 100% 100%, rgba(var(--cl-accent-2-rgb),0.14), transparent 55%);
    pointer-events: none;
    z-index: 0;
  }
  /* Optional crest watermark (custom palette background_image), centred and faint
     behind the content. Rendered on the .hero-bg layer (z-index:0), so the
     content — which every card places above it — stays on top. Absent by
     default (background-image: none). */
  .hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--cl-bg-image, none);
    background-repeat: no-repeat;
    background-position: center;
    background-size: var(--cl-bg-image-size, 80%) auto;
    opacity: var(--cl-bg-image-opacity, 0.07);
    pointer-events: none;
  }

  .bg-logos {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .bg-logo {
    width: 60%;
    height: 140%;
    display: flex;
    align-items: center;
    opacity: 0.08;
  }

  .bg-logo.home {
    justify-content: flex-start;
    transform: translateX(-30%);
  }

  .bg-logo.away {
    justify-content: flex-end;
    transform: translateX(30%);
  }

  .bg-logo img {
    width: 100%;
    object-fit: contain;
  }

  .card-content {
    position: relative;
    z-index: 1;
  }

  .top-bar {
    position: relative;
    z-index: 1;
  }
`;

export function renderCardHero(homeLogo, awayLogo) {
  return html`
    <div class="bg-logos">
      ${homeLogo ? html`<div class="bg-logo home"><img src="${homeLogo}" alt="" loading="lazy"></div>` : ''}
      ${awayLogo ? html`<div class="bg-logo away"><img src="${awayLogo}" alt="" loading="lazy"></div>` : ''}
    </div>
    <div class="hero-bg"></div>
  `;
}
