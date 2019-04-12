<?php
$smarty->config_load($conf_file, 'talent');
global $page;

$title = $smarty->get_config_vars('Talent_calculator');

$c=$podrazdel;

switch($c){
	case 2:
	$tplfile = 'talent/paladin.tpl';
	break;
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
