<?php

require_once('includes/game.php');
require_once('includes/allitems.php');
//require_once('includes/allscreenshots.php');
$smarty->config_load($conf_file, 'zone');

$id = $podrazdel;

if(!$zone = load_cache(16, $id))
{
	unset($zone);

	// Данные об объекте:
	$zone = $DB->selectRow('SELECT * FROM ?_zones WHERE areatableID = ?d', $id);
	
	$zone['name'] = $zone['name_loc0'];//localizedName($zone);

	if($_SESSION['locale']==4){
		$zone['name'] = $zone['name_loc4'];
	}

	if(!($zone['fishing'] = loot('fishing_loot_template', $id)))
		unset($zone['fishing']);
	

	// if($zone['parent'])
	// {
		// $row = $DB->selectRow('SELECT * FROM ?_zones WHERE areatableID = ?d', $zone['parent']);
		// if ($row)
			// $parentname = $row['name'];//localizedName($row);
		// unset($row);
		// if (!empty($parentname))
			// $zone['parentname'] = $parentname;
	// }

	// $rows = $DB->select('SELECT * FROM ?_aowow_zones WHERE parent = ?d', $id);
	// if ($rows)
	// {
		// $zone['subzones'] = array();
		// foreach($rows as $row)
			// $zone['subzones'][] = array(
				// 'id' => $row['areatableID'],
				// 'name' => $row['name']//localizedName($row)
			// );
	// }
	unset($rows);

	$zone['position'] = array();

	// Optimized version of position() + transform_coords() without map mask check
	if ($zone['x_min'] && $zone['y_min'] && $zone['x_max'] && $zone['y_max'])
	{
		$sql='
		SELECT ct.entry, ct.name, ct.subname, ct.Rank, ct.faction_A, lc.name_loc?d, lc.subname_loc?d, ct.npcflag, position_x, position_y
		FROM creature c, creature_template ct
		LEFT JOIN locales_creature lc ON ct.entry = lc.entry
		WHERE c.id = ct.entry
		  AND (ct.npcflag = 11 OR ct.npcflag = 16388 OR ct.npcflag = 33 OR ct.npcflag= 135 OR ct.Rank>0)
		  AND c.map = ?d
		  AND c.position_x > ?f
		  AND c.position_x < ?f
		  AND c.position_y > ?f
		  AND c.position_y < ?f
		';
		if($id==209||$id==1581||$id==491||$id==1176||$id==1584||$id==3429) {//影牙城堡等
			$sql='
			SELECT ct.entry, ct.name, ct.subname, ct.Rank, ct.faction_A, lc.name_loc?d, lc.subname_loc?d, ct.npcflag, position_x, position_y
			FROM creature c, creature_template ct
			LEFT JOIN locales_creature lc ON ct.entry = lc.entry
			WHERE c.id = ct.entry
			  AND (ct.npcflag = 11 OR ct.npcflag = 16388 OR ct.npcflag = 33 OR ct.npcflag= 135 OR ct.Rank>0)
			  AND c.map = ?d
			  AND c.position_x > ?f
			  AND c.position_x < ?f
			  AND c.position_y > ?f
			  AND c.position_y < ?f
			  GROUP BY c.id
			';
		}
		if($id==1583) {//黑石塔下
			$sql='
			SELECT ct.entry, ct.name, ct.subname, ct.Rank, ct.faction_A, lc.name_loc?d, lc.subname_loc?d, ct.npcflag, position_x, position_y
			FROM creature c, creature_template ct
			LEFT JOIN locales_creature lc ON ct.entry = lc.entry
			WHERE c.id = ct.entry
			  AND (ct.npcflag = 11 OR ct.npcflag = 16388 OR ct.npcflag = 33 OR ct.npcflag= 135 OR ct.Rank>0)
			  AND c.map = ?d
			  AND c.position_x > ?f
			  AND c.position_x < ?f
			  AND c.position_y > ?f
			  AND c.position_y < ?f
			  AND ROUND(c.position_z)<92
			  GROUP BY c.id
			';
		}
		if($id==15830) {//黑石塔上
			$sql='
			SELECT ct.entry, ct.name, ct.subname, ct.Rank, ct.faction_A, lc.name_loc?d, lc.subname_loc?d, ct.npcflag, position_x, position_y
			FROM creature c, creature_template ct
			LEFT JOIN locales_creature lc ON ct.entry = lc.entry
			WHERE c.id = ct.entry
			  AND (ct.npcflag = 11 OR ct.npcflag = 16388 OR ct.npcflag = 33 OR ct.npcflag= 135 OR ct.Rank>0)
			  AND c.map = ?d
			  AND c.position_x > ?f
			  AND c.position_x < ?f
			  AND c.position_y > ?f
			  AND c.position_y < ?f
			  AND ROUND(c.position_z)>=92
			  GROUP BY c.id
			';
		}

		// Flight masters
		$rows = $DB->select($sql,
			$_SESSION['locale'] > 0 ? $_SESSION['locale'] : 1,
			$_SESSION['locale'] > 0 ? $_SESSION['locale'] : 1,
			$zone['mapID'],
			$zone['x_min'],
			$zone['x_max'],
			$zone['y_min'],
			$zone['y_max']);
		

		if ($rows)
		{
			$taxies = array(
				'population' => 0,
				'name' => LOCALE_FLIGHTMASTERS, // TODO: LOCALIZE!
				'atid' => $id,
				'points' => array()
			);
			$inns = array(
				'population' => 0,
				'name' => LOCALE_INKEEPER, // TODO: LOCALIZE!
				'atid' => $id,
				'points' => array()
			);
			$repairers = array(
				'population' => 0,
				'name' => LOCALE_REPAIRERS, // TODO: LOCALIZE!
				'atid' => $id,
				'points' => array()
			);
			$spirithealers = array(
				'population' => 0,
				'name' => LOCALE_SPIRITHEALERS, // TODO: LOCALIZE!
				'atid' => $id,
				'points' => array()
			);
			$boss = array(
				'population' => 0,
				'name' => 'BOSS', // TODO: LOCALIZE!
				'atid' => $id,
				'points' => array()
			);
			$elite = array(
				'population' => 0,
				'name' => '精英', // TODO: LOCALIZE!
				'atid' => $id,
				'points' => array()
			);
			$rare = array(
				'population' => 0,
				'name' => '稀有', // TODO: LOCALIZE!
				'atid' => $id,
				'points' => array()
			);
			$rareElite = array(
				'population' => 0,
				'name' => '稀有精英', // TODO: LOCALIZE!
				'atid' => $id,
				'points' => array()
			);

			//转换距阵
			$matrix = array(
				209=>array('a'=>0.18438167797700108,'b'=>-0.1076046670449391,'c'=>-0.08411858460264626,'d'=>-0.22194004962929226,'m'=>274.62392828620904,'n'=>-2344.4213611074288),
				1581=>array('a'=>0.0025961230451272688,'b'=>-0.6041522819379475,'c'=>-0.6392524626094266,'d'=>-0.057852431684940364,'m'=>-62.836687841769546,'n'=>292.6034926496562),
				2159=>array('a'=>0.04834194649218716,'b'=>-0.37985036703927655,'c'=>-0.3989263762615558,'d'=>0.018054318384316193,'m'=>-57.29639489376527,'n'=>-112.3157096767963),
				1583=>array('a'=>-0.5496700294323891,'b'=>0.011303394468760497,'c'=>-0.002731067553093214,'d'=>0.5581618104752952,'m'=>-405.3192794931457,'n'=>615.5694905173766),
				15830=>array('a'=>-0.5496700294323891,'b'=>0.011303394468760497,'c'=>-0.002731067553093214,'d'=>0.5581618104752952,'m'=>-405.3192794931457,'n'=>615.5694905173766),
				491=>array('a'=>0.29112633776417773,'b'=>-1.3536535076025622,'c'=>-1.3803368228937556,'d'=>-0.2943863628765402,'m'=>-2241.3766244616045,'n'=>-2087.6518513266715),
				1176=>array('a'=>0.07369018483754619,'b'=>-2.6712114583935014,'c'=>-2.435315397833935,'d'=>0.21814916191335776,'m'=>-2051.2302196519854,'n'=>-1648.5362164109201),
				1584=>array('a'=>-0.2461026476713104,'b'=>-3.8860904719994376,'c'=>-3.9913283890530455,'d'=>0.38938584008723764,'m'=>-1584.8084097132405,'n'=>-610.6006738933447),
				3428=>array('a'=>1.4996881266053559,'b'=>-4.094917027094208,'c'=>-3.98632960477255,'d'=>-1.6547145413870252,'m'=>8289.01584257188,'n'=>-2822.8936526969924),
				3429=>array('a'=>0.03505819407074284,'b'=>-2.137268211103158,'c'=>-1.711805373849078,'d'=>0.24007053639752174,'m'=>8392.515516834934,'n'=>-3137.188474303275)
			);
			$map0Poi = array(); //全局地图
			$map1Poi = array(); //全局地图
			foreach($rows as $row)
			{
				$name = localizedName($row);
				$subname = localizedName($row, "subname");
				if ($subname)
					$name = $name . " <" . $subname . ">";
				
				// Get Faction for Type (pin colour)
				$faction = $DB->selectRow('
					SELECT c.entry, factiontemplateID, A, H
					FROM ?_factiontemplate, creature_template c
					{
						LEFT JOIN (locales_creature l)
						ON l.entry=c.entry
					}
					WHERE
						c.entry=?d
						AND factiontemplateID=faction_A
					LIMIT 1 
				', $row['entry']
				);

				//echo $row['faction_A'];
				
				if ($faction['A'] == 1 && $faction['H'] == -1) {
					$type = 3; // 3 is blue
				} 
				
				if ($faction['A'] == -1 && $faction['H'] == 1) {
					$type = 2; // 2 is red
				}
				
				if ($faction['A'] == 1 && $faction['H'] == 1) {
					$type = 0; // 0 is yellow
				}
				
				$poi = array( //全局地图
					'name' => $name,
					'type' => $type, // affects pin color (style=pin-$type)
					'entry' => $row['entry'],
					'x' => $row['position_x'] / (34133.33333333333/512.0) - 8 * 32,
					'y' => -$row['position_y'] / (34133.33333333333/512.0) + 8  * 32
				);
				if($zone['mapID']==0) {//全局地图
					array_push($map0Poi,$poi);
				}
				if($zone['mapID']==1) {//全局地图
					array_push($map1Poi,$poi);
				}
				$point = array();
				if(array_key_exists($id,$matrix)){
					$mapw=1280.0;
					$maph=853.0;
					if($id==491||$id==1584||$id==3428) {
						$mapw=488.0;
						$maph=325.0;
					}else if($id==1176) {
						$mapw=580.0;
						$maph=388.0;
					}
					$v = $matrix[$id];
					$oldx = $row['position_x'];
					$oldy = $row['position_y'];
					$row['position_x']= ($oldx*$v['d']/$v['c'] + $v['m']*$v['d']/$v['c'] - $oldy - $v['n']) / ($v['a'] * $v['d']/$v['c'] - $v['b']);
					$row['position_y']= ($oldx*$v['b']/$v['a'] + $v['m']*$v['b']/$v['a'] - $oldy - $v['n']) / ($v['c'] * $v['b']/$v['a'] - $v['d']);
					/*echo $oldx.',',$oldy.'->'.$row['position_x'].'->'.$row['position_y']."\r\n";*/
					$point = array(
						'name' => $name,
						'type' => $type, // affects pin color (style=pin-$type)
						'url' => '/npc-'.$row['entry'],
						'x' => 100*round($row['position_x'] / $mapw, 2),
						'y' => 100*round($row['position_y'] / $maph, 2),
					);
				} else {
					$point = array(
						'name' => $name,
						'type' => $type, // affects pin color (style=pin-$type)
						'url' => '/npc-'.$row['entry'],
						'x' => round(100 - ($row['position_y']-$zone['y_min']) / (($zone['y_max']-$zone['y_min']) / 100), 2),
						'y' => round(100 - ($row['position_x']-$zone['x_min']) / (($zone['x_max']-$zone['x_min']) / 100), 2)
					);
				}
				
				$isNPC=FALSE;
				if ($row['npcflag']==11)
				{	
					$taxies['population']++;
					$taxies['points'][] = $point;
					$isNPC=TRUE;
				}
				if ($row['npcflag']==135)
				{
					$inns['population']++;
					$inns['points'][] = $point;
					$isNPC=TRUE;
				}
				if ($row['npcflag']==16388)
				{
					$repairers['population']++;
					$repairers['points'][] = $point;
					$isNPC=TRUE;
				}
				if ($row['npcflag']==33) //&16384 || $row['npcflag']&32768)
				{
					$spirithealers['population']++;
					$spirithealers['points'][] = $point;
					$isNPC=TRUE;
				}
				if($row['Rank']==1 && $isNPC==FALSE){
					$elite['population']++;
					$elite['points'][]= $point;
				}
				if($row['Rank']==2 && $isNPC==FALSE){
					$rareElite['population']++;
					$x['points'][]= $point;
				}
				if($row['Rank']==3 && $isNPC==FALSE){
					$boss['population']++;
					$boss['points'][]= $point;
				}
				if($row['Rank']==4 && $isNPC==FALSE){
					$rare['population']++;
					$rare['points'][]= $point;
				}

			}
			if($boss['population'])
				$zone['position'][] = $boss;
			if($elite['population'])
				$zone['position'][] = $elite;
			if($rare['population'])
				$zone['position'][] = $rare;
			if($rareElite['population'])
				$zone['position'][] = $rareElite;												
			if ($taxies['population'])
				$zone['position'][] = $taxies;
			if ($inns['population'])
				$zone['position'][] = $inns;
			if ($repairers['population'])
				$zone['position'][] = $repairers;
			if ($spirithealers['population'])
				$zone['position'][] = $spirithealers;
		}

	}

	if (!$zone['position'])
	{
		$zone['position'] = array(
			array(
				'population' => 0,
				'name' => ""/*$zone['name']*/,
				'atid' => $id,
				'points' => array()
			)
		);
	}

	if(isset($smarty)) {//全局地图
		$smarty->assign('map0Poi', $map0Poi);
		$smarty->assign('map1Poi', $map1Poi);
 
		save_cache(10002, $zone['areatableID'], $map0Poi); /*10002表示zoneNpc的map0Poi*/
		save_cache(10003, $zone['areatableID'], $map1Poi); /*10003表示zoneNpc的map2Poi*/
	 }

/*	// Положения объектофф:
	$zone['position'] = position($object['entry'], 'gameobject');

	// Исправить type, чтобы подсвечивались event-овые объекты
	if ($object['position'])
		foreach ($object['position'] as $z => $zone)
			foreach ($zone['points'] as $p => $pos)
				if ($pos['type'] == 0 && ($events = event_find(array('object_guid' => $pos['guid']))))
				{
					$names = array_select_key(event_name($events), 'name');
					$object['position'][$z]['points'][$p]['type'] = 4;
					$object['position'][$z]['points'][$p]['events'] = implode(", ", $names);
				}
*/
	save_cache(16, $zone['areatableID'], $zone);
} else {

	if($map0Poi = load_cache(10002, $zone['areatableID'])){
		$smarty->assign('map0Poi', $map0Poi);
	}
	if($map1Poi = load_cache(10003, $zone['areatableID'])){
		$smarty->assign('map1Poi', $map1Poi);
	}
}

global $page;
$page = array(
	'Mapper' => true,
	'Book' => false,
	'Title' => $zone['name'].' - '.$smarty->get_config_vars('Zone'),
	'tab' => 0,
	'type' => 7,
	'typeid' => $zone['areatableID'],
	'path' => path(0, 6, $zone['areatableID']) //path(0, 6, $zone['map'])
);

$smarty->assign('page', $page);


// Количество MySQL запросов
$smarty->assign('mysql', $DB->getStatistics());
$smarty->assign('allitems', $allitems);
$smarty->assign('zone', $zone);
$smarty->display('zone.tpl');
?>