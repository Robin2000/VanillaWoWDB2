{include file='header.tpl'}

		<div id="main">

			<div id="main-precontents"></div>

			<div id="main-contents" class="main-contents">
				<script type="text/javascript">
					var g_pageInfo = {ldelim}type: {$page.type}, typeId: {$page.typeid}, name: '{$faction.name|escape:"quotes"}'{rdelim};
					g_initPath({$page.path});
				</script>
				<table class="infobox">
					<tr><th>{#Quick_Facts#}</th></tr>
					<tr><td>
						<div class="infobox-spacer"></div>
						<ul>
							{if isset($faction.group)}<li><div>{#Group#}: {$faction.group}</div></li>{/if}
							{if isset($faction.side)}<li><div>{#Side#}: {if $faction.side==1}<span class="alliance-icon">{#Alliance#}</span>{elseif $faction.side==2}<span class="horde-icon">{#Horde#}</span>{/if}</div></li>{/if}
						</ul>
					</td></tr>
				</table>
				{if isset($faction.screenshots)}
				<script type="text/javascript">
				var lv_screenshots=$faction.screenshots;
				ss_appendSticky();
				</script>
				{/if}
				<div class="text">
					<h1>{$faction.name}</h1>
					{$faction.description1}
					{if $faction.description1}<h1></h1>{/if}
					{$faction.description2}
					{if $smarty.session.locale==4}
					<div class="article-footer">更多详细内容参考&ndash; <a href="https://warcraft.huijiwiki.com/wiki/{$faction.name}" target="_blank" class="q0">阅读</a><br /></div>
					{else}
					<div class="article-footer">Article ported from <a href="http://www.wowwiki.com/" target="_blank" class="q0">WoWWiki</a>&ndash; <a href="http://www.wowwiki.com/{$faction.name}" target="_blank" class="q0">Read more</a><br />Licensed under <a href="http://www.gnu.org/copyleft/fdl.html" target="_blank" class="q0">GFDL</a></div>
					{/if}
				<h2>{#Related#}</h2>
				</div>
				<div id="tabs-generic"></div>
				<div id="listview-generic" class="listview"></div>
				<script type="text/javascript">
{if isset($allitems)}{include			file='bricks/allitems_table.tpl'		data=$allitems			}{/if}
{if isset($allachievements)}{include	file='bricks/allachievements_table.tpl'	data=$allachievements	}{/if}
var tabsRelated = new Tabs({ldelim}parent: ge('tabs-generic'){rdelim});
{if isset($faction.items)}{include			file='bricks/item_table.tpl'		id='items'			name='items'		tabsid='tabsRelated'	data=$faction.items			}{/if}
{if isset($faction.npcs)}{include			file='bricks/creature_table.tpl'	id='npcs'			name='members'		tabsid='tabsRelated'	data=$faction.npcs			}{/if}
{if isset($faction.quests)}{include			file='bricks/quest_table.tpl'		id='quests'			name='quests'		tabsid='tabsRelated'	data=$faction.quests		}{/if}
{if isset($faction.criteria_of)}{include	file='bricks/achievement_table.tpl'	id='criteria-of'	name='criteriaof'	tabsid='tabsRelated'	data=$faction.criteria_of	}{/if}
tabsRelated.flush();
				</script>

				{include file='bricks/contribute.tpl'}

				</div>
			</div>
		</div>
{include file='footer.tpl'}
