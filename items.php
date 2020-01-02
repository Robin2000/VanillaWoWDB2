<?php

// CLASSMASK=(1<<(参数-1))
// CLASS_WARRIOR			0x1		1				参数1
// CLASS_PALADIN			0x2		2                             参数2
// CLASS_HUNTER			0x4		4                             参数3 
// CLASS_ROGUE			0x8		8                            参数4
// CLASS_PRIEST			0x10	16                         参数5
// CLASS_DEATHKNIGHT		0x20	32                         参数6
// CLASS_SHAMAN			0x40	64                         参数7
// CLASS_MAGE				0x80	128                       参数8
// CLASS_WARLOCK			0x100	256                        参数9
                                       
// CLASS_DRUID				0x400	1024                     参数11         


// 4	1	Armor, Cloth
// 4	2	Armor, Leather
// 4	3	Armor, Mail
// 4	4	Armor, Plate
// 4	6	Armor, Shield
// 4	7	Armor, Libram
// 4	8	Armor, Idol
// 4	9	Armor, Totem


// 1战士，2圣骑士 4板 
// 3猎人，7萨满  3锁链 
// 4潜行者，11德鲁伊    2皮甲 
// 8法师，5牧师，9术士  1布 

// 1           7,8    4,5   0,1   15         6         13         10        2     3       18    16          4.6
// 战士：剑 、锤、斧、匕首、长柄、拳套、法杖、弓、枪、弩、投掷、盾牌
// 2                 7,8  0,1   4,5   6          4.6
// 圣骑士：剑、斧、锤、长柄、盾牌

// 3         2          3    18    6          16        10        13         15        0,1      7,8    
// 猎人：弓、枪、弩、长柄、投掷、法杖、拳套、匕首、斧 、剑

// 4            15         7             13          4            16       2       3        18  
// 盗贼：匕首、单手剑、拳套、单手锤、投掷、弓、枪、弩

// 5          10        15         4
// 牧师：法杖、匕首、单手锤、魔法投掷

// 7            10        15        13       4,5    0,1    4.6
// 萨满：法杖、匕首、拳套、锤、斧、盾牌

// 8            10        15        7
// 法师：法杖、匕首、单手剑、魔法投掷

// 9            10        15        7
// 术士：法杖、匕首、单手剑、魔法投掷


//  11               10       15           6       4,5 
// 德鲁伊：法杖、匕首、长柄、锤

// class_subclass
// 2	0		Weapon, Axe 1H   斧
// 2	1		Weapon, Axe 2H   斧
// 2	2		Weapon, Bow         弓
// 2	3		Weapon, Gun          枪
// 2	4		Weapon, Mace 1H   锤
// 2	5		Weapon, Mace 2H  锤
// 2	6		Weapon, Polearm     长柄
// 2	7		Weapon, Sword 1H  剑
// 2	8		Weapon, Sword 2H  剑
// 2	10		Weapon, Staff             杖
// 2	13		Weapon, Fist weapon       拳
// 2	14		Weapon, Miscellaneous 其他
// 2	15		Weapon, Dagger   匕首
// 2	16		Weapon, Thrown  投掷
// 2	17		Weapon, Spear    矛
// 2	18		Weapon, Crossbow 弩
// 2	19		Weapon, Wand        杖
// 2	20		Weapon, Fishing pole 鱼竿



// Необходима функция iteminfo
require_once('includes/allitems.php');

$smarty->config_load($conf_file, 'items');

// 从查询中划分类、子类和类型
@list($class, $subclass, $type, $allowClass, $allowRace, $bond, $quality, $nature, $resistance, $minLvl) = extract_values($podrazdel);

$cache_key = cache_key($class, $subclass, $type, $allowClass, $allowRace, $bond, $quality, $nature, $resistance, $minLvl);

if(!$items = load_cache(7, $cache_key))
{
	unset($items);

	$testWepon="";
	if(isset($allowClass)){
		switch($allowClass){
			case 1: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,7,8,4,5,0,1,15,6,13,10,2,3,18,16))) AND (class!=4 OR (class=4 AND subclass in(4,6,7,8)))";break;
			case 2: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,7,8,0,1,4,5,6))) AND (class!=4 OR (class=4 AND subclass in(4,6,7,8)))";break;
			case 3: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,2,3,18,6,16,10,13,15,0,1,7,8))) AND (class!=4  OR (class=4 AND subclass in(3,7,8)))";break;
			case 4: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,15,7,13,4,16,2,3,18))) AND (class!=4  OR (class=4 AND subclass in(2,7,8)))";break;
			case 5: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,10,15,4))) AND (class!=4  OR (class=4 AND subclass in(1,7,8)))";break;
			case 7: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,10,15,13,4,5,0,1))) AND (class!=4 OR (class=4 AND subclass in(3,6,7,8,9)))";break;
			case 8: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,10,15,7))) AND (class!=4 OR (class=4 AND subclass in(1,7,8)))";break;
			case 9: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,10,15,7))) AND (class!=4 OR (class=4 AND subclass in(1,7,8)))";break;
			case 11: $testWepon= " AND (class !=2 OR (class=2 AND subclass in(14,20,10,15,6,4,5 ))) AND (class!=4 OR (class=4 AND subclass in(2,7,8)))";break;
		}
	}
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
			'.$testWepon.'
			{ AND (allowable_class>0 AND (allowable_class&(1<<(?-1))) != 0) }
			{ AND (allowable_race>0 AND (allowable_race&(1<<(?-1))) != 0) }
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
		isset($allowClass) ? $allowClass : DBSIMPLE_SKIP,
		isset($allowRace) ? $allowRace : DBSIMPLE_SKIP,
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

$smarty->assign('allowClass',isset($allowClass)?$allowClass:'n');
$smarty->assign('allowRace',isset($allowRace)?$allowRace:'n');
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