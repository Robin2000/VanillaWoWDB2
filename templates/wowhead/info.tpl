<!DOCTYPE html>
<html lang="zh_CN">
<head>
<title>{$info.title}</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes, maximum-scale=3.0, minimum-scale=0.3, user-scalable=yes">
   
   <meta name="keywords" content="{section name=i loop=$info.tag}{$info.tag[i]},{/section}{$info.columname}" />
   <meta name="description" content="{$info.summary}" />
   <meta name="author" content="xudb@163.com" />
	
  <link rel="apple-touch-icon" href="icon.png">
  <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="/templates/topwow/css/home13.css">

  <link rel="search" type="application/opensearchdescription+xml" title="VanillaWoWDB" href="/opensearch.xml" />
  <link rel="SHORTCUT ICON" href="/favicon.ico">
  
  <meta name="theme-color" content="#33cc99">
  <script src="/templates/topwow/js/vendor/modernizr-3.7.1.min.js"></script>
  <script src="/templates/wowhead/js/jquery-1.9.1.min.js"></script>  
  <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script src="/templates/topwow/js/vendor/masonry.pkgd.min.js"></script>
  <script src="/templates/topwow/js/home.js?v=20"></script>
  <script>
    var part = {$info.part};
    var nid = {$info.nid};
  </script>
  <script src="/templates/topwow/js/info.js?v=20"></script>
  <div id='wx_pic' style='margin:0 auto;display:none;'>
    <img src='http://www.topwow.top{$info.thumb[0]}' />
  </div>
</head>
<body style="overflow-x:hidden;width:100%;">

<div id="home">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">导航切换</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/"><img src="/templates/wowhead/images/logo.png"></a>
        </div>
   
        <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">

            <li class="dropdown">
            <a href="/itemsets.html" class="dropdown-toggle" data-toggle="dropdown">地图 <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                <li><h3>世界地图</h3></li>   
                <li><a target="_blank" href="/wowgis/map-0.html" class="east">东部王国</a></li>
                <li><a target="_blank" href="/wowgis/map-1.html" class="west">卡利姆多</a></li>
                <li><h3>飞行线路</h3></li>                
                <li><a target="_blank" href="/zone-30000.html" class="alliance">联盟-东部</a></li>
                <li><a target="_blank" href="/zone-30002.html" class="alliance">联盟-西部</a></li>
                <li><a target="_blank" href="/zone-30001.html" class="horde">部落-东部</a></li>
                <li><a target="_blank" href="/zone-30003.html" class="horde">部落-西部</a></li>
                <li><h3>野外BOSS</h3></li>
                <!-- Default -->
                <li><a href="/zone-30007.html" class="alliance">梦魇巨龙东部</a></li>
                <li><a href="/zone-30009.html" class="alliance">梦魇巨龙西部</a></li>
                <!-- End Default -->
                </ul>
            </li>


            
            <!--装备道具-->
            <li class="dropdown mega-menu-fullwidth">
                <a href="/items.html" class="dropdown-toggle" data-toggle="dropdown">
                    装备道具 <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <div class="mega-menu-content">
                            <div class="container">
                                <div class="row equal-height">

                                    <!--武器-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/items-2.html">武器</a></h3></li>

                                            <!-- Default -->
                                            <li><span class="sub-header">单手武器</span>
                                                <div class="dropdown-header">
                                                    <a href="/items-2.15.html">匕首</a>
                                                    <a href="/items-2.13.html">拳套</a>
                                                    <a href="/items-2.0.html">单手斧</a>
                                                    <a href="/items-2.4.html">单手锤</a>
                                                    <a href="/items-2.7.html">单手剑</a>
                                                </div>
                                            </li>
                                            <li><span class="sub-header">双手武器</span>
                                                <div class="dropdown-header">
                                                    <a href="/items-2.6.html">长柄武器</a>
                                                    <a href="/items-2.10.html">法杖</a>
                                                    <a href="/items-2.1.html">双手斧</a>
                                                    <a href="/items-2.5.html">双手锤</a>
                                                    <a href="/items-2.8.html">双手剑</a>
                                                </div>
                                            </li>
                                            <li><span class="sub-header">远程</span>
                                                <div class="dropdown-header">
                                                    <a href="/items-2.2.html">弓</a>
                                                    <a href="/items-2.18.html">弩</a>
                                                    <a href="/items-2.3.html">枪</a>
                                                    <a href="/items-2.16.html">投掷武器</a>
                                                    <a href="/items-2.19.html">魔杖</a>
                                                </div>
                                            </li>
                                            <li><span class="sub-header">其他武器</span>
                                                <div class="dropdown-header">
                                                    <a href="/items-2.20.html">鱼竿</a>
                                                    <a href="/items-2.14.html">杂物</a>
                                                </div>
                                            </li>

                                            <li class="big-screen-space"></li>
                                            
                                            <li><h3>消耗品</a></li>

                                            <li><a href="/items-6.html">弹药</a>
                                                <div class="dropdown-header">
                                                    <a href="/items-6.2.html">箭</a>
                                                    <a href="/items-6.3.html">子弹</a>
                                                </div>
                                            </li>
                                            <li class="big-screen-space"></li>
                                            
                                            <li><h3>贸易品</a></li>

                                            <li><a href="/items-7.html">商贸</a>
                                                <div class="dropdown-header">
                                                    <a href="/items-7.0.html">商品</a>
                                                    <a href="/items-7.3.html">装置</a>
                                                    <a href="/items-7.2.html">爆炸物</a>
                                                    <a href="/items-7.1.html">零件</a>
                                                    <a href="/items-7.6.html">制皮</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--武器-->

                                    
                                    <!--护甲-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/items-4.html">护甲</a></h3></li>

                                            <!-- Default -->
                                            <li><a href="/items-4.1.html">布甲</a>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.1.5.html">胸部</a>
                                                    <a href="/items-4.1.8.html">脚</a>
                                                    <a href="/items-4.1.10.html">手套</a>
                                                    <a href="/items-4.1.1.html">头部</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.1.7.html">腿部</a>
                                                    <a href="/items-4.1.3.html">肩部</a>
                                                    <a href="/items-4.1.6.html">腰部</a>
                                                    <a href="/items-4.1.9.html">手腕</a>
                                                </div>                                                
                                            </li>
                                            <li><a href="/items-4.2.html">皮甲</a>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.2.5.html">胸部</a>
                                                    <a href="/items-4.2.8.html">脚</a>
                                                    <a href="/items-4.2.10.html">手套</a>
                                                    <a href="/items-4.2.1.html">头部</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.2.7.html">腿部</a>
                                                    <a href="/items-4.2.3.html">肩部</a>
                                                    <a href="/items-4.2.6.html">腰部</a>
                                                    <a href="/items-4.2.9.html">手腕</a>
                                                </div>                                                
                                            </li>
                                            <li><a href="/items-4.3.html">锁甲</a>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.3.5.html">胸部</a>
                                                    <a href="/items-4.3.8.html">脚</a>
                                                    <a href="/items-4.3.10.html">手套</a>
                                                    <a href="/items-4.3.1.html">头部</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.3.7.html">腿部</a>
                                                    <a href="/items-4.3.3.html">肩部</a>
                                                    <a href="/items-4.3.6.html">腰部</a>
                                                    <a href="/items-4.3.9.html">手腕</a>
                                                </div>                                                
                                            </li>
                                            <li><a href="/items-4.4.html">板甲</a>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.4.5.html">胸部</a>
                                                    <a href="/items-4.4.8.html">脚</a>
                                                    <a href="/items-4.4.10.html">手套</a>
                                                    <a href="/items-4.4.1.html">头部</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.4.7.html">腿部</a>
                                                    <a href="/items-4.4.3.html">肩部</a>
                                                    <a href="/items-4.4.6.html">腰部</a>
                                                    <a href="/items-4.4.9.html">手腕</a>
                                                </div>                                                
                                            </li>
                                            <li><a href="/items-4.0.html">其它装备</a>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.6.html">盾牌</a>
                                                    <a href="/items-4.1.16.html">披风</a>
                                                    <a href="/items-4.0.2.html">颈部</a>
                                                    <a href="/items-4.0.4.html">衬衣</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.0.11.html">戒指</a>
                                                    <a href="/items-4.0.12.html">饰品</a>
                                                    <a href="/items-4.0.19.html">战袍</a>
                                                    <a href="/items-4.0.23.html">副手物品</a>
                                                </div>                                                
                                            </li>
                                            <li><span class="sub-header">圣物</span>
                                                <div class="dropdown-header">
                                                    <a href="/items-4.8.html">神像</a>
                                                    <a href="/items-4.7.html">圣契</a>
                                                    <a href="/items-4.9.html">图腾</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->

                                        </ul>
                                    </div><!--护甲-->

                                    <!--容器和配合-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/items-1.html">容器</a></h3></li>

                                            <!-- Default -->
                                            <li><span class="sub-header">包</span>
                                                <div class="dropdown-header">
                                                    <a href="/items-1.0.html">背包</a>
                                                    <a href="/items-1.3.html">附魔材料袋</a>
                                                    <a href="/items-1.2.html">草药袋</a>
                                                    <a href="/items-1.1.html">灵魂袋</a>
                                                </div>
                                                <!--div class="dropdown-header">
                                                    <a href="/items-1.5.html">宝石袋</a>
                                                    <a href="/items-1.8.html">铭文包</a>
                                                    <a href="/items-1.7.html">制皮材料包</a>
                                                    <a href="/items-1.6.html">矿石袋</a>
                                                </div-->
                                            </li>
                                            <li><a href="/items-11.html">射击袋</a>
                                                <div class="dropdown-header">
                                                    <a href="/items-11.3.html">弹药袋</a>
                                                    <a href="/items-11.2.html">箭袋</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->

                                            <li class="big-screen-space"></li>
                                            
                                            <li><h3><a href="/items-9.html">配方</a></h3></li>

                                            <!-- Default -->
                                            <li><span class="sub-header">专业技能</span>
                                                <div class="dropdown-header">
                                                    <a href="/items-9.0.html">职业典籍</a>
                                                    <a href="/items-9.6.html">炼金术</a>
                                                    <a href="/items-9.4.html">锻造</a>
                                                    <a href="/items-9.8.html">附魔</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/items-9.3.html">工程学</a>
                                                    <a href="/items-9.1.html">制皮</a>
                                                    <a href="/items-9.2.html">裁缝</a>
                                                </div>                                                
                                            </li>
                                            <li><span class="sub-header">辅助技能</span>
                                                <div class="dropdown-header">
                                                    <a href="/items-9.7.html">急救</a>
                                                    <a href="/items-9.9.html">钓鱼</a>
                                                    <a href="/items-9.5.html">烹饪</a>
                                                    <!--a href="/items-9.10.html">珠宝加工</a-->
                                                </div>
                                            </li>
                                            <!-- End Default -->

                                            <li class="big-screen-space"></li>
                                            
                                            <li><h3><a href="/items-0.html">消耗品</a></h3></li>

                                            <!-- Default -->
                                            <li><span class="sub-header"></span>
                                                <div class="dropdown-header">
                                                    <a href="/items-0.7.html">绷带</a>
                                                    <a href="/items-0.0.html">消耗品</a>
                                                    <a href="/items-0.2.html">药剂</a>
                                                    <a href="/items-0.3.html">合剂</a>
                                                    <a href="/items-0.5.html">食物饮料</a>
                                                </div>
                                            </li>
                                            <li><span class="sub-header"></span>
                                                <div class="dropdown-header">
                                                    <a href="/items-0.6.html">物品强化（永久）</a>
                                                    <a href="/items-0.1.html">药水</a>
                                                    <a href="/items-0.4.html">卷轴</a>
                                                    <a href="/items-0.8.html">其他</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->

                                        </ul>
                                    </div><!--容器和配方-->

                                    <!--商品和其他-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3>其他物品</h3></li>

                                            <!-- Default -->
                                            <li><a href="/items-12.html">任务物品</a></li>
                                            <li><a href="/items-13.html">钥匙</a></li>
                                            <li><a href="/items-15.html">废旧物品</a></li>
                                            <!-- End Default -->                                            

                                            <li class="big-screen-space"></li>
                                            
                                            <li><h3><a href="/objects.html">地物道具</a></h3></li>

                                            <!-- Default -->
                                            <li><span class="sub-header">资源</span>
                                                <div class="dropdown-header">
                                                    <a href="/objects-3.html">容器</a>
                                                    <a href="/objects--3.html">药物</a>
                                                    <a href="/objects--4.html">矿脉</a>
                                                    <a href="/objects--5.html">宝箱</a>
                                                    <a href="/objects-25.html">钓鱼</a>
                                                </div>
                                            </li>
                                            <li><span class="sub-header">故事</span>
                                                <div class="dropdown-header">
                                                    <a href="/objects-9.html">书籍</a>
                                                    <a href="/objects-2.html">任务开始</a>
                                                    <a href="/objects--2.html">结束任务</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--商品和其他-->
                                    
                                </div>
                            </div>    
                        </div>    
                    </li>
                </ul>
            </li><!--装备道具-->


            <li class="dropdown">
            <a href="/itemsets.html" class="dropdown-toggle" data-toggle="dropdown">套装 <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="/itemsets.html">全部</a></li>
                    <li><a href="/itemsets-1.html" style="color:#CF9766">战士（板甲）</a></li>
                    <li><a href="/itemsets-2.html" style="color:#F14C74">圣骑士（板甲）</a></li>
                    <li><a href="/itemsets-3.html" style="color:#AAD372">猎人（锁甲）</a></li>
                    <li><a href="/itemsets-4.html" style="color:#FFF468">潜行者（皮甲）</a></li>
                    <li><a href="/itemsets-5.html" style="color:#c0c0c0">牧师（布甲）</a></li>
                    <li><a href="/itemsets-11.html" style="color:#FE7900">德鲁伊（皮甲）</a></li>
                    <li><a href="/itemsets-7.html" style="color:#2359FF">萨满（锁甲）</a></li>
                    <li><a href="/itemsets-8.html" style="color:#68CCEF">法师（布甲）</a></li>
                    <li><a href="/itemsets-9.html" style="color:#977DC7">术士（布甲）</a></li>
                </ul>
            </li>

            <!--NPC-->
            <li class="dropdown mega-menu-fullwidth">
                <a href="/npcs.html" class="dropdown-toggle" data-toggle="dropdown">
                    NPC <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <div class="mega-menu-content">
                            <div class="container">
                                <div class="row equal-height">

                                      <!--职业训练师-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3>阵营</h3>
                                                <div class="dropdown-header">
                                                 <a href="/npcs.html">全部npc</a>
                                                 <a href="/npcs-n.1.n.n.n.html">联盟</a>
                                                 <a href="/npcs-n.2.n.n.n.html">部落</a>                                              
                                                </div>
                                            </li>
                                            <li class="big-screen-space"></li>
                                            <li><h3>大类</a>
                                            <!-- Default -->
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.n.n.n.8.html">飞行大师</a>
                                                <a href="/npcs-n.n.n.n.n.n.n.128.html">客栈老板</a>
                                                <a href="/npcs-n.n.n.n.n.n.n.256.html">银行</a>
                                                <a href="/npcs-n.n.n.n.n.n.n.2048.html">战场</a>
                                            </div>
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.n.n.n.4096.html">拍卖</a>
                                                <a href="/npcs-n.n.n.n.n.n.n.8192.html">兽栏</a>
                                                <a href="/npcs-n.n.n.n.n.n.n.16384.html">装备商</a>
                                            </div>
                                            </li>       
                                            <li class="big-screen-space"></li>
                                            <li><h3>训练大类</a>
                                            <!-- Default -->
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.0.n.n.n.n.html">职业训练</a>
                                                <a href="/npcs-n.n.n.1.n.n.n.n.html">骑术训练</a>
                                                <a href="/npcs-n.n.n.2.n.n.n.n.html">生活技能</a>
                                            </div>
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.3.n.n.n.n.html">宠物训练</a>
                                            </div>
                                            </li>                                                                                                                                                                                                                                                                                                          
                                            <!-- End Default -->

                                        </ul>
                                    </div>

                                      <!--前置专业训练师-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">

                                            <li><h3>职业训练师</a>
                                            <!-- Default -->
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.1.html" style="color:#CF9766">战士</a>
                                                <a href="/npcs-n.n.n.n.2.html" style="color:#F14C74">圣骑士</a>
                                                <a href="/npcs-n.n.n.n.3.html" style="color:#AAD372">猎人</a>
                                                <a href="/npcs-n.n.n.n.4.html" style="color:#FFF468">潜行者</a>
                                            </div>
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.5.html" style="color:#c0c0c0;">牧师</a>
                                                <a href="/npcs-n.n.n.n.7.html" style="color:#2359FF">萨满</a>
                                                <a href="/npcs-n.n.n.n.8.html" style="color:#68CCEF">法师</a>
                                                <a href="/npcs-n.n.n.n.9.html" style="color:#977DC7">术士</a>
                                            </div>
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.11.html" style="color:#FE7900">德鲁伊</a>
                                            </div>
                                            </li>   
                                            <li class="big-screen-space"></li>
                                            <li><h3>前置专业训练师</a>
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.n.n.2575.html">采矿</a>
                                                <a href="/npcs-n.n.n.n.n.n.9787.html">武器锻造</a>
                                                <a href="/npcs-n.n.n.n.n.n.9788.html">防具锻造</a>
                                                <a href="/npcs-n.n.n.n.n.n.10656.html">龙鳞制皮</a>
                                            </div>
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.n.n.10658.html">元素制皮</a>
                                                <a href="/npcs-n.n.n.n.n.n.10660.html">部族制皮</a>
                                                <a href="/npcs-n.n.n.n.n.n.20219.html">侏儒工程师</a>
                                            </div>
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.n.n.20222.html">地精工程师</a>
                                            </div>
                                            </li>                                                                                                                                                                                                                                                                                                       
                                            <!-- End Default -->

                                        </ul>
                                    </div>   

                                    
                                      <!--分类-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            
                                            <li><h3>种族骑术训练师</h3>
                                            <div class="dropdown-header">
                                                <a href="/npcs-n.n.n.n.n.1.html" style="color:#7B989E">人类</a>
                                                <a href="/npcs-n.n.n.n.n.2.html" style="color:#6C9839">兽人</a>
                                                <a href="/npcs-n.n.n.n.n.3.html" style="color:#FB8C5E">矮人</a>
                                                <a href="/npcs-n.n.n.n.n.4.html" style="color:#4847A4">暗夜精灵</a>
                                            </div>
                                            <div class="dropdown-header">    
                                                <a href="/npcs-n.n.n.n.n.5.html" style="color:#2B3A28">亡灵</a>
                                                <a href="/npcs-n.n.n.n.n.6.html" style="color:#E47C47">牛头人</a>
                                                <a href="/npcs-n.n.n.n.n.7.html" style="color:#D24500">侏儒</a>
                                                <a href="/npcs-n.n.n.n.n.8.html" style="color:#6093A9">巨魔</a>
                                            </div>
                                            </li>
                                            <li class="big-screen-space"></li>
                                            <li><h3>怪物类别</h3>
                                                <div class="dropdown-header">
                                                    <a href="/npcs-1.html">野兽</a>
                                                    <a href="/npcs-8.html">小动物</a>
                                                    <a href="/npcs-3.html">恶魔</a>
                                                    <a href="/npcs-2.html">龙类</a>                                                 
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/npcs-4.html">元素生物</a>
                                                    <a href="/npcs-7.html">人型生物</a>
                                                    <a href="/npcs-6.html">亡灵</a>
                                                    <a href="/npcs-5.html">巨人</a>                                                       
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/npcs-9.html">机械</a>
                                                    <a href="/npcs-10.html">未指定</a>
                                                </div>    
                                            </li>
                                        </ul>
                                    </div><!--宠物技能-->      

                                    <!--其他分类-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3>武器训练</h3></li>

                                            <!-- Default -->
                                            <li><span class="sub-header">单手武器</span>
                                                <div class="dropdown-header">
                                                    <a href="/npcs-n.n.1.n.n.html">匕首</a>
                                                    <a href="/npcs-n.n.2.n.n.html">单手剑</a>
                                                    <a href="/npcs-n.n.4.n.n.html">单手斧</a>
                                                    <a href="/npcs-n.n.6.n.n.html">单手锤</a>
                                                    <a href="/npcs-n.n.8.n.n.html">拳套</a>
                                                </div>
                                            </li>
                                            <li><span class="sub-header">双手武器</span>
                                                <div class="dropdown-header">
                                                    <a href="/npcs-n.n.3.n.n.html">双手剑</a>
                                                    <a href="/npcs-n.n.5.n.n.html">双手斧</a>
                                                    <a href="/npcs-n.n.7.n.n.html">双手锤</a>
                                                    <a href="/npcs-n.n.13.n.n.html">长柄武器</a>
                                                </div>
                                            </li>                                              
                                            <!-- End Default -->
                                            <!-- Default -->
                                            <li><span class="sub-header">远程武器</span>
                                                <div class="dropdown-header">
                                                    <a href="/npcs-n.n.9.n.n.html">法杖</a>
                                                    <a href="/npcs-n.n.10.n.n.html">枪</a>
                                                    <a href="/npcs-n.n.11.n.n.html">弓箭</a>
                                                    <a href="/npcs-n.n.12.n.n.html">弩</a>
                                                    <a href="/npcs-n.n.14.n.n.html">投掷武器</a>
                                                </div>
                                            </li>                                                                                                                                          
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--宠物技能-->                              

                                </div>
                            </div>    
                        </div>    
                    </li>
                </ul>
            </li>


            <!--任务-->
            <li class="dropdown mega-menu-fullwidth">
                <a href="/quests.html" class="dropdown-toggle" data-toggle="dropdown">
                    任务 <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <div class="mega-menu-content">
                            <div class="container">
                                <div class="row equal-height">

                                    <!--东部王国-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/quests-0.html">东部王国</a></h3></li>
                                            <!-- Default -->
                                            <li><a href="/quests-0.12.html" class="alliance">艾尔文森林(1-10)</a></li>
                                            <li><a href="/quests-0.38.html" class="alliance">洛克莫丹(10-20)</a></li>
                                            <li><a href="/quests-0.1.html" class="alliance">丹莫罗(1-10)</a></li>
                                            <li><a href="/quests-0.40.html" class="alliance">西部荒野(10-20)</a></li>
                                            <li><a href="/quests-0.44.html" class="war">赤脊山(15-25)</a></li>
                                            <li><a href="/quests-0.10.html" class="war">暮色森林(20-30)</a></li>

                                            <li><a href="/quests-0.45.html" class="war">阿拉希高地(30-40)</a></li>
                                            <li><a href="/quests-0.3.html" class="war">荒芜之地(35-45)</a></li>
                                            <li><a href="/quests-0.25.html" class="war">黑石山(55-60)</a></li>
                                            <li><a href="/quests-0.4.html" class="war">诅咒之地(47-55)</a></li>
                                            <li><a href="/quests-0.46.html" class="war">燃烧平原(50-60)</a></li>
                                            
                                            
                                            
                                            <li><div>
                                                <a href="/quests-0.1519.html" class="alliance">暴风城</a>
                                                <a href="/quests-0.1537.html" class="alliance">铁炉堡</a>
                                                </div>
                                            </li>                                            
                                            <li><div>
                                                <a href="/quests-0.2257.html" class="war">矿道地铁</a>
                                                <a href="/quests-0.1497.html" class="horde">幽暗城</a>
                                                </div>
                                            </li>                                            
                                            
                                            <li><a href="/quests-0.267.html" class="war">希尔斯布莱德丘陵(20-30)</a></li>
                                            <li><a href="/quests-0.36.html" class="war">奥特兰克山脉(30-40)</a></li>
                                            
                                            
                                            <li><a href="/quests-0.51.html" class="war">灼热峡谷(43-50)</a></li>
                                            <li><a href="/quests-0.130.html" class="horde">银松森林(10-20)</a></li>
                                            <li><a href="/quests-0.33.html" class="war">荆棘谷(30-45)</a></li>
                                            <li><a href="/quests-0.8.html" class="war">悲伤沼泽(35-45)</a></li>
                                            <li><a href="/quests-0.47.html" class="war">辛特兰(40-50)</a></li>
                                            <li><a href="/quests-0.85.html" class="horde">提瑞斯法林地(1-10)</a></li>
                                            <li><a href="/quests-0.28.html" class="war">西瘟疫之地(50-60)</a></li>
                                            <li><a href="/quests-0.139.html" class="war">东瘟疫之地(55-60)</a></li>
                                            <li><a href="/quests-0.11.html" class="war">湿地(20-30)</a> </li>
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--东部王国-->

                                    
                                    <!--卡利姆多-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/quests-1.html">卡利姆多</a></h3></li>
                                            <!-- Default -->
                                            <li><a href="/quests-1.331.html" class="war">灰谷(15-30)</a></li>
                                            <li><a href="/quests-1.16.html" class="war">艾萨拉(48-55)</a></li>
                                            <li><a href="/quests-1.148.html" class="alliance">黑海岸(10-20)</a></li>
                                            <li><a href="/quests-1.405.html" class="war">凄凉之地(30-40)</a></li>
                                            <li><a href="/quests-1.141.html" class="alliance">泰达希尔(1-10)</a></li>
                                            <li><a href="/quests-1.15.html" class="war">尘泥沼泽(35-45)</a></li>
                                            <li><a href="/quests-1.361.html" class="war">费伍德森林(48-55)</a></li>
                                            <li><a href="/quests-1.357.html" class="war">菲拉斯(40-50)</a></li>
                                            <li><a href="/quests-1.215.html" class="horde">莫高雷(1-10)</a></li>
                                            <li><div>
                                                <a href="/quests-1.1657.html" class="alliance">达纳苏斯</a>
                                                <a href="/quests-1.493.html" class="war">月光林地</a>
                                                </div>
                                            </li>                                            
                                            <li><div>
                                                <a href="/quests-1.1637.html" class="horde">奥格瑞玛</a>
                                                <a href="/quests-1.1638.html" class="horde">雷霆崖</a>
                                                </div>
                                            </li>
                                            <li><a href="/quests-1.1377.html" class="war">希利苏斯(55-60)</a></li>
                                            <li><a href="/quests-1.406.html" class="war">石爪山脉(15-27)</a></li>
                                            <li><a href="/quests-1.440.html" class="war">塔纳利斯(40-50)</a></li>
                                            <li><a href="/quests-1.14.html" class="horde">杜隆塔尔(1-10)</a></li>
                                            <li><a href="/quests-1.17.html" class="horde">贫瘠之地(10-25)</a></li>
                                            <li><a href="/quests-1.400.html" class="war">千针石林(25-35)</a></li>
                                            <li><a href="/quests-1.490.html" class="war">安戈洛环形山(48-55)</a></li>
                                            <li><a href="/quests-1.618.html" class="war">冬泉谷(55-60)</a></li>
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--卡利姆多-->

                                    <!--地下城-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/quests-2.html">地下城</a></h3></li>
                                            <!-- Default -->
                                            <li><a href="/quests-2.719.html" class="war">黑暗深渊(23-30)</a></li>
                                            <li><a href="/quests-2.1584.html" class="war">黑石深渊(48-56)</a></li>
                                            <li><a href="/quests-2.1583.html" class="war">黑石塔(57-60)</a></li>
                                            <li><a href="/quests-2.2557.html" class="war">厄运之槌(56-60)</a></li>
                                            <li><a href="/quests-2.133.html" class="alliance">诺莫瑞根(29-38)</a></li>
                                            <li><a href="/quests-2.2100.html" class="war">玛拉顿(40-50)</a></li>
                                            <li><a href="/quests-2.2437.html" class="horde">怒焰裂谷(13-20)</a></li>
                                            <li><a href="/quests-2.722.html" class="war">剃刀高地(37-46)</a></li>
                                            <li><a href="/quests-2.491.html" class="war">剃刀沼泽(29-38)</a></li>
                                            <li><a href="/quests-2.796.html" class="horde">血色修道院(33-44)</a></li>
                                            <li class="big-screen-space"></li>
                                            <li><h3><span>&nbsp;</span></h3></li>
                                            <li><a href="/quests-2.2057.html" class="war">通灵学院(58-60)</a></li>
                                            <li><a href="/quests-2.209.html" class="war">影牙城堡(20-28)</a></li>
                                            <li><a href="/quests-2.2017.html" class="war">斯坦索姆(56-60)</a></li>
                                            <li><a href="/quests-2.1417.html" class="war">沉没的神庙(44-52)</a></li>
                                            <li><a href="/quests-2.1581.html" class="alliance">死亡矿井(17-26)</a></li>
                                            <li><a href="/quests-2.717.html" class="alliance">监狱(24-32)</a></li>
                                            <li><a href="/quests-2.1337.html" class="war">奥达曼(38-46)</a></li>
                                            <li><a href="/quests-2.718.html" class="horde">哀嚎洞穴(17-24)</a></li>
                                            <li><a href="/quests-2.978.html" class="war">祖尔法拉克(43-50)</a></li>
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--地下城-->

                                    <!--综合任务-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3>大型副本</h3></li>

                                            <!-- Default -->
                                            <li><a href="/quests-3.html">团队副本</a>
                                                <div class="dropdown-header">
                                                    <a href="/quests-3.2677.html">黑翼之巢</a>
                                                    <a href="/quests-3.2717.html">熔火之心</a>
                                                    <a href="/quests-3.3456.html">纳克萨玛斯</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/quests-3.2159.html">奥妮克希亚的巢穴</a>
                                                    <a href="/quests-3.19.html">祖尔格拉布</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/quests-3.3429.html">安其拉废墟</a>
                                                    <a href="/quests-3.3428.html">安其拉神殿</a>
                                                </div>
                                            </li>
                                            <li><a href="/quests-6.html">战场</a>
                                                <div class="dropdown-header">
                                                    <a href="/quests-6.2597.html">奥特兰克山谷</a>
                                                    <a href="/quests-6.3358.html">阿拉希盆地</a>
                                                    <a href="/quests-6.3277.html">战歌峡谷</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->

                                            <li class="big-screen-space"></li>
                                            
                                            <li><h3>职业和专业</h3></li>

                                            <!-- Default -->
                                            <li><a href="/quests-4.html">职业</a>
                                                <div class="dropdown-header">
                                                    <a href="/quests-4.-81.html" style="color:#CF9766">战士</a>
                                                    <a href="/quests-4.-141.html" style="color:#F14C74">圣骑士</a>
                                                    <a href="/quests-4.-261.html" style="color:#AAD372">猎人</a>
                                                    <a href="/quests-4.-82.html" style="color:#2359FF">萨满</a>
                                                    <a href="/quests-4.-162.html" style="color:#FFF468">盗贼</a>
                                                </div>
                                                <div class="dropdown-header">    
                                                    <a href="/quests-4.-263.html" style="color:#FE7900">德鲁伊</a>
                                                    <a href="/quests-4.-161.html" style="color:#68CCEF">法师</a>
                                                    <a href="/quests-4.-61.html" style="color:#977DC7">术士</a>
                                                    <a href="/quests-4.-262.html" style="color:#c0c0c0">牧师</a>
                                                </div>
                                            </li>
                                            <li><a href="/quests-5.html">专业</a>
                                                <div class="dropdown-header">
                                                    <a href="/quests-5.-181.html">炼金术</a>
                                                    <a href="/quests-5.-121.html">锻造</a>
                                                    <a href="/quests-5.-304.html">烹饪</a>
                                                    <a href="/quests-5.-201.html">工程学</a>
                                                </div>
                                                <div class="dropdown-header">    
                                                    <a href="/quests-5.-324.html">急救</a>
                                                    <a href="/quests-5.-101.html">钓鱼</a>
                                                    <a href="/quests-5.-24.html">草药学</a>
                                                    <a href="/quests-5.-182.html">制皮</a>
                                                    <a href="/quests-5.-264.html">裁缝</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->

                                             <li class="big-screen-space"></li>
                                            
                                            <li><h3>其它任务</h3></li>

                                            <!-- Default -->
                                            <li><a href="/quests-9.html">季节性</a>
                                                <div class="dropdown-header">
                                                    <a href="/quests-9.-1003.html">万圣节</a>
                                                    <a href="/quests-9.-364.html">暗月马戏团</a>
                                                    <a href="/quests-9.-366.html">元宵节</a>
                                                    <a href="/quests-9.-369.html">仲夏节</a>
                                                </div>
                                            </li>
                                            <li><a href="/quests-7.html">杂项</a>
                                                <div class="dropdown-header">
                                                    <a href="/quests-7.-365.html">安其拉备战</a>
                                                    <a href="/quests-7.-1.html">史诗</a>
                                                    <a href="/quests-7.-344.html">传奇</a>
                                                    <a href="/quests-7.-367.html">声望</a>
                                                    <a href="/quests-7.-368.html">天灾入侵</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->

                                        </ul>
                                    </div><!--综合任务-->

                                </div>
                            </div>    
                        </div>    
                    </li>
                </ul>
            </li><!--任务-->

            <!--地区阵营-->
            <li class="dropdown mega-menu-fullwidth">
                <a href="/spells.html" class="dropdown-toggle" data-toggle="dropdown">
                    地区阵营 <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <div class="mega-menu-content">
                            <div class="container">
                                <div class="row equal-height">

                                      <!--职业技能-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/zones-0.html">东部王国</a></h3></li>

                                            <!-- Default -->
                                            <li><a href="/zone-12.html" class="alliance">艾尔文森林(1-10)</a></li>
                                            <li><a href="/zone-38.html" class="alliance">洛克莫丹(10-20)</a></li>
                                            <li><a href="/zone-1.html" class="alliance">丹莫罗(1-10)</a></li>
                                            <li><a href="/zone-40.html" class="alliance">西部荒野(10-20)</a></li>
                                            
                                            <li><a href="/zone-44.html" class="war">赤脊山(15-25)</a></li>
                                            <li><a href="/zone-10.html" class="war">暮色森林(20-30)</a></li>

                                            <li><a href="/zone-45.html" class="war">阿拉希高地(30-40)</a></li>
                                            <li><a href="/zone-3.html" class="war">荒芜之地(35-45)</a></li>
                                            <!--li><a href="/zone-25.html" class="war">黑石山(55-60)</a></li-->
                                            <li><a href="/zone-4.html" class="war">诅咒之地(47-55)</a></li>
                                            <li><a href="/zone-46.html" class="war">燃烧平原(50-60)</a></li>
                                            
                                            <li><div>
                                                <a href="/zone-1519.html" class="alliance">暴风城</a>
                                                <a href="/zone-1537.html" class="alliance">铁炉堡</a>
                                                </div>
                                            </li>                                            
                                            <li><div>
                                                <!--a href="/zone-2257.html" class="war">矿道地铁</a-->
                                                <a href="/zone-1497.html" class="horde">幽暗城</a>
                                                <a href="/zone-41.html" class="war">逆风小径</a> 
                                                </div>
                                            </li>                                            
                                            
                                            <li><a href="/zone-267.html" class="war">希尔斯布莱德丘陵(20-30)</a></li>
                                            <li><a href="/zone-36.html" class="war">奥特兰克山脉(30-40)</a></li>
                                            
                                            
                                            <li><a href="/zone-51.html" class="war">灼热峡谷(43-50)</a></li>
                                            <li><a href="/zone-130.html" class="horde">银松森林(10-20)</a></li>
                                            <li><a href="/zone-33.html" class="war">荆棘谷(30-45)</a></li>
                                            <li><a href="/zone-8.html" class="war">悲伤沼泽(35-45)</a></li>
                                            <li><a href="/zone-47.html" class="war">辛特兰(40-50)</a></li>
                                            <li><a href="/zone-85.html" class="horde">提瑞斯法林地(1-10)</a></li>
                                            <li><a href="/zone-28.html" class="war">西瘟疫之地(50-60)</a></li>
                                            <li><a href="/zone-139.html" class="war">东瘟疫之地(55-60)</a></li>
                                            <li><a href="/zone-11.html" class="war">湿地(20-30)</a> </li>

                                            
                                                                                                                                                                                                                                                                                                        
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--职业技能-->

                                      <!--专业技能-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/zones-1.html">卡利姆多</a></h3></li>
                                            <!-- Default -->
                                            <li><a href="/zone-331.html" class="war">灰谷(15-30)</a></li>
                                            <li><a href="/zone-16.html" class="war">艾萨拉(48-55)</a></li>
                                             <li><a href="/zone-148.html" class="alliance">黑海岸(10-20)</a></li>
                                            <li><a href="/zone-405.html" class="war">凄凉之地(30-40)</a></li>
                                            <li><a href="/zone-141.html" class="alliance">泰达希尔(1-10)</a></li>
                                            <li><a href="/zone-15.html" class="war">尘泥沼泽(35-45)</a></li>
                                            <li><a href="/zone-361.html" class="war">费伍德森林(48-55)</a></li>
                                            <li><a href="/zone-357.html" class="war">菲拉斯(40-50)</a></li>
                                            <li><a href="/zone-215.html" class="horde">莫高雷(1-10)</a></li>
                                            <li><div>
                                                <a href="/zone-1657.html" class="alliance">达纳苏斯</a>
                                                <a href="/zone-493.html" class="war">月光林地</a>
                                                </div>
                                            </li>                                            
                                            <li><div>
                                                <a href="/zone-1637.html" class="horde">奥格瑞玛</a>
                                                <a href="/zone-1638.html" class="horde">雷霆崖</a>
                                                </div>
                                            </li>
                                            <li><a href="/zone-1377.html" class="war">希利苏斯(55-60)</a></li>
                                            <li><a href="/zone-406.html" class="war">石爪山脉(15-27)</a></li>
                                            <li><a href="/zone-440.html" class="war">塔纳利斯(40-50)</a></li>
                                            <li><a href="/zone-14.html" class="horde">杜隆塔尔(1-10)</a></li>
                                            <li><a href="/zone-17.html" class="horde">贫瘠之地(10-25)</a></li>
                                            <li><a href="/zone-400.html" class="war">千针石林(25-35)</a></li>
                                            <li><a href="/zone-490.html" class="war">安戈洛环形山(48-55)</a></li>
                                            <li><a href="/zone-618.html" class="war">冬泉谷(55-60)</a></li>
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--专业技能-->     

                                    
                                      <!--宠物技能-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/zones-2.html">副本</a></h3></li>
                                            <!-- Default -->
                                            <li><span class="sub-header">位于东部王国</span></li>
                                            
                                            <li><a href="/zone-1584.html" class="war">黑石深渊(48-56)</a></li>
                                            <li><a href="/zone-1583.html" class="war">黑石塔(57-60)</a></li>
                                            <li><a href="/zone-133.html" class="alliance">诺莫瑞根(29-38)</a></li>
                                            <li><a href="/zone-796.html" class="horde">血色修道院(33-44)</a></li>
                                            <li><a href="/zone-2017.html" class="war">斯坦索姆(56-60)</a></li>
                                            <li><a href="/zone-2057.html" class="war">通灵学院(58-60)</a></li>
                                            <li><a href="/zone-209.html" class="war">影牙城堡(20-28)</a></li>
                                            <li><a href="/zone-1337.html" class="war">奥达曼(38-46)</a></li>
                                            <li><a href="/zone-1417.html" class="war">沉没的神庙(44-52)</a></li>
                                            <li><a href="/zone-717.html" class="alliance">暴风城监狱(24-32)</a></li>
                                            <li><a href="/zone-1581.html" class="alliance">死亡矿井(17-26)</a></li>


                                            <li><span class="sub-header">位于卡利姆多</span></li>
                                            <li><a href="/zone-719.html" class="war">黑暗深渊(23-30)</a></li>
                                            <li><a href="/zone-2437.html" class="horde">怒焰裂谷(13-20)</a></li>
                                            <li><a href="/zone-718.html" class="horde">哀嚎洞穴(17-24)</a></li>
                                            <li><a href="/zone-2557.html" class="war">厄运之槌(56-60)</a>
                                            <li><a href="/zone-2100.html" class="war">玛拉顿(40-50)</a></li>
                                            <div class="dropdown-header">
                                            <a href="/zone-25570.html">东部</a>
                                            <a href="/zone-25571.html">北部</a>
                                            <a href="/zone-25572.html">西部</a>
                                            </div>
                                            </li>
                                            <li><a href="/zone-722.html" class="war">剃刀高地(37-46)</a></li>
                                            <li><a href="/zone-491.html" class="war">剃刀沼泽(29-38)</a></li>
                                            <li><a href="/zone-978.html" class="war">祖尔法拉克(43-50)</a></li> 
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--宠物技能--> 

                                    <!--大型副本和阵营-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3>大型副本</h3></li>

                                            <!-- Default -->
                                            <li><a href="/zones-3.html">团队副本（东部王国）</a>
                                                <div class="dropdown-header">
                                                <a href="/zone-19.html">祖尔格拉布</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/zone-2717.html">熔火之心</a>
                                                    <a href="/zone-15830.html">黑石塔上</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/zone-2677.html">黑翼之巢</a>
                                                    <a href="/zone-3456.html">纳克萨玛斯</a>
                                                </div>                                                
                                            </li>
                                            <li><a href="/zones-3.html">团队副本（卡利姆多）</a>
                                                <div class="dropdown-header">
                                                    <a href="/zone-3429.html">安其拉废墟</a>
                                                    <a href="/zone-3428.html">安其拉神殿</a>
                                                </div>                                            
                                                <div class="dropdown-header">
                                                    <a href="/zone-2159.html">奥妮克希亚巢穴</a>
                                                </div>
                                            </li>                                            
                                            <li><a href="/zones-4.html" class="war">战场（东部王国）</a>
                                                <div class="dropdown-header">
                                                    <a href="/zone-2597.html">奥特兰克山谷</a>
                                                    <a href="/zone-25971.html">北部</a>
                                                    <a href="/zone-25970.html">南部</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/zone-3358.html">阿拉希盆地</a>
                                                </div>
                                            </li>
                                            <li><a href="/zones-4.html" class="war">战场（卡利姆多）</a>
                                                <div class="dropdown-header">
                                                    <a href="/zone-3277.html">战歌峡谷</a>
                                                </div>
                                            </li>
                                            <!-- End Default -->
                                            <li class="big-screen-space"></li>
                                            <li><h3>阵营</h3></li>
                                            <!-- Default -->
                                            <li><a href="/factions-469.html" class="alliance">联盟</a></li>
                                            <li><a href="/factions-891.html" class="alliance">联盟军队</a></li>
                                            <li><a href="/factions-67.html" class="horde">部落</a></li>
                                            <li><a href="/factions-892.html" class="horde">部落军队</a></li>
                                            <li><a href="/factions-169.html">商贸集团</a>
                                                <div class="dropdown-header">
                                                    <a href="/faction-369.html">加基森</a>
                                                    <a href="/faction-470.html">棘齿城</a>
                                                    <a href="/faction-577.html">永望镇</a>
                                                    <a href="/faction-21.html">藏宝海湾</a>
                                                </div>
                                            </li>
                                            <li><a href="/factions-0.html">其他阵营</a></li>
                                            <!-- End Default -->

                                        </ul>
                                    </div><!--大型副本和阵营-->                                 

                                </div>
                            </div>    
                        </div>    
                    </li>
                </ul>
            </li><!--地区阵营-->
            <!--技能-->
            <li class="dropdown mega-menu-fullwidth">
                <a href="/spells.html" class="dropdown-toggle" data-toggle="dropdown">
                    技能 <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <div class="mega-menu-content">
                            <div class="container">
                                <div class="row equal-height">

                                      <!--职业技能-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/spells-7.html">职业技能</a></h3></li>

                                            <!-- Default -->
                                            <li><a href="/spells-7.1.html" style="color:#CF9766">战士</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.1.26.html">武器</a>
                                                    <a href="/spells-7.1.256.html">狂暴</a>
                                                    <a href="/spells-7.1.257.html">防御</a>
                                                </div>
                                            </li>    
                                            <li><a href="/spells-7.2.html" style="color:#F14C74">圣骑士</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.2.594.html">圣神</a>
                                                    <a href="/spells-7.2.267.html">防护</a>
                                                    <a href="/spells-7.2.184.html">惩戒</a>
                                                </div>
                                            </li>
                                            <li><a href="/spells-7.3.html" style="color:#AAD372">猎人</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.3.50.html">野兽支配</a>
                                                    <a href="/spells-7.3.163.html">射击</a>
                                                    <a href="/spells-7.3.51.html">生存</a>
                                                </div>
                                            </li>     
                                            <li><a href="/spells-7.4.html" style="color:#FFF468">潜行者</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.4.253.html">刺杀</a>
                                                    <a href="/spells-7.4.38.html">战斗</a>
                                                    <a href="/spells-7.4.39.html">敏锐</a>
                                                    <a href="/spells-7.4.633.html">开锁</a>
                                                </div>
                                            </li>    
                                            <li><a href="/spells-7.5.html" style="color:#c0c0c0">牧师</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.5.613.html">戒律</a>
                                                    <a href="/spells-7.5.56.html">圣神</a>
                                                    <a href="/spells-7.5.78.html">暗影魔法</a>
                                                </div>
                                            </li>     
                                            <li><a href="/spells-7.7.html" style="color:#2359FF">萨满</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.7.375.html">元素战斗</a>
                                                    <a href="/spells-7.7.373.html">增强</a>
                                                    <a href="/spells-7.7.374.html">恢复</a>
                                                </div>
                                            </li>   
                                            <li><a href="/spells-7.8.html" style="color:#68CCEF">法师</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.8.237.html">奥术</a>
                                                    <a href="/spells-7.8.8.html">火焰</a>
                                                    <a href="/spells-7.8.6.html">冰霜</a>
                                                </div>
                                            </li>    
                                            <li><a href="/spells-7.9.html" style="color:#977DC7">术士</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.9.355.html">痛苦</a>
                                                    <a href="/spells-7.9.354.html">恶魔学识</a>
                                                    <a href="/spells-7.9.593.html">毁灭</a>
                                                </div>
                                            </li>
                                            <li><a href="/spells-7.11.html" style="color:#FE7900">德鲁伊</a>
                                                <div class="dropdown-header">
                                                    <a href="/spells-7.11.574.html">平衡</a>
                                                    <a href="/spells-7.11.134.html">野性战斗</a>
                                                    <a href="/spells-7.11.573.html">恢复</a>
                                                </div>
                                            </li>                                                                                                                                                                                                                                                                                                          
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--职业技能-->

                                      <!--专业技能-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/spells-11.html">专业技能</a></h3>
                                                <div class="dropdown-header">
                                                    <!-- Default -->
                                                    <a href="/spells-11.171.html">炼金术</a>
                                                    <a href="/spells-11.164.html">锻造</a>
                                                    <a href="/spells-11.333.html">附魔</a>
                                                    <a href="/spells-11.202.html">工程</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/spells-11.165.html">制皮</a>
                                                    <a href="/spells-11.186.html">采矿</a>
                                                    <a href="/spells-11.393.html">剥皮</a>
                                                    <a href="/spells-11.197.html">裁缝</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/spells-11.182.html">草药学</a>
                                                </div>                                                
                                            </li>
                                            <!-- End Default -->
                                            <li class="big-screen-space">
                                            <h3><a href="/spells-9.html">第二技能</a></h3>
                                            <div class="dropdown-header">
                                                <a href="/spells-9.185.html">烹饪</a>
                                                <a href="/spells-9.129.html">急救</a>
                                                <a href="/spells-9.356.html">钓鱼</a>
                                                <a href="/spells-9.762.html">骑术</a>
                                            </div>
                                            </li>
                                        </ul>
                                    </div><!--专业技能-->     

                                    
                                      <!--宠物技能-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/spells--3.html">宠物技能</a></h3></li>

                                            <!-- Default -->
                                            <li><span class="sub-header">猎人</span>
                                                <div class="dropdown-header">
                                                    <a href="/spells--3.270.html">通用</a>
                                                    <a href="/spells--3.653.html">蝙蝠</a>
                                                    <a href="/spells--3.210.html">熊</a>
                                                    <a href="/spells--3.655.html">食肉鸟</a>
                                                </div>
                                                <div class="dropdown-header">
                                                    <a href="/spells--3.211.html">野猪</a>
                                                    <a href="/spells--3.213.html">秃鹰</a>
                                                    <a href="/spells--3.209.html">猫</a>
                                                    <!--a href="/spells--3.780.html">奇美拉</a-->
                                                    <!--a href="/spells--3.787.html">熔核猎犬</a-->
                                                    <a href="/spells--3.214.html">螃蟹</a>
                                                </div>
                                                <div class="dropdown-header">

                                                    <a href="/spells--3.212.html">鳄鱼</a>
                                                    <!--a href="/spells--3.781.html">魔暴龙</a-->
                                                    <!--a href="/spells--3.763.html">龙鹰</a-->
                                                    <a href="/spells--3.215.html">猩猩</a>
                                                    <a href="/spells--3.654.html">土狼</a>
                                                    <!--a href="/spells--3.775.html">蛾子</a-->
                                                    <a href="/spells--3.217.html">迅猛龙</a>
                                                </div> 
                                                <div class="dropdown-header">
                                                    <!--a href="/spells--3.767.html">劫掠者</a-->
                                                    <!--a href="/spells--3.786.html">犀牛</a-->
                                                    <a href="/spells--3.236.html">蝎子</a>
                                                    <!--a href="/spells--3.768.html">毒蛇</a-->
                                                    <!--a href="/spells--3.783.html">异种蝎</a-->
                                                    <a href="/spells--3.203.html">蜘蛛</a>
                                                    <!--a href="/spells--3.788.html">灵魂兽</a-->
                                                    <!--a href="/spells--3.765.html">孢子蝙蝠</a-->
                                                    <a href="/spells--3.218.html">陆行鸟</a>
                                                    <a href="/spells--3.251.html">海龟</a>
                                                    <!--a href="/spells--3.766.html">蜥蜴</a-->
                                                </div>     
                                                <div class="dropdown-header">
                                                    <!--a href="/spells--3.785.html">黄蜂</a-->
                                                    <a href="/spells--3.656.html">风蛇</a>
                                                    <a href="/spells--3.208.html">狼</a>
                                                    <!--a href="/spells--3.784.html">蠕虫</a-->
                                                </div>                                                                                                                                                                                                                                                                                             
                                            <!-- End Default -->
                                            <!-- Default -->
                                            <li><span class="sub-header">术士</span>
                                                <div class="dropdown-header">
                                                    <!--a href="/spells--3.761.html">恶魔卫士</a-->
                                                    <a href="/spells--3.189.html">地狱犬</a>
                                                    <a href="/spells--3.188.html">小鬼</a>
                                                    <a href="/spells--3.205.html">魅魔</a>
                                                    <a href="/spells--3.204.html">虚空行者</a>
                                                </div>
                                            <!-- End Default -->
                                        </ul>
                                    </div><!--宠物技能--> 

                                    <!--其它技能-->
                                    <div class="col-md-3 equal-height-in">
                                        <ul class="list-unstyled equal-height-list">
                                            <li><h3><a href="/spells-0.html">其它技能</a></h3></li>

                                            <!-- Default -->
                                            <li><a href="/spells-8.html">护甲专精</a></li>
                                            <li><a href="/spells-6.html">武器技能</a></li>
                                            <li><a href="/spells-10.html">语言</a></li>
                                            <li><a href="/spells--4.html">种族特长</a></li>

                                        </ul>
                                    </div><!--其它技能-->                                 

                                </div>
                            </div>    
                        </div>    
                    </li>
                </ul>
            </li><!--技能-->


            <li class="dropdown">
            <a href="/itemsets.html" class="dropdown-toggle" data-toggle="dropdown">天赋 <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="/talent-1.html" style="color:#CF9766">战士</a></li>
                    <li><a href="/talent-2.html" style="color:#F14C74">圣骑士</a></li>
                    <li><a href="/talent-3.html" style="color:#AAD372">猎人</a></li>
                    <li><a href="/talent-7.html" style="color:#2359FF">萨满</a></li>
                    <li><a href="/talent-4.html" style="color:#FFF468">盗贼</a></li>
                    <li><a href="/talent-11.html" style="color:#FE7900">德鲁伊</a></li>
                    <li><a href="/talent-8.html" style="color:#68CCEF">法师</a></li>
                    <li><a href="/talent-9.html" style="color:#977DC7">术士</a></li>
                    <li><a href="/talent-5.html" style="color:#977DC7">牧师</a></li>
                </ul>
            </li>
    
        </ul>
        </div><!--/.nav-collapse -->
            <div class="searchBg">
                    <div class="searchCenter">
                        <form method="get" action="." onsubmit="return searchKey()">
                            <input placeholder="输入物品,道具,NPC,任务,技能,地区,阵营等" type="text" name="search" size="30" class="searbox" id="search_input" autocomplete="off"/>
                            <input type="button" value="" class="searbtn" onclick="searchNow()"/>
                        </form>
                        <div class="suggest" id="search-suggest" style="top: 38px; left: 0px; position: absolute;">
                    </div>
            </div>  
    </div>
    </nav>
</div>

<div class="container-fluid" style="max-width:780px;padding-top:150px;min-height:600px">
	<div class="row">
		<div class="col-md-12">
			<h3>
				{$info.title}
			</h3>

            <div class="author">
                <img src="{$info.avatar}" alt="{$info.nick}"> <span class="name">{$info.author} </span> 
                <span class="time">{$info.pub_time}</span>
                <span class="source">{$info.source}</span>
            </div>

            {if isset($info.tag)}
            <div style="float:right">
                {section name=i loop=$info.tag}
                    <span class="label label-default">{$info.tag[i]}</span> 
			    {/section}
            </div>
            {/if}    

			<hr>
            <div>
            {if ($info.media_type=='video')}
                <div class="video-box" >
                    <video width="100%" height="100%" tabindex="2" mediatype="video" preload="none"
                        src="{$info.thumb[1]}"
                        poster="{$info.thumb[0]}">
                    </video>
                    <div class="video-img"></div>
                </div> 
            {else}
                <div class="body" style="font-size:20px">
                {$info.body}
                <div>
            {/if}    
			</div>
            <hr>
            <div style="clear:both;"></div>
            <div>
             {if isset($info.zones)}
                <div>
                <span style="height:30px;line-height:30px;"><h6>相关地区</h6></span>
                {section name=i loop=$info.zones}
                    <span class="button button-primary"><a target="_blank" href='/zone-{$info.zones[i].id}.html'>{$info.zones[i].name}</a></span> 
			    {/section}
                </div>           
             {/if}
             {if isset($info.items)}
                <div><span style="height:30px;line-height:30px;"><h6>相关物品</h6></span>
                {section name=i loop=$info.items}
                    <span style="padding-left:25px;background:url(images/icons/small/{$info.items[i].iconname}.png) no-repeat left center;" class="button button-primary">
                    <a target="_blank" href='/item-{$info.items[i].id}.html' class="wow-item-{$info.items[i].quality}">{$info.items[i].name}</a>
                    </span> 
			    {/section}
                </div>           
             {/if} 
             {if isset($info.npcs)}
                <div>
                <span style="height:30px;line-height:30px;"><h6>相关npc</h6></span>
                {section name=i loop=$info.npcs}
                    <span class="button button-primary faction-{$info.npcs[i].side}">
                    <a target="_blank" href='/npc-{$info.npcs[i].id}.html'>
                        <div class="div-icon32">
                        <img src="/screenshots/thumb/{$info.npcs[i].id}.jpg" style="width:32px;height:32px" onerror="this.src='/images/icons/medium/temp.png'">
                        {$info.npcs[i].name}
                        </div>
                    </a>
                    </span> 
			    {/section}
                </div>
             {/if}               
             {if isset($info.quests)}
                <div>
                <span style="height:30px;line-height:30px;"><h6>相关任务</h6></span>
                {section name=i loop=$info.quests}
                    <span class="button button-primary faction-{$info.quests[i].side}">
                    <a target="_blank" href='/quest-{$info.quests[i].id}.html'>{$info.quests[i].name}</a>
                    </span> 
			    {/section}  
                </div>           
             {/if} 
            </div>
		</div>
	</div>
</div>
<div style="clear:both"></div>

<div style="width:100%;text-align:center;">
{include file='bricks/contribute.tpl'}
</div>



<div style="width:100%;height:180px;text-align:center">
    <div style="margin:0 auto;width:380px;height:380px;text-align:center;width:100%;filter:alpha(Opacity=38);-moz-opacity:0.38;opacity: 0.38;">
        魔兽世界怀旧服地图资料
        <div style="font-size: 12px;text-align:center"> <a style="text-decoration: none;color:gray" href="http://www.beian.miit.gov.cn/">京ICP备19021883号-1</a></div>
        <div style="font-size: 12px;text-align:center">Copyright 2019 - 2020 topwow.top. All Rights Reserved</div>
    </div>
</div>
<div style="display:none">
	<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1277448314'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s23.cnzz.com/z_stat.php%3Fid%3D1277448314%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));</script>
</div>

</body>
</html>

