<?php
switch($_SESSION['locale'])
{
	case '4':
	mass_define(array(
		// my
		'LOCALE_FLIGHTMASTERS'	=>	'飞行大师',
		'LOCALE_INKEEPER'	=>	'客栈老板',
		'LOCALE_REPAIRERS'	=>	'修理匠',
		'LOCALE_SPIRITHEALERS'	=>	'灵魂医生',
		// quest
		'LOCALE_REQUIREMENTS'	=>	'需求',
		'LOCALE_QUEST_FLAGS_STAY_ALIVE'        => '需要活着',
		'LOCALE_QUEST_FLAGS_PARTY_ACCEPT'      => '建议所有队伍成员',
		'LOCALE_QUEST_FLAGS_EXPLORATION'       => '勘探相关Exploration related',
		'LOCALE_QUEST_FLAGS_SHARABLE'          => '可共享',
		'LOCALE_QUEST_FLAGS_EPIC'              => '史诗',
		'LOCALE_QUEST_FLAGS_RAID'              => '团攻Raid',
		'LOCALE_QUEST_FLAGS_TBC'               => '需要燃烧的远征',
		'LOCALE_QUEST_FLAGS_UNK2'              => '使用额外物品',
		'LOCALE_QUEST_FLAGS_HIDDEN_REWARDS'    => '完成时显示奖励',
		'LOCALE_QUEST_FLAGS_AUTO_REWARDED'     => '自动完成和奖励',
		'LOCALE_QUEST_FLAGS_TBC_RACES'         => '血精灵和德莱尼的位置',
		'LOCALE_QUEST_FLAGS_DAILY'             => '每日',
		'LOCALE_QUEST_FLAGS_UNK5'              => '玩家对玩家PvP',
		'LOCALE_QUEST_SPECIALFLAGS_REPEATABLE' => '可重复',
		'LOCALE_QUEST_SPECIALFLAGS_SCRIPTED'   => '仅通过脚本/事件完成',
		'LOCALE_QUEST_HAS_POI'                 => '有兴趣点',
		'LOCALE_QUEST_HAS_START_SCRIPT'        => '有启动脚本',
		'LOCALE_QUEST_HAS_COMPLETE_SCRIPT'     => '有结束脚本',
		'LOCALE_QUEST_TYPE_GROUP'              => '队伍',
		'LOCALE_QUEST_TYPE_LIFE'               => '生活',
		'LOCALE_QUEST_TYPE_PVP'                => '玩家对玩家PvP',
		'LOCALE_QUEST_TYPE_RAID'               => '团攻Raid',
		'LOCALE_QUEST_TYPE_DUNGEON'            => '地下城',
		'LOCALE_QUEST_TYPE_WORLD_EVENT'        => '世界事件',
		'LOCALE_QUEST_TYPE_LEGENDARY'          => '传说',
		'LOCALE_QUEST_TYPE_ESCORT'             => '护送',
		'LOCALE_QUEST_TYPE_HEROIC'             => '英雄',
		'LOCALE_QUEST_TYPE_RAID10'             => '团攻Raid (10)',
		'LOCALE_QUEST_TYPE_RAID25'             => '团攻Raid (25)',
		// classes
		'LOCALE_WARRIOR'		=>	'战士',
		'LOCALE_PALADIN'		=>	'圣骑士',
		'LOCALE_HUNTER'			=>	'猎人',
		'LOCALE_ROGUE'			=>	'盗贼',
		'LOCALE_PRIEST'			=>	'牧师',
		'LOCALE_DEATH_KNIGHT'	=>	'死亡骑士',
		'LOCALE_SHAMAN'			=>	'萨满',
		'LOCALE_MAGE'			=>	'法师',
		'LOCALE_WARLOCK'		=>	'术士',
		'LOCALE_DRUID'			=>	'德鲁伊',
		// races
		'LOCALE_HUMAN'			=>	'人类',
		'LOCALE_ORC'			=>	'牛头人',
		'LOCALE_DWARF'			=>	'矮人',
		'LOCALE_NIGHT_ELF'		=>	'暗夜精灵',
		'LOCALE_UNDEAD'			=>	'不死族',
		'LOCALE_TAUREN'			=>	'牛头人',
		'LOCALE_GNOME'			=>	'侏儒',
		'LOCALE_TROLL'			=>	'巨魔',
		'LOCALE_BLOOD_ELF'		=>	'血精灵',
		'LOCALE_DRAENEI'		=>	'德莱尼',
		// side
		'LOCALE_BOTH_FACTIONS'	=>	'双方',
		'LOCALE_HORDE'			=>	'部落',
		'LOCALE_ALLIANCE'		=>	'联盟',
		// reputation
		'LOCALE_NEUTRAL'	=>	'中立',
		'LOCALE_FRIENDLY'	=>	'友好',
		'LOCALE_HONORED'	=>	'尊敬',
		'LOCALE_REVERED'	=>	'崇敬',
		'LOCALE_EXALTED'	=>	'崇拜',
		// resistances
		'LOCALE_FIRE_RESISTANCE'	=>	'火焰抗性',
		'LOCALE_FROST_RESISTANCE'	=>	'冰霜抗性',
		'LOCALE_ARCANE_RESISTANCE'	=>	'奥术抗性',
		'LOCALE_SHADOW_RESISTANCE'	=>	'暗影抗性',
		'LOCALE_NATURE_RESISTANCE'	=>	'自然抗性',
		'LOCALE_HOLY_RESISTANCE'	=>	'不存在抗性',
		// binds
		'LOCALE_BIND_PICKUP'		=>	'拾取绑定',
		'LOCALE_BIND_EQUIP'			=>	'装备后绑定',
		'LOCALE_BIND_USE'			=>	'使用绑定',
		'LOCALE_BIND_SOULBOUND'		=>	'灵魂绑定',
		'LOCALE_BIND_QUEST_ITEM'	=>	'任务物品',
		// bags
		'LOCALE_BAG'			=>	'背包',
		'LOCALE_BAG_QUIVER'		=>	'箭袋',
		'LOCALE_BAG_AMMO'		=>	'弹药袋',
		'LOCALE_BAG_SOUL'		=>	'灵魂袋',
		'LOCALE_BAG_LEATHER'	=>	'制皮袋',
		'LOCALE_BAG_HERB'		=>	'草药袋',
		'LOCALE_BAG_ENCHANT'	=>	'附魔袋',
		'LOCALE_BAG_ENGINEER'	=>	'工程包',
		'LOCALE_BAG_GEM'		=>	'宝石袋',
		'LOCALE_BAG_MINING'		=>	'采矿包',
		// equip slots
		'LOCALE_EQUIP_HEAD'				=>	'头',
		'LOCALE_EQUIP_NECK'				=>	'脖子',
		'LOCALE_EQUIP_SHOULDER'			=>	'肩膀',
		'LOCALE_EQUIP_SHIRT'			=>	'衬衫',
		'LOCALE_EQUIP_CHEST'			=>	'胸甲',
		'LOCALE_EQUIP_WAIST'			=>	'腰',
		'LOCALE_EQUIP_LEGS'				=>	'腿',
		'LOCALE_EQUIP_FEET'				=>	'脚',
		'LOCALE_EQUIP_WRIST'			=>	'腕',
		'LOCALE_EQUIP_HANDS'			=>	'手',
		'LOCALE_EQUIP_FINGER'			=>	'手指',
		'LOCALE_EQUIP_TRINKET'			=>	'配饰',
		'LOCALE_EQUIP_ONEHAND'			=>	'单手',
		'LOCALE_EQUIP_OFFHAND'			=>	'副手',
		'LOCALE_EQUIP_RANGED'			=>	'远程',
		'LOCALE_EQUIP_BACK'				=>	'背',
		'LOCALE_EQUIP_TWOHAND'			=>	'双手',
		'LOCALE_EQUIP_UNK0'				=>	'未知0',
		'LOCALE_EQUIP_TABARD'			=>	'战袍徽章',
		'LOCALE_EQUIP_MAINHAND'			=>	'主手',
		'LOCALE_EQUIP_CHEST2'			=>	'胸',
		'LOCALE_EQUIP_OFFHAND2'			=>	'副手',
		'LOCALE_EQUIP_HELDINOFFHAND'	=>	'副手物品',
		'LOCALE_EQUIP_PROJECTILE'		=>	'射弹',
		'LOCALE_EQUIP_THROWN'			=>	'抛掷物',
		'LOCALE_EQUIP_RANGED2'			=>	'远程',
		'LOCALE_EQUIP_UNK1'				=>	'未知1',
		'LOCALE_EQUIP_RELIC'			=>	'遗迹',
		// armor type
		'LOCALE_ARMOR_CLOTH'	=>	'布甲',
		'LOCALE_ARMOR_LEATHER'	=>	'皮夹',
		'LOCALE_ARMOR_MAIL'		=>	'链甲',
		'LOCALE_ARMOR_PLATE'	=>	'板甲',
		'LOCALE_ARMOR_BUCKLER'	=>	'小圆盾',
		'LOCALE_ARMOR_SHIELD'	=>	'盾牌',
		'LOCALE_ARMOR_LIBRAM'	=>	'圣契',
		'LOCALE_ARMOR_IDOL'		=>	'幻像',
		'LOCALE_ARMOR_TOTEM'	=>	'图腾',
		// npc type
		'LOCALE_TYPENPC_UNDEFINED'  => '未知类别',
		'LOCALE_TYPENPC_BEAST'      => '野兽',
		'LOCALE_TYPENPC_DRAGON'     => '龙',
		'LOCALE_TYPENPC_DEMON'      => '魔鬼',
		'LOCALE_TYPENPC_ELEM'       => '元素',
		'LOCALE_TYPENPC_GIANT'      => '巨人',
		'LOCALE_TYPENPC_UNDEAD'     => '不死',
		'LOCALE_TYPENPC_HUMAN'      => '类人',
		'LOCALE_TYPENPC_CRITTER'    => '小动物',
		'LOCALE_TYPENPC_MECHANIC'   => '机械',
		'LOCALE_TYPENPC_UNCATEGORY' => '未分类',
		'LOCALE_TYPENPC_TOTEM'      => '图腾',
		'LOCALE_TYPENPC_COMPANION'  => 'Companion',
		'LOCALE_TYPENPC_GAS_CLOUD'  => '气云',
		// npc rank
		'LOCALE_NORMAL'     => '普通',
		'LOCALE_ELITE'      => '精英',
		'LOCALE_RARE_ELITE' => '稀有精英',
		'LOCALE_BOSS'       => 'Boss',
		'LOCALE_RARE'       => '稀有',
		'LOCALE_UNKNOWN'    => '未知等级',
		// object type
		'LOCALE_TYPEGO_BOOK'        => '书',
		'LOCALE_TYPEGO_CONTAINER'   => '容器',
		'LOCALE_TYPEGO_FOOTLOCKER'  => '小提箱',
		'LOCALE_TYPEGO_HERB'        => '草药',
		'LOCALE_TYPEGO_VEINS'       => '矿脉',
		'LOCALE_TYPEGO_QUEST'       => '任务',
		// weapon type
		'LOCALE_WEAPON_AXE1H'		=>	'斧',
		'LOCALE_WEAPON_AXE2H'		=>	'斧',
		'LOCALE_WEAPON_BOW'			=>	'弓',
		'LOCALE_WEAPON_GUN'			=>	'枪',
		'LOCALE_WEAPON_MACE1H'		=>	'锤',
		'LOCALE_WEAPON_MACE2H'		=>	'锤',
		'LOCALE_WEAPON_POLEARM'		=>	'长柄武器',
		'LOCALE_WEAPON_SWORD1H'		=>	'剑',
		'LOCALE_WEAPON_SWORD2H'		=>	'剑',
		'LOCALE_WEAPON_OBSOLETE'	=>	'',
		'LOCALE_WEAPON_STAFF'		=>	'法杖',
		'LOCALE_WEAPON_EXOTIC'		=>	'',
		'LOCALE_WEAPON_EXOTIC2'		=>	'',
		'LOCALE_WEAPON_FIST'		=>	'拳套',
		'LOCALE_WEAPON_MISC'		=>	'杂合',
		'LOCALE_WEAPON_DAGGER'		=>	'匕首',
		'LOCALE_WEAPON_THROWN'		=>	'投掷',
		'LOCALE_WEAPON_SPEAR'		=>	'',
		'LOCALE_WEAPON_CROSSBOW'	=>	'十字弓',
		'LOCALE_WEAPON_WAND'		=>	'魔杖',
		'LOCALE_WEAPON_FISHINGPOLE'	=>	'鱼竿',
		// projectile type
		'LOCALE_PROJECTILE_WAND'	=>	'',
		'LOCALE_PROJECTILE_BOLT'	=>	'',
		'LOCALE_PROJECTILE_ARROW'	=>	'箭',
		'LOCALE_PROJECTILE_BULLET'	=>	'子弹',
		'LOCALE_PROJECTILE_THROWN'	=>	'投掷',
		// damage
		'LOCALE_DAMAGE_PRE'		=>	' ',
		'LOCALE_DAMAGE_POST'	=>	'单次伤害',
		'LOCALE_DAMAGE_HOLY'	=>	'神圣伤害',
		'LOCALE_DAMAGE_FIRE'	=>	'火焰伤害',
		'LOCALE_DAMAGE_FROST'	=>	'冰霜伤害',
		'LOCALE_DAMAGE_ARCANE'	=>	'奥术伤害',
		'LOCALE_DAMAGE_SHADOW'	=>	'暗影伤害',
		'LOCALE_DAMAGE_NATURE'	=>	'自然伤害',
		// stats
		'LOCALE_STAT_STRENGTH'	=>	' 力量',
		'LOCALE_STAT_STAMINA'	=>	' 耐力',
		'LOCALE_STAT_INTELLECT'	=>	' 智力',
		'LOCALE_STAT_SPIRIT'	=>	' 精神',
		'LOCALE_STAT_AGILITY'	=>	' 敏捷',
		// green bonuses
		'LOCALE_GBONUS_DEFENCE'				=>	'提升防御率%d。',
		'LOCALE_GBONUS_DODGE'				=>	'提升闪躲率%d。',
		'LOCALE_GBONUS_PARRY'				=>	'提升格挡率%d。',
		'LOCALE_GBONUS_SHIELDBLOCK'			=>	'提升盾牌阻挡率%d。',
		'LOCALE_GBONUS_SPELLHIT_RATING'		=>	'提升法术命中率%d。',
		'LOCALE_GBONUS_MELEECRIT_RATING'	=>	'提升近战爆击率%d。',
		'LOCALE_GBONUS_RANGEDCRIT_RATING'	=>	'提升远程爆击率%d。',
		'LOCALE_GBONUS_SPELLCRIT_RATING'	=>	'提升法术爆击率%d。',
		'LOCALE_GBONUS_SPELLHASTE_RATING'	=>	'提升施法速度%d。',
		'LOCALE_GBONUS_HIT_RATING'			=>	'提升命中率%d。',
		'LOCALE_GBONUS_CRIT_RATING'			=>	'提升爆击率%d。',
		'LOCALE_GBONUS_RESILIENCE_RATING'	=>	'提升恢复率%d。',
		'LOCALE_GBONUS_HASTE_RATING'		=>	'提升加速率%d。',
		'LOCALE_GBONUS_EXPERTISE_RATING'	=>	'提升熟练率%d。',
		'LOCALE_GBONUS_RESTOREMANA'			=>	'5秒回蓝率%d。',
		'LOCALE_GBONUS_ATTACKPOWER'			=>	'提升攻击能%d。',
		'LOCALE_GBONUS_ARMORPENETRATION'	=>	'提升你的护甲穿透率%d。',
		'LOCALE_GBONUS_SPELLPOWER'			=>	'提升法术能%d。',
		'LOCALE_GBONUS_UNKNOWN'				=>	'未知奖励%d。',
		'LOCALE_GBONUS_CHANCEONHIT'			=>	'命中机会:',
		'LOCALE_GBONUS_EQUIP'				=>	'装备: ',
		'LOCALE_GBONUS_USE'					=>	'使用: ',
		'LOCALE_COMBAT_RATING'				=>	'%s&nbsp;@&nbsp;L%d',
		// sockets
		'LOCALE_SOCKET_META'	=>	'金属槽',
		'LOCALE_SOCKET_RED'		=>	'红色槽',
		'LOCALE_SOCKET_YELLOW'	=>	'黄色槽',
		'LOCALE_SOCKET_BLUE'	=>	'蓝色槽',
		'LOCALE_SOCKET_BONUS'	=>	'插槽奖励',
		
		// misc
		'LOCALE_LEVEL'			=>	'等级',
		'LOCALE_ITEMLVL'         => '物品等级',
		'LOCALE_ON'              => 'on',		
		'LOCALE_LVL'             => '等级',
		'LOCALE_SPEED'			=>	'速度',
		'LOCALE_UNIQUE'			=>	'唯一',
		'LOCALE_START_QUEST'	=>	'该物品开始一个任务。',
		'LOCALE_SLOT'			=>	'位置',
		'LOCALE_DPS'			=>	'秒伤',
		'LOCALE_DPS2'			=>	'秒伤',
		'LOCALE_DPS_ADDS'		=>	'增加',
		'LOCALE_ARMOR'			=>	'装甲',
		'LOCALE_BLOCK'			=>	'阻断',
		'LOCALE_REQUIRES'		=>	'需要',
		'LOCALE_REQUIRES_LEVEL'	=>	'需要等级',
		'LOCALE_DURABILITY'		=>	'耐用',
		'LOCALE_CLASSES'		=>	'职业',
		'LOCALE_VALUE_DELIM'	=>	' 至 ',
		'LOCALE_REAGENTS'		=>	'原料: ',
		'LOCALE_TOOLS'			=>	'工具: ',
		'LOCALE_HEROIC'			=>	' (英雄)',
		'LOCALE_CRITERIA'		=>	'条件',
		'LOCALE_GLYPH_OF'		=>	'雕文',
	));
	break;
	// --- ENGLISH default LOCALE ---
	default:
		mass_define(array(
			// my
			'LOCALE_FLIGHTMASTERS'	=>	'Flight Masters',
			'LOCALE_INKEEPER'	=>	'Innkeepers',
			'LOCALE_REPAIRERS'	=>	'Repairers',
			'LOCALE_SPIRITHEALERS'	=>	'Spirit Healers',					
			// quest
			'LOCALE_REQUIREMENTS'	=>	'Requirements',
			'LOCALE_QUEST_FLAGS_STAY_ALIVE'        => 'Requires to stay alive',
			'LOCALE_QUEST_FLAGS_PARTY_ACCEPT'      => 'Suggested to all party members',
			'LOCALE_QUEST_FLAGS_EXPLORATION'       => 'Exploration related',
			'LOCALE_QUEST_FLAGS_SHARABLE'          => 'Sharable',
			'LOCALE_QUEST_FLAGS_EPIC'              => 'Epic',
			'LOCALE_QUEST_FLAGS_RAID'              => 'Raid',
			'LOCALE_QUEST_FLAGS_TBC'               => 'The Burning Crusade required',
			'LOCALE_QUEST_FLAGS_UNK2'              => 'Additional items used',
			'LOCALE_QUEST_FLAGS_HIDDEN_REWARDS'    => 'Rewards are shown only at completion',
			'LOCALE_QUEST_FLAGS_AUTO_REWARDED'     => 'Automatically complete and rewarded',
			'LOCALE_QUEST_FLAGS_TBC_RACES'         => 'Blood Elves/Draenei locations',
			'LOCALE_QUEST_FLAGS_DAILY'             => 'Daily',
			'LOCALE_QUEST_FLAGS_UNK5'              => 'PvP',
			'LOCALE_QUEST_SPECIALFLAGS_REPEATABLE' => 'Repeatable',
			'LOCALE_QUEST_SPECIALFLAGS_SCRIPTED'   => 'Completed only by script/event',
			'LOCALE_QUEST_HAS_POI'                 => 'Has points of interest',
			'LOCALE_QUEST_HAS_START_SCRIPT'        => 'Has start script',
			'LOCALE_QUEST_HAS_COMPLETE_SCRIPT'     => 'Has end script',
			'LOCALE_QUEST_TYPE_GROUP'              => 'Group',
			'LOCALE_QUEST_TYPE_LIFE'               => 'Life',
			'LOCALE_QUEST_TYPE_PVP'                => 'PvP',
			'LOCALE_QUEST_TYPE_RAID'               => 'Raid',
			'LOCALE_QUEST_TYPE_DUNGEON'            => 'Dungeon',
			'LOCALE_QUEST_TYPE_WORLD_EVENT'        => 'World Event',
			'LOCALE_QUEST_TYPE_LEGENDARY'          => 'Legendary',
			'LOCALE_QUEST_TYPE_ESCORT'             => 'Escort',
			'LOCALE_QUEST_TYPE_HEROIC'             => 'Heroic',
			'LOCALE_QUEST_TYPE_RAID10'             => 'Raid (10)',
			'LOCALE_QUEST_TYPE_RAID25'             => 'Raid (25)',
			// classes
			'LOCALE_WARRIOR'		=>	'Warrior',
			'LOCALE_PALADIN'		=>	'Paladin',
			'LOCALE_HUNTER'			=>	'Hunter',
			'LOCALE_ROGUE'			=>	'Rogue',
			'LOCALE_PRIEST'			=>	'Priest',
			'LOCALE_DEATH_KNIGHT'	=>	'Death Knight',
			'LOCALE_SHAMAN'			=>	'Shaman',
			'LOCALE_MAGE'			=>	'Mage',
			'LOCALE_WARLOCK'		=>	'Warlock',
			'LOCALE_DRUID'			=>	'Druid',
			// races
			'LOCALE_HUMAN'			=>	'Human',
			'LOCALE_ORC'			=>	'Orc',
			'LOCALE_DWARF'			=>	'Dwarf',
			'LOCALE_NIGHT_ELF'		=>	'Night Elf',
			'LOCALE_UNDEAD'			=>	'Undead',
			'LOCALE_TAUREN'			=>	'Tauren',
			'LOCALE_GNOME'			=>	'Gnome',
			'LOCALE_TROLL'			=>	'Troll',
			'LOCALE_BLOOD_ELF'		=>	'Blood Elf',
			'LOCALE_DRAENEI'		=>	'Draenei',
			// side
			'LOCALE_BOTH_FACTIONS'	=>	'Both',
			'LOCALE_HORDE'			=>	'Horde',
			'LOCALE_ALLIANCE'		=>	'Alliance',
			// reputation
			'LOCALE_NEUTRAL'	=>	'Neutral',
			'LOCALE_FRIENDLY'	=>	'Friendly',
			'LOCALE_HONORED'	=>	'Honored',
			'LOCALE_REVERED'	=>	'Revered',
			'LOCALE_EXALTED'	=>	'Exalted',
			// resistances
			'LOCALE_FIRE_RESISTANCE'	=>	'Fire Resistance',
			'LOCALE_FROST_RESISTANCE'	=>	'Frost Resistance',
			'LOCALE_ARCANE_RESISTANCE'	=>	'Arcane Resistance',
			'LOCALE_SHADOW_RESISTANCE'	=>	'Shadow Resistance',
			'LOCALE_NATURE_RESISTANCE'	=>	'Nature Resistance',
			'LOCALE_HOLY_RESISTANCE'	=>	'RESISTANCE DOES NOT EXIST',
			// binds
			'LOCALE_BIND_PICKUP'		=>	'Binds when picked up',
			'LOCALE_BIND_EQUIP'			=>	'Binds when equipped',
			'LOCALE_BIND_USE'			=>	'Binds when used',
			'LOCALE_BIND_SOULBOUND'		=>	'Soulbound',
			'LOCALE_BIND_QUEST_ITEM'	=>	'Quest Item',
			// bags
			'LOCALE_BAG'			=>	'Bag',
			'LOCALE_BAG_QUIVER'		=>	'Quiver',
			'LOCALE_BAG_AMMO'		=>	'Ammo Pouch',
			'LOCALE_BAG_SOUL'		=>	'Soul Bag',
			'LOCALE_BAG_LEATHER'	=>	'Leatherworking Bag',
			'LOCALE_BAG_HERB'		=>	'Herb Bag',
			'LOCALE_BAG_ENCHANT'	=>	'Enchanting bag',
			'LOCALE_BAG_ENGINEER'	=>	'Engineering Bag',
			'LOCALE_BAG_GEM'		=>	'Gem Bag',
			'LOCALE_BAG_MINING'		=>	'Mining Bag',
			// equip slots
			'LOCALE_EQUIP_HEAD'				=>	'Head',
			'LOCALE_EQUIP_NECK'				=>	'Neck',
			'LOCALE_EQUIP_SHOULDER'			=>	'Shoulder',
			'LOCALE_EQUIP_SHIRT'			=>	'Shirt',
			'LOCALE_EQUIP_CHEST'			=>	'Chest',
			'LOCALE_EQUIP_WAIST'			=>	'Waist',
			'LOCALE_EQUIP_LEGS'				=>	'Legs',
			'LOCALE_EQUIP_FEET'				=>	'Feet',
			'LOCALE_EQUIP_WRIST'			=>	'Wrist',
			'LOCALE_EQUIP_HANDS'			=>	'Hands',
			'LOCALE_EQUIP_FINGER'			=>	'Finger',
			'LOCALE_EQUIP_TRINKET'			=>	'Trinket',
			'LOCALE_EQUIP_ONEHAND'			=>	'One-hand',
			'LOCALE_EQUIP_OFFHAND'			=>	'Off Hand',
			'LOCALE_EQUIP_RANGED'			=>	'Ranged',
			'LOCALE_EQUIP_BACK'				=>	'Back',
			'LOCALE_EQUIP_TWOHAND'			=>	'Two-hand',
			'LOCALE_EQUIP_UNK0'				=>	'',
			'LOCALE_EQUIP_TABARD'			=>	'Tabard',
			'LOCALE_EQUIP_MAINHAND'			=>	'Main Hand',
			'LOCALE_EQUIP_CHEST2'			=>	'Chest',
			'LOCALE_EQUIP_OFFHAND2'			=>	'Off Hand',
			'LOCALE_EQUIP_HELDINOFFHAND'	=>	'Held In Off-Hand',
			'LOCALE_EQUIP_PROJECTILE'		=>	'Projectile',
			'LOCALE_EQUIP_THROWN'			=>	'Thrown',
			'LOCALE_EQUIP_RANGED2'			=>	'Ranged',
			'LOCALE_EQUIP_UNK1'				=>	'',
			'LOCALE_EQUIP_RELIC'			=>	'Relic',
			// armor type
			'LOCALE_ARMOR_CLOTH'	=>	'Cloth',
			'LOCALE_ARMOR_LEATHER'	=>	'Leather',
			'LOCALE_ARMOR_MAIL'		=>	'Mail',
			'LOCALE_ARMOR_PLATE'	=>	'Plate',
			'LOCALE_ARMOR_BUCKLER'	=>	'',
			'LOCALE_ARMOR_SHIELD'	=>	'Shield',
			'LOCALE_ARMOR_LIBRAM'	=>	'Libram',
			'LOCALE_ARMOR_IDOL'		=>	'Idol',
			'LOCALE_ARMOR_TOTEM'	=>	'Totem',
			// npc type
            'LOCALE_TYPENPC_UNDEFINED'  => 'Unknown type',
            'LOCALE_TYPENPC_BEAST'      => 'Beast',
            'LOCALE_TYPENPC_DRAGON'     => 'Dragonkin',
            'LOCALE_TYPENPC_DEMON'      => 'Demon',
            'LOCALE_TYPENPC_ELEM'       => 'Elemental',
            'LOCALE_TYPENPC_GIANT'      => 'Giant',
            'LOCALE_TYPENPC_UNDEAD'     => 'Undead',
            'LOCALE_TYPENPC_HUMAN'      => 'Humanoid',
            'LOCALE_TYPENPC_CRITTER'    => 'Critter',
            'LOCALE_TYPENPC_MECHANIC'   => 'Mechanical',
            'LOCALE_TYPENPC_UNCATEGORY' => 'Uncategorized',
            'LOCALE_TYPENPC_TOTEM'      => 'Totem',
            'LOCALE_TYPENPC_COMPANION'  => 'Companion',
            'LOCALE_TYPENPC_GAS_CLOUD'  => 'Gas cloud',
            // npc rank
            'LOCALE_NORMAL'     => 'Normal',
            'LOCALE_ELITE'      => 'Elite',
            'LOCALE_RARE_ELITE' => 'Rare Elite',
            'LOCALE_BOSS'       => 'Boss',
            'LOCALE_RARE'       => 'Rare',
            'LOCALE_UNKNOWN'    => 'Unknown rank',
            // object type
            'LOCALE_TYPEGO_BOOK'        => 'Book',
            'LOCALE_TYPEGO_CONTAINER'   => 'Container',
            'LOCALE_TYPEGO_FOOTLOCKER'  => 'Footlocker',
            'LOCALE_TYPEGO_HERB'        => 'Herb',
            'LOCALE_TYPEGO_VEINS'       => 'Mineral vein',
            'LOCALE_TYPEGO_QUEST'       => 'Quest',
			// weapon type
			'LOCALE_WEAPON_AXE1H'		=>	'Axe',
			'LOCALE_WEAPON_AXE2H'		=>	'Axe',
			'LOCALE_WEAPON_BOW'			=>	'Bow',
			'LOCALE_WEAPON_GUN'			=>	'Gun',
			'LOCALE_WEAPON_MACE1H'		=>	'Mace',
			'LOCALE_WEAPON_MACE2H'		=>	'Mace',
			'LOCALE_WEAPON_POLEARM'		=>	'Polearm',
			'LOCALE_WEAPON_SWORD1H'		=>	'Sword',
			'LOCALE_WEAPON_SWORD2H'		=>	'Sword',
			'LOCALE_WEAPON_OBSOLETE'	=>	'',
			'LOCALE_WEAPON_STAFF'		=>	'Staff',
			'LOCALE_WEAPON_EXOTIC'		=>	'',
			'LOCALE_WEAPON_EXOTIC2'		=>	'',
			'LOCALE_WEAPON_FIST'		=>	'Fist Weapon',
			'LOCALE_WEAPON_MISC'		=>	'Miscellaneous',
			'LOCALE_WEAPON_DAGGER'		=>	'Dagger',
			'LOCALE_WEAPON_THROWN'		=>	'Thrown',
			'LOCALE_WEAPON_SPEAR'		=>	'',
			'LOCALE_WEAPON_CROSSBOW'	=>	'Crossbow',
			'LOCALE_WEAPON_WAND'		=>	'Wand',
			'LOCALE_WEAPON_FISHINGPOLE'	=>	'Fishing Pole',
			// projectile type
			'LOCALE_PROJECTILE_WAND'	=>	'',
			'LOCALE_PROJECTILE_BOLT'	=>	'',
			'LOCALE_PROJECTILE_ARROW'	=>	'Arrow',
			'LOCALE_PROJECTILE_BULLET'	=>	'Bullet',
			'LOCALE_PROJECTILE_THROWN'	=>	'',
			// damage
			'LOCALE_DAMAGE_PRE'		=>	' ',
			'LOCALE_DAMAGE_POST'	=>	' Damage',
			'LOCALE_DAMAGE_HOLY'	=>	'Holy',
			'LOCALE_DAMAGE_FIRE'	=>	'Fire',
			'LOCALE_DAMAGE_FROST'	=>	'Frost',
			'LOCALE_DAMAGE_ARCANE'	=>	'Arcane',
			'LOCALE_DAMAGE_SHADOW'	=>	'Shadow',
			'LOCALE_DAMAGE_NATURE'	=>	'Nature',
			// stats
			'LOCALE_STAT_STRENGTH'	=>	' Strength',
			'LOCALE_STAT_STAMINA'	=>	' Stamina',
			'LOCALE_STAT_INTELLECT'	=>	' Intellect',
			'LOCALE_STAT_SPIRIT'	=>	' Spirit',
			'LOCALE_STAT_AGILITY'	=>	' Agility',
			// green bonuses
			'LOCALE_GBONUS_DEFENCE'				=>	'Increases defense rating by %d.',
			'LOCALE_GBONUS_DODGE'				=>	'Increases your dodge rating by %d.',
			'LOCALE_GBONUS_PARRY'				=>	'Increases your parry rating by %d.',
			'LOCALE_GBONUS_SHIELDBLOCK'			=>	'Increases your shield block rating by %d.',
			'LOCALE_GBONUS_SPELLHIT_RATING'		=>	'Improves spell hit rating by %d.',
			'LOCALE_GBONUS_MELEECRIT_RATING'	=>	'Improves melee critical strike rating by %d.',
			'LOCALE_GBONUS_RANGEDCRIT_RATING'	=>	'Improves ranged critical strike rating by %d.',
			'LOCALE_GBONUS_SPELLCRIT_RATING'	=>	'Improves spell critical strike rating by %d.',
			'LOCALE_GBONUS_SPELLHASTE_RATING'	=>	'Improves spell haste rating by %d.',
			'LOCALE_GBONUS_HIT_RATING'			=>	'Increases your hit rating by %d.',
			'LOCALE_GBONUS_CRIT_RATING'			=>	'Increases your critical strike rating by %d.',
			'LOCALE_GBONUS_RESILIENCE_RATING'	=>	'Improves your resilience rating by %d.',
			'LOCALE_GBONUS_HASTE_RATING'		=>	'Improves haste rating by %d.',
			'LOCALE_GBONUS_EXPERTISE_RATING'	=>	'Increases your expertise rating by %d.',
			'LOCALE_GBONUS_RESTOREMANA'			=>	'Restores %d mana per 5 sec.',
			'LOCALE_GBONUS_ATTACKPOWER'			=>	'Increases attack power by %d.',
			'LOCALE_GBONUS_ARMORPENETRATION'	=>	'Increases your armor penetration rating by %d.',
			'LOCALE_GBONUS_SPELLPOWER'			=>	'Improves spell power by %d.',
			'LOCALE_GBONUS_UNKNOWN'				=>	'Unknown Bonus #%d',
			'LOCALE_GBONUS_CHANCEONHIT'			=>	'Chance on hit: ',
			'LOCALE_GBONUS_EQUIP'				=>	'Equip: ',
			'LOCALE_GBONUS_USE'					=>	'Use: ',
			'LOCALE_COMBAT_RATING'				=>	'%s&nbsp;@&nbsp;L%d',
			// sockets
			'LOCALE_SOCKET_META'	=>	'Meta Socket',
			'LOCALE_SOCKET_RED'		=>	'Red Socket',
			'LOCALE_SOCKET_YELLOW'	=>	'Yellow Socket',
			'LOCALE_SOCKET_BLUE'	=>	'Blue Socket',
			'LOCALE_SOCKET_BONUS'	=>	'Socket Bonus',
			
			// misc
			'LOCALE_LEVEL'			=>	'Level',
			'LOCALE_ITEMLVL'         => 'Item Level',
			'LOCALE_ON'              => 'on',			
			'LOCALE_LVL'           => 'lvl',
			'LOCALE_SPEED'			=>	'Speed',
			'LOCALE_UNIQUE'			=>	'Unique',
			'LOCALE_START_QUEST'	=>	'This Item Begins a Quest',
			'LOCALE_SLOT'			=>	' Slot ',
			'LOCALE_DPS'			=>	'damage per second',
			'LOCALE_DPS2'			=>	'damage per second',
			'LOCALE_DPS_ADDS'		=>	'Adds',
			'LOCALE_ARMOR'			=>	'Armor',
			'LOCALE_BLOCK'			=>	'Block',
			'LOCALE_REQUIRES'		=>	'Requires',
			'LOCALE_REQUIRES_LEVEL'	=>	'Requires Level',
			'LOCALE_DURABILITY'		=>	'Durability',
			'LOCALE_CLASSES'		=>	'Classes',
			'LOCALE_VALUE_DELIM'	=>	' to ',
			'LOCALE_REAGENTS'		=>	'Reagents: ',
			'LOCALE_TOOLS'			=>	'Tools: ',
			'LOCALE_HEROIC'			=>	' (Heroic)',
			'LOCALE_CRITERIA'		=>	'Criteria',
			'LOCALE_GLYPH_OF'		=>	'Glyph of ',
		));
		break;
}
?>