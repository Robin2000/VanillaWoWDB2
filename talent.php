<?php
$smarty->config_load($conf_file, 'talent');
global $page;

$title = $smarty->get_config_vars('Talent_calculator');

$c=$podrazdel;

switch($c){
	case 1: $tplfile = 'talent/warrior.tpl';break;	
	case 2:	$tplfile = 'talent/paladin.tpl';break;
	case 3:	$tplfile = 'talent/hunter.tpl';break;
	case 4:$tplfile = 'talent/rogue.tpl';break;	
	case 5:$tplfile = 'talent/priest.tpl';break;	
	case 7:	$tplfile = 'talent/shaman.tpl';break;
	case 8:	$tplfile = 'talent/mage.tpl';break;
	case 9:$tplfile = 'talent/warlock.tpl';break;
	case 11:$tplfile = 'talent/druid.tpl';break;
	case 0:
	default:
		$tplfile='talent.tpl';
}

$page = array(
	'Mapper' => false,
	'Book' => false,
	'Talent' => true,
	'Title' => $title,
	'tab' => 1,
	'type' => 0,
	'typeid' => $c,
	'path' => path(1, $c)
);
$smarty->assign('page', $page);

$smarty->display($tplfile);


?>
