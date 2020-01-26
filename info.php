<?php
require_once('includes/allutil.php');

function loadRelation($DB, $type , $ids){
	if(!isset($ids)) {
		return $ids;
	}
	$sql = '';
	switch($type) {
		case 'zones':
			$sql = "SELECT distinct areatableID AS id,name_loc4 AS name FROM aowow_zones WHERE areatableID in(".$ids.") ";break;
		case 'items':
			$sql = "SELECT distinct A.entry AS id,name_loc4 AS name FROM item_template A,locales_item B WHERE A.entry=B.entry AND A.entry in(".$ids.")";break;
		case 'npcs':
			$sql = "SELECT distinct A.entry AS id,name_loc4 AS name FROM creature_template A,locales_creature B WHERE A.entry=B.entry AND A.entry in(".$ids.")";break;
		case 'quests':
			$sql = "SELECT distinct A.entry AS id,title_loc4 AS name FROM quest_template A,locales_quest B WHERE A.entry=B.entry AND A.entry in(".$ids.")";break;
	}

	$rows = $DB->select($sql);
	$result = array();
	foreach ($rows as $row) {
		$result[] = array(
			"id" => $row['id'],
			"name" => $row['name']
		);
	}
	unset($rows);
	return $result;
}


$id = intval($podrazdel);

$cache_key = cache_key($id);

if(!$info = load_cache(20001, $cache_key))
{
	unset($info);

	$row = $DB->selectRow("
				SELECT nid,media_type,cid,source,B.avatar,B.nick,author,DATE_FORMAT(pub_time,'%Y-%m-%d %H:%i') as pub_time,title,body,tag,thumb,talks,likes,part,zones,items,npcs,quests
				FROM n_news A
				LEFT JOIN n_author B ON A.uid=B.uid
				WHERE nid=?d
				LIMIT 1
				",
				$id
	);
	$zones = loadRelation($DB, 'zones' , $row['zones']);
	$items = loadRelation($DB, 'items' , $row['items']);
	$npcs = loadRelation($DB, 'npcs' , $row['npcs']);
	$quests = loadRelation($DB, 'quests' , $row['quests']);		

	$thumbSize=0;
	$thumb=$row['thumb'];
	if (isset($thumb)){
		$thumb = explode(",",$thumb);
		$thumbSize = count($thumb);
	}

	$tag = $row['tag'];
	if (isset($tag)){
		$tag = explode(" ",$tag);
	}

	$info = array(
		"nid" => $row['nid'],
		"media_type" => $row['media_type'],
		"cid" => $row['cid'],
		"source" => $row['source'],
		"avatar" => $row['avatar'],
		"nick" => $row['nick'],
		"author" => $row['author'],
		"pub_time" => $row['pub_time'],
		"title" => $row['title'],
		"body"  => $row['body'],
		"tag" => $tag, 
		"thumb" => $thumb, 
		"thumbSize" => $thumbSize, 
		"talks" => $row['talks'], 
		"likes" => $row['likes'], 
		"part" => $row['part'], 
		"zones" => $zones, 
		"items" => $items, 
		"npcs" => $npcs, 
		"quests" => $quests
	);

	unset($row);
	save_cache(20001, $cache_key, $info);
}

$smarty->assign('info', $info);
$smarty->display('info.tpl');
?>
