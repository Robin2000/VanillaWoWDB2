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
function post(url,paramJson,sucessFunc,errorFunc){
    $.ajax({
            type: 'post',
            url: url,
            data: paramJson,
            dataType: "json",
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
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function initPage(){
    
    var id=getQueryVariable("id");
    
    /*get("http://www.topwow.top/api2/rest/"+id,function(){

    },function(){

    });*/

    applyPage({
        
    });

}
var editor;
function applyPage(data) {
    KindEditor.ready(function(K) {
        editor = K.create('#body', {
            allowFileManager : true
        });

        $("#retriveBtn").click(function() {
            retriveImg();
        });
        $("#saveBtn").click(function() {
            saveForm();
        });
    });
}
function retriveImg() {
    $('#iframeID').contents().find('body');

    var cnt = editor.html();
    if($.trim(cnt)=='') {
        return;
    }

    var imgReg = /<img.*?(?:>|\/>)/gi;
    var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    var arr = cnt.match(imgReg);
    if(arr==null) {
        return;
    }
    if(arr.length==0){
        return;
    }
    for (var i = 0; i < arr.length; i++) {
       var src = arr[i].match(srcReg);
        if(src==null) {
            continue;
        }
        console.log(src[1]);
        var urlOld = src[1];
        var url = urlOld;
        if(urlOld.indexOf("/cms/js/attached/image")>=0) {
            continue;
        }
        if(urlOld.indexOf("https")==0) {
            url = "http"+urlOld.substring(5);
        }
        
        get("/cms/js/php/grap_json.php?img="+encodeURIComponent (url),function(e) {
            if(e.error==0) {
                var cnt = editor.html();
                cnt = cnt.split(urlOld).join(e.url);
                editor.html(cnt);
                $("#thumblist").append("<div style='float:left'><input name='thumb' type='checkbox' value='"+e.thumb+"'><img src='"+e.thumb+"' class='thumbnail'><div>");
                setTimeout(() => {
                    retriveImg();
                }, 100);
                
            } else {
                alert(e.message);
            }
        },function(){
            alert("网络请求失败");
        });
        return;
    }
}
function saveForm() {
    var thumbStr = '';
    $("input[name='thumb']").each(function(){
        if(thumbStr!='') {
            thumbStr += ',';
        }
        thumbStr += $(this).val();
     });
    var param = {
        title: $('#title').val(),
        author: $('#author').val(),
        source: $('#source').val(),
        channel: $('#channel').val(),
        templateType: $('#templateType').val(),
        body: editor.html(),
        tag: $('#tag').val(),
        thumb: thumbStr,
    };

    post("http://api.topwow.top/rest/api2/news/add",param,function(e){
        if(e.code==0) {
            alert("提交成功");
        } else {
            alert(e.msg);
        }
    },function(){
        alert("网络请求失败");
    });
}
$(function(){
    initPage();     
});
    
/*help

editor.html('<h3>Hello KindEditor</h3>');
editor.text('<h3>Hello KindEditor</h3>');
editor.insertHtml('<strong>插入HTML</strong>');
editor.appendHtml('<strong>添加HTML</strong>');
editor.html('');

alert(editor.html());
alert(editor.isEmpty());
alert(editor.text());
alert(editor.selectedHtml());

*/

/*简单模式
var editor;
			KindEditor.ready(function(K) {
				editor = K.create('textarea[name="content"]', {
					resizeType : 1,
					allowPreviewEmoticons : false,
					allowImageUpload : false,
					items : [
						'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
						'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
						'insertunorderedlist', '|', 'emoticons', 'image', 'link']
				});
			});
*/