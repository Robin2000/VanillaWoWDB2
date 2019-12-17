<!DOCTYPE html>
<html lang="zh_CN">
<head>
{include file='head.tpl'}
</head>

<body>
<div id="layers"></div>
<!--[if lte IE 6]><table id="ie6layout"><tr><th class="ie6layout-th"></th><td id="ie6layout-td"><div id="ie6layout-div"></div><![endif]-->
<div id="layout">
	<div id="header">
		<div id="header-logo">
			<a href="."></a>
			<h1>{$page.Title|escape:"html"}</h1>
		</div>
	</div>

		<div id="wrapper" class="nosidebar">
		<div id="toptabs">
			<div id="toptabs-inner">
				<div id="toptabs-right">
				<a style="line-height:32px" href="http://www.topwow.top/"><img vertical-align="middle" src="http://www.topwow.top/images/home.png" alt="Home"></a>
				|<a href="javascript:;" id="toptabs-menu-language">{#Language#} <small>&#9660;</small></a>
					<script type="text/javascript">g_initHeaderMenus()</script>
				</div>
				<div id="ptewhjkst46"></div>
				<div class="clear"></div>
			</div>
		</div>
		
		<div id="topbar"><span id="kbl34h6b43" class="menu-buttons"></span><div class="clear"></div></div>
		

		<div id="topbar-right"><div>
		<form action=".">
		<a href="javascript:;"></a>
		<input id="oh2345v5ks" name="search" size="35">
		</form>
		</div>
</div><br>

<script type="text/javascript" defer="true">
var _tab={$page.tab};
{literal}
	try{g_initHeader(_tab);}catch(e){} 
	try{LiveSearch.attach(ge('oh2345v5ks'));}catch(r){}
{/literal}
</script>
