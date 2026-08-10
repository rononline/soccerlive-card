import { SoccerLiveMatchCenterCard } from "../MatchCenter/soccer-live-match-center.js";

/**
 * Soccer Live Lineup Card
 *
 * The Lineup card is Match Center pinned to its lineup tab (Match Center already
 * renders the pitch/lineup). It stays a distinct element for backward
 * compatibility — both `card_type: lineup` and the legacy
 * `type: custom:soccer-live-lineup` keep working — while reusing all of Match
 * Center's rendering.
 */
class SoccerLiveLineupCard extends SoccerLiveMatchCenterCard {
  setConfig(config) {
    super.setConfig({ ...config, card_type: "lineup" });
  }

  static getConfigElement() { return document.createElement("soccer-live-lineup-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_", card_type: "lineup" }; }
}

if (!customElements.get("soccer-live-lineup")) {
  customElements.define("soccer-live-lineup", SoccerLiveLineupCard);
}
