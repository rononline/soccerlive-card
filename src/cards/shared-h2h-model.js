import { matchSideIsTeam } from './shared-minimal-model.js';

/** Classify an H2H result from the tracked team's perspective. */
export function h2hResult(match, tracked = {}) {
  const homeScore = Number.parseInt(match?.home_score ?? match?.home_goals, 10);
  const awayScore = Number.parseInt(match?.away_score ?? match?.away_goals, 10);
  const hasScore = Number.isFinite(homeScore) && Number.isFinite(awayScore);
  const homeWon = hasScore && homeScore > awayScore;
  const awayWon = hasScore && awayScore > homeScore;
  const isHome = matchSideIsTeam(match, 'home', tracked);
  const isAway = matchSideIsTeam(match, 'away', tracked);

  let scoreClass = 'neutral';
  if (hasScore && homeScore === awayScore) scoreClass = 'draw';
  else if (isHome) scoreClass = homeWon ? 'our-win' : awayWon ? 'our-loss' : 'neutral';
  else if (isAway) scoreClass = awayWon ? 'our-win' : homeWon ? 'our-loss' : 'neutral';

  return { homeScore, awayScore, homeWon, awayWon, scoreClass };
}
