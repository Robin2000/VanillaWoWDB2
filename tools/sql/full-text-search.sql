drop index spellfulltext on aowow_spell;
drop index itemsetfulltext on aowow_itemset;
drop index itemfulltext ON item_template;
drop index itemfulltextloc4 ON locales_item;
drop index gofulltext ON gameobject_template;
drop index gofulltextloc4 ON locales_gameobject;
drop index questfulltext ON quest_template;
drop index questfulltextloc4 ON locales_quest;
drop index creaturefulltext ON creature_template;
drop index creaturefulltextloc4 ON locales_creature;

alter table aowow_spell add fulltext index spellfulltext(spellname_loc0,spellname_loc4) with parser ngram; 
alter table aowow_itemset add fulltext index itemsetfulltext(name_loc0,name_loc4) with parser ngram; 
alter table item_template add fulltext index itemfulltext(name); 
alter table locales_item add fulltext index itemfulltextloc4(name_loc4) with parser ngram; 
alter table gameobject_template add fulltext index gofulltext(name); 
alter table locales_gameobject add fulltext index gofulltextloc4(name_loc4) with parser ngram;
alter table quest_template add fulltext index questfulltext(Title); 
alter table locales_quest add fulltext index questfulltextloc4(Title_loc4) with parser ngram;
alter table creature_template add fulltext index creaturefulltext(name); 
alter table locales_creature add fulltext index creaturefulltextloc4(name_loc4) with parser ngram;

create index zone_xmin on aowow_zones(x_min);
create index zone_xmax on aowow_zones(x_max);
create index zone_ymin on aowow_zones(y_min);
create index zone_ymax on aowow_zones(y_max);



