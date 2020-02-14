<div class="text" style="margin-top:50px;margin-left:30%">
	<div class="bdsharebuttonbox">
	<a href="#" class="bds_more" data-cmd="more"></a>
	{if ($smarty.session.locale==0)}
		<a href="#" class="bds_twi" data-cmd="twi" title="分享到 Twitter"></a>
		<a href="#" class="bds_fbook" data-cmd="fbook" title="分享到 Facebook"></a>
	{/if}
	<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
	<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
	<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
	<a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a>
	<a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
	<a href="#" class="bds_kaixin001" data-cmd="kaixin001" title="分享到开心网"></a>
	</div>
</div>

<script>
window._bd_share_config={ldelim}
		common:{ldelim}
			bdPopTitle:document.title,
			bdSnsKey:{ldelim}{rdelim},
			bdText:"此处填写自定义的分享内容", 
			bdMini:"2",
			bdMiniList:false,
			bdPic:window.location.href, 
			bdStyle:"0",
			bdSize:"32"
			{rdelim},
		share:{ldelim}{rdelim}
{rdelim};
with(document)0[
                (getElementsByTagName('head')[0]||body).
                appendChild(createElement('script')).
                src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)
];
</script>
<div class="clear"></div>
