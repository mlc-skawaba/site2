/**
 * mjl.js
 * MITSUE-LINKS JavaScript Library
 * Version 2.2.8
 * Copyright (C) 2008-2013 MITSUE-LINKS
 * @source: http://www.mitsue.co.jp/knowledge/mjl.html
 *
 * @license
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 */
!function(t){if(t.MJL&&"number"!=typeof t.MJL.nodeType)throw new Error("MJL "+t.MJL.version+" has already been defined");var e=t.document,i=e.documentElement,n=e.createElement("div"),s=10,r={},a=[],o="[ \\t\\n\\f\\r]+",h=new RegExp(o,"g"),l=new RegExp("^"+o+"|"+o+"$","g"),c="[\\u0009-\\u000D\\u0020\\u00A0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF]+",u=new RegExp("^"+c+"|"+c+"$","g"),f="(?:^|"+o+")",d="(?:(?="+o+")|$)",p=t.MJL={version:"2.2.8"};p.ua=function(){var i="ActiveXObject"in t&&"function"==typeof t.ActiveXObject,s=n.nodeName,r=function(t,i){if(i||"documentMode"in e&&"number"==typeof e.documentMode)return"trident";if("opera"in t&&!t.opera.nodeName)return"opera";if("defaultstatus"in t&&!t.defaultstatus.nodeName)return"webkit";if("XULElement"in t&&!t.XULElement.nodeType||"CSS"in t&&"function"==typeof t.CSS.supports&&t.CSS.supports("-moz-binding","url('http://example.com/#foo')"))return"gecko";var n=t.navigator.userAgent.toLowerCase();return-1!==n.indexOf("trident")?"trident":-1!==n.indexOf("webkit")?"webkit":-1!==n.indexOf("firefox")?"gecko":"unknown"}(t,i),a={name:r,gecko:!1,opera:!1,webkit:!1,trident:!1,unknown:!1,v8:"chrome"in t?"localStorage"in t?4:3:0,quirks:"BackCompat"===e.compatMode,xml:s===s.toLowerCase(),version:0,cssPrefix:"",aria:!0,activex:i};return a[r]=!0,a.version=a.opera?Number(t.opera.version()):a.webkit?t.Worker?4:e.evaluate?3:2:a.gecko?e.elementFromPoint?3:2:a.trident?e.documentMode||("maxHeight"in n.style?7:6):0,a.cssPrefix=a.opera?"O":a.trident?"ms":a.gecko?"Moz":a.webkit?"webkit":"",a.aria=!(a.trident&&a.version<8||a.opera&&a.version<9.6),a}(),p.trim=function(){function t(t,i){var n=e[i&&i in e?i:"def"],s=n.cache,r=s[t];return r||(s[t]=r=t.replace(n.cond,"")),r}var e={def:{cond:l,cache:{}},full:{cond:u,cache:{}}};for(var i in e)t[i]=i;return t}(),p.isObject=function(t){var e=typeof t;return("object"===e||"function"===e)&&null!==t},p.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return t instanceof Array},p.isSameNode=e.isSameNode?function(t,e){return t===e}:function(t,e){return t==e},p.toCamelCase=function(t){return t.charAt(0).toUpperCase()+t.substring(1)},p.convArray=function(){var t=p.ua.trident&&p.ua.version<9||p.ua.opera&&p.ua.version<9.5?function(t){var e,i=t.length,n=new Array(i);for(e=0;i>e;e++)n[e]=t[e];return n}:function(t){return Array.prototype.slice.call(t)};return function(e){return p.isArray(e)?e:p.isObject(e)&&e.length?t(e):[]}}(),p.convNode=function(t){n.innerHTML=t||"";var i=n.firstChild,s=null;if(i)if(1<n.childNodes.length)for(s=e.createDocumentFragment();i;)s.appendChild(i),i=n.firstChild;else s=i;return s},p.bind=function(t,e){var i=2<arguments.length?p.convArray(arguments).slice(2):[];return function(){return t.apply(e,0<arguments.length?i.concat(p.convArray(arguments)):i)}},p.getCDATA=function(){var t={};return function(e){var i=t[e];if(!i){if(!p.trim(e))throw new Error("CDATA value only has space characters");var n,s,r=p.trim(e.replace(h," ")),a=r.split(h),o=a.length,l=[],c={};for(n=0;o>n;n++)s=a[n],s in c||(l.push(s),c[s]=s);t[e]=i={str:l.join(" "),items:l,assoc:c,cond:new RegExp(f+"(?:"+l.join("|")+")"+d,"g")},i.str in t||(t[i.str]=i)}return i}}(),p.getHash=function(){var e=p.ua.gecko?"href":"hash";return function(i){var n=p.trim("string"==typeof i?i:(i?"window"in i?i.location:i:t.location)[e]||""),s=n.indexOf("#");return 0>s?"":n.substring(s+1)}}(),p.getName=p.ua.xml?p.ua.opera?function(t){var e=t.localName;return e&&!t.namespaceURI&&(e=e.toLowerCase()),e||t.nodeName}:function(t){return t.localName||t.nodeName}:function(){var t={};return function(e){var i=e.nodeName,n=t[i];return n||(t[i]=n=e.nodeName.toLowerCase()),n}}(),p.getData=function(){var i="data-MJL-id-"+(new Date).getTime(),n=0,s={};return function(r){var a=p.isSameNode(r,t)?"window":p.isSameNode(r,e)?"document":null,o=null;return(a||1===r.nodeType)&&(a=a||(i in r?r[i]:r[i]=n++),a in s||(s[a]={}),o=s[a]),o}}(),p.hasClassName=function(t,e){var i,n="string"==typeof t?t:t.className,s=!1;return n&&(i=p.getCDATA(e),s=n===i.str||i.items.length<=(n.match(i.cond)||a).length),s},p.addClassName=function(t,e){if(!p.hasClassName(t,e)){var i,n=t.className,s=n?[n]:[],r=p.getCDATA(e).items,a=r.length;for(i=0;a>i;i++)p.hasClassName(n,r[i])||s.push(r[i]);0<s.length&&(t.className=s.join(" "))}},p.removeClassName=function(){var t=p.ua.trident&&p.ua.version<8?"className":"class";return function(e,i){var n,s=e.className;s&&(n=p.trim(s.replace(p.getCDATA(i).cond," ")),s!==n&&(e.className=n,n||e.removeAttribute(t)))}}(),p.getElementsByXPath=e.evaluate?function(){var t={},n=null,s=function(t){var n=e.createNSResolver((t.ownerDocument||t).documentElement);return function(e){var s,r=t.namespaceURI||i.namespaceURI||"";return"x"===e&&(s=r),s||n.lookupNamespaceURI(e)||r}},r=p.ua.opera&&p.ua.version<11.6?function(){var t=/(^|[^x])x:/g,e={};return function(i){var n=e[i];return n||(e[i]=n=i.replace(t,"$1")),n}}():void 0;return function(i,a){var o=t[a];o||(t[a]=o=e.createExpression(r?r(a):a,s(i)));var h,l=n=o.evaluate(i,7,n),c=l.snapshotLength,u=new Array(c);for(h=0;c>h;h++)u[h]=l.snapshotItem(h);return u}}():void 0,p.getElementsByClassName=n.getElementsByClassName?function(t,e){return p.convArray(t.getElementsByClassName(p.getCDATA(e).str))}:n.querySelectorAll?function(){var t={};return function(e,i){var n=t[i];return n||(t[i]=n="."+p.getCDATA(i).items.join(".")),p.convArray(e.querySelectorAll(n))}}():p.getElementsByXPath?function(){var t={};return function(e,i){var n,s,r,a,o=t[i];if(!o){for(n=p.getCDATA(i).items,s=n.length,r=new Array(s),a=0;s>a;a++)r[a]='[contains(concat(" ",@class," ")," '+n[a]+' ")]';t[i]=o=".//*"+r.join("")}return p.getElementsByXPath(e,o)}}():function(t,e){var i,n,s=t.getElementsByTagName("*"),r=s.length,a=[];for(n=0;r>n;n++)i=s[n],1===i.nodeType&&p.hasClassName(i,e)&&a.push(i);return a},p.getChildElements=p.getElementsByXPath?function(t,e,i){return p.getElementsByXPath(t,i?"./*[not(self::x:"+e+")]":e?"./x:"+e:"./*")}:function(t,e,i){var n=t.firstChild,s=[];if(arguments.length<2)for(;n;)1===n.nodeType&&s.push(n),n=n.nextSibling;else if(e)for(i=!!i;n;)1===n.nodeType&&i!==(e===p.getName(n))&&s.push(n),n=n.nextSibling;return s},p.vp=function(){var t=p.ua.quirks?"body":"documentElement";return{getSize:p.ua.opera&&p.ua.version<9.5?function(){return{width:e.body.clientWidth,height:e.body.clientHeight}}:function(){return{width:e[t].clientWidth,height:e[t].clientHeight}}}}(),p.event={add:function(e,i,n,s){var r=this._wrapAfterCare(n);return s=!0===s,this._origins[i]?r=this._addOrigin(e,i,r):(e.addEventListener?e.addEventListener(i,r,s):e.attachEvent&&e.attachEvent("on"+i,r),t!==e&&"unload"!==i&&this._stack.push([e,i,r,s])),r},remove:function(t,e,i,n){var s=i;return n=!0===n,this._origins[e]?s=this._removeOrigin(t,e,i,n):t.removeEventListener?t.removeEventListener(e,i,n):t.detachEvent&&t.detachEvent("on"+e,i),s},dispatch:e.createEvent?function(t,i,n){n||(n=this._TYPES[i]||this._TYPES.DEFAULT,"function"==typeof n&&(n=n(t)));var s=e.createEvent(n.type);return s[n.init].apply(s,[i].concat(n.args)),this._origins[i]?this._dispatchOrigin(t,i,s):t.dispatchEvent(s)}:e.fireEvent?function(t,i,n){n||(n=this._TYPES[i]||this._TYPES.DEFAULT,"function"==typeof n&&(n=n(t)));var s=e.createEventObject();return s.type=i,s.cancelBubble=!1===n.args[0],this._origins[i]?this._dispatchOrigin(t,i,s):t.fireEvent("on"+i,s)}:void 0,preventDefault:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},stopPropagation:function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},cancel:function(t){this.preventDefault(t),this.stopPropagation(t)},getTarget:function(t){return t.target||t.srcElement||null},bind:function(e,i){var n=2<arguments.length?p.convArray(arguments).slice(2):[];return function(s){return!s&&t.event&&(s=t.event),e.apply(i,[s].concat(n))}},_stack:[],_TYPES:function(){var e="UIEvent",i="Event",n="MouseEvent",s="initUIEvent",r="initEvent",a="initMouseEvent";return{DEFAULT:{type:i,init:r,args:[!0,!0]},focus:{type:e,init:s,args:[!1,!1,t,0]},blur:{type:e,init:s,args:[!1,!1,t,0]},load:{type:i,init:r,args:[!1,!1]},unload:{type:i,init:r,args:[!1,!1]},abort:{type:i,init:r,args:[!0,!1]},error:{type:i,init:r,args:[!0,!1]},select:{type:i,init:r,args:[!0,!1]},change:{type:i,init:r,args:[!0,!1]},resize:{type:i,init:r,args:[!0,!1]},scroll:{type:i,init:r,args:[!1,!1]},click:{type:n,init:a,args:[!0,!0,t,1,0,0,0,0,!1,!1,!1,!1,0,null]},mousedown:{type:n,init:a,args:[!0,!0,t,1,0,0,0,0,!1,!1,!1,!1,0,null]},mousemove:{type:n,init:a,args:[!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,null]},mouseover:function(e){return{type:n,init:a,args:[!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,e]}},mouseout:function(e){return{type:n,init:a,args:[!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,e]}},mouseup:{type:n,init:a,args:[!0,!0,t,1,0,0,0,0,!1,!1,!1,!1,0,null]}}}(),_wrapAfterCare:function(e){return function(i){!i&&t.event&&(i=t.event),!1===e(i)&&p.event.cancel(i)}},_origins:{resize:p.ua.trident&&p.ua.version<9?{init:function(){function e(){i=!0}var i=!0;t.attachEvent("onresize",function(){i&&(i=!1,p.event.dispatch(t,"resize"),setTimeout(e,0))})}}:t.dispatchEvent?void 0:{init:function(){t.addEventListener("resize",function(){p.event.dispatch(t,"resize")},!1)}},fontresize:{init:function(t,i){var n=this._getOriginData(e,i);p.style.setFontResizeTarget(e.body),n.id=setInterval(function(){p.style.isFontResized()&&p.event.dispatch(e,"fontresize")},1e3)},remove:function(t,e){var i=this._getOriginData(t,e);i.listeners.length<=0&&!isNaN(i.id)&&(clearInterval(i.id),i.id=null)}},forcedraw:{}},_getOriginData:function(t,e){var i=p.getData(t);return i.event||(i.event={}),i.event[e]||(i.event[e]={init:!1,listeners:[]}),i.event[e]},_addOrigin:function(t,e,i){var n=this._getOriginData(t,e),s=this._origins[e],r=n.listeners.length;return n.init||(s&&s.init&&s.init.apply(this,arguments),n.init=!0),s&&s.add&&s.add.apply(this,arguments),n.listeners[r]=i,r},_removeOrigin:function(t,e,i){var n=this._getOriginData(t,e),s=this._origins[e];return n.init&&(s&&s.remove&&s.remove.apply(this,arguments),delete n.listeners[i]),i},_dispatchOrigin:function(t,e,i){var n,s,r=this._getOriginData(t,e),a=r.listeners,o=a.length;for(n=0;o>n;n++)s=a[n],s&&s(i)}},p.ua.opera&&p.ua.version<10&&p.event.add(t,"load",function(){function i(){n=p.vp.getSize(),s=t.innerWidth,r=t.innerHeight}p.ua.version<9.3&&p.event.add(e.body,"resize",function(){return!1});var n,s,r;p.event.add(t,"resize",i),setInterval(function(){var e=p.vp.getSize();s!==t.innerWidth||r!==t.innerHeight||n.width===e.width&&n.height===e.height||p.event.dispatch(t,"resize")},100),i()}),p.event.add(t,"unload",function(){var t,e=p.event._stack,i=e.length;for(t=0;i>t;t++)p.event.remove.apply(p.event,e[t])}),p.style={getSheets:p.ua.webkit?function(){var t=function(t){return p.convArray(e.querySelectorAll('html > head > link[rel="'+t+'"]'))},i=function(){var e,n,s,r,a=t("alternate stylesheet"),o=a.length;for(e=0;o>e;e++)n=a[e],s=n.parentNode,r=n.cloneNode(!0),r.rel="stylesheet",s.replaceChild(r,n),this._disableSheet(r,!0);i=void 0};return function(){i&&i.call(this);var n,s,r,a,o=t("stylesheet"),h=o.length,l=new Array(h);for(n=0;h>n;n++)l[n]=this._disableSheet(o[n]),this._disableSheet(o[n],!1);for(s=p.convArray(e.styleSheets),r=s.length,n=0;h>n;n++)this._disableSheet(o[n],l[n]);for(a=0;r>a;a++)s[a]=s[a].ownerNode;return s}}():p.ua.opera&&p.ua.version<9.5?function(){var t,i=p.convArray(e.styleSheets),n=i.length;for(t=0;n>t;t++)i[t].ownerNode.disabled=i[t].disabled;return i}:function(){return p.convArray(e.styleSheets)},getTitledSheets:function(){var t,e,i=this.getSheets(),n=i.length,s={};for(t=0;n>t;t++)e=i[t].title,e&&(e in s||(s[e]=[]),s[e].push(i[t]));return s},getActiveTitle:"selectedStyleSheetSet"in e&&e.selectedStyleSheetSet?function(){return e.selectedStyleSheetSet}:function(t){var e,i="";t||(t=this.getTitledSheets());for(e in t)if(!this._disableSheet(t[e][0])){i=e;break}return i},switchAlt:function(t){var e,i,n,s,r,a,o=this.getTitledSheets(),h=this.getActiveTitle(o),l=h;if(t&&t in o){if(e=h&&h!==t?o[h]:[],i=e.length,i>0){for(n=o[t],s=n.length,r=0;i>r;r++)this._disableSheet(e[r],!0);for(a=0;s>a;a++)this._disableSheet(n[a],!1)}l=t}return l},getName:p.ua.cssPrefix?function(){var t={};return function(e){var i=t[e];return i||(i=e,i in n.style||(i=p.ua.cssPrefix+p.toCamelCase(e)),i in n.style||(i=e),t[e]=t[i]=i),i}}():function(t){return t},getComputed:function(){var t=e.defaultView,n=/\d\s*px$/i,r=/^\d/,a=p.ua.trident&&p.ua.version<9||p.ua.trident&&p.ua.version>=10&&p.ua.quirks||p.ua.opera&&p.ua.version<9.5?function(t,e,i){return t="client"+t.charAt(0).toUpperCase()+t.substring(1),e="padding"+e,i="padding"+i,function(n){var r,a,o=parseInt(this.getComputed(n,e),s)||0,h=parseInt(this.getComputed(n,i),s)||0;return p.ua.trident&&p.ua.version<8&&!n.currentStyle.hasLayout?(a=n.style.zoom,n.style.zoom=1,r=n[t],n.style.zoom=a):r=p.ua.trident&&p.ua.version>=10&&p.ua.quirks&&("clientWidth"===t||"clientHeight"===t)&&"HTML"===n.tagName?0:n[t],r-=o+h,(r>0?r:0)+"px"}}:p.ua.webkit&&4<=p.ua.version?function(e){return function(i){var n=p.style._getUnitElem();return parseInt(parseInt(t.getComputedStyle(i,null)[e],s)/(parseInt(t.getComputedStyle(n,null).height,s)/1e4),s)}}:function(){return void 0},o={width:a("width","Left","Right"),height:a("height","Top","Bottom"),boxSizing:p.ua.trident&&p.ua.version<8?function(){var t=p.ua.quirks?"border-box":"content-box";return function(){return t}}():void 0,fontSize:p.ua.trident&&p.ua.version<9?function(){var t=/%$/,e={"xx-small":!0,"x-small":!0,small:!0,medium:!0,large:!0,"x-large":!0,"xx-large":!0,larger:!0,smaller:!0,inherit:!0};return function(i){var n="";try{n=i.currentStyle.fontSize}catch(s){}return(!n||n in e||t.test(n))&&(n="1em"),n}}():void 0};return t&&t.getComputedStyle?function(e,i){var n=o[i];return n?n.call(this,e):t.getComputedStyle(e,null)[p.style.getName(i)]}:i.currentStyle?function(t,e){var i,s,a=o[e],h=a?a.call(this,t):t.currentStyle[p.style.getName(e)];return!n.test(h)&&r.test(h)&&(i=t.style.left,s=t.runtimeStyle.left,t.runtimeStyle.left=t.currentStyle.left,t.style.left=h||0,h=t.style.pixelLeft+"px",t.style.left=i,t.runtimeStyle.left=s),h}:void 0}(),setFontResizeTarget:function(t){this._fontTarget&&p.isSameNode(this._fontTarget,t)||(this._fontTarget=t,this.isFontResized())},isFontResized:function(){var t,e,i,n=this._fontTarget,s=!1;return n&&(t=p.getData(n),e=t.beforeFontSize,i=p.style.getComputed(n,"fontSize"),e!==i&&(t.beforeFontSize=i,s=!!e)),s},_fontTarget:null,_disableSheet:function(t,e){var i,n=t.setAttribute;return"boolean"==typeof e&&(n&&(e?t.setAttribute("disabled","disabled"):t.removeAttribute("disabled")),t.disabled=e),n?(i=t.getAttribute("disabled"),i=!!i||""===i):i=t.disabled,i},_getUnitElem:function(){var t=e.createElement("div");return t.style.margin=t.style.padding="0",t.style.display="block",t.style.width="1em",t.style.position="absolute",t.style.top=t.style.left="-999em",t.style.borderStyle="none",t.style.overflow="hidden",t.style.height="10000px",e.body.appendChild(t),this._getUnitElem=function(){return t},t}},p.style.Switcher=function(){this.parent=null,this.targets={},this.options={collect:this.collect.def,cookie:{path:"/",fileUnit:!1},active:"active"},this.title="",this._parentName="",this._cookie=null,this._objects.push(this),this.setOptions.apply(this,arguments)},p.style.Switcher.prototype={setOptions:function(t,e){if(0<arguments.length){if(this.parent=t,p.isObject(e))for(var i in this.options)i in e&&(this.options[i]=e[i]);this._parentName=p.getName(t)}},create:function(){this.setOptions.apply(this,arguments),this._setTargets(),this._setEvents(),this._createCookie(),this._set(this._title||this._getCookie())},set:function(e){var i,n=this._objects,s=n.length;for(i=0;s>i;i++)n[i]._set(e);p.event.dispatch(t,"forcedraw")},collect:{def:function(t){var e,i=[];for(e in this._TYPES)i=i.concat(this._TYPES[e].collect.call(this,t));return i}},_objects:[],_title:"",_TYPES:{a:{getTitle:function(t){return decodeURIComponent(p.getHash(t))},collect:function(t){return"a"===this._parentName?[t]:p.convArray(t.getElementsByTagName("a"))}}},_listener:function(t,e){this.set(e);var i=p.event.getTarget(t);return i&&p.event.dispatch(i,"focus"),!1},_set:function(t){if(t=p.style.switchAlt(t),this.title!==t){var e,i,n=this.targets,s=this.options.active,o=(n[this.title]||r).element||a,h=(n[t]||r).element||a,l=o.length,c=h.length;for(e=0;l>e;e++)p.removeClassName(o[e],s),p.event.dispatch(o[e],"blur");for(i=0;c>i;i++)p.addClassName(h[i],s),p.event.dispatch(h[i],"focus");this.title=t}this._title!==t&&(p.style.Switcher.prototype._title=t,this._setCookie())},_setTargets:function(){var t,e=this.options.collect.call(this,this.parent),i=e.length;for(t=0;i>t;t++){var n=e[t],s=p.getName(n),r=this._TYPES[s].getTitle.call(this,n);r&&(r in this.targets?this.targets[r].element.push(n):this.targets[r]={element:[n],event:p.event.bind(this._listener,this,r)})}},_setEvents:function(){var t,e=this.targets;for(t in e)for(var i=e[t].element,n=i.length,s=e[t].event,r=0;n>r;r++)p.event.add(i[r],"click",s)},_COOKIE_NAME:"MJL.style.Switcher",_COOKIE_KEY:"title",_createCookie:function(){!this._cookie&&this.options.cookie&&(this._cookie=new p.Cookie(this._COOKIE_NAME,this.options.cookie))},_getCookie:function(){return this.options.cookie?this._cookie.get(this._COOKIE_KEY):""},_setCookie:function(){this.options.cookie&&this._cookie.set(this._COOKIE_KEY,this._title)}},p.Cookie=function(){this.name="",this.params={path:"",domain:"","max-age":31536e3,secure:!1},this.options={fileUnit:!0,index:"index.html"},this._nameCond=null,this.setOptions.apply(this,arguments)},p.Cookie.prototype={setOptions:function(t,e){if(p.isObject(e)){for(var i in this.options)i in e&&(this.options[i]=e[i]);for(var n in this.params)n in e&&(this.params[n]=e[n])}this.setName(t)},setName:function(){var e=/\/$/,i=/\\/g,n="\\\\",s={};return function(r){if(!r||"string"!=typeof r)throw new Error("Cookie name '"+r+"' is invalid");if(this.options.fileUnit){var a=t.location.pathname;e.test(a)&&""!==this.options.index&&(a+=this.options.index),r+="@"+a}r in s||(s[r]=new RegExp("(?:^|;)[\\s]*"+r.replace(i,n)+"=([^;]+)(?:;|$)")),this.name=r,this._nameCond=s[r]}}(),get:function(t){var e=this._getAll();return t?e[t]:e},set:function(t,i){var n,s=this._getAll(),r=[];s[t]=i;for(n in s)r.push(encodeURIComponent(n)+":"+encodeURIComponent(s[n]));0<r.length&&(e.cookie=this.name+"="+r.join(",")+this._getParamStr())},remove:function(){var t=this.params["max-age"];this.params["max-age"]=-(new Date).getTime(),e.cookie=this.name+"="+this._getParamStr(),this.params["max-age"]=t},_DELIMITERS:{item:/\s*\,\s*/,hash:/\s*:\s*/},_param2:{path:{cond:function(t){return t},conv:function(t){return t}},domain:{cond:function(t){return t},conv:function(t){return t}},"max-age":{cond:function(t){return!isNaN(t)},conv:function(t){return t}},secure:{cond:function(t){return t},conv:function(t){return t?"sequre":""}}},_getAll:function(){var t,i,n,s,r,a,o=this._nameCond.exec(e.cookie||""),h={};if(o)for(t=this._DELIMITERS,i=t.hash,n=o[1].split(t.item),s=n.length,r=0;s>r;r++)a=n[r].split(i),h[decodeURIComponent(a[0])]=decodeURIComponent(a[1]);return h},_getParamStr:function(){var t,e,i,n=[],s=this.params,r=this._param2;for(t in s)r[t].cond(s[t])&&n.push(t+"="+r[t].conv(s[t]));return e=this._getExpiresStr(),e&&n.push(e),i=n.join(";"),i?";"+i:""},_getExpiresStr:function(){var t,e=this.params["max-age"],i="";return isNaN(e)||(t=new Date,t.setTime(t.getTime()+e),i="expires="+t.toGMTString()),i}},p.Rollover=function(){this.parent=null,this.targets=[],this.activeId=-1,this.options={collect:this.collect.def,active:"",disable:""},this.switchers={on:this._SWITCHERS.on,off:this._SWITCHERS.off},this._parentName="",this.setOptions.apply(this,arguments)},p.Rollover.prototype={setOptions:function(t,e){if(0<arguments.length){if(this.parent=t,p.isObject(e)){for(var i in this.options)i in e&&(this.options[i]=e[i]);if("switchers"in e){var n=e.switchers;for(var s in this.switchers)s in n&&(this.switchers[s]=n[s])}}this._parentName=p.getName(t)}},create:function(){this.setOptions.apply(this,arguments),this._setTargets(),this._setEvents(),this.options.active&&this.reload()},change:function(t,e){var i=this.targets[e],n=this._isActive(i.element),s=n?"on":t?this._TYPE2STATUS[t.type]:i.status;if(this._TYPES[i.name].change)i.element.setAttribute("src",i.path[s]);else{var r,a=this._STATUS2TYPE[s],o=this.targets[e].descendants,h=o.length;for(r=0;h>r;r++)p.event.dispatch(o[r],a)}i.status=s},reload:function(){var t,e=this.targets.length;for(t=0;e>t;t++)this.change(null,t)},collect:{def:function(t){var e,i=[];for(e in this._TYPES)i=i.concat(this._TYPES[e].collect.call(this,t));return i}},_SWITCHERS:{on:{cond:/(\.[^\.]+)$/,replace:"_o$1"},off:{cond:"",replace:""}},_TYPE2STATUS:{mouseover:"on",mouseout:"off",focus:"on",blur:"off"},_STATUS2TYPE:{on:"mouseover",off:"mouseout"},_TYPES:{img:{change:!0,types:["mouseover","mouseout"],collect:function(t){return"img"===this._parentName?[t]:p.convArray(t.getElementsByTagName("img"))}},input:{change:!0,types:["mouseover","mouseout","focus","blur"],collect:function(){var t=e.querySelectorAll?function(t){return p.convArray(t.querySelectorAll('input[type="image"]'))}:function(t){var e,i=t.getElementsByTagName("input"),n=i.length,s=[];for(e=0;n>e;e++)"image"===i[e].getAttribute("type")&&s.push(i[e]);return s};return function(e){return"input"===this._parentName&&"image"===e.getAttribute("type")?[e]:t(e)}}()},a:{change:!1,types:["focus","blur"],collect:function(t){var e,i="a"===this._parentName?[t]:t.getElementsByTagName("a"),n=i.length,s=[];for(e=0;n>e;e++)0<i[e].getElementsByTagName("img").length&&s.push(i[e]);return s}}},_isEnable:function(t){if(this.options.disable)do if(p.hasClassName(t,this.options.disable))return!1;while(!p.isSameNode(t,this.parent)&&(t=t.parentNode));return!0},_isActive:function(t){if(this.options.active)do if(p.hasClassName(t,this.options.active))return!0;while(!p.isSameNode(t,this.parent)&&(t=t.parentNode));return!1},_filter:function(t){var e,i=t.length,n=[];for(e=0;i>e;e++)this._isEnable(t[e])&&n.push(t[e]);return n},_setTargets:function(){var t,e=this._filter(this.options.collect.call(this,this.parent)),i=e.length,n=this.switchers;for(t=0;i>t;t++){var s=e[t],r=p.getName(s),a=this._TYPES[r].change,o=a?null:this._TYPES.img.collect.call(this,s);if(a||0<o.length){var h=e[t].getAttribute("src")||"",l="",c="";h&&(l=h.replace(n.on.cond,n.on.replace),c=h.replace(n.off.cond,n.off.replace)),this.targets.push({id:t,name:r,element:s,status:"off",path:{def:h,on:l,off:c},descendants:o,events:{}}),h!==l&&this._addCache(l),h!==c&&this._addCache(c)}}},_setEvents:function(){var t,e,i,n,s,r,a=this.targets,o=a.length;for(t=0;o>t;t++)for(e=this.targets[t],i=this._TYPES[e.name].types,n=i.length,s=0;n>s;s++)r=i[s],e.events[r]=p.event.add(e.element,r,p.event.bind(this.change,this,t))},_addCache:function(){var t={};return function(i){var n=t[i];n||(t[i]=n=e.createElement("img"),n.setAttribute("src",i))}}()},p.Flash=function(){this.node=null,this.alt=null,this.options={activate:!1,version:0,minVerMsg:null},this.params={},this.validCreated=!1,this.setOptions.apply(this,arguments)},p.Flash.prototype=function(){var i="application/x-shockwave-flash",n="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",r="ShockwaveFlash.ShockwaveFlash",a="$version",o=!1;return{type:i,classid:n,version:function(){var e,n,h,l,c,u,f=t.navigator.mimeTypes[i],d=[0,0,0,0];if(f)e=/(\d+)\.(\d+)(?:\s*[rd\.](\d+))?(?:\s*[bd](\d+))?$/,n=f.enabledPlugin?f.enabledPlugin.description:"";else if(p.ua.activex){e=/(\d+),(\d+),(\d+),(\d+)/;try{n=new t.ActiveXObject(r+".7").GetVariable(a)}catch(g){try{l=new t.ActiveXObject(r+".6"),n="6,0,21,0",l.AllowScriptAccess="always",n=l.GetVariable(a)}catch(m){try{n=new t.ActiveXObject(r).GetVariable(a)}catch(v){n=""}}}}if(e&&(h=e.exec(n)))for(o=!0,c=h.length,u=1;c>u;u++)d[u-1]=parseInt(h[u],s)||0;return d}(),enable:o,compVersion:function(){var t,e,i=p.isArray(arguments[0])?arguments[0]:arguments,n=i.length,s=this.version,r=s.length,a=n>r?r:n,o=0;for(t=0;a>t&&0===o;t++){if(e=i[t],isNaN(e))throw new Error("'"+e+"' ("+t+"/"+a+") is not a number");e=Math.floor(e),o=s[t]<e?1:s[t]>e?-1:0}return o},setOptions:function(t,e){if(0<arguments.length){if(1!==t.nodeType||"object"!==p.getName(t))throw new Error("Node '"+t+"' is not 'object' element");if(this.node=t,this.validCreated=!1,p.isObject(e))for(var i in this.options)i in e&&(this.options[i]=e[i]);this._setParams(),this._setOptionsByParams()}},create:function(){return this.setOptions.apply(this,arguments),this._switchNode(),this._activate(),this.node},_setParams:function(){var t,e=p.getChildElements(this.node,"param"),i=e.length;for(t=0;i>t;t++)this.params[e[t].getAttribute("name")]=e[t].getAttribute("value")},_setOptionsByParams:function(){for(var t in this.options)t in this.params&&(this.options[t]=this.params[t])},_switchNode:function(){if(this.enable){if(this.compVersion(this.options.version)<=0)return this.validCreated=!0,void 0;var t=this.alt=this.options.minVerMsg&&this.enable?this._createMinVerMsg():this._createAlt(),e=this.node;e.parentNode.replaceChild(t,e),this.node=t}},_createMinVerMsg:function(){return"string"==typeof this.options.minVerMsg?p.convNode(this.options.minVerMsg):this.options.minVerMsg},_createAlt:p.ua.trident&&p.ua.version<9?function(){return p.convNode(this.node.innerHTML)}:function(){var t,i=e.createDocumentFragment(),n=p.getChildElements(this.node.cloneNode(!0),"param",!0),s=n.length;for(t=0;s>t;t++)i.appendChild(n[t]);return i},_activate:function(){p.ua.activex&&this.options.activate&&this.validCreated&&(this._setCopyObject(),this.node.setAttribute("type",this.type))},_setCopyObject:function(){var t,i,n,s=e.createElement("object"),r=this.node.cloneNode(!0),a=r.firstChild,o=this.node.attributes,h=o.length;for(n=0;h>n;n++)t=o[n].name,i=o[n].value,i&&"null"!==i&&t&&"type"!==t&&"classid"!==t&&s.setAttribute(t,i);for(;a;)s.appendChild(a),a=r.firstChild;this.node.parentNode.replaceChild(s,this.node),this.node=s}}}(),p.Flash.version=p.Flash.prototype.version,p.Flash.enable=p.Flash.prototype.enable,p.Flash.compVersion=p.Flash.prototype.compVersion,p.Window=function(){this.parent=null,this.targets=[],this.options={collect:this.collect.def,name:"_blank"},this.params={left:null,top:null,height:null,width:null,menubar:"yes",toolbar:"yes",location:"yes",status:"yes"},this._parentName="",this.setOptions.apply(this,arguments)},p.Window.prototype={setOptions:function(t,e){if(0<arguments.length){if(this.parent=t,p.isObject(e)){for(var i in this.options)i in e&&(this.options[i]=e[i]);for(var n in this.params)n in e&&(this.params[n]=this._normalizeParam(e[n]))}this.options.name=this._judgeName(this.options.name),this._parentName=p.getName(t)}},create:function(){this.setOptions.apply(this,arguments),this._setTargets()},open:function(e,i){this.targets[e].ref=t.open(this.targets[e].uri,i,this._getParamStr())},collect:function(){var t=/^https?:/,i=p.ua.trident&&p.ua.version<8?function(e,i){var n=e.getAttribute(i,2);return n&&t.test(n)}:function(e,i){var n=e.getAttribute(i);return n&&t.test(n)},n=e.querySelectorAll?function(t,e,i){return p.convArray(t.querySelectorAll(e+"["+i+'^="http:"], '+e+"["+i+'^="https:"]'))}:function(t,e,n){var s,r=t.getElementsByTagName(e),a=r.length,o=[];for(s=0;a>s;s++)i(r[s],n)&&o.push(r[s]);return o};return{def:function(t){var e,i=this._TYPES,n=this._parentName in i?[t]:[];for(e in i)n.push(p.convArray(t.getElementsByTagName(e)));return n.concat.apply([],n)},http:function(t){var e,s=this._TYPES,r=this._parentName,a=r in s&&i(t,s[r].uri)?[t]:[];for(e in s)a.push(n(t,e,s[e].uri));return a.concat.apply([],a)}}}(),_NAME_PREFIX:"MJL_window_ITEM_",_IMMUTABLE_PARAMS:{resizable:"yes",scrollbars:"yes"},_TYPES:{a:{type:"click",uri:"href",event:function(t,e){return this.open(e,this._getName()),!1}},form:{type:"submit",uri:"action",event:function(t,e){var i=this._getName();this.open(e,i),this.parent.setAttribute("target",i)}}},_judgeName:function(t){if("string"!=typeof t||""===t)throw new Error("Window name '"+t+"' is invalid");if("_self"===t||"_parent"===t||"_top"===t)throw new Error("Window name '"+t+"' is special one: MUST NOT use");return t},_setTargets:function(){var t,e,i,n=this.options.collect.call(this,this.parent),s=n.length,r=this._TYPES;for(i=0;s>i;i++)t=n[i],e=r[p.getName(t)],this.targets[i]={element:t,uri:t.getAttribute(e.uri)||"",event:p.event.add(t,e.type,p.event.bind(e.event,this,i)),ref:null}},_getName:function(){var t=0;return function(){return"_blank"===this.options.name?this._NAME_PREFIX+t++:this.options.name}}(),_getParamStr:function(){var t,e,i=[];for(t in this.params)null!==this.params[t]&&i.push(t+"="+this.params[t]);for(e in this._IMMUTABLE_PARAMS)i.push(e+"="+this._IMMUTABLE_PARAMS[e]);return i.join(",")},_normalizeParam:function(t){return!0===t?"yes":!1===t?"no":t}},p.Tab=function(){this.container=null,this.content=null,this.list=null,this.id="",this.activeId="",this.stat=!1,this.classes={container:"tabContainer",list:"tabList",panel:"tabPanel",title:"tabTitle",active:"active",stat:"static"},this.options={collect:this.collect.def,cookie:{},aria:!0},this.items={},this._items=[],this._activeIdByDocument="",this._created=!1,this._resized=!1,this._cookie=null,this.setOptions.apply(this,arguments)},p.Tab.prototype={setOptions:function(t,e){if(0<arguments.length){if(this.content=t,this.id=t.getAttribute("id")||"",p.isObject(e)){for(var i in this.options)i in e&&(this.options[i]=e[i]);if("classes"in e){var n=e.classes;for(var s in this.classes)s in n&&(this.classes[s]=n[s])}}this.id||(this.options.cookie=null),p.ua.aria||(this.options.aria=!1)}},create:function(){this._created=!1,this.setOptions.apply(this,arguments),this._judgeStatic(),this._getContents(),this._createContainer(),this._createList(),this._setEvents(),this._setResizeChecker(),this._createCookie(),this._setARIA(),this.replace(),this.active(),this._created=!0},replace:function(){var t,e,i=this.items,n=this.content,s=this.classes.panel;for(t in i)p.addClassName(i[t].panel,s);this.stat||(e=this.container,n.parentNode.insertBefore(e,n),e.appendChild(this.list),e.appendChild(n))},active:function(e){var i,n,s,r=this._getActiveId();e!==r&&(this._resized=!1,this._isValidId(e)||(e=r),i=this.classes.active,n=this.items[r],s=this.items[e],p.removeClassName(n.tab,i),p.removeClassName(n.panel,i),p.addClassName(s.tab,i),p.addClassName(s.panel,i),this._activeARIA(r,e),this._created&&(s.anchor.focus(),p.event.dispatch(n.anchor,"blur")),this._setActiveId(e),this._setCookie(),this._created&&!this._resized&&p.event.dispatch(t,"forcedraw"))},collect:{def:function(t){return p.getChildElements(t)}},_ID_PREFIX:"MJL_TAB_ITEM_",_ACTIVE_ID_RULES:[function(){return this._getCookie()},function(){return p.getHash()},function(){return this._activeIdByDocument},function(){return this._items[0].id}],_EVENTS:{click:function(t,e){this.active(e),p.event.preventDefault(t)},keydown:function(t){if(!t.ctrlKey&&!t.altKey&&!t.shiftKey){var e=this._getActiveId(),i=this.items[e].num,n=this._items.length-1;switch(t.keyCode){case 37:case 38:i--,0>i&&(i=n);break;case 39:case 40:i++,i>n&&(i=0);break;default:i=0/0}this._isValidNum(i)&&(this.active(this._items[i].id),p.event.preventDefault(t))}}},_judgeStatic:function(){this.stat=p.hasClassName(this.content,this.classes.stat),this.stat&&p.removeClassName(this.content,this.classes.stat)},_isValidId:function(t){return""!==t&&t in this.items},_isValidNum:function(t){return!(isNaN(Number(t))||void 0===this._items[t])},_getActiveId:function(){var t,e=this._ACTIVE_ID_RULES,i=e.length,n="";for(this._setActiveIdByDocument(),t=0;i>t&&(n=e[t].call(this),!this._isValidId(n));t++);if(!n)throw new Error("Tab active ID can not be acquired");return this._getActiveId=function(){return this.activeId},this._setActiveId(n),n},_setActiveIdByDocument:function(){var t,e=this.classes.active;for(t in this.items)if(p.hasClassName(this.items[t].panel,e))return this._activeIdByDocument=t,p.removeClassName(this.items[t].panel,e),this.stat&&p.removeClassName(this.items[t].tab,e),void 0},_setActiveId:function(t){this._isValidId(t)&&(this.activeId=t)},_getId:function(){var t=0;return function(e){var i="";if(this.stat){if(i=e.getAttribute("id"),!i)throw new Error("'id' attribute value '"+i+"' is invalid")}else i=this._ID_PREFIX+t,e.setAttribute("id",i),t++;return i}}(),_getIdByHref:function(t){var e=decodeURIComponent(p.getHash(t));if(!this._isValidId(e))throw new Error("Hash value '#"+e+"' in 'href' attribute value is invalid");return e},_getContents:function(){var t,e,i=this.options.collect.call(this,this.content),n=i.length,s=0;for(t=0;n>t;t++){if(e=this._getId(i[t]),e in this.items)throw new Error("'id' attribute value '"+e+"' overlaps");this.items[e]=this._items[s]={num:s,id:e,panel:i[t],title:this._getTitle(i[t]),tab:null,anchor:null,ariaId:null},s++}},_getTitle:function(t){var e,i="";if(!this.stat){if(e=p.getElementsByClassName(t,this.classes.title),e.length<1)throw new Error("Tab-title is not found");i=e[0]}return i},_cloneTitle:function(t){for(var i=e.createDocumentFragment(),n=this.items[t].title.cloneNode(!0),s=n.firstChild;s;)i.appendChild(s),s=n.firstChild;return i},_createContainer:function(){var t=this.classes.container,i=null;if(this.stat){for(i=this.content.parentNode;i&&!p.hasClassName(i,t);)i=i.parentNode;if(!i)throw new Error("Container is not found")}else i=e.createElement("div"),p.addClassName(i,t);this.container=i},_createList:function(){var t,i,n,s,r,a,o,h=this.items,l=null;if(this.stat){if(l=p.getElementsByClassName(this.container,this.classes.list)[0],!l)throw new Error("Tab-list is not found");if(t=p.getChildElements(l),i=t.length,i!==this._items.length)throw new Error("Tab number ("+this._items.length+") and Tab-panel number ("+i+") are different");for(n=0;i>n;n++)a=t[n],o=this._getAnchorElement(a),r=h[this._getIdByHref(o)],r.tab=a,r.anchor=o}else{l=e.createElement("ul"),p.addClassName(l,this.classes.list);for(s in h)r=h[s],r.tab=a=e.createElement("li"),r.anchor=o=e.createElement("a"),l.appendChild(a).appendChild(o).appendChild(this._cloneTitle(s)),o.setAttribute("href","#"+s)}this.list=l},_getAnchorElement:function(t){var e=t.getElementsByTagName("a")[0];if(!e)throw new Error("'a' element in Tab is not found");return e},_setEvents:function(){for(var t in this.items)for(var e in this._EVENTS)p.event.add(this.items[t].tab,e,p.event.bind(this._EVENTS[e],this,t))},_setResizeChecker:function(){p.event.add(t,"resize",p.event.bind(function(){this._resized=!0},this))},_ARIA_ID_PREFIX:"MJL_TAB_ARIA_",_activeARIA:function(t,e){if(this.options.aria){var i=this.items[t],n=this.items[e];i.anchor.setAttribute("aria-selected","false"),n.anchor.setAttribute("aria-selected","true"),i.panel.setAttribute("aria-hidden","true"),n.panel.setAttribute("aria-hidden","false"),this.list.setAttribute("aria-activedescendant",n.ariaId),i.anchor.tabIndex=i.panel.tabIndex=-1,n.anchor.tabIndex=n.panel.tabIndex=0}},_setARIA:function(){if(this.options.aria){var t,e,i,n,s,r=this.items;this.container.setAttribute("role","presentation"),this.content.setAttribute("role","presentation"),this.list.setAttribute("role","tablist");for(t in r)this._setIdARIA(t),e=r[t],i=e.tab,n=e.anchor,s=e.panel,i.setAttribute("role","presentation"),n.setAttribute("role","tab"),n.setAttribute("id",e.ariaId),n.setAttribute("aria-flowto",t),n.setAttribute("aria-controls",t),n.setAttribute("aria-selected","false"),s.setAttribute("role","tabpanel"),s.setAttribute("aria-labelledby",e.ariaId),s.setAttribute("aria-hidden","true"),n.tabIndex=s.tabIndex=-1}},_setIdARIA:function(){var t=0;return function(e){var i=this.items[e],n=i.tab.getAttribute("id");n||(n=this._ARIA_ID_PREFIX+t,t++),i.ariaId=n}}(),_COOKIE_NAME:"MJL.Tab",_createCookie:function(){!this._cookie&&this.options.cookie&&(this._cookie=new p.Cookie(this._COOKIE_NAME,this.options.cookie))},_getCookie:function(){return this.options.cookie?this._cookie.get(this.id):""},_setCookie:function(){this.options.cookie&&this._cookie.set(this.id,this._getActiveId())}},p.HeightEqualizer=function(){this.parent=null,this.targets=[],this.options={groupBy:0,collect:this.collect.def,resize:!0},this.setOptions.apply(this,arguments)},p.HeightEqualizer.prototype={setOptions:function(t,e){if(0<arguments.length&&(this.parent=t,p.isObject(e)))for(var i in this.options)i in e&&(this.options[i]=e[i])},create:function(){this.setOptions.apply(this,arguments),this.targets=this.options.collect.call(this,this.parent),this.set(),this._setAutoResize()},set:function(){var t,e,i=this.targets,n=i.length;for(t=0;n>t;t++)i[t].style.height="";for(e=this._getHeights(),t=0;n>t;t++)i[t].style.height=e[t]},collect:{def:function(t){return p.getChildElements(t)}},_UNIT:"px",_EVENTS:function(){function i(){return this.set(),!1}return[{type:"resize",target:t,listener:i},{type:"fontresize",target:e,listener:i},{type:"forcedraw",target:t,listener:i}]}(),_getSize:function(t){var e;return e="border-box"===p.style.getComputed(t,"boxSizing")?t.offsetHeight:parseFloat(p.style.getComputed(t,"height"))},_getHeights:function(){var t,e=this.targets,i=e.length,n=new Array(i),s=this.options.groupBy,r=0;for(t=0;i>t;t++)n[t]=this._getSize(e[t]);if(2>s||s>=i)for(r=Math.max.apply(Math,n)+this._UNIT,t=0;i>t;t++)n[t]=r;else for(t=0;i>t;t++)0===t%s&&(r=Math.max.apply(Math,n.slice(t,t+s))+this._UNIT),n[t]=r;return n},_setAutoResize:function(){if(this.options.resize){var t,e,i=this._EVENTS,n=i.length;for(t=0;n>t;t++)e=i[t],p.event.add(e.target,e.type,p.event.bind(e.listener,this))}}},p.enable=function(){function t(t){return function(i,n){var s,r=p.getElementsByClassName(e,i),a=r.length,o=new Array(a);for(s=0;a>s;s++)o[s]=new t(r[s],n),o[s].create();return o}}return{rollover:t(p.Rollover),flash:t(p.Flash),window:t(p.Window),tab:t(p.Tab),styleSwitcher:t(p.style.Switcher),heightEqualizer:t(p.HeightEqualizer),getRunner:t}}()}(this.window);