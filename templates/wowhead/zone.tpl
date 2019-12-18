{include file='header.tpl'}

	<div id="main">

		<div id="main-precontents"></div>
		<div id="main-contents" class="main-contents">

			<script type="text/javascript">
				var g_pageInfo = {ldelim}type: {$page.type}, typeId: {$page.typeid}, name: '{$zone.name|escape:"quotes"}'{rdelim};
				g_initPath({$page.path});
			</script>

			<div class="text">

				<h1>{$zone.name}</h1>

{if $zone.position}
				<div>
{strip}
				<span id="locations">
					{foreach from=$zone.position item=zoneitem name=zoneitem}
						<a href="javascript:;" onclick="
							myMapper.update(
								{ldelim}
								{if $zoneitem.atid}
									zone:{$zoneitem.atid}
									{if isset($zoneitem.points)}
										,
									{/if}
								{else}
									show:false
								{/if}
								{if isset($zoneitem.points)}
									coords:[
										{foreach from=$zoneitem.points item=point name=point}
												[{$point.x},{$point.y},
												{ldelim}
													label:'{if isset($point.name)}{$point.name|escape:"html"|escape:"html"}{else}${/if}<br>
													{if isset($point.r.h) or isset($point.r.m) or isset($point.r.s) or isset($point.events)}
													<div class=q0>
														<small>{#Respawn#}:
															{if isset($point.r.h)} {$point.r.h}{#hr#}{/if}
															{if isset($point.r.m)} {$point.r.m}{#min#}{/if}
															{if isset($point.r.s)} {$point.r.s}{#sec#}{/if}
															{if isset($point.events)}<br>{$point.events|escape:"quotes"}{/if}
														</small>
													</div>
													{/if}',
													{if isset($point.url)}url:'{$point.url|escape:"quotes"}',{/if}
													type:'{$point.type}'
												{rdelim}]
												{if !$smarty.foreach.point.last},{/if}
										{/foreach}
									]
								{/if}
								{rdelim});
							g_setSelectedLink(this, 'mapper'); return false" onmousedown="return false">
							{$zoneitem.name}</a>{if $zoneitem.population > 1}&nbsp;({$zoneitem.population}){/if}{if $smarty.foreach.zoneitem.last}{else}, {/if}
					{/foreach}
				</span></div>
{/strip}
				<div id="mapper-generic"></div>
				<div class="clear"></div>

				<script type="text/javascript">
					var myMapper = new Mapper({ldelim}parent: 'mapper-generic', zone: '{$zone.position[0].atid}'{rdelim});
					gE(ge('locations'), 'a')[0].onclick();
				</script>
{/if}
{if isset($zone.parentname) and isset($zone.parent)}
				<div class="pad"></div>
				<div>{#This_zone_is_part_of#} <a href="http://www.topwow.top/zone-{$zone.parent}.html">{$zone.parentname}</a>.</div>
{/if}


<!---->

{if $map0Poi}
  <h2>艾泽拉斯地图</h2>
  <script>
  var map0Poi=[{foreach from=$map0Poi item=zone name=zone}[{$zone.x}, {$zone.y}, {$zone.type}, "{$zone.name}",{$zone.entry}],{/foreach}];
  </script>
  <iframe style="overflow:hidden" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="100%" height="500px" src="http://www.topwow.top/wowgis/map-0.html"></iframe>
{/if} 

{if $map1Poi}
  <h2>卡利姆多地图</h2>
  <script>
  var map1Poi=[{foreach from=$map1Poi item=zone name=zone}[{$zone.x}, {$zone.y}, {$zone.type}, "{$zone.name}",{$zone.entry}],{/foreach}];
  </script>
  <iframe style="overflow:hidden" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="100%" height="500px" src="http://www.topwow.top/wowgis/map-1.html"></iframe>
{/if} 
<!---->

{if $zoneitem.atid==1584}
黑石深渊副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=71161970&cid=123298478&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
故事背景：黑石深渊，熔火之心，玛拉顿，厄运之锤
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=76039266&cid=130071655&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==1583}
黑石塔下层副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=71636440&cid=124134468&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==15830}
黑石塔上层副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=73102903&cid=125032892&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==2057}
通灵学院副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=73512743&cid=125745993&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==2017}
斯坦索姆副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=74061292&cid=126692819&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}

{if $zoneitem.atid==2557}
厄运之槌副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=74768381&cid=127896240&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
厄运之槌背景
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=73417758&cid=125589198&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==2100}
玛拉顿副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=70124322&cid=121491386&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
故事背景：黑石深渊，熔火之心，玛拉顿，厄运之锤
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=76039266&cid=130071655&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==1337}
奥达曼副本任务全清讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=68802066&cid=119230741&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==1417}
沉没的神庙副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=70652918&cid=122406500&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==1176}
祖尔法拉克副本全任务讲解
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=69431577&cid=120335866&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}

{if $zoneitem.atid==491}
魔兽世界怀旧服副本指南-剃刀沼泽
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=55160949&cid=96456975&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==722}
魔兽世界60年代 副本 剃刀高地 联盟
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=32134322&cid=56216977&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
魔兽世界60年代 副本 剃刀高地 部落
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=32135822&cid=56218691&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 

{if $zoneitem.atid==718}
魔兽世界60年代 贫瘠之地 副本哀嚎洞穴 全任务 上
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=17502836&cid=28584750&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
魔兽世界60年代 贫瘠之地 副本哀嚎洞穴 全任务 下
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=17527299&cid=28621888&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
哀嚎洞穴背景
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=68692816&cid=119050158&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==209}
魔兽世界60年代 副本 影牙城堡 全任务
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=22041336&cid=36430023&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
影牙城堡背景
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=71474546&cid=123846842&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>

{/if} 
{if $zoneitem.atid==2437}
魔兽世界60年代 副本怒焰裂谷
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=16218158&cid=26470256&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
怒焰裂谷背景
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=67908480&cid=117701311&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==717}
魔兽世界60年代 副本暴风城监狱全任务
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=19402596&cid=31641539&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==1581}
魔兽世界60年代 副本死亡矿井全任务
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=19610297&cid=31977492&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
死亡矿井背景
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=70615587&cid=122342445&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==796}
魔兽世界怀旧服副本指南-血色修道院
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=57461989&cid=100320494&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==721}
猎人第一视角诺莫瑞根副本流程及全任务攻略
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=67430770&cid=116918845&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
诺莫瑞根背景
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=77980710&cid=133408133&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>

{/if} 
{if $zoneitem.atid==719}
魔兽世界60年代 副本黑暗深渊全任务
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=18844492&cid=30733735&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
黑暗深渊背景
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=77231993&cid=132106287&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>

{/if} 
{if $zoneitem.atid==2159}
（联盟版）黑龙公主奥妮克希亚进门任务 龙火护符完整流程
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=64348990&cid=111727037&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==3428}
安其拉 系列副本通关展示
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=13747015&cid=22480760&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==3429}
魔兽世界怀旧服-盗贼刷安其拉废墟
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=62205779&cid=108124798&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==2717}
你不得不来的团队副本“熔火之心”任务
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=78331871&cid=134026129&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
故事背景：黑石深渊，熔火之心，玛拉顿，厄运之锤
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=76039266&cid=130071655&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if} 
{if $zoneitem.atid==2677}
怀旧服BWL黑翼之巢全BOSS平民攻略
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=77112743&cid=131889618&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==19}
怀旧服ZUG祖尔格拉布主要BOSS平民攻略
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=78662570&cid=134588561&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==3456}
魔兽世界60年代 副本 纳克萨玛斯 naxx 瘟疫区
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=44748803&cid=78338168&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==2597}
怀旧服奥山从入门到精通
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=77947319&cid=133354553&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}
{if $zoneitem.atid==3277}
怀旧服战歌峡谷从入门到精通
<iframe id=sbrxp src="//player.bilibili.com/player.html?aid=77415030&cid=132431489&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 430px; max-width: 100%"> </iframe>
{/if}

				<h2>{#Related#}</h2>
			</div>

			<div id="tabs-generic"></div>
			<div id="listview-generic" class="listview"></div>


{if isset($zoneRelation)}
	{include file=$zoneRelation}
{/if}

{include file='bricks/contribute.tpl'}

			</div>
		</div>
	</div>

{include file='footer.tpl'}