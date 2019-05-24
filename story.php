<?php
global $page;

$title = "趣味魔兽世界小故事";

$c=$podrazdel;

switch($c){
	case 1:$title="细数经典旧世值得铭记的传奇武器";break;
	case 2:$title="灰烬使者的传说";break;
	case 3:$title="暗月马戏团宠物青蛙加布获得攻略";break;
	case 4:$title="纳兹加克王子与潮汐咒符";break;
	case 5:$title="各大副本钥匙及获取方法（一）";break;
	case 6:$title="各大副本钥匙及获取方法（二）";break;
	case 7:$title="管理者埃克索图斯";break;
	case 8:$title="时光加点燃，门神";break;
	case 9:$title="出发!目标安其拉!";break;
	case 10:$title="听从克尔苏加德的召唤！";break;
	case 11:$title="石匠工会与范克里夫";break;
	case 12:$title="60级时那些有趣玩具（一）";break;
	case 13:$title="60级时那些有趣玩具（二）";break;
	case 14:$title="60级时那些有趣玩具（三）";break;
	case 15:$title="部落最伟大的英雄之一：雷克萨";break;
	case 16:$title="哀嚎洞穴与翡翠梦境";break;
	case 17:$title="在PVP中妙用的有趣小物品";break;
	default:
		$title = "趣味魔兽世界小故事";
}

$tplfile = 'story/'.$c.'.tpl';

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
