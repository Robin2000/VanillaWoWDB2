<?php

// Необходима функция iteminfo
require_once('includes/allitems.php');

$smarty->config_load($conf_file, 'items');

// 从查询中划分类、子类和类型
@list($class, $subclass, $type, $bond, $quality, $nature, $resistance, $minLvl) = extract_values($podrazdel);

$cache_key = cache_key($class, $subclass, $type, $bond, $quality, $nature, $resistance, $minLvl);

if(!$items = load_cache(7, $cache_key))
{
	unset($items);

	$test = '';
	if(isset($resistance)){
		switch($resistance){
			case 0: $test = 'AND fire_res>0';break;
			case 1: $test = 'AND nature_res>0';break;
			case 2: $test = 'AND frost_res>0';break;
			case 3: $test = 'AND shadow_res>0';break;
			case 4: $test = 'AND arcane_res>0';break;
			case 5: $test = 'AND holy_res>0';break;
		}
	}
	// 我们正在起草一份bd请求，对所指定的类和子类进行搜索。
	$rows = $DB->select('
		SELECT ?#, i.entry, max_count
			{, l.name_loc?d AS name_loc}
		FROM ?_icons, item_template i
			{LEFT JOIN (locales_item l) ON l.entry=i.entry AND ?d}
		WHERE
			fortest=0 AND id=display_id
			{ AND class = ? }
			{ AND subclass = ? }
			{ AND inventory_type = ? }
			{ AND bonding = ? }
			{ AND quality = ? }
			{ AND (stat_type1=? }
			{ OR stat_type2=? }
			{ OR stat_type3=? }
			{ OR stat_type4=? }
			{ OR stat_type5=? }
			{ OR stat_type6=? }
			{ OR stat_type7=? }
			{ OR stat_type8=? }
			{ OR stat_type9=? }
			{ OR stat_type10=?) }
			{ '.$test.' }
			{ AND required_level=? }
		ORDER BY quality DESC, name
		{ LIMIT ?d }
		',
		$item_cols[2],
		($_SESSION['locale'])? $_SESSION['locale']: DBSIMPLE_SKIP,
		($_SESSION['locale'])? 1: DBSIMPLE_SKIP,
		isset($class) ? $class : DBSIMPLE_SKIP,
		isset($subclass) ? $subclass : DBSIMPLE_SKIP,
		isset($type) ? $type : DBSIMPLE_SKIP,
		isset($bond) ? $bond : DBSIMPLE_SKIP,
		isset($quality) ? $quality : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($nature) ? $nature : DBSIMPLE_SKIP,
		isset($minLvl) ? $minLvl : DBSIMPLE_SKIP,		
		($AoWoWconf['limit']!=0)? $AoWoWconf['limit']: DBSIMPLE_SKIP
	);
	$rows = sanitiseitemrows($rows);
	$items = array();
	foreach($rows as $row)
		$items[] = iteminfo2($row);

	save_cache(7, $cache_key, $items);
}

global $page;
$page = array(
	'Mapper' => false,
	'Book' => false,
	'Title' => $smarty->get_config_vars('Items'),
	'tab' => 0,
	'type' => 0,
	'typeid' => 0,
	'path' => path(0, 0, $type, $subclass, $class),
);
$smarty->assign('page', $page);

$min_options = array('无限制');
for ($x = 1; $x <= 59; $x++){ array_push($min_options, $x);}
$smarty->assign('min_options', $min_options);

if(isset($minLvl)) {
 $smarty->assign('sel_min_lvl', $minLvl);
}

$smarty->assign('bond',isset($bond)?$bond:'n');
$smarty->assign('quality',isset($quality)?$quality:'n');
$smarty->assign('nature',isset($nature)?$nature:'n');
$smarty->assign('resistance',isset($resistance)?$resistance:'n');

// Статистика выполнения mysql запросов
$smarty->assign('mysql', $DB->getStatistics());
$smarty->assign('allitems', $allitems);
$smarty->assign('items', $items);
// Загружаем страницу
$smarty->display('items.tpl');
?>