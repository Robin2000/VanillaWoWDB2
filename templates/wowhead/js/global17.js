function dom(c) {
	if (arguments.length > 1) {
		var b = [];
		var a;
		for (var d = 0, a = arguments.length; d < a; ++d) {
			b.push(dom(arguments[d]))
		}
		return b
	}
	if (typeof c == "string") {
		c = getElement(c)
	}
	return c
}
function normalEvent(myEvent) {
	if (!myEvent) {
		if (typeof event != "undefined") {
			myEvent = event
		} else {
			return null
		}
	}
	if (myEvent.which) {
		myEvent._button = myEvent.which
	} else {
		myEvent._button = myEvent.button;
		if (Browser.ie) {
			if (myEvent._button & 4) {
				myEvent._button = 2
			} else {
				if (myEvent._button & 2) {
					myEvent._button = 3
				}
			}
		} else {
			myEvent._button = myEvent.button + 1
		}
	}
	myEvent._target = myEvent.target ? myEvent.target: myEvent.srcElement;
	myEvent._wheelDelta = myEvent.wheelDelta ? myEvent.wheelDelta: -myEvent.detail;
	return myEvent
}
function toArray(c) {
	var e = [];
	for (var d = 0, b = c.length; d < b; ++d) {
		e.push(c[d])
	}
	return e
}
Function.prototype.bind = function () {
	var func = this,
	a = toArray(arguments),
	b = a.shift();
	return function () {
		return func.apply(b, a.concat(toArray(arguments)))
	}
};
function strcmp(d, c) {
	if (d == c) {
		return 0
	}
	if (d == null) {
		return - 1
	}
	if (c == null) {
		return 1
	}
	return d < c ? -1 : 1
}
function trim(a) {
	return a.replace(/(^\s*|\s*$)/g, "")
}
function rtrim(c, d) {
	var b = c.length;
	while (--b > 0 && c.charAt(b) == d) {}
	c = c.substring(0, b + 1);
	if (c == d) {
		c = ""
	}
	return c
}
function sprintf(b) {
	var a;
	for (a = 1, len = arguments.length; a < len; ++a) {
		b = b.replace("$" + a, arguments[a])
	}
	return b
}
function sprintfa(b) {
	var a;
	for (a = 1, len = arguments.length; a < len; ++a) {
		b = b.replace(new RegExp("\\$" + a, "g"), arguments[a])
	}
	return b
}
function sprintfo(c) {
	if (typeof c == "object" && c.length) {
		var a = c;
		c = a[0];
		var b;
		for (b = 1; b < a.length; ++b) {
			c = c.replace("$" + b, a[b])
		}
		return c
	}
}
function str_replace(e, d, c) {
	while (e.indexOf(d) != -1) {
		e = e.replace(d, c)
	}
	return e
}
function urlencode(a) {
	a = encodeURIComponent(a);
	a = str_replace(a, "+", "%2B");
	return a
}
function urlencode2(a) {
	a = encodeURIComponent(a);
	a = str_replace(a, "%20", "+");
	return a
}
function number_format(a) {
	a = "" + parseInt(a);
	if (a.length <= 3) {
		return a
	}
	return number_format(a.substr(0, a.length - 3)) + "," + a.substr(a.length - 3)
}
function in_array(c, g, h, e) {
	if (c == null) {
		return - 1
	}
	if (h) {
		return in_arrayf(c, g, h, e)
	}
	for (var d = e || 0, b = c.length; d < b; ++d) {
		if (c[d] == g) {
			return d
		}
	}
	return - 1
}
function in_arrayf(c, g, h, e) {
	for (var d = e || 0, b = c.length; d < b; ++d) {
		if (h(c[d]) == g) {
			return d
		}
	}
	return - 1
}
function array_walk(d, h, c) {
	var g;
	for (var e = 0, b = d.length; e < b; ++e) {
		g = h(d[e], c, d, e);
		if (g != null) {
			d[e] = g
		}
	}
}
function array_apply(d, h, c) {
	var g;
	for (var e = 0, b = d.length; e < b; ++e) {
		h(d[e], c, d, e)
	}
}
function getElement(a) {
	return document.getElementById(a)
}
function getElemTag(a, b) {
	return a.getElementsByTagName(b)
}
function createElem(c, b) {
	var a = document.createElement(c);
	if (b) {
		cOr(a, b)
	}
	return a
}
function de(a) {
	a.parentNode.removeChild(a)
}
function append(parent, child) {
	return parent.appendChild(child)
}
function aef(a, b) {
	return a.insertBefore(b, a.firstChild)
}
function ee(a, b) {
	if (!b) {
		b = 0
	}
	while (a.childNodes[b]) {
		a.removeChild(a.childNodes[b])
	}
}
function ct(a) {
	return document.createTextNode(a)
}
function st(a, b) {
	if (a.firstChild && a.firstChild.nodeType == 3) {
		a.firstChild.nodeValue = b
	} else {
		aef(a, ct(b))
	}
}
function nw(a) {
	a.style.whiteSpace = "nowrap"
}
function rf() {
	return false
}
function rf2(a) {
	a = normalEvent(a);
	if (a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) {
		return
	}
	return false
}
function tb() {
	this.blur()
}
function ac(c, d) {
	var a = 0,
	g = 0,
	b;
	while (c) {
		a += c.offsetLeft;
		g += c.offsetTop;
		b = c.parentNode;
		while (b && b != c.offsetParent && b.offsetParent) {
			if (b.scrollLeft || b.scrollTop) {
				a -= (b.scrollLeft | 0);
				g -= (b.scrollTop | 0);
				break
			}
			b = b.parentNode
		}
		c = c.offsetParent
	}
	if (Lightbox.isVisible()) {
		d = true
	}
	if (d && !Browser.ie6) {
		var f = g_getScroll();
		a += f.x;
		g += f.y
	}
	var e = [a, g];
	e.x = a;
	e.y = g;
	return e
}
function aE(b, c, a) {
	if (Browser.ie) {
		b.attachEvent("on" + c, a)
	} else {
		b.addEventListener(c, a, false)
	}
}
function dE(b, c, a) {
	if (Browser.ie) {
		b.detachEvent("on" + c, a)
	} else {
		b.removeEventListener(c, a, false)
	}
}
function sp(a) {
	if (!a) {
		a = event
	}
	if (Browser.ie) {
		a.cancelBubble = true
	} else {
		a.stopPropagation()
	}
}
function sc(h, i, d, f, g) {
	var e = new Date();
	var c = h + "=" + escape(d) + "; ";
	e.setDate(e.getDate() + i);
	c += "expires=" + e.toUTCString() + "; ";
	if (f) {
		c += "path=" + f + "; "
	}
	if (g) {
		c += "domain=" + g + "; "
	}
	document.cookie = c;
	gc.C[h] = d
}
function dc(a) {
	sc(a, -1);
	gc.C[a] = null
}
function gc(f) {
	if (gc.I == null) {
		var e = unescape(document.cookie).split("; ");
		gc.C = {};
		for (var c = 0, a = e.length; c < a; ++c) {
			var g = e[c].indexOf("="),
			b,
			d;
			if (g != -1) {
				b = e[c].substr(0, g);
				d = e[c].substr(g + 1)
			} else {
				b = e[c];
				d = ""
			}
			gc.C[b] = d
		}
		gc.I = 1
	}
	if (!f) {
		return gc.C
	} else {
		return gc.C[f]
	}
}
function ns(a) {
	if (Browser.ie) {
		a.onfocus = tb;
		a.onmousedown = a.onselectstart = a.ondragstart = rf
	}
}
function eO(b) {
	for (var a in b) {
		delete b[a]
	}
}
function cO(f, c, b) {
	for (var e in c) {
		if (b && typeof c[e] == "object" && c[e].length) {
			f[e] = c[e].slice(0)
		} else {
			f[e] = c[e]
		}
	}
}
function cOr(f, c, b) {
	for (var e in c) {
		if (typeof c[e] == "object") {
			if (b && c[e].length) {
				f[e] = c[e].slice(0)
			} else {
				if (!f[e]) {
					f[e] = {}
				}
				cOr(f[e], c[e], b)
			}
		} else {
			f[e] = c[e]
		}
	}
}
var Browser = {
	ie: !!(window.attachEvent && !window.opera),
	opera: !!window.opera,
	safari: navigator.userAgent.indexOf("Safari") != -1,
	gecko: navigator.userAgent.indexOf("Gecko") != -1 && navigator.userAgent.indexOf("KHTML") == -1
};
Browser.ie8 = Browser.ie && navigator.userAgent.indexOf("MSIE 8.0") != -1;
Browser.ie7 = Browser.ie && navigator.userAgent.indexOf("MSIE 7.0") != -1 && !Browser.ie8;
Browser.ie6 = Browser.ie && navigator.userAgent.indexOf("MSIE 6.0") != -1 && !Browser.ie7;
Browser.ie67 = Browser.ie6 || Browser.ie7;
navigator.userAgent.match(/Gecko\/([0-9]+)/);
Browser.geckoVersion = parseInt(RegExp.$1) | 0;
var OS = {
	windows: navigator.appVersion.indexOf("Windows") != -1,
	mac: navigator.appVersion.indexOf("Macintosh") != -1,
	linux: navigator.appVersion.indexOf("Linux") != -1
};
var DomContentLoaded = new
function () {
	var a = [];
	this.now = function () {
		array_apply(a, function (b) {
			b()
		});
		DomContentLoaded = null
	};
	this.addEvent = function (b) {
		a.push(b)
	}
};
function g_getWindowSize() {
	var a = 0,
	b = 0;
	var test1=false;
	var test2=false;
	try{
		test1 = document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight);
	}catch(e){}

	try{
		test2 = document.body && (document.body.clientWidth || document.body.clientHeight);
	}catch(e){}

	if (test1) {
		a = document.documentElement.clientWidth;
		b = document.documentElement.clientHeight
	} else {
		if (test2) {
			a = document.body.clientWidth;
			b = document.body.clientHeight
		} else {
			if (typeof window.innerWidth == "number") {
				a = window.innerWidth;
				b = window.innerHeight
			}
		}
	}
	return {
		w: a,
		h: b
	}
}
function g_getScroll() {
	var a = 0,
	b = 0;
	if (typeof(window.pageYOffset) == "number") {
		a = window.pageXOffset;
		b = window.pageYOffset
	} else {
		if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
			a = document.body.scrollLeft;
			b = document.body.scrollTop
		} else {
			if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
				a = document.documentElement.scrollLeft;
				b = document.documentElement.scrollTop
			}
		}
	}
	return {
		x: a,
		y: b
	}
}
function g_getCursorPos(c) {
	var a, d;
	if (window.innerHeight) {
		a = c.pageX;
		d = c.pageY
	} else {
		var b = g_getScroll();
		a = c.clientX + b.x;
		d = c.clientY + b.y
	}
	return {
		x: a,
		y: d
	}
}
function g_scrollTo(c, b) {
	var l, k = g_getWindowSize(),
	m = g_getScroll(),
	i = k.w,
	e = k.h,
	g = m.x,
	d = m.y;
	c = dom(c);
	if (b == null) {
		b = []
	} else {
		if (typeof b == "number") {
			b = [b]
		}
	}
	l = b.length;
	if (l == 0) {
		b[0] = b[1] = b[2] = b[3] = 0
	} else {
		if (l == 1) {
			b[1] = b[2] = b[3] = b[0]
		} else {
			if (l == 2) {
				b[2] = b[0];
				b[3] = b[1]
			} else {
				if (l == 3) {
					b[3] = b[1]
				}
			}
		}
	}
	l = ac(c);
	var a = l[0] - b[3],
	h = l[1] - b[0],
	j = l[0] + c.offsetWidth + b[1],
	f = l[1] + c.offsetHeight + b[2];
	if (j - a > i || a < g) {
		g = a
	} else {
		if (j - i > g) {
			g = j - i
		}
	}
	if (f - h > e || h < d) {
		d = h
	} else {
		if (f - e > d) {
			d = f - e
		}
	}
	scrollTo(g, d)
}
function g_setTextNodes(c, b) {
	if (c.nodeType == 3) {
		c.nodeValue = b
	} else {
		for (var a = 0; a < c.childNodes.length; ++a) {
			g_setTextNodes(c.childNodes[a], b)
		}
	}
}
function g_getTextContent(c) {
	var a = "";
	for (var b = 0; b < c.childNodes.length; ++b) {
		if (c.childNodes[b].nodeValue) {
			a += c.childNodes[b].nodeValue
		} else {
			if (c.childNodes[b].nodeName == "BR") {
				if (Browser.ie) {
					a += "\r"
				} else {
					a += "\n"
				}
			}
		}
		a += g_getTextContent(c.childNodes[b])
	}
	return a
}
function g_setSelectedLink(c, b) {
	if (!g_setSelectedLink.groups) {
		g_setSelectedLink.groups = {}
	}
	var a = g_setSelectedLink.groups;
	if (a[b]) {
		a[b].className = a[b].className.replace("selected", "")
	}
	c.className += " selected";
	a[b] = c
}
function g_toggleDisplay(a) {
	if (a.style.display == "none") {
		a.style.display = "";
		return true
	} else {
		a.style.display = "none";
		return false
	}
}
function g_enableScroll(a) {
	if (!a) {
		aE(document, "mousewheel", g_enableScroll.F);
		aE(window, "DOMMouseScroll", g_enableScroll.F)
	} else {
		dE(document, "mousewheel", g_enableScroll.F);
		dE(window, "DOMMouseScroll", g_enableScroll.F)
	}
}
g_enableScroll.F = function (a) {
	if (a.stopPropagation) {
		a.stopPropagation()
	}
	if (a.preventDefault) {
		a.preventDefault()
	}
	a.returnValue = false;
	a.cancelBubble = true;
	return false
};
function g_getGets() {
	if (g_getGets.C != null) {
		return g_getGets.C
	}
	var e = {};
	if (location.search) {
		var f = decodeURIComponent(location.search.substr(1)).split("&");
		for (var c = 0, a = f.length; c < a; ++c) {
			var g = f[c].indexOf("="),
			b,
			d;
			if (g != -1) {
				b = f[c].substr(0, g);
				d = f[c].substr(g + 1)
			} else {
				b = f[c];
				d = ""
			}
			e[b] = d
		}
	}
	g_getGets.C = e;
	return e
}
function g_createRect(d, c, a, b) {
	return {
		l: d,
		t: c,
		r: d + a,
		b: c + b
	}
}
function g_intersectRect(d, c) {
	return ! (d.l >= c.r || c.l >= d.r || d.t >= c.b || c.t >= d.b)
}
function g_createRange(c, a) {
	range = {};
	for (var b = c; b <= a; ++b) {
		range[b] = b
	}
	return range
}
function g_sortIdArray(a, b, c) {
	a.sort(c ?
	function (e, d) {
		return strcmp(b[e][c], b[d][c])
	}: function (e, d) {
		return strcmp(b[e], b[d])
	})
}
function g_sortJsonArray(e, d, f, a) {
	var c = [];
	for (var b in e) {
		if (d[b] && (a == null || a(d[b]))) {
			c.push(b)
		}
	}
	if (f != null) {
		c.sort(f)
	} else {
		g_sortIdArray(c, d)
	}
	return c
}
function g_urlize(a, b) {
	a = str_replace(a, "'", "");
	a = trim(a);
	if (b) {
		a = str_replace(a, " ", "-")
	} else {
		a = a.replace(/[^a-z0-9]/i, "-")
	}
	a = str_replace(a, "--", "-");
	a = str_replace(a, "--", "-");
	a = rtrim(a, "-");
	a = a.toLowerCase();
	return a
}
function g_getLocale(a) {
	if (a && g_locale.id == 25) {
		return 0
	}
	return g_locale.id
}
function g_createReverseLookupJson(b) {
	var c = {};
	for (var a in b) {
		c[b[a]] = a
	}
	return c
}
function g_initHeader(c) {
	var l = createElem("dl"),
	p = (c == 5);
	for (var k = 0, m = mn_path.length; k < m; ++k) {
		var g = createElem("dt");
		var q = createElem("a");
		var n = createElem("ins");
		var h = createElem("big");
		var f = createElem("span");
		var o = mn_path[k][0];
		var j = (o == c);
		var e = (!j && mn_path[k][3]);
		if (p && o == 5) {
			e = true;
			mn_path[k][3] = mn_profiles
		}
		if (e) {
			q.menu = mn_path[k][3];
			q.onmouseover = Menu.show;
			q.onmouseout = Menu.hide
		} else {
			q.onmouseover = Menu._hide
		}
		if (mn_path[k][2]) {
			q.href = mn_path[k][2]
		} else {
			q.href = "javascript:;";
			ns(q);
			q.style.cursor = "default"
		}
		if (j) {
			q.className = "selected"
		}
		append(h, ct(mn_path[k][1].charAt(0)));
		append(n, h);
		append(n, ct(mn_path[k][1].substr(1)));
		append(q, n);
		append(q, f);
		append(g, q);
		append(l, g)
	}
	append(getElement("ptewhjkst46"), l);
	var b = getElement("kbl34h6b43");
	if (c != null && c >= 0 && c < mn_path.length) {
		switch (c) {
		case 0:
			Menu.addButtons(b, Menu.explode(mn_database));
			break;
		case 1:
			Menu.addButtons(b, mn_tools);
			break;
		case 2:
			Menu.addButtons(b, Menu.explode(mn_more));
			break;
		case 3:
			Menu.addButtons(b, Menu.explode(mn_forums));
			break;
		case 5:
			pr_initTopBarSearch();
			break
		}
	} else {
		append(b, ct(String.fromCharCode(160)))
	}
	var r = getElement("oh2345v5ks");
	var s = r.previousSibling;
	var d = r.parentNode;
	ns(s);
	s.onclick = function () {
		this.parentNode.onsubmit()
	};
	if (Browser.ie) {
		setTimeout(function () {
			r.value = ""
		},
		1)
	}
	if (r.value == "") {
		r.className = "search-database"
	}
	r.onmouseover = function () {
		if (trim(this.value) != "") {
			this.className = ""
		}
	};
	r.onfocus = function () {
		this.className = ""
	};
	r.onblur = function () {
		if (trim(this.value) == "") {
			this.className = "search-database";
			this.value = ""
		}
	};
	d.onsubmit = function () {
		var a = this.elements[0].value;
		if (trim(a) == "") {
			return false
		}
		this.submit()
	}
}
function g_initHeaderMenus() {
	var c = getElement("toptabs-menu-user");
	if (c) {
		c.menu = [[0, LANG.userpage, "?user=" + g_user.name], [0, LANG.settings, "?account"], [0, LANG.signout, "?account=signout"]];
		if (location.href.match(new RegExp("?user=" + g_user.name + "$", "i"))) {
			c.menu[0].checked = 1
		} else {
			if (location.href.indexOf("?account") != -1) {
				c.menu[1].checked = 1
			}
		}
		c.onmouseover = Menu.show;
		c.onmouseout = Menu.hide;
		c.href = "?user=" + g_user.name
	}
	c = getElement("toptabs-menu-profiles");
	if (c) {
		c.menu = [];
		if (g_user.characters) {
			c.menu.push([, LANG.tab_characters]);
			for (var f = 0, b = g_user.characters.length; f < b; ++f) {
				var h = g_user.characters[f],
				e = [0, h.name + " (" + h.realmname + LANG.hyphen + h.region.toUpperCase() + ")", "?profile=" + h.region + "." + h.realm + "." + g_cleanCharacterName(h.name)];
				e.smallIcon = h.icon ? h.icon: "chr_" + g_file_races[h.race] + "_" + g_file_genders[h.gender] + "_" + g_file_classes[h.classs] + "0" + (h.level > 59 ? (Math.floor((h.level - 60) / 10) + 2) : 1);
				c.menu.push(e)
			}
		}
		c.menu.push([, LANG.tab_profiles]);
		if (g_user.profiles) {
			for (var f = 0, b = g_user.profiles.length; f < b; ++f) {
				var h = g_user.profiles[f],
				e = [0, h.name, "?profile=" + h.id];
				e.smallIcon = h.icon ? h.icon: "chr_" + g_file_races[h.race] + "_" + g_file_genders[h.gender] + "_" + g_file_classes[h.classs] + "0" + (h.level > 59 ? (Math.floor((h.level - 60) / 10) + 2) : 1);
				c.menu.push(e)
			}
		}
		var e = [0, "(" + LANG.button_new + ")", "?profile&new"];
		e.smallIcon = "inv_misc_questionmark";
		c.menu.push(e);
		c.menu.rightAligned = 1;
		c.onmouseover = Menu.show;
		c.onmouseout = Menu.hide;
		c.href = "?user=" + g_user.name + "#profiles"
	}
	c = getElement("toptabs-menu-language");
	if (c) {
		var g = "www",
		d = location.href,
		j = location.hostname.indexOf(".");
		if (j != -1 && j <= 5) {
			g = location.hostname.substr(0, j)
		}
		j = d.indexOf("#");
		if (j != -1) {
			d = d.substr(0, j)
		}
		//c.menu = [[0, "Deutsch", (g_locale.id != 3 ? d.replace(g, "de") : null)], [0, "English", (g_locale.id != 0 ? d.replace(g, "www") : null)], [0, "Espa" + String.fromCharCode(241) + "ol", (g_locale.id != 6 ? d.replace(g, "es") : null)], [0, "Fran" + String.fromCharCode(231) + "ais", (g_locale.id != 2 ? d.replace(g, "fr") : null)], [0, String.fromCharCode(1056, 1091, 1089, 1089, 1082, 1080, 1081), (g_locale.id != 7 ? d.replace(g, "ru") : null)]];
		c.menu = [[0, "English", (g_locale.id != 0 ? "/?locale=0" : null)], [0, "中文", (g_locale.id != 4 ? "/?locale=4" : null)]];
		c.menu.rightAligned = 1;
		if (g_locale.id != 25) {
			c.menu[{
				0 : 0,
				4 : 1
			} [g_locale.id]].checked = 1
		}
		c.onmouseover = Menu.show;
		c.onmouseout = Menu.hide
	}
}
function g_initPath(p, f) {
	var h = mn_path,
	c = null,
	k = null,
	o = 0,
	l = getElement("main-precontents"),
	n = createElem("div");
	ee(l);
	if (g_initPath.lastIt) {
		g_initPath.lastIt.checked = null
	}
	n.className = "path";
	if (f != null) {
		var m = createElem("div");
		m.className = "path-right";
		var q = createElem("a");
		q.href = "javascript:;";
		q.id = "fi_toggle";
		ns(q);
		q.onclick = fi_toggle;
		if (f) {
			q.className = "disclosure-on";
			append(q, ct(LANG.fihide))
		} else {
			q.className = "disclosure-off";
			append(q, ct(LANG.fishow))
		}
		append(m, q);
		append(l, m)
	}
	for (var g = 0; g < p.length; ++g) {
		var q, b, r = 0;
		for (var e = 0; e < h.length; ++e) {
			if (h[e][0] == p[g]) {
				r = 1;
				h = h[e];
				h.checked = 1;
				break
			}
		}
		if (!r) {
			o = 1;
			break
		}
		q = createElem("a");
		b = createElem("span");
		if (h[2]) {
			q.href = h[2]
		} else {
			q.href = "javascript:;";
			ns(q);
			q.style.textDecoration = "none";
			q.style.color = "white";
			q.style.cursor = "default"
		}
		if (g < p.length - 1 && h[3]) {
			b.className = "menuarrow"
		}
		append(q, ct(h[4] == null ? h[1] : h[4]));
		if (g == 0) {
			q.menu = mn_path
		} else {
			q.menu = c[3]
		}
		q.onmouseover = Menu.show;
		q.onmouseout = Menu.hide;
		append(b, q);
		append(n, b);
		k = b;
		c = h;
		h = h[3];
		if (!h) {
			o = 1;
			break
		}
	}
	if (o && k) {
		k.className = ""
	} else {
		if (c && c[3]) {
			k.className = "menuarrow";
			q = createElem("a");
			b = createElem("span");
			q.href = "javascript:;";
			ns(q);
			q.style.textDecoration = "none";
			q.style.paddingRight = "16px";
			q.style.color = "white";
			q.style.cursor = "default";
			append(q, ct("..."));
			q.menu = c[3];
			q.onmouseover = Menu.show;
			q.onmouseout = Menu.hide;
			append(b, q);
			append(n, b)
		}
	}
	var m = createElem("div");
	m.className = "clear";
	append(n, m);
	append(l, n);
	g_initPath.lastIt = c
}
function g_formatTimeElapsed(e) {
	function c(m, l, i) {
		if (i && LANG.timeunitsab[l] == "") {
			i = 0
		}
		if (i) {
			return m + " " + LANG.timeunitsab[l]
		} else {
			return m + " " + (m == 1 ? LANG.timeunitssg[l] : LANG.timeunitspl[l])
		}
	}
	var g = [31557600, 2629800, 604800, 86400, 3600, 60, 1];
	var a = [1, 3, 3, -1, 5, -1, -1];
	e = Math.max(e, 1);
	for (var f = 3, h = g.length; f < h; ++f) {
		if (e >= g[f]) {
			var d = f;
			var k = Math.floor(e / g[d]);
			if (a[d] != -1) {
				var b = a[d];
				e %= g[d];
				var j = Math.floor(e / g[b]);
				if (j > 0) {
					return c(k, d, 1) + " " + c(j, b, 1)
				}
			}
			return c(k, d, 0)
		}
	}
	return "(n/a)"
}
function g_formatDateSimple(g, c) {
	function a(b) {
		return (b < 10 ? "0" + b: b)
	}
	var i = "",
	j = g.getDate(),
	f = g.getMonth() + 1,
	h = g.getFullYear();
	i += sprintf(LANG.date_simple, a(j), a(f), h);
	if (c == 1) {
		var k = g.getHours() + 1,
		e = g.getMinutes() + 1;
		i += LANG.date_at + a(k) + ":" + a(e)
	}
	return i
}
function g_cleanCharacterName(e) {
	var d = "";
	for (var c = 0, a = e.length; c < a; ++c) {
		var b = e.charAt(c).toLowerCase();
		if (b >= "a" && b <= "z") {
			d += b
		} else {
			d += e.charAt(c)
		}
	}
	return d
}
function g_createGlow(a, h) {
	var e = createElem("span");
	for (var c = -1; c <= 1; ++c) {
		for (var b = -1; b <= 1; ++b) {
			var g = createElem("div");
			g.style.position = "absolute";
			g.style.whiteSpace = "nowrap";
			g.style.left = c + "px";
			g.style.top = b + "px";
			if (c == 0 && b == 0) {
				g.style.zIndex = 4
			} else {
				g.style.color = "black";
				g.style.zIndex = 2
			}
			append(g, ct(a));
			append(e, g)
		}
	}
	e.style.position = "relative";
	e.className = "glow" + (h != null ? " " + h: "");
	var f = createElem("span");
	f.style.visibility = "hidden";
	append(f, ct(a));
	append(e, f);
	return e
}
function g_createProgressBar(c) {
	if (c == null) {
		c = {}
	}
	if (!c.text) {
		c.text = " "
	}
	if (c.color == null) {
		c.color = "rep0"
	}
	if (c.width == null) {
		c.width = 100
	}
	var d, e;
	if (c.hoverText) {
		d = createElem("a");
		d.href = "javascript:;"
	} else {
		d = createElem("span")
	}
	d.className = "progressbar";
	if (c.text || c.hoverText) {
		e = createElem("div");
		e.className = "progressbar-text";
		if (c.text) {
			var a = createElem("del");
			append(a, ct(c.text));
			append(e, a)
		}
		if (c.hoverText) {
			var b = createElem("ins");
			append(b, ct(c.hoverText));
			append(e, b)
		}
		append(d, e)
	}
	e = createElem("div");
	e.className = "progressbar-" + c.color;
	e.style.width = c.width + "%";
	append(e, ct(String.fromCharCode(160)));
	append(d, e);
	return d
}
function g_createReputationBar(g) {
	var f = g_createReputationBar.P;
	if (!g) {
		g = 0
	}
	g += 42000;
	if (g < 0) {
		g = 0
	} else {
		if (g > 84999) {
			g = 84999
		}
	}
	var e = g,
	h, b = 0;
	for (var d = 0, a = f.length; d < a; ++d) {
		if (f[d] > e) {
			break
		}
		if (d < a - 1) {
			e -= f[d];
			b = d + 1
		}
	}
	h = f[b];
	var c = {
		text: g_reputation_standings[b],
		hoverText: e + " / " + h,
		color: "rep" + b,
		width: parseInt(e / h * 100)
	};
	return g_createProgressBar(c)
}
g_createReputationBar.P = [36000, 3000, 3000, 3000, 6000, 12000, 21000, 999];
function g_createAchievementBar(a, c) {
	if (!a) {
		a = 0
	}
	var b = {
		text: a + (c > 0 ? " / " + c: ""),
		color: (c > 700 ? "rep7": "ach" + (c > 0 ? 0 : 1)),
		width: (c > 0 ? parseInt(a / c * 100) : 100)
	};
	return g_createProgressBar(b)
}
function g_createCaptcha(c) {
	var b = createElem("a");
	b.href = "javascript:;";
	b.className = "captcha";
	b.title = LANG.tooltip_captcha;
	if (c & 1) {
		b.style.marginLeft = b.style.marginRight = "auto"
	}
	if (Browser.ie6) {
		var d = createElem("img");
		d.src = "?captcha&foo=" + Math.random();
		append(b, d);
		b.onclick = function () {
			de(this.firstChild);
			var a = createElem("img");
			a.src = "?captcha&foo=" + Math.random();
			append(b, a);
			this.blur()
		}
	} else {
		b.style.backgroundImage = "url(?captcha&foo=" + Math.random() + ")";
		b.onclick = function () {
			this.style.backgroundImage = "url(?captcha&foo=" + Math.random() + ")"
		}
	}
	return b
}
function g_revealCaptcha(a) {
	if ((g_user.permissions & 1) == 0) {
		var c = getElement("klrbetkjerbt46");
		if (!c.firstChild) {
			var b = g_createCaptcha(a);
			append(c, b);
			c.parentNode.style.display = ""
		}
	}
}
function g_convertRatingToPercent(g, b, f, d) {
	var e = {
		12 : 1.5,
		13 : 12,
		14 : 15,
		15 : 5,
		16 : 10,
		17 : 10,
		18 : 8,
		19 : 14,
		20 : 14,
		21 : 14,
		22 : 10,
		23 : 10,
		24 : 0,
		25 : 0,
		26 : 0,
		27 : 0,
		28 : 10,
		29 : 10,
		30 : 10,
		31 : 10,
		32 : 14,
		33 : 0,
		34 : 0,
		35 : 25,
		36 : 10,
		37 : 2.5,
		44 : 3.756097412109376
	};
	if (g < 0) {
		g = 1
	} else {
		if (g > 80) {
			g = 80
		}
	}
	if ((b == 14 || b == 12 || b == 15) && g < 34) {
		g = 34
	}
	if ((b == 28 || b == 36) && (d == 2 || d == 6 || d == 7 || d == 11)) {
		e[b] /= 1.3
	}
	if (f < 0) {
		f = 0
	}
	var a;
	if (e[b] == null) {
		a = 0
	} else {
		var c;
		if (g > 70) {
			c = (82 / 52) * Math.pow((131 / 63), ((g - 70) / 10))
		} else {
			if (g > 60) {
				c = (82 / (262 - 3 * g))
			} else {
				if (g > 10) {
					c = ((g - 8) / 52)
				} else {
					c = 2 / 52
				}
			}
		}
		a = f / e[b] / c
	}
	return a
}
function g_setRatingLevel(f, e, b, c) {
	var d = prompt(sprintf(LANG.prompt_ratinglevel, 1, 80), e);
	if (d != null) {
		d |= 0;
		if (d != e && d >= 1 && d <= 80) {
			e = d;
			var a = g_convertRatingToPercent(e, b, c);
			a = (Math.round(a * 100) / 100);
			if (b != 12 && b != 37) {
				a += "%"
			}
			f.innerHTML = sprintf(LANG.tooltip_combatrating, a, e);
			f.onclick = g_setRatingLevel.bind(0, f, e, b, c)
		}
	}
}
function g_getMoneyHtml(c) {
	var b = 0,
	a = "";
	if (c >= 10000) {
		b = 1;
		a += '<span class="moneygold">' + Math.floor(c / 10000) + "</span>";
		c %= 10000
	}
	if (c >= 100) {
		if (b) {
			a += " "
		} else {
			b = 1
		}
		a += '<span class="moneysilver">' + Math.floor(c / 100) + "</span>";
		c %= 100
	}
	if (c >= 1) {
		if (b) {
			a += " "
		} else {
			b = 1
		}
		a += '<span class="moneycopper">' + c + "</span>"
	}
	return a
}
function g_getPatchVersion(e) {
	var d = g_getPatchVersion;
	var b = 0,
	c = d.T.length - 2,
	a;
	while (c > b) {
		a = Math.floor((c + b) / 2);
		if (e >= d.T[a] && e < d.T[a + 1]) {
			return d.V[a]
		}
		if (e >= d.T[a]) {
			b = a + 1
		} else {
			c = a - 1
		}
	}
	a = Math.ceil((c + b) / 2);
	return d.V[a]
}
g_getPatchVersion.V = ["1.12.0", "1.12.1", "1.12.2", "2.0.1", "2.0.3", "2.0.4", "2.0.5", "2.0.6", "2.0.7", "2.0.8", "2.0.10", "2.0.12", "2.1.0", "2.1.1", "2.1.2", "2.1.3", "2.2.0", "2.2.2", "2.2.3", "2.3.0", "2.3.2", "2.3.3", "2.4.0", "2.4.1", "2.4.2", "2.4.3", "3.0.2", "3.0.3", "3.0.8", "3.0.9", "3.1.0", "3.1.1", "3.1.2", "3.1.3", "???"];
g_getPatchVersion.T = [1153540800000, 1159243200000, 1160712000000, 1165294800000, 1168318800000, 1168578000000, 1168750800000, 1169528400000, 1171342800000, 1171602000000, 1173157200000, 1175572800000, 1179806400000, 1181016000000, 1182225600000, 1184040000000, 1190692800000, 1191297600000, 1191902400000, 1194930000000, 1199768400000, 1200978000000, 1206417600000, 1207022400000, 1210651200000, 1216094400000, 1223956800000, 1225774800000, 1232427600000, 1234242000000, 1239681600000, 1240286400000, 1242705600000, 1243915200000, 9999999999999];
function g_expandSite() {
	getElement("wrapper").className = "nosidebar";
	Ads.removeAll();
	var a = getElement("topbar-expand");
	if (a) {
		de(a)
	}
	a = getElement("sidebar");
	if (a) {
		de(a)
	}
}
function g_insertTag(d, a, i, j) {
	var b = dom(d);
	b.focus();
	if (b.selectionStart != null) {
		var l = b.selectionStart,
		h = b.selectionEnd,
		k = b.scrollLeft,
		c = b.scrollTop;
		var g = b.value.substring(l, h);
		if (typeof j == "function") {
			g = j(g)
		}
		b.value = b.value.substr(0, l) + a + g + i + b.value.substr(h);
		b.selectionStart = b.selectionEnd = h + a.length;
		b.scrollLeft = k;
		b.scrollTop = c
	} else {
		if (document.selection && document.selection.createRange) {
			var f = document.selection.createRange();
			if (f.parentElement() != b) {
				return
			}
			var g = f.text;
			if (typeof j == "function") {
				g = j(g)
			}
			f.text = a + g + i
		}
	}
	if (b.onkeyup) {
		b.onkeyup()
	}
}
function g_getLocaleFromDomain(a) {
	var c = g_getLocaleFromDomain.L;
	if (a) {
		var b = a.indexOf(".");
		if (b != -1) {
			a = a.substring(0, b)
		}
	}
	return (c[a] ? c[a] : 0)
}
g_getLocaleFromDomain.L = {
	fr: 2,
	de: 3,
	es: 6,
	ru: 7,
	ptr: 25
};
function g_getDomainFromLocale(a) {
	var b;
	if (g_getDomainFromLocale.L) {
		b = g_getDomainFromLocale.L
	} else {
		b = g_getDomainFromLocale.L = g_createReverseLookupJson(g_getLocaleFromDomain.L)
	}
	return (b[a] ? b[a] : "www")
}
function g_getIdFromTypeName(a) {
	var b = g_getIdFromTypeName.L;
	return (b[a] ? b[a] : -1)
}
g_getIdFromTypeName.L = {
	npc: 1,
	object: 2,
	item: 3,
	itemset: 4,
	quest: 5,
	spell: 6,
	zone: 7,
	faction: 8,
	pet: 9,
	achievement: 10,
	profile: 100
};
function g_getIngameLink(a, c, b) {
	prompt(LANG.prompt_ingamelink, '/script DEFAULT_CHAT_FRAME:AddMessage("' + sprintf(LANG.message_ingamelink, "\\124c" + a + "\\124H" + c + "\\124h[" + b + ']\\124h\\124r");'))
}
function g_isEmailValid(a) {
	return a.match(/^([a-z0-9._-]+)(\+[a-z0-9._-]+)?(@[a-z0-9.-]+\.[a-z]{2,4})$/i) != null
}
function g_onAfterTyping(a, d, c) {
	var e;
	var b = function () {
		if (e) {
			clearTimeout(e);
			e = null
		}
		e = setTimeout(d, c)
	};
	a.onkeyup = b
}
function g_onClick(c, d) {
	var b = 0;
	function a(e) {
		if (b) {
			if (b != e) {
				return
			}
		} else {
			b = e
		}
		d(true)
	}
	c.oncontextmenu = function () {
		a(1);
		return false
	};
	c.onmouseup = function (f) {
		f = normalEvent(f);
		if (f._button == 3 || f.shiftKey || f.ctrlKey) {
			a(2)
		} else {
			if (f._button == 1) {
				d(false)
			}
		}
		return false
	}
}
function g_createOrRegex(c) {
	var e = c.split(" "),
	d = "";
	for (var b = 0, a = e.length; b < a; ++b) {
		if (b > 0) {
			d += "|"
		}
		d += e[b]
	}
	return new RegExp("(" + d + ")", "gi")
}
function g_addPages(l, b) {
	function o(q, d) {
		var i;
		if (q == b.page) {
			i = createElem("span");
			i.className = "selected"
		} else {
			i = createElem("a");
			i.href = (q > 1 ? b.url + b.sep + q + b.pound: b.url + b.pound)
		}
		append(i, ct(d != null ? d: q));
		return i
	}
	if (!b.pound) {
		b.pound = ""
	}
	if (!b.sep) {
		b.sep = "."
	}
	if (b.allOrNothing && b.nPages <= 1) {
		return
	}
	var c = (b.align && b.align == "left");
	var e = createElem("div"),
	k,
	p = createElem("var");
	e.className = "pages";
	if (c) {
		e.className += " pages-left"
	}
	if (b.nPages > 1) {
		k = createElem("div");
		k.className = "pages-numbers";
		var n = Math.max(2, b.page - 3);
		var h = Math.min(b.nPages - 1, b.page + 3);
		var m = [];
		if (b.page != b.nPages) {
			m.push(o(b.page + 1, LANG.lvpage_next + String.fromCharCode(8250)))
		}
		m.push(o(b.nPages));
		if (h < b.nPages - 1) {
			var a = createElem("span");
			append(a, ct("..."));
			m.push(a)
		}
		for (var g = h; g >= n; --g) {
			m.push(o(g))
		}
		if (n > 2) {
			var a = createElem("span");
			append(a, ct("..."));
			m.push(a)
		}
		m.push(o(1));
		if (b.page != 1) {
			m.push(o(b.page - 1, String.fromCharCode(8249) + LANG.lvpage_previous))
		}
		if (c) {
			m.reverse()
		}
		for (var g = 0, j = m.length; g < j; ++g) {
			append(k, m[g])
		}
		k.firstChild.style.marginRight = "0";
		k.lastChild.style.marginLeft = "0"
	}
	var p = createElem("var");
	append(p, ct(sprintf(LANG[b.wording[b.nItems == 1 ? 0 : 1]], b.nItems)));
	if (b.nPages > 1) {
		var a = createElem("span");
		append(a, ct(String.fromCharCode(8211)));
		append(p, a);
		var f = createElem("a");
		f.className = "gotopage";
		f.href = "javascript:;";
		ns(f);
		if (Browser.ie) {
			append(f, ct(" "))
		}
		f.onclick = function () {
			var d = prompt(sprintf(LANG.prompt_gotopage, 1, b.nPages), b.page);
			if (d != null) {
				d |= 0;
				if (d != b.page && d >= 1 && d <= b.nPages) {
					document.location.href = (d > 1 ? b.url + b.sep + d + b.pound: b.url + b.pound)
				}
			}
		};
		f.onmouseover = function (d) {
			Tooltip.showAtCursor(d, LANG.tooltip_gotopage, 0, 0, "q")
		};
		f.onmousemove = Tooltip.cursorUpdate;
		f.onmouseout = Tooltip.hide;
		append(p, f)
	}
	if (c) {
		append(e, p);
		if (k) {
			append(e, k)
		}
	} else {
		if (k) {
			append(e, k)
		}
		append(e, p)
	}
	append(l, e)
}
function g_disclose(a, b) {
	b.className = "disclosure-" + (g_toggleDisplay(a) ? "on": "off");
	return false
}
function co_addYourComment() {
	tabsContribute.focus(0);
	var a = getElemTag(document.forms.addcomment, "textarea")[0];
	a.focus()
}
function co_cancelReply() {
	getElement("gjkdlfgkjh436").style.display = "none";
	document.forms.addcomment.elements.replyto.value = ""
}
function co_validateForm(b) {
	var a = getElemTag(b, "textarea")[0];
	if (Listview.funcBox.coValidate(a)) {
		if (g_user.permissions & 1) {
			return true
		}
		if (b.elements.captcha.value.length == 5) {
			return true
		} else {
			alert(LANG.message_codenotentered);
			b.elements.captcha.focus()
		}
	}
	return false
}
function ss_submitAScreenshot() {
	tabsContribute.focus(1)
}
function ss_validateForm(a) {
	if (!a.elements.screenshotfile.value.length) {
		alert(LANG.message_noscreenshot);
		return false
	}
	return true
}
function ss_appendSticky() {
try{
	var m = getElement("infobox-sticky");
	var i = g_pageInfo.type;
	var h = g_pageInfo.typeId;
	var k = in_array(lv_screenshots, 1, function (a) {
		return a.sticky
	});
	if (k != -1) {
		var c = lv_screenshots[k];
		var l = createElem("a");
		l.href = "#screenshots:id=" + c.id;
		l.onclick = function (a) {
			ScreenshotViewer.show({
				screenshots: lv_screenshots,
				pos: k
			});
			return rf2(a)
		};
		var f = createElem("img"),
		e = Math.min(150 / c.width, 150 / c.height);
		f.src = "http://www.topwow.top/screenshots/thumb/" + c.id + ".webp";
		f.className = "border";
		append(l, f);
		append(m, l);
		var g = createElem("div");
		var n = createElem("small");
		l = createElem("a");
		if (g_user.id > 0) {
			l.href = "javascript:;";
			l.onclick = ss_submitAScreenshot
		} else {
			l.href = "?account=signin"
		}
		append(l, ct(LANG.infobox_submitone));
		append(n, l);
		append(n, ct(" " + String.fromCharCode(160)));
		var j = createElem("b");
		append(j, ct("|"));
		append(n, j);
		append(n, ct(String.fromCharCode(160) + " "));
		l = createElem("a");
		l.href = "javascript:;";
		l.onclick = function () {
			tabsRelated.focus( - 1);
			return false
		};
		append(l, ct(sprintf(LANG.infobox_showall, lv_screenshots.length)));
		append(n, l);
		append(g, n);
		append(m, g)
	} else {
		var l;
		if (g_user.id > 0) {
			l = '<a href="javascript:;" onclick="ss_submitAScreenshot(); return false">'
		} else {
			l = '<a href="?account=signin">'
		}
		m.innerHTML = sprintf(LANG.infobox_noneyet, l + LANG.infobox_submitone + "</a>")
	}
	}catch(e){}
}
function su_addToSaved(b, a) {
	if (!b) {
		return
	}
	var d = gc("compare_groups"),
	c = "?compare";
	if (!d || confirm(LANG.confirm_addtosaved)) {
		if (d) {
			b = d + ";" + b
		}
		sc("compare_groups", 20, b, "/", ".wowhead.com")
	} else {
		c += "=" + b
	}
	if (a) {
		window.open(c)
	} else {
		location.href = c
	}
}
function Ajax(b, c) {
	if (!b) {
		return
	}
	var a;
	try {
		a = new XMLHttpRequest()
	} catch(d) {
		try {
			a = new ActiveXObject("Msxml2.XMLHTTP")
		} catch(d) {
			try {
				a = new ActiveXObject("Microsoft.XMLHTTP")
			} catch(d) {
				if (window.createRequest) {
					a = window.createRequest()
				} else {
					alert(LANG.message_ajaxnotsupported);
					return
				}
			}
		}
	}
	this.request = a;
	cO(this, c);
	this.method = this.method || (this.params && "POST") || "GET";
	a.open(this.method, b, this.async == null ? true: this.async);
	a.onreadystatechange = Ajax.onReadyStateChange.bind(this);
	if (this.method.toUpperCase() == "POST") {
		a.setRequestHeader("Content-Type", (this.contentType || "application/x-www-form-urlencoded") + "; charset=" + (this.encoding || "UTF-8"))
	}
	a.send(this.params)
}
Ajax.onReadyStateChange = function () {
	if (this.request.readyState == 4) {
		if (this.request.status == 0 || (this.request.status >= 200 && this.request.status < 300)) {
			this.onSuccess != null && this.onSuccess(this.request, this)
		} else {
			this.onFailure != null && this.onFailure(this.request, this)
		}
		if (this.onComplete != null) {
			this.onComplete(this.request, this)
		}
	}
};
function g_ajaxIshRequest(b) {
	var c = document.getElementsByTagName("head")[0],
	a = g_getGets();
	if (a.refresh != null) {
		b += "&refresh"
	}
	append(c, createElem("script", {
		type: "text/javascript",
		src: b
	}))
}
var Menu = {
	iframes: [],
	divs: [],
	selection: [],
	show: function () {
		try {
			clearTimeout(Menu.timer);
			if (Menu.currentLink) {
				Menu._show(this)
			} else {
				if (this.className.indexOf("open") == -1) {
					this.className += " open"
				}
				Menu.timer = setTimeout(Menu._show.bind(0, this), 100)
			}
		} catch(a) {}
	},
	_show: function (b) {
		if (Menu.currentLink != b) {
			var a = ac(b);
			Menu._hide();
			Menu.selection = [ - 1];
			Menu.currentLink = b;
			Menu.showDepth(0, b.menu, a[0], a[1] + b.offsetHeight + 1, b.offsetHeight + 8, b.offsetWidth, a[1], false);
			if (b.className.indexOf("open") == -1) {
				b.className += " open"
			}
		} else {
			Menu.truncate(0);
			Menu.clean(0)
		}
	},
	showAtCursor: function (b, a, d) {
		clearTimeout(Menu.timer);
		Menu._hide();
		Menu.selection = [ - 1];
		Menu.currentLink = null;
		if (! (a && d)) {
			b = normalEvent(b);
			var c = g_getCursorPos(b);
			a = c.x;
			d = c.y
		}
		if (Browser.ie6) {
			a -= 2;
			d -= 2
		}
		Menu.showDepth(0, this.menu, a, d, 0, 0, 0, true)
	},
	hide: function () {
		try {
			clearTimeout(Menu.timer);
			if (Menu.currentLink) {
				Menu.timer = setTimeout(Menu._hide, 333)
			} else {
				this.className = this.className.replace("open", "")
			}
		} catch(a) {}
	},
	_hide: function () {
		for (var b = 0, a = Menu.selection.length; b < a; ++b) {
			Menu.divs[b].style.display = "none";
			Menu.divs[b].style.visibility = "hidden";
			if (Browser.ie6) {
				Menu.iframes[b].style.display = "none"
			}
		}
		Menu.selection = [];
		if (Menu.currentLink) {
			Menu.currentLink.className = Menu.currentLink.className.replace("open", "")
		}
		Menu.currentLink = null
	},
	sepOver: function () {
		var b = this.d;
		var a = b.i;
		Menu.truncate(a);
		Menu.clean(a);
		Menu.selection[a] = -1
	},
	elemOver: function () {
		var g = this.d;
		var f = g.i;
		var e = this.i;
		var a = this.k;
		var b = this.firstChild.className == "menusub";
		Menu.truncate(f + b);
		if (b && a != Menu.selection[f]) {
			var h = ac(this);
			Menu.selection[f + 1] = -1;
			Menu.showDepth(f + 1, g.menuArray[e][3], h[0], h[1] - 2, this.offsetHeight, this.offsetWidth - 3, 0, false)
		}
		Menu.clean(f);
		Menu.selection[f] = a;
		if (this.className.length) {
			this.className += " open"
		} else {
			this.className = "open"
		}
	},
	elemClick: function (a) {
		Menu._hide();
		a()
	},
	getIframe: function (a) {
		var b;
		if (Menu.iframes[a] == null) {
			b = createElem("iframe");
			b.src = "javascript:0;";
			b.frameBorder = 0;
			append(getElement("layers"), b);
			Menu.iframes[a] = b
		} else {
			b = Menu.iframes[a]
		}
		return b
	},
	getDiv: function (a, b) {
		var c;
		if (Menu.divs[a] == null) {
			c = createElem("div");
			c.className = "menu";
			append(getElement("layers"), c);
			Menu.divs[a] = c
		} else {
			c = Menu.divs[a]
		}
		c.i = a;
		c.menuArray = b;
		return c
	},
	showDepth: function (M, c, C, B, N, F, z, v) {
		var W, T = Menu.getDiv(M, c);
		while (T.firstChild) {
			de(T.firstChild)
		}
		var u = createElem("table"),
		A = createElem("tbody"),
		R = createElem("tr"),
		e = createElem("td"),
		P = createElem("div"),
		J = createElem("div");
		var I = 999;
		var b = g_getWindowSize(),
		l = g_getScroll(),
		f = b.w,
		n = b.h,
		V = l.x,
		O = l.y;
		if (N > 0 && (M > 0 || c.length > 20)) {
			if ((25 + 1) * c.length > n - 25 - z) {
				for (var L = 2; L < 4; ++L) {
					if (N / L * c.length + 30 < n - z) {
						break
					}
				}
				I = Math.floor(c.length / L)
			}
		}
		var r = 0;
		var K = 0;
		for (var L = 0, t = c.length; L < t; ++L) {
			var Q = c[L];
			if(Q==undefined || Q==null) continue;
			if (Q[0] == null) {
				var q = createElem("span");
				q.className = "separator";
				ns(q);
				append(q, ct(Q[1]));
				q.d = T;
				q.onmouseover = Menu.sepOver;
				append(J, q)
			} else {
				var U = createElem("a");
				U.d = T;
				U.k = K++;
				U.i = L;
				if (Q[2]) {
					if (Menu.currentLink && Menu.currentLink.menuappend) {
						if (Q[2].indexOf(Menu.currentLink.menuappend) == -1) {
							U.href = Q[2] + Menu.currentLink.menuappend
						} else {
							U.href = Q[2]
						}
					} else {
						if (typeof Q[2] == "function") {
							U.href = "javascript:;";
							U.onclick = Menu.elemClick.bind(0, Q[2]);
							ns(U)
						} else {
							U.href = Q[2]
						}
					}
				} else {
					U.href = "javascript:;";
					U.style.cursor = "default";
					ns(U)
				}
				U.onmouseover = Menu.elemOver;
				var G = createElem("span"),
				S = createElem("span");
				if (Q[3] != null) {
					G.className = "menusub"
				}
				if (Q.checked) {
					S.className = "menucheck"
				}
				if (Q.newWindow) {
					U.target = "_blank"
				}
				if (Q.tinyIcon) {
					S.style.background = "url(images/icons/tiny/" + Q.tinyIcon.toLowerCase() + ".gif) left center no-repeat"
				} else {
					if (Q.socketColor) {
						S.className += " socket-" + g_file_gems[Q.socketColor]
					} else {
						if (Q.smallIcon) {
							U.style.padding = 0;
							S.style.padding = "4px 18px 4px 28px";
							S.style.background = "url(templates/wowhead/images/icon_border_small.png) left center no-repeat transparent";
							G.style.background = "url(images/icons/small/" + Q.smallIcon.toLowerCase() + ".png) 4px 3px no-repeat transparent"
						}
					}
				}
				append(S, ct(Q[1]));
				append(G, S);
				append(U, G);
				append(J, U)
			}
			if (r++==I) {
				P.onmouseover = Menu.divOver;
				P.onmouseout = Menu.divOut;
				append(P, J);
				if (!Browser.ie6) {
					var H = createElem("p");
					append(H, createElem("em"));
					append(H, createElem("var"));
					append(H, createElem("strong"));
					append(H, P);
					append(e, H)
				} else {
					append(e, P)
				}
				append(R, e);
				e = createElem("td");
				H = createElem("p");
				P = createElem("div");
				J = createElem("div");
				r = 0
			}
		}
		P.onmouseover = Menu.divOver;
		P.onmouseout = Menu.divOut;
		append(P, J);
		if (!Browser.ie6) {
			if (I != 999) {
				var H = createElem("p");
				append(H, createElem("em"));
				append(H, createElem("var"));
				append(H, createElem("strong"));
				append(H, P);
				append(e, H)
			} else {
				append(T, createElem("em"));
				append(T, createElem("var"));
				append(T, createElem("strong"));
				append(e, P)
			}
		} else {
			append(e, P)
		}
		append(R, e);
		append(A, R);
		append(u, A);
		append(T, u);
		T.style.left = T.style.top = "-2323px";
		T.style.display = "";
		var g = u.offsetWidth,
		o = u.offsetHeight,
		E = true,
		D = true;
		if (!Browser.ie6) {
			g += 5;
			o += 6
		}
		if (C + g > f + V || c.rightAligned) {
			E = false
		}
		if (E) {
			if (C + F + g > f) {
				C = Math.max(0, C - g)
			} else {
				if (M > 0) {
					C += F
				}
			}
		} else {
			C = C + F - g;
			if (Browser.ie) {
				C -= 3
			}
		}
		if ((M > 0 || v) && B + o > n + O) {
			B = Math.max(O + 5, n + O - o)
		}
		T.style.left = C + "px";
		T.style.top = B + "px";
		if (Browser.ie6) {
			W = Menu.getIframe(M);
			W.style.left = C + "px";
			W.style.top = B + "px";
			W.style.width = g + "px";
			W.style.height = o + "px";
			W.style.display = "";
			W.style.visibility = "visible"
		}
		T.style.visibility = "visible";
		if (Browser.opera) {
			T.style.display = "none";
			T.style.display = ""
		}
	},
	divOver: function () {
		clearTimeout(Menu.timer)
	},
	divOut: function () {
		clearTimeout(Menu.timer);
		Menu.timer = setTimeout(Menu._hide, 333)
	},
	truncate: function (b) {
		var c;
		while (Menu.selection.length - 1 > b) {
			c = Menu.selection.length - 1;
			Menu.divs[c].style.display = "none";
			Menu.divs[c].style.visibility = "hidden";
			if (Browser.ie6) {
				Menu.iframes[c].style.display = "none"
			}
			Menu.selection.pop()
		}
	},
	clean: function (b) {
		for (var c = b; c < Menu.selection.length; ++c) {
			if (Menu.selection[c] != -1) {
				var e = getElemTag(Menu.divs[c], "a")[Menu.selection[c]];
				if (e.className.indexOf("sub") != -1) {
					e.className = "sub"
				} else {
					e.className = ""
				}
				Menu.selection[c] = -1
			}
		}
	},
	append: function (b, c) {
		b[2] += c;
		if (b[3] != null) {
			Menu._append(b[3], c)
		}
	},
	_append: function (b, d) {
		var e, g = 0;
		for (var c = 0; c < b.length; ++c) {
			var f = b[c][2].indexOf("&filter=");
			if (f != -1 && d.indexOf("&filter=") == 0) {
				d = Menu._fixCollision(b[c][2].substr(f), d)
			}
			b[c][2] += d;
			if (b[c][3]) {
				Menu._append(b[c][3], d)
			}
		}
	},
	_splitFilter: function (b) {
		var g = b.substr(8).split(";"),
		c = {};
		for (var e = 0, a = g.length; e < a; ++e) {
			var h = g[e].indexOf("="),
			d,
			f;
			if (h != -1) {
				d = g[e].substr(0, h);
				f = g[e].substr(h + 1)
			} else {
				d = g[e];
				f = ""
			}
			c[d] = f
		}
		return c
	},
	_fixCollision: function (d, a) {
		var b = Menu._splitFilter(d),
		c = Menu._splitFilter(a);
		a = "";
		for (var e in c) {
			if (!b[e] && e != "sl" && e != "cl") {
				a += ";";
				a += e + "=" + c[e]
			}
		}
		return a
	},
	fixUrls: function (g, c, e, b, f) {
		if (!f) {
			f = 0
		}
		try{
			for (var d = 0, a = g.length; d < a; ++d) {
				if (g[d][2] == null) {
					g[d][2] = c + g[d][0] + (e ? e: "") + ".html"
				}
				if (g[d][3]) {
					if (b == true || (typeof b == "object" && b[f] == true)) {
						Menu.fixUrls(g[d][3], c, e, b, f + 1)
					} else {
						Menu.fixUrls(g[d][3], c + g[d][0] + ".", e, b, f + 1)
					}
				}
			}
		}catch(e){}
	},
	addButtons: function (h, g) {
		for (var e = 0, b = g.length; e < b; ++e) {
			if (g[e][0] == null) {
				continue
			}
			var c = createElem("a"),
			f = createElem("span");
			if (g[e][2]) {
				c.href = g[e][2]
			} else {
				c.href = "javascript:;";
				c.style.cursor = "default";
				c.style.textDecoration = "none";
				ns(c)
			}
			if (g[e][3] != null) {
				f.className = "menuarrowd";
				c.menu = g[e][3];
				c.onmouseover = Menu.show;
				c.onmouseout = Menu.hide
			} else {
				c.onmouseover = Menu._hide
			}
			append(f, ct(g[e][1]));
			append(c, f);
			append(h, c)
		}
	},
	explode: function (f) {
		var d = [],
		e = null,
		c;
		for (var b = 0, a = f.length; b < a; ++b) {
			if (f[b][0] != null) {
				if (e != null) {
					c.push(f[b])
				} else {
					d.push(f[b])
				}
			}
			if (e != null && (f[b][0] == null || b == a - 1)) {
				d.push([0, e[1], , c])
			}
			if (f[b][0] == null) {
				e = f[b];
				c = []
			}
		}
		return d
	}
};
function Tabs(a) {
	cO(this, a);
	if (this.parent) {
		this.parent = dom(this.parent)
	} else {
		return
	}
	this.oldMode = (Browser.geckoVersion > 20000000 && Browser.geckoVersion <= 20060414);
	this.selectedTab = -1;
	this.uls = [];
	this.tabs = [];
	this.nShows = 0;
	if (this.poundable == null) {
		this.poundable = 1
	}
	this.poundedTab = null;
	if (this.onLoad == null) {
		this.onLoad = Tabs.onLoad.bind(this)
	}
	if (this.onShow == null) {
		this.onShow = Tabs.onShow.bind(this)
	}
	if (this.onHide) {
		this.onHide = this.onHide.bind(this)
	}
}
Tabs.prototype = {
	add: function (a, d) {
		var c, b = this.tabs.length;
		c = {
			caption: a,
			index: b,
			owner: this
		};
		cO(c, d);
		this.tabs.push(c);
		return b
	},
	del: function (a) {
		if (this.tabs[a]) {
			getElement("tab-" + this.tabs[a].id).style.display = "none";
			this.selectedTab = -1;
			this.uls = [];
			this.tabs.splice(a, 1);
			this.nShows = 0;
			while (this.parent.firstChild) {
				de(this.parent.firstChild)
			}
			this.flush()
		}
	},
	focus: function (a) {
		if (a < 0) {
			a = this.tabs.length + a
		}
		this.forceScroll = 1;
		getElemTag(this.uls[this.oldMode ? 0 : 2], "a")[a].onclick({},
		true);
		this.forceScroll = null
	},
	show: function (c, e) {
		var b;
		if (isNaN(c) || c < 0) {
			c = 0
		} else {
			if (c >= this.tabs.length) {
				c = this.tabs.length - 1
			}
		}
		if (e == null && c == this.selectedTab) {
			return
		}
		if (this.selectedTab != -1) {
			b = this.tabs[this.selectedTab];
			if (this.onHide && !this.onHide(b)) {
				return
			}
			if (b.onHide && !b.onHide()) {
				return
			}
		}++this.nShows;
		var a = this.oldMode ? 0 : 3;
		for (var d = 0; d <= a; ++d) {
			b = getElemTag(this.uls[d], "a");
			if (this.selectedTab != -1) {
				b[this.selectedTab].className = ""
			}
			try{b[c].className = "selected"}catch(e){}
		}
		b = this.tabs[c];
		if(b==undefined){
			return;
		}
		if (b.onLoad) {
			b.onLoad();
			b.onLoad = null
		}
		this.onShow(this.tabs[c], this.tabs[this.selectedTab]);
		if (b.onShow) {
			b.onShow(this.tabs[this.selectedTab])
		}
		this.selectedTab = c
	},
	flush: function (p) {
		if (this.oldMode) {
			var m, s, e, r;
			m = createElem("ul");
			m.className = "old-tabs";
			for (var k = 0; k < this.tabs.length; ++k) {
				var f = this.tabs[k];
				s = createElem("li");
				e = createElem("div");
				r = createElem("a");
				if (this.poundable) {
					r.href = "#" + f.id
				} else {
					r.href = "javascript:;"
				}
				ns(r);
				r.onclick = Tabs.onClick.bind(f, r);
				append(r, ct(f.caption));
				append(s, e);
				append(s, r);
				append(m, s)
			}
			this.uls[0] = m;
			append(this.parent, m);
			var t = createElem("div");
			t.style.cssFloat = t.style.styleFloat = "left";
			append(this.parent, t)
		} else {
			var t, g, r, q, o, c;
			var n = createElem("div");
			n.className = "tabs-container";
			o = createElem("div");
			o.style.visibility = "hidden";
			this.uls[0] = createElem("ul");
			this.uls[0].className = "tabs";
			append(o, this.uls[0]);
			append(n, o);
			o = createElem("div");
			o.className = "tabs-levels";
			for (var k = 1; k <= 3; ++k) {
				c = createElem("div");
				c.className = "tabs-level";
				this.uls[k] = createElem("ul");
				this.uls[k].className = "tabs";
				this.uls[k].style.top = ( - 30 * (3 - k)) + "px";
				append(c, this.uls[k]);
				append(o, c)
			}
			append(n, o);
			for (var k = 0; k < this.tabs.length; ++k) {
				var f = this.tabs[k];
				for (var h = 0; h <= 3; ++h) {
					g = createElem("li");
					r = createElem("a");
					q = createElem("b");
					if (this.poundable) {
						r.href = "#" + f.id
					} else {
						r.href = "javascript:;"
					}
					if (h > 0) {
						ns(r);
						r.onclick = Tabs.onClick.bind(f, r)
					}
					if (!Browser.ie6) {
						o = createElem("div");
						append(o, ct(f.caption));
						append(r, o)
					}
					append(q, ct(f.caption));
					append(r, q);
					append(g, r);
					append(this.uls[h], g)
				}
			}
			append(this.parent, n)
		}
		if (this.onLoad) {
			t = this.onLoad();
			if (t != null) {
				this.poundedTab = p = t
			}
		}
		this.show(p)
	},
	setTabName: function (d, c) {
		var a = this.oldMode ? 0 : 3;
		this.tabs[d].caption = c;
		for (var e = 0; e <= a; ++e) {
			var b = getElemTag(this.uls[e], "a");
			g_setTextNodes(b[d], c)
		}
	},
	setTabPound: function (d, a) {
		if (!this.poundable) {
			return
		}
		var b = this.oldMode ? 0 : 3;
		for (var e = 0; e <= b; ++e) {
			var c = getElemTag(this.uls[e], "a");
			c[d].href = "#" + this.tabs[d].id + ":" + a
		}
	},
	getSelectedTab: function () {
		return this.selectedTab
	}
};
Tabs.onClick = function (b, g, f) {
	if (f == null && this.index == this.owner.selectedTab) {
		return
	}
	var d = rf2(g);
	if (d == null) {
		return
	}
	this.owner.show(this.index, f);
	if (this.owner.poundable) {
		var c = b.href.indexOf("#");
		c != -1 && location.replace(b.href.substr(c))
	}
	return d
};
Tabs.onLoad = function () {
	if (!this.poundable || !location.hash.length) {
		return
	}
	var a = location.hash.substr(1).split(":")[0];
	if (a) {
		return in_array(this.tabs, a, function (b) {
			return b.id
		})
	}
};
Tabs.onShow = function (d, e) {
	var b;
	if (e) {
		getElement("tab-" + e.id).style.display = "none"
	}
	b = getElement("tab-" + d.id);
	b.style.display = "";
	if ((this.nShows == 1 && this.poundedTab != null && this.poundedTab >= 0) || this.forceScroll) {
		var c, a;
		if (this.__st) {
			c = this.__st;
			a = 15
		} else {
			c = b;
			a = this.parent.offsetHeight + 15
		}
		if (Browser.ie) {
			setTimeout(g_scrollTo.bind(this, c, a), 1)
		} else {
			g_scrollTo(c, a)
		}
	}
};
var Icon = {
	sizes: ["small", "medium", "large"],
	sizes2: [18, 36, 56],
	create: function (c, k, h, b, e, j) {
		var g = createElem("div"),
		d = createElem("ins"),
		f = createElem("del");
		if (k == null) {
			k = 1
		}
		g.className = "icon" + Icon.sizes[k];
		append(g, d);
		append(g, f);
		Icon.setTexture(g, k, c);
		if (b) {
			var i = createElem("a");
			i.href = b;
			append(g, i)
		} else {
			g.ondblclick = Icon.onDblClick
		}
		Icon.setNumQty(g, e, j);
		return g
	},
	setTexture: function (d, c, b) {
		if (!b) {
			return
		}
		var a = d.firstChild.style;
		if (b.indexOf("?") != -1) {
			a.backgroundImage = "url(" + b + ")"
		} else {
			a.backgroundImage = "url(images/icons/" + Icon.sizes[c] + "/" + b.toLowerCase() + ".png)"
		}
		Icon.moveTexture(d, c, 0, 0)
	},
	moveTexture: function (d, c, a, e) {
		var b = d.firstChild.style;
		if (a || e) {
			b.backgroundPosition = ( - a * Icon.sizes2[c]) + "px " + ( - e * Icon.sizes2[c]) + "px"
		} else {
			if (b.backgroundPosition) {
				b.backgroundPosition = ""
			}
		}
	},
	setNumQty: function (e, c, f) {
		var b = getElemTag(e, "span");
		for (var d = 0, a = b.length; d < a; ++d) {
			if (b[d]) {
				de(b[d])
			}
		}
		if (c != null && ((c > 1 && c < 2147483647) || c.length)) {
			b = g_createGlow(c, "q1");
			b.style.right = "0";
			b.style.bottom = "0";
			b.style.position = "absolute";
			append(e, b)
		}
		if (f != null && f > 0) {
			b = g_createGlow("(" + f + ")", "q");
			b.style.left = "0";
			b.style.top = "0";
			b.style.position = "absolute";
			append(e, b)
		}
	},
	getLink: function (a) {
		return getElemTag(a, "a")[0]
	},
	onDblClick: function () {
		if (this.firstChild) {
			var b = this.firstChild.style;
			if (b.backgroundImage.length && b.backgroundImage.indexOf("url(http://static.wowhead.com") == 0) {
				var c = b.backgroundImage.lastIndexOf("/"),
				a = b.backgroundImage.indexOf(".png");
				if (c != -1 && a != -1) {
					prompt("", b.backgroundImage.substring(c + 1, a))
				}
			}
		}
	}
};
var RedButton = {
	create: function (k, g, j) {
		var d = createElem("a"),
		f = createElem("em"),
		c = createElem("b"),
		e = createElem("i"),
		h = createElem("span");
		d.href = "javascript:;";
		d.className = "button-red";
		append(c, e);
		append(f, c);
		append(f, h);
		append(d, f);
		RedButton.setText(d, k);
		RedButton.enable(d, g);
		RedButton.setFunc(d, j);
		return d
	},
	setText: function (a, b) {
		st(a.firstChild.childNodes[0].firstChild, b);
		st(a.firstChild.childNodes[1], b)
	},
	enable: function (a, b) {
		if (b || b == null) {
			a.className = a.className.replace("button-red-disabled", "")
		} else {
			if (a.className.indexOf("button-red-disabled") == -1) {
				a.className += " button-red-disabled"
			}
		}
	},
	setFunc: function (a, b) {
		a.onclick = (b ? b: null)
	}
};
var Tooltip = {
	create: function (h) {
		var f = createElem("div"),
		k = createElem("table"),
		b = createElem("tbody"),
		e = createElem("tr"),
		c = createElem("tr"),
		a = createElem("td"),
		j = createElem("th"),
		i = createElem("th"),
		g = createElem("th");
		f.className = "tooltip";
		j.style.backgroundPosition = "top right";
		i.style.backgroundPosition = "bottom left";
		g.style.backgroundPosition = "bottom right";
		if (h) {
			a.innerHTML = h
		}
		append(e, a);
		append(e, j);
		append(b, e);
		append(c, i);
		append(c, g);
		append(b, c);
		append(k, b);
		Tooltip.icon = createElem("p");
		Tooltip.icon.style.visibility = "hidden";
		append(Tooltip.icon, createElem("div"));
		append(f, Tooltip.icon);
		append(f, k);
		return f
	},
	fix: function (d, b, f) {
		var e = getElemTag(d, "table")[0],
		h = getElemTag(e, "td")[0],
		g = h.childNodes;
		if (g.length >= 2 && g[0].nodeName == "TABLE" && g[1].nodeName == "TABLE") {
			g[0].style.whiteSpace = "nowrap";
			var a;
			if (g[1].offsetWidth > 300) {
				a = Math.max(300, g[0].offsetWidth) + 20
			} else {
				a = Math.max(g[0].offsetWidth, g[1].offsetWidth) + 20
			}
			if (a > 20) {
				d.style.width = a + "px";
				g[0].style.width = g[1].style.width = "100%";
				if (!b && d.offsetHeight > document.body.clientHeight) {
					e.className = "shrink"
				}
			}
		}
		if (f) {
			d.style.visibility = "visible"
		}
	},
	fixSafe: function (c, b, a) {
		if (Browser.ie) {
			setTimeout(Tooltip.fix.bind(this, c, b, a), 1)
		} else {
			Tooltip.fix(c, b, a)
		}
	},
	append: function (c, b) {
		var c = dom(c);
		var a = Tooltip.create(b);
		append(c, a);
		Tooltip.fixSafe(a, 1, 1)
	},
	prepare: function () {
		if (Tooltip.tooltip) {
			return
		}
		var b = Tooltip.create();
		b.style.position = "absolute";
		b.style.left = b.style.top = "-2323px";
		var a = getElement("layers");
		append(a, b);
		Tooltip.tooltip = b;
		Tooltip.tooltipTable = getElemTag(b, "table")[0];
		Tooltip.tooltipTd = getElemTag(b, "td")[0];
		if (Browser.ie6) {
			b = createElem("iframe");
			b.src = "javascript:0;";
			b.frameBorder = 0;
			append(a, b);
			Tooltip.iframe = b
		}
	},
	set: function (b) {
		var a = Tooltip.tooltip;
		a.style.width = "550px";
		a.style.left = "-2323px";
		a.style.top = "-2323px";
		Tooltip.tooltipTd.innerHTML = b;
		a.style.display = "";
		Tooltip.fix(a, 0, 0)
	},
	moveTests: [[null, null], [null, false], [false, null], [false, false]],
	move: function (m, l, d, n, c, a) {
		if (!Tooltip.tooltipTable) {
			return
		}
		var k = Tooltip.tooltip,
		g = Tooltip.tooltipTable.offsetWidth,
		b = Tooltip.tooltipTable.offsetHeight,
		o;
		k.style.width = g + "px";
		var j, e;
		for (var f = 0, h = Tooltip.moveTests.length; f < h; ++f) {
			o = Tooltip.moveTests[f];
			j = Tooltip.moveTest(m, l, d, n, c, a, o[0], o[1]);
			if (!Ads.intersect(j)) {
				e = true;
				break
			}
		}
		if (!e) {
			Ads.intersect(j, true)
		}
		k.style.left = j.l + "px";
		k.style.top = j.t + "px";
		k.style.visibility = "visible";
		if (Browser.ie6 && Tooltip.iframe) {
			var o = Tooltip.iframe;
			o.style.left = j.l + "px";
			o.style.top = j.t + "px";
			o.style.width = g + "px";
			o.style.height = b + "px";
			o.style.display = "";
			o.style.visibility = "visible"
		}
	},
	moveTest: function (e, l, n, w, c, a, m, b) {
		var k = e,
		v = l,
		f = Tooltip.tooltip,
		i = Tooltip.tooltipTable.offsetWidth,
		p = Tooltip.tooltipTable.offsetHeight,
		g = g_getWindowSize(),
		j = g_getScroll(),
		h = g.w,
		o = g.h,
		d = j.x,
		u = j.y,
		t = d,
		s = u,
		r = d + h,
		q = u + o;
		if (m == null) {
			m = (e + n + i <= r)
		}
		if (b == null) {
			b = (l - p >= s)
		}
		if (m) {
			e += n + c
		} else {
			e = Math.max(e - i, t) - c
		}
		if (b) {
			l -= p + a
		} else {
			l += w + a
		}
		if (e < t) {
			e = t
		} else {
			if (e + i > r) {
				e = r - i
			}
		}
		if (l < s) {
			l = s
		} else {
			if (l + p > q) {
				l = Math.max(u, q - p)
			}
		}
		if (Tooltip.iconVisible) {
			if (k >= e - 48 && k <= e && v >= l - 4 && v <= l + 48) {
				l -= 48 - (v - l)
			}
		}
		return g_createRect(e, l, i, p)
	},
	show: function (f, e, d, b, c) {
		if (Tooltip.disabled) {
			return
		}
		if (!d || d < 1) {
			d = 1
		}
		if (!b || b < 1) {
			b = 1
		}
		if (c) {
			e = '<span class="' + c + '">' + e + "</span>"
		}
		var a = ac(f);
		Tooltip.prepare();
		Tooltip.set(e);
		Tooltip.move(a.x, a.y, f.offsetWidth, f.offsetHeight, d, b)
	},
	showAtCursor: function (d, f, c, a, b) {
		if (Tooltip.disabled) {
			return
		}
		if (!c || c < 10) {
			c = 10
		}
		if (!a || a < 10) {
			a = 10
		}
		if (b) {
			f = '<span class="' + b + '">' + f + "</span>"
		}
		d = normalEvent(d);
		var g = g_getCursorPos(d);
		Tooltip.prepare();
		Tooltip.set(f);
		Tooltip.move(g.x, g.y, 0, 0, c, a)
	},
	showAtXY: function (d, a, e, c, b) {
		if (Tooltip.disabled) {
			return
		}
		Tooltip.prepare();
		Tooltip.set(d);
		Tooltip.move(a, e, 0, 0, c, b)
	},
	cursorUpdate: function (b, a, d) {
		if (Tooltip.disabled || !Tooltip.tooltip) {
			return
		}
		b = normalEvent(b);
		if (!a || a < 10) {
			a = 10
		}
		if (!d || d < 10) {
			d = 10
		}
		var c = g_getCursorPos(b);
		Tooltip.move(c.x, c.y, 0, 0, a, d)
	},
	hide: function () {
		try{hideMyTooltip();}catch(e){}
		if (Tooltip.tooltip) {
			Tooltip.tooltip.style.display = "none";
			Tooltip.tooltip.visibility = "hidden";
			Tooltip.tooltipTable.className = "";
			if (Browser.ie6) {
				Tooltip.iframe.style.display = "none"
			}
			Tooltip.setIcon(null);
			Ads.restoreHidden()
		}
	},
	setIcon: function (a) {
		Tooltip.prepare();
		if (a) {
			Tooltip.icon.style.backgroundImage = "url(images/icons/medium/" + a.toLowerCase() + ".png)";
			Tooltip.icon.style.visibility = "visible"
		} else {
			Tooltip.icon.style.backgroundImage = "none";
			Tooltip.icon.style.visibility = "hidden"
		}
		Tooltip.iconVisible = a ? 1 : 0
	}
};
var g_listviews = {};
function Listview(a) {
	cO(this, a);
	if (this.id) {
		var m = (this.tabs ? "tab-": "lv-") + this.id;
		if (this.parent) {
			var k = createElem("div");
			k.id = m;
			append(dom(this.parent), k);
			this.container = k
		} else {
			this.container = getElement(m)
		}
	} else {
		return
	}
	if (this.template && Listview.templates[this.template]) {
		this.template = Listview.templates[this.template]
	} else {
		return
	}
	g_listviews[this.id] = this;
	if (this.data == null) {
		this.data = []
	}
	if (this.poundable == null) {
		if (this.template.poundable != null) {
			this.poundable = this.template.poundable
		} else {
			this.poundable = true
		}
	}
	if (this.searchable == null) {
		if (this.template.searchable != null) {
			this.searchable = this.template.searchable
		} else {
			this.searchable = false
		}
	}
	if (this.filtrable == null) {
		if (this.template.filtrable != null) {
			this.filtrable = this.template.filtrable
		} else {
			this.filtrable = false
		}
	}
	if (this.data.length == 1) {
		this.filtrable = false;
		this.searchable = false
	}
	if (this.searchable && this.searchDelay == null) {
		if (this.template.searchDelay != null) {
			this.searchDelay = this.template.searchDelay
		} else {
			this.searchDelay = 333
		}
	}
	if (this.hideBands == null) {
		this.hideBands = this.template.hideBands
	}
	if (this.hideNav == null) {
		this.hideNav = this.template.hideNav
	}
	if (this.hideHeader == null) {
		this.hideHeader = this.template.hideHeader
	}
	if (this.hideCount == null) {
		this.hideCount = this.template.hideCount
	}
	if (this.computeDataFunc == null && this.template.computeDataFunc != null) {
		this.computeDataFunc = this.template.computeDataFunc
	}
	if (this.createCbControls == null && this.template.createCbControls != null) {
		this.createCbControls = this.template.createCbControls
	}
	if (this.template.onBeforeCreate != null) {
		if (this.onBeforeCreate == null) {
			this.onBeforeCreate = this.template.onBeforeCreate
		} else {
			this.onBeforeCreate = [this.template.onBeforeCreate, this.onBeforeCreate]
		}
	}
	if (this.onAfterCreate == null && this.template.onAfterCreate != null) {
		this.onAfterCreate = this.template.onAfterCreate
	}
	if (this.createNote == null && this.template.createNote != null) {
		this.createNote = this.template.createNote
	}
	if (this.customFilter == null && this.template.customFilter != null) {
		this.customFilter = this.template.customFilter
	}
	if (this.customFilter) {
		this.customFilter = this.customFilter.bind(this)
	}
	if (this.clip == null && this.template.clip != null) {
		this.clip = this.template.clip
	}
	if (this.mode == null) {
		this.mode = this.template.mode
	}
	if (this.nItemsPerPage == null) {
		if (this.template.nItemsPerPage != null) {
			this.nItemsPerPage = this.template.nItemsPerPage
		} else {
			this.nItemsPerPage = 50
		}
	}
	this.nItemsPerPage |= 0;
	if (this.nItemsPerPage <= 0) {
		this.nItemsPerPage = 0
	}
	this.nFilters = 0;
	this.resetRowVisibility();
	if (this.mode == Listview.MODE_TILED) {
		if (this.nItemsPerRow == null) {
			var q = this.template.nItemsPerRow;
			this.nItemsPerRow = (q != null ? q: 4)
		}
		this.nItemsPerRow |= 0;
		if (this.nItemsPerRow <= 1) {
			this.nItemsPerRow = 1
		}
	} else {
		this.nItemsPerRow = 1
	}
	this.columns = [];
	for (var e = 0, j = this.template.columns.length; e < j; ++e) {
		var p = this.template.columns[e],
		c = {};
		cO(c, p);
		this.columns.push(c)
	}
	if (this.extraCols != null) {
		for (var e = 0, j = this.extraCols.length; e < j; ++e) {
			var l = null;
			var b = this.extraCols[e];
			if (b.after || b.before) {
				var h = in_array(this.columns, (b.after ? b.after: b.before), function (d) {
					return d.id
				});
				if (h != -1) {
					l = (b.after ? h + 1 : h - 1)
				}
			}
			if (l == null) {
				l = this.columns.length
			}
			this.columns.splice(l, 0, b)
		}
	}
	this.visibility = [];
	var n = [],
	o = [];
	if (this.visibleCols != null) {
		array_walk(this.visibleCols, function (d) {
			n[d] = 1
		})
	}
	if (this.hiddenCols != null) {
		array_walk(this.hiddenCols, function (d) {
			o[d] = 1
		})
	}
	for (var e = 0, j = this.columns.length; e < j; ++e) {
		var b = this.columns[e];
		if (n[b.id] != null || (!b.hidden && o[b.id] == null)) {
			this.visibility.push(e)
		}
	}
	if (this.sort == null && this.template.sort) {
		this.sort = this.template.sort.slice(0)
	} else {
		if (this.sort != null) {
			var g = this.sort;
			this.sort = [];
			for (var e = 0, j = g.length; e < j; ++e) {
				var b = parseInt(g[e]);
				if (isNaN(b)) {
					var f = 0;
					if (g[e].charAt(0) == "-") {
						f = 1;
						g[e] = g[e].substring(1)
					}
					var h = in_array(this.columns, g[e], function (d) {
						return d.id
					});
					if (h != -1) {
						if (f) {
							this.sort.push( - (h + 1))
						} else {
							this.sort.push(h + 1)
						}
					}
				} else {
					this.sort.push(b)
				}
			}
		} else {
			this.sort = []
		}
	}
	if (this.tabs) {
		this.tabIndex = this.tabs.add(this.getTabName(), {
			id: this.id,
			onLoad: this.initialize.bind(this)
		})
	} else {
		this.initialize()
	}
}
Listview.MODE_DEFAULT = 0;
Listview.MODE_CHECKBOX = 1;
Listview.MODE_DIV = 2;
Listview.MODE_TILED = 3;
Listview.prototype = {
	initialize: function () {
		if (this.data.length) {
			if (this.computeDataFunc != null) {
				for (var d = 0, a = this.data.length; d < a; ++d) {
					this.computeDataFunc(this.data[d])
				}
			}
		}
		if (this.tabs) {
			this.pounded = (this.tabs.poundedTab == this.tabIndex);
			if (this.pounded) {
				this.readPound()
			}
		} else {
			this.readPound()
		}
		this.updateSortIndex();
		var b;
		if (this.onBeforeCreate != null) {
			if (typeof this.onBeforeCreate == "function") {
				b = this.onBeforeCreate()
			} else {
				for (var d = 0; d < this.onBeforeCreate.length; ++d) { (this.onBeforeCreate[d].bind(this))()
				}
			}
		}
		this.noData = createElem("div");
		this.noData.className = "listview-nodata text";
		if (this.mode == Listview.MODE_DIV) {
			this.mainContainer = this.mainDiv = createElem("div");
			this.mainContainer.className = "listview-mode-div"
		} else {
			this.mainContainer = this.table = createElem("table");
			this.thead = createElem("thead");
			this.tbody = createElem("tbody");
			if (this.mode == Listview.MODE_TILED) {
				this.table.className = "listview-mode-tiled";
				var e = (100 / this.nItemsPerRow) + "%",
				f = createElem("colgroup"),
				c;
				for (var d = 0; d < this.nItemsPerRow; ++d) {
					c = createElem("col");
					c.style.width = e;
					append(f, c)
				}
				append(this.mainContainer, f)
			} else {
				this.table.className = "listview-mode-default";
				this.createHeader();
				this.updateSortArrow()
			}
			append(this.table, this.thead);
			append(this.table, this.tbody);
			if (this.mode == Listview.MODE_CHECKBOX && Browser.ie) {
				setTimeout(Listview.cbIeFix.bind(this), 1)
			}
		}
		this.createBands();
		if (this.customFilter != null) {
			this.updateFilters()
		}
		this.updateNav();
		// Сортируем при загрузке, дабы ѝнизить нагрузку ѝ ѝервера
		this.applySort();
		this.refreshRows();
		if (this.onAfterCreate != null) {
			this.onAfterCreate(b)
		}
	},
	createHeader: function () {
		var h = createElem("tr");
		if (this.mode == Listview.MODE_CHECKBOX) {
			var g = createElem("th"),
			j = createElem("div"),
			c = createElem("a");
			g.style.width = "33px";
			c.href = "javascript:;";
			c.className = "listview-cb";
			ns(c);
			append(c, ct(String.fromCharCode(160)));
			append(j, c);
			append(g, j);
			append(h, g)
		}
		for (var f = 0, b = this.visibility.length; f < b; ++f) {
			var e = this.visibility[f],
			d = this.columns[e],
			g = createElem("th");
			j = createElem("div"),
			c = createElem("a"),
			outerSpan = createElem("span"),
			innerSpan = createElem("span");
			d.__th = g;
			c.href = "javascript:;";
			if (this.filtrable && (d.filtrable == null || d.filtrable)) {
				c.onmouseup = Listview.headerClick.bind(this, d, e);
				c.onclick = c.oncontextmenu = rf
			} else {
				c.onclick = this.sortBy.bind(this, e + 1)
			}
			c.onmouseover = Listview.headerOver.bind(this, c, d);
			c.onmouseout = Tooltip.hide;
			ns(c);
			if (d.width != null) {
				g.style.width = d.width
			}
			if (d.align != null) {
				g.style.textAlign = d.align
			}
			if (d.span != null) {
				g.colSpan = d.span
			}
			append(innerSpan, ct(d.name));
			append(outerSpan, innerSpan);
			append(c, outerSpan);
			append(j, c);
			append(g, j);
			append(h, g)
		}
		if (this.hideHeader) {
			this.thead.style.display = "none"
		}
		append(this.thead, h)
	},
	createBands: function () {
		var h = createElem("div"),
		j = createElem("div"),
		k = createElem("div"),
		i = createElem("div");
		this.bandTop = h;
		this.bandBot = j;
		this.noteTop = k;
		this.noteBot = i;
		h.className = "listview-band-top";
		j.className = "listview-band-bottom";
		this.navTop = this.createNav(true);
		this.navBot = this.createNav(false);
		k.className = i.className = "listview-note";
		if (this.note) {
			k.innerHTML = this.note
		} else {
			if (this.createNote) {
				this.createNote(k, i)
			}
		}
		if (!k.firstChild && this.mode != Listview.MODE_CHECKBOX) {
			append(k, ct(String.fromCharCode(160)))
		}
		if (this.mode != Listview.MODE_CHECKBOX) {
			append(i, ct(String.fromCharCode(160)))
		}
		append(h, this.navTop);
		if (this.searchable) {
			var l = this.updateFilters.bind(this, true),
			d = (this._truncated ? "search-within-results2": "search-within-results"),
			c = createElem("span"),
			b = createElem("em"),
			g = createElem("a"),
			f = createElem("input");
			c.className = "listview-quicksearch";
			append(c, b);
			g.href = "javascript:;";
			g.onclick = function () {
				var a = this.nextSibling;
				a.value = "";
				a.className = d;
				l()
			};
			g.style.display = "none";
			append(g, createElem("span"));
			append(c, g);
			ns(g);
			f.setAttribute("type", "text");
			f.className = d;
			f.style.width = (this._truncated ? "19em": "15em");
			g_onAfterTyping(f, l, this.searchDelay);
			f.onmouseover = function () {
				if (trim(this.value) != "") {
					this.className = ""
				}
			};
			f.onfocus = function () {
				this.className = ""
			};
			f.onblur = function () {
				if (trim(this.value) == "") {
					this.className = d;
					this.value = ""
				}
			};
			if (Browser.ie) {
				setTimeout(function () {
					f.value = ""
				},
				1)
			}
			append(c, f);
			this.quickSearchBox = f;
			this.quickSearchGlass = b;
			this.quickSearchClear = g;
			append(h, c)
		}
		append(h, k);
		append(j, this.navBot);
		append(j, i);
		if (this.mode == Listview.MODE_CHECKBOX) {
			if (this.note) {
				k.style.paddingBottom = "5px"
			}
			this.cbBarTop = this.createCbBar(true);
			this.cbBarBot = this.createCbBar(false);
			append(h, this.cbBarTop);
			append(j, this.cbBarBot);
			if (!this.noteTop.firstChild && !this.cbBarTop.firstChild) {
				this.noteTop.innerHTML = "&nbsp;"
			}
			if (!this.noteBot.firstChild && !this.cbBarBot.firstChild) {
				this.noteBot.innerHTML = "&nbsp;"
			}
			if (this.noteTop.firstChild && this.cbBarTop.firstChild) {
				this.noteTop.style.paddingBottom = "6px"
			}
			if (this.noteBot.firstChild && this.cbBarBot.firstChild) {
				this.noteBot.style.paddingBottom = "6px"
			}
		}
		if (this.hideBands & 1) {
			h.style.display = "none"
		}
		if (this.hideBands & 2) {
			j.style.display = "none"
		}
		append(this.container, this.bandTop);
		if (this.clip) {
			var e = createElem("div");
			e.className = "listview-clip";
			e.style.width = this.clip.w + "px";
			e.style.height = this.clip.h + "px";
			this.clipDiv = e;
			append(e, this.mainContainer);
			append(e, this.noData);
			append(this.container, e)
		} else {
			append(this.container, this.mainContainer);
			append(this.container, this.noData)
		}
		append(this.container, this.bandBot)
	},
	createNav: function (g) {
		var c = createElem("div"),
		d = createElem("a"),
		b = createElem("a"),
		a = createElem("a"),
		j = createElem("a"),
		i = createElem("span"),
		h = createElem("b"),
		f = createElem("b"),
		e = createElem("b");
		c.className = "listview-nav";
		d.href = b.href = a.href = j.href = "javascript:;";
		append(d, ct(String.fromCharCode(171) + LANG.lvpage_first));
		append(b, ct(String.fromCharCode(8249) + LANG.lvpage_previous));
		append(a, ct(LANG.lvpage_next + String.fromCharCode(8250)));
		append(j, ct(LANG.lvpage_last + String.fromCharCode(187)));
		ns(d);
		ns(b);
		ns(a);
		ns(j);
		d.onclick = this.firstPage.bind(this);
		b.onclick = this.previousPage.bind(this);
		a.onclick = this.nextPage.bind(this);
		j.onclick = this.lastPage.bind(this);
		append(h, ct("a"));
		append(f, ct("a"));
		append(e, ct("a"));
		append(i, h);
		append(i, ct(LANG.hyphen));
		append(i, f);
		append(i, ct(LANG.lvpage_of));
		append(i, e);
		append(c, d);
		append(c, b);
		append(c, i);
		append(c, a);
		append(c, j);
		if (g) {
			if (this.hideNav & 1) {
				c.style.display = "none"
			}
		} else {
			if (this.hideNav & 2) {
				c.style.display = "none"
			}
		}
		return c
	},
	createCbBar: function (a) {
		var b = createElem("div");
		if (this.createCbControls) {
			this.createCbControls(b, a)
		}
		if (b.firstChild) {
			b.className = "listview-withselected" + (a ? "": "2")
		}
		return b
	},
	refreshRows: function () {
		var a = (this.mode == Listview.MODE_DIV ? this.mainContainer: this.tbody);
		ee(a);
		if (this.nRowsVisible == 0) {
			if (!this.filtered) {
				this.bandTop.style.display = this.bandBot.style.display = "none";
				this.mainContainer.style.display = "none"
			}
			this.noData.style.display = "";
			this.showNoData();
			return
		}
		var n, b, c;
		if (! (this.hideBands & 1)) {
			this.bandTop.style.display = ""
		}
		if (! (this.hideBands & 2)) {
			this.bandBot.style.display = ""
		}
		if (this.nItemsPerPage > 0) {
			n = this.rowOffset;
			b = Math.min(n + this.nRowsVisible, n + this.nItemsPerPage);
			if (this.filtered && this.rowOffset > 0) {
				for (var f = 0, g = 0; f < this.data.length && g < this.rowOffset; ++f) {
					var o = this.data[f];
					if (o.__hidden || o.__deleted) {++n
					} else {++g
					}
				}
				b += (n - this.rowOffset)
			}
		} else {
			n = 0;
			b = this.nRowsVisible
		}
		var h = b - n;
		if (this.mode == Listview.MODE_DIV) {
			for (var e = 0; e < h; ++e) {
				var f = n + e,
				o = this.data[f];
				if (!o) {
					break
				}
				if (o.__hidden || o.__deleted) {++h;
					continue
				}
				append(this.mainDiv, this.getDiv(f))
			}
		} else {
			if (this.mode == Listview.MODE_TILED) {
				var d = 0,
				l = createElem("tr");
				for (var e = 0; e < h; ++e) {
					var f = n + e,
					o = this.data[f];
					if (!o) {
						break
					}
					if (o.__hidden || o.__deleted) {++h;
						continue
					}
					append(l, this.getCell(f));
					if (++d == this.nItemsPerRow) {
						append(this.tbody, l);
						if (e + 1 < h) {
							l = createElem("tr")
						}
						d = 0
					}
				}
				if (d != 0) {
					for (; d < 4; ++d) {
						var m = createElem("td");
						m.className = "empty-cell";
						append(l, m)
					}
					append(this.tbody, l)
				}
			} else {
				for (var e = 0; e < h; ++e) {
					var f = n + e,
					o = this.data[f];
					if (!o) {
						break
					}
					if (o.__hidden || o.__deleted) {++h;
						continue
					}
					append(this.tbody, this.getRow(f))
				}
			}
		}
		this.mainContainer.style.display = "";
		this.noData.style.display = "none"
	},
	showNoData: function () {
		var b = this.noData;
		ee(b);
		var a = -1;
		if (this.template.onNoData) {
			a = (this.template.onNoData.bind(this, b))()
		}
		if (a == -1) {
			append(this.noData, ct(this.filtered ? LANG.lvnodata2: LANG.lvnodata))
		}
	},
	getDiv: function (a) {
		var b = this.data[a];
		if (b.__div == null) {
			this.createDiv(b, a)
		}
		return b.__div
	},
	createDiv: function (b, a) {
		var c = createElem("div");
		b.__div = c;
		(this.template.compute.bind(this, b, c, a))()
	},
	getCell: function (a) {
		var b = this.data[a];
		if (b.__div == null) {
			this.createCell(b, a)
		}
		return b.__td
	},
	createCell: function (b, a) {
		var c = createElem("td");
		b.__td = c;
		(this.template.compute.bind(this, b, c, a))();
		if (this.template.getItemLink) {
			c.onclick = this.itemClick.bind(this, b)
		}
		if (Browser.ie6) {
			c.onmouseover = Listview.itemOver;
			c.onmouseout = Listview.itemOut
		}
	},
	getRow: function (a) {
		var b = this.data[a];
		if (b.__tr == null) {
			this.createRow(b)
		}
		return b.__tr
	},
	createRow: function (j) {
		var g = createElem("tr");
		j.__tr = g;
		if (this.mode == Listview.MODE_CHECKBOX) {
			var c = createElem("td");
			if (!j.__nochk) {
				c.className = "listview-cb";
				c.onclick = Listview.cbCellClick;
				var b = createElem("input");
				ns(b);
				b.type = "checkbox";
				b.onclick = Listview.cbClick;
				if (j.__chk) {
					b.checked = true;
					if (Browser.ie) {
						b.defaultChecked = true
					}
				}
				j.__cb = b;
				append(c, b)
			}
			append(g, c)
		}
		for (var d = 0, e = this.visibility.length; d < e; ++d) {
			var f = this.visibility[d],
			a = this.columns[f],
			c = createElem("td"),
			h;
			if (a.align != null) {
				c.style.textAlign = a.align
			}
			if (a.compute) {
				h = (a.compute.bind(this, j, c, g, f))()
			} else 	if(a.getValue || a.getVisibleText){
				h=this.getColText(j,a); /*robin fix*/
		  } else {
				if (j[a.value] != null) {
					h = j[a.value]
				} else {
					h = -1
				}
			}
			if (h != -1 && h != null) {
				c.insertBefore(ct(h), c.firstChild)
			}
			append(g, c)
		}
		if (this.mode == Listview.MODE_CHECKBOX && j.__chk) {
			g.className = "checked"
		}
		if (this.template.getItemLink) {
			g.onclick = this.itemClick.bind(this, j)
		}
		if (Browser.ie6) {
			g.onmouseover = Listview.itemOver;
			g.onmouseout = Listview.itemOut
		}
	},
	itemClick: function (d, c) {
		c = normalEvent(c);
		var a = 0,
		b = c._target;
		while (b && a < 3) {
			if (b.nodeName == "A") {
				return
			}
			b = b.parentNode
		}
		location.href = this.template.getItemLink(d)
	},
	validatePage: function () {
		var c = this.nItemsPerPage,
		b = this.rowOffset,
		a = this.nRowsVisible;
		if (b < 0) {
			this.rowOffset = 0
		} else {
			this.rowOffset = this.getRowOffset(b + c > a ? a - 1 : b)
		}
	},
	getRowOffset: function (b) {
		var a = this.nItemsPerPage;
		return (a > 0 && b > 0 ? Math.floor(b / a) * a: 0)
	},
	resetRowVisibility: function () {
		for (var b = 0, a = this.data.length; b < a; ++b) {
			this.data[b].__hidden = false
		}
		this.filtered = false;
		this.rowOffset = 0;
		this.nRowsVisible = this.data.length
	},
	getColText: function (b, a) {
		if (a.getVisibleText) {
			return a.getVisibleText(b)
		}
		if (a.getValue) {
			return a.getValue(b)
		}
		if (a.value) {
			return b[a.value]
		}
		if (a.compute) {
			return a.compute(b)
		}
		return ""
	},
	updateFilters: function (d) {
		Tooltip.hide();
		this.resetRowVisibility();
		var w, q, c;
		if (this.searchable) {
			w = trim(this.quickSearchBox.value);
			if (w) {
				this.quickSearchGlass.style.display = "none";
				this.quickSearchClear.style.display = "";
				w = w.toLowerCase().replace(/\s+/g, " ");
				q = w.split(" ");
				c = q.length
			} else {
				this.quickSearchGlass.style.display = "";
				this.quickSearchClear.style.display = "none"
			}
		}
		if (!w && this.nFilters == 0 && this.customFilter == null) {
			if (d) {
				this.updateNav();
				this.refreshRows()
			}
			return
		}
		var z = {
			1 : function (i, j) {
				return i > j
			},
			2 : function (i, j) {
				return i == j
			},
			3 : function (i, j) {
				return i < j
			},
			4 : function (i, j) {
				return i >= j
			},
			5 : function (i, j) {
				return i <= j
			},
			6 : function (i, k, j) {
				return k <= i && i <= j
			}
		};
		var p = {
			1 : function (j, i, k) {
				return i > k
			},
			2 : function (j, i, k) {
				return j <= k && k <= i
			},
			3 : function (j, i, k) {
				return j < k
			},
			4 : function (j, i, k) {
				return i >= k
			},
			5 : function (j, i, k) {
				return j <= k
			},
			6 : function (j, i, B, k) {
				return B <= i && j <= k
			}
		};
		var o = 0;
		for (var u = 0, v = this.data.length; u < v; ++u) {
			var g = this.data[u],
			m = 0;
			nSearchMatches = 0,
			matches = [];
			g.__hidden = true;
			if (this.customFilter && !this.customFilter(g)) {
				continue
			}
			for (var t = 0, h = this.visibility.length; t < h; ++t) {
				var n = this.visibility[t];
				var e = this.columns[n];
				if (e.__filter) {
					var a = e.__filter,
					b = false;
					if (e.type == null || e.type == "num") {
						var r = null;
						if (e.getValue) {
							r = e.getValue(g)
						} else {
							if (e.value) {
								r = parseFloat(g[e.value])
							}
						}
						if (!r) {
							r = 0
						}
						b = (z[a.type])(r, a.value, a.value2)
					} else {
						if (e.type == "range") {
							var A = e.getMinValue(g),
							y = e.getMaxValue(g);
							b = (p[a.type])(A, y, a.value, a.value2)
						} else {
							var l = this.getColText(g, e);
							if (l) {
								l = l.toString().toLowerCase();
								if (a.invert) {
									b = l.match(a.regex) != null
								} else {
									var x = 0;
									for (var s = 0, f = a.words.length; s < f; ++s) {
										if (l.indexOf(a.words[s]) != -1) {++x
										} else {
											break
										}
									}
									b = (x == a.words.length)
								}
							}
						}
					}
					if (a.invert) {
						b = !b
					}
					if (b) {++m
					} else {
						break
					}
				}
				if (w) {
					var l = this.getColText(g, e);
					if (l) {
						l = l.toString().toLowerCase();
						for (var s = 0, f = q.length; s < f; ++s) {
							if (!matches[s]) {
								if (l.indexOf(q[s]) != -1) {
									matches[s] = 1; ++nSearchMatches
								}
							}
						}
					}
				}
			}
			if ((this.nFilters == 0 || m == this.nFilters) && (!w || nSearchMatches == c)) {
				g.__hidden = false; ++o
			}
		}
		this.filtered = (o < this.data.length);
		this.nRowsVisible = o;
		if (d) {
			this.updateNav();
			this.refreshRows()
		}
	},
	changePage: function () {
		this.validatePage();
		this.refreshRows();
		this.updateNav();
		this.updatePound();
		var a = g_getScroll(),
		b = ac(this.container);
		if (a.y > b[1]) {
			scrollTo(a.x, b[1])
		}
	},
	firstPage: function () {
		this.rowOffset = 0;
		this.changePage();
		return false
	},
	previousPage: function () {
		this.rowOffset -= this.nItemsPerPage;
		this.changePage();
		return false
	},
	nextPage: function () {
		this.rowOffset += this.nItemsPerPage;
		this.changePage();
		return false
	},
	lastPage: function () {
		this.rowOffset = 99999999;
		this.changePage();
		return false
	},
	addSort: function (a, c) {
		var b = in_array(a, Math.abs(c), function (d) {
			return Math.abs(d)
		});
		if (b != -1) {
			c = a[b];
			a.splice(b, 1)
		}
		a.splice(0, 0, c)
	},
	sortBy: function (a) {
		if (a <= 0 || a > this.columns.length) {
			return
		}
		if (Math.abs(this.sort[0]) == a) {
			this.sort[0] = -this.sort[0]
		} else {
			var b = -1;
			if (this.columns[a - 1].type == "text") {
				b = 1
			}
			this.addSort(this.sort, b * a)
		}
		this.applySort();
		this.refreshRows();
		this.updateSortArrow();
		this.updatePound()
	},
	applySort: function () {
		if (this.sort.length == 0) {
			return
		}
		Listview.sort = this.sort;
		Listview.columns = this.columns;
		if (this.indexCreated) {
			this.data.sort(Listview.sortIndexedRows)
		} else {
			this.data.sort(Listview.sortRows)
		}
		this.updateSortIndex()
	},
	setSort: function (b, c, a) {
		if (this.sort.toString() != b.toString()) {
			this.sort = b;
			this.applySort();
			if (c) {
				this.refreshRows()
			}
			if (a) {
				this.updatePound()
			}
		}
	},
	readPound: function () {
		if (!this.poundable || !location.hash.length) {
			return
		}
		var b = location.hash.substr(1);
		if (this.tabs) {
			var g = b.indexOf(":");
			if (g == -1) {
				return
			}
			b = b.substr(g + 1)
		}
		var a = parseInt(b);
		if (!isNaN(a)) {
			this.rowOffset = a;
			this.validatePage();
			if (this.poundable != 2) {
				var d = [];
				var f = b.match(/(\+|\-)[0-9]+/g);
				if (f != null) {
					for (var c = f.length - 1; c >= 0; --c) {
						var e = parseInt(f[c]) | 0;
						var b = Math.abs(e);
						if (b <= 0 || b > this.columns.length) {
							break
						}
						this.addSort(d, e)
					}
					this.setSort(d, false, false)
				}
			}
			if (this.tabs) {
				this.tabs.setTabPound(this.tabIndex, this.getTabPound())
			}
		}
	},
	updateSortArrow: function () {
		if (!this.sort.length || !this.thead) {
			return
		}
		var a = in_array(this.visibility, Math.abs(this.sort[0]) - 1);
		if (a == -1) {
			return
		}
		if (this.mode == Listview.MODE_CHECKBOX) {
			a += 1
		}
		var b = this.thead.firstChild.childNodes[a].firstChild.firstChild.firstChild;
		if (this.lsa && this.lsa != b) {
			this.lsa.className = ""
		}
		b.className = (this.sort[0] < 0 ? "sortdesc": "sortasc");
		this.lsa = b
	},
	updateSortIndex: function () {
		var b = this.data;
		for (var c = 0, a = b.length; c < a; ++c) {
			b[c].__si = c
		}
		this.indexCreated = true
	},
	updateTabName: function () {
		if (this.tabs && this.tabIndex != null) {
			this.tabs.setTabName(this.tabIndex, this.getTabName())
		}
	},
	updatePound: function () {
		if (!this.poundable) {
			return
		}
		var a = this.getTabPound();
		if (this.tabs) {
			this.tabs.setTabPound(this.tabIndex, a);
			location.replace("#" + this.id + ":" + a)
		} else {
			location.replace("#" + a)
		}
	},
	updateNav: function () {
		var e = [this.navTop, this.navBot],
		j = this.nItemsPerPage,
		h = this.rowOffset,
		d = this.nRowsVisible,
		g = 0,
		b = 0,
		f = 0,
		k = 0;
		if (d > 0) {
			if (! (this.hideNav & 1)) {
				e[0].style.display = ""
			}
			if (! (this.hideNav & 2)) {
				e[1].style.display = ""
			}
		} else {
			e[0].style.display = e[1].style.display = "none"
		}
		if (j) {
			if (h > 0) {
				b = 1;
				if (h >= j + j) {
					g = 1
				}
			}
			if (h + j < d) {
				f = 1;
				if (h + j + j < d) {
					k = 1
				}
			}
		}
		for (var c = 0; c < 2; ++c) {
			var a = e[c].childNodes;
			a[0].style.display = (g ? "": "none");
			a[1].style.display = (b ? "": "none");
			a[3].style.display = (f ? "": "none");
			a[4].style.display = (k ? "": "none");
			a = a[2].childNodes;
			a[0].firstChild.nodeValue = h + 1;
			a[2].firstChild.nodeValue = j ? Math.min(h + j, d) : d;
			a[4].firstChild.nodeValue = d
		}
	},
	getTabName: function () {
		var a = this.name,
		b = this.data.length;
		if (b > 0 && !this.hideCount) {
			a += sprintf(LANG.qty, b)
		}
		return a
	},
	getTabPound: function () {
		var a = "";
		a += this.rowOffset;
		if (this.poundable != 2 && this.sort.length) {
			a += ("+" + this.sort.join("+")).replace(/\+\-/g, "-")
		}
		return a
	},
	getCheckedRows: function () {
		var d = [];
		for (var c = 0, a = this.data.length; c < a; ++c) {
			var b = this.data[c];
			if ((b.__cb && b.__cb.checked) || (!b.__cb && b.__chk)) {
				d.push(b)
			}
		}
		return d
	},
	deleteRows: function (c) {
		if (!c || !c.length) {
			return
		}
		for (var b = 0, a = c.length; b < a; ++b) {
			var d = c[b];
			if (!d.__hidden && !d.__hidden) {
				this.nRowsVisible -= 1
			}
			d.__deleted = true
		}
		this.updateTabName();
		if (this.rowOffset >= this.nRowsVisible) {
			this.previousPage()
		} else {
			this.refreshRows();
			this.updateNav()
		}
	},
	setData: function (a) {
		this.data = a;
		this.indexCreated = false;
		this.resetRowVisibility();
		if (this.tabs) {
			this.pounded = (this.tabs.poundedTab == this.tabIndex);
			if (this.pounded) {
				this.readPound()
			}
		} else {
			this.readPound()
		}
		this.applySort();
		this.updateSortArrow();
		if (this.customFilter != null) {
			this.updateFilters()
		}
		this.updateNav();
		this.refreshRows()
	},
	getClipDiv: function () {
		return this.clipDiv
	},
	getNoteTopDiv: function () {
		return this.noteTop
	},
	focusSearch: function () {
		this.quickSearchBox.focus()
	},
	clearSearch: function () {
		this.quickSearchBox.value = ""
	}
};
Listview.sortRows = function (e, d) {
	var j = Listview.sort,
	k = Listview.columns;
	for (var h = 0, c = j.length; h < c; ++h) {
		var g, f = k[Math.abs(j[h]) - 1];
		if (f.sortFunc) {
			g = f.sortFunc(e, d, j[h])
		} else {
			g = strcmp(e[f.value], d[f.value])
		}
		if (g != 0) {
			return g * j[h]
		}
	}
	return 0
},
Listview.sortIndexedRows = function (d, c) {
	var g = Listview.sort,
	h = Listview.columns,
	e = h[Math.abs(g[0]) - 1],
	f;
	if (e.sortFunc) {
		f = e.sortFunc(d, c, g[0])
	} else {
		f = strcmp(d[e.value], c[e.value])
	}
	if (f != 0) {
		return f * g[0]
	}
	return (d.__si - c.__si)
},
Listview.cbSelect = function (b) {
	for (var d = 0, a = this.data.length; d < a; ++d) {
		var c = this.data[d];
		var f = b;
		if (!c.__nochk && c.__tr) {
			var e = c.__tr.firstChild.firstChild;
			if (f == null) {
				f = !e.checked
			}
			if (e.checked != f) {
				e.checked = f;
				c.__tr.className = (e.checked ? "checked": "");
				if (Browser.ie) {
					e.defaultChecked = f;
					if (Browser.ie6) { (Listview.itemOut.bind(c.__tr))()
					}
				}
			}
		} else {
			if (f == null) {
				f = true
			}
		}
		c.__chk = f
	}
};
Listview.cbClick = function (a) {
	setTimeout(Listview.cbUpdate.bind(0, 0, this, this.parentNode.parentNode), 1);
	sp(a)
};
Listview.cbCellClick = function (a) {
	setTimeout(Listview.cbUpdate.bind(0, 1, this.firstChild, this.parentNode), 1);
	sp(a)
};
Listview.cbIeFix = function () {
	var d = getElemTag(this.tbody, "tr");
	for (var c = 0, a = d.length; c < a; ++c) {
		var b = d[c].firstChild.firstChild;
		if (b) {
			b.checked = b.defaultChecked = false
		}
	}
};
Listview.cbUpdate = function (c, a, b) {
	if (c) {
		a.checked = !a.checked
	}
	b.className = (a.checked ? "checked": "");
	if (Browser.ie) {
		a.defaultChecked = a.checked;
		if (Browser.ie6) { (Listview.itemOver.bind(b))()
		}
	}
};
Listview.itemOver = function () {
	this.style.backgroundColor = (this.className == "checked" ? "#2C2C2C": "#202020")
};
Listview.itemOut = function () {
	this.style.backgroundColor = (this.className == "checked" ? "#242424": "transparent")
};
Listview.headerClick = function (a, b, c) {
	c = normalEvent(c);
	if (c._button == 3 || c.shiftKey || c.ctrlKey) {
		Tooltip.hide();
		setTimeout(Listview.headerFilter.bind(this, a, null), 1)
	} else {
		this.sortBy(b + 1)
	}
	return false
};
Listview.headerFilter = function (c, f) {
	var j = "";
	if (c.__filter) {
		if (c.__filter.invert) {
			j += "!"
		}
		j += c.__filter.text
	}
	if (f == null) {
		var f = prompt(sprintf(LANG.prompt_colfilter1 + (c.type == "text" ? LANG.prompt_colfilter2: LANG.prompt_colfilter3), c.name), j)
	}
	if (f != null) {
		var e = {
			text: "",
			type: -1
		};
		f = trim(f.replace(/\s+/g, " "));
		if (f) {
			if (f.charAt(0) == "!" || f.charAt(0) == "-") {
				e.invert = 1;
				f = f.substr(1)
			}
			if (c.type == "text") {
				e.type = 0;
				e.text = f;
				if (e.invert) {
					e.regex = g_createOrRegex(f)
				} else {
					e.words = f.toLowerCase().split(" ")
				}
			} else {
				var i, b;
				if (f.match(/(>|=|<|>=|<=)\s*([0-9\.]+)/)) {
					i = parseFloat(RegExp.$2);
					if (!isNaN(i)) {
						switch (RegExp.$1) {
						case ">":
							e.type = 1;
							break;
						case "=":
							e.type = 2;
							break;
						case "<":
							e.type = 3;
							break;
						case ">=":
							e.type = 4;
							break;
						case "<=":
							e.type = 5;
							break
						}
						e.value = i;
						e.text = RegExp.$1 + " " + i
					}
				} else {
					if (f.match(/([0-9\.]+)\s*\-\s*([0-9\.]+)/)) {
						i = parseFloat(RegExp.$1);
						b = parseFloat(RegExp.$2);
						if (!isNaN(i) && !isNaN(b)) {
							if (i > b) {
								var g = i;
								i = b;
								b = g
							}
							if (i == b) {
								e.type = 2;
								e.value = i;
								e.text = "= " + i
							} else {
								e.type = 6;
								e.value = i;
								e.value2 = b;
								e.text = i + " - " + b
							}
						}
					} else {
						var d = f.toLowerCase().split(" ");
						if (d.length == 1 && !isNaN(i = parseFloat(d[0]))) {
							e.type = 2;
							e.value = i;
							e.text = "= " + i
						} else {
							if (c.type == "text") {
								e.type = 0;
								e.text = f;
								if (e.invert) {
									e.regex = g_createOrRegex(f)
								} else {
									e.words = d
								}
							}
						}
					}
				}
			}
			if (e.type == -1) {
				alert(LANG.message_invalidfilter);
				return
			}
		}
		if (!c.__filter || e.text != c.__filter.text || e.invert != c.__filter.invert) {
			var h = c.__th.firstChild.firstChild;
			if (f && e.text) {
				if (!c.__filter) {
					h.className = "q5"; ++(this.nFilters)
				}
				c.__filter = e
			} else {
				if (c.__filter) {
					h.className = ""; --(this.nFilters)
				}
				c.__filter = null
			}
			this.updateFilters(1)
		}
	}
};
Listview.headerOver = function (b, c, f) {
	var d = "";
	d += '<b class="q1">' + (c.tooltip ? c.tooltip: c.name) + "</b>";
	if (c.__filter) {
		d += "<br />" + sprintf((c.__filter.invert ? LANG.tooltip_colfilter2: LANG.tooltip_colfilter1), c.__filter.text)
	}
	d += '<br /><span class="q2">' + LANG.tooltip_lvheader1 + "</span>";
	if (this.filtrable && (c.filtrable == null || c.filtrable)) {
		d += '<br /><span class="q2">' + (Browser.opera ? LANG.tooltip_lvheader3: LANG.tooltip_lvheader2) + "</span>"
	}
	Tooltip.show(b, d, 0, 0, "q")
};
Listview.extraCols = {
	cost: {
		id: "cost",
		name: LANG.cost,
		getValue: function (a) {
			return (a.cost[3] ? a.cost[3][0][1] : 0) || a.cost[2] || a.cost[1] || a.cost[0]
		},
		compute: function (a, b) {
			Listview.funcBox.appendMoney(b, a.cost[0], null, a.cost[1], a.cost[2], a.cost[3])
		},
		sortFunc: function (d, c, e) {
			var g = 0,
			f = 0;
			if (d.cost[3] != null) {
				array_walk(d.cost[3], function (a, b, j, h) {
					g += Math.pow(10, h) + a[1]
				})
			}
			if (c.cost[3] != null) {
				array_walk(c.cost[3], function (a, b, j, h) {
					f += Math.pow(10, h) + a[1]
				})
			}
			return strcmp(g, f) || strcmp(d.cost[2], c.cost[2]) || strcmp(d.cost[1], c.cost[1]) || strcmp(d.cost[0], c.cost[0])
		}
	},
	count: {
		id: "count",
		name: LANG.count,
		width: "11%",
		value: "count",
		compute: function (b, c) {
			if (! (this._totalCount > 0 || b.outof > 0)) {
				return
			}
			if (b.outof) {
				var a = createElem("div");
				a.className = "small q0";
				append(a, ct(sprintf(LANG.lvdrop_outof, b.outof)));
				append(c, a)
			}
			return b.count
		},
		getVisibleText: function (a) {
			var b = a.count;
			if (a.outof) {
				b += " " + a.outof
			}
			return b
		}
	},
percent: {id: "percent",name: "%",width: "10%",value: "percent",compute: function(a, b) {
            if (a.count == -1) {
                return "??"
            }
            if (a.percent >= 1.95) {
                return a.percent.toFixed(0)
            } else if (a.percent < 0) {
                return ((-1 * a.percent) + ' (' + LANG.types[5][0] + ')')
            } else {
                return parseFloat(a.percent.toFixed(4))
            }
        },sortFunc: function(d, c, e) {
            return strcmp(Math.abs(d.percent), Math.abs(c.percent));
        },getVisibleText: function(a) {
            if (a.count == -1) {
                return "??"
            }
            if (a.percent >= 1.95) {
                return a.percent.toFixed(0)
            } else if (a.percent < 0) {
                return ((-1 * a.percent) + ' (' + LANG.types[5][0] + ')')
            } else {
                return parseFloat(a.percent.toFixed(1))
            }
        }},
	stock: {
		id: "stock",
		name: LANG.stock,
		width: "10%",
		value: "stock",
		compute: function (a, b) {
			if (a.stock > 0) {
				return a.stock
			} else {
				b.style.fontFamily = "Verdana, sans-serif";
				return String.fromCharCode(8734)
			}
		},
		getVisibleText: function (a) {
			if (a.stock > 0) {
				return a.stock
			} else {
				return String.fromCharCode(8734) + " infinity"
			}
		}
	}
};
Listview.funcBox = {
	createSimpleCol: function (c, d, a, b) {
		return {
			id: c,
			name: LANG[d],
			width: a,
			value: b
		}
	},
	initLootTable: function (b) {
		var a;
		if (this._totalCount != null) {
			a = this._totalCount
		} else {
			a = b.outof
		}
		if (a == 0) {
			if (b.count != -1) {
				b.percent = b.count
			} else {
				b.percent = 0
			}
		} else {
			b.percent = b.count / a * 100
		}
	},
	assocArrCmp: function (e, d, c) {
		if (e == null) {
			return - 1
		} else {
			if (d == null) {
				return 1
			}
		}
		var h = Math.max(e.length, d.length);
		for (var g = 0; g < h; ++g) {
			if (e[g] == null) {
				return - 1
			} else {
				if (d[g] == null) {
					return 1
				}
			}
			var f = strcmp(c[e[g]], c[d[g]]);
			if (f != 0) {
				return f
			}
		}
		return 0
	},
	location: function (f, g) {
		if (f.location == null) {
			return - 1
		}
		for (var d = 0, b = f.location.length; d < b; ++d) {
			if (d > 0) {
				append(g, ct(LANG.comma))
			}
			var e = f.location[d];
			if (e == -1) {
				append(g, ct(LANG.ellipsis))
			} else {
				var c = createElem("a");
				c.className = "q1";
				c.href = "http://www.topwow.top/zone-" + e + ".html";
				append(c, ct(g_zones[e]));
				append(g, c)
			}
		}
	},
	arrayText: function (b, e) {
		if (b == null) {
			return
		}
		var d = "";
		for (var c = 0, a = b.length; c < a; ++c) {
			if (c > 0) {
				d += " "
			}
			if (!e[b[c]]) {
				continue
			}
			d += e[b[c]]
		}
		return d
	},
	createCenteredIcons: function (h, c, p, m) {
		if (h != null) {
			var l = createElem("div"),
			a = createElem("div");
			if (p) {
				var k = createElem("div");
				k.style.position = "relative";
				k.style.width = "1px";
				var n = createElem("div");
				n.className = "q0";
				n.style.position = "absolute";
				n.style.right = "2px";
				n.style.lineHeight = "26px";
				n.style.fontSize = "11px";
				n.style.whiteSpace = "nowrap";
				append(n, ct(p));
				append(k, n);
				append(l, k)
			}
			var g = g_items;
			if (m == 1) {
				g = g_spells
			}
			for (var e = 0, j = h.length; e < j; ++e) {
				var o;
				if (h[e] == null) {
					o = createElem("div");
					o.style.width = o.style.height = "26px"
				} else {
					var b, f;
					if (typeof h[e] == "object") {
						b = h[e][0];
						f = h[e][1]
					} else {
						b = h[e]
					}
					if (b) {
						o = g.createIcon(b, 0, f)
					} else {
						o = Icon.create("inventoryslot_empty", 0, null, "javascript:;")
					}
				}
				o.style.cssFloat = o.style.styleFloat = "left";
				append(l, o)
			}
			l.style.margin = "0 auto";
			l.style.textAlign = "left";
			l.style.width = (26 * h.length) + "px";
			a.className = "clear";
			append(c, l);
			append(c, a);
			return true
		}
	},
	createSocketedIcons: function (b, e, c, g, n) {
		var m = 0,
		k = createElem("div"),
		a = createElem("div");
		for (var f = 0, h = b.length; f < h; ++f) {
			var l, j = c[f];
			if (!c || !j) {
				l = Icon.create(null, 0, null, "javascript:;")
			} else {
				if (g_items[j]) {
					l = g_items.createIcon(j, 0)
				} else {
					l = Icon.create(g_gems[j].icon, 0, null, "http://www.topwow.top/item-" + j+".html")
				}
			}
			l.className += " iconsmall-socket-" + g_file_gems[b[f]] + (!c || !j ? "-empty": "");
			l.style.cssFloat = l.style.styleFloat = "left";
			if (g && g[f]) {
				l.insertBefore(createElem("var"), l.childNodes[1]); ++m
			}
			append(k, l)
		}
		k.style.margin = "0 auto";
		k.style.textAlign = "left";
		k.style.width = (26 * b.length) + "px";
		a.className = "clear";
		append(e, k);
		append(e, a);
		if (n && m == b.length) {
			k = createElem("div");
			k.style.paddingTop = "4px";
			append(k, ct(n));
			append(e, k)
		}
	},
	getItemType: function (c, a, b) {
		if (b != null && g_item_subsubclasses[c] != null && g_item_subsubclasses[c][a] != null) {
			return {
				url: "http://www.topwow.top/items-" + c + "." + a + "." + b+".html",
				text: g_item_subsubclasses[c][a][b]
			}
		}
		if (g_item_subclasses[c] != null) {
			return {
				url: "http://www.topwow.top/items-" + c + "." + a+".html",
				text: g_item_subclasses[c][a]
			}
		} else {
			return {
				url: "http://www.topwow.top/items-" + c+".html",
				text: g_item_classes[c]
			}
		}
	},
	getQuestCategory: function (a) {
		if (a > 0) {
			return g_zones[a]
		} else {
			return g_quest_sorts[ - a]
		}
	},
	getFactionCategory: function (b, a) {
		if (b) {
			return g_faction_categories[b]
		} else {
			return g_faction_categories[a]
		}
	},
	createTextRange: function (b, a) {
		b |= 0;
		a |= 0;
		if (b > 1 || a > 1) {
			if (b != a && a > 0) {
				return b + "-" + a
			} else {
				return b + ""
			}
		}
		return null
	},
	coReport: function (c, d, f) {
		if (!g_user.id || !g_report_reasons[f]) {
			return
		}
		var a = "";
		if (f == 4) {
			a = prompt(LANG.prompt_details, "")
		} else {
			if (!confirm(sprintf((c == 0 ? LANG.confirm_report: LANG.confirm_report2), g_report_reasons[f]))) {
				return
			}
		}
		if (a != null) {
			var e = "?report&type=" + c + "&typeid=" + d.id + "&reason=" + f;
			if (a) {
				e += "&reasonmore=" + urlencode(a)
			}
			new Ajax(e);
			var b = createElem("span");
			append(b, ct(LANG.lvcomment_reported));
			this.parentNode.replaceChild(b, this)
		}
	},
	coReportClick: function (b, a, c) {
		this.menu = [[2, g_report_reasons[2], Listview.funcBox.coReport.bind(this, a, b, 2)], [1, g_report_reasons[1], Listview.funcBox.coReport.bind(this, a, b, 1)], [3, g_report_reasons[3], Listview.funcBox.coReport.bind(this, a, b, 3)], [4, g_report_reasons[4], Listview.funcBox.coReport.bind(this, a, b, 4)]];
		if (a == 1 && b.op && typeof g_pageInfo != "undefined" && !g_pageInfo.sticky) {
			this.menu.splice(3, 0, [0, g_report_reasons[0], Listview.funcBox.coReport.bind(this, a, b, 0)])
		} (Menu.showAtCursor.bind(this, c))()
	},
	coGetColor: function (c, a) {
		if (c.user && g_customColors[c.user]) {
			return " comment-" + g_customColors[c.user]
		}
		switch (a) {
		case - 1 : var b = c.divPost.childNodes[1].className.match(/comment-([a-z]+)/);
			if (b != null) {
				return " comment-" + b[1]
			}
			break;
		case 3:
		case 4:
			if (c.roles & 56) {
				return " comment-green"
			} else {
				if (c.roles & 64) {
					return " comment-gold"
				}
			}
			break
		}
		if (c.roles & 2) {
			return " comment-blue"
		} else {
			if (c.rating >= 10) {
				return " comment-green"
			} else {
				if (c.rating < 0) {
					return " comment-bt"
				}
			}
		}
		return ""
	},
	coToggleVis: function (b) {
		this.firstChild.nodeValue = (g_toggleDisplay(b.divBody) ? LANG.lvcomment_hide: LANG.lvcomment_show);
		var a = b.divHeader.firstChild.lastChild;
		if (b.ratable) {
			a.style.display = ""
		} else {
			if (b.deleted || b.purged) {
				a.style.fontWeight = "normal";
				a.className = "q10";
				a.innerHTML = (b.deleted ? LANG.lvcomment_deleted: LANG.lvcomment_purged);
				a.style.display = ""
			}
		}
		g_toggleDisplay(b.divLinks);
		if (b.lastEdit != null) {
			g_toggleDisplay(b.divLastEdit)
		}
	},
	coRate: function (e, a) {
		if (a == 0) {
			var c = 5;
			if (g_user.roles & 2) {
				c = 25
			} else {
				if (g_user.roles & 16) {
					c = 15
				}
			}
			var d = prompt(sprintf(LANG.prompt_customrating, c, c), 0);
			if (d == null) {
				return
			} else {
				d |= 0;
				if (d != 0 && Math.abs(d) <= c) {
					a = d
				}
			}
			if (a == 0) {
				return
			}
		} else {
			if (g_user.roles & 26) {
				a *= 5
			}
		}
		new Ajax("?comment=rate&id=" + e.id + "&rating=" + a);
		e.rating += a;
		var b = e.divHeader.firstChild;
		b = b.childNodes[b.childNodes.length - 3];
		b.lastChild.firstChild.nodeValue = (e.rating > 0 ? "+": "") + e.rating;
		Tooltip.hide();
		de(b.nextSibling);
		de(b.nextSibling)
	},
	coDelete: function (a) {
		if (a.purged) {
			alert(LANG.message_cantdeletecomment)
		} else {
			if (confirm(LANG.confirm_deletecomment)) {
				new Ajax("?comment=delete&id=" + a.id);
				this.deleteRows([a])
			}
		}
	},
	coDetach: function (a) {
		if (a.replyTo == 0) {
			alert(LANG.message_cantdetachcomment)
		} else {
			if (confirm(LANG.confirm_detachcomment)) {
				new Ajax("?comment=detach&id=" + a.id);
				a.replyTo = 0;
				alert(LANG.message_commentdetached)
			}
		}
	},
	coEdit: function (g, e) {
		g.divBody.style.display = "none";
		g.divLinks.firstChild.style.display = "none";
		var f = createElem("div");
		f.className = "comment-edit";
		g.divEdit = f;
		if (e == -1) {
			if (g_users[g.user] != null) {
				g.roles = g_users[g.user].roles
			}
		}
		var a = Listview.funcBox.coEditAppend(f, g, e);
		var b = createElem("div");
		b.className = "comment-edit-buttons";
		var d = createElem("input");
		d.type = "button";
		d.value = LANG.compose_save;
		d.onclick = Listview.funcBox.coEditButton.bind(d, g, true, e);
		append(b, d);
		append(b, ct(" "));
		d = createElem("input");
		d.type = "button";
		d.value = LANG.compose_cancel;
		d.onclick = Listview.funcBox.coEditButton.bind(d, g, false, e);
		append(b, d);
		append(f, b);
		var c = f;
		if (Browser.ie6) {
			c = createElem("div");
			c.style.width = "99%";
			append(c, f)
		}
		if (e == -1) {
			g.divPost.insertBefore(c, g.divBody.nextSibling)
		} else {
			g.__div.insertBefore(c, g.divBody.nextSibling)
		}
		a.focus()
	},
	coEditAppend: function (m, b, l) {
		var f = Listview.funcBox.coGetCharLimit(l);
		if (l == 1 || l == 3 || l == 4) {
			b.user = g_user.name;
			b.roles = g_user.roles;
			b.rating = 1
		} else {
			if (l == 2) {
				b.roles = g_user.roles;
				b.rating = 1
			}
		}
		if (l == -1 || l == 0) {
			var j = createElem("div");
			j.className = "comment-edit-modes";
			append(j, ct(LANG.compose_mode));
			var o = createElem("a");
			o.className = "selected";
			o.onclick = Listview.funcBox.coModeLink.bind(o, 1, l, b);
			o.href = "javascript:;";
			append(o, ct(LANG.compose_edit));
			append(j, o);
			append(j, ct("|"));
			var u = createElem("a");
			u.onclick = Listview.funcBox.coModeLink.bind(u, 2, l, b);
			u.href = "javascript:;";
			append(u, ct(LANG.compose_preview));
			append(j, u);
			append(m, j)
		}
		var a = createElem("div");
		a.style.display = "none";
		a.className = "comment-body" + Listview.funcBox.coGetColor(b, l);
		append(m, a);
		var h = createElem("div");
		h.className = "comment-edit-body";
		var e = createElem("div");
		e.className = "toolbar";
		var g = createElem("textarea");
		g.className = "comment-editbox";
		g.rows = 10;
		g.value = b.body;
		switch (l) {
		case 1:
			g.name = "commentbody";
			g.onfocus = g_revealCaptcha;
			break;
		case 2:
			g.name = "desc";
			g.originalValue = b.body;
			break;
		case 3:
			g.name = "body";
			g.onfocus = g_revealCaptcha;
			break;
		case 4:
			g.name = "sig";
			g.originalValue = b.body;
			g.rows = (Browser.gecko ? 2 : 3);
			g.style.height = "auto";
			break
		}
		if (l != -1 && l != 0) {
			var d = createElem("h3"),
			v = createElem("a"),
			t = createElem("div"),
			s = createElem("div");
			var c = Listview.funcBox.coLivePreview.bind(g, b, l, t);
			if (b.body) {
				v.className = "disclosure-off";
				t.style.display = "none"
			} else {
				v.className = "disclosure-on"
			}
			append(v, ct(LANG.compose_livepreview));
			append(d, v);
			v.href = "javascript:;";
			v.onclick = function () {
				c(1);
				v.className = "disclosure-" + (g_toggleDisplay(t) ? "on": "off")
			};
			ns(v);
			d.className = "first";
			s.className = "pad";
			append(a, d);
			append(a, t);
			append(a, s);
			g_onAfterTyping(g, c, 50);
			aE(g, "focus", function () {
				c();
				a.style.display = "";
				if (l != 4) {
					g.style.height = "22em"
				}
			})
		} else {
			if (l != 4) {
				aE(g, "focus", function () {
					g.style.height = "22em"
				})
			}
		}
		var r = [{
			id: "b",
			title: LANG.markup_b,
			pre: "[b]",
			post: "[/b]"
		},
		{
			id: "i",
			title: LANG.markup_i,
			pre: "[i]",
			post: "[/i]"
		},
		{
			id: "u",
			title: LANG.markup_u,
			pre: "[u]",
			post: "[/u]"
		},
		{
			id: "s",
			title: LANG.markup_s,
			pre: "[s]",
			post: "[/s]"
		},
		{
			id: "small",
			title: LANG.markup_small,
			pre: "[small]",
			post: "[/small]"
		},
		{
			id: "url",
			title: LANG.markup_url,
			onclick: function () {
				var i = prompt(LANG.prompt_linkurl, "http://");
				if (i) {
					g_insertTag(g, "[url=" + i + "]", "[/url]")
				}
			}
		},
		{
			id: "quote",
			title: LANG.markup_quote,
			pre: "[quote]",
			post: "[/quote]"
		},
		{
			id: "code",
			title: LANG.markup_code,
			pre: "[code]",
			post: "[/code]"
		},
		{
			id: "ul",
			title: LANG.markup_ul,
			pre: "[ul]\n[li]",
			post: "[/li]\n[/ul]",
			rep: function (i) {
				return i.replace(/\n/g, "[/li]\n[li]")
			}
		},
		{
			id: "ol",
			title: LANG.markup_ol,
			pre: "[ol]\n[li]",
			post: "[/li]\n[/ol]",
			rep: function (i) {
				return i.replace(/\n/g, "[/li]\n[li]")
			}
		},
		{
			id: "li",
			title: LANG.markup_li,
			pre: "[li]",
			post: "[/li]"
		}];
		for (var p = 0, q = r.length; p < q; ++p) {
			var k = r[p];
			if (l == 4 && k.id == "quote") {
				break
			}
			var n = createElem("button");
			var w = createElem("img");
			n.setAttribute("type", "button");
			n.title = k.title;
			if (k.onclick != null) {
				n.onclick = k.onclick
			} else {
				n.onclick = g_insertTag.bind(0, g, k.pre, k.post, k.rep)
			}
			w.src = "templates/wowhead/images/pixel.gif";
			w.className = "toolbar-" + k.id;
			append(n, w);
			append(e, n)
		}
		append(h, e);
		append(h, g);
		append(h, createElem("br"));
		if (l == 4) {
			append(h, ct(sprintf(LANG.compose_limit2, f, 3)))
		} else {
			append(h, ct(sprintf(LANG.compose_limit, f)))
		}
		append(m, h);
		return g
	},
	coLivePreview: function (f, e, a, b) {
		if (b != 1 && a.style.display == "none") {
			return
		}
		var c = this,
		i = Listview.funcBox.coGetCharLimit(e),
		g = (c.value.length > i ? c.value.substring(0, i) : c.value);
		if (e == 4) {
			var h;
			if ((h = g.indexOf("\n")) != -1 && (h = g.indexOf("\n", h + 1)) != -1 && (h = g.indexOf("\n", h + 1)) != -1) {
				g = g.substring(0, h)
			}
		}
		var d = Markup.toHtml(g, {
			mode: Markup.MODE_COMMENT,
			roles: f.roles
		});
		if (d) {
			a.innerHTML = d
		} else {
			a.innerHTML = '<span class="q6">...</span>'
		}
	},
	coEditButton: function (f, d, e) {
		if (d) {
			var a = getElemTag(f.divEdit, "textarea")[0];
			if (!Listview.funcBox.coValidate(a, e)) {
				return
			}
			if (a.value != f.body) {
				var c = 0;
				if (f.lastEdit != null) {
					c = f.lastEdit[1]
				}++c;
				f.lastEdit = [g_serverTime, c, g_user.name];
				Listview.funcBox.coUpdateLastEdit(f);
				var b = Listview.funcBox.coGetCharLimit(e);
				f.divBody.innerHTML = Markup.toHtml((a.value.length > b ? a.value.substring(0, b) : a.value), {
					mode: Markup.MODE_COMMENT,
					roles: f.roles
				});
				f.body = a.value;
				if (e == -1) {
					new Ajax("?forums=editpost&id=" + f.id, {
						method: "POST",
						params: "body=" + urlencode(f.body)
					})
				} else {
					new Ajax("?comment=edit&id=" + f.id, {
						method: "POST",
						params: "body=" + urlencode(f.body)
					})
				}
			}
		}
		f.divBody.style.display = "";
		f.divLinks.firstChild.style.display = "";
		de(f.divEdit);
		f.divEdit = null
	},
	coGetCharLimit: function (a) {
		switch (a) {
		case 0:
		case 1:
		case 2:
			return 7500;
		case 4:
			return 250;
		default:
			return 15000
		}
	},
	coModeLink: function (e, b, f) {
		var j = Listview.funcBox.coGetCharLimit(e);
		var c = Markup.MODE_COMMENT;
		array_walk(getElemTag(this.parentNode, "a"), function (k) {
			k.className = ""
		});
		this.className = "selected";
		var d = getElemTag(this.parentNode.parentNode, "textarea")[0],
		i = d.parentNode,
		a = i.previousSibling;
		if (b == 4) {
			c = Markup.MODE_SIGNATURE
		}
		switch (e) {
		case 1:
			i.style.display = "";
			a.style.display = "none";
			i.firstChild.focus();
			break;
		case 2:
			i.style.display = "none";
			var g = (d.value.length > j ? d.value.substring(0, j) : d.value);
			if (b == 4) {
				var h;
				if ((h = g.indexOf("\n")) != -1 && (h = g.indexOf("\n", h + 1)) != -1 && (h = g.indexOf("\n", h + 1)) != -1) {
					g = g.substring(0, h)
				}
			}
			a.innerHTML = Markup.toHtml(g, {
				mode: c,
				roles: f.roles
			});
			a.style.display = "";
			break
		}
	},
	coReply: function (b) {
		document.forms.addcomment.elements.replyto.value = b.replyTo;
		var a = getElement("gjkdlfgkjh436");
		getElemTag(a, "span")[0].innerHTML = b.user;
		a.style.display = "";
		co_addYourComment()
	},
	coValidate: function (a, c) {
		c |= 0;
		if (c == 1 || c == -1) {
			if (trim(a.value).length < 1) {
				alert(LANG.message_forumposttooshort);
				return false
			}
		} else {
			if (trim(a.value).length < 10) {
				alert(LANG.message_commenttooshort);
				return false
			}
		}
		var b = Listview.funcBox.coGetCharLimit(c);
		if (a.value.length > b) {
			if (!confirm(sprintf(c == 1 ? LANG.confirm_forumposttoolong: LANG.confirm_commenttoolong, b, a.value.substring(b - 30, b)))) {
				return false
			}
		}
		return true
	},
	coCustomRatingOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_customrating, 0, 0, "q")
	},
	coPlusRatingOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_uprate, 0, 0, "q2")
	},
	coMinusRatingOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_downrate, 0, 0, "q10")
	},
	coSortDate: function (a) {
		a.nextSibling.nextSibling.className = "";
		a.className = "selected";
		this.mainDiv.className += " listview-aci";
		this.setSort([1], true, false)
	},
	coSortHighestRatedFirst: function (a) {
		a.previousSibling.previousSibling.className = "";
		a.className = "selected";
		this.mainDiv.className = this.mainDiv.className.replace("listview-aci", "");
		this.setSort([ - 3, 2], true, false)
	},
	coUpdateLastEdit: function (f) {
		var b = f.divLastEdit;
		if (!b) {
			return
		}
		if (f.lastEdit != null) {
			var e = f.lastEdit;
			b.childNodes[1].firstChild.nodeValue = e[2];
			b.childNodes[1].href = "?user=" + e[2];
			var c = new Date(e[0]);
			var d = (g_serverTime - c) / 1000;
			if (b.childNodes[3].firstChild) {
				de(b.childNodes[3].firstChild)
			}
			Listview.funcBox.coFormatDate(b.childNodes[3], d, c);
			var a = "";
			if (f.rating != null) {
				a += LANG.lvcomment_patch1 + g_getPatchVersion(c) + LANG.lvcomment_patch2
			}
			if (e[1] > 1) {
				a += LANG.dash + sprintf(LANG.lvcomment_nedits, e[1])
			}
			b.childNodes[4].nodeValue = a;
			b.style.display = ""
		} else {
			b.style.display = "none"
		}
	},
	coFormatDate: function (f, e, b, g, h) {
		var d;
		if (e < 2592000) {
			var a = sprintf(LANG.date_ago, g_formatTimeElapsed(e));
			var c = new Date();
			c.setTime(b.getTime() + (g_localTime - g_serverTime));
			f.style.cursor = "help";
			f.title = c.toLocaleString()
		} else {
			a = LANG.date_on + g_formatDateSimple(b, g)
		}
		if (h == 1) {
			a = a.substr(0, 1).toUpperCase() + a.substr(1)
		}
		d = ct(a);
		append(f, d)
	},
	ssCellOver: function () {
		this.className = "screenshot-caption-over"
	},
	ssCellOut: function () {
		this.className = "screenshot-caption"
	},
	ssCellClick: function (b, d) {
		d = normalEvent(d);
		if (d.shiftKey || d.ctrlKey) {
			return
		}
		var a = 0,
		c = d._target;
		while (c && a < 3) {
			if (c.nodeName == "A") {
				return
			}
			if (c.nodeName == "IMG") {
				break
			}
			c = c.parentNode
		}
		ScreenshotViewer.show({
			screenshots: this.data,
			pos: b
		})
	},
	moneyHonorOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_honorpoints, 0, 0, "q")
	},
	moneyArenaOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_arenapoints, 0, 0, "q")
	},
	moneyAchievementOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_achievementpoints, 0, 0, "q")
	},
	appendMoney: function (g, a, f, m, j, c, l) {
		var k, h = 0;
		if (a >= 10000) {
			h = 1;
			k = createElem("span");
			k.className = "moneygold";
			append(k, ct(Math.floor(a / 10000)));
			append(g, k);
			a %= 10000
		}
		if (a >= 100) {
			if (h) {
				append(g, ct(" "))
			} else {
				h = 1
			}
			k = createElem("span");
			k.className = "moneysilver";
			append(k, ct(Math.floor(a / 100)));
			append(g, k);
			a %= 100
		}
		if (a >= 1 || f != null) {
			if (h) {
				append(g, ct(" "))
			} else {
				h = 1
			}
			k = createElem("span");
			k.className = "moneycopper";
			append(k, ct(a));
			append(g, k)
		}
		if (m != null && m != 0) {
			if (h) {
				append(g, ct(" "))
			} else {
				h = 1
			}
			k = createElem("span");
			k.className = "money" + (m < 0 ? "horde": "alliance") + " tip";
			k.onmouseover = Listview.funcBox.moneyHonorOver;
			k.onmousemove = Tooltip.cursorUpdate;
			k.onmouseout = Tooltip.hide;
			append(k, ct(number_format(Math.abs(m))));
			append(g, k)
		}
		if (j >= 1) {
			if (h) {
				append(g, ct(" "))
			} else {
				h = 1
			}
			k = createElem("span");
			k.className = "moneyarena tip";
			k.onmouseover = Listview.funcBox.moneyArenaOver;
			k.onmousemove = Tooltip.cursorUpdate;
			k.onmouseout = Tooltip.hide;
			append(k, ct(number_format(j)));
			append(g, k)
		}
		if (c != null) {
			for (var b = 0; b < c.length; ++b) {
				if (h) {
					append(g, ct(" "))
				} else {
					h = 1
				}
				var n = c[b][0];
				var e = c[b][1];
				k = createElem("a");
				k.href = "http://www.topwow.top/item-" + n + ".html";
				k.className = "moneyitem";
				k.style.backgroundImage = "url(images/icons/tiny/" + g_items.getIcon(n).toLowerCase() + ".gif)";
				append(k, ct(e));
				append(g, k)
			}
		}
		if (l != null) {
			if (h) {
				append(g, ct(" "))
			} else {
				h = 1
			}
			k = createElem("span");
			k.className = "moneyachievement tip";
			k.onmouseover = Listview.funcBox.moneyAchievementOver;
			k.onmousemove = Tooltip.cursorUpdate;
			k.onmouseout = Tooltip.hide;
			append(k, ct(number_format(l)));
			append(g, k)
		}
	},
	getUpperSource: function (a, b) {
		switch (a) {
		case 2:
			if (b.z) {
				return LANG.source_zonedrop
			}
			break;
		case 4:
			return LANG.source_quests;
		case 5:
			return LANG.source_vendors
		}
		return g_sources[a]
	},
	getLowerSource: function (a, d, c) {
		switch (a) {
		case 3:
			if (d.p && g_sources_pvp[d.p]) {
				return {
					text: g_sources_pvp[d.p]
				}
			}
			break
		}
		switch (c) {
		case 0:
		case 1:
		case 2:
			if (d.z) {
				var b = {
					url: "http://www.topwow.top/zone-" + d.z +".html",
					text: g_zones[d.z]
				};
				if (d.t && a == 5) {
					b.pretext = LANG.lvitem_vendorin
				}
				if (d.dd) {
					if (d.dd == 1) {
						b.posttext = LANG.lvitem_normal
					} else {
						if (d.dd == 2) {
							b.posttext = LANG.lvitem_heroic
						}
					}
				}
				return b
			}
			break;
		case 5:
			return {
				url:
				"http://www.topwow.top/quests-" + d.c2 + "." + d.c +".html",
				text: Listview.funcBox.getQuestCategory(d.c)
			};
			break;
		case 6:
			if (d.c && d.s) {
				return {
					url: "http://www.topwow.top/spells-" + d.c + "." + d.s +".html",
					text: g_spell_skills[d.s]
				}
			} else {
				return {
					url: "http://www.topwow.top/spells-0.html",
					text: "??"
				}
			}
			break
		}
	}
};
Listview.templates = {
	faction: {
		sort: [1],
		nItemsPerPage: -1,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (d, e) {
				var b = createElem("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(d);
				append(b, ct(d.name));
				if (d.expansion) {
					var c = createElem("span");
					c.className = (d.expansion == 1 ? "bc-icon": "wotlk-icon");
					append(c, b);
					append(e, c)
				} else {
					append(e, b)
				}
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.expansion == 1) {
					b += " bc"
				} else {
					if (a.expansion == 2) {
						b += "wotlk wrath"
					}
				}
				return b
			}
		},
		{
			id: "side",
			name: LANG.side,
			type: "text",
			width: "10%",
			compute: function (b, c) {
				if (b.side) {
					var a = createElem("span");
					a.className = (b.side == 1 ? "alliance-icon": "horde-icon");
					append(a, ct(g_sides[b.side]));
					append(c, a)
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "16%",
			compute: function (d, e) {
				if (d.category2 != null) {
					e.className = "small q1";
					var b = createElem("a"),
					c = "http://www.topwow.top/factions-" + d.category2 +".html";
					if (d.category) {
						c += "." + d.category
					}
					b.href = c;
					append(b, ct(Listview.funcBox.getFactionCategory(d.category, d.category2)));
					append(e, b)
				}
			},
			getVisibleText: function (a) {
				return Listview.funcBox.getFactionCategory(a.category, a.category2)
			},
			sortFunc: function (d, c, f) {
				var e = Listview.funcBox.getFactionCategory;
				return strcmp(e(d.category, d.category2), e(c.category, c.category2))
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/faction-" + a.id +".html"
		}
	},
	item: {
		sort: [1],
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			span: 2,
			value: "name",
			compute: function (m, c, k) {
				var f = createElem("td");
				f.style.width = "1px";
				f.style.padding = "0";
				f.style.borderRight = "none";
				var g = null,
				n = null;
				if (m.stack != null) {
					g = Listview.funcBox.createTextRange(m.stack[0], m.stack[1])
				}
				if (m.avail != null) {
					n = m.avail
				}
				append(f, g_items.createIcon(m.id, (this.iconSize == null ? 1 : this.iconSize), g, n));
				append(k, f);
				c.style.borderLeft = "none";
				var l = createElem("a");
				l.className = "q" + (7 - parseInt(m.name.charAt(0)));
				l.style.fontFamily = "Verdana, sans-serif";
				l.href = this.template.getItemLink(m);
				if (m.rel) {
					Icon.getLink(f.firstChild).rel = m.rel;
					l.rel = m.rel
				}
				append(l, ct(m.name.substring(1)));
				append(c, l);
				if (typeof fi_nExtraCols == "number" && fi_nExtraCols >= 5) {
					if (m.source != null && m.source.length == 1) {
						var h = createElem("div");
						h.className = "small2";
						var b = (m.sourcemore ? m.sourcemore[0] : {});
						var j = 0;
						if (b.t) {
							j = b.t;
							var l = createElem("a");
							if (b.q != null) {
								l.className = "q" + b.q
							} else {
								l.className = "q1"
							}
							l.href = "http://www.topwow.top/" + g_types[b.t] + "-" + b.ti + ".html";
							if (b.n.length <= 30) {
								append(l, ct(b.n))
							} else {
								l.title = b.n;
								append(l, ct(trim(b.n.substr(0, 27)) + "..."))
							}
							append(h, l)
						} else {
							append(h, ct(Listview.funcBox.getUpperSource(m.source[0], b)))
						}
						var e = Listview.funcBox.getLowerSource(m.source[0], b, j);
						if (e != null) {
							append(h, ct(LANG.hyphen));
							if (e.pretext) {
								append(h, ct(e.pretext))
							}
							if (e.url) {
								var l = createElem("a");
								l.className = "q1";
								l.href = e.url;
								append(l, ct(e.text));
								append(h, l)
							} else {
								append(h, ct(e.text))
							}
							if (e.posttext) {
								append(h, ct(e.posttext))
							}
						}
						append(c, h)
					}
				}
			},
			getVisibleText: function (c) {
				var e = c.name.substring(1);
				if (typeof fi_nExtraCols == "number" && fi_nExtraCols >= 5) {
					if (c.source != null && c.source.length == 1) {
						var d = (c.sourcemore ? c.sourcemore[0] : {});
						var b = 0;
						if (d.t) {
							b = d.t;
							e += " " + d.n
						} else {
							e += " " + Listview.funcBox.getUpperSource(c.source[0], d)
						}
						var a = Listview.funcBox.getLowerSource(c.source[0], d, b);
						if (a != null) {
							if (a.pretext) {
								e += " " + a.pretext
							}
							e += " " + a.text;
							if (a.posttext) {
								e += " " + a.posttext
							}
						}
					}
				}
				return e
			}
		},
		{
			id: "level",
			name: LANG.lvitem_level,
			value: "level"
		},
		{
			id: "reqlevel",
			name: LANG.lvitem_reqlevel,
			tooltip: LANG.tooltip_reqlevel,
			value: "reqlevel",
			compute: function (a, b) {
				if (a.reqlevel > 1) {
					return a.reqlevel
				}
			}
		},
		{
			id: "dps",
			name: LANG.dps,
			value: "dps",
			compute: function (a, b) {
				return (a.dps || 0).toFixed(1)
			},
			hidden: true
		},
		{
			id: "speed",
			name: LANG.speed,
			value: "speed",
			compute: function (a, b) {
				return (a.speed || 0).toFixed(2)
			},
			hidden: true
		},
		{
			id: "armor",
			name: LANG.armor,
			value: "armor",
			compute: function (a, b) {
				if (a.armor > 0) {
					return a.armor
				}
			},
			hidden: true
		},
		{
			id: "slot",
			name: LANG.slot,
			type: "text",
			compute: function (a, b) {
				nw(b);
				return g_item_slots[a.slot]
			},
			getVisibleText: function (a) {
				return g_item_slots[a.slot]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_item_slots[d.slot], g_item_slots[c.slot])
			},
			hidden: true
		},
		{
			id: "slots",
			name: LANG.slots,
			value: "nslots",
			hidden: true
		},
		{
			id: "skill",
			name: LANG.skill,
			value: "skill",
			hidden: true
		},
		{
			id: "glyph",
			name: LANG.glyphtype,
			type: "text",
			value: "glyph",
			compute: function (a, b) {
				if (a.glyph) {
					return g_item_glyphs[a.glyph]
				}
			},
			getVisibleText: function (a) {
				return g_item_glyphs[a.glyph]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_item_glyphs[d.glyph], g_item_glyphs[c.glyph])
			},
			hidden: true
		},
		{
			id: "source",
			name: LANG.source,
			type: "text",
			compute: function (k, d) {
				if (this.iconSize == 0) {
					d.className = "small"
				}
				if (k.source != null) {
					if (k.source.length == 1) {
						nw(d);
						var c = (k.sourcemore ? k.sourcemore[0] : {});
						var h = 0;
						if (c.t) {
							h = c.t;
							var j = createElem("a");
							if (c.q != null) {
								j.className = "q" + c.q
							} else {
								j.className = "q1"
							}
							j.href = "http://www.topwow.top/" + g_types[c.t] + "-" + c.ti + ".html";
							if (this.iconSize == 0 || c.n.length <= 20) {
								append(j, ct(c.n))
							} else {
								j.title = c.n;
								append(j, ct(trim(c.n.substr(0, 17)) + "..."))
							}
							append(d, j)
						} else {
							append(d, ct(Listview.funcBox.getUpperSourcreateElem(k.source[0], c)))
						}
						var f = Listview.funcBox.getLowerSourcreateElem(k.source[0], c, h);
						if (this.iconSize != 0 && f != null) {
							var b = createElem("div");
							b.className = "small2";
							if (f.pretext) {
								append(b, ct(f.pretext))
							}
							if (f.url) {
								var j = creatElem("a");
								j.className = "q1";
								j.href = f.url;
								append(j, ct(f.text));
								append(b, j)
							} else {
								append(b, ct(f.text))
							}
							if (f.posttext) {
								append(b, ct(f.posttext))
							}
							append(d, b)
						}
					} else {
						var l = "";
						for (var e = 0, g = k.source.length; e < g; ++e) {
							if (e > 0) {
								l += LANG.comma
							}
							l += g_sources[k.source[e]]
						}
						return l
					}
				}
			},
			getVisibleText: function (c) {
				if (c.source != null) {
					if (c.source.length == 1) {
						var e = "";
						var d = (c.sourcemore ? c.sourcemore[0] : {});
						var b = 0;
						if (d.t) {
							b = d.t;
							e += " " + d.n
						} else {
							e += " " + Listview.funcBox.getUpperSource(c.source[0], d)
						}
						var a = Listview.funcBox.getLowerSource(c.source[0], d, b);
						if (a != null) {
							if (a.pretext) {
								e += " " + a.pretext
							}
							e += " " + a.text;
							if (a.posttext) {
								e += " " + a.posttext
							}
						}
						return e
					} else {
						return Listview.funcBox.arrayText(c.source, g_sources)
					}
				}
			},
			sortFunc: function (f, d) {
				var g = Listview.funcBox.assocArrCmp(f.source, d.source, g_sources);
				if (g != 0) {
					return g
				}
				var e = (f.sourcemore && f.source.length == 1 ? f.sourcemore[0].n: null),
				c = (d.sourcemore && d.source.length == 1 ? d.sourcemore[0].n: null);
				return strcmp(e, c)
			}
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			compute: function (d, e) {
				e.className = "small q1";
				nw(e);
				var b = creatElem("a");
				var c = Listview.funcBox.getItemType(d.classs, d.subclass, d.subsubclass);
				b.href = c.url;
				append(b, ct(c.text));
				append(e, b)
			},
			getVisibleText: function (a) {
				return Listview.funcBox.getItemType(a.classs, a.subclass, a.subsubclass).text
			},
			sortFunc: function (d, c, f) {
				var e = Listview.funcBox.getItemType;
				return strcmp(e(d.classs, d.subclass, d.subsubclass).text, e(c.classs, c.subclass, c.subsubclass).text)
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/item-" + a.id + ".html"
		},
		onBeforeCreate: function () {
			var b = false;
			for (var c = 0, a = this.data.length; c < a; ++c) {
				var d = this.data[c];
				if (d.slot > 0 && d.slot != 18) {++b
				} else {
					d.__nochk = 1
				}
			}
			if (b > 0) {
				this.mode = 1;
				this._nComparable = b
			}
		},
		createCbControls: function (d, c) {
			if (!c && this._nComparable < 15) {
				return
			}
			var b = creatElem("input"),
			a = creatElem("input");
			b.type = a.type = "button";
			b.value = LANG.button_compare;
			a.value = LANG.button_deselect;
			b.onclick = this.template.compareItems.bind(this);
			a.onclick = Listview.cbSelect.bind(this, false);
			append(d, b);
			append(d, a)
		},
		compareItems: function () {
			var b = this.getCheckedRows();
			if (!b.length) {
				return
			}
			var a = "";
			array_walk(b, function (c) {
				a += c.id + ";"
			});
			su_addToSaved(rtrim(a, ";"))
		}
	},
	event_ai: {
		sort: [],
		searchable: 0,
		filtrable: 0,
		columns: [{
			id: "comment",
			name: TCOLS.comment,
			align: "left",
			type: "text",
			value: "comment"
		},{
			id: "condition_id",
			name: 'condition_id',
			align: "left",
			value: "condition_id"
		},{
			id: "event_type",
			name: TCOLS.event_type,
			align: "left",
			type: "text",
			value: "event_type"
		},{
			id: "event_chance",
			name: TCOLS.event_chance,
			align: "left",
			value: "event_chance"
		},{
			id: "action_comment",
			name: TCOLS.action_comment,
			align: "left",
			value: "action_comment"
		}
		]
	},
	itemset: {
		sort: [1],
		nItemsPerPage: 75,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, f) {
				var b = creatElem("a");
				b.className = "q" + (7 - parseInt(c.name.charAt(0)));
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				append(b, ct(c.name.substring(1)));
				append(f, b);
				if (c.note) {
					var e = creatElem("div");
					e.className = "small";
					append(e, ct(g_itemset_notes[c.note]));
					append(f, e)
				}
			},
			getVisibleText: function (a) {
				var b = a.name.substring(1);
				if (a.note) {
					b += " " + g_itemset_notes[a.note]
				}
				return b
			}
		},
		{
			id: "level",
			name: LANG.lvitem_level,
			type: "range",
			getMinValue: function (a) {
				return a.level_min
			},
			getMaxValue: function (a) {
				return a.level_max
			},
			compute: function (a, b) {
				if (a.level_min > 0 && a.level_max > 0) {
					if (a.level_min != a.level_max) {
						return a.level_min + LANG.hyphen + a.level_max
					} else {
						return a.level_min
					}
				} else {
					return - 1
				}
			},
			sortFunc: function (d, c, e) {
				if (e > 0) {
					return strcmp(d.level_min, c.level_min) || strcmp(d.level_max, c.level_max)
				} else {
					return strcmp(d.level_max, c.level_max) || strcmp(d.level_min, c.level_min)
				}
			}
		},
		{
			id: "pieces",
			name: LANG.pieces,
			getValue: function (a) {
				return a.pieces.length
			},
			compute: function (a, b) {
				b.style.padding = "0";
				Listview.funcBox.createCenteredIcons(a.pieces, b)
			},
			sortFunc: function (d, c) {
				var f = (d.pieces != null ? d.pieces.length: 0);
				var e = (c.pieces != null ? c.pieces.length: 0);
				return strcmp(f, e)
			}
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			compute: function (a, b) {
				return g_itemset_types[a.type]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_itemset_types[d.type], g_itemset_types[c.type])
			}
		},
		{
			id: "tname",
			name: LANG.tname,
			type: "text",
			compute: function (a, b) {
				return a.tname;
			},
			sortFunc: function (d, c, e) {
				return strcmp(d.tname, c.tname)
			}
		},
		{
			id: "tclass",
			name: LANG.tclass,
			type: "text",
			compute: function (a, b) {
				return g_chr_classes[a.tclass];
			},
			sortFunc: function (d, c, e) {
				return strcmp(d.tclass, c.tclass)
			}
		},
		{
			id: "classes",
			name: LANG.classes,
			type: "text",
			compute: function (c, e) {
				if (c.classes != null) {
					var d = "";
					for (var b = 0, a = c.classes.length; b < a; ++b) {
						if (b > 0) {
							d += LANG.comma
						}
						d += g_chr_classes[c.classes[b]]
					}
					return d
				}
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(d.classes, c.classes, g_chr_classes)
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/itemset-" + a.id + ".html"
		}
	},
	npc: {
		sort: [1],
		nItemsPerPage: 100,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, f) {
				var b = creatElem("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				append(b, ct(c.name));
				append(f, b);
				if (c.tag != null) {
					var e = creatElem("div");
					e.className = "small";
					append(e, ct("<" + c.tag + ">"));
					append(f, e)
				}
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.tag) {
					b += " <" + a.tag + ">"
				}
				return b
			}
		},
		{
			id: "level",
			name: LANG.level,
			type: "range",
			width: "10%",
			getMinValue: function (a) {
				return a.level_min
			},
			getMaxValue: function (a) {
				return a.level_max
			},
			compute: function (a, c) {
				if (a.classification) {
					var b = creatElem("div");
					b.className = "small";
					append(b, ct(g_npc_classifications[a.classification]));
					append(c, b)
				}
				if (a.classification == 3) {
					return "??"
				}
				if (a.level_min > 0 && a.level_max > 0) {
					if (a.level_min != a.level_max) {
						return a.level_min + LANG.hyphen + a.level_max
					} else {
						return a.level_min
					}
				}
				return - 1
			},
			getVisibleText: function (a) {
				var b = "";
				if (a.classification) {
					b += " " + g_npc_classifications[a.classification]
				}
				if (a.level_min > 0 && a.level_max > 0) {
					b += " ";
					if (a.level_min != a.level_max) {
						b += a.level_min + LANG.hyphen + a.level_max
					} else {
						b += a.level_min
					}
				}
				return b
			},
			sortFunc: function (d, c, e) {
				if (e > 0) {
					return strcmp(d.level_min, c.level_min) || strcmp(d.level_max, c.level_max) || strcmp(d.classification, c.classification)
				} else {
					return strcmp(d.level_max, c.level_max) || strcmp(d.level_min, c.level_min) || strcmp(d.classification, c.classification)
				}
			}
		},
		{
			id: "location",
			name: LANG.location,
			type: "text",
			compute: function (a, b) {
				return Listview.funcBox.location(a, b)
			},
			getVisibleText: function (a) {
				return Listview.funcBox.arrayText(a.location, g_zones)
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(d.location, c.location, g_zones)
			}
		},
		{
			id: "react",
			name: LANG.react,
			type: "text",
			width: "10%",
			value: "react",
			filtrable: 0,
			compute: function (b, g) {
				if (b.react == null) {
					return - 1
				}
				var d = [LANG.lvnpc_alliance, LANG.lvnpc_horde];
				var f = 0;
				for (var a = 0; a < 2; ++a) {
					if (b.react[a] != null) {
						if (f++>0) {
							append(g, ct(" "))
						}
						var e = creatElem("span");
						e.className = (b.react[a] < 0 ? "q10": (b.react[a] > 0 ? "q2": "q"));
						append(e, ct(d[a]));
						append(g, e)
					}
				}
			}
		},
		{
			id: "skin",
			name: LANG.skin,
			type: "text",
			value: "skin",
			compute: function (c, d) {
				if (c.skin) {
					var b = creatElem("a");
					b.className = "q1";
					b.href = "?npcs&filter=cr=35;crs=0;crv=" + c.skin;
					append(b, ct(c.skin));
					append(d, b)
				}
			},
			hidden: 1
		},
		{
			id: "petfamily",
			name: LANG.petfamily,
			type: "text",
			width: "12%",
			compute: function (c, d) {
				d.className = "q1";
				var b = creatElem("a");
				b.href = "?pet=" + c.family;
				append(b, ct(g_pet_families[c.family]));
				append(d, b)
			},
			getVisibleText: function (a) {
				return g_pet_families[a.family]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_pet_families[d.family], g_pet_families[c.family])
			},
			hidden: 1
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			width: "12%",
			compute: function (c, d) {
				d.className = "small q1";
				var b = creatElem("a");
				b.href = "http://www.topwow.top/npcs-" + c.type +".html";
				append(b, ct(g_npc_types[c.type]));
				append(d, b)
			},
			getVisibleText: function (a) {
				return g_npc_types[a.type]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_npc_types[d.type], g_npc_types[c.type])
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/npc-" + a.id + ".html"
		}
	},
	object: {
		sort: [1],
		nItemsPerPage: 100,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, d) {
				var b = creatElem("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				append(b, ct(c.name));
				append(d, b)
			}
		},
		{
			id: "location",
			name: LANG.location,
			type: "text",
			compute: function (a, b) {
				return Listview.funcBox.location(a, b)
			},
			getVisibleText: function (a) {
				return Listview.funcBox.arrayText(a.location, g_zones)
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(d.location, c.location, g_zones)
			}
		},
		{
			id: "skill",
			name: LANG.skill,
			width: "10%",
			value: "skill",
			hidden: true
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			width: "12%",
			compute: function (c, d) {
				d.className = "small q1";
				var b = creatElem("a");
				b.href = "http://www.topwow.top/objects-" + c.type +".html";
				append(b, ct(getGoType(c.type)));
				append(d, b)
			},
			getVisibleText: function (a) {
				return getGoType(a.type);
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_object_types[d.type], g_object_types[c.type])
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/object-" + a.id +".html"
		}
	},
	quest: {
		sort: [1, 2],
		nItemsPerPage: 100,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, d) {
				var b = creatElem("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				append(b, ct(c.name));
				append(d, b)
			}
		},
		{
			id: "level",
			name: LANG.level,
			width: "7%",
			value: "level",
			compute: function (a, c) {
				if (a.type || a.daily) {
					var b = creatElem("div");
					b.className = "small";
					nw(b);
					if (a.type && a.daily) {
						append(b, ct(sprintf(LANG.lvquest_daily, g_quest_types[a.type])))
					} else {
						if (a.daily) {
							append(b, ct(LANG.daily))
						} else {
							if (a.type) {
								append(b, ct(g_quest_types[a.type]))
							}
						}
					}
					append(c, b)
				}
				return a.level
			},
			getVisibleText: function (a) {
				var b = "";
				if (a.type) {
					b += " " + g_quest_types[a.type]
				}
				if (a.daily) {
					b += " " + LANG.daily
				}
				if (a.level) {
					b += " " + a.level
				}
				return b
			},
			sortFunc: function (d, c, e) {
				return strcmp(d.level, c.level) || strcmp(d.type, c.type)
			}
		},
		{
			id: "reqlevel",
			name: LANG.lvitem_reqlevel,
			tooltip: LANG.tooltip_reqlevel,
			width: "7%",
			value: "reqlevel"
		},
		{
			id: "side",
			name: LANG.side,
			type: "text",
			width: "10%",
			compute: function (a, c) {
				if (a.side) {
					var b = creatElem("span");
					if (a.side == 1) {
						b.className = "alliance-icon"
					} else {
						if (a.side == 2) {
							b.className = "horde-icon"
						}
					}
					append(b, ct(g_sides[a.side]));
					append(c, b)
				} else {
					return - 1
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "rewards",
			name: LANG.rewards,
			filtrable: 0,
			width: "25%",
			compute: function (b, g) {
				var a = (b.itemchoices != null || b.itemrewards != null);
				if (a) {
					g.style.padding = "0";
					var f, e;
					if (b.itemchoices && b.itemchoices.length > 1) {
						f = LANG.lvquest_pickone;
						if (b.itemrewards && b.itemrewards.length > 0) {
							e = LANG.lvquest_alsoget
						}
					}
					Listview.funcBox.createCenteredIcons(b.itemchoices, g, f);
					Listview.funcBox.createCenteredIcons(b.itemrewards, g, e)
				}
				if (b.xp > 0 || b.money > 0) {
					var c = creatElem("div");
					if (a) {
						c.style.padding = "4px"
					}
					if (b.xp > 0) {
						append(c, ct(sprintf(LANG.lvquest_xp, b.xp) + (b.money > 0 ? " + ": "")))
					}
					if (b.money > 0) {
						Listview.funcBox.appendMoney(c, b.money)
					}
					append(g, c)
				}
			},
			getVisibleText: function (a) {
				var b = "";
				if (a.itemchoices && a.itemchoices.length) {
					b += " " + LANG.lvquest_pickone;
					if (a.itemrewards && a.itemrewards.length) {
						b += " " + LANG.lvquest_alsoget
					}
				}
				if (a.xp > 0) {
					b += " " + sprintf(LANG.lvquest_xp, a.xp)
				}
				return b
			},
			sortFunc: function (d, c, e) {
				var g = (d.itemchoices != null ? d.itemchoices.length: 0) + (d.itemrewards != null ? d.itemrewards.length: 0);
				var f = (c.itemchoices != null ? c.itemchoices.length: 0) + (c.itemrewards != null ? c.itemrewards.length: 0);
				return strcmp(g, f) || strcmp((d.xp | 0) + (d.money | 0), (c.xp | 0) + (c.money | 0))
			}
		},
		{
			id: "reputation",
			name: LANG.reputation,
			width: "14%",
			value: "id",
			hidden: true
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "16%",
			compute: function (c, d) {
				if (c.category != 0) {
					d.className = "small q1";
					var b = creatElem("a");
					b.href = "http://www.topwow.top/quests-" + c.category2 + "." + c.category + ".html";
					append(b, ct(Listview.funcBox.getQuestCategory(c.category)));
					append(d, b)
				}
			},
			getVisibleText: function (a) {
				return Listview.funcBox.getQuestCategory(a.category)
			},
			sortFunc: function (d, c, f) {
				var e = Listview.funcBox.getQuestCategory;
				return strcmp(e(d.category), e(c.category))
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/quest-" + a.id + ".html"
		}
	},
	spell: {
		sort: [1, 2],
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			span: 2,
			value: "name",
			compute: function (g, e, k) {
				var f = creatElem("td"),
				o;
				f.style.width = "44px";
				f.style.padding = "0";
				f.style.borderRight = "none";
				if (g.creates != null) {
					o = g_items.createIcon(g.creates[0], 1, Listview.funcBox.createTextRange(g.creates[1], g.creates[2]))
				} else {
					o = g_spells.createIcon(g.id, 1)
				}
				o.style.cssFloat = o.style.styleFloat = "left";
				append(f, o);
				append(k, f);
				e.style.borderLeft = "none";
				var b = creatElem("div");
				var n = creatElem("a");
				var l = g.name.charAt(0);
				if (l != "@") {
					n.className = "q" + (7 - parseInt(l))
				}
				n.style.fontFamily = "Verdana, sans-serif";
				n.href = this.template.getItemLink(g);
				append(n, ct(g.name.substring(1)));
				append(b, n);
				if (g.rank) {
					var j = creatElem("div");
					j.className = "small2";
					append(j, ct(g.rank));
					append(b, j)
				}
				if (g.races != null) {
					b.style.position = "relative";
					var j = creatElem("div");
					j.className = "small";
					j.style.fontStyle = "italic";
					j.style.position = "absolute";
					j.style.right = j.style.bottom = "3px";
					var m = g.races.toString();
					if (m == "1,3,4,7,11") {
						append(j, ct(g_sides[1]))
					} else {
						if (m == "2,5,6,8,10") {
							append(j, ct(g_sides[2]))
						} else {
							for (var f = 0, h = g.races.length; f < h; ++f) {
								if (f > 0) {
									append(j, ct(LANG.comma))
								}
								append(j, ct(g_chr_races[g.races[f]]))
							}
						}
					}
					append(b, j)
				}
				append(e, b)
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.rank) {
					b += " " + a.rank
				}
				if (a.races) {
					b += " " + Listview.funcBox.arrayText(a.races, g_chr_races)
				}
				return b
			}
		},
		{
			id: "level",
			name: LANG.level,
			width: "10%",
			value: "level",
			compute: function (a, b) {
				if (a.level > 0) {
					return a.level
				}
			},
			hidden: true
		},
		{
			id: "school",
			name: LANG.school,
			type: "text",
			width: "10%",
			hidden: true,
			compute: function (a, b) {
				return g_spell_resistances[a.school]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_spell_resistances[d.school], g_spell_resistances[c.school])
			}
		},
		{
			id: "reagents",
			name: LANG.reagents,
			align: "left",
			width: "9%",
			getValue: function (a) {
				return (a.reagents ? a.reagents.length: 0)
			},
			compute: function (g, c) {
				var a = (g.reagents != null);
				if (a) {
					c.style.padding = "0";
					var k = creatElem("div");
					var j = g.reagents;
					k.style.width = (44 * j.length) + "px";
					for (var e = 0, h = j.length; e < h; ++e) {
						var b = j[e][0];
						var f = j[e][1];
						var l = g_items.createIcon(b, 1, f);
						l.style.cssFloat = l.style.styleFloat = "left";
						append(k, l)
					}
					append(c, k)
				}
			},
			sortFunc: function (d, c) {
				var f = (d.reagents != null ? d.reagents.length: 0);
				var e = (c.reagents != null ? c.reagents.length: 0);
				if (f > 0 && f == e) {
					return strcmp(d.reagents.toString(), c.reagents.toString())
				} else {
					return strcmp(f, e)
				}
			}
		},
		{
			id: "tp",
			name: LANG.tp,
			tooltip: LANG.tooltip_trainingpoints,
			width: "7%",
			hidden: true,
			value: "tp",
			compute: function (a, b) {
				if (a.tp > 0) {
					return a.tp
				}
			}
		},
		{
			id: "source",
			name: LANG.source,
			type: "text",
			width: "12%",
			hidden: true,
			compute: function (b, e) {
				if (b.source != null) {
					var d = "";
					for (var c = 0, a = b.source.length; c < a; ++c) {
						if (c > 0) {
							d += LANG.comma
						}
						d += g_sources[b.source[c]]
					}
					return d
				}
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(d.source, c.source, g_sources)
			}
		},
		{
			id: "skill",
			name: LANG.skill,
			type: "text",
			width: "16%",
			getValue: function (a) {
				return a.learnedat
			},
			compute: function (f, d, j, n) {
				if (f.skill != null) {
					var b = creatElem("div");
					b.className = "small";
					for (var e = 0, g = f.skill.length; e < g; ++e) {
						if (e > 0) {
							append(b, ct(LANG.comma))
						}
						if (f.skill[e] == -1) {
							append(b, ct(LANG.ellipsis))
						} else {
							if (in_array([7, -2, -3, -5, -6, -7, 11, 9], f.cat) != -1) {
								var l = creatElem("a");
								l.className = "q1";
								if (in_array([ - 5, -6, -7], f.cat) != -1) {
									l.href = "?spells=" + f.cat
								} else {
									l.href = "?spells=" + f.cat + "." + (f.chrclass ? f.chrclass + ".": "") + f.skill[e]
								}
								append(l, ct(g_spell_skills[f.skill[e]]));
								append(b, l)
							} else {
								append(b, ct(g_spell_skills[f.skill[e]]))
							}
						}
					}
					if (f.learnedat > 0) {
						append(b, ct(" ("));
						var c = creatElem("span");
						if (f.learnedat == 9999) {
							c.className = "q0";
							append(c, ct("??"))
						} else {
							if (f.learnedat > 0) {
								append(c, ct(f.learnedat));
								c.style.fontWeight = "bold"
							}
						}
						append(b, c);
						append(b, ct(")"))
					}
					append(d, b);
					if (f.colors != null) {
						this.template.columns[n].type = null;
						var h = f.colors,
						m = 0;
						for (var e = 0; e < h.length; ++e) {
							if (h[e] > 0) {++m;
								break
							}
						}
						if (m > 0) {
							m = 0;
							b = creatElem("div");
							b.className = "small";
							b.style.fontWeight = "bold";
							for (var e = 0; e < h.length; ++e) {
								if (h[e] > 0) {
									if (m++>0) {
										append(b, ct(" "))
									}
									var k = creatElem("span");
									k.className = "r" + (e + 1);
									append(k, ct(h[e]));
									append(b, k)
								}
							}
							append(d, b)
						}
					}
				}
			},
			getVisibleText: function (a) {
				var b = Listview.funcBox.arrayText(a.skill, g_spell_skills);
				if (a.learnedat > 0) {
					b += " " + (a.learnedat == 9999 ? "??": a.learnedat)
				}
				return b
			},
			sortFunc: function (d, c) {
				var f = strcmp(d.learnedat, c.learnedat);
				if (f != 0) {
					return f
				}
				if (d.colors != null && c.colors != null) {
					for (var e = 0; e < 4; ++e) {
						f = strcmp(d.colors[e], c.colors[e]);
						if (f != 0) {
							return f
						}
					}
				}
				return Listview.funcBox.assocArrCmp(d.skill, c.skill, g_spell_skills)
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/spell-" + a.id + ".html"
		}
	},
	zone: {
		sort: [1],
		nItemsPerPage: -1,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, e) {
				var b = creatElem("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				append(b, ct(c.name));
				if (c.expansion) {
					var d = creatElem("span");
					d.className = (c.expansion == 1 ? "bc-icon": "wotlk-icon");
					append(d, b);
					append(e, d)
				} else {
					append(e, b)
				}
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.expansion == 1) {
					b += " bc"
				} else {
					if (a.expansion == 2) {
						b += "wotlk wrath"
					}
				}
				return b
			}
		},
		{
			id: "instance",
			name: LANG.instancetype,
			type: "text",
			getValue: function(a){
				return a.instance? g_zone_instancetypes[a.instance] : '';
			}
		},
		],
		getItemLink: function (a) {
			return "http://www.topwow.top/zone-" + a.id +".html"
		}
	},
	comment: {
		sort: [1],
		mode: 2,
		nItemsPerPage: 40,
		poundable: 2,
		columns: [{
			value: "number"
		},
		{
			value: "id"
		},
		{
			value: "rating"
		}],
		compute: function (t, H) {
			var L, s = new Date(t.date),
			F = (g_serverTime - s) / 1000,
			d = (g_user.roles & 26) != 0,
			I = t.rating < 0 || t.purged || t.deleted,
			C = d || t.user.toLowerCase() == g_user.name.toLowerCase(),
			v = C && t.deleted == 0,
			c = C && t.replyTo != t.id,
			J = ((t.roles & 190) == 0),
			D = t.purged == 0 && t.deleted == 0 && g_user.id && t.user.toLowerCase() != g_user.name.toLowerCase() && in_array(t.raters, g_user.id, function (M) {
				return M[0]
			}) == -1,
			i = t.rating >= 0 && (g_user.id == 0 || D);
			t.ratable = D;
			H.className = "comment";
			if (t.indent) {
				H.className += " comment-indent"
			}
			var w = creatElem("div");
			var m = creatElem("div");
			var k = creatElem("div");
			t.divHeader = w;
			t.divBody = m;
			t.divLinks = k;
			w.className = (I ? "comment-header-bt": "comment-header");
			var g = creatElem("div");
			g.className = "comment-rating";
			if (I) {
				var p = creatElem("a");
				p.href = "javascript:;";
				p.onclick = Listview.funcBox.coToggleVis.bind(p, t);
				append(p, ct(LANG.lvcomment_show));
				append(g, p);
				append(g, ct(" " + String.fromCharCode(160) + " "))
			}
			var n = creatElem("b");
			append(n, ct(LANG.lvcomment_rating));
			var q = creatElem("span");
			append(q, ct((t.rating > 0 ? "+": "") + t.rating));
			append(n, q);
			append(g, n);
			append(g, ct(" "));
			var B = creatElem("span");
			var j = creatElem("a"),
			K = creatElem("a");
			if (D) {
				j.href = K.href = "javascript:;";
				j.onclick = Listview.funcBox.coRate.bind(j, t, 1);
				K.onclick = Listview.funcBox.coRate.bind(K, t, -1);
				if (d) {
					var A = creatElem("a");
					A.href = "javascript:;";
					A.onclick = Listview.funcBox.coRate.bind(A, t, 0);
					A.onmouseover = Listview.funcBox.coCustomRatingOver;
					A.onmousemove = Tooltip.cursorUpdate;
					A.onmouseout = Tooltip.hide;
					append(A, ct("[~]"));
					append(B, A);
					append(B, ct(" "))
				}
			} else {
				j.href = K.href = "?account=signin"
			}
			append(j, ct("[+]"));
			j.onmouseover = Listview.funcBox.coPlusRatingOver;
			K.onmouseover = Listview.funcBox.coMinusRatingOver;
			j.onmousemove = K.onmousemove = Tooltip.cursorUpdate;
			j.onmouseout = K.onmouseout = Tooltip.hide;
			append(K, ct("[-]"));
			append(B, K);
			append(B, ct(" "));
			append(B, j);
			append(g, B);
			if (!i) {
				B.style.display = "none"
			}
			append(w, g);
			append(w, ct(LANG.lvcomment_by));
			var G = creatElem("a");
			G.href = "?user=" + t.user;
			append(G, ct(t.user));
			append(w, G);
			append(w, ct(" "));
			var a = creatElem("a");
			a.className = "q0";
			a.id = "comments:id=" + t.id;
			a.href = "#" + a.id;
			Listview.funcBox.coFormatDate(a, F, s);
			a.style.cursor = "pointer";
			append(w, a);
			append(w, ct(LANG.lvcomment_patch1 + g_getPatchVersion(s) + LANG.lvcomment_patch2));
			append(H, w);
			m.className = "comment-body" + Listview.funcBox.coGetColor(t);
			if (t.indent) {
				m.className += " comment-body-indent"
			}
			m.innerHTML = Markup.toHtml(t.body, {
				mode: Markup.MODE_COMMENT,
				roles: t.roles
			});
			append(H, m);
			if ((t.roles & 26) == 0 || g_user.roles & 26) {
				var E = creatElem("div");
				t.divLastEdit = E;
				E.className = "comment-lastedit";
				append(E, ct(LANG.lvcomment_lastedit));
				var o = creatElem("a");
				append(o, ct(" "));
				append(E, o);
				append(E, ct(" "));
				var z = creatElem("span");
				append(E, z);
				append(E, ct(" "));
				Listview.funcBox.coUpdateLastEdit(t);
				if (I) {
					E.style.display = "none"
				}
				append(H, E)
			}
			k.className = "comment-links";
			if (C) {
				var b = creatElem("span");
				var y = creatElem("a");
				append(y, ct(LANG.lvcomment_edit));
				y.onclick = Listview.funcBox.coEdit.bind(this, t, 0);
				ns(y);
				y.href = "javascript:;";
				append(b, y);
				append(b, ct("|"));
				append(k, b)
			}
			if (v) {
				var l = creatElem("span");
				var r = creatElem("a");
				append(r, ct(LANG.lvcomment_delete));
				r.onclick = Listview.funcBox.coDelete.bind(this, t);
				ns(r);
				r.href = "javascript:;";
				append(l, r);
				append(l, ct("|"));
				append(k, l)
			}
			if (c) {
				var x = creatElem("span");
				var e = creatElem("a");
				append(e, ct(LANG.lvcomment_detach));
				e.onclick = Listview.funcBox.coDetach.bind(this, t);
				ns(e);
				e.href = "javascript:;";
				append(x, e);
				append(x, ct("|"));
				append(k, x)
			}
			if (J) {
				var u = creatElem("span");
				var f = creatElem("a");
				append(f, ct(LANG.lvcomment_report));
				if (g_user.id > 0) {
					f.onclick = Listview.funcBox.coReportClick.bind(f, t, 0);
					f.href = "javascript:;"
				} else {
					f.href = "?account=signin"
				}
				append(u, f);
				append(u, ct("|"));
				append(k, u)
			}
			var h = creatElem("a");
			append(h, ct(LANG.lvcomment_reply));
			if (g_user.id > 0) {
				h.onclick = Listview.funcBox.coReply.bind(this, t);
				h.href = "javascript:;"
			} else {
				h.href = "?account=signin"
			}
			append(k, h);
			if (I) {
				m.style.display = "none";
				k.style.display = "none"
			}
			append(H, k)
		},
		createNote: function (g) {
			var f = creatElem("small");
			var b = creatElem("a");
			if (g_user.id > 0) {
				b.href = "javascript:;";
				b.onclick = co_addYourComment
			} else {
				b.href = "?account=signin"
			}
			append(b, ct(LANG.lvcomment_add));
			append(f, b);
			var e = creatElem("span");
			e.style.padding = "0 5px";
			e.style.color = "white";
			append(e, ct("|"));
			append(f, e);
			append(f, ct(LANG.lvcomment_sort));
			var c = creatElem("a");
			c.href = "javascript:;";
			append(c, ct(LANG.lvcomment_sortdate));
			c.onclick = Listview.funcBox.coSortDate.bind(this, c);
			append(f, c);
			append(f, ct(LANG.comma));
			var d = creatElem("a");
			d.href = "javascript:;";
			append(d, ct(LANG.lvcomment_sortrating));
			d.onclick = Listview.funcBox.coSortHighestRatedFirst.bind(this, d);
			append(f, d);
			c.onclick();
			append(g, f)
		},
		onNoData: function (c) {
			if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
				var a = "<b>" + LANG.lvnodata_co1 + '</b><div class="pad2"></div>';
				if (g_user.id > 0) {
					var b = LANG.lvnodata_co2;
					b = b.replace("<a>", '<a href="javascript:;" onclick="co_addYourComment()" onmousedown="return false">');
					a += b
				} else {
					var b = LANG.lvnodata_co3;
					b = b.replace("<a>", '<a href="?account=signin">');
					b = b.replace("<a>", '<a href="?account=signup">');
					a += b
				}
				c.style.padding = "1.5em 0";
				c.innerHTML = a
			}
		},
		onBeforeCreate: function () {
			if (location.hash && location.hash.match(/:id=([0-9]+)/) != null) {
				var a = in_array(this.data, parseInt(RegExp.$1), function (b) {
					return b.id
				});
				this.rowOffset = this.getRowOffset(a);
				return this.data[a]
			}
		},
		onAfterCreate: function (a) {
			if (a != null) {
				var b = a.__div;
				this.tabs.__st = b;
				b.firstChild.style.border = "1px solid #505050"
			}
		}
	},
	commentpreview: {
		sort: [3],
		nItemsPerPage: 75,
		columns: [{
			id: "subject",
			name: LANG.subject,
			align: "left",
			value: "subject",
			compute: function (f, e) {
				var b = creatElem("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(f);
				append(b, ct(f.subject));
				append(e, b);
				var c = creatElem("div");
				c.className = "small";
				append(c, ct(LANG.types[f.type][0]));
				append(e, c)
			}
		},
		{
			id: "preview",
			name: LANG.preview,
			align: "left",
			width: "50%",
			value: "preview",
			compute: function (j, i) {
				var g = creatElem("div");
				g.className = "crop";
				if (j.rating >= 10) {
					g.className += " comment-green"
				}
				append(g, ct(Markup.removeTags(j.preview, {
					mode: (j.rating != null ? Markup.MODE_COMMENT: Markup.MODE_ARTICLE)
				})));
				append(i, g);
				var e = j.rating != null;
				var f = j.user != null;
				if (e || f) {
					g = creatElem("div");
					g.className = "small3";
					if (f) {
						append(g, ct(LANG.lvcomment_by));
						var b = creatElem("a");
						b.href = "?user=" + j.user;
						append(b, ct(j.user));
						append(g, b);
						if (e) {
							append(g, ct(LANG.hyphen))
						}
					}
					if (e) {
						append(g, ct(LANG.lvcomment_rating + (j.rating > 0 ? "+": "") + j.rating));
						var c = creatElem("span"),
						h = "";
						c.className = "q10";
						if (j.deleted) {
							h = LANG.lvcomment_deleted
						} else {
							if (j.purged) {
								h = LANG.lvcomment_purged
							}
						}
						append(c, ct(h));
						append(g, c)
					}
					append(i, g)
				}
			}
		},
		{
			id: "posted",
			name: LANG.posted,
			width: "16%",
			value: "elapsed",
			compute: function (e, d) {
				var a = new Date(e.date),
				c = (g_serverTime - a) / 1000;
				var b = creatElem("span");
				Listview.funcBox.coFormatDate(b, c, a, 0, 1);
				append(d, b)
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/" + g_types[a.type] + "-" + a.typeId + (a.id != null ? ".html#comments:id=" + a.id: "")
		}
	},
	screenshot: {
		sort: [],
		mode: 3,
		nItemsPerPage: 40,
		nItemsPerRow: 4,
		poundable: 2,
		columns: [],
		compute: function (k, e, l) {
			var u, o = new Date(k.date),
			f = (g_serverTime - o) / 1000;
			e.className = "screenshot-cell";
			e.vAlign = "bottom";
			var q = creatElem("a");
			q.href = "#screenshots:id=" + k.id;
			q.onclick = rf2;
			var v = creatElem("img"),
			t = Math.min(150 / k.width, 150 / k.height);
			v.src = "http://www.topwow.top/screenshots/thumb/" + k.id + ".webp";
			append(q, v);
			append(e, q);
			var p = creatElem("div");
			p.className = "screenshot-cell-user";
			var m = (k.user != null && k.user.length);
			if (m) {
				q = creatElem("a");
				q.href = "?user=" + k.user;
				append(q, ct(k.user));
				append(p, ct(LANG.lvscreenshot_from));
				append(p, q);
				append(p, ct(" "))
			}
			var j = creatElem("span");
			if (m) {
				Listview.funcBox.coFormatDate(j, f, o)
			} else {
				Listview.funcBox.coFormatDate(j, f, o, 0, 1)
			}
			append(p, j);
			append(e, p);
			p = creatElem("div");
			p.style.position = "relative";
			p.style.height = "1em";
			if (g_getLocale(true) != 0 && k.caption) {
				k.caption = ""
			}
			var h = (k.caption != null && k.caption.length);
			var g = (k.subject != null && k.subject.length);
			if (h || g) {
				var r = creatElem("div");
				r.className = "screenshot-caption";
				if (g) {
					var c = creatElem("small");
					append(c, ct(LANG.types[k.type][0] + LANG.colon));
					var b = creatElem("a");
					append(b, ct(k.subject));
					b.href = "http://www.topwow.top/" + g_types[k.type] + "-" + k.typeId +".html";
					append(c, b);
					append(r, c);
					if (h && k.caption.length) {
						append(c, ct(" (...)"))
					}
					append(c, creatElem("br"))
				}
				if (h) {
					aE(e, "mouseover", Listview.funcBox.ssCellOver.bind(r));
					aE(e, "mouseout", Listview.funcBox.ssCellOut.bind(r));
					var n = creatElem("span");
					n.innerHTML = k.caption;
					append(r, n)
				}
				append(p, r)
			}
			aE(e, "click", Listview.funcBox.ssCellClick.bind(this, l));
			append(e, p)
		},
		createNote: function (d) {
			if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
				var c = creatElem("small");
				var b = creatElem("a");
				if (g_user.id > 0) {
					b.href = "javascript:;";
					b.onclick = ss_submitAScreenshot
				} else {
					b.href = "?account=signin"
				}
				append(b, ct(LANG.lvscreenshot_submit));
				append(c, b);
				append(d, c)
			}
		},
		onNoData: function (c) {
			if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
				var a = "<b>" + LANG.lvnodata_ss1 + '</b><div class="pad2"></div>';
				if (g_user.id > 0) {
					var b = LANG.lvnodata_ss2;
					b = b.replace("<a>", '<a href="javascript:;" onclick="ss_submitAScreenshot()" onmousedown="return false">');
					a += b
				} else {
					var b = LANG.lvnodata_ss3;
					b = b.replace("<a>", '<a href="?account=signin">');
					b = b.replace("<a>", '<a href="?account=signup">');
					a += b
				}
				c.style.padding = "1.5em 0";
				c.innerHTML = a
			} else {
				return - 1
			}
		},
		onBeforeCreate: function () {
			if (location.hash && location.hash.match(/:id=([0-9]+)/) != null) {
				var a = in_array(this.data, parseInt(RegExp.$1), function (b) {
					return b.id
				});
				this.rowOffset = this.getRowOffset(a);
				return a
			}
		},
		onAfterCreate: function (a) {
			if (a != null) {
				setTimeout((function () {
					ScreenshotViewer.show({
						screenshots: this.data,
						pos: a
					})
				}).bind(this), 1)
			}
		}
	},
	pet: {
		sort: [1],
		nItemsPerPage: -1,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			span: 2,
			compute: function (b, k, g) {
				var e = creatElem("td");
				e.style.width = "1px";
				e.style.padding = "0";
				e.style.borderRight = "none";
				append(e, Icon.create(b.icon, 0));
				append(g, e);
				k.style.borderLeft = "none";
				var j = creatElem("div");
				var c = creatElem("a");
				c.style.fontFamily = "Verdana, sans-serif";
				c.href = this.template.getItemLink(b);
				append(c, ct(b.name));
				if (b.expansion) {
					var f = creatElem("span");
					f.className = (b.expansion == 1 ? "bc-icon": "wotlk-icon");
					append(f, c);
					append(j, f)
				} else {
					append(j, c)
				}
				if (b.exotic) {
					j.style.position = "relative";
					var h = creatElem("div");
					h.className = "small";
					h.style.fontStyle = "italic";
					h.style.position = "absolute";
					h.style.right = "3px";
					h.style.bottom = "0px";
					append(h, ct(LANG.lvpet_exotic));
					append(j, h)
				}
				append(k, j)
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.expansion == 1) {
					b += " bc"
				} else {
					if (a.expansion == 2) {
						b += "wotlk wrath"
					}
				}
				if (a.exotic) {
					b += " " + LANG.lvpet_exotic
				}
				return b
			}
		},
		{
			id: "level",
			name: LANG.level,
			type: "range",
			getMinValue: function (a) {
				return a.level_min
			},
			getMaxValue: function (a) {
				return a.level_max
			},
			compute: function (a, b) {
				if (a.level_min > 0 && a.level_max > 0) {
					if (a.level_min != a.level_max) {
						return a.level_min + LANG.hyphen + a.level_max
					} else {
						return a.level_min
					}
				} else {
					return - 1
				}
			},
			sortFunc: function (d, c, e) {
				if (e > 0) {
					return strcmp(d.level_min, c.level_min) || strcmp(d.level_max, c.level_max)
				} else {
					return strcmp(d.level_max, c.level_max) || strcmp(d.level_min, c.level_min)
				}
			}
		},
		{
			id: "damage",
			name: LANG.damage,
			value: "damage",
			compute: function (a, b) {
				append(b, this.template.getStatPct(a.damage))
			}
		},
		{
			id: "armor",
			name: LANG.armor,
			value: "armor",
			compute: function (a, b) {
				append(b, this.template.getStatPct(a.armor))
			}
		},
		{
			id: "health",
			name: LANG.health,
			value: "health",
			compute: function (a, b) {
				append(b, this.template.getStatPct(a.health))
			}
		},
		{
			id: "abilities",
			name: LANG.abilities,
			type: "text",
			getValue: function (b) {
				if (!b.spells) {
					return ""
				}
				if (b.spells.length > 0) {
					var d = "";
					for (var c = 0, a = b.spells.length; c < a; ++c) {
						if (b.spells[c]) {
							d += g_spells[b.spells[c]]["name_" + g_locale.name]
						}
					}
					return d
				}
			},
			compute: function (a, b) {
				if (!a.spells) {
					return ""
				}
				if (a.spells.length > 0) {
					b.style.padding = "0";
					Listview.funcBox.createCenteredIcons(a.spells, b, "", 1)
				}
			},
			sortFunc: function (d, c) {
				if (!d.spells || !c.spells) {
					return 0
				}
				return strcmp(d.spellCount, c.spellCount) || strcmp(d.spells, c.spells)
			},
			hidden: true
		},
		{
			id: "petspells",
			name: LANG.petspells,
			type: "text",
			getValue: function (b) {
				if (!b.spells) {
					return ""
				}
				if (b.spells.length > 0) {
					var d = "";
					for (var c = 0, a = b.spells.length; c < a; ++c) {
						if (b.spells[c]) {
							d += g_spells[b.spells[c]]["name_" + g_locale.name]
						}
					}
					return d
				}
			},
			compute: function (a, b) {
				if (!a.spells) {
					return ""
				}
				if (a.spells.length > 0) {
					b.style.padding = "0";
					Listview.funcBox.createCenteredIcons(a.spells, b, "", 1)
				}
			},
			sortFunc: function (d, c) {
				if (!d.spells || !c.spells) {
					return 0
				}
				return strcmp(d.spellCount, c.spellCount) || strcmp(d.spells, c.spells)
			},
			hidden: true
		},		
		{
			id: "diet",
			name: LANG.diet,
			type: "text",
			compute: function (a, e) {
				if (e) {
					e.className = "small"
				}
				var b = 0,
				c = "";
				for (var d in g_pet_foods) {
					if (a.diet & d) {
						if (b++>0) {
							c += LANG.comma
						}
						c += g_pet_foods[d]
					}
				}
				return c
			},
			sortFunc: function (d, c) {
				return strcmp(c.foodCount, d.foodCount) || Listview.funcBox.assocArrCmp(d.diet, c.diet, g_pet_foods)
			}
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			compute: function (b, d) {
				if (b.type != null) {
					d.className = "small q1";
					var c = creatElem("a");
					c.href = "?pets=" + b.type;
					append(c, ct(g_pet_types[b.type]));
					append(d, c)
				}
			},
			getVisibleText: function (a) {
				if (a.type != null) {
					return g_pet_types[a.type]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_pet_types[d.type], g_pet_types[c.type])
			}
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/pet-" + a.id +".html"
		},
		getStatPct: function (b) {
			var a = creatElem("span");
			if (!isNaN(b) && b > 0) {
				a.className = "q2";
				append(a, ct("+" + b + "%"))
			} else {
				if (!isNaN(b) && b < 0) {
					a.className = "q10";
					append(a, ct(b + "%"))
				}
			}
			return a
		}
	},
	achievement: {
		sort: [1, 2],
		nItemsPerPage: 100,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			span: 2,
			compute: function (c, j, g) {
				var b = null;
				if (c.who && c.completed) {
					b = "who=" + c.who + "&when=" + c.completed.getTime()
				}
				var f = creatElem("td");
				f.style.width = "1px";
				f.style.padding = "0";
				f.style.borderRight = "none";
				append(f, g_achievements.createIcon(c.id, 1));
				Icon.getLink(f.firstChild).rel = b;
				append(g, f);
				j.style.borderLeft = "none";
				var e = creatElem("a");
				e.style.fontFamily = "Verdana, sans-serif";
				e.href = this.template.getItemLink(c);
				e.rel = b;
				append(e, ct(c.name));
				append(j, e);
				if (c.description != null) {
					var h = creatElem("div");
					h.className = "small";
					append(h, ct(c.description));
					append(j, h)
				}
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.description) {
					b += " " + a.description
				}
				return b
			}
		},
		{
			id: "location",
			name: LANG.location,
			type: "text",
			width: "15%",
			compute: function (b, d) {
				if (b.zone) {
					var c = creatElem("a");
					c.className = "q1";
					c.href = "http://www.topwow.top/zone-" + b.zone +".html";
					append(c, ct(g_zones[b.zone]));
					append(d, c)
				}
			},
			getVisibleText: function (a) {
				return Listview.funcBox.arrayText(a.zone, g_zones)
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(d.zone, c.zone, g_zones)
			}
		},
		{
			id: "side",
			name: LANG.side,
			type: "text",
			width: "10%",
			compute: function (a, c) {
				if (a.side) {
					var b = creatElem("span");
					if (a.side == 1) {
						b.className = "alliance-icon"
					} else {
						if (a.side == 2) {
							b.className = "horde-icon"
						}
					}
					append(b, ct(g_sides[a.side]));
					append(c, b)
				} else {
					return - 1
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "points",
			name: LANG.points,
			type: "number",
			width: "10%",
			value: "points",
			compute: function (a, b) {
				if (a.points) {
					Listview.funcBox.appendMoney(b, 0, null, 0, 0, 0, a.points)
				}
			}
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "15%",
			compute: function (b, d) {
				d.className = "small q1";
				var c = creatElem("a");
				c.href = "http://www.topwow.top/achievements-" + b.category +".html";
				append(c, ct(g_achievement_categories[b.category]));
				append(d, c)
			},
			getVisibleText: function (a) {
				return g_achievement_categories[a.category]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_achievement_categories[d.category], g_achievement_categories[c.category])
			},
			hidden: true
		}],
		getItemLink: function (a) {
			return "http://www.topwow.top/achievement-" + a.id +".html"
		}
	},
	profile: {
		sort: [],
		nItemsPerPage: 50,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			value: "name",
			type: "text",
			align: "left",
			span: 2,
			compute: function (f, c, h) {
				if (f.level) {
					var e = creatElem("td");
					e.style.width = "1px";
					e.style.padding = "0";
					e.style.borderRight = "none";
					append(e, Icon.create(f.icon ? f.icon: "chr_" + g_file_races[f.race] + "_" + g_file_genders[f.gender] + "_" + g_file_classes[f.classs] + "0" + (f.level > 59 ? (Math.floor((f.level - 60) / 10) + 2) : 1), 1));
					append(h, e);
					c.style.borderLeft = "none"
				} else {
					c.colSpan = 2
				}
				var b = creatElem("div");
				b.style.position = "relative";
				var k = creatElem("a");
				k.style.fontFamily = "Verdana, sans-serif";
				k.href = this.template.getItemLink(f);
				append(k, ct(f.name));
				append(b, k);
				var g = creatElem("div");
				g.className = "small";
				if (f.guild) {
					var k = creatElem("a");
					k.className = "q1";
					k.href = "?profiles=" + f.region + "." + f.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(f.guild), "%20", "+") + "&roster=1";
					append(k, ct(f.guild));
					append(g, ct("<"));
					append(g, k);
					append(g, ct(">"))
				} else {
					if (f.description) {
						append(g, ct(f.description))
					}
				}
				var l = creatElem("span"),
				j = "";
				l.className = "q10";
				if (f.deleted) {
					j = LANG.lvcomment_deleted
				}
				append(l, ct(j));
				append(g, l);
				append(b, g);
				var g = creatElem("div");
				g.className = "small";
				g.style.fontStyle = "italic";
				g.style.position = "absolute";
				g.style.right = "3px";
				g.style.bottom = "0px";
				if (!f.published && !f.region && !f.realm) {
					append(g, ct(LANG.privateprofile))
				}
				append(b, g);
				append(c, b)
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.guild) {
					b += " " + a.guild
				}
				return b
			}
		},
		{
			id: "faction",
			name: LANG.faction,
			type: "text",
			compute: function (a, f) {
				if (!a.size && !a.members && !a.level) {
					return
				}
				var e = creatElem("div"),
				c = creatElem("div"),
				b;
				b = Icon.create("faction_" + g_file_factions[a.faction + 1], 0);
				b.onmouseover = function (d) {
					Tooltip.showAtCursor(d, g_sides[a.faction + 1], 0, 0, "q")
				};
				b.onmousemove = Tooltip.cursorUpdate;
				b.onmouseout = Tooltip.hide;
				b.style.cssFloat = b.style.syleFloat = "left";
				e.style.margin = "0 auto";
				e.style.textAlign = "left";
				e.style.width = "26px";
				c.className = "clear";
				append(e, b);
				append(f, e);
				append(f, c)
			},
			getVisibleText: function (a) {
				return g_sides[a.faction + 1]
			},
			sortFunc: function (d, c, e) {
				return strcmp(this.getVisibleText(d), this.getVisibleText(c))
			}
		},
		{
			id: "members",
			name: LANG.members,
			value: "members",
			hidden: 1
		},
		{
			id: "size",
			name: "Size",
			value: "size",
			hidden: 1
		},
		{
			id: "rank",
			name: "Rank",
			value: "rank",
			hidden: 1
		},
		{
			id: "race",
			name: LANG.race,
			type: "text",
			compute: function (a, f) {
				if (a.race) {
					var e = creatElem("div"),
					c = creatElem("div"),
					b;
					b = Icon.create("race_" + g_file_races[a.race] + "_" + g_file_genders[a.gender], 0);
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_chr_races[a.race], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					b.style.cssFloat = b.style.syleFloat = "left";
					e.style.margin = "0 auto";
					e.style.textAlign = "left";
					e.style.width = "26px";
					c.className = "clear";
					append(e, b);
					append(f, e);
					append(f, c)
				}
			},
			getVisibleText: function (a) {
				return g_file_genders[a.gender] + " " + g_chr_races[a.race]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_chr_races[d.race], g_chr_races[c.race])
			},
			hidden: 1
		},
		{
			id: "classs",
			name: LANG.classs,
			type: "text",
			compute: function (a, f) {
				if (a.classs) {
					var e = creatElem("div"),
					c = creatElem("div"),
					b;
					b = Icon.create("class_" + g_file_classes[a.classs], 0);
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_chr_classes[a.classs], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					b.style.cssFloat = b.style.syleFloat = "left";
					e.style.margin = "0 auto";
					e.style.textAlign = "left";
					e.style.width = "26px";
					c.className = "clear";
					append(e, b);
					append(f, e);
					append(f, c)
				} else {
					return - 1
				}
			},
			getVisibleText: function (a) {
				if (a.classs) {
					return g_chr_classes[a.classs]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(this.getVisibleText(d), this.getVisibleText(c))
			},
			hidden: 1
		},
		{
			id: "level",
			name: LANG.level,
			value: "level",
			hidden: 1
		},
		{
			id: "talents",
			name: LANG.talents,
			type: "text",
			compute: function (e, j) {
				if (!e.level) {
					return
				}
				var i = [e.talenttree1, e.talenttree2, e.talenttree3],
				f = pr_getSpecFromTalents(e.classs, i),
				c,
				g,
				b = creatElem("a");
				var h = creatElem("div");
				h.style.width = "82px";
				h.style.height = "23px";
				h.style.margin = "0 auto";
				h.style.lineHeight = "23px";
				h.style.backgroundImage = "url(" + f.icon + ")";
				h.style.backgroundRepeat = "no-repeat";
				h.style.backgroundPosition = "left";
				var b = creatElem("a");
				b.className = "small q1";
				b.style.padding = "7px 0 7px 28px";
				b.style.fontWeight = "bold";
				b.rel = "np";
				b.href = this.template.getItemLink(e) + "#talents";
				b.onmouseover = function (a) {
					Tooltip.showAtCursor(a, f.name, 0, 0, "q")
				};
				b.onmousemove = Tooltip.cursorUpdate;
				b.onmouseout = Tooltip.hide;
				append(b, ct(e.talenttree1 + " / " + e.talenttree2 + " / " + e.talenttree3));
				append(h, b);
				append(j, h)
			},
			getVisibleText: function (a) {
				if (a.talenttree1 || a.talenttree2 || a.talenttree3) {
					if (a.talentspec > 0) {
						return g_chr_specs[a.classs][a.talentspec - 1]
					} else {
						return g_chr_specs[0]
					}
				} else {
					return g_chr_specs["-1"]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(this.getVisibleText(d), this.getVisibleText(c))
			},
			hidden: 1
		},
		{
			id: "gearscore",
			name: LANG.gearscore,
			value: "gearscore",
			compute: function (a, c) {
				var b = (a.level ? a.level: (a.members ? 80 : 0));
				if (isNaN(a.gearscore) || !b) {
					return
				}
				c.className = "q" + pr_getGearScoreQuality(b, a.gearscore, (in_array([2, 6, 7, 11], a.classs) != -1));
				return (a.gearscore ? number_format(a.gearscore) : 0)
			},
			hidden: 1
		},
		{
			id: "achievementpoints",
			name: LANG.points,
			value: "achievementpoints",
			compute: function (a, b) {
				if (a.achievementpoints) {
					Listview.funcBox.appendMoney(b, 0, null, 0, 0, 0, a.achievementpoints)
				}
			},
			hidden: 1
		},
		{
			id: "wins",
			name: LANG.wins,
			value: "wins",
			hidden: 1
		},
		{
			id: "losses",
			name: LANG.losses,
			compute: function (a, b) {
				return a.games - a.wins
			},
			hidden: 1
		},
		{
			id: "guildrank",
			name: LANG.guildrank,
			value: "guildrank",
			compute: function (c, d) {
				if (c.guildrank > 0) {
					return sprintf(LANG.rankno, c.guildrank)
				} else {
					if (c.guildrank == 0) {
						var a = creatElem("b");
						append(a, ct(LANG.guildleader));
						append(d, a)
					}
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp((d.guildrank >= 0 ? d.guildrank: 11), (c.guildrank >= 0 ? c.guildrank: 11))
			},
			hidden: 1
		},
		{
			id: "rating",
			name: LANG.rating,
			value: "rating",
			compute: function (a, b) {
				if (a.roster) {
					return a.arenateam[a.roster].rating
				}
				return a.rating
			},
			sortFunc: function (d, c, e) {
				if (d.roster && c.roster) {
					return strcmp(d.arenateam[d.roster].rating, c.arenateam[c.roster].rating)
				}
				return strcmp(d.rating, c.rating)
			},
			hidden: 1
		},
		{
			id: "location",
			name: LANG.location,
			type: "text",
			compute: function (c, e) {
				var b;
				if (c.region) {
					if (c.realm) {
						b = creatElem("a");
						b.className = "q1";
						b.href = "?profiles=" + c.region + "." + c.realm;
						append(b, ct(c.realmname));
						append(e, b);
						append(e, creatElem("br"))
					}
					var d = creatElem("small");
					b = creatElem("a");
					b.className = "q1";
					b.href = "?profiles=" + c.region;
					append(b, ct(c.region.toUpperCase()));
					append(d, b);
					if (c.battlegroup) {
						append(d, ct(LANG.hyphen));
						b = creatElem("a");
						b.className = "q1";
						b.href = "?profiles=" + c.region + "." + c.battlegroup;
						append(b, ct(c.battlegroupname));
						append(d, b)
					}
					append(e, d)
				}
			},
			getVisibleText: function (a) {
				var b = "";
				if (a.region) {
					b += " " + a.region
				}
				if (a.battlegroup) {
					b += " " + a.battlegroup
				}
				if (a.realm) {
					b += " " + a.realm
				}
				return trim(b)
			},
			sortFunc: function (d, c, e) {
				if (d.region != c.region) {
					return strcmp(d.region, c.region)
				}
				if (d.battlegroup != c.battlegroup) {
					return strcmp(d.battlegroup, c.battlegroup)
				}
				return strcmp(d.realm, c.realm)
			}
		},
		{
			id: "guild",
			name: LANG.guild,
			value: "guild",
			type: "text",
			compute: function (c, d) {
				if (!c.region || !c.battlegroup || !c.realm || !c.guild) {
					return
				}
				var b = creatElem("a");
				b.className = "q1";
				b.href = "?profiles=" + c.region + "." + c.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(c.guild), "%20", "+") + "&roster=1";
				append(b, ct(c.guild));
				append(d, b)
			}
		}],
		getItemLink: function (a) {
			if (a.size) {
				return "?profiles=" + a.region + "." + a.realm + "&filter=cr=" + (a.size == 2 ? 12 : (a.size == 3 ? 15 : 18)) + ";crs=0;crv=" + str_replace(urlencode(a.name), "%20", "+") + "&roster=" + (a.size == 5 ? 4 : a.size)
			} else {
				if (a.members) {
					return "?profiles=" + a.region + "." + a.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(a.name), "%20", "+") + "&roster=1"
				} else {
					if (a.region && a.realm) {
						return "?profile=" + a.region + "." + a.realm + "." + g_cleanCharacterName(a.name)
					} else {
						return "?profile=" + a.id
					}
				}
			}
		}
	},
	model: {
		sort: [],
		mode: 3,
		nItemsPerPage: 40,
		nItemsPerRow: 4,
		poundable: 2,
		columns: [],
		compute: function (c, k, e) {
			k.className = "screenshot-cell";
			k.vAlign = "bottom";
			var j = creatElem("div");
			j.className = "pet-model";
			var b = creatElem("a");
			b.className = "pet-zoom";
			b.href = "javascript:;";
			b.onclick = this.template.modelShow.bind(this.template, c.npcId, c.displayId);
			append(j, b);
			var g = creatElem("div");
			g.id = "pm" + c.displayId;
			append(j, g);
			append(k, j);
			j = creatElem("div");
			j.className = "screenshot-cell-user";
			b = creatElem("a");
			b.href = this.template.getItemLink(c);
			append(b, ct(c.skin));
			append(j, b);
			append(j, ct(" (" + c.count + ")"));
			append(k, j);
			j = creatElem("div");
			j.style.position = "relative";
			j.style.height = "1em";
			var h = creatElem("div");
			h.className = "screenshot-caption";
			var f = creatElem("small");
			append(f, ct(LANG.level + ": "));
			append(f, ct(c.level_min + (c.level_min == c.level_max ? "": LANG.hyphen + (c.level_max == 9999 ? "??": c.level_max))));
			append(f, creatElem("br"));
			append(h, f);
			append(j, h);
			append(k, j);
			setTimeout(this.template.appendFlash.bind(g, c), 1)
		},
		getItemLink: function (a) {
			return "http://www.topwow.top/npcs-1.html?filter=" + (a.family ? "fa=" + a.family + ";": "") + "minle=1;cr=35;crs=0;crv=" + a.skin
		},
		modelShow: function (b, a) {
			ModelViewer.show({
				type: 1,
				typeId: b,
				displayId: a,
				noPound: 1
			})
		},
		appendFlash: function (a) {
			var c = {
				model: a.displayId,
				modelType: 8,
				contentPath: "http://static.wowhead.com/modelviewer/",
				blur: (OS.mac ? "0": "1")
			};
			var b = {
				quality: "high",
				allowscriptaccess: "always",
				menu: false,
				wmode: "opaque",
				bgcolor: "#101010"
			};
			swfobject.embedSWF("http://static.wowhead.com/modelviewer/ModelView.swf", this.id, "100%", "100%", "10.0.0", "http://static.wowhead.com/modelviewer/expressInstall.swf", c, b)
		}
	}
};
Menu.fixUrls(mn_items, "http://www.topwow.top/items-");
Menu.fixUrls(mn_itemSets, "?itemsets&filter=cl=", "#0-2+1");
Menu.fixUrls(mn_npcs, "http://www.topwow.top/npcs-");
Menu.fixUrls(mn_objects, "http://www.topwow.top/objects-");
Menu.fixUrls(mn_quests, "http://www.topwow.top/quests-");
Menu.fixUrls(mn_spells, "http://www.topwow.top/spells-");
Menu.fixUrls(mn_zones, "http://www.topwow.top/zones-");
Menu.fixUrls(mn_pets, "http://www.topwow.top/pets-");
Menu.fixUrls(mn_factions, "http://www.topwow.top/factions-");
//Menu.fixUrls(mn_achievements, "/achievements-", null, true);
Menu.fixUrls(mn_petCalc, "http://www.topwow.top/petcalc-");
Menu.fixUrls(mn_forums, "?forums&board=", null, true);
var g_dev = false;
var g_locale = {
	id: 0,
	name: "enus"
};
var g_localTime = new Date();
var g_user = {
	id: 0,
	name: "",
	roles: 0
};
var g_items = {};
var g_quests = {};
var g_spells = {};
var g_achievements = {};
var g_users = {};
var g_types = {
	1 : "npc",
	2 : "object",
	3 : "item",
	4 : "itemset",
	5 : "quest",
	6 : "spell",
	7 : "zone",
	8 : "faction",
	9 : "pet",
	10 : "achievement"
};
var g_locales = {
	0 : "enus",
	4 : "zhcn"
};
var g_file_races = {
	10 : "bloodelf",
	11 : "draenei",
	3 : "dwarf",
	7 : "gnome",
	1 : "human",
	4 : "nightelf",
	2 : "orc",
	6 : "tauren",
	8 : "troll",
	5 : "scourge"
};
var g_file_classes = {
	6 : "deathknight",
	11 : "druid",
	3 : "hunter",
	8 : "mage",
	2 : "paladin",
	5 : "priest",
	4 : "rogue",
	7 : "shaman",
	9 : "warlock",
	1 : "warrior"
};
var g_file_genders = {
	0 : "male",
	1 : "female"
};
var g_file_factions = {
	1 : "alliance",
	2 : "horde"
};
var g_file_gems = {
	1 : "meta",
	2 : "red",
	4 : "yellow",
	6 : "orange",
	8 : "blue",
	10 : "purple",
	12 : "green",
	14 : "prismatic"
};
var g_customColors = {
	Miyari: "pink"
};
g_items.add = function (b, a) {
	if (g_items[b] != null) {
		cO(g_items[b], a)
	} else {
		g_items[b] = a
	}
};
g_items.getIcon = function (a) {
	if (g_items[a] != null) {
		return g_items[a].icon
	} else {
		return "inv_misc_questionmark"
	}
};
g_items.createIcon = function (d, b, a, c) {
	return Icon.create(g_items.getIcon(d), b, null, "http://www.topwow.top/item-" + d + ".html", a, c)
};
g_spells.getIcon = function (a) {
	if (g_spells[a] != null) {
		return g_spells[a].icon
	} else {
		return "inv_misc_questionmark"
	}
};
g_spells.createIcon = function (d, b, a, c) {
	return Icon.create(g_spells.getIcon(d), b, null, "http://www.topwow.top/spell-" + d + ".html", a, c)
};
g_achievements.getIcon = function (a) {
	if (g_achievements[a] != null) {
		return g_achievements[a].icon
	} else {
		return "inv_misc_questionmark"
	}
};
g_achievements.createIcon = function (d, b, a, c) {
	return Icon.create(g_achievements.getIcon(d), b, null, "http://www.topwow.top/achievement-" + d + ".html", a, c)
};
var $WowheadPower = new
function () {
	var e, D, H, q, J, B, z, g = 0,
	C = {},
	f = {},
	c = {},
	G = 0,
	E = 1,
	h = 2,
	r = 3,
	F = 4,
	s = 1,
	j = 2,
	v = 3,
	y = 5,
	t = 6,
	m = 10,
	i = 100,
	o = 15,
	x = 15,
	p = {
		1 : [C, "npc"],
		2 : [f, "object"],
		3 : [g_items, "item"],
		5 : [g_quests, "quest"],
		6 : [g_spells, "spell"],
		7 : [g_zones, "zone"],
		8 : [g_factions, "faction"],
		10 : [g_achievements, "achievement"],
		100 : [c, "profile"]
	};
	function K() {
		aE(document, "mouseover", u)
	}
	function n(O) {
		var P = g_getCursorPos(O);
		B = P.x;
		z = P.y
	}
	function changeToOld(url) {
		try{
			if(url.indexOf("/item-")>0){
				return "?item="+url.split('-')[1].split('.')[0];
			} else 	if(url.indexOf("/object-")>0){
				return "?object="+url.split('-')[1].split('.')[0];
			} else 	if(url.indexOf("/spell-")>0){
				return "?spell="+url.split('-')[1].split('.')[0];
			} else 	if(url.indexOf("/npc-")>0){
				return "?npc="+url.split('-')[1].split('.')[0];
			} else 	if(url.indexOf("/quest-")>0){
				return "?quest="+url.split('-')[1].split('.')[0];
			}
			return url;
		}catch(e){
			return url;
		}
	}
	function M(aa, W) {
		if (aa.nodeName != "A" && aa.nodeName != "AREA") {
			return - 2323
		}
		if (!aa.href.length) {
			return
		}
		if (aa.rel!=null && aa.rel!=undefined && aa.rel.indexOf("np") != -1) {
			return
		}

		var myhref = changeToOld(aa.href);

		var T, S, Q, P, U = {};
		q = U;
		var O = function (ab, af, ad) {
			if (af == "buff" || af == "sock") {
				U[af] = true
			} else {
				if (af == "rand" || af == "ench" || af == "lvl" || af == "c") {
					U[af] = parseInt(ad)
				} else {
					if (af == "gems" || af == "pcs") {
						U[af] = ad.split(":")
					} else {
						if (af == "who" || af == "domain") {
							U[af] = ad
						} else {
							if (af == "when") {
								U[af] = new Date(parseInt(ad))
							}
						}
					}
				}
			}
		};
		S = 2;
		Q = 3;
/*
		if (myhref.indexOf("http://") == 0) {
			T = 1;
			P = myhref.match(/http:\/\/(.+?)?\.?wowhead\.com\/\?(item|quest|spell|achievement|npc|object|profile)=([^&#]+)/)
		} else {
			P = myhref.match(/()\?(item|quest|spell|achievement|npc|object|profile)=([^&#]+)/)
		}
*/
		P = myhref.match(/()\?(item|quest|spell|achievement|npc|object|profile)=([^&#]+)/)
		if (P == null && aa.rel) {
			T = 0;
			S = 1;
			Q = 2;
			P = aa.rel.match(/(item|quest|spell|achievement|npc|object|profile).?([^&#]+)/)
		}
		if (aa.rel) {
			aa.rel.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g, O);
			if (U.gems && U.gems.length > 0) {
				var V;
				for (V = Math.min(3, U.gems.length - 1); V >= 0; --V) {
					if (parseInt(U.gems[V])) {
						break
					}
				}++V;
				if (V == 0) {
					delete U.gems
				} else {
					if (V < U.gems.length) {
						U.gems = U.gems.slice(0, V)
					}
				}
			}
		}
		if (P) {
			var Z, R = "www";
			J = aa;
			if (U.domain) {
				R = U.domain
			} else {
				if (T && P[T]) {
					R = P[T]
				}
			}
			Z = g_locale.id;//g_getLocaleFromDomain(R);
			if (myhref.indexOf("#") != -1 && document.location.href.indexOf(P[S] + "=" + P[Q]) != -1) {
				return
			}
			g = (aa.parentNode.className.indexOf("icon") == 0 ? 1 : 0);
			if (!aa.onmouseout) {
				if (g == 0) {
					aa.onmousemove = a
				}
				aa.onmouseout = L
			}
			n(W);
			var Y = g_getIdFromTypeName(P[S]),
			X = P[Q];
			if (Y == i && !g_dev) {
				Z = 0
			}
			w(Y, X, Z, U)
		}
	}
	function u(event) {
		event = normalEvent(event);
		var td = event._target;
		var O = 0;

		while (td != null && O < 3 && M(td, event) == -2323) {
			td = td.parentNode; ++O
		}
		
	}
	function a(O) {
		O = normalEvent(O);
		n(O);
		Tooltip.move(B, z, 0, 0, o, x)
	}
	function L() {
		e = null;
		J = null;
		Tooltip.hide()
	}
	function I(O) {
		return (q.buff ? "buff_": "tooltip_") + g_locales[O]
	}
	function k(P, R, Q) {
		var O = p[P][0];
		if (O[R] == null) {
			O[R] = {}
		}
		if (O[R].status == null) {
			O[R].status = {}
		}
		if (O[R].status[Q] == null) {
			O[R].status[Q] = G
		}
	}
	function w(P, T, R, S) {
		if (!S) {
			S = {}
		}
		var Q = d(T, S);
		e = P;
		D = Q;
		H = R;
		q = S;
		k(P, Q, R);
		var O = p[P][0];
		if (O[Q].status[R] == F || O[Q].status[R] == r) {
			N(O[Q][I(R)], O[Q].icon)
		} else {
			if (O[Q].status[R] == E) {
				N(LANG.tooltip_loading)
			} else {
				b(P, T, R, null, S)
			}
		}
	}
	function b(W, S, X, Q, T) {
		var O = d(S, T);
		var V = p[W][0];
		if (V[O].status[X] != G && V[O].status[X] != h) {
			return
		}
		V[O].status[X] = E;
		if (!Q) {
			V[O].timer = setTimeout(function () {
				l.apply(this, [W, O, X])
			},
			333)
		}
		var R = "";
		for (var U in T) {
			if (U != "rand" && U != "ench" && U != "gems" && U != "sock") {
				continue
			}
			if (typeof T[U] == "object") {
				R += "&" + U + "=" + T[U].join(":")
			} else {
				if (U == "sock") {
					R += "&sock"
				} else {
					R += "&" + U + "=" + T[U]
				}
			}
		}
		/*
		var P = "";
		if (!g_dev) {
			if (e == i) {
				P += "http://profiler.wowhead.com"
			} else {
				P += "http://" + g_getDomainFromLocale(X) + ".wowhead.com"
			}
		}
		P += "?" + p[W][1] + "=" + S + "&power" + R;
		*/
		var P = "ajax.php?" + p[W][1] + "=" + S + "&power" + R;
		g_ajaxIshRequest(P)
	}
	function N(R, S) {
		if (J._fixTooltip) {
			R = J._fixTooltip(R, e, D, J)
		}
		if (!R) {
			R = LANG["tooltip_" + g_types[e] + "notfound"];
			S = "inv_misc_questionmark"
		} else {
			if (q != null) {
				if (q.pcs && q.pcs.length) {
					var T = 0;
					for (var Q = 0, P = q.pcs.length; Q < P; ++Q) {
						var O;
						if (O = R.match(new RegExp("<span><!--si([0-9]+:)*" + q.pcs[Q] + "(:[0-9]+)*-->"))) {
							R = R.replace(O[0], '<span class="q8"><!--si' + q.pcs[Q] + "-->"); ++T
						}
					}
					if (T > 0) {
						R = R.replace("(0/", "(" + T + "/");
						R = R.replace(new RegExp("<span>\\(([0-" + T + "])\\)", "g"), '<span class="q2">($1)')
					}
				}
				if (q.c) {
					R = R.replace(/<span class="c([0-9]+?)">(.+?)<\/span><br \/>/g, '<span class="c$1" style="display: none">$2</span>');
					R = R.replace(new RegExp('<span class="c(' + q.c + ')" style="display: none">(.+?)</span>', "g"), '<span class="c$1">$2</span><br />')
				}
				if (q.lvl) {
					R = R.replace(/\(<!--r([0-9]+):([0-9]+):([0-9]+)-->([0-9.%]+)(.+?)([0-9]+)\)/g, function (X, Z, Y, W, U, ab, V) {
						var aa = g_convertRatingToPercent(q.lvl, Y, W);
						aa = (Math.round(aa * 100) / 100);
						if (Y != 12 && Y != 37) {
							aa += "%"
						}
						return "(<!--r" + q.lvl + ":" + Y + ":" + W + "-->" + aa + ab + q.lvl + ")"
					})
				}
				if (q.who && q.when) {
					R = R.replace("<table><tr><td><br />", '<table><tr><td><br /><span class="q2">' + sprintf(LANG.tooltip_achievementcomplete, q.who, q.when.getMonth() + 1, q.when.getDate(), q.when.getFullYear()) + "</span><br /><br />");
					R = R.replace(/class="q0"/g, 'class="r3"')
				}
			}
		}
		if (g == 1) {
			Tooltip.setIcon(null);
			Tooltip.show(J, R)
		} else {
			Tooltip.setIcon(S);
			Tooltip.showAtXY(R, B, z, o, x)
		}
	}
	function l(P, R, Q) {
		if (e == P && D == R && H == Q) {
			N(LANG.tooltip_loading);
			var O = p[P][0];
			O[R].timer = setTimeout(function () {
				A.apply(this, [P, R, Q])
			},
			3850)
		}
	}
	function A(P, R, Q) {
		var O = p[P][0];
		O[R].status[Q] = h;
		if (e == P && D == R && H == Q) {
			N(LANG.tooltip_noresponse)
		}
	}
	function d(P, O) {
		return P + (O.rand ? "r" + O.rand: "") + (O.ench ? "e" + O.ench: "") + (O.gems ? "g" + O.gems.join(",") : "") + (O.sock ? "s": "")
	}
	this.register = function (Q, entry, locale, tip) {
		var O = p[Q][0];
		k(Q, entry, locale);
		if (O[entry].timer) {
			clearTimeout(O[entry].timer);
			O[entry].timer = null
		}
		cO(O[entry], tip);
		if (O[entry].status[locale] == E) {
			if (O[entry][I(locale)]) {
				O[entry].status[locale] = F
			} else {
				O[entry].status[locale] = r
			}
		}
		if (e == Q && entry == D && H == locale) {
			N(O[entry][I(locale)], O[entry].icon)
		}
	};
	this.registerNpc = function (Q, P, O) {
		this.register(s, Q, P, O)
	};
	this.registerObject = function (Q, P, O) {
		this.register(j, Q, P, O)
	};
	this.registerItem = function (entry, locale, obj) {
		this.register(v, entry, locale, obj)
	};
	this.registerQuest = function (Q, P, O) {
		this.register(y, Q, P, O)
	};
	this.registerSpell = function (Q, P, O) {
		this.register(t, Q, P, O)
	};
	this.registerAchievement = function (Q, P, O) {
		this.register(m, Q, P, O)
	};
	this.registerProfile = function (Q, P, O) {
		this.register(i, Q, P, O)
	};
	this.request = function (O, S, Q, R) {
		if (!R) {
			R = {}
		}
		var P = d(S, R);
		k(O, P, Q);
		b(O, S, Q, 1, R)
	};
	this.requestItem = function (P, O) {
		this.request(v, P, g_locale.id, O)
	};
	this.requestSpell = function (O) {
		this.request(t, O, g_locale.id)
	};
	this.getStatus = function (P, R, Q) {
		var O = p[P][0];
		if (O[R] != null) {
			return O[R].status[Q]
		} else {
			return G
		}
	};
	this.getItemStatus = function (P, O) {
		this.getStatus(v, P, O)
	};
	this.getSpellStatus = function (P, O) {
		this.getStatus(t, P, O)
	};
	K()
};
var LiveSearch = new
function () {
	var currentTextbox, lastSearch = {},
	lastDiv, timer, prepared, container, cancelNext, hasData, summary, selection;
	function setText(textbox, txt) {
		textbox.value = txt;
		textbox.selectionStart = textbox.selectionEnd = txt.length
	}
	function colorDiv(div, fromOver) {
		if (lastDiv) {
			lastDiv.className = lastDiv.className.replace("live-search-selected", "")
		}
		lastDiv = div;
		lastDiv.className += " live-search-selected";
		selection = div.i;
		if (!fromOver) {
			show();
			setTimeout(setText.bind(0, currentTextbox, g_getTextContent(div.firstChild.firstChild.childNodes[1])), 1);
			cancelNext = 1
		}
	}
	function aOver() {
		colorDiv(this.parentNode.parentNode, 1)
	}
	function isVisible() {
		if (!container) {
			return false
		}
		return container.style.display != "none"
	}
	function adjust(fromResize) {
		if (fromResize == 1 && !isVisible()) {
			return
		}
		if (currentTextbox == null) {
			return
		}
		var c = ac(currentTextbox);
		container.style.left = (c[0] - 2) + "px";
		container.style.top = (c[1] + currentTextbox.offsetHeight + 1) + "px";
		container.style.width = currentTextbox.offsetWidth + "px"
	}
	function prepare() {
		if (prepared) {
			return
		}
		prepared = 1;
		container = creatElem("div");
		container.className = "live-search";
		container.style.display = "none";
		append(getElement("layers"), container);
		aE(window, "resize", adjust.bind(0, 1));
		aE(document, "click", hide)
	}
	function show() {
		if (container && !isVisible()) {
			adjust();
			container.style.display = ""
		}
	}
	function hide() {
		if (container) {
			container.style.display = "none"
		}
	}
	function boldify(match) {
		return "<b>" + match + "</b>"
	}
	function display(textbox, search, suggz, dataz) {
		prepare();
		show();
		lastA = null;
		hasData = 1;
		selection = null;
		while (container.firstChild) {
			de(container.firstChild)
		}
		if (!Browser.ie6) {
			append(container, creatElem("em"));
			append(container, creatElem("var"));
			append(container, creatElem("strong"))
		}
		search = search.replace(/[^a-z0-9\-]/i, " ");
		search = trim(search.replace(/\s+/g, " "));
		var regex = g_createOrRegex(search);
		for (var i = 0, len = suggz.length; i < len; ++i) {
			var pos = suggz[i].lastIndexOf("(");
			if (pos != -1) {
				suggz[i] = suggz[i].substr(0, pos - 1)
			}
			var type = dataz[i][0],
			typeId = dataz[i][1],
			param1 = dataz[i][2],
			param2 = dataz[i][3],
			a = creatElem("a"),
			sp = creatElem("i"),
			sp2 = creatElem("span"),
			div = creatElem("div"),
			div2 = creatElem("div");
			div.i = i;
			a.onmouseover = aOver;
			if (textbox._summary) {
				a.href = "javascript:;";
				a.onmousedown = Summary.addGroupItem.bind(g_summaries[textbox._summary], textbox._type, typeId);
				a.onclick = rf;
				a.rel = g_types[type] + "-" + typeId + ".html"
			} else {
				if (textbox._profileslots) {
					a.href = "javascript:;";
					a.onmousedown = $WowheadProfiler.equipItem.bind(null, typeId, textbox._profileslots);
					a.onclick = rf;
					a.rel = g_types[type] + "-" + typeId +".html"
				} else {
					a.href = "http://www.topwow.top/" + g_types[type] + "-" + typeId +".html"
				}
			}
			if (textbox._append) {
				a.rel += textbox._append
			}
			if (type == 3 && param2 != null) {
				a.className += " q" + param2
			}
			if ((type == 3 || type == 6 || type == 9 || type == 10) && param1) {
				div.className += " live-search-icon";
				div.style.backgroundImage = "url(images/icons/small/" + param1.toLowerCase() + ".png)"
			} else {
				if (type == 5 && param1 >= 1 && param1 <= 2) {
					div.className += " live-search-icon-quest-" + (param1 == 1 ? "alliance": "horde")
				}
			}
			if (!textbox._summary && !textbox._profileslots) {
				append(sp, ct(LANG.types[type][0]))
			}
			append(a, sp);
			var buffer = suggz[i];
			buffer = buffer.replace(regex, boldify);
			sp2.innerHTML = buffer;
			append(a, sp2);
			if (type == 6 && param2) {
				append(a, ct(" (" + param2 + ")"))
			}
			append(div2, a);
			append(div, div2);
			append(container, div)
		}
	}
	function receive(xhr, opt) {
		var text = xhr.responseText;
		if (text.charAt(0) != "[" || text.charAt(text.length - 1) != "]") {
			return
		}
		var a = eval(text);
		var search = a[0];
		if (search == opt.search) {
			if ((opt.textbox._summary || opt.textbox._profileslots) && a.length == 9) {
				for (var i = 0, len = a[8].length; i < len; ++i) {
					if (opt.textbox._summary && in_array(g_summaries[opt.textbox._summary].data, a[8][i].id, function (x) {
						return x.id
					}) == -1) {
						g_summaries[opt.textbox._summary].data.push(a[8][i]);
						g_items.add(a[8][i].id, {
							icon: a[8][i].icon
						})
					} else {
						if (opt.textbox._profileslots) {
							var _ = {};
							_["name_" + g_locale.name] = a[8][i].name.substring(1);
							cO(_, {
								quality: parseInt(a[8][i].name.charAt(0)),
								icon: a[8][i].icon,
								displayid: a[8][i].displayid,
								jsonequip: {},
								itemset: 0
							});
							cO(_.jsonequip, a[8][i]);
							g_items.add(a[8][i].id, _)
						}
					}
				}
				a.splice(8, 1)
			}
			if (a.length == 8) {
				display(opt.textbox, search, a[1], a[7])
			} else {
				hide()
			}
		}
	}
	function fetch(textbox, search) {
		//var url = "?search=" + urlencode(search) + "&opensearch";
		var url = "opensearch.php?search=" + urlencode(search);
		if (textbox._type) {
			url += "&type=" + textbox._type
		}
		if (textbox._profileslots) {
			url += "&slots=" + textbox._profileslots.join(":")
		}
		new Ajax(url, {
			onSuccess: receive,
			textbox: textbox,
			search: search
		})
	}
	function preFetch(textbox, search) {
		if (cancelNext) {
			cancelNext = 0;
			return
		}
		hasData = 0;
		if (timer > 0) {
			clearTimeout(timer);
			timer = 0
		}
		timer = setTimeout(fetch.bind(0, textbox, search), 333)
	}
	function cycle(dir) {
		if (!isVisible()) {
			if (hasData) {
				show()
			}
			return
		}
		var firstNode = (container.childNodes[0].nodeName == "EM" ? container.childNodes[3] : container.firstChild);
		var bakDiv = dir ? firstNode: container.lastChild;
		if (lastDiv == null) {
			colorDiv(bakDiv)
		} else {
			var div = dir ? lastDiv.nextSibling: lastDiv.previousSibling;
			if (div) {
				if (div.nodeName == "STRONG") {
					div = container.lastChild
				}
				colorDiv(div)
			} else {
				colorDiv(bakDiv)
			}
		}
	}
	function onKeyUp(e) {
		e = normalEvent(e);
		var textbox = e._target;
		switch (e.keyCode) {
		case 48:
		case 96:
		case 107:
		case 109:
			if (Browser.gecko && e.ctrlKey) {
				adjust(textbox);
				break
			}
			break;
		case 13:
			if ((textbox._summary || textbox._profileslots) && hasData && isVisible()) {
				var div = container.childNodes[(Browser.ie6 ? 0 : 3) + (selection | 0)];
				div.firstChild.firstChild.onmousedown();
				hide();
				if (textbox._summary) {
					g_summaries.compare.toggleOptions()
				}
				return
			}
			break
		}
		var search = trim(textbox.value.replace(/\s+/g, " "));
		if (search == lastSearch[textbox.id]) {
			return
		}
		lastSearch[textbox.id] = search;
		if (search.length) {
			preFetch(textbox, search)
		} else {
			hide()
		}
	}
	function onKeyDown(e) {
		e = normalEvent(e);
		var textbox = e._target;
		switch (e.keyCode) {
		case 27:
			hide();
			break;
		case 38:
			cycle(0);
			break;
		case 40:
			cycle(1);
			break
		}
	}
	function onFocus(e) {
		e = normalEvent(e);
		var textbox = e._target;
		if (textbox != document) {
			currentTextbox = textbox
		}
	}
	this.attach = function (textbox) {
		if (textbox.getAttribute("autocomplete") == "off") {
			return
		}
		textbox.setAttribute("autocomplete", "off");
		aE(textbox, "focus", onFocus);
		aE(textbox, "keyup", onKeyUp);
		aE(textbox, Browser.opera ? "keypress": "keydown", onKeyDown)
	};
	this.reset = function (textbox) {
		lastSearch[textbox.id] = null;
		textbox.value = "";
		hasData = 0;
		hide()
	};
	this.hide = function () {
		hide()
	}
};
var Lightbox = new
function () {
	var d, m, n, h = {},
	c = {},
	i, f;
	function o() {
		aE(d, "click", e);
		aE(document, Browser.opera ? "keypress": "keydown", g);
		aE(window, "resize", a);
		if (Browser.ie6) {
			aE(window, "scroll", j)
		}
	}
	function l() {
		dE(d, "click", e);
		dE(document, Browser.opera ? "keypress": "keydown", g);
		dE(window, "resize", a);
		if (Browser.ie6) {
			dE(window, "scroll", j)
		}
	}
	function b() {
		if (i) {
			return
		}
		i = 1;
		var p = getElement("layers");
		d = creatElem("div");
		d.className = "lightbox-overlay";
		m = creatElem("div");
		m.className = "lightbox-outer";
		n = creatElem("div");
		n.className = "lightbox-inner";
		d.style.display = m.style.display = "none";
		append(p, d);
		append(m, n);
		append(p, m)
	}
	function g(p) {
		p = normalEvent(p);
		switch (p.keyCode) {
		case 27:
			e();
			break
		}
	}
	function a(p) {
		if (p != 1234) {
			if (c.onResize) {
				c.onResize()
			}
		}
		d.style.height = document.body.offsetHeight + "px";
		if (Browser.ie6) {
			j()
		}
	}
	function j() {
		var q = g_getScroll().y,
		p = g_getWindowSize().h;
		m.style.top = (q + p / 2) + "px"
	}
	function e() {
		l();
		if (c.onHide) {
			c.onHide()
		}
		d.style.display = m.style.display = "none";
		Ads.restoreHidden();
		g_enableScroll(true)
	}
	function k() {
		d.style.display = m.style.display = h[f].style.display = ""
	}
	this.setSize = function (p, q) {
		n.style.visibility = "hidden";
		n.style.width = p + "px";
		n.style.height = q + "px";
		n.style.left = -parseInt(p / 2) + "px";
		n.style.top = -parseInt(q / 2) + "px";
		n.style.visibility = "visible"
	};
	this.show = function (t, s, p) {
		c = s || {};
		Ads.hideAll();
		b();
		o();
		if (f != t && h[f] != null) {
			h[f].style.display = "none"
		}
		f = t;
		var r = 0,
		q;
		if (h[t] == null) {
			r = 1;
			q = creatElem("div");
			append(n, q);
			h[t] = q
		} else {
			q = h[t]
		}
		if (c.onShow) {
			c.onShow(q, r, p)
		}
		a(1234);
		k();
		g_enableScroll(false)
	};
	this.reveal = function () {
		k()
	};
	this.hide = function () {
		e()
	};
	this.isVisible = function () {
		return (d && d.style.display != "none")
	}
};
var ModelViewer = new
function () {
	var d, x, z = [],
	h,
	u,
	n,
	w,
	g,
	p,
	q,
	e,
	m,
	s,
	l,
	o = [{
		id: 10,
		name: g_chr_races[10],
		model: "bloodelf"
	},
	{
		id: 11,
		name: g_chr_races[11],
		model: "draenei"
	},
	{
		id: 3,
		name: g_chr_races[3],
		model: "dwarf"
	},
	{
		id: 7,
		name: g_chr_races[7],
		model: "gnome"
	},
	{
		id: 1,
		name: g_chr_races[1],
		model: "human"
	},
	{
		id: 4,
		name: g_chr_races[4],
		model: "nightelf"
	},
	{
		id: 2,
		name: g_chr_races[2],
		model: "orc"
	},
	{
		id: 6,
		name: g_chr_races[6],
		model: "tauren"
	},
	{
		id: 8,
		name: g_chr_races[8],
		model: "troll"
	},
	{
		id: 5,
		name: g_chr_races[5],
		model: "scourge"
	}],
	i = [{
		id: 1,
		name: LANG.female,
		model: "female"
	},
	{
		id: 0,
		name: LANG.male,
		model: "male"
	}];
	function v() {
		u.style.display = "none";
		n.style.display = "none";
		w.style.display = "none"
	}
	function a() {
		var A, B;
		if (p.style.display == "") {
			A = (p.selectedIndex >= 0 ? p.options[p.selectedIndex].value: "")
		} else {
			A = (q.selectedIndex >= 0 ? q.options[q.selectedIndex].value: "")
		}
		B = (e.selectedIndex >= 0 ? e.options[e.selectedIndex].value: 0);
		return {
			r: A,
			s: B
		}
	}
	function c(A, B) {
		return (!isNaN(A) && A > 0 && in_array(o, A, function (C) {
			return C.id
		}) != -1 && !isNaN(B) && B >= 0 && B <= 1)
	}
	function t() {
		if (s == 2 && !f()) {
			s = 0
		}
		if (s == 2) {
			var D = '<object id="3dviewer-plugin" type="application/x-zam-wowmodel" width="600" height="400"><param name="model" value="' + d + '" /><param name="modelType" value="' + x + '" /><param name="contentPath" value="http://static.wowhead.com/modelviewer/" />';
			if (x == 16 && z.length) {
				D += '<param name="equipList" value="' + z.join(",") + '" />'
			}
			D += '<param name="bgColor" value="#181818" /></object>';
			w.innerHTML = D;
			w.style.display = ""
		} else {
			if (s == 1) {
				var D = '<applet id="3dviewer-java" code="org.jdesktop.applet.util.JNLPAppletLauncher" width="600" height="400" archive="http://static.wowhead.com/modelviewer/applet-launcher.jar,http://download.java.net/media/jogl/builds/archive/jsr-231-webstart-current/jogl.jar,http://download.java.net/media/gluegen/webstart/gluegen-rt.jar,http://download.java.net/media/java3d/webstart/release/vecmath/latest/vecmath.jar,http://static.wowhead.com/modelviewer/ModelView510.jar"><param name="jnlp_href" value="http://static.wowhead.com/modelviewer/ModelView.jnlp"><param name="codebase_lookup" value="false"><param name="cache_option" value="no"><param name="subapplet.classname" value="modelview.ModelViewerApplet"><param name="subapplet.displayname" value="Model Viewer Applet"><param name="progressbar" value="true"><param name="jnlpNumExtensions" value="1"><param name="jnlpExtension1" value="http://download.java.net/media/jogl/builds/archive/jsr-231-webstart-current/jogl.jnlp"><param name="contentPath" value="http://static.wowhead.com/modelviewer/"><param name="model" value="' + d + '"><param name="modelType" value="' + x + '">';
				if (x == 16 && z.length) {
					D += '<param name="equipList" value="' + z.join(",") + '">'
				}
				D += '<param name="bgColor" value="#181818"></applet>';
				n.innerHTML = D;
				n.style.display = ""
			} else {
				var G = {
					model: d,
					modelType: x,
					contentPath: "http://static.wowhead.com/modelviewer/",
					blur: (OS.mac ? "0": "1")
				};
				var F = {
					quality: "high",
					allowscriptaccess: "always",
					menu: false,
					bgcolor: "#181818"
				};
				var A = {};
				if (x == 16 && z.length) {
					G.equipList = z.join(",")
				}
				swfobject.embedSWF("http://static.wowhead.com/modelviewer/ModelView.swf", "dsjkgbdsg2346", "600", "400", "10.0.0", "http://static.wowhead.com/modelviewer/expressInstall.swf", G, F, A);
				u.style.display = ""
			}
		}
		var H = a(),
		C = H.r,
		E = H.s;
		if (!h.noPound) {
			var B = "#modelviewer";
			if (C && E) {
				B += ":" + C + "+" + E
			} else {
				B += ":"
			}
			if (h.extraPound != null) {
				B += ":" + h.extraPound
			}
			location.replace(rtrim(B, ":"))
		}
	}
	function b() {
		var E = a(),
		B = E.r,
		C = E.s;
		if (!B) {
			if (e.style.display == "none") {
				return
			}
			e.style.display = "none";
			d = z[1];
			switch (h.slot) {
			case 1:
				x = 2;
				break;
			case 3:
				x = 4;
				break;
			default:
				x = 1
			}
		} else {
			if (e.style.display == "none") {
				e.style.display = ""
			}
			if (q.style.display == "") {
				sc("modelviewer_model_race", 7, B, "/", ".wowhead.com");
				sc("modelviewer_model_sex", 7, C, "/", ".wowhead.com")
			}
			var E = function (F) {
				return F.id
			};
			var D = in_array(o, B, E);
			var A = in_array(i, C, E);
			if (D != -1 && A != -1) {
				d = o[D].model + i[A].model;
				x = 16
			}
		}
		v();
		t()
	}
	function j(A) {
		if (A == s) {
			return
		}
		g_setSelectedLink(this, "modelviewer-mode");
		v();
		if (s == null) {
			s = A;
			setTimeout(t, 50)
		} else {
			s = A;
			sc("modelviewer_mode", 7, A, "/", ".wowhead.com");
			t()
		}
	}
	function r(F, A) {
		var H = -1,
		I = -1,
		B, E;
		if (A.race != null && A.sex != null) {
			H = A.race;
			I = A.sex;
			g.style.display = "none";
			F = 0
		} else {
			g.style.display = ""
		}
		if (H == -1 && I == -1) {
			if (location.hash) {
				var G = location.hash.match(/modelviewer:([0-9]+)\+([0-9]+)/);
				if (G != null) {
					if (c(G[1], G[2])) {
						H = G[1];
						I = G[2];
						e.style.display = ""
					}
				}
			}
		}
		if (F) {
			B = p;
			E = 1;
			p.style.display = "";
			p.selectedIndex = -1;
			q.style.display = "none";
			if (I == -1) {
				e.style.display = "none"
			}
		} else {
			if (H == -1 && I == -1) {
				var L = parseInt(gc("modelviewer_model_race")),
				D = parseInt(gc("modelviewer_model_sex"));
				if (c(L, D)) {
					H = L;
					I = D
				} else {
					H = 10;
					I = 1
				}
			}
			B = q;
			E = 0;
			p.style.display = "none";
			q.style.display = "";
			e.style.display = ""
		}
		if (I != -1) {
			e.selectedIndex = I
		}
		if (H != -1 && I != -1) {
			var K = function (M) {
				return M.id
			};
			var J = in_array(o, H, K);
			var C = in_array(i, I, K);
			if (J != -1 && C != -1) {
				d = o[J].model + i[C].model;
				x = 16;
				J += E;
				if (Browser.opera) {
					setTimeout(function () {
						B.selectedIndex = J
					},
					1)
				} else {
					B.selectedIndex = J
				}
				e.selectedIndex = C
			}
		}
	}
	function f() {
		var B = navigator.mimeTypes["application/x-zam-wowmodel"];
		if (B) {
			var A = B.enabledPlugin;
			if (A) {
				return true
			}
		}
		return false
	}
	function k() {
		if (!h.noPound) {
			if (m && m.indexOf("modelviewer") == -1) {
				location.replace(m)
			} else {
				location.replace("#.")
			}
		}
		if (h.onHide) {
			h.onHide()
		}
	}
	function y(M, H, E) {
		var D, B;
		Lightbox.setSize(620, 452);
		if (H) {
			M.className = "modelviewer";
			var L = creatElem("div");
			u = creatElem("div");
			n = creatElem("div");
			w = creatElem("div");
			var K = creatElem("div");
			K.id = "dsjkgbdsg2346";
			append(u, K);
			L.className = "modelviewer-screen";
			u.style.display = n.style.display = w.style.display = "none";
			append(L, u);
			append(L, n);
			append(L, w);
			append(M, L);
			D = creatElem("a"),
			B = creatElem("a");
			D.className = "modelviewer-help";
			D.href = "?help=modelviewer";
			D.target = "_blank";
			append(D, creatElem("span"));
			B.className = "modelviewer-close";
			B.href = "javascript:;";
			B.onclick = Lightbox.hide;
			append(B, creatElem("span"));
			append(M, B);
			append(M, D);
			var J = creatElem("div"),
			C = creatElem("span"),
			D = creatElem("a"),
			B = creatElem("a");
			J.className = "modelviewer-quality";
			D.href = B.href = "javascript:;";
			append(D, ct("Flash"));
			append(B, ct("Java"));
			D.onclick = j.bind(D, 0);
			B.onclick = j.bind(B, 1);
			append(C, D);
			append(C, ct(" " + String.fromCharCode(160)));
			append(C, B);
			if (f()) {
				var A = creatElem("a");
				A.href = "javascript:;";
				append(A, ct("Plugin"));
				A.onclick = j.bind(A, 2);
				append(C, ct(" " + String.fromCharCode(160)));
				append(C, A)
			}
			append(J, creatElem("div"));
			append(J, C);
			append(M, J);
			g = creatElem("div");
			g.className = "modelviewer-model";
			var K = function (O, N) {
				return strcmp(O.name, N.name)
			};
			o.sort(K);
			i.sort(K);
			p = creatElem("select");
			q = creatElem("select");
			e = creatElem("select");
			p.onchange = q.onchange = e.onchange = b;
			append(p, creatElem("option"));
			for (var G = 0, I = o.length; G < I; ++G) {
				var F = creatElem("option");
				F.value = o[G].id;
				append(F, ct(o[G].name));
				append(p, F)
			}
			for (var G = 0, I = o.length; G < I; ++G) {
				var F = creatElem("option");
				F.value = o[G].id;
				append(F, ct(o[G].name));
				append(q, F)
			}
			for (var G = 0, I = i.length; G < I; ++G) {
				var F = creatElem("option");
				F.value = i[G].id;
				append(F, ct(i[G].name));
				append(e, F)
			}
			e.style.display = "none";
			append(g, creatElem("div"));
			append(g, p);
			append(g, q);
			append(g, e);
			append(M, g);
			J = creatElem("div");
			J.className = "clear";
			append(M, J)
		}
		switch (E.type) {
		case 1:
			g.style.display = "none";
			if (E.humanoid) {
				x = 32
			} else {
				x = 8
			}
			d = E.displayId;
			break;
		case 2:
			g.style.display = "none";
			x = 64;
			d = E.displayId;
			break;
		case 3:
			z = [E.slot, E.displayId];
			if (in_array([4, 5, 6, 7, 8, 9, 10, 16, 19, 20], E.slot) != -1) {
				r(0, E)
			} else {
				switch (E.slot) {
				case 1:
					x = 2;
					break;
				case 3:
					x = 4;
					break;
				default:
					x = 1
				}
				d = E.displayId;
				r(1, E)
			}
			break;
		case 4:
			z = E.equipList;
			r(0, E)
		}
		if (H) {
			if (gc("modelviewer_mode") == "2" && f()) {
				A.onclick()
			} else {
				if (gc("modelviewer_mode") == "1") {
					B.onclick()
				} else {
					D.onclick()
				}
			}
		} else {
			v();
			setTimeout(t, 1)
		}
		m = location.hash
	}
	this.checkPound = function () {
		if (location.hash && location.hash.indexOf("#modelviewer") == 0) {
			if (l != null) {
				var A = location.hash.split(":");
				if (A.length == 3 && A[2]) {
					l(A[2])
				}
			} else {
				var B = getElement("dsgndslgn464d");
				if (B) {
					B.onclick()
				}
			}
		}
	};
	this.addExtraPound = function (A) {
		l = A
	};
	this.show = function (A) {
		h = A;
		Lightbox.show("modelviewer", {
			onShow: y,
			onHide: k
		},
		A)
	};
	DomContentLoaded.addEvent(this.checkPound)
};
var g_screenshots = {};
var ScreenshotViewer = new
function () {
	var z, k, e, y, B, c, o, q = 0,
	u, b, n, i, w, x, t, h, v, j;
	function g(C) {
		var F = z[k];
		var D = Math.max(50, Math.min(618, g_getWindowSize().h - 72 - C));
		if (q != 1 || F.id || F.resize) {
			c = Math.min(772 / F.width, 618 / F.height);
			B = Math.min(772 / F.width, D / F.height)
		} else {
			c = B = 1
		}
		if (c > 1) {
			c = 1
		}
		if (B > 1) {
			B = 1
		}
		e = Math.round(B * F.width);
		y = Math.round(B * F.height);
		var E = Math.max(480, e);
		Lightbox.setSize(E + 20, y + 52 + C);
		if (Browser.ie6) {
			n.style.width = E + "px";
			if (z.length > 1) {
				w.style.height = x.style.height = y + "px"
			} else {
				t.style.height = y + "px"
			}
		}
		if (C) {
			i.firstChild.width = e;
			i.firstChild.height = y
		}
	}
	function d(E) {
		var D = z[E],
		C = "#screenshots:";
		if (q == 0) {
			C += "id=" + D.id
		} else {
			C += u + ":" + (E + 1)
		}
		return C
	}
	function s(F) {
		if (F && (B == c) && g_getWindowSize().h > b.offsetHeight) {
			return
		}
		b.style.visibility = "hidden";
		var C = z[k],
		I = (C.width > 772 || C.height > 618);
		g(0);
		var E = (C.url ? C.url: "http://www.topwow.top/screenshots/" + (I ? "big/": "thumb/") + C.id + ".webp");
		var J = '<img src="' + E + '" width="' + e + '" height="' + y + '"';
		if (Browser.ie6) {
			J += ' galleryimg="no"'
		}
		J += ">";
		i.innerHTML = J;
		if (!F) {
			if (C.url) {
				h.href = E
			} else {
				h.href = "http://www.topwow.top/screenshots/big/" + C.id + ".webp"
			}
			if (!C.user && typeof g_pageInfo == "object") {
				C.user = g_pageInfo.username
			}
			var L = (C.date && C.user),
			K = (z.length > 1);
			if (L) {
				var H = new Date(C.date),
				N = (g_serverTime - H) / 1000;
				var M = v.firstChild.childNodes[1];
				M.href = "?user=" + C.user;
				M.innerHTML = C.user;
				var P = v.firstChild.childNodes[3];
				while (P.firstChild) {
					de(P.firstChild)
				}
				Listview.funcBox.coFormatDate(P, N, H);
				v.firstChild.style.display = ""
			} else {
				v.firstChild.style.display = "none"
			}
			var P = v.childNodes[1];
			if (K) {
				var O = "";
				if (L) {
					O += LANG.dash
				}
				O += (k + 1) + LANG.lvpage_of + z.length;
				P.innerHTML = O;
				P.style.display = ""
			} else {
				P.style.display = "none"
			}
			v.style.display = (L || K ? "": "none");
			if (g_getLocale(true) != 0 && C.caption) {
				C.caption = ""
			}
			var D = (C.caption != null && C.caption.length);
			var G = (C.subject != null && C.subject.length && C.type && C.typeId);
			if (D || G) {
				var J = "";
				if (G) {
					J += LANG.types[C.type][0] + LANG.colon;
					J += '<a href="http://www.topwow.top/' + g_types[C.type] + "-" + C.typeId + '.html">';
					J += C.subject;
					J += "</a>"
				}
				if (D) {
					if (G) {
						J += LANG.dash
					}
					J += C.caption
				}
				j.innerHTML = J;
				j.style.display = ""
			} else {
				j.style.display = "none"
			}
			if (z.length > 1) {
				w.href = d(r( - 1));
				x.href = d(r(1));
				w.style.display = x.style.display = "";
				t.style.display = "none"
			} else {
				w.style.display = x.style.display = "none";
				t.style.display = ""
			}
			location.replace(d(k))
		}
		Lightbox.reveal();
		if (j.offsetHeight > 18) {
			g(j.offsetHeight - 18)
		}
		b.style.visibility = "visible"
	}
	function r(C) {
		var D = k;
		D += C;
		if (D < 0) {
			D = z.length - 1
		} else {
			if (D >= z.length) {
				D = 0
			}
		}
		return D
	}
	function a() {
		k = r( - 1);
		s();
		return false
	}
	function p() {
		k = r(1);
		s();
		return false
	}
	function m(C) {
		C = normalEvent(C);
		switch (C.keyCode) {
		case 37:
			a();
			break;
		case 39:
			p();
			break
		}
	}
	function f() {
		s(1)
	}
	function l() {
		if (z.length > 1) {
			dE(document, "keyup", m)
		}
		if (o && q == 0) {
			if (o.indexOf(":id=") != -1) {
				o = "#screenshots"
			}
			location.replace(o)
		} else {
			location.replace("#.")
		}
	}
	function A(C, G, D) {
		if (typeof D.screenshots == "string") {
			z = g_screenshots[D.screenshots];
			q = 1;
			u = D.screenshots
		} else {
			z = D.screenshots;
			q = 0;
			u = null
		}
		b = C;
		k = 0;
		if (D.pos && D.pos >= 0 && D.pos < z.length) {
			k = D.pos
		}
		if (G) {
			C.className = "screenshotviewer";
			n = creatElem("div");
			n.className = "screenshotviewer-screen";
			w = creatElem("a");
			x = creatElem("a");
			w.className = "screenshotviewer-prev";
			x.className = "screenshotviewer-next";
			w.href = "javascript:;";
			x.href = "javascript:;";
			var I = creatElem("span");
			append(I, creatElem("b"));
			append(w, I);
			var I = creatElem("span");
			append(I, creatElem("b"));
			append(x, I);
			w.onclick = a;
			x.onclick = p;
			t = creatElem("a");
			t.className = "screenshotviewer-cover";
			t.href = "javascript:;";
			t.onclick = Lightbox.hide;
			var I = creatElem("span");
			append(I, creatElem("b"));
			append(t, I);
			if (Browser.ie6) {
				ns(w);
				ns(x);
				w.onmouseover = x.onmouseover = t.onmouseover = function () {
					this.firstChild.style.display = "block"
				};
				w.onmouseout = x.onmouseout = t.onmouseout = function () {
					this.firstChild.style.display = ""
				}
			}
			append(n, w);
			append(n, x);
			append(n, t);
			i = creatElem("div");
			append(n, i);
			append(C, n);
			var H = creatElem("a");
			H.className = "screenshotviewer-close";
			H.href = "javascript:;";
			H.onclick = Lightbox.hide;
			append(H, creatElem("span"));
			append(C, H);
			h = creatElem("a");
			h.className = "screenshotviewer-original";
			h.href = "javascript:;";
			h.target = "_blank";
			append(h, creatElem("span"));
			append(C, h);
			v = creatElem("div");
			v.className = "screenshotviewer-from";
			var E = creatElem("span");
			append(E, ct(LANG.lvscreenshot_from));
			append(E, creatElem("a"));
			append(E, ct(" "));
			append(E, creatElem("span"));
			append(v, E);
			append(v, creatElem("span"));
			append(C, v);
			j = creatElem("div");
			j.className = "screenshotviewer-caption";
			append(C, j);
			var F = creatElem("div");
			F.className = "clear";
			append(C, F)
		}
		o = location.hash;
		if (z.length > 1) {
			aE(document, "keyup", m)
		}
		s()
	}
	this.checkPound = function () {
		if (location.hash && location.hash.indexOf("#screenshots") == 0) {
			if (!g_listviews.screenshots) {
				var D = location.hash.split(":");
				if (D.length == 3) {
					var E = g_screenshots[D[1]],
					C = parseInt(D[2]);
					if (E && C >= 1 && C <= E.length) {
						ScreenshotViewer.show({
							screenshots: D[1],
							pos: C - 1
						})
					}
				}
			}
		}
	};
	this.show = function (C) {
		Lightbox.show("screenshotviewer", {
			onShow: A,
			onHide: l,
			onResize: f
		},
		C)
	};
	DomContentLoaded.addEvent(this.checkPound)
};
var Ads = {
	dimensions: {
		leaderboard: [728, 90],
		skyscraper: [160, 600],
		medrect: [300, 250]
	},
	spots: {
		leaderboard: ["header-ad"],
		skyscraper: ["sidebar-ad"],
		medrect: ["infobox-ad", "blog-sidebar-medrect", "talentcalc-sidebar-ad", "pl-rightbar-ad", "contribute-ad", "profiler-inventory-medrect", "profiler-reputation-medrect", "profiler-achievements-medrect"]
	},
	hidden: [],
	removed: false,
	install: function () {
		for (var f in Ads.dimensions) {
			var c = Ads.spots[f],
			e = false;
			for (var b = 0, a = c.length; b < a; ++b) {
				if (f == "medrect" && location.href.indexOf("?profile") != -1) {
					e = true
				}
				var d = getElement(c[b]);
				if (d) {
					if (!e) {
						Ads.fillSpot(f, d);
						e = true
					}
				}
			}
		}
	},
	fillSpot: function (c, b) {
		if (Ads.removed) {
			de(b);
			return
		}
		var a = creatElem("iframe");
		a.width = Ads.dimensions[c][0];
		a.height = Ads.dimensions[c][1];
		a.frameBorder = 0;
		a.scrolling = "no";
		a.src = "http://static.wowhead.com/ads/dynamic/" + c + ".html?4";
		append(b, a)
	},
	removeAll: function () {
		for (var e in Ads.dimensions) {
			var c = Ads.spots[e];
			for (var b = 0, a = c.length; b < a; ++b) {
				var d = getElement(c[b]);
				if (d) {
					de(d)
				}
			}
		}
		Ads.removed = true
	},
	hide: function (b) {
		var a = getElemTag(b, "iframe")[0];
		if (a) {
			a.style.display = "none";
			Ads.hidden.push(b)
		}
	},
	hideAll: function () {
		for (var e in Ads.dimensions) {
			var c = Ads.spots[e];
			for (var b = 0, a = c.length; b < a; ++b) {
				var d = getElement(c[b]);
				if (d && !Ads.isHidden(d)) {
					Ads.hide(d)
				}
			}
		}
	},
	isHidden: function (b) {
		var a = getElemTag(b, "iframe")[0];
		if (a) {
			return a.style.display == "none"
		}
		return false
	},
	intersect: function (g, e) {
		var b;
		for (var h in Ads.dimensions) {
			var d = Ads.spots[h];
			for (var c = 0, a = d.length; c < a; ++c) {
				var f = getElement(d[c]);
				if (f) {
					if (!Ads.isHidden(f)) {
						coords = ac(f);
						b = g_createRect(coords.x, coords.y, f.offsetWidth, f.offsetHeight);
						if (g_intersectRect(g, b)) {
							if (e) {
								Ads.hide(f)
							}
							return true
						}
					}
				}
			}
		}
		return false
	},
	restoreHidden: function () {
		if (Ads.hidden.length) {
			for (var c = 0, a = Ads.hidden.length; c < a; ++c) {
				var d = Ads.hidden[c],
				b = getElemTag(d, "iframe")[0];
				if (b) {
					b.style.display = ""
				}
			}
			Ads.hidden = []
		}
	}
};
DomContentLoaded.addEvent(Ads.install);

function filterQuery(paraCount,type,val) {
	var url = window.location.href;
	var test = url.lastIndexOf('.html');
	if(test!=-1) {
		url = url.substring(0,test);	
	}

	var paramPos = url.lastIndexOf('-');
	var uri,file;
	if (paramPos==-1) {
		uri = url+'-';
		file = 'n';
	} else {
		uri = url.substring(0,paramPos+1);
		file = url.substring(paramPos+1);
	}


	var arr = file.split('.');

	var offset = paraCount - arr.length + 1;
	if(offset<0) {
		arr[paraCount] = val;
	} else {
		for(var i=0;i<offset;i++){
			arr.push('n');
		}
		arr[arr.length-1]=val;
	}

	arr.push('html');

	location.href=uri+arr.join('.');
}
/*class, subclass, type, allowClass, allowRace, bond, quality, nature, resistance, minLvl*/
function filterItem(type,val) {	
	switch(type){
		case 'allowClass':return filterQuery(3,type,val);
		case 'allowRace':return filterQuery(4,type,val);		
		case 'bond':return filterQuery(5,type,val);
		case 'quality':return filterQuery(6,type,val);
		case 'nature':return filterQuery(7,type,val);
		case 'resistance':return filterQuery(8,type,val);
		case 'minLvl':return filterQuery(9,type,val);
	}
}
/*Type, ZoneOrSort, difficulty, side, reward, job, minLvl, maxLvl*/
function filterQuest(type,val) {	
	switch(type){
		case 'difficulty':return filterQuery(2,type,val);
		case 'side':return filterQuery(3,type,val);
		case 'reward':return filterQuery(4,type,val);
		case 'job':return filterQuery(5,type,val);
		case 'minLvl':return filterQuery(6,type,val);
		case 'maxLvl':return filterQuery(7,type,val);
	}
}
/*Type, trainerType, trainerClass, trainerRace, trainerSpell, minLvl*/
function filterNpcs(type,val) {	
	switch(type){
		case 'side':return filterQuery(1,type,val);
		case 'weaponType':return filterQuery(2,type,val);
		case 'trainerType':return filterQuery(3,type,val);
		case 'trainerClass':return filterQuery(4,type,val);
		case 'trainerRace':return filterQuery(5,type,val);
		case 'trainerSpell':return filterQuery(6,type,val);
		case 'npc_flags':return filterQuery(7,type,val);
		case 'minLvl':return filterQuery(8,type,val);
		case 'reqskill':return filterQuery(9,type,val);
	}
}
/*Type, trainerType, trainerClass, trainerRace, trainerSpell, minLvl*/
function filterItemset(type,val) {
	switch(type){
		case 'allowClass':return filterQuery(0,type,val);
		case 'tname':return filterQuery(1,type,val);
		case 'tclass':return filterQuery(2,type,val);
	}
}

