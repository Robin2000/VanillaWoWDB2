<?php

// Необходима функция creatureinfo
require_once('includes/allnpcs.php');

$smarty->config_load($conf_file, 'npc');

@list($type, $side, $weaponType, $trainerType, $trainerClass, $trainerRace, $trainerSpell, $npc_flags, $minLvl,$reqskill) = extract_values($podrazdel);

$cache_key = cache_key($type, $side, $weaponType, $trainerType, $trainerClass, $trainerRace, $trainerSpell, $npc_flags, $minLvl,$reqskill);

if(!$npcs = load_cache(2, $cache_key))
{
	unset($npcs);

	$testNpcFlag="";
	if(isset($npc_flags)){
		$testNpcFlag = " AND npc_flags&".$npc_flags."=".$npc_flags;
	} 
	$testSide="";
	if(isset($side)) {
		if($side==1)$testSide="AND A=1 AND H=-1";
		if($side==2)$testSide="AND A=-1 AND H=1";
		if($side==3)$testSide="AND A=1 AND H=1";
	}
	$testWeaponType="";
	if(isset($weaponType)) {
		switch($weaponType){
			case 1:$testWeaponType=" AND c.entry in(11867,13084,11866,11868,11870) ";break;
			case 2:$testWeaponType=" AND c.entry in(11867,11870) ";break;
			case 3:$testWeaponType=" AND c.entry in(11867,11870) ";break;
			case 4:$testWeaponType=" AND c.entry in(11865,11868,2704) ";break;
			case 5:$testWeaponType=" AND c.entry in(11865,11868,2704) ";break;
			case 6:$testWeaponType=" AND c.entry in(11865,11869) ";break;
			case 7:$testWeaponType=" AND c.entry in(11865,11869) ";break;
			case 8:$testWeaponType=" AND c.entry in(11865,11866,11868) ";break;
			case 9:$testWeaponType=" AND c.entry in(11867,11866,11869,2704) ";break;
			case 10:$testWeaponType=" AND c.entry in(11865,11869) ";break;
			case 11:$testWeaponType=" AND c.entry in(11866,11868,2704) ";break;
			case 12:$testWeaponType=" AND c.entry in(11867,13084,11870) ";break;
			case 13:$testWeaponType=" AND c.entry in(11867,11870) ";break;
			case 14:$testWeaponType=" AND c.entry in(13084,11866,11868,2704) ";break;
				
		}
	}

	$rows = $DB->select('
		SELECT name, patch,subname, level_min, level_max, type, rank, A as faction_A, H as faction_H, c.entry
		{
			, l.name_loc?d AS name_loc
			, l.subname_loc?d AS subname_loc
		}
		FROM ?_factiontemplate, creature_template c
		{ LEFT JOIN (locales_creature l) ON l.entry=c.entry AND ? }
		{ LEFT JOIN npc_trainer n ON n.entry=c.entry AND ? }
		WHERE
			factiontemplateID=faction
			{ AND type=? }
			{ AND trainer_type = ? AND npc_flags&16=16}
			{ AND trainer_class = ? }
			{ AND trainer_race = ? }
			{ AND trainer_spell = ? }
			'.$testNpcFlag.'
			'.$testSide.'
			'.$testWeaponType.'
			{ AND level_min = ? }
			{ AND reqskill = ? }
		ORDER BY level_min DESC, name
		{LIMIT ?d}
		',
		($_SESSION['locale']>0)? $_SESSION['locale']: DBSIMPLE_SKIP,
		($_SESSION['locale']>0)? $_SESSION['locale']: DBSIMPLE_SKIP,
		($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
		isset($reqskill) ? $reqskill : DBSIMPLE_SKIP,	
		isset($type) ? $type : DBSIMPLE_SKIP,	
		isset($trainerType) ? $trainerType : DBSIMPLE_SKIP,
		isset($trainerClass) ? $trainerClass : DBSIMPLE_SKIP,
		isset($trainerRace) ? $trainerRace : DBSIMPLE_SKIP,
		isset($trainerSpell) ? $trainerSpell : DBSIMPLE_SKIP,
		isset($minLvl) ? $minLvl : DBSIMPLE_SKIP,
		isset($reqskill) ? $reqskill : DBSIMPLE_SKIP,
		($AoWoWconf['limit']!=0)? $AoWoWconf['limit']: DBSIMPLE_SKIP
	);

	$npcs = array();
	foreach($rows as $row) {
		$npcs[] = creatureinfo2($row);
	}
	save_cache(5, $cache_key, $npcs);
}

$min_options = array('无限制');
for ($x = 1; $x <= 59; $x++){ array_push($min_options, $x);}
$smarty->assign('min_options', $min_options);

if(isset($minLvl)) {
 $smarty->assign('sel_min_lvl', $minLvl);
}

$smarty->assign('side',isset($side)?$side:'n');
$smarty->assign('weaponType',isset($weaponType)?$weaponType:'n');
$smarty->assign('trainerType',isset($trainerType)?$trainerType:'n');
$smarty->assign('trainerClass',isset($trainerClass)?$trainerClass:'n');
$smarty->assign('trainerRace',isset($trainerRace)?$trainerRace:'n');
$smarty->assign('trainerSpell',isset($trainerSpell)?$trainerSpell:'n');
$smarty->assign('npc_flags',isset($npc_flags)?$npc_flags:'n');
$smarty->assign('reqskill',isset($reqskill)?$reqskill:'n');

global $page;
$page = array(
	'Mapper' => false,
	'Book' => false,
	'Title' => $smarty->get_config_vars('NPCs'),
	'tab' => 0,
	'type' => 0,
	'typeid' => 0,
	'path' => path(0, 4, $family, $type)
);
$smarty->assign('page', $page);

$smarty->assign('npcs', $npcs);
// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
// Загружаем страницу
$smarty->display('npcs.tpl');

?>