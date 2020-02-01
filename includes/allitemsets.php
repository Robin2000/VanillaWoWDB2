<?php

require_once('includes/allitems.php');

$itemset_col[0] = array('itemsetID', 'name_loc'.$_SESSION['locale'], 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10','allowClass');
$itemset_col[1] = array('itemsetID', 'name_loc'.$_SESSION['locale'], 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10', 'allowClass', 'spell_id1', 'spell_id2', 'spell_id3', 'spell_id4', 'spell_id5', 'spell_id6', 'spell_id7', 'spell_id8', 'skillID', 'bonus1', 'bonus2', 'bonus3', 'bonus4', 'bonus5', 'bonus6', 'bonus7', 'bonus8', 'skilllevel');

function itemsetinfo2(&$row)
{
	$itemset = array();
	$itemset['entry'] = $row['itemsetID'];
	$itemset['name'] = $row['name_loc'.$_SESSION['locale']];
	$itemset['level_min'] = 255;
	$itemset['level_max'] = 0;
	$itemset['pieces'] = array();
	for($j=1;$j<=10;$j++)
		if ($row['item'.$j])
		{
			$itemset['pieces'][] = $row['item'.$j];
			$item = array();
			$item = iteminfo($row['item'.$j], 0);
			if ($item['level'] < $itemset['level_min']) $itemset['level_min'] = $item['level'];
			if ($item['level'] > $itemset['level_max']) $itemset['level_max'] = $item['level'];
		}
	if(isset($item))
	{
		$itemset['quality2'] = 7 - $item['quality'];
		if($item['classs']==4)
			$itemset['type'] = $item['subclass'];
	} else {
		$itemset['quality2'] = 7;
	}
	// TODO: classes
	$itemsetClasses = array();
	$allowClass =  $row['allowClass'];
	if(isset($allowClass) && $allowClass > 0) {
		$allClass=array(1,2,3,4,5,7,8,9,11);
		$classCount = count($allClass);
		for($i=0;$i<$classCount;$i++) {
			$v=$allClass[$i];
			if(($allowClass & pow(2,$v-1)) == pow(2,$v-1)) {
				array_push($itemsetClasses,$v);
			}
		}
		if(count($itemsetClasses) == $classCount) {
			$itemsetClasses=array();
		}
	}
	
	$itemset['classes'] = $itemsetClasses;
	return $itemset;
}

?>