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
		<span id="h43jv6jk346" class="menu-buttons"></span>
		<script type="text/javascript">
			Menu.addButtons(ge('h43jv6jk346'), mn_path);
		</script>

		
		<div class="pad"></div>

		<form method="get" action="." onsubmit="if(trim(this.elements[0].value) == '') return false">
			<input placeholder="{#searchHoder#}" type="text" name="search" size="38" id="kghjklvhj43v6" class="searbox"/>
		</form>
		
		<script type="text/javascript">var _ = ge('kghjklvhj43v6'); LiveSearch.attach(_); _.focus();</script>


		<div style="position: relative;border:0px ;width:485px;height:413px;padding-top:32px;margin:auto;">
		<img src="/images/wow.jpg" alt="世界地图" width="485" height="413" usemap="#Map" />
		<map name="Map" id="Map">
		<area shape="poly" coords="49,23,80,26,88,35,104,24,114,15,159,15,215,16,225,33,219,46,197,46,180,78,167,103,176,118,202,123,211,147,210,166,202,174,192,180,183,185,186,194,190,214,185,225,180,232,174,239,167,248,165,263,163,277,163,287,172,292,175,308,180,331,177,347,171,361,164,374,160,388,143,388,127,386,116,378,107,360,97,348,90,355,82,368,67,370,56,367,42,367,37,358,33,344,29,321,17,314,9,304,15,282,33,40" target="h" href="/wowgis/map-1" />
		<area shape="poly" coords="331,20,448,19,453,46,444,62,466,74,475,94,475,116,469,136,460,148,452,170,447,181,461,204,465,227,457,250,456,319,430,350,397,388,342,403,307,343,320,266,327,222,330,187,311,168,313,103,343,77,333,44" target="a" href="/wowgis/map-0" />
		</map>
				<div style="width:64px;height:64px;display:block;position: absolute;left:90;top:260px">
				<a target="h" href="/wowgis/map-1"><img width="64" height="64" src="/images/gif/h.gif"/></a>
				</div>
				<div style="width:64px;height:64px;display:block;position: absolute;right:50;top:260px">
				<a target="a" href="/wowgis/map-0"><img width="64" height="64" src="/images/gif/a.gif"/></a>
				</div>
		</div>

		
		<div id="toplinks" class="toplinks" style="position: fixed;top: 10px;right:50px">
			{if ($smarty.session.locale==0)}<a href="/">Home</a>{else}<a href="/">首页</a>{/if}
			|<a href="javascript:;" id="toptabs-menu-language">{#Language#} <small>&#9660;</small></a>
			<script type="text/javascript">g_initHeaderMenus()</script>
		</div>
	</div>
	
	</div>

	<noscript><div id="noscript-bg"></div><div id="noscript-text"><b>{#js_err#}</div></noscript>
	<script type="text/javascript">DomContentLoaded.now()</script>


</body>
</html>