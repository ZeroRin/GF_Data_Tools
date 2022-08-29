const jsonNames = [
	'achievement',
	'ally_team',
	'attendance_info',
	'auto_formation',
	'auto_mission',
	'battle_action_config',
	'battle_buff',
	'battle_creation',
	'battle_formula',
	'battle_hurt_config',
	'battle_movement_info',
	'battle_skill_config',
	'battle_skill_type_config',
	'battle_target_select_ai',
	'battle_trigger',
	'battle_watch',
	'battle_watch_trigger',
	'bingo_info',
	'bingo_task_info',
	'bingo_task_type',
	'bondage_lines',
	'building',
	'career_quest',
	'career_quest_grade',
	'career_quest_group',
	'carnival_goto_page_info',
	'carnival_info',
	'carnival_label_info',
	'carnival_task_info',
	'carnival_task_type',
	'chat_channel',
	'chat_fix_phrases',
	'chess_buff',
	'chess_camp_type',
	'chess_chip',
	'chess_chip_target_select',
	'chess_choice_stage',
	'chess_creation_logic',
	'chess_creation_perform',
	'chess_enemy',
	'chess_game_config',
	'chess_gasha_reward',
	'chess_gun_type',
	'chess_map',
	'chess_mission',
	'chess_model',
	'chess_random_enemy',
	'chess_random_spot',
	'chess_scorelevel',
	'chess_seasonevent',
	'chess_selectframe',
	'chess_skill',
	'chess_skill_trigger',
	'chess_spot',
	'chess_voice',
	'coffeeshop_comic',
	'coffeeshop_pv',
	'commander_class',
	'commander_color',
	'commander_emoji',
	'commander_ranking_scores',
	'commander_ranking_types',
	'commander_uniform',
	'daily',
	'daily_info',
	'dorm_action',
	'dorm_ai',
	'dorm_emoji_text_info',
	'draw_event',
	'draw_event_info',
	'drop_content',
	'drop_package',
	'enemy_character_type',
	'enemy_illustration',
	'enemy_illustration_skill',
	'enemy_in_team',
	'enemy_standard_attribute',
	'enemy_team',
	'enemy_voice_info',
	'equip',
	'equip_category',
	'equip_exp_info',
	'equip_group',
	'equip_in_ally_info',
	'equip_type',
	'event_battlepass',
	'event_prize_level',
	'event_rank',
	'explore_affair_client',
	'explore_affair_server',
	'explore_area',
	'explore_destination',
	'explore_item',
	'explore_mall',
	'explore_script',
	'explore_time_type',
	'extra_spine',
	'fairy',
	'fairy_charavoice',
	'fairy_exp_info',
	'fairy_in_ally',
	'fairy_in_ally_info',
	'fairy_live2d_info',
	'fairy_live2d_motions_info',
	'fairy_skin_info',
	'fairy_talent',
	'fairy_talent_type',
	'fairy_type',
	'fairy_type_info',
	'fetter',
	'fetter_bounty',
	'fetter_skill',
	'fetter_story',
	'fight_environment_config',
	'fight_environment_skill',
	'fight_success_condition',
	'fight_type',
	'friend_cosmetic',
	'function_control_info',
	'function_skill_config',
	'furniture',
	'furniture_classes',
	'furniture_classes_info',
	'furniture_establish_info',
	'furniture_interact_point',
	'game_config_info',
	'gift_item',
	'guild_emoji',
	'guild_emoji_group',
	'guild_flag',
	'guild_level',
	'gun',
	'gun_charavoice',
	'gun_exp_info',
	'gun_in_ally',
	'gun_obtain',
	'gun_obtain_info',
	'gun_tag_info',
	'gun_tag_type_info',
	'gun_type_info',
	'item',
	'item_access',
	'kalina_favor_info',
	'live2d',
	'live2d_motions',
	'mail_content',
	'main_quest_info',
	'mall',
	'mall_classification',
	'mall_info',
	'manual_ui',
	'medal',
	'medal_appearance_info',
	'medal_info',
	'mindupdate_story_info',
	'mission',
	'mission_buff_config',
	'mission_control_info',
	'mission_draw_bonus',
	'mission_echo_info',
	'mission_effect_config',
	'mission_effect_config_info',
	'mission_entrance_package',
	'mission_event',
	'mission_event_prize_info',
	'mission_group_info',
	'mission_hurt_config',
	'mission_key_info',
	'mission_mapped',
	'mission_skill_config',
	'mission_targettrain',
	'mission_targettrain_battlesetting',
	'mission_targettrain_enemy',
	'mission_win_step_control',
	'mission_win_type_config',
	'npc',
	'npc_charavoice',
	'operation_info',
	'organization',
	'organization_bounty',
	'organization_level',
	'point_mall',
	'present',
	'prize',
	'rank',
	'rank_info',
	'recommended_formula',
	'related_story',
	'rouge_sk',
	'sangvis',
	'sangvis_advance',
	'sangvis_character_type',
	'sangvis_charavoice',
	'sangvis_chip',
	'sangvis_chip_skill',
	'sangvis_exchange_mall',
	'sangvis_exp',
	'sangvis_gasha',
	'sangvis_gasha_reward',
	'sangvis_in_ally',
	'sangvis_resolution',
	'sangvis_sign',
	'sangvis_type',
	'score_to_rate_info',
	'seven_attendance_info',
	'seven_spendpoint_info',
	'share_content_info',
	'skin',
	'skin_bonus_info',
	'skin_class',
	'skin_group_info',
	'special_spot_config',
	'spot',
	'spot_buff_config',
	'squad',
	'squad_advanced_bonus',
	'squad_chip',
	'squad_chip_exp',
	'squad_color',
	'squad_cpu',
	'squad_cpu_completion',
	'squad_data_daily',
	'squad_exp',
	'squad_grid',
	'squad_in_ally',
	'squad_rank',
	'squad_standard_attribution',
	'squad_type',
	'story_playback',
	'story_util',
	'summoner',
	'team_ai',
	'theater',
	'theater_area',
	'theater_construction',
	'theater_effect',
	'theater_event',
	'theater_incident', 
	'theater_reward',
	'theater_selection',
	'tips_info',
	'tips_manage_info',
	'trial_info',
	'trigger_index',
	'tutorial_guide',
	'tutorial_manual',
	'unit_character',
	'weekly',
	'weekly_info'
];
