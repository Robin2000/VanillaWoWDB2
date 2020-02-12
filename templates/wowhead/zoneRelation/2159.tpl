{literal}
<script type="text/javascript">
var tabsRelated = new Tabs({parent: getElement('tabs-generic')});
var _ = g_items;
_[18348]={icon:'INV_Sword_01'};_[18422]={icon:'INV_Misc_Head_Dragon_01'};_[18423]={icon:'INV_Misc_Head_Dragon_01'};_[18488]={icon:'INV_Sword_09'};


new Listview({template:'npc',id:'npcs',name:LANG.tab_npcs,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:[],sort:[ 'name'],data:[{name:'奥妮克希亚',name_en:"Onyxia",name_en_num:0,minlevel:63,maxlevel:63,location:["2159"],type:2,classification:3,react:[-1,-1],id:10184},{name:'奥妮克希亚守卫',name_en:"Onyxian Warder",name_en_num:0,minlevel:60,maxlevel:63,location:["2159"],type:2,classification:1,react:[-1,-1],id:12129},{name:'奥妮克希亚幼龙',name_en:"Onyxian Whelp",name_en_num:0,minlevel:56,maxlevel:57,location:[],type:2,classification:1,react:[-1,-1],id:11262},{name:'修理机器人74A型',name_en:"Field Repair Bot 74A",name_en_num:0,minlevel:50,maxlevel:50,location:[],type:9,classification:0,react:[1,1],id:14337}]});



new Listview({template:'quest',id:'quests',name:LANG.tab_quests,tabs:tabsRelated,parent:'listview-generic',data:[{id:'7509',name:'铸造奎尔塞拉',name_en:"The Forging of Quel'Serrar",name_en_num: 0,name_zh: '<span>中文：</span>',level:'60',reqlevel:60,side:'3',itemrewards:[[18348,1]],icons:"inv_sword_01",xp:1000,category:2159,category2:3,type:62},{id:'7495',name:'联盟的胜利',name_en:"Victory for the Alliance",name_en_num: 0,name_zh: '<span>中文：</span>',level:'60',reqlevel:60,side:'1',xp:1000,category:1519,category2:0,type:0},{id:'7490',name:'部落的胜利',name_en:"Victory for the Horde",name_en_num: 0,name_zh: '<span>中文：</span>',level:'60',reqlevel:60,side:'2',xp:1325,category:1637,category2:1,type:0}]});
new Listview({template:'item',id:'item_start_quest',name:LANG.tab_quest_start,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:['source'],sort:['name_en'],data:[{name:"3奥妮克希亚的头颅",name_en: "Head of Onyxia",name_en_num: 1,level:60,reqlevel:60,classs:12,subclass:0,id:18422},{name:"3奥妮克希亚的头颅",name_en: "Head of Onyxia",name_en_num: 1,level:60,reqlevel:60,classs:12,subclass:0,id:18423}]});


new Listview({template:'item',id:'item_quest_reward',name:LANG.tab_quest_reward,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:['source'],sort:['name_en'],data:[{name:"3加热过的上古之刃",name_en: "Heated Ancient Blade",name_en_num: 1,level:1,classs:12,subclass:0,id:18488},{name:"3奎尔塞拉",name_en: "Quel'Serrar",name_en_num: 1,level:71,reqlevel:60,classs:2,subclass:7,id:18348}]});


// 掉落

new Listview({template:'npc',id:'bosses',name:LANG.tab_bosses,tabs:tabsRelated,parent:'listview-generic',extraCols:[],hiddenCols:[],sort:[ 'name'],data:[{name:'奥妮克希亚',name_en:"Onyxia",name_en_num:0,minlevel:63,maxlevel:63,location:["2159"],type:2,classification:3,react:[-1,-1],id:10184}]});




// new Listview({template: 'comment', id: 'comments', name: LANG.tab_comments, tabs: tabsRelated, parent: 'listview-generic', data: lv_comments});

tabsRelated.flush();
</script>
{/literal}