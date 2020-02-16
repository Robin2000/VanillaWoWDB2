<div style="margin-top:50px;width:100%;height:30px;text-align:center">
    <div style="margin:0 auto;width:160px;height:30px">
    扫码分享
    </div>
</div>
<div style="width:100%;height:380px;text-align:center">
    <div style="margin:0 auto;width:160px;height:160px" id="qrcode">
    </div>
</div>
<div style="clear:both"></div>
<script src="/cms/js/qrcode.min.js"></script>
<script>
{literal}
window.onload =function(){
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            width : 160,//设置宽高
            height : 160,
        });
        qrcode.makeCode(document.location.href);
    }

{/literal}
</script>