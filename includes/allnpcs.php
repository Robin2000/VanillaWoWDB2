<?php
require_once('includes/alllocales.php');
require_once('includes/game.php');

// Для списка creatureinfo()
$npc_cols[0] = array('name', 'subname', 'minlevel', 'maxlevel', 'type', 'rank', 'faction_A','faction_H');
$npc_cols[1] = array('subname', 'minlevel', 'maxlevel', 'type', 'rank', 'minhealth', 'maxhealth', 'minmana', 'maxmana', 'mingold', 'maxgold', 'lootid', 'spell1', 'spell2', 'spell3', 'spell4', 'A', 'H', 'mindmg', 'maxdmg', 'attackpower', 'dmg_multiplier', 'armor', 'baseattacktime', 'resistance1','resistance2','resistance3','resistance4','resistance5','resistance6');
$npc_type = array(LOCALE_TYPENPC_UNDEFINED,LOCALE_TYPENPC_BEAST,LOCALE_TYPENPC_DRAGON,LOCALE_TYPENPC_DEMON,LOCALE_TYPENPC_ELEM,LOCALE_TYPENPC_GIANT,LOCALE_TYPENPC_UNDEAD,LOCALE_TYPENPC_HUMAN,LOCALE_TYPENPC_CRITTER,LOCALE_TYPENPC_MECHANIC,LOCALE_TYPENPC_UNCATEGORY,LOCALE_TYPENPC_TOTEM,LOCALE_TYPENPC_COMPANION,LOCALE_TYPENPC_GAS_CLOUD);
$npc_rank = array(LOCALE_NORMAL,LOCALE_ELITE,LOCALE_RARE_ELITE,LOCALE_BOSS,LOCALE_RARE,LOCALE_UNKNOWN);

// Функция информации о создании
function creatureinfo2(&$Row)
{
	global $smarty;
	// Номер создания
	$creature['entry'] = $Row['entry'];
	// Имя создания
	$creature['name'] = localizedName($Row);
	// Заменяем " (1)" на " (героич.)"
	$creature['name'] = str_replace(' (1)', LOCALE_HEROIC, $creature['name']);
	// Подимя создания
	$creature['subname'] = localizedName($Row, 'subname');
	// Min/Max уровни
	$creature['minlevel'] = $Row['minlevel'];
	$creature['maxlevel'] = $Row['maxlevel'];
	// Get Location
	$creature['location'] = getLocation($creature['entry'], "creature");
	// Reaction
	$creature['react'] = ($Row['faction_A']).','.($Row['faction_H']);
	// Тип NPC
	$creature['type'] = $Row['type'];
	// Тег NPC
	$creature['tag'] = str_normalize($Row['subname']);
	// Ранг NPC
	$creature['classification'] = $Row['rank'];
	return $creature;
}

// Функция информации о создании
function creatureinfo($id)
{
	global $DB;
	global $npc_cols;
	$row = $DB->selectRow('
		SELECT ?#, c.entry
		{
			, l.name_loc'.$_SESSION['locale'].' as `name_loc`
			, l.subname_loc'.$_SESSION['locale'].' as `subname_loc`
			, ?
		}
		FROM ?_factiontemplate, creature_template c
		{
			LEFT JOIN (locales_creature l)
			ON l.entry=c.entry AND ?
		}
		WHERE
			c.entry=?d
			AND factiontemplateID=faction_A
		LIMIT 1
		',
		$npc_cols[0],
		($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
		($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
		$id
	);
	return creatureinfo2($row);
}

function GetNPCTooltip($row)
{
	global $npc_type, $npc_rank;
    $creature = array(
        'entry'          => $row['entry'],
        'source_name'    => $row['name'],
        'name'           => localizedName($row),
        'subname'        => localizedName($row, 'subname'),
        'minlevel'       => $row['minlevel'],
        'maxlevel'       => $row['maxlevel'],
        'react'          => $row['A'].','.$row['H'],
        'type'           => $row['type'],
        'classification' => $row['classification'],
        'expansion'      => '1.12.1'
    );
    $x = '';
    $x .= '<table><tr><td>'.'<b class="q">';
    $x .= htmlspecialchars($creature['name']);
    $x .= '</b></td></tr><tr><td>';
    if($creature['subname'])
        $x .= '<'.htmlspecialchars($creature['subname']).'>';
    $x .= '</td></tr><tr><td>';
    if (isset($creature['minlevel']))
    {
        if($creature['classification'] == 3)
            $x .= LOCALE_LEVEL.' ?? ';
        elseif($creature['minlevel'] == $creature['maxlevel'])
            $x .= LOCALE_LEVEL.' '.$creature['minlevel'].' ';
        else
            $x .= LOCALE_LEVEL.' '.$creature['minlevel'].'-'.$creature['maxlevel'].' ';
    }
    if($creature['type'] && $creature['type'] != 10)
        $x .= $npc_type[$creature['type']].' ';
    if(isset($creature['classification']))
        $x .= '('.$npc_rank[$creature['classification']].')';
    $x .= '</tr></td></tr></table>';
    $creature['tooltip'] = $x;
    
    return $creature;
}

?>