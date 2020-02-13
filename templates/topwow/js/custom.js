var curPart = 0;
var part = 0;
var oldVideo = null;
var oldImg = null;
/* items,quests,npcs,zones关联新闻页面的视频播放 */
function playVideoNow(nid) {

		curPart = 0;
		part = 0;

		try{
			part = parseInt(document.getElementById("part"+nid).textContent);
		}catch(e){
            try{
            part = parseInt(document.getElementById("part"+nid).innerText);
            }catch(e){}
        }
        
        var video = document.getElementById("video"+nid);
        document.getElementById("img"+nid).style.display="none";
        try{
            if(oldImg!=null) {
                oldImg.style.display="block";
            }
            oldImg = document.getElementById("img"+nid);
        }catch(e){}
        try{
            if(oldVideo!=null) {
                oldVideo.pause();
                oldVideo.controls=false;
                oldVideo.preload='none';
            }
            oldVideo = video;
        }catch(e){}


		video.play();
		video.controls = true;

		video.onended = function () {
			try{
				video.style.objectFit = "scale-down";
			}catch(e){}
			try{
				video.poster = "/media/loading.gif";
			}catch(e){}

			var oldUrl = video.src;
			if(part>curPart) {
				var newPart = curPart+1;
                video.src=oldUrl.split('part'+curPart).join('part'+newPart);
                video.preload='auto';
				video.play();
				curPart++;
			} else {
				var newPart = 0;
                video.src=oldUrl.split('part'+curPart).join('part'+newPart);
                video.preload='auto';
				video.play();
				curPart=0;
			}
		}
}

function getSupportImgExt(){
	var ua = window.navigator.userAgent;
	var old_ie = ua.indexOf('MSIE ');
	var new_ie = ua.indexOf('Trident/');
	var ext="webp";
	if ((old_ie > -1) || (new_ie > -1)) {
		ms_ie = true;
		ext="jpg";
    }
    return ext;
}

/* npc详情页面的缩略图点击显示大图,要求图片名entry对应 */
function showbig()
{
	document.getElementById('bigbg').style.display='block';
	document.getElementById('bigimg').src='http://www.topwow.top/screenshots/big/'+entry+'.'+getSupportImgExt();
} 	

function customInitPage(){
    try{
        /* npc详情页面的缩略图点击显示大图,要求图片名entry对应 */
        if(entry != undefined && document.getElementById('thumbimg')!=undefined) {
            document.getElementById('thumbimg').src="http://www.topwow.top/screenshots/thumb/"+entry+"."+getSupportImgExt();
        }
    }catch(e){}

    try{
        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
        });
    }catch(e){}
}
try{
    window.addEventListener("load",customInitPage,false); 
}catch(e){
    try{
        window.attachEvent("onload",customInitPage);
    }catch(e){

    }
}
