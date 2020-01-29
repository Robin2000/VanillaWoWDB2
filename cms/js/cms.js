function get(url,sucessFunc,errorFunc){
    /*var uid= getCookie("uid");
    var token= getCookie("token");*/
    $.ajax({
            type: 'GET',
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
            type: 'POST',
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
    applyPage();
}
function initData(data){
    $("#nid").val(data.nid);
    $("#templateType").val(data.media_type);
    $("#channel").val(data.cid);
    $("#source").val(data.source);
    $("#author").val(data.author);
    $("#title").val(data.title);
    editor.html(data.body);
    $("#tag").val(data.tag);
    $("#zones").val(data.zones);
    $("#items").val(data.items);
    $("#npcs").val(data.npcs);
    $("#quests").val(data.quests);
    $("#refer").val(data.refer);
    if(data.thumb==null||data.thumb==undefined) {
        return;
    }
    var thumbs=data.thumb.split(',');
    for(var i=0;i<thumbs.length;i++){
        if(thumbs[i]==''){
            continue;
        }
        $("#thumblist").append("<div style='float:left'><input name='thumb' type='checkbox' value='"+thumbs[i]+"' onclick='applyThumb()' checked><img src='"+thumbs[i]+"' class='thumbnail'><div>");
    }
    $("#thumbResult").val(data.thumb);
}
var editor;
function applyPage() {
    KindEditor.ready(function(K) {
        editor = K.create('#body', {
            allowFileManager : true,
            fileManagerJson : 'http://www.topwow.top/rest/api2/editor/filemanager',
            uploadJson : 'http://www.topwow.top/rest/api2/editor/upload',
            afterUpload : function(url,e){
                if(e.error==0) {
                    $("#thumblist").append("<div style='float:left'><input name='thumb' type='checkbox' onclick='applyThumb()' value='"+e.thumb+"'><img src='"+e.thumb+"' class='thumbnail'><div>");
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
        $("#autoFeedBtn").click(function() {
            autoFeed();
        });
        
        var id=getQueryVariable("id");
        if(id==false) {
            return;
        }
        get("http://www.topwow.top/rest/api2/news/info/"+id,function(e){
            initData(e.data);
        },function(){
            alert("加载失败");
        });
    });
}
function autoFeed() {
    var requestUrl = $('#refer').val().split('&amp;').join('&');
    var param = {
        refer: requestUrl
    };
    post("http://www.topwow.top/rest/api2/editor/refer",param,function(e) {
        if(e.code==0) {
            /*todo:解析到页面*/
            $('#templateType').val(e.data.mediaType);
            $('#author').val(e.data.author);
            $('#refer').val(e.data.refer);
            $('#source').val(e.data.source);
            $('#title').val(e.data.title);
            $('#thumbResult').val(e.data.poster+","+e.data.src);
        } else {
            alert(e.msg);
        }
    },function(){
        alert("网络请求失败");
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
        var requestUrl = url.split('&amp;').join('&');
        var param = {
            img: requestUrl,
            refer: $('#refer').val(),
        };

        
        post("http://www.topwow.top/rest/api2/editor/grap",param,function(e) {
            if(e.code==0) {
                var cnt = editor.html();
                cnt = cnt.split(url).join(e.data.url);
                editor.html(cnt);
                $("#thumblist").append("<div style='float:left'><input name='thumb' type='checkbox' value='"+e.data.thumb+"' onclick='applyThumb()'><img src='"+e.data.thumb+"' class='thumbnail'><div>");
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
    return encodeURIComponent(requestUrl);
}
function applyThumb(){
    var thumbStr = '';
    $("input[name='thumb']:checked").each(function(){
        if($(this).val()!='') {
            if(thumbStr!='') {
                thumbStr += ',';
            }
            thumbStr += $(this).val();
        }
     });

     $("#thumbResult").val(thumbStr);
    return thumbStr;
}
function saveForm() {

    var thumbStr = $("#thumbResult").val();

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
        refer: $('#refer').val(),
        thumb: thumbStr
    };

    var postUrl="http://www.topwow.top/rest/api2/news/add";
    var nid = $("#nid").val();
    if(nid!="") {
        param['nid']=nid;
        postUrl="http://www.topwow.top/rest/api2/news/update";
    }
    post(postUrl,param,function(e){
        if(e.code==0) {
            confirm("提交成功，点击确定进入详情页面。",function(){
                location.href="http://www.topwow.top/info-"+$("#nid").val()+".html";
            });

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


function alert(msg) { LyDialog.alert({msg: msg}); }
function info(msg) { LyDialog.info({msg: msg});}
function warn(msg) { LyDialog.warn({msg: msg}); }
function error(msg) { LyDialog.error({msg: msg});}
function confirm(msg,okFunction,cancleFunction) {
    LyDialog.confirm({msg: msg, onOk: function() {
        if(okFunction){
            okFunction();
        }
    }, onCancel: function(){
        if(cancleFunction){
            cancleFunction();
        }
    }})
}
function prompt1() {
    LyDialog.prompt({msg: "请输入sid：(多个sid用英文逗号分隔)", onOk: function(val) {
        console.log("prompt: onOk, ", val);
    }, onCancel: function(){
        console.log("prompt: onCancel");
    }})
}
function prompt2() {
    LyDialog.prompt({msg: "请输入意见反馈：", rows:2, onOk: function(val) {
        console.log("prompt: onOk, ", val);
    }, onCancel: function(){
        console.log("prompt: onCancel");
    }})
}	
var LyDialog = (function($) {
    var _html = function() {/*
        <div id="ly-dialog" class="modal modal-primary ly-dialog" tabindex="-1">
        <div class="modal-dialog" style="width:400px;">
        <div class="modal-content">
            <div class='modal-header'>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove"></span></button>
                <h4 class="modal-title font-14">{title}</h4>
            </div>
            <div class="modal-body">
                {msg}
            </div>
            <div class="modal-footer">
                <button id="lydialog-btncancel" type="button" class="btn btn-warning btn-xs" data-dismiss="modal">取消</button>
                <button id="lydialog-btnok" type="button" class="btn btn-primary btn-xs">确定</button>
            </div>
        </div>
        </div>
        </div>
    */};
    var _msgTypes = {
            info:"glyphicon glyphicon-info-sign", 
            warn:"glyphicon glyphicon-warning-sign",
            error:"glyphicon glyphicon-remove-sign"};
    var _format = function() {
        if(arguments.length == 0) return null;
        var str = arguments[0], a = arguments.length > 1 ? arguments[1] : null;
        for(var i=1;i<arguments.length;i++) {
            var re = new RegExp('\\{' + (i-1) + '\\}','gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    };		
    var _show = function(o) {
            var _opts = {type: 'alert', msg: '请设置内容!', icon: 'info', val: '', rows: 1};
            o = $.extend({}, _opts, o);
            _init(o);
            var _title = o.title, _body = o.msg, _openarg = {backdrop: 'static'}, $lydialog = $("#ly-dialog");
            switch(o.type) {
            case 'alert':
                if(_title === undefined) _title = '信息';
                _body = _format("<div class='msg msg-{0} clearfix'><span class='icon {1} fl' style='font-size:18px; margin-right:6px'></span>{2}</div>", 
                        o.icon, _msgTypes[o.icon], o.msg);
                $("#lydialog-btncancel").hide();
                break;
            case 'confirm':
                if(_title === undefined) _title = '提示框';
                $("#lydialog-btncancel").show();
                break;
            case 'prompt':
                console.log("afdf")
                if(_title === undefined) _title = '';
                _body = _format("<label class='c-999'>{0}</label>", o.msg);
                if(o.rows > 1) {
                    _body += _format("<textarea id='lydialog-input' class='form-control input-sm' value='{0}' οnfοcus='this.select();' rows={1} style='resize:none;'></textarea>", o.val, o.rows);
                } else {
                    _body += _format("<input id='lydialog-input' class='form-control input-sm' value='{0}' οnfοcus='this.select();'>", o.val);
                }
                $("#lydialog-btncancel").show();
                break;	
            }
            _title = _title || '';
            if(_title == '') {
                $lydialog.find(".modal-header").hide();
            }else{
                $lydialog.find(".modal-header").show(); $lydialog.find(".modal-title").html(_title);
            }
            $lydialog.find(".modal-body").html(_body);
            $lydialog.modal(_openarg);
        },
        _confirm = function(o) { _show($.extend(_types.confirm, o));},
        _prompt = function(o) {_show($.extend(_types.prompt, o));},
        _init = function(o) {
            if($("#ly-dialog").length == 0) {
                var _strhtml = _html.toString(), _reg = /\/\*([\s\S]*)\*\//gm, _rst = _reg.exec(_strhtml);
                $(document.body).append(_rst[1]);
            }
            $("#lydialog-btnok").off("click").on("click", function(e){
                $("#ly-dialog").modal('hide');
                if(o.onOk) o.onOk($("#lydialog-input").val());
            });
            $("#lydialog-btncancel").off("click").on("click", function(e){
                $("#ly-dialog").modal('hide');
                if(o.onCancel) o.onCancel();
            });
        };
        //
    return {
        alert: _show,
        info: _show,
        warn: function(o) {o = o || {}, o.title = '警告', o.icon = 'warn', _show(o);},
        error: function(o) {o = o || {}, o.title = '错误', o.icon = 'error', _show(o);},
        confirm: function(o) {o = o || {}, o.type = 'confirm', _show(o);},
        prompt: function(o) {o = o || {}, o.type = 'prompt', _show(o);},
    };
})(jQuery);
