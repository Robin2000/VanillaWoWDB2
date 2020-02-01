<?php

require_once('includes/allspells.php');
require_once('includes/allquests.php');
require_once('includes/allnpcs.php');

// Настраиваем Smarty ;)
$smarty->config_load($conf_file, 'npc');

$id = intval($podrazdel);

$cache_key = cache_key($id);

if(!$npc = load_cache(1, $cache_key))
{
	unset($npc);

	// 在找 NPC:
	$npc = array();
	$row = $DB->selectRow('
		SELECT
			?#, c.entry, c.name, t.thumb, t.wiki,
			{
				l.name_loc'.$_SESSION['locale'].' as `name_loc`,
				l.subname_loc'.$_SESSION['locale'].' as `subname_loc`,
				?,
			}
			f.name_loc'.$_SESSION['locale'].' as `faction-name`, ft.factionID as `factionID`
		FROM ?_factiontemplate ft, ?_factions f, creature_template c
		{
			LEFT JOIN (locales_creature l)
			ON l.entry = c.entry AND ?
		}
		LEFT JOIN aowow_thumb_npc t ON c.entry=t.entry
		WHERE
			c.entry = ?
			AND ft.factiontemplateID = c.faction
			AND f.factionID = ft.factionID
		LIMIT 1
			',
		$npc_cols[1],
		($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
		($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
		$id
	);

	if($row)
	{
		$npc = $row;
		$npc['name'] = localizedName($row);
		$npc['subname'] = localizedName($row, 'subname');
		if($npc['rank'] == 3)
		{
			$npc['level_min'] = '??';
			$npc['level_max'] = '??';
		}
        $npc['dmg_min'] = ($row['dmg_min'] /* + $row['attack_power'] */) * $row['dmg_multiplier'];
        $npc['dmg_max'] = ($row['dmg_max'] /* + $row['attack_power'] */) * $row['dmg_multiplier'];
		
		# Get NPC Attack speed
		$npc['attackspeed'] = number_format(($row['base_attack_time']/1000),2);
		$npc['dps'] = $npc['attackspeed']==0 ? 0 : number_format((($npc['dmg_min']+$npc['dmg_max'])/2)/$npc['attackspeed'],2);
		
		# NPC Resistances		
		$npc['holy_res'] = $row['holy_res'];
		$npc['fire_res'] = $row['fire_res'];
		$npc['nature_res'] = $row['nature_res'];
		$npc['frost_res'] = $row['frost_res'];
		$npc['shadow_res'] = $row['shadow_res'];
		$npc['arcane_res'] = $row['arcane_res'];
		
		$toDiv = array('health_min', 'mana_max', 'mana_min', 'health_max', 'armor', 'dmg_min', 'dmg_max');
		// 把它分成一千份(ххххххххх => ххх,ххх,ххх)
		foreach($toDiv as $e)
			$npc[$e] = number_format($npc[$e]);

		$npc['rank'] = $smarty->get_config_vars('rank'.$npc['rank']);
		// faction = faction_H
		$npc['faction_num'] = $row['factionID'];
		$npc['faction'] = $row['faction-name'];
		// 钱
		$money = ($row['gold_min']+$row['gold_max']) / 2;
		$npc = array_merge($npc, money2coins($money));

		//ai_name
		/*
		if($npc['ai_name']=='EventAI') {
			$npc['event_ai']=loadCreatureAiEvent($npc['entry']);
		}*/

		// 放下
		$loot_id=$row['loot_id'];
		// 常用的拼字
		$npc['ablities'] = array();
		$tmp = array();
		for($j=0;$j<=4;++$j)
		{
			if($row['spell'.$j] && !in_array($row['spell'.$j], $tmp))
			{
				$tmp[] = $row['spell'.$j];
				if($data = spellinfo($row['spell'.$j], 0))
				{
					if($data['name'])
						$npc['abilities'][] = $data;
				}
			}
		}
		for($j=1;$j<4;$j++)
		{
			$tmp2 = $DB->select('
				SELECT datalong
				FROM creature_ai_scripts
				WHERE
					id=?d
					AND dataint=11
				',
				$j,
				$npc['entry'],
				$j
			);
			if($tmp2)
				foreach($tmp2 as $i=>$tmp3)
					if(!in_array($tmp2[$i]['action'.$j.'_param1'], $tmp))
					{
						$tmp[] = $tmp2[$i]['action'.$j.'_param1'];
						if($data = spellinfo($tmp2[$i]['action'.$j.'_param1'], 0))
						{
							if($data['name'])
								$npc['abilities'][] = $data;
						}
					}
		}
		if(!$npc['ablities'])
			unset($npc['ablities']);

		// 训练:
		// 如果是有能力的宠物:
		/* // Временно закомментировано
		$row = $DB->selectRow('
			SELECT spell_id1, spell_id2, spell_id3, spell_id4
			FROM petcreateinfo_spell
			WHERE
				entry=?d
			',
			$npc['entry']
		);
		if($row)
		{
			$npc['teaches'] = array();
			for($j=1;$j<=4;$j++)
				if($row['Spell'.$j])
					for($k=1;$k<=3;$k++)
					{
						$spellrow = $DB->selectRow('
							SELECT ?#, spellID
							FROM ?_spell, ?_spellicons
							WHERE
								spellID=(SELECT effect'.$k.'triggerspell FROM ?_spell WHERE spellID=?d AND (effect'.$k.'id IN (36,57)))
								AND id=spellicon
							LIMIT 1
							',
							$spell_cols[2],
							$row['Spell'.$j]
						);
						if($spellrow)
						{
							$num = count($npc['teaches']);
							$npc['teaches'][$num] = array();
							$npc['teaches'][$num] = spellinfo2($spellrow);
						}
					}
		}
		unset ($row);*/

		// 如果只是教练的话
		$teachspells = $DB->select('
			SELECT ?#, spellID
			FROM npc_trainer, ?_spell, ?_spellicons
			WHERE
				entry=?d
				AND spellID=Spell
				AND id=spellicon
			',
			$spell_cols[2],
			$npc['entry']
		);
		if($teachspells)
		{
			if(!(IsSet($npc['teaches'])))
				$npc['teaches'] = array();
			foreach($teachspells as $teachspell)
			{
						$num = count($npc['teaches']);
						$npc['teaches'][$num] = array();
						$npc['teaches'][$num] = spellinfo2($teachspell);
			}
		}
		unset ($teachspells);

		// 卖:
		$rows_s = $DB->select('
			SELECT ?#, i.entry, i.max_count, n.`maxcount` as `drop-maxcount`
				{, l.name_loc?d AS `name_loc`}
			FROM npc_vendor n, ?_icons, item_template i
				{LEFT JOIN (locales_item l) ON l.entry=i.entry AND ?d}
			WHERE
				n.entry=?
				AND i.entry=n.item
				AND id=i.display_id
			',
			$item_cols[2],
			($_SESSION['locale'])? $_SESSION['locale']: DBSIMPLE_SKIP,
			($_SESSION['locale'])? 1: DBSIMPLE_SKIP,
			$id
		);
		if($rows_s)
		{
			$rows_s = sanitiseitemrows($rows_s);
			$npc['sells'] = array();
			foreach($rows_s as $numRow=>$row)
			{
				$npc['sells'][$numRow] = array();
				$npc['sells'][$numRow] = iteminfo2($row);
				$npc['sells'][$numRow]['maxcount'] = $row['drop-maxcount'];
				$npc['sells'][$numRow]['cost'] = array();
				if($row['buy_price']>0)
					$npc['sells'][$numRow]['cost']['money'] = $row['buy_price'];
			}
			unset ($row);
			unset ($numRow);
			unset ($extcost);
		}
		unset ($rows_s);

		// 爆落
		if(!($npc['drop'] = loot('creature_loot_template', $loot_id)))
			unset ($npc['drop']);

		// 剥皮
		if(!($npc['skinning'] = loot('skinning_loot_template', $loot_id)))
			unset ($npc['skinning']);

		// 扒窃
		if(!($npc['pickpocketing'] = loot('pickpocketing_loot_template', $loot_id)))
			unset ($npc['pickpocketing']);

		// 取的任务...
		$rows_qs = $DB->select('
			SELECT ?#
			FROM creature_questrelation c, quest_template q
			WHERE
				c.id=?
				AND q.entry=c.quest
			',
			$quest_cols[2],
			$id
		);
		if($rows_qs)
		{
			$npc['starts'] = array();
			foreach($rows_qs as $numRow=>$row) {
				$npc['starts'][] = GetQuestInfo($row, 0xFFFFFF);
			}
		}
		unset ($rows_qs);

		// 完成任务...
		$rows_qe = $DB->select('
			SELECT ?#
			FROM creature_involvedrelation c, quest_template q
			WHERE
				c.id=?
				AND q.entry=c.quest
			',
			$quest_cols[2],
			$id
		);
		if($rows_qe)
		{
			$npc['ends'] = array();
			foreach($rows_qe as $numRow=>$row) {
				$npc['ends'][] = GetQuestInfo($row, 0xFFFFFF);
			}
		}
		unset ($rows_qe);

		// 任务的必要条件..
		$rows_qo = $DB->select('
			SELECT ?#
			FROM quest_template
			WHERE
				ReqCreatureOrGOId1=?
				OR ReqCreatureOrGOId2=?
				OR ReqCreatureOrGOId3=?
				OR ReqCreatureOrGOId4=?
			',
			$quest_cols[2],
			$id, $id, $id, $id
		);
		if($rows_qo)
		{
			$npc['objectiveof'] = array();
			foreach($rows_qo as $numRow=>$row)
				$npc['objectiveof'][] = GetQuestInfo($row, 0xFFFFFF);
		}
		unset ($rows_qo);

		// 神的创造物的位置(对ntc的英雄来说，没有地图，是正常的。):
		if($normal_entry)
			// 我们是ntc的英雄，决定了我们的位置。
			$npc['position'] = position($normal_entry, 'creature', 2);
		else
			// 我们是正常的ntc或ntc，没有问题。
			$npc['position'] = position($npc['entry'], 'creature', 1);


		/*查询出相关文章并附加到npc上面*/
		$rows = $DB->select("
		SELECT nid,media_type,source,author,tag,title,thumb,talks,likes,part
		FROM n_ref A,n_news B
		WHERE A.entry = ? AND A.news_id = B.nid AND A.ref_type = 'npcs'
		LIMIT 20
		",
		$id
		);
		$refnews=array();
		if($rows) {
		foreach($rows as $row) {
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
			$refnews[] = array(
				"nid" => $row['nid'],
				"media_type" => $row['media_type'],
				"source" => $row['source'],
				"author" => $row['author'],
				"title" => $row['title'],
				"tag" => $row['tag'], 
				"thumb" => $thumb, 
				"thumbSize"=> $thumbSize, 
				"talks" => $row['talks'], 
				"likes" => $row['likes'], 
				"part" => $row['part'], 
			);
		}
		unset($rows);
		}
		$npc['refnews'] = $refnews;
		/*查询出相关文章并附加到npc上面 结束*/

		save_cache(1, $cache_key, $npc);
	}
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
	'Book' => false,
	'Title' => $npc['name'].' - '.$smarty->get_config_vars('NPCs'),
	'tab' => 0,
	'type' => 1,
	'typeid' => $npc['entry'],
	'path' => path(0, 4, $npc['family'], $npc['type'])
);

$smarty->assign('page', $page);


// Если хоть одна информация о вещи найдена - передаём массив с информацией о вещях шаблонизатору
$smarty->assign('allitems', $allitems);
$smarty->assign('allspells', $allspells);

$smarty->assign('npc', $npc);

// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());

// Запускаем шаблонизатор
$smarty->display('npc.tpl');

?>