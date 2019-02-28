/*
 locale_enus.js version 278 (09.07.2009)
 Differences from origin:
 1. Change to relative path:
   - ?		->		?	(141)
 2. Comment unused menu paths
*/
var mn_items = [[2, "武器", , [[0, "单手斧"], [1, "双手斧"], [2, "弓"], [3, "枪"], [4, "单手锤"], [5, "双手锤"], [6, "长棍"], [7, "单手剑"], [8, "双手剑"], [10, "法杖Staves"], [13, "拳套"], [14, "杂项"], [15, "匕首"], [16, "投掷"], [18, "十字弓"], [19, "权杖Wands"], [20, "钓鱼竿Fishing Poles"]], , "INV_Sword_27"], [4, "护甲", , [[1, "布甲" /*, , [[5, "Chest", "/items-4.1&filter=sl=5"], [8, "Feet", "/items-4.1&filter=sl=8"], [10, "Hands", "/items-4.1&filter=sl=10"], [1, "Head", "/items-4.1&filter=sl=1"], [7, "Legs", "/items-4.1&filter=sl=7"], [3, "Shoulder", "/items-4.1&filter=sl=3"], [6, "Waist", "/items-4.1&filter=sl=6"], [9, "Wrist", "/items-4.1&filter=sl=9"]]*/ ], [2, "皮革" /*, , [[5, "Chest", "/items-4.2&filter=sl=5"], [8, "Feet", "/items-4.2&filter=sl=8"], [10, "Hands", "/items-4.2&filter=sl=10"], [1, "Head", "/items-4.2&filter=sl=1"], [7, "Legs", "/items-4.2&filter=sl=7"], [3, "Shoulder", "/items-4.2&filter=sl=3"], [6, "Waist", "/items-4.2&filter=sl=6"], [9, "Wrist", "/items-4.2&filter=sl=9"]]*/ ], [3, "链甲Mail" /*, , [[5, "Chest", "/items-4.3&filter=sl=5"], [8, "Feet", "/items-4.3&filter=sl=8"], [10, "Hands", "/items-4.3&filter=sl=10"], [1, "Head", "/items-4.3&filter=sl=1"], [7, "Legs", "/items-4.3&filter=sl=7"], [3, "Shoulder", "/items-4.3&filter=sl=3"], [6, "Waist", "/items-4.3&filter=sl=6"], [9, "Wrist", "/items-4.3&filter=sl=9"]]*/ ], [4, "板甲Plate" /*, , [[5, "Chest", "/items-4.4&filter=sl=5"], [8, "Feet", "/items-4.4&filter=sl=8"], [10, "Hands", "/items-4.4&filter=sl=10"], [1, "Head", "/items-4.4&filter=sl=1"], [7, "Legs", "/items-4.4&filter=sl=7"], [3, "Shoulder", "/items-4.4&filter=sl=3"], [6, "Waist", "/items-4.4&filter=sl=6"], [9, "Wrist", "/items-4.4&filter=sl=9"]]*/ ], /*[ - 3, "Amulets"], [ - 6, "Cloaks"], [ - 2, "Rings"], [ - 4, "Trinkets"], [ - 5, "Off-hand Frills"],*/ [6, "盾牌"], [7, "圣契Librams"], [8, "幻像Idols"], [9, "图腾"], [0, "杂项"]], , "INV_Chest_Plate16"], [1, "容器", , [[0, "背包"], [1, "灵魂袋"], [2, "药袋"], [3, "附魔袋"], [4, "工程包"], [7, "制皮袋"]], , "INV_Misc_Bag_13"], [0, "消耗品", , [[0, "消耗品"], [1, "魔药"], [2, "药剂Elixirs", , /*[[1, "Battle"], [2, "Guardian"]]*/ ], [3, "携带瓶"], [4, "卷轴"], [5, "食物饮品"], [6, "永久装备强化Permanent Item Enhancements"], /*[ - 3, "Temporary Item Enhancements"],*/ [7, "绷带"], [8, "其它"]], , "INV_Potion_07"], [7, "贸易商品", , [[1, "零件"], [2, "炸药"], [3, "器件"], [5, "布匹Cloth"], [6, "皮革Leather"], [7, "金属石料Metal & Stone"], [8, "肉"], [9, "草药"], [10, "元素"], [12, "附魔"], [13, "材料"], [11, "其它"]], , "INV_Gizmo_BronzeFramework_01"], [6, "发射物", , [[2, "箭"], [3, "子弹"]], , "INV_Ammo_Bullet_02"], [11, "箭袋", , [[2, "箭袋"], [3, "弹药袋"]], , "INV_Misc_Quiver_08"], [9, "食谱", , [[0, "书"], [6, "炼金"], [4, "锻造Blacksmithing"], [5, "烹饪Cooking"], [8, "附魔Enchanting"], [3, "工程Engineering"], [7, "急救"], [9, "钓鱼"], [1, "制皮"], [2, "裁缝"]], , "INV_Scroll_04"], [15, "杂项", , [[0, "废旧"], [1, "试剂Reagents"], [3, "假日Holiday"], /*[ - 4, "Mounts"], [ - 7, "Flying Mounts"], [ - 6, "Combat Pets"],*/ /*[2, "Small Pets"],*/ /*[ - 2, "Armor Tokens"],*/ [4, "其它Other"]], , "INV_Qiraj_JewelBlessed"], [12, "任务", , , , "INV_Misc_Bone_OrcSkull_01"], [13, "钥匙Keys", , , , "INV_Misc_Key_04"]];
var mn_itemSets = [[11, "德鲁伊"], [3, "猎人"], [8, "法师"], [2, "圣骑士"], [5, "牧师"], [4, "盗贼"], [7, "萨满"], [9, "术士"], [1, "战士"]];
var mn_npcs = [[1, "野兽"], [8, "小动物"], [3, "恶魔"], [2, "龙"], [4, "元素"], [5, "巨人"], [7, "人类"], [9, "机械"], [6, "不死"], [10, "未分类"]];
var mn_objects = [[9, "书"], [3, "容器"], [-5, "小提箱"], [-3, "药物"], [-4, "矿脉"], [-2, "任务"]];
var mn_quests = [[0, "东部王国", , [[36, "奥特兰克山脉"], [45, "阿拉希高地"], [3, "荒芜之地"], [25, "黑石山"], [4, "诅咒之地"], [46, "燃烧平原"], [41, "逆风小径"], [2257, "矿道地铁"], [1, "丹•莫罗"], [10, "暮色森林"], [139, "东瘟疫之地"], [12, "艾尔文森林"], [267, "希尔斯布莱德丘陵"], [1537, "铁炉堡"], [38, "洛克莫丹"], [44, "赤脊山"], [51, "灼热峡谷"], [130, "银松森林"], [1519, "暴风城"], [33, "荆棘谷"], [8, "悲伤沼泽"], [47, "辛特兰"], [85, "提瑞斯法林地"], [1497, "幽暗城"], [28, "西瘟疫之地"], [40, "西部荒野"], [11, "沼泽之地"]]], [1, "卡利姆多", , [[331, "灰谷"], [16, "艾萨拉"], [148, "幽暗海滩"], [1657, "达纳苏斯"], [405, "荒凉之地"], [14, "杜隆塔尔"], [15, "尘泥沼泽"], [361, "费伍德森林"], [357, "菲拉斯"], [493, "月光林地"], [215, "莫高雷"], [1637, "奥格瑞玛"], [1377, "希利苏斯"], [406, "石爪山脉"], [440, "塔纳利斯"], [141, "泰达希尔"], [17, "贫瘠之地"], [400, "千针石林"], [1638, "雷霆崖"], [1216, "木喉部落"], [490, "安戈洛环型山"], [618, "冬泉谷"]]], [2, "地下城", , [[719, "黑暗深渊"], [1584, "黑石深渊"], [1583, "黑石塔"], [2557, "厄运之槌"], [133, "诺莫瑞根"], [2100, "玛拉顿Maraudon"], [2437, "怒焰裂谷"], [722, "剃刀高地"], [491, "剃刀沼泽"], [796, "血色修道院"], [2057, "通灵学院"], [209, "影牙城堡"], [2017, "斯坦索姆"], [1581, "死亡矿坑"], [717, "监狱"], [1337, "奥达曼"], [718, "哀嚎洞穴"], [978, "祖尔法拉克"]]], [3, "团攻Raids", , [[2677, "黑翼之巢"], [2717, "熔火之心"], [3456, "纳克萨玛斯"], [2159, "奥妮克希亚的巢穴"], [3429, "安其拉废墟"], [3428, "安其拉神庙"], [19, "祖尔格拉布"]]], [4, "职业", , [[-263, "德鲁伊"], [-261, "猎人"], [-161, "法师"], [-141, "圣骑士"], [-262, "牧师"], [-162, "盗贼"], [-82, "萨满"], [-61, "术士"], [-81, "战士"]]], [5, "专业", , [[-181, "炼金"], [-121, "铁匠"], [-304, "烹饪"], [-201, "工程"], [-324, "急救"], [-101, "钓鱼"], [-24, "草药"], [-182, "制皮"], [-264, "裁缝"]]], [6, "战场", , [[-25, "全部"], [3358, "阿拉希盆地"], [2597, "奥特兰克山谷"], [3277, "战歌峡谷"]]], [9, "季节性", , [[-364, "暗月马戏团"], [-1003, "万圣节"], [-366, "元宵节"], [-369, "仲夏火焰节"]]], [7, "杂项", , [[-365, "安其拉备战"], [-241, "银色锦标赛"], [-1, "史诗"], [-344, "传奇"], [-367, "声望"]]], [-2, "未分类"]];
var mn_spells = [[7, "职业技能", , [[11, "德鲁伊", , [[574, "平衡"], [134, "野性战斗"], [573, "恢复"]]], [3, "猎人", , [[50, "野兽支配"], [163, "射击"], [51, "生存"]]], [8, "法师", , [[237, "奥术"], [8, "火焰"], [6, "冰霜"]]], [2, "圣骑士", , [[594, "圣神"], [267, "防御"], [184, "惩戒"]]], [5, "牧师", , [[613, "惩戒"], [56, "圣神"], [78, "暗影魔法"]]], [4, "盗贼", , [[253, "刺杀"], [38, "战斗"], [633, "开锁"], [39, "敏锐"]]], [7, "萨满", , [[375, "元素战斗"], [373, "强化"], [374, "恢复"]]], [9, "术士", , [[355, "痛苦"], [354, "恶魔学识"], [593, "毁灭"]]], [1, "战士", , [[26, "武器"], [256, "狂暴"], [257, "防御"]]]]], [-3, "宠物技能", , [[782, "食尸Ghoul"], [, "猎人"], [270, "通用Generic"], [653, "蝙蝠"], [210, "熊"], [655, "食肉鸟Bird of Prey"], [211, "野猪"], [213, "秃鹰Carrion Bird"], [209, "猫"], [780, "奇美拉Chimera"], [787, "熔核猎犬Core Hound"], [214, "螃蟹Crab"], [212, "鳄鱼Crocolisk"], [781, "魔暴龙Devilsaur"], [763, "龙鹰Dragonhawk"], [215, "猩猩Gorilla"], [654, "土狼Hyena"], [775, "蛾子Moth"], [217, "迅猛龙Raptor"], [767, "劫掠者Ravager"], [786, "犀牛Rhino"], [236, "蝎子Scorpid"], [768, "毒蛇Serpent"], [783, "异种蝎Silithid"], [203, "蜘蛛"], [788, "灵魂兽Spirit Beast"], [765, "孢子蝙蝠Sporebat"], [218, "陆行鸟"], [251, "海龟Turtle"], [766, "蜥蜴Warp Stalker"], [785, "黄蜂Wasp"], [656, "风蛇"], [208, "狼"], [784, "蠕虫Worm"], [, "术士"], [761, "恶魔卫士Felguard"], [189, "地狱犬Felhunter"], [188, "小鬼Imp"], [205, "魅魔Succubus"], [204, "虚空行者Voidwalker"]]], [11, "专业", , [[171, "炼金术"], [164, "锻造", , [[9788, "护甲锻造"], [9787, "武器锻造"], [17041, "斧锻造精通"], [17040, "锤锻造精通"], [17039, "剑锻造精通"]]], [333, "附魔"], [202, "工程", , [[20219, "侏儒工程师"], [20222, "哥布林工程师"]]], [182, "草药学"], [165, "制皮", , [[10656, "龙鳞制皮Dragonscale Leatherworking"], [10658, "元素制革Elemental Leatherworking"], [10660, "部族制革Tribal Leatherworking"]]], [186, "采矿"], [393, "剥皮"], [197, "裁缝", , [[26798, "月布裁缝"], [26801, "暗纹裁缝"], [26797, "咒火裁缝"]]]]], [9, "第二技能", , [[185, "烹饪"], [129, "急救"], [356, "钓鱼"], [762, "骑术"]]], [8, "护甲专精"], [10, "语言"], [-4, "种族特征"], [6, "武器技能"], [0, "未分类"]];
var mn_zones=[
	[0,"东部王国"],
	[1,"卡里姆多"],
	[2,"副本"],
	/*[3,"Raids"],
	[6,"Battlegrounds"]*/
];
var mn_talentCalc = [["0", "德鲁伊"], ["c", "猎人"], ["o", "法师"], ["s", "圣骑士"], ["b", "牧师"], ["f", "盗贼"], ["h", "萨满"], ["I", "术士"], ["L", "战士"]];
var mn_pets = [];
var mn_factions = [
		[469,"联盟"],
		[891,"联盟势力"],
		[67,"部落"],
		[892,"部落势力"],
		[169,"热砂集团"],
];
var mn_petCalc = [];
var mn_forums = [];
var mn_database=[
	[0,"装备","/items",mn_items],
	[2,"套装","/itemsets"/*,mn_itemSets*/],
	[4,"NPCs","/npcs",mn_npcs],
	[3,"任务","/quests",mn_quests],
	[6,"区域","/zones",mn_zones],
	[1,"法术","/spells",mn_spells],
	[5,"对象","/objects",mn_objects],
	[7,"阵营","/factions",mn_factions]
];
var mn_tools = [ [0, "天赋计算", "/talent", mn_talentCalc],[1, "地图", "/maps"]];
var mn_path = [[0, "数据库", , mn_database], [1, "工具", , mn_tools]];
var g_chr_classes = {
	1 : "战士",
	2 : "圣骑士",
	3 : "猎人",
	4 : "盗贼",
	5 : "牧师",
	6 : "死亡骑士",
	7 : "萨满",
	8 : "法师",
	9 : "术士",
	11 : "德鲁伊"
};
var g_chr_races = {
	1 : "人类",
	2 : "兽人",
	3 : "矮人",
	4 : "暗夜精灵",
	5 : "不死族",
	6 : "扭头人",
	7 : "地精",
	8 : "巨魔",
	10 : "血精灵",
	11 : "德莱尼"
};
var g_chr_specs = {
	"-1": "清空天赋",
	0 : "混血Hybrid",
	6 : ["鲜血", "冰霜", "邪恶"],
	11 : ["平衡", "野性战斗", "恢复"],
	3 : ["野兽支配", "射击", "生存"],
	8 : ["奥术", "火焰", "冰霜"],
	2 : ["神圣", "防御", "惩戒"],
	5 : ["惩戒", "圣神", "暗影"],
	4 : ["刺杀", "战斗", "敏锐"],
	7 : ["元素", "增强", "恢复"],
	9 : ["痛苦", "恶魔学识", "毁灭"],
	1 : ["武器", "狂怒", "防御"]
};
var g_item_glyphs = {
	1 : "主手",
	2 : "副手"
};
var g_item_slots = {
	1 : "头",
	2 : "脖子",
	3 : "肩膀",
	4 : "衬衫",
	5 : "胸甲",
	6 : "腰带",
	7 : "腿",
	8 : "双脚",
	9 : "手腕",
	10 : "手",
	11 : "手指",
	12 : "配饰",
	13 : "单手",
	14 : "盾牌",
	15 : "远程",
	16 : "背部",
	17 : "双手",
	18 : "背包",
	19 : "战袍",
	21 : "主手",
	22 : "副手",
	23 : "副手装备",
	24 : "发射物",
	25 : "投掷",
	28 : "遗物Relic"
};
var g_item_classes = {
	5 : "药剂",
	10 : "货币",
	12 : "任务",
	13 : "钥匙"
};
var g_item_subclasses = {
	0 : {
		0 : "消耗品",
		1 : "魔药",
		2 : "药剂",
		3 : "携带瓶",
		4 : "卷轴",
		5 : "食物饮品",
		6 : "永久强化",
		"-3": "临时强化",
		7 : "绷带",
		8 : "其它 (消耗品)"
	},
	1 : {
		0 : "背包",
		1 : "灵魂袋",
		2 : "草药袋",
		3 : "附魔包",
		4 : "工程包",
		5 : "宝石包",
		6 : "挖矿包",
		7 : "制皮包",
		8 : "铭文包"
	},
	2 : {
		0 : "单手斧",
		1 : "双手斧",
		2 : "弓",
		3 : "枪",
		4 : "单手锤",
		5 : "双手锤",
		6 : "长柄武器",
		7 : "单手剑",
		8 : "双手剑",
		10 : "法杖",
		13 : "拳套",
		14 : "多功能武器",
		15 : "匕首",
		16 : "投掷",
		18 : "十字弓",
		19 : "魔杖",
		20 : "鱼竿"
	},
	3 : {
		0 : "红宝石",
		1 : "蓝宝石",
		2 : "黄宝石",
		3 : "紫宝石",
		4 : "绿宝石",
		5 : "橘宝石",
		6 : "特殊宝石",
		7 : "朴素宝石",
		8 : "五彩宝石"
	},
	4 : {
		"-8": "衬衫",
		"-7": "战袍徽章",
		"-6": "斗篷披风",
		"-5": "副手装饰",
		"-4": "饰品",
		"-3": "护身符",
		"-2": "戒指",
		0 : "杂合护甲",
		1 : "布甲",
		2 : "皮甲",
		3 : "锁甲",
		4 : "板甲",
		6 : "护盾",
		7 : "圣契Libram",
		8 : "幻像Idol",
		9 : "图腾",
		10 : "印符Sigil"
	},
	6 : {
		2 : "箭矢",
		3 : "子弹"
	},
	7 : {
		1 : "零件Part",
		2 : "炸药",
		3 : "设备Device",
		4 : "珠宝",
		5 : "织布",
		6 : "制皮",
		7 : "金属与石材",
		8 : "肉",
		9 : "草药",
		10 : "元素",
		12 : "附魔",
		13 : "材料",
		14 : "防具强化",
		15 : "武器强化",
		11 : "其他交易品"
	},
	9 : {
		0 : "书",
		1 : "皮革加工图",
		2 : "裁缝图",
		3 : "工程图纸",
		4 : "锻造计划",
		5 : "烹饪配方",
		6 : "炼金配方",
		7 : "急救书",
		8 : "附魔公式",
		9 : "钓鱼书",
		10 : "珠宝加工设计"
	},
	11 : {
		2 : "箭袋",
		3 : "弹药袋"
	},
	15 : {
		"-7": "飞行坐骑",
		"-6": "战斗宠物",
		"-2": "Armor Token",
		0 : "废旧",
		1 : "药剂",
		2 : "小宠物",
		3 : "节日",
		4 : "其他杂项",
		5 : "骑乘"
	},
	16 : {
		6 : "死亡骑士雕像",
		11 : "德鲁伊雕像",
		3 : "猎人雕像",
		8 : "法师雕像",
		2 : "圣骑士雕像",
		5 : "牧师雕像",
		4 : "盗贼雕像",
		7 : "萨满雕像",
		9 : "术士雕像",
		1 : "战士雕像"
	}
};
var g_item_subsubclasses = {
	0 : {
		2 : {
			1 : "战斗药剂",
			2 : "守护药剂"
		}
	}
};
var g_itemset_types = {
	1 : "布匹",
	2 : "皮革",
	3 : "链甲",
	4 : "板甲",
	5 : "匕首",
	6 : "戒指",
	7 : "拳套",
	8 : "单手斧",
	9 : "单手锤",
	10 : "单手剑",
	11 : "配饰",
	12 : "护身符"
};
var g_itemset_notes = {
	1 : "地下城套装1",
	2 : "地下城套装2",
	14 : "地下城套装3",
	3 : "T1团队套装",
	4 : "T2团队套装",
	5 : "T3团队套装",
	12 : "T4团队套装",
	13 : "T5团队套装",
	18 : "T6团队套装",
	23 : "T7团队套装",
	25 : "T8团队套装",
	6 : "60级PVP稀有套装",
	7 : "60级PVP稀有套装(旧)",
	8 : "60级PVP史诗套装",
	16 : "70级PVP稀有套装",
	21 : "70级PVP稀有套装2",
	17 : "竞技场第一季套装",
	19 : "竞技场第二季套装",
	20 : "竞技场第三季套装",
	22 : "竞技场第四季套装",
	24 : "竞技场第五季套装",
	15 : "阿拉希盆地套装",
	9 : "安其拉废墟套装",
	10 : "安其拉神庙套装",
	11 : "祖尔格拉布套装"
};
var g_npc_classifications = {
	0 : "普通",
	1 : "精英",
	2 : "稀有精英",
	3 : "Boss",
	4 : "稀有"
};
var g_npc_types = {
	1 : "野兽",
	8 : "小动物",
	3 : "恶魔",
	4 : "元素",
	2 : "龙类",
	5 : "巨人",
	7 : "类人",
	9 : "机械",
	6 : "不死族",
	10 : "未知"
};
var g_pet_families = {
	1 : "狼",
	2 : "猫",
	3 : "蜘蛛",
	4 : "熊",
	5 : "野猪",
	6 : "鳄鱼",
	7 : "秃鹰",
	8 : "螃蟹",
	9 : "猩猩",
	11 : "迅猛龙",
	12 : "陆行鸟",
	20 : "蝎类",
	21 : "海龟",
	24 : "蝙蝠",
	25 : "土狼",
	26 : "食肉鸟",
	27 : "风蛇",
	30 : "龙鹰",
	31 : "劫掠者Ravager",
	32 : "蜥蜴",
	33 : "孢子蝙蝠Sporebat",
	34 : "虚空鳐",
	35 : "巨蛇Serpent",
	37 : "蛾子Moth",
	38 : "奇美拉",
	39 : "魔暴龙",
	41 : "异种蝎",
	42 : "虫子",
	43 : "犀牛",
	44 : "黄蜂",
	45 : "熔核猎犬Core Hound",
	46 : "灵魂兽Spirit Beast"
};
var g_pet_types = {
	0 : "凶残Ferocity",
	1 : "顽强Tenacity",
	2 : "狡猾Cunning"
};
var g_pet_foods = {
	1 : "肉类",
	2 : "鱼类",
	4 : "奶酪se",
	8 : "面包",
	16 : "菌类",
	32 : "水果",
	64 : "生肉",
	128 : "生鱼"
};
var g_object_types = {
	9 : "书",
	3 : "容器",
	"-5": "提箱",
	"-3": "草药",
	"-4": "矿脉",
	"-2": "任务"
};
var g_reputation_standings = {
	0 : "仇恨",
	1 : "敌对",
	2 : "冷淡",
	3 : "中立",
	4 : "友善",
	5 : "尊敬",
	6 : "崇拜",
	7 : "崇敬"
};
var g_quest_sorts = {
	1 : "史诗",
	22 : "季节",
	24 : "采药",
	25 : "所有战场",
	61 : "术士",
	81 : "战士",
	82 : "萨满",
	101 : "钓鱼",
	121 : "锻造",
	141 : "圣骑士",
	161 : "法师",
	162 : "盗贼",
	181 : "炼金",
	182 : "制皮",
	201 : "工程",
	221 : "藏宝图",
	241 : "银白联赛",
	261 : "猎人",
	262 : "牧师",
	263 : "德鲁伊",
	264 : "裁缝",
	284 : "专精",
	304 : "烹饪",
	324 : "急救",
	344 : "传说",
	364 : "暗月马戏团",
	365 : "安琪拉备战",
	366 : "元宵节",
	367 : "声望Reputation",
	368 : "天灾入侵",
	369 : "仲夏火焰节",
	370 : "美酒节",
	371 : "铭文Inscription",
	372 : "死亡骑士",
	373 : "珠宝加工",
	374 : "复活节",
	1001 : "冬幕节",
	1002 : "儿童周",
	1003 : "万圣节",
	1004 : "情人节",
	1005 : "收获节",
	1006 : "新年"
};
var g_quest_types = {
	0 : "普通",
	1 : "组队",
	81 : "地下城",
	62 : "团攻Raid",
	41 : "玩家对玩家PvP",
	82 : "世界事件",
	84 : "护送",
	85 : "英雄"
};
var g_sides = {
	1 : "联盟",
	2 : "部落",
	3 : "双方"
};
var g_sources = {
	1 : "制作Crafted",
	2 : "爆落",
	3 : "玩家对玩家PvP",
	4 : "任务",
	5 : "商店",
	6 : "训练",
	7 : "探索",
	8 : "救援Redemption",
	9 : "天赋",
	10 : "发起",
	11 : "事件",
	12 : "成就"
};
var g_sources_pvp = {
	1 : "竞技场",
	2 : "战场",
	4 : "世界"
};
var g_spell_resistances = {
	0 : "物理",
	1 : "神圣",
	2 : "火焰",
	3 : "自然",
	4 : "冰霜",
	5 : "暗影",
	6 : "奥术"
};
var g_spell_skills = {
	6 : "冰霜",
	8 : "火焰",
	26 : "武器",
	38 : "战斗",
	39 : "敏锐",
	40 : "魔药",
	43 : "剑",
	44 : "斧头",
	45 : "弓",
	46 : "枪",
	50 : "野兽支配",
	51 : "生存",
	54 : "钉锤",
	55 : "双手剑",
	56 : "神圣",
	78 : "暗影魔法",
	95 : "防御",
	98 : "普通",
	101 : "矮人",
	109 : "兽人",
	111 : "矮人",
	113 : "达纳苏斯人",
	115 : "牛头人",
	118 : "双持武器",
	124 : "牛头人",
	125 : "兽人",
	126 : "暗影精灵",
	129 : "急救",
	134 : "野性战斗",
	136 : "法杖Staves",
	137 : "萨拉斯",
	138 : "龙类",
	139 : "恶魔语言",
	140 : "泰坦",
	141 : "古语",
	142 : "生存",
	148 : "骑马术",
	149 : "骑狼术",
	150 : "骑虎术",
	152 : "骑羊术",
	155 : "游泳",
	160 : "双手锤",
	162 : "徒手",
	163 : "射击",
	164 : "锻造",
	165 : "制皮",
	171 : "炼金",
	172 : "双手斧",
	173 : "匕首",
	176 : "投掷",
	182 : "草药学",
	183 : "通用 (DND)",
	184 : "惩戒Retribution",
	185 : "烹饪",
	186 : "采矿",
	188 : "小鬼Imp",
	189 : "地狱犬Felhunter",
	197 : "裁缝",
	202 : "工程",
	203 : "蜘蛛",
	204 : "虚空行者Voidwalker",
	205 : "女妖Succubus",
	206 : "恶魔Infernal",
	207 : "末日守卫Doomguard",
	208 : "狼",
	209 : "猫",
	210 : "熊",
	211 : "野猪",
	212 : "鳄鱼",
	213 : "秃鹰Carrion Bird",
	214 : "螃蟹",
	215 : "大猩猩",
	217 : "迅猛龙",
	218 : "陆行鸟",
	220 : "不死",
	226 : "十字弓",
	228 : "权杖Wands",
	229 : "长柄武器",
	236 : "蝎子",
	237 : "奥术",
	251 : "海龟",
	253 : "刺杀",
	256 : "狂怒",
	257 : "保护",
	261 : "野兽训练",
	267 : "保护",
	270 : "通用",
	293 : "板甲",
	313 : "侏儒Gnomish",
	315 : "巨魔Troll",
	333 : "附魔",
	354 : "恶魔学识",
	355 : "痛苦",
	356 : "钓鱼",
	373 : "强化",
	374 : "恢复",
	375 : "元素战斗",
	393 : "剥皮",
	413 : "链甲",
	414 : "制皮",
	415 : "布甲Cloth",
	433 : "盾牌",
	473 : "拳套",
	533 : "骑迅猛龙",
	553 : "机械陆行鸟",
	554 : "骸骨战马",
	573 : "恢复",
	574 : "平衡",
	593 : "毁灭",
	594 : "圣神",
	613 : "惩戒",
	633 : "开锁",
	653 : "蝙蝠",
	654 : "土狼",
	655 : "食肉鸟",
	656 : "风蛇",
	673 : "亡灵语",
	713 : "骑科多兽",
	733 : "巨魔",
	753 : "侏儒",
	754 : "人类",
	755 : "珠宝加工",
	756 : "血精灵",
	758 : "远程控制",
	759 : "德莱尼",
	760 : "德莱尼",
	761 : "恶魔守卫Felguard",
	762 : "骑术",
	763 : "龙鹰",
	764 : "虚空鳐Nether Ray",
	765 : "孢子蝙蝠Sporebat",
	766 : "蜥蜴Warp Stalker",
	767 : "劫掠者Ravager",
	768 : "风蛇",
	769 : "内置Internal",
	770 : "鲜血",
	771 : "冰霜",
	772 : "邪恶",
	773 : "铭文",
	775 : "娥虫Moth",
	776 : "符文锻造",
	777 : "骑乘",
	778 : "伙伴",
	780 : "奇美拉Chimera",
	781 : "魔暴龙Devilsaur",
	782 : "食尸鬼",
	783 : "异种蝎Silithid",
	784 : "虫子Worm",
	785 : "黄蜂Wasp",
	786 : "犀牛Rhino",
	787 : "熔核猎犬Core Hound",
	788 : "灵魂兽Spirit Beast"
};
var g_zones = {
	1 : "丹莫罗",
	3 : "荒芜之地",
	4 : "诅咒之地",
	8 : "悲伤沼泽",
	9 : "北郡山谷",
	10 : "暮色森林",
	11 : "沼泽之地",
	12 : "艾尔文森林",
	14 : "杜隆塔尔",
	15 : "尘泥沼泽",
	16 : "艾萨拉",
	17 : "贫瘠之地",
	19 : "祖尔格拉布",
	24 : "北郡修道院",
	25 : "黑石山",
	28 : "西瘟疫之地",
	33 : "荆棘谷",
	35 : "藏宝海湾",
	36 : "奥特兰克山脉",
	38 : "洛克莫丹",
	40 : "西部荒野",
	41 : "逆风小径",
	44 : "赤脊山",
	45 : "阿拉希高地",
	46 : "燃烧平原",
	47 : "辛特兰",
	51 : "灼热峡谷",
	65 : "龙骨荒野",
	66 : "祖达克",
	67 : "风暴之颠",
	85 : "提瑞斯法林地",
	130 : "银松森林",
	131 : "卡拉诺斯",
	132 : "寒脊谷",
	133 : "诺莫瑞根",
	139 : "东瘟疫之地",
	141 : "泰达希尔",
	148 : "黑海岸",
	154 : "丧钟镇",
	188 : "影月谷",
	206 : "乌特加德要塞",
	209 : "影牙城堡",
	210 : "冰冠冰川",
	215 : "莫高雷",
	220 : "红云台地",
	221 : "那拉什营地",
	267 : "希尔斯布莱德丘陵",
	279 : "达拉然火山口",
	331 : "灰谷",
	357 : "菲拉斯",
	361 : "费伍德森林",
	363 : "试练谷",
	394 : "灰熊丘陵",
	400 : "千针石林",
	405 : "凄凉之地",
	406 : "石爪山脉",
	440 : "塔纳利斯",
	457 : "迷雾之海",
	490 : "安戈洛环形山",
	491 : "剃刀沼泽",
	493 : "月光林地",
	495 : "嚎风峡湾",
	618 : "冬泉谷",
	702 : "泰达希尔",
	717 : "暴风城监狱",
	718 : "哀号洞穴",
	719 : "黑暗深渊",
	722 : "剃刀高地",
	796 : "血色修道院",
	978 : "祖尔法拉克",
	1116 : "羽月要塞",
	1196 : "乌特加德之巅",
	1216 : "木喉要塞",
	1337 : "奥达曼",
	1377 : "希利苏斯",
	1417 : "沉没的神庙",
	1497 : "幽暗城",
	1519 : "暴风城",
	1537 : "铁炉堡",
	1581 : "死亡矿井",
	1583 : "黑石塔",
	1584 : "黑石深渊",
	1637 : "奥格瑞玛",
	1638 : "雷霆崖",
	1657 : "达纳苏斯",
	1941 : "时光之穴",
	2017 : "斯坦索姆",
	2057 : "通灵学院",
	2079 : "奥卡兹岛",
	2100 : "玛拉顿",
	2159 : "奥妮克希亚的巢穴",
	2257 : "矿道地铁",
	2366 : "黑色沼泽",
	2367 : "旧希尔斯布莱德丘陵",
	2437 : "莫格莱尼",
	2557 : "厄运之槌",
	2562 : "卡拉赞",
	2597 : "奥特兰克山谷",
	2677 : "黑翼之巢",
	2717 : "熔火之心",
	2817 : "晶歌森林",
	2917 : "传说大厅",
	2918 : "勇士大厅",
	3277 : "战歌峡谷",
	3358 : "阿拉希盆地",
	3428 : "安其拉神庙",
	3429 : "安其拉废墟",
	3430 : "永歌森林",
	3431 : "逐日岛",
	3433 : "幽魂之地",
	3456 : "纳克萨玛斯",
	3477 : "埃兹卓尼鲁布",
	3483 : "地狱火半岛",
	3487 : "银月城",
	3518 : "纳格兰",
	3519 : "泰罗卡森林",
	3520 : "影月谷",
	3521 : "赞加沼泽",
	3522 : "刀锋山",
	3523 : "虚空风暴",
	3524 : "秘蓝岛",
	3525 : "血雾岛",
	3526 : "埃门谷",
	3535 : "地狱火堡垒",
	3537 : "北风苔原",
	3557 : "埃索达",
	3562 : "地狱火城墙",
	3606 : "海加尔山",
	3607 : "毒蛇神殿洞穴",
	3618 : "戈鲁尔之巢",
	3679 : "斯克提斯",
	3688 : "奥金顿",
	3696 : "灰熊丘陵",
	3698 : "纳格兰竞技场",
	3702 : "刀锋山竞技场",
	3703 : "沙塔斯城",
	3711 : "索拉查盆地",
	3713 : "鲜血熔炉",
	3714 : "破碎大厅",
	3715 : "蒸汽地窟",
	3716 : "沼泽洞穴",
	3717 : "奴隶围栏",
	3789 : "暗影迷宫",
	3790 : "奥金尼地穴",
	3791 : "塞泰克大厅",
	3792 : "法力陵墓",
	3805 : "祖阿曼",
	3820 : "风暴之眼",
	3836 : "玛瑟里顿的巢穴",
	3840 : "黑暗神庙",
	3842 : "风暴之眼",
	3845 : "风暴要塞",
	3846 : "禁魔监狱",
	3847 : "生态船",
	3849 : "能量舰",
	3905 : "盘牙水库",
	3959 : "黑暗神庙",
	3968 : "洛丹伦废墟",
	4024 : "极寒之地",
	4075 : "太阳之井高地",
	4080 : "奎尔丹纳斯岛",
	4095 : "魔导师平台",
	4100 : "斯坦索姆的抉择",
	4120 : "魔枢",
	4196 : "达克萨伦要塞",
	4197 : "冬拥湖",
	4228 : "奥核之眼",
	4264 : "石之大厅",
	4272 : "雷光大厅",
	4273 : "奥杜尔",
	4298 : "血色领地",
	4375 : "刚达克",
	4378 : "达拉然竞技场",
	4384 : "远古海滩",
	4395 : "达拉然",
	4406 : "勇气竞技场",
	4415 : "紫罗兰堡",
	4493 : "黑曜石圣殿",
	4494 : "安卡赫特:古代王国",
	4500 : "永恒之眼",
	4603 : "阿尔卡冯的宝库",
	4710 : "征服之岛",
	4722 : "勇士的试炼",
	4723 : "十字军试炼",
	4742 : "赫鲁斯加台地"
};
var g_zone_categories = {
	0 : "东部王国",
	1 : "卡利姆多",
	8 : "外域",
	10 : "诺森德",
	2 : "地下城",
	3 : "团攻Raid",
	6 : "战场",
	9 : "竞技场"
};
var g_zone_instancetypes = {
	1 : "临时Transit",
	2 : "地下城",
	3 : "团攻Raid",
	4 : "战场",
	5 : "地下城",
	6 : "竞技场",
	7 : "团攻Raid"
};
var g_zone_territories = {
	0 : "联盟",
	1 : "部落",
	2 : "争夺中Contested",
	3 : "避难所Sanctuary",
	4 : "PvP"
};
var g_faction_categories = {
	469 : "联盟",
	891 : "联盟势力",
	1037 : "联盟前线Alliance Vanguard",
	1118 : "经典旧世Classic",
	67 : "部落",
	1052 : "部落远征Horde Expedition",
	892 : "部落势力",
	936 : "沙塔斯城",
	1117 : "索拉查盆地",
	169 : "热砂集团",
	980 : "燃烧远征",
	1097 : "巫妖王之怒",
	0 : "其它"
};
var g_achievement_categories = {
	81 : "光辉事迹Feats of Strength",
	92 : "通用",
	95 : "玩家对玩家",
	96 : "任务",
	97 : "探索",
	155 : "世界事件",
	156 : "冬幕节",
	158 : "万圣节",
	159 : "复活节",
	160 : "元宵节",
	161 : "仲夏火焰节",
	162 : "美酒节",
	163 : "儿童周",
	165 : "竞技场",
	168 : "地下城和团攻raid",
	169 : "专业",
	170 : "烹饪",
	171 : "钓鱼",
	172 : "急救",
	187 : "情人节",
	201 : "声望",
	14777 : "东部王国",
	14778 : "卡利姆多",
	14779 : "外域",
	14780 : "诺森德",
	14801 : "奥特兰克山谷",
	14802 : "阿拉希盆地",
	14803 : "风暴之眼",
	14804 : "战歌峡谷",
	14805 : "燃烧的远征",
	14806 : "巫妖王之怒",
	14808 : "经典旧世",
	14861 : "经典旧世",
	14862 : "燃烧的远征",
	14863 : "巫妖王之怒",
	14864 : "经典旧世",
	14865 : "燃烧的远征",
	14866 : "巫妖王之怒",
	14881 : "远古海滩",
	14901 : "冬拥湖",
	14921 : "巫妖王之怒英雄",
	14922 : "巫妖王之怒团攻Raid",
	14923 : "巫妖王之怒英雄团攻Raid",
	14941 : "银色锦标赛",
	14961 : "奥杜尔的秘密Raid",
	14962 : "奥杜尔的秘密英雄Raid"
};
var g_user_roles = {
	1 : "测试",
	2 : "管理",
	3 : "编辑",
	4 : "版主",
	5 : "官员",
	6 : "开发",
	7 : "VIP",
	8 : "博主"
};
var g_report_reasons = {
	0 : "Sticky Request",
	1 : "广告",
	2 : "下流恶俗Vulgar/Inappropriate",
	3 : "刷屏",
	4 : "其它"
};
var g_gem_colors = {
	1 : "金色Meta",
	2 : "红色",
	4 : "黄色",
	6 : "橘色",
	8 : "蓝色",
	10 : "紫色",
	12 : "绿色",
	14 : "五彩"
};
var g_socket_names = {
	1 : "金色槽Meta",
	2 : "红色槽",
	4 : "红色槽",
	8 : "蓝色槽",
	14 : "五槽"
};
var LANG = {
	comma: ", ",
	ellipsis: "...",
	dash: " " + String.fromCharCode(8211) + " ",
	hyphen: " - ",
	colon: ": ",
	qty: " ($1)",
	date_on: "on ",
	date_ago: "$1 之前ago",
	date_at: " 于at ",
	date_simple: "$2/$1/$3",
	abilities: "能力",
	armor: "护甲",
	author: "作者",
	battlegroup: "战场",
	category: "分类",
	classes: "职业",
	classs: "职业",
	cost: "花费",
	count: "计数",
	daily: "每日",
	damage: "破坏",
	diet: "饮食Diet",
	dps: "DPS",
	earned: "赢得",
	enchant: "强化",
	faction: "阵营",
	gains: "获得",
	gems: "宝石",
	gearscore: "工具",
	glyphtype: "雕文类型",
	group: "队伍",
	guild: "公会",
	guildleader: "公会首领",
	guildrank: "公会排名",
	health: "生命",
	instancetype: "副本类型",
	lastpost: "最后提交",
	level: "等级",
	location: "位置",
	losses: "损失",
	members: "成员",
	name: "名称",
	race: "种族",
	rankno: "等级 $1",
	rating: "评级",
	react: "抗性",
	realm: "王国Realm",
	reagents: "药剂",
	region: "地区",
	rep: "声望.",
	req: "需求.",
	reputation: "声望",
	rewards: "奖励",
	petfamily: "宠物种类",
	pieces: "片",
	points: "点",
	posted: "提交",
	preview: "预览",
	privateprofile: "私有",
	publicprofile: "公开",
	replies: "回复",
	school: "School",
	score: "得分",
	settings: "设置",
	side: "部落联盟",
	signout: "注销",
	sockets: "插槽",
	source: "来源",
	skill: "技能",
	skin: "皮肤",
	slot: "插槽",
	slots: "插槽",
	speed: "速度",
	stack: "堆叠",
	standing: "战立",
	stock: "Stock",
	subject: "主题",
	talents: "天赋",
	territory: "领土Territory",
	tp: "TP",
	type: "类别",
	views: "视图",
	userpage: "用户资料",
	wins: "胜利",
	male: "男性",
	female: "女性",
	source_zonedrop: "区域掉落Zone Drop",
	source_quests: "任务",
	source_vendors: "商铺",
	infobox_noneyet: "还没有 &ndash; $1!",
	infobox_submitone: "提交",
	infobox_showall: "全部显示 ($1)",
	lvcomment_add: "添加评论",
	lvcomment_sort: "排序: ",
	lvcomment_sortdate: "日期",
	lvcomment_sortrating: "评价最高",
	lvcomment_by: "依据 ",
	lvcomment_patch1: " (补丁 ",
	lvcomment_patch2: ")",
	lvcomment_show: "显示评论",
	lvcomment_hide: "隐藏评论",
	lvcomment_rating: "评分: ",
	lvcomment_lastedit: "最后修改人 ",
	lvcomment_nedits: "修改 $1 次",
	lvcomment_edit: "修改",
	lvcomment_delete: "删除",
	lvcomment_detach: "分离Detach",
	lvcomment_reply: "答复",
	lvcomment_report: "报告",
	lvcomment_reported: "已报告!",
	lvcomment_deleted: " (删除)",
	lvcomment_purged: " (净化Purged)",
	lvdrop_outof: "out of $1",
	lvitem_normal: " (N)",
	lvitem_heroic: " (H)",
	lvitem_vendorin: "供应商 ",
	lvitem_reqlevel: "需求. ",
	lvnpc_alliance: "A",
	lvnpc_horde: "H",
	lvquest_daily: "每日 $1",
	lvquest_pickone: "选中:",
	lvquest_alsoget: "也会取得:",
	lvquest_xp: "$1 XP",
	lvzone_xman: "$1-man",
	lvzone_xvx: "$1v$2",
	lvpet_exotic: "外来",
	lvpage_of: " of ",
	lvpage_first: " 首先Exotic",
	lvpage_previous: " 前一",
	lvpage_next: "下一 ",
	lvpage_last: "最后 ",
	lvscreenshot_submit: "提交截图。",
	lvscreenshot_from: "来自 ",
	lvscreenshot_hires: "视图",
	lvscreenshot_hires2: " 高分辨率版本($1x$2)。",
	lvnodata: "没有数据可显示。",
	lvnodata2: "没有找到匹配记录。",
	lvnodata_co1: "还没有人评论。",
	lvnodata_co2: "添加一个评论。",
	lvnodata_co3: "请登录再评论或者先注册。",
	lvnodata_ss1: "还没有屏幕提交截图。",
	lvnodata_ss2: "提交屏幕截图。",
	lvnodata_ss3: "请登录再提交或者先注册。",
	lvnote_tryfiltering: "筛选数据",
	lvnote_trynarrowing: "缩小搜索范围。",
	lvnote_itemsfound: "找到$1个装备，显示$2个。",
	lvnote_itemsetsfound: "找到$1个套装，显示$2个。",
	lvnote_npcsfound: "找到$1个NPC，显示$2个。",
	lvnote_objectsfound: "找到$1个对象，显示$2个。",
	lvnote_questsfound: "找到$1个任务，显示$2个。",
	lvnote_spellsfound: "找到$1个法术，显示$2个。",
	lvnote_zonesfound: "找到$1个区域,显示$2个。",
	lvnote_factionsfound: "找到$1个阵营，显示$2个。",
	lvnote_petsfound: "找到$1个宠物，显示$2个 。",
	lvnote_achievementsfound: "$1 成就找到，显示$2",
	lvnote_charactersfound: "$1 个角色",
	lvnote_charactersfound2: "共$1 个角色，$2 匹配。",
	lvnote_guildsfound: "共$1个公会t。",
	lvnote_guildsfound2: "共$1个公会，匹配$2个。",
	lvnote_arenateamsfound: "共$1个竞技团队。",
	lvnote_arenateamsfound2: "共$1个竞技团队，$2 匹配。",
	lvnote_createafilter: '<small><a href="$1">创建一个筛选条件</a></small>',
	lvnote_questgivers: '<small>View <a href="/zone-$1">查看任务发起</a> in <b>$2</b> &nbsp;<b>|</b>&nbsp; 筛选 <a href="?items&filter=cr=126;crs=$3;crv=0">任务奖励</a></small>',
	lvnote_allpets: '<small>所有宠物可学的 <a href="/spells--3.270">被动技能</a></small>',
	lvnote_zonequests: '<small>浏览 <a href="/quests-$1.$2">任务</a>  <b>$3</b> 分类 &nbsp;<b>|</b>&nbsp; 筛选 <a href="?items&filter=cr=126;crs=$4;crv=0">任务奖励quest rewards</a></small>',
	lvnote_crafteditems: '<small>筛选 <a href="?items&filter=cr=86;crs=$1;crv=0">精品装备</a></small>',
	lvnote_viewmoreslot: '<small>查看 <a href="?items$1&filter=$2">更多结果</a> for this slot</small>',
	lvnote_itemdisenchanting: "物品被分解 $1 次.",
	lvnote_itemdropsinnormalonly: "该物品只在普通难度副本掉落。",
	lvnote_itemdropsinheroiconly: "该物品只在英雄难度副本掉落。",
	lvnote_itemdropsinnormalheroic: "该物品在普通和英雄难度副本都掉落。",
	lvnote_itemmilling: "该草药已经被采摘$1次。",
	lvnote_itemopening: "该装备已经被打开了$1次。",
	lvnote_itemprospecting: "该矿物已经被开采了$1次。",
	lvnote_npcdrops: " NPC 已经被爆落了$1 次。",
	lvnote_npcdropsnormal: " NPC 已经被爆落了$1 次普通模式。",
	lvnote_npcdropsheroic: " NPC 已经被爆落了$1 次英雄模式。",
	lvnote_npcherbgathering: " NPC 已经被剥皮了$1 次。",
	lvnote_npcmining: " NPC 已经被剥皮和采矿了$1 次。",
	lvnote_npcpickpocketing: " NPC 已经被扒窃了$1 次。",
	lvnote_npcskinning: " NPC 已经被剥皮了$1次。",
	lvnote_objectherbgathering: "草药已经被采集了$1次。",
	lvnote_objectmining: "矿脉被开采了$1次。",
	lvnote_objectopening: "对象已经被打开$1次。",
	lvnote_objectopeningnormal: "对象在普通模式已经被打开$1次。",
	lvnote_objectopeningheroic: "对象在英雄模式已经被打开$1次。",
	lvnote_zonefishing: "该水域钓鱼了$1次。",
	lvnote_usercomments: "该用户提交了$1次评论。",
	lvnote_userscreenshots: "该用户提交了$1次屏幕截图。",
	lvnote_usertopics: "该用户提交了$1次主题。",
	lvnote_userreplies: "该用户提交了$1次回复。",
	button_compare: "比较",
	button_delete: "删除",
	button_deselect: "取消选择",
	button_makepriv: "变为私有",
	button_makepub: "变为公共",
	button_new: "新建",
	button_remove: "删除",
	button_resync: "同步",
	message_ajaxnotsupported: "请升级浏览器。需要支持 'Ajax'.",
	message_codenotentered: "没有输入内容。",
	message_cantdeletecomment: "无法删除，该评论因为负面原因已自动净化。",
	message_cantdetachcomment: "该评论已经被撤销。",
	message_commentdetached: "该评论撤销。",
	message_noscreenshot: "请选择屏幕截图上传。",
	message_forumposttooshort: "你提交为空！",
	message_commenttooshort: "你的评论至少10个字符，请提供详细描述。",
	message_descriptiontooshort: "你的评论至少10个字符，请提供详细描述。",
	message_ingamelink: "按下Shift点击鼠标放置链接到这个消息:$1。 ",
	message_entercurrpass: "请输入当前密码。",
	message_enternewpass: "请输入新密码。",
	message_newpassdifferent: "新密码必须和旧密码不同。",
	message_passwordsdonotmatch: "密码不匹配。",
	message_enternewemail: "请输入email地址。",
	message_newemaildifferent: "你的email地址必须不同于前面一个。",
	message_emailnotvalid: "email地址是无效的。",
	message_enterusername: "请输入用户名。",
	message_enterpassword: "请输入密码。",
	message_enteremail: "请输入email地址。",
	message_usernamenotvalid: "你的用户名只能包含字母和数字。",
	message_usernamemin: "用户名必须至少4个字符。",
	message_passwordmin: "密码至少6个字符。",
	message_invalidfilter: "非法筛选条件。",
	confirm_deletecomment: "真的要删除评论?",
	confirm_detachcomment: "真的要让这个评论单独出来？",
	confirm_commenttoolong: "评论超过$1字符将被截取。\n\n$2\n\n后内容将被截取，要继续吗?",
	confirm_descriptiontoolong: "描述超过$1字符将被截取。\n\n$2\n\n后内容将被截取，要继续吗?",
	confirm_forumposttoolong: "提交超过$1字符将被截取。\n\n$2\n\n后内容将被截取，要继续吗?",
	confirm_signaturetoolong: "签名长度超过$1字符将被截取。\n\n$2\n\n后内容将被截取，要继续吗?",
	confirm_signaturetoomanylines: "签名超过$1字符将被截取。要继续吗?",
	confirm_report: "真的要报告这个评论为$1？ ?",
	confirm_report2: "真的要报告这个评论为$1？?",
	confirm_addtosaved: "添加到你保存的对比中？ ?",
	prompt_customrating: "输入评分介于-$1 和 $2之间:",
	prompt_linkurl: "请输入URL地址:",
	prompt_ratinglevel: "请输入要等级，介于($1 - $2)。:",
	prompt_ingamelink: "复制粘贴下面内容到游戏聊天窗口:",
	prompt_colfilter1: "你可以为列$1设置筛选条件:\n\n",
	prompt_colfilter2: '例如“剑”:',
	prompt_colfilter3: '例如 ">100", "32-34" 或 "!<=10"',
	prompt_details: "请在下面提供详细:",
	prompt_gotopage: "请输入页码，介于($1 - $2)之间:",
	tooltip_dailyquest: "每天可以完成25个日常任务。",
	tooltip_extendedquestsearch: "检查目标和描述搜索选项。",
	tooltip_extendedspellsearch: "检查描述和buff搜索选项。",
	tooltip_extendedachievementsearch: "检查描述搜索选项。",
	tooltip_sellsfor: "销售$1。",
	tooltip_zonelink: "点击链接进入区域页面。",
	tooltip_combatrating: "$1&nbsp;@&nbsp;L$2",
	tooltip_armorbonus: "有$1奖励护甲。",
	tooltip_reqlevel: "需求等级。",
	tooltip_repgain: "声望获取。",
	tooltip_trainingpoints: "训练点。",
	tooltip_honorpoints: "荣誉点。",
	tooltip_arenapoints: "竞技点。",
	tooltip_achievementpoints: "成就点。",
	tooltip_customrating: "定制得分。",
	tooltip_uprate: "深刻和有趣。",
	tooltip_downrate: "贫乏多余。",
	tooltip_normal: "普通",
	tooltip_sticky: "Sticky",
	tooltip_pending: "等待",
	tooltip_totaldatauploads: "所有数据上传。",
	tooltip_totalratings: "所有评论的评分总和。",
	tooltip_avgmoneycontained: "平均资金包含",
	tooltip_avgmoneydropped: "平均爆落的钱。",
	tooltip_buyoutprice: "评价购买价格(AH)。",
	tooltip_reqenchanting: "需要附魔技能。",
	tooltip_reqinscription: "需要铭文技能。",
	tooltip_reqjewelcrafting: "需要珠宝加工技能。",
	tooltip_reqlockpicking: "需要开锁技能。",
	tooltip_partyloot: "当该装备掉落，每队成员只能获得1个。",
	tooltip_colfilter1: "筛选: $1",
	tooltip_colfilter2: "反转筛选: $1",
	tooltip_lvheader1: "点击排序",
	tooltip_lvheader2: "右键点击筛选",
	tooltip_lvheader3: "按下Shift点击筛选。",
	tooltip_loading: "加载...",
	tooltip_noresponse: "服务器没有响应。 :(",
	tooltip_itemnotfound: "装备没有找到 :(",
	tooltip_questnotfound: "任务没有找到 :(",
	tooltip_spellnotfound: "法术没有找到 :(",
	tooltip_achievementnotfound: "成就没有找到 :(",
	tooltip_captcha: "点击生成新的",
	tooltip_gotopage: "点击进入特点页",
	tooltip_achievementcomplete: "成就取得 $1 于 $2/$3/$4",
	tab_items: "装备",
	tab_itemsets: "套装",
	tab_npcs: "NPCs",
	tab_objects: "对象",
	tab_quests: "任务",
	tab_zones: "区域",
	tab_abilities: "能力",
	tab_talents: "天赋",
	tab_recipes: "食谱",
	tab_skills: "技能",
	tab_uncategorizedspells: "未分类法术",
	tab_factions: "阵营",
	tab_pets: "宠物",
	tab_achievements: "成就",
	tab_articles: "文章",
	tab_bosses: "Bosses",
	tab_canbeplacedin: "可以放在",
	tab_cancontain: "可包含",
	tab_characters: "角色",
	tab_comments: "评论",
	tab_commentsalkz: "AK评论AK",
	tab_containedin: "包含在",
	tab_contains: "包含",
	tab_createdby: "创建人",
	tab_criteriaof: "Criteria of",
	tab_currencyfor: "货币",
	tab_disenchantedfrom: "分解自",
	tab_disenchanting: "附魔",
	tab_droppedby: "掉落自",
	tab_drops: "掉落",
	tab_ends: "结束",
	tab_fishedin: "钓鱼地",
	tab_fishing: "钓鱼",
	tab_gallery: "画廊Gallery",
	tab_gatheredfrom: "采集自",
	tab_herbalism: "草药学",
	tab_heroicdrops: "英雄爆落",
	tab_latestcomments: "最新评论",
	tab_latestreplies: "最后回复",
	tab_latestscreenshots: "最后屏幕截图",
	tab_latesttopics: "最后主题",
	tab_members: "成员",
	tab_milledfrom: "切割自",
	tab_milling: "切割",
	tab_minedfrom: "采矿地",
	tab_mining: "采矿",
	tab_modifiedby: "修改人",
	tab_modifies: "修改",
	tab_normaldrops: "普通掉落",
	tab_objectiveof: "目标",
	tab_pickpocketedfrom: "扒窃自",
	tab_pickpocketing: "扒窃",
	tab_profiles: "档案",
	tab_prospectedfrom: "勘探自",
	tab_prospecting: "勘探",
	tab_providedfor: "提供自",
	tab_questrewards: "任务奖励",
	tab_reagentfor: "试剂",
	tab_replies: "回复",
	tab_rewardfrom: "奖励自",
	tab_samemodelas: "相同型号",
	tab_screenshots: "屏幕截图",
	tab_seealso: "参考",
	tab_sharedcooldown: "共享冷却",
	tab_skinnedfrom: "剥皮自",
	tab_skinning: "剥皮",
	tab_sells: "销售",
	tab_soldby: "销售自",
	tab_summonedby: "召唤自",
	tab_starts: "开始",
	tab_tameable: "可驯服",
	tab_taughtby: "教授自",
	tab_teaches: "教师",
	tab_toolfor: "工具",
	tab_topics: "主题",
	tab_triggeredby: "触发自",
	tab_unlocks: "解锁",
	tab_usedby: "用于",
	tab_addyourcomment: "添加评论",
	tab_submitascreenshot: "提交屏幕截图",
	mapper_tipzoom: "提示:点击地图缩放。",
	mapper_tippin: "提示:点击地图添加移除标注。",
	mapper_hidepins: "[隐藏标注]",
	mapper_showpins: "[显示标注]",
	showonmap: "显示在地图...",
	som_questgivers: "任务发起",
	markup_b: "粗体",
	markup_i: "斜体",
	markup_u: "下划线",
	markup_s: "删除线",
	markup_small: "小字体",
	markup_url: "链接",
	markup_quote: "引用框",
	markup_code: "输入框",
	markup_ul: "无序列表 (符号)",
	markup_ol: "有序列表 (数字)",
	markup_li: "列出装备",
	markup_said: "说:",
	compose_mode: "Mode:",
	compose_edit: "编辑",
	compose_preview: "预览",
	compose_livepreview: "在线预览",
	compose_save: "保存",
	compose_cancel: "取消",
	compose_limit: "超过$1角色。",
	compose_limit2: "超过$1角色，在线$2。",
	user_nodescription: "该用户还没有撰写过文字。",
	user_nodescription2: "你还没有撰写文字。",
	user_composeone: "现在就撰写!",
	user_editdescription: "编辑",
	myaccount_passmatch: "匹配密码",
	myaccount_passdontmatch: "密码不匹配",
	types: {
		1 : ["NPC", "NPC", "NPCs", "NPCs"],
		2 : ["对象", "object", "Objects", "objects"],
		3 : ["装备", "item", "Items", "items"],
		4 : ["套装", "item set", "Item Sets", "item sets"],
		5 : ["任务", "quest", "Quests", "quests"],
		6 : ["法术", "spell", "Spells", "spells"],
		7 : ["区域", "zone", "Zones", "zones"],
		8 : ["阵营", "faction", "Factions", "factions"],
		9 : ["宠物", "pet", "Pets", "pets"],
		10 : ["成就", "achievement", "Achievements", "achievements"]
	},
	timeunitssg: ["year", "month", "week", "day", "hour", "minute", "second"],
	timeunitspl: ["years", "months", "weeks", "days", "hours", "minutes", "seconds"],
	timeunitsab: ["yr", "mo", "wk", "", "hr", "min", "sec"],
	presets: {
		pve: "PvE",
		pvp: "PvP",
		afflic: "痛苦",
		arcane: "奥术",
		arms: "武器 (DPS)",
		assas: "刺杀",
		balance: "平衡 (DPS)",
		beast: "野兽支配",
		blooddps: "鲜血 (DPS)",
		combat: "战斗",
		demo: "恶魔学识",
		destro: "破坏",
		disc: "惩戒Discipline (Healing)",
		elem: "元素 (DPS)",
		enhance: "强化 (DPS)",
		feraldps: "野性 (DPS)",
		feraltank: "野性 (坦克)",
		fire: "火焰",
		frost: "冰霜",
		frostdps: "冰霜 (DPS)",
		frosttank: "冰霜 (坦克)",
		fury: "狂怒 (DPS)",
		generic: "通用",
		holy: "圣神 (Healing)",
		marks: "射击",
		prot: "防护 (坦克)",
		resto: "恢复 (Healing)",
		retrib: "惩戒 (DPS)",
		shadow: "暗影 (DPS)",
		subtle: "敏锐",
		surv: "生存",
		unholydps: "邪恶 (DPS)"
	},
	traits: {
		agi: ["敏捷", "Agi", "Agi"],
		arcres: ["澳抗", "Arcane Resist", "ArcR"],
		arcsplpwr: ["奥法能", "Arcane Power", "ArcP"],
		armor: ["护甲", "Armor", "Armor"],
		armorbonus: ["附近护甲", "Bonus Armor", "AddAr"],
		armorpenrtng: ["护甲穿透等级", "Armor Pen", "Pen"],
		atkpwr: ["攻击力", "AP", "AP"],
		avgbuyout: ["均价", "Buyout", "AH"],
		avgmoney: ["平均含金", "Money", "Money"],
		block: ["格挡值", "Block Value", "BkVal"],
		blockrtng: ["格挡率", "Block", "Block"],
		buyprice: ["买价 (铜)", "Buy", "Buy"],
		cooldown: ["冷却(秒)", "Cooldown", "CD"],
		critstrkrtng: ["爆击等级", "Crit", "Crit"],
		defrtng: ["防御等级", "Defense", "Def"],
		dmgmax1: ["最大伤害", "Max Damage", "Max"],
		dmgmin1: ["最小伤害", "Min Damage", "Min"],
		dodgertng: ["闪躲等级", "Dodge", "Dodge"],
		dps: ["秒伤", "DPS", "DPS"],
		dura: ["耐久", "Durability", "Dura"],
		exprtng: ["熟练等级", "Expertise", "Exp"],
		feratkpwr: ["野性攻击强度", "Feral AP", "FAP"],
		firres: ["火焰抗性", "Fire Resist", "FirR"],
		firsplpwr: ["火焰法术能", "Fire Power", "FireP"],
		frores: ["冰霜抗性", "Frost Resist", "FroR"],
		frosplpwr: ["冰霜法术能", "Frost Power", "FroP"],
		hastertng: ["命中率", "Haste", "Haste"],
		health: ["生命", "Health", "Hlth"],
		healthrgn: ["生命恢复", "HP5", "HP5"],
		hitrtng: ["命中等级", "Hit", "Hit"],
		holres: ["神圣抵抗", "Holy Resist", "HolR"],
		holsplpwr: ["神圣法术能", "Holy Power", "HolP"],
		"int": ["智力", "Int", "Int"],
		level: ["等级", "", "Lvl"],
		mana: ["蓝", "Mana", "Mana"],
		manargn: ["回蓝", "MP5", "MP5"],
		mleatkpwr: ["近战攻击力", "Melee AP", "AP"],
		mlecritstrkrtng: ["近战爆击等级", "Melee Crit", "Crit"],
		mledmgmax: ["近战最大伤害", "Melee max damage", "Max"],
		mledmgmin: ["近战最小伤害", "Melee min damage", "Min"],
		mledps: ["近战秒伤DPS", "Melee DPS", "DPS"],
		mlehastertng: ["近战急速等级", "Melee Haste", "Haste"],
		mlehitrtng: ["近战命中等级", "Melee Hit", "Hit"],
		mlespeed: ["近战速度", "Melee speed", "Speed"],
		natres: ["自然抗性", "Nature Resist", "NatR"],
		natsplpwr: ["自然法术能", "Nature Power", "NatP"],
		nsockets: ["插孔数量", "Sockets", "Sockt"],
		parryrtng: ["闪避等级", "Parry", "Parry"],
		reqarenartng: ["需要个人和团队竞技场等级", "", ""],
		reqlevel: ["需要等级", "", ""],
		reqskillrank: ["需要技能等级", "", ""],
		resirtng: ["韧性等级", "Resilience", "Resil"],
		rgdatkpwr: ["范围攻击力", "Ranged AP", "RAP"],
		rgdcritstrkrtng: ["远程爆击率", "Ranged Crit", "Crit"],
		rgddmgmax: ["远程最大伤害", "Ranged max damage", "Max"],
		rgddmgmin: ["远程最小伤害", "Ranged min damage", "Min"],
		rgddps: ["远程秒伤DPS", "Ranged DPS", "DPS"],
		rgdhastertng: ["远程加速等级", "Ranged Haste", "Haste"],
		rgdhitrtng: ["远程命中等级", "Ranged Hit", "Hit"],
		rgdspeed: ["远程速度", "Ranged speed", "Speed"],
		sellprice: ["销售价格(铜)", "Sell", "Sell"],
		sepbasestats: "基础统计",
		sepdefensivestats: "防御统计",
		sepgeneral: "通用",
		sepindividualstats: "独立统计",
		sepmisc: "杂项",
		sepoffensivestats: "攻击统计",
		sepresistances: "防御",
		sepweaponstats: "武器统计",
		shares: ["暗影防御", "Shadow Resist", "ShaR"],
		shasplpwr: ["暗影法术能", "Shadow Power", "ShaP"],
		speed: ["速度", "Speed", "Speed"],
		spi: ["精神", "Spi", "Spi"],
		splcritstrkrtng: ["法术爆击等级", "Spell Crit", "Crit"],
		spldmg: ["最终法伤", "Spell Damage", "Dmg"],
		splheal: ["法术治愈", "Healing", "Heal"],
		splpwr: ["法术能", "Spell Power", "SP"],
		splhastertng: ["法术急速等级", "Spell Haste", "Haste"],
		splhitrtng: ["法术命中等级", "Spell Hit", "Hit"],
		splpen: ["法术穿透", "Spell Pen", "Pen"],
		sta: ["精力", "Sta", "Sta"],
		str: ["力量", "Str", "Str"]
	}
};
