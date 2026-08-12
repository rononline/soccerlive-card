(()=>{"use strict";var e={186(e,t,a){a.d(t,{$c:()=>n,DK:()=>h,IU:()=>g,Vp:()=>p,iS:()=>u,n1:()=>d,t:()=>l});const i={"card.bracket":0,"card.lineup":1,"card.timeline":2,"card.news":3,"card.standings":4,"card.scorers":5,"card.club":6,"card.matchday":7,"card.match_center":8,"card.archive":9,"card.race":10,"matchday.empty":11,"matchday.empty_hint":12,"matchday.live":13,"matchday.upcoming":14,"matchday.finished":15,"matchday.matches":16,"archive.empty":17,"archive.empty_hint":18,"archive.personal":19,"archive.won":20,"archive.drawn":21,"archive.lost":22,"archive.season":23,"archive.all_seasons":24,"archive.competition":25,"archive.all_competitions":26,"archive.goals":27,"archive.clean_sheets":28,"archive.unbeaten":29,"archive.winning_streak":30,"archive.biggest_win":31,"archive.biggest_loss":32,"archive.common_opponents":33,"race.standings_impact":34,"race.leader":35,"race.maximum":36,"race.trajectory":37,"race.remaining":38,"race.games_in_hand":39,"race.projected_points":40,"race.next_scenarios":41,"race.title_clinched":42,"race.magic_points":43,"race.europe_secured":44,"race.relegation_safe":45,"match.summary":46,"diag.capabilities":47,"diag.season_status":48,"diag.archive_sync":49,"capability.fixtures":50,"capability.scores":51,"capability.lineups":52,"capability.timeline":53,"capability.statistics":54,"capability.head_to_head":55,"capability.predictions":56,"capability.odds":57,"capability.injuries":58,"capability.weather":59,"capability.broadcasts":60,"capability.review":61,"capability.analysis":62,"capability.club":63,"capability.reason_available":64,"capability.reason_not_yet_published":65,"capability.reason_provider_unsupported":66,"capability.reason_provider_error":67,"match.historical_h2h":68,"archive.copy":69,"archive.rebuild":70,"archive.clear":71,"archive.copied":72,"archive.copy_failed":73,"archive.rebuilt":74,"archive.cleared":75,"archive.clear_confirm":76,"archive.import":77,"archive.imported":78,"archive.import_failed":79,"archive.location":80,"archive.all_locations":81,"archive.home":82,"archive.away":83,"archive.result":84,"archive.all_results":85,"archive.opponent":86,"archive.monthly_form":87,"readiness.title":88,"readiness.ready":89,"readiness.good":90,"readiness.building":91,"readiness.early":92,"readiness.item_kickoff":93,"readiness.item_competition":94,"readiness.item_venue":95,"readiness.item_broadcasts":96,"readiness.item_weather":97,"readiness.item_head_to_head":98,"readiness.item_prediction":99,"readiness.item_odds":100,"readiness.item_absences":101,"readiness.item_lineup":102,"quality.completeness":103,"quality.conflicts":104,"quality.coverage":105,"quality.excellent":106,"quality.good":107,"quality.partial":108,"quality.limited":109,"quality.issue_no_matches":110,"quality.issue_provider_error":111,"quality.issue_limited_coverage":112,"alert.provider_error":113,"alert.match_postponed":114,"alert.match_cancelled":115,"alert.source_conflict":116,"alert.live_lineup_missing":117,"alert.live_timeline_missing":118,"alert.live_data_stale":119,"alert.match_rescheduled":120,"club.empty":121,"club.empty_hint":122,"club.squad":123,"club.transfers":124,"club.cache_note":125,"club.source_conflicts":126,"club.source_conflict_hint":127,"club.manual_overrides":128,"club.show_all":129,"club.show_less":130,"club.filter_all":131,"club.filter_in":132,"club.filter_out":133,"club.goalkeepers":134,"club.defenders":135,"club.midfielders":136,"club.attackers":137,"club.founded":138,"club.age":139,"club.transfer_in":140,"club.transfer_out":141,"club.matchday":142,"club.matchday_pre":143,"club.matchday_live":144,"club.matchday_post":145,"club.season_progress":146,"club.matches_played":147,"club.goals_for":148,"club.goals_against":149,"club.goal_difference":150,"club.spent":151,"club.income":152,"club.balance":153,"club.loans":154,"club.free_transfers":155,"club.summer_window":156,"club.winter_window":157,"editor.show_squad":158,"editor.show_transfers":159,"editor.show_matchday":160,"editor.show_season_progress":161,"editor.show_squad_analysis":162,"editor.show_injury_center":163,"editor.show_availability":164,"editor.show_prediction":165,"editor.show_selection":166,"editor.show_team_news":167,"editor.show_data_quality":168,"editor.show_automations":169,"editor.show_club_records":170,"editor.collapse_club_sections":171,"editor.club_dashboard_mode":172,"editor.club_section_order":173,"editor.max_transfers":174,"card.assists":175,"card.stats":176,"card.commentary":177,"card.video":178,"competition.round":179,"ui.neutral_site":180,"ui.live_tv":181,"ui.open_stats":182,"ui.open_commentary":183,"ui.open_video":184,"round.final":185,"round.semifinals":186,"round.quarterfinals":187,"round.r16":188,"round.r32":189,"round.r64":190,"round.third_place":191,"round.knockout_playoffs":192,"round.preliminary":193,"round.short.semifinals":194,"round.short.quarterfinals":195,"round.short.r16":196,"bracket.empty.title":197,"bracket.empty.sub":198,"bracket.tbd":199,"bracket.tied_agg":200,"bracket.agg":201,"bracket.tab_bracket":202,"bracket.tab_groups":203,"bracket.tab_schedule":204,"bracket.view_schedule":205,"bracket.won":206,"bracket.eliminated":207,"status.live":208,"status.finished":209,"status.scheduled":210,"status.full_time":211,"status.ft":212,"status.halftime":213,"status.first_half":214,"status.second_half":215,"status.kickoff":216,"status.end":217,"status.extra_time":218,"status.extra_time_start":219,"status.extra_time_halftime":220,"status.extra_time_second_half":221,"status.extra_time_end":222,"status.shootout":223,"status.shootout_start":224,"status.end_match":225,"event.goal":226,"event.goal_cancelled":227,"event.fixture_changed":228,"event.yellow_card":229,"event.red_card":230,"event.substitution":231,"last_match.label":232,"last_match.details":233,"last_match.close":234,"last_match.none":235,"last_match.none_hint":236,"last_match.editor_hint":237,"event.var":238,"event.header":239,"event.shot":240,"event.penalty":241,"event.own_goal":242,"event.free_kick":243,"event.cards":244,"filter.all":245,"form.W":246,"form.D":247,"form.L":248,"team.details":249,"team.possession":250,"team.shots":251,"team.on_target":252,"team.xg":253,"team.fouls":254,"stat.assists":255,"stat.goals":256,"stat.corners":257,"stat.appearances":258,"stat.shot_assists":259,"stat.yellow_cards":260,"stat.shots_off_target":261,"stat.expected_goals":262,"stat.expected_goals_open_play":263,"stat.expected_goals_set_play":264,"stat.expected_goals_non_penalty":265,"stat.expected_goals_on_target":266,"stat.touches_opposition_box":267,"stat.big_chances":268,"stat.big_chances_missed":269,"stat.accurate_passes":270,"stat.red_cards":271,"stat.offsides":272,"stat.saves":273,"stat.blocked_shots":274,"stat.total_passes":275,"stat.passes_completed":276,"stat.tackles":277,"stat.interceptions":278,"stat.aerial_duels_won":279,"stat.free_kick_goals":280,"stat.penalty_goals":281,"stat.accurate_crosses":282,"stat.clearances":283,"stat.successful_dribbles":284,"stat.duels_won":285,"stat.ground_duels_won":286,"stat.accurate_long_balls":287,"stat.opposition_half_passes":288,"stat.own_half_passes":289,"stat.throws":290,"stat.blocks":291,"stat.shots_inside_box":292,"stat.shots_outside_box":293,"stat.hit_woodwork":294,"team.spectators":295,"match.record":296,"match.formation":297,"match.standing":298,"team.top_scorer":299,"team.next_match":300,"team.upcoming_matches":301,"team.previous_matches":302,"team.form":303,"team.form_trend":304,"team.h2h":305,"team.prediction":306,"team.pts":307,"team.injuries":308,"team.injured":309,"team.suspended":310,"team.favourite":311,"team.and_more":312,"team.prediction_note":313,"team.status_prematch":314,"team.cmp_form":315,"team.cmp_att":316,"team.cmp_def":317,"team.goal_lines":318,"team.goal_lines_total":319,"team.goal_lines_note":320,"team.odds_note":321,"team.odds_live":322,"team.odds_live_note":323,"team.odds_live_badge":324,"team.odds":325,"team.odds_avg":326,"team.odds_avg_one":327,"form.goals_per_match":328,"form.scored":329,"form.conceded":330,"form.home":331,"form.away":332,"standings.stats":333,"standings.goals":334,"standings.pos_label":335,"standings.compact_hidden":336,"team.in":337,"team.no_match":338,"team.off_season":339,"team.unknown_entity":340,"time.today":341,"time.yesterday":342,"time.tomorrow":343,"time.now":344,"time.in_n_min":345,"time.in_n_h":346,"time.in_n_d":347,"time.n_min_ago":348,"time.n_h_ago":349,"time.n_d_ago":350,"cd.day":351,"cd.days":352,"cd.hrs":353,"cd.min":354,"cd.sec":355,"lineup.bench":356,"lineup.empty.title":357,"lineup.pre.title":358,"lineup.pre.sub":359,"lineup.empty.sub":360,"timeline.empty.title":361,"timeline.empty.sub":362,"timeline.event":363,"timeline.penalty":364,"news.empty":365,"news.articles":366,"news.premium":367,"zone.champions":368,"zone.europa":369,"zone.relegation":370,"zone.conference":371,"zone.qualified":372,"zone.third_place_playoff":373,"zone.eliminated":374,"hero.groups":375,"hero.teams":376,"hero.not_started":377,"phase.regular_season":378,"phase.group_stage":379,"phase.playoffs":380,"col.pos":381,"col.team":382,"col.played":383,"col.wins":384,"col.draws":385,"col.losses":386,"col.gd":387,"col.points":388,"generic.no_match":389,"generic.matches_count":390,"generic.unknown_entity":391,"generic.close":392,"generic.remove":393,"generic.unknown":394,"generic.home":395,"generic.away":396,"generic.other":397,"popup.match_details":398,"popup.lineups":399,"popup.timeline":400,"popup.h2h":401,"popup.no_events":402,"popup.momentum":403,"popup.shotmap":404,"popup.ratings":405,"popup.kickoff_in":406,"popup.duration_day":407,"popup.duration_days":408,"popup.duration_hour":409,"popup.duration_hours":410,"popup.duration_minute":411,"popup.duration_minutes":412,"popup.duration_and":413,"popup.round":414,"popup.standings":415,"popup.h2h_available":416,"popup.expected_lineup":417,"popup.expected_lineup_note":418,"popup.data_source":419,"popup.parts":420,"popup.review":421,"popup.player_of_match":422,"popup.substitutes":423,"popup.team_averages":424,"popup.goals_for":425,"popup.goals_against":426,"popup.updated_minutes":427,"club.next_match":428,"club.injuries":429,"club.squad_value":430,"club.average_age":431,"club.valued_players":432,"club.market_value":433,"club.age_label":434,"club.nationality":435,"club.contract_until":436,"club.appearances":437,"club.rating":438,"club.squad_analysis":439,"club.years_short":440,"club.youngest":441,"club.oldest":442,"club.thin_positions":443,"club.injury_center":444,"club.unavailable":445,"club.expected_return":446,"club.player_comparison":447,"club.select_second_player":448,"club.compare":449,"club.clear":450,"club.from":451,"club.to":452,"club.transfer_date":453,"club.transfer_type":454,"club.transfer_fee":455,"club.position_goalkeeper":456,"club.position_defender":457,"club.position_midfielder":458,"club.position_attacker":459,"club.return_day_to_day":460,"club.return_about_week":461,"club.return_few_days":462,"club.return_early":463,"club.return_mid":464,"club.return_late":465,"club.transfer_loan":466,"club.transfer_free":467,"club.transfer_permanent":468,"club.transfer_contract":469,"club.free_agent":470,"club.availability_radar":471,"club.predicted_lineup":472,"club.prediction_disclaimer":473,"club.official_selection":474,"club.starting_players":475,"club.substitutes":476,"club.team_news":477,"club.freshness_unknown":478,"club.just_updated":479,"club.updated_minutes":480,"club.automation_examples":481,"club.copy_yaml":482,"club.automation_lineup":483,"club.automation_injury":484,"club.automation_available":485,"club.automation_transfer":486,"club.automation_started":487,"club.automation_goal":488,"club.shirt_number":489,"club.starts":490,"club.availability":491,"club.recent_matches":492,"club.starting_player":493,"club.substitute":494,"club.section_quality":495,"club.section_availability":496,"club.section_selection":497,"club.section_prediction":498,"club.section_news":499,"club.section_automations":500,"club.favorites":501,"club.favorite":502,"club.search_players":503,"club.all_positions":504,"club.all_availability":505,"club.available":506,"club.no_players_found":507,"club.records":508,"club.unbeaten":509,"club.winning_streak":510,"club.clean_sheet_streak":511,"club.average_goals":512,"club.biggest_win":513,"club.home_ppg":514,"club.away_ppg":515,"club.since_update":516,"club.change_transfer_added":517,"club.change_injury_added":518,"club.change_player_available":519,"club.change_coach_changed":520,"club.change_squad_added":521,"club.change_squad_removed":522,"club.change_market_value_changed":523,"club.section_profile":524,"club.section_matchday":525,"club.section_dashboard":526,"club.section_season":527,"club.section_changes":528,"club.section_favorites":529,"club.section_records":530,"club.section_analysis":531,"club.section_injuries":532,"club.section_comparison":533,"club.section_squad":534,"club.section_transfers":535,"month.1":536,"month.2":537,"month.3":538,"month.4":539,"month.5":540,"month.6":541,"month.7":542,"month.8":543,"month.9":544,"month.10":545,"month.11":546,"month.12":547,"scorers.goals":548,"scorers.matches":549,"scorers.empty":550,"scorers.rank":551,"ui.loading":552,"ui.open_editor_to_configure":553,"ui.unknown_card_type":554,"ui.select_entity":555,"ui.unknown_entity":556,"ui.sensor_unavailable":557,"ui.invalid_config":558,"ui.entity_required":559,"ui.loading_timeout":560,"ui.entity_not_responding":561,"ui.check_integration":562,"ui.no_live_match":563,"ui.no_live_match_hint":564,"ui.off_season":565,"ui.off_season_hint":566,"ui.endpoint_unsupported":567,"ui.endpoint_unsupported_hint":568,"ui.wrong_entity_type":569,"ui.wrong_entity_type_hint":570,"ui.entity_not_found":571,"ui.check_entity_config":572,"ui.no_match_data":573,"ui.no_match_hint":574,"ui.no_stats_yet":575,"ui.no_events_yet":576,"ui.no_lineup_yet":577,"ui.no_form_data":578,"ui.no_h2h_yet":579,"ui.no_form_hint":580,"ui.sensor_unavailable_hint":581,"ui.restart_ha":582,"ui.no_standings_data":583,"ui.no_standings_hint":584,"ui.no_competition_data":585,"ui.no_competition_hint":586,"ui.not_available_competition":587,"ui.offline_cached":588,"ui.waiting_integration":589,"ui.sync_fetching":590,"ui.sync_fetching_hint":591,"ui.sync_rate_limited":592,"ui.sync_rate_limited_hint":593,"ui.sync_auth_failed":594,"ui.sync_auth_failed_hint":595,"ui.sync_provider_unavailable":596,"ui.sync_provider_unavailable_hint":597,"ui.no_entities_configured":598,"ui.add_team_entity":599,"card.my_teams":600,"card.team_form":601,"card.diagnostics":602,"standings.preseason":603,"match.vs":604,"match.draw":605,"tab.overview":606,"tab.stats":607,"tab.timeline":608,"tab.lineup":609,"tab.h2h":610,"weather.wind":611,"weather.clear":612,"weather.partly_cloudy":613,"weather.cloudy":614,"weather.foggy":615,"weather.drizzle":616,"weather.rain":617,"weather.snow":618,"weather.showers":619,"weather.thunderstorm":620,"weather.unknown":621,"editor.sensor":622,"editor.settings":623,"editor.section_display":624,"editor.section_match":625,"editor.section_prediction":626,"editor.appearance":627,"editor.entity":628,"editor.select":629,"editor.card_type":630,"editor.choose_card_type":631,"editor.profile":632,"editor.choose_profile":633,"editor.profile_hint":634,"editor.profile_basic":635,"editor.profile_matchday":636,"editor.profile_live":637,"editor.profile_analysis":638,"editor.profile_club":639,"editor.profile_compact":640,"editor.category_primary":641,"editor.category_compact":642,"editor.category_content":643,"editor.category_advanced":644,"editor.category_legacy":645,"editor.hide_header":646,"editor.hide_broadcasts":647,"editor.compact":648,"editor.inherit":649,"editor.on":650,"editor.off":651,"editor.show_form_trend":652,"editor.show_previous_matches":653,"editor.show_weather":654,"editor.show_prediction_details":655,"editor.show_odds":656,"editor.show_injuries":657,"editor.show_event_toasts":658,"editor.my_team":659,"card.schedule":660,"schedule.empty":661,"editor.max_matches":662,"editor.show_archive_stats":663,"editor.enrichment_entity":664,"editor.enrichment_entity_hint":665,"editor.auto_enrichment":666,"editor.auto_enrichment_hint":667,"editor.archive_entity":668,"editor.standings_entity":669,"editor.automatic":670,"editor.match_center_mode":671,"editor.match_center_tabs":672,"editor.match_center_phase":673,"editor.standings_mode":674,"editor.standings_table":675,"editor.standings_race":676,"editor.show_season_report":677,"editor.supplementary_entities":678,"editor.supplementary_entities_hint":679,"diag.source_blend":680,"diag.enriched_fields":681,"schedule.show":682,"schedule.show_upcoming":683,"schedule.show_previous":684,"schedule.show_all":685,"schedule.show_competition":686,"editor.text_size":687,"schedule.size_xs":688,"schedule.size_small":689,"schedule.size_normal":690,"schedule.size_large":691,"card.minimal":692,"minimal.empty":693,"minimal.variant":694,"minimal.variant_fixtures":695,"minimal.variant_next":696,"minimal.variant_standings":697,"minimal.variant_form":698,"minimal.variant_unsupported":699,"mini.team":700,"mini.p":701,"mini.gd":702,"mini.pts":703,"editor.my_team_hint":704,"editor.skin":705,"skin.appearance":706,"skin.palette":707,"skin.default":708,"lang.auto":709,"skin.shared":710,"skin.background":711,"skin.gradient_incomplete":712,"skin.gradient_angle":713,"skin.watermark_size":714,"skin.watermark_url_hint":715,"skin.gradient_from":716,"skin.gradient_to":717,"skin.watermark_url":718,"skin.watermark_opacity":719,"skin.via":720,"skin.appearance_dark":721,"skin.appearance_light":722,"skin.appearance_ha":723,"skin.palette_purple":724,"skin.palette_red_white":725,"skin.palette_red_gold":726,"skin.palette_blue_red":727,"skin.palette_white_gold":728,"skin.palette_blue":729,"skin.palette_orange":730,"skin.palette_black_white":731,"skin.palette_classic":732,"skin.palette_neon":733,"skin.palette_gold":734,"skin.palette_team":735,"skin.palette_custom":736,"skin.custom_accent":737,"skin.custom_accent_2":738,"skin.custom_background":739,"skin.custom_text":740,"skin.custom_reset":741,"skin.advanced":742,"skin.contrast_warning":743,"skin.custom_live":744,"skin.custom_gold":745,"skin.custom_surface":746,"skin.custom_card":747,"skin.custom_text_2":748,"skin.custom_divider":749,"skin.custom_chip":750,"editor.language":751,"editor.score_size":752,"editor.team_name":753,"editor.theme":754,"editor.max_items":755,"editor.ranking":756,"editor.hide_images":757,"editor.max_articles":758,"editor.reverse_order":759,"editor.smart_order":760,"editor.competition_filter":761,"editor.season_filter":762,"editor.match_filter":763,"editor.venue_filter":764,"filter.upcoming":765,"filter.finished":766,"match.preview":767,"match.review":768,"match.standings_context":769,"match.absence_context":770,"match.player_to_watch":771,"match.h2h_available":772,"match.story":773,"match.team_of_match":774,"story.opening_goal":775,"story.equalizer":776,"story.decisive_goal":777,"story.red_card":778,"story.turning_point":779,"story.final_result":780,"story.current_score":781,"story.comeback":782,"story.xg_dominance":783,"story.shot_dominance":784,"source.sections":785,"source.private":786,"source.not_available":787,"match.expectation_reality":788,"match.expected":789,"match.actual":790,"match.outcome_home":791,"match.outcome_draw":792,"match.outcome_away":793,"club.unavailable_players":794,"club.missing_load":795,"club.missing_output":796,"editor.default_group":797,"editor.max_rows":798,"editor.highlight_team":799,"editor.hide_wdlgd":800,"editor.max_teams":801,"editor.teams":802,"editor.show_season_totals":803,"editor.show_goals_per_team":804,"editor.top_n_teams":805,"editor.bottom_n_teams":806,"editor.show_live_ticker":807,"editor.show_finished":808,"editor.newest_first":809,"editor.max_events_visible":810,"editor.max_events_total":811,"editor.hide_older_than_days":812,"editor.card_title":813,"editor.default_competition":814,"editor.style":815,"editor.tree_playoffs":816,"editor.bracket_compact":817,"editor.groups_entity":818,"editor.hint_groups_entity":819,"editor.matches_entity":820,"editor.hint_matches_entity":821,"editor.max_stats":822,"editor.group_by":823,"editor.group_by_date":824,"editor.group_by_competition":825,"editor.standings_group":826,"editor.all_groups":827,"editor.style_list":828,"editor.style_tree":829,"editor.hint_older_than_days":830,"editor.hint_bracket_competitions":831,"editor.hint_multi_team_sensor":832,"editor.hint_team_competitions_sensor":833,"editor.placeholder_default_group":834,"editor.default_competition_hint":835,"editor.diag_sensor_type":836,"editor.diag_recommended_cards":837,"editor.diag_integration_version":838,"editor.diag_integration_outdated":839,"editor.diag_title_placeholder":840,"diag.sensor":841,"diag.setup_status":842,"diag.installation_check":843,"diag.request_plan":844,"diag.coordinator_cycles":845,"diag.scheduled_refreshes":846,"setup.configuration":847,"setup.authentication":848,"setup.provider_data":849,"setup.fixtures":850,"setup.season":851,"setup.quota":852,"setup.status_pass":853,"setup.status_pending":854,"setup.status_warning":855,"setup.status_fail":856,"quota.normal":857,"quota.constrained":858,"quota.critical":859,"quota.exhausted":860,"diag.club_source_conflicts":861,"diag.state":862,"diag.matches":863,"diag.live":864,"diag.upcoming":865,"diag.recent":866,"diag.requests":867,"diag.polling":868,"diag.last_update":869,"diag.sensor_age":870,"diag.status_ok":871,"diag.status_error":872,"diag.status_unknown":873,"diag.card_team":874,"diag.card_countdown":875,"diag.card_match_center":876,"diag.card_lineup":877,"diag.card_timeline":878,"diag.card_team_form":879,"diag.card_matches":880,"diag.card_ticker":881,"diag.card_live_match":882,"diag.card_team_competitions":883,"diag.card_season_overview":884,"diag.card_standings":885,"diag.card_mini_standings":886,"diag.card_scorers":887,"diag.card_bracket":888,"diag.card_news":889,"diag.card_commentary":890,"editor.select_entity":891,"editor.show":892,"editor.all_matches":893,"editor.live_only":894,"editor.competition_filter_optional":895,"editor.competition_filter_example":896,"editor.hide_when_empty":897,"editor.auto_scroll":898,"editor.scroll_speed":899,"editor.speed_slow":900,"editor.speed_normal":901,"editor.speed_fast":902,"editor.size_normal":903,"editor.size_big":904,"editor.size_huge":905},s=["Bracket","Lineups","Timeline","News","Standings","Top Scorers","Club","Matchday","Match Center","Competition race","Live","Upcoming","Finished","Matches","Season","Competition","Clean sheets","Biggest win","Leader","Champions","Fixtures","Scores","Head-to-head","Odds","Absences","Weather","Review","Analysis","Clear","Home","Away","Ready","Good","Prediction","Lineup","Squad","Transfers","Season progress","Balance","Winter","Max transfers","Stats","Video","Final","Semis","Schedule","Eliminated","Goal","Details","Close","Penalty","Possession","Fouls","Assists","Goals","Corners","Appearances","Tackles","Interceptions","Blocks","Record","Formation","Next match","Form","Unavailable","Total","Live odds","Goals per match","Position","No match available","Unknown entity","{n} min ago","No events yet","{n} articles","★ Premium","Europa","Conference League","teams","Playoffs","Team","Unknown","{n} minute","{n} minutes","{n} previous meetings available","Expected lineup","Substitutes","Injuries","Squad analysis","Player comparison","Date","Permanent","Contract","Team news","New injury","New transfer","Availability","Favourite players","Club records","Select entity","Not available for this competition","Team Form","Diagnostics","Sensor","Appearance","Simple","Show","Normal","Minimal","Palette","Orange","Neon","Gold","Accent","Accent 2","Text","Surface","Chip","Max items","Max articles","Teams","Style","Configuration","Attention","Recent","Error","Countdown","Ticker","Schema","Opstellingen","Tijdlijn","Nieuws","Stand","Topschutters","Wedstrijddag","Wedstrijdcentrum","Competitiestrijd","Komend","Afgelopen","Wedstrijden","gewonnen","verloren","Seizoen","Competitie","Grootste overwinning","Afwezigen","Weer","Nabeschouwing","Analyse","Wissen","Thuis","Goed","Aftrap","Stadion","O.O.","Voorspelling","Opstelling","Beperkt","Geen wedstrijden","Selectie","Alle","Voorbeschouwing","Seizoensontwikkeling","Saldo","Transfervrij","Speelronde","Finale","Halve finales","Totaal","Gewonnen","Uitgeschakeld","Einde wedstrijd","Doelpunt","Rode kaart","Sluiten","Doelpunten","Volgende wedstrijd","Vorm","Onderlinge duels","Goals per wedstrijd","Voor","Tegen","Geen wedstrijd beschikbaar","Onbekende entiteit","Morgen","{n} min geleden","Bank","Nog geen gebeurtenissen","Champions League","Europa League","Onbekend","{n} uur","{n} eerdere ontmoetingen beschikbaar","Verwachte opstelling","Wisselspelers","Blessures","Selectieanalyse","Niet beschikbaar","Spelervergelijking","Datum","Teamnieuws","Nieuwe blessure","Nieuwe transfer","Beschikbaarheid","Favoriete spelers","Clubrecords","Selecteer entiteit","Niet beschikbaar voor dit toernooi","Teamvorm","Regen","Weergave","Speelschema","Automatisch","Tonen","Klein","Normaal","Groot","Ranglijst","Thema","Goud","Status","Calendario","Presenze","Nuovo infortunio","Nuovo trasferimento","Disponibilità","Vittoria più larga","Cancella","Giocatori preferiti","Tutti","In entrata","In uscita","Infortuni","Giornata","Analisi","Prossima partita","Confronto giocatori","Centrocampista","Formazione prevista","Record del club","Andamento stagionale","Analisi rosa","Notizie squadra","Rosa","Trasferimenti","Riserve","Data","Definitivo","Non disponibile","{n} min fa","Serie di vittorie","Inverno","Tabellone","Formazione","Partite","Notizie","Classifica","Squadra","Forma squadra","Cronologia","Sensore","Sconosciuto","In arrivo","Seleziona entità","Mostra","Grande","Enorme","Normale","Lento","Chiudi","Dettagli","{n} precedenti disponibili","{n} minuto","Subiti","Fatti","Analisi post-partita","Aspetto","Tema Home Assistant","Superficie","Passaggi riusciti","Gol decisivo","Cartellino rosso","Formazioni","Corsa in classifica","Stagione","Competizione","Statistiche","Scontri diretti","Quote","Assenze","Meteo","Casa","Trasferta","Pronto","Pronostico","Limitata","Assist","Campo neutro","Rigore","Nessuna partita disponibile","Entità sconosciuta","Forma","Favorito","Nessun evento ancora","Evento","Precedenti","Non disponibile per questa competizione","Neve","Vista","Momento decisivo","Tema","Calendrier","Nouvelle blessure","Nouveau transfert","Disponibilité","Disponible","Buts par match","Bilan","Effacer","Joueurs favoris","Tous","Journée","En direct","Avant-match","Prochain match","Comparaison de joueurs","Composition probable","Note","Records du club","Progression de la saison","Analyse de l'effectif","Actus de l'équipe","Effectif","Transferts","Remplaçants","Indisponible","il y a {n} min","Tableau","Composition","Matchs","Actualités","Buteurs","Classement","Équipe","Capteur","Inconnu","À venir","Sélectionner une entité","Afficher","Grand","Terminés","Fermer","Détails","{n} confrontations précédentes disponibles","Apparence","Néon","Passes réussies","Carton rouge","Compositions","Chronologie","Course au classement","Saison","Compétition","Face-à-face","Cotes","Météo","Après-match","Domicile","Extérieur","Prêt","Pronostic","Barrages","Buts","Aucun match disponible","Entité inconnue","Forme","Non disponible pour cette compétition","Thème","ex. sensor.soccer_live_standings_fifa_world","ex. sensor.soccer_live_all_fifa_world","Partidos","Nueva lesión","Nuevo fichaje","Disponibilidad","Goles por partido","Mayor victoria","Borrar","Copiar YAML","Jugadores favoritos","Todos","Bajas","Lesiones","Valor de mercado","Jornada","En vivo","Análisis","Previa","Próximo partido","Convocatoria oficial","Comparación de jugadores","Defensa","Alineación prevista","Nota","Récords del club","Progreso de la temporada","Análisis de plantilla","Noticias del equipo","Plantilla","Fichajes","Mostrar todos ({n})","Mostrar menos","Titular","Titulares","Titularidades","Suplente","Suplentes","Contrato","Fecha","No disponible","Invicto","hace {n} min","Cuadro","Alineación","Noticias","Goleadores","Clasificación","Equipo","Forma del equipo","Cronología","Estado","Desconocido","Próximos","Seleccionar entidad","Mostrar","Rápido","Finalizados","Automático (idioma HA)","Cerrar","Detalles","Último resultado","Real","Esperado","{n} enfrentamientos previos disponibles","Empate","{n} hora","{n} horas","{n} minutos","En contra","A favor","Ronda","Apariencia","Claro","Separador","Texto","Paleta","Azul","Personalizado","Pases completados","Tarjeta roja","Alineaciones","En directo","Temporada","Competición","Líder","máx.","Próximo: V #{win} · E #{draw} · D #{loss}","Marcadores","Enfrentamientos","Cuotas","Ausencias","Reconstruir","Local","Visitante","Resultado","Listo","Inicial","Pronóstico","Excelente","Parcial","Limitada","Cobertura limitada","Fundado {year}","Asistencias","Vídeo","Abrir vídeo ESPN","Grupos","Eliminado","Programado","Penalti","Faltas","Goles","Entradas","espectadores","Ningún partido disponible","Entidad desconocida","Lesionado","Ataque","De {n} casa","Aún no hay eventos","grupos","Temporada regular","Fase de grupos","No disponible para esta competición","Diagnósticos","Parcialmente nublado","Nublado","Esta vista no es compatible con el sensor seleccionado","Automático","Crítica","Anteriores","Perfil rápido","Widgets compactos","Modo compacto","Idioma","Agrupar por","Grupo","Tipo de sensor","Diagnósticos Soccer Live","Máx eventos total","Estilo","Spielplan","Einsätze","Neue Verletzung","Neuer Transfer","Verfügbarkeit","Tore pro Spiel","Bilanz","Höchster Sieg","Löschen","Lieblingsspieler","Tore","Verletzungen","Spieltag","Nachbericht","Spiele","Nächstes Spiel","Spielervergleich","Voraussichtliche Aufstellung","Vereinsrekorde","Saisonverlauf","Kaderanalyse","Team-News","Kader","Ersatzspieler","Nicht verfügbar","Aufstellung","Torschützen","Tabelle","Unbekannt","Bevorstehend","Entität auswählen","Anzeigen","Groß","Beendet","Schließen","{n} frühere Begegnungen verfügbar","Spielverlauf","Rote Karte","Aufstellungen","Verein","Wettbewerb","Statistiken","Quoten","Ausfälle","Wetter","Heim","Auswärts","Bereit","Anstoß","Direktvergleich","Prognose","Begrenzt","Keine Spiele","Abwehr","Angriff","Vorlagen","Gesamt","Gruppen","Ausgeschieden","Elfmeter","Kein Spiel verfügbar","Unbekannte Entität","Noch keine Ereignisse","Nicht verfügbar für diesen Wettbewerb","Design","Calendário","Jogos","Nova lesão","Nova transferência","Disponibilidade","Golos por jogo","Maior vitória","Limpar","Jogadores favoritos","Lesões","Ao vivo","Análise","Próximo jogo","Convocados oficiais","Comparação de jogadores","Avançado","Defesa","Guarda-redes","Escalação provável","Recordes do clube","Progresso da época","Análise do plantel","Notícias da equipa","Plantel","Transferências","há {n} min","Escalação","Notícias","Classificação","Equipa","Forma da equipa","Desconhecido","Selecionar entidade","Terminados","Fechar","Detalhes","{n} confrontos anteriores disponíveis","Sofridos","Marcados","Aparência","Ouro","Cartão vermelho","Chave","Escalações","Época","Competição","Estatísticas","Ausências","Fora","Previsão","Defesas","Assistências","Pênalti","Confronto direto","Nenhum jogo disponível","Entidade desconhecida","Ainda sem eventos","Não disponível para esta competição"],r={en:[0,1,2,3,4,5,6,7,8,"Match archive",9,"No matchday data","Choose a match sensor with upcoming or finished matches",10,11,12,13,"No archived matches yet","Finished matches are added locally after a sensor update","Personal match history","won","drawn","lost",14,"All seasons",15,"All competitions","Goals for–against",16,"Longest unbeaten","Longest winning run",17,"Biggest loss","Most played opponents","Live table impact",18,"max","Table position over time","{n} matches remaining","{n} game(s) in hand","Projection: {n} pts","Next match: W #{win} · D #{draw} · L #{loss}",19,"{n} point(s) needed for the title","European football secured","Safe from relegation","Match in brief","Source capabilities","Season status","Archive sync",20,21,1,2,"Statistics",22,"Predictions",23,24,25,"Broadcasts",26,27,"Club data","Available from the selected source","Supported, but not published yet","Not supported by this provider","Temporarily unavailable due to a provider error","{n} historical meetings added","Copy export","Rebuild",28,"Archive copied","Could not copy the archive","Archive rebuild requested","Archive cleared","Permanently clear this local match archive?","Import from clipboard","Archive imported","Could not import the archive","Location","Home and away",29,30,"Result","All results","Opponent","Monthly form","Match readiness",31,32,"Building","Early","Kick-off",15,"Venue","Broadcast",25,"H2H",33,23,24,34,"Completeness","Conflicts","Data coverage","Excellent",32,"Partial","Limited","No matches","Provider error","Limited coverage","The provider reported an error","This match has been postponed","This match has been cancelled","Sources disagree about this match","The live lineup is not available yet","The live timeline is not available yet","The live data may be outdated","A new date appears to be available for this match","No club data","Choose a sensor that provides club data",35,36,"Club data refreshes about once a day","{n} source conflict(s)","The manual value differs from the provider value","Manual overrides active","Show all ({n})","Show less","All","In","Out","Goalkeepers","Defenders","Midfielders","Attackers","Founded {year}","{n} yrs","Incoming","Outgoing",7,"Preview",10,26,37,"matches","Goals for","Goals against","Goal difference","Spent","Income",38,"Loans","Free transfers","Summer",39,"Show squad","Show transfers","Show matchday dashboard","Show season progress","Show squad analysis","Show injury centre","Show availability radar","Show prediction","Show official match squad","Show team news","Show data quality","Show automation examples","Show club records","Use collapsible sections","Compact dashboard mode","Section order",40,"Top Assists",41,"Commentary",42,7,"Neutral venue","Live TV","Open ESPN stats","Open ESPN commentary","Open ESPN video",43,"Semifinals","Quarterfinals","Round of 16","Round of 32","Round of 64","Third Place","Knockout Playoffs","Preliminary Round",44,"Quarters","R16","Bracket not available","Knockout stage starts soon","TBD","Tied agg.","Agg.",0,"Groups",45,"View in schedule","Won",46,10,12,"Scheduled","Full Time","FT","Halftime","1st Half","2nd Half","Kickoff","End","Extra Time","Start Extra Time","Halftime Extra Time","2nd Half Extra Time","End Extra Time","Penalty Shootout","Start Shootout","End of Match",47,"Goal cancelled","Fixture changed","Yellow Card","Red Card","Substitution","Last result",48,49,"No recent match","The most recent finished match will appear here.","Shows the most recent finished match for this team.","VAR","Header","Shot",50,"Own goal","Free kick","Cards","All","W","D","L",48,51,"Shots","On target","xG",52,53,54,55,56,"Shot assists","Yellow cards","Shots off target","Expected goals","xG open play","xG set play","xG (non-penalty)","xG on target","Touches in opposition box","Big chances","Big chances missed","Accurate passes","Red cards","Offsides","Saves","Blocked shots","Total passes","Passes completed",57,58,"Aerial duels won","Free kick goals","Penalty goals","Accurate crosses","Clearances","Successful dribbles","Duels won","Ground duels won","Accurate long balls","Passes in opposition half","Passes in own half","Throw-ins",59,"Shots inside box","Shots outside box","Hit woodwork","spectators",60,61,"Standing","Top scorer",62,"Upcoming matches","Previous matches",63,"Season form","Head to head",33,"pts",64,"Injured","Suspended","Favourite","+{n} more","Provider estimate, not a guarantee","Pre-match",63,"Attack","Defense","Goal lines",65,"Bookmaker goal lines, not xG","Averaged market odds, may be delayed",66,"Live in-play odds, updated during the match",10,23,"Average of {n} bookmakers","From {n} bookmaker",67,"Scored","Conceded",29,30,"matches played · goals","goals",68,"teams hidden","In",69,"New season starts soon",70,"Today","Yesterday","Tomorrow","now","in {n} min","in {n} h","in {n} d",71,"{n} h ago","{n} d ago","day","days","hrs","min","sec","Bench","Lineups not available","Line-ups not published yet","They usually appear about an hour before kickoff.","Lineups are published shortly before kick-off",72,"Events appear during the match","Event",50,"No news available",73,74,19,75,"Relegation",76,"Qualified","Best 3rd",46,"groups",77,"Not started","Regular season","Group stage",78,"#",79,"P","W","D","L","+/-","Pts",69,"{n} matches",70,49,"Remove",80,29,30,"Other","Match details",1,2,22,"No events available","Match momentum","Shot map","Player ratings","Kick-off in {value}","{n} day","{n} days","{n} hour","{n} hours",81,82,"and","Round","League position",83,84,"Provider estimate; the official lineup may differ","Data source","parts available","Post-match review","Player of the match",85,"Team averages","For","Against","updated {n} min ago",62,86,"Squad value","Average age","{n} players with market value","Market value","Age","Nationality","Contract until",56,"Rating",87,"yrs","Youngest","Oldest","Limited depth","Injury centre",64,"Expected return",88,"Select a second player","Compare player",28,"From","To",89,"Transfer type","Transfer fee","Goalkeeper","Defender","Midfielder","Attacker","Day to day","About a week","A few days","Early {date}","Mid {date}","Late {date}","On loan","Free transfer",90,91,"Free agent","Availability radar",84,"Prediction based on availability and recent usage","Official match squad","Starting players",85,92,"Update time unknown","Just updated",71,"Automation examples","Copy YAML","Lineup available",93,"Player available again",94,"Match started","Goal scored","Shirt number","Starts",95,"Last five matches","Starting player","Substitute","Data quality",95,"Official squad",84,92,"Automations",96,"Favourite player","Search players","All positions","All availability","Available","No players found",97,"Unbeaten","Winning streak","Clean-sheet streak",67,17,"Home PPG","Away PPG","Since previous update",94,93,"Player available","Coach changed","Player added","Player removed","Market value changed","Club profile",7,"Key figures",37,"Changes",96,97,87,86,88,35,36,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",54,13,"No top scorers available","#","Loading...","Soccer Live — open the editor to configure this card.",'Unknown card type: "{type}"',98,70,"Sensor unavailable","Invalid configuration","Entity required","Loading timeout","Entity not responding","Check if the integration is running","No live match right now","Commentary appears here during a live game","Off season","No matches scheduled in this period",99,"ESPN does not provide this data for all competitions","Wrong sensor type","This card expects a different sensor","Entity not found","Check the entity configuration","No match data","No match available for this entity","No stats available yet",72,"No lineup available yet","No form data","No head-to-head data available","No previous matches found for this sensor","Check if the Soccer Live integration is running","Restart Home Assistant or check the integration","No standings data","Check if the league has started","No competition data","Check if the team has scheduled matches",99,"Offline — showing cached data","Waiting for integration to come online","Fetching matches…","The integration is loading data for the first time","Temporarily rate limited","The data provider is limiting requests; this resumes automatically","API key invalid","Re-enter your API-Football key via Settings → Devices & Services","Data provider unavailable","Could not reach the data provider; retrying automatically","No entities configured","Add at least one team entity","My Teams",100,101,"Season {season} has not started yet","vs","D","Overview",41,2,34,"H2H","Wind speed (Beaufort)",28,"Partly cloudy","Cloudy","Foggy","Drizzle","Rain","Snow","Showers","Thunderstorm","Unknown weather",102,"Settings","Display","Match info","Prediction & odds",103,"Entity","Select…","Card type","Choose a card type","Quick profile","Choose a starting point","Applies sensible defaults while keeping your entity, sources and appearance.",104,7,10,27,"Club dashboard","Compact mobile","Primary cards","Compact widgets","Competition & content","Advanced","Existing legacy configuration","Hide header","Hide broadcasts","Compact mode","Shared","On","Off","Show season form trend","Show previous matches","Show weather","Show prediction details","Show odds","Show unavailable players","Show event toasts (in-card)","My team (highlight)",45,"No matches to show","Max matches","Show archive statistics","Optional supplementary sensor","Only fills missing fields for matching fixtures; the primary schedule remains authoritative.","Automatically find a supplementary sensor","Combines matching fixtures from another provider when richer data is available.","External archive sensor","Standings sensor","Automatic","Match Center behaviour","Tabbed view","Phase-aware (preview, live and review)","Standings view","Full table",9,"Show season report","Additional data sources","Optional comma-separated sensors; each source only fills fields that are still missing.","Combined sources","Supplemented fields",105,11,"Previous","All","Show competition","Text size","Extra small","Small",106,"Large",107,"Nothing to show","View",20,62,4,63,"This view isn't supported by the selected sensor",79,"P","GD","Pts","e.g. Feyenoord Rotterdam","Skin",103,108,"Default","Auto (HA locale)","shared","Background & watermark","Set both gradient colours for the gradient to apply","Gradient angle","Watermark size","A URL or /local/… path served by Home Assistant","Gradient from","Gradient to","Watermark image URL","Watermark opacity","via","Dark","Light","Home Assistant theme","Purple","Red & White","Red & Gold","Blue & Red","White & Gold","Blue",109,"Black & White","Classic (green)",110,111,"Team colours","Custom",112,113,"Background",114,"Reset colours","Advanced colours","Low contrast between text and background",10,111,115,"Card","Secondary text","Divider",116,"Language","Score size","Team name","Theme",117,"Ranking","Hide images",118,"Newest first","Smart order (live, upcoming, results)","Competition filter","Season filter","Match status","Home / away",11,12,"Match preview","Match review","League positions",24,"Player to watch",83,"Match story","Team of the match","Opening goal","Equalizer","Decisive goal","Red card","Turning point","{home} – {away} finished {score}.","{home} – {away} is currently {score}.","{team} came from behind.","{team} created the most danger ({value} xG).","{team} dominated the attempts ({value} shots).","Data by section","Private source","Not available","Expectation vs reality","Expected","Actual","Home win","Draw","Away win","players unavailable","usual starting load absent","goals and assists absent","Default group (optional)","Max rows (0 = all)","Highlight team (partial name)","Hide W/D/L/+/- columns","Max teams visible",119,"Show season totals","Show goals per team","Top N teams (0 = all)","Bottom N teams (0 = all)","Show live ticker","Show finished matches","Newest matches first","Max events visible","Max events total","Hide matches older than (days)","Card title","Default competition (optional)",120,"Tree: include Playoffs","Compact (rounds stacked)","Groups entity (standings)","e.g. sensor.soccer_live_standings_fifa_world","Schedule entity (matches)","e.g. sensor.soccer_live_all_fifa_world","Max stats shown (default 4)","Group by",89,15,"Group","All","List (default)","Tree (bracket with central trophy)","Only works when 'Show Finished Matches' is enabled.","Available for Champions League, Europa League, Conference League, FIFA World Cup and other cup competitions.","Add one soccer_live_next_* or soccer_live_all_mixed_* sensor per team","Use a soccer_live_all_mixed_* sensor (contains all competitions for one team)","Leave empty for first group","e.g. Premier League","Sensor type","Recommended cards","Integration version","Integration may be outdated — update Soccer Live for full data and card recommendations","Soccer Live diagnostics",102,"Setup status","Installation check","Request plan","Coordinator cycles","Scheduled refreshes",121,"Authentication","Provider data",20,14,"Request quota",31,"Waiting",122,"Action needed",106,"Constrained","Critical","Exhausted","Club source conflicts","State",13,10,11,123,"Requests","Adaptive polling","Last update","Sensor age","OK",124,80,79,125,8,34,2,100,13,126,"Live Match","Team Competitions","Season Overview",4,"Mini Standings",5,0,3,"Live Commentary",98,105,"All matches","Live only","Competition filter (optional)","e.g. World Cup","Hide card when empty","Auto-scroll","Scroll speed","Slow",106,"Fast",106,"Big","Huge"],nl:[127,128,129,130,131,132,6,133,134,"Wedstrijdarchief",135,"Geen wedstrijddaggegevens","Kies een wedstrijdsensor met komende of gespeelde wedstrijden",10,136,137,138,"Nog geen gearchiveerde wedstrijden","Afgelopen wedstrijden worden lokaal toegevoegd na een sensorupdate","Persoonlijke wedstrijdhistorie",139,"gelijk",140,141,"Alle seizoenen",142,"Alle competities","Doelpunten voor–tegen",16,"Langst ongeslagen","Langste winstreeks",143,"Grootste nederlaag","Vaakst gespeelde tegenstanders","Impact op de live stand","Koploper","max","Positieverloop","Nog {n} wedstrijden","{n} wedstrijd(en) tegoed","Prognose: {n} pnt","Volgende: W #{win} · G #{draw} · V #{loss}","Kampioen","Nog {n} punt(en) nodig voor de titel","Europees voetbal veiliggesteld","Handhaving veiliggesteld","Wedstrijd in het kort","Bronmogelijkheden","Seizoenstatus","Archiefsynchronisatie","Programma",21,128,129,"Statistieken","Onderling","Voorspellingen",23,144,145,"Uitzendingen",146,147,"Clubgegevens","Beschikbaar via de geselecteerde bron","Ondersteund, maar nog niet gepubliceerd","Niet ondersteund door deze provider","Tijdelijk niet beschikbaar door een providerfout","{n} historische ontmoetingen toegevoegd","Export kopiëren","Opnieuw opbouwen",148,"Archief gekopieerd","Kon het archief niet kopiëren","Opnieuw opbouwen aangevraagd","Archief gewist","Dit lokale wedstrijdarchief definitief wissen?","Importeren vanaf klembord","Archief geïmporteerd","Kon het archief niet importeren","Locatie","Thuis en uit",149,"Uit","Resultaat","Alle resultaten","Tegenstander","Vorm per maand","Wedstrijdvoorbereiding","Klaar",150,"In opbouw","Vroeg",151,142,152,"Uitzending",145,153,154,23,144,155,"Volledigheid","Conflicten","Datadekking","Uitstekend",150,"Gedeeltelijk",156,157,"Providerfout","Beperkte dekking","De provider meldt een fout","Deze wedstrijd is uitgesteld","Deze wedstrijd is afgelast","De databronnen spreken elkaar tegen","De live-opstelling is nog niet beschikbaar","De live-tijdlijn is nog niet beschikbaar","De live-data is mogelijk verouderd","Er lijkt een nieuwe datum voor deze wedstrijd beschikbaar","Geen clubdata","Kies een sensor die clubdata aanbiedt",158,36,"Clubdata wordt ongeveer één keer per dag ververst","{n} bronconflict(en)","De handmatige waarde wijkt af van de providerwaarde","Handmatige correcties actief","Alles tonen ({n})","Minder tonen",159,"In","Uit","Keepers","Verdedigers","Middenvelders","Aanvallers","Opgericht {year}","{n} jr","Inkomend","Uitgaand",133,160,10,146,161,"wedstrijden","Goals voor","Goals tegen","Doelsaldo","Uitgaven","Inkomsten",162,"Huurtransfers",163,"Zomer",39,"Selectie tonen","Transfers tonen","Wedstrijddag-dashboard tonen","Seizoensontwikkeling tonen","Selectieanalyse tonen","Blessurecentrum tonen","Beschikbaarheidsradar tonen","Voorspelling tonen","Officiële wedstrijdselectie tonen","Teamnieuws tonen","Datakwaliteit tonen","Automatiseringsvoorbeelden tonen","Clubrecords tonen","Inklapbare secties gebruiken","Compacte dashboardmodus","Volgorde van secties",40,53,41,"Commentaar",42,164,"Neutraal terrein","Live op tv","Open statistieken op ESPN","Open commentaar op ESPN","Open video op ESPN",165,166,"Kwartfinales","Achtste finales","Zestiende finales","Ronde van 64","Derde plaats","Knock-out play-offs","Voorronde",166,"Kwart","8e finale","Schema niet beschikbaar","De knock-outfase begint binnenkort","N.t.b.","Gelijk totaal",167,127,"Groepen",138,"Bekijk in speelschema",168,169,10,137,"Gepland",170,"FT","Rust","1e helft","2e helft",151,"Einde","Verlengingen","Start verlengingen","Rust verlengingen","2e helft verlengingen","Einde verlengingen","Strafschoppen","Start strafschoppen",170,171,"Doelpunt afgekeurd","Wedstrijd gewijzigd","Gele kaart",172,"Wissel","Laatste uitslag",48,173,"Nog geen recente wedstrijd","De laatst gespeelde wedstrijd verschijnt hier.","Toont de laatst gespeelde wedstrijd van dit team.","VAR","Kopbal","Schot",50,"Eigen doelpunt","Vrije trap","Kaarten","Alles","W","G","V",48,"Balbezit","Schoten","Op doel","xG","Overtredingen",53,174,"Hoekschoppen",138,"Sleutelpassen","Gele kaarten","Schoten naast","Verwachte doelpunten","xG uit open spel","xG uit standaardsituaties","xG (geen penalty)","xG op doel","Balcontacten in strafschopgebied","Grote kansen","Grote kansen gemist","Nauwkeurige passes","Rode kaarten","Buitenspels","Reddingen","Geblokte schoten","Totaal passes","Passes geslaagd",57,"Intercepties","Luchtduels gewonnen","Vrije trap doelpunten","Penalty doelpunten","Nauwkeurige voorzetten","Weggewerkte ballen","Geslaagde dribbels","Duels gewonnen","Grondduels gewonnen","Nauwkeurige lange ballen","Passes op helft tegenstander","Passes op eigen helft","Inworpen","Blokkades","Schoten binnen strafschopgebied","Schoten buiten strafschopgebied","Raakte het houtwerk","toeschouwers",60,"Formatie",131,"Topscorer",175,"Volgende wedstrijden","Vorige wedstrijden",176,"Seizoenvorm",177,154,"ptn","Afwezig","Geblesseerd","Geschorst","Favoriet","+{n} meer","Schatting van de aanbieder, geen garantie","Voor de wedstrijd",176,"Aanval","Verdediging","Doellijnen",167,"Bookmaker-doellijnen, geen xG","Gemiddelde marktquoteringen, kunnen verouderd zijn",66,"Live in-play odds, bijgewerkt tijdens de wedstrijd",10,"Quoteringen","Gemiddeld over {n} bookmakers","Van {n} bookmaker",178,179,180,149,"Uit","wedstrijden gespeeld · doelpunten","doelpunten","Positie","ploegen","Over",181,"Nieuw seizoen begint binnenkort",182,"Vandaag","Gisteren",183,"nu","over {n} min","over {n} uur","over {n} dagen",184,"{n} uur geleden","{n} dagen geleden","dag","dagen","uur","min","sec",185,"Opstellingen niet beschikbaar","Opstellingen nog niet bekend","Meestal verschijnen ze ongeveer een uur voor de aftrap.","Opstellingen worden kort voor de aftrap gepubliceerd",186,"Gebeurtenissen verschijnen tijdens de wedstrijd","Gebeurtenis",50,"Geen nieuws beschikbaar","{n} artikelen",74,187,188,"Degradatie",76,"Gekwalificeerd","Beste 3e",169,"groepen",77,"Niet gestart",142,"Groepsfase","Play-offs","#",79,"G","W","GL","V","+/-","Pnt",181,"{n} wedstrijden",182,173,"Verwijderen",189,149,"Uit","Overig","Wedstrijddetails",128,129,177,"Geen gebeurtenissen beschikbaar","Wedstrijdmomentum","Schotenkaart","Spelersbeoordelingen","Aftrap over {value}","{n} dag","{n} dagen",190,190,"{n} minuut","{n} minuten","en",164,"Positie op de ranglijst",191,192,"Schatting van de aanbieder; de officiële opstelling kan afwijken","Databron","onderdelen beschikbaar",146,"Speler van de wedstrijd",193,"Teamgemiddelden",179,180,"{n} min geleden bijgewerkt",175,194,"Selectiewaarde","Gemiddelde leeftijd","{n} spelers met marktwaarde","Marktwaarde","Leeftijd","Nationaliteit","Contract tot",138,"Beoordeling",195,"jr","Jongste","Oudste","Dun bezette posities","Blessurecentrum",196,"Verwachte terugkeer",197,"Selecteer een tweede speler","Speler vergelijken",148,"Van","Naar",198,"Transfertype","Transfersom","Doelman","Verdediger","Middenvelder","Aanvaller","Van dag tot dag","Ongeveer een week","Enkele dagen","Begin {date}","Midden {date}","Eind {date}","Huur",163,90,91,163,"Beschikbaarheidsradar",192,"Voorspelling op basis van beschikbaarheid en recent gebruik","Officiële wedstrijdselectie","Basisspelers",193,199,"Tijdstip update onbekend","Zojuist bijgewerkt",184,"Automatiseringsvoorbeelden","YAML kopiëren","Opstelling beschikbaar",200,"Speler weer beschikbaar",201,"Wedstrijd begonnen",171,"Rugnummer","Basisplaatsen",202,"Laatste vijf wedstrijden","Basisspeler","Wisselspeler","Datakwaliteit",202,"Officiële selectie",192,199,"Automatiseringen",203,"Favoriete speler","Spelers zoeken","Alle posities","Alle beschikbaarheid","Beschikbaar","Geen spelers gevonden",204,"Ongeslagen","Winstreeks","Clean-sheetreeks",178,143,"Punten thuis","Punten uit","Sinds vorige update",201,200,"Speler beschikbaar","Trainer gewijzigd","Speler toegevoegd","Speler vertrokken","Marktwaarde gewijzigd","Clubprofiel",133,"Kerncijfers",161,"Wijzigingen",203,204,195,194,197,158,36,"Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec",174,138,"Geen topschutters beschikbaar","#","Laden...","Soccer Live — open de editor om deze kaart in te stellen.",'Onbekend kaarttype: "{type}"',205,182,"Sensor niet beschikbaar","Ongeldige configuratie","Entiteit vereist","Laden mislukt","Entiteit reageert niet","Controleer of de integratie actief is","Geen live wedstrijd nu","Commentaar verschijnt hier tijdens een live wedstrijd",157,"Geen wedstrijden gepland in deze periode",206,"ESPN biedt deze data niet voor alle competities","Verkeerd sensortype","Deze kaart verwacht een ander sensortype","Entiteit niet gevonden","Controleer de entiteitsconfiguratie","Geen wedstrijddata","Geen wedstrijd beschikbaar voor deze entiteit","Nog geen statistieken beschikbaar",186,"Nog geen opstelling beschikbaar","Geen vormdata","Geen onderlinge statistieken beschikbaar","Geen vorige wedstrijden gevonden voor deze sensor","Controleer of de Soccer Live integratie actief is","Herstart Home Assistant of controleer de integratie","Geen standendata","Controleer of de competitie al begonnen is","Geen competitiedata","Controleer of het team wedstrijden heeft gepland",206,"Offline — gecachede data","Wacht op de integratie","Wedstrijden ophalen…","De integratie haalt voor het eerst gegevens op","Tijdelijk verzoeklimiet bereikt","De databron beperkt het aantal verzoeken; dit gaat automatisch verder","API-key ongeldig","Voer je API-Football-key opnieuw in via Instellingen → Apparaten & Services","Databron niet bereikbaar","Kon de databron niet bereiken; probeert automatisch opnieuw","Geen entiteiten ingesteld","Voeg minimaal één team-entiteit toe","Mijn Teams",207,"Diagnostiek","Seizoen {season} is nog niet begonnen","tegen","G","Overzicht",41,129,155,153,"Windsnelheid (Beaufort)","Helder","Gedeeltelijk bewolkt","Bewolkt","Mistig","Motregen",208,"Sneeuw","Buien","Onweer","Onbekend weer",102,"Instellingen",209,"Wedstrijdinformatie","Voorspelling en odds",209,"Entiteit","Selecteren…","Kaarttype","Kies een kaarttype","Snelprofiel","Kies een uitgangspunt","Past logische standaardinstellingen toe en behoudt je entiteit, bronnen en uiterlijk.","Eenvoudig",133,10,147,"Clubdashboard","Compact mobiel","Belangrijkste kaarten","Compacte widgets","Competitie en inhoud","Geavanceerd","Bestaande verouderde configuratie","Koptekst verbergen","Uitzendingen verbergen","Compacte weergave","Gedeeld","Aan","Uit","Seizoenvorm-trend tonen","Vorige wedstrijden tonen","Weer tonen","Voorspellingsdetails tonen","Odds tonen","Afwezigen tonen","Meldingen in kaart tonen","Mijn team (accentueren)",210,"Geen wedstrijden om te tonen","Max. wedstrijden","Archiefstatistieken tonen","Optionele aanvullende sensor","Vult alleen ontbrekende velden van overeenkomende wedstrijden aan; het primaire programma blijft leidend.","Aanvullende sensor automatisch zoeken","Combineert overeenkomende wedstrijden van een andere provider wanneer die rijkere data heeft.","Externe archiefsensor","Standensensor",211,"Gedrag Match Center","Weergave met tabbladen","Fasebewust (vooraf, live en achteraf)","Standweergave","Volledige stand",135,"Seizoensrapport tonen","Extra databronnen","Optionele sensoren, gescheiden door komma’s; iedere bron vult alleen nog ontbrekende velden aan.","Gecombineerde bronnen","Aangevulde velden",212,"Aankomend","Vorige",159,"Competitie tonen","Tekstgrootte","Extra klein",213,214,215,"Minimalistisch","Niets om te tonen",209,210,175,216,176,"Deze weergave wordt niet ondersteund door de gekozen sensor",6,"G","DS","Ptn","bijv. Feyenoord Rotterdam",217,"Uiterlijk","Palet","Standaard","Automatisch (HA-taal)","gedeeld","Achtergrond & watermerk","Stel beide gradient-kleuren in om de gradient toe te passen","Gradienthoek","Watermerk-formaat","Een URL of /local/…-pad, geserveerd door Home Assistant","Gradient van","Gradient naar","Watermerk-afbeelding-URL","Watermerk-transparantie","via","Donker","Licht","Home Assistant-thema","Paars","Rood & wit","Rood & goud","Blauw & rood","Wit & goud","Blauw","Oranje","Zwart & wit","Klassiek (groen)",110,218,"Teamkleuren","Aangepast",112,113,"Achtergrond","Tekst","Kleuren resetten","Geavanceerde kleuren","Laag contrast tussen tekst en achtergrond",10,218,"Oppervlak","Kaart","Secundaire tekst","Scheidingslijn",116,"Taal","Scoregrootte","Teamnaam",217,117,216,"Afbeeldingen verbergen","Max artikelen","Nieuwste eerst","Slimme volgorde (live, komend, uitslagen)","Competitiefilter","Seizoensfilter","Wedstrijdstatus","Thuis / uit",136,137,160,146,"Posities op de ranglijst",144,"Speler om op te letten",191,"Wedstrijdverhaal","Team van de wedstrijd","Openingstreffer","Gelijkmaker","Beslissende treffer",172,"Kantelpunt","{home} – {away} eindigde in {score}.","{home} – {away} staat nu {score}.","{team} kwam terug van een achterstand.","{team} zorgde voor het meeste gevaar ({value} xG).","{team} domineerde de doelpogingen ({value} schoten).","Data per onderdeel","Privébron",196,"Verwachting versus werkelijkheid","Verwacht","Werkelijk","Thuiswinst","Gelijkspel","Uitwinst","spelers afwezig","gebruikelijke basislast afwezig","goals en assists afwezig","Standaard groep (optioneel)","Max rijen (0 = alle)","Uitgelicht team (gedeeltelijke naam)","W/G/V/+/- kolommen verbergen","Max teams zichtbaar",119,"Seizoenstotalen tonen","Doelpunten per team tonen","Top N teams (0 = alle)","Onderste N teams (0 = alle)","Live ticker tonen","Afgelopen wedstrijden tonen","Nieuwste wedstrijden eerst","Max evenementen zichtbaar","Max evenementen totaal","Wedstrijden ouder dan (dagen) verbergen","Kaarttitel","Standaard competitie (optioneel)","Stijl","Boom: inclusief Playoffs","Compact (rondes gestapeld)","Groepen sensor (stand)","bijv. sensor.soccer_live_standings_fifa_world","Wedstrijden sensor (schema)","bijv. sensor.soccer_live_all_fifa_world","Max statistieken (standaard 4)","Groepeer op",198,142,"Groep",159,"Lijst (standaard)","Boom (bracket met centrale trofee)","'Afgelopen wedstrijden tonen' moet ingeschakeld zijn.","Beschikbaar voor Champions League, Europa League, Conference League, FIFA Wereldkampioenschap en andere bekercompetities.","Voeg één soccer_live_next_* of soccer_live_all_mixed_* sensor toe per team","Gebruik een soccer_live_all_mixed_* sensor (bevat alle competities voor één team)","Leeg laten voor eerste groep","bijv. Eredivisie","Sensortype","Aanbevolen kaarten","Integratieversie","Integratie is mogelijk verouderd — werk Soccer Live bij voor volledige gegevens en kaartadvies","Soccer Live diagnostiek",102,"Installatiestatus","Installatiecontrole","Aanvraagplanning","Coördinatorcycli","Geplande vernieuwingen","Configuratie","Authenticatie","Providerdata",138,141,"Aanvraagquotum","Gereed","Wachten","Aandacht","Actie nodig",214,156,"Kritiek","Verbruikt","Bronconflicten clubdata",219,138,10,136,123,"Aanvragen","Adaptief pollen","Laatst bijgewerkt","Leeftijd sensor","In orde","Fout",189,79,"Aftellen",134,155,129,207,138,126,"Livewedstrijd","Teamcompetities","Seizoensoverzicht",131,"Kleine stand",132,127,130,"Livecommentaar",205,212,"Alle wedstrijden","Alleen live","Competitiefilter (optioneel)","bijv. WK","Kaart verbergen wanneer leeg","Automatisch scrollen","Scrollsnelheid","Langzaam",214,"Snel",214,215,"Zeer groot"],it:[251,281,258,254,255,"Capocannonieri",6,232,8,"Archivio partite",282,"Nessun dato della giornata","Scegli un sensore con partite in programma o concluse","In diretta","In programma","Concluse",253,"Nessuna partita archiviata","Le partite concluse vengono salvate localmente dopo un aggiornamento","Cronologia personale","vinte","pareggiate","perse",283,"Tutte le stagioni",284,"Tutte le competizioni","Gol fatti–subiti","Porte inviolate","Serie imbattuta",249,225,"Sconfitta più larga","Avversari più frequenti","Impatto sulla classifica live","Capolista","max","Andamento in classifica","{n} partite rimanenti","{n} partite da recuperare","Proiezione: {n} pt","Prossima: V #{win} · P #{draw} · S #{loss}","Campione","{n} punti necessari per il titolo","Qualificazione europea assicurata","Salvezza assicurata","Partita in breve","Capacità della fonte","Stato della stagione","Sincronizzazione archivio",220,"Risultati",281,258,285,286,"Pronostici",287,288,289,"Trasmissioni",233,"Analisi avanzata","Dati del club","Disponibile dalla fonte selezionata","Supportato, ma non ancora pubblicato","Non supportato da questo provider","Temporaneamente non disponibile per un errore del provider","{n} precedenti storici aggiunti","Copia esportazione","Ricostruisci",226,"Archivio copiato","Impossibile copiare l’archivio","Ricostruzione richiesta","Archivio cancellato","Cancellare definitivamente questo archivio locale?","Importa dagli appunti","Archivio importato","Impossibile importare l’archivio","Sede","Casa e trasferta",290,291,"Risultato","Tutti i risultati","Avversario","Forma mensile","Preparazione partita",292,"Buono","In preparazione","Iniziale","Calcio d’inizio",284,"Stadio","Trasmissione",289,286,293,287,288,252,"Completezza","Conflitti","Copertura dati","Eccellente","Buona","Parziale",294,"Nessuna partita","Errore del provider","Copertura limitata","Il provider ha segnalato un errore","Questa partita è stata rinviata","Questa partita è stata annullata","Le fonti non concordano su questa partita","La formazione live non è ancora disponibile","La cronologia live non è ancora disponibile","I dati live potrebbero non essere aggiornati","Sembra disponibile una nuova data per questa partita","Nessun dato del club","I dati del club appaiono con i sensori squadra API-Football",242,243,"I dati del club si aggiornano circa una volta al giorno","{n} conflitto/i di fonte","Il valore manuale differisce da quello del provider","Sostituzioni manuali attive","Mostra tutti ({n})","Mostra meno",228,229,230,"Portieri","Difensori","Centrocampisti","Attaccanti","Fondato {year}","{n} anni",229,230,232,"Anteprima",10,233,239,"partite","Gol fatti","Gol subiti","Differenza reti","Speso","Entrate","Bilancio","Prestiti","Trasferimenti gratuiti","Estate",250,"Mostra rosa","Mostra trasferimenti","Mostra dashboard giornata","Mostra andamento stagionale","Mostra analisi rosa","Mostra centro infortuni","Mostra radar disponibilità","Mostra pronostico","Mostra rosa ufficiale della gara","Mostra notizie squadra","Mostra qualità dei dati","Mostra esempi di automazione","Mostra record del club","Usa sezioni comprimibili","Modalità dashboard compatta","Ordine delle sezioni","Max trasferimenti",295,285,"Telecronaca",42,232,296,"Diretta TV","Apri statistiche ESPN","Apri telecronaca ESPN","Apri video ESPN",165,"Semifinali","Quarti di finale","Ottavi di finale","Sedicesimi","Turno dei 64","Terzo posto","Spareggi KO","Turno preliminare","Semi","Quarti","Ottavi","Tabellone non disponibile","La fase a eliminazione diretta inizierà presto","Da def.","Pari aggreg.","Aggreg.",251,"Gironi",253,"Vedi nel calendario","Vinto","Eliminato","Diretta","Finita","Programmata","Termine","FT","Intervallo","Primo Tempo","Secondo Tempo","Inizio","Fine","Tempi supplementari","Inizio supplementari","Intervallo supplementari","2° tempo supplementare","Fine supplementari","Rigori","Inizio rigori","Fine partita",47,"Gol annullato","Partita modificata","Cartellino giallo",280,"Sostituzione","Ultimo risultato",269,268,"Nessuna partita recente","L'ultima partita terminata apparirà qui.","Mostra l'ultima partita giocata da questa squadra.","VAR","Colpo di testa","Tiro",297,"Autogol","Calcio di punizione","Cartellini","Tutto","V","N","P",269,"Possesso","Tiri","In porta","xG","Falli",295,"Gol","Calci d'angolo",221,"Assist tiro","Cartellini gialli","Tiri fuori","Gol attesi","xG azione","xG su palla inattiva","xG (esclusi rigori)","xG nello specchio","Tocchi in area avversaria","Grandi occasioni","Grandi occasioni fallite",278,"Cartellini rossi","Fuorigioco","Parate","Tiri bloccati","Passaggi totali",278,"Tackle","Intercettazioni","Duelli aerei vinti","Gol su punizione","Gol su rigore","Cross precisi","Palloni respinti","Dribbling riusciti","Duelli vinti","Duelli a terra vinti","Lanci lunghi precisi","Passaggi nella metà avversaria","Passaggi nella propria metà","Rimesse laterali","Blocchi","Tiri in area","Tiri da fuori area","Legni colpiti","spettatori",60,252,255,"Capocannoniere",234,"Prossime partite","Partite precedenti",300,"Forma stagionale","Testa a testa",293,"pt","Indisponibili","Infortunato","Squalificato",301,"+{n} altri","Stima del provider, nessuna garanzia","Pre-partita",300,"Attacco","Difesa","Linee gol","Totale","Linee gol del bookmaker, non xG","Quote di mercato medie, potrebbero non essere aggiornate","Quote live","Quote live in tempo reale, aggiornate durante la partita",10,287,"Media di {n} bookmaker","Da {n} bookmaker","Gol per partita",273,272,290,291,"partite giocate · gol","gol","Posizione","squadre nascoste","A",298,"Nuova stagione in arrivo",299,"Oggi","Ieri","Domani","ora","tra {n} min","tra {n} h","tra {n} g",248,"{n} h fa","{n} g fa","giorno","giorni","ore","min","sec","Panchina","Formazioni non disponibili","Formazioni non ancora pubblicate","Di solito compaiono circa un'ora prima del calcio d'inizio.","Le formazioni vengono pubblicate poco prima del fischio d'inizio",302,"Gli eventi compaiono durante la partita",303,297,"Nessuna notizia disponibile","{n} articoli",74,19,75,"Retrocessione",76,"Qualificate","Migliori 3°","Eliminate","gironi","squadre","Non iniziato","Campionato","Fase a gironi","Play-off","#",256,"P","V","N","S","+/-","Pt",298,"{n} partite",299,268,"Rimuovi",260,290,291,"Altro","Dettagli partita",281,258,304,"Nessun evento disponibile","Andamento della partita","Mappa dei tiri","Voti dei giocatori","Calcio d'inizio tra {value}","{n} giorno","{n} giorni","{n} ora","{n} ore",271,"{n} minuti","e","Turno","Posizione in classifica",270,237,"Stima del provider; la formazione ufficiale può variare","Fonte dei dati","parti disponibili",274,"Migliore in campo",244,"Medie di squadra",273,272,"aggiornato {n} min fa",234,231,"Valore della rosa","Età media","{n} giocatori con valore di mercato","Valore di mercato","Età","Nazionalità","Contratto fino al",221,"Voto",240,"anni","Più giovane","Più anziano","Profondità limitata","Centro infortuni",247,"Rientro previsto",235,"Seleziona un secondo giocatore","Confronta giocatore",226,"Da","A",245,"Tipo di trasferimento","Costo del trasferimento","Portiere","Difensore",236,"Attaccante","Da valutare giorno per giorno","Circa una settimana","Pochi giorni","Inizio {date}","Metà {date}","Fine {date}","In prestito","Trasferimento gratuito",246,"Contratto","Svincolato","Radar disponibilità",237,"Previsione basata su disponibilità e impiego recente","Rosa ufficiale della gara","Titolari",244,241,"Orario di aggiornamento sconosciuto","Appena aggiornato",248,"Esempi di automazione","Copia YAML","Formazione disponibile",222,"Giocatore di nuovo disponibile",223,"Partita iniziata","Gol segnato","Numero di maglia","Da titolare",224,"Ultime cinque partite","Titolare","Riserva","Qualità dei dati",224,"Rosa ufficiale",237,241,"Automazioni",227,"Giocatore preferito","Cerca giocatori","Tutti i ruoli","Tutte le disponibilità","Disponibile","Nessun giocatore trovato",238,"Imbattuto",249,"Serie di clean sheet","Gol a partita",225,"Punti/gara casa","Punti/gara fuori","Dall'ultimo aggiornamento",223,222,"Giocatore disponibile","Allenatore cambiato","Giocatore aggiunto","Giocatore rimosso","Valore di mercato cambiato","Profilo del club",232,"Dati chiave",239,"Cambiamenti",227,238,240,231,235,242,243,"Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic","Gol",253,"Nessun capocannoniere disponibile","#","Caricamento...","Soccer Live — apri l'editor per configurare questa scheda.",'Tipo di scheda sconosciuto: "{type}"',262,299,"Sensore non disponibile","Configurazione non valida","Entità obbligatoria","Timeout caricamento","Entità non risponde","Controlla se l'integrazione è attiva","Nessuna partita in diretta","Il commento appare qui durante una partita live","Fuori stagione","Nessuna partita programmata in questo periodo",305,"ESPN non fornisce questi dati per tutte le competizioni","Tipo di sensore errato","Questa card si aspetta un sensore diverso","Entità non trovata","Controlla la configurazione dell'entità","Nessun dato partita","Nessuna partita disponibile per questa entità","Nessuna statistica disponibile",302,"Formazione non ancora disponibile","Nessun dato forma","Nessun dato testa a testa disponibile","Nessuna partita precedente trovata","Verifica che l'integrazione Soccer Live sia attiva","Riavvia Home Assistant o controlla l'integrazione","Nessun dato classifica","Verifica se il campionato è iniziato","Nessun dato competizione","Verifica se la squadra ha partite programmate",305,"Offline — dati in cache","In attesa dell'integrazione","Caricamento partite…","L'integrazione sta caricando i dati per la prima volta","Temporaneamente limitato","Il provider sta limitando le richieste; riprenderà automaticamente","Chiave API non valida","Reinserisci la chiave API-Football in Impostazioni → Dispositivi e servizi","Provider dei dati non disponibile","Impossibile raggiungere il provider; nuovo tentativo automatico","Nessuna entità configurata","Aggiungi almeno un'entità squadra","I Miei Team",257,"Diagnostica","La stagione {season} non è ancora iniziata","contro","P","Panoramica",285,258,252,"H2H","Velocità del vento (Beaufort)","Sereno","Parzialmente nuvoloso","Nuvoloso","Nebbia","Pioggerella","Pioggia",306,"Rovesci","Temporale","Meteo sconosciuto",259,"Impostazioni","Visualizzazione","Info partita","Pronostico e quote",275,"Entità","Seleziona…","Tipo di scheda","Scegli un tipo di scheda","Profilo rapido","Scegli un punto di partenza","Applica valori consigliati mantenendo entità, fonti e aspetto.","Semplice",232,10,233,"Dashboard club","Mobile compatto","Schede principali","Widget compatti","Competizioni e contenuti","Avanzate","Configurazione precedente esistente","Nascondi intestazione","Nascondi canali TV","Modalità compatta","Condiviso","On","Off","Mostra andamento forma","Mostra partite precedenti","Mostra meteo","Mostra dettagli pronostico","Mostra quote","Mostra indisponibili","Mostra notifiche eventi","La mia squadra (evidenzia)",220,"Nessuna partita da mostrare","Max. partite","Mostra statistiche archivio","Sensore supplementare opzionale","Completa solo i dati mancanti delle partite corrispondenti; il calendario principale resta autorevole.","Trova automaticamente un sensore supplementare","Combina le partite corrispondenti di un altro provider quando offre dati più ricchi.","Sensore archivio esterno","Sensore classifica","Automatico","Comportamento Match Center","Vista a schede","Adattiva alla fase","Vista classifica","Classifica completa",282,"Mostra rapporto stagionale","Fonti dati aggiuntive","Sensori opzionali separati da virgole; ogni fonte completa solo i campi mancanti.","Fonti combinate","Campi integrati",263,"Prossime",304,"Tutte","Mostra competizione","Dimensione testo","Molto piccolo","Piccolo",266,264,107,"Niente da mostrare",307,220,234,255,300,"Esta vista não é compatível com o sensor selecionado",256,"G","DR","Pti","es. Juventus",309,275,108,"Predefinito","Automatico (lingua HA)","condiviso","Sfondo e filigrana","Imposta entrambi i colori del gradiente per applicarlo","Angolo del gradiente","Dimensione filigrana","Un URL o un percorso /local/… servito da Home Assistant","Gradiente da","Gradiente a","URL immagine filigrana","Opacità filigrana","tramite","Scuro","Chiaro",276,"Viola","Rosso e bianco","Rosso e oro","Blu e rosso","Bianco e oro","Blu","Arancione","Bianco e nero","Classico (verde)",110,"Oro","Colori squadra","Personalizzato","Accento","Accento 2","Sfondo","Testo","Reimposta colori","Colori avanzati","Contrasto basso tra testo e sfondo",10,"Oro",277,"Scheda","Testo secondario","Divisore",116,"Lingua","Dimensione punteggio","Nome squadra",309,"Max elementi",255,"Nascondi immagini","Max articoli","Prima i più recenti","Ordine intelligente (live, in arrivo, risultati)","Filtro competizione","Filtro stagione","Stato partita","Casa / trasferta",261,"Terminate","Anteprima partita",274,"Posizioni in classifica",288,"Giocatore da seguire",270,"Racconto della partita","Squadra della partita","Gol del vantaggio","Gol del pareggio",279,280,308,"{home} – {away} è terminata {score}.","{home} – {away} è attualmente {score}.","{team} ha rimontato uno svantaggio.","{team} ha creato più pericoli ({value} xG).","{team} ha dominato i tentativi ({value} tiri).","Dati per sezione","Fonte privata",247,"Attese vs realtà","Atteso","Reale","Vittoria in casa","Pareggio","Vittoria in trasferta","giocatori non disponibili","carico da titolare abituale assente","gol e assist assenti","Gruppo predefinito (opzionale)","Max righe (0 = tutte)","Evidenzia squadra (nome parziale)","Nascondi colonne V/N/P/+/-","Max squadre visibili","Squadre","Mostra totali stagione","Mostra gol per squadra","Top N squadre (0 = tutte)","Ultime N squadre (0 = tutte)","Mostra ticker live","Mostra partite finite","Prima le partite più recenti","Max eventi visibili","Max eventi totali","Nascondi partite più vecchie di (giorni)","Titolo carta","Competizione predefinita (opzionale)","Stile","Albero: includi Playoff","Compatto (round impilati)","Entità gironi (classifica)","es. sensor.soccer_live_standings_fifa_world","Entità partite (calendario)","es. sensor.soccer_live_all_fifa_world","Max statistiche (default 4)","Raggruppa per",245,284,"Gruppo",228,"Lista (predefinita)","Albero (bracket con trofeo centrale)","Funziona solo se 'Mostra partite terminate' è abilitato.","Disponibile per Champions League, Europa League, Conference League, Coppa del Mondo FIFA e altre coppe.","Aggiungi un sensor soccer_live_next_* o soccer_live_all_mixed_* per squadra","Usa un sensor soccer_live_all_mixed_* (contiene tutte le competizioni per una squadra)","Lasciare vuoto per il primo gruppo","es. Serie A","Tipo di sensore","Schede consigliate","Versione integrazione","L'integrazione potrebbe essere obsoleta — aggiorna Soccer Live per dati completi e suggerimenti delle schede","Diagnostica Soccer Live",259,"Stato configurazione","Controllo installazione","Piano richieste","Cicli coordinatore","Aggiornamenti pianificati","Configurazione","Autenticazione","Dati del provider",253,283,"Quota richieste",292,"In attesa","Attenzione","Azione richiesta",266,294,"Critica","Esaurita","Conflitti fonti club","Stato",253,10,261,"Recenti","Richieste","Polling adattivo","Ultimo aggiornamento","Età del sensore","OK","Errore",260,256,"Conto alla rovescia",8,252,258,257,253,126,"Partita live","Competizioni squadra","Panoramica stagione",255,"Mini classifica","Marcatori",251,254,"Cronaca live",262,263,"Tutte le partite","Solo live","Filtro competizione (opzionale)","es. Mondiali","Nascondi scheda se vuota","Scorrimento automatico","Velocità di scorrimento",267,266,"Veloce",266,264,265],fr:[336,357,358,339,341,340,6,320,8,"Archive des matchs",359,"Aucune donnée de journée","Choisissez un capteur avec des matchs à venir ou terminés",321,345,349,338,"Aucun match archivé","Les matchs terminés sont enregistrés localement après une mise à jour","Historique personnel","gagnés","nuls","perdus",360,"Toutes les saisons",361,"Toutes les compétitions","Buts pour–contre","Matchs sans encaisser","Plus longue invincibilité","Plus longue série de victoires","Plus grande victoire","Plus lourde défaite","Adversaires les plus fréquents","Impact sur le classement en direct",18,"max","Évolution au classement","{n} matchs restants","{n} match(s) en retard","Projection : {n} pts","Prochain : V #{win} · N #{draw} · D #{loss}","Champion","{n} point(s) requis pour le titre","Qualification européenne assurée","Maintien assuré","Le match en bref","Capacités de la source","État de la saison","Synchronisation de l’archive",310,21,357,358,"Statistiques",362,"Pronostics",363,24,364,"Diffusions",365,147,"Données du club","Disponible via la source sélectionnée","Pris en charge, mais pas encore publié","Non pris en charge par ce fournisseur","Temporairement indisponible à cause d’une erreur du fournisseur","{n} confrontations historiques ajoutées","Copier l’export","Reconstruire",317,"Archive copiée","Impossible de copier l’archive","Reconstruction demandée","Archive effacée","Effacer définitivement cette archive locale ?","Importer depuis le presse-papiers","Archive importée","Impossible d’importer l’archive","Lieu","Domicile et extérieur",366,367,"Résultat","Tous les résultats","Adversaire","Forme mensuelle","Préparation du match",368,"Bon","En préparation","Précoce","Coup d’envoi",361,"Stade","Diffusion",364,362,369,363,24,337,"Complétude","Conflits","Couverture des données","Excellente","Bonne","Partielle","Limitée","Aucun match","Erreur du fournisseur","Couverture limitée","Le fournisseur a signalé une erreur","Ce match a été reporté","Ce match a été annulé","Les sources divergent sur ce match","La composition en direct n'est pas encore disponible","Le fil du match n'est pas encore disponible","Les données en direct sont peut-être obsolètes","Une nouvelle date semble disponible pour ce match","Aucune donnée du club","Les données du club apparaissent pour les capteurs d'équipe API-Football",331,332,"Les données du club sont actualisées environ une fois par jour","{n} conflit(s) de source","La valeur manuelle diffère de celle du fournisseur","Remplacements manuels actifs","Tout afficher ({n})","Afficher moins",319,"Arrivées","Départs","Gardiens","Défenseurs","Milieux","Attaquants","Fondé {year}","{n} ans","Arrivée","Départ",320,322,321,147,328,"matchs","Buts marqués","Buts encaissés","Différence de buts","Dépensé","Recettes",316,"Prêts","Transferts gratuits","Été","Hiver","Afficher l'effectif","Afficher transferts","Afficher le tableau de la journée","Afficher la progression de la saison","Afficher l'analyse de l'effectif","Afficher le centre des blessures","Afficher le radar de disponibilité","Afficher pronostic","Afficher le groupe officiel","Afficher les actus de l'équipe","Afficher la qualité des données","Afficher les exemples d'automatisation","Afficher les records du club","Sections repliables","Mode tableau de bord compact","Ordre des sections","Max transferts","Passeurs",41,"Commentaire","Vidéo",320,"Terrain neutre","En direct à la télévision","Ouvrir les stats ESPN","Ouvrir le commentaire ESPN","Ouvrir la vidéo ESPN",165,"Demi-finales","Quarts de finale","Huitièmes de finale","Seizièmes","Tour des 64","Troisième place",370,"Tour préliminaire","Demis","Quarts","8èmes","Tableau non disponible","La phase à élimination directe commencera bientôt","À déf.","Score cumulé égal","Cumul",336,"Groupes",338,"Voir dans le calendrier","Gagné","Éliminé",321,"Terminé","Programmé","Temps régl.","FT","Mi-temps","1ère mi-temps","2ème mi-temps","Coup d'envoi","Fin","Prolongations","Début prolong.","Mi-temps prolong.","2e période prolong.","Fin prolong.","Tirs au but","Début t.a.b.","Fin du match","But","But annulé","Match modifié","Carton jaune",356,"Remplacement","Dernier résultat",351,350,"Aucun match récent","Le dernier match terminé apparaîtra ici.","Affiche le dernier match joué par cette équipe.","VAR","Coup de tête","Tir",50,"But contre son camp","Coup franc","Cartons","Tout","V","N","D",351,51,"Tirs","Cadrés","xG","Fautes","Passes décisives",371,55,"Présences","Passes tir","Cartons jaunes","Tirs non cadrés","Buts attendus","xG jeu ouvert","xG sur coups de pied arrêtés","xG (hors penalty)","xG cadrés","Ballons touchés dans la surface adverse","Grosses occasions","Grosses occasions manquées",355,"Cartons rouges","Hors-jeux","Arrêts","Tirs bloqués","Passes totales",355,"Tacles",58,"Duels aériens gagnés","Buts sur coup franc","Buts sur penalty","Centres réussis","Dégagements","Dribbles réussis","Duels gagnés","Duels au sol gagnés","Longues passes réussies","Passes dans le camp adverse","Passes dans son camp","Touches","Contres","Tirs dans la surface","Tirs hors de la surface","Poteaux touchés","spectateurs",316,61,341,"Meilleur buteur",323,"Prochains matchs","Matchs précédents",374,"Forme de la saison","Face à face",369,"pts","Absents","Blessé","Suspendu","Favori","+{n} autres","Estimation du fournisseur, sans garantie",322,374,"Attaque","Défense","Lignes de buts",65,"Lignes de buts du bookmaker, pas de xG","Cotes de marché moyennes, peuvent être obsolètes","Cotes live","Cotes en direct, mises à jour pendant le match",10,363,"Moyenne de {n} bookmakers","De {n} bookmaker",315,"Pour","Contre",366,367,"matchs joués · buts","buts",68,"équipes masquées","À",372,"Nouvelle saison bientôt",373,"Aujourd'hui","Hier","Demain","maintenant","dans {n} min","dans {n} h","dans {n} j",335,"il y a {n} h","il y a {n} j","jour","jours","hrs","min","sec","Banc","Compositions non disponibles","Compositions pas encore publiées","Elles apparaissent généralement environ une heure avant le coup d'envoi.","Les compositions sont publiées peu avant le coup d'envoi","Aucun événement","Les événements apparaissent pendant le match","Événement",50,"Aucune actualité disponible",73,74,19,75,"Relégation",76,"Qualifiées","Meilleurs 3es","Éliminées","groupes","équipes","Pas commencé","Saison régulière","Phase de groupes",370,"#",342,"J","G","N","P","+/-","Pts",372,"{n} matchs",373,350,"Supprimer",344,366,367,"Autre","Détails du match",357,358,"Confrontations","Aucun événement disponible","Momentum du match","Carte des tirs","Notes des joueurs","Coup d'envoi dans {value}","{n} jour","{n} jours","{n} heure","{n} heures",81,82,"et","Tour","Position au classement",352,325,"Estimation du fournisseur ; la composition officielle peut différer","Source des données","parties disponibles","Analyse d'après-match","Homme du match",333,"Moyennes de l'équipe","Marqués","Encaissés","mis à jour il y a {n} min",323,194,"Valeur de l'effectif","Âge moyen","{n} joueurs avec valeur marchande","Valeur marchande","Âge","Nationalité","Contrat jusqu'au","Apparitions",326,329,"ans","Le plus jeune","Le plus âgé","Profondeur limitée","Centre des blessures",334,"Retour prévu",324,"Sélectionnez un second joueur","Comparer le joueur",317,"De","À",89,"Type de transfert","Indemnité de transfert","Gardien","Défenseur","Milieu","Attaquant","Au jour le jour","Environ une semaine","Quelques jours","Début {date}","Mi-{date}","Fin {date}","En prêt","Transfert gratuit","Définitif","Contrat","Agent libre","Radar de disponibilité",325,"Prévision basée sur la disponibilité et l'utilisation récente","Groupe officiel du match","Titulaires",333,330,"Heure de mise à jour inconnue","Vient d'être mis à jour",335,"Exemples d'automatisation","Copier le YAML","Composition disponible",311,"Joueur de nouveau disponible",312,"Match commencé","But marqué","Numéro de maillot","Titularisations",313,"Cinq derniers matchs","Titulaire","Remplaçant","Qualité des données",313,"Groupe officiel",325,330,"Automatisations",318,"Joueur favori","Rechercher des joueurs","Tous les postes","Toutes disponibilités",314,"Aucun joueur trouvé",327,"Invaincu","Série de victoires","Série de clean sheets",315,"Plus large victoire","Pts/match domicile","Pts/match extérieur","Depuis la dernière mise à jour",312,311,"Joueur disponible","Entraîneur changé","Joueur ajouté","Joueur retiré","Valeur marchande modifiée","Profil du club",320,"Chiffres clés",328,"Changements",318,327,329,194,324,331,332,"Janv","Févr","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc",371,338,"Aucun buteur disponible","#","Chargement...","Soccer Live — ouvrez l'éditeur pour configurer cette carte.","Type de carte inconnu : « {type} »",346,373,"Capteur indisponible","Configuration invalide","Entité requise","Délai de chargement dépassé","L'entité ne répond pas","Vérifiez que l'intégration est active","Aucun match en direct","Le commentaire s'affiche ici pendant un match en direct","Hors saison","Aucun match prévu pendant cette période",375,"ESPN ne fournit pas ces données pour toutes les compétitions","Mauvais type de capteur","Cette carte attend un capteur différent","Entité introuvable","Vérifiez la configuration de l'entité","Pas de données de match","Aucun match disponible pour cette entité","Pas encore de statistiques","Pas encore d'événements","Composition pas encore disponible","Pas de données de forme","Aucune donnée face-à-face disponible","Aucun match précédent trouvé","Vérifiez que l'intégration Soccer Live est active","Redémarrez Home Assistant ou vérifiez l'intégration","Pas de données de classement","Vérifiez si la compétition a commencé","Pas de données de compétition","Vérifiez si l'équipe a des matchs programmés",375,"Hors ligne — données en cache","En attente de l'intégration","Chargement des matchs…","L'intégration charge les données pour la première fois","Débit temporairement limité","Le fournisseur limite les requêtes ; cela reprend automatiquement","Clé API invalide","Ressaisissez votre clé API-Football via Paramètres → Appareils et services","Fournisseur de données indisponible","Impossible de joindre le fournisseur ; nouvelle tentative automatique","Aucune entité configurée","Ajoutez au moins une entité équipe","Mes Équipes","Forme équipe",101,"La saison {season} n'a pas encore commencé","contre","N","Aperçu",41,358,337,"H2H","Vitesse du vent (Beaufort)","Dégagé","Partiellement nuageux","Nuageux","Brouillard","Bruine","Pluie","Neige","Averses","Orage","Météo inconnue",343,"Paramètres","Affichage","Infos du match","Pronostic et cotes",353,"Entité","Sélectionner…","Type de carte","Choisir un type de carte","Profil rapide","Choisir un point de départ","Applique des réglages conseillés en conservant l'entité, les sources et l'apparence.",104,"Jour de match","Direct",147,"Tableau du club","Mobile compact","Cartes principales","Widgets compacts","Compétitions et contenu","Avancé","Configuration héritée existante","Masquer l'en-tête","Masquer les diffusions TV","Mode compact","Partagé","Activé","Désactivé","Afficher tendance de forme","Afficher matchs précédents","Afficher météo","Afficher les détails du pronostic","Afficher cotes","Afficher absents","Afficher notifs d'événements","Mon équipe (mettre en avant)",310,"Aucun match à afficher","Max. matchs","Afficher les statistiques d’archive","Capteur complémentaire facultatif","Complète uniquement les champs manquants des matchs correspondants ; le calendrier principal reste prioritaire.","Trouver automatiquement un capteur complémentaire","Combine les matchs correspondants d’un autre fournisseur lorsqu’il propose des données plus riches.","Capteur d’archive externe","Capteur de classement","Automatique","Comportement du Match Center","Vue par onglets","Adaptée à la phase","Vue du classement","Classement complet",359,"Afficher le bilan de saison","Sources de données supplémentaires","Capteurs facultatifs séparés par des virgules ; chaque source complète uniquement les champs manquants.","Sources combinées","Champs complétés",347,345,"Précédents",319,"Afficher la compétition","Taille du texte","Très petit","Petit",106,348,107,"Rien à afficher","Vue",310,323,341,374,"Cette vue n'est pas prise en charge par le capteur sélectionné",342,"J","Diff","Pts","ex. Paris Saint-Germain",376,353,108,"Par défaut","Auto (langue HA)","partagé","Arrière-plan et filigrane","Définissez les deux couleurs du dégradé pour l'appliquer","Angle du dégradé","Taille du filigrane","Une URL ou un chemin /local/… servi par Home Assistant","Dégradé de","Dégradé vers","URL de l'image du filigrane","Opacité du filigrane","via","Sombre","Clair","Thème Home Assistant","Violet","Rouge et blanc","Rouge et or","Bleu et rouge","Blanc et or","Bleu",109,"Noir et blanc","Classique (vert)",354,"Or","Couleurs de l'équipe","Personnalisé",112,113,"Arrière-plan","Texte","Réinitialiser les couleurs","Couleurs avancées","Faible contraste entre le texte et l'arrière-plan",321,"Or",115,"Carte","Texte secondaire","Séparateur","Puce","Langue","Taille du score","Nom d'équipe",376,"Max éléments",341,"Masquer les images",118,"Plus récents en premier","Ordre intelligent (live, à venir, résultats)","Filtre de compétition","Filtre de saison","Statut du match","Domicile / extérieur",345,349,322,365,"Positions au classement",24,"Joueur à suivre",352,"Récit du match","Équipe du match","But d'ouverture","But égalisateur","But décisif",356,"Tournant du match","{home} – {away} s’est terminé sur le score de {score}.","{home} – {away} est actuellement à {score}.","{team} a renversé le score.","{team} a créé le plus de danger ({value} xG).","{team} a dominé les tentatives ({value} tirs).","Données par section","Source privée",334,"Attentes vs réalité","Attendu","Réel","Victoire à domicile","Match nul","Victoire à l'extérieur","joueurs indisponibles","charge de titulaire habituelle absente","buts et passes décisives absents","Groupe par défaut (optionnel)","Max lignes (0 = toutes)","Mettre en avant (nom partiel)","Masquer colonnes V/N/D/+/-","Max équipes visibles","Équipes","Afficher totaux saison","Afficher buts par équipe","Top N équipes (0 = toutes)","Dernières N équipes (0 = toutes)","Afficher ticker live","Afficher matchs terminés","Matchs les plus récents d'abord","Max événements visibles","Max événements total","Masquer matchs de plus de (jours)","Titre de la carte","Compétition par défaut (optionnel)",120,"Arbre: inclure Playoffs","Compact (rounds empilés)","Entité groupes (classement)",377,"Entité matchs (calendrier)",378,"Max stats (défaut 4)","Grouper par",89,361,"Groupe",319,"Liste (par défaut)","Arbre (bracket avec trophée central)","Fonctionne uniquement si 'Afficher les matchs terminés' est activé.","Disponible pour la Champions League, l'Europa League, la Conference League, la Coupe du Monde FIFA et d'autres coupes.","Ajoutez un capteur soccer_live_next_* ou soccer_live_all_mixed_* par équipe","Utilisez un capteur soccer_live_all_mixed_* (contient toutes les compétitions pour une équipe)","Laisser vide pour le premier groupe","ex. Ligue 1","Type de capteur","Cartes recommandées","Version de l'intégration","L'intégration est peut-être obsolète — mettez à jour Soccer Live pour toutes les données et recommandations de cartes","Diagnostics Soccer Live",343,"État de la configuration","Contrôle de l’installation","Plan des requêtes","Cycles du coordinateur","Actualisations planifiées",121,"Authentification","Données du fournisseur",338,360,"Quota de requêtes",368,"En attente",122,"Action requise",106,"Limité","Critique","Épuisé","Conflits de sources du club","État",338,321,345,"Récents","Requêtes","Sondage adaptatif","Dernière mise à jour","Âge du capteur","OK","Erreur",344,342,"Compte à rebours",8,337,"Fil du match","Forme de l'équipe",338,"Bandeau","Match en direct","Compétitions de l'équipe","Aperçu de la saison",341,"Mini classement",340,336,339,"Commentaire live",346,347,"Tous les matchs","En direct uniquement","Filtre de compétition (facultatif)","ex. Coupe du monde","Masquer la carte si vide","Défilement auto","Vitesse de défilement","Lent",106,"Rapide",106,348,"Très grand"],es:[420,458,427,422,424,423,6,392,8,"Archivo de partidos","Carrera en la clasificación","No hay datos de la jornada","Elige un sensor con partidos próximos o finalizados",459,430,434,379,"Aún no hay partidos archivados","Los partidos finalizados se guardan localmente tras una actualización","Historial personal","ganados","empatados","perdidos",460,"Todas las temporadas",461,"Todas las competiciones","Goles a favor–en contra","Porterías a cero","Mayor racha invicta","Mayor racha de victorias",384,"Mayor derrota","Rivales más frecuentes","Impacto en la tabla en directo",462,463,"Evolución en la tabla","Quedan {n} partidos","{n} partido(s) pendiente(s)","Proyección: {n} pts",464,"Campeón","{n} punto(s) necesarios para el título","Clasificación europea asegurada","Permanencia asegurada","Partido en breve","Capacidades de la fuente","Estado de la temporada","Sincronización del archivo",220,465,458,427,"Estadísticas",466,"Pronósticos",467,468,"Tiempo","Retransmisiones",394,"Análisis avanzado","Datos del club","Disponible en la fuente seleccionada","Compatible, pero aún no publicado","No compatible con este proveedor","Temporalmente no disponible por un error del proveedor","{n} enfrentamientos históricos añadidos","Copiar exportación",469,385,"Archivo copiado","No se pudo copiar el archivo","Reconstrucción solicitada","Archivo borrado","¿Borrar definitivamente este archivo local?","Importar desde el portapapeles","Archivo importado","No se pudo importar el archivo","Ubicación","Local y visitante",470,471,472,"Todos los resultados","Rival","Forma mensual","Preparación del partido",473,"Bien","En preparación",474,"Inicio",461,"Estadio","Emisión","Clima",466,475,467,468,421,"Integridad","Conflictos","Cobertura de datos",476,"Buena",477,478,"Sin partidos","Error del proveedor",479,"El proveedor informó un error","Este partido ha sido aplazado","Este partido ha sido cancelado","Las fuentes no coinciden sobre este partido","La alineación en vivo aún no está disponible","La cronología en vivo aún no está disponible","Los datos en vivo pueden estar desactualizados","Parece haber una nueva fecha para este partido","Sin datos del club","Los datos del club aparecen con sensores de equipo de API-Football",406,407,"Los datos del club se actualizan una vez al día aprox.","{n} conflicto(s) de fuente","El valor manual difiere del valor del proveedor","Anulaciones manuales activas",408,409,388,"Altas",389,"Porteros","Defensas","Centrocampistas","Delanteros",480,"{n} a","Llegada","Salida",392,395,393,394,403,"partidos","Goles a favor","Goles en contra","Diferencia de goles","Gastado","Ingresos",38,"Cesiones","Fichajes gratis","Verano","Invierno","Mostrar plantilla","Mostrar fichajes","Mostrar panel de jornada","Mostrar progreso de temporada","Mostrar análisis de plantilla","Mostrar centro de lesiones","Mostrar radar de disponibilidad","Mostrar pronóstico","Mostrar convocatoria oficial","Mostrar noticias del equipo","Mostrar calidad de los datos","Mostrar ejemplos de automatización","Mostrar récords del club","Usar secciones plegables","Modo panel compacto","Orden de las secciones","Máx fichajes",481,41,"Comentario",482,392,"Campo neutral","TV en directo","Abrir estadísticas ESPN","Abrir comentario ESPN",483,43,"Semifinales","Cuartos de final","Octavos de final","Dieciseisavos","Ronda de 64","Tercer lugar","Eliminatorias previas","Ronda preliminar",44,"Cuartos","Octavos","Cuadro no disponible","La fase eliminatoria comenzará pronto","Por def.","Empate global","Global",420,484,379,"Ver en el calendario","Ganado",485,393,"Finalizado",486,43,"FT","Descanso","Primer tiempo","Segundo tiempo","Saque inicial","Fin","Prórroga","Inicio prórroga","Descanso prórroga","2a parte prórroga","Fin prórroga","Penaltis","Inicio penaltis","Fin del partido","Gol","Gol anulado","Partido modificado","Tarjeta amarilla",457,"Sustitución",438,437,436,"Sin partidos recientes","El último partido finalizado aparecerá aquí.","Muestra el último partido jugado por este equipo.","VAR","Cabezazo","Disparo",487,"Gol en propia","Falta directa","Tarjetas","Todo","V","E","D",437,"Posesión","Tiros","Al arco","xG",488,481,489,"Córners","Apariciones","Asistencias de tiro","Tarjetas amarillas","Tiros fuera","Goles esperados","xG en juego","xG a balón parado","xG (sin penaltis)","xG a puerta","Toques en el área rival","Ocasiones claras","Ocasiones claras falladas",456,"Tarjetas rojas","Fueras de juego","Paradas","Tiros bloqueados","Pases totales",456,490,"Interceptaciones","Duelos aéreos ganados","Goles de falta","Goles de penalti","Centros precisos","Despejes","Regates completados","Duelos ganados","Duelos terrestres ganados","Balones largos precisos","Pases en campo rival","Pases en campo propio","Saques de banda","Bloqueos","Tiros dentro del área","Tiros fuera del área","Tiros al poste",491,38,"Formación",424,"Goleador",396,"Próximos partidos","Partidos anteriores",300,"Forma de la temporada","Cara a cara",475,"pts",389,494,"Sancionado",301,"+{n} más","Estimación del proveedor, sin garantía",395,300,495,399,"Líneas de goles",65,"Líneas de goles de la casa, no xG","Cuotas de mercado promediadas, pueden estar desactualizadas","Cuotas en vivo","Cuotas en directo, actualizadas durante el partido",10,467,"Promedio de {n} casas",496,383,447,446,470,471,"partidos jugados · goles","goles","Posición","equipos ocultos","En",492,"Nueva temporada próximamente",493,"Hoy","Ayer","Mañana","ahora","en {n} min","en {n} h","en {n} d",419,"hace {n} h","hace {n} d","día","días","hrs","min","seg","Banquillo","Alineaciones no disponibles","Alineaciones aún no publicadas","Suelen aparecer una hora antes del inicio.","Las alineaciones se publican poco antes del saque inicial",497,"Los eventos aparecen durante el partido",303,487,"No hay noticias disponibles","{n} artículos",74,19,75,"Descenso",76,"Clasificadas","Mejores 3°","Eliminadas",498,"equipos","No iniciado",499,500,"Eliminatorias","#",425,"PJ","G","E","P","+/-","Pts",492,"{n} partidos",493,436,"Eliminar",429,470,471,"Otro","Detalles del partido",458,427,466,"Sin eventos disponibles","Momentum del partido","Mapa de tiros","Notas de los jugadores","Inicio en {value}","{n} día","{n} días",443,444,271,445,"y",448,"Posición en la tabla",441,400,"Estimación del proveedor; la alineación oficial puede variar","Fuente de datos","partes disponibles","Análisis post-partido","Jugador del partido",414,"Promedios del equipo",447,446,"actualizado hace {n} min",396,390,"Valor de la plantilla","Edad media","{n} jugadores con valor de mercado",391,"Edad","Nacionalidad","Contrato hasta",379,401,404,"años","Menor","Mayor","Profundidad limitada","Centro de lesiones",417,"Regreso previsto",398,"Selecciona un segundo jugador","Comparar jugador",385,"De","A",416,"Tipo de fichaje","Coste del fichaje","Portero",399,236,"Delantero","Día a día","Cerca de una semana","Unos días","Principios de {date}","Mediados de {date}","Finales de {date}","Cedido","Fichaje gratis","Permanente",415,"Agente libre","Radar de disponibilidad",400,"Previsión basada en disponibilidad y uso reciente",397,411,414,405,"Hora de actualización desconocida","Recién actualizado",419,"Ejemplos de automatización",386,"Alineación disponible",380,"Jugador disponible de nuevo",381,"Partido iniciado","Gol marcado","Dorsal",412,382,"Últimos cinco partidos",410,413,"Calidad de los datos",382,397,400,405,"Automatizaciones",387,"Jugador favorito","Buscar jugadores","Todas las posiciones","Toda disponibilidad",314,"No se encontraron jugadores",402,418,"Racha de victorias","Racha de porterías a cero",383,384,"Pts/partido casa","Pts/partido fuera","Desde la última actualización",381,380,"Jugador disponible","Entrenador cambiado","Jugador añadido","Jugador eliminado","Valor de mercado cambiado","Perfil del club",392,"Cifras clave",403,"Cambios",387,402,404,390,398,406,407,"Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic",489,379,"No hay goleadores disponibles","#","Cargando...","Soccer Live — abre el editor para configurar esta tarjeta.","Tipo de tarjeta desconocido: «{type}»",431,493,"Sensor no disponible","Configuración inválida","Entidad requerida","Tiempo de carga agotado","La entidad no responde","Comprueba si la integración está activa","Sin partido en directo ahora","El comentario aparece aquí durante un partido en vivo","Fuera de temporada","No hay partidos programados en este período",501,"ESPN no proporciona estos datos para todas las competiciones","Tipo de sensor incorrecto","Esta tarjeta espera un sensor diferente","Entidad no encontrada","Revisa la configuración de la entidad","Sin datos de partido","No hay partido disponible para esta entidad","Aún no hay estadísticas",497,"Alineación aún no disponible","Sin datos de forma","No hay datos de enfrentamientos disponibles","No se encontraron partidos anteriores","Comprueba que la integración Soccer Live está activa","Reinicia Home Assistant o comprueba la integración","Sin datos de clasificación","Comprueba si la competición ha comenzado","Sin datos de competición","Comprueba si el equipo tiene partidos programados",501,"Sin conexión — datos en caché","Esperando la integración","Cargando partidos…","La integración está cargando los datos por primera vez","Límite de solicitudes temporal","El proveedor limita las solicitudes; se reanuda automáticamente","Clave API no válida","Vuelve a introducir tu clave API-Football en Ajustes → Dispositivos y servicios","Proveedor de datos no disponible","No se pudo contactar con el proveedor; reintentando automáticamente","No hay entidades configuradas","Añade al menos una entidad de equipo","Mis Equipos",426,502,"La temporada {season} no ha comenzado aún","vs","E","Resumen",41,427,421,"H2H","Velocidad del viento (Beaufort)","Despejado",503,504,"Niebla","Llovizna","Lluvia","Nieve","Chubascos","Tormenta","Tiempo desconocido",102,"Ajustes","Visualización","Info del partido","Pronóstico y cuotas",449,"Entidad","Seleccionar…","Tipo de tarjeta","Elige un tipo de tarjeta",509,"Elige un punto de partida","Aplica ajustes recomendados conservando la entidad, las fuentes y la apariencia.","Sencillo","Día de partido",459,394,"Panel del club","Móvil compacto","Tarjetas principales",510,"Competiciones y contenido","Avanzado","Configuración heredada existente","Ocultar encabezado","Ocultar canales de TV",511,"Compartido","Activado","Desactivado","Mostrar tendencia de forma","Mostrar partidos anteriores","Mostrar clima","Mostrar detalles del pronóstico","Mostrar cuotas","Mostrar bajas","Mostrar notificaciones de eventos","Mi equipo (resaltar)",220,"No hay partidos que mostrar","Máx. partidos","Mostrar estadísticas del archivo","Sensor complementario opcional","Solo completa campos ausentes de partidos coincidentes; el calendario principal sigue mandando.","Buscar automáticamente un sensor complementario","Combina partidos coincidentes de otro proveedor cuando ofrece datos más completos.","Sensor de archivo externo","Sensor de clasificación",506,"Comportamiento del Match Center","Vista con pestañas","Adaptada a la fase","Vista de clasificación","Clasificación completa","Carrera de clasificación","Mostrar informe de temporada","Fuentes de datos adicionales","Sensores opcionales separados por comas; cada fuente solo completa los campos ausentes.","Fuentes combinadas","Campos completados",432,430,508,388,"Mostrar competición","Tamaño del texto","Muy pequeño","Pequeño",106,264,107,"Nada que mostrar",307,220,396,424,300,505,425,"PJ","DG","Pts","ej. Real Madrid",309,449,453,"Predeterminado",435,"compartido","Fondo y marca de agua","Define ambos colores del degradado para aplicarlo","Ángulo del degradado","Tamaño de marca de agua","Una URL o ruta /local/… servida por Home Assistant","Degradado desde","Degradado hasta","URL de imagen de marca de agua","Opacidad de marca de agua","vía","Oscuro",450,"Tema de Home Assistant","Morado","Rojo y blanco","Rojo y oro","Azul y rojo","Blanco y oro",454,"Naranja","Blanco y negro","Clásico (verde)","Neón","Oro","Colores del equipo",455,"Acento","Acento 2","Fondo",452,"Restablecer colores","Colores avanzados","Bajo contraste entre texto y fondo",393,"Oro",277,"Tarjeta","Texto secundario",451,116,512,"Tamaño del marcador","Nombre del equipo",309,"Máx elementos",424,"Ocultar imágenes","Máx artículos","Más recientes primero","Orden inteligente (en vivo, próximos, resultados)","Filtro de competición","Filtro de temporada","Estado del partido","Local / visitante",430,434,"Previa del partido","Análisis del partido","Posiciones en la clasificación",468,"Jugador a seguir",441,"Historia del partido","Equipo del partido","Gol inicial","Gol del empate",279,457,"Punto de inflexión","{home} – {away} terminó {score}.","{home} – {away} va actualmente {score}.","{team} remontó el partido.","{team} creó más peligro ({value} xG).","{team} dominó los intentos ({value} tiros).","Datos por sección","Fuente privada",417,"Expectativa vs realidad",440,439,"Victoria local",442,"Victoria visitante","jugadores no disponibles","carga de titular habitual ausente","goles y asistencias ausentes","Grupo predeterminado (opcional)","Máx filas (0 = todas)","Resaltar equipo (nombre parcial)","Ocultar columnas V/E/D/+/-","Máx equipos visibles","Equipos","Mostrar totales de temporada","Mostrar goles por equipo","Top N equipos (0 = todos)","Últimos N equipos (0 = todos)","Mostrar ticker en vivo","Mostrar partidos terminados","Partidos más recientes primero","Máx eventos visibles",517,"Ocultar partidos de más de (días)","Título de la tarjeta","Competición predeterminada (opcional)",518,"Árbol: incluir Playoffs","Compacto (rondas apiladas)","Entidad grupos (clasificación)","ej. sensor.soccer_live_standings_fifa_world","Entidad partidos (calendario)","ej. sensor.soccer_live_all_fifa_world","Máx estadísticas (por defecto 4)",513,416,461,514,388,"Lista (predeterminado)","Árbol (bracket con trofeo central)","Solo funciona si 'Mostrar partidos terminados' está activado.","Disponible para Champions League, Europa League, Conference League, Copa del Mundo FIFA y otras copas.","Agrega un sensor soccer_live_next_* o soccer_live_all_mixed_* por equipo","Usa un sensor soccer_live_all_mixed_* (contiene todas las competiciones de un equipo)","Dejar vacío para el primer grupo","ej. La Liga",515,"Tarjetas recomendadas","Versión de la integración","La integración puede estar desactualizada — actualiza Soccer Live para datos completos y recomendaciones de tarjetas",516,102,"Estado de configuración","Comprobación de instalación","Plan de solicitudes","Ciclos del coordinador","Actualizaciones programadas","Configuración","Autenticación","Datos del proveedor",379,460,"Cuota de solicitudes",473,"En espera","Atención","Acción necesaria",106,478,507,"Agotada","Conflictos de fuentes del club",428,379,393,430,"Recientes","Solicitudes","Sondeo adaptativo","Última actualización","Antigüedad del sensor","OK",124,429,425,"Cuenta atrás",8,421,427,426,379,"Marcador","Partido en vivo","Competiciones del equipo","Resumen de temporada",424,"Mini clasificación",423,420,422,"Comentario en vivo",431,432,"Todos los partidos","Solo en vivo","Filtro de competición (opcional)","p. ej. Mundial","Ocultar tarjeta si está vacía","Desplazamiento automático","Velocidad de desplazamiento",267,106,433,106,264,265],de:["K.o.-Runde",557,555,"Nachrichten",546,545,558,531,8,"Spielarchiv","Tabellenrennen","Keine Spieltagdaten","Wähle einen Sensor mit anstehenden oder beendeten Spielen",10,"Anstehend",552,533,"Noch keine archivierten Spiele","Beendete Spiele werden nach einer Aktualisierung lokal gespeichert","Persönlicher Spielverlauf",139,"unentschieden",140,360,"Alle Saisons",559,"Alle Wettbewerbe","Tore für–gegen","Spiele ohne Gegentor","Längste Serie ungeschlagen","Längste Siegesserie",526,"Höchste Niederlage","Häufigste Gegner","Auswirkung auf die Live-Tabelle","Tabellenführer","max.","Tabellenverlauf","Noch {n} Spiele","{n} Nachholspiel(e)","Prognose: {n} Pkt.","Nächstes: S #{win} · U #{draw} · N #{loss}","Meister","{n} Punkt(e) bis zum Titel","Europapokal gesichert","Klassenerhalt gesichert","Spiel in Kürze","Quellenfunktionen","Saisonstatus","Archiv-Synchronisierung",519,"Ergebnisse",557,"Zeitleiste",560,"Direkter Vergleich","Prognosen",561,562,563,"Übertragungen",532,147,"Vereinsdaten","Über die ausgewählte Quelle verfügbar","Unterstützt, aber noch nicht veröffentlicht","Von diesem Anbieter nicht unterstützt","Wegen eines Anbieterfehlers vorübergehend nicht verfügbar","{n} historische Duelle hinzugefügt","Export kopieren","Neu aufbauen",527,"Archiv kopiert","Archiv konnte nicht kopiert werden","Neuaufbau angefordert","Archiv gelöscht","Dieses lokale Spielarchiv endgültig löschen?","Aus Zwischenablage importieren","Archiv importiert","Archiv konnte nicht importiert werden","Spielort","Heim und auswärts",564,565,"Ergebnis","Alle Ergebnisse","Gegner","Monatsform","Spielvorbereitung",566,"Gut","Im Aufbau","Früh",567,559,152,"Übertragung",563,568,569,561,562,544,"Vollständigkeit","Konflikte","Datenabdeckung","Ausgezeichnet","Gut","Teilweise",570,571,"Anbieterfehler","Begrenzte Abdeckung","Der Anbieter hat einen Fehler gemeldet","Dieses Spiel wurde verschoben","Dieses Spiel wurde abgesagt","Die Quellen widersprechen sich bei diesem Spiel","Die Live-Aufstellung ist noch nicht verfügbar","Der Live-Ticker ist noch nicht verfügbar","Die Live-Daten sind möglicherweise veraltet","Für dieses Spiel scheint ein neuer Termin verfügbar zu sein","Keine Vereinsdaten","Vereinsdaten erscheinen bei API-Football-Teamsensoren",541,36,"Die Vereinsdaten werden etwa einmal täglich aktualisiert","{n} Quellenkonflikt(e)","Der manuelle Wert weicht vom Anbieterwert ab","Manuelle Überschreibungen aktiv","Alle anzeigen ({n})","Weniger anzeigen",159,"Zugänge","Abgänge","Torhüter",572,"Mittelfeld",573,"Gegründet {year}","{n} J.","Zugang","Abgang",531,"Vorschau",10,532,538,533,529,"Gegentore","Tordifferenz","Ausgegeben","Einnahmen",525,"Leihen","Ablösefreie Transfers","Sommer",39,"Kader anzeigen","Transfers anzeigen","Spieltag-Dashboard anzeigen","Saisonverlauf anzeigen","Kaderanalyse anzeigen","Verletzungscenter anzeigen","Verfügbarkeits-Radar anzeigen","Prognose anzeigen","Offiziellen Spieltagskader anzeigen","Team-News anzeigen","Datenqualität anzeigen","Automatisierungsbeispiele anzeigen","Vereinsrekorde anzeigen","Einklappbare Abschnitte verwenden","Kompakter Dashboard-Modus","Reihenfolge der Abschnitte","Max. Transfers",574,41,"Kommentar",42,531,"Neutraler Platz","Live im TV","ESPN-Statistiken öffnen","ESPN-Kommentar öffnen","ESPN-Video öffnen",165,"Halbfinale","Viertelfinale","Achtelfinale","Sechzehntelfinale","Runde der 64","Dritter Platz","K.o.-Playoffs","Vorrunde","HF","VF","AF","K.o.-Runde nicht verfügbar","Die K.o.-Phase beginnt bald","N.N.","Gleichstand gesamt",575,"K.o.-Baum",576,533,"Im Spielplan anzeigen",168,577,10,552,"Geplant","Endstand","FT","Halbzeit","1. Halbzeit","2. Halbzeit",567,"Ende","Verlängerung","Start Verlängerung","Halbzeit Verlängerung","2. Halbzeit Verl.","Ende Verlängerung","Elfmeterschießen","Start Elfmeter","Spielende","Tor","Tor aberkannt","Spiel geändert","Gelbe Karte",556,"Auswechslung","Letztes Ergebnis",48,553,"Kein aktuelles Spiel","Das zuletzt beendete Spiel erscheint hier.","Zeigt das zuletzt gespielte Spiel dieser Mannschaft.","VAR","Kopfball","Schuss",578,"Eigentor","Freistoß","Karten",159,"S","U","N",48,"Ballbesitz","Schüsse","Aufs Tor","xG",52,574,529,"Ecken",520,"Schussvorlagen","Gelbe Karten","Schüsse daneben","Erwartete Tore","xG aus dem Spiel","xG bei Standards","xG (ohne Elfmeter)","xG aufs Tor","Ballkontakte im gegnerischen Strafraum","Große Chancen","Große Chancen vergeben","Genaue Pässe","Rote Karten","Abseits","Paraden","Geblockte Schüsse","Pässe gesamt","Pässe angekommen","Zweikämpfe","Abfangen","Luftduelle gewonnen","Freistoßtore","Elfmetertore","Erfolgreiche Flanken","Klärungen","Erfolgreiche Dribblings","Gewonnene Duelle","Gewonnene Bodenduelle","Erfolgreiche lange Bälle","Pässe in gegnerischer Hälfte","Pässe in eigener Hälfte","Einwürfe",59,"Schüsse im Strafraum","Schüsse außerhalb des Strafraums","Aluminiumtreffer","Zuschauer",525,544,546,"Torschützenkönig",534,"Nächste Spiele","Vorherige Spiele",63,"Saisonform",568,569,"Pkt.",562,"Verletzt","Gesperrt","Favorit","+{n} weitere","Schätzung des Anbieters, keine Garantie","Vor dem Spiel",63,573,572,"Torlinien",575,"Buchmacher-Torlinien, kein xG","Gemittelte Marktquoten, können veraltet sein","Live-Quoten","Live-Quoten, während des Spiels aktualisiert",10,561,"Durchschnitt von {n} Buchmachern","Von {n} Buchmacher",524,"Geschossen","Kassiert",564,565,"Spiele · Tore",529,68,"Teams ausgeblendet","in",579,"Neue Saison beginnt bald",580,"Heute","Gestern",183,"jetzt","in {n} Min.","in {n} Std.","in {n} T.","vor {n} Min.","vor {n} Std.","vor {n} T.","Tag","Tage","Std","Min","Sek",185,"Aufstellungen nicht verfügbar","Aufstellungen noch nicht veröffentlicht","Sie erscheinen meist etwa eine Stunde vor dem Anpfiff.","Aufstellungen werden kurz vor Anstoß veröffentlicht",581,"Ereignisse erscheinen während des Spiels","Ereignis",578,"Keine Nachrichten verfügbar","{n} Artikel",74,187,188,"Abstieg",76,"Qualifiziert","Bester 3.",577,576,119,"Nicht gestartet","Reguläre Saison","Gruppenphase",78,"#",558,"Sp","S","U","N","+/-","Pkt",579,"{n} Spiele",580,553,"Entfernen",547,564,565,"Sonstige","Spieldetails",557,555,568,"Keine Ereignisse verfügbar",555,"Schusskarte","Spielernoten","Anpfiff in {value}","{n} Tag","{n} Tage","{n} Stunde","{n} Stunden","{n} Minute","{n} Minuten","und","Runde","Tabellenplatz",554,536,"Schätzung des Anbieters; die offizielle Aufstellung kann abweichen","Datenquelle","Teile verfügbar",532,"Spieler des Spiels",542,"Team-Durchschnitte","Für","Gegen","vor {n} Min. aktualisiert",534,530,"Kaderwert","Durchschnittsalter","{n} Spieler mit Marktwert","Marktwert","Alter","Nationalität","Vertrag bis",520,326,539,"J.","Jüngster","Ältester","Begrenzte Kadertiefe","Verletzungscenter",543,"Voraussichtliche Rückkehr",535,"Zweiten Spieler auswählen","Spieler vergleichen",527,"Von","Bis",198,"Transferart","Ablösesumme","Torwart","Verteidiger","Mittelfeldspieler","Stürmer","Von Tag zu Tag","Etwa eine Woche","Ein paar Tage","Anfang {date}","Mitte {date}","Ende {date}","Auf Leihbasis","Ablösefrei","Fest","Vertrag","Vereinslos","Verfügbarkeits-Radar",536,"Prognose basierend auf Verfügbarkeit und jüngstem Einsatz","Offizieller Spieltagskader","Startelf",542,540,"Aktualisierungszeit unbekannt","Gerade aktualisiert","vor {n} Min","Automatisierungsbeispiele","YAML kopieren","Aufstellung verfügbar",521,"Spieler wieder verfügbar",522,"Spiel begonnen","Tor erzielt","Rückennummer","Startelf-Einsätze",523,"Letzte fünf Spiele","Startspieler",542,"Datenqualität",523,"Offizieller Kader",536,540,"Automatisierungen",528,528,"Spieler suchen","Alle Positionen","Alle Verfügbarkeiten","Verfügbar","Keine Spieler gefunden",537,"Ungeschlagen","Siegesserie","Serie ohne Gegentor",524,526,"Punkte/Spiel heim","Punkte/Spiel auswärts","Seit der letzten Aktualisierung",522,521,"Spieler verfügbar","Trainer gewechselt","Spieler hinzugefügt","Spieler entfernt","Marktwert geändert","Vereinsprofil",531,"Kennzahlen",538,"Änderungen",528,537,539,530,535,541,36,"Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",529,533,"Keine Torschützen verfügbar","#","Wird geladen...","Soccer Live — öffne den Editor um diese Karte einzurichten.","Unbekannter Kartentyp: „{type}“",549,580,"Sensor nicht verfügbar","Ungültige Konfiguration","Entität erforderlich","Ladetimeout","Entität antwortet nicht","Prüfe ob die Integration aktiv ist","Kein Live-Spiel gerade","Kommentar erscheint hier während eines Live-Spiels",571,"Keine Spiele in diesem Zeitraum geplant",582,"ESPN stellt diese Daten nicht für alle Wettbewerbe bereit","Falscher Sensortyp","Diese Karte erwartet einen anderen Sensor","Entität nicht gefunden","Entitätskonfiguration prüfen","Keine Spieldaten","Kein Spiel für diese Entität verfügbar","Noch keine Statistiken",581,"Aufstellung noch nicht verfügbar","Keine Formdaten","Keine direkten Vergleiche verfügbar","Keine früheren Spiele für diesen Sensor gefunden","Prüfe ob die Soccer Live Integration aktiv ist","Home Assistant neu starten oder Integration prüfen","Keine Tabellendaten","Prüfe ob die Saison bereits begonnen hat","Keine Wettbewerbsdaten","Prüfe ob das Team Spiele geplant hat",582,"Offline — zwischengespeicherte Daten","Warten auf die Integration","Spiele werden geladen…","Die Integration lädt zum ersten Mal Daten","Vorübergehend gedrosselt","Der Anbieter drosselt die Anfragen; wird automatisch fortgesetzt","API-Schlüssel ungültig","Gib deinen API-Football-Schlüssel unter Einstellungen → Geräte & Dienste erneut ein","Datenanbieter nicht erreichbar","Datenanbieter nicht erreichbar; automatischer Wiederholungsversuch","Keine Entitäten konfiguriert","Mindestens eine Team-Entität hinzufügen","Meine Teams","Teamform","Diagnose","Saison {season} hat noch nicht begonnen","gegen","U","Übersicht",560,"Zeitlinie",544,"H2H","Windgeschwindigkeit (Beaufort)","Klar","Teilweise bewölkt","Bewölkt","Neblig","Nieselregen",208,"Schnee","Schauer","Gewitter","Unbekanntes Wetter",102,"Einstellungen","Anzeige","Spielinfos","Prognose & Quoten","Darstellung","Entität","Auswählen…","Kartentyp","Kartentyp auswählen","Schnellprofil","Ausgangspunkt wählen","Wendet sinnvolle Vorgaben an und behält Entität, Quellen und Darstellung.","Einfach",531,10,147,"Club-Dashboard","Kompakt mobil","Hauptkarten","Kompakte Widgets","Wettbewerbe und Inhalte","Erweitert","Bestehende Alt-Konfiguration","Kopfzeile ausblenden","TV-Sender ausblenden","Kompaktmodus","Geteilt","An","Aus","Saisonform anzeigen","Vorherige Spiele anzeigen","Wetter anzeigen","Prognosedetails anzeigen","Quoten anzeigen","Ausfälle anzeigen","Ereignis-Benachrichtigungen anzeigen","Mein Team (hervorheben)",519,"Keine Spiele anzuzeigen","Max. Spiele","Archivstatistiken anzeigen","Optionaler Ergänzungssensor","Ergänzt nur fehlende Felder passender Spiele; der primäre Spielplan bleibt maßgeblich.","Ergänzungssensor automatisch finden","Kombiniert passende Spiele eines anderen Anbieters, wenn dort reichhaltigere Daten vorliegen.","Externer Archivsensor","Tabellensensor",211,"Verhalten des Match Centers","Ansicht mit Tabs","Phasenabhängig","Tabellenansicht","Vollständige Tabelle","Wettbewerbsrennen","Saisonbericht anzeigen","Zusätzliche Datenquellen","Optionale, kommagetrennte Sensoren; jede Quelle ergänzt nur noch fehlende Felder.","Kombinierte Quellen","Ergänzte Felder",550,"Kommend","Vergangen",159,"Wettbewerb zeigen","Textgröße","Sehr klein",213,106,551,107,"Nichts anzuzeigen","Ansicht",519,534,546,63,"Diese Ansicht wird vom ausgewählten Sensor nicht unterstützt",79,"Sp","TD","Pkt","z.B. Bayern München",583,"Erscheinungsbild",108,"Standard","Automatisch (HA-Sprache)","geteilt","Hintergrund & Wasserzeichen","Beide Verlaufsfarben festlegen, damit der Verlauf greift","Verlaufswinkel","Wasserzeichengröße","Eine URL oder ein von Home Assistant bereitgestellter /local/…-Pfad","Verlauf von","Verlauf bis","Wasserzeichen-Bild-URL","Wasserzeichen-Deckkraft","über","Dunkel","Hell","Home-Assistant-Thema","Violett","Rot & Weiß","Rot & Gold","Blau & Rot","Weiß & Gold","Blau",109,"Schwarz & Weiß","Klassisch (grün)",110,111,"Teamfarben","Benutzerdefiniert","Akzent","Akzent 2","Hintergrund",114,"Farben zurücksetzen","Erweiterte Farben","Geringer Kontrast zwischen Text und Hintergrund",10,111,"Oberfläche","Karte","Sekundärtext","Trennlinie",116,"Sprache","Ergebnisgröße","Teamname",583,"Max Elemente","Rangliste","Bilder ausblenden","Max Artikel","Neueste zuerst","Intelligente Reihenfolge (Live, bevorstehend, Ergebnisse)","Wettbewerbsfilter","Saisonfilter","Spielstatus","Heim / Auswärts",548,552,"Spielvorschau","Spielnachbericht","Tabellenpositionen",562,"Spieler im Fokus",554,555,"Team des Spiels","Führungstreffer","Ausgleichstor","Entscheidendes Tor",556,"Wendepunkt","{home} – {away} endete {score}.","{home} – {away} steht aktuell {score}.","{team} drehte einen Rückstand.","{team} erzeugte die größte Gefahr ({value} xG).","{team} dominierte die Abschlüsse ({value} Schüsse).","Daten nach Bereich","Private Quelle",543,"Erwartung vs. Realität","Erwartet","Tatsächlich","Heimsieg","Unentschieden","Auswärtssieg","Spieler nicht verfügbar","übliche Startelf-Last fehlt","Tore und Vorlagen fehlen","Standardgruppe (optional)","Max Zeilen (0 = alle)","Team hervorheben (Teilname)","S/U/N/+/- Spalten ausblenden","Max Teams sichtbar",119,"Saisontotals anzeigen","Tore pro Team anzeigen","Top N Teams (0 = alle)","Letzte N Teams (0 = alle)","Live-Ticker anzeigen","Beendete Spiele anzeigen","Neueste Spiele zuerst","Max Ereignisse sichtbar","Max Ereignisse gesamt","Spiele älter als (Tage) ausblenden","Kartentitel","Standardwettbewerb (optional)","Stil","Baum: Playoffs einschließen","Kompakt (Runden gestapelt)","Gruppen-Sensor (Tabelle)","z.B. sensor.soccer_live_standings_fifa_world","Spiele-Sensor (Spielplan)","z.B. sensor.soccer_live_all_fifa_world","Max Statistiken (Standard 4)","Gruppieren nach",198,559,"Gruppe",159,"Liste (Standard)","Baum (Bracket mit zentraler Trophäe)","'Beendete Spiele anzeigen' muss aktiviert sein.","Verfügbar für Champions League, Europa League, Conference League, FIFA Weltmeisterschaft und andere Pokalwettbewerbe.","Füge einen soccer_live_next_* oder soccer_live_all_mixed_* Sensor pro Team hinzu","Verwende einen soccer_live_all_mixed_* Sensor (enthält alle Wettbewerbe für ein Team)","Leer lassen für erste Gruppe","z.B. Bundesliga","Sensortyp","Empfohlene Karten","Integrationsversion","Die Integration ist möglicherweise veraltet — aktualisiere Soccer Live für vollständige Daten und Kartenempfehlungen","Soccer Live Diagnose",102,"Einrichtungsstatus","Installationsprüfung","Anfrageplan","Koordinatorzyklen","Geplante Aktualisierungen","Konfiguration","Authentifizierung","Anbieterdaten",533,360,"Anfragekontingent",566,"Wartet","Achtung","Aktion erforderlich",106,570,"Kritisch","Aufgebraucht","Vereins-Quellenkonflikte",219,533,10,548,"Kürzlich","Anfragen","Adaptives Polling","Letzte Aktualisierung","Sensoralter","OK","Fehler",547,79,125,8,544,126,"Team-Form",533,126,"Live-Spiel","Team-Wettbewerbe","Saisonübersicht",546,"Mini-Tabelle",545,"Turnierbaum",3,"Live-Kommentar",549,550,"Alle Spiele","Nur Live","Wettbewerbsfilter (optional)","z. B. Weltmeisterschaft","Karte ausblenden, wenn leer","Auto-Scroll","Scroll-Geschwindigkeit","Langsam",106,"Schnell",106,551,"Riesig"],pt:[626,627,258,611,612,"Artilheiros","Clube",392,8,"Arquivo de jogos","Corrida na classificação","Sem dados da jornada","Escolha um sensor com jogos futuros ou terminados",594,430,617,585,"Ainda não há jogos arquivados","Os jogos terminados são guardados localmente após uma atualização","Histórico pessoal","vitórias","empates","derrotas",628,"Todas as épocas",629,"Todas as competições","Golos marcados–sofridos","Jogos sem sofrer","Maior série invicta","Maior série de vitórias",590,"Maior derrota","Adversários mais frequentes","Impacto na tabela ao vivo",462,463,"Evolução na classificação","Faltam {n} jogos","{n} jogo(s) em atraso","Projeção: {n} pts",464,"Campeão","{n} ponto(s) necessários para o título","Qualificação europeia garantida","Manutenção garantida","Jogo em resumo","Capacidades da fonte","Estado da época","Sincronização do arquivo",584,"Resultados","Alinhamentos",258,630,"Confrontos diretos","Previsões",23,631,"Meteorologia","Transmissões",595,"Análise avançada","Dados do clube","Disponível na fonte selecionada","Suportado, mas ainda não publicado","Não suportado por este fornecedor","Temporariamente indisponível devido a um erro do fornecedor","{n} confrontos históricos adicionados","Copiar exportação",469,591,"Arquivo copiado","Não foi possível copiar o arquivo","Reconstrução solicitada","Arquivo limpo","Limpar permanentemente este arquivo local?","Importar da área de transferência","Arquivo importado","Não foi possível importar o arquivo",470,"Casa e fora",290,632,472,"Todos os resultados","Adversário","Forma mensal","Preparação do jogo",292,"Bom","Em preparação",474,"Início",629,"Estádio","Transmissão","Tempo","Confrontos",633,23,631,"Onze inicial","Completude","Conflitos","Cobertura de dados",476,"Boa",477,478,"Sem jogos","Erro do fornecedor",479,"O fornecedor reportou um erro","Este jogo foi adiado","Este jogo foi cancelado","As fontes discordam sobre este jogo","A escalação ao vivo ainda não está disponível","A cronologia ao vivo ainda não está disponível","Os dados ao vivo podem estar desatualizados","Parece haver uma nova data para este jogo","Sem dados do clube","Os dados do clube aparecem nos sensores de equipa API-Football",607,608,"Os dados do clube atualizam cerca de uma vez por dia","{n} conflito(s) de fonte","O valor manual difere do valor do fornecedor","Substituições manuais ativas",408,409,388,490,"Saídas",601,634,"Médios","Atacantes",480,"{n} anos","Entrada","Saída",392,"Antevisão",594,595,604,"jogos","Golos marcados","Golos sofridos","Diferença de golos","Gasto","Receitas","Balanço","Empréstimos","Transferências gratuitas","Verão",250,"Mostrar plantel","Mostrar transferências","Mostrar painel da jornada","Mostrar progresso da época","Mostrar análise do plantel","Mostrar central de lesões","Mostrar radar de disponibilidade","Mostrar previsão","Mostrar convocados oficiais","Mostrar notícias da equipa","Mostrar qualidade dos dados","Mostrar exemplos de automação","Mostrar recordes do clube","Usar secções recolhíveis","Modo painel compacto","Ordem das secções","Máx transferências",635,630,"Comentário",482,392,296,"TV ao vivo","Abrir estatísticas ESPN","Abrir comentário ESPN",483,43,"Meias-finais","Quartas de final","Oitavas de final","Avos de final","Rodada dos 64","Terceiro lugar","Pré-eliminatórias","Fase preliminar",44,"Quartas","Oitavas","Chave não disponível","A fase eliminatória começa em breve","A def.","Empate no agregado","Agregado",626,484,585,"Ver no calendário","Ganhou",485,594,"Encerrado",486,"Tempo normal","FT","Intervalo","1º tempo","2º tempo","Pontapé inicial","Fim","Prorrogação","Início prorrogação","Intervalo prorrogação","2° tempo prorrog.","Fim prorrogação","Pênaltis","Início pênaltis","Fim da partida","Gol","Golo anulado","Jogo alterado","Cartão amarelo",625,"Substituição",438,619,618,"Nenhum jogo recente","O último jogo terminado aparecerá aqui.","Mostra o último jogo desta equipa.","VAR","Cabeçada","Chute",636,"Gol contra","Falta","Cartões",388,"V","E","D",619,"Posse","Chutes","No gol","xG",488,635,"Golos","Cantos","Presenças","Assist de remate","Cartões amarelos","Remates fora","Golos esperados","xG em jogo corrido","xG em bolas paradas","xG (sem penáltis)","xG à baliza","Toques na área adversária","Grandes oportunidades","Grandes oportunidades falhadas","Passes certos","Cartões vermelhos","Foras de jogo",634,"Remates bloqueados","Total de passes","Passes concluídos","Desarmes","Interceções","Duelos aéreos ganhos","Golos de falta","Golos de penálti","Cruzamentos certos","Cortes","Dribles bem-sucedidos","Duelos ganhos","Duelos no chão ganhos","Bolas longas certas","Passes no meio-campo adversário","Passes no próprio meio-campo","Lançamentos laterais","Bloqueios","Remates dentro da área","Remates fora da área","Bolas nos postes",491,162,"Formação",612,"Artilheiro",596,"Próximos jogos","Jogos anteriores",300,"Forma na temporada",637,633,"pts","Desfalques",494,"Suspenso",301,"+{n} mais","Estimativa do fornecedor, sem garantia","Pré-jogo",300,495,600,"Linhas de gols",65,"Linhas de gols da casa, não xG","Cotações médias de mercado, podem estar desatualizadas","Odds ao vivo","Odds ao vivo, atualizadas durante a partida",10,"Cotações","Média de {n} casas",496,589,622,621,290,632,"jogos disputados · gols","gols","Posição","times ocultos","em",638,"Nova temporada em breve",639,"Hoje","Ontem","Amanhã","agora","em {n} min","em {n} h","em {n} d",609,"há {n} h","há {n} d","dia","dias","hrs","min","seg","Banco","Escalações não disponíveis","Escalações ainda não publicadas","Costumam aparecer cerca de uma hora antes do apito inicial.","As escalações são publicadas pouco antes do início",640,"Os eventos aparecem durante o jogo",303,636,"Sem notícias disponíveis","{n} artigos",74,187,188,"Rebaixamento",76,"Classificado","Melhores 3°",485,498,"times","Não iniciado",499,500,"Eliminatórias","#","Time","J","V","E","D","+/-","Pts",638,"{n} jogos",639,618,"Remover",615,290,632,"Outro","Detalhes do jogo",627,258,637,"Sem eventos disponíveis","Momento do jogo","Mapa de remates","Notas dos jogadores","Início em {value}","{n} dia","{n} dias",443,444,271,445,"e",448,"Posição na tabela",620,602,"Estimativa do fornecedor; a escalação oficial pode diferir","Fonte de dados","partes disponíveis","Análise pós-jogo","Homem do jogo",414,"Médias da equipa",622,621,"atualizado há {n} min",596,593,"Valor do plantel","Idade média","{n} jogadores com valor de mercado",391,"Idade","Nacionalidade","Contrato até",585,401,605,"anos","Mais novo","Mais velho","Profundidade limitada","Central de lesões","Indisponível","Regresso previsto",598,"Selecione um segundo jogador","Comparar jogador",591,"De","Para",245,"Tipo de transferência","Valor da transferência",601,600,"Médio",599,"Dia a dia","Cerca de uma semana","Alguns dias","Início de {date}","Meados de {date}","Fim de {date}","Por empréstimo","Transferência gratuita",246,415,"Livre","Radar de disponibilidade",602,"Previsão baseada na disponibilidade e utilização recente",597,411,414,606,"Hora de atualização desconhecida","Acabado de atualizar",609,"Exemplos de automação",386,"Escalação disponível",586,"Jogador disponível novamente",587,"Jogo iniciado","Golo marcado","Número de camisola",412,588,"Últimos cinco jogos",410,413,"Qualidade dos dados",588,597,602,606,"Automações",592,"Jogador favorito","Procurar jogadores","Todas as posições","Toda a disponibilidade","Disponível","Nenhum jogador encontrado",603,418,"Série de vitórias","Sequência sem sofrer golos",589,590,"Pts/jogo casa","Pts/jogo fora","Desde a última atualização",587,586,"Jogador disponível","Treinador alterado","Jogador adicionado","Jogador removido","Valor de mercado alterado","Perfil do clube",392,"Números-chave",604,"Alterações",592,603,605,593,598,607,608,"Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez","Gols",585,"Nenhum artilheiro disponível","#","Carregando...","Soccer Live — abra o editor para configurar este cartão.","Tipo de cartão desconhecido: “{type}”",616,639,"Sensor indisponível","Configuração inválida","Entidade obrigatória","Tempo de carregamento esgotado","Entidade não responde","Verifique se a integração está ativa","Sem jogo ao vivo agora","O comentário aparece aqui durante um jogo ao vivo","Fora de temporada","Nenhum jogo agendado neste período",641,"ESPN não fornece esses dados para todas as competições","Tipo de sensor incorreto","Este cartão espera um sensor diferente","Entidade não encontrada","Verifique a configuração da entidade","Sem dados de jogo","Nenhum jogo disponível para esta entidade","Ainda sem estatísticas",640,"Escalação ainda não disponível","Sem dados de forma","Sem dados de confronto disponíveis","Nenhum jogo anterior encontrado","Verifique se a integração Soccer Live está ativa","Reinicie o Home Assistant ou verifique a integração","Sem dados de classificação","Verifique se a competição já começou","Sem dados de competição","Verifique se a equipa tem jogos agendados",641,"Offline — dados em cache","À espera da integração","A carregar jogos…","A integração está a carregar os dados pela primeira vez","Temporariamente limitado","O fornecedor está a limitar os pedidos; retoma automaticamente","Chave de API inválida","Reintroduza a sua chave API-Football em Definições → Dispositivos e serviços","Fornecedor de dados indisponível","Não foi possível contactar o fornecedor; a tentar novamente","Nenhuma entidade configurada","Adicione pelo menos uma entidade de equipa","Meus Times",614,502,"A temporada {season} ainda não começou","contra","E","Resumo",630,258,610,"H2H","Velocidade do vento (Beaufort)","Céu limpo",503,504,"Nevoeiro","Chuvisco","Chuva",306,"Aguaceiros","Trovoada","Tempo desconhecido",102,"Definições","Apresentação","Info do jogo","Prognóstico e odds",623,"Entidade","Selecionar…","Tipo de cartão","Escolher um tipo de cartão",509,"Escolher um ponto de partida","Aplica predefinições úteis mantendo a entidade, fontes e aparência.","Simples","Dia de jogo",594,595,"Painel do clube","Móvel compacto","Cartões principais",510,"Competições e conteúdo",599,"Configuração antiga existente","Ocultar cabeçalho","Ocultar canais de TV",511,"Partilhado","Ligado","Desligado","Mostrar tendência de forma","Mostrar jogos anteriores","Mostrar tempo","Mostrar detalhes da previsão","Mostrar odds","Mostrar desfalques","Mostrar notificações de eventos","A minha equipa (destaque)",584,"Nenhum jogo para mostrar","Máx. jogos","Mostrar estatísticas do arquivo","Sensor complementar opcional","Preenche apenas campos em falta de jogos correspondentes; o calendário principal continua prioritário.","Encontrar automaticamente um sensor complementar","Combina jogos correspondentes de outro fornecedor quando este oferece dados mais completos.","Sensor de arquivo externo","Sensor de classificação",506,"Comportamento do Match Center","Vista com separadores","Adaptada à fase","Vista da classificação","Classificação completa","Corrida da classificação","Mostrar relatório da época","Fontes de dados adicionais","Sensores opcionais separados por vírgulas; cada fonte preenche apenas campos em falta.","Fontes combinadas","Campos complementados",432,430,508,388,"Mostrar competição","Tamanho do texto","Muito pequeno","Pequeno",106,264,107,"Nada a mostrar",307,584,596,612,300,505,613,"J","DG","Pts","ex. Benfica",309,623,453,"Predefinido",435,"partilhado","Fundo e marca d'água","Defina as duas cores do gradiente para o aplicar","Ângulo do gradiente","Tamanho da marca d'água","Um URL ou caminho /local/… servido pelo Home Assistant","Gradiente de","Gradiente até","URL da imagem da marca d'água","Opacidade da marca d'água","via","Escuro",450,276,"Roxo","Vermelho e branco","Vermelho e ouro","Azul e vermelho","Branco e ouro",454,"Laranja","Preto e branco","Clássico (verde)",354,624,"Cores da equipa",455,"Destaque","Destaque 2","Fundo",452,"Repor cores","Cores avançadas","Contraste baixo entre texto e fundo",594,624,"Superfície","Cartão","Texto secundário",451,116,512,"Tamanho do marcador","Nome da equipa",309,"Máx itens",612,"Ocultar imagens","Máx artigos","Mais recentes primeiro","Ordem inteligente (ao vivo, próximos, resultados)","Filtro de competição","Filtro de época","Estado do jogo","Casa / fora",430,617,"Antevisão do jogo","Análise do jogo","Posições na classificação",631,"Jogador a observar",620,"História do jogo","Equipa do jogo","Golo inaugural","Golo do empate","Golo decisivo",625,308,"{home} – {away} terminou {score}.","{home} – {away} está atualmente {score}.","{team} recuperou de uma desvantagem.","{team} criou mais perigo ({value} xG).","{team} dominou as tentativas ({value} remates).","Dados por secção","Fonte privada","Não disponível","Expectativa vs realidade",440,439,"Vitória em casa",442,"Vitória fora","jogadores indisponíveis","carga habitual de titular ausente","golos e assistências ausentes","Grupo predefinido (opcional)","Máx linhas (0 = todas)","Destaque equipa (nome parcial)","Ocultar colunas V/E/D/+/-","Máx equipas visíveis","Equipas","Mostrar totais da época","Mostrar golos por equipa","Top N equipas (0 = todas)","Últimas N equipas (0 = todas)","Mostrar ticker ao vivo","Mostrar jogos terminados","Jogos mais recentes primeiro","Máx eventos visíveis",517,"Ocultar jogos com mais de (dias)","Título do cartão","Competição predefinida (opcional)",518,"Árvore: incluir Playoffs","Compacto (rondas empilhadas)","Entidade grupos (classificação)",377,"Entidade jogos (calendário)",378,"Máx estatísticas (padrão 4)",513,245,629,514,388,"Lista (padrão)","Árvore (bracket com troféu central)","Só funciona se 'Mostrar jogos terminados' estiver ativado.","Disponível para Champions League, Europa League, Conference League, Copa do Mundo FIFA e outras copas.","Adicione um sensor soccer_live_next_* ou soccer_live_all_mixed_* por equipa","Use um sensor soccer_live_all_mixed_* (contém todas as competições de uma equipa)","Deixar vazio para o primeiro grupo","ex. Primeira Liga",515,"Cartões recomendados","Versão da integração","A integração pode estar desatualizada — atualize o Soccer Live para dados completos e recomendações de cartões",516,102,"Estado da configuração","Verificação da instalação","Plano de pedidos","Ciclos do coordenador","Atualizações agendadas","Configuração","Autenticação","Dados do fornecedor",585,628,"Quota de pedidos",292,"Em espera","Atenção","Ação necessária",106,478,507,"Esgotada","Conflitos de fontes do clube",428,585,594,430,"Recentes","Pedidos","Sondagem adaptativa","Última atualização","Idade do sensor","OK","Erro",615,613,"Contagem decrescente",8,610,258,614,585,126,"Jogo ao vivo","Competições da equipa","Resumo da época",612,"Mini classificação",465,"Quadro",611,"Comentário ao vivo",616,432,"Todos os jogos","Apenas ao vivo","Filtro de competição (opcional)","ex. Campeonato do Mundo","Ocultar cartão quando vazio","Deslocamento automático","Velocidade de deslocamento",267,106,433,106,264,265]},o=["en","it","fr","es","nl","de","pt"];function n(e,t){const a=[];t&&"string"==typeof t.language&&a.push(t.language);const i=t&&(t.entity||t.entities&&t.entities[0]),s=i&&e&&e.states&&e.states[i]&&e.states[i].attributes&&e.states[i].attributes.card_defaults;s&&"string"==typeof s.language&&a.push(s.language),e&&e.locale&&e.locale.language&&a.push(e.locale.language),e&&e.language&&a.push(e.language);for(const e of a){if(!e)continue;const t=String(e).toLowerCase().split("-")[0];if(o.includes(t))return t}return"en"}function l(e,t,a){const o=i[e];if(void 0===o)return e;let n=(r[t]||r.en)[o];if(null==n&&(n=r.en[o]),null==n)return e;let l="number"==typeof n?s[n]:n;return a&&Object.keys(a).forEach(e=>{l=l.replace(new RegExp("\\{"+e+"\\}","g"),a[e])}),l}const c={nl:"nl-NL",de:"de-DE",fr:"fr-FR",it:"it-IT",es:"es-ES",pt:"pt-PT",en:"en-GB"};function d(e){if(!e||"N/A"===e)return null;const t=String(e).match(/^(\d{2})[-/](\d{2})[-/](\d{4})(?:\s+(\d{2}):(\d{2}))?/);if(t){const e=new Date(+t[3],+t[2]-1,+t[1],+(t[4]||0),+(t[5]||0));return Number.isFinite(e.getTime())?e:null}const a=new Date(e);return Number.isFinite(a.getTime())?a:null}function p(e){const t=d(e);return t?t.getTime():0}function h(e,t){if(!e)return"";const a=e.match(/^(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2})$/);if(!a)return e;const[,i,s,r,o,n]=a,l=d(e);if(!l)return e;const p=new Date,h=`${o}:${n}`;if(l.getDate()===p.getDate()&&l.getMonth()===p.getMonth()&&l.getFullYear()===p.getFullYear())return h;const u=c[t]||"en-GB";try{return`${new Intl.DateTimeFormat(u,{day:"numeric",month:"numeric"}).format(l)} ${h}`}catch(e){return`${+i}/${+s} ${h}`}}function u(e,t){if(!e)return"";const a=d(e);if(!a)return e.split(" ")[0]||e;const i=c[t]||"en-GB";try{return new Intl.DateTimeFormat(i,{day:"numeric",month:"short"}).format(a)}catch(t){const a=e.match(/^(\d{2})-(\d{2})-(\d{4})/);return a?`${+a[1]}/${+a[2]}`:e}}function g(e,t){if(!e)return"";const a=e.match(/^(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2})$/);if(!a)return e;const[,i,s,r,o,n]=a,l=d(e);if(!l)return e;const p=c[t]||"en-GB";try{return`${new Intl.DateTimeFormat(p,{day:"2-digit",month:"2-digit",year:"numeric"}).format(l)} ${o}:${n}`}catch(t){return e}}},615(e,t,a){a.r(t);var i=a(957),s=a(7),r=a(186),o=a(738);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},standingsEntities:{type:Array},matchesEntities:{type:Array}}}constructor(){super(),this.entities=[],this.standingsEntities=[],this.matchesEntities=[]}static get styles(){return s.yj}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;if(this._config[a]!==i)if(""===i){const e={...this._config};delete e[a],this._fireConfigChanged(e)}else this._fireConfigChanged({...this._config,[a]:i})}_textChanged(e){if(!this._config)return;const t=e.target,a=t.dataset.configValue,i=t.value;if(this._config[a]!==i)if(""===i){const e={...this._config};delete e[a],this._fireConfigChanged(e)}else this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_bracket")||e.includes("soccer_live_bracket")).sort(),this.standingsEntities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_standings")||e.includes("soccer_live_standings")).sort(),this.matchesEntities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_all")||e.includes("soccer_live_all")).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
            .checked=${1==this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        ${"tree"!==this._config.style?i.qy`
          <div class="option">
            <label>${this._t("editor.bracket_compact")}</label>
            <ha-switch
              .checked=${1==this._config.compact}
              data-config-value="compact"
              @change=${this._switchChanged}
            ></ha-switch>
          </div>
        `:""}
        ${"tree"===this._config.style?i.qy`
          <div class="option">
            <label>${this._t("editor.tree_playoffs")}</label>
            <ha-switch
              .checked=${1==this._config.tree_show_playoffs}
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
          ${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-bracket-editor")||customElements.define("soccer-live-bracket-editor",n)},259(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(186),o=a(195),n=a(7);class l extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[n.yj,i.AH`.section-order{display:grid;gap:4px}.section-order div{display:flex;align-items:center;gap:5px;padding:5px 8px;border:1px solid var(--divider-color);border-radius:7px}.section-order span{flex:1;font-size:12px}.section-order button{width:28px;height:26px;border:1px solid var(--divider-color);border-radius:5px;background:var(--secondary-background-color);color:var(--primary-text-color);cursor:pointer}h3{margin:0;font-size:15px;}`]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("soccerlive_club")||e.includes("soccer_live_club")||e.includes("soccerlive_all_manual")||e.includes("soccerlive_all_mixed")||e.includes("soccer_live_all_manual")||e.includes("soccer_live_all_mixed")||["club","team_match","team_matches_mixed"].includes(this.hass.states[e]?.attributes?.sensor_type)).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_entityChanged(e){const t=e.target.value;t!==this._config.entity&&this._fire({...this._config,entity:t})}_selectChanged(e){const{configValue:t}=e.target.dataset;t&&this._config[t]!==e.target.value&&this._fire({...this._config,[t]:e.target.value})}_numberChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=parseInt(e.target.value,10);isNaN(a)||this._config[t]===a||this._fire({...this._config,[t]:a})}_switchChanged(e){const{configValue:t}=e.target.dataset;t&&this._config[t]!==e.target.checked&&this._fire({...this._config,[t]:e.target.checked})}_moveSection(e,t){const a=(0,o.tC)(this._config.section_order),i=a.indexOf(e),s=i+t;i<0||s<0||s>=a.length||([a[i],a[s]]=[a[s],a[i]],this._fire({...this._config,section_order:a}))}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
          <ha-switch .checked=${0!=this._config.show_matchday} data-config-value="show_matchday" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_season_progress")}</label>
          <ha-switch .checked=${0!=this._config.show_season_progress} data-config-value="show_season_progress" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_squad")}</label>
          <ha-switch .checked=${0!=this._config.show_squad} data-config-value="show_squad" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_squad_analysis")}</label>
          <ha-switch .checked=${0!=this._config.show_squad_analysis} data-config-value="show_squad_analysis" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_injury_center")}</label>
          <ha-switch .checked=${0!=this._config.show_injuries} data-config-value="show_injuries" @change=${this._switchChanged}></ha-switch>
        </div>
        ${[["show_availability","editor.show_availability",1],["show_prediction","editor.show_prediction",1],["show_selection","editor.show_selection",1],["show_team_news","editor.show_team_news",1],["show_data_quality","editor.show_data_quality",1],["show_automations","editor.show_automations",0]].map(([e,t,a])=>i.qy`<div class="option">
          <label>${this._t(t)}</label>
          <ha-switch .checked=${a?0!=this._config[e]:1==this._config[e]} data-config-value=${e} @change=${this._switchChanged}></ha-switch>
        </div>`)}
        <div class="option">
          <label>${this._t("editor.show_club_records")}</label>
          <ha-switch .checked=${0!=this._config.show_club_records} data-config-value="show_club_records" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.collapse_club_sections")}</label>
          <ha-switch .checked=${0!=this._config.collapse_sections} data-config-value="collapse_sections" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.club_dashboard_mode")}</label>
          <ha-switch .checked=${1==this._config.dashboard_mode} data-config-value="dashboard_mode" @change=${this._switchChanged}></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.club_section_order")}</label>
          <div class="section-order">${(0,o.tC)(this._config.section_order).map((e,t,a)=>{const s=this._t(`club.section_${e}`);return i.qy`<div><span>${s}</span><button aria-label="${s}: ↑" title="${s}: ↑" ?disabled=${0===t} @click=${()=>this._moveSection(e,-1)}>↑</button><button aria-label="${s}: ↓" title="${s}: ↓" ?disabled=${t===a.length-1} @click=${()=>this._moveSection(e,1)}>↓</button></div>`})}</div>
        </div>
        <div class="option">
          <label>${this._t("editor.show_transfers")}</label>
          <ha-switch .checked=${0!=this._config.show_transfers} data-config-value="show_transfers" @change=${this._switchChanged}></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.max_transfers")}</label>
          <input type="number" min="1" max="25" .value=${this._config.max_transfers??8} data-config-value="max_transfers" @change=${this._numberChanged}>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${1==this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>

        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-club-editor")||customElements.define("soccer-live-club-editor",l)},135(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(186),o=a(7);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return o.yj}setConfig(e){this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=(0,o.J)(this.hass,{sensorTypes:["team_match"],includes:["soccerlive_next","soccer_live_next"]}))}_entityChanged(e){(0,o.vD)(this,"entity",e.target.value)}_selectChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_switchChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.checked)}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
          <ha-switch .checked=${1==this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_broadcasts")}</label>
          <ha-switch .checked=${1==this._config.hide_broadcasts} data-config-value="hide_broadcasts" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.compact")}</label>
          <ha-switch .checked=${1==this._config.compact} data-config-value="compact" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,o.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-countdown-editor")||customElements.define("soccer-live-countdown-editor",n)},759(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(7),o=a(186);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[r.yj,i.AH`.hint{padding:10px 12px;border:1px solid rgba(33,150,243,0.24);border-radius:8px;background:rgba(33,150,243,0.10);color:var(--primary-text-color);font-size:12px;line-height:1.45;}`]}setConfig(e){this._config={...e}}_t(e){return(0,o.t)(e,(0,o.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccer_live")||e.includes("soccerlive")).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_recommendedCards(e,t){if(Array.isArray(t)&&t.length){const e={team:"Team",countdown:"Countdown","match-center":"Match Center",lineup:"Lineup",timeline:"Timeline","team-form":"Team Form",matches:"Matches",ticker:"Ticker","team-competitions":"Team Competitions",standings:"Standings","mini-standings":"Mini Standings",scorers:"Top Scorers",bracket:"Bracket",news:"News"};return t.map(t=>e[t]||t).join(", ")}return{team_match:"Team, Countdown, Match Center, Lineup, Timeline, Team Form",team_matches:"Matches, Ticker, Live Match, Team Form",team_matches_mixed:"Team Competitions, Season Overview, Matches, Ticker, Team Form",all_matches_today:"Matches, Ticker, Live Match",standings:"Standings, Mini Standings",top_scorers:"Top Scorers",bracket:"Bracket",news:"News"}[e]||""}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e),a=this.hass.states[e]?.attributes||{},r=a.sensor_type||"",o=this._recommendedCards(r,a.recommended_card_types),n=a.integration_version;return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
        </div>
        ${r?i.qy`
          <div class="hint">
            <strong>${this._t("editor.diag_sensor_type")}:</strong> ${r}
            ${o?i.qy`<br><strong>${this._t("editor.diag_recommended_cards")}:</strong> ${o}`:""}
            ${n?i.qy`<br><strong>${this._t("editor.diag_integration_version")}:</strong> ${n}`:i.qy`<br><em>${this._t("editor.diag_integration_outdated")}</em>`}
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
    `}}customElements.get("soccer-live-diagnostics-editor")||customElements.define("soccer-live-diagnostics-editor",n)},317(e,t,a){a.r(t);var i=a(957),s=a(186),r=a(7),o=a(738);class n extends i.WF{static properties={hass:{},_config:{},entities:{type:Array}};constructor(){super(),this.entities=[]}setConfig(e){this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccer_live")||e.includes("soccerlive")).sort())}_set(e,t){const a={...this._config,[e]:t};this._config=a,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:a},bubbles:1,composed:1}))}render(){if(!this._config||!this.hass)return i.qy``;const e="archive"===this._config.card_type,t=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.")).sort();return i.qy`<div class="card-config">
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
          .checked=${0!=this._config.show_archive_stats}
          @change=${e=>this._set("show_archive_stats",e.target.checked)}
        ></ha-switch></label>
        <label class="switch"><span>${this._t("editor.show_season_report")}</span><ha-switch
          .checked=${0!=this._config.show_season_report}
          @change=${e=>this._set("show_season_report",e.target.checked)}
        ></ha-switch></label>
      `:""}
      <h3>${this._t("editor.appearance")}</h3>
      ${(0,o.m)(this,this._config,e=>this._t(e))}
    </div>`}static styles=[r.yj,i.AH`.card-config{display:flex;flex-direction:column;gap:14px}label{display:grid;gap:5px;font-size:12px}select,input{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color)}label.switch{display:flex;align-items:center;justify-content:space-between}`]}customElements.get("soccer-live-insights-editor")||customElements.define("soccer-live-insights-editor",n)},374(e,t,a){a.r(t);var i=a(957),s=a(186),r=a(7),o=a(738);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return r.yj}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_entityChanged(e){(0,r.vD)(this,"entity",e.target.value)}_fetchEntities(){this.hass&&(this.entities=(0,r.J)(this.hass,{sensorTypes:["team_match","team_matches","team_matches_mixed"],includes:["soccerlive_next","soccer_live_next","soccerlive_all","soccer_live_all"]}))}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">Entity (team_match sensor — soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":i.qy`<option value="${e}" selected>${e||this._t("editor.select")}</option>`}
            ${this.entities.map(t=>i.qy`<option value="${t}" ?selected=${t===e}>${t}</option>`)}
          </select>
          <div class="hint" style="margin-top: 4px;">${this._t("last_match.editor_hint")}</div>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-last-match-editor")||customElements.define("soccer-live-last-match-editor",n)},389(e,t,a){a.r(t);var i=a(957),s=a(186),r=a(7),o=a(738);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return r.yj}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_entityChanged(e){(0,r.vD)(this,"entity",e.target.value)}_switchChanged(e){(0,r.vD)(this,e.target.dataset.configValue,e.target.checked)}_selectChanged(e){(0,r.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_fetchEntities(){this.hass&&(this.entities=(0,r.J)(this.hass,{sensorTypes:["team_match"],includes:["soccerlive_next","soccer_live_next"]}))}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
            .checked=${1==this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-lineup-editor")||customElements.define("soccer-live-lineup-editor",n)},384(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(186),o=a(7);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object}}}static get styles(){return o.yj}setConfig(e){this._config=e}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}_entityChanged(e){(0,o.vD)(this,"entity",e.target.value)}_selectChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_toggleChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.checked)}_modeChanged(e){const t={...this._config};"phase"===e.target.value?t.phase_aware=1:delete t.phase_aware,"hub"===t.card_type&&(t.card_type="match-center"),(0,o.an)(this,t)}render(){if(!this._config||!this.hass)return i.qy``;const e=(0,o.J)(this.hass,{sensorTypes:["team_match","team_matches_mixed"],includes:["soccer_live_next","soccerlive_next","soccer_live_all_mixed","soccerlive_all_mixed"]}),t=this._config.entity||"",a=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.")).sort();return i.qy`
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
        <div>
          <label class="field-label">${this._t("editor.match_center_mode")}</label>
          <select @change=${this._modeChanged}>
            <option value="tabs" ?selected=${"hub"!==this._config.card_type&&1!=this._config.phase_aware}>${this._t("editor.match_center_tabs")}</option>
            <option value="phase" ?selected=${"hub"===this._config.card_type||1==this._config.phase_aware}>${this._t("editor.match_center_phase")}</option>
          </select>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${1==this._config.hide_header} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
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
          <ha-switch .checked=${1==this._config.hide_broadcasts} data-config-value="hide_broadcasts" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.section_prediction")}</h3>
        <div class="option">
          <label>${this._t("editor.show_prediction")}</label>
          <ha-switch .checked=${0!=this._config.show_prediction} data-config-value="show_prediction" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_prediction_details")}</label>
          <ha-switch .checked=${0!=this._config.show_prediction_details} data-config-value="show_prediction_details" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_odds")}</label>
          <ha-switch .checked=${0!=this._config.show_odds} data-config-value="show_odds" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_injuries")}</label>
          <ha-switch .checked=${0!=this._config.show_injuries} data-config-value="show_injuries" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,o.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-match-center-editor")||customElements.define("soccer-live-match-center-editor",n)},294(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(186),o=a(7);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return o.yj}setConfig(e){this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=(0,o.J)(this.hass,{includes:["soccerlive_standings","soccer_live_standings"]}))}_entityChanged(e){(0,o.vD)(this,"entity",e.target.value)}_selectChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_numberChanged(e){const t=parseInt(e.target.value,10);isNaN(t)||(0,o.vD)(this,e.target.dataset.configValue,t)}_switchChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.checked)}_textChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
          <ha-switch .checked=${1==this._config.hide_stats} data-config-value="hide_stats" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${1==this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,o.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-mini-standings-editor")||customElements.define("soccer-live-mini-standings-editor",n)},488(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(186),o=a(7);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},_allEntities:{type:Array}}}constructor(){super(),this._allEntities=[]}static get styles(){return[o.yj,i.AH`.entity-list{display:flex;flex-direction:column;gap:8px;}.entity-row{display:flex;gap:8px;align-items:center;}.entity-row select{flex:1;}.remove-btn{background:none;border:1px solid var(--error-color,#e53935);color:var(--error-color,#e53935);border-radius:6px;padding:6px 10px;cursor:pointer;font-size:13px;}.add-btn{background:var(--primary-color,#03a9f4);color:#fff;border:none;border-radius:8px;padding:10px 16px;cursor:pointer;font-size:13px;font-weight:600;width:100%;}.hint{font-size:11px;color:var(--secondary-text-color);}`]}setConfig(e){this._config={...e,entities:[...e.entities||[]]}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this._allEntities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("all_mixed")||["team_match","team_matches_mixed"].includes(this.hass.states[e]?.attributes?.sensor_type)).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_entityChanged(e,t){const a=[...this._config.entities||[]];a[t]=e.target.value,this._fire({...this._config,entities:a})}_removeEntity(e){const t=[...this._config.entities||[]];t.splice(e,1),this._fire({...this._config,entities:t})}_addEntity(){const e=[...this._config.entities||[],""];this._fire({...this._config,entities:e})}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entities||[];return i.qy`
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
          <ha-switch .checked=${1==this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,o.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-multi-team-editor")||customElements.define("soccer-live-multi-team-editor",n)},593(e,t,a){a.r(t);var i=a(957),s=a(7),r=a(186),o=a(738);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return s.yj}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_entityChanged(e){(0,s.vD)(this,"entity",e.target.value)}_switchChanged(e){(0,s.vD)(this,e.target.dataset.configValue,e.target.checked)}_selectChanged(e){(0,s.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_numberChanged(e){const t=parseInt(e.target.value,10);isNaN(t)||(0,s.vD)(this,e.target.dataset.configValue,t)}_fetchEntities(){this.hass&&(this.entities=(0,s.J)(this.hass,{includes:["soccerlive_news","soccer_live_news"]}))}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
            .checked=${1==this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_images")}</label>
          <ha-switch
            .checked=${1==this._config.hide_images}
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
          ${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-news-editor")||customElements.define("soccer-live-news-editor",n)},713(e,t,a){a.r(t);var i=a(957),s=a(186),r=a(7),o=a(738),n=a(136);class l extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object}}}static get styles(){return[r.yj,i.AH`.card-config{gap:14px;}`]}setConfig(e){this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_set(e,t){this._fireConfigChanged({...this._config,[e]:t})}_selectChanged(e){this._set(e.target.dataset.configValue,e.target.value)}_numberChanged(e){this._set(e.target.dataset.configValue,Number(e.target.value))}_toggleChanged(e){this._set(e.target.dataset.configValue,e.target.checked)}_entities(){return this.hass?Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_")||e.includes("soccer_live_")).sort():[]}render(){if(!this._config||!this.hass)return i.qy``;const e=this._entities(),t=this._config.entity||"",a=this._config.show||"upcoming",s=this._config.variant||"fixtures",l=this.hass?.states?.[t]?.attributes?.sensor_type,c=(0,n.SW)(l),d=c.includes(s)?c:[s,...c];return i.qy`
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
          <ha-switch .checked=${0!=this._config.show_competition} data-config-value="show_competition" @change=${this._toggleChanged}></ha-switch>
        </div>`:""}
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${1==this._config.hide_header} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}</div>
        <div>${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}</div>
      </div>
    `}}customElements.get("soccer-live-schedule-editor")||customElements.define("soccer-live-schedule-editor",l)},379(e,t,a){a.r(t);var i=a(957),s=a(7),r=a(738),o=a(186);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return s.yj}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,o.t)(e,(0,o.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=(0,s.J)(this.hass,{includes:["soccerlive_scorers","soccer_live_scorers"]}))}_entityChanged(e){(0,s.vD)(this,"entity",e.target.value)}_selectChanged(e){const{configValue:t}=e.target.dataset;t&&(0,s.vD)(this,t,e.target.value,{removeEmpty:1})}_numberChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=parseInt(e.target.value,10);isNaN(a)||(0,s.vD)(this,t,a)}_switchChanged(e){const{configValue:t}=e.target.dataset;t&&(0,s.vD)(this,t,e.target.checked)}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
            .checked=${1==this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}>
          </ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,r.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>

        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-scorers-editor")||customElements.define("soccer-live-scorers-editor",n)},643(e,t,a){a.r(t);var i=a(957),s=a(186),r=a(7),o=a(738);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},groups:{type:Array}}}constructor(){super(),this.entities=[],this.groups=[]}static get styles(){return r.yj}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities(),(e.has("_config")||e.has("hass"))&&this._config&&this._config.entity&&this._fetchGroups()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_groupChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.selected_group&&this._fireConfigChanged({...this._config,selected_group:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=parseInt(t.value,10);isNaN(i)||this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_viewChanged(e){const t={...this._config};"race"===e.target.value?t.standings_view="race":delete t.standings_view,"race"===t.card_type&&(t.card_type="standings"),this._fireConfigChanged(t)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_standings")||e.includes("soccer_live_standings")).sort())}_fetchGroups(){const e=this._config&&this._config.entity;if(!this.hass||!e)return void(this.groups=[]);const t=this.hass.states[e];t&&t.attributes&&t.attributes.standings_groups?this.groups=t.attributes.standings_groups.map(e=>e.name):this.groups=[]}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
          <label class="field-label">${this._t("editor.standings_mode")}</label>
          <select @change=${this._viewChanged}>
            <option value="table" ?selected=${"race"!==this._config.card_type&&"race"!==this._config.standings_view}>${this._t("editor.standings_table")}</option>
            <option value="race" ?selected=${"race"===this._config.card_type||"race"===this._config.standings_view}>${this._t("editor.standings_race")}</option>
          </select>
        </div>
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
            .checked=${1==this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.show_event_toasts")}</label>
          <ha-switch
            .checked=${1==this._config.show_event_toasts}
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
          <ha-switch .checked=${0!=this._config.show_stats}
            data-config-value="show_stats" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_goals_per_team")}</label>
          <ha-switch .checked=${1==this._config.show_goals_for}
            data-config-value="show_goals_for" @change=${this._switchChanged}></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.compact")}</label>
          <ha-switch .checked=${1==this._config.compact_mode}
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
          ${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-standings-editor")||customElements.define("soccer-live-standings-editor",n)},197(e,t,a){a.r(t);var i=a(957),s=a(7),r=a(186),o=a(738),n=a(257);class l extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[s.yj,i.AH`.tri{display:inline-flex;border:1px solid var(--divider-color,rgba(127,127,127,0.3));border-radius:8px;overflow:hidden;flex-shrink:0;}.tri button{border:0;border-right:1px solid var(--divider-color,rgba(127,127,127,0.3));padding:6px 10px;font-size:12px;cursor:pointer;background:transparent;color:var(--primary-text-color);}.tri button:last-child{border-right:0;}.tri button.sel{background:var(--primary-color,#3b82f6);color:#fff;}`]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_triKeydown(e){const t=[...e.currentTarget.querySelectorAll("button")],a=t.indexOf(e.target),i=(0,n.lS)(a,t.length,e.key);i!==a&&(e.preventDefault(),t[i].focus(),t[i].click())}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("soccerlive_all_mixed")||e.includes("soccer_live_all_mixed")||["team_match","team_matches_mixed"].includes(this.hass.states[e]?.attributes?.sensor_type)).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e),a=(this.hass?.states?.[e]?.attributes?.card_defaults||{}).compact,r=this._config.compact;return i.qy`
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
          <ha-switch .checked=${1==this._config.show_form_trend}
            data-config-value="show_form_trend" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_previous_matches")}</label>
          <ha-switch .checked=${1==this._config.show_previous_matches}
            data-config-value="show_previous_matches" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_weather")}</label>
          <ha-switch .checked=${0!=this._config.show_weather}
            data-config-value="show_weather" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.section_prediction")}</h3>
        <div class="option">
          <label>${this._t("editor.show_prediction")}</label>
          <ha-switch .checked=${0!=this._config.show_prediction}
            data-config-value="show_prediction" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_prediction_details")}</label>
          <ha-switch .checked=${0!=this._config.show_prediction_details}
            data-config-value="show_prediction_details" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_odds")}</label>
          <ha-switch .checked=${0!=this._config.show_odds}
            data-config-value="show_odds" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.show_injuries")}</label>
          <ha-switch .checked=${0!=this._config.show_injuries}
            data-config-value="show_injuries" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t("editor.section_display")}</h3>
        <div class="option">
          <label>${this._t("editor.show_event_toasts")}</label>
          <ha-switch
            .checked=${1==this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.hide_broadcasts")}</label>
          <ha-switch .checked=${1==this._config.hide_broadcasts} data-config-value="hide_broadcasts" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.compact")}</label>
          <div class="tri" role="radiogroup" aria-label=${this._t("editor.compact")} @keydown=${this._triKeydown}>
            <button type="button" role="radio" class=${void 0===r?"sel":""} aria-checked=${void 0===r} tabindex=${void 0===r?"0":"-1"}
              @click=${()=>{const e={...this._config};delete e.compact,this._fireConfigChanged(e)}}>
              ${this._t("editor.inherit")}${void 0!==a?` (${a?this._t("editor.on"):this._t("editor.off")})`:""}
            </button>
            <button type="button" role="radio" class=${1==r?"sel":""} aria-checked=${1==r} tabindex=${1==r?"0":"-1"}
              @click=${()=>this._fireConfigChanged({...this._config,compact:1})}>${this._t("editor.on")}</button>
            <button type="button" role="radio" class=${0==r?"sel":""} aria-checked=${0==r} tabindex=${0==r?"0":"-1"}
              @click=${()=>this._fireConfigChanged({...this._config,compact:0})}>${this._t("editor.off")}</button>
          </div>
        </div>
        <h3>${this._t("editor.appearance")}</h3>
        <div>
          ${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}
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
    `}}customElements.get("soccer-live-team-editor")||customElements.define("soccer-live-team-editor",l)},864(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(186),o=a(7);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[o.yj,i.AH`.hint{font-size:11px}`]}setConfig(e){this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=(0,o.J)(this.hass,{includes:["all_mixed"]}))}_entityChanged(e){(0,o.vD)(this,"entity",e.target.value)}_selectChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_numberChanged(e){const t=parseInt(e.target.value,10);isNaN(t)||(0,o.vD)(this,e.target.dataset.configValue,t)}_textChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_switchChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.checked)}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
          <ha-switch .checked=${1==this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,o.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-team-competitions-editor")||customElements.define("soccer-live-team-competitions-editor",n)},308(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(186),o=a(7);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object}}}static get styles(){return o.yj}setConfig(e){this._config=e}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}_entityChanged(e){(0,o.vD)(this,"entity",e.target.value)}_selectChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_inputChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_toggleChanged(e){(0,o.vD)(this,e.target.dataset.configValue,e.target.checked)}render(){if(!this._config||!this.hass)return i.qy``;const e=(0,o.J)(this.hass,{sensorTypes:["team_match","team_matches_mixed"],includes:["soccer_live_next","soccerlive_next","soccer_live_all_mixed","soccerlive_all_mixed"]}),t=this._config.entity||"";return i.qy`
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
          <ha-switch .checked=${1==this._config.hide_header} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t("editor.theme")}</label>
          ${(0,s.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,o.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-team-form-editor")||customElements.define("soccer-live-team-form-editor",n)},847(e,t,a){a.r(t);var i=a(957),s=a(738),r=a(7),o=a(186);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[r.yj,i.AH`.toggle-row{display:flex;align-items:center;gap:10px;font-size:14px;cursor:pointer;}.toggle-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;flex-shrink:0;}`]}setConfig(e){this._config={...e}}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccer_live")||e.includes("soccerlive")).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_t(e,t){return(0,o.t)(e,(0,o.$c)(this.hass,this._config),t)}render(){return this._config?i.qy`
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
    `:i.qy``}}customElements.get("soccer-live-ticker-editor")||customElements.define("soccer-live-ticker-editor",n)},965(e,t,a){a.r(t);var i=a(957),s=a(7),r=a(186),o=a(738);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return s.yj}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,r.t)(e,(0,r.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_entityChanged(e){(0,s.vD)(this,"entity",e.target.value)}_switchChanged(e){(0,s.vD)(this,e.target.dataset.configValue,e.target.checked)}_selectChanged(e){(0,s.vD)(this,e.target.dataset.configValue,e.target.value,{removeEmpty:1})}_fetchEntities(){this.hass&&(this.entities=(0,s.J)(this.hass,{sensorTypes:["team_match"],includes:["soccerlive_next","soccer_live_next"]}))}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return i.qy`
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
            .checked=${1==this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>${this._t("editor.reverse_order")}</label>
          <ha-switch
            .checked=${1==this._config.reverse_order}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t("editor.skin")}</label>
          ${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,s.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-timeline-editor")||customElements.define("soccer-live-timeline-editor",n)},82(e,t,a){a.r(t);var i=a(957),s=a(186),r=a(7),o=a(738);class n extends i.WF{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[r.yj,i.AH`.hint{margin-top:-4px}`]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:1,composed:1})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=parseInt(t.value,10);isNaN(i)||this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter(e=>e.includes("soccerlive_all")||e.includes("soccer_live_all")).sort())}render(){if(!this._config||!this.hass)return i.qy``;const e=this._config.entity||"",t=e&&this.entities.includes(e),a=this.hass?.states?.[e]?.attributes?.matches||[],s=[...new Set(a.map(e=>e.league_name).filter(Boolean))].sort(),n=[...new Set(a.map(e=>e.season_label).filter(Boolean))].sort().reverse();return i.qy`
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
            ${n.map(e=>i.qy`<option value=${e} ?selected=${this._config.filter_season===e}>${e}</option>`)}
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
          <ha-switch .checked=${0!=this._config.show_live_ticker}
            data-config-value="show_live_ticker" @change=${this._switchChanged}></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.show_finished")}</label>
          <ha-switch
            .checked=${0!=this._config.show_finished_matches}
            data-config-value="show_finished_matches"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch
            .checked=${1==this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.hide_broadcasts")}</label>
          <ha-switch
            .checked=${1==this._config.hide_broadcasts}
            data-config-value="hide_broadcasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.smart_order")}</label>
          <ha-switch
            .checked=${1==this._config.smart_order||void 0===this._config.smart_order&&"smart"===this.hass?.states?.[this._config.entity]?.attributes?.recommended_match_order}
            data-config-value="smart_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.newest_first")}</label>
          <ha-switch
            .checked=${1==this._config.reverse_order}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t("editor.show_event_toasts")}</label>
          <ha-switch
            .checked=${1==this._config.show_event_toasts}
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

        ${0!=this._config.show_finished_matches?i.qy`
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
          ${(0,o.m)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
        <div>
          ${(0,r.YV)(this,this._config,e=>this._t?this._t(e):e)}
        </div>
      </div>
    `}}customElements.get("soccer-live-matches-editor")||customElements.define("soccer-live-matches-editor",n)},7(e,t,a){a.d(t,{J:()=>c,YV:()=>d,an:()=>n,vD:()=>l,wH:()=>p});var i=a(957);const s=i.AH`.card-config{display:flex;flex-direction:column;gap:16px;}.option{display:flex;align-items:center;justify-content:space-between;gap:12px;}label{font-size:14px;color:var(--primary-text-color);}.editor-section{margin-bottom:20px;}.editor-section h3{margin:12px 0 8px;font-size:13px;text-transform:uppercase;color:var(--secondary-text-color);}.editor-field{margin-bottom:12px;}.field-label{display:block;font-size:12px;font-weight:600;margin-bottom:4px;color:var(--secondary-text-color);}.field-hint{display:block;font-size:11px;color:var(--secondary-text-color);margin-top:2px;}select,input:not([type="checkbox"]),ha-entity-picker{width:100%;box-sizing:border-box;padding:10px 12px;font-size:14px;border-radius:8px;border:1px solid var(--divider-color,rgba(0,0,0,0.12));background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);}select:focus,input:focus{outline:2px solid var(--primary-color,#03a9f4);outline-offset:-1px;}h3{margin:8px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:var(--secondary-text-color);}.hint{font-size:12px;color:var(--secondary-text-color);}.field-info{background:rgba(33,150,243,0.1);border-left:3px solid var(--primary-color);padding:8px 12px;border-radius:2px;font-size:12px;margin-top:8px;}.field-warning{background:rgba(255,152,0,0.1);border-left:3px solid #ff9800;padding:8px 12px;border-radius:2px;font-size:12px;margin-top:8px;}`,r=[["en","English"],["nl","Nederlands"],["de","Deutsch"],["pt","Português"],["fr","Français"],["es","Español"],["it","Italiano"]],o=Object.fromEntries(r);function n(e,t){return"function"==typeof e._fireConfigChanged?e._fireConfigChanged(t):"function"==typeof e._fire?e._fire(t):(e._config=t,e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:1,composed:1})),void e.requestUpdate?.())}function l(e,t,a,{removeEmpty:i=0}={}){const s={...e?._config||{}};!i||""!==a&&null!=a?s[t]=a:delete s[t],n(e,s)}function c(e,{sensorTypes:t=[],includes:a=[]}={}){if(!e?.states)return[];const i=new Set(t);return Object.keys(e.states).filter(t=>{if(!t.startsWith("sensor."))return 0;const s=e.states[t]?.attributes?.sensor_type;return i.has(s)||a.some(e=>t.includes(e))}).sort()}function d(e,t,a){const s=e=>"function"==typeof a?a(e):e,l=t?.entity||t?.entities&&t.entities[0],c=l&&e?.hass?.states?.[l]?.attributes?.card_defaults?.language,d=t?.language||"",h=c?`${o[c]||c} · ${s("skin.shared")}${p(e,t,s)}`:s("lang.auto");return i.qy`
    <label class="field-label">${s("editor.language")}</label>
    <select @change=${a=>{const i=a.target.value,s={...t};i?s.language=i:delete s.language,n(e,s)}}>
      <option value="" ?selected=${!d}>${h}</option>
      ${r.map(([e,t])=>i.qy`<option value="${e}" ?selected=${d===e}>${t}</option>`)}
    </select>
  `}function p(e,t,a){const i=t?.entities;if(!Array.isArray(i)||i.length<=1)return"";const s=i[0];if(!s)return"";const r=e?.hass?.states?.[s]?.attributes?.friendly_name||s;return` (${"function"==typeof a?a("skin.via"):"via"} ${r})`}a.d(t,["yj",0,s])},195(e,t,a){a.d(t,{BD:()=>n,Bg:()=>h,CN:()=>T,Fn:()=>g,IK:()=>v,J5:()=>x,Mn:()=>d,Od:()=>f,Pc:()=>z,Tr:()=>y,V5:()=>m,VK:()=>c,Wg:()=>q,YW:()=>o,i2:()=>_,mR:()=>u,oD:()=>r,tC:()=>k,u7:()=>p,vr:()=>C,ws:()=>l,x8:()=>w,xV:()=>A,zu:()=>b});var i=a(186);const s=[["Goalkeeper","club.goalkeepers"],["Defender","club.defenders"],["Midfielder","club.midfielders"],["Attacker","club.attackers"]];function r(e){return Boolean(e&&(e.profile||e.coach||e.squad?.length||e.transfers?.length))}function o(e){const t=Array.isArray(e)?e:[];return s.map(([e,a])=>({pos:e,key:a,players:t.filter(t=>t&&t.position===e)})).filter(e=>e.players.length>0)}function n(e,t=8){return(Array.isArray(e)?e:[]).slice(0,Math.max(0,t))}function l(e,t){const a=Array.isArray(e)?e:[];if(!t||t<1)return{groups:a,hidden:0};let i=0;return{groups:a.map(e=>{const a=(e.players||[]).slice(0,t);return i+=(e.players||[]).length-a.length,{...e,players:a}}),hidden:i}}function c(e,t){const a=Array.isArray(e)?e:[];return"in"===t||"out"===t?a.filter(e=>e&&e.direction===t):a}function d(e){const t=Array.isArray(e)?e:[];let a=0,i=0;for(const e of t)"in"===e?.direction?a+=1:"out"===e?.direction&&(i+=1);return{all:t.length,in:a,out:i}}function p(e){const t=e||{};return"in"===t.direction?t.from||"":t.to||""}function h(e){return e?String(e).split("-").reverse().join("-"):""}function u(e){const t=Array.isArray(e)?e:[],a=t.filter(e=>Number.isFinite(Number(e?.market_value))&&Number(e.market_value)>0),i=t.map(e=>Number(e?.age)).filter(Number.isFinite),s={};for(const e of a){const t=e.position||"Other";s[t]=(s[t]||0)+Number(e.market_value)}return{total:a.reduce((e,t)=>e+Number(t.market_value),0),valued_count:a.length,average_age:i.length?i.reduce((e,t)=>e+t,0)/i.length:null,by_position:s}}function g(e){const t=(Array.isArray(e)?e:[]).filter(e=>e?.name),a={};for(const e of t){const t=e.position||"Other",i=a[t]||={count:0,ages:[],value:0};i.count+=1;const s=Number(e.age);Number.isFinite(s)&&s>0&&i.ages.push(s);const r=Number(e.market_value);Number.isFinite(r)&&r>0&&(i.value+=r)}const i=Object.entries(a).map(([e,t])=>({position:e,count:t.count,averageAge:t.ages.length?t.ages.reduce((e,t)=>e+t,0)/t.ages.length:null,value:t.value})),s=t.filter(e=>Number.isFinite(Number(e.age))&&Number(e.age)>0);return{lines:i,youngest:s.length?s.reduce((e,t)=>Number(t.age)<Number(e.age)?t:e):null,oldest:s.length?s.reduce((e,t)=>Number(t.age)>Number(e.age)?t:e):null,thin:i.filter(e=>e.count<=2)}}function m(e){const t=e||{},a=Array.isArray(t.squad)?t.squad:[],i=Array.isArray(t.injuries)?t.injuries:[],s=new Map;for(const e of i){const t=e?.player||e?.name;t&&s.set(String(t).toLowerCase(),{...e,player:t})}for(const e of a.filter(e=>e?.injured)){const t=String(e.name||"").toLowerCase();t&&s.set(t,{...e,...s.get(t)||{},player:e.name})}return[...s.values()]}function f(e){return s.map(([t,a])=>{const i=(Array.isArray(e)?e:[]).filter(e=>e?.position===t),s=i.filter(e=>!e.injured).length;return{position:t,key:a,available:s,total:i.length,thin:i.length>0&&s<=("Goalkeeper"===t?1:2)}}).filter(e=>e.total>0)}function _(e,t=[]){const a=new Map,s=[...Array.isArray(t)?t:[]].sort((e,t)=>(0,i.Vp)(t?.date)-(0,i.Vp)(e?.date));for(const e of s){const t=null!=e?.player_id?`id:${e.player_id}`:"",i=e?.player?`name:${String(e.player).trim().toLowerCase()}`:"";t&&!a.has(t)&&a.set(t,e.direction),i&&!a.has(i)&&a.set(i,e.direction)}const r=(Array.isArray(e)?e:[]).filter(e=>e?.name&&!e.injured&&!(e=>{const t=null!=e?.id?a.get(`id:${e.id}`):null,i=a.get(`name:${String(e?.name||"").trim().toLowerCase()}`);return"out"===(t||i)})(e)),o=e=>10*Number(e.starts||e.appearances||0)+Number(e.rating||0),n=(e,t)=>r.filter(t=>t.position===e).sort((e,t)=>o(t)-o(e)).slice(0,t),l=[n("Goalkeeper",1),n("Defender",4),n("Midfielder",3),n("Attacker",3)],c=l.flat();return c.length>=7?{formation:"4-3-3",lines:l,players:c}:null}function v(e){const t=q(e),a=t?.match;if(!a)return null;const i=String(e?.team_id??""),s=String(e?.team_name||"").toLowerCase(),r=(i?String(a.home_id??"")===i:String(a.home_team||"").toLowerCase()===s)?a.lineup_home:a.lineup_away;return Array.isArray(r)&&r.length?{match:a,starters:r.filter(e=>0!=e?.starter),substitutes:r.filter(e=>0==e?.starter)}:null}function b(e,t){const a=[];for(const e of Array.isArray(t)?t:[])a.push({...e,source:"change"});for(const t of Array.isArray(e?.injuries)?e.injuries:[])a.push({type:"injury_added",player:t.player||t.name,detail:t.expected_return,source:"injury"});for(const t of(Array.isArray(e?.transfers)?e.transfers:[]).slice(0,5))a.push({type:"transfer_added",player:t.player,detail:t.direction,date:t.date,source:"transfer"});return[...new Map(a.map((e,t)=>[`${e.type}|${e.player||e.name}|${e.date||t}`,e])).values()].slice(0,10)}function y(e){const t=(Array.isArray(e)?e:[]).filter(Boolean).slice(0,2);return 2!==t.length?null:{players:t,fields:["age","market_value","appearances","goals","assists","rating"].filter(e=>t.some(t=>null!==t[e]&&void 0!==t[e]&&""!==t[e]))}}function x(e,t="",a="all",i="all"){const s=String(t||"").trim().toLowerCase();return(Array.isArray(e)?e:[]).filter(e=>e?s&&!String(e.name||"").toLowerCase().includes(s)||"all"!==a&&e.position!==a||"available"===i&&e.injured?0:"unavailable"!==i||e.injured?1:0:0)}function w(e,t,a){const i=String(t??""),s=String(a||"").trim().toLowerCase(),r=(Array.isArray(e)?e:[]).filter(e=>"post"===e?.state).map(e=>{const t=i?String(e.home_id??"")===i:String(e.home_team||"").trim().toLowerCase()===s,a=i?String(e.away_id??"")===i:String(e.away_team||"").trim().toLowerCase()===s;if(!t&&!a)return null;const r=Number(t?e.home_score:e.away_score),o=Number(t?e.away_score:e.home_score);return Number.isFinite(r)&&Number.isFinite(o)?{match:e,home:t,ours:r,theirs:o,result:r>o?"W":r<o?"L":"D",time:S(e)}:null}).filter(Boolean).sort((e,t)=>t.time-e.time);if(!r.length)return null;const o=e=>{let t=0;for(const a of r){if(!e(a))break;t+=1}return t},n=r.filter(e=>"W"===e.result).sort((e,t)=>t.ours-t.theirs-(e.ours-e.theirs))[0]||null,l=e=>{const t=r.filter(t=>t.home===e),a=t.reduce((e,t)=>e+("W"===t.result?3:"D"===t.result?1:0),0);return{games:t.length,pointsPerGame:t.length?a/t.length:null}};return{played:r.length,unbeaten:o(e=>"L"!==e.result),winning:o(e=>"W"===e.result),cleanSheets:o(e=>0===e.theirs),averageGoals:r.reduce((e,t)=>e+t.ours,0)/r.length,biggestWin:n?{score:`${n.ours}–${n.theirs}`,opponent:n.home?n.match.away_team:n.match.home_team}:null,home:l(1),away:l(0)}}const $=["profile","matchday","dashboard","quality","availability","selection","prediction","news","season","changes","favorites","records","analysis","injuries","comparison","squad","transfers","automations"];function k(e){const t=(Array.isArray(e)?e:String(e||"").split(",")).map(e=>String(e).trim().toLowerCase()).filter(e=>$.includes(e));return[...new Set([...t,...$])]}function S(e){const t=e?.date_iso||e?.date,a=t?new Date(t).getTime():NaN;return Number.isFinite(a)?a:0}function C(e){if(null==e)return"";const t=String(e).trim();return/^(?:n\/?a|none|null|undefined|-)$/i.test(t)?"":t}function q(e){const t=e||{},a=[...Array.isArray(t.matches)?t.matches:[],...Array.isArray(t.upcoming_matches)?t.upcoming_matches:[],...Array.isArray(t.previous_matches)?t.previous_matches:[],...t.next_match?[t.next_match]:[]].filter(Boolean),i=[...new Map(a.map((e,t)=>[String(e.event_id??`${e.home_team}|${e.away_team}|${e.date_iso||e.date}|${t}`),e])).values()],s=i.find(e=>"in"===e.state),r=i.filter(e=>"pre"===e.state).sort((e,t)=>S(e)-S(t))[0],o=i.filter(e=>"post"===e.state).sort((e,t)=>S(t)-S(e))[0],n=s||r||o||null;return n?{match:n,phase:s?"live":r?"pre":"post"}:null}function z(e){const t=Array.isArray(e?.squad)?e.squad:[],a=m(e),i=new Set(a.map(e=>String(e.player||"").trim().toLowerCase())),s=t.filter(e=>e?.injured||i.has(String(e?.name||"").trim().toLowerCase()));if(!s.length)return null;const r=[e=>e.starts,e=>e.appearances,e=>null==e.minutes?NaN:Number(e.minutes)/90],o=r.map((e,a)=>({read:e,priority:a,coverage:t.filter(t=>Number.isFinite(Number(e(t)))&&Number(e(t))>=0).length,total:t.reduce((t,a)=>{const i=Number(e(a));return t+(Number.isFinite(i)&&i>=0?i:0)},0)})).filter(e=>e.coverage>0&&e.total>0).sort((e,t)=>t.coverage-e.coverage||t.total-e.total||e.priority-t.priority)[0]?.read,n=e=>{const t=Number(o?.(e));return Number.isFinite(t)&&t>=0?t:0},l=t.reduce((e,t)=>e+n(t),0),c=s.reduce((e,t)=>e+n(t),0);return{players:s,count:s.length,loadPercent:l>0?Math.round(c/l*100):null,goals:s.reduce((e,t)=>e+(Number(t.goals)||0),0),assists:s.reduce((e,t)=>e+(Number(t.assists)||0),0)}}function A(e,t,a,i=12){const s=String(t??""),r=String(a||"").trim().toLowerCase(),o=(Array.isArray(e)?e:[]).filter(e=>{const t=`${e?.competition_name||""} ${e?.league_name||""}`.toLowerCase();return"post"===e?.state&&1!=e.is_friendly&&!/friendl|oefen|amical|amistoso|freundschaft/.test(t)}).sort((e,t)=>S(e)-S(t));let n=0,l=0,c=0;const d=[];for(const e of o){const t=s?String(e.home_id??"")===s:String(e.home_team||"").trim().toLowerCase()===r,a=s?String(e.away_id??"")===s:String(e.away_team||"").trim().toLowerCase()===r;if(!t&&!a)continue;const i=Number(t?e.home_score:e.away_score),o=Number(t?e.away_score:e.home_score);if(!Number.isFinite(i)||!Number.isFinite(o))continue;const p=i>o?"W":i<o?"L":"D";n+="W"===p?3:"D"===p?1:0,l+=i,c+=o,d.push({points:n,result:p,goalsFor:l,goalsAgainst:c,opponent:t?e.away_team:e.home_team})}return{rounds:d.slice(-Math.max(1,i)),played:d.length,points:n,goalsFor:l,goalsAgainst:c}}function T(e){const t=Array.isArray(e)?e:[],a=e=>{if(null!=e?.fee&&""!==e?.fee){const t=Number(e.fee);if(Number.isFinite(t)&&t>=0)return t}const t=`${e?.fee_text||""} ${e?.type||""}`;if(!/[€$£]/.test(t))return null;const a=t.replace(",",".").match(/([\d.]+)\s*([mk])?/i);if(!a)return null;const i=Number(a[1]),s="m"===a[2]?.toLowerCase()?1e6:"k"===a[2]?.toLowerCase()?1e3:1;return Number.isFinite(i)?i*s:null},i=t.filter(e=>"in"===e?.direction),s=t.filter(e=>"out"===e?.direction),r=i.map(a).filter(e=>null!==e),o=s.map(a).filter(e=>null!==e),n=r.reduce((e,t)=>e+t,0),l=o.reduce((e,t)=>e+t,0),c=r.length+o.length,d=t.filter(e=>/loan|huur|leih|prêt|prest/i.test(`${e?.type||""} ${e?.fee_text||""}`)).length,p=t.filter(e=>/free|transfervrij|gratuit|ablösefrei|libre/i.test(`${e?.type||""} ${e?.fee_text||""}`)).length,h={};for(const e of t){const t=String(e?.date||""),a=t.slice(0,4),i=Number(t.slice(5,7));if(!/^\d{4}$/.test(a)||!Number.isFinite(i))continue;const s=`${a}-${i>=7?"summer":"winter"}`;h[s]=(h[s]||0)+1}return{incoming:i.length,outgoing:s.length,spent:n,income:l,balance:l-n,feeCoverage:c,loans:d,free:p,windows:h}}},136(e,t,a){function i(e){const t=e||{},a=Array.isArray(t.matches)?t.matches:[];return a.find(e=>e&&"in"===e.state)||(Array.isArray(t.upcoming_matches)?t.upcoming_matches:[])[0]||a.find(e=>e&&"pre"===e.state)||t.next_match||null}function s(e){return e?"in"===e.state?"live":e.time_tbd?"tbd":e.date_iso||(e.date||"").split(" ")[1]?"time":"date":"none"}function r(e){return(e||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function o(e,t){const a=r(e),i=r(t);if(!a||!i)return 0;if(a===i)return 1;const s=a.split(" "),o=i.split(" "),n=(e,t)=>e.every(e=>t.includes(e));return n(s,o)||n(o,s)}function n(e,t,a){const i=e&&e[t+"_id"];return a&&null!=a.id&&null!=i?String(i)===String(a.id):o(e&&e[t+"_team"],a&&a.name)}function l(e,t,a=10){const i=(s=t)&&"object"==typeof s?{name:s.name||"",id:null!=s.id?s.id:null}:{name:s||"",id:null};var s;if(!i.name&&null==i.id)return null;const r=e||{},o=Array.isArray(r.previous_matches)&&r.previous_matches.length?r.previous_matches:(Array.isArray(r.matches)?r.matches:[]).filter(e=>"post"===e.state),l=[];for(const e of o){const t=n(e,"home",i),s=n(e,"away",i);if(!t&&!s)continue;const r=parseInt(e.home_score,10),o=parseInt(e.away_score,10);if(!Number.isNaN(r)&&!Number.isNaN(o)&&(l.push(r===o?"D":t&&r>o||s&&o>r?"W":"L"),l.length>=a))break}return l.length?{results:l,w:l.filter(e=>"W"===e).length,d:l.filter(e=>"D"===e).length,l:l.filter(e=>"L"===e).length}:null}function c(e,t=20){const a=e||{},i=Array.isArray(a.standings)?a.standings:[],s=a.standings_groups&&a.standings_groups[0]&&a.standings_groups[0].standings;return(i.length?i:Array.isArray(s)?s:[]).slice(0,Math.max(0,t)).map((e,t)=>({rank:null!=e.rank?e.rank:t+1,team:e.team_name||e.team||"",played:null!=e.played?e.played:(e.wins||0)+(e.draws||0)+(e.losses||0),gd:e.goal_difference,points:e.points}))}function d(e){return"standings"===e?["standings"]:"all_matches_today"===e?["fixtures"]:["fixtures","next","standings","form"]}a.d(t,{Eb:()=>l,Kd:()=>o,SF:()=>s,SW:()=>d,T0:()=>c,YU:()=>i,YZ:()=>n})},738(e,t,a){a.d(t,{m:()=>m});var i=a(957),s=a(257),r=a(179),o=a(7);const n={dark:"#12141f",light:"#f6f8fc"},l={dark:"#f4f6fb",light:"#0f172a"},c={dark:"#aab2c5",light:"#5a6472"},d=[["accent_color","skin.custom_accent"],["accent_2_color","skin.custom_accent_2"],["background_color","skin.custom_background"],["text_color","skin.custom_text"]],p=[["live_color","skin.custom_live"],["gold_color","skin.custom_gold"],["surface_color","skin.custom_surface"],["card_color","skin.custom_card"],["secondary_text_color","skin.custom_text_2"],["divider_color","skin.custom_divider"],["chip_color","skin.custom_chip"]],h=[...d,...p].map(([e])=>e).concat(["gradient_from","gradient_to","gradient_angle","background_image","watermark_opacity","watermark_size"]);function u(e,t){return"function"==typeof e._fireConfigChanged?e._fireConfigChanged(t):"function"==typeof e._fire?e._fire(t):(e._config=t,e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:1,composed:1})),void e.requestUpdate?.())}function g(e,t,a,s,r){const o=e?.[t]||"",n=/^#[0-9a-f]{6}$/i.test(o)?o:"#6366f1";return i.qy`
    <label class="custom-skin-field">
      <span>${s(a)}</span>
      <input type="color" .value=${n} @input=${e=>r(t,e.target.value)}>
      <input type="text" .value=${o} placeholder="#6366f1" @change=${e=>r(t,e.target.value)}>
    </label>
  `}function m(e,t,a){const m=e=>"function"==typeof a?a(e):e,f=(a,i)=>u(e,{...t,[a]:i}),_=a=>{const i={...t};delete i[a],u(e,i)},v=(a,i)=>{const s={...t};""===i||null==i?delete s[a]:s[a]=i,u(e,s)},b=t?.entity||t?.entities&&t.entities[0],y=b&&e?.hass?.states?.[b]?.attributes?.card_defaults||{},x=(0,s.pV)(t,y),w=(0,s.J4)(x),$=(0,s.i5)(x),k="string"==typeof t?.appearance,S="string"==typeof t?.palette,C="string"==typeof t?.skin,q=(0,o.wH)(e,t,m),z=(e,t)=>{if(!e)return m("skin.default");const a=t.find(([t])=>t===e);return`${a?m(a[1]):e} · ${m("skin.shared")}${q}`},A=C?w:t?.appearance,T=C?$:t?.palette,E=a=>u(e,(0,s.EK)(t,w,$,a)),P=e=>{const t=[...e.currentTarget.querySelectorAll("button")],a=t.indexOf(e.target),i=(0,s.lS)(a,t.length,e.key);i!==a&&(e.preventDefault(),t[i].focus(),t[i].click())},j=[];if("custom"===$){const e=(0,r.GD)(t?.gradient_from),a=(0,r.GD)(t?.gradient_to),i=e&&a?[e,a]:[(0,r.GD)(t?.background_color)||n[w]].filter(Boolean);if(i.length){const e=(e,a,s)=>{const o=(0,r.GD)(t?.[e])||a;return o?i.some(e=>{const t=(0,r.yN)(e,o);return null!==t&&t<s}):0};e("text_color",l[w],4.5)&&j.push("skin.custom_text"),e("secondary_text_color",c[w],4.5)&&j.push("skin.custom_text_2"),e("accent_color","#6366f1",3)&&j.push("skin.custom_accent")}}const M=!!(0,r.GD)(t?.gradient_from)!=!!(0,r.GD)(t?.gradient_to);return i.qy`
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
          ${C?"":i.qy`
            <button type="button" role="radio" class=${k?"":"sel"} aria-checked=${!k} tabindex=${k?"-1":"0"} @click=${()=>_("appearance")}>${z(y.appearance,s.kW)}</button>
          `}
          ${s.kW.map(([e,t])=>i.qy`
            <button type="button" role="radio" class=${A===e?"sel":""} aria-checked=${A===e} tabindex=${A===e?"0":"-1"} @click=${()=>(e=>C?E({appearance:e}):f("appearance",e))(e)}>${m(t)}</button>
          `)}
        </div>
      </div>
      <div class="skin-row">
        <div class="skin-label">${m("skin.palette")}</div>
        <div class="skin-swatches" role="radiogroup" aria-label=${m("skin.palette")} @keydown=${P}>
          ${C?"":i.qy`
            <button type="button" role="radio" class="skin-swatch ${S?"":"sel"}" aria-checked=${!S} tabindex=${S?"-1":"0"} @click=${()=>_("palette")}>
              <span class="dot" style="background:${y.palette&&s.rH[y.palette]?`linear-gradient(135deg, ${s.rH[y.palette][0]} 50%, ${s.rH[y.palette][1]} 50%)`:"repeating-linear-gradient(135deg,#888 0 4px,#aaa 4px 8px)"}"></span>
              <span>${z(y.palette,s.HX)}</span>
            </button>
          `}
          ${s.HX.map(([e,t])=>{const[a,r]=s.rH[e]||["#6366f1","#ec4899"];return i.qy`
              <button type="button" role="radio" class="skin-swatch ${T===e?"sel":""}" aria-checked=${T===e} tabindex=${T===e?"0":"-1"} title=${m(t)} @click=${()=>(e=>C?E({palette:e}):f("palette",e))(e)}>
                <span class="dot" style="background:linear-gradient(135deg, ${a} 50%, ${r} 50%)"></span>
                <span>${m(t)}</span>
              </button>
            `})}
        </div>
      </div>
      ${"custom"===$?i.qy`
        <div>
          <div class="custom-skin-fields">
            ${d.map(([e,a])=>g(t,e,a,m,v))}
          </div>
          ${j.length?i.qy`<div class="skin-warn">⚠️ ${m("skin.contrast_warning")}: ${j.map(e=>m(e)).join(", ")}</div>`:""}
          <details class="skin-adv">
            <summary>${m("skin.advanced")}</summary>
            <div class="custom-skin-fields">
              ${p.map(([e,a])=>g(t,e,a,m,v))}
            </div>
            <div class="skin-bg-title">${m("skin.background")}</div>
            <div class="custom-skin-fields">
              ${g(t,"gradient_from","skin.gradient_from",m,v)}
              ${g(t,"gradient_to","skin.gradient_to",m,v)}
            </div>
            ${M?i.qy`<div class="skin-hint skin-hint-warn">${m("skin.gradient_incomplete")}</div>`:""}
            <label class="skin-bg-field">
              <span>${m("skin.gradient_angle")}</span>
              <input type="number" min="0" max="360" step="5" .value=${t?.gradient_angle??""} placeholder="135"
                @change=${e=>v("gradient_angle",""===e.target.value?"":Math.max(0,Math.min(360,Number(e.target.value))))}>
            </label>
            <label class="skin-bg-field">
              <span>${m("skin.watermark_url")}</span>
              <input type="text" .value=${t?.background_image||""} placeholder="/local/crest.png"
                title=${m("skin.watermark_url_hint")}
                @change=${e=>v("background_image",e.target.value.trim())}>
              <span class="skin-hint">${m("skin.watermark_url_hint")}</span>
            </label>
            <label class="skin-bg-field">
              <span>${m("skin.watermark_opacity")}</span>
              <input type="number" min="0" max="1" step="0.01" .value=${t?.watermark_opacity??""} placeholder="0.07"
                @change=${e=>v("watermark_opacity",""===e.target.value?"":Math.max(0,Math.min(1,Number(e.target.value))))}>
            </label>
            <label class="skin-bg-field">
              <span>${m("skin.watermark_size")}</span>
              <select @change=${e=>v("watermark_size",e.target.value)}>
                ${["","40%","60%","80%","contain"].map(e=>i.qy`
                  <option value="${e}" ?selected=${(t?.watermark_size||"")===e}>${e||m("skin.default")}</option>`)}
              </select>
            </label>
          </details>
          <button type="button" class="skin-reset" @click=${()=>{const a={...t};for(const e of h)delete a[e];u(e,a)}}>${m("skin.custom_reset")}</button>
        </div>
      `:""}
    </div>
  `}},179(e,t,a){function i(e){if("string"!=typeof e)return null;const t=e.trim();return/^#[0-9a-f]{3}$/i.test(t)?`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`.toLowerCase():/^#[0-9a-f]{6}$/i.test(t)?t.toLowerCase():/^[0-9a-f]{6}$/i.test(t)?`#${t.toLowerCase()}`:/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i.test(t)?t:null}function s(e){return/^#[0-9a-f]{6}$/i.test(e)?[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)].join(","):null}function r(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}function o(e){if(!/^#[0-9a-f]{6}$/i.test(e))return null;const t=e=>{const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)},[a,i,s]=r(e);return.2126*t(a)+.7152*t(i)+.0722*t(s)}function n(e,t){const a=o(e),i=o(t);return null===a||null===i?null:(Math.max(a,i)+.05)/(Math.min(a,i)+.05)}function l(e){if(!e)return 0;const t=o(e);return null===t?1:t>.05&&t<.92}a.d(t,{FD:()=>u,GD:()=>i,LX:()=>d,_R:()=>s,op:()=>g,tS:()=>h,yN:()=>n,zg:()=>p});const c=new Set(["to top","to bottom","to left","to right","to top left","to top right","to bottom left","to bottom right","to left top","to right top","to left bottom","to right bottom"]);function d(e){if(""===e||null==e)return null;const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(1,t)):null}function p(e){const t="string"==typeof e?e.trim():"";return/^(contain|cover|\d{1,3}%|\d{1,4}px)$/i.test(t)?t:null}function h(e){const t="string"==typeof e?e.trim():"";return t&&/^(\/local\/|https?:\/\/|data:image\/)/i.test(t)?t:null}function u(e,t,a){const s=i(e),r=i(t);return s&&r?`linear-gradient(${function(e){const t=e=>`${Math.max(-360,Math.min(360,e))}deg`;if("number"==typeof e&&Number.isFinite(e))return t(e);if("string"==typeof e){const a=e.trim(),i=a.match(/^(-?\d+(?:\.\d+)?)deg$/i);if(i)return t(parseFloat(i[1]));const s=a.toLowerCase().replace(/\s+/g," ");if(c.has(s))return s}return"135deg"}(a)}, ${s}, ${r})`:null}function g(e){const t=Array.isArray(e.team_colors)?e.team_colors:[e.team_color,e.home_color,e.away_color,e.primary_color,e.secondary_color],a=[];for(const e of t){const t=i(e);t&&l(t)&&!a.includes(t)&&a.push(t)}const s=a[0];if(!s)return{};let o=a.slice(1).find(e=>function(e,t){if(!/^#[0-9a-f]{6}$/i.test(e)||!/^#[0-9a-f]{6}$/i.test(t))return 1/0;const[a,i,s]=r(e),[o,n,l]=r(t);return Math.sqrt((a-o)**2+(i-n)**2+(s-l)**2)}(e,s)>60);return o||(o=function(e){if(!/^#[0-9a-f]{6}$/i.test(e))return e;const[t,a,i]=r(e).map(e=>Math.round(e+.28*(255-e)));return`#${[t,a,i].map(e=>e.toString(16).padStart(2,"0")).join("")}`}(s)),{accent_color:s,accent_2_color:o}}},257(e,t,a){a.d(t,{EK:()=>u,J4:()=>l,JL:()=>d,Oc:()=>h,i5:()=>c,lS:()=>g,pV:()=>p});const i=["dark","light","ha"],s=["purple","red-white","red-gold","blue-red","white-gold","classic","neon","gold","orange","blue","black-white","team","custom"],r={feyenoord:"red-white",arsenal:"red-gold",barcelona:"blue-red","real-madrid":"white-gold"},o={dark:{appearance:"dark",palette:"purple"},light:{appearance:"light",palette:"blue"},auto:{appearance:"dark",palette:"team"},custom:{appearance:"dark",palette:"custom"},"red-white":{appearance:"dark",palette:"red-white"},"red-gold":{appearance:"dark",palette:"red-gold"},"blue-red":{appearance:"dark",palette:"blue-red"},"white-gold":{appearance:"dark",palette:"white-gold"},classic:{appearance:"dark",palette:"classic"},neon:{appearance:"dark",palette:"neon"},gold:{appearance:"dark",palette:"gold"},orange:{appearance:"dark",palette:"orange"},blue:{appearance:"dark",palette:"blue"},"black-white":{appearance:"dark",palette:"black-white"}};function n(e){const t=e&&"string"==typeof e.skin?e.skin.toLowerCase():"";return o[r[t]||t]||null}function l(e){const t=e&&"string"==typeof e.appearance?e.appearance.toLowerCase():"";if(i.includes(t))return t;const a=n(e);return a?a.appearance:"dark"}function c(e){const t=e&&"string"==typeof e.palette?e.palette.toLowerCase():"";if(s.includes(t))return t;const a=n(e);return a?a.palette:"light"===l(e)?"blue":"purple"}function d(e){return"custom"===e||"team"===e}function p(e,t){const a=e||{};if(!t||"object"!=typeof t)return a;const i="string"==typeof a.skin,s={...a};return null==a.appearance&&!i&&t.appearance&&(s.appearance=t.appearance),null==a.palette&&!i&&t.palette&&(s.palette=t.palette),s}function h(e,t){return e&&void 0!==e.compact?1==e.compact:!(!t||1!=t.compact)}function u(e,t,a,i){const s={...e||{},appearance:t,palette:a,...i||{}};return delete s.skin,s}function g(e,t,a){return t<=0?e:"Home"===a?0:"End"===a?t-1:e<0?e:"ArrowRight"===a||"ArrowDown"===a?(e+1)%t:"ArrowLeft"===a||"ArrowUp"===a?(e-1+t)%t:e}a.d(t,["HX",0,[["purple","skin.palette_purple"],["red-white","skin.palette_red_white"],["red-gold","skin.palette_red_gold"],["blue-red","skin.palette_blue_red"],["white-gold","skin.palette_white_gold"],["blue","skin.palette_blue"],["orange","skin.palette_orange"],["black-white","skin.palette_black_white"],["classic","skin.palette_classic"],["neon","skin.palette_neon"],["gold","skin.palette_gold"],["team","skin.palette_team"],["custom","skin.palette_custom"]],"kW",0,[["dark","skin.appearance_dark"],["light","skin.appearance_light"],["ha","skin.appearance_ha"]],"rH",0,{purple:["#6366f1","#ec4899"],"red-white":["#e50000","#ff4444"],"red-gold":["#ef0107","#c8a232"],"blue-red":["#004d98","#a50044"],"white-gold":["#e2e8f0","#c8a951"],blue:["#2563eb","#60a5fa"],orange:["#f97316","#fb923c"],"black-white":["#e2e8f0","#111111"],classic:["#16a34a","#22c55e"],neon:["#00e5ff","#ff00aa"],gold:["#f59e0b","#fcd34d"],team:["#6366f1","#ec4899"],custom:["#6366f1","#ec4899"]}])},957(e,t,a){a.d(t,{WF:()=>ue,AH:()=>l,qy:()=>K,XX:()=>pe,JW:()=>U});const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class n{constructor(e,t,a){if(this._$cssResult$=1,a!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&o.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(1==e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new n(a,e,r)},c=(e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of t){const t=document.createElement("style"),s=i.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=a.cssText,e.appendChild(t)}},d=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:p,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:f}=Object,_=globalThis,v=_.trustedTypes,b=v?v.emptyScript:"",y=_.reactiveElementPolyfillSupport,x=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},$=(e,t)=>!p(e,t),k={attribute:1,type:String,converter:w,reflect:0,useDefault:0,hasChanged:$};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=0),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=1),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:s}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);s?.call(this,t),this.requestUpdate(e,r,a)},configurable:1,enumerable:1}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=1,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...g(e),...m(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const a=t.attribute;return 0==a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=0,this.hasUpdated=0,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(1),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&1==a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:w).toAttribute(t,a.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=a.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=i;const r=s.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,a,i=0,s){if(void 0!==e){const r=this.constructor;if(0==i&&(s=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??$)(s,t)||a.useDefault&&a.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,a))))return;this.C(e,t,a)}0==this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:s},r){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),1!=s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),1==i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=1;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e){const{wrapped:e}=a,i=this[t];1!=e||this._$AL.has(t)||void 0===i||this.C(t,void 0,a,i)}}let e=0;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=0,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=1,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=0}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return 1}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,y?.({ReactiveElement:S}),(_.reactiveElementVersions??=[]).push("2.1.2");const C=globalThis,q=e=>e,z=C.trustedTypes,A=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+E,j=`<${P}>`,M=document,N=()=>M.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,F="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,O=/>/g,B=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,R=/^(?:script|style|textarea|title)$/i,W=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),K=W(1),U=W(2),J=(W(3),Symbol.for("lit-noChange")),Q=Symbol.for("lit-nothing"),Y=new WeakMap,Z=M.createTreeWalker(M,129);function X(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const ee=(e,t)=>{const a=e.length-1,i=[];let s,r=2===t?"<svg>":3===t?"<math>":"",o=V;for(let t=0;t<a;t++){const a=e[t];let n,l,c=-1,d=0;for(;d<a.length&&(o.lastIndex=d,l=o.exec(a),null!==l);)d=o.lastIndex,o===V?"!--"===l[1]?o=G:void 0!==l[1]?o=O:void 0!==l[2]?(R.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=B):void 0!==l[3]&&(o=B):o===B?">"===l[0]?(o=s??V,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,n=l[1],o=void 0===l[3]?B:'"'===l[3]?I:H):o===I||o===H?o=B:o===G||o===O?o=V:(o=B,s=void 0);const p=o===B&&e[t+1].startsWith("/>")?" ":"";r+=o===V?a+j:c>=0?(i.push(n),a.slice(0,c)+T+a.slice(c)+E+p):a+E+(-2===c?t:p)}return[X(e,r+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class te{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,r=0;const o=e.length-1,n=this.parts,[l,c]=ee(e,t);if(this.el=te.createElement(l,a),Z.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Z.nextNode())&&n.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(T)){const t=c[r++],a=i.getAttribute(e).split(E),o=/([.?@])?(.*)/.exec(t);n.push({type:1,index:s,name:o[2],strings:a,ctor:"."===o[1]?oe:"?"===o[1]?ne:"@"===o[1]?le:re}),i.removeAttribute(e)}else e.startsWith(E)&&(n.push({type:6,index:s}),i.removeAttribute(e));if(R.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=z?z.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],N()),Z.nextNode(),n.push({type:2,index:++s});i.append(e[t],N())}}}else if(8===i.nodeType)if(i.data===P)n.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)n.push({type:7,index:s}),e+=E.length-1}s++}}static createElement(e,t){const a=M.createElement("template");return a.innerHTML=e,a}}function ae(e,t,a=e,i){if(t===J)return t;let s=void 0!==i?a._$Co?.[i]:a._$Cl;const r=D(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(0),void 0===r?s=void 0:(s=new r(e),s._$AT(e,a,i)),void 0!==i?(a._$Co??=[])[i]=s:a._$Cl=s),void 0!==s&&(t=ae(e,s._$AS(e,t.values),s,i)),t}class ie{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=(e?.creationScope??M).importNode(t,1);Z.currentNode=i;let s=Z.nextNode(),r=0,o=0,n=a[0];for(;void 0!==n;){if(r===n.index){let t;2===n.type?t=new se(s,s.nextSibling,this,e):1===n.type?t=new n.ctor(s,n.name,n.strings,this,e):6===n.type&&(t=new ce(s,this,e)),this._$AV.push(t),n=a[++o]}r!==n?.index&&(s=Z.nextNode(),r++)}return Z.currentNode=M,i}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??1}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ae(this,e,t),D(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,i="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=te.createElement(X(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ie(i,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new te(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new se(this.O(N()),this.O(N()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(0,1,t);e!==this._$AB;){const t=q(e).nextSibling;q(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Q}_$AI(e,t=this,a,i){const s=this.strings;let r=0;if(void 0===s)e=ae(this,e,t,0),r=!D(e)||e!==this._$AH&&e!==J,r&&(this._$AH=e);else{const i=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=ae(this,i[a+o],t,o),n===J&&(n=this._$AH[o]),r||=!D(n)||n!==this._$AH[o],n===Q?e=Q:e!==Q&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}r&&!i&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ne extends re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class le extends re{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){if((e=ae(this,e,t,0)??Q)===J)return;const a=this._$AH,i=e===Q&&a!==Q||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==Q&&(a===Q||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ce{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){ae(this,e)}}const de=C.litHtmlPolyfillSupport;de?.(te,se),(C.litHtmlVersions??=[]).push("3.3.3");const pe=(e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=a?.renderBefore??null;i._$litPart$=s=new se(t.insertBefore(N(),e),e,void 0,a??{})}return s._$AI(e),s},he=globalThis;class ue extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(1)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(0)}render(){return J}}ue._$litElement$=1,ue.finalized=1,he.litElementHydrateSupport?.({LitElement:ue});const ge=he.litElementPolyfillSupport;ge?.({LitElement:ue}),(he.litElementVersions??=[]).push("4.2.2")}};const t={};function a(i){const s=t[i];if(void 0!==s)return s.exports;const r=t[i]={exports:{}};return e[i](r,r.exports,a),r.exports}a.d=(e,t)=>{if(Array.isArray(t))for(var i=0;i<t.length;){var s=t[i++],r=t[i++];a.o(e,s)?0===r&&i++:0===r?Object.defineProperty(e,s,{enumerable:1,value:t[i++]}):Object.defineProperty(e,s,{enumerable:1,get:r})}else for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:1,get:t[s]})},a.o=(e,t)=>Object.hasOwn(e,t),a.r=e=>{Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:1})};var i=a(957),s=a(186);const r=new Set(["","N/A","n/a","unknown","Unknown"]);function o(e){return null==e?0:"string"==typeof e?!r.has(e.trim()):Array.isArray(e)?e.length>0:"object"==typeof e?Object.keys(e).length>0:1}function n(e){return String(e||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\b(fc|cf|sc|afc|club|football|voetbal|rotterdam)\b/g,"").replace(/[^a-z0-9]+/g,"")}function l(e,t){const a=n(e),i=n(t);return Boolean(a&&i&&(a===i||a.includes(i)||i.includes(a)))}function c(e){return String(e?.date_iso||e?.date||"").slice(0,10)}function d(e,t){if(!e||!t)return 0;if(null!=e.event_id&&null!=t.event_id&&String(e.event_id)===String(t.event_id))return 1;const a=c(e),i=c(t);return Boolean(a&&i&&a===i&&l(e.home_team,t.home_team)&&l(e.away_team,t.away_team))}function p(e,t){if(e===t)return 1;if("object"==typeof e||"object"==typeof t)try{return JSON.stringify(e)===JSON.stringify(t)}catch(e){return 0}return String(e)===String(t)}function h(e){const t=String(e||"").toUpperCase().trim();if("HT"===t)return 45;const a=t.match(/\d+/g)?.map(Number)||[];return a.length?a.reduce((e,t)=>e+t,0):-1}function u(e){const t=Number(e?.home_score),a=Number(e?.away_score);return Number.isFinite(t)&&Number.isFinite(a)?t+a:-1}function g(e){const t=String(e?.state||"").toLowerCase();return"post"===t?1e3:"in"===t||"live"===t?100+Math.max(0,h(e?.clock)):0}function m(e){if(!e||g(e)<100||g(e)>=1e3)return e;const t=h(e.clock),a=function(e){return(Array.isArray(e?.key_events)?e.key_events:[]).reduce((e,t)=>Math.max(e,h(t?.minute??t?.clock)),-1)}(e);return t<0||a<=t?e:{...e,clock:"",stale_clock:e.clock}}function f(e,t,a,i,s,r){if(!e||"object"!=typeof e||Array.isArray(e))return e;if(!t||"object"!=typeof t||Array.isArray(t))return e;const n={...e};for(const[e,l]of Object.entries(t)){const t=a?`${a}.${e}`:e,c=n[e];!o(c)&&o(l)?(n[e]=l,i[t]=r):!o(c)||!o(l)||p(c,l)||"object"!=typeof c||Array.isArray(c)||"object"!=typeof l||Array.isArray(l)?o(c)&&o(l)&&!p(c,l)&&["home_score","away_score","state","status","period","clock","date_iso","venue"].includes(e)&&s.push({field:t,primary:c,secondary:l}):n[e]=f(c,l,t,i,s,r)}return n}function _(e,t,a="primary",i="secondary"){if(!t||!d(e,t))return e;const s={},r=[];let n=f(e,t,"",s,r,i);return n=function(e,t,a,i,s){const r=g(t),n=g(a),l=n>r,c=n>=100&&u(a)>u(t);if(!l&&!c)return e;const d={...e},p=[...l?["state","status","period","clock"]:[],"home_score","away_score"];for(const e of p)o(a[e])&&(d[e]=a[e],i[e]=s);return d}(n,e,t,s,i),{...n,source_provenance:{...e.source_provenance||{},...s},source_conflicts:[...e.source_conflicts||[],...r],source_providers:[...new Set([...e.source_providers||[],a,i].filter(Boolean))]}}const v={schedule:["date","date_iso","venue","competition_name","league_name","broadcasts"],preview:["head_to_head","prediction","odds","injuries_home","injuries_away","weather"],lineup:["lineup_home","lineup_away","formation_home","formation_away"],timeline:["key_events","match_details"],statistics:["home_statistics","away_statistics","momentum","shotmap"],review:["review","player_of_the_match","team_of_the_match","match_story"]};function b(e,t,a,i,s){const r=e?.source_provenance||{};return Object.fromEntries(Object.entries(v).map(([n,l])=>{const c=Object.keys(r),d=l.filter(e=>c.some(t=>t===e||t.startsWith(`${e}.`))),p=d.length>0,h=l.some(t=>o(e?.[t])),u=l.some(t=>o(e?.[t])&&!d.includes(t));return[n,{available:h,provider:p&&u?`${t} + ${a}`:p?a:t,updated_at:p?s:i,enriched:p}]}))}function y(e,t){return t.find(t=>d(e,t))}function x(e,t){const a=t?.entity,i=e?.states?.[a];if(!e?.states||!a||!i)return e;const s=[t?.enrichment_entity,...Array.isArray(t?.supplementary_entities)?t.supplementary_entities:[]].filter(Boolean);!s.length&&t?.auto_enrichment&&s.push(function(e,t){const a=t?.entity,i=e?.states?.[a];if(!i)return"";const s=i.attributes||{},r=s.matches||[],o=new Set(r.map(c).filter(Boolean)),n=new Set(r.map(e=>String(e?.event_id||"")).filter(Boolean)),l=s.provider,p=Object.entries(e.states).filter(([e,t])=>e!==a&&e.startsWith("sensor.")&&t?.attributes&&t.attributes.provider&&t.attributes.provider!==l&&Array.isArray(t.attributes.matches)&&t.attributes.matches.some(e=>o.has(c(e))||n.has(String(e?.event_id||"")))).map(([e,t])=>{const a=t.attributes.matches;return{id:e,score:100*r.reduce((e,t)=>e+(a.some(e=>d(t,e))?1:0),0)+w(t.attributes)}}).filter(e=>e.score>=100).sort((e,t)=>t.score-e.score||e.id.localeCompare(t.id));return p[0]?.id||""}(e,t));const r=[...new Set(s)].filter(t=>t&&t!==a&&e?.states?.[t]),n=r.reduce((t,a)=>function(e,t){const a=e||{},i=t||{},s=a.provider||"primary",r=i.provider||"secondary",n=i.matches||[],l=a.last_successful_update||a.data_quality?.updated_at,c=i.last_successful_update||i.data_quality?.updated_at,p=(a.matches||[]).map(e=>{const t=_(e,y(e,n),s,r);return{...t,source_sections:b(t,s,r,l,c)}}),h=f(a,i,"",{},[],r),u=o(a.detail_service)?a:o(i.detail_service)?i:null;u&&(h.detail_service=u.detail_service,Object.prototype.hasOwnProperty.call(u,"detail_service_data")?h.detail_service_data=u.detail_service_data:delete h.detail_service_data),a.matches&&(h.matches=p);for(const e of["next_match","current_match"]){if(!a[e])continue;const t=i[e]&&d(a[e],i[e])&&i[e]||y(a[e],n),o=_(a[e],t,s,r);h[e]={...o,source_sections:b(o,s,r,l,c)}}const g=p.reduce((e,t)=>e+Object.keys(t.source_provenance||{}).length,0),m=p.reduce((e,t)=>e+(t.source_conflicts||[]).length,0);return h.source_blend={primary:s,secondary:r,enriched_fields:g,conflicts:m},h}(t,e.states[a].attributes),function(e){const t=e||{},a={...t};Array.isArray(t.matches)&&(a.matches=t.matches.map(m));for(const e of["next_match","current_match"])t[e]&&(a[e]=m(t[e]));return a}(i.attributes)),l=Object.create(e.states);l[a]={...i,attributes:{...n,source_blend:{...n.source_blend||{},primary:i.attributes.provider||"primary",supplementary_entities:r}}};const p=Object.create(e);return Object.defineProperty(p,"states",{configurable:1,enumerable:1,value:l}),p}function w(e){return(e?.matches||[]).reduce((e,t)=>e+["key_events","lineup_home","home_statistics","head_to_head","prediction","odds","injuries_home","review","momentum"].filter(e=>o(t?.[e])).length,0)}const $={basic:{card_type:"team",show_weather:1,show_form_trend:0,show_previous_matches:0,show_prediction:0,show_prediction_details:0,show_odds:0,show_injuries:0},matchday:{card_type:"matchday",auto_enrichment:1},live:{card_type:"match-center",phase_aware:1,auto_enrichment:1,show_event_toasts:1,show_prediction_details:0},analysis:{card_type:"match-center",auto_enrichment:1,show_prediction:1,show_prediction_details:1,show_odds:1,show_injuries:1},club:{card_type:"club",dashboard_mode:1,collapse_sections:1,show_matchday:1,show_squad_analysis:1,show_data_quality:1},compact:{card_type:"countdown",compact:1,hide_header:1,hide_broadcasts:1}},k=["type","entity","enrichment_entity","supplementary_entities","archive_entity","standings_entity","language","appearance","palette","skin","accent_color","accent_2_color","background_color","surface_color","card_color","text_color","secondary_text_color","divider_color","chip_color","chip_border_color","live_color","gold_color","gradient_from","gradient_to","gradient_angle","background_image","watermark_opacity","watermark_size"];function S(e,t="0"){if(null==e)return t;if("object"==typeof e){const a=e.displayValue??e.value;return null==a?t:String(a)}return e}var C=a(179),q=a(257);const z=i.AH`:host{--cl-green:#10b981;--cl-gold:#fbbf24;--cl-gold-glow:rgba(251,191,36,0.4);--cl-gold-text:#fde047;--cl-cl:var(--cl-accent);--cl-el:#f97316;--cl-rel:#ef4444;--cl-conf:#a855f7;--cl-win:#22c55e;--cl-draw:#94a3b8;--cl-loss:#ef4444;--cl-accent-soft:rgba(var(--cl-accent-rgb),0.12);--cl-accent-visible:var(--cl-accent);}:host([data-appearance="light"][data-palette="white-gold"]){--cl-accent-visible:var(--cl-accent-2);}:host([data-appearance="light"][data-palette="black-white"]){--cl-accent-visible:#475569;}:host,:host([data-palette="purple"]),:host([data-palette="custom"]),:host([data-palette="team"]){--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-accent-rgb:99,102,241;--cl-accent-2-rgb:236,72,153;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.5);}:host([data-palette="red-white"]){--cl-accent:#e50000;--cl-accent-2:#ff4444;--cl-accent-rgb:229,0,0;--cl-accent-2-rgb:255,68,68;--cl-live:#ff3b3b;--cl-live-glow:rgba(229,0,0,0.60);--cl-cl:#e50000;--cl-rel:#aa0000;}:host([data-palette="red-gold"]){--cl-accent:#ef0107;--cl-accent-2:#c8a232;--cl-accent-rgb:239,1,7;--cl-accent-2-rgb:200,162,50;--cl-live:#ff3333;--cl-live-glow:rgba(239,1,7,0.60);--cl-cl:#ef0107;--cl-rel:#990000;}:host([data-palette="blue-red"]){--cl-accent:#004d98;--cl-accent-2:#a50044;--cl-accent-rgb:0,77,152;--cl-accent-2-rgb:165,0,68;--cl-live:#ef4444;--cl-live-glow:rgba(165,0,68,0.60);--cl-cl:#004d98;--cl-rel:#7a0033;}:host([data-palette="white-gold"]){--cl-accent:#e2e8f0;--cl-accent-2:#c8a951;--cl-accent-rgb:226,232,240;--cl-accent-2-rgb:200,169,81;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#e2e8f0;}:host([data-palette="classic"]){--cl-accent:#16a34a;--cl-accent-2:#22c55e;--cl-accent-rgb:22,163,74;--cl-accent-2-rgb:34,197,94;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#16a34a;}:host([data-palette="neon"]){--cl-accent:#00e5ff;--cl-accent-2:#ff00aa;--cl-accent-rgb:0,229,255;--cl-accent-2-rgb:255,0,170;--cl-live:#ff2d55;--cl-live-glow:rgba(255,45,85,0.60);--cl-cl:#00e5ff;}:host([data-palette="gold"]){--cl-accent:#f59e0b;--cl-accent-2:#fcd34d;--cl-accent-rgb:245,158,11;--cl-accent-2-rgb:252,211,77;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#f59e0b;--cl-gold:#f59e0b;--cl-gold-glow:rgba(245,158,11,0.50);}:host([data-palette="orange"]){--cl-accent:#f97316;--cl-accent-2:#fb923c;--cl-accent-rgb:249,115,22;--cl-accent-2-rgb:251,146,60;--cl-live:#ef4444;--cl-live-glow:rgba(249,115,22,0.60);--cl-cl:#f97316;}:host([data-palette="blue"]){--cl-accent:#2563eb;--cl-accent-2:#60a5fa;--cl-accent-rgb:37,99,235;--cl-accent-2-rgb:96,165,250;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#2563eb;}:host([data-palette="black-white"]){--cl-accent:#e2e8f0;--cl-accent-2:#ffffff;--cl-accent-rgb:226,232,240;--cl-accent-2-rgb:255,255,255;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.50);--cl-cl:#e2e8f0;}:host,:host([data-appearance="dark"]){--cl-bg:#12141f;--cl-surface:rgba(var(--cl-accent-rgb),0.07);--cl-surface-2:rgba(var(--cl-accent-rgb),0.12);--cl-card-2:rgba(var(--cl-accent-rgb),0.07);--cl-divider:rgba(var(--cl-accent-rgb),0.16);--cl-glass-border:rgba(var(--cl-accent-rgb),0.20);--cl-text:#f4f6fb;--cl-text-2:#aab2c5;--cl-shadow:rgba(0,0,0,0.35);--cl-overlay-strong:rgba(0,0,0,0.55);--cl-overlay-soft:rgba(0,0,0,0.25);--cl-bar-outline:rgba(255,255,255,0.14);--cl-bar-separator:rgba(255,255,255,0.32);--cl-chip-bg:rgba(var(--cl-accent-rgb),0.11);--cl-chip-border:rgba(var(--cl-accent-rgb),0.24);--cl-toast-bg:#0b0f1a;--cl-num-bg:#0b0f1a;}:host([data-appearance="light"]){--cl-bg:#f6f8fc;--cl-surface:rgba(var(--cl-accent-rgb),0.08);--cl-surface-2:rgba(var(--cl-accent-rgb),0.14);--cl-card-2:rgba(255,255,255,0.75);--cl-divider:rgba(15,23,42,0.12);--cl-glass-border:rgba(var(--cl-accent-rgb),0.18);--cl-text:#0f172a;--cl-text-2:#5a6472;--cl-shadow:rgba(15,23,42,0.14);--cl-overlay-strong:rgba(0,0,0,0.45);--cl-overlay-soft:rgba(15,23,42,0.10);--cl-bar-outline:rgba(15,23,42,0.18);--cl-bar-separator:rgba(255,255,255,0.65);--cl-chip-bg:rgba(var(--cl-accent-rgb),0.10);--cl-chip-border:rgba(var(--cl-accent-rgb),0.22);--cl-toast-bg:#0f172a;--cl-num-bg:#ffffff;}:host([data-appearance="ha"]){--cl-bg:var(--ha-card-background,var(--card-background-color,#1c1c1c));--cl-surface:rgba(var(--cl-accent-rgb),0.08);--cl-surface-2:rgba(var(--cl-accent-rgb),0.14);--cl-card-2:var(--secondary-background-color,rgba(127,127,127,0.10));--cl-divider:var(--divider-color,rgba(127,127,127,0.20));--cl-glass-border:var(--divider-color,rgba(127,127,127,0.22));--cl-text:var(--primary-text-color,#e1e1e1);--cl-text-2:var(--secondary-text-color,#9b9b9b);--cl-shadow:rgba(0,0,0,0.30);--cl-overlay-strong:rgba(0,0,0,0.55);--cl-overlay-soft:rgba(0,0,0,0.25);--cl-bar-outline:var(--divider-color,rgba(127,127,127,0.28));--cl-bar-separator:rgba(127,127,127,0.55);--cl-chip-bg:rgba(var(--cl-accent-rgb),0.10);--cl-chip-border:var(--divider-color,rgba(127,127,127,0.22));--cl-toast-bg:var(--card-background-color,#1c1c1c);--cl-num-bg:var(--card-background-color,#1c1c1c);}`;function A(e,t){const a=function(e,t){const a=t||{},i=a.entity||a.entities&&a.entities[0],s=i&&e?.hass?.states?.[i]?.attributes?.card_defaults;return(0,q.pV)(a,s)}(e,t),i=(0,q.J4)(a),s=(0,q.i5)(a);return e&&e.setAttribute&&(e.setAttribute("data-appearance",i),e.setAttribute("data-palette",s),function(e,t,a){for(const t of E)e.style.removeProperty(t);if(!t||!(0,q.JL)(a))return;const i=function(e,t){const a=t?.entity||t?.entities?.[0];if(!a||!e?.hass?.states)return{};const i=e.hass.states[a]?.attributes||{},s=i.next_match||i.matches?.[0]||{};return{...i,home_color:i.home_color||i.next_match_home_color||s.home_color,away_color:i.away_color||i.next_match_away_color||s.away_color,team_color:i.team_color||i.primary_color||s.team_color,team_colors:i.team_colors||[i.home_color||i.next_match_home_color||s.home_color,i.away_color||i.next_match_away_color||s.away_color].filter(Boolean)}}(e,t),s={...i,...t},r={..."team"===a?(0,C.op)(s):{},...s};for(const[t,a,i]of T){const s=(0,C.GD)(r[t]);if(!s)continue;e.style.setProperty(a,s);const o=i?(0,C._R)(s):null;o&&e.style.setProperty(i,o)}const o=(0,C.FD)(r.gradient_from,r.gradient_to,r.gradient_angle);o&&e.style.setProperty("--cl-bg",o);const n=(0,C.tS)(r.background_image);if(n){e.style.setProperty("--cl-bg-image",`url(${JSON.stringify(n)})`);const t=(0,C.LX)(r.watermark_opacity);null!==t&&e.style.setProperty("--cl-bg-image-opacity",String(t));const a=(0,C.zg)(r.watermark_size);a&&e.style.setProperty("--cl-bg-image-size",a)}}(e,a,s)),{appearance:i,palette:s}}const T=[["accent_color","--cl-accent","--cl-accent-rgb"],["accent_2_color","--cl-accent-2","--cl-accent-2-rgb"],["secondary_color","--cl-accent-2","--cl-accent-2-rgb"],["live_color","--cl-live",null],["gold_color","--cl-gold",null],["background_color","--cl-bg",null],["surface_color","--cl-surface",null],["surface_2_color","--cl-surface-2",null],["card_color","--cl-card-2",null],["text_color","--cl-text",null],["secondary_text_color","--cl-text-2",null],["divider_color","--cl-divider",null],["chip_color","--cl-chip-bg",null],["chip_border_color","--cl-chip-border",null]],E=new Set(T.flatMap(([,e,t])=>t?[e,t]:[e]).concat(["--cl-bg","--cl-bg-image","--cl-bg-image-opacity","--cl-bg-image-size"])),P=new Map,j=new Map,M=new Map,N={"Johan Cruijff Arena":{lat:52.3145,lon:4.9425},"Johan Cruijff ArenA":{lat:52.3145,lon:4.9425},"Philips Stadion":{lat:51.4424,lon:5.4675},"Stadion Feyenoord":{lat:51.8896,lon:4.5219},"Feyenoord Stadium":{lat:51.8896,lon:4.5219},"De Kuip":{lat:51.8896,lon:4.5219},"Stadion de Kuip":{lat:51.8896,lon:4.5219},"AFAS Stadion":{lat:52.6281,lon:4.7483},"Stadion Galgenwaard":{lat:52.0779,lon:5.1456},"De Grolsch Veste":{lat:52.2373,lon:6.8296},"Goffert Stadion":{lat:51.8307,lon:5.8606},"Abe Lenstra Stadion":{lat:52.9584,lon:5.9141},"Sparta-Stadion Het Kasteel":{lat:51.9171,lon:4.4658},"Sparta Stadion Het Kasteel":{lat:51.9171,lon:4.4658},"Het Kasteel":{lat:51.9171,lon:4.4658},"De Adelaarshorst":{lat:52.2488,lon:6.1737},"Polman Stadion":{lat:52.3514,lon:6.6582},"Mandemakers Stadion":{lat:51.6853,lon:5.0535},Euroborg:{lat:53.1822,lon:6.5942},"MAC³PARK Stadion":{lat:52.5143,lon:6.1006},"MACPARK Stadion":{lat:52.5143,lon:6.1006},"Yanmar Stadion":{lat:52.3893,lon:5.2152},"Rat Verlegh Stadion":{lat:51.5747,lon:4.7716},"Koning Willem II Stadion":{lat:51.5547,lon:5.0917},"Fortuna Sittard Stadion":{lat:51.0011,lon:5.8683},GelreDome:{lat:51.9653,lon:5.9111},"Kras Stadion":{lat:52.4436,lon:4.6264},"De Vijverberg":{lat:51.963,lon:6.2872},"Cambuur Stadion":{lat:53.2112,lon:5.8102},"Parkstad Limburg Stadion":{lat:50.9081,lon:5.9928},"Cars Jeans Stadion":{lat:52.0667,lon:4.3167},"BENU Stadion":{lat:52.0667,lon:4.3167},"ADO Den Haag Stadium":{lat:52.0667,lon:4.3167},"Bingoal Stadion":{lat:52.0667,lon:4.3167},Goffertstadion:{lat:51.8307,lon:5.8606},"Sportcomplex Varkenoord":{lat:51.8896,lon:4.5219},Varkenoord:{lat:51.8896,lon:4.5219},"M-Scores Stadion":{lat:51.8139,lon:4.6836},"Stadion Krommedijk":{lat:51.8139,lon:4.6836},"Riwal Hoogwerkers Stadion":{lat:51.8139,lon:4.6836},Krommedijk:{lat:51.8139,lon:4.6836},"Kooi Stadion":{lat:53.2112,lon:5.8102},"Kooi Stadium":{lat:53.2112,lon:5.8102},"Leeuwarden Stadion":{lat:53.2112,lon:5.8102},"711 Stadion":{lat:52.4592,lon:4.6556},"BUKO Stadion":{lat:52.4592,lon:4.6556},"Rabobank IJmond Stadion":{lat:52.4592,lon:4.6556},"WerkTalent Stadion":{lat:52.0667,lon:4.3167},"Stadion Woudestein":{lat:51.9308,lon:4.5386},"Van Donge & De Roo Stadion":{lat:51.9308,lon:4.5386},"Goffert Stadium":{lat:51.8307,lon:5.8606},"Grolsch Veste":{lat:52.2373,lon:6.8296},"Abe Lenstra Stadium":{lat:52.9584,lon:5.9141},"Philips Stadium":{lat:51.4424,lon:5.4675},"Hitachi Capital Mobility Stadion":{lat:53.1822,lon:6.5942},"Koning Willem II Stadium":{lat:51.5547,lon:5.0917},Galgenwaard:{lat:52.0779,lon:5.1456},"MetLife Stadium":{lat:40.8135,lon:-74.0745},"AT&T Stadium":{lat:32.748,lon:-97.0927},"SoFi Stadium":{lat:33.9535,lon:-118.3392},"Levi's Stadium":{lat:37.4032,lon:-121.9699},"Hard Rock Stadium":{lat:25.958,lon:-80.2389},"Lincoln Financial Field":{lat:39.9008,lon:-75.1675},"Arrowhead Stadium":{lat:39.049,lon:-94.4839},"GEHA Field at Arrowhead Stadium":{lat:39.049,lon:-94.4839},"NRG Stadium":{lat:29.6847,lon:-95.4107},"Mercedes-Benz Stadium":{lat:33.7554,lon:-84.4008},"Estadio Banorte":{lat:19.303,lon:-99.1506},"Allegiant Stadium":{lat:36.0908,lon:-115.1839},"Gillette Stadium":{lat:42.0909,lon:-71.2643},"Century Link Field":{lat:47.5952,lon:-122.3316},"Lumen Field":{lat:47.5952,lon:-122.3316},"BC Place":{lat:49.2768,lon:-123.1117},"BMO Field":{lat:43.6334,lon:-79.4179},"Estadio Azteca":{lat:19.303,lon:-99.1506},"Estadio BBVA":{lat:25.6694,lon:-100.2436},"Estadio Akron":{lat:20.6854,lon:-103.4673},"Allianz Arena":{lat:48.2188,lon:11.6247},"Signal Iduna Park":{lat:51.4532,lon:7.4516},Olympiastadion:{lat:52.5147,lon:13.2395},"Wembley Stadium":{lat:51.556,lon:-.2796},"Tottenham Hotspur Stadium":{lat:51.6043,lon:-.0665},"Emirates Stadium":{lat:51.5549,lon:-.1084},"Stamford Bridge":{lat:51.4821,lon:-.191},"Old Trafford":{lat:53.4632,lon:-2.291},"Etihad Stadium":{lat:53.4831,lon:-2.2004},Anfield:{lat:53.4308,lon:-2.9608},"Villa Park":{lat:52.5092,lon:-1.8847},"Camp Nou":{lat:41.3815,lon:2.1229},"Spotify Camp Nou":{lat:41.3815,lon:2.1229},"Estadi Olímpic Lluís Companys":{lat:41.3643,lon:2.158},"Santiago Bernabéu":{lat:40.453,lon:-3.6883},"Civitas Metropolitano":{lat:40.4361,lon:-3.5995},"San Mamés":{lat:43.2627,lon:-2.9385},"Estadio de La Cerámica":{lat:39.9441,lon:-.1042},Mestalla:{lat:39.4747,lon:-.3583},"Parc des Princes":{lat:48.8414,lon:2.253},"Stade de France":{lat:48.9244,lon:2.3601},"Groupama Stadium":{lat:45.7654,lon:4.9825},Vélodrome:{lat:43.2697,lon:5.3961},"Stade Vélodrome":{lat:43.2697,lon:5.3961},"San Siro":{lat:45.4781,lon:9.124},"Stadio Giuseppe Meazza":{lat:45.4781,lon:9.124},"Allianz Stadium":{lat:45.1096,lon:7.6412},"Stadio Olimpico":{lat:41.9341,lon:12.4547},"Stadio Diego Armando Maradona":{lat:40.8279,lon:14.193},BayArena:{lat:51.0382,lon:7.0023},"Red Bull Arena":{lat:51.3457,lon:12.3484},Volksparkstadion:{lat:53.5875,lon:9.8985},"Volksparkstadion Hamburg":{lat:53.5875,lon:9.8985},"Stadion Feijenoord":{lat:51.8896,lon:4.5219},"Estádio da Luz":{lat:38.7526,lon:-9.1849},"Estádio José Alvalade":{lat:38.7613,lon:-9.1609},"Estádio do Dragão":{lat:41.1611,lon:-8.5834},"Celtic Park":{lat:55.8491,lon:-4.2051},"Ibrox Stadium":{lat:55.8508,lon:-4.3095},"Johan Cruyff Arena":{lat:52.3145,lon:4.9425},"PSV Stadion":{lat:51.4424,lon:5.4675},"Fenerbahçe Şükrü Saracoğlu":{lat:40.9836,lon:29.0333},"Türk Telekom Stadium":{lat:41.1066,lon:29.0103},"Vodafone Park":{lat:41.0038,lon:28.9967}};function D(e){if(e.size>=150){const t=e.keys().next().value;e.delete(t)}}function L(e,t,a,i=0){return{temp:Math.round(e),code:t,wind:(r=a,r<1?0:r<6?1:r<12?2:r<20?3:r<29?4:r<39?5:r<50?6:r<62?7:r<75?8:r<89?9:r<103?10:r<118?11:12),wind_unit:"BFT",icon:(s=t,s&&0!==s&&1!==s?2===s?"⛅":3===s?"☁️":45===s||48===s?"🌫️":s>=51&&s<=55?"🌦️":s>=61&&s<=65?"🌧️":s>=71&&s<=77?"🌨️":s>=80&&s<=82?"🌧️":85===s||86===s?"🌨️":95===s||96===s||99===s?"⛈️":"🌤️":"☀️"),description:F(t),description_key:V(t),forecast:i,timestamp:Date.now()};var s,r}function F(e){return{0:"Clear",1:"Mostly clear",2:"Partly cloudy",3:"Cloudy",45:"Foggy",48:"Foggy",51:"Light drizzle",53:"Drizzle",55:"Heavy drizzle",61:"Rain",63:"Heavy rain",65:"Very heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Showers",81:"Heavy showers",82:"Violent showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm + hail",99:"Thunderstorm + heavy hail"}[e]||"Unknown"}function V(e){return 0===e?"weather.clear":1===e||2===e?"weather.partly_cloudy":3===e?"weather.cloudy":45===e||48===e?"weather.foggy":e>=51&&e<=55?"weather.drizzle":e>=61&&e<=65?"weather.rain":e>=71&&e<=77?"weather.snow":e>=80&&e<=86?"weather.showers":95===e||96===e||99===e?"weather.thunderstorm":"weather.unknown"}const G=i.AH`.weather-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:6px;background:rgba(0,0,0,0.1);font-size:12px;color:var(--primary-text-color);}.weather-icon{font-size:18px;}.weather-temp{font-weight:600;}.weather-wind{font-size:11px;opacity:0.7;}`;async function O(e,t=null,a=null,r=null,o=null,n=null){if(!e||"N/A"===e)return i.qy``;try{const l=null==r||""===r?NaN:Number(r),c=null==o||""===o?NaN:Number(o);let d=Number.isFinite(l)&&Number.isFinite(c)?{lat:l,lon:c}:await function(e){if(!e||"N/A"===e)return null;if(P.has(e))return P.get(e);let t=N[e]||null;if(!t){const a=e.replace(/\s+\d+$/,"");a!==e&&(t=N[a]||null)}return t&&(D(P),P.set(e,t)),t}(e);if(!d)return i.qy``;const p=await async function(e,t,a=null){const i=function(e){if(!e)return null;const t=Date.parse(e);if(Number.isNaN(t))return null;const a=t-Date.now();return a<=36e5||a>13824e5?null:Math.floor(t/1e3)}(a),s=i?`${e},${t},@${i}`:`${e},${t}`;if(j.has(s)){const e=j.get(s);if(Date.now()-e.timestamp<36e5)return e.data}if(M.has(s))return M.get(s);const r=(async()=>{try{const a=i?await async function(e,t,a){const i=new Date(1e3*a).toISOString().slice(0,10),s=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${t}&hourly=temperature_2m,weather_code,wind_speed_10m&timezone=GMT&timeformat=unixtime&start_date=${i}&end_date=${i}`),r=(await s.json()).hourly;if(!r||!Array.isArray(r.time)||!r.time.length)return null;let o=0,n=1/0;for(let e=0;e<r.time.length;e++){const t=Math.abs(r.time[e]-a);t<n&&(n=t,o=e)}return L(r.temperature_2m[o],r.weather_code[o],r.wind_speed_10m[o],1)}(e,t,i):await async function(e,t){const a=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${t}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`),i=await a.json();return i.current?L(i.current.temperature_2m,i.current.weather_code,i.current.wind_speed_10m,0):null}(e,t);if(a)return D(j),j.set(s,{data:a,timestamp:Date.now()}),a}catch(e){console.warn("Weather fetch failed:",e)}finally{M.delete(s)}return null})();return M.set(s,r),r}(d.lat,d.lon,n);if(!p)return i.qy``;const h=t?(0,s.$c)(t,a):"en",u=(0,s.t)("weather.wind",h),g=(0,s.t)(p.description_key||"weather.unknown",h),m=p.forecast?`${e}: ${g} (⏱)`:`${e}: ${g}`;return i.qy`
      <div class="weather-badge" title="${m}">
        <span class="weather-icon">${p.icon}</span>
        <span class="weather-temp">${p.temp}°</span>
        <span class="weather-wind" title="${u}">${p.wind} ${p.wind_unit||"BFT"}</span>
      </div>
    `}catch(e){return console.warn("Weather badge error:",e),i.qy``}}const B=i.AH`.spinner-container{display:flex;align-items:center;justify-content:center;padding:24px;min-height:100px;}.spinner{display:inline-block;width:20px;height:20px;border:2px solid var(--cl-chip-border,rgba(255,255,255,0.3));border-radius:50%;border-top-color:var(--cl-accent,var(--primary-color,#2196F3));animation:spinner-rotate 1s linear infinite;}@keyframes spinner-rotate{to{transform:rotate(360deg);}}.spinner-text{margin-left:12px;font-size:12px;color:var(--cl-text-2,var(--secondary-text-color));}`,H=(e="Loading...")=>i.qy`
  <div class="spinner-container">
    <div class="spinner"></div>
    <span class="spinner-text">${e}</span>
  </div>
`;function I(e){switch(e){case"initializing":case"fetching":return{kind:"info",icon:"⏳",title:"ui.sync_fetching",sub:"ui.sync_fetching_hint"};case"rate_limited":return{kind:"info",icon:"⏱",title:"ui.sync_rate_limited",sub:"ui.sync_rate_limited_hint"};case"authentication_failed":return{kind:"error",icon:"🔑",title:"ui.sync_auth_failed",sub:"ui.sync_auth_failed_hint"};case"provider_unavailable":return{kind:"error",icon:"📡",title:"ui.sync_provider_unavailable",sub:"ui.sync_provider_unavailable_hint"};default:return null}}i.AH`@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.5;}}`;const R=(e,t,a,s=null)=>i.qy`
  <ha-card style="padding: 20px 18px; text-align: center; color: var(--cl-live, var(--error-color, #ef5350)); background: var(--cl-bg, var(--card-background-color)); border: 1px solid var(--cl-glass-border, rgba(239,68,68,0.24)); border-radius: 18px; box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.24));">
    <div style="font-size: 26px; margin-bottom: 10px;">${e}</div>
    <div style="font-size: 14px; font-weight: 800; margin-bottom: 5px; color: var(--cl-text, var(--primary-text-color));">${t}</div>
    <div style="font-size: 12px; color: var(--cl-text-2, var(--secondary-text-color)); margin-bottom: 8px;">${a}</div>
    ${s?i.qy`<div style="font-size: 11px; color: var(--cl-text-2, var(--secondary-text-color)); background: var(--cl-surface, rgba(0,0,0,0.1)); border: 1px solid var(--cl-divider, transparent); padding: 8px; border-radius: 8px; margin-top: 8px;">${s}</div>`:""}
  </ha-card>
`,W=(e,t)=>{const a=I(e);if(!a)return null;const i=t(a.title),s=t(a.sub);return"error"===a.kind?R(a.icon,i,s,t("ui.check_integration")):U(a.icon,i,s)},K=(e,t,a)=>e&&W(e.sync_status,t)||a(),U=(e,t,a,s=null)=>i.qy`
  <ha-card style="padding: 26px 18px; text-align: center; color: var(--cl-text-2, var(--secondary-text-color)); background: var(--cl-bg, var(--card-background-color)); border: 1px solid var(--cl-glass-border, rgba(255,255,255,0.10)); border-radius: 18px; box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.20));">
    <div style="font-size: 32px; margin-bottom: 12px; opacity: 0.55;">${e}</div>
    <div style="font-size: 13px; font-weight: 800; margin-bottom: 4px; color: var(--cl-text, var(--primary-text-color));">${t}</div>
    <div style="font-size: 12px; opacity: 0.78; margin-bottom: 8px;">${a}</div>
    ${s?i.qy`<div style="font-size: 11px; opacity: 0.62; margin-top: 8px;">${s}</div>`:""}
  </ha-card>
`,J="soccer_live_cache_",Q=864e5,Y=new Map;class Z{static _cacheKeys(){return Array.from({length:localStorage.length},(e,t)=>localStorage.key(t)).filter(e=>e?.startsWith(J))}static _prune(){try{const e=Date.now(),t=[];for(const a of this._cacheKeys())try{const i=JSON.parse(localStorage.getItem(a));if(!Number.isFinite(i?.timestamp)||e-i.timestamp>=Q){localStorage.removeItem(a),Y.delete(a.slice(18));continue}t.push({key:a,timestamp:i.timestamp})}catch(e){localStorage.removeItem(a),Y.delete(a.slice(18))}t.sort((e,t)=>t.timestamp-e.timestamp).slice(50).forEach(({key:e})=>{localStorage.removeItem(e),Y.delete(e.slice(18))})}catch(e){console.debug("Failed to prune cache:",e)}}static set(e,t){try{const a=JSON.stringify(t);if(Y.get(e)===a)return;Y.size>=50&&Y.delete(Y.keys().next().value),Y.set(e,a),localStorage.setItem(J+e,JSON.stringify({timestamp:Date.now(),data:t})),this._prune()}catch(e){console.debug("Failed to cache:",e)}}static get(e){try{const t=localStorage.getItem(J+e);if(!t)return null;const{timestamp:a,data:i}=JSON.parse(t),s=Date.now()-a;return s<Q?{data:i,age:s,isCached:1}:(this.clear(e),null)}catch(e){return console.debug("Failed to read cache:",e),null}}static clear(e){try{localStorage.removeItem(J+e),Y.delete(e)}catch(e){console.debug("Failed to clear cache:",e)}}static clearAll(){try{this._cacheKeys().forEach(e=>localStorage.removeItem(e)),Y.clear()}catch(e){console.debug("Failed to clear all cache:",e)}}static getAge(e){try{const t=localStorage.getItem(J+e);if(!t)return null;const{timestamp:a}=JSON.parse(t),i=Date.now()-a,s=Math.floor(i/6e4);if(s<60)return`${s}m ago`;const r=Math.floor(s/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}catch(e){return null}}}const X=({logo:e,title:t,badge:a=null,fallbackIcon:s="⚽"})=>{const r=e&&"N/A"!==e?e:null;return i.qy`
  <div class="top-bar">
    <div class="competition">
      <span class="comp-icon">
        ${r?i.qy`
          <img src="${r}" alt=""
            @error=${e=>{e.target.style.display="none",e.target.nextElementSibling&&(e.target.nextElementSibling.style.display="")}}>
          <span style="display:none">${s}</span>
        `:s}
      </span>
      <span class="comp-name">${t||" "}</span>
    </div>
    ${a||""}
  </div>
`},ee=(e,t="date")=>i.qy`
  <span class="sh-badge ${t}">${e}</span>
`,te=i.AH`.top-bar{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.08));}.competition{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:700;color:var(--cl-text);letter-spacing:-0.01em;min-width:0;}.comp-icon{flex-shrink:0;width:24px;height:24px;border-radius:8px;background:linear-gradient(135deg,var(--cl-accent,#6366f1),var(--cl-accent-2,#8b5cf6));display:flex;align-items:center;justify-content:center;font-size:12px;box-shadow:0 2px 8px rgba(var(--cl-accent-rgb,99 102 241),0.4);overflow:hidden;}.comp-icon img{width:100%;height:100%;object-fit:contain;}.comp-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.sh-badge{flex-shrink:0;padding:5px 11px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:0.06em;}.sh-badge.live{background:#e53935;color:#fff;}.sh-badge.ft{background:var(--cl-card-2,rgba(0,0,0,0.35));border:1px solid var(--cl-glass-border,rgba(255,255,255,0.1));color:var(--cl-text,#fff);}.sh-badge.date{background:var(--cl-card-2,rgba(0,0,0,0.35));border:1px solid var(--cl-glass-border,rgba(255,255,255,0.1));color:var(--cl-text,#fff);}.sh-badge.neutral{background:var(--cl-surface,rgba(255,255,255,0.08));color:var(--cl-text-2,#94a3b8);}`,ae=(e,{lang:t="en",t:a=e=>e,weatherBadge:s=null,showDate:r=0,hideBroadcasts:o=0}={})=>{if(!e)return i.qy``;const n=e.venue&&"N/A"!==e.venue?e.venue:"",l=e.venue_city&&"N/A"!==e.venue_city?e.venue_city:"",c=n?l?`${n}, ${l}`:n:"",d=e.neutral_site||0,p=o?[]:Array.isArray(e.broadcasts)&&e.broadcasts.length?e.broadcasts:e.broadcast&&"N/A"!==e.broadcast?[e.broadcast]:[],h=parseInt(e.attendance,10),u=!isNaN(h)&&h>0,g=e.links||{},m=e.has_stats&&(g.stats||g.summary),f=e.has_commentary&&(g.commentary||g.summary),_=!!g.video,v=p.length||u||m||f||_,b=e=>e&&/^https?:\/\//i.test(e)&&window.open(e,"_blank","noopener,noreferrer");return i.qy`
    ${c||s||r?i.qy`
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
        ${r&&e.date?i.qy`
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

    ${v?i.qy`
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
          <span class="smm-chip link" title="${a("ui.open_stats")||""}" @click=${()=>b(g.stats||g.summary)}>
            📊 ${a("card.stats")||"Stats"}
          </span>
        `:""}
        ${f?i.qy`
          <span class="smm-chip link" title="${a("ui.open_commentary")||""}" @click=${()=>b(g.commentary||g.summary)}>
            💬 ${a("card.commentary")||"Commentary"}
          </span>
        `:""}
        ${_?i.qy`
          <span class="smm-chip link" title="${a("ui.open_video")||""}" @click=${()=>b(g.video)}>
            🎬 ${a("card.video")||"Video"}
          </span>
        `:""}
      </div>
    `:""}
  `},ie=i.AH`.smm-venue-row{display:flex;align-items:center;flex-wrap:wrap;gap:10px;padding:10px 18px;font-size:11px;color:var(--cl-text-2,#94a3b8);border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.smm-venue,.smm-date{display:flex;align-items:center;gap:4px;min-width:0;}.smm-venue span,.smm-date span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.smm-icon{width:13px;height:13px;flex-shrink:0;opacity:0.7;}.smm-chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 18px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.smm-chip{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;background:var(--cl-surface,rgba(255,255,255,0.06));color:var(--cl-text-2,#94a3b8);white-space:nowrap;}.smm-chip.link{cursor:pointer;color:var(--cl-accent,#6366f1);background:rgba(var(--cl-accent-rgb,99 102 241),0.1);}.smm-chip.link:hover{background:rgba(var(--cl-accent-rgb,99 102 241),0.2);}`,se={nl:{"Combo Double chance":"Combi dubbele kans","Combo Winner":"Combi winnaar","Double chance":"Dubbele kans",Winner:"Winnaar"," or draw":" of gelijkspel"," and ":" en "," goals":" doelpunten","No predictions available":"Geen voorspelling beschikbaar"},de:{"Combo Double chance":"Kombi Doppelte Chance","Combo Winner":"Kombi Sieger","Double chance":"Doppelte Chance",Winner:"Sieger"," or draw":" oder Unentschieden"," and ":" und "," goals":" Tore","No predictions available":"Keine Prognose verfügbar"},es:{"Combo Double chance":"Combo doble oportunidad","Combo Winner":"Combo ganador","Double chance":"Doble oportunidad",Winner:"Ganador"," or draw":" o empate"," and ":" y "," goals":" goles","No predictions available":"Sin pronóstico disponible"},fr:{"Combo Double chance":"Combo double chance","Combo Winner":"Combo vainqueur","Double chance":"Double chance",Winner:"Vainqueur"," or draw":" ou match nul"," and ":" et "," goals":" buts","No predictions available":"Aucun pronostic disponible"},it:{"Combo Double chance":"Combo doppia chance","Combo Winner":"Combo vincente","Double chance":"Doppia chance",Winner:"Vincente"," or draw":" o pareggio"," and ":" e "," goals":" gol","No predictions available":"Nessun pronostico disponibile"},pt:{"Combo Double chance":"Combo dupla hipótese","Combo Winner":"Combo vencedor","Double chance":"Dupla hipótese",Winner:"Vencedor"," or draw":" ou empate"," and ":" e "," goals":" gols","No predictions available":"Sem previsão disponível"}},re=e=>"number"==typeof e&&isFinite(e)?e:null,oe=["form","att","def"],ne=new Set(["nl","de","fr","it","es","pt"]);function le(e,t){if(null==e||""===e)return"";const a=String(e).trim();let i="",s=a;return a.startsWith("-")?(i="< ",s=a.slice(1)):a.startsWith("+")&&(i="> ",s=a.slice(1)),ne.has(t)&&(s=s.replace(".",",")),i+s}const ce=e=>null==e?"–":`${e}%`;function de(e,t){return e&&"in"===e.state?i.qy`<span class="sec-status">${t("team.status_prematch")}</span>`:""}function pe(e,{t,lang:a,showDetails:s=1}){const r=e.prediction;if(!r||"in"===e.state||"post"===e.state)return"";const o=function(e){const t=e||{},a=re(t.percent_home),i=re(t.percent_draw),s=re(t.percent_away),r=(a||0)+(i||0)+(s||0),o=e=>r>0&&null!==e?e/r*100:0;return{hasBar:null!==a||null!==i||null!==s,home:a,draw:i,away:s,wHome:o(a),wDraw:o(i),wAway:o(s)}}(r),n=function(e,t="en"){const a=String(e||"").trim();if(!a)return a;const i=se[(t||"en").split("-")[0].toLowerCase()];if(!i)return a;let s=a;for(const[e,t]of Object.entries(i))s.includes(e)&&(s=s.split(e).join(t));return s}(r.advice&&"N/A"!==r.advice?r.advice:"",a),l=s?function(e){const t=e&&e.comparison||{},a=[];for(const e of oe){const i=t[e];if(!i)continue;const s=re(i.home),r=re(i.away);if(null===s&&null===r)continue;const o=(s||0)+(r||0);a.push({key:e,home:s,away:r,wHome:o>0?(s||0)/o*100:50,wAway:o>0?(r||0)/o*100:50})}return a}(r):[],c=s?function(e){const t=e||{},a=t.goals_home||"",i=t.goals_away||"",s=t.under_over||"";return a||i||s?{home:a,away:i,line:s}:null}(r):null;if(!(o.hasBar||n||l.length||c))return"";const d=e.home_abbrev||e.home_team||"",p=e.away_abbrev||e.away_team||"";return i.qy`
    <div class="pred">
      <div class="sec-head">
        <span class="pred-title info" title="${t("team.prediction_note")}" aria-label="${t("team.prediction_note")}">${t("team.prediction")}</span>
        ${de(e,t)}
      </div>
      ${o.hasBar?i.qy`
        <div class="pred-bar">
          <div class="pred-seg home" style="width:${o.wHome}%" title="${d} ${ce(o.home)}"></div>
          <div class="pred-seg draw" style="width:${o.wDraw}%" title="${t("match.draw")} ${ce(o.draw)}"></div>
          <div class="pred-seg away" style="width:${o.wAway}%" title="${p} ${ce(o.away)}"></div>
        </div>
        <div class="pred-legend">
          <span class="pred-l home">${d} ${ce(o.home)}</span>
          <span class="pred-l draw">${t("match.draw")} ${ce(o.draw)}</span>
          <span class="pred-l away">${ce(o.away)} ${p}</span>
        </div>
      `:""}
      ${l.length?i.qy`
        <div class="pred-cmp">
          ${l.map(e=>i.qy`
            <div class="pred-cmp-head">
              <span class="pred-cmp-v home">${ce(e.home)}</span>
              <span class="pred-cmp-label">${t("team.cmp_"+e.key)}</span>
              <span class="pred-cmp-v away">${ce(e.away)}</span>
            </div>
            <div class="pred-cmp-bar">
              <div class="pred-cmp-seg home" style="width:${e.wHome}%"></div>
              <div class="pred-cmp-seg away" style="width:${e.wAway}%"></div>
            </div>
          `)}
        </div>
      `:""}
      ${c?i.qy`
        <div class="pred-xg" title="${t("team.goal_lines_note")}" aria-label="${t("team.goal_lines_note")}">
          <span class="pred-xg-label info">${t("team.goal_lines")}</span>
          <span class="pred-xg-val">${d} ${le(c.home,a)||"—"} · ${p} ${le(c.away,a)||"—"}${c.line?` · ${t("team.goal_lines_total")} ${le(c.line,a)}`:""}</span>
        </div>
      `:""}
      ${n?i.qy`<div class="pred-advice">${n}</div>`:""}
    </div>
  `}function he(e,{t}){if("post"===e.state)return"";const a=e.odds;if(!a)return"";const s=function(e){const t=e||{},a=re(t.home),i=re(t.draw),s=re(t.away),r=[a,i,s].filter(e=>null!==e),o=r.length?Math.min(...r):null,n=r.length>=2&&1===r.filter(e=>e===o).length,l="number"==typeof t.bookmaker_count&&t.bookmaker_count>0?t.bookmaker_count:null,c=1==t.live;return{present:r.length>0,home:a,draw:i,away:s,min:o,showFav:n,count:c?null:l,singular:1===l,live:c}}(a);if(!s.present)return"";const r=e.home_abbrev||e.home_team||"",o=e.away_abbrev||e.away_team||"",n=s.singular?"team.odds_avg_one":"team.odds_avg",l=(e,a,r,o)=>{const n=s.showFav&&null!==o&&o===s.min,l=n?t("team.favourite"):"";return i.qy`
      <div class="odds-col ${e}${n?" fav":""}" title="${l}" aria-label="${l}">
        <div class="odds-sign">${a}</div>
        <div class="odds-team">${r}</div>
        <div class="odds-val">${null!==o?o.toFixed(2):"–"}</div>
      </div>`};return i.qy`
    <div class="odds">
      <div class="odds-head">
        <span class="odds-title info" title="${s.live?t("team.odds_live_note"):t("team.odds_note")}" aria-label="${s.live?t("team.odds_live_note"):t("team.odds_note")}">${s.live?t("team.odds_live"):t("team.odds")}</span>
        ${s.live?i.qy`<span class="odds-sub live">${t("team.odds_live_badge")}</span>`:s.count?i.qy`<span class="odds-sub">${t(n,{n:s.count})}</span>`:""}
        ${s.live?"":de(e,t)}
      </div>
      <div class="odds-row">
        ${l("home","1",r,s.home)}
        ${l("draw","X",t("match.draw"),s.draw)}
        ${l("away","2",o,s.away)}
      </div>
    </div>
  `}function ue(e,{t}){if("post"===e.state)return"";const a=e.injuries_home||[],s=e.injuries_away||[];if(!a.length&&!s.length)return"";const r=e=>{const a=e.suspended?t("team.suspended"):t("team.injured");return i.qy`
      <div class="inj-row">
        <span class="inj-ic" role="img" aria-label="${a}" title="${a}">${e.suspended?"🚫":"🩹"}</span>
        <span class="inj-name">${e.player}</span>
        ${e.reason?i.qy`<span class="inj-reason">${e.reason}</span>`:""}
      </div>`},o=(e,a)=>{const{shown:s,extra:o}=function(e){const t=Array.isArray(e)?e:[];return{shown:t.slice(0,6),extra:Math.max(0,t.length-6)}}(a);return i.qy`
      <div class="inj-col">
        <div class="inj-team">${e}</div>
        ${s.length?s.map(r):i.qy`<div class="inj-none">–</div>`}
        ${o>0?i.qy`<div class="inj-more">${t("team.and_more",{n:o})}</div>`:""}
      </div>`};return i.qy`
    <div class="inj">
      <div class="inj-title">${t("team.injuries")}</div>
      <div class="inj-cols">
        ${o(e.home_team||"",a)}
        ${o(e.away_team||"",s)}
      </div>
    </div>
  `}const ge=i.AH`.pred{margin:10px 12px 4px;padding:10px 12px;background:var(--cl-card-2,rgba(255,255,255,0.03));border-radius:10px;}.pred-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);}.sec-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;}.sec-status{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-text-2,#94a3b8);background:var(--cl-chip-bg,rgba(255,255,255,0.08));border:1px solid var(--cl-chip-border,rgba(255,255,255,0.12));border-radius:5px;padding:2px 6px;white-space:nowrap;}.info{cursor:help;text-decoration:underline dotted;text-underline-offset:2px;text-decoration-color:var(--cl-divider,rgba(148,163,184,0.5));}.pred-bar{display:flex;height:10px;border-radius:5px;overflow:hidden;background:var(--cl-overlay-soft,rgba(0,0,0,0.28));box-shadow:inset 0 0 0 1px var(--cl-bar-outline,rgba(255,255,255,0.14));}.pred-seg{height:100%;}.pred-seg + .pred-seg{box-shadow:inset 1px 0 0 var(--cl-bar-separator,rgba(255,255,255,0.32));}.pred-seg.home{background:var(--cl-accent,#6366f1);}.pred-seg.draw{background:#64748b;}.pred-seg.away{background:var(--cl-live,#ef4444);}.pred-legend{display:flex;justify-content:space-between;margin-top:5px;font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);}.pred-l.home,.pred-l.away{color:var(--cl-text,#e2e8f0);}.pred-l.home::before,.pred-l.away::after{content:'';display:inline-block;width:7px;height:7px;border-radius:50%;vertical-align:middle;position:relative;top:-1px;box-shadow:inset 0 0 0 1px var(--cl-bar-outline,rgba(255,255,255,0.14));}.pred-l.home::before{background:var(--cl-accent,#6366f1);margin-right:6px;}.pred-l.away::after{background:var(--cl-live,#ef4444);margin-left:6px;}.pred-cmp{margin-top:10px;display:flex;flex-direction:column;gap:6px;}.pred-cmp-head{display:flex;justify-content:space-between;align-items:baseline;font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);}.pred-cmp-label{text-transform:uppercase;letter-spacing:0.05em;font-size:9px;}.pred-cmp-v.home,.pred-cmp-v.away{color:var(--cl-text,#e2e8f0);}.pred-cmp-bar{display:flex;height:5px;border-radius:3px;overflow:hidden;margin-top:2px;background:var(--cl-overlay-soft,rgba(0,0,0,0.28));box-shadow:inset 0 0 0 1px var(--cl-bar-outline,rgba(255,255,255,0.14));}.pred-cmp-seg{height:100%;}.pred-cmp-seg + .pred-cmp-seg{box-shadow:inset 1px 0 0 var(--cl-bar-separator,rgba(255,255,255,0.32));}.pred-cmp-seg.home{background:var(--cl-accent,#6366f1);}.pred-cmp-seg.away{background:var(--cl-live,#ef4444);}.pred-xg{margin-top:8px;display:flex;justify-content:space-between;align-items:baseline;gap:8px;font-size:10px;color:var(--cl-text-2,#94a3b8);}.pred-xg-label{font-weight:800;text-transform:uppercase;letter-spacing:0.05em;font-size:9px;}.pred-xg-val{font-weight:700;color:var(--cl-text,#e2e8f0);}.pred-advice{margin-top:8px;font-size:11px;color:var(--cl-text,#e2e8f0);font-style:italic;text-align:center;}.odds{margin:8px 12px 4px;padding:10px 12px;background:var(--cl-card-2,rgba(255,255,255,0.03));border-radius:10px;}.odds-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin-bottom:8px;}.odds-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);}.odds-sub{font-size:9px;font-weight:600;color:var(--cl-text-2,#94a3b8);opacity:0.75;}.odds-sub.live{color:var(--cl-live,#ef4444);opacity:1;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;display:inline-flex;align-items:center;gap:4px;}.odds-sub.live::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--cl-live,#ef4444);animation:odds-live-pulse 1.4s ease-in-out infinite;}@keyframes odds-live-pulse{0%,100%{opacity:1;}50%{opacity:0.35;}}.odds-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}.odds-col{display:flex;flex-direction:column;align-items:center;gap:2px;padding:7px 4px;border-radius:8px;background:var(--cl-card,rgba(255,255,255,0.02));}.odds-sign{font-size:12px;font-weight:900;line-height:1;color:var(--cl-text-2,#94a3b8);}.odds-col.home .odds-sign{color:var(--cl-accent,#6366f1);}.odds-col.away .odds-sign{color:var(--cl-live,#ef4444);}.odds-team{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--cl-text-2,#94a3b8);max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.odds-val{font-size:16px;font-weight:800;color:var(--cl-text,#e2e8f0);font-variant-numeric:tabular-nums;margin-top:1px;}.odds-col.fav{background:var(--cl-accent-soft,rgba(99,102,241,0.10));}.inj{margin:8px 12px 4px;padding:10px 12px;background:var(--cl-card-2,rgba(255,255,255,0.03));border-radius:10px;}.inj-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);margin-bottom:8px;}.inj-cols{display:grid;grid-template-columns:1fr 1fr;gap:12px;}.inj-team{font-size:10px;font-weight:800;color:var(--cl-text,#e2e8f0);margin-bottom:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.inj-row{display:flex;align-items:baseline;gap:5px;padding:2px 0;font-size:11px;}.inj-ic{font-size:10px;flex-shrink:0;}.inj-name{font-weight:600;color:var(--cl-text,#e2e8f0);white-space:nowrap;}.inj-reason{color:var(--cl-text-2,#94a3b8);font-size:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.inj-none{color:var(--cl-text-2,#94a3b8);font-size:11px;}.inj-more{color:var(--cl-text-2,#94a3b8);font-size:10px;font-weight:700;padding-top:2px;opacity:0.85;}`;function me(e,t,a){if(!e)return"";const i=e[`${t}_rank`];if(null!=i){const s=e[`${t}_points`];return`#${i}${null!=s?` · ${s} ${a("team.pts")}`:""}`}const s=e[`${t}_standing_summary`];return s&&"N/A"!==s?s:""}const fe=["delay","drink break","cooling break","video review"];function _e(e){const t=(e.type||"").toLowerCase(),a=(e.type_text||"").toLowerCase();return a.includes("missed")||a.includes("disallow")||a.includes("cancel")?0:!!e.scoring_play||"goal"===t||a.includes("penalty - scored")}const ve={kickoff:"status.kickoff",halftime:"status.halftime","half time":"status.halftime","end of half":"status.halftime","start 2nd half":"status.second_half","second half":"status.second_half","2nd half":"status.second_half","first half":"status.first_half","1st half":"status.first_half","in progress":"status.live",live:"status.live","full time":"status.full_time",final:"status.full_time","end regular time":"status.full_time",end:"status.end","extra time":"status.extra_time","start extra time":"status.extra_time_start","halftime extra time":"status.extra_time_halftime","half time extra time":"status.extra_time_halftime","start 2nd half extra time":"status.extra_time_second_half","2nd half extra time":"status.extra_time_second_half","end extra time":"status.extra_time_end",shootout:"status.shootout","penalty shootout":"status.shootout","start shootout":"status.shootout_start","end match":"status.end_match"};function be(e,t){const a=String(e||"").trim(),i=ve[a.toLowerCase()];return i?t(i):a}function ye(e){return String(e||"").trim().toLowerCase().replace(/[._-]+/g," ").replace(/\s+/g," ").trim()}const xe={en:"Club Friendlies",nl:"Oefenwedstrijd",de:"Vereinsfreundschaftsspiele",es:"Amistosos de clubes",fr:"Matchs amicaux clubs",it:"Amichevoli club",pt:"Amistosos de clubes"},we={en:"Friendlies",nl:"Oefenwedstrijden",de:"Freundschaftsspiele",es:"Amistosos",fr:"Matchs amicaux",it:"Amichevoli",pt:"Amistosos"},$e=new Set(["friendlies clubs","friendlies club","friendly clubs","friendly club","club friendlies","club friendly","friendlies","friendly",...Object.values(xe).map(ye),...Object.values(we).map(ye)]);function ke({competitionName:e,competitionLogo:t,fallbackLogo:a=null,isFriendly:i}={}){return("boolean"==typeof i?i:function(e){const t=ye(e);return t?$e.has(t)||/friendl/.test(t):0}(e))?a:(t&&"N/A"!==t?t:null)||a}function Se(e,t="en"){const a=String(e||"").trim();if(!a||"N/A"===a)return"";const i=ye(a);return["friendlies clubs","friendlies club","friendly clubs","friendly club","club friendlies","club friendly"].includes(i)?xe[t]||xe.en:"friendlies"===i||"friendly"===i?we[t]||we.en:a}function Ce(e){return e?String(e).split(/[-\s]+/).map(Number).filter(e=>Number.isFinite(e)&&e>0):[]}function qe(e){const t=String(e?.position??"").toUpperCase();return"GK"===t||"G"===t}function ze(e,t){if(!e.length)return[];let a=e.findIndex(qe);-1===a&&(a=0);const i=e[a],s=e.filter((e,t)=>t!==a),r=[[i]];let o=0;for(const e of t){if(o>=s.length)break;r.push(s.slice(o,o+e)),o+=e}return o<s.length&&r.push(s.slice(o)),r}function Ae(e,t={}){const a=t.t||(e=>e),s=0!=t.showBench,r=e.lineup_home||[],o=e.lineup_away||[];if(!r.length&&!o.length)return null;const n=Ce(e.formation_home),l=Ce(e.formation_away);if(!n.length&&!l.length)return null;const c=e=>e.some(e=>1==e.starter||0==e.starter),d=c(r)?r.filter(e=>1==e.starter):r,p=c(r)?r.filter(e=>0==e.starter):[],h=c(o)?o.filter(e=>1==e.starter):o,u=c(o)?o.filter(e=>0==e.starter):[],g=ze(d,n),m=ze(h,l),f=g.length>1?[...g.slice(1).reverse(),g[0]]:g,_=(e,t)=>i.qy`
    <div class="pit-row">${e.map(e=>((e,t)=>i.qy`
    <div class="pit-player">
      <div class="pit-dot ${t}${qe(e)?" gk":""}">${e.jersey||""}</div>
      <div class="pit-name">${function(e){const t=e.short_name||e.name||"";return/^[A-Z]\. /.test(t)?t.slice(3):t}(e)}</div>
    </div>
  `)(e,t))}</div>
  `,v=e=>i.qy`
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
        <div class="pit-half">${m.map(e=>_(e,"away"))}</div>
        <div class="pit-mid"></div>
        <div class="pit-half">${f.map(e=>_(e,"home"))}</div>
        ${e.formation_home?i.qy`<div class="pit-fm home">${e.formation_home}</div>`:""}
      </div>
      ${s&&(p.length||u.length)?i.qy`
        <div class="pit-bench">
          <div>
            <div class="pit-bench-title">${e.home_team||a("generic.home")}</div>
            ${p.map(v)}
          </div>
          <div>
            <div class="pit-bench-title">${e.away_team||a("generic.away")}</div>
            ${u.map(v)}
          </div>
        </div>
      `:""}
    </div>
  `}const Te=i.AH`.pit-outer{}.pit-field{position:relative;background-color:#2d7d30;background-image:repeating-linear-gradient(180deg,transparent,transparent 36px,rgba(0,0,0,0.06) 36px,rgba(0,0,0,0.06) 72px);border-radius:6px;margin:12px;overflow:hidden;}.pit-lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;}.pit-fm{position:absolute;z-index:1;font-size:9px;font-weight:800;letter-spacing:0.04em;color:rgba(255,255,255,0.6);padding:3px 6px;}.pit-fm.away{top:4px;right:6px;}.pit-fm.home{bottom:4px;left:6px;}.pit-half{display:flex;flex-direction:column;gap:10px;padding:10px 8px;}.pit-mid{height:24px;}.pit-row{display:flex;justify-content:space-around;align-items:flex-start;}.pit-player{display:flex;flex-direction:column;align-items:center;gap:2px;min-width:34px;}.pit-dot{width:30px;height:30px;border-radius:50%;background:var(--cl-accent,#6366f1);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:white;box-shadow:0 2px 6px rgba(0,0,0,0.5);}.pit-dot.away{background:#374151;}.pit-dot.gk{background:#d946ef;}.pit-dot.away.gk{background:#6b7280;}.pit-name{font-size:8px;font-weight:600;color:rgba(255,255,255,0.95);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:54px;text-shadow:0 1px 3px rgba(0,0,0,0.9);}.pit-bench{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:12px 16px;border-top:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.pit-bench-title{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);margin-bottom:6px;}.pit-bench-p{display:flex;align-items:center;gap:5px;font-size:11px;padding:3px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.04));}.pit-bench-num{font-size:10px;font-weight:800;color:var(--cl-accent,#6366f1);min-width:16px;}`;function Ee(e){return 1==e?.detail_loaded||Boolean(e?.key_events?.length||e?.lineup_home?.length||e?.lineup_away?.length||Object.keys(e?.home_statistics||{}).length||e?.momentum?.length||e?.shotmap?.length)}async function Pe(e,t,a){const i=t?.detail_service;if(!i||!a?.event_id||Ee(a))return 0;const[s,r]=String(i).split(".",2);if(!s||!r)return 0;const o={...t.detail_service_data||{},match_id:String(a.event_id)};if("soccer_live"===s&&"function"==typeof e?.callWS){const t=await e.callWS({type:"call_service",domain:s,service:r,service_data:o,return_response:1}),i=t?.response??t?.service_response??t,n=i?.match;return n&&"object"==typeof n&&Object.assign(a,n),Boolean(n)}return"function"!=typeof e?.callService?0:(await e.callService(s,r,o),1)}function je(e,t){return t?String(e?.next_match?.event_id)===String(t)?e.next_match:(e?.matches||[]).find(e=>String(e.event_id)===String(t))||null:null}const Me=new WeakMap;function Ne(e,t,a=12e4){const i=t?.event_uid;if(!i)return 1;const s=Date.now(),r=Me.get(e)||new Map;for(const[e,t]of r)s-t>a&&r.delete(e);return r.has(i)?0:(r.set(i,s),Me.set(e,r),1)}function De(e,t,a){if("soccer_live_goal"===t)return{message:`${e("event.goal").toUpperCase()}! ${a.player||""} · ${a.home_team} ${a.home_score} - ${a.away_score} ${a.away_team}`,variant:"goal"};if("soccer_live_goal_cancelled"===t)return{message:`↩ ${e("event.goal_cancelled")} · ${a.home_team} ${a.home_score} - ${a.away_score} ${a.away_team}`,variant:"red"};if("soccer_live_yellow_card"===t||"soccer_live_red_card"===t){const i=t.includes("red");return{message:`${i?"🟥":"🟨"} ${e(i?"event.red_card":"event.yellow_card")} · ${a.player||""}${a.minute?` (${a.minute}')`:""}`,variant:i?"red":"yellow"}}return"soccer_live_match_finished"===t?{message:`${e("status.finished")}! ${a.home_team} ${a.home_score} - ${a.away_score} ${a.away_team}`,variant:"finished"}:t.endsWith("_changed")?{message:`🗓 ${e("event.fixture_changed")} · ${a.home_team} – ${a.away_team}`,variant:"yellow"}:null}function Le(e,t=10){return i.qy`<style>
    .${e}-section-lineup{background:rgba(16,185,129,.08);border-color:#10b981}
    .${e}-section-timeline{background:rgba(251,191,36,.08);border-color:#fbbf24}
    .${e}-section-title.lineup{color:#10b981}
    .${e}-section-title.timeline{color:#fbbf24}
    .${e}-lineup-team{margin-bottom:${t}px}
    .${e}-lineup-team:last-child{margin-bottom:0}
    .${e}-lineup-header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px}
    .${e}-lineup-header span:first-child{font-size:12px;font-weight:800;color:#fff}
    .${e}-formation{font-size:10px;font-weight:700;color:var(--cl-accent,#6366f1);letter-spacing:.1em}
    .${e}-lineup-players{font-size:12px;color:#cbd5e1;line-height:1.7}
    .${e}-player{display:inline-block;padding:2px 8px;background:rgba(255,255,255,.05);border-radius:6px;margin:2px}
    .${e}-jersey{color:#fbbf24;font-weight:800}
    .${e}-timeline-list{margin:0;padding:0;list-style:none}
    .${e}-timeline-item{display:flex;gap:8px;align-items:flex-start;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:12px;color:#cbd5e1}
    .${e}-timeline-item:last-child{border-bottom:0}
    .${e}-tl-clock{min-width:32px;text-align:right;font-size:11px;font-weight:700;color:#94a3b8;font-variant-numeric:tabular-nums;padding-top:2px;flex-shrink:0}
    .${e}-tl-badge{display:inline-block;font-size:8px;font-weight:800;padding:1px 5px;border-radius:3px;text-transform:uppercase;letter-spacing:.04em;flex-shrink:0;line-height:15px;white-space:nowrap;margin-top:1px}
    .${e}-tl-badge.goal{background:rgba(99,102,241,.18);color:#6366f1}
    .${e}-tl-badge.yellow{background:rgba(245,158,11,.18);color:#f59e0b}
    .${e}-tl-badge.red{background:rgba(239,68,68,.18);color:#ef4444}
    .${e}-tl-badge.sub{background:rgba(148,163,184,.12);color:#94a3b8}
    .${e}-tl-badge.meta{background:transparent;color:#94a3b8;font-size:14px;padding:0 4px;letter-spacing:0}
    .${e}-tl-text strong{color:#fff}
    .${e}-tl-team{color:#94a3b8;font-size:11px}
  </style>`}function Fe(e){const t=String(e?.type||"").toLowerCase(),a=String(e?.type_text||"").toLowerCase();return _e(e)?"goal":a.includes("yellow")?"yellow":a.includes("red card")?"red":"substitution"===t||a.includes("substitut")?"sub":"meta"}function Ve(e){return(e?.key_events||[]).filter(e=>{const t=String(e?.type_text||"").toLowerCase();return!fe.some(e=>t.includes(e))})}function Ge(e,t){const a=(e?.athletes||[]).filter(Boolean),i=Fe(e);if("sub"===i){const t=e?.assist||a[1]||"",i=e?.player||a[0]||"";if(t&&i)return`▲ ${t} ▼ ${i}`}let s=a.length?a.join(", "):ve[String(e?.type_text||"").toLowerCase()]?t(ve[String(e?.type_text||"").toLowerCase()]):e?.type_text||e?.short_text||"";if("goal"===i){const a=String(e?.type_text||"").toLowerCase();a.includes("own goal")||a.includes("own-goal")?s+=` (${t("event.own_goal")})`:a.includes("penalty")&&(s+=` (${t("event.penalty")})`)}return s}function Oe(e,{translate:t,prefix:a="mp"}){const s=Ve(e);return s.length?i.qy`
    <div class="${a}-section ${a}-section-timeline">
      <h5 class="${a}-section-title timeline">${t("popup.timeline")}</h5>
      <ul class="${a}-timeline-list">
        ${s.map(e=>{const s=Fe(e);return i.qy`
            <li class="${a}-timeline-item">
              <span class="${a}-tl-clock">${e.clock||e.minute||""}</span>
              ${function(e,t,a){const s={goal:"event.goal",yellow:"event.yellow_card",red:"event.red_card",sub:"event.substitution"};return s[e]?i.qy`<span class="${a}-tl-badge ${e}">${t(s[e])}</span>`:i.qy`<span class="${a}-tl-badge meta">·</span>`}(s,t,a)}
              <span class="${a}-tl-text">
                <strong>${Ge(e,t)}</strong>
                ${e.team?i.qy`<br><span class="${a}-tl-team">${e.team}</span>`:""}
              </span>
            </li>`})}
      </ul>
    </div>`:""}function Be(e,{translate:t,prefix:a="mp",startersOnly:s=0}){const r=e?.lineup_home||[],o=e?.lineup_away||[];if(!r.length&&!o.length)return"";const n=Ae(e,{t});if(n)return i.qy`
    <div class="${a}-section ${a}-section-lineup">
      <h5 class="${a}-section-title lineup">${t("popup.lineups")}</h5>
      ${n}
    </div>`;const l=(e,r,o)=>{const{starters:n,substitutes:l}=function(e,t=0){const a=Array.isArray(e)?e:[],i=a.some(e=>1==e.starter||0==e.starter);return{starters:i?a.filter(e=>1==e.starter):a,substitutes:t||!i?[]:a.filter(e=>0==e.starter)}}(e,s);if(!n.length)return"";const c=e=>i.qy`<span class="${a}-player">${e.jersey?i.qy`<strong class="${a}-jersey">${e.jersey}</strong> `:""}${e.short_name||e.name||""}</span>`;return i.qy`
      <div class="${a}-lineup-team">
        <div class="${a}-lineup-header">
          <span>${o||""}</span>
          ${r?i.qy`<span class="${a}-formation">${r}</span>`:""}
        </div>
        <div class="${a}-lineup-players">${n.map(c)}</div>
        ${l.length?i.qy`
          <div class="${a}-lineup-header"><span>${t("popup.substitutes")}</span></div>
          <div class="${a}-lineup-players">${l.map(c)}</div>
        `:""}
      </div>`};return i.qy`
    <div class="${a}-section ${a}-section-lineup">
      <h5 class="${a}-section-title lineup">${t("popup.lineups")}</h5>
      ${l(r,e.formation_home,e.home_team)}
      ${l(o,e.formation_away,e.away_team)}
    </div>`}class He extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String},_weatherBadge:{type:Object},_cachedData:{type:Object},showEventToasts:{type:Boolean},myTeam:{type:String},showPreviousMatches:{type:Boolean},showFormTrend:{type:Boolean},compact:{type:Boolean}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e);const t=["big","huge"].includes(e.score_size)?e.score_size:"normal";this.setAttribute("data-score",t),this._isLoading=1,this._loadingStarted=Date.now(),this._lastWeatherVenue=null,this.showPopup=0,this.activeMatch=null,this.showEventToasts=1==e.show_event_toasts,this.myTeam=(e.my_team||"").toLowerCase(),this.showPreviousMatches=1==e.show_previous_matches,this.showFormTrend=1==e.show_form_trend,this.compact=1==e.compact,this._toastMessage="",this._toastVisible=0,this._toastVariant="goal",this._toastTimer=null,this._animationTimers||(this._animationTimers=[])}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_translatePhase(e){return e?{"regular-season":this._t("phase.regular_season"),"regular season":this._t("phase.regular_season"),"group-stage":this._t("phase.group_stage"),"group stage":this._t("phase.group_stage"),playoffs:this._t("phase.playoffs")}[String(e).toLowerCase()]||e:""}_shouldShowPhase(e){return e?"regular-season"===String(e).toLowerCase()?0:1:0}connectedCallback(){super.connectedCallback(),this._subscribeToEvents(),this._countdownInterval=setInterval(()=>this.requestUpdate(),3e4),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._countdownInterval),this._countdownInterval=null,clearTimeout(this._loadingTimer),this._eventSubscriptionGeneration=(this._eventSubscriptionGeneration||0)+1,this._eventSubscriptionPromise=null,this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach(e=>{"function"==typeof e&&e()}),this._eventSubscriptions=[]),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null),this._removePopupPortal(),clearTimeout(this._toastTimer),this._toastTimer=null,this._animationTimers&&(this._animationTimers.forEach(e=>clearTimeout(e)),this._animationTimers=[])}_subscribeToEvents(){if(!this.hass||!this.hass.connection)return;if(this._eventSubscriptionPromise||this._eventSubscriptions?.length)return;const e=this._eventSubscriptionGeneration||0,t=this._handleSoccerLiveEvent.bind(this),a=Promise.allSettled(["soccer_live_goal","soccer_live_goal_cancelled","soccer_live_yellow_card","soccer_live_red_card","soccer_live_kickoff_changed","soccer_live_venue_changed","soccer_live_opponent_changed"].map(e=>this.hass.connection.subscribeEvents(t,e)));this._eventSubscriptionPromise=a,a.then(t=>{const a=t.filter(e=>"fulfilled"===e.status&&"function"==typeof e.value).map(e=>e.value);if((this._eventSubscriptionGeneration||0)!==e||!this.isConnected)return void a.forEach(e=>e());const i=t.filter(e=>"rejected"===e.status);i.length>0?(a.forEach(e=>e()),this._eventSubscriptions=[],i.forEach(e=>console.warn("Soccer Live Team subscription failed:",e.reason))):this._eventSubscriptions=a}).finally(()=>{this._eventSubscriptionPromise===a&&(this._eventSubscriptionPromise=null)})}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return 0;const t=this.hass.states[this._config.entity];if(!t)return 0;const a=t.attributes.matches||[];if(0===a.length)return 0;const i=a[0];return i.home_team===e.home_team&&i.away_team===e.away_team}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;if(this._eventBelongsToThisCard(a)&&Ne(this,a)&&this.showEventToasts)if("soccer_live_goal"===t){const e=a.team===a.home_team?"home":"away";requestAnimationFrame(()=>this._triggerGoalCelebration(e,a))}else this._showEventToast(t,a)}_showEventToast(e,t){const a=De(e=>this._t(e),e,t);a&&(this._toastMessage=a.message,this._toastVariant=a.variant,this._toastVisible=1,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this._toastVisible=0,this.requestUpdate()},4e3),this.requestUpdate())}_triggerGoalCelebration(e,t){const a=this.shadowRoot&&this.shadowRoot.querySelector("ha-card");if(!a)return;a.querySelectorAll(".confetti, .goal-banner, .goal-flash-overlay").forEach(e=>e.remove()),a.classList.remove("goal-flash"),a.offsetWidth,a.classList.add("goal-flash"),this._animationTimers.push(setTimeout(()=>a.classList.remove("goal-flash"),1700));const i=document.createElement("div");i.className="goal-flash-overlay",a.appendChild(i),this._animationTimers.push(setTimeout(()=>i.remove(),1e3));const s=document.createElement("div");s.className="goal-banner";const r=document.createElement("div");r.className="goal-banner-text",r.textContent=(this._t("event.goal")||"GOAL")+"!",s.appendChild(r),a.appendChild(s),this._animationTimers.push(setTimeout(()=>s.remove(),1700));const o=a.querySelector(".score-numbers");o&&(o.classList.remove("goal-scored"),o.offsetWidth,o.classList.add("goal-scored"),this._animationTimers.push(setTimeout(()=>o.classList.remove("goal-scored"),1300)));const n=a.querySelectorAll(".team-side .team-logo-big"),l="away"===e?n[1]:n[0];l&&(l.classList.remove("scorer-bounce"),l.offsetWidth,l.classList.add("scorer-bounce"),this._animationTimers.push(setTimeout(()=>l.classList.remove("scorer-bounce"),1300))),navigator.vibrate&&navigator.vibrate([180,80,180,80,280]),this._animationTimers.push(setTimeout(()=>this._showEventToast("soccer_live_goal",t),600));const c=["#ec4899","#6366f1","#06b6d4","#fbbf24","#10b981","#ef4444"],d=["⚽","🎉","✨","🔥","⭐"];for(let e=0;e<36;e++){const e=document.createElement("div");e.className="confetti",Math.random()>.55?(e.textContent=d[Math.floor(Math.random()*d.length)],e.style.fontSize=14+10*Math.random()+"px",e.style.background="transparent"):(e.style.background=c[Math.floor(Math.random()*c.length)],e.style.borderRadius=Math.random()>.5?"50%":"2px");const t=380*(Math.random()-.5)+"px",i=240*Math.random()+100+"px";e.style.setProperty("--dx",t),e.style.setProperty("--dy",i),e.style.animationDelay=.3*Math.random()+"s",a.appendChild(e),this._animationTimers.push(setTimeout(()=>e.remove(),2e3))}}_parseMatchDate(e){return(0,s.n1)(e)}_liveCountdown(e){if(!e||"pre"!==e.state)return null;const t=this._parseMatchDate(e.date);if(!t)return null;const a=t-new Date;if(a<=0||a>1728e5)return null;const i=Math.floor(a/6e4);if(i<1)return this._t("time.now");if(i<60)return this._t("time.in_n_min",{n:i});const s=Math.floor(i/60);return this._t("time.in_n_h",{n:s})}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-team-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_",show_event_toasts:0}}async showDetails(e){this.activeMatch=e,this.showPopup=1;const t=this.hass?.states?.[this._config.entity]?.attributes;if(t?.detail_service&&!Ee(e))try{await Pe(this.hass,t,e)}catch(e){}finally{this.requestUpdate()}}closePopup(){this.showPopup=0}separateEvents(e){const t=[],a=[],i=[];return e.forEach(e=>{const s=String(e||"");s.includes("Goal")&&!s.includes("Disallowed")||s.includes("Penalty - Scored")?t.push(this.formatMatchEvent(s)):s.includes("Yellow Card")?a.push(this.formatMatchEvent(s)):s.includes("Red Card")&&i.push(this.formatMatchEvent(s))}),{goals:t,yellowCards:a,redCards:i}}formatMatchEvent(e){const t=e=>this._t(e);let a=String(e||"").trim();a=a.replace(/^Goal\s*-\s*/i,"").replace(/^Yellow Card\s*-\s*/i,"").replace(/^Red Card\s*-\s*/i,"").replace(/^Penalty - Scored\s*-\s*/i,`${t("event.penalty")} - `).replace(/^Header\s*-\s*/i,`${t("event.header")} - `).replace(/^Shot\s*-\s*/i,`${t("event.shot")} - `).replace(/^Free-kick\s*-\s*/i,`${t("event.free_kick")} - `).replace(/^Penalty\s*-\s*/i,`${t("event.penalty")} - `),a=a.replace(/^([^:]+):\s*/,"$1 ");const i=[t("event.header"),t("event.shot"),t("event.penalty"),t("event.free_kick")].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return a=a.replace(new RegExp(`^(${i.join("|")})\\s*-\\s*(.+)$`,"i"),(e,t,a)=>`${a} (${t.toLowerCase()})`),a=a.replace(/\bN\/A\b/g,t("generic.unknown")),a}_renderStatusBadge(e){const t=e.state;return"in"===t?i.qy`<span class="status-badge live"><span class="dot"></span>${this._t("status.live")}</span>`:"post"===t?i.qy`<span class="status-badge finished">${this._t("status.finished")}</span>`:i.qy`<span class="status-badge scheduled">${e.date||this._t("status.scheduled")}</span>`}_renderClock(e){const t=e.state;if("in"===t){const t=e.status_detail&&"N/A"!==e.status_detail?e.status_detail:"",a=e.clock&&"N/A"!==e.clock?e.clock:"",s=t||e.status||"",r=ve[String(s).trim().toLowerCase()],o=a||(r?this._t(r):s);return i.qy`<div class="clock"><span class="dot"></span>${o}</div>`}if("post"===t)return i.qy`<div class="clock finished">${this._t("status.full_time")}</div>`;const a=this._liveCountdown(e);return i.qy`<div class="clock upcoming">${a||e.date||""}</div>`}_renderRecord(e){if(!e||"N/A"===e)return"";const t=String(e).split("-");return 3===t.length?t.every(e=>0===parseInt(e))?"":i.qy`<div class="record">
        <span class="rec rec-w">${t[0]}${this._t("form.W")}</span>
        <span class="rec rec-d">${t[1]}${this._t("form.D")}</span>
        <span class="rec rec-l">${t[2]}${this._t("form.L")}</span>
      </div>`:i.qy`<div class="record"><span class="rec">${e}</span></div>`}_renderStandingSummary(e,t){const a=me(e,t,e=>this._t(e));return a?i.qy`<div class="standing-summary">${a}</div>`:""}_hexToRgb(e){if(!e||"N/A"===e)return null;const t=String(e).replace("#","");return 6!==t.length?null:`${parseInt(t.slice(0,2),16)},${parseInt(t.slice(2,4),16)},${parseInt(t.slice(4,6),16)}`}_renderTopScorer(e){if(!e||!e.name)return"";const t=e.short_name||e.name,a=this._t("team.top_scorer");return i.qy`
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
    `}_renderPrediction(e){return pe(e,{t:e=>this._t(e),lang:(0,s.$c)(this.hass,this._config),showDetails:0!=this._config.show_prediction_details})}_renderOdds(e){return he(e,{t:(e,t)=>this._t(e,t)})}_renderInjuries(e){return ue(e,{t:(e,t)=>this._t(e,t)})}_renderStatsRow(e){const t=e.home_statistics||{},a=e.away_statistics||{},s=[],r=e=>{const t=parseFloat(e);return isNaN(t)?null:t},o=(e,i,o,n="")=>{const l=r(t[i]),c=r(a[o]);null!==l&&null!==c&&s.push({label:e,home:t[i],away:a[o],hNum:l,aNum:c,suffix:n})};return o(this._t("team.possession"),"possessionPct","possessionPct","%"),o(this._t("team.xg"),"expectedGoals","expectedGoals"),o(this._t("team.shots"),"totalShots","totalShots"),o(this._t("team.on_target"),"shotsOnTarget","shotsOnTarget"),0===s.length?"":i.qy`
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
    `}render(){if(A(this,this._config),!this.hass||!this._config)return H(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];if(this.compact=(0,q.Oc)(this._config,t?.attributes?.card_defaults),!t){const t=Z.get(e);if(!t||!t.data.matches)return R("⚠️",this._t("ui.entity_not_found"),`${this._t("ui.entity_not_found")}: ${e}`,this._t("ui.check_entity_config"));this._cachedData=t.data}if(t&&"unavailable"===t.state){const t=Z.get(e);if(!t||!t.data.matches)return R("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));this._cachedData=t.data}if(t&&this._isLoading)return Date.now()-this._loadingStarted>1e4?R("⏱",this._t("ui.loading_timeout"),`${this._t("ui.entity_not_responding")}: ${this._config.entity}`,this._t("ui.check_integration")):H(this._t("ui.loading"));const a=t&&"unavailable"!==t.state?t.attributes:this._cachedData;if(!a||!a.matches||0===a.matches.length)return K(a,e=>this._t(e),()=>{const e=this._config.entity||"";return e.includes("soccerlive_next")||e.includes("soccerlive_all_mixed")||e.includes("soccer_live_next")||e.includes("soccer_live_all_mixed")?U("📅",this._t("ui.off_season"),this._t("team.off_season")):R("⚠️",this._t("ui.wrong_entity_type"),e,this._t("ui.wrong_entity_type_hint"))});const r=a.matches[0],o=(r.league_name&&"N/A"!==r.league_name?r.league_name:"")||"",n=function(e,t){const a=Array.isArray(e)?e:[],i=t&&"N/A"!==t?String(t).toLowerCase():"";return(i?a.find(e=>e&&e.name&&String(e.name).toLowerCase()===i):null)||(1===a.length?a[0]:null)}(a.league_info,o),l=ke({competitionName:o||n&&n.name||"",competitionLogo:r.league_logo&&"N/A"!==r.league_logo?r.league_logo:n&&n.logo_href,fallbackLogo:null,isFriendly:r.is_friendly}),c="in"===r.state,d="post"===r.state,p=c||d,h=(0,s.$c)(this.hass,this._config),u=Se(r.league_name&&"N/A"!==r.league_name?r.league_name:n&&n.abbreviation&&"N/A"!==n.abbreviation?n.abbreviation:r.season_info&&"N/A"!==r.season_info&&this._shouldShowPhase(r.season_info)?this._translatePhase(r.season_info):"",h),g=this._hexToRgb(r.home_color),m=this._hexToRgb(r.away_color),f=g||m?`background:\n      radial-gradient(ellipse at 0% 0%, rgba(${g||"99,102,241"},0.18), transparent 55%),\n      radial-gradient(ellipse at 100% 100%, rgba(${m||"236,72,153"},0.18), transparent 55%)`:"",_=this.myTeam||(a.team_name||"").toLowerCase(),v=_&&r.home_team&&r.home_team.toLowerCase().includes(_),b=_&&r.away_team&&r.away_team.toLowerCase().includes(_);return i.qy`
      <ha-card class="${c?"live":""} ${this.compact?"compact":""}">
        <div class="bg-logos">
          ${r.home_logo?i.qy`<div class="bg-logo home"><img src="${r.home_logo}" alt="" loading="lazy"></div>`:""}
          ${r.away_logo?i.qy`<div class="bg-logo away"><img src="${r.away_logo}" alt="" loading="lazy"></div>`:""}
        </div>
        <div class="hero-bg" style="${f}"></div>

        ${this.showEventToasts&&this._toastVisible?i.qy`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        <div class="top-bar">
          <div class="competition">
            <span class="comp-icon">
              ${l?i.qy`<img src="${l}" alt="" />`:"⚽"}
            </span>
            <span class="comp-name">${u||" "}</span>
          </div>
          ${this._renderStatusBadge(r)}
        </div>

        <div class="scoreboard">
          <div class="team-side home">
            <div class="team-logo-wrap">
              ${r.home_logo?i.qy`<img class="team-logo-big" src="${r.home_logo}" alt="${r.home_team}" />`:i.qy`<div class="team-logo-fallback">${r.home_abbrev||"?"}</div>`}
            </div>
            <div class="team-name-big ${v?"my-team":""}">${r.home_team}</div>
            ${c?"":this._renderStandingSummary(r,"home")}
            ${this._renderRecord(r.home_record)}
            ${c?this._renderForm(r.home_form):this._renderForm(r.last_five_home)||this._renderForm(r.home_form)}
            ${c?"":this._renderTopScorer(r.home_top_scorer)}
          </div>

          <div class="score-center">
            ${p?i.qy`<div class="score-numbers">${S(r.home_score)} <span class="dash">-</span> ${S(r.away_score)}</div>`:i.qy`<div class="score-vs">${this._t("match.vs")}</div>`}
            ${this._renderClock(r)}
          </div>

          <div class="team-side away">
            <div class="team-logo-wrap">
              ${r.away_logo?i.qy`<img class="team-logo-big" src="${r.away_logo}" alt="${r.away_team}" />`:i.qy`<div class="team-logo-fallback">${r.away_abbrev||"?"}</div>`}
            </div>
            <div class="team-name-big ${b?"my-team":""}">${r.away_team}</div>
            ${c?"":this._renderStandingSummary(r,"away")}
            ${this._renderRecord(r.away_record)}
            ${c?this._renderForm(r.away_form):this._renderForm(r.last_five_away)||this._renderForm(r.away_form)}
            ${c?"":this._renderTopScorer(r.away_top_scorer)}
          </div>
        </div>

        ${c?this._renderStatsRow(r):""}

        ${ae(r,{lang:(0,s.$c)(this.hass,this._config),t:e=>this._t(e),weatherBadge:0!=this._config.show_weather&&this._weatherBadge||null,showDate:!p,hideBroadcasts:1==this._config.hide_broadcasts})}
        ${p?i.qy`
          <div class="meta-row details-row">
            <button class="info-btn" @click="${()=>this.showDetails(r)}">${this._t("team.details")} ›</button>
          </div>
        `:""}

        ${this.compact||0==this._config.show_prediction?"":this._renderPrediction(r)}
        ${this.compact||0==this._config.show_odds?"":this._renderOdds(r)}
        ${this.compact||0==this._config.show_injuries?"":this._renderInjuries(r)}
        ${!this.compact&&this.showFormTrend?this._renderFormTrend(a.previous_matches,a.matches,this.myTeam||a.team_name):""}
        ${!this.compact&&this.showPreviousMatches?this._renderPreviousMatches(a.previous_matches,a.matches,this.myTeam||a.team_name):""}
        ${this.compact?"":this._renderH2H(r.head_to_head,r.home_team)}
        ${this.compact?"":this._renderUpcomingList(a.upcoming_matches,a.matches,this.myTeam||a.team_name)}
      </ha-card>
    `}_relativeDate(e){if(!e)return"";const t=e.split(" "),[a,i,r]=(t[0]||"").split(/[-\/]/).map(Number);if(!a||!i||!r)return t[0]||"";const o=new Date(r,i-1,a),n=new Date;n.setHours(0,0,0,0);const l=Math.round((o-n)/864e5);if(1===l)return this._t("time.tomorrow");if(l<=6&&l>1)return this._t("time.in_n_d",{n:l});(0,s.$c)(this.hass,this._config);const c=`month.${i}`;return`${a} ${this._t(c)}`}_teamBadge(e,t,a){const s=(0,C.GD)(t)||"rgba(var(--cl-accent-rgb),0.7)",r=e=>e&&"N/A"!==e?e:"",o=r(e)||r(a)||"?";return i.qy`<span class="abbrev-badge" style="--team-c:${s}"><span class="abbrev-name">${o}</span></span>`}_renderFormTrend(e,t,a){const s=(a||"").toLowerCase(),r=e&&e.length>0?e:(t||[]).filter(e=>"post"===e.state).slice(-10).reverse();if(0===r.length)return"";const o=r.map(e=>{const t=e.home_team&&e.home_team.toLowerCase().includes(s),a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)?null:a===i?"D":t&&a>i||!t&&i>a?"W":"L"}).filter(Boolean).reverse();if(o.length<2)return"";const n=o.filter(e=>"W"===e).length,l=o.filter(e=>"D"===e).length,c=o.filter(e=>"L"===e).length;return i.qy`
      <div class="form-trend-section">
        <div class="upcoming-list-title">${this._t("team.form_trend")||"Seizoenvorm"}</div>
        <div class="form-trend-row">
          <div class="form-trend-dots">
            ${o.map(e=>i.qy`<span class="ft-dot ${e.toLowerCase()}">${this._t("form."+e)}</span>`)}
          </div>
          <span class="form-trend-summary">${n}${this._t("form.W")} ${l}${this._t("form.D")} ${c}${this._t("form.L")}</span>
        </div>
      </div>
    `}_renderPreviousMatches(e,t,a){const r=e&&e.length>0?e.filter(e=>"post"===e.state||!e.state):t?t.filter(e=>"post"===e.state).slice(-3).reverse():[];if(0===r.length)return"";const o=(a||"").toLowerCase();return i.qy`
      <div class="upcoming-list">
        <div class="upcoming-list-title">${this._t("team.previous_matches")}</div>
        ${r.map(e=>{const t=o&&e.home_team&&e.home_team.toLowerCase().includes(o),a=o&&e.away_team&&e.away_team.toLowerCase().includes(o),r=parseInt(e.home_score),n=parseInt(e.away_score),l=!isNaN(r)&&!isNaN(n)&&r>n,c=!isNaN(r)&&!isNaN(n)&&n>r,d=t||a?t&&l||a&&c?"tw":t&&c||a&&l?"tl":"draw":l?"home-win":c?"away-win":"draw",p=e=>e&&"N/A"!==e?e:"",h=Se(p(e.league_abbrev)||p(e.league_abbreviation)||p(e.competition_abbreviation)||p(e.league_name),(0,s.$c)(this.hass,this._config));return i.qy`
            <div class="upcoming-row">
              <span class="upcoming-date">
                ${(0,s.iS)(e.date,(0,s.$c)(this.hass,this._config))||(e.date?e.date.split(" ")[0]:"")}
                <span class="upcoming-date-day prev-comp-label">${h}</span>
              </span>
              <span class="upcoming-team home-side ${t?"tracked":""}">
                ${e.home_logo?i.qy`<img src="${e.home_logo}" alt="" />`:""}
                ${this._teamBadge(e.home_abbrev,e.home_color,e.home_team)}
              </span>
              <span class="prev-score ${d}">
                ${S(e.home_score,"-")}-${S(e.away_score,"-")}
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
        ${r.map(e=>{const t=o&&e.home_team&&e.home_team.toLowerCase().includes(o),a=o&&e.away_team&&e.away_team.toLowerCase().includes(o),r="in"===e.state,n=e.head_to_head&&e.head_to_head.length>0,l=e=>e&&"N/A"!==e?e:"",c=t?l(e.away_form):a?l(e.home_form):"",d=Se(e.league_name&&"N/A"!==e.league_name?e.league_name:"",(0,s.$c)(this.hass,this._config));return i.qy`
            <div class="upcoming-row ${n?"clickable":""}"
                 @click="${n?()=>this.showDetails(e):null}">
              <span class="upcoming-date">
                ${e.date&&e.date.split(" ")[1]||""}
                <span class="upcoming-date-day">${this._relativeDate(e.date)}</span>
                ${d?i.qy`<span class="upl-comp-label">${d}</span>`:""}
              </span>
              <span class="upcoming-team home-side ${t?"tracked":""}">
                ${e.home_logo?i.qy`<img src="${e.home_logo}" alt="" />`:""}
                ${this._teamBadge(e.home_abbrev,e.home_color,e.home_team)}
              </span>
              ${r?i.qy`<span class="upcoming-live-score">${S(e.home_score)}<span class="live-dot">●</span>${S(e.away_score)}</span>`:i.qy`<span class="upcoming-vs">-</span>`}
              <span class="upcoming-team away-side ${a?"tracked":""}">
                ${this._teamBadge(e.away_abbrev,e.away_color,e.away_team)}
                ${e.away_logo?i.qy`<img src="${e.away_logo}" alt="" />`:""}
              </span>
              ${p=c,h=t?"side-right":"side-left",p?i.qy`<div class="upl-opp-form ${h}">
              ${p.split("").slice(-5).map(e=>{const t="W"===e?"w":"L"===e||"V"===e?"l":"d";return i.qy`<span class="upl-fd ${t}"></span>`})}
            </div>`:""}
            </div>
          `;var p,h})}
      </div>
    `}_renderH2H(e,t){if(!e||0===e.length)return"";const a=(t||"").toLowerCase();let r=0,o=0,n=0;e.forEach(e=>{const t=parseInt(e.home_score)||0,i=parseInt(e.away_score)||0;t!==i?((e.home_team||"").toLowerCase().includes(a)||a.includes((e.home_team||"").toLowerCase().split(" ")[0])?t>i:i>t)?r++:n++:o++});const l=r+o+n,c=l?Math.round(r/l*100):33,d=l?Math.round(o/l*100):34,p=100-c-d;return i.qy`
      <div class="h2h-section">
        <div class="upcoming-list-title">${this._t("team.h2h")}</div>
        <div class="h2h-summary">
          <span class="h2h-summary-num home">${r}</span>
          <span class="h2h-summary-label">${this._t("match.draw")||"D"} ${o}</span>
          <span class="h2h-summary-num away">${n}</span>
        </div>
        <div class="h2h-bar">
          <div class="h2h-bar-seg home" style="width:${c}%"></div>
          <div class="h2h-bar-seg draw" style="width:${d}%"></div>
          <div class="h2h-bar-seg away" style="width:${p}%"></div>
        </div>
        ${e.slice(0,5).map(e=>{const t=(0,s.iS)(e.date,(0,s.$c)(this.hass,this._config)),a=parseInt(e.home_score)>parseInt(e.away_score),r=parseInt(e.away_score)>parseInt(e.home_score);return i.qy`
            <div class="h2h-row">
              <span class="h2h-date">${t}</span>
              <span class="h2h-team ${a?"winner":""}">${e.home_team||""}</span>
              <span class="h2h-score">${S(e.home_score,"-")} - ${S(e.away_score,"-")}</span>
              <span class="h2h-team away ${r?"winner":""}">${e.away_team||""}</span>
            </div>
          `})}
      </div>
    `}updated(e){if((e.has("showPopup")||e.has("activeMatch"))&&(this.showPopup?(this._renderPopupPortal(),this._escHandler||(this._escHandler=e=>{"Escape"===e.key&&(this.showPopup=0)},document.addEventListener("keydown",this._escHandler))):(this._removePopupPortal(),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null))),e.has("activeMatch")&&this.activeMatch&&this._loadWeather(this.activeMatch.venue,this.activeMatch.venue_lat,this.activeMatch.venue_lon,this.activeMatch.date_iso),e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents(),e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];if(this.activeMatch&&e?.attributes){const t=je(e.attributes,this.activeMatch.event_id);t&&t!==this.activeMatch&&(this.activeMatch=t)}if(e&&"unavailable"!==e.state&&(this._isLoading=0,Z.set(this._config.entity,e.attributes)),e&&e.attributes.matches&&e.attributes.matches[0]){const t=e.attributes.matches[0];t.venue!==this._lastWeatherVenue&&this._loadWeather(t.venue,t.venue_lat,t.venue_lon,t.date_iso)}}}_copyPopupThemeVars(e){const t=getComputedStyle(this);["--cl-bg","--cl-text","--cl-text-2","--cl-divider","--cl-accent","--cl-accent-2"].forEach(a=>{const i=t.getPropertyValue(a);i&&e.style.setProperty(a,i)})}_renderPopupPortal(){if(this.activeMatch&&(this._popupPortal||(this._popupPortal=document.createElement("dialog"),this._popupPortal.className="soccer-live-popup-portal",this._popupCancelHandler=e=>{e.preventDefault(),this.showPopup=0},this._popupClickHandler=e=>{e.target===this._popupPortal&&(this.showPopup=0)},this._popupPortal.addEventListener("cancel",this._popupCancelHandler),this._popupPortal.addEventListener("click",this._popupClickHandler),document.body.appendChild(this._popupPortal)),this._copyPopupThemeVars(this._popupPortal),(0,i.XX)(i.qy`${this._renderPopupPortalStyles()}${Le("popup",8)}${this._renderPopup()}`,this._popupPortal),!this._popupPortal.open))try{this._popupPortal.showModal()}catch(e){this._popupPortal.setAttribute("open","")}}_removePopupPortal(){this._popupPortal&&(this._popupPortal.open&&this._popupPortal.close(),this._popupCancelHandler&&(this._popupPortal.removeEventListener("cancel",this._popupCancelHandler),this._popupCancelHandler=null),this._popupClickHandler&&(this._popupPortal.removeEventListener("click",this._popupClickHandler),this._popupClickHandler=null),(0,i.XX)(i.qy``,this._popupPortal),this._popupPortal.remove(),this._popupPortal=null)}async _loadWeather(e,t=null,a=null,i=null){this._lastWeatherVenue=e;try{this._weatherBadge=await O(e,this.hass,this._config,t,a,i),this.requestUpdate()}catch(e){console.warn("Weather load failed:",e)}}_renderPopup(){const e=this.activeMatch,t="pre"===e.state,a="in"===e.state,r="post"===e.state,o=a?e.clock&&"N/A"!==e.clock?e.clock:be(e.status,e=>this._t(e))||this._t("status.live"):r?this._t("status.full_time"):t&&((0,s.DK)(e.date,(0,s.$c)(this.hass,this._config))||e.date)||"";return i.qy`
      <div
        class="popup-overlay"
        @click="${e=>{e.target===e.currentTarget&&(this.showPopup=0)}}"
      >
        <div class="popup-box" @click="${e=>e.stopPropagation()}">
          <h3 class="popup-title">${this._t("popup.match_details")}</h3>
          <div class="popup-score-row">
            <div class="popup-team-col">
              <img class="popup-logo" src="${e.home_logo}" alt="" @error="${e=>e.target.style.display="none"}">
              <div class="popup-team-name">${e.home_team}</div>
            </div>
            <div class="popup-score-center">
              <div class="popup-score">${S(e.home_score,"-")}<span class="popup-score-sep"> - </span>${S(e.away_score,"-")}</div>
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
          <button class="popup-close-btn" @click="${()=>this.showPopup=0}">${this._t("generic.close")}</button>
        </div>
      </div>
    `}_renderPopupPortalStyles(){return i.qy`
      <style>
        ${Te.cssText}
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
        .popup-section-h2h { background: rgba(99,102,241,0.08); border-color: var(--cl-accent, #6366f1); }
        .popup-section-title { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .popup-section-title.h2h { color: var(--cl-accent, #6366f1); }
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
    `:i.qy`<div class="popup-stat-box"><div class="popup-stat-team">${e}</div></div>`}_renderPopupEventGroups(e){const{goals:t,yellowCards:a,redCards:s}=this.separateEvents(e.match_details||[]);if(!t.length&&!a.length&&!s.length)return"";const r=(e,t,a)=>t.length?i.qy`
      <div class="popup-event-group ${a}">
        <h5 class="popup-event-title">${e}</h5>
        <ul class="popup-event-list">${t.map(e=>i.qy`<li>${e}</li>`)}</ul>
      </div>`:"";return i.qy`
      ${r(this._t("event.goal"),t,"goal")}
      ${r(this._t("event.yellow_card"),a,"yellow")}
      ${r(this._t("event.red_card"),s,"red")}
    `}_renderPopupLineup(e){return Be(e,{translate:(e,t)=>this._t(e,t),prefix:"popup",startersOnly:1})}_renderPopupTimeline(e){return Oe(e,{translate:(e,t)=>this._t(e,t),prefix:"popup"})}_renderPopupH2H(e){const t=e.head_to_head||[];if(!t.length)return"";const a=(e.home_team||"").toLowerCase();let r=0,o=0,n=0;t.forEach(e=>{const t=parseInt(e.home_score)||0,i=parseInt(e.away_score)||0;t!==i?((e.home_team||"").toLowerCase().includes(a)||a.includes((e.home_team||"").toLowerCase().split(" ")[0])?t>i:i>t)?r++:n++:o++});const l=r+o+n,c=l?Math.round(r/l*100):33,d=l?Math.round(o/l*100):34,p=100-c-d,h=(0,s.$c)(this.hass,this._config);return i.qy`
      <div class="popup-section popup-section-h2h">
        <h5 class="popup-section-title h2h">${this._t("popup.h2h")} (${t.length})</h5>
        <div class="popup-h2h-summary">
          <span><strong class="popup-h2h-num">${r}</strong> ${e.home_team||""}</span>
          <span class="popup-h2h-draw">${o} ${this._t("match.draw")||"D"}</span>
          <span>${e.away_team||""} <strong class="popup-h2h-num">${n}</strong></span>
        </div>
        <div class="popup-h2h-bar">
          <div class="popup-h2h-seg home" style="width:${c}%"></div>
          <div class="popup-h2h-seg draw" style="width:${d}%"></div>
          <div class="popup-h2h-seg away" style="width:${p}%"></div>
        </div>
        <ul class="popup-h2h-list">
          ${t.slice(0,8).map(e=>{const t=parseInt(e.home_score)||0,a=parseInt(e.away_score)||0,r=(0,s.n1)(e.date),o=r?r.toLocaleDateString(h):"";return i.qy`
              <li class="popup-h2h-row">
                <span class="popup-h2h-team ${t>a?"winner":""}">${e.home_team}</span>
                <span class="popup-h2h-score">${S(e.home_score,"-")} - ${S(e.away_score,"-")}</span>
                <span class="popup-h2h-team away ${a>t?"winner":""}">${e.away_team}</span>
              </li>
              <li class="popup-h2h-date">${o}</li>`})}
        </ul>
      </div>`}static get styles(){return[z,te,ie,B,G,ge,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.5);--cl-green:#10b981;--cl-gold:#fbbf24;--cl-gold-text:#fde047;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);--cl-glass-border:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.bg-logos{position:absolute;inset:0;display:flex;justify-content:space-between;align-items:center;pointer-events:none;overflow:hidden;z-index:0;}.bg-logo{width:60%;height:140%;display:flex;align-items:center;opacity:0.09;}.bg-logo.home{justify-content:flex-start;transform:translateX(-30%);}.bg-logo.away{justify-content:flex-end;transform:translateX(30%);}.bg-logo img{width:100%;object-fit:contain;}.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.20),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(var(--cl-accent-2-rgb),0.20),transparent 50%);pointer-events:none;z-index:1;}ha-card.live .hero-bg{background:radial-gradient(ellipse at 0% 0%,rgba(239,68,68,0.25),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(251,191,36,0.20),transparent 50%);animation:hero-pulse 3s ease-in-out infinite;}@keyframes hero-pulse{0%,100%{opacity:1;}50%{opacity:0.6;}}.top-bar,.scoreboard,.stats-row,.meta-row{position:relative;z-index:2;}.top-bar{position:relative;z-index:2;}.status-badge{flex-shrink:0;padding:5px 11px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;}.status-badge.live{background:linear-gradient(135deg,var(--cl-live),#f97316);color:white;box-shadow:0 4px 16px var(--cl-live-glow);animation:badge-pulse 2s ease-in-out infinite;}.status-badge.live .dot{width:6px;height:6px;border-radius:50%;background:white;animation:pulse-dot 1.2s ease-in-out infinite;}.status-badge.finished{background:linear-gradient(135deg,var(--cl-green),#059669);color:white;}.status-badge.scheduled{background:var(--cl-card-2);border:1px solid var(--cl-glass-border);color:var(--cl-text);}@keyframes badge-pulse{0%,100%{box-shadow:0 4px 16px var(--cl-live-glow);}50%{box-shadow:0 4px 24px var(--cl-live-glow),0 0 32px var(--cl-live-glow);}}@keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.7);}}.scoreboard{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:10px;padding:28px 18px 22px;}.team-side{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;min-width:0;}.team-logo-wrap{position:relative;width:80px;height:80px;display:flex;align-items:center;justify-content:center;}.team-logo-wrap::before{content:'';position:absolute;inset:-8px;background:radial-gradient(circle,rgba(var(--cl-accent-rgb),0.22),transparent 70%);border-radius:50%;animation:logo-glow 4s ease-in-out infinite;}.team-logo-big{position:relative;width:72px;height:72px;object-fit:contain;filter:drop-shadow(0 6px 16px rgba(0,0,0,0.25));transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);}.team-logo-fallback{position:relative;display:grid;place-items:center;width:72px;height:72px;border:1px solid var(--cl-chip-border);border-radius:50%;background:var(--cl-chip-bg);color:var(--cl-text);font-size:14px;font-weight:900;}.team-side:hover .team-logo-big{transform:scale(1.1) rotate(-3deg);}@keyframes logo-glow{0%,100%{opacity:0.6;transform:scale(1);}50%{opacity:1;transform:scale(1.15);}}.team-name-big{font-size:13px;font-weight:700;line-height:1.2;max-width:110px;letter-spacing:-0.01em;color:var(--cl-text);}.form-pills{display:flex;gap:3px;padding:3px 7px;background:var(--cl-card-2);border:1px solid var(--cl-glass-border);border-radius:999px;}.record{display:flex;gap:4px;font-size:9px;font-weight:800;letter-spacing:0.04em;}.record .rec{padding:2px 6px;border-radius:4px;font-variant-numeric:tabular-nums;}.record .rec-w{background:rgba(16,185,129,0.18);color:var(--cl-green);}.record .rec-d{background:rgba(245,158,11,0.18);color:#f59e0b;}.record .rec-l{background:rgba(239,68,68,0.18);color:var(--cl-live);}.top-scorer{display:inline-flex;flex-direction:column;align-items:stretch;gap:4px;padding:5px 9px 6px;background:var(--cl-card-2);border:1px solid var(--cl-glass-border);border-radius:10px;font-size:10px;font-weight:700;color:var(--cl-text-2);max-width:150px;}.top-scorer .ts-label{font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-gold);text-align:center;line-height:1;}.top-scorer .ts-row{display:flex;align-items:center;justify-content:center;gap:6px;}.top-scorer .ts-name{max-width:90px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--cl-text);font-size:11px;font-weight:700;}.top-scorer .ts-val{display:inline-flex;align-items:baseline;gap:1px;color:var(--cl-gold);font-weight:800;font-variant-numeric:tabular-nums;font-size:12px;}.top-scorer .ts-unit{font-size:9px;opacity:0.85;}.form-pill{width:14px;height:14px;border-radius:4px;font-size:8px;font-weight:800;color:white;display:flex;align-items:center;justify-content:center;}.form-pill.W{background:linear-gradient(135deg,#10b981,#059669);}.form-pill.L{background:linear-gradient(135deg,#ef4444,#dc2626);}.form-pill.D{background:linear-gradient(135deg,#f59e0b,#d97706);}.score-center{display:flex;flex-direction:column;align-items:center;gap:8px;padding:0 4px;}.score-numbers{font-size:48px;font-weight:900;letter-spacing:-0.04em;font-variant-numeric:tabular-nums;line-height:0.95;background:linear-gradient(180deg,var(--cl-text) 30%,var(--cl-accent));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:score-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) backwards;}.score-numbers .dash{opacity:0.4;font-weight:700;margin:0 4px;}:host([data-score="big"]) .score-numbers{font-size:68px;}:host([data-score="huge"]) .score-numbers{font-size:92px;}:host([data-score="big"]) .score-vs{font-size:38px;}:host([data-score="huge"]) .score-vs{font-size:48px;}.score-vs{font-size:30px;font-weight:800;letter-spacing:0.08em;color:var(--cl-text-2);opacity:0.6;}@keyframes score-pop{0%{opacity:0;transform:scale(0.5);}70%{transform:scale(1.1);}100%{opacity:1;transform:scale(1);}}.clock{font-size:11px;font-weight:700;font-variant-numeric:tabular-nums;display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;color:var(--cl-live);background:rgba(239,68,68,0.12);}.clock .dot{width:5px;height:5px;border-radius:50%;background:currentColor;animation:pulse-dot 1.4s ease-in-out infinite;}.clock.upcoming{color:var(--cl-accent);background:rgba(var(--cl-accent-rgb),0.12);}.clock.upcoming .dot,.clock.finished .dot{animation:none;}.clock.finished{color:var(--cl-green);background:rgba(16,185,129,0.12);}.stats-row{padding:0 18px 18px;display:flex;flex-direction:column;gap:10px;}.stat-bar{display:flex;flex-direction:column;gap:4px;}.stat-bar-label{display:flex;justify-content:space-between;font-size:11px;font-weight:700;}.stat-bar-label .home-val{color:var(--cl-accent);}.stat-bar-label .away-val{color:var(--cl-accent-2);}.stat-bar-label .label-text{text-transform:uppercase;letter-spacing:0.1em;font-size:9px;color:var(--cl-text-2);}.stat-bar-track{height:6px;background:var(--cl-card-2);border-radius:999px;overflow:hidden;display:flex;}.stat-bar-home{height:100%;background:linear-gradient(90deg,var(--cl-accent),var(--cl-accent));border-radius:999px 0 0 999px;transition:width 0.8s cubic-bezier(0.16,1,0.3,1);}.stat-bar-away{height:100%;background:linear-gradient(90deg,var(--cl-accent-2),var(--cl-accent-2));margin-left:auto;border-radius:0 999px 999px 0;transition:width 0.8s cubic-bezier(0.16,1,0.3,1);}.meta-row{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 18px;border-top:1px solid var(--cl-divider);background:var(--cl-card-2);}.info-btn{background:linear-gradient(135deg,var(--cl-accent),var(--cl-accent-2));color:white;border:none;padding:7px 14px;border-radius:999px;font-size:11px;font-weight:800;letter-spacing:0.04em;cursor:pointer;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);box-shadow:0 4px 12px rgba(var(--cl-accent-rgb),0.4);}.info-btn:hover{transform:translateY(-1px) scale(1.04);box-shadow:0 8px 20px rgba(99,102,241,0.6);}.event-toast{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:var(--cl-toast-bg);color:#ffffff;padding:10px 18px;border-radius:14px;font-size:13px;font-weight:800;z-index:100;animation:toast-bounce 4s cubic-bezier(0.16,1,0.3,1) forwards;pointer-events:none;max-width:90%;text-align:center;letter-spacing:-0.01em;text-shadow:0 1px 2px rgba(0,0,0,0.8);}.event-toast.variant-goal{box-shadow:0 0 0 2px var(--cl-gold),0 0 0 4px rgba(251,191,36,0.3),0 12px 40px rgba(0,0,0,0.7),0 0 60px rgba(251,191,36,0.4);}.event-toast.variant-goal strong{color:var(--cl-gold-text);}.event-toast.variant-yellow{box-shadow:0 0 0 2px #f59e0b,0 0 0 4px rgba(245,158,11,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-yellow strong{color:#fbbf24;}.event-toast.variant-red{box-shadow:0 0 0 2px var(--cl-live),0 0 0 4px rgba(239,68,68,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-red strong{color:#fca5a5;}@keyframes toast-bounce{0%{opacity:0;transform:translate(-50%,-20px) scale(0.7);}8%{opacity:1;transform:translate(-50%,0) scale(1.08);}14%{transform:translate(-50%,0) scale(1);}90%{opacity:1;transform:translate(-50%,0) scale(1);}100%{opacity:0;transform:translate(-50%,-10px) scale(0.95);}}.upcoming-list{border-top:1px solid var(--cl-divider);padding:10px 16px 14px;}.upcoming-list-title{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-text-2);margin-bottom:8px;}.upcoming-row{display:grid;grid-template-columns:52px 1fr 45px 1fr;align-items:center;gap:6px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:12px;}.upcoming-row:last-child{border-bottom:none;}.upcoming-date{font-size:11px;font-weight:700;color:var(--cl-accent);font-variant-numeric:tabular-nums;display:flex;flex-direction:column;line-height:1.3;flex-shrink:0;white-space:nowrap;min-width:52px;}.upcoming-date-day{font-size:9px;font-weight:600;color:var(--cl-text-2);}.upcoming-team{display:flex;align-items:center;gap:5px;font-weight:600;color:var(--cl-text);min-width:0;overflow:hidden;}.upcoming-team.home-side{justify-content:flex-end;}.upcoming-team.away-side{justify-content:flex-start;}.upcoming-team img{width:18px;height:18px;object-fit:contain;flex-shrink:0;}.upcoming-team.tracked .abbrev-badge{font-weight:800;box-shadow:inset 0 -2px 0 var(--cl-accent-visible,var(--cl-accent,#6366f1));}.upcoming-row.clickable{cursor:pointer;}.upcoming-row.clickable:hover{background:var(--cl-card-2);border-radius:8px;}.prev-comp-label{color:var(--cl-accent);opacity:0.75;font-size:8px;letter-spacing:0.04em;text-transform:uppercase;display:block;max-width:68px;line-height:1.15;white-space:normal;overflow-wrap:anywhere;}.upl-comp-label{color:var(--cl-text-2);font-size:8px;letter-spacing:0.03em;text-transform:uppercase;display:block;max-width:68px;line-height:1.15;white-space:normal;overflow-wrap:anywhere;}.upl-opp-form{grid-column:1 / -1;display:flex;gap:2px;margin-top:-3px;padding-bottom:2px;}.upl-opp-form.side-right{justify-content:flex-end;}.upl-opp-form.side-left{justify-content:flex-start;padding-left:58px;}.upl-fd{width:5px;height:5px;border-radius:50%;}.upl-fd.w{background:var(--cl-green);}.upl-fd.l{background:var(--cl-live);}.upl-fd.d{background:var(--cl-text-2);opacity:0.6;}.form-trend-section{border-top:1px solid var(--cl-divider);padding:10px 16px 8px;}.form-trend-row{display:flex;align-items:center;gap:10px;margin-top:6px;}.form-trend-dots{display:flex;gap:4px;flex-wrap:wrap;}.ft-dot{width:20px;height:20px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:white;flex-shrink:0;}.ft-dot.w{background:var(--cl-green);}.ft-dot.d{background:var(--cl-gold);color:rgba(0,0,0,0.7);}.ft-dot.l{background:var(--cl-live);}.form-trend-summary{font-size:10px;font-weight:700;color:var(--cl-text-2);white-space:nowrap;flex-shrink:0;}.prev-score{font-size:12px;font-weight:900;color:var(--cl-text-2);text-align:center;min-width:32px;font-variant-numeric:tabular-nums;}.prev-score.home-win{color:var(--cl-green);}.prev-score.away-win{color:var(--cl-live);}.prev-score.tw{color:var(--cl-green);}.prev-score.tl{color:var(--cl-live);}.prev-score.draw{color:var(--cl-text-2);}.upcoming-live-score{font-size:12px;font-weight:900;color:var(--cl-live);text-align:center;min-width:16px;font-variant-numeric:tabular-nums;display:flex;align-items:center;gap:2px;}.live-dot{font-size:7px;animation:live-blink 1s ease-in-out infinite;}@keyframes live-blink{0%,100%{opacity:1}50%{opacity:0.2}}.team-name-big.my-team{background:linear-gradient(135deg,var(--cl-text),var(--cl-accent));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}.upcoming-vs{font-size:11px;font-weight:700;color:var(--cl-text-2);text-align:center;}.abbrev-badge{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;color:var(--cl-text,#f8fafc);letter-spacing:0.01em;min-width:0;}.abbrev-badge::before{content:'';width:7px;height:7px;border-radius:2px;background:var(--team-c,var(--cl-accent,#6366f1));flex-shrink:0;}.abbrev-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px;}.h2h-section{border-top:1px solid var(--cl-divider);padding:10px 16px 14px;}.h2h-summary{display:flex;justify-content:space-between;align-items:center;font-size:11px;margin-bottom:6px;color:var(--cl-text-2);}.h2h-summary-num{font-size:20px;font-weight:800;color:var(--cl-text);}.h2h-summary-label{font-size:10px;text-align:center;color:var(--cl-text-2);}.h2h-bar{display:flex;height:5px;border-radius:3px;overflow:hidden;gap:2px;margin-bottom:10px;}.h2h-bar-seg.home{background:var(--cl-accent);border-radius:3px 0 0 3px;}.h2h-bar-seg.draw{background:var(--cl-text-2);opacity:0.4;}.h2h-bar-seg.away{background:var(--cl-accent-2);border-radius:0 3px 3px 0;}.h2h-row{display:flex;align-items:center;gap:6px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:11px;}.h2h-row:last-child{border-bottom:none;}.h2h-date{font-size:10px;font-weight:600;color:var(--cl-text-2);min-width:44px;flex-shrink:0;}.h2h-team{flex:1;font-weight:600;color:var(--cl-text-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.h2h-team.away{text-align:right;}.h2h-team.winner{color:var(--cl-text);font-weight:800;}.h2h-score{font-size:12px;font-weight:800;color:var(--cl-text);flex-shrink:0;text-align:center;min-width:36px;font-variant-numeric:tabular-nums;}ha-card.goal-flash{animation:card-goal-flash 1.6s cubic-bezier(0.16,1,0.3,1);}@keyframes card-goal-flash{0%{box-shadow:0 4px 24px rgba(0,0,0,0.15);}20%{box-shadow:0 0 0 4px var(--cl-accent),0 0 60px 20px var(--cl-accent),0 4px 24px rgba(0,0,0,0.15);}50%{box-shadow:0 0 0 2px var(--cl-accent-2),0 0 40px 10px var(--cl-accent-2),0 4px 24px rgba(0,0,0,0.15);}100%{box-shadow:0 4px 24px rgba(0,0,0,0.15);}}.score-numbers.goal-scored{animation:score-goal-pop 1.2s cubic-bezier(0.34,1.56,0.64,1);}@keyframes score-goal-pop{0%{transform:scale(1);}20%{transform:scale(1.4);filter:drop-shadow(0 0 30px var(--cl-accent));}40%{transform:scale(0.95);}60%{transform:scale(1.15);}100%{transform:scale(1);}}.team-logo-big.scorer-bounce{animation:scorer-bounce 1.2s cubic-bezier(0.34,1.56,0.64,1);}@keyframes scorer-bounce{0%{transform:scale(1) rotate(0deg);}25%{transform:scale(1.3) rotate(-15deg);}50%{transform:scale(1.1) rotate(10deg);}75%{transform:scale(1.2) rotate(-5deg);}100%{transform:scale(1) rotate(0deg);}}.goal-banner{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:50;overflow:hidden;}.goal-banner::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,var(--cl-overlay-strong) 0%,var(--cl-overlay-soft) 40%,transparent 70%);animation:banner-backdrop 1.6s ease-out forwards;}@keyframes banner-backdrop{0%{opacity:0;}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;}}.goal-banner-text{position:relative;font-size:84px;font-weight:900;letter-spacing:-0.06em;color:var(--cl-gold-text);-webkit-text-stroke:2px #1a0f00;text-shadow:0 0 24px rgba(251,191,36,1),0 0 48px rgba(251,191,36,0.7),0 6px 0 #b45309,0 8px 24px rgba(0,0,0,0.6);animation:goal-text-blast 1.6s cubic-bezier(0.16,1,0.3,1) forwards;transform-origin:center;}@keyframes goal-text-blast{0%{opacity:0;transform:scale(0.3) rotate(-8deg);}20%{opacity:1;transform:scale(1.15) rotate(-3deg);}40%{transform:scale(0.95) rotate(2deg);}60%{transform:scale(1.05) rotate(0deg);}80%{opacity:1;transform:scale(1) rotate(0deg);}100%{opacity:0;transform:scale(1.3) rotate(0deg);}}.goal-flash-overlay{position:absolute;inset:0;background:radial-gradient(circle at center,rgba(251,191,36,0.25),transparent 70%);pointer-events:none;z-index:49;animation:flash-overlay 1s ease-out forwards;}@keyframes flash-overlay{0%{opacity:0;}20%{opacity:1;}100%{opacity:0;}}.confetti{position:absolute;top:20px;left:50%;width:8px;height:8px;pointer-events:none;z-index:99;animation:confetti-fly 1.8s ease-out forwards;}@keyframes confetti-fly{0%{transform:translate(-50%,0) rotate(0deg);opacity:1;}100%{transform:translate(calc(-50% + var(--dx)),var(--dy)) rotate(720deg);opacity:0;}}@media (max-width:600px){ha-card{padding:12px !important;}.hero{padding:14px 10px 12px !important;}.team-logo{width:40px !important;height:40px !important;}.team-name{font-size:12px !important;}.score{font-size:32px !important;letter-spacing:4px !important;}.vs-text{font-size:18px !important;}.stat-val{font-size:11px !important;min-width:24px !important;}.stat-label{font-size:9px !important;}.comp-logo{width:14px !important;height:14px !important;}.comp-name{font-size:10px !important;}.meta{font-size:10px !important;padding:8px 12px !important;}.events{max-height:180px !important;}.event-row{padding:4px 0 !important;font-size:11px !important;}.event-min{font-size:10px !important;}.form-indicator{width:18px !important;height:18px !important;font-size:10px !important;}}@media (max-width:400px){.score{font-size:28px !important;letter-spacing:2px !important;}.team-name{font-size:11px !important;max-width:70px !important;}.event-icon{font-size:12px !important;}}ha-card.compact .team-logo-big{width:48px !important;height:48px !important;}ha-card.compact .team-name-big{font-size:12px !important;}ha-card.compact .scoreboard{padding:12px 16px !important;}ha-card.compact .score-num{font-size:36px !important;letter-spacing:4px !important;}ha-card.compact .standing-summary{display:none;}ha-card.compact .form-dots-row{display:none;}ha-card.compact .top-scorer-row{display:none;}ha-card.compact .smm-chips{display:none;}ha-card.compact .meta-row{padding:8px 14px !important;}`]}}function Ie(e,t=0){const a=Number.parseInt(e,10);return Number.isFinite(a)?a:t}customElements.get("soccer-live-team")||customElements.define("soccer-live-team",He);const Re=(e,t)=>Array.from({length:t-e+1},(t,a)=>e+a),We={serie_a:{match:(e,t)=>"ita.1"===e||t.includes("italian_serie_a"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:"bottom3"},premier_league:{match:(e,t)=>"eng.1"===e||t.includes("english_premier"),champions:[1,2,3,4,5],europa:[6],conference:[7],relegation:"bottom3"},laliga:{match:(e,t)=>"esp.1"===e||t.includes("spanish_la_liga")||t.includes("spanish_laliga"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:"bottom3"},bundesliga:{match:(e,t)=>"ger.1"===e||t.includes("german_bundesliga"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:[17,18]},ligue_1:{match:(e,t)=>"fra.1"===e||t.includes("french_ligue_1"),champions:[1,2,3],europa:[4],conference:[5],relegation:[17,18]},eredivisie:{match:(e,t)=>"ned.1"===e||t.includes("dutch_eredivisie"),champions:[1,2],europa:[3],conference:[4,5],relegation:[17,18]},primeira_liga:{match:(e,t)=>"por.1"===e||t.includes("portuguese_primeira"),champions:[1,2],europa:[3],conference:[4],relegation:[17,18]},ucl_league_phase:{match:(e,t)=>"uefa.champions"===e||t.includes("uefa_champions_league"),champions:Re(1,8),europa:Re(9,24),conference:[],relegation:"bottom12"},uel_league_phase:{match:(e,t)=>"uefa.europa"===e||t.includes("uefa_europa_league"),champions:Re(1,8),europa:Re(9,24),conference:[],relegation:"bottom12"},uecl_league_phase:{match:(e,t)=>"uefa.europa.conf"===e||t.includes("uefa_conference"),champions:Re(1,8),europa:Re(9,24),conference:[],relegation:"bottom12"},world_cup:{match:(e,t)=>"fifa.world"===e||t.includes("fifa_world_cup")||t.includes("world_cup"),champions:[1,2],europa:[3],conference:[],relegation:"bottom1",kind:"cup_group",hero:{icon:"🏆",accent:"world_cup"},labels:{champions:"zone.qualified",europa:"zone.third_place_playoff",conference:null,relegation:"zone.eliminated"}},uefa_euro:{match:(e,t)=>"uefa.euro"===e||t.includes("uefa_euro")||t.includes("european_championship"),champions:[1,2],europa:[3],conference:[],relegation:"bottom1",kind:"cup_group",hero:{icon:"⭐",accent:"uefa_euro"},labels:{champions:"zone.qualified",europa:"zone.third_place_playoff",conference:null,relegation:"zone.eliminated"}},copa_america:{match:(e,t)=>"conmebol.america"===e||t.includes("copa_america")||t.includes("conmebol_america"),champions:[1,2],europa:[],conference:[],relegation:"bottom2",kind:"cup_group",hero:{icon:"🏆",accent:"copa_america"},labels:{champions:"zone.qualified",europa:null,conference:null,relegation:"zone.eliminated"}}};class Ke extends i.WF{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean},selectedGroup:{type:String},showEventToasts:{type:Boolean},highlightTeam:{type:String},showStats:{type:Boolean},showGoalsFor:{type:Boolean},compactMode:{type:Boolean},compactTop:{type:Number},compactBottom:{type:Number},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this.maxTeamsVisible=e.max_teams_visible?e.max_teams_visible:10,this.hideHeader=e.hide_header||0,this.selectedGroup=e.selected_group||"",this.showEventToasts=1==e.show_event_toasts,this.highlightTeam=(e.highlight_team||e.my_team||"").toLowerCase(),this.showStats=0!=e.show_stats,this.showGoalsFor=1==e.show_goals_for,this.compactMode=1==e.compact_mode,this.compactTop=parseInt(e.compact_top)||5,this.compactBottom=parseInt(e.compact_bottom)||3,this._toastMessage="",this._toastVisible=0,this._toastVariant="goal",this._toastTimer=null}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._toastTimer&&clearTimeout(this._toastTimer),this._eventSubscriptionGeneration=(this._eventSubscriptionGeneration||0)+1,this._eventSubscriptionPromise=null,this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach(e=>{"function"==typeof e&&e()}),this._eventSubscriptions=[])}updated(e){e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents()}_subscribeToEvents(){if(!this.hass||!this.hass.connection)return;if(this._eventSubscriptionPromise||this._eventSubscriptions?.length)return;const e=this._eventSubscriptionGeneration||0,t=this._handleSoccerLiveEvent.bind(this),a=Promise.allSettled(["soccer_live_goal","soccer_live_goal_cancelled","soccer_live_yellow_card","soccer_live_red_card","soccer_live_match_finished"].map(e=>this.hass.connection.subscribeEvents(t,e)));this._eventSubscriptionPromise=a,a.then(t=>{const a=t.filter(e=>"fulfilled"===e.status&&"function"==typeof e.value).map(e=>e.value);if((this._eventSubscriptionGeneration||0)!==e||!this.isConnected)return void a.forEach(e=>e());const i=t.filter(e=>"rejected"===e.status);i.length>0?(a.forEach(e=>e()),this._eventSubscriptions=[],i.forEach(e=>console.warn("Soccer Live Standings subscription failed:",e.reason))):this._eventSubscriptions=a}).finally(()=>{this._eventSubscriptionPromise===a&&(this._eventSubscriptionPromise=null)})}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return 0;const t=this._config.entity||"",a=e.competition_code;if(!a)return 0;const i=a.replace(/\./g,"_").toLowerCase();return t.toLowerCase().includes(i)}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;this._eventBelongsToThisCard(a)&&Ne(this,a)&&this.showEventToasts&&this._showEventToast(t,a)}_showEventToast(e,t){const a=De(e=>this._t(e),e,t);a&&(this._toastMessage=a.message,this._toastVariant=a.variant,this._toastVisible=1,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this._toastVisible=0,this.requestUpdate()},4e3),this.requestUpdate())}getCardSize(){return 5}static getConfigElement(){return document.createElement("soccer-live-standings-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_standings_",max_teams_visible:10,hide_header:0,selected_group:"",show_event_toasts:0}}_getZoneConfig(){return this._config.zone_config?this._config.zone_config:this._config.zone_preset&&We[this._config.zone_preset]?We[this._config.zone_preset]:this._inferPresetFromEntity()||{champions:[],europa:[],conference:[],relegation:null}}_getZoneLabels(){const e=this._getZoneConfig().labels||{};return{champions:void 0!==e.champions?e.champions:"zone.champions",europa:void 0!==e.europa?e.europa:"zone.europa",conference:void 0!==e.conference?e.conference:"zone.conference",relegation:void 0!==e.relegation?e.relegation:"zone.relegation"}}_hasZonePositions(e){return e?Array.isArray(e)?e.length>0:"string"==typeof e?/^bottom\d+$/.test(e):0:0}_inferPresetFromEntity(){const e=(this._config.entity||"").toLowerCase(),t=this.hass&&this._config.entity?this.hass.states[this._config.entity]:null,a=t&&t.attributes?String(t.attributes.competition_code||"").toLowerCase():"";for(const[,t]of Object.entries(We))if(t.match&&t.match(a,e))return t;return null}_positionInZone(e,t,a){if(!a)return 0;const i=String(a).match(/^bottom(\d+)$/);if(i){const a=parseInt(i[1],10);return t&&e>t-a}return Array.isArray(a)?a.includes(Number(e)):0}_translatePhase(e){return e?{"regular-season":this._t("phase.regular_season"),"regular season":this._t("phase.regular_season"),"group-stage":this._t("phase.group_stage"),"group stage":this._t("phase.group_stage"),playoffs:this._t("phase.playoffs")}[String(e).toLowerCase()]||e:""}_shouldShowPhase(e){return e?"regular-season"===String(e).toLowerCase()||/\d{4}/.test(e)?0:1:0}_isCupGroupStage(){const e=this._getZoneConfig();return e&&"cup_group"===e.kind}_groupHasNoMatches(e){if(!e||!e.length)return 0;const t=e=>{if(null==e||""===e)return 0;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?0:t};return e.every(e=>t(e.wins)+t(e.draws)+t(e.losses)===0)}_zoneClass(e,t,a){if(a&&a.zone_color)return"zone-espn";const i=this._getZoneConfig();return this._positionInZone(e,t,i.champions)?1!==e||this._isCupGroupStage()?"zone-cl":"zone-cl rank-first":this._positionInZone(e,t,i.europa)?"zone-el":this._positionInZone(e,t,i.conference)?"zone-conf":this._positionInZone(e,t,i.relegation)?"zone-rel":"zone-default"}_sortStandings(e,t){let a=(e||[]).filter(e=>null!=e.rank);return t.includes("MLS")?(a=a.slice().sort((e,t)=>t.points!==e.points?t.points-e.points:t.goal_difference!==e.goal_difference?t.goal_difference-e.goal_difference:t.goals_for-e.goals_for),a.forEach((e,t)=>{e.rank=t+1})):a=a.slice().sort((e,t)=>e.rank-t.rank),a}_currentGroup(e){return e.find(e=>e.name===this.selectedGroup)||e[0]}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this._config.entity,t=this.hass.states[e];if(!t)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;if("race"===this._config.card_type||"race"===this._config.standings_view)return this._renderRace(t);const a=t.attributes.season||"",s=t.attributes.league_abbreviation&&"N/A"!==t.attributes.league_abbreviation?t.attributes.league_abbreviation:null,r=s&&t.attributes.league_name?a.replace(t.attributes.league_name,s).trim():a,o=t.attributes.standings_groups||[],n=!this.selectedGroup&&o.length>1,l=this._currentGroup(o),c=this._sortStandings(l?l.standings:[],r),d=c.length;if(!d){const e=W(t.attributes.sync_status,e=>this._t(e));if(e)return e}const p=48*Math.min(this.maxTeamsVisible,d)+50,h=this.highlightTeam?(c.find(e=>e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam))||{}).rank:null,u=Math.round(c.reduce((e,t)=>e+(parseInt(t.games_played)||0),0)/2),g=c.reduce((e,t)=>e+(parseInt(t.goals_for)||0),0),m=!(t.attributes.standings_groups||[]).some(e=>(e.standings||[]).some(e=>(parseInt(e.games_played)||0)>0))&&d>0&&c.every(e=>0===parseInt(e.wins??"0")&&0===parseInt(e.draws??"0")&&0===parseInt(e.losses??"0"));return i.qy`
      <ha-card>
        ${this.showEventToasts&&this._toastVisible?i.qy`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        ${this.hideHeader?"":this._renderHeader(t,r,l,o,n,h)}

        ${m?i.qy`
          <div class="preseason-banner">
            <span class="preseason-icon">🗓️</span>
            <span>${this._t("standings.preseason",{season:r||""})}</span>
          </div>
        `:""}

        ${n?this._renderGroupsGrid(o,r):i.qy`
            <div class="table-wrap" style="max-height: ${p}px;">
              ${this._renderFullTable(c,d)}
            </div>
          `}

        ${this.showStats&&u>0?i.qy`
          <div class="season-stats">
            <span>${u} ${this._t("standings.stats").split("·")[0].trim()}</span>
            <span class="stats-dot">·</span>
            <span>${g} ${this._t("standings.goals")}</span>
          </div>
        `:""}

        ${this._renderLegend(l)}
      </ha-card>
    `}_renderRace(e){const t=this._config.highlight_team||this._config.my_team||"",a=function(e={},t=""){const a=e.competition_race?.groups?.[0],i=e.standings_groups?.[0],s=a?.rows||i?.standings||[];if(!s.length)return null;const r=[...s].sort((e,t)=>Ie(e.rank,999)-Ie(t.rank,999)),o=Ie(r[0]?.points),n=Math.max(...r.map(e=>Ie(e.games_played)),Math.max(0,2*(r.length-1))),l=r.map((e,t)=>{const a=Ie(e.points),i=Ie(e.games_played),s=null==e.remaining?Math.max(0,n-i):Ie(e.remaining);return{...e,points:a,played:i,remaining:s,maximum:null==e.maximum_points?a+3*s:Ie(e.maximum_points),projected:null==e.projected_points?a:Ie(e.projected_points),gamesInHand:Ie(e.games_in_hand),scenarios:e.next_match_scenarios||null,gapLeader:null==e.gap_to_leader?Math.max(0,o-a):Ie(e.gap_to_leader),gapAbove:null==e.gap_to_above?t?Math.max(0,Ie(r[t-1].points)-a):0:Ie(e.gap_to_above)}}),c=String(t||"").toLowerCase(),d=l.find(e=>c&&String(e.team_name||"").toLowerCase().includes(c)),p=(e.standings_history||[]).map(e=>{const t=(e.groups?.[0]?.standings||[]).find(e=>null!=d?.team_id?String(e.team_id)===String(d.team_id):c&&String(e.team_name||"").toLowerCase().includes(c));return t?{date:e.captured_at,rank:Ie(t.rank),points:Ie(t.points)}:null}).filter(Boolean);return{rows:l,tracked:d,trajectory:p,totalMatches:a?.total_matches??n,remainingSource:a?.remaining_source||"table_format",group:a?.name||i?.name||""}}(e.attributes,t);if(!a)return W(e.attributes.sync_status,e=>this._t(e))||i.qy`<ha-card class="empty">${this._t("ui.no_standings_data")}</ha-card>`;const s=a.tracked?a.rows.filter(e=>Math.abs(Number(e.rank)-Number(a.tracked.rank))<=2):a.rows.slice(0,6),r=Math.max(...s.map(e=>e.maximum),1),o=a.trajectory.slice(-12);return i.qy`<ha-card class="race-card">
      <header class="race-head"><span>🏁</span><div><small>${this._t("card.race")}</small><h2>${e.attributes.league_name||a.group}</h2></div><b>${e.attributes.season||""}</b></header>
      ${a.tracked?i.qy`<section class="race-focus">
        ${a.tracked.team_logo?i.qy`<img src=${a.tracked.team_logo} alt="">`:""}
        <div><strong>${a.tracked.team_name}</strong><small>#${a.tracked.rank} · ${a.tracked.points} ${this._t("col.points")}</small></div>
        <span>${a.tracked.gapLeader?`−${a.tracked.gapLeader}`:this._t("race.leader")}</span>
      </section>`:""}
      <div class="race-list">${s.map(e=>i.qy`<div class=${e===a.tracked?"tracked":""}>
        <b>${e.rank}</b><span>${e.team_name}<i style="width:${Math.max(3,e.points/r*100)}%"></i></span>
        <strong>${e.points}</strong><small>${e.maximum} ${this._t("race.maximum")}</small>
      </div>`)}</div>
      ${a.tracked&&(a.tracked.gamesInHand||a.tracked.projected!==a.tracked.points||a.tracked.title_clinched||a.tracked.title_possible||a.tracked.europe_secured||a.tracked.relegation_safe)?i.qy`
        <section class="race-projection">
          ${a.tracked.gamesInHand?i.qy`<span>${this._t("race.games_in_hand",{n:a.tracked.gamesInHand})}</span>`:""}
          <span>${this._t("race.projected_points",{n:a.tracked.projected})}</span>
          ${a.tracked.scenarios?i.qy`<span>${this._t("race.next_scenarios",{win:a.tracked.scenarios.win,draw:a.tracked.scenarios.draw,loss:a.tracked.scenarios.loss})}</span>`:""}
          ${a.tracked.title_clinched?i.qy`<span>🏆 ${this._t("race.title_clinched")}</span>`:""}
          ${!a.tracked.title_clinched&&a.tracked.title_possible?i.qy`<span>${this._t("race.magic_points",{n:a.tracked.magic_points_title})}</span>`:""}
          ${a.tracked.europe_secured?i.qy`<span>✓ ${this._t("race.europe_secured")}</span>`:""}
          ${a.tracked.relegation_safe?i.qy`<span>✓ ${this._t("race.relegation_safe")}</span>`:""}
        </section>`:""}
      ${o.length>1?i.qy`<section class="trajectory"><small>${this._t("race.trajectory")}</small><div>
        ${o.map(e=>i.qy`<span title="${e.date||""}: #${e.rank}"><i style="height:${Math.max(12,100-(e.rank-1)/Math.max(1,a.rows.length-1)*88)}%"></i><b>${e.rank}</b></span>`)}
      </div></section>`:""}
      <footer>${this._t("race.remaining",{n:a.tracked?.remaining??a.rows[0]?.remaining??0})}</footer>
    </ha-card>`}_renderFullTable(e,t){let a=e,s=null;if(this.compactMode&&t>this.compactTop+this.compactBottom){const i=e.slice(0,this.compactTop),r=e.slice(t-this.compactBottom),o=t-this.compactTop-this.compactBottom,n=this.highlightTeam?e.slice(this.compactTop,t-this.compactBottom).find(e=>e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam)):null;a=[...i,...n?[n]:[],{_separator:1,hiddenCount:o},...r],s=1}return i.qy`
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
              </tr>`;const a=this.highlightTeam&&e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam),s=e=>{if(null==e||""===e)return null;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?null:t},r=s(e.wins),o=s(e.draws),n=s(e.losses),l=s(e.goal_difference),c=null!==r&&null!==o&&null!==n?r+o+n:null,d=null===l?"":l>0?"gd-pos":l<0?"gd-neg":"",p=null===l?"-":l>0?`+${l}`:`${l}`;return i.qy`
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
                <td>${r??"-"}</td>
                <td>${o??"-"}</td>
                <td>${n??"-"}</td>
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
          ${e.map(e=>{const a=(e=>{if(null==e||""===e)return null;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?null:t})(e.goal_difference),s=null===a?"":a>0?"gd-pos":a<0?"gd-neg":"",r=null===a?"-":a>0?`+${a}`:`${a}`;return i.qy`
              <tr class="${this._zoneClass(e.rank,t,e)}">
                <td style="${e.zone_color?`border-left:3px solid ${e.zone_color};padding-left:11px`:""}"><div class="rank-cell"><div class="rank-num">${e.rank}</div></div></td>
                <td class="team-cell">
                  <img src="${e.team_logo}" alt="${e.team_name}" />
                  <span class="tname">${e.team_name}</span>
                </td>
                <td class="${s}">${r}</td>
                <td class="points-cell">${e.points??"-"}</td>
              </tr>
            `})}
        </tbody>
      </table>
    `}_renderHeader(e,t,a,s,r,o){const n=this._getZoneConfig(),l=this._isCupGroupStage(),c=n&&n.hero?n.hero:null,d=e.attributes.league_abbreviation&&"N/A"!==e.attributes.league_abbreviation?e.attributes.league_abbreviation:null,p=d&&t?t.replace(d,"").trim():t&&"n/a"!==t.toLowerCase()?t:"",h=r?this._t("phase.group_stage"):this._shouldShowPhase(a&&a.name)?this._translatePhase(a.name):"",u=[];d&&u.push(this._t("card.standings")),p&&u.push(p),h&&u.push(h);let g=0;if(r)for(const e of s)g+=(e.standings||[]).filter(e=>null!=e.rank).length;return i.qy`
      <div class="top-bar ${l?"top-bar-cup":""} ${c?`accent-${c.accent}`:""}">
        ${c&&c.icon?i.qy`<div class="hero-icon">${c.icon}</div>`:""}
        <div class="league-title">
          <h2>${d||e.state}</h2>
          <div class="sub">${u.join(" · ")}</div>
        </div>
        ${o?i.qy`<span class="highlight-pos-badge">${o}e</span>`:""}
        ${r&&l?i.qy`
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
      `;const a=this._getZoneConfig(),s=this._getZoneLabels(),r=[{key:"champions",dot:"cl",positions:a.champions,label:s.champions},{key:"europa",dot:"el",positions:a.europa,label:s.europa},{key:"conference",dot:"conf",positions:a.conference,label:s.conference},{key:"relegation",dot:"rel",positions:a.relegation,label:s.relegation}].filter(e=>e.label&&this._hasZonePositions(e.positions));return r.length?i.qy`
      <div class="legend">
        ${r.map(e=>i.qy`
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
    `}static get styles(){return[z,i.AH`ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;background:var(--cl-bg);color:var(--cl-text);box-shadow:0 4px 24px var(--cl-shadow);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.top-bar{position:relative;padding:20px 18px;background:linear-gradient(135deg,rgba(var(--cl-accent-rgb),0.15),rgba(var(--cl-accent-2-rgb),0.10) 60%,transparent);border-bottom:1px solid var(--cl-divider);overflow:hidden;}.top-bar::before{content:'⚽';position:absolute;right:-10px;top:-10px;font-size:90px;opacity:0.06;transform:rotate(15deg);}.top-bar-cup{padding:28px 22px 22px;background:radial-gradient(circle at 20% 20%,rgba(99,102,241,0.30),transparent 55%),radial-gradient(circle at 80% 60%,rgba(var(--cl-accent-2-rgb),0.20),transparent 50%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0));}.top-bar-cup::before{display:none;}.top-bar-cup .hero-icon{position:absolute;right:14px;top:14px;font-size:56px;line-height:1;opacity:0.95;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.45));}.top-bar-cup h2{font-size:24px;letter-spacing:-0.04em;}.top-bar-cup .sub{font-size:13px;margin-top:6px;letter-spacing:0.02em;}.top-bar.accent-world_cup{background:radial-gradient(circle at 20% 20%,rgba(251,191,36,0.22),transparent 55%),radial-gradient(circle at 80% 60%,rgba(99,102,241,0.18),transparent 55%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0));}.top-bar.accent-uefa_euro{background:radial-gradient(circle at 20% 20%,rgba(59,130,246,0.30),transparent 55%),radial-gradient(circle at 80% 60%,rgba(251,191,36,0.18),transparent 55%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0));}.top-bar.accent-copa_america{background:radial-gradient(circle at 20% 20%,rgba(16,185,129,0.25),transparent 55%),radial-gradient(circle at 80% 60%,rgba(245,158,11,0.20),transparent 55%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0));}.hero-badges{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;}.hero-badges .badge{font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.12);color:var(--cl-text);backdrop-filter:blur(8px);}.top-bar h2{margin:0;font-size:20px;font-weight:900;letter-spacing:-0.03em;background:linear-gradient(135deg,var(--cl-text),var(--cl-accent));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}.top-bar .sub{color:var(--cl-text-2);font-size:12px;margin-top:4px;font-weight:500;}.table-wrap{overflow-y:auto;}.standings-table{width:100%;border-collapse:separate;border-spacing:0;font-size:13px;}.standings-table thead th{position:sticky;top:0;background:var(--cl-card-2);backdrop-filter:blur(8px);padding:10px 4px;text-align:center;font-size:10px;font-weight:800;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid var(--cl-divider);z-index:1;}.standings-table thead th:first-child{padding-left:14px;text-align:left;}.standings-table thead th:last-child{padding-right:14px;}.standings-table thead th.team-col{text-align:left;}.standings-table tbody tr{transition:all 0.2s cubic-bezier(0.4,0,0.2,1);}.standings-table tbody tr:hover{background:var(--cl-card-2);}.standings-table tbody td{padding:10px 4px;text-align:center;border-bottom:1px solid var(--cl-divider);font-variant-numeric:tabular-nums;font-weight:600;color:var(--cl-text);}.standings-table tbody tr:last-child td{border-bottom:none;}.preseason-banner{display:flex;align-items:center;gap:10px;margin:0 14px 4px;padding:10px 14px;background:rgba(var(--cl-accent-rgb),0.08);border:1px solid rgba(99,102,241,0.18);border-radius:10px;font-size:12px;font-weight:600;color:var(--cl-text-2);}.preseason-icon{font-size:16px;}.standings-table tbody td:first-child{padding-left:14px;text-align:left;}.highlight-pos-badge{flex-shrink:0;background:linear-gradient(135deg,var(--cl-accent),var(--cl-accent-2));color:white;font-size:12px;font-weight:900;padding:4px 10px;border-radius:999px;box-shadow:0 2px 10px rgba(var(--cl-accent-rgb),0.4);letter-spacing:-0.01em;}.season-stats{display:flex;align-items:center;gap:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--cl-text-2);border-top:1px solid var(--cl-divider);justify-content:center;}.stats-dot{opacity:0.5;}.separator-row td{padding:6px 0;text-align:center;border:none;}.separator-dots{font-size:10px;font-weight:700;color:var(--cl-text-2);letter-spacing:0.1em;opacity:0.6;}.tname-group{display:flex;flex-direction:column;min-width:0;overflow:hidden;}.goals-for-hint{font-size:9px;font-weight:600;color:var(--cl-text-2);opacity:0.7;margin-top:1px;}.highlighted-team{background:rgba(var(--cl-accent-rgb),0.07);}.highlighted-team .tname{font-weight:800;color:var(--cl-text);}.highlighted-team .points-cell{color:var(--cl-accent);font-weight:900;}.zone-cl td:first-child{border-left:3px solid var(--cl-cl);padding-left:11px;}.zone-el td:first-child{border-left:3px solid var(--cl-el);padding-left:11px;}.zone-conf td:first-child{border-left:3px solid var(--cl-conf);padding-left:11px;}.zone-rel td:first-child{border-left:3px solid var(--cl-rel);padding-left:11px;}.zone-espn td:first-child{border-left:3px solid var(--cl-zone-espn);padding-left:11px;}.standings-table tbody td:last-child{padding-right:14px;}.rank-cell{display:flex;align-items:center;gap:6px;font-weight:800;}.rank-num{width:24px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;}.zone-cl .rank-num{background:linear-gradient(135deg,var(--cl-cl),#4f46e5);color:white;box-shadow:0 2px 12px rgba(var(--cl-accent-rgb),0.4);}.zone-cl.rank-first .rank-num{background:linear-gradient(135deg,var(--cl-gold),#d97706);color:#1f1410;box-shadow:0 2px 16px var(--cl-gold-glow);animation:gold-shimmer 3s ease-in-out infinite;}@keyframes gold-shimmer{0%,100%{box-shadow:0 2px 16px var(--cl-gold-glow);}50%{box-shadow:0 2px 24px var(--cl-gold-glow),0 0 32px var(--cl-gold-glow);}}.zone-el .rank-num{background:linear-gradient(135deg,var(--cl-el),#ea580c);color:white;box-shadow:0 2px 12px rgba(249,115,22,0.4);}.zone-rel .rank-num{background:linear-gradient(135deg,var(--cl-rel),#b91c1c);color:white;box-shadow:0 2px 12px rgba(239,68,68,0.4);}.zone-conf .rank-num{background:linear-gradient(135deg,var(--cl-conf),#7e22ce);color:white;box-shadow:0 2px 12px rgba(168,85,247,0.4);}.zone-default .rank-num{background:var(--cl-card-2);color:var(--cl-text-2);}.team-cell{display:flex;align-items:center;gap:10px;text-align:left !important;}.team-cell img{width:24px;height:24px;object-fit:contain;flex-shrink:0;}.team-cell .tname{font-weight:700;font-size:13px;letter-spacing:-0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.points-cell{font-weight:900 !important;font-size:14px !important;}.gd-pos{color:var(--cl-green);font-weight:800 !important;}.gd-neg{color:var(--cl-live);font-weight:800 !important;}.groups-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;padding:12px;}.group-cell{background:var(--cl-card-2);border:1px solid var(--cl-divider);border-radius:14px;overflow:hidden;display:flex;flex-direction:column;}.group-title{padding:10px 14px;font-size:11px;font-weight:900;letter-spacing:0.12em;text-transform:uppercase;color:var(--cl-text);background:linear-gradient(135deg,rgba(var(--cl-accent-rgb),0.12),rgba(236,72,153,0.06));border-bottom:1px solid var(--cl-divider);display:flex;align-items:center;justify-content:space-between;gap:8px;}.group-pending-badge{font-size:9px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;padding:2px 7px;border-radius:999px;background:rgba(255,255,255,0.08);color:var(--cl-text-2);border:1px solid var(--cl-divider);}.groups-grid-cup .group-cell{border-left:3px solid var(--cl-accent);}.groups-grid-cup .group-cell-pending{border-left-color:var(--cl-divider);opacity:0.92;}.standings-table.compact{font-size:12px;}.standings-table.compact thead th{padding:8px 4px;font-size:9px;letter-spacing:0.08em;}.standings-table.compact tbody td{padding:7px 4px;font-size:12px;}.standings-table.compact .rank-num{width:20px;height:20px;font-size:10px;border-radius:6px;}.standings-table.compact .team-cell{gap:7px;}.standings-table.compact .team-cell img{width:18px;height:18px;}.standings-table.compact .team-cell .tname{font-size:12px;font-weight:700;}.standings-table.compact .points-cell{font-size:13px !important;}.legend{display:flex;flex-wrap:wrap;gap:12px;padding:12px 16px;border-top:1px solid var(--cl-divider);background:var(--cl-card-2);}.legend-item{display:flex;align-items:center;gap:6px;font-size:10px;color:var(--cl-text-2);font-weight:700;letter-spacing:0.04em;}.legend-dot{display:inline-block;flex-shrink:0;width:10px;height:10px;border-radius:3px;}.legend-dot.cl{background:linear-gradient(135deg,var(--cl-cl),#4f46e5);}.legend-dot.el{background:linear-gradient(135deg,var(--cl-el),#ea580c);}.legend-dot.rel{background:linear-gradient(135deg,var(--cl-rel),#b91c1c);}.legend-dot.conf{background:linear-gradient(135deg,var(--cl-conf),#7e22ce);}.event-toast{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:var(--cl-toast-bg);color:#ffffff;padding:10px 18px;border-radius:14px;font-size:13px;font-weight:800;z-index:100;animation:toast-bounce 4s cubic-bezier(0.16,1,0.3,1) forwards;pointer-events:none;max-width:90%;text-align:center;letter-spacing:-0.01em;text-shadow:0 1px 2px rgba(0,0,0,0.8);}.event-toast.variant-goal{box-shadow:0 0 0 2px var(--cl-gold),0 0 0 4px rgba(251,191,36,0.3),0 12px 40px rgba(0,0,0,0.7),0 0 60px rgba(251,191,36,0.4);}.event-toast.variant-goal strong{color:var(--cl-gold-text);}.event-toast.variant-yellow{box-shadow:0 0 0 2px #f59e0b,0 0 0 4px rgba(245,158,11,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-yellow strong{color:#fbbf24;}.event-toast.variant-red{box-shadow:0 0 0 2px var(--cl-live),0 0 0 4px rgba(239,68,68,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-red strong{color:#fca5a5;}.event-toast.variant-finished{box-shadow:0 0 0 2px var(--cl-green),0 0 0 4px rgba(16,185,129,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-finished strong{color:#6ee7b7;}@keyframes toast-bounce{0%{opacity:0;transform:translate(-50%,-20px) scale(0.7);}8%{opacity:1;transform:translate(-50%,0) scale(1.08);}14%{transform:translate(-50%,0) scale(1);}90%{opacity:1;transform:translate(-50%,0) scale(1);}100%{opacity:0;transform:translate(-50%,-10px) scale(0.95);}}.race-card{padding:16px;background:var(--cl-bg);color:var(--cl-text)}.race-head{display:flex;align-items:center;gap:9px}.race-head>span{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--cl-accent-soft)}.race-head div{flex:1}.race-head small{color:var(--cl-text-2);font-size:8px;font-weight:800;text-transform:uppercase}.race-head h2{margin:2px 0 0;font-size:16px}.race-head>b{color:var(--cl-text-2);font-size:9px}.race-focus{display:grid;grid-template-columns:42px 1fr auto;align-items:center;gap:9px;margin:13px 0;padding:11px;border:1px solid var(--cl-divider);border-radius:12px;background:var(--cl-surface)}.race-focus img{width:40px;height:40px;object-fit:contain}.race-focus div{display:grid;gap:3px}.race-focus small{color:var(--cl-text-2);font-size:9px}.race-focus>span{color:var(--cl-accent);font-weight:900}.race-list{display:grid}.race-list>div{display:grid;grid-template-columns:22px 1fr 28px 64px;align-items:center;gap:7px;padding:8px 4px;border-bottom:1px solid var(--cl-divider);font-size:10px}.race-list>div.tracked{background:var(--cl-accent-soft);border-radius:8px}.race-list span{display:grid;gap:4px}.race-list i{display:block;height:3px;border-radius:3px;background:linear-gradient(90deg,var(--cl-accent),var(--cl-accent-2))}.race-list strong{text-align:right}.race-list small{color:var(--cl-text-2);text-align:right;font-size:8px}.race-projection{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.race-projection span{padding:5px 8px;border:1px solid var(--cl-divider);border-radius:999px;background:var(--cl-surface);color:var(--cl-text-2);font-size:8px;font-weight:800}.trajectory{margin-top:12px;padding:10px;border-radius:10px;background:var(--cl-surface)}.trajectory>small{color:var(--cl-text-2);font-size:8px;text-transform:uppercase}.trajectory>div{display:flex;align-items:end;gap:4px;height:64px;margin-top:7px}.trajectory span{display:grid;grid-template-rows:1fr auto;align-items:end;flex:1;height:100%;text-align:center}.trajectory i{display:block;border-radius:3px 3px 0 0;background:var(--cl-accent);opacity:.75}.trajectory b{font-size:7px;color:var(--cl-text-2)}.race-card footer{margin-top:9px;color:var(--cl-text-2);font-size:8px;text-align:right}`]}}customElements.get("soccer-live-standings")||customElements.define("soccer-live-standings",Ke);const Ue=i.AH`:host{-webkit-tap-highlight-color:transparent;}ha-card{position:relative;overflow:hidden;border-radius:20px;box-shadow:0 4px 24px var(--cl-shadow,rgba(0,0,0,0.24));background:var(--cl-bg);color:var(--cl-text);}.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.18),transparent 55%),radial-gradient(ellipse at 100% 100%,rgba(var(--cl-accent-2-rgb),0.14),transparent 55%);pointer-events:none;z-index:0;}.hero-bg::after{content:'';position:absolute;inset:0;background-image:var(--cl-bg-image,none);background-repeat:no-repeat;background-position:center;background-size:var(--cl-bg-image-size,80%) auto;opacity:var(--cl-bg-image-opacity,0.07);pointer-events:none;}.bg-logos{position:absolute;inset:0;display:flex;justify-content:space-between;align-items:center;pointer-events:none;overflow:hidden;z-index:0;}.bg-logo{width:60%;height:140%;display:flex;align-items:center;opacity:0.08;}.bg-logo.home{justify-content:flex-start;transform:translateX(-30%);}.bg-logo.away{justify-content:flex-end;transform:translateX(30%);}.bg-logo img{width:100%;object-fit:contain;}.card-content{position:relative;z-index:1;}.top-bar{position:relative;z-index:1;}button:focus-visible,[role="button"]:focus-visible,select:focus-visible,input:focus-visible,summary:focus-visible,a:focus-visible{outline:3px solid color-mix(in srgb,var(--cl-accent,#6366f1) 72%,white);outline-offset:2px;}.match-row,.h2h-row,.tl-row,.squad-row,.transfer-row,.injury-row{content-visibility:auto;contain-intrinsic-size:auto 52px;}@media (pointer:coarse){button,[role="button"],select{min-height:36px;}}@media (prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto !important;animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;}}`;function Je(e,t){return i.qy`
    <div class="bg-logos">
      ${e?i.qy`<div class="bg-logo home"><img src="${e}" alt="" loading="lazy"></div>`:""}
      ${t?i.qy`<div class="bg-logo away"><img src="${t}" alt="" loading="lazy"></div>`:""}
    </div>
    <div class="hero-bg"></div>
  `}function Qe(e){return Array.isArray(e)?e.map(e=>String(e?.result||e||"").slice(0,1).toUpperCase()).filter(e=>"WDL".includes(e)).slice(-5):String(e||"").toUpperCase().split("").filter(e=>"WDL".includes(e)).slice(-5)}function Ye(e){const t=e||{},a=t.preview||{},i=Array.isArray(t.preview_analysis?.factors)?t.preview_analysis.factors:[],s=i.find(e=>"form"===e?.code)||{},r=i.find(e=>"standings"===e?.code)||{},o=i.find(e=>"absences"===e?.code)||null,n=i.find(e=>"player_to_watch"===e?.code)?.value||null,l=Qe(a.home_form||t.home_form||s.home),c=Qe(a.away_form||t.away_form||s.away),d=Array.isArray(t.head_to_head)?t.head_to_head:[],p=[t.home_rank,t.away_rank,t.home_standing_summary,t.away_standing_summary].some(e=>null!=e&&""!==e&&"N/A"!==e);return{homeForm:l,awayForm:c,h2h:d.slice(0,5),h2hCount:d.length||Number(a.h2h_count||0),hasStandings:p||null!=r.home||null!=r.away,standings:{home:t.home_rank??r.home??null,away:t.away_rank??r.away??null},absences:o,featured:n,competition:t.competition_name||t.league_name||"",round:t.week_number??t.round??""}}function Ze(e){const t=e?.review||{},a=e?.match_summary||{},i=e?.post_match_analysis||{},s=Array.isArray(t.scorers)?t.scorers:(a.goal_scorers||[]).map(e=>({player:e})),r=Array.isArray(t.top_rated_players)?t.top_rated_players:[],o=t.expected_goals||(null!=a.home_xg||null!=a.away_xg?{home:a.home_xg,away:a.away_xg}:null!=i.home_xg||null!=i.away_xg?{home:i.home_xg,away:i.away_xg}:null),n=t.player_of_the_match||e?.player_of_the_match||a.player_of_the_match||i.player_of_the_match||null;return{scorers:s,playerOfMatch:n,rated:r,expectedGoals:o,standout:t.standout_stat||null,turningPoint:i.turning_point||null,present:Boolean(s.length||n||r.length||o||t.standout_stat||i.turning_point)}}function Xe(e){if("post"!==e?.state)return null;const t=e.prediction||{},a=Number(e.home_score),i=Number(e.away_score);if(!Number.isFinite(a)||!Number.isFinite(i))return null;const s=a>i?"home":i>a?"away":"draw",r={home:Number(t.percent_home),draw:Number(t.percent_draw),away:Number(t.percent_away)};let o=null;const n=String(t.winner_name||"").trim().toLowerCase();if(n&&e.home_team&&n===String(e.home_team).trim().toLowerCase()&&(o="home"),n&&e.away_team&&n===String(e.away_team).trim().toLowerCase()&&(o="away"),!o){const e=Object.entries(r).filter(([,e])=>Number.isFinite(e)).sort((e,t)=>t[1]-e[1]);e.length&&(1===e.length||e[0][1]>e[1][1])&&(o=e[0][0])}if(!o)return null;const l=e.review?.expected_goals||e.expected_goals||null;return{predicted:o,actual:s,correct:o===s,predictedPercent:Number.isFinite(r[o])?r[o]:null,xg:!l||null==l.home&&null==l.away?null:l}}function et(e){const t=Array.isArray(e?.post_match_analysis?.milestones)?e.post_match_analysis.milestones.map(e=>({...e,type:e.code})):[],a=e?.post_match_analysis?.turning_point;if(t.length){if("decisive_goal"===a?.code){const e=t.findIndex(e=>e.minute===a.minute&&(e.player||"")===(a.player||""));e>=0&&(t[e]={...t[e],...a,type:"decisive_goal"})}return t}const i=(Array.isArray(e?.key_events)?e.key_events:[]).filter(e=>e&&(_e(e)||/red/i.test(`${e.type||""} ${e.type_text||""}`))).sort((e,t)=>Number(e.minute??e.clock??0)-Number(t.minute??t.clock??0));if(!i.length)return(Array.isArray(e?.match_story)?e.match_story:[]).slice().sort((e,t)=>Number(e.minute||0)-Number(t.minute||0));const s=i.filter(_e),r=[];s[0]&&r.push({...s[0],type:"opening_goal",minute:s[0].minute??s[0].clock});for(const e of s.slice(1))null!=e.home_score&&null!=e.away_score&&Number(e.home_score)===Number(e.away_score)&&r.push({...e,type:"equalizer",minute:e.minute??e.clock});for(const e of i.filter(e=>/red/i.test(`${e.type||""} ${e.type_text||""}`)))r.push({...e,type:"red_card",minute:e.minute??e.clock});const o=Number(e.home_score),n=Number(e.away_score),l=o>n?e.home_team:n>o?e.away_team:"",c=t=>{const a=Number(t.home_score),i=Number(t.away_score);return Number.isFinite(a)&&Number.isFinite(i)?l===e.home_team?a>i:i>a:0},d=s.find((e,t)=>l&&e.team===l&&c(e)&&s.slice(t+1).every(c));return d&&d!==s[0]&&r.push({...d,type:"decisive_goal",minute:d.minute??d.clock}),[...new Map(r.map(e=>[`${e.type}:${e.minute}:${e.player||e.athletes?.[0]||""}`,e])).values()].sort((e,t)=>Number(e.minute||0)-Number(t.minute||0))}function tt(e){if(!e||!["in","live","post"].includes(e.state))return[];const t=[],a=Number(e.home_score),i=Number(e.away_score);Number.isFinite(a)&&Number.isFinite(i)&&t.push({key:"post"===e.state?"story.final_result":"story.current_score",vars:{home:e.home_team,away:e.away_team,score:`${a}–${i}`}});const s=(e.key_events||[]).filter(_e),r=a>i?e.home_team:i>a?e.away_team:"";r&&s.some(t=>{const a=Number(t.home_score),i=Number(t.away_score);return Number.isFinite(a)&&Number.isFinite(i)?r===e.home_team?a<i:i<a:0})&&t.push({key:"story.comeback",vars:{team:r}});const o=e.review?.expected_goals||e.expected_goals||{},n=Number(o.home),l=Number(o.away);Number.isFinite(n)&&Number.isFinite(l)&&Math.abs(n-l)>=1&&t.push({key:"story.xg_dominance",vars:{team:n>l?e.home_team:e.away_team,value:Math.max(n,l).toFixed(2)}});const c=Number(e.home_statistics?.shots??e.home_statistics?.total_shots),d=Number(e.away_statistics?.shots??e.away_statistics?.total_shots);return Number.isFinite(c)&&Number.isFinite(d)&&Math.abs(c-d)>=5&&t.push({key:"story.shot_dominance",vars:{team:c>d?e.home_team:e.away_team,value:Math.max(c,d)}}),t.slice(0,3)}const at=i.AH`.sl-analysis-momentum{margin:14px 0;padding:14px;border-left:3px solid var(--cl-accent,#6366f1);border-radius:10px;background:rgba(99,102,241,.07);}.sl-analysis-title{margin:0 0 10px;color:var(--cl-text,#f8fafc);font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;}.sl-analysis-chart{width:100%;height:90px;overflow:visible;}.sl-analysis-chart line{stroke:rgba(148,163,184,.3);stroke-width:1;}.sl-analysis-chart path{fill:none;stroke:var(--cl-accent,#6366f1);stroke-width:3;vector-effect:non-scaling-stroke;}`;function it(e,{t}={}){const a=function(e){const t=Array.isArray(e?.momentum)?e.momentum:[];if(t.length)return t;const a=e?.momentum_analysis?.points;return Array.isArray(a)?a.map(e=>({minute:e.minute,value:Number(e.net)||0,home:Number(e.home)||0,away:Number(e.away)||0})):[]}(e);if(!a.length)return"";const s=Math.max(1,...a.map(e=>Math.abs(Number(e.value)||0))),r=a.map((e,t)=>{const i=1===a.length?150:300*t/(a.length-1),r=45-(Number(e.value)||0)/s*37;return`${t?"L":"M"}${i.toFixed(1)},${r.toFixed(1)}`}).join(" ");return i.qy`<section class="sl-analysis-momentum">
    <h5 class="sl-analysis-title">${t?t("popup.momentum"):"Match momentum"}</h5>
    <svg class="sl-analysis-chart" viewBox="0 0 ${300} ${90}" preserveAspectRatio="none" role="img" aria-label=${t?t("popup.momentum"):"Match momentum"}>
      <line x1="0" y1="${45}" x2="${300}" y2="${45}"></line>
      <path d="${r}"></path>
    </svg>
  </section>`}const st={schedule:"card.schedule",preview:"match.preview",lineup:"tab.lineup",timeline:"tab.timeline",statistics:"tab.stats",review:"match.review"};function rt(e,t=Date.now()){const a=e?new Date(e).getTime():NaN;return Number.isFinite(a)?Math.max(0,Math.round((t-a)/6e4)):null}function ot(e,t={}){const a=function(e,t="",a=null){const i=e?.source_sections;if(i&&"object"==typeof i)return Object.entries(i).map(([e,i])=>({section:e,label:st[e]||"popup.parts",available:1==i.available,provider:i.provider||t,age:rt(i.updated_at||a),enriched:1==i.enriched}));const s=e?.detail_capabilities||[];return Object.keys(st).map(e=>({section:e,label:st[e],available:"schedule"===e||s.includes(e),provider:t,age:rt(a),enriched:0}))}(e,t.provider,t.updatedAt);if(!a.some(e=>e.available)||!a.some(e=>e.enriched||!e.available))return"";const s=t.t||(e=>e);return i.qy`<section class="source-status">
    <h5>${s("source.sections")}</h5>
    <div>${a.map(e=>i.qy`<span class="${e.available?"ok":"missing"} ${e.enriched?"enriched":""}">
      <b>${s(e.label)}</b>
      <small>${e.available?`${e.provider||"—"}${null!=e.age?` · ${s("popup.updated_minutes",{n:e.age})}`:""}`:s("source.not_available")}</small>
    </span>`)}</div>
  </section>`}const nt=i.AH`.source-status{margin:10px 0;padding:10px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface)}.source-status h5{margin:0 0 7px;color:var(--cl-text-2);font-size:9px;text-transform:uppercase;letter-spacing:.08em}.source-status>div{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}.source-status span{min-width:0;padding:6px;border-radius:7px;background:var(--cl-chip-bg)}.source-status span.enriched{box-shadow:inset 2px 0 var(--cl-accent)}.source-status span.missing{opacity:.58}.source-status b,.source-status small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.source-status b{font-size:8px}.source-status small{margin-top:2px;color:var(--cl-text-2);font-size:7px}@media(max-width:380px){.source-status>div{grid-template-columns:repeat(2,minmax(0,1fr))}}`;function lt(e){return(0,s.Vp)(e?.date_iso)||(0,s.Vp)(e?.date)||null}function ct(e){return null!=e?.event_id&&""!==e?.event_id?`event:${e.event_id}`:`fixture:${lt(e)??String(e?.date_iso||e?.date||"")}:${e?.home_id??e?.home_team??""}:${e?.away_id??e?.away_team??""}`}function dt(e){const t=e=>"in"===e?0:"pre"===e?1:"post"===e?2:3;return[...Array.isArray(e)?e:[]].sort((e,a)=>{const i=t(e?.state)-t(a?.state);if(i)return i;const s=lt(e),r=lt(a);return null===s&&null===r?0:null===s?1:null===r?-1:"post"===e?.state?r-s:s-r})}class pt extends i.WF{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_recentEventMatches:{type:Object},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String},_detailsLoading:{type:Boolean},_detailsError:{type:Boolean}}}constructor(){super(),this._recentEventMatches=new Map,this._eventSubscriptions=[],this._cleanupTimers=[],this._toastMessage="",this._toastVisible=0,this._toastVariant="goal",this._toastTimer=null,this._detailsLoading=0,this._detailsError=0}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this.maxEventsVisible=e.max_events_visible?e.max_events_visible:5,this.maxEventsTotal=e.max_events_total?e.max_events_total:50,this.showFinishedMatches=void 0!==e.show_finished_matches?e.show_finished_matches:1,this.hideHeader=void 0!==e.hide_header?e.hide_header:0,this.hidePastDays=void 0!==e.hide_past_days?e.hide_past_days:0,this.reverseOrder=1==e.reverse_order,this.showEventToasts=1==e.show_event_toasts,this.myTeam=(e.my_team||"").toLowerCase(),this.showLiveTicker=0!=e.show_live_ticker,this.activeMatch=null,this.showPopup=0}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._toastTimer&&clearTimeout(this._toastTimer),this._eventSubscriptionGeneration=(this._eventSubscriptionGeneration||0)+1,this._eventSubscriptionPromise=null,this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach(e=>{"function"==typeof e&&e()}),this._eventSubscriptions=[]),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null),this._removePopupPortal(),this._cleanupTimers.forEach(e=>clearTimeout(e)),this._cleanupTimers=[]}_subscribeToEvents(){if(!this.hass||!this.hass.connection)return;if(this._eventSubscriptionPromise||this._eventSubscriptions?.length)return;const e=this._eventSubscriptionGeneration||0,t=this._handleSoccerLiveEvent.bind(this),a=Promise.allSettled(["soccer_live_goal","soccer_live_goal_cancelled","soccer_live_yellow_card","soccer_live_red_card","soccer_live_kickoff_changed","soccer_live_venue_changed","soccer_live_opponent_changed"].map(e=>this.hass.connection.subscribeEvents(t,e)));this._eventSubscriptionPromise=a,a.then(t=>{const a=t.filter(e=>"fulfilled"===e.status&&"function"==typeof e.value).map(e=>e.value);if((this._eventSubscriptionGeneration||0)!==e||!this.isConnected)return void a.forEach(e=>e());const i=t.filter(e=>"rejected"===e.status);i.length>0?(a.forEach(e=>e()),this._eventSubscriptions=[],i.forEach(e=>console.warn("Soccer Live Matches subscription failed:",e.reason))):this._eventSubscriptions=a}).finally(()=>{this._eventSubscriptionPromise===a&&(this._eventSubscriptionPromise=null)})}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return 0;const t=this.hass.states[this._config.entity];return t?(t.attributes.matches||[]).some(t=>t.home_team===e.home_team&&t.away_team===e.away_team):0}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;if(!this._eventBelongsToThisCard(a))return;if(!Ne(this,a))return;const i=`${a.home_team}_${a.away_team}`;this._recentEventMatches.set(i,"soccer_live_goal"===t?"goal":"card"),this.requestUpdate(),this._cleanupTimers.push(setTimeout(()=>{this._recentEventMatches.delete(i),this.requestUpdate()},5e3)),"soccer_live_goal"===t&&requestAnimationFrame(()=>this._triggerGoalCelebration()),this.showEventToasts&&this._showEventToast(t,a)}_triggerGoalCelebration(){const e=this.shadowRoot&&this.shadowRoot.querySelector("ha-card");if(!e)return;e.querySelectorAll(".confetti").forEach(e=>e.remove());const t=["#ec4899","#6366f1","#06b6d4","#fbbf24","#10b981","#ef4444"],a=["⚽","🎉","✨","🔥","⭐"];for(let i=0;i<28;i++){const i=document.createElement("div");i.className="confetti",Math.random()>.55?(i.textContent=a[Math.floor(Math.random()*a.length)],i.style.fontSize=12+10*Math.random()+"px",i.style.background="transparent"):(i.style.background=t[Math.floor(Math.random()*t.length)],i.style.borderRadius=Math.random()>.5?"50%":"2px"),i.style.setProperty("--dx",380*(Math.random()-.5)+"px"),i.style.setProperty("--dy",200*Math.random()+80+"px"),i.style.animationDelay=.4*Math.random()+"s",e.appendChild(i),setTimeout(()=>i.remove(),2200)}}_showEventToast(e,t){const a=De(e=>this._t(e),e,t);a&&(this._toastMessage=a.message,this._toastVariant=a.variant,this._toastVisible=1,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this._toastVisible=0,this.requestUpdate()},4e3),this.requestUpdate())}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-matches-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_all_",max_events_visible:5,max_events_total:50,hide_past_days:0,show_finished_matches:1,hide_header:0,show_event_toasts:0}}_parseMatchDate(e){return(0,s.n1)(e)}_matchDateValue(e){return e?.date_iso||e?.date||""}_parsedMatchDate(e){return this._parseMatchDate(this._matchDateValue(e))}_matchTimeLabel(e){if("in"===e.state)return e.clock&&"N/A"!==e.clock?e.clock:this._t("status.live");if("post"===e.state)return this._t("status.full_time");if(this._matchDateValue(e)){if(!e.date_iso&&e.date){const t=e.date.split(" ");return t[1]||t[0]}const t=this._parsedMatchDate(e);if(t){const e=(0,s.$c)(this.hass,this._config),a=this.hass?.config?.time_zone;return t.toLocaleTimeString(e,{hour:"2-digit",minute:"2-digit",...a?{timeZone:a}:{}})}}return"—"}_matchScore(e,t){if("pre"===e.state)return"-";const a=e["home"===t?"home_score":"away_score"];return null==a||"N/A"===a?"-":a}_displayCompetitionName(e){return Se(e,(0,s.$c)(this.hass,this._config))}_isWinner(e,t){if("pre"===e.state)return null;const a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)||a===i?null:"home"===t?a>i:i>a}_dayKey(e){const t=this._matchDateValue(e);if(!t)return"—";const a=this._parsedMatchDate(e);if(!a)return String(t).split(" ")[0]||"—";const i=new Date;i.setHours(0,0,0,0);const s=new Date(a);s.setHours(0,0,0,0);const r=Math.round((s-i)/864e5);if(0===r)return"⚡ "+this._t("time.today");if(-1===r)return this._t("time.yesterday");if(1===r)return this._t("time.tomorrow");const o=this._t("month."+(s.getMonth()+1));return`${s.getDate()} ${o}`}async showDetails(e){this.activeMatch=e,this.showPopup=1;const t=this.hass?.states?.[this._config.entity]?.attributes;if(t?.detail_service&&!Ee(e)){this._detailsLoading=1,this._detailsError=0;try{await Pe(this.hass,t,e)}catch(e){this._detailsError=1}finally{this._detailsLoading=0,this.requestUpdate()}}}closePopup(){this.showPopup=0}separateEvents(e){const t=[],a=[],i=[];return e.forEach(e=>{const s=String(e||"");s.includes("Goal")||s.includes("Penalty - Scored")?t.push(this.formatMatchEvent(s)):s.includes("Yellow Card")?a.push(this.formatMatchEvent(s)):s.includes("Red Card")&&i.push(this.formatMatchEvent(s))}),{goals:t,yellowCards:a,redCards:i}}formatMatchEvent(e){const t=e=>this._t(e);let a=String(e||"").trim();a=a.replace(/^Goal\s*-\s*/i,"").replace(/^Yellow Card\s*-\s*/i,"").replace(/^Red Card\s*-\s*/i,"").replace(/^Penalty - Scored\s*-\s*/i,`${t("event.penalty")} - `).replace(/^Header\s*-\s*/i,`${t("event.header")} - `).replace(/^Shot\s*-\s*/i,`${t("event.shot")} - `).replace(/^Free-kick\s*-\s*/i,`${t("event.free_kick")} - `).replace(/^Penalty\s*-\s*/i,`${t("event.penalty")} - `),a=a.replace(/^([^:]+):\s*/,"$1 ");const i=[t("event.header"),t("event.shot"),t("event.penalty"),t("event.free_kick")].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return a=a.replace(new RegExp(`^(${i.join("|")})\\s*-\\s*(.+)$`,"i"),(e,t,a)=>`${a} (${t.toLowerCase()})`),a=a.replace(/\bN\/A\b/g,t("generic.unknown")),a}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this._config.entity,t=this.hass.states[e];if(!t)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;let a=t.attributes.matches||[];const s=t.attributes.league_info?t.attributes.league_info[0]:null,r=t.attributes.team_name&&"N/A"!==t.attributes.team_name?t.attributes.team_name:null,o=t.attributes.team_logo||null;this._config.filter_competition&&(a=a.filter(e=>e.league_name===this._config.filter_competition)),this._config.filter_season&&(a=a.filter(e=>e.season_label===this._config.filter_season)),this._config.filter_state&&(a=a.filter(e=>e.state===this._config.filter_state)),"home"===this._config.filter_venue&&t.attributes.team_id&&(a=a.filter(e=>String(e.home_id)===String(t.attributes.team_id))),"away"===this._config.filter_venue&&t.attributes.team_id&&(a=a.filter(e=>String(e.away_id)===String(t.attributes.team_id))),this.showFinishedMatches||(a=a.filter(e=>{return t=e,!(t?.state?"post"===t.state:["full time","finished","final","einde wedstrijd"].includes(String(t?.status||"").trim().toLowerCase()));var t}));const n=1==this._config.smart_order||void 0===this._config.smart_order&&"smart"===t.attributes.recommended_match_order;if(a=n?dt(a):a.slice().sort((e,t)=>{const a=lt(e),i=lt(t);return null===a&&null===i?0:null===a?1:null===i?-1:this.reverseOrder?i-a:a-i}),this.hidePastDays>0){const e=new Date;e.setDate(e.getDate()-this.hidePastDays),a=a.filter(t=>{const a=this._parsedMatchDate(t);return a?a>=e:1})}const l=a.slice(0,this.maxEventsTotal);if(0===l.length)return K(t.attributes,e=>this._t(e),()=>i.qy`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`);const c=l.filter(e=>"in"===e.state).length,d=new Set(l.map(e=>e.league_name).filter(e=>e&&"N/A"!==e)).size>1,p=this._config.group_by||"day";let h=[];if("competition"===p){const e=new Map;l.forEach(t=>{const a=t.league_name&&"N/A"!==t.league_name?this._displayCompetitionName(t.league_name):"—",i=ke({competitionName:t.league_name,competitionLogo:t.league_logo||t.competition_logo,fallbackLogo:null,isFriendly:t.is_friendly});e.has(a)||e.set(a,{key:a,logo:i,dayDiff:null,matches:[]}),e.get(a).matches.push(t)}),h=[...e.values()].sort((e,t)=>(e.matches.some(e=>"in"===e.state)?0:e.matches.some(e=>"pre"===e.state)?1:2)-(t.matches.some(e=>"in"===e.state)?0:t.matches.some(e=>"pre"===e.state)?1:2))}else{let e=null,t=null;l.forEach(a=>{const i=this._dayKey(a);if(i!==e){e=i;const s=this._parsedMatchDate(a);let r=null;if(s){const e=new Date;e.setHours(0,0,0,0);const t=new Date(s);t.setHours(0,0,0,0),r=Math.round((t-e)/864e5)}const o=a.season_label||null,l=Boolean(n&&t&&o&&o!==t);o&&(t=o),h.push({key:i,dayDiff:r,matches:[a],season:o,seasonBreak:l})}else h[h.length-1].matches.push(a)})}const u=Math.max(80*this.maxEventsVisible,240),g=l.filter(e=>"in"===e.state),m=g.map(e=>`${e.home_abbrev||e.home_team}  ${S(e.home_score,"-")} - ${S(e.away_score,"-")}  ${e.away_abbrev||e.away_team}`).join("     ·     ");return i.qy`
      <ha-card>
        <div class="hero-bg"></div>

        ${this.showEventToasts&&this._toastVisible?i.qy`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        ${this.showLiveTicker&&g.length>0?i.qy`
          <div class="live-ticker">
            <span class="ticker-badge">${this._t("status.live")}</span>
            <div class="ticker-track">
              <span class="ticker-content">${m}</span>
              <span class="ticker-content" aria-hidden="true">${m}</span>
            </div>
          </div>
        `:""}

        ${this.hideHeader?"":(()=>{const e=ke({competitionName:s&&s.name||"",competitionLogo:s&&s.logo_href,fallbackLogo:o||null}),a=s&&s.abbreviation&&"World"!==s.abbreviation?s.abbreviation:s&&s.name?this._displayCompetitionName(s.name):null,i=r||a||t.state||"Soccer Live",n=t.attributes.total_matches||t.attributes.matches?.length||0,l=t.attributes.finished_matches_count??(t.attributes.matches||[]).filter(e=>"post"===e.state).length,d=c>0?`${c} ${this._t("status.live")}`:n>0?`${l} / ${n}`:"";return X({logo:e,title:i,badge:ee(d,c>0?"live":"neutral")})})()}

        <div class="scroll-content" style="max-height: ${u}px;">
          ${h.map(e=>i.qy`
            ${e.seasonBreak?i.qy`<div class="season-divider">${e.season}</div>`:""}
            <div class="day-divider ${"competition"===p?"comp":0===e.dayDiff?"today":-1===e.dayDiff?"yesterday":1===e.dayDiff?"tomorrow":""}">
              ${"competition"===p&&e.logo?i.qy`<img class="comp-divider-logo" src="${e.logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
              ${e.key}
              ${"competition"!==p&&null!==e.dayDiff&&e.dayDiff>1?i.qy`<span class="day-rel">· ${this._t("time.in_n_d",{n:e.dayDiff})}</span>`:""}
            </div>
            ${e.matches.map(e=>{const t=`${e.home_team}_${e.away_team}`,a="in"===e.state,s=this._recentEventMatches.get(t),r=this._isWinner(e,"home"),o=this._isWinner(e,"away"),n=e.broadcast&&""!==e.broadcast&&"N/A"!==e.broadcast?e.broadcast:"",l="pre"===e.state,c=this.myTeam&&e.home_team&&e.home_team.toLowerCase().includes(this.myTeam),p=this.myTeam&&e.away_team&&e.away_team.toLowerCase().includes(this.myTeam),h=e.detail_capabilities||[];return i.qy`
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
                      <span class="name ${1==r?"winner":0==r?"loser":""} ${c?"my-team-name":""}">${e.home_team}</span>
                      <span class="score ${1==r?"winner":0==r?"loser":""}">${this._matchScore(e,"home")}</span>
                    </div>
                    <div class="match-team">
                      <img src="${e.away_logo}" alt="${e.away_team}" />
                      <span class="name ${1==o?"winner":0==o?"loser":""} ${p?"my-team-name":""}">${e.away_team}</span>
                      <span class="score ${1==o?"winner":0==o?"loser":""}">${this._matchScore(e,"away")}</span>
                    </div>
                    ${n&&l||h.length||d&&e.league_name&&"N/A"!==e.league_name?i.qy`
                      <div class="row-extras">
                        ${d&&e.league_name&&"N/A"!==e.league_name?i.qy`
                          <span class="league-chip">${this._displayCompetitionName(e.league_name)}</span>
                        `:""}
                        ${n&&l&&!this._config.hide_broadcasts?i.qy`
                          <span class="tv-chip" title="${this._t("ui.live_tv")}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
                            ${n}
                          </span>
                        `:""}
                        ${h.includes("statistics")?i.qy`<span class="detail-cap" title="${this._t("card.stats")}">▥</span>`:""}
                        ${h.includes("lineups")?i.qy`<span class="detail-cap" title="${this._t("popup.lineups")}">♟</span>`:""}
                        ${h.includes("shotmap")?i.qy`<span class="detail-cap" title="${this._t("popup.shotmap")}">◉</span>`:""}
                      </div>
                    `:""}
                  </div>
                  <div class="match-status-icon">›</div>
                </div>
              `})}
          `)}
        </div>
      </ha-card>
    `}updated(e){if(e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents(),e.has("hass")&&this.activeMatch){const e=this.hass?.states?.[this._config.entity]?.attributes,t=je(e,this.activeMatch.event_id);t&&t!==this.activeMatch&&(this.activeMatch=t)}(e.has("showPopup")||e.has("activeMatch"))&&(this.showPopup?(this._renderPopupPortal(),this._escHandler||(this._escHandler=e=>{"Escape"===e.key&&(this.showPopup=0)},document.addEventListener("keydown",this._escHandler))):(this._removePopupPortal(),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null)))}_copyPopupThemeVars(e){const t=getComputedStyle(this);["--cl-bg","--cl-text","--cl-text-2","--cl-divider","--cl-accent","--cl-accent-2","--cl-accent-rgb","--cl-accent-2-rgb"].forEach(a=>{const i=t.getPropertyValue(a);i&&e.style.setProperty(a,i)})}_renderPopupPortal(){if(this.activeMatch&&(this._popupPortal||(this._popupPortal=document.createElement("dialog"),this._popupPortal.className="soccer-live-matches-popup-portal",this._popupCancelHandler=e=>{e.preventDefault(),this.showPopup=0},this._popupClickHandler=e=>{e.target===this._popupPortal&&(this.showPopup=0)},this._popupPortal.addEventListener("cancel",this._popupCancelHandler),this._popupPortal.addEventListener("click",this._popupClickHandler),document.body.appendChild(this._popupPortal)),this._copyPopupThemeVars(this._popupPortal),(0,i.XX)(i.qy`${this._renderPopupPortalStyles()}${Le("mp")}${this._renderPopup()}`,this._popupPortal),!this._popupPortal.open))try{this._popupPortal.showModal()}catch(e){this._popupPortal.setAttribute("open","")}}_removePopupPortal(){this._popupPortal&&(this._popupPortal.open&&this._popupPortal.close(),this._popupCancelHandler&&(this._popupPortal.removeEventListener("cancel",this._popupCancelHandler),this._popupCancelHandler=null),this._popupClickHandler&&(this._popupPortal.removeEventListener("click",this._popupClickHandler),this._popupClickHandler=null),(0,i.XX)(i.qy``,this._popupPortal),this._popupPortal.remove(),this._popupPortal=null)}_renderPopupPortalStyles(){return i.qy`
          <style>
            ${Te.cssText}
            ${ge.cssText}
            ${ie.cssText}
            ${nt.cssText}
            ${at.cssText}
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
        .mp-section-title { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .mp-shotmap { position:relative; height:190px; border:1px solid rgba(255,255,255,.3); border-radius:8px; background:linear-gradient(90deg,rgba(16,185,129,.12),rgba(16,185,129,.05)); }
        .mp-shotmap::after { content:''; position:absolute; left:50%; top:0; bottom:0; border-left:1px solid rgba(255,255,255,.25); }
        .mp-shot { position:absolute; width:9px; height:9px; border-radius:50%; background:#f8fafc; border:2px solid #64748b; transform:translate(-50%,-50%); z-index:1; }
        .mp-shot.goal { background:#10b981; border-color:#d1fae5; width:12px; height:12px; }
        .mp-ratings { display:grid; gap:6px; }
        .mp-ratings div { display:flex; justify-content:space-between; padding:7px 9px; border-radius:7px; background:rgba(255,255,255,.05); font-size:12px; }
        .mp-ratings strong { color:#fbbf24; }
        .mp-insight{border-left-color:var(--cl-accent,#6366f1);background:rgba(99,102,241,.07)}.mp-story{display:grid;gap:7px}.mp-story>div{display:grid;grid-template-columns:30px 1fr;gap:8px}.mp-story>div>b{color:var(--cl-accent,#6366f1)}.mp-story span{display:flex;flex-direction:column}.mp-story strong{color:var(--cl-text,#f8fafc);font-size:11px}.mp-story small{color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-narrative{display:grid;gap:4px;margin:8px 0 0;padding:8px 8px 8px 22px;border-radius:8px;background:rgba(255,255,255,.04);color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-outcome{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-outcome span{display:flex;flex-direction:column}.mp-outcome span:last-child{text-align:right}.mp-outcome span b{color:var(--cl-text,#f8fafc);font-size:11px}.mp-outcome>strong{color:var(--cl-accent,#6366f1);font-size:18px}.mp-outcome-xg{text-align:center;margin-top:7px;color:var(--cl-text-2,#94a3b8);font-size:10px}.mp-outcome-xg b{color:var(--cl-text,#f8fafc)}
        .mp-close {
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          color: white; padding: 12px 20px; border: none; border-radius: 12px;
          cursor: pointer; margin-top: 20px; font-weight: 800; width: 100%; font-size: 14px;
        }
      </style>
    `}_renderPopup(){const e=this.activeMatch,t="pre"===e.state,a="in"===e.state,r="post"===e.state,o=e=>""===e||"N/A"===e?"-":S(e,"-"),n=!t&&(e.clock&&"N/A"!==e.clock?e.clock:be(e.status,e=>this._t(e))),l=(0,s.DK)(e.date,(0,s.$c)(this.hass,this._config))||"—",{goals:c,yellowCards:d,redCards:p}=this.separateEvents(e.match_details||[]),h=(e,t,a)=>t.length?i.qy`
      <div class="mp-event-group ${a}">
        <h5 class="mp-event-title">${e}</h5>
        <ul class="mp-event-list">${t.map(e=>i.qy`<li>${e}</li>`)}</ul>
      </div>`:"",u=c.length||d.length||p.length;return i.qy`
      <div class="mp-overlay" @click="${e=>{e.target===e.currentTarget&&(this.showPopup=0)}}">
        <div class="mp-box" @click="${e=>e.stopPropagation()}">
          <h3 class="mp-title">${this._t("popup.match_details")}</h3>
          <div class="mp-score-row">
            <img class="mp-logo" src="${e.home_logo}" alt="" @error="${e=>e.target.style.display="none"}">
            <div class="mp-score-center">
              ${t?i.qy`
                <div class="mp-kickoff">${l}</div>
                <div class="mp-kickoff-label">${this._t("status.kickoff")}</div>
              `:i.qy`
                <div class="mp-score ${a?"live":""}">${o(e.home_score)}<span class="mp-sep"> – </span>${o(e.away_score)}</div>
                ${a&&n?i.qy`<div class="mp-clock live">${n}</div>`:""}
                ${r?i.qy`<div class="mp-clock">${this._t("status.full_time")}</div>`:""}
              `}
            </div>
            <img class="mp-logo" src="${e.away_logo}" alt="" @error="${e=>e.target.style.display="none"}">
          </div>
          <p class="mp-teams"><strong>${e.home_team}</strong> – <strong>${e.away_team}</strong></p>
          ${this._detailsLoading?i.qy`<p class="mp-detail-state">${this._t("ui.loading")}</p>`:""}
          ${this._detailsError?i.qy`<p class="mp-detail-state error">${this._t("ui.provider_unavailable")}</p>`:""}
          ${this._renderDetailCapabilities(e)}
          ${ot(e,{t:(e,t)=>this._t(e,t),provider:this.hass?.states?.[this._config.entity]?.attributes?.provider,updatedAt:this.hass?.states?.[this._config.entity]?.attributes?.last_successful_update})}
          ${t||a?this._renderPopupPrematch(e):""}
          ${t?"":i.qy`
            ${h(this._t("event.goal"),c,"goal")}
            ${h(this._t("event.yellow_card"),d,"yellow")}
            ${h(this._t("event.red_card"),p,"red")}
            ${u?"":i.qy`<p class="mp-no-events">${this._t("popup.no_events")}</p>`}
          `}
          ${this._renderPopupLineup(e)}
          ${this._renderPopupTimeline(e)}
          ${this._renderMomentum(e)}
          ${this._renderShotmap(e)}
          ${this._renderRatings(e)}
          ${a||r?this._renderPopupStory(e):""}
          ${r?this._renderPopupOutcome(e):""}
          ${r?this._renderPopupReview(e):""}
          <button class="mp-close" @click="${()=>this.showPopup=0}">${this._t("generic.close")}</button>
        </div>
      </div>
    `}_renderPopupPrematch(e){const t=Ye(e),a=(0,s.$c)(this.hass,this._config),r=function(e,t=Date.now()){const a=e?.date_iso||e?.date,i=a?new Date(a).getTime():NaN;return Number.isFinite(i)?Math.ceil((i-t)/6e4):null}(e),o=t=>me(e,t,(e,t)=>this._t(e,t)),n=(e,t)=>t.length?i.qy`<div class="mp-form-team"><strong>${e}</strong><div class="mp-form-dots">${t.map(e=>i.qy`<b class=${e}>${e}</b>`)}</div></div>`:"",l=e.weather&&"object"==typeof e.weather?[e.weather.icon,null!=e.weather.temperature?`${e.weather.temperature}°`:"",e.weather.wind].filter(Boolean).join(" "):"",c=t.competition||""!==t.round||null!=r||e.venue||l||(e.broadcasts||[]).length,d=function(e,t=2){if(!Number.isFinite(e)||e<=0)return[];let a=Math.ceil(e);return[["day",Math.floor(a/1440)],["hour",Math.floor(a%1440/60)],["minute",a%60]].filter(([,e])=>e>0).slice(0,Math.max(1,t)).map(([e,t])=>({unit:e,value:t}))}(r).map(({unit:e,value:t})=>this._t(`popup.duration_${e}${1===t?"":"s"}`,{n:t})),p=d.length>1?`${d.slice(0,-1).join(", ")} ${this._t("popup.duration_and")} ${d.at(-1)}`:d[0];return i.qy`<div class="mp-prematch">
      ${p?i.qy`<div class="mp-countdown">${this._t("popup.kickoff_in",{value:p})}</div>`:""}
      ${c?i.qy`<div class="mp-context">
        ${t.competition?i.qy`<span>🏆 ${this._displayCompetitionName(t.competition)}</span>`:""}
        ${""!==t.round?i.qy`<span>№ ${this._t("popup.round")} ${t.round}</span>`:""}
        ${l?i.qy`<span>${l}</span>`:""}
      </div>${ae(e,{lang:a,t:(e,t)=>this._t(e,t),showDate:1})}`:""}
      ${t.homeForm.length||t.awayForm.length?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("team.form")}</h5><div class="mp-form-grid">${n(e.home_team,t.homeForm)}${n(e.away_team,t.awayForm)}</div></div>`:""}
      ${t.hasStandings?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.standings")}</h5><div class="mp-standing-grid"><div><strong>${e.home_team}</strong><span>${o("home")}</span></div><div><strong>${e.away_team}</strong><span>${o("away")}</span></div></div></div>`:""}
      ${this._renderTeamMetrics(e)}
      ${pe(e,{t:(e,t)=>this._t(e,t),lang:a,showDetails:1})}
      ${he(e,{t:(e,t)=>this._t(e,t)})}
      ${ue(e,{t:(e,t)=>this._t(e,t)})}
      ${this._renderPopupH2H(e,t)}
      ${this._renderExpectedLineup(e)}
      ${this._renderCoverage(e)}
    </div>`}_renderTeamMetrics(e){const t=(t,a)=>[e[`${t}_average_goals_${a}`],e[`${t}_goals_${a}_avg`],e[`${t}_avg_goals_${a}`]].find(e=>null!=e&&""!==e&&"N/A"!==e),a=t("home","for"),s=t("home","against"),r=t("away","for"),o=t("away","against");return[a,s,r,o].every(e=>void 0===e)?"":i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.team_averages")}</h5><div class="mp-standing-grid">
      <div><strong>${e.home_team}</strong><span>${this._t("popup.goals_for")} ${a??"–"} · ${this._t("popup.goals_against")} ${s??"–"}</span></div>
      <div><strong>${e.away_team}</strong><span>${this._t("popup.goals_for")} ${r??"–"} · ${this._t("popup.goals_against")} ${o??"–"}</span></div>
    </div></div>`}_renderPopupH2H(e,t=Ye(e)){return t.h2h.length||t.h2hCount?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.h2h")}</h5>
      ${t.h2h.length?i.qy`<div class="mp-h2h-list">${t.h2h.map(e=>i.qy`<div><span>${e.home_team||e.home}</span><b>${S(e.home_score,"–")} – ${S(e.away_score,"–")}</b><span>${e.away_team||e.away}</span></div>`)}</div>`:i.qy`<p class="mp-no-events">${this._t("popup.h2h_available",{n:t.h2hCount})}</p>`}
    </div>`:""}_renderExpectedLineup(e){if((t=e.state)&&"pre"!==t)return"";var t;const a=e.predicted_lineup_home||e.expected_lineup_home||[],s=e.predicted_lineup_away||e.expected_lineup_away||[];if(!a.length&&!s.length)return"";const r=(e,t)=>t.length?i.qy`<div class="mp-lineup-team"><div class="mp-lineup-header"><span>${e}</span></div><div class="mp-lineup-players">${t.map(e=>i.qy`<span class="mp-player">${e.name||e}</span>`)}</div></div>`:"";return i.qy`<div class="mp-section mp-section-lineup"><h5 class="mp-section-title lineup">${this._t("popup.expected_lineup")}</h5><p class="mp-no-events">${this._t("popup.expected_lineup_note")}</p>${r(e.home_team,a)}${r(e.away_team,s)}</div>`}_renderCoverage(e){const t=this.hass?.states?.[this._config.entity]?.attributes||{},a=String(t.provider||""),s=a.endsWith("_private")?this._t("source.private"):a||"Soccer Live",r=e.detail_capabilities||[],o=this.hass?.states?.[this._config.entity],n=o?.last_updated?Math.max(0,Math.round((Date.now()-new Date(o.last_updated).getTime())/6e4)):null;return i.qy`<div class="mp-coverage"><span>${this._t("popup.data_source")}${null!=n?` · ${this._t("popup.updated_minutes",{n})}`:""}</span><b>${s}${r.length?` · ${r.length} ${this._t("popup.parts")}`:""}</b></div>`}_renderPopupReview(e){const t=Ze(e);return t.present?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.review")}</h5><div class="mp-review-grid">
      ${t.playerOfMatch?i.qy`<div><small>${this._t("popup.player_of_match")}</small><strong>${t.playerOfMatch.name||t.playerOfMatch.player}</strong></div>`:""}
      ${t.expectedGoals?i.qy`<div><small>xG</small><strong>${t.expectedGoals.home??"–"} – ${t.expectedGoals.away??"–"}</strong></div>`:""}
      ${t.standout?i.qy`<div><small>${t.standout.key}</small><strong>${t.standout.home} – ${t.standout.away}</strong></div>`:""}
      ${t.turningPoint?i.qy`<div><small>${this._t("story.turning_point")}</small><strong>${t.turningPoint.player||t.turningPoint.team||"–"}${null!=t.turningPoint.minute?` · ${t.turningPoint.minute}'`:""}</strong></div>`:""}
      ${t.scorers.length?i.qy`<div><small>${this._t("event.goal")}</small><strong>${t.scorers.map(e=>`${e.player}${null!=e.minute?` ${e.minute}'`:""}`).join(" · ")}</strong></div>`:""}
    </div></div>`:""}_renderPopupStory(e){const t=et(e),a=tt(e);if(!t.length&&!a.length)return"";const s={opening_goal:"story.opening_goal",equalizer:"story.equalizer",decisive_goal:"story.decisive_goal",red_card:"story.red_card"};return i.qy`<div class="mp-section mp-insight"><h5 class="mp-section-title">${this._t("match.story")}</h5>
      <div class="mp-story">${t.map(e=>i.qy`<div><b>${e.minute?`${e.minute}'`:"·"}</b><span><strong>${this._t(s[e.type]||"match.event")}</strong><small>${e.player||e.athletes?.[0]||""}${e.team?` · ${e.team}`:""}</small></span></div>`)}</div>
      ${a.length?i.qy`<ul class="mp-narrative">${a.map(e=>i.qy`<li>${this._t(e.key,e.vars)}</li>`)}</ul>`:""}
    </div>`}_renderPopupOutcome(e){const t=Xe(e);if(!t)return"";const a=e=>this._t(`match.outcome_${e}`);return i.qy`<div class="mp-section mp-insight"><h5 class="mp-section-title">${this._t("match.expectation_reality")}</h5>
      <div class="mp-outcome"><span>${this._t("match.expected")}<b>${a(t.predicted)}${null!=t.predictedPercent?` · ${t.predictedPercent}%`:""}</b></span><strong>${t.correct?"✓":"↯"}</strong><span>${this._t("match.actual")}<b>${a(t.actual)}</b></span></div>
      ${t.xg?i.qy`<div class="mp-outcome-xg">xG <b>${t.xg.home??"—"} – ${t.xg.away??"—"}</b></div>`:""}
    </div>`}_renderDetailCapabilities(e){const t=e.detail_capabilities||[];return t.length?i.qy`<div class="mp-capabilities">${t.map(e=>i.qy`<span>${e}</span>`)}</div>`:""}_renderMomentum(e){return it(e,{t:e=>this._t(e)})}_renderShotmap(e){const t=e.shotmap||[];return t.length?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.shotmap")}</h5>
      <div class="mp-shotmap">${t.map(e=>{const t=Math.max(2,Math.min(98,Number(e.x)||50)),a=Math.max(2,Math.min(98,Number(e.y)||50)),s=String(e.outcome||"").toLowerCase().includes("goal");return i.qy`<span class="mp-shot ${s?"goal":""}" style="left:${t}%;top:${100-a}%" title="${e.player||""} · ${e.minute||""}' · xG ${e.xg??"—"}"></span>`})}</div></div>`:""}_renderRatings(e){const t=e.top_rated_players||[];return t.length||e.player_of_the_match?i.qy`<div class="mp-section"><h5 class="mp-section-title">${this._t("popup.ratings")}</h5>
      <div class="mp-ratings">${t.map(e=>i.qy`<div><span>${e.name}</span><strong>${e.rating}</strong></div>`)}</div>
    </div>`:""}_renderPopupLineup(e){return Be(e,{translate:(e,t)=>this._t(e,t),prefix:"mp"})}_renderPopupTimeline(e){return Oe(e,{translate:(e,t)=>this._t(e,t),prefix:"mp"})}static get styles(){return[z,Ue,te,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.5);--cl-green:#10b981;--cl-gold:#fbbf24;--cl-gold-text:#fde047;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);--cl-glass-border:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.10),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(var(--cl-accent-2-rgb),0.10),transparent 50%);pointer-events:none;z-index:0;}.live-ticker{display:flex;align-items:center;gap:10px;background:rgba(239,68,68,0.08);border-bottom:1px solid rgba(239,68,68,0.15);padding:6px 14px;overflow:hidden;position:relative;z-index:1;}.ticker-badge{flex-shrink:0;background:var(--cl-live);color:white;font-size:9px;font-weight:800;padding:2px 7px;border-radius:4px;letter-spacing:0.08em;box-shadow:0 0 8px var(--cl-live-glow);}.ticker-track{flex:1;overflow:hidden;display:flex;gap:60px;}.ticker-content{white-space:nowrap;flex-shrink:0;font-size:11px;font-weight:700;color:var(--cl-text);animation:ticker-scroll 18s linear infinite;}@keyframes ticker-scroll{from{transform:translateX(0);}to{transform:translateX(calc(-100% - 60px));}}.live-counter{flex-shrink:0;background:linear-gradient(135deg,var(--cl-live),#f97316);color:white;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:0.06em;box-shadow:0 2px 12px var(--cl-live-glow);}.scroll-content{position:relative;z-index:1;overflow-y:auto;padding:4px 4px 12px;}.day-divider{padding:12px 12px 4px;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:var(--cl-text-2);font-weight:800;display:flex;align-items:center;gap:8px;}.season-divider{margin:14px 12px 2px;padding:7px 10px;border:1px solid var(--cl-divider);border-radius:999px;color:var(--cl-text-2);font-size:10px;font-weight:800;letter-spacing:0.12em;text-align:center;}.day-divider::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--cl-divider),transparent);}.day-divider.today{color:var(--cl-accent);}.day-divider.today::after{background:linear-gradient(90deg,var(--cl-accent),transparent);opacity:0.4;}.day-rel{font-size:9px;font-weight:600;color:var(--cl-text-2);opacity:0.55;text-transform:none;letter-spacing:0;flex-shrink:0;}.day-divider.tomorrow{color:var(--cl-accent-2);opacity:0.9;}.day-divider.tomorrow::after{background:linear-gradient(90deg,var(--cl-accent-2),transparent);opacity:0.3;}.day-divider.yesterday{opacity:0.55;}.day-divider.comp{color:var(--cl-text);font-size:11px;letter-spacing:0.05em;}.comp-divider-logo{width:14px;height:14px;object-fit:contain;flex-shrink:0;}.confetti{position:absolute;top:20px;left:50%;width:8px;height:8px;pointer-events:none;z-index:99;animation:confetti-fly 2s ease-out forwards;}@keyframes confetti-fly{0%{transform:translate(-50%,0) rotate(0deg);opacity:1;}100%{transform:translate(calc(-50% + var(--dx)),var(--dy)) rotate(720deg);opacity:0;}}.match-row{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:12px;border-radius:14px;cursor:pointer;transition:all 0.25s cubic-bezier(0.4,0,0.2,1);margin:0 4px;position:relative;}.match-row:hover{background:var(--cl-card-2);transform:translateX(3px);}.match-row.live{background:linear-gradient(90deg,rgba(239,68,68,0.10),rgba(239,68,68,0.02) 60%);animation:live-row-glow 3s ease-in-out infinite;}.match-row.live::before{content:'';position:absolute;left:-2px;top:50%;transform:translateY(-50%);width:4px;height:70%;background:linear-gradient(180deg,var(--cl-live),#f97316);border-radius:0 4px 4px 0;box-shadow:0 0 12px var(--cl-live-glow);}@keyframes live-row-glow{0%,100%{background:linear-gradient(90deg,rgba(239,68,68,0.10),rgba(239,68,68,0.02) 60%);}50%{background:linear-gradient(90deg,rgba(239,68,68,0.18),rgba(239,68,68,0.05) 60%);}}.match-row.goal-pulse{animation:goal-pulse 1.6s cubic-bezier(0.16,1,0.3,1);}@keyframes goal-pulse{0%{box-shadow:none;transform:scale(1);}20%{box-shadow:0 0 0 3px var(--cl-gold),0 0 24px var(--cl-gold);transform:scale(1.02);}100%{box-shadow:none;transform:scale(1);}}.match-row.card-pulse{animation:card-pulse-row 1s ease-out;}@keyframes card-pulse-row{0%{box-shadow:none;}30%{box-shadow:0 0 0 2px #f59e0b;}100%{box-shadow:none;}}.match-time{font-size:11px;color:var(--cl-text-2);font-weight:700;font-variant-numeric:tabular-nums;min-width:44px;text-align:center;padding:6px 8px;background:var(--cl-card-2);border-radius:8px;}.match-time.live-time{background:rgba(239,68,68,0.15);color:var(--cl-live);}.match-time.ft{background:rgba(16,185,129,0.12);color:var(--cl-green);}.match-teams{display:flex;flex-direction:column;gap:4px;min-width:0;}.match-team{display:flex;align-items:center;gap:10px;}.match-team img{width:22px;height:22px;object-fit:contain;flex-shrink:0;}.match-team .name{font-size:13px;font-weight:600;flex:1;letter-spacing:-0.01em;color:var(--cl-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.match-team .name.winner{font-weight:800;}.match-team .name.loser{color:var(--cl-text-2);}.match-team .name.my-team-name{font-weight:800;color:var(--cl-accent);}.match-team .score{font-size:14px;font-weight:800;font-variant-numeric:tabular-nums;min-width:22px;text-align:right;color:var(--cl-text);}.match-team .score.winner{color:var(--cl-accent);}.match-team .score.loser{color:var(--cl-text-2);opacity:0.6;}.row-extras{display:flex;gap:6px;margin-top:4px;}.tv-chip{display:inline-flex;align-items:center;gap:4px;padding:2px 7px;background:rgba(var(--cl-accent-rgb),0.12);border:1px solid rgba(var(--cl-accent-rgb),0.25);border-radius:999px;font-size:9px;font-weight:700;color:var(--cl-accent);text-transform:uppercase;letter-spacing:0.04em;}.tv-chip svg{width:10px;height:10px;}.league-chip{display:inline-flex;align-items:center;padding:2px 7px;background:rgba(var(--cl-accent-2-rgb),0.10);border:1px solid rgba(var(--cl-accent-2-rgb),0.22);border-radius:999px;font-size:9px;font-weight:700;color:var(--cl-accent-2);letter-spacing:0.03em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px;}.detail-cap{color:var(--cl-text-2);opacity:.7;font-size:10px;}.match-status-icon{color:var(--cl-text-2);font-size:18px;opacity:0.5;transition:all 0.2s;}.match-row:hover .match-status-icon{color:var(--cl-accent);opacity:1;transform:translateX(3px);}.event-toast{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:var(--cl-toast-bg);color:#ffffff;padding:10px 18px;border-radius:14px;font-size:13px;font-weight:800;z-index:100;animation:toast-bounce 4s cubic-bezier(0.16,1,0.3,1) forwards;pointer-events:none;max-width:90%;text-align:center;letter-spacing:-0.01em;text-shadow:0 1px 2px rgba(0,0,0,0.8);}.event-toast.variant-goal{box-shadow:0 0 0 2px var(--cl-gold),0 0 0 4px rgba(251,191,36,0.3),0 12px 40px rgba(0,0,0,0.7),0 0 60px rgba(251,191,36,0.4);}.event-toast.variant-goal strong{color:var(--cl-gold-text);}.event-toast.variant-yellow{box-shadow:0 0 0 2px #f59e0b,0 0 0 4px rgba(245,158,11,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-yellow strong{color:#fbbf24;}.event-toast.variant-red{box-shadow:0 0 0 2px var(--cl-live),0 0 0 4px rgba(239,68,68,0.3),0 12px 40px rgba(0,0,0,0.7);}.event-toast.variant-red strong{color:#fca5a5;}@keyframes toast-bounce{0%{opacity:0;transform:translate(-50%,-20px) scale(0.7);}8%{opacity:1;transform:translate(-50%,0) scale(1.08);}14%{transform:translate(-50%,0) scale(1);}90%{opacity:1;transform:translate(-50%,0) scale(1);}100%{opacity:0;transform:translate(-50%,-10px) scale(0.95);}}`]}}customElements.get("soccer-live-matches")||customElements.define("soccer-live-matches",pt);class ht extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_now:{},_weatherBadge:{},_cachedData:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this._isLoading=1,this._loadingStarted=Date.now(),this._lastWeatherVenue=null}connectedCallback(){super.connectedCallback(),this._now=new Date,void 0===this._counting&&(this._counting=1),clearInterval(this._timer),this._timer=setInterval(()=>{this._now=new Date,this._counting&&this.requestUpdate()},1e3),this._loadWeather()}updated(e){if(e.has("hass")){const e=this.hass?.states[this._config?.entity];e&&"unavailable"!==e.state&&(this._isLoading=0,Z.set(this._config.entity,e.attributes))}if(e.has("hass")||e.has("_config")){const e=this.hass?.states[this._config?.entity];if(e&&"unavailable"!==e.state){const t=this._getNextMatch(e);this._counting=!!t&&"pre"===t.state;const a=t?.venue;a&&a!==this._lastWeatherVenue&&this._loadWeather()}}}async _loadWeather(){if(!this.hass||!this._config)return;const e=this.hass.states[this._config.entity],t=e&&"unavailable"!==e.state?e.attributes:this._cachedData;if(!t?.matches)return;const a=this._getNextMatch({attributes:t});if(a&&a.venue){this._lastWeatherVenue=a.venue;try{this._weatherBadge=await O(a.venue,this.hass,this._config,a.venue_lat,a.venue_lon,a.date_iso),this.requestUpdate()}catch(e){console.warn("Weather load failed:",e)}}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._timer)}getCardSize(){const e=this.hass?.states[this._config?.entity],t=e?this._getNextMatch(e):null;return"in"===t?.state||"post"===t?.state?1:3}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-countdown-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_"}}_parseDate(e){return(0,s.n1)(e)}_getNextMatch(e){let t=e.attributes.matches||[];const a=this._config?.competition_filter?.toLowerCase();if(a){const e=t.filter(e=>(e.competition_name||e.league_name||"").toLowerCase().includes(a));e.length&&(t=e)}return t.find(e=>"in"===e.state)||t.find(e=>"pre"===e.state)||t.find(e=>"post"===e.state)||t[0]||null}_countdown(e){const t=this._parseDate(e);if(!t)return null;const a=t-(this._now||new Date);return a<=0?null:{days:Math.floor(a/864e5),hours:Math.floor(a%864e5/36e5),mins:Math.floor(a%36e5/6e4),secs:Math.floor(a%6e4/1e3)}}static get styles(){return[z,Ue,te,ie,B,G,i.AH`:host{display:block;container-type:inline-size;}ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:20px;overflow:hidden;}.cd-body{padding:16px;}ha-card.compact .cd-body{padding:10px 14px;}ha-card.compact .team-logo{width:32px !important;height:32px !important;}ha-card.compact .team-name{font-size:11px !important;}ha-card.compact .cd-num{font-size:22px !important;}ha-card.compact .cd-sep{font-size:18px !important;}ha-card.compact .cd-label{font-size:8px !important;}ha-card.compact .sched-date{font-size:10px !important;margin-bottom:4px !important;}ha-card.compact .score{font-size:30px !important;letter-spacing:3px !important;}ha-card.compact .smm-venue-row,ha-card.compact .smm-chips{padding:6px 14px !important;font-size:10px !important;}ha-card.compact .cd-form,ha-card.compact .cd-h2h{display:none;}.teams{display:flex;align-items:center;justify-content:space-between;min-width:0;margin-bottom:16px;}.team{display:flex;flex-direction:column;align-items:center;gap:8px;flex:1 1 0;min-width:0;}.team-logo{width:52px;height:52px;object-fit:contain;}.team-name{max-width:100%;font-size:13px;font-weight:700;text-align:center;color:var(--cl-text);overflow-wrap:anywhere;}.center{min-width:0;text-align:center;flex:0 1 auto;padding:0 8px;}.live-badge{display:inline-block;background:var(--cl-live);color:#fff;font-size:10px;font-weight:700;padding:2px 10px;border-radius:99px;margin-bottom:4px;}.ft-badge{font-size:11px;color:var(--cl-text-2);margin-bottom:4px;}.score{font-size:42px;font-weight:900;letter-spacing:6px;color:var(--cl-text);line-height:1;}.minute{font-size:12px;color:var(--cl-text-2);margin-top:2px;}.sched-date{font-size:11px;color:var(--cl-text-2);margin-bottom:6px;}.countdown{display:flex;max-width:100%;justify-content:center;gap:clamp(3px,1.5cqi,8px);}.cd-block{display:flex;flex-direction:column;align-items:center;min-width:0;}.cd-num{font-size:30px;font-weight:900;color:var(--cl-accent);line-height:1;}.cd-label{font-size:9px;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.05em;margin-top:2px;}.cd-sep{font-size:26px;font-weight:900;color:var(--cl-text-2);align-self:flex-start;padding-top:2px;}.vs-text{font-size:20px;font-weight:900;color:var(--cl-text-2);}.cd-h2h{font-size:10px;color:var(--cl-text-2);text-align:center;margin-top:10px;padding:5px 12px;background:rgba(255,255,255,0.04);border-radius:8px;}.cd-h2h strong{color:var(--cl-text);}.cd-h2h strong.hw{color:var(--cl-green);}.cd-h2h strong.aw{color:var(--cl-live);}.cd-h2h-date{opacity:0.55;margin-left:4px;}.cd-form{display:flex;gap:3px;justify-content:center;margin-top:4px;}.cd-fd{width:6px;height:6px;border-radius:50%;}.cd-fd.w{background:var(--cl-green,#10b981);}.cd-fd.l{background:var(--cl-live,#ef4444);}.cd-fd.d{background:var(--cl-text-2,#94a3b8);opacity:0.5;}.empty{padding:16px;text-align:center;color:var(--cl-text-2);}.cd-live-strip{display:flex;align-items:center;gap:8px;padding:14px 16px;font-size:12px;}.cd-live-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;background:var(--cl-live,#ef4444);animation:cd-pulse 1.5s ease-in-out infinite;}@keyframes cd-pulse{0%,100%{opacity:1;}50%{opacity:0.35;}}.cd-live-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-live,#ef4444);}.cd-ft-dot{font-size:12px;color:var(--cl-text-2);line-height:1;}.cd-ft-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2);}.cd-live-sep{color:var(--cl-text-2);}.cd-live-teams{font-weight:600;flex:1;}.cd-live-clock{font-size:12px;font-weight:800;color:var(--cl-text);}.cd-live-min{font-size:10px;font-weight:400;color:var(--cl-text-2);}@container (max-width:600px){.cd-body{padding:12px !important;}.team-logo{width:40px !important;height:40px !important;}.team-name{font-size:12px !important;}.score{font-size:32px !important;letter-spacing:4px !important;}.vs-text{font-size:16px !important;}.cd-num{font-size:24px !important;}.cd-label{font-size:8px !important;}.cd-sep{font-size:20px !important;}.sched-date{font-size:10px !important;}.meta{font-size:10px !important;padding:10px 12px !important;gap:4px !important;}.comp-name{font-size:10px !important;}}@container (max-width:480px){.teams{flex-wrap:wrap;justify-content:space-between;margin-bottom:8px;}.team{flex:0 1 auto;flex-direction:row;align-items:center;gap:6px;}.team:first-child{order:1;}.team:last-child{order:2;}.center{order:3;flex:0 0 100%;padding:8px 0 0;}.team-logo{width:32px !important;height:32px !important;}.team-name{font-size:11px !important;text-align:left !important;}.cd-num{font-size:28px !important;}.cd-sep{font-size:22px !important;}.countdown{gap:6px !important;}.score{font-size:32px !important;letter-spacing:3px !important;}.sched-date{font-size:11px !important;margin-bottom:8px;}}@container (max-width:360px){.cd-num{font-size:22px !important;min-width:28px !important;}.cd-sep{font-size:16px !important;}.countdown{gap:3px !important;}}`]}render(){if(this.style.display="",A(this,this._config),!this.hass||!this._config)return H(this._t("ui.loading"));const e=this.hass.states[this._config.entity];if(!e){const e=Z.get(this._config.entity);if(!e||!e.data.matches)return R("⚠️",this._t("ui.entity_not_found"),`${this._t("ui.entity_not_found")}: ${this._config.entity}`,this._t("ui.check_entity_config"));this._cachedData=e.data}if(e&&"unavailable"===e.state){const e=Z.get(this._config.entity);if(!e||!e.data.matches)return R("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));this._cachedData=e.data}if(e&&this._isLoading)return Date.now()-this._loadingStarted>1e4?R("⏱",this._t("ui.loading_timeout"),`${this._t("ui.entity_not_responding")}: ${this._config.entity}`,this._t("ui.check_integration")):H(this._t("ui.loading"));const t=e&&"unavailable"!==e.state?e.attributes:this._cachedData,a=this._getNextMatch({attributes:t});if(!a)return K(t,e=>this._t(e),()=>U("📅",this._t("ui.off_season"),this._t("ui.off_season_hint")));const r="in"===a.state,o="post"===a.state,n=t?.league_info?.[0],l=a.competition_name||n?.name||n?.abbreviation||t?.league_name||"",c=Se(l,(0,s.$c)(this.hass,this._config)),d=ke({competitionName:l,competitionLogo:a.competition_logo||n?.logo_href||t?.league_logo,fallbackLogo:null,isFriendly:a.is_friendly});if(r||o)return this._config.hide_when_live?(this.style.display="none",i.qy``):i.qy`
        <ha-card>
          <div class="cd-live-strip">
            ${r?i.qy`<span class="cd-live-dot"></span>
                     <span class="cd-live-label">${this._t("status.live")}</span>`:i.qy`<span class="cd-ft-dot">✓</span>
                     <span class="cd-ft-label">${this._t("status.full_time")}</span>`}
            <span class="cd-live-sep">·</span>
            <span class="cd-live-teams">${a.home_team||"?"} – ${a.away_team||"?"}</span>
            ${r?i.qy`<span class="cd-live-clock">${S(a.home_score)}–${S(a.away_score)}${a.clock?i.qy`<span class="cd-live-min"> ${a.clock}'</span>`:""}</span>`:o?i.qy`<span class="cd-live-clock">${S(a.home_score)}–${S(a.away_score)}</span>`:""}
          </div>
        </ha-card>
      `;const p=this._countdown(a.date),h=this._t(1===p?.days?"cd.day":"cd.days")||(1===p?.days?"day":"days"),u=this._t("cd.hrs")||"hrs",g=this._t("cd.min")||"min",m=this._t("cd.sec")||"sec",f=e=>e?i.qy`<div class="cd-form">${e.split("").map(e=>{const t="W"===e?"w":"L"===e||"V"===e?"l":"d";return i.qy`<span class="cd-fd ${t}"></span>`})}</div>`:"";return i.qy`
      <ha-card class="${this._config.compact?"compact":""}">
        ${Je(a.home_logo,a.away_logo)}
        <div class="card-content">
        ${this._config.hide_header?"":X({logo:d||null,title:c,badge:ee(a.date||"","date")})}

        <div class="cd-body">
        <div class="teams">
          <div class="team">
            ${a.home_logo?i.qy`<img class="team-logo" src="${a.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="team-name">${a.home_team||"?"}</span>
            ${f(a.home_form)}
          </div>

          <div class="center">
            ${p?i.qy`
              ${a.date?i.qy`<div class="sched-date">${a.date}</div>`:""}
              <div class="countdown">
                ${p.days>0?i.qy`
                  <div class="cd-block"><span class="cd-num">${p.days}</span><span class="cd-label">${h}</span></div>
                  <span class="cd-sep">:</span>
                `:""}
                <div class="cd-block"><span class="cd-num">${String(p.hours).padStart(2,"0")}</span><span class="cd-label">${u}</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(p.mins).padStart(2,"0")}</span><span class="cd-label">${g}</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(p.secs).padStart(2,"0")}</span><span class="cd-label">${m}</span></div>
              </div>
            `:i.qy`
              ${a.date?i.qy`<div class="sched-date">${a.date}</div>`:""}
              <div class="vs-text">${this._t("match.vs")}</div>
            `}
          </div>

          <div class="team">
            ${a.away_logo?i.qy`<img class="team-logo" src="${a.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="team-name">${a.away_team||"?"}</span>
            ${f(a.away_form)}
          </div>
        </div>
        ${(()=>{const e=(a.head_to_head||[])[0];if(!e||void 0===e.home_score)return"";const t=parseInt(e.home_score),s=parseInt(e.away_score),r=!isNaN(t)&&!isNaN(s)&&t>s,o=!isNaN(t)&&!isNaN(s)&&s>t,n=Number.isFinite(t)?t:"-",l=Number.isFinite(s)?s:"-";return i.qy`<div class="cd-h2h">
            ${e.home_team} <strong class="${r?"hw":o?"aw":""}">${n}–${l}</strong> ${e.away_team}
            ${e.date?i.qy`<span class="cd-h2h-date">${e.date.split(" ")[0]}</span>`:""}
          </div>`})()}

        </div>
        ${ae(a,{lang:(0,s.$c)(this.hass,this._config),t:e=>this._t(e),weatherBadge:this._weatherBadge||null,hideBroadcasts:1==this._config.hide_broadcasts})}
        </div>
      </ha-card>
    `}}customElements.get("soccer-live-countdown")||customElements.define("soccer-live-countdown",ht);class ut extends i.WF{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this.maxArticles=e.max_articles?e.max_articles:5,this.hideHeader=1==e.hide_header,this.hideImages=1==e.hide_images}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-news-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_news",max_articles:5,hide_header:0,hide_images:0}}_formatDate(e){if(!e)return"";try{const t=new Date(e),a=(new Date-t)/1e3;if(a<60)return this._t("time.now");if(a<3600)return this._t("time.n_min_ago",{n:Math.floor(a/60)});if(a<86400)return this._t("time.n_h_ago",{n:Math.floor(a/3600)});if(a<604800)return this._t("time.n_d_ago",{n:Math.floor(a/86400)});const i=this._t("month."+(t.getMonth()+1));return`${t.getDate()} ${i}`}catch(e){return""}}_openLink(e){e&&/^https?:\/\//i.test(e)&&window.open(e,"_blank","noopener,noreferrer")}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=(e.attributes.articles||[]).slice(0,this.maxArticles);return 0===t.length?K(e.attributes,e=>this._t(e),()=>i.qy`
      <ha-card class="empty">
        <div style="font-size:38px; opacity:0.25; margin-bottom:10px;">📰</div>
        <div style="font-weight:700;">${this._t("news.empty")}</div>
      </ha-card>`):i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":X({logo:e.attributes.league_logo||(e.attributes.league_info||[])[0]?.logo_href||null,title:Se(e.attributes.league_name||this._t("card.news"),(0,s.$c)(this.hass,this._config)),badge:ee(e.state,"neutral"),fallbackIcon:"📰"})}
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
    `}static get styles(){return[z,Ue,te,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.hero-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 0% 0%,rgba(236,72,153,0.10),transparent 50%),radial-gradient(ellipse at 100% 0%,rgba(99,102,241,0.10),transparent 50%);pointer-events:none;}.news-list{position:relative;z-index:1;display:flex;flex-direction:column;padding:6px;}.news-item{display:grid;grid-template-columns:96px 1fr;gap:14px;padding:12px;border-radius:14px;cursor:pointer;transition:all 0.25s cubic-bezier(0.4,0,0.2,1);}.news-item.no-img{grid-template-columns:1fr;}.news-item:hover{background:var(--cl-card-2);transform:translateX(3px);}.news-img{width:96px;height:72px;border-radius:10px;background-size:cover;background-position:center;background-color:var(--cl-card-2);flex-shrink:0;box-shadow:0 4px 12px rgba(0,0,0,0.25);}.news-body{display:flex;flex-direction:column;gap:4px;min-width:0;}.news-meta{display:flex;gap:8px;font-size:10px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:var(--cl-text-2);}.news-meta .cat{background:rgba(99,102,241,0.15);color:var(--cl-accent);border-radius:4px;padding:2px 7px;font-size:10px;font-weight:600;}.news-meta .cat.premium{background:rgba(251,191,36,0.18);color:var(--cl-gold,#fbbf24);}.news-meta .date::before{content:'·';margin-right:8px;opacity:0.4;}.news-meta .cat + .date::before{content:'·';}.news-byline{font-size:10px;color:var(--cl-text-2);margin-top:4px;opacity:0.7;}.news-tags{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;}.news-tag{font-size:10px;background:rgba(255,255,255,0.06);color:var(--cl-text-2);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2px 6px;white-space:nowrap;}.news-headline{font-size:14px;font-weight:800;line-height:1.3;color:var(--cl-text);letter-spacing:-0.01em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}.news-desc{font-size:12px;font-weight:500;color:var(--cl-text-2);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}`]}}customElements.get("soccer-live-news")||customElements.define("soccer-live-news",ut);class gt extends i.WF{static get properties(){return{hass:{},_config:{},_compact:{type:Boolean},_cardStyle:{type:String},_hideHeader:{type:Boolean},_treeShowPlayoffs:{type:Boolean},_myTeam:{type:String},_activeTab:{type:String},_matchesEntity:{type:String},_collapsedRounds:{type:Object},_expandedRounds:{type:Object},_schedFilter:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this._hideHeader=1==e.hide_header,this._compact=1==e.compact,this._cardStyle="tree"===e.style?"tree":"list",this._treeShowPlayoffs=1==e.tree_show_playoffs,this._myTeam=e.my_team||"",this._matchesEntity=e.matches_entity||"",this._activeTab="bracket",this._collapsedRounds=new Set,this._expandedRounds=new Set,this._schedFilter="auto"}updated(e){super.updated?.(e),e.has("_activeTab")&&"schedule"===this._activeTab&&this._scrollScheduleAfterRender()}_scrollScheduleAfterRender(){requestAnimationFrame(()=>{const e=this.hass?.config?.time_zone;let t=null;if(this._schedScrollToDate&&(t=this.shadowRoot?.querySelector(`.sched-day[data-date="${this._schedScrollToDate}"]`),this._schedScrollToDate=null),!t){const a=(new Date).toLocaleDateString("en-CA",e?{timeZone:e}:{});t=this.shadowRoot?.querySelector(`.sched-day[data-date="${a}"]`)}t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_formatDate(e){if(!e)return"";const t=(0,s.n1)(e);if(!t)return"";const a=this._t("month."+(t.getMonth()+1));return`${t.getDate()} ${a}`}_dateKey(e){const t=(0,s.n1)(e);if(!t)return"";const a=this.hass?.config?.time_zone;return t.toLocaleDateString("en-CA",a?{timeZone:a}:{})}_matchDate(e){return e?.date_iso||e?.date||""}_localizeRoundName(e){const t={Final:"round.final",Semifinals:"round.semifinals",Quarterfinals:"round.quarterfinals","Round of 16":"round.r16","Round of 32":"round.r32","Round of 64":"round.r64","Third Place":"round.third_place","Knockout Playoffs":"round.knockout_playoffs","Preliminary Round":"round.preliminary"}[e.name];return t?this._t(t):e.name}_formatSeasonInfo(e){if(!e||"N/A"===e)return"";const t={"round-of-64":"round.r64","round-of-32":"round.r32","round-of-16":"round.r16",quarterfinals:"round.quarterfinals",semifinals:"round.semifinals",final:"round.final","third-place":"round.third_place","knockout-playoffs":"round.knockout_playoffs","knockout-round":"round.knockout_playoffs",preliminary:"round.preliminary","preliminary-round":"round.preliminary","group-stage":null};return e in t?t[e]?this._t(t[e]):"":e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}_matchesMyTeam(e){return this._myTeam&&e?e.toLowerCase().includes(this._myTeam.toLowerCase()):0}_tieHasMyTeam(e){return this._matchesMyTeam((e.team_a||{}).name)||this._matchesMyTeam((e.team_b||{}).name)}_getBracketSide(e,t,a){if(!this._myTeam)return null;for(const e of a.left)if(this._tieHasMyTeam(e))return"left";for(const e of a.right)if(this._tieHasMyTeam(e))return"right";for(const e of t.left)if(this._tieHasMyTeam(e))return"left";for(const e of t.right)if(this._tieHasMyTeam(e))return"right";for(const t of e){const e=t.ties||[],a=Math.ceil(e.length/2);for(let t=0;t<e.length;t++)if(this._tieHasMyTeam(e[t]))return t<a?"left":"right"}return null}_isCollapsed(e){return e.ties.length>0&&e.ties.every(e=>e.completed)?!this._expandedRounds.has(e.name):this._collapsedRounds.has(e.name)}_toggleRound(e){if(e.ties.length>0&&e.ties.every(e=>e.completed)){const t=new Set(this._expandedRounds);t.has(e.name)?t.delete(e.name):t.add(e.name),this._expandedRounds=t}else{const t=new Set(this._collapsedRounds);t.has(e.name)?t.delete(e.name):t.add(e.name),this._collapsedRounds=t}}_roundProgress(e){const t=e.ties.length;return t?{total:t,done:e.ties.filter(e=>e.completed).length,live:e.ties.filter(e=>e.single&&"in"===e.single.state||e.leg1&&"in"===e.leg1.state||e.leg2&&"in"===e.leg2.state).length}:null}_formatTime(e){if(!e)return"";const t=(0,s.n1)(e);if(!t)return"";const a=this.hass?.config?.time_zone;return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...a?{timeZone:a}:{}})}_renderMyNextMatch(e){if(!this._myTeam||!e?.length)return"";const t=Date.now(),a=e.find(e=>this._matchesMyTeam(e.home_team)||this._matchesMyTeam(e.away_team)?"in"===e.state?1:"pre"===e.state?(lt(e)||0)>t:0:0);if(!a)return"";const s="in"===a.state,r=a.season_info&&"N/A"!==a.season_info?this._formatSeasonInfo(a.season_info):"";return i.qy`
      <div class="my-next-banner ${s?"live":""}">
        <div class="mnb-teams">
          ${a.home_logo?i.qy`<img src="${a.home_logo}" class="mnb-logo">`:""}
          <span class="mnb-name">${a.home_team}</span>
          ${s?i.qy`<span class="mnb-score">${S(a.home_score)} – ${S(a.away_score)}</span>`:i.qy`<span class="mnb-vs">${this._t("match.vs")}</span>`}
          <span class="mnb-name away">${a.away_team}</span>
          ${a.away_logo?i.qy`<img src="${a.away_logo}" class="mnb-logo">`:""}
        </div>
        <div class="mnb-meta">
          ${r?i.qy`<span class="mnb-round-tag">${r}</span>`:""}
          ${!s&&this._matchDate(a)?(()=>{const e=(lt(a)||0)-t;if(e>0&&e<864e5){const t=Math.floor(e/36e5),a=Math.floor(e%36e5/6e4);return i.qy`<span class="mnb-countdown">⏱ ${t>0?`${t}u ${a}m`:`${a}m`}</span>`}const s=this._matchDate(a);return i.qy`<span class="mnb-date">${this._formatDate(s)} · ${this._formatTime(s)}</span>`})():""}
          ${a.venue?i.qy`<span class="mnb-venue">📍 ${a.venue}</span>`:""}
        </div>
      </div>
    `}_renderSchedule(e){if(!e||!e.length)return i.qy`<div class="sched-empty">${this._t("generic.no_match")}</div>`;const t=Date.now(),a=t+3888e6,s=this.hass?.config?.time_zone,r=e.filter(e=>{const i=lt(e);return null===i?0:"in"===e.state?1:"post"===e.state?i<=t:i>=t&&i<=a}),o=[...r.length?r:e].sort((e,t)=>{const a=lt(e),i=lt(t);return null===a&&null===i?0:null===a?1:null===i?-1:a-i}),n=(new Date).toLocaleDateString("en-CA",s?{timeZone:s}:{}),l=o.filter(e=>"in"===e.state).length,c=o.filter(e=>this._dateKey(this._matchDate(e))===n).length,d=this._myTeam?o.filter(e=>this._matchesMyTeam(e.home_team)||this._matchesMyTeam(e.away_team)).length:0;let p=this._schedFilter;"auto"===p&&(p=l>0?"live":c>0?"today":"all");const h="live"===p?o.filter(e=>"in"===e.state):"my-team"===p?o.filter(e=>this._matchesMyTeam(e.home_team)||this._matchesMyTeam(e.away_team)):"today"===p?o.filter(e=>this._dateKey(this._matchDate(e))===n):o,u={};for(const e of h){const t=this._dateKey(this._matchDate(e));u[t]||(u[t]=[]),u[t].push(e)}return i.qy`
      <div class="sched-view">
        <div class="sched-filters">
          ${[["all",this._t("editor.all_groups"),o.length],["live",this._t("status.live"),l],["today",this._t("time.today"),c],...this._myTeam?[["my-team",this._myTeam,d]]:[]].map(([e,t,a])=>i.qy`
            <span class="sched-chip ${p===e?"active":""} ${a||"all"===e?"":"empty"}"
                  @click=${()=>{this._schedFilter=e}}>
              ${t}${a>0?i.qy`<span class="chip-count">${a}</span>`:""}
            </span>
          `)}
        </div>
        ${h.length?"":i.qy`<div class="sched-empty">${this._t("generic.no_match")}</div>`}
        ${Object.entries(u).map(([e,t])=>{const a=t[0].league_logo&&t.every(e=>e.league_logo===t[0].league_logo)?t[0].league_logo:null;return i.qy`
          <div class="sched-day" data-date=${e}>
            <div class="sched-day-label">
              ${a?i.qy`<img class="sched-comp-logo" src="${a}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
              ${t[0].season_info&&"N/A"!==t[0].season_info?(()=>{const e=this._formatSeasonInfo(t[0].season_info);return e?i.qy`<span class="sched-round-chip">${e}</span>`:""})():""}
              <span>${this._formatDate(this._matchDate(t[0]))}</span>
            </div>
            <div class="sched-matches">
              ${t.map(e=>{const t="in"===e.state,a="post"===e.state,s=e.home_team||this._t("bracket.tbd"),r=e.away_team||this._t("bracket.tbd"),o=this._matchesMyTeam(s)||this._matchesMyTeam(r),n=a||t?`${S(e.home_score,"-")} – ${S(e.away_score,"-")}`:this._formatTime(this._matchDate(e));return i.qy`
                  <div class="sched-match ${t?"live":""} ${a?"done":""} ${o&&this._myTeam?"my-team":""}">
                    <div class="sched-team">
                      ${e.home_logo?i.qy`<img class="sched-logo" src="${e.home_logo}" alt="">`:""}
                      <span class="sched-name">${s}</span>
                    </div>
                    <div class="sched-score">
                      ${t?i.qy`<span class="dot"></span>`:""}
                      <span>${n}</span>
                      ${t&&e.clock?i.qy`<span class="sched-clock">${e.clock}'</span>`:""}
                    </div>
                    <div class="sched-team away">
                      ${e.away_logo?i.qy`<img class="sched-logo" src="${e.away_logo}" alt="">`:""}
                      <span class="sched-name">${r}</span>
                    </div>
                  </div>
                `})}
            </div>
          </div>
        `})}
      </div>
    `}getCardSize(){return 6}static getConfigElement(){return document.createElement("soccer-live-bracket-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_bracket",hide_header:0,compact:0,style:"list"}}_formatScore(e){return null==e?"-":String(e)}_renderTie(e){const t=e.team_a||{},a=e.team_b||{},s=e.leg1,r=e.leg2,o=e.single,n=e.winner_team,l=n&&t.name&&n===t.name,c=n&&a.name&&n===a.name,d=(e,t)=>e&&t&&t.name?e.home_team===t.name?e.home_score:e.away_team===t.name?e.away_score:null:null,p=d(s,t),h=d(s,a),u=d(r,t),g=d(r,a),m=d(o,t),f=d(o,a),_=s&&"in"===s.state||r&&"in"===r.state||o&&"in"===o.state,v=!s&&!o,b=this._myTeam?this._tieHasMyTeam(e):null;return i.qy`
      <div class="tie ${_?"live":""} ${e.completed?"done":""} ${1==b?"my-team":""} ${0==b?"other-team":""}">
        <div class="tie-row ${l?"winner":""} ${c?"loser":""}">
          <img src="${t.logo}" alt="${t.name}" />
          <span class="tname">${t.name||this._t("bracket.tbd")}</span>
          <span class="legs">
            ${o?i.qy`<span class="leg">${this._formatScore(m)}</span>`:i.qy`
              <span class="leg">${this._formatScore(p)}</span>
              <span class="leg">${this._formatScore(u)}</span>
            `}
          </span>
        </div>
        <div class="tie-row ${c?"winner":""} ${l?"loser":""}">
          <img src="${a.logo}" alt="${a.name}" />
          <span class="tname">${a.name||this._t("bracket.tbd")}</span>
          <span class="legs">
            ${o?i.qy`<span class="leg">${this._formatScore(f)}</span>`:i.qy`
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
          ${v?i.qy`<span class="date pending">${this._t("bracket.tbd")}</span>`:""}
          ${e.completed&&b?this._matchesMyTeam(e.winner_team)?i.qy`<span class="my-result won">✓ ${this._t("bracket.won")}</span>`:i.qy`<span class="my-result lost">✗ ${this._t("bracket.eliminated")}</span>`:""}
        </div>
      </div>
    `}_aggregateFor(e,t){if(!t||!t.name)return null;const a=(e,t)=>e&&t&&t.name?e.home_team===t.name?e.home_score:e.away_team===t.name?e.away_score:null:null;if(e.single)return a(e.single,t);let i=0,s=0;const r=a(e.leg1,t),o=a(e.leg2,t);return null!=r&&(i+=r,s=1),null!=o&&(i+=o,s=1),s?i:null}_renderMiniTie(e){const t=e.team_a||{},a=e.team_b||{},s=this._aggregateFor(e,t),r=this._aggregateFor(e,a),o=e.winner_team,n=o&&t.name&&o===t.name,l=o&&a.name&&o===a.name,c=e.leg1&&"in"===e.leg1.state||e.leg2&&"in"===e.leg2.state||e.single&&"in"===e.single.state,d=("in"===e.leg1?.state?e.leg1:null)||("in"===e.leg2?.state?e.leg2:null)||("in"===e.single?.state?e.single:null),p=d?.clock||"",h=!e.leg1&&!e.single,u=t.abbrev||(t.name?t.name.substring(0,3).toUpperCase():this._t("bracket.tbd")),g=a.abbrev||(a.name?a.name.substring(0,3).toUpperCase():this._t("bracket.tbd")),m=this._myTeam?this._tieHasMyTeam(e):null,f=this._matchDate(e.leg1)||this._matchDate(e.leg2)||this._matchDate(e.single)||e.first_leg_date||null,_=!(!this._matchesEntity||!f);return i.qy`
      <div class="mini-tie ${c?"live":""} ${e.completed?"done":""} ${h?"pending":""} ${1==m?"my-team":""} ${0==m?"other-team":""} ${_?"sched-link":""}"
        @click=${_?()=>{this._schedScrollToDate=this._dateKey(f),this._schedFilter="all",this._activeTab="schedule"}:null}>
        <div class="mini-team ${n?"winner":""} ${l?"loser":""}">
          ${t.logo?i.qy`<img src="${t.logo}" alt="${t.name}" />`:i.qy`<div class="logo-ph"></div>`}
          <span class="abbr">${u}</span>
          <span class="agg-num">${null!==s?s:"-"}</span>
        </div>
        <div class="mini-team ${l?"winner":""} ${n?"loser":""}">
          ${a.logo?i.qy`<img src="${a.logo}" alt="${a.name}" />`:i.qy`<div class="logo-ph"></div>`}
          <span class="abbr">${g}</span>
          <span class="agg-num">${null!==r?r:"-"}</span>
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
    `}_renderArrows(e,t){if(e<=0)return"";const a=2*e,s=[],r="left"===t,o=`arrow-${t}`;for(let t=0;t<e;t++){const n=(2*t+.5)/a*100,l=(2*t+1.5)/a*100,c=(t+.5)/e*100;r?(s.push(i.JW`<line x1="0" y1="${n}%" x2="50%" y2="${n}%" stroke-linecap="round" />`),s.push(i.JW`<line x1="0" y1="${l}%" x2="50%" y2="${l}%" stroke-linecap="round" />`),s.push(i.JW`<line x1="50%" y1="${n}%" x2="50%" y2="${l}%" />`),s.push(i.JW`<line x1="50%" y1="${c}%" x2="100%" y2="${c}%" marker-end="url(#${o})" />`)):(s.push(i.JW`<line x1="100%" y1="${n}%" x2="50%" y2="${n}%" stroke-linecap="round" />`),s.push(i.JW`<line x1="100%" y1="${l}%" x2="50%" y2="${l}%" stroke-linecap="round" />`),s.push(i.JW`<line x1="50%" y1="${n}%" x2="50%" y2="${l}%" />`),s.push(i.JW`<line x1="50%" y1="${c}%" x2="0" y2="${c}%" marker-end="url(#${o})" />`))}const n=r?i.JW`<marker id="${o}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M0,0 L10,5 L0,10 z" fill="var(--cl-accent)" /></marker>`:i.JW`<marker id="${o}" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M10,0 L0,5 L10,10 z" fill="var(--cl-accent)" /></marker>`;return i.qy`
      <div class="tree-arrows ${t}">
        <svg class="connector-svg ${t}" preserveAspectRatio="none">
          <defs>${n}</defs>
          ${s}
        </svg>
      </div>
    `}_renderTree(e){const t=t=>{const a=e.filter(e=>e.size===t);return 0===a.length?null:a.find(e=>"Knockout Playoffs"!==e.name&&"Preliminary Round"!==e.name&&"Third Place"!==e.name)||a[a.length-1]},a=e.find(e=>"Knockout Playoffs"===e.name),r=e.find(e=>"Third Place"===e.name),o=t(16),n=t(8),l=t(4),c=t(2),d=e.find(e=>"Final"===e.name)||t(1),p=!(!l||!c),h=!(!o||!p),u=!(!n||!p),g=e.filter(e=>"Third Place"===e.name||"Final"===e.name||"Knockout Playoffs"===e.name?0:e.size>16||16===e.size&&h||8===e.size&&u?1:0),m=e=>{if(!e)return{left:[],right:[]};const t=e.ties||[],a=Math.ceil(t.length/2);return{left:t.slice(0,a),right:t.slice(a)}},f=m(h?null:o),_=m(u?null:n),v=m(l),b=m(c),y=this._treeShowPlayoffs?m(a):null,x=d?d.ties[0]:null,w=r?r.ties[0]:null,$=f.left.length||_.left.length||v.left.length||b.left.length,k=f.left.length||_.left.length,S=f.right.length||_.right.length,C=this._getBracketSide(g,v,b);return i.qy`
      <div class="tree-wrap ${g.length?"has-early":""}">
        <div class="tree ${$?"":"tree-center-only"} ${h?"no-r32":""} ${u?"no-r16":""}">
          <div class="tree-half left ${"left"===C?"path-my-team":C?"path-other":""}">
            ${y&&y.left.length?i.qy`
              ${this._renderTreeRound(y.left,"round.knockout_playoffs")}
              ${k?this._renderArrows(k,"left"):""}
            `:""}
            ${f.left.length?this._renderTreeRound(f.left,"round.r32"):""}
            ${f.left.length&&_.left.length?this._renderArrows(_.left.length,"left"):""}
            ${_.left.length?this._renderTreeRound(_.left,"round.r16"):""}
            ${_.left.length&&v.left.length?this._renderArrows(v.left.length,"left"):""}
            ${v.left.length?this._renderTreeRound(v.left,"round.quarterfinals"):""}
            ${v.left.length&&b.left.length?this._renderArrows(b.left.length,"left"):""}
            ${b.left.length?this._renderTreeRound(b.left,"round.semifinals"):""}
            ${b.left.length?this._renderArrows(1,"left"):""}
          </div>

          <div class="tree-center">
            <div class="trophy">🏆</div>
            <div class="trophy-label">${this._t("round.final")}</div>
            ${x?i.qy`<div class="final-tie-wrap">${this._renderMiniTie(x)}</div>`:i.qy`<div class="final-placeholder">${this._t("bracket.tbd")}</div>`}
            ${(()=>{const e=x?.completed&&x?.winner_team?[x.team_a,x.team_b].find(e=>e?.name===x.winner_team):null;return e?i.qy`
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

          <div class="tree-half right ${"right"===C?"path-my-team":C?"path-other":""}">
            ${b.right.length?this._renderArrows(1,"right"):""}
            ${b.right.length?this._renderTreeRound(b.right,"round.semifinals"):""}
            ${b.right.length&&v.right.length?this._renderArrows(b.right.length,"right"):""}
            ${v.right.length?this._renderTreeRound(v.right,"round.quarterfinals"):""}
            ${v.right.length&&_.right.length?this._renderArrows(v.right.length,"right"):""}
            ${_.right.length?this._renderTreeRound(_.right,"round.r16"):""}
            ${_.right.length&&f.right.length?this._renderArrows(_.right.length,"right"):""}
            ${f.right.length?this._renderTreeRound(f.right,"round.r32"):""}
            ${y&&y.right.length?i.qy`
              ${S?this._renderArrows(S,"right"):""}
              ${this._renderTreeRound(y.right,"round.knockout_playoffs")}
            `:""}
          </div>
        </div>

        ${g.map(e=>{const t=this._isCollapsed(e),a=this._roundProgress(e),r=a&&a.done===a.total&&a.total>0,o=e.ties.map(e=>e.first_leg_date||this._matchDate(e.leg1)||this._matchDate(e.single)||this._matchDate(e.leg2)).filter(Boolean).sort((e,t)=>((0,s.n1)(e)?.getTime()||0)-((0,s.n1)(t)?.getTime()||0)),n=o.length?o[0]===o[o.length-1]?this._formatDate(o[0]):`${this._formatDate(o[0])} – ${this._formatDate(o[o.length-1])}`:"";return i.qy`
            <div class="early-round-section ${t?"collapsed":""}">
              <div class="early-round-label" @click=${()=>this._toggleRound(e)}>
                <span class="early-round-name">
                  ${this._localizeRoundName(e)}
                  ${n?i.qy`<span class="early-date-range"> · ${n}</span>`:""}
                </span>
                ${a?i.qy`
                  <span class="round-prog ${r?"done":a.live?"live":""}">
                    ${r?"✓":a.live?i.qy`<span class="dot"></span>`:""}
                    ${a.done}/${a.total}
                  </span>
                `:""}
                ${this._matchesEntity?i.qy`
                  <span class="early-sched-btn" title="${this._t("bracket.view_schedule")}" @click=${e=>{e.stopPropagation(),this._schedScrollToDate=o[0]||null,this._schedFilter="all",this._activeTab="schedule"}}>📅</span>
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
    `}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return i.qy`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.rounds||[],a=this._config.groups_entity,r=a?this.hass.states[a]:null,o=(r?.attributes?.standings_groups||[]).filter(e=>e.standings?.length),n=o.length>0,l=this._config.matches_entity||this._matchesEntity,c=l?this.hass.states[l]:null,d=c?.attributes?.matches||[],p=d.length>0;if(0===t.length&&!n&&!p)return K(e.attributes,e=>this._t(e),()=>i.qy`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">🏆</div>
            <div class="empty-title">${this._t("bracket.empty.title")}</div>
            <div class="empty-sub">${this._t("bracket.empty.sub")}</div>
          </div>
        </ha-card>
      `);const h=t[t.length-1],u=h?this._localizeRoundName(h):e.state;return i.qy`
      <ha-card class="${this._compact?"compact":""} style-${this._cardStyle}">
        <div class="hero-bg"></div>
        ${this._hideHeader?"":i.qy`
          ${X({logo:e.attributes.league_logo||(e.attributes.league_info||[])[0]?.logo_href||null,title:Se(e.attributes.league_name,(0,s.$c)(this.hass,this._config))||this._t("card.bracket"),badge:ee(u,"neutral"),fallbackIcon:"🏆"})}
        `}

        ${this._renderMyNextMatch(d)}

        ${n||p?i.qy`
          <div class="bracket-tabs">
            <span class="bracket-tab ${"bracket"===this._activeTab?"active":""}"
                  @click=${()=>{this._activeTab="bracket"}}>
              🏆 ${this._t("bracket.tab_bracket")}
            </span>
            ${n?i.qy`
              <span class="bracket-tab ${"groups"===this._activeTab?"active":""}"
                    @click=${()=>{this._activeTab="groups"}}>
                📊 ${this._t("bracket.tab_groups")}
              </span>
            `:""}
            ${p?i.qy`
              <span class="bracket-tab ${"schedule"===this._activeTab?"active":""}"
                    @click=${()=>{this._activeTab="schedule"}}>
                📅 ${this._t("bracket.tab_schedule")}
              </span>
            `:""}
          </div>
        `:""}

        ${"groups"===this._activeTab&&n?this._renderGroups(o):"schedule"===this._activeTab&&p?this._renderSchedule(d):"tree"===this._cardStyle?this._renderTree(t):i.qy`
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
    `}static get styles(){return[z,Ue,te,i.AH`:host{--cl-accent:#6366f1;--cl-accent-2:#ec4899;--cl-live:#ef4444;--cl-live-glow:rgba(239,68,68,0.5);--cl-green:#10b981;--cl-gold:#fbbf24;--cl-card-2:rgba(255,255,255,0.05);--cl-divider:rgba(255,255,255,0.08);--cl-glass-border:rgba(255,255,255,0.08);}ha-card{position:relative;overflow:hidden;border-radius:20px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,0.15);background:var(--cl-bg);color:var(--cl-text);}ha-card.empty{padding:24px;text-align:center;color:var(--cl-text-2);}.empty-state{display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px;}.empty-icon{font-size:38px;opacity:0.4;}.empty-title{font-weight:800;color:var(--cl-text);}.empty-sub{font-size:12px;color:var(--cl-text-2);}.hero-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 0% 0%,rgba(var(--cl-accent-rgb),0.10),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(251,191,36,0.10),transparent 50%);pointer-events:none;}.rounds-container{position:relative;z-index:1;display:flex;gap:16px;padding:18px;overflow-x:auto;}.round{flex:1 0 240px;min-width:240px;display:flex;flex-direction:column;gap:8px;justify-content:space-around;}.round-name{display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center;padding:6px 12px;border-radius:12px;background:rgba(var(--cl-accent-rgb),0.12);align-self:center;margin-bottom:4px;}.round-name-en{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-accent);line-height:1;}.round-ties{display:flex;flex-direction:column;gap:12px;justify-content:space-around;flex:1;}.tie{background:var(--cl-card-2);border:1px solid var(--cl-glass-border);border-radius:12px;padding:10px 12px;transition:all 0.25s cubic-bezier(0.4,0,0.2,1);position:relative;}.tie:hover{border-color:var(--cl-accent);transform:translateY(-2px);}.tie.live{border-color:var(--cl-live);box-shadow:0 0 0 1px var(--cl-live),0 0 20px var(--cl-live-glow);animation:tie-pulse 2s ease-in-out infinite;}@keyframes tie-pulse{0%,100%{box-shadow:0 0 0 1px var(--cl-live),0 0 20px var(--cl-live-glow);}50%{box-shadow:0 0 0 2px var(--cl-live),0 0 30px var(--cl-live-glow);}}.tie.done{border-color:rgba(16,185,129,0.3);}.tie-row{display:grid;grid-template-columns:22px 1fr auto;align-items:center;gap:10px;padding:5px 0;}.tie-row + .tie-row{border-top:1px solid var(--cl-divider);}.tie-row img{width:22px;height:22px;object-fit:contain;}.tie-row .tname{font-size:13px;font-weight:600;color:var(--cl-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-0.01em;}.tie-row.winner .tname{font-weight:800;}.tie-row.loser .tname{color:var(--cl-text-2);}.tie-row.loser img{opacity:0.55;}.legs{display:inline-flex;gap:4px;}.leg{min-width:22px;text-align:center;font-size:13px;font-weight:800;font-variant-numeric:tabular-nums;padding:2px 6px;border-radius:6px;background:rgba(255,255,255,0.06);color:var(--cl-text);}.tie-row.winner .leg{background:rgba(16,185,129,0.2);color:var(--cl-green);}.tie-row.loser .leg{opacity:0.5;}.tie-foot{margin-top:8px;padding-top:8px;border-top:1px dashed var(--cl-divider);display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap;}.agg{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--cl-green);padding:2px 8px;background:rgba(16,185,129,0.12);border-radius:6px;}.agg.tied{color:var(--cl-gold);background:rgba(251,191,36,0.12);}.date{font-size:10px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.06em;}.date.pending{color:var(--cl-accent);}.my-result{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;padding:2px 7px;border-radius:6px;}.my-result.won{color:var(--cl-green);background:rgba(16,185,129,0.12);}.my-result.lost{color:var(--cl-live);background:rgba(239,68,68,0.08);}.live-badge{display:inline-flex;align-items:center;gap:5px;background:linear-gradient(135deg,var(--cl-live),#f97316);color:white;padding:2px 8px;border-radius:999px;font-size:9px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;}.live-badge .dot{width:5px;height:5px;border-radius:50%;background:white;animation:dot-pulse 1.2s ease-in-out infinite;}@keyframes dot-pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.7);}}.tie.my-team{border-color:var(--cl-green) !important;box-shadow:0 0 16px rgba(16,185,129,0.25);}.tie.other-team{opacity:0.45;}.mini-tie.my-team{border-color:var(--cl-green) !important;box-shadow:0 0 12px rgba(16,185,129,0.3);}.mini-tie.other-team{opacity:0.38;filter:grayscale(0.3);}.bracket-tabs{position:relative;z-index:1;display:flex;gap:6px;padding:0 16px 12px;}.bracket-tab{font-size:11px;font-weight:700;padding:5px 14px;border-radius:99px;cursor:pointer;white-space:nowrap;border:1px solid var(--cl-divider);background:var(--cl-surface);color:var(--cl-text-2);transition:background 0.15s;user-select:none;}.bracket-tab.active{background:var(--cl-accent);border-color:var(--cl-accent);color:#fff;}.groups-view{position:relative;z-index:1;padding:0 14px 18px;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;}.group-block{background:var(--cl-card-2);border:1px solid var(--cl-glass-border);border-radius:12px;overflow:hidden;}.group-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-accent);padding:7px 10px;background:rgba(var(--cl-accent-rgb),0.08);border-bottom:1px solid var(--cl-divider);}.group-header-row{display:grid;grid-template-columns:20px 20px 1fr repeat(5,26px) 28px;align-items:center;gap:2px;padding:4px 8px 3px;border-bottom:1px solid var(--cl-divider);}.gh-name{grid-column:span 3;}.gh-stat,.gh-pts{font-size:9px;font-weight:700;color:var(--cl-text-2);text-align:center;text-transform:uppercase;}.gh-pts{color:var(--cl-accent);}.group-row{display:grid;grid-template-columns:20px 20px 1fr repeat(5,26px) 28px;align-items:center;gap:2px;padding:5px 8px;border-bottom:1px solid rgba(255,255,255,0.03);transition:background 0.15s;}.group-row:last-child{border-bottom:none;}.group-row.qualify{background:rgba(var(--cl-accent-rgb),0.04);}.group-row.my-team{background:rgba(16,185,129,0.08);border-left:2px solid var(--cl-green);}.g-rank{font-size:10px;font-weight:700;color:var(--cl-text-2);text-align:center;}.g-logo{width:18px;height:18px;object-fit:contain;display:block;}.g-logo-ph{width:18px;height:18px;border-radius:50%;background:var(--cl-card-2);}.g-name{font-size:11px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.group-row.my-team .g-name{font-weight:800;color:var(--cl-green);}.g-stat{font-size:11px;font-weight:600;color:var(--cl-text-2);text-align:center;font-variant-numeric:tabular-nums;}.g-gd.pos{color:var(--cl-green);}.g-gd.neg{color:var(--cl-live);}.g-pts{font-size:12px;font-weight:800;color:var(--cl-text);text-align:center;font-variant-numeric:tabular-nums;}.group-row.my-team .g-pts{color:var(--cl-green);}.sched-view{padding:8px 16px 16px;}.sched-empty{padding:32px;text-align:center;color:var(--cl-text-2);font-size:13px;}.sched-day{margin-bottom:16px;}.sched-day-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-accent);padding:4px 8px;margin-bottom:6px;background:rgba(var(--cl-accent-rgb),0.10);border-radius:6px;display:inline-block;}.sched-matches{display:flex;flex-direction:column;gap:4px;}.sched-match{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;background:var(--cl-card-2);border-radius:8px;padding:7px 10px;border:1px solid var(--cl-glass-border);}.sched-match.live{border-color:var(--cl-live);box-shadow:0 0 12px var(--cl-live-glow);}.sched-match.my-team{border-color:var(--cl-green);}.sched-team{display:flex;align-items:center;gap:6px;overflow:hidden;}.sched-team.away{justify-content:flex-end;text-align:right;flex-direction:row-reverse;}.sched-logo{width:20px;height:20px;object-fit:contain;flex-shrink:0;}.sched-name{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.sched-score{display:flex;align-items:center;gap:4px;justify-content:center;font-size:13px;font-weight:800;white-space:nowrap;font-variant-numeric:tabular-nums;min-width:56px;text-align:center;}.sched-match.live .sched-score{color:var(--cl-live);}.sched-clock{font-size:9px;font-weight:700;color:var(--cl-text-2);opacity:0.8;}.sched-score .dot{width:7px;height:7px;border-radius:50%;background:var(--cl-live);flex-shrink:0;animation:pulse 1.2s ease-in-out infinite;}.rounds-container.compact{flex-direction:column;overflow-x:visible;}.rounds-container.compact .round{flex:none;min-width:0;}@media (max-width:600px){ha-card.style-list .rounds-container{flex-direction:column;}ha-card.style-list .round{flex:none;min-width:0;}}.round .round-name{cursor:pointer;}.round.collapsed .round-chevron{transform:rotate(-90deg);}.round.collapsed .round-name{margin-bottom:0;}.round-prog-count{font-size:9px;font-weight:700;color:var(--cl-text-2);opacity:0.7;display:inline-flex;align-items:center;gap:3px;}.round-prog-count.live{color:var(--cl-live);opacity:1;}.tree-wrap{position:relative;z-index:1;overflow-x:auto;padding:24px 12px 24px;}.tree{display:flex;align-items:stretch;justify-content:center;min-height:480px;gap:0;min-width:max-content;}.tree-half{flex:1 0 auto;display:flex;align-items:stretch;}.tree-half.path-my-team{background:rgba(16,185,129,0.05);border-radius:12px;outline:1px solid rgba(16,185,129,0.15);}.tree-half.path-other{opacity:0.55;filter:saturate(0.6);}.tree-col{flex:1;display:flex;flex-direction:column;padding:0 6px;min-width:110px;max-width:140px;}.tree-col-label{text-align:center;padding:4px 8px;background:rgba(var(--cl-accent-rgb),0.12);border-radius:8px;margin-bottom:10px;display:flex;flex-direction:column;align-items:center;gap:1px;}.tree-col-label-en{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-accent);line-height:1;}.tree-col-ties{flex:1;display:flex;flex-direction:column;justify-content:space-around;gap:6px;position:relative;}.tree-arrows{flex:0 0 36px;min-width:36px;display:flex;align-items:stretch;padding-top:44px;padding-bottom:0;}.connector-svg{width:100%;height:100%;stroke:var(--cl-accent);stroke-width:2;fill:none;overflow:visible;display:block;}.connector-svg .arrow-head{fill:var(--cl-accent);stroke:none;}.mini-tie{background:var(--cl-bg);border:1.5px solid var(--cl-accent);border-radius:10px;padding:7px 9px;display:flex;flex-direction:column;gap:2px;transition:all 0.2s cubic-bezier(0.4,0,0.2,1);position:relative;box-shadow:0 2px 8px rgba(var(--cl-accent-rgb),0.15);}.mini-tie.sched-link{cursor:pointer;}.mini-tie.sched-link:hover{border-color:var(--cl-accent) !important;box-shadow:0 0 10px rgba(var(--cl-accent-rgb),0.25);}.mini-tie:hover{border-color:var(--cl-accent);transform:scale(1.04);z-index:5;}.mini-tie.live{border-color:var(--cl-live);box-shadow:0 0 0 1px var(--cl-live),0 0 16px var(--cl-live-glow);animation:tie-pulse 2s ease-in-out infinite;}.mini-tie.done{border-color:rgba(16,185,129,0.3);}.mini-tie.pending{opacity:0.55;background:transparent;border-style:dashed;}.mini-team{display:grid;grid-template-columns:18px 1fr auto;align-items:center;gap:6px;padding:2px 0;}.mini-team img{width:18px;height:18px;object-fit:contain;}.mini-team .logo-ph{width:18px;height:18px;border-radius:50%;background:var(--cl-card-2);}.mini-team .abbr{font-size:11px;font-weight:700;color:var(--cl-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-0.01em;}.mini-team .agg-num{font-size:12px;font-weight:800;font-variant-numeric:tabular-nums;min-width:14px;text-align:right;color:var(--cl-text-2);}.mini-team.winner .abbr{font-weight:800;}.mini-team.winner .agg-num{color:var(--cl-green);}.mini-team.loser .abbr{color:var(--cl-text-2);}.mini-team.loser img{opacity:0.5;}.mini-team.loser .agg-num{opacity:0.55;}.mini-clock{display:flex;align-items:center;gap:4px;padding:3px 6px 0;}.mini-clock .dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:var(--cl-live);box-shadow:0 0 6px var(--cl-live-glow);animation:dot-pulse 1.2s ease-in-out infinite;}.mini-clock-text{font-size:9px;font-weight:700;color:var(--cl-live);font-variant-numeric:tabular-nums;}.tree-center{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px 16px;gap:14px;min-width:200px;flex:0 0 200px;position:relative;}.tree-center::before{content:'';position:absolute;inset:20% 8%;background:radial-gradient(circle at center,rgba(251,191,36,0.20),transparent 65%);pointer-events:none;border-radius:50%;}.trophy{position:relative;font-size:64px;line-height:1;filter:drop-shadow(0 4px 24px rgba(251,191,36,0.7));animation:trophy-shine 4s ease-in-out infinite;z-index:2;}@keyframes trophy-shine{0%,100%{filter:drop-shadow(0 4px 24px rgba(251,191,36,0.7));transform:scale(1);}50%{filter:drop-shadow(0 4px 36px rgba(251,191,36,1)) drop-shadow(0 0 12px #fbbf24);transform:scale(1.04);}}.trophy-label{position:relative;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.18em;background:linear-gradient(135deg,var(--cl-gold),#d97706);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-align:center;z-index:2;}.champion-banner{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:8px;padding:5px 10px;border-radius:10px;background:rgba(251,191,36,0.12);border:1px solid rgba(251,191,36,0.3);}.champion-logo{width:18px;height:18px;object-fit:contain;}.champion-crown{font-size:13px;}.champion-name{font-size:10px;font-weight:800;color:var(--cl-gold,#fbbf24);text-transform:uppercase;letter-spacing:0.08em;}.final-tie-wrap{position:relative;width:100%;max-width:170px;z-index:2;}.final-tie-wrap .mini-tie{background:linear-gradient(135deg,rgba(251,191,36,0.12),rgba(251,191,36,0.02));border-color:rgba(251,191,36,0.4);box-shadow:0 4px 16px rgba(251,191,36,0.2);}.final-tie-wrap .mini-team.winner .agg-num{color:var(--cl-gold);}.final-placeholder{position:relative;font-size:11px;font-weight:800;color:var(--cl-text-2);padding:8px 14px;background:var(--cl-card-2);border:1px dashed var(--cl-glass-border);border-radius:8px;letter-spacing:0.1em;}.third-place-wrap{position:relative;width:100%;max-width:170px;z-index:2;display:flex;flex-direction:column;align-items:center;gap:4px;}.third-place-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-text-2);text-align:center;opacity:0.8;}.final-tie-wrap.third .mini-tie{background:linear-gradient(135deg,rgba(var(--cl-accent-rgb),0.08),transparent);border-color:rgba(var(--cl-accent-rgb),0.3);box-shadow:none;}.final-tie-wrap.third .mini-team.winner .agg-num{color:var(--cl-accent);}.tree-pending{font-size:11px;font-weight:600;color:var(--cl-text-2);text-align:center;padding:6px 12px;border-radius:8px;background:var(--cl-card-2);border:1px dashed var(--cl-glass-border);max-width:160px;line-height:1.4;}.tree.tree-center-only{justify-content:center;min-height:0;}.tree.tree-center-only .tree-half{display:none;}.tree.tree-center-only .tree-center{flex:0 0 auto;min-width:0;padding:16px 24px;}@media (max-width:720px){ha-card.style-tree .tree-col{min-width:100px;}ha-card.style-tree .tree-center{min-width:140px;}ha-card.style-tree .trophy{font-size:56px;}}@media (max-width:520px){ha-card.style-tree .tree{flex-direction:column;min-height:0;min-width:0;width:100%;}ha-card.style-tree .tree-half{flex:1 1 auto;flex-direction:row;}ha-card.style-tree .tree-half.right{flex-direction:row;}ha-card.style-tree .tree-center{order:-1;padding:12px;}}.tree-wrap.has-early{padding-bottom:0;}.early-round-section{padding:0 18px 18px;}.early-round-label{display:flex;align-items:center;justify-content:space-between;gap:8px;cursor:pointer;user-select:none;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:var(--cl-accent);padding:8px 12px;margin-bottom:12px;background:rgba(var(--cl-accent-rgb),0.10);border-radius:10px;transition:background 0.15s;}.early-round-label:hover{background:rgba(var(--cl-accent-rgb),0.18);}.early-round-name{flex:1;}.early-date-range{font-size:9px;font-weight:400;opacity:0.65;letter-spacing:0;}.round-prog{font-size:10px;font-weight:700;letter-spacing:0.05em;display:flex;align-items:center;gap:4px;color:var(--cl-text-2);}.round-prog.done{color:var(--cl-green);}.round-prog.live{color:var(--cl-live);}.round-prog .dot{width:6px;height:6px;border-radius:50%;background:var(--cl-live);animation:pulse 1.2s ease-in-out infinite;}.round-chevron{font-size:14px;font-weight:400;color:var(--cl-text-2);transform:rotate(90deg);display:inline-block;transition:transform 0.2s;}.early-round-section.collapsed .round-chevron{transform:rotate(-90deg);}.early-round-section.collapsed{padding-bottom:0;}.early-round-section.collapsed .early-round-label{margin-bottom:0;}.early-round-ties{display:grid;grid-template-columns:1fr 1fr;gap:8px;}@media (max-width:480px){.early-round-ties{grid-template-columns:1fr;}}.sched-filters{display:flex;gap:8px;padding:0 0 12px;flex-wrap:wrap;}.sched-chip{font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;cursor:pointer;user-select:none;transition:background 0.15s,color 0.15s;background:rgba(var(--cl-accent-rgb),0.10);color:var(--cl-accent);border:1px solid rgba(var(--cl-accent-rgb),0.2);}.sched-chip.active{background:var(--cl-accent);color:#fff;border-color:transparent;}.sched-chip:hover:not(.active){background:rgba(var(--cl-accent-rgb),0.20);}.sched-chip.empty{opacity:0.45;}.my-next-banner{position:relative;z-index:1;margin:0 14px 12px;padding:10px 14px;background:rgba(var(--cl-accent-rgb),0.07);border:1px solid rgba(var(--cl-accent-rgb),0.18);border-radius:12px;}.my-next-banner.live{background:rgba(239,68,68,0.07);border-color:rgba(239,68,68,0.25);}.mnb-teams{display:flex;align-items:center;gap:8px;}.mnb-logo{width:22px;height:22px;object-fit:contain;flex-shrink:0;}.mnb-name{font-size:13px;font-weight:700;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.mnb-name.away{text-align:right;}.mnb-vs{font-size:11px;font-weight:600;color:var(--cl-text-2);padding:0 2px;flex-shrink:0;}.mnb-score{font-size:17px;font-weight:900;color:var(--cl-live);font-variant-numeric:tabular-nums;padding:0 4px;flex-shrink:0;}.mnb-meta{display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap;}.mnb-round-tag{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-accent);background:rgba(var(--cl-accent-rgb),0.12);padding:2px 7px;border-radius:6px;}.mnb-date{font-size:11px;font-weight:600;color:var(--cl-text-2);}.mnb-countdown{font-size:12px;font-weight:800;color:var(--cl-accent);}.mnb-venue{font-size:10px;color:var(--cl-text-2);opacity:0.65;}.sched-day-label{display:flex;align-items:center;gap:6px;margin-bottom:6px;flex-wrap:wrap;}.sched-comp-logo{width:14px;height:14px;object-fit:contain;opacity:0.85;flex-shrink:0;}.sched-round-chip{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-accent);background:rgba(var(--cl-accent-rgb),0.12);padding:2px 7px;border-radius:6px;flex-shrink:0;}.mini-result{font-size:9px;font-weight:900;text-align:center;padding:2px 0 1px;line-height:1;}.mini-result.won{color:var(--cl-green);}.mini-result.lost{color:var(--cl-live);}.early-sched-btn{font-size:12px;opacity:0.45;cursor:pointer;padding:2px 5px;border-radius:4px;transition:opacity 0.15s;flex-shrink:0;}.early-sched-btn:hover{opacity:1;background:rgba(var(--cl-accent-rgb),0.15);}.mini-date{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--cl-text-2);text-align:center;padding:3px 0 0;opacity:0.8;}.chip-count{display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;padding:1px 5px;background:rgba(0,0,0,0.18);border-radius:10px;margin-left:4px;}.sched-chip.active .chip-count{background:rgba(255,255,255,0.30);}`]}}customElements.get("soccer-live-bracket")||customElements.define("soccer-live-bracket",gt);class mt extends i.WF{static get properties(){return{hass:{},_config:{},_selectedGroup:{type:String}}}constructor(){super(),this._hlScrolled=0}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this._selectedGroup=e.default_group||null,this._hlScrolled=0,A(this,e)}updated(){if(!this._hlScrolled&&this._config?.highlight_team){const e=this.shadowRoot?.querySelector("tr.hl");e&&(e.scrollIntoView({behavior:"smooth",block:"nearest"}),this._hlScrolled=1)}}getCardSize(){return 3}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-mini-standings-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_standings_",max_rows:5}}_selectGroup(e){this._selectedGroup=e,this.requestUpdate()}static get styles(){return[z,Ue,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:20px;overflow:hidden;}.top-bar{position:relative;padding:20px 18px;background:linear-gradient(135deg,rgba(var(--cl-accent-rgb),0.15),rgba(var(--cl-accent-2-rgb),0.10) 60%,transparent);border-bottom:1px solid var(--cl-divider);overflow:hidden;}.top-bar::before{content:'⚽';position:absolute;right:-10px;top:-10px;font-size:90px;opacity:0.06;transform:rotate(15deg);}.top-bar h2{margin:0;font-size:20px;font-weight:900;letter-spacing:-0.03em;background:linear-gradient(135deg,var(--cl-text),var(--cl-accent));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}.top-bar .sub{color:var(--cl-text-2);font-size:12px;margin-top:4px;font-weight:500;}.card-content{padding:12px;}.groups{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;}.group-btn{font-size:10px;font-weight:700;padding:3px 8px;border-radius:99px;cursor:pointer;border:1px solid var(--cl-divider);background:var(--cl-surface);color:var(--cl-text-2);white-space:nowrap;}.group-btn.active{background:var(--cl-accent);border-color:var(--cl-accent);color:#fff;}table{width:100%;border-collapse:collapse;font-size:12px;}th{color:var(--cl-text-2);font-weight:600;padding:2px 4px;text-align:center;font-size:11px;}th.left{text-align:left;}td{padding:5px 4px;text-align:center;color:var(--cl-text);border-top:1px solid var(--cl-divider);}td.left{text-align:left;}.team-row{display:flex;align-items:center;gap:6px;}.team-logo{width:16px;height:16px;object-fit:contain;}.team-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:110px;}.hl td{background:rgba(var(--cl-accent-rgb),0.2) !important;}.pos{width:22px;font-weight:700;color:var(--cl-text-2);}.pts{font-weight:700;color:var(--cl-accent);}.empty{padding:16px;text-align:center;color:var(--cl-text-2);font-size:13px;}`]}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return R("⚠️",this._t("ui.entity_not_found"),`${this._t("ui.entity_not_found")}: ${this._config.entity}`,this._t("ui.check_entity_config"));const t=e.attributes.standings_groups||[];if(!t.length)return K(e.attributes,e=>this._t(e),()=>R("⚽",this._t("ui.no_standings_data"),this._t("ui.no_standings_hint"),""));const a=t.find(e=>e.name===this._selectedGroup)||t[0];let r=a&&a.standings||[];r=r.sort((e,t)=>{const a=parseInt(e.pts||e.points||0),i=parseInt(t.pts||t.points||0);if(a!==i)return i-a;const s=parseInt(e.W||e.wins||0),r=parseInt(t.W||t.wins||0);if(s!==r)return r-s;const o=parseInt(e.GD||e.goal_difference||0);return parseInt(t.GD||t.goal_difference||0)-o});const o=this._config.max_rows||r.length,n=(this._config.highlight_team||"").toLowerCase(),l=e.attributes.league_name||"",c=Se(l,(0,s.$c)(this.hass,this._config))||l,d=e.attributes.league_abbreviation&&"N/A"!==e.attributes.league_abbreviation?e.attributes.league_abbreviation:null,p=e.attributes.season||"",h=d&&l?p.replace(l,"").trim():p,u=[this._t("card.standings")];h&&"N/A"!==h&&u.push(h);const g=r.slice(0,o),m=t.length>1;return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        ${this._config.hide_header?"":i.qy`
          <div class="top-bar">
            <div class="league-title">
              <h2>${d||c||e.state}</h2>
              <div class="sub">${u.join(" · ")}</div>
            </div>
          </div>
        `}
        <div class="card-content">

        ${m?i.qy`
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
          ${g.map(e=>{const t=n&&e.team_name&&e.team_name.toLowerCase().includes(n),a=(parseInt(e.wins)||0)+(parseInt(e.draws)||0)+(parseInt(e.losses)||0),s=parseInt(e.goal_difference)||0,r=s>0?`+${s}`:`${s}`,o=e.zone_color||null;return i.qy`
              <tr class="${t?"hl":""}">
                <td class="pos" style="${o?`box-shadow: inset 3px 0 0 ${o};`:""}">${e.rank??""}</td>
                <td class="left">
                  <div class="team-row">
                    ${e.team_logo?i.qy`<img class="team-logo" src="${e.team_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
                    <span class="team-name">${e.team_name||""}</span>
                  </div>
                </td>
                <td>${a||0}</td>
                ${this._config.hide_stats?"":i.qy`<td>${e.wins??0}</td><td>${e.draws??0}</td><td>${e.losses??0}</td><td>${null!=e.goal_difference?r:0}</td>`}
                <td class="pts">${e.points??0}</td>
              </tr>
            `})}
        </table>
        </div>
      </ha-card>
    `}}customElements.get("soccer-live-mini-standings")||customElements.define("soccer-live-mini-standings",mt);const ft=e=>{const t=parseInt(e,10);return Number.isFinite(t)?t:0},_t={goals:"goals",assists:"assists",yellow_cards:"yellow_cards",red_cards:"red_cards"};class vt extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this._isLoading=1}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}updated(e){if(e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];e&&"unavailable"!==e.state&&(this._isLoading=0,Z.set(this._config.entity,e.attributes))}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}render(){if(A(this,this._config),!this.hass||!this._config)return H(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=Z.get(e);if(!t?.data?.scorers)return R("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else{if("Not available"===t.state)return U("📊",this._t("ui.endpoint_unsupported"),this._t("ui.endpoint_unsupported_hint"),"");a=t.attributes}else{const t=Z.get(e);if(!t?.data?.scorers)return R("⚠️",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}return this._isLoading&&!a?H(this._t("ui.loading")):this._renderCard(a||{})}_renderCard(e){const t=["assists","yellow_cards","red_cards"].includes(this._config.ranking)?this._config.ranking:"goals",a=this._config.max_items??10,r=1==this._config.hide_header,o=function(e,t="goals"){const a=function(e){return _t[e]||_t.goals}(t),i=(Array.isArray(e)?e:[]).map(e=>({...e,value:ft(e[a])}));return"goals"===t?i:(i.sort((e,t)=>t.value-e.value),i.map((e,t)=>({...e,rank:t+1})))}("assists"===t?e.assists||[]:e.scorers||[],t).slice(0,a);return o.length?i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
        ${r?"":X({logo:e.league_logo,title:Se(e.league_name,(0,s.$c)(this.hass,this._config))||this._t("assists"===t?"card.assists":"card.scorers"),badge:ee(`${o.length}`,"neutral"),fallbackIcon:"🥇"})}
        <div class="slc-list">
          ${o.map((e,t)=>i.qy`
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
    `:K(e,e=>this._t(e),()=>U("🥇",this._t("scorers.empty"),"",""))}static getConfigElement(){return document.createElement("soccer-live-scorers-editor")}static getStubConfig(){return{entity:"",max_items:10}}static get styles(){return[z,Ue,te,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);border-radius:20px;overflow:hidden;padding:0;}.slc-list{padding:4px 0;}.slc-row{display:flex;align-items:center;gap:10px;padding:8px 16px;font-size:13px;}.slc-row.even{background:rgba(255,255,255,0.02);}.slc-rank{min-width:20px;text-align:center;font-weight:700;color:var(--cl-text-2,#94a3b8);font-size:12px;}.slc-headshot{width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;background:var(--cl-surface,rgba(255,255,255,0.05));}.slc-headshot.placeholder{background:var(--cl-surface,rgba(255,255,255,0.05));}.slc-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;}.slc-name{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.slc-team{font-size:11px;color:var(--cl-text-2,#94a3b8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.slc-team-logo{width:22px;height:22px;object-fit:contain;flex-shrink:0;}.slc-goals{font-weight:800;font-size:16px;color:var(--cl-accent,#6366f1);min-width:28px;text-align:right;}`]}}customElements.get("soccer-live-scorers")||customElements.define("soccer-live-scorers",vt);class bt extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_cachedData:{}}}setConfig(e){if(!e.entities||!e.entities.length)throw new Error("At least one entity required");this._config=e,A(this,e),this._isLoading=1,this._loadingStarted=Date.now(),this._lastWeatherVenue=null}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}updated(e){if(e.has("hass")){const e=this._config?.entities||[];e.every(e=>{const t=this.hass?.states[e];return t&&"unavailable"!==t.state})&&(this._isLoading=0,e.forEach(e=>{const t=this.hass?.states[e];t&&Z.set(e,t.attributes)}))}}getCardSize(){return Math.max(2,(this._config.entities||[]).length+1)}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-multi-team-editor")}static getStubConfig(){return{entities:[]}}_getMatch(e){const t=e.attributes.matches||[];return t.find(e=>"in"===e.state)||t.find(e=>"pre"===e.state)||t.find(e=>"post"===e.state)||t[0]||null}static get styles(){return[z,Ue,B,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:12px;border-radius:20px;overflow:hidden;}.title{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-text-2);margin-bottom:10px;}.match-row{position:relative;z-index:1;display:flex;align-items:center;padding:8px 0;border-bottom:1px solid var(--divider-color,rgba(255,255,255,0.07));gap:8px;}.match-row:last-child{border-bottom:none;}.team-block{display:flex;align-items:center;gap:6px;flex:1;min-width:0;}.team-block.right{flex-direction:row-reverse;}.team-logo{width:20px;height:20px;object-fit:contain;flex-shrink:0;}.team-name{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--cl-text);}.score-block{text-align:center;min-width:60px;}.score{font-size:15px;font-weight:900;color:var(--cl-text);letter-spacing:2px;}.live-dot{display:inline-block;width:6px;height:6px;background:#e53935;border-radius:50%;margin-right:3px;animation:pulse 1s infinite;}.status{font-size:10px;color:var(--cl-text-2);}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}.no-match{font-size:11px;color:var(--cl-text-2);text-align:center;padding:4px;}.no-match.sync{font-weight:600;}.no-match.sync.error{color:var(--cl-live,#ef4444);}.empty{padding:16px;text-align:center;color:var(--cl-text-2);}`]}_renderMatch(e){let t=this.hass.states[e];if(!t){const a=Z.get(e);if(!a||!a.data.matches)return i.qy`<div class="match-row"><div class="no-match">${this._t("team.unknown_entity")}: ${e}</div></div>`;t={attributes:a.data,state:"cached"}}const a=this._getMatch(t);if(!a){const a=I(t.attributes?.sync_status);return a?i.qy`<div class="match-row"><div class="no-match sync ${a.kind}">${a.icon} ${this._t(a.title)}</div></div>`:i.qy`<div class="match-row"><div class="no-match">${this._t("team.no_match")} (${e})</div></div>`}const s="in"===a.state,r="post"===a.state,o=s||r,n=a.date||"";return i.qy`
      <div class="match-row">
        <div class="team-block">
          ${a.home_logo?i.qy`<img class="team-logo" src="${a.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="team-name">${a.home_team||"?"}</span>
        </div>

        <div class="score-block">
          ${s?i.qy`<div><span class="live-dot"></span><span class="status">${a.clock||this._t("status.live")}</span></div>`:""}
          ${o?i.qy`<div class="score">${S(a.home_score)} - ${S(a.away_score)}</div>`:i.qy`<div class="status">${n||this._t("match.vs")}</div>`}
          ${r?i.qy`<div class="status">${this._t("status.full_time")}</div>`:""}
        </div>

        <div class="team-block right">
          <span class="team-name">${a.away_team||"?"}</span>
          ${a.away_logo?i.qy`<img class="team-logo" src="${a.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
        </div>
      </div>
    `}render(){if(A(this,this._config),!this.hass||!this._config)return H(this._t("ui.loading"));const e=this._config.entities||[];if(!e.length)return R("⚽",this._t("ui.no_entities_configured"),"",this._t("ui.add_team_entity"));if(this._isLoading&&!e.some(e=>{const t=Z.get(e);return t&&t.data.matches}))return Date.now()-this._loadingStarted>1e4?R("⏱",this._t("ui.loading_timeout"),this._t("ui.entity_not_responding"),this._t("ui.check_integration")):H(this._t("ui.loading"));const t=e.filter(e=>!this.hass.states[e]),a=e.some(e=>"unavailable"===this.hass.states[e]?.state);return t.length>0&&!a&&!t.some(e=>{const t=Z.get(e);return t&&t.data.matches})?R("⚠️",this._t("ui.entity_not_found"),`${this._t("ui.entity_not_found")}: ${t[0]}`,this._t("ui.check_entity_config")):i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
        ${this._config.hide_header?"":i.qy`<div class="title">${this._config.title||this._t("card.my_teams")}</div>`}
        ${e.map(e=>this._renderMatch(e))}
        </div>
      </ha-card>
    `}}customElements.get("soccer-live-multi-team")||customElements.define("soccer-live-multi-team",bt);class yt extends i.WF{static get properties(){return{hass:{},_config:{},_selectedComp:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this._selectedComp=e.default_comp||null,A(this,e)}getCardSize(){return 5}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-team-competitions-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_all_mixed_"}}_selectComp(e){this._selectedComp=e,this.requestUpdate()}_validText(e){if(null==e)return"";const t=String(e).trim();return/^(?:n\/?a|unknown|none|null|undefined|-)$/i.test(t)?"":t}_sortByDateAsc(e,t){return(lt(e)??1/0)-(lt(t)??1/0)}_groupByCompetition(e){const t={};for(const a of e){const e=this._validText(a.league_name)||this._validText(a.competition_name)||"Other";t[e]||(t[e]={key:e,name:Se(e,(0,s.$c)(this.hass,this._config)),logo:ke({competitionName:e,competitionLogo:this._validText(a.league_logo)||this._validText(a.competition_logo),fallbackLogo:null,isFriendly:a.is_friendly}),all:[]});const i=ct(a);t[e].all.some(e=>ct(e)===i)||t[e].all.push(a)}return Object.values(t).map(e=>{const t=e.all.find(e=>"in"===e.state),a=e.all.filter(e=>"pre"===e.state).sort((e,t)=>this._sortByDateAsc(e,t))[0],i=e.all.filter(e=>"post"===e.state).sort((e,t)=>this._sortByDateAsc(e,t)),s=[...i].reverse().find(e=>null!==lt(e))||i[i.length-1],r=t||a||s||e.all[0],o=e.all.filter(e=>"pre"===e.state).sort((e,t)=>this._sortByDateAsc(e,t));return{...e,featured:r,previous:i,last:s,upcoming:o}}).filter(e=>e.featured).sort((e,t)=>{const a=e=>"in"===e.featured.state?0:"pre"===e.featured.state?1:2;return a(e)-a(t)})}_computeForm(e,t){if(!t)return[];const a=t.toLowerCase();return e.filter(e=>"post"===e.state).sort((e,t)=>this._sortByDateAsc(e,t)).slice(-5).map(e=>{const t=e.home_team?.toLowerCase().includes(a)||e.home_team?.toLowerCase()===a,i=Number.parseInt(e.home_score,10),s=Number.parseInt(e.away_score,10);return Number.isFinite(i)&&Number.isFinite(s)?t?i>s?"W":i<s?"L":"D":s>i?"W":s<i?"L":"D":null}).filter(Boolean)}_getStanding(e,t){if(!e||!t)return"";const a=t.toLowerCase(),i=e.home_team?.toLowerCase().includes(a);return me(e,i?"home":"away",e=>this._t(e))}_renderForm(e){if(!e.length)return"";const t={W:"form-w",D:"form-d",L:"form-l"};return i.qy`<div class="form-row">${e.map(e=>i.qy`<span class="form-dot ${t[e]}">${e}</span>`)}</div>`}_renderMatch(e,t){if(!e)return"";const a="in"===e.state,s="post"===e.state;return i.qy`
      <div class="match-row">
        ${t?i.qy`<span class="match-label">${t}</span>`:""}
        <div class="match-teams">
          <div class="team-side">
            ${e.home_logo?i.qy`<img class="tm-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="tm-name">${e.home_team||"?"}</span>
          </div>
          <div class="match-score">
            ${a?i.qy`<span class="live-badge"><span class="live-dot"></span>${this._validText(e.clock)||this._t("status.live")}</span>`:""}
            ${a||s?i.qy`<span class="score-text">${S(e.home_score)}–${S(e.away_score)}</span>`:i.qy`<span class="date-text">${e.date||this._t("match.vs")}</span>`}
            ${s?i.qy`<span class="ft-badge">${this._t("status.full_time")}</span>`:""}
          </div>
          <div class="team-side right">
            <span class="tm-name">${e.away_team||"?"}</span>
            ${e.away_logo?i.qy`<img class="tm-logo" src="${e.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          </div>
        </div>
      </div>
    `}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=Z.get(e);if(!t?.data?.matches)return R("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else a=t.attributes,Z.set(e,a);else{const t=Z.get(e);if(!t?.data?.matches)return R("⚠️",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}const s=a.matches||[];if(!s.length)return K(a,e=>this._t(e),()=>U("🗂️",this._t("ui.no_competition_data"),this._t("ui.no_competition_hint"),""));const r=this._groupByCompetition(s),o=r.find(e=>e.key===this._selectedComp)||r[0],n=this._config.team_name||a.team_name||"",l=a.team_logo&&"N/A"!==a.team_logo?a.team_logo:null,c=o.featured,d=this._computeForm(o.all,n),p=this._getStanding(o.last||c,n),h=o.last,u=o.upcoming[0];return i.qy`
      <ha-card>
        ${Je(c.home_logo,c.away_logo)}
        <div class="card-content">
        ${this._config.hide_header?"":X({logo:l,title:n||"Team",badge:r.length>1?ee(`${r.length}`,"neutral"):null,fallbackIcon:"🗂️"})}

        ${r.length>1?i.qy`
          <div class="comp-tabs">
            ${r.map(e=>i.qy`
              <span class="comp-tab ${e.key===o.key?"active":""}" @click=${()=>this._selectComp(e.key)}>
                ${e.logo?i.qy`<img class="tab-logo" src="${e.logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
                ${"Other"===e.name?this._t("generic.other"):e.name}
              </span>
            `)}
          </div>
        `:""}

        <div class="comp-body">
          ${"Other"!==o.name||o.logo||p?i.qy`
            <div class="comp-header">
              ${o.logo?i.qy`<img class="comp-icon" src="${o.logo}" alt="">`:""}
              ${"Other"!==o.name?i.qy`<span class="comp-name">${o.name}</span>`:""}
              ${p?i.qy`<span class="standing-pill">${p}</span>`:""}
            </div>
          `:""}

          ${"in"===c.state||"post"===c.state?this._renderMatch(c,null):this._renderMatch(c,this._t("team.next_match"))}

          ${d.length?this._renderForm(d):""}

          ${"in"!==c.state&&"pre"!==c.state||!h?"":i.qy`
            <div class="divider"></div>
            ${this._renderMatch(h,this._t("status.finished"))}
          `}

          ${"post"!==c.state&&"in"!==c.state||!u?"":i.qy`
            <div class="divider"></div>
            ${this._renderMatch(u,this._t("team.next_match"))}
          `}
        </div>
        </div>
      </ha-card>
    `}static get styles(){return[z,Ue,te,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:20px;overflow:hidden;}.comp-tabs{display:flex;gap:4px;padding:8px 12px;overflow-x:auto;border-bottom:1px solid var(--cl-divider);scrollbar-width:none;}.comp-tabs::-webkit-scrollbar{display:none;}.comp-tab{display:flex;align-items:center;gap:5px;font-size:11px;font-weight:700;padding:5px 10px;border-radius:99px;cursor:pointer;white-space:nowrap;flex-shrink:0;border:1px solid var(--cl-divider);background:var(--cl-surface);color:var(--cl-text-2);transition:background 0.15s;}.comp-tab.active{background:var(--cl-accent);border-color:var(--cl-accent);color:#fff;}.tab-logo{width:14px;height:14px;object-fit:contain;}.comp-body{padding:12px 16px;display:flex;flex-direction:column;gap:10px;}.comp-header{display:flex;align-items:center;gap:8px;}.comp-icon{width:20px;height:20px;object-fit:contain;}.comp-name{font-size:12px;font-weight:700;color:var(--cl-text-2);flex:1;}.standing-pill{font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;background:var(--cl-surface);color:var(--cl-text-2);}.match-row{display:flex;flex-direction:column;gap:4px;}.match-label{font-size:10px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.05em;}.match-teams{display:flex;align-items:center;gap:8px;}.team-side{display:flex;align-items:center;gap:5px;flex:1;min-width:0;}.team-side.right{flex-direction:row-reverse;}.tm-logo{width:20px;height:20px;object-fit:contain;flex-shrink:0;}.tm-name{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.match-score{display:flex;flex-direction:column;align-items:center;min-width:64px;flex-shrink:0;gap:1px;}.score-text{font-size:16px;font-weight:900;color:var(--cl-text);letter-spacing:1px;}.date-text{font-size:11px;color:var(--cl-text-2);text-align:center;}.ft-badge{font-size:9px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;}.live-badge{font-size:9px;font-weight:700;color:var(--cl-live,#ef4444);display:flex;align-items:center;gap:3px;}.live-dot{width:5px;height:5px;background:var(--cl-live,#ef4444);border-radius:50%;animation:pulse 1s infinite;}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}.form-row{display:flex;gap:4px;justify-content:center;}.form-dot{width:22px;height:22px;border-radius:50%;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;}.form-w{background:var(--cl-win,#22c55e);color:#fff;}.form-d{background:var(--cl-draw,#94a3b8);color:#fff;}.form-l{background:var(--cl-loss,#ef4444);color:#fff;}.divider{height:1px;background:var(--cl-divider);margin:0 -4px;}`]}}customElements.get("soccer-live-team-competitions")||customElements.define("soccer-live-team-competitions",yt);const xt={possessionPct:"team.possession",totalShots:"team.shots",shotsOnTarget:"team.on_target",foulsCommitted:"team.fouls",goalAssists:"stat.assists",totalGoals:"stat.goals",wonCorners:"stat.corners",appearances:"stat.appearances",shotAssists:"stat.shot_assists",yellowCards:"stat.yellow_cards",redCards:"stat.red_cards",offsides:"stat.offsides",saves:"stat.saves",blockedShots:"stat.blocked_shots",shotsOffTarget:"stat.shots_off_target",expectedGoals:"stat.expected_goals",expectedGoalsOpenPlay:"stat.expected_goals_open_play",expectedGoalsSetPlay:"stat.expected_goals_set_play",expectedGoalsNonPenalty:"stat.expected_goals_non_penalty",expectedGoalsOnTarget:"stat.expected_goals_on_target",touchesInOppositionBox:"stat.touches_opposition_box",bigChances:"stat.big_chances",bigChancesMissed:"stat.big_chances_missed",accuratePasses:"stat.accurate_passes",totalPasses:"stat.total_passes",passesCompleted:"stat.passes_completed",tacklesTotal:"stat.tackles",interceptions:"stat.interceptions",aerialDuelsWon:"stat.aerial_duels_won",freeKickGoals:"stat.free_kick_goals",penaltyGoals:"stat.penalty_goals",accurateCrosses:"stat.accurate_crosses",clearances:"stat.clearances",successfulDribbles:"stat.successful_dribbles",duelsWon:"stat.duels_won",groundDuelsWon:"stat.ground_duels_won",accurateLongBalls:"stat.accurate_long_balls",oppositionHalfPasses:"stat.opposition_half_passes",ownHalfPasses:"stat.own_half_passes",throws:"stat.throws",blocks:"stat.blocks",shotsInsideBox:"stat.shots_inside_box",shotsOutsideBox:"stat.shots_outside_box",hitWoodwork:"stat.hit_woodwork"},wt=Object.fromEntries(Object.keys(xt).map(e=>[e.replace(/[^a-z0-9]/gi,"").toLowerCase(),e]));Object.assign(wt,{ballpossesion:"possessionPct",touchesoppbox:"touchesInOppositionBox",touchesoppositionbox:"touchesInOppositionBox",bigchance:"bigChances",bigchancemissed:"bigChancesMissed",bigchancemissedtitle:"bigChancesMissed",accuratepass:"accuratePasses",accuratepasses:"accuratePasses",yellowcard:"yellowCards",shotsontarget:"shotsOnTarget",shotsofftarget:"shotsOffTarget",corners:"wonCorners",offsides:"offsides",accuratecrosses:"accurateCrosses",aerialswon:"aerialDuelsWon",clearances:"clearances",dribblessucceeded:"successfulDribbles",duelwon:"duelsWon",fouls:"foulsCommitted",groundduelswon:"groundDuelsWon",interceptions:"interceptions",keepersaves:"saves",longballsaccurate:"accurateLongBalls",tackles:"tacklesTotal",matchstatsheaderstackles:"tacklesTotal",passes:"totalPasses",ballpossession:"possessionPct",shotsongoal:"shotsOnTarget",shotsoffgoal:"shotsOffTarget",cornerkicks:"wonCorners",goalkeepersaves:"saves",passesaccurate:"accuratePasses",oppositionhalfpasses:"oppositionHalfPasses",ownhalfpasses:"ownHalfPasses",playerthrows:"throws",redcards:"redCards",shotblocks:"blocks",shotsinsidebox:"shotsInsideBox",shotsoutsidebox:"shotsOutsideBox",shotswoodwork:"hitWoodwork"});const $t=e=>{const t=String(e||"");return wt[t.replace(/[^a-z0-9]/gi,"").toLowerCase()]||t},kt=(e,t={})=>{if(!e||"object"!=typeof e)return[];const a=new Map;if(t&&"object"==typeof t)for(const[e,i]of Object.entries(t)){const t=$t(e);a.has(t)||a.set(t,i)}const i=new Set,s=[];for(const[t,r]of Object.entries(e)){const e=$t(t);"Unknown"===e||"appearances"===e||i.has(e)||(i.add(e),s.push({key:e,home:r,away:a.has(e)?a.get(e):"—"}))}return s},St=(e,t)=>{const a=String(e||""),i=$t(a),s=xt[i];if(s){const e=t(s);if(e&&e!==s)return e}return a.replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,e=>e.toUpperCase()).trim()};var Ct=a(136);const qt=e=>null==e||"string"==typeof e&&["","n/a","unknown","none","null","-"].includes(e.trim().toLowerCase())?0:Array.isArray(e)?e.length>0:"object"==typeof e?Object.keys(e).length>0:1,zt={kickoff:15,competition:10,venue:10,broadcasts:5,weather:5,head_to_head:10,prediction:10,odds:10,absences:10,lineup:15},At=e=>e>=80?"ready":e>=55?"good":e>=30?"building":"early";function Tt(e,t,{compact:a=0}={}){if(!e||"pre"!==e.state)return"";const s=function(e){const t=(e=>({kickoff:qt(e?.date_iso||e?.date),competition:qt(e?.competition_name||e?.league_name),venue:qt(e?.venue),broadcasts:Boolean(e?.broadcasts?.length),weather:qt(e?.weather)||qt(e?.temperature)||qt(e?.venue_lat),head_to_head:Boolean(e?.head_to_head?.length),prediction:qt(e?.prediction),odds:qt(e?.odds),absences:Boolean(e?.injuries_home?.length||e?.injuries_away?.length||e?.absences?.length),lineup:Boolean(e?.lineup_home?.length||e?.lineup_away?.length||e?.expected_lineup_home?.length||e?.expected_lineup_away?.length)}))(e);if(null!=e?.match_readiness?.score){const a=e.match_readiness,i=new Set(Array.isArray(a.available)?a.available:[]),s=Object.keys(t).filter(e=>t[e]&&!i.has(e));if(!s.length)return a;const r=[...i,...s],o=(Array.isArray(a.missing)?a.missing:[]).filter(e=>!s.includes(e)),n=Math.min(100,Number(a.score)+s.reduce((e,t)=>e+(zt[t]||0),0));return{...a,score:n,level:At(n),available:r,missing:o}}const a=Object.entries(t).reduce((e,[t,a])=>e+(a?zt[t]:0),0);return{score:a,level:At(a),available:Object.keys(t).filter(e=>t[e]),missing:Object.keys(t).filter(e=>!t[e])}}(e);return i.qy`
    <section class="readiness ${a?"compact":""}">
      <div class="readiness-head">
        <span>${t("readiness.title")}</span>
        <b>${s.score}% · ${t(`readiness.${s.level}`)}</b>
      </div>
      <div class="readiness-track"><i style=${`width:${s.score}%`}></i></div>
      ${!a&&s.available.length?i.qy`
        <div class="readiness-chips">
          ${s.available.map(e=>i.qy`<span>${t(`readiness.item_${e}`)}</span>`)}
        </div>
      `:""}
    </section>
  `}const Et=i.AH`.readiness{margin:10px 0;padding:10px;border:1px solid var(--cl-divider);border-radius:12px;background:var(--cl-surface)}.readiness-head{display:flex;justify-content:space-between;gap:8px;color:var(--cl-text-2);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.05em}.readiness-head b{color:var(--cl-accent);text-align:right}.readiness-track{height:5px;margin-top:8px;overflow:hidden;border-radius:99px;background:var(--cl-chip-bg)}.readiness-track i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--cl-accent),var(--cl-accent-2));transition:width .25s ease}.readiness-chips{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}.readiness-chips span{padding:3px 6px;border-radius:99px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:8px}.readiness.compact{margin:0;padding:7px 8px}.readiness.compact .readiness-track{margin-top:5px}`,Pt={error:"!",warning:"⚠",info:"ⓘ"};function jt(e,{t,compact:a=0}={}){return Array.isArray(e)&&e.length?i.qy`
    <section class="data-alerts ${a?"compact":""}" role="status" aria-live="polite">
      ${e.map(e=>{const a=["error","warning","info"].includes(e.severity)?e.severity:"warning";return i.qy`
          <div class="data-alert ${a}">
            <b aria-hidden="true">${Pt[a]}</b>
            <span>${t?.(`alert.${e.code}`,e)||e.code}</span>
          </div>
        `})}
    </section>
  `:""}const Mt=i.AH`.data-alerts{display:grid;gap:6px;margin:10px 12px;}.data-alert{display:flex;align-items:flex-start;gap:8px;padding:8px 10px;border:1px solid color-mix(in srgb,currentColor 28%,transparent);border-radius:10px;background:color-mix(in srgb,currentColor 9%,transparent);color:var(--cl-warning,#f59e0b);font-size:11px;line-height:1.35;}.data-alert.error{color:var(--cl-live,#ef4444);}.data-alert.info{color:var(--cl-accent,#6366f1);}.data-alert b{flex:0 0 14px;text-align:center;}.data-alerts.compact{margin:10px 0 0;}`;function Nt(e){if(e?.season&&"unknown"!==e.season)return String(e.season);const t=String(e?.date_iso||e?.date||"").match(/((?:19|20)\d{2})-(\d{2})/);if(!t)return"unknown";const a=Number(t[1]),i=Number(t[2])>=7?a:a-1;return`${i}/${String(i+1).slice(-2)}`}function Dt(e){if(!e||"object"!=typeof e)return null;let t=e.home_score??e.thuis_score??e.score_home,a=e.away_score??e.uit_score??e.score_away;const i=String(e.uitslag||e.score||"").match(/(\d+)\s*[-–:]\s*(\d+)/);i&&(t??=Number(i[1]),a??=Number(i[2]));const s=String(e.date_iso??e.datetime??e.date??e.datum??""),r=s.match(/^(\d{2})-(\d{2})-((?:19|20)\d{2})(.*)$/);return{...e,event_id:e.event_id??e.id??e.wedstrijd_id,date_iso:r?`${r[3]}-${r[2]}-${r[1]}${r[4]}`:s,date:e.date??e.datum,home_team:e.home_team??e.home??e.thuis??e.team_home,away_team:e.away_team??e.away??e.uit??e.team_away,home_score:t,away_score:a,competition_name:e.competition_name??e.league_name??e.competitie??e.soort}}function Lt(e){const t=e?.attributes||{},a=t.match_archive||t.matches||t.uitslagen||[];return Array.isArray(a)?a.map(Dt).filter(Boolean):[]}function Ft(e){return String(e||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\b(fc|cf|sc|afc|rotterdam)\b/g,"").replace(/[^a-z0-9]/g,"")}function Vt(e,t){const a=Ft(e),i=Ft(t);return Boolean(a&&i&&(a===i||a.includes(i)||i.includes(a)))}function Gt(e,t){const a=String(t||"").toLowerCase(),i=String(e?.home_team||"").toLowerCase(),s=String(e?.away_team||"").toLowerCase(),r=(e,t)=>e===t||e.length>=4&&t.length>=4&&(e.includes(t)||t.includes(e)),o=a&&r(s,a);if(a&&!r(i,a)&&!o)return null;const n=Number(o?e.away_score:e.home_score),l=Number(o?e.home_score:e.away_score);return Number.isFinite(n)&&Number.isFinite(l)?{code:n>l?"w":n<l?"l":"d",own:n,other:l,venue:o?"away":"home",opponent:o?e.home_team:e.away_team}:null}function Ot(e){const t=String(e?.date_iso||e?.date||"").match(/((?:19|20)\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}`:""}function Bt(e,t){const a={matches:0,won:0,drawn:0,lost:0,goals_for:0,goals_against:0,clean_sheets:0,longest_unbeaten:0,longest_winning:0};let i=0,s=0;for(const r of[...e].reverse()){const e=Gt(r,t);e&&(a.matches+=1,a.goals_for+=e.own,a.goals_against+=e.other,0===e.other&&(a.clean_sheets+=1),"w"===e.code?(a.won+=1,s+=1,i+=1):"d"===e.code?(a.drawn+=1,s=0,i+=1):(a.lost+=1,s=0,i=0),a.longest_unbeaten=Math.max(a.longest_unbeaten,i),a.longest_winning=Math.max(a.longest_winning,s))}return a.goal_difference=a.goals_for-a.goals_against,a.win_percentage=a.matches?Math.round(a.won/a.matches*100):0,a}const Ht=["overview","stats","timeline","lineup","h2h"],It={overview:"tab.overview",stats:"tab.stats",timeline:"tab.timeline",lineup:"tab.lineup",lineups:"tab.lineup",h2h:"tab.h2h"};class Rt extends i.WF{static get properties(){return{hass:{},_config:{},_activeTab:{type:String},_tlFilter:{type:String},_isLoading:{type:Boolean},_weatherBadge:{type:Object},_selectedEventId:{type:String},_detailsLoading:{type:Boolean}}}constructor(){super(),this._activeTab="overview",this._tlFilter="all",this._isLoading=1,this._weatherBadge=null,this._lastWeatherVenue=null,this._lastMatchState=null,this._selectedEventId=null,this._detailsLoading=0,this._detailRequests=new Set,this._manualTab=0}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this._isLoading=1,this._manualTab=0;try{const t=sessionStorage.getItem(`soccer-mc-tab:${e.entity}`);t&&Ht.includes(t)&&(this._activeTab=t)}catch(e){}}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}_selectMatch(e){return(e?.matches||[]).find(e=>String(e.event_id)===String(this._selectedEventId))||(e?.next_match?e.next_match:dt(e?.matches)[0])}_orderedMatches(e){return dt(e?.matches)}async _chooseMatch(e,t){this._selectedEventId=String(e);const a=(t?.matches||[]).find(t=>String(t.event_id)===String(e));await this._loadMatchDetails(a,t)}async _loadMatchDetails(e,t){const a=String(e?.event_id||"");if(a&&t?.detail_service&&!Ee(e)&&!this._detailRequests.has(a)){this._detailRequests.add(a),this._detailsLoading=1;try{await Pe(this.hass,t,e)||this._detailRequests.delete(a)}catch(e){this._detailRequests.delete(a)}finally{this._detailsLoading=0}}}updated(e){if(e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];if(e&&"unavailable"!==e.state){this._isLoading=0,Z.set(this._config.entity,e.attributes);const t=this._selectMatch(e.attributes);t?.venue&&t.venue!==this._lastWeatherVenue&&this._loadWeather(t.venue,t.venue_lat,t.venue_lon,t.date_iso),this._pinnedTab?this._activeTab=this._pinnedTab:"hub"!==this._config.card_type&&1!=this._config.phase_aware||this._manualTab?"pre"===this._lastMatchState&&"in"===t?.state&&"overview"===this._activeTab&&(this._activeTab="timeline"):this._activeTab="in"===t?.state?"timeline":"overview",this._lastMatchState=t?.state??this._lastMatchState}}}async _loadWeather(e,t=null,a=null,i=null){this._lastWeatherVenue=e;try{this._weatherBadge=await O(e,this.hass,this._config,t,a,i)}catch(e){this._weatherBadge=null}}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}get _pinnedTab(){const e=this._config?.card_type;return"timeline"===e||"lineup"===e?e:null}_selectTab(e,t=1){if(this._activeTab=e,t&&(this._manualTab=1),this._tlFilter="all","overview"!==e){const e=this.hass?.states?.[this._config.entity]?.attributes;this._loadMatchDetails(this._selectMatch(e),e)}try{sessionStorage.setItem(`soccer-mc-tab:${this._config.entity}`,e)}catch(e){}}_onTabKeydown(e,t){const a=Ht.indexOf(t),i="ArrowRight"===e.key?1:"ArrowLeft"===e.key?-1:0;if(!i&&"Home"!==e.key&&"End"!==e.key)return;e.preventDefault();const s="Home"===e.key?0:"End"===e.key?Ht.length-1:(a+i+Ht.length)%Ht.length;this._selectTab(Ht[s],1),this.updateComplete.then(()=>this.renderRoot.querySelector(`#mc-tab-${Ht[s]}`)?.focus())}render(){if(A(this,this._config),!this.hass||!this._config)return H(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=Z.get(e);if(!t?.data?.matches)return R("",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else a=t.attributes;else{const t=Z.get(e);if(!t?.data?.matches)return R("",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}if(this._isLoading&&!a)return H(this._t("ui.loading"));const i=this._selectMatch(a);if(!i)return K(a,e=>this._t(e),()=>U("",this._t("ui.no_match_data"),this._t("ui.no_match_hint"),""));const s=(a.league_info||[])[0]||{},r=i.league_name||s.name||s.abbreviation||a.league_name||"",o={...i,league_logo:ke({competitionName:r,competitionLogo:i.league_logo||s.logo_href||a.league_logo,fallbackLogo:null,isFriendly:i.is_friendly}),league_name:r};return this._renderCard(o,a)}_renderCard(e,t){const a=this._pinnedTab,r=a||this._activeTab,o=Ht.map(e=>({id:e,label:this._t("tab."+e)})),n=this._orderedMatches(t);return i.qy`
      <ha-card>
        ${n.length>1?i.qy`<div class="mc-picker">
          <select @change=${e=>this._chooseMatch(e.target.value,t)}>
            ${n.map(t=>i.qy`<option value=${t.event_id} ?selected=${String(t.event_id)===String(e.event_id)}>${(0,s.iS)(t.date,(0,s.$c)(this.hass,this._config))||t.date} · ${t.home_team} – ${t.away_team}</option>`)}
          </select>
          ${this._detailsLoading?i.qy`<span>${this._t("ui.loading")}</span>`:""}
        </div>`:""}
        <div class="mc-hero-section">
          ${Je(e.home_logo,e.away_logo)}
          <div class="card-content">
            ${1!=this._config.hide_header?this._renderHero(e):""}
          </div>
        </div>
        ${a?"":i.qy`
        <div class="tab-bar" role="tablist" aria-label=${this._t("card.match_center")}>
          ${o.map(e=>i.qy`
            <button class="tab ${r===e.id?"active":""}"
              id="mc-tab-${e.id}" role="tab"
              aria-selected=${r===e.id?"true":"false"}
              aria-controls="mc-panel-${e.id}"
              tabindex=${r===e.id?"0":"-1"}
              @keydown=${t=>this._onTabKeydown(t,e.id)}
              @click=${()=>this._selectTab(e.id)}>
              ${e.label}
            </button>
          `)}
        </div>`}
        <div class="tab-content${"lineup"===r?" lineup":""}"
          id="mc-panel-${r}" role="tabpanel"
          aria-labelledby="mc-tab-${r}">
          ${"overview"===r?this._renderOverview(e,t):""}
          ${"stats"===r?this._renderStats(e):""}
          ${"timeline"===r?this._renderTimeline(e):""}
          ${"lineup"===r?this._renderLineup(e):""}
          ${"h2h"===r?this._renderH2H(e,t):""}
        </div>
      </ha-card>
    `}_renderHero(e){const t="in"===e.state,a="post"===e.state,r=t?ee(`${e.clock?e.clock+"' ":""}${this._t("status.live")}`,"live"):a?ee(this._t("status.full_time"),"ft"):ee((0,s.IU)(e.date,(0,s.$c)(this.hass,this._config))||e.date||"","date"),o=Se(e.competition_name||e.league_name||"",(0,s.$c)(this.hass,this._config)),n=e.competition_logo||e.league_logo||null;return i.qy`
      ${X({logo:n,title:o,badge:r})}

      <div class="scoreboard" aria-live="polite" aria-atomic="true">
        <div class="mc-team">
          ${e.home_logo?i.qy`<img class="mc-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="mc-name">${e.home_team||"?"}</span>
        </div>
        <div class="mc-score">
          ${t||a?i.qy`<span class="mc-num">${S(e.home_score)} – ${S(e.away_score)}</span>`:i.qy`<span class="mc-vs">${this._t("match.vs")}</span>`}
        </div>
        <div class="mc-team away">
          <span class="mc-name">${e.away_team||"?"}</span>
          ${e.away_logo?i.qy`<img class="mc-logo" src="${e.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
        </div>
      </div>
    `}_renderOverview(e,t){const a=e=>e&&"N/A"!==e?e:"",r=a(e.home_record_summary||e.home_record),o=a(e.away_record_summary||e.away_record),n=me(e,"home",e=>this._t(e)),l=me(e,"away",e=>this._t(e)),c=a(e.home_form||e.last_five_home),d=a(e.away_form||e.last_five_away),p=function(e,t,a){if(!e?.states)return null;if(t?.standings_entity&&e.states[t.standings_entity])return e.states[t.standings_entity].attributes;const i=String(a?.competition_name||a?.league_name||"").toLowerCase();return Object.values(e.states).find(e=>{const t=e?.attributes||{};if(!t.standings_groups)return 0;const a=String(t.league_name||t.competition_name||"").toLowerCase();return i&&a&&(i.includes(a)||a.includes(i))})?.attributes||null}(this.hass,this._config,e),h=function(e,t,a=""){const i=e?.standings_groups?.[0]?.standings,s=String(t?.state||"").toLowerCase();if(!i?.length||!t||!["in","live"].includes(s))return null;const r=String(t.home_team||"").toLowerCase(),o=String(t.away_team||"").toLowerCase(),n=i.map(e=>({...e,points:Ie(e.points),rank:Ie(e.rank,999)})),l=e=>n.find(t=>{const a=String(t.team_name||"").toLowerCase();return a&&e&&(a.includes(e)||e.includes(a))}),c=l(r),d=l(o);if(!c||!d)return null;const p=Ie(t.home_score),h=Ie(t.away_score);p>h?c.points+=3:p<h?d.points+=3:(c.points+=1,d.points+=1),n.sort((e,t)=>t.points-e.points||Ie(t.goal_difference)-Ie(e.goal_difference)),n.forEach((e,t)=>{e.virtual_rank=t+1});const u=String(a||"").toLowerCase(),g=l(u)||(r.includes(u)?c:d);return g?{previous_rank:g.rank,rank:g.virtual_rank,change:g.rank-g.virtual_rank,points:g.points,team:g.team_name}:null}(p,e,this._config.team_name||t.team_name||"");return i.qy`
      ${jt(function(e,t){if(!Array.isArray(e))return[];const a=String(t?.event_id||""),i=String(t?.canonical_id||""),s=Boolean(t?.lineup_home?.length&&t?.lineup_away?.length);return e.filter(e=>e&&"object"==typeof e?"live_lineup_missing"===e.code&&s?0:e.event_id||e.canonical_id?a&&String(e.event_id)===a||i&&String(e.canonical_id)===i:1:0)}(t?.data_alerts,e),{t:(e,t)=>this._t(e,t)})}
      ${Tt(e,e=>this._t(e))}
      ${ot(e,{t:(e,t)=>this._t(e,t),provider:this.hass?.states?.[this._config.entity]?.attributes?.provider,updatedAt:this.hass?.states?.[this._config.entity]?.attributes?.last_successful_update})}
      <div class="ov-section">
        ${c||d?i.qy`
          <div class="ov-row">
            ${u=c,u?i.qy`<div class="ov-form-dots">${u.split("").slice(-5).map(e=>{const t="W"===e?"w":"L"===e||"V"===e?"l":"d";return i.qy`<span class="ov-fd ${t}"></span>`})}</div>`:i.qy`<div class="ov-form-dots"></div>`}
            <span class="ov-label">${this._t("team.form")||"Form"}</span>
            <div class="ov-form-dots right">${d?d.split("").slice(-5).map(e=>{const t="W"===e?"w":"L"===e||"V"===e?"l":"d";return i.qy`<span class="ov-fd ${t}"></span>`}):""}</div>
          </div>
        `:""}
        ${r||o?i.qy`
          <div class="ov-row">
            <span class="ov-val">${r||"—"}</span>
            <span class="ov-label">${this._t("match.record")}</span>
            <span class="ov-val right">${o||"—"}</span>
          </div>
        `:""}
        ${n||l?i.qy`
          <div class="ov-row">
            <span class="ov-val small">${n||"—"}</span>
            <span class="ov-label">${this._t("match.standing")}</span>
            <span class="ov-val right small">${l||"—"}</span>
          </div>
        `:""}
        ${e.week_label?i.qy`<div class="ov-meta"><span class="ov-cal">◈</span> ${e.week_label}</div>`:""}
      </div>
      ${this._renderPreview(e)}
      ${h?i.qy`<section class="brief-card impact">
        <h4>${this._t("race.standings_impact")}</h4>
        <div class="impact-row"><strong>${h.team}</strong><b>${h.previous_rank} → ${h.rank}</b><span>${h.change>0?`▲ ${h.change}`:h.change<0?`▼ ${Math.abs(h.change)}`:"–"} · ${h.points} ${this._t("col.points")}</span></div>
      </section>`:""}
      ${this._renderReview(e)}
      ${this._renderStructuredSummary(e.review&&Object.keys(e.review).length?null:e.match_summary)}
      ${this._renderPredictionOutcome(e)}
      ${this._renderMatchStory(et(e),tt(e))}
      ${this._renderTeamOfMatch(e.team_of_the_match)}
      ${ae(e,{lang:(0,s.$c)(this.hass,this._config),t:e=>this._t(e),weatherBadge:this._weatherBadge||null,hideBroadcasts:1==this._config.hide_broadcasts})}
      ${0!=this._config.show_prediction?pe(e,{t:e=>this._t(e),lang:(0,s.$c)(this.hass,this._config),showDetails:0!=this._config.show_prediction_details}):""}
      ${0!=this._config.show_odds?he(e,{t:(e,t)=>this._t(e,t)}):""}
      ${0!=this._config.show_injuries?ue(e,{t:(e,t)=>this._t(e,t)}):""}
    `;var u}_renderPreview(e){const t=e?.preview||{},a=Ye(e);if(!(a.homeForm.length||a.awayForm.length||a.h2hCount||a.hasStandings||a.absences||a.featured))return"";const s=e=>e?i.qy`<div class="brief-form">${String(e).split("").map(e=>i.qy`<b class=${e.toLowerCase()}>${e}</b>`)}</div>`:i.qy`<span>—</span>`;return i.qy`<section class="brief-card preview">
      <h4>${this._t("match.preview")}</h4>
      ${a.homeForm.length||a.awayForm.length?i.qy`<div class="brief-form-row">${s(a.homeForm.join(""))}<span>${this._t("team.form")}</span>${s(a.awayForm.join(""))}</div>`:""}
      ${a.h2hCount?i.qy`<p>${this._t("match.h2h_available",{n:a.h2hCount})}</p>`:""}
      ${a.hasStandings?i.qy`<p>${this._t("match.standings_context")}: <strong>${a.standings.home??"—"} – ${a.standings.away??"—"}</strong></p>`:""}
      ${a.absences?i.qy`<p>${this._t("match.absence_context")}: <strong>${a.absences.home??0} – ${a.absences.away??0}</strong></p>`:""}
      ${a.featured?i.qy`<p>⭐ ${this._t("match.player_to_watch")}: <strong>${a.featured.name||a.featured}</strong></p>`:""}
      ${t.coverage?.length?i.qy`<div class="brief-chips">${t.coverage.map(e=>i.qy`<span>${function(e,t){const a=String(e||"").trim(),i=It[a.toLowerCase()];return i?t(i):a.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,e=>e.toUpperCase())}(e,e=>this._t(e))}</span>`)}</div>`:""}
    </section>`}_renderReview(e){const t=Ze(e);if(!t.present)return"";const a=t.expectedGoals||{},s=t.standout;return i.qy`<section class="brief-card review">
      <h4>${this._t("match.review")}</h4>
      ${t.scorers.length?i.qy`<div class="brief-scorers">${t.scorers.map(e=>i.qy`<span>⚽ ${e.player||"?"} ${e.minute?`${e.minute}'`:""}</span>`)}</div>`:""}
      ${t.playerOfMatch?i.qy`<p>⭐ <strong>${t.playerOfMatch.name||t.playerOfMatch.player||t.playerOfMatch}</strong>${t.playerOfMatch.rating?` · ${t.playerOfMatch.rating}`:""}</p>`:""}
      ${null!=a.home||null!=a.away?i.qy`<p>xG <strong>${a.home??"—"} – ${a.away??"—"}</strong></p>`:""}
      ${s?i.qy`<p>${St(s.key,e=>this._t(e))}: <strong>${s.home} – ${s.away}</strong></p>`:""}
      ${t.turningPoint?i.qy`<p>${this._t("story.turning_point")}: <strong>${t.turningPoint.player||t.turningPoint.team||"—"}${null!=t.turningPoint.minute?` · ${t.turningPoint.minute}'`:""}</strong></p>`:""}
      ${t.rated.length?i.qy`<div class="brief-ratings">${t.rated.map(e=>i.qy`<span>${e.name}<b>${e.rating}</b></span>`)}</div>`:""}
    </section>`}_renderStructuredSummary(e){return e?i.qy`<section class="brief-card review">
      <h4>${this._t("match.summary")}</h4>
      <p><strong>${this._t(`match.outcome_${e.outcome}`)}</strong> · ${e.score}</p>
      ${e.goal_scorers?.length?i.qy`<div class="brief-scorers">${e.goal_scorers.map(e=>i.qy`<span>⚽ ${e}</span>`)}</div>`:""}
      ${null!=e.home_xg||null!=e.away_xg?i.qy`<p>xG <strong>${e.home_xg??"—"} – ${e.away_xg??"—"}</strong></p>`:""}
      ${e.player_of_the_match?i.qy`<p>⭐ <strong>${e.player_of_the_match.name||e.player_of_the_match}</strong></p>`:""}
    </section>`:""}_renderPredictionOutcome(e){const t=Xe(e);if(!t)return"";const a=e=>this._t(`match.outcome_${e}`);return i.qy`<section class="brief-card outcome ${t.correct?"correct":"surprise"}">
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
    </div></section>`}_renderStats(e){const t=kt(e.home_statistics,e.away_statistics).map(e=>({...e,label:St(e.key,e=>this._t(e))})),a=it(e,{t:e=>this._t(e)});return t.length||a?i.qy`
      <div class="stats-list">
        ${t.map(e=>{const t=e=>null!=e&&""!==e&&"N/A"!==e?String(e):"—",a=t(e.home),s=t(e.away),r=parseFloat(a)||0,o=r+(parseFloat(s)||0),n=o>0?Math.round(r/o*100):50;return i.qy`
            <div class="stat-row">
              <span class="stat-val">${a}</span>
              <div class="stat-center">
                <div class="stat-label">${e.label}</div>
                <div class="stat-bars">
                  <div class="stat-bar home" style="width:${n}%"></div>
                  <div class="stat-bar away" style="width:${100-n}%"></div>
                </div>
              </div>
              <span class="stat-val right">${s}</span>
            </div>
          `})}
      </div>
      ${a}
    `:i.qy`<p class="empty">${this._t("ui.no_stats_yet")}</p>`}_renderTimeline(e){const t=Ve(e);if(!t.length)return i.qy`<p class="empty">${this._t("ui.no_events_yet")}</p>`;const a=e=>"goal"===e?i.qy`<span class="tl-badge goal">${this._t("event.goal")}</span>`:"yellow"===e?i.qy`<span class="tl-badge yellow">${this._t("event.yellow_card")}</span>`:"red"===e?i.qy`<span class="tl-badge red">${this._t("event.red_card")}</span>`:"sub"===e?i.qy`<span class="tl-badge sub">${this._t("event.substitution")}</span>`:i.qy`<span class="tl-badge meta">·</span>`,s="goals"===this._tlFilter?t.filter(e=>"goal"===Fe(e)):"cards"===this._tlFilter?t.filter(e=>["yellow","red"].includes(Fe(e))):t,r=t.some(e=>"goal"===Fe(e)),o=t.some(e=>["yellow","red"].includes(Fe(e)));return i.qy`
      <div class="tl-filters">
        <button class="tl-chip ${"all"===this._tlFilter?"active":""}" @click=${()=>{this._tlFilter="all"}}>${this._t("filter.all")||"Alles"}</button>
        ${r?i.qy`<button class="tl-chip ${"goals"===this._tlFilter?"active":""}" @click=${()=>{this._tlFilter="goals"}}>⚽ ${this._t("event.goal")}</button>`:""}
        ${o?i.qy`<button class="tl-chip ${"cards"===this._tlFilter?"active":""}" @click=${()=>{this._tlFilter="cards"}}>🟨 ${this._t("event.cards")||this._t("event.yellow_card")}</button>`:""}
      </div>
      <div class="tl-list">
        ${s.length?s.map(e=>{const t=Fe(e);return i.qy`
            <div class="tl-row">
              <span class="tl-min">${e.clock||e.minute?`${e.clock||e.minute}'`:""}</span>
              ${a(t)}
              <div class="tl-text">
                <div>${Ge(e,e=>this._t(e))}</div>
                ${e.team?i.qy`<div class="tl-team">${e.team}</div>`:""}
              </div>
            </div>
          `}):i.qy`<p class="empty">${this._t("ui.no_events_yet")}</p>`}
      </div>
    `}_renderLineup(e){const t=e.lineup_home||[],a=e.lineup_away||[];if(!t.length&&!a.length)return i.qy`<p class="empty">${this._t("ui.no_lineup_yet")}</p>`;const s=Ae(e,{t:(e,t)=>this._t(e,t)});if(s)return s;const r=e=>e.some(e=>1==e.starter||0==e.starter),o=r(t)?t.filter(e=>1==e.starter):t,n=r(t)?t.filter(e=>0==e.starter):[],l=r(a)?a.filter(e=>1==e.starter):a,c=r(a)?a.filter(e=>0==e.starter):[];return this._renderLineupList(e,o,n,l,c)}_renderLineupList(e,t,a,s,r){const o=(e,t=0,a=0)=>i.qy`
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
            ${t.map(e=>o(e,0))}
            ${a.length?i.qy`
              <div class="lu-bench-label">${this._t("lineup.bench")}</div>
              ${a.map(e=>o(e,0,1))}
            `:""}
          </div>
          <div class="lu-col right">
            <div class="lu-header">${e.away_team||this._t("generic.away")}</div>
            ${s.map(e=>o(e,1))}
            ${r.length?i.qy`
              <div class="lu-bench-label">${this._t("lineup.bench")}</div>
              ${r.map(e=>o(e,1,1))}
            `:""}
          </div>
        </div>
      </div>
    `}_renderH2H(e,t={}){const a=(r=Lt(this._config.archive_entity?this.hass?.states?.[this._config.archive_entity]:null),o=e.home_team,n=e.away_team,(r||[]).map(Dt).filter(e=>e&&(Vt(e.home_team,o)&&Vt(e.away_team,n)||Vt(e.home_team,n)&&Vt(e.away_team,o))&&Number.isFinite(Number(e.home_score))&&Number.isFinite(Number(e.away_score))).sort((e,t)=>String(t.date_iso||t.date||"").localeCompare(String(e.date_iso||e.date||""))));var r,o,n;const l=new Map;[...e.head_to_head||[],...a].forEach(e=>{const t=String(e.event_id||[String(e.date_iso||e.date||"").slice(0,10),e.home_team,e.away_team].join("|"));l.has(t)||l.set(t,e)});const c=[...l.values()].sort((e,t)=>String(t.date_iso||t.date||"").localeCompare(String(e.date_iso||e.date||""))),d=Number(e.preview?.h2h_count||0);if(!c.length)return i.qy`<p class="empty">${d?this._t("match.h2h_available",{n:d}):this._t("ui.no_h2h_yet")}</p>`;const p={id:t.team_id??null,name:this._config.team_name||this._config.my_team||t.team_name||""};return i.qy`
      <div class="h2h-list">
        ${a.length?i.qy`<p class="h2h-source">${this._t("match.historical_h2h",{n:a.length})}</p>`:""}
        ${c.map(e=>{const t=function(e,t={}){const a=Number.parseInt(e?.home_score??e?.home_goals,10),i=Number.parseInt(e?.away_score??e?.away_goals,10),s=Number.isFinite(a)&&Number.isFinite(i),r=s&&a>i,o=s&&i>a,n=(0,Ct.YZ)(e,"home",t),l=(0,Ct.YZ)(e,"away",t);let c="neutral";return s&&a===i?c="draw":n?c=r?"our-win":o?"our-loss":"neutral":l&&(c=o?"our-win":r?"our-loss":"neutral"),{homeScore:a,awayScore:i,homeWon:r,awayWon:o,scoreClass:c}}(e,p);return i.qy`
            <div class="h2h-row">
              <span class="h2h-date">${(0,s.iS)(e.date||e.date_iso,(0,s.$c)(this.hass,this._config))||String(e.date||e.date_iso||"").split("T")[0]}</span>
              <span class="h2h-team ${t.homeWon?"win":""}">${e.home_team||e.home_abbrev||"?"}</span>
              <span class="h2h-score ${t.scoreClass}">${Number.isFinite(t.homeScore)?t.homeScore:"?"}–${Number.isFinite(t.awayScore)?t.awayScore:"?"}</span>
              <span class="h2h-team right ${t.awayWon?"win":""}">${e.away_team||e.away_abbrev||"?"}</span>
            </div>
          `})}
      </div>
    `}getCardSize(){return 6}static getConfigElement(){return document.createElement("soccer-live-match-center-editor")}static getStubConfig(){return{entity:""}}static get styles(){return[z,Ue,te,ie,G,Te,ge,Et,nt,Mt,at,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);border-radius:20px;overflow:hidden;padding:0;}.mc-hero-section{position:relative;overflow:hidden;}.scoreboard{display:flex;align-items:center;justify-content:space-between;padding:16px 18px 12px;}.mc-team{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;}.mc-team.away{align-items:center;}.mc-logo{width:48px;height:48px;object-fit:contain;}.mc-name{font-size:12px;font-weight:700;text-align:center;max-width:90px;}.mc-score{text-align:center;flex:0 0 auto;padding:0 8px;}.mc-num{font-size:34px;font-weight:900;letter-spacing:4px;}.mc-vs{font-size:18px;font-weight:700;color:var(--cl-text-2,#94a3b8);}.tab-bar{display:flex;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.08));overflow-x:auto;scrollbar-width:none;}.tab-bar::-webkit-scrollbar{display:none;}.tab{flex:1;min-width:56px;padding:9px 4px;background:none;border:none;border-bottom:2px solid transparent;color:var(--cl-text-2,#94a3b8);font-size:11px;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:0.06em;transition:color 0.15s;}.tab.active{color:var(--cl-accent,#6366f1);border-bottom-color:var(--cl-accent,#6366f1);}.mc-picker{position:relative;z-index:3;display:flex;align-items:center;gap:8px;padding:10px 14px;background:var(--cl-bg);border-bottom:1px solid var(--cl-divider);}.mc-picker select{min-width:0;flex:1;padding:7px 9px;border-radius:8px;border:1px solid var(--cl-divider);background:rgba(255,255,255,.06);color:var(--cl-text);}.mc-picker span{color:var(--cl-accent);font-size:11px;}.brief-card{margin:8px 12px;padding:11px;border-radius:12px;border:1px solid var(--cl-divider);background:rgba(255,255,255,.025);}.readiness{margin:10px 12px;}.brief-card h4{margin:0 0 9px;color:var(--cl-accent);font-size:12px;text-transform:uppercase;letter-spacing:.08em;}.brief-card p{margin:7px 0;color:var(--cl-text-2);font-size:11px;}.brief-card strong{color:var(--cl-text)}.brief-form-row{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--cl-text-2);font-size:10px;}.brief-form{display:flex;gap:3px;}.brief-form-row>.brief-form:last-child{justify-content:flex-end}.brief-form b{display:grid;place-items:center;width:19px;height:19px;border-radius:50%;color:white;font-size:9px}.brief-form .w{background:#16a34a}.brief-form .d{background:#64748b}.brief-form .l{background:#dc2626}.brief-chips,.brief-scorers{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;}.brief-chips span,.brief-scorers span{padding:4px 7px;border-radius:999px;background:rgba(148,163,184,.1);color:var(--cl-text-2);font-size:9px}.brief-ratings{display:grid;gap:4px;}.brief-ratings span{display:flex;justify-content:space-between;color:var(--cl-text-2);font-size:10px}.brief-ratings b{color:#fbbf24}.impact-row{display:grid;grid-template-columns:1fr auto;gap:4px;align-items:center}.impact-row strong{font-size:11px}.impact-row b{color:var(--cl-accent);font-size:15px}.impact-row span{grid-column:1/-1;color:var(--cl-text-2);font-size:9px}.outcome-grid{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px}.outcome-grid span{display:flex;flex-direction:column}.outcome-grid span:last-child{text-align:right}.outcome-grid small{color:var(--cl-text-2);font-size:9px}.outcome-grid strong{color:var(--cl-text);font-size:11px}.outcome-grid>b{color:var(--cl-success,#10b981);font-size:18px}.outcome.surprise .outcome-grid>b{color:var(--cl-warning,#f59e0b)}.outcome>p{margin:8px 0 0;text-align:center;color:var(--cl-text-2);font-size:10px}.story-line{display:grid}.story-line>div{display:grid;grid-template-columns:32px 12px 1fr;align-items:stretch;min-height:42px}.story-line>div>b{color:var(--cl-accent);font-size:10px;padding-top:3px}.story-line i{position:relative;border-left:2px solid var(--cl-divider)}.story-line i::before{content:'';position:absolute;left:-5px;top:3px;width:8px;height:8px;border-radius:50%;background:var(--cl-accent)}.story-line span{display:flex;flex-direction:column;padding-bottom:8px}.story-line span strong{font-size:10px}.story-line span small{color:var(--cl-text-2);font-size:9px}.story-summary{display:grid;gap:5px;margin:7px 0 0;padding:8px 8px 8px 22px;border-radius:8px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:9px}.best-xi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.best-xi-grid>div{display:grid;grid-template-columns:28px 1fr auto;align-items:center;gap:5px;padding:6px;border-radius:8px;background:rgba(255,255,255,.04);min-width:0}.best-xi-grid img{width:28px;height:28px;border-radius:50%;object-fit:cover}.best-xi-grid span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--cl-text);font-size:9px}.best-xi-grid b{color:#fbbf24;font-size:10px}.best-xi-grid small{grid-column:2/-1;color:var(--cl-text-2);font-size:8px}.best-xi-grid .away{box-shadow:inset 2px 0 var(--cl-accent-2)}.best-xi-grid .home{box-shadow:inset 2px 0 var(--cl-accent)}.tab-content{min-height:80px;}.ov-section{padding:4px 16px 8px;}.ov-row{display:flex;align-items:center;padding:9px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.ov-val{flex:1;font-weight:700;font-size:13px;}.ov-val.right{text-align:right;}.ov-val.small{font-size:11px;}.ov-label{flex:0 0 70px;text-align:center;font-size:10px;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;}.ov-meta{font-size:12px;color:var(--cl-text-2,#94a3b8);padding:7px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.05));display:flex;align-items:center;gap:5px;}.ov-cal{font-size:10px;color:var(--cl-accent,#6366f1);}.ov-form-dots{flex:1;display:flex;gap:3px;align-items:center;}.ov-form-dots.right{justify-content:flex-end;}.ov-fd{width:7px;height:7px;border-radius:50%;flex-shrink:0;}.ov-fd.w{background:var(--cl-green,#10b981);}.ov-fd.l{background:var(--cl-live,#ef4444);}.ov-fd.d{background:var(--cl-text-2,#94a3b8);opacity:0.5;}.stats-list{padding:4px 0;}.stat-row{display:flex;align-items:center;padding:6px 16px;gap:8px;}.stat-val{min-width:34px;font-weight:700;font-size:13px;}.stat-val.right{text-align:right;}.stat-center{flex:1;display:flex;flex-direction:column;gap:3px;}.stat-label{text-align:center;font-size:10px;color:var(--cl-text-2,#94a3b8);}.stat-bars{display:flex;height:4px;border-radius:2px;overflow:hidden;}.stat-bar.home{background:var(--cl-accent,#6366f1);}.stat-bar.away{background:var(--cl-text-2,#94a3b8);opacity:0.4;}.tl-filters{display:flex;gap:6px;padding:8px 16px 4px;}.tl-chip{background:var(--cl-card-2,rgba(255,255,255,0.05));border:1px solid var(--cl-divider,rgba(255,255,255,0.08));border-radius:99px;color:var(--cl-text-2,#94a3b8);font-size:10px;font-weight:700;padding:3px 10px;cursor:pointer;}.tl-chip.active{background:var(--cl-accent,#6366f1);border-color:var(--cl-accent,#6366f1);color:#fff;}.tab-content{min-height:80px;max-height:380px;overflow-y:auto;-webkit-overflow-scrolling:touch;}.tab-content.lineup{max-height:none;overflow-y:visible;}.tl-list{padding:4px 16px;}.tl-row{display:flex;align-items:flex-start;gap:8px;padding:8px 0;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.tl-min{min-width:28px;font-size:11px;font-weight:700;color:var(--cl-text-2,#94a3b8);padding-top:2px;}.tl-badge{display:inline-block;font-size:8px;font-weight:800;padding:1px 5px;border-radius:3px;text-transform:uppercase;letter-spacing:0.04em;flex-shrink:0;line-height:15px;white-space:nowrap;}.tl-badge.goal{background:rgba(99,102,241,0.18);color:var(--cl-accent,#6366f1);}.tl-badge.yellow{background:rgba(245,158,11,0.18);color:#f59e0b;}.tl-badge.red{background:rgba(239,68,68,0.18);color:#ef4444;}.tl-badge.sub{background:rgba(148,163,184,0.12);color:var(--cl-text-2,#94a3b8);}.tl-badge.meta{background:transparent;color:var(--cl-text-2,#94a3b8);font-size:14px;padding:0 4px;letter-spacing:0;}.tl-text{flex:1;font-size:12px;}.tl-team{font-size:10px;color:var(--cl-text-2,#94a3b8);margin-top:2px;}.lu-wrap{padding:8px 16px;}.lu-formation{display:flex;align-items:center;justify-content:space-between;padding:6px 0 10px;font-size:20px;font-weight:900;}.lu-form-label{font-size:10px;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;}.lu-cols{display:flex;gap:12px;}.lu-col{flex:1;}.lu-col.right .lu-player{flex-direction:row-reverse;}.lu-header{font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;}.lu-player{display:flex;align-items:center;gap:5px;padding:4px 0;font-size:11px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.04));}.lu-player.bench{opacity:0.65;font-size:10.5px;}.lu-shirt{font-size:10px;font-weight:800;color:var(--cl-accent,#6366f1);min-width:16px;}.lu-pos{font-size:9px;color:var(--cl-text-2,#94a3b8);}.lu-bench-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--cl-text-2,#94a3b8);margin:8px 0 2px;display:flex;align-items:center;gap:6px;}.lu-bench-label::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--cl-divider,rgba(255,255,255,0.08)),transparent);}.h2h-list{padding:4px 16px;}.h2h-row{display:flex;align-items:center;gap:6px;padding:8px 0;font-size:12px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.h2h-date{font-size:10px;color:var(--cl-text-2,#94a3b8);min-width:46px;}.h2h-team{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.h2h-team.right{text-align:right;}.h2h-team.win{font-weight:700;}.h2h-score{min-width:46px;text-align:center;font-weight:700;}.h2h-score.our-win{color:var(--cl-green);}.h2h-score.our-loss{color:var(--cl-live);}.h2h-score.draw{color:var(--cl-text-2,#94a3b8);}.h2h-score.neutral{color:var(--cl-text);}.h2h-source{margin:5px 0 8px;color:var(--cl-text-2);font-size:9px}.empty{text-align:center;color:var(--cl-text-2,#94a3b8);font-size:12px;padding:24px 16px;margin:0;}`]}}customElements.get("soccer-live-match-center")||customElements.define("soccer-live-match-center",Rt);class Wt extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean}}}constructor(){super(),this._isLoading=1}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this._isLoading=1}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}updated(e){if(e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];e&&"unavailable"!==e.state&&(this._isLoading=0,Z.set(this._config.entity,e.attributes))}}_t(e){return(0,s.t)(e,(0,s.$c)(this.hass,this._config))}_detectTeam(e){const t={};(e||[]).forEach(e=>{[e.home_team,e.away_team].filter(Boolean).forEach(e=>{t[e]=(t[e]||0)+1})});const a=Object.entries(t).sort((e,t)=>t[1]-e[1]);return a.length&&a[0][1]===e.length?a[0][0]:""}render(){if(A(this,this._config),!this.hass||!this._config)return H(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=Z.get(e);if(!t?.data?.previous_matches)return R("",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else a=t.attributes;else{const t=Z.get(e);if(!t?.data?.previous_matches)return R("",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}return this._isLoading&&!a?H(this._t("ui.loading")):(a?.previous_matches||[]).length?this._renderCard(a):K(a,e=>this._t(e),()=>U("",this._t("ui.no_form_data"),this._t("ui.no_form_hint"),""))}_renderCard(e){const t=e.previous_matches||[],a=(e.matches||[])[0],s=e.upcoming_matches||[],r=a&&"pre"===a.state?[a,...s]:s,o=this._config.team_name||e.team_name||this._detectTeam(t)||"",n=o.toLowerCase(),l=n&&a?.home_team?.toLowerCase().includes(n),c=n&&a?.away_team?.toLowerCase().includes(n),d=e.team_logo||(l?a?.home_logo:c?a?.away_logo:null)||a?.home_logo||"",p=me(a,c?"away":"home",e=>this._t(e)),h=1==this._config.hide_header,u=[...t].reverse().map(e=>{const t=n&&e.home_team?.toLowerCase().includes(n),a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)?null:a===i?{r:"D",m:e}:{r:t&&a>i||!t&&i>a?"W":"L",m:e}}).filter(Boolean),g=u.filter(e=>"W"===e.r).length,m=u.filter(e=>"D"===e.r).length,f=u.filter(e=>"L"===e.r).length,_=[...t].reverse().map(e=>{const t=n&&e.home_team?.toLowerCase().includes(n),a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)?null:{scored:t?a:i,conceded:t?i:a}}).filter(Boolean),v=(e.matches||[])[0]||{},b=v.last_five_home||v.home_form||"",y=v.last_five_away||v.away_form||"",x=v.home_record_summary||v.home_record||"",w=v.away_record_summary||v.away_record||"",$=Math.max(..._.map(e=>Math.max(e.scored,e.conceded)),1);return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
        ${h?"":X({logo:d,title:o||this._t("card.team_form"),badge:p?ee(p,"neutral"):null})}

        <!-- Form dots -->
        <div class="section">
          <div class="section-label">${this._t("team.form_trend")} (${u.length})</div>
          <div class="form-dots">
            ${u.map(e=>i.qy`<span class="dot ${e.r.toLowerCase()}" title="${e.m.home_team} ${S(e.m.home_score,"-")}-${S(e.m.away_score,"-")} ${e.m.away_team}">${e.r}</span>`)}
          </div>
          <div class="wdl-row">
            <span class="wdl w">${g}${this._t("col.wins")}</span>
            <span class="wdl d">${m}${this._t("col.draws")}</span>
            <span class="wdl l">${f}${this._t("col.losses")}</span>
          </div>
        </div>

        <!-- Goals trend bars -->
        ${_.length?i.qy`
          <div class="section">
            <div class="section-label">${this._t("form.goals_per_match")}</div>
            <div class="goal-bars">
              ${_.map(e=>i.qy`
                <div class="goal-col">
                  <div class="bar-wrap">
                    <div class="bar scored"  style="height:${Math.round(e.scored/$*36)}px"></div>
                    <div class="bar conceded" style="height:${Math.round(e.conceded/$*36)}px"></div>
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
        ${b||y||x||w?i.qy`
          <div class="section">
            <div class="home-away-grid">
              <div class="ha-col">
                <div class="ha-label">${this._t("form.home")}</div>
                ${x?i.qy`<div class="ha-record">${x}</div>`:""}
                ${b?i.qy`<div class="ha-form">${this._renderFormPills(b)}</div>`:""}
              </div>
              <div class="ha-divider"></div>
              <div class="ha-col">
                <div class="ha-label">${this._t("form.away")}</div>
                ${w?i.qy`<div class="ha-record">${w}</div>`:""}
                ${y?i.qy`<div class="ha-form">${this._renderFormPills(y)}</div>`:""}
              </div>
            </div>
          </div>
        `:""}

        <!-- Previous matches list -->
        <div class="section">
          <div class="section-label">${this._t("team.previous_matches")}</div>
          ${t.map(e=>{const t=n&&e.home_team?.toLowerCase().includes(n),a=parseInt(e.home_score),s=parseInt(e.away_score),r=t?a:s,o=t?s:a,l=isNaN(a)||isNaN(s)?null:r>o?"W":r<o?"L":"D";return i.qy`
              <div class="pm-row">
                <span class="pm-date">${(e.date||"").split(" ")[0]}</span>
                <img class="pm-logo" src="${e.home_logo||""}" alt="" @error=${e=>e.target.style.display="none"}>
                <span class="pm-team ${t?"tracked":""}">${e.home_abbrev||e.home_team||"?"}</span>
                <span class="pm-score ${"W"===l?"tracked-win":"L"===l?"tracked-loss":"draw"}">${Number.isFinite(a)?a:"?"}-${Number.isFinite(s)?s:"?"}</span>
                <span class="pm-team right ${t?"":"tracked"}">${e.away_abbrev||e.away_team||"?"}</span>
                <img class="pm-logo" src="${e.away_logo||""}" alt="" @error=${e=>e.target.style.display="none"}>
                ${l?i.qy`<span class="pm-res ${l.toLowerCase()}">${l}</span>`:""}
              </div>
            `})}
        </div>

        <!-- Upcoming -->
        ${r.length?i.qy`
          <div class="section">
            <div class="section-label">${this._t("team.upcoming_matches")}</div>
            ${r.map(e=>i.qy`
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
    `}_renderFormPills(e){const t=String(e).replace(/[^WLDwld]/g,"").toUpperCase().split("");return i.qy`${t.map(e=>i.qy`<span class="form-pill ${e.toLowerCase()}">${e}</span>`)}`}getCardSize(){return 5}static getConfigElement(){return document.createElement("soccer-live-team-form-editor")}static getStubConfig(){return{entity:""}}static get styles(){return[z,Ue,te,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);border-radius:20px;overflow:hidden;padding:0;}.section{padding:8px 16px 2px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.06));}.section:last-child{border-bottom:none;padding-bottom:8px;}.section-label{font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:6px;}.form-dots{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:4px;}.dot{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;cursor:default;}.dot.w{background:#22c55e;color:#fff;}.dot.d{background:var(--cl-text-2,#64748b);color:#fff;}.dot.l{background:#ef4444;color:#fff;}.wdl-row{display:flex;gap:10px;margin-bottom:4px;font-size:12px;font-weight:700;}.wdl.w{color:#22c55e;}.wdl.d{color:var(--cl-text-2,#94a3b8);}.wdl.l{color:#ef4444;}.goal-bars{display:flex;align-items:flex-end;gap:4px;height:50px;margin-bottom:2px;}.goal-col{display:flex;flex-direction:column;align-items:center;gap:2px;flex:1;}.bar-wrap{display:flex;align-items:flex-end;gap:2px;height:36px;}.bar{width:7px;border-radius:2px 2px 0 0;min-height:2px;}.bar.scored{background:#22c55e;}.bar.conceded{background:#ef4444;opacity:0.7;}.goal-nums{font-size:9px;color:var(--cl-text-2,#94a3b8);}.goal-legend{display:flex;align-items:center;gap:8px;font-size:10px;color:var(--cl-text-2,#94a3b8);margin-top:2px;margin-bottom:4px;}.leg-dot{width:7px;height:7px;border-radius:50%;display:inline-block;}.leg-dot.scored{background:#22c55e;}.leg-dot.conceded{background:#ef4444;opacity:0.7;}.home-away-grid{display:flex;align-items:flex-start;gap:8px;padding-bottom:4px;}.ha-col{flex:1;}.ha-divider{width:1px;background:var(--cl-divider,rgba(255,255,255,0.08));align-self:stretch;}.ha-label{font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);text-transform:uppercase;margin-bottom:3px;}.ha-record{font-size:11px;font-weight:700;margin-bottom:3px;}.ha-form{display:flex;gap:3px;flex-wrap:wrap;}.form-pill{width:18px;height:18px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;}.form-pill.w{background:#22c55e;color:#fff;}.form-pill.d{background:var(--cl-text-2,#64748b);color:#fff;}.form-pill.l{background:#ef4444;color:#fff;}.pm-row{display:flex;align-items:center;gap:5px;padding:4px 0;font-size:12px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.04));}.pm-date{font-size:10px;color:var(--cl-text-2,#94a3b8);min-width:42px;}.pm-logo{width:16px;height:16px;object-fit:contain;flex-shrink:0;}.pm-team{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.pm-team.right{text-align:right;}.pm-team.tracked{font-weight:700;}.pm-score{min-width:40px;text-align:center;font-weight:700;font-size:12px;}.pm-score.tracked-win{color:#22c55e;}.pm-score.tracked-loss{color:#ef4444;}.pm-score.draw{color:var(--cl-text-2,#94a3b8);}.pm-res{min-width:18px;height:18px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;flex-shrink:0;}.pm-res.w{background:#22c55e;color:#fff;}.pm-res.d{background:var(--cl-text-2,#64748b);color:#fff;}.pm-res.l{background:#ef4444;color:#fff;}`]}}customElements.get("soccer-live-team-form")||customElements.define("soccer-live-team-form",Wt);var Kt=a(195);class Ut extends i.WF{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_squadExpanded:{type:Boolean},_transferFilter:{type:String},_selectedPlayer:{type:Object},_selectedTransfer:{type:Object},_comparisonPlayers:{type:Array},_squadQuery:{type:String},_positionFilter:{type:String},_availabilityFilter:{type:String},_favoriteIds:{type:Array},_sectionState:{type:Object}}}setConfig(e){if(!e.entity)throw new Error("Entity required");const t=this._config?.entity!==e.entity;this._config=e,A(this,e),this._isLoading=1,void 0===this._squadExpanded&&(this._squadExpanded=0),void 0===this._transferFilter&&(this._transferFilter="all"),Array.isArray(this._comparisonPlayers)||(this._comparisonPlayers=[]),void 0===this._squadQuery&&(this._squadQuery=""),void 0===this._positionFilter&&(this._positionFilter="all"),void 0===this._availabilityFilter&&(this._availabilityFilter="all"),!t&&Array.isArray(this._favoriteIds)||this._loadClubPreferences(),this._selectedPlayer=null,this._selectedTransfer=null}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout(()=>this.requestUpdate(),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer),this._removePlayerPortal()}updated(e){if(e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];e&&"unavailable"!==e.state&&(this._isLoading=0,Z.set(this._config.entity,e.attributes))}(e.has("_selectedPlayer")||e.has("_selectedTransfer"))&&(this._selectedPlayer||this._selectedTransfer?this._openPlayerPortal():this._removePlayerPortal())}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_selectPlayer(e,t=null){this._portalReturnFocus=t||document?.activeElement||null,this._portalReturnFocusKey=t?.dataset?.focusKey||"",this._selectedPlayer=e}_selectTransfer(e,t=null){this._portalReturnFocus=t||document?.activeElement||null,this._portalReturnFocusKey=t?.dataset?.focusKey||"",this._selectedTransfer=e}_detailFocusKey(e,t){return`${e}:${t?.id??t?.player_id??t?.name??t?.player??""}:${t?.date??""}:${t?.direction??""}`}_closePlayerDetail(){this._selectedPlayer=null,this._selectedTransfer=null}render(){if(A(this,this._config),!this.hass||!this._config)return H(this._t("ui.loading"));const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=Z.get(e);if(!t?.data?.club)return R("📡",this._t("ui.sensor_unavailable"),this._t("ui.sensor_unavailable_hint"),this._t("ui.restart_ha"));a=t.data}else a=t.attributes;else{const t=Z.get(e);if(!t?.data?.club)return R("⚠️",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}const i=a?.club;return(0,Kt.oD)(i)?this._renderCard(i,a):this._isLoading&&!a?H(this._t("ui.loading")):K(a,e=>this._t(e),()=>U("🏟️",this._t("club.empty"),this._t("club.empty_hint"),""))}_renderCard(e,t){this._clubAttrs=t;const a=e.profile||{},s=1==this._config.hide_header,r=1==this._config.dashboard_mode,o={profile:()=>this._renderProfile(a,e.coach,e),matchday:()=>0!=this._config.show_matchday?this._renderMatchday(t):"",dashboard:()=>r?"":this._renderDashboard(e,t),quality:()=>0!=this._config.show_data_quality?this._renderDataQuality(t):"",availability:()=>0!=this._config.show_availability?this._renderAvailability(e.squad||[]):"",selection:()=>0!=this._config.show_selection?this._renderSelection(t):"",prediction:()=>0!=this._config.show_prediction?this._renderPrediction(e.squad||[],e.transfers||[]):"",news:()=>0!=this._config.show_team_news?this._renderTeamNews(e,t.club_changes||e.changes):"",season:()=>r||0==this._config.show_season_progress?"":this._renderSeasonProgress(t),changes:()=>this._renderClubChanges(t.club_changes||e.changes),favorites:()=>this._renderFavorites(e.squad||[],t.player_watchlist),records:()=>r?"":this._renderClubRecords(t),analysis:()=>r||0==this._config.show_squad_analysis?"":this._renderCollapsible("analysis",this._t("club.squad_analysis"),this._renderSquadAnalysis(e.squad||[]),1),injuries:()=>0!=this._config.show_injuries?this._renderCollapsible("injuries",this._t("club.injury_center"),this._renderInjuryCenter(e),1):"",comparison:()=>r?"":this._renderPlayerComparison(),squad:()=>r||0==this._config.show_squad?"":this._renderCollapsible("squad",this._t("club.squad"),this._renderSquad(e.squad||[]),0),transfers:()=>0!=this._config.show_transfers?r?this._renderTransfers(e.transfers||[],1):this._renderCollapsible("transfers",this._t("club.transfers"),this._renderTransfers(e.transfers||[]),0):"",automations:()=>1==this._config.show_automations?this._renderAutomations():""},n=(0,Kt.tC)(this._config.section_order);return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
          ${s?"":X({logo:a.logo,title:a.name||this._t("card.club"),fallbackIcon:"🏟️"})}
          ${n.map(e=>o[e]())}
          <div class="clb-note">${this._t("club.cache_note")}</div>
        </div>
      </ha-card>
    `}_renderDataQuality(e){const t=String(e.provider||""),a=t.endsWith("_private")?this._t("source.private"):t||"Soccer Live",s=e.sync_status||"ready",r=this.hass?.states?.[this._config.entity],o=r?.last_updated?new Date(r.last_updated):null,n=o?Math.max(0,Math.round((Date.now()-o.getTime())/6e4)):null,l=e.data_quality||{};return i.qy`<section class="clb-quality ${s}">
      <span>${"ready"===s?"●":"▲"} ${a}</span>
      ${null!=l.average_completeness?i.qy`<b title=${this._t("quality.completeness")}>${l.average_completeness}%</b>`:""}
      <small>${null==n?this._t("club.freshness_unknown"):n<1?this._t("club.just_updated"):this._t("club.updated_minutes",{n})}</small>
    </section>`}_renderAvailability(e){const t=(0,Kt.Od)(e);return t.length?i.qy`<section class="clb-section clb-availability"><div class="clb-title">${this._t("club.availability_radar")}</div><div class="clb-radar">${t.map(e=>i.qy`<div class=${e.thin?"thin":""}><span>${this._t(e.key)}</span><i><b style="width:${e.total?e.available/e.total*100:0}%"></b></i><strong>${e.available}/${e.total}</strong>${e.thin?i.qy`<em>⚠</em>`:""}</div>`)}</div></section>`:""}_renderPrediction(e,t){const a=(0,Kt.i2)(e,t);return a?this._renderCollapsible("prediction",this._t("club.predicted_lineup"),i.qy`<section class="clb-section clb-lineup"><small>${this._t("club.prediction_disclaimer")} · ${a.formation}</small>${a.lines.map(e=>i.qy`<div>${e.map(e=>i.qy`<button data-focus-key=${this._detailFocusKey("player",e)} @click=${t=>this._selectPlayer(e,t.currentTarget)}>${e.name}</button>`)}</div>`)}</section>`,0):""}_renderSelection(e){const t=(0,Kt.IK)(e);return t?this._renderCollapsible("selection",this._t("club.official_selection"),i.qy`<section class="clb-section clb-selection"><div><strong>${this._t("club.starting_players")}</strong>${t.starters.map(e=>i.qy`<span>${e.name||e.player}</span>`)}</div>${t.substitutes.length?i.qy`<div><strong>${this._t("club.substitutes")}</strong>${t.substitutes.map(e=>i.qy`<span>${e.name||e.player}</span>`)}</div>`:""}</section>`,1):""}_renderTeamNews(e,t){const a=(0,Kt.zu)(e,t);return a.length?this._renderCollapsible("news",this._t("club.team_news"),i.qy`<section class="clb-section clb-news">${a.map(e=>{return i.qy`<div><b>${t=e.type,{transfer_added:"↔",injury_added:"✚",player_available:"✓",coach_changed:"👤",squad_added:"+",squad_removed:"−",market_value_changed:"€"}[t]||"•"}</b><span><strong>${e.player||e.name||this._t(`club.change_${e.type}`)}</strong><small>${this._teamNewsDetail(e)}</small></span><time>${(0,Kt.Bg)(e.date)}</time></div>`;var t})}</section>`,1):""}_teamNewsDetail(e){return"injury"===e.source?this._returnLabel(e.detail):"transfer"===e.source||"transfer_added"===e.type?"in"===e.detail?this._t("club.transfer_in"):"out"===e.detail?this._t("club.transfer_out"):this._transferTypeLabel(e.detail):e.detail||(e.type?this._t(`club.change_${e.type}`):"")}_automationYaml(e,t){return`alias: ${t}\ntrigger:\n  - platform: event\n    event_type: ${e}\naction:\n  - service: notify.notify\n    data:\n      message: "${t}"`}_renderAutomations(){return this._renderCollapsible("automations",this._t("club.automation_examples"),i.qy`<section class="clb-section clb-automations">${[["soccer_live_lineup_available","club.automation_lineup"],["soccer_live_injury_added","club.automation_injury"],["soccer_live_player_available","club.automation_available"],["soccer_live_transfer_added","club.automation_transfer"],["soccer_live_match_started","club.automation_started"],["soccer_live_goal","club.automation_goal"]].map(([e,t])=>{const a=this._t(t);return i.qy`<div><span><strong>${a}</strong><small>${e}</small></span><button @click=${()=>navigator.clipboard?.writeText(this._automationYaml(e,a))}>${this._t("club.copy_yaml")}</button></div>`})}</section>`,0)}_renderClubChanges(e){const t=Array.isArray(e)?e:[];return t.length?i.qy`<section class="clb-changes"><div class="clb-title">${this._t("club.since_update")}</div><div>${t.slice(0,6).map(e=>{return i.qy`<span class=${e.type||""}><b>${t=e.type,{transfer_added:"↔",injury_added:"✚",player_available:"✓",coach_changed:"👤",squad_added:"+",squad_removed:"−",market_value_changed:"€"}[t]||"•"}</b>${e.player||e.name||this._t(`club.change_${e.type}`)}${null!=e.delta?i.qy`<small>${Number(e.delta)>0?"+":""}${"market_value_changed"===e.type?this._formatValue(e.delta):e.delta}</small>`:""}</span>`;var t})}</div></section>`:""}_preferenceKey(){return`soccer-live-club:${this._config?.entity||"default"}`}_loadClubPreferences(){let e={};try{e=JSON.parse(localStorage.getItem(this._preferenceKey())||"{}")}catch(e){}this._favoriteIds=Array.isArray(e.favorites)?e.favorites:[],this._sectionState=e.sections&&"object"==typeof e.sections?e.sections:{}}_saveClubPreferences(){try{localStorage.setItem(this._preferenceKey(),JSON.stringify({favorites:this._favoriteIds||[],sections:this._sectionState||{}}))}catch(e){}}_renderCollapsible(e,t,a,s){if(!a)return"";if(0==this._config.collapse_sections)return a;const r=this._sectionState?.[e]??s;return i.qy`<details class="clb-collapse clb-collapse-${e}" ?open=${r} @toggle=${t=>{this._sectionState={...this._sectionState||{},[e]:t.currentTarget.open},this._saveClubPreferences()}}><summary>${t}<span>${r?"−":"+"}</span></summary>${a}</details>`}_playerKey(e){return String(e?.id??e?.name??"")}_toggleFavorite(e){const t=this._playerKey(e);if(!t)return;const a=this._favoriteIds||[];this._favoriteIds=a.includes(t)?a.filter(e=>e!==t):[...a,t],this._saveClubPreferences()}_renderFavorites(e,t){const a=[...Array.isArray(t)?t:[],...(e||[]).filter(e=>this._favoriteIds?.includes(this._playerKey(e)))].filter((e,t,a)=>a.findIndex(t=>this._playerKey(t)===this._playerKey(e))===t);return a.length?i.qy`<section class="clb-favorites"><div class="clb-title">★ ${this._t("club.favorites")}</div><div class="clb-favorite-grid">${a.map(e=>i.qy`<button data-focus-key=${this._detailFocusKey("player",e)} @click=${t=>this._selectPlayer(e,t.currentTarget)}>${e.photo?i.qy`<img src=${e.photo} alt="">`:i.qy`<span>${e.number??"★"}</span>`}<strong>${e.name}</strong><small>${e.injured?this._t("club.unavailable"):[null!=e.goals?`${e.goals} G`:"",null!=e.assists?`${e.assists} A`:"",e.rating||""].filter(Boolean).join(" · ")||e.position||""}</small></button>`)}</div></section>`:""}_renderClubRecords(e){if(0==this._config.show_club_records)return"";const t=(0,Kt.x8)(e.previous_matches,e.team_id,e.team_name);if(!t)return"";const a=i.qy`<section class="clb-records"><div class="clb-record-grid">
      <div><strong>${t.unbeaten}</strong><span>${this._t("club.unbeaten")}</span></div>
      <div><strong>${t.winning}</strong><span>${this._t("club.winning_streak")}</span></div>
      <div><strong>${t.cleanSheets}</strong><span>${this._t("club.clean_sheet_streak")}</span></div>
      <div><strong>${t.averageGoals.toFixed(1)}</strong><span>${this._t("club.average_goals")}</span></div>
    </div>${t.biggestWin?i.qy`<div class="clb-biggest"><span>${this._t("club.biggest_win")}</span><b>${t.biggestWin.score} · ${t.biggestWin.opponent}</b></div>`:""}
    ${null!=t.home.pointsPerGame||null!=t.away.pointsPerGame?i.qy`<div class="clb-split"><span>${this._t("club.home_ppg")} <b>${t.home.pointsPerGame?.toFixed(2)??"–"}</b></span><span>${this._t("club.away_ppg")} <b>${t.away.pointsPerGame?.toFixed(2)??"–"}</b></span></div>`:""}</section>`;return this._renderCollapsible("records",this._t("club.records"),a,1)}_renderMatchday(e){const t=(0,Kt.Wg)(e);if(!t)return"";const{match:a,phase:s}=t,r=this._t(`club.matchday_${s}`),o="pre"===s?(0,Kt.vr)(a.clock)||(0,Kt.vr)(a.date)||this._t("status.scheduled"):`${(0,Kt.vr)(a.home_score)||"–"} – ${(0,Kt.vr)(a.away_score)||"–"}`,n=(0,Kt.vr)(a.status),l=ve[String(n||"").trim().toLowerCase()],c="pre"===s?this._t("status.scheduled"):"post"===s?this._t("status.full_time"):l?this._t(l):n,d=(0,Kt.vr)(a.venue),p=a.lineup_home?.length||a.lineup_away?.length||a.formation_home||a.formation_away,h=a.has_stats||Object.keys(a.home_statistics||{}).length||Object.keys(a.away_statistics||{}).length,u=(0,Kt.Pc)(e.club);return i.qy`<section class="clb-matchday ${s}">
      <div class="clb-matchday-head"><span>${this._t("club.matchday")}</span><b>${r}</b></div>
      <div class="clb-matchday-fixture">
        <span>${a.home_team||""}</span><strong>${o}</strong><span>${a.away_team||""}</span>
      </div>
      ${d||c||p||h?i.qy`<div class="clb-matchday-meta">
        ${c?i.qy`<span>${c}</span>`:""}${d?i.qy`<span>⌖ ${d}</span>`:""}
        ${p?i.qy`<span>✓ ${this._t("tab.lineup")}</span>`:""}${h?i.qy`<span>✓ ${this._t("tab.stats")}</span>`:""}
      </div>`:""}
      ${u?i.qy`<div class="clb-impact">
        <span><b>${u.count}</b>${this._t("club.unavailable_players")}</span>
        ${null!=u.loadPercent?i.qy`<span><b>${u.loadPercent}%</b>${this._t("club.missing_load")}</span>`:""}
        ${u.goals||u.assists?i.qy`<span><b>${u.goals}G · ${u.assists}A</b>${this._t("club.missing_output")}</span>`:""}
      </div>`:""}
    </section>`}_renderSeasonProgress(e){const t=(0,Kt.xV)(e.previous_matches,e.team_id,e.team_name,this._config.season_progress_matches??12);if(!t.played)return"";const a=Math.max(3,...t.rounds.map(e=>e.points)),s=t.rounds.map((e,i)=>`${1===t.rounds.length?50:i/(t.rounds.length-1)*100},${36-e.points/a*32}`).join(" ");return i.qy`<section class="clb-season">
      <div class="clb-section-head"><div><span>${this._t("club.season_progress")}</span><strong>${t.points} ${this._t("col.points")}</strong></div><small>${t.played} ${this._t("club.matches_played")}</small></div>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" role="img" aria-label="${this._t("club.season_progress")}"><polyline points=${s}></polyline>${t.rounds.map((e,s)=>{const r=1===t.rounds.length?50:s/(t.rounds.length-1)*100,o=36-e.points/a*32;return i.qy`<circle class=${e.result.toLowerCase()} cx=${r} cy=${o} r="1.8"><title>${e.opponent}: ${e.result}, ${e.points}</title></circle>`})}</svg>
      <div class="clb-season-stats"><span>${this._t("club.goals_for")} <b>${t.goalsFor}</b></span><span>${this._t("club.goals_against")} <b>${t.goalsAgainst}</b></span><span>${this._t("club.goal_difference")} <b>${t.goalsFor-t.goalsAgainst>0?"+":""}${t.goalsFor-t.goalsAgainst}</b></span></div>
    </section>`}_renderDashboard(e,t){const a=e.squad||[],s=(0,Kt.V5)(e),r=e.transfers||[],o=(t.previous_matches||[]).slice(-5).reverse(),n=String(t.team_id??""),l=o.map(e=>{const t=String(e.home_id??"")===n,a=Number(t?e.home_score:e.away_score),i=Number(t?e.away_score:e.home_score);return Number.isFinite(a)&&Number.isFinite(i)?a>i?"W":a<i?"L":"D":null}).filter(Boolean),c=0==this._config.show_matchday?t.next_match:null,d=(0,Kt.mR)(a);return c||a.length||s.length||r.length||l.length?i.qy`<div class="clb-dashboard">
      ${c?i.qy`<div class="clb-next"><span>${this._t("club.next_match")}</span><strong>${c.home_team} – ${c.away_team}</strong><small>${c.date||""}</small></div>`:""}
      <div class="clb-kpis">
        <div><strong>${a.length}</strong><span>${this._t("club.squad")}</span></div>
        <div><strong>${s.length}</strong><span>${this._t("club.injuries")}</span></div>
        <div><strong>${r.length}</strong><span>${this._t("club.transfers")}</span></div>
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
    </div>`}_renderSquadAnalysis(e){const t=(0,Kt.Fn)(e);return t.lines.length?i.qy`<section class="clb-analysis">
      <div class="clb-title">${this._t("club.squad_analysis")}</div>
      <div class="clb-analysis-grid">${t.lines.map(e=>i.qy`<div><strong>${e.count}</strong><span>${this._t(`club.${String(e.position).toLowerCase()}s`)}</span>${null!=e.averageAge?i.qy`<small>Ø ${e.averageAge.toFixed(1)} ${this._t("club.years_short")}</small>`:""}${e.value?i.qy`<small>${this._formatValue(e.value)}</small>`:""}</div>`)}</div>
      ${t.youngest||t.oldest?i.qy`<div class="clb-age-extremes">
        ${t.youngest?i.qy`<span>${this._t("club.youngest")}<b>${t.youngest.name} · ${t.youngest.age}</b></span>`:""}
        ${t.oldest?i.qy`<span>${this._t("club.oldest")}<b>${t.oldest.name} · ${t.oldest.age}</b></span>`:""}
      </div>`:""}
      ${t.thin.length?i.qy`<small class="clb-thin">⚠ ${this._t("club.thin_positions")}: ${t.thin.map(e=>this._t(`club.${String(e.position).toLowerCase()}s`)).join(", ")}</small>`:""}
    </section>`:""}_renderInjuryCenter(e){const t=(0,Kt.V5)(e);return t.length?i.qy`<section class="clb-section clb-injuries">
      <div class="clb-title">${this._t("club.injury_center")} <b>${t.length}</b></div>
      ${t.map(e=>i.qy`<div class="clb-injury">
        <span class="clb-injury-icon">✚</span><div><strong>${e.player}</strong><small>${this._positionLabel(e.position)||e.type||this._t("club.unavailable")}</small></div>
        ${e.expected_return?i.qy`<span class="clb-return"><small>${this._t("club.expected_return")}</small>${this._returnLabel(e.expected_return)}</span>`:""}
      </div>`)}
    </section>`:""}_toggleComparison(e){const t=String(e?.id??e?.name??""),a=this._comparisonPlayers||[],i=a.some(e=>String(e?.id??e?.name??"")===t);this._comparisonPlayers=i?a.filter(e=>String(e?.id??e?.name??"")!==t):[...a.slice(-1),e]}_renderPlayerComparison(){const e=this._comparisonPlayers||[];if(!e.length)return"";const t=(0,Kt.Tr)(e);return i.qy`<section class="clb-comparison">
      <div class="clb-comparison-head"><div class="clb-title">${this._t("club.player_comparison")}</div><button @click=${()=>{this._comparisonPlayers=[]}}>${this._t("club.clear")}</button></div>
      ${t?i.qy`
        <div class="clb-compare-names"><strong>${t.players[0].name}</strong><span>${this._t("match.vs")}</span><strong>${t.players[1].name}</strong></div>
        ${t.fields.map(e=>i.qy`<div class="clb-compare-row"><b>${this._comparisonValue(e,t.players[0][e])}</b><span>${this._t("age"===e?"club.age_label":"market_value"===e?"club.market_value":"appearances"===e?"club.appearances":"rating"===e?"club.rating":`stat.${e}`)}</span><b>${this._comparisonValue(e,t.players[1][e])}</b></div>`)}
      `:i.qy`<div class="clb-compare-pick"><span>${e[0].name}</span><small>${this._t("club.select_second_player")}</small></div>`}
    </section>`}_comparisonValue(e,t){return null==t||""===t?"–":"market_value"===e?this._formatValue(t):t}_positionLabel(e){const t=String(e||"").trim().toLowerCase(),a={goalkeeper:"goalkeeper",defender:"defender",midfielder:"midfielder",attacker:"attacker",forward:"attacker"};return a[t]?this._t(`club.position_${a[t]}`):e||""}_returnLabel(e){const t=String(e||"").trim(),a={"day to day":"day_to_day","about a week":"about_week","a few days":"few_days"};if(a[t.toLowerCase()])return this._t(`club.return_${a[t.toLowerCase()]}`);const i=t.match(/^(early|mid|late)\s+([a-z]+)(?:\s+(\d{4}))?$/i);if(!i)return t;const s=["january","february","march","april","may","june","july","august","september","october","november","december"].indexOf(i[2].toLowerCase())+1;if(!s)return t;const r=`${this._t(`month.${s}`)}${i[3]?` ${i[3]}`:""}`;return this._t(`club.return_${i[1].toLowerCase()}`).replace("{date}",r)}_transferTypeLabel(e){const t=String(e||"").trim().toLowerCase();return["loan","on loan","loan transfer"].includes(t)?this._t("club.transfer_loan"):["free","free transfer"].includes(t)?this._t("club.transfer_free"):"permanent"===t?this._t("club.transfer_permanent"):"contract"===t?this._t("club.transfer_contract"):e||""}_clubNameLabel(e){const t=String(e||"").trim().toLowerCase();return["free agent","without club","no club"].includes(t)?this._t("club.free_agent"):e||""}_transferFee(e){if(null!=e.fee&&""!==e.fee)return this._formatValue(e.fee);const t=String(e.fee_text||"").trim();return/[€£$]|\d/.test(t)?t:""}_renderPlayerDetail(){const e=this._selectedPlayer,t=this._selectedTransfer,a=(e,t)=>null!=t&&""!==t?i.qy`<div><span>${e}</span><strong>${t}</strong></div>`:"";return t?i.qy`<div class="clb-player-overlay" @click=${e=>{e.target===e.currentTarget&&this._closePlayerDetail()}}>
      <section class="clb-player-modal" role="dialog" aria-modal="true" aria-label=${t.player||this._t("club.transfers")}><button aria-label=${this._t("generic.close")} title=${this._t("generic.close")} @click=${()=>this._closePlayerDetail()}>×</button>
        ${t.photo?i.qy`<img src=${t.photo} alt="">`:i.qy`<div class="clb-transfer-avatar">${"in"===t.direction?"↓":"↑"}</div>`}<h3>${t.player}</h3><p>${"in"===t.direction?this._t("club.transfer_in"):this._t("club.transfer_out")}</p>
        <div class="clb-player-facts">${a(this._t("club.from"),this._clubNameLabel(t.from))}${a(this._t("club.to"),this._clubNameLabel(t.to))}${a(this._t("club.transfer_date"),(0,Kt.Bg)(t.date))}${a(this._t("club.transfer_type"),this._transferTypeLabel(t.type))}${a(this._t("club.transfer_fee"),this._transferFee(t))}</div>
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
    </style>`}_formatValue(e){return Number.isFinite(Number(e))?new Intl.NumberFormat((0,s.$c)(this.hass,this._config),{style:"currency",currency:"EUR",notation:"compact",maximumFractionDigits:1}).format(Number(e)):""}_renderProfile(e,t,a={}){const s=(e,t)=>t?i.qy`<span class="clb-chip"><span class="clb-ic">${e}</span>${t}</span>`:"",r=e.venue?`${e.venue}${e.venue_city?` · ${e.venue_city}`:""}`:"";return r||e.founded||t?i.qy`
      <div class="clb-profile">
        ${s("🏟️",r)}
        ${s("📅",e.founded?this._t("club.founded",{year:e.founded}):"")}
        ${s("👤",t||"")}
        ${(a.source_conflicts||[]).length?i.qy`
          <span class="clb-source-warning" title=${this._t("club.source_conflict_hint")}>
            ⚠ ${this._t("club.source_conflicts",{n:a.source_conflicts.length})}
          </span>`:""}
        ${Object.values(a.field_sources||{}).some(e=>e.overridden)?i.qy`
          <span class="clb-source-manual">✎ ${this._t("club.manual_overrides")}</span>`:""}
      </div>
    `:""}_renderSquad(e){const t=(0,Kt.YW)(e);if(!t.length)return"";const a=(0,Kt.J5)(e,this._squadQuery,this._positionFilter,this._availabilityFilter),s=(0,Kt.YW)(a),r=0==this._config.squad_collapsed?0:this._config.squad_preview??3,{groups:o,hidden:n}=this._squadExpanded?{groups:s,hidden:0}:(0,Kt.ws)(s,r),l=this._squadExpanded?0:(0,Kt.ws)(s,r).hidden;return i.qy`
      <div class="clb-section">
        <div class="clb-title">${this._t("club.squad")}</div>
        <div class="clb-squad-tools">
          <input type="search" placeholder=${this._t("club.search_players")} .value=${this._squadQuery} @input=${e=>{this._squadQuery=e.target.value}}>
          <select .value=${this._positionFilter} @change=${e=>{this._positionFilter=e.target.value}}><option value="all">${this._t("club.all_positions")}</option>${t.map(e=>i.qy`<option value=${e.pos}>${this._t(e.key)}</option>`)}</select>
          <select .value=${this._availabilityFilter} @change=${e=>{this._availabilityFilter=e.target.value}}><option value="all">${this._t("club.all_availability")}</option><option value="available">${this._t("club.available")}</option><option value="unavailable">${this._t("club.unavailable")}</option></select>
        </div>
        ${s.length?"":i.qy`<div class="clb-no-results">${this._t("club.no_players_found")}</div>`}
        ${o.map(({key:e,players:t})=>i.qy`
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
        ${(l>0||this._squadExpanded)&&r>0?i.qy`
          <button class="clb-more" @click=${()=>{this._squadExpanded=!this._squadExpanded}}>
            ${this._squadExpanded?this._t("club.show_less"):this._t("club.show_all",{n:l})}
          </button>
        `:""}
      </div>
    `}_renderTransfers(e,t=null){const a=(0,Kt.Mn)(e);if(!a.all)return"";const s=["in","out"].includes(this._transferFilter)?this._transferFilter:"all",r=(0,Kt.VK)(e,s),o=(0,Kt.BD)(r,t??this._config.max_transfers??8),n=(0,Kt.CN)(e),l=(e,t,a)=>i.qy`
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
        ${n.feeCoverage||n.loans||n.free?i.qy`<div class="clb-transfer-summary">
          ${n.feeCoverage?i.qy`<div><span>${this._t("club.spent")}</span><b>${this._formatValue(n.spent)}</b></div><div><span>${this._t("club.income")}</span><b>${this._formatValue(n.income)}</b></div><div><span>${this._t("club.balance")}</span><b class=${n.balance>=0?"positive":"negative"}>${n.balance>0?"+":""}${this._formatValue(n.balance)}</b></div>`:""}
          ${n.loans?i.qy`<small>${this._t("club.loans")}: ${n.loans}</small>`:""}${n.free?i.qy`<small>${this._t("club.free_transfers")}: ${n.free}</small>`:""}
        </div>`:""}
        ${Object.keys(n.windows).length>1?i.qy`<div class="clb-windows">${Object.entries(n.windows).sort().reverse().map(([e,t])=>{const[a,s]=e.split("-");return i.qy`<span>${this._t(`club.${s}_window`)} ${a}<b>${t}</b></span>`})}</div>`:""}
        ${o.map(e=>i.qy`
          <div class="clb-transfer" role="button" tabindex="0" data-focus-key=${this._detailFocusKey("transfer",e)} @click=${t=>this._selectTransfer(e,t.currentTarget)} @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._selectTransfer(e,t.currentTarget))}}>
            <span class="clb-dir ${e.direction}" title="${"in"===e.direction?this._t("club.transfer_in"):this._t("club.transfer_out")}"
                  aria-label="${"in"===e.direction?this._t("club.transfer_in"):this._t("club.transfer_out")}">${"in"===e.direction?"↓":"↑"}</span>
            <div class="clb-tinfo">
              <span class="clb-tplayer">${e.player}</span>
              <span class="clb-tclubs">${this._clubNameLabel((0,Kt.u7)(e))}</span>
            </div>
            <span class="clb-ttype">${e.type&&"N/A"!==e.type?this._transferTypeLabel(e.type):""}</span>
            <span class="clb-tdate">${(0,Kt.Bg)(e.date)}</span>
            <span class="clb-open">›</span>
          </div>
        `)}
      </div>
    `}getCardSize(){return 8}static getConfigElement(){return document.createElement("soccer-live-club-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_"}}static get styles(){return[z,Ue,i.AH`.clb-profile{display:flex;flex-wrap:wrap;gap:8px;padding:4px 14px 10px;}.clb-source-warning,.clb-source-manual{display:inline-flex;align-items:center;padding:7px 10px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface);font-size:10px;font-weight:800}.clb-source-warning{color:var(--cl-warning)}.clb-source-manual{color:var(--cl-accent)}.clb-quality{display:flex;justify-content:space-between;margin:0 14px 8px;padding:5px 9px;border-radius:8px;background:var(--cl-card-2,rgba(255,255,255,.03));font-size:9px;color:var(--cl-text-2)}.clb-quality span{color:var(--cl-success,#10b981)}.clb-quality:not(.ready) span{color:var(--cl-warning,#f59e0b)}.clb-radar{display:grid;gap:7px}.clb-radar>div{display:grid;grid-template-columns:78px 1fr 32px 15px;align-items:center;gap:7px;font-size:10px;color:var(--cl-text-2)}.clb-radar i{height:7px;border-radius:9px;background:rgba(148,163,184,.18);overflow:hidden}.clb-radar i b{display:block;height:100%;background:var(--cl-success,#10b981)}.clb-radar .thin i b{background:var(--cl-warning,#f59e0b)}.clb-radar strong{color:var(--cl-text);text-align:right}.clb-radar em{font-style:normal}.clb-lineup>small{display:block;text-align:center;color:var(--cl-text-2);margin-bottom:8px}.clb-lineup>div{display:flex;justify-content:center;gap:5px;margin:6px 0}.clb-lineup button{border:1px solid var(--cl-divider);border-radius:10px;padding:5px 7px;background:var(--cl-card-2);color:var(--cl-text);font-size:9px;cursor:pointer}.clb-selection{display:grid;grid-template-columns:1fr 1fr;gap:12px}.clb-selection>div{display:flex;flex-direction:column;gap:4px}.clb-selection strong{color:var(--cl-accent);font-size:10px}.clb-selection span{font-size:10px;color:var(--cl-text)}.clb-news{display:grid;gap:0}.clb-news>div{display:grid;grid-template-columns:24px 1fr auto;align-items:center;padding:7px 0;border-bottom:1px solid var(--cl-divider)}.clb-news>div:last-child{border:0}.clb-news b{color:var(--cl-accent)}.clb-news span{display:flex;flex-direction:column}.clb-news strong{font-size:10px;color:var(--cl-text)}.clb-news small,.clb-news time{font-size:8px;color:var(--cl-text-2)}.clb-automations{display:grid;gap:5px}.clb-automations>div{display:flex;justify-content:space-between;align-items:center;padding:6px;border-radius:8px;background:var(--cl-card-2)}.clb-automations span{display:flex;flex-direction:column}.clb-automations strong{font-size:10px;color:var(--cl-text)}.clb-automations small{font-size:8px;color:var(--cl-text-2)}.clb-automations button{border:1px solid var(--cl-accent);border-radius:7px;background:transparent;color:var(--cl-accent);font-size:9px;padding:4px 7px;cursor:pointer}.clb-player-recent{display:grid;gap:4px;margin-top:10px}.clb-player-recent>strong{color:var(--cl-text-2);font-size:10px;text-transform:uppercase}.clb-player-recent span{display:flex;justify-content:space-between;color:var(--cl-text);font-size:10px}.clb-collapse{margin:8px 14px;border:1px solid var(--cl-divider);border-radius:12px;overflow:hidden}.clb-collapse>summary{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;cursor:pointer;list-style:none;color:var(--cl-text-2);font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.clb-collapse>summary::-webkit-details-marker{display:none}.clb-collapse>summary span{font-size:16px;color:var(--cl-accent)}.clb-collapse[open]>summary{border-bottom:1px solid var(--cl-divider)}.clb-collapse>.clb-section,.clb-collapse>.clb-analysis,.clb-collapse>.clb-records{margin:0;padding:8px 12px 10px;background:transparent}.clb-collapse .clb-title{display:none}.clb-matchday{margin:2px 14px 10px;padding:11px;border:1px solid var(--cl-divider);border-radius:13px;background:linear-gradient(135deg,var(--cl-accent-soft,rgba(99,102,241,.12)),var(--cl-card-2,rgba(255,255,255,.03)))}.clb-matchday.live{border-color:var(--cl-live,#ef4444)}.clb-matchday-head{display:flex;justify-content:space-between;align-items:center;color:var(--cl-text-2);font-size:9px;text-transform:uppercase;letter-spacing:.08em;font-weight:800}.clb-matchday-head b{padding:3px 7px;border-radius:99px;color:var(--cl-accent);background:var(--cl-accent-soft,rgba(99,102,241,.12))}.clb-matchday.live .clb-matchday-head b{color:var(--cl-live,#ef4444)}.clb-matchday-fixture{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:9px;margin-top:10px;color:var(--cl-text);font-size:12px;font-weight:700}.clb-matchday-fixture span:last-child{text-align:right}.clb-matchday-fixture strong{font-size:17px;white-space:nowrap;color:var(--cl-accent)}.clb-matchday-meta{display:flex;flex-wrap:wrap;gap:5px 10px;margin-top:8px;color:var(--cl-text-2);font-size:9px}.clb-impact{display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:5px;margin-top:9px;padding-top:8px;border-top:1px solid var(--cl-divider)}.clb-impact span{display:flex;flex-direction:column;color:var(--cl-text-2);font-size:8px}.clb-impact b{color:var(--cl-text);font-size:11px}.clb-dashboard{margin:0 14px 8px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03));}.clb-next{display:grid;grid-template-columns:1fr auto;gap:2px 8px;margin-bottom:9px;font-size:11px;}.clb-next span,.clb-next small{color:var(--cl-text-2);}.clb-next strong{color:var(--cl-text);}.clb-next small{grid-column:1/-1;}.clb-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;}.clb-kpis div{display:flex;flex-direction:column;align-items:center;padding:7px;border-radius:8px;background:rgba(255,255,255,.035);}.clb-kpis strong{color:var(--cl-accent);font-size:17px;}.clb-kpis span{color:var(--cl-text-2);font-size:9px;text-transform:uppercase;}.clb-market-summary{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px;padding-top:8px;border-top:1px solid var(--cl-divider);}.clb-market-summary div{display:flex;flex-direction:column}.clb-market-summary span,.clb-market-summary small{color:var(--cl-text-2);font-size:9px}.clb-market-summary strong{color:var(--cl-text);font-size:14px}.clb-market-summary small{grid-column:1/-1}.clb-market-dist{margin-top:8px;display:grid;gap:5px}.clb-market-row{display:grid;grid-template-columns:65px 1fr auto;gap:6px;align-items:center;font-size:9px;color:var(--cl-text-2)}.clb-market-row i{height:5px;border-radius:99px;background:rgba(148,163,184,.15);overflow:hidden}.clb-market-row i b{display:block;height:100%;background:var(--cl-accent)}.clb-market-row strong{font-size:9px;color:var(--cl-text)}.clb-top-values{display:grid;gap:3px;margin-top:4px}.clb-top-values span{display:flex;justify-content:space-between;color:var(--cl-text-2);font-size:9px}.clb-top-values b{color:var(--cl-accent)}.clb-form{display:flex;align-items:center;gap:5px;margin-top:9px;color:var(--cl-text-2);font-size:10px;}.clb-form b{display:grid;place-items:center;width:21px;height:21px;border-radius:50%;color:white;}.clb-form .w{background:#16a34a}.clb-form .d{background:#64748b}.clb-form .l{background:#dc2626}.clb-season{margin:8px 14px;padding:11px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-section-head{display:flex;align-items:end;justify-content:space-between}.clb-section-head div{display:flex;flex-direction:column}.clb-section-head span,.clb-section-head small{font-size:9px;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:.06em}.clb-section-head strong{font-size:15px;color:var(--cl-text)}.clb-season svg{display:block;width:100%;height:58px;margin:5px 0;overflow:visible}.clb-season polyline{fill:none;stroke:var(--cl-accent);stroke-width:2;vector-effect:non-scaling-stroke}.clb-season circle{vector-effect:non-scaling-stroke;stroke:var(--cl-bg);stroke-width:1}.clb-season circle.w{fill:#16a34a}.clb-season circle.d{fill:#64748b}.clb-season circle.l{fill:#dc2626}.clb-season-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}.clb-season-stats span{display:flex;flex-direction:column;color:var(--cl-text-2);font-size:9px}.clb-season-stats b{font-size:12px;color:var(--cl-text)}.clb-analysis,.clb-comparison{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-analysis-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.clb-analysis-grid div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:rgba(255,255,255,.035)}.clb-analysis-grid strong{font-size:16px;color:var(--cl-accent)}.clb-analysis-grid span,.clb-analysis-grid small{font-size:8px;color:var(--cl-text-2);overflow:hidden;text-overflow:ellipsis}.clb-age-extremes{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:7px}.clb-age-extremes span{display:flex;flex-direction:column;font-size:8px;color:var(--cl-text-2)}.clb-age-extremes b{font-size:10px;color:var(--cl-text)}.clb-thin{display:block;margin-top:7px;color:var(--cl-text-2);font-size:8px}.clb-record-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.clb-record-grid div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:rgba(255,255,255,.035)}.clb-record-grid strong{font-size:16px;color:var(--cl-accent)}.clb-record-grid span{font-size:8px;color:var(--cl-text-2)}.clb-biggest,.clb-split{display:flex;justify-content:space-between;gap:8px;margin-top:7px;color:var(--cl-text-2);font-size:9px}.clb-biggest b,.clb-split b{color:var(--cl-text)}.clb-favorites{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-favorite-grid{display:flex;gap:6px;overflow-x:auto}.clb-favorite-grid button{display:grid;grid-template-columns:30px minmax(70px,1fr);grid-template-rows:auto auto;gap:0 6px;align-items:center;min-width:145px;padding:7px;border:1px solid var(--cl-divider);border-radius:9px;background:rgba(255,255,255,.025);color:var(--cl-text);text-align:left;cursor:pointer}.clb-favorite-grid img,.clb-favorite-grid button>span{grid-row:1/3;width:30px;height:30px;border-radius:50%;object-fit:cover;display:grid;place-items:center;background:var(--cl-accent-soft);color:var(--cl-accent)}.clb-favorite-grid strong{font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.clb-favorite-grid small{font-size:8px;color:var(--cl-text-2)}.clb-changes{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-changes>div:last-child{display:flex;flex-wrap:wrap;gap:5px}.clb-changes span{display:inline-flex;align-items:center;gap:5px;padding:5px 8px;border:1px solid var(--cl-divider);border-radius:99px;color:var(--cl-text);font-size:9px}.clb-changes span b{color:var(--cl-accent);font-size:12px}.clb-changes span.injury_added b{color:var(--cl-live,#ef4444)}.clb-changes span.player_available b{color:var(--cl-green,#22c55e)}.clb-changes small{color:var(--cl-text-2)}.clb-injuries .clb-title b{display:inline-grid;place-items:center;min-width:17px;height:17px;margin-left:4px;border-radius:50%;background:rgba(239,68,68,.15);color:var(--cl-live,#ef4444)}.clb-injury{display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--cl-divider)}.clb-injury-icon{color:var(--cl-live,#ef4444)}.clb-injury>div{display:flex;flex:1;min-width:0;flex-direction:column}.clb-injury strong{font-size:11px;color:var(--cl-text)}.clb-injury small{font-size:9px;color:var(--cl-text-2)}.clb-return{display:flex;flex-direction:column;text-align:right;color:var(--cl-text);font-size:9px}.clb-comparison-head{display:flex;align-items:center;justify-content:space-between}.clb-comparison-head button{border:0;background:transparent;color:var(--cl-text-2);font-size:9px;cursor:pointer}.clb-compare-pick{display:flex;justify-content:space-between;padding:8px;border-radius:8px;background:rgba(255,255,255,.035);color:var(--cl-text);font-size:10px}.clb-compare-pick small{color:var(--cl-text-2)}.clb-compare-names,.clb-compare-row{display:grid;grid-template-columns:1fr 60px 1fr;gap:5px;align-items:center;text-align:center}.clb-compare-names{margin-bottom:6px;color:var(--cl-text);font-size:11px}.clb-compare-names span{color:var(--cl-text-2);font-size:8px}.clb-compare-row{padding:4px;border-top:1px solid var(--cl-divider)}.clb-compare-row b{color:var(--cl-text);font-size:10px}.clb-compare-row span{color:var(--cl-text-2);font-size:8px}.clb-chip{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:600;color:var(--cl-text,#e2e8f0);background:var(--cl-card-2,rgba(255,255,255,0.03));padding:5px 10px;border-radius:8px;}.clb-ic{font-size:13px;}.clb-section{padding:8px 14px 4px;}.clb-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);margin:8px 0 6px;}.clb-pos{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-accent,#6366f1);margin:8px 0 3px;}.clb-player{display:flex;align-items:baseline;gap:8px;padding:4px 2px;font-size:12px;border-radius:6px;cursor:pointer;}.clb-player:hover,.clb-player:focus{background:rgba(255,255,255,.05);outline:none}.clb-num{min-width:20px;text-align:center;font-weight:800;font-variant-numeric:tabular-nums;color:var(--cl-text-2,#94a3b8);font-size:11px;}.clb-pname{font-weight:600;color:var(--cl-text,#e2e8f0);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.clb-age{font-size:10px;color:var(--cl-text-2,#94a3b8);}.clb-value{min-width:55px;text-align:right;font-size:10px;font-weight:700;color:var(--cl-accent);}.clb-squad-tools{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:5px;margin-bottom:7px}.clb-squad-tools input,.clb-squad-tools select{min-width:0;padding:6px;border:1px solid var(--cl-divider);border-radius:7px;background:var(--cl-card-2,rgba(255,255,255,.03));color:var(--cl-text);font-size:9px}.clb-no-results{padding:14px;text-align:center;color:var(--cl-text-2);font-size:10px}.clb-favorite-toggle{display:grid;place-items:center;width:22px;height:22px;padding:0;border:1px solid var(--cl-divider);border-radius:50%;background:transparent;color:var(--cl-text-2);cursor:pointer}.clb-favorite-toggle.sel{border-color:#f59e0b;color:#f59e0b;background:rgba(245,158,11,.12)}.clb-compare-toggle{display:grid;place-items:center;width:22px;height:22px;padding:0;border:1px solid var(--cl-divider);border-radius:50%;background:transparent;color:var(--cl-text-2);cursor:pointer}.clb-compare-toggle.sel{border-color:var(--cl-accent);background:var(--cl-accent-soft);color:var(--cl-accent)}.clb-transfer{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:12px;border-bottom:1px solid var(--cl-divider,rgba(255,255,255,0.04));cursor:pointer;}.clb-transfer:hover,.clb-transfer:focus{background:rgba(255,255,255,.035);outline:none}.clb-open{color:var(--cl-text-2);font-size:17px}.clb-dir{font-size:14px;font-weight:900;flex-shrink:0;width:14px;text-align:center;}.clb-dir.in{color:var(--cl-green,#22c55e);}.clb-dir.out{color:var(--cl-live,#ef4444);}.clb-tinfo{display:flex;flex-direction:column;flex:1;min-width:0;}.clb-tplayer{font-weight:600;color:var(--cl-text,#e2e8f0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.clb-tclubs{font-size:10px;color:var(--cl-text-2,#94a3b8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.clb-ttype{font-size:10px;font-weight:700;color:var(--cl-text-2,#94a3b8);white-space:nowrap;}.clb-tdate{font-size:10px;color:var(--cl-text-2,#94a3b8);font-variant-numeric:tabular-nums;white-space:nowrap;}.clb-more{margin:8px 0 2px;padding:5px 12px;border-radius:8px;cursor:pointer;border:1px solid var(--cl-divider,rgba(255,255,255,0.12));background:transparent;color:var(--cl-accent,#6366f1);font-size:11px;font-weight:700;}.clb-transfers-head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;}.clb-transfer-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:4px 0 9px}.clb-transfer-summary div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-transfer-summary span,.clb-transfer-summary small{font-size:9px;color:var(--cl-text-2)}.clb-transfer-summary b{font-size:12px;color:var(--cl-text)}.clb-transfer-summary b.positive{color:var(--cl-green,#22c55e)}.clb-transfer-summary b.negative{color:var(--cl-live,#ef4444)}.clb-windows{display:flex;gap:5px;overflow-x:auto;margin-bottom:7px}.clb-windows span{display:inline-flex;gap:6px;white-space:nowrap;padding:4px 7px;border:1px solid var(--cl-divider);border-radius:99px;color:var(--cl-text-2);font-size:9px}.clb-windows b{color:var(--cl-accent)}.clb-filters{display:inline-flex;gap:4px;}.clb-filter{padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px;font-weight:700;border:1px solid var(--cl-divider,rgba(255,255,255,0.12));background:transparent;color:var(--cl-text-2,#94a3b8);}.clb-filter.sel{background:var(--cl-accent-soft,rgba(99,102,241,0.12));color:var(--cl-accent,#6366f1);border-color:var(--cl-accent,#6366f1);}.clb-note{padding:8px 14px 12px;font-size:10px;color:var(--cl-text-2,#94a3b8);opacity:0.8;text-align:center;}@media(max-width:420px){.clb-analysis-grid,.clb-record-grid{grid-template-columns:repeat(2,1fr)}.clb-age-extremes{grid-template-columns:1fr}.clb-ttype{display:none}.clb-squad-tools{grid-template-columns:1fr 1fr}.clb-squad-tools input{grid-column:1/-1}}`]}}customElements.get("soccer-live-club")||customElements.define("soccer-live-club",Ut);class Jt extends i.WF{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e)}getCardSize(){return 2}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-diagnostics-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_",card_type:"diagnostics"}}static get styles(){return[z,Ue,Mt,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:20px;overflow:hidden;}.content{position:relative;z-index:1;padding:16px;}.header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;}.title{font-size:15px;font-weight:900;}.status{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:999px;font-size:11px;font-weight:800;text-transform:uppercase;border:1px solid var(--cl-chip-border);background:var(--cl-chip-bg);}.status.ok{color:var(--cl-green);}.status.error{color:var(--cl-live);}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;}.metric{min-width:0;padding:10px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface);}.label{color:var(--cl-text-2);font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;}.value{margin-top:4px;color:var(--cl-text);font-size:13px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.error-box{margin-top:10px;padding:10px;border:1px solid rgba(239,68,68,0.35);border-radius:10px;color:var(--cl-live);background:rgba(239,68,68,0.10);font-size:12px;}.quality-bar{height:7px;margin-top:8px;overflow:hidden;border-radius:99px;background:var(--cl-divider);}.quality-bar>i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--cl-live),var(--cl-warning),var(--cl-green));}.recommendations{margin-top:10px;padding:10px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface);}.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:7px;}.chip{display:inline-flex;align-items:center;min-height:22px;padding:3px 8px;border:1px solid var(--cl-chip-border);border-radius:999px;background:var(--cl-chip-bg);color:var(--cl-text);font-size:11px;font-weight:800;}.capabilities{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin-top:8px;}.capability{display:flex;align-items:center;gap:7px;min-width:0;padding:7px 8px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface);font-size:10px;}.capability b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.capability.available i{color:var(--cl-green);}.capability.pending i{color:var(--cl-warning);}.capability.error i,.capability.unavailable i{color:var(--cl-text-2);}.checklist{display:grid;gap:6px;margin-top:8px;}.check{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 8px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface);font-size:11px;}.check b{text-transform:uppercase;font-size:9px;letter-spacing:.05em;}.check.pass b{color:var(--cl-green);}.check.warning b,.check.pending b{color:var(--cl-warning);}.check.fail b{color:var(--cl-live);}@media (max-width:420px){.grid,.capabilities{grid-template-columns:1fr;}}`]}_format(e){return null==e||""===e?"-":Array.isArray(e)?String(e.length):String(e)}_setupState(e){return e&&Object.values(this.hass?.states||{}).find(t=>t?.attributes?.config_entry_id===e&&null!=t?.attributes?.configured_entities)||null}_age(e){const t=(0,s.n1)(e);if(!t)return"-";const a=Math.max(0,Math.round((Date.now()-t.getTime())/6e4));if(a<1)return this._t("time.now");if(a<60)return`${a}m`;const i=Math.round(a/60);return i<48?`${i}h`:`${Math.round(i/24)}d`}_recommendedCards(e){return({team_match:["team","countdown","match_center","lineup","timeline","team_form"],team_matches:["matches","ticker","live_match","team_form"],team_matches_mixed:["team_competitions","season_overview","matches","ticker","team_form"],all_matches_today:["matches","ticker","live_match"],standings:["standings","mini_standings"],top_scorers:["scorers"],bracket:["bracket"],news:["news"],commentary:["commentary","timeline"]}[e]||[]).map(e=>this._t(`diag.card_${e}`))}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return R("!",this._t("ui.entity_not_found"),this._config.entity,this._t("ui.check_entity_config"));const t=e.attributes||{},a=t.api_status||"unknown",s="ok"===a?"ok":"error",r=this._t(`diag.status_${["ok","error"].includes(a)?a:"unknown"}`),o=t.last_successful_update||t.last_request_time,n=t.sensor_type||"unknown",l=this._recommendedCards(n),c=t.data_quality||{},d=t.source_blend||{},p=this._setupState(t.config_entry_id),h=p?.attributes?.installation_check||{},u=t.request_priority_plan||{},g=e=>({lineup:"lineups",prematch:"predictions"}[e]||e),m=t.club?.source_conflicts?.length||0,f=t.capability_matrix||p?.attributes?.capability_matrix||{},_=t.season_transition||{},v=[[this._t("diag.setup_status"),p?.state],[this._t("diag.sensor"),n],[this._t("diag.state"),e.state],[this._t("diag.matches"),t.schedule_match_count??t.total_matches],[this._t("diag.live"),t.schedule_live_count??t.live_matches_count],[this._t("diag.upcoming"),t.schedule_upcoming_count??t.upcoming_matches_count],[this._t("diag.recent"),t.schedule_recent_count??t.finished_matches_count],[this._t("diag.requests"),t.request_count],[this._t("diag.polling"),null!=t.effective_poll_interval?`${t.effective_poll_interval}s · ${String(t.polling_reason||"normal").replaceAll("_"," ")}`:null],[this._t("diag.last_update"),o],[this._t("diag.sensor_age"),this._age(o)],[this._t("quality.completeness"),null!=c.average_completeness?`${c.average_completeness}%`:null],[this._t("quality.conflicts"),c.conflicts?.length],[this._t("diag.club_source_conflicts"),m||null],[this._t("diag.season_status"),_.status],[this._t("diag.archive_sync"),p?.attributes?.archive_sync_status],[this._t("diag.coordinator_cycles"),p?.attributes?.coordinator_cycle_count],[this._t("diag.scheduled_refreshes"),p?.attributes?.scheduled_refreshes],...d.secondary?[[this._t("diag.source_blend"),`${d.primary} + ${d.secondary}`],[this._t("diag.enriched_fields"),d.enriched_fields],[this._t("quality.conflicts"),d.conflicts]]:[]];return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="content">
          <div class="header">
            <div class="title">${this._config.title||this._t("card.diagnostics")}</div>
            <div class="status ${s}" title=${a}>${r}</div>
          </div>
          <div class="grid">
            ${v.map(([e,t])=>i.qy`
              <div class="metric">
                <div class="label">${e}</div>
                <div class="value" title="${this._format(t)}">${this._format(t)}</div>
              </div>
            `)}
          </div>
          ${l.length?i.qy`
            <div class="recommendations">
              <div class="label">${this._t("editor.diag_recommended_cards")}</div>
              <div class="chips">
                ${l.map(e=>i.qy`<span class="chip">${e}</span>`)}
              </div>
            </div>
          `:""}
          ${h.checks?.length?i.qy`
            <div class="recommendations">
              <div class="label">${this._t("diag.installation_check")} · ${h.score??0}%</div>
              <div class="checklist">${h.checks.map(e=>i.qy`
                <div class="check ${e.status}">
                  <span>${this._t(`setup.${e.code}`)}</span>
                  <b>${this._t(`setup.status_${e.status}`)}</b>
                </div>
              `)}</div>
            </div>
          `:""}
          ${u.priority?.length?i.qy`
            <div class="recommendations">
              <div class="label">${this._t("diag.request_plan")} · ${this._t(`quota.${u.quota_level||"normal"}`)}</div>
              <div class="chips">
                ${u.allowed.map(e=>i.qy`<span class="chip">✓ ${this._t(`capability.${g(e)}`)}</span>`)}
                ${u.deferred.map(e=>i.qy`<span class="chip">⏸ ${this._t(`capability.${g(e)}`)}</span>`)}
              </div>
            </div>
          `:""}
          ${null!=c.average_completeness?i.qy`
            <div class="recommendations">
              <div class="label">${this._t("quality.coverage")} · ${this._t(`quality.${c.level||"limited"}`)}</div>
              <div class="quality-bar"><i style="width:${c.average_completeness}%"></i></div>
              ${c.issues?.length?i.qy`<div class="chips">${c.issues.map(e=>i.qy`<span class="chip">⚠ ${this._t(`quality.issue_${e}`)}</span>`)}</div>`:""}
            </div>
          `:""}
          ${Object.keys(f).length?i.qy`
            <div class="recommendations">
              <div class="label">${this._t("diag.capabilities")}</div>
              <div class="capabilities">${Object.entries(f).map(([e,t])=>i.qy`
                <div class="capability ${t.status}" title=${this._t(`capability.reason_${t.reason}`)}>
                  <i>${t.available?"●":"pending"===t.status?"◐":"○"}</i>
                  <b>${this._t(`capability.${e}`)}</b>
                </div>
              `)}</div>
            </div>
          `:""}
          ${jt(t.data_alerts,{t:(e,t)=>this._t(e,t),compact:1})}
          ${t.last_error?i.qy`<div class="error-box">${t.last_error}</div>`:""}
        </div>
      </ha-card>
    `}}customElements.get("soccer-live-diagnostics")||customElements.define("soccer-live-diagnostics",Jt);class Qt extends i.WF{static get properties(){return{hass:{},_config:{},_sel:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e),this._sel=null}getCardSize(){return 1}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-ticker-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_all_today",card_type:"ticker"}}_formatMatchTime(e){return(0,s.DK)(e,(0,s.$c)(this.hass,this._config))||"vs"}_isSel(e){return this._sel&&this._sel.home_team===e.home_team&&this._sel.away_team===e.away_team}_toggleSel(e){this._sel=this._isSel(e)?null:e}_renderItem(e){const t="in"===e.state,a="post"===e.state,r=this._isSel(e),o=e.league_name&&"N/A"!==e.league_name?Se(e.league_name,(0,s.$c)(this.hass,this._config)):null;return i.qy`
      <div class="tick-item ${t?"live":""} ${a?"ft":""} ${r?"selected":""}"
           @click=${()=>this._toggleSel(e)}>
        <div class="tick-team">
          ${e.home_logo?i.qy`<img class="tick-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="tick-name">${e.home_team||"?"}</span>
        </div>
        <div class="tick-mid">
          ${t?i.qy`<span class="tick-live"><span class="live-dot"></span>${e.clock||""}</span>`:""}
          ${t||a?i.qy`<span class="tick-score">${S(e.home_score)}–${S(e.away_score)}</span>`:i.qy`<span class="tick-time">${this._formatMatchTime(e.date)}</span>`}
          ${a?i.qy`<span class="tick-ft">${this._t("status.ft")}</span>`:""}
        </div>
        <div class="tick-team">
          ${e.away_logo?i.qy`<img class="tick-logo" src="${e.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="tick-name">${e.away_team||"?"}</span>
        </div>
        ${o?i.qy`<div class="tick-comp">${o}</div>`:""}
      </div>
    `}_renderDetail(){const e=this._sel;if(!e)return"";const t="in"===e.state,a="post"===e.state,r=e.league_name&&"N/A"!==e.league_name?Se(e.league_name,(0,s.$c)(this.hass,this._config)):null;return i.qy`
      <div class="tick-detail">
        <div class="td-row">
          <div class="td-side">
            ${e.home_logo?i.qy`<img class="td-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="td-name">${e.home_team||"?"}</span>
          </div>
          <div class="td-center">
            ${t?i.qy`
              <span class="td-live"><span class="live-dot"></span>${e.clock||""}</span>
              <span class="td-score">${S(e.home_score)}–${S(e.away_score)}</span>
            `:a?i.qy`
              <span class="td-score">${S(e.home_score)}–${S(e.away_score)}</span>
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
    `}render(){if(!this.hass||!this._config)return i.qy``;const e=this._config.entity,t=this.hass.states[e];let a=null;if(t)if("unavailable"===t.state){const t=Z.get(e);if(!t?.data?.matches)return R("📡",this._t("ui.sensor_unavailable"),"",this._t("ui.restart_ha"));a=t.data}else a=t.attributes,Z.set(e,a);else{const t=Z.get(e);if(!t?.data?.matches)return R("⚠️",this._t("ui.entity_not_found"),e,this._t("ui.check_entity_config"));a=t.data}const s=a.matches||[];if(!s.length)return K(a,e=>this._t(e),()=>i.qy`<ha-card><div class="empty">${this._t("ui.no_match_data")}</div></ha-card>`);const r=dt(s);let o="live"===this._config.filter?r.filter(e=>"in"===e.state):r;const n=this._config.competition_filter?.toLowerCase();if(n){const e=o.filter(e=>(e.competition_name||e.league_name||"").toLowerCase().includes(n));e.length&&(o=e)}if(!o.length)return this._config.hide_when_empty?i.qy`<style>:host{display:none!important}</style>`:i.qy`<ha-card><div class="empty">${this._t("ui.no_live_match")}</div></ha-card>`;const l=this._config.auto_scroll&&o.length>1,c={slow:28,normal:55,fast:110}[this._config.scroll_speed||"normal"]??55,d=Math.round(176*o.length/c),p=l?[...o,...o]:o;return i.qy`
      <ha-card>
        <div class="ticker-wrap ${l?"auto":""} ${this._sel?"paused":""}">
          <div class="ticker-scroll" style="${l?`animation-duration:${d}s`:""}">
            ${p.map(e=>this._renderItem(e))}
          </div>
        </div>
        ${this._renderDetail()}
      </ha-card>
    `}static get styles(){return[z,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);padding:0;border-radius:16px;overflow:hidden;}.ticker-wrap{overflow-x:auto;scrollbar-width:none;padding:5px 6px;}.ticker-wrap::-webkit-scrollbar{display:none;}.ticker-wrap.auto{overflow-x:hidden;}.ticker-scroll{display:flex;gap:6px;width:max-content;}.ticker-wrap.auto .ticker-scroll{animation:ticker-slide linear infinite;}.ticker-wrap.auto:hover .ticker-scroll,.ticker-wrap.paused .ticker-scroll{animation-play-state:paused;}@keyframes ticker-slide{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}.tick-item{display:flex;flex-direction:column;gap:1px;padding:5px 8px;background:var(--cl-surface);border:1px solid var(--cl-divider);border-radius:10px;width:155px;flex-shrink:0;box-sizing:border-box;cursor:pointer;transition:border-color 0.15s,background 0.15s;}.tick-item:hover{border-color:var(--cl-accent,#60a5fa);}.tick-item.selected{border-color:var(--cl-accent,#60a5fa);background:rgba(96,165,250,0.08);}.tick-item.live{border-color:rgba(239,68,68,0.5);background:rgba(239,68,68,0.07);}.tick-item.live.selected{border-color:var(--cl-live,#ef4444);background:rgba(239,68,68,0.14);}.tick-item.ft{opacity:0.72;}.tick-team{display:flex;align-items:center;gap:5px;min-width:0;}.tick-logo{width:14px;height:14px;object-fit:contain;flex-shrink:0;}.tick-name{font-size:11px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;}.tick-mid{display:flex;align-items:center;justify-content:center;gap:4px;padding:1px 0;}.tick-score{font-size:13px;font-weight:900;letter-spacing:0.5px;color:var(--cl-text);}.tick-item.live .tick-score{color:var(--cl-live,#ef4444);}.tick-time{font-size:10px;font-weight:600;color:var(--cl-accent,#60a5fa);}.tick-ft{font-size:8px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.5px;border:1px solid var(--cl-divider);border-radius:3px;padding:0 2px;}.tick-live{font-size:8px;font-weight:700;color:var(--cl-live,#ef4444);display:flex;align-items:center;gap:2px;}.live-dot{width:4px;height:4px;background:var(--cl-live,#ef4444);border-radius:50%;animation:pulse 1s infinite;}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}.tick-comp{font-size:8px;color:var(--cl-text-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;opacity:0.7;}.tick-detail{position:relative;padding:8px 12px 10px;border-top:1px solid var(--cl-divider);background:var(--cl-surface);}.td-row{display:flex;align-items:center;gap:8px;}.td-side{flex:1;display:flex;align-items:center;gap:6px;min-width:0;}.td-side.right{flex-direction:row-reverse;}.td-logo{width:20px;height:20px;object-fit:contain;flex-shrink:0;}.td-name{font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;}.td-side.right .td-name{text-align:right;}.td-center{display:flex;flex-direction:column;align-items:center;gap:1px;flex-shrink:0;}.td-score{font-size:18px;font-weight:900;letter-spacing:1px;color:var(--cl-text);}.td-live{font-size:9px;font-weight:700;color:var(--cl-live,#ef4444);display:flex;align-items:center;gap:3px;}.td-ft{font-size:8px;font-weight:700;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:0.5px;}.td-time{font-size:12px;font-weight:700;color:var(--cl-accent,#60a5fa);}.td-comp{font-size:10px;color:var(--cl-text-2);text-align:center;margin-top:4px;opacity:0.7;}.td-close{position:absolute;top:6px;right:8px;background:none;border:none;cursor:pointer;font-size:12px;color:var(--cl-text-2);line-height:1;padding:2px 4px;border-radius:4px;transition:color 0.1s;}.td-close:hover{color:var(--cl-text);}.empty{padding:14px 16px;color:var(--cl-text-2);font-size:13px;text-align:center;}`]}}customElements.get("soccer-live-ticker")||customElements.define("soccer-live-ticker",Qt),customElements.get("soccer-live-lineup")||customElements.define("soccer-live-lineup",class extends Rt{setConfig(e){super.setConfig({...e,card_type:"lineup"})}static getConfigElement(){return document.createElement("soccer-live-lineup-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_",card_type:"lineup"}}}),customElements.get("soccer-live-timeline")||customElements.define("soccer-live-timeline",class extends Rt{setConfig(e){super.setConfig({...e,card_type:"timeline"})}static getConfigElement(){return document.createElement("soccer-live-timeline-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_",card_type:"timeline"}}});const Yt={xs:[11,3],small:[12.5,5],normal:[14,7],large:[16,9]};class Zt extends i.WF{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e)}getCardSize(){return 5}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-schedule-editor")}static getStubConfig(){return{entity:"",max_matches:15}}_matchDateValue(e){return e?.date_iso||e?.date||""}_matchDate(e){return(0,s.n1)(this._matchDateValue(e))}_matchTime(e){if(!e?.date_iso&&e?.date)return e.date.split(" ")[1]||"";const t=this._matchDate(e);if(!t)return"";const a=(0,s.$c)(this.hass,this._config),i=this.hass?.config?.time_zone;return t.toLocaleTimeString(a,{hour:"2-digit",minute:"2-digit",...i?{timeZone:i}:{}})}_rows(e){const t=this._config.show||"upcoming",a=e.upcoming_matches||[],i=e.previous_matches||[],s=e.matches||[];return"previous"===t?i.length?i:s.filter(e=>"post"===e.state):"all"===t?s.length?s:[...i,...a]:a.length?a:s.filter(e=>"pre"===e.state||"in"===e.state)}render(){if(A(this,this._config),!this.hass||!this._config)return H(this._t("ui.loading"));const e=this.hass.states[this._config.entity];if(!e)return R("⚠️",this._t("ui.entity_not_found"),this._config.entity,this._t("ui.check_entity_config"));const t=e.attributes||{},a=(0,s.$c)(this.hass,this._config),r=this._config.variant||"fixtures",o=0!=this._config.show_competition,n=this._config.text_size,[l,c]="number"==typeof n?[n,Math.max(2,Math.round(.42*n))]:Yt[n]||Yt.normal,d="next"===r?this._renderNext(t,a):"standings"===r?this._renderStandings(t,a):"form"===r?this._renderForm(t,a):this._renderFixtures(t,a,o);if(null===d)return U("📅",this._t("minimal.empty"),"","");const p=1==this._config.hide_header,h="fixtures"===r&&!o;return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="sch ${r} ${h?"no-comp":""}" style="--sch-fs:${l}px;--sch-pad:${c}px">
          ${p?"":i.qy`
            <div class="sch-title">
              ${Se(t.league_name||t.team_name||"",a)||this._t("card.minimal")}
            </div>`}
          ${d}
        </div>
      </ha-card>
    `}_renderFixtures(e,t,a){const i=this._rows(e).slice(0,this._config.max_matches??15);if(!i.length)return null;const s=new Intl.DateTimeFormat(t,{weekday:"short",day:"2-digit",month:"short"});return i.map((e,t)=>this._row(e,t,s,a))}_renderNext(e,t){const a=(0,Ct.YU)(e);if(!a)return null;const s=(0,Ct.SF)(a);let r;return r="live"===s?i.qy`<span class="mn-live">${this._t("status.live")} ${a.home_score??""}–${a.away_score??""}</span>`:"tbd"===s?this._relativeDay(a)+" · "+this._t("generic.unknown"):"time"===s?this._relativeDay(a)+" · "+this._matchTime(a):this._relativeDay(a),i.qy`
      <div class="mn-next">
        <div class="mn-teams">${a.home_team} <span class="mn-dash">–</span> ${a.away_team}</div>
        <div class="mn-when">${r}</div>
      </div>`}_relativeDay(e){const t=this._matchDate(e);if(!t)return this._matchDateValue(e).split(" ")[0]||"";const a=new Date;a.setHours(0,0,0,0);const i=new Date(t);i.setHours(0,0,0,0);const r=Math.round((i-a)/864e5);if(0===r)return this._t("time.today");if(1===r)return this._t("time.tomorrow");if(r>1&&r<=6)return this._t("time.in_n_d",{n:r});const o=(0,s.$c)(this.hass,this._config);return new Intl.DateTimeFormat(o,{weekday:"short",day:"2-digit",month:"short"}).format(t).replace(/\.$/,"")}_renderStandings(e,t){const a=(0,Ct.T0)(e,this._config.max_matches??20);if(!a.length)return null;const s=this._config.my_team||e.team_name||"";return i.qy`
      <div class="mn-tbl-head">
        <span></span><span>${this._t("mini.team")||""}</span>
        <span class="num">${this._t("mini.p")||"P"}</span>
        <span class="num">${this._t("mini.gd")||"GD"}</span>
        <span class="num">${this._t("mini.pts")||"Pts"}</span>
      </div>
      ${a.map((e,t)=>{const a=s&&(0,Ct.Kd)(e.team,s);return i.qy`
          <div class="mn-tbl-row ${t%2?"odd":""} ${a?"mine":""}">
            <span class="mn-rank">${e.rank}</span>
            <span class="mn-team">${e.team}</span>
            <span class="num">${e.played}</span>
            <span class="num">${e.gd>0?"+"+e.gd:e.gd??""}</span>
            <span class="num pts">${e.points??""}</span>
          </div>`})}`}_renderForm(e,t){const a=this._config.my_team||e.team_name||"",s=this._config.my_team?null:e.team_id,r=(0,Ct.Eb)(e,{name:a,id:s},this._config.max_matches??10);return r?i.qy`
      <div class="mn-form">
        <span class="mn-form-team">${a}</span>
        <span class="mn-form-dots">${r.results.map(e=>i.qy`<span class="mn-fd ${e.toLowerCase()}">${this._t("form."+e)}</span>`)}</span>
        <span class="mn-form-sum">${r.w}${this._t("form.W")} ${r.d}${this._t("form.D")} ${r.l}${this._t("form.L")}</span>
      </div>`:null}_row(e,t,a,s){const r=this._matchDate(e),o=this._matchDateValue(e),n=(r?a.format(r):o?o.split(" ")[0]:"").replace(/\.$/,""),l={name:this._config.my_team||"",id:null},c=l.name&&(0,Ct.YZ)(e,"home",l),d=l.name&&(0,Ct.YZ)(e,"away",l);return i.qy`
      <div class="sch-row ${t%2?"odd":""}">
        <span class="sch-date">${n}</span>
        <span class="sch-time ${e.time_tbd?"tbd":""} ${"in"===e.state?"live":""}">${this._timeLabel(e)}</span>
        <span class="sch-home ${c?"mine":""}">${e.home_team}</span>
        <span class="sch-sep">-</span>
        <span class="sch-away ${d?"mine":""}">${e.away_team}</span>
        ${s?i.qy`<span class="sch-comp">${this._compTag(e)}</span>`:""}
      </div>
    `}_timeLabel(e){if("in"===e.state)return this._t("status.live");if("post"===e.state){const t=e.home_score,a=e.away_score;return null!=t&&null!=a&&"N/A"!==t&&"N/A"!==a?`${t}-${a}`:this._t("status.full_time")}return e.time_tbd?this._t("generic.unknown"):this._matchTime(e)||this._t("generic.unknown")}_compTag(e){const t=e=>e&&"N/A"!==e?e:"";return t(e.league_abbrev)||t(e.league_abbreviation)||t(e.competition_abbreviation)||(t(e.league_name)?e.league_name.charAt(0).toUpperCase():"")}static get styles(){return[z,Ue,i.AH`ha-card{background:var(--cl-bg);color:var(--cl-text);border-radius:16px;overflow:hidden;padding:0;}.sch{position:relative;z-index:1;padding:6px 0;font-variant-numeric:tabular-nums;font-size:var(--sch-fs,14px);}.sch-title{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:var(--cl-text-2,#94a3b8);padding:8px 14px 6px;}.sch-row{display:grid;grid-template-columns:minmax(72px,auto) minmax(52px,auto) 1fr auto 1fr auto;align-items:baseline;gap:10px;padding:var(--sch-pad,7px) 14px;font-size:var(--sch-fs,14px);}.sch.no-comp .sch-row{grid-template-columns:minmax(72px,auto) minmax(52px,auto) 1fr auto 1fr;}.sch-row.odd{background:var(--cl-surface,rgba(255,255,255,0.04));}.sch-date{color:var(--cl-text-2,#94a3b8);white-space:nowrap;}.sch-time{color:var(--cl-text-2,#94a3b8);white-space:nowrap;}.sch-time.tbd{font-style:italic;opacity:0.75;}.sch-time.live{color:var(--cl-live,#ef4444);font-weight:700;}.sch-home{text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.sch-away{text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.sch-sep{color:var(--cl-text-2,#94a3b8);}.sch-home.mine,.sch-away.mine{font-weight:800;}.sch-comp{color:var(--cl-text-2,#94a3b8);text-align:right;white-space:nowrap;min-width:14px;}.mn-next{padding:10px 14px 12px;text-align:center;}.mn-teams{font-size:calc(var(--sch-fs,14px) + 3px);font-weight:700;}.mn-dash{color:var(--cl-text-2,#94a3b8);font-weight:400;}.mn-when{margin-top:4px;color:var(--cl-text-2,#94a3b8);}.mn-when .mn-live{color:var(--cl-live,#ef4444);font-weight:700;}.mn-tbl-head,.mn-tbl-row{display:grid;grid-template-columns:26px 1fr 30px 40px 34px;gap:8px;align-items:baseline;padding:var(--sch-pad,6px) 14px;}.mn-tbl-head{font-size:10px;text-transform:uppercase;letter-spacing:0.05em;color:var(--cl-text-2,#94a3b8);padding-bottom:4px;}.mn-tbl-row.odd{background:var(--cl-surface,rgba(255,255,255,0.04));}.mn-tbl-row.mine{font-weight:800;}.mn-rank{color:var(--cl-text-2,#94a3b8);text-align:center;}.mn-team{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.num{text-align:right;color:var(--cl-text-2,#94a3b8);}.num.pts{color:var(--cl-text,#f8fafc);font-weight:700;}.mn-form{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:12px 14px;}.mn-form-team{font-weight:700;}.mn-form-dots{display:inline-flex;gap:4px;}.mn-fd{width:18px;height:18px;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#fff;}.mn-fd.w{background:var(--cl-win,#22c55e);}.mn-fd.d{background:var(--cl-draw,#94a3b8);}.mn-fd.l{background:var(--cl-loss,#ef4444);}.mn-form-sum{margin-left:auto;color:var(--cl-text-2,#94a3b8);font-size:11px;font-weight:700;}`]}}customElements.get("soccer-live-schedule")||customElements.define("soccer-live-schedule",Zt);class Xt extends i.WF{static properties={hass:{},_config:{}};setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e)}static getConfigElement(){return document.createElement("soccer-live-insights-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_",card_type:"matchday"}}getCardSize(){return 4}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return R("!",this._t("ui.entity_not_found"),this._config.entity,this._t("ui.check_entity_config"));const t=e.attributes||{},a=t.matchday,r=a?.matches||t.matches||[];if(!r.length)return U("📅",this._t("matchday.empty"),this._t("matchday.empty_hint"),"");const o=a?.phase||(r.some(e=>"in"===e.state)?"live":r.some(e=>"pre"===e.state)?"upcoming":"finished"),n=r.find(e=>String(e.event_id)===String(a?.focus_event_id))||r.find(e=>"pre"===e.state);return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <main>
          <header>
            <div><small>${this._t("card.matchday")}</small><h2>${a?.competition||r[0]?.competition_name||r[0]?.league_name||""}</h2></div>
            <span class=${o}>${this._t(`matchday.${o}`)}</span>
          </header>
          <div class="counters">
            <b>${a?.total??r.length}<small>${this._t("matchday.matches")}</small></b>
            <b>${a?.live??r.filter(e=>"in"===e.state).length}<small>${this._t("matchday.live")}</small></b>
            <b>${a?.upcoming??r.filter(e=>"pre"===e.state).length}<small>${this._t("matchday.upcoming")}</small></b>
          </div>
          ${Tt(n,e=>this._t(e),{compact:1})}
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
    `}static styles=[z,Ue,Et,i.AH`ha-card{position:relative;overflow:hidden;border-radius:20px;background:var(--cl-bg);color:var(--cl-text)}main{position:relative;z-index:1;padding:16px}header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}header small{color:var(--cl-text-2);font-weight:800;text-transform:uppercase;letter-spacing:.08em}h2{margin:3px 0 0;font-size:17px}header>span{padding:5px 9px;border-radius:99px;background:var(--cl-chip-bg);color:var(--cl-accent);font-size:10px;font-weight:900;text-transform:uppercase}header>span.live{color:var(--cl-live)}.counters{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:12px}.counters b{padding:9px;text-align:center;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface);font-size:17px;color:var(--cl-accent)}.counters small{display:block;margin-top:2px;color:var(--cl-text-2);font-size:8px;text-transform:uppercase}section{margin-top:10px;border-top:1px solid var(--cl-divider)}article{display:grid;grid-template-columns:55px 1fr auto auto;gap:8px;align-items:center;padding:10px 2px;border-bottom:1px solid var(--cl-divider)}article time{font-size:9px;color:var(--cl-text-2)}article div{display:grid;gap:3px;font-size:11px}article strong{font-size:13px}article.live strong{color:var(--cl-live)}article i{min-width:28px;padding:3px;border-radius:6px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:8px;font-style:normal;text-align:center}@media(max-width:380px){article{grid-template-columns:45px 1fr auto}article i{display:none}}`]}customElements.get("soccer-live-matchday")||customElements.define("soccer-live-matchday",Xt);class ea extends i.WF{static properties={hass:{},_config:{},_season:{type:String},_competition:{type:String},_notice:{type:String},_location:{type:String},_result:{type:String},_opponent:{type:String}};constructor(){super(),this._season="",this._competition="",this._notice="",this._location="",this._result="",this._opponent=""}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e)}static getConfigElement(){return document.createElement("soccer-live-insights-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_",card_type:"archive"}}getCardSize(){return 5}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_team(e,t){if(this._config.team_name||t.team_name)return this._config.team_name||t.team_name;const a={};return e.forEach(e=>[e.home_team,e.away_team].filter(Boolean).forEach(e=>a[e]=(a[e]||0)+1)),Object.entries(a).sort((e,t)=>t[1]-e[1])[0]?.[0]||""}async _copyArchive(e){try{await navigator.clipboard.writeText(JSON.stringify({schema:"soccer_live.archive.v1",version:1,matches:e},null,2)),this._notice=this._t("archive.copied")}catch(e){this._notice=this._t("archive.copy_failed")}}async _callArchiveService(e,t){this.hass?.callService&&(await this.hass.callService("soccer_live",e,{...t.config_entry_id?{config_entry_id:t.config_entry_id}:{}}),this._notice=this._t("archive."+("rebuild_match_archive"===e?"rebuilt":"cleared")))}async _clearArchive(e){window.confirm(this._t("archive.clear_confirm"))&&await this._callArchiveService("clear_match_archive",e)}async _importArchive(e){try{const t=await navigator.clipboard.readText();if(!t)throw new Error("empty");await this.hass.callService("soccer_live","import_match_archive",{...e.config_entry_id?{config_entry_id:e.config_entry_id}:{},archive:t}),this._notice=this._t("archive.imported")}catch(e){this._notice=this._t("archive.import_failed")}}_archiveMatches(e){const t=Array.isArray(e.match_archive)?e.match_archive:[],a=Lt(this._config.archive_entity?this.hass.states[this._config.archive_entity]:null),i=new Map;return[...t,...Array.isArray(a)?a:[]].forEach(e=>{const t=Dt(e);if(!t||!t.home_team||!t.away_team)return;const a=String(t.event_id||[t.date_iso||t.date,t.home_team,t.away_team].join("|"));i.has(a)||i.set(a,t)}),[...i.values()].sort((e,t)=>String(t.date_iso||t.date||"").localeCompare(String(e.date_iso||e.date||"")))}render(){if(A(this,this._config),!this.hass||!this._config)return i.qy``;const e=this.hass.states[this._config.entity];if(!e)return R("!",this._t("ui.entity_not_found"),this._config.entity,this._t("ui.check_entity_config"));const t=e.attributes||{},a=this._archiveMatches(t),r=this._team(a,t),o=function(e,t,a="",i="",s={}){const r=Array.isArray(e)?e:[],o=[...new Set(r.map(Nt).filter(e=>"unknown"!==e))].sort().reverse(),n=[...new Set(r.map(e=>e.competition_name||e.league_name).filter(Boolean))].sort(),l=r.filter(e=>(!a||Nt(e)===a)&&(!i||(e.competition_name||e.league_name)===i)&&(!s.location||Gt(e,t)?.venue===s.location)&&(!s.result||Gt(e,t)?.code===s.result)&&(!s.opponent||String(Gt(e,t)?.opponent||"").toLowerCase().includes(String(s.opponent).toLowerCase()))),c=[...new Set(l.map(Ot).filter(Boolean))].sort().slice(-12).map(e=>{const a=l.filter(t=>Ot(t)===e);return{month:e,...Bt(a,t)}}),d=o.slice(0,5).map(e=>({season:e,...Bt(r.filter(t=>Nt(t)===e),t)})),p=l.map(e=>({match:e,result:Gt(e,t)})).filter(e=>e.result),h=new Map;p.forEach(({result:e})=>h.set(e.opponent,(h.get(e.opponent)||0)+1));const u=["home","away"].map(e=>({location:e,...Bt(l.filter(a=>Gt(a,t)?.venue===e),t)})),g=p.map(({match:e,result:t})=>({match:e,result:t,margin:t.own-t.other}));return{matches:l,seasons:o,competitions:n,stats:Bt(l,t),monthly:c,seasonComparison:d,homeAway:u,commonOpponents:[...h.entries()].sort((e,t)=>t[1]-e[1]).slice(0,8).map(([e,t])=>({name:e,matches:t})),biggestWin:g.filter(e=>e.margin>0).sort((e,t)=>t.margin-e.margin)[0]||null,biggestLoss:g.filter(e=>e.margin<0).sort((e,t)=>e.margin-t.margin)[0]||null}}(a,r,this._season,this._competition,{location:this._location,result:this._result,opponent:this._opponent}),n=o.matches.slice(0,Number(this._config.max_matches||20)),l=o.stats;return i.qy`
      <ha-card>
        <div class="hero-bg"></div>
        <main>
          <header><div><small>${this._t("card.archive")}</small><h2>${this._config.title||this._t("archive.personal")}</h2></div><b>${o.matches.length}</b></header>
          ${a.length?i.qy`<div class="filters">
            <label>${this._t("archive.season")}<select @change=${e=>{this._season=e.target.value}}>
              <option value="">${this._t("archive.all_seasons")}</option>
              ${o.seasons.map(e=>i.qy`<option value=${e} ?selected=${e===this._season}>${e}</option>`)}
            </select></label>
            <label>${this._t("archive.competition")}<select @change=${e=>{this._competition=e.target.value}}>
              <option value="">${this._t("archive.all_competitions")}</option>
              ${o.competitions.map(e=>i.qy`<option value=${e} ?selected=${e===this._competition}>${e}</option>`)}
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
          <div class="summary"><span class="w">${l.won} ${this._t("archive.won")}</span><span class="d">${l.drawn} ${this._t("archive.drawn")}</span><span class="l">${l.lost} ${this._t("archive.lost")}</span><span>${l.win_percentage}%</span></div>`:""}
          ${0!=this._config.show_archive_stats?i.qy`<div class="stats">
            <span><b>${l.goals_for}–${l.goals_against}</b><small>${this._t("archive.goals")}</small></span>
            <span><b>${l.clean_sheets}</b><small>${this._t("archive.clean_sheets")}</small></span>
            <span><b>${l.longest_unbeaten}</b><small>${this._t("archive.unbeaten")}</small></span>
            <span><b>${l.longest_winning}</b><small>${this._t("archive.winning_streak")}</small></span>
          </div>`:""}
          ${o.monthly.length>1?i.qy`<div class="trend" aria-label=${this._t("archive.monthly_form")}>
            ${o.monthly.map(e=>{const t=Math.max(1,3*e.matches),a=3*e.won+e.drawn;return i.qy`<span title="${e.month}: ${a}/${t}"><i style="height:${Math.max(8,Math.round(a/t*100))}%"></i><small>${e.month.slice(5)}</small></span>`})}
          </div>`:""}
          ${o.seasonComparison.length>1?i.qy`<div class="season-compare">
            ${o.seasonComparison.map(e=>i.qy`<span><b>${e.season}</b><small>${e.win_percentage}% · ${e.goals_for}–${e.goals_against}</small></span>`)}
          </div>`:""}
          ${0!=this._config.show_season_report&&o.stats.matches?i.qy`
            <div class="report-grid">
              ${o.homeAway.map(e=>i.qy`<span><small>${this._t(`archive.${e.location}`)}</small><b>${e.win_percentage}%</b><em>${e.won}-${e.drawn}-${e.lost}</em></span>`)}
              ${o.biggestWin?i.qy`<span><small>${this._t("archive.biggest_win")}</small><b>${o.biggestWin.result.own}–${o.biggestWin.result.other}</b><em>${o.biggestWin.result.opponent}</em></span>`:""}
              ${o.biggestLoss?i.qy`<span><small>${this._t("archive.biggest_loss")}</small><b>${o.biggestLoss.result.own}–${o.biggestLoss.result.other}</b><em>${o.biggestLoss.result.opponent}</em></span>`:""}
            </div>
            ${o.commonOpponents.length?i.qy`<div class="opponents"><small>${this._t("archive.common_opponents")}</small>${o.commonOpponents.slice(0,5).map(e=>i.qy`<span>${e.name}<b>${e.matches}</b></span>`)}</div>`:""}
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
          <section>${n.map(e=>i.qy`
            <article>
              <time>${(0,s.iS)(e.date||e.date_iso,(0,s.$c)(this.hass,this._config))}</time>
              <div><span>${e.home_team}</span><span>${e.away_team}</span></div>
              <strong class=${(e=>Gt(e,r)?.code||"d")(e)}>${e.home_score??"-"}–${e.away_score??"-"}</strong>
              <small>${e.competition_name||e.league_name||e.provider||""}</small>
            </article>
          `)}</section>
        </main>
      </ha-card>
    `}static styles=[z,Ue,i.AH`ha-card{position:relative;overflow:hidden;border-radius:20px;background:var(--cl-bg);color:var(--cl-text)}main{position:relative;z-index:1;padding:16px}header{display:flex;justify-content:space-between;align-items:center}header small{color:var(--cl-text-2);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}h2{margin:3px 0 0;font-size:17px}header b{display:grid;place-items:center;min-width:32px;height:32px;border-radius:50%;background:var(--cl-accent-soft);color:var(--cl-accent)}.filters{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:12px 0}.filters label{display:grid;gap:3px;color:var(--cl-text-2);font-size:8px;text-transform:uppercase}.filters select,.filters input{box-sizing:border-box;min-width:0;width:100%;padding:7px;border:1px solid var(--cl-divider);border-radius:8px;background:var(--cl-surface);color:var(--cl-text);font-size:9px}.filters .opponent{grid-column:1/3}.summary{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}.summary span{padding:5px 8px;border-radius:8px;background:var(--cl-chip-bg);font-size:9px;font-weight:800}.w{color:var(--cl-green)}.l{color:var(--cl-live)}.d{color:var(--cl-text-2)}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px}.stats span{padding:7px 4px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface);text-align:center}.stats b{display:block;color:var(--cl-accent);font-size:13px}.stats small{display:block;margin-top:2px;color:var(--cl-text-2);font-size:7px;text-transform:uppercase}.actions{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}.actions button{padding:6px 8px;border:1px solid var(--cl-divider);border-radius:8px;background:var(--cl-chip-bg);color:var(--cl-text-2);font:inherit;font-size:8px;cursor:pointer}.actions button.danger{color:var(--cl-live)}.notice{margin:4px 0 8px;color:var(--cl-accent);font-size:8px}.empty{display:grid;gap:5px;padding:18px 10px;text-align:center;color:var(--cl-text-2)}.empty b{color:var(--cl-text);font-size:11px}.empty small{font-size:8px}.trend{display:flex;align-items:end;height:58px;gap:5px;margin:10px 0;padding:8px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface)}.trend span{display:grid;grid-template-rows:1fr auto;align-items:end;flex:1;height:100%;text-align:center}.trend i{display:block;min-height:5px;border-radius:4px 4px 1px 1px;background:linear-gradient(var(--cl-accent),var(--cl-accent-2))}.trend small{font-size:6px;color:var(--cl-text-2)}.season-compare{display:flex;gap:5px;overflow:auto;margin:8px 0}.season-compare span{min-width:86px;padding:7px;border-radius:8px;background:var(--cl-chip-bg)}.season-compare b,.season-compare small{display:block;font-size:8px}.season-compare small{color:var(--cl-text-2);margin-top:2px}.report-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin:9px 0}.report-grid span{display:grid;grid-template-columns:1fr auto;gap:2px;padding:8px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface)}.report-grid small{color:var(--cl-text-2);font-size:7px;text-transform:uppercase}.report-grid b{color:var(--cl-accent);font-size:12px}.report-grid em{grid-column:1/-1;color:var(--cl-text-2);font-size:8px;font-style:normal}.opponents{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}.opponents>small{width:100%;color:var(--cl-text-2);font-size:7px;text-transform:uppercase}.opponents span{padding:5px 7px;border-radius:99px;background:var(--cl-chip-bg);font-size:8px}.opponents b{margin-left:5px;color:var(--cl-accent)}section{border-top:1px solid var(--cl-divider)}article{display:grid;grid-template-columns:48px 1fr auto;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid var(--cl-divider)}article time,article small{font-size:8px;color:var(--cl-text-2)}article div{display:grid;gap:2px;font-size:10px}article strong{font-size:12px}article small{grid-column:2/4}@media(max-width:380px){.stats{grid-template-columns:repeat(2,1fr)}}`]}function ta(e){const t=String(e?.date_iso||e?.date||""),a=Date.parse(t);if(!Number.isNaN(a))return a;const i=t.match(/^(\d{2})[-/](\d{2})[-/](\d{4})(?:\s+(\d{2}):(\d{2}))?/);return i?new Date(+i[3],+i[2]-1,+i[1],+(i[4]||0),+(i[5]||0)).getTime():0}function aa(e){const t=Array.isArray(e?.matches)?e.matches:[],a=Array.isArray(e?.previous_matches)?e.previous_matches:[],i=t.filter(e=>e&&"post"===e.state),s=a.filter(e=>e&&("post"===e.state||null==e.state)),r=i.length?i:s;return r.length?[...r].sort((e,t)=>ta(t)-ta(e))[0]:null}customElements.get("soccer-live-archive")||customElements.define("soccer-live-archive",ea);class ia extends i.WF{static get properties(){return{hass:{},_config:{},_cachedData:{},_showDetails:{type:Boolean}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,A(this,e)}updated(e){if(e.has("hass")&&this._config){const e=this.hass?.states[this._config.entity];e&&"unavailable"!==e.state?(this._cachedData=e.attributes,Z.set(this._config.entity,e.attributes)):this._cachedData||(this._cachedData=Z.get(this._config.entity))}e.has("_showDetails")&&(this._showDetails?this._renderDetailsPortal():this._removeDetailsPortal())}disconnectedCallback(){super.disconnectedCallback(),this._removeDetailsPortal()}getCardSize(){return 3}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}_attrs(){const e=this.hass?.states[this._config.entity];return e&&"unavailable"!==e.state?e.attributes:this._cachedData}render(){if(!this._config||!this.hass)return i.qy``;A(this,this._config);const e=this._attrs();if(!e||!e.matches&&!e.previous_matches)return K(e,e=>this._t(e),()=>U("📅",this._t("last_match.none"),this._t("last_match.none_hint")));const t=aa(e);return t?i.qy`<ha-card>${this._renderMatch(t)}</ha-card>`:i.qy`<ha-card>${U("📅",this._t("last_match.none"),this._t("last_match.none_hint"))}</ha-card>`}_hasDetails(e){return!!(e.key_events&&e.key_events.length||e.lineup_home&&e.lineup_home.length||e.lineup_away&&e.lineup_away.length||e.home_statistics||e.head_to_head&&e.head_to_head.length)}_renderMatch(e){const t=(0,s.$c)(this.hass,this._config),a=e.league_name&&"N/A"!==e.league_name?e.league_name:"",r=ke({competitionName:a,competitionLogo:e.league_logo,fallbackLogo:null,isFriendly:e.is_friendly}),o=Se(a,t),n=(0,s.n1)(e.date_iso||e.date),l=n?n.toLocaleDateString(t,{day:"numeric",month:"short"}):"",c=Number(e.home_score),d=Number(e.away_score),p=Number.isFinite(c)&&Number.isFinite(d)&&c>d,h=Number.isFinite(c)&&Number.isFinite(d)&&d>c,u=function(e){return(Array.isArray(e?.key_events)?e.key_events:[]).filter(e=>e&&(1==e.scoring_play||"goal"===String(e.type||"").toLowerCase())).map(e=>({player:Array.isArray(e.athletes)&&e.athletes[0]||e.player||"",minute:String(e.clock||e.minute||"").replace(/'+$/,""),team:e.team||""})).filter(e=>e.player)}(e),g=e=>e?i.qy`<img class="lm-logo" src="${e}" alt="" loading="lazy">`:i.qy`<div class="lm-logo placeholder">⚽</div>`;return i.qy`
      <div class="lm-head">
        <span class="lm-comp">
          ${r?i.qy`<img src="${r}" alt="">`:i.qy`<span>⚽</span>`}
          ${o||i.qy`<span>&nbsp;</span>`}
        </span>
        <span class="lm-label">${this._t("last_match.label")}</span>
      </div>

      <div class="lm-score-row">
        <div class="lm-side home">
          ${g(e.home_logo)}
          <span class="lm-team">${e.home_team||e.home_abbrev||"?"}</span>
        </div>
        <div class="lm-scoreline">
          <span class="lm-score ${p?"win":""}">${S(e.home_score,"–")}</span>
          <span class="lm-sep">–</span>
          <span class="lm-score ${h?"win":""}">${S(e.away_score,"–")}</span>
        </div>
        <div class="lm-side away">
          <span class="lm-team">${e.away_team||e.away_abbrev||"?"}</span>
          ${g(e.away_logo)}
        </div>
      </div>

      ${l||o?i.qy`<div class="lm-meta">${[o,l].filter(Boolean).join(" · ")}</div>`:""}

      ${u.length?i.qy`
        <div class="lm-goals">
          ${u.map(e=>i.qy`<span class="lm-goal">⚽ ${e.player}${e.minute?i.qy` <em>${e.minute}'</em>`:""}</span>`)}
        </div>`:""}

      ${this._hasDetails(e)?i.qy`
        <div class="lm-actions">
          <button class="lm-details-btn" @click=${()=>{this._showDetails=1}}>
            ${this._t("last_match.details")} ›
          </button>
        </div>`:""}
    `}_renderDetailsPortal(){const e=aa(this._attrs());if(e){if(this._portal||(this._portal=document.createElement("dialog"),this._portal.className="soccer-live-last-match-portal",this._cancel=e=>{e.preventDefault(),this._showDetails=0},this._backdrop=e=>{e.target===this._portal&&(this._showDetails=0)},this._portal.addEventListener("cancel",this._cancel),this._portal.addEventListener("click",this._backdrop),document.body.appendChild(this._portal)),this._copyThemeVars(this._portal),(0,i.XX)(i.qy`${this._portalStyles()}${Le("mp")}${this._renderDetails(e)}`,this._portal),!this._portal.open)try{this._portal.showModal()}catch{this._portal.setAttribute("open","")}}else this._showDetails=0}_removeDetailsPortal(){this._portal&&(this._portal.open&&this._portal.close(),this._portal.removeEventListener("cancel",this._cancel),this._portal.removeEventListener("click",this._backdrop),(0,i.XX)(i.qy``,this._portal),this._portal.remove(),this._portal=null)}_copyThemeVars(e){const t=getComputedStyle(this);["--cl-bg","--cl-text","--cl-text-2","--cl-divider","--cl-accent","--cl-accent-2","--cl-accent-rgb","--cl-green","--cl-live","--cl-win","--cl-draw","--cl-loss"].forEach(a=>{const i=t.getPropertyValue(a);i&&e.style.setProperty(a,i)})}_renderDetails(e){const t=(0,s.$c)(this.hass,this._config),a=(e,t)=>this._t(e,t),r=(0,s.n1)(e.date_iso||e.date),o=r?r.toLocaleDateString(t,{weekday:"short",day:"numeric",month:"short"}):"",n=Se(e.league_name,t);return i.qy`
      <div class="lmp-box">
        <button class="lmp-close" aria-label="${this._t("last_match.close")}" @click=${()=>{this._showDetails=0}}>×</button>
        <div class="lmp-score-row">
          <img class="lmp-logo" src="${e.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>
          <div class="lmp-center">
            <div class="lmp-score">${S(e.home_score,"-")}<span> – </span>${S(e.away_score,"-")}</div>
            <div class="lmp-ft">${this._t("status.full_time")}</div>
          </div>
          <img class="lmp-logo" src="${e.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>
        </div>
        <p class="lmp-teams"><strong>${e.home_team}</strong> – <strong>${e.away_team}</strong></p>
        ${n||o?i.qy`<p class="lmp-meta">${[n,o].filter(Boolean).join(" · ")}${e.venue&&"N/A"!==e.venue?` · ${e.venue}`:""}</p>`:""}

        ${this._renderStats(e,a)}
        ${Oe(e,{translate:a})}
        ${Be(e,{translate:a})}
        ${this._renderH2H(e,a)}

        <button class="lmp-done" @click=${()=>{this._showDetails=0}}>${this._t("last_match.close")}</button>
      </div>
    `}_renderStats(e,t){const a=kt(e.home_statistics,e.away_statistics);if(!a.length)return"";const s=e=>{const t=parseFloat(String(e).replace("%",""));return Number.isFinite(t)?t:0};return i.qy`
      <div class="mp-section">
        <h5 class="mp-section-title">${this._t("tab.stats")}</h5>
        <div class="lmp-stats">
          ${a.map(e=>{const a=s(e.home),r=a+s(e.away),o=r>0?Math.round(a/r*100):50;return i.qy`
              <div class="lmp-stat">
                <span class="lmp-stat-h">${e.home??"-"}</span>
                <span class="lmp-stat-label">${St(e.key,t)}</span>
                <span class="lmp-stat-a">${e.away??"-"}</span>
              </div>
              <div class="lmp-bar"><div class="lmp-bar-h" style="width:${o}%"></div><div class="lmp-bar-a" style="width:${100-o}%"></div></div>`})}
        </div>
      </div>`}_renderH2H(e,t){const a=Array.isArray(e.head_to_head)?e.head_to_head:[];if(!a.length)return"";const s=this._attrs()||{},r=(this._config.my_team||this._config.team_name||s.team_name||e.home_team||"").toLowerCase();return i.qy`
      <div class="mp-section">
        <h5 class="mp-section-title">${t("popup.h2h")}</h5>
        <div class="lmp-h2h">
          ${a.slice(0,6).map(e=>i.qy`
            <div><span>${e.home_team||e.home}</span><b class="lmp-h2h-score ${(e=>{const t=parseInt(e.home_score,10),a=parseInt(e.away_score,10);if(!r||Number.isNaN(t)||Number.isNaN(a))return"";const i=(e.home_team||e.home||"").toLowerCase().includes(r),s=(e.away_team||e.away||"").toLowerCase().includes(r);return i||s?t===a?"draw":i&&t>a||s&&a>t?"win":"loss":""})(e)}">${S(e.home_score,"-")} – ${S(e.away_score,"-")}</b><span>${e.away_team||e.away}</span></div>`)}
        </div>
      </div>`}_portalStyles(){return i.qy`<style>
      ${Te.cssText}
      .soccer-live-last-match-portal {
        border: 0; padding: 0; margin: auto; max-width: none; max-height: none;
        width: 100vw; height: 100vh; background: transparent; overflow: auto;
        color: var(--cl-text, var(--primary-text-color));
      }
      .soccer-live-last-match-portal::backdrop { background: rgba(0,0,0,0.6); }
      .lmp-box {
        position: relative; box-sizing: border-box;
        max-width: 560px; margin: 5vh auto; padding: 20px 18px 24px;
        background: var(--cl-bg, var(--card-background-color, #1c1c1c));
        color: var(--cl-text, var(--primary-text-color));
        border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      }
      .lmp-close {
        position: absolute; top: 10px; right: 12px; border: 0; background: transparent;
        color: var(--cl-text-2, var(--secondary-text-color)); font-size: 24px; line-height: 1;
        cursor: pointer; padding: 4px;
      }
      .lmp-score-row { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 12px; }
      .lmp-logo { width: 48px; height: 48px; object-fit: contain; justify-self: center; }
      .lmp-center { text-align: center; }
      .lmp-score { font-size: 2rem; font-weight: 800; font-variant-numeric: tabular-nums; }
      .lmp-ft { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--cl-text-2, var(--secondary-text-color)); }
      .lmp-teams { text-align: center; margin: 6px 0 2px; }
      .lmp-meta { text-align: center; font-size: 0.82rem; color: var(--cl-text-2, var(--secondary-text-color)); margin: 0 0 4px; }
      .lmp-stats { display: flex; flex-direction: column; gap: 8px; }
      .lmp-stat { display: grid; grid-template-columns: auto 1fr auto; gap: 8px; font-size: 0.85rem; }
      .lmp-stat-label { text-align: center; color: var(--cl-text-2, var(--secondary-text-color)); }
      .lmp-stat-h, .lmp-stat-a { font-weight: 700; font-variant-numeric: tabular-nums; }
      .lmp-stat-a { text-align: right; }
      .lmp-bar { display: flex; height: 5px; border-radius: 3px; overflow: hidden; background: var(--cl-divider, rgba(127,127,127,0.2)); }
      .lmp-bar-h { background: var(--cl-accent, #3b82f6); }
      .lmp-bar-a { background: var(--cl-text-2, #9aa0a6); opacity: 0.6; }
      .lmp-h2h > div { display: grid; grid-template-columns: 1fr auto 1fr; gap: 8px; font-size: 0.85rem; padding: 3px 0; align-items: center; }
      .lmp-h2h > div > span:last-child { text-align: right; }
      .lmp-h2h b { font-variant-numeric: tabular-nums; }
      .lmp-h2h-score { padding: 1px 8px; border-radius: 6px; }
      .lmp-h2h-score.win  { color: #fff; background: var(--cl-win, #22c55e); }
      .lmp-h2h-score.loss { color: #fff; background: var(--cl-loss, #ef4444); }
      .lmp-h2h-score.draw { color: var(--cl-text, #f8fafc); background: var(--cl-divider, rgba(127,127,127,0.28)); }
      .lmp-done {
        margin-top: 20px; width: 100%; padding: 12px 20px; border: 0; border-radius: 12px;
        cursor: pointer; font-weight: 800; font-size: 14px; color: #fff;
        background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, var(--cl-accent, #ec4899)));
      }
      .lmp-done:hover { filter: brightness(1.08); }
    </style>`}static get styles(){return[z,i.AH`:host{display:block;}ha-card{padding:14px 16px;overflow:hidden;background:var(--cl-bg);color:var(--cl-text);}.lm-head{display:flex;align-items:center;justify-content:space-between;gap:8px;}.lm-comp{display:inline-flex;align-items:center;gap:6px;font-size:0.85rem;color:var(--cl-text-2);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.lm-comp img{width:18px;height:18px;object-fit:contain;}.lm-label{font-size:0.7rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--cl-accent);white-space:nowrap;}.lm-score-row{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;margin:12px 0 6px;}.lm-side{display:flex;align-items:center;gap:8px;min-width:0;}.lm-side.away{justify-content:flex-end;}.lm-logo{width:34px;height:34px;object-fit:contain;flex:0 0 auto;}.lm-logo.placeholder{display:flex;align-items:center;justify-content:center;font-size:1.1rem;}.lm-team{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--cl-text);}.lm-scoreline{display:flex;align-items:center;gap:8px;}.lm-score{font-size:1.6rem;font-weight:800;font-variant-numeric:tabular-nums;color:var(--cl-text-2);}.lm-score.win{color:var(--cl-text);}.lm-sep{font-size:1.1rem;color:var(--cl-text-2);}.lm-meta{text-align:center;font-size:0.8rem;color:var(--cl-text-2);}.lm-goals{display:flex;flex-wrap:wrap;gap:6px 12px;justify-content:center;margin-top:10px;padding-top:10px;border-top:1px solid var(--cl-divider);}.lm-goal{font-size:0.82rem;color:var(--cl-text);}.lm-goal em{color:var(--cl-text-2);font-style:normal;}.lm-actions{display:flex;justify-content:center;margin-top:12px;}.lm-details-btn{border:0;cursor:pointer;font-weight:700;font-size:0.8rem;padding:6px 16px;border-radius:99px;background:var(--cl-accent);color:#fff;}.lm-details-btn:hover{filter:brightness(1.08);}`]}}customElements.get("soccer-live-last-match")||customElements.define("soccer-live-last-match",ia);const sa={team:{editor:()=>Promise.resolve().then(a.bind(a,197))},standings:{editor:()=>Promise.resolve().then(a.bind(a,643))},matches:{editor:()=>Promise.resolve().then(a.bind(a,82))},countdown:{editor:()=>Promise.resolve().then(a.bind(a,135))},news:{editor:()=>Promise.resolve().then(a.bind(a,593))},bracket:{editor:()=>Promise.resolve().then(a.bind(a,615))},"mini-standings":{editor:()=>Promise.resolve().then(a.bind(a,294))},scorers:{editor:()=>Promise.resolve().then(a.bind(a,379))},"multi-team":{editor:()=>Promise.resolve().then(a.bind(a,488))},"team-competitions":{editor:()=>Promise.resolve().then(a.bind(a,864))},"match-center":{editor:()=>Promise.resolve().then(a.bind(a,384))},hub:{editor:()=>Promise.resolve().then(a.bind(a,384))},race:{editor:()=>Promise.resolve().then(a.bind(a,643))},"team-form":{editor:()=>Promise.resolve().then(a.bind(a,308))},club:{editor:()=>Promise.resolve().then(a.bind(a,259))},diagnostics:{editor:()=>Promise.resolve().then(a.bind(a,759))},ticker:{editor:()=>Promise.resolve().then(a.bind(a,847))},lineup:{editor:()=>Promise.resolve().then(a.bind(a,389))},timeline:{editor:()=>Promise.resolve().then(a.bind(a,965))},minimal:{editor:()=>Promise.resolve().then(a.bind(a,713))},matchday:{editor:()=>Promise.resolve().then(a.bind(a,317))},archive:{editor:()=>Promise.resolve().then(a.bind(a,317))},"last-match":{editor:()=>Promise.resolve().then(a.bind(a,374))}},ra=new Map,oa=[{value:"team",element:"soccer-live-team",editor:"soccer-live-team-editor",label:"Team",description:"Live score, form, lineup, weather for one team",sensorTypes:["team_match"]},{value:"standings",element:"soccer-live-standings",editor:"soccer-live-standings-editor",label:"Standings",description:"League table with coloured zones",sensorTypes:["standings"]},{value:"matches",element:"soccer-live-matches",editor:"soccer-live-matches-editor",label:"Matches",description:"Day-grouped match list with live highlighting",sensorTypes:["team_matches","team_matches_mixed","all_matches_today"]},{value:"countdown",element:"soccer-live-countdown",editor:"soccer-live-countdown-editor",label:"Countdown",description:"Countdown timer to next match with live score",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"news",element:"soccer-live-news",editor:"soccer-live-news-editor",label:"News",description:"Article feed with images and timestamps",sensorTypes:["news"]},{value:"bracket",element:"soccer-live-bracket",editor:"soccer-live-bracket-editor",label:"Bracket",description:"Knockout bracket (list or tournament tree)",sensorTypes:["bracket"]},{value:"mini-standings",element:"soccer-live-mini-standings",editor:"soccer-live-mini-standings-editor",label:"Mini Standings",description:"Compact standings with configurable rows",sensorTypes:["standings"]},{value:"scorers",element:"soccer-live-scorers",editor:"soccer-live-scorers-editor",label:"Top Scorers",description:"Top scorers list with photo and goal tally",sensorTypes:["top_scorers"]},{value:"multi-team",element:"soccer-live-multi-team",editor:"soccer-live-multi-team-editor",label:"Multi Team",description:"Multiple teams in one compact card",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"team-competitions",element:"soccer-live-team-competitions",editor:"soccer-live-team-competitions-editor",label:"Team Competitions",description:"All competitions for a team with tab selector",sensorTypes:["team_matches_mixed"]},{value:"match-center",element:"soccer-live-match-center",editor:"soccer-live-match-center-editor",label:"Match Center",description:"Tabbed match view: overview, stats, timeline, lineup, H2H",sensorTypes:["team_match"]},{value:"hub",element:"soccer-live-match-center",editor:"soccer-live-match-center-editor",label:"Match Hub",description:"Phase-aware match view that follows preview, live play and review",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"race",element:"soccer-live-standings",editor:"soccer-live-standings-editor",label:"Competition Race",description:"Title, Europe and relegation gaps with table trajectory",sensorTypes:["standings"]},{value:"team-form",element:"soccer-live-team-form",editor:"soccer-live-team-form-editor",label:"Team Form",description:"Form trend, W/D/L dots, goals chart, home/away split",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"club",element:"soccer-live-club",editor:"soccer-live-club-editor",label:"Club",description:"Club profile, matchday, season progress, squad and transfers",sensorTypes:["club","team_match","team_matches","team_matches_mixed"]},{value:"diagnostics",element:"soccer-live-diagnostics",editor:"soccer-live-diagnostics-editor",label:"Diagnostics",description:"Sensor health, update status and schedule counters",sensorTypes:["team_match","team_matches","team_matches_mixed","all_matches_today","standings","top_scorers","bracket","news"]},{value:"ticker",element:"soccer-live-ticker",editor:"soccer-live-ticker-editor",label:"Ticker",description:"Horizontal scrollable strip of today's matches",sensorTypes:["all_matches_today","team_matches","team_matches_mixed"]},{value:"lineup",element:"soccer-live-lineup",editor:"soccer-live-lineup-editor",label:"Lineup",description:"Starting eleven for both teams",sensorTypes:["team_match"]},{value:"timeline",element:"soccer-live-timeline",editor:"soccer-live-timeline-editor",label:"Timeline",description:"Minute-by-minute match events",sensorTypes:["team_match"]},{value:"minimal",element:"soccer-live-schedule",editor:"soccer-live-schedule-editor",label:"Minimal",description:"Minimalist text views: fixtures, next match, standings or form",sensorTypes:["team_matches","team_matches_mixed","team_match","all_matches_today","standings"]},{value:"matchday",element:"soccer-live-matchday",editor:"soccer-live-insights-editor",label:"Matchday",description:"One matchday with status, fixtures and data completeness",sensorTypes:["team_matches","team_matches_mixed","match_day","all_matches_today"]},{value:"archive",element:"soccer-live-archive",editor:"soccer-live-insights-editor",label:"Archive",description:"Personal locally stored history of finished matches",sensorTypes:["team_match","team_matches","team_matches_mixed"]},{value:"last-match",element:"soccer-live-last-match",editor:"soccer-live-last-match-editor",label:"Last Match",description:"Most recent finished match: teams, final score and scorers",sensorTypes:["team_match","team_matches","team_matches_mixed"]}],na=new Set(["hub","race"]),la=[["editor.category_primary",["team","matches","match-center","standings","club"]],["editor.category_compact",["countdown","last-match","mini-standings","multi-team","ticker","minimal"]],["editor.category_content",["news","bracket","scorers","team-competitions"]],["editor.category_advanced",["team-form","lineup","timeline","diagnostics","matchday","archive"]]],ca=Object.fromEntries(oa.map(e=>[e.value,e.element])),da=new Set(oa.map(e=>e.element)),pa=oa.map(({value:e,label:t,description:a})=>({value:e,label:t,description:a})),ha=Object.fromEntries(oa.filter(e=>e.editor).map(e=>[e.value,e.editor])),ua={schedule:"minimal"};function ga(e){return ua[e]||e}const ma=["entity","enrichment_entity","supplementary_entities","auto_enrichment","archive_entity","standings_entity","skin","language","show_event_toasts"];class fa extends HTMLElement{constructor(){super(),this._hass=null,this._config={},this._child=null,this._childType=null}set hass(e){this._hass=e,this._child&&(this._child.hass=x(e,this._config))}setConfig(e){this._config=e||{};const t=this._config.card_type,a=t?function(e){const t=ga(e);return ca[t]||(da.has(t)?t:null)}(t):null;if(!a)return this._destroyChild(),this.innerHTML="",void this.appendChild(t?this._errorCard(this._t("ui.unknown_card_type",{type:t})):this._placeholder());if(!customElements.get(a))return this._destroyChild(),this.innerHTML="",void this.appendChild(this._errorCard(this._t("ui.unknown_card_type",{type:t})));this._childType!==a&&(this._destroyChild(),this._child=document.createElement(a),this._childType=a,this.innerHTML="",this.appendChild(this._child));try{this._child.setConfig(this._config)}catch(e){this._config.entity&&console.warn(`SoccerLiveCard: setConfig failed for ${this._childType}:`,e)}this._hass&&(this._child.hass=x(this._hass,this._config))}_destroyChild(){this._child&&(this._child=null,this._childType=null)}_placeholder(){const e=document.createElement("ha-card");e.style.cssText="padding:24px;text-align:center;color:#94a3b8;font-size:13px;";const t=this._hass?(this._hass.language||"en").split("-")[0]:"en";return e.textContent=(0,s.t)("ui.open_editor_to_configure",t),e}_t(e,t){return(0,s.t)(e,(0,s.$c)(this._hass,this._config),t)}_errorCard(e){const t=document.createElement("ha-card");return t.style.cssText="padding:24px;text-align:center;color:#ef4444;font-size:13px;border:1px solid rgba(239,68,68,0.3);",t.textContent=e,t}getCardSize(){return this._child?.getCardSize?.()??1}getGridOptions(){return this._child?.getGridOptions?.()}static getConfigElement(){return document.createElement("soccer-live-card-editor")}static getStubConfig(){return{}}}customElements.get("soccer-live-card")||customElements.define("soccer-live-card",fa);class _a extends i.WF{static get properties(){return{hass:{type:Object},_config:{type:Object}}}constructor(){super(),this._config={},this._subEditor=null,this._subEditorType=null,this._configByType={}}setConfig(e){this._config={...e||{}},this.requestUpdate()}_t(e,t){return(0,s.t)(e,(0,s.$c)(this.hass,this._config),t)}updated(e){e.has("hass")&&this._subEditor&&(this._subEditor.hass=this.hass),e.has("_config")&&this._syncSubEditor()}_syncSubEditor(){const e=this.shadowRoot?.getElementById("sub-editor");if(!e)return;const t=ga(this._config.card_type),a=ha[t]?t:Object.entries(ca).find(([,e])=>e===t)?.[0]||t,i=ha[a];if(!a||!i)return e.innerHTML="",this._subEditor=null,void(this._subEditorType=null);if(!customElements.get(i)){const t=`${a}:${Date.now()}`;return this._editorLoadToken=t,e.textContent=this._t("ui.loading"),void function(e,t){const a="schedule"===e?"minimal":e,i=sa[a]?.[t];if(!i)return Promise.resolve();const s=`${a}:${t}`;return ra.has(s)||ra.set(s,i()),ra.get(s)}(a,"editor").then(()=>{this._editorLoadToken===t&&this._syncSubEditor()}).catch(a=>{this._editorLoadToken===t&&(e.textContent=String(a))})}if(this._subEditorType!==a){e.innerHTML="",this._subEditor=document.createElement(i),this._subEditorType=a,this._subEditor.hass=this.hass,this._subEditor.addEventListener("config-changed",e=>{const t=e.detail.config?.card_type,i=na.has(a)&&t&&t!==a?t:a;this._dispatch({...e.detail.config,card_type:i})}),e.appendChild(this._subEditor);try{this._subEditor.setConfig(this._config)}catch(e){}}else try{this._subEditor.setConfig(this._config)}catch(e){this._config.entity&&console.warn("SoccerLiveCardEditor: sub-editor setConfig failed:",e)}}_typeChanged(e){const t=e.target.value;if(!t)return;const a=this._config.card_type;a&&(this._configByType[a]={...this._config});const i=this._configByType[t];if(i)this._dispatch({...i,card_type:t});else{const e={};for(const t of ma)void 0!==this._config[t]&&(e[t]=this._config[t]);this._dispatch({...e,card_type:t})}}_profileChanged(e){const t=e.target.value;$[t]&&(this._dispatch(function(e,t){const a=$[t];if(!a)return{...e||{}};const i={};for(const t of k)void 0!==e?.[t]&&(i[t]=e[t]);return{...i,...a}}(this._config,t)),e.target.value="")}_dispatch(e){const t={...e,type:"custom:soccer-live-card"};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:1,composed:1}))}_sensorHint(e){if(!e||!this._config?.entity||!this.hass?.states)return i.qy``;const t=this.hass.states[this._config.entity];if(!t)return i.qy`<div class="editor-warning">Entity not found: ${this._config.entity}</div>`;const a=t.attributes?.sensor_type;return a&&e.sensorTypes?.length?e.sensorTypes.includes(a)?i.qy`<div class="editor-info">Sensor type: ${a}</div>`:i.qy`
      <div class="editor-warning">
        This card usually expects ${e.sensorTypes.join(", ")}. Selected sensor is ${a}.
      </div>
    `:i.qy``}render(){const e=this._config?.card_type||"",t=pa.find(t=>t.value===e)?e:Object.entries(ca).find(([,t])=>t===e)?.[0]||e,a=pa.find(e=>e.value===t),r=na.has(t)?a:null;return i.qy`
      <div class="picker-wrap">
        <label class="picker-label">${this._t("editor.profile")}</label>
        <select class="profile-picker" @change=${e=>this._profileChanged(e)}>
          <option value="">— ${this._t("editor.choose_profile")} —</option>
          ${Object.keys($).map(e=>i.qy`
            <option value=${e}>${this._t(`editor.profile_${e}`)}</option>
          `)}
        </select>
        <p class="picker-desc profile-desc">${this._t("editor.profile_hint")}</p>
        <label class="picker-label">${this._t("editor.card_type")}</label>
        <select class="type-picker" @change=${e=>this._typeChanged(e)}>
          <option value="" ?selected=${!t}>— ${this._t("editor.choose_card_type")} —</option>
          ${r?i.qy`
            <optgroup label=${this._t("editor.category_legacy")}>
              <option value=${r.value} selected>${r.label}</option>
            </optgroup>
          `:""}
          ${la.map(([e,a])=>i.qy`
            <optgroup label=${this._t(e)}>
              ${a.map(e=>{const a=pa.find(t=>t.value===e);return a?i.qy`<option value=${e} ?selected=${e===t}>${a.label}</option>`:""})}
            </optgroup>
          `)}
        </select>
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
            .checked=${1==this._config.auto_enrichment}
            @change=${e=>this._dispatch({...this._config,auto_enrichment:e.target.checked})}
          ></ha-switch>
          <small>${(0,s.t)("editor.auto_enrichment_hint",(0,s.$c)(this.hass,this._config))}</small>
        </label>
      </div>
      <details class="sub-editor-details" open>
        <summary>Card settings</summary>
        <div id="sub-editor"></div>
      </details>
    `}static get styles(){return i.AH`.picker-wrap{padding:12px 0 4px;border-bottom:1px solid var(--divider-color,rgba(0,0,0,0.12));margin-bottom:16px;}.picker-desc{margin:6px 0 0;font-size:12px;color:var(--secondary-text-color);}.picker-label{display:block;margin-bottom:6px;color:var(--secondary-text-color);font-size:12px;}.type-picker,.profile-picker{box-sizing:border-box;width:100%;padding:12px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color);font-size:16px;}.profile-desc{margin-bottom:14px;}.enrichment-picker input{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color)}.enrichment-auto{display:grid;grid-template-columns:1fr auto;gap:4px 10px;align-items:center;margin:10px 0}.enrichment-auto small{grid-column:1/3;color:var(--secondary-text-color);font-size:12px}.editor-info,.editor-warning{margin-top:8px;padding:8px 10px;border-radius:6px;font-size:12px;}.enrichment-picker{display:grid;gap:6px;margin-top:12px;color:var(--primary-text-color);font-size:12px;font-weight:600;}.enrichment-picker small{color:var(--secondary-text-color);font-size:11px;font-weight:400;}.editor-info{color:var(--primary-text-color);background:rgba(33,150,243,0.10);border:1px solid rgba(33,150,243,0.22);}.editor-warning{color:var(--primary-text-color);background:rgba(255,152,0,0.12);border:1px solid rgba(255,152,0,0.28);}.sub-editor-details summary{cursor:pointer;margin-bottom:12px;color:var(--secondary-text-color);font-size:13px;font-weight:700;}`}}customElements.get("soccer-live-card-editor")||customElements.define("soccer-live-card-editor",_a),window.customCards=window.customCards||[],window.customCards.some(e=>"soccer-live-card"===e.type)||window.customCards.push({type:"soccer-live-card",name:"Soccer Live Card",description:"Live football scores, standings, lineup, countdown, news and more.",preview:0,documentationURL:"https://github.com/rononline/soccerlive-card"})})();