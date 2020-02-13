{include file='header.tpl'}

		<div id="main">

			<div id="main-precontents"></div>

			<div id="main-contents" class="main-contents">
				<script type="text/javascript">
					var g_pageInfo = {ldelim}type: {$page.type}, typeId: {$page.typeid}, name: '{$itemset.name|escape:"quotes"}'{rdelim};
					g_initPath({$page.path});
				</script>

				<script type="text/javascript">
				{if $allitems}
					{include file='bricks/allitems_table.tpl' data=$allitems}
				{/if}
				{if $allspells}
					{include file='bricks/allspells_table.tpl' data=$allspells}
				{/if}
				</script>

				<table class="infobox">
					<tr><th>{#Quick_Facts#}</th></tr>
					<tr><td><div class="infobox-spacer"></div>
						<ul>
							<li><div>{#Level#}: {$itemset.level_min}{if $itemset.level_min!=$itemset.level_max - {$itemset.level_max}{/if}</div></li>{if $user.roles == 2}<li><div><a href="?admin.editarticle=5.{$itemset.entry}">{#Write_article#}</a></div></li>{/if}{if $itemset.Aflags & 2}<li><div>{#Not_Available_to_Players#}</div></li>{/if}{if $itemset.Aflags & 8}<li><div>{#No_Longer_Available_to_Players#}</div></li>{/if} {if $itemset.Aflags & 16}<li><div>{#Added_in_patch_24#}</div></li>{/if} 
						</ul>
					</td></tr>
				</table>
				<script type="text/javascript">ss_appendSticky()</script>

				<div class="text">					
					<h1>{$itemset.name}</h1>
					{$itemset.article}
					This {$itemset.count}-piece set includes the following items:
					<table class="iconlist">
						{section name=i loop=$itemset.pieces}<tr><th align="right" id="iconlist-icon{$smarty.section.i.index+1}"></th><td><span class="q{$itemset.pieces[i].quality}"><a href="/item-{$itemset.pieces[i].entry}.html">{$itemset.pieces[i].name}</a></span></td></tr>{/section} 
					</table>
					<script type="text/javascript">
						{section name=i loop=$itemset.pieces}getElement('iconlist-icon{$smarty.section.i.index+1}').appendChild(g_items.createIcon({$itemset.pieces[i].entry}, 0, 0));{/section}
					</script>
					<h3>Set Bonuses</h3>

					Wearing more pieces of this set will convey bonuses to your character.
					<ul>
						{section name=i loop=$itemset.spells}<li><div>{$itemset.spells[i].bonus} pieces: <a href="/spell-{$itemset.spells[i].entry}.html">{$itemset.spells[i].wowtooltip}</a></div></li>{/section}
					</ul>

				<h2>{#Related#}</h2>

			</div>

			<div id="tabs-generic"></div>
			<div id="listview-generic" class="listview"></div>
<script type="text/javascript">
var tabsRelated = new Tabs({ldelim}parent: getElement('tabs-generic'){rdelim});
tabsRelated.flush();
</script>

			{include file='bricks/contribute.tpl'}

			</div>
		</div>
	</div>
{include file='footer.tpl'}
