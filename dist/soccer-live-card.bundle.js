/*! For license information please see soccer-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={5186(e,t,a){a.d(t,{$c:()=>o,DK:()=>h,IU:()=>g,Vp:()=>p,iS:()=>u,n1:()=>d,t:()=>l});const i={"card.bracket":0,"card.lineup":1,"card.timeline":2,"card.news":3,"card.standings":4,"card.scorers":5,"card.club":6,"card.matchday":7,"card.match_center":8,"card.archive":9,"card.race":10,"matchday.empty":11,"matchday.empty_hint":12,"matchday.live":13,"matchday.upcoming":14,"matchday.finished":15,"matchday.matches":16,"archive.empty":17,"archive.empty_hint":18,"archive.personal":19,"archive.won":20,"archive.drawn":21,"archive.lost":22,"archive.season":23,"archive.all_seasons":24,"archive.competition":25,"archive.all_competitions":26,"archive.goals":27,"archive.clean_sheets":28,"archive.unbeaten":29,"archive.winning_streak":30,"archive.biggest_win":31,"archive.biggest_loss":32,"archive.common_opponents":33,"race.standings_impact":34,"race.leader":35,"race.maximum":36,"race.trajectory":37,"race.remaining":38,"match.historical_h2h":39,"archive.copy":40,"archive.rebuild":41,"archive.clear":42,"archive.copied":43,"archive.copy_failed":44,"archive.rebuilt":45,"archive.cleared":46,"archive.clear_confirm":47,"archive.import":48,"archive.imported":49,"archive.import_failed":50,"archive.location":51,"archive.all_locations":52,"archive.home":53,"archive.away":54,"archive.result":55,"archive.all_results":56,"archive.opponent":57,"archive.monthly_form":58,"readiness.title":59,"readiness.ready":60,"readiness.good":61,"readiness.building":62,"readiness.early":63,"readiness.item_kickoff":64,"readiness.item_competition":65,"readiness.item_venue":66,"readiness.item_broadcasts":67,"readiness.item_weather":68,"readiness.item_head_to_head":69,"readiness.item_prediction":70,"readiness.item_odds":71,"readiness.item_absences":72,"readiness.item_lineup":73,"quality.completeness":74,"quality.conflicts":75,"quality.coverage":76,"quality.excellent":77,"quality.good":78,"quality.partial":79,"quality.limited":80,"quality.issue_no_matches":81,"quality.issue_provider_error":82,"quality.issue_limited_coverage":83,"alert.provider_error":84,"alert.match_postponed":85,"alert.match_cancelled":86,"alert.source_conflict":87,"alert.live_lineup_missing":88,"alert.live_timeline_missing":89,"alert.live_data_stale":90,"alert.match_rescheduled":91,"club.empty":92,"club.empty_hint":93,"club.squad":94,"club.transfers":95,"club.cache_note":96,"club.show_all":97,"club.show_less":98,"club.filter_all":99,"club.filter_in":100,"club.filter_out":101,"club.goalkeepers":102,"club.defenders":103,"club.midfielders":104,"club.attackers":105,"club.founded":106,"club.age":107,"club.transfer_in":108,"club.transfer_out":109,"club.matchday":110,"club.matchday_pre":111,"club.matchday_live":112,"club.matchday_post":113,"club.season_progress":114,"club.matches_played":115,"club.goals_for":116,"club.goals_against":117,"club.goal_difference":118,"club.spent":119,"club.income":120,"club.balance":121,"club.loans":122,"club.free_transfers":123,"club.summer_window":124,"club.winter_window":125,"editor.show_squad":126,"editor.show_transfers":127,"editor.show_matchday":128,"editor.show_season_progress":129,"editor.show_squad_analysis":130,"editor.show_injury_center":131,"editor.show_availability":132,"editor.show_prediction":133,"editor.show_selection":134,"editor.show_team_news":135,"editor.show_data_quality":136,"editor.show_automations":137,"editor.show_club_records":138,"editor.collapse_club_sections":139,"editor.club_dashboard_mode":140,"editor.club_section_order":141,"editor.max_transfers":142,"card.assists":143,"card.stats":144,"card.commentary":145,"card.video":146,"competition.round":147,"ui.neutral_site":148,"ui.live_tv":149,"ui.open_stats":150,"ui.open_commentary":151,"ui.open_video":152,"round.final":153,"round.semifinals":154,"round.quarterfinals":155,"round.r16":156,"round.r32":157,"round.r64":158,"round.third_place":159,"round.knockout_playoffs":160,"round.preliminary":161,"round.short.semifinals":162,"round.short.quarterfinals":163,"round.short.r16":164,"bracket.empty.title":165,"bracket.empty.sub":166,"bracket.tbd":167,"bracket.tied_agg":168,"bracket.agg":169,"bracket.tab_bracket":170,"bracket.tab_groups":171,"bracket.tab_schedule":172,"bracket.view_schedule":173,"bracket.won":174,"bracket.eliminated":175,"status.live":176,"status.finished":177,"status.scheduled":178,"status.full_time":179,"status.ft":180,"status.halftime":181,"status.first_half":182,"status.second_half":183,"status.kickoff":184,"status.end":185,"status.extra_time":186,"status.extra_time_start":187,"status.extra_time_halftime":188,"status.extra_time_second_half":189,"status.extra_time_end":190,"status.shootout":191,"status.shootout_start":192,"status.end_match":193,"event.goal":194,"event.yellow_card":195,"event.red_card":196,"event.substitution":197,"event.var":198,"event.header":199,"event.shot":200,"event.penalty":201,"event.free_kick":202,"event.cards":203,"filter.all":204,"form.W":205,"form.D":206,"form.L":207,"team.details":208,"team.possession":209,"team.shots":210,"team.on_target":211,"team.xg":212,"team.fouls":213,"stat.assists":214,"stat.goals":215,"stat.corners":216,"stat.appearances":217,"stat.shot_assists":218,"stat.yellow_cards":219,"stat.shots_off_target":220,"stat.expected_goals":221,"stat.touches_opposition_box":222,"stat.big_chances":223,"stat.big_chances_missed":224,"stat.accurate_passes":225,"stat.red_cards":226,"stat.offsides":227,"stat.saves":228,"stat.blocked_shots":229,"stat.total_passes":230,"stat.passes_completed":231,"stat.tackles":232,"stat.interceptions":233,"stat.aerial_duels_won":234,"stat.free_kick_goals":235,"stat.penalty_goals":236,"team.spectators":237,"match.record":238,"match.formation":239,"match.standing":240,"team.top_scorer":241,"team.next_match":242,"team.upcoming_matches":243,"team.previous_matches":244,"team.form":245,"team.form_trend":246,"team.h2h":247,"team.prediction":248,"team.pts":249,"team.injuries":250,"team.injured":251,"team.suspended":252,"team.favourite":253,"team.and_more":254,"team.prediction_note":255,"team.status_prematch":256,"team.cmp_form":257,"team.cmp_att":258,"team.cmp_def":259,"team.goal_lines":260,"team.goal_lines_total":261,"team.goal_lines_note":262,"team.odds_note":263,"team.odds_live":264,"team.odds_live_note":265,"team.odds_live_badge":266,"team.odds":267,"team.odds_avg":268,"team.odds_avg_one":269,"form.goals_per_match":270,"form.scored":271,"form.conceded":272,"form.home":273,"form.away":274,"standings.stats":275,"standings.goals":276,"standings.pos_label":277,"standings.compact_hidden":278,"team.in":279,"team.no_match":280,"team.off_season":281,"team.unknown_entity":282,"time.today":283,"time.yesterday":284,"time.tomorrow":285,"time.now":286,"time.in_n_min":287,"time.in_n_h":288,"time.in_n_d":289,"time.n_min_ago":290,"time.n_h_ago":291,"time.n_d_ago":292,"cd.day":293,"cd.days":294,"cd.hrs":295,"cd.min":296,"cd.sec":297,"lineup.bench":298,"lineup.empty.title":299,"lineup.pre.title":300,"lineup.pre.sub":301,"lineup.empty.sub":302,"timeline.empty.title":303,"timeline.empty.sub":304,"timeline.event":305,"timeline.penalty":306,"news.empty":307,"news.articles":308,"news.premium":309,"zone.champions":310,"zone.europa":311,"zone.relegation":312,"zone.conference":313,"zone.qualified":314,"zone.third_place_playoff":315,"zone.eliminated":316,"hero.groups":317,"hero.teams":318,"hero.not_started":319,"phase.regular_season":320,"phase.group_stage":321,"phase.playoffs":322,"col.pos":323,"col.team":324,"col.played":325,"col.wins":326,"col.draws":327,"col.losses":328,"col.gd":329,"col.points":330,"generic.no_match":331,"generic.matches_count":332,"generic.unknown_entity":333,"generic.close":334,"generic.remove":335,"generic.unknown":336,"generic.home":337,"generic.away":338,"generic.other":339,"popup.match_details":340,"popup.lineups":341,"popup.timeline":342,"popup.h2h":343,"popup.no_events":344,"popup.momentum":345,"popup.shotmap":346,"popup.ratings":347,"popup.kickoff_in":348,"popup.duration_day":349,"popup.duration_days":350,"popup.duration_hour":351,"popup.duration_hours":352,"popup.duration_minute":353,"popup.duration_minutes":354,"popup.duration_and":355,"popup.round":356,"popup.standings":357,"popup.h2h_available":358,"popup.expected_lineup":359,"popup.expected_lineup_note":360,"popup.data_source":361,"popup.parts":362,"popup.review":363,"popup.player_of_match":364,"popup.substitutes":365,"popup.team_averages":366,"popup.goals_for":367,"popup.goals_against":368,"popup.updated_minutes":369,"club.next_match":370,"club.injuries":371,"club.squad_value":372,"club.average_age":373,"club.valued_players":374,"club.market_value":375,"club.age_label":376,"club.nationality":377,"club.contract_until":378,"club.appearances":379,"club.rating":380,"club.squad_analysis":381,"club.years_short":382,"club.youngest":383,"club.oldest":384,"club.thin_positions":385,"club.injury_center":386,"club.unavailable":387,"club.expected_return":388,"club.player_comparison":389,"club.select_second_player":390,"club.compare":391,"club.clear":392,"club.from":393,"club.to":394,"club.transfer_date":395,"club.transfer_type":396,"club.transfer_fee":397,"club.position_goalkeeper":398,"club.position_defender":399,"club.position_midfielder":400,"club.position_attacker":401,"club.return_day_to_day":402,"club.return_about_week":403,"club.return_few_days":404,"club.return_early":405,"club.return_mid":406,"club.return_late":407,"club.transfer_loan":408,"club.transfer_free":409,"club.transfer_permanent":410,"club.transfer_contract":411,"club.free_agent":412,"club.availability_radar":413,"club.predicted_lineup":414,"club.prediction_disclaimer":415,"club.official_selection":416,"club.starting_players":417,"club.substitutes":418,"club.team_news":419,"club.freshness_unknown":420,"club.just_updated":421,"club.updated_minutes":422,"club.automation_examples":423,"club.copy_yaml":424,"club.automation_lineup":425,"club.automation_injury":426,"club.automation_available":427,"club.automation_transfer":428,"club.automation_started":429,"club.automation_goal":430,"club.shirt_number":431,"club.starts":432,"club.availability":433,"club.recent_matches":434,"club.starting_player":435,"club.substitute":436,"club.section_quality":437,"club.section_availability":438,"club.section_selection":439,"club.section_prediction":440,"club.section_news":441,"club.section_automations":442,"club.favorites":443,"club.favorite":444,"club.search_players":445,"club.all_positions":446,"club.all_availability":447,"club.available":448,"club.no_players_found":449,"club.records":450,"club.unbeaten":451,"club.winning_streak":452,"club.clean_sheet_streak":453,"club.average_goals":454,"club.biggest_win":455,"club.home_ppg":456,"club.away_ppg":457,"club.since_update":458,"club.change_transfer_added":459,"club.change_injury_added":460,"club.change_player_available":461,"club.change_coach_changed":462,"club.change_squad_added":463,"club.change_squad_removed":464,"club.change_market_value_changed":465,"club.section_profile":466,"club.section_matchday":467,"club.section_dashboard":468,"club.section_season":469,"club.section_changes":470,"club.section_favorites":471,"club.section_records":472,"club.section_analysis":473,"club.section_injuries":474,"club.section_comparison":475,"club.section_squad":476,"club.section_transfers":477,"month.1":478,"month.2":479,"month.3":480,"month.4":481,"month.5":482,"month.6":483,"month.7":484,"month.8":485,"month.9":486,"month.10":487,"month.11":488,"month.12":489,"scorers.goals":490,"scorers.matches":491,"scorers.empty":492,"scorers.rank":493,"ui.loading":494,"ui.open_editor_to_configure":495,"ui.unknown_card_type":496,"ui.select_entity":497,"ui.unknown_entity":498,"ui.sensor_unavailable":499,"ui.invalid_config":500,"ui.entity_required":501,"ui.loading_timeout":502,"ui.entity_not_responding":503,"ui.check_integration":504,"ui.no_live_match":505,"ui.no_live_match_hint":506,"ui.off_season":507,"ui.off_season_hint":508,"ui.endpoint_unsupported":509,"ui.endpoint_unsupported_hint":510,"ui.wrong_entity_type":511,"ui.wrong_entity_type_hint":512,"ui.entity_not_found":513,"ui.check_entity_config":514,"ui.no_match_data":515,"ui.no_match_hint":516,"ui.no_stats_yet":517,"ui.no_events_yet":518,"ui.no_lineup_yet":519,"ui.no_form_data":520,"ui.no_h2h_yet":521,"ui.no_form_hint":522,"ui.sensor_unavailable_hint":523,"ui.restart_ha":524,"ui.no_standings_data":525,"ui.no_standings_hint":526,"ui.no_competition_data":527,"ui.no_competition_hint":528,"ui.not_available_competition":529,"ui.offline_cached":530,"ui.waiting_integration":531,"ui.sync_fetching":532,"ui.sync_fetching_hint":533,"ui.sync_rate_limited":534,"ui.sync_rate_limited_hint":535,"ui.sync_auth_failed":536,"ui.sync_auth_failed_hint":537,"ui.sync_provider_unavailable":538,"ui.sync_provider_unavailable_hint":539,"ui.no_entities_configured":540,"ui.add_team_entity":541,"card.my_teams":542,"card.team_form":543,"card.diagnostics":544,"standings.preseason":545,"match.vs":546,"match.draw":547,"tab.overview":548,"tab.stats":549,"tab.timeline":550,"tab.lineup":551,"tab.h2h":552,"weather.wind":553,"weather.clear":554,"weather.partly_cloudy":555,"weather.cloudy":556,"weather.foggy":557,"weather.drizzle":558,"weather.rain":559,"weather.snow":560,"weather.showers":561,"weather.thunderstorm":562,"weather.unknown":563,"editor.sensor":564,"editor.settings":565,"editor.section_display":566,"editor.section_match":567,"editor.section_prediction":568,"editor.appearance":569,"editor.entity":570,"editor.select":571,"editor.hide_header":572,"editor.hide_broadcasts":573,"editor.compact":574,"editor.inherit":575,"editor.on":576,"editor.off":577,"editor.show_form_trend":578,"editor.show_previous_matches":579,"editor.show_weather":580,"editor.show_prediction_details":581,"editor.show_odds":582,"editor.show_injuries":583,"editor.show_event_toasts":584,"editor.my_team":585,"card.schedule":586,"schedule.empty":587,"editor.max_matches":588,"editor.show_archive_stats":589,"editor.enrichment_entity":590,"editor.enrichment_entity_hint":591,"editor.auto_enrichment":592,"editor.auto_enrichment_hint":593,"editor.archive_entity":594,"editor.standings_entity":595,"editor.automatic":596,"editor.show_season_report":597,"editor.supplementary_entities":598,"editor.supplementary_entities_hint":599,"diag.source_blend":600,"diag.enriched_fields":601,"schedule.show":602,"schedule.show_upcoming":603,"schedule.show_previous":604,"schedule.show_all":605,"schedule.show_competition":606,"editor.text_size":607,"schedule.size_xs":608,"schedule.size_small":609,"schedule.size_normal":610,"schedule.size_large":611,"card.minimal":612,"minimal.empty":613,"minimal.variant":614,"minimal.variant_fixtures":615,"minimal.variant_next":616,"minimal.variant_standings":617,"minimal.variant_form":618,"minimal.variant_unsupported":619,"mini.team":620,"mini.p":621,"mini.gd":622,"mini.pts":623,"editor.my_team_hint":624,"editor.skin":625,"skin.appearance":626,"skin.palette":627,"skin.default":628,"lang.auto":629,"skin.shared":630,"skin.background":631,"skin.gradient_incomplete":632,"skin.gradient_angle":633,"skin.watermark_size":634,"skin.watermark_url_hint":635,"skin.gradient_from":636,"skin.gradient_to":637,"skin.watermark_url":638,"skin.watermark_opacity":639,"skin.via":640,"skin.appearance_dark":641,"skin.appearance_light":642,"skin.appearance_ha":643,"skin.palette_purple":644,"skin.palette_red_white":645,"skin.palette_red_gold":646,"skin.palette_blue_red":647,"skin.palette_white_gold":648,"skin.palette_blue":649,"skin.palette_orange":650,"skin.palette_black_white":651,"skin.palette_classic":652,"skin.palette_neon":653,"skin.palette_gold":654,"skin.palette_team":655,"skin.palette_custom":656,"skin.custom_accent":657,"skin.custom_accent_2":658,"skin.custom_background":659,"skin.custom_text":660,"skin.custom_reset":661,"skin.advanced":662,"skin.contrast_warning":663,"skin.custom_live":664,"skin.custom_gold":665,"skin.custom_surface":666,"skin.custom_card":667,"skin.custom_text_2":668,"skin.custom_divider":669,"skin.custom_chip":670,"editor.language":671,"editor.score_size":672,"editor.team_name":673,"editor.theme":674,"editor.max_items":675,"editor.ranking":676,"editor.hide_images":677,"editor.max_articles":678,"editor.reverse_order":679,"editor.smart_order":680,"editor.competition_filter":681,"editor.season_filter":682,"editor.match_filter":683,"editor.venue_filter":684,"filter.upcoming":685,"filter.finished":686,"match.preview":687,"match.review":688,"match.h2h_available":689,"match.story":690,"match.team_of_match":691,"story.opening_goal":692,"story.equalizer":693,"story.decisive_goal":694,"story.red_card":695,"story.final_result":696,"story.current_score":697,"story.comeback":698,"story.xg_dominance":699,"story.shot_dominance":700,"source.sections":701,"source.not_available":702,"match.expectation_reality":703,"match.expected":704,"match.actual":705,"match.outcome_home":706,"match.outcome_draw":707,"match.outcome_away":708,"club.unavailable_players":709,"club.missing_load":710,"club.missing_output":711,"editor.default_group":712,"editor.max_rows":713,"editor.highlight_team":714,"editor.hide_wdlgd":715,"editor.max_teams":716,"editor.teams":717,"editor.show_season_totals":718,"editor.show_goals_per_team":719,"editor.top_n_teams":720,"editor.bottom_n_teams":721,"editor.show_live_ticker":722,"editor.show_finished":723,"editor.newest_first":724,"editor.max_events_visible":725,"editor.max_events_total":726,"editor.hide_older_than_days":727,"editor.card_title":728,"editor.default_competition":729,"editor.style":730,"editor.tree_playoffs":731,"editor.bracket_compact":732,"editor.groups_entity":733,"editor.hint_groups_entity":734,"editor.matches_entity":735,"editor.hint_matches_entity":736,"editor.max_stats":737,"editor.group_by":738,"editor.group_by_date":739,"editor.group_by_competition":740,"editor.standings_group":741,"editor.all_groups":742,"editor.style_list":743,"editor.style_tree":744,"editor.hint_older_than_days":745,"editor.hint_bracket_competitions":746,"editor.hint_multi_team_sensor":747,"editor.hint_team_competitions_sensor":748,"editor.placeholder_default_group":749,"editor.default_competition_hint":750,"editor.diag_sensor_type":751,"editor.diag_recommended_cards":752,"editor.diag_integration_version":753,"editor.diag_integration_outdated":754,"editor.diag_title_placeholder":755,"diag.sensor":756,"diag.state":757,"diag.matches":758,"diag.live":759,"diag.upcoming":760,"diag.recent":761,"diag.requests":762,"diag.last_update":763,"diag.sensor_age":764,"diag.status_ok":765,"diag.status_error":766,"diag.status_unknown":767,"diag.card_team":768,"diag.card_countdown":769,"diag.card_match_center":770,"diag.card_lineup":771,"diag.card_timeline":772,"diag.card_team_form":773,"diag.card_matches":774,"diag.card_ticker":775,"diag.card_live_match":776,"diag.card_team_competitions":777,"diag.card_season_overview":778,"diag.card_standings":779,"diag.card_mini_standings":780,"diag.card_scorers":781,"diag.card_bracket":782,"diag.card_news":783,"diag.card_commentary":784,"editor.select_entity":785,"editor.show":786,"editor.all_matches":787,"editor.live_only":788,"editor.competition_filter_optional":789,"editor.competition_filter_example":790,"editor.hide_when_empty":791,"editor.auto_scroll":792,"editor.scroll_speed":793,"editor.speed_slow":794,"editor.speed_normal":795,"editor.speed_fast":796,"editor.size_normal":797,"editor.size_big":798,"editor.size_huge":799},s=["Bracket","Lineups","Timeline","News","Standings","Top Scorers","Club","Matchday","Match Center","Live","Upcoming","Finished","Matches","Competition","Clean sheets","Biggest win","Leader","Clear","Home","Away","Good","Prediction","Odds","Absences","Lineup","Squad","Transfers","Season progress","Balance","Winter","Max transfers","Stats","Video","Final","Semis","Schedule","Eliminated","Goal","Penalty","Details","Possession","Fouls","Assists","Goals","Corners","Appearances","Tackles","Interceptions","Record","Formation","Next match","Form","Unavailable","Total","Live odds","Goals per match","Position","No match available","Unknown entity","{n} min ago","No events yet","{n} articles","★ Premium","Champions","Europa","Conference League","teams","Playoffs","Team","Unknown","{n} previous meetings available","Expected lineup","Substitutes","Injuries","Squad analysis","Player comparison","Date","Permanent","Contract","Team news","New injury","New transfer","Availability","Favourite players","Club records","Select entity","Not available for this competition","Team Form","Diagnostics","Sensor","Appearance","Show","Normal","Minimal","Neon","Gold","Accent","Accent 2","Chip","Max items","Max articles","Teams","Style","Recent","Ticker","Schema","Opstellingen","Tijdlijn","Nieuws","Stand","Topschutters","Wedstrijddag","Wedstrijdcentrum","Komend","Afgelopen","Wedstrijden","gewonnen","verloren","Competitie","Grootste overwinning","Wissen","Thuis","Goed","Aftrap","Stadion","O.O.","Voorspelling","Opstelling","Geen wedstrijden","Selectie","Alle","Voorbeschouwing","Nabeschouwing","Seizoensontwikkeling","Saldo","Transfervrij","Speelronde","Finale","Halve finales","Totaal","Gewonnen","Uitgeschakeld","Einde wedstrijd","Doelpunt","Rode kaart","Doelpunten","Volgende wedstrijd","Vorm","Onderlinge duels","Goals per wedstrijd","Voor","Tegen","Geen wedstrijd beschikbaar","Onbekende entiteit","Morgen","{n} min geleden","Bank","Nog geen gebeurtenissen","Champions League","Europa League","Onbekend","{n} uur","{n} eerdere ontmoetingen beschikbaar","Verwachte opstelling","Wisselspelers","Blessures","Selectieanalyse","Niet beschikbaar","Spelervergelijking","Datum","Teamnieuws","Nieuwe blessure","Nieuwe transfer","Beschikbaarheid","Favoriete spelers","Clubrecords","Selecteer entiteit","Niet beschikbaar voor dit toernooi","Teamvorm","Regen","Weergave","Speelschema","Automatisch","Tonen","Klein","Normaal","Groot","Ranglijst","Thema","Goud","Tabellone","Formazioni","Cronologia","Classifica","Giornata","Partite","Competizione","Casa","Trasferta","Pronto","Pronostico","Quote","Formazione","Assist","Statistiche","Campo neutro","Rigore","Prossima partita","Nessuna partita disponibile","Entità sconosciuta","Forma","Favorito","Nessun evento ancora","Evento","Squadra","Precedenti","Non disponibile per questa competizione","Neve","Vista","Calendario","Grande","Tema","Data","Tableau","Compositions","Chronologie","Classement","Journée","En direct","À venir","Matchs","Saison","Compétition","Domicile","Extérieur","Pronostic","Cotes","Composition","Barrages","Buts","Prochain match","Aucun match disponible","Entité inconnue","Forme","Équipe","Non disponible pour cette compétition","Tous","Thème","ex. sensor.soccer_live_standings_fifa_world","ex. sensor.soccer_live_all_fifa_world","Cuadro","Alineaciones","Cronología","Clasificación","Jornada","Próximos","Partidos","Competición","Líder","máx.","Reconstruir","Local","Visitante","Resultado","Inicial","Enfrentamientos","Pronóstico","Cuotas","Alineación","Excelente","Parcial","Limitada","Cobertura limitada","Fundado {year}","Asistencias","Vídeo","Abrir vídeo ESPN","Grupos","Eliminado","Programado","Penalti","Faltas","Goles","espectadores","Próximo partido","Ningún partido disponible","Entidad desconocida","Lesionado","Ataque","De {n} casa","Aún no hay eventos","grupos","Temporada regular","Fase de grupos","Equipo","No disponible para esta competición","Diagnósticos","Parcialmente nublado","Nublado","Esta vista no es compatible con el sensor seleccionado","Automático","Mostrar","Anteriores","Todos","Modo compacto","Idioma","Agrupar por","Grupo","Tipo de sensor","Diagnósticos Soccer Live","Máx eventos total","Estilo","Aufstellungen","Spielverlauf","Tabelle","Verein","Spieltag","Beendet","Spiele","Wettbewerb","Heim","Auswärts","Anstoß","Direktvergleich","Prognose","Quoten","Ausfälle","Aufstellung","Keine Spiele","Abwehr","Angriff","Vorlagen","Gesamt","Gruppen","Ausgeschieden","Elfmeter","Nächstes Spiel","Kein Spiel verfügbar","Unbekannte Entität","Tore","Noch keine Ereignisse","Nicht verfügbar für diesen Wettbewerb","Design","Chave","Escalações","Classificação","Ao vivo","Jogos","Competição","Fora","Previsão","Defesas","Assistências","Estatísticas","Pênalti","Próximo jogo","Confronto direto","Nenhum jogo disponível","Entidade desconhecida","Ainda sem eventos","Não disponível para esta competição"],n={en:[0,1,2,3,4,5,6,7,8,"Match archive","Competition race","No matchday data","Choose a match sensor with upcoming or finished matches",9,10,11,12,"No archived matches yet","Finished matches are added locally after a sensor update","Personal match history","won","drawn","lost","Season","All seasons",13,"All competitions","Goals for–against",14,"Longest unbeaten","Longest winning run",15,"Biggest loss","Most played opponents","Live table impact",16,"max","Table position over time","{n} matches remaining","{n} historical meetings added","Copy export","Rebuild",17,"Archive copied","Could not copy the archive","Archive rebuild requested","Archive cleared","Permanently clear this local match archive?","Import from clipboard","Archive imported","Could not import the archive","Location","Home and away",18,19,"Result","All results","Opponent","Monthly form","Match readiness","Ready",20,"Building","Early","Kick-off",13,"Venue","Broadcast","Weather","H2H",21,22,23,24,"Completeness","Conflicts","Data coverage","Excellent",20,"Partial","Limited","No matches","Provider error","Limited coverage","The provider reported an error","This match has been postponed","This match has been cancelled","Sources disagree about this match","The live lineup is not available yet","The live timeline is not available yet","The live data may be outdated","A new date appears to be available for this match","No club data","Choose a sensor that provides club data",25,26,"Club data refreshes about once a day","Show all ({n})","Show less","All","In","Out","Goalkeepers","Defenders","Midfielders","Attackers","Founded {year}","{n} yrs","Incoming","Outgoing",7,"Preview",9,"Review",27,"matches","Goals for","Goals against","Goal difference","Spent","Income",28,"Loans","Free transfers","Summer",29,"Show squad","Show transfers","Show matchday dashboard","Show season progress","Show squad analysis","Show injury centre","Show availability radar","Show prediction","Show official match squad","Show team news","Show data quality","Show automation examples","Show club records","Use collapsible sections","Compact dashboard mode","Section order",30,"Top Assists",31,"Commentary",32,7,"Neutral venue","Live TV","Open ESPN stats","Open ESPN commentary","Open ESPN video",33,"Semifinals","Quarterfinals","Round of 16","Round of 32","Round of 64","Third Place","Knockout Playoffs","Preliminary Round",34,"Quarters","R16","Bracket not available","Knockout stage starts soon","TBD","Tied agg.","Agg.",0,"Groups",35,"View in schedule","Won",36,9,11,"Scheduled","Full Time","FT","Halftime","1st Half","2nd Half","Kickoff","End","Extra Time","Start Extra Time","Halftime Extra Time","2nd Half Extra Time","End Extra Time","Penalty Shootout","Start Shootout","End of Match",37,"Yellow Card","Red Card","Substitution","VAR","Header","Shot",38,"Free kick","Cards","All","W","D","L",39,40,"Shots","On target","xG",41,42,43,44,45,"Shot assists","Yellow cards","Shots off target","Expected goals","Touches in opposition box","Big chances","Big chances missed","Accurate passes","Red cards","Offsides","Saves","Blocked shots","Total passes","Passes completed",46,47,"Aerial duels won","Free kick goals","Penalty goals","spectators",48,49,"Standing","Top scorer",50,"Upcoming matches","Previous matches",51,"Season form","Head to head",21,"pts",52,"Injured","Suspended","Favourite","+{n} more","Provider estimate, not a guarantee","Pre-match",51,"Attack","Defense","Goal lines",53,"Bookmaker goal lines, not xG","Averaged market odds, may be delayed",54,"Live in-play odds, updated during the match",9,22,"Average of {n} bookmakers","From {n} bookmaker",55,"Scored","Conceded",18,19,"matches played · goals","goals",56,"teams hidden","In",57,"New season starts soon",58,"Today","Yesterday","Tomorrow","now","in {n} min","in {n} h","in {n} d",59,"{n} h ago","{n} d ago","day","days","hrs","min","sec","Bench","Lineups not available","Line-ups not published yet","They usually appear about an hour before kickoff.","Lineups are published shortly before kick-off",60,"Events appear during the match","Event",38,"No news available",61,62,63,64,"Relegation",65,"Qualified","Best 3rd",36,"groups",66,"Not started","Regular season","Group stage",67,"#",68,"P","W","D","L","+/-","Pts",57,"{n} matches",58,"Close","Remove",69,18,19,"Other","Match details",1,2,"Head-to-head","No events available","Match momentum","Shot map","Player ratings","Kick-off in {value}","{n} day","{n} days","{n} hour","{n} hours","{n} minute","{n} minutes","and","Round","League position",70,71,"Provider estimate; the official lineup may differ","Data source","parts available","Post-match review","Player of the match",72,"Team averages","For","Against","updated {n} min ago",50,73,"Squad value","Average age","{n} players with market value","Market value","Age","Nationality","Contract until",45,"Rating",74,"yrs","Youngest","Oldest","Limited depth","Injury centre",52,"Expected return",75,"Select a second player","Compare player",17,"From","To",76,"Transfer type","Transfer fee","Goalkeeper","Defender","Midfielder","Attacker","Day to day","About a week","A few days","Early {date}","Mid {date}","Late {date}","On loan","Free transfer",77,78,"Free agent","Availability radar",71,"Prediction based on availability and recent usage","Official match squad","Starting players",72,79,"Update time unknown","Just updated",59,"Automation examples","Copy YAML","Lineup available",80,"Player available again",81,"Match started","Goal scored","Shirt number","Starts",82,"Last five matches","Starting player","Substitute","Data quality",82,"Official squad",71,79,"Automations",83,"Favourite player","Search players","All positions","All availability","Available","No players found",84,"Unbeaten","Winning streak","Clean-sheet streak",55,15,"Home PPG","Away PPG","Since previous update",81,80,"Player available","Coach changed","Player added","Player removed","Market value changed","Club profile",7,"Key figures",27,"Changes",83,84,74,73,75,25,26,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",43,12,"No top scorers available","#","Loading...","Soccer Live — open the editor to configure this card.",'Unknown card type: "{type}"',85,58,"Sensor unavailable","Invalid configuration","Entity required","Loading timeout","Entity not responding","Check if the integration is running","No live match right now","Commentary appears here during a live game","Off season","No matches scheduled in this period",86,"ESPN does not provide this data for all competitions","Wrong sensor type","This card expects a different sensor","Entity not found","Check the entity configuration","No match data","No match available for this entity","No stats available yet",60,"No lineup available yet","No form data","No head-to-head data available","No previous matches found for this sensor","Check if the Soccer Live integration is running","Restart Home Assistant or check the integration","No standings data","Check if the league has started","No competition data","Check if the team has scheduled matches",86,"Offline — showing cached data","Waiting for integration to come online","Fetching matches…","The integration is loading data for the first time","Temporarily rate limited","The data provider is limiting requests; this resumes automatically","API key invalid","Re-enter your API-Football key via Settings → Devices & Services","Data provider unavailable","Could not reach the data provider; retrying automatically","No entities configured","Add at least one team entity","My Teams",87,88,"Season {season} has not started yet","vs","D","Overview",31,2,24,"H2H","Wind speed (Beaufort)",17,"Partly cloudy","Cloudy","Foggy","Drizzle","Rain","Snow","Showers","Thunderstorm","Unknown weather",89,"Settings","Display","Match info","Prediction & odds",90,"Entity","Select…","Hide header","Hide broadcasts","Compact mode","Shared","On","Off","Show season form trend","Show previous matches","Show weather","Show prediction details","Show odds","Show unavailable players","Show event toasts (in-card)","My team (highlight)",35,"No matches to show","Max matches","Show archive statistics","Optional supplementary sensor","Only fills missing fields for matching fixtures; the primary schedule remains authoritative.","Automatically find a supplementary sensor","Combines matching fixtures from another provider when richer data is available.","External archive sensor","Standings sensor","Automatic","Show season report","Additional data sources","Optional comma-separated sensors; each source only fills fields that are still missing.","Combined sources","Supplemented fields",91,10,"Previous","All","Show competition","Text size","Extra small","Small",92,"Large",93,"Nothing to show","View","Fixtures",50,4,51,"This view isn't supported by the selected sensor",68,"P","GD","Pts","e.g. Feyenoord Rotterdam","Skin",90,"Palette","Default","Auto (HA locale)","shared","Background & watermark","Set both gradient colours for the gradient to apply","Gradient angle","Watermark size","A URL or /local/… path served by Home Assistant","Gradient from","Gradient to","Watermark image URL","Watermark opacity","via","Dark","Light","Home Assistant theme","Purple","Red & White","Red & Gold","Blue & Red","White & Gold","Blue","Orange","Black & White","Classic (green)",94,95,"Team colours","Custom",96,97,"Background","Text","Reset colours","Advanced colours","Low contrast between text and background",9,95,"Surface","Card","Secondary text","Divider",98,"Language","Score size","Team name","Theme",99,"Ranking","Hide images",100,"Newest first","Smart order (live, upcoming, results)","Competition filter","Season filter","Match status","Home / away",10,11,"Match preview","Match review",70,"Match story","Team of the match","Opening goal","Equalizer","Decisive goal","Red card","{home} – {away} finished {score}.","{home} – {away} is currently {score}.","{team} came from behind.","{team} created the most danger ({value} xG).","{team} dominated the attempts ({value} shots).","Data by section","Not available","Expectation vs reality","Expected","Actual","Home win","Draw","Away win","players unavailable","usual starting load absent","goals and assists absent","Default group (optional)","Max rows (0 = all)","Highlight team (partial name)","Hide W/D/L/+/- columns","Max teams visible",101,"Show season totals","Show goals per team","Top N teams (0 = all)","Bottom N teams (0 = all)","Show live ticker","Show finished matches","Newest matches first","Max events visible","Max events total","Hide matches older than (days)","Card title","Default competition (optional)",102,"Tree: include Playoffs","Compact (rounds stacked)","Groups entity (standings)","e.g. sensor.soccer_live_standings_fifa_world","Schedule entity (matches)","e.g. sensor.soccer_live_all_fifa_world","Max stats shown (default 4)","Group by",76,13,"Group","All","List (default)","Tree (bracket with central trophy)","Only works when 'Show Finished Matches' is enabled.","Available for Champions League, Europa League, Conference League, FIFA World Cup and other cup competitions.","Add one soccer_live_next_* or soccer_live_all_mixed_* sensor per team","Use a soccer_live_all_mixed_* sensor (contains all competitions for one team)","Leave empty for first group","e.g. Premier League","Sensor type","Recommended cards","Integration version","Integration may be outdated — update Soccer Live for full data and card recommendations","Soccer Live diagnostics",89,"State",12,9,10,103,"Requests","Last update","Sensor age","OK","Error",69,68,"Countdown",8,24,2,87,12,104,"Live Match","Team Competitions","Season Overview",4,"Mini Standings",5,0,3,"Live Commentary",85,91,"All matches","Live only","Competition filter (optional)","e.g. World Cup","Hide card when empty","Auto-scroll","Scroll speed","Slow",92,"Fast",92,"Big","Huge"],nl:[105,106,107,108,109,110,6,111,112,"Wedstrijdarchief","Competitiestrijd","Geen wedstrijddaggegevens","Kies een wedstrijdsensor met komende of gespeelde wedstrijden",9,113,114,115,"Nog geen gearchiveerde wedstrijden","Afgelopen wedstrijden worden lokaal toegevoegd na een sensorupdate","Persoonlijke wedstrijdhistorie",116,"gelijk",117,"Seizoen","Alle seizoenen",118,"Alle competities","Doelpunten voor–tegen",14,"Langst ongeslagen","Langste winstreeks",119,"Grootste nederlaag","Vaakst gespeelde tegenstanders","Impact op de live stand","Koploper","max","Positieverloop","Nog {n} wedstrijden","{n} historische ontmoetingen toegevoegd","Export kopiëren","Opnieuw opbouwen",120,"Archief gekopieerd","Kon het archief niet kopiëren","Opnieuw opbouwen aangevraagd","Archief gewist","Dit lokale wedstrijdarchief definitief wissen?","Importeren vanaf klembord","Archief geïmporteerd","Kon het archief niet importeren","Locatie","Thuis en uit",121,"Uit","Resultaat","Alle resultaten","Tegenstander","Vorm per maand","Wedstrijdvoorbereiding","Klaar",122,"In opbouw","Vroeg",123,118,124,"Uitzending","Weer",125,126,22,"Afwezigen",127,"Volledigheid","Conflicten","Datadekking","Uitstekend",122,"Gedeeltelijk","Beperkt",128,"Providerfout","Beperkte dekking","De provider meldt een fout","Deze wedstrijd is uitgesteld","Deze wedstrijd is afgelast","De databronnen spreken elkaar tegen","De live-opstelling is nog niet beschikbaar","De live-tijdlijn is nog niet beschikbaar","De live-data is mogelijk verouderd","Er lijkt een nieuwe datum voor deze wedstrijd beschikbaar","Geen clubdata","Kies een sensor die clubdata aanbiedt",129,26,"Clubdata wordt ongeveer één keer per dag ververst","Alles tonen ({n})","Minder tonen",130,"In","Uit","Keepers","Verdedigers","Middenvelders","Aanvallers","Opgericht {year}","{n} jr","Inkomend","Uitgaand",111,131,9,132,133,"wedstrijden","Goals voor","Goals tegen","Doelsaldo","Uitgaven","Inkomsten",134,"Huurtransfers",135,"Zomer",29,"Selectie tonen","Transfers tonen","Wedstrijddag-dashboard tonen","Seizoensontwikkeling tonen","Selectieanalyse tonen","Blessurecentrum tonen","Beschikbaarheidsradar tonen","Voorspelling tonen","Officiële wedstrijdselectie tonen","Teamnieuws tonen","Datakwaliteit tonen","Automatiseringsvoorbeelden tonen","Clubrecords tonen","Inklapbare secties gebruiken","Compacte dashboardmodus","Volgorde van secties",30,42,31,"Commentaar",32,136,"Neutraal terrein","Live op tv","Open statistieken op ESPN","Open commentaar op ESPN","Open video op ESPN",137,138,"Kwartfinales","Achtste finales","Zestiende finales","Ronde van 64","Derde plaats","Knock-out play-offs","Voorronde",138,"Kwart","8e finale","Schema niet beschikbaar","De knock-outfase begint binnenkort","N.t.b.","Gelijk totaal",139,105,"Groepen",115,"Bekijk in speelschema",140,141,9,114,"Gepland",142,"FT","Rust","1e helft","2e helft",123,"Einde","Verlengingen","Start verlengingen","Rust verlengingen","2e helft verlengingen","Einde verlengingen","Strafschoppen","Start strafschoppen",142,143,"Gele kaart",144,"Wissel","VAR","Kopbal","Schot",38,"Vrije trap","Kaarten","Alles","W","G","V",39,"Balbezit","Schoten","Op doel","xG","Overtredingen",42,145,"Hoekschoppen",115,"Sleutelpassen","Gele kaarten","Schoten naast","Verwachte doelpunten","Balcontacten in strafschopgebied","Grote kansen","Grote kansen gemist","Nauwkeurige passes","Rode kaarten","Buitenspels","Reddingen","Geblokte schoten","Totaal passes","Passes geslaagd",46,"Intercepties","Luchtduels gewonnen","Vrije trap doelpunten","Penalty doelpunten","toeschouwers",48,"Formatie",109,"Topscorer",146,"Volgende wedstrijden","Vorige wedstrijden",147,"Seizoenvorm",148,126,"ptn","Afwezig","Geblesseerd","Geschorst","Favoriet","+{n} meer","Schatting van de aanbieder, geen garantie","Voor de wedstrijd",147,"Aanval","Verdediging","Doellijnen",139,"Bookmaker-doellijnen, geen xG","Gemiddelde marktquoteringen, kunnen verouderd zijn",54,"Live in-play odds, bijgewerkt tijdens de wedstrijd",9,"Quoteringen","Gemiddeld over {n} bookmakers","Van {n} bookmaker",149,150,151,121,"Uit","wedstrijden gespeeld · doelpunten","doelpunten","Positie","ploegen","Over",152,"Nieuw seizoen begint binnenkort",153,"Vandaag","Gisteren",154,"nu","over {n} min","over {n} uur","over {n} dagen",155,"{n} uur geleden","{n} dagen geleden","dag","dagen","uur","min","sec",156,"Opstellingen niet beschikbaar","Opstellingen nog niet bekend","Meestal verschijnen ze ongeveer een uur voor de aftrap.","Opstellingen worden kort voor de aftrap gepubliceerd",157,"Gebeurtenissen verschijnen tijdens de wedstrijd","Gebeurtenis",38,"Geen nieuws beschikbaar","{n} artikelen",62,158,159,"Degradatie",65,"Gekwalificeerd","Beste 3e",141,"groepen",66,"Niet gestart",118,"Groepsfase","Play-offs","#",68,"G","W","GL","V","+/-","Pnt",152,"{n} wedstrijden",153,"Sluiten","Verwijderen",160,121,"Uit","Overig","Wedstrijddetails",106,107,148,"Geen gebeurtenissen beschikbaar","Wedstrijdmomentum","Schotenkaart","Spelersbeoordelingen","Aftrap over {value}","{n} dag","{n} dagen",161,161,"{n} minuut","{n} minuten","en",136,"Positie op de ranglijst",162,163,"Schatting van de aanbieder; de officiële opstelling kan afwijken","Databron","onderdelen beschikbaar",132,"Speler van de wedstrijd",164,"Teamgemiddelden",150,151,"{n} min geleden bijgewerkt",146,165,"Selectiewaarde","Gemiddelde leeftijd","{n} spelers met marktwaarde","Marktwaarde","Leeftijd","Nationaliteit","Contract tot",115,"Beoordeling",166,"jr","Jongste","Oudste","Dun bezette posities","Blessurecentrum",167,"Verwachte terugkeer",168,"Selecteer een tweede speler","Speler vergelijken",120,"Van","Naar",169,"Transfertype","Transfersom","Doelman","Verdediger","Middenvelder","Aanvaller","Van dag tot dag","Ongeveer een week","Enkele dagen","Begin {date}","Midden {date}","Eind {date}","Huur",135,77,78,135,"Beschikbaarheidsradar",163,"Voorspelling op basis van beschikbaarheid en recent gebruik","Officiële wedstrijdselectie","Basisspelers",164,170,"Tijdstip update onbekend","Zojuist bijgewerkt",155,"Automatiseringsvoorbeelden","YAML kopiëren","Opstelling beschikbaar",171,"Speler weer beschikbaar",172,"Wedstrijd begonnen",143,"Rugnummer","Basisplaatsen",173,"Laatste vijf wedstrijden","Basisspeler","Wisselspeler","Datakwaliteit",173,"Officiële selectie",163,170,"Automatiseringen",174,"Favoriete speler","Spelers zoeken","Alle posities","Alle beschikbaarheid","Beschikbaar","Geen spelers gevonden",175,"Ongeslagen","Winstreeks","Clean-sheetreeks",149,119,"Punten thuis","Punten uit","Sinds vorige update",172,171,"Speler beschikbaar","Trainer gewijzigd","Speler toegevoegd","Speler vertrokken","Marktwaarde gewijzigd","Clubprofiel",111,"Kerncijfers",133,"Wijzigingen",174,175,166,165,168,129,26,"Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec",145,115,"Geen topschutters beschikbaar","#","Laden...","Soccer Live — open de editor om deze kaart in te stellen.",'Onbekend kaarttype: "{type}"',176,153,"Sensor niet beschikbaar","Ongeldige configuratie","Entiteit vereist","Laden mislukt","Entiteit reageert niet","Controleer of de integratie actief is","Geen live wedstrijd nu","Commentaar verschijnt hier tijdens een live wedstrijd",128,"Geen wedstrijden gepland in deze periode",177,"ESPN biedt deze data niet voor alle competities","Verkeerd sensortype","Deze kaart verwacht een ander sensortype","Entiteit niet gevonden","Controleer de entiteitsconfiguratie","Geen wedstrijddata","Geen wedstrijd beschikbaar voor deze entiteit","Nog geen statistieken beschikbaar",157,"Nog geen opstelling beschikbaar","Geen vormdata","Geen onderlinge statistieken beschikbaar","Geen vorige wedstrijden gevonden voor deze sensor","Controleer of de Soccer Live integratie actief is","Herstart Home Assistant of controleer de integratie","Geen standendata","Controleer of de competitie al begonnen is","Geen competitiedata","Controleer of het team wedstrijden heeft gepland",177,"Offline — gecachede data","Wacht op de integratie","Wedstrijden ophalen…","De integratie haalt voor het eerst gegevens op","Tijdelijk verzoeklimiet bereikt","De databron beperkt het aantal verzoeken; dit gaat automatisch verder","API-key ongeldig","Voer je API-Football-key opnieuw in via Instellingen → Apparaten & Services","Databron niet bereikbaar","Kon de databron niet bereiken; probeert automatisch opnieuw","Geen entiteiten ingesteld","Voeg minimaal één team-entiteit toe","Mijn Teams",178,"Diagnostiek","Seizoen {season} is nog niet begonnen","tegen","G","Overzicht",31,107,127,125,"Windsnelheid (Beaufort)","Helder","Gedeeltelijk bewolkt","Bewolkt","Mistig","Motregen",179,"Sneeuw","Buien","Onweer","Onbekend weer",89,"Instellingen",180,"Wedstrijdinformatie","Voorspelling en odds",180,"Entiteit","Selecteren…","Koptekst verbergen","Uitzendingen verbergen","Compacte weergave","Gedeeld","Aan","Uit","Seizoenvorm-trend tonen","Vorige wedstrijden tonen","Weer tonen","Voorspellingsdetails tonen","Odds tonen","Afwezigen tonen","Meldingen in kaart tonen","Mijn team (accentueren)",181,"Geen wedstrijden om te tonen","Max. wedstrijden","Archiefstatistieken tonen","Optionele aanvullende sensor","Vult alleen ontbrekende velden van overeenkomende wedstrijden aan; het primaire programma blijft leidend.","Aanvullende sensor automatisch zoeken","Combineert overeenkomende wedstrijden van een andere provider wanneer die rijkere data heeft.","Externe archiefsensor","Standensensor",182,"Seizoensrapport tonen","Extra databronnen","Optionele sensoren, gescheiden door komma’s; iedere bron vult alleen nog ontbrekende velden aan.","Gecombineerde bronnen","Aangevulde velden",183,"Aankomend","Vorige",130,"Competitie tonen","Tekstgrootte","Extra klein",184,185,186,"Minimalistisch","Niets om te tonen",180,181,146,187,147,"Deze weergave wordt niet ondersteund door de gekozen sensor",6,"G","DS","Ptn","bijv. Feyenoord Rotterdam",188,"Uiterlijk","Palet","Standaard","Automatisch (HA-taal)","gedeeld","Achtergrond & watermerk","Stel beide gradient-kleuren in om de gradient toe te passen","Gradienthoek","Watermerk-formaat","Een URL of /local/…-pad, geserveerd door Home Assistant","Gradient van","Gradient naar","Watermerk-afbeelding-URL","Watermerk-transparantie","via","Donker","Licht","Home Assistant-thema","Paars","Rood & wit","Rood & goud","Blauw & rood","Wit & goud","Blauw","Oranje","Zwart & wit","Klassiek (groen)",94,189,"Teamkleuren","Aangepast",96,97,"Achtergrond","Tekst","Kleuren resetten","Geavanceerde kleuren","Laag contrast tussen tekst en achtergrond",9,189,"Oppervlak","Kaart","Secundaire tekst","Scheidingslijn",98,"Taal","Scoregrootte","Teamnaam",188,99,187,"Afbeeldingen verbergen","Max artikelen","Nieuwste eerst","Slimme volgorde (live, komend, uitslagen)","Competitiefilter","Seizoensfilter","Wedstrijdstatus","Thuis / uit",113,114,131,132,162,"Wedstrijdverhaal","Team van de wedstrijd","Openingstreffer","Gelijkmaker","Beslissende treffer",144,"{home} – {away} eindigde in {score}.","{home} – {away} staat nu {score}.","{team} kwam terug van een achterstand.","{team} zorgde voor het meeste gevaar ({value} xG).","{team} domineerde de doelpogingen ({value} schoten).","Data per onderdeel",167,"Verwachting versus werkelijkheid","Verwacht","Werkelijk","Thuiswinst","Gelijkspel","Uitwinst","spelers afwezig","gebruikelijke basislast afwezig","goals en assists afwezig","Standaard groep (optioneel)","Max rijen (0 = alle)","Uitgelicht team (gedeeltelijke naam)","W/G/V/+/- kolommen verbergen","Max teams zichtbaar",101,"Seizoenstotalen tonen","Doelpunten per team tonen","Top N teams (0 = alle)","Onderste N teams (0 = alle)","Live ticker tonen","Afgelopen wedstrijden tonen","Nieuwste wedstrijden eerst","Max evenementen zichtbaar","Max evenementen totaal","Wedstrijden ouder dan (dagen) verbergen","Kaarttitel","Standaard competitie (optioneel)","Stijl","Boom: inclusief Playoffs","Compact (rondes gestapeld)","Groepen sensor (stand)","bijv. sensor.soccer_live_standings_fifa_world","Wedstrijden sensor (schema)","bijv. sensor.soccer_live_all_fifa_world","Max statistieken (standaard 4)","Groepeer op",169,118,"Groep",130,"Lijst (standaard)","Boom (bracket met centrale trofee)","'Afgelopen wedstrijden tonen' moet ingeschakeld zijn.","Beschikbaar voor Champions League, Europa League, Conference League, FIFA Wereldkampioenschap en andere bekercompetities.","Voeg één soccer_live_next_* of soccer_live_all_mixed_* sensor toe per team","Gebruik een soccer_live_all_mixed_* sensor (bevat alle competities voor één team)","Leeg laten voor eerste groep","bijv. Eredivisie","Sensortype","Aanbevolen kaarten","Integratieversie","Integratie is mogelijk verouderd — werk Soccer Live bij voor volledige gegevens en kaartadvies","Soccer Live diagnostiek",89,"Status",115,9,113,103,"Aanvragen","Laatst bijgewerkt","Leeftijd sensor","In orde","Fout",160,68,"Aftellen",112,127,107,178,115,104,"Livewedstrijd","Teamcompetities","Seizoensoverzicht",109,"Kleine stand",110,105,108,"Livecommentaar",176,183,"Alle wedstrijden","Alleen live","Competitiefilter (optioneel)","bijv. WK","Kaart verbergen wanneer leeg","Automatisch scrollen","Scrollsnelheid","Langzaam",185,"Snel",185,186,"Zeer groot"],it:[190,191,192,"Notizie",193,"Capocannonieri",6,194,null,"Archivio partite","Corsa in classifica","Nessun dato della giornata","Scegli un sensore con partite in programma o concluse","In diretta","In programma","Concluse",195,"Nessuna partita archiviata","Le partite concluse vengono salvate localmente dopo un aggiornamento","Cronologia personale","vinte","pareggiate","perse","Stagione","Tutte le stagioni",196,"Tutte le competizioni","Gol fatti–subiti","Porte inviolate","Serie imbattuta","Serie di vittorie","Vittoria più larga","Sconfitta più larga","Avversari più frequenti","Impatto sulla classifica live","Capolista","max","Andamento in classifica","{n} partite rimanenti","{n} precedenti storici aggiunti","Copia esportazione","Ricostruisci","Cancella","Archivio copiato","Impossibile copiare l’archivio","Ricostruzione richiesta","Archivio cancellato","Cancellare definitivamente questo archivio locale?","Importa dagli appunti","Archivio importato","Impossibile importare l’archivio","Sede","Casa e trasferta",197,198,"Risultato","Tutti i risultati","Avversario","Forma mensile","Preparazione partita",199,"Buono","In preparazione","Iniziale","Calcio d’inizio",196,"Stadio","Trasmissione","Meteo","Scontri diretti",200,201,"Assenze",202,"Completezza","Conflitti","Copertura dati","Eccellente","Buona","Parziale","Limitata","Nessuna partita","Errore del provider","Copertura limitata",null,null,null,null,null,null,null,null,"Nessun dato del club","I dati del club appaiono con i sensori squadra API-Football","Rosa","Trasferimenti",null,null,null,null,null,null,"Portieri","Difensori","Centrocampisti","Attaccanti","Fondato {year}","{n} anni","In entrata","In uscita",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Mostra rosa","Mostra trasferimenti",null,null,null,null,null,"Mostra pronostico",null,null,null,null,null,null,null,null,"Max trasferimenti",203,204,"Telecronaca",32,194,205,"Diretta TV","Apri statistiche ESPN","Apri telecronaca ESPN","Apri video ESPN",137,"Semifinali","Quarti di finale","Ottavi di finale","Sedicesimi","Turno dei 64","Terzo posto","Spareggi KO","Turno preliminare","Semi","Quarti","Ottavi","Tabellone non disponibile","La fase a eliminazione diretta inizierà presto","Da def.","Pari aggreg.","Aggreg.",190,"Gironi",195,"Vedi nel calendario","Vinto","Eliminato","Diretta","Finita","Programmata","Termine","FT","Intervallo","Primo Tempo","Secondo Tempo","Inizio","Fine","Tempi supplementari","Inizio supplementari","Intervallo supplementari","2° tempo supplementare","Fine supplementari","Rigori","Inizio rigori","Fine partita",37,"Cartellino giallo","Cartellino rosso","Sostituzione","VAR","Colpo di testa","Tiro",206,"Calcio di punizione","Cartellini","Tutto","V","N","P","Dettagli","Possesso","Tiri","In porta","xG","Falli",203,"Gol","Calci d'angolo","Presenze","Assist tiro","Cartellini gialli",null,null,null,null,null,null,"Cartellini rossi","Fuorigioco","Parate","Tiri bloccati","Passaggi totali","Passaggi riusciti","Tackle","Intercettazioni","Duelli aerei vinti","Gol su punizione","Gol su rigore","spettatori",48,202,193,"Capocannoniere",207,"Prossime partite","Partite precedenti",210,"Forma stagionale","Testa a testa",200,"pt","Indisponibili","Infortunato","Squalificato",211,"+{n} altri","Stima del provider, nessuna garanzia",null,210,"Attacco","Difesa","Linee gol","Totale","Linee gol del bookmaker, non xG","Quote di mercato medie, potrebbero non essere aggiornate","Quote live","Quote live in tempo reale, aggiornate durante la partita",9,201,"Media di {n} bookmaker","Da {n} bookmaker","Gol per partita","Fatti","Subiti",197,198,"partite giocate · gol","gol","Posizione","squadre nascoste","A",208,"Nuova stagione in arrivo",209,"Oggi","Ieri","Domani","ora","tra {n} min","tra {n} h","tra {n} g","{n} min fa","{n} h fa","{n} g fa","giorno","giorni","ore","min","sec","Panchina","Formazioni non disponibili",null,null,"Le formazioni vengono pubblicate poco prima del fischio d'inizio",212,"Gli eventi compaiono durante la partita",213,206,"Nessuna notizia disponibile","{n} articoli",62,63,64,"Retrocessione",65,"Qualificate","Migliori 3°","Eliminate","gironi","squadre","Non iniziato","Campionato","Fase a gironi","Play-off","#",214,"P","V","N","S","+/-","Pt",208,"{n} partite",209,"Chiudi","Rimuovi","Sconosciuto",197,198,"Altro","Dettagli partita",191,192,215,"Nessun evento disponibile",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"aggiornato {n} min fa",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic","Gol",195,"Nessun capocannoniere disponibile","#","Caricamento...","Soccer Live — apri l'editor per configurare questa scheda.",'Tipo di scheda sconosciuto: "{type}"',"Seleziona entità",209,"Sensore non disponibile","Configurazione non valida","Entità obbligatoria","Timeout caricamento","Entità non risponde","Controlla se l'integrazione è attiva","Nessuna partita in diretta","Il commento appare qui durante una partita live","Fuori stagione","Nessuna partita programmata in questo periodo",216,"ESPN non fornisce questi dati per tutte le competizioni","Tipo di sensore errato","Questa card si aspetta un sensore diverso","Entità non trovata","Controlla la configurazione dell'entità","Nessun dato partita","Nessuna partita disponibile per questa entità","Nessuna statistica disponibile",212,"Formazione non ancora disponibile","Nessun dato forma","Nessun dato testa a testa disponibile","Nessuna partita precedente trovata","Verifica che l'integrazione Soccer Live sia attiva","Riavvia Home Assistant o controlla l'integrazione","Nessun dato classifica","Verifica se il campionato è iniziato","Nessun dato competizione","Verifica se la squadra ha partite programmate",216,"Offline — dati in cache","In attesa dell'integrazione",null,null,null,null,null,null,null,null,"Nessuna entità configurata","Aggiungi almeno un'entità squadra","I Miei Team","Forma squadra","Diagnostica","La stagione {season} non è ancora iniziata","contro","P","Panoramica",204,192,202,"H2H","Velocità del vento (Beaufort)","Sereno","Parzialmente nuvoloso","Nuvoloso","Nebbia","Pioggerella","Pioggia",217,"Rovesci","Temporale","Meteo sconosciuto","Sensore","Impostazioni",null,null,null,"Aspetto","Entità","Seleziona…","Nascondi intestazione","Nascondi canali TV","Modalità compatta",null,null,null,"Mostra andamento forma","Mostra partite precedenti","Mostra meteo","Mostra dettagli pronostico","Mostra quote","Mostra indisponibili","Mostra notifiche eventi","La mia squadra (evidenzia)",null,null,"Max. partite","Mostra statistiche archivio","Sensore supplementare opzionale","Completa solo i dati mancanti delle partite corrispondenti; il calendario principale resta autorevole.","Trova automaticamente un sensore supplementare","Combina le partite corrispondenti di un altro provider quando offre dati più ricchi.","Sensore archivio esterno","Sensore classifica","Automatico","Mostra rapporto stagionale","Fonti dati aggiuntive","Sensori opzionali separati da virgole; ogni fonte completa solo i campi mancanti.","Fonti combinate","Campi integrati","Mostra","Prossime",215,"Tutte","Mostra competizione","Dimensione testo","Molto piccolo","Piccolo","Normale",220,93,"Niente da mostrare",218,219,207,193,210,"Esta vista não é compatível com o sensor selecionado",214,"G","DR","Pti","es. Juventus",221,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Lingua","Dimensione punteggio","Nome squadra",221,"Max elementi",193,"Nascondi immagini","Max articoli","Prima i più recenti",null,null,null,null,null,null,null,"Anteprima partita","Analisi post-partita",null,null,null,null,null,null,null,"{home} – {away} è terminata {score}.","{home} – {away} è attualmente {score}.","{team} ha rimontato uno svantaggio.","{team} ha creato più pericoli ({value} xG).","{team} ha dominato i tentativi ({value} tiri).","Dati per sezione","Non disponibile",null,null,null,null,null,null,null,null,null,"Gruppo predefinito (opzionale)","Max righe (0 = tutte)","Evidenzia squadra (nome parziale)","Nascondi colonne V/N/P/+/-","Max squadre visibili","Squadre","Mostra totali stagione","Mostra gol per squadra","Top N squadre (0 = tutte)","Ultime N squadre (0 = tutte)","Mostra ticker live","Mostra partite finite","Prima le partite più recenti","Max eventi visibili","Max eventi totali","Nascondi partite più vecchie di (giorni)","Titolo carta","Competizione predefinita (opzionale)","Stile","Albero: includi Playoff","Compatto (round impilati)","Entità gironi (classifica)","es. sensor.soccer_live_standings_fifa_world","Entità partite (calendario)","es. sensor.soccer_live_all_fifa_world","Max statistiche (default 4)","Raggruppa per",222,196,"Gruppo","Tutti","Lista (predefinita)","Albero (bracket con trofeo centrale)","Funziona solo se 'Mostra partite terminate' è abilitato.","Disponibile per Champions League, Europa League, Conference League, Coppa del Mondo FIFA e altre coppe.","Aggiungi un sensor soccer_live_next_* o soccer_live_all_mixed_* per squadra","Usa un sensor soccer_live_all_mixed_* (contiene tutte le competizioni per una squadra)","Lasciare vuoto per il primo gruppo","es. Serie A","Tipo di sensore","Schede consigliate",null,null,"Diagnostica Soccer Live",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],fr:[223,224,225,"Actualités",226,"Buteurs",6,227,null,"Archive des matchs","Course au classement","Aucune donnée de journée","Choisissez un capteur avec des matchs à venir ou terminés",228,229,"Terminés",230,"Aucun match archivé","Les matchs terminés sont enregistrés localement après une mise à jour","Historique personnel","gagnés","nuls","perdus",231,"Toutes les saisons",232,"Toutes les compétitions","Buts pour–contre","Matchs sans encaisser","Plus longue invincibilité","Plus longue série de victoires","Plus grande victoire","Plus lourde défaite","Adversaires les plus fréquents","Impact sur le classement en direct",16,"max","Évolution au classement","{n} matchs restants","{n} confrontations historiques ajoutées","Copier l’export","Reconstruire","Effacer","Archive copiée","Impossible de copier l’archive","Reconstruction demandée","Archive effacée","Effacer définitivement cette archive locale ?","Importer depuis le presse-papiers","Archive importée","Impossible d’importer l’archive","Lieu","Domicile et extérieur",233,234,"Résultat","Tous les résultats","Adversaire","Forme mensuelle","Préparation du match","Prêt","Bon","En préparation","Précoce","Coup d’envoi",232,"Stade","Diffusion","Météo","Face-à-face",235,236,23,237,"Complétude","Conflits","Couverture des données","Excellente","Bonne","Partielle","Limitée","Aucun match","Erreur du fournisseur","Couverture limitée",null,null,null,null,null,null,null,null,"Aucune donnée du club","Les données du club apparaissent pour les capteurs d'équipe API-Football","Effectif","Transferts",null,null,null,null,null,null,"Gardiens","Défenseurs","Milieux","Attaquants","Fondé {year}","{n} ans","Arrivée","Départ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Afficher l'effectif","Afficher transferts",null,null,null,null,null,"Afficher pronostic",null,null,null,null,null,null,null,null,"Max transferts","Passeurs",31,"Commentaire","Vidéo",227,"Terrain neutre","En direct à la télévision","Ouvrir les stats ESPN","Ouvrir le commentaire ESPN","Ouvrir la vidéo ESPN",137,"Demi-finales","Quarts de finale","Huitièmes de finale","Seizièmes","Tour des 64","Troisième place",238,"Tour préliminaire","Demis","Quarts","8èmes","Tableau non disponible","La phase à élimination directe commencera bientôt","À déf.","Score cumulé égal","Cumul",223,"Groupes",230,"Voir dans le calendrier","Gagné","Éliminé",228,"Terminé","Programmé","Temps régl.","FT","Mi-temps","1ère mi-temps","2ème mi-temps","Coup d'envoi","Fin","Prolongations","Début prolong.","Mi-temps prolong.","2e période prolong.","Fin prolong.","Tirs au but","Début t.a.b.","Fin du match","But","Carton jaune","Carton rouge","Remplacement","VAR","Coup de tête","Tir",38,"Coup franc","Cartons","Tout","V","N","D","Détails",40,"Tirs","Cadrés","xG","Fautes","Passes décisives",239,44,"Présences","Passes tir","Cartons jaunes",null,null,null,null,null,null,"Cartons rouges","Hors-jeux","Arrêts","Tirs bloqués","Passes totales","Passes réussies","Tacles",47,"Duels aériens gagnés","Buts sur coup franc","Buts sur penalty","spectateurs","Bilan",49,226,"Meilleur buteur",240,"Prochains matchs","Matchs précédents",243,"Forme de la saison","Face à face",235,"pts","Absents","Blessé","Suspendu","Favori","+{n} autres","Estimation du fournisseur, sans garantie",null,243,"Attaque","Défense","Lignes de buts",53,"Lignes de buts du bookmaker, pas de xG","Cotes de marché moyennes, peuvent être obsolètes","Cotes live","Cotes en direct, mises à jour pendant le match",9,236,"Moyenne de {n} bookmakers","De {n} bookmaker","Buts par match","Pour","Contre",233,234,"matchs joués · buts","buts",56,"équipes masquées","À",241,"Nouvelle saison bientôt",242,"Aujourd'hui","Hier","Demain","maintenant","dans {n} min","dans {n} h","dans {n} j","il y a {n} min","il y a {n} h","il y a {n} j","jour","jours","hrs","min","sec","Banc","Compositions non disponibles",null,null,"Les compositions sont publiées peu avant le coup d'envoi","Aucun événement","Les événements apparaissent pendant le match","Événement",38,"Aucune actualité disponible",61,62,63,64,"Relégation",65,"Qualifiées","Meilleurs 3es","Éliminées","groupes","équipes","Pas commencé","Saison régulière","Phase de groupes",238,"#",244,"J","G","N","P","+/-","Pts",241,"{n} matchs",242,"Fermer","Supprimer","Inconnu",233,234,"Autre","Détails du match",224,225,"Confrontations","Aucun événement disponible",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"mis à jour il y a {n} min",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Janv","Févr","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc",239,230,"Aucun buteur disponible","#","Chargement...","Soccer Live — ouvrez l'éditeur pour configurer cette carte.","Type de carte inconnu : « {type} »","Sélectionner une entité",242,"Capteur indisponible","Configuration invalide","Entité requise","Délai de chargement dépassé","L'entité ne répond pas","Vérifiez que l'intégration est active","Aucun match en direct","Le commentaire s'affiche ici pendant un match en direct","Hors saison","Aucun match prévu pendant cette période",245,"ESPN ne fournit pas ces données pour toutes les compétitions","Mauvais type de capteur","Cette carte attend un capteur différent","Entité introuvable","Vérifiez la configuration de l'entité","Pas de données de match","Aucun match disponible pour cette entité","Pas encore de statistiques","Pas encore d'événements","Composition pas encore disponible","Pas de données de forme","Aucune donnée face-à-face disponible","Aucun match précédent trouvé","Vérifiez que l'intégration Soccer Live est active","Redémarrez Home Assistant ou vérifiez l'intégration","Pas de données de classement","Vérifiez si la compétition a commencé","Pas de données de compétition","Vérifiez si l'équipe a des matchs programmés",245,"Hors ligne — données en cache","En attente de l'intégration",null,null,null,null,null,null,null,null,"Aucune entité configurée","Ajoutez au moins une entité équipe","Mes Équipes","Forme équipe",88,"La saison {season} n'a pas encore commencé","contre","N","Aperçu",31,225,237,"H2H","Vitesse du vent (Beaufort)","Dégagé","Partiellement nuageux","Nuageux","Brouillard","Bruine","Pluie","Neige","Averses","Orage","Météo inconnue","Capteur","Paramètres",null,null,null,"Apparence","Entité","Sélectionner…","Masquer l'en-tête","Masquer les diffusions TV","Mode compact",null,null,null,"Afficher tendance de forme","Afficher matchs précédents","Afficher météo","Afficher les détails du pronostic","Afficher cotes","Afficher absents","Afficher notifs d'événements","Mon équipe (mettre en avant)",null,null,"Max. matchs","Afficher les statistiques d’archive","Capteur complémentaire facultatif","Complète uniquement les champs manquants des matchs correspondants ; le calendrier principal reste prioritaire.","Trouver automatiquement un capteur complémentaire","Combine les matchs correspondants d’un autre fournisseur lorsqu’il propose des données plus riches.","Capteur d’archive externe","Capteur de classement","Automatique","Afficher le bilan de saison","Sources de données supplémentaires","Capteurs facultatifs séparés par des virgules ; chaque source complète uniquement les champs manquants.","Sources combinées","Champs complétés","Afficher",229,"Précédents",246,"Afficher la compétition","Taille du texte","Très petit","Petit",92,"Grand",93,"Rien à afficher","Vue","Calendrier",240,226,243,"Cette vue n'est pas prise en charge par le capteur sélectionné",244,"J","Diff","Pts","ex. Paris Saint-Germain",247,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Langue","Taille du score","Nom d'équipe",247,"Max éléments",226,"Masquer les images",100,"Plus récents en premier",null,null,null,null,null,null,null,"Avant-match","Après-match",null,null,null,null,null,null,null,"{home} – {away} s’est terminé sur le score de {score}.","{home} – {away} est actuellement à {score}.","{team} a renversé le score.","{team} a créé le plus de danger ({value} xG).","{team} a dominé les tentatives ({value} tirs).","Données par section","Indisponible",null,null,null,null,null,null,null,null,null,"Groupe par défaut (optionnel)","Max lignes (0 = toutes)","Mettre en avant (nom partiel)","Masquer colonnes V/N/D/+/-","Max équipes visibles","Équipes","Afficher totaux saison","Afficher buts par équipe","Top N équipes (0 = toutes)","Dernières N équipes (0 = toutes)","Afficher ticker live","Afficher matchs terminés","Matchs les plus récents d'abord","Max événements visibles","Max événements total","Masquer matchs de plus de (jours)","Titre de la carte","Compétition par défaut (optionnel)",102,"Arbre: inclure Playoffs","Compact (rounds empilés)","Entité groupes (classement)",248,"Entité matchs (calendrier)",249,"Max stats (défaut 4)","Grouper par",76,232,"Groupe",246,"Liste (par défaut)","Arbre (bracket avec trophée central)","Fonctionne uniquement si 'Afficher les matchs terminés' est activé.","Disponible pour la Champions League, l'Europa League, la Conference League, la Coupe du Monde FIFA et d'autres coupes.","Ajoutez un capteur soccer_live_next_* ou soccer_live_all_mixed_* par équipe","Utilisez un capteur soccer_live_all_mixed_* (contient toutes les compétitions pour une équipe)","Laisser vide pour le premier groupe","ex. Ligue 1","Type de capteur","Cartes recommandées",null,null,"Diagnostics Soccer Live",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],es:[250,251,252,"Noticias",253,"Goleadores",6,254,null,"Archivo de partidos","Carrera en la clasificación","No hay datos de la jornada","Elige un sensor con partidos próximos o finalizados","En directo",255,"Finalizados",256,"Aún no hay partidos archivados","Los partidos finalizados se guardan localmente tras una actualización","Historial personal","ganados","empatados","perdidos","Temporada","Todas las temporadas",257,"Todas las competiciones","Goles a favor–en contra","Porterías a cero","Mayor racha invicta","Mayor racha de victorias","Mayor victoria","Mayor derrota","Rivales más frecuentes","Impacto en la tabla en directo",258,259,"Evolución en la tabla","Quedan {n} partidos","{n} enfrentamientos históricos añadidos","Copiar exportación",260,"Borrar","Archivo copiado","No se pudo copiar el archivo","Reconstrucción solicitada","Archivo borrado","¿Borrar definitivamente este archivo local?","Importar desde el portapapeles","Archivo importado","No se pudo importar el archivo","Ubicación","Local y visitante",261,262,263,"Todos los resultados","Rival","Forma mensual","Preparación del partido","Listo","Bien","En preparación",264,"Inicio",257,"Estadio","Emisión","Clima",265,266,267,"Ausencias",268,"Integridad","Conflictos","Cobertura de datos",269,"Buena",270,271,"Sin partidos","Error del proveedor",272,null,null,null,null,null,null,null,null,"Sin datos del club","Los datos del club aparecen con sensores de equipo de API-Football","Plantilla","Fichajes",null,null,null,null,null,null,"Porteros","Defensas","Centrocampistas","Delanteros",273,"{n} a","Llegada","Salida",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Mostrar plantilla","Mostrar fichajes",null,null,null,null,null,"Mostrar pronóstico",null,null,null,null,null,null,null,null,"Máx fichajes",274,31,"Comentario",275,254,"Campo neutral","TV en directo","Abrir estadísticas ESPN","Abrir comentario ESPN",276,33,"Semifinales","Cuartos de final","Octavos de final","Dieciseisavos","Ronda de 64","Tercer lugar","Eliminatorias previas","Ronda preliminar",34,"Cuartos","Octavos","Cuadro no disponible","La fase eliminatoria comenzará pronto","Por def.","Empate global","Global",250,277,256,"Ver en el calendario","Ganado",278,"En vivo","Finalizado",279,33,"FT","Descanso","Primer tiempo","Segundo tiempo","Saque inicial","Fin","Prórroga","Inicio prórroga","Descanso prórroga","2a parte prórroga","Fin prórroga","Penaltis","Inicio penaltis","Fin del partido","Gol","Tarjeta amarilla","Tarjeta roja","Sustitución","VAR","Cabezazo","Disparo",280,"Falta directa","Tarjetas","Todo","V","E","D","Detalles","Posesión","Tiros","Al arco","xG",281,274,282,"Córners","Apariciones","Asistencias de tiro","Tarjetas amarillas",null,null,null,null,null,null,"Tarjetas rojas","Fueras de juego","Paradas","Tiros bloqueados","Pases totales","Pases completados","Entradas","Interceptaciones","Duelos aéreos ganados","Goles de falta","Goles de penalti",283,28,"Formación",253,"Goleador",284,"Próximos partidos","Partidos anteriores",210,"Forma de la temporada","Cara a cara",266,"pts","Bajas",287,"Sancionado",211,"+{n} más","Estimación del proveedor, sin garantía",null,210,288,"Defensa","Líneas de goles",53,"Líneas de goles de la casa, no xG","Cuotas de mercado promediadas, pueden estar desactualizadas","Cuotas en vivo","Cuotas en directo, actualizadas durante el partido",9,267,"Promedio de {n} casas",289,"Goles por partido","A favor","En contra",261,262,"partidos jugados · goles","goles","Posición","equipos ocultos","En",285,"Nueva temporada próximamente",286,"Hoy","Ayer","Mañana","ahora","en {n} min","en {n} h","en {n} d","hace {n} min","hace {n} h","hace {n} d","día","días","hrs","min","seg","Banquillo","Alineaciones no disponibles",null,null,"Las alineaciones se publican poco antes del saque inicial",290,"Los eventos aparecen durante el partido",213,280,"No hay noticias disponibles","{n} artículos",62,63,64,"Descenso",65,"Clasificadas","Mejores 3°","Eliminadas",291,"equipos","No iniciado",292,293,"Eliminatorias","#",294,"PJ","G","E","P","+/-","Pts",285,"{n} partidos",286,"Cerrar","Eliminar","Desconocido",261,262,"Otro","Detalles del partido",251,252,265,"Sin eventos disponibles",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"actualizado hace {n} min",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic",282,256,"No hay goleadores disponibles","#","Cargando...","Soccer Live — abre el editor para configurar esta tarjeta.","Tipo de tarjeta desconocido: «{type}»","Seleccionar entidad",286,"Sensor no disponible","Configuración inválida","Entidad requerida","Tiempo de carga agotado","La entidad no responde","Comprueba si la integración está activa","Sin partido en directo ahora","El comentario aparece aquí durante un partido en vivo","Fuera de temporada","No hay partidos programados en este período",295,"ESPN no proporciona estos datos para todas las competiciones","Tipo de sensor incorrecto","Esta tarjeta espera un sensor diferente","Entidad no encontrada","Revisa la configuración de la entidad","Sin datos de partido","No hay partido disponible para esta entidad","Aún no hay estadísticas",290,"Alineación aún no disponible","Sin datos de forma","No hay datos de enfrentamientos disponibles","No se encontraron partidos anteriores","Comprueba que la integración Soccer Live está activa","Reinicia Home Assistant o comprueba la integración","Sin datos de clasificación","Comprueba si la competición ha comenzado","Sin datos de competición","Comprueba si el equipo tiene partidos programados",295,"Sin conexión — datos en caché","Esperando la integración",null,null,null,null,null,null,null,null,"No hay entidades configuradas","Añade al menos una entidad de equipo","Mis Equipos","Forma del equipo",296,"La temporada {season} no ha comenzado aún","vs","E","Resumen",31,252,268,"H2H","Velocidad del viento (Beaufort)","Despejado",297,298,"Niebla","Llovizna","Lluvia","Nieve","Chubascos","Tormenta","Tiempo desconocido",89,"Ajustes",null,null,null,"Apariencia","Entidad","Seleccionar…","Ocultar encabezado","Ocultar canales de TV",304,null,null,null,"Mostrar tendencia de forma","Mostrar partidos anteriores","Mostrar clima","Mostrar detalles del pronóstico","Mostrar cuotas","Mostrar bajas","Mostrar notificaciones de eventos","Mi equipo (resaltar)",null,null,"Máx. partidos","Mostrar estadísticas del archivo","Sensor complementario opcional","Solo completa campos ausentes de partidos coincidentes; el calendario principal sigue mandando.","Buscar automáticamente un sensor complementario","Combina partidos coincidentes de otro proveedor cuando ofrece datos más completos.","Sensor de archivo externo","Sensor de clasificación",300,"Mostrar informe de temporada","Fuentes de datos adicionales","Sensores opcionales separados por comas; cada fuente solo completa los campos ausentes.","Fuentes combinadas","Campos completados",301,255,302,303,"Mostrar competición","Tamaño del texto","Muy pequeño","Pequeño",92,220,93,"Nada que mostrar",218,219,284,253,210,299,294,"PJ","DG","Pts","ej. Real Madrid",221,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,305,"Tamaño del marcador","Nombre del equipo",221,"Máx elementos",253,"Ocultar imágenes","Máx artículos","Más recientes primero",null,null,null,null,null,null,null,"Previa del partido","Análisis del partido",null,null,null,null,null,null,null,"{home} – {away} terminó {score}.","{home} – {away} va actualmente {score}.","{team} remontó el partido.","{team} creó más peligro ({value} xG).","{team} dominó los intentos ({value} tiros).","Datos por sección","No disponible",null,null,null,null,null,null,null,null,null,"Grupo predeterminado (opcional)","Máx filas (0 = todas)","Resaltar equipo (nombre parcial)","Ocultar columnas V/E/D/+/-","Máx equipos visibles","Equipos","Mostrar totales de temporada","Mostrar goles por equipo","Top N equipos (0 = todos)","Últimos N equipos (0 = todos)","Mostrar ticker en vivo","Mostrar partidos terminados","Partidos más recientes primero","Máx eventos visibles",310,"Ocultar partidos de más de (días)","Título de la tarjeta","Competición predeterminada (opcional)",311,"Árbol: incluir Playoffs","Compacto (rondas apiladas)","Entidad grupos (clasificación)","ej. sensor.soccer_live_standings_fifa_world","Entidad partidos (calendario)","ej. sensor.soccer_live_all_fifa_world","Máx estadísticas (por defecto 4)",306,"Fecha",257,307,303,"Lista (predeterminado)","Árbol (bracket con trofeo central)","Solo funciona si 'Mostrar partidos terminados' está activado.","Disponible para Champions League, Europa League, Conference League, Copa del Mundo FIFA y otras copas.","Agrega un sensor soccer_live_next_* o soccer_live_all_mixed_* por equipo","Usa un sensor soccer_live_all_mixed_* (contiene todas las competiciones de un equipo)","Dejar vacío para el primer grupo","ej. La Liga",308,"Tarjetas recomendadas",null,null,309,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],de:["K.o.-Runde",312,313,"Nachrichten",314,"Torschützen",315,316,null,"Spielarchiv","Tabellenrennen","Keine Spieltagdaten","Wähle einen Sensor mit anstehenden oder beendeten Spielen",9,"Anstehend",317,318,"Noch keine archivierten Spiele","Beendete Spiele werden nach einer Aktualisierung lokal gespeichert","Persönlicher Spielverlauf",116,"unentschieden",117,231,"Alle Saisons",319,"Alle Wettbewerbe","Tore für–gegen","Spiele ohne Gegentor","Längste Serie ungeschlagen","Längste Siegesserie","Höchster Sieg","Höchste Niederlage","Häufigste Gegner","Auswirkung auf die Live-Tabelle","Tabellenführer","max.","Tabellenverlauf","Noch {n} Spiele","{n} historische Duelle hinzugefügt","Export kopieren","Neu aufbauen","Löschen","Archiv kopiert","Archiv konnte nicht kopiert werden","Neuaufbau angefordert","Archiv gelöscht","Dieses lokale Spielarchiv endgültig löschen?","Aus Zwischenablage importieren","Archiv importiert","Archiv konnte nicht importiert werden","Spielort","Heim und auswärts",320,321,"Ergebnis","Alle Ergebnisse","Gegner","Monatsform","Spielvorbereitung","Bereit","Gut","Im Aufbau","Früh",322,319,124,"Übertragung","Wetter",323,324,325,326,327,"Vollständigkeit","Konflikte","Datenabdeckung","Ausgezeichnet","Gut","Teilweise","Begrenzt",328,"Anbieterfehler","Begrenzte Abdeckung",null,null,null,null,null,null,null,null,"Keine Vereinsdaten","Vereinsdaten erscheinen bei API-Football-Teamsensoren","Kader",26,null,null,null,null,null,null,"Torhüter",329,"Mittelfeld",330,"Gegründet {year}","{n} J.","Zugang","Abgang",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Kader anzeigen","Transfers anzeigen",null,null,null,null,null,"Prognose anzeigen",null,null,null,null,null,null,null,null,"Max. Transfers",331,31,"Kommentar",32,316,"Neutraler Platz","Live im TV","ESPN-Statistiken öffnen","ESPN-Kommentar öffnen","ESPN-Video öffnen",137,"Halbfinale","Viertelfinale","Achtelfinale","Sechzehntelfinale","Runde der 64","Dritter Platz","K.o.-Playoffs","Vorrunde","HF","VF","AF","K.o.-Runde nicht verfügbar","Die K.o.-Phase beginnt bald","N.N.","Gleichstand gesamt",332,"K.o.-Baum",333,318,"Im Spielplan anzeigen",140,334,9,317,"Geplant","Endstand","FT","Halbzeit","1. Halbzeit","2. Halbzeit",322,"Ende","Verlängerung","Start Verlängerung","Halbzeit Verlängerung","2. Halbzeit Verl.","Ende Verlängerung","Elfmeterschießen","Start Elfmeter","Spielende","Tor","Gelbe Karte","Rote Karte","Auswechslung","VAR","Kopfball","Schuss",335,"Freistoß","Karten",130,"S","U","N",39,"Ballbesitz","Schüsse","Aufs Tor","xG",41,331,339,"Ecken","Einsätze","Schussvorlagen","Gelbe Karten",null,null,null,null,null,null,"Rote Karten","Abseits","Paraden","Geblockte Schüsse","Pässe gesamt","Pässe angekommen","Zweikämpfe","Abfangen","Luftduelle gewonnen","Freistoßtore","Elfmetertore","Zuschauer","Bilanz",327,314,"Torschützenkönig",336,"Nächste Spiele","Vorherige Spiele",51,"Saisonform",323,324,"Pkt.",326,"Verletzt","Gesperrt","Favorit","+{n} weitere","Schätzung des Anbieters, keine Garantie",null,51,330,329,"Torlinien",332,"Buchmacher-Torlinien, kein xG","Gemittelte Marktquoten, können veraltet sein","Live-Quoten","Live-Quoten, während des Spiels aktualisiert",9,325,"Durchschnitt von {n} Buchmachern","Von {n} Buchmacher","Tore pro Spiel","Geschossen","Kassiert",320,321,"Spiele · Tore",339,56,"Teams ausgeblendet","in",337,"Neue Saison beginnt bald",338,"Heute","Gestern",154,"jetzt","in {n} Min.","in {n} Std.","in {n} T.","vor {n} Min.","vor {n} Std.","vor {n} T.","Tag","Tage","Std","Min","Sek",156,"Aufstellungen nicht verfügbar",null,null,"Aufstellungen werden kurz vor Anstoß veröffentlicht",340,"Ereignisse erscheinen während des Spiels","Ereignis",335,"Keine Nachrichten verfügbar","{n} Artikel",62,158,159,"Abstieg",65,"Qualifiziert","Bester 3.",334,333,101,"Nicht gestartet","Reguläre Saison","Gruppenphase",67,"#",315,"Sp","S","U","N","+/-","Pkt",337,"{n} Spiele",338,"Schließen","Entfernen","Unbekannt",320,321,"Sonstige","Spieldetails",312,313,323,"Keine Ereignisse verfügbar",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"vor {n} Min. aktualisiert",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",339,318,"Keine Torschützen verfügbar","#","Wird geladen...","Soccer Live — öffne den Editor um diese Karte einzurichten.","Unbekannter Kartentyp: „{type}“","Entität auswählen",338,"Sensor nicht verfügbar","Ungültige Konfiguration","Entität erforderlich","Ladetimeout","Entität antwortet nicht","Prüfe ob die Integration aktiv ist","Kein Live-Spiel gerade","Kommentar erscheint hier während eines Live-Spiels",328,"Keine Spiele in diesem Zeitraum geplant",341,"ESPN stellt diese Daten nicht für alle Wettbewerbe bereit","Falscher Sensortyp","Diese Karte erwartet einen anderen Sensor","Entität nicht gefunden","Entitätskonfiguration prüfen","Keine Spieldaten","Kein Spiel für diese Entität verfügbar","Noch keine Statistiken",340,"Aufstellung noch nicht verfügbar","Keine Formdaten","Keine direkten Vergleiche verfügbar","Keine früheren Spiele für diesen Sensor gefunden","Prüfe ob die Soccer Live Integration aktiv ist","Home Assistant neu starten oder Integration prüfen","Keine Tabellendaten","Prüfe ob die Saison bereits begonnen hat","Keine Wettbewerbsdaten","Prüfe ob das Team Spiele geplant hat",341,"Offline — zwischengespeicherte Daten","Warten auf die Integration",null,null,null,null,null,null,null,null,"Keine Entitäten konfiguriert","Mindestens eine Team-Entität hinzufügen","Meine Teams","Teamform","Diagnose","Saison {season} hat noch nicht begonnen","gegen","U","Übersicht","Statistiken","Zeitlinie",327,"H2H","Windgeschwindigkeit (Beaufort)","Klar","Teilweise bewölkt","Bewölkt","Neblig","Nieselregen",179,"Schnee","Schauer","Gewitter","Unbekanntes Wetter",89,"Einstellungen",null,null,null,"Darstellung","Entität","Auswählen…","Kopfzeile ausblenden","TV-Sender ausblenden","Kompaktmodus",null,null,null,"Saisonform anzeigen","Vorherige Spiele anzeigen","Wetter anzeigen","Prognosedetails anzeigen","Quoten anzeigen","Ausfälle anzeigen","Ereignis-Benachrichtigungen anzeigen","Mein Team (hervorheben)",null,null,"Max. Spiele","Archivstatistiken anzeigen","Optionaler Ergänzungssensor","Ergänzt nur fehlende Felder passender Spiele; der primäre Spielplan bleibt maßgeblich.","Ergänzungssensor automatisch finden","Kombiniert passende Spiele eines anderen Anbieters, wenn dort reichhaltigere Daten vorliegen.","Externer Archivsensor","Tabellensensor",182,"Saisonbericht anzeigen","Zusätzliche Datenquellen","Optionale, kommagetrennte Sensoren; jede Quelle ergänzt nur noch fehlende Felder.","Kombinierte Quellen","Ergänzte Felder","Anzeigen","Kommend","Vergangen",130,"Wettbewerb zeigen","Textgröße","Sehr klein",184,92,"Groß",93,"Nichts anzuzeigen","Ansicht","Spielplan",336,314,51,"Diese Ansicht wird vom ausgewählten Sensor nicht unterstützt",68,"Sp","TD","Pkt","z.B. Bayern München",342,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Sprache","Ergebnisgröße","Teamname",342,"Max Elemente","Rangliste","Bilder ausblenden","Max Artikel","Neueste zuerst",null,null,null,null,null,null,null,"Spielvorschau","Spielnachbericht",null,null,null,null,null,null,null,"{home} – {away} endete {score}.","{home} – {away} steht aktuell {score}.","{team} drehte einen Rückstand.","{team} erzeugte die größte Gefahr ({value} xG).","{team} dominierte die Abschlüsse ({value} Schüsse).","Daten nach Bereich","Nicht verfügbar",null,null,null,null,null,null,null,null,null,"Standardgruppe (optional)","Max Zeilen (0 = alle)","Team hervorheben (Teilname)","S/U/N/+/- Spalten ausblenden","Max Teams sichtbar",101,"Saisontotals anzeigen","Tore pro Team anzeigen","Top N Teams (0 = alle)","Letzte N Teams (0 = alle)","Live-Ticker anzeigen","Beendete Spiele anzeigen","Neueste Spiele zuerst","Max Ereignisse sichtbar","Max Ereignisse gesamt","Spiele älter als (Tage) ausblenden","Kartentitel","Standardwettbewerb (optional)","Stil","Baum: Playoffs einschließen","Kompakt (Runden gestapelt)","Gruppen-Sensor (Tabelle)","z.B. sensor.soccer_live_standings_fifa_world","Spiele-Sensor (Spielplan)","z.B. sensor.soccer_live_all_fifa_world","Max Statistiken (Standard 4)","Gruppieren nach",169,319,"Gruppe",130,"Liste (Standard)","Baum (Bracket mit zentraler Trophäe)","'Beendete Spiele anzeigen' muss aktiviert sein.","Verfügbar für Champions League, Europa League, Conference League, FIFA Weltmeisterschaft und andere Pokalwettbewerbe.","Füge einen soccer_live_next_* oder soccer_live_all_mixed_* Sensor pro Team hinzu","Verwende einen soccer_live_all_mixed_* Sensor (enthält alle Wettbewerbe für ein Team)","Leer lassen für erste Gruppe","z.B. Bundesliga","Sensortyp","Empfohlene Karten",null,null,"Soccer Live Diagnose",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],pt:[343,344,192,"Notícias",345,"Artilheiros","Clube",254,null,"Arquivo de jogos","Corrida na classificação","Sem dados da jornada","Escolha um sensor com jogos futuros ou terminados",346,255,"Terminados",347,"Ainda não há jogos arquivados","Os jogos terminados são guardados localmente após uma atualização","Histórico pessoal","vitórias","empates","derrotas","Época","Todas as épocas",348,"Todas as competições","Golos marcados–sofridos","Jogos sem sofrer","Maior série invicta","Maior série de vitórias","Maior vitória","Maior derrota","Adversários mais frequentes","Impacto na tabela ao vivo",258,259,"Evolução na classificação","Faltam {n} jogos","{n} confrontos históricos adicionados","Copiar exportação",260,"Limpar","Arquivo copiado","Não foi possível copiar o arquivo","Reconstrução solicitada","Arquivo limpo","Limpar permanentemente este arquivo local?","Importar da área de transferência","Arquivo importado","Não foi possível importar o arquivo",261,"Casa e fora",197,349,263,"Todos os resultados","Adversário","Forma mensal","Preparação do jogo",199,"Bom","Em preparação",264,"Início",348,"Estádio","Transmissão","Tempo","Confrontos",350,22,"Ausências","Onze inicial","Completude","Conflitos","Cobertura de dados",269,"Boa",270,271,"Sem jogos","Erro do fornecedor",272,null,null,null,null,null,null,null,null,"Sem dados do clube","Os dados do clube aparecem nos sensores de equipa API-Football","Plantel","Transferências",null,null,null,null,null,null,"Guarda-redes",351,"Médios","Atacantes",273,"{n} anos","Entrada","Saída",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Mostrar plantel","Mostrar transferências",null,null,null,null,null,"Mostrar previsão",null,null,null,null,null,null,null,null,"Máx transferências",352,353,"Comentário",275,254,205,"TV ao vivo","Abrir estatísticas ESPN","Abrir comentário ESPN",276,33,"Meias-finais","Quartas de final","Oitavas de final","Avos de final","Rodada dos 64","Terceiro lugar","Pré-eliminatórias","Fase preliminar",34,"Quartas","Oitavas","Chave não disponível","A fase eliminatória começa em breve","A def.","Empate no agregado","Agregado",343,277,347,"Ver no calendário","Ganhou",278,346,"Encerrado",279,"Tempo normal","FT","Intervalo","1º tempo","2º tempo","Pontapé inicial","Fim","Prorrogação","Início prorrogação","Intervalo prorrogação","2° tempo prorrog.","Fim prorrogação","Pênaltis","Início pênaltis","Fim da partida","Gol","Cartão amarelo","Cartão vermelho","Substituição","VAR","Cabeçada","Chute",354,"Falta","Cartões",303,"V","E","D","Detalhes","Posse","Chutes","No gol","xG",281,352,"Golos","Cantos","Presenças","Assist de remate","Cartões amarelos",null,null,null,null,null,null,"Cartões vermelhos","Foras de jogo",351,"Remates bloqueados","Total de passes","Passes concluídos","Desarmes","Interceções","Duelos aéreos ganhos","Golos de falta","Golos de penálti",283,134,"Formação",345,"Artilheiro",355,"Próximos jogos","Jogos anteriores",210,"Forma na temporada",356,350,"pts","Desfalques",287,"Suspenso",211,"+{n} mais","Estimativa do fornecedor, sem garantia",null,210,288,"Defesa","Linhas de gols",53,"Linhas de gols da casa, não xG","Cotações médias de mercado, podem estar desatualizadas","Odds ao vivo","Odds ao vivo, atualizadas durante a partida",9,"Cotações","Média de {n} casas",289,"Golos por jogo","Marcados","Sofridos",197,349,"jogos disputados · gols","gols","Posição","times ocultos","em",357,"Nova temporada em breve",358,"Hoje","Ontem","Amanhã","agora","em {n} min","em {n} h","em {n} d","há {n} min","há {n} h","há {n} d","dia","dias","hrs","min","seg","Banco","Escalações não disponíveis",null,null,"As escalações são publicadas pouco antes do início",359,"Os eventos aparecem durante o jogo",213,354,"Sem notícias disponíveis","{n} artigos",62,158,159,"Rebaixamento",65,"Classificado","Melhores 3°",278,291,"times","Não iniciado",292,293,"Eliminatórias","#","Time","J","V","E","D","+/-","Pts",357,"{n} jogos",358,"Fechar","Remover","Desconhecido",197,349,"Outro","Detalhes do jogo",344,192,356,"Sem eventos disponíveis",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"atualizado há {n} min",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez","Gols",347,"Nenhum artilheiro disponível","#","Carregando...","Soccer Live — abra o editor para configurar este cartão.","Tipo de cartão desconhecido: “{type}”","Selecionar entidade",358,"Sensor indisponível","Configuração inválida","Entidade obrigatória","Tempo de carregamento esgotado","Entidade não responde","Verifique se a integração está ativa","Sem jogo ao vivo agora","O comentário aparece aqui durante um jogo ao vivo","Fora de temporada","Nenhum jogo agendado neste período",360,"ESPN não fornece esses dados para todas as competições","Tipo de sensor incorreto","Este cartão espera um sensor diferente","Entidade não encontrada","Verifique a configuração da entidade","Sem dados de jogo","Nenhum jogo disponível para esta entidade","Ainda sem estatísticas",359,"Escalação ainda não disponível","Sem dados de forma","Sem dados de confronto disponíveis","Nenhum jogo anterior encontrado","Verifique se a integração Soccer Live está ativa","Reinicie o Home Assistant ou verifique a integração","Sem dados de classificação","Verifique se a competição já começou","Sem dados de competição","Verifique se a equipa tem jogos agendados",360,"Offline — dados em cache","À espera da integração",null,null,null,null,null,null,null,null,"Nenhuma entidade configurada","Adicione pelo menos uma entidade de equipa","Meus Times","Forma da equipa",296,"A temporada {season} ainda não começou","contra","E","Resumo",353,192,"Escalação","H2H","Velocidade do vento (Beaufort)","Céu limpo",297,298,"Nevoeiro","Chuvisco","Chuva",217,"Aguaceiros","Trovoada","Tempo desconhecido",89,"Definições",null,null,null,"Aparência","Entidade","Selecionar…","Ocultar cabeçalho","Ocultar canais de TV",304,null,null,null,"Mostrar tendência de forma","Mostrar jogos anteriores","Mostrar tempo","Mostrar detalhes da previsão","Mostrar odds","Mostrar desfalques","Mostrar notificações de eventos","A minha equipa (destaque)",null,null,"Máx. jogos","Mostrar estatísticas do arquivo","Sensor complementar opcional","Preenche apenas campos em falta de jogos correspondentes; o calendário principal continua prioritário.","Encontrar automaticamente um sensor complementar","Combina jogos correspondentes de outro fornecedor quando este oferece dados mais completos.","Sensor de arquivo externo","Sensor de classificação",300,"Mostrar relatório da época","Fontes de dados adicionais","Sensores opcionais separados por vírgulas; cada fonte preenche apenas campos em falta.","Fontes combinadas","Campos complementados",301,255,302,303,"Mostrar competição","Tamanho do texto","Muito pequeno","Pequeno",92,220,93,"Nada a mostrar",218,"Calendário",355,345,210,299,"Equipa","J","DG","Pts","ex. Benfica",221,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,305,"Tamanho do marcador","Nome da equipa",221,"Máx itens",345,"Ocultar imagens","Máx artigos","Mais recentes primeiro",null,null,null,null,null,null,null,"Antevisão do jogo","Análise do jogo",null,null,null,null,null,null,null,"{home} – {away} terminou {score}.","{home} – {away} está atualmente {score}.","{team} recuperou de uma desvantagem.","{team} criou mais perigo ({value} xG).","{team} dominou as tentativas ({value} remates).","Dados por secção","Não disponível",null,null,null,null,null,null,null,null,null,"Grupo predefinido (opcional)","Máx linhas (0 = todas)","Destaque equipa (nome parcial)","Ocultar colunas V/E/D/+/-","Máx equipas visíveis","Equipas","Mostrar totais da época","Mostrar golos por equipa","Top N equipas (0 = todas)","Últimas N equipas (0 = todas)","Mostrar ticker ao vivo","Mostrar jogos terminados","Jogos mais recentes primeiro","Máx eventos visíveis",310,"Ocultar jogos com mais de (dias)","Título do cartão","Competição predefinida (opcional)",311,"Árvore: incluir Playoffs","Compacto (rondas empilhadas)","Entidade grupos (classificação)",248,"Entidade jogos (calendário)",249,"Máx estatísticas (padrão 4)",306,222,348,307,303,"Lista (padrão)","Árvore (bracket com troféu central)","Só funciona se 'Mostrar jogos terminados' estiver ativado.","Disponível para Champions League, Europa League, Conference League, Copa do Mundo FIFA e outras copas.","Adicione um sensor soccer_live_next_* ou soccer_live_all_mixed_* por equipa","Use um sensor soccer_live_all_mixed_* (contém todas as competições de uma equipa)","Deixar vazio para o primeiro grupo","ex. Primeira Liga",308,"Cartões recomendados",null,null,309,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},r=["en","it","fr","es","nl","de","pt"];function o(e,t){const a=[];t&&"string"==typeof t.language&&a.push(t.language);const i=t&&(t.entity||t.entities&&t.entities[0]),s=i&&e&&e.states&&e.states[i]&&e.states[i].attributes&&e.states[i].attributes.card_defaults;s&&"string"==typeof s.language&&a.push(s.language),e&&e.locale&&e.locale.language&&a.push(e.locale.language),e&&e.language&&a.push(e.language);for(const e of a){if(!e)continue;const t=String(e).toLowerCase().split("-")[0];if(r.includes(t))return t}return"en"}function l(e,t,a){const r=i[e];if(void 0===r)return e;let o=(n[t]||n.en)[r];if(null==o&&(o=n.en[r]),null==o)return e;let l="number"==typeof o?s[o]:o;return a&&Object.keys(a).forEach(e=>{l=l.replace(new RegExp("\\{"+e+"\\}","g"),a[e])}),l}const c={nl:"nl-NL",de:"de-DE",fr:"fr-FR",it:"it-IT",es:"es-ES",pt:"pt-PT",en:"en-GB"};function d(e){if(!e||"N/A"===e)return null;const t=String(e).match(/^(\d{2})[-/](\d{2})[-/](\d{4})(?:\s+(\d{2}):(\d{2}))?/);if(t){const e=new Date(+t[3],+t[2]-1,+t[1],+(t[4]||0),+(t[5]||0));return Number.isFinite(e.getTime())?e:null}const a=new Date(e);return Number.isFinite(a.getTime())?a:null}function p(e){const t=d(e);return t?t.getTime():0}function h(e,t){if(!e)return"";const a=e.match(/^(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2})$/);if(!a)return e;const[,i,s,n,r,o]=a,l=d(e);if(!l)return e;const p=new Date,h=`${r}:${o}`;if(l.getDate()===p.getDate()&&l.getMonth()===p.getMonth()&&l.getFullYear()===p.getFullYear())return h;const u=c[t]||"en-GB";try{return`${new Intl.DateTimeFormat(u,{day:"numeric",month:"numeric"}).format(l)} ${h}`}catch(e){return`${+i}/${+s} ${h}`}}function u(e,t){if(!e)return"";const a=d(e);if(!a)return e.split(" ")[0]||e;const i=c[t]||"en-GB";try{return new Intl.DateTimeFormat(i,{day:"numeric",month:"short"}).format(a)}catch(t){const a=e.match(/^(\d{2})-(\d{2})-(\d{4})/);return a?`${+a[1]}/${+a[2]}`:e}}function g(e,t){if(!e)return"";const a=e.match(/^(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2})$/);if(!a)return e;const[,i,s,n,r,o]=a,l=d(e);if(!l)return e;const p=c[t]||"en-GB";try{return`${new Intl.DateTimeFormat(p,{day:"2-digit",month:"2-digit",year:"numeric"}).format(l)} ${r}:${o}`}catch(t){return e}}},2909(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(7554),o=a(4522),l=a(2549);class c extends i.WF{static properties={hass:{},_config:{},_season:{type:String},_competition:{type:String},_notice:{type:String},_location:{type:String},_result:{type:String},_opponent:{type:String}};constructor(){super(),this._season="",this._competition="",this._notice="",this._location="",this._result="",this._opponent=""}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e)}static getConfigElement(){return document.createElement("soccer-live-insights-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_",card_type:"archive"}}getCardSize(){return 5}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_team(e,t){if(this._config.team_name||t.team_name)return this._config.team_name||t.team_name;const a={};return e.forEach(e=>[e.home_team,e.away_team].filter(Boolean).forEach(e=>a[e]=(a[e]||0)+1)),Object.entries(a).sort((e,t)=>t[1]-e[1])[0]?.[0]||""}async _copyArchive(e){try{await navigator.clipboard.writeText(JSON.stringify({version:1,matches:e},null,2)),this._notice=this._t("archive.copied")}catch(e){this._notice=this._t("archive.copy_failed")}}async _callArchiveService(e,t){this.hass?.callService&&(await this.hass.callService("soccer_live",e,{...t.config_entry_id?{config_entry_id:t.config_entry_id}:{}}),this._notice=this._t("archive."+("rebuild_match_archive"===e?"rebuilt":"cleared")))}async _clearArchive(e){window.confirm(this._t("archive.clear_confirm"))&&await this._callArchiveService("clear_match_archive",e)}async _importArchive(e){try{const t=await navigator.clipboard.readText();if(!t)throw new Error("empty");await this.hass.callService("soccer_live","import_match_archive",{...e.config_entry_id?{config_entry_id:e.config_entry_id}:{},archive:t}),this._notice=this._t("archive.imported")}catch(e){this._notice=this._t("archive.import_failed")}}_archiveMatches(e){const t=Array.isArray(e.match_archive)?e.match_archive:[],a=this._config.archive_entity?this.hass.states[this._config.archive_entity]:null,i=(0,l.V1)(a),s=new Map;return[...t,...Array.isArray(i)?i:[]].forEach(e=>{const t=(0,l.XS)(e);if(!t||!t.home_team||!t.away_team)return;const a=String(t.event_id||[t.date_iso||t.date,t.home_team,t.away_team].join("|"));s.has(a)||s.set(a,t)}),[...s.values()].sort((e,t)=>String(t.date_iso||t.date||"").localeCompare(String(e.date_iso||e.date||"")))}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return(0,o.PA)("!",this._t("ui.entity_not_found"),this._config.entity,this._t("ui.check_entity_config"));const t=e.attributes||{},a=this._archiveMatches(t),r=this._team(a,t),c=(0,l.sc)(a,r,this._season,this._competition,{location:this._location,result:this._result,opponent:this._opponent}),d=c.matches.slice(0,Number(this._config.max_matches||20)),p=c.stats;return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <main>
          <header><div><small>${this._t("card.archive")}</small><h2>${this._config.title||this._t("archive.personal")}</h2></div><b>${c.matches.length}</b></header>
          ${a.length?i.qy`<div class="filters">
            <label>${this._t("archive.season")}<select @change=${e=>{this._season=e.target.value}}>
              <option value="">${this._t("archive.all_seasons")}</option>
              ${c.seasons.map(e=>i.qy`<option value=${e} ?selected=${e===this._season}>${e}</option>`)}
            </select></label>
            <label>${this._t("archive.competition")}<select @change=${e=>{this._competition=e.target.value}}>
              <option value="">${this._t("archive.all_competitions")}</option>
              ${c.competitions.map(e=>i.qy`<option value=${e} ?selected=${e===this._competition}>${e}</option>`)}
            </select></label>
            <label>${this._t("archive.location")}<select @change=${e=>{this._location=e.target.value}}>
              <option value="">${this._t("archive.all_locations")}</option>
              <option value="home" ?selected=${"home"===this._location}>${this._t("archive.home")}</option>
              <option value="away" ?selected=${"away"===this._location}>${this._t("archive.away")}</option>
            </select></label>
            <label>${this._t("archive.result")}<select @change=${e=>{this._result=e.target.value}}>
              <option value="">${this._t("archive.all_results")}</option>
              <option value="w" ?selected=${"w"===this._result}>${this._t("archive.won")}</option>
              <option value="d" ?selected=${"d"===this._result}>${this._t("archive.drawn")}</option>
              <option value="l" ?selected=${"l"===this._result}>${this._t("archive.lost")}</option>
            </select></label>
            <label class="opponent">${this._t("archive.opponent")}<input .value=${this._opponent} @input=${e=>{this._opponent=e.target.value}}></label>
          </div>
          <div class="summary"><span class="w">${p.won} ${this._t("archive.won")}</span><span class="d">${p.drawn} ${this._t("archive.drawn")}</span><span class="l">${p.lost} ${this._t("archive.lost")}</span><span>${p.win_percentage}%</span></div>`:""}
          ${!1!==this._config.show_archive_stats?i.qy`<div class="stats">
            <span><b>${p.goals_for}–${p.goals_against}</b><small>${this._t("archive.goals")}</small></span>
            <span><b>${p.clean_sheets}</b><small>${this._t("archive.clean_sheets")}</small></span>
            <span><b>${p.longest_unbeaten}</b><small>${this._t("archive.unbeaten")}</small></span>
            <span><b>${p.longest_winning}</b><small>${this._t("archive.winning_streak")}</small></span>
          </div>`:""}
          ${c.monthly.length>1?i.qy`<div class="trend" aria-label=${this._t("archive.monthly_form")}>
            ${c.monthly.map(e=>{const t=Math.max(1,3*e.matches),a=3*e.won+e.drawn;return i.qy`<span title="${e.month}: ${a}/${t}"><i style="height:${Math.max(8,Math.round(a/t*100))}%"></i><small>${e.month.slice(5)}</small></span>`})}
          </div>`:""}
          ${c.seasonComparison.length>1?i.qy`<div class="season-compare">
            ${c.seasonComparison.map(e=>i.qy`<span><b>${e.season}</b><small>${e.win_percentage}% · ${e.goals_for}–${e.goals_against}</small></span>`)}
          </div>`:""}
          ${!1!==this._config.show_season_report&&c.stats.matches?i.qy`
            <div class="report-grid">
              ${c.homeAway.map(e=>i.qy`<span><small>${this._t(`archive.${e.location}`)}</small><b>${e.win_percentage}%</b><em>${e.won}-${e.drawn}-${e.lost}</em></span>`)}
              ${c.biggestWin?i.qy`<span><small>${this._t("archive.biggest_win")}</small><b>${c.biggestWin.result.own}–${c.biggestWin.result.other}</b><em>${c.biggestWin.result.opponent}</em></span>`:""}
              ${c.biggestLoss?i.qy`<span><small>${this._t("archive.biggest_loss")}</small><b>${c.biggestLoss.result.own}–${c.biggestLoss.result.other}</b><em>${c.biggestLoss.result.opponent}</em></span>`:""}
            </div>
            ${c.commonOpponents.length?i.qy`<div class="opponents"><small>${this._t("archive.common_opponents")}</small>${c.commonOpponents.slice(0,5).map(e=>i.qy`<span>${e.name}<b>${e.matches}</b></span>`)}</div>`:""}
          `:""}
          <div class="actions">
            <button @click=${()=>this._copyArchive(a)}>⧉ ${this._t("archive.copy")}</button>
            ${t.config_entry_id?i.qy`
              <button @click=${()=>this._importArchive(t)}>⇩ ${this._t("archive.import")}</button>
              <button @click=${()=>this._callArchiveService("rebuild_match_archive",t)}>↻ ${this._t("archive.rebuild")}</button>
              <button class="danger" @click=${()=>this._clearArchive(t)}>× ${this._t("archive.clear")}</button>
            `:""}
          </div>
          ${this._notice?i.qy`<p class="notice">${this._notice}</p>`:""}
          ${a.length?"":i.qy`<div class="empty"><b>🗄️ ${this._t("archive.empty")}</b><small>${this._t("archive.empty_hint")}</small></div>`}
          <section>${d.map(e=>i.qy`
            <article>
              <time>${(0,s.iS)(e.date||e.date_iso,(0,s.$c)(this.hass,this._config))}</time>
              <div><span>${e.home_team}</span><span>${e.away_team}</span></div>
              <strong class=${(e=>(0,l.c3)(e,r)?.code||"d")(e)}>${e.home_score??"-"}–${e.away_score??"-"}</strong>
              <small>${e.competition_name||e.league_name||e.provider||""}</small>
            </article>
          `)}</section>
        </main>
      </ha-card>
    `}static styles=[n.G,r.M,i.AH`ha-card{position:relative;overflow:hidden;border-radius:20px;background:var(--cl-bg);color:var(--cl-text)}main{position:relative;z-index:1;padding:16px}header{display:flex;justify-content:space-between;align-items:center}header small{color:var(--cl-text-2);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}h2{margin:3px 0 0;font-size:17px}header b{display:grid;place-items:center;min-width:32px;height:32px;border-radius:50%;background:var(--cl-accent-soft);color:var(--cl-accent)}.filters{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:12px 0}.filters label{display:grid;gap:3px;color:var(--cl-text-2);font-size:8px;text-transform:uppercase}.filters select,.filters input{box-sizing:border-box;min-width:0;width:100%;padding:7px;border:1px solid var(--cl-divider);border-radius:8px;background:var(--cl-surface);color:var(--cl-text);font-size:9px}.filters .opponent{grid-column:1/3}.summary{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}.summary span{padding:5px 8px;border-radius:8px;background:var(--cl-chip-bg);font-size:9px;font-weight:800}.w{color:var(--cl-green)}.l{color:var(--cl-live)}.d{color:var(--cl-text-2)}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px}.stats span{padding:7px 4px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface);text-align:center}.stats b{display:block;color:var(--cl-accent);font-size:13px}.stats small{display:block;margin-top:2px;color:var(--cl-text-2);font-size:7px;text-transform:uppercase}.actions{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}.actions button{padding:6px 8px;border:1px solid var(--cl-divider);border-radius:8px;background:var(--cl-chip-bg);color:var(--cl-text-2);font:inherit;font-size:8px;cursor:pointer}.actions button.danger{color:var(--cl-live)}.notice{margin:4px 0 8px;color:var(--cl-accent);font-size:8px}.empty{display:grid;gap:5px;padding:18px 10px;text-align:center;color:var(--cl-text-2)}.empty b{color:var(--cl-text);font-size:11px}.empty small{font-size:8px}.trend{display:flex;align-items:end;height:58px;gap:5px;margin:10px 0;padding:8px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface)}.trend span{display:grid;grid-template-rows:1fr auto;align-items:end;flex:1;height:100%;text-align:center}.trend i{display:block;min-height:5px;border-radius:4px 4px 1px 1px;background:linear-gradient(var(--cl-accent),var(--cl-accent-2))}.trend small{font-size:6px;color:var(--cl-text-2)}.season-compare{display:flex;gap:5px;overflow:auto;margin:8px 0}.season-compare span{min-width:86px;padding:7px;border-radius:8px;background:var(--cl-chip-bg)}.season-compare b,.season-compare small{display:block;font-size:8px}.season-compare small{color:var(--cl-text-2);margin-top:2px}.report-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin:9px 0}.report-grid span{display:grid;grid-template-columns:1fr auto;gap:2px;padding:8px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface)}.report-grid small{color:var(--cl-text-2);font-size:7px;text-transform:uppercase}.report-grid b{color:var(--cl-accent);font-size:12px}.report-grid em{grid-column:1/-1;color:var(--cl-text-2);font-size:8px;font-style:normal}.opponents{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}.opponents>small{width:100%;color:var(--cl-text-2);font-size:7px;text-transform:uppercase}.opponents span{padding:5px 7px;border-radius:99px;background:var(--cl-chip-bg);font-size:8px}.opponents b{margin-left:5px;color:var(--cl-accent)}section{border-top:1px solid var(--cl-divider)}article{display:grid;grid-template-columns:48px 1fr auto;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid var(--cl-divider)}article time,article small{font-size:8px;color:var(--cl-text-2)}article div{display:grid;gap:2px;font-size:10px}article strong{font-size:12px}article small{grid-column:2/4}@media(max-width:380px){.stats{grid-template-columns:repeat(2,1fr)}}`]}customElements.get("soccer-live-archive")||customElements.define("soccer-live-archive",c)},3615(e,t,a){a.r(t);var i=a(3957),s=a(2007),n=a(5186),r=a(2738);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},standingsEntities:{type:Array},matchesEntities:{type:Array}}}constructor(){super(),this.entities=[],this.standingsEntities=[],this.matchesEntities=[]}static get styles(){return i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select,input[type="text"]{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}.hint{font-size:12px;color:var(--secondary-text-color);}`}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;if(this._config[a]!==i)if(""===i){const e={...this._config};delete e[a],this._fireConfigChanged(e)}else this._fireConfigChanged({...this._config,[a]:i})}_textChanged(e){if(!this._config)return;const t=e.target,a=t.dataset.configValue,i=t.value;if(this._config[a]!==i)if(""===i){const e={...this._config};delete e[a],this._fireConfigChanged(e)}else this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_bracket")||e.includes("soccer_live_bracket")).sort(),this.standingsEntities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_standings")||e.includes("soccer_live_standings")).sort(),this.matchesEntities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_all")||e.includes("soccer_live_all")).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
          <div class="hint" style="margin-top: 4px;">${this._t("editor.hint_bracket_competitions")}</div>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("editor.style")}</label>
          <select data-config-value="style" @change=${this._selectChanged}>
            <option value="list" ?selected=${"tree"!==this._config.style}>${this._t("editor.style_list")}</option>
            <option value="tree" ?selected=${"tree"===this._config.style}>${this._t("editor.style_tree")}</option>
          </select>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        ${"tree"!==this._config.style?i.qy`
          <div class="option">
            <label>${this._t("editor.bracket_compact")}</label>
            <ha-switch
              .checked=${!0===this._config.compact}
              data-config-value="compact"
              @change=${this._switchChanged}
            ></ha-switch>
          </div>
        `:""}
        ${"tree"===this._config.style?i.qy`
          <div class="option">
            <label>${this._t("editor.tree_playoffs")}</label>
            <ha-switch
              .checked=${!0===this._config.tree_show_playoffs}
              data-config-value="tree_show_playoffs"
              @change=${this._switchChanged}
            ></ha-switch>
          </div>
        `:""}
        <div>
          <label class="field-label">${this._t("editor.my_team")}</label>
          <input type="text"
            data-config-value="my_team"
            .value=${this._config.my_team||""}
            placeholder="${this._t("editor.my_team_hint")}"
            @change=${this._textChanged}
          >
        </div>
        <div>
          <label class="field-label">${this._t("editor.groups_entity")}</label>
          <select data-config-value="groups_entity" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.groups_entity}>— None —</option>
            ${this.standingsEntities.map(e=>i.qy`<option value="${e}" ?selected=${e===this._config.groups_entity}>${e}</option>`)}
          </select>
          <div class="hint" style="margin-top:4px">${this._t("editor.hint_groups_entity")}</div>
        </div>
        <div>
          <label class="field-label">${this._t("editor.matches_entity")}</label>
          <select data-config-value="matches_entity" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.matches_entity}>— None —</option>
            ${this.matchesEntities.map(e=>i.qy`<option value="${e}" ?selected=${e===this._config.matches_entity}>${e}</option>`)}
          </select>
          <div class="hint" style="margin-top:4px">${this._t("editor.hint_matches_entity")}</div>
        </div>

        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-bracket-editor")||customElements.define("soccer-live-bracket-editor",o)},1781(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(226),o=a(7554),l=a(1448),c=a(4522),d=a(8657),p=a(5151);class h extends i.WF{static get properties(){return{hass:{},_config:{},_compact:{type:Boolean},_cardStyle:{type:String},_hideHeader:{type:Boolean},_treeShowPlayoffs:{type:Boolean},_myTeam:{type:String},_activeTab:{type:String},_matchesEntity:{type:String},_collapsedRounds:{type:Object},_expandedRounds:{type:Object},_schedFilter:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e),this._hideHeader=!0===e.hide_header,this._compact=!0===e.compact,this._cardStyle="tree"===e.style?"tree":"list",this._treeShowPlayoffs=!0===e.tree_show_playoffs,this._myTeam=e.my_team||"",this._matchesEntity=e.matches_entity||"",this._activeTab="bracket",this._collapsedRounds=new Set,this._expandedRounds=new Set,this._schedFilter="auto"}updated(e){super.updated?.(e),e.has("_activeTab")&&"schedule"===this._activeTab&&this._scrollScheduleAfterRender()}_scrollScheduleAfterRender(){requestAnimationFrame(()=>{const e=this.hass?.config?.time_zone;let t=null;if(this._schedScrollToDate&&(t=this.shadowRoot?.querySelector(`.sched-day[data-date="${this._schedScrollToDate}"]`),this._schedScrollToDate=null),!t){const a=(new Date).toLocaleDateString("en-CA",e?{timeZone:e}:{});t=this.shadowRoot?.querySelector(`.sched-day[data-date="${a}"]`)}t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_formatDate(e){if(!e)return"";const t=(0,s.n1)(e);if(!t)return"";const a=this._t("month."+(t.getMonth()+1));return`${t.getDate()} ${a}`}_dateKey(e){const t=(0,s.n1)(e);if(!t)return"";const a=this.hass?.config?.time_zone;return t.toLocaleDateString("en-CA",a?{timeZone:a}:{})}_matchDate(e){return e?.date_iso||e?.date||""}_localizeRoundName(e){const t={Final:"round.final",Semifinals:"round.semifinals",Quarterfinals:"round.quarterfinals","Round of 16":"round.r16","Round of 32":"round.r32","Round of 64":"round.r64","Third Place":"round.third_place","Knockout Playoffs":"round.knockout_playoffs","Preliminary Round":"round.preliminary"}[e.name];return t?this._t(t):e.name}_formatSeasonInfo(e){if(!e||"N/A"===e)return"";const t={"round-of-64":"round.r64","round-of-32":"round.r32","round-of-16":"round.r16",quarterfinals:"round.quarterfinals",semifinals:"round.semifinals",final:"round.final","third-place":"round.third_place","knockout-playoffs":"round.knockout_playoffs","knockout-round":"round.knockout_playoffs",preliminary:"round.preliminary","preliminary-round":"round.preliminary","group-stage":null};return e in t?t[e]?this._t(t[e]):"":e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}_matchesMyTeam(e){return!(!this._myTeam||!e)&&e.toLowerCase().includes(this._myTeam.toLowerCase())}_tieHasMyTeam(e){return this._matchesMyTeam((e.team_a||{}).name)||this._matchesMyTeam((e.team_b||{}).name)}_getBracketSide(e,t,a){if(!this._myTeam)return null;for(const e of a.left)if(this._tieHasMyTeam(e))return"left";for(const e of a.right)if(this._tieHasMyTeam(e))return"right";for(const e of t.left)if(this._tieHasMyTeam(e))return"left";for(const e of t.right)if(this._tieHasMyTeam(e))return"right";for(const t of e){const e=t.ties||[],a=Math.ceil(e.length/2);for(let t=0;t<e.length;t++)if(this._tieHasMyTeam(e[t]))return t<a?"left":"right"}return null}_isCollapsed(e){return e.ties.length>0&&e.ties.every(e=>e.completed)?!this._expandedRounds.has(e.name):this._collapsedRounds.has(e.name)}_toggleRound(e){if(e.ties.length>0&&e.ties.every(e=>e.completed)){const t=new Set(this._expandedRounds);t.has(e.name)?t.delete(e.name):t.add(e.name),this._expandedRounds=t}else{const t=new Set(this._collapsedRounds);t.has(e.name)?t.delete(e.name):t.add(e.name),this._collapsedRounds=t}}_roundProgress(e){const t=e.ties.length;return t?{total:t,done:e.ties.filter(e=>e.completed).length,live:e.ties.filter(e=>e.single&&"in"===e.single.state||e.leg1&&"in"===e.leg1.state||e.leg2&&"in"===e.leg2.state).length}:null}_formatTime(e){if(!e)return"";const t=(0,s.n1)(e);if(!t)return"";const a=this.hass?.config?.time_zone;return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...a?{timeZone:a}:{}})}_renderMyNextMatch(e){if(!this._myTeam||!e?.length)return"";const t=Date.now(),a=e.find(e=>!(!this._matchesMyTeam(e.home_team)&&!this._matchesMyTeam(e.away_team))&&("in"===e.state||"pre"===e.state&&((0,p.Ot)(e)||0)>t));if(!a)return"";const s="in"===a.state,n=a.season_info&&"N/A"!==a.season_info?this._formatSeasonInfo(a.season_info):"";return i.qy`
      <div class="my-next-banner ${s?"live":""}">
        <div class="mnb-teams">
          ${a.home_logo?i.qy`<img src="${a.home_logo}" class="mnb-logo">`:""}
          <span class="mnb-name">${a.home_team}</span>
          ${s?i.qy`<span class="mnb-score">${(0,d.Q)(a.home_score)} – ${(0,d.Q)(a.away_score)}</span>`:i.qy`<span class="mnb-vs">${this._t("match.vs")}</span>`}
          <span class="mnb-name away">${a.away_team}</span>
          ${a.away_logo?i.qy`<img src="${a.away_logo}" class="mnb-logo">`:""}
        </div>
        <div class="mnb-meta">
          ${n?i.qy`<span class="mnb-round-tag">${n}</span>`:""}
          ${!s&&this._matchDate(a)?(()=>{const e=((0,p.Ot)(a)||0)-t;if(e>0&&e<864e5){const t=Math.floor(e/36e5),a=Math.floor(e%36e5/6e4);return i.qy`<span class="mnb-countdown">⏱ ${t>0?`${t}u ${a}m`:`${a}m`}</span>`}const s=this._matchDate(a);return i.qy`<span class="mnb-date">${this._formatDate(s)} · ${this._formatTime(s)}</span>`})():""}
          ${a.venue?i.qy`<span class="mnb-venue">📍 ${a.venue}</span>`:""}
        </div>
      </div>
    `}_renderSchedule(e){if(!e||!e.length)return i.qy`<div class="sched-empty">${this._t("generic.no_match")}</div>`;const t=Date.now(),a=t+3888e6,s=this.hass?.config?.time_zone,n=e.filter(e=>{const i=(0,p.Ot)(e);return null!==i&&("in"===e.state||("post"===e.state?i<=t:i>=t&&i<=a))}),r=[...n.length?n:e].sort((e,t)=>{const a=(0,p.Ot)(e),i=(0,p.Ot)(t);return null===a&&null===i?0:null===a?1:null===i?-1:a-i}),o=(new Date).toLocaleDateString("en-CA",s?{timeZone:s}:{}),l=r.filter(e=>"in"===e.state).length,c=r.filter(e=>this._dateKey(this._matchDate(e))===o).length,h=this._myTeam?r.filter(e=>this._matchesMyTeam(e.home_team)||this._matchesMyTeam(e.away_team)).length:0;let u=this._schedFilter;"auto"===u&&(u=l>0?"live":c>0?"today":"all");const g="live"===u?r.filter(e=>"in"===e.state):"my-team"===u?r.filter(e=>this._matchesMyTeam(e.home_team)||this._matchesMyTeam(e.away_team)):"today"===u?r.filter(e=>this._dateKey(this._matchDate(e))===o):r,m={};for(const e of g){const t=this._dateKey(this._matchDate(e));m[t]||(m[t]=[]),m[t].push(e)}return i.qy`
      <div class="sched-view">
        <div class="sched-filters">
          ${[["all",this._t("editor.all_groups"),r.length],["live",this._t("status.live"),l],["today",this._t("time.today"),c],...this._myTeam?[["my-team",this._myTeam,h]]:[]].map(([e,t,a])=>i.qy`
            <span class="sched-chip ${u===e?"active":""} ${a||"all"===e?"":"empty"}"
                  @click=${()=>{this._schedFilter=e}}>
              ${t}${a>0?i.qy`<span class="chip-count">${a}</span>`:""}
            </span>
          `)}
        </div>
        ${g.length?"":i.qy`<div class="sched-empty">${this._t("generic.no_match")}</div>`}
        ${Object.entries(m).map(([e,t])=>{const a=t[0].league_logo&&t.every(e=>e.league_logo===t[0].league_logo)?t[0].league_logo:null;return i.qy`
          <div class="sched-day" data-date=${e}>
            <div class="sched-day-label">
              ${a?i.qy`<img class="sched-comp-logo" src="${a}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
              ${t[0].season_info&&"N/A"!==t[0].season_info?(()=>{const e=this._formatSeasonInfo(t[0].season_info);return e?i.qy`<span class="sched-round-chip">${e}</span>`:""})():""}
              <span>${this._formatDate(this._matchDate(t[0]))}</span>
            </div>
            <div class="sched-matches">
              ${t.map(e=>{const t="in"===e.state,a="post"===e.state,s=e.home_team||this._t("bracket.tbd"),n=e.away_team||this._t("bracket.tbd"),r=this._matchesMyTeam(s)||this._matchesMyTeam(n),o=a||t?`${(0,d.Q)(e.home_score,"-")} – ${(0,d.Q)(e.away_score,"-")}`:this._formatTime(this._matchDate(e));return i.qy`
                  <div class="sched-match ${t?"live":""} ${a?"done":""} ${r&&this._myTeam?"my-team":""}">
                    <div class="sched-team">
                      ${e.home_logo?i.qy`<img class="sched-logo" src="${e.home_logo}" alt="">`:""}
                      <span class="sched-name">${s}</span>
                    </div>
                    <div class="sched-score">
                      ${t?i.qy`<span class="dot"></span>`:""}
                      <span>${o}</span>
                      ${t&&e.clock?i.qy`<span class="sched-clock">${e.clock}'</span>`:""}
                    </div>
                    <div class="sched-team away">
                      ${e.away_logo?i.qy`<img class="sched-logo" src="${e.away_logo}" alt="">`:""}
                      <span class="sched-name">${n}</span>
                    </div>
                  </div>
                `})}
            </div>
          </div>
        `})}
      </div>
    `}getCardSize(){return 6}static getConfigElement(){return document.createElement("soccer-live-bracket-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_bracket",hide_header:!1,compact:!1,style:"list"}}_formatScore(e){return null==e?"-":String(e)}_renderTie(e){const t=e.team_a||{},a=e.team_b||{},s=e.leg1,n=e.leg2,r=e.single,o=e.winner_team,l=o&&t.name&&o===t.name,c=o&&a.name&&o===a.name,d=(e,t)=>e&&t&&t.name?e.home_team===t.name?e.home_score:e.away_team===t.name?e.away_score:null:null,p=d(s,t),h=d(s,a),u=d(n,t),g=d(n,a),m=d(r,t),f=d(r,a),_=s&&"in"===s.state||n&&"in"===n.state||r&&"in"===r.state,b=!s&&!r,v=this._myTeam?this._tieHasMyTeam(e):null;return i.qy`
      <div class="tie ${_?"live":""} ${e.completed?"done":""} ${!0===v?"my-team":""} ${!1===v?"other-team":""}">
        <div class="tie-row ${l?"winner":""} ${c?"loser":""}">
          <img src="${t.logo}" alt="${t.name}" />
          <span class="tname">${t.name||this._t("bracket.tbd")}</span>
          <span class="legs">
            ${r?i.qy`<span class="leg">${this._formatScore(m)}</span>`:i.qy`
              <span class="leg">${this._formatScore(p)}</span>
              <span class="leg">${this._formatScore(u)}</span>
            `}
          </span>
        </div>
        <div class="tie-row ${c?"winner":""} ${l?"loser":""}">
          <img src="${a.logo}" alt="${a.name}" />
          <span class="tname">${a.name||this._t("bracket.tbd")}</span>
          <span class="legs">
            ${r?i.qy`<span class="leg">${this._formatScore(f)}</span>`:i.qy`
              <span class="leg">${this._formatScore(h)}</span>
              <span class="leg">${this._formatScore(g)}</span>
            `}
          </span>
        </div>
        <div class="tie-foot">
          ${_?i.qy`<span class="live-badge"><span class="dot"></span>${this._t("status.live")}</span>`:""}
          ${e.aggregate?i.qy`<span class="agg">${this._t("bracket.agg")} ${e.aggregate}</span>`:""}
          ${e.tied?i.qy`<span class="agg tied">${this._t("bracket.tied_agg")}</span>`:""}
          ${e.completed||_||!e.first_leg_date?"":i.qy`<span class="date">${this._formatDate(e.first_leg_date)}</span>`}
          ${b?i.qy`<span class="date pending">${this._t("bracket.tbd")}</span>`:""}
          ${e.completed&&v?this._matchesMyTeam(e.winner_team)?i.qy`<span class="my-result won">✓ ${this._t("bracket.won")}</span>`:i.qy`<span class="my-result lost">✗ ${this._t("bracket.eliminated")}</span>`:""}
        </div>
      </div>
    `}_aggregateFor(e,t){if(!t||!t.name)return null;const a=(e,t)=>e&&t&&t.name?e.home_team===t.name?e.home_score:e.away_team===t.name?e.away_score:null:null;if(e.single)return a(e.single,t);let i=0,s=!1;const n=a(e.leg1,t),r=a(e.leg2,t);return null!=n&&(i+=n,s=!0),null!=r&&(i+=r,s=!0),s?i:null}_renderMiniTie(e){const t=e.team_a||{},a=e.team_b||{},s=this._aggregateFor(e,t),n=this._aggregateFor(e,a),r=e.winner_team,o=r&&t.name&&r===t.name,l=r&&a.name&&r===a.name,c=e.leg1&&"in"===e.leg1.state||e.leg2&&"in"===e.leg2.state||e.single&&"in"===e.single.state,d=("in"===e.leg1?.state?e.leg1:null)||("in"===e.leg2?.state?e.leg2:null)||("in"===e.single?.state?e.single:null),p=d?.clock||"",h=!e.leg1&&!e.single,u=t.abbrev||(t.name?t.name.substring(0,3).toUpperCase():this._t("bracket.tbd")),g=a.abbrev||(a.name?a.name.substring(0,3).toUpperCase():this._t("bracket.tbd")),m=this._myTeam?this._tieHasMyTeam(e):null,f=this._matchDate(e.leg1)||this._matchDate(e.leg2)||this._matchDate(e.single)||e.first_leg_date||null,_=!(!this._matchesEntity||!f);return i.qy`
      <div class="mini-tie ${c?"live":""} ${e.completed?"done":""} ${h?"pending":""} ${!0===m?"my-team":""} ${!1===m?"other-team":""} ${_?"sched-link":""}"
        @click=${_?()=>{this._schedScrollToDate=this._dateKey(f),this._schedFilter="all",this._activeTab="schedule"}:null}>
        <div class="mini-team ${o?"winner":""} ${l?"loser":""}">
          ${t.logo?i.qy`<img src="${t.logo}" alt="${t.name}" />`:i.qy`<div class="logo-ph"></div>`}
          <span class="abbr">${u}</span>
          <span class="agg-num">${null!==s?s:"-"}</span>
        </div>
        <div class="mini-team ${l?"winner":""} ${o?"loser":""}">
          ${a.logo?i.qy`<img src="${a.logo}" alt="${a.name}" />`:i.qy`<div class="logo-ph"></div>`}
          <span class="abbr">${g}</span>
          <span class="agg-num">${null!==n?n:"-"}</span>
        </div>
        ${c?i.qy`
          <div class="mini-clock">
            <span class="dot"></span>
            ${p?i.qy`<span class="mini-clock-text">${p}</span>`:""}
          </div>
        `:""}
        ${h&&e.first_leg_date?i.qy`<div class="mini-date">${this._formatDate(e.first_leg_date)}</div>`:""}
        ${e.completed&&m?i.qy`<div class="mini-result ${this._matchesMyTeam(e.winner_team)?"won":"lost"}">${this._matchesMyTeam(e.winner_team)?"✓":"✗"}</div>`:""}
      </div>
    `}_renderTreeRound(e,t){return i.qy`
      <div class="tree-col">
        <div class="tree-col-label">
          <span class="tree-col-label-en">${this._t(t)}</span>
        </div>
        <div class="tree-col-ties">
          ${e.map(e=>this._renderMiniTie(e))}
        </div>
      </div>
    `}_renderArrows(e,t){if(e<=0)return"";const a=2*e,s=[],n="left"===t,r=`arrow-${t}`;for(let t=0;t<e;t++){const o=(2*t+.5)/a*100,l=(2*t+1.5)/a*100,c=(t+.5)/e*100;n?(s.push(i.JW`<line x1="0" y1="${o}%" x2="50%" y2="${o}%" stroke-linecap="round" />`),s.push(i.JW`<line x1="0" y1="${l}%" x2="50%" y2="${l}%" stroke-linecap="round" />`),s.push(i.JW`<line x1="50%" y1="${o}%" x2="50%" y2="${l}%" />`),s.push(i.JW`<line x1="50%" y1="${c}%" x2="100%" y2="${c}%" marker-end="url(#${r})" />`)):(s.push(i.JW`<line x1="100%" y1="${o}%" x2="50%" y2="${o}%" stroke-linecap="round" />`),s.push(i.JW`<line x1="100%" y1="${l}%" x2="50%" y2="${l}%" stroke-linecap="round" />`),s.push(i.JW`<line x1="50%" y1="${o}%" x2="50%" y2="${l}%" />`),s.push(i.JW`<line x1="50%" y1="${c}%" x2="0" y2="${c}%" marker-end="url(#${r})" />`))}const o=n?i.JW`<marker id="${r}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M0,0 L10,5 L0,10 z" fill="var(--cl-accent)" /></marker>`:i.JW`<marker id="${r}" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M10,0 L0,5 L10,10 z" fill="var(--cl-accent)" /></marker>`;return i.qy`
      <div class="tree-arrows ${t}">
        <svg class="connector-svg ${t}" preserveAspectRatio="none">
          <defs>${o}</defs>
          ${s}
        </svg>
      </div>
    `}_renderTree(e){const t=t=>{const a=e.filter(e=>e.size===t);return 0===a.length?null:a.find(e=>"Knockout Playoffs"!==e.name&&"Preliminary Round"!==e.name&&"Third Place"!==e.name)||a[a.length-1]},a=e.find(e=>"Knockout Playoffs"===e.name),n=e.find(e=>"Third Place"===e.name),r=t(16),o=t(8),l=t(4),c=t(2),d=e.find(e=>"Final"===e.name)||t(1),p=!(!l||!c),h=!(!r||!p),u=!(!o||!p),g=e.filter(e=>"Third Place"!==e.name&&"Final"!==e.name&&"Knockout Playoffs"!==e.name&&(e.size>16||!(16!==e.size||!h)||!(8!==e.size||!u))),m=e=>{if(!e)return{left:[],right:[]};const t=e.ties||[],a=Math.ceil(t.length/2);return{left:t.slice(0,a),right:t.slice(a)}},f=m(h?null:r),_=m(u?null:o),b=m(l),v=m(c),x=this._treeShowPlayoffs?m(a):null,y=d?d.ties[0]:null,w=n?n.ties[0]:null,$=f.left.length||_.left.length||b.left.length||v.left.length,k=f.left.length||_.left.length,C=f.right.length||_.right.length,S=this._getBracketSide(g,b,v);return i.qy`
      <div class="tree-wrap ${g.length?"has-early":""}">
        <div class="tree ${$?"":"tree-center-only"} ${h?"no-r32":""} ${u?"no-r16":""}">
          <div class="tree-half left ${"left"===S?"path-my-team":S?"path-other":""}">
            ${x&&x.left.length?i.qy`
              ${this._renderTreeRound(x.left,"round.knockout_playoffs")}
              ${k?this._renderArrows(k,"left"):""}
            `:""}
            ${f.left.length?this._renderTreeRound(f.left,"round.r32"):""}
            ${f.left.length&&_.left.length?this._renderArrows(_.left.length,"left"):""}
            ${_.left.length?this._renderTreeRound(_.left,"round.r16"):""}
            ${_.left.length&&b.left.length?this._renderArrows(b.left.length,"left"):""}
            ${b.left.length?this._renderTreeRound(b.left,"round.quarterfinals"):""}
            ${b.left.length&&v.left.length?this._renderArrows(v.left.length,"left"):""}
            ${v.left.length?this._renderTreeRound(v.left,"round.semifinals"):""}
            ${v.left.length?this._renderArrows(1,"left"):""}
          </div>

          <div class="tree-center">
            <div class="trophy">🏆</div>
            <div class="trophy-label">${this._t("round.final")}</div>
            ${y?i.qy`<div class="final-tie-wrap">${this._renderMiniTie(y)}</div>`:i.qy`<div class="final-placeholder">${this._t("bracket.tbd")}</div>`}
            ${(()=>{const e=y?.completed&&y?.winner_team?[y.team_a,y.team_b].find(e=>e?.name===y.winner_team):null;return e?i.qy`
                <div class="champion-banner">
                  ${e.logo?i.qy`<img class="champion-logo" src="${e.logo}" alt="">`:""}
                  <span class="champion-crown">👑</span>
                  <span class="champion-name">${e.name}</span>
                </div>
              `:""})()}
            ${w?i.qy`
              <div class="third-place-wrap">
                <div class="third-place-label">🥉 ${this._t("round.third_place")}</div>
                <div class="final-tie-wrap third">${this._renderMiniTie(w)}</div>
              </div>
            `:""}
            ${$||g.length?"":i.qy`<div class="tree-pending">${this._t("bracket.empty.sub")}</div>`}
          </div>

          <div class="tree-half right ${"right"===S?"path-my-team":S?"path-other":""}">
            ${v.right.length?this._renderArrows(1,"right"):""}
            ${v.right.length?this._renderTreeRound(v.right,"round.semifinals"):""}
            ${v.right.length&&b.right.length?this._renderArrows(v.right.length,"right"):""}
            ${b.right.length?this._renderTreeRound(b.right,"round.quarterfinals"):""}
            ${b.right.length&&_.right.length?this._renderArrows(b.right.length,"right"):""}
            ${_.right.length?this._renderTreeRound(_.right,"round.r16"):""}
            ${_.right.length&&f.right.length?this._renderArrows(_.right.length,"right"):""}
            ${f.right.length?this._renderTreeRound(f.right,"round.r32"):""}
            ${x&&x.right.length?i.qy`
              ${C?this._renderArrows(C,"right"):""}
              ${this._renderTreeRound(x.right,"round.knockout_playoffs")}
            `:""}
          </div>
        </div>

        ${g.map(e=>{const t=this._isCollapsed(e),a=this._roundProgress(e),n=a&&a.done===a.total&&a.total>0,r=e.ties.map(e=>e.first_leg_date||this._matchDate(e.leg1)||this._matchDate(e.single)||this._matchDate(e.leg2)).filter(Boolean).sort((e,t)=>((0,s.n1)(e)?.getTime()||0)-((0,s.n1)(t)?.getTime()||0)),o=r.length?r[0]===r[r.length-1]?this._formatDate(r[0]):`${this._formatDate(r[0])} – ${this._formatDate(r[r.length-1])}`:"";return i.qy`
            <div class="early-round-section ${t?"collapsed":""}">
              <div class="early-round-label" @click=${()=>this._toggleRound(e)}>
                <span class="early-round-name">
                  ${this._localizeRoundName(e)}
                  ${o?i.qy`<span class="early-date-range"> · ${o}</span>`:""}
                </span>
                ${a?i.qy`
                  <span class="round-prog ${n?"done":a.live?"live":""}">
                    ${n?"✓":a.live?i.qy`<span class="dot"></span>`:""}
                    ${a.done}/${a.total}
                  </span>
                `:""}
                ${this._matchesEntity?i.qy`
                  <span class="early-sched-btn" title="${this._t("bracket.view_schedule")}" @click=${e=>{e.stopPropagation(),this._schedScrollToDate=r[0]||null,this._schedFilter="all",this._activeTab="schedule"}}>📅</span>
                `:""}
                <span class="round-chevron">${t?"›":"‹"}</span>
              </div>
              ${t?"":i.qy`
                <div class="early-round-ties">
                  ${e.ties.map(e=>this._renderTie(e))}
                </div>
              `}
            </div>
          `})}
      </div>
    `}_renderGroups(e){return i.qy`
      <div class="groups-view">
        ${e.map(e=>i.qy`
          <div class="group-block">
            <div class="group-title">${e.name}</div>
            <div class="group-header-row">
              <span class="gh-name"></span>
              <span class="gh-stat">${this._t("mini.p")}</span>
              <span class="gh-stat">${this._t("col.wins")}</span>
              <span class="gh-stat">${this._t("col.draws")}</span>
              <span class="gh-stat">${this._t("col.losses")}</span>
              <span class="gh-stat">${this._t("mini.gd")}</span>
              <span class="gh-pts">${this._t("mini.pts")}</span>
            </div>
            ${e.standings.map((e,t)=>i.qy`
              <div class="group-row ${this._matchesMyTeam(e.team_name)?"my-team":""} ${t<2?"qualify":""}">
                <span class="g-rank">${e.rank}</span>
                ${e.team_logo&&"N/A"!==e.team_logo?i.qy`<img class="g-logo" src="${e.team_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:i.qy`<div class="g-logo-ph"></div>`}
                <span class="g-name">${e.team_name}</span>
                <span class="g-stat">${e.games_played}</span>
                <span class="g-stat">${e.wins}</span>
                <span class="g-stat">${e.draws}</span>
                <span class="g-stat">${e.losses}</span>
                <span class="g-stat g-gd ${Number(e.goal_difference)>0?"pos":Number(e.goal_difference)<0?"neg":""}">${e.goal_difference}</span>
                <span class="g-pts">${e.points}</span>
              </div>
            `)}
          </div>
        `)}
      </div>
    `}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.rounds||[],a=this._config.groups_entity,o=a?this.hass.states[a]:null,d=(o?.attributes?.standings_groups||[]).filter(e=>e.standings?.length),p=d.length>0,h=this._config.matches_entity||this._matchesEntity,u=h?this.hass.states[h]:null,g=u?.attributes?.matches||[],m=g.length>0;if(0===t.length&&!p&&!m)return(0,c._$)(e.attributes,e=>this._t(e),()=>i.qy`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">🏆</div>
            <div class="empty-title">${this._t("bracket.empty.title")}</div>
            <div class="empty-sub">${this._t("bracket.empty.sub")}</div>
          </div>
        </ha-card>
      `);const f=t[t.length-1],_=f?this._localizeRoundName(f):e.state;return i.qy`
      <ha-card class="${this._compact?"compact":""} style-${this._cardStyle}">
        <div class="hero-bg"></div>
        ${this._hideHeader?"":i.qy`
          ${(0,r.t7)({logo:e.attributes.league_logo||(e.attributes.league_info||[])[0]?.logo_href||null,title:(0,l.VR)(e.attributes.league_name,(0,s.$c)(this.hass,this._config))||this._t("card.bracket"),badge:(0,r.N)(_,"neutral"),fallbackIcon:"🏆"})}
        `}

        ${this._renderMyNextMatch(g)}

        ${p||m?i.qy`
          <div class="bracket-tabs">
            <span class="bracket-tab ${"bracket"===this._activeTab?"active":""}"
                  @click=${()=>{this._activeTab="bracket"}}>
              🏆 ${this._t("bracket.tab_bracket")}
            </span>
            ${p?i.qy`
              <span class="bracket-tab ${"groups"===this._activeTab?"active":""}"
                    @click=${()=>{this._activeTab="groups"}}>
                📊 ${this._t("bracket.tab_groups")}
              </span>
            `:""}
            ${m?i.qy`
              <span class="bracket-tab ${"schedule"===this._activeTab?"active":""}"
                    @click=${()=>{this._activeTab="schedule"}}>
                📅 ${this._t("bracket.tab_schedule")}
              </span>
            `:""}
          </div>
        `:""}

        ${"groups"===this._activeTab&&p?this._renderGroups(d):"schedule"===this._activeTab&&m?this._renderSchedule(g):"tree"===this._cardStyle?this._renderTree(t):i.qy`
              <div class="rounds-container"
                   style="${this._compact?"flex-direction:column;overflow-x:visible;":""}">
                ${t.map(e=>{const t=this._isCollapsed(e);return i.qy`
                  <div class="round ${t?"collapsed":""}"
                       style="${this._compact?"flex:none;min-width:0;":""}">
                    <div class="round-name" style="cursor:pointer;" @click=${()=>this._toggleRound(e)}>
                      <span class="round-name-en">${this._localizeRoundName(e)}</span>
                      ${(()=>{const t=this._roundProgress(e);return t&&t.done>0?i.qy`<span class="round-prog-count ${t.live?"live":""}">${t.live?i.qy`<span class="dot"></span>`:""}${t.done}/${t.total}</span>`:""})()}
                      <span class="round-chevron">${t?"›":"‹"}</span>
                    </div>
                    ${t?"":i.qy`
                    <div class="round-ties"
                         style="${this._compact?"display:grid;grid-template-columns:1fr 1fr;gap:8px;":""}">
                      ${e.ties.map(e=>this._renderTie(e))}
                    </div>
                    `}
                  </div>
                `})}

              </div>
            `}
      </ha-card>
    `}static get styles(){return[n.G,o.M,r.Ng,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.5);--cl-green:#10b981;--cl-gold:#fbbf24;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);--cl-glass-border:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.empty-state{display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px;}.empty-icon{font-size:38px;opacity:0.4;}.empty-title{font-weight:800;color:var(--cl-text);}.empty-sub{font-size:12px;color:var(--cl-text-2);}.hero-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.10),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(251,191,36,0.10),transparent 50%);pointer-events:none;}.rounds-container{position:relative;z-index:1;display:flex;gap:16px;padding:18px;overflow-x:auto;}.round{flex:1 0 240px;min-width:240px;display:flex;flex-direction:column;gap:8px;justify-content:space-around;}.round-name{display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center;padding:6px 12px;border-radius:12px;background:rgba(var(--cl-accent-rgb),0.12);align-self:center;margin-bottom:4px;}.round-name-en{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-accent);line-height:1;}.round-ties{display:flex;flex-direction:column;gap:12px;justify-content:space-around;flex:1;}.tie{background:var(--cl-card-2);border:1px solid var(--cl-glass-border);border-radius:12px;padding:10px 12px;transition:all 0.25s cubic-bezier(0.4,0,0.2,1);position:relative;}.tie:hover{border-color:var(--cl-accent);transform:translateY(-2px);}.tie.live{border-color:var(--cl-live);box-shadow:0 0 0 1px var(--cl-live),0 0 20px var(--cl-live-glow);animation:tie-pulse 2s ease-in-out infinite;}@keyframes tie-pulse{0%,100%{box-shadow:0 0 0 1px var(--cl-live),0 0 20px var(--cl-live-glow);}50%{box-shadow:0 0 0 2px var(--cl-live),0 0 30px var(--cl-live-glow);}}.tie.done{border-color:rgba(16,185,129,0.3);}.tie-row{display:grid;grid-template-columns:22px 1fr auto;align-items:center;gap:10px;padding:5px 0;}.tie-row + .tie-row{border-top:1px solid var(--cl-divider);}.tie-row img{width:22px;height:22px;object-fit:contain;}.tie-row .tname{font-size:13px;font-weight:600;color:var(--cl-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-0.01em;}.tie-row.winner .tname{font-weight:800;}.tie-row.loser .tname{color:var(--cl-text-2);}.tie-row.loser img{opacity:0.55;}.legs{display:inline-flex;gap:4px;}.leg{min-width:22px;text-align:center;font-size:13px;font-weight:800;font-variant-numeric:tabular-nums;padding:2px 6px;border-radius:6px;background:rgba(255,255,255,0.06);color:var(--cl-text);}.tie-row.winner .leg{background:rgba(16,185,129,0.2);color:var(--cl-green);}.tie-row.loser .leg{opacity:0.5;}.tie-foot{margin-top:8px;padding-top:8px;border-top:1px dashed var(--cl-divider);display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap;}.agg{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--cl-green);padding:2px 8px;background:rgba(16,185,129,0.12);border-radius:6px;}.agg.tied{color:var(--cl-gold);background:rgba(251,191,36,0.12);}.date{font-size:10px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.06em;}.date.pending{color:var(--cl-accent);}.my-result{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;padding:2px 7px;border-radius:6px;}.my-result.won{color:var(--cl-green);background:rgba(16,185,129,0.12);}.my-result.lost{color:var(--cl-live);background:rgba(239,68,68,0.08);}.live-badge{display:inline-flex;align-items:center;gap:5px;background:linear-gradient(135deg,var(--cl-live),#f97316);color:white;padding:2px 8px;border-radius:999px;font-size:9px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;}.live-badge .dot{width:5px;height:5px;border-radius:50%;background:white;animation:dot-pulse 1.2s ease-in-out infinite;}@keyframes dot-pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.7);}}.tie.my-team{border-color:var(--cl-green) !important;box-shadow:0 0 16px rgba(16,185,129,0.25);}.tie.other-team{opacity:0.45;}.mini-tie.my-team{border-color:var(--cl-green) !important;box-shadow:0 0 12px rgba(16,185,129,0.3);}.mini-tie.other-team{opacity:0.38;filter:grayscale(0.3);}.bracket-tabs{position:relative;z-index:1;display:flex;gap:6px;padding:0 16px 12px;}.bracket-tab{font-size:11px;font-weight:700;padding:5px 14px;border-radius:99px;cursor:pointer;white-space:nowrap;border:1px solid var(--cl-divider);background:var(--cl-surface);color:var(--cl-text-2);transition:background 0.15s;user-select:none;}.bracket-tab.active{background:var(--cl-accent);border-color:var(--cl-accent);color:#fff;}.groups-view{position:relative;z-index:1;padding:0 14px 18px;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;}.group-block{background:var(--cl-card-2);border:1px solid var(--cl-glass-border);border-radius:12px;overflow:hidden;}.group-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-accent);padding:7px 10px;background:rgba(var(--cl-accent-rgb),0.08);border-bottom:1px solid var(--cl-divider);}.group-header-row{display:grid;grid-template-columns:20px 20px 1fr repeat(5,26px) 28px;align-items:center;gap:2px;padding:4px 8px 3px;border-bottom:1px solid var(--cl-divider);}.gh-name{grid-column:span 3;}.gh-stat,.gh-pts{font-size:9px;font-weight:700;color:var(--cl-text-2);text-align:center;text-transform:uppercase;}.gh-pts{color:var(--cl-accent);}.group-row{display:grid;grid-template-columns:20px 20px 1fr repeat(5,26px) 28px;align-items:center;gap:2px;padding:5px 8px;border-bottom:1px solid rgba(255,255,255,0.03);transition:background 0.15s;}.group-row:last-child{border-bottom:none;}.group-row.qualify{background:rgba(var(--cl-accent-rgb),0.04);}.group-row.my-team{background:rgba(16,185,129,0.08);border-left:2px solid var(--cl-green);}.g-rank{font-size:10px;font-weight:700;color:var(--cl-text-2);text-align:center;}.g-logo{width:18px;height:18px;object-fit:contain;display:block;}.g-logo-ph{width:18px;height:18px;border-radius:50%;background:var(--cl-card-2);}.g-name{font-size:11px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.group-row.my-team .g-name{font-weight:800;color:var(--cl-green);}.g-stat{font-size:11px;font-weight:600;color:var(--cl-text-2);text-align:center;font-variant-numeric:tabular-nums;}.g-gd.pos{color:var(--cl-green);}.g-gd.neg{color:var(--cl-live);}.g-pts{font-size:12px;font-weight:800;color:var(--cl-text);text-align:center;font-variant-numeric:tabular-nums;}.group-row.my-team .g-pts{color:var(--cl-green);}.sched-view{padding:8px 16px 16px;}.sched-empty{padding:32px;text-align:center;color:var(--cl-text-2);font-size:13px;}.sched-day{margin-bottom:16px;}.sched-day-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-accent);padding:4px 8px;margin-bottom:6px;background:rgba(var(--cl-accent-rgb),0.10);border-radius:6px;display:inline-block;}.sched-matches{display:flex;flex-direction:column;gap:4px;}.sched-match{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;background:var(--cl-card-2);border-radius:8px;padding:7px 10px;border:1px solid var(--cl-glass-border);}.sched-match.live{border-color:var(--cl-live);box-shadow:0 0 12px var(--cl-live-glow);}.sched-match.my-team{border-color:var(--cl-green);}.sched-team{display:flex;align-items:center;gap:6px;overflow:hidden;}.sched-team.away{justify-content:flex-end;text-align:right;flex-direction:row-reverse;}.sched-logo{width:20px;height:20px;object-fit:contain;flex-shrink:0;}.sched-name{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.sched-score{display:flex;align-items:center;gap:4px;justify-content:center;font-size:13px;font-weight:800;white-space:nowrap;font-variant-numeric:tabular-nums;min-width:56px;text-align:center;}.sched-match.live .sched-score{color:var(--cl-live);}.sched-clock{font-size:9px;font-weight:700;color:var(--cl-text-2);opacity:0.8;}.sched-score .dot{width:7px;height:7px;border-radius:50%;background:var(--cl-live);flex-shrink:0;animation:pulse 1.2s ease-in-out infinite;}.rounds-container.compact{flex-direction:column;overflow-x:visible;}.rounds-container.compact .round{flex:none;min-width:0;}@media (max-width:600px){ha-card.style-list .rounds-container{flex-direction:column;}ha-card.style-list .round{flex:none;min-width:0;}}.round .round-name{cursor:pointer;}.round.collapsed .round-chevron{transform:rotate(-90deg);}.round.collapsed .round-name{margin-bottom:0;}.round-prog-count{font-size:9px;font-weight:700;color:var(--cl-text-2);opacity:0.7;display:inline-flex;align-items:center;gap:3px;}.round-prog-count.live{color:var(--cl-live);opacity:1;}.tree-wrap{position:relative;z-index:1;overflow-x:auto;padding:24px 12px 24px;}.tree{display:flex;align-items:stretch;justify-content:center;min-height:480px;gap:0;min-width:max-content;}.tree-half{flex:1 0 auto;display:flex;align-items:stretch;}.tree-half.path-my-team{background:rgba(16,185,129,0.05);border-radius:12px;outline:1px solid rgba(16,185,129,0.15);}.tree-half.path-other{opacity:0.55;filter:saturate(0.6);}.tree-col{flex:1;display:flex;flex-direction:column;padding:0 6px;min-width:110px;max-width:140px;}.tree-col-label{text-align:center;padding:4px 8px;background:rgba(var(--cl-accent-rgb),0.12);border-radius:8px;margin-bottom:10px;display:flex;flex-direction:column;align-items:center;gap:1px;}.tree-col-label-en{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-accent);line-height:1;}.tree-col-ties{flex:1;display:flex;flex-direction:column;justify-content:space-around;gap:6px;position:relative;}.tree-arrows{flex:0 0 36px;min-width:36px;display:flex;align-items:stretch;padding-top:44px;padding-bottom:0;}.connector-svg{width:100%;height:100%;stroke:var(--cl-accent);stroke-width:2;fill:none;overflow:visible;display:block;}.connector-svg .arrow-head{fill:var(--cl-accent);stroke:none;}.mini-tie{background:var(--cl-bg);border:1.5px solid var(--cl-accent);border-radius:10px;padding:7px 9px;display:flex;flex-direction:column;gap:2px;transition:all 0.2s cubic-bezier(0.4,0,0.2,1);position:relative;box-shadow:0 2px 8px rgba(var(--cl-accent-rgb),0.15);}.mini-tie.sched-link{cursor:pointer;}.mini-tie.sched-link:hover{border-color:var(--cl-accent) !important;box-shadow:0 0 10px rgba(var(--cl-accent-rgb),0.25);}.mini-tie:hover{border-color:var(--cl-accent);transform:scale(1.04);z-index:5;}.mini-tie.live{border-color:var(--cl-live);box-shadow:0 0 0 1px var(--cl-live),0 0 16px var(--cl-live-glow);animation:tie-pulse 2s ease-in-out infinite;}.mini-tie.done{border-color:rgba(16,185,129,0.3);}.mini-tie.pending{opacity:0.55;background:transparent;border-style:dashed;}.mini-team{display:grid;grid-template-columns:18px 1fr auto;align-items:center;gap:6px;padding:2px 0;}.mini-team img{width:18px;height:18px;object-fit:contain;}.mini-team .logo-ph{width:18px;height:18px;border-radius:50%;background:var(--cl-card-2);}.mini-team .abbr{font-size:11px;font-weight:700;color:var(--cl-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-0.01em;}.mini-team .agg-num{font-size:12px;font-weight:800;font-variant-numeric:tabular-nums;min-width:14px;text-align:right;color:var(--cl-text-2);}.mini-team.winner .abbr{font-weight:800;}.mini-team.winner .agg-num{color:var(--cl-green);}.mini-team.loser .abbr{color:var(--cl-text-2);}.mini-team.loser img{opacity:0.5;}.mini-team.loser .agg-num{opacity:0.55;}.mini-clock{display:flex;align-items:center;gap:4px;padding:3px 6px 0;}.mini-clock .dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:var(--cl-live);box-shadow:0 0 6px var(--cl-live-glow);animation:dot-pulse 1.2s ease-in-out infinite;}.mini-clock-text{font-size:9px;font-weight:700;color:var(--cl-live);font-variant-numeric:tabular-nums;}.tree-center{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px 16px;gap:14px;min-width:200px;flex:0 0 200px;position:relative;}.tree-center::before{content:'';position:absolute;inset:20% 8%;background:radial-gradient(circle at center,rgba(251,191,36,0.20),transparent 65%);pointer-events:none;border-radius:50%;}.trophy{position:relative;font-size:64px;line-height:1;filter:drop-shadow(0 4px 24px rgba(251,191,36,0.7));animation:trophy-shine 4s ease-in-out infinite;z-index:2;}@keyframes trophy-shine{0%,100%{filter:drop-shadow(0 4px 24px rgba(251,191,36,0.7));transform:scale(1);}50%{filter:drop-shadow(0 4px 36px rgba(251,191,36,1)) drop-shadow(0 0 12px #fbbf24);transform:scale(1.04);}}.trophy-label{position:relative;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.18em;background:linear-gradient(135deg,var(--cl-gold),#d97706);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-align:center;z-index:2;}.champion-banner{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:8px;padding:5px 10px;border-radius:10px;background:rgba(251,191,36,0.12);border:1px solid rgba(251,191,36,0.3);}.champion-logo{width:18px;height:18px;object-fit:contain;}.champion-crown{font-size:13px;}.champion-name{font-size:10px;font-weight:800;color:var(--cl-gold,#fbbf24);text-transform:uppercase;letter-spacing:0.08em;}.final-tie-wrap{position:relative;width:100%;max-width:170px;z-index:2;}.final-tie-wrap .mini-tie{background:linear-gradient(135deg,rgba(251,191,36,0.12),rgba(251,191,36,0.02));border-color:rgba(251,191,36,0.4);box-shadow:0 4px 16px rgba(251,191,36,0.2);}.final-tie-wrap .mini-team.winner .agg-num{color:var(--cl-gold);}.final-placeholder{position:relative;font-size:11px;font-weight:800;color:var(--cl-text-2);padding:8px 14px;background:var(--cl-card-2);border:1px dashed var(--cl-glass-border);border-radius:8px;letter-spacing:0.1em;}.third-place-wrap{position:relative;width:100%;max-width:170px;z-index:2;display:flex;flex-direction:column;align-items:center;gap:4px;}.third-place-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-text-2);text-align:center;opacity:0.8;}.final-tie-wrap.third .mini-tie{background:linear-gradient(135deg,rgba(var(--cl-accent-rgb),0.08),transparent);border-color:rgba(var(--cl-accent-rgb),0.3);box-shadow:none;}.final-tie-wrap.third .mini-team.winner .agg-num{color:var(--cl-accent);}.tree-pending{font-size:11px;font-weight:600;color:var(--cl-text-2);text-align:center;padding:6px 12px;border-radius:8px;background:var(--cl-card-2);border:1px dashed var(--cl-glass-border);max-width:160px;line-height:1.4;}.tree.tree-center-only{justify-content:center;min-height:0;}.tree.tree-center-only .tree-half{display:none;}.tree.tree-center-only .tree-center{flex:0 0 auto;min-width:0;padding:16px 24px;}@media (max-width:720px){ha-card.style-tree .tree-col{min-width:100px;}ha-card.style-tree .tree-center{min-width:140px;}ha-card.style-tree .trophy{font-size:56px;}}@media (max-width:520px){ha-card.style-tree .tree{flex-direction:column;min-height:0;min-width:0;width:100%;}ha-card.style-tree .tree-half{flex:1 1 auto;flex-direction:row;}ha-card.style-tree .tree-half.right{flex-direction:row;}ha-card.style-tree .tree-center{order:-1;padding:12px;}}.tree-wrap.has-early{padding-bottom:0;}.early-round-section{padding:0 18px 18px;}.early-round-label{display:flex;align-items:center;justify-content:space-between;gap:8px;cursor:pointer;user-select:none;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-accent);padding:8px 12px;margin-bottom:12px;background:rgba(var(--cl-accent-rgb),0.10);border-radius:10px;transition:background 0.15s;}.early-round-label:hover{background:rgba(var(--cl-accent-rgb),0.18);}.early-round-name{flex:1;}.early-date-range{font-size:9px;font-weight:400;opacity:0.65;letter-spacing:0;}.round-prog{font-size:10px;font-weight:700;letter-spacing:0.05em;display:flex;align-items:center;gap:4px;color:var(--cl-text-2);}.round-prog.done{color:var(--cl-green);}.round-prog.live{color:var(--cl-live);}.round-prog .dot{width:6px;height:6px;border-radius:50%;background:var(--cl-live);animation:pulse 1.2s ease-in-out infinite;}.round-chevron{font-size:14px;font-weight:400;color:var(--cl-text-2);transform:rotate(90deg);display:inline-block;transition:transform 0.2s;}.early-round-section.collapsed .round-chevron{transform:rotate(-90deg);}.early-round-section.collapsed{padding-bottom:0;}.early-round-section.collapsed .early-round-label{margin-bottom:0;}.early-round-ties{display:grid;grid-template-columns:1fr 1fr;gap:8px;}@media (max-width:480px){.early-round-ties{grid-template-columns:1fr;}}.sched-filters{display:flex;gap:8px;padding:0 0 12px;flex-wrap:wrap;}.sched-chip{font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;cursor:pointer;user-select:none;transition:background 0.15s,color 0.15s;background:rgba(var(--cl-accent-rgb),0.10);color:var(--cl-accent);border:1px solid rgba(var(--cl-accent-rgb),0.2);}.sched-chip.active{background:var(--cl-accent);color:#fff;border-color:transparent;}.sched-chip:hover:not(.active){background:rgba(var(--cl-accent-rgb),0.20);}.sched-chip.empty{opacity:0.45;}.my-next-banner{position:relative;z-index:1;margin:0 14px 12px;padding:10px 14px;background:rgba(var(--cl-accent-rgb),0.07);border:1px solid rgba(var(--cl-accent-rgb),0.18);border-radius:12px;}.my-next-banner.live{background:rgba(239,68,68,0.07);border-color:rgba(239,68,68,0.25);}.mnb-teams{display:flex;align-items:center;gap:8px;}.mnb-logo{width:22px;height:22px;object-fit:contain;flex-shrink:0;}.mnb-name{font-size:13px;font-weight:700;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.mnb-name.away{text-align:right;}.mnb-vs{font-size:11px;font-weight:600;color:var(--cl-text-2);padding:0 2px;flex-shrink:0;}.mnb-score{font-size:17px;font-weight:900;color:var(--cl-live);font-variant-numeric:tabular-nums;padding:0 4px;flex-shrink:0;}.mnb-meta{display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap;}.mnb-round-tag{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-accent);background:rgba(var(--cl-accent-rgb),0.12);padding:2px 7px;border-radius:6px;}.mnb-date{font-size:11px;font-weight:600;color:var(--cl-text-2);}.mnb-countdown{font-size:12px;font-weight:800;color:var(--cl-accent);}.mnb-venue{font-size:10px;color:var(--cl-text-2);opacity:0.65;}.sched-day-label{display:flex;align-items:center;gap:6px;margin-bottom:6px;flex-wrap:wrap;}.sched-comp-logo{width:14px;height:14px;object-fit:contain;opacity:0.85;flex-shrink:0;}.sched-round-chip{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-accent);background:rgba(var(--cl-accent-rgb),0.12);padding:2px 7px;border-radius:6px;flex-shrink:0;}.mini-result{font-size:9px;font-weight:900;text-align:center;padding:2px 0 1px;line-height:1;}.mini-result.won{color:var(--cl-green);}.mini-result.lost{color:var(--cl-live);}.early-sched-btn{font-size:12px;opacity:0.45;cursor:pointer;padding:2px 5px;border-radius:4px;transition:opacity 0.15s;flex-shrink:0;}.early-sched-btn:hover{opacity:1;background:rgba(var(--cl-accent-rgb),0.15);}.mini-date{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--cl-text-2);text-align:center;padding:3px 0 0;opacity:0.8;}.chip-count{display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;padding:1px 5px;background:rgba(0,0,0,0.18);border-radius:10px;margin-left:4px;}.sched-chip.active .chip-count{background:rgba(255,255,255,0.30);}`]}}customElements.get("soccer-live-bracket")||customElements.define("soccer-live-bracket",h)},5259(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(5186),r=a(6195);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select,input[type="number"]{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color);background:var(--secondary-background-color);color:var(--primary-text-color);}.section-order{display:grid;gap:4px}.section-order div{display:flex;align-items:center;gap:5px;padding:5px 8px;border:1px solid var(--divider-color);border-radius:7px}.section-order span{flex:1;font-size:12px}.section-order button{width:28px;height:26px;border:1px solid var(--divider-color);border-radius:5px;background:var(--secondary-background-color);color:var(--primary-text-color);cursor:pointer}h3{margin:0;font-size:15px;}`}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("soccerlive_club")||e.includes("soccer_live_club")||e.includes("soccerlive_all_manual")||e.includes("soccerlive_all_mixed")||e.includes("soccer_live_all_manual")||e.includes("soccer_live_all_mixed")||["club","team_match","team_matches_mixed"].includes(this.hass.states[e]?.attributes?.sensor_type)).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){const t=e.target.value;t!==this._config.entity&&this._fire({...this._config,entity:t})}_selectChanged(e){const{configValue:t}=e.target.dataset;t&&this._config[t]!==e.target.value&&this._fire({...this._config,[t]:e.target.value})}_numberChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=parseInt(e.target.value,10);isNaN(a)||this._config[t]===a||this._fire({...this._config,[t]:a})}_switchChanged(e){const{configValue:t}=e.target.dataset;t&&this._config[t]!==e.target.checked&&this._fire({...this._config,[t]:e.target.checked})}_moveSection(e,t){const a=(0,r.tC)(this._config.section_order),i=a.indexOf(e),s=i+t;i<0||s<0||s>=a.length||([a[i],a[s]]=[a[s],a[i]],this._fire({...this._config,section_order:a}))}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
        </div>

        <div class="option">
          <label>${this._t("editor.show_matchday")}</label>
          <ha-switch .checked=${!1!==this._config.show_matchday} data-config-value="show_matchday" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_season_progress")}</label>
          <ha-switch .checked=${!1!==this._config.show_season_progress} data-config-value="show_season_progress" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_squad")}</label>
          <ha-switch .checked=${!1!==this._config.show_squad} data-config-value="show_squad" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_squad_analysis")}</label>
          <ha-switch .checked=${!1!==this._config.show_squad_analysis} data-config-value="show_squad_analysis" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_injury_center")}</label>
          <ha-switch .checked=${!1!==this._config.show_injuries} data-config-value="show_injuries" @change=${this._switchChanged}></ha-switch>
        </div>
        ${[["show_availability","editor.show_availability",!0],["show_prediction","editor.show_prediction",!0],["show_selection","editor.show_selection",!0],["show_team_news","editor.show_team_news",!0],["show_data_quality","editor.show_data_quality",!0],["show_automations","editor.show_automations",!1]].map(([e,t,a])=>i.qy`<div class="option">
          <label>${this._t(t)}</label>
          <ha-switch .checked=${a?!1!==this._config[e]:!0===this._config[e]} data-config-value=${e} @change=${this._switchChanged}></ha-switch>
        </div>`)}
        <div class="option">
          <label>${this._t("editor.show_club_records")}</label>
          <ha-switch .checked=${!1!==this._config.show_club_records} data-config-value="show_club_records" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.collapse_club_sections")}</label>
          <ha-switch .checked=${!1!==this._config.collapse_sections} data-config-value="collapse_sections" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.club_dashboard_mode")}</label>
          <ha-switch .checked=${!0===this._config.dashboard_mode} data-config-value="dashboard_mode" @change=${this._switchChanged}></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.club_section_order")}</label>
          <div class="section-order">${(0,r.tC)(this._config.section_order).map((e,t,a)=>{const s=this._t(`club.section_${e}`);return i.qy`<div><span>${s}</span><button aria-label="${s}: ↑" title="${s}: ↑" ?disabled=${0===t} @click=${()=>this._moveSection(e,-1)}>↑</button><button aria-label="${s}: ↓" title="${s}: ↓" ?disabled=${t===a.length-1} @click=${()=>this._moveSection(e,1)}>↓</button></div>`})}</div>
        </div>
        <div class="option">
          <label>${this._t("editor.show_transfers")}</label>
          <ha-switch .checked=${!1!==this._config.show_transfers} data-config-value="show_transfers" @change=${this._switchChanged}></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.max_transfers")}</label>
          <input type="number" min="1" max="25" .value=${this._config.max_transfers??8} data-config-value="max_transfers" @change=${this._numberChanged}>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>

        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-club-editor")||customElements.define("soccer-live-club-editor",o)},3777(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(5247),o=a(4522),l=a(1979),c=a(226),d=a(5360),p=a(7554),h=a(6195);class u extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_squadExpanded:{type:Boolean},_transferFilter:{type:String},_selectedPlayer:{type:Object},_selectedTransfer:{type:Object},_comparisonPlayers:{type:Array},_squadQuery:{type:String},_positionFilter:{type:String},_availabilityFilter:{type:String},_favoriteIds:{type:Array},_sectionState:{type:Object}}}setConfig(e){if(!e.entity)throw new Error("Entity required");const t=this._config?.entity!==e.entity;this._config=e,(0,n.K)(this,e),this._isLoading=!0,void 0===this._squadExpanded&&(this._squadExpanded=!1),void 0===this._transferFilter&&(this._transferFilter="all"),Array.isArray(this._comparisonPlayers)||(this._comparisonPlayers=[]),void 0===this._squadQuery&&(this._squadQuery=""),void 0===this._positionFilter&&(this._positionFilter="all"),void 0===this._availabilityFilter&&(this._availabilityFilter="all"),!t&&Array.isArray(this._favoriteIds)||this._loadClubPreferences(),this._selectedPlayer=null,this._selectedTransfer=null}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer),this._removePlayerPortal()}updated(e){if(e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];e&&"unavailable"!==e.state&&(this._isLoading=!1,r.Q.set(this._config.entity,e.attributes))}(e.has("_selectedPlayer")||e.has("_selectedTransfer"))&&(this._selectedPlayer||this._selectedTransfer?this._openPlayerPortal():this._removePlayerPortal())}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_selectPlayer(e,t=null){this._portalReturnFocus=t||document?.activeElement||null,this._portalReturnFocusKey=t?.dataset?.focusKey||"",this._selectedPlayer=e}_selectTransfer(e,t=null){this._portalReturnFocus=t||document?.activeElement||null,this._portalReturnFocusKey=t?.dataset?.focusKey||"",this._selectedTransfer=e}_detailFocusKey(e,t){return`${e}:${t?.id??t?.player_id??t?.name??t?.player??""}:${t?.date??""}:${t?.direction??""}`}_closePlayerDetail(){this._selectedPlayer=null,this._selectedTransfer=null}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return(0,l.bY)(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=r.Q.get(e);if(!t?.data?.club)return(0,o.PA)("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else a=t.attributes;else{const t=r.Q.get(e);if(!t?.data?.club)return(0,o.PA)("⚠️",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}const i=a?.club;return(0,h.oD)(i)?this._renderCard(i,a):this._isLoading&&!a?(0,l.bY)(this._t("ui.loading")):(0,o._$)(a,e=>this._t(e),()=>(0,o.QG)("🏟️",this._t("club.empty"),this._t("club.empty_hint"),""))}_renderCard(e,t){this._clubAttrs=t;const a=e.profile||{},s=!0===this._config.hide_header,n=!0===this._config.dashboard_mode,r={profile:()=>this._renderProfile(a,e.coach),matchday:()=>!1!==this._config.show_matchday?this._renderMatchday(t):"",dashboard:()=>n?"":this._renderDashboard(e,t),quality:()=>!1!==this._config.show_data_quality?this._renderDataQuality(t):"",availability:()=>!1!==this._config.show_availability?this._renderAvailability(e.squad||[]):"",selection:()=>!1!==this._config.show_selection?this._renderSelection(t):"",prediction:()=>!1!==this._config.show_prediction?this._renderPrediction(e.squad||[],e.transfers||[]):"",news:()=>!1!==this._config.show_team_news?this._renderTeamNews(e,t.club_changes||e.changes):"",season:()=>n||!1===this._config.show_season_progress?"":this._renderSeasonProgress(t),changes:()=>this._renderClubChanges(t.club_changes||e.changes),favorites:()=>this._renderFavorites(e.squad||[],t.player_watchlist),records:()=>n?"":this._renderClubRecords(t),analysis:()=>n||!1===this._config.show_squad_analysis?"":this._renderCollapsible("analysis",this._t("club.squad_analysis"),this._renderSquadAnalysis(e.squad||[]),!0),injuries:()=>!1!==this._config.show_injuries?this._renderCollapsible("injuries",this._t("club.injury_center"),this._renderInjuryCenter(e),!0):"",comparison:()=>n?"":this._renderPlayerComparison(),squad:()=>n||!1===this._config.show_squad?"":this._renderCollapsible("squad",this._t("club.squad"),this._renderSquad(e.squad||[]),!1),transfers:()=>!1!==this._config.show_transfers?n?this._renderTransfers(e.transfers||[],1):this._renderCollapsible("transfers",this._t("club.transfers"),this._renderTransfers(e.transfers||[]),!1):"",automations:()=>!0===this._config.show_automations?this._renderAutomations():""},o=(0,h.tC)(this._config.section_order);return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
          ${s?"":(0,c.t7)({logo:a.logo,title:a.name||this._t("card.club"),fallbackIcon:"🏟️"})}
          ${o.map(e=>r[e]())}
          <div class="clb-note">${this._t("club.cache_note")}</div>
        </div>
      </ha-card>
    `}_renderDataQuality(e){const t="fotmob_private"===e.provider?"FotMob":e.provider||"Soccer Live",a=e.sync_status||"ready",s=this.hass?.states?.[this._config.entity],n=s?.last_updated?new Date(s.last_updated):null,r=n?Math.max(0,Math.round((Date.now()-n.getTime())/6e4)):null,o=e.data_quality||{};return i.qy`<section class="clb-quality ${a}">
      <span>${"ready"===a?"●":"▲"} ${t}</span>
      ${null!=o.average_completeness?i.qy`<b title=${this._t("quality.completeness")}>${o.average_completeness}%</b>`:""}
      <small>${null==r?this._t("club.freshness_unknown"):r<1?this._t("club.just_updated"):this._t("club.updated_minutes",{n:r})}</small>
    </section>`}_renderAvailability(e){const t=(0,h.Od)(e);return t.length?i.qy`<section class="clb-section clb-availability"><div class="clb-title">${this._t("club.availability_radar")}</div><div class="clb-radar">${t.map(e=>i.qy`<div class=${e.thin?"thin":""}><span>${this._t(e.key)}</span><i><b style="width:${e.total?e.available/e.total*100:0}%"></b></i><strong>${e.available}/${e.total}</strong>${e.thin?i.qy`<em>⚠</em>`:""}</div>`)}</div></section>`:""}_renderPrediction(e,t){const a=(0,h.i2)(e,t);return a?this._renderCollapsible("prediction",this._t("club.predicted_lineup"),i.qy`<section class="clb-section clb-lineup"><small>${this._t("club.prediction_disclaimer")} · ${a.formation}</small>${a.lines.map(e=>i.qy`<div>${e.map(e=>i.qy`<button data-focus-key=${this._detailFocusKey("player",e)} @click=${t=>this._selectPlayer(e,t.currentTarget)}>${e.name}</button>`)}</div>`)}</section>`,!1):""}_renderSelection(e){const t=(0,h.IK)(e);return t?this._renderCollapsible("selection",this._t("club.official_selection"),i.qy`<section class="clb-section clb-selection"><div><strong>${this._t("club.starting_players")}</strong>${t.starters.map(e=>i.qy`<span>${e.name||e.player}</span>`)}</div>${t.substitutes.length?i.qy`<div><strong>${this._t("club.substitutes")}</strong>${t.substitutes.map(e=>i.qy`<span>${e.name||e.player}</span>`)}</div>`:""}</section>`,!0):""}_renderTeamNews(e,t){const a=(0,h.zu)(e,t);return a.length?this._renderCollapsible("news",this._t("club.team_news"),i.qy`<section class="clb-section clb-news">${a.map(e=>{return i.qy`<div><b>${t=e.type,{transfer_added:"↔",injury_added:"✚",player_available:"✓",coach_changed:"👤",squad_added:"+",squad_removed:"−",market_value_changed:"€"}[t]||"•"}</b><span><strong>${e.player||e.name||this._t(`club.change_${e.type}`)}</strong><small>${this._teamNewsDetail(e)}</small></span><time>${(0,h.Bg)(e.date)}</time></div>`;var t})}</section>`,!0):""}_teamNewsDetail(e){return"injury"===e.source?this._returnLabel(e.detail):"transfer"===e.source||"transfer_added"===e.type?"in"===e.detail?this._t("club.transfer_in"):"out"===e.detail?this._t("club.transfer_out"):this._transferTypeLabel(e.detail):e.detail||(e.type?this._t(`club.change_${e.type}`):"")}_automationYaml(e,t){return`alias: ${t}\ntrigger:\n  - platform: event\n    event_type: ${e}\naction:\n  - service: notify.notify\n    data:\n      message: "${t}"`}_renderAutomations(){return this._renderCollapsible("automations",this._t("club.automation_examples"),i.qy`<section class="clb-section clb-automations">${[["soccer_live_lineup_available","club.automation_lineup"],["soccer_live_injury_added","club.automation_injury"],["soccer_live_player_available","club.automation_available"],["soccer_live_transfer_added","club.automation_transfer"],["soccer_live_match_started","club.automation_started"],["soccer_live_goal","club.automation_goal"]].map(([e,t])=>{const a=this._t(t);return i.qy`<div><span><strong>${a}</strong><small>${e}</small></span><button @click=${()=>navigator.clipboard?.writeText(this._automationYaml(e,a))}>${this._t("club.copy_yaml")}</button></div>`})}</section>`,!1)}_renderClubChanges(e){const t=Array.isArray(e)?e:[];return t.length?i.qy`<section class="clb-changes"><div class="clb-title">${this._t("club.since_update")}</div><div>${t.slice(0,6).map(e=>{return i.qy`<span class=${e.type||""}><b>${t=e.type,{transfer_added:"↔",injury_added:"✚",player_available:"✓",coach_changed:"👤",squad_added:"+",squad_removed:"−",market_value_changed:"€"}[t]||"•"}</b>${e.player||e.name||this._t(`club.change_${e.type}`)}${null!=e.delta?i.qy`<small>${Number(e.delta)>0?"+":""}${"market_value_changed"===e.type?this._formatValue(e.delta):e.delta}</small>`:""}</span>`;var t})}</div></section>`:""}_preferenceKey(){return`soccer-live-club:${this._config?.entity||"default"}`}_loadClubPreferences(){let e={};try{e=JSON.parse(localStorage.getItem(this._preferenceKey())||"{}")}catch(e){}this._favoriteIds=Array.isArray(e.favorites)?e.favorites:[],this._sectionState=e.sections&&"object"==typeof e.sections?e.sections:{}}_saveClubPreferences(){try{localStorage.setItem(this._preferenceKey(),JSON.stringify({favorites:this._favoriteIds||[],sections:this._sectionState||{}}))}catch(e){}}_renderCollapsible(e,t,a,s){if(!a)return"";if(!1===this._config.collapse_sections)return a;const n=this._sectionState?.[e]??s;return i.qy`<details class="clb-collapse clb-collapse-${e}" ?open=${n} @toggle=${t=>{this._sectionState={...this._sectionState||{},[e]:t.currentTarget.open},this._saveClubPreferences()}}><summary>${t}<span>${n?"−":"+"}</span></summary>${a}</details>`}_playerKey(e){return String(e?.id??e?.name??"")}_toggleFavorite(e){const t=this._playerKey(e);if(!t)return;const a=this._favoriteIds||[];this._favoriteIds=a.includes(t)?a.filter(e=>e!==t):[...a,t],this._saveClubPreferences()}_renderFavorites(e,t){const a=[...Array.isArray(t)?t:[],...(e||[]).filter(e=>this._favoriteIds?.includes(this._playerKey(e)))].filter((e,t,a)=>a.findIndex(t=>this._playerKey(t)===this._playerKey(e))===t);return a.length?i.qy`<section class="clb-favorites"><div class="clb-title">★ ${this._t("club.favorites")}</div><div class="clb-favorite-grid">${a.map(e=>i.qy`<button data-focus-key=${this._detailFocusKey("player",e)} @click=${t=>this._selectPlayer(e,t.currentTarget)}>${e.photo?i.qy`<img src=${e.photo} alt="">`:i.qy`<span>${e.number??"★"}</span>`}<strong>${e.name}</strong><small>${e.injured?this._t("club.unavailable"):[null!=e.goals?`${e.goals} G`:"",null!=e.assists?`${e.assists} A`:"",e.rating||""].filter(Boolean).join(" · ")||e.position||""}</small></button>`)}</div></section>`:""}_renderClubRecords(e){if(!1===this._config.show_club_records)return"";const t=(0,h.x8)(e.previous_matches,e.team_id,e.team_name);if(!t)return"";const a=i.qy`<section class="clb-records"><div class="clb-record-grid">
      <div><strong>${t.unbeaten}</strong><span>${this._t("club.unbeaten")}</span></div>
      <div><strong>${t.winning}</strong><span>${this._t("club.winning_streak")}</span></div>
      <div><strong>${t.cleanSheets}</strong><span>${this._t("club.clean_sheet_streak")}</span></div>
      <div><strong>${t.averageGoals.toFixed(1)}</strong><span>${this._t("club.average_goals")}</span></div>
    </div>${t.biggestWin?i.qy`<div class="clb-biggest"><span>${this._t("club.biggest_win")}</span><b>${t.biggestWin.score} · ${t.biggestWin.opponent}</b></div>`:""}
    ${null!=t.home.pointsPerGame||null!=t.away.pointsPerGame?i.qy`<div class="clb-split"><span>${this._t("club.home_ppg")} <b>${t.home.pointsPerGame?.toFixed(2)??"–"}</b></span><span>${this._t("club.away_ppg")} <b>${t.away.pointsPerGame?.toFixed(2)??"–"}</b></span></div>`:""}</section>`;return this._renderCollapsible("records",this._t("club.records"),a,!0)}_renderMatchday(e){const t=(0,h.Wg)(e);if(!t)return"";const{match:a,phase:s}=t,n=this._t(`club.matchday_${s}`),r="pre"===s?(0,h.vr)(a.clock)||(0,h.vr)(a.date)||this._t("status.scheduled"):`${(0,h.vr)(a.home_score)||"–"} – ${(0,h.vr)(a.away_score)||"–"}`,o=(0,h.vr)(a.status),l=d.WY[String(o||"").trim().toLowerCase()],c="pre"===s?this._t("status.scheduled"):"post"===s?this._t("status.full_time"):l?this._t(l):o,p=(0,h.vr)(a.venue),u=a.lineup_home?.length||a.lineup_away?.length||a.formation_home||a.formation_away,g=a.has_stats||Object.keys(a.home_statistics||{}).length||Object.keys(a.away_statistics||{}).length,m=(0,h.Pc)(e.club);return i.qy`<section class="clb-matchday ${s}">
      <div class="clb-matchday-head"><span>${this._t("club.matchday")}</span><b>${n}</b></div>
      <div class="clb-matchday-fixture">
        <span>${a.home_team||""}</span><strong>${r}</strong><span>${a.away_team||""}</span>
      </div>
      ${p||c||u||g?i.qy`<div class="clb-matchday-meta">
        ${c?i.qy`<span>${c}</span>`:""}${p?i.qy`<span>⌖ ${p}</span>`:""}
        ${u?i.qy`<span>✓ ${this._t("tab.lineup")}</span>`:""}${g?i.qy`<span>✓ ${this._t("tab.stats")}</span>`:""}
      </div>`:""}
      ${m?i.qy`<div class="clb-impact">
        <span><b>${m.count}</b>${this._t("club.unavailable_players")}</span>
        ${null!=m.loadPercent?i.qy`<span><b>${m.loadPercent}%</b>${this._t("club.missing_load")}</span>`:""}
        ${m.goals||m.assists?i.qy`<span><b>${m.goals}G · ${m.assists}A</b>${this._t("club.missing_output")}</span>`:""}
      </div>`:""}
    </section>`}_renderSeasonProgress(e){const t=(0,h.xV)(e.previous_matches,e.team_id,e.team_name,this._config.season_progress_matches??12);if(!t.played)return"";const a=Math.max(3,...t.rounds.map(e=>e.points)),s=t.rounds.map((e,i)=>`${1===t.rounds.length?50:i/(t.rounds.length-1)*100},${36-e.points/a*32}`).join(" ");return i.qy`<section class="clb-season">
      <div class="clb-section-head"><div><span>${this._t("club.season_progress")}</span><strong>${t.points} ${this._t("col.points")}</strong></div><small>${t.played} ${this._t("club.matches_played")}</small></div>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" role="img" aria-label="${this._t("club.season_progress")}"><polyline points=${s}></polyline>${t.rounds.map((e,s)=>{const n=1===t.rounds.length?50:s/(t.rounds.length-1)*100,r=36-e.points/a*32;return i.qy`<circle class=${e.result.toLowerCase()} cx=${n} cy=${r} r="1.8"><title>${e.opponent}: ${e.result}, ${e.points}</title></circle>`})}</svg>
      <div class="clb-season-stats"><span>${this._t("club.goals_for")} <b>${t.goalsFor}</b></span><span>${this._t("club.goals_against")} <b>${t.goalsAgainst}</b></span><span>${this._t("club.goal_difference")} <b>${t.goalsFor-t.goalsAgainst>0?"+":""}${t.goalsFor-t.goalsAgainst}</b></span></div>
    </section>`}_renderDashboard(e,t){const a=e.squad||[],s=(0,h.V5)(e),n=e.transfers||[],r=(t.previous_matches||[]).slice(-5).reverse(),o=String(t.team_id??""),l=r.map(e=>{const t=String(e.home_id??"")===o,a=Number(t?e.home_score:e.away_score),i=Number(t?e.away_score:e.home_score);return Number.isFinite(a)&&Number.isFinite(i)?a>i?"W":a<i?"L":"D":null}).filter(Boolean),c=!1===this._config.show_matchday?t.next_match:null,d=(0,h.mR)(a);return c||a.length||s.length||n.length||l.length?i.qy`<div class="clb-dashboard">
      ${c?i.qy`<div class="clb-next"><span>${this._t("club.next_match")}</span><strong>${c.home_team} – ${c.away_team}</strong><small>${c.date||""}</small></div>`:""}
      <div class="clb-kpis">
        <div><strong>${a.length}</strong><span>${this._t("club.squad")}</span></div>
        <div><strong>${s.length}</strong><span>${this._t("club.injuries")}</span></div>
        <div><strong>${n.length}</strong><span>${this._t("club.transfers")}</span></div>
      </div>
      ${d.total?i.qy`<div class="clb-market-summary">
        <div><span>${this._t("club.squad_value")}</span><strong>${this._formatValue(d.total)}</strong></div>
        ${null!=d.average_age?i.qy`<div><span>${this._t("club.average_age")}</span><strong>${d.average_age.toFixed(1)}</strong></div>`:""}
        <small>${this._t("club.valued_players",{n:d.valued_count})}</small>
      </div>`:""}
      ${d.total?this._renderMarketDistribution(a,d):""}
      ${l.length?i.qy`<div class="clb-form"><span>${this._t("team.form")}</span>${l.map(e=>i.qy`<b class=${e.toLowerCase()}>${e}</b>`)}</div>`:""}
    </div>`:""}_renderMarketDistribution(e,t){const a=Object.entries(t.by_position||{}).sort((e,t)=>t[1]-e[1]),s=[...e].filter(e=>Number(e.market_value)>0).sort((e,t)=>Number(t.market_value)-Number(e.market_value)).slice(0,3);return i.qy`<div class="clb-market-dist">
      ${a.map(([e,a])=>i.qy`<div class="clb-market-row"><span>${e}</span><i><b style="width:${Math.round(a/t.total*100)}%"></b></i><strong>${this._formatValue(a)}</strong></div>`)}
      ${s.length?i.qy`<div class="clb-top-values">${s.map((e,t)=>i.qy`<span>${t+1}. ${e.name}<b>${this._formatValue(e.market_value)}</b></span>`)}</div>`:""}
    </div>`}_renderSquadAnalysis(e){const t=(0,h.Fn)(e);return t.lines.length?i.qy`<section class="clb-analysis">
      <div class="clb-title">${this._t("club.squad_analysis")}</div>
      <div class="clb-analysis-grid">${t.lines.map(e=>i.qy`<div><strong>${e.count}</strong><span>${this._t(`club.${String(e.position).toLowerCase()}s`)}</span>${null!=e.averageAge?i.qy`<small>Ø ${e.averageAge.toFixed(1)} ${this._t("club.years_short")}</small>`:""}${e.value?i.qy`<small>${this._formatValue(e.value)}</small>`:""}</div>`)}</div>
      ${t.youngest||t.oldest?i.qy`<div class="clb-age-extremes">
        ${t.youngest?i.qy`<span>${this._t("club.youngest")}<b>${t.youngest.name} · ${t.youngest.age}</b></span>`:""}
        ${t.oldest?i.qy`<span>${this._t("club.oldest")}<b>${t.oldest.name} · ${t.oldest.age}</b></span>`:""}
      </div>`:""}
      ${t.thin.length?i.qy`<small class="clb-thin">⚠ ${this._t("club.thin_positions")}: ${t.thin.map(e=>this._t(`club.${String(e.position).toLowerCase()}s`)).join(", ")}</small>`:""}
    </section>`:""}_renderInjuryCenter(e){const t=(0,h.V5)(e);return t.length?i.qy`<section class="clb-section clb-injuries">
      <div class="clb-title">${this._t("club.injury_center")} <b>${t.length}</b></div>
      ${t.map(e=>i.qy`<div class="clb-injury">
        <span class="clb-injury-icon">✚</span><div><strong>${e.player}</strong><small>${this._positionLabel(e.position)||e.type||this._t("club.unavailable")}</small></div>
        ${e.expected_return?i.qy`<span class="clb-return"><small>${this._t("club.expected_return")}</small>${this._returnLabel(e.expected_return)}</span>`:""}
      </div>`)}
    </section>`:""}_toggleComparison(e){const t=String(e?.id??e?.name??""),a=this._comparisonPlayers||[],i=a.some(e=>String(e?.id??e?.name??"")===t);this._comparisonPlayers=i?a.filter(e=>String(e?.id??e?.name??"")!==t):[...a.slice(-1),e]}_renderPlayerComparison(){const e=this._comparisonPlayers||[];if(!e.length)return"";const t=(0,h.Tr)(e);return i.qy`<section class="clb-comparison">
      <div class="clb-comparison-head"><div class="clb-title">${this._t("club.player_comparison")}</div><button @click=${()=>{this._comparisonPlayers=[]}}>${this._t("club.clear")}</button></div>
      ${t?i.qy`
        <div class="clb-compare-names"><strong>${t.players[0].name}</strong><span>${this._t("match.vs")}</span><strong>${t.players[1].name}</strong></div>
        ${t.fields.map(e=>i.qy`<div class="clb-compare-row"><b>${this._comparisonValue(e,t.players[0][e])}</b><span>${this._t("age"===e?"club.age_label":"market_value"===e?"club.market_value":"appearances"===e?"club.appearances":"rating"===e?"club.rating":`stat.${e}`)}</span><b>${this._comparisonValue(e,t.players[1][e])}</b></div>`)}
      `:i.qy`<div class="clb-compare-pick"><span>${e[0].name}</span><small>${this._t("club.select_second_player")}</small></div>`}
    </section>`}_comparisonValue(e,t){return null==t||""===t?"–":"market_value"===e?this._formatValue(t):t}_positionLabel(e){const t=String(e||"").trim().toLowerCase(),a={goalkeeper:"goalkeeper",defender:"defender",midfielder:"midfielder",attacker:"attacker",forward:"attacker"};return a[t]?this._t(`club.position_${a[t]}`):e||""}_returnLabel(e){const t=String(e||"").trim(),a={"day to day":"day_to_day","about a week":"about_week","a few days":"few_days"};if(a[t.toLowerCase()])return this._t(`club.return_${a[t.toLowerCase()]}`);const i=t.match(/^(early|mid|late)\s+([a-z]+)(?:\s+(\d{4}))?$/i);if(!i)return t;const s=["january","february","march","april","may","june","july","august","september","october","november","december"].indexOf(i[2].toLowerCase())+1;if(!s)return t;const n=`${this._t(`month.${s}`)}${i[3]?` ${i[3]}`:""}`;return this._t(`club.return_${i[1].toLowerCase()}`).replace("{date}",n)}_transferTypeLabel(e){const t=String(e||"").trim().toLowerCase();return["loan","on loan","loan transfer"].includes(t)?this._t("club.transfer_loan"):["free","free transfer"].includes(t)?this._t("club.transfer_free"):"permanent"===t?this._t("club.transfer_permanent"):"contract"===t?this._t("club.transfer_contract"):e||""}_clubNameLabel(e){const t=String(e||"").trim().toLowerCase();return["free agent","without club","no club"].includes(t)?this._t("club.free_agent"):e||""}_transferFee(e){if(null!=e.fee&&""!==e.fee)return this._formatValue(e.fee);const t=String(e.fee_text||"").trim();return/[€£$]|\d/.test(t)?t:""}_renderPlayerDetail(){const e=this._selectedPlayer,t=this._selectedTransfer,a=(e,t)=>null!=t&&""!==t?i.qy`<div><span>${e}</span><strong>${t}</strong></div>`:"";return t?i.qy`<div class="clb-player-overlay" @click=${e=>{e.target===e.currentTarget&&this._closePlayerDetail()}}>
      <section class="clb-player-modal" role="dialog" aria-modal="true" aria-label=${t.player||this._t("club.transfers")}><button aria-label=${this._t("generic.close")} title=${this._t("generic.close")} @click=${()=>this._closePlayerDetail()}>×</button>
        ${t.photo?i.qy`<img src=${t.photo} alt="">`:i.qy`<div class="clb-transfer-avatar">${"in"===t.direction?"↓":"↑"}</div>`}<h3>${t.player}</h3><p>${"in"===t.direction?this._t("club.transfer_in"):this._t("club.transfer_out")}</p>
        <div class="clb-player-facts">${a(this._t("club.from"),this._clubNameLabel(t.from))}${a(this._t("club.to"),this._clubNameLabel(t.to))}${a(this._t("club.transfer_date"),(0,h.Bg)(t.date))}${a(this._t("club.transfer_type"),this._transferTypeLabel(t.type))}${a(this._t("club.transfer_fee"),this._transferFee(t))}</div>
      </section></div>`:e?i.qy`<div class="clb-player-overlay" @click=${e=>{e.target===e.currentTarget&&this._closePlayerDetail()}}>
      <section class="clb-player-modal" role="dialog" aria-modal="true" aria-label=${e.name}><button aria-label=${this._t("generic.close")} title=${this._t("generic.close")} @click=${()=>this._closePlayerDetail()}>×</button>
        ${e.photo?i.qy`<img src=${e.photo} alt="">`:""}<h3>${e.name}</h3><p>${this._positionLabel(e.position)}</p>
        <div class="clb-player-facts">${a(this._t("club.market_value"),e.market_value?this._formatValue(e.market_value):"")}
          ${a(this._t("club.age_label"),e.age)}${a(this._t("club.shirt_number"),e.number)}${a(this._t("club.nationality"),e.nationality)}${a(this._t("club.contract_until"),e.contract_until)}
          ${a(this._t("club.appearances"),e.appearances)}${a(this._t("club.starts"),e.starts)}${a(this._t("stat.goals"),e.goals)}${a(this._t("stat.assists"),e.assists)}${a(this._t("club.rating"),e.rating)}${a(this._t("club.availability"),e.injured?this._t("club.unavailable"):this._t("club.available"))}
        </div>
        ${Array.isArray(e.recent_matches)&&e.recent_matches.length?i.qy`<div class="clb-player-recent">
          <h4>${this._t("club.recent_matches")}</h4>
          ${e.recent_matches.slice(0,5).map(e=>i.qy`<div class="clb-recent-row">
            <i class=${e.starter?"starter":"substitute"} aria-hidden="true">${e.starter?"XI":"↥"}</i>
            <span><strong>${e.opponent||e.name}</strong><small>${e.starter?this._t("club.starting_player"):this._t("club.substitute")}</small></span>
            <b class=${Number(e.rating)>=7?"good":""}>${[e.rating,null!=e.minutes&&""!==e.minutes?`${e.minutes}'`:""].filter(Boolean).join(" · ")||"–"}</b>
          </div>`)}
        </div>`:""}
      </section>
    </div>`:""}_openPlayerPortal(){if((this._selectedPlayer||this._selectedTransfer)&&document?.body){if(this._playerPortal||(this._playerPortal=document.createElement("dialog"),this._playerPortal.className="soccer-live-club-player-portal",this._onPlayerPortalCancel=e=>{e.preventDefault(),this._closePlayerDetail()},this._onPlayerPortalKeydown=e=>{"Escape"===e.key&&(e.preventDefault(),this._closePlayerDetail())},this._onPlayerPortalClick=e=>{e.target===this._playerPortal&&this._closePlayerDetail()},this._playerPortal.addEventListener("cancel",this._onPlayerPortalCancel),this._playerPortal.addEventListener("keydown",this._onPlayerPortalKeydown),this._playerPortal.addEventListener("click",this._onPlayerPortalClick),document.body.appendChild(this._playerPortal)),this._copyPlayerPortalThemeVars(),(0,i.XX)(i.qy`${this._renderPlayerPortalStyles()}${this._renderPlayerDetail()}`,this._playerPortal),!this._playerPortal.open)try{this._playerPortal.showModal()}catch(e){this._playerPortal.setAttribute("open","")}requestAnimationFrame(()=>this._playerPortal?.querySelector(".clb-player-modal > button")?.focus())}}_copyPlayerPortalThemeVars(){if(!this._playerPortal||"function"!=typeof getComputedStyle)return;const e=getComputedStyle(this);["--cl-bg","--cl-text","--cl-text-2","--cl-divider","--cl-accent","--cl-accent-soft","--cl-card-2","--cl-green","--cl-live"].forEach(t=>{const a=e.getPropertyValue(t);a&&this._playerPortal.style.setProperty(t,a)})}_removePlayerPortal(){if(!this._playerPortal)return;if(this._playerPortal.open&&"function"==typeof this._playerPortal.close)try{this._playerPortal.close()}catch(e){}this._playerPortal.removeEventListener("cancel",this._onPlayerPortalCancel),this._playerPortal.removeEventListener("keydown",this._onPlayerPortalKeydown),this._playerPortal.removeEventListener("click",this._onPlayerPortalClick),(0,i.XX)(i.qy``,this._playerPortal);const e=this._portalReturnFocus,t=this._portalReturnFocusKey;this._portalReturnFocus=null,this._portalReturnFocusKey="",this._playerPortal.remove(),this._playerPortal=null,setTimeout(()=>{const a=e?.isConnected?e:[...this.shadowRoot?.querySelectorAll("[data-focus-key]")||[]].find(e=>e.dataset.focusKey===t);"function"==typeof a?.focus&&a.focus()},0)}_renderPlayerPortalStyles(){return i.qy`<style>
      .soccer-live-club-player-portal {
        border: 0; padding: 0; margin: auto; width: 100vw; height: 100vh;
        max-width: none; max-height: none; overflow: hidden; background: transparent;
        color: var(--cl-text, #e2e8f0);
      }
      .soccer-live-club-player-portal::backdrop {
        background: rgba(0,0,0,.72); backdrop-filter: blur(6px);
      }
      .clb-player-overlay { width:100%; height:100%; display:grid; place-items:center; padding:16px; box-sizing:border-box; }
      .clb-player-modal { position:relative; width:min(360px,100%); box-sizing:border-box; padding:22px; border-radius:18px; background:var(--cl-bg,#111827); border:1px solid var(--cl-divider,rgba(255,255,255,.12)); box-shadow:0 24px 60px rgba(0,0,0,.5); text-align:center; }
      .clb-player-modal>button { position:absolute; right:10px; top:8px; border:0; background:transparent; color:var(--cl-text-2,#94a3b8); font-size:24px; cursor:pointer; }
      .clb-player-modal>img { width:84px; height:84px; border-radius:50%; object-fit:cover; background:rgba(255,255,255,.05); }
      .clb-transfer-avatar { display:grid; place-items:center; width:84px; height:84px; margin:auto; border-radius:50%; background:var(--cl-accent-soft,rgba(99,102,241,.12)); color:var(--cl-accent,#6366f1); font-size:38px; font-weight:900; }
      .clb-player-modal h3 { margin:8px 0 2px; color:var(--cl-text,#e2e8f0); }
      .clb-player-modal p { margin:0 0 12px; color:var(--cl-text-2,#94a3b8); }
      .clb-player-facts { display:grid; grid-template-columns:1fr 1fr; gap:7px; text-align:left; }
      .clb-player-facts div { display:flex; flex-direction:column; padding:8px; border-radius:8px; background:rgba(255,255,255,.04); }
      .clb-player-facts span { font-size:9px; color:var(--cl-text-2,#94a3b8); }
      .clb-player-facts strong { font-size:12px; color:var(--cl-text,#e2e8f0); }
      .clb-player-recent { margin-top:14px; text-align:left; }
      .clb-player-recent h4 { margin:0 0 6px; color:var(--cl-text-2,#94a3b8); font-size:10px; line-height:1.2; text-transform:uppercase; letter-spacing:.08em; }
      .clb-recent-row { display:grid; grid-template-columns:24px minmax(0,1fr) 34px; gap:8px; align-items:center; padding:7px 8px; border-top:1px solid var(--cl-divider,rgba(255,255,255,.1)); }
      .clb-recent-row>i { display:grid; place-items:center; width:22px; height:22px; border-radius:7px; background:rgba(148,163,184,.12); color:var(--cl-text-2,#94a3b8); font-size:9px; font-style:normal; font-weight:800; }
      .clb-recent-row>i.starter { background:rgba(16,185,129,.14); color:#34d399; }
      .clb-recent-row>span { min-width:0; display:flex; flex-direction:column; }
      .clb-recent-row>span strong { overflow:hidden; color:var(--cl-text,#e2e8f0); font-size:11px; line-height:1.25; text-overflow:ellipsis; white-space:nowrap; }
      .clb-recent-row>span small { color:var(--cl-text-2,#94a3b8); font-size:8px; }
      .clb-recent-row>b { justify-self:end; min-width:28px; padding:4px 3px; border-radius:7px; background:rgba(148,163,184,.12); color:var(--cl-text,#e2e8f0); font-size:11px; text-align:center; }
      .clb-recent-row>b.good { background:rgba(16,185,129,.14); color:#34d399; }
      @media (max-width: 420px) { .clb-player-facts { grid-template-columns:1fr; } }
    </style>`}_formatValue(e){return Number.isFinite(Number(e))?new Intl.NumberFormat((0,s.$c)(this.hass,this._config),{style:"currency",currency:"EUR",notation:"compact",maximumFractionDigits:1}).format(Number(e)):""}_renderProfile(e,t){const a=(e,t)=>t?i.qy`<span class="clb-chip"><span class="clb-ic">${e}</span>${t}</span>`:"",s=e.venue?`${e.venue}${e.venue_city?` · ${e.venue_city}`:""}`:"";return s||e.founded||t?i.qy`
      <div class="clb-profile">
        ${a("🏟️",s)}
        ${a("📅",e.founded?this._t("club.founded",{year:e.founded}):"")}
        ${a("👤",t||"")}
      </div>
    `:""}_renderSquad(e){const t=(0,h.YW)(e);if(!t.length)return"";const a=(0,h.J5)(e,this._squadQuery,this._positionFilter,this._availabilityFilter),s=(0,h.YW)(a),n=!1===this._config.squad_collapsed?0:this._config.squad_preview??3,{groups:r,hidden:o}=this._squadExpanded?{groups:s,hidden:0}:(0,h.ws)(s,n),l=this._squadExpanded?0:(0,h.ws)(s,n).hidden;return i.qy`
      <div class="clb-section">
        <div class="clb-title">${this._t("club.squad")}</div>
        <div class="clb-squad-tools">
          <input type="search" placeholder=${this._t("club.search_players")} .value=${this._squadQuery} @input=${e=>{this._squadQuery=e.target.value}}>
          <select .value=${this._positionFilter} @change=${e=>{this._positionFilter=e.target.value}}><option value="all">${this._t("club.all_positions")}</option>${t.map(e=>i.qy`<option value=${e.pos}>${this._t(e.key)}</option>`)}</select>
          <select .value=${this._availabilityFilter} @change=${e=>{this._availabilityFilter=e.target.value}}><option value="all">${this._t("club.all_availability")}</option><option value="available">${this._t("club.available")}</option><option value="unavailable">${this._t("club.unavailable")}</option></select>
        </div>
        ${s.length?"":i.qy`<div class="clb-no-results">${this._t("club.no_players_found")}</div>`}
        ${r.map(({key:e,players:t})=>i.qy`
            <div class="clb-pos-group">
              <div class="clb-pos">${this._t(e)}</div>
              ${t.map(e=>i.qy`
                <div class="clb-player" role="button" tabindex="0" data-focus-key=${this._detailFocusKey("player",e)} @click=${t=>this._selectPlayer(e,t.currentTarget)} @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._selectPlayer(e,t.currentTarget))}}>
                  <span class="clb-num">${e.number??"·"}</span>
                  <span class="clb-pname">${e.name}</span>
                  ${null!=e.age?i.qy`<span class="clb-age">${this._t("club.age",{n:e.age})}</span>`:""}
                  ${e.market_value?i.qy`<span class="clb-value">${this._formatValue(e.market_value)}</span>`:""}
                  <button class="clb-favorite-toggle ${this._favoriteIds.includes(this._playerKey(e))?"sel":""}" title=${this._t("club.favorite")} aria-label=${this._t("club.favorite")} @click=${t=>{t.stopPropagation(),this._toggleFavorite(e)}}>★</button>
                  <button class="clb-compare-toggle ${this._comparisonPlayers.some(t=>String(t?.id??t?.name)===String(e?.id??e?.name))?"sel":""}" title=${this._t("club.compare")} aria-label=${this._t("club.compare")} @click=${t=>{t.stopPropagation(),this._toggleComparison(e)}}>⇄</button>
                </div>
              `)}
            </div>
          `)}
        ${(l>0||this._squadExpanded)&&n>0?i.qy`
          <button class="clb-more" @click=${()=>{this._squadExpanded=!this._squadExpanded}}>
            ${this._squadExpanded?this._t("club.show_less"):this._t("club.show_all",{n:l})}
          </button>
        `:""}
      </div>
    `}_renderTransfers(e,t=null){const a=(0,h.Mn)(e);if(!a.all)return"";const s=["in","out"].includes(this._transferFilter)?this._transferFilter:"all",n=(0,h.VK)(e,s),r=(0,h.BD)(n,t??this._config.max_transfers??8),o=(0,h.CN)(e),l=(e,t,a)=>i.qy`
      <button class="clb-filter ${s===e?"sel":""}" @click=${()=>{this._transferFilter=e}}>
        ${this._t(t)} ${a}
      </button>`;return i.qy`
      <div class="clb-section">
        <div class="clb-transfers-head">
          <div class="clb-title">${this._t("club.transfers")}</div>
          ${a.in&&a.out?i.qy`
            <div class="clb-filters">
              ${l("all","club.filter_all",a.all)}
              ${l("in","club.filter_in",a.in)}
              ${l("out","club.filter_out",a.out)}
            </div>
          `:""}
        </div>
        ${o.feeCoverage||o.loans||o.free?i.qy`<div class="clb-transfer-summary">
          ${o.feeCoverage?i.qy`<div><span>${this._t("club.spent")}</span><b>${this._formatValue(o.spent)}</b></div><div><span>${this._t("club.income")}</span><b>${this._formatValue(o.income)}</b></div><div><span>${this._t("club.balance")}</span><b class=${o.balance>=0?"positive":"negative"}>${o.balance>0?"+":""}${this._formatValue(o.balance)}</b></div>`:""}
          ${o.loans?i.qy`<small>${this._t("club.loans")}: ${o.loans}</small>`:""}${o.free?i.qy`<small>${this._t("club.free_transfers")}: ${o.free}</small>`:""}
        </div>`:""}
        ${Object.keys(o.windows).length>1?i.qy`<div class="clb-windows">${Object.entries(o.windows).sort().reverse().map(([e,t])=>{const[a,s]=e.split("-");return i.qy`<span>${this._t(`club.${s}_window`)} ${a}<b>${t}</b></span>`})}</div>`:""}
        ${r.map(e=>i.qy`
          <div class="clb-transfer" role="button" tabindex="0" data-focus-key=${this._detailFocusKey("transfer",e)} @click=${t=>this._selectTransfer(e,t.currentTarget)} @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._selectTransfer(e,t.currentTarget))}}>
            <span class="clb-dir ${e.direction}" title="${"in"===e.direction?this._t("club.transfer_in"):this._t("club.transfer_out")}"
                  aria-label="${"in"===e.direction?this._t("club.transfer_in"):this._t("club.transfer_out")}">${"in"===e.direction?"↓":"↑"}</span>
            <div class="clb-tinfo">
              <span class="clb-tplayer">${e.player}</span>
              <span class="clb-tclubs">${this._clubNameLabel((0,h.u7)(e))}</span>
            </div>
            <span class="clb-ttype">${e.type&&"N/A"!==e.type?this._transferTypeLabel(e.type):""}</span>
            <span class="clb-tdate">${(0,h.Bg)(e.date)}</span>
            <span class="clb-open">›</span>
          </div>
        `)}
      </div>
    `}getCardSize(){return 8}static getConfigElement(){return document.createElement("soccer-live-club-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_"}}static get styles(){return[n.G,p.M,i.AH`.clb-profile{display:flex;flex-wrap:wrap;gap:8px;padding:4px 14px 10px;}.clb-quality{display:flex;justify-content:space-between;margin:0 14px 8px;padding:5px 9px;border-radius:8px;background:var(--cl-card-2,rgba(255,255,255,.03));font-size:9px;color:var(--cl-text-2)}.clb-quality span{color:var(--cl-success,#10b981)}.clb-quality:not(.ready) span{color:var(--cl-warning,#f59e0b)}.clb-radar{display:grid;gap:7px}.clb-radar>div{display:grid;grid-template-columns:78px 1fr 32px 15px;align-items:center;gap:7px;font-size:10px;color:var(--cl-text-2)}.clb-radar i{height:7px;border-radius:9px;background:rgba(148,163,184,.18);overflow:hidden}.clb-radar i b{display:block;height:100%;background:var(--cl-success,#10b981)}.clb-radar .thin i b{background:var(--cl-warning,#f59e0b)}.clb-radar strong{color:var(--cl-text);text-align:right}.clb-radar em{font-style:normal}.clb-lineup>small{display:block;text-align:center;color:var(--cl-text-2);margin-bottom:8px}.clb-lineup>div{display:flex;justify-content:center;gap:5px;margin:6px 0}.clb-lineup button{border:1px solid var(--cl-divider);border-radius:10px;padding:5px 7px;background:var(--cl-card-2);color:var(--cl-text);font-size:9px;cursor:pointer}.clb-selection{display:grid;grid-template-columns:1fr 1fr;gap:12px}.clb-selection>div{display:flex;flex-direction:column;gap:4px}.clb-selection strong{color:var(--cl-accent);font-size:10px}.clb-selection span{font-size:10px;color:var(--cl-text)}.clb-news{display:grid;gap:0}.clb-news>div{display:grid;grid-template-columns:24px 1fr auto;align-items:center;padding:7px 0;border-bottom:1px solid var(--cl-divider)}.clb-news>div:last-child{border:0}.clb-news b{color:var(--cl-accent)}.clb-news span{display:flex;flex-direction:column}.clb-news strong{font-size:10px;color:var(--cl-text)}.clb-news small,.clb-news time{font-size:8px;color:var(--cl-text-2)}.clb-automations{display:grid;gap:5px}.clb-automations>div{display:flex;justify-content:space-between;align-items:center;padding:6px;border-radius:8px;background:var(--cl-card-2)}.clb-automations span{display:flex;flex-direction:column}.clb-automations strong{font-size:10px;color:var(--cl-text)}.clb-automations small{font-size:8px;color:var(--cl-text-2)}.clb-automations button{border:1px solid var(--cl-accent);border-radius:7px;background:transparent;color:var(--cl-accent);font-size:9px;padding:4px 7px;cursor:pointer}.clb-player-recent{display:grid;gap:4px;margin-top:10px}.clb-player-recent>strong{color:var(--cl-text-2);font-size:10px;text-transform:uppercase}.clb-player-recent span{display:flex;justify-content:space-between;color:var(--cl-text);font-size:10px}.clb-collapse{margin:8px 14px;border:1px solid var(--cl-divider);border-radius:12px;overflow:hidden}.clb-collapse>summary{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;cursor:pointer;list-style:none;color:var(--cl-text-2);font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.clb-collapse>summary::-webkit-details-marker{display:none}.clb-collapse>summary span{font-size:16px;color:var(--cl-accent)}.clb-collapse[open]>summary{border-bottom:1px solid var(--cl-divider)}.clb-collapse>.clb-section,.clb-collapse>.clb-analysis,.clb-collapse>.clb-records{margin:0;padding:8px 12px 10px;background:transparent}.clb-collapse .clb-title{display:none}.clb-matchday{margin:2px 14px 10px;padding:11px;border:1px solid var(--cl-divider);border-radius:13px;background:linear-gradient(135deg,var(--cl-accent-soft,rgba(99,102,241,.12)),var(--cl-card-2,rgba(255,255,255,.03)))}.clb-matchday.live{border-color:var(--cl-live,#ef4444)}.clb-matchday-head{display:flex;justify-content:space-between;align-items:center;color:var(--cl-text-2);font-size:9px;text-transform:uppercase;letter-spacing:.08em;font-weight:800}.clb-matchday-head b{padding:3px 7px;border-radius:99px;color:var(--cl-accent);background:var(--cl-accent-soft,rgba(99,102,241,.12))}.clb-matchday.live .clb-matchday-head b{color:var(--cl-live,#ef4444)}.clb-matchday-fixture{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:9px;margin-top:10px;color:var(--cl-text);font-size:12px;font-weight:700}.clb-matchday-fixture span:last-child{text-align:right}.clb-matchday-fixture strong{font-size:17px;white-space:nowrap;color:var(--cl-accent)}.clb-matchday-meta{display:flex;flex-wrap:wrap;gap:5px 10px;margin-top:8px;color:var(--cl-text-2);font-size:9px}.clb-impact{display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:5px;margin-top:9px;padding-top:8px;border-top:1px solid var(--cl-divider)}.clb-impact span{display:flex;flex-direction:column;color:var(--cl-text-2);font-size:8px}.clb-impact b{color:var(--cl-text);font-size:11px}.clb-dashboard{margin:0 14px 8px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03));}.clb-next{display:grid;grid-template-columns:1fr auto;gap:2px 8px;margin-bottom:9px;font-size:11px;}.clb-next span,.clb-next small{color:var(--cl-text-2);}.clb-next strong{color:var(--cl-text);}.clb-next small{grid-column:1/-1;}.clb-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;}.clb-kpis div{display:flex;flex-direction:column;align-items:center;padding:7px;border-radius:8px;background:rgba(255,255,255,.035);}.clb-kpis strong{color:var(--cl-accent);font-size:17px;}.clb-kpis span{color:var(--cl-text-2);font-size:9px;text-transform:uppercase;}.clb-market-summary{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px;padding-top:8px;border-top:1px solid var(--cl-divider);}.clb-market-summary div{display:flex;flex-direction:column}.clb-market-summary span,.clb-market-summary small{color:var(--cl-text-2);font-size:9px}.clb-market-summary strong{color:var(--cl-text);font-size:14px}.clb-market-summary small{grid-column:1/-1}.clb-market-dist{margin-top:8px;display:grid;gap:5px}.clb-market-row{display:grid;grid-template-columns:65px 1fr auto;gap:6px;align-items:center;font-size:9px;color:var(--cl-text-2)}.clb-market-row i{height:5px;border-radius:99px;background:rgba(148,163,184,.15);overflow:hidden}.clb-market-row i b{display:block;height:100%;background:var(--cl-accent)}.clb-market-row strong{font-size:9px;color:var(--cl-text)}.clb-top-values{display:grid;gap:3px;margin-top:4px}.clb-top-values span{display:flex;justify-content:space-between;color:var(--cl-text-2);font-size:9px}.clb-top-values b{color:var(--cl-accent)}.clb-form{display:flex;align-items:center;gap:5px;margin-top:9px;color:var(--cl-text-2);font-size:10px;}.clb-form b{display:grid;place-items:center;width:21px;height:21px;border-radius:50%;color:white;}.clb-form .w{background:#16a34a}.clb-form .d{background:#64748b}.clb-form .l{background:#dc2626}.clb-season{margin:8px 14px;padding:11px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-section-head{display:flex;align-items:end;justify-content:space-between}.clb-section-head div{display:flex;flex-direction:column}.clb-section-head span,.clb-section-head small{font-size:9px;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:.06em}.clb-section-head strong{font-size:15px;color:var(--cl-text)}.clb-season svg{display:block;width:100%;height:58px;margin:5px 0;overflow:visible}.clb-season polyline{fill:none;stroke:var(--cl-accent);stroke-width:2;vector-effect:non-scaling-stroke}.clb-season circle{vector-effect:non-scaling-stroke;stroke:var(--cl-bg);stroke-width:1}.clb-season circle.w{fill:#16a34a}.clb-season circle.d{fill:#64748b}.clb-season circle.l{fill:#dc2626}.clb-season-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}.clb-season-stats span{display:flex;flex-direction:column;color:var(--cl-text-2);font-size:9px}.clb-season-stats b{font-size:12px;color:var(--cl-text)}.clb-analysis,.clb-comparison{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-analysis-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.clb-analysis-grid div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:rgba(255,255,255,.035)}.clb-analysis-grid strong{font-size:16px;color:var(--cl-accent)}.clb-analysis-grid span,.clb-analysis-grid small{font-size:8px;color:var(--cl-text-2);overflow:hidden;text-overflow:ellipsis}.clb-age-extremes{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:7px}.clb-age-extremes span{display:flex;flex-direction:column;font-size:8px;color:var(--cl-text-2)}.clb-age-extremes b{font-size:10px;color:var(--cl-text)}.clb-thin{display:block;margin-top:7px;color:var(--cl-text-2);font-size:8px}.clb-record-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.clb-record-grid div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:rgba(255,255,255,.035)}.clb-record-grid strong{font-size:16px;color:var(--cl-accent)}.clb-record-grid span{font-size:8px;color:var(--cl-text-2)}.clb-biggest,.clb-split{display:flex;justify-content:space-between;gap:8px;margin-top:7px;color:var(--cl-text-2);font-size:9px}.clb-biggest b,.clb-split b{color:var(--cl-text)}.clb-favorites{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-favorite-grid{display:flex;gap:6px;overflow-x:auto}.clb-favorite-grid button{display:grid;grid-template-columns:30px minmax(70px,1fr);grid-template-rows:auto auto;gap:0 6px;align-items:center;min-width:145px;padding:7px;border:1px solid var(--cl-divider);border-radius:9px;background:rgba(255,255,255,.025);color:var(--cl-text);text-align:left;cursor:pointer}.clb-favorite-grid img,.clb-favorite-grid button>span{grid-row:1/3;width:30px;height:30px;border-radius:50%;object-fit:cover;display:grid;place-items:center;background:var(--cl-accent-soft);color:var(--cl-accent)}.clb-favorite-grid strong{font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.clb-favorite-grid small{font-size:8px;color:var(--cl-text-2)}.clb-changes{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-changes>div:last-child{display:flex;flex-wrap:wrap;gap:5px}.clb-changes span{display:inline-flex;align-items:center;gap:5px;padding:5px 8px;border:1px solid var(--cl-divider);border-radius:99px;color:var(--cl-text);font-size:9px}.clb-changes span b{color:var(--cl-accent);font-size:12px}.clb-changes span.injury_added b{color:var(--cl-live,#ef4444)}.clb-changes span.player_available b{color:var(--cl-green,#22c55e)}.clb-changes small{color:var(--cl-text-2)}.clb-injuries .clb-title b{display:inline-grid;place-items:center;min-width:17px;height:17px;margin-left:4px;border-radius:50%;background:rgba(239,68,68,.15);color:var(--cl-live,#ef4444)}.clb-injury{display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--cl-divider)}.clb-injury-icon{color:var(--cl-live,#ef4444)}.clb-injury>div{display:flex;flex:1;min-width:0;flex-direction:column}.clb-injury strong{font-size:11px;color:var(--cl-text)}.clb-injury small{font-size:9px;color:var(--cl-text-2)}.clb-return{display:flex;flex-direction:column;text-align:right;color:var(--cl-text);font-size:9px}.clb-comparison-head{display:flex;align-items:center;justify-content:space-between}.clb-comparison-head button{border:0;background:transparent;color:var(--cl-text-2);font-size:9px;cursor:pointer}.clb-compare-pick{display:flex;justify-content:space-between;padding:8px;border-radius:8px;background:rgba(255,255,255,.035);color:var(--cl-text);font-size:10px}.clb-compare-pick small{color:var(--cl-text-2)}.clb-compare-names,.clb-compare-row{display:grid;grid-template-columns:1fr 60px 1fr;gap:5px;align-items:center;text-align:center}.clb-compare-names{margin-bottom:6px;color:var(--cl-text);font-size:11px}.clb-compare-names span{color:var(--cl-text-2);font-size:8px}.clb-compare-row{padding:4px;border-top:1px solid var(--cl-divider)}.clb-compare-row b{color:var(--cl-text);font-size:10px}.clb-compare-row span{color:var(--cl-text-2);font-size:8px}.clb-chip{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:600;color:var(--cl-text,#e2e8f0);background:var(--cl-card-2,rgba(255,255,255,0.03));padding:5px 10px;border-radius:8px;}.clb-ic{font-size:13px;}.clb-section{padding:8px 14px 4px;}.clb-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);margin:8px 0 6px;}.clb-pos{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-accent,#6366f1);margin:8px 0 3px;}.clb-player{display:flex;align-items:baseline;gap:8px;padding:4px 2px;font-size:12px;border-radius:6px;cursor:pointer;}.clb-player:hover,.clb-player:focus{background:rgba(255,255,255,.05);outline:none}.clb-num{min-width:20px;text-align:center;font-weight:800;font-variant-numeric:tabular-nums;color:var(--cl-text-2,#94a3b8);font-size:11px;}.clb-pname{font-weight:600;color:var(--cl-text,#e2e8f0);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.clb-age{font-size:10px;color:var(--cl-text-2,#94a3b8);}.clb-value{min-width:55px;text-align:right;font-size:10px;font-weight:700;color:var(--cl-accent);}.clb-squad-tools{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:5px;margin-bottom:7px}.clb-squad-tools input,.clb-squad-tools select{min-width:0;padding:6px;border:1px solid var(--cl-divider);border-radius:7px;background:var(--cl-card-2,rgba(255,255,255,.03));color:var(--cl-text);font-size:9px}.clb-no-results{padding:14px;text-align:center;color:var(--cl-text-2);font-size:10px}.clb-favorite-toggle{display:grid;place-items:center;width:22px;height:22px;padding:0;border:1px solid var(--cl-divider);border-radius:50%;background:transparent;color:var(--cl-text-2);cursor:pointer}.clb-favorite-toggle.sel{border-color:#f59e0b;color:#f59e0b;background:rgba(245,158,11,.12)}.clb-compare-toggle{display:grid;place-items:center;width:22px;height:22px;padding:0;border:1px solid var(--cl-divider);border-radius:50%;background:transparent;color:var(--cl-text-2);cursor:pointer}.clb-compare-toggle.sel{border-color:var(--cl-accent);background:var(--cl-accent-soft);color:var(--cl-accent)}.clb-transfer{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:12px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.04));cursor:pointer;}.clb-transfer:hover,.clb-transfer:focus{background:rgba(255,255,255,.035);outline:none}.clb-open{color:var(--cl-text-2);font-size:17px}.clb-dir{font-size:14px;font-weight:900;flex-shrink:0;width:14px;text-align:center;}.clb-dir.in{color:var(--cl-green,#22c55e);}.clb-dir.out{color:var(--cl-live,#ef4444);}.clb-tinfo{display:flex;flex-direction:column;flex:1;min-width:0;}.clb-tplayer{font-weight:600;color:var(--cl-text,#e2e8f0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.clb-tclubs{font-size:10px;color:var(--cl-text-2,#94a3b8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.clb-ttype{font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);white-space:nowrap;}.clb-tdate{font-size:10px;color:var(--cl-text-2,#94a3b8);font-variant-numeric:tabular-nums;white-space:nowrap;}.clb-more{margin:8px 0 2px;padding:5px 12px;border-radius:8px;cursor:pointer;border:1px solid var(--cl-divider,rgba(255,255,255,0.12));background:transparent;color:var(--cl-accent,#6366f1);font-size:11px;font-weight:700;}.clb-transfers-head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;}.clb-transfer-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:4px 0 9px}.clb-transfer-summary div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-transfer-summary span,.clb-transfer-summary small{font-size:9px;color:var(--cl-text-2)}.clb-transfer-summary b{font-size:12px;color:var(--cl-text)}.clb-transfer-summary b.positive{color:var(--cl-green,#22c55e)}.clb-transfer-summary b.negative{color:var(--cl-live,#ef4444)}.clb-windows{display:flex;gap:5px;overflow-x:auto;margin-bottom:7px}.clb-windows span{display:inline-flex;gap:6px;white-space:nowrap;padding:4px 7px;border:1px solid var(--cl-divider);border-radius:99px;color:var(--cl-text-2);font-size:9px}.clb-windows b{color:var(--cl-accent)}.clb-filters{display:inline-flex;gap:4px;}.clb-filter{padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px;font-weight:700;border:1px solid var(--cl-divider,rgba(255,255,255,0.12));background:transparent;color:var(--cl-text-2,#94a3b8);}.clb-filter.sel{background:var(--cl-accent-soft,rgba(99,102,241,0.12));color:var(--cl-accent,#6366f1);border-color:var(--cl-accent,#6366f1);}.clb-note{padding:8px 14px 12px;font-size:10px;color:var(--cl-text-2,#94a3b8);opacity:0.8;text-align:center;}@media(max-width:420px){.clb-analysis-grid,.clb-record-grid{grid-template-columns:repeat(2,1fr)}.clb-age-extremes{grid-template-columns:1fr}.clb-ttype{display:none}.clb-squad-tools{grid-template-columns:1fr 1fr}.clb-squad-tools input{grid-column:1/-1}}`]}}customElements.get("soccer-live-club")||customElements.define("soccer-live-club",u)},2135(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(5186),r=a(2007);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[r.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select,input{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}`]}setConfig(e){this._config={...e}}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||"team_match"===this.hass.states[e]?.attributes?.sensor_type).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")} (soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
        </div>
        <h3>${this._t("editor.settings")}</h3>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_broadcasts")}</label>
          <ha-switch .checked=${!0===this._config.hide_broadcasts} data-config-value="hide_broadcasts" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.compact")}</label>
          <ha-switch .checked=${!0===this._config.compact} data-config-value="compact" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-countdown-editor")||customElements.define("soccer-live-countdown-editor",o)},397(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8657),r=a(8429),o=a(1814),l=a(1979),c=a(4522),d=a(5247),p=a(226),h=a(1190),u=a(7554),g=a(1448);class m extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_now:{},_weatherBadge:{},_cachedData:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,r.K)(this,e),this._isLoading=!0,this._loadingStarted=Date.now(),this._lastWeatherVenue=null}connectedCallback(){super.connectedCallback(),this._now=new Date,void 0===this._counting&&(this._counting=!0),clearInterval(this._timer),this._timer=setInterval(()=>{this._now=new Date,this._counting&&this.requestUpdate()},1e3),this._loadWeather()}updated(e){if(e.has("hass")){const e=this.hass?.states[this._config?.entity];e&&"unavailable"!==e.state&&(this._isLoading=!1,d.Q.set(this._config.entity,e.attributes))}if(e.has("hass")||e.has("_config")){const e=this.hass?.states[this._config?.entity];if(e&&"unavailable"!==e.state){const t=this._getNextMatch(e);this._counting=!!t&&"pre"===t.state;const a=t?.venue;a&&a!==this._lastWeatherVenue&&this._loadWeather()}}}async _loadWeather(){if(!this.hass||!this._config)return;const e=this.hass.states[this._config.entity],t=e&&"unavailable"!==e.state?e.attributes:this._cachedData;if(!t?.matches)return;const a=this._getNextMatch({attributes:t});if(a&&a.venue){this._lastWeatherVenue=a.venue;try{this._weatherBadge=await(0,o.i)(a.venue,this.hass,this._config,a.venue_lat,a.venue_lon,a.date_iso),this.requestUpdate()}catch(e){console.warn("Weather load failed:",e)}}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._timer)}getCardSize(){const e=this.hass?.states[this._config?.entity],t=e?this._getNextMatch(e):null;return"in"===t?.state||"post"===t?.state?1:3}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-countdown-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_"}}_parseDate(e){return(0,s.n1)(e)}_getNextMatch(e){let t=e.attributes.matches||[];const a=this._config?.competition_filter?.toLowerCase();if(a){const e=t.filter(e=>(e.competition_name||e.league_name||"").toLowerCase().includes(a));e.length&&(t=e)}return t.find(e=>"in"===e.state)||t.find(e=>"pre"===e.state)||t.find(e=>"post"===e.state)||t[0]||null}_countdown(e){const t=this._parseDate(e);if(!t)return null;const a=t-(this._now||new Date);return a<=0?null:{days:Math.floor(a/864e5),hours:Math.floor(a%864e5/36e5),mins:Math.floor(a%36e5/6e4),secs:Math.floor(a%6e4/1e3)}}static get styles(){return[r.G,u.M,p.Ng,h.d,l.Mt,o.c,i.AH`:host{display:block;container-type:inline-size;}ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:20px;overflow:hidden;}.cd-body{padding:16px;}ha-card.compact .cd-body{padding:10px 14px;}ha-card.compact .team-logo{width:32px !important;height:32px !important;}ha-card.compact .team-name{font-size:11px !important;}ha-card.compact .cd-num{font-size:22px !important;}ha-card.compact .cd-sep{font-size:18px !important;}ha-card.compact .cd-label{font-size:8px !important;}ha-card.compact .sched-date{font-size:10px !important;margin-bottom:4px !important;}ha-card.compact .score{font-size:30px !important;letter-spacing:3px !important;}ha-card.compact .smm-venue-row,ha-card.compact .smm-chips{padding:6px 14px !important;font-size:10px !important;}ha-card.compact .cd-form,ha-card.compact .cd-h2h{display:none;}.teams{display:flex;align-items:center;justify-content:space-between;min-width:0;margin-bottom:16px;}.team{display:flex;flex-direction:column;align-items:center;gap:8px;flex:1 1 0;min-width:0;}.team-logo{width:52px;height:52px;object-fit:contain;}.team-name{max-width:100%;font-size:13px;font-weight:700;text-align:center;color:var(--cl-text);overflow-wrap:anywhere;}.center{min-width:0;text-align:center;flex:0 1 auto;padding:0 8px;}.live-badge{display:inline-block;background:var(--cl-live);color:#fff;font-size:10px;font-weight:700;padding:2px 10px;border-radius:99px;margin-bottom:4px;}.ft-badge{font-size:11px;color:var(--cl-text-2);margin-bottom:4px;}.score{font-size:42px;font-weight:900;letter-spacing:6px;color:var(--cl-text);line-height:1;}.minute{font-size:12px;color:var(--cl-text-2);margin-top:2px;}.sched-date{font-size:11px;color:var(--cl-text-2);margin-bottom:6px;}.countdown{display:flex;max-width:100%;justify-content:center;gap:clamp(3px,1.5cqi,8px);}.cd-block{display:flex;flex-direction:column;align-items:center;min-width:0;}.cd-num{font-size:30px;font-weight:900;color:var(--cl-accent);line-height:1;}.cd-label{font-size:9px;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.05em;margin-top:2px;}.cd-sep{font-size:26px;font-weight:900;color:var(--cl-text-2);align-self:flex-start;padding-top:2px;}.vs-text{font-size:20px;font-weight:900;color:var(--cl-text-2);}.cd-h2h{font-size:10px;color:var(--cl-text-2);text-align:center;margin-top:10px;padding:5px 12px;background:rgba(255,255,255,0.04);border-radius:8px;}.cd-h2h strong{color:var(--cl-text);}.cd-h2h strong.hw{color:var(--cl-green);}.cd-h2h strong.aw{color:var(--cl-live);}.cd-h2h-date{opacity:0.55;margin-left:4px;}.cd-form{display:flex;gap:3px;justify-content:center;margin-top:4px;}.cd-fd{width:6px;height:6px;border-radius:50%;}.cd-fd.w{background:var(--cl-green,#10b981);}.cd-fd.l{background:var(--cl-live,#ef4444);}.cd-fd.d{background:var(--cl-text-2,#94a3b8);opacity:0.5;}.empty{padding:16px;text-align:center;color:var(--cl-text-2);}.cd-live-strip{display:flex;align-items:center;gap:8px;padding:14px 16px;font-size:12px;}.cd-live-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;background:var(--cl-live,#ef4444);animation:cd-pulse 1.5s ease-in-out infinite;}@keyframes cd-pulse{0%,100%{opacity:1;}50%{opacity:0.35;}}.cd-live-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-live,#ef4444);}.cd-ft-dot{font-size:12px;color:var(--cl-text-2);line-height:1;}.cd-ft-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2);}.cd-live-sep{color:var(--cl-text-2);}.cd-live-teams{font-weight:600;flex:1;}.cd-live-clock{font-size:12px;font-weight:800;color:var(--cl-text);}.cd-live-min{font-size:10px;font-weight:400;color:var(--cl-text-2);}@container (max-width:600px){.cd-body{padding:12px !important;}.team-logo{width:40px !important;height:40px !important;}.team-name{font-size:12px !important;}.score{font-size:32px !important;letter-spacing:4px !important;}.vs-text{font-size:16px !important;}.cd-num{font-size:24px !important;}.cd-label{font-size:8px !important;}.cd-sep{font-size:20px !important;}.sched-date{font-size:10px !important;}.meta{font-size:10px !important;padding:10px 12px !important;gap:4px !important;}.comp-name{font-size:10px !important;}}@container (max-width:480px){.teams{flex-wrap:wrap;justify-content:space-between;margin-bottom:8px;}.team{flex:0 1 auto;flex-direction:row;align-items:center;gap:6px;}.team:first-child{order:1;}.team:last-child{order:2;}.center{order:3;flex:0 0 100%;padding:8px 0 0;}.team-logo{width:32px !important;height:32px !important;}.team-name{font-size:11px !important;text-align:left !important;}.cd-num{font-size:28px !important;}.cd-sep{font-size:22px !important;}.countdown{gap:6px !important;}.score{font-size:32px !important;letter-spacing:3px !important;}.sched-date{font-size:11px !important;margin-bottom:8px;}}@container (max-width:360px){.cd-num{font-size:22px !important;min-width:28px !important;}.cd-sep{font-size:16px !important;}.countdown{gap:3px !important;}}`]}render(){if(this.style.display="",(0,r.K)(this,this._config),!this.hass||!this._config)return(0,l.bY)(this._t("ui.loading"));const e=this.hass.states[this._config.entity];if(!e){const e=d.Q.get(this._config.entity);if(!e||!e.data.matches)return(0,c.PA)("⚠️",this._t("ui.entity_not_found"),`${this._t("ui.entity_not_found")}: ${this._config.entity}`,this._t("ui.check_entity_config"));this._cachedData=e.data}if(e&&"unavailable"===e.state){const e=d.Q.get(this._config.entity);if(!e||!e.data.matches)return(0,c.PA)("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));this._cachedData=e.data}if(e&&this._isLoading)return Date.now()-this._loadingStarted>1e4?(0,c.PA)("⏱",this._t("ui.loading_timeout"),`${this._t("ui.entity_not_responding")}: ${this._config.entity}`,this._t("ui.check_integration")):(0,l.bY)(this._t("ui.loading"));const t=e&&"unavailable"!==e.state?e.attributes:this._cachedData,a=this._getNextMatch({attributes:t});if(!a)return(0,c._$)(t,e=>this._t(e),()=>(0,c.QG)("📅",this._t("ui.off_season"),this._t("ui.off_season_hint")));const o="in"===a.state,m="post"===a.state,f=t?.league_info?.[0],_=a.competition_name||f?.name||f?.abbreviation||t?.league_name||"",b=(0,g.VR)(_,(0,s.$c)(this.hass,this._config)),v=(0,g.rn)({competitionName:_,competitionLogo:a.competition_logo||f?.logo_href||t?.league_logo,fallbackLogo:null,isFriendly:a.is_friendly});if(o||m)return this._config.hide_when_live?(this.style.display="none",i.qy``):i.qy`
        <ha-card>
          <div class="cd-live-strip">
            ${o?i.qy`<span class="cd-live-dot"></span>
                     <span class="cd-live-label">${this._t("status.live")}</span>`:i.qy`<span class="cd-ft-dot">✓</span>
                     <span class="cd-ft-label">${this._t("status.full_time")}</span>`}
            <span class="cd-live-sep">·</span>
            <span class="cd-live-teams">${a.home_team||"?"} – ${a.away_team||"?"}</span>
            ${o?i.qy`<span class="cd-live-clock">${(0,n.Q)(a.home_score)}–${(0,n.Q)(a.away_score)}${a.clock?i.qy`<span class="cd-live-min"> ${a.clock}'</span>`:""}</span>`:m?i.qy`<span class="cd-live-clock">${(0,n.Q)(a.home_score)}–${(0,n.Q)(a.away_score)}</span>`:""}
          </div>
        </ha-card>
      `;const x=this._countdown(a.date),y=this._t(1===x?.days?"cd.day":"cd.days")||(1===x?.days?"day":"days"),w=this._t("cd.hrs")||"hrs",$=this._t("cd.min")||"min",k=this._t("cd.sec")||"sec",C=e=>e?i.qy`<div class="cd-form">${e.split("").map(e=>{const t="W"===e?"w":"L"===e||"V"===e?"l":"d";return i.qy`<span class="cd-fd ${t}"></span>`})}</div>`:"";return i.qy`
      <ha-card class="${this._config.compact?"compact":""}">
        ${(0,u.t)(a.home_logo,a.away_logo)}
        <div class="card-content">
        ${this._config.hide_header?"":(0,p.t7)({logo:v||null,title:b,badge:(0,p.N)(a.date||"","date")})}

        <div class="cd-body">
        <div class="teams">
          <div class="team">
            ${a.home_logo?i.qy`<img class="team-logo" src="${a.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="team-name">${a.home_team||"?"}</span>
            ${C(a.home_form)}
          </div>

          <div class="center">
            ${x?i.qy`
              ${a.date?i.qy`<div class="sched-date">${a.date}</div>`:""}
              <div class="countdown">
                ${x.days>0?i.qy`
                  <div class="cd-block"><span class="cd-num">${x.days}</span><span class="cd-label">${y}</span></div>
                  <span class="cd-sep">:</span>
                `:""}
                <div class="cd-block"><span class="cd-num">${String(x.hours).padStart(2,"0")}</span><span class="cd-label">${w}</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(x.mins).padStart(2,"0")}</span><span class="cd-label">${$}</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(x.secs).padStart(2,"0")}</span><span class="cd-label">${k}</span></div>
              </div>
            `:i.qy`
              ${a.date?i.qy`<div class="sched-date">${a.date}</div>`:""}
              <div class="vs-text">${this._t("match.vs")}</div>
            `}
          </div>

          <div class="team">
            ${a.away_logo?i.qy`<img class="team-logo" src="${a.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="team-name">${a.away_team||"?"}</span>
            ${C(a.away_form)}
          </div>
        </div>
        ${(()=>{const e=(a.head_to_head||[])[0];if(!e||void 0===e.home_score)return"";const t=parseInt(e.home_score),s=parseInt(e.away_score),n=!isNaN(t)&&!isNaN(s)&&t>s,r=!isNaN(t)&&!isNaN(s)&&s>t,o=Number.isFinite(t)?t:"-",l=Number.isFinite(s)?s:"-";return i.qy`<div class="cd-h2h">
            ${e.home_team} <strong class="${n?"hw":r?"aw":""}">${o}–${l}</strong> ${e.away_team}
            ${e.date?i.qy`<span class="cd-h2h-date">${e.date.split(" ")[0]}</span>`:""}
          </div>`})()}

        </div>
        ${(0,h.n)(a,{lang:(0,s.$c)(this.hass,this._config),t:e=>this._t(e),weatherBadge:this._weatherBadge||null,hideBroadcasts:!0===this._config.hide_broadcasts})}
        </div>
      </ha-card>
    `}}customElements.get("soccer-live-countdown")||customElements.define("soccer-live-countdown",m)},7759(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(2007),r=a(5186);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[n.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}select,input{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}.hint{padding:10px 12px;border:1px solid rgba(33,150,243,0.24);border-radius:8px;background:rgba(33,150,243,0.10);color:var(--primary-text-color);font-size:12px;line-height:1.45;}`]}setConfig(e){this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccer_live")||e.includes("soccerlive")).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_recommendedCards(e,t){if(Array.isArray(t)&&t.length){const e={team:"Team",countdown:"Countdown","match-center":"Match Center",lineup:"Lineup",timeline:"Timeline","team-form":"Team Form",matches:"Matches",ticker:"Ticker","team-competitions":"Team Competitions",standings:"Standings","mini-standings":"Mini Standings",scorers:"Top Scorers",bracket:"Bracket",news:"News"};return t.map(t=>e[t]||t).join(", ")}return{team_match:"Team, Countdown, Match Center, Lineup, Timeline, Team Form",team_matches:"Matches, Ticker, Live Match, Team Form",team_matches_mixed:"Team Competitions, Season Overview, Matches, Ticker, Team Form",all_matches_today:"Matches, Ticker, Live Match",standings:"Standings, Mini Standings",top_scorers:"Top Scorers",bracket:"Bracket",news:"News"}[e]||""}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e),a=this.hass.states[e]?.attributes||{},n=a.sensor_type||"",r=this._recommendedCards(n,a.recommended_card_types),o=a.integration_version;return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
        </div>
        ${n?i.qy`
          <div class="hint">
            <strong>${this._t("editor.diag_sensor_type")}:</strong> ${n}
            ${r?i.qy`<br><strong>${this._t("editor.diag_recommended_cards")}:</strong> ${r}`:""}
            ${o?i.qy`<br><strong>${this._t("editor.diag_integration_version")}:</strong> ${o}`:i.qy`<br><em>${this._t("editor.diag_integration_outdated")}</em>`}
          </div>
        `:""}
        <div>
          <label class="field-label">${this._t("editor.card_title")}</label>
          <input type="text" .value=${this._config.title||""} data-config-value="title" @input=${this._textChanged} placeholder="${this._t("editor.diag_title_placeholder")}">
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-diagnostics-editor")||customElements.define("soccer-live-diagnostics-editor",o)},2437(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(4522),o=a(7554),l=a(3627);class c extends i.WF{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e)}getCardSize(){return 2}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-diagnostics-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_",card_type:"diagnostics"}}static get styles(){return[n.G,o.M,l.by,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:20px;overflow:hidden;}.content{position:relative;z-index:1;padding:16px;}.header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;}.title{font-size:15px;font-weight:900;}.status{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:999px;font-size:11px;font-weight:800;text-transform:uppercase;border:1px solid var(--cl-chip-border);background:var(--cl-chip-bg);}.status.ok{color:var(--cl-green);}.status.error{color:var(--cl-live);}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;}.metric{min-width:0;padding:10px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface);}.label{color:var(--cl-text-2);font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;}.value{margin-top:4px;color:var(--cl-text);font-size:13px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.error-box{margin-top:10px;padding:10px;border:1px solid rgba(239,68,68,0.35);border-radius:10px;color:var(--cl-live);background:rgba(239,68,68,0.10);font-size:12px;}.quality-bar{height:7px;margin-top:8px;overflow:hidden;border-radius:99px;background:var(--cl-divider);}.quality-bar>i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--cl-live),var(--cl-warning),var(--cl-green));}.recommendations{margin-top:10px;padding:10px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface);}.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:7px;}.chip{display:inline-flex;align-items:center;min-height:22px;padding:3px 8px;border:1px solid var(--cl-chip-border);border-radius:999px;background:var(--cl-chip-bg);color:var(--cl-text);font-size:11px;font-weight:800;}@media (max-width:420px){.grid{grid-template-columns:1fr;}}`]}_format(e){return null==e||""===e?"-":Array.isArray(e)?String(e.length):String(e)}_age(e){const t=(0,s.n1)(e);if(!t)return"-";const a=Math.max(0,Math.round((Date.now()-t.getTime())/6e4));if(a<1)return this._t("time.now");if(a<60)return`${a}m`;const i=Math.round(a/60);return i<48?`${i}h`:`${Math.round(i/24)}d`}_recommendedCards(e){return({team_match:["team","countdown","match_center","lineup","timeline","team_form"],team_matches:["matches","ticker","live_match","team_form"],team_matches_mixed:["team_competitions","season_overview","matches","ticker","team_form"],all_matches_today:["matches","ticker","live_match"],standings:["standings","mini_standings"],top_scorers:["scorers"],bracket:["bracket"],news:["news"],commentary:["commentary","timeline"]}[e]||[]).map(e=>this._t(`diag.card_${e}`))}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return(0,r.PA)("!",this._t("ui.entity_not_found"),this._config.entity,this._t("ui.check_entity_config"));const t=e.attributes||{},a=t.api_status||"unknown",s="ok"===a?"ok":"error",o=this._t(`diag.status_${["ok","error"].includes(a)?a:"unknown"}`),c=t.last_successful_update||t.last_request_time,d=t.sensor_type||"unknown",p=this._recommendedCards(d),h=t.data_quality||{},u=t.source_blend||{},g=[[this._t("diag.sensor"),d],[this._t("diag.state"),e.state],[this._t("diag.matches"),t.schedule_match_count??t.total_matches],[this._t("diag.live"),t.schedule_live_count??t.live_matches_count],[this._t("diag.upcoming"),t.schedule_upcoming_count??t.upcoming_matches_count],[this._t("diag.recent"),t.schedule_recent_count??t.finished_matches_count],[this._t("diag.requests"),t.request_count],[this._t("diag.last_update"),c],[this._t("diag.sensor_age"),this._age(c)],[this._t("quality.completeness"),null!=h.average_completeness?`${h.average_completeness}%`:null],[this._t("quality.conflicts"),h.conflicts?.length],...u.secondary?[[this._t("diag.source_blend"),`${u.primary} + ${u.secondary}`],[this._t("diag.enriched_fields"),u.enriched_fields],[this._t("quality.conflicts"),u.conflicts]]:[]];return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="content">
          <div class="header">
            <div class="title">${this._config.title||this._t("card.diagnostics")}</div>
            <div class="status ${s}" title=${a}>${o}</div>
          </div>
          <div class="grid">
            ${g.map(([e,t])=>i.qy`
              <div class="metric">
                <div class="label">${e}</div>
                <div class="value" title="${this._format(t)}">${this._format(t)}</div>
              </div>
            `)}
          </div>
          ${p.length?i.qy`
            <div class="recommendations">
              <div class="label">${this._t("editor.diag_recommended_cards")}</div>
              <div class="chips">
                ${p.map(e=>i.qy`<span class="chip">${e}</span>`)}
              </div>
            </div>
          `:""}
          ${null!=h.average_completeness?i.qy`
            <div class="recommendations">
              <div class="label">${this._t("quality.coverage")} · ${this._t(`quality.${h.level||"limited"}`)}</div>
              <div class="quality-bar"><i style="width:${h.average_completeness}%"></i></div>
              ${h.issues?.length?i.qy`<div class="chips">${h.issues.map(e=>i.qy`<span class="chip">⚠ ${this._t(`quality.issue_${e}`)}</span>`)}</div>`:""}
            </div>
          `:""}
          ${(0,l.qd)(t.data_alerts,{t:(e,t)=>this._t(e,t),compact:!0})}
          ${t.last_error?i.qy`<div class="error-box">${t.last_error}</div>`:""}
        </div>
      </ha-card>
    `}}customElements.get("soccer-live-diagnostics")||customElements.define("soccer-live-diagnostics",c)},7317(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(2007),r=a(2738);class o extends i.WF{static properties={hass:{},_config:{},entities:{type:Array}};constructor(){super(),this.entities=[]}setConfig(e){this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccer_live")||e.includes("soccerlive")).sort())}_set(e,t){const a={...this._config,[e]:t};this._config=a,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:a},bubbles:!0,composed:!0}))}render(){if(!this._config||!this.hass)return i.qy``;const e="archive"===this._config.card_type,t=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.")).sort();return i.qy`<div class="card-config">
      <h3>${this._t("editor.sensor")}</h3>
      <label>${this._t("editor.entity")}<select @change=${e=>this._set("entity",e.target.value)}>
        ${this.entities.map(e=>i.qy`<option value=${e} ?selected=${e===this._config.entity}>${e}</option>`)}
      </select></label>
      <label>${this._t("editor.card_title")}<input .value=${this._config.title||""} @input=${e=>this._set("title",e.target.value)}></label>
      ${e?i.qy`
        <label>${this._t("editor.team_name")}<input .value=${this._config.team_name||""} @input=${e=>this._set("team_name",e.target.value)}></label>
        <label>${this._t("editor.archive_entity")}<select @change=${e=>this._set("archive_entity",e.target.value)}>
          <option value="">—</option>
          ${t.map(e=>i.qy`<option value=${e} ?selected=${e===this._config.archive_entity}>${e}</option>`)}
        </select></label>
        <label>${this._t("editor.max_matches")}<select @change=${e=>this._set("max_matches",Number(e.target.value))}>
          ${[10,20,30,50,100].map(e=>i.qy`<option value=${e} ?selected=${Number(this._config.max_matches||20)===e}>${e}</option>`)}
        </select></label>
        <label class="switch"><span>${this._t("editor.show_archive_stats")}</span><ha-switch
          .checked=${!1!==this._config.show_archive_stats}
          @change=${e=>this._set("show_archive_stats",e.target.checked)}
        ></ha-switch></label>
        <label class="switch"><span>${this._t("editor.show_season_report")}</span><ha-switch
          .checked=${!1!==this._config.show_season_report}
          @change=${e=>this._set("show_season_report",e.target.checked)}
        ></ha-switch></label>
      `:""}
      <h3>${this._t("editor.appearance")}</h3>
      ${(0,r.m)(this,this._config,e=>this._t(e))}
    </div>`}static styles=[n.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:14px}label{display:grid;gap:5px;font-size:12px}select,input{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color)}label.switch{display:flex;align-items:center;justify-content:space-between}`]}customElements.get("soccer-live-insights-editor")||customElements.define("soccer-live-insights-editor",o)},389(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(2007),r=a(2738);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[n.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}.hint{font-size:12px;color:var(--secondary-text-color);}`]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||"team_match"===this.hass.states[e]?.attributes?.sensor_type).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">Entity (team_match sensor — soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
          <div class="hint" style="margin-top: 4px;">Lineups are published shortly before kick-off.</div>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,n.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-lineup-editor")||customElements.define("soccer-live-lineup-editor",o)},1703(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(226),o=a(7554),l=a(1448),c=a(4522),d=a(6381);class p extends i.WF{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e),this.hideHeader=!0===e.hide_header}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}getCardSize(){return 6}static getConfigElement(){return document.createElement("soccer-live-lineup-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next",hide_header:!1}}_starters(e){return(e||[]).filter(e=>!0===e.starter)}_bench(e){return(e||[]).filter(e=>!e.starter)}_renderPlayer(e){const t=(e.short_name||e.name||"").split(" ").map(e=>e[0]).slice(0,2).join("");return i.qy`
      <div class="player" title="${e.name}">
        <div class="player-card">
          ${e.headshot?i.qy`<img class="player-img" src="${e.headshot}" alt="${e.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
                   <div class="player-init" style="display:none;">${t}</div>`:i.qy`<div class="player-init">${t}</div>`}
          ${e.jersey?i.qy`<div class="player-num">${e.jersey}</div>`:""}
        </div>
        <div class="player-name">${e.short_name||e.name}</div>
        ${e.position?i.qy`<div class="player-pos">${e.position}</div>`:""}
      </div>
    `}_renderPitchScorebar(e,t,a){const s="pre"===e.state,n=e=>null==e||""===e||"N/A"===e?"-":e,r="in"===e.state?i.qy`<div class="psb-status live">● ${e.clock&&"N/A"!==e.clock?e.clock:this._t("status.live")}</div>`:"post"===e.state?i.qy`<div class="psb-status">${this._t("status.full_time")}</div>`:"";return i.qy`
      <div class="psb">
        <div class="psb-team psb-team--home">
          <img src="${e.home_logo}" alt="" @error="${e=>e.target.style.display="none"}">
          <div class="psb-meta">
            <div class="psb-abbr">${e.home_abbrev||e.home_team}</div>
            ${t?i.qy`<div class="psb-form">${t}</div>`:""}
          </div>
        </div>
        <div class="psb-center">
          ${s?i.qy`<div class="psb-vs">${this._t("status.kickoff")}</div>`:i.qy`<div class="psb-score">${n(e.home_score)}<span>-</span>${n(e.away_score)}</div>`}
          ${r}
        </div>
        <div class="psb-team psb-team--away">
          <img src="${e.away_logo}" alt="" @error="${e=>e.target.style.display="none"}">
          <div class="psb-meta">
            <div class="psb-abbr">${e.away_abbrev||e.away_team}</div>
            ${a?i.qy`<div class="psb-form">${a}</div>`:""}
          </div>
        </div>
      </div>
    `}_renderGrid(e,t,a,s,n){const r=this._starters(s),o=this._bench(s),l=this._starters(n),c=this._bench(n);return i.qy`
      <div class="teams-row">
        <div class="team-block">
          <div class="team-block-head">
            <img src="${e.home_logo}" alt="${e.home_team}" />
            <div class="team-block-info">
              <div class="team-block-name">${e.home_team}</div>
              ${t?i.qy`<div class="formation">${t}</div>`:""}
            </div>
          </div>
          <div class="players-grid">
            ${r.map(e=>this._renderPlayer(e))}
          </div>
          ${o.length?i.qy`
            <div class="bench-label">${this._t("lineup.bench")}</div>
            <div class="players-grid bench">
              ${o.map(e=>this._renderPlayer(e))}
            </div>
          `:""}
        </div>

        <div class="team-block">
          <div class="team-block-head">
            <img src="${e.away_logo}" alt="${e.away_team}" />
            <div class="team-block-info">
              <div class="team-block-name">${e.away_team}</div>
              ${a?i.qy`<div class="formation">${a}</div>`:""}
            </div>
          </div>
          <div class="players-grid">
            ${l.map(e=>this._renderPlayer(e))}
          </div>
          ${c.length?i.qy`
            <div class="bench-label">${this._t("lineup.bench")}</div>
            <div class="players-grid bench">
              ${c.map(e=>this._renderPlayer(e))}
            </div>
          `:""}
        </div>
      </div>
    `}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.matches||[];if(0===t.length)return(0,c._$)(e.attributes,e=>this._t(e),()=>i.qy`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`);const a=t[0],o=a.lineup_home||e.attributes.lineup_home||[],p=a.lineup_away||e.attributes.lineup_away||[],h=a.formation_home||e.attributes.formation_home||"",u=a.formation_away||e.attributes.formation_away||"";if(0===o.length&&0===p.length){const e="pre"===a.state||"scheduled"===a.state;return i.qy`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">👥</div>
            <div class="empty-title">${this._t(e?"lineup.pre.title":"lineup.empty.title")}</div>
            <div class="empty-sub">${this._t(e?"lineup.pre.sub":"lineup.empty.sub")}</div>
          </div>
        </ha-card>
      `}const g=this.hideHeader?"":(0,r.t7)({logo:(0,l.rn)({competitionName:a.competition_name||a.league_name||e.attributes.league_name,competitionLogo:a.competition_logo||a.league_logo||e.attributes.league_logo,fallbackLogo:null,isFriendly:a.is_friendly}),title:(0,l.VR)(a.competition_name||a.league_name||e.attributes.league_name||this._t("card.lineup"),(0,s.$c)(this.hass,this._config)),badge:(0,r.N)(`${a.home_team} – ${a.away_team}`,"neutral"),fallbackIcon:"👥"}),m=(0,d.Ri)(a,{t:(e,t)=>this._t(e,t)});return m?i.qy`
        <ha-card>
          <div class="hero-bg"></div>
          ${g}
          ${this._renderPitchScorebar(a,h,u)}
          ${m}
        </ha-card>
      `:i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        ${g}
        ${this._renderGrid(a,h,u,o,p)}
      </ha-card>
    `}static get styles(){return[n.G,o.M,r.Ng,d.hl,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);--cl-glass-border:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.empty-state{display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px;}.empty-icon{font-size:38px;opacity:0.4;}.empty-title{font-weight:800;color:var(--cl-text);}.empty-sub{font-size:12px;color:var(--cl-text-2);}.hero-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.10),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(16,185,129,0.10),transparent 50%);pointer-events:none;}.teams-row{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:0;}.team-block{padding:16px 12px;border-right:1px solid var(--cl-divider);}.team-block:last-child{border-right:none;}.team-block-head{display:flex;align-items:center;gap:10px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid var(--cl-divider);}.team-block-head img{width:32px;height:32px;object-fit:contain;flex-shrink:0;}.team-block-info{min-width:0;flex:1;}.team-block-name{font-size:13px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--cl-text);}.formation{font-size:10px;font-weight:700;letter-spacing:0.1em;color:var(--cl-accent);margin-top:2px;font-variant-numeric:tabular-nums;}.players-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(56px,1fr));gap:10px;}.players-grid.bench{opacity:0.85;}.player{display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;}.player-card{position:relative;width:48px;height:48px;}.player-img{width:48px;height:48px;border-radius:50%;object-fit:cover;background:var(--cl-card-2);border:2px solid var(--cl-glass-border);}.player-init{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--cl-accent),var(--cl-accent-2));color:white;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;letter-spacing:-0.02em;}.player-num{position:absolute;bottom:-3px;right:-4px;background:var(--cl-num-bg);color:white;border:2px solid var(--cl-bg);font-size:9px;font-weight:800;min-width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;padding:0 3px;}.player-name{font-size:10px;font-weight:700;line-height:1.1;max-width:64px;color:var(--cl-text);word-wrap:break-word;text-align:center;}.player-pos{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-text-2);background:var(--cl-card-2);padding:1px 5px;border-radius:4px;}.bench-label{margin-top:16px;margin-bottom:8px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:var(--cl-text-2);display:flex;align-items:center;gap:8px;}.bench-label::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--cl-divider),transparent);}@media (max-width:480px){.teams-row{grid-template-columns:1fr;}.team-block{border-right:none;border-bottom:1px solid var(--cl-divider);}.team-block:last-child{border-bottom:none;}}.psb{position:relative;z-index:1;display:flex;align-items:center;gap:12px;padding:14px 16px 6px;}.psb-team{display:flex;align-items:center;gap:10px;flex:1;min-width:0;}.psb-team--away{flex-direction:row-reverse;text-align:right;}.psb-team img{width:34px;height:34px;object-fit:contain;flex-shrink:0;}.psb-meta{min-width:0;}.psb-abbr{font-size:14px;font-weight:800;color:var(--cl-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.psb-form{font-size:11px;font-weight:700;letter-spacing:0.08em;color:var(--cl-accent);font-variant-numeric:tabular-nums;margin-top:1px;}.psb-center{flex:0 0 auto;text-align:center;}.psb-score{font-size:24px;font-weight:900;letter-spacing:-0.03em;color:var(--cl-text);}.psb-score span{opacity:0.4;margin:0 4px;}.psb-vs{font-size:12px;font-weight:700;color:var(--cl-text-2);}.psb-status{font-size:10px;font-weight:800;color:var(--cl-text-2);margin-top:2px;text-transform:uppercase;letter-spacing:0.06em;}.psb-status.live{color:#ef4444;}`]}}customElements.get("soccer-live-lineup")||customElements.define("soccer-live-lineup",p)},3384(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(5186),r=a(2007);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object}}}static get styles(){return[r.yj,i.AH`.option{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;}`]}setConfig(e){this._config=e}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_toggleChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}render(){if(!this._config||!this.hass)return i.qy``;const e=Object.keys(this.hass.states).filter(e=>e.includes("soccer_live_next")||e.includes("soccerlive_next")||e.includes("soccer_live_all_mixed")||e.includes("soccerlive_all_mixed")||["team_match","team_matches_mixed"].includes(this.hass.states[e]?.attributes?.sensor_type)).sort(),t=this._config.entity||"",a=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.")).sort();return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${e.includes(t)?"":i.qy`<option value="${t}" selected>${t||this._t("editor.select")}</option>`}
            ${e.map(e=>i.qy`<option value="${e}" ?selected=${e===t}>${e}</option>`)}
          </select>
        </div>

        <h3>${this._t("editor.section_display")}</h3>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.archive_entity")}</label>
          <select data-config-value="archive_entity" @change=${this._selectChanged}>
            <option value="">—</option>
            ${a.map(e=>i.qy`<option value=${e} ?selected=${e===this._config.archive_entity}>${e}</option>`)}
          </select>
        </div>
        <div>
          <label class="field-label">${this._t("editor.standings_entity")}</label>
          <select data-config-value="standings_entity" @change=${this._selectChanged}>
            <option value="">${this._t("editor.automatic")}</option>
            ${a.filter(e=>this.hass.states[e]?.attributes?.standings_groups).map(e=>i.qy`<option value=${e} ?selected=${e===this._config.standings_entity}>${e}</option>`)}
          </select>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_broadcasts")}</label>
          <ha-switch .checked=${!0===this._config.hide_broadcasts} data-config-value="hide_broadcasts" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.section_prediction")}</h3>
        <div class="option">
          <label>${this._t("editor.show_prediction")}</label>
          <ha-switch .checked=${!1!==this._config.show_prediction} data-config-value="show_prediction" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_prediction_details")}</label>
          <ha-switch .checked=${!1!==this._config.show_prediction_details} data-config-value="show_prediction_details" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_odds")}</label>
          <ha-switch .checked=${!1!==this._config.show_odds} data-config-value="show_odds" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_injuries")}</label>
          <ha-switch .checked=${!1!==this._config.show_injuries} data-config-value="show_injuries" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-match-center-editor")||customElements.define("soccer-live-match-center-editor",o)},3159(e,t,a){var i=a(3957),s=a(5186),n=a(8657),r=a(8429),o=a(5247),l=a(4522),c=a(1979),d=a(226),p=a(1190),h=a(7311),u=a(6755),g=a(5360);const m={possessionPct:"team.possession",totalShots:"team.shots",shotsOnTarget:"team.on_target",foulsCommitted:"team.fouls",goalAssists:"stat.assists",totalGoals:"stat.goals",wonCorners:"stat.corners",appearances:"stat.appearances",shotAssists:"stat.shot_assists",yellowCards:"stat.yellow_cards",redCards:"stat.red_cards",offsides:"stat.offsides",saves:"stat.saves",blockedShots:"stat.blocked_shots",shotsOffTarget:"stat.shots_off_target",expectedGoals:"stat.expected_goals",touchesInOppositionBox:"stat.touches_opposition_box",bigChances:"stat.big_chances",bigChancesMissed:"stat.big_chances_missed",accuratePasses:"stat.accurate_passes",totalPasses:"stat.total_passes",passesCompleted:"stat.passes_completed",tacklesTotal:"stat.tackles",interceptions:"stat.interceptions",aerialDuelsWon:"stat.aerial_duels_won",freeKickGoals:"stat.free_kick_goals",penaltyGoals:"stat.penalty_goals"},f=Object.fromEntries(Object.keys(m).map(e=>[e.replace(/[^a-z0-9]/gi,"").toLowerCase(),e]));Object.assign(f,{touchesoppbox:"touchesInOppositionBox",touchesoppositionbox:"touchesInOppositionBox",bigchance:"bigChances",bigchancemissed:"bigChancesMissed",bigchancemissedtitle:"bigChancesMissed",accuratepass:"accuratePasses",accuratepasses:"accuratePasses",yellowcard:"yellowCards",shotsontarget:"shotsOnTarget",shotsofftarget:"shotsOffTarget",corners:"wonCorners"});const _=(e,t)=>{const a=String(e||""),i=f[a.replace(/[^a-z0-9]/gi,"").toLowerCase()]||a,s=m[i];if(s){const e=t(s);if(e&&e!==s)return e}return a.replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,e=>e.toUpperCase()).trim()};var b=a(7554),v=a(1814),x=a(1448),y=a(6381),w=a(6472),$=a(5141),k=a(5151),C=a(8136),S=a(435),q=a(8585),z=a(3627),A=a(2549),E=a(1618);const T=["overview","stats","timeline","lineup","h2h"],P={overview:"tab.overview",stats:"tab.stats",timeline:"tab.timeline",lineup:"tab.lineup",lineups:"tab.lineup",h2h:"tab.h2h"};class j extends i.WF{static get properties(){return{hass:{},_config:{},_activeTab:{type:String},_tlFilter:{type:String},_isLoading:{type:Boolean},_weatherBadge:{type:Object},_selectedEventId:{type:String},_detailsLoading:{type:Boolean}}}constructor(){super(),this._activeTab="overview",this._tlFilter="all",this._isLoading=!0,this._weatherBadge=null,this._lastWeatherVenue=null,this._lastMatchState=null,this._selectedEventId=null,this._detailsLoading=!1,this._manualTab=!1}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,r.K)(this,e),this._isLoading=!0,this._manualTab=!1;try{const t=sessionStorage.getItem(`soccer-mc-tab:${e.entity}`);t&&T.includes(t)&&(this._activeTab=t)}catch(e){}}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}_selectMatch(e){return(e?.matches||[]).find(e=>String(e.event_id)===String(this._selectedEventId))||(e?.next_match?e.next_match:(0,k.NM)(e?.matches)[0])}_orderedMatches(e){return(0,k.NM)(e?.matches)}async _chooseMatch(e,t){this._selectedEventId=String(e);const a=(t?.matches||[]).find(t=>String(t.event_id)===String(e));if(a&&t?.detail_service&&!(0,w.wn)(a)){this._detailsLoading=!0;try{await(0,w.NZ)(this.hass,t,a)}catch(e){}this._detailsLoading=!1}}updated(e){if(e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];if(e&&"unavailable"!==e.state){this._isLoading=!1,o.Q.set(this._config.entity,e.attributes);const t=this._selectMatch(e.attributes);t?.venue&&t.venue!==this._lastWeatherVenue&&this._loadWeather(t.venue,t.venue_lat,t.venue_lon,t.date_iso),"hub"!==this._config.card_type||this._manualTab?"pre"===this._lastMatchState&&"in"===t?.state&&"overview"===this._activeTab&&(this._activeTab="timeline"):this._activeTab="in"===t?.state?"timeline":"overview",this._lastMatchState=t?.state??this._lastMatchState}}}async _loadWeather(e,t=null,a=null,i=null){this._lastWeatherVenue=e;try{this._weatherBadge=await(0,v.i)(e,this.hass,this._config,t,a,i)}catch(e){this._weatherBadge=null}}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_selectTab(e,t=!0){this._activeTab=e,t&&(this._manualTab=!0),this._tlFilter="all";try{sessionStorage.setItem(`soccer-mc-tab:${this._config.entity}`,e)}catch(e){}}_onTabKeydown(e,t){const a=T.indexOf(t),i="ArrowRight"===e.key?1:"ArrowLeft"===e.key?-1:0;if(!i&&"Home"!==e.key&&"End"!==e.key)return;e.preventDefault();const s="Home"===e.key?0:"End"===e.key?T.length-1:(a+i+T.length)%T.length;this._selectTab(T[s],!0),this.updateComplete.then(()=>this.renderRoot.querySelector(`#mc-tab-${T[s]}`)?.focus())}render(){if((0,r.K)(this,this._config),!this.hass||!this._config)return(0,c.bY)(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=o.Q.get(e);if(!t?.data?.matches)return(0,l.PA)("",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else a=t.attributes;else{const t=o.Q.get(e);if(!t?.data?.matches)return(0,l.PA)("",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}if(this._isLoading&&!a)return(0,c.bY)(this._t("ui.loading"));const i=this._selectMatch(a);if(!i)return(0,l._$)(a,e=>this._t(e),()=>(0,l.QG)("",this._t("ui.no_match_data"),this._t("ui.no_match_hint"),""));const s=(a.league_info||[])[0]||{},n=i.league_name||s.name||s.abbreviation||a.league_name||"",d={...i,league_logo:(0,x.rn)({competitionName:n,competitionLogo:i.league_logo||s.logo_href||a.league_logo,fallbackLogo:null,isFriendly:i.is_friendly}),league_name:n};return this._renderCard(d,a)}_renderCard(e,t){const a=T.map(e=>({id:e,label:this._t("tab."+e)})),n=this._orderedMatches(t);return i.qy`
      <ha-card>
        ${n.length>1?i.qy`<div class="mc-picker">
          <select @change=${e=>this._chooseMatch(e.target.value,t)}>
            ${n.map(t=>i.qy`<option value=${t.event_id} ?selected=${String(t.event_id)===String(e.event_id)}>${(0,s.iS)(t.date,(0,s.$c)(this.hass,this._config))||t.date} · ${t.home_team} – ${t.away_team}</option>`)}
          </select>
          ${this._detailsLoading?i.qy`<span>${this._t("ui.loading")}</span>`:""}
        </div>`:""}
        <div class="mc-hero-section">
          ${(0,b.t)(e.home_logo,e.away_logo)}
          <div class="card-content">
            ${!0!==this._config.hide_header?this._renderHero(e):""}
          </div>
        </div>
        <div class="tab-bar" role="tablist" aria-label=${this._t("card.match_center")}>
          ${a.map(e=>i.qy`
            <button class="tab ${this._activeTab===e.id?"active":""}"
              id="mc-tab-${e.id}" role="tab"
              aria-selected=${this._activeTab===e.id?"true":"false"}
              aria-controls="mc-panel-${e.id}"
              tabindex=${this._activeTab===e.id?"0":"-1"}
              @keydown=${t=>this._onTabKeydown(t,e.id)}
              @click=${()=>this._selectTab(e.id)}>
              ${e.label}
            </button>
          `)}
        </div>
        <div class="tab-content${"lineup"===this._activeTab?" lineup":""}"
          id="mc-panel-${this._activeTab}" role="tabpanel"
          aria-labelledby="mc-tab-${this._activeTab}">
          ${"overview"===this._activeTab?this._renderOverview(e,t):""}
          ${"stats"===this._activeTab?this._renderStats(e):""}
          ${"timeline"===this._activeTab?this._renderTimeline(e):""}
          ${"lineup"===this._activeTab?this._renderLineup(e):""}
          ${"h2h"===this._activeTab?this._renderH2H(e,t):""}
        </div>
      </ha-card>
    `}_renderHero(e){const t="in"===e.state,a="post"===e.state,r=t?(0,d.N)(`${e.clock?e.clock+"' ":""}${this._t("status.live")}`,"live"):a?(0,d.N)(this._t("status.full_time"),"ft"):(0,d.N)((0,s.IU)(e.date,(0,s.$c)(this.hass,this._config))||e.date||"","date"),o=(0,x.VR)(e.competition_name||e.league_name||"",(0,s.$c)(this.hass,this._config)),l=e.competition_logo||e.league_logo||null;return i.qy`
      ${(0,d.t7)({logo:l,title:o,badge:r})}

      <div class="scoreboard" aria-live="polite" aria-atomic="true">
        <div class="mc-team">
          ${e.home_logo?i.qy`<img class="mc-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="mc-name">${e.home_team||"?"}</span>
        </div>
        <div class="mc-score">
          ${t||a?i.qy`<span class="mc-num">${(0,n.Q)(e.home_score)} – ${(0,n.Q)(e.away_score)}</span>`:i.qy`<span class="mc-vs">${this._t("match.vs")}</span>`}
        </div>
        <div class="mc-team away">
          <span class="mc-name">${e.away_team||"?"}</span>
          ${e.away_logo?i.qy`<img class="mc-logo" src="${e.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
        </div>
      </div>
    `}_renderOverview(e,t){const a=e=>e&&"N/A"!==e?e:"",n=a(e.home_record_summary||e.home_record),r=a(e.away_record_summary||e.away_record),o=(0,u.y)(e,"home",e=>this._t(e)),l=(0,u.y)(e,"away",e=>this._t(e)),c=a(e.home_form||e.last_five_home),d=a(e.away_form||e.last_five_away),g=(0,E.q1)(this.hass,this._config,e),m=(0,E.Di)(g,e,this._config.team_name||t.team_name||"");return i.qy`
      ${(0,z.qd)((0,z.g6)(t?.data_alerts,e),{t:(e,t)=>this._t(e,t)})}
      ${(0,S.lx)(e,e=>this._t(e))}
      ${(0,q.WU)(e,{t:(e,t)=>this._t(e,t),provider:this.hass?.states?.[this._config.entity]?.attributes?.provider,updatedAt:this.hass?.states?.[this._config.entity]?.attributes?.last_successful_update})}
      <div class="ov-section">
        ${c||d?i.qy`
          <div class="ov-row">
            ${f=c,f?i.qy`<div class="ov-form-dots">${f.split("").slice(-5).map(e=>{const t="W"===e?"w":"L"===e||"V"===e?"l":"d";return i.qy`<span class="ov-fd ${t}"></span>`})}</div>`:i.qy`<div class="ov-form-dots"></div>`}
            <span class="ov-label">${this._t("team.form")||"Form"}</span>
            <div class="ov-form-dots right">${d?d.split("").slice(-5).map(e=>{const t="W"===e?"w":"L"===e||"V"===e?"l":"d";return i.qy`<span class="ov-fd ${t}"></span>`}):""}</div>
          </div>
        `:""}
        ${n||r?i.qy`
          <div class="ov-row">
            <span class="ov-val">${n||"—"}</span>
            <span class="ov-label">${this._t("match.record")}</span>
            <span class="ov-val right">${r||"—"}</span>
          </div>
        `:""}
        ${o||l?i.qy`
          <div class="ov-row">
            <span class="ov-val small">${o||"—"}</span>
            <span class="ov-label">${this._t("match.standing")}</span>
            <span class="ov-val right small">${l||"—"}</span>
          </div>
        `:""}
        ${e.week_label?i.qy`<div class="ov-meta"><span class="ov-cal">◈</span> ${e.week_label}</div>`:""}
      </div>
      ${this._renderPreview(e.preview)}
      ${m?i.qy`<section class="brief-card impact">
        <h4>${this._t("race.standings_impact")}</h4>
        <div class="impact-row"><strong>${m.team}</strong><b>${m.previous_rank} → ${m.rank}</b><span>${m.change>0?`▲ ${m.change}`:m.change<0?`▼ ${Math.abs(m.change)}`:"–"} · ${m.points} ${this._t("col.points")}</span></div>
      </section>`:""}
      ${this._renderReview(e.review)}
      ${this._renderPredictionOutcome(e)}
      ${this._renderMatchStory((0,$.qU)(e),(0,$.Qt)(e))}
      ${this._renderTeamOfMatch(e.team_of_the_match)}
      ${(0,p.n)(e,{lang:(0,s.$c)(this.hass,this._config),t:e=>this._t(e),weatherBadge:this._weatherBadge||null,hideBroadcasts:!0===this._config.hide_broadcasts})}
      ${!1!==this._config.show_prediction?(0,h.K4)(e,{t:e=>this._t(e),lang:(0,s.$c)(this.hass,this._config),showDetails:!1!==this._config.show_prediction_details}):""}
      ${!1!==this._config.show_odds?(0,h.vK)(e,{t:(e,t)=>this._t(e,t)}):""}
      ${!1!==this._config.show_injuries?(0,h.Sj)(e,{t:(e,t)=>this._t(e,t)}):""}
    `;var f}_renderPreview(e){if(!e||!e.home_form&&!e.away_form&&!Number(e.h2h_count))return"";const t=e=>e?i.qy`<div class="brief-form">${String(e).split("").map(e=>i.qy`<b class=${e.toLowerCase()}>${e}</b>`)}</div>`:i.qy`<span>—</span>`;return i.qy`<section class="brief-card preview">
      <h4>${this._t("match.preview")}</h4>
      <div class="brief-form-row">${t(e.home_form)}<span>${this._t("team.form")}</span>${t(e.away_form)}</div>
      ${e.h2h_count?i.qy`<p>${this._t("match.h2h_available",{n:e.h2h_count})}</p>`:""}
      ${e.coverage?.length?i.qy`<div class="brief-chips">${e.coverage.map(e=>i.qy`<span>${function(e,t){const a=String(e||"").trim(),i=P[a.toLowerCase()];return i?t(i):a.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,e=>e.toUpperCase())}(e,e=>this._t(e))}</span>`)}</div>`:""}
    </section>`}_renderReview(e){if(!e)return"";const t=e.expected_goals||{},a=e.standout_stat;return i.qy`<section class="brief-card review">
      <h4>${this._t("match.review")}</h4>
      ${e.scorers?.length?i.qy`<div class="brief-scorers">${e.scorers.map(e=>i.qy`<span>⚽ ${e.player||"?"} ${e.minute?`${e.minute}'`:""}</span>`)}</div>`:""}
      ${e.player_of_the_match?.name?i.qy`<p>⭐ <strong>${e.player_of_the_match.name}</strong>${e.player_of_the_match.rating?` · ${e.player_of_the_match.rating}`:""}</p>`:""}
      ${null!=t.home||null!=t.away?i.qy`<p>xG <strong>${t.home??"—"} – ${t.away??"—"}</strong></p>`:""}
      ${a?i.qy`<p>${_(a.key,e=>this._t(e))}: <strong>${a.home} – ${a.away}</strong></p>`:""}
      ${e.top_rated_players?.length?i.qy`<div class="brief-ratings">${e.top_rated_players.map(e=>i.qy`<span>${e.name}<b>${e.rating}</b></span>`)}</div>`:""}
    </section>`}_renderPredictionOutcome(e){const t=(0,$.Mh)(e);if(!t)return"";const a=e=>this._t(`match.outcome_${e}`);return i.qy`<section class="brief-card outcome ${t.correct?"correct":"surprise"}">
      <h4>${this._t("match.expectation_reality")}</h4>
      <div class="outcome-grid">
        <span><small>${this._t("match.expected")}</small><strong>${a(t.predicted)}${null!=t.predictedPercent?` · ${t.predictedPercent}%`:""}</strong></span>
        <b>${t.correct?"✓":"↯"}</b>
        <span><small>${this._t("match.actual")}</small><strong>${a(t.actual)}</strong></span>
      </div>
      ${t.xg?i.qy`<p>xG <strong>${t.xg.home??"—"} – ${t.xg.away??"—"}</strong></p>`:""}
    </section>`}_renderMatchStory(e,t=[]){if(!(Array.isArray(e)&&e.length||t.length))return"";const a={opening_goal:"story.opening_goal",equalizer:"story.equalizer",decisive_goal:"story.decisive_goal",red_card:"story.red_card"};return i.qy`<section class="brief-card story"><h4>${this._t("match.story")}</h4><div class="story-line">
      ${e.map(e=>i.qy`<div><b>${e.minute?`${e.minute}'`:"·"}</b><i></i><span><strong>${this._t(a[e.type]||"match.event")}</strong><small>${e.player||""}${e.team?` · ${e.team}`:""}</small></span></div>`)}
    </div>${t.length?i.qy`<ul class="story-summary">${t.map(e=>i.qy`<li>${this._t(e.key,e.vars)}</li>`)}</ul>`:""}</section>`}_renderTeamOfMatch(e){if(!Array.isArray(e)||e.length<5)return"";const t={GK:0,DEF:1,MID:2,FWD:3},a=[...e].sort((e,a)=>(t[e.position]??4)-(t[a.position]??4));return i.qy`<section class="brief-card best-xi"><h4>${this._t("match.team_of_match")}</h4><div class="best-xi-grid">
      ${a.map(e=>i.qy`<div class=${e.side||""}>${e.photo?i.qy`<img src=${e.photo} alt="">`:""}<span>${e.short_name||e.name}</span><b>${e.rating}</b><small>${e.position||""}</small></div>`)}
    </div></section>`}_renderStats(e){let t=[];if(e.home_statistics&&"object"==typeof e.home_statistics){const a=e.home_statistics,i=e.away_statistics||{},s=new Set(["appearances"]);t=Object.entries(a).filter(([e])=>"Unknown"!==e&&!s.has(e)).map(([e,t])=>({label:_(e,e=>this._t(e)),home:t,away:i[e]??"—"}))}return t.length?i.qy`
      <div class="stats-list">
        ${t.map(e=>{const t=e=>null!=e&&""!==e&&"N/A"!==e?String(e):"—",a=t(e.home),s=t(e.away),n=parseFloat(a)||0,r=n+(parseFloat(s)||0),o=r>0?Math.round(n/r*100):50;return i.qy`
            <div class="stat-row">
              <span class="stat-val">${a}</span>
              <div class="stat-center">
                <div class="stat-label">${e.label}</div>
                <div class="stat-bars">
                  <div class="stat-bar home" style="width:${o}%"></div>
                  <div class="stat-bar away" style="width:${100-o}%"></div>
                </div>
              </div>
              <span class="stat-val right">${s}</span>
            </div>
          `})}
      </div>
    `:i.qy`<p class="empty">${this._t("ui.no_stats_yet")}</p>`}_renderTimeline(e){const t=(e.key_events||[]).filter(e=>{const t=(e.type_text||"").toLowerCase();return!g._Z.some(e=>t.includes(e))});if(!t.length)return i.qy`<p class="empty">${this._t("ui.no_events_yet")}</p>`;const a=e=>{const t=(e.type||"").toLowerCase(),a=(e.type_text||"").toLowerCase();return(0,g.UK)(e)?"goal":a.includes("yellow")?"yellow":a.includes("red card")?"red":"substitution"===t||a.includes("substitut")?"sub":"meta"},s=e=>"goal"===e?i.qy`<span class="tl-badge goal">${this._t("event.goal")}</span>`:"yellow"===e?i.qy`<span class="tl-badge yellow">${this._t("event.yellow_card")}</span>`:"red"===e?i.qy`<span class="tl-badge red">${this._t("event.red_card")}</span>`:"sub"===e?i.qy`<span class="tl-badge sub">${this._t("event.substitution")}</span>`:i.qy`<span class="tl-badge meta">·</span>`,n=e=>{const t=(e.athletes||[]).filter(Boolean);if(t.length)return t.join(", ");const a=g.WY[(e.type_text||"").toLowerCase()];return a?this._t(a):e.type_text||e.short_text||""},r="goals"===this._tlFilter?t.filter(e=>"goal"===a(e)):"cards"===this._tlFilter?t.filter(e=>["yellow","red"].includes(a(e))):t,o=t.some(e=>"goal"===a(e)),l=t.some(e=>["yellow","red"].includes(a(e)));return i.qy`
      <div class="tl-filters">
        <button class="tl-chip ${"all"===this._tlFilter?"active":""}" @click=${()=>{this._tlFilter="all"}}>${this._t("filter.all")||"Alles"}</button>
        ${o?i.qy`<button class="tl-chip ${"goals"===this._tlFilter?"active":""}" @click=${()=>{this._tlFilter="goals"}}>⚽ ${this._t("event.goal")}</button>`:""}
        ${l?i.qy`<button class="tl-chip ${"cards"===this._tlFilter?"active":""}" @click=${()=>{this._tlFilter="cards"}}>🟨 ${this._t("event.cards")||this._t("event.yellow_card")}</button>`:""}
      </div>
      <div class="tl-list">
        ${r.length?r.map(e=>{const t=a(e);return i.qy`
            <div class="tl-row">
              <span class="tl-min">${e.clock||e.minute?`${e.clock||e.minute}'`:""}</span>
              ${s(t)}
              <div class="tl-text">
                <div>${n(e)}</div>
                ${e.team?i.qy`<div class="tl-team">${e.team}</div>`:""}
              </div>
            </div>
          `}):i.qy`<p class="empty">${this._t("ui.no_events_yet")}</p>`}
      </div>
    `}_renderLineup(e){const t=e.lineup_home||[],a=e.lineup_away||[];if(!t.length&&!a.length)return i.qy`<p class="empty">${this._t("ui.no_lineup_yet")}</p>`;const s=(0,y.Ri)(e,{t:(e,t)=>this._t(e,t)});if(s)return s;const n=e=>e.some(e=>!0===e.starter||!1===e.starter),r=n(t)?t.filter(e=>!0===e.starter):t,o=n(t)?t.filter(e=>!1===e.starter):[],l=n(a)?a.filter(e=>!0===e.starter):a,c=n(a)?a.filter(e=>!1===e.starter):[];return this._renderLineupList(e,r,o,l,c)}_renderLineupList(e,t,a,s,n){const r=(e,t=!1,a=!1)=>i.qy`
      <div class="lu-player ${a?"bench":""}">
        ${t?"":i.qy`<span class="lu-shirt">${e.jersey||e.number||""}</span>`}
        <span class="lu-name">${e.name||e.display_name||""}</span>
        ${e.position?i.qy`<span class="lu-pos">${e.position}</span>`:""}
        ${t?i.qy`<span class="lu-shirt">${e.jersey||e.number||""}</span>`:""}
      </div>
    `;return i.qy`
      <div class="lu-wrap">
        <div class="lu-cols">
          <div class="lu-col">
            <div class="lu-header">${e.home_team||this._t("generic.home")}</div>
            ${t.map(e=>r(e,!1))}
            ${a.length?i.qy`
              <div class="lu-bench-label">${this._t("lineup.bench")}</div>
              ${a.map(e=>r(e,!1,!0))}
            `:""}
          </div>
          <div class="lu-col right">
            <div class="lu-header">${e.away_team||this._t("generic.away")}</div>
            ${s.map(e=>r(e,!0))}
            ${n.length?i.qy`
              <div class="lu-bench-label">${this._t("lineup.bench")}</div>
              ${n.map(e=>r(e,!0,!0))}
            `:""}
          </div>
        </div>
      </div>
    `}_renderH2H(e,t={}){const a=this._config.archive_entity?this.hass?.states?.[this._config.archive_entity]:null,n=(0,A.TH)((0,A.V1)(a),e.home_team,e.away_team),r=new Map;[...e.head_to_head||[],...n].forEach(e=>{const t=String(e.event_id||[String(e.date_iso||e.date||"").slice(0,10),e.home_team,e.away_team].join("|"));r.has(t)||r.set(t,e)});const o=[...r.values()].sort((e,t)=>String(t.date_iso||t.date||"").localeCompare(String(e.date_iso||e.date||""))),l=Number(e.preview?.h2h_count||0);if(!o.length)return i.qy`<p class="empty">${l?this._t("match.h2h_available",{n:l}):this._t("ui.no_h2h_yet")}</p>`;const c={id:t.team_id??null,name:this._config.team_name||this._config.my_team||t.team_name||""};return i.qy`
      <div class="h2h-list">
        ${n.length?i.qy`<p class="h2h-source">${this._t("match.historical_h2h",{n:n.length})}</p>`:""}
        ${o.map(e=>{const t=function(e,t={}){const a=Number.parseInt(e?.home_score??e?.home_goals,10),i=Number.parseInt(e?.away_score??e?.away_goals,10),s=Number.isFinite(a)&&Number.isFinite(i),n=s&&a>i,r=s&&i>a,o=(0,C.YZ)(e,"home",t),l=(0,C.YZ)(e,"away",t);let c="neutral";return s&&a===i?c="draw":o?c=n?"our-win":r?"our-loss":"neutral":l&&(c=r?"our-win":n?"our-loss":"neutral"),{homeScore:a,awayScore:i,homeWon:n,awayWon:r,scoreClass:c}}(e,c);return i.qy`
            <div class="h2h-row">
              <span class="h2h-date">${(0,s.iS)(e.date||e.date_iso,(0,s.$c)(this.hass,this._config))||String(e.date||e.date_iso||"").split("T")[0]}</span>
              <span class="h2h-team ${t.homeWon?"win":""}">${e.home_team||e.home_abbrev||"?"}</span>
              <span class="h2h-score ${t.scoreClass}">${Number.isFinite(t.homeScore)?t.homeScore:"?"}–${Number.isFinite(t.awayScore)?t.awayScore:"?"}</span>
              <span class="h2h-team right ${t.awayWon?"win":""}">${e.away_team||e.away_abbrev||"?"}</span>
            </div>
          `})}
      </div>
    `}getCardSize(){return 6}static getConfigElement(){return document.createElement("soccer-live-match-center-editor")}static getStubConfig(){return{entity:""}}static get styles(){return[r.G,b.M,d.Ng,p.d,v.c,y.hl,h.zl,S.bN,q.mG,z.by,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);border-radius:20px;overflow:hidden;padding:0;}.mc-hero-section{position:relative;overflow:hidden;}.scoreboard{display:flex;align-items:center;justify-content:space-between;padding:16px 18px 12px;}.mc-team{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;}.mc-team.away{align-items:center;}.mc-logo{width:48px;height:48px;object-fit:contain;}.mc-name{font-size:12px;font-weight:700;text-align:center;max-width:90px;}.mc-score{text-align:center;flex:0 0 auto;padding:0 8px;}.mc-num{font-size:34px;font-weight:900;letter-spacing:4px;}.mc-vs{font-size:18px;font-weight:700;color:var(--cl-text-2,#94a3b8);}.tab-bar{display:flex;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.08));overflow-x:auto;scrollbar-width:none;}.tab-bar::-webkit-scrollbar{display:none;}.tab{flex:1;min-width:56px;padding:9px 4px;background:none;border:none;border-bottom:2px solid transparent;color:var(--cl-text-2,#94a3b8);font-size:11px;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:0.06em;transition:color 0.15s;}.tab.active{color:var(--cl-accent,#6366f1);border-bottom-color:var(--cl-accent,#6366f1);}.mc-picker{position:relative;z-index:3;display:flex;align-items:center;gap:8px;padding:10px 14px;background:var(--cl-bg);border-bottom:1px solid var(--cl-divider);}.mc-picker select{min-width:0;flex:1;padding:7px 9px;border-radius:8px;border:1px solid var(--cl-divider);background:rgba(255,255,255,.06);color:var(--cl-text);}.mc-picker span{color:var(--cl-accent);font-size:11px;}.brief-card{margin:8px 12px;padding:11px;border-radius:12px;border:1px solid var(--cl-divider);background:rgba(255,255,255,.025);}.readiness{margin:10px 12px;}.brief-card h4{margin:0 0 9px;color:var(--cl-accent);font-size:12px;text-transform:uppercase;letter-spacing:.08em;}.brief-card p{margin:7px 0;color:var(--cl-text-2);font-size:11px;}.brief-card strong{color:var(--cl-text)}.brief-form-row{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--cl-text-2);font-size:10px;}.brief-form{display:flex;gap:3px;}.brief-form-row>.brief-form:last-child{justify-content:flex-end}.brief-form b{display:grid;place-items:center;width:19px;height:19px;border-radius:50%;color:white;font-size:9px}.brief-form .w{background:#16a34a}.brief-form .d{background:#64748b}.brief-form .l{background:#dc2626}.brief-chips,.brief-scorers{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;}.brief-chips span,.brief-scorers span{padding:4px 7px;border-radius:999px;background:rgba(148,163,184,.1);color:var(--cl-text-2);font-size:9px}.brief-ratings{display:grid;gap:4px;}.brief-ratings span{display:flex;justify-content:space-between;color:var(--cl-text-2);font-size:10px}.brief-ratings b{color:#fbbf24}.impact-row{display:grid;grid-template-columns:1fr auto;gap:4px;align-items:center}.impact-row strong{font-size:11px}.impact-row b{color:var(--cl-accent);font-size:15px}.impact-row span{grid-column:1/-1;color:var(--cl-text-2);font-size:9px}.outcome-grid{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px}.outcome-grid span{display:flex;flex-direction:column}.outcome-grid span:last-child{text-align:right}.outcome-grid small{color:var(--cl-text-2);font-size:9px}.outcome-grid strong{color:var(--cl-text);font-size:11px}.outcome-grid>b{color:var(--cl-success,#10b981);font-size:18px}.outcome.surprise .outcome-grid>b{color:var(--cl-warning,#f59e0b)}.outcome>p{margin:8px 0 0;text-align:center;color:var(--cl-text-2);font-size:10px}.story-line{display:grid}.story-line>div{display:grid;grid-template-columns:32px 12px 1fr;align-items:stretch;min-height:42px}.story-line>div>b{color:var(--cl-accent);font-size:10px;padding-top:3px}.story-line i{position:relative;border-left:2px solid var(--cl-divider)}.story-line i::before{content:'';position:absolute;left:-5px;top:3px;width:8px;height:8px;border-radius:50%;background:var(--cl-accent)}.story-line span{display:flex;flex-direction:column;padding-bottom:8px}.story-line span strong{font-size:10px}.story-line span small{color:var(--cl-text-2);font-size:9px}.story-summary{display:grid;gap:5px;margin:7px 0 0;padding:8px 8px 8px 22px;border-radius:8px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:9px}.best-xi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.best-xi-grid>div{display:grid;grid-template-columns:28px 1fr auto;align-items:center;gap:5px;padding:6px;border-radius:8px;background:rgba(255,255,255,.04);min-width:0}.best-xi-grid img{width:28px;height:28px;border-radius:50%;object-fit:cover}.best-xi-grid span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--cl-text);font-size:9px}.best-xi-grid b{color:#fbbf24;font-size:10px}.best-xi-grid small{grid-column:2/-1;color:var(--cl-text-2);font-size:8px}.best-xi-grid .away{box-shadow:inset 2px 0 var(--cl-accent-2)}.best-xi-grid .home{box-shadow:inset 2px 0 var(--cl-accent)}.tab-content{min-height:80px;}.ov-section{padding:4px 16px 8px;}.ov-row{display:flex;align-items:center;padding:9px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.ov-val{flex:1;font-weight:700;font-size:13px;}.ov-val.right{text-align:right;}.ov-val.small{font-size:11px;}.ov-label{flex:0 0 70px;text-align:center;font-size:10px;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;}.ov-meta{font-size:12px;color:var(--cl-text-2,#94a3b8);padding:7px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.05));display:flex;align-items:center;gap:5px;}.ov-cal{font-size:10px;color:var(--cl-accent,#6366f1);}.ov-form-dots{flex:1;display:flex;gap:3px;align-items:center;}.ov-form-dots.right{justify-content:flex-end;}.ov-fd{width:7px;height:7px;border-radius:50%;flex-shrink:0;}.ov-fd.w{background:var(--cl-green,#10b981);}.ov-fd.l{background:var(--cl-live,#ef4444);}.ov-fd.d{background:var(--cl-text-2,#94a3b8);opacity:0.5;}.stats-list{padding:4px 0;}.stat-row{display:flex;align-items:center;padding:6px 16px;gap:8px;}.stat-val{min-width:34px;font-weight:700;font-size:13px;}.stat-val.right{text-align:right;}.stat-center{flex:1;display:flex;flex-direction:column;gap:3px;}.stat-label{text-align:center;font-size:10px;color:var(--cl-text-2,#94a3b8);}.stat-bars{display:flex;height:4px;border-radius:2px;overflow:hidden;}.stat-bar.home{background:var(--cl-accent,#6366f1);}.stat-bar.away{background:var(--cl-text-2,#94a3b8);opacity:0.4;}.tl-filters{display:flex;gap:6px;padding:8px 16px 4px;}.tl-chip{background:var(--cl-card-2,rgba(255,255,255,0.05));border:1px solid var(--cl-divider,rgba(255,255,255,0.08));border-radius:99px;color:var(--cl-text-2,#94a3b8);font-size:10px;font-weight:700;padding:3px 10px;cursor:pointer;}.tl-chip.active{background:var(--cl-accent,#6366f1);border-color:var(--cl-accent,#6366f1);color:#fff;}.tab-content{min-height:80px;max-height:380px;overflow-y:auto;-webkit-overflow-scrolling:touch;}.tab-content.lineup{max-height:none;overflow-y:visible;}.tl-list{padding:4px 16px;}.tl-row{display:flex;align-items:flex-start;gap:8px;padding:8px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.tl-min{min-width:28px;font-size:11px;font-weight:700;color:var(--cl-text-2,#94a3b8);padding-top:2px;}.tl-badge{display:inline-block;font-size:8px;font-weight:800;padding:1px 5px;border-radius:3px;text-transform:uppercase;letter-spacing:0.04em;flex-shrink:0;line-height:15px;white-space:nowrap;}.tl-badge.goal{background:rgba(99,102,241,0.18);color:var(--cl-accent,#6366f1);}.tl-badge.yellow{background:rgba(245,158,11,0.18);color:#f59e0b;}.tl-badge.red{background:rgba(239,68,68,0.18);color:#ef4444;}.tl-badge.sub{background:rgba(148,163,184,0.12);color:var(--cl-text-2,#94a3b8);}.tl-badge.meta{background:transparent;color:var(--cl-text-2,#94a3b8);font-size:14px;padding:0 4px;letter-spacing:0;}.tl-text{flex:1;font-size:12px;}.tl-team{font-size:10px;color:var(--cl-text-2,#94a3b8);margin-top:2px;}.lu-wrap{padding:8px 16px;}.lu-formation{display:flex;align-items:center;justify-content:space-between;padding:6px 0 10px;font-size:20px;font-weight:900;}.lu-form-label{font-size:10px;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;}.lu-cols{display:flex;gap:12px;}.lu-col{flex:1;}.lu-col.right .lu-player{flex-direction:row-reverse;}.lu-header{font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;}.lu-player{display:flex;align-items:center;gap:5px;padding:4px 0;font-size:11px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.04));}.lu-player.bench{opacity:0.65;font-size:10.5px;}.lu-shirt{font-size:10px;font-weight:800;color:var(--cl-accent,#6366f1);min-width:16px;}.lu-pos{font-size:9px;color:var(--cl-text-2,#94a3b8);}.lu-bench-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-text-2,#94a3b8);margin:8px 0 2px;display:flex;align-items:center;gap:6px;}.lu-bench-label::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--cl-divider,rgba(255,255,255,0.08)),transparent);}.h2h-list{padding:4px 16px;}.h2h-row{display:flex;align-items:center;gap:6px;padding:8px 0;font-size:12px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.h2h-date{font-size:10px;color:var(--cl-text-2,#94a3b8);min-width:46px;}.h2h-team{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.h2h-team.right{text-align:right;}.h2h-team.win{font-weight:700;}.h2h-score{min-width:46px;text-align:center;font-weight:700;}.h2h-score.our-win{color:var(--cl-green);}.h2h-score.our-loss{color:var(--cl-live);}.h2h-score.draw{color:var(--cl-text-2,#94a3b8);}.h2h-score.neutral{color:var(--cl-text);}.h2h-source{margin:5px 0 8px;color:var(--cl-text-2);font-size:9px}.empty{text-align:center;color:var(--cl-text-2,#94a3b8);font-size:12px;padding:24px 16px;margin:0;}`]}}customElements.get("soccer-live-match-center")||customElements.define("soccer-live-match-center",j)},4631(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(7554),o=a(4522),l=a(435);class c extends i.WF{static properties={hass:{},_config:{}};setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e)}static getConfigElement(){return document.createElement("soccer-live-insights-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_",card_type:"matchday"}}getCardSize(){return 4}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return(0,o.PA)("!",this._t("ui.entity_not_found"),this._config.entity,this._t("ui.check_entity_config"));const t=e.attributes||{},a=t.matchday,r=a?.matches||t.matches||[];if(!r.length)return(0,o.QG)("📅",this._t("matchday.empty"),this._t("matchday.empty_hint"),"");const c=a?.phase||(r.some(e=>"in"===e.state)?"live":r.some(e=>"pre"===e.state)?"upcoming":"finished"),d=r.find(e=>String(e.event_id)===String(a?.focus_event_id))||r.find(e=>"pre"===e.state);return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <main>
          <header>
            <div><small>${this._t("card.matchday")}</small><h2>${a?.competition||r[0]?.competition_name||r[0]?.league_name||""}</h2></div>
            <span class=${c}>${this._t(`matchday.${c}`)}</span>
          </header>
          <div class="counters">
            <b>${a?.total??r.length}<small>${this._t("matchday.matches")}</small></b>
            <b>${a?.live??r.filter(e=>"in"===e.state).length}<small>${this._t("matchday.live")}</small></b>
            <b>${a?.upcoming??r.filter(e=>"pre"===e.state).length}<small>${this._t("matchday.upcoming")}</small></b>
          </div>
          ${(0,l.lx)(d,e=>this._t(e),{compact:!0})}
          <section>
            ${r.map(e=>i.qy`
              <article class=${e.state||""}>
                <time>${(0,s.DK)(e.date,(0,s.$c)(this.hass,this._config))}</time>
                <div><span>${e.home_team}</span><span>${e.away_team}</span></div>
                <strong>${"pre"===e.state?(e.date||"").slice(-5):`${e.home_score??"-"}–${e.away_score??"-"}`}</strong>
                ${e.data_completeness?i.qy`<i title=${this._t("quality.completeness")}>${e.data_completeness.score}%</i>`:""}
              </article>
            `)}
          </section>
        </main>
      </ha-card>
    `}static styles=[n.G,r.M,l.bN,i.AH`ha-card{position:relative;overflow:hidden;border-radius:20px;background:var(--cl-bg);color:var(--cl-text)}main{position:relative;z-index:1;padding:16px}header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}header small{color:var(--cl-text-2);font-weight:800;text-transform:uppercase;letter-spacing:.08em}h2{margin:3px 0 0;font-size:17px}header>span{padding:5px 9px;border-radius:99px;background:var(--cl-chip-bg);color:var(--cl-accent);font-size:10px;font-weight:900;text-transform:uppercase}header>span.live{color:var(--cl-live)}.counters{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:12px}.counters b{padding:9px;text-align:center;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface);font-size:17px;color:var(--cl-accent)}.counters small{display:block;margin-top:2px;color:var(--cl-text-2);font-size:8px;text-transform:uppercase}section{margin-top:10px;border-top:1px solid var(--cl-divider)}article{display:grid;grid-template-columns:55px 1fr auto auto;gap:8px;align-items:center;padding:10px 2px;border-bottom:1px solid var(--cl-divider)}article time{font-size:9px;color:var(--cl-text-2)}article div{display:grid;gap:3px;font-size:11px}article strong{font-size:13px}article.live strong{color:var(--cl-live)}article i{min-width:28px;padding:3px;border-radius:6px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:8px;font-style:normal;text-align:center}@media(max-width:380px){article{grid-template-columns:45px 1fr auto}article i{display:none}}`]}customElements.get("soccer-live-matchday")||customElements.define("soccer-live-matchday",c)},1294(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(5186),r=a(2007);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[r.yj,i.AH``]}setConfig(e){this._config={...e}}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_standings")||e.includes("soccer_live_standings")).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_numberChanged(e){const t=parseInt(e.target.value,10);isNaN(t)||this._fire({...this._config,[e.target.dataset.configValue]:t})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
        </div>
        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("editor.default_group")}</label>
          <input type="text" .value=${this._config.default_group||""} data-config-value="default_group" @input=${this._textChanged} placeholder="${this._t("editor.placeholder_default_group")}">
        </div>
        <div>
          <label class="field-label">${this._t("editor.max_rows")}</label>
          <input type="number" min="1" max="20" .value=${this._config.max_rows??5} data-config-value="max_rows" @change=${this._numberChanged}>
        </div>
        <div>
          <label class="field-label">${this._t("editor.highlight_team")}</label>
          <input type="text" .value=${this._config.highlight_team||""} data-config-value="highlight_team" @input=${this._textChanged}>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_wdlgd")}</label>
          <ha-switch .checked=${!0===this._config.hide_stats} data-config-value="hide_stats" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-mini-standings-editor")||customElements.define("soccer-live-mini-standings-editor",o)},7706(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(4522),o=a(7554),l=a(1448);class c extends i.WF{static get properties(){return{hass:{},_config:{},_selectedGroup:{type:String}}}constructor(){super(),this._hlScrolled=!1}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this._selectedGroup=e.default_group||null,this._hlScrolled=!1,(0,n.K)(this,e)}updated(){if(!this._hlScrolled&&this._config?.highlight_team){const e=this.shadowRoot?.querySelector("tr.hl");e&&(e.scrollIntoView({behavior:"smooth",block:"nearest"}),this._hlScrolled=!0)}}getCardSize(){return 3}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-mini-standings-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_standings_",max_rows:5}}_selectGroup(e){this._selectedGroup=e,this.requestUpdate()}static get styles(){return[n.G,o.M,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:20px;overflow:hidden;}.top-bar{position:relative;padding:20px 18px;background:linear-gradient(135deg,rgba(var(--cl-accent-rgb),0.15),rgba(var(--cl-accent-2-rgb),0.10) 60%,transparent);border-bottom:1px solid var(--cl-divider);overflow:hidden;}.top-bar::before{content:'⚽';position:absolute;right:-10px;top:-10px;font-size:90px;opacity:0.06;transform:rotate(15deg);}.top-bar h2{margin:0;font-size:20px;font-weight:900;letter-spacing:-0.03em;background:linear-gradient(135deg,var(--cl-text),var(--cl-accent));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}.top-bar .sub{color:var(--cl-text-2);font-size:12px;margin-top:4px;font-weight:500;}.card-content{padding:12px;}.groups{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;}.group-btn{font-size:10px;font-weight:700;padding:3px 8px;border-radius:99px;cursor:pointer;border:1px solid var(--cl-divider);background:var(--cl-surface);color:var(--cl-text-2);white-space:nowrap;}.group-btn.active{background:var(--cl-accent);border-color:var(--cl-accent);color:#fff;}table{width:100%;border-collapse:collapse;font-size:12px;}th{color:var(--cl-text-2);font-weight:600;padding:2px 4px;text-align:center;font-size:11px;}th.left{text-align:left;}td{padding:5px 4px;text-align:center;color:var(--cl-text);border-top:1px solid var(--cl-divider);}td.left{text-align:left;}.team-row{display:flex;align-items:center;gap:6px;}.team-logo{width:16px;height:16px;object-fit:contain;}.team-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:110px;}.hl td{background:rgba(var(--cl-accent-rgb),0.2) !important;}.pos{width:22px;font-weight:700;color:var(--cl-text-2);}.pts{font-weight:700;color:var(--cl-accent);}.empty{padding:16px;text-align:center;color:var(--cl-text-2);font-size:13px;}`]}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return(0,r.PA)("⚠️",this._t("ui.entity_not_found"),`${this._t("ui.entity_not_found")}: ${this._config.entity}`,this._t("ui.check_entity_config"));const t=e.attributes.standings_groups||[];if(!t.length)return(0,r._$)(e.attributes,e=>this._t(e),()=>(0,r.PA)("⚽",this._t("ui.no_standings_data"),this._t("ui.no_standings_hint"),""));const a=t.find(e=>e.name===this._selectedGroup)||t[0];let o=a&&a.standings||[];o=o.sort((e,t)=>{const a=parseInt(e.pts||e.points||0),i=parseInt(t.pts||t.points||0);if(a!==i)return i-a;const s=parseInt(e.W||e.wins||0),n=parseInt(t.W||t.wins||0);if(s!==n)return n-s;const r=parseInt(e.GD||e.goal_difference||0);return parseInt(t.GD||t.goal_difference||0)-r});const c=this._config.max_rows||o.length,d=(this._config.highlight_team||"").toLowerCase(),p=e.attributes.league_name||"",h=(0,l.VR)(p,(0,s.$c)(this.hass,this._config))||p,u=e.attributes.league_abbreviation&&"N/A"!==e.attributes.league_abbreviation?e.attributes.league_abbreviation:null,g=e.attributes.season||"",m=u&&p?g.replace(p,"").trim():g,f=[this._t("card.standings")];m&&"N/A"!==m&&f.push(m);const _=o.slice(0,c),b=t.length>1;return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        ${this._config.hide_header?"":i.qy`
          <div class="top-bar">
            <div class="league-title">
              <h2>${u||h||e.state}</h2>
              <div class="sub">${f.join(" · ")}</div>
            </div>
          </div>
        `}
        <div class="card-content">

        ${b?i.qy`
          <div class="groups">
            ${t.map(e=>i.qy`
              <span
                class="group-btn ${e.name===a.name?"active":""}"
                @click=${()=>this._selectGroup(e.name)}>
                ${e.name}
              </span>
            `)}
          </div>
        `:""}

        <table>
          <tr>
            <th class="left" style="width:22px">#</th>
            <th class="left">${this._t("mini.team")}</th>
            <th>${this._t("mini.p")}</th>
            ${this._config.hide_stats?"":i.qy`<th>${this._t("col.wins")}</th><th>${this._t("col.draws")}</th><th>${this._t("col.losses")}</th><th>${this._t("mini.gd")}</th>`}
            <th>${this._t("mini.pts")}</th>
          </tr>
          ${_.map(e=>{const t=d&&e.team_name&&e.team_name.toLowerCase().includes(d),a=(parseInt(e.wins)||0)+(parseInt(e.draws)||0)+(parseInt(e.losses)||0),s=parseInt(e.goal_difference)||0,n=s>0?`+${s}`:`${s}`,r=e.zone_color||null;return i.qy`
              <tr class="${t?"hl":""}">
                <td class="pos" style="${r?`box-shadow: inset 3px 0 0 ${r};`:""}">${e.rank??""}</td>
                <td class="left">
                  <div class="team-row">
                    ${e.team_logo?i.qy`<img class="team-logo" src="${e.team_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
                    <span class="team-name">${e.team_name||""}</span>
                  </div>
                </td>
                <td>${a||0}</td>
                ${this._config.hide_stats?"":i.qy`<td>${e.wins??0}</td><td>${e.draws??0}</td><td>${e.losses??0}</td><td>${null!=e.goal_difference?n:0}</td>`}
                <td class="pts">${e.points??0}</td>
              </tr>
            `})}
        </table>
        </div>
      </ha-card>
    `}}customElements.get("soccer-live-mini-standings")||customElements.define("soccer-live-mini-standings",c)},4488(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(5186),r=a(2007);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},_allEntities:{type:Array}}}constructor(){super(),this._allEntities=[]}static get styles(){return[r.yj,i.AH`.entity-list{display:flex;flex-direction:column;gap:8px;}.entity-row{display:flex;gap:8px;align-items:center;}.entity-row select{flex:1;}.remove-btn{background:none;border:1px solid var(--error-color,#e53935);color:var(--error-color,#e53935);border-radius:6px;padding:6px 10px;cursor:pointer;font-size:13px;}.add-btn{background:var(--primary-color,#03a9f4);color:#fff;border:none;border-radius:8px;padding:10px 16px;cursor:pointer;font-size:13px;font-weight:600;width:100%;}.hint{font-size:11px;color:var(--secondary-text-color);}`]}setConfig(e){this._config={...e,entities:[...e.entities||[]]}}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this._allEntities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("all_mixed")||["team_match","team_matches_mixed"].includes(this.hass.states[e]?.attributes?.sensor_type)).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_entityChanged(e,t){const a=[...this._config.entities||[]];a[t]=e.target.value,this._fire({...this._config,entities:a})}_removeEntity(e){const t=[...this._config.entities||[]];t.splice(e,1),this._fire({...this._config,entities:t})}_addEntity(){const e=[...this._config.entities||[],""];this._fire({...this._config,entities:e})}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entities||[];return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.teams")}</h3>
        <p class="hint">${this._t("editor.hint_multi_team_sensor")}</p>
        <div class="entity-list">
          ${e.map((e,t)=>i.qy`
            <div class="entity-row">
              <select @change=${e=>this._entityChanged(e,t)}>
                ${e&&this._allEntities.includes(e)?"":i.qy`<option value="${e}" selected>${e||this._t("editor.sensor")}</option>`}
                ${this._allEntities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
              </select>
              <button class="remove-btn" aria-label=${this._t("generic.remove")} title=${this._t("generic.remove")} @click=${()=>this._removeEntity(t)}>✕</button>
            </div>
          `)}
        </div>
        <button class="add-btn" @click=${this._addEntity}>+ ${this._t("editor.teams")}</button>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("editor.card_title")}</label>
          <input type="text" .value=${this._config.title||""} data-config-value="title" @input=${this._textChanged} placeholder="${this._t("card.my_teams")}">
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-multi-team-editor")||customElements.define("soccer-live-multi-team-editor",o)},1136(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8657),r=a(8429),o=a(1979),l=a(4522),c=a(6639),d=a(5247),p=a(7554);class h extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_cachedData:{}}}setConfig(e){if(!e.entities||!e.entities.length)throw new Error("At least one entity required");this._config=e,(0,r.K)(this,e),this._isLoading=!0,this._loadingStarted=Date.now(),this._lastWeatherVenue=null}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}updated(e){if(e.has("hass")){const e=this._config?.entities||[];e.every(e=>{const t=this.hass?.states[e];return t&&"unavailable"!==t.state})&&(this._isLoading=!1,e.forEach(e=>{const t=this.hass?.states[e];t&&d.Q.set(e,t.attributes)}))}}getCardSize(){return Math.max(2,(this._config.entities||[]).length+1)}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-multi-team-editor")}static getStubConfig(){return{entities:[]}}_getMatch(e){const t=e.attributes.matches||[];return t.find(e=>"in"===e.state)||t.find(e=>"pre"===e.state)||t.find(e=>"post"===e.state)||t[0]||null}static get styles(){return[r.G,p.M,o.Mt,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:12px;border-radius:20px;overflow:hidden;}.title{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-text-2);margin-bottom:10px;}.match-row{position:relative;z-index:1;display:flex;align-items:center;padding:8px 0;border-bottom:1px solid var(--divider-color,rgba(255,255,255,0.07));gap:8px;}.match-row:last-child{border-bottom:none;}.team-block{display:flex;align-items:center;gap:6px;flex:1;min-width:0;}.team-block.right{flex-direction:row-reverse;}.team-logo{width:20px;height:20px;object-fit:contain;flex-shrink:0;}.team-name{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--cl-text);}.score-block{text-align:center;min-width:60px;}.score{font-size:15px;font-weight:900;color:var(--cl-text);letter-spacing:2px;}.live-dot{display:inline-block;width:6px;height:6px;background:#e53935;border-radius:50%;margin-right:3px;animation:pulse 1s infinite;}.status{font-size:10px;color:var(--cl-text-2);}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}.no-match{font-size:11px;color:var(--cl-text-2);text-align:center;padding:4px;}.no-match.sync{font-weight:600;}.no-match.sync.error{color:var(--cl-live,#ef4444);}.empty{padding:16px;text-align:center;color:var(--cl-text-2);}`]}_renderMatch(e){let t=this.hass.states[e];if(!t){const a=d.Q.get(e);if(!a||!a.data.matches)return i.qy`<div class="match-row"><div class="no-match">${this._t("team.unknown_entity")}: ${e}</div></div>`;t={attributes:a.data,state:"cached"}}const a=this._getMatch(t);if(!a){const a=(0,c.a)(t.attributes?.sync_status);return a?i.qy`<div class="match-row"><div class="no-match sync ${a.kind}">${a.icon} ${this._t(a.title)}</div></div>`:i.qy`<div class="match-row"><div class="no-match">${this._t("team.no_match")} (${e})</div></div>`}const s="in"===a.state,r="post"===a.state,o=s||r,l=a.date||"";return i.qy`
      <div class="match-row">
        <div class="team-block">
          ${a.home_logo?i.qy`<img class="team-logo" src="${a.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="team-name">${a.home_team||"?"}</span>
        </div>

        <div class="score-block">
          ${s?i.qy`<div><span class="live-dot"></span><span class="status">${a.clock||this._t("status.live")}</span></div>`:""}
          ${o?i.qy`<div class="score">${(0,n.Q)(a.home_score)} - ${(0,n.Q)(a.away_score)}</div>`:i.qy`<div class="status">${l||this._t("match.vs")}</div>`}
          ${r?i.qy`<div class="status">${this._t("status.full_time")}</div>`:""}
        </div>

        <div class="team-block right">
          <span class="team-name">${a.away_team||"?"}</span>
          ${a.away_logo?i.qy`<img class="team-logo" src="${a.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
        </div>
      </div>
    `}render(){if((0,r.K)(this,this._config),!this.hass||!this._config)return(0,o.bY)(this._t("ui.loading"));const e=this._config.entities||[];if(!e.length)return(0,l.PA)("⚽",this._t("ui.no_entities_configured"),"",this._t("ui.add_team_entity"));if(this._isLoading&&!e.some(e=>{const t=d.Q.get(e);return t&&t.data.matches}))return Date.now()-this._loadingStarted>1e4?(0,l.PA)("⏱",this._t("ui.loading_timeout"),this._t("ui.entity_not_responding"),this._t("ui.check_integration")):(0,o.bY)(this._t("ui.loading"));const t=e.filter(e=>!this.hass.states[e]),a=e.some(e=>"unavailable"===this.hass.states[e]?.state);return t.length>0&&!a&&!t.some(e=>{const t=d.Q.get(e);return t&&t.data.matches})?(0,l.PA)("⚠️",this._t("ui.entity_not_found"),`${this._t("ui.entity_not_found")}: ${t[0]}`,this._t("ui.check_entity_config")):i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
        ${this._config.hide_header?"":i.qy`<div class="title">${this._config.title||this._t("card.my_teams")}</div>`}
        ${e.map(e=>this._renderMatch(e))}
        </div>
      </ha-card>
    `}}customElements.get("soccer-live-multi-team")||customElements.define("soccer-live-multi-team",h)},6593(e,t,a){a.r(t);var i=a(3957),s=a(2007),n=a(5186),r=a(2738);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select,input[type="number"]{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}`}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=parseInt(t.value,10);isNaN(i)||this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_news")||e.includes("soccer_live_news")).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">Entity (news sensor)</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_images")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_images}
            data-config-value="hide_images"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.max_articles")}</label>
          <input type="number" min="1" max="20"
            .value=${this._config.max_articles||5}
            data-config-value="max_articles"
            @change=${this._numberChanged} />
        </div>
        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-news-editor")||customElements.define("soccer-live-news-editor",o)},9395(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(226),o=a(7554),l=a(1448),c=a(4522);class d extends i.WF{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e),this.maxArticles=e.max_articles?e.max_articles:5,this.hideHeader=!0===e.hide_header,this.hideImages=!0===e.hide_images}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-news-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_news",max_articles:5,hide_header:!1,hide_images:!1}}_formatDate(e){if(!e)return"";try{const t=new Date(e),a=(new Date-t)/1e3;if(a<60)return this._t("time.now");if(a<3600)return this._t("time.n_min_ago",{n:Math.floor(a/60)});if(a<86400)return this._t("time.n_h_ago",{n:Math.floor(a/3600)});if(a<604800)return this._t("time.n_d_ago",{n:Math.floor(a/86400)});const i=this._t("month."+(t.getMonth()+1));return`${t.getDate()} ${i}`}catch(e){return""}}_openLink(e){e&&/^https?:\/\//i.test(e)&&window.open(e,"_blank","noopener,noreferrer")}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=(e.attributes.articles||[]).slice(0,this.maxArticles);return 0===t.length?(0,c._$)(e.attributes,e=>this._t(e),()=>i.qy`
      <ha-card class="empty">
        <div style="font-size:38px; opacity:0.25; margin-bottom:10px;">📰</div>
        <div style="font-weight:700;">${this._t("news.empty")}</div>
      </ha-card>`):i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":(0,r.t7)({logo:e.attributes.league_logo||(e.attributes.league_info||[])[0]?.logo_href||null,title:(0,l.VR)(e.attributes.league_name||this._t("card.news"),(0,s.$c)(this.hass,this._config)),badge:(0,r.N)(e.state,"neutral"),fallbackIcon:"📰"})}
        <div class="news-list">
          ${t.map(e=>i.qy`
            <article class="news-item ${this.hideImages||!e.image?"no-img":""}" @click="${()=>this._openLink(e.link)}">
              ${!this.hideImages&&e.image?i.qy`
                <div class="news-img" style="background-image: url('${e.image}');"></div>
              `:""}
              <div class="news-body">
                <div class="news-meta">
                  ${e.premium?i.qy`<span class="cat premium">${this._t("news.premium")}</span>`:e.category?i.qy`<span class="cat">${e.category}</span>`:""}
                  <span class="date">${this._formatDate(e.published)}</span>
                </div>
                <div class="news-headline">${e.headline}</div>
                ${e.description?i.qy`<div class="news-desc">${e.description}</div>`:""}
                ${e.byline?i.qy`<div class="news-byline">✍ ${e.byline}</div>`:""}
                ${e.tags&&e.tags.length>1?i.qy`<div class="news-tags">${e.tags.slice(0,4).map(e=>i.qy`<span class="news-tag">${e}</span>`)}</div>`:""}
              </div>
            </article>
          `)}
        </div>
      </ha-card>
    `}static get styles(){return[n.G,o.M,r.Ng,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.hero-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 0% 0%,rgba(236,72,153,0.10),transparent 50%),radial-gradient(ellipse at 100% 0%,rgba(99,102,241,0.10),transparent 50%);pointer-events:none;}.news-list{position:relative;z-index:1;display:flex;flex-direction:column;padding:6px;}.news-item{display:grid;grid-template-columns:96px 1fr;gap:14px;padding:12px;border-radius:14px;cursor:pointer;transition:all 0.25s cubic-bezier(0.4,0,0.2,1);}.news-item.no-img{grid-template-columns:1fr;}.news-item:hover{background:var(--cl-card-2);transform:translateX(3px);}.news-img{width:96px;height:72px;border-radius:10px;background-size:cover;background-position:center;background-color:var(--cl-card-2);flex-shrink:0;box-shadow:0 4px 12px rgba(0,0,0,0.25);}.news-body{display:flex;flex-direction:column;gap:4px;min-width:0;}.news-meta{display:flex;gap:8px;font-size:10px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:var(--cl-text-2);}.news-meta .cat{background:rgba(99,102,241,0.15);color:var(--cl-accent);border-radius:4px;padding:2px 7px;font-size:10px;font-weight:600;}.news-meta .cat.premium{background:rgba(251,191,36,0.18);color:var(--cl-gold,#fbbf24);}.news-meta .date::before{content:'·';margin-right:8px;opacity:0.4;}.news-meta .cat + .date::before{content:'·';}.news-byline{font-size:10px;color:var(--cl-text-2);margin-top:4px;opacity:0.7;}.news-tags{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;}.news-tag{font-size:10px;background:rgba(255,255,255,0.06);color:var(--cl-text-2);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2px 6px;white-space:nowrap;}.news-headline{font-size:14px;font-weight:800;line-height:1.3;color:var(--cl-text);letter-spacing:-0.01em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}.news-desc{font-size:12px;font-weight:500;color:var(--cl-text-2);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}`]}}customElements.get("soccer-live-news")||customElements.define("soccer-live-news",d)},8713(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(2007),r=a(2738),o=a(8136);class l extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object}}}static get styles(){return[n.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:14px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}select,input{width:100%;box-sizing:border-box;padding:9px 10px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);font-size:14px;}h3{margin:6px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}`]}setConfig(e){this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_set(e,t){this._fireConfigChanged({...this._config,[e]:t})}_selectChanged(e){this._set(e.target.dataset.configValue,e.target.value)}_numberChanged(e){this._set(e.target.dataset.configValue,Number(e.target.value))}_toggleChanged(e){this._set(e.target.dataset.configValue,e.target.checked)}_entities(){return this.hass?Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_")||e.includes("soccer_live_")).sort():[]}render(){if(!this._config||!this.hass)return i.qy``;const e=this._entities(),t=this._config.entity||"",a=this._config.show||"upcoming",s=this._config.variant||"fixtures",l=this.hass?.states?.[t]?.attributes?.sensor_type,c=(0,o.SW)(l),d=c.includes(s)?c:[s,...c];return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select data-config-value="entity" @change=${this._selectChanged}>
            ${e.includes(t)?"":i.qy`<option value="${t}" selected>${t||this._t("editor.select")}</option>`}
            ${e.map(e=>i.qy`<option value="${e}" ?selected=${e===t}>${e}</option>`)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("minimal.variant")}</label>
          <select data-config-value="variant" @change=${this._selectChanged}>
            ${d.map(e=>i.qy`
              <option value="${e}" ?selected=${s===e}>${this._t("minimal.variant_"+e)}</option>`)}
          </select>
          ${c.includes(s)?"":i.qy`<div class="field-warning">${this._t("minimal.variant_unsupported")}</div>`}
        </div>
        ${"fixtures"===s?i.qy`
        <div>
          <label class="field-label">${this._t("schedule.show")}</label>
          <select data-config-value="show" @change=${this._selectChanged}>
            <option value="upcoming" ?selected=${"upcoming"===a}>${this._t("schedule.show_upcoming")}</option>
            <option value="previous" ?selected=${"previous"===a}>${this._t("schedule.show_previous")}</option>
            <option value="all" ?selected=${"all"===a}>${this._t("schedule.show_all")}</option>
          </select>
        </div>`:""}
        ${"next"!==s?i.qy`
        <div>
          <label class="field-label">${this._t("editor.max_matches")}</label>
          <input type="number" min="1" max="50" data-config-value="max_matches"
            .value=${this._config.max_matches??15} @change=${this._numberChanged} />
        </div>`:""}
        <div>
          <label class="field-label">${this._t("editor.text_size")}</label>
          <select data-config-value="text_size" @change=${this._selectChanged}>
            ${["xs","small","normal","large"].map(e=>i.qy`
              <option value="${e}" ?selected=${(this._config.text_size||"normal")===e}>${this._t("schedule.size_"+e)}</option>`)}
          </select>
        </div>
        <div>
          <label class="field-label">${this._t("editor.my_team")}</label>
          <input type="text" placeholder="${this._t("editor.my_team_hint")}"
            .value=${this._config.my_team||""} @change=${e=>this._set("my_team",e.target.value)} />
        </div>
        ${"fixtures"===s?i.qy`
        <div class="option">
          <label>${this._t("schedule.show_competition")}</label>
          <ha-switch .checked=${!1!==this._config.show_competition} data-config-value="show_competition" @change=${this._toggleChanged}></ha-switch>
        </div>`:""}
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}</div>
        <div>${(0,n.YV)(this,this._config,e=>this._t?this._t(e):e)}</div>
      </div>
    `}}customElements.get("soccer-live-schedule-editor")||customElements.define("soccer-live-schedule-editor",l)},5931(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(4522),o=a(1979),l=a(7554),c=a(1448),d=a(8136);const p={xs:[11,3],small:[12.5,5],normal:[14,7],large:[16,9]};class h extends i.WF{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e)}getCardSize(){return 5}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-schedule-editor")}static getStubConfig(){return{entity:"",max_matches:15}}_matchDateValue(e){return e?.date_iso||e?.date||""}_matchDate(e){return(0,s.n1)(this._matchDateValue(e))}_matchTime(e){if(!e?.date_iso&&e?.date)return e.date.split(" ")[1]||"";const t=this._matchDate(e);if(!t)return"";const a=(0,s.$c)(this.hass,this._config),i=this.hass?.config?.time_zone;return t.toLocaleTimeString(a,{hour:"2-digit",minute:"2-digit",...i?{timeZone:i}:{}})}_rows(e){const t=this._config.show||"upcoming",a=e.upcoming_matches||[],i=e.previous_matches||[],s=e.matches||[];return"previous"===t?i.length?i:s.filter(e=>"post"===e.state):"all"===t?s.length?s:[...i,...a]:a.length?a:s.filter(e=>"pre"===e.state||"in"===e.state)}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return(0,o.bY)(this._t("ui.loading"));const e=this.hass.states[this._config.entity];if(!e)return(0,r.PA)("⚠️",this._t("ui.entity_not_found"),this._config.entity,this._t("ui.check_entity_config"));const t=e.attributes||{},a=(0,s.$c)(this.hass,this._config),l=this._config.variant||"fixtures",d=!1!==this._config.show_competition,h=this._config.text_size,[u,g]="number"==typeof h?[h,Math.max(2,Math.round(.42*h))]:p[h]||p.normal,m="next"===l?this._renderNext(t,a):"standings"===l?this._renderStandings(t,a):"form"===l?this._renderForm(t,a):this._renderFixtures(t,a,d);if(null===m)return(0,r.QG)("📅",this._t("minimal.empty"),"","");const f=!0===this._config.hide_header,_="fixtures"===l&&!d;return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="sch ${l} ${_?"no-comp":""}" style="--sch-fs:${u}px;--sch-pad:${g}px">
          ${f?"":i.qy`
            <div class="sch-title">
              ${(0,c.VR)(t.league_name||t.team_name||"",a)||this._t("card.minimal")}
            </div>`}
          ${m}
        </div>
      </ha-card>
    `}_renderFixtures(e,t,a){const i=this._rows(e).slice(0,this._config.max_matches??15);if(!i.length)return null;const s=new Intl.DateTimeFormat(t,{weekday:"short",day:"2-digit",month:"short"});return i.map((e,t)=>this._row(e,t,s,a))}_renderNext(e,t){const a=(0,d.YU)(e);if(!a)return null;const s=(0,d.SF)(a);let n;return n="live"===s?i.qy`<span class="mn-live">${this._t("status.live")} ${a.home_score??""}–${a.away_score??""}</span>`:"tbd"===s?this._relativeDay(a)+" · "+this._t("generic.unknown"):"time"===s?this._relativeDay(a)+" · "+this._matchTime(a):this._relativeDay(a),i.qy`
      <div class="mn-next">
        <div class="mn-teams">${a.home_team} <span class="mn-dash">–</span> ${a.away_team}</div>
        <div class="mn-when">${n}</div>
      </div>`}_relativeDay(e){const t=this._matchDate(e);if(!t)return this._matchDateValue(e).split(" ")[0]||"";const a=new Date;a.setHours(0,0,0,0);const i=new Date(t);i.setHours(0,0,0,0);const n=Math.round((i-a)/864e5);if(0===n)return this._t("time.today");if(1===n)return this._t("time.tomorrow");if(n>1&&n<=6)return this._t("time.in_n_d",{n});const r=(0,s.$c)(this.hass,this._config);return new Intl.DateTimeFormat(r,{weekday:"short",day:"2-digit",month:"short"}).format(t).replace(/\.$/,"")}_renderStandings(e,t){const a=(0,d.T0)(e,this._config.max_matches??20);if(!a.length)return null;const s=this._config.my_team||e.team_name||"";return i.qy`
      <div class="mn-tbl-head">
        <span></span><span>${this._t("mini.team")||""}</span>
        <span class="num">${this._t("mini.p")||"P"}</span>
        <span class="num">${this._t("mini.gd")||"GD"}</span>
        <span class="num">${this._t("mini.pts")||"Pts"}</span>
      </div>
      ${a.map((e,t)=>{const a=s&&(0,d.Kd)(e.team,s);return i.qy`
          <div class="mn-tbl-row ${t%2?"odd":""} ${a?"mine":""}">
            <span class="mn-rank">${e.rank}</span>
            <span class="mn-team">${e.team}</span>
            <span class="num">${e.played}</span>
            <span class="num">${e.gd>0?"+"+e.gd:e.gd??""}</span>
            <span class="num pts">${e.points??""}</span>
          </div>`})}`}_renderForm(e,t){const a=this._config.my_team||e.team_name||"",s=this._config.my_team?null:e.team_id,n=(0,d.Eb)(e,{name:a,id:s},this._config.max_matches??10);return n?i.qy`
      <div class="mn-form">
        <span class="mn-form-team">${a}</span>
        <span class="mn-form-dots">${n.results.map(e=>i.qy`<span class="mn-fd ${e.toLowerCase()}">${this._t("form."+e)}</span>`)}</span>
        <span class="mn-form-sum">${n.w}${this._t("form.W")} ${n.d}${this._t("form.D")} ${n.l}${this._t("form.L")}</span>
      </div>`:null}_row(e,t,a,s){const n=this._matchDate(e),r=this._matchDateValue(e),o=(n?a.format(n):r?r.split(" ")[0]:"").replace(/\.$/,""),l={name:this._config.my_team||"",id:null},c=l.name&&(0,d.YZ)(e,"home",l),p=l.name&&(0,d.YZ)(e,"away",l);return i.qy`
      <div class="sch-row ${t%2?"odd":""}">
        <span class="sch-date">${o}</span>
        <span class="sch-time ${e.time_tbd?"tbd":""} ${"in"===e.state?"live":""}">${this._timeLabel(e)}</span>
        <span class="sch-home ${c?"mine":""}">${e.home_team}</span>
        <span class="sch-sep">-</span>
        <span class="sch-away ${p?"mine":""}">${e.away_team}</span>
        ${s?i.qy`<span class="sch-comp">${this._compTag(e)}</span>`:""}
      </div>
    `}_timeLabel(e){if("in"===e.state)return this._t("status.live");if("post"===e.state){const t=e.home_score,a=e.away_score;return null!=t&&null!=a&&"N/A"!==t&&"N/A"!==a?`${t}-${a}`:this._t("status.full_time")}return e.time_tbd?this._t("generic.unknown"):this._matchTime(e)||this._t("generic.unknown")}_compTag(e){const t=e=>e&&"N/A"!==e?e:"";return t(e.league_abbrev)||t(e.league_abbreviation)||t(e.competition_abbreviation)||(t(e.league_name)?e.league_name.charAt(0).toUpperCase():"")}static get styles(){return[n.G,l.M,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);border-radius:16px;overflow:hidden;padding:0;}.sch{position:relative;z-index:1;padding:6px 0;font-variant-numeric:tabular-nums;font-size:var(--sch-fs,14px);}.sch-title{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);padding:8px 14px 6px;}.sch-row{display:grid;grid-template-columns:minmax(72px,auto) minmax(52px,auto) 1fr auto 1fr auto;align-items:baseline;gap:10px;padding:var(--sch-pad,7px) 14px;font-size:var(--sch-fs,14px);}.sch.no-comp .sch-row{grid-template-columns:minmax(72px,auto) minmax(52px,auto) 1fr auto 1fr;}.sch-row.odd{background:var(--cl-surface,rgba(255,255,255,0.04));}.sch-date{color:var(--cl-text-2,#94a3b8);white-space:nowrap;}.sch-time{color:var(--cl-text-2,#94a3b8);white-space:nowrap;}.sch-time.tbd{font-style:italic;opacity:0.75;}.sch-time.live{color:var(--cl-live,#ef4444);font-weight:700;}.sch-home{text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.sch-away{text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.sch-sep{color:var(--cl-text-2,#94a3b8);}.sch-home.mine,.sch-away.mine{font-weight:800;}.sch-comp{color:var(--cl-text-2,#94a3b8);text-align:right;white-space:nowrap;min-width:14px;}.mn-next{padding:10px 14px 12px;text-align:center;}.mn-teams{font-size:calc(var(--sch-fs,14px) + 3px);font-weight:700;}.mn-dash{color:var(--cl-text-2,#94a3b8);font-weight:400;}.mn-when{margin-top:4px;color:var(--cl-text-2,#94a3b8);}.mn-when .mn-live{color:var(--cl-live,#ef4444);font-weight:700;}.mn-tbl-head,.mn-tbl-row{display:grid;grid-template-columns:26px 1fr 30px 40px 34px;gap:8px;align-items:baseline;padding:var(--sch-pad,6px) 14px;}.mn-tbl-head{font-size:10px;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-text-2,#94a3b8);padding-bottom:4px;}.mn-tbl-row.odd{background:var(--cl-surface,rgba(255,255,255,0.04));}.mn-tbl-row.mine{font-weight:800;}.mn-rank{color:var(--cl-text-2,#94a3b8);text-align:center;}.mn-team{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.num{text-align:right;color:var(--cl-text-2,#94a3b8);}.num.pts{color:var(--cl-text,#f8fafc);font-weight:700;}.mn-form{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:12px 14px;}.mn-form-team{font-weight:700;}.mn-form-dots{display:inline-flex;gap:4px;}.mn-fd{width:18px;height:18px;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#fff;}.mn-fd.w{background:var(--cl-win,#22c55e);}.mn-fd.d{background:var(--cl-draw,#94a3b8);}.mn-fd.l{background:var(--cl-loss,#ef4444);}.mn-form-sum{margin-left:auto;color:var(--cl-text-2,#94a3b8);font-size:11px;font-weight:700;}`]}}customElements.get("soccer-live-schedule")||customElements.define("soccer-live-schedule",h)},4379(e,t,a){a.r(t);var i=a(3957),s=a(2007),n=a(2738),r=a(5186);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select,input[type="number"]{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}select:focus,input:focus{outline:2px solid var(--primary-color,#03a9f4);outline-offset:-1px;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}`}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_scorers")||e.includes("soccer_live_scorers")).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){const t=e.target.value;t!==this._config.entity&&this._fire({...this._config,entity:t})}_selectChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=e.target.value;this._config[t]!==a&&this._fire({...this._config,[t]:a})}_numberChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=parseInt(e.target.value,10);isNaN(a)||this._config[t]===a||this._fire({...this._config,[t]:a})}_switchChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=e.target.checked;this._config[t]!==a&&this._fire({...this._config,[t]:a})}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("editor.ranking")}</label>
          <select data-config-value="ranking" @change=${this._selectChanged}>
            ${[["goals",this._t("card.scorers")],["assists",this._t("card.assists")]].map(([e,t])=>i.qy`<option value="${e}" ?selected=${(this._config.ranking||"goals")===e}>${t}</option>`)}
          </select>
        </div>

        <div>
          <label class="field-label">${this._t("editor.max_items")}</label>
          <input type="number" min="1" max="25"
            .value=${this._config.max_items??10}
            data-config-value="max_items"
            @change=${this._numberChanged}>
        </div>

        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}>
          </ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,n.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>

        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-scorers-editor")||customElements.define("soccer-live-scorers-editor",o)},4929(e,t,a){var i=a(3957),s=a(5186),n=a(8429),r=a(5247),o=a(4522),l=a(1979),c=a(226),d=a(7554),p=a(1448);const h=e=>{const t=parseInt(e,10);return Number.isFinite(t)?t:0},u={goals:"goals",assists:"assists",yellow_cards:"yellow_cards",red_cards:"red_cards"};class g extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e),this._isLoading=!0}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}updated(e){if(e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];e&&"unavailable"!==e.state&&(this._isLoading=!1,r.Q.set(this._config.entity,e.attributes))}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return(0,l.bY)(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=r.Q.get(e);if(!t?.data?.scorers)return(0,o.PA)("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else{if("Not available"===t.state)return(0,o.QG)("📊",this._t("ui.endpoint_unsupported"),this._t("ui.endpoint_unsupported_hint"),"");a=t.attributes}else{const t=r.Q.get(e);if(!t?.data?.scorers)return(0,o.PA)("⚠️",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}return this._isLoading&&!a?(0,l.bY)(this._t("ui.loading")):this._renderCard(a||{})}_renderCard(e){const t=["assists","yellow_cards","red_cards"].includes(this._config.ranking)?this._config.ranking:"goals",a=this._config.max_items??10,n=!0===this._config.hide_header,r=function(e,t="goals"){const a=function(e){return u[e]||u.goals}(t),i=(Array.isArray(e)?e:[]).map(e=>({...e,value:h(e[a])}));return"goals"===t?i:(i.sort((e,t)=>t.value-e.value),i.map((e,t)=>({...e,rank:t+1})))}("assists"===t?e.assists||[]:e.scorers||[],t).slice(0,a);return r.length?i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
        ${n?"":(0,c.t7)({logo:e.league_logo,title:(0,p.VR)(e.league_name,(0,s.$c)(this.hass,this._config))||this._t("assists"===t?"card.assists":"card.scorers"),badge:(0,c.N)(`${r.length}`,"neutral"),fallbackIcon:"🥇"})}
        <div class="slc-list">
          ${r.map((e,t)=>i.qy`
            <div class="slc-row ${t%2==0?"even":""}">
              <span class="slc-rank">${e.rank??t+1}</span>
              ${e.headshot?i.qy`<img class="slc-headshot" src="${e.headshot}" alt="" @error="${e=>e.target.style.display="none"}">`:i.qy`<div class="slc-headshot placeholder"></div>`}
              <div class="slc-info">
                <span class="slc-name">${e.player||e.short_name||"—"}</span>
                <span class="slc-team">${e.team_name||""}</span>
              </div>
              ${e.team_logo?i.qy`<img class="slc-team-logo" src="${e.team_logo}" alt="" @error="${e=>e.target.style.display="none"}">`:""}
              <span class="slc-goals">${e.value}</span>
            </div>
          `)}
        </div>
        </div>
      </ha-card>
    `:(0,o._$)(e,e=>this._t(e),()=>(0,o.QG)("🥇",this._t("scorers.empty"),"",""))}static getConfigElement(){return document.createElement("soccer-live-scorers-editor")}static getStubConfig(){return{entity:"",max_items:10}}static get styles(){return[n.G,d.M,c.Ng,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);border-radius:20px;overflow:hidden;padding:0;}.slc-list{padding:4px 0;}.slc-row{display:flex;align-items:center;gap:10px;padding:8px 16px;font-size:13px;}.slc-row.even{background:rgba(255,255,255,0.02);}.slc-rank{min-width:20px;text-align:center;font-weight:700;color:var(--cl-text-2,#94a3b8);font-size:12px;}.slc-headshot{width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;background:var(--cl-surface,rgba(255,255,255,0.05));}.slc-headshot.placeholder{background:var(--cl-surface,rgba(255,255,255,0.05));}.slc-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;}.slc-name{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.slc-team{font-size:11px;color:var(--cl-text-2,#94a3b8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.slc-team-logo{width:22px;height:22px;object-fit:contain;flex-shrink:0;}.slc-goals{font-weight:800;font-size:16px;color:var(--cl-accent,#6366f1);min-width:28px;text-align:right;}`]}}customElements.get("soccer-live-scorers")||customElements.define("soccer-live-scorers",g)},6643(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(2007),r=a(2738);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},groups:{type:Array}}}constructor(){super(),this.entities=[],this.groups=[]}static get styles(){return[n.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select,input[type="number"]{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}select:focus,input:focus{outline:2px solid var(--primary-color,#03a9f4);outline-offset:-1px;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}`]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities(),(e.has("_config")||e.has("hass"))&&this._config&&this._config.entity&&this._fetchGroups()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_groupChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.selected_group&&this._fireConfigChanged({...this._config,selected_group:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=parseInt(t.value,10);isNaN(i)||this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_standings")||e.includes("soccer_live_standings")).sort())}_fetchGroups(){const e=this._config&&this._config.entity;if(!this.hass||!e)return void(this.groups=[]);const t=this.hass.states[e];t&&t.attributes&&t.attributes.standings_groups?this.groups=t.attributes.standings_groups.map(e=>e.name):this.groups=[]}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("editor.standings_group")}</label>
          <select @change=${this._groupChanged}>
            <option value="" ?selected=${!this._config.selected_group}>— ${this._t("editor.all_groups")} —</option>
            ${this.groups.map(e=>i.qy`
              <option value="${e}" ?selected=${e===this._config.selected_group}>${e}</option>
            `)}
          </select>
        </div>

        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.show_event_toasts")}</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div>
          <label class="field-label">${this._t("editor.max_teams")}</label>
          <input type="number" min="1" max="50"
            .value=${this._config.max_teams_visible||10}
            data-config-value="max_teams_visible" @change=${this._numberChanged} />
        </div>

        <div>
          <label class="field-label">${this._t("editor.my_team")}</label>
          <input type="text" placeholder="${this._t("editor.my_team_hint")}"
            .value=${this._config.highlight_team||this._config.my_team||""}
            @change=${e=>this._fireConfigChanged({...this._config,highlight_team:e.target.value,my_team:e.target.value})} />
        </div>

        <div class="option">
          <label>${this._t("editor.show_season_totals")}</label>
          <ha-switch .checked=${!1!==this._config.show_stats}
            data-config-value="show_stats" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_goals_per_team")}</label>
          <ha-switch .checked=${!0===this._config.show_goals_for}
            data-config-value="show_goals_for" @change=${this._switchChanged}></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.compact")}</label>
          <ha-switch .checked=${!0===this._config.compact_mode}
            data-config-value="compact_mode" @change=${this._switchChanged}></ha-switch>
        </div>

        ${this._config.compact_mode?i.qy`
          <div>
            <label class="field-label">${this._t("editor.top_n_teams")}</label>
            <input type="number" min="1" max="20"
              .value=${this._config.compact_top||5}
              data-config-value="compact_top" @change=${this._numberChanged} />
          </div>
          <div>
            <label class="field-label">${this._t("editor.bottom_n_teams")}</label>
            <input type="number" min="1" max="10"
              .value=${this._config.compact_bottom||3}
              data-config-value="compact_bottom" @change=${this._numberChanged} />
          </div>
        `:""}
        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,n.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-standings-editor")||customElements.define("soccer-live-standings-editor",o)},9641(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(4522),o=a(1618);const l=(e,t)=>Array.from({length:t-e+1},(t,a)=>e+a),c={serie_a:{match:(e,t)=>"ita.1"===e||t.includes("italian_serie_a"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:"bottom3"},premier_league:{match:(e,t)=>"eng.1"===e||t.includes("english_premier"),champions:[1,2,3,4,5],europa:[6],conference:[7],relegation:"bottom3"},laliga:{match:(e,t)=>"esp.1"===e||t.includes("spanish_la_liga")||t.includes("spanish_laliga"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:"bottom3"},bundesliga:{match:(e,t)=>"ger.1"===e||t.includes("german_bundesliga"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:[17,18]},ligue_1:{match:(e,t)=>"fra.1"===e||t.includes("french_ligue_1"),champions:[1,2,3],europa:[4],conference:[5],relegation:[17,18]},eredivisie:{match:(e,t)=>"ned.1"===e||t.includes("dutch_eredivisie"),champions:[1,2],europa:[3],conference:[4,5],relegation:[17,18]},primeira_liga:{match:(e,t)=>"por.1"===e||t.includes("portuguese_primeira"),champions:[1,2],europa:[3],conference:[4],relegation:[17,18]},ucl_league_phase:{match:(e,t)=>"uefa.champions"===e||t.includes("uefa_champions_league"),champions:l(1,8),europa:l(9,24),conference:[],relegation:"bottom12"},uel_league_phase:{match:(e,t)=>"uefa.europa"===e||t.includes("uefa_europa_league"),champions:l(1,8),europa:l(9,24),conference:[],relegation:"bottom12"},uecl_league_phase:{match:(e,t)=>"uefa.europa.conf"===e||t.includes("uefa_conference"),champions:l(1,8),europa:l(9,24),conference:[],relegation:"bottom12"},world_cup:{match:(e,t)=>"fifa.world"===e||t.includes("fifa_world_cup")||t.includes("world_cup"),champions:[1,2],europa:[3],conference:[],relegation:"bottom1",kind:"cup_group",hero:{icon:"🏆",accent:"world_cup"},labels:{champions:"zone.qualified",europa:"zone.third_place_playoff",conference:null,relegation:"zone.eliminated"}},uefa_euro:{match:(e,t)=>"uefa.euro"===e||t.includes("uefa_euro")||t.includes("european_championship"),champions:[1,2],europa:[3],conference:[],relegation:"bottom1",kind:"cup_group",hero:{icon:"⭐",accent:"uefa_euro"},labels:{champions:"zone.qualified",europa:"zone.third_place_playoff",conference:null,relegation:"zone.eliminated"}},copa_america:{match:(e,t)=>"conmebol.america"===e||t.includes("copa_america")||t.includes("conmebol_america"),champions:[1,2],europa:[],conference:[],relegation:"bottom2",kind:"cup_group",hero:{icon:"🏆",accent:"copa_america"},labels:{champions:"zone.qualified",europa:null,conference:null,relegation:"zone.eliminated"}}};class d extends i.WF{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean},selectedGroup:{type:String},showEventToasts:{type:Boolean},highlightTeam:{type:String},showStats:{type:Boolean},showGoalsFor:{type:Boolean},compactMode:{type:Boolean},compactTop:{type:Number},compactBottom:{type:Number},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e),this.maxTeamsVisible=e.max_teams_visible?e.max_teams_visible:10,this.hideHeader=e.hide_header||!1,this.selectedGroup=e.selected_group||"",this.showEventToasts=!0===e.show_event_toasts,this.highlightTeam=(e.highlight_team||e.my_team||"").toLowerCase(),this.showStats=!1!==e.show_stats,this.showGoalsFor=!0===e.show_goals_for,this.compactMode=!0===e.compact_mode,this.compactTop=parseInt(e.compact_top)||5,this.compactBottom=parseInt(e.compact_bottom)||3,this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._toastTimer&&clearTimeout(this._toastTimer),this._eventSubscriptionGeneration=(this._eventSubscriptionGeneration||0)+1,this._eventSubscriptionPromise=null,this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach(e=>{"function"==typeof e&&e()}),this._eventSubscriptions=[])}updated(e){e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents()}_subscribeToEvents(){if(!this.hass||!this.hass.connection)return;if(this._eventSubscriptionPromise||this._eventSubscriptions?.length)return;const e=this._eventSubscriptionGeneration||0,t=this._handleSoccerLiveEvent.bind(this),a=Promise.allSettled(["soccer_live_goal","soccer_live_yellow_card","soccer_live_red_card","soccer_live_match_finished"].map(e=>this.hass.connection.subscribeEvents(t,e)));this._eventSubscriptionPromise=a,a.then(t=>{const a=t.filter(e=>"fulfilled"===e.status&&"function"==typeof e.value).map(e=>e.value);if((this._eventSubscriptionGeneration||0)!==e||!this.isConnected)return void a.forEach(e=>e());const i=t.filter(e=>"rejected"===e.status);i.length>0?(a.forEach(e=>e()),this._eventSubscriptions=[],i.forEach(e=>console.warn("Soccer Live Standings subscription failed:",e.reason))):this._eventSubscriptions=a}).finally(()=>{this._eventSubscriptionPromise===a&&(this._eventSubscriptionPromise=null)})}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this._config.entity||"",a=e.competition_code;if(!a)return!1;const i=a.replace(/\./g,"_").toLowerCase();return t.toLowerCase().includes(i)}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;this._eventBelongsToThisCard(a)&&this.showEventToasts&&this._showEventToast(t,a)}_showEventToast(e,t){let a="",i="goal";"soccer_live_goal"===e?(a=`${this._t("event.goal").toUpperCase()}! ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,i="goal"):"soccer_live_yellow_card"===e?(a=`🟨 ${this._t("event.yellow_card")} · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="yellow"):"soccer_live_red_card"===e?(a=`🟥 ${this._t("event.red_card")} · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="red"):"soccer_live_match_finished"===e&&(a=`${this._t("status.finished")}! ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,i="finished"),a&&(this._toastMessage=a,this._toastVariant=i,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this._toastVisible=!1,this.requestUpdate()},4e3),this.requestUpdate())}getCardSize(){return 5}static getConfigElement(){return document.createElement("soccer-live-standings-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_standings_",max_teams_visible:10,hide_header:!1,selected_group:"",show_event_toasts:!1}}_getZoneConfig(){if(this._config.zone_config)return this._config.zone_config;if(this._config.zone_preset&&c[this._config.zone_preset])return c[this._config.zone_preset];return this._inferPresetFromEntity()||{champions:[],europa:[],conference:[],relegation:null}}_getZoneLabels(){const e=this._getZoneConfig().labels||{};return{champions:void 0!==e.champions?e.champions:"zone.champions",europa:void 0!==e.europa?e.europa:"zone.europa",conference:void 0!==e.conference?e.conference:"zone.conference",relegation:void 0!==e.relegation?e.relegation:"zone.relegation"}}_hasZonePositions(e){return!!e&&(Array.isArray(e)?e.length>0:"string"==typeof e&&/^bottom\d+$/.test(e))}_inferPresetFromEntity(){const e=(this._config.entity||"").toLowerCase(),t=this.hass&&this._config.entity?this.hass.states[this._config.entity]:null,a=t&&t.attributes?String(t.attributes.competition_code||"").toLowerCase():"";for(const[,t]of Object.entries(c))if(t.match&&t.match(a,e))return t;return null}_positionInZone(e,t,a){if(!a)return!1;const i=String(a).match(/^bottom(\d+)$/);if(i){const a=parseInt(i[1],10);return t&&e>t-a}return!!Array.isArray(a)&&a.includes(Number(e))}_translatePhase(e){return e?{"regular-season":this._t("phase.regular_season"),"regular season":this._t("phase.regular_season"),"group-stage":this._t("phase.group_stage"),"group stage":this._t("phase.group_stage"),playoffs:this._t("phase.playoffs")}[String(e).toLowerCase()]||e:""}_shouldShowPhase(e){return!!e&&("regular-season"!==String(e).toLowerCase()&&!/\d{4}/.test(e))}_isCupGroupStage(){const e=this._getZoneConfig();return e&&"cup_group"===e.kind}_groupHasNoMatches(e){if(!e||!e.length)return!1;const t=e=>{if(null==e||""===e)return 0;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?0:t};return e.every(e=>t(e.wins)+t(e.draws)+t(e.losses)===0)}_zoneClass(e,t,a){if(a&&a.zone_color)return"zone-espn";const i=this._getZoneConfig();return this._positionInZone(e,t,i.champions)?1!==e||this._isCupGroupStage()?"zone-cl":"zone-cl rank-first":this._positionInZone(e,t,i.europa)?"zone-el":this._positionInZone(e,t,i.conference)?"zone-conf":this._positionInZone(e,t,i.relegation)?"zone-rel":"zone-default"}_sortStandings(e,t){let a=(e||[]).filter(e=>null!=e.rank);return t.includes("MLS")?(a=a.slice().sort((e,t)=>t.points!==e.points?t.points-e.points:t.goal_difference!==e.goal_difference?t.goal_difference-e.goal_difference:t.goals_for-e.goals_for),a.forEach((e,t)=>{e.rank=t+1})):a=a.slice().sort((e,t)=>e.rank-t.rank),a}_currentGroup(e){return e.find(e=>e.name===this.selectedGroup)||e[0]}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this._config.entity,t=this.hass.states[e];if(!t)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;if("race"===this._config.card_type)return this._renderRace(t);const a=t.attributes.season||"",s=t.attributes.league_abbreviation&&"N/A"!==t.attributes.league_abbreviation?t.attributes.league_abbreviation:null,o=s&&t.attributes.league_name?a.replace(t.attributes.league_name,s).trim():a,l=t.attributes.standings_groups||[],c=!this.selectedGroup&&l.length>1,d=this._currentGroup(l),p=this._sortStandings(d?d.standings:[],o),h=p.length;if(!h){const e=(0,r.u)(t.attributes.sync_status,e=>this._t(e));if(e)return e}const u=48*Math.min(this.maxTeamsVisible,h)+50,g=this.highlightTeam?(p.find(e=>e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam))||{}).rank:null,m=Math.round(p.reduce((e,t)=>e+(parseInt(t.games_played)||0),0)/2),f=p.reduce((e,t)=>e+(parseInt(t.goals_for)||0),0),_=!(t.attributes.standings_groups||[]).some(e=>(e.standings||[]).some(e=>(parseInt(e.games_played)||0)>0))&&h>0&&p.every(e=>0===parseInt(e.wins??"0")&&0===parseInt(e.draws??"0")&&0===parseInt(e.losses??"0"));return i.qy`
      <ha-card>
        ${this.showEventToasts&&this._toastVisible?i.qy`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        ${this.hideHeader?"":this._renderHeader(t,o,d,l,c,g)}

        ${_?i.qy`
          <div class="preseason-banner">
            <span class="preseason-icon">🗓️</span>
            <span>${this._t("standings.preseason",{season:o||""})}</span>
          </div>
        `:""}

        ${c?this._renderGroupsGrid(l,o):i.qy`
            <div class="table-wrap" style="max-height: ${u}px;">
              ${this._renderFullTable(p,h)}
            </div>
          `}

        ${this.showStats&&m>0?i.qy`
          <div class="season-stats">
            <span>${m} ${this._t("standings.stats").split("·")[0].trim()}</span>
            <span class="stats-dot">·</span>
            <span>${f} ${this._t("standings.goals")}</span>
          </div>
        `:""}

        ${this._renderLegend(d)}
      </ha-card>
    `}_renderRace(e){const t=this._config.highlight_team||this._config.my_team||"",a=(0,o.LV)(e.attributes,t);if(!a)return(0,r.u)(e.attributes.sync_status,e=>this._t(e))||i.qy`<ha-card class="empty">${this._t("ui.no_standings_data")}</ha-card>`;const s=a.tracked?a.rows.filter(e=>Math.abs(Number(e.rank)-Number(a.tracked.rank))<=2):a.rows.slice(0,6),n=Math.max(...s.map(e=>e.maximum),1),l=a.trajectory.slice(-12);return i.qy`<ha-card class="race-card">
      <header class="race-head"><span>🏁</span><div><small>${this._t("card.race")}</small><h2>${e.attributes.league_name||a.group}</h2></div><b>${e.attributes.season||""}</b></header>
      ${a.tracked?i.qy`<section class="race-focus">
        ${a.tracked.team_logo?i.qy`<img src=${a.tracked.team_logo} alt="">`:""}
        <div><strong>${a.tracked.team_name}</strong><small>#${a.tracked.rank} · ${a.tracked.points} ${this._t("col.points")}</small></div>
        <span>${a.tracked.gapLeader?`−${a.tracked.gapLeader}`:this._t("race.leader")}</span>
      </section>`:""}
      <div class="race-list">${s.map(e=>i.qy`<div class=${e===a.tracked?"tracked":""}>
        <b>${e.rank}</b><span>${e.team_name}<i style="width:${Math.max(3,e.points/n*100)}%"></i></span>
        <strong>${e.points}</strong><small>${e.maximum} ${this._t("race.maximum")}</small>
      </div>`)}</div>
      ${l.length>1?i.qy`<section class="trajectory"><small>${this._t("race.trajectory")}</small><div>
        ${l.map(e=>i.qy`<span title="${e.date||""}: #${e.rank}"><i style="height:${Math.max(12,100-(e.rank-1)/Math.max(1,a.rows.length-1)*88)}%"></i><b>${e.rank}</b></span>`)}
      </div></section>`:""}
      <footer>${this._t("race.remaining",{n:a.tracked?.remaining??a.rows[0]?.remaining??0})}</footer>
    </ha-card>`}_renderFullTable(e,t){let a=e,s=null;if(this.compactMode&&t>this.compactTop+this.compactBottom){const i=e.slice(0,this.compactTop),n=e.slice(t-this.compactBottom),r=t-this.compactTop-this.compactBottom,o=this.highlightTeam?e.slice(this.compactTop,t-this.compactBottom).find(e=>e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam)):null;a=[...i,...o?[o]:[],{_separator:!0,hiddenCount:r},...n],s=!0}return i.qy`
      <table class="standings-table">
        <thead>
          <tr>
            <th>${this._t("col.pos")}</th>
            <th class="team-col">${this._t("col.team")}</th>
            <th>${this._t("col.played")}</th>
            <th>${this._t("col.wins")}</th>
            <th>${this._t("col.draws")}</th>
            <th>${this._t("col.losses")}</th>
            <th>${this._t("col.gd")}</th>
            <th>${this._t("col.points")}</th>
          </tr>
        </thead>
        <tbody>
          ${a.map(e=>{if(e._separator)return i.qy`
              <tr class="separator-row">
                <td colspan="8">
                  <span class="separator-dots">· · · ${e.hiddenCount} ${this._t("standings.compact_hidden")} · · ·</span>
                </td>
              </tr>`;const a=this.highlightTeam&&e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam),s=e=>{if(null==e||""===e)return null;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?null:t},n=s(e.wins),r=s(e.draws),o=s(e.losses),l=s(e.goal_difference),c=null!==n&&null!==r&&null!==o?n+r+o:null,d=null===l?"":l>0?"gd-pos":l<0?"gd-neg":"",p=null===l?"-":l>0?`+${l}`:`${l}`;return i.qy`
              <tr class="${this._zoneClass(e.rank,t,e)} ${a?"highlighted-team":""}">
                <td style="${e.zone_color?`border-left:3px solid ${e.zone_color};padding-left:11px`:""}"><div class="rank-cell"><div class="rank-num">${e.rank}</div></div></td>
                <td class="team-cell">
                  <img src="${e.team_logo}" alt="${e.team_name}" />
                  <div class="tname-group">
                    <span class="tname">${e.team_name}</span>
                    ${this.showGoalsFor&&e.goals_for&&parseInt(e.goals_for)>=0?i.qy`<span class="goals-for-hint">⚽ ${e.goals_for}</span>`:""}
                  </div>
                </td>
                <td>${c??"-"}</td>
                <td>${n??"-"}</td>
                <td>${r??"-"}</td>
                <td>${o??"-"}</td>
                <td class="${d}">${p}</td>
                <td class="points-cell">${e.points??"-"}</td>
              </tr>
            `})}
        </tbody>
      </table>
    `}_renderCompactTable(e,t){return i.qy`
      <table class="standings-table compact">
        <thead>
          <tr>
            <th>${this._t("col.pos")}</th>
            <th class="team-col">${this._t("col.team")}</th>
            <th>${this._t("col.gd")}</th>
            <th>${this._t("col.points")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(e=>{const a=(e=>{if(null==e||""===e)return null;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?null:t})(e.goal_difference),s=null===a?"":a>0?"gd-pos":a<0?"gd-neg":"",n=null===a?"-":a>0?`+${a}`:`${a}`;return i.qy`
              <tr class="${this._zoneClass(e.rank,t,e)}">
                <td style="${e.zone_color?`border-left:3px solid ${e.zone_color};padding-left:11px`:""}"><div class="rank-cell"><div class="rank-num">${e.rank}</div></div></td>
                <td class="team-cell">
                  <img src="${e.team_logo}" alt="${e.team_name}" />
                  <span class="tname">${e.team_name}</span>
                </td>
                <td class="${s}">${n}</td>
                <td class="points-cell">${e.points??"-"}</td>
              </tr>
            `})}
        </tbody>
      </table>
    `}_renderHeader(e,t,a,s,n,r){const o=this._getZoneConfig(),l=this._isCupGroupStage(),c=o&&o.hero?o.hero:null,d=e.attributes.league_abbreviation&&"N/A"!==e.attributes.league_abbreviation?e.attributes.league_abbreviation:null,p=d&&t?t.replace(d,"").trim():t&&"n/a"!==t.toLowerCase()?t:"",h=n?this._t("phase.group_stage"):this._shouldShowPhase(a&&a.name)?this._translatePhase(a.name):"",u=[];d&&u.push(this._t("card.standings")),p&&u.push(p),h&&u.push(h);let g=0;if(n)for(const e of s)g+=(e.standings||[]).filter(e=>null!=e.rank).length;return i.qy`
      <div class="top-bar ${l?"top-bar-cup":""} ${c?`accent-${c.accent}`:""}">
        ${c&&c.icon?i.qy`<div class="hero-icon">${c.icon}</div>`:""}
        <div class="league-title">
          <h2>${d||e.state}</h2>
          <div class="sub">${u.join(" · ")}</div>
        </div>
        ${r?i.qy`<span class="highlight-pos-badge">${r}e</span>`:""}
        ${n&&l?i.qy`
          <div class="hero-badges">
            <span class="badge">${s.length} ${this._t("hero.groups")}</span>
            <span class="badge">${g} ${this._t("hero.teams")}</span>
          </div>
        `:""}
      </div>
    `}_renderLegend(e){const t=new Map;for(const a of e&&e.standings||[])a.zone_color&&a.zone_label&&!t.has(a.zone_label)&&t.set(a.zone_label,{color:a.zone_color,abbrev:a.zone_abbrev});if(t.size)return i.qy`
        <div class="legend">
          ${[...t.entries()].map(([e,t])=>i.qy`
            <div class="legend-item" title="${e}">
              <span class="legend-dot" style="background:${t.color};"></span>${t.abbrev||e}
            </div>
          `)}
        </div>
      `;const a=this._getZoneConfig(),s=this._getZoneLabels(),n=[{key:"champions",dot:"cl",positions:a.champions,label:s.champions},{key:"europa",dot:"el",positions:a.europa,label:s.europa},{key:"conference",dot:"conf",positions:a.conference,label:s.conference},{key:"relegation",dot:"rel",positions:a.relegation,label:s.relegation}].filter(e=>e.label&&this._hasZonePositions(e.positions));return n.length?i.qy`
      <div class="legend">
        ${n.map(e=>i.qy`
          <div class="legend-item">
            <span class="legend-dot ${e.dot}"></span>${this._t(e.label)}
          </div>
        `)}
      </div>
    `:""}_renderGroupsGrid(e,t){const a=this._isCupGroupStage();return i.qy`
      <div class="groups-grid ${a?"groups-grid-cup":""}">
        ${e.map(e=>{const a=this._sortStandings(e.standings||[],t),s=this._groupHasNoMatches(a);return i.qy`
            <div class="group-cell ${s?"group-cell-pending":""}">
              <div class="group-title">
                <span>${e.name}</span>
                ${s?i.qy`<span class="group-pending-badge">${this._t("hero.not_started")}</span>`:""}
              </div>
              ${this._renderCompactTable(a,a.length)}
            </div>
          `})}
      </div>
    `}static get styles(){return[n.G,i.AH`ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;background:var(--cl-bg);color:var(--cl-text);box-shadow:0 4px 24px var(--cl-shadow);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.top-bar{position:relative;padding:20px 18px;background:linear-gradient(135deg,rgba(var(--cl-accent-rgb),0.15),rgba(var(--cl-accent-2-rgb),0.10) 60%,transparent);border-bottom:1px solid var(--cl-divider);overflow:hidden;}.top-bar::before{content:'⚽';position:absolute;right:-10px;top:-10px;font-size:90px;opacity:0.06;transform:rotate(15deg);}.top-bar-cup{padding:28px 22px 22px;background:radial-gradient(circle at 20% 20%,rgba(99,102,241,0.30),transparent 55%),radial-gradient(circle at 80% 60%,rgba(var(--cl-accent-2-rgb),0.20),transparent 50%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0));}.top-bar-cup::before{display:none;}.top-bar-cup .hero-icon{position:absolute;right:14px;top:14px;font-size:56px;line-height:1;opacity:0.95;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.45));}.top-bar-cup h2{font-size:24px;letter-spacing:-0.04em;}.top-bar-cup .sub{font-size:13px;margin-top:6px;letter-spacing:0.02em;}.top-bar.accent-world_cup{background:radial-gradient(circle at 20% 20%,rgba(251,191,36,0.22),transparent 55%),radial-gradient(circle at 80% 60%,rgba(99,102,241,0.18),transparent 55%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0));}.top-bar.accent-uefa_euro{background:radial-gradient(circle at 20% 20%,rgba(59,130,246,0.30),transparent 55%),radial-gradient(circle at 80% 60%,rgba(251,191,36,0.18),transparent 55%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0));}.top-bar.accent-copa_america{background:radial-gradient(circle at 20% 20%,rgba(16,185,129,0.25),transparent 55%),radial-gradient(circle at 80% 60%,rgba(245,158,11,0.20),transparent 55%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0));}.hero-badges{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;}.hero-badges .badge{font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.12);color:var(--cl-text);backdrop-filter:blur(8px);}.top-bar h2{margin:0;font-size:20px;font-weight:900;letter-spacing:-0.03em;background:linear-gradient(135deg,var(--cl-text),var(--cl-accent));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}.top-bar .sub{color:var(--cl-text-2);font-size:12px;margin-top:4px;font-weight:500;}.table-wrap{overflow-y:auto;}.standings-table{width:100%;border-collapse:separate;border-spacing:0;font-size:13px;}.standings-table thead th{position:sticky;top:0;background:var(--cl-card-2);backdrop-filter:blur(8px);padding:10px 4px;text-align:center;font-size:10px;font-weight:800;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid var(--cl-divider);z-index:1;}.standings-table thead th:first-child{padding-left:14px;text-align:left;}.standings-table thead th:last-child{padding-right:14px;}.standings-table thead th.team-col{text-align:left;}.standings-table tbody tr{transition:all 0.2s cubic-bezier(0.4,0,0.2,1);}.standings-table tbody tr:hover{background:var(--cl-card-2);}.standings-table tbody td{padding:10px 4px;text-align:center;border-bottom:1px solid var(--cl-divider);font-variant-numeric:tabular-nums;font-weight:600;color:var(--cl-text);}.standings-table tbody tr:last-child td{border-bottom:none;}.preseason-banner{display:flex;align-items:center;gap:10px;margin:0 14px 4px;padding:10px 14px;background:rgba(var(--cl-accent-rgb),0.08);border:1px solid rgba(99,102,241,0.18);border-radius:10px;font-size:12px;font-weight:600;color:var(--cl-text-2);}.preseason-icon{font-size:16px;}.standings-table tbody td:first-child{padding-left:14px;text-align:left;}.highlight-pos-badge{flex-shrink:0;background:linear-gradient(135deg,var(--cl-accent),var(--cl-accent-2));color:white;font-size:12px;font-weight:900;padding:4px 10px;border-radius:999px;box-shadow:0 2px 10px rgba(var(--cl-accent-rgb),0.4);letter-spacing:-0.01em;}.season-stats{display:flex;align-items:center;gap:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--cl-text-2);border-top:1px solid var(--cl-divider);justify-content:center;}.stats-dot{opacity:0.5;}.separator-row td{padding:6px 0;text-align:center;border:none;}.separator-dots{font-size:10px;font-weight:700;color:var(--cl-text-2);letter-spacing:0.1em;opacity:0.6;}.tname-group{display:flex;flex-direction:column;min-width:0;overflow:hidden;}.goals-for-hint{font-size:9px;font-weight:600;color:var(--cl-text-2);opacity:0.7;margin-top:1px;}.highlighted-team{background:rgba(var(--cl-accent-rgb),0.07);}.highlighted-team .tname{font-weight:800;color:var(--cl-text);}.highlighted-team .points-cell{color:var(--cl-accent);font-weight:900;}.zone-cl td:first-child{border-left:3px solid var(--cl-cl);padding-left:11px;}.zone-el td:first-child{border-left:3px solid var(--cl-el);padding-left:11px;}.zone-conf td:first-child{border-left:3px solid var(--cl-conf);padding-left:11px;}.zone-rel td:first-child{border-left:3px solid var(--cl-rel);padding-left:11px;}.zone-espn td:first-child{border-left:3px solid var(--cl-zone-espn);padding-left:11px;}.standings-table tbody td:last-child{padding-right:14px;}.rank-cell{display:flex;align-items:center;gap:6px;font-weight:800;}.rank-num{width:24px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;}.zone-cl .rank-num{background:linear-gradient(135deg,var(--cl-cl),#4f46e5);color:white;box-shadow:0 2px 12px rgba(var(--cl-accent-rgb),0.4);}.zone-cl.rank-first .rank-num{background:linear-gradient(135deg,var(--cl-gold),#d97706);color:#1f1410;box-shadow:0 2px 16px var(--cl-gold-glow);animation:gold-shimmer 3s ease-in-out infinite;}@keyframes gold-shimmer{0%,100%{box-shadow:0 2px 16px var(--cl-gold-glow);}50%{box-shadow:0 2px 24px var(--cl-gold-glow),0 0 32px var(--cl-gold-glow);}}.zone-el .rank-num{background:linear-gradient(135deg,var(--cl-el),#ea580c);color:white;box-shadow:0 2px 12px rgba(249,115,22,0.4);}.zone-rel .rank-num{background:linear-gradient(135deg,var(--cl-rel),#b91c1c);color:white;box-shadow:0 2px 12px rgba(239,68,68,0.4);}.zone-conf .rank-num{background:linear-gradient(135deg,var(--cl-conf),#7e22ce);color:white;box-shadow:0 2px 12px rgba(168,85,247,0.4);}.zone-default .rank-num{background:var(--cl-card-2);color:var(--cl-text-2);}.team-cell{display:flex;align-items:center;gap:10px;text-align:left !important;}.team-cell img{width:24px;height:24px;object-fit:contain;flex-shrink:0;}.team-cell .tname{font-weight:700;font-size:13px;letter-spacing:-0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.points-cell{font-weight:900 !important;font-size:14px !important;}.gd-pos{color:var(--cl-green);font-weight:800 !important;}.gd-neg{color:var(--cl-live);font-weight:800 !important;}.groups-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;padding:12px;}.group-cell{background:var(--cl-card-2);border:1px solid var(--cl-divider);border-radius:14px;overflow:hidden;display:flex;flex-direction:column;}.group-title{padding:10px 14px;font-size:11px;font-weight:900;letter-spacing:0.12em;text-transform:uppercase;color:var(--cl-text);background:linear-gradient(135deg,rgba(var(--cl-accent-rgb),0.12),rgba(236,72,153,0.06));border-bottom:1px solid var(--cl-divider);display:flex;align-items:center;justify-content:space-between;gap:8px;}.group-pending-badge{font-size:9px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;padding:2px 7px;border-radius:999px;background:rgba(255,255,255,0.08);color:var(--cl-text-2);border:1px solid var(--cl-divider);}.groups-grid-cup .group-cell{border-left:3px solid var(--cl-accent);}.groups-grid-cup .group-cell-pending{border-left-color:var(--cl-divider);opacity:0.92;}.standings-table.compact{font-size:12px;}.standings-table.compact thead th{padding:8px 4px;font-size:9px;letter-spacing:0.08em;}.standings-table.compact tbody td{padding:7px 4px;font-size:12px;}.standings-table.compact .rank-num{width:20px;height:20px;font-size:10px;border-radius:6px;}.standings-table.compact .team-cell{gap:7px;}.standings-table.compact .team-cell img{width:18px;height:18px;}.standings-table.compact .team-cell .tname{font-size:12px;font-weight:700;}.standings-table.compact .points-cell{font-size:13px !important;}.legend{display:flex;flex-wrap:wrap;gap:12px;padding:12px 16px;border-top:1px solid var(--cl-divider);background:var(--cl-card-2);}.legend-item{display:flex;align-items:center;gap:6px;font-size:10px;color:var(--cl-text-2);font-weight:700;letter-spacing:0.04em;}.legend-dot{display:inline-block;flex-shrink:0;width:10px;height:10px;border-radius:3px;}.legend-dot.cl{background:linear-gradient(135deg,var(--cl-cl),#4f46e5);}.legend-dot.el{background:linear-gradient(135deg,var(--cl-el),#ea580c);}.legend-dot.rel{background:linear-gradient(135deg,var(--cl-rel),#b91c1c);}.legend-dot.conf{background:linear-gradient(135deg,var(--cl-conf),#7e22ce);}.event-toast{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:var(--cl-toast-bg);color:#ffffff;padding:10px 18px;border-radius:14px;font-size:13px;font-weight:800;z-index:100;animation:toast-bounce 4s cubic-bezier(0.16,1,0.3,1) forwards;pointer-events:none;max-width:90%;text-align:center;letter-spacing:-0.01em;text-shadow:0 1px 2px rgba(0,0,0,0.8);}.event-toast.variant-goal{box-shadow:0 0 0 2px var(--cl-gold),0 0 0 4px rgba(251,191,36,0.3),0 12px 40px rgba(0,0,0,0.7),0 0 60px rgba(251,191,36,0.4);}.event-toast.variant-goal strong{color:var(--cl-gold-text);}.event-toast.variant-yellow{box-shadow:0 0 0 2px #f59e0b,0 0 0 4px rgba(245,158,11,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-yellow strong{color:#fbbf24;}.event-toast.variant-red{box-shadow:0 0 0 2px var(--cl-live),0 0 0 4px rgba(239,68,68,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-red strong{color:#fca5a5;}.event-toast.variant-finished{box-shadow:0 0 0 2px var(--cl-green),0 0 0 4px rgba(16,185,129,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-finished strong{color:#6ee7b7;}@keyframes toast-bounce{0%{opacity:0;transform:translate(-50%,-20px) scale(0.7);}8%{opacity:1;transform:translate(-50%,0) scale(1.08);}14%{transform:translate(-50%,0) scale(1);}90%{opacity:1;transform:translate(-50%,0) scale(1);}100%{opacity:0;transform:translate(-50%,-10px) scale(0.95);}}.race-card{padding:16px;background:var(--cl-bg);color:var(--cl-text)}.race-head{display:flex;align-items:center;gap:9px}.race-head>span{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--cl-accent-soft)}.race-head div{flex:1}.race-head small{color:var(--cl-text-2);font-size:8px;font-weight:800;text-transform:uppercase}.race-head h2{margin:2px 0 0;font-size:16px}.race-head>b{color:var(--cl-text-2);font-size:9px}.race-focus{display:grid;grid-template-columns:42px 1fr auto;align-items:center;gap:9px;margin:13px 0;padding:11px;border:1px solid var(--cl-divider);border-radius:12px;background:var(--cl-surface)}.race-focus img{width:40px;height:40px;object-fit:contain}.race-focus div{display:grid;gap:3px}.race-focus small{color:var(--cl-text-2);font-size:9px}.race-focus>span{color:var(--cl-accent);font-weight:900}.race-list{display:grid}.race-list>div{display:grid;grid-template-columns:22px 1fr 28px 64px;align-items:center;gap:7px;padding:8px 4px;border-bottom:1px solid var(--cl-divider);font-size:10px}.race-list>div.tracked{background:var(--cl-accent-soft);border-radius:8px}.race-list span{display:grid;gap:4px}.race-list i{display:block;height:3px;border-radius:3px;background:linear-gradient(90deg,var(--cl-accent),var(--cl-accent-2))}.race-list strong{text-align:right}.race-list small{color:var(--cl-text-2);text-align:right;font-size:8px}.trajectory{margin-top:12px;padding:10px;border-radius:10px;background:var(--cl-surface)}.trajectory>small{color:var(--cl-text-2);font-size:8px;text-transform:uppercase}.trajectory>div{display:flex;align-items:end;gap:4px;height:64px;margin-top:7px}.trajectory span{display:grid;grid-template-rows:1fr auto;align-items:end;flex:1;height:100%;text-align:center}.trajectory i{display:block;border-radius:3px 3px 0 0;background:var(--cl-accent);opacity:.75}.trajectory b{font-size:7px;color:var(--cl-text-2)}.race-card footer{margin-top:9px;color:var(--cl-text-2);font-size:8px;text-align:right}`]}}customElements.get("soccer-live-standings")||customElements.define("soccer-live-standings",d)},7197(e,t,a){a.r(t);var i=a(3957),s=a(2007),n=a(5186),r=a(2738),o=a(8257);class l extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[s.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}.tri{display:inline-flex;border:1px solid var(--divider-color,rgba(127,127,127,0.3));border-radius:8px;overflow:hidden;flex-shrink:0;}.tri button{border:0;border-right:1px solid var(--divider-color,rgba(127,127,127,0.3));padding:6px 10px;font-size:12px;cursor:pointer;background:transparent;color:var(--primary-text-color);}.tri button:last-child{border-right:0;}.tri button.sel{background:var(--primary-color,#3b82f6);color:#fff;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}select:focus{outline:2px solid var(--primary-color,#03a9f4);outline-offset:-1px;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}`]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_triKeydown(e){const t=[...e.currentTarget.querySelectorAll("button")],a=t.indexOf(e.target),i=(0,o.lS)(a,t.length,e.key);i!==a&&(e.preventDefault(),t[i].focus(),t[i].click())}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("soccerlive_all_mixed")||e.includes("soccer_live_all_mixed")||["team_match","team_matches_mixed"].includes(this.hass.states[e]?.attributes?.sensor_type)).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e),a=(this.hass?.states?.[e]?.attributes?.card_defaults||{}).compact,n=this._config.compact;return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `)}
          </select>
        </div>

        <h3>${this._t("editor.section_match")}</h3>
        <div>
          <label class="field-label">${this._t("editor.my_team")}</label>
          <input type="text" placeholder="${this._t("editor.my_team_hint")}"
            .value=${this._config.my_team||""}
            @change=${e=>this._fireConfigChanged({...this._config,my_team:e.target.value})} />
        </div>
        <div class="option">
          <label>${this._t("editor.show_form_trend")}</label>
          <ha-switch .checked=${!0===this._config.show_form_trend}
            data-config-value="show_form_trend" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_previous_matches")}</label>
          <ha-switch .checked=${!0===this._config.show_previous_matches}
            data-config-value="show_previous_matches" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_weather")}</label>
          <ha-switch .checked=${!1!==this._config.show_weather}
            data-config-value="show_weather" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.section_prediction")}</h3>
        <div class="option">
          <label>${this._t("editor.show_prediction")}</label>
          <ha-switch .checked=${!1!==this._config.show_prediction}
            data-config-value="show_prediction" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_prediction_details")}</label>
          <ha-switch .checked=${!1!==this._config.show_prediction_details}
            data-config-value="show_prediction_details" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_odds")}</label>
          <ha-switch .checked=${!1!==this._config.show_odds}
            data-config-value="show_odds" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_injuries")}</label>
          <ha-switch .checked=${!1!==this._config.show_injuries}
            data-config-value="show_injuries" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.section_display")}</h3>
        <div class="option">
          <label>${this._t("editor.show_event_toasts")}</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_broadcasts")}</label>
          <ha-switch .checked=${!0===this._config.hide_broadcasts} data-config-value="hide_broadcasts" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.compact")}</label>
          <div class="tri" role="radiogroup" aria-label=${this._t("editor.compact")} @keydown=${this._triKeydown}>
            <button type="button" role="radio" class=${void 0===n?"sel":""} aria-checked=${void 0===n} tabindex=${void 0===n?"0":"-1"}
              @click=${()=>{const e={...this._config};delete e.compact,this._fireConfigChanged(e)}}>
              ${this._t("editor.inherit")}${void 0!==a?` (${a?this._t("editor.on"):this._t("editor.off")})`:""}
            </button>
            <button type="button" role="radio" class=${!0===n?"sel":""} aria-checked=${!0===n} tabindex=${!0===n?"0":"-1"}
              @click=${()=>this._fireConfigChanged({...this._config,compact:!0})}>${this._t("editor.on")}</button>
            <button type="button" role="radio" class=${!1===n?"sel":""} aria-checked=${!1===n} tabindex=${!1===n?"0":"-1"}
              @click=${()=>this._fireConfigChanged({...this._config,compact:!1})}>${this._t("editor.off")}</button>
          </div>
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          ${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          <label class="field-label">${this._t("editor.score_size")}</label>
          <select data-config-value="score_size" @change=${this._selectChanged}>
            <option value="normal" ?selected=${"normal"===(this._config.score_size||"normal")}>${this._t("editor.size_normal")}</option>
            <option value="big" ?selected=${"big"===this._config.score_size}>${this._t("editor.size_big")}</option>
            <option value="huge" ?selected=${"huge"===this._config.score_size}>${this._t("editor.size_huge")}</option>
          </select>
        </div>
        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-team-editor")||customElements.define("soccer-live-team-editor",l)},9567(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8657),r=a(8429),o=a(8257),l=a(4179),c=a(1814),d=a(1979),p=a(4522),h=a(5247),u=a(226),g=a(1190),m=a(7311),f=a(6755),_=a(5360),b=a(1448),v=a(6381),x=a(6472);class y extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String},_weatherBadge:{type:Object},_cachedData:{type:Object},showEventToasts:{type:Boolean},myTeam:{type:String},showPreviousMatches:{type:Boolean},showFormTrend:{type:Boolean},compact:{type:Boolean}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,r.K)(this,e);const t=["big","huge"].includes(e.score_size)?e.score_size:"normal";this.setAttribute("data-score",t),this._isLoading=!0,this._loadingStarted=Date.now(),this._lastWeatherVenue=null,this.showPopup=!1,this.activeMatch=null,this.showEventToasts=!0===e.show_event_toasts,this.myTeam=(e.my_team||"").toLowerCase(),this.showPreviousMatches=!0===e.show_previous_matches,this.showFormTrend=!0===e.show_form_trend,this.compact=!0===e.compact,this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null,this._animationTimers||(this._animationTimers=[])}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_translatePhase(e){return e?{"regular-season":this._t("phase.regular_season"),"regular season":this._t("phase.regular_season"),"group-stage":this._t("phase.group_stage"),"group stage":this._t("phase.group_stage"),playoffs:this._t("phase.playoffs")}[String(e).toLowerCase()]||e:""}_shouldShowPhase(e){return!!e&&"regular-season"!==String(e).toLowerCase()}connectedCallback(){super.connectedCallback(),this._subscribeToEvents(),this._countdownInterval=setInterval(()=>this.requestUpdate(),3e4),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._countdownInterval),this._countdownInterval=null,clearTimeout(this._loadingTimer),this._eventSubscriptionGeneration=(this._eventSubscriptionGeneration||0)+1,this._eventSubscriptionPromise=null,this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach(e=>{"function"==typeof e&&e()}),this._eventSubscriptions=[]),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null),this._removePopupPortal(),clearTimeout(this._toastTimer),this._toastTimer=null,this._animationTimers&&(this._animationTimers.forEach(e=>clearTimeout(e)),this._animationTimers=[])}_subscribeToEvents(){if(!this.hass||!this.hass.connection)return;if(this._eventSubscriptionPromise||this._eventSubscriptions?.length)return;const e=this._eventSubscriptionGeneration||0,t=this._handleSoccerLiveEvent.bind(this),a=Promise.allSettled(["soccer_live_goal","soccer_live_yellow_card","soccer_live_red_card"].map(e=>this.hass.connection.subscribeEvents(t,e)));this._eventSubscriptionPromise=a,a.then(t=>{const a=t.filter(e=>"fulfilled"===e.status&&"function"==typeof e.value).map(e=>e.value);if((this._eventSubscriptionGeneration||0)!==e||!this.isConnected)return void a.forEach(e=>e());const i=t.filter(e=>"rejected"===e.status);i.length>0?(a.forEach(e=>e()),this._eventSubscriptions=[],i.forEach(e=>console.warn("Soccer Live Team subscription failed:",e.reason))):this._eventSubscriptions=a}).finally(()=>{this._eventSubscriptionPromise===a&&(this._eventSubscriptionPromise=null)})}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this.hass.states[this._config.entity];if(!t)return!1;const a=t.attributes.matches||[];if(0===a.length)return!1;const i=a[0];return i.home_team===e.home_team&&i.away_team===e.away_team}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;if(this._eventBelongsToThisCard(a)&&this.showEventToasts)if("soccer_live_goal"===t){const e=a.team===a.home_team?"home":"away";requestAnimationFrame(()=>this._triggerGoalCelebration(e,a))}else this._showEventToast(t,a)}_showEventToast(e,t){let a="",i="goal";"soccer_live_goal"===e?(a=`${this._t("event.goal").toUpperCase()}! ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,i="goal"):"soccer_live_yellow_card"===e?(a=`🟨 ${this._t("event.yellow_card")} · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="yellow"):"soccer_live_red_card"===e&&(a=`🟥 ${this._t("event.red_card")} · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="red"),a&&(this._toastMessage=a,this._toastVariant=i,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this._toastVisible=!1,this.requestUpdate()},4e3),this.requestUpdate())}_triggerGoalCelebration(e,t){const a=this.shadowRoot&&this.shadowRoot.querySelector("ha-card");if(!a)return;a.querySelectorAll(".confetti, .goal-banner, .goal-flash-overlay").forEach(e=>e.remove()),a.classList.remove("goal-flash"),a.offsetWidth,a.classList.add("goal-flash"),this._animationTimers.push(setTimeout(()=>a.classList.remove("goal-flash"),1700));const i=document.createElement("div");i.className="goal-flash-overlay",a.appendChild(i),this._animationTimers.push(setTimeout(()=>i.remove(),1e3));const s=document.createElement("div");s.className="goal-banner";const n=document.createElement("div");n.className="goal-banner-text",n.textContent=(this._t("event.goal")||"GOAL")+"!",s.appendChild(n),a.appendChild(s),this._animationTimers.push(setTimeout(()=>s.remove(),1700));const r=a.querySelector(".score-numbers");r&&(r.classList.remove("goal-scored"),r.offsetWidth,r.classList.add("goal-scored"),this._animationTimers.push(setTimeout(()=>r.classList.remove("goal-scored"),1300)));const o=a.querySelectorAll(".team-side .team-logo-big"),l="away"===e?o[1]:o[0];l&&(l.classList.remove("scorer-bounce"),l.offsetWidth,l.classList.add("scorer-bounce"),this._animationTimers.push(setTimeout(()=>l.classList.remove("scorer-bounce"),1300))),navigator.vibrate&&navigator.vibrate([180,80,180,80,280]),this._animationTimers.push(setTimeout(()=>this._showEventToast("soccer_live_goal",t),600));const c=["#ec4899","#6366f1","#06b6d4","#fbbf24","#10b981","#ef4444"],d=["⚽","🎉","✨","🔥","⭐"];for(let e=0;e<36;e++){const e=document.createElement("div");e.className="confetti",Math.random()>.55?(e.textContent=d[Math.floor(Math.random()*d.length)],e.style.fontSize=14+10*Math.random()+"px",e.style.background="transparent"):(e.style.background=c[Math.floor(Math.random()*c.length)],e.style.borderRadius=Math.random()>.5?"50%":"2px");const t=380*(Math.random()-.5)+"px",i=240*Math.random()+100+"px";e.style.setProperty("--dx",t),e.style.setProperty("--dy",i),e.style.animationDelay=.3*Math.random()+"s",a.appendChild(e),this._animationTimers.push(setTimeout(()=>e.remove(),2e3))}}_parseMatchDate(e){return(0,s.n1)(e)}_liveCountdown(e){if(!e||"pre"!==e.state)return null;const t=this._parseMatchDate(e.date);if(!t)return null;const a=t-new Date;if(a<=0||a>1728e5)return null;const i=Math.floor(a/6e4);if(i<1)return this._t("time.now");if(i<60)return this._t("time.in_n_min",{n:i});const s=Math.floor(i/60);return this._t("time.in_n_h",{n:s})}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-team-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_",show_event_toasts:!1}}async showDetails(e){this.activeMatch=e,this.showPopup=!0;const t=this.hass?.states?.[this._config.entity]?.attributes;if(t?.detail_service&&!(0,x.wn)(e))try{await(0,x.NZ)(this.hass,t,e)}catch(e){}}closePopup(){this.showPopup=!1}separateEvents(e){const t=[],a=[],i=[];return e.forEach(e=>{const s=String(e||"");s.includes("Goal")&&!s.includes("Disallowed")||s.includes("Penalty - Scored")?t.push(this.formatMatchEvent(s)):s.includes("Yellow Card")?a.push(this.formatMatchEvent(s)):s.includes("Red Card")&&i.push(this.formatMatchEvent(s))}),{goals:t,yellowCards:a,redCards:i}}formatMatchEvent(e){const t=e=>this._t(e);let a=String(e||"").trim();a=a.replace(/^Goal\s*-\s*/i,"").replace(/^Yellow Card\s*-\s*/i,"").replace(/^Red Card\s*-\s*/i,"").replace(/^Penalty - Scored\s*-\s*/i,`${t("event.penalty")} - `).replace(/^Header\s*-\s*/i,`${t("event.header")} - `).replace(/^Shot\s*-\s*/i,`${t("event.shot")} - `).replace(/^Free-kick\s*-\s*/i,`${t("event.free_kick")} - `).replace(/^Penalty\s*-\s*/i,`${t("event.penalty")} - `),a=a.replace(/^([^:]+):\s*/,"$1 ");const i=[t("event.header"),t("event.shot"),t("event.penalty"),t("event.free_kick")].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return a=a.replace(new RegExp(`^(${i.join("|")})\\s*-\\s*(.+)$`,"i"),(e,t,a)=>`${a} (${t.toLowerCase()})`),a=a.replace(/\bN\/A\b/g,t("generic.unknown")),a}_renderStatusBadge(e){const t=e.state;return"in"===t?i.qy`<span class="status-badge live"><span class="dot"></span>${this._t("status.live")}</span>`:"post"===t?i.qy`<span class="status-badge finished">${this._t("status.finished")}</span>`:i.qy`<span class="status-badge scheduled">${e.date||this._t("status.scheduled")}</span>`}_renderClock(e){const t=e.state;if("in"===t){const t=e.status_detail&&"N/A"!==e.status_detail?e.status_detail:"",a=e.clock&&"N/A"!==e.clock?e.clock:"",s=t||e.status||"",n=_.WY[String(s).trim().toLowerCase()],r=a||(n?this._t(n):s);return i.qy`<div class="clock"><span class="dot"></span>${r}</div>`}if("post"===t)return i.qy`<div class="clock finished">${this._t("status.full_time")}</div>`;const a=this._liveCountdown(e);return i.qy`<div class="clock upcoming">${a||e.date||""}</div>`}_renderRecord(e){if(!e||"N/A"===e)return"";const t=String(e).split("-");return 3===t.length?t.every(e=>0===parseInt(e))?"":i.qy`<div class="record">
        <span class="rec rec-w">${t[0]}${this._t("form.W")}</span>
        <span class="rec rec-d">${t[1]}${this._t("form.D")}</span>
        <span class="rec rec-l">${t[2]}${this._t("form.L")}</span>
      </div>`:i.qy`<div class="record"><span class="rec">${e}</span></div>`}_renderStandingSummary(e,t){const a=(0,f.y)(e,t,e=>this._t(e));return a?i.qy`<div class="standing-summary">${a}</div>`:""}_hexToRgb(e){if(!e||"N/A"===e)return null;const t=String(e).replace("#","");return 6!==t.length?null:`${parseInt(t.slice(0,2),16)},${parseInt(t.slice(2,4),16)},${parseInt(t.slice(4,6),16)}`}_renderTopScorer(e){if(!e||!e.name)return"";const t=e.short_name||e.name,a=this._t("team.top_scorer");return i.qy`
      <div class="top-scorer" title="${a}: ${e.name} (${e.value})">
        <span class="ts-label">⚽ ${a}</span>
        <div class="ts-row">
          <span class="ts-name">${t}</span>
          <span class="ts-val">${e.value}<span class="ts-unit">★</span></span>
        </div>
      </div>
    `}_renderForm(e){if(!e||"N/A"===e)return"";const t=String(e).replace(/[^WLDwld]/g,"").toUpperCase();if(t.length<2)return"";const a=t.slice(-5).split(""),s=e=>this._t("form."+e);return i.qy`
      <div class="form-pills">
        ${a.map(e=>i.qy`<div class="form-pill ${e}">${s(e)}</div>`)}
      </div>
    `}_renderPrediction(e){return(0,m.K4)(e,{t:e=>this._t(e),lang:(0,s.$c)(this.hass,this._config),showDetails:!1!==this._config.show_prediction_details})}_renderOdds(e){return(0,m.vK)(e,{t:(e,t)=>this._t(e,t)})}_renderInjuries(e){return(0,m.Sj)(e,{t:(e,t)=>this._t(e,t)})}_renderStatsRow(e){const t=e.home_statistics||{},a=e.away_statistics||{},s=[],n=e=>{const t=parseFloat(e);return isNaN(t)?null:t},r=(e,i,r,o="")=>{const l=n(t[i]),c=n(a[r]);null!==l&&null!==c&&s.push({label:e,home:t[i],away:a[r],hNum:l,aNum:c,suffix:o})};return r(this._t("team.possession"),"possessionPct","possessionPct","%"),r(this._t("team.xg"),"expectedGoals","expectedGoals"),r(this._t("team.shots"),"totalShots","totalShots"),r(this._t("team.on_target"),"shotsOnTarget","shotsOnTarget"),0===s.length?"":i.qy`
      <div class="stats-row">
        ${s.map(e=>{const t=e.hNum+e.aNum,a=t>0?e.hNum/t*100:50,s=100-a;return i.qy`
            <div class="stat-bar">
              <div class="stat-bar-label">
                <span class="home-val">${e.home}${e.suffix}</span>
                <span class="label-text">${e.label}</span>
                <span class="away-val">${e.away}${e.suffix}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-home" style="width: ${a}%;"></div>
                <div class="stat-bar-away" style="width: ${s}%;"></div>
              </div>
            </div>
          `})}
      </div>
    `}render(){if((0,r.K)(this,this._config),!this.hass||!this._config)return(0,d.bY)(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];if(this.compact=(0,o.Oc)(this._config,t?.attributes?.card_defaults),!t){const t=h.Q.get(e);if(!t||!t.data.matches)return(0,p.PA)("⚠️",this._t("ui.entity_not_found"),`${this._t("ui.entity_not_found")}: ${e}`,this._t("ui.check_entity_config"));this._cachedData=t.data}if(t&&"unavailable"===t.state){const t=h.Q.get(e);if(!t||!t.data.matches)return(0,p.PA)("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));this._cachedData=t.data}if(t&&this._isLoading)return Date.now()-this._loadingStarted>1e4?(0,p.PA)("⏱",this._t("ui.loading_timeout"),`${this._t("ui.entity_not_responding")}: ${this._config.entity}`,this._t("ui.check_integration")):(0,d.bY)(this._t("ui.loading"));const a=t&&"unavailable"!==t.state?t.attributes:this._cachedData;if(!a||!a.matches||0===a.matches.length)return(0,p._$)(a,e=>this._t(e),()=>{const e=this._config.entity||"";return e.includes("soccerlive_next")||e.includes("soccerlive_all_mixed")||e.includes("soccer_live_next")||e.includes("soccer_live_all_mixed")?(0,p.QG)("📅",this._t("ui.off_season"),this._t("team.off_season")):(0,p.PA)("⚠️",this._t("ui.wrong_entity_type"),e,this._t("ui.wrong_entity_type_hint"))});const l=a.matches[0],c=a.league_info?a.league_info[0]:null,u=(l.league_name&&"N/A"!==l.league_name?l.league_name:c&&c.name)||"",m=(0,b.rn)({competitionName:u,competitionLogo:c&&c.logo_href,fallbackLogo:null,isFriendly:l.is_friendly}),f="in"===l.state,_="post"===l.state,v=f||_,x=(0,s.$c)(this.hass,this._config),y=c&&c.abbreviation&&"N/A"!==c.abbreviation?c.abbreviation:l.league_name&&"N/A"!==l.league_name?l.league_name:l.season_info&&"N/A"!==l.season_info&&this._shouldShowPhase(l.season_info)?this._translatePhase(l.season_info):"",w=(0,b.VR)(y,x),$=this._hexToRgb(l.home_color),k=this._hexToRgb(l.away_color),C=$||k?`background:\n      radial-gradient(ellipse at 0% 0%, rgba(${$||"99,102,241"},0.18), transparent 55%),\n      radial-gradient(ellipse at 100% 100%, rgba(${k||"236,72,153"},0.18), transparent 55%)`:"",S=this.myTeam||(a.team_name||"").toLowerCase(),q=S&&l.home_team&&l.home_team.toLowerCase().includes(S),z=S&&l.away_team&&l.away_team.toLowerCase().includes(S);return i.qy`
      <ha-card class="${f?"live":""} ${this.compact?"compact":""}">
        <div class="bg-logos">
          ${l.home_logo?i.qy`<div class="bg-logo home"><img src="${l.home_logo}" alt="" loading="lazy"></div>`:""}
          ${l.away_logo?i.qy`<div class="bg-logo away"><img src="${l.away_logo}" alt="" loading="lazy"></div>`:""}
        </div>
        <div class="hero-bg" style="${C}"></div>

        ${this.showEventToasts&&this._toastVisible?i.qy`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        <div class="top-bar">
          <div class="competition">
            <span class="comp-icon">
              ${m?i.qy`<img src="${m}" alt="" />`:"⚽"}
            </span>
            <span class="comp-name">${w||" "}</span>
          </div>
          ${this._renderStatusBadge(l)}
        </div>

        <div class="scoreboard">
          <div class="team-side home">
            <div class="team-logo-wrap">
              ${l.home_logo?i.qy`<img class="team-logo-big" src="${l.home_logo}" alt="${l.home_team}" />`:i.qy`<div class="team-logo-fallback">${l.home_abbrev||"?"}</div>`}
            </div>
            <div class="team-name-big ${q?"my-team":""}">${l.home_team}</div>
            ${f?"":this._renderStandingSummary(l,"home")}
            ${this._renderRecord(l.home_record)}
            ${f?this._renderForm(l.home_form):this._renderForm(l.last_five_home)||this._renderForm(l.home_form)}
            ${f?"":this._renderTopScorer(l.home_top_scorer)}
          </div>

          <div class="score-center">
            ${v?i.qy`<div class="score-numbers">${(0,n.Q)(l.home_score)} <span class="dash">-</span> ${(0,n.Q)(l.away_score)}</div>`:i.qy`<div class="score-vs">${this._t("match.vs")}</div>`}
            ${this._renderClock(l)}
          </div>

          <div class="team-side away">
            <div class="team-logo-wrap">
              ${l.away_logo?i.qy`<img class="team-logo-big" src="${l.away_logo}" alt="${l.away_team}" />`:i.qy`<div class="team-logo-fallback">${l.away_abbrev||"?"}</div>`}
            </div>
            <div class="team-name-big ${z?"my-team":""}">${l.away_team}</div>
            ${f?"":this._renderStandingSummary(l,"away")}
            ${this._renderRecord(l.away_record)}
            ${f?this._renderForm(l.away_form):this._renderForm(l.last_five_away)||this._renderForm(l.away_form)}
            ${f?"":this._renderTopScorer(l.away_top_scorer)}
          </div>
        </div>

        ${f?this._renderStatsRow(l):""}

        ${(0,g.n)(l,{lang:(0,s.$c)(this.hass,this._config),t:e=>this._t(e),weatherBadge:!1!==this._config.show_weather&&this._weatherBadge||null,showDate:!v,hideBroadcasts:!0===this._config.hide_broadcasts})}
        ${v?i.qy`
          <div class="meta-row details-row">
            <button class="info-btn" @click="${()=>this.showDetails(l)}">${this._t("team.details")} ›</button>
          </div>
        `:""}

        ${this.compact||!1===this._config.show_prediction?"":this._renderPrediction(l)}
        ${this.compact||!1===this._config.show_odds?"":this._renderOdds(l)}
        ${this.compact||!1===this._config.show_injuries?"":this._renderInjuries(l)}
        ${!this.compact&&this.showFormTrend?this._renderFormTrend(a.previous_matches,a.matches,this.myTeam||a.team_name):""}
        ${!this.compact&&this.showPreviousMatches?this._renderPreviousMatches(a.previous_matches,a.matches,this.myTeam||a.team_name):""}
        ${this.compact?"":this._renderH2H(l.head_to_head,l.home_team)}
        ${this.compact?"":this._renderUpcomingList(a.upcoming_matches,a.matches,this.myTeam||a.team_name)}
      </ha-card>
    `}_relativeDate(e){if(!e)return"";const t=e.split(" "),[a,i,n]=(t[0]||"").split(/[-\/]/).map(Number);if(!a||!i||!n)return t[0]||"";const r=new Date(n,i-1,a),o=new Date;o.setHours(0,0,0,0);const l=Math.round((r-o)/864e5);if(1===l)return this._t("time.tomorrow");if(l<=6&&l>1)return this._t("time.in_n_d",{n:l});(0,s.$c)(this.hass,this._config);const c=`month.${i}`;return`${a} ${this._t(c)}`}_teamBadge(e,t,a){const s=(0,l.GD)(t)||"rgba(var(--cl-accent-rgb),0.7)",n=e=>e&&"N/A"!==e?e:"",r=n(e)||n(a)||"?";return i.qy`<span class="abbrev-badge" style="--team-c:${s}"><span class="abbrev-name">${r}</span></span>`}_renderFormTrend(e,t,a){const s=(a||"").toLowerCase(),n=e&&e.length>0?e:(t||[]).filter(e=>"post"===e.state).slice(-10).reverse();if(0===n.length)return"";const r=n.map(e=>{const t=e.home_team&&e.home_team.toLowerCase().includes(s),a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)?null:a===i?"D":t&&a>i||!t&&i>a?"W":"L"}).filter(Boolean).reverse();if(r.length<2)return"";const o=r.filter(e=>"W"===e).length,l=r.filter(e=>"D"===e).length,c=r.filter(e=>"L"===e).length;return i.qy`
      <div class="form-trend-section">
        <div class="upcoming-list-title">${this._t("team.form_trend")||"Seizoenvorm"}</div>
        <div class="form-trend-row">
          <div class="form-trend-dots">
            ${r.map(e=>i.qy`<span class="ft-dot ${e.toLowerCase()}">${this._t("form."+e)}</span>`)}
          </div>
          <span class="form-trend-summary">${o}${this._t("form.W")} ${l}${this._t("form.D")} ${c}${this._t("form.L")}</span>
        </div>
      </div>
    `}_renderPreviousMatches(e,t,a){const r=e&&e.length>0?e.filter(e=>"post"===e.state||!e.state):t?t.filter(e=>"post"===e.state).slice(-3).reverse():[];if(0===r.length)return"";const o=(a||"").toLowerCase();return i.qy`
      <div class="upcoming-list">
        <div class="upcoming-list-title">${this._t("team.previous_matches")}</div>
        ${r.map(e=>{const t=o&&e.home_team&&e.home_team.toLowerCase().includes(o),a=o&&e.away_team&&e.away_team.toLowerCase().includes(o),r=parseInt(e.home_score),l=parseInt(e.away_score),c=!isNaN(r)&&!isNaN(l)&&r>l,d=!isNaN(r)&&!isNaN(l)&&l>r,p=t||a?t&&c||a&&d?"tw":t&&d||a&&c?"tl":"draw":c?"home-win":d?"away-win":"draw",h=e=>e&&"N/A"!==e?e:"",u=(0,b.VR)(h(e.league_abbrev)||h(e.league_abbreviation)||h(e.competition_abbreviation)||h(e.league_name),(0,s.$c)(this.hass,this._config));return i.qy`
            <div class="upcoming-row">
              <span class="upcoming-date">
                ${(0,s.iS)(e.date,(0,s.$c)(this.hass,this._config))||(e.date?e.date.split(" ")[0]:"")}
                <span class="upcoming-date-day prev-comp-label">${u}</span>
              </span>
              <span class="upcoming-team home-side ${t?"tracked":""}">
                ${e.home_logo?i.qy`<img src="${e.home_logo}" alt="" />`:""}
                ${this._teamBadge(e.home_abbrev,e.home_color,e.home_team)}
              </span>
              <span class="prev-score ${p}">
                ${(0,n.Q)(e.home_score,"-")}-${(0,n.Q)(e.away_score,"-")}
              </span>
              <span class="upcoming-team away-side ${a?"tracked":""}">
                ${this._teamBadge(e.away_abbrev,e.away_color,e.away_team)}
                ${e.away_logo?i.qy`<img src="${e.away_logo}" alt="" />`:""}
              </span>
            </div>
          `})}
      </div>
    `}_renderUpcomingList(e,t,a){const r=e&&e.length>0?e:t&&t.length>1?t.slice(1).filter(e=>"pre"===e.state||"in"===e.state).slice(0,4):[];if(0===r.length)return"";const o=(a||"").toLowerCase();return i.qy`
      <div class="upcoming-list">
        <div class="upcoming-list-title">${this._t("team.upcoming_matches")}</div>
        ${r.map(e=>{const t=o&&e.home_team&&e.home_team.toLowerCase().includes(o),a=o&&e.away_team&&e.away_team.toLowerCase().includes(o),r="in"===e.state,l=e.head_to_head&&e.head_to_head.length>0,c=e=>e&&"N/A"!==e?e:"",d=t?c(e.away_form):a?c(e.home_form):"",p=(0,b.VR)(e.league_name&&"N/A"!==e.league_name?e.league_name:"",(0,s.$c)(this.hass,this._config));return i.qy`
            <div class="upcoming-row ${l?"clickable":""}"
                 @click="${l?()=>this.showDetails(e):null}">
              <span class="upcoming-date">
                ${e.date&&e.date.split(" ")[1]||""}
                <span class="upcoming-date-day">${this._relativeDate(e.date)}</span>
                ${p?i.qy`<span class="upl-comp-label">${p}</span>`:""}
              </span>
              <span class="upcoming-team home-side ${t?"tracked":""}">
                ${e.home_logo?i.qy`<img src="${e.home_logo}" alt="" />`:""}
                ${this._teamBadge(e.home_abbrev,e.home_color,e.home_team)}
              </span>
              ${r?i.qy`<span class="upcoming-live-score">${(0,n.Q)(e.home_score)}<span class="live-dot">●</span>${(0,n.Q)(e.away_score)}</span>`:i.qy`<span class="upcoming-vs">-</span>`}
              <span class="upcoming-team away-side ${a?"tracked":""}">
                ${this._teamBadge(e.away_abbrev,e.away_color,e.away_team)}
                ${e.away_logo?i.qy`<img src="${e.away_logo}" alt="" />`:""}
              </span>
              ${h=d,u=t?"side-right":"side-left",h?i.qy`<div class="upl-opp-form ${u}">
              ${h.split("").slice(-5).map(e=>{const t="W"===e?"w":"L"===e||"V"===e?"l":"d";return i.qy`<span class="upl-fd ${t}"></span>`})}
            </div>`:""}
            </div>
          `;var h,u})}
      </div>
    `}_renderH2H(e,t){if(!e||0===e.length)return"";const a=(t||"").toLowerCase();let r=0,o=0,l=0;e.forEach(e=>{const t=parseInt(e.home_score)||0,i=parseInt(e.away_score)||0;t!==i?((e.home_team||"").toLowerCase().includes(a)||a.includes((e.home_team||"").toLowerCase().split(" ")[0])?t>i:i>t)?r++:l++:o++});const c=r+o+l,d=c?Math.round(r/c*100):33,p=c?Math.round(o/c*100):34,h=100-d-p;return i.qy`
      <div class="h2h-section">
        <div class="upcoming-list-title">${this._t("team.h2h")}</div>
        <div class="h2h-summary">
          <span class="h2h-summary-num home">${r}</span>
          <span class="h2h-summary-label">${this._t("match.draw")||"D"} ${o}</span>
          <span class="h2h-summary-num away">${l}</span>
        </div>
        <div class="h2h-bar">
          <div class="h2h-bar-seg home" style="width:${d}%"></div>
          <div class="h2h-bar-seg draw" style="width:${p}%"></div>
          <div class="h2h-bar-seg away" style="width:${h}%"></div>
        </div>
        ${e.slice(0,5).map(e=>{const t=(0,s.iS)(e.date,(0,s.$c)(this.hass,this._config)),a=parseInt(e.home_score)>parseInt(e.away_score),r=parseInt(e.away_score)>parseInt(e.home_score);return i.qy`
            <div class="h2h-row">
              <span class="h2h-date">${t}</span>
              <span class="h2h-team ${a?"winner":""}">${e.home_team||""}</span>
              <span class="h2h-score">${(0,n.Q)(e.home_score,"-")} - ${(0,n.Q)(e.away_score,"-")}</span>
              <span class="h2h-team away ${r?"winner":""}">${e.away_team||""}</span>
            </div>
          `})}
      </div>
    `}updated(e){if((e.has("showPopup")||e.has("activeMatch"))&&(this.showPopup?(this._renderPopupPortal(),this._escHandler||(this._escHandler=e=>{"Escape"===e.key&&(this.showPopup=!1)},document.addEventListener("keydown",this._escHandler))):(this._removePopupPortal(),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null))),e.has("activeMatch")&&this.activeMatch&&this._loadWeather(this.activeMatch.venue,this.activeMatch.venue_lat,this.activeMatch.venue_lon,this.activeMatch.date_iso),e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents(),e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];if(this.activeMatch&&e?.attributes){const t=(0,x.Hl)(e.attributes,this.activeMatch.event_id);t&&t!==this.activeMatch&&(this.activeMatch=t)}if(e&&"unavailable"!==e.state&&(this._isLoading=!1,h.Q.set(this._config.entity,e.attributes)),e&&e.attributes.matches&&e.attributes.matches[0]){const t=e.attributes.matches[0];t.venue!==this._lastWeatherVenue&&this._loadWeather(t.venue,t.venue_lat,t.venue_lon,t.date_iso)}}}_copyPopupThemeVars(e){const t=getComputedStyle(this);["--cl-bg","--cl-text","--cl-text-2","--cl-divider","--cl-accent","--cl-accent-2"].forEach(a=>{const i=t.getPropertyValue(a);i&&e.style.setProperty(a,i)})}_renderPopupPortal(){if(this.activeMatch&&(this._popupPortal||(this._popupPortal=document.createElement("dialog"),this._popupPortal.className="soccer-live-popup-portal",this._popupCancelHandler=e=>{e.preventDefault(),this.showPopup=!1},this._popupClickHandler=e=>{e.target===this._popupPortal&&(this.showPopup=!1)},this._popupPortal.addEventListener("cancel",this._popupCancelHandler),this._popupPortal.addEventListener("click",this._popupClickHandler),document.body.appendChild(this._popupPortal)),this._copyPopupThemeVars(this._popupPortal),(0,i.XX)(i.qy`${this._renderPopupPortalStyles()}${this._renderPopup()}`,this._popupPortal),!this._popupPortal.open))try{this._popupPortal.showModal()}catch(e){this._popupPortal.setAttribute("open","")}}_removePopupPortal(){this._popupPortal&&(this._popupPortal.open&&this._popupPortal.close(),this._popupCancelHandler&&(this._popupPortal.removeEventListener("cancel",this._popupCancelHandler),this._popupCancelHandler=null),this._popupClickHandler&&(this._popupPortal.removeEventListener("click",this._popupClickHandler),this._popupClickHandler=null),(0,i.XX)(i.qy``,this._popupPortal),this._popupPortal.remove(),this._popupPortal=null)}async _loadWeather(e,t=null,a=null,i=null){this._lastWeatherVenue=e;try{this._weatherBadge=await(0,c.i)(e,this.hass,this._config,t,a,i),this.requestUpdate()}catch(e){console.warn("Weather load failed:",e)}}_renderPopup(){const e=this.activeMatch,t="pre"===e.state,a="in"===e.state,r="post"===e.state,o=a?e.clock&&"N/A"!==e.clock?e.clock:(0,_.sH)(e.status,e=>this._t(e))||this._t("status.live"):r?this._t("status.full_time"):t&&((0,s.DK)(e.date,(0,s.$c)(this.hass,this._config))||e.date)||"";return i.qy`
      <div
        class="popup-overlay"
        @click="${e=>{e.target===e.currentTarget&&(this.showPopup=!1)}}"
      >
        <div class="popup-box" @click="${e=>e.stopPropagation()}">
          <h3 class="popup-title">${this._t("popup.match_details")}</h3>
          <div class="popup-score-row">
            <div class="popup-team-col">
              <img class="popup-logo" src="${e.home_logo}" alt="" @error="${e=>e.target.style.display="none"}">
              <div class="popup-team-name">${e.home_team}</div>
            </div>
            <div class="popup-score-center">
              <div class="popup-score">${(0,n.Q)(e.home_score,"-")}<span class="popup-score-sep"> - </span>${(0,n.Q)(e.away_score,"-")}</div>
              ${o?i.qy`<div class="popup-clock">${o}</div>`:""}
            </div>
            <div class="popup-team-col">
              <img class="popup-logo" src="${e.away_logo}" alt="" @error="${e=>e.target.style.display="none"}">
              <div class="popup-team-name">${e.away_team}</div>
            </div>
          </div>
          ${this._hasStats(e.home_statistics)||this._hasStats(e.away_statistics)?i.qy`
          <div class="popup-stats-grid">
            ${this._renderPopupStatBox(e.home_team,e.home_statistics)}
            ${this._renderPopupStatBox(e.away_team,e.away_statistics)}
          </div>`:""}
          ${this._renderPopupEventGroups(e)}
          ${this._renderPopupLineup(e)}
          ${this._renderPopupTimeline(e)}
          ${this._renderPopupH2H(e)}
          <button class="popup-close-btn" @click="${()=>this.showPopup=!1}">${this._t("generic.close")}</button>
        </div>
      </div>
    `}_renderPopupPortalStyles(){return i.qy`
      <style>
        ${v.hl.cssText}
        .soccer-live-popup-portal {
          border: 0;
          padding: 0;
          margin: auto;
          max-width: none;
          max-height: none;
          width: 100vw;
          height: 100vh;
          background: transparent;
          color: inherit;
          overflow: hidden;
        }
        .soccer-live-popup-portal::backdrop {
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(8px);
        }
        .popup-overlay {
          position: fixed;
          inset: 0;
          pointer-events: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: auto;
          padding: 16px;
          box-sizing: border-box;
          font-family: var(--primary-font-family, sans-serif);
        }
        .popup-box {
          background: var(--cl-bg, #1a1f2e);
          border: 1px solid var(--cl-divider, rgba(255,255,255,0.08));
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.6);
          color: var(--cl-text, #f8fafc);
          max-height: 85vh;
          max-width: 560px;
          width: 100%;
          overflow-y: auto;
          padding: 24px;
          margin: auto;
          box-sizing: border-box;
        }
        .popup-title {
          margin: 0 0 20px;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .popup-score-row { display: flex; justify-content: center; align-items: flex-start; gap: 14px; margin-bottom: 24px; }
        .popup-team-col { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .popup-team-name { font-size: 12px; font-weight: 700; text-align: center; color: var(--cl-text, #f8fafc); line-height: 1.25; word-break: break-word; }
        .popup-logo { width: 72px; height: 72px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); }
        .popup-score-center { flex: 0 0 auto; text-align: center; padding-top: 14px; }
        .popup-score { font-size: 42px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
        .popup-score-sep { opacity: 0.4; }
        .popup-clock { font-size: 12px; color: var(--cl-text-2, #94a3b8); margin-top: 8px; font-weight: 600; }
        .popup-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 18px; }
        .popup-stat-box { background: rgba(255,255,255,0.04); padding: 14px; border-radius: 14px; }
        .popup-stat-team { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--cl-text-2, #94a3b8); font-weight: 700; margin-bottom: 6px; }
        .popup-stat-row { font-size: 13px; margin-bottom: 2px; }
        .popup-stat-row span { color: var(--cl-text-2, #94a3b8); }
        .popup-event-group { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
        .popup-event-group.goal { background: rgba(99,102,241,0.1); border-color: #6366f1; }
        .popup-event-group.yellow { background: rgba(245,158,11,0.1); border-color: #f59e0b; }
        .popup-event-group.red { background: rgba(239,68,68,0.1); border-color: #ef4444; }
        .popup-event-title { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .popup-event-group.goal .popup-event-title { color: #6366f1; }
        .popup-event-group.yellow .popup-event-title { color: #f59e0b; }
        .popup-event-group.red .popup-event-title { color: #ef4444; }
        .popup-event-list { margin: 0; padding-left: 18px; font-size: 13px; color: #cbd5e1; }
        .popup-event-list li { margin: 4px 0; }
        .popup-section { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
        .popup-section-lineup { background: rgba(16,185,129,0.08); border-color: #10b981; }
        .popup-section-timeline { background: rgba(251,191,36,0.08); border-color: #fbbf24; }
        .popup-section-h2h { background: rgba(99,102,241,0.08); border-color: var(--cl-accent, #6366f1); }
        .popup-section-title { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .popup-section-title.lineup { color: #10b981; }
        .popup-section-title.timeline { color: #fbbf24; }
        .popup-section-title.h2h { color: var(--cl-accent, #6366f1); }
        .popup-lineup-team { margin-bottom: 8px; }
        .popup-lineup-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
        .popup-lineup-header span:first-child { font-size: 12px; font-weight: 800; color: #fff; }
        .popup-formation { font-size: 10px; font-weight: 700; color: var(--cl-accent, #6366f1); letter-spacing: 0.1em; }
        .popup-lineup-players { font-size: 12px; color: #cbd5e1; line-height: 1.7; }
        .popup-player { display: inline-block; padding: 2px 8px; background: rgba(255,255,255,0.05); border-radius: 6px; margin: 2px; }
        .popup-jersey { color: #fbbf24; }
        .popup-timeline-list { margin: 0; padding: 0; list-style: none; }
        .popup-timeline-item { display: flex; gap: 8px; align-items: flex-start; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 12px; color: #cbd5e1; }
        .popup-timeline-item:last-child { border-bottom: none; }
        .popup-tl-clock { min-width: 32px; text-align: right; font-size: 11px; font-weight: 700; color: #94a3b8; font-variant-numeric: tabular-nums; padding-top: 2px; flex-shrink: 0; }
        .popup-tl-badge { display: inline-block; font-size: 8px; font-weight: 800; padding: 1px 5px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.04em; flex-shrink: 0; line-height: 15px; white-space: nowrap; margin-top: 1px; }
        .popup-tl-badge.goal   { background: rgba(99,102,241,0.18); color: #6366f1; }
        .popup-tl-badge.yellow { background: rgba(245,158,11,0.18); color: #f59e0b; }
        .popup-tl-badge.red    { background: rgba(239,68,68,0.18); color: #ef4444; }
        .popup-tl-badge.sub    { background: rgba(148,163,184,0.12); color: #94a3b8; }
        .popup-tl-badge.meta   { background: transparent; color: #94a3b8; font-size: 14px; padding: 0 4px; letter-spacing: 0; }
        .popup-tl-text strong { color: #fff; }
        .popup-tl-team { color: #94a3b8; font-size: 11px; }
        .popup-h2h-summary { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px; color: #cbd5e1; }
        .popup-h2h-num { color: #fff; font-size: 18px; font-weight: 800; }
        .popup-h2h-draw { color: #94a3b8; }
        .popup-h2h-bar { display: flex; gap: 2px; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 12px; }
        .popup-h2h-seg.home { background: var(--cl-accent, #6366f1); border-radius: 3px 0 0 3px; }
        .popup-h2h-seg.draw { background: #94a3b8; }
        .popup-h2h-seg.away { background: var(--cl-accent-2, #ec4899); border-radius: 0 3px 3px 0; }
        .popup-h2h-list { margin: 0; padding: 0; list-style: none; }
        .popup-h2h-row { display: grid; grid-template-columns: 1fr auto 1fr; gap: 6px; align-items: center; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 12px; }
        .popup-h2h-team { color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right; }
        .popup-h2h-team.away { text-align: left; }
        .popup-h2h-team.winner { color: #fff; font-weight: 800; }
        .popup-h2h-score { font-weight: 700; color: #cbd5e1; white-space: nowrap; text-align: center; }
        .popup-h2h-date { text-align: center; padding: 2px 0; font-size: 10px; color: #475569; border-bottom: 1px solid rgba(255,255,255,0.04); list-style: none; }
        .popup-close-btn {
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          margin-top: 20px;
          font-weight: 800;
          width: 100%;
          font-size: 14px;
        }
        @media (max-width: 600px) {
          .popup-box { padding: 16px; }
          .popup-logo { width: 52px; height: 52px; }
          .popup-score { font-size: 32px; }
          .popup-score-center { padding-top: 10px; }
          .popup-stats-grid { grid-template-columns: 1fr; }
        }
      </style>
    `}_hasStats(e){return!!e&&Object.keys(e).length>0}_renderPopupStatBox(e,t){const a=t||{};return this._hasStats(a)?i.qy`
      <div class="popup-stat-box">
        <div class="popup-stat-team">${e}</div>
        <div class="popup-stat-row"><span>${this._t("team.possession")}:</span> <strong>${a.possessionPct??"—"}</strong></div>
        <div class="popup-stat-row"><span>${this._t("team.shots")}:</span> <strong>${a.totalShots??"—"}</strong></div>
        <div class="popup-stat-row"><span>${this._t("team.on_target")}:</span> <strong>${a.shotsOnTarget??"—"}</strong></div>
        <div class="popup-stat-row"><span>${this._t("team.fouls")}:</span> <strong>${a.foulsCommitted??"—"}</strong></div>
      </div>
    `:i.qy`<div class="popup-stat-box"><div class="popup-stat-team">${e}</div></div>`}_renderPopupEventGroups(e){const{goals:t,yellowCards:a,redCards:s}=this.separateEvents(e.match_details||[]);if(!t.length&&!a.length&&!s.length)return"";const n=(e,t,a)=>t.length?i.qy`
      <div class="popup-event-group ${a}">
        <h5 class="popup-event-title">${e}</h5>
        <ul class="popup-event-list">${t.map(e=>i.qy`<li>${e}</li>`)}</ul>
      </div>`:"";return i.qy`
      ${n(this._t("event.goal"),t,"goal")}
      ${n(this._t("event.yellow_card"),a,"yellow")}
      ${n(this._t("event.red_card"),s,"red")}
    `}_renderPopupLineup(e){const t=e.lineup_home||[],a=e.lineup_away||[];if(!t.length&&!a.length)return"";const s=(0,v.Ri)(e,{t:(e,t)=>this._t(e,t)});if(s)return i.qy`
        <div class="popup-section popup-section-lineup">
          <h5 class="popup-section-title lineup">${this._t("popup.lineups")}</h5>
          ${s}
        </div>`;const n=(e,t,a)=>{const s=(e||[]).filter(e=>e.starter);return s.length?i.qy`
        <div class="popup-lineup-team">
          <div class="popup-lineup-header">
            <span>${a}</span>
            ${t?i.qy`<span class="popup-formation">${t}</span>`:""}
          </div>
          <div class="popup-lineup-players">
            ${s.map(e=>i.qy`<span class="popup-player">${e.jersey?i.qy`<strong class="popup-jersey">${e.jersey}</strong> `:""}${e.short_name||e.name}</span>`)}
          </div>
        </div>`:""};return i.qy`
      <div class="popup-section popup-section-lineup">
        <h5 class="popup-section-title lineup">${this._t("popup.lineups")}</h5>
        ${n(t,e.formation_home,e.home_team)}
        ${n(a,e.formation_away,e.away_team)}
      </div>`}_renderPopupTimeline(e){const t=(e.key_events||[]).filter(e=>{const t=(e.type_text||"").toLowerCase();return!_._Z.some(e=>t.includes(e))});if(!t.length)return"";const a=e=>{const t=(e.athletes||[]).filter(Boolean);if(t.length)return t.join(", ");const a=_.WY[(e.type_text||"").toLowerCase()];return a?this._t(a):e.type_text||e.short_text||""},s=e=>{const t={goal:"event.goal",yellow:"event.yellow_card",red:"event.red_card",sub:"event.substitution"};return t[e]?i.qy`<span class="popup-tl-badge ${e}">${this._t(t[e])}</span>`:i.qy`<span class="popup-tl-badge meta">·</span>`};return i.qy`
      <div class="popup-section popup-section-timeline">
        <h5 class="popup-section-title timeline">${this._t("popup.timeline")}</h5>
        <ul class="popup-timeline-list">
          ${t.map(e=>{const t=(e=>{const t=(e.type||"").toLowerCase(),a=(e.type_text||"").toLowerCase();return(0,_.UK)(e)?"goal":a.includes("yellow")?"yellow":a.includes("red card")?"red":"substitution"===t||a.includes("substitut")?"sub":"meta"})(e);return i.qy`
              <li class="popup-timeline-item">
                <span class="popup-tl-clock">${e.clock||""}</span>
                ${s(t)}
                <span class="popup-tl-text"><strong>${a(e)}</strong>${e.team?i.qy`<br><span class="popup-tl-team">${e.team}</span>`:""}</span>
              </li>`})}
        </ul>
      </div>`}_renderPopupH2H(e){const t=e.head_to_head||[];if(!t.length)return"";const a=(e.home_team||"").toLowerCase();let r=0,o=0,l=0;t.forEach(e=>{const t=parseInt(e.home_score)||0,i=parseInt(e.away_score)||0;t!==i?((e.home_team||"").toLowerCase().includes(a)||a.includes((e.home_team||"").toLowerCase().split(" ")[0])?t>i:i>t)?r++:l++:o++});const c=r+o+l,d=c?Math.round(r/c*100):33,p=c?Math.round(o/c*100):34,h=100-d-p,u=(0,s.$c)(this.hass,this._config);return i.qy`
      <div class="popup-section popup-section-h2h">
        <h5 class="popup-section-title h2h">${this._t("popup.h2h")} (${t.length})</h5>
        <div class="popup-h2h-summary">
          <span><strong class="popup-h2h-num">${r}</strong> ${e.home_team||""}</span>
          <span class="popup-h2h-draw">${o} ${this._t("match.draw")||"D"}</span>
          <span>${e.away_team||""} <strong class="popup-h2h-num">${l}</strong></span>
        </div>
        <div class="popup-h2h-bar">
          <div class="popup-h2h-seg home" style="width:${d}%"></div>
          <div class="popup-h2h-seg draw" style="width:${p}%"></div>
          <div class="popup-h2h-seg away" style="width:${h}%"></div>
        </div>
        <ul class="popup-h2h-list">
          ${t.slice(0,8).map(e=>{const t=parseInt(e.home_score)||0,a=parseInt(e.away_score)||0,r=(0,s.n1)(e.date),o=r?r.toLocaleDateString(u):"";return i.qy`
              <li class="popup-h2h-row">
                <span class="popup-h2h-team ${t>a?"winner":""}">${e.home_team}</span>
                <span class="popup-h2h-score">${(0,n.Q)(e.home_score,"-")} - ${(0,n.Q)(e.away_score,"-")}</span>
                <span class="popup-h2h-team away ${a>t?"winner":""}">${e.away_team}</span>
              </li>
              <li class="popup-h2h-date">${o}</li>`})}
        </ul>
      </div>`}static get styles(){return[r.G,u.Ng,g.d,d.Mt,c.c,m.zl,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.5);--cl-green:#10b981;--cl-gold:#fbbf24;--cl-gold-text:#fde047;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);--cl-glass-border:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.bg-logos{position:absolute;inset:0;display:flex;justify-content:space-between;align-items:center;pointer-events:none;overflow:hidden;z-index:0;}.bg-logo{width:60%;height:140%;display:flex;align-items:center;opacity:0.09;}.bg-logo.home{justify-content:flex-start;transform:translateX(-30%);}.bg-logo.away{justify-content:flex-end;transform:translateX(30%);}.bg-logo img{width:100%;object-fit:contain;}.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.20),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(var(--cl-accent-2-rgb),0.20),transparent 50%);pointer-events:none;z-index:1;}ha-card.live .hero-bg{background:radial-gradient(ellipse at 0% 0%,rgba(239,68,68,0.25),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(251,191,36,0.20),transparent 50%);animation:hero-pulse 3s ease-in-out infinite;}@keyframes hero-pulse{0%,100%{opacity:1;}50%{opacity:0.6;}}.top-bar,.scoreboard,.stats-row,.meta-row{position:relative;z-index:2;}.top-bar{position:relative;z-index:2;}.status-badge{flex-shrink:0;padding:5px 11px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;}.status-badge.live{background:linear-gradient(135deg,var(--cl-live),#f97316);color:white;box-shadow:0 4px 16px var(--cl-live-glow);animation:badge-pulse 2s ease-in-out infinite;}.status-badge.live .dot{width:6px;height:6px;border-radius:50%;background:white;animation:pulse-dot 1.2s ease-in-out infinite;}.status-badge.finished{background:linear-gradient(135deg,var(--cl-green),#059669);color:white;}.status-badge.scheduled{background:var(--cl-card-2);border:1px solid var(--cl-glass-border);color:var(--cl-text);}@keyframes badge-pulse{0%,100%{box-shadow:0 4px 16px var(--cl-live-glow);}50%{box-shadow:0 4px 24px var(--cl-live-glow),0 0 32px var(--cl-live-glow);}}@keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.7);}}.scoreboard{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:10px;padding:28px 18px 22px;}.team-side{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;min-width:0;}.team-logo-wrap{position:relative;width:80px;height:80px;display:flex;align-items:center;justify-content:center;}.team-logo-wrap::before{content:'';position:absolute;inset:-8px;background:radial-gradient(circle,rgba(var(--cl-accent-rgb),0.22),transparent 70%);border-radius:50%;animation:logo-glow 4s ease-in-out infinite;}.team-logo-big{position:relative;width:72px;height:72px;object-fit:contain;filter:drop-shadow(0 6px 16px rgba(0,0,0,0.25));transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);}.team-logo-fallback{position:relative;display:grid;place-items:center;width:72px;height:72px;border:1px solid var(--cl-chip-border);border-radius:50%;background:var(--cl-chip-bg);color:var(--cl-text);font-size:14px;font-weight:900;}.team-side:hover .team-logo-big{transform:scale(1.1) rotate(-3deg);}@keyframes logo-glow{0%,100%{opacity:0.6;transform:scale(1);}50%{opacity:1;transform:scale(1.15);}}.team-name-big{font-size:13px;font-weight:700;line-height:1.2;max-width:110px;letter-spacing:-0.01em;color:var(--cl-text);}.form-pills{display:flex;gap:3px;padding:3px 7px;background:var(--cl-card-2);border:1px solid var(--cl-glass-border);border-radius:999px;}.record{display:flex;gap:4px;font-size:9px;font-weight:800;letter-spacing:0.04em;}.record .rec{padding:2px 6px;border-radius:4px;font-variant-numeric:tabular-nums;}.record .rec-w{background:rgba(16,185,129,0.18);color:var(--cl-green);}.record .rec-d{background:rgba(245,158,11,0.18);color:#f59e0b;}.record .rec-l{background:rgba(239,68,68,0.18);color:var(--cl-live);}.top-scorer{display:inline-flex;flex-direction:column;align-items:stretch;gap:4px;padding:5px 9px 6px;background:var(--cl-card-2);border:1px solid var(--cl-glass-border);border-radius:10px;font-size:10px;font-weight:700;color:var(--cl-text-2);max-width:150px;}.top-scorer .ts-label{font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-gold);text-align:center;line-height:1;}.top-scorer .ts-row{display:flex;align-items:center;justify-content:center;gap:6px;}.top-scorer .ts-name{max-width:90px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--cl-text);font-size:11px;font-weight:700;}.top-scorer .ts-val{display:inline-flex;align-items:baseline;gap:1px;color:var(--cl-gold);font-weight:800;font-variant-numeric:tabular-nums;font-size:12px;}.top-scorer .ts-unit{font-size:9px;opacity:0.85;}.form-pill{width:14px;height:14px;border-radius:4px;font-size:8px;font-weight:800;color:white;display:flex;align-items:center;justify-content:center;}.form-pill.W{background:linear-gradient(135deg,#10b981,#059669);}.form-pill.L{background:linear-gradient(135deg,#ef4444,#dc2626);}.form-pill.D{background:linear-gradient(135deg,#f59e0b,#d97706);}.score-center{display:flex;flex-direction:column;align-items:center;gap:8px;padding:0 4px;}.score-numbers{font-size:48px;font-weight:900;letter-spacing:-0.04em;font-variant-numeric:tabular-nums;line-height:0.95;background:linear-gradient(180deg,var(--cl-text) 30%,var(--cl-accent));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:score-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) backwards;}.score-numbers .dash{opacity:0.4;font-weight:700;margin:0 4px;}:host([data-score="big"]) .score-numbers{font-size:68px;}:host([data-score="huge"]) .score-numbers{font-size:92px;}:host([data-score="big"]) .score-vs{font-size:38px;}:host([data-score="huge"]) .score-vs{font-size:48px;}.score-vs{font-size:30px;font-weight:800;letter-spacing:0.08em;color:var(--cl-text-2);opacity:0.6;}@keyframes score-pop{0%{opacity:0;transform:scale(0.5);}70%{transform:scale(1.1);}100%{opacity:1;transform:scale(1);}}.clock{font-size:11px;font-weight:700;font-variant-numeric:tabular-nums;display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;color:var(--cl-live);background:rgba(239,68,68,0.12);}.clock .dot{width:5px;height:5px;border-radius:50%;background:currentColor;animation:pulse-dot 1.4s ease-in-out infinite;}.clock.upcoming{color:var(--cl-accent);background:rgba(var(--cl-accent-rgb),0.12);}.clock.upcoming .dot,.clock.finished .dot{animation:none;}.clock.finished{color:var(--cl-green);background:rgba(16,185,129,0.12);}.stats-row{padding:0 18px 18px;display:flex;flex-direction:column;gap:10px;}.stat-bar{display:flex;flex-direction:column;gap:4px;}.stat-bar-label{display:flex;justify-content:space-between;font-size:11px;font-weight:700;}.stat-bar-label .home-val{color:var(--cl-accent);}.stat-bar-label .away-val{color:var(--cl-accent-2);}.stat-bar-label .label-text{text-transform:uppercase;letter-spacing:0.1em;font-size:9px;color:var(--cl-text-2);}.stat-bar-track{height:6px;background:var(--cl-card-2);border-radius:999px;overflow:hidden;display:flex;}.stat-bar-home{height:100%;background:linear-gradient(90deg,var(--cl-accent),var(--cl-accent));border-radius:999px 0 0 999px;transition:width 0.8s cubic-bezier(0.16,1,0.3,1);}.stat-bar-away{height:100%;background:linear-gradient(90deg,var(--cl-accent-2),var(--cl-accent-2));margin-left:auto;border-radius:0 999px 999px 0;transition:width 0.8s cubic-bezier(0.16,1,0.3,1);}.meta-row{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 18px;border-top:1px solid var(--cl-divider);background:var(--cl-card-2);}.info-btn{background:linear-gradient(135deg,var(--cl-accent),var(--cl-accent-2));color:white;border:none;padding:7px 14px;border-radius:999px;font-size:11px;font-weight:800;letter-spacing:0.04em;cursor:pointer;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);box-shadow:0 4px 12px rgba(var(--cl-accent-rgb),0.4);}.info-btn:hover{transform:translateY(-1px) scale(1.04);box-shadow:0 8px 20px rgba(99,102,241,0.6);}.event-toast{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:var(--cl-toast-bg);color:#ffffff;padding:10px 18px;border-radius:14px;font-size:13px;font-weight:800;z-index:100;animation:toast-bounce 4s cubic-bezier(0.16,1,0.3,1) forwards;pointer-events:none;max-width:90%;text-align:center;letter-spacing:-0.01em;text-shadow:0 1px 2px rgba(0,0,0,0.8);}.event-toast.variant-goal{box-shadow:0 0 0 2px var(--cl-gold),0 0 0 4px rgba(251,191,36,0.3),0 12px 40px rgba(0,0,0,0.7),0 0 60px rgba(251,191,36,0.4);}.event-toast.variant-goal strong{color:var(--cl-gold-text);}.event-toast.variant-yellow{box-shadow:0 0 0 2px #f59e0b,0 0 0 4px rgba(245,158,11,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-yellow strong{color:#fbbf24;}.event-toast.variant-red{box-shadow:0 0 0 2px var(--cl-live),0 0 0 4px rgba(239,68,68,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-red strong{color:#fca5a5;}@keyframes toast-bounce{0%{opacity:0;transform:translate(-50%,-20px) scale(0.7);}8%{opacity:1;transform:translate(-50%,0) scale(1.08);}14%{transform:translate(-50%,0) scale(1);}90%{opacity:1;transform:translate(-50%,0) scale(1);}100%{opacity:0;transform:translate(-50%,-10px) scale(0.95);}}.upcoming-list{border-top:1px solid var(--cl-divider);padding:10px 16px 14px;}.upcoming-list-title{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-text-2);margin-bottom:8px;}.upcoming-row{display:grid;grid-template-columns:52px 1fr 45px 1fr;align-items:center;gap:6px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:12px;}.upcoming-row:last-child{border-bottom:none;}.upcoming-date{font-size:11px;font-weight:700;color:var(--cl-accent);font-variant-numeric:tabular-nums;display:flex;flex-direction:column;line-height:1.3;flex-shrink:0;white-space:nowrap;min-width:52px;}.upcoming-date-day{font-size:9px;font-weight:600;color:var(--cl-text-2);}.upcoming-team{display:flex;align-items:center;gap:5px;font-weight:600;color:var(--cl-text);min-width:0;overflow:hidden;}.upcoming-team.home-side{justify-content:flex-end;}.upcoming-team.away-side{justify-content:flex-start;}.upcoming-team img{width:18px;height:18px;object-fit:contain;flex-shrink:0;}.upcoming-team.tracked .abbrev-badge{font-weight:800;box-shadow:inset 0 -2px 0 var(--cl-accent-visible,var(--cl-accent,#6366f1));}.upcoming-row.clickable{cursor:pointer;}.upcoming-row.clickable:hover{background:var(--cl-card-2);border-radius:8px;}.prev-comp-label{color:var(--cl-accent);opacity:0.75;font-size:8px;letter-spacing:0.04em;text-transform:uppercase;display:block;max-width:68px;line-height:1.15;white-space:normal;overflow-wrap:anywhere;}.upl-comp-label{color:var(--cl-text-2);font-size:8px;letter-spacing:0.03em;text-transform:uppercase;display:block;max-width:68px;line-height:1.15;white-space:normal;overflow-wrap:anywhere;}.upl-opp-form{grid-column:1 / -1;display:flex;gap:2px;margin-top:-3px;padding-bottom:2px;}.upl-opp-form.side-right{justify-content:flex-end;}.upl-opp-form.side-left{justify-content:flex-start;padding-left:58px;}.upl-fd{width:5px;height:5px;border-radius:50%;}.upl-fd.w{background:var(--cl-green);}.upl-fd.l{background:var(--cl-live);}.upl-fd.d{background:var(--cl-text-2);opacity:0.6;}.form-trend-section{border-top:1px solid var(--cl-divider);padding:10px 16px 8px;}.form-trend-row{display:flex;align-items:center;gap:10px;margin-top:6px;}.form-trend-dots{display:flex;gap:4px;flex-wrap:wrap;}.ft-dot{width:20px;height:20px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:white;flex-shrink:0;}.ft-dot.w{background:var(--cl-green);}.ft-dot.d{background:var(--cl-gold);color:rgba(0,0,0,0.7);}.ft-dot.l{background:var(--cl-live);}.form-trend-summary{font-size:10px;font-weight:700;color:var(--cl-text-2);white-space:nowrap;flex-shrink:0;}.prev-score{font-size:12px;font-weight:900;color:var(--cl-text-2);text-align:center;min-width:32px;font-variant-numeric:tabular-nums;}.prev-score.home-win{color:var(--cl-green);}.prev-score.away-win{color:var(--cl-live);}.prev-score.tw{color:var(--cl-green);}.prev-score.tl{color:var(--cl-live);}.prev-score.draw{color:var(--cl-text-2);}.upcoming-live-score{font-size:12px;font-weight:900;color:var(--cl-live);text-align:center;min-width:16px;font-variant-numeric:tabular-nums;display:flex;align-items:center;gap:2px;}.live-dot{font-size:7px;animation:live-blink 1s ease-in-out infinite;}@keyframes live-blink{0%,100%{opacity:1}50%{opacity:0.2}}.team-name-big.my-team{background:linear-gradient(135deg,var(--cl-text),var(--cl-accent));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}.upcoming-vs{font-size:11px;font-weight:700;color:var(--cl-text-2);text-align:center;}.abbrev-badge{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;color:var(--cl-text,#f8fafc);letter-spacing:0.01em;min-width:0;}.abbrev-badge::before{content:'';width:7px;height:7px;border-radius:2px;background:var(--team-c,var(--cl-accent,#6366f1));flex-shrink:0;}.abbrev-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px;}.h2h-section{border-top:1px solid var(--cl-divider);padding:10px 16px 14px;}.h2h-summary{display:flex;justify-content:space-between;align-items:center;font-size:11px;margin-bottom:6px;color:var(--cl-text-2);}.h2h-summary-num{font-size:20px;font-weight:800;color:var(--cl-text);}.h2h-summary-label{font-size:10px;text-align:center;color:var(--cl-text-2);}.h2h-bar{display:flex;height:5px;border-radius:3px;overflow:hidden;gap:2px;margin-bottom:10px;}.h2h-bar-seg.home{background:var(--cl-accent);border-radius:3px 0 0 3px;}.h2h-bar-seg.draw{background:var(--cl-text-2);opacity:0.4;}.h2h-bar-seg.away{background:var(--cl-accent-2);border-radius:0 3px 3px 0;}.h2h-row{display:flex;align-items:center;gap:6px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:11px;}.h2h-row:last-child{border-bottom:none;}.h2h-date{font-size:10px;font-weight:600;color:var(--cl-text-2);min-width:44px;flex-shrink:0;}.h2h-team{flex:1;font-weight:600;color:var(--cl-text-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.h2h-team.away{text-align:right;}.h2h-team.winner{color:var(--cl-text);font-weight:800;}.h2h-score{font-size:12px;font-weight:800;color:var(--cl-text);flex-shrink:0;text-align:center;min-width:36px;font-variant-numeric:tabular-nums;}ha-card.goal-flash{animation:card-goal-flash 1.6s cubic-bezier(0.16,1,0.3,1);}@keyframes card-goal-flash{0%{box-shadow:0 4px 24px rgba(0,0,0,0.15);}20%{box-shadow:0 0 0 4px var(--cl-accent),0 0 60px 20px var(--cl-accent),0 4px 24px rgba(0,0,0,0.15);}50%{box-shadow:0 0 0 2px var(--cl-accent-2),0 0 40px 10px var(--cl-accent-2),0 4px 24px rgba(0,0,0,0.15);}100%{box-shadow:0 4px 24px rgba(0,0,0,0.15);}}.score-numbers.goal-scored{animation:score-goal-pop 1.2s cubic-bezier(0.34,1.56,0.64,1);}@keyframes score-goal-pop{0%{transform:scale(1);}20%{transform:scale(1.4);filter:drop-shadow(0 0 30px var(--cl-accent));}40%{transform:scale(0.95);}60%{transform:scale(1.15);}100%{transform:scale(1);}}.team-logo-big.scorer-bounce{animation:scorer-bounce 1.2s cubic-bezier(0.34,1.56,0.64,1);}@keyframes scorer-bounce{0%{transform:scale(1) rotate(0deg);}25%{transform:scale(1.3) rotate(-15deg);}50%{transform:scale(1.1) rotate(10deg);}75%{transform:scale(1.2) rotate(-5deg);}100%{transform:scale(1) rotate(0deg);}}.goal-banner{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:50;overflow:hidden;}.goal-banner::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,var(--cl-overlay-strong) 0%,var(--cl-overlay-soft) 40%,transparent 70%);animation:banner-backdrop 1.6s ease-out forwards;}@keyframes banner-backdrop{0%{opacity:0;}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;}}.goal-banner-text{position:relative;font-size:84px;font-weight:900;letter-spacing:-0.06em;color:var(--cl-gold-text);-webkit-text-stroke:2px #1a0f00;text-shadow:0 0 24px rgba(251,191,36,1),0 0 48px rgba(251,191,36,0.7),0 6px 0 #b45309,0 8px 24px rgba(0,0,0,0.6);animation:goal-text-blast 1.6s cubic-bezier(0.16,1,0.3,1) forwards;transform-origin:center;}@keyframes goal-text-blast{0%{opacity:0;transform:scale(0.3) rotate(-8deg);}20%{opacity:1;transform:scale(1.15) rotate(-3deg);}40%{transform:scale(0.95) rotate(2deg);}60%{transform:scale(1.05) rotate(0deg);}80%{opacity:1;transform:scale(1) rotate(0deg);}100%{opacity:0;transform:scale(1.3) rotate(0deg);}}.goal-flash-overlay{position:absolute;inset:0;background:radial-gradient(circle at center,rgba(251,191,36,0.25),transparent 70%);pointer-events:none;z-index:49;animation:flash-overlay 1s ease-out forwards;}@keyframes flash-overlay{0%{opacity:0;}20%{opacity:1;}100%{opacity:0;}}.confetti{position:absolute;top:20px;left:50%;width:8px;height:8px;pointer-events:none;z-index:99;animation:confetti-fly 1.8s ease-out forwards;}@keyframes confetti-fly{0%{transform:translate(-50%,0) rotate(0deg);opacity:1;}100%{transform:translate(calc(-50% + var(--dx)),var(--dy)) rotate(720deg);opacity:0;}}@media (max-width:600px){ha-card{padding:12px !important;}.hero{padding:14px 10px 12px !important;}.team-logo{width:40px !important;height:40px !important;}.team-name{font-size:12px !important;}.score{font-size:32px !important;letter-spacing:4px !important;}.vs-text{font-size:18px !important;}.stat-val{font-size:11px !important;min-width:24px !important;}.stat-label{font-size:9px !important;}.comp-logo{width:14px !important;height:14px !important;}.comp-name{font-size:10px !important;}.meta{font-size:10px !important;padding:8px 12px !important;}.events{max-height:180px !important;}.event-row{padding:4px 0 !important;font-size:11px !important;}.event-min{font-size:10px !important;}.form-indicator{width:18px !important;height:18px !important;font-size:10px !important;}}@media (max-width:400px){.score{font-size:28px !important;letter-spacing:2px !important;}.team-name{font-size:11px !important;max-width:70px !important;}.event-icon{font-size:12px !important;}}ha-card.compact .team-logo-big{width:48px !important;height:48px !important;}ha-card.compact .team-name-big{font-size:12px !important;}ha-card.compact .scoreboard{padding:12px 16px !important;}ha-card.compact .score-num{font-size:36px !important;letter-spacing:4px !important;}ha-card.compact .standing-summary{display:none;}ha-card.compact .form-dots-row{display:none;}ha-card.compact .top-scorer-row{display:none;}ha-card.compact .smm-chips{display:none;}ha-card.compact .meta-row{padding:8px 14px !important;}`]}}customElements.get("soccer-live-team")||customElements.define("soccer-live-team",y)},2864(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(5186),r=a(2007);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[r.yj,i.AH`.hint{font-size:11px;color:var(--secondary-text-color);}`]}setConfig(e){this._config={...e}}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("all_mixed")).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_numberChanged(e){const t=parseInt(e.target.value,10);isNaN(t)||this._fire({...this._config,[e.target.dataset.configValue]:t})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <p class="hint">${this._t("editor.hint_team_competitions_sensor")}</p>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("editor.team_name")}</label>
          <input type="text" .value=${this._config.team_name||""} data-config-value="team_name" @input=${this._textChanged} placeholder="${this._t("editor.my_team_hint")}">
        </div>
        <div>
          <label class="field-label">${this._t("editor.default_competition")}</label>
          <input type="text" .value=${this._config.default_comp||""} data-config-value="default_comp" @input=${this._textChanged} placeholder="${this._t("editor.default_competition_hint")}">
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-team-competitions-editor")||customElements.define("soccer-live-team-competitions-editor",o)},184(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8657),r=a(6755),o=a(8429),l=a(5247),c=a(4522),d=a(226),p=a(7554),h=a(1448),u=a(5151);class g extends i.WF{static get properties(){return{hass:{},_config:{},_selectedComp:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this._selectedComp=e.default_comp||null,(0,o.K)(this,e)}getCardSize(){return 5}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-team-competitions-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_all_mixed_"}}_selectComp(e){this._selectedComp=e,this.requestUpdate()}_validText(e){return e&&"N/A"!==e?e:""}_sortByDateAsc(e,t){return((0,u.Ot)(e)??1/0)-((0,u.Ot)(t)??1/0)}_groupByCompetition(e){const t={};for(const a of e){const e=this._validText(a.league_name)||this._validText(a.competition_name)||"Other";t[e]||(t[e]={key:e,name:(0,h.VR)(e,(0,s.$c)(this.hass,this._config)),logo:(0,h.rn)({competitionName:e,competitionLogo:this._validText(a.league_logo)||this._validText(a.competition_logo),fallbackLogo:null,isFriendly:a.is_friendly}),all:[]});const i=(0,u.oD)(a);t[e].all.some(e=>(0,u.oD)(e)===i)||t[e].all.push(a)}return Object.values(t).map(e=>{const t=e.all.find(e=>"in"===e.state),a=e.all.filter(e=>"pre"===e.state).sort((e,t)=>this._sortByDateAsc(e,t))[0],i=e.all.filter(e=>"post"===e.state).sort((e,t)=>this._sortByDateAsc(e,t)),s=[...i].reverse().find(e=>null!==(0,u.Ot)(e))||i[i.length-1],n=t||a||s||e.all[0],r=e.all.filter(e=>"pre"===e.state).sort((e,t)=>this._sortByDateAsc(e,t));return{...e,featured:n,previous:i,last:s,upcoming:r}}).filter(e=>e.featured).sort((e,t)=>{const a=e=>"in"===e.featured.state?0:"pre"===e.featured.state?1:2;return a(e)-a(t)})}_computeForm(e,t){if(!t)return[];const a=t.toLowerCase();return e.filter(e=>"post"===e.state).sort((e,t)=>this._sortByDateAsc(e,t)).slice(-5).map(e=>{const t=e.home_team?.toLowerCase().includes(a)||e.home_team?.toLowerCase()===a,i=Number.parseInt(e.home_score,10),s=Number.parseInt(e.away_score,10);return Number.isFinite(i)&&Number.isFinite(s)?t?i>s?"W":i<s?"L":"D":s>i?"W":s<i?"L":"D":null}).filter(Boolean)}_getStanding(e,t){if(!e||!t)return"";const a=t.toLowerCase(),i=e.home_team?.toLowerCase().includes(a);return(0,r.y)(e,i?"home":"away",e=>this._t(e))}_renderForm(e){if(!e.length)return"";const t={W:"form-w",D:"form-d",L:"form-l"};return i.qy`<div class="form-row">${e.map(e=>i.qy`<span class="form-dot ${t[e]}">${e}</span>`)}</div>`}_renderMatch(e,t){if(!e)return"";const a="in"===e.state,s="post"===e.state;return i.qy`
      <div class="match-row">
        ${t?i.qy`<span class="match-label">${t}</span>`:""}
        <div class="match-teams">
          <div class="team-side">
            ${e.home_logo?i.qy`<img class="tm-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="tm-name">${e.home_team||"?"}</span>
          </div>
          <div class="match-score">
            ${a?i.qy`<span class="live-badge"><span class="live-dot"></span>${e.clock||this._t("status.live")}</span>`:""}
            ${a||s?i.qy`<span class="score-text">${(0,n.Q)(e.home_score)}–${(0,n.Q)(e.away_score)}</span>`:i.qy`<span class="date-text">${e.date||this._t("match.vs")}</span>`}
            ${s?i.qy`<span class="ft-badge">${this._t("status.full_time")}</span>`:""}
          </div>
          <div class="team-side right">
            <span class="tm-name">${e.away_team||"?"}</span>
            ${e.away_logo?i.qy`<img class="tm-logo" src="${e.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          </div>
        </div>
      </div>
    `}render(){if((0,o.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=l.Q.get(e);if(!t?.data?.matches)return(0,c.PA)("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else a=t.attributes,l.Q.set(e,a);else{const t=l.Q.get(e);if(!t?.data?.matches)return(0,c.PA)("⚠️",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}const s=a.matches||[];if(!s.length)return(0,c._$)(a,e=>this._t(e),()=>(0,c.QG)("🗂️",this._t("ui.no_competition_data"),this._t("ui.no_competition_hint"),""));const n=this._groupByCompetition(s),r=n.find(e=>e.key===this._selectedComp)||n[0],h=this._config.team_name||a.team_name||"",u=a.team_logo&&"N/A"!==a.team_logo?a.team_logo:null,g=r.featured,m=this._computeForm(r.all,h),f=this._getStanding(r.last||g,h),_=r.last,b=r.upcoming[0];return i.qy`
      <ha-card>
        ${(0,p.t)(g.home_logo,g.away_logo)}
        <div class="card-content">
        ${this._config.hide_header?"":(0,d.t7)({logo:u,title:h||"Team",badge:n.length>1?(0,d.N)(`${n.length}`,"neutral"):null,fallbackIcon:"🗂️"})}

        ${n.length>1?i.qy`
          <div class="comp-tabs">
            ${n.map(e=>i.qy`
              <span class="comp-tab ${e.key===r.key?"active":""}" @click=${()=>this._selectComp(e.key)}>
                ${e.logo?i.qy`<img class="tab-logo" src="${e.logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
                ${"Other"===e.name?this._t("generic.other"):e.name}
              </span>
            `)}
          </div>
        `:""}

        <div class="comp-body">
          ${"Other"!==r.name||r.logo||f?i.qy`
            <div class="comp-header">
              ${r.logo?i.qy`<img class="comp-icon" src="${r.logo}" alt="">`:""}
              ${"Other"!==r.name?i.qy`<span class="comp-name">${r.name}</span>`:""}
              ${f?i.qy`<span class="standing-pill">${f}</span>`:""}
            </div>
          `:""}

          ${"in"===g.state||"post"===g.state?this._renderMatch(g,null):this._renderMatch(g,this._t("team.next_match"))}

          ${m.length?this._renderForm(m):""}

          ${"in"!==g.state&&"pre"!==g.state||!_?"":i.qy`
            <div class="divider"></div>
            ${this._renderMatch(_,this._t("status.finished"))}
          `}

          ${"post"!==g.state&&"in"!==g.state||!b?"":i.qy`
            <div class="divider"></div>
            ${this._renderMatch(b,this._t("team.next_match"))}
          `}
        </div>
        </div>
      </ha-card>
    `}static get styles(){return[o.G,p.M,d.Ng,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:20px;overflow:hidden;}.comp-tabs{display:flex;gap:4px;padding:8px 12px;overflow-x:auto;border-bottom:1px solid var(--cl-divider);scrollbar-width:none;}.comp-tabs::-webkit-scrollbar{display:none;}.comp-tab{display:flex;align-items:center;gap:5px;font-size:11px;font-weight:700;padding:5px 10px;border-radius:99px;cursor:pointer;white-space:nowrap;flex-shrink:0;border:1px solid var(--cl-divider);background:var(--cl-surface);color:var(--cl-text-2);transition:background 0.15s;}.comp-tab.active{background:var(--cl-accent);border-color:var(--cl-accent);color:#fff;}.tab-logo{width:14px;height:14px;object-fit:contain;}.comp-body{padding:12px 16px;display:flex;flex-direction:column;gap:10px;}.comp-header{display:flex;align-items:center;gap:8px;}.comp-icon{width:20px;height:20px;object-fit:contain;}.comp-name{font-size:12px;font-weight:700;color:var(--cl-text-2);flex:1;}.standing-pill{font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;background:var(--cl-surface);color:var(--cl-text-2);}.match-row{display:flex;flex-direction:column;gap:4px;}.match-label{font-size:10px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.05em;}.match-teams{display:flex;align-items:center;gap:8px;}.team-side{display:flex;align-items:center;gap:5px;flex:1;min-width:0;}.team-side.right{flex-direction:row-reverse;}.tm-logo{width:20px;height:20px;object-fit:contain;flex-shrink:0;}.tm-name{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.match-score{display:flex;flex-direction:column;align-items:center;min-width:64px;flex-shrink:0;gap:1px;}.score-text{font-size:16px;font-weight:900;color:var(--cl-text);letter-spacing:1px;}.date-text{font-size:11px;color:var(--cl-text-2);text-align:center;}.ft-badge{font-size:9px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;}.live-badge{font-size:9px;font-weight:700;color:var(--cl-live,#ef4444);display:flex;align-items:center;gap:3px;}.live-dot{width:5px;height:5px;background:var(--cl-live,#ef4444);border-radius:50%;animation:pulse 1s infinite;}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}.form-row{display:flex;gap:4px;justify-content:center;}.form-dot{width:22px;height:22px;border-radius:50%;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;}.form-w{background:var(--cl-win,#22c55e);color:#fff;}.form-d{background:var(--cl-draw,#94a3b8);color:#fff;}.form-l{background:var(--cl-loss,#ef4444);color:#fff;}.divider{height:1px;background:var(--cl-divider);margin:0 -4px;}`]}}customElements.get("soccer-live-team-competitions")||customElements.define("soccer-live-team-competitions",g)},5308(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(5186),r=a(2007);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object}}}static get styles(){return[r.yj,i.AH`.option{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;}`]}setConfig(e){this._config=e}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_inputChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_toggleChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}render(){if(!this._config||!this.hass)return i.qy``;const e=Object.keys(this.hass.states).filter(e=>e.includes("soccer_live_next")||e.includes("soccerlive_next")||e.includes("soccer_live_all_mixed")||e.includes("soccerlive_all_mixed")||["team_match","team_matches_mixed"].includes(this.hass.states[e]?.attributes?.sensor_type)).sort(),t=this._config.entity||"";return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${e.includes(t)?"":i.qy`<option value="${t}" selected>${t||this._t("editor.select")}</option>`}
            ${e.map(e=>i.qy`<option value="${e}" ?selected=${e===t}>${e}</option>`)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("editor.team_name")}</label>
          <label class="field-hint">${this._t("editor.my_team_hint")}</label>
          <input type="text" data-config-value="team_name" .value=${this._config.team_name||""} @input=${this._inputChanged} placeholder=${this._t("editor.my_team_hint")}>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-team-form-editor")||customElements.define("soccer-live-team-form-editor",o)},4884(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8657),r=a(6755),o=a(8429),l=a(5247),c=a(4522),d=a(1979),p=a(226),h=a(7554);class u extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean}}}constructor(){super(),this._isLoading=!0}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,o.K)(this,e),this._isLoading=!0}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}updated(e){if(e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];e&&"unavailable"!==e.state&&(this._isLoading=!1,l.Q.set(this._config.entity,e.attributes))}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}_detectTeam(e){const t={};(e||[]).forEach(e=>{[e.home_team,e.away_team].filter(Boolean).forEach(e=>{t[e]=(t[e]||0)+1})});const a=Object.entries(t).sort((e,t)=>t[1]-e[1]);return a.length&&a[0][1]===e.length?a[0][0]:""}render(){if((0,o.K)(this,this._config),!this.hass||!this._config)return(0,d.bY)(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=l.Q.get(e);if(!t?.data?.previous_matches)return(0,c.PA)("",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else a=t.attributes;else{const t=l.Q.get(e);if(!t?.data?.previous_matches)return(0,c.PA)("",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}return this._isLoading&&!a?(0,d.bY)(this._t("ui.loading")):(a?.previous_matches||[]).length?this._renderCard(a):(0,c._$)(a,e=>this._t(e),()=>(0,c.QG)("",this._t("ui.no_form_data"),this._t("ui.no_form_hint"),""))}_renderCard(e){const t=e.previous_matches||[],a=(e.matches||[])[0],s=e.upcoming_matches||[],o=a&&"pre"===a.state?[a,...s]:s,l=this._config.team_name||e.team_name||this._detectTeam(t)||"",c=l.toLowerCase(),d=c&&a?.home_team?.toLowerCase().includes(c),h=c&&a?.away_team?.toLowerCase().includes(c),u=e.team_logo||(d?a?.home_logo:h?a?.away_logo:null)||a?.home_logo||"",g=h?"away":"home",m=(0,r.y)(a,g,e=>this._t(e)),f=!0===this._config.hide_header,_=[...t].reverse().map(e=>{const t=c&&e.home_team?.toLowerCase().includes(c),a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)?null:a===i?{r:"D",m:e}:{r:t&&a>i||!t&&i>a?"W":"L",m:e}}).filter(Boolean),b=_.filter(e=>"W"===e.r).length,v=_.filter(e=>"D"===e.r).length,x=_.filter(e=>"L"===e.r).length,y=[...t].reverse().map(e=>{const t=c&&e.home_team?.toLowerCase().includes(c),a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)?null:{scored:t?a:i,conceded:t?i:a}}).filter(Boolean),w=(e.matches||[])[0]||{},$=w.last_five_home||w.home_form||"",k=w.last_five_away||w.away_form||"",C=w.home_record_summary||w.home_record||"",S=w.away_record_summary||w.away_record||"",q=Math.max(...y.map(e=>Math.max(e.scored,e.conceded)),1);return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
        ${f?"":(0,p.t7)({logo:u,title:l||this._t("card.team_form"),badge:m?(0,p.N)(m,"neutral"):null})}

        <!-- Form dots -->
        <div class="section">
          <div class="section-label">${this._t("team.form_trend")} (${_.length})</div>
          <div class="form-dots">
            ${_.map(e=>i.qy`<span class="dot ${e.r.toLowerCase()}" title="${e.m.home_team} ${(0,n.Q)(e.m.home_score,"-")}-${(0,n.Q)(e.m.away_score,"-")} ${e.m.away_team}">${e.r}</span>`)}
          </div>
          <div class="wdl-row">
            <span class="wdl w">${b}${this._t("col.wins")}</span>
            <span class="wdl d">${v}${this._t("col.draws")}</span>
            <span class="wdl l">${x}${this._t("col.losses")}</span>
          </div>
        </div>

        <!-- Goals trend bars -->
        ${y.length?i.qy`
          <div class="section">
            <div class="section-label">${this._t("form.goals_per_match")}</div>
            <div class="goal-bars">
              ${y.map(e=>i.qy`
                <div class="goal-col">
                  <div class="bar-wrap">
                    <div class="bar scored"  style="height:${Math.round(e.scored/q*36)}px"></div>
                    <div class="bar conceded" style="height:${Math.round(e.conceded/q*36)}px"></div>
                  </div>
                  <div class="goal-nums">${e.scored}-${e.conceded}</div>
                </div>
              `)}
            </div>
            <div class="goal-legend">
              <span class="leg-dot scored"></span>${this._t("form.scored")}
              <span class="leg-dot conceded"></span>${this._t("form.conceded")}
            </div>
          </div>
        `:""}

        <!-- Home / Away form -->
        ${$||k||C||S?i.qy`
          <div class="section">
            <div class="home-away-grid">
              <div class="ha-col">
                <div class="ha-label">${this._t("form.home")}</div>
                ${C?i.qy`<div class="ha-record">${C}</div>`:""}
                ${$?i.qy`<div class="ha-form">${this._renderFormPills($)}</div>`:""}
              </div>
              <div class="ha-divider"></div>
              <div class="ha-col">
                <div class="ha-label">${this._t("form.away")}</div>
                ${S?i.qy`<div class="ha-record">${S}</div>`:""}
                ${k?i.qy`<div class="ha-form">${this._renderFormPills(k)}</div>`:""}
              </div>
            </div>
          </div>
        `:""}

        <!-- Previous matches list -->
        <div class="section">
          <div class="section-label">${this._t("team.previous_matches")}</div>
          ${t.map(e=>{const t=c&&e.home_team?.toLowerCase().includes(c),a=parseInt(e.home_score),s=parseInt(e.away_score),n=t?a:s,r=t?s:a,o=isNaN(a)||isNaN(s)?null:n>r?"W":n<r?"L":"D";return i.qy`
              <div class="pm-row">
                <span class="pm-date">${(e.date||"").split(" ")[0]}</span>
                <img class="pm-logo" src="${e.home_logo||""}" alt="" @error=${e=>e.target.style.display="none"}>
                <span class="pm-team ${t?"tracked":""}">${e.home_abbrev||e.home_team||"?"}</span>
                <span class="pm-score ${"W"===o?"tracked-win":"L"===o?"tracked-loss":"draw"}">${Number.isFinite(a)?a:"?"}-${Number.isFinite(s)?s:"?"}</span>
                <span class="pm-team right ${t?"":"tracked"}">${e.away_abbrev||e.away_team||"?"}</span>
                <img class="pm-logo" src="${e.away_logo||""}" alt="" @error=${e=>e.target.style.display="none"}>
                ${o?i.qy`<span class="pm-res ${o.toLowerCase()}">${o}</span>`:""}
              </div>
            `})}
        </div>

        <!-- Upcoming -->
        ${o.length?i.qy`
          <div class="section">
            <div class="section-label">${this._t("team.upcoming_matches")}</div>
            ${o.map(e=>i.qy`
              <div class="pm-row">
                <span class="pm-date">${(e.date||"").split(" ")[0]}</span>
                <img class="pm-logo" src="${e.home_logo||""}" alt="" @error=${e=>e.target.style.display="none"}>
                <span class="pm-team">${e.home_abbrev||e.home_team||"?"}</span>
                <span class="pm-score draw">${this._t("match.vs")}</span>
                <span class="pm-team right">${e.away_abbrev||e.away_team||"?"}</span>
                <img class="pm-logo" src="${e.away_logo||""}" alt="" @error=${e=>e.target.style.display="none"}>
              </div>
            `)}
          </div>
        `:""}
        </div>
      </ha-card>
    `}_renderFormPills(e){const t=String(e).replace(/[^WLDwld]/g,"").toUpperCase().split("");return i.qy`${t.map(e=>i.qy`<span class="form-pill ${e.toLowerCase()}">${e}</span>`)}`}getCardSize(){return 5}static getConfigElement(){return document.createElement("soccer-live-team-form-editor")}static getStubConfig(){return{entity:""}}static get styles(){return[o.G,h.M,p.Ng,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);border-radius:20px;overflow:hidden;padding:0;}.section{padding:8px 16px 2px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.section:last-child{border-bottom:none;padding-bottom:8px;}.section-label{font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:6px;}.form-dots{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:4px;}.dot{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;cursor:default;}.dot.w{background:#22c55e;color:#fff;}.dot.d{background:var(--cl-text-2,#64748b);color:#fff;}.dot.l{background:#ef4444;color:#fff;}.wdl-row{display:flex;gap:10px;margin-bottom:4px;font-size:12px;font-weight:700;}.wdl.w{color:#22c55e;}.wdl.d{color:var(--cl-text-2,#94a3b8);}.wdl.l{color:#ef4444;}.goal-bars{display:flex;align-items:flex-end;gap:4px;height:50px;margin-bottom:2px;}.goal-col{display:flex;flex-direction:column;align-items:center;gap:2px;flex:1;}.bar-wrap{display:flex;align-items:flex-end;gap:2px;height:36px;}.bar{width:7px;border-radius:2px 2px 0 0;min-height:2px;}.bar.scored{background:#22c55e;}.bar.conceded{background:#ef4444;opacity:0.7;}.goal-nums{font-size:9px;color:var(--cl-text-2,#94a3b8);}.goal-legend{display:flex;align-items:center;gap:8px;font-size:10px;color:var(--cl-text-2,#94a3b8);margin-top:2px;margin-bottom:4px;}.leg-dot{width:7px;height:7px;border-radius:50%;display:inline-block;}.leg-dot.scored{background:#22c55e;}.leg-dot.conceded{background:#ef4444;opacity:0.7;}.home-away-grid{display:flex;align-items:flex-start;gap:8px;padding-bottom:4px;}.ha-col{flex:1;}.ha-divider{width:1px;background:var(--cl-divider,rgba(255,255,255,0.08));align-self:stretch;}.ha-label{font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;margin-bottom:3px;}.ha-record{font-size:11px;font-weight:700;margin-bottom:3px;}.ha-form{display:flex;gap:3px;flex-wrap:wrap;}.form-pill{width:18px;height:18px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;}.form-pill.w{background:#22c55e;color:#fff;}.form-pill.d{background:var(--cl-text-2,#64748b);color:#fff;}.form-pill.l{background:#ef4444;color:#fff;}.pm-row{display:flex;align-items:center;gap:5px;padding:4px 0;font-size:12px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.04));}.pm-date{font-size:10px;color:var(--cl-text-2,#94a3b8);min-width:42px;}.pm-logo{width:16px;height:16px;object-fit:contain;flex-shrink:0;}.pm-team{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.pm-team.right{text-align:right;}.pm-team.tracked{font-weight:700;}.pm-score{min-width:40px;text-align:center;font-weight:700;font-size:12px;}.pm-score.tracked-win{color:#22c55e;}.pm-score.tracked-loss{color:#ef4444;}.pm-score.draw{color:var(--cl-text-2,#94a3b8);}.pm-res{min-width:18px;height:18px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;flex-shrink:0;}.pm-res.w{background:#22c55e;color:#fff;}.pm-res.d{background:var(--cl-text-2,#64748b);color:#fff;}.pm-res.l{background:#ef4444;color:#fff;}`]}}customElements.get("soccer-live-team-form")||customElements.define("soccer-live-team-form",u)},3847(e,t,a){a.r(t);var i=a(3957),s=a(2738),n=a(2007),r=a(5186);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[n.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}select,input:not([type=checkbox]){width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}.toggle-row{display:flex;align-items:center;gap:10px;font-size:14px;cursor:pointer;}.toggle-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;flex-shrink:0;}`]}setConfig(e){this._config={...e}}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccer_live")||e.includes("soccerlive")).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_t(e,t){return(0,r.t)(e,(0,r.$c)(this.hass,this._config),t)}render(){return this._config?i.qy`
      <div class="card-config">
        <label>${this._t("editor.entity")}</label>
        <select @change=${this._entityChanged}>
          <option value="">— ${this._t("editor.select_entity")} —</option>
          ${this.entities.map(e=>i.qy`
            <option value="${e}" ?selected=${this._config.entity===e}>${e}</option>
          `)}
        </select>

        <label>${this._t("editor.show")}</label>
        <select data-config-value="filter" @change=${this._selectChanged}>
          <option value="" ?selected=${!this._config.filter}>${this._t("editor.all_matches")}</option>
          <option value="live" ?selected=${"live"===this._config.filter}>${this._t("editor.live_only")}</option>
        </select>

        <label>${this._t("editor.competition_filter_optional")}</label>
        <input type="text"
          .value=${this._config.competition_filter||""}
          placeholder=${this._t("editor.competition_filter_example")}
          @change=${e=>{const t=e.target.value.trim(),a={...this._config};t?a.competition_filter=t:delete a.competition_filter,this._fire(a)}}>

        <label class="toggle-row">
          <input type="checkbox" ?checked=${!!this._config.hide_when_empty}
            @change=${e=>this._fire({...this._config,hide_when_empty:e.target.checked})}>
          ${this._t("editor.hide_when_empty")}
        </label>

        <label class="toggle-row">
          <input type="checkbox" ?checked=${!!this._config.auto_scroll}
            @change=${e=>this._fire({...this._config,auto_scroll:e.target.checked})}>
          ${this._t("editor.auto_scroll")}
        </label>

        ${this._config.auto_scroll?i.qy`
          <label>${this._t("editor.scroll_speed")}</label>
          <select data-config-value="scroll_speed" @change=${this._selectChanged}>
            <option value="slow"   ?selected=${"slow"===this._config.scroll_speed}>${this._t("editor.speed_slow")}</option>
            <option value="normal" ?selected=${!this._config.scroll_speed||"normal"===this._config.scroll_speed}>${this._t("editor.speed_normal")}</option>
            <option value="fast"   ?selected=${"fast"===this._config.scroll_speed}>${this._t("editor.speed_fast")}</option>
          </select>
        `:""}

        ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
      </div>
    `:i.qy``}}customElements.get("soccer-live-ticker-editor")||customElements.define("soccer-live-ticker-editor",o)},9837(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8657),r=a(8429),o=a(5247),l=a(4522),c=a(1448),d=a(5151);class p extends i.WF{static get properties(){return{hass:{},_config:{},_sel:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,r.K)(this,e),this._sel=null}getCardSize(){return 1}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-ticker-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_all_today",card_type:"ticker"}}_formatMatchTime(e){return(0,s.DK)(e,(0,s.$c)(this.hass,this._config))||"vs"}_isSel(e){return this._sel&&this._sel.home_team===e.home_team&&this._sel.away_team===e.away_team}_toggleSel(e){this._sel=this._isSel(e)?null:e}_renderItem(e){const t="in"===e.state,a="post"===e.state,r=this._isSel(e),o=e.league_name&&"N/A"!==e.league_name?(0,c.VR)(e.league_name,(0,s.$c)(this.hass,this._config)):null;return i.qy`
      <div class="tick-item ${t?"live":""} ${a?"ft":""} ${r?"selected":""}"
           @click=${()=>this._toggleSel(e)}>
        <div class="tick-team">
          ${e.home_logo?i.qy`<img class="tick-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="tick-name">${e.home_team||"?"}</span>
        </div>
        <div class="tick-mid">
          ${t?i.qy`<span class="tick-live"><span class="live-dot"></span>${e.clock||""}</span>`:""}
          ${t||a?i.qy`<span class="tick-score">${(0,n.Q)(e.home_score)}–${(0,n.Q)(e.away_score)}</span>`:i.qy`<span class="tick-time">${this._formatMatchTime(e.date)}</span>`}
          ${a?i.qy`<span class="tick-ft">${this._t("status.ft")}</span>`:""}
        </div>
        <div class="tick-team">
          ${e.away_logo?i.qy`<img class="tick-logo" src="${e.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="tick-name">${e.away_team||"?"}</span>
        </div>
        ${o?i.qy`<div class="tick-comp">${o}</div>`:""}
      </div>
    `}_renderDetail(){const e=this._sel;if(!e)return"";const t="in"===e.state,a="post"===e.state,r=e.league_name&&"N/A"!==e.league_name?(0,c.VR)(e.league_name,(0,s.$c)(this.hass,this._config)):null;return i.qy`
      <div class="tick-detail">
        <div class="td-row">
          <div class="td-side">
            ${e.home_logo?i.qy`<img class="td-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="td-name">${e.home_team||"?"}</span>
          </div>
          <div class="td-center">
            ${t?i.qy`
              <span class="td-live"><span class="live-dot"></span>${e.clock||""}</span>
              <span class="td-score">${(0,n.Q)(e.home_score)}–${(0,n.Q)(e.away_score)}</span>
            `:a?i.qy`
              <span class="td-score">${(0,n.Q)(e.home_score)}–${(0,n.Q)(e.away_score)}</span>
              <span class="td-ft">${this._t("status.ft")}</span>
            `:i.qy`
              <span class="td-time">${this._formatMatchTime(e.date)}</span>
            `}
          </div>
          <div class="td-side right">
            <span class="td-name">${e.away_team||"?"}</span>
            ${e.away_logo?i.qy`<img class="td-logo" src="${e.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          </div>
        </div>
        ${r?i.qy`<div class="td-comp">${r}</div>`:""}
        <button class="td-close" @click=${()=>this._sel=null} aria-label=${this._t("generic.close")} title=${this._t("generic.close")}>
          <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/></svg>
        </button>
      </div>
    `}render(){if(!this.hass||!this._config)return i.qy``;const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=o.Q.get(e);if(!t?.data?.matches)return(0,l.PA)("📡",this._t("ui.sensor_unavailable"),"",this._t("ui.restart_ha"));a=t.data}else a=t.attributes,o.Q.set(e,a);else{const t=o.Q.get(e);if(!t?.data?.matches)return(0,l.PA)("⚠️",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}const s=a.matches||[];if(!s.length)return(0,l._$)(a,e=>this._t(e),()=>i.qy`<ha-card><div class="empty">${this._t("ui.no_match_data")}</div></ha-card>`);const n=(0,d.NM)(s);let r="live"===this._config.filter?n.filter(e=>"in"===e.state):n;const c=this._config.competition_filter?.toLowerCase();if(c){const e=r.filter(e=>(e.competition_name||e.league_name||"").toLowerCase().includes(c));e.length&&(r=e)}if(!r.length)return this._config.hide_when_empty?i.qy`<style>:host{display:none!important}</style>`:i.qy`<ha-card><div class="empty">${this._t("ui.no_live_match")}</div></ha-card>`;const p=this._config.auto_scroll&&r.length>1,h={slow:28,normal:55,fast:110}[this._config.scroll_speed||"normal"]??55,u=Math.round(176*r.length/h),g=p?[...r,...r]:r;return i.qy`
      <ha-card>
        <div class="ticker-wrap ${p?"auto":""} ${this._sel?"paused":""}">
          <div class="ticker-scroll" style="${p?`animation-duration:${u}s`:""}">
            ${g.map(e=>this._renderItem(e))}
          </div>
        </div>
        ${this._renderDetail()}
      </ha-card>
    `}static get styles(){return[r.G,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:16px;overflow:hidden;}.ticker-wrap{overflow-x:auto;scrollbar-width:none;padding:5px 6px;}.ticker-wrap::-webkit-scrollbar{display:none;}.ticker-wrap.auto{overflow-x:hidden;}.ticker-scroll{display:flex;gap:6px;width:max-content;}.ticker-wrap.auto .ticker-scroll{animation:ticker-slide linear infinite;}.ticker-wrap.auto:hover .ticker-scroll,.ticker-wrap.paused .ticker-scroll{animation-play-state:paused;}@keyframes ticker-slide{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}.tick-item{display:flex;flex-direction:column;gap:1px;padding:5px 8px;background:var(--cl-surface);border:1px solid var(--cl-divider);border-radius:10px;width:155px;flex-shrink:0;box-sizing:border-box;cursor:pointer;transition:border-color 0.15s,background 0.15s;}.tick-item:hover{border-color:var(--cl-accent,#60a5fa);}.tick-item.selected{border-color:var(--cl-accent,#60a5fa);background:rgba(96,165,250,0.08);}.tick-item.live{border-color:rgba(239,68,68,0.5);background:rgba(239,68,68,0.07);}.tick-item.live.selected{border-color:var(--cl-live,#ef4444);background:rgba(239,68,68,0.14);}.tick-item.ft{opacity:0.72;}.tick-team{display:flex;align-items:center;gap:5px;min-width:0;}.tick-logo{width:14px;height:14px;object-fit:contain;flex-shrink:0;}.tick-name{font-size:11px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;}.tick-mid{display:flex;align-items:center;justify-content:center;gap:4px;padding:1px 0;}.tick-score{font-size:13px;font-weight:900;letter-spacing:0.5px;color:var(--cl-text);}.tick-item.live .tick-score{color:var(--cl-live,#ef4444);}.tick-time{font-size:10px;font-weight:600;color:var(--cl-accent,#60a5fa);}.tick-ft{font-size:8px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.5px;border:1px solid var(--cl-divider);border-radius:3px;padding:0 2px;}.tick-live{font-size:8px;font-weight:700;color:var(--cl-live,#ef4444);display:flex;align-items:center;gap:2px;}.live-dot{width:4px;height:4px;background:var(--cl-live,#ef4444);border-radius:50%;animation:pulse 1s infinite;}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}.tick-comp{font-size:8px;color:var(--cl-text-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;opacity:0.7;}.tick-detail{position:relative;padding:8px 12px 10px;border-top:1px solid var(--cl-divider);background:var(--cl-surface);}.td-row{display:flex;align-items:center;gap:8px;}.td-side{flex:1;display:flex;align-items:center;gap:6px;min-width:0;}.td-side.right{flex-direction:row-reverse;}.td-logo{width:20px;height:20px;object-fit:contain;flex-shrink:0;}.td-name{font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;}.td-side.right .td-name{text-align:right;}.td-center{display:flex;flex-direction:column;align-items:center;gap:1px;flex-shrink:0;}.td-score{font-size:18px;font-weight:900;letter-spacing:1px;color:var(--cl-text);}.td-live{font-size:9px;font-weight:700;color:var(--cl-live,#ef4444);display:flex;align-items:center;gap:3px;}.td-ft{font-size:8px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.5px;}.td-time{font-size:12px;font-weight:700;color:var(--cl-accent,#60a5fa);}.td-comp{font-size:10px;color:var(--cl-text-2);text-align:center;margin-top:4px;opacity:0.7;}.td-close{position:absolute;top:6px;right:8px;background:none;border:none;cursor:pointer;font-size:12px;color:var(--cl-text-2);line-height:1;padding:2px 4px;border-radius:4px;transition:color 0.1s;}.td-close:hover{color:var(--cl-text);}.empty{padding:14px 16px;color:var(--cl-text-2);font-size:13px;text-align:center;}`]}}customElements.get("soccer-live-ticker")||customElements.define("soccer-live-ticker",p)},4965(e,t,a){a.r(t);var i=a(3957),s=a(2007),n=a(5186),r=a(2738);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}.hint{font-size:12px;color:var(--secondary-text-color);}`}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,n.t)(e,(0,n.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||"team_match"===this.hass.states[e]?.attributes?.sensor_type).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")} (soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
          <div class="hint" style="margin-top: 4px;">${this._t("timeline.empty.sub")}</div>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.reverse_order")}</label>
          <ha-switch
            .checked=${!0===this._config.reverse_order}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-timeline-editor")||customElements.define("soccer-live-timeline-editor",o)},4391(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8429),r=a(226),o=a(5360),l=a(7554),c=a(1448),d=a(4522),p=a(8657);class h extends i.WF{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,n.K)(this,e),this.hideHeader=!0===e.hide_header,this.reverseOrder=!0===e.reverse_order}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}getCardSize(){return 5}static getConfigElement(){return document.createElement("soccer-live-timeline-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next",hide_header:!1,reverse_order:!0}}_getEventInfo(e){const t=this._config&&!0===this._config.debug,a=(0,o.tU)(e);if(!a)return t&&e&&(e.type||e.type_text)&&console.debug("[soccer-live] timeline: skipped event",e.type||e.type_text),null;t&&!a.known&&console.debug("[soccer-live] timeline: unrecognised event shown neutrally",e.type||e.type_text);const i=a.athletes.length?a.athletes.join(", "):a.i18nKey?this._t(a.i18nKey):a.fallbackText;return{btype:a.btype,text:i}}render(){if((0,n.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.matches||[];if(0===t.length)return(0,d._$)(e.attributes,e=>this._t(e),()=>i.qy`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`);const a=t[0],o=(a.key_events||e.attributes.key_events||[]).map(e=>({ev:e,info:this._getEventInfo(e)})).filter(e=>null!==e.info);if(0===o.length)return i.qy`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">⏱</div>
            <div class="empty-title">${this._t("timeline.empty.title")}</div>
            <div class="empty-sub">${this._t("timeline.empty.sub")}</div>
          </div>
        </ha-card>
      `;const l=this.reverseOrder?[...o].reverse():o,h=e=>{const t={goal:"event.goal",yellow:"event.yellow_card",red:"event.red_card",sub:"event.substitution"};return t[e]?i.qy`<span class="tl-badge ${e}">${this._t(t[e])}</span>`:i.qy`<span class="tl-badge meta">·</span>`};return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":i.qy`
          ${(0,r.t7)({logo:(0,c.rn)({competitionName:a.competition_name||a.league_name||e.attributes.league_name,competitionLogo:a.competition_logo||a.league_logo||e.attributes.league_logo,fallbackLogo:null,isFriendly:a.is_friendly}),title:(0,c.VR)(a.competition_name||a.league_name||e.attributes.league_name||this._t("card.timeline"),(0,s.$c)(this.hass,this._config)),badge:"in"===a.state||"post"===a.state?(0,r.N)(`${(0,p.Q)(a.home_score)}–${(0,p.Q)(a.away_score)}`,"in"===a.state?"live":"ft"):(0,r.N)(a.date||"","date"),fallbackIcon:"⏱"})}
        `}

        <div class="tl-body">
          ${l.map(({ev:e,info:t})=>i.qy`
            <div class="tl-row">
              <span class="tl-min">${e.clock||""}</span>
              ${h(t.btype)}
              <div class="tl-text">
                <div class="tl-main">${t.text}</div>
                ${e.team?i.qy`<div class="tl-team">${e.team}</div>`:""}
              </div>
            </div>
          `)}
        </div>
      </ha-card>
    `}static get styles(){return[n.G,l.M,r.Ng,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-live:#ef4444;--cl-green:#10b981;--cl-gold:#fbbf24;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);--cl-glass-border:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.empty-state{display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px;}.empty-icon{font-size:38px;opacity:0.4;}.empty-title{font-weight:800;color:var(--cl-text);}.empty-sub{font-size:12px;color:var(--cl-text-2);}.hero-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.10),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(251,191,36,0.10),transparent 50%);pointer-events:none;}.mini-logo{width:16px;height:16px;object-fit:contain;}.tl-body{position:relative;z-index:1;padding:4px 16px 16px;}.tl-row{display:flex;align-items:flex-start;gap:8px;padding:8px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.tl-row:last-child{border-bottom:none;}.tl-min{min-width:28px;text-align:right;font-size:11px;font-weight:700;color:var(--cl-text-2);padding-top:2px;flex-shrink:0;}.tl-badge{display:inline-block;font-size:8px;font-weight:800;padding:1px 5px;border-radius:3px;text-transform:uppercase;letter-spacing:0.04em;flex-shrink:0;line-height:15px;white-space:nowrap;}.tl-badge.goal{background:rgba(99,102,241,0.18);color:var(--cl-accent,#6366f1);}.tl-badge.yellow{background:rgba(245,158,11,0.18);color:#f59e0b;}.tl-badge.red{background:rgba(239,68,68,0.18);color:#ef4444;}.tl-badge.sub{background:rgba(148,163,184,0.12);color:var(--cl-text-2,#94a3b8);}.tl-badge.meta{background:transparent;color:var(--cl-text-2,#94a3b8);font-size:14px;padding:0 4px;letter-spacing:0;}.tl-text{flex:1;}.tl-main{font-size:12px;font-weight:600;color:var(--cl-text);}.tl-team{font-size:10px;color:var(--cl-text-2);margin-top:2px;}`]}}customElements.get("soccer-live-timeline")||customElements.define("soccer-live-timeline",h)},6082(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(2007),r=a(2738);class o extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[n.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.field-label{display:block;font-size:12px;color:var(--secondary-text-color);margin-bottom:4px;font-weight:600;}select,input[type="number"]{width:100%;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);box-sizing:border-box;}select:focus,input:focus{outline:2px solid var(--primary-color,#03a9f4);outline-offset:-1px;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color);}.hint{font-size:12px;color:var(--secondary-text-color);margin-top:-4px;}`]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=parseInt(t.value,10);isNaN(i)||this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_all")||e.includes("soccer_live_all")).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e),a=this.hass?.states?.[e]?.attributes?.matches||[],s=[...new Set(a.map(e=>e.league_name).filter(Boolean))].sort(),o=[...new Set(a.map(e=>e.season_label).filter(Boolean))].sort().reverse();return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>

        <div>
          <label class="field-label">${this._t("editor.competition_filter")}</label>
          <select data-config-value="filter_competition" @change=${this._selectChanged}>
            <option value="">${this._t("filter.all")}</option>
            ${s.map(e=>i.qy`<option value=${e} ?selected=${this._config.filter_competition===e}>${e}</option>`)}
          </select>
        </div>
        <div>
          <label class="field-label">${this._t("editor.season_filter")}</label>
          <select data-config-value="filter_season" @change=${this._selectChanged}>
            <option value="">${this._t("filter.all")}</option>
            ${o.map(e=>i.qy`<option value=${e} ?selected=${this._config.filter_season===e}>${e}</option>`)}
          </select>
        </div>
        <div>
          <label class="field-label">${this._t("editor.match_filter")}</label>
          <select data-config-value="filter_state" @change=${this._selectChanged}>
            <option value="">${this._t("filter.all")}</option>
            <option value="in" ?selected=${"in"===this._config.filter_state}>${this._t("status.live")}</option>
            <option value="pre" ?selected=${"pre"===this._config.filter_state}>${this._t("filter.upcoming")}</option>
            <option value="post" ?selected=${"post"===this._config.filter_state}>${this._t("filter.finished")}</option>
          </select>
        </div>
        <div>
          <label class="field-label">${this._t("editor.venue_filter")}</label>
          <select data-config-value="filter_venue" @change=${this._selectChanged}>
            <option value="">${this._t("filter.all")}</option>
            <option value="home" ?selected=${"home"===this._config.filter_venue}>${this._t("generic.home")}</option>
            <option value="away" ?selected=${"away"===this._config.filter_venue}>${this._t("generic.away")}</option>
          </select>
        </div>

        <div>
          <label class="field-label">${this._t("editor.my_team")}</label>
          <input type="text" placeholder=${this._t("editor.my_team_hint")}
            .value=${this._config.my_team||""}
            @change=${e=>this._fireConfigChanged({...this._config,my_team:e.target.value})} />
        </div>

        <div class="option">
          <label>${this._t("editor.show_live_ticker")}</label>
          <ha-switch .checked=${!1!==this._config.show_live_ticker}
            data-config-value="show_live_ticker" @change=${this._switchChanged}></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.show_finished")}</label>
          <ha-switch
            .checked=${!1!==this._config.show_finished_matches}
            data-config-value="show_finished_matches"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.hide_broadcasts")}</label>
          <ha-switch
            .checked=${!0===this._config.hide_broadcasts}
            data-config-value="hide_broadcasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.smart_order")}</label>
          <ha-switch
            .checked=${!0===this._config.smart_order||void 0===this._config.smart_order&&"smart"===this.hass?.states?.[this._config.entity]?.attributes?.recommended_match_order}
            data-config-value="smart_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.newest_first")}</label>
          <ha-switch
            .checked=${!0===this._config.reverse_order}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.show_event_toasts")}</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div>
          <label class="field-label">${this._t("editor.max_events_visible")}</label>
          <input
            type="number"
            min="1"
            max="100"
            .value=${this._config.max_events_visible||5}
            data-config-value="max_events_visible"
            @change=${this._numberChanged}
          />
        </div>

        <div>
          <label class="field-label">${this._t("editor.max_events_total")}</label>
          <input
            type="number"
            min="1"
            max="500"
            .value=${this._config.max_events_total||50}
            data-config-value="max_events_total"
            @change=${this._numberChanged}
          />
        </div>

        <div>
          <label class="field-label">${this._t("editor.group_by")}</label>
          <select data-config-value="group_by" @change=${this._selectChanged}>
            <option value="day" ?selected=${!this._config.group_by||"day"===this._config.group_by}>${this._t("editor.group_by_date")}</option>
            <option value="competition" ?selected=${"competition"===this._config.group_by}>${this._t("editor.group_by_competition")}</option>
          </select>
        </div>

        ${!1!==this._config.show_finished_matches?i.qy`
        <div>
          <label class="field-label">${this._t("editor.hide_older_than_days")}</label>
          <input
            type="number"
            min="0"
            max="365"
            .value=${this._config.hide_past_days||0}
            data-config-value="hide_past_days"
            @change=${this._numberChanged}
          />
        </div>
        `:""}
        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,n.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-matches-editor")||customElements.define("soccer-live-matches-editor",o)},2558(e,t,a){a.r(t);var i=a(3957),s=a(5186),n=a(8657),r=a(8429),o=a(226),l=a(5360),c=a(7554),d=a(1448),p=a(6381),h=a(6472),u=a(4522),g=a(7311),m=a(1190),f=a(6755),_=a(5141),b=a(8585),v=a(5151);class x extends i.WF{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_recentEventMatches:{type:Object},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String},_detailsLoading:{type:Boolean},_detailsError:{type:Boolean}}}constructor(){super(),this._recentEventMatches=new Map,this._eventSubscriptions=[],this._cleanupTimers=[],this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null,this._detailsLoading=!1,this._detailsError=!1}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,(0,r.K)(this,e),this.maxEventsVisible=e.max_events_visible?e.max_events_visible:5,this.maxEventsTotal=e.max_events_total?e.max_events_total:50,this.showFinishedMatches=void 0===e.show_finished_matches||e.show_finished_matches,this.hideHeader=void 0!==e.hide_header&&e.hide_header,this.hidePastDays=void 0!==e.hide_past_days?e.hide_past_days:0,this.reverseOrder=!0===e.reverse_order,this.showEventToasts=!0===e.show_event_toasts,this.myTeam=(e.my_team||"").toLowerCase(),this.showLiveTicker=!1!==e.show_live_ticker,this.activeMatch=null,this.showPopup=!1}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._toastTimer&&clearTimeout(this._toastTimer),this._eventSubscriptionGeneration=(this._eventSubscriptionGeneration||0)+1,this._eventSubscriptionPromise=null,this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach(e=>{"function"==typeof e&&e()}),this._eventSubscriptions=[]),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null),this._removePopupPortal(),this._cleanupTimers.forEach(e=>clearTimeout(e)),this._cleanupTimers=[]}_subscribeToEvents(){if(!this.hass||!this.hass.connection)return;if(this._eventSubscriptionPromise||this._eventSubscriptions?.length)return;const e=this._eventSubscriptionGeneration||0,t=this._handleSoccerLiveEvent.bind(this),a=Promise.allSettled(["soccer_live_goal","soccer_live_yellow_card","soccer_live_red_card"].map(e=>this.hass.connection.subscribeEvents(t,e)));this._eventSubscriptionPromise=a,a.then(t=>{const a=t.filter(e=>"fulfilled"===e.status&&"function"==typeof e.value).map(e=>e.value);if((this._eventSubscriptionGeneration||0)!==e||!this.isConnected)return void a.forEach(e=>e());const i=t.filter(e=>"rejected"===e.status);i.length>0?(a.forEach(e=>e()),this._eventSubscriptions=[],i.forEach(e=>console.warn("Soccer Live Matches subscription failed:",e.reason))):this._eventSubscriptions=a}).finally(()=>{this._eventSubscriptionPromise===a&&(this._eventSubscriptionPromise=null)})}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this.hass.states[this._config.entity];return!!t&&(t.attributes.matches||[]).some(t=>t.home_team===e.home_team&&t.away_team===e.away_team)}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;if(!this._eventBelongsToThisCard(a))return;const i=`${a.home_team}_${a.away_team}`;this._recentEventMatches.set(i,"soccer_live_goal"===t?"goal":"card"),this.requestUpdate(),this._cleanupTimers.push(setTimeout(()=>{this._recentEventMatches.delete(i),this.requestUpdate()},5e3)),"soccer_live_goal"===t&&requestAnimationFrame(()=>this._triggerGoalCelebration()),this.showEventToasts&&this._showEventToast(t,a)}_triggerGoalCelebration(){const e=this.shadowRoot&&this.shadowRoot.querySelector("ha-card");if(!e)return;e.querySelectorAll(".confetti").forEach(e=>e.remove());const t=["#ec4899","#6366f1","#06b6d4","#fbbf24","#10b981","#ef4444"],a=["⚽","🎉","✨","🔥","⭐"];for(let i=0;i<28;i++){const i=document.createElement("div");i.className="confetti",Math.random()>.55?(i.textContent=a[Math.floor(Math.random()*a.length)],i.style.fontSize=12+10*Math.random()+"px",i.style.background="transparent"):(i.style.background=t[Math.floor(Math.random()*t.length)],i.style.borderRadius=Math.random()>.5?"50%":"2px"),i.style.setProperty("--dx",380*(Math.random()-.5)+"px"),i.style.setProperty("--dy",200*Math.random()+80+"px"),i.style.animationDelay=.4*Math.random()+"s",e.appendChild(i),setTimeout(()=>i.remove(),2200)}}_showEventToast(e,t){let a="",i="goal";"soccer_live_goal"===e?(a=`${this._t("event.goal").toUpperCase()}! ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,i="goal"):"soccer_live_yellow_card"===e?(a=`🟨 ${this._t("event.yellow_card")} · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="yellow"):"soccer_live_red_card"===e&&(a=`🟥 ${this._t("event.red_card")} · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="red"),a&&(this._toastMessage=a,this._toastVariant=i,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this._toastVisible=!1,this.requestUpdate()},4e3),this.requestUpdate())}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-matches-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_all_",max_events_visible:5,max_events_total:50,hide_past_days:0,show_finished_matches:!0,hide_header:!1,show_event_toasts:!1}}_parseMatchDate(e){return(0,s.n1)(e)}_matchDateValue(e){return e?.date_iso||e?.date||""}_parsedMatchDate(e){return this._parseMatchDate(this._matchDateValue(e))}_matchTimeLabel(e){if("in"===e.state)return e.clock&&"N/A"!==e.clock?e.clock:this._t("status.live");if("post"===e.state)return this._t("status.full_time");if(this._matchDateValue(e)){if(!e.date_iso&&e.date){const t=e.date.split(" ");return t[1]||t[0]}const t=this._parsedMatchDate(e);if(t){const e=(0,s.$c)(this.hass,this._config),a=this.hass?.config?.time_zone;return t.toLocaleTimeString(e,{hour:"2-digit",minute:"2-digit",...a?{timeZone:a}:{}})}}return"—"}_matchScore(e,t){if("pre"===e.state)return"-";const a=e["home"===t?"home_score":"away_score"];return null==a||"N/A"===a?"-":a}_displayCompetitionName(e){return(0,d.VR)(e,(0,s.$c)(this.hass,this._config))}_isWinner(e,t){if("pre"===e.state)return null;const a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)||a===i?null:"home"===t?a>i:i>a}_dayKey(e){const t=this._matchDateValue(e);if(!t)return"—";const a=this._parsedMatchDate(e);if(!a)return String(t).split(" ")[0]||"—";const i=new Date;i.setHours(0,0,0,0);const s=new Date(a);s.setHours(0,0,0,0);const n=Math.round((s-i)/864e5);if(0===n)return"⚡ "+this._t("time.today");if(-1===n)return this._t("time.yesterday");if(1===n)return this._t("time.tomorrow");const r=this._t("month."+(s.getMonth()+1));return`${s.getDate()} ${r}`}async showDetails(e){this.activeMatch=e,this.showPopup=!0;const t=this.hass?.states?.[this._config.entity]?.attributes;if(t?.detail_service&&!(0,h.wn)(e)){this._detailsLoading=!0,this._detailsError=!1;try{await(0,h.NZ)(this.hass,t,e)}catch(e){this._detailsError=!0}finally{this._detailsLoading=!1,this.requestUpdate()}}}closePopup(){this.showPopup=!1}separateEvents(e){const t=[],a=[],i=[];return e.forEach(e=>{const s=String(e||"");s.includes("Goal")||s.includes("Penalty - Scored")?t.push(this.formatMatchEvent(s)):s.includes("Yellow Card")?a.push(this.formatMatchEvent(s)):s.includes("Red Card")&&i.push(this.formatMatchEvent(s))}),{goals:t,yellowCards:a,redCards:i}}formatMatchEvent(e){const t=e=>this._t(e);let a=String(e||"").trim();a=a.replace(/^Goal\s*-\s*/i,"").replace(/^Yellow Card\s*-\s*/i,"").replace(/^Red Card\s*-\s*/i,"").replace(/^Penalty - Scored\s*-\s*/i,`${t("event.penalty")} - `).replace(/^Header\s*-\s*/i,`${t("event.header")} - `).replace(/^Shot\s*-\s*/i,`${t("event.shot")} - `).replace(/^Free-kick\s*-\s*/i,`${t("event.free_kick")} - `).replace(/^Penalty\s*-\s*/i,`${t("event.penalty")} - `),a=a.replace(/^([^:]+):\s*/,"$1 ");const i=[t("event.header"),t("event.shot"),t("event.penalty"),t("event.free_kick")].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return a=a.replace(new RegExp(`^(${i.join("|")})\\s*-\\s*(.+)$`,"i"),(e,t,a)=>`${a} (${t.toLowerCase()})`),a=a.replace(/\bN\/A\b/g,t("generic.unknown")),a}render(){if((0,r.K)(this,this._config),!this.hass||!this._config)return i.qy``;const e=this._config.entity,t=this.hass.states[e];if(!t)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;let a=t.attributes.matches||[];const s=t.attributes.league_info?t.attributes.league_info[0]:null,l=t.attributes.team_name&&"N/A"!==t.attributes.team_name?t.attributes.team_name:null,c=t.attributes.team_logo||null;this._config.filter_competition&&(a=a.filter(e=>e.league_name===this._config.filter_competition)),this._config.filter_season&&(a=a.filter(e=>e.season_label===this._config.filter_season)),this._config.filter_state&&(a=a.filter(e=>e.state===this._config.filter_state)),"home"===this._config.filter_venue&&t.attributes.team_id&&(a=a.filter(e=>String(e.home_id)===String(t.attributes.team_id))),"away"===this._config.filter_venue&&t.attributes.team_id&&(a=a.filter(e=>String(e.away_id)===String(t.attributes.team_id))),this.showFinishedMatches||(a=a.filter(e=>!(0,v._C)(e)));const p=!0===this._config.smart_order||void 0===this._config.smart_order&&"smart"===t.attributes.recommended_match_order;if(a=p?(0,v.NM)(a):a.slice().sort((e,t)=>{const a=(0,v.Ot)(e),i=(0,v.Ot)(t);return null===a&&null===i?0:null===a?1:null===i?-1:this.reverseOrder?i-a:a-i}),this.hidePastDays>0){const e=new Date;e.setDate(e.getDate()-this.hidePastDays),a=a.filter(t=>{const a=this._parsedMatchDate(t);return!a||a>=e})}const h=a.slice(0,this.maxEventsTotal);if(0===h.length)return(0,u._$)(t.attributes,e=>this._t(e),()=>i.qy`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`);const g=h.filter(e=>"in"===e.state).length,m=new Set(h.map(e=>e.league_name).filter(e=>e&&"N/A"!==e)).size>1,f=this._config.group_by||"day";let _=[];if("competition"===f){const e=new Map;h.forEach(t=>{const a=t.league_name&&"N/A"!==t.league_name?this._displayCompetitionName(t.league_name):"—",i=(0,d.rn)({competitionName:t.league_name,competitionLogo:t.league_logo||t.competition_logo,fallbackLogo:null,isFriendly:t.is_friendly});e.has(a)||e.set(a,{key:a,logo:i,dayDiff:null,matches:[]}),e.get(a).matches.push(t)}),_=[...e.values()].sort((e,t)=>(e.matches.some(e=>"in"===e.state)?0:e.matches.some(e=>"pre"===e.state)?1:2)-(t.matches.some(e=>"in"===e.state)?0:t.matches.some(e=>"pre"===e.state)?1:2))}else{let e=null,t=null;h.forEach(a=>{const i=this._dayKey(a);if(i!==e){e=i;const s=this._parsedMatchDate(a);let n=null;if(s){const e=new Date;e.setHours(0,0,0,0);const t=new Date(s);t.setHours(0,0,0,0),n=Math.round((t-e)/864e5)}const r=a.season_label||null,o=Boolean(p&&t&&r&&r!==t);r&&(t=r),_.push({key:i,dayDiff:n,matches:[a],season:r,seasonBreak:o})}else _[_.length-1].matches.push(a)})}const b=Math.max(80*this.maxEventsVisible,240),x=h.filter(e=>"in"===e.state),y=x.map(e=>`${e.home_abbrev||e.home_team}  ${(0,n.Q)(e.home_score,"-")} - ${(0,n.Q)(e.away_score,"-")}  ${e.away_abbrev||e.away_team}`).join("     ·     ");return i.qy`
      <ha-card>
        <div class="hero-bg"></div>

        ${this.showEventToasts&&this._toastVisible?i.qy`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        ${this.showLiveTicker&&x.length>0?i.qy`
          <div class="live-ticker">
            <span class="ticker-badge">${this._t("status.live")}</span>
            <div class="ticker-track">
              <span class="ticker-content">${y}</span>
              <span class="ticker-content" aria-hidden="true">${y}</span>
            </div>
          </div>
        `:""}

        ${this.hideHeader?"":(()=>{const e=(0,d.rn)({competitionName:s&&s.name||"",competitionLogo:s&&s.logo_href,fallbackLogo:c||null}),a=s&&s.abbreviation&&"World"!==s.abbreviation?s.abbreviation:s&&s.name?this._displayCompetitionName(s.name):null,i=l||a||t.state||"Soccer Live",n=t.attributes.total_matches||t.attributes.matches?.length||0,r=t.attributes.finished_matches_count??(t.attributes.matches||[]).filter(e=>"post"===e.state).length,p=g>0?`${g} ${this._t("status.live")}`:n>0?`${r} / ${n}`:"";return(0,o.t7)({logo:e,title:i,badge:(0,o.N)(p,g>0?"live":"neutral")})})()}

        <div class="scroll-content" style="max-height: ${b}px;">
          ${_.map(e=>i.qy`
            ${e.seasonBreak?i.qy`<div class="season-divider">${e.season}</div>`:""}
            <div class="day-divider ${"competition"===f?"comp":0===e.dayDiff?"today":-1===e.dayDiff?"yesterday":1===e.dayDiff?"tomorrow":""}">
              ${"competition"===f&&e.logo?i.qy`<img class="comp-divider-logo" src="${e.logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
              ${e.key}
              ${"competition"!==f&&null!==e.dayDiff&&e.dayDiff>1?i.qy`<span class="day-rel">· ${this._t("time.in_n_d",{n:e.dayDiff})}</span>`:""}
            </div>
            ${e.matches.map(e=>{const t=`${e.home_team}_${e.away_team}`,a="in"===e.state,s=this._recentEventMatches.get(t),n=this._isWinner(e,"home"),r=this._isWinner(e,"away"),o=e.broadcast&&""!==e.broadcast&&"N/A"!==e.broadcast?e.broadcast:"",l="pre"===e.state,c=this.myTeam&&e.home_team&&e.home_team.toLowerCase().includes(this.myTeam),d=this.myTeam&&e.away_team&&e.away_team.toLowerCase().includes(this.myTeam),p=e.detail_capabilities||[];return i.qy`
                <div class="match-row ${a?"live":""} ${"goal"===s?"goal-pulse":""} ${"card"===s?"card-pulse":""}"
                     role="button" tabindex="0"
                     aria-label="${e.home_team} – ${e.away_team}"
                     @keydown="${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.showDetails(e))}}"
                     @click="${()=>this.showDetails(e)}">
                  <div class="match-time ${a?"live-time":""} ${"post"===e.state?"ft":""}">
                    ${this._matchTimeLabel(e)}
                  </div>
                  <div class="match-teams">
                    <div class="match-team">
                      <img src="${e.home_logo}" alt="${e.home_team}" />
                      <span class="name ${!0===n?"winner":!1===n?"loser":""} ${c?"my-team-name":""}">${e.home_team}</span>
                      <span class="score ${!0===n?"winner":!1===n?"loser":""}">${this._matchScore(e,"home")}</span>
                    </div>
                    <div class="match-team">
                      <img src="${e.away_logo}" alt="${e.away_team}" />
                      <span class="name ${!0===r?"winner":!1===r?"loser":""} ${d?"my-team-name":""}">${e.away_team}</span>
                      <span class="score ${!0===r?"winner":!1===r?"loser":""}">${this._matchScore(e,"away")}</span>
                    </div>
                    ${o&&l||p.length||m&&e.league_name&&"N/A"!==e.league_name?i.qy`
                      <div class="row-extras">
                        ${m&&e.league_name&&"N/A"!==e.league_name?i.qy`
                          <span class="league-chip">${this._displayCompetitionName(e.league_name)}</span>
                        `:""}
                        ${o&&l&&!this._config.hide_broadcasts?i.qy`
                          <span class="tv-chip" title="${this._t("ui.live_tv")}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
                            ${o}
                          </span>
                        `:""}
                        ${p.includes("statistics")?i.qy`<span class="detail-cap" title="${this._t("card.stats")}">▥</span>`:""}
                        ${p.includes("lineups")?i.qy`<span class="detail-cap" title="${this._t("popup.lineups")}">♟</span>`:""}
                        ${p.includes("shotmap")?i.qy`<span class="detail-cap" title="${this._t("popup.shotmap")}">◉</span>`:""}
                      </div>
                    `:""}
                  </div>
                  <div class="match-status-icon">›</div>
                </div>
              `})}
          `)}
        </div>
      </ha-card>
    `}updated(e){if(e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents(),e.has("hass")&&this.activeMatch){const e=this.hass?.states?.[this._config.entity]?.attributes,t=(0,h.Hl)(e,this.activeMatch.event_id);t&&t!==this.activeMatch&&(this.activeMatch=t)}(e.has("showPopup")||e.has("activeMatch"))&&(this.showPopup?(this._renderPopupPortal(),this._escHandler||(this._escHandler=e=>{"Escape"===e.key&&(this.showPopup=!1)},document.addEventListener("keydown",this._escHandler))):(this._removePopupPortal(),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null)))}_copyPopupThemeVars(e){const t=getComputedStyle(this);["--cl-bg","--cl-text","--cl-text-2","--cl-divider","--cl-accent","--cl-accent-2","--cl-accent-rgb","--cl-accent-2-rgb"].forEach(a=>{const i=t.getPropertyValue(a);i&&e.style.setProperty(a,i)})}_renderPopupPortal(){if(this.activeMatch&&(this._popupPortal||(this._popupPortal=document.createElement("dialog"),this._popupPortal.className="soccer-live-matches-popup-portal",this._popupCancelHandler=e=>{e.preventDefault(),this.showPopup=!1},this._popupClickHandler=e=>{e.target===this._popupPortal&&(this.showPopup=!1)},this._popupPortal.addEventListener("cancel",this._popupCancelHandler),this._popupPortal.addEventListener("click",this._popupClickHandler),document.body.appendChild(this._popupPortal)),this._copyPopupThemeVars(this._popupPortal),(0,i.XX)(i.qy`${this._renderPopupPortalStyles()}${this._renderPopup()}`,this._popupPortal),!this._popupPortal.open))try{this._popupPortal.showModal()}catch(e){this._popupPortal.setAttribute("open","")}}_removePopupPortal(){this._popupPortal&&(this._popupPortal.open&&this._popupPortal.close(),this._popupCancelHandler&&(this._popupPortal.removeEventListener("cancel",this._popupCancelHandler),this._popupCancelHandler=null),this._popupClickHandler&&(this._popupPortal.removeEventListener("click",this._popupClickHandler),this._popupClickHandler=null),(0,i.XX)(i.qy``,this._popupPortal),this._popupPortal.remove(),this._popupPortal=null)}_renderPopupPortalStyles(){return i.qy`
          <style>
            ${p.hl.cssText}
            ${g.zl.cssText}
            ${m.d.cssText}
            ${b.mG.cssText}
        .soccer-live-matches-popup-portal {
          border: 0;
          padding: 0;
          margin: auto;
          max-width: none;
          max-height: none;
          width: 100vw;
          height: 100vh;
          background: transparent;
          color: inherit;
          overflow: hidden;
        }
        .soccer-live-matches-popup-portal::backdrop {
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(8px);
        }
        .mp-overlay {
          position: fixed; inset: 0;
          display: flex; justify-content: center; align-items: center;
          overflow: auto; -webkit-overflow-scrolling: touch; padding: 16px;
        }
        .mp-box {
          background: var(--cl-bg, #1a1f2e);
          border: 1px solid var(--cl-divider, rgba(255,255,255,0.08));
          border-radius: 20px; box-shadow: 0 24px 64px rgba(0,0,0,0.6);
          color: var(--cl-text, #f8fafc);
          max-height: 85vh; max-width: 560px; width: 100%;
          overflow-y: auto; -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain; padding: 24px; margin: auto;
        }
        .mp-title {
          margin: 0 0 20px; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .mp-score-row { display: flex; justify-content: center; align-items: center; gap: 18px; margin-bottom: 16px; }
        .mp-logo { width: 64px; height: 64px; object-fit: contain; }
        .mp-score-center { text-align: center; }
        .mp-score { font-size: 38px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
        .mp-score.live { color: var(--cl-live, #ef4444); }
        .mp-sep { opacity: 0.4; }
        .mp-clock { font-size: 12px; color: var(--cl-text-2, #94a3b8); margin-top: 6px; font-weight: 600; }
        .mp-clock.live { color: var(--cl-live, #ef4444); }
        .mp-kickoff { font-size: 26px; font-weight: 800; color: var(--cl-accent, #60a5fa); letter-spacing: 0.5px; line-height: 1; }
        .mp-kickoff-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8); margin-top: 6px; }
        .mp-teams { text-align: center; color: var(--cl-text-2, #94a3b8); font-size: 14px; margin: 0 0 20px; }
        .mp-event-group { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
        .mp-event-group.goal { background: rgba(99,102,241,0.1); border-color: #6366f1; }
        .mp-event-group.yellow { background: rgba(245,158,11,0.1); border-color: #f59e0b; }
        .mp-event-group.red { background: rgba(239,68,68,0.1); border-color: #ef4444; }
        .mp-event-title { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .mp-event-group.goal .mp-event-title { color: #6366f1; }
        .mp-event-group.yellow .mp-event-title { color: #f59e0b; }
        .mp-event-group.red .mp-event-title { color: #ef4444; }
        .mp-event-list { margin: 0; padding-left: 18px; font-size: 13px; color: #cbd5e1; }
        .mp-event-list li { margin: 4px 0; }
        .mp-no-events { text-align: center; color: #94a3b8; font-size: 13px; }
        .mp-detail-state { text-align:center; color:var(--cl-accent,#6366f1); font-size:12px; font-weight:700; }
        .mp-detail-state.error { color:#ef4444; }
        .mp-capabilities { display:flex; flex-wrap:wrap; justify-content:center; gap:5px; margin:-10px 0 16px; }
        .mp-capabilities span { padding:3px 7px; border-radius:999px; background:rgba(148,163,184,.12); color:#94a3b8; font-size:9px; text-transform:uppercase; letter-spacing:.06em; }
        .mp-prematch { display:grid; gap:10px; margin-bottom:14px; }
        .mp-context { display:flex; flex-wrap:wrap; justify-content:center; gap:6px; }
        .mp-context span { padding:5px 8px; border-radius:8px; background:rgba(148,163,184,.10); color:var(--cl-text-2,#94a3b8); font-size:10px; }
        .mp-countdown { text-align:center; color:var(--cl-accent,#6366f1); font-size:12px; font-weight:800; }
        .mp-form-grid,.mp-standing-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .mp-form-team,.mp-standing-grid>div { padding:9px; border-radius:9px; background:rgba(255,255,255,.04); }
        .mp-form-team>strong,.mp-standing-grid strong { display:block; margin-bottom:6px; color:var(--cl-text,#f8fafc); font-size:10px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .mp-form-dots { display:flex; gap:4px; }.mp-form-dots b { display:grid; place-items:center; width:21px; height:21px; border-radius:50%; color:white; font-size:9px; background:#64748b; }.mp-form-dots b.W{background:#10b981}.mp-form-dots b.L{background:#ef4444}
        .mp-standing-grid span { color:var(--cl-accent,#6366f1); font-size:12px; font-weight:800; }
        .mp-h2h-list { display:grid; gap:5px; }.mp-h2h-list>div { display:grid; grid-template-columns:1fr auto 1fr; gap:7px; padding:6px 8px; border-radius:7px; background:rgba(255,255,255,.035); color:var(--cl-text-2,#94a3b8); font-size:10px; }.mp-h2h-list span:last-child{text-align:right}.mp-h2h-list b{color:var(--cl-text,#f8fafc)}
        .mp-coverage { display:flex; justify-content:space-between; align-items:center; padding:7px 9px; border-radius:8px; background:rgba(148,163,184,.08); color:var(--cl-text-2,#94a3b8); font-size:9px; }.mp-coverage b{color:var(--cl-text,#f8fafc)}
        .mp-review-grid { display:grid; grid-template-columns:1fr 1fr; gap:7px; }.mp-review-grid>div { padding:9px; border-radius:8px; background:rgba(255,255,255,.04); }.mp-review-grid small{display:block;color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-review-grid strong{color:var(--cl-text,#f8fafc);font-size:12px}
        .mp-box .pred,.mp-box .odds,.mp-box .inj { margin:0; }
        /* Lineup & Timeline sections */
        .mp-section { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
        .mp-section-lineup { background: rgba(16,185,129,0.08); border-color: #10b981; }
        .mp-section-timeline { background: rgba(251,191,36,0.08); border-color: #fbbf24; }
        .mp-section-title { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .mp-section-title.lineup { color: #10b981; }
        .mp-section-title.timeline { color: #fbbf24; }
        .mp-lineup-team { margin-bottom: 10px; }
        .mp-lineup-team:last-child { margin-bottom: 0; }
        .mp-lineup-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
        .mp-lineup-header span:first-child { font-size: 12px; font-weight: 800; color: #fff; }
        .mp-formation { font-size: 10px; font-weight: 700; color: var(--cl-accent, #6366f1); letter-spacing: 0.1em; }
        .mp-lineup-players { font-size: 12px; color: #cbd5e1; line-height: 1.7; }
        .mp-player { display: inline-block; padding: 2px 8px; background: rgba(255,255,255,0.05); border-radius: 6px; margin: 2px; }
        .mp-jersey { color: #fbbf24; font-weight: 800; }
        .mp-timeline-list { margin: 0; padding: 0; list-style: none; }
        .mp-timeline-item { display: flex; gap: 8px; align-items: flex-start; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 12px; color: #cbd5e1; }
        .mp-timeline-item:last-child { border-bottom: none; }
        .mp-tl-clock { min-width: 32px; text-align: right; font-size: 11px; font-weight: 700; color: #94a3b8; font-variant-numeric: tabular-nums; padding-top: 2px; flex-shrink: 0; }
        .mp-momentum { width:100%; height:90px; overflow:visible; }
        .mp-momentum line { stroke:rgba(148,163,184,.3); stroke-width:1; }
        .mp-momentum path { fill:none; stroke:var(--cl-accent,#6366f1); stroke-width:3; vector-effect:non-scaling-stroke; }
        .mp-shotmap { position:relative; height:190px; border:1px solid rgba(255,255,255,.3); border-radius:8px; background:linear-gradient(90deg,rgba(16,185,129,.12),rgba(16,185,129,.05)); }
        .mp-shotmap::after { content:''; position:absolute; left:50%; top:0; bottom:0; border-left:1px solid rgba(255,255,255,.25); }
        .mp-shot { position:absolute; width:9px; height:9px; border-radius:50%; background:#f8fafc; border:2px solid #64748b; transform:translate(-50%,-50%); z-index:1; }
        .mp-shot.goal { background:#10b981; border-color:#d1fae5; width:12px; height:12px; }
        .mp-ratings { display:grid; gap:6px; }
        .mp-ratings div { display:flex; justify-content:space-between; padding:7px 9px; border-radius:7px; background:rgba(255,255,255,.05); font-size:12px; }
        .mp-ratings strong { color:#fbbf24; }
        .mp-insight{border-left-color:var(--cl-accent,#6366f1);background:rgba(99,102,241,.07)}.mp-story{display:grid;gap:7px}.mp-story>div{display:grid;grid-template-columns:30px 1fr;gap:8px}.mp-story>div>b{color:var(--cl-accent,#6366f1)}.mp-story span{display:flex;flex-direction:column}.mp-story strong{color:var(--cl-text,#f8fafc);font-size:11px}.mp-story small{color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-narrative{display:grid;gap:4px;margin:8px 0 0;padding:8px 8px 8px 22px;border-radius:8px;background:rgba(255,255,255,.04);color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-outcome{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-outcome span{display:flex;flex-direction:column}.mp-outcome span:last-child{text-align:right}.mp-outcome span b{color:var(--cl-text,#f8fafc);font-size:11px}.mp-outcome>strong{color:var(--cl-accent,#6366f1);font-size:18px}.mp-outcome-xg{text-align:center;margin-top:7px;color:var(--cl-text-2,#94a3b8);font-size:10px}.mp-outcome-xg b{color:var(--cl-text,#f8fafc)}
        .mp-tl-badge { display: inline-block; font-size: 8px; font-weight: 800; padding: 1px 5px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.04em; flex-shrink: 0; line-height: 15px; white-space: nowrap; margin-top: 1px; }
        .mp-tl-badge.goal   { background: rgba(99,102,241,0.18); color: #6366f1; }
        .mp-tl-badge.yellow { background: rgba(245,158,11,0.18); color: #f59e0b; }
        .mp-tl-badge.red    { background: rgba(239,68,68,0.18); color: #ef4444; }
        .mp-tl-badge.sub    { background: rgba(148,163,184,0.12); color: #94a3b8; }
        .mp-tl-badge.meta   { background: transparent; color: #94a3b8; font-size: 14px; padding: 0 4px; letter-spacing: 0; }
        .mp-tl-text strong { color: #fff; }
        .mp-tl-team { color: #94a3b8; font-size: 11px; }
        .mp-close {
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          color: white; padding: 12px 20px; border: none; border-radius: 12px;
          cursor: pointer; margin-top: 20px; font-weight: 800; width: 100%; font-size: 14px;
        }
      </style>
    `}_renderPopup(){const e=this.activeMatch,t="pre"===e.state,a="in"===e.state,r="post"===e.state,o=e=>""===e||"N/A"===e?"-":(0,n.Q)(e,"-"),c=!t&&(e.clock&&"N/A"!==e.clock?e.clock:(0,l.sH)(e.status,e=>this._t(e))),d=(0,s.DK)(e.date,(0,s.$c)(this.hass,this._config))||"—",{goals:p,yellowCards:h,redCards:u}=this.separateEvents(e.match_details||[]),g=(e,t,a)=>t.length?i.qy`
      <div class="mp-event-group ${a}">
        <h5 class="mp-event-title">${e}</h5>
        <ul class="mp-event-list">${t.map(e=>i.qy`<li>${e}</li>`)}</ul>
      </div>`:"",m=p.length||h.length||u.length;return i.qy`
      <div class="mp-overlay" @click="${e=>{e.target===e.currentTarget&&(this.showPopup=!1)}}">
        <div class="mp-box" @click="${e=>e.stopPropagation()}">
          <h3 class="mp-title">${this._t("popup.match_details")}</h3>
          <div class="mp-score-row">
            <img class="mp-logo" src="${e.home_logo}" alt="" @error="${e=>e.target.style.display="none"}">
            <div class="mp-score-center">
              ${t?i.qy`
                <div class="mp-kickoff">${d}</div>
                <div class="mp-kickoff-label">${this._t("status.kickoff")}</div>
              `:i.qy`
                <div class="mp-score ${a?"live":""}">${o(e.home_score)}<span class="mp-sep"> – </span>${o(e.away_score)}</div>
                ${a&&c?i.qy`<div class="mp-clock live">${c}</div>`:""}
                ${r?i.qy`<div class="mp-clock">${this._t("status.full_time")}</div>`:""}
              `}
            </div>
            <img class="mp-logo" src="${e.away_logo}" alt="" @error="${e=>e.target.style.display="none"}">
          </div>
          <p class="mp-teams"><strong>${e.home_team}</strong> – <strong>${e.away_team}</strong></p>
          ${this._detailsLoading?i.qy`<p class="mp-detail-state">${this._t("ui.loading")}</p>`:""}
          ${this._detailsError?i.qy`<p class="mp-detail-state error">${this._t("ui.provider_unavailable")}</p>`:""}
          ${this._renderDetailCapabilities(e)}
          ${(0,b.WU)(e,{t:(e,t)=>this._t(e,t),provider:this.hass?.states?.[this._config.entity]?.attributes?.provider,updatedAt:this.hass?.states?.[this._config.entity]?.attributes?.last_successful_update})}
          ${t||a?this._renderPopupPrematch(e):""}
          ${t?"":i.qy`
            ${g(this._t("event.goal"),p,"goal")}
            ${g(this._t("event.yellow_card"),h,"yellow")}
            ${g(this._t("event.red_card"),u,"red")}
            ${m?"":i.qy`<p class="mp-no-events">${this._t("popup.no_events")}</p>`}
          `}
          ${this._renderPopupLineup(e)}
          ${this._renderPopupTimeline(e)}
          ${this._renderMomentum(e)}
          ${this._renderShotmap(e)}
          ${this._renderRatings(e)}
          ${a||r?this._renderPopupStory(e):""}
          ${r?this._renderPopupOutcome(e):""}
          ${r?this._renderPopupReview(e):""}
          <button class="mp-close" @click="${()=>this.showPopup=!1}">${this._t("generic.close")}</button>
        </div>
      </div>
    `}_renderPopupPrematch(e){const t=(0,_.mz)(e),a=(0,s.$c)(this.hass,this._config),n=(0,_.Ve)(e),r=t=>(0,f.y)(e,t,(e,t)=>this._t(e,t)),o=(e,t)=>t.length?i.qy`<div class="mp-form-team"><strong>${e}</strong><div class="mp-form-dots">${t.map(e=>i.qy`<b class=${e}>${e}</b>`)}</div></div>`:"",l=e.weather&&"object"==typeof e.weather?[e.weather.icon,null!=e.weather.temperature?`${e.weather.temperature}°`:"",e.weather.wind].filter(Boolean).join(" "):"",c=t.competition||""!==t.round||null!=n||e.venue||l||(e.broadcasts||[]).length,d=(0,_.wk)(n).map(({unit:e,value:t})=>this._t(`popup.duration_${e}${1===t?"":"s"}`,{n:t})),p=d.length>1?`${d.slice(0,-1).join(", ")} ${this._t("popup.duration_and")} ${d.at(-1)}`:d[0];return i.qy`<div class="mp-prematch">
      ${p?i.qy`<div class="mp-countdown">${this._t("popup.kickoff_in",{value:p})}</div>`:""}
      ${c?i.qy`<div class="mp-context">
        ${t.competition?i.qy`<span>🏆 ${this._displayCompetitionName(t.competition)}</span>`:""}
        ${""!==t.round?i.qy`<span>№ ${this._t("popup.round")} ${t.round}</span>`:""}
        ${l?i.qy`<span>${l}</span>`:""}
      </div>${(0,m.n)(e,{lang:a,t:(e,t)=>this._t(e,t),showDate:!0})}`:""}
      ${t.homeForm.length||t.awayForm.length?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("team.form")}</h5><div class="mp-form-grid">${o(e.home_team,t.homeForm)}${o(e.away_team,t.awayForm)}</div></div>`:""}
      ${t.hasStandings?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.standings")}</h5><div class="mp-standing-grid"><div><strong>${e.home_team}</strong><span>${r("home")}</span></div><div><strong>${e.away_team}</strong><span>${r("away")}</span></div></div></div>`:""}
      ${this._renderTeamMetrics(e)}
      ${(0,g.K4)(e,{t:(e,t)=>this._t(e,t),lang:a,showDetails:!0})}
      ${(0,g.vK)(e,{t:(e,t)=>this._t(e,t)})}
      ${(0,g.Sj)(e,{t:(e,t)=>this._t(e,t)})}
      ${this._renderPopupH2H(e,t)}
      ${this._renderExpectedLineup(e)}
      ${this._renderCoverage(e)}
    </div>`}_renderTeamMetrics(e){const t=(t,a)=>[e[`${t}_average_goals_${a}`],e[`${t}_goals_${a}_avg`],e[`${t}_avg_goals_${a}`]].find(e=>null!=e&&""!==e&&"N/A"!==e),a=t("home","for"),s=t("home","against"),n=t("away","for"),r=t("away","against");return[a,s,n,r].every(e=>void 0===e)?"":i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.team_averages")}</h5><div class="mp-standing-grid">
      <div><strong>${e.home_team}</strong><span>${this._t("popup.goals_for")} ${a??"–"} · ${this._t("popup.goals_against")} ${s??"–"}</span></div>
      <div><strong>${e.away_team}</strong><span>${this._t("popup.goals_for")} ${n??"–"} · ${this._t("popup.goals_against")} ${r??"–"}</span></div>
    </div></div>`}_renderPopupH2H(e,t=(0,_.mz)(e)){return t.h2h.length||t.h2hCount?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.h2h")}</h5>
      ${t.h2h.length?i.qy`<div class="mp-h2h-list">${t.h2h.map(e=>i.qy`<div><span>${e.home_team||e.home}</span><b>${(0,n.Q)(e.home_score,"–")} – ${(0,n.Q)(e.away_score,"–")}</b><span>${e.away_team||e.away}</span></div>`)}</div>`:i.qy`<p class="mp-no-events">${this._t("popup.h2h_available",{n:t.h2hCount})}</p>`}
    </div>`:""}_renderExpectedLineup(e){const t=e.predicted_lineup_home||e.expected_lineup_home||[],a=e.predicted_lineup_away||e.expected_lineup_away||[];if(!t.length&&!a.length)return"";const s=(e,t)=>t.length?i.qy`<div class="mp-lineup-team"><div class="mp-lineup-header"><span>${e}</span></div><div class="mp-lineup-players">${t.map(e=>i.qy`<span class="mp-player">${e.name||e}</span>`)}</div></div>`:"";return i.qy`<div class="mp-section mp-section-lineup"><h5 class="mp-section-title lineup">${this._t("popup.expected_lineup")}</h5><p class="mp-no-events">${this._t("popup.expected_lineup_note")}</p>${s(e.home_team,t)}${s(e.away_team,a)}</div>`}_renderCoverage(e){const t=this.hass?.states?.[this._config.entity]?.attributes||{},a="fotmob_private"===t.provider?"FotMob":t.provider||"Soccer Live",s=e.detail_capabilities||[],n=this.hass?.states?.[this._config.entity],r=n?.last_updated?Math.max(0,Math.round((Date.now()-new Date(n.last_updated).getTime())/6e4)):null;return i.qy`<div class="mp-coverage"><span>${this._t("popup.data_source")}${null!=r?` · ${this._t("popup.updated_minutes",{n:r})}`:""}</span><b>${a}${s.length?` · ${s.length} ${this._t("popup.parts")}`:""}</b></div>`}_renderPopupReview(e){const t=(0,_.OG)(e);return t.present?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.review")}</h5><div class="mp-review-grid">
      ${t.playerOfMatch?i.qy`<div><small>${this._t("popup.player_of_match")}</small><strong>${t.playerOfMatch.name||t.playerOfMatch.player}</strong></div>`:""}
      ${t.expectedGoals?i.qy`<div><small>xG</small><strong>${t.expectedGoals.home??"–"} – ${t.expectedGoals.away??"–"}</strong></div>`:""}
      ${t.standout?i.qy`<div><small>${t.standout.key}</small><strong>${t.standout.home} – ${t.standout.away}</strong></div>`:""}
      ${t.scorers.length?i.qy`<div><small>${this._t("event.goal")}</small><strong>${t.scorers.map(e=>`${e.player} ${e.minute}'`).join(" · ")}</strong></div>`:""}
    </div></div>`:""}_renderPopupStory(e){const t=(0,_.qU)(e),a=(0,_.Qt)(e);if(!t.length&&!a.length)return"";const s={opening_goal:"story.opening_goal",equalizer:"story.equalizer",decisive_goal:"story.decisive_goal",red_card:"story.red_card"};return i.qy`<div class="mp-section mp-insight"><h5 class="mp-section-title">${this._t("match.story")}</h5>
      <div class="mp-story">${t.map(e=>i.qy`<div><b>${e.minute?`${e.minute}'`:"·"}</b><span><strong>${this._t(s[e.type]||"match.event")}</strong><small>${e.player||e.athletes?.[0]||""}${e.team?` · ${e.team}`:""}</small></span></div>`)}</div>
      ${a.length?i.qy`<ul class="mp-narrative">${a.map(e=>i.qy`<li>${this._t(e.key,e.vars)}</li>`)}</ul>`:""}
    </div>`}_renderPopupOutcome(e){const t=(0,_.Mh)(e);if(!t)return"";const a=e=>this._t(`match.outcome_${e}`);return i.qy`<div class="mp-section mp-insight"><h5 class="mp-section-title">${this._t("match.expectation_reality")}</h5>
      <div class="mp-outcome"><span>${this._t("match.expected")}<b>${a(t.predicted)}${null!=t.predictedPercent?` · ${t.predictedPercent}%`:""}</b></span><strong>${t.correct?"✓":"↯"}</strong><span>${this._t("match.actual")}<b>${a(t.actual)}</b></span></div>
      ${t.xg?i.qy`<div class="mp-outcome-xg">xG <b>${t.xg.home??"—"} – ${t.xg.away??"—"}</b></div>`:""}
    </div>`}_renderDetailCapabilities(e){const t=e.detail_capabilities||[];return t.length?i.qy`<div class="mp-capabilities">${t.map(e=>i.qy`<span>${e}</span>`)}</div>`:""}_renderMomentum(e){const t=e.momentum||[];if(!t.length)return"";const a=Math.max(1,...t.map(e=>Math.abs(Number(e.value)||0))),s=t.map((e,i)=>{const s=1===t.length?0:300*i/(t.length-1),n=45-(Number(e.value)||0)/a*37;return`${i?"L":"M"}${s.toFixed(1)},${n.toFixed(1)}`}).join(" ");return i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.momentum")}</h5>
      <svg class="mp-momentum" viewBox="0 0 ${300} ${90}" preserveAspectRatio="none">
        <line x1="0" y1="${45}" x2="${300}" y2="${45}"></line><path d="${s}"></path>
      </svg></div>`}_renderShotmap(e){const t=e.shotmap||[];return t.length?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.shotmap")}</h5>
      <div class="mp-shotmap">${t.map(e=>{const t=Math.max(2,Math.min(98,Number(e.x)||50)),a=Math.max(2,Math.min(98,Number(e.y)||50)),s=String(e.outcome||"").toLowerCase().includes("goal");return i.qy`<span class="mp-shot ${s?"goal":""}" style="left:${t}%;top:${100-a}%" title="${e.player||""} · ${e.minute||""}' · xG ${e.xg??"—"}"></span>`})}</div></div>`:""}_renderRatings(e){const t=e.top_rated_players||[];return t.length||e.player_of_the_match?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.ratings")}</h5>
      <div class="mp-ratings">${t.map(e=>i.qy`<div><span>${e.name}</span><strong>${e.rating}</strong></div>`)}</div>
    </div>`:""}_renderPopupLineup(e){const t=e.lineup_home||[],a=e.lineup_away||[];if(!t.length&&!a.length)return"";const s=(0,p.Ri)(e,{t:(e,t)=>this._t(e,t)});if(s)return i.qy`
        <div class="mp-section mp-section-lineup">
          <h5 class="mp-section-title lineup">${this._t("popup.lineups")}</h5>
          ${s}
        </div>`;const n=(e,t,a)=>{const s=e.some(e=>!0===e.starter||!1===e.starter),n=s?e.filter(e=>!0===e.starter):e,r=s?e.filter(e=>!1===e.starter):[];return n.length?i.qy`
        <div class="mp-lineup-team">
          <div class="mp-lineup-header">
            <span>${a}</span>
            ${t?i.qy`<span class="mp-formation">${t}</span>`:""}
          </div>
          <div class="mp-lineup-players">
            ${n.map(e=>i.qy`<span class="mp-player">${e.jersey?i.qy`<strong class="mp-jersey">${e.jersey}</strong> `:""}${e.short_name||e.name||""}</span>`)}
          </div>
          ${r.length?i.qy`<div class="mp-lineup-header"><span>${this._t("popup.substitutes")}</span></div><div class="mp-lineup-players">${r.map(e=>i.qy`<span class="mp-player">${e.jersey?i.qy`<strong class="mp-jersey">${e.jersey}</strong> `:""}${e.short_name||e.name||""}</span>`)}</div>`:""}
        </div>`:""};return i.qy`
      <div class="mp-section mp-section-lineup">
        <h5 class="mp-section-title lineup">${this._t("popup.lineups")}</h5>
        ${n(t,e.formation_home,e.home_team)}
        ${n(a,e.formation_away,e.away_team)}
      </div>`}_renderPopupTimeline(e){const t=(e.key_events||[]).filter(e=>!l._Z.some(t=>(e.type_text||"").toLowerCase().includes(t)));if(!t.length)return"";const a=e=>{const t=(e.athletes||[]).filter(Boolean);if(t.length)return t.join(", ");const a=l.WY[(e.type_text||"").toLowerCase()];return a?this._t(a):e.type_text||e.short_text||""},s=e=>{const t={goal:"event.goal",yellow:"event.yellow_card",red:"event.red_card",sub:"event.substitution"};return t[e]?i.qy`<span class="mp-tl-badge ${e}">${this._t(t[e])}</span>`:i.qy`<span class="mp-tl-badge meta">·</span>`};return i.qy`
      <div class="mp-section mp-section-timeline">
        <h5 class="mp-section-title timeline">${this._t("popup.timeline")}</h5>
        <ul class="mp-timeline-list">
          ${t.map(e=>{const t=(e=>{const t=(e.type||"").toLowerCase(),a=(e.type_text||"").toLowerCase();return(0,l.UK)(e)?"goal":a.includes("yellow")?"yellow":a.includes("red card")?"red":"substitution"===t||a.includes("substitut")?"sub":"meta"})(e);return i.qy`
              <li class="mp-timeline-item">
                <span class="mp-tl-clock">${e.clock||""}</span>
                ${s(t)}
                <span class="mp-tl-text"><strong>${a(e)}</strong>${e.team?i.qy`<br><span class="mp-tl-team">${e.team}</span>`:""}</span>
              </li>`})}
        </ul>
      </div>`}static get styles(){return[r.G,c.M,o.Ng,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.5);--cl-green:#10b981;--cl-gold:#fbbf24;--cl-gold-text:#fde047;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);--cl-glass-border:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.10),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(var(--cl-accent-2-rgb),0.10),transparent 50%);pointer-events:none;z-index:0;}.live-ticker{display:flex;align-items:center;gap:10px;background:rgba(239,68,68,0.08);border-bottom:1px solid rgba(239,68,68,0.15);padding:6px 14px;overflow:hidden;position:relative;z-index:1;}.ticker-badge{flex-shrink:0;background:var(--cl-live);color:white;font-size:9px;font-weight:800;padding:2px 7px;border-radius:4px;letter-spacing:0.08em;box-shadow:0 0 8px var(--cl-live-glow);}.ticker-track{flex:1;overflow:hidden;display:flex;gap:60px;}.ticker-content{white-space:nowrap;flex-shrink:0;font-size:11px;font-weight:700;color:var(--cl-text);animation:ticker-scroll 18s linear infinite;}@keyframes ticker-scroll{from{transform:translateX(0);}to{transform:translateX(calc(-100% - 60px));}}.live-counter{flex-shrink:0;background:linear-gradient(135deg,var(--cl-live),#f97316);color:white;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:0.06em;box-shadow:0 2px 12px var(--cl-live-glow);}.scroll-content{position:relative;z-index:1;overflow-y:auto;padding:4px 4px 12px;}.day-divider{padding:12px 12px 4px;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:var(--cl-text-2);font-weight:800;display:flex;align-items:center;gap:8px;}.season-divider{margin:14px 12px 2px;padding:7px 10px;border:1px solid var(--cl-divider);border-radius:999px;color:var(--cl-text-2);font-size:10px;font-weight:800;letter-spacing:0.12em;text-align:center;}.day-divider::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--cl-divider),transparent);}.day-divider.today{color:var(--cl-accent);}.day-divider.today::after{background:linear-gradient(90deg,var(--cl-accent),transparent);opacity:0.4;}.day-rel{font-size:9px;font-weight:600;color:var(--cl-text-2);opacity:0.55;text-transform:none;letter-spacing:0;flex-shrink:0;}.day-divider.tomorrow{color:var(--cl-accent-2);opacity:0.9;}.day-divider.tomorrow::after{background:linear-gradient(90deg,var(--cl-accent-2),transparent);opacity:0.3;}.day-divider.yesterday{opacity:0.55;}.day-divider.comp{color:var(--cl-text);font-size:11px;letter-spacing:0.05em;}.comp-divider-logo{width:14px;height:14px;object-fit:contain;flex-shrink:0;}.confetti{position:absolute;top:20px;left:50%;width:8px;height:8px;pointer-events:none;z-index:99;animation:confetti-fly 2s ease-out forwards;}@keyframes confetti-fly{0%{transform:translate(-50%,0) rotate(0deg);opacity:1;}100%{transform:translate(calc(-50% + var(--dx)),var(--dy)) rotate(720deg);opacity:0;}}.match-row{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:12px;border-radius:14px;cursor:pointer;transition:all 0.25s cubic-bezier(0.4,0,0.2,1);margin:0 4px;position:relative;}.match-row:hover{background:var(--cl-card-2);transform:translateX(3px);}.match-row.live{background:linear-gradient(90deg,rgba(239,68,68,0.10),rgba(239,68,68,0.02) 60%);animation:live-row-glow 3s ease-in-out infinite;}.match-row.live::before{content:'';position:absolute;left:-2px;top:50%;transform:translateY(-50%);width:4px;height:70%;background:linear-gradient(180deg,var(--cl-live),#f97316);border-radius:0 4px 4px 0;box-shadow:0 0 12px var(--cl-live-glow);}@keyframes live-row-glow{0%,100%{background:linear-gradient(90deg,rgba(239,68,68,0.10),rgba(239,68,68,0.02) 60%);}50%{background:linear-gradient(90deg,rgba(239,68,68,0.18),rgba(239,68,68,0.05) 60%);}}.match-row.goal-pulse{animation:goal-pulse 1.6s cubic-bezier(0.16,1,0.3,1);}@keyframes goal-pulse{0%{box-shadow:none;transform:scale(1);}20%{box-shadow:0 0 0 3px var(--cl-gold),0 0 24px var(--cl-gold);transform:scale(1.02);}100%{box-shadow:none;transform:scale(1);}}.match-row.card-pulse{animation:card-pulse-row 1s ease-out;}@keyframes card-pulse-row{0%{box-shadow:none;}30%{box-shadow:0 0 0 2px #f59e0b;}100%{box-shadow:none;}}.match-time{font-size:11px;color:var(--cl-text-2);font-weight:700;font-variant-numeric:tabular-nums;min-width:44px;text-align:center;padding:6px 8px;background:var(--cl-card-2);border-radius:8px;}.match-time.live-time{background:rgba(239,68,68,0.15);color:var(--cl-live);}.match-time.ft{background:rgba(16,185,129,0.12);color:var(--cl-green);}.match-teams{display:flex;flex-direction:column;gap:4px;min-width:0;}.match-team{display:flex;align-items:center;gap:10px;}.match-team img{width:22px;height:22px;object-fit:contain;flex-shrink:0;}.match-team .name{font-size:13px;font-weight:600;flex:1;letter-spacing:-0.01em;color:var(--cl-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.match-team .name.winner{font-weight:800;}.match-team .name.loser{color:var(--cl-text-2);}.match-team .name.my-team-name{font-weight:800;color:var(--cl-accent);}.match-team .score{font-size:14px;font-weight:800;font-variant-numeric:tabular-nums;min-width:22px;text-align:right;color:var(--cl-text);}.match-team .score.winner{color:var(--cl-accent);}.match-team .score.loser{color:var(--cl-text-2);opacity:0.6;}.row-extras{display:flex;gap:6px;margin-top:4px;}.tv-chip{display:inline-flex;align-items:center;gap:4px;padding:2px 7px;background:rgba(var(--cl-accent-rgb),0.12);border:1px solid rgba(var(--cl-accent-rgb),0.25);border-radius:999px;font-size:9px;font-weight:700;color:var(--cl-accent);text-transform:uppercase;letter-spacing:0.04em;}.tv-chip svg{width:10px;height:10px;}.league-chip{display:inline-flex;align-items:center;padding:2px 7px;background:rgba(var(--cl-accent-2-rgb),0.10);border:1px solid rgba(var(--cl-accent-2-rgb),0.22);border-radius:999px;font-size:9px;font-weight:700;color:var(--cl-accent-2);letter-spacing:0.03em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px;}.detail-cap{color:var(--cl-text-2);opacity:.7;font-size:10px;}.match-status-icon{color:var(--cl-text-2);font-size:18px;opacity:0.5;transition:all 0.2s;}.match-row:hover .match-status-icon{color:var(--cl-accent);opacity:1;transform:translateX(3px);}.event-toast{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:var(--cl-toast-bg);color:#ffffff;padding:10px 18px;border-radius:14px;font-size:13px;font-weight:800;z-index:100;animation:toast-bounce 4s cubic-bezier(0.16,1,0.3,1) forwards;pointer-events:none;max-width:90%;text-align:center;letter-spacing:-0.01em;text-shadow:0 1px 2px rgba(0,0,0,0.8);}.event-toast.variant-goal{box-shadow:0 0 0 2px var(--cl-gold),0 0 0 4px rgba(251,191,36,0.3),0 12px 40px rgba(0,0,0,0.7),0 0 60px rgba(251,191,36,0.4);}.event-toast.variant-goal strong{color:var(--cl-gold-text);}.event-toast.variant-yellow{box-shadow:0 0 0 2px #f59e0b,0 0 0 4px rgba(245,158,11,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-yellow strong{color:#fbbf24;}.event-toast.variant-red{box-shadow:0 0 0 2px var(--cl-live),0 0 0 4px rgba(239,68,68,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-red strong{color:#fca5a5;}@keyframes toast-bounce{0%{opacity:0;transform:translate(-50%,-20px) scale(0.7);}8%{opacity:1;transform:translate(-50%,0) scale(1.08);}14%{transform:translate(-50%,0) scale(1);}90%{opacity:1;transform:translate(-50%,0) scale(1);}100%{opacity:0;transform:translate(-50%,-10px) scale(0.95);}}`]}}customElements.get("soccer-live-matches")||customElements.define("soccer-live-matches",x)},4522(e,t,a){a.d(t,{PA:()=>n,QG:()=>l,_$:()=>o,u:()=>r});var i=a(3957),s=a(6639);const n=(e,t,a,s=null)=>i.qy`
  <ha-card style="padding: 20px 18px; text-align: center; color: var(--cl-live, var(--error-color, #ef5350)); background: var(--cl-bg, var(--card-background-color)); border: 1px solid var(--cl-glass-border, rgba(239,68,68,0.24)); border-radius: 18px; box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.24));">
    <div style="font-size: 26px; margin-bottom: 10px;">${e}</div>
    <div style="font-size: 14px; font-weight: 800; margin-bottom: 5px; color: var(--cl-text, var(--primary-text-color));">${t}</div>
    <div style="font-size: 12px; color: var(--cl-text-2, var(--secondary-text-color)); margin-bottom: 8px;">${a}</div>
    ${s?i.qy`<div style="font-size: 11px; color: var(--cl-text-2, var(--secondary-text-color)); background: var(--cl-surface, rgba(0,0,0,0.1)); border: 1px solid var(--cl-divider, transparent); padding: 8px; border-radius: 8px; margin-top: 8px;">${s}</div>`:""}
  </ha-card>
`,r=(e,t)=>{const a=(0,s.a)(e);if(!a)return null;const i=t(a.title),r=t(a.sub);return"error"===a.kind?n(a.icon,i,r,t("ui.check_integration")):l(a.icon,i,r)},o=(e,t,a)=>e&&r(e.sync_status,t)||a(),l=(e,t,a,s=null)=>i.qy`
  <ha-card style="padding: 26px 18px; text-align: center; color: var(--cl-text-2, var(--secondary-text-color)); background: var(--cl-bg, var(--card-background-color)); border: 1px solid var(--cl-glass-border, rgba(255,255,255,0.10)); border-radius: 18px; box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.20));">
    <div style="font-size: 32px; margin-bottom: 12px; opacity: 0.55;">${e}</div>
    <div style="font-size: 13px; font-weight: 800; margin-bottom: 4px; color: var(--cl-text, var(--primary-text-color));">${t}</div>
    <div style="font-size: 12px; opacity: 0.78; margin-bottom: 8px;">${a}</div>
    ${s?i.qy`<div style="font-size: 11px; opacity: 0.62; margin-top: 8px;">${s}</div>`:""}
  </ha-card>
`},7554(e,t,a){a.d(t,{M:()=>s,t:()=>n});var i=a(3957);const s=i.AH`:host{-webkit-tap-highlight-color:transparent;}ha-card{position:relative;overflow:hidden;border-radius:20px;box-shadow:0 4px 24px var(--cl-shadow,rgba(0,0,0,0.24));background:var(--cl-bg);color:var(--cl-text);}.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.18),transparent 55%),radial-gradient(ellipse at 100% 100%,rgba(var(--cl-accent-2-rgb),0.14),transparent 55%);pointer-events:none;z-index:0;}.hero-bg::after{content:'';position:absolute;inset:0;background-image:var(--cl-bg-image,none);background-repeat:no-repeat;background-position:center;background-size:var(--cl-bg-image-size,80%) auto;opacity:var(--cl-bg-image-opacity,0.07);pointer-events:none;}.bg-logos{position:absolute;inset:0;display:flex;justify-content:space-between;align-items:center;pointer-events:none;overflow:hidden;z-index:0;}.bg-logo{width:60%;height:140%;display:flex;align-items:center;opacity:0.08;}.bg-logo.home{justify-content:flex-start;transform:translateX(-30%);}.bg-logo.away{justify-content:flex-end;transform:translateX(30%);}.bg-logo img{width:100%;object-fit:contain;}.card-content{position:relative;z-index:1;}.top-bar{position:relative;z-index:1;}button:focus-visible,[role="button"]:focus-visible,select:focus-visible,input:focus-visible,summary:focus-visible,a:focus-visible{outline:3px solid color-mix(in srgb,var(--cl-accent,#6366f1) 72%,white);outline-offset:2px;}.match-row,.h2h-row,.tl-row,.squad-row,.transfer-row,.injury-row{content-visibility:auto;contain-intrinsic-size:auto 52px;}@media (pointer:coarse){button,[role="button"],select{min-height:36px;}}@media (prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto !important;animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;}}`;function n(e,t){return i.qy`
    <div class="bg-logos">
      ${e?i.qy`<div class="bg-logo home"><img src="${e}" alt="" loading="lazy"></div>`:""}
      ${t?i.qy`<div class="bg-logo away"><img src="${t}" alt="" loading="lazy"></div>`:""}
    </div>
    <div class="hero-bg"></div>
  `}},2007(e,t,a){a.d(t,{YV:()=>o,wH:()=>l,yj:()=>s});var i=a(3957);const s=i.AH`.editor-section{margin-bottom:20px;}.editor-section h3{margin:12px 0 8px;font-size:13px;text-transform:uppercase;color:var(--secondary-text-color);}.editor-field{margin-bottom:12px;}.field-label{display:block;font-size:12px;font-weight:600;margin-bottom:4px;color:var(--primary-text-color);}.field-hint{display:block;font-size:11px;color:var(--secondary-text-color);margin-top:2px;}select,input,ha-entity-picker{width:100%;}.field-info{background:rgba(33,150,243,0.1);border-left:3px solid var(--primary-color);padding:8px 12px;border-radius:2px;font-size:12px;margin-top:8px;}.field-warning{background:rgba(255,152,0,0.1);border-left:3px solid #ff9800;padding:8px 12px;border-radius:2px;font-size:12px;margin-top:8px;}`,n=[["en","English"],["nl","Nederlands"],["de","Deutsch"],["pt","Português"],["fr","Français"],["es","Español"],["it","Italiano"]],r=Object.fromEntries(n);function o(e,t,a){const s=e=>"function"==typeof a?a(e):e,o=t?.entity||t?.entities&&t.entities[0],c=o&&e?.hass?.states?.[o]?.attributes?.card_defaults?.language,d=t?.language||"",p=c?`${r[c]||c} · ${s("skin.shared")}${l(e,t,s)}`:s("lang.auto");return i.qy`
    <label class="field-label">${s("editor.language")}</label>
    <select @change=${a=>{const i=a.target.value,s={...t};i?s.language=i:delete s.language,function(e,t){"function"==typeof e._fireConfigChanged?e._fireConfigChanged(t):"function"==typeof e._fire?e._fire(t):(e._config=t,e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0})),e.requestUpdate?.())}(e,s)}}>
      <option value="" ?selected=${!d}>${p}</option>
      ${n.map(([e,t])=>i.qy`<option value="${e}" ?selected=${d===e}>${t}</option>`)}
    </select>
  `}function l(e,t,a){const i=t?.entities;if(!Array.isArray(i)||i.length<=1)return"";const s=i[0];if(!s)return"";const n=e?.hass?.states?.[s]?.attributes?.friendly_name||s;return` (${"function"==typeof a?a("skin.via"):"via"} ${n})`}},1979(e,t,a){a.d(t,{Mt:()=>s,bY:()=>n});var i=a(3957);const s=i.AH`.spinner-container{display:flex;align-items:center;justify-content:center;padding:24px;min-height:100px;}.spinner{display:inline-block;width:20px;height:20px;border:2px solid var(--cl-chip-border,rgba(255,255,255,0.3));border-radius:50%;border-top-color:var(--cl-accent,var(--primary-color,#2196F3));animation:spinner-rotate 1s linear infinite;}@keyframes spinner-rotate{to{transform:rotate(360deg);}}.spinner-text{margin-left:12px;font-size:12px;color:var(--cl-text-2,var(--secondary-text-color));}`,n=(e="Loading...")=>i.qy`
  <div class="spinner-container">
    <div class="spinner"></div>
    <span class="spinner-text">${e}</span>
  </div>
`;i.AH`@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.5;}}`},5247(e,t,a){a.d(t,{Q:()=>r});const i="soccer_live_cache_",s=864e5,n=new Map;class r{static _cacheKeys(){return Array.from({length:localStorage.length},(e,t)=>localStorage.key(t)).filter(e=>e?.startsWith(i))}static _prune(){try{const e=Date.now(),t=[];for(const a of this._cacheKeys())try{const i=JSON.parse(localStorage.getItem(a));if(!Number.isFinite(i?.timestamp)||e-i.timestamp>=s){localStorage.removeItem(a),n.delete(a.slice(18));continue}t.push({key:a,timestamp:i.timestamp})}catch(e){localStorage.removeItem(a),n.delete(a.slice(18))}t.sort((e,t)=>t.timestamp-e.timestamp).slice(50).forEach(({key:e})=>{localStorage.removeItem(e),n.delete(e.slice(18))})}catch(e){console.debug("Failed to prune cache:",e)}}static set(e,t){try{const a=JSON.stringify(t);if(n.get(e)===a)return;n.size>=50&&n.delete(n.keys().next().value),n.set(e,a),localStorage.setItem(i+e,JSON.stringify({timestamp:Date.now(),data:t})),this._prune()}catch(e){console.debug("Failed to cache:",e)}}static get(e){try{const t=localStorage.getItem(i+e);if(!t)return null;const{timestamp:a,data:n}=JSON.parse(t),r=Date.now()-a;return r<s?{data:n,age:r,isCached:!0}:(this.clear(e),null)}catch(e){return console.debug("Failed to read cache:",e),null}}static clear(e){try{localStorage.removeItem(i+e),n.delete(e)}catch(e){console.debug("Failed to clear cache:",e)}}static clearAll(){try{this._cacheKeys().forEach(e=>localStorage.removeItem(e)),n.clear()}catch(e){console.debug("Failed to clear all cache:",e)}}static getAge(e){try{const t=localStorage.getItem(i+e);if(!t)return null;const{timestamp:a}=JSON.parse(t),s=Date.now()-a,n=Math.floor(s/6e4);if(n<60)return`${n}m ago`;const r=Math.floor(n/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}catch(e){return null}}}},2549(e,t,a){function i(e){if(e?.season&&"unknown"!==e.season)return String(e.season);const t=String(e?.date_iso||e?.date||"").match(/((?:19|20)\d{2})-(\d{2})/);if(!t)return"unknown";const a=Number(t[1]),i=Number(t[2])>=7?a:a-1;return`${i}/${String(i+1).slice(-2)}`}function s(e){if(!e||"object"!=typeof e)return null;let t=e.home_score??e.thuis_score??e.score_home,a=e.away_score??e.uit_score??e.score_away;const i=String(e.uitslag||e.score||"").match(/(\d+)\s*[-–:]\s*(\d+)/);i&&(t??=Number(i[1]),a??=Number(i[2]));const s=String(e.date_iso??e.datetime??e.date??e.datum??""),n=s.match(/^(\d{2})-(\d{2})-((?:19|20)\d{2})(.*)$/);return{...e,event_id:e.event_id??e.id??e.wedstrijd_id,date_iso:n?`${n[3]}-${n[2]}-${n[1]}${n[4]}`:s,date:e.date??e.datum,home_team:e.home_team??e.home??e.thuis??e.team_home,away_team:e.away_team??e.away??e.uit??e.team_away,home_score:t,away_score:a,competition_name:e.competition_name??e.league_name??e.competitie??e.soort}}function n(e){const t=e?.attributes||{},a=t.match_archive||t.matches||t.uitslagen||[];return Array.isArray(a)?a.map(s).filter(Boolean):[]}function r(e){return String(e||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\b(fc|cf|sc|afc|rotterdam)\b/g,"").replace(/[^a-z0-9]/g,"")}function o(e,t){const a=r(e),i=r(t);return Boolean(a&&i&&(a===i||a.includes(i)||i.includes(a)))}function l(e,t,a){return(e||[]).map(s).filter(e=>e&&(o(e.home_team,t)&&o(e.away_team,a)||o(e.home_team,a)&&o(e.away_team,t))&&Number.isFinite(Number(e.home_score))&&Number.isFinite(Number(e.away_score))).sort((e,t)=>String(t.date_iso||t.date||"").localeCompare(String(e.date_iso||e.date||"")))}function c(e,t){const a=String(t||"").toLowerCase(),i=String(e?.home_team||"").toLowerCase(),s=String(e?.away_team||"").toLowerCase(),n=(e,t)=>e===t||e.length>=4&&t.length>=4&&(e.includes(t)||t.includes(e)),r=a&&n(s,a);if(a&&!n(i,a)&&!r)return null;const o=Number(r?e.away_score:e.home_score),l=Number(r?e.home_score:e.away_score);return Number.isFinite(o)&&Number.isFinite(l)?{code:o>l?"w":o<l?"l":"d",own:o,other:l,venue:r?"away":"home",opponent:r?e.home_team:e.away_team}:null}function d(e){const t=String(e?.date_iso||e?.date||"").match(/((?:19|20)\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}`:""}function p(e,t){const a={matches:0,won:0,drawn:0,lost:0,goals_for:0,goals_against:0,clean_sheets:0,longest_unbeaten:0,longest_winning:0};let i=0,s=0;for(const n of[...e].reverse()){const e=c(n,t);e&&(a.matches+=1,a.goals_for+=e.own,a.goals_against+=e.other,0===e.other&&(a.clean_sheets+=1),"w"===e.code?(a.won+=1,s+=1,i+=1):"d"===e.code?(a.drawn+=1,s=0,i+=1):(a.lost+=1,s=0,i=0),a.longest_unbeaten=Math.max(a.longest_unbeaten,i),a.longest_winning=Math.max(a.longest_winning,s))}return a.goal_difference=a.goals_for-a.goals_against,a.win_percentage=a.matches?Math.round(a.won/a.matches*100):0,a}function h(e,t,a="",s="",n={}){const r=Array.isArray(e)?e:[],o=[...new Set(r.map(i).filter(e=>"unknown"!==e))].sort().reverse(),l=[...new Set(r.map(e=>e.competition_name||e.league_name).filter(Boolean))].sort(),h=r.filter(e=>(!a||i(e)===a)&&(!s||(e.competition_name||e.league_name)===s)&&(!n.location||c(e,t)?.venue===n.location)&&(!n.result||c(e,t)?.code===n.result)&&(!n.opponent||String(c(e,t)?.opponent||"").toLowerCase().includes(String(n.opponent).toLowerCase()))),u=[...new Set(h.map(d).filter(Boolean))].sort().slice(-12).map(e=>{const a=h.filter(t=>d(t)===e);return{month:e,...p(a,t)}}),g=o.slice(0,5).map(e=>({season:e,...p(r.filter(t=>i(t)===e),t)})),m=h.map(e=>({match:e,result:c(e,t)})).filter(e=>e.result),f=new Map;m.forEach(({result:e})=>f.set(e.opponent,(f.get(e.opponent)||0)+1));const _=["home","away"].map(e=>({location:e,...p(h.filter(a=>c(a,t)?.venue===e),t)})),b=m.map(({match:e,result:t})=>({match:e,result:t,margin:t.own-t.other}));return{matches:h,seasons:o,competitions:l,stats:p(h,t),monthly:u,seasonComparison:g,homeAway:_,commonOpponents:[...f.entries()].sort((e,t)=>t[1]-e[1]).slice(0,8).map(([e,t])=>({name:e,matches:t})),biggestWin:b.filter(e=>e.margin>0).sort((e,t)=>t.margin-e.margin)[0]||null,biggestLoss:b.filter(e=>e.margin<0).sort((e,t)=>e.margin-t.margin)[0]||null}}a.d(t,{TH:()=>l,V1:()=>n,XS:()=>s,c3:()=>c,sc:()=>h})},6195(e,t,a){a.d(t,{BD:()=>o,Bg:()=>h,CN:()=>E,Fn:()=>g,IK:()=>b,J5:()=>y,Mn:()=>d,Od:()=>f,Pc:()=>z,Tr:()=>x,V5:()=>m,VK:()=>c,Wg:()=>q,YW:()=>r,i2:()=>_,mR:()=>u,oD:()=>n,tC:()=>k,u7:()=>p,vr:()=>S,ws:()=>l,x8:()=>w,xV:()=>A,zu:()=>v});var i=a(5186);const s=[["Goalkeeper","club.goalkeepers"],["Defender","club.defenders"],["Midfielder","club.midfielders"],["Attacker","club.attackers"]];function n(e){return Boolean(e&&(e.profile||e.coach||e.squad?.length||e.transfers?.length))}function r(e){const t=Array.isArray(e)?e:[];return s.map(([e,a])=>({pos:e,key:a,players:t.filter(t=>t&&t.position===e)})).filter(e=>e.players.length>0)}function o(e,t=8){return(Array.isArray(e)?e:[]).slice(0,Math.max(0,t))}function l(e,t){const a=Array.isArray(e)?e:[];if(!t||t<1)return{groups:a,hidden:0};let i=0;return{groups:a.map(e=>{const a=(e.players||[]).slice(0,t);return i+=(e.players||[]).length-a.length,{...e,players:a}}),hidden:i}}function c(e,t){const a=Array.isArray(e)?e:[];return"in"===t||"out"===t?a.filter(e=>e&&e.direction===t):a}function d(e){const t=Array.isArray(e)?e:[];let a=0,i=0;for(const e of t)"in"===e?.direction?a+=1:"out"===e?.direction&&(i+=1);return{all:t.length,in:a,out:i}}function p(e){const t=e||{};return"in"===t.direction?t.from||"":t.to||""}function h(e){return e?String(e).split("-").reverse().join("-"):""}function u(e){const t=Array.isArray(e)?e:[],a=t.filter(e=>Number.isFinite(Number(e?.market_value))&&Number(e.market_value)>0),i=t.map(e=>Number(e?.age)).filter(Number.isFinite),s={};for(const e of a){const t=e.position||"Other";s[t]=(s[t]||0)+Number(e.market_value)}return{total:a.reduce((e,t)=>e+Number(t.market_value),0),valued_count:a.length,average_age:i.length?i.reduce((e,t)=>e+t,0)/i.length:null,by_position:s}}function g(e){const t=(Array.isArray(e)?e:[]).filter(e=>e?.name),a={};for(const e of t){const t=e.position||"Other",i=a[t]||={count:0,ages:[],value:0};i.count+=1;const s=Number(e.age);Number.isFinite(s)&&s>0&&i.ages.push(s);const n=Number(e.market_value);Number.isFinite(n)&&n>0&&(i.value+=n)}const i=Object.entries(a).map(([e,t])=>({position:e,count:t.count,averageAge:t.ages.length?t.ages.reduce((e,t)=>e+t,0)/t.ages.length:null,value:t.value})),s=t.filter(e=>Number.isFinite(Number(e.age))&&Number(e.age)>0);return{lines:i,youngest:s.length?s.reduce((e,t)=>Number(t.age)<Number(e.age)?t:e):null,oldest:s.length?s.reduce((e,t)=>Number(t.age)>Number(e.age)?t:e):null,thin:i.filter(e=>e.count<=2)}}function m(e){const t=e||{},a=Array.isArray(t.squad)?t.squad:[],i=Array.isArray(t.injuries)?t.injuries:[],s=new Map;for(const e of i){const t=e?.player||e?.name;t&&s.set(String(t).toLowerCase(),{...e,player:t})}for(const e of a.filter(e=>e?.injured)){const t=String(e.name||"").toLowerCase();t&&s.set(t,{...e,...s.get(t)||{},player:e.name})}return[...s.values()]}function f(e){return s.map(([t,a])=>{const i=(Array.isArray(e)?e:[]).filter(e=>e?.position===t),s=i.filter(e=>!e.injured).length;return{position:t,key:a,available:s,total:i.length,thin:i.length>0&&s<=("Goalkeeper"===t?1:2)}}).filter(e=>e.total>0)}function _(e,t=[]){const a=new Map,s=[...Array.isArray(t)?t:[]].sort((e,t)=>(0,i.Vp)(t?.date)-(0,i.Vp)(e?.date));for(const e of s){const t=null!=e?.player_id?`id:${e.player_id}`:"",i=e?.player?`name:${String(e.player).trim().toLowerCase()}`:"";t&&!a.has(t)&&a.set(t,e.direction),i&&!a.has(i)&&a.set(i,e.direction)}const n=(Array.isArray(e)?e:[]).filter(e=>e?.name&&!e.injured&&!(e=>{const t=null!=e?.id?a.get(`id:${e.id}`):null,i=a.get(`name:${String(e?.name||"").trim().toLowerCase()}`);return"out"===(t||i)})(e)),r=e=>10*Number(e.starts||e.appearances||0)+Number(e.rating||0),o=(e,t)=>n.filter(t=>t.position===e).sort((e,t)=>r(t)-r(e)).slice(0,t),l=[o("Goalkeeper",1),o("Defender",4),o("Midfielder",3),o("Attacker",3)],c=l.flat();return c.length>=7?{formation:"4-3-3",lines:l,players:c}:null}function b(e){const t=q(e),a=t?.match;if(!a)return null;const i=String(e?.team_id??""),s=String(e?.team_name||"").toLowerCase(),n=(i?String(a.home_id??"")===i:String(a.home_team||"").toLowerCase()===s)?a.lineup_home:a.lineup_away;return Array.isArray(n)&&n.length?{match:a,starters:n.filter(e=>!1!==e?.starter),substitutes:n.filter(e=>!1===e?.starter)}:null}function v(e,t){const a=[];for(const e of Array.isArray(t)?t:[])a.push({...e,source:"change"});for(const t of Array.isArray(e?.injuries)?e.injuries:[])a.push({type:"injury_added",player:t.player||t.name,detail:t.expected_return,source:"injury"});for(const t of(Array.isArray(e?.transfers)?e.transfers:[]).slice(0,5))a.push({type:"transfer_added",player:t.player,detail:t.direction,date:t.date,source:"transfer"});return[...new Map(a.map((e,t)=>[`${e.type}|${e.player||e.name}|${e.date||t}`,e])).values()].slice(0,10)}function x(e){const t=(Array.isArray(e)?e:[]).filter(Boolean).slice(0,2);return 2!==t.length?null:{players:t,fields:["age","market_value","appearances","goals","assists","rating"].filter(e=>t.some(t=>null!==t[e]&&void 0!==t[e]&&""!==t[e]))}}function y(e,t="",a="all",i="all"){const s=String(t||"").trim().toLowerCase();return(Array.isArray(e)?e:[]).filter(e=>!(!e||s&&!String(e.name||"").toLowerCase().includes(s)||"all"!==a&&e.position!==a||"available"===i&&e.injured||"unavailable"===i&&!e.injured))}function w(e,t,a){const i=String(t??""),s=String(a||"").trim().toLowerCase(),n=(Array.isArray(e)?e:[]).filter(e=>"post"===e?.state).map(e=>{const t=i?String(e.home_id??"")===i:String(e.home_team||"").trim().toLowerCase()===s,a=i?String(e.away_id??"")===i:String(e.away_team||"").trim().toLowerCase()===s;if(!t&&!a)return null;const n=Number(t?e.home_score:e.away_score),r=Number(t?e.away_score:e.home_score);return Number.isFinite(n)&&Number.isFinite(r)?{match:e,home:t,ours:n,theirs:r,result:n>r?"W":n<r?"L":"D",time:C(e)}:null}).filter(Boolean).sort((e,t)=>t.time-e.time);if(!n.length)return null;const r=e=>{let t=0;for(const a of n){if(!e(a))break;t+=1}return t},o=n.filter(e=>"W"===e.result).sort((e,t)=>t.ours-t.theirs-(e.ours-e.theirs))[0]||null,l=e=>{const t=n.filter(t=>t.home===e),a=t.reduce((e,t)=>e+("W"===t.result?3:"D"===t.result?1:0),0);return{games:t.length,pointsPerGame:t.length?a/t.length:null}};return{played:n.length,unbeaten:r(e=>"L"!==e.result),winning:r(e=>"W"===e.result),cleanSheets:r(e=>0===e.theirs),averageGoals:n.reduce((e,t)=>e+t.ours,0)/n.length,biggestWin:o?{score:`${o.ours}–${o.theirs}`,opponent:o.home?o.match.away_team:o.match.home_team}:null,home:l(!0),away:l(!1)}}const $=["profile","matchday","dashboard","quality","availability","selection","prediction","news","season","changes","favorites","records","analysis","injuries","comparison","squad","transfers","automations"];function k(e){const t=(Array.isArray(e)?e:String(e||"").split(",")).map(e=>String(e).trim().toLowerCase()).filter(e=>$.includes(e));return[...new Set([...t,...$])]}function C(e){const t=e?.date_iso||e?.date,a=t?new Date(t).getTime():NaN;return Number.isFinite(a)?a:0}function S(e){if(null==e)return"";const t=String(e).trim();return/^(?:n\/?a|none|null|undefined|-)$/i.test(t)?"":t}function q(e){const t=e||{},a=[...Array.isArray(t.matches)?t.matches:[],...Array.isArray(t.upcoming_matches)?t.upcoming_matches:[],...Array.isArray(t.previous_matches)?t.previous_matches:[],...t.next_match?[t.next_match]:[]].filter(Boolean),i=[...new Map(a.map((e,t)=>[String(e.event_id??`${e.home_team}|${e.away_team}|${e.date_iso||e.date}|${t}`),e])).values()],s=i.find(e=>"in"===e.state),n=i.filter(e=>"pre"===e.state).sort((e,t)=>C(e)-C(t))[0],r=i.filter(e=>"post"===e.state).sort((e,t)=>C(t)-C(e))[0],o=s||n||r||null;return o?{match:o,phase:s?"live":n?"pre":"post"}:null}function z(e){const t=Array.isArray(e?.squad)?e.squad:[],a=m(e),i=new Set(a.map(e=>String(e.player||"").trim().toLowerCase())),s=t.filter(e=>e?.injured||i.has(String(e?.name||"").trim().toLowerCase()));if(!s.length)return null;const n=[e=>e.starts,e=>e.appearances,e=>null==e.minutes?NaN:Number(e.minutes)/90],r=n.map((e,a)=>({read:e,priority:a,coverage:t.filter(t=>Number.isFinite(Number(e(t)))&&Number(e(t))>=0).length,total:t.reduce((t,a)=>{const i=Number(e(a));return t+(Number.isFinite(i)&&i>=0?i:0)},0)})).filter(e=>e.coverage>0&&e.total>0).sort((e,t)=>t.coverage-e.coverage||t.total-e.total||e.priority-t.priority)[0]?.read,o=e=>{const t=Number(r?.(e));return Number.isFinite(t)&&t>=0?t:0},l=t.reduce((e,t)=>e+o(t),0),c=s.reduce((e,t)=>e+o(t),0);return{players:s,count:s.length,loadPercent:l>0?Math.round(c/l*100):null,goals:s.reduce((e,t)=>e+(Number(t.goals)||0),0),assists:s.reduce((e,t)=>e+(Number(t.assists)||0),0)}}function A(e,t,a,i=12){const s=String(t??""),n=String(a||"").trim().toLowerCase(),r=(Array.isArray(e)?e:[]).filter(e=>{const t=`${e?.competition_name||""} ${e?.league_name||""}`.toLowerCase();return"post"===e?.state&&!0!==e.is_friendly&&!/friendl|oefen|amical|amistoso|freundschaft/.test(t)}).sort((e,t)=>C(e)-C(t));let o=0,l=0,c=0;const d=[];for(const e of r){const t=s?String(e.home_id??"")===s:String(e.home_team||"").trim().toLowerCase()===n,a=s?String(e.away_id??"")===s:String(e.away_team||"").trim().toLowerCase()===n;if(!t&&!a)continue;const i=Number(t?e.home_score:e.away_score),r=Number(t?e.away_score:e.home_score);if(!Number.isFinite(i)||!Number.isFinite(r))continue;const p=i>r?"W":i<r?"L":"D";o+="W"===p?3:"D"===p?1:0,l+=i,c+=r,d.push({points:o,result:p,goalsFor:l,goalsAgainst:c,opponent:t?e.away_team:e.home_team})}return{rounds:d.slice(-Math.max(1,i)),played:d.length,points:o,goalsFor:l,goalsAgainst:c}}function E(e){const t=Array.isArray(e)?e:[],a=e=>{if(null!=e?.fee&&""!==e?.fee){const t=Number(e.fee);if(Number.isFinite(t)&&t>=0)return t}const t=`${e?.fee_text||""} ${e?.type||""}`;if(!/[€$£]/.test(t))return null;const a=t.replace(",",".").match(/([\d.]+)\s*([mk])?/i);if(!a)return null;const i=Number(a[1]),s="m"===a[2]?.toLowerCase()?1e6:"k"===a[2]?.toLowerCase()?1e3:1;return Number.isFinite(i)?i*s:null},i=t.filter(e=>"in"===e?.direction),s=t.filter(e=>"out"===e?.direction),n=i.map(a).filter(e=>null!==e),r=s.map(a).filter(e=>null!==e),o=n.reduce((e,t)=>e+t,0),l=r.reduce((e,t)=>e+t,0),c=n.length+r.length,d=t.filter(e=>/loan|huur|leih|prêt|prest/i.test(`${e?.type||""} ${e?.fee_text||""}`)).length,p=t.filter(e=>/free|transfervrij|gratuit|ablösefrei|libre/i.test(`${e?.type||""} ${e?.fee_text||""}`)).length,h={};for(const e of t){const t=String(e?.date||""),a=t.slice(0,4),i=Number(t.slice(5,7));if(!/^\d{4}$/.test(a)||!Number.isFinite(i))continue;const s=`${a}-${i>=7?"summer":"winter"}`;h[s]=(h[s]||0)+1}return{incoming:i.length,outgoing:s.length,spent:o,income:l,balance:l-o,feeCoverage:c,loans:d,free:p,windows:h}}},1448(e,t,a){function i(e){return String(e||"").trim().toLowerCase().replace(/[._-]+/g," ").replace(/\s+/g," ").trim()}a.d(t,{VR:()=>l,rn:()=>o});const s={en:"Club Friendlies",nl:"Oefenwedstrijd",de:"Vereinsfreundschaftsspiele",es:"Amistosos de clubes",fr:"Matchs amicaux clubs",it:"Amichevoli club",pt:"Amistosos de clubes"},n={en:"Friendlies",nl:"Oefenwedstrijden",de:"Freundschaftsspiele",es:"Amistosos",fr:"Matchs amicaux",it:"Amichevoli",pt:"Amistosos"},r=new Set(["friendlies clubs","friendlies club","friendly clubs","friendly club","club friendlies","club friendly","friendlies","friendly",...Object.values(s).map(i),...Object.values(n).map(i)]);function o({competitionName:e,competitionLogo:t,fallbackLogo:a=null,isFriendly:s}={}){return("boolean"==typeof s?s:function(e){const t=i(e);return!!t&&(r.has(t)||/friendl/.test(t))}(e))?a:(t&&"N/A"!==t?t:null)||a}function l(e,t="en"){const a=String(e||"").trim();if(!a||"N/A"===a)return"";const r=i(a);return["friendlies clubs","friendlies club","friendly clubs","friendly club","club friendlies","club friendly"].includes(r)?s[t]||s.en:"friendlies"===r||"friendly"===r?n[t]||n.en:a}},3627(e,t,a){a.d(t,{by:()=>o,g6:()=>n,qd:()=>r});var i=a(3957);const s={error:"!",warning:"⚠",info:"ⓘ"};function n(e,t){if(!Array.isArray(e))return[];const a=String(t?.event_id||""),i=String(t?.canonical_id||"");return e.filter(e=>!(!e||"object"!=typeof e)&&(!e.event_id&&!e.canonical_id||a&&String(e.event_id)===a||i&&String(e.canonical_id)===i))}function r(e,{t,compact:a=!1}={}){return Array.isArray(e)&&e.length?i.qy`
    <section class="data-alerts ${a?"compact":""}" role="status" aria-live="polite">
      ${e.map(e=>{const a=["error","warning","info"].includes(e.severity)?e.severity:"warning";return i.qy`
          <div class="data-alert ${a}">
            <b aria-hidden="true">${s[a]}</b>
            <span>${t?.(`alert.${e.code}`,e)||e.code}</span>
          </div>
        `})}
    </section>
  `:""}const o=i.AH`.data-alerts{display:grid;gap:6px;margin:10px 12px;}.data-alert{display:flex;align-items:flex-start;gap:8px;padding:8px 10px;border:1px solid color-mix(in srgb,currentColor 28%,transparent);border-radius:10px;background:color-mix(in srgb,currentColor 9%,transparent);color:var(--cl-warning,#f59e0b);font-size:11px;line-height:1.35;}.data-alert.error{color:var(--cl-live,#ef4444);}.data-alert.info{color:var(--cl-accent,#6366f1);}.data-alert b{flex:0 0 14px;text-align:center;}.data-alerts.compact{margin:10px 0 0;}`},6472(e,t,a){function i(e){return!0===e?.detail_loaded||Boolean(e?.key_events?.length||e?.lineup_home?.length||e?.lineup_away?.length||Object.keys(e?.home_statistics||{}).length||e?.momentum?.length||e?.shotmap?.length)}async function s(e,t,a){const s=t?.detail_service;if(!s||!a?.event_id||i(a))return!1;const[n,r]=String(s).split(".",2);return!(!n||!r||"function"!=typeof e?.callService||(await e.callService(n,r,{...t.detail_service_data||{},match_id:String(a.event_id)}),0))}function n(e,t){return t?String(e?.next_match?.event_id)===String(t)?e.next_match:(e?.matches||[]).find(e=>String(e.event_id)===String(t))||null:null}a.d(t,{Hl:()=>n,NZ:()=>s,wn:()=>i})},5360(e,t,a){a.d(t,{UK:()=>s,WY:()=>r,_Z:()=>i,sH:()=>o,tU:()=>n});const i=["delay","drink break","cooling break","video review"];function s(e){const t=(e.type||"").toLowerCase(),a=(e.type_text||"").toLowerCase();return!(a.includes("missed")||a.includes("disallow")||a.includes("cancel"))&&(!!e.scoring_play||"goal"===t||a.includes("penalty - scored"))}function n(e){if(!e)return null;const t=(e.type||"").toLowerCase(),a=(e.type_text||"").toLowerCase();if(i.some(e=>a.includes(e)))return null;let n="meta";s(e)?n="goal":a.includes("yellow")?n="yellow":a.includes("red card")?n="red":("substitution"===t||a.includes("substitut"))&&(n="sub");const o=(e.athletes||[]).filter(Boolean),l=r[a]||null,c=e.type_text||e.short_text||"",d="meta"!==n||!!l;return o.length||l||c.trim()?{btype:n,i18nKey:l,athletes:o,fallbackText:c,known:d}:null}const r={kickoff:"status.kickoff",halftime:"status.halftime","half time":"status.halftime","end of half":"status.halftime","start 2nd half":"status.second_half","second half":"status.second_half","2nd half":"status.second_half","first half":"status.first_half","1st half":"status.first_half","in progress":"status.live",live:"status.live","full time":"status.full_time",final:"status.full_time","end regular time":"status.full_time",end:"status.end","extra time":"status.extra_time","start extra time":"status.extra_time_start","halftime extra time":"status.extra_time_halftime","half time extra time":"status.extra_time_halftime","start 2nd half extra time":"status.extra_time_second_half","2nd half extra time":"status.extra_time_second_half","end extra time":"status.extra_time_end",shootout:"status.shootout","penalty shootout":"status.shootout","start shootout":"status.shootout_start","end match":"status.end_match"};function o(e,t){const a=String(e||"").trim(),i=r[a.toLowerCase()];return i?t(i):a}},226(e,t,a){a.d(t,{N:()=>n,Ng:()=>r,t7:()=>s});var i=a(3957);const s=({logo:e,title:t,badge:a=null,fallbackIcon:s="⚽"})=>{const n=e&&"N/A"!==e?e:null;return i.qy`
  <div class="top-bar">
    <div class="competition">
      <span class="comp-icon">
        ${n?i.qy`
          <img src="${n}" alt=""
            @error=${e=>{e.target.style.display="none",e.target.nextElementSibling&&(e.target.nextElementSibling.style.display="")}}>
          <span style="display:none">${s}</span>
        `:s}
      </span>
      <span class="comp-name">${t||" "}</span>
    </div>
    ${a||""}
  </div>
`},n=(e,t="date")=>i.qy`
  <span class="sh-badge ${t}">${e}</span>
`,r=i.AH`.top-bar{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.08));}.competition{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:700;color:var(--cl-text);letter-spacing:-0.01em;min-width:0;}.comp-icon{flex-shrink:0;width:24px;height:24px;border-radius:8px;background:linear-gradient(135deg,var(--cl-accent,#6366f1),var(--cl-accent-2,#8b5cf6));display:flex;align-items:center;justify-content:center;font-size:12px;box-shadow:0 2px 8px rgba(var(--cl-accent-rgb,99 102 241),0.4);overflow:hidden;}.comp-icon img{width:100%;height:100%;object-fit:contain;}.comp-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.sh-badge{flex-shrink:0;padding:5px 11px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:0.06em;}.sh-badge.live{background:#e53935;color:#fff;}.sh-badge.ft{background:var(--cl-card-2,rgba(0,0,0,0.35));border:1px solid var(--cl-glass-border,rgba(255,255,255,0.1));color:var(--cl-text,#fff);}.sh-badge.date{background:var(--cl-card-2,rgba(0,0,0,0.35));border:1px solid var(--cl-glass-border,rgba(255,255,255,0.1));color:var(--cl-text,#fff);}.sh-badge.neutral{background:var(--cl-surface,rgba(255,255,255,0.08));color:var(--cl-text-2,#94a3b8);}`},1190(e,t,a){a.d(t,{d:()=>n,n:()=>s});var i=a(3957);const s=(e,{lang:t="en",t:a=e=>e,weatherBadge:s=null,showDate:n=!1,hideBroadcasts:r=!1}={})=>{if(!e)return i.qy``;const o=e.venue&&"N/A"!==e.venue?e.venue:"",l=e.venue_city&&"N/A"!==e.venue_city?e.venue_city:"",c=o?l?`${o}, ${l}`:o:"",d=e.neutral_site||!1,p=r?[]:Array.isArray(e.broadcasts)&&e.broadcasts.length?e.broadcasts:e.broadcast&&"N/A"!==e.broadcast?[e.broadcast]:[],h=parseInt(e.attendance,10),u=!isNaN(h)&&h>0,g=e.links||{},m=e.has_stats&&(g.stats||g.summary),f=e.has_commentary&&(g.commentary||g.summary),_=!!g.video,b=p.length||u||m||f||_,v=e=>e&&/^https?:\/\//i.test(e)&&window.open(e,"_blank","noopener,noreferrer");return i.qy`
    ${c||s||n?i.qy`
      <div class="smm-venue-row">
        ${c?i.qy`
          <div class="smm-venue">
            <svg class="smm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span title="${d?a("ui.neutral_site")||"Neutral venue":""}">${c}${d?" ⚖️":""}</span>
          </div>
        `:""}
        ${s||""}
        ${n&&e.date?i.qy`
          <div class="smm-date">
            <svg class="smm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>${e.date}</span>
          </div>
        `:""}
      </div>
    `:""}

    ${b?i.qy`
      <div class="smm-chips">
        ${p.length?i.qy`
          <span class="smm-chip broadcast">
            <svg class="smm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="13" rx="2"/>
              <polyline points="17 2 12 7 7 2"/>
            </svg>
            ${p.join(" · ")}
          </span>
        `:""}
        ${u?i.qy`
          <span class="smm-chip attendance">
            <svg class="smm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
            ${h.toLocaleString(t)} ${a("team.spectators")||""}
          </span>
        `:""}
        ${m?i.qy`
          <span class="smm-chip link" title="${a("ui.open_stats")||""}" @click=${()=>v(g.stats||g.summary)}>
            📊 ${a("card.stats")||"Stats"}
          </span>
        `:""}
        ${f?i.qy`
          <span class="smm-chip link" title="${a("ui.open_commentary")||""}" @click=${()=>v(g.commentary||g.summary)}>
            💬 ${a("card.commentary")||"Commentary"}
          </span>
        `:""}
        ${_?i.qy`
          <span class="smm-chip link" title="${a("ui.open_video")||""}" @click=${()=>v(g.video)}>
            🎬 ${a("card.video")||"Video"}
          </span>
        `:""}
      </div>
    `:""}
  `},n=i.AH`.smm-venue-row{display:flex;align-items:center;flex-wrap:wrap;gap:10px;padding:10px 18px;font-size:11px;color:var(--cl-text-2,#94a3b8);border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.smm-venue,.smm-date{display:flex;align-items:center;gap:4px;min-width:0;}.smm-venue span,.smm-date span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.smm-icon{width:13px;height:13px;flex-shrink:0;opacity:0.7;}.smm-chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 18px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.smm-chip{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;background:var(--cl-surface,rgba(255,255,255,0.06));color:var(--cl-text-2,#94a3b8);white-space:nowrap;}.smm-chip.link{cursor:pointer;color:var(--cl-accent,#6366f1);background:rgba(var(--cl-accent-rgb,99 102 241),0.1);}.smm-chip.link:hover{background:rgba(var(--cl-accent-rgb,99 102 241),0.2);}`},5151(e,t,a){a.d(t,{NM:()=>o,Ot:()=>n,_C:()=>s,oD:()=>r});var i=a(5186);function s(e){return e?.state?"post"===e.state:["full time","finished","final","einde wedstrijd"].includes(String(e?.status||"").trim().toLowerCase())}function n(e){return(0,i.Vp)(e?.date_iso)||(0,i.Vp)(e?.date)||null}function r(e){return null!=e?.event_id&&""!==e?.event_id?`event:${e.event_id}`:`fixture:${n(e)??String(e?.date_iso||e?.date||"")}:${e?.home_id??e?.home_team??""}:${e?.away_id??e?.away_team??""}`}function o(e){const t=e=>"in"===e?0:"pre"===e?1:"post"===e?2:3;return[...Array.isArray(e)?e:[]].sort((e,a)=>{const i=t(e?.state)-t(a?.state);if(i)return i;const s=n(e),r=n(a);return null===s&&null===r?0:null===s?1:null===r?-1:"post"===e?.state?r-s:s-r})}},5141(e,t,a){a.d(t,{Mh:()=>c,OG:()=>l,Qt:()=>p,Ve:()=>s,mz:()=>o,qU:()=>d,wk:()=>n});var i=a(5360);function s(e,t=Date.now()){const a=e?.date_iso||e?.date,i=a?new Date(a).getTime():NaN;return Number.isFinite(i)?Math.ceil((i-t)/6e4):null}function n(e,t=2){if(!Number.isFinite(e)||e<=0)return[];let a=Math.ceil(e);return[["day",Math.floor(a/1440)],["hour",Math.floor(a%1440/60)],["minute",a%60]].filter(([,e])=>e>0).slice(0,Math.max(1,t)).map(([e,t])=>({unit:e,value:t}))}function r(e){return Array.isArray(e)?e.map(e=>String(e?.result||e||"").slice(0,1).toUpperCase()).filter(e=>"WDL".includes(e)).slice(-5):String(e||"").toUpperCase().split("").filter(e=>"WDL".includes(e)).slice(-5)}function o(e){const t=e||{},a=t.preview||{},i=r(a.home_form||t.home_form),s=r(a.away_form||t.away_form),n=Array.isArray(t.head_to_head)?t.head_to_head:[],o=[t.home_rank,t.away_rank,t.home_standing_summary,t.away_standing_summary].some(e=>null!=e&&""!==e&&"N/A"!==e);return{homeForm:i,awayForm:s,h2h:n.slice(0,5),h2hCount:n.length||Number(a.h2h_count||0),hasStandings:o,competition:t.competition_name||t.league_name||"",round:t.week_number??t.round??""}}function l(e){const t=e?.review||{},a=Array.isArray(t.scorers)?t.scorers:[],i=Array.isArray(t.top_rated_players)?t.top_rated_players:[];return{scorers:a,playerOfMatch:t.player_of_the_match||e?.player_of_the_match||null,rated:i,expectedGoals:t.expected_goals||null,standout:t.standout_stat||null,present:Boolean(a.length||t.player_of_the_match||i.length||t.expected_goals||t.standout_stat)}}function c(e){if("post"!==e?.state)return null;const t=e.prediction||{},a=Number(e.home_score),i=Number(e.away_score);if(!Number.isFinite(a)||!Number.isFinite(i))return null;const s=a>i?"home":i>a?"away":"draw",n={home:Number(t.percent_home),draw:Number(t.percent_draw),away:Number(t.percent_away)};let r=null;const o=String(t.winner_name||"").trim().toLowerCase();if(o&&e.home_team&&o===String(e.home_team).trim().toLowerCase()&&(r="home"),o&&e.away_team&&o===String(e.away_team).trim().toLowerCase()&&(r="away"),!r){const e=Object.entries(n).filter(([,e])=>Number.isFinite(e)).sort((e,t)=>t[1]-e[1]);e.length&&(1===e.length||e[0][1]>e[1][1])&&(r=e[0][0])}if(!r)return null;const l=e.review?.expected_goals||e.expected_goals||null;return{predicted:r,actual:s,correct:r===s,predictedPercent:Number.isFinite(n[r])?n[r]:null,xg:!l||null==l.home&&null==l.away?null:l}}function d(e){if(Array.isArray(e?.match_story)&&e.match_story.length)return e.match_story;const t=(Array.isArray(e?.key_events)?e.key_events:[]).filter(e=>e&&((0,i.UK)(e)||/red/i.test(`${e.type||""} ${e.type_text||""}`))).sort((e,t)=>Number(e.minute??e.clock??0)-Number(t.minute??t.clock??0));if(!t.length)return[];const a=t.filter(i.UK),s=[];a[0]&&s.push({...a[0],type:"opening_goal",minute:a[0].minute??a[0].clock});for(const e of a.slice(1))null!=e.home_score&&null!=e.away_score&&Number(e.home_score)===Number(e.away_score)&&s.push({...e,type:"equalizer",minute:e.minute??e.clock});for(const e of t.filter(e=>/red/i.test(`${e.type||""} ${e.type_text||""}`)))s.push({...e,type:"red_card",minute:e.minute??e.clock});const n=Number(e.home_score),r=Number(e.away_score),o=n>r?e.home_team:r>n?e.away_team:"",l=[...a].reverse().find(e=>o&&e.team===o);return l&&l!==a[0]&&s.push({...l,type:"decisive_goal",minute:l.minute??l.clock}),[...new Map(s.map(e=>[`${e.type}:${e.minute}:${e.player||e.athletes?.[0]||""}`,e])).values()].sort((e,t)=>Number(e.minute||0)-Number(t.minute||0))}function p(e){if(!e||!["in","live","post"].includes(e.state))return[];const t=[],a=Number(e.home_score),s=Number(e.away_score);Number.isFinite(a)&&Number.isFinite(s)&&t.push({key:"post"===e.state?"story.final_result":"story.current_score",vars:{home:e.home_team,away:e.away_team,score:`${a}–${s}`}});const n=(e.key_events||[]).filter(i.UK),r=a>s?e.home_team:s>a?e.away_team:"";r&&n.some(t=>{const a=Number(t.home_score),i=Number(t.away_score);return!(!Number.isFinite(a)||!Number.isFinite(i))&&(r===e.home_team?a<i:i<a)})&&t.push({key:"story.comeback",vars:{team:r}});const o=e.review?.expected_goals||e.expected_goals||{},l=Number(o.home),c=Number(o.away);Number.isFinite(l)&&Number.isFinite(c)&&Math.abs(l-c)>=1&&t.push({key:"story.xg_dominance",vars:{team:l>c?e.home_team:e.away_team,value:Math.max(l,c).toFixed(2)}});const d=Number(e.home_statistics?.shots??e.home_statistics?.total_shots),p=Number(e.away_statistics?.shots??e.away_statistics?.total_shots);return Number.isFinite(d)&&Number.isFinite(p)&&Math.abs(d-p)>=5&&t.push({key:"story.shot_dominance",vars:{team:d>p?e.home_team:e.away_team,value:Math.max(d,p)}}),t.slice(0,3)}},8136(e,t,a){function i(e){const t=e||{},a=Array.isArray(t.matches)?t.matches:[],i=a.find(e=>e&&"in"===e.state);return i||((Array.isArray(t.upcoming_matches)?t.upcoming_matches:[])[0]||a.find(e=>e&&"pre"===e.state)||t.next_match||null)}function s(e){return e?"in"===e.state?"live":e.time_tbd?"tbd":e.date_iso||(e.date||"").split(" ")[1]?"time":"date":"none"}function n(e){return(e||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function r(e,t){const a=n(e),i=n(t);if(!a||!i)return!1;if(a===i)return!0;const s=a.split(" "),r=i.split(" "),o=(e,t)=>e.every(e=>t.includes(e));return o(s,r)||o(r,s)}function o(e,t,a){const i=e&&e[t+"_id"];return a&&null!=a.id&&null!=i?String(i)===String(a.id):r(e&&e[t+"_team"],a&&a.name)}function l(e,t,a=10){const i=(s=t)&&"object"==typeof s?{name:s.name||"",id:null!=s.id?s.id:null}:{name:s||"",id:null};var s;if(!i.name&&null==i.id)return null;const n=e||{},r=Array.isArray(n.previous_matches)&&n.previous_matches.length?n.previous_matches:(Array.isArray(n.matches)?n.matches:[]).filter(e=>"post"===e.state),l=[];for(const e of r){const t=o(e,"home",i),s=o(e,"away",i);if(!t&&!s)continue;const n=parseInt(e.home_score,10),r=parseInt(e.away_score,10);if(!Number.isNaN(n)&&!Number.isNaN(r)&&(l.push(n===r?"D":t&&n>r||s&&r>n?"W":"L"),l.length>=a))break}return l.length?{results:l,w:l.filter(e=>"W"===e).length,d:l.filter(e=>"D"===e).length,l:l.filter(e=>"L"===e).length}:null}function c(e,t=20){const a=e||{},i=Array.isArray(a.standings)?a.standings:[],s=a.standings_groups&&a.standings_groups[0]&&a.standings_groups[0].standings;return(i.length?i:Array.isArray(s)?s:[]).slice(0,Math.max(0,t)).map((e,t)=>({rank:null!=e.rank?e.rank:t+1,team:e.team_name||e.team||"",played:null!=e.played?e.played:(e.wins||0)+(e.draws||0)+(e.losses||0),gd:e.goal_difference,points:e.points}))}function d(e){return"standings"===e?["standings"]:"all_matches_today"===e?["fixtures"]:["fixtures","next","standings","form"]}a.d(t,{Eb:()=>l,Kd:()=>r,SF:()=>s,SW:()=>d,T0:()=>c,YU:()=>i,YZ:()=>o})},6381(e,t,a){a.d(t,{Ri:()=>o,hl:()=>l});var i=a(3957);function s(e){return e?String(e).split(/[-\s]+/).map(Number).filter(e=>Number.isFinite(e)&&e>0):[]}function n(e){const t=String(e?.position??"").toUpperCase();return"GK"===t||"G"===t}function r(e,t){if(!e.length)return[];let a=e.findIndex(n);-1===a&&(a=0);const i=e[a],s=e.filter((e,t)=>t!==a),r=[[i]];let o=0;for(const e of t){if(o>=s.length)break;r.push(s.slice(o,o+e)),o+=e}return o<s.length&&r.push(s.slice(o)),r}function o(e,t={}){const a=t.t||(e=>e),o=!1!==t.showBench,l=e.lineup_home||[],c=e.lineup_away||[];if(!l.length&&!c.length)return null;const d=s(e.formation_home),p=s(e.formation_away);if(!d.length&&!p.length)return null;const h=e=>e.some(e=>!0===e.starter||!1===e.starter),u=h(l)?l.filter(e=>!0===e.starter):l,g=h(l)?l.filter(e=>!1===e.starter):[],m=h(c)?c.filter(e=>!0===e.starter):c,f=h(c)?c.filter(e=>!1===e.starter):[],_=r(u,d),b=r(m,p),v=_.length>1?[..._.slice(1).reverse(),_[0]]:_,x=(e,t)=>i.qy`
    <div class="pit-row">${e.map(e=>((e,t)=>i.qy`
    <div class="pit-player">
      <div class="pit-dot ${t}${n(e)?" gk":""}">${e.jersey||""}</div>
      <div class="pit-name">${function(e){const t=e.short_name||e.name||"";return/^[A-Z]\. /.test(t)?t.slice(3):t}(e)}</div>
    </div>
  `)(e,t))}</div>
  `,y=e=>i.qy`
    <div class="pit-bench-p">
      <span class="pit-bench-num">${e.jersey||""}</span>
      <span>${e.short_name||e.name||""}</span>
    </div>
  `;return i.qy`
    <div class="pit-outer">
      <div class="pit-field">
        <svg class="pit-lines" viewBox="0 0 100 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="98" height="148" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1"/>
          <rect x="20" y="1" width="60" height="24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
          <rect x="37" y="1" width="26" height="8" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <circle cx="50" cy="17" r="1.5" fill="rgba(255,255,255,0.5)"/>
          <path d="M 44 25 A 10 10 0 0 1 56 25" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
          <line x1="1" y1="75" x2="99" y2="75" stroke="rgba(255,255,255,0.55)" stroke-width="1"/>
          <circle cx="50" cy="75" r="13" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="0.8"/>
          <circle cx="50" cy="75" r="1.5" fill="rgba(255,255,255,0.5)"/>
          <rect x="20" y="125" width="60" height="24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
          <rect x="37" y="141" width="26" height="8" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <circle cx="50" cy="133" r="1.5" fill="rgba(255,255,255,0.5)"/>
          <path d="M 44 125 A 10 10 0 0 1 56 125" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
          <path d="M 1 6 A 5 5 0 0 1 6 1" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <path d="M 94 1 A 5 5 0 0 1 99 6" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <path d="M 1 144 A 5 5 0 0 1 6 149" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
          <path d="M 94 149 A 5 5 0 0 1 99 144" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>
        </svg>
        ${e.formation_away?i.qy`<div class="pit-fm away">${e.formation_away}</div>`:""}
        <div class="pit-half">${b.map(e=>x(e,"away"))}</div>
        <div class="pit-mid"></div>
        <div class="pit-half">${v.map(e=>x(e,"home"))}</div>
        ${e.formation_home?i.qy`<div class="pit-fm home">${e.formation_home}</div>`:""}
      </div>
      ${o&&(g.length||f.length)?i.qy`
        <div class="pit-bench">
          <div>
            <div class="pit-bench-title">${e.home_team||a("generic.home")}</div>
            ${g.map(y)}
          </div>
          <div>
            <div class="pit-bench-title">${e.away_team||a("generic.away")}</div>
            ${f.map(y)}
          </div>
        </div>
      `:""}
    </div>
  `}const l=i.AH`.pit-outer{}.pit-field{position:relative;background-color:#2d7d30;background-image:repeating-linear-gradient(180deg,transparent,transparent 36px,rgba(0,0,0,0.06) 36px,rgba(0,0,0,0.06) 72px);border-radius:6px;margin:12px;overflow:hidden;}.pit-lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;}.pit-fm{position:absolute;z-index:1;font-size:9px;font-weight:800;letter-spacing:0.04em;color:rgba(255,255,255,0.6);padding:3px 6px;}.pit-fm.away{top:4px;right:6px;}.pit-fm.home{bottom:4px;left:6px;}.pit-half{display:flex;flex-direction:column;gap:10px;padding:10px 8px;}.pit-mid{height:24px;}.pit-row{display:flex;justify-content:space-around;align-items:flex-start;}.pit-player{display:flex;flex-direction:column;align-items:center;gap:2px;min-width:34px;}.pit-dot{width:30px;height:30px;border-radius:50%;background:var(--cl-accent,#6366f1);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:white;box-shadow:0 2px 6px rgba(0,0,0,0.5);}.pit-dot.away{background:#374151;}.pit-dot.gk{background:#d946ef;}.pit-dot.away.gk{background:#6b7280;}.pit-name{font-size:8px;font-weight:600;color:rgba(255,255,255,0.95);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:54px;text-shadow:0 1px 3px rgba(0,0,0,0.9);}.pit-bench{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:12px 16px;border-top:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.pit-bench-title{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);margin-bottom:6px;}.pit-bench-p{display:flex;align-items:center;gap:5px;font-size:11px;padding:3px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.04));}.pit-bench-num{font-size:10px;font-weight:800;color:var(--cl-accent,#6366f1);min-width:16px;}`},7311(e,t,a){a.d(t,{zl:()=>g,Sj:()=>u,vK:()=>h,K4:()=>p});var i=a(3957);const s={nl:{"Combo Double chance":"Combi dubbele kans","Combo Winner":"Combi winnaar","Double chance":"Dubbele kans",Winner:"Winnaar"," or draw":" of gelijkspel"," and ":" en "," goals":" doelpunten","No predictions available":"Geen voorspelling beschikbaar"},de:{"Combo Double chance":"Kombi Doppelte Chance","Combo Winner":"Kombi Sieger","Double chance":"Doppelte Chance",Winner:"Sieger"," or draw":" oder Unentschieden"," and ":" und "," goals":" Tore","No predictions available":"Keine Prognose verfügbar"},es:{"Combo Double chance":"Combo doble oportunidad","Combo Winner":"Combo ganador","Double chance":"Doble oportunidad",Winner:"Ganador"," or draw":" o empate"," and ":" y "," goals":" goles","No predictions available":"Sin pronóstico disponible"},fr:{"Combo Double chance":"Combo double chance","Combo Winner":"Combo vainqueur","Double chance":"Double chance",Winner:"Vainqueur"," or draw":" ou match nul"," and ":" et "," goals":" buts","No predictions available":"Aucun pronostic disponible"},it:{"Combo Double chance":"Combo doppia chance","Combo Winner":"Combo vincente","Double chance":"Doppia chance",Winner:"Vincente"," or draw":" o pareggio"," and ":" e "," goals":" gol","No predictions available":"Nessun pronostico disponibile"},pt:{"Combo Double chance":"Combo dupla hipótese","Combo Winner":"Combo vencedor","Double chance":"Dupla hipótese",Winner:"Vencedor"," or draw":" ou empate"," and ":" e "," goals":" gols","No predictions available":"Sem previsão disponível"}},n=e=>"number"==typeof e&&isFinite(e)?e:null,r=["form","att","def"],o=new Set(["nl","de","fr","it","es","pt"]);function l(e,t){if(null==e||""===e)return"";const a=String(e).trim();let i="",s=a;return a.startsWith("-")?(i="< ",s=a.slice(1)):a.startsWith("+")&&(i="> ",s=a.slice(1)),o.has(t)&&(s=s.replace(".",",")),i+s}const c=e=>null==e?"–":`${e}%`;function d(e,t){return e&&"in"===e.state?i.qy`<span class="sec-status">${t("team.status_prematch")}</span>`:""}function p(e,{t,lang:a,showDetails:o=!0}){const p=e.prediction;if(!p||"post"===e.state)return"";const h=function(e){const t=e||{},a=n(t.percent_home),i=n(t.percent_draw),s=n(t.percent_away),r=(a||0)+(i||0)+(s||0),o=e=>r>0&&null!==e?e/r*100:0;return{hasBar:null!==a||null!==i||null!==s,home:a,draw:i,away:s,wHome:o(a),wDraw:o(i),wAway:o(s)}}(p),u=function(e,t="en"){const a=String(e||"").trim();if(!a)return a;const i=s[(t||"en").split("-")[0].toLowerCase()];if(!i)return a;let n=a;for(const[e,t]of Object.entries(i))n.includes(e)&&(n=n.split(e).join(t));return n}(p.advice&&"N/A"!==p.advice?p.advice:"",a),g=o?function(e){const t=e&&e.comparison||{},a=[];for(const e of r){const i=t[e];if(!i)continue;const s=n(i.home),r=n(i.away);if(null===s&&null===r)continue;const o=(s||0)+(r||0);a.push({key:e,home:s,away:r,wHome:o>0?(s||0)/o*100:50,wAway:o>0?(r||0)/o*100:50})}return a}(p):[],m=o?function(e){const t=e||{},a=t.goals_home||"",i=t.goals_away||"",s=t.under_over||"";return a||i||s?{home:a,away:i,line:s}:null}(p):null;if(!(h.hasBar||u||g.length||m))return"";const f=e.home_abbrev||e.home_team||"",_=e.away_abbrev||e.away_team||"";return i.qy`
    <div class="pred">
      <div class="sec-head">
        <span class="pred-title info" title="${t("team.prediction_note")}" aria-label="${t("team.prediction_note")}">${t("team.prediction")}</span>
        ${d(e,t)}
      </div>
      ${h.hasBar?i.qy`
        <div class="pred-bar">
          <div class="pred-seg home" style="width:${h.wHome}%" title="${f} ${c(h.home)}"></div>
          <div class="pred-seg draw" style="width:${h.wDraw}%" title="${t("match.draw")} ${c(h.draw)}"></div>
          <div class="pred-seg away" style="width:${h.wAway}%" title="${_} ${c(h.away)}"></div>
        </div>
        <div class="pred-legend">
          <span class="pred-l home">${f} ${c(h.home)}</span>
          <span class="pred-l draw">${t("match.draw")} ${c(h.draw)}</span>
          <span class="pred-l away">${c(h.away)} ${_}</span>
        </div>
      `:""}
      ${g.length?i.qy`
        <div class="pred-cmp">
          ${g.map(e=>i.qy`
            <div class="pred-cmp-head">
              <span class="pred-cmp-v home">${c(e.home)}</span>
              <span class="pred-cmp-label">${t("team.cmp_"+e.key)}</span>
              <span class="pred-cmp-v away">${c(e.away)}</span>
            </div>
            <div class="pred-cmp-bar">
              <div class="pred-cmp-seg home" style="width:${e.wHome}%"></div>
              <div class="pred-cmp-seg away" style="width:${e.wAway}%"></div>
            </div>
          `)}
        </div>
      `:""}
      ${m?i.qy`
        <div class="pred-xg" title="${t("team.goal_lines_note")}" aria-label="${t("team.goal_lines_note")}">
          <span class="pred-xg-label info">${t("team.goal_lines")}</span>
          <span class="pred-xg-val">${f} ${l(m.home,a)||"—"} · ${_} ${l(m.away,a)||"—"}${m.line?` · ${t("team.goal_lines_total")} ${l(m.line,a)}`:""}</span>
        </div>
      `:""}
      ${u?i.qy`<div class="pred-advice">${u}</div>`:""}
    </div>
  `}function h(e,{t}){if("post"===e.state)return"";const a=e.odds;if(!a)return"";const s=function(e){const t=e||{},a=n(t.home),i=n(t.draw),s=n(t.away),r=[a,i,s].filter(e=>null!==e),o=r.length?Math.min(...r):null,l=r.length>=2&&1===r.filter(e=>e===o).length,c="number"==typeof t.bookmaker_count&&t.bookmaker_count>0?t.bookmaker_count:null,d=!0===t.live;return{present:r.length>0,home:a,draw:i,away:s,min:o,showFav:l,count:d?null:c,singular:1===c,live:d}}(a);if(!s.present)return"";const r=e.home_abbrev||e.home_team||"",o=e.away_abbrev||e.away_team||"",l=s.singular?"team.odds_avg_one":"team.odds_avg",c=(e,a,n,r)=>{const o=s.showFav&&null!==r&&r===s.min,l=o?t("team.favourite"):"";return i.qy`
      <div class="odds-col ${e}${o?" fav":""}" title="${l}" aria-label="${l}">
        <div class="odds-sign">${a}</div>
        <div class="odds-team">${n}</div>
        <div class="odds-val">${null!==r?r.toFixed(2):"–"}</div>
      </div>`};return i.qy`
    <div class="odds">
      <div class="odds-head">
        <span class="odds-title info" title="${s.live?t("team.odds_live_note"):t("team.odds_note")}" aria-label="${s.live?t("team.odds_live_note"):t("team.odds_note")}">${s.live?t("team.odds_live"):t("team.odds")}</span>
        ${s.live?i.qy`<span class="odds-sub live">${t("team.odds_live_badge")}</span>`:s.count?i.qy`<span class="odds-sub">${t(l,{n:s.count})}</span>`:""}
        ${s.live?"":d(e,t)}
      </div>
      <div class="odds-row">
        ${c("home","1",r,s.home)}
        ${c("draw","X",t("match.draw"),s.draw)}
        ${c("away","2",o,s.away)}
      </div>
    </div>
  `}function u(e,{t}){if("post"===e.state)return"";const a=e.injuries_home||[],s=e.injuries_away||[];if(!a.length&&!s.length)return"";const n=e=>{const a=e.suspended?t("team.suspended"):t("team.injured");return i.qy`
      <div class="inj-row">
        <span class="inj-ic" role="img" aria-label="${a}" title="${a}">${e.suspended?"🚫":"🩹"}</span>
        <span class="inj-name">${e.player}</span>
        ${e.reason?i.qy`<span class="inj-reason">${e.reason}</span>`:""}
      </div>`},r=(e,a)=>{const{shown:s,extra:r}=function(e){const t=Array.isArray(e)?e:[];return{shown:t.slice(0,6),extra:Math.max(0,t.length-6)}}(a);return i.qy`
      <div class="inj-col">
        <div class="inj-team">${e}</div>
        ${s.length?s.map(n):i.qy`<div class="inj-none">–</div>`}
        ${r>0?i.qy`<div class="inj-more">${t("team.and_more",{n:r})}</div>`:""}
      </div>`};return i.qy`
    <div class="inj">
      <div class="inj-title">${t("team.injuries")}</div>
      <div class="inj-cols">
        ${r(e.home_team||"",a)}
        ${r(e.away_team||"",s)}
      </div>
    </div>
  `}const g=i.AH`.pred{margin:10px 12px 4px;padding:10px 12px;background:var(--cl-card-2,rgba(255,255,255,0.03));border-radius:10px;}.pred-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);}.sec-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;}.sec-status{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-text-2,#94a3b8);background:var(--cl-chip-bg,rgba(255,255,255,0.08));border:1px solid var(--cl-chip-border,rgba(255,255,255,0.12));border-radius:5px;padding:2px 6px;white-space:nowrap;}.info{cursor:help;text-decoration:underline dotted;text-underline-offset:2px;text-decoration-color:var(--cl-divider,rgba(148,163,184,0.5));}.pred-bar{display:flex;height:10px;border-radius:5px;overflow:hidden;background:var(--cl-overlay-soft,rgba(0,0,0,0.28));box-shadow:inset 0 0 0 1px var(--cl-bar-outline,rgba(255,255,255,0.14));}.pred-seg{height:100%;}.pred-seg + .pred-seg{box-shadow:inset 1px 0 0 var(--cl-bar-separator,rgba(255,255,255,0.32));}.pred-seg.home{background:var(--cl-accent,#6366f1);}.pred-seg.draw{background:#64748b;}.pred-seg.away{background:var(--cl-live,#ef4444);}.pred-legend{display:flex;justify-content:space-between;margin-top:5px;font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);}.pred-l.home,.pred-l.away{color:var(--cl-text,#e2e8f0);}.pred-l.home::before,.pred-l.away::after{content:'';display:inline-block;width:7px;height:7px;border-radius:50%;vertical-align:middle;position:relative;top:-1px;box-shadow:inset 0 0 0 1px var(--cl-bar-outline,rgba(255,255,255,0.14));}.pred-l.home::before{background:var(--cl-accent,#6366f1);margin-right:6px;}.pred-l.away::after{background:var(--cl-live,#ef4444);margin-left:6px;}.pred-cmp{margin-top:10px;display:flex;flex-direction:column;gap:6px;}.pred-cmp-head{display:flex;justify-content:space-between;align-items:baseline;font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);}.pred-cmp-label{text-transform:uppercase;letter-spacing:0.05em;font-size:9px;}.pred-cmp-v.home,.pred-cmp-v.away{color:var(--cl-text,#e2e8f0);}.pred-cmp-bar{display:flex;height:5px;border-radius:3px;overflow:hidden;margin-top:2px;background:var(--cl-overlay-soft,rgba(0,0,0,0.28));box-shadow:inset 0 0 0 1px var(--cl-bar-outline,rgba(255,255,255,0.14));}.pred-cmp-seg{height:100%;}.pred-cmp-seg + .pred-cmp-seg{box-shadow:inset 1px 0 0 var(--cl-bar-separator,rgba(255,255,255,0.32));}.pred-cmp-seg.home{background:var(--cl-accent,#6366f1);}.pred-cmp-seg.away{background:var(--cl-live,#ef4444);}.pred-xg{margin-top:8px;display:flex;justify-content:space-between;align-items:baseline;gap:8px;font-size:10px;color:var(--cl-text-2,#94a3b8);}.pred-xg-label{font-weight:800;text-transform:uppercase;letter-spacing:0.05em;font-size:9px;}.pred-xg-val{font-weight:700;color:var(--cl-text,#e2e8f0);}.pred-advice{margin-top:8px;font-size:11px;color:var(--cl-text,#e2e8f0);font-style:italic;text-align:center;}.odds{margin:8px 12px 4px;padding:10px 12px;background:var(--cl-card-2,rgba(255,255,255,0.03));border-radius:10px;}.odds-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin-bottom:8px;}.odds-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);}.odds-sub{font-size:9px;font-weight:600;color:var(--cl-text-2,#94a3b8);opacity:0.75;}.odds-sub.live{color:var(--cl-live,#ef4444);opacity:1;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;display:inline-flex;align-items:center;gap:4px;}.odds-sub.live::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--cl-live,#ef4444);animation:odds-live-pulse 1.4s ease-in-out infinite;}@keyframes odds-live-pulse{0%,100%{opacity:1;}50%{opacity:0.35;}}.odds-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}.odds-col{display:flex;flex-direction:column;align-items:center;gap:2px;padding:7px 4px;border-radius:8px;background:var(--cl-card,rgba(255,255,255,0.02));}.odds-sign{font-size:12px;font-weight:900;line-height:1;color:var(--cl-text-2,#94a3b8);}.odds-col.home .odds-sign{color:var(--cl-accent,#6366f1);}.odds-col.away .odds-sign{color:var(--cl-live,#ef4444);}.odds-team{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--cl-text-2,#94a3b8);max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.odds-val{font-size:16px;font-weight:800;color:var(--cl-text,#e2e8f0);font-variant-numeric:tabular-nums;margin-top:1px;}.odds-col.fav{background:var(--cl-accent-soft,rgba(99,102,241,0.10));}.inj{margin:8px 12px 4px;padding:10px 12px;background:var(--cl-card-2,rgba(255,255,255,0.03));border-radius:10px;}.inj-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);margin-bottom:8px;}.inj-cols{display:grid;grid-template-columns:1fr 1fr;gap:12px;}.inj-team{font-size:10px;font-weight:800;color:var(--cl-text,#e2e8f0);margin-bottom:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.inj-row{display:flex;align-items:baseline;gap:5px;padding:2px 0;font-size:11px;}.inj-ic{font-size:10px;flex-shrink:0;}.inj-name{font-weight:600;color:var(--cl-text,#e2e8f0);white-space:nowrap;}.inj-reason{color:var(--cl-text-2,#94a3b8);font-size:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.inj-none{color:var(--cl-text-2,#94a3b8);font-size:11px;}.inj-more{color:var(--cl-text-2,#94a3b8);font-size:10px;font-weight:700;padding-top:2px;opacity:0.85;}`},1618(e,t,a){function i(e,t=0){const a=Number.parseInt(e,10);return Number.isFinite(a)?a:t}function s(e={},t=""){const a=e.standings_groups?.[0],s=a?.standings||[];if(!s.length)return null;const n=[...s].sort((e,t)=>i(e.rank,999)-i(t.rank,999)),r=i(n[0]?.points),o=Math.max(...n.map(e=>i(e.games_played)),Math.max(0,2*(n.length-1))),l=n.map((e,t)=>{const a=i(e.points),s=i(e.games_played),l=Math.max(0,o-s);return{...e,points:a,played:s,remaining:l,maximum:a+3*l,gapLeader:Math.max(0,r-a),gapAbove:t?Math.max(0,i(n[t-1].points)-a):0}}),c=String(t||"").toLowerCase(),d=l.find(e=>c&&String(e.team_name||"").toLowerCase().includes(c)),p=(e.standings_history||[]).map(e=>{const t=(e.groups?.[0]?.standings||[]).find(e=>null!=d?.team_id?String(e.team_id)===String(d.team_id):c&&String(e.team_name||"").toLowerCase().includes(c));return t?{date:e.captured_at,rank:i(t.rank),points:i(t.points)}:null}).filter(Boolean);return{rows:l,tracked:d,trajectory:p,totalMatches:o,group:a?.name||""}}function n(e,t,a){if(!e?.states)return null;if(t?.standings_entity&&e.states[t.standings_entity])return e.states[t.standings_entity].attributes;const i=String(a?.competition_name||a?.league_name||"").toLowerCase();return Object.values(e.states).find(e=>{const t=e?.attributes||{};if(!t.standings_groups)return!1;const a=String(t.league_name||t.competition_name||"").toLowerCase();return i&&a&&(i.includes(a)||a.includes(i))})?.attributes||null}function r(e,t,a=""){const s=e?.standings_groups?.[0]?.standings,n=String(t?.state||"").toLowerCase();if(!s?.length||!t||!["in","live"].includes(n))return null;const r=String(t.home_team||"").toLowerCase(),o=String(t.away_team||"").toLowerCase(),l=s.map(e=>({...e,points:i(e.points),rank:i(e.rank,999)})),c=e=>l.find(t=>{const a=String(t.team_name||"").toLowerCase();return a&&e&&(a.includes(e)||e.includes(a))}),d=c(r),p=c(o);if(!d||!p)return null;const h=i(t.home_score),u=i(t.away_score);h>u?d.points+=3:h<u?p.points+=3:(d.points+=1,p.points+=1),l.sort((e,t)=>t.points-e.points||i(t.goal_difference)-i(e.goal_difference)),l.forEach((e,t)=>{e.virtual_rank=t+1});const g=String(a||"").toLowerCase(),m=c(g)||(r.includes(g)?d:p);return m?{previous_rank:m.rank,rank:m.virtual_rank,change:m.rank-m.virtual_rank,points:m.points,team:m.team_name}:null}a.d(t,{Di:()=>r,LV:()=>s,q1:()=>n})},435(e,t,a){a.d(t,{bN:()=>r,lx:()=>n});var i=a(3957);const s=e=>null!=e&&("string"!=typeof e||!["","n/a","unknown","none","null","-"].includes(e.trim().toLowerCase()))&&(Array.isArray(e)?e.length>0:"object"!=typeof e||Object.keys(e).length>0);function n(e,t,{compact:a=!1}={}){if(!e||"pre"!==e.state)return"";const n=function(e){if(null!=e?.match_readiness?.score)return e.match_readiness;const t={kickoff:s(e?.date_iso||e?.date),competition:s(e?.competition_name||e?.league_name),venue:s(e?.venue),broadcasts:Boolean(e?.broadcasts?.length),weather:s(e?.weather)||s(e?.temperature)||s(e?.venue_lat),head_to_head:Boolean(e?.head_to_head?.length),prediction:s(e?.prediction),odds:s(e?.odds),absences:Boolean(e?.injuries_home?.length||e?.injuries_away?.length||e?.absences?.length),lineup:Boolean(e?.lineup_home?.length||e?.lineup_away?.length||e?.expected_lineup_home?.length||e?.expected_lineup_away?.length)},a={kickoff:15,competition:10,venue:10,broadcasts:5,weather:5,head_to_head:10,prediction:10,odds:10,absences:10,lineup:15},i=Object.entries(t).reduce((e,[t,i])=>e+(i?a[t]:0),0);return{score:i,level:i>=80?"ready":i>=55?"good":i>=30?"building":"early",available:Object.keys(t).filter(e=>t[e]),missing:Object.keys(t).filter(e=>!t[e])}}(e);return i.qy`
    <section class="readiness ${a?"compact":""}">
      <div class="readiness-head">
        <span>${t("readiness.title")}</span>
        <b>${n.score}% · ${t(`readiness.${n.level}`)}</b>
      </div>
      <div class="readiness-track"><i style=${`width:${n.score}%`}></i></div>
      ${!a&&n.available.length?i.qy`
        <div class="readiness-chips">
          ${n.available.map(e=>i.qy`<span>${t(`readiness.item_${e}`)}</span>`)}
        </div>
      `:""}
    </section>
  `}const r=i.AH`.readiness{margin:10px 0;padding:10px;border:1px solid var(--cl-divider);border-radius:12px;background:var(--cl-surface)}.readiness-head{display:flex;justify-content:space-between;gap:8px;color:var(--cl-text-2);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.05em}.readiness-head b{color:var(--cl-accent);text-align:right}.readiness-track{height:5px;margin-top:8px;overflow:hidden;border-radius:99px;background:var(--cl-chip-bg)}.readiness-track i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--cl-accent),var(--cl-accent-2));transition:width .25s ease}.readiness-chips{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}.readiness-chips span{padding:3px 6px;border-radius:99px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:8px}.readiness.compact{margin:0;padding:7px 8px}.readiness.compact .readiness-track{margin-top:5px}`},8657(e,t,a){function i(e,t="0"){if(null==e)return t;if("object"==typeof e){const a=e.displayValue??e.value;return null==a?t:String(a)}return e}a.d(t,{Q:()=>i})},8585(e,t,a){a.d(t,{WU:()=>r,mG:()=>o});var i=a(3957);const s={schedule:"card.schedule",preview:"match.preview",lineup:"tab.lineup",timeline:"tab.timeline",statistics:"tab.stats",review:"match.review"};function n(e,t=Date.now()){const a=e?new Date(e).getTime():NaN;return Number.isFinite(a)?Math.max(0,Math.round((t-a)/6e4)):null}function r(e,t={}){const a=function(e,t="",a=null){const i=e?.source_sections;if(i&&"object"==typeof i)return Object.entries(i).map(([e,i])=>({section:e,label:s[e]||"popup.parts",available:!0===i.available,provider:i.provider||t,age:n(i.updated_at||a),enriched:!0===i.enriched}));const r=e?.detail_capabilities||[];return Object.keys(s).map(e=>({section:e,label:s[e],available:"schedule"===e||r.includes(e),provider:t,age:n(a),enriched:!1}))}(e,t.provider,t.updatedAt);if(!a.some(e=>e.available)||!a.some(e=>e.enriched||!e.available))return"";const r=t.t||(e=>e);return i.qy`<section class="source-status">
    <h5>${r("source.sections")}</h5>
    <div>${a.map(e=>i.qy`<span class="${e.available?"ok":"missing"} ${e.enriched?"enriched":""}">
      <b>${r(e.label)}</b>
      <small>${e.available?`${e.provider||"—"}${null!=e.age?` · ${r("popup.updated_minutes",{n:e.age})}`:""}`:r("source.not_available")}</small>
    </span>`)}</div>
  </section>`}const o=i.AH`.source-status{margin:10px 0;padding:10px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface)}.source-status h5{margin:0 0 7px;color:var(--cl-text-2);font-size:9px;text-transform:uppercase;letter-spacing:.08em}.source-status>div{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}.source-status span{min-width:0;padding:6px;border-radius:7px;background:var(--cl-chip-bg)}.source-status span.enriched{box-shadow:inset 2px 0 var(--cl-accent)}.source-status span.missing{opacity:.58}.source-status b,.source-status small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.source-status b{font-size:8px}.source-status small{margin-top:2px;color:var(--cl-text-2);font-size:7px}@media(max-width:380px){.source-status>div{grid-template-columns:repeat(2,minmax(0,1fr))}}`},6755(e,t,a){function i(e,t,a){if(!e)return"";const i=e[`${t}_rank`];if(null!=i){const s=e[`${t}_points`];return`#${i}${null!=s?` · ${s} ${a("team.pts")}`:""}`}const s=e[`${t}_standing_summary`];return s&&"N/A"!==s?s:""}a.d(t,{y:()=>i})},2738(e,t,a){a.d(t,{m:()=>m});var i=a(3957),s=a(8257),n=a(4179),r=a(2007);const o={dark:"#12141f",light:"#f6f8fc"},l={dark:"#f4f6fb",light:"#0f172a"},c={dark:"#aab2c5",light:"#5a6472"},d=[["accent_color","skin.custom_accent"],["accent_2_color","skin.custom_accent_2"],["background_color","skin.custom_background"],["text_color","skin.custom_text"]],p=[["live_color","skin.custom_live"],["gold_color","skin.custom_gold"],["surface_color","skin.custom_surface"],["card_color","skin.custom_card"],["secondary_text_color","skin.custom_text_2"],["divider_color","skin.custom_divider"],["chip_color","skin.custom_chip"]],h=[...d,...p].map(([e])=>e).concat(["gradient_from","gradient_to","gradient_angle","background_image","watermark_opacity","watermark_size"]);function u(e,t){return"function"==typeof e._fireConfigChanged?e._fireConfigChanged(t):"function"==typeof e._fire?e._fire(t):(e._config=t,e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0})),void e.requestUpdate?.())}function g(e,t,a,s,n){const r=e?.[t]||"",o=/^#[0-9a-f]{6}$/i.test(r)?r:"#6366f1";return i.qy`
    <label class="custom-skin-field">
      <span>${s(a)}</span>
      <input type="color" .value=${o} @input=${e=>n(t,e.target.value)}>
      <input type="text" .value=${r} placeholder="#6366f1" @change=${e=>n(t,e.target.value)}>
    </label>
  `}function m(e,t,a){const m=e=>"function"==typeof a?a(e):e,f=(a,i)=>u(e,{...t,[a]:i}),_=a=>{const i={...t};delete i[a],u(e,i)},b=(a,i)=>{const s={...t};""===i||null==i?delete s[a]:s[a]=i,u(e,s)},v=t?.entity||t?.entities&&t.entities[0],x=v&&e?.hass?.states?.[v]?.attributes?.card_defaults||{},y=(0,s.pV)(t,x),w=(0,s.J4)(y),$=(0,s.i5)(y),k="string"==typeof t?.appearance,C="string"==typeof t?.palette,S="string"==typeof t?.skin,q=(0,r.wH)(e,t,m),z=(e,t)=>{if(!e)return m("skin.default");const a=t.find(([t])=>t===e);return`${a?m(a[1]):e} · ${m("skin.shared")}${q}`},A=S?w:t?.appearance,E=S?$:t?.palette,T=a=>u(e,(0,s.EK)(t,w,$,a)),P=e=>{const t=[...e.currentTarget.querySelectorAll("button")],a=t.indexOf(e.target),i=(0,s.lS)(a,t.length,e.key);i!==a&&(e.preventDefault(),t[i].focus(),t[i].click())},j=[];if("custom"===$){const e=(0,n.GD)(t?.gradient_from),a=(0,n.GD)(t?.gradient_to),i=e&&a?[e,a]:[(0,n.GD)(t?.background_color)||o[w]].filter(Boolean);if(i.length){const e=(e,a,s)=>{const r=(0,n.GD)(t?.[e])||a;return!!r&&i.some(e=>{const t=(0,n.yN)(e,r);return null!==t&&t<s})};e("text_color",l[w],4.5)&&j.push("skin.custom_text"),e("secondary_text_color",c[w],4.5)&&j.push("skin.custom_text_2"),e("accent_color","#6366f1",3)&&j.push("skin.custom_accent")}}const N=!!(0,n.GD)(t?.gradient_from)!=!!(0,n.GD)(t?.gradient_to);return i.qy`
    <style>
      .skin-controls { display: grid; gap: 12px; }
      .skin-row > .skin-label { font-size: 12px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 6px; }
      .skin-seg { display: inline-flex; border: 1px solid var(--divider-color, rgba(255,255,255,0.14)); border-radius: 8px; overflow: hidden; }
      .skin-seg button {
        border: 0; padding: 7px 12px; font-size: 12px; cursor: pointer;
        background: transparent; color: var(--primary-text-color, #fff);
        border-right: 1px solid var(--divider-color, rgba(255,255,255,0.14));
      }
      .skin-seg button:last-child { border-right: 0; }
      .skin-seg button.sel { background: var(--primary-color, #3b82f6); color: #fff; }
      .skin-swatches { display: grid; grid-template-columns: repeat(auto-fill, minmax(84px, 1fr)); gap: 8px; }
      .skin-swatch {
        display: flex; align-items: center; gap: 7px; padding: 6px 8px; cursor: pointer;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.14)); border-radius: 8px;
        background: transparent; color: var(--primary-text-color, #fff); font-size: 11px; text-align: left;
      }
      .skin-swatch.sel { border-color: var(--primary-color, #3b82f6); box-shadow: 0 0 0 1px var(--primary-color, #3b82f6); }
      .skin-swatch .dot {
        width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
        border: 1px solid rgba(127,127,127,0.4);
      }
      .skin-swatch span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .custom-skin-fields {
        display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; padding: 10px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); border-radius: 8px; background: rgba(127,127,127,0.08);
      }
      .custom-skin-field { display: grid; grid-template-columns: auto 34px; gap: 6px; align-items: center; min-width: 0; }
      .custom-skin-field span { grid-column: 1 / -1; font-size: 11px; font-weight: 700; color: var(--secondary-text-color); }
      .custom-skin-field input[type="color"] { width: 34px; height: 34px; padding: 0; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: transparent; }
      .custom-skin-field input[type="text"] { min-width: 0; width: 100%; box-sizing: border-box; padding: 8px 9px; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, #fff); font-size: 13px; }
      .skin-adv { margin-top: 8px; }
      .skin-adv summary { cursor: pointer; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); margin: 4px 0 8px; }
      .skin-warn { display: flex; gap: 6px; align-items: center; margin-top: 8px; font-size: 12px; color: var(--warning-color, #f59e0b); }
      .skin-bg-title { font-size: 11px; font-weight: 700; color: var(--secondary-text-color); margin: 10px 0 6px; }
      .skin-bg-field { display: grid; gap: 4px; margin-top: 8px; }
      .skin-bg-field span { font-size: 11px; font-weight: 600; color: var(--secondary-text-color); }
      .skin-bg-field input, .skin-bg-field select { padding: 8px 9px; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, #fff); font-size: 13px; box-sizing: border-box; }
      .skin-hint { font-size: 10px; color: var(--secondary-text-color); opacity: 0.8; }
      .skin-hint-warn { color: var(--warning-color, #f59e0b); opacity: 1; margin-top: 6px; }
      .skin-reset { margin-top: 10px; justify-self: start; padding: 6px 12px; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: transparent; color: var(--primary-text-color, #fff); font-size: 12px; cursor: pointer; }
      @media (max-width: 520px) { .custom-skin-fields { grid-template-columns: 1fr; } }
    </style>
    <div class="skin-controls">
      <div class="skin-row">
        <div class="skin-label">${m("skin.appearance")}</div>
        <div class="skin-seg" role="radiogroup" aria-label=${m("skin.appearance")} @keydown=${P}>
          ${S?"":i.qy`
            <button type="button" role="radio" class=${k?"":"sel"} aria-checked=${!k} tabindex=${k?"-1":"0"} @click=${()=>_("appearance")}>${z(x.appearance,s.kW)}</button>
          `}
          ${s.kW.map(([e,t])=>i.qy`
            <button type="button" role="radio" class=${A===e?"sel":""} aria-checked=${A===e} tabindex=${A===e?"0":"-1"} @click=${()=>(e=>S?T({appearance:e}):f("appearance",e))(e)}>${m(t)}</button>
          `)}
        </div>
      </div>
      <div class="skin-row">
        <div class="skin-label">${m("skin.palette")}</div>
        <div class="skin-swatches" role="radiogroup" aria-label=${m("skin.palette")} @keydown=${P}>
          ${S?"":i.qy`
            <button type="button" role="radio" class="skin-swatch ${C?"":"sel"}" aria-checked=${!C} tabindex=${C?"-1":"0"} @click=${()=>_("palette")}>
              <span class="dot" style="background:${x.palette&&s.rH[x.palette]?`linear-gradient(135deg, ${s.rH[x.palette][0]} 50%, ${s.rH[x.palette][1]} 50%)`:"repeating-linear-gradient(135deg,#888 0 4px,#aaa 4px 8px)"}"></span>
              <span>${z(x.palette,s.HX)}</span>
            </button>
          `}
          ${s.HX.map(([e,t])=>{const[a,n]=s.rH[e]||["#6366f1","#ec4899"];return i.qy`
              <button type="button" role="radio" class="skin-swatch ${E===e?"sel":""}" aria-checked=${E===e} tabindex=${E===e?"0":"-1"} title=${m(t)} @click=${()=>(e=>S?T({palette:e}):f("palette",e))(e)}>
                <span class="dot" style="background:linear-gradient(135deg, ${a} 50%, ${n} 50%)"></span>
                <span>${m(t)}</span>
              </button>
            `})}
        </div>
      </div>
      ${"custom"===$?i.qy`
        <div>
          <div class="custom-skin-fields">
            ${d.map(([e,a])=>g(t,e,a,m,b))}
          </div>
          ${j.length?i.qy`<div class="skin-warn">⚠️ ${m("skin.contrast_warning")}: ${j.map(e=>m(e)).join(", ")}</div>`:""}
          <details class="skin-adv">
            <summary>${m("skin.advanced")}</summary>
            <div class="custom-skin-fields">
              ${p.map(([e,a])=>g(t,e,a,m,b))}
            </div>
            <div class="skin-bg-title">${m("skin.background")}</div>
            <div class="custom-skin-fields">
              ${g(t,"gradient_from","skin.gradient_from",m,b)}
              ${g(t,"gradient_to","skin.gradient_to",m,b)}
            </div>
            ${N?i.qy`<div class="skin-hint skin-hint-warn">${m("skin.gradient_incomplete")}</div>`:""}
            <label class="skin-bg-field">
              <span>${m("skin.gradient_angle")}</span>
              <input type="number" min="0" max="360" step="5" .value=${t?.gradient_angle??""} placeholder="135"
                @change=${e=>b("gradient_angle",""===e.target.value?"":Math.max(0,Math.min(360,Number(e.target.value))))}>
            </label>
            <label class="skin-bg-field">
              <span>${m("skin.watermark_url")}</span>
              <input type="text" .value=${t?.background_image||""} placeholder="/local/crest.png"
                title=${m("skin.watermark_url_hint")}
                @change=${e=>b("background_image",e.target.value.trim())}>
              <span class="skin-hint">${m("skin.watermark_url_hint")}</span>
            </label>
            <label class="skin-bg-field">
              <span>${m("skin.watermark_opacity")}</span>
              <input type="number" min="0" max="1" step="0.01" .value=${t?.watermark_opacity??""} placeholder="0.07"
                @change=${e=>b("watermark_opacity",""===e.target.value?"":Math.max(0,Math.min(1,Number(e.target.value))))}>
            </label>
            <label class="skin-bg-field">
              <span>${m("skin.watermark_size")}</span>
              <select @change=${e=>b("watermark_size",e.target.value)}>
                ${["","40%","60%","80%","contain"].map(e=>i.qy`
                  <option value="${e}" ?selected=${(t?.watermark_size||"")===e}>${e||m("skin.default")}</option>`)}
              </select>
            </label>
          </details>
          <button type="button" class="skin-reset" @click=${()=>{const a={...t};for(const e of h)delete a[e];u(e,a)}}>${m("skin.custom_reset")}</button>
        </div>
      `:""}
    </div>
  `}},6639(e,t,a){function i(e){switch(e){case"initializing":case"fetching":return{kind:"info",icon:"⏳",title:"ui.sync_fetching",sub:"ui.sync_fetching_hint"};case"rate_limited":return{kind:"info",icon:"⏱",title:"ui.sync_rate_limited",sub:"ui.sync_rate_limited_hint"};case"authentication_failed":return{kind:"error",icon:"🔑",title:"ui.sync_auth_failed",sub:"ui.sync_auth_failed_hint"};case"provider_unavailable":return{kind:"error",icon:"📡",title:"ui.sync_provider_unavailable",sub:"ui.sync_provider_unavailable_hint"};default:return null}}a.d(t,{a:()=>i})},1814(e,t,a){a.d(t,{i:()=>g,c:()=>u});var i=a(3957),s=a(5186);const n=new Map,r=new Map,o=new Map,l={"Johan Cruijff Arena":{lat:52.3145,lon:4.9425},"Johan Cruijff ArenA":{lat:52.3145,lon:4.9425},"Philips Stadion":{lat:51.4424,lon:5.4675},"Stadion Feyenoord":{lat:51.8896,lon:4.5219},"Feyenoord Stadium":{lat:51.8896,lon:4.5219},"De Kuip":{lat:51.8896,lon:4.5219},"Stadion de Kuip":{lat:51.8896,lon:4.5219},"AFAS Stadion":{lat:52.6281,lon:4.7483},"Stadion Galgenwaard":{lat:52.0779,lon:5.1456},"De Grolsch Veste":{lat:52.2373,lon:6.8296},"Goffert Stadion":{lat:51.8307,lon:5.8606},"Abe Lenstra Stadion":{lat:52.9584,lon:5.9141},"Sparta-Stadion Het Kasteel":{lat:51.9171,lon:4.4658},"Sparta Stadion Het Kasteel":{lat:51.9171,lon:4.4658},"Het Kasteel":{lat:51.9171,lon:4.4658},"De Adelaarshorst":{lat:52.2488,lon:6.1737},"Polman Stadion":{lat:52.3514,lon:6.6582},"Mandemakers Stadion":{lat:51.6853,lon:5.0535},Euroborg:{lat:53.1822,lon:6.5942},"MAC³PARK Stadion":{lat:52.5143,lon:6.1006},"MACPARK Stadion":{lat:52.5143,lon:6.1006},"Yanmar Stadion":{lat:52.3893,lon:5.2152},"Rat Verlegh Stadion":{lat:51.5747,lon:4.7716},"Koning Willem II Stadion":{lat:51.5547,lon:5.0917},"Fortuna Sittard Stadion":{lat:51.0011,lon:5.8683},GelreDome:{lat:51.9653,lon:5.9111},"Kras Stadion":{lat:52.4436,lon:4.6264},"De Vijverberg":{lat:51.963,lon:6.2872},"Cambuur Stadion":{lat:53.2112,lon:5.8102},"Parkstad Limburg Stadion":{lat:50.9081,lon:5.9928},"Cars Jeans Stadion":{lat:52.0667,lon:4.3167},"BENU Stadion":{lat:52.0667,lon:4.3167},"ADO Den Haag Stadium":{lat:52.0667,lon:4.3167},"Bingoal Stadion":{lat:52.0667,lon:4.3167},Goffertstadion:{lat:51.8307,lon:5.8606},"Sportcomplex Varkenoord":{lat:51.8896,lon:4.5219},Varkenoord:{lat:51.8896,lon:4.5219},"M-Scores Stadion":{lat:51.8139,lon:4.6836},"Stadion Krommedijk":{lat:51.8139,lon:4.6836},"Riwal Hoogwerkers Stadion":{lat:51.8139,lon:4.6836},Krommedijk:{lat:51.8139,lon:4.6836},"Kooi Stadion":{lat:53.2112,lon:5.8102},"Kooi Stadium":{lat:53.2112,lon:5.8102},"Leeuwarden Stadion":{lat:53.2112,lon:5.8102},"711 Stadion":{lat:52.4592,lon:4.6556},"BUKO Stadion":{lat:52.4592,lon:4.6556},"Rabobank IJmond Stadion":{lat:52.4592,lon:4.6556},"WerkTalent Stadion":{lat:52.0667,lon:4.3167},"Stadion Woudestein":{lat:51.9308,lon:4.5386},"Van Donge & De Roo Stadion":{lat:51.9308,lon:4.5386},"Goffert Stadium":{lat:51.8307,lon:5.8606},"Grolsch Veste":{lat:52.2373,lon:6.8296},"Abe Lenstra Stadium":{lat:52.9584,lon:5.9141},"Philips Stadium":{lat:51.4424,lon:5.4675},"Hitachi Capital Mobility Stadion":{lat:53.1822,lon:6.5942},"Koning Willem II Stadium":{lat:51.5547,lon:5.0917},Galgenwaard:{lat:52.0779,lon:5.1456},"MetLife Stadium":{lat:40.8135,lon:-74.0745},"AT&T Stadium":{lat:32.748,lon:-97.0927},"SoFi Stadium":{lat:33.9535,lon:-118.3392},"Levi's Stadium":{lat:37.4032,lon:-121.9699},"Hard Rock Stadium":{lat:25.958,lon:-80.2389},"Lincoln Financial Field":{lat:39.9008,lon:-75.1675},"Arrowhead Stadium":{lat:39.049,lon:-94.4839},"GEHA Field at Arrowhead Stadium":{lat:39.049,lon:-94.4839},"NRG Stadium":{lat:29.6847,lon:-95.4107},"Mercedes-Benz Stadium":{lat:33.7554,lon:-84.4008},"Estadio Banorte":{lat:19.303,lon:-99.1506},"Allegiant Stadium":{lat:36.0908,lon:-115.1839},"Gillette Stadium":{lat:42.0909,lon:-71.2643},"Century Link Field":{lat:47.5952,lon:-122.3316},"Lumen Field":{lat:47.5952,lon:-122.3316},"BC Place":{lat:49.2768,lon:-123.1117},"BMO Field":{lat:43.6334,lon:-79.4179},"Estadio Azteca":{lat:19.303,lon:-99.1506},"Estadio BBVA":{lat:25.6694,lon:-100.2436},"Estadio Akron":{lat:20.6854,lon:-103.4673},"Allianz Arena":{lat:48.2188,lon:11.6247},"Signal Iduna Park":{lat:51.4532,lon:7.4516},Olympiastadion:{lat:52.5147,lon:13.2395},"Wembley Stadium":{lat:51.556,lon:-.2796},"Tottenham Hotspur Stadium":{lat:51.6043,lon:-.0665},"Emirates Stadium":{lat:51.5549,lon:-.1084},"Stamford Bridge":{lat:51.4821,lon:-.191},"Old Trafford":{lat:53.4632,lon:-2.291},"Etihad Stadium":{lat:53.4831,lon:-2.2004},Anfield:{lat:53.4308,lon:-2.9608},"Villa Park":{lat:52.5092,lon:-1.8847},"Camp Nou":{lat:41.3815,lon:2.1229},"Spotify Camp Nou":{lat:41.3815,lon:2.1229},"Estadi Olímpic Lluís Companys":{lat:41.3643,lon:2.158},"Santiago Bernabéu":{lat:40.453,lon:-3.6883},"Civitas Metropolitano":{lat:40.4361,lon:-3.5995},"San Mamés":{lat:43.2627,lon:-2.9385},"Estadio de La Cerámica":{lat:39.9441,lon:-.1042},Mestalla:{lat:39.4747,lon:-.3583},"Parc des Princes":{lat:48.8414,lon:2.253},"Stade de France":{lat:48.9244,lon:2.3601},"Groupama Stadium":{lat:45.7654,lon:4.9825},Vélodrome:{lat:43.2697,lon:5.3961},"Stade Vélodrome":{lat:43.2697,lon:5.3961},"San Siro":{lat:45.4781,lon:9.124},"Stadio Giuseppe Meazza":{lat:45.4781,lon:9.124},"Allianz Stadium":{lat:45.1096,lon:7.6412},"Stadio Olimpico":{lat:41.9341,lon:12.4547},"Stadio Diego Armando Maradona":{lat:40.8279,lon:14.193},BayArena:{lat:51.0382,lon:7.0023},"Red Bull Arena":{lat:51.3457,lon:12.3484},Volksparkstadion:{lat:53.5875,lon:9.8985},"Volksparkstadion Hamburg":{lat:53.5875,lon:9.8985},"Stadion Feijenoord":{lat:51.8896,lon:4.5219},"Estádio da Luz":{lat:38.7526,lon:-9.1849},"Estádio José Alvalade":{lat:38.7613,lon:-9.1609},"Estádio do Dragão":{lat:41.1611,lon:-8.5834},"Celtic Park":{lat:55.8491,lon:-4.2051},"Ibrox Stadium":{lat:55.8508,lon:-4.3095},"Johan Cruyff Arena":{lat:52.3145,lon:4.9425},"PSV Stadion":{lat:51.4424,lon:5.4675},"Fenerbahçe Şükrü Saracoğlu":{lat:40.9836,lon:29.0333},"Türk Telekom Stadium":{lat:41.1066,lon:29.0103},"Vodafone Park":{lat:41.0038,lon:28.9967}};function c(e){if(e.size>=150){const t=e.keys().next().value;e.delete(t)}}function d(e,t,a,i=!1){return{temp:Math.round(e),code:t,wind:(n=a,n<1?0:n<6?1:n<12?2:n<20?3:n<29?4:n<39?5:n<50?6:n<62?7:n<75?8:n<89?9:n<103?10:n<118?11:12),wind_unit:"BFT",icon:(s=t,s&&0!==s&&1!==s?2===s?"⛅":3===s?"☁️":45===s||48===s?"🌫️":s>=51&&s<=55?"🌦️":s>=61&&s<=65?"🌧️":s>=71&&s<=77?"🌨️":s>=80&&s<=82?"🌧️":85===s||86===s?"🌨️":95===s||96===s||99===s?"⛈️":"🌤️":"☀️"),description:p(t),description_key:h(t),forecast:i,timestamp:Date.now()};var s,n}function p(e){return{0:"Clear",1:"Mostly clear",2:"Partly cloudy",3:"Cloudy",45:"Foggy",48:"Foggy",51:"Light drizzle",53:"Drizzle",55:"Heavy drizzle",61:"Rain",63:"Heavy rain",65:"Very heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Showers",81:"Heavy showers",82:"Violent showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm + hail",99:"Thunderstorm + heavy hail"}[e]||"Unknown"}function h(e){return 0===e?"weather.clear":1===e||2===e?"weather.partly_cloudy":3===e?"weather.cloudy":45===e||48===e?"weather.foggy":e>=51&&e<=55?"weather.drizzle":e>=61&&e<=65?"weather.rain":e>=71&&e<=77?"weather.snow":e>=80&&e<=86?"weather.showers":95===e||96===e||99===e?"weather.thunderstorm":"weather.unknown"}const u=i.AH`.weather-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:6px;background:rgba(0,0,0,0.1);font-size:12px;color:var(--primary-text-color);}.weather-icon{font-size:18px;}.weather-temp{font-weight:600;}.weather-wind{font-size:11px;opacity:0.7;}`;async function g(e,t=null,a=null,p=null,h=null,u=null){if(!e||"N/A"===e)return i.qy``;try{const g=null==p||""===p?NaN:Number(p),m=null==h||""===h?NaN:Number(h);let f=Number.isFinite(g)&&Number.isFinite(m)?{lat:g,lon:m}:await function(e){if(!e||"N/A"===e)return null;if(n.has(e))return n.get(e);let t=l[e]||null;if(!t){const a=e.replace(/\s+\d+$/,"");a!==e&&(t=l[a]||null)}return t&&(c(n),n.set(e,t)),t}(e);if(!f)return i.qy``;const _=await async function(e,t,a=null){const i=function(e){if(!e)return null;const t=Date.parse(e);if(Number.isNaN(t))return null;const a=t-Date.now();return a<=36e5||a>13824e5?null:Math.floor(t/1e3)}(a),s=i?`${e},${t},@${i}`:`${e},${t}`;if(r.has(s)){const e=r.get(s);if(Date.now()-e.timestamp<36e5)return e.data}if(o.has(s))return o.get(s);const n=(async()=>{try{const a=i?await async function(e,t,a){const i=new Date(1e3*a).toISOString().slice(0,10),s=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${t}&hourly=temperature_2m,weather_code,wind_speed_10m&timezone=GMT&timeformat=unixtime&start_date=${i}&end_date=${i}`),n=(await s.json()).hourly;if(!n||!Array.isArray(n.time)||!n.time.length)return null;let r=0,o=1/0;for(let e=0;e<n.time.length;e++){const t=Math.abs(n.time[e]-a);t<o&&(o=t,r=e)}return d(n.temperature_2m[r],n.weather_code[r],n.wind_speed_10m[r],!0)}(e,t,i):await async function(e,t){const a=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${t}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`),i=await a.json();return i.current?d(i.current.temperature_2m,i.current.weather_code,i.current.wind_speed_10m,!1):null}(e,t);if(a)return c(r),r.set(s,{data:a,timestamp:Date.now()}),a}catch(e){console.warn("Weather fetch failed:",e)}finally{o.delete(s)}return null})();return o.set(s,n),n}(f.lat,f.lon,u);if(!_)return i.qy``;const b=t?(0,s.$c)(t,a):"en",v=(0,s.t)("weather.wind",b),x=(0,s.t)(_.description_key||"weather.unknown",b),y=_.forecast?`${e}: ${x} (⏱)`:`${e}: ${x}`;return i.qy`
      <div class="weather-badge" title="${y}">
        <span class="weather-icon">${_.icon}</span>
        <span class="weather-temp">${_.temp}°</span>
        <span class="weather-wind" title="${v}">${_.wind} ${_.wind_unit||"BFT"}</span>
      </div>
    `}catch(e){return console.warn("Weather badge error:",e),i.qy``}}},4179(e,t,a){function i(e){if("string"!=typeof e)return null;const t=e.trim();return/^#[0-9a-f]{3}$/i.test(t)?`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`.toLowerCase():/^#[0-9a-f]{6}$/i.test(t)?t.toLowerCase():/^[0-9a-f]{6}$/i.test(t)?`#${t.toLowerCase()}`:/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i.test(t)?t:null}function s(e){return/^#[0-9a-f]{6}$/i.test(e)?[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)].join(","):null}function n(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}function r(e){if(!/^#[0-9a-f]{6}$/i.test(e))return null;const t=e=>{const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)},[a,i,s]=n(e);return.2126*t(a)+.7152*t(i)+.0722*t(s)}function o(e,t){const a=r(e),i=r(t);return null===a||null===i?null:(Math.max(a,i)+.05)/(Math.min(a,i)+.05)}function l(e){if(!e)return!1;const t=r(e);return null===t||t>.05&&t<.92}a.d(t,{FD:()=>u,GD:()=>i,LX:()=>d,_R:()=>s,op:()=>g,tS:()=>h,yN:()=>o,zg:()=>p});const c=new Set(["to top","to bottom","to left","to right","to top left","to top right","to bottom left","to bottom right","to left top","to right top","to left bottom","to right bottom"]);function d(e){if(""===e||null==e)return null;const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(1,t)):null}function p(e){const t="string"==typeof e?e.trim():"";return/^(contain|cover|\d{1,3}%|\d{1,4}px)$/i.test(t)?t:null}function h(e){const t="string"==typeof e?e.trim():"";return t&&/^(\/local\/|https?:\/\/|data:image\/)/i.test(t)?t:null}function u(e,t,a){const s=i(e),n=i(t);return s&&n?`linear-gradient(${function(e){const t=e=>`${Math.max(-360,Math.min(360,e))}deg`;if("number"==typeof e&&Number.isFinite(e))return t(e);if("string"==typeof e){const a=e.trim(),i=a.match(/^(-?\d+(?:\.\d+)?)deg$/i);if(i)return t(parseFloat(i[1]));const s=a.toLowerCase().replace(/\s+/g," ");if(c.has(s))return s}return"135deg"}(a)}, ${s}, ${n})`:null}function g(e){const t=Array.isArray(e.team_colors)?e.team_colors:[e.team_color,e.home_color,e.away_color,e.primary_color,e.secondary_color],a=[];for(const e of t){const t=i(e);t&&l(t)&&!a.includes(t)&&a.push(t)}const s=a[0];if(!s)return{};let r=a.slice(1).find(e=>function(e,t){if(!/^#[0-9a-f]{6}$/i.test(e)||!/^#[0-9a-f]{6}$/i.test(t))return 1/0;const[a,i,s]=n(e),[r,o,l]=n(t);return Math.sqrt((a-r)**2+(i-o)**2+(s-l)**2)}(e,s)>60);return r||(r=function(e){if(!/^#[0-9a-f]{6}$/i.test(e))return e;const[t,a,i]=n(e).map(e=>Math.round(e+.28*(255-e)));return`#${[t,a,i].map(e=>e.toString(16).padStart(2,"0")).join("")}`}(s)),{accent_color:s,accent_2_color:r}}},8257(e,t,a){a.d(t,{EK:()=>f,HX:()=>r,J4:()=>p,JL:()=>u,Oc:()=>m,i5:()=>h,kW:()=>n,lS:()=>_,pV:()=>g,rH:()=>o});const i=["dark","light","ha"],s=["purple","red-white","red-gold","blue-red","white-gold","classic","neon","gold","orange","blue","black-white","team","custom"],n=[["dark","skin.appearance_dark"],["light","skin.appearance_light"],["ha","skin.appearance_ha"]],r=[["purple","skin.palette_purple"],["red-white","skin.palette_red_white"],["red-gold","skin.palette_red_gold"],["blue-red","skin.palette_blue_red"],["white-gold","skin.palette_white_gold"],["blue","skin.palette_blue"],["orange","skin.palette_orange"],["black-white","skin.palette_black_white"],["classic","skin.palette_classic"],["neon","skin.palette_neon"],["gold","skin.palette_gold"],["team","skin.palette_team"],["custom","skin.palette_custom"]],o={purple:["#6366f1","#ec4899"],"red-white":["#e50000","#ff4444"],"red-gold":["#ef0107","#c8a232"],"blue-red":["#004d98","#a50044"],"white-gold":["#e2e8f0","#c8a951"],blue:["#2563eb","#60a5fa"],orange:["#f97316","#fb923c"],"black-white":["#e2e8f0","#111111"],classic:["#16a34a","#22c55e"],neon:["#00e5ff","#ff00aa"],gold:["#f59e0b","#fcd34d"],team:["#6366f1","#ec4899"],custom:["#6366f1","#ec4899"]},l={feyenoord:"red-white",arsenal:"red-gold",barcelona:"blue-red","real-madrid":"white-gold"},c={dark:{appearance:"dark",palette:"purple"},light:{appearance:"light",palette:"blue"},auto:{appearance:"dark",palette:"team"},custom:{appearance:"dark",palette:"custom"},"red-white":{appearance:"dark",palette:"red-white"},"red-gold":{appearance:"dark",palette:"red-gold"},"blue-red":{appearance:"dark",palette:"blue-red"},"white-gold":{appearance:"dark",palette:"white-gold"},classic:{appearance:"dark",palette:"classic"},neon:{appearance:"dark",palette:"neon"},gold:{appearance:"dark",palette:"gold"},orange:{appearance:"dark",palette:"orange"},blue:{appearance:"dark",palette:"blue"},"black-white":{appearance:"dark",palette:"black-white"}};function d(e){const t=e&&"string"==typeof e.skin?e.skin.toLowerCase():"";return c[l[t]||t]||null}function p(e){const t=e&&"string"==typeof e.appearance?e.appearance.toLowerCase():"";if(i.includes(t))return t;const a=d(e);return a?a.appearance:"dark"}function h(e){const t=e&&"string"==typeof e.palette?e.palette.toLowerCase():"";if(s.includes(t))return t;const a=d(e);return a?a.palette:"light"===p(e)?"blue":"purple"}function u(e){return"custom"===e||"team"===e}function g(e,t){const a=e||{};if(!t||"object"!=typeof t)return a;const i="string"==typeof a.skin,s={...a};return null==a.appearance&&!i&&t.appearance&&(s.appearance=t.appearance),null==a.palette&&!i&&t.palette&&(s.palette=t.palette),s}function m(e,t){return e&&void 0!==e.compact?!0===e.compact:!(!t||!0!==t.compact)}function f(e,t,a,i){const s={...e||{},appearance:t,palette:a,...i||{}};return delete s.skin,s}function _(e,t,a){return t<=0?e:"Home"===a?0:"End"===a?t-1:e<0?e:"ArrowRight"===a||"ArrowDown"===a?(e+1)%t:"ArrowLeft"===a||"ArrowUp"===a?(e-1+t)%t:e}},8429(e,t,a){a.d(t,{G:()=>r,K:()=>o});var i=a(3957),s=a(4179),n=a(8257);const r=i.AH`:host{--cl-green:#10b981;--cl-gold:#fbbf24;--cl-gold-glow:rgba(251,191,36,0.4);--cl-gold-text:#fde047;--cl-cl:var(--cl-accent);--cl-el:#f97316;--cl-rel:#ef4444;--cl-conf:#a855f7;--cl-win:#22c55e;--cl-draw:#94a3b8;--cl-loss:#ef4444;--cl-accent-soft:rgba(var(--cl-accent-rgb),0.12);--cl-accent-visible:var(--cl-accent);}:host([data-appearance="light"][data-palette="white-gold"]){--cl-accent-visible:var(--cl-accent-2);}:host([data-appearance="light"][data-palette="black-white"]){--cl-accent-visible:#475569;}:host,:host([data-palette="purple"]),:host([data-palette="custom"]),:host([data-palette="team"]){--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-accent-rgb:99,102,241;--cl-accent-2-rgb:236,72,153;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.5);}:host([data-palette="red-white"]){--cl-accent:#e50000;--cl-accent-2:#ff4444;--cl-accent-rgb:229,0,0;--cl-accent-2-rgb:255,68,68;--cl-live:#ff3b3b;--cl-live-glow:rgba(229,0,0,0.60);--cl-cl:#e50000;--cl-rel:#aa0000;}:host([data-palette="red-gold"]){--cl-accent:#ef0107;--cl-accent-2:#c8a232;--cl-accent-rgb:239,1,7;--cl-accent-2-rgb:200,162,50;--cl-live:#ff3333;--cl-live-glow:rgba(239,1,7,0.60);--cl-cl:#ef0107;--cl-rel:#990000;}:host([data-palette="blue-red"]){--cl-accent:#004d98;--cl-accent-2:#a50044;--cl-accent-rgb:0,77,152;--cl-accent-2-rgb:165,0,68;--cl-live:#ef4444;--cl-live-glow:rgba(165,0,68,0.60);--cl-cl:#004d98;--cl-rel:#7a0033;}:host([data-palette="white-gold"]){--cl-accent:#e2e8f0;--cl-accent-2:#c8a951;--cl-accent-rgb:226,232,240;--cl-accent-2-rgb:200,169,81;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#e2e8f0;}:host([data-palette="classic"]){--cl-accent:#16a34a;--cl-accent-2:#22c55e;--cl-accent-rgb:22,163,74;--cl-accent-2-rgb:34,197,94;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#16a34a;}:host([data-palette="neon"]){--cl-accent:#00e5ff;--cl-accent-2:#ff00aa;--cl-accent-rgb:0,229,255;--cl-accent-2-rgb:255,0,170;--cl-live:#ff2d55;--cl-live-glow:rgba(255,45,85,0.60);--cl-cl:#00e5ff;}:host([data-palette="gold"]){--cl-accent:#f59e0b;--cl-accent-2:#fcd34d;--cl-accent-rgb:245,158,11;--cl-accent-2-rgb:252,211,77;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#f59e0b;--cl-gold:#f59e0b;--cl-gold-glow:rgba(245,158,11,0.50);}:host([data-palette="orange"]){--cl-accent:#f97316;--cl-accent-2:#fb923c;--cl-accent-rgb:249,115,22;--cl-accent-2-rgb:251,146,60;--cl-live:#ef4444;--cl-live-glow:rgba(249,115,22,0.60);--cl-cl:#f97316;}:host([data-palette="blue"]){--cl-accent:#2563eb;--cl-accent-2:#60a5fa;--cl-accent-rgb:37,99,235;--cl-accent-2-rgb:96,165,250;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#2563eb;}:host([data-palette="black-white"]){--cl-accent:#e2e8f0;--cl-accent-2:#ffffff;--cl-accent-rgb:226,232,240;--cl-accent-2-rgb:255,255,255;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#e2e8f0;}:host,:host([data-appearance="dark"]){--cl-bg:#12141f;--cl-surface:rgba(var(--cl-accent-rgb),0.07);--cl-surface-2:rgba(var(--cl-accent-rgb),0.12);--cl-card-2:rgba(var(--cl-accent-rgb),0.07);--cl-divider:rgba(var(--cl-accent-rgb),0.16);--cl-glass-border:rgba(var(--cl-accent-rgb),0.20);--cl-text:#f4f6fb;--cl-text-2:#aab2c5;--cl-shadow:rgba(0,0,0,0.35);--cl-overlay-strong:rgba(0,0,0,0.55);--cl-overlay-soft:rgba(0,0,0,0.25);--cl-bar-outline:rgba(255,255,255,0.14);--cl-bar-separator:rgba(255,255,255,0.32);--cl-chip-bg:rgba(var(--cl-accent-rgb),0.11);--cl-chip-border:rgba(var(--cl-accent-rgb),0.24);--cl-toast-bg:#0b0f1a;--cl-num-bg:#0b0f1a;}:host([data-appearance="light"]){--cl-bg:#f6f8fc;--cl-surface:rgba(var(--cl-accent-rgb),0.08);--cl-surface-2:rgba(var(--cl-accent-rgb),0.14);--cl-card-2:rgba(255,255,255,0.75);--cl-divider:rgba(15,23,42,0.12);--cl-glass-border:rgba(var(--cl-accent-rgb),0.18);--cl-text:#0f172a;--cl-text-2:#5a6472;--cl-shadow:rgba(15,23,42,0.14);--cl-overlay-strong:rgba(0,0,0,0.45);--cl-overlay-soft:rgba(15,23,42,0.10);--cl-bar-outline:rgba(15,23,42,0.18);--cl-bar-separator:rgba(255,255,255,0.65);--cl-chip-bg:rgba(var(--cl-accent-rgb),0.10);--cl-chip-border:rgba(var(--cl-accent-rgb),0.22);--cl-toast-bg:#0f172a;--cl-num-bg:#ffffff;}:host([data-appearance="ha"]){--cl-bg:var(--ha-card-background,var(--card-background-color,#1c1c1c));--cl-surface:rgba(var(--cl-accent-rgb),0.08);--cl-surface-2:rgba(var(--cl-accent-rgb),0.14);--cl-card-2:var(--secondary-background-color,rgba(127,127,127,0.10));--cl-divider:var(--divider-color,rgba(127,127,127,0.20));--cl-glass-border:var(--divider-color,rgba(127,127,127,0.22));--cl-text:var(--primary-text-color,#e1e1e1);--cl-text-2:var(--secondary-text-color,#9b9b9b);--cl-shadow:rgba(0,0,0,0.30);--cl-overlay-strong:rgba(0,0,0,0.55);--cl-overlay-soft:rgba(0,0,0,0.25);--cl-bar-outline:var(--divider-color,rgba(127,127,127,0.28));--cl-bar-separator:rgba(127,127,127,0.55);--cl-chip-bg:rgba(var(--cl-accent-rgb),0.10);--cl-chip-border:var(--divider-color,rgba(127,127,127,0.22));--cl-toast-bg:var(--card-background-color,#1c1c1c);--cl-num-bg:var(--card-background-color,#1c1c1c);}`;function o(e,t){const a=function(e,t){const a=t||{},i=a.entity||a.entities&&a.entities[0],s=i&&e?.hass?.states?.[i]?.attributes?.card_defaults;return(0,n.pV)(a,s)}(e,t),i=(0,n.J4)(a),r=(0,n.i5)(a);return e&&e.setAttribute&&(e.setAttribute("data-appearance",i),e.setAttribute("data-palette",r),function(e,t,a){for(const t of c)e.style.removeProperty(t);if(!t||!(0,n.JL)(a))return;const i=function(e,t){const a=t?.entity||t?.entities?.[0];if(!a||!e?.hass?.states)return{};const i=e.hass.states[a]?.attributes||{},s=i.next_match||i.matches?.[0]||{};return{...i,home_color:i.home_color||i.next_match_home_color||s.home_color,away_color:i.away_color||i.next_match_away_color||s.away_color,team_color:i.team_color||i.primary_color||s.team_color,team_colors:i.team_colors||[i.home_color||i.next_match_home_color||s.home_color,i.away_color||i.next_match_away_color||s.away_color].filter(Boolean)}}(e,t),r={...i,...t},o={..."team"===a?(0,s.op)(r):{},...r};for(const[t,a,i]of l){const n=(0,s.GD)(o[t]);if(!n)continue;e.style.setProperty(a,n);const r=i?(0,s._R)(n):null;r&&e.style.setProperty(i,r)}const d=(0,s.FD)(o.gradient_from,o.gradient_to,o.gradient_angle);d&&e.style.setProperty("--cl-bg",d);const p=(0,s.tS)(o.background_image);if(p){e.style.setProperty("--cl-bg-image",`url(${JSON.stringify(p)})`);const t=(0,s.LX)(o.watermark_opacity);null!==t&&e.style.setProperty("--cl-bg-image-opacity",String(t));const a=(0,s.zg)(o.watermark_size);a&&e.style.setProperty("--cl-bg-image-size",a)}}(e,a,r)),{appearance:i,palette:r}}const l=[["accent_color","--cl-accent","--cl-accent-rgb"],["accent_2_color","--cl-accent-2","--cl-accent-2-rgb"],["secondary_color","--cl-accent-2","--cl-accent-2-rgb"],["live_color","--cl-live",null],["gold_color","--cl-gold",null],["background_color","--cl-bg",null],["surface_color","--cl-surface",null],["surface_2_color","--cl-surface-2",null],["card_color","--cl-card-2",null],["text_color","--cl-text",null],["secondary_text_color","--cl-text-2",null],["divider_color","--cl-divider",null],["chip_color","--cl-chip-bg",null],["chip_border_color","--cl-chip-border",null]],c=new Set(l.flatMap(([,e,t])=>t?[e,t]:[e]).concat(["--cl-bg","--cl-bg-image","--cl-bg-image-opacity","--cl-bg-image-size"]))},3957(e,t,a){a.d(t,{WF:()=>de,AH:()=>l,qy:()=>W,XX:()=>ce,JW:()=>K});const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class o{constructor(e,t,a){if(this._$cssResult$=!0,a!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&r.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new o(a,e,n)},c=(e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of t){const t=document.createElement("style"),s=i.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=a.cssText,e.appendChild(t)}},d=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:p,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:f}=Object,_=globalThis,b=_.trustedTypes,v=b?b.emptyScript:"",x=_.reactiveElementPolyfillSupport,y=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},$=(e,t)=>!p(e,t),k={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:s}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const n=i?.call(this);s.call(this,t),this.requestUpdate(e,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...g(e),...m(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$EC(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&!0===a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:w).toAttribute(t,a.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=a.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=i,this[i]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,a){if(void 0!==e){if(a??=this.constructor.getPropertyOptions(e),!(a.hasChanged??$)(this[e],t))return;this.P(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,a){this._$AL.has(e)||this._$AL.set(e,t),!0===a.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e)!0!==a.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[y("elementProperties")]=new Map,C[y("finalized")]=new Map,x?.({ReactiveElement:C}),(_.reactiveElementVersions??=[]).push("2.0.4");const S=globalThis,q=S.trustedTypes,z=q?q.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+E,P=`<${T}>`,j=document,N=()=>j.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,D="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,O=/>/g,G=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,R=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),W=R(1),K=R(2),U=(R(3),Symbol.for("lit-noChange")),Q=Symbol.for("lit-nothing"),J=new WeakMap,Y=j.createTreeWalker(j,129);function Z(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,n=0;const r=e.length-1,o=this.parts,[l,c]=((e,t)=>{const a=e.length-1,i=[];let s,n=2===t?"<svg>":3===t?"<math>":"",r=F;for(let t=0;t<a;t++){const a=e[t];let o,l,c=-1,d=0;for(;d<a.length&&(r.lastIndex=d,l=r.exec(a),null!==l);)d=r.lastIndex,r===F?"!--"===l[1]?r=V:void 0!==l[1]?r=O:void 0!==l[2]?(I.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=G):void 0!==l[3]&&(r=G):r===G?">"===l[0]?(r=s??F,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?G:'"'===l[3]?B:H):r===B||r===H?r=G:r===V||r===O?r=F:(r=G,s=void 0);const p=r===G&&e[t+1].startsWith("/>")?" ":"";n+=r===F?a+P:c>=0?(i.push(o),a.slice(0,c)+A+a.slice(c)+E+p):a+E+(-2===c?t:p)}return[Z(e,n+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=X.createElement(l,a),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Y.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const t=c[n++],a=i.getAttribute(e).split(E),r=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:r[2],strings:a,ctor:"."===r[1]?se:"?"===r[1]?ne:"@"===r[1]?re:ie}),i.removeAttribute(e)}else e.startsWith(E)&&(o.push({type:6,index:s}),i.removeAttribute(e));if(I.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=q?q.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],N()),Y.nextNode(),o.push({type:2,index:++s});i.append(e[t],N())}}}else if(8===i.nodeType)if(i.data===T)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)o.push({type:7,index:s}),e+=E.length-1}s++}}static createElement(e,t){const a=j.createElement("template");return a.innerHTML=e,a}}function ee(e,t,a=e,i){if(t===U)return t;let s=void 0!==i?a.o?.[i]:a.l;const n=M(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,a,i)),void 0!==i?(a.o??=[])[i]=s:a.l=s),void 0!==s&&(t=ee(e,s._$AS(e,t.values),s,i)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=(e?.creationScope??j).importNode(t,!0);Y.currentNode=i;let s=Y.nextNode(),n=0,r=0,o=a[0];for(;void 0!==o;){if(n===o.index){let t;2===o.type?t=new ae(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new oe(s,this,e)),this._$AV.push(t),o=a[++r]}n!==o?.index&&(s=Y.nextNode(),n++)}return Y.currentNode=j,i}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class ae{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,a,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),M(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,i="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=X.createElement(Z(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new te(i,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new X(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new ae(this.O(N()),this.O(N()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Q}_$AI(e,t=this,a,i){const s=this.strings;let n=!1;if(void 0===s)e=ee(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==U,n&&(this._$AH=e);else{const i=e;let r,o;for(e=s[0],r=0;r<s.length-1;r++)o=ee(this,i[a+r],t,r),o===U&&(o=this._$AH[r]),n||=!M(o)||o!==this._$AH[r],o===Q?e=Q:e!==Q&&(e+=(o??"")+s[r+1]),this._$AH[r]=o}n&&!i&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ne extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class re extends ie{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??Q)===U)return;const a=this._$AH,i=e===Q&&a!==Q||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==Q&&(a===Q||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const le=S.litHtmlPolyfillSupport;le?.(X,ae),(S.litHtmlVersions??=[]).push("3.2.0");const ce=(e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=a?.renderBefore??null;i._$litPart$=s=new ae(t.insertBefore(N(),e),e,void 0,a??{})}return s._$AI(e),s};class de extends C{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return U}}de._$litElement$=!0,de.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:de});const pe=globalThis.litElementPolyfillSupport;pe?.({LitElement:de}),(globalThis.litElementVersions??=[]).push("4.1.0")}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i=a(3957),s=a(5186);const n=new Set(["","N/A","n/a","unknown","Unknown"]);function r(e){return null!=e&&("string"==typeof e?!n.has(e.trim()):Array.isArray(e)?e.length>0:"object"!=typeof e||Object.keys(e).length>0)}function o(e){return String(e||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\b(fc|cf|sc|afc|club|football|voetbal|rotterdam)\b/g,"").replace(/[^a-z0-9]+/g,"")}function l(e,t){const a=o(e),i=o(t);return Boolean(a&&i&&(a===i||a.includes(i)||i.includes(a)))}function c(e){return String(e?.date_iso||e?.date||"").slice(0,10)}function d(e,t){if(!e||!t)return!1;if(null!=e.event_id&&null!=t.event_id&&String(e.event_id)===String(t.event_id))return!0;const a=c(e),i=c(t);return Boolean(a&&i&&a===i&&l(e.home_team,t.home_team)&&l(e.away_team,t.away_team))}function p(e,t){if(e===t)return!0;if("object"==typeof e||"object"==typeof t)try{return JSON.stringify(e)===JSON.stringify(t)}catch(e){return!1}return String(e)===String(t)}function h(e,t,a,i,s,n){if(!e||"object"!=typeof e||Array.isArray(e))return e;if(!t||"object"!=typeof t||Array.isArray(t))return e;const o={...e};for(const[e,l]of Object.entries(t)){const t=a?`${a}.${e}`:e,c=o[e];!r(c)&&r(l)?(o[e]=l,i[t]=n):!r(c)||!r(l)||p(c,l)||"object"!=typeof c||Array.isArray(c)||"object"!=typeof l||Array.isArray(l)?r(c)&&r(l)&&!p(c,l)&&["home_score","away_score","state","status","date_iso","venue"].includes(e)&&s.push({field:t,primary:c,secondary:l}):o[e]=h(c,l,t,i,s,n)}return o}function u(e,t,a="primary",i="secondary"){if(!t||!d(e,t))return e;const s={},n=[];return{...h(e,t,"",s,n,i),source_provenance:{...e.source_provenance||{},...s},source_conflicts:[...e.source_conflicts||[],...n],source_providers:[...new Set([...e.source_providers||[],a,i].filter(Boolean))]}}const g={schedule:["date","date_iso","venue","competition_name","league_name","broadcasts"],preview:["head_to_head","prediction","odds","injuries_home","injuries_away","weather"],lineup:["lineup_home","lineup_away","formation_home","formation_away"],timeline:["key_events","match_details"],statistics:["home_statistics","away_statistics","momentum","shotmap"],review:["review","player_of_the_match","team_of_the_match","match_story"]};function m(e,t,a,i,s){const n=e?.source_provenance||{};return Object.fromEntries(Object.entries(g).map(([o,l])=>{const c=Object.keys(n),d=l.filter(e=>c.some(t=>t===e||t.startsWith(`${e}.`))),p=d.length>0,h=l.some(t=>r(e?.[t])),u=l.some(t=>r(e?.[t])&&!d.includes(t));return[o,{available:h,provider:p&&u?`${t} + ${a}`:p?a:t,updated_at:p?s:i,enriched:p}]}))}function f(e,t){return t.find(t=>d(e,t))}function _(e,t){const a=t?.entity,i=[t?.enrichment_entity,...Array.isArray(t?.supplementary_entities)?t.supplementary_entities:[]].filter(Boolean);!i.length&&t?.auto_enrichment&&i.push(function(e,t){const a=t?.entity,i=e?.states?.[a];if(!i)return"";const s=i.attributes||{},n=s.matches||[],r=new Set(n.map(c).filter(Boolean)),o=new Set(n.map(e=>String(e?.event_id||"")).filter(Boolean)),l=s.provider,p=Object.entries(e.states).filter(([e,t])=>e!==a&&e.startsWith("sensor.")&&t?.attributes&&t.attributes.provider&&t.attributes.provider!==l&&Array.isArray(t.attributes.matches)&&t.attributes.matches.some(e=>r.has(c(e))||o.has(String(e?.event_id||"")))).map(([e,t])=>{const a=t.attributes.matches;return{id:e,score:100*n.reduce((e,t)=>e+(a.some(e=>d(t,e))?1:0),0)+b(t.attributes)}}).filter(e=>e.score>=100).sort((e,t)=>t.score-e.score||e.id.localeCompare(t.id));return p[0]?.id||""}(e,t));const s=[...new Set(i)].filter(t=>t&&t!==a&&e?.states?.[t]);if(!e?.states||!a||!s.length)return e;const n=e.states[a];if(!n)return e;const r=s.reduce((t,a)=>function(e,t){const a=e||{},i=t||{},s=a.provider||"primary",n=i.provider||"secondary",r=i.matches||[],o=a.last_successful_update||a.data_quality?.updated_at,l=i.last_successful_update||i.data_quality?.updated_at,c=(a.matches||[]).map(e=>{const t=u(e,f(e,r),s,n);return{...t,source_sections:m(t,s,n,o,l)}}),p=h(a,i,"",{},[],n);a.matches&&(p.matches=c);for(const e of["next_match","current_match"]){if(!a[e])continue;const t=i[e]&&d(a[e],i[e])&&i[e]||f(a[e],r),c=u(a[e],t,s,n);p[e]={...c,source_sections:m(c,s,n,o,l)}}const g=c.reduce((e,t)=>e+Object.keys(t.source_provenance||{}).length,0),_=c.reduce((e,t)=>e+(t.source_conflicts||[]).length,0);return p.source_blend={primary:s,secondary:n,enriched_fields:g,conflicts:_},p}(t,e.states[a].attributes),n.attributes),o=Object.create(e.states);o[a]={...n,attributes:{...r,source_blend:{...r.source_blend||{},primary:n.attributes.provider||"primary",supplementary_entities:s}}};const l=Object.create(e);return Object.defineProperty(l,"states",{configurable:!0,enumerable:!0,value:o}),l}function b(e){return(e?.matches||[]).reduce((e,t)=>e+["key_events","lineup_home","home_statistics","head_to_head","prediction","odds","injuries_home","review","momentum"].filter(e=>r(t?.[e])).length,0)}a(9567),a(9641),a(2558),a(397),a(9395),a(1781),a(7706),a(4929),a(1136),a(184),a(3159),a(4884),a(3777),a(2437),a(9837),a(1703),a(4391),a(5931),a(4631),a(2909);const v={team:{card:()=>Promise.resolve().then(a.bind(a,9567)),editor:()=>Promise.resolve().then(a.bind(a,7197))},standings:{card:()=>Promise.resolve().then(a.bind(a,9641)),editor:()=>Promise.resolve().then(a.bind(a,6643))},matches:{card:()=>Promise.resolve().then(a.bind(a,2558)),editor:()=>Promise.resolve().then(a.bind(a,6082))},countdown:{card:()=>Promise.resolve().then(a.bind(a,397)),editor:()=>Promise.resolve().then(a.bind(a,2135))},news:{card:()=>Promise.resolve().then(a.bind(a,9395)),editor:()=>Promise.resolve().then(a.bind(a,6593))},bracket:{card:()=>Promise.resolve().then(a.bind(a,1781)),editor:()=>Promise.resolve().then(a.bind(a,3615))},"mini-standings":{card:()=>Promise.resolve().then(a.bind(a,7706)),editor:()=>Promise.resolve().then(a.bind(a,1294))},scorers:{card:()=>Promise.resolve().then(a.bind(a,4929)),editor:()=>Promise.resolve().then(a.bind(a,4379))},"multi-team":{card:()=>Promise.resolve().then(a.bind(a,1136)),editor:()=>Promise.resolve().then(a.bind(a,4488))},"team-competitions":{card:()=>Promise.resolve().then(a.bind(a,184)),editor:()=>Promise.resolve().then(a.bind(a,2864))},"match-center":{card:()=>Promise.resolve().then(a.bind(a,3159)),editor:()=>Promise.resolve().then(a.bind(a,3384))},hub:{card:()=>Promise.resolve().then(a.bind(a,3159)),editor:()=>Promise.resolve().then(a.bind(a,3384))},race:{card:()=>Promise.resolve().then(a.bind(a,9641)),editor:()=>Promise.resolve().then(a.bind(a,6643))},"team-form":{card:()=>Promise.resolve().then(a.bind(a,4884)),editor:()=>Promise.resolve().then(a.bind(a,5308))},club:{card:()=>Promise.resolve().then(a.bind(a,3777)),editor:()=>Promise.resolve().then(a.bind(a,5259))},diagnostics:{card:()=>Promise.resolve().then(a.bind(a,2437)),editor:()=>Promise.resolve().then(a.bind(a,7759))},ticker:{card:()=>Promise.resolve().then(a.bind(a,9837)),editor:()=>Promise.resolve().then(a.bind(a,3847))},lineup:{card:()=>Promise.resolve().then(a.bind(a,1703)),editor:()=>Promise.resolve().then(a.bind(a,389))},timeline:{card:()=>Promise.resolve().then(a.bind(a,4391)),editor:()=>Promise.resolve().then(a.bind(a,4965))},minimal:{card:()=>Promise.resolve().then(a.bind(a,5931)),editor:()=>Promise.resolve().then(a.bind(a,8713))},matchday:{card:()=>Promise.resolve().then(a.bind(a,4631)),editor:()=>Promise.resolve().then(a.bind(a,7317))},archive:{card:()=>Promise.resolve().then(a.bind(a,2909)),editor:()=>Promise.resolve().then(a.bind(a,7317))}},x=new Map;function y(e,t){const a="schedule"===e?"minimal":e,i=v[a]?.[t];if(!i)return Promise.resolve();const s=`${a}:${t}`;return x.has(s)||x.set(s,i()),x.get(s)}const w=[{value:"team",element:"soccer-live-team",editor:"soccer-live-team-editor",label:"Team",description:"Live score, form, lineup, weather for one team",sensorTypes:["team_match"]},{value:"standings",element:"soccer-live-standings",editor:"soccer-live-standings-editor",label:"Standings",description:"League table with coloured zones",sensorTypes:["standings"]},{value:"matches",element:"soccer-live-matches",editor:"soccer-live-matches-editor",label:"Matches",description:"Day-grouped match list with live highlighting",sensorTypes:["team_matches","team_matches_mixed","all_matches_today"]},{value:"countdown",element:"soccer-live-countdown",editor:"soccer-live-countdown-editor",label:"Countdown",description:"Countdown timer to next match with live score",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"news",element:"soccer-live-news",editor:"soccer-live-news-editor",label:"News",description:"Article feed with images and timestamps",sensorTypes:["news"]},{value:"bracket",element:"soccer-live-bracket",editor:"soccer-live-bracket-editor",label:"Bracket",description:"Knockout bracket (list or tournament tree)",sensorTypes:["bracket"]},{value:"mini-standings",element:"soccer-live-mini-standings",editor:"soccer-live-mini-standings-editor",label:"Mini Standings",description:"Compact standings with configurable rows",sensorTypes:["standings"]},{value:"scorers",element:"soccer-live-scorers",editor:"soccer-live-scorers-editor",label:"Top Scorers",description:"Top scorers list with photo and goal tally",sensorTypes:["top_scorers"]},{value:"multi-team",element:"soccer-live-multi-team",editor:"soccer-live-multi-team-editor",label:"Multi Team",description:"Multiple teams in one compact card",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"team-competitions",element:"soccer-live-team-competitions",editor:"soccer-live-team-competitions-editor",label:"Team Competitions",description:"All competitions for a team with tab selector",sensorTypes:["team_matches_mixed"]},{value:"match-center",element:"soccer-live-match-center",editor:"soccer-live-match-center-editor",label:"Match Center",description:"Tabbed match view: overview, stats, timeline, lineup, H2H",sensorTypes:["team_match"]},{value:"hub",element:"soccer-live-match-center",editor:"soccer-live-match-center-editor",label:"Match Hub",description:"Phase-aware match view that follows preview, live play and review",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"race",element:"soccer-live-standings",editor:"soccer-live-standings-editor",label:"Competition Race",description:"Title, Europe and relegation gaps with table trajectory",sensorTypes:["standings"]},{value:"team-form",element:"soccer-live-team-form",editor:"soccer-live-team-form-editor",label:"Team Form",description:"Form trend, W/D/L dots, goals chart, home/away split",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"club",element:"soccer-live-club",editor:"soccer-live-club-editor",label:"Club",description:"Club profile, matchday, season progress, squad and transfers",sensorTypes:["club","team_match","team_matches","team_matches_mixed"]},{value:"diagnostics",element:"soccer-live-diagnostics",editor:"soccer-live-diagnostics-editor",label:"Diagnostics",description:"Sensor health, update status and schedule counters",sensorTypes:["team_match","team_matches","team_matches_mixed","all_matches_today","standings","top_scorers","bracket","news"]},{value:"ticker",element:"soccer-live-ticker",editor:"soccer-live-ticker-editor",label:"Ticker",description:"Horizontal scrollable strip of today's matches",sensorTypes:["all_matches_today","team_matches","team_matches_mixed"]},{value:"lineup",element:"soccer-live-lineup",editor:"soccer-live-lineup-editor",label:"Lineup",description:"Starting eleven for both teams",sensorTypes:["team_match"]},{value:"timeline",element:"soccer-live-timeline",editor:"soccer-live-timeline-editor",label:"Timeline",description:"Minute-by-minute match events",sensorTypes:["team_match"]},{value:"minimal",element:"soccer-live-schedule",editor:"soccer-live-schedule-editor",label:"Minimal",description:"Minimalist text views: fixtures, next match, standings or form",sensorTypes:["team_matches","team_matches_mixed","team_match","all_matches_today","standings"]},{value:"matchday",element:"soccer-live-matchday",editor:"soccer-live-insights-editor",label:"Matchday",description:"One matchday with status, fixtures and data completeness",sensorTypes:["team_matches","team_matches_mixed","match_day","all_matches_today"]},{value:"archive",element:"soccer-live-archive",editor:"soccer-live-insights-editor",label:"Archive",description:"Personal locally stored history of finished matches",sensorTypes:["team_match","team_matches","team_matches_mixed"]}],$=Object.fromEntries(w.map(e=>[e.value,e.element])),k=new Set(w.map(e=>e.element)),C=w.map(({value:e,label:t,description:a})=>({value:e,label:t,description:a})),S=Object.fromEntries(w.filter(e=>e.editor).map(e=>[e.value,e.editor])),q={schedule:"minimal"};function z(e){return q[e]||e}function A(e){const t=z(e);return $[t]||(k.has(t)?t:null)}const E=["entity","enrichment_entity","supplementary_entities","auto_enrichment","archive_entity","standings_entity","skin","language","show_event_toasts"];class T extends HTMLElement{constructor(){super(),this._hass=null,this._config={},this._child=null,this._childType=null,this._loadToken=0}set hass(e){this._hass=e,this._child&&(this._child.hass=_(e,this._config))}setConfig(e){this._config=e||{};const t=this._config.card_type,a=t?A(t):null;if(!a)return this._destroyChild(),this.innerHTML="",void this.appendChild(t?this._errorCard(this._t("ui.unknown_card_type",{type:t})):this._placeholder());const i=z(t);if(!customElements.get(a)){const e=++this._loadToken;return this._destroyChild(),this.innerHTML="",this.appendChild(this._loadingCard()),void y(i,"card").then(()=>{e===this._loadToken&&A(this._config.card_type)===a&&this.setConfig(this._config)}).catch(t=>{e===this._loadToken&&(this.innerHTML="",this.appendChild(this._errorCard(String(t))))})}this._childType!==a&&(this._destroyChild(),this._child=document.createElement(a),this._childType=a,this.innerHTML="",this.appendChild(this._child));try{this._child.setConfig(this._config)}catch(e){this._config.entity&&console.warn(`SoccerLiveCard: setConfig failed for ${this._childType}:`,e)}this._hass&&(this._child.hass=_(this._hass,this._config))}_destroyChild(){this._child&&(this._child=null,this._childType=null)}_placeholder(){const e=document.createElement("ha-card");e.style.cssText="padding:24px;text-align:center;color:#94a3b8;font-size:13px;";const t=this._hass?(this._hass.language||"en").split("-")[0]:"en";return e.textContent=(0,s.t)("ui.open_editor_to_configure",t),e}_loadingCard(){const e=document.createElement("ha-card");return e.style.cssText="padding:24px;text-align:center;color:#94a3b8;font-size:13px;",e.textContent=this._t("ui.loading"),e}_t(e,t){return(0,s.t)(e,(0,s.$c)(this._hass,this._config),t)}_errorCard(e){const t=document.createElement("ha-card");return t.style.cssText="padding:24px;text-align:center;color:#ef4444;font-size:13px;border:1px solid rgba(239,68,68,0.3);",t.textContent=e,t}getCardSize(){return this._child?.getCardSize?.()??1}getGridOptions(){return this._child?.getGridOptions?.()}static getConfigElement(){return document.createElement("soccer-live-card-editor")}static getStubConfig(){return{}}}customElements.get("soccer-live-card")||customElements.define("soccer-live-card",T);class P extends i.WF{static get properties(){return{hass:{type:Object},_config:{type:Object}}}constructor(){super(),this._config={},this._subEditor=null,this._subEditorType=null,this._configByType={}}setConfig(e){this._config={...e||{}},this.requestUpdate()}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}updated(e){e.has("hass")&&this._subEditor&&(this._subEditor.hass=this.hass),e.has("_config")&&this._syncSubEditor()}_syncSubEditor(){const e=this.shadowRoot?.getElementById("sub-editor");if(!e)return;const t=z(this._config.card_type),a=S[t]?t:Object.entries($).find(([,e])=>e===t)?.[0]||t,i=S[a];if(!a||!i)return e.innerHTML="",this._subEditor=null,void(this._subEditorType=null);if(!customElements.get(i)){const t=`${a}:${Date.now()}`;return this._editorLoadToken=t,e.textContent=this._t("ui.loading"),void y(a,"editor").then(()=>{this._editorLoadToken===t&&this._syncSubEditor()}).catch(a=>{this._editorLoadToken===t&&(e.textContent=String(a))})}if(this._subEditorType!==a){e.innerHTML="",this._subEditor=document.createElement(i),this._subEditorType=a,this._subEditor.hass=this.hass,this._subEditor.addEventListener("config-changed",e=>{this._dispatch({...e.detail.config,card_type:a})}),e.appendChild(this._subEditor);try{this._subEditor.setConfig(this._config)}catch(e){}}else try{this._subEditor.setConfig(this._config)}catch(e){this._config.entity&&console.warn("SoccerLiveCardEditor: sub-editor setConfig failed:",e)}}_typeChanged(e){const t=e.target.value;if(!t)return;const a=this._config.card_type;a&&(this._configByType[a]={...this._config});const i=this._configByType[t];if(i)this._dispatch({...i,card_type:t});else{const e={};for(const t of E)void 0!==this._config[t]&&(e[t]=this._config[t]);this._dispatch({...e,card_type:t})}}_dispatch(e){const t={...e,type:"custom:soccer-live-card"};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_sensorHint(e){if(!e||!this._config?.entity||!this.hass?.states)return i.qy``;const t=this.hass.states[this._config.entity];if(!t)return i.qy`<div class="editor-warning">Entity not found: ${this._config.entity}</div>`;const a=t.attributes?.sensor_type;return a&&e.sensorTypes?.length?e.sensorTypes.includes(a)?i.qy`<div class="editor-info">Sensor type: ${a}</div>`:i.qy`
      <div class="editor-warning">
        This card usually expects ${e.sensorTypes.join(", ")}. Selected sensor is ${a}.
      </div>
    `:i.qy``}render(){const e=this._config?.card_type||"",t=C.find(t=>t.value===e)?e:Object.entries($).find(([,t])=>t===e)?.[0]||e,a=C.find(e=>e.value===t),n=[{name:"card_type",selector:{select:{mode:"dropdown",options:[{value:"",label:"— Choose a card type —"},...C.map(e=>({value:e.value,label:e.label}))]}}}];return i.qy`
      <div class="picker-wrap">
        <ha-form
          .hass=${this.hass}
          .data=${{card_type:t}}
          .schema=${n}
          .computeLabel=${()=>"Card type"}
          @value-changed=${e=>{const t=e.detail.value?.card_type;t&&t!==(this._config?.card_type||"")&&this._typeChanged({target:{value:t}})}}
        ></ha-form>
        ${a?i.qy`<p class="picker-desc">${a.description}</p>`:""}
        ${this._sensorHint(a)}
        <label class="enrichment-picker">
          <span>${(0,s.t)("editor.enrichment_entity",(0,s.$c)(this.hass,this._config))}</span>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.enrichment_entity||""}
            .includeDomains=${["sensor"]}
            allow-custom-entity
            @value-changed=${e=>{const t=e.detail?.value||"";if(t===(this._config.enrichment_entity||""))return;const a={...this._config};t?a.enrichment_entity=t:delete a.enrichment_entity,this._dispatch(a)}}
          ></ha-entity-picker>
          <small>${(0,s.t)("editor.enrichment_entity_hint",(0,s.$c)(this.hass,this._config))}</small>
        </label>
        <label class="enrichment-picker">
          <span>${(0,s.t)("editor.supplementary_entities",(0,s.$c)(this.hass,this._config))}</span>
          <input
            .value=${(this._config.supplementary_entities||[]).join(", ")}
            placeholder="sensor.source_1, sensor.source_2"
            @change=${e=>{const t=e.target.value.split(",").map(e=>e.trim()).filter(Boolean),a={...this._config};t.length?a.supplementary_entities=t:delete a.supplementary_entities,this._dispatch(a)}}
          >
          <small>${(0,s.t)("editor.supplementary_entities_hint",(0,s.$c)(this.hass,this._config))}</small>
        </label>
        <label class="enrichment-auto">
          <span>${(0,s.t)("editor.auto_enrichment",(0,s.$c)(this.hass,this._config))}</span>
          <ha-switch
            .checked=${!0===this._config.auto_enrichment}
            @change=${e=>this._dispatch({...this._config,auto_enrichment:e.target.checked})}
          ></ha-switch>
          <small>${(0,s.t)("editor.auto_enrichment_hint",(0,s.$c)(this.hass,this._config))}</small>
        </label>
      </div>
      <details class="sub-editor-details" open>
        <summary>Card settings</summary>
        <div id="sub-editor"></div>
      </details>
    `}static get styles(){return i.AH`.picker-wrap{padding:12px 0 4px;border-bottom:1px solid var(--divider-color,rgba(0,0,0,0.12));margin-bottom:16px;}.picker-desc{margin:6px 0 0;font-size:12px;color:var(--secondary-text-color);}.enrichment-picker input{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color)}.enrichment-auto{display:grid;grid-template-columns:1fr auto;gap:4px 10px;align-items:center;margin:10px 0}.enrichment-auto small{grid-column:1/3;color:var(--secondary-text-color);font-size:12px}.editor-info,.editor-warning{margin-top:8px;padding:8px 10px;border-radius:6px;font-size:12px;}.enrichment-picker{display:grid;gap:6px;margin-top:12px;color:var(--primary-text-color);font-size:12px;font-weight:600;}.enrichment-picker small{color:var(--secondary-text-color);font-size:11px;font-weight:400;}.editor-info{color:var(--primary-text-color);background:rgba(33,150,243,0.10);border:1px solid rgba(33,150,243,0.22);}.editor-warning{color:var(--primary-text-color);background:rgba(255,152,0,0.12);border:1px solid rgba(255,152,0,0.28);}.sub-editor-details summary{cursor:pointer;margin-bottom:12px;color:var(--secondary-text-color);font-size:13px;font-weight:700;}`}}customElements.get("soccer-live-card-editor")||customElements.define("soccer-live-card-editor",P),window.customCards=window.customCards||[],window.customCards.some(e=>"soccer-live-card"===e.type)||window.customCards.push({type:"soccer-live-card",name:"Soccer Live Card",description:"Live football scores, standings, lineup, countdown, news and more.",preview:!1,documentationURL:"https://github.com/rononline/soccerlive-card"})})();