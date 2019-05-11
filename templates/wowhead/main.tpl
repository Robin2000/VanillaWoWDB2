<html>
<head>
	{include file='head.tpl'}
	<style type="text/css">
{literal}
		.menu-buttons a { border-color: black }
{/literal}
	</style>
</head>
<body>
	<div id="layers"></div>
	<div id="home">
		<h1>{$title}</h1>
		<!--span id="h43jv6jk346" class="menu-buttons"></span-->
		<!--script type="text/javascript">
			Menu.addButtons(ge('h43jv6jk346'), mn_path);
		</script-->

		
		<div class="pad"></div>

		<!--form method="get" action="." onsubmit="if(trim(this.elements[0].value) == '') return false">
			<input placeholder="{#searchHoder#}" type="text" name="search" size="38" id="kghjklvhj43v6" class="searbox"/><input type="submit" value="{#search#}" class="searbtn"/>
		</form-->
		
		<!--script type="text/javascript">var _ = ge('kghjklvhj43v6'); LiveSearch.attach(_); _.focus();</script-->


		<div style="border:0px ;width:485px;height:413px;padding-top:32px;margin:auto;"><img src="/images/wow.jpg" alt="世界地图" width="485" height="413" usemap="#Map" />
		<map name="Map" id="Map">
		<area shape="poly" coords="49,23,80,26,88,35,104,24,114,15,159,15,215,16,225,33,219,46,197,46,180,78,167,103,176,118,202,123,211,147,210,166,202,174,192,180,183,185,186,194,190,214,185,225,180,232,174,239,167,248,165,263,163,277,163,287,172,292,175,308,180,331,177,347,171,361,164,374,160,388,143,388,127,386,116,378,107,360,97,348,90,355,82,368,67,370,56,367,42,367,37,358,33,344,29,321,17,314,9,304,15,282,33,40" target="k" href="/wowgis/map-1" />
		<area shape="poly" coords="331,20,448,19,453,46,444,62,466,74,475,94,475,116,469,136,460,148,452,170,447,181,461,204,465,227,457,250,456,319,430,350,397,388,342,403,307,343,320,266,327,222,330,187,311,168,313,103,343,77,333,44" target="a" href="/wowgis/map-0" />
		</map>		
		</div>

		
		<div id="toplinks" class="toplinks" style="position: fixed;top: 10px;right:50px">
			{if ($smarty.session.locale==0)}<a href="/">Home</a>{else}<a href="/">首页</a>{/if}
			|<a href="javascript:;" id="toptabs-menu-language">{#Language#} <small>&#9660;</small></a>
			<script type="text/javascript">g_initHeaderMenus()</script>
		</div>
	</div>
	
	<div id="footer" style="display: none;">
		本站为技术学习网 | <a href="https://github.com/Robin2000/lh-VanillaWoWDB2" style="text-decoration:none;color:#566666" target="_blank">github地址</a> | <a href="mailto:xudb@163.com" style="text-decoration:none;color:#566666" target="_blank">联系邮件</a>
		<div>
		<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1277448314'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s23.cnzz.com/z_stat.php%3Fid%3D1277448314%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));</script>
		</div>
	</div>

	<noscript><div id="noscript-bg"></div><div id="noscript-text"><b>{#js_err#}</div></noscript>
	<script type="text/javascript">DomContentLoaded.now()</script>
</body>
</html>