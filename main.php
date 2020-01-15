<?php
$smarty->config_load($conf_file);
global $page;
$smarty->assign('page', $page);
$smarty->display('home.tpl');
?>