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
$rows = array();
// Ищем вещи:

if($_SESSION['locale']>0)
{
	$rows = $DB->select('
			SELECT B.?#,name_loc4
			FROM locales_item A
			LEFT JOIN item_template B ON A.entry=B.entry
			LEFT JOIN aowow_icons C ON B.display_id=C.id
			WHERE MATCH(name_loc4) AGAINST (+?) AND  name_loc4 like ?
		',
		$item_cols[3],
		$nsearch,'%'.$nsearch.'%'
	);
}else{
	$rows = $DB->select('
			SELECT B.?#
			FROM item_template B
			LEFT JOIN  aowow_icons C ON B.display_id=C.id
			WHERE
				MATCH(B.name) AGAINST (+?) AND B.name like ?
				AND C.id = B.display_id;
		',
		$item_cols[3],
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = sanitiseitemrows($rows);
foreach($rows as $row)
	$found['item'][] = iteminfo2($row);

// NPC:
if($_SESSION['locale']>0)
{
	$rows = $DB->select('
			SELECT ?#, A.entry,A.name_loc4,A.subname_loc4
			FROM locales_creature A
			LEFT JOIN creature_template B ON A.entry=B.entry
			LEFT JOIN aowow_factiontemplate C ON C.factiontemplateID=B.faction_A
			WHERE
				MATCH(name_loc4) AGAINST (+?) AND name_loc4 like ?
		',
		$npc_cols[0],
		$nsearch,'%'.$nsearch.'%'
	);
}else{
	$rows = $DB->select('
			SELECT ?#, B.entry
			FROM  creature_template B
			LEFT JOIN aowow_factiontemplate C ON C.factiontemplateID=B.faction_A
			WHERE
				MATCH(name) AGAINST (+?) AND name like ?
		',
		$npc_cols[0],
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = sanitiseitemrows($rows);
foreach($rows as $row)
	$found['npc'][] = creatureinfo2($row);

// gameobject
if($_SESSION['locale']>0)
{
	$rows = $DB->select('
			SELECT B.?#,name_loc4
			FROM locales_gameobject A
			LEFT JOIN gameobject_template B ON A.entry=B.entry
			WHERE
				MATCH(name_loc4) AGAINST (+?) AND name_loc4 like ?
		',
		$object_cols[0],
		$nsearch,'%'.$nsearch.'%'
	);
}else{
	$rows = $DB->select('
			SELECT B.?#
			FROM gameobject_template B
			WHERE MATCH(name) AGAINST (+?) AND name like ?
		',
		$object_cols[0],
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = sanitiseitemrows($rows);
foreach($rows as $row)
	$found['object'][] = objectinfo2($row);

// quest
if($_SESSION['locale']>0)
{
	$rows = $DB->select('
			SELECT A.?#,Title_loc4
			FROM locales_quest A
			LEFT JOIN quest_template B ON A.entry=B.entry
			WHERE
				MATCH(Title_loc4) AGAINST (+?) AND (Title_loc4 like ?)
		',
		$quest_cols[2],
		$nsearch,'%'.$nsearch.'%'
	);
}else{
	$rows = $DB->select('
			SELECT A.?#
			FROM quest_template A
			WHERE 
			MATCH(Title) AGAINST (+?)  AND Title like ?
		',
		$quest_cols[2],
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = sanitiseitemrows($rows);
foreach($rows as $row)
	$found['quest'][] = GetQuestInfo($row, 0xFFFFFF);

// itemset
$rows = $DB->select('
		SELECT *
		FROM ?_itemset
		WHERE MATCH(name_loc0,name_loc4) AGAINST (+?) AND (name_loc0 like ? OR name_loc4 like ?)
	',
	$nsearch,'%'.$nsearch.'%','%'.$nsearch.'%'
);

$rows = sanitiseitemrows($rows);
foreach($rows as $row)
	$found['itemset'][] = itemsetinfo2($row);

// spell
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
	$found['zones'][] = $row;
}

//factions
$rows = $DB->select('
			SELECT f1.factionID AS entry, f1.team, f1.name_loc?d AS name, f1.side, f1.team AS category2, f1.team AS category
			FROM aowow_factions f1
			WHERE
			f1.reputationListID != -1 AND
			MATCH(name_loc0,name_loc4) AGAINST (+?) AND (name_loc0 like ? OR name_loc4 like ?)
	',
	$_SESSION['locale'],
	$nsearch,'%'.$nsearch.'%','%'.$nsearch.'%'
);

foreach ($rows as $row) {
	$found['factions'][] = $row;
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