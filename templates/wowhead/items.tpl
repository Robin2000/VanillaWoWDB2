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
            <div class="bdfs">限定职业：</div>
            <div class="item-screen">
                   <span >
                        <a href="javascript:filterItem('allowClass','n')" class="filter-a {if $allowClass eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',1)" class="filter-a {if $allowClass eq '1'}current{/if}" title="战士" style="color:#CF9766">战士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',2)" class="filter-a {if $allowClass eq '2'}current{/if}" title="圣骑士" style="color:#F14C74">圣骑士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',3)" class="filter-a {if $allowClass eq '3'}current{/if}" title="猎人" style="color:#AAD372">猎人</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',4)" class="filter-a {if $allowClass eq '4'}current{/if}" title="盗贼" style="color:#FFF468">盗贼</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',5)" class="filter-a {if $allowClass eq '5'}current{/if}" title="牧师" style="color:#FDFCF8">牧师</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',7)" class="filter-a {if $allowClass eq '7'}current{/if}" title="萨满" style="color:#2359FF">萨满</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',8)" class="filter-a {if $allowClass eq '8'}current{/if}" title="法师" style="color:#68CCEF">法师</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',9)" class="filter-a {if $allowClass eq '9'}current{/if}" title="术士" style="color:#977DC7">术士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItem('allowClass',11)" class="filter-a {if $allowClass eq '11'}current{/if}" title="德鲁伊" style="color:#FE7900">德鲁伊</a>
                    </span>
               </div>
        </div>
        <p style="line-height:5px"/>
        <div class="filter-condition">
            <div class="bdfs">限定种族：</div>
            <div class="item-screen">
                   <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace','n')" class="filter-a {if $allowRace eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace',1)" class="filter-a {if $allowRace eq '1'}current{/if}" title="人类">人类</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace',2)" class="filter-a {if $allowRace eq '2'}current{/if}" title="兽人">兽人</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace',3)" class="filter-a {if $allowRace eq '3'}current{/if}" title="矮人">矮人</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace',4)" class="filter-a {if $allowRace eq '4'}current{/if}" title="暗夜精灵">暗夜精灵</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace',5)" class="filter-a {if $allowRace eq '5'}current{/if}" title="亡灵">亡灵</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace',6)" class="filter-a {if $allowRace eq '6'}current{/if}" title="牛头人">牛头人</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace',7)" class="filter-a {if $allowRace eq '7'}current{/if}" title="侏儒">侏儒</a>
                    </span> 
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('allowRace',8)" class="filter-a {if $allowRace eq '8'}current{/if}" title="巨魔">巨魔</a>
                    </span>                     
           </div>
        </div>
        <p style="line-height:5px"/>
        <div class="filter-condition">
            <div class="bdfs">绑定方式：</div>
            <div class="item-screen">
                   <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond','n')" class="filter-a {if $bond eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',0)" class="filter-a {if $bond eq '0'}current{/if}" title="无绑定">无绑定</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',1)" class="filter-a {if $bond eq '1'}current{/if}" title="拾取绑定">拾取绑定</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',2)" class="filter-a {if $bond eq '2'}current{/if}" title="装备绑定">装备绑定</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',3)" class="filter-a {if $bond eq '3'}current{/if}" title="灵魂绑定">灵魂绑定</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',4)" class="filter-a {if $bond eq '4'}current{/if}" title="使用绑定">使用绑定</a>
                    </span>
                            </div>
        </div>
        <p style="line-height:5px"/>
        <div class="filter-condition">
            <div class="bdfs">物品品质：</div>
            <div class="item-screen">
                   <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality','n')" class="filter-a {if $quality eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <!--span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',0)" class="filter-a " title="粗糙" style="color:#9d9d9d">粗糙</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',1)" class="filter-a " title="普通" style="color:#fff">普通</a>
                    </span-->
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',2)" class="filter-a {if $quality eq '2'}current{/if}" title="优秀" style="color:#1eff00">优秀</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',3)" class="filter-a {if $quality eq '3'}current{/if}" title="精良" style="color:#0070dd">精良</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',4)" class="filter-a {if $quality eq '4'}current{/if}" title="史诗" style="color:#a335ee">史诗</a>
                    </span>
                                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',5)" class="filter-a {if $quality eq '5'}current{/if}" title="传说" style="color:#ff8000">传说</a>
                    </span>
                    <!--span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',6)" class="filter-a " title="神器" style="color:#e5cc80">神器</a>
                    </span-->
                            </div>
        </div>
        <p style="line-height:5px"/>
        <div class="filter-condition">
            <div class="bdfs">基础属性：</div>
            <div class="item-screen">
                   <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature','n')" class="filter-a {if $nature eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',1)" class="filter-a {if $nature eq '1'}current{/if}" title="生命">生命</a>
                    </span>                    
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',3)" class="filter-a {if $nature eq '3'}current{/if}" title="敏捷">敏捷</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',4)" class="filter-a {if $nature eq '4'}current{/if}" title="力量">力量</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',5)" class="filter-a {if $nature eq '5'}current{/if}" title="智力">智力</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',6)" class="filter-a {if $nature eq '6'}current{/if}" title="精神">精神</a>
                    </span>
                   <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',7)" class="filter-a {if $nature eq '7'}current{/if}" title="耐力">耐力</a>
                    </span>
                            </div>
        </div>
        <p style="line-height:5px"/>
        <div class="filter-condition">
            <div class="bdfs">包含抗性：</div>
            <div class="item-screen">
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance','n')" class="filter-a {if $resistance eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',0)" class="filter-a {if $resistance eq '0'}current{/if}" title="火焰">火焰</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',1)" class="filter-a {if $resistance eq '1'}current{/if}" title="自然">自然</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',2)" class="filter-a {if $resistance eq '2'}current{/if}" title="冰霜">冰霜</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',3)" class="filter-a {if $resistance eq '3'}current{/if}" title="暗影">暗影</a>
                    </span>
                    <span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',4)" class="filter-a {if $resistance eq '4'}current{/if}" title="奥术">奥术</a>
                    </span>
                    <!--span style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',5)" class="filter-a " title="神圣">神圣</a>
                    </span-->
            </div>
        </div>
        <p style="line-height:5px"/>
			<div class="filter-condition">

			<div class="bdfs">最低要求等级：</div>
				<span style="display: inline-block;">
					<select onchange="filterItem('minLvl',this.value)">
					{html_options options=$min_options selected=$sel_min_lvl}
					</select>
				</span>
			</div>
    </div>

			<div id="lv-items" class="listview"></div>

			<script type="text/javascript">
				{if $allitems}{include	file='bricks/allitems_table.tpl'		data=$allitems}{/if}
				{include		file='bricks/item_table.tpl' id='items'	data=$items}
			</script>

			<div class="clear"></div>
		</div>
	</div>

{include file='footer.tpl'}
