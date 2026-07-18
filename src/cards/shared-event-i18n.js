export const SKIP = ['delay', 'drink break', 'cooling break', 'video review'];

// Whether a key_event is an actual goal that changed the score. Excludes missed
// penalties and VAR-disallowed goals — providers still tag those with type
// "Goal" (API-Football) or "penalty" in the text (ESPN "Penalty - Missed"), so
// a naive check would give them a goal badge.
export function isGoalEvent(ev) {
  const ty = (ev.type || '').toLowerCase();
  const txt = (ev.type_text || '').toLowerCase();
  if (txt.includes('missed') || txt.includes('disallow')) return false;
  return !!ev.scoring_play || ty === 'goal' || txt.includes('penalty - scored');
}

/**
 * Classify a key_event for the timeline, tolerant of odd/unknown data.
 * Returns null when the event should be skipped (a SKIP type, or nothing
 * meaningful to show — so no blank rows), otherwise:
 *   { btype, i18nKey, athletes, fallbackText, known }
 * `known` is false for unrecognised types (shown neutrally with a meta badge).
 * The caller resolves the final label (needs translations).
 */
export function classifyEvent(ev) {
  if (!ev) return null;
  const ty = (ev.type || '').toLowerCase();
  const txt = (ev.type_text || '').toLowerCase();
  if (SKIP.some(s => txt.includes(s))) return null;

  let btype = 'meta';
  if (isGoalEvent(ev)) btype = 'goal';
  else if (txt.includes('yellow')) btype = 'yellow';
  else if (txt.includes('red card')) btype = 'red';
  else if (ty === 'substitution' || txt.includes('substitut')) btype = 'sub';

  const athletes = (ev.athletes || []).filter(Boolean);
  const i18nKey = EVENT_I18N[txt] || null;
  const fallbackText = ev.type_text || ev.short_text || '';
  const known = btype !== 'meta' || !!i18nKey;

  // Nothing meaningful to render -> skip rather than show an empty row.
  if (!athletes.length && !i18nKey && !fallbackText.trim()) return null;
  return { btype, i18nKey, athletes, fallbackText, known };
}

export const EVENT_I18N = {
  'kickoff': 'status.kickoff',
  'halftime': 'status.halftime',
  'half time': 'status.halftime',
  'end of half': 'status.halftime',
  'start 2nd half': 'status.second_half',
  'second half': 'status.second_half',
  '2nd half': 'status.second_half',
  'first half': 'status.first_half',
  'full time': 'status.full_time',
  'final': 'status.full_time',
  'end regular time': 'status.full_time',
  'end': 'status.end',
  'extra time': 'status.extra_time',
  'start extra time': 'status.extra_time_start',
  'halftime extra time': 'status.extra_time_halftime',
  'half time extra time': 'status.extra_time_halftime',
  'start 2nd half extra time': 'status.extra_time_second_half',
  '2nd half extra time': 'status.extra_time_second_half',
  'end extra time': 'status.extra_time_end',
  'shootout': 'status.shootout',
  'penalty shootout': 'status.shootout',
  'start shootout': 'status.shootout_start',
  'end match': 'status.end_match',
};
