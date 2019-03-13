{strip}
new Listview({ldelim}template:'event_ai', id:'event_ai', 
{if isset($name)}name:LANG.tab_{$name},{/if}
{if isset($tabsid)}tabs:{$tabsid}, parent:'listview-generic',{/if}
data:[
{section name=i loop=$data}
{ldelim}
	comment:'{$data[i].comment|escape:"quotes"}'
	,condition_id:{$data[i].condition_id}
	,event_type:{$data[i].event_type}
	,event_chance:{$data[i].event_chance}
	,action_comment:{$data[i].action_comment|replace:',延时':'\r\n延时'|escape:"quotes"}	
{rdelim}{if $smarty.section.i.last}{else},{/if}
{/section}
]{rdelim});
{/strip}