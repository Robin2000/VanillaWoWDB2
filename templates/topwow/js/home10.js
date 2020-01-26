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
                oldVideo.get(0).controls=false;
                oldVideo.get(0).preload='none';
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
                    video.get(0).preload='auto';
                    video.get(0).play();
                    curPart++;
                } else {
                    var newPart = 0;
                    video.get(0).src=oldUrl.split('part'+curPart).join('part'+newPart);
                    video.get(0).preload='auto';
                    video.get(0).play();
                    curPart=0;
                }
            }
    });
}

var loadEvent=null;
var lastLoadEvent = 0;
$(document).scroll(function() 
{
    /*当页面滚动到距离底部400px， 尝试加载数据*/
    if($(document).height() - $(document).scrollTop() - window.innerHeight <400 ) {
        if(loadEvent!=null) {
            clearTimeout(loadEvent);
        }
        loadEvent = setTimeout("loadNextData()",500);
    }
});

function loadNextData() {

    var minID = $('#minID').text();

    if(minID==undefined || minID==null || minID=='undefined' || minID =='') {
        return;
    }
    if(parseInt(minID)<=1) {
        return;
    }
    if(lastLoadEvent>0) {
        var now = Date.parse(new Date());
        if(now - lastLoadEvent < 5*1000) {
            return;
        }
    }

    lastLoadEvent = Date.parse(new Date());
    get("http://api.topwow.top/rest/api2/news/next/"+minID,function(e){
        $('#minID').text(e.minID);

        for(var i=0;i<e.news.length;i++) {
            var el = e.news[i];
            var s = '<div class="grid-item"> \r\n';
            s += '<div class="thumbnail n-img' + el.thumbSize +'"> \r\n' ;
            if(el.media_type=='video') {
                s += '<div class="video-box" > ' ;
                s += '        <video width="100%" height="100%" tabindex="2" mediatype="video" preload="none" \r\n' ;
                s += '            src="' + el.thumb[1] + '" \r\n' ;
                s += '            poster="' + el.thumb[0] + '"> \r\n' ;
                s += '        </video> \r\n';
                s += '        <div class="video-img"></div> \r\n' ;
                s += '       <span style="display:none">' + el.part + '</span> \r\n' ;
                s += '    </div> \r\n' ;
            } else if(el.thumb!=null && el.thumb!=undefined){
                s += '<div>';
                for(var j=0;j<el.thumb.length;j++) {
                    s += '<a href="/info-' + el.nid + '.html" target="_blank"><img style="width:33.33%;height:75px" src="' + el.thumb[j] + '" alt=""></a> \r\n' ;
                }
                s += '</div>';
            }

            s += '<div class="caption"> \r\n' ;
            s += '<div class="n-img' + el.thumbSize +'"> \r\n' ;
            s += '    <a href="/info-' + el.nid +'.html" target="_blank">' + el.title + '</a> \r\n' ;
            s += '</div>  \r\n' ;
            s += '<p><div class="n_tip">' + el.source + '&nbsp;' + el.author + '</div></p> \r\n' ;
            s += '</div> \r\n' ;

            s += ' </div> \r\n' ;
            s += '</div>';
            /*$('#mainGrid').append(s);*/
            var $boxHtml = $(s);

            $('.grid').append($boxHtml).masonry('appended', $boxHtml);
        }
        initPage();
    },function(){
        
    });
}
