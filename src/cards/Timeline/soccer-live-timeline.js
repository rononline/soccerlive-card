import { SoccerLiveMatchCenterCard } from "../MatchCenter/soccer-live-match-center.js";

/**
 * Soccer Live Timeline Card
 *
 * The Timeline card is Match Center pinned to its timeline tab (Match Center
 * already renders the shared, provider-neutral timeline). It stays a distinct
 * element for backward compatibility — both `card_type: timeline` and the legacy
 * `type: custom:soccer-live-timeline` keep working — while reusing all of Match
 * Center's rendering (and its provider-neutral event handling).
 */
class SoccerLiveTimelineCard extends SoccerLiveMatchCenterCard {
  setConfig(config) {
    super.setConfig({ ...config, card_type: "timeline" });
  }

  static getConfigElement() { return document.createElement("soccer-live-timeline-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_", card_type: "timeline" }; }
}

if (!customElements.get("soccer-live-timeline")) {
  customElements.define("soccer-live-timeline", SoccerLiveTimelineCard);
}
