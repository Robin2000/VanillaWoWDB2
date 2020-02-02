CREATE INDEX `aowow_cr_loot` ON `creature_loot_template`     (`mincountOrRef`);
CREATE INDEX `aowow_di_loot` ON `disenchant_loot_template`   (`mincountOrRef`);
CREATE INDEX `aowow_fi_loot` ON `fishing_loot_template`      (`mincountOrRef`);
CREATE INDEX `aowow_go_loot` ON `gameobject_loot_template`   (`mincountOrRef`);
CREATE INDEX `aowow_item_loot` ON `item_loot_template`         (`mincountOrRef`);
CREATE INDEX `aowow_pk_loot` ON `pickpocketing_loot_template`(`mincountOrRef`);
CREATE INDEX `aowow_sk_loot` ON `skinning_loot_template`     (`mincountOrRef`);
CREATE INDEX `aowow_ref_loot` ON `reference_loot_template`    (`mincountOrRef`);

CREATE INDEX `aowow_item_cre_loot` ON `creature_loot_template`     (`item`);
CREATE INDEX `aowow_item_di_loot` ON `disenchant_loot_template`   (`item`);
CREATE INDEX `aowow_item_fi_loot` ON `fishing_loot_template`      (`item`);
CREATE INDEX `aowow_item_go_loot` ON `gameobject_loot_template`   (`item`);
CREATE INDEX `aowow_item_loot_item` ON `item_loot_template`         (`item`);
CREATE INDEX `aowow_item_pk_loot` ON `pickpocketing_loot_template`(`item`);
CREATE INDEX `aowow_item_sk_loot` ON `skinning_loot_template`     (`item`);
CREATE INDEX `aowow_item_ref_loot` ON `reference_loot_template`    (`item`);

CREATE INDEX `aowow_lootid`         ON `creature_template` (`loot_id`);
CREATE INDEX `aowow_skinloot`       ON `creature_template` (`skinning_loot_id`);
CREATE INDEX `aowow_pickpocketloot` ON `creature_template` (`pickpocket_loot_id`);
CREATE INDEX `aowow_faction_A`      ON `creature_template` (`faction`);




CREATE INDEX `aowow_faction`        ON `item_template`     (`required_reputation_faction`);

CREATE INDEX `cq_quest`         ON `creature_questrelation` (`quest`);
