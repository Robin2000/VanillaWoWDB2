<?php
require_once('includes/alllocales.php');
require_once('includes/game.php');

// Для списка creatureinfo()
$npc_cols[0] = array('name', 'subname', 'minlevel', 'maxlevel', 'type', 'rank', 'faction_A','faction_H');
$npc_cols[1] = array('subname', 'minlevel', 'maxlevel', 'type', 'rank', 'minhealth', 'maxhealth', 'minmana', 'maxmana', 'mingold', 'maxgold', 'AIName','lootid', 'spell1', 'spell2', 'spell3', 'spell4', 'A', 'H', 'mindmg', 'maxdmg', 'attackpower', 'dmg_multiplier', 'armor', 'baseattacktime', 'resistance1','resistance2','resistance3','resistance4','resistance5','resistance6');
$npc_type = array(LOCALE_TYPENPC_UNDEFINED,LOCALE_TYPENPC_BEAST,LOCALE_TYPENPC_DRAGON,LOCALE_TYPENPC_DEMON,LOCALE_TYPENPC_ELEM,LOCALE_TYPENPC_GIANT,LOCALE_TYPENPC_UNDEAD,LOCALE_TYPENPC_HUMAN,LOCALE_TYPENPC_CRITTER,LOCALE_TYPENPC_MECHANIC,LOCALE_TYPENPC_UNCATEGORY,LOCALE_TYPENPC_TOTEM,LOCALE_TYPENPC_COMPANION,LOCALE_TYPENPC_GAS_CLOUD);
$npc_rank = array(LOCALE_NORMAL,LOCALE_ELITE,LOCALE_RARE_ELITE,LOCALE_BOSS,LOCALE_RARE,LOCALE_UNKNOWN);

// Функция информации о создании
function creatureinfo2(&$Row)
{
	global $smarty;
	// Номер создания
	$creature['entry'] = $Row['entry'];
	// Имя создания
	$creature['name'] = localizedName($Row);
	// Заменяем " (1)" на " (героич.)"
	$creature['name'] = str_replace(' (1)', LOCALE_HEROIC, $creature['name']);
	// Подимя создания
	$creature['subname'] = localizedName($Row, 'subname');
	// Min/Max уровни
	$creature['minlevel'] = $Row['minlevel'];
	$creature['maxlevel'] = $Row['maxlevel'];
	// Get Location
	$creature['location'] = getLocation($creature['entry'], "creature");
	// Reaction
	$creature['react'] = ($Row['faction_A']).','.($Row['faction_H']);
	// Тип NPC
	$creature['type'] = $Row['type'];
	// Тег NPC
	$creature['tag'] = str_normalize($Row['subname']);
	// Ранг NPC
	$creature['classification'] = $Row['rank'];
	return $creature;
}
function eventDesc($e){
	switch($e) {
		case  0:return '"EVENT_T_TIMER"';                   // InitialMin, InitialMax, RepeatMin, RepeatMax                                        
		case  1:return '"EVENT_T_TIMER_OOC"';               // InitialMin, InitialMax, RepeatMin, RepeatMax                                        
		case  2:return '"EVENT_T_HP"';                      // HPMax%, HPMin%, RepeatMin, RepeatMax                                                
		case  3:return '"EVENT_T_MANA"';                    // ManaMax%,ManaMin% RepeatMin, RepeatMax                                              
		case  4:return '"EVENT_T_AGGRO"';                   // NONE                                                                                
		case  5:return '"EVENT_T_KILL"';                    // RepeatMin, RepeatMax, PlayerOnly                                                    
		case  6:return '"EVENT_T_DEATH"';                   // NONE                                                                                
		case  7:return '"EVENT_T_EVADE"';                   // NONE                                                                                
		case  8:return '"EVENT_T_SPELLHIT"';                // SpellID, School, RepeatMin, RepeatMax                                               
		case  9:return '"EVENT_T_RANGE"';                   // MinDist, MaxDist, RepeatMin, RepeatMax                                              
		case  10:return '"EVENT_T_OOC_LOS"';                // NoHostile, MaxRnage, RepeatMin, RepeatMax                                           
		case  11:return '"EVENT_T_SPAWNED"';                // NONE                                                                                
		case  12:return '"EVENT_T_TARGET_HP"';              // HPMax%, HPMin%, RepeatMin, RepeatMax                                                
		case  13:return '"EVENT_T_TARGET_CASTING"';         // RepeatMin, RepeatMax                                                                
		case  14:return '"EVENT_T_FRIENDLY_HP"';            // HPDeficit, Radius, RepeatMin, RepeatMax                                             
		case  15:return '"EVENT_T_FRIENDLY_IS_CC"';         // DispelType, Radius, RepeatMin, RepeatMax                                            
		case  16:return '"EVENT_T_FRIENDLY_MISSING_BUFF"';  // SpellId, Radius, RepeatMin, RepeatMax                                               
		case  17:return '"EVENT_T_SUMMONED_UNIT"';          // CreatureId, RepeatMin, RepeatMax                                                    
		case  18:return '"EVENT_T_TARGET_MANA"';            // ManaMax%, ManaMin%, RepeatMin, RepeatMax                                            
		case  19:return '"EVENT_T_QUEST_ACCEPT"';           // QuestID                                                                             
		case  20:return '"EVENT_T_QUEST_COMPLETE"';         //                                                                                     
		case  21:return '"EVENT_T_REACHED_HOME"';           // NONE                                                                                
		case  22:return '"EVENT_T_RECEIVE_EMOTE"';          // EmoteId, Condition, CondValue1, CondValue2                                          
		case  23:return '"EVENT_T_AURA"';                   // Param1 = SpellID, Param2 = Number of time stacked, Param3/4 Repeat Min/Max          
		case  24:return '"EVENT_T_TARGET_AURA"';            // Param1 = SpellID, Param2 = Number of time stacked, Param3/4 Repeat Min/Max          
		case  25:return '"EVENT_T_SUMMONED_JUST_DIED"';     // CreatureId, RepeatMin, RepeatMax                                                    
		case  26:return '"EVENT_T_SUMMONED_JUST_DESPAWN"';  // CreatureId, RepeatMin, RepeatMax                                                    
		case  27:return '"EVENT_T_MISSING_AURA"';           // Param1 = SpellID, Param2 = Number of time stacked expected, Param3/4 Repeat Min/Max 
		case  28:return '"EVENT_T_TARGET_MISSING_AURA"';    // Param1 = SpellID, Param2 = Number of time stacked expected, Param3/4 Repeat Min/Max 
		case  29:return '"EVENT_T_MOVEMENT_INFORM"';        // Param1 = motion type, Param2 = point ID, RepeatMin, RepeatMax                       
		case  30:return '"EVENT_T_LEAVE_COMBAT"';           // NONE                                                                                
		case  31:return '"EVENT_T_MAP_SCRIPT_EVENT"';       // Param1 = EventID, Param2 = Data                                                     
		case  32:return '"EVENT_T_GROUP_MEMBER_DIED"';      // Param1 = CreatureId, Param2 = IsLeader                            
		case  33:return '"EVENT_T_VICTIM_ROOTED"';          // RepeatMin, RepeatMax                                              
	
	}
	return $e;
}
function eventCommand($e){
	switch($e){
		case 0:return 'TALK';                  						// source case WorldObject                                                                     
																// target case Unit/None                                                                  
																// datalong case chat_type (see enum ChatType)                                            
																// dataint case broadcast_text id. dataint2-4 optional for random selected text.          
		case 1:return 'EMOTE';                             // source case Unit                                                                           
																// datalong case emote_id                                                                 
		case 2:return 'FIELD_SET';                         // source case Object                                                                         
																// datalong case field_id                                                                 
																// datalong2 case value                                                                   
		case 3:return 'MOVE_TO';                           // source case Creature                                                                       
																// target case WorldObject (for datalong > 0)                                             
																// datalong case coordinates_type (see enum eMoveToCoordinateTypes)                       
																// datalong2 case time                                                                    
																// datalong3 case movement_options (see enum MoveOptions)                                 
																// datalong4 case eMoveToFlags                                                            
																// dataint case path_id                                                                   
																// x/y/z/o case coordinates                                                               
		case 4:return 'MODIFY_FLAGS';                      // source case Object                                                                         
																// datalong case field_id                                                                 
																// datalong2 case bitmask                                                                 
																// datalong3 case eModifyFlagsOptions                                                     
		case 5:return 'INTERRUPT_CASTS';                   // source case Unit                                                                           
																// datalong case (bool) with_delayed                                                      
																// datalong2 case spell_id (optional)                                                     
		case 6:return 'TELEPORT_TO';                       // source case Unit                                                                           
																// datalong case map_id (only used for players but still required)                        
																// datalong2 case teleport_options (see enum TeleportToOptions)                           
																// x/y/z/o case coordinates                                                               
		case 7:return 'QUEST_EXPLORED';                    // source case Player (from provided source or target)                                        
																// target case WorldObject (from provided source or target)                               
																// datalong case quest_id                                                                 
																// datalong2 case distance or 0                                                           
																// datalong3 case (bool) group                                                            
		case 8:return 'KILL_CREDIT';                       // source case Player (from provided source or target)                                        
																// datalong case creature entry                                                           
																// datalong2 case bool (0=personal credit, 1=group credit)                                
		case 9:return 'RESPAWN_GAMEOBJECT';                // source case Map                                                                            
																// target case GameObject (from datalong, provided source or target)                      
																// datalong case db_guid                                                                  
																// datalong2 case despawn_delay                                                           
		case 10:return 'TEMP_SUMMON_CREATURE';              // source case WorldObject (from provided source or buddy)                                   
																// datalong case creature_entry                                                           
																// datalong2 case despawn_delay                                                           
																// datalong3 case unique_limit                                                            
																// datalong4 case unique_distance                                                         
																// dataint case eSummonCreatureFlags                                                      
																// dataint2 case script_id                                                                
																// dataint3 case attack_target (see enum Target)                                          
																// dataint4 case despawn_type (see enum TempSummonType)                                   
																// x/y/z/o case coordinates                                                               
		case 11:return 'OPEN_DOOR';                         // source case GameObject (from datalong, provided source or target)                         
																// If provided target is BUTTON GameObject, command is run on it too.                     
																// datalong case db_guid                                                                  
																// datalong2 case reset_delay                                                             
		case 12:return 'CLOSE_DOOR';                        // source case GameObject (from datalong, provided source or target)                         
																// If provided target is BUTTON GameObject, command is run on it too.                     
																// datalong case db_guid                                                                  
																// datalong2 case reset_delay                                                             
		case 13:return 'ACTIVATE_OBJECT';                   // source case GameObject                                                                    
																// target case Unit                                                                       
		case 14:return 'REMOVE_AURA';                       // source case Unit                                                                          
																// datalong case spell_id                                                                 
		case 15:return 'CAST_SPELL';                        // source case Unit                                                                          
																// target case Unit                                                                       
																// datalong case spell_id                                                                 
																// datalong2 case eCastSpellFlags                                                         
		case 16:return 'PLAY_SOUND';                        // source case WorldObject                                                                   
																// target case Player/None                                                                
																// datalong case sound_id                                                                 
																// datalong2 case ePlaySoundFlags                                                         
		case 17:return 'CREATE_ITEM';                       // source case Player (from provided source or target)                                       
																// datalong case item_entry                                                               
																// datalong2 case amount                                                                  
		case 18:return 'DESPAWN_CREATURE';                  // source case Creature                                                                      
																// datalong case despawn_delay                                                            
		case 19:return 'SET_EQUIPMENT';                     // source case Creature                                                                      
																// datalong case (bool) reset_default                                                     
																// dataint case main-hand item_id                                                         
																// dataint2 case off-hand item_id                                                         
																// dataint3 case ranged item_id                                                           
		case 20:return 'MOVEMENT';                          // source case Creature                                                                      
																// datalong case see enum MovementGeneratorType (not all are supported)                   
																// datalong2 case bool_param (meaning depends on the motion type)                         
																// datalong3 case int_param (meaning depends on the motion type)                          
																// datalong4 case (bool) clear                                                            
																// x case distance (only for some motion types)                                           
																// o case angle (only for some motion types)                                              
		case 21:return 'SET_ACTIVEOBJECT';                  // source case Creature                                                                      
																// datalong case (bool) 0=off, 1=on                                                       
		case 22:return 'SET_FACTION';                       // source case Creature                                                                      
																// datalong case faction_Id,                                                              
																// datalong2 case see enum TemporaryFactionFlags                                          
		case 23:return 'MORPH_TO_ENTRY_OR_MODEL';           // source case Unit                                                                          
																// datalong case creature entry/modelid (depend on datalong2)                             
																// datalong2 case (bool) is_display_id                                                    
		case 24:return 'MOUNT_TO_ENTRY_OR_MODEL';           // source case Creature                                                                      
																// datalong case creature entry/modelid (depend on datalong2)                             
																// datalong2 case (bool) is_display_id                                                    
																// datalong3 case (bool) permanent                                                        
		case 25:return 'SET_RUN';                           // source case Creature                                                                      
																// datalong case (bool) 0 case off, 1 case on                                             
		case 26:return 'ATTACK_START';                      // source case Creature                                                                      
																// target case Player                                                                     
		case 27:return 'UPDATE_ENTRY';                      // source case Creature                                                                      
																// datalong case creature_entry                                                           
																// datalong2 case team for display_id (0 case alliance, 1 case horde)                     
		case 28:return 'STAND_STATE';                       // source case Unit                                                                          
																// datalong case stand_state (enum UnitStandStateType)                                    
		case 29:return 'MODIFY_THREAT';                     // source case Creature                                                                      
																// datalong case eModifyThreatTargets                                                     
																// x case percent                                                                         
		case 30:return 'SEND_TAXI_PATH';                    // source case Player                                                                        
																// datalong case taxi_path_id                                                             
		case 31:return 'TERMINATE_SCRIPT';                  // source case Any                                                                           
																// datalong case creature_entry                                                           
																// datalong2 case search_distance                                                         
																// datalong3 case eTerminateScriptOptions                                                 
		case 32:return 'TERMINATE_CONDITION';               // source case Any                                                                           
																// datalong case condition_id                                                             
																// datalong2 case failed_quest_id                                                         
																// datalong3 case eTerminateConditionFlags                                                
		case 33:return 'ENTER_EVADE_MODE';                  // source case Creature                                                                      
		case 34:return 'SET_HOME_POSITION';                 // source case Creature                                                                      
																// datalong case eSetHomePositionOptions                                                  
																// x/y/z/o case coordinates                                                               
		case 35:return 'TURN_TO';                           // source case Unit                                                                          
																// target case WorldObject                                                                
																// datalong case eTurnToFacingOptions                                                     
		case 36:return 'MEETINGSTONE';                      // source case Player                                                                        
																// datalong case area_id                                                                  
		case 37:return 'SET_INST_DATA';                     // source case Map                                                                           
																// datalong case field                                                                    
																// datalong2 case data                                                                    
																// datalong3 case eSetInstDataOptions                                                     
		case 38:return 'SET_INST_DATA64';                   // source case Map                                                                           
																// target case Object (when saving guid)                                                  
																// datalong case field                                                                    
																// datalong2 case data                                                                    
																// datalong3 case eSetInstData64Options                                                   
		case 39:return 'START_SCRIPT';                      // source case Map                                                                           
																// datalong1-4 case event_script id                                                       
																// dataint1-4 case chance (total cant be above 100)                                       
		case 40:return 'REMOVE_ITEM';                       // source case Player (from provided source or target)                                       
																// datalong case item_entry                                                               
																// datalong2 case amount                                                                  
		case 41:return 'REMOVE_OBJECT';                     // source case GameObject                                                                    
																// target case Unit                                                                       
		case 42:return 'SET_MELEE_ATTACK';                  // source case Creature                                                                      
																// datalong case (bool) 0 case off, 1 case on                                             
		case 43:return 'SET_COMBAT_MOVEMENT';               // source case Creature                                                                      
																// datalong case (bool) 0 case off, 1 case on                                             
		case 44:return 'SET_PHASE';                         // source case Creature                                                                      
																// datalong case phase                                                                    
																// datalong2 case eSetPhaseOptions                                                        
		case 45:return 'SET_PHASE_RANDOM';                  // source case Creature                                                                      
																// datalong1-4 case phase                                                                 
		case 46:return 'SET_PHASE_RANGE';                   // source case Creature                                                                      
																// datalong case phase_min                                                                
																// datalong2 case phase_max                                                               
		case 47:return 'FLEE';                              // source case Creature                                                                      
																// datalong case seek_assistance (bool) 0 case off, 1 case on                             
		case 48:return 'DEAL_DAMAGE';                       // source case Unit                                                                          
																// target case Unit                                                                       
																// datalong case damage                                                                   
																// datalong2 case (bool) is_percent                                                       
		case 49:return 'ZONE_COMBAT_PULSE';                 // source case Creature                                                                      
																// datalong case (bool) initialPulse                                                      
		case 50:return 'CALL_FOR_HELP';                     // source case Creature                                                                      
																// x case radius                                                                          
		case 51:return 'SET_SHEATH';                        // source case Unit                                                                          
																// datalong case see enum SheathState                                                     
		case 52:return 'INVINCIBILITY';                     // source case Creature                                                                      
																// datalong case health                                                                   
																// datalong2 case (bool) is_percent                                                       
		case 53:return 'GAME_EVENT';                        // source case None                                                                          
																// datalong case event_id                                                                 
																// datalong2 case (bool) start                                                            
																// datalong3 case (bool) overwrite                                                        
		case 54:return 'SET_SERVER_VARIABLE';               // source case None                                                                          
																// datalong case index                                                                    
																// datalong2 case value                                                                   
		case 55:return 'CREATURE_SPELLS';                   // source case Creature                                                                      
																// datalong1-4 case creature_spells id                                                    
																// dataint1-4 case chance (total cant be above 100)                                       
		case 56:return 'REMOVE_GUARDIANS';                  // source case Unit                                                                          
																// datalong case creature_id                                                              
		case 57:return 'ADD_SPELL_COOLDOWN';                // source case Unit                                                                          
																// datalong case spell_id                                                                 
																// datalong2 case cooldown                                                                
		case 58:return 'REMOVE_SPELL_COOLDOWN';             // source case Unit                                                                          
																// datalong case spell_id                                                                 
		case 59:return 'SET_REACT_STATE';                   // source case Creature                                                                      
																// datalong case see enum ReactStates                                                     
		case 60:return 'START_WAYPOINTS';                   // source case Creature                                                                      
																// datalong case waypoints_source                                                         
																// datalong2 case start_point                                                             
																// datalong3 case initial_delay                                                           
																// datalong4 case (bool) repeat                                                           
																// dataint case path_id                                                                   
																// dataint2 case overwrite_entry                                                          
		case 61:return 'START_MAP_EVENT';                   // source case Map                                                                           
																// datalong case event_id                                                                 
																// datalong2 case time_limit                                                              
																// dataint case success_condition                                                         
																// dataint2 case success_script                                                           
																// dataint3 case failure_condition                                                        
																// dataint4 case failure_script                                                           
		case 62:return 'END_MAP_EVENT';                     // source case Map                                                                           
																// datalong case event_id                                                                 
																// datalong2 case (bool) success                                                          
		case 63:return 'ADD_MAP_EVENT_TARGET';              // source case Map                                                                           
																// target case WorldObject                                                                
																// datalong case event_id                                                                 
																// dataint case success_condition                                                         
																// dataint2 case success_script                                                           
																// dataint3 case failure_condition                                                        
																// dataint4 case failure_script                                                           
		case 64:return 'REMOVE_MAP_EVENT_TARGET';           // source case Map                                                                           
																// target case WorldObject                                                                
																// datalong case event_id                                                                 
																// datalong2 case condition_id                                                            
																// datalong3 case eRemoveMapEventTargetOptions                                            
		case 65:return 'SET_MAP_EVENT_DATA';                // source case Map                                                                           
																// datalong case event_id                                                                 
																// datalong2 case index                                                                   
																// datalong3 case data                                                                    
																// datalong4 case eSetMapScriptDataOptions                                                
		case 66:return 'SEND_MAP_EVENT';                    // source case Map                                                                           
																// datalong case event_id                                                                 
																// datalong2 case data                                                                    
																// datalong3 case eSendMapEventOptions                                                    
		case 67:return 'SET_DEFAULT_MOVEMENT';              // source case Creature                                                                      
																// datalong case movement_type                                                            
																// datalong2 case (bool) always_replace                                                   
																// datalong3 case param1                                                                  
		case 68:return 'START_SCRIPT_FOR_ALL';              // source case WorldObject                                                                   
																// datalong case script_id                                                                
																// datalong2 case eStartScriptForAllOptions                                               
																// datalong3 case object_entry                                                            
																// datalong4 case search_radius                                                           
		case 69:return 'EDIT_MAP_EVENT';                    // source case Map                                                                           
																// datalong case event_id                                                                 
																// dataint case success_condition                                                         
																// dataint2 case success_script                                                           
																// dataint3 case failure_condition                                                        
																// dataint4 case failure_script                                                           
		case 70:return 'FAIL_QUEST';                        // source case Player                                                                        
																// datalong case quest_id                                                                 
		case 71:return 'RESPAWN_CREATURE';                  // source case Creature                                                                      
																// datalong case (bool) even_if_alive                                                     
		case 72:return 'ASSIST_UNIT';                       // source case Creature                                                                      
																// target case Unit                                                                       
		case 73:return 'COMBAT_STOP';                       // source case Unit                                                                          
		case 74:return 'ADD_AURA';                          // source case Unit                                                                          
																// datalong case spell_id                                                                 
																// datalong2 case flags                                                                   
		case 75:return 'ADD_THREAT';                        // source case Creature                                                                      
																// target case Unit                                                                       
		case 76:return 'SUMMON_OBJECT';                     // source case WorldObject                                                                   
																// datalong case gameobject_entry                                                         
																// datalong2 case respawn_time                                                            
																// x/y/z/o case coordinates                                                               
																																						
		case 9999:  return 'DISABLED';                          // Script action was disabled during loading.                                            

	}
	return $e;
}
function loadCreatureAiEvent($creature_id){
	global $DB;
	$row = $DB->select('
		SELECT comment,id,condition_id,event_type,event_chance,action1_script,action2_script,action3_script
		FROM creature_ai_events
		WHERE creature_id=?d
		',
		$creature_id
	);


	foreach ($row as &$e) {
		$e['event_type']=eventDesc($e['event_type']);

		$commands = [];
		if ($e['action1_script']>0) array_push($commands, $e['action1_script']);
		if ($e['action2_script']>0) array_push($commands ,$e['action2_script']);
		if ($e['action3_script']>0) array_push($commands ,$e['action3_script']);
		if (count($commands)>0)     
			loadAi_scripts($e,$commands);
		else
			$e['action_comment']='""';

		return $row;
	}

}
function loadAi_scripts(&$e,$commands){
	global $DB;
	$row = $DB->select('
		SELECT delay,command,datalong,datalong2,datalong3,datalong4,condition_id,comments
		FROM creature_ai_scripts
		WHERE id in (?a)
		ORDER BY id,delay
		',
		$commands
	);

	if(count($row)==0) {
		$e['action_comment']='"err,'.join(' ',$commands).'"';
		return;
	}
	$action_comment='';
	foreach ($row as &$c) {
		$type=eventCommand($c['command']);
		if($type=='START_SCRIPT'){
			$commandsSub = [];
			if ($c['datalong']>0) array_push($commandsSub, $c['datalong']);
			if ($c['datalong2']>0) array_push($commandsSub ,$c['datalong2']);
			if ($c['datalong3']>0) array_push($commandsSub ,$c['datalong3']);
			if ($c['datalong4']>0) array_push($commandsSub ,$c['datalong4']);
			if (count($commandsSub)>0)     
				$action_comment .=loadEvent_scripts($commandsSub);
			else
				$action_comment .='err,'.join(' ',$commandsSub);
			continue;
		}
		$action_comment.='\r\n<br/>延时'.$c['delay'].'秒,';
		$action_comment.=$type.',';
		$action_comment.=$c['datalong'].' '.$c['datalong2'].' '.$c['datalong3'].' '.$c['datalong4'].',';
		$action_comment.=$c['comments'].',';
		if($c['condition_id']>0)
			$action_comment.='条件:'.$c['condition_id'];
	}
	$e['action_comment']='"'.$action_comment.'"';
}

function loadEvent_scripts($commands){
	global $DB;
	$row = $DB->select('
		SELECT delay,command,datalong,datalong2,datalong3,datalong4,condition_id,comments
		FROM event_scripts
		WHERE id in (?a)
		ORDER BY id,delay
		',
		$commands
	);

	if(count($row)==0) {
		$e['action_comment']='"err,'.join(' ',$commands).'"';
		return;
	}
	$action_comment='';
	foreach ($row as &$c) {
		$action_comment.='延时'.$c['delay'].'秒,';
		$action_comment.=eventCommand($c['command']).',';
		$action_comment.=$c['datalong'].' '.$c['datalong2'].' '.$c['datalong3'].' '.$c['datalong4'].',';
		$action_comment.=$c['comments'].',';
		if($c['condition_id']>0)
			$action_comment.='条件:'.$c['condition_id'];
	}
	return $action_comment;
}
// Функция информации о создании
function creatureinfo($id)
{
	global $DB;
	global $npc_cols;
	$row = $DB->selectRow('
		SELECT ?#, c.entry
		{
			, l.name_loc'.$_SESSION['locale'].' as `name_loc`
			, l.subname_loc'.$_SESSION['locale'].' as `subname_loc`
			, ?
		}
		FROM ?_factiontemplate, creature_template c
		{
			LEFT JOIN (locales_creature l)
			ON l.entry=c.entry AND ?
		}
		WHERE
			c.entry=?d
			AND factiontemplateID=faction_A
		LIMIT 1
		',
		$npc_cols[0],
		($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
		($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
		$id
	);
	return creatureinfo2($row);
}

function GetNPCTooltip($row)
{
	global $npc_type, $npc_rank;
    $creature = array(
        'entry'          => $row['entry'],
        'source_name'    => $row['name'],
        'name'           => localizedName($row),
        'subname'        => localizedName($row, 'subname'),
        'minlevel'       => $row['minlevel'],
        'maxlevel'       => $row['maxlevel'],
        'react'          => $row['A'].','.$row['H'],
        'type'           => $row['type'],
        'classification' => $row['classification'],
        'expansion'      => '1.12.1'
    );
    $x = '';
    $x .= '<table><tr><td>'.'<b class="q">';
    $x .= htmlspecialchars($creature['name']);
    $x .= '</b></td></tr><tr><td>';
    if($creature['subname'])
        $x .= '<'.htmlspecialchars($creature['subname']).'>';
    $x .= '</td></tr><tr><td>';
    if (isset($creature['minlevel']))
    {
        if($creature['classification'] == 3)
            $x .= LOCALE_LEVEL.' ?? ';
        elseif($creature['minlevel'] == $creature['maxlevel'])
            $x .= LOCALE_LEVEL.' '.$creature['minlevel'].' ';
        else
            $x .= LOCALE_LEVEL.' '.$creature['minlevel'].'-'.$creature['maxlevel'].' ';
    }
    if($creature['type'] && $creature['type'] != 10)
        $x .= $npc_type[$creature['type']].' ';
    if(isset($creature['classification']))
        $x .= '('.$npc_rank[$creature['classification']].')';
    $x .= '</tr></td></tr></table>';
    $creature['tooltip'] = $x;
    
    return $creature;
}

?>