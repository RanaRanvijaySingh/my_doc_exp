var DISQUS=function(h){var l=h.DISQUS||{};l.AssertionError=function(e){this.message=e};l.AssertionError.prototype.toString=function(){return"Assertion Error: "+(this.message||"[no message]")};l.assert=function(e,f,d){if(!e)if(d)h.console&&h.console.log("DISQUS assertion failed: "+f);else throw new l.AssertionError(f);};var f=[];l.define=function(e,k){typeof e==="function"&&(k=e,e="");for(var d=e.split("."),i=d.shift(),b=l,a=(k||function(){return{}}).call({overwrites:function(a){a.__overwrites__=!0;
return a}},h);i;)b=b[i]?b[i]:b[i]={},i=d.shift();for(var c in a)a.hasOwnProperty(c)&&(!a.__overwrites__&&b[c]!==null&&l.assert(!b.hasOwnProperty(c),"Unsafe attempt to redefine existing module: "+c,!0),b[c]=a[c],f.push(function(a,b){return function(){delete a[b]}}(b,c)));return b};l.use=function(f){return l.define(f)};l.cleanup=function(){for(var e=0;e<f.length;e++)f[e]()};return l}(window);
DISQUS.define(function(h,l){var f=h.DISQUS,e=h.document,k=e.getElementsByTagName("head")[0]||e.body,d={running:!1,timer:null,queue:[]},i=0;f.getUid=function(b){var a=++i+"";return b?b+a:a};f.defer=function(b,a){function c(){var a=d.queue;if(a.length===0)d.running=!1,clearInterval(d.timer);for(var b=0,c;c=a[b];b++)c[0]()&&(a.splice(b--,1),c[1]())}d.queue.push([b,a]);c();if(!d.running)d.running=!0,d.timer=setInterval(c,100)};f.each=function(b,a){var c=b.length,g=Array.prototype.forEach;if(isNaN(c))for(var m in b)b.hasOwnProperty(m)&&
a(b[m],m,b);else if(g)g.call(b,a);else for(g=0;g<c;g++)a(b[g],g,b)};f.extend=function(b){f.each(Array.prototype.slice.call(arguments,1),function(a){for(var c in a)b[c]=a[c]});return b};f.serializeArgs=function(b){var a=[];f.each(b,function(b,g){b!==l&&a.push(g+(b!==null?"="+encodeURIComponent(b):""))});return a.join("&")};f.isString=function(b){return Object.prototype.toString.call(b)==="[object String]"};f.serialize=function(b,a,c){a&&(b+=~b.indexOf("?")?b.charAt(b.length-1)=="&"?"":"&":"?",b+=f.serializeArgs(a));
if(c)return a={},a[(new Date).getTime()]=null,f.serialize(b,a);a=b.length;return b.charAt(a-1)=="&"?b.slice(0,a-1):b};f.require=function(b,a,c,g,m){function d(a){if(a.type=="load"||/^(complete|loaded)$/.test(a.target.readyState))g&&g(),p&&clearTimeout(p),f.bean.remove(a.target,l,d)}var i=e.createElement("script"),l=i.addEventListener?"load":"readystatechange",p=null;i.src=f.serialize(b,a,c);i.async=!0;i.charset="UTF-8";(g||m)&&f.bean.add(i,l,d);m&&(p=setTimeout(function(){m()},2E4));k.appendChild(i);
return f};f.requireStylesheet=function(b,a,c){var g=e.createElement("link");g.rel="stylesheet";g.type="text/css";g.href=f.serialize(b,a,c);k.appendChild(g);return f};f.requireSet=function(b,a,c){var g=b.length;f.each(b,function(b){f.require(b,{},a,function(){--g===0&&c()})})};f.injectCss=function(b){var a=e.createElement("style");a.setAttribute("type","text/css");b=b.replace(/\}/g,"}\n");h.location.href.match(/^https/)&&(b=b.replace(/http:\/\//g,"https://"));a.styleSheet?a.styleSheet.cssText=b:a.appendChild(e.createTextNode(b));
k.appendChild(a)};f.isString=function(b){return Object.prototype.toString.call(b)==="[object String]"}});
DISQUS.define("JSON",function(){function h(a){return a<10?"0"+a:a}function l(a){i.lastIndex=0;return i.test(a)?'"'+a.replace(i,function(a){var b=c[a];return typeof b==="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(c,m){var j,o,d,e,i=b,h,n=m[c];n&&typeof n==="object"&&typeof n.toJSON==="function"&&!k&&(n=n.toJSON(c));typeof g==="function"&&(n=g.call(m,c,n));switch(typeof n){case "string":return l(n);case "number":return isFinite(n)?String(n):"null";case "boolean":case "null":return String(n);
case "object":if(!n)return"null";b+=a;h=[];if(Object.prototype.toString.apply(n)==="[object Array]"){e=n.length;for(j=0;j<e;j+=1)h[j]=f(j,n)||"null";d=h.length===0?"[]":b?"[\n"+b+h.join(",\n"+b)+"\n"+i+"]":"["+h.join(",")+"]";b=i;return d}if(g&&typeof g==="object"){e=g.length;for(j=0;j<e;j+=1)o=g[j],typeof o==="string"&&(d=f(o,n))&&h.push(l(o)+(b?": ":":")+d)}else for(o in n)Object.hasOwnProperty.call(n,o)&&(d=f(o,n))&&h.push(l(o)+(b?": ":":")+d);d=h.length===0?"{}":b?"{\n"+b+h.join(",\n"+b)+"\n"+
i+"}":"{"+h.join(",")+"}";b=i;return d}}var e={},k=!1;if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+h(this.getUTCMonth()+1)+"-"+h(this.getUTCDate())+"T"+h(this.getUTCHours())+":"+h(this.getUTCMinutes())+":"+h(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b,a,c={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},g;e.stringify=function(c,d,j){var m;a=b="";if(typeof j==="number")for(m=0;m<j;m+=1)a+=" ";else typeof j==="string"&&(a=j);if((g=d)&&typeof d!=="function"&&(typeof d!=="object"||typeof d.length!=="number"))throw Error("JSON.stringify");return f("",{"":c})};e.parse=function(a,b){function c(a,
g){var d,m,e=a[g];if(e&&typeof e==="object")for(d in e)Object.hasOwnProperty.call(e,d)&&(m=c(e,d),m!==void 0?e[d]=m:delete e[d]);return b.call(a,g,e)}var g,a=String(a);d.lastIndex=0;d.test(a)&&(a=a.replace(d,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return g=eval("("+a+")"),
typeof b==="function"?c({"":g},""):g;throw new SyntaxError("JSON.parse");};var m={a:[1,2,3]},n,q;if(Object.toJSON&&Object.toJSON(m).replace(/\s/g,"")==='{"a":[1,2,3]}')n=Object.toJSON;typeof String.prototype.evalJSON==="function"&&(m='{"a":[1,2,3]}'.evalJSON(),m.a&&m.a.length===3&&m.a[2]===3&&(q=function(a){return a.evalJSON()}));(function(){var a=[1,2,3];typeof a.toJSON==="function"&&(a=a.toJSON(),k=!(a&&a.length===3&&a[2]===3))})();if(k||!n||!q)return{stringify:e.stringify,parse:e.parse};return{stringify:n,
parse:q}});
DISQUS.define(function(){function h(a){for(i=1;a=l.shift();)a()}var l=[],f,e=document,k=e.documentElement,d=k.doScroll,i=/^loade|c/.test(e.readyState),b;e.addEventListener&&e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",f,!1);h()},!1);d&&e.attachEvent("onreadystatechange",f=function(){/^c/.test(e.readyState)&&(e.detachEvent("onreadystatechange",f),h())});b=d?function(a){self!=top?i?a():l.push(a):function(){try{k.doScroll("left")}catch(c){return setTimeout(function(){b(a)},50)}a()}()}:
function(a){i?a():l.push(a)};return{domready:b}});
DISQUS.define("Events",function(){var h=function(b){var a=!1,c;return function(){if(a)return c;a=!0;c=b.apply(this,arguments);b=null;return c}},l=Object.keys||function(b){if(b!==Object(b))throw new TypeError("Invalid object");var a=[],c;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[a.length]=c);return a},f=[].slice,e={on:function(b,a,c){if(!d(this,"on",b,[a,c])||!a)return this;this._events=this._events||{};(this._events[b]||(this._events[b]=[])).push({callback:a,context:c,ctx:c||this});
return this},once:function(b,a,c){if(!d(this,"once",b,[a,c])||!a)return this;var g=this,m=h(function(){g.off(b,m);a.apply(this,arguments)});m._callback=a;return this.on(b,m,c)},off:function(b,a,c){var g,m,e,f,i,p,j,o;if(!this._events||!d(this,"off",b,[a,c]))return this;if(!b&&!a&&!c)return this._events={},this;f=b?[b]:l(this._events);i=0;for(p=f.length;i<p;i++)if(b=f[i],e=this._events[b]){this._events[b]=g=[];if(a||c){j=0;for(o=e.length;j<o;j++)m=e[j],(a&&a!==m.callback&&a!==m.callback._callback||
c&&c!==m.context)&&g.push(m)}g.length||delete this._events[b]}return this},trigger:function(b){if(!this._events)return this;var a=f.call(arguments,1);if(!d(this,"trigger",b,a))return this;var c=this._events[b],g=this._events.all;c&&i(c,a);g&&i(g,arguments);return this},stopListening:function(b,a,c){var g=this._listeners;if(!g)return this;var d=!a&&!c;typeof a==="object"&&(c=this);b&&((g={})[b._listenerId]=b);for(var e in g)g[e].off(a,c,this),d&&delete this._listeners[e];return this}},k=/\s+/,d=function(b,
a,c,g){if(!c)return!0;if(typeof c==="object"){for(var d in c)b[a].apply(b,[d,c[d]].concat(g));return!1}if(k.test(c)){c=c.split(k);d=0;for(var e=c.length;d<e;d++)b[a].apply(b,[c[d]].concat(g));return!1}return!0},i=function(b,a){var c,g=-1,d=b.length,e=a[0],f=a[1],i=a[2];switch(a.length){case 0:for(;++g<d;)(c=b[g]).callback.call(c.ctx);break;case 1:for(;++g<d;)(c=b[g]).callback.call(c.ctx,e);break;case 2:for(;++g<d;)(c=b[g]).callback.call(c.ctx,e,f);break;case 3:for(;++g<d;)(c=b[g]).callback.call(c.ctx,
e,f,i);break;default:for(;++g<d;)(c=b[g]).callback.apply(c.ctx,a)}};DISQUS.each({listenTo:"on",listenToOnce:"once"},function(b,a){e[a]=function(a,g,d){var e=this._listeners||(this._listeners={}),f=a._listenerId||(a._listenerId=DISQUS.getUid("l"));e[f]=a;typeof g==="object"&&(d=this);a[b](g,d,this);return this}});e.bind=e.on;e.unbind=e.off;return e});
DISQUS.define(function(h){function l(){throw Error(Array.prototype.join.call(arguments," "));}function f(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else throw Error("No event support.");}function e(a,b,c){c||(c=0);var g,d,e,f,m=0,i=function(){m=new Date;e=null;f=a.apply(g,d)};return function(){var h=new Date,k=b-(h-m);g=this;d=arguments;k<=0?(clearTimeout(e),e=null,m=h,f=a.apply(g,d)):e||(e=setTimeout(i,k+c));return f}}var k=h.document,d=
DISQUS.use("JSON"),i={},b={};if(!(DISQUS.version&&DISQUS.version()==="2")){f(h,"message",function(a){var c,g;for(g in b)if(Object.prototype.hasOwnProperty.call(b,g)&&a.origin==b[g].origin){c=!0;break}if(c)switch(c=d.parse(a.data),(g=b[c.sender])||l("Message from our server but with invalid sender UID:",c.sender),c.scope){case "host":g.trigger(c.name,c.data);break;case "global":DISQUS.trigger(c.name,c.data);break;default:l("Message",c.scope,"not supported. Sender:",a.origin)}},!1);f(h,"hashchange",
function(){DISQUS.trigger("window.hashchange",{hash:h.location.hash})},!1);f(h,"resize",function(){DISQUS.trigger("window.resize")},!1);f(h,"scroll",e(function(){DISQUS.trigger("window.scroll")},250,50));f(k,"click",function(){DISQUS.trigger("window.click")});var a=function(){this.uid=DISQUS.getUid();i[this.uid]=this};DISQUS.extend(a.prototype,DISQUS.Events);a.prototype.destroy=function(){this.stopListening();delete i[this.uid]};DISQUS.extend(a,{listByKey:function(){var a={},b;for(b in i)Object.prototype.hasOwnProperty.call(i,
b)&&(a[b]=i[b]);return a},list:function(){var a=[],b;for(b in i)Object.prototype.hasOwnProperty.call(i,b)&&a.push(i[b]);return a},get:function(a){if(Object.prototype.hasOwnProperty.call(i,a))return i[a];return null}});var c=function(a){a=a||{};this.state=c.INIT;this.uid=a.uid||DISQUS.getUid();this.origin=a.origin;this.target=a.target;this.window=null;b[this.uid]=this;this.on("ready",function(){this.state=c.READY},this);this.on("die",function(){this.state=c.KILLED},this)};DISQUS.extend(c,{INIT:0,READY:1,
KILLED:2});DISQUS.extend(c.prototype,DISQUS.Events);c.prototype.sendMessage=function(a,b){var c=function(a,b,c){return function(){DISQUS.postMessage(c.window,a,b)}}(d.stringify({scope:"client",name:a,data:b}),this.origin,this);if(this.isReady())c();else this.on("ready",c)};c.prototype.hide=function(){};c.prototype.show=function(){};c.prototype.url=function(){return DISQUS.serialize(this.target,{disqus_version:"1372120184"})+"#"+this.uid};c.prototype.destroy=function(){this.state=c.KILLED;this.off()};
c.prototype.isReady=function(){return this.state===c.READY};c.prototype.isKilled=function(){return this.state===c.KILLED};var g=function(a){c.call(this,a);this.windowName=a.windowName};DISQUS.extend(g.prototype,c.prototype);g.prototype.load=function(){this.window=h.open("",this.windowName||"_blank");this.window.location=this.url()};g.prototype.isKilled=function(){return c.prototype.isKilled()||this.window.closed};var m=function(a){c.call(this,a);this.styles=a.styles||{};this.role=a.role||"application";
this.container=a.container;this.elem=null};DISQUS.extend(m.prototype,c.prototype);m.prototype.load=function(){var a=this.elem=k.createElement("iframe");a.setAttribute("id","dsq"+this.uid);a.setAttribute("data-disqus-uid",this.uid);a.setAttribute("allowTransparency","true");a.setAttribute("frameBorder","0");this.role&&a.setAttribute("role",this.role);DISQUS.extend(a.style,this.styles)};m.prototype.getOffset=function(){for(var a=this.elem,b=a,c=0,g=0;b;)c+=b.offsetLeft,g+=b.offsetTop,b=b.offsetParent;
return{top:g,left:c,height:a.offsetHeight,width:a.offsetWidth}};m.prototype.hide=function(){this.elem.style.display="none"};m.prototype.show=function(){this.elem.style.display=""};m.prototype.destroy=function(){c.prototype.destroy.call(this);this.elem&&this.elem.parentNode&&this.elem.parentNode.removeChild(this.elem)};var n=function(a){m.call(this,a);this.styles=DISQUS.extend({width:"100%",border:"none",overflow:"hidden",height:"0"},a.styles||{})};DISQUS.extend(n.prototype,m.prototype);n.prototype.load=
function(a){var b=this;m.prototype.load.call(b);var c=b.elem;c.setAttribute("width","100%");c.setAttribute("src",this.url());f(c,"load",function(){b.window=c.contentWindow;a&&a()});(DISQUS.isString(this.container)?k.getElementById(this.container)||k.body:this.container).appendChild(c)};var q=function(a){m.call(this,a);this.contents=a.contents;this.styles=DISQUS.extend({width:"100%",border:"none",overflow:"hidden"},a.styles||{})};DISQUS.extend(q.prototype,m.prototype);q.prototype.load=function(){m.prototype.load.call(this);
var a=this.elem;a.setAttribute("scrolling","no");(DISQUS.isString(this.container)?k.getElementById(this.container)||k.body:this.container).appendChild(a);this.window=a.contentWindow;try{this.window.document.open()}catch(b){a.src="javascript:var d=document.open();d.domain='"+k.domain+"';void(0);"}this.document=this.window.document;this.document.write(this.contents);this.document.close();if(a=this.document.body){var c=this.elem.style;c.height=c.minHeight=c.maxHeight=a.offsetHeight+"px"}};q.prototype.show=
function(){this.elem.style.display="block"};q.prototype.click=function(a){f(this.document.body,"click",function(b){a(b)})};var r=DISQUS.extend({},DISQUS.Events);return{log:function(a){var b=k.getElementById("messages");if(b){var c=k.createElement("p");c.innerHTML=a;b.appendChild(c)}},version:function(){return"2"},on:r.on,off:r.off,trigger:r.trigger,throttle:e,postMessage:function(a,b,c){a.postMessage(b,c)},WindowBase:c,Popup:g,Iframe:m,Channel:n,Sandbox:q,App:a}}});
DISQUS.define("next.host.utils",function(h,l){function f(a){if(!a||a.substring(a.length-8)!=="embed.js")return null;for(var b=[/(https?:)?\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i,/(https?:)?\/\/(www\.)?([\w_\-]+)\.disqus\.com/i,/(https?:)?\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i,/(https?:)?\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i],g,d=b.length,e=0;e<d;e++)if((g=a.match(b[e]))&&g.length&&g.length===4)return g[3];return null}function e(a,c,g){var d,g=g||c;if(a===b)return"";h.getComputedStyle?
d=b.defaultView.getComputedStyle(a,null).getPropertyValue(c):a.currentStyle&&(d=a.currentStyle[c]?a.currentStyle[c]:a.currentStyle[g]);return d=="transparent"||d===""||d=="rgba(0, 0, 0, 0)"?e(a.parentNode,c,g):d||null}function k(a){function b(a){a=Number(a).toString(16);return a.length==1?"0"+a:a}if(a.substr(0,1)==="#")return a;var g=/.*?rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(a);if(!g||g.length!==4)return"";var a=b(g[1]),d=b(g[2]),g=b(g[3]);return"#"+a+d+g}function d(a,c,g,d){DISQUS.isString(c)&&(c=
b.createElement(c));var f=null;c.style.visibility="hidden";a.appendChild(c);f=e(c,g,d);a.removeChild(c);return f}function i(a){return a.toLowerCase().replace(/^\s+|\s+$/g,"").replace(/['"]/g,"")}var b=h.document;return{getShortnameFromUrl:f,getForum:function(a,b){var g=a.getElementsByTagName("script"),d=g.length,e,b=b||f;for(d-=1;d>=0;d--)if(e=g[d],e=e.getAttribute?e.getAttribute("src"):e.src,e=b(e),e!==null)return e.toLowerCase();return null},isSSL:function(a){return a.toLowerCase()==="https:"},
guessThreadTitle:function(){for(var a=b.getElementsByTagName("h1"),c=b.title,g=c.length,d=c,e=0.6,f=0;f<a.length;f++)(function(a){var a=a.textContent||a.innerText,b;if(!(a===null||a===l)){b=0;for(var f=Array(c.length),i=0;i<=c.length;i++){f[i]=Array(a.length);for(var h=0;h<=a.length;h++)f[i][h]=0}for(i=0;i<c.length;i++)for(h=0;h<a.length;h++)c[i]==a[h]&&(f[i+1][h+1]=f[i][h]+1,f[i+1][h+1]>b&&(b=f[i+1][h+1]));b/=g;b>e&&(e=b,d=a)}})(a[f]);return d},getContrastYIQ:function(a){a.match("^rgb")&&(a=k(a).substr(1));
var b=parseInt(a.substr(0,2),16),g=parseInt(a.substr(2,2),16),a=parseInt(a.substr(4,2),16);return(b*299+g*587+a*114)/1E3},colorToHex:k,getElementStyle:d,getAnchorColor:function(a){var c=b.createElement("a");c.href=+new Date;return d(a,c,"color")},normalizeFontValue:i,isSerif:function(a){for(var a=d(a,"span","font-family","fontFamily").split(","),b={courier:1,times:1,"times new roman":1,georgia:1,palatino:1,serif:1},g,e=0;e<a.length;e++)if(g=i(a[e]),b.hasOwnProperty(g))return!0;return!1},getBrowserSupport:function(a){if(a.postMessage){if(!a.JSON)return a.navigator.appName===
"Microsoft Internet Explorer"?2:1}else return 1;return 0},getPermalink:function(){var a=h.location.hash;return(a=a&&a.match(/comment\-([0-9]+)/))&&a[1]}}});
DISQUS.define("next.host.switches",function(){function h(h){DISQUS.App.call(this);this.switches={};this.settings=h;this.url=h.useSSL?"https://securecdn.disqus.com/1372120184/build/next-switches/client_ssl.html":"http://mediacdn.disqus.com/1372120184/build/next-switches/client.html";this.origin=h.useSSL?"https://securecdn.disqus.com":"http://mediacdn.disqus.com"}h.prototype=DISQUS.extend({init:function(){this.frame=new DISQUS.Channel({target:this.url,origin:this.origin,container:this.settings.container,
styles:{display:"none"}});this.frame.load()},fetch:function(h){var f=this,h=h||{},e=h.success;delete h.success;this.frame.on("switches.received",function(h){f.switches=h;DISQUS.trigger("switches.changed",h);e&&e(h)});this.frame.sendMessage("fetch",h)},enabled:function(h){return this.switches[h]?this.switches[h]:!1}},DISQUS.App.prototype);return{Switches:function(l){return new h(l)}}});
DISQUS.define("next.host.profile",function(h){var l=function(f){DISQUS.App.call(this);f=f||{};f.fullscreen=f.fullscreen!==!1;this.frame=null;this.settings=f;f.useSSL?(this.url="https://disqus.com/embed/profile/",this.origin="https://disqus.com"):(this.url="http://disqus.com/embed/profile/",this.origin="http://disqus.com");this.url=DISQUS.serialize(this.url,{f:f.forum,language:f.language})};DISQUS.extend(l.prototype,DISQUS.App.prototype);l.prototype.init=function(){var f=this.settings,e={uid:this.uid,
target:this.url,origin:this.origin},k=f.fullscreen?{height:"100%",position:"fixed",top:0,left:0,zIndex:999999}:{height:"100%",padding:0},d=this.frame=f.windowName?new DISQUS.Popup(DISQUS.extend(e,{windowName:f.windowName})):new DISQUS.Channel(DISQUS.extend(e,{container:f.container||document.body,styles:k,role:"dialog"}));d.once("ready",function(){d.sendMessage("init",{referrer:h.location.href,fullscreen:f.fullscreen,switches:f.switches&&f.switches.switches});this.trigger("loading.init")},this);d.on("close",
function(){d.hide();h.focus()},this);d.on("renderProfile",function(d){this.trigger("renderProfile",d)},this);d.load();this.trigger("loading.start")};l.prototype.destroy=function(){this.frame&&this.frame.destroy()};l.prototype.show=function(f){DISQUS.isString(f)&&(f={username:f});var e=this.frame;if(!e.isReady())return void e.once("ready",function(){this.show(f)},this);e.sendMessage("showProfile",f);e.show()};return{Profile:function(f){return new l(f)}}});
DISQUS.define("next.host.backplane",function(){var h;try{localStorage.setItem("disqus.localStorageTest","disqus"),localStorage.removeItem("disqus.localStorageTest"),h=!0}catch(l){h=!1}var f=function(e){this.frame=e;this.credentials="unset";var f=this;typeof Backplane==="function"&&typeof Backplane.version==="string"&&typeof Backplane.subscribe==="function"&&h&&Backplane(function(){f.initialize()})};DISQUS.extend(f.prototype,{frameEvents:{invalidate:"clearCredentials"},initialize:function(){var e=
this;DISQUS.each(this.frameEvents,function(f,d){e.frame.on("backplane."+d,typeof f==="function"?f:e[f],e)});this.credentialsFromLocalStorage()&&this.frame.sendMessage("login",{backplane:this.credentials});this.subscribe()},subscribe:function(){var e=this;Backplane.subscribe(function(f){var d=e.handlers[f.type];d&&d.call(e,f)})},handlers:{"identity/login":function(e){var f=e.messageURL,e=e.channel;this.credentials!=="unset"&&this.credentials!==null&&this.credentials.channel===e&&this.credentials.messageUrl===
f||(this.setCredentials(e,f),this.frame.sendMessage("login",{backplane:this.getCredentials()}))}},credentialsFromLocalStorage:function(){var e=localStorage.getItem("disqus.backplane.channel"),f=localStorage.getItem("disqus.backplane.messageUrl");this.setCredentials(e,f,!0);return this.credentials},setCredentials:function(e,f,d){if(!e||!f)return void this.clearCredentials();d||(localStorage.setItem("disqus.backplane.channel",e),localStorage.setItem("disqus.backplane.messageUrl",f));this.credentials=
{channel:e,messageUrl:f}},getCredentials:function(){if(this.credentials!=="unset")return this.credentials;return this.credentialsFromLocalStorage()},clearCredentials:function(e){e=e||{};this.credentials=null;localStorage.removeItem("disqus.backplane.channel");localStorage.removeItem("disqus.backplane.messageUrl");if(e.redirectUrl)window.location=e.redirectUrl}});return{BackplaneIntegration:f}});
DISQUS.define("next.host.lounge",function(h,l){function f(b){for(var a=DISQUS.App.list(),c,g=0,e=a.length;g<e;g++)c=a[g],c instanceof d&&b(c)}var e=DISQUS.use("next.host.profile"),k=h.document,d=function(b){DISQUS.App.call(this);this.settings=b;this.container=b.container;this.indicators={north:null,south:null};this.frame=null;this.wasNearViewport=this.wasInViewport=!1};d.EVENTS_MAPPING={onReady:"loading.done",onNewComment:"posts.create",onPaginate:"posts.paginate",onIdentify:"session.identify"};var i=
d.prototype;DISQUS.extend(i,DISQUS.App.prototype);i.init=function(){function b(a,b,c){j.on("affiliateLink",function(d){var e=DISQUS.vglnk.$;if(!e)return void j.sendMessage("affiliateLink");e.request(a+"/click",{format:"jsonp",out:d.url,key:b,loc:j.target,subId:c},{fn:function(a){return function(b){var c={token:a};if(b)c.url=b;j.sendMessage("affiliateLink",c)}}(d.token),timeout:DISQUS.vglnk.opt("click_timeout")})})}var a=this,c=a.container,d=a.settings,f="http://disqus.com/embed/comments/",i="http://disqus.com";
d.useSSL&&(f="https://disqus.com/embed/comments/",i="https://disqus.com");var k=d.unsupported,r=!!d.windowName,p={f:d.forum,t_i:d.identifier,t_u:d.url||h.location.href,t_s:d.slug,t_t:d.title||d.documentTitle,t_e:d.title,t_d:d.documentTitle,t_c:d.category,s_o:d.sortOrder,c:d.useConman||l};if(k)p.n_s=d.unsupported;var c={origin:i,target:DISQUS.serialize(f,p),container:c,uid:a.uid,role:"complementary",windowName:d.windowName},j;r&&!k?j=a.frame=new DISQUS.Popup(c):(j=this.frame=new DISQUS.Channel(c),
k||a.addLoadingAnim());k||a.bindCallbacks();r||(a.listenTo(DISQUS,"window.resize",function(){j.sendMessage("window.resize")}),a.listenTo(DISQUS,"window.scroll",a.scrollListener),a.listenTo(DISQUS,"window.click",function(){j.sendMessage("window.click")}),j.on("resize",function(b){if(a.rendered)j.elem.style.height=b.height+"px",j.sendMessage("embed.resized"),a.scrollListener()}),j.on("scrollTo",function(b){var c=j.getOffset(),c=b.relative==="window"?b.top:c.top+b.top,d=a.getWindowYCoords();(b.force||
!(c>d.pageYOffset&&c<d.pageYOffset+d.innerHeight))&&h.scrollTo(0,c)}),j.on("realtime.init",function(b){var c=["north","south"],d,e;e=j.getOffset().width+"px";for(var f={width:e,minWidth:e,maxWidth:e,position:"fixed"},g={north:{top:"0"},south:{bottom:"0"}},i=0;i<c.length;i++)e=c[i],d=new DISQUS.Sandbox({uid:"-indicator-"+e,container:a.container,contents:b[e].contents,styles:DISQUS.extend(g[e],f),role:"alert"}),d.load(),d.hide(),function(a){d.click(function(){j.sendMessage("realtime.click",a)})}(e),
a.indicators[e]=d}),j.on("realtime.showNorth",function(b){var c=a.indicators.north;c.document.getElementById("message").innerHTML=b;c.show()}),j.on("realtime.hideNorth",function(){a.indicators.north.hide()}),j.on("realtime.showSouth",function(b){var c=a.indicators.south;c.document.getElementById("message").innerHTML=b;c.show()}),j.on("realtime.hideSouth",function(){a.indicators.south.hide()}),j.on("fail",function(b){a.removeLoadingAnim();j.elem.style.height="75px";a.trigger("fail",b)}),j.on("mainViewRendered",
function(b){a.rendered=!0;a.removeLoadingAnim();j.trigger("resize",b);j.sendMessage("embed.rendered");a.trigger("loading.done")}));a.listenTo(DISQUS,"window.hashchange",function(a){j.sendMessage("window.hashchange",a.hash)});a.listenTo(DISQUS,"switches.changed",function(a){j.sendMessage("switches.changed",a)});j.on("ready",function(){var b={permalink:d.permalink,anchorColor:d.anchorColor,referrer:h.location.href,colorScheme:d.colorScheme,language:d.language,typeface:d.typeface,remoteAuthS3:d.remoteAuthS3,
apiKey:d.apiKey,sso:d.sso,parentWindowHash:h.location.hash};if(j.elem&&h.navigator.userAgent.match(/(iPad|iPhone|iPod)/))b.width=j.elem.offsetWidth;j.sendMessage("init",b);a.trigger("loading.init")});j.on("reload",function(){h.location.reload()});j.on("reset",function(){DISQUS.reset({reload:!0})});j.on("session.identify",function(b){a.trigger("session.identify",b)});j.on("posts.paginate",function(){a.trigger("posts.paginate")});j.on("posts.create",function(b){a.trigger("posts.create",{id:b.id,text:b.raw_message})});
j.on("profile.show",function(b){if(!a.profile||a.profile.frame.isKilled())a.profile=e.Profile({windowName:b.windowName,language:b.language,useSSL:d.useSSL,forum:d.forum,switches:d.switches}),a.profile.init();a.profile.show({id:b.userId})});j.once("loadLinkAffiliator",function(a){if(!h.vglnk_self&&!h.vglnk&&!function(){for(var a in h)if(a.indexOf("skimlinks")===0||a.indexOf("skimwords")===0)return!0;return!1}()){var c=a.apiUrl,d=a.key,e=String(a.id);if(!(a.clientUrl==null||c==null||d==null||a.id==
null))DISQUS.define("vglnk",function(){return{api_url:c,key:d,sub_id:e}}),h.vglnk_self="DISQUS.vglnk",DISQUS.require(a.clientUrl),DISQUS.defer(function(){return DISQUS.vglnk.opt},function(){j.sendMessage("affiliationOptions",{timeout:DISQUS.vglnk.opt("click_timeout")})}),b(c,d,e)}});j.once("loadBackplane",function(){a.backplane=new DISQUS.next.host.backplane.BackplaneIntegration(j)});j.load(function(){d.unsupported?(j.elem.style.height="500px",j.elem.setAttribute("scrolling","yes"),j.elem.setAttribute("horizontalscrolling",
"no"),j.elem.setAttribute("verticalscrolling","yes"),j.show()):r||(j.elem.setAttribute("scrolling","no"),j.elem.setAttribute("horizontalscrolling","no"),j.elem.setAttribute("verticalscrolling","no"))});a.trigger("loading.start")};i.bindCallbacks=function(){var b=this,a=d.EVENTS_MAPPING,c=b.settings.callbacks;c&&DISQUS.each(c,function(c,d){a[d]&&DISQUS.each(c,function(c){b.on(a[d],c)})})};i.addLoadingAnim=function(){var b,a,c,d=this.container,e=k.createElement("style");e.type="text/css";e.styleSheet?
e.styleSheet.cssText=".disqus-loader{animation:disqus-embed-spinner .7s infinite linear;-webkit-animation:disqus-embed-spinner .7s infinite linear}@keyframes disqus-embed-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes disqus-embed-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}":e.appendChild(k.createTextNode(".disqus-loader{animation:disqus-embed-spinner .7s infinite linear;-webkit-animation:disqus-embed-spinner .7s infinite linear}@keyframes disqus-embed-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes disqus-embed-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}"));
b=k.createElement("div");a=k.createElement("div");c=k.createElement("div");a.appendChild(e);a.appendChild(c);b.appendChild(a);b.style.overflow="hidden";a.style.height=a.style.width="54px";a.style.margin="0 auto";a.style.overflow="hidden";c.style.height=c.style.width="29px";c.style.margin="11px 14px";c.className="disqus-loader";c.style.backgroundImage=a.style.backgroundImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABmCAMAAACA210sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAlhQTFRFMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtWDj2BwAAAMh0Uk5TAAABAQICAwMEBAUFBgYHBwgICQkKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFhcXGBgZGRoaGxscHB0dHh4fHyAgISEjIyQkJSUmJigoKSkqKisrLCwtLS4uLy8wMDExMjIzMzQ0NTU2Njc3ODg5OTo6Ozs8PD09Pj4/P0BAQUFCQkNDRERFRUZGR0dISElJS0tMTE1NTk5PT1BQUVFSUlNTVFRVVVZWV1dYWFlZWlpbW1xcXV1eXl9fYGBhYWJiY2NkZGVlZmaMInkiAAAFVklEQVRo3u2Yf0hbVxTHP/flmYYQxFoXghMJzkpXQmszCd0ma7eKKyKuSOlKGaV0RaRzsIHIGDK2MqSsXVvKcKWIG6V0ItI5Z1tXZBsiIkWciC0iYsMIIbisC1mWhpDG/RFjfpvr4O2vnH+Se+/J575z3z3n5n4F2Uy12aotpUY1HFp1OecXo+S00vo6q9kYXF2ZnfLG+0QWYH2jw5jcEZi6P50dW33qoBL//sl4TqbpyPHSzB97bo2GMjr1bcfUjcbcWXIwlZb24uxBenvH0sM+b0s0om2PAJPBC+hS3KxfvrUtx8IZD+z9LZDcUfL1zqTWj98DtLVP/JP2nIc74+vonplfWQ2EDcZya22deb3T1zOZtOq9saf0jMy6vSarywdU3tAvdIRTmGdOxz5Dd8cWkqeyNzXG1i16ZWijs+MEQPjaUCTh+EU9DFxNZna2AhAZvPUkPXDLqebY++3rj7/xfhXwfTyX5LX/EhA9tZxYz/bjACx0/vQ0YzEDk9O27QD2vx/Gej6oBiKdcylub24DsWN8g9ncAcDAp39mfUV/jJp3Aux//Big9CMF+Go8xcfveR14/k6cuatHB0Qvf5MrZ55NiH0Ajl/8wKEDgOezNOeVV8tAca8z9Zd3AFy4nTsLmRX7AP2Ld9bgxAvA4Ey6S9HLwNP11HrHCnBjmM2sbwTA1gJUAWQgmQKwxpiWkwAz19ncriwBtJugDMCZ4eAOAeYY84QeCPZE8zBDn0eA4qOgAvgzPQKASQEobQbo85DPlgcBjhkIA2SpNSVAQAFoMADeYfLbzSBQ8hpPACwZw2YV8CoATQCDIQmmbwTgMCsA9oxhO4BTASw1QGQMGRsBqDPNADSr6aPNADNKnD7rlWI6lwG1bioCVDSlDb5iB6ITClAL8AA5mwbY9eTXjaRPWs1ugEmvEt/AjySZjwCs9EcAQ3tK8bpUAkT7UYBKgGVJphOgAucAwI2kgfq+KoChJVRQTYA/IMl0AZTB9Vob9+cBSn1RxeJorAVg6RqoYIwngJRFQgYwQqSr19ILUH6LkCl+Iru6QglmEGkosdT0nXWsApzVo4+PLXZ5Y6NBWAdLmbrOxXcfoO6NxHk81BsmiVksjTSkRKV0bBAnvl3amDXiLwZTsV+OWQmQyA/9UF2V2Rj0OmcnvMmROPcAVXNbYLoS5W90NMNFAX4HsEnGvjt7NU5nLgA4JJn78yedEj9XasukkDXVQGQ2L9O9DKhNUswmgJlAXiZjAEdUCWRJC8Bd8jP9AOGIBPOkAfBNSjBbAW7LrOZRgIFQfubuXUBI4uwwdKuAL9/sCnAE4GeJPIrV9WuB/MziBgCJk7i9BWB+VKLKHDYAiwuo5RUW9/QmyJMAgXNRCWYrgP5qhVmBQHeus87Y1QhAjztvPDocbwNsLzcJQN+oPsy6p2wXXgLg4j0kmO9Zk9ui9tBfzrV0r/L3P9wOwPXvJHacKLudkT/O4fHkW4Jib2pYv3dclPlPhTh9Jl6nPW7vQcP698W5RddqMGQyVpbb7fHqEjg3KVUTxLA56Ha7XB63OwKV3ZuU0QfnPXLlUOxxpcTZ0laS4755dVz2yMq4Fxtbj2WppO6bd8P8Zyao9Q0OU8q9Z3p8Koq8CZF1h9lqaixlRn0w5HWtLCytsSVTc8y0rahIpxNFz3S6Ip1Y26J2ITTQLoQG2oXQQLsQGmgXQgPtQmigXQgNtAuhgXYhNNAuhAbahShoFwXtoqBdFLSLgnZR0C4K2kVBuyhoFwXtIofOIDTQLoQG2sVzGmgX72qgXfyggXaxVwPtQmigXYj/S7tQU7WLrQCBfwFnft8xK3413wAAAABJRU5ErkJggg==)";
c.style.backgroundRepeat=a.style.backgroundRepeat="no-repeat";c.style.backgroundPosition="-54px 0";if(this.settings.colorScheme==="dark")a.style.backgroundPosition="0 -51px",c.style.backgroundPosition="-54px -51px";d.appendChild(b);this.loadingElem=b;this.timeout=setTimeout(function(){if(b)(new Image).src=DISQUS.serialize("//juggler.services.disqus.com/stat.gif",{event:"slow_embed"}),a.insertAdjacentHTML("afterend",'<p align="center">Disqus seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>')},
15E3)};i.removeLoadingAnim=function(){var b=this.loadingElem,a=this.container;if(this.timeout)h.clearTimeout(this.timeout),this.timeout=null;b&&b.parentNode===a&&a.removeChild(b)};i.destroy=function(){var b=this.indicators;this.off();this.removeLoadingAnim();this.frame&&this.frame.destroy();this.profile&&this.profile.destroy();if(b.north)b.north.destroy(),b.north=null;if(b.south)b.south.destroy(),b.south=null;DISQUS.App.prototype.destroy.call(this)};i.getWindowYCoords=function(){if(typeof h.pageYOffset==
"number")this.getWindowScroll=function(){return h.pageYOffset},this.getWindowHeight=function(){return h.innerHeight};else{var b=h.document,b=b.documentElement.clientHeight||b.documentElement.clientWidth?b.documentElement:b.body;this.getWindowScroll=function(){return b.scrollTop};this.getWindowHeight=function(){return b.clientHeight}}this.getWindowYCoords=function(){return{pageYOffset:this.getWindowScroll(),innerHeight:this.getWindowHeight()}};return this.getWindowYCoords()};i.scrollListener=function(){var b=
this.frame,a=b.getOffset(),c=a.top,d=c+a.height,e=this.getWindowYCoords(),f=e.pageYOffset,e=e.innerHeight,i=f+e,h=!1,k=!1;c<=i+e&&(k=(h=d>=f)&&c<=i);h&&(b.sendMessage("window.scroll",{frameOffset:a,pageOffset:f,height:e}),this.wasNearViewport||b.sendMessage("window.nearViewport"));this.wasNearViewport=h;if(k!==this.wasInViewport)b.sendMessage(k?"window.inViewport":"window.scrollOffViewport"),this.wasInViewport=k};i=function(b){return new d(b)};DISQUS.extend(i,{listByKey:function(){var b={};f(function(a){b[a.uid]=
a});return b},list:function(){var b=[];f(function(a){b.push(a)});return b},get:function(b){b=DISQUS.App.get(b);return b instanceof d&&b}});return{Lounge:i}});
DISQUS.define("next.host.ignition",function(h){function l(d){for(var f=DISQUS.App.list(),b,a=0,c=f.length;a<c;a++)b=f[a],b instanceof e&&d(b)}var f=DISQUS.use("next.host.lounge"),e=function(d){DISQUS.App.call(this);this.settings=d;this.container=d.container;this.frame=null},k=e.prototype;DISQUS.extend(k,DISQUS.App.prototype);k.init=function(){var d=this,e=d.container,b=d.settings,a="http://disqus.com/embed/ignition/",c="http://disqus.com";b.useSSL&&(a="https://disqus.com/embed/ignition/",c="https://disqus.com");
var g=d.frame=new DISQUS.Channel({origin:c,target:DISQUS.serialize(a,{f:b.forum,t_i:b.identifier,t_u:b.url||h.location.href,t_s:b.slug,t_t:b.title||b.documentTitle,t_e:b.title,t_d:b.documentTitle,t_c:b.category}),container:e,uid:d.uid,role:"complementary"});g.on("ready",function(){g.sendMessage("init",{anchorColor:b.anchorColor,referrer:h.location.href,colorScheme:b.colorScheme,language:b.language,typeface:b.typeface})});g.on("resize",function(a){g.elem.style.height=a.height+"px";g.sendMessage("embed.resized")});
g.on("fail",function(a){g.elem.style.height="75px";d.trigger("fail",a)});g.on("ignite",function(a){if(!d.lounge||d.lounge.frame.isKilled())a=DISQUS.extend({windowName:a.windowName},d.settings),d.lounge=f.Lounge(a),d.lounge.init()});g.load(function(){g.elem.setAttribute("scrolling","no");g.elem.setAttribute("horizontalscrolling","no");g.elem.setAttribute("verticalscrolling","no")});d.listenTo(DISQUS,"switches.changed",function(a){g.sendMessage("switches.changed",a)})};k.destroy=function(){this.off();
this.frame&&this.frame.destroy();DISQUS.App.prototype.destroy.call(this)};k=function(d){return new e(d)};DISQUS.extend(k,{listByKey:function(){var d={};l(function(e){d[e.uid]=e});return d},list:function(){var d=[];l(function(e){d.push(e)});return d},get:function(d){d=DISQUS.App.get(d);return d instanceof e&&d}});return{Ignition:k}});
DISQUS.define("next.host.config",function(h,l){var f=DISQUS.use("next.host.utils"),e=function(d,e){this.win=d;this.configurator=e;this.config={page:{url:l,title:l,slug:l,category_id:l,identifier:l,language:l,api_key:l,remote_auth_s3:l,author_s3:l},strings:l,sso:{},callbacks:{preData:[],preInit:[],onInit:[],afterRender:[],onReady:[],onNewComment:[],preReset:[],onPaginate:[],onIdentify:[]}}};e.DISQUS_GLOBALS=["shortname","identifier","url","title","category_id","slug"];var k=e.prototype;k.getContainer=
function(){var d=this.win;return d.document.getElementById(d.disqus_container_id||"disqus_thread")};k.runConfigurator=function(){var d=this.configurator||this.win.disqus_config;if(typeof d==="function")try{d.call(this.config)}catch(e){}};k.getValuesFromGlobals=function(){var d=this.win,h=this.config,b=h.page,a;DISQUS.each(e.DISQUS_GLOBALS,function(a){var e=d["disqus_"+a];typeof e!=="undefined"&&(b[a]=e)});this.runConfigurator();if(!h.forum)a=b.shortname,h.forum=a?a.toLowerCase():f.getForum(d.document);
h.demo=d.disqus_demo};k.toJSON=function(){var d=this.win,e=this.config,b=e.page,a=this.getContainer();this.getValuesFromGlobals();return{container:a,forum:e.forum,sortOrder:"default",permalink:f.getPermalink(),useSSL:f.isSSL(d.location.protocol),language:e.language,typeface:f.isSerif(a)?"serif":"sans-serif",anchorColor:f.getAnchorColor(a),colorScheme:128<f.getContrastYIQ(f.getElementStyle(a,"span","color"))?"dark":"light",url:b.url||d.location.href.replace(/#.*$/,""),title:b.title,documentTitle:f.guessThreadTitle(),
slug:b.slug,category:b.category_id,identifier:b.identifier,apiKey:b.api_key,remoteAuthS3:b.remote_auth_s3,sso:e.sso,useConman:e.demo,unsupported:f.getBrowserSupport(d),callbacks:e.callbacks}};return{HostConfig:e}});
(function(h,l){function f(a){k.configurator=a;a=k.toJSON();if(!b)a.container.innerHTML="",b=!0;if(!i)i=e.switches.Switches({container:a.container,useSSL:a.useSSL}),a.switches=i,i.init();d=!a.unsupported&&h.disqus_ignition?e.ignition.Ignition(a):e.lounge.Lounge(a);d.init();a.unsupported||i.fetch({data:{forum:a.forum}})}var e=DISQUS.use("next.host"),k=new e.config.HostConfig(h),d,i,b=!1;f();DISQUS.domready(function(){if(l.getElementsByClassName){var a=l.getElementsByClassName("dsq-brlink");a&&a.length&&
a[0].parentNode.removeChild(a[0])}});DISQUS.request={get:function(a,b,d){DISQUS.require(a,b,d)}};DISQUS.reset=function(a){a=a||{};d&&(d.destroy(),d=null);a.reload&&f(a.config)}})(this,this.document);