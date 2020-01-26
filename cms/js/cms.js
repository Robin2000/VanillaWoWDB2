function get(url,sucessFunc,errorFunc){
    /*var uid= getCookie("uid");
    var token= getCookie("token");*/
    $.ajax({
            type: 'get',
            url: url,
            dataType: "json",
            ifModified: false,
            crossDomain: true,
            /*beforeSend: function(xhr) {
                xhr.setRequestHeader("uid:"+uid);
                xhr.setRequestHeader("token:'"+token+"'");
            },
            headers:{'uid':uid,'token':token},
            */       
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
    /*var uid= getCookie("uid");
    var token= getCookie("token");*/
    $.ajax({
            type: 'post',
            url: url,
            data: paramJson,
            dataType: "json",
            crossDomain: true,
            /*beforeSend: function(xhr) {
                xhr.setRequestHeader("uid:"+uid);
                xhr.setRequestHeader("token:'"+token+"'");
            },
            headers:{'uid':uid,'token':token},
            */
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
function isLogin() {
    var token = getCookie("token");
    if(token==null) {
        return false;
    }
    return true;
}
function initPage(){

    if(location.href.indexOf('/cms/login')==-1&&!isLogin()) {
       location.href="/cms/login.html";
    }
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
            allowFileManager : true,
            fileManagerJson : 'http://www.topwow.top/rest/api2/editor/filemanager',
            uploadJson : 'http://www.topwow.top/rest/api2/editor/upload',
            afterUpload : function(url,e){
                console.log(e.error==0);
                if(e.error==0) {
                    console.dir($("#thumblist"));
                    $("#thumblist").append("<div style='float:left'><input name='thumb' type='checkbox' value='"+e.thumb+"'><img src='"+e.thumb+"' class='thumbnail'><div>");
                    console.log("end");
                }

            }
        });

        $("#retriveBtn").click(function() {
            retriveImg();
        });
        $("#saveBtn").click(function() {
            saveForm();
        });
        $("#loginBtn").click(function() {
            loginNow();
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

        var url = src[1];
        if(url.indexOf("/cms/js/attached/image")>=0) {
            continue;
        }
        get("http://www.topwow.top/rest/api2/editor/grap?img="+preEncodingUrl(url),function(e) {
            if(e.code==0) {
                var cnt = editor.html();
                cnt = cnt.split(url).join(e.data.url);
                editor.html(cnt);
                $("#thumblist").append("<div style='float:left'><input name='thumb' type='checkbox' value='"+e.data.thumb+"'><img src='"+e.data.thumb+"' class='thumbnail'><div>");
                setTimeout(() => {
                    retriveImg();
                }, 100);
                
            } else {
                alert(e.msg);
            }
        },function(){
            alert("网络请求失败");
        });
        return;
    }
}
function preEncodingUrl(url) {
    var requestUrl = url.split('&amp;').join('&');
    return encodeURIComponent(requestUrl);
}
function saveForm() {
    var thumbStr = '';
    $("input[name='thumb']:checked").each(function(){
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
        items: $('#items').val(),
        zones: $('#zones').val(),
        npcs: $('#npcs').val(),
        quests: $('#quests').val(),
        thumb: thumbStr,
    };

    post("http://www.topwow.top/rest/api2/news/add",param,function(e){
        if(e.code==0) {
            alert("提交成功");
        } else {
            alert(e.msg);
        }
    },function(){
        alert("网络请求失败");
    });
}


function loginNow(){
    var param = {
        u: $('#uid').val(),
    };
    post("http://www.topwow.top/rest/api2/login/key",param,function(e){
            if(e.code==0) {
                loginNow2(e.data);
            } else {
                alert(e.msg);
            }
        },function(){
            alert("网络请求失败");
        });
}
function loginNow2(pubkey) {

    var passwd = $('#passwd').val();
    var mi=AES_CBC_encrypt(passwd,pubkey,"4567890000000123")
    var param = {
        u: $('#uid').val(),
        p: mi
    };
    post("http://www.topwow.top/rest/api2/login/check",param,function(e){
        if(e.code==0) {
            setCookie("token",e.data);
            setCookie("uid",$('#uid').val());
            location.href="/cms/add.html";
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
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  }
function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=" + "/"; 
    /*var date = new Date();
    var expires = 10;
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000)
    document.cookie = name + "=" + value + ";expires=" + date.toGMTString() + ";path=" + "/"; */
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
function AES_CBC_encrypt(message, key, iv) {
    // utf8字符串—>WordArray对象，WordArray是一个保存32位整数的数组，相当于转成了二进制
    let keyHex = CryptoJS.enc.Utf8.parse(key); //
    let ivHex = CryptoJS.enc.Utf8.parse(iv);
    let messageHex = CryptoJS.enc.Utf8.parse(message);
    let encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
        iv: ivHex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();// base64结果
    //return encrypted.ciphertext.toString();   // 二进制结果
}

