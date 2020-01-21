function get(url,sucessFunc,errorFunc){
    $.ajax({
            type: 'get',
            url: url,
            dataType: "json",
            ifModified: false,
            crossDomain: true,
            success: function (data) {
                if(sucessFunc){
                    sucessFunc(data);
                }
            },
            error: function (data) {
                if(errorFunc){
                    errorFunc(data);
                }
            }
    });
}

$(document).ready(function(){ 
    initPage();
});

var curPart = 0;
var part = 0;
var oldVideo = null;
var oldImg = null;

function initPage() {
    $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 200
    });

    $(".video-img").click(function() {       
        curPart = 0;
        part = 0;
        try{
            part = parseInt($(this).next().text());
        }catch(e){}
        
        var video = $(this).prev();
        $(this).hide();
        try{
            if(oldImg!=null) {
                oldImg.show();
            }
            oldImg = $(this);
        }catch(e){}
        try{
            if(oldVideo!=null) {
                oldVideo.get(0).pause();
                oldVideo.get(0).controls=false;;
            }
            oldVideo = video;
        }catch(e){}


            video.get(0).play();
            video.attr('controls', 1);

            video.get(0).onended = function () {
                video.css("object-fit","scale-down");
                video.get(0).poster = "/media/loading.gif";
                var oldUrl = video.get(0).src;
                if(part>curPart) {
                    var newPart = curPart+1;
                    video.get(0).src=oldUrl.split('part'+curPart).join('part'+newPart);
                    video.get(0).play();
                    curPart++;
                } else {
                    var newPart = 0;
                    video.get(0).src=oldUrl.split('part'+curPart).join('part'+newPart);
                    video.get(0).play();
                    curPart=0;
                }
            }
    });
}

var loadEvent=null;
$(document).scroll(function() 
{
    /*当页面滚动到距离底部400px， 尝试加载数据*/
    if($(document).height() - $(document).scrollTop() - window.innerHeight <400 ) {
        if(loadEvent!=null) {
            clearTimeout(loadEvent);
        }
        loadEvent = setTimeout("loadData()",500);
    }
});

function loadData() {
    get("/api2/",function(){

    },function(){

    });
}
