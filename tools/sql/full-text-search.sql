alter table aowow_spell add fulltext index spellfulltext(spellname_loc0,spellname_loc4) with parser ngram; 
alter table aowow_itemset add fulltext index spellfulltext(name_loc0,name_loc4) with parser ngram; 

alter table item_template add fulltext index itemfulltext(name); 
alter table locales_item add fulltext index itemfulltextloc4(name_loc4) with parser ngram; 


alter table gameobject_template add fulltext index gofulltext(name); 
alter table locales_gameobject add fulltext index gofulltextloc4(name_loc4) with parser ngram;


drop index questfulltext ON quest_template;
drop index questfulltextloc4 ON locales_quest;

alter table quest_template add fulltext index questfulltext(Title,Details,Objectives,OfferRewardText,RequestItemsText,EndText,ObjectiveText1,ObjectiveText2,ObjectiveText3,ObjectiveText4); 
alter table locales_quest add fulltext index questfulltextloc4(Title_loc4,Details_loc4,Objectives_loc4,OfferRewardText_loc4,RequestItemsText_loc4,EndText_loc4,ObjectiveText1_loc4,ObjectiveText2_loc4,ObjectiveText3_loc4,ObjectiveText4_loc4) with parser ngram;

alter table creature_template add fulltext index creaturefulltext(name,subname); 
alter table locales_creature add fulltext index creaturefulltextloc4(name_loc4,subname_loc4) with parser ngram;


ÀýÍâ£º²¹³äË÷Òý

create index zone_xmin on aowow_zones(x_min);
create index zone_xmax on aowow_zones(x_max);
create index zone_ymin on aowow_zones(y_min);
create index zone_ymax on aowow_zones(y_max);



