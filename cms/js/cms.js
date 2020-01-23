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
        $("#loginBtn").click(function() {
            loginFrom();
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

        
        get("http://api.topwow.top/rest/api2/news/grap?img="+encodeURIComponent (url),function(e) {
            if(e.error==0) {
                var cnt = editor.html();
                cnt = cnt.split(urlOld).join(e.data);
                editor.html(cnt);
                $("#thumblist").append("<div style='float:left'><input name='thumb' type='checkbox' value='"+e.thumb+"'><img src='"+e.thumb+"' class='thumbnail'><div>");
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
        items: $('#items').val(),
        zones: $('#zones').val(),
        npcs: $('#npcs').val(),
        quests: $('#quests').val(),
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


function loginForm(){
    var param = {
        u: $('#uid').val(),
    };
    post("http://api.topwow.top/rest/api2/login/check",param,function(e){
            if(e.error==0) {
                loginFrom2(e.data);
            } else {
                alert(e.msg);
            }
        },function(){
            alert("网络请求失败");
        });
}
function loginFrom2(pubkey) {
    
    var passwd = CryptoJS.AES.encrypt($('#passwd').val(), pubkey, cfg);

    var param = {
        u: $('#uid').val(),
        p: passwd,
    };

    post("http://api.topwow.top/rest/api2/login/check",param,function(e){
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


function getAesString(data,key,iv){
    var key  = CryptoJS.enc.Utf8.parse(key); 
    var iv   = CryptoJS.enc.Utf8.parse(iv); 
    var encrypted =CryptoJS.AES.encrypt(data,key,{
        iv:iv, 
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7 
    });
    return encrypted.toString();  //返回的是base64格式的密文
}
function getDAesString(encrypted,key,iv){
    var key  = CryptoJS.enc.Utf8.parse(key);
    var iv   = CryptoJS.enc.Utf8.parse(iv);
    var decrypted =CryptoJS.AES.decrypt(encrypted,key,{
        iv:iv,
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
function getAES(){//加密
    var data =document.getElementById("data-ipt").value;//明文 
    var key  = 'abcdefghijklmn12';  //密钥
    var iv   = 'abcdefghijklmn12';
    var encrypted =getAesString(data,key,iv); //密文
    var encrypted1 =CryptoJS.enc.Utf8.parse(encrypted);
    document.getElementById("encrypted").innerHTML = encrypted; 
}
function getDAes(){//解密  
    var encrypted =document.getElementById("encrypted").innerHTML; //密文
    var key  = 'abcdefghijklmn12'; 
    var iv   = 'abcdefghijklmn12'; 
    var decryptedStr =getDAesString(encrypted,key,iv);  
    document.getElementById("decrypted").innerHTML = decryptedStr; 
}

var data = "hello,您好";

var key  = "sde@5f98H*^hsff%dfs$r344&df8543*er";  //密钥
var iv   = "sde@5f98H*^hsff%dfs$r344&df8543*er";
var encrypted =getAesString(data,key,iv); //密文
var encrypted1 =CryptoJS.enc.Utf8.parse(encrypted);

console.log(encrypted);
console.log(encrypted1);

var key  = 'sde@5f98H*^hsff%dfs$r344&df8543*er'; 
var iv   = 'sde@5f98H*^hsff%dfs$r344&df8543*er'; 
var decryptedStr =getDAesString(encrypted,key,iv);  
var decryptedStr1 =getDAesString(encrypted1,key,iv);  
console.log(decryptedStr);
console.log(decryptedStr1);