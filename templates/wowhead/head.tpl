	<title>{if $page.Title}{$page.Title|escape:"html"} - {/if}{$app_name}</title>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="Keywords" content="{if $page.Title}{$page.Title|escape:"html"}页,经典怀旧魔兽世界资料{else}经典怀旧魔兽世界地图{/if}">
	<meta name="description" content="{if $page.Title}经典怀旧魔兽世界资料{$page.Title|escape:"html"}页{else}经典怀旧魔兽世界1.12版本的地图,物品,装备,武器,NPC,技能,任务,地区,道具,声望,等详细数据.{/if}">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=3.0, minimum-scale=0.3, user-scalable=yes">

	<link rel="search" type="application/opensearchdescription+xml" title="VanillaWoWDB" href="http://www.topwow.top/opensearch.xml" />
	<link rel="SHORTCUT ICON" href="http://www.topwow.top/favicon.ico">
	{if (isset($npc) || isset($item) || isset($zone) || isset($quest))}
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="/templates/topwow/css/home11.css">
	{/if}

	<link rel="stylesheet" type="text/css" href="templates/wowhead/css/global12.css" />
	<link rel="stylesheet" type="text/css" href="templates/wowhead/css/locale_{$language}.css" />
	<!--[if IE]><link rel="stylesheet" type="text/css" href="templates/wowhead/css/global_ie.css?{$AOWOW_REVISION}" /><![endif]-->
	<!--[if lte IE 6]><link rel="stylesheet" type="text/css" href="templates/wowhead/css/global_ie6.css?{$AOWOW_REVISION}" /><![endif]-->
	<!--[if lte IE 7]><link rel="stylesheet" type="text/css" href="templates/wowhead/css/global_ie67.css?{$AOWOW_REVISION}" /><![endif]-->
{if $page.Book}
	<link rel="stylesheet" type="text/css" href="templates/wowhead/css/Book.css">
{/if}
{if $page.Mapper}
	<link href="templates/wowhead/css/Mapper.css" type="text/css" rel="stylesheet">
	<!--[if lte IE 6]><link href="templates/wowhead/css/Mapper_ie6.css?{$AOWOW_REVISION}" type="text/css" rel=stylesheet><![endif]-->
{/if}
{if $page.Talent}
		{if $page.typeid eq 0}
		<link rel="stylesheet" type="text/css" href="templates/wowhead/css/TalentCalc.css" />
		<link rel="stylesheet" type="text/css" href="templates/wowhead/css/talent2.css" />
		<!--[if lte IE 6]><link rel="stylesheet" type="text/css" href="templates/wowhead/css/TalentCalc_ie6.css?{$AOWOW_REVISION}" /><![endif]-->
		<!--[if lte IE 7]><link rel="stylesheet" type="text/css" href="templates/wowhead/css/TalentCalc_ie67.css?{$AOWOW_REVISION}" /><![endif]-->
		{else}
		<link rel="stylesheet" media="all" href="templates/wowhead/css/talent.1.css"/>
      	{/if}
{/if}

	<script src="templates/wowhead/js/locale_{$language}14.js" type="text/javascript"></script>

	<script src="templates/wowhead/js/global12.js" type="text/javascript"></script>
	<script src="templates/wowhead/js/Markup.js" type="text/javascript"></script>
	
{if $page.Mapper}
	<script src="templates/wowhead/js/Mapper6.js" type="text/javascript"></script>
	<style type="text/css">{literal}.zone-picker { margin-left: 4px }{/literal}</style>
{/if}
{if $page.Book}
	<script src="templates/wowhead/js/Book.js" type="text/javascript"></script>
{/if}

{if (isset($npc) || isset($item) || isset($zone) || isset($quest))}
   <script src="/templates/topwow/js/vendor/masonry.pkgd.min.js"></script>
   <script src="/templates/topwow/js/custom3.js"></script>
{/if}

{if $npc}
<script type="text/javascript" defer="true">
var entry = {$npc.entry};
</script>
{/if}

{if $page.Talent}

	<script>document.oncontextmenu = function(){ldelim}return false{rdelim}</script>
	{if $page.typeid eq 0}
	<script src="templates/wowhead/js/talent.js" data-turbolinks-track="true"></script>
	{else}
	<script src="templates/wowhead/js/jquery-1.9.1.min.js"></script>  
	<script src="templates/wowhead/js/talent.1.js"></script>
	{/if}

	{if $page.typeid eq 0}
	<script src="templates/wowhead/js/TalentCalc_{$language}.js" type="text/javascript"></script>
	<!--script src="templates/wowhead/js/TalentCalc.js?{$AOWOW_REVISION}" type="text/javascript"></script-->
	<script src="templates/wowhead/js/talent.js" type="text/javascript"></script>
	{/if}
{/if}
{if $page.maps}
	<script src="templates/wowhead/js/maps.js" type="text/javascript"></script>
{/if}

	<script type="text/javascript">
		var g_serverTime = new Date('{$smarty.now|date_format:"%Y/%m/%d %H:%M:%S"}');
		g_locale = {ldelim} id: {$locale}, name: '{$language}' {rdelim};
{if $user}g_user = {ldelim} id: {$user.id}, name: '{$user.name|escape:"quotes"}', roles: {$user.roles}, permissions: {$user.perms} {rdelim};{/if}
	</script>

