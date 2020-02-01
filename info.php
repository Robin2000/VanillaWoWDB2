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
			$sql = "SELECT distinct A.entry AS id,name_loc4 AS name,A.patch,A.quality,C.iconname FROM item_template A,locales_item B,aowow_icons C WHERE A.entry=B.entry AND A.display_id=C.id AND A.entry in(".$ids.")";break;
		case 'npcs':
			$sql = "SELECT distinct A.entry AS id,B.name_loc4 AS name,A.patch,A,H FROM creature_template A,locales_creature B,aowow_factiontemplate C WHERE A.entry=B.entry AND A.faction=C.factiontemplateID AND A.entry in(".$ids.")";break;
		case 'quests':
			$sql = "SELECT distinct A.entry AS id,title_loc4 AS name,A.patch,A.RequiredRaces FROM quest_template A,locales_quest B WHERE A.entry=B.entry AND A.entry in(".$ids.")";break;
	}

	$rows = $DB->select($sql);

	if($type=='items'||$type=='quests'||$type=='npcs') {
		foreach ($rows as $i => $row) {
			foreach ($rows as $j => $jrow) {
				if ($row['id'] == $jrow['id']) {
					if ($row['patch'] > $jrow['patch']) {
						unset($rows[$j]);
					}
				}
			}
		};
	}

	$result = array();
	foreach ($rows as $row) {
		$info = array(
			"id" => $row['id'],
			"name" => $row['name']
		);
		if($type=='items'){
			$info['iconname']= strtolower($row['iconname']);
			$info['quality']= $row['quality'];
		} else if($type=='quests') {
			$side=SideByRace($row['RequiredRaces']);
			switch($side) {
				case 1:$info['side'] = 0;break;
				case 2:$info['side'] = 1;break;
				default: $info['side'] = 3;
			} 
			
		} else if($type=='npcs') {
			if($info['A']==1&&$info['H']==0){
				$info['side'] = 0;
			} else if($info['A']==0&&$info['H']==1){
				$info['side'] = 1;
			} else{
				$info['side'] = 3;
			}
		}

		$result[] = $info;
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
				SELECT nid,media_type,cid,source,B.avatar,B.nick,author,DATE_FORMAT(pub_time,'%Y-%m-%d') as pub_time,title,body,tag,thumb,talks,likes,part,zones,items,npcs,quests
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
		foreach($thumb as $t) {
			if(!empty($t)) {
				$thumbSize++;
			}
		}
		if($thumbSize>3)$thumbSize=3;
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
