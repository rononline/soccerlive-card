// Translate API-Football prediction advice, which is English but built from a
// fixed vocabulary (e.g. "Combo Winner : Feyenoord and +2.5 goals"). Only the
// known phrases are replaced; team names and the goal figures pass through.
// Longer phrases are listed first so "Combo Winner" is handled before "Winner".
const ADVICE_TOKENS = {
  nl: {
    'Combo Double chance': 'Combi dubbele kans',
    'Combo Winner': 'Combi winnaar',
    'Double chance': 'Dubbele kans',
    'Winner': 'Winnaar',
    ' or draw': ' of gelijkspel',
    ' and ': ' en ',
    ' goals': ' doelpunten',
    'No predictions available': 'Geen voorspelling beschikbaar',
  },
  de: {
    'Combo Double chance': 'Kombi Doppelte Chance',
    'Combo Winner': 'Kombi Sieger',
    'Double chance': 'Doppelte Chance',
    'Winner': 'Sieger',
    ' or draw': ' oder Unentschieden',
    ' and ': ' und ',
    ' goals': ' Tore',
    'No predictions available': 'Keine Prognose verfügbar',
  },
  es: {
    'Combo Double chance': 'Combo doble oportunidad',
    'Combo Winner': 'Combo ganador',
    'Double chance': 'Doble oportunidad',
    'Winner': 'Ganador',
    ' or draw': ' o empate',
    ' and ': ' y ',
    ' goals': ' goles',
    'No predictions available': 'Sin pronóstico disponible',
  },
  fr: {
    'Combo Double chance': 'Combo double chance',
    'Combo Winner': 'Combo vainqueur',
    'Double chance': 'Double chance',
    'Winner': 'Vainqueur',
    ' or draw': ' ou match nul',
    ' and ': ' et ',
    ' goals': ' buts',
    'No predictions available': 'Aucun pronostic disponible',
  },
  it: {
    'Combo Double chance': 'Combo doppia chance',
    'Combo Winner': 'Combo vincente',
    'Double chance': 'Doppia chance',
    'Winner': 'Vincente',
    ' or draw': ' o pareggio',
    ' and ': ' e ',
    ' goals': ' gol',
    'No predictions available': 'Nessun pronostico disponibile',
  },
  pt: {
    'Combo Double chance': 'Combo dupla hipótese',
    'Combo Winner': 'Combo vencedor',
    'Double chance': 'Dupla hipótese',
    'Winner': 'Vencedor',
    ' or draw': ' ou empate',
    ' and ': ' e ',
    ' goals': ' gols',
    'No predictions available': 'Sem previsão disponível',
  },
};

export function translateAdvice(advice, lang = 'en') {
  const raw = String(advice || '').trim();
  if (!raw) return raw;
  const map = ADVICE_TOKENS[(lang || 'en').split('-')[0].toLowerCase()];
  if (!map) return raw; // English (or unknown language) → leave as-is
  let out = raw;
  for (const [en, translated] of Object.entries(map)) {
    if (out.includes(en)) out = out.split(en).join(translated);
  }
  return out;
}
