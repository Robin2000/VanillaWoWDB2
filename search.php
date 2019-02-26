<?php

// Необходима функция iteminfo
require_once('includes/game.php');
require_once('includes/allspells.php');
require_once('includes/allquests.php');
require_once('includes/allitems.php');
require_once('includes/allnpcs.php');
require_once('includes/allobjects.php');

// Настраиваем Smarty ;)
$smarty->config_load($conf_file, 'search');

// Строка поиска:
$search = urldecode($podrazdel);
$nsearch = $search;
$smarty->assign('search', $search);

// Подключаемся к ДБ
global $DB;
global $allitems;
global $allspells;

global $npc_cols;
global $spell_cols;

// Массив всего найденного
$found = array();

// Ищем вещи:
if($_SESSION['locale']>0)
{
	$m = $DB->selectCol('
			SELECT entry
			FROM locales_item
			WHERE MATCH(name_loc?d) AGAINST (?)
		',
		$_SESSION['locale'],
		$nsearch
	);
}

$rows = $DB->select('
		SELECT i.?#
			{, l.name_loc?d AS `name_loc`}
		FROM aowow_icons a, item_template i
			{LEFT JOIN (locales_item l) ON l.entry=i.entry AND ?d}
		WHERE
			(MATCH(i.name) AGAINST (?) {OR i.entry IN (?a)})
			AND a.id = i.display_id;
	',
	$item_cols[3],
	($m)? $_SESSION['locale']: DBSIMPLE_SKIP,
	($m)? 1: DBSIMPLE_SKIP,
	$nsearch,
	($m)? $m: DBSIMPLE_SKIP
);
$rows = sanitiseitemrows($rows);
unset($m);
foreach($rows as $row)
	$found['item'][] = iteminfo2($row);

// Ищем NPC:
if($_SESSION['locale']>0)
{
	$m = $DB->selectCol('
			SELECT entry
			FROM locales_creature
			WHERE
				MATCH(name_loc?d,subname_loc?d) AGAINST (?)
		',
		$_SESSION['locale'], $_SESSION['locale'], $nsearch
	);
}
$rows = $DB->select('
		SELECT ?#, c.entry
			{, l.name_loc?d AS `name_loc`,
			l.subname_loc'.$_SESSION['locale'].' AS `subname_loc`}
		FROM ?_factiontemplate, creature_template c
			{LEFT JOIN (locales_creature l) ON l.entry=c.entry AND ?d}
		WHERE
			(MATCH(name,subname) AGAINST (?)
			{OR c.entry IN (?a)})
			AND factiontemplateID=faction_A
	',
	$npc_cols[0],
	($m)? $_SESSION['locale']: DBSIMPLE_SKIP,
	($m)? 1: DBSIMPLE_SKIP,
	$nsearch,
	($m)? $m: DBSIMPLE_SKIP
);
unset($m);
foreach($rows as $row)
	$found['npc'][] = creatureinfo2($row);

// Ищем объекты
if($_SESSION['locale']>0)
{
	$m = $DB->selectCol('
			SELECT entry
			FROM locales_gameobject
			WHERE
				MATCH(name_loc?d) AGAINST (?)
		',
		$_SESSION['locale'], $nsearch
	);
}
$rows = $DB->select('
		SELECT g.?#
			{, l.name_loc?d AS `name_loc`}
		FROM gameobject_template g
			{LEFT JOIN (locales_gameobject l) ON l.entry=g.entry AND ?d}
		WHERE MATCH(name) AGAINST (?) {OR g.entry IN (?a)}
	',
	$object_cols[0],
	($m)? $_SESSION['locale']: DBSIMPLE_SKIP,
	($m)? 1: DBSIMPLE_SKIP,
	$nsearch,
	($m)? $m: DBSIMPLE_SKIP
);
unset($m);
foreach($rows as $row)
	$found['object'][] = objectinfo2($row);

// Ищем квесты
if($_SESSION['locale']>0)
{
	$m = $DB->selectCol('
			SELECT entry
			FROM locales_quest
			WHERE
				MATCH(Title_loc4,Details_loc4,Objectives_loc4,OfferRewardText_loc4,RequestItemsText_loc4,EndText_loc4,ObjectiveText1_loc4,ObjectiveText2_loc4,ObjectiveText3_loc4,ObjectiveText4_loc4) AGAINST (?)
		',
		$nsearch
	);
}
$rows = $DB->select('
		SELECT *
			{, l.Title_loc?d AS `Title_loc`}
		FROM quest_template q
			{LEFT JOIN (locales_quest l) ON l.entry=q.entry AND ?d}
		WHERE MATCH(Title,Details,Objectives,OfferRewardText,RequestItemsText,EndText,ObjectiveText1,ObjectiveText2,ObjectiveText3,ObjectiveText4) AGAINST (?) {OR q.entry IN (?a)}
	',
	($m)? $_SESSION['locale']: DBSIMPLE_SKIP,
	($m)? 1: DBSIMPLE_SKIP,
	$nsearch,
	($m)? $m: DBSIMPLE_SKIP
);
unset($m);
foreach($rows as $row)
	$found['quest'][] = GetQuestInfo($row, 0xFFFFFF);

// Ищем наборы вещей
$rows = $DB->select('
		SELECT *
		FROM ?_itemset
		WHERE MATCH(name_loc0,name_loc4) AGAINST (?)
	',
	$nsearch
);
foreach($rows as $row)
	$found['itemset'][] = itemsetinfo2($row);

// Ищем спеллы
$rows = $DB->select('
		SELECT ?#, spellID
		FROM ?_spell s, ?_spellicons i
		WHERE
			MATCH(spellname_loc0,spellname_loc4) AGAINST (?)
			AND i.id = s.spellicon
	',
	$spell_cols[2],
	$nsearch
);
foreach($rows as $row)
	$found['spell'][] = spellinfo2($row);

$keys = array_keys($found);

// Если найден один элемент - перенаправляем на него
if(count($found) == 1 && count($found[$keys[0]]) == 1)
{
	header("Location: ?".$keys[0].'='.$found[$keys[0]][0]['entry']);
}
else
{
	$smarty->assign('found', $found);

	// Если хоть одна информация о вещи найдена - передаём массив с информацией о вещях шаблонизатору
	$smarty->assign('allitems', $allitems);
	$smarty->assign('allspells', $allspells);

	// Параметры страницы
	$page = array();
	// Номер вкладки меню
	$page['tab'] = 0;
	// Заголовок страницы
	$page['Title'] = $search.' - '.$smarty->get_config_vars('Search');
	$smarty->assign('page', $page);

	$smarty->assign('mysql', $DB->getStatistics());
	$smarty->assign('search', $search);

	$smarty->display('search.tpl');
}

?>