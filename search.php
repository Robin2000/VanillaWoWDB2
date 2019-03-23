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
			WHERE MATCH(name_loc4) AGAINST (+?) AND  name_loc4 like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}

$rows = $DB->select('
		SELECT i.?#
			{, l.name_loc?d AS `name_loc`}
		FROM aowow_icons a, item_template i
			{LEFT JOIN (locales_item l) ON l.entry=i.entry AND ?d}
		WHERE
			(MATCH(i.name) AGAINST (+?) {OR i.entry IN (?a)})
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
				MATCH(name_loc4) AGAINST (+?) AND name_loc4 like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = $DB->select('
		SELECT ?#, c.entry
			{, l.name_loc?d AS `name_loc`,
			l.subname_loc'.$_SESSION['locale'].' AS `subname_loc`}
		FROM ?_factiontemplate, creature_template c
			{LEFT JOIN (locales_creature l) ON l.entry=c.entry AND ?d}
		WHERE
			(MATCH(name) AGAINST (+?) AND name like ?
			{OR c.entry IN (?a)})
			AND factiontemplateID=faction_A
	',
	$npc_cols[0],
	($m)? $_SESSION['locale']: DBSIMPLE_SKIP,
	($m)? 1: DBSIMPLE_SKIP,
	$nsearch,'%'.$nsearch.'%',
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
				MATCH(name_loc4) AGAINST (+?) AND name_loc4 like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = $DB->select('
		SELECT g.?#
			{, l.name_loc?d AS `name_loc`}
		FROM gameobject_template g
			{LEFT JOIN (locales_gameobject l) ON l.entry=g.entry AND ?d}
		WHERE MATCH(name) AGAINST (+?) AND name like ?
		{OR g.entry IN (?a)}
	',
	$object_cols[0],
	($m)? $_SESSION['locale']: DBSIMPLE_SKIP,
	($m)? 1: DBSIMPLE_SKIP,
	$nsearch,'%'.$nsearch.'%',
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
				MATCH(Title_loc4) AGAINST (+?)
				AND (Title_loc4 like ?)
		',
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = $DB->select('
		SELECT *
			{, l.Title_loc?d AS `Title_loc`}
		FROM quest_template q
			{LEFT JOIN (locales_quest l) ON l.entry=q.entry AND ?d}
		WHERE 
		MATCH(Title) AGAINST (+?) 
		AND Title like ? {OR q.entry IN (?a)}
	',
	($m)? $_SESSION['locale']: DBSIMPLE_SKIP,
	($m)? 1: DBSIMPLE_SKIP,
	$nsearch,
	'%'.$nsearch.'%',
	($m)? $m: DBSIMPLE_SKIP
);
unset($m);
foreach($rows as $row)
	$found['quest'][] = GetQuestInfo($row, 0xFFFFFF);

// Ищем наборы вещей
$rows = $DB->select('
		SELECT *
		FROM ?_itemset
		WHERE MATCH(name_loc0,name_loc4) AGAINST (+?) AND (name_loc0 like ? OR name_loc4 like ?)
	',
	$nsearch,'%'.$nsearch.'%','%'.$nsearch.'%'
);
foreach($rows as $row)
	$found['itemset'][] = itemsetinfo2($row);

// Ищем спеллы
$rows = $DB->select('
		SELECT ?#, spellID
		FROM ?_spell s, ?_spellicons i
		WHERE
			MATCH(spellname_loc0,spellname_loc4) AGAINST (+?) AND (spellname_loc0 like ? OR spellname_loc4 like ?)
			AND i.id = s.spellicon
	',
	$spell_cols[2],
	$nsearch,'%'.$nsearch.'%','%'.$nsearch.'%'
);
foreach($rows as $row)
	$found['spell'][] = spellinfo2($row);

//zones
$rows = $DB->select('
		SELECT areatableID AS id,areatableID as area, name_loc'.$_SESSION['locale'].' as name,type as instance
		FROM aowow_zones
		WHERE
			MATCH(name_loc0,name_loc4) AGAINST (+?) AND (name_loc0 like ? OR name_loc4 like ?)
	',
	$nsearch,'%'.$nsearch.'%','%'.$nsearch.'%'
);

foreach ($rows as $row) {
	
	if ($row['instance'] == 0) {
		$row['instance'] = "世界";
	} else if ($row['instance'] == 1) {
		$row['instance'] = "副本";
	} else if ($row['instance'] == 2) {
		$row['instance'] = "团本";
	} else if ($row['instance'] == 3) {
		$row['instance'] = "战场";
	}
	$found['zones'][] = $row;
}



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