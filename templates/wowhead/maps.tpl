{include file='header.tpl'}
	<style type="text/css">
{literal} 
#main-contents.main-contents{background-color:#181818 !important}
{/literal}
	</style>
		<div id="main">
			<div id="main-precontents"></div>
			<div id="main-contents" class="main-contents">
				<div class="text">
					<div style="text-align: center">
						<script type="text/javascript">g_initPath([1,1])</script>
						<div class="text">
							<div style="text-align: center">
								<select id="maps-ek" onchange="ma_ChooseZone(this)" class="zone-picker" style="margin: 0">
									<option value="0" style="color: #bbbbbb">{#Eastern_Kingdoms#}</option>
								</select>
								<select id="maps-kalimdor" onchange="ma_ChooseZone(this)" class="zone-picker">
									<option value="0" style="color: #bbbbbb">{#Kalimdor#}</option>
								</select>
								<div style="padding-bottom: 4px"></div>
								<select onchange="ma_ChooseZone(this)" class="zone-picker">
									<option value="0" style="color: #bbbbbb">{#Instances#}</option>
									<optgroup label="{#Dungeons#}" id="maps-dungeons"></optgroup>
									<optgroup label="{#Raids#}" id="maps-raids"></optgroup>
								</select>
								<select onchange="ma_ChooseZone(this)" class="zone-picker">
									<option value="0" style="color: #bbbbbb">{#Battlegrounds#}</option>
									<optgroup label="{#Battlegrounds#}" id="maps-battlegrounds"></optgroup>
								</select>
							</div>
							<div id="mapper" style="display: none; width: 778px; margin: 0 auto">
								<div id="dbs3b53"></div>
								<div class="pad"></div>
								<div style="text-align: center; font-size: 13px">
									<a href="javascript:;" style="margin-right: 2em" id="link-to-this-map">{#Link_to_this_map#}</a>
									<a href="javascript:;" onclick="myMapper.setCoords([])" onmousedown="return false">{#Clear#}</a>
								</div>
							</div>
							<!---->
							<img src="/images/wow2.jpg" alt="世界地图" width="485" height="413" usemap="#Map" />
							<map name="Map" id="Map">
							<area shape="poly" coords="49,23,80,26,88,35,104,24,114,15,159,15,215,16,225,33,219,46,197,46,180,78,167,103,176,118,202,123,211,147,210,166,202,174,192,180,183,185,186,194,190,214,185,225,180,232,174,239,167,248,165,263,163,277,163,287,172,292,175,308,180,331,177,347,171,361,164,374,160,388,143,388,127,386,116,378,107,360,97,348,90,355,82,368,67,370,56,367,42,367,37,358,33,344,29,321,17,314,9,304,15,282,33,40" target="h" href="/wowgis/map-1.html" />
							<area shape="poly" coords="331,20,448,19,453,46,444,62,466,74,475,94,475,116,469,136,460,148,452,170,447,181,461,204,465,227,457,250,456,319,430,350,397,388,342,403,307,343,320,266,327,222,330,187,311,168,313,103,343,77,333,44" target="a" href="/wowgis/map-0.html" />
							</map>
							<!---->
							<script type="text/javascript">ma_Init();</script>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>

{include file='footer.tpl'}
