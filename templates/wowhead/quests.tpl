{include file='header.tpl'}

		<div id="main">
			<div id="main-precontents"></div>
			<div id="main-contents" class="main-contents">
				<script type="text/javascript">
					g_initPath({$page.path});
				</script>

<div class="shxlistbox">
        <h3>条件筛选:</h3>
		<div id="curSel"></div>
			<div class="filter-condition">
			<div class="bdfs">任务难度：</div>

				<div class="item-screen">
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty','n')" class="filter-a {if $difficulty eq 'n'}current{/if}" title="全部">全部</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',0)" class="filter-a {if $difficulty eq '0'}current{/if}" title="普通">普通</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',1)" class="filter-a {if $difficulty eq '1'}current{/if}" title="组队">组队</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',81)" class="filter-a {if $difficulty eq '81'}current{/if}" title="地下城">地下城</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',62)" class="filter-a  {if $difficulty eq '62'}current{/if}" title="团队">团队</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',41)" class="filter-a {if $difficulty eq '41'}current{/if}" title="PvP">PvP</a>
						</span>
									</div>
			</div>
				
			<div class="filter-condition">
				<div class="bdfs">阵营限制：</div>
				<div class="item-screen">
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('side','n')" class="filter-a {if $side eq 'n'}current{/if}" title="全部">全部</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('side',1)" class="filter-a {if $side eq '1'}current{/if}" title="联盟">
							<img src="templates/wowhead/images/alliance-icon.gif" title="联盟" alt="联盟">联盟</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('side',2)" class="filter-a {if $side eq '2'}current{/if}" title="部落">
							<img src="templates/wowhead/images/horde-icon.gif" title="部落" alt="部落">部落</a>
						</span>
						<!--span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('side',3)" class="filter-a" title="两者">
																	<img src="templates/wowhead/images/alliance-icon.gif" title="联盟" alt="联盟">
							<img src="templates/wowhead/images/horde-icon.gif" title="部落" alt="部落">两者</a>
						</span-->
									</div>
			</div>
				
			<div class="filter-condition">
				<div class="bdfs">奖励：</div>
				<div class="item-screen">
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('reward','n')" class="filter-a {if $reward eq 'n'}current{/if}" title="全部">全部</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',1)" class="filter-a {if $reward eq '1'}current{/if}" title="物品">物品</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',2)" class="filter-a {if $reward eq '2'}current{/if}" title="声望">声望</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',3)" class="filter-a {if $reward eq '3'}current{/if}" title="金钱">金钱</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',4)" class="filter-a {if $reward eq '4'}current{/if}" title="学会法术">学会法术</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',5)" class="filter-a {if $reward eq '5'}current{/if}" title="被施法术">被施法术</a>
						</span>
				</div>
			</div>
				
			<div class="filter-condition">
				<div class="bdfs">职业要求：</div>
				<div class="item-screen">
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job','n')" class="filter-a {if $job eq 'n'}current{/if}" title="全部">全部</a>
						</span>				
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',1)" class="filter-a {if $job eq '1'}current{/if}" title="战士" style="color:#c69b6d">战士</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',2)" class="filter-a {if $job eq '2'}current{/if}" title="圣骑士" style="color:#F48CBA">圣骑士</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',3)" class="filter-a {if $job eq '3'}current{/if}" title="猎人" style="color:#AAD372">猎人</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',4)" class="filter-a {if $job eq '4'}current{/if}" title="盗贼" style="color:#FFF468">盗贼</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',5)" class="filter-a {if $job eq '5'}current{/if}" title="牧师" style="color:#F0EBE0">牧师</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',7)" class="filter-a {if $job eq '7'}current{/if}" title="萨满" style="color:#2359FF">萨满</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',8)" class="filter-a {if $job eq '8'}current{/if}" title="法师" style="color:#68CCEF">法师</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',9)" class="filter-a {if $job eq '9'}current{/if}" title="术士" style="color:#9382C9">术士</a>
						</span>
						<span style="list-style: none;padding-right: 10px;">
							<a href="javascript:filterQuest('job',11)" class="filter-a {if $job eq '11'}current{/if}" title="德鲁伊" style="color:#FF7C0A">德鲁伊</a>
						</span>
				</div>
			</div>
				
			<div class="filter-condition">

			<div class="bdfs">最低等级要求：</div>
				<span style="display: inline-block;">
					<select onchange="filterQuest('minLvl',this.value)">
					{html_options options=$min_options selected=$sel_min_lvl}
					</select>
				</span>
			</div>
</div>
{literal}
<script>
var curArr = document.querySelectorAll(".current");
for(var i=0;i<curArr.length;i++) {
	if(curArr[i].innerText!='全部') {
		document.getElementById("curSel").innerHTML += "<span class='sellabel'>"+curArr[i].innerText+"</span>";
	}
}
</script>
{/literal}

				<div id="lv-quests" class="listview"></div>

<script type="text/javascript">
{if isset($allitems)}{include file='bricks/allitems_table.tpl' data=$allitems}{/if}
{include file='bricks/quest_table.tpl' id='quests' data=$quests}
</script>

				<div class="clear"></div>
			</div>
		</div>

{include file='footer.tpl'}
