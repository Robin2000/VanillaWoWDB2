<?php

require_once('includes/allobjects.php');
require_once('includes/allitems.php');
require_once('includes/allquests.php');

$smarty->config_load($conf_file, 'object');

// номер объекта;
$id = intval($podrazdel);

$cache_key = cache_key($id);

if(!$object = load_cache(3, $cache_key))
{
	unset($object);

	// Данные об объекте:
	$object = array();
	$object = objectinfo($id, 1);

	// Начиниают квесты...
	$rows_qs = $DB->select('
		SELECT o.?#
		FROM gameobject_questrelation q, quest_template o
		WHERE
			q.id = ?d
			AND o.entry = q.quest
		',
		$quest_cols[2],
		$id
	);
	if($rows_qs)
	{
		$object['starts'] = array();
		foreach($rows_qs as $numRow=>$row)
			$object['starts'][] = GetQuestInfo($row, 0xFFFFFF);
	}
	unset($rows_qs);

	// Заканчивают квесты...
	$rows_qe = $DB->select('
		SELECT ?#
		FROM gameobject_involvedrelation i, quest_template q
		WHERE
			i.id = ?d
			AND q.entry = i.quest
		',
		$quest_cols[2],
		$id
	);
	if($rows_qe)
	{
		$object['ends'] = array();
		foreach($rows_qe as $numRow=>$row)
			$object['ends'][] = GetQuestInfo($row, 0xFFFFFF);
	}
	unset($rows_qe);

	// Положения объектофф:
	$object['position'] = position($object['entry'], 'gameobject');

	save_cache(3, $cache_key, $object);
} else {

	if($map0Poi = load_cache(10000, $cache_key)){
		$smarty->assign('map0Poi', $map0Poi);
	}
	if($map1Poi = load_cache(10001, $cache_key)){
		$smarty->assign('map1Poi', $map1Poi);
	}
}
global $page;
$page = array(
	'Mapper' => true,
	'Book' => $object['page_text'] ? true : false,
	'Title' => $object['name'].' - '.$smarty->get_config_vars('Objects'),
	'tab' => 0,
	'type' => 2,
	'typeid' => $object['entry'],
	'path' => path(0, 5, $object['type'])
);

$smarty->assign('page', $page);


// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
$smarty->assign('allitems', $allitems);

$smarty->assign('object', $object);
$smarty->display('object.tpl');

?>