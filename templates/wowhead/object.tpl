{include file='header.tpl'}

	<div id="main">

		<div id="main-precontents"></div>
		<div id="main-contents" class="main-contents">

			<script type="text/javascript">
				{include file='bricks/allcomments.tpl'}
				var g_pageInfo = {ldelim}type: {$page.type}, typeId: {$page.typeid}, name: '{$object.name|escape:"quotes"}'{rdelim};
				g_initPath({$page.path});
			</script>

{if isset($object.key) or isset($object.lockpicking) or isset($object.mining) or isset($object.herbalism) or isset($object.page_text)}
			<table class="infobox">
				<tr><th>{#Quick_Facts#}</th></tr>
				<tr><td><div class="infobox-spacer"></div>
				<ul>
					{if isset($object.key)}<li><div>{#Key#}: <a class="q{$object.key.quality}" href="/item-{$object.key.id}">[{$object.key.name}]</a></div></li>{/if}
					{if isset($object.lockpicking)}<li><div>{#Required_lockpicking_skill#} (<span class="tip" onmouseover="Tooltip.showAtCursor(event, '{#Required_lockpicking_skill#}', 0, 0, 'q')" onmousemove="Tooltip.cursorUpdate(event)" onmouseout="Tooltip.hide()">{$object.lockpicking}</span>)</div></li>{/if}
					{if isset($object.mining)}<li><div>{#Required_mining_skill#} (<span class="tip" onmouseover="Tooltip.showAtCursor(event, '{#Required_mining_skill#}', 0, 0, 'q')" onmousemove="Tooltip.cursorUpdate(event)" onmouseout="Tooltip.hide()">{$object.mining}</span>)</div></li>{/if}
					{if isset($object.herbalism)}<li><div>{#Required_herb_skill#} (<span class="tip" onmouseover="Tooltip.showAtCursor(event, '{#Required_herb_skill#}', 0, 0, 'q')" onmousemove="Tooltip.cursorUpdate(event)" onmouseout="Tooltip.hide()">{$object.herbalism}</span>)</div></li>{/if}
					{if isset($object.page_text)}
<li class="info-list">
						《<a href="/object-21581" title="第二次兽人战争的结局">第二次兽人战争的结局</a>》
						</li>
						<li class="info-list">
						《<a href="/object-21582" title="跨越黑暗之门">跨越黑暗之门</a>》
						</li>
						<li class="info-list">
						《<a href="/object-21583" title="卡多雷和永恒之井">卡多雷和永恒之井</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175724" title="萨格拉斯的背叛">萨格拉斯的背叛</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175725" title="上古之神和艾泽拉斯的秩序">上古之神和艾泽拉斯的秩序</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175726" title="巨龙军团">巨龙军团</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175727" title="上古战争">上古战争</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175729" title="海加尔山和伊利丹的礼物">海加尔山和伊利丹的礼物</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175730" title="世界之树和翡翠梦境">世界之树和翡翠梦境</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175731" title="高等精灵的流放">高等精灵的流放</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175732" title="哨兵和长期流放">哨兵和长期流放</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175733" title="奎尔萨拉斯的建立">奎尔萨拉斯的建立</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175734" title="阿拉索与巨魔战争">阿拉索与巨魔战争</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175735" title="提瑞斯法的守护者">提瑞斯法的守护者</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175736" title="铁炉堡-矮人的觉醒">铁炉堡-矮人的觉醒</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175738" title="艾格文和猎龙之战">艾格文和猎龙之战</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175739" title="三锤之战">三锤之战</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175740" title="最后的守护者">最后的守护者</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175741" title="基尔加丹和阴影契约">基尔加丹和阴影契约</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175742" title="部落的崛起">部落的崛起</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175745" title="黑暗之门和暴风城的陷落">黑暗之门和暴风城的陷落</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175746" title="洛丹伦联盟">洛丹伦联盟</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175747" title="远征德拉诺">远征德拉诺</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175748" title="巫妖王的诞生">巫妖王的诞生</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175749" title="冰冠冰川和寒冰王座">冰冠冰川和寒冰王座</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175750" title="格瑞姆巴托之战">格瑞姆巴托之战</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175751" title="兽人的消沉">兽人的消沉</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175752" title="新的部落">新的部落</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175753" title="蜘蛛之战">蜘蛛之战</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175754" title="克尔苏加德和天灾军团的建立">克尔苏加德和天灾军团的建立</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175756" title="洛丹伦的天灾">洛丹伦的天灾</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175757" title="太阳之井-奎尔萨拉斯的陷落">太阳之井-奎尔萨拉斯的陷落</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175758" title="阿克蒙德的归来和卡里姆多之旅">阿克蒙德的归来和卡里姆多之旅</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175759" title="背叛者的胜利">背叛者的胜利</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175760" title="血精灵的崛起">血精灵的崛起</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175761" title="瘟疫之地的内战">瘟疫之地的内战</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175762" title="巫妖王的胜利">巫妖王的胜利</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175763" title="古老的仇恨-卡利姆多的开拓">古老的仇恨-卡利姆多的开拓</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175854" title="两个帝国">两个帝国</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175855" title="帝国的陷落">帝国的陷落</a>》
						</li>
						<li class="info-list">
						《<a href="/object-175856" title="噬灵者的愤怒">噬灵者的愤怒</a>》
						</li>
						<li class="info-list">
						《<a href="/object-177204" title="大地母亲的悲伤">大地母亲的悲伤</a>》
						</li>
						<li class="info-list">
						《<a href="/object-177205" title="森林之王和最初的德鲁伊">森林之王和最初的德鲁伊</a>》
						</li>
						<li class="info-list">
						《<a href="/object-177208" title="白鹿和月神">白鹿和月神</a>》
						</li>
						<li class="info-list">
						《<a href="/object-177209" title="半人马的仇恨">半人马的仇恨</a>》
						</li>
					{/if}
				</ul>
				</td></tr>
			</table>
{/if}


			<div class="text">
				<h1>{$object.name}</h1>

{if $object.position}
				<div>{#This_Object_can_be_found_in#}
{strip}
				<span id="locations">
					{foreach from=$object.position item=zone name=zone}
						<a href="javascript:;" onclick="
							myMapper.update(
								{ldelim}
								{if $zone.atid}
									zone:{$zone.atid}
									{if $zone.points}
										,
									{/if}
								{else}
									show:false
								{/if}
								{if $zone.points}
									coords:[
										{foreach from=$zone.points item=point name=point}
												[{$point.x},{$point.y},
												{ldelim}
													label:'$<br>
													<div class=q0>
														<small>{#Respawn#}:
															{if isset($point.r.h)} {$point.r.h}{#hr#}{/if}
															{if isset($point.r.m)} {$point.r.m}{#min#}{/if}
															{if isset($point.r.s)} {$point.r.s}{#sec#}{/if}
														</small>
													</div>',type:'0'
												{rdelim}]
												{if !$smarty.foreach.point.last},{/if}
										{/foreach}
									]
								{/if}
								{rdelim});
							g_setSelectedLink(this, 'mapper'); return false" onmousedown="return false">
							{$zone.name}</a>{if $zone.population > 1}&nbsp;({$zone.population}){/if}{if $smarty.foreach.zone.last}.{else}, {/if}
					{/foreach}
				</span></div>
{/strip}
				<div id="mapper-generic"></div>


				<script type="text/javascript">
					var myMapper = new Mapper({ldelim}parent: 'mapper-generic', zone: '{$object.position[0].atid}'{rdelim});
					gE(ge('locations'), 'a')[0].onclick();
				</script>

{else}
				{#This_Object_cant_be_found#}
{/if}

{if isset($object.page_text)}
	<h3>
	{if $smarty.session.locale==4}
	内容
	{else}
	Content
	{/if}
	</h3>
	<div id="book-generic"></div>
	{strip}
		<script>
			new Book({ldelim} parent: 'book-generic', pages: [
			{foreach from=$object.page_text item=pagetext name=j}
				'{$pagetext|escape:"javascript"}'
				{if $smarty.foreach.j.last}{else},{/if}
			{/foreach}
			]{rdelim})
		</script>
	{/strip}
{/if}

				<div class="clear"></div>
				<h2>{#Related#}</h2>

			</div>

			<div id="tabs-generic"></div>
			<div id="listview-generic" class="listview"></div>
<script type="text/javascript">
{if isset($allitems)}{include			file='bricks/allitems_table.tpl'		data=$allitems			}{/if}
{if isset($allachievements)}{include	file='bricks/allachievements_table.tpl'	data=$allachievements	}{/if}
var tabsRelated = new Tabs({ldelim}parent: ge('tabs-generic'){rdelim});
{if isset($object.drop)}{include			file='bricks/item_table.tpl'		id='contains'		name='contains'		tabsid='tabsRelated'	data=$object.drop		}{/if}
{if isset($object.starts)}{include			file='bricks/quest_table.tpl'		id='starts'			name='starts'		tabsid='tabsRelated'	data=$object.starts		}{/if}
{if isset($object.ends)}{include			file='bricks/quest_table.tpl'		id='ends'			name='ends'			tabsid='tabsRelated'	data=$object.ends		}{/if}
{if isset($object.criteria_of)}{include		file='bricks/achievement_table.tpl'	id='criteria-of'	name='criteriaof'	tabsid='tabsRelated'	data=$object.criteria_of}{/if}
new Listview({ldelim}template: 'comment', id: 'comments', name: LANG.tab_comments, tabs: tabsRelated, parent: 'listview-generic', data: lv_comments{rdelim});
tabsRelated.flush();
</script>

{include file='bricks/contribute.tpl'}

			</div>
		</div>
	</div>

{include file='footer.tpl'}
