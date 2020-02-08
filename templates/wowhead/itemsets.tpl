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
            <div class="bdfs">限定职业：</div>
            <div class="item-screen">
                   <span >
                        <a href="javascript:filterItemset('allowClass','n')" class="filter-a {if $allowClass eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',0)" class="filter-a {if $allowClass eq '0'}current{/if}" title="不限职业" style="color:#CF9766">不限职业</a>
                    </span>					
                    <span >
                        <a href="javascript:filterItemset('allowClass',1)" class="filter-a {if $allowClass eq '1'}current{/if}" title="战士" style="color:#CF9766">限定战士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',2)" class="filter-a {if $allowClass eq '2'}current{/if}" title="圣骑士" style="color:#F14C74">限定圣骑士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',3)" class="filter-a {if $allowClass eq '3'}current{/if}" title="猎人" style="color:#AAD372">限定猎人</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',4)" class="filter-a {if $allowClass eq '4'}current{/if}" title="盗贼" style="color:#FFF468">限定盗贼</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',5)" class="filter-a {if $allowClass eq '5'}current{/if}" title="牧师" style="color:#FDFCF8">限定牧师</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',7)" class="filter-a {if $allowClass eq '7'}current{/if}" title="萨满" style="color:#2359FF">限定萨满</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',8)" class="filter-a {if $allowClass eq '8'}current{/if}" title="法师" style="color:#68CCEF">限定法师</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',9)" class="filter-a {if $allowClass eq '9'}current{/if}" title="术士" style="color:#977DC7">限定术士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('allowClass',11)" class="filter-a {if $allowClass eq '11'}current{/if}" title="德鲁伊" style="color:#FE7900">限定德鲁伊</a>
                    </span>
            </div>
			 		
            <div class="bdfs">套装系列：</div>

            <div class="item-screen">
                   <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname','n')" class="filter-a {if $tname eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',0)" class="filter-a {if $tname eq '0'}current{/if}" title="未知">未知</a>
                    </span>					
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',1)" class="filter-a {if $tname eq '1'}current{/if}" title="UBRS">黑石塔上T0</a>
                    </span>
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',2)" class="filter-a {if $tname eq '2'}current{/if}" title="MC">熔火之心T1</a>
                    </span>
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',3)" class="filter-a {if $tname eq '3'}current{/if}" title="BWL">黑翼之巢T2</a>
                    </span>
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',4)" class="filter-a {if $tname eq '4'}current{/if}" title="Nax">纳克萨玛斯T3</a>
                    </span>  					
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',5)" class="filter-a {if $tname eq '5'}current{/if}" title="PVP">PVP</a>
                    </span>
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',6)" class="filter-a {if $tname eq '6'}current{/if}" title="SM">血色修道院SM</a>
                    </span>						
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',7)" class="filter-a {if $tname eq '7'}current{/if}" title="ZG">祖尔格拉布ZG</a>
                    </span>						
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',8)" class="filter-a {if $tname eq '8'}current{/if}" title="VC">死亡矿井VC</a>
                    </span>						
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname',9)" class="filter-a {if $tname eq '9'}current{/if}" title="WC">哀嚎洞穴WC</a>
                    </span>					
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname','10')" class="filter-a {if $tname eq '10'}current{/if}" title="AQ20">安其拉废墟AQ20</a>
                    </span>
                    <span style="list-style: none;padding-right: 10px;">
                        <a href="javascript:filterItemset('tname','11')" class="filter-a {if $tname eq '11'}current{/if}" title="AQ40">安其拉神庙AQ40</a>
                    </span> 
           </div>
			 	
            <div class="bdfs">推荐职业：</div>
            <div class="item-screen">
                   <span >
                        <a href="javascript:filterItemset('tclass','n')" class="filter-a {if $tclass eq 'n'}current{/if}" title="全部">全部</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',1)" class="filter-a {if $tclass eq '1'}current{/if}" title="战士" style="color:#CF9766">推荐战士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',2)" class="filter-a {if $tclass eq '2'}current{/if}" title="圣骑士" style="color:#F14C74">推荐圣骑士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',3)" class="filter-a {if $tclass eq '3'}current{/if}" title="猎人" style="color:#AAD372">推荐猎人</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',4)" class="filter-a {if $tclass eq '4'}current{/if}" title="盗贼" style="color:#FFF468">推荐盗贼</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',5)" class="filter-a {if $tclass eq '5'}current{/if}" title="牧师" style="color:#FDFCF8">推荐牧师</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',7)" class="filter-a {if $tclass eq '7'}current{/if}" title="萨满" style="color:#2359FF">推荐萨满</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',8)" class="filter-a {if $tclass eq '8'}current{/if}" title="法师" style="color:#68CCEF">推荐法师</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',9)" class="filter-a {if $tclass eq '9'}current{/if}" title="术士" style="color:#977DC7">推荐术士</a>
                    </span>
                    <span >
                        <a href="javascript:filterItemset('tclass',11)" class="filter-a {if $tclass eq '11'}current{/if}" title="德鲁伊" style="color:#FE7900">推荐德鲁伊</a>
                    </span>
            </div>
		</div><!--filter-condition-->
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
				<div id="lv-itemsets" class="listview"></div>
				<script type="text/javascript">
					{include file='bricks/allitems_table.tpl'	data=$allitems}
					{include file='bricks/itemset_table.tpl'	data=$itemsets}
				</script>

				<div class="clear"></div>
			</div>
</div>

{include file='footer.tpl'}
