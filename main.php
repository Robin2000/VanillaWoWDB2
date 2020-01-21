<?php
require_once('includes/allutil.php');

$cache_key = cache_key(20000);

if(!$news = load_cache(20000, $cache_key))
{
	unset($news);


	$rows = $DB->select("
                SELECT nid,media_type,source,author,tag,title,thumb,talks,likes,part
                FROM n_news 
                ORDER By nid DESC limit 40
				",
				$id
    );
    $minID = 0;
    $news = array();
	foreach($rows as $row) {

        $thumbSize=0;
        $thumb=$row['thumb'];
        if (isset($thumb)){
            $thumb = explode(",",$thumb);
            $thumbSize = count($thumb);
        }
        $news[] = array(
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

        $minID = $row['nid'];
    }


	unset($rows);
	
	save_cache(20000, $cache_key, $news, '', 60);/*60秒不会刷新*/
}

$smarty->assign('news', $news);
$smarty->assign('minID', $minID);

$smarty->config_load($conf_file);
global $page;
$smarty->assign('page', $page);
$smarty->display('home.tpl');
?>