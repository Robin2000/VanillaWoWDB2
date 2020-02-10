<?php
header('Content-type: application/x-javascript');
require_once('configs/config.php');
require_once('includes/allutil.php');

// Для Ajax отключаем debug
$AoWoWconf['debug'] = false;
// Для Ajax ненужен реалм
$AoWoWconf['realmd'] = false;
// Настройка БД
require_once('includes/db.php');

// Параметры передаваемые скрипту
@list($what, $id) = explode("=", $_SERVER['QUERY_STRING']);
$id = intval($id);

$x = '';

switch($what)
{
	case 'item':
		if(!$item = load_cache(6, $id))
		{
			require_once('includes/allitems.php');
			$item = allitemsinfo($id, 1);
			save_cache(6, $id, $item);
		}
		$x .= '$WowheadPower.registerItem('.$id.', '.$_SESSION['locale'].', {';
		if ($item['name'])
			$x .= 'name: \''.ajax_str_normalize($item['name']).'\',';
		if ($item['quality'])
			$x .= 'quality: '.$item['quality'].',';
		if ($item['icon'])
			$x .= 'icon: \''.ajax_str_normalize($item['icon']).'\',';
		if ($item['info'])
			$x .= 'tooltip_'.$locales[$_SESSION['locale']].': \''.ajax_str_normalize($item['info']).'\'';
		$x .= '});';
		break;
	case 'spell':
		if(!$spell = load_cache(14, $id))
		{
			require_once('includes/allspells.php');
			$spell = allspellsinfo($id, 1);
			save_cache(14, $id, $spell);
		}
		$x .= '$WowheadPower.registerSpell('.$id.', '.$_SESSION['locale'].',{';
		if ($spell['name'])
			$x .= 'name: \''.ajax_str_normalize($spell['name']).'\',';
		if ($spell['icon'])
			$x .= 'icon: \''.ajax_str_normalize($spell['icon']).'\',';
		if ($spell['info'])
			$x .= 'tooltip_'.$locales[$_SESSION['locale']].': \''.ajax_str_normalize($spell['info']).'\'';
		$x .= '});';
		break;
	case 'quest':
		if(!$quest = load_cache(11, $id))
		{
			require_once('includes/allquests.php');
			$quest = GetDBQuestInfo($id, QUEST_DATAFLAG_AJAXTOOLTIP);
			$quest['tooltip'] = GetQuestTooltip($quest);
			save_cache(11, $id, $quest);
		}
		$x .= '$WowheadPower.registerQuest('.$id.', '.$_SESSION['locale'].',{';
		if($quest['name'])
			$x .= 'name: \''.ajax_str_normalize($quest['name']).'\',';
		if($quest['tooltip'])
			$x .= 'tooltip_'.$locales[$_SESSION['locale']].': \''.ajax_str_normalize($quest['tooltip']).'\'';
		$x .= '});';
		break;
	case 'npc':	
        if(!$creature = load_cache(1000, $id))
        {
            require_once('includes/allnpcs.php');
            $creature = creatureinfo($id, 1);
            save_cache(1000, $id, $creature);
		}
		if(!$creature){
			break;
		}
		$creature = GetNPCTooltip($creature);
        $x .= '$WowheadPower.registerNpc('.$id.', '.$_SESSION['locale'].',{';
        if($creature['name'])
            $x .= 'name_'.$locales[$_SESSION['locale']].': \''.ajax_str_normalize($creature['name']).'\',';
        if($creature['subname'])
            $x .= 'subname_'.$locales[$_SESSION['locale']].': \''.ajax_str_normalize($creature['subname']).'\',';
        if($creature['level_min'])
            $x .= 'level:\''.$creature['level_min'].'\',';
        if($creature['type'])
            $x .= 'type:\''.$creature['type'].'\',';
        if($creature['rank'])
            $x .= 'rank:\''.$creature['rank'].'\',';
        if($creature['tooltip'])
            $x .= 'tooltip_'.$locales[$_SESSION['locale']].':\''.ajax_str_normalize($creature['tooltip']).'\'';
        $x .= '});';
        break;
	case 'object':
        if(!$object = load_cache(1001, $id))
        {
            require_once('includes/allobjects.php');
            $object = objectinfo($id, 1);
            save_cache(1001, $id, $object);
		}
		if(!$object){
			break;
		}

		$object=GetObjectTooltip($object);
        $x .= '$WowheadPower.registerObject('.$id.', '.$_SESSION['locale'].',{';
        if($object['name'])
            $x .= 'name_'.$locales[$_SESSION['locale']].': \''.ajax_str_normalize($object['name']).'\',';
        if($object['type'])
            $x .= 'type:\''.$object['type'].'\',';
        if($object['tooltip'])
            $x .= 'tooltip_'.$locales[$_SESSION['locale']].':\''.ajax_str_normalize($object['tooltip']).'\'';
        $x .= '});';
        break;
	default:
		break;
}

echo $x;

?>