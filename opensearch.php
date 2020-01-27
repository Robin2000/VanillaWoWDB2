<?php
require_once('configs/config.php');
require_once('includes/allutil.php');
require_once('includes/allitems.php');

// Для Ajax отключаем debug
$AoWoWconf['debug'] = false;
// Для Ajax ненужен реалм
$AoWoWconf['realmd'] = false;
// Настройка БД
global $DB;
require_once('includes/db.php');

// Принимаются запросы минимум из 2 символов (хотя на вовхеде и на 1 символ)
$nsearch = $_GET['search'];
if(strlen($nsearch) < 2)
	exit('["", []]');
/*$nsearch = '%'.str_replace('%', '\%', $nsearch).'%';*/

echo '["'.str_replace('"', '\"', $_GET['search']).'", [';

$rows = array();

// Item:
if($_SESSION['locale']>0)
{
	$rows = $DB->select('
			SELECT A.entry,name_loc4 AS name,C.iconname, B.quality,B.patch
			FROM locales_item A
			left join  item_template B ON A.entry=B.entry
			left join aowow_icons C ON C.id = B.display_id
			WHERE MATCH(name_loc4) AGAINST (+?) AND  name_loc4 like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
} else {
	$rows = $DB->select('
			SELECT i.entry, name, a.iconname, i.quality,i.patch
			FROM aowow_icons a, item_template i
			WHERE
				MATCH(i.name) AGAINST (+?) AND  name like ?
				AND a.id = i.display_id;
		',
		$nsearch,'%'.$nsearch.'%'
	);
	
}

$rows = sanitiseitemrows($rows);
foreach($rows as $row){
	$found[$row['name'].' (Item)'] = array(
		'type'		=> 3,
		'entry'		=> $row['entry'],
		'iconname'	=> strtolower($row['iconname']),
		'quality'	=> $row['quality']
	);
}


// creature:
if($_SESSION['locale']>0)
{
	$rows = $DB->select('
			SELECT A.entry,name_loc4 as name,patch
			FROM locales_creature A
			LEFT JOIN creature_template B ON A.entry=B.entry
			WHERE
				MATCH(name_loc4) AGAINST (+?) AND name_loc4 like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}else{
	$rows = $DB->select('
			SELECT c.entry,name,patch
			FROM creature_template c
			WHERE
				(MATCH(name) AGAINST (+?) AND name like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}

$rows = sanitiseitemrows($rows);
foreach($rows as $i => $row)
$found[$row['name'].' (NPC)'] = array(
	'type' => 1,
	'entry' => $row['entry']
);

// GameObject:
if($_SESSION['locale']>0)
{
	$rows = $DB->select('
			SELECT A.entry,name_loc4 as name,patch
			FROM locales_gameobject A
			LEFT JOIN gameobject_template B ON A.entry=B.entry
			WHERE
				MATCH(name_loc4) AGAINST (+?) AND name_loc4 like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}else {
	$rows = $DB->select('
			SELECT entry,name,patch
			FROM gameobject_template g
			WHERE MATCH(name) AGAINST (+?) AND name like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = sanitiseitemrows($rows);
foreach($rows as $i => $row)
	$found[$row['name'].' (Object)'] = array(
		'type' => 2,
		'entry'=>$row['entry'],
	);


// Quest:
if($_SESSION['locale']>0)
{
	$rows = $DB->select('
			SELECT A.entry,Title_loc4 as Title,B.RequiredRaces,patch
			FROM locales_quest A
			LEFT JOIN quest_template B ON A.entry=B.entry
			WHERE MATCH(Title_loc4) AGAINST (+?) AND  Title_loc4 like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}else{
	$rows = $DB->select('
			SELECT entry, Title, RequiredRaces,patch
			FROM quest_template
			WHERE MATCH(Title) AGAINST (+?) AND  Title like ?
		',
		$nsearch,'%'.$nsearch.'%'
	);
}
$rows = sanitiseitemrows($rows);
foreach($rows as $i => $row)
	$found[$row['Title'].' (Quest)'] = array(
		'type' => 5,
		'entry'=> $row['entry'],
		'side' => SideByRace($row['RequiredRaces'])
	);
// Если ничего не найдено...
if(!isset($found))
{
	echo ']]';
	exit;
}

//ksort($found);

$found = array_slice($found, 0, 10);

$i=0;
foreach($found as $name => $fitem)
{
	echo '"'.str_replace('"', '\"', $name).'"';
	if($i<count($found)-1)
		echo ', ';
	$i++;
}

echo '], [], [], [], [], [], [';

$i=0;
foreach($found as $name => $fitem)
{
	echo '['.$fitem['type'].', '.$fitem['entry'];
	if(isset($fitem['iconname'])) echo ', "'.$fitem['iconname'].'"';
	if(isset($fitem['quality'])) echo ", ".$fitem['quality'];
	if(isset($fitem['side'])) echo ", ".$fitem['side'];
	echo ']';
	if($i<count($found)-1)
		echo ', ';
	$i++;
}

echo ']]';

?>