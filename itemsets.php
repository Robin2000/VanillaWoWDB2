<?php

require_once('includes/allitemsets.php');

$smarty->config_load($conf_file, 'itemset');

@list($class,$tname,$tclass) = extract_values($podrazdel);

$cache_key = cache_key($class,$tname,$tclass);

$tnameStr=null;
if(isset($tname)) {
	switch($tname){
		case 0: $tnameStr = "";break;
		case 1: $tnameStr = "T0";break;
		case 2: $tnameStr = "T1";break;
		case 3: $tnameStr = "T2";break;
		case 4: $tnameStr = "T3";break;
		case 5: $tnameStr = "PVP";break;
		case 6: $tnameStr = "SM";break;
		case 7: $tnameStr = "ZG";break;
		case 8: $tnameStr = "VC";break;
		case 9: $tnameStr = "WC";break;
		case 10: $tnameStr = "AQ20";break;
		case 11: $tnameStr = "AQ40";break;
	}
}
if(!$itemsets = load_cache(9, $cache_key))
{
	unset($itemsets);

	$armorClass="";

	if(isset($class)){
		switch($class){
			case 0:
				$armorClass=" AND armorClass is null ";break;/*不限*/
			case 1:
			case 2:
				$armorClass=" AND (armorClass=4 OR armorClass is null)";break;/*1战士，2圣骑士 4板 */
			case 3:
			case 7:
				$armorClass=" AND (armorClass=3 OR armorClass is null)";break;/*3猎人，7萨满  3锁链 */
			case 4:
			case 11:
				$armorClass=" AND (armorClass=2 OR armorClass is null)";break;/*4潜行者，11德鲁伊    2皮甲 */
			case 8:
			case 5:
			case 9:
				$armorClass=" AND (armorClass=1 OR armorClass is null)";break;/*8法师，5牧师，9术士  1布 */
		}
	}
	$allowClass="";
	if(isset($class)){
		if($class==0){
			$allowClass=" AND (allowClass=-1 OR allowClass is null)";
		}else {
			$allowClass=" AND (allowClass & power(2,$class-1)=power(2,$class-1) OR allowClass=-1 OR allowClass is null)";
		}
	}
	
	$rows = $DB->select('
		SELECT ?#
		FROM ?_itemset s
		WHERE 1=1 
		{ AND tname=? }
		{ AND tclass=? }
		'.$armorClass.'
		'.$allowClass.'
		ORDER by name_loc'.$_SESSION['locale'].'
		{LIMIT ?d}',
		$itemset_col[0],
		isset($tnameStr) ? $tnameStr : DBSIMPLE_SKIP,
		isset($tclass) ? $tclass : DBSIMPLE_SKIP,
		($AoWoWconf['limit']!=0)? $AoWoWconf['limit']: DBSIMPLE_SKIP
	);

	$itemsets = array();
	foreach($rows as $row)
		$itemsets[] = itemsetinfo2($row);

	save_cache(9, $cache_key, $itemsets);
}
$smarty->assign('itemsets', $itemsets);

global $page;
$page = array(
	'Mapper' => false,
	'Book' => false,
	'Title' => $smarty->get_config_vars('Item_Sets'),
	'tab' => 0,
	'type' => 0,
	'typeid' => 0,
	'path' => '[0, 2]'
);
$smarty->assign('page', $page);


$smarty->assign('tname',isset($tname)?$tname:'n');
$smarty->assign('tclass',isset($tclass)?$tclass:'n');
$smarty->assign('allowClass',isset($class)?$class:'n');

// --Передаем данные шаблонизатору--
// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
// Если хоть одна информация о вещи найдена - передаём массив с информацией о вещях шаблонизатору
$smarty->assign('allitems', $allitems);
// Запускаем шаблонизатор
$smarty->display('itemsets.tpl');

?>