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
				<div class="bdfs">阵营限制：</div>
				<div class="item-screen">
						<span style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterNpcs('side','n')" class="filter-a {if $side eq 'n'}current{/if}" title="全部">
																								全部
							</a>
						</span>
						<span style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterNpcs('side',1)" class="filter-a {if $side eq '1'}current{/if}" title="联盟">
																	<img src="templates/wowhead/images/alliance-icon.gif" title="联盟" alt="联盟">
																								联盟
							</a>
						</span>
						<span style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterNpcs('side',2)" class="filter-a {if $side eq '2'}current{/if}" title="部落">
																								<img src="templates/wowhead/images/horde-icon.gif" title="部落" alt="部落">
																部落
							</a>
						</span>
						<!--span style="list-style: none;float: left;padding-right: 10px;">
							<a href="javascript:filterNpcs('side',3)" class="filter-a" title="两者">
																	<img src="templates/wowhead/images/alliance-icon.gif" title="联盟" alt="联盟">
																								<img src="templates/wowhead/images/horde-icon.gif" title="部落" alt="部落">
																两者
							</a>
						</span-->
				</div>
			</div>   
        <p style="line-height:5px"/>	   
		<div class="filter-condition">
            <div class="bdfs">武器训练：<br></div>
            <div class="item-screen">
                   <span >
                        <a href="javascript:filterNpcs('weaponType','n')" class="filter-a {if $weaponType eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',1)" class="filter-a {if $weaponType eq '1'}current{/if}" title="匕首">匕首</a>
                    </span>                    
                    <span >
                        <a href="javascript:filterNpcs('weaponType',2)" class="filter-a {if $weaponType eq '2'}current{/if}" title="单手剑">单手剑</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',3)" class="filter-a {if $weaponType eq '3'}current{/if}" title="双手剑">双手剑</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',4)" class="filter-a {if $weaponType eq '4'}current{/if}" title="单手斧">单手斧</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',5)" class="filter-a {if $weaponType eq '5'}current{/if}" title="双手斧">双手斧</a>
                    </span>                    
                    <span >
                        <a href="javascript:filterNpcs('weaponType',6)" class="filter-a {if $weaponType eq '6'}current{/if}" title="单手锤">单手锤</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',7)" class="filter-a {if $weaponType eq '7'}current{/if}" title="双手锤">双手锤</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',8)" class="filter-a {if $weaponType eq '8'}current{/if}" title="拳套">拳套</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',9)" class="filter-a {if $weaponType eq '9'}current{/if}" title="法杖">法杖</a>
                    </span>                    
                    <span >
                        <a href="javascript:filterNpcs('weaponType',10)" class="filter-a {if $weaponType eq '10'}current{/if}" title="枪">枪</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',11)" class="filter-a {if $weaponType eq '11'}current{/if}" title="弓箭">弓箭</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',12)" class="filter-a {if $weaponType eq '12'}current{/if}" title="弩">弩</a>
                    </span> 
                 <span >
                        <a href="javascript:filterNpcs('weaponType',13)" class="filter-a {if $weaponType eq '13'}current{/if}" title="长柄武器">长柄武器</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('weaponType',14)" class="filter-a {if $weaponType eq '14'}current{/if}" title="投掷武器">投掷武器</a>
                    </span>                                    																	
            </div>
        </div>                 
        <p style="line-height:5px"/>	   
		<div class="filter-condition">
            <div class="bdfs">训练类别：<br></div>
            <div class="item-screen">
                   <span >
                        <a href="javascript:filterNpcs('trainerType','n')" class="filter-a {if $trainerType eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerType',0)" class="filter-a {if $trainerType eq '0'}current{/if}" title="职业训练">职业训练</a>
                    </span>                    
                    <span >
                        <a href="javascript:filterNpcs('trainerType',1)" class="filter-a {if $trainerType eq '1'}current{/if}" title="骑术训练">骑术训练</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerType',2)" class="filter-a {if $trainerType eq '2'}current{/if}" title="生活技能">生活技能</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerType',3)" class="filter-a {if $trainerType eq '3'}current{/if}" title="宠物训练">宠物训练</a>
                    </span>
																	
            </div>
        </div>
		<p style="line-height:5px"/>			
        <div class="filter-condition">
            <div class="bdfs">职业训练：</div>
            <div class="item-screen">
                   <span >
                        <a href="javascript:filterNpcs('trainerClass','n')" class="filter-a {if $trainerClass eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',1)" class="filter-a {if $trainerClass eq '1'}current{/if}" title="战士" style="color:#CF9766">战士</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',2)" class="filter-a {if $trainerClass eq '2'}current{/if}" title="圣骑士" style="color:#F14C74">圣骑士</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',3)" class="filter-a {if $trainerClass eq '3'}current{/if}" title="猎人" style="color:#AAD372">猎人</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',4)" class="filter-a {if $trainerClass eq '4'}current{/if}" title="盗贼" style="color:#FFF468">盗贼</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',5)" class="filter-a {if $trainerClass eq '5'}current{/if}" title="牧师" style="color:#FDFCF8">牧师</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',7)" class="filter-a {if $trainerClass eq '7'}current{/if}" title="萨满" style="color:#2359FF">萨满</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',8)" class="filter-a {if $trainerClass eq '8'}current{/if}" title="法师" style="color:#68CCEF">法师</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',9)" class="filter-a {if $trainerClass eq '9'}current{/if}" title="术士" style="color:#977DC7">术士</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerClass',11)" class="filter-a {if $trainerClass eq '11'}current{/if}" title="德鲁伊" style="color:#FE7900">德鲁伊</a>
                    </span>
               </div>
        </div>
		<p style="line-height:5px"/>	
        <div class="filter-condition">
            <div class="bdfs">种族骑术训练：<br></div>
            <div class="item-screen">
                   <span >
                        <a href="javascript:filterNpcs('trainerRace','n')" class="filter-a {if $trainerRace eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerRace',1)" class="filter-a {if $trainerRace eq '1'}current{/if}" title="人类">人类</a>
                    </span>                    
                    <span >
                        <a href="javascript:filterNpcs('trainerRace',2)" class="filter-a {if $trainerRace eq '2'}current{/if}" title="兽人">兽人</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerRace',4)" class="filter-a {if $trainerRace eq '4'}current{/if}" title="暗夜精灵">暗夜精灵</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerRace',5)" class="filter-a {if $trainerRace eq '5'}current{/if}" title="亡灵">亡灵</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerRace',6)" class="filter-a {if $trainerRace eq '6'}current{/if}" title="牛头人">牛头人</a>
                    </span>
                   <span >
                        <a href="javascript:filterNpcs('trainerRace',7)" class="filter-a {if $trainerRace eq '7'}current{/if}" title="侏儒">侏儒</a>
                    </span>
                   <span >
                        <a href="javascript:filterNpcs('trainerRace',8)" class="filter-a {if $trainerRace eq '8'}current{/if}" title="巨魔">巨魔</a>
                    </span>
					<!--	
                   <span>
                        <a href="javascript:filterNpcs('trainerRace',9)" class="filter-a {if $trainerRace eq '9'}current{/if}" title="地精">地精</a>
                    </span>		
                   <span >
                        <a href="javascript:filterNpcs('trainerRace',10)" class="filter-a {if $trainerRace eq '10'}current{/if}" title="血精灵">血精灵</a>
                    </span>	
                   <span >
                        <a href="javascript:filterNpcs('trainerRace',11)" class="filter-a {if $trainerRace eq '11'}current{/if}" title="德莱尼">德莱尼</a>
                    </span>
					-->																			
            </div>
        </div>
		<p style="line-height:5px"/>	
        <div class="filter-condition">
            <div class="bdfs">前置专业训练：</div>
            <div class="item-screen">
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell','n')" class="filter-a {if $trainerSpell eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell',2575)" class="filter-a {if $trainerSpell eq '2575'}current{/if}" title="采矿">采矿</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell',9787)" class="filter-a {if $trainerSpell eq '9787'}current{/if}" title="武器锻造">武器锻造</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell',9788)" class="filter-a {if $trainerSpell eq '9788'}current{/if}" title="防具锻造">防具锻造</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell',10656)" class="filter-a {if $trainerSpell eq '10656'}current{/if}" title="龙鳞制皮">龙鳞制皮</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell',10658)" class="filter-a {if $trainerSpell eq '10658'}current{/if}" title="元素制皮">元素制皮</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell',10660)" class="filter-a {if $trainerSpell eq '10660'}current{/if}" title="部族制皮">部族制皮</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell',20219)" class="filter-a {if $trainerSpell eq '20219'}current{/if}" title="侏儒工程学">侏儒工程学</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('trainerSpell',20222)" class="filter-a {if $trainerSpell eq '20222'}current{/if}" title="地精工程师">地精工程师</a>
                    </span>					
            </div>
		</div>
			<p style="line-height:5px"/>	
			<div class="filter-condition">
            <div class="bdfs">其它类别：<br></div>
            <div class="item-screen">
                   <span >
                        <a href="javascript:filterNpcs('npcFlag','n')" class="filter-a {if $npcFlag eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('npcFlag',8)" class="filter-a {if $npcFlag eq '8'}current{/if}" title="飞行管理">飞行管理</a>
                    </span>                    
                    <span >
                        <a href="javascript:filterNpcs('npcFlag',128)" class="filter-a {if $npcFlag eq '128'}current{/if}" title="客栈">客栈</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('npcFlag',256)" class="filter-a {if $npcFlag eq '256'}current{/if}" title="银行">银行</a>
                    </span>
                    <span >
                        <a href="javascript:filterNpcs('npcFlag',2048)" class="filter-a {if $npcFlag eq '2048'}current{/if}" title="战场">战场</a>
                    </span>			
                    <span >
                        <a href="javascript:filterNpcs('npcFlag',4096)" class="filter-a {if $npcFlag eq '4096'}current{/if}" title="拍卖">拍卖</a>
                    </span>	
                    <span >
                        <a href="javascript:filterNpcs('npcFlag',8192)" class="filter-a {if $npcFlag eq '8192'}current{/if}" title="兽栏">兽栏</a>
                    </span>	
                    <span >
                        <a href="javascript:filterNpcs('npcFlag',16384)" class="filter-a {if $npcFlag eq '16384'}current{/if}" title="装备商">装备商</a>
                    </span>																																
            </div>
        </div>
		<p style="line-height:5px"/>	
			<div class="filter-condition">
				<div class="bdfs">等级：</div>
				<div class="item-screen">
					<span style="display: inline-block;">
						<select onchange="filterNpcs('minLvl',this.value)">
						{html_options options=$min_options selected=$sel_min_lvl}
						</select>
					</span>
				</div>	
			</div>
    </div>
				<div id="lv-npcs" class="listview"></div>

				<script type="text/javascript">
					{include file='bricks/creature_table.tpl' id='npcs' data=$npcs}
				</script>

				<div class="clear"></div>
			</div>
		</div>

{include file='footer.tpl'}
