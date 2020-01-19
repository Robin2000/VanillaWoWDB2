<?php
/**
 * KindEditor PHP
 *
 * 本PHP程序是演示程序，建议不要直接在实际项目中使用。
 * 如果您确定直接使用本程序，使用之前请仔细确认相关安全设置。
 *
 */

require_once 'JSON.php';

function alert($msg) {
	header('Content-type: application/json; charset=UTF-8');
	$json = new Services_JSON();
	echo $json->encode(array('error' => 1, 'message' => $msg));
	exit;
}

function reSizeImg($imgSrc, $resize_width, $resize_height, $dstimg, $isCut = false) {
        //图片的类型
        $type = substr(strrchr($imgSrc, "."), 1);
        //初始化图象
        if ($type == "jpg" || $type == "jpeg") {
            $im = imagecreatefromjpeg($imgSrc);
        }
        if ($type == "gif") {
            $im = imagecreatefromgif($imgSrc);
        }
        if ($type == "png") {
            $im = imagecreatefrompng($imgSrc);
        }
  
        $width = imagesx($im);
        $height = imagesy($im);
  
        //生成图象
        //改变后的图象的比例
        $resize_ratio = ($resize_width) / ($resize_height);
        //实际图象的比例
        $ratio = ($width) / ($height);
        if (($isCut) == 1) {
            if ($ratio >= $resize_ratio) {
                //高度优先
                $newimg = imagecreatetruecolor($resize_width, $resize_height);
                imagecopyresampled($newimg, $im, 0, 0, 0, 0, $resize_width, $resize_height, (($height) * $resize_ratio), $height);
                ImageJpeg($newimg, $dstimg);
            }
            if ($ratio < $resize_ratio) {
                //宽度优先
                $newimg = imagecreatetruecolor($resize_width, $resize_height);
                imagecopyresampled($newimg, $im, 0, 0, 0, 0, $resize_width, $resize_height, $width, (($width) / $resize_ratio));
                ImageJpeg($newimg, $dstimg);
            }
        } else {
            if ($ratio >= $resize_ratio) {
                $newimg = imagecreatetruecolor($resize_width, ($resize_width) / $ratio);
                imagecopyresampled($newimg, $im, 0, 0, 0, 0, $resize_width, ($resize_width) / $ratio, $width, $height);
                ImageJpeg($newimg, $dstimg);
            }
            if ($ratio < $resize_ratio) {
                $newimg = imagecreatetruecolor(($resize_height) * $ratio, $resize_height);
                imagecopyresampled($newimg, $im, 0, 0, 0, 0, ($resize_height) * $ratio, $resize_height, $width, $height);
                ImageJpeg($newimg, $dstimg);
            }
        }
        ImageDestroy($im);
 }
function getExt($imgUrl) {
	$ext = strrchr($imgUrl, ".");
	if ($ext == ".gif" || $ext == ".jpg" || $ext == 'png' || $ext == 'jpeg'){
		return $ext;
	}
	$imgSize = getimagesize($imgUrl);
	
    if(!in_array($imgSize['mime'],array('image/jpg', 'image/gif', 'image/png', 'image/jpeg'),true)){
        alert("url not a img address!".$imgUrl);
    }

    //获取后缀名

    $_mime = explode('/', $imgSize['mime']);

	$_ext = '.'.end($_mime);
	return $_ext;
}


function crabImage($imgUrl, $saveDir='./', $fileName=null) {	
    

    if(empty($imgUrl)){
        alert("no url address!".$imgUrl);;
    }

    //获取图片信息大小


	$_ext = getExt($imgUrl);

    if(empty($fileName)){  //生成唯一的文件名

        $fileName = uniqid(time(),true).$_ext;

    }

    //开始攫取

    ob_start();

    readfile($imgUrl);

    $imgInfo = ob_get_contents();

    ob_end_clean();

    if(!file_exists($saveDir)){

        mkdir($saveDir,0777,true);

    }

    $fp = fopen($saveDir.$fileName, 'a');

    $imgLen = strlen($imgInfo);    //计算图片源码大小

    $_inx = 1024;   //每次写入1k

    $_time = ceil($imgLen/$_inx);

    for($i=0; $i<$_time; $i++){

        fwrite($fp,substr($imgInfo, $i*$_inx, $_inx));

    }

    fclose($fp);
    

    return array('file_name'=>$fileName,'save_path'=>$saveDir.$fileName);

}

try {

    $php_path = dirname(dirname(__FILE__)) . '/';
    $php_url = dirname(dirname($_SERVER['PHP_SELF'])) . '/';

    //文件保存目录路径
    $save_path = $php_path . 'attached/image/';
    //文件保存目录URL
    $save_url = $php_url . 'attached/image/';

    $ymd = date("Ymd");
    $save_path .= $ymd . "/";
    $save_url .= $ymd . "/";
    if (!file_exists($save_path)) {
        mkdir($save_path);
    }

    //定义允许上传的文件扩展名
    $ext_arr = array(
        'image' => array('gif', 'jpg', 'jpeg', 'png', 'bmp'),
        'flash' => array('swf', 'flv'),
        'media' => array('swf', 'flv', 'mp3', 'wav', 'wma', 'wmv', 'mid', 'avi', 'mpg', 'asf', 'rm', 'rmvb'),
        'file' => array('doc', 'docx', 'xls', 'xlsx', 'ppt', 'txt', 'zip', 'rar', 'gz', 'bz2'),
    );


        $save_path = realpath($save_path) . '/';

        $imgUrl = $_GET["img"];
        if(!isset($imgUrl)) {
            alert("no img parameter!");
        }

        $imgUrl = urldecode($imgUrl);

        $arr = crabImage($imgUrl, $save_path, null);

        $new_file_name = $arr['file_name'];

            reSizeImg($save_path.$new_file_name, 121, 75, $save_path.'thumb'.$new_file_name, true);

        //PHP上传失败


        @chmod($file_path, 0644);
        $file_url = $save_url . $new_file_name;

        header('Content-type: application/json; charset=UTF-8');
        $json = new Services_JSON();
        echo $json->encode(array('error' => 0, 'url' => $file_url, 'thumb' => $save_url .'thumb'. $new_file_name));
        exit;

}catch(Exception $e){
    alert($e->getMessage());
}

