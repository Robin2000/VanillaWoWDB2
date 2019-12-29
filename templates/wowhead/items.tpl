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
            <span class="bdfs">绑定方式：</span>
            <dl class="item-screen">
                   <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond','n')" class="filter-a {if $bond eq 'n'}current{/if}" title="全部">全部</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',0)" class="filter-a {if $bond eq '0'}current{/if}" title="无绑定">无绑定</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',1)" class="filter-a {if $bond eq '1'}current{/if}" title="拾取绑定">拾取绑定</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',2)" class="filter-a {if $bond eq '2'}current{/if}" title="装备绑定">装备绑定</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',3)" class="filter-a {if $bond eq '3'}current{/if}" title="灵魂绑定">灵魂绑定</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('bond',4)" class="filter-a {if $bond eq '4'}current{/if}" title="使用绑定">使用绑定</a>
                    </dt>
                            </dl>
        </div>
        <div class="filter-condition">
            <span class="bdfs">物品品质：</span>
            <dl class="item-screen">
                   <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality','n')" class="filter-a {if $quality eq 'n'}current{/if}" title="全部">全部</a>
                    </dt>
                    <!--dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',0)" class="filter-a " title="粗糙" style="color:#9d9d9d">粗糙</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',1)" class="filter-a " title="普通" style="color:#fff">普通</a>
                    </dt-->
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',2)" class="filter-a {if $quality eq '2'}current{/if}" title="优秀" style="color:#1eff00">优秀</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',3)" class="filter-a {if $quality eq '3'}current{/if}" title="精良" style="color:#0070dd">精良</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',4)" class="filter-a {if $quality eq '4'}current{/if}" title="史诗" style="color:#a335ee">史诗</a>
                    </dt>
                                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',5)" class="filter-a {if $quality eq '5'}current{/if}" title="传说" style="color:#ff8000">传说</a>
                    </dt>
                    <!--dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('quality',6)" class="filter-a " title="神器" style="color:#e5cc80">神器</a>
                    </dt-->
                            </dl>
        </div>
        <div class="filter-condition">
            <span class="bdfs">基础属性：</span>
            <dl class="item-screen">
                   <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature','n')" class="filter-a {if $nature eq 'n'}current{/if}" title="全部">全部</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',1)" class="filter-a {if $nature eq '1'}current{/if}" title="生命">生命</a>
                    </dt>                    
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',3)" class="filter-a {if $nature eq '3'}current{/if}" title="敏捷">敏捷</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',4)" class="filter-a {if $nature eq '4'}current{/if}" title="力量">力量</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',5)" class="filter-a {if $nature eq '5'}current{/if}" title="智力">智力</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',6)" class="filter-a {if $nature eq '6'}current{/if}" title="精神">精神</a>
                    </dt>
                   <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('nature',7)" class="filter-a {if $nature eq '7'}current{/if}" title="耐力">耐力</a>
                    </dt>
                            </dl>
        </div>
        <div class="filter-condition">
            <span class="bdfs">包含抗性：</span>
            <dl class="item-screen">
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance','n')" class="filter-a {if $resistance eq 'n'}current{/if}" title="全部">全部</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',0)" class="filter-a {if $resistance eq '0'}current{/if}" title="火焰">火焰</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',1)" class="filter-a {if $resistance eq '1'}current{/if}" title="自然">自然</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',2)" class="filter-a {if $resistance eq '2'}current{/if}" title="冰霜">冰霜</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',3)" class="filter-a {if $resistance eq '3'}current{/if}" title="暗影">暗影</a>
                    </dt>
                    <dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',4)" class="filter-a {if $resistance eq '4'}current{/if}" title="奥术">奥术</a>
                    </dt>
                    <!--dt style="list-style: none;float: left;padding-right: 10px;">
                        <a href="javascript:filterItem('resistance',5)" class="filter-a " title="神圣">神圣</a>
                    </dt-->
            </dl>
        </div>

			<div class="filter-condition">

			<span class="bdfs">最低要求等级：</span>
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
