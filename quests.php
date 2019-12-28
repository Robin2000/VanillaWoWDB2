<?php

// Необходима функция questinfo
require_once('includes/allquests.php');

$smarty->config_load($conf_file, 'quest');

// 从请求中分离出任务类和子类
@list($Type, $ZoneOrSort, $difficulty, $side, $reward, $job, $minLvl, $maxLvl) = extract_values($podrazdel);

$cache_key = cache_key($Type, $ZoneOrSort, $difficulty, $side, $reward, $job, $minLvl, $maxLvl);

if(!$quests = load_cache(12, $cache_key))
{
	unset($quests);

	$testSide="";
	if(isset($side)) {
		if($side==1)$testSide="AND A=1 AND H=-1";
		if($side==2)$testSide="AND A=-1 AND H=1";
	}
	$testReward="";
	if(isset($reward)) {
		if($reward==1) $testReward="AND (RewItemId1>0 OR RewItemId2>0 OR RewItemId3>0 OR RewItemId4>0)";
		if($reward==2) $testReward="AND (RewRepFaction1>0 OR RewRepFaction2>0 OR RewRepFaction3>0 OR RewRepFaction4>0 OR RewRepFaction5>0)";
		if($reward==3) $testReward="AND RewOrReqMoney>0";
		if($reward==4) $testReward="AND RewSpell>0";
		if($reward==5) $testReward="AND RewSpellCast>0";
	}
	$rows = $DB->select('
		SELECT q.`entry`, q.`patch`, `Title`, `QuestLevel`, q.`MinLevel`, `RequiredRaces`, `RewChoiceItemId1`, `RewChoiceItemId2`, `RewChoiceItemId3`, `RewChoiceItemId4`, `RewChoiceItemId5`, `RewChoiceItemId6`, `RewChoiceItemCount1`, `RewChoiceItemCount2`, `RewChoiceItemCount3`, `RewChoiceItemCount4`, `RewChoiceItemCount5`, `RewChoiceItemCount6`, `RewItemId1`, `RewItemId2`, `RewItemId3`, `RewItemId4`, `RewItemCount1`, `RewItemCount2`, `RewItemCount3`, `RewItemCount4`, `RewMoneyMaxLevel`, `RewOrReqMoney`, q.`Type`, `ZoneOrSort`, `QuestFlags`
		{
			, l.Title_loc?d AS Title_loc
		}
		FROM quest_template q
		{ LEFT JOIN (locales_quest l) ON l.entry=q.entry AND ? }
		{ INNER JOIN creature_questrelation r ON q.entry=r.quest INNER JOIN creature_template c ON c.entry=r.id INNER JOIN aowow_factiontemplate f ON f.factiontemplateID=c.faction_A AND ?}
		WHERE
			1 = 1
			{ AND ZoneOrSort = ? }
			{ AND ZoneOrSort IN (?a) }
			{ AND q.type=? }
			{ '.$testSide.' }
			{ '.$testReward.' }
			{ AND q.RequiredClasses=?d }
			{ AND q.MinLevel=?d }
			{ AND q.MaxLevel=?d }
		{LIMIT ?d}
		',
		($_SESSION['locale']>0)? $_SESSION['locale']: DBSIMPLE_SKIP,
		($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
		isset($side)? 1: DBSIMPLE_SKIP,
		isset($ZoneOrSort) ? $ZoneOrSort : DBSIMPLE_SKIP,
		(!isset($ZoneOrSort) && isset($Type)) ? $quest_class[$Type] : DBSIMPLE_SKIP,
		isset($difficulty) ? $difficulty : DBSIMPLE_SKIP,
		isset($job) ? pow(2,($job-1)) : DBSIMPLE_SKIP,
		isset($minLvl) ? $minLvl : DBSIMPLE_SKIP,
		isset($maxLvl) ? $maxLvl : DBSIMPLE_SKIP,
		($AoWoWconf['limit'] > 0)? $AoWoWconf['limit']: DBSIMPLE_SKIP
	);

	$quests = array();
	foreach($rows as $row)
		$quests[] = GetQuestInfo($row, QUEST_DATAFLAG_LISTINGS);

	save_cache(12, $cache_key, $quests);
}
global $page;
$page = array(
	'Mapper' => false,
	'Book' => false,
	'Title' => $smarty->get_config_vars('Quests'),
	'tab' => 0,
	'type' => 0,
	'typeid' => 0,
	'path' => path(0, 3, $Type, $ZoneOrSort) // TODO
);
$smarty->assign('page', $page);


$min_options = array('无限制');
for ($x = 1; $x <= 59; $x++){ array_push($min_options, $x);}
$max_options = array();
for ($x = 2; $x <= 60; $x++){ array_push($max_options, $x);}

$smarty->assign('min_options', $min_options);
$smarty->assign('max_options', $max_options);
if(isset($minLvl)) {
 $smarty->assign('sel_min_lvl', $minLvl);
}
// Если хоть одна информация о вещи найдена - передаём массив с информацией о вещях шаблонизатору
$smarty->assign('allitems',$allitems);
$smarty->assign('quests',$quests);
// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
// Загружаем страницу
$smarty->display('quests.tpl');

?>