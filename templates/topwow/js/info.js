var curPart = 0;

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
function getCookie(name) {           
    var arr = document.cookie.split(';');           
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        var arrTest = myTrim(arr2[0]);            
        if (arrTest == name) {   
            return arr2[1];
        }
    }
    return null;
}
var init=false;
function initPage() {
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  if(!init && getCookie('token')!=null) {
    var p0=('%22%3Dferh%20a%3C%3E%22thgir%3Ataolf%22%3Delyts%20vid%3C/smc/%3C%u589E%3Bpsbn%26%u65B0%3E%22sseccus-ntb%20ntb%22%3Dssalc%20%22nottub%22%3Delor%20%22knalb_%22%3Dtegrat%20%22lmth.dda/%3C%3Bpsbn%26%3Ea/%3Evid');
    var p1=('%22%3Dferh%20a%3C%3E%22thgir%3Ataolf%22%3Delyts%20vid%3C/smc/%3Ddi%3Flmth.dda');
    var p2=('%3C%u8F91%3Bpsbn%26%u7F16%3E%22yramirp-ntb%20ntb%22%3Dssalc%20%22nottub%22%3Delor%20%22knalb_%22%3Dtegrat%20%22/%3C%3Ea/%3Evid');
    var html1=unescape(p1).split("").reverse().join("").split("/").reverse().join("/")+nid+unescape(p2).split("").reverse().join("").split("/").reverse().join("/");
    var html2=unescape(p0).split("").reverse().join("").split("/").reverse().join("/");
    $(".author").before(html1);
    $(".author").before(html2);
    init=true;
  }

  var oldVideo = null;
  var oldImg = null;
  $(".video-img").click(function() {
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
              oldVideo.get(0).preload="none";
          }
          oldVideo = video;
      }catch(e){}
  
          video.get(0).preload="auto";
          video.get(0).play();
          video.attr('controls', 1);
  
          video.get(0).onended = function () {
              video.css("object-fit","scale-down");
              video.get(0).poster = "/media/loading.gif";
              var oldUrl = video.get(0).src;
              video.get(0).preload="auto";
              if(part>curPart) {
                  var newPart = curPart+1;
                  video.get(0).src=oldUrl.split('part'+curPart).join('part'+newPart);
                  video.get(0).play();
                  curPart++;
              } else {
                  var newPart = 0;
                  video.get(0).src=oldUrl.split('part'+curPart).join('part'+newPart);;
                  video.get(0).play();
                  curPart=0;
              }
          }
  });
}

$(function(){
    initPage();
});