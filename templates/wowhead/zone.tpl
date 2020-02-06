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

{if $zone.position and isset($zone.showMap)}
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


{if isset($zone.pois)}
<div class="text">
<h1>概要图</h1>
	<div style="padding:5px;width:772px;min-height:515px;background:url(/images/maps/area/{$zone.name_loc0}.jpg) no-repeat">
		{foreach from=$zone.pois item=p name=p}
			<div class="{$p.color}" style="font-size:16px;line-height:20px;heght:20px;">
			<span style="padding-left:{$p.indentCount}0px"> {if $p.pos != 'TOP' and $p.pos != 'INDENT'}{$p.pos}){/if} </span>
			{if $p.entryType == 'NPC'}
				<a target="_blank" href="http://www.topwow.top/npc-{$p.entry}.html" class="{$p.color}">{$p.label}</a>
			{elseif $p.entryType == 'QUEST'}
				<a target="_blank" href="http://www.topwow.top/quest-{$p.entry}.html" class="{$p.color}" style="padding-left:18px;background:url(/images/icons/small/quest_start.gif) no-repeat left center">{$p.label}</a>
			{elseif $p.entryType == 'ITEM'}
				<a target="_blank" href="http://www.topwow.top/item-{$p.entry}.html" class="{$p.color}">{$p.label}</a>
			{elseif $p.entryType == 'OBJ'}
				<a target="_blank" href="http://www.topwow.top/object-{$p.entry}.html" class="{$p.color}">{$p.label}</a>				
			{else}
				{$p.label}
			{/if}
			</div>
		{/foreach}
	</div>
</div>
{/if}

				<h2>{#Related#}</h2>
			</div> <!--text-->




			<div id="tabs-generic"></div>
			<div id="listview-generic" class="listview"></div>


{if isset($zoneRelation)}
	{include file=$zoneRelation}
{/if}


<div class="grid" id="mainGrid">
	{foreach from=$zone.refnews item=curr name=j}
	<div class="grid-item">
		<div class="thumbnail n-img{$curr.thumbSize}">
		{if ($curr.media_type=='video')}
		<div class="video-box" >
			<video width="100%" height="100%" tabindex="2" mediatype="video" preload="none" src="{$curr.thumb[1]}" poster="{$curr.thumb[0]}" id="video{$curr.nid}">
			</video>
			<div class="video-img" onclick="playVideoNow({$curr.nid})" id="img{$curr.nid}"></div>
			<span style="visibility:hidden" id="part{$curr.nid}">{$curr.part}</span>
		</div>    
		{elseif isset($curr.thumb)}
		<div class="n-div{$curr.thumbSize}">
			{foreach from=$curr.thumb item=url}
			<a href="/info-{$curr.nid}.html" target="_blank"><img style="width:33.33%;height:75px" src="{$url}" alt=""></a>
			{/foreach}
		</div>
		{/if}
		
			<div class="caption">
				<div class="n-img{$curr.thumbSize}">
					<a href="/info-{$curr.nid}.html" target="_blank">{$curr.title}</a>
				</div> 
				<p><div class="n_tip">{$curr.source}&nbsp;{$curr.author} </div></p>
			</div>
		</div>
	</div>
	{/foreach}
</div><!--row-->     


<!---->

{if $map0Poi}
  <h2>东部王国地图</h2>
  <script>
  var map0Poi=[{foreach from=$map0Poi item=zone name=zone}[{$zone.x}, {$zone.y}, {$zone.type}, "{$zone.name}",{$zone.entry}],{/foreach}];
  </script>
  <iframe allowfullscreen="true" style="overflow:hidden" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="100%" height="500px" src="http://www.topwow.top/wowgis/map-0.html"></iframe>
{/if} 

{if $map1Poi}
  <h2>卡利姆多地图</h2>
  <script>
  var map1Poi=[{foreach from=$map1Poi item=zone name=zone}[{$zone.x}, {$zone.y}, {$zone.type}, "{$zone.name}",{$zone.entry}],{/foreach}];
  </script>
  <iframe allowfullscreen="true" style="overflow:hidden" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="100%" height="500px" src="http://www.topwow.top/wowgis/map-1.html"></iframe>
{/if} 
<!---->
{include file='bricks/contribute.tpl'}

			</div>
		</div>
	</div>

{include file='footer.tpl'}
