{strip}
	new Listview({ldelim}
		template:'itemset',
		id:'itemsets',
		{if isset($name)}name:LANG.tab_{$name},{/if}
		{if isset($tabsid)}tabs:{$tabsid},parent:'listview-generic',{/if}
		data:[
			{section name=i loop=$data}
				{ldelim}
					name:'{$data[i].quality2}{$data[i].name|escape:"quotes"}',
					{if $data[i].level_min}level_min:{$data[i].level_min},{/if}
					{if $data[i].level_max}level_max:{$data[i].level_max},{/if}
					{if $data[i].pieces}pieces:[{section name=j loop=$data[i].pieces}{$data[i].pieces[j]}{if $smarty.section.j.last}{else},{/if}{/section}],{/if}
					{if isset($data[i].type)}type:{$data[i].type},{/if}
					{if $data[i].tname}tname:'{$data[i].tname|escape:"quotes"}',{/if}
					{if $data[i].tclass}tclass:'{$data[i].tclass|escape:"quotes"}',{/if}
					{if isset($data[i].classes)}classes:[{section name=j loop=$data[i].classes}{$data[i].classes[j]}{if $smarty.section.j.last}{else},{/if}{/section}],{/if}
					id:{$data[i].entry}
				{rdelim}
				{if $smarty.section.i.last}{else},{/if}
			{/section}
		]
	{rdelim});
{/strip}

