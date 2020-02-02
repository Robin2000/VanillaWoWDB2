function get(url,sucessFunc,errorFunc){
    $.ajax({
            type: 'GET',
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
    try{initSearch();}catch(e){}
    try{initPage();}catch(e){}
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
    get("http://www.topwow.top/rest/api3/news/next/"+minID,function(e){
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
function searchNow() {
    $('#search-suggest').hide();
    var searchText=$('#search_input').val();
    if(searchText==''||searchText.length<2) return false;
    location.href="http://www.topwow.top/?search="+searchText;
}
function searchKey(){
    $('#search-suggest').hide();
    var searchText=$('#search_input').val();
    if(searchText==''||searchText.length<2) return false;
    get('http://www.topwow.top/opensearch.php?search='+searchText,function(d){
        if(d.length<=0)return;
        $('#search-suggest').html(makeSuggest(d));
        $('#search-suggest').show();
    });
    return false;
}
function initSearch(){
    $('#search-suggest').hide();
    $('#search_input').click(function(e){
        var e = e || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else if(window.event){
            window.event.cancelBubble = true;//兼容IE
        }
    });
    $('#search_input').bind('keyup',function(e){ 
        var searchText=$('#search_input').val();
        if(searchText==''||searchText.length<2) return;
        get('http://www.topwow.top/opensearch.php?search='+searchText,function(d){
            if(d.length<=0)return;
            $('#search-suggest').html(makeSuggest(d));
            $('#search-suggest').show();
        });
    });
    $(document).bind('click',function(){
        $('#search-suggest').hide();
    });
    $(document).delegate('li','click',function(){
        var id = $(this).find("span").attr('id');
        var type = $(this).find("span").text();
        var url="";
        switch(type) {
            case "NPC":url="http://www.topwow.top/npc-"+id+".html";break;
            case "地物":url="http://www.topwow.top/object-"+id+".html";break;
            case "物品":url="http://www.topwow.top/item-"+id+".html";break;
            case "任务":url="http://www.topwow.top/quest-"+id+".html";break;
            default:
                return "";
        }
        location.href=url;
    });
}
function makeSuggest(d){
    var names=d[1];
    var infos=d[d.length-1];
    if(names.length==0) {
        return
    }
    var result="<ul>";
    for(var i=0;i<names.length;i++){
        result += "<li class=\""+getSuggestClass(infos[i])+"\" style=\""+getSuggestStyle(infos[i])+"\">"+getSuggestName(names[i])+"<span id='"+infos[i][1]+"'>"+getSuggestType(infos[i])+"</span></li>";
    }
    result+="</ul>";
    return result;
}

function getSuggestName(name){
    return name.split('(')[0];
}

function getSuggestType(info){
    if(info==undefined||info.length<2) {
        return;
    }
    var type = info[0];
    var entry = info[1];

    switch(type) {
        case 1:return "NPC";
        case 2:return "地物";        
        case 3:return "物品";
        case 5:return "任务";
        default:
            return "";
    }
}

function getSuggestClass(info) {
    if(info.length>=4&&info[0]==3) {
       return "wow-item-"+info[3];
    }
    if(info.length>=3&&info[0]==5) {
        return "wow-faction-"+info[2];
    }
    return "";
}
/*[3, 12820, "INV_Potion_92", 1], */
/*[1, 7455],*/
function getSuggestStyle(info){
    if(info==undefined||info.length<3){
        return 'text-align:left;padding-left:25px;';
    }
    return "text-align:left;padding-left:25px;background:url(images/icons/small/"+info[2]+".png) no-repeat left center;";
}