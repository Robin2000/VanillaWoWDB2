{literal}
<script type="text/javascript">
var tabsRelated = new Tabs({parent: getElement('tabs-generic')});
var _ = g_items;
_[2033]={icon:'INV_Boots_08'};_[2906]={icon:'INV_Pants_03'};_[3562]={icon:'INV_Belt_05'};_[1264]={icon:'INV_Mace_07'};_[3400]={icon:'INV_Sword_20'};_[1317]={icon:'INV_Staff_16'};_[2942]={icon:'INV_Gauntlets_04'};_[3228]={icon:'INV_Bracer_02'};_[2941]={icon:'INV_Weapon_ShortBlade_18'};_[1076]={icon:'INV_Jewelry_Ring_02'};_[2280]={icon:'INV_Staff_06'};


new Listview({template:'npc',id:'npcs',name:LANG.tab_npcs,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:[],sort:[ 'name'],data:[{name:'巴基尔·斯瑞德',name_en:"Bazil Thredd",name_en_num:0,minlevel:29,maxlevel:29,location:["717"],type:7,classification:1,react:[-1,-1],id:1716},{name:'哈姆霍克',name_en:"Hamhock",name_en_num:0,minlevel:28,maxlevel:28,location:["717"],type:7,classification:1,react:[-1,-1],id:1717},{name:'卡姆·深怒',name_en:"Kam Deepfury",name_en_num:0,minlevel:27,maxlevel:27,location:["717"],type:7,classification:3,react:[-1,-1],id:1666},{name:'布鲁戈·艾尔克纳寇',name_en:"Bruegal Ironknuckle",name_en_num:0,minlevel:26,maxlevel:26,location:["717"],type:7,classification:3,react:[-1,-1],id:1720},{name:'迪克斯特·瓦德',name_en:"Dextren Ward",name_en_num:0,minlevel:26,maxlevel:26,location:["717"],type:7,classification:1,react:[-1,-1],id:1663},{name:'迪菲亚叛军',name_en:"Defias Insurgent",name_en_num:0,minlevel:25,maxlevel:26,location:["717"],type:7,classification:1,react:[-1,-1],id:1715},{name:'迪菲亚罪犯',name_en:"Defias Convict",name_en_num:0,minlevel:24,maxlevel:25,location:["717"],type:7,classification:1,react:[-1,-1],id:1711},{name:'迪菲亚狱友',name_en:"Defias Inmate",name_en_num:0,minlevel:24,maxlevel:25,location:["717"],type:7,classification:1,react:[-1,-1],id:1708},{name:'可怕的塔高尔',name_en:"Targorr the Dread",name_en_num:0,minlevel:24,maxlevel:24,location:["717"],type:7,classification:1,react:[-1,-1],id:1696},{name:'迪菲亚俘虏',name_en:"Defias Captive",name_en_num:0,minlevel:23,maxlevel:24,location:["717"],type:7,classification:1,react:[-1,-1],id:1707},{name:'迪菲亚囚犯',name_en:"Defias Prisoner",name_en_num:0,minlevel:23,maxlevel:24,location:["717"],type:7,classification:1,react:[-1,-1],id:1706}]});



new Listview({template:'quest',id:'quests',name:LANG.tab_quests,tabs:tabsRelated,parent:'listview-generic',data:[{id:'377',name:'罪与罚',name_en:"Crime and Punishment",name_en_num: 0,name_zh: '<span>中文：</span>',level:'26',reqlevel:22,side:'1',itemchoices:[[2033,1],[2906,1]],icons:"inv_boots_08,inv_pants_03",xp:320,category:717,category2:2,type:81},{id:'387',name:'镇压暴动',name_en:"Quell The Uprising",name_en_num: 0,name_zh: '<span>中文：</span>',level:'26',reqlevel:22,side:'1',xp:320,money:Array,category:717,category2:2,type:81},{id:'388',name:'鲜血的颜色',name_en:"The Color of Blood",name_en_num: 0,name_zh: '<span>中文：</span>',level:'26',reqlevel:22,side:'1',xp:320,money:Array,category:717,category2:2,type:81},{id:'378',name:'卡姆·深怒',name_en:"The Fury Runs Deep",name_en_num: 0,name_zh: '<span>中文：</span>',level:'27',reqlevel:22,side:'3',itemchoices:[[3562,1],[1264,1]],icons:"inv_belt_05,inv_mace_07",xp:330,category:717,category2:2,type:81},{id:'391',name:'监狱暴动',name_en:"The Stockade Riots",name_en_num: 0,name_zh: '<span>中文：</span>',level:'29',reqlevel:16,side:'1',xp:360,money:Array,category:717,category2:2,type:81},{id:'386',name:'伸张正义',name_en:"What Comes Around...",name_en_num: 0,name_zh: '<span>中文：</span>',level:'25',reqlevel:22,side:'1',itemchoices:[[3400,1],[1317,1]],icons:"inv_sword_20,inv_staff_16",xp:310,category:717,category2:2,type:81}]});

new Listview({template:'item',id:'item_quest_reward',name:LANG.tab_quest_reward,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:['source'],sort:['name_en'],data:[{name:"5大使之靴",name_en: "Ambassador's Boots",name_en_num: 1,level:25,classs:4,subclass:2,id:2033},{name:"5辩护腰带",name_en: "Belt of Vindication",name_en_num: 1,level:27,classs:4,subclass:2,id:3562},{name:"5夜色郡锁甲护腿",name_en: "Darkshire Mail Leggings",name_en_num: 1,level:26,classs:4,subclass:3,id:2906},{name:"5硬根法杖",name_en: "Hardened Root Staff",name_en_num: 1,level:25,classs:2,subclass:10,id:1317},{name:"5碎头者",name_en: "Headbasher",name_en_num: 1,level:26,classs:2,subclass:5,id:1264},{name:"5磷铝长剑",name_en: "Lucine Longsword",name_en_num: 1,level:25,classs:2,subclass:7,id:3400}]});


// 掉落
new Listview({template:'item',id:'item_drop',name:LANG.tab_drops,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:['source'],sort:['name_en'],data:[{name:"5迪菲亚叛徒之戒",name_en: "Defias Renegade Ring",name_en_num: 1,level:25,reqlevel:20,classs:4,subclass:0,id:1076},{name:"5黑铁手杖",name_en: "Kam's Walking Stick",name_en_num: 1,level:27,reqlevel:22,classs:2,subclass:10,id:2280},{name:"4监狱骨片",name_en: "Prison Shank",name_en_num: 1,level:26,reqlevel:21,classs:2,subclass:15,id:2941},{name:"4铁指虎",name_en: "Iron Knuckles",name_en_num: 1,level:26,reqlevel:21,classs:2,subclass:13,id:2942},{name:"4弯曲护腕",name_en: "Jimmied Handcuffs",name_en_num: 1,level:26,reqlevel:21,classs:4,subclass:3,id:3228}]});


new Listview({template:'npc',id:'bosses',name:LANG.tab_bosses,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:[],sort:[ 'name'],data:[{name:'卡姆·深怒',name_en:"Kam Deepfury",name_en_num:0,minlevel:27,maxlevel:27,location:["717"],type:7,classification:3,react:[-1,-1],id:1666},{name:'布鲁戈·艾尔克纳寇',name_en:"Bruegal Ironknuckle",name_en_num:0,minlevel:26,maxlevel:26,location:["717"],type:7,classification:3,react:[-1,-1],id:1720}]});




// new Listview({template: 'comment', id: 'comments', name: LANG.tab_comments, tabs: tabsRelated, parent: 'listview-generic', data: lv_comments});

tabsRelated.flush();
</script>
{/literal}