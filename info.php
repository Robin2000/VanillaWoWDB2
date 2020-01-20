<?php
require_once('includes/allutil.php');

$id = intval($podrazdel);

$cache_key = cache_key($id);

if(!$info = load_cache(20001, $cache_key))
{
	unset($info);


	$row = $DB->selectRow("
				SELECT nid,media_type,cid,source,B.avatar,B.nick,author,DATE_FORMAT(pub_time,'%Y-%m-%d %H:%i') as pub_time,title,body,tag,thumb,talks,likes
				FROM n_news A
				LEFT JOIN n_author B ON A.uid=B.uid
				WHERE nid=?d
				LIMIT 1
				",
				$id
	);

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
		"tag" => $row['tag'], 
		"thumb" => $row['thumb'], 
		"talks" => $row['talks'], 
		"likes" => $row['likes'], 
	);

	unset($row);
	
	save_cache(20001, $cache_key, $info);
}

$smarty->assign('info', $info);
$smarty->display('info.tpl');
?>
