/**
 * Victor Longon
 * @version 0.1
 * @author www.victorlongon.com
 * @copyright Victor Longon 2015
 */

// Doc content loaded
(function () {

    document.addEventListener("DOMContentLoaded", function() {

        var settings = {},
            plugin = new JSformLabel();

        // use default settings
        plugin.init(settings);

    });

})();


/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
(function(w) {
  "use strict";
  w.matchMedia = w.matchMedia || function(doc, undefined) {
    var bool, docElem = doc.documentElement, refNode = docElem.firstElementChild || docElem.firstChild, fakeBody = doc.createElement("body"), div = doc.createElement("div");
    div.id = "mq-test-1";
    div.style.cssText = "position:absolute;top:-100em";
    fakeBody.style.background = "none";
    fakeBody.appendChild(div);
    return function(q) {
      div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';
      docElem.insertBefore(fakeBody, refNode);
      bool = div.offsetWidth === 42;
      docElem.removeChild(fakeBody);
      return {
        matches: bool,
        media: q
      };
    };
  }(w.document);
})(this);

(function(w) {
  "use strict";
  var respond = {};
  w.respond = respond;
  respond.update = function() {};
  var requestQueue = [], xmlHttp = function() {
    var xmlhttpmethod = false;
    try {
      xmlhttpmethod = new w.XMLHttpRequest();
    } catch (e) {
      xmlhttpmethod = new w.ActiveXObject("Microsoft.XMLHTTP");
    }
    return function() {
      return xmlhttpmethod;
    };
  }(), ajax = function(url, callback) {
    var req = xmlHttp();
    if (!req) {
      return;
    }
    req.open("GET", url, true);
    req.onreadystatechange = function() {
      if (req.readyState !== 4 || req.status !== 200 && req.status !== 304) {
        return;
      }
      callback(req.responseText);
    };
    if (req.readyState === 4) {
      return;
    }
    req.send(null);
  }, isUnsupportedMediaQuery = function(query) {
    return query.replace(respond.regex.minmaxwh, "").match(respond.regex.other);
  };
  respond.ajax = ajax;
  respond.queue = requestQueue;
  respond.unsupportedmq = isUnsupportedMediaQuery;
  respond.regex = {
    media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
    keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
    comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
    urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
    findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
    only: /(only\s+)?([a-zA-Z]+)\s?/,
    minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
    maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
    minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
    other: /\([^\)]*\)/g
  };
  respond.mediaQueriesSupported = w.matchMedia && w.matchMedia("only all") !== null && w.matchMedia("only all").matches;
  if (respond.mediaQueriesSupported) {
    return;
  }
  var doc = w.document, docElem = doc.documentElement, mediastyles = [], rules = [], appendedEls = [], parsedSheets = {}, resizeThrottle = 30, head = doc.getElementsByTagName("head")[0] || docElem, base = doc.getElementsByTagName("base")[0], links = head.getElementsByTagName("link"), lastCall, resizeDefer, eminpx, getEmValue = function() {
    var ret, div = doc.createElement("div"), body = doc.body, originalHTMLFontSize = docElem.style.fontSize, originalBodyFontSize = body && body.style.fontSize, fakeUsed = false;
    div.style.cssText = "position:absolute;font-size:1em;width:1em";
    if (!body) {
      body = fakeUsed = doc.createElement("body");
      body.style.background = "none";
    }
    docElem.style.fontSize = "100%";
    body.style.fontSize = "100%";
    body.appendChild(div);
    if (fakeUsed) {
      docElem.insertBefore(body, docElem.firstChild);
    }
    ret = div.offsetWidth;
    if (fakeUsed) {
      docElem.removeChild(body);
    } else {
      body.removeChild(div);
    }
    docElem.style.fontSize = originalHTMLFontSize;
    if (originalBodyFontSize) {
      body.style.fontSize = originalBodyFontSize;
    }
    ret = eminpx = parseFloat(ret);
    return ret;
  }, applyMedia = function(fromResize) {
    var name = "clientWidth", docElemProp = docElem[name], currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[name] || docElemProp, styleBlocks = {}, lastLink = links[links.length - 1], now = new Date().getTime();
    if (fromResize && lastCall && now - lastCall < resizeThrottle) {
      w.clearTimeout(resizeDefer);
      resizeDefer = w.setTimeout(applyMedia, resizeThrottle);
      return;
    } else {
      lastCall = now;
    }
    for (var i in mediastyles) {
      if (mediastyles.hasOwnProperty(i)) {
        var thisstyle = mediastyles[i], min = thisstyle.minw, max = thisstyle.maxw, minnull = min === null, maxnull = max === null, em = "em";
        if (!!min) {
          min = parseFloat(min) * (min.indexOf(em) > -1 ? eminpx || getEmValue() : 1);
        }
        if (!!max) {
          max = parseFloat(max) * (max.indexOf(em) > -1 ? eminpx || getEmValue() : 1);
        }
        if (!thisstyle.hasquery || (!minnull || !maxnull) && (minnull || currWidth >= min) && (maxnull || currWidth <= max)) {
          if (!styleBlocks[thisstyle.media]) {
            styleBlocks[thisstyle.media] = [];
          }
          styleBlocks[thisstyle.media].push(rules[thisstyle.rules]);
        }
      }
    }
    for (var j in appendedEls) {
      if (appendedEls.hasOwnProperty(j)) {
        if (appendedEls[j] && appendedEls[j].parentNode === head) {
          head.removeChild(appendedEls[j]);
        }
      }
    }
    appendedEls.length = 0;
    for (var k in styleBlocks) {
      if (styleBlocks.hasOwnProperty(k)) {
        var ss = doc.createElement("style"), css = styleBlocks[k].join("\n");
        ss.type = "text/css";
        ss.media = k;
        head.insertBefore(ss, lastLink.nextSibling);
        if (ss.styleSheet) {
          ss.styleSheet.cssText = css;
        } else {
          ss.appendChild(doc.createTextNode(css));
        }
        appendedEls.push(ss);
      }
    }
  }, translate = function(styles, href, media) {
    var qs = styles.replace(respond.regex.comments, "").replace(respond.regex.keyframes, "").match(respond.regex.media), ql = qs && qs.length || 0;
    href = href.substring(0, href.lastIndexOf("/"));
    var repUrls = function(css) {
      return css.replace(respond.regex.urls, "$1" + href + "$2$3");
    }, useMedia = !ql && media;
    if (href.length) {
      href += "/";
    }
    if (useMedia) {
      ql = 1;
    }
    for (var i = 0; i < ql; i++) {
      var fullq, thisq, eachq, eql;
      if (useMedia) {
        fullq = media;
        rules.push(repUrls(styles));
      } else {
        fullq = qs[i].match(respond.regex.findStyles) && RegExp.$1;
        rules.push(RegExp.$2 && repUrls(RegExp.$2));
      }
      eachq = fullq.split(",");
      eql = eachq.length;
      for (var j = 0; j < eql; j++) {
        thisq = eachq[j];
        if (isUnsupportedMediaQuery(thisq)) {
          continue;
        }
        mediastyles.push({
          media: thisq.split("(")[0].match(respond.regex.only) && RegExp.$2 || "all",
          rules: rules.length - 1,
          hasquery: thisq.indexOf("(") > -1,
          minw: thisq.match(respond.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
          maxw: thisq.match(respond.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
        });
      }
    }
    applyMedia();
  }, makeRequests = function() {
    if (requestQueue.length) {
      var thisRequest = requestQueue.shift();
      ajax(thisRequest.href, function(styles) {
        translate(styles, thisRequest.href, thisRequest.media);
        parsedSheets[thisRequest.href] = true;
        w.setTimeout(function() {
          makeRequests();
        }, 0);
      });
    }
  }, ripCSS = function() {
    for (var i = 0; i < links.length; i++) {
      var sheet = links[i], href = sheet.href, media = sheet.media, isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";
      if (!!href && isCSS && !parsedSheets[href]) {
        if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
          translate(sheet.styleSheet.rawCssText, href, media);
          parsedSheets[href] = true;
        } else {
          if (!/^([a-zA-Z:]*\/\/)/.test(href) && !base || href.replace(RegExp.$1, "").split("/")[0] === w.location.host) {
            if (href.substring(0, 2) === "//") {
              href = w.location.protocol + href;
            }
            requestQueue.push({
              href: href,
              media: media
            });
          }
        }
      }
    }
    makeRequests();
  };
  ripCSS();
  respond.update = ripCSS;
  respond.getEmValue = getEmValue;
  function callMedia() {
    applyMedia(true);
  }
  if (w.addEventListener) {
    w.addEventListener("resize", callMedia, false);
  } else if (w.attachEvent) {
    w.attachEvent("onresize", callMedia);
  }
})(this);
/*
selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms 
of the MIT license.

selectivizr.com
*/
/* 
  
Notes about this source
-----------------------

 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)
  
  
References:
-----------
 
 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/
 
*/

(function(win) {

	// If browser isn't IE, then stop execution! This handles the script 
	// being loaded by non IE browsers because the developer didn't use 
	// conditional comments.
	if (/*@cc_on!@*/true) return;

	// =========================== Init Objects ============================

	var doc = document;
	var root = doc.documentElement;
	var xhr = getXHRObject();
	var ieVersion = /MSIE (\d+)/.exec(navigator.userAgent)[1];
	
	// If were not in standards mode, IE is too old / new or we can't create
	// an XMLHttpRequest object then we should get out now.
	if (doc.compatMode != 'CSS1Compat' || ieVersion<6 || ieVersion>8 || !xhr) {
		return;
	}
	
	
	// ========================= Common Objects ============================

	// Compatiable selector engines in order of CSS3 support. Note: '*' is
	// a placholder for the object key name. (basically, crude compression)
	var selectorEngines = {
		"NW"								: "*.Dom.select",
		"MooTools"							: "$$",
		"DOMAssistant"						: "*.$", 
		"Prototype"							: "$$",
		"YAHOO"								: "*.util.Selector.query",
		"Sizzle"							: "*", 
		"jQuery"							: "*",
		"dojo"								: "*.query"
	};

	var selectorMethod;
	var enabledWatchers 					= [];     // array of :enabled/:disabled elements to poll
	var ie6PatchID 							= 0;      // used to solve ie6's multiple class bug
	var patchIE6MultipleClasses				= true;   // if true adds class bloat to ie6
	var namespace 							= "slvzr";
	
	// Stylesheet parsing regexp's
	var RE_COMMENT							= /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g;
	var RE_IMPORT							= /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g;
	var RE_ASSET_URL 						= /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g;
	var RE_PSEUDO_STRUCTURAL				= /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
	var RE_PSEUDO_ELEMENTS					= /:(:first-(?:line|letter))/g;
	var RE_SELECTOR_GROUP					= /(^|})\s*([^\{]*?[\[:][^{]+)/g;
	var RE_SELECTOR_PARSE					= /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g; 
	var RE_LIBRARY_INCOMPATIBLE_PSEUDOS		= /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
	var RE_PATCH_CLASS_NAME_REPLACE			= /[^\w-]/g;
	
	// HTML UI element regexp's
	var RE_INPUT_ELEMENTS					= /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
	var RE_INPUT_CHECKABLE_TYPES			= /^(checkbox|radio)$/;

	// Broken attribute selector implementations (IE7/8 native [^=""], [$=""] and [*=""])
	var BROKEN_ATTR_IMPLEMENTATIONS			= ieVersion>6 ? /[\$\^*]=(['"])\1/ : null;

	// Whitespace normalization regexp's
	var RE_TIDY_TRAILING_WHITESPACE			= /([(\[+~])\s+/g;
	var RE_TIDY_LEADING_WHITESPACE			= /\s+([)\]+~])/g;
	var RE_TIDY_CONSECUTIVE_WHITESPACE		= /\s+/g;
	var RE_TIDY_TRIM_WHITESPACE				= /^\s*((?:[\S\s]*\S)?)\s*$/;
	
	// String constants
	var EMPTY_STRING						= "";
	var SPACE_STRING						= " ";
	var PLACEHOLDER_STRING					= "$1";

	// =========================== Patching ================================

	// --[ patchStyleSheet() ]----------------------------------------------
	// Scans the passed cssText for selectors that require emulation and
	// creates one or more patches for each matched selector.
	function patchStyleSheet( cssText ) {
		return cssText.replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING).
			replace(RE_SELECTOR_GROUP, function(m, prefix, selectorText) {	
    			var selectorGroups = selectorText.split(",");
    			for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
    				var selector = normalizeSelectorWhitespace(selectorGroups[c]) + SPACE_STRING;
    				var patches = [];
    				selectorGroups[c] = selector.replace(RE_SELECTOR_PARSE, 
    					function(match, combinator, pseudo, attribute, index) {
    						if (combinator) {
    							if (patches.length>0) {
    								applyPatches( selector.substring(0, index), patches );
    								patches = [];
    							}
    							return combinator;
    						}		
    						else {
    							var patch = (pseudo) ? patchPseudoClass( pseudo ) : patchAttribute( attribute );
    							if (patch) {
    								patches.push(patch);
    								return "." + patch.className;
    							}
    							return match;
    						}
    					}
    				);
    			}
    			return prefix + selectorGroups.join(",");
    		});
	};

	// --[ patchAttribute() ]-----------------------------------------------
	// returns a patch for an attribute selector.
	function patchAttribute( attr ) {
		return (!BROKEN_ATTR_IMPLEMENTATIONS || BROKEN_ATTR_IMPLEMENTATIONS.test(attr)) ? 
			{ className: createClassName(attr), applyClass: true } : null;
	};

	// --[ patchPseudoClass() ]---------------------------------------------
	// returns a patch for a pseudo-class
	function patchPseudoClass( pseudo ) {

		var applyClass = true;
		var className = createClassName(pseudo.slice(1));
		var isNegated = pseudo.substring(0, 5) == ":not(";
		var activateEventName;
		var deactivateEventName;

		// if negated, remove :not() 
		if (isNegated) {
			pseudo = pseudo.slice(5, -1);
		}
		
		// bracket contents are irrelevant - remove them
		var bracketIndex = pseudo.indexOf("(")
		if (bracketIndex > -1) {
			pseudo = pseudo.substring(0, bracketIndex);
		}		
		
		// check we're still dealing with a pseudo-class
		if (pseudo.charAt(0) == ":") {
			switch (pseudo.slice(1)) {

				case "root":
					applyClass = function(e) {
						return isNegated ? e != root : e == root;
					}
					break;

				case "target":
					// :target is only supported in IE8
					if (ieVersion == 8) {
						applyClass = function(e) {
							var handler = function() { 
								var hash = location.hash;
								var hashID = hash.slice(1);
								return isNegated ? (hash == EMPTY_STRING || e.id != hashID) : (hash != EMPTY_STRING && e.id == hashID);
							};
							addEvent( win, "hashchange", function() {
								toggleElementClass(e, className, handler());
							})
							return handler();
						}
						break;
					}
					return false;
				
				case "checked":
					applyClass = function(e) { 
						if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "checked") {
									toggleElementClass( e, className, e.checked !== isNegated );
								} 							
							})
						}
						return e.checked !== isNegated;
					}
					break;
					
				case "disabled":
					isNegated = !isNegated;

				case "enabled":
					applyClass = function(e) { 
						if (RE_INPUT_ELEMENTS.test(e.tagName)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "$disabled") {
									toggleElementClass( e, className, e.$disabled === isNegated );
								} 
							});
							enabledWatchers.push(e);
							e.$disabled = e.disabled;
							return e.disabled === isNegated;
						}
						return pseudo == ":enabled" ? isNegated : !isNegated;
					}
					break;
					
				case "focus":
					activateEventName = "focus";
					deactivateEventName = "blur";
								
				case "hover":
					if (!activateEventName) {
						activateEventName = "mouseenter";
						deactivateEventName = "mouseleave";
					}
					applyClass = function(e) {
						addEvent( e, isNegated ? deactivateEventName : activateEventName, function() {
							toggleElementClass( e, className, true );
						})
						addEvent( e, isNegated ? activateEventName : deactivateEventName, function() {
							toggleElementClass( e, className, false );
						})
						return isNegated;
					}
					break;
					
				// everything else
				default:
					// If we don't support this pseudo-class don't create 
					// a patch for it
					if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
						return false;
					}
					break;
			}
		}
		return { className: className, applyClass: applyClass };
	};

	// --[ applyPatches() ]-------------------------------------------------
	// uses the passed selector text to find DOM nodes and patch them	
	function applyPatches(selectorText, patches) {
		var elms;
		
		// Although some selector libraries can find :checked :enabled etc. 
		// we need to find all elements that could have that state because 
		// it can be changed by the user.
		var domSelectorText = selectorText.replace(RE_LIBRARY_INCOMPATIBLE_PSEUDOS, EMPTY_STRING);
		
		// If the dom selector equates to an empty string or ends with 
		// whitespace then we need to append a universal selector (*) to it.
		if (domSelectorText == EMPTY_STRING || domSelectorText.charAt(domSelectorText.length - 1) == SPACE_STRING) {
			domSelectorText += "*";
		}
		
		// Ensure we catch errors from the selector library
		try {
			elms = selectorMethod( domSelectorText );
		} catch (ex) {
			// #DEBUG_START
			log( "Selector '" + selectorText + "' threw exception '" + ex + "'" );
			// #DEBUG_END
		}


		if (elms) {
			for (var d = 0, dl = elms.length; d < dl; d++) {	
				var elm = elms[d];
				var cssClasses = elm.className;
				for (var f = 0, fl = patches.length; f < fl; f++) {
					var patch = patches[f];
					
					if (!hasPatch(elm, patch)) {
						if (patch.applyClass && (patch.applyClass === true || patch.applyClass(elm) === true)) {
							cssClasses = toggleClass(cssClasses, patch.className, true );
						}
					}
				}
				elm.className = cssClasses;
			}
		}
	};

	// --[ hasPatch() ]-----------------------------------------------------
	// checks for the exsistence of a patch on an element
	function hasPatch( elm, patch ) {
		return new RegExp("(^|\\s)" + patch.className + "(\\s|$)").test(elm.className);
	};
	
	
	// =========================== Utility =================================
	
	function createClassName( className ) {
		return namespace + "-" + ((ieVersion == 6 && patchIE6MultipleClasses) ?
			ie6PatchID++
		:
			className.replace(RE_PATCH_CLASS_NAME_REPLACE, function(a) { return a.charCodeAt(0) }));
	};

	// --[ log() ]----------------------------------------------------------
	// #DEBUG_START
	function log( message ) {
		if (win.console) {
			win.console.log(message);
		}
	};
	// #DEBUG_END

	// --[ trim() ]---------------------------------------------------------
	// removes leading, trailing whitespace from a string
	function trim( text ) {
		return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING);
	};

	// --[ normalizeWhitespace() ]------------------------------------------
	// removes leading, trailing and consecutive whitespace from a string
	function normalizeWhitespace( text ) {
		return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING);
	};

	// --[ normalizeSelectorWhitespace() ]----------------------------------
	// tidies whitespace around selector brackets and combinators
	function normalizeSelectorWhitespace( selectorText ) {
		return normalizeWhitespace(selectorText.
			replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING).
			replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING)
		);
	};

	// --[ toggleElementClass() ]-------------------------------------------
	// toggles a single className on an element
	function toggleElementClass( elm, className, on ) {
		var oldClassName = elm.className;
		var newClassName = toggleClass(oldClassName, className, on);
		if (newClassName != oldClassName) {
			elm.className = newClassName;
			elm.parentNode.className += EMPTY_STRING;
		}
	};

	// --[ toggleClass() ]--------------------------------------------------
	// adds / removes a className from a string of classNames. Used to 
	// manage multiple class changes without forcing a DOM redraw
	function toggleClass( classList, className, on ) {
		var re = RegExp("(^|\\s)" + className + "(\\s|$)");
		var classExists = re.test(classList);
		if (on) {
			return classExists ? classList : classList + SPACE_STRING + className;
		} else {
			return classExists ? trim(classList.replace(re, PLACEHOLDER_STRING)) : classList;
		}
	};
	
	// --[ addEvent() ]-----------------------------------------------------
	function addEvent(elm, eventName, eventHandler) {
		elm.attachEvent("on" + eventName, eventHandler);
	};

	// --[ getXHRObject() ]-------------------------------------------------
	function getXHRObject()
	{
		if (win.XMLHttpRequest) {
			return new XMLHttpRequest;
		}
		try	{ 
			return new ActiveXObject('Microsoft.XMLHTTP');
		} catch(e) { 
			return null;
		}
	};

	// --[ loadStyleSheet() ]-----------------------------------------------
	function loadStyleSheet( url ) {
		xhr.open("GET", url, false);
		xhr.send();
		return (xhr.status==200) ? xhr.responseText : EMPTY_STRING;	
	};
	
	// --[ resolveUrl() ]---------------------------------------------------
	// Converts a URL fragment to a fully qualified URL using the specified
	// context URL. Returns null if same-origin policy is broken
	function resolveUrl( url, contextUrl ) {
	
		function getProtocolAndHost( url ) {
			return url.substring(0, url.indexOf("/", 8));
		};
		
		// absolute path
		if (/^https?:\/\//i.test(url)) {
			return getProtocolAndHost(contextUrl) == getProtocolAndHost(url) ? url : null;
		}
		
		// root-relative path
		if (url.charAt(0)=="/")	{
			return getProtocolAndHost(contextUrl) + url;
		}

		// relative path
		var contextUrlPath = contextUrl.split(/[?#]/)[0]; // ignore query string in the contextUrl	
		if (url.charAt(0) != "?" && contextUrlPath.charAt(contextUrlPath.length - 1) != "/") {
			contextUrlPath = contextUrlPath.substring(0, contextUrlPath.lastIndexOf("/") + 1);
		}
		
		return contextUrlPath + url;
	};
	
	// --[ parseStyleSheet() ]----------------------------------------------
	// Downloads the stylesheet specified by the URL, removes it's comments
	// and recursivly replaces @import rules with their contents, ultimately
	// returning the full cssText.
	function parseStyleSheet( url ) {
		if (url) {
			return loadStyleSheet(url).replace(RE_COMMENT, EMPTY_STRING).
			replace(RE_IMPORT, function( match, quoteChar, importUrl, quoteChar2, importUrl2 ) { 
				return parseStyleSheet(resolveUrl(importUrl || importUrl2, url));
			}).
			replace(RE_ASSET_URL, function( match, quoteChar, assetUrl ) { 
				quoteChar = quoteChar || EMPTY_STRING;
				return " url(" + quoteChar + resolveUrl(assetUrl, url) + quoteChar + ") "; 
			});
		}
		return EMPTY_STRING;
	};
	
	// --[ init() ]---------------------------------------------------------
	function init() {
		// honour the <base> tag
		var url, stylesheet;
		var baseTags = doc.getElementsByTagName("BASE");
		var baseUrl = (baseTags.length > 0) ? baseTags[0].href : doc.location.href;
		
		/* Note: This code prevents IE from freezing / crashing when using 
		@font-face .eot files but it modifies the <head> tag and could
		trigger the IE stylesheet limit. It will also cause FOUC issues.
		If you choose to use it, make sure you comment out the for loop 
		directly below this comment.

		var head = doc.getElementsByTagName("head")[0];
		for (var c=doc.styleSheets.length-1; c>=0; c--) {
			stylesheet = doc.styleSheets[c]
			head.appendChild(doc.createElement("style"))
			var patchedStylesheet = doc.styleSheets[doc.styleSheets.length-1];
			
			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href, baseUrl)
				if (url) {
					patchedStylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) )
					stylesheet.disabled = true
					setTimeout( function () {
						stylesheet.owningElement.parentNode.removeChild(stylesheet.owningElement)
					})
				}
			}
		}
		*/
		
		for (var c = 0; c < doc.styleSheets.length; c++) {
			stylesheet = doc.styleSheets[c]
			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href, baseUrl);
				if (url) {
					stylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) );
				}
			}
		}
		
		// :enabled & :disabled polling script (since we can't hook 
		// onpropertychange event when an element is disabled) 
		if (enabledWatchers.length > 0) {
			setInterval( function() {
				for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
					var e = enabledWatchers[c];
					if (e.disabled !== e.$disabled) {
						if (e.disabled) {
							e.disabled = false;
							e.$disabled = true;
							e.disabled = true;
						}
						else {
							e.$disabled = e.disabled;
						}
					}
				}
			},250)
		}
	};
	
	// Bind selectivizr to the ContentLoaded event. 
	ContentLoaded(win, function() {
		// Determine the "best fit" selector engine
		for (var engine in selectorEngines) {
			var members, member, context = win;
			if (win[engine]) {
				members = selectorEngines[engine].replace("*", engine).split(".");
				while ((member = members.shift()) && (context = context[member])) {}
				if (typeof context == "function") {
					selectorMethod = context;
					init();
					return;
				}
			}
		}
	});
	
	
	/*!
	 * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
	 *
	 * Author: Diego Perini (diego.perini at gmail.com)
	 * Summary: cross-browser wrapper for DOMContentLoaded
	 * Updated: 20101020
	 * License: MIT
	 * Version: 1.2
	 *
	 * URL:
	 * http://javascript.nwbox.com/ContentLoaded/
	 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	 *
	 */

	// @w window reference
	// @f function reference
	function ContentLoaded(win, fn) {

		var done = false, top = true,
		init = function(e) {
			if (e.type == "readystatechange" && doc.readyState != "complete") return;
			(e.type == "load" ? win : doc).detachEvent("on" + e.type, init, false);
			if (!done && (done = true)) fn.call(win, e.type || e);
		},
		poll = function() {
			try { root.doScroll("left"); } catch(e) { setTimeout(poll, 50); return; }
			init('poll');
		};

		if (doc.readyState == "complete") fn.call(win, EMPTY_STRING);
		else {
			if (doc.createEventObject && root.doScroll) {
				try { top = !win.frameElement; } catch(e) { }
				if (top) poll();
			}
			addEvent(doc,"readystatechange", init);
			addEvent(win,"load", init);
		}
	};
})(this);
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.JSformLabel = factory(root);
	}
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//

	var JSformLabel = function() {}, // Object for public APIs
		transitionsSupported = ('transition' in document.documentElement.style) || ('WebkitTransition' in document.documentElement.style), //IE 10+, Chrome 1+, Safari 3.2+, FF 4+ and Opera 12+
		supports = !!document.querySelector && !!root.addEventListener && !!transitionsSupported, // Feature test
		eventTimeout,
		defaults = {
			initClass: 'js-formlabel-plugin',
			callbackBefore: function () {
			},
			callbackAfter: function () {
			},
			scope: document,
			selector: 'input[type="text"], input[type="email"]',
			focusColor: "#0eaee8",
			blurColor: "#a3a2a0",
			textColor: '#ffffff',
			delay: '0',
			speed: '.3',
			easing: 'ease',
			customStyles: false,
			height: '25px',
			focusClass: 'js-formlabel-plugin-focus',
			blurClass: 'js-formlabel-plugin-blur'
		},
		settings; //settings object result from merging default and options (given at initialization) objects 

	//§
	// Methods
	//

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists
	 * @private
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function} callback Callback function for each iteration
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var forEach = function (collection, callback, scope) {
		if (Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if (Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			for (var i = 0, len = collection.length; i < len; i++) {
				callback.call(scope, collection[i], i, collection);
			}
		}
	};

	/**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */
	var extend = function ( defaults, options ) {
		var extended = {};
		forEach(defaults, function (value, prop) {
			extended[prop] = defaults[prop];
		});
		forEach(options, function (value, prop) {
			extended[prop] = options[prop];
		});
		return extended;
	};


	var prefixtransition = function(){
		
	};

	/**
	 * Get the closest matching element up the DOM tree
	 * @param {Element} elem Starting element
	 * @param {String} selector Selector to match against (class, ID, or data attribute)
	 * @return {Boolean|Element} Returns false if not match found
	 */
	var getClosest = function (elem, selector) {
		var firstChar = selector.charAt(0);
		for ( ; elem && elem !== document; elem = elem.parentNode ) {
			if ( firstChar === '.' ) {
				if ( elem.classList.contains( selector.substr(1) ) ) {
					return elem;
				}
			} else if ( firstChar === '#' ) {
				if ( elem.id === selector.substr(1) ) {
					return elem;
				}
			} else if ( firstChar === '[' ) {
				if ( elem.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
					return elem;
				}
			}
		}
		return false;
	};
	
	/**
	 * Hide Labels if placeholder is presented, show if otherwise
	 * @private
	 * @return {Null|Element} Returns label asscioated with element or null if no founded 
	 * @param {String} selector Selector to match against
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var hideLabels = function (selector, parent) {
		var elements = document.querySelectorAll(selector),
			scope = parent || document;

		forEach(elements, function(e,i){
			// get label and placeholder for the input
			var label = getLabel(e),
				placeholder = e.getAttribute('placeholder'); 

			// display all labels as block
			if(label !== undefined) {label.style.display = 'block'; }

			// hide the label only if there is a placeholder 
			if (placeholder !== null && placeholder !== '') {
				
				e.setAttribute('data-placeholder', placeholder);
				if (!settings.customStyles) {
					e.style.position = "relative";
					e.style.zIndex = "2";
					e.style.height = settings.height;
					label.style.background = settings.focusColor;
					label.style.height = settings.height;
					label.style.color = settings.textColor;
					//label.style.maxHeight = '0';
					//label.style.transform = 'scale3d(1,0,1)';
					label.style.transition = (settings.speed) + 's';
					label.style.transform = "translateY(100%)";
					// label.style.opacity = '0';
					// label.style.transition = 'transform ' + (settings.speed) + 's' + ', opacity ' + (settings.speed / 4) +'s';
				}				
				
				e.classList.add(settings.blurClass);
			}else{
				//don't apply class taggle / effect for inputs without placeholder
				e.classList.add('js-formlabel-plugin-inactive');
			}

		}, parent);

	};

	var revealLabel = function (el){

		var label = getLabel(el);

		el.setAttribute('placeholder', '');

		if  (el.classList.contains(settings.blurClass)) {
			if (!settings.customStyles) {
				// hide the label only if there is a placeholder 
				label.style.transform = "translateY(0)";
				// label.style.opacity = '1';
				//label.style.maxHeight = '50px';
				//label.style.transform = 'scale3d(1,1,1)';
			}
		}
		
		if (!el.classList.contains('js-formlabel-plugin-inactive')) {

			el.classList.remove(settings.blurClass); 
			el.classList.add(settings.focusClass); 
		}
	};

	var hideLabel = function (el){

		var label = getLabel(el),
		placeholder =  el.getAttribute('data-placeholder') || '';

		el.setAttribute('placeholder', placeholder);


		// hide the label only if there is a placeholder 
		if (el.classList.contains(settings.focusClass)) {
			if (!settings.customStyles) {
				label.style.transform = "translateY(100%)";
				// label.style.opacity = '0';
				// label.style.transition = 'transform ' + (settings.speed / 4) + 's' + ', opacity ' + (settings.speed / 2) +'s';
				//label.style.maxHeight = '0';
				//label.style.transform = 'scale3d(1,0,1)';
			}
			
		}
		if (!el.classList.contains('js-formlabel-plugin-inactive')) {
			el.classList.remove(settings.focusClass);
			el.classList.add(settings.blurClass);	
		}
	};


	/**
	 * Get a label associated with a specific inout
	 * @private
	 * @param {Element} el element to match against
	 * @return {Null|Element} Returns label asscioated with element or null if no founded 
	 */
	var getLabel = function (el) {
	   var id = el.id,
	   		labels = document.querySelectorAll('label');
	   for( var i = 0; i < labels.length; i++ ) {
	      if (labels[i].getAttribute('for') === id)
	           return labels[i];
	   }
	};

	/**
	 * Handle events
	 * @private
	 */
	var eventHandlerFocus = function (event) {
		var el = event.target;
		// var closest = getClosest(el, settings.selector);
		// if ( closest ) {
		// 	// run methods
		// }
		
		revealLabel(el, settings.scope);
	};

	/**
	 * Handle events
	 * @private
	 */
	var eventHandlerBlur = function (event) {
		var el = event.target;
		// var closest = getClosest(el, settings.selector);
		// if ( closest ) {
		// 	// run methods
		// }
		
		hideLabel(el, settings.scope);
	};

	/**
	 * On window scroll and resize, only run events at a rate of 15fps for better performance
	 * @private
	 * @param  {Function} eventTimeout Timeout function
	 * @param  {Object} settings
	 */
	var eventThrottler = function () {
		if ( !eventTimeout ) {
			eventTimeout = setTimeout(function() {
				eventTimeout = null;
				actualMethod( settings );
			}, 66);
		}
	};

	/**
	 * Destroy the current initialization.
	 * @public
	 */
	JSformLabel.prototype.destroy = function () {

		// If plugin isn't already initialized, stop
		if ( !settings ) return;

		// Remove init class for conditional CSS
		document.documentElement.classList.remove( settings.initClass );

		// @todo Undo any other init functions...

		// Remove event listeners
		document.removeEventListener('click', eventHandler, false);

		// Reset variables
		settings = null;
		eventTimeout = null;


	};

	


	/**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */
	JSformLabel.prototype.init = function ( options ) {

		// feature test
		if ( !supports ) return;

		// Destroy any existing initializations
		this.destroy();

		// Merge user options with defaults
		settings = extend( defaults, options || {} );

		settings.callbackBefore('transform');

		// Add class to HTML element to activate conditional CSS
		document.documentElement.classList.add( settings.initClass );

		hideLabels(settings.selector, settings.scope);

		// @todo Do something...

		// Listen for events
		document.addEventListener('focus', eventHandlerFocus, true);
		document.addEventListener('blur', eventHandlerBlur, true);
		//document.addEventListener('blur', hideLabels(event.target), false);

		settings.callbackAfter();

	};

	//
	// Public APIs
	//

	return JSformLabel;

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2Rlcm5penIuanMiLCJyZXNwb25kLnNyYy5qcyIsInNlbGVjdGl2aXpyLmpzIiwianMuZm9ybWxhYmVsLnBsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaGpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBWaWN0b3IgTG9uZ29uXHJcbiAqIEB2ZXJzaW9uIDAuMVxyXG4gKiBAYXV0aG9yIHd3dy52aWN0b3Jsb25nb24uY29tXHJcbiAqIEBjb3B5cmlnaHQgVmljdG9yIExvbmdvbiAyMDE1XHJcbiAqL1xyXG5cclxuLy8gRG9jIGNvbnRlbnQgbG9hZGVkXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHt9LFxyXG4gICAgICAgICAgICBwbHVnaW4gPSBuZXcgSlNmb3JtTGFiZWwoKTtcclxuXHJcbiAgICAgICAgLy8gdXNlIGRlZmF1bHQgc2V0dGluZ3NcclxuICAgICAgICBwbHVnaW4uaW5pdChzZXR0aW5ncyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG59KSgpO1xyXG5cclxuIiwiLyogTW9kZXJuaXpyIDIuOC4zIChDdXN0b20gQnVpbGQpIHwgTUlUICYgQlNEXHJcbiAqIEJ1aWxkOiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8jLWZvbnRmYWNlLWJhY2tncm91bmRzaXplLWJvcmRlcmltYWdlLWJvcmRlcnJhZGl1cy1ib3hzaGFkb3ctZmxleGJveC1oc2xhLW11bHRpcGxlYmdzLW9wYWNpdHktcmdiYS10ZXh0c2hhZG93LWNzc2FuaW1hdGlvbnMtY3NzY29sdW1ucy1nZW5lcmF0ZWRjb250ZW50LWNzc2dyYWRpZW50cy1jc3NyZWZsZWN0aW9ucy1jc3N0cmFuc2Zvcm1zLWNzc3RyYW5zZm9ybXMzZC1jc3N0cmFuc2l0aW9ucy1hcHBsaWNhdGlvbmNhY2hlLWNhbnZhcy1jYW52YXN0ZXh0LWRyYWdhbmRkcm9wLWhhc2hjaGFuZ2UtaGlzdG9yeS1hdWRpby12aWRlby1pbmRleGVkZGItaW5wdXQtaW5wdXR0eXBlcy1sb2NhbHN0b3JhZ2UtcG9zdG1lc3NhZ2Utc2Vzc2lvbnN0b3JhZ2Utd2Vic29ja2V0cy13ZWJzcWxkYXRhYmFzZS13ZWJ3b3JrZXJzLWdlb2xvY2F0aW9uLWlubGluZXN2Zy1zbWlsLXN2Zy1zdmdjbGlwcGF0aHMtdG91Y2gtd2ViZ2wtc2hpdi1tcS1jc3NjbGFzc2VzLWFkZHRlc3QtcHJlZml4ZWQtdGVzdHN0eWxlcy10ZXN0cHJvcC10ZXN0YWxscHJvcHMtaGFzZXZlbnQtcHJlZml4ZXMtZG9tcHJlZml4ZXMtbG9hZFxyXG4gKi9cclxuO3dpbmRvdy5Nb2Rlcm5penI9ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIEQoYSl7ai5jc3NUZXh0PWF9ZnVuY3Rpb24gRShhLGIpe3JldHVybiBEKG4uam9pbihhK1wiO1wiKSsoYnx8XCJcIikpfWZ1bmN0aW9uIEYoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PT1ifWZ1bmN0aW9uIEcoYSxiKXtyZXR1cm4hIX4oXCJcIithKS5pbmRleE9mKGIpfWZ1bmN0aW9uIEgoYSxiKXtmb3IodmFyIGQgaW4gYSl7dmFyIGU9YVtkXTtpZighRyhlLFwiLVwiKSYmaltlXSE9PWMpcmV0dXJuIGI9PVwicGZ4XCI/ZTohMH1yZXR1cm4hMX1mdW5jdGlvbiBJKGEsYixkKXtmb3IodmFyIGUgaW4gYSl7dmFyIGY9YlthW2VdXTtpZihmIT09YylyZXR1cm4gZD09PSExP2FbZV06RihmLFwiZnVuY3Rpb25cIik/Zi5iaW5kKGR8fGIpOmZ9cmV0dXJuITF9ZnVuY3Rpb24gSihhLGIsYyl7dmFyIGQ9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGU9KGErXCIgXCIrcC5qb2luKGQrXCIgXCIpK2QpLnNwbGl0KFwiIFwiKTtyZXR1cm4gRihiLFwic3RyaW5nXCIpfHxGKGIsXCJ1bmRlZmluZWRcIik/SChlLGIpOihlPShhK1wiIFwiK3Euam9pbihkK1wiIFwiKStkKS5zcGxpdChcIiBcIiksSShlLGIsYykpfWZ1bmN0aW9uIEsoKXtlLmlucHV0PWZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyl1W2NbZF1dPWNbZF1pbiBrO3JldHVybiB1Lmxpc3QmJih1Lmxpc3Q9ISFiLmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKSYmISFhLkhUTUxEYXRhTGlzdEVsZW1lbnQpLHV9KFwiYXV0b2NvbXBsZXRlIGF1dG9mb2N1cyBsaXN0IHBsYWNlaG9sZGVyIG1heCBtaW4gbXVsdGlwbGUgcGF0dGVybiByZXF1aXJlZCBzdGVwXCIuc3BsaXQoXCIgXCIpKSxlLmlucHV0dHlwZXM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBkPTAsZSxmLGgsaT1hLmxlbmd0aDtkPGk7ZCsrKWsuc2V0QXR0cmlidXRlKFwidHlwZVwiLGY9YVtkXSksZT1rLnR5cGUhPT1cInRleHRcIixlJiYoay52YWx1ZT1sLGsuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO3Zpc2liaWxpdHk6aGlkZGVuO1wiLC9ecmFuZ2UkLy50ZXN0KGYpJiZrLnN0eWxlLldlYmtpdEFwcGVhcmFuY2UhPT1jPyhnLmFwcGVuZENoaWxkKGspLGg9Yi5kZWZhdWx0VmlldyxlPWguZ2V0Q29tcHV0ZWRTdHlsZSYmaC5nZXRDb21wdXRlZFN0eWxlKGssbnVsbCkuV2Via2l0QXBwZWFyYW5jZSE9PVwidGV4dGZpZWxkXCImJmsub2Zmc2V0SGVpZ2h0IT09MCxnLnJlbW92ZUNoaWxkKGspKTovXihzZWFyY2h8dGVsKSQvLnRlc3QoZil8fCgvXih1cmx8ZW1haWwpJC8udGVzdChmKT9lPWsuY2hlY2tWYWxpZGl0eSYmay5jaGVja1ZhbGlkaXR5KCk9PT0hMTplPWsudmFsdWUhPWwpKSx0W2FbZF1dPSEhZTtyZXR1cm4gdH0oXCJzZWFyY2ggdGVsIHVybCBlbWFpbCBkYXRldGltZSBkYXRlIG1vbnRoIHdlZWsgdGltZSBkYXRldGltZS1sb2NhbCBudW1iZXIgcmFuZ2UgY29sb3JcIi5zcGxpdChcIiBcIikpfXZhciBkPVwiMi44LjNcIixlPXt9LGY9ITAsZz1iLmRvY3VtZW50RWxlbWVudCxoPVwibW9kZXJuaXpyXCIsaT1iLmNyZWF0ZUVsZW1lbnQoaCksaj1pLnN0eWxlLGs9Yi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksbD1cIjopXCIsbT17fS50b1N0cmluZyxuPVwiIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtIFwiLnNwbGl0KFwiIFwiKSxvPVwiV2Via2l0IE1veiBPIG1zXCIscD1vLnNwbGl0KFwiIFwiKSxxPW8udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikscj17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn0scz17fSx0PXt9LHU9e30sdj1bXSx3PXYuc2xpY2UseCx5PWZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBmLGksaixrLGw9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG09Yi5ib2R5LG49bXx8Yi5jcmVhdGVFbGVtZW50KFwiYm9keVwiKTtpZihwYXJzZUludChkLDEwKSl3aGlsZShkLS0paj1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksai5pZD1lP2VbZF06aCsoZCsxKSxsLmFwcGVuZENoaWxkKGopO3JldHVybiBmPVtcIiYjMTczO1wiLCc8c3R5bGUgaWQ9XCJzJyxoLCdcIj4nLGEsXCI8L3N0eWxlPlwiXS5qb2luKFwiXCIpLGwuaWQ9aCwobT9sOm4pLmlubmVySFRNTCs9ZixuLmFwcGVuZENoaWxkKGwpLG18fChuLnN0eWxlLmJhY2tncm91bmQ9XCJcIixuLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsaz1nLnN0eWxlLm92ZXJmbG93LGcuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixnLmFwcGVuZENoaWxkKG4pKSxpPWMobCxhKSxtP2wucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsKToobi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pLGcuc3R5bGUub3ZlcmZsb3c9ayksISFpfSx6PWZ1bmN0aW9uKGIpe3ZhciBjPWEubWF0Y2hNZWRpYXx8YS5tc01hdGNoTWVkaWE7aWYoYylyZXR1cm4gYyhiKSYmYyhiKS5tYXRjaGVzfHwhMTt2YXIgZDtyZXR1cm4geShcIkBtZWRpYSBcIitiK1wiIHsgI1wiK2grXCIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfVwiLGZ1bmN0aW9uKGIpe2Q9KGEuZ2V0Q29tcHV0ZWRTdHlsZT9nZXRDb21wdXRlZFN0eWxlKGIsbnVsbCk6Yi5jdXJyZW50U3R5bGUpW1wicG9zaXRpb25cIl09PVwiYWJzb2x1dGVcIn0pLGR9LEE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkKGQsZSl7ZT1lfHxiLmNyZWF0ZUVsZW1lbnQoYVtkXXx8XCJkaXZcIiksZD1cIm9uXCIrZDt2YXIgZj1kIGluIGU7cmV0dXJuIGZ8fChlLnNldEF0dHJpYnV0ZXx8KGU9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxlLnNldEF0dHJpYnV0ZSYmZS5yZW1vdmVBdHRyaWJ1dGUmJihlLnNldEF0dHJpYnV0ZShkLFwiXCIpLGY9RihlW2RdLFwiZnVuY3Rpb25cIiksRihlW2RdLFwidW5kZWZpbmVkXCIpfHwoZVtkXT1jKSxlLnJlbW92ZUF0dHJpYnV0ZShkKSkpLGU9bnVsbCxmfXZhciBhPXtzZWxlY3Q6XCJpbnB1dFwiLGNoYW5nZTpcImlucHV0XCIsc3VibWl0OlwiZm9ybVwiLHJlc2V0OlwiZm9ybVwiLGVycm9yOlwiaW1nXCIsbG9hZDpcImltZ1wiLGFib3J0OlwiaW1nXCJ9O3JldHVybiBkfSgpLEI9e30uaGFzT3duUHJvcGVydHksQzshRihCLFwidW5kZWZpbmVkXCIpJiYhRihCLmNhbGwsXCJ1bmRlZmluZWRcIik/Qz1mdW5jdGlvbihhLGIpe3JldHVybiBCLmNhbGwoYSxiKX06Qz1mdW5jdGlvbihhLGIpe3JldHVybiBiIGluIGEmJkYoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbYl0sXCJ1bmRlZmluZWRcIil9LEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kfHwoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztpZih0eXBlb2YgYyE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIGQ9dy5jYWxsKGFyZ3VtZW50cywxKSxlPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIGUpe3ZhciBhPWZ1bmN0aW9uKCl7fTthLnByb3RvdHlwZT1jLnByb3RvdHlwZTt2YXIgZj1uZXcgYSxnPWMuYXBwbHkoZixkLmNvbmNhdCh3LmNhbGwoYXJndW1lbnRzKSkpO3JldHVybiBPYmplY3QoZyk9PT1nP2c6Zn1yZXR1cm4gYy5hcHBseShiLGQuY29uY2F0KHcuY2FsbChhcmd1bWVudHMpKSl9O3JldHVybiBlfSkscy5mbGV4Ym94PWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJmbGV4V3JhcFwiKX0scy5jYW52YXM9ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cmV0dXJuISFhLmdldENvbnRleHQmJiEhYS5nZXRDb250ZXh0KFwiMmRcIil9LHMuY2FudmFzdGV4dD1mdW5jdGlvbigpe3JldHVybiEhZS5jYW52YXMmJiEhRihiLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpLmZpbGxUZXh0LFwiZnVuY3Rpb25cIil9LHMud2ViZ2w9ZnVuY3Rpb24oKXtyZXR1cm4hIWEuV2ViR0xSZW5kZXJpbmdDb250ZXh0fSxzLnRvdWNoPWZ1bmN0aW9uKCl7dmFyIGM7cmV0dXJuXCJvbnRvdWNoc3RhcnRcImluIGF8fGEuRG9jdW1lbnRUb3VjaCYmYiBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2g/Yz0hMDp5KFtcIkBtZWRpYSAoXCIsbi5qb2luKFwidG91Y2gtZW5hYmxlZCksKFwiKSxoLFwiKVwiLFwieyNtb2Rlcm5penJ7dG9wOjlweDtwb3NpdGlvbjphYnNvbHV0ZX19XCJdLmpvaW4oXCJcIiksZnVuY3Rpb24oYSl7Yz1hLm9mZnNldFRvcD09PTl9KSxjfSxzLmdlb2xvY2F0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuXCJnZW9sb2NhdGlvblwiaW4gbmF2aWdhdG9yfSxzLnBvc3RtZXNzYWdlPWZ1bmN0aW9uKCl7cmV0dXJuISFhLnBvc3RNZXNzYWdlfSxzLndlYnNxbGRhdGFiYXNlPWZ1bmN0aW9uKCl7cmV0dXJuISFhLm9wZW5EYXRhYmFzZX0scy5pbmRleGVkREI9ZnVuY3Rpb24oKXtyZXR1cm4hIUooXCJpbmRleGVkREJcIixhKX0scy5oYXNoY2hhbmdlPWZ1bmN0aW9uKCl7cmV0dXJuIEEoXCJoYXNoY2hhbmdlXCIsYSkmJihiLmRvY3VtZW50TW9kZT09PWN8fGIuZG9jdW1lbnRNb2RlPjcpfSxzLmhpc3Rvcnk9ZnVuY3Rpb24oKXtyZXR1cm4hIWEuaGlzdG9yeSYmISFoaXN0b3J5LnB1c2hTdGF0ZX0scy5kcmFnYW5kZHJvcD1mdW5jdGlvbigpe3ZhciBhPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm5cImRyYWdnYWJsZVwiaW4gYXx8XCJvbmRyYWdzdGFydFwiaW4gYSYmXCJvbmRyb3BcImluIGF9LHMud2Vic29ja2V0cz1mdW5jdGlvbigpe3JldHVyblwiV2ViU29ja2V0XCJpbiBhfHxcIk1veldlYlNvY2tldFwiaW4gYX0scy5yZ2JhPWZ1bmN0aW9uKCl7cmV0dXJuIEQoXCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTUwLDI1NSwxNTAsLjUpXCIpLEcoai5iYWNrZ3JvdW5kQ29sb3IsXCJyZ2JhXCIpfSxzLmhzbGE9ZnVuY3Rpb24oKXtyZXR1cm4gRChcImJhY2tncm91bmQtY29sb3I6aHNsYSgxMjAsNDAlLDEwMCUsLjUpXCIpLEcoai5iYWNrZ3JvdW5kQ29sb3IsXCJyZ2JhXCIpfHxHKGouYmFja2dyb3VuZENvbG9yLFwiaHNsYVwiKX0scy5tdWx0aXBsZWJncz1mdW5jdGlvbigpe3JldHVybiBEKFwiYmFja2dyb3VuZDp1cmwoaHR0cHM6Ly8pLHVybChodHRwczovLykscmVkIHVybChodHRwczovLylcIiksLyh1cmxcXHMqXFwoLio/KXszfS8udGVzdChqLmJhY2tncm91bmQpfSxzLmJhY2tncm91bmRzaXplPWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJiYWNrZ3JvdW5kU2l6ZVwiKX0scy5ib3JkZXJpbWFnZT1mdW5jdGlvbigpe3JldHVybiBKKFwiYm9yZGVySW1hZ2VcIil9LHMuYm9yZGVycmFkaXVzPWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJib3JkZXJSYWRpdXNcIil9LHMuYm94c2hhZG93PWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJib3hTaGFkb3dcIil9LHMudGV4dHNoYWRvdz1mdW5jdGlvbigpe3JldHVybiBiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUudGV4dFNoYWRvdz09PVwiXCJ9LHMub3BhY2l0eT1mdW5jdGlvbigpe3JldHVybiBFKFwib3BhY2l0eTouNTVcIiksL14wLjU1JC8udGVzdChqLm9wYWNpdHkpfSxzLmNzc2FuaW1hdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSihcImFuaW1hdGlvbk5hbWVcIil9LHMuY3NzY29sdW1ucz1mdW5jdGlvbigpe3JldHVybiBKKFwiY29sdW1uQ291bnRcIil9LHMuY3NzZ3JhZGllbnRzPWZ1bmN0aW9uKCl7dmFyIGE9XCJiYWNrZ3JvdW5kLWltYWdlOlwiLGI9XCJncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgYm90dG9tLGZyb20oIzlmOSksdG8od2hpdGUpKTtcIixjPVwibGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCM5ZjksIHdoaXRlKTtcIjtyZXR1cm4gRCgoYStcIi13ZWJraXQtIFwiLnNwbGl0KFwiIFwiKS5qb2luKGIrYSkrbi5qb2luKGMrYSkpLnNsaWNlKDAsLWEubGVuZ3RoKSksRyhqLmJhY2tncm91bmRJbWFnZSxcImdyYWRpZW50XCIpfSxzLmNzc3JlZmxlY3Rpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJib3hSZWZsZWN0XCIpfSxzLmNzc3RyYW5zZm9ybXM9ZnVuY3Rpb24oKXtyZXR1cm4hIUooXCJ0cmFuc2Zvcm1cIil9LHMuY3NzdHJhbnNmb3JtczNkPWZ1bmN0aW9uKCl7dmFyIGE9ISFKKFwicGVyc3BlY3RpdmVcIik7cmV0dXJuIGEmJlwid2Via2l0UGVyc3BlY3RpdmVcImluIGcuc3R5bGUmJnkoXCJAbWVkaWEgKHRyYW5zZm9ybS0zZCksKC13ZWJraXQtdHJhbnNmb3JtLTNkKXsjbW9kZXJuaXpye2xlZnQ6OXB4O3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDozcHg7fX1cIixmdW5jdGlvbihiLGMpe2E9Yi5vZmZzZXRMZWZ0PT09OSYmYi5vZmZzZXRIZWlnaHQ9PT0zfSksYX0scy5jc3N0cmFuc2l0aW9ucz1mdW5jdGlvbigpe3JldHVybiBKKFwidHJhbnNpdGlvblwiKX0scy5mb250ZmFjZT1mdW5jdGlvbigpe3ZhciBhO3JldHVybiB5KCdAZm9udC1mYWNlIHtmb250LWZhbWlseTpcImZvbnRcIjtzcmM6dXJsKFwiaHR0cHM6Ly9cIil9JyxmdW5jdGlvbihjLGQpe3ZhciBlPWIuZ2V0RWxlbWVudEJ5SWQoXCJzbW9kZXJuaXpyXCIpLGY9ZS5zaGVldHx8ZS5zdHlsZVNoZWV0LGc9Zj9mLmNzc1J1bGVzJiZmLmNzc1J1bGVzWzBdP2YuY3NzUnVsZXNbMF0uY3NzVGV4dDpmLmNzc1RleHR8fFwiXCI6XCJcIjthPS9zcmMvaS50ZXN0KGcpJiZnLmluZGV4T2YoZC5zcGxpdChcIiBcIilbMF0pPT09MH0pLGF9LHMuZ2VuZXJhdGVkY29udGVudD1mdW5jdGlvbigpe3ZhciBhO3JldHVybiB5KFtcIiNcIixoLFwie2ZvbnQ6MC8wIGF9I1wiLGgsJzphZnRlcntjb250ZW50OlwiJyxsLCdcIjt2aXNpYmlsaXR5OmhpZGRlbjtmb250OjNweC8xIGF9J10uam9pbihcIlwiKSxmdW5jdGlvbihiKXthPWIub2Zmc2V0SGVpZ2h0Pj0zfSksYX0scy52aWRlbz1mdW5jdGlvbigpe3ZhciBhPWIuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpLGM9ITE7dHJ5e2lmKGM9ISFhLmNhblBsYXlUeXBlKWM9bmV3IEJvb2xlYW4oYyksYy5vZ2c9YS5jYW5QbGF5VHlwZSgndmlkZW8vb2dnOyBjb2RlY3M9XCJ0aGVvcmFcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpLGMuaDI2ND1hLmNhblBsYXlUeXBlKCd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNDJFMDFFXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLndlYm09YS5jYW5QbGF5VHlwZSgndmlkZW8vd2VibTsgY29kZWNzPVwidnA4LCB2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpfWNhdGNoKGQpe31yZXR1cm4gY30scy5hdWRpbz1mdW5jdGlvbigpe3ZhciBhPWIuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpLGM9ITE7dHJ5e2lmKGM9ISFhLmNhblBsYXlUeXBlKWM9bmV3IEJvb2xlYW4oYyksYy5vZ2c9YS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpLGMubXAzPWEuY2FuUGxheVR5cGUoXCJhdWRpby9tcGVnO1wiKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLndhdj1hLmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpLGMubTRhPShhLmNhblBsYXlUeXBlKFwiYXVkaW8veC1tNGE7XCIpfHxhLmNhblBsYXlUeXBlKFwiYXVkaW8vYWFjO1wiKSkucmVwbGFjZSgvXm5vJC8sXCJcIil9Y2F0Y2goZCl7fXJldHVybiBjfSxzLmxvY2Fsc3RvcmFnZT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oaCxoKSxsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShoKSwhMH1jYXRjaChhKXtyZXR1cm4hMX19LHMuc2Vzc2lvbnN0b3JhZ2U9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oaCxoKSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGgpLCEwfWNhdGNoKGEpe3JldHVybiExfX0scy53ZWJ3b3JrZXJzPWZ1bmN0aW9uKCl7cmV0dXJuISFhLldvcmtlcn0scy5hcHBsaWNhdGlvbmNhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuISFhLmFwcGxpY2F0aW9uQ2FjaGV9LHMuc3ZnPWZ1bmN0aW9uKCl7cmV0dXJuISFiLmNyZWF0ZUVsZW1lbnROUyYmISFiLmNyZWF0ZUVsZW1lbnROUyhyLnN2ZyxcInN2Z1wiKS5jcmVhdGVTVkdSZWN0fSxzLmlubGluZXN2Zz1mdW5jdGlvbigpe3ZhciBhPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gYS5pbm5lckhUTUw9XCI8c3ZnLz5cIiwoYS5maXJzdENoaWxkJiZhLmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKT09ci5zdmd9LHMuc21pbD1mdW5jdGlvbigpe3JldHVybiEhYi5jcmVhdGVFbGVtZW50TlMmJi9TVkdBbmltYXRlLy50ZXN0KG0uY2FsbChiLmNyZWF0ZUVsZW1lbnROUyhyLnN2ZyxcImFuaW1hdGVcIikpKX0scy5zdmdjbGlwcGF0aHM9ZnVuY3Rpb24oKXtyZXR1cm4hIWIuY3JlYXRlRWxlbWVudE5TJiYvU1ZHQ2xpcFBhdGgvLnRlc3QobS5jYWxsKGIuY3JlYXRlRWxlbWVudE5TKHIuc3ZnLFwiY2xpcFBhdGhcIikpKX07Zm9yKHZhciBMIGluIHMpQyhzLEwpJiYoeD1MLnRvTG93ZXJDYXNlKCksZVt4XT1zW0xdKCksdi5wdXNoKChlW3hdP1wiXCI6XCJuby1cIikreCkpO3JldHVybiBlLmlucHV0fHxLKCksZS5hZGRUZXN0PWZ1bmN0aW9uKGEsYil7aWYodHlwZW9mIGE9PVwib2JqZWN0XCIpZm9yKHZhciBkIGluIGEpQyhhLGQpJiZlLmFkZFRlc3QoZCxhW2RdKTtlbHNle2E9YS50b0xvd2VyQ2FzZSgpO2lmKGVbYV0hPT1jKXJldHVybiBlO2I9dHlwZW9mIGI9PVwiZnVuY3Rpb25cIj9iKCk6Yix0eXBlb2YgZiE9XCJ1bmRlZmluZWRcIiYmZiYmKGcuY2xhc3NOYW1lKz1cIiBcIisoYj9cIlwiOlwibm8tXCIpK2EpLGVbYV09Yn1yZXR1cm4gZX0sRChcIlwiKSxpPWs9bnVsbCxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGwoYSxiKXt2YXIgYz1hLmNyZWF0ZUVsZW1lbnQoXCJwXCIpLGQ9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF18fGEuZG9jdW1lbnRFbGVtZW50O3JldHVybiBjLmlubmVySFRNTD1cIng8c3R5bGU+XCIrYitcIjwvc3R5bGU+XCIsZC5pbnNlcnRCZWZvcmUoYy5sYXN0Q2hpbGQsZC5maXJzdENoaWxkKX1mdW5jdGlvbiBtKCl7dmFyIGE9cy5lbGVtZW50cztyZXR1cm4gdHlwZW9mIGE9PVwic3RyaW5nXCI/YS5zcGxpdChcIiBcIik6YX1mdW5jdGlvbiBuKGEpe3ZhciBiPWpbYVtoXV07cmV0dXJuIGJ8fChiPXt9LGkrKyxhW2hdPWksaltpXT1iKSxifWZ1bmN0aW9uIG8oYSxjLGQpe2N8fChjPWIpO2lmKGspcmV0dXJuIGMuY3JlYXRlRWxlbWVudChhKTtkfHwoZD1uKGMpKTt2YXIgZztyZXR1cm4gZC5jYWNoZVthXT9nPWQuY2FjaGVbYV0uY2xvbmVOb2RlKCk6Zi50ZXN0KGEpP2c9KGQuY2FjaGVbYV09ZC5jcmVhdGVFbGVtKGEpKS5jbG9uZU5vZGUoKTpnPWQuY3JlYXRlRWxlbShhKSxnLmNhbkhhdmVDaGlsZHJlbiYmIWUudGVzdChhKSYmIWcudGFnVXJuP2QuZnJhZy5hcHBlbmRDaGlsZChnKTpnfWZ1bmN0aW9uIHAoYSxjKXthfHwoYT1iKTtpZihrKXJldHVybiBhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjPWN8fG4oYSk7dmFyIGQ9Yy5mcmFnLmNsb25lTm9kZSgpLGU9MCxmPW0oKSxnPWYubGVuZ3RoO2Zvcig7ZTxnO2UrKylkLmNyZWF0ZUVsZW1lbnQoZltlXSk7cmV0dXJuIGR9ZnVuY3Rpb24gcShhLGIpe2IuY2FjaGV8fChiLmNhY2hlPXt9LGIuY3JlYXRlRWxlbT1hLmNyZWF0ZUVsZW1lbnQsYi5jcmVhdGVGcmFnPWEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxiLmZyYWc9Yi5jcmVhdGVGcmFnKCkpLGEuY3JlYXRlRWxlbWVudD1mdW5jdGlvbihjKXtyZXR1cm4gcy5zaGl2TWV0aG9kcz9vKGMsYSxiKTpiLmNyZWF0ZUVsZW0oYyl9LGEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudD1GdW5jdGlvbihcImgsZlwiLFwicmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49Zi5jbG9uZU5vZGUoKSxjPW4uY3JlYXRlRWxlbWVudDtoLnNoaXZNZXRob2RzJiYoXCIrbSgpLmpvaW4oKS5yZXBsYWNlKC9bXFx3XFwtXSsvZyxmdW5jdGlvbihhKXtyZXR1cm4gYi5jcmVhdGVFbGVtKGEpLGIuZnJhZy5jcmVhdGVFbGVtZW50KGEpLCdjKFwiJythKydcIiknfSkrXCIpO3JldHVybiBufVwiKShzLGIuZnJhZyl9ZnVuY3Rpb24gcihhKXthfHwoYT1iKTt2YXIgYz1uKGEpO3JldHVybiBzLnNoaXZDU1MmJiFnJiYhYy5oYXNDU1MmJihjLmhhc0NTUz0hIWwoYSxcImFydGljbGUsYXNpZGUsZGlhbG9nLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31tYXJre2JhY2tncm91bmQ6I0ZGMDtjb2xvcjojMDAwfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1cIikpLGt8fHEoYSxjKSxhfXZhciBjPVwiMy43LjBcIixkPWEuaHRtbDV8fHt9LGU9L148fF4oPzpidXR0b258bWFwfHNlbGVjdHx0ZXh0YXJlYXxvYmplY3R8aWZyYW1lfG9wdGlvbnxvcHRncm91cCkkL2ksZj0vXig/OmF8Ynxjb2RlfGRpdnxmaWVsZHNldHxoMXxoMnxoM3xoNHxoNXxoNnxpfGxhYmVsfGxpfG9sfHB8cXxzcGFufHN0cm9uZ3xzdHlsZXx0YWJsZXx0Ym9keXx0ZHx0aHx0cnx1bCkkL2ksZyxoPVwiX2h0bWw1c2hpdlwiLGk9MCxqPXt9LGs7KGZ1bmN0aW9uKCl7dHJ5e3ZhciBhPWIuY3JlYXRlRWxlbWVudChcImFcIik7YS5pbm5lckhUTUw9XCI8eHl6PjwveHl6PlwiLGc9XCJoaWRkZW5cImluIGEsaz1hLmNoaWxkTm9kZXMubGVuZ3RoPT0xfHxmdW5jdGlvbigpe2IuY3JlYXRlRWxlbWVudChcImFcIik7dmFyIGE9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7cmV0dXJuIHR5cGVvZiBhLmNsb25lTm9kZT09XCJ1bmRlZmluZWRcInx8dHlwZW9mIGEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudD09XCJ1bmRlZmluZWRcInx8dHlwZW9mIGEuY3JlYXRlRWxlbWVudD09XCJ1bmRlZmluZWRcIn0oKX1jYXRjaChjKXtnPSEwLGs9ITB9fSkoKTt2YXIgcz17ZWxlbWVudHM6ZC5lbGVtZW50c3x8XCJhYmJyIGFydGljbGUgYXNpZGUgYXVkaW8gYmRpIGNhbnZhcyBkYXRhIGRhdGFsaXN0IGRldGFpbHMgZGlhbG9nIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1haW4gbWFyayBtZXRlciBuYXYgb3V0cHV0IHByb2dyZXNzIHNlY3Rpb24gc3VtbWFyeSB0ZW1wbGF0ZSB0aW1lIHZpZGVvXCIsdmVyc2lvbjpjLHNoaXZDU1M6ZC5zaGl2Q1NTIT09ITEsc3VwcG9ydHNVbmtub3duRWxlbWVudHM6ayxzaGl2TWV0aG9kczpkLnNoaXZNZXRob2RzIT09ITEsdHlwZTpcImRlZmF1bHRcIixzaGl2RG9jdW1lbnQ6cixjcmVhdGVFbGVtZW50Om8sY3JlYXRlRG9jdW1lbnRGcmFnbWVudDpwfTthLmh0bWw1PXMscihiKX0odGhpcyxiKSxlLl92ZXJzaW9uPWQsZS5fcHJlZml4ZXM9bixlLl9kb21QcmVmaXhlcz1xLGUuX2Nzc29tUHJlZml4ZXM9cCxlLm1xPXosZS5oYXNFdmVudD1BLGUudGVzdFByb3A9ZnVuY3Rpb24oYSl7cmV0dXJuIEgoW2FdKX0sZS50ZXN0QWxsUHJvcHM9SixlLnRlc3RTdHlsZXM9eSxlLnByZWZpeGVkPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj9KKGEsYixjKTpKKGEsXCJwZnhcIil9LGcuY2xhc3NOYW1lPWcuY2xhc3NOYW1lLnJlcGxhY2UoLyhefFxccyluby1qcyhcXHN8JCkvLFwiJDEkMlwiKSsoZj9cIiBqcyBcIit2LmpvaW4oXCIgXCIpOlwiXCIpLGV9KHRoaXMsdGhpcy5kb2N1bWVudCksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1vLmNhbGwoYSl9ZnVuY3Rpb24gZShhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYX1mdW5jdGlvbiBmKCl7fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIWF8fFwibG9hZGVkXCI9PWF8fFwiY29tcGxldGVcIj09YXx8XCJ1bmluaXRpYWxpemVkXCI9PWF9ZnVuY3Rpb24gaCgpe3ZhciBhPXAuc2hpZnQoKTtxPTEsYT9hLnQ/bShmdW5jdGlvbigpeyhcImNcIj09YS50P0IuaW5qZWN0Q3NzOkIuaW5qZWN0SnMpKGEucywwLGEuYSxhLngsYS5lLDEpfSwwKTooYSgpLGgoKSk6cT0wfWZ1bmN0aW9uIGkoYSxjLGQsZSxmLGksail7ZnVuY3Rpb24gayhiKXtpZighbyYmZyhsLnJlYWR5U3RhdGUpJiYodS5yPW89MSwhcSYmaCgpLGwub25sb2FkPWwub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsYikpe1wiaW1nXCIhPWEmJm0oZnVuY3Rpb24oKXt0LnJlbW92ZUNoaWxkKGwpfSw1MCk7Zm9yKHZhciBkIGluIHlbY10peVtjXS5oYXNPd25Qcm9wZXJ0eShkKSYmeVtjXVtkXS5vbmxvYWQoKX19dmFyIGo9anx8Qi5lcnJvclRpbWVvdXQsbD1iLmNyZWF0ZUVsZW1lbnQoYSksbz0wLHI9MCx1PXt0OmQsczpjLGU6ZixhOmkseDpqfTsxPT09eVtjXSYmKHI9MSx5W2NdPVtdKSxcIm9iamVjdFwiPT1hP2wuZGF0YT1jOihsLnNyYz1jLGwudHlwZT1hKSxsLndpZHRoPWwuaGVpZ2h0PVwiMFwiLGwub25lcnJvcj1sLm9ubG9hZD1sLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2suY2FsbCh0aGlzLHIpfSxwLnNwbGljZShlLDAsdSksXCJpbWdcIiE9YSYmKHJ8fDI9PT15W2NdPyh0Lmluc2VydEJlZm9yZShsLHM/bnVsbDpuKSxtKGssaikpOnlbY10ucHVzaChsKSl9ZnVuY3Rpb24gaihhLGIsYyxkLGYpe3JldHVybiBxPTAsYj1ifHxcImpcIixlKGEpP2koXCJjXCI9PWI/djp1LGEsYix0aGlzLmkrKyxjLGQsZik6KHAuc3BsaWNlKHRoaXMuaSsrLDAsYSksMT09cC5sZW5ndGgmJmgoKSksdGhpc31mdW5jdGlvbiBrKCl7dmFyIGE9QjtyZXR1cm4gYS5sb2FkZXI9e2xvYWQ6aixpOjB9LGF9dmFyIGw9Yi5kb2N1bWVudEVsZW1lbnQsbT1hLnNldFRpbWVvdXQsbj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdLG89e30udG9TdHJpbmcscD1bXSxxPTAscj1cIk1vekFwcGVhcmFuY2VcImluIGwuc3R5bGUscz1yJiYhIWIuY3JlYXRlUmFuZ2UoKS5jb21wYXJlTm9kZSx0PXM/bDpuLnBhcmVudE5vZGUsbD1hLm9wZXJhJiZcIltvYmplY3QgT3BlcmFdXCI9PW8uY2FsbChhLm9wZXJhKSxsPSEhYi5hdHRhY2hFdmVudCYmIWwsdT1yP1wib2JqZWN0XCI6bD9cInNjcmlwdFwiOlwiaW1nXCIsdj1sP1wic2NyaXB0XCI6dSx3PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09by5jYWxsKGEpfSx4PVtdLHk9e30sej17dGltZW91dDpmdW5jdGlvbihhLGIpe3JldHVybiBiLmxlbmd0aCYmKGEudGltZW91dD1iWzBdKSxhfX0sQSxCO0I9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXt2YXIgYT1hLnNwbGl0KFwiIVwiKSxiPXgubGVuZ3RoLGM9YS5wb3AoKSxkPWEubGVuZ3RoLGM9e3VybDpjLG9yaWdVcmw6YyxwcmVmaXhlczphfSxlLGYsZztmb3IoZj0wO2Y8ZDtmKyspZz1hW2ZdLnNwbGl0KFwiPVwiKSwoZT16W2cuc2hpZnQoKV0pJiYoYz1lKGMsZykpO2ZvcihmPTA7ZjxiO2YrKyljPXhbZl0oYyk7cmV0dXJuIGN9ZnVuY3Rpb24gZyhhLGUsZixnLGgpe3ZhciBpPWIoYSksaj1pLmF1dG9DYWxsYmFjaztpLnVybC5zcGxpdChcIi5cIikucG9wKCkuc3BsaXQoXCI/XCIpLnNoaWZ0KCksaS5ieXBhc3N8fChlJiYoZT1kKGUpP2U6ZVthXXx8ZVtnXXx8ZVthLnNwbGl0KFwiL1wiKS5wb3AoKS5zcGxpdChcIj9cIilbMF1dKSxpLmluc3RlYWQ/aS5pbnN0ZWFkKGEsZSxmLGcsaCk6KHlbaS51cmxdP2kubm9leGVjPSEwOnlbaS51cmxdPTEsZi5sb2FkKGkudXJsLGkuZm9yY2VDU1N8fCFpLmZvcmNlSlMmJlwiY3NzXCI9PWkudXJsLnNwbGl0KFwiLlwiKS5wb3AoKS5zcGxpdChcIj9cIikuc2hpZnQoKT9cImNcIjpjLGkubm9leGVjLGkuYXR0cnMsaS50aW1lb3V0KSwoZChlKXx8ZChqKSkmJmYubG9hZChmdW5jdGlvbigpe2soKSxlJiZlKGkub3JpZ1VybCxoLGcpLGomJmooaS5vcmlnVXJsLGgsZykseVtpLnVybF09Mn0pKSl9ZnVuY3Rpb24gaChhLGIpe2Z1bmN0aW9uIGMoYSxjKXtpZihhKXtpZihlKGEpKWN8fChqPWZ1bmN0aW9uKCl7dmFyIGE9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2suYXBwbHkodGhpcyxhKSxsKCl9KSxnKGEsaixiLDAsaCk7ZWxzZSBpZihPYmplY3QoYSk9PT1hKWZvcihuIGluIG09ZnVuY3Rpb24oKXt2YXIgYj0wLGM7Zm9yKGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiZiKys7cmV0dXJuIGJ9KCksYSlhLmhhc093blByb3BlcnR5KG4pJiYoIWMmJiEtLW0mJihkKGopP2o9ZnVuY3Rpb24oKXt2YXIgYT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ay5hcHBseSh0aGlzLGEpLGwoKX06altuXT1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7YSYmYS5hcHBseSh0aGlzLGIpLGwoKX19KGtbbl0pKSxnKGFbbl0saixiLG4saCkpfWVsc2UhYyYmbCgpfXZhciBoPSEhYS50ZXN0LGk9YS5sb2FkfHxhLmJvdGgsaj1hLmNhbGxiYWNrfHxmLGs9aixsPWEuY29tcGxldGV8fGYsbSxuO2MoaD9hLnllcDphLm5vcGUsISFpKSxpJiZjKGkpfXZhciBpLGosbD10aGlzLnllcG5vcGUubG9hZGVyO2lmKGUoYSkpZyhhLDAsbCwwKTtlbHNlIGlmKHcoYSkpZm9yKGk9MDtpPGEubGVuZ3RoO2krKylqPWFbaV0sZShqKT9nKGosMCxsLDApOncoaik/QihqKTpPYmplY3Qoaik9PT1qJiZoKGosbCk7ZWxzZSBPYmplY3QoYSk9PT1hJiZoKGEsbCl9LEIuYWRkUHJlZml4PWZ1bmN0aW9uKGEsYil7elthXT1ifSxCLmFkZEZpbHRlcj1mdW5jdGlvbihhKXt4LnB1c2goYSl9LEIuZXJyb3JUaW1lb3V0PTFlNCxudWxsPT1iLnJlYWR5U3RhdGUmJmIuYWRkRXZlbnRMaXN0ZW5lciYmKGIucmVhZHlTdGF0ZT1cImxvYWRpbmdcIixiLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQT1mdW5jdGlvbigpe2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixBLDApLGIucmVhZHlTdGF0ZT1cImNvbXBsZXRlXCJ9LDApKSxhLnllcG5vcGU9aygpLGEueWVwbm9wZS5leGVjdXRlU3RhY2s9aCxhLnllcG5vcGUuaW5qZWN0SnM9ZnVuY3Rpb24oYSxjLGQsZSxpLGope3ZhciBrPWIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxsLG8sZT1lfHxCLmVycm9yVGltZW91dDtrLnNyYz1hO2ZvcihvIGluIGQpay5zZXRBdHRyaWJ1dGUobyxkW29dKTtjPWo/aDpjfHxmLGsub25yZWFkeXN0YXRlY2hhbmdlPWsub25sb2FkPWZ1bmN0aW9uKCl7IWwmJmcoay5yZWFkeVN0YXRlKSYmKGw9MSxjKCksay5vbmxvYWQ9ay5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCl9LG0oZnVuY3Rpb24oKXtsfHwobD0xLGMoMSkpfSxlKSxpP2sub25sb2FkKCk6bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShrLG4pfSxhLnllcG5vcGUuaW5qZWN0Q3NzPWZ1bmN0aW9uKGEsYyxkLGUsZyxpKXt2YXIgZT1iLmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpLGosYz1pP2g6Y3x8ZjtlLmhyZWY9YSxlLnJlbD1cInN0eWxlc2hlZXRcIixlLnR5cGU9XCJ0ZXh0L2Nzc1wiO2ZvcihqIGluIGQpZS5zZXRBdHRyaWJ1dGUoaixkW2pdKTtnfHwobi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLG4pLG0oYywwKSl9fSh0aGlzLGRvY3VtZW50KSxNb2Rlcm5penIubG9hZD1mdW5jdGlvbigpe3llcG5vcGUuYXBwbHkod2luZG93LFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApKX07XHJcbiIsIi8qISBSZXNwb25kLmpzIHYxLjQuMjogbWluL21heC13aWR0aCBtZWRpYSBxdWVyeSBwb2x5ZmlsbFxyXG4gKiBDb3B5cmlnaHQgMjAxNCBTY290dCBKZWhsXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG4gKiBodHRwOi8vai5tcC9yZXNwb25kanMgKi9cclxuXHJcbi8qISBtYXRjaE1lZGlhKCkgcG9seWZpbGwgLSBUZXN0IGEgQ1NTIG1lZGlhIHR5cGUvcXVlcnkgaW4gSlMuIEF1dGhvcnMgJiBjb3B5cmlnaHQgKGMpIDIwMTI6IFNjb3R0IEplaGwsIFBhdWwgSXJpc2gsIE5pY2hvbGFzIFpha2FzLiBEdWFsIE1JVC9CU0QgbGljZW5zZSAqL1xyXG4vKiEgTk9URTogSWYgeW91J3JlIGFscmVhZHkgaW5jbHVkaW5nIGEgd2luZG93Lm1hdGNoTWVkaWEgcG9seWZpbGwgdmlhIE1vZGVybml6ciBvciBvdGhlcndpc2UsIHlvdSBkb24ndCBuZWVkIHRoaXMgcGFydCAqL1xyXG4oZnVuY3Rpb24odykge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG4gIHcubWF0Y2hNZWRpYSA9IHcubWF0Y2hNZWRpYSB8fCBmdW5jdGlvbihkb2MsIHVuZGVmaW5lZCkge1xyXG4gICAgdmFyIGJvb2wsIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50LCByZWZOb2RlID0gZG9jRWxlbS5maXJzdEVsZW1lbnRDaGlsZCB8fCBkb2NFbGVtLmZpcnN0Q2hpbGQsIGZha2VCb2R5ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIpLCBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5pZCA9IFwibXEtdGVzdC0xXCI7XHJcbiAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMDBlbVwiO1xyXG4gICAgZmFrZUJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xyXG4gICAgZmFrZUJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIHJldHVybiBmdW5jdGlvbihxKSB7XHJcbiAgICAgIGRpdi5pbm5lckhUTUwgPSAnJnNoeTs8c3R5bGUgbWVkaWE9XCInICsgcSArICdcIj4gI21xLXRlc3QtMSB7IHdpZHRoOiA0MnB4OyB9PC9zdHlsZT4nO1xyXG4gICAgICBkb2NFbGVtLmluc2VydEJlZm9yZShmYWtlQm9keSwgcmVmTm9kZSk7XHJcbiAgICAgIGJvb2wgPSBkaXYub2Zmc2V0V2lkdGggPT09IDQyO1xyXG4gICAgICBkb2NFbGVtLnJlbW92ZUNoaWxkKGZha2VCb2R5KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtYXRjaGVzOiBib29sLFxyXG4gICAgICAgIG1lZGlhOiBxXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH0ody5kb2N1bWVudCk7XHJcbn0pKHRoaXMpO1xyXG5cclxuKGZ1bmN0aW9uKHcpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuICB2YXIgcmVzcG9uZCA9IHt9O1xyXG4gIHcucmVzcG9uZCA9IHJlc3BvbmQ7XHJcbiAgcmVzcG9uZC51cGRhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG4gIHZhciByZXF1ZXN0UXVldWUgPSBbXSwgeG1sSHR0cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHhtbGh0dHBtZXRob2QgPSBmYWxzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHhtbGh0dHBtZXRob2QgPSBuZXcgdy5YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB4bWxodHRwbWV0aG9kID0gbmV3IHcuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4geG1saHR0cG1ldGhvZDtcclxuICAgIH07XHJcbiAgfSgpLCBhamF4ID0gZnVuY3Rpb24odXJsLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHJlcSA9IHhtbEh0dHAoKTtcclxuICAgIGlmICghcmVxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJlcS5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSAhPT0gNCB8fCByZXEuc3RhdHVzICE9PSAyMDAgJiYgcmVxLnN0YXR1cyAhPT0gMzA0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrKHJlcS5yZXNwb25zZVRleHQpO1xyXG4gICAgfTtcclxuICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXEuc2VuZChudWxsKTtcclxuICB9LCBpc1Vuc3VwcG9ydGVkTWVkaWFRdWVyeSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gcXVlcnkucmVwbGFjZShyZXNwb25kLnJlZ2V4Lm1pbm1heHdoLCBcIlwiKS5tYXRjaChyZXNwb25kLnJlZ2V4Lm90aGVyKTtcclxuICB9O1xyXG4gIHJlc3BvbmQuYWpheCA9IGFqYXg7XHJcbiAgcmVzcG9uZC5xdWV1ZSA9IHJlcXVlc3RRdWV1ZTtcclxuICByZXNwb25kLnVuc3VwcG9ydGVkbXEgPSBpc1Vuc3VwcG9ydGVkTWVkaWFRdWVyeTtcclxuICByZXNwb25kLnJlZ2V4ID0ge1xyXG4gICAgbWVkaWE6IC9AbWVkaWFbXlxce10rXFx7KFteXFx7XFx9XSpcXHtbXlxcfVxce10qXFx9KSsvZ2ksXHJcbiAgICBrZXlmcmFtZXM6IC9AKD86XFwtKD86b3xtb3p8d2Via2l0KVxcLSk/a2V5ZnJhbWVzW15cXHtdK1xceyg/OlteXFx7XFx9XSpcXHtbXlxcfVxce10qXFx9KStbXlxcfV0qXFx9L2dpLFxyXG4gICAgY29tbWVudHM6IC9cXC9cXCpbXipdKlxcKisoW14vXVteKl0qXFwqKykqXFwvL2dpLFxyXG4gICAgdXJsczogLyh1cmxcXCgpWydcIl0/KFteXFwvXFwpJ1wiXVteOlxcKSdcIl0rKVsnXCJdPyhcXCkpL2csXHJcbiAgICBmaW5kU3R5bGVzOiAvQG1lZGlhICooW15cXHtdKylcXHsoW1xcU1xcc10rPykkLyxcclxuICAgIG9ubHk6IC8ob25seVxccyspPyhbYS16QS1aXSspXFxzPy8sXHJcbiAgICBtaW53OiAvXFwoXFxzKm1pblxcLXdpZHRoXFxzKjpcXHMqKFxccypbMC05XFwuXSspKHB4fGVtKVxccypcXCkvLFxyXG4gICAgbWF4dzogL1xcKFxccyptYXhcXC13aWR0aFxccyo6XFxzKihcXHMqWzAtOVxcLl0rKShweHxlbSlcXHMqXFwpLyxcclxuICAgIG1pbm1heHdoOiAvXFwoXFxzKm0oaW58YXgpXFwtKGhlaWdodHx3aWR0aClcXHMqOlxccyooXFxzKlswLTlcXC5dKykocHh8ZW0pXFxzKlxcKS9naSxcclxuICAgIG90aGVyOiAvXFwoW15cXCldKlxcKS9nXHJcbiAgfTtcclxuICByZXNwb25kLm1lZGlhUXVlcmllc1N1cHBvcnRlZCA9IHcubWF0Y2hNZWRpYSAmJiB3Lm1hdGNoTWVkaWEoXCJvbmx5IGFsbFwiKSAhPT0gbnVsbCAmJiB3Lm1hdGNoTWVkaWEoXCJvbmx5IGFsbFwiKS5tYXRjaGVzO1xyXG4gIGlmIChyZXNwb25kLm1lZGlhUXVlcmllc1N1cHBvcnRlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB2YXIgZG9jID0gdy5kb2N1bWVudCwgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQsIG1lZGlhc3R5bGVzID0gW10sIHJ1bGVzID0gW10sIGFwcGVuZGVkRWxzID0gW10sIHBhcnNlZFNoZWV0cyA9IHt9LCByZXNpemVUaHJvdHRsZSA9IDMwLCBoZWFkID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSB8fCBkb2NFbGVtLCBiYXNlID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYmFzZVwiKVswXSwgbGlua3MgPSBoZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKSwgbGFzdENhbGwsIHJlc2l6ZURlZmVyLCBlbWlucHgsIGdldEVtVmFsdWUgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZXQsIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBib2R5ID0gZG9jLmJvZHksIG9yaWdpbmFsSFRNTEZvbnRTaXplID0gZG9jRWxlbS5zdHlsZS5mb250U2l6ZSwgb3JpZ2luYWxCb2R5Rm9udFNpemUgPSBib2R5ICYmIGJvZHkuc3R5bGUuZm9udFNpemUsIGZha2VVc2VkID0gZmFsc2U7XHJcbiAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjFlbTt3aWR0aDoxZW1cIjtcclxuICAgIGlmICghYm9keSkge1xyXG4gICAgICBib2R5ID0gZmFrZVVzZWQgPSBkb2MuY3JlYXRlRWxlbWVudChcImJvZHlcIik7XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgZG9jRWxlbS5zdHlsZS5mb250U2l6ZSA9IFwiMTAwJVwiO1xyXG4gICAgYm9keS5zdHlsZS5mb250U2l6ZSA9IFwiMTAwJVwiO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgaWYgKGZha2VVc2VkKSB7XHJcbiAgICAgIGRvY0VsZW0uaW5zZXJ0QmVmb3JlKGJvZHksIGRvY0VsZW0uZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICByZXQgPSBkaXYub2Zmc2V0V2lkdGg7XHJcbiAgICBpZiAoZmFrZVVzZWQpIHtcclxuICAgICAgZG9jRWxlbS5yZW1vdmVDaGlsZChib2R5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIGRvY0VsZW0uc3R5bGUuZm9udFNpemUgPSBvcmlnaW5hbEhUTUxGb250U2l6ZTtcclxuICAgIGlmIChvcmlnaW5hbEJvZHlGb250U2l6ZSkge1xyXG4gICAgICBib2R5LnN0eWxlLmZvbnRTaXplID0gb3JpZ2luYWxCb2R5Rm9udFNpemU7XHJcbiAgICB9XHJcbiAgICByZXQgPSBlbWlucHggPSBwYXJzZUZsb2F0KHJldCk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH0sIGFwcGx5TWVkaWEgPSBmdW5jdGlvbihmcm9tUmVzaXplKSB7XHJcbiAgICB2YXIgbmFtZSA9IFwiY2xpZW50V2lkdGhcIiwgZG9jRWxlbVByb3AgPSBkb2NFbGVtW25hbWVdLCBjdXJyV2lkdGggPSBkb2MuY29tcGF0TW9kZSA9PT0gXCJDU1MxQ29tcGF0XCIgJiYgZG9jRWxlbVByb3AgfHwgZG9jLmJvZHlbbmFtZV0gfHwgZG9jRWxlbVByb3AsIHN0eWxlQmxvY2tzID0ge30sIGxhc3RMaW5rID0gbGlua3NbbGlua3MubGVuZ3RoIC0gMV0sIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKGZyb21SZXNpemUgJiYgbGFzdENhbGwgJiYgbm93IC0gbGFzdENhbGwgPCByZXNpemVUaHJvdHRsZSkge1xyXG4gICAgICB3LmNsZWFyVGltZW91dChyZXNpemVEZWZlcik7XHJcbiAgICAgIHJlc2l6ZURlZmVyID0gdy5zZXRUaW1lb3V0KGFwcGx5TWVkaWEsIHJlc2l6ZVRocm90dGxlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdENhbGwgPSBub3c7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpIGluIG1lZGlhc3R5bGVzKSB7XHJcbiAgICAgIGlmIChtZWRpYXN0eWxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgIHZhciB0aGlzc3R5bGUgPSBtZWRpYXN0eWxlc1tpXSwgbWluID0gdGhpc3N0eWxlLm1pbncsIG1heCA9IHRoaXNzdHlsZS5tYXh3LCBtaW5udWxsID0gbWluID09PSBudWxsLCBtYXhudWxsID0gbWF4ID09PSBudWxsLCBlbSA9IFwiZW1cIjtcclxuICAgICAgICBpZiAoISFtaW4pIHtcclxuICAgICAgICAgIG1pbiA9IHBhcnNlRmxvYXQobWluKSAqIChtaW4uaW5kZXhPZihlbSkgPiAtMSA/IGVtaW5weCB8fCBnZXRFbVZhbHVlKCkgOiAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEhbWF4KSB7XHJcbiAgICAgICAgICBtYXggPSBwYXJzZUZsb2F0KG1heCkgKiAobWF4LmluZGV4T2YoZW0pID4gLTEgPyBlbWlucHggfHwgZ2V0RW1WYWx1ZSgpIDogMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpc3N0eWxlLmhhc3F1ZXJ5IHx8ICghbWlubnVsbCB8fCAhbWF4bnVsbCkgJiYgKG1pbm51bGwgfHwgY3VycldpZHRoID49IG1pbikgJiYgKG1heG51bGwgfHwgY3VycldpZHRoIDw9IG1heCkpIHtcclxuICAgICAgICAgIGlmICghc3R5bGVCbG9ja3NbdGhpc3N0eWxlLm1lZGlhXSkge1xyXG4gICAgICAgICAgICBzdHlsZUJsb2Nrc1t0aGlzc3R5bGUubWVkaWFdID0gW107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHlsZUJsb2Nrc1t0aGlzc3R5bGUubWVkaWFdLnB1c2gocnVsZXNbdGhpc3N0eWxlLnJ1bGVzXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBqIGluIGFwcGVuZGVkRWxzKSB7XHJcbiAgICAgIGlmIChhcHBlbmRlZEVscy5oYXNPd25Qcm9wZXJ0eShqKSkge1xyXG4gICAgICAgIGlmIChhcHBlbmRlZEVsc1tqXSAmJiBhcHBlbmRlZEVsc1tqXS5wYXJlbnROb2RlID09PSBoZWFkKSB7XHJcbiAgICAgICAgICBoZWFkLnJlbW92ZUNoaWxkKGFwcGVuZGVkRWxzW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcGVuZGVkRWxzLmxlbmd0aCA9IDA7XHJcbiAgICBmb3IgKHZhciBrIGluIHN0eWxlQmxvY2tzKSB7XHJcbiAgICAgIGlmIChzdHlsZUJsb2Nrcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xyXG4gICAgICAgIHZhciBzcyA9IGRvYy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksIGNzcyA9IHN0eWxlQmxvY2tzW2tdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgICAgICBzcy5tZWRpYSA9IGs7XHJcbiAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3MsIGxhc3RMaW5rLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBpZiAoc3Muc3R5bGVTaGVldCkge1xyXG4gICAgICAgICAgc3Muc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcy5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwcGVuZGVkRWxzLnB1c2goc3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgdHJhbnNsYXRlID0gZnVuY3Rpb24oc3R5bGVzLCBocmVmLCBtZWRpYSkge1xyXG4gICAgdmFyIHFzID0gc3R5bGVzLnJlcGxhY2UocmVzcG9uZC5yZWdleC5jb21tZW50cywgXCJcIikucmVwbGFjZShyZXNwb25kLnJlZ2V4LmtleWZyYW1lcywgXCJcIikubWF0Y2gocmVzcG9uZC5yZWdleC5tZWRpYSksIHFsID0gcXMgJiYgcXMubGVuZ3RoIHx8IDA7XHJcbiAgICBocmVmID0gaHJlZi5zdWJzdHJpbmcoMCwgaHJlZi5sYXN0SW5kZXhPZihcIi9cIikpO1xyXG4gICAgdmFyIHJlcFVybHMgPSBmdW5jdGlvbihjc3MpIHtcclxuICAgICAgcmV0dXJuIGNzcy5yZXBsYWNlKHJlc3BvbmQucmVnZXgudXJscywgXCIkMVwiICsgaHJlZiArIFwiJDIkM1wiKTtcclxuICAgIH0sIHVzZU1lZGlhID0gIXFsICYmIG1lZGlhO1xyXG4gICAgaWYgKGhyZWYubGVuZ3RoKSB7XHJcbiAgICAgIGhyZWYgKz0gXCIvXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodXNlTWVkaWEpIHtcclxuICAgICAgcWwgPSAxO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxbDsgaSsrKSB7XHJcbiAgICAgIHZhciBmdWxscSwgdGhpc3EsIGVhY2hxLCBlcWw7XHJcbiAgICAgIGlmICh1c2VNZWRpYSkge1xyXG4gICAgICAgIGZ1bGxxID0gbWVkaWE7XHJcbiAgICAgICAgcnVsZXMucHVzaChyZXBVcmxzKHN0eWxlcykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZ1bGxxID0gcXNbaV0ubWF0Y2gocmVzcG9uZC5yZWdleC5maW5kU3R5bGVzKSAmJiBSZWdFeHAuJDE7XHJcbiAgICAgICAgcnVsZXMucHVzaChSZWdFeHAuJDIgJiYgcmVwVXJscyhSZWdFeHAuJDIpKTtcclxuICAgICAgfVxyXG4gICAgICBlYWNocSA9IGZ1bGxxLnNwbGl0KFwiLFwiKTtcclxuICAgICAgZXFsID0gZWFjaHEubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGVxbDsgaisrKSB7XHJcbiAgICAgICAgdGhpc3EgPSBlYWNocVtqXTtcclxuICAgICAgICBpZiAoaXNVbnN1cHBvcnRlZE1lZGlhUXVlcnkodGhpc3EpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVkaWFzdHlsZXMucHVzaCh7XHJcbiAgICAgICAgICBtZWRpYTogdGhpc3Euc3BsaXQoXCIoXCIpWzBdLm1hdGNoKHJlc3BvbmQucmVnZXgub25seSkgJiYgUmVnRXhwLiQyIHx8IFwiYWxsXCIsXHJcbiAgICAgICAgICBydWxlczogcnVsZXMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgIGhhc3F1ZXJ5OiB0aGlzcS5pbmRleE9mKFwiKFwiKSA+IC0xLFxyXG4gICAgICAgICAgbWludzogdGhpc3EubWF0Y2gocmVzcG9uZC5yZWdleC5taW53KSAmJiBwYXJzZUZsb2F0KFJlZ0V4cC4kMSkgKyAoUmVnRXhwLiQyIHx8IFwiXCIpLFxyXG4gICAgICAgICAgbWF4dzogdGhpc3EubWF0Y2gocmVzcG9uZC5yZWdleC5tYXh3KSAmJiBwYXJzZUZsb2F0KFJlZ0V4cC4kMSkgKyAoUmVnRXhwLiQyIHx8IFwiXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcGx5TWVkaWEoKTtcclxuICB9LCBtYWtlUmVxdWVzdHMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChyZXF1ZXN0UXVldWUubGVuZ3RoKSB7XHJcbiAgICAgIHZhciB0aGlzUmVxdWVzdCA9IHJlcXVlc3RRdWV1ZS5zaGlmdCgpO1xyXG4gICAgICBhamF4KHRoaXNSZXF1ZXN0LmhyZWYsIGZ1bmN0aW9uKHN0eWxlcykge1xyXG4gICAgICAgIHRyYW5zbGF0ZShzdHlsZXMsIHRoaXNSZXF1ZXN0LmhyZWYsIHRoaXNSZXF1ZXN0Lm1lZGlhKTtcclxuICAgICAgICBwYXJzZWRTaGVldHNbdGhpc1JlcXVlc3QuaHJlZl0gPSB0cnVlO1xyXG4gICAgICAgIHcuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIG1ha2VSZXF1ZXN0cygpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCByaXBDU1MgPSBmdW5jdGlvbigpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHNoZWV0ID0gbGlua3NbaV0sIGhyZWYgPSBzaGVldC5ocmVmLCBtZWRpYSA9IHNoZWV0Lm1lZGlhLCBpc0NTUyA9IHNoZWV0LnJlbCAmJiBzaGVldC5yZWwudG9Mb3dlckNhc2UoKSA9PT0gXCJzdHlsZXNoZWV0XCI7XHJcbiAgICAgIGlmICghIWhyZWYgJiYgaXNDU1MgJiYgIXBhcnNlZFNoZWV0c1tocmVmXSkge1xyXG4gICAgICAgIGlmIChzaGVldC5zdHlsZVNoZWV0ICYmIHNoZWV0LnN0eWxlU2hlZXQucmF3Q3NzVGV4dCkge1xyXG4gICAgICAgICAgdHJhbnNsYXRlKHNoZWV0LnN0eWxlU2hlZXQucmF3Q3NzVGV4dCwgaHJlZiwgbWVkaWEpO1xyXG4gICAgICAgICAgcGFyc2VkU2hlZXRzW2hyZWZdID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCEvXihbYS16QS1aOl0qXFwvXFwvKS8udGVzdChocmVmKSAmJiAhYmFzZSB8fCBocmVmLnJlcGxhY2UoUmVnRXhwLiQxLCBcIlwiKS5zcGxpdChcIi9cIilbMF0gPT09IHcubG9jYXRpb24uaG9zdCkge1xyXG4gICAgICAgICAgICBpZiAoaHJlZi5zdWJzdHJpbmcoMCwgMikgPT09IFwiLy9cIikge1xyXG4gICAgICAgICAgICAgIGhyZWYgPSB3LmxvY2F0aW9uLnByb3RvY29sICsgaHJlZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0UXVldWUucHVzaCh7XHJcbiAgICAgICAgICAgICAgaHJlZjogaHJlZixcclxuICAgICAgICAgICAgICBtZWRpYTogbWVkaWFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtYWtlUmVxdWVzdHMoKTtcclxuICB9O1xyXG4gIHJpcENTUygpO1xyXG4gIHJlc3BvbmQudXBkYXRlID0gcmlwQ1NTO1xyXG4gIHJlc3BvbmQuZ2V0RW1WYWx1ZSA9IGdldEVtVmFsdWU7XHJcbiAgZnVuY3Rpb24gY2FsbE1lZGlhKCkge1xyXG4gICAgYXBwbHlNZWRpYSh0cnVlKTtcclxuICB9XHJcbiAgaWYgKHcuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNhbGxNZWRpYSwgZmFsc2UpO1xyXG4gIH0gZWxzZSBpZiAody5hdHRhY2hFdmVudCkge1xyXG4gICAgdy5hdHRhY2hFdmVudChcIm9ucmVzaXplXCIsIGNhbGxNZWRpYSk7XHJcbiAgfVxyXG59KSh0aGlzKTsiLCIvKlxyXG5zZWxlY3Rpdml6ciB2MS4wLjIgLSAoYykgS2VpdGggQ2xhcmssIGZyZWVseSBkaXN0cmlidXRhYmxlIHVuZGVyIHRoZSB0ZXJtcyBcclxub2YgdGhlIE1JVCBsaWNlbnNlLlxyXG5cclxuc2VsZWN0aXZpenIuY29tXHJcbiovXHJcbi8qIFxyXG4gIFxyXG5Ob3RlcyBhYm91dCB0aGlzIHNvdXJjZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICogVGhlICNERUJVR19TVEFSVCBhbmQgI0RFQlVHX0VORCBjb21tZW50cyBhcmUgdXNlZCB0byBtYXJrIGJsb2NrcyBvZiBjb2RlXHJcbiAgIHRoYXQgd2lsbCBiZSByZW1vdmVkIHByaW9yIHRvIGJ1aWxkaW5nIGEgZmluYWwgcmVsZWFzZSB2ZXJzaW9uICh1c2luZyBhXHJcbiAgIHByZS1jb21wcmVzc2lvbiBzY3JpcHQpXHJcbiAgXHJcbiAgXHJcblJlZmVyZW5jZXM6XHJcbi0tLS0tLS0tLS0tXHJcbiBcclxuICogQ1NTIFN5bnRheCAgICAgICAgICA6IGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtY3NzMy1zeW50YXgtMjAwMzA4MTMvI3N0eWxlXHJcbiAqIFNlbGVjdG9ycyAgICAgICAgICAgOiBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXNlbGVjdG9ycy8jc2VsZWN0b3JzXHJcbiAqIElFIENvbXBhdGFiaWxpdHkgICAgOiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2MzNTEwMjQoVlMuODUpLmFzcHhcclxuICogVzNDIFNlbGVjdG9yIFRlc3RzICA6IGh0dHA6Ly93d3cudzMub3JnL1N0eWxlL0NTUy9UZXN0L0NTUzMvU2VsZWN0b3JzL2N1cnJlbnQvaHRtbC90ZXN0cy9cclxuIFxyXG4qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbikge1xyXG5cclxuXHQvLyBJZiBicm93c2VyIGlzbid0IElFLCB0aGVuIHN0b3AgZXhlY3V0aW9uISBUaGlzIGhhbmRsZXMgdGhlIHNjcmlwdCBcclxuXHQvLyBiZWluZyBsb2FkZWQgYnkgbm9uIElFIGJyb3dzZXJzIGJlY2F1c2UgdGhlIGRldmVsb3BlciBkaWRuJ3QgdXNlIFxyXG5cdC8vIGNvbmRpdGlvbmFsIGNvbW1lbnRzLlxyXG5cdGlmICgvKkBjY19vbiFAKi90cnVlKSByZXR1cm47XHJcblxyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBJbml0IE9iamVjdHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHR2YXIgZG9jID0gZG9jdW1lbnQ7XHJcblx0dmFyIHJvb3QgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cdHZhciB4aHIgPSBnZXRYSFJPYmplY3QoKTtcclxuXHR2YXIgaWVWZXJzaW9uID0gL01TSUUgKFxcZCspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpWzFdO1xyXG5cdFxyXG5cdC8vIElmIHdlcmUgbm90IGluIHN0YW5kYXJkcyBtb2RlLCBJRSBpcyB0b28gb2xkIC8gbmV3IG9yIHdlIGNhbid0IGNyZWF0ZVxyXG5cdC8vIGFuIFhNTEh0dHBSZXF1ZXN0IG9iamVjdCB0aGVuIHdlIHNob3VsZCBnZXQgb3V0IG5vdy5cclxuXHRpZiAoZG9jLmNvbXBhdE1vZGUgIT0gJ0NTUzFDb21wYXQnIHx8IGllVmVyc2lvbjw2IHx8IGllVmVyc2lvbj44IHx8ICF4aHIpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PSBDb21tb24gT2JqZWN0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cdC8vIENvbXBhdGlhYmxlIHNlbGVjdG9yIGVuZ2luZXMgaW4gb3JkZXIgb2YgQ1NTMyBzdXBwb3J0LiBOb3RlOiAnKicgaXNcclxuXHQvLyBhIHBsYWNob2xkZXIgZm9yIHRoZSBvYmplY3Qga2V5IG5hbWUuIChiYXNpY2FsbHksIGNydWRlIGNvbXByZXNzaW9uKVxyXG5cdHZhciBzZWxlY3RvckVuZ2luZXMgPSB7XHJcblx0XHRcIk5XXCJcdFx0XHRcdFx0XHRcdFx0OiBcIiouRG9tLnNlbGVjdFwiLFxyXG5cdFx0XCJNb29Ub29sc1wiXHRcdFx0XHRcdFx0XHQ6IFwiJCRcIixcclxuXHRcdFwiRE9NQXNzaXN0YW50XCJcdFx0XHRcdFx0XHQ6IFwiKi4kXCIsIFxyXG5cdFx0XCJQcm90b3R5cGVcIlx0XHRcdFx0XHRcdFx0OiBcIiQkXCIsXHJcblx0XHRcIllBSE9PXCJcdFx0XHRcdFx0XHRcdFx0OiBcIioudXRpbC5TZWxlY3Rvci5xdWVyeVwiLFxyXG5cdFx0XCJTaXp6bGVcIlx0XHRcdFx0XHRcdFx0OiBcIipcIiwgXHJcblx0XHRcImpRdWVyeVwiXHRcdFx0XHRcdFx0XHQ6IFwiKlwiLFxyXG5cdFx0XCJkb2pvXCJcdFx0XHRcdFx0XHRcdFx0OiBcIioucXVlcnlcIlxyXG5cdH07XHJcblxyXG5cdHZhciBzZWxlY3Rvck1ldGhvZDtcclxuXHR2YXIgZW5hYmxlZFdhdGNoZXJzIFx0XHRcdFx0XHQ9IFtdOyAgICAgLy8gYXJyYXkgb2YgOmVuYWJsZWQvOmRpc2FibGVkIGVsZW1lbnRzIHRvIHBvbGxcclxuXHR2YXIgaWU2UGF0Y2hJRCBcdFx0XHRcdFx0XHRcdD0gMDsgICAgICAvLyB1c2VkIHRvIHNvbHZlIGllNidzIG11bHRpcGxlIGNsYXNzIGJ1Z1xyXG5cdHZhciBwYXRjaElFNk11bHRpcGxlQ2xhc3Nlc1x0XHRcdFx0PSB0cnVlOyAgIC8vIGlmIHRydWUgYWRkcyBjbGFzcyBibG9hdCB0byBpZTZcclxuXHR2YXIgbmFtZXNwYWNlIFx0XHRcdFx0XHRcdFx0PSBcInNsdnpyXCI7XHJcblx0XHJcblx0Ly8gU3R5bGVzaGVldCBwYXJzaW5nIHJlZ2V4cCdzXHJcblx0dmFyIFJFX0NPTU1FTlRcdFx0XHRcdFx0XHRcdD0gLyhcXC9cXCpbXipdKlxcKisoW15cXC9dW14qXSpcXCorKSpcXC8pXFxzKi9nO1xyXG5cdHZhciBSRV9JTVBPUlRcdFx0XHRcdFx0XHRcdD0gL0BpbXBvcnRcXHMqKD86KD86KD86dXJsXFwoXFxzKihbJ1wiXT8pKC4qKVxcMSlcXHMqXFwpKXwoPzooWydcIl0pKC4qKVxcMykpW147XSo7L2c7XHJcblx0dmFyIFJFX0FTU0VUX1VSTCBcdFx0XHRcdFx0XHQ9IC9cXGJ1cmxcXChcXHMqKFtcIiddPykoPyFkYXRhOikoW15cIicpXSspXFwxXFxzKlxcKS9nO1xyXG5cdHZhciBSRV9QU0VVRE9fU1RSVUNUVVJBTFx0XHRcdFx0PSAvXjooZW1wdHl8KGZpcnN0fGxhc3R8b25seXxudGgoLWxhc3QpPyktKGNoaWxkfG9mLXR5cGUpKSQvO1xyXG5cdHZhciBSRV9QU0VVRE9fRUxFTUVOVFNcdFx0XHRcdFx0PSAvOig6Zmlyc3QtKD86bGluZXxsZXR0ZXIpKS9nO1xyXG5cdHZhciBSRV9TRUxFQ1RPUl9HUk9VUFx0XHRcdFx0XHQ9IC8oXnx9KVxccyooW15cXHtdKj9bXFxbOl1bXntdKykvZztcclxuXHR2YXIgUkVfU0VMRUNUT1JfUEFSU0VcdFx0XHRcdFx0PSAvKFsgK34+XSl8KDpbYS16LV0rKD86XFwoLio/XFwpKyk/KXwoXFxbLio/XFxdKS9nOyBcclxuXHR2YXIgUkVfTElCUkFSWV9JTkNPTVBBVElCTEVfUFNFVURPU1x0XHQ9IC8oOm5vdFxcKCk/Oihob3ZlcnxlbmFibGVkfGRpc2FibGVkfGZvY3VzfGNoZWNrZWR8dGFyZ2V0fGFjdGl2ZXx2aXNpdGVkfGZpcnN0LWxpbmV8Zmlyc3QtbGV0dGVyKVxcKT8vZztcclxuXHR2YXIgUkVfUEFUQ0hfQ0xBU1NfTkFNRV9SRVBMQUNFXHRcdFx0PSAvW15cXHctXS9nO1xyXG5cdFxyXG5cdC8vIEhUTUwgVUkgZWxlbWVudCByZWdleHAnc1xyXG5cdHZhciBSRV9JTlBVVF9FTEVNRU5UU1x0XHRcdFx0XHQ9IC9eKElOUFVUfFNFTEVDVHxURVhUQVJFQXxCVVRUT04pJC87XHJcblx0dmFyIFJFX0lOUFVUX0NIRUNLQUJMRV9UWVBFU1x0XHRcdD0gL14oY2hlY2tib3h8cmFkaW8pJC87XHJcblxyXG5cdC8vIEJyb2tlbiBhdHRyaWJ1dGUgc2VsZWN0b3IgaW1wbGVtZW50YXRpb25zIChJRTcvOCBuYXRpdmUgW149XCJcIl0sIFskPVwiXCJdIGFuZCBbKj1cIlwiXSlcclxuXHR2YXIgQlJPS0VOX0FUVFJfSU1QTEVNRU5UQVRJT05TXHRcdFx0PSBpZVZlcnNpb24+NiA/IC9bXFwkXFxeKl09KFsnXCJdKVxcMS8gOiBudWxsO1xyXG5cclxuXHQvLyBXaGl0ZXNwYWNlIG5vcm1hbGl6YXRpb24gcmVnZXhwJ3NcclxuXHR2YXIgUkVfVElEWV9UUkFJTElOR19XSElURVNQQUNFXHRcdFx0PSAvKFsoXFxbK35dKVxccysvZztcclxuXHR2YXIgUkVfVElEWV9MRUFESU5HX1dISVRFU1BBQ0VcdFx0XHQ9IC9cXHMrKFspXFxdK35dKS9nO1xyXG5cdHZhciBSRV9USURZX0NPTlNFQ1VUSVZFX1dISVRFU1BBQ0VcdFx0PSAvXFxzKy9nO1xyXG5cdHZhciBSRV9USURZX1RSSU1fV0hJVEVTUEFDRVx0XHRcdFx0PSAvXlxccyooKD86W1xcU1xcc10qXFxTKT8pXFxzKiQvO1xyXG5cdFxyXG5cdC8vIFN0cmluZyBjb25zdGFudHNcclxuXHR2YXIgRU1QVFlfU1RSSU5HXHRcdFx0XHRcdFx0PSBcIlwiO1xyXG5cdHZhciBTUEFDRV9TVFJJTkdcdFx0XHRcdFx0XHQ9IFwiIFwiO1xyXG5cdHZhciBQTEFDRUhPTERFUl9TVFJJTkdcdFx0XHRcdFx0PSBcIiQxXCI7XHJcblxyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBQYXRjaGluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHQvLyAtLVsgcGF0Y2hTdHlsZVNoZWV0KCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBTY2FucyB0aGUgcGFzc2VkIGNzc1RleHQgZm9yIHNlbGVjdG9ycyB0aGF0IHJlcXVpcmUgZW11bGF0aW9uIGFuZFxyXG5cdC8vIGNyZWF0ZXMgb25lIG9yIG1vcmUgcGF0Y2hlcyBmb3IgZWFjaCBtYXRjaGVkIHNlbGVjdG9yLlxyXG5cdGZ1bmN0aW9uIHBhdGNoU3R5bGVTaGVldCggY3NzVGV4dCApIHtcclxuXHRcdHJldHVybiBjc3NUZXh0LnJlcGxhY2UoUkVfUFNFVURPX0VMRU1FTlRTLCBQTEFDRUhPTERFUl9TVFJJTkcpLlxyXG5cdFx0XHRyZXBsYWNlKFJFX1NFTEVDVE9SX0dST1VQLCBmdW5jdGlvbihtLCBwcmVmaXgsIHNlbGVjdG9yVGV4dCkge1x0XHJcbiAgICBcdFx0XHR2YXIgc2VsZWN0b3JHcm91cHMgPSBzZWxlY3RvclRleHQuc3BsaXQoXCIsXCIpO1xyXG4gICAgXHRcdFx0Zm9yICh2YXIgYyA9IDAsIGNzID0gc2VsZWN0b3JHcm91cHMubGVuZ3RoOyBjIDwgY3M7IGMrKykge1xyXG4gICAgXHRcdFx0XHR2YXIgc2VsZWN0b3IgPSBub3JtYWxpemVTZWxlY3RvcldoaXRlc3BhY2Uoc2VsZWN0b3JHcm91cHNbY10pICsgU1BBQ0VfU1RSSU5HO1xyXG4gICAgXHRcdFx0XHR2YXIgcGF0Y2hlcyA9IFtdO1xyXG4gICAgXHRcdFx0XHRzZWxlY3Rvckdyb3Vwc1tjXSA9IHNlbGVjdG9yLnJlcGxhY2UoUkVfU0VMRUNUT1JfUEFSU0UsIFxyXG4gICAgXHRcdFx0XHRcdGZ1bmN0aW9uKG1hdGNoLCBjb21iaW5hdG9yLCBwc2V1ZG8sIGF0dHJpYnV0ZSwgaW5kZXgpIHtcclxuICAgIFx0XHRcdFx0XHRcdGlmIChjb21iaW5hdG9yKSB7XHJcbiAgICBcdFx0XHRcdFx0XHRcdGlmIChwYXRjaGVzLmxlbmd0aD4wKSB7XHJcbiAgICBcdFx0XHRcdFx0XHRcdFx0YXBwbHlQYXRjaGVzKCBzZWxlY3Rvci5zdWJzdHJpbmcoMCwgaW5kZXgpLCBwYXRjaGVzICk7XHJcbiAgICBcdFx0XHRcdFx0XHRcdFx0cGF0Y2hlcyA9IFtdO1xyXG4gICAgXHRcdFx0XHRcdFx0XHR9XHJcbiAgICBcdFx0XHRcdFx0XHRcdHJldHVybiBjb21iaW5hdG9yO1xyXG4gICAgXHRcdFx0XHRcdFx0fVx0XHRcclxuICAgIFx0XHRcdFx0XHRcdGVsc2Uge1xyXG4gICAgXHRcdFx0XHRcdFx0XHR2YXIgcGF0Y2ggPSAocHNldWRvKSA/IHBhdGNoUHNldWRvQ2xhc3MoIHBzZXVkbyApIDogcGF0Y2hBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgXHRcdFx0XHRcdFx0XHRpZiAocGF0Y2gpIHtcclxuICAgIFx0XHRcdFx0XHRcdFx0XHRwYXRjaGVzLnB1c2gocGF0Y2gpO1xyXG4gICAgXHRcdFx0XHRcdFx0XHRcdHJldHVybiBcIi5cIiArIHBhdGNoLmNsYXNzTmFtZTtcclxuICAgIFx0XHRcdFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XHJcbiAgICBcdFx0XHRcdFx0XHR9XHJcbiAgICBcdFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHQpO1xyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdFx0cmV0dXJuIHByZWZpeCArIHNlbGVjdG9yR3JvdXBzLmpvaW4oXCIsXCIpO1xyXG4gICAgXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBwYXRjaEF0dHJpYnV0ZSgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIHJldHVybnMgYSBwYXRjaCBmb3IgYW4gYXR0cmlidXRlIHNlbGVjdG9yLlxyXG5cdGZ1bmN0aW9uIHBhdGNoQXR0cmlidXRlKCBhdHRyICkge1xyXG5cdFx0cmV0dXJuICghQlJPS0VOX0FUVFJfSU1QTEVNRU5UQVRJT05TIHx8IEJST0tFTl9BVFRSX0lNUExFTUVOVEFUSU9OUy50ZXN0KGF0dHIpKSA/IFxyXG5cdFx0XHR7IGNsYXNzTmFtZTogY3JlYXRlQ2xhc3NOYW1lKGF0dHIpLCBhcHBseUNsYXNzOiB0cnVlIH0gOiBudWxsO1xyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBwYXRjaFBzZXVkb0NsYXNzKCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIHJldHVybnMgYSBwYXRjaCBmb3IgYSBwc2V1ZG8tY2xhc3NcclxuXHRmdW5jdGlvbiBwYXRjaFBzZXVkb0NsYXNzKCBwc2V1ZG8gKSB7XHJcblxyXG5cdFx0dmFyIGFwcGx5Q2xhc3MgPSB0cnVlO1xyXG5cdFx0dmFyIGNsYXNzTmFtZSA9IGNyZWF0ZUNsYXNzTmFtZShwc2V1ZG8uc2xpY2UoMSkpO1xyXG5cdFx0dmFyIGlzTmVnYXRlZCA9IHBzZXVkby5zdWJzdHJpbmcoMCwgNSkgPT0gXCI6bm90KFwiO1xyXG5cdFx0dmFyIGFjdGl2YXRlRXZlbnROYW1lO1xyXG5cdFx0dmFyIGRlYWN0aXZhdGVFdmVudE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgbmVnYXRlZCwgcmVtb3ZlIDpub3QoKSBcclxuXHRcdGlmIChpc05lZ2F0ZWQpIHtcclxuXHRcdFx0cHNldWRvID0gcHNldWRvLnNsaWNlKDUsIC0xKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gYnJhY2tldCBjb250ZW50cyBhcmUgaXJyZWxldmFudCAtIHJlbW92ZSB0aGVtXHJcblx0XHR2YXIgYnJhY2tldEluZGV4ID0gcHNldWRvLmluZGV4T2YoXCIoXCIpXHJcblx0XHRpZiAoYnJhY2tldEluZGV4ID4gLTEpIHtcclxuXHRcdFx0cHNldWRvID0gcHNldWRvLnN1YnN0cmluZygwLCBicmFja2V0SW5kZXgpO1xyXG5cdFx0fVx0XHRcclxuXHRcdFxyXG5cdFx0Ly8gY2hlY2sgd2UncmUgc3RpbGwgZGVhbGluZyB3aXRoIGEgcHNldWRvLWNsYXNzXHJcblx0XHRpZiAocHNldWRvLmNoYXJBdCgwKSA9PSBcIjpcIikge1xyXG5cdFx0XHRzd2l0Y2ggKHBzZXVkby5zbGljZSgxKSkge1xyXG5cclxuXHRcdFx0XHRjYXNlIFwicm9vdFwiOlxyXG5cdFx0XHRcdFx0YXBwbHlDbGFzcyA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGlzTmVnYXRlZCA/IGUgIT0gcm9vdCA6IGUgPT0gcm9vdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIFwidGFyZ2V0XCI6XHJcblx0XHRcdFx0XHQvLyA6dGFyZ2V0IGlzIG9ubHkgc3VwcG9ydGVkIGluIElFOFxyXG5cdFx0XHRcdFx0aWYgKGllVmVyc2lvbiA9PSA4KSB7XHJcblx0XHRcdFx0XHRcdGFwcGx5Q2xhc3MgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHsgXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgaGFzaElEID0gaGFzaC5zbGljZSgxKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBpc05lZ2F0ZWQgPyAoaGFzaCA9PSBFTVBUWV9TVFJJTkcgfHwgZS5pZCAhPSBoYXNoSUQpIDogKGhhc2ggIT0gRU1QVFlfU1RSSU5HICYmIGUuaWQgPT0gaGFzaElEKTtcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdGFkZEV2ZW50KCB3aW4sIFwiaGFzaGNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRvZ2dsZUVsZW1lbnRDbGFzcyhlLCBjbGFzc05hbWUsIGhhbmRsZXIoKSk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcigpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgXCJjaGVja2VkXCI6XHJcblx0XHRcdFx0XHRhcHBseUNsYXNzID0gZnVuY3Rpb24oZSkgeyBcclxuXHRcdFx0XHRcdFx0aWYgKFJFX0lOUFVUX0NIRUNLQUJMRV9UWVBFUy50ZXN0KGUudHlwZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRhZGRFdmVudCggZSwgXCJwcm9wZXJ0eWNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChldmVudC5wcm9wZXJ0eU5hbWUgPT0gXCJjaGVja2VkXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9nZ2xlRWxlbWVudENsYXNzKCBlLCBjbGFzc05hbWUsIGUuY2hlY2tlZCAhPT0gaXNOZWdhdGVkICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZS5jaGVja2VkICE9PSBpc05lZ2F0ZWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgXCJkaXNhYmxlZFwiOlxyXG5cdFx0XHRcdFx0aXNOZWdhdGVkID0gIWlzTmVnYXRlZDtcclxuXHJcblx0XHRcdFx0Y2FzZSBcImVuYWJsZWRcIjpcclxuXHRcdFx0XHRcdGFwcGx5Q2xhc3MgPSBmdW5jdGlvbihlKSB7IFxyXG5cdFx0XHRcdFx0XHRpZiAoUkVfSU5QVVRfRUxFTUVOVFMudGVzdChlLnRhZ05hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0YWRkRXZlbnQoIGUsIFwicHJvcGVydHljaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXZlbnQucHJvcGVydHlOYW1lID09IFwiJGRpc2FibGVkXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9nZ2xlRWxlbWVudENsYXNzKCBlLCBjbGFzc05hbWUsIGUuJGRpc2FibGVkID09PSBpc05lZ2F0ZWQgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZFdhdGNoZXJzLnB1c2goZSk7XHJcblx0XHRcdFx0XHRcdFx0ZS4kZGlzYWJsZWQgPSBlLmRpc2FibGVkO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBlLmRpc2FibGVkID09PSBpc05lZ2F0ZWQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHBzZXVkbyA9PSBcIjplbmFibGVkXCIgPyBpc05lZ2F0ZWQgOiAhaXNOZWdhdGVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIFwiZm9jdXNcIjpcclxuXHRcdFx0XHRcdGFjdGl2YXRlRXZlbnROYW1lID0gXCJmb2N1c1wiO1xyXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZUV2ZW50TmFtZSA9IFwiYmx1clwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSBcImhvdmVyXCI6XHJcblx0XHRcdFx0XHRpZiAoIWFjdGl2YXRlRXZlbnROYW1lKSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2YXRlRXZlbnROYW1lID0gXCJtb3VzZWVudGVyXCI7XHJcblx0XHRcdFx0XHRcdGRlYWN0aXZhdGVFdmVudE5hbWUgPSBcIm1vdXNlbGVhdmVcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGFwcGx5Q2xhc3MgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdGFkZEV2ZW50KCBlLCBpc05lZ2F0ZWQgPyBkZWFjdGl2YXRlRXZlbnROYW1lIDogYWN0aXZhdGVFdmVudE5hbWUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRvZ2dsZUVsZW1lbnRDbGFzcyggZSwgY2xhc3NOYW1lLCB0cnVlICk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdGFkZEV2ZW50KCBlLCBpc05lZ2F0ZWQgPyBhY3RpdmF0ZUV2ZW50TmFtZSA6IGRlYWN0aXZhdGVFdmVudE5hbWUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRvZ2dsZUVsZW1lbnRDbGFzcyggZSwgY2xhc3NOYW1lLCBmYWxzZSApO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaXNOZWdhdGVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQvLyBldmVyeXRoaW5nIGVsc2VcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0Ly8gSWYgd2UgZG9uJ3Qgc3VwcG9ydCB0aGlzIHBzZXVkby1jbGFzcyBkb24ndCBjcmVhdGUgXHJcblx0XHRcdFx0XHQvLyBhIHBhdGNoIGZvciBpdFxyXG5cdFx0XHRcdFx0aWYgKCFSRV9QU0VVRE9fU1RSVUNUVVJBTC50ZXN0KHBzZXVkbykpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBhcHBseUNsYXNzOiBhcHBseUNsYXNzIH07XHJcblx0fTtcclxuXHJcblx0Ly8gLS1bIGFwcGx5UGF0Y2hlcygpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gdXNlcyB0aGUgcGFzc2VkIHNlbGVjdG9yIHRleHQgdG8gZmluZCBET00gbm9kZXMgYW5kIHBhdGNoIHRoZW1cdFxyXG5cdGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyhzZWxlY3RvclRleHQsIHBhdGNoZXMpIHtcclxuXHRcdHZhciBlbG1zO1xyXG5cdFx0XHJcblx0XHQvLyBBbHRob3VnaCBzb21lIHNlbGVjdG9yIGxpYnJhcmllcyBjYW4gZmluZCA6Y2hlY2tlZCA6ZW5hYmxlZCBldGMuIFxyXG5cdFx0Ly8gd2UgbmVlZCB0byBmaW5kIGFsbCBlbGVtZW50cyB0aGF0IGNvdWxkIGhhdmUgdGhhdCBzdGF0ZSBiZWNhdXNlIFxyXG5cdFx0Ly8gaXQgY2FuIGJlIGNoYW5nZWQgYnkgdGhlIHVzZXIuXHJcblx0XHR2YXIgZG9tU2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0LnJlcGxhY2UoUkVfTElCUkFSWV9JTkNPTVBBVElCTEVfUFNFVURPUywgRU1QVFlfU1RSSU5HKTtcclxuXHRcdFxyXG5cdFx0Ly8gSWYgdGhlIGRvbSBzZWxlY3RvciBlcXVhdGVzIHRvIGFuIGVtcHR5IHN0cmluZyBvciBlbmRzIHdpdGggXHJcblx0XHQvLyB3aGl0ZXNwYWNlIHRoZW4gd2UgbmVlZCB0byBhcHBlbmQgYSB1bml2ZXJzYWwgc2VsZWN0b3IgKCopIHRvIGl0LlxyXG5cdFx0aWYgKGRvbVNlbGVjdG9yVGV4dCA9PSBFTVBUWV9TVFJJTkcgfHwgZG9tU2VsZWN0b3JUZXh0LmNoYXJBdChkb21TZWxlY3RvclRleHQubGVuZ3RoIC0gMSkgPT0gU1BBQ0VfU1RSSU5HKSB7XHJcblx0XHRcdGRvbVNlbGVjdG9yVGV4dCArPSBcIipcIjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gRW5zdXJlIHdlIGNhdGNoIGVycm9ycyBmcm9tIHRoZSBzZWxlY3RvciBsaWJyYXJ5XHJcblx0XHR0cnkge1xyXG5cdFx0XHRlbG1zID0gc2VsZWN0b3JNZXRob2QoIGRvbVNlbGVjdG9yVGV4dCApO1xyXG5cdFx0fSBjYXRjaCAoZXgpIHtcclxuXHRcdFx0Ly8gI0RFQlVHX1NUQVJUXHJcblx0XHRcdGxvZyggXCJTZWxlY3RvciAnXCIgKyBzZWxlY3RvclRleHQgKyBcIicgdGhyZXcgZXhjZXB0aW9uICdcIiArIGV4ICsgXCInXCIgKTtcclxuXHRcdFx0Ly8gI0RFQlVHX0VORFxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRpZiAoZWxtcykge1xyXG5cdFx0XHRmb3IgKHZhciBkID0gMCwgZGwgPSBlbG1zLmxlbmd0aDsgZCA8IGRsOyBkKyspIHtcdFxyXG5cdFx0XHRcdHZhciBlbG0gPSBlbG1zW2RdO1xyXG5cdFx0XHRcdHZhciBjc3NDbGFzc2VzID0gZWxtLmNsYXNzTmFtZTtcclxuXHRcdFx0XHRmb3IgKHZhciBmID0gMCwgZmwgPSBwYXRjaGVzLmxlbmd0aDsgZiA8IGZsOyBmKyspIHtcclxuXHRcdFx0XHRcdHZhciBwYXRjaCA9IHBhdGNoZXNbZl07XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICghaGFzUGF0Y2goZWxtLCBwYXRjaCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhdGNoLmFwcGx5Q2xhc3MgJiYgKHBhdGNoLmFwcGx5Q2xhc3MgPT09IHRydWUgfHwgcGF0Y2guYXBwbHlDbGFzcyhlbG0pID09PSB0cnVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGNzc0NsYXNzZXMgPSB0b2dnbGVDbGFzcyhjc3NDbGFzc2VzLCBwYXRjaC5jbGFzc05hbWUsIHRydWUgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbG0uY2xhc3NOYW1lID0gY3NzQ2xhc3NlcztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBoYXNQYXRjaCgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGNoZWNrcyBmb3IgdGhlIGV4c2lzdGVuY2Ugb2YgYSBwYXRjaCBvbiBhbiBlbGVtZW50XHJcblx0ZnVuY3Rpb24gaGFzUGF0Y2goIGVsbSwgcGF0Y2ggKSB7XHJcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgcGF0Y2guY2xhc3NOYW1lICsgXCIoXFxcXHN8JClcIikudGVzdChlbG0uY2xhc3NOYW1lKTtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBVdGlsaXR5ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZUNsYXNzTmFtZSggY2xhc3NOYW1lICkge1xyXG5cdFx0cmV0dXJuIG5hbWVzcGFjZSArIFwiLVwiICsgKChpZVZlcnNpb24gPT0gNiAmJiBwYXRjaElFNk11bHRpcGxlQ2xhc3NlcykgP1xyXG5cdFx0XHRpZTZQYXRjaElEKytcclxuXHRcdDpcclxuXHRcdFx0Y2xhc3NOYW1lLnJlcGxhY2UoUkVfUEFUQ0hfQ0xBU1NfTkFNRV9SRVBMQUNFLCBmdW5jdGlvbihhKSB7IHJldHVybiBhLmNoYXJDb2RlQXQoMCkgfSkpO1xyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBsb2coKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vICNERUJVR19TVEFSVFxyXG5cdGZ1bmN0aW9uIGxvZyggbWVzc2FnZSApIHtcclxuXHRcdGlmICh3aW4uY29uc29sZSkge1xyXG5cdFx0XHR3aW4uY29uc29sZS5sb2cobWVzc2FnZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHQvLyAjREVCVUdfRU5EXHJcblxyXG5cdC8vIC0tWyB0cmltKCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIHJlbW92ZXMgbGVhZGluZywgdHJhaWxpbmcgd2hpdGVzcGFjZSBmcm9tIGEgc3RyaW5nXHJcblx0ZnVuY3Rpb24gdHJpbSggdGV4dCApIHtcclxuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoUkVfVElEWV9UUklNX1dISVRFU1BBQ0UsIFBMQUNFSE9MREVSX1NUUklORyk7XHJcblx0fTtcclxuXHJcblx0Ly8gLS1bIG5vcm1hbGl6ZVdoaXRlc3BhY2UoKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gcmVtb3ZlcyBsZWFkaW5nLCB0cmFpbGluZyBhbmQgY29uc2VjdXRpdmUgd2hpdGVzcGFjZSBmcm9tIGEgc3RyaW5nXHJcblx0ZnVuY3Rpb24gbm9ybWFsaXplV2hpdGVzcGFjZSggdGV4dCApIHtcclxuXHRcdHJldHVybiB0cmltKHRleHQpLnJlcGxhY2UoUkVfVElEWV9DT05TRUNVVElWRV9XSElURVNQQUNFLCBTUEFDRV9TVFJJTkcpO1xyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBub3JtYWxpemVTZWxlY3RvcldoaXRlc3BhY2UoKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIHRpZGllcyB3aGl0ZXNwYWNlIGFyb3VuZCBzZWxlY3RvciBicmFja2V0cyBhbmQgY29tYmluYXRvcnNcclxuXHRmdW5jdGlvbiBub3JtYWxpemVTZWxlY3RvcldoaXRlc3BhY2UoIHNlbGVjdG9yVGV4dCApIHtcclxuXHRcdHJldHVybiBub3JtYWxpemVXaGl0ZXNwYWNlKHNlbGVjdG9yVGV4dC5cclxuXHRcdFx0cmVwbGFjZShSRV9USURZX1RSQUlMSU5HX1dISVRFU1BBQ0UsIFBMQUNFSE9MREVSX1NUUklORykuXHJcblx0XHRcdHJlcGxhY2UoUkVfVElEWV9MRUFESU5HX1dISVRFU1BBQ0UsIFBMQUNFSE9MREVSX1NUUklORylcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Ly8gLS1bIHRvZ2dsZUVsZW1lbnRDbGFzcygpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gdG9nZ2xlcyBhIHNpbmdsZSBjbGFzc05hbWUgb24gYW4gZWxlbWVudFxyXG5cdGZ1bmN0aW9uIHRvZ2dsZUVsZW1lbnRDbGFzcyggZWxtLCBjbGFzc05hbWUsIG9uICkge1xyXG5cdFx0dmFyIG9sZENsYXNzTmFtZSA9IGVsbS5jbGFzc05hbWU7XHJcblx0XHR2YXIgbmV3Q2xhc3NOYW1lID0gdG9nZ2xlQ2xhc3Mob2xkQ2xhc3NOYW1lLCBjbGFzc05hbWUsIG9uKTtcclxuXHRcdGlmIChuZXdDbGFzc05hbWUgIT0gb2xkQ2xhc3NOYW1lKSB7XHJcblx0XHRcdGVsbS5jbGFzc05hbWUgPSBuZXdDbGFzc05hbWU7XHJcblx0XHRcdGVsbS5wYXJlbnROb2RlLmNsYXNzTmFtZSArPSBFTVBUWV9TVFJJTkc7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gLS1bIHRvZ2dsZUNsYXNzKCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gYWRkcyAvIHJlbW92ZXMgYSBjbGFzc05hbWUgZnJvbSBhIHN0cmluZyBvZiBjbGFzc05hbWVzLiBVc2VkIHRvIFxyXG5cdC8vIG1hbmFnZSBtdWx0aXBsZSBjbGFzcyBjaGFuZ2VzIHdpdGhvdXQgZm9yY2luZyBhIERPTSByZWRyYXdcclxuXHRmdW5jdGlvbiB0b2dnbGVDbGFzcyggY2xhc3NMaXN0LCBjbGFzc05hbWUsIG9uICkge1xyXG5cdFx0dmFyIHJlID0gUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKTtcclxuXHRcdHZhciBjbGFzc0V4aXN0cyA9IHJlLnRlc3QoY2xhc3NMaXN0KTtcclxuXHRcdGlmIChvbikge1xyXG5cdFx0XHRyZXR1cm4gY2xhc3NFeGlzdHMgPyBjbGFzc0xpc3QgOiBjbGFzc0xpc3QgKyBTUEFDRV9TVFJJTkcgKyBjbGFzc05hbWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gY2xhc3NFeGlzdHMgPyB0cmltKGNsYXNzTGlzdC5yZXBsYWNlKHJlLCBQTEFDRUhPTERFUl9TVFJJTkcpKSA6IGNsYXNzTGlzdDtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdC8vIC0tWyBhZGRFdmVudCgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGZ1bmN0aW9uIGFkZEV2ZW50KGVsbSwgZXZlbnROYW1lLCBldmVudEhhbmRsZXIpIHtcclxuXHRcdGVsbS5hdHRhY2hFdmVudChcIm9uXCIgKyBldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XHJcblx0fTtcclxuXHJcblx0Ly8gLS1bIGdldFhIUk9iamVjdCgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ZnVuY3Rpb24gZ2V0WEhST2JqZWN0KClcclxuXHR7XHJcblx0XHRpZiAod2luLlhNTEh0dHBSZXF1ZXN0KSB7XHJcblx0XHRcdHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XHJcblx0XHR9XHJcblx0XHR0cnlcdHsgXHJcblx0XHRcdHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcclxuXHRcdH0gY2F0Y2goZSkgeyBcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gLS1bIGxvYWRTdHlsZVNoZWV0KCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ZnVuY3Rpb24gbG9hZFN0eWxlU2hlZXQoIHVybCApIHtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybCwgZmFsc2UpO1xyXG5cdFx0eGhyLnNlbmQoKTtcclxuXHRcdHJldHVybiAoeGhyLnN0YXR1cz09MjAwKSA/IHhoci5yZXNwb25zZVRleHQgOiBFTVBUWV9TVFJJTkc7XHRcclxuXHR9O1xyXG5cdFxyXG5cdC8vIC0tWyByZXNvbHZlVXJsKCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIENvbnZlcnRzIGEgVVJMIGZyYWdtZW50IHRvIGEgZnVsbHkgcXVhbGlmaWVkIFVSTCB1c2luZyB0aGUgc3BlY2lmaWVkXHJcblx0Ly8gY29udGV4dCBVUkwuIFJldHVybnMgbnVsbCBpZiBzYW1lLW9yaWdpbiBwb2xpY3kgaXMgYnJva2VuXHJcblx0ZnVuY3Rpb24gcmVzb2x2ZVVybCggdXJsLCBjb250ZXh0VXJsICkge1xyXG5cdFxyXG5cdFx0ZnVuY3Rpb24gZ2V0UHJvdG9jb2xBbmRIb3N0KCB1cmwgKSB7XHJcblx0XHRcdHJldHVybiB1cmwuc3Vic3RyaW5nKDAsIHVybC5pbmRleE9mKFwiL1wiLCA4KSk7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvLyBhYnNvbHV0ZSBwYXRoXHJcblx0XHRpZiAoL15odHRwcz86XFwvXFwvL2kudGVzdCh1cmwpKSB7XHJcblx0XHRcdHJldHVybiBnZXRQcm90b2NvbEFuZEhvc3QoY29udGV4dFVybCkgPT0gZ2V0UHJvdG9jb2xBbmRIb3N0KHVybCkgPyB1cmwgOiBudWxsO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyByb290LXJlbGF0aXZlIHBhdGhcclxuXHRcdGlmICh1cmwuY2hhckF0KDApPT1cIi9cIilcdHtcclxuXHRcdFx0cmV0dXJuIGdldFByb3RvY29sQW5kSG9zdChjb250ZXh0VXJsKSArIHVybDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZWxhdGl2ZSBwYXRoXHJcblx0XHR2YXIgY29udGV4dFVybFBhdGggPSBjb250ZXh0VXJsLnNwbGl0KC9bPyNdLylbMF07IC8vIGlnbm9yZSBxdWVyeSBzdHJpbmcgaW4gdGhlIGNvbnRleHRVcmxcdFxyXG5cdFx0aWYgKHVybC5jaGFyQXQoMCkgIT0gXCI/XCIgJiYgY29udGV4dFVybFBhdGguY2hhckF0KGNvbnRleHRVcmxQYXRoLmxlbmd0aCAtIDEpICE9IFwiL1wiKSB7XHJcblx0XHRcdGNvbnRleHRVcmxQYXRoID0gY29udGV4dFVybFBhdGguc3Vic3RyaW5nKDAsIGNvbnRleHRVcmxQYXRoLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gY29udGV4dFVybFBhdGggKyB1cmw7XHJcblx0fTtcclxuXHRcclxuXHQvLyAtLVsgcGFyc2VTdHlsZVNoZWV0KCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBEb3dubG9hZHMgdGhlIHN0eWxlc2hlZXQgc3BlY2lmaWVkIGJ5IHRoZSBVUkwsIHJlbW92ZXMgaXQncyBjb21tZW50c1xyXG5cdC8vIGFuZCByZWN1cnNpdmx5IHJlcGxhY2VzIEBpbXBvcnQgcnVsZXMgd2l0aCB0aGVpciBjb250ZW50cywgdWx0aW1hdGVseVxyXG5cdC8vIHJldHVybmluZyB0aGUgZnVsbCBjc3NUZXh0LlxyXG5cdGZ1bmN0aW9uIHBhcnNlU3R5bGVTaGVldCggdXJsICkge1xyXG5cdFx0aWYgKHVybCkge1xyXG5cdFx0XHRyZXR1cm4gbG9hZFN0eWxlU2hlZXQodXJsKS5yZXBsYWNlKFJFX0NPTU1FTlQsIEVNUFRZX1NUUklORykuXHJcblx0XHRcdHJlcGxhY2UoUkVfSU1QT1JULCBmdW5jdGlvbiggbWF0Y2gsIHF1b3RlQ2hhciwgaW1wb3J0VXJsLCBxdW90ZUNoYXIyLCBpbXBvcnRVcmwyICkgeyBcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VTdHlsZVNoZWV0KHJlc29sdmVVcmwoaW1wb3J0VXJsIHx8IGltcG9ydFVybDIsIHVybCkpO1xyXG5cdFx0XHR9KS5cclxuXHRcdFx0cmVwbGFjZShSRV9BU1NFVF9VUkwsIGZ1bmN0aW9uKCBtYXRjaCwgcXVvdGVDaGFyLCBhc3NldFVybCApIHsgXHJcblx0XHRcdFx0cXVvdGVDaGFyID0gcXVvdGVDaGFyIHx8IEVNUFRZX1NUUklORztcclxuXHRcdFx0XHRyZXR1cm4gXCIgdXJsKFwiICsgcXVvdGVDaGFyICsgcmVzb2x2ZVVybChhc3NldFVybCwgdXJsKSArIHF1b3RlQ2hhciArIFwiKSBcIjsgXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIEVNUFRZX1NUUklORztcclxuXHR9O1xyXG5cdFxyXG5cdC8vIC0tWyBpbml0KCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGZ1bmN0aW9uIGluaXQoKSB7XHJcblx0XHQvLyBob25vdXIgdGhlIDxiYXNlPiB0YWdcclxuXHRcdHZhciB1cmwsIHN0eWxlc2hlZXQ7XHJcblx0XHR2YXIgYmFzZVRhZ3MgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCQVNFXCIpO1xyXG5cdFx0dmFyIGJhc2VVcmwgPSAoYmFzZVRhZ3MubGVuZ3RoID4gMCkgPyBiYXNlVGFnc1swXS5ocmVmIDogZG9jLmxvY2F0aW9uLmhyZWY7XHJcblx0XHRcclxuXHRcdC8qIE5vdGU6IFRoaXMgY29kZSBwcmV2ZW50cyBJRSBmcm9tIGZyZWV6aW5nIC8gY3Jhc2hpbmcgd2hlbiB1c2luZyBcclxuXHRcdEBmb250LWZhY2UgLmVvdCBmaWxlcyBidXQgaXQgbW9kaWZpZXMgdGhlIDxoZWFkPiB0YWcgYW5kIGNvdWxkXHJcblx0XHR0cmlnZ2VyIHRoZSBJRSBzdHlsZXNoZWV0IGxpbWl0LiBJdCB3aWxsIGFsc28gY2F1c2UgRk9VQyBpc3N1ZXMuXHJcblx0XHRJZiB5b3UgY2hvb3NlIHRvIHVzZSBpdCwgbWFrZSBzdXJlIHlvdSBjb21tZW50IG91dCB0aGUgZm9yIGxvb3AgXHJcblx0XHRkaXJlY3RseSBiZWxvdyB0aGlzIGNvbW1lbnQuXHJcblxyXG5cdFx0dmFyIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdFx0Zm9yICh2YXIgYz1kb2Muc3R5bGVTaGVldHMubGVuZ3RoLTE7IGM+PTA7IGMtLSkge1xyXG5cdFx0XHRzdHlsZXNoZWV0ID0gZG9jLnN0eWxlU2hlZXRzW2NdXHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSlcclxuXHRcdFx0dmFyIHBhdGNoZWRTdHlsZXNoZWV0ID0gZG9jLnN0eWxlU2hlZXRzW2RvYy5zdHlsZVNoZWV0cy5sZW5ndGgtMV07XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc3R5bGVzaGVldC5ocmVmICE9IEVNUFRZX1NUUklORykge1xyXG5cdFx0XHRcdHVybCA9IHJlc29sdmVVcmwoc3R5bGVzaGVldC5ocmVmLCBiYXNlVXJsKVxyXG5cdFx0XHRcdGlmICh1cmwpIHtcclxuXHRcdFx0XHRcdHBhdGNoZWRTdHlsZXNoZWV0LmNzc1RleHQgPSBwYXRjaFN0eWxlU2hlZXQoIHBhcnNlU3R5bGVTaGVldCggdXJsICkgKVxyXG5cdFx0XHRcdFx0c3R5bGVzaGVldC5kaXNhYmxlZCA9IHRydWVcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0c3R5bGVzaGVldC5vd25pbmdFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVzaGVldC5vd25pbmdFbGVtZW50KVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCovXHJcblx0XHRcclxuXHRcdGZvciAodmFyIGMgPSAwOyBjIDwgZG9jLnN0eWxlU2hlZXRzLmxlbmd0aDsgYysrKSB7XHJcblx0XHRcdHN0eWxlc2hlZXQgPSBkb2Muc3R5bGVTaGVldHNbY11cclxuXHRcdFx0aWYgKHN0eWxlc2hlZXQuaHJlZiAhPSBFTVBUWV9TVFJJTkcpIHtcclxuXHRcdFx0XHR1cmwgPSByZXNvbHZlVXJsKHN0eWxlc2hlZXQuaHJlZiwgYmFzZVVybCk7XHJcblx0XHRcdFx0aWYgKHVybCkge1xyXG5cdFx0XHRcdFx0c3R5bGVzaGVldC5jc3NUZXh0ID0gcGF0Y2hTdHlsZVNoZWV0KCBwYXJzZVN0eWxlU2hlZXQoIHVybCApICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIDplbmFibGVkICYgOmRpc2FibGVkIHBvbGxpbmcgc2NyaXB0IChzaW5jZSB3ZSBjYW4ndCBob29rIFxyXG5cdFx0Ly8gb25wcm9wZXJ0eWNoYW5nZSBldmVudCB3aGVuIGFuIGVsZW1lbnQgaXMgZGlzYWJsZWQpIFxyXG5cdFx0aWYgKGVuYWJsZWRXYXRjaGVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBjID0gMCwgY2wgPSBlbmFibGVkV2F0Y2hlcnMubGVuZ3RoOyBjIDwgY2w7IGMrKykge1xyXG5cdFx0XHRcdFx0dmFyIGUgPSBlbmFibGVkV2F0Y2hlcnNbY107XHJcblx0XHRcdFx0XHRpZiAoZS5kaXNhYmxlZCAhPT0gZS4kZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGUuZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRlLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0ZS4kZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGUuJGRpc2FibGVkID0gZS5kaXNhYmxlZDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwyNTApXHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHQvLyBCaW5kIHNlbGVjdGl2aXpyIHRvIHRoZSBDb250ZW50TG9hZGVkIGV2ZW50LiBcclxuXHRDb250ZW50TG9hZGVkKHdpbiwgZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBEZXRlcm1pbmUgdGhlIFwiYmVzdCBmaXRcIiBzZWxlY3RvciBlbmdpbmVcclxuXHRcdGZvciAodmFyIGVuZ2luZSBpbiBzZWxlY3RvckVuZ2luZXMpIHtcclxuXHRcdFx0dmFyIG1lbWJlcnMsIG1lbWJlciwgY29udGV4dCA9IHdpbjtcclxuXHRcdFx0aWYgKHdpbltlbmdpbmVdKSB7XHJcblx0XHRcdFx0bWVtYmVycyA9IHNlbGVjdG9yRW5naW5lc1tlbmdpbmVdLnJlcGxhY2UoXCIqXCIsIGVuZ2luZSkuc3BsaXQoXCIuXCIpO1xyXG5cdFx0XHRcdHdoaWxlICgobWVtYmVyID0gbWVtYmVycy5zaGlmdCgpKSAmJiAoY29udGV4dCA9IGNvbnRleHRbbWVtYmVyXSkpIHt9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBjb250ZXh0ID09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0c2VsZWN0b3JNZXRob2QgPSBjb250ZXh0O1xyXG5cdFx0XHRcdFx0aW5pdCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdC8qIVxyXG5cdCAqIENvbnRlbnRMb2FkZWQuanMgYnkgRGllZ28gUGVyaW5pLCBtb2RpZmllZCBmb3IgSUU8OSBvbmx5ICh0byBzYXZlIHNwYWNlKVxyXG5cdCAqXHJcblx0ICogQXV0aG9yOiBEaWVnbyBQZXJpbmkgKGRpZWdvLnBlcmluaSBhdCBnbWFpbC5jb20pXHJcblx0ICogU3VtbWFyeTogY3Jvc3MtYnJvd3NlciB3cmFwcGVyIGZvciBET01Db250ZW50TG9hZGVkXHJcblx0ICogVXBkYXRlZDogMjAxMDEwMjBcclxuXHQgKiBMaWNlbnNlOiBNSVRcclxuXHQgKiBWZXJzaW9uOiAxLjJcclxuXHQgKlxyXG5cdCAqIFVSTDpcclxuXHQgKiBodHRwOi8vamF2YXNjcmlwdC5ud2JveC5jb20vQ29udGVudExvYWRlZC9cclxuXHQgKiBodHRwOi8vamF2YXNjcmlwdC5ud2JveC5jb20vQ29udGVudExvYWRlZC9NSVQtTElDRU5TRVxyXG5cdCAqXHJcblx0ICovXHJcblxyXG5cdC8vIEB3IHdpbmRvdyByZWZlcmVuY2VcclxuXHQvLyBAZiBmdW5jdGlvbiByZWZlcmVuY2VcclxuXHRmdW5jdGlvbiBDb250ZW50TG9hZGVkKHdpbiwgZm4pIHtcclxuXHJcblx0XHR2YXIgZG9uZSA9IGZhbHNlLCB0b3AgPSB0cnVlLFxyXG5cdFx0aW5pdCA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKGUudHlwZSA9PSBcInJlYWR5c3RhdGVjaGFuZ2VcIiAmJiBkb2MucmVhZHlTdGF0ZSAhPSBcImNvbXBsZXRlXCIpIHJldHVybjtcclxuXHRcdFx0KGUudHlwZSA9PSBcImxvYWRcIiA/IHdpbiA6IGRvYykuZGV0YWNoRXZlbnQoXCJvblwiICsgZS50eXBlLCBpbml0LCBmYWxzZSk7XHJcblx0XHRcdGlmICghZG9uZSAmJiAoZG9uZSA9IHRydWUpKSBmbi5jYWxsKHdpbiwgZS50eXBlIHx8IGUpO1xyXG5cdFx0fSxcclxuXHRcdHBvbGwgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dHJ5IHsgcm9vdC5kb1Njcm9sbChcImxlZnRcIik7IH0gY2F0Y2goZSkgeyBzZXRUaW1lb3V0KHBvbGwsIDUwKTsgcmV0dXJuOyB9XHJcblx0XHRcdGluaXQoJ3BvbGwnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKGRvYy5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIikgZm4uY2FsbCh3aW4sIEVNUFRZX1NUUklORyk7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKGRvYy5jcmVhdGVFdmVudE9iamVjdCAmJiByb290LmRvU2Nyb2xsKSB7XHJcblx0XHRcdFx0dHJ5IHsgdG9wID0gIXdpbi5mcmFtZUVsZW1lbnQ7IH0gY2F0Y2goZSkgeyB9XHJcblx0XHRcdFx0aWYgKHRvcCkgcG9sbCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGFkZEV2ZW50KGRvYyxcInJlYWR5c3RhdGVjaGFuZ2VcIiwgaW5pdCk7XHJcblx0XHRcdGFkZEV2ZW50KHdpbixcImxvYWRcIiwgaW5pdCk7XHJcblx0XHR9XHJcblx0fTtcclxufSkodGhpcyk7IiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XHJcblx0XHRkZWZpbmUoW10sIGZhY3Rvcnkocm9vdCkpO1xyXG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cm9vdC5KU2Zvcm1MYWJlbCA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fVxyXG59KSh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcy53aW5kb3cgfHwgdGhpcy5nbG9iYWwsIGZ1bmN0aW9uIChyb290KSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly9cclxuXHQvLyBWYXJpYWJsZXNcclxuXHQvL1xyXG5cclxuXHR2YXIgSlNmb3JtTGFiZWwgPSBmdW5jdGlvbigpIHt9LCAvLyBPYmplY3QgZm9yIHB1YmxpYyBBUElzXHJcblx0XHR0cmFuc2l0aW9uc1N1cHBvcnRlZCA9ICgndHJhbnNpdGlvbicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlKSB8fCAoJ1dlYmtpdFRyYW5zaXRpb24nIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSksIC8vSUUgMTArLCBDaHJvbWUgMSssIFNhZmFyaSAzLjIrLCBGRiA0KyBhbmQgT3BlcmEgMTIrXHJcblx0XHRzdXBwb3J0cyA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvciAmJiAhIXJvb3QuYWRkRXZlbnRMaXN0ZW5lciAmJiAhIXRyYW5zaXRpb25zU3VwcG9ydGVkLCAvLyBGZWF0dXJlIHRlc3RcclxuXHRcdGV2ZW50VGltZW91dCxcclxuXHRcdGRlZmF1bHRzID0ge1xyXG5cdFx0XHRpbml0Q2xhc3M6ICdqcy1mb3JtbGFiZWwtcGx1Z2luJyxcclxuXHRcdFx0Y2FsbGJhY2tCZWZvcmU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2FsbGJhY2tBZnRlcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzY29wZTogZG9jdW1lbnQsXHJcblx0XHRcdHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXScsXHJcblx0XHRcdGZvY3VzQ29sb3I6IFwiIzBlYWVlOFwiLFxyXG5cdFx0XHRibHVyQ29sb3I6IFwiI2EzYTJhMFwiLFxyXG5cdFx0XHR0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcclxuXHRcdFx0ZGVsYXk6ICcwJyxcclxuXHRcdFx0c3BlZWQ6ICcuMycsXHJcblx0XHRcdGVhc2luZzogJ2Vhc2UnLFxyXG5cdFx0XHRjdXN0b21TdHlsZXM6IGZhbHNlLFxyXG5cdFx0XHRoZWlnaHQ6ICcyNXB4JyxcclxuXHRcdFx0Zm9jdXNDbGFzczogJ2pzLWZvcm1sYWJlbC1wbHVnaW4tZm9jdXMnLFxyXG5cdFx0XHRibHVyQ2xhc3M6ICdqcy1mb3JtbGFiZWwtcGx1Z2luLWJsdXInXHJcblx0XHR9LFxyXG5cdFx0c2V0dGluZ3M7IC8vc2V0dGluZ3Mgb2JqZWN0IHJlc3VsdCBmcm9tIG1lcmdpbmcgZGVmYXVsdCBhbmQgb3B0aW9ucyAoZ2l2ZW4gYXQgaW5pdGlhbGl6YXRpb24pIG9iamVjdHMgXHJcblxyXG5cdC8vwqdcclxuXHQvLyBNZXRob2RzXHJcblx0Ly9cclxuXHJcblx0LyoqXHJcblx0ICogQSBzaW1wbGUgZm9yRWFjaCgpIGltcGxlbWVudGF0aW9uIGZvciBBcnJheXMsIE9iamVjdHMgYW5kIE5vZGVMaXN0c1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtBcnJheXxPYmplY3R8Tm9kZUxpc3R9IGNvbGxlY3Rpb24gQ29sbGVjdGlvbiBvZiBpdGVtcyB0byBpdGVyYXRlXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVhY2ggaXRlcmF0aW9uXHJcblx0ICogQHBhcmFtIHtBcnJheXxPYmplY3R8Tm9kZUxpc3R9IHNjb3BlIE9iamVjdC9Ob2RlTGlzdC9BcnJheSB0aGF0IGZvckVhY2ggaXMgaXRlcmF0aW5nIG92ZXIgKGFrYSBgdGhpc2ApXHJcblx0ICovXHJcblx0dmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY2FsbGJhY2ssIHNjb3BlKSB7XHJcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbGxlY3Rpb24pID09PSAnW29iamVjdCBPYmplY3RdJykge1xyXG5cdFx0XHRmb3IgKHZhciBwcm9wIGluIGNvbGxlY3Rpb24pIHtcclxuXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbGxlY3Rpb24sIHByb3ApKSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKHNjb3BlLCBjb2xsZWN0aW9uW3Byb3BdLCBwcm9wLCBjb2xsZWN0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2xsZWN0aW9uLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2suY2FsbChzY29wZSwgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBNZXJnZSBkZWZhdWx0cyB3aXRoIHVzZXIgb3B0aW9uc1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIERlZmF1bHQgc2V0dGluZ3NcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIG9wdGlvbnNcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBNZXJnZWQgdmFsdWVzIG9mIGRlZmF1bHRzIGFuZCBvcHRpb25zXHJcblx0ICovXHJcblx0dmFyIGV4dGVuZCA9IGZ1bmN0aW9uICggZGVmYXVsdHMsIG9wdGlvbnMgKSB7XHJcblx0XHR2YXIgZXh0ZW5kZWQgPSB7fTtcclxuXHRcdGZvckVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IGRlZmF1bHRzW3Byb3BdO1xyXG5cdFx0fSk7XHJcblx0XHRmb3JFYWNoKG9wdGlvbnMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IG9wdGlvbnNbcHJvcF07XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBleHRlbmRlZDtcclxuXHR9O1xyXG5cclxuXHJcblx0dmFyIHByZWZpeHRyYW5zaXRpb24gPSBmdW5jdGlvbigpe1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBjbG9zZXN0IG1hdGNoaW5nIGVsZW1lbnQgdXAgdGhlIERPTSB0cmVlXHJcblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtIFN0YXJ0aW5nIGVsZW1lbnRcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgU2VsZWN0b3IgdG8gbWF0Y2ggYWdhaW5zdCAoY2xhc3MsIElELCBvciBkYXRhIGF0dHJpYnV0ZSlcclxuXHQgKiBAcmV0dXJuIHtCb29sZWFufEVsZW1lbnR9IFJldHVybnMgZmFsc2UgaWYgbm90IG1hdGNoIGZvdW5kXHJcblx0ICovXHJcblx0dmFyIGdldENsb3Nlc3QgPSBmdW5jdGlvbiAoZWxlbSwgc2VsZWN0b3IpIHtcclxuXHRcdHZhciBmaXJzdENoYXIgPSBzZWxlY3Rvci5jaGFyQXQoMCk7XHJcblx0XHRmb3IgKCA7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSB7XHJcblx0XHRcdGlmICggZmlyc3RDaGFyID09PSAnLicgKSB7XHJcblx0XHRcdFx0aWYgKCBlbGVtLmNsYXNzTGlzdC5jb250YWlucyggc2VsZWN0b3Iuc3Vic3RyKDEpICkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWxlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoIGZpcnN0Q2hhciA9PT0gJyMnICkge1xyXG5cdFx0XHRcdGlmICggZWxlbS5pZCA9PT0gc2VsZWN0b3Iuc3Vic3RyKDEpICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKCBmaXJzdENoYXIgPT09ICdbJyApIHtcclxuXHRcdFx0XHRpZiAoIGVsZW0uaGFzQXR0cmlidXRlKCBzZWxlY3Rvci5zdWJzdHIoMSwgc2VsZWN0b3IubGVuZ3RoIC0gMikgKSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0ICogSGlkZSBMYWJlbHMgaWYgcGxhY2Vob2xkZXIgaXMgcHJlc2VudGVkLCBzaG93IGlmIG90aGVyd2lzZVxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHJldHVybiB7TnVsbHxFbGVtZW50fSBSZXR1cm5zIGxhYmVsIGFzc2Npb2F0ZWQgd2l0aCBlbGVtZW50IG9yIG51bGwgaWYgbm8gZm91bmRlZCBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgU2VsZWN0b3IgdG8gbWF0Y2ggYWdhaW5zdFxyXG5cdCAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fE5vZGVMaXN0fSBzY29wZSBPYmplY3QvTm9kZUxpc3QvQXJyYXkgdGhhdCBmb3JFYWNoIGlzIGl0ZXJhdGluZyBvdmVyIChha2EgYHRoaXNgKVxyXG5cdCAqL1xyXG5cdHZhciBoaWRlTGFiZWxzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwYXJlbnQpIHtcclxuXHRcdHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG5cdFx0XHRzY29wZSA9IHBhcmVudCB8fCBkb2N1bWVudDtcclxuXHJcblx0XHRmb3JFYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihlLGkpe1xyXG5cdFx0XHQvLyBnZXQgbGFiZWwgYW5kIHBsYWNlaG9sZGVyIGZvciB0aGUgaW5wdXRcclxuXHRcdFx0dmFyIGxhYmVsID0gZ2V0TGFiZWwoZSksXHJcblx0XHRcdFx0cGxhY2Vob2xkZXIgPSBlLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTsgXHJcblxyXG5cdFx0XHQvLyBkaXNwbGF5IGFsbCBsYWJlbHMgYXMgYmxvY2tcclxuXHRcdFx0aWYobGFiZWwgIT09IHVuZGVmaW5lZCkge2xhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyB9XHJcblxyXG5cdFx0XHQvLyBoaWRlIHRoZSBsYWJlbCBvbmx5IGlmIHRoZXJlIGlzIGEgcGxhY2Vob2xkZXIgXHJcblx0XHRcdGlmIChwbGFjZWhvbGRlciAhPT0gbnVsbCAmJiBwbGFjZWhvbGRlciAhPT0gJycpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHRcdFx0XHRpZiAoIXNldHRpbmdzLmN1c3RvbVN0eWxlcykge1xyXG5cdFx0XHRcdFx0ZS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuXHRcdFx0XHRcdGUuc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcblx0XHRcdFx0XHRlLnN0eWxlLmhlaWdodCA9IHNldHRpbmdzLmhlaWdodDtcclxuXHRcdFx0XHRcdGxhYmVsLnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5mb2N1c0NvbG9yO1xyXG5cdFx0XHRcdFx0bGFiZWwuc3R5bGUuaGVpZ2h0ID0gc2V0dGluZ3MuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0bGFiZWwuc3R5bGUuY29sb3IgPSBzZXR0aW5ncy50ZXh0Q29sb3I7XHJcblx0XHRcdFx0XHQvL2xhYmVsLnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHRcdFx0XHRcdC8vbGFiZWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlM2QoMSwwLDEpJztcclxuXHRcdFx0XHRcdGxhYmVsLnN0eWxlLnRyYW5zaXRpb24gPSAoc2V0dGluZ3Muc3BlZWQpICsgJ3MnO1xyXG5cdFx0XHRcdFx0bGFiZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCI7XHJcblx0XHRcdFx0XHQvLyBsYWJlbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG5cdFx0XHRcdFx0Ly8gbGFiZWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gJyArIChzZXR0aW5ncy5zcGVlZCkgKyAncycgKyAnLCBvcGFjaXR5ICcgKyAoc2V0dGluZ3Muc3BlZWQgLyA0KSArJ3MnO1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGUuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5ibHVyQ2xhc3MpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQvL2Rvbid0IGFwcGx5IGNsYXNzIHRhZ2dsZSAvIGVmZmVjdCBmb3IgaW5wdXRzIHdpdGhvdXQgcGxhY2Vob2xkZXJcclxuXHRcdFx0XHRlLmNsYXNzTGlzdC5hZGQoJ2pzLWZvcm1sYWJlbC1wbHVnaW4taW5hY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sIHBhcmVudCk7XHJcblxyXG5cdH07XHJcblxyXG5cdHZhciByZXZlYWxMYWJlbCA9IGZ1bmN0aW9uIChlbCl7XHJcblxyXG5cdFx0dmFyIGxhYmVsID0gZ2V0TGFiZWwoZWwpO1xyXG5cclxuXHRcdGVsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnJyk7XHJcblxyXG5cdFx0aWYgIChlbC5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3MuYmx1ckNsYXNzKSkge1xyXG5cdFx0XHRpZiAoIXNldHRpbmdzLmN1c3RvbVN0eWxlcykge1xyXG5cdFx0XHRcdC8vIGhpZGUgdGhlIGxhYmVsIG9ubHkgaWYgdGhlcmUgaXMgYSBwbGFjZWhvbGRlciBcclxuXHRcdFx0XHRsYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMClcIjtcclxuXHRcdFx0XHQvLyBsYWJlbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdC8vbGFiZWwuc3R5bGUubWF4SGVpZ2h0ID0gJzUwcHgnO1xyXG5cdFx0XHRcdC8vbGFiZWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlM2QoMSwxLDEpJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnanMtZm9ybWxhYmVsLXBsdWdpbi1pbmFjdGl2ZScpKSB7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmJsdXJDbGFzcyk7IFxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmZvY3VzQ2xhc3MpOyBcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgaGlkZUxhYmVsID0gZnVuY3Rpb24gKGVsKXtcclxuXHJcblx0XHR2YXIgbGFiZWwgPSBnZXRMYWJlbChlbCksXHJcblx0XHRwbGFjZWhvbGRlciA9ICBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2Vob2xkZXInKSB8fCAnJztcclxuXHJcblx0XHRlbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xyXG5cclxuXHJcblx0XHQvLyBoaWRlIHRoZSBsYWJlbCBvbmx5IGlmIHRoZXJlIGlzIGEgcGxhY2Vob2xkZXIgXHJcblx0XHRpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNldHRpbmdzLmZvY3VzQ2xhc3MpKSB7XHJcblx0XHRcdGlmICghc2V0dGluZ3MuY3VzdG9tU3R5bGVzKSB7XHJcblx0XHRcdFx0bGFiZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCI7XHJcblx0XHRcdFx0Ly8gbGFiZWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuXHRcdFx0XHQvLyBsYWJlbC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAnICsgKHNldHRpbmdzLnNwZWVkIC8gNCkgKyAncycgKyAnLCBvcGFjaXR5ICcgKyAoc2V0dGluZ3Muc3BlZWQgLyAyKSArJ3MnO1xyXG5cdFx0XHRcdC8vbGFiZWwuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xyXG5cdFx0XHRcdC8vbGFiZWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlM2QoMSwwLDEpJztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1mb3JtbGFiZWwtcGx1Z2luLWluYWN0aXZlJykpIHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5mb2N1c0NsYXNzKTtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5ibHVyQ2xhc3MpO1x0XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhIGxhYmVsIGFzc29jaWF0ZWQgd2l0aCBhIHNwZWNpZmljIGlub3V0XHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIGVsZW1lbnQgdG8gbWF0Y2ggYWdhaW5zdFxyXG5cdCAqIEByZXR1cm4ge051bGx8RWxlbWVudH0gUmV0dXJucyBsYWJlbCBhc3NjaW9hdGVkIHdpdGggZWxlbWVudCBvciBudWxsIGlmIG5vIGZvdW5kZWQgXHJcblx0ICovXHJcblx0dmFyIGdldExhYmVsID0gZnVuY3Rpb24gKGVsKSB7XHJcblx0ICAgdmFyIGlkID0gZWwuaWQsXHJcblx0ICAgXHRcdGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XHJcblx0ICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKysgKSB7XHJcblx0ICAgICAgaWYgKGxhYmVsc1tpXS5nZXRBdHRyaWJ1dGUoJ2ZvcicpID09PSBpZClcclxuXHQgICAgICAgICAgIHJldHVybiBsYWJlbHNbaV07XHJcblx0ICAgfVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZSBldmVudHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBldmVudEhhbmRsZXJGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0dmFyIGVsID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0Ly8gdmFyIGNsb3Nlc3QgPSBnZXRDbG9zZXN0KGVsLCBzZXR0aW5ncy5zZWxlY3Rvcik7XHJcblx0XHQvLyBpZiAoIGNsb3Nlc3QgKSB7XHJcblx0XHQvLyBcdC8vIHJ1biBtZXRob2RzXHJcblx0XHQvLyB9XHJcblx0XHRcclxuXHRcdHJldmVhbExhYmVsKGVsLCBzZXR0aW5ncy5zY29wZSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlIGV2ZW50c1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIGV2ZW50SGFuZGxlckJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdHZhciBlbCA9IGV2ZW50LnRhcmdldDtcclxuXHRcdC8vIHZhciBjbG9zZXN0ID0gZ2V0Q2xvc2VzdChlbCwgc2V0dGluZ3Muc2VsZWN0b3IpO1xyXG5cdFx0Ly8gaWYgKCBjbG9zZXN0ICkge1xyXG5cdFx0Ly8gXHQvLyBydW4gbWV0aG9kc1xyXG5cdFx0Ly8gfVxyXG5cdFx0XHJcblx0XHRoaWRlTGFiZWwoZWwsIHNldHRpbmdzLnNjb3BlKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBPbiB3aW5kb3cgc2Nyb2xsIGFuZCByZXNpemUsIG9ubHkgcnVuIGV2ZW50cyBhdCBhIHJhdGUgb2YgMTVmcHMgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtICB7RnVuY3Rpb259IGV2ZW50VGltZW91dCBUaW1lb3V0IGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdHZhciBldmVudFRocm90dGxlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICggIWV2ZW50VGltZW91dCApIHtcclxuXHRcdFx0ZXZlbnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRldmVudFRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdGFjdHVhbE1ldGhvZCggc2V0dGluZ3MgKTtcclxuXHRcdFx0fSwgNjYpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlc3Ryb3kgdGhlIGN1cnJlbnQgaW5pdGlhbGl6YXRpb24uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdEpTZm9ybUxhYmVsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdC8vIElmIHBsdWdpbiBpc24ndCBhbHJlYWR5IGluaXRpYWxpemVkLCBzdG9wXHJcblx0XHRpZiAoICFzZXR0aW5ncyApIHJldHVybjtcclxuXHJcblx0XHQvLyBSZW1vdmUgaW5pdCBjbGFzcyBmb3IgY29uZGl0aW9uYWwgQ1NTXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggc2V0dGluZ3MuaW5pdENsYXNzICk7XHJcblxyXG5cdFx0Ly8gQHRvZG8gVW5kbyBhbnkgb3RoZXIgaW5pdCBmdW5jdGlvbnMuLi5cclxuXHJcblx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50SGFuZGxlciwgZmFsc2UpO1xyXG5cclxuXHRcdC8vIFJlc2V0IHZhcmlhYmxlc1xyXG5cdFx0c2V0dGluZ3MgPSBudWxsO1xyXG5cdFx0ZXZlbnRUaW1lb3V0ID0gbnVsbDtcclxuXHJcblxyXG5cdH07XHJcblxyXG5cdFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZSBQbHVnaW5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzZXR0aW5nc1xyXG5cdCAqL1xyXG5cdEpTZm9ybUxhYmVsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cclxuXHRcdC8vIGZlYXR1cmUgdGVzdFxyXG5cdFx0aWYgKCAhc3VwcG9ydHMgKSByZXR1cm47XHJcblxyXG5cdFx0Ly8gRGVzdHJveSBhbnkgZXhpc3RpbmcgaW5pdGlhbGl6YXRpb25zXHJcblx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHJcblx0XHQvLyBNZXJnZSB1c2VyIG9wdGlvbnMgd2l0aCBkZWZhdWx0c1xyXG5cdFx0c2V0dGluZ3MgPSBleHRlbmQoIGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9ICk7XHJcblxyXG5cdFx0c2V0dGluZ3MuY2FsbGJhY2tCZWZvcmUoJ3RyYW5zZm9ybScpO1xyXG5cclxuXHRcdC8vIEFkZCBjbGFzcyB0byBIVE1MIGVsZW1lbnQgdG8gYWN0aXZhdGUgY29uZGl0aW9uYWwgQ1NTXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCggc2V0dGluZ3MuaW5pdENsYXNzICk7XHJcblxyXG5cdFx0aGlkZUxhYmVscyhzZXR0aW5ncy5zZWxlY3Rvciwgc2V0dGluZ3Muc2NvcGUpO1xyXG5cclxuXHRcdC8vIEB0b2RvIERvIHNvbWV0aGluZy4uLlxyXG5cclxuXHRcdC8vIExpc3RlbiBmb3IgZXZlbnRzXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV2ZW50SGFuZGxlckZvY3VzLCB0cnVlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBldmVudEhhbmRsZXJCbHVyLCB0cnVlKTtcclxuXHRcdC8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhpZGVMYWJlbHMoZXZlbnQudGFyZ2V0KSwgZmFsc2UpO1xyXG5cclxuXHRcdHNldHRpbmdzLmNhbGxiYWNrQWZ0ZXIoKTtcclxuXHJcblx0fTtcclxuXHJcblx0Ly9cclxuXHQvLyBQdWJsaWMgQVBJc1xyXG5cdC8vXHJcblxyXG5cdHJldHVybiBKU2Zvcm1MYWJlbDtcclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
