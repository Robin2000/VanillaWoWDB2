<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<html>
<head>
{include file='head.tpl'}
</head>

<body>
<h1 style="display:none">{if $page.Title}{$page.Title|escape:"html"} - {/if}{$app_name}</h1>
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
				{if ($smarty.session.locale==0)}<a href="/">Home</a>{else}<a href="/">首页</a>{/if}
				|<a href="javascript:;" id="toptabs-menu-language">{#Language#} <small>&#9660;</small></a>
					<script type="text/javascript">g_initHeaderMenus()</script>
				</div>
				<div id="ptewhjkst46"></div>
				<div class="clear"></div>
			</div>
		</div>
		<div id="topbar-right"><div><form action="."><a href="javascript:;"></a><input name="search" size="35" value="" id="oh2345v5ks" /></form></div></div>
		<div id="topbar"><span id="kbl34h6b43" class="menu-buttons"></span><div class="clear"></div></div>
		<script type="text/javascript">g_initHeader({$page.tab}); LiveSearch.attach(ge('oh2345v5ks'));</script>
