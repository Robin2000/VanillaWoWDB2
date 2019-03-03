<?php

require_once('includes/allitems.php');

// Названия аур
$spell_aura_names = array(
	0 => '无<i class="q0">[None]</i>',
	1 => '绑定视线<i class="q0">[Bind Sight]</i>',
	2 => '增强控制<i class="q0">[Mod Possess]</i>',
	3 => '周期伤害<i class="q0">[Periodic Damage]</i>',
	4 => '虚拟目的<i class="q0">[Dummy]</i>',
	5 => '增强迷惑<i class="q0">[Mod Confuse]</i>',
	6 => '增强<i class="q0">[Mod Charm]</i>',
	7 => '增强恐惧<i class="q0">[Mod Fear]</i>',
	8 => '周期治愈<i class="q0">[Periodic Heal]</i>',
	9 => '增强<i class="q0">[Mod Attack Speed]</i>',
	10 => '增强恐吓<i class="q0">[Mod Threat]</i>',
	11 => '嘲讽<i class="q0">[Taunt]</i>',
	12 => '打昏<i class="q0">[Stun]</i>',
	13 => '增强最终伤害<i class="q0">[Mod Damage Done]</i>',
	14 => '增强伤害量<i class="q0">[Mod Damage Taken]</i>',
	15 => '伤害护盾<i class="q0">[Damage Shield]</i>',
	16 => '增强潜行<i class="q0">[Mod Stealth]</i>',
	17 => '增强侦察<i class="q0">[Mod Detect]</i>',
	18 => '增强隐形<i class="q0">[Mod Invisibility]</i>',
	19 => '增强隐形检测<i class="q0">[Mod Invisibility Detection]</i>',
	20 => 'OBS增强智力<i class="q0">[OBS Mod Intellect]</i>',
	21 => 'OBS增强精神<i class="q0">[OBS Mod Spirit]</i>',
	22 => '增强抗性<i class="q0">[Mod Resistance]</i>',
	23 => '周期触发<i class="q0">[Periodic Trigger]</i>',
	24 => '周期激励<i class="q0">[Periodic Energize]</i>',
	25 => '安抚<i class="q0">[Pacify]</i>',
	26 => '定身<i class="q0">[Root]</i>',
	27 => '沉默<i class="q0">[Silence]</i>',
	28 => '反射法术百分比<i class="q0">[Reflect Spells %]</i>',
	29 => '增强状态<i class="q0">[Mod Stat]</i>',
	30 => '增强技能<i class="q0">[Mod Skill]</i>',
	31 => '增强速度<i class="q0">[Mod Speed]</i>',
	32 => '增强骑速<i class="q0">[Mod Speed Mounted]</i>',
	33 => '增强降速效果<i class="q0">[Mod Speed Slow]</i>',
	34 => '增强加血效果<i class="q0">[Mod Increase Health]</i>',
	35 => '增强加能量效果<i class="q0">[Mod Increase Energy]</i>',
	36 => '变形<i class="q0">[Shapeshift]</i>',
	37 => '免影响<i class="q0">[Immune Effect]</i>',
	38 => '免状态<i class="q0">[Immune State]</i>',
	39 => '免法系<i class="q0">[Immune School]</i>',
	40 => '免伤害<i class="q0">[Immune Damage]</i>',
	41 => '免消耗类型<i class="q0">[Immune Dispel Type]</i>',
	42 => '触发法术<i class="q0">[Proc Trigger Spell]</i>',
	43 => '触发伤害<i class="q0">[Proc Trigger Damage]</i>',
	44 => '跟踪生物<i class="q0">[Track Creatures]</i>',
	45 => '跟踪资源<i class="q0">[Track Resources]</i>',
	46 => '增强格挡<i class="q0">[Mod Parry Skill]</i>',
	47 => '增强格挡百分比<i class="q0">[Mod Parry Percent]</i>',
	48 => '增强闪躲<i class="q0">[Mod Dodge Skill]</i>',
	49 => '增强闪躲百分比<i class="q0">[Mod Dodge Percent]</i>',
	50 => '增强打断<i class="q0">[Mod Block Skill]</i>',
	51 => '增强打断百分比<i class="q0">[Mod Block Percent]</i>',
	52 => '增强暴击百分比<i class="q0">[Mod Crit Percent]</i>',
	53 => '周期吸血<i class="q0">[Periodic Leech]</i>',
	54 => '增强命中几率<i class="q0">[Mod Hit Chance]</i>',
	55 => '增强法术命中几率<i class="q0">[Mod Spell Hit Chance]</i>',
	56 => '转变<i class="q0">[Transform]</i>',
	57 => '增强暴击率<i class="q0">[Mod Spell Crit Chance]</i>',
	58 => '增强游泳速度<i class="q0">[Mod Speed Swim]</i>',
	59 => '增强生物最终伤害<i class="q0">[Mod Creature Dmg Done]</i>',
	60 => '安抚&沉默<i class="q0">[Pacify & Silence]</i>',
	61 => '修改尺寸<i class="q0">[Mod Scale]</i>',
	62 => '周期生命通道<i class="q0">[Periodic Health Funnel]</i>',
	63 => '周期法力通道<i class="q0">[Periodic Mana Funnel]</i>',
	64 => '周期回蓝吸血<i class="q0">[Periodic Mana Leech]</i>',
	65 => '急速<i class="q0">[Haste - Spells]</i>',
	66 => '假死<i class="q0">[Feign Death]</i>',
	67 => '缴械<i class="q0">[Disarm]</i>',
	68 => '增强追踪<i class="q0">[Mod Stalked]</i>',
	69 => '群体吸收<i class="q0">[School Absorb]</i>',
	70 => '额外攻击<i class="q0">[Extra Attacks]</i>',
	71 => '增强群体法术暴击几率<i class="q0">[Mod School Spell Crit Chance]</i>',
	72 => '增强能量消耗<i class="q0">[Mod Power Cost]</i>',
	73 => '增强群体能量消耗<i class="q0">[Mod School Power Cost]</i>',
	74 => '反射群体法术百分比<i class="q0">[Reflect School Spells %]</i>',
	75 => '增强语言<i class="q0">[Mod Language]</i>',
	76 => '远视<i class="q0">[Far Sight]</i>',
	77 => '免器械伤害<i class="q0">[Immune Mechanic]</i>',
	78 => '骑乘<i class="q0">[Mounted]</i>',
	79 => '增强百分比伤害<i class="q0">[Mod Dmg %]</i>',
	80 => '增强指标百分比<i class="q0">[Mod Stat %]</i>',
	81 => '分裂伤害<i class="q0">[Split Damage]</i>',
	82 => '水下呼吸<i class="q0">[Water Breathing]</i>',
	83 => '增强基础抗性<i class="q0">[Mod Base Resistance]</i>',
	84 => '增强回血<i class="q0">[Mod Health Regen]</i>',
	85 => '增强恢复能量<i class="q0">[Mod Power Regen]</i>',
	86 => '创建死亡道具<i class="q0">[Create Death Item]</i>',
	87 => '增强伤害百分比<i class="q0">[Mod Dmg % Taken]</i>',
	88 => '增强回血百分比<i class="q0">[Mod Health Regen Percent]</i>',
	89 => '周期伤害百分比<i class="q0">[Periodic Damage Percent]</i>',
	90 => '增强抵抗机会<i class="q0">[Mod Resist Chance]</i>',
	91 => '增强侦察范围<i class="q0">[Mod Detect Range]</i>',
	92 => '防止逃跑<i class="q0">[Prevent Fleeing]</i>',
	93 => '增强无法交互<i class="q0">[Mod Uninteractible]</i>',
	94 => '中断恢复<i class="q0">[Interrupt Regen]</i>',
	95 => '灵魂<i class="q0">[Ghost]</i>',
	96 => '磁铁法术<i class="q0">[Spell Magnet]</i>',
	97 => '法力护盾<i class="q0">[Mana Shield]</i>',
	98 => '增强天赋技能<i class="q0">[Mod Skill Talent]</i>',
	99 => '增强攻击力<i class="q0">[Mod Attack Power]</i>',
	100 => '光环可见<i class="q0">[Auras Visible]</i>',
	101 => '增强抗性百分比<i class="q0">[Mod Resistance %]</i>',
	102 => '增强生物攻击力<i class="q0">[Mod Creature Attack Power]</i>',
	103 => '增强总威胁(渐隐)<i class="q0">[Mod Total Threat (Fade)]</i>',
	104 => '<i class="q0">[水中行走]</i>Water Walk',
	105 => '缓落<i class="q0">[Feather Fall]</i>',
	106 => '悬浮<i class="q0">[Hover]</i>',
	107 => '添加板甲修饰<i class="q0">[Add Flat Modifier]</i>',
	108 => '添加百分比修饰<i class="q0">[Add % Modifier]</i>',
	109 => '添加目标职业触发<i class="q0">[Add Class Target Trigger]</i>',
	110 => '增强能量恢复百分比<i class="q0">[Mod Power Regen %]</i>',
	111 => '添加施法职业命中触发<i class="q0">[Add Class Caster Hit Trigger]</i>',
	112 => '覆盖职业脚本<i class="q0">[Override Class Scripts]</i>',
	113 => '增强范围伤害取得<i class="q0">[Mod Ranged Dmg Taken]</i>',
	114 => '增强范围伤害取得百分比<i class="q0">[Mod Ranged % Dmg Taken]</i>',
	115 => '增强治愈<i class="q0">[Mod Healing]</i>',
	116 => '战斗中恢复<i class="q0">[Regen During Combat]</i>',
	117 => '增强器械抗性<i class="q0">[Mod Mechanic Resistance]</i>',
	118 => '增强治愈百分比<i class="q0">[Mod Healing %]</i>',
	119 => '共享宠物跟踪<i class="q0">[Share Pet Tracking]</i>',
	120 => '不可攻击<i class="q0">[Untrackable]</i>',
	121 => '共享(知识，无论什么)<i class="q0">[Empathy (Lore, whatever)]</i>',
	122 => '增强副手伤害百分比<i class="q0">[Mod Offhand Dmg %]</i>',
	123 => '增强能量消耗百分比<i class="q0">[Mod Power Cost %]</i>',
	124 => '增强范围攻击能量<i class="q0">[Mod Ranged Attack Power]</i>',
	125 => '增强近战伤害取得<i class="q0">[Mod Melee Dmg Taken]</i>',
	126 => '增强近战伤害取得百分比<i class="q0">[Mod Melee % Dmg Taken]</i>',
	127 => '远程攻击力奖励<i class="q0">[Rngd Atk Pwr Attckr Bonus]</i>',
	128 => '增强控制宠物<i class="q0">[Mod Possess Pet]</i>',
	129 => '增强速度<i class="q0">[Mod Speed Always]</i>',
	130 => '增强骑乘速度<i class="q0">[Mod Mounted Speed Always]</i>',
	131 => '增强生物远程攻击力<i class="q0">[Mod Creature Ranged Attack Power]</i>',
	132 => '增强能量提升百分比<i class="q0">[Mod Increase Energy %]</i>',
	133 => '增强最大生命百分比<i class="q0">[Mod Max Health %]</i>',
	134 => '增强法力恢复的中断<i class="q0">[Mod Interrupted Mana Regen]</i>',
	135 => '增强治愈完成<i class="q0">[Mod Healing Done]</i>',
	136 => '增强治愈完成百分比<i class="q0">[Mod Healing Done %]</i>',
	137 => '增强总状态百分比<i class="q0">[Mod Total Stat %]</i>',
	138 => '近战加速<i class="q0">[Haste - Melee]</i>',
	139 => '强制反应<i class="q0">[Force Reaction]</i>',
	140 => '远程加速<i class="q0">[Haste - Ranged]</i>',
	141 => '远程加速(仅子弹)<i class="q0">[Haste - Ranged (Ammo Only)]</i>',
	142 => '增强基础抗性百分比<i class="q0">[Mod Base Resistance %]</i>',
	143 => '增强单项抗性<i class="q0">[Mod Resistance Exclusive]</i>',
	144 => '安全坠落<i class="q0">[Safe Fall]</i>',
	145 => '魅力<i class="q0">[Charisma]</i>',
	146 => '说服<i class="q0">[Persuaded]</i>',
	147 => '增加生物免疫<i class="q0">[Add Creature Immunity]</i>',
	148 => '保留战斗点<i class="q0">[Retain Combo Points]</i>',
	186 => '增强攻击着法术命中几率<i class="q0">[Mod Attacker Spell Hit Chance]</i>',
	199 => '增强法术命中几率<i class="q0">[Mod Spell Hit Chance]</i>'
);

// Названия эффектов спеллов
$spell_effect_names = array(
	0 => '无<i class="q0">[None]</i>',
	1 => '秒杀<i class="q0">[Instakill]</i>',
	2 => '群体伤害<i class="q0">[School Damage]</i>',
	3 => '虚拟<i class="q0">[Dummy]</i>',
	4 => '传送门<i class="q0">[Portal Teleport]</i>',
	5 => '传送单位<i class="q0">[Teleport Units]</i>',
	6 => '应用光环<i class="q0">[Apply Aura]</i>',
	7 => '环境伤害<i class="q0">[Environmental Damage]</i>',
	8 => '能量耗尽<i class="q0">[Power Drain]</i>',
	9 => '治愈吸血<i class="q0">[Health Leech]</i>',
	10 => '治愈<i class="q0">[Heal]</i>',
	11 => '绑定<i class="q0">[Bind]</i>',
	12 => '门<i class="q0">[Portal]</i>',
	13 => '基础仪式<i class="q0">[Ritual Base]</i>',
	14 => '特殊仪式<i class="q0">[Ritual Specialize]</i>',
	15 => '开门仪式<i class="q0">[Ritual Activate Portal]</i>',
	16 => '任务完成<i class="q0">[Quest Complete]</i>',
	17 => '武器单体伤害<i class="q0">[Weapon Damage + noschool]</i>',
	18 => '复活<i class="q0">[Resurrect]</i>',
	19 => '额外攻击<i class="q0">[Extra Attacks]</i>',
	20 => '闪避<i class="q0">[Dodge]</i>',
	21 => '逃<i class="q0">[Evade]</i>',
	22 => '格挡<i class="q0">[Parry]</i>',
	23 => '打断<i class="q0">[Block]</i>',
	24 => '创建道具<i class="q0">[Create Item]</i>',
	25 => '武器<i class="q0">[Weapon]</i>',
	26 => '防御<i class="q0">[Defense]</i>',
	27 =>'持续区域光环<i class="q0">[Persistent Area Aura]</i>',
	28 => '召唤<i class="q0">[Summon]</i>',
	29 => '跳跃<i class="q0">[Leap]</i>',
	30 => '供能<i class="q0">[Energize]</i>',
	31 => '武器百分比伤害<i class="q0">[Weapon % Dmg]</i>',
	32 => '触发飞弹<i class="q0">[Trigger Missile]</i>',
	33 => '开锁<i class="q0">[Open Lock]</i>',
	34 => '改造道具<i class="q0">[Transform Item]</i>',
	35 => '应用区域光环<i class="q0">[Apply Area Aura]</i>',
	36 => '学习法术<i class="q0">[Learn Spell]</i>',
	37 => '法术防御<i class="q0">[Spell Defense]</i>',
	38 => '消耗<i class="q0">[Dispel]</i>',
	39 => '语言<i class="q0">[Language]</i>',
	40 => '双持<i class="q0">[Dual Wield]</i>',
	41 => '召唤野兽<i class="q0">[Summon Wild]</i>',
	42 => '召唤守卫<i class="q0">[Summon Guardian]</i>',
	43 => '召唤敌对玩家<i class="q0">[Summon Enemy Player]</i>',
	44 => '技能步骤<i class="q0">[Skill Step]</i>',
	45 => '增加荣誉<i class="q0">[Add Honor]</i>',
	46 => '产生<i class="q0">[Spawn]</i>',
	47 => '施法界面<i class="q0">[Spell Cast UI]</i>',
	48 => '潜行<i class="q0">[Stealth]</i>',
	49 => '侦察<i class="q0">[Detect]</i>',
	50 => '召唤对象<i class="q0">[Summon Object]</i>',
	51 => '强制暴击<i class="q0">[Force Critical Hit]</i>',
	52 => '确保命中<i class="q0">[Guarantee Hit]</i>',
	53 => '永久附魔道具<i class="q0">[Enchant Item Permanent]</i>',
	54 => '临时附魔道具<i class="q0">[Enchant Item Temporary]</i>',
	55 => '驯服生物<i class="q0">[Tame Creature]</i>',
	56 => '召唤宠物<i class="q0">[Summon Pet]</i>',
	57 => '学习宠物法术<i class="q0">[Learn Pet Spell]</i>',
	58 => '增加武器伤害<i class="q0">[Weapon Damage +]</i>',
	59 => '打开道具锁<i class="q0">[Open Lock Item]</i>',
	60 => '专精<i class="q0">[Proficiency]</i>',
	61 => '发送事件<i class="q0">[Send Event]</i>',
	62 => '能量燃烧<i class="q0">[Power Burn]</i>',
	63 => '恐吓<i class="q0">[Threat]</i>',
	64 => '触发法术<i class="q0">[Trigger Spell]</i>',
	65 => '生命通道<i class="q0">[Health Funnel]</i>',
	66 => '法力通道<i class="q0">[Power Funnel]</i>',
	67 => '治愈最大生命<i class="q0">[Heal Max Health]</i>',
	68 => '中断施法<i class="q0">[Interrupt Cast]</i>',
	69 => '扰乱<i class="q0">[Distract]</i>',
	70 => '磁力<i class="q0">[Pull]</i>',
	71 => '扒窃<i class="q0">[Pickpocket]</i>',
	72 => '添加远视<i class="q0">[Add Farsight]</i>',
	73 => '召唤被控制的<i class="q0">[Summon Possessed]</i>',
	74 => '召唤图腾<i class="q0">[Summon Totem]</i>',
	75 => '治愈机制<i class="q0">[Heal Mechanical]</i>',
	76 => '召唤野性对象<i class="q0">[Summon Object Wild]</i>',
	77 => '脚本效果<i class="q0">[Script Effect]</i>',
	78 => '攻击<i class="q0">[Attack]</i>',
	79 => '庇护<i class="q0">[Sanctuary]</i>',
	80 => '增加战斗点<i class="q0">[Add Combo Points]</i>',
	81 => '创建房子<i class="q0">[Create House]</i>',
	82 => '绑定视线<i class="q0">[Bind Sight]</i>',
	83 => '决斗<i class="q0">[Duel]</i>',
	84 => '打晕<i class="q0">[Stuck]</i>',
	85 => '召唤玩家<i class="q0">[Summon Player]</i>',
	86 => '激活对象<i class="q0">[Activate Object]</i>',
	87 => '召唤图腾槽1<i class="q0">[Summon Totem slot 1]</i>',
	88 => '召唤图腾槽2<i class="q0">[Summon Totem slot 2]</i>',
	89 => '召唤图腾槽3<i class="q0">[Summon Totem slot 3]</i>',
	90 => '召唤图腾槽4<i class="q0">[Summon Totem slot 4]</i>',
	91 => '恐吓全体<i class="q0">[Threat All]</i>',
	92 => '附魔手持道具<i class="q0">[Enchant Held Item]</i>',
	93 => '召唤幽灵<i class="q0">[Summon Phantasm]</i>',
	94 => '自我复活<i class="q0">[Self Resurrect]</i>',
	95 => '剥皮<i class="q0">[Skinning]</i>',
	96 => '冲锋<i class="q0">[Charge]</i>',
	97 => '召唤小动物<i class="q0">[Summon Critter]</i>',
	98 => '击退<i class="q0">[Knock Back]</i>',
	99 => '分解<i class="q0">[Disenchant]</i>',
	100 => '醉酒<i class="q0">[Inebriate]</i>',
	101 => '喂养宠物<i class="q0">[Feed Pet]</i>',
	102 => '解散宠物<i class="q0">[Dismiss Pet]</i>',
	103 => '声望<i class="q0">[Reputation]</i>',
	104 => '召唤对象槽1<i class="q0">[Summon Object slot 1]</i>',
	105 => '召唤对象槽2<i class="q0">[Summon Object slot 2]</i>',
	106 => '召唤对象槽3<i class="q0">[Summon Object slot 3]</i>',
	107 => '召唤对象槽4<i class="q0">[Summon Object slot 4]</i>',
	108 => '驱散机械<i class="q0">[Dispel Mechanic]</i>',
	109 => '召唤死亡宠物<i class="q0">[Summon Dead Pet]</i>',
	110 => '摧毁所有图腾<i class="q0">[Destroy All Totems]</i>',
	111 => '持续伤害<i class="q0">[Durability Damage]</i>',
	112 => '召唤恶魔<i class="q0">[Summon Demon]</i>',
	113 => '复活板?<i class="q0">[Resurrect Flat]</i>',
	114 => '嘲讽<i class="q0">[Taunt]</i>',
	115 => '持续伤害<i class="q0">[Durability Damage]</i>',
	116 => '移除徽记<i class="q0">[Remove Insignia]</i>',
	117 => '灵魂治疗<i class="q0">[Spirit Heal]</i>',
	118 => '技能需求<i class="q0">[Require Skill]</i>',
	119 => '应用宠物光环<i class="q0">[Apply Pet Aura]</i>',
	120 => '墓地传送<i class="q0">[Graveyard Teleport]</i>',
	121 => '普通武器伤害<i class="q0">[Normalized Weapon Damage +]</i>',

	123 => '脚本事件<i class="q0">[Scripted Event]</i>',
	124 => '拖拉玩家<i class="q0">[Player Pull]</i>',
	125 => '减少威胁百分比<i class="q0">[Reduce Threat %]</i>',
	126 => '偷取有益增益魔法<i class="q0">[Steal Beneficial Buff Magic]</i>',
	127 => '需要铁矿石<i class="q0">[Require Ore]</i>',
	128 => '应用状态光环<i class="q0">[Apply Stat Aura]</i>',
	129 => '应用状态光环百分比<i class="q0">[Apply Stat Aura %]</i>',

	133 => '撤销专精[Unlearn Profession Specialization]</i>',
);

$pet_skill_categories = array(
270, 653, 210, 655, 211, 213, 209, 780, 787, 214, 212, 781, 763, 215, 654, 775, 764, 217, 767, 786, 236, 768, 783, 203, 788, 765, 218, 251, 766, 785, 656, 208, 784, 761, 189, 188, 205, 204, 782
);

$spell_cols[0] = array('spellID', 'iconname', 'effect1itemtype', 'effect1Aura');
$spell_cols[1] = array('spellID', 'iconname', 'tooltip_loc'.$_SESSION['locale'], 'spellname_loc'.$_SESSION['locale'], 'rank_loc'.$_SESSION['locale'], 'rangeID', 'manacost', 'manacostpercent', 'spellcasttimesID', 'cooldown', 'tool1', 'tool2', 'reagent1', 'reagent2', 'reagent3', 'reagent4', 'reagent5', 'reagent6', 'reagent7', 'reagent8', 'effect1BasePoints', 'effect2BasePoints', 'effect3BasePoints', 'effect1Amplitude', 'effect2Amplitude', 'effect3Amplitude', 'effect1DieSides', 'effect2DieSides', 'effect3DieSides', 'effect1ChainTarget', 'effect2ChainTarget', 'effect3ChainTarget', 'reagentcount1', 'reagentcount2', 'reagentcount3', 'reagentcount4', 'reagentcount5', 'reagentcount6', 'reagentcount7', 'reagentcount8', 'effect1radius', 'effect2radius', 'effect3radius', 'effect1MiscValue', 'effect2MiscValue', 'effect3MiscValue', 'ChannelInterruptFlags', 'procChance', 'procCharges', 'effect_1_proc_chance', 'effect_2_proc_chance', 'effect_3_proc_chance', 'effect1itemtype', 'effect1Aura', 'spellTargets', 'dmg_multiplier1', 'durationID');
$spell_cols[2] = array('spellname_loc'.$_SESSION['locale'], 'rank_loc'.$_SESSION['locale'], 'levelspell', 'resistancesID', 'effect1itemtype', 'effect2itemtype', 'effect3itemtype', 'effect1BasePoints', 'effect2BasePoints', 'effect3BasePoints', 'reagent1', 'reagent2', 'reagent3', 'reagent4', 'reagent5', 'reagent6', 'reagent7', 'reagent8', 'reagentcount1', 'reagentcount2', 'reagentcount3', 'reagentcount4', 'reagentcount5', 'reagentcount6', 'reagentcount7', 'reagentcount8', 'iconname', 'effect1Aura', 'effect2Aura', 'effect3Aura');

function spell_duration($base)
{
	return round($base/1000).(($_SESSION['locale']==4)?'秒':' sec');
}

function spell_desc($spellid, $type='tooltip')
{
	global $DB;
	global $spell_cols;
	// Не включать spellduration сюда!!! Не у всех спеллов он установлен корректно.
	$spellRow = $DB->selectRow('
		SELECT ?#
		FROM ?_spell s, ?_spellicons
		WHERE
			spellID = ?
			AND id = spellicon
		LIMIT 1
		',
		$spell_cols[1],
		$spellid
	);
	return spell_desc2($spellRow, $type);
}

function spell_desc2($spellRow, $type='tooltip')
{
	global $DB;

	allspellsinfo2($spellRow);

	if(isset($spellRow['durationBase']))
		$lastduration = array('durationBase' => $spellRow['durationBase']);
	else
		$lastduration = $DB->selectRow('SELECT * FROM ?_spellduration WHERE durationID = ? LIMIT 1', $spellRow['durationID']);

	$signs = array('+', '-', '/', '*', '%', '^');

	$data = $spellRow[$type.'_loc'.$_SESSION['locale']];

	if(!$data && $type == 'tooltip')
		return '_empty_';

	$pos = 0;
	$str = '';
	while(false!==($npos=strpos($data, '$', $pos)))
	{
		if($npos!=$pos)
			$str .= substr($data, $pos, $npos-$pos);
		$pos = $npos+1;

		if('$' == substr($data, $pos, 1))
		{
			$str .= '$';
			$pos++;
			continue;
		}

		if(!preg_match('/^((([+\-\/*])(\d+);)?(\d*)(?:([lg].*?:.*?);|(\w\d*)))/', substr($data, $pos), $result))
			continue;

		if(empty($exprData[0]))
			$exprData[0] = 1;

		$op = $result[3];
		$oparg = $result[4];
		$lookup = $result[5];
		$var = $result[6] ? $result[6] : $result[7];
		$pos += strlen($result[0]);

		if(!$var)
			continue;

		$exprType = strtolower(substr($var, 0, 1));
		$exprData = explode(':', substr($var, 1));
		switch($exprType)
		{
			case 'r':
				if(!IsSet($spellRow['rangeMax']))
					$spellRow = array_merge($spellRow, $DB->selectRow('SELECT * FROM ?_spellrange WHERE rangeID=? LIMIT 1', $spellRow['rangeID']));

				$base = $spellRow['rangeMax'];

				if($op && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= $base;
				break;
			case 'z':
				$str .= '&lt;Home&gt;';
				break;
			case 'c':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT effect'.$exprData[0].'BasePoints FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				$base = $spell['effect'.$exprData[0].'BasePoints']+1;

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}

				$str .= $base;
				$lastvalue = $base;
				break;
			case 's':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT effect'.$exprData[0].'BasePoints, effect'.$exprData[0].'DieSides FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				if(!$exprData[0]) $exprData[0]=1;
					@$base = $spell['effect'.$exprData[0].'BasePoints']+1;

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}

				@$str .= abs($base).($spell['effect'.$exprData[0].'DieSides'] > 1 ? LOCALE_VALUE_DELIM.abs(($base+$spell['effect'.$exprData[0].'DieSides'])) : '');
				$lastvalue = $base;
				break;
			case 'o':
				if($lookup > 0 && $exprData[0])
				{
					$spell = $DB->selectRow('SELECT effect'.$exprData[0].'BasePoints, effect'.$exprData[0].'Amplitude, effect'.$exprData[0].'DieSides FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
					$lastduration = $DB->selectRow('SELECT * FROM ?_spellduration WHERE durationID=? LIMIT 1', $spell['durationID']);
				}
				else
					$spell = $spellRow;

				if(!$exprData[0]) $exprData[0] = 1;
				$base = $spell['effect'.$exprData[0].'BasePoints']+1;

				if($spell['effect'.$exprData[0].'Amplitude'] <= 0) $spell['effect'.$exprData[0].'Amplitude'] = 5000;

				$str .= (($lastduration['durationBase'] / $spell['effect'.$exprData[0].'Amplitude']) * abs($base).($spell['effect'.$exprData[0].'DieSides'] > 1 ? '-'.abs(($base+$spell['effect'.$exprData[0].'DieSides'])) : ''));
				break;
			case 't':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT * FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				if(!$exprData[0]) $exprData[0]=1;
					$base = $spell['effect'.$exprData[0].'Amplitude']/1000;

				// TODO!!
				if($base==0)	$base=1;
				// !!TODO

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				$lastvalue = $base;
				break;
			case 'm':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT effect'.$exprData[0].'BasePoints FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				// TODO!!
				if(!$exprData[0]) $exprData[0] = 1;

				$base = $spell['effect'.$exprData[0].'BasePoints']+1;

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				$lastvalue = $base;
				break;
			case 'x':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT effect'.$exprData[0].'ChainTarget FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				$base = $spell['effect'.$exprData[0].'ChainTarget'];

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				$lastvalue = $base;
				break;
			case 'q':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT effect'.$exprData[0].'MiscValue FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				if(!($exprData[0]))
					$exprData[0]=1;
				$base = $spell['effect'.$exprData[0].'MiscValue'];

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				$lastvalue = $base;
				break;
			case 'a':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT effect1radius, effect2radius, effect3radius FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				$exprData[0] = 1; // TODO
				$radius = $DB->selectCell('SELECT radiusBase FROM ?_spellradius WHERE radiusID=? LIMIT 1', $spell['effect'.$exprData[0].'radius']);
				$base = $radius;

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				break;
			case 'h':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT procChance FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				$base = $spell['procChance'];

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				break;
			case 'f':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT dmg_multiplier'.$exprData[0].' FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				$base = $spell['dmg_multiplier'.$exprData[0]];

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				break;
			case 'n':
				if($lookup > 0)
					$spell = $DB->selectRow('SELECT procCharges FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;

				$base = $spell['procCharges'];

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				break;
			case 'd':
				if($lookup > 0)
				{
					$spell = $DB->selectRow('SELECT durationBase FROM ?_spell a, ?_spellduration b WHERE a.durationID = b.durationID AND a.spellID=? LIMIT 1', $lookup);
					@$base = ($spell['durationBase'] > 0 ? $spell['durationBase'] + 1 : 0);
				}
				else
					$base = ($lastduration['durationBase'] > 0 ? $lastduration['durationBase'] + 1 : 0);

				if($op && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= spell_duration($base);
				break;
			case 'i':
				$base = $spellRow['spellTargets'];

				if($op && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= $base;
				break;
			case 'e':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT effect_'.$exprData[0].'_proc_value FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;
				
				$base = $spell['effect_'.$exprData[0].'_proc_value'];

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}

				$str .= $base;
				$lastvalue = $base;
				break;
			case 'v':
				$base = $spell['affected_target_level'];

				if($op && $oparg > 0 && $base > 0)
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= $base;
				break; 
			case 'u':
				if($lookup > 0 && $exprData[0])
					$spell = $DB->selectRow('SELECT effect'.$exprData[0].'MiscValue FROM ?_spell WHERE spellID=?d LIMIT 1', $lookup);
				else
					$spell = $spellRow;
					
				// $base = $spell['effect_'.$exprData[0].'_misc_value'];
				if(isset($spell['effect'.$exprData[0].'MiscValue']))
					$base = $spell['effect'.$exprData[0].'MiscValue'];

				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				$lastvalue = $base;
				break;
			case 'b': // only used at one spell (14179) should be 20, column 110/111/112?)
				if($lookup > 0)
					$spell = $DB->selectRow('SELECT effect_'.$exprData[0].'_proc_chance FROM ?_spell WHERE spellID=? LIMIT 1', $lookup);
				else
					$spell = $spellRow;
				
				$base = $spell['effect_'.$exprData[0].'_proc_chance'];
				 
				if(in_array($op, $signs) && is_numeric($oparg) && is_numeric($base))
				{
					$equation = $base.$op.$oparg;
					eval("\$base = $equation;");
				}
				$str .= abs($base);
				$lastvalue = $base;
				break;
			case 'l':
				if($lastvalue > 1)
					$str .= $exprData[1];
				else
					$str .= $exprData[0];
				break;
			case 'g':
				$str .= $exprData[0];
				break;
			default:
				$str .= "[{$var} ($op::$oparg::$lookup::$exprData[0])]";
		}
	}
	$str .= substr($data, $pos);

	$str = @preg_replace_callback("|\{([^\}]+)\}|", create_function('$matches', 'return eval("return abs(".$matches[1].");");'), $str);

	return $str;
}

function render_spell_tooltip(&$row)
{
	// БД
	global $DB;

	// Время каста
	if($row['spellcasttimesID'] > 1)
		$casttime = ($DB->selectCell('SELECT base FROM ?_spellcasttimes WHERE id=? LIMIT 1', $row['spellcasttimesID']))/1000;
	// Дальность действия
	$range = $DB->selectCell('SELECT rangeMax FROM ?_spellrange WHERE rangeID=? LIMIT 1', $row['rangeID']);

	// Реагенты
	$reagents = array();
	$i=0;
	for($j=1;$j<=8;$j++)
	{
		if($row['reagent'.$j] > 0)
		{
			$reagents[$i] = array();
			// Имя реагента
			$names = $DB->selectRow('
				SELECT name{, l.name_loc?d as `name_loc`}
				FROM item_template i
				{ LEFT JOIN (locales_item l) ON l.entry = i.entry AND ? }
				WHERE i.entry = ?d',
				($_SESSION['locale']>0)? $_SESSION['locale']: DBSIMPLE_SKIP,
				($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
				$row['reagent'.$j]
			);
			$reagents[$i]['name'] = localizedName($names);
			// Количество реагентов
			// В количестве может быть значение -1, что с ним делать?
			$reagents[$i]['count'] = abs($row['reagentcount'.$j]);
			$i++;
		}
	}

	// Инструменты
	$tools = array();
	$i=0;
	for($j=1;$j<=2;$j++)
	{
		if($row['tool'.$j])
		{
			$tools[$i] = array();
			// Имя инструмента
			$names = $DB->selectRow('
				SELECT name{, l.name_loc?d as `name_loc`}
				FROM item_template i
				{ LEFT JOIN (locales_item l) ON l.entry = i.entry AND ? }
				WHERE i.entry = ?d',
				($_SESSION['locale']>0)? $_SESSION['locale']: DBSIMPLE_SKIP,
				($_SESSION['locale']>0)? 1: DBSIMPLE_SKIP,
				$row['tool'.$j]
			);
			$tools[$i]['name'] = localizedName($names);
			$i++;
		}
	}

	// До подсказка о спелле
	$desc = spell_desc2($row);

	$x = '';
	$x .= '<table><tr><td>';

	if($row['rank_loc'.$_SESSION['locale']])
		$x .= '<table width="100%"><tr><td>';

	$x .= '<b>'.$row['spellname_loc'.$_SESSION['locale']].'</b><br />';

	if($row['rank_loc'.$_SESSION['locale']])
		$x .= '</td><th><b class="q0">'.$row['rank_loc'.$_SESSION['locale']].'</b></th></tr></table>';

	if($range && ($row['manacost'] > 0 || $row['manacostpercent'] > 0))
		$x .= '<table width="100%"><tr><td>';

	if($row['manacost'] >0)
		$x .= $row['manacost'].(($_SESSION['locale']==4)?'蓝<br />':' mana<br />');

	if($row['manacostpercent']>0)
		$x .= $row['manacostpercent'].(($_SESSION['locale']==4)?'基础蓝%<br />':"% of base mana<br />");

	if($range && (($row['manacost'] >0) || ($row['manacostpercent']>0)))
		$x .= '</td><th>';

	if($range)
		$x .= $range.(($_SESSION['locale']==4)?'码(米)范围<br />':' yd range<br />');

	if($range && ($row['manacost'] > 0 || $row['manacostpercent'] > 0))
		$x .= '</th></tr></table>';

	if(($row['ChannelInterruptFlags'] || isset($casttime) || $row['spellcasttimesID']==1) && $row['cooldown'])
		$x .= '<table width="100%"><tr><td>';

	if($row['ChannelInterruptFlags'])
		$x .= ($_SESSION['locale']==4)?'引导':'Channeled';
	elseif(isset($casttime) && $casttime > 0)
		$x .= $casttime.(($_SESSION['locale']==4)?'秒引导':' sec cast');
	elseif($row['spellcasttimesID'] == 1)
		$x .= ($_SESSION['locale']==4)?'瞬发':'Instant';

	if(($row['ChannelInterruptFlags'] || isset($casttime) || $row['spellcasttimesID'] == 1) && $row['cooldown'])
		$x .= '</td><th>';

	if($row['cooldown'])
		$x.= ($row['cooldown']/1000).(($_SESSION['locale']==4)?'秒冷却':' sec cooldown');

	if(($row['ChannelInterruptFlags'] || isset($casttime) || $row['spellcasttimesID'] == 1) && $row['cooldown'])
		$x .= '</th></tr></table>';

	$x .= '</td></tr></table>';

	if($reagents)
	{
		$x .= '<table><tr><td>';
		$x .= LOCALE_REAGENTS;
		foreach($reagents as $i => $reagent)
		{
			$x .= $reagent['name'];
			if($reagent['count']>1)
				$x .= ' ('.$reagents[$i]['count'].')';
			if(!($i>=(count($reagents)-1)))
				$x .= ', ';
			else
				$x .= '<br>';
		}
		$x .= '</td></tr></table>';
	}

	if($tools)
	{
		$x .= '<table><tr><td>';
		$x .= LOCALE_TOOLS;
		foreach($tools as $i => $tool)
		{
			$x .= $tool['name'];
			if(!($i>=(count($tools)-1)))
				$x .= ', ';
			else
				$x .= '<br>';
		}
		$x .= '</td></tr></table>';
	}

	if($desc && $desc <> '_empty_')
		$x .= '<table><tr><td><span class="q">'.$desc.'</span></td></tr></table>';

	return $x;
}

function allspellsinfo2(&$row, $level=0)
{

	global $DB;

	if(!($row['spellID']))
		return;
	global $allspells;
	$num = $row['spellID'];
	if(isset($allitems[$num]))
		return $allitems[$num];

	// Номер спелла
	$allspells[$num]['entry'] = $row['spellID'];

	// Имя иконки спелла
	if($row['effect1itemtype'] && !$row['effect1Aura'])
	{
		if(IsSet($allitems[$row['effect1itemtype']]['icon']))
			$allspells[$num]['icon'] = $allitems[$row['effect1itemtype']]['icon'];
		else
			$allspells[$num]['icon'] = $DB->selectCell('SELECT iconname FROM ?_icons, item_template WHERE id = display_id AND entry = ?d LIMIT 1', $row['effect1itemtype']);
	} else {
		$allspells[$num]['icon'] = $row['iconname'];
	}

	// Тултип спелла
	if($level>0)
	{
		$allspells[$num]['name'] = $row['spellname'];
		$allspells[$num]['info'] = render_spell_tooltip($row);
	}

	if($level==1)
		return $allspells[$num];
	elseif($level==2)
		return $allspells[$num]['info'];
	else
		return;
}

function spell_buff_render($row)
{
	global $DB;

	$x = '<table><tr>';
	
	// Имя баффа
	$x .= '<td><b class="q">'.$row['spellname'].'</b></td>';
	
	// Тип диспела
	if($row['dispeltypeID'])
	{
		$dispel = $DB->selectCell('SELECT name_loc'.$_SESSION['locale'].' FROM ?_spelldispeltype WHERE id=? LIMIT 1', $row['dispeltypeID']);
		$x .= '<th><b class="q">'.$dispel.'</b></th>';
	}
	
	$x .= '</tr></table>';
	
	// Подсказка для баффа
	$x .= '<table><tr><td>';
	
	$x .= spell_desc2($row, 'buff').'<br>';
	
	// Длительность баффа
	$duration = $DB->selectCell("SELECT durationBase FROM ?_spellduration WHERE durationID=? LIMIT 1", $row['durationID']);
	if($duration>0)
		$x .= '<span class="q">'.($duration/1000).(($_SESSION['locale']==4)?'秒剩余</span>':' seconds remaining</span>');
	
	$x .= '</td></tr></table>';
	
	return $x;
}

function allspellsinfo($id, $level=0)
{
	global $DB;
	global $allspells;
	global $spell_cols;
	if(isset($allitems[$id]))
		return $allitems[$id];
	$row = $DB->selectRow('
		SELECT ?#
		FROM ?_spell s, ?_spellicons i
		WHERE
			s.spellID=?
			AND i.id = s.spellicon
		LIMIT 1
		',
		$spell_cols[$level],
		$id
	);

	if($row)
		return allspellsinfo2($row, $level);
	else
		return;
}

// Подробная информация о спеле
function spellinfo($id)
{
	global $DB;
	$row = $DB->selectRow('
		SELECT s.*, i.iconname
		FROM ?_spell s, ?_spellicons i
		WHERE
			s.spellID=?
			AND i.id = s.spellicon
		LIMIT 1
		',
		$id
	);
	return spellinfo2($row);
}

function spellinfo2(&$row)
{
	global $DB;
	global $item_cols;

	if($row)
	{
		$spell = array();
		$spell['entry'] = $row['spellID'];
		$spell['quality'] = '@';
		$spell['name'] = $row['spellname_loc'.$_SESSION['locale']];
		$spell['rank'] = $row['rank_loc'.$_SESSION['locale']];
		$spell['level'] = $row['levelspell'];
		$spell['school'] = $row['resistancesID'];
		// TODO: Что за cat?
		$spell['cat'] = 0;
		// Скилл
//		if(!(isset($row['skillID'])))
//		$skillrow = list($row['skillID'], $row['req_skill_value'], $row['min_value'], $row['max_value']);//$DB->selectRow('SELECT skillID, req_skill_value, min_value, max_value  FROM ?_skill_line_ability WHERE spellID=?d LIMIT 1', $spell['entry']);
		if(isset($row['skillID']))
		{
//			if($skillrow['req_skill_value'] != 1)
//				$spell['learnedat'] = $skillrow['req_skill_value'];
			// TODO: На каком уровне скилла можно обучиться спеллу (поле learnedat)
			if($row['min_value'] && $row['max_value'])
			{
				$spell['colors'] = array();
				$spell['colors'][0] = '';
				$spell['colors'][1] = $row['min_value'];
				$spell['colors'][2] = floor(($row['max_value'] + $row['min_value']) / 2);
				$spell['colors'][3] = $row['max_value'];
			}
			$spell['skill'] = $row['skillID'];
			
		}

		// Реагенты
		$spell['reagents'] = array();
		$i=0;
		global $allitems;
		for($j=1;$j<=8;$j++)
		{
			if($row['reagent'.$j])
			{
				$spell['reagents'][$i] = array();
				// ID реагента
				$spell['reagents'][$i]['entry'] = $row['reagent'.$j];
				// Доп данные о реагенте
				// Если данных для этой вещи ещё нет:
				allitemsinfo($spell['reagents'][$i]['entry'], 0);
				// Количество реагентов
				$spell['reagents'][$i]['count'] = $row['reagentcount'.$j];
				$i++;
			}
		}

		// Создает вещь:
		$i=0;
		for($j=1;$j<=3;$j++)
			if(isset($row['effect'.$j.'id']) && $row['effect'.$j.'id'] == 24)
			{
				$spell['creates'][$i] = array();
				$spell['creates'][$i]['entry'] = $row['effect'.$j.'itemtype'];
				$spell['creates'][$i]['count'] = $row['effect'.$j.'BasePoints'] + 1;

				if(!isset($allitems[$spell['creates'][$i]['entry']]))
					allitemsinfo($spell['creates'][$i]['entry'], 0);

				if(!isset($allitems[$spell['creates'][$i]['entry']]))
					$spell['quality'] = 7;
				else
					$spell['quality'] = 7 - $allitems[$spell['creates'][$i]['entry']]['quality'];
				$i++;
			}

		allspellsinfo2($row, 0);

		return $spell;
	} else {
		return;
	}
}
?>