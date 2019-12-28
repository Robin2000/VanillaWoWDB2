{include file='header.tpl'}

		<div id="main">
			<div id="main-precontents"></div>
			<div id="main-contents" class="main-contents">
				<script type="text/javascript">
					g_initPath({$page.path});
				</script>

<div class="shxlistbox">
            <div class="shxlisttit">
                条件筛选
            </div>
			<div class="filter-condition">
			<span class="bdfs">任务难度：</span>

				<dl class="item-screen">
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty','n')" class="filter-a" title="全部">全部</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',0)" class="filter-a" title="普通">普通</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',1)" class="filter-a" title="组队">组队</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',81)" class="filter-a" title="地下城">地下城</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',62)" class="filter-a" title="团队">团队</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('difficulty',41)" class="filter-a" title="PvP">PvP</a>
						</dt>
									</dl>
			</div>
			<div class="filter-condition">
				<span class="bdfs">阵营限制：</span>
				<dl class="item-screen">
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('side','n')" class="filter-a" title="全部">
																								全部
							</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('side',1)" class="filter-a" title="联盟">
																	<img src="templates/wowhead/images/alliance-icon.gif" title="联盟" alt="联盟">
																								联盟
							</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('side',2)" class="filter-a" title="部落">
																								<img src="templates/wowhead/images/horde-icon.gif" title="部落" alt="部落">
																部落
							</a>
						</dt>
						<!--dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('side',3)" class="filter-a" title="两者">
																	<img src="templates/wowhead/images/alliance-icon.gif" title="联盟" alt="联盟">
																								<img src="templates/wowhead/images/horde-icon.gif" title="部落" alt="部落">
																两者
							</a>
						</dt-->
									</dl>
			</div>
			<div class="filter-condition">
				<span class="bdfs">奖励：</span>
				<dl class="item-screen">
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('reward','n')" class="filter-a" title="全部">全部</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',1)" class="filter-a" title="物品">物品</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',2)" class="filter-a" title="声望">声望</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',3)" class="filter-a" title="金钱">金钱</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',4)" class="filter-a" title="学会法术">学会法术</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('reward',5)" class="filter-a" title="被施法术">被施法术</a>
						</dt>
				</dl>
			</div>
			<div class="filter-condition">
				<span class="bdfs">职业要求：</span>
				<dl class="item-screen">
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job','n')" class="filter-a" title="全部">全部</a>
						</dt>				
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',1)" class="filter-a" title="战士" style="color:#c69b6d">战士</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',2)" class="filter-a" title="圣骑士" style="color:#F48CBA">圣骑士</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',3)" class="filter-a" title="猎人" style="color:#AAD372">猎人</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',4)" class="filter-a" title="盗贼" style="color:#FFF468">盗贼</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',5)" class="filter-a" title="牧师" style="color:#F0EBE0">牧师</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',7)" class="filter-a" title="萨满" style="color:#2359FF">萨满</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',8)" class="filter-a" title="法师" style="color:#68CCEF">法师</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',9)" class="filter-a" title="术士" style="color:#9382C9">术士</a>
						</dt>
						<dt style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterQuest('job',11)" class="filter-a" title="德鲁伊" style="color:#FF7C0A">德鲁伊</a>
						</dt>
				</dl>
			</div>

			<div class="filter-condition">

			<span class="bdfs">最低等级要求：</span>
				<span style="display: inline-block;">
					<select onchange="filterQuest('minLvl',this.value)">
					{html_options options=$min_options selected=$sel_min_lvl}
					</select>
				</span>
			</div>
</div>
				<div id="lv-quests" class="listview"></div>

<script type="text/javascript">
{if isset($allitems)}{include file='bricks/allitems_table.tpl' data=$allitems}{/if}
{include file='bricks/quest_table.tpl' id='quests' data=$quests}
</script>

				<div class="clear"></div>
			</div>
		</div>

{include file='footer.tpl'}
