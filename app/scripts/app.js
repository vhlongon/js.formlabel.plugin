/**
 * Victor Longon
 * @version 0.1
 * @author www.victorlongon.com
 * @copyright Victor Longon 2015
 */

// Doc content loaded
(function () {

    document.addEventListener("DOMContentLoaded", function() {

        var settings = {initClass: 'something-else'},
            plugin = new JSformLabel();

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
			selector: 'input',
			focusColor: "#0eaee8",
			blurColor: "#a3a2a0"
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
		var elements = document.querySelectorAll(selector);
		forEach(elements, function(e,i){
			// get label and placeholder for the input
			var label = getLabel(e),
				placeholder = e.getAttribute('placeholder'); 

			// hide the label only if there is a placeholder 
			if (placeholder !== null && placeholder !== '') {
				label.style.display = 'none';
			}

		}, parent);

	};

	var prefix = function(rule, value){
		var domPrefixes = 'webkit moz O ms'.split(' '),
    		declarations = [],
    		value = value || 0;
    	for (var i = 0; i < domPrefixes.length; i++) {
    		var string = '-' + domPrefixes[i] + '-' + rule + ':' + value + ';';
			declarations.push(string);
    	}

    	console.log(declarations.join(" "));

    	
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
	var eventHandler = function (event) {
		var toggle = event.target;
		var closest = getClosest(toggle, '[data-some-selector]');
		if ( closest ) {
			// run methods
		}
		console.log('My plugin has been clicked!');
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

		prefix('transform');

		// Add class to HTML element to activate conditional CSS
		document.documentElement.classList.add( settings.initClass );

		hideLabels(settings.selector, settings.scope);

		// @todo Do something...

		// Listen for events
		document.addEventListener('click', eventHandler, false);

		settings.callbackAfter();

	};

	//
	// Public APIs
	//

	return JSformLabel;

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2Rlcm5penIuanMiLCJyZXNwb25kLnNyYy5qcyIsInNlbGVjdGl2aXpyLmpzIiwianMuZm9ybWxhYmVsLnBsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBWaWN0b3IgTG9uZ29uXHJcbiAqIEB2ZXJzaW9uIDAuMVxyXG4gKiBAYXV0aG9yIHd3dy52aWN0b3Jsb25nb24uY29tXHJcbiAqIEBjb3B5cmlnaHQgVmljdG9yIExvbmdvbiAyMDE1XHJcbiAqL1xyXG5cclxuLy8gRG9jIGNvbnRlbnQgbG9hZGVkXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHtpbml0Q2xhc3M6ICdzb21ldGhpbmctZWxzZSd9LFxyXG4gICAgICAgICAgICBwbHVnaW4gPSBuZXcgSlNmb3JtTGFiZWwoKTtcclxuXHJcbiAgICAgICAgcGx1Z2luLmluaXQoc2V0dGluZ3MpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSkoKTtcclxuXHJcbiIsIi8qIE1vZGVybml6ciAyLjguMyAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAmIEJTRFxyXG4gKiBCdWlsZDogaHR0cDovL21vZGVybml6ci5jb20vZG93bmxvYWQvIy1mb250ZmFjZS1iYWNrZ3JvdW5kc2l6ZS1ib3JkZXJpbWFnZS1ib3JkZXJyYWRpdXMtYm94c2hhZG93LWZsZXhib3gtaHNsYS1tdWx0aXBsZWJncy1vcGFjaXR5LXJnYmEtdGV4dHNoYWRvdy1jc3NhbmltYXRpb25zLWNzc2NvbHVtbnMtZ2VuZXJhdGVkY29udGVudC1jc3NncmFkaWVudHMtY3NzcmVmbGVjdGlvbnMtY3NzdHJhbnNmb3Jtcy1jc3N0cmFuc2Zvcm1zM2QtY3NzdHJhbnNpdGlvbnMtYXBwbGljYXRpb25jYWNoZS1jYW52YXMtY2FudmFzdGV4dC1kcmFnYW5kZHJvcC1oYXNoY2hhbmdlLWhpc3RvcnktYXVkaW8tdmlkZW8taW5kZXhlZGRiLWlucHV0LWlucHV0dHlwZXMtbG9jYWxzdG9yYWdlLXBvc3RtZXNzYWdlLXNlc3Npb25zdG9yYWdlLXdlYnNvY2tldHMtd2Vic3FsZGF0YWJhc2Utd2Vid29ya2Vycy1nZW9sb2NhdGlvbi1pbmxpbmVzdmctc21pbC1zdmctc3ZnY2xpcHBhdGhzLXRvdWNoLXdlYmdsLXNoaXYtbXEtY3NzY2xhc3Nlcy1hZGR0ZXN0LXByZWZpeGVkLXRlc3RzdHlsZXMtdGVzdHByb3AtdGVzdGFsbHByb3BzLWhhc2V2ZW50LXByZWZpeGVzLWRvbXByZWZpeGVzLWxvYWRcclxuICovXHJcbjt3aW5kb3cuTW9kZXJuaXpyPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBEKGEpe2ouY3NzVGV4dD1hfWZ1bmN0aW9uIEUoYSxiKXtyZXR1cm4gRChuLmpvaW4oYStcIjtcIikrKGJ8fFwiXCIpKX1mdW5jdGlvbiBGKGEsYil7cmV0dXJuIHR5cGVvZiBhPT09Yn1mdW5jdGlvbiBHKGEsYil7cmV0dXJuISF+KFwiXCIrYSkuaW5kZXhPZihiKX1mdW5jdGlvbiBIKGEsYil7Zm9yKHZhciBkIGluIGEpe3ZhciBlPWFbZF07aWYoIUcoZSxcIi1cIikmJmpbZV0hPT1jKXJldHVybiBiPT1cInBmeFwiP2U6ITB9cmV0dXJuITF9ZnVuY3Rpb24gSShhLGIsZCl7Zm9yKHZhciBlIGluIGEpe3ZhciBmPWJbYVtlXV07aWYoZiE9PWMpcmV0dXJuIGQ9PT0hMT9hW2VdOkYoZixcImZ1bmN0aW9uXCIpP2YuYmluZChkfHxiKTpmfXJldHVybiExfWZ1bmN0aW9uIEooYSxiLGMpe3ZhciBkPWEuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxlPShhK1wiIFwiK3Auam9pbihkK1wiIFwiKStkKS5zcGxpdChcIiBcIik7cmV0dXJuIEYoYixcInN0cmluZ1wiKXx8RihiLFwidW5kZWZpbmVkXCIpP0goZSxiKTooZT0oYStcIiBcIitxLmpvaW4oZCtcIiBcIikrZCkuc3BsaXQoXCIgXCIpLEkoZSxiLGMpKX1mdW5jdGlvbiBLKCl7ZS5pbnB1dD1mdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspdVtjW2RdXT1jW2RdaW4gaztyZXR1cm4gdS5saXN0JiYodS5saXN0PSEhYi5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIikmJiEhYS5IVE1MRGF0YUxpc3RFbGVtZW50KSx1fShcImF1dG9jb21wbGV0ZSBhdXRvZm9jdXMgbGlzdCBwbGFjZWhvbGRlciBtYXggbWluIG11bHRpcGxlIHBhdHRlcm4gcmVxdWlyZWQgc3RlcFwiLnNwbGl0KFwiIFwiKSksZS5pbnB1dHR5cGVzPWZ1bmN0aW9uKGEpe2Zvcih2YXIgZD0wLGUsZixoLGk9YS5sZW5ndGg7ZDxpO2QrKylrLnNldEF0dHJpYnV0ZShcInR5cGVcIixmPWFbZF0pLGU9ay50eXBlIT09XCJ0ZXh0XCIsZSYmKGsudmFsdWU9bCxrLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTt2aXNpYmlsaXR5OmhpZGRlbjtcIiwvXnJhbmdlJC8udGVzdChmKSYmay5zdHlsZS5XZWJraXRBcHBlYXJhbmNlIT09Yz8oZy5hcHBlbmRDaGlsZChrKSxoPWIuZGVmYXVsdFZpZXcsZT1oLmdldENvbXB1dGVkU3R5bGUmJmguZ2V0Q29tcHV0ZWRTdHlsZShrLG51bGwpLldlYmtpdEFwcGVhcmFuY2UhPT1cInRleHRmaWVsZFwiJiZrLm9mZnNldEhlaWdodCE9PTAsZy5yZW1vdmVDaGlsZChrKSk6L14oc2VhcmNofHRlbCkkLy50ZXN0KGYpfHwoL14odXJsfGVtYWlsKSQvLnRlc3QoZik/ZT1rLmNoZWNrVmFsaWRpdHkmJmsuY2hlY2tWYWxpZGl0eSgpPT09ITE6ZT1rLnZhbHVlIT1sKSksdFthW2RdXT0hIWU7cmV0dXJuIHR9KFwic2VhcmNoIHRlbCB1cmwgZW1haWwgZGF0ZXRpbWUgZGF0ZSBtb250aCB3ZWVrIHRpbWUgZGF0ZXRpbWUtbG9jYWwgbnVtYmVyIHJhbmdlIGNvbG9yXCIuc3BsaXQoXCIgXCIpKX12YXIgZD1cIjIuOC4zXCIsZT17fSxmPSEwLGc9Yi5kb2N1bWVudEVsZW1lbnQsaD1cIm1vZGVybml6clwiLGk9Yi5jcmVhdGVFbGVtZW50KGgpLGo9aS5zdHlsZSxrPWIuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGw9XCI6KVwiLG09e30udG9TdHJpbmcsbj1cIiAtd2Via2l0LSAtbW96LSAtby0gLW1zLSBcIi5zcGxpdChcIiBcIiksbz1cIldlYmtpdCBNb3ogTyBtc1wiLHA9by5zcGxpdChcIiBcIikscT1vLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLHI9e3N2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9LHM9e30sdD17fSx1PXt9LHY9W10sdz12LnNsaWNlLHgseT1mdW5jdGlvbihhLGMsZCxlKXt2YXIgZixpLGosayxsPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxtPWIuYm9keSxuPW18fGIuY3JlYXRlRWxlbWVudChcImJvZHlcIik7aWYocGFyc2VJbnQoZCwxMCkpd2hpbGUoZC0tKWo9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGouaWQ9ZT9lW2RdOmgrKGQrMSksbC5hcHBlbmRDaGlsZChqKTtyZXR1cm4gZj1bXCImIzE3MztcIiwnPHN0eWxlIGlkPVwicycsaCwnXCI+JyxhLFwiPC9zdHlsZT5cIl0uam9pbihcIlwiKSxsLmlkPWgsKG0/bDpuKS5pbm5lckhUTUwrPWYsbi5hcHBlbmRDaGlsZChsKSxtfHwobi5zdHlsZS5iYWNrZ3JvdW5kPVwiXCIsbi5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGs9Zy5zdHlsZS5vdmVyZmxvdyxnLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZy5hcHBlbmRDaGlsZChuKSksaT1jKGwsYSksbT9sLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCk6KG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSxnLnN0eWxlLm92ZXJmbG93PWspLCEhaX0sej1mdW5jdGlvbihiKXt2YXIgYz1hLm1hdGNoTWVkaWF8fGEubXNNYXRjaE1lZGlhO2lmKGMpcmV0dXJuIGMoYikmJmMoYikubWF0Y2hlc3x8ITE7dmFyIGQ7cmV0dXJuIHkoXCJAbWVkaWEgXCIrYitcIiB7ICNcIitoK1wiIHsgcG9zaXRpb246IGFic29sdXRlOyB9IH1cIixmdW5jdGlvbihiKXtkPShhLmdldENvbXB1dGVkU3R5bGU/Z2V0Q29tcHV0ZWRTdHlsZShiLG51bGwpOmIuY3VycmVudFN0eWxlKVtcInBvc2l0aW9uXCJdPT1cImFic29sdXRlXCJ9KSxkfSxBPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZChkLGUpe2U9ZXx8Yi5jcmVhdGVFbGVtZW50KGFbZF18fFwiZGl2XCIpLGQ9XCJvblwiK2Q7dmFyIGY9ZCBpbiBlO3JldHVybiBmfHwoZS5zZXRBdHRyaWJ1dGV8fChlPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksZS5zZXRBdHRyaWJ1dGUmJmUucmVtb3ZlQXR0cmlidXRlJiYoZS5zZXRBdHRyaWJ1dGUoZCxcIlwiKSxmPUYoZVtkXSxcImZ1bmN0aW9uXCIpLEYoZVtkXSxcInVuZGVmaW5lZFwiKXx8KGVbZF09YyksZS5yZW1vdmVBdHRyaWJ1dGUoZCkpKSxlPW51bGwsZn12YXIgYT17c2VsZWN0OlwiaW5wdXRcIixjaGFuZ2U6XCJpbnB1dFwiLHN1Ym1pdDpcImZvcm1cIixyZXNldDpcImZvcm1cIixlcnJvcjpcImltZ1wiLGxvYWQ6XCJpbWdcIixhYm9ydDpcImltZ1wifTtyZXR1cm4gZH0oKSxCPXt9Lmhhc093blByb3BlcnR5LEM7IUYoQixcInVuZGVmaW5lZFwiKSYmIUYoQi5jYWxsLFwidW5kZWZpbmVkXCIpP0M9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gQi5jYWxsKGEsYil9OkM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYiBpbiBhJiZGKGEuY29uc3RydWN0b3IucHJvdG90eXBlW2JdLFwidW5kZWZpbmVkXCIpfSxGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7aWYodHlwZW9mIGMhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciBkPXcuY2FsbChhcmd1bWVudHMsMSksZT1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBlKXt2YXIgYT1mdW5jdGlvbigpe307YS5wcm90b3R5cGU9Yy5wcm90b3R5cGU7dmFyIGY9bmV3IGEsZz1jLmFwcGx5KGYsZC5jb25jYXQody5jYWxsKGFyZ3VtZW50cykpKTtyZXR1cm4gT2JqZWN0KGcpPT09Zz9nOmZ9cmV0dXJuIGMuYXBwbHkoYixkLmNvbmNhdCh3LmNhbGwoYXJndW1lbnRzKSkpfTtyZXR1cm4gZX0pLHMuZmxleGJveD1mdW5jdGlvbigpe3JldHVybiBKKFwiZmxleFdyYXBcIil9LHMuY2FudmFzPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3JldHVybiEhYS5nZXRDb250ZXh0JiYhIWEuZ2V0Q29udGV4dChcIjJkXCIpfSxzLmNhbnZhc3RleHQ9ZnVuY3Rpb24oKXtyZXR1cm4hIWUuY2FudmFzJiYhIUYoYi5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKS5maWxsVGV4dCxcImZ1bmN0aW9uXCIpfSxzLndlYmdsPWZ1bmN0aW9uKCl7cmV0dXJuISFhLldlYkdMUmVuZGVyaW5nQ29udGV4dH0scy50b3VjaD1mdW5jdGlvbigpe3ZhciBjO3JldHVyblwib250b3VjaHN0YXJ0XCJpbiBhfHxhLkRvY3VtZW50VG91Y2gmJmIgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoP2M9ITA6eShbXCJAbWVkaWEgKFwiLG4uam9pbihcInRvdWNoLWVuYWJsZWQpLChcIiksaCxcIilcIixcInsjbW9kZXJuaXpye3RvcDo5cHg7cG9zaXRpb246YWJzb2x1dGV9fVwiXS5qb2luKFwiXCIpLGZ1bmN0aW9uKGEpe2M9YS5vZmZzZXRUb3A9PT05fSksY30scy5nZW9sb2NhdGlvbj1mdW5jdGlvbigpe3JldHVyblwiZ2VvbG9jYXRpb25cImluIG5hdmlnYXRvcn0scy5wb3N0bWVzc2FnZT1mdW5jdGlvbigpe3JldHVybiEhYS5wb3N0TWVzc2FnZX0scy53ZWJzcWxkYXRhYmFzZT1mdW5jdGlvbigpe3JldHVybiEhYS5vcGVuRGF0YWJhc2V9LHMuaW5kZXhlZERCPWZ1bmN0aW9uKCl7cmV0dXJuISFKKFwiaW5kZXhlZERCXCIsYSl9LHMuaGFzaGNoYW5nZT1mdW5jdGlvbigpe3JldHVybiBBKFwiaGFzaGNoYW5nZVwiLGEpJiYoYi5kb2N1bWVudE1vZGU9PT1jfHxiLmRvY3VtZW50TW9kZT43KX0scy5oaXN0b3J5PWZ1bmN0aW9uKCl7cmV0dXJuISFhLmhpc3RvcnkmJiEhaGlzdG9yeS5wdXNoU3RhdGV9LHMuZHJhZ2FuZGRyb3A9ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuXCJkcmFnZ2FibGVcImluIGF8fFwib25kcmFnc3RhcnRcImluIGEmJlwib25kcm9wXCJpbiBhfSxzLndlYnNvY2tldHM9ZnVuY3Rpb24oKXtyZXR1cm5cIldlYlNvY2tldFwiaW4gYXx8XCJNb3pXZWJTb2NrZXRcImluIGF9LHMucmdiYT1mdW5jdGlvbigpe3JldHVybiBEKFwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MCwyNTUsMTUwLC41KVwiKSxHKGouYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKX0scy5oc2xhPWZ1bmN0aW9uKCl7cmV0dXJuIEQoXCJiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMTIwLDQwJSwxMDAlLC41KVwiKSxHKGouYmFja2dyb3VuZENvbG9yLFwicmdiYVwiKXx8RyhqLmJhY2tncm91bmRDb2xvcixcImhzbGFcIil9LHMubXVsdGlwbGViZ3M9ZnVuY3Rpb24oKXtyZXR1cm4gRChcImJhY2tncm91bmQ6dXJsKGh0dHBzOi8vKSx1cmwoaHR0cHM6Ly8pLHJlZCB1cmwoaHR0cHM6Ly8pXCIpLC8odXJsXFxzKlxcKC4qPyl7M30vLnRlc3Qoai5iYWNrZ3JvdW5kKX0scy5iYWNrZ3JvdW5kc2l6ZT1mdW5jdGlvbigpe3JldHVybiBKKFwiYmFja2dyb3VuZFNpemVcIil9LHMuYm9yZGVyaW1hZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gSihcImJvcmRlckltYWdlXCIpfSxzLmJvcmRlcnJhZGl1cz1mdW5jdGlvbigpe3JldHVybiBKKFwiYm9yZGVyUmFkaXVzXCIpfSxzLmJveHNoYWRvdz1mdW5jdGlvbigpe3JldHVybiBKKFwiYm94U2hhZG93XCIpfSxzLnRleHRzaGFkb3c9ZnVuY3Rpb24oKXtyZXR1cm4gYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLnRleHRTaGFkb3c9PT1cIlwifSxzLm9wYWNpdHk9ZnVuY3Rpb24oKXtyZXR1cm4gRShcIm9wYWNpdHk6LjU1XCIpLC9eMC41NSQvLnRlc3Qoai5vcGFjaXR5KX0scy5jc3NhbmltYXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEooXCJhbmltYXRpb25OYW1lXCIpfSxzLmNzc2NvbHVtbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSihcImNvbHVtbkNvdW50XCIpfSxzLmNzc2dyYWRpZW50cz1mdW5jdGlvbigpe3ZhciBhPVwiYmFja2dyb3VuZC1pbWFnZTpcIixiPVwiZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IGJvdHRvbSxmcm9tKCM5ZjkpLHRvKHdoaXRlKSk7XCIsYz1cImxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwjOWY5LCB3aGl0ZSk7XCI7cmV0dXJuIEQoKGErXCItd2Via2l0LSBcIi5zcGxpdChcIiBcIikuam9pbihiK2EpK24uam9pbihjK2EpKS5zbGljZSgwLC1hLmxlbmd0aCkpLEcoai5iYWNrZ3JvdW5kSW1hZ2UsXCJncmFkaWVudFwiKX0scy5jc3NyZWZsZWN0aW9ucz1mdW5jdGlvbigpe3JldHVybiBKKFwiYm94UmVmbGVjdFwiKX0scy5jc3N0cmFuc2Zvcm1zPWZ1bmN0aW9uKCl7cmV0dXJuISFKKFwidHJhbnNmb3JtXCIpfSxzLmNzc3RyYW5zZm9ybXMzZD1mdW5jdGlvbigpe3ZhciBhPSEhSihcInBlcnNwZWN0aXZlXCIpO3JldHVybiBhJiZcIndlYmtpdFBlcnNwZWN0aXZlXCJpbiBnLnN0eWxlJiZ5KFwiQG1lZGlhICh0cmFuc2Zvcm0tM2QpLCgtd2Via2l0LXRyYW5zZm9ybS0zZCl7I21vZGVybml6cntsZWZ0OjlweDtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6M3B4O319XCIsZnVuY3Rpb24oYixjKXthPWIub2Zmc2V0TGVmdD09PTkmJmIub2Zmc2V0SGVpZ2h0PT09M30pLGF9LHMuY3NzdHJhbnNpdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSihcInRyYW5zaXRpb25cIil9LHMuZm9udGZhY2U9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4geSgnQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6XCJmb250XCI7c3JjOnVybChcImh0dHBzOi8vXCIpfScsZnVuY3Rpb24oYyxkKXt2YXIgZT1iLmdldEVsZW1lbnRCeUlkKFwic21vZGVybml6clwiKSxmPWUuc2hlZXR8fGUuc3R5bGVTaGVldCxnPWY/Zi5jc3NSdWxlcyYmZi5jc3NSdWxlc1swXT9mLmNzc1J1bGVzWzBdLmNzc1RleHQ6Zi5jc3NUZXh0fHxcIlwiOlwiXCI7YT0vc3JjL2kudGVzdChnKSYmZy5pbmRleE9mKGQuc3BsaXQoXCIgXCIpWzBdKT09PTB9KSxhfSxzLmdlbmVyYXRlZGNvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4geShbXCIjXCIsaCxcIntmb250OjAvMCBhfSNcIixoLCc6YWZ0ZXJ7Y29udGVudDpcIicsbCwnXCI7dmlzaWJpbGl0eTpoaWRkZW47Zm9udDozcHgvMSBhfSddLmpvaW4oXCJcIiksZnVuY3Rpb24oYil7YT1iLm9mZnNldEhlaWdodD49M30pLGF9LHMudmlkZW89ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKSxjPSExO3RyeXtpZihjPSEhYS5jYW5QbGF5VHlwZSljPW5ldyBCb29sZWFuKGMpLGMub2dnPWEuY2FuUGxheVR5cGUoJ3ZpZGVvL29nZzsgY29kZWNzPVwidGhlb3JhXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLmgyNjQ9YS5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykucmVwbGFjZSgvXm5vJC8sXCJcIiksYy53ZWJtPWEuY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKX1jYXRjaChkKXt9cmV0dXJuIGN9LHMuYXVkaW89ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSxjPSExO3RyeXtpZihjPSEhYS5jYW5QbGF5VHlwZSljPW5ldyBCb29sZWFuKGMpLGMub2dnPWEuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLm1wMz1hLmNhblBsYXlUeXBlKFwiYXVkaW8vbXBlZztcIikucmVwbGFjZSgvXm5vJC8sXCJcIiksYy53YXY9YS5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLyxcIlwiKSxjLm00YT0oYS5jYW5QbGF5VHlwZShcImF1ZGlvL3gtbTRhO1wiKXx8YS5jYW5QbGF5VHlwZShcImF1ZGlvL2FhYztcIikpLnJlcGxhY2UoL15ubyQvLFwiXCIpfWNhdGNoKGQpe31yZXR1cm4gY30scy5sb2NhbHN0b3JhZ2U9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGgsaCksbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaCksITB9Y2F0Y2goYSl7cmV0dXJuITF9fSxzLnNlc3Npb25zdG9yYWdlPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGgsaCksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShoKSwhMH1jYXRjaChhKXtyZXR1cm4hMX19LHMud2Vid29ya2Vycz1mdW5jdGlvbigpe3JldHVybiEhYS5Xb3JrZXJ9LHMuYXBwbGljYXRpb25jYWNoZT1mdW5jdGlvbigpe3JldHVybiEhYS5hcHBsaWNhdGlvbkNhY2hlfSxzLnN2Zz1mdW5jdGlvbigpe3JldHVybiEhYi5jcmVhdGVFbGVtZW50TlMmJiEhYi5jcmVhdGVFbGVtZW50TlMoci5zdmcsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdH0scy5pbmxpbmVzdmc9ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPHN2Zy8+XCIsKGEuZmlyc3RDaGlsZCYmYS5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSk9PXIuc3ZnfSxzLnNtaWw9ZnVuY3Rpb24oKXtyZXR1cm4hIWIuY3JlYXRlRWxlbWVudE5TJiYvU1ZHQW5pbWF0ZS8udGVzdChtLmNhbGwoYi5jcmVhdGVFbGVtZW50TlMoci5zdmcsXCJhbmltYXRlXCIpKSl9LHMuc3ZnY2xpcHBhdGhzPWZ1bmN0aW9uKCl7cmV0dXJuISFiLmNyZWF0ZUVsZW1lbnROUyYmL1NWR0NsaXBQYXRoLy50ZXN0KG0uY2FsbChiLmNyZWF0ZUVsZW1lbnROUyhyLnN2ZyxcImNsaXBQYXRoXCIpKSl9O2Zvcih2YXIgTCBpbiBzKUMocyxMKSYmKHg9TC50b0xvd2VyQ2FzZSgpLGVbeF09c1tMXSgpLHYucHVzaCgoZVt4XT9cIlwiOlwibm8tXCIpK3gpKTtyZXR1cm4gZS5pbnB1dHx8SygpLGUuYWRkVGVzdD1mdW5jdGlvbihhLGIpe2lmKHR5cGVvZiBhPT1cIm9iamVjdFwiKWZvcih2YXIgZCBpbiBhKUMoYSxkKSYmZS5hZGRUZXN0KGQsYVtkXSk7ZWxzZXthPWEudG9Mb3dlckNhc2UoKTtpZihlW2FdIT09YylyZXR1cm4gZTtiPXR5cGVvZiBiPT1cImZ1bmN0aW9uXCI/YigpOmIsdHlwZW9mIGYhPVwidW5kZWZpbmVkXCImJmYmJihnLmNsYXNzTmFtZSs9XCIgXCIrKGI/XCJcIjpcIm5vLVwiKSthKSxlW2FdPWJ9cmV0dXJuIGV9LEQoXCJcIiksaT1rPW51bGwsZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBsKGEsYil7dmFyIGM9YS5jcmVhdGVFbGVtZW50KFwicFwiKSxkPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxhLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYy5pbm5lckhUTUw9XCJ4PHN0eWxlPlwiK2IrXCI8L3N0eWxlPlwiLGQuaW5zZXJ0QmVmb3JlKGMubGFzdENoaWxkLGQuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gbSgpe3ZhciBhPXMuZWxlbWVudHM7cmV0dXJuIHR5cGVvZiBhPT1cInN0cmluZ1wiP2Euc3BsaXQoXCIgXCIpOmF9ZnVuY3Rpb24gbihhKXt2YXIgYj1qW2FbaF1dO3JldHVybiBifHwoYj17fSxpKyssYVtoXT1pLGpbaV09YiksYn1mdW5jdGlvbiBvKGEsYyxkKXtjfHwoYz1iKTtpZihrKXJldHVybiBjLmNyZWF0ZUVsZW1lbnQoYSk7ZHx8KGQ9bihjKSk7dmFyIGc7cmV0dXJuIGQuY2FjaGVbYV0/Zz1kLmNhY2hlW2FdLmNsb25lTm9kZSgpOmYudGVzdChhKT9nPShkLmNhY2hlW2FdPWQuY3JlYXRlRWxlbShhKSkuY2xvbmVOb2RlKCk6Zz1kLmNyZWF0ZUVsZW0oYSksZy5jYW5IYXZlQ2hpbGRyZW4mJiFlLnRlc3QoYSkmJiFnLnRhZ1Vybj9kLmZyYWcuYXBwZW5kQ2hpbGQoZyk6Z31mdW5jdGlvbiBwKGEsYyl7YXx8KGE9Yik7aWYoaylyZXR1cm4gYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yz1jfHxuKGEpO3ZhciBkPWMuZnJhZy5jbG9uZU5vZGUoKSxlPTAsZj1tKCksZz1mLmxlbmd0aDtmb3IoO2U8ZztlKyspZC5jcmVhdGVFbGVtZW50KGZbZV0pO3JldHVybiBkfWZ1bmN0aW9uIHEoYSxiKXtiLmNhY2hlfHwoYi5jYWNoZT17fSxiLmNyZWF0ZUVsZW09YS5jcmVhdGVFbGVtZW50LGIuY3JlYXRlRnJhZz1hLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsYi5mcmFnPWIuY3JlYXRlRnJhZygpKSxhLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oYyl7cmV0dXJuIHMuc2hpdk1ldGhvZHM/byhjLGEsYik6Yi5jcmVhdGVFbGVtKGMpfSxhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9RnVuY3Rpb24oXCJoLGZcIixcInJldHVybiBmdW5jdGlvbigpe3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7aC5zaGl2TWV0aG9kcyYmKFwiK20oKS5qb2luKCkucmVwbGFjZSgvW1xcd1xcLV0rL2csZnVuY3Rpb24oYSl7cmV0dXJuIGIuY3JlYXRlRWxlbShhKSxiLmZyYWcuY3JlYXRlRWxlbWVudChhKSwnYyhcIicrYSsnXCIpJ30pK1wiKTtyZXR1cm4gbn1cIikocyxiLmZyYWcpfWZ1bmN0aW9uIHIoYSl7YXx8KGE9Yik7dmFyIGM9bihhKTtyZXR1cm4gcy5zaGl2Q1NTJiYhZyYmIWMuaGFzQ1NTJiYoYy5oYXNDU1M9ISFsKGEsXCJhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9bWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9XCIpKSxrfHxxKGEsYyksYX12YXIgYz1cIjMuNy4wXCIsZD1hLmh0bWw1fHx7fSxlPS9ePHxeKD86YnV0dG9ufG1hcHxzZWxlY3R8dGV4dGFyZWF8b2JqZWN0fGlmcmFtZXxvcHRpb258b3B0Z3JvdXApJC9pLGY9L14oPzphfGJ8Y29kZXxkaXZ8ZmllbGRzZXR8aDF8aDJ8aDN8aDR8aDV8aDZ8aXxsYWJlbHxsaXxvbHxwfHF8c3BhbnxzdHJvbmd8c3R5bGV8dGFibGV8dGJvZHl8dGR8dGh8dHJ8dWwpJC9pLGcsaD1cIl9odG1sNXNoaXZcIixpPTAsaj17fSxrOyhmdW5jdGlvbigpe3RyeXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2EuaW5uZXJIVE1MPVwiPHh5ej48L3h5ej5cIixnPVwiaGlkZGVuXCJpbiBhLGs9YS5jaGlsZE5vZGVzLmxlbmd0aD09MXx8ZnVuY3Rpb24oKXtiLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZhciBhPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0eXBlb2YgYS5jbG9uZU5vZGU9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBhLmNyZWF0ZUVsZW1lbnQ9PVwidW5kZWZpbmVkXCJ9KCl9Y2F0Y2goYyl7Zz0hMCxrPSEwfX0pKCk7dmFyIHM9e2VsZW1lbnRzOmQuZWxlbWVudHN8fFwiYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGRpYWxvZyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYWluIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGVtcGxhdGUgdGltZSB2aWRlb1wiLHZlcnNpb246YyxzaGl2Q1NTOmQuc2hpdkNTUyE9PSExLHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzOmssc2hpdk1ldGhvZHM6ZC5zaGl2TWV0aG9kcyE9PSExLHR5cGU6XCJkZWZhdWx0XCIsc2hpdkRvY3VtZW50OnIsY3JlYXRlRWxlbWVudDpvLGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6cH07YS5odG1sNT1zLHIoYil9KHRoaXMsYiksZS5fdmVyc2lvbj1kLGUuX3ByZWZpeGVzPW4sZS5fZG9tUHJlZml4ZXM9cSxlLl9jc3NvbVByZWZpeGVzPXAsZS5tcT16LGUuaGFzRXZlbnQ9QSxlLnRlc3RQcm9wPWZ1bmN0aW9uKGEpe3JldHVybiBIKFthXSl9LGUudGVzdEFsbFByb3BzPUosZS50ZXN0U3R5bGVzPXksZS5wcmVmaXhlZD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI/SihhLGIsYyk6SihhLFwicGZ4XCIpfSxnLmNsYXNzTmFtZT1nLmNsYXNzTmFtZS5yZXBsYWNlKC8oXnxcXHMpbm8tanMoXFxzfCQpLyxcIiQxJDJcIikrKGY/XCIganMgXCIrdi5qb2luKFwiIFwiKTpcIlwiKSxlfSh0aGlzLHRoaXMuZG9jdW1lbnQpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09by5jYWxsKGEpfWZ1bmN0aW9uIGUoYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9ZnVuY3Rpb24gZigpe31mdW5jdGlvbiBnKGEpe3JldHVybiFhfHxcImxvYWRlZFwiPT1hfHxcImNvbXBsZXRlXCI9PWF8fFwidW5pbml0aWFsaXplZFwiPT1hfWZ1bmN0aW9uIGgoKXt2YXIgYT1wLnNoaWZ0KCk7cT0xLGE/YS50P20oZnVuY3Rpb24oKXsoXCJjXCI9PWEudD9CLmluamVjdENzczpCLmluamVjdEpzKShhLnMsMCxhLmEsYS54LGEuZSwxKX0sMCk6KGEoKSxoKCkpOnE9MH1mdW5jdGlvbiBpKGEsYyxkLGUsZixpLGope2Z1bmN0aW9uIGsoYil7aWYoIW8mJmcobC5yZWFkeVN0YXRlKSYmKHUucj1vPTEsIXEmJmgoKSxsLm9ubG9hZD1sLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGIpKXtcImltZ1wiIT1hJiZtKGZ1bmN0aW9uKCl7dC5yZW1vdmVDaGlsZChsKX0sNTApO2Zvcih2YXIgZCBpbiB5W2NdKXlbY10uaGFzT3duUHJvcGVydHkoZCkmJnlbY11bZF0ub25sb2FkKCl9fXZhciBqPWp8fEIuZXJyb3JUaW1lb3V0LGw9Yi5jcmVhdGVFbGVtZW50KGEpLG89MCxyPTAsdT17dDpkLHM6YyxlOmYsYTppLHg6an07MT09PXlbY10mJihyPTEseVtjXT1bXSksXCJvYmplY3RcIj09YT9sLmRhdGE9YzoobC5zcmM9YyxsLnR5cGU9YSksbC53aWR0aD1sLmhlaWdodD1cIjBcIixsLm9uZXJyb3I9bC5vbmxvYWQ9bC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtrLmNhbGwodGhpcyxyKX0scC5zcGxpY2UoZSwwLHUpLFwiaW1nXCIhPWEmJihyfHwyPT09eVtjXT8odC5pbnNlcnRCZWZvcmUobCxzP251bGw6biksbShrLGopKTp5W2NdLnB1c2gobCkpfWZ1bmN0aW9uIGooYSxiLGMsZCxmKXtyZXR1cm4gcT0wLGI9Ynx8XCJqXCIsZShhKT9pKFwiY1wiPT1iP3Y6dSxhLGIsdGhpcy5pKyssYyxkLGYpOihwLnNwbGljZSh0aGlzLmkrKywwLGEpLDE9PXAubGVuZ3RoJiZoKCkpLHRoaXN9ZnVuY3Rpb24gaygpe3ZhciBhPUI7cmV0dXJuIGEubG9hZGVyPXtsb2FkOmosaTowfSxhfXZhciBsPWIuZG9jdW1lbnRFbGVtZW50LG09YS5zZXRUaW1lb3V0LG49Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxvPXt9LnRvU3RyaW5nLHA9W10scT0wLHI9XCJNb3pBcHBlYXJhbmNlXCJpbiBsLnN0eWxlLHM9ciYmISFiLmNyZWF0ZVJhbmdlKCkuY29tcGFyZU5vZGUsdD1zP2w6bi5wYXJlbnROb2RlLGw9YS5vcGVyYSYmXCJbb2JqZWN0IE9wZXJhXVwiPT1vLmNhbGwoYS5vcGVyYSksbD0hIWIuYXR0YWNoRXZlbnQmJiFsLHU9cj9cIm9iamVjdFwiOmw/XCJzY3JpcHRcIjpcImltZ1wiLHY9bD9cInNjcmlwdFwiOnUsdz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PW8uY2FsbChhKX0seD1bXSx5PXt9LHo9e3RpbWVvdXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5sZW5ndGgmJihhLnRpbWVvdXQ9YlswXSksYX19LEEsQjtCPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGE9YS5zcGxpdChcIiFcIiksYj14Lmxlbmd0aCxjPWEucG9wKCksZD1hLmxlbmd0aCxjPXt1cmw6YyxvcmlnVXJsOmMscHJlZml4ZXM6YX0sZSxmLGc7Zm9yKGY9MDtmPGQ7ZisrKWc9YVtmXS5zcGxpdChcIj1cIiksKGU9eltnLnNoaWZ0KCldKSYmKGM9ZShjLGcpKTtmb3IoZj0wO2Y8YjtmKyspYz14W2ZdKGMpO3JldHVybiBjfWZ1bmN0aW9uIGcoYSxlLGYsZyxoKXt2YXIgaT1iKGEpLGo9aS5hdXRvQ2FsbGJhY2s7aS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpLGkuYnlwYXNzfHwoZSYmKGU9ZChlKT9lOmVbYV18fGVbZ118fGVbYS5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdXSksaS5pbnN0ZWFkP2kuaW5zdGVhZChhLGUsZixnLGgpOih5W2kudXJsXT9pLm5vZXhlYz0hMDp5W2kudXJsXT0xLGYubG9hZChpLnVybCxpLmZvcmNlQ1NTfHwhaS5mb3JjZUpTJiZcImNzc1wiPT1pLnVybC5zcGxpdChcIi5cIikucG9wKCkuc3BsaXQoXCI/XCIpLnNoaWZ0KCk/XCJjXCI6YyxpLm5vZXhlYyxpLmF0dHJzLGkudGltZW91dCksKGQoZSl8fGQoaikpJiZmLmxvYWQoZnVuY3Rpb24oKXtrKCksZSYmZShpLm9yaWdVcmwsaCxnKSxqJiZqKGkub3JpZ1VybCxoLGcpLHlbaS51cmxdPTJ9KSkpfWZ1bmN0aW9uIGgoYSxiKXtmdW5jdGlvbiBjKGEsYyl7aWYoYSl7aWYoZShhKSljfHwoaj1mdW5jdGlvbigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtrLmFwcGx5KHRoaXMsYSksbCgpfSksZyhhLGosYiwwLGgpO2Vsc2UgaWYoT2JqZWN0KGEpPT09YSlmb3IobiBpbiBtPWZ1bmN0aW9uKCl7dmFyIGI9MCxjO2ZvcihjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmYisrO3JldHVybiBifSgpLGEpYS5oYXNPd25Qcm9wZXJ0eShuKSYmKCFjJiYhLS1tJiYoZChqKT9qPWZ1bmN0aW9uKCl7dmFyIGE9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2suYXBwbHkodGhpcyxhKSxsKCl9Ompbbl09ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2EmJmEuYXBwbHkodGhpcyxiKSxsKCl9fShrW25dKSksZyhhW25dLGosYixuLGgpKX1lbHNlIWMmJmwoKX12YXIgaD0hIWEudGVzdCxpPWEubG9hZHx8YS5ib3RoLGo9YS5jYWxsYmFja3x8ZixrPWosbD1hLmNvbXBsZXRlfHxmLG0sbjtjKGg/YS55ZXA6YS5ub3BlLCEhaSksaSYmYyhpKX12YXIgaSxqLGw9dGhpcy55ZXBub3BlLmxvYWRlcjtpZihlKGEpKWcoYSwwLGwsMCk7ZWxzZSBpZih3KGEpKWZvcihpPTA7aTxhLmxlbmd0aDtpKyspaj1hW2ldLGUoaik/ZyhqLDAsbCwwKTp3KGopP0Ioaik6T2JqZWN0KGopPT09aiYmaChqLGwpO2Vsc2UgT2JqZWN0KGEpPT09YSYmaChhLGwpfSxCLmFkZFByZWZpeD1mdW5jdGlvbihhLGIpe3pbYV09Yn0sQi5hZGRGaWx0ZXI9ZnVuY3Rpb24oYSl7eC5wdXNoKGEpfSxCLmVycm9yVGltZW91dD0xZTQsbnVsbD09Yi5yZWFkeVN0YXRlJiZiLmFkZEV2ZW50TGlzdGVuZXImJihiLnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIsYi5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEE9ZnVuY3Rpb24oKXtiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQSwwKSxiLnJlYWR5U3RhdGU9XCJjb21wbGV0ZVwifSwwKSksYS55ZXBub3BlPWsoKSxhLnllcG5vcGUuZXhlY3V0ZVN0YWNrPWgsYS55ZXBub3BlLmluamVjdEpzPWZ1bmN0aW9uKGEsYyxkLGUsaSxqKXt2YXIgaz1iLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksbCxvLGU9ZXx8Qi5lcnJvclRpbWVvdXQ7ay5zcmM9YTtmb3IobyBpbiBkKWsuc2V0QXR0cmlidXRlKG8sZFtvXSk7Yz1qP2g6Y3x8ZixrLm9ucmVhZHlzdGF0ZWNoYW5nZT1rLm9ubG9hZD1mdW5jdGlvbigpeyFsJiZnKGsucmVhZHlTdGF0ZSkmJihsPTEsYygpLGsub25sb2FkPWsub25yZWFkeXN0YXRlY2hhbmdlPW51bGwpfSxtKGZ1bmN0aW9uKCl7bHx8KGw9MSxjKDEpKX0sZSksaT9rLm9ubG9hZCgpOm4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoayxuKX0sYS55ZXBub3BlLmluamVjdENzcz1mdW5jdGlvbihhLGMsZCxlLGcsaSl7dmFyIGU9Yi5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxqLGM9aT9oOmN8fGY7ZS5ocmVmPWEsZS5yZWw9XCJzdHlsZXNoZWV0XCIsZS50eXBlPVwidGV4dC9jc3NcIjtmb3IoaiBpbiBkKWUuc2V0QXR0cmlidXRlKGosZFtqXSk7Z3x8KG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSxuKSxtKGMsMCkpfX0odGhpcyxkb2N1bWVudCksTW9kZXJuaXpyLmxvYWQ9ZnVuY3Rpb24oKXt5ZXBub3BlLmFwcGx5KHdpbmRvdyxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSl9O1xyXG4iLCIvKiEgUmVzcG9uZC5qcyB2MS40LjI6IG1pbi9tYXgtd2lkdGggbWVkaWEgcXVlcnkgcG9seWZpbGxcclxuICogQ29weXJpZ2h0IDIwMTQgU2NvdHQgSmVobFxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcclxuICogaHR0cDovL2oubXAvcmVzcG9uZGpzICovXHJcblxyXG4vKiEgbWF0Y2hNZWRpYSgpIHBvbHlmaWxsIC0gVGVzdCBhIENTUyBtZWRpYSB0eXBlL3F1ZXJ5IGluIEpTLiBBdXRob3JzICYgY29weXJpZ2h0IChjKSAyMDEyOiBTY290dCBKZWhsLCBQYXVsIElyaXNoLCBOaWNob2xhcyBaYWthcy4gRHVhbCBNSVQvQlNEIGxpY2Vuc2UgKi9cclxuLyohIE5PVEU6IElmIHlvdSdyZSBhbHJlYWR5IGluY2x1ZGluZyBhIHdpbmRvdy5tYXRjaE1lZGlhIHBvbHlmaWxsIHZpYSBNb2Rlcm5penIgb3Igb3RoZXJ3aXNlLCB5b3UgZG9uJ3QgbmVlZCB0aGlzIHBhcnQgKi9cclxuKGZ1bmN0aW9uKHcpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuICB3Lm1hdGNoTWVkaWEgPSB3Lm1hdGNoTWVkaWEgfHwgZnVuY3Rpb24oZG9jLCB1bmRlZmluZWQpIHtcclxuICAgIHZhciBib29sLCBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudCwgcmVmTm9kZSA9IGRvY0VsZW0uZmlyc3RFbGVtZW50Q2hpbGQgfHwgZG9jRWxlbS5maXJzdENoaWxkLCBmYWtlQm9keSA9IGRvYy5jcmVhdGVFbGVtZW50KFwiYm9keVwiKSwgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuaWQgPSBcIm1xLXRlc3QtMVwiO1xyXG4gICAgZGl2LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3RvcDotMTAwZW1cIjtcclxuICAgIGZha2VCb2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcclxuICAgIGZha2VCb2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24ocSkge1xyXG4gICAgICBkaXYuaW5uZXJIVE1MID0gJyZzaHk7PHN0eWxlIG1lZGlhPVwiJyArIHEgKyAnXCI+ICNtcS10ZXN0LTEgeyB3aWR0aDogNDJweDsgfTwvc3R5bGU+JztcclxuICAgICAgZG9jRWxlbS5pbnNlcnRCZWZvcmUoZmFrZUJvZHksIHJlZk5vZGUpO1xyXG4gICAgICBib29sID0gZGl2Lm9mZnNldFdpZHRoID09PSA0MjtcclxuICAgICAgZG9jRWxlbS5yZW1vdmVDaGlsZChmYWtlQm9keSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF0Y2hlczogYm9vbCxcclxuICAgICAgICBtZWRpYTogcVxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9KHcuZG9jdW1lbnQpO1xyXG59KSh0aGlzKTtcclxuXHJcbihmdW5jdGlvbih3KSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgdmFyIHJlc3BvbmQgPSB7fTtcclxuICB3LnJlc3BvbmQgPSByZXNwb25kO1xyXG4gIHJlc3BvbmQudXBkYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuICB2YXIgcmVxdWVzdFF1ZXVlID0gW10sIHhtbEh0dHAgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciB4bWxodHRwbWV0aG9kID0gZmFsc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICB4bWxodHRwbWV0aG9kID0gbmV3IHcuWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgeG1saHR0cG1ldGhvZCA9IG5ldyB3LkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHhtbGh0dHBtZXRob2Q7XHJcbiAgICB9O1xyXG4gIH0oKSwgYWpheCA9IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2spIHtcclxuICAgIHZhciByZXEgPSB4bWxIdHRwKCk7XHJcbiAgICBpZiAoIXJlcSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXEub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAocmVxLnJlYWR5U3RhdGUgIT09IDQgfHwgcmVxLnN0YXR1cyAhPT0gMjAwICYmIHJlcS5zdGF0dXMgIT09IDMwNCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjYWxsYmFjayhyZXEucmVzcG9uc2VUZXh0KTtcclxuICAgIH07XHJcbiAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmVxLnNlbmQobnVsbCk7XHJcbiAgfSwgaXNVbnN1cHBvcnRlZE1lZGlhUXVlcnkgPSBmdW5jdGlvbihxdWVyeSkge1xyXG4gICAgcmV0dXJuIHF1ZXJ5LnJlcGxhY2UocmVzcG9uZC5yZWdleC5taW5tYXh3aCwgXCJcIikubWF0Y2gocmVzcG9uZC5yZWdleC5vdGhlcik7XHJcbiAgfTtcclxuICByZXNwb25kLmFqYXggPSBhamF4O1xyXG4gIHJlc3BvbmQucXVldWUgPSByZXF1ZXN0UXVldWU7XHJcbiAgcmVzcG9uZC51bnN1cHBvcnRlZG1xID0gaXNVbnN1cHBvcnRlZE1lZGlhUXVlcnk7XHJcbiAgcmVzcG9uZC5yZWdleCA9IHtcclxuICAgIG1lZGlhOiAvQG1lZGlhW15cXHtdK1xceyhbXlxce1xcfV0qXFx7W15cXH1cXHtdKlxcfSkrL2dpLFxyXG4gICAga2V5ZnJhbWVzOiAvQCg/OlxcLSg/Om98bW96fHdlYmtpdClcXC0pP2tleWZyYW1lc1teXFx7XStcXHsoPzpbXlxce1xcfV0qXFx7W15cXH1cXHtdKlxcfSkrW15cXH1dKlxcfS9naSxcclxuICAgIGNvbW1lbnRzOiAvXFwvXFwqW14qXSpcXCorKFteL11bXipdKlxcKispKlxcLy9naSxcclxuICAgIHVybHM6IC8odXJsXFwoKVsnXCJdPyhbXlxcL1xcKSdcIl1bXjpcXCknXCJdKylbJ1wiXT8oXFwpKS9nLFxyXG4gICAgZmluZFN0eWxlczogL0BtZWRpYSAqKFteXFx7XSspXFx7KFtcXFNcXHNdKz8pJC8sXHJcbiAgICBvbmx5OiAvKG9ubHlcXHMrKT8oW2EtekEtWl0rKVxccz8vLFxyXG4gICAgbWludzogL1xcKFxccyptaW5cXC13aWR0aFxccyo6XFxzKihcXHMqWzAtOVxcLl0rKShweHxlbSlcXHMqXFwpLyxcclxuICAgIG1heHc6IC9cXChcXHMqbWF4XFwtd2lkdGhcXHMqOlxccyooXFxzKlswLTlcXC5dKykocHh8ZW0pXFxzKlxcKS8sXHJcbiAgICBtaW5tYXh3aDogL1xcKFxccyptKGlufGF4KVxcLShoZWlnaHR8d2lkdGgpXFxzKjpcXHMqKFxccypbMC05XFwuXSspKHB4fGVtKVxccypcXCkvZ2ksXHJcbiAgICBvdGhlcjogL1xcKFteXFwpXSpcXCkvZ1xyXG4gIH07XHJcbiAgcmVzcG9uZC5tZWRpYVF1ZXJpZXNTdXBwb3J0ZWQgPSB3Lm1hdGNoTWVkaWEgJiYgdy5tYXRjaE1lZGlhKFwib25seSBhbGxcIikgIT09IG51bGwgJiYgdy5tYXRjaE1lZGlhKFwib25seSBhbGxcIikubWF0Y2hlcztcclxuICBpZiAocmVzcG9uZC5tZWRpYVF1ZXJpZXNTdXBwb3J0ZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdmFyIGRvYyA9IHcuZG9jdW1lbnQsIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50LCBtZWRpYXN0eWxlcyA9IFtdLCBydWxlcyA9IFtdLCBhcHBlbmRlZEVscyA9IFtdLCBwYXJzZWRTaGVldHMgPSB7fSwgcmVzaXplVGhyb3R0bGUgPSAzMCwgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0gfHwgZG9jRWxlbSwgYmFzZSA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJhc2VcIilbMF0sIGxpbmtzID0gaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIiksIGxhc3RDYWxsLCByZXNpemVEZWZlciwgZW1pbnB4LCBnZXRFbVZhbHVlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmV0LCBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgYm9keSA9IGRvYy5ib2R5LCBvcmlnaW5hbEhUTUxGb250U2l6ZSA9IGRvY0VsZW0uc3R5bGUuZm9udFNpemUsIG9yaWdpbmFsQm9keUZvbnRTaXplID0gYm9keSAmJiBib2R5LnN0eWxlLmZvbnRTaXplLCBmYWtlVXNlZCA9IGZhbHNlO1xyXG4gICAgZGl2LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2ZvbnQtc2l6ZToxZW07d2lkdGg6MWVtXCI7XHJcbiAgICBpZiAoIWJvZHkpIHtcclxuICAgICAgYm9keSA9IGZha2VVc2VkID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIpO1xyXG4gICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIGRvY0VsZW0uc3R5bGUuZm9udFNpemUgPSBcIjEwMCVcIjtcclxuICAgIGJvZHkuc3R5bGUuZm9udFNpemUgPSBcIjEwMCVcIjtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGlmIChmYWtlVXNlZCkge1xyXG4gICAgICBkb2NFbGVtLmluc2VydEJlZm9yZShib2R5LCBkb2NFbGVtLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gZGl2Lm9mZnNldFdpZHRoO1xyXG4gICAgaWYgKGZha2VVc2VkKSB7XHJcbiAgICAgIGRvY0VsZW0ucmVtb3ZlQ2hpbGQoYm9keSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICB9XHJcbiAgICBkb2NFbGVtLnN0eWxlLmZvbnRTaXplID0gb3JpZ2luYWxIVE1MRm9udFNpemU7XHJcbiAgICBpZiAob3JpZ2luYWxCb2R5Rm9udFNpemUpIHtcclxuICAgICAgYm9keS5zdHlsZS5mb250U2l6ZSA9IG9yaWdpbmFsQm9keUZvbnRTaXplO1xyXG4gICAgfVxyXG4gICAgcmV0ID0gZW1pbnB4ID0gcGFyc2VGbG9hdChyZXQpO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9LCBhcHBseU1lZGlhID0gZnVuY3Rpb24oZnJvbVJlc2l6ZSkge1xyXG4gICAgdmFyIG5hbWUgPSBcImNsaWVudFdpZHRoXCIsIGRvY0VsZW1Qcm9wID0gZG9jRWxlbVtuYW1lXSwgY3VycldpZHRoID0gZG9jLmNvbXBhdE1vZGUgPT09IFwiQ1NTMUNvbXBhdFwiICYmIGRvY0VsZW1Qcm9wIHx8IGRvYy5ib2R5W25hbWVdIHx8IGRvY0VsZW1Qcm9wLCBzdHlsZUJsb2NrcyA9IHt9LCBsYXN0TGluayA9IGxpbmtzW2xpbmtzLmxlbmd0aCAtIDFdLCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmIChmcm9tUmVzaXplICYmIGxhc3RDYWxsICYmIG5vdyAtIGxhc3RDYWxsIDwgcmVzaXplVGhyb3R0bGUpIHtcclxuICAgICAgdy5jbGVhclRpbWVvdXQocmVzaXplRGVmZXIpO1xyXG4gICAgICByZXNpemVEZWZlciA9IHcuc2V0VGltZW91dChhcHBseU1lZGlhLCByZXNpemVUaHJvdHRsZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RDYWxsID0gbm93O1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSBpbiBtZWRpYXN0eWxlcykge1xyXG4gICAgICBpZiAobWVkaWFzdHlsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICB2YXIgdGhpc3N0eWxlID0gbWVkaWFzdHlsZXNbaV0sIG1pbiA9IHRoaXNzdHlsZS5taW53LCBtYXggPSB0aGlzc3R5bGUubWF4dywgbWlubnVsbCA9IG1pbiA9PT0gbnVsbCwgbWF4bnVsbCA9IG1heCA9PT0gbnVsbCwgZW0gPSBcImVtXCI7XHJcbiAgICAgICAgaWYgKCEhbWluKSB7XHJcbiAgICAgICAgICBtaW4gPSBwYXJzZUZsb2F0KG1pbikgKiAobWluLmluZGV4T2YoZW0pID4gLTEgPyBlbWlucHggfHwgZ2V0RW1WYWx1ZSgpIDogMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIW1heCkge1xyXG4gICAgICAgICAgbWF4ID0gcGFyc2VGbG9hdChtYXgpICogKG1heC5pbmRleE9mKGVtKSA+IC0xID8gZW1pbnB4IHx8IGdldEVtVmFsdWUoKSA6IDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXNzdHlsZS5oYXNxdWVyeSB8fCAoIW1pbm51bGwgfHwgIW1heG51bGwpICYmIChtaW5udWxsIHx8IGN1cnJXaWR0aCA+PSBtaW4pICYmIChtYXhudWxsIHx8IGN1cnJXaWR0aCA8PSBtYXgpKSB7XHJcbiAgICAgICAgICBpZiAoIXN0eWxlQmxvY2tzW3RoaXNzdHlsZS5tZWRpYV0pIHtcclxuICAgICAgICAgICAgc3R5bGVCbG9ja3NbdGhpc3N0eWxlLm1lZGlhXSA9IFtdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3R5bGVCbG9ja3NbdGhpc3N0eWxlLm1lZGlhXS5wdXNoKHJ1bGVzW3RoaXNzdHlsZS5ydWxlc10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaiBpbiBhcHBlbmRlZEVscykge1xyXG4gICAgICBpZiAoYXBwZW5kZWRFbHMuaGFzT3duUHJvcGVydHkoaikpIHtcclxuICAgICAgICBpZiAoYXBwZW5kZWRFbHNbal0gJiYgYXBwZW5kZWRFbHNbal0ucGFyZW50Tm9kZSA9PT0gaGVhZCkge1xyXG4gICAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChhcHBlbmRlZEVsc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHBlbmRlZEVscy5sZW5ndGggPSAwO1xyXG4gICAgZm9yICh2YXIgayBpbiBzdHlsZUJsb2Nrcykge1xyXG4gICAgICBpZiAoc3R5bGVCbG9ja3MuaGFzT3duUHJvcGVydHkoaykpIHtcclxuICAgICAgICB2YXIgc3MgPSBkb2MuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLCBjc3MgPSBzdHlsZUJsb2Nrc1trXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIHNzLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICAgICAgc3MubWVkaWEgPSBrO1xyXG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNzLCBsYXN0TGluay5uZXh0U2libGluZyk7XHJcbiAgICAgICAgaWYgKHNzLnN0eWxlU2hlZXQpIHtcclxuICAgICAgICAgIHNzLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3MuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcHBlbmRlZEVscy5wdXNoKHNzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIHRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHN0eWxlcywgaHJlZiwgbWVkaWEpIHtcclxuICAgIHZhciBxcyA9IHN0eWxlcy5yZXBsYWNlKHJlc3BvbmQucmVnZXguY29tbWVudHMsIFwiXCIpLnJlcGxhY2UocmVzcG9uZC5yZWdleC5rZXlmcmFtZXMsIFwiXCIpLm1hdGNoKHJlc3BvbmQucmVnZXgubWVkaWEpLCBxbCA9IHFzICYmIHFzLmxlbmd0aCB8fCAwO1xyXG4gICAgaHJlZiA9IGhyZWYuc3Vic3RyaW5nKDAsIGhyZWYubGFzdEluZGV4T2YoXCIvXCIpKTtcclxuICAgIHZhciByZXBVcmxzID0gZnVuY3Rpb24oY3NzKSB7XHJcbiAgICAgIHJldHVybiBjc3MucmVwbGFjZShyZXNwb25kLnJlZ2V4LnVybHMsIFwiJDFcIiArIGhyZWYgKyBcIiQyJDNcIik7XHJcbiAgICB9LCB1c2VNZWRpYSA9ICFxbCAmJiBtZWRpYTtcclxuICAgIGlmIChocmVmLmxlbmd0aCkge1xyXG4gICAgICBocmVmICs9IFwiL1wiO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZU1lZGlhKSB7XHJcbiAgICAgIHFsID0gMTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcWw7IGkrKykge1xyXG4gICAgICB2YXIgZnVsbHEsIHRoaXNxLCBlYWNocSwgZXFsO1xyXG4gICAgICBpZiAodXNlTWVkaWEpIHtcclxuICAgICAgICBmdWxscSA9IG1lZGlhO1xyXG4gICAgICAgIHJ1bGVzLnB1c2gocmVwVXJscyhzdHlsZXMpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmdWxscSA9IHFzW2ldLm1hdGNoKHJlc3BvbmQucmVnZXguZmluZFN0eWxlcykgJiYgUmVnRXhwLiQxO1xyXG4gICAgICAgIHJ1bGVzLnB1c2goUmVnRXhwLiQyICYmIHJlcFVybHMoUmVnRXhwLiQyKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWFjaHEgPSBmdWxscS5zcGxpdChcIixcIik7XHJcbiAgICAgIGVxbCA9IGVhY2hxLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlcWw7IGorKykge1xyXG4gICAgICAgIHRoaXNxID0gZWFjaHFbal07XHJcbiAgICAgICAgaWYgKGlzVW5zdXBwb3J0ZWRNZWRpYVF1ZXJ5KHRoaXNxKSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lZGlhc3R5bGVzLnB1c2goe1xyXG4gICAgICAgICAgbWVkaWE6IHRoaXNxLnNwbGl0KFwiKFwiKVswXS5tYXRjaChyZXNwb25kLnJlZ2V4Lm9ubHkpICYmIFJlZ0V4cC4kMiB8fCBcImFsbFwiLFxyXG4gICAgICAgICAgcnVsZXM6IHJ1bGVzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICBoYXNxdWVyeTogdGhpc3EuaW5kZXhPZihcIihcIikgPiAtMSxcclxuICAgICAgICAgIG1pbnc6IHRoaXNxLm1hdGNoKHJlc3BvbmQucmVnZXgubWludykgJiYgcGFyc2VGbG9hdChSZWdFeHAuJDEpICsgKFJlZ0V4cC4kMiB8fCBcIlwiKSxcclxuICAgICAgICAgIG1heHc6IHRoaXNxLm1hdGNoKHJlc3BvbmQucmVnZXgubWF4dykgJiYgcGFyc2VGbG9hdChSZWdFeHAuJDEpICsgKFJlZ0V4cC4kMiB8fCBcIlwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHBseU1lZGlhKCk7XHJcbiAgfSwgbWFrZVJlcXVlc3RzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAocmVxdWVzdFF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICB2YXIgdGhpc1JlcXVlc3QgPSByZXF1ZXN0UXVldWUuc2hpZnQoKTtcclxuICAgICAgYWpheCh0aGlzUmVxdWVzdC5ocmVmLCBmdW5jdGlvbihzdHlsZXMpIHtcclxuICAgICAgICB0cmFuc2xhdGUoc3R5bGVzLCB0aGlzUmVxdWVzdC5ocmVmLCB0aGlzUmVxdWVzdC5tZWRpYSk7XHJcbiAgICAgICAgcGFyc2VkU2hlZXRzW3RoaXNSZXF1ZXN0LmhyZWZdID0gdHJ1ZTtcclxuICAgICAgICB3LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBtYWtlUmVxdWVzdHMoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgcmlwQ1NTID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBzaGVldCA9IGxpbmtzW2ldLCBocmVmID0gc2hlZXQuaHJlZiwgbWVkaWEgPSBzaGVldC5tZWRpYSwgaXNDU1MgPSBzaGVldC5yZWwgJiYgc2hlZXQucmVsLnRvTG93ZXJDYXNlKCkgPT09IFwic3R5bGVzaGVldFwiO1xyXG4gICAgICBpZiAoISFocmVmICYmIGlzQ1NTICYmICFwYXJzZWRTaGVldHNbaHJlZl0pIHtcclxuICAgICAgICBpZiAoc2hlZXQuc3R5bGVTaGVldCAmJiBzaGVldC5zdHlsZVNoZWV0LnJhd0Nzc1RleHQpIHtcclxuICAgICAgICAgIHRyYW5zbGF0ZShzaGVldC5zdHlsZVNoZWV0LnJhd0Nzc1RleHQsIGhyZWYsIG1lZGlhKTtcclxuICAgICAgICAgIHBhcnNlZFNoZWV0c1tocmVmXSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghL14oW2EtekEtWjpdKlxcL1xcLykvLnRlc3QoaHJlZikgJiYgIWJhc2UgfHwgaHJlZi5yZXBsYWNlKFJlZ0V4cC4kMSwgXCJcIikuc3BsaXQoXCIvXCIpWzBdID09PSB3LmxvY2F0aW9uLmhvc3QpIHtcclxuICAgICAgICAgICAgaWYgKGhyZWYuc3Vic3RyaW5nKDAsIDIpID09PSBcIi8vXCIpIHtcclxuICAgICAgICAgICAgICBocmVmID0gdy5sb2NhdGlvbi5wcm90b2NvbCArIGhyZWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdFF1ZXVlLnB1c2goe1xyXG4gICAgICAgICAgICAgIGhyZWY6IGhyZWYsXHJcbiAgICAgICAgICAgICAgbWVkaWE6IG1lZGlhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFrZVJlcXVlc3RzKCk7XHJcbiAgfTtcclxuICByaXBDU1MoKTtcclxuICByZXNwb25kLnVwZGF0ZSA9IHJpcENTUztcclxuICByZXNwb25kLmdldEVtVmFsdWUgPSBnZXRFbVZhbHVlO1xyXG4gIGZ1bmN0aW9uIGNhbGxNZWRpYSgpIHtcclxuICAgIGFwcGx5TWVkaWEodHJ1ZSk7XHJcbiAgfVxyXG4gIGlmICh3LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgIHcuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjYWxsTWVkaWEsIGZhbHNlKTtcclxuICB9IGVsc2UgaWYgKHcuYXR0YWNoRXZlbnQpIHtcclxuICAgIHcuYXR0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLCBjYWxsTWVkaWEpO1xyXG4gIH1cclxufSkodGhpcyk7IiwiLypcclxuc2VsZWN0aXZpenIgdjEuMC4yIC0gKGMpIEtlaXRoIENsYXJrLCBmcmVlbHkgZGlzdHJpYnV0YWJsZSB1bmRlciB0aGUgdGVybXMgXHJcbm9mIHRoZSBNSVQgbGljZW5zZS5cclxuXHJcbnNlbGVjdGl2aXpyLmNvbVxyXG4qL1xyXG4vKiBcclxuICBcclxuTm90ZXMgYWJvdXQgdGhpcyBzb3VyY2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAqIFRoZSAjREVCVUdfU1RBUlQgYW5kICNERUJVR19FTkQgY29tbWVudHMgYXJlIHVzZWQgdG8gbWFyayBibG9ja3Mgb2YgY29kZVxyXG4gICB0aGF0IHdpbGwgYmUgcmVtb3ZlZCBwcmlvciB0byBidWlsZGluZyBhIGZpbmFsIHJlbGVhc2UgdmVyc2lvbiAodXNpbmcgYVxyXG4gICBwcmUtY29tcHJlc3Npb24gc2NyaXB0KVxyXG4gIFxyXG4gIFxyXG5SZWZlcmVuY2VzOlxyXG4tLS0tLS0tLS0tLVxyXG4gXHJcbiAqIENTUyBTeW50YXggICAgICAgICAgOiBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELWNzczMtc3ludGF4LTIwMDMwODEzLyNzdHlsZVxyXG4gKiBTZWxlY3RvcnMgICAgICAgICAgIDogaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3NlbGVjdG9yc1xyXG4gKiBJRSBDb21wYXRhYmlsaXR5ICAgIDogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2NjMzUxMDI0KFZTLjg1KS5hc3B4XHJcbiAqIFczQyBTZWxlY3RvciBUZXN0cyAgOiBodHRwOi8vd3d3LnczLm9yZy9TdHlsZS9DU1MvVGVzdC9DU1MzL1NlbGVjdG9ycy9jdXJyZW50L2h0bWwvdGVzdHMvXHJcbiBcclxuKi9cclxuXHJcbihmdW5jdGlvbih3aW4pIHtcclxuXHJcblx0Ly8gSWYgYnJvd3NlciBpc24ndCBJRSwgdGhlbiBzdG9wIGV4ZWN1dGlvbiEgVGhpcyBoYW5kbGVzIHRoZSBzY3JpcHQgXHJcblx0Ly8gYmVpbmcgbG9hZGVkIGJ5IG5vbiBJRSBicm93c2VycyBiZWNhdXNlIHRoZSBkZXZlbG9wZXIgZGlkbid0IHVzZSBcclxuXHQvLyBjb25kaXRpb25hbCBjb21tZW50cy5cclxuXHRpZiAoLypAY2Nfb24hQCovdHJ1ZSkgcmV0dXJuO1xyXG5cclxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gSW5pdCBPYmplY3RzID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblx0dmFyIGRvYyA9IGRvY3VtZW50O1xyXG5cdHZhciByb290ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHR2YXIgeGhyID0gZ2V0WEhST2JqZWN0KCk7XHJcblx0dmFyIGllVmVyc2lvbiA9IC9NU0lFIChcXGQrKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KVsxXTtcclxuXHRcclxuXHQvLyBJZiB3ZXJlIG5vdCBpbiBzdGFuZGFyZHMgbW9kZSwgSUUgaXMgdG9vIG9sZCAvIG5ldyBvciB3ZSBjYW4ndCBjcmVhdGVcclxuXHQvLyBhbiBYTUxIdHRwUmVxdWVzdCBvYmplY3QgdGhlbiB3ZSBzaG91bGQgZ2V0IG91dCBub3cuXHJcblx0aWYgKGRvYy5jb21wYXRNb2RlICE9ICdDU1MxQ29tcGF0JyB8fCBpZVZlcnNpb248NiB8fCBpZVZlcnNpb24+OCB8fCAheGhyKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gQ29tbW9uIE9iamVjdHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHQvLyBDb21wYXRpYWJsZSBzZWxlY3RvciBlbmdpbmVzIGluIG9yZGVyIG9mIENTUzMgc3VwcG9ydC4gTm90ZTogJyonIGlzXHJcblx0Ly8gYSBwbGFjaG9sZGVyIGZvciB0aGUgb2JqZWN0IGtleSBuYW1lLiAoYmFzaWNhbGx5LCBjcnVkZSBjb21wcmVzc2lvbilcclxuXHR2YXIgc2VsZWN0b3JFbmdpbmVzID0ge1xyXG5cdFx0XCJOV1wiXHRcdFx0XHRcdFx0XHRcdDogXCIqLkRvbS5zZWxlY3RcIixcclxuXHRcdFwiTW9vVG9vbHNcIlx0XHRcdFx0XHRcdFx0OiBcIiQkXCIsXHJcblx0XHRcIkRPTUFzc2lzdGFudFwiXHRcdFx0XHRcdFx0OiBcIiouJFwiLCBcclxuXHRcdFwiUHJvdG90eXBlXCJcdFx0XHRcdFx0XHRcdDogXCIkJFwiLFxyXG5cdFx0XCJZQUhPT1wiXHRcdFx0XHRcdFx0XHRcdDogXCIqLnV0aWwuU2VsZWN0b3IucXVlcnlcIixcclxuXHRcdFwiU2l6emxlXCJcdFx0XHRcdFx0XHRcdDogXCIqXCIsIFxyXG5cdFx0XCJqUXVlcnlcIlx0XHRcdFx0XHRcdFx0OiBcIipcIixcclxuXHRcdFwiZG9qb1wiXHRcdFx0XHRcdFx0XHRcdDogXCIqLnF1ZXJ5XCJcclxuXHR9O1xyXG5cclxuXHR2YXIgc2VsZWN0b3JNZXRob2Q7XHJcblx0dmFyIGVuYWJsZWRXYXRjaGVycyBcdFx0XHRcdFx0PSBbXTsgICAgIC8vIGFycmF5IG9mIDplbmFibGVkLzpkaXNhYmxlZCBlbGVtZW50cyB0byBwb2xsXHJcblx0dmFyIGllNlBhdGNoSUQgXHRcdFx0XHRcdFx0XHQ9IDA7ICAgICAgLy8gdXNlZCB0byBzb2x2ZSBpZTYncyBtdWx0aXBsZSBjbGFzcyBidWdcclxuXHR2YXIgcGF0Y2hJRTZNdWx0aXBsZUNsYXNzZXNcdFx0XHRcdD0gdHJ1ZTsgICAvLyBpZiB0cnVlIGFkZHMgY2xhc3MgYmxvYXQgdG8gaWU2XHJcblx0dmFyIG5hbWVzcGFjZSBcdFx0XHRcdFx0XHRcdD0gXCJzbHZ6clwiO1xyXG5cdFxyXG5cdC8vIFN0eWxlc2hlZXQgcGFyc2luZyByZWdleHAnc1xyXG5cdHZhciBSRV9DT01NRU5UXHRcdFx0XHRcdFx0XHQ9IC8oXFwvXFwqW14qXSpcXCorKFteXFwvXVteKl0qXFwqKykqXFwvKVxccyovZztcclxuXHR2YXIgUkVfSU1QT1JUXHRcdFx0XHRcdFx0XHQ9IC9AaW1wb3J0XFxzKig/Oig/Oig/OnVybFxcKFxccyooWydcIl0/KSguKilcXDEpXFxzKlxcKSl8KD86KFsnXCJdKSguKilcXDMpKVteO10qOy9nO1xyXG5cdHZhciBSRV9BU1NFVF9VUkwgXHRcdFx0XHRcdFx0PSAvXFxidXJsXFwoXFxzKihbXCInXT8pKD8hZGF0YTopKFteXCInKV0rKVxcMVxccypcXCkvZztcclxuXHR2YXIgUkVfUFNFVURPX1NUUlVDVFVSQUxcdFx0XHRcdD0gL146KGVtcHR5fChmaXJzdHxsYXN0fG9ubHl8bnRoKC1sYXN0KT8pLShjaGlsZHxvZi10eXBlKSkkLztcclxuXHR2YXIgUkVfUFNFVURPX0VMRU1FTlRTXHRcdFx0XHRcdD0gLzooOmZpcnN0LSg/OmxpbmV8bGV0dGVyKSkvZztcclxuXHR2YXIgUkVfU0VMRUNUT1JfR1JPVVBcdFx0XHRcdFx0PSAvKF58fSlcXHMqKFteXFx7XSo/W1xcWzpdW157XSspL2c7XHJcblx0dmFyIFJFX1NFTEVDVE9SX1BBUlNFXHRcdFx0XHRcdD0gLyhbICt+Pl0pfCg6W2Etei1dKyg/OlxcKC4qP1xcKSspPyl8KFxcWy4qP1xcXSkvZzsgXHJcblx0dmFyIFJFX0xJQlJBUllfSU5DT01QQVRJQkxFX1BTRVVET1NcdFx0PSAvKDpub3RcXCgpPzooaG92ZXJ8ZW5hYmxlZHxkaXNhYmxlZHxmb2N1c3xjaGVja2VkfHRhcmdldHxhY3RpdmV8dmlzaXRlZHxmaXJzdC1saW5lfGZpcnN0LWxldHRlcilcXCk/L2c7XHJcblx0dmFyIFJFX1BBVENIX0NMQVNTX05BTUVfUkVQTEFDRVx0XHRcdD0gL1teXFx3LV0vZztcclxuXHRcclxuXHQvLyBIVE1MIFVJIGVsZW1lbnQgcmVnZXhwJ3NcclxuXHR2YXIgUkVfSU5QVVRfRUxFTUVOVFNcdFx0XHRcdFx0PSAvXihJTlBVVHxTRUxFQ1R8VEVYVEFSRUF8QlVUVE9OKSQvO1xyXG5cdHZhciBSRV9JTlBVVF9DSEVDS0FCTEVfVFlQRVNcdFx0XHQ9IC9eKGNoZWNrYm94fHJhZGlvKSQvO1xyXG5cclxuXHQvLyBCcm9rZW4gYXR0cmlidXRlIHNlbGVjdG9yIGltcGxlbWVudGF0aW9ucyAoSUU3LzggbmF0aXZlIFtePVwiXCJdLCBbJD1cIlwiXSBhbmQgWyo9XCJcIl0pXHJcblx0dmFyIEJST0tFTl9BVFRSX0lNUExFTUVOVEFUSU9OU1x0XHRcdD0gaWVWZXJzaW9uPjYgPyAvW1xcJFxcXipdPShbJ1wiXSlcXDEvIDogbnVsbDtcclxuXHJcblx0Ly8gV2hpdGVzcGFjZSBub3JtYWxpemF0aW9uIHJlZ2V4cCdzXHJcblx0dmFyIFJFX1RJRFlfVFJBSUxJTkdfV0hJVEVTUEFDRVx0XHRcdD0gLyhbKFxcWyt+XSlcXHMrL2c7XHJcblx0dmFyIFJFX1RJRFlfTEVBRElOR19XSElURVNQQUNFXHRcdFx0PSAvXFxzKyhbKVxcXSt+XSkvZztcclxuXHR2YXIgUkVfVElEWV9DT05TRUNVVElWRV9XSElURVNQQUNFXHRcdD0gL1xccysvZztcclxuXHR2YXIgUkVfVElEWV9UUklNX1dISVRFU1BBQ0VcdFx0XHRcdD0gL15cXHMqKCg/OltcXFNcXHNdKlxcUyk/KVxccyokLztcclxuXHRcclxuXHQvLyBTdHJpbmcgY29uc3RhbnRzXHJcblx0dmFyIEVNUFRZX1NUUklOR1x0XHRcdFx0XHRcdD0gXCJcIjtcclxuXHR2YXIgU1BBQ0VfU1RSSU5HXHRcdFx0XHRcdFx0PSBcIiBcIjtcclxuXHR2YXIgUExBQ0VIT0xERVJfU1RSSU5HXHRcdFx0XHRcdD0gXCIkMVwiO1xyXG5cclxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gUGF0Y2hpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblx0Ly8gLS1bIHBhdGNoU3R5bGVTaGVldCgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gU2NhbnMgdGhlIHBhc3NlZCBjc3NUZXh0IGZvciBzZWxlY3RvcnMgdGhhdCByZXF1aXJlIGVtdWxhdGlvbiBhbmRcclxuXHQvLyBjcmVhdGVzIG9uZSBvciBtb3JlIHBhdGNoZXMgZm9yIGVhY2ggbWF0Y2hlZCBzZWxlY3Rvci5cclxuXHRmdW5jdGlvbiBwYXRjaFN0eWxlU2hlZXQoIGNzc1RleHQgKSB7XHJcblx0XHRyZXR1cm4gY3NzVGV4dC5yZXBsYWNlKFJFX1BTRVVET19FTEVNRU5UUywgUExBQ0VIT0xERVJfU1RSSU5HKS5cclxuXHRcdFx0cmVwbGFjZShSRV9TRUxFQ1RPUl9HUk9VUCwgZnVuY3Rpb24obSwgcHJlZml4LCBzZWxlY3RvclRleHQpIHtcdFxyXG4gICAgXHRcdFx0dmFyIHNlbGVjdG9yR3JvdXBzID0gc2VsZWN0b3JUZXh0LnNwbGl0KFwiLFwiKTtcclxuICAgIFx0XHRcdGZvciAodmFyIGMgPSAwLCBjcyA9IHNlbGVjdG9yR3JvdXBzLmxlbmd0aDsgYyA8IGNzOyBjKyspIHtcclxuICAgIFx0XHRcdFx0dmFyIHNlbGVjdG9yID0gbm9ybWFsaXplU2VsZWN0b3JXaGl0ZXNwYWNlKHNlbGVjdG9yR3JvdXBzW2NdKSArIFNQQUNFX1NUUklORztcclxuICAgIFx0XHRcdFx0dmFyIHBhdGNoZXMgPSBbXTtcclxuICAgIFx0XHRcdFx0c2VsZWN0b3JHcm91cHNbY10gPSBzZWxlY3Rvci5yZXBsYWNlKFJFX1NFTEVDVE9SX1BBUlNFLCBcclxuICAgIFx0XHRcdFx0XHRmdW5jdGlvbihtYXRjaCwgY29tYmluYXRvciwgcHNldWRvLCBhdHRyaWJ1dGUsIGluZGV4KSB7XHJcbiAgICBcdFx0XHRcdFx0XHRpZiAoY29tYmluYXRvcikge1xyXG4gICAgXHRcdFx0XHRcdFx0XHRpZiAocGF0Y2hlcy5sZW5ndGg+MCkge1xyXG4gICAgXHRcdFx0XHRcdFx0XHRcdGFwcGx5UGF0Y2hlcyggc2VsZWN0b3Iuc3Vic3RyaW5nKDAsIGluZGV4KSwgcGF0Y2hlcyApO1xyXG4gICAgXHRcdFx0XHRcdFx0XHRcdHBhdGNoZXMgPSBbXTtcclxuICAgIFx0XHRcdFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHRcdFx0XHRyZXR1cm4gY29tYmluYXRvcjtcclxuICAgIFx0XHRcdFx0XHRcdH1cdFx0XHJcbiAgICBcdFx0XHRcdFx0XHRlbHNlIHtcclxuICAgIFx0XHRcdFx0XHRcdFx0dmFyIHBhdGNoID0gKHBzZXVkbykgPyBwYXRjaFBzZXVkb0NsYXNzKCBwc2V1ZG8gKSA6IHBhdGNoQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgIFx0XHRcdFx0XHRcdFx0aWYgKHBhdGNoKSB7XHJcbiAgICBcdFx0XHRcdFx0XHRcdFx0cGF0Y2hlcy5wdXNoKHBhdGNoKTtcclxuICAgIFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCIuXCIgKyBwYXRjaC5jbGFzc05hbWU7XHJcbiAgICBcdFx0XHRcdFx0XHRcdH1cclxuICAgIFx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xyXG4gICAgXHRcdFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHRcdH1cclxuICAgIFx0XHRcdFx0KTtcclxuICAgIFx0XHRcdH1cclxuICAgIFx0XHRcdHJldHVybiBwcmVmaXggKyBzZWxlY3Rvckdyb3Vwcy5qb2luKFwiLFwiKTtcclxuICAgIFx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvLyAtLVsgcGF0Y2hBdHRyaWJ1dGUoKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyByZXR1cm5zIGEgcGF0Y2ggZm9yIGFuIGF0dHJpYnV0ZSBzZWxlY3Rvci5cclxuXHRmdW5jdGlvbiBwYXRjaEF0dHJpYnV0ZSggYXR0ciApIHtcclxuXHRcdHJldHVybiAoIUJST0tFTl9BVFRSX0lNUExFTUVOVEFUSU9OUyB8fCBCUk9LRU5fQVRUUl9JTVBMRU1FTlRBVElPTlMudGVzdChhdHRyKSkgPyBcclxuXHRcdFx0eyBjbGFzc05hbWU6IGNyZWF0ZUNsYXNzTmFtZShhdHRyKSwgYXBwbHlDbGFzczogdHJ1ZSB9IDogbnVsbDtcclxuXHR9O1xyXG5cclxuXHQvLyAtLVsgcGF0Y2hQc2V1ZG9DbGFzcygpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyByZXR1cm5zIGEgcGF0Y2ggZm9yIGEgcHNldWRvLWNsYXNzXHJcblx0ZnVuY3Rpb24gcGF0Y2hQc2V1ZG9DbGFzcyggcHNldWRvICkge1xyXG5cclxuXHRcdHZhciBhcHBseUNsYXNzID0gdHJ1ZTtcclxuXHRcdHZhciBjbGFzc05hbWUgPSBjcmVhdGVDbGFzc05hbWUocHNldWRvLnNsaWNlKDEpKTtcclxuXHRcdHZhciBpc05lZ2F0ZWQgPSBwc2V1ZG8uc3Vic3RyaW5nKDAsIDUpID09IFwiOm5vdChcIjtcclxuXHRcdHZhciBhY3RpdmF0ZUV2ZW50TmFtZTtcclxuXHRcdHZhciBkZWFjdGl2YXRlRXZlbnROYW1lO1xyXG5cclxuXHRcdC8vIGlmIG5lZ2F0ZWQsIHJlbW92ZSA6bm90KCkgXHJcblx0XHRpZiAoaXNOZWdhdGVkKSB7XHJcblx0XHRcdHBzZXVkbyA9IHBzZXVkby5zbGljZSg1LCAtMSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIGJyYWNrZXQgY29udGVudHMgYXJlIGlycmVsZXZhbnQgLSByZW1vdmUgdGhlbVxyXG5cdFx0dmFyIGJyYWNrZXRJbmRleCA9IHBzZXVkby5pbmRleE9mKFwiKFwiKVxyXG5cdFx0aWYgKGJyYWNrZXRJbmRleCA+IC0xKSB7XHJcblx0XHRcdHBzZXVkbyA9IHBzZXVkby5zdWJzdHJpbmcoMCwgYnJhY2tldEluZGV4KTtcclxuXHRcdH1cdFx0XHJcblx0XHRcclxuXHRcdC8vIGNoZWNrIHdlJ3JlIHN0aWxsIGRlYWxpbmcgd2l0aCBhIHBzZXVkby1jbGFzc1xyXG5cdFx0aWYgKHBzZXVkby5jaGFyQXQoMCkgPT0gXCI6XCIpIHtcclxuXHRcdFx0c3dpdGNoIChwc2V1ZG8uc2xpY2UoMSkpIHtcclxuXHJcblx0XHRcdFx0Y2FzZSBcInJvb3RcIjpcclxuXHRcdFx0XHRcdGFwcGx5Q2xhc3MgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBpc05lZ2F0ZWQgPyBlICE9IHJvb3QgOiBlID09IHJvb3Q7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBcInRhcmdldFwiOlxyXG5cdFx0XHRcdFx0Ly8gOnRhcmdldCBpcyBvbmx5IHN1cHBvcnRlZCBpbiBJRThcclxuXHRcdFx0XHRcdGlmIChpZVZlcnNpb24gPT0gOCkge1xyXG5cdFx0XHRcdFx0XHRhcHBseUNsYXNzID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7IFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGhhc2hJRCA9IGhhc2guc2xpY2UoMSk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaXNOZWdhdGVkID8gKGhhc2ggPT0gRU1QVFlfU1RSSU5HIHx8IGUuaWQgIT0gaGFzaElEKSA6IChoYXNoICE9IEVNUFRZX1NUUklORyAmJiBlLmlkID09IGhhc2hJRCk7XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRhZGRFdmVudCggd2luLCBcImhhc2hjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0b2dnbGVFbGVtZW50Q2xhc3MoZSwgY2xhc3NOYW1lLCBoYW5kbGVyKCkpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXIoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIFwiY2hlY2tlZFwiOlxyXG5cdFx0XHRcdFx0YXBwbHlDbGFzcyA9IGZ1bmN0aW9uKGUpIHsgXHJcblx0XHRcdFx0XHRcdGlmIChSRV9JTlBVVF9DSEVDS0FCTEVfVFlQRVMudGVzdChlLnR5cGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0YWRkRXZlbnQoIGUsIFwicHJvcGVydHljaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXZlbnQucHJvcGVydHlOYW1lID09IFwiY2hlY2tlZFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvZ2dsZUVsZW1lbnRDbGFzcyggZSwgY2xhc3NOYW1lLCBlLmNoZWNrZWQgIT09IGlzTmVnYXRlZCApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGUuY2hlY2tlZCAhPT0gaXNOZWdhdGVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIFwiZGlzYWJsZWRcIjpcclxuXHRcdFx0XHRcdGlzTmVnYXRlZCA9ICFpc05lZ2F0ZWQ7XHJcblxyXG5cdFx0XHRcdGNhc2UgXCJlbmFibGVkXCI6XHJcblx0XHRcdFx0XHRhcHBseUNsYXNzID0gZnVuY3Rpb24oZSkgeyBcclxuXHRcdFx0XHRcdFx0aWYgKFJFX0lOUFVUX0VMRU1FTlRTLnRlc3QoZS50YWdOYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdGFkZEV2ZW50KCBlLCBcInByb3BlcnR5Y2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LnByb3BlcnR5TmFtZSA9PSBcIiRkaXNhYmxlZFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvZ2dsZUVsZW1lbnRDbGFzcyggZSwgY2xhc3NOYW1lLCBlLiRkaXNhYmxlZCA9PT0gaXNOZWdhdGVkICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGVuYWJsZWRXYXRjaGVycy5wdXNoKGUpO1xyXG5cdFx0XHRcdFx0XHRcdGUuJGRpc2FibGVkID0gZS5kaXNhYmxlZDtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZS5kaXNhYmxlZCA9PT0gaXNOZWdhdGVkO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJldHVybiBwc2V1ZG8gPT0gXCI6ZW5hYmxlZFwiID8gaXNOZWdhdGVkIDogIWlzTmVnYXRlZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSBcImZvY3VzXCI6XHJcblx0XHRcdFx0XHRhY3RpdmF0ZUV2ZW50TmFtZSA9IFwiZm9jdXNcIjtcclxuXHRcdFx0XHRcdGRlYWN0aXZhdGVFdmVudE5hbWUgPSBcImJsdXJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgXCJob3ZlclwiOlxyXG5cdFx0XHRcdFx0aWYgKCFhY3RpdmF0ZUV2ZW50TmFtZSkge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmF0ZUV2ZW50TmFtZSA9IFwibW91c2VlbnRlclwiO1xyXG5cdFx0XHRcdFx0XHRkZWFjdGl2YXRlRXZlbnROYW1lID0gXCJtb3VzZWxlYXZlXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRhcHBseUNsYXNzID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRhZGRFdmVudCggZSwgaXNOZWdhdGVkID8gZGVhY3RpdmF0ZUV2ZW50TmFtZSA6IGFjdGl2YXRlRXZlbnROYW1lLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0b2dnbGVFbGVtZW50Q2xhc3MoIGUsIGNsYXNzTmFtZSwgdHJ1ZSApO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRhZGRFdmVudCggZSwgaXNOZWdhdGVkID8gYWN0aXZhdGVFdmVudE5hbWUgOiBkZWFjdGl2YXRlRXZlbnROYW1lLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0b2dnbGVFbGVtZW50Q2xhc3MoIGUsIGNsYXNzTmFtZSwgZmFsc2UgKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGlzTmVnYXRlZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gZXZlcnl0aGluZyBlbHNlXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdC8vIElmIHdlIGRvbid0IHN1cHBvcnQgdGhpcyBwc2V1ZG8tY2xhc3MgZG9uJ3QgY3JlYXRlIFxyXG5cdFx0XHRcdFx0Ly8gYSBwYXRjaCBmb3IgaXRcclxuXHRcdFx0XHRcdGlmICghUkVfUFNFVURPX1NUUlVDVFVSQUwudGVzdChwc2V1ZG8pKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4geyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgYXBwbHlDbGFzczogYXBwbHlDbGFzcyB9O1xyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBhcHBseVBhdGNoZXMoKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIHVzZXMgdGhlIHBhc3NlZCBzZWxlY3RvciB0ZXh0IHRvIGZpbmQgRE9NIG5vZGVzIGFuZCBwYXRjaCB0aGVtXHRcclxuXHRmdW5jdGlvbiBhcHBseVBhdGNoZXMoc2VsZWN0b3JUZXh0LCBwYXRjaGVzKSB7XHJcblx0XHR2YXIgZWxtcztcclxuXHRcdFxyXG5cdFx0Ly8gQWx0aG91Z2ggc29tZSBzZWxlY3RvciBsaWJyYXJpZXMgY2FuIGZpbmQgOmNoZWNrZWQgOmVuYWJsZWQgZXRjLiBcclxuXHRcdC8vIHdlIG5lZWQgdG8gZmluZCBhbGwgZWxlbWVudHMgdGhhdCBjb3VsZCBoYXZlIHRoYXQgc3RhdGUgYmVjYXVzZSBcclxuXHRcdC8vIGl0IGNhbiBiZSBjaGFuZ2VkIGJ5IHRoZSB1c2VyLlxyXG5cdFx0dmFyIGRvbVNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dC5yZXBsYWNlKFJFX0xJQlJBUllfSU5DT01QQVRJQkxFX1BTRVVET1MsIEVNUFRZX1NUUklORyk7XHJcblx0XHRcclxuXHRcdC8vIElmIHRoZSBkb20gc2VsZWN0b3IgZXF1YXRlcyB0byBhbiBlbXB0eSBzdHJpbmcgb3IgZW5kcyB3aXRoIFxyXG5cdFx0Ly8gd2hpdGVzcGFjZSB0aGVuIHdlIG5lZWQgdG8gYXBwZW5kIGEgdW5pdmVyc2FsIHNlbGVjdG9yICgqKSB0byBpdC5cclxuXHRcdGlmIChkb21TZWxlY3RvclRleHQgPT0gRU1QVFlfU1RSSU5HIHx8IGRvbVNlbGVjdG9yVGV4dC5jaGFyQXQoZG9tU2VsZWN0b3JUZXh0Lmxlbmd0aCAtIDEpID09IFNQQUNFX1NUUklORykge1xyXG5cdFx0XHRkb21TZWxlY3RvclRleHQgKz0gXCIqXCI7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIEVuc3VyZSB3ZSBjYXRjaCBlcnJvcnMgZnJvbSB0aGUgc2VsZWN0b3IgbGlicmFyeVxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0ZWxtcyA9IHNlbGVjdG9yTWV0aG9kKCBkb21TZWxlY3RvclRleHQgKTtcclxuXHRcdH0gY2F0Y2ggKGV4KSB7XHJcblx0XHRcdC8vICNERUJVR19TVEFSVFxyXG5cdFx0XHRsb2coIFwiU2VsZWN0b3IgJ1wiICsgc2VsZWN0b3JUZXh0ICsgXCInIHRocmV3IGV4Y2VwdGlvbiAnXCIgKyBleCArIFwiJ1wiICk7XHJcblx0XHRcdC8vICNERUJVR19FTkRcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0aWYgKGVsbXMpIHtcclxuXHRcdFx0Zm9yICh2YXIgZCA9IDAsIGRsID0gZWxtcy5sZW5ndGg7IGQgPCBkbDsgZCsrKSB7XHRcclxuXHRcdFx0XHR2YXIgZWxtID0gZWxtc1tkXTtcclxuXHRcdFx0XHR2YXIgY3NzQ2xhc3NlcyA9IGVsbS5jbGFzc05hbWU7XHJcblx0XHRcdFx0Zm9yICh2YXIgZiA9IDAsIGZsID0gcGF0Y2hlcy5sZW5ndGg7IGYgPCBmbDsgZisrKSB7XHJcblx0XHRcdFx0XHR2YXIgcGF0Y2ggPSBwYXRjaGVzW2ZdO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoIWhhc1BhdGNoKGVsbSwgcGF0Y2gpKSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYXRjaC5hcHBseUNsYXNzICYmIChwYXRjaC5hcHBseUNsYXNzID09PSB0cnVlIHx8IHBhdGNoLmFwcGx5Q2xhc3MoZWxtKSA9PT0gdHJ1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRjc3NDbGFzc2VzID0gdG9nZ2xlQ2xhc3MoY3NzQ2xhc3NlcywgcGF0Y2guY2xhc3NOYW1lLCB0cnVlICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxtLmNsYXNzTmFtZSA9IGNzc0NsYXNzZXM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyAtLVsgaGFzUGF0Y2goKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBjaGVja3MgZm9yIHRoZSBleHNpc3RlbmNlIG9mIGEgcGF0Y2ggb24gYW4gZWxlbWVudFxyXG5cdGZ1bmN0aW9uIGhhc1BhdGNoKCBlbG0sIHBhdGNoICkge1xyXG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIHBhdGNoLmNsYXNzTmFtZSArIFwiKFxcXFxzfCQpXCIpLnRlc3QoZWxtLmNsYXNzTmFtZSk7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gVXRpbGl0eSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVDbGFzc05hbWUoIGNsYXNzTmFtZSApIHtcclxuXHRcdHJldHVybiBuYW1lc3BhY2UgKyBcIi1cIiArICgoaWVWZXJzaW9uID09IDYgJiYgcGF0Y2hJRTZNdWx0aXBsZUNsYXNzZXMpID9cclxuXHRcdFx0aWU2UGF0Y2hJRCsrXHJcblx0XHQ6XHJcblx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFJFX1BBVENIX0NMQVNTX05BTUVfUkVQTEFDRSwgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS5jaGFyQ29kZUF0KDApIH0pKTtcclxuXHR9O1xyXG5cclxuXHQvLyAtLVsgbG9nKCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyAjREVCVUdfU1RBUlRcclxuXHRmdW5jdGlvbiBsb2coIG1lc3NhZ2UgKSB7XHJcblx0XHRpZiAod2luLmNvbnNvbGUpIHtcclxuXHRcdFx0d2luLmNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Ly8gI0RFQlVHX0VORFxyXG5cclxuXHQvLyAtLVsgdHJpbSgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyByZW1vdmVzIGxlYWRpbmcsIHRyYWlsaW5nIHdoaXRlc3BhY2UgZnJvbSBhIHN0cmluZ1xyXG5cdGZ1bmN0aW9uIHRyaW0oIHRleHQgKSB7XHJcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKFJFX1RJRFlfVFJJTV9XSElURVNQQUNFLCBQTEFDRUhPTERFUl9TVFJJTkcpO1xyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBub3JtYWxpemVXaGl0ZXNwYWNlKCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIHJlbW92ZXMgbGVhZGluZywgdHJhaWxpbmcgYW5kIGNvbnNlY3V0aXZlIHdoaXRlc3BhY2UgZnJvbSBhIHN0cmluZ1xyXG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZVdoaXRlc3BhY2UoIHRleHQgKSB7XHJcblx0XHRyZXR1cm4gdHJpbSh0ZXh0KS5yZXBsYWNlKFJFX1RJRFlfQ09OU0VDVVRJVkVfV0hJVEVTUEFDRSwgU1BBQ0VfU1RSSU5HKTtcclxuXHR9O1xyXG5cclxuXHQvLyAtLVsgbm9ybWFsaXplU2VsZWN0b3JXaGl0ZXNwYWNlKCkgXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyB0aWRpZXMgd2hpdGVzcGFjZSBhcm91bmQgc2VsZWN0b3IgYnJhY2tldHMgYW5kIGNvbWJpbmF0b3JzXHJcblx0ZnVuY3Rpb24gbm9ybWFsaXplU2VsZWN0b3JXaGl0ZXNwYWNlKCBzZWxlY3RvclRleHQgKSB7XHJcblx0XHRyZXR1cm4gbm9ybWFsaXplV2hpdGVzcGFjZShzZWxlY3RvclRleHQuXHJcblx0XHRcdHJlcGxhY2UoUkVfVElEWV9UUkFJTElOR19XSElURVNQQUNFLCBQTEFDRUhPTERFUl9TVFJJTkcpLlxyXG5cdFx0XHRyZXBsYWNlKFJFX1RJRFlfTEVBRElOR19XSElURVNQQUNFLCBQTEFDRUhPTERFUl9TVFJJTkcpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdC8vIC0tWyB0b2dnbGVFbGVtZW50Q2xhc3MoKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIHRvZ2dsZXMgYSBzaW5nbGUgY2xhc3NOYW1lIG9uIGFuIGVsZW1lbnRcclxuXHRmdW5jdGlvbiB0b2dnbGVFbGVtZW50Q2xhc3MoIGVsbSwgY2xhc3NOYW1lLCBvbiApIHtcclxuXHRcdHZhciBvbGRDbGFzc05hbWUgPSBlbG0uY2xhc3NOYW1lO1xyXG5cdFx0dmFyIG5ld0NsYXNzTmFtZSA9IHRvZ2dsZUNsYXNzKG9sZENsYXNzTmFtZSwgY2xhc3NOYW1lLCBvbik7XHJcblx0XHRpZiAobmV3Q2xhc3NOYW1lICE9IG9sZENsYXNzTmFtZSkge1xyXG5cdFx0XHRlbG0uY2xhc3NOYW1lID0gbmV3Q2xhc3NOYW1lO1xyXG5cdFx0XHRlbG0ucGFyZW50Tm9kZS5jbGFzc05hbWUgKz0gRU1QVFlfU1RSSU5HO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIC0tWyB0b2dnbGVDbGFzcygpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGFkZHMgLyByZW1vdmVzIGEgY2xhc3NOYW1lIGZyb20gYSBzdHJpbmcgb2YgY2xhc3NOYW1lcy4gVXNlZCB0byBcclxuXHQvLyBtYW5hZ2UgbXVsdGlwbGUgY2xhc3MgY2hhbmdlcyB3aXRob3V0IGZvcmNpbmcgYSBET00gcmVkcmF3XHJcblx0ZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoIGNsYXNzTGlzdCwgY2xhc3NOYW1lLCBvbiApIHtcclxuXHRcdHZhciByZSA9IFJlZ0V4cChcIihefFxcXFxzKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHN8JClcIik7XHJcblx0XHR2YXIgY2xhc3NFeGlzdHMgPSByZS50ZXN0KGNsYXNzTGlzdCk7XHJcblx0XHRpZiAob24pIHtcclxuXHRcdFx0cmV0dXJuIGNsYXNzRXhpc3RzID8gY2xhc3NMaXN0IDogY2xhc3NMaXN0ICsgU1BBQ0VfU1RSSU5HICsgY2xhc3NOYW1lO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGNsYXNzRXhpc3RzID8gdHJpbShjbGFzc0xpc3QucmVwbGFjZShyZSwgUExBQ0VIT0xERVJfU1RSSU5HKSkgOiBjbGFzc0xpc3Q7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHQvLyAtLVsgYWRkRXZlbnQoKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRmdW5jdGlvbiBhZGRFdmVudChlbG0sIGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKSB7XHJcblx0XHRlbG0uYXR0YWNoRXZlbnQoXCJvblwiICsgZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBnZXRYSFJPYmplY3QoKSBdLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGZ1bmN0aW9uIGdldFhIUk9iamVjdCgpXHJcblx0e1xyXG5cdFx0aWYgKHdpbi5YTUxIdHRwUmVxdWVzdCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xyXG5cdFx0fVxyXG5cdFx0dHJ5XHR7IFxyXG5cdFx0XHRyZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XHJcblx0XHR9IGNhdGNoKGUpIHsgXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIC0tWyBsb2FkU3R5bGVTaGVldCgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGZ1bmN0aW9uIGxvYWRTdHlsZVNoZWV0KCB1cmwgKSB7XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmwsIGZhbHNlKTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0XHRyZXR1cm4gKHhoci5zdGF0dXM9PTIwMCkgPyB4aHIucmVzcG9uc2VUZXh0IDogRU1QVFlfU1RSSU5HO1x0XHJcblx0fTtcclxuXHRcclxuXHQvLyAtLVsgcmVzb2x2ZVVybCgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBDb252ZXJ0cyBhIFVSTCBmcmFnbWVudCB0byBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgdXNpbmcgdGhlIHNwZWNpZmllZFxyXG5cdC8vIGNvbnRleHQgVVJMLiBSZXR1cm5zIG51bGwgaWYgc2FtZS1vcmlnaW4gcG9saWN5IGlzIGJyb2tlblxyXG5cdGZ1bmN0aW9uIHJlc29sdmVVcmwoIHVybCwgY29udGV4dFVybCApIHtcclxuXHRcclxuXHRcdGZ1bmN0aW9uIGdldFByb3RvY29sQW5kSG9zdCggdXJsICkge1xyXG5cdFx0XHRyZXR1cm4gdXJsLnN1YnN0cmluZygwLCB1cmwuaW5kZXhPZihcIi9cIiwgOCkpO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0Ly8gYWJzb2x1dGUgcGF0aFxyXG5cdFx0aWYgKC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QodXJsKSkge1xyXG5cdFx0XHRyZXR1cm4gZ2V0UHJvdG9jb2xBbmRIb3N0KGNvbnRleHRVcmwpID09IGdldFByb3RvY29sQW5kSG9zdCh1cmwpID8gdXJsIDogbnVsbDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gcm9vdC1yZWxhdGl2ZSBwYXRoXHJcblx0XHRpZiAodXJsLmNoYXJBdCgwKT09XCIvXCIpXHR7XHJcblx0XHRcdHJldHVybiBnZXRQcm90b2NvbEFuZEhvc3QoY29udGV4dFVybCkgKyB1cmw7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVsYXRpdmUgcGF0aFxyXG5cdFx0dmFyIGNvbnRleHRVcmxQYXRoID0gY29udGV4dFVybC5zcGxpdCgvWz8jXS8pWzBdOyAvLyBpZ25vcmUgcXVlcnkgc3RyaW5nIGluIHRoZSBjb250ZXh0VXJsXHRcclxuXHRcdGlmICh1cmwuY2hhckF0KDApICE9IFwiP1wiICYmIGNvbnRleHRVcmxQYXRoLmNoYXJBdChjb250ZXh0VXJsUGF0aC5sZW5ndGggLSAxKSAhPSBcIi9cIikge1xyXG5cdFx0XHRjb250ZXh0VXJsUGF0aCA9IGNvbnRleHRVcmxQYXRoLnN1YnN0cmluZygwLCBjb250ZXh0VXJsUGF0aC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIGNvbnRleHRVcmxQYXRoICsgdXJsO1xyXG5cdH07XHJcblx0XHJcblx0Ly8gLS1bIHBhcnNlU3R5bGVTaGVldCgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gRG93bmxvYWRzIHRoZSBzdHlsZXNoZWV0IHNwZWNpZmllZCBieSB0aGUgVVJMLCByZW1vdmVzIGl0J3MgY29tbWVudHNcclxuXHQvLyBhbmQgcmVjdXJzaXZseSByZXBsYWNlcyBAaW1wb3J0IHJ1bGVzIHdpdGggdGhlaXIgY29udGVudHMsIHVsdGltYXRlbHlcclxuXHQvLyByZXR1cm5pbmcgdGhlIGZ1bGwgY3NzVGV4dC5cclxuXHRmdW5jdGlvbiBwYXJzZVN0eWxlU2hlZXQoIHVybCApIHtcclxuXHRcdGlmICh1cmwpIHtcclxuXHRcdFx0cmV0dXJuIGxvYWRTdHlsZVNoZWV0KHVybCkucmVwbGFjZShSRV9DT01NRU5ULCBFTVBUWV9TVFJJTkcpLlxyXG5cdFx0XHRyZXBsYWNlKFJFX0lNUE9SVCwgZnVuY3Rpb24oIG1hdGNoLCBxdW90ZUNoYXIsIGltcG9ydFVybCwgcXVvdGVDaGFyMiwgaW1wb3J0VXJsMiApIHsgXHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlU3R5bGVTaGVldChyZXNvbHZlVXJsKGltcG9ydFVybCB8fCBpbXBvcnRVcmwyLCB1cmwpKTtcclxuXHRcdFx0fSkuXHJcblx0XHRcdHJlcGxhY2UoUkVfQVNTRVRfVVJMLCBmdW5jdGlvbiggbWF0Y2gsIHF1b3RlQ2hhciwgYXNzZXRVcmwgKSB7IFxyXG5cdFx0XHRcdHF1b3RlQ2hhciA9IHF1b3RlQ2hhciB8fCBFTVBUWV9TVFJJTkc7XHJcblx0XHRcdFx0cmV0dXJuIFwiIHVybChcIiArIHF1b3RlQ2hhciArIHJlc29sdmVVcmwoYXNzZXRVcmwsIHVybCkgKyBxdW90ZUNoYXIgKyBcIikgXCI7IFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBFTVBUWV9TVFJJTkc7XHJcblx0fTtcclxuXHRcclxuXHQvLyAtLVsgaW5pdCgpIF0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRmdW5jdGlvbiBpbml0KCkge1xyXG5cdFx0Ly8gaG9ub3VyIHRoZSA8YmFzZT4gdGFnXHJcblx0XHR2YXIgdXJsLCBzdHlsZXNoZWV0O1xyXG5cdFx0dmFyIGJhc2VUYWdzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQkFTRVwiKTtcclxuXHRcdHZhciBiYXNlVXJsID0gKGJhc2VUYWdzLmxlbmd0aCA+IDApID8gYmFzZVRhZ3NbMF0uaHJlZiA6IGRvYy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0XHJcblx0XHQvKiBOb3RlOiBUaGlzIGNvZGUgcHJldmVudHMgSUUgZnJvbSBmcmVlemluZyAvIGNyYXNoaW5nIHdoZW4gdXNpbmcgXHJcblx0XHRAZm9udC1mYWNlIC5lb3QgZmlsZXMgYnV0IGl0IG1vZGlmaWVzIHRoZSA8aGVhZD4gdGFnIGFuZCBjb3VsZFxyXG5cdFx0dHJpZ2dlciB0aGUgSUUgc3R5bGVzaGVldCBsaW1pdC4gSXQgd2lsbCBhbHNvIGNhdXNlIEZPVUMgaXNzdWVzLlxyXG5cdFx0SWYgeW91IGNob29zZSB0byB1c2UgaXQsIG1ha2Ugc3VyZSB5b3UgY29tbWVudCBvdXQgdGhlIGZvciBsb29wIFxyXG5cdFx0ZGlyZWN0bHkgYmVsb3cgdGhpcyBjb21tZW50LlxyXG5cclxuXHRcdHZhciBoZWFkID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHRcdGZvciAodmFyIGM9ZG9jLnN0eWxlU2hlZXRzLmxlbmd0aC0xOyBjPj0wOyBjLS0pIHtcclxuXHRcdFx0c3R5bGVzaGVldCA9IGRvYy5zdHlsZVNoZWV0c1tjXVxyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpXHJcblx0XHRcdHZhciBwYXRjaGVkU3R5bGVzaGVldCA9IGRvYy5zdHlsZVNoZWV0c1tkb2Muc3R5bGVTaGVldHMubGVuZ3RoLTFdO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHN0eWxlc2hlZXQuaHJlZiAhPSBFTVBUWV9TVFJJTkcpIHtcclxuXHRcdFx0XHR1cmwgPSByZXNvbHZlVXJsKHN0eWxlc2hlZXQuaHJlZiwgYmFzZVVybClcclxuXHRcdFx0XHRpZiAodXJsKSB7XHJcblx0XHRcdFx0XHRwYXRjaGVkU3R5bGVzaGVldC5jc3NUZXh0ID0gcGF0Y2hTdHlsZVNoZWV0KCBwYXJzZVN0eWxlU2hlZXQoIHVybCApIClcclxuXHRcdFx0XHRcdHN0eWxlc2hlZXQuZGlzYWJsZWQgPSB0cnVlXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdHN0eWxlc2hlZXQub3duaW5nRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlc2hlZXQub3duaW5nRWxlbWVudClcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBjID0gMDsgYyA8IGRvYy5zdHlsZVNoZWV0cy5sZW5ndGg7IGMrKykge1xyXG5cdFx0XHRzdHlsZXNoZWV0ID0gZG9jLnN0eWxlU2hlZXRzW2NdXHJcblx0XHRcdGlmIChzdHlsZXNoZWV0LmhyZWYgIT0gRU1QVFlfU1RSSU5HKSB7XHJcblx0XHRcdFx0dXJsID0gcmVzb2x2ZVVybChzdHlsZXNoZWV0LmhyZWYsIGJhc2VVcmwpO1xyXG5cdFx0XHRcdGlmICh1cmwpIHtcclxuXHRcdFx0XHRcdHN0eWxlc2hlZXQuY3NzVGV4dCA9IHBhdGNoU3R5bGVTaGVldCggcGFyc2VTdHlsZVNoZWV0KCB1cmwgKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyA6ZW5hYmxlZCAmIDpkaXNhYmxlZCBwb2xsaW5nIHNjcmlwdCAoc2luY2Ugd2UgY2FuJ3QgaG9vayBcclxuXHRcdC8vIG9ucHJvcGVydHljaGFuZ2UgZXZlbnQgd2hlbiBhbiBlbGVtZW50IGlzIGRpc2FibGVkKSBcclxuXHRcdGlmIChlbmFibGVkV2F0Y2hlcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgYyA9IDAsIGNsID0gZW5hYmxlZFdhdGNoZXJzLmxlbmd0aDsgYyA8IGNsOyBjKyspIHtcclxuXHRcdFx0XHRcdHZhciBlID0gZW5hYmxlZFdhdGNoZXJzW2NdO1xyXG5cdFx0XHRcdFx0aWYgKGUuZGlzYWJsZWQgIT09IGUuJGRpc2FibGVkKSB7XHJcblx0XHRcdFx0XHRcdGlmIChlLmRpc2FibGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGUuJGRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRlLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRlLiRkaXNhYmxlZCA9IGUuZGlzYWJsZWQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sMjUwKVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Ly8gQmluZCBzZWxlY3Rpdml6ciB0byB0aGUgQ29udGVudExvYWRlZCBldmVudC4gXHJcblx0Q29udGVudExvYWRlZCh3aW4sIGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gRGV0ZXJtaW5lIHRoZSBcImJlc3QgZml0XCIgc2VsZWN0b3IgZW5naW5lXHJcblx0XHRmb3IgKHZhciBlbmdpbmUgaW4gc2VsZWN0b3JFbmdpbmVzKSB7XHJcblx0XHRcdHZhciBtZW1iZXJzLCBtZW1iZXIsIGNvbnRleHQgPSB3aW47XHJcblx0XHRcdGlmICh3aW5bZW5naW5lXSkge1xyXG5cdFx0XHRcdG1lbWJlcnMgPSBzZWxlY3RvckVuZ2luZXNbZW5naW5lXS5yZXBsYWNlKFwiKlwiLCBlbmdpbmUpLnNwbGl0KFwiLlwiKTtcclxuXHRcdFx0XHR3aGlsZSAoKG1lbWJlciA9IG1lbWJlcnMuc2hpZnQoKSkgJiYgKGNvbnRleHQgPSBjb250ZXh0W21lbWJlcl0pKSB7fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgY29udGV4dCA9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdHNlbGVjdG9yTWV0aG9kID0gY29udGV4dDtcclxuXHRcdFx0XHRcdGluaXQoKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHQvKiFcclxuXHQgKiBDb250ZW50TG9hZGVkLmpzIGJ5IERpZWdvIFBlcmluaSwgbW9kaWZpZWQgZm9yIElFPDkgb25seSAodG8gc2F2ZSBzcGFjZSlcclxuXHQgKlxyXG5cdCAqIEF1dGhvcjogRGllZ28gUGVyaW5pIChkaWVnby5wZXJpbmkgYXQgZ21haWwuY29tKVxyXG5cdCAqIFN1bW1hcnk6IGNyb3NzLWJyb3dzZXIgd3JhcHBlciBmb3IgRE9NQ29udGVudExvYWRlZFxyXG5cdCAqIFVwZGF0ZWQ6IDIwMTAxMDIwXHJcblx0ICogTGljZW5zZTogTUlUXHJcblx0ICogVmVyc2lvbjogMS4yXHJcblx0ICpcclxuXHQgKiBVUkw6XHJcblx0ICogaHR0cDovL2phdmFzY3JpcHQubndib3guY29tL0NvbnRlbnRMb2FkZWQvXHJcblx0ICogaHR0cDovL2phdmFzY3JpcHQubndib3guY29tL0NvbnRlbnRMb2FkZWQvTUlULUxJQ0VOU0VcclxuXHQgKlxyXG5cdCAqL1xyXG5cclxuXHQvLyBAdyB3aW5kb3cgcmVmZXJlbmNlXHJcblx0Ly8gQGYgZnVuY3Rpb24gcmVmZXJlbmNlXHJcblx0ZnVuY3Rpb24gQ29udGVudExvYWRlZCh3aW4sIGZuKSB7XHJcblxyXG5cdFx0dmFyIGRvbmUgPSBmYWxzZSwgdG9wID0gdHJ1ZSxcclxuXHRcdGluaXQgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmIChlLnR5cGUgPT0gXCJyZWFkeXN0YXRlY2hhbmdlXCIgJiYgZG9jLnJlYWR5U3RhdGUgIT0gXCJjb21wbGV0ZVwiKSByZXR1cm47XHJcblx0XHRcdChlLnR5cGUgPT0gXCJsb2FkXCIgPyB3aW4gOiBkb2MpLmRldGFjaEV2ZW50KFwib25cIiArIGUudHlwZSwgaW5pdCwgZmFsc2UpO1xyXG5cdFx0XHRpZiAoIWRvbmUgJiYgKGRvbmUgPSB0cnVlKSkgZm4uY2FsbCh3aW4sIGUudHlwZSB8fCBlKTtcclxuXHRcdH0sXHJcblx0XHRwb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRyeSB7IHJvb3QuZG9TY3JvbGwoXCJsZWZ0XCIpOyB9IGNhdGNoKGUpIHsgc2V0VGltZW91dChwb2xsLCA1MCk7IHJldHVybjsgfVxyXG5cdFx0XHRpbml0KCdwb2xsJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChkb2MucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpIGZuLmNhbGwod2luLCBFTVBUWV9TVFJJTkcpO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChkb2MuY3JlYXRlRXZlbnRPYmplY3QgJiYgcm9vdC5kb1Njcm9sbCkge1xyXG5cdFx0XHRcdHRyeSB7IHRvcCA9ICF3aW4uZnJhbWVFbGVtZW50OyB9IGNhdGNoKGUpIHsgfVxyXG5cdFx0XHRcdGlmICh0b3ApIHBvbGwoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhZGRFdmVudChkb2MsXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGluaXQpO1xyXG5cdFx0XHRhZGRFdmVudCh3aW4sXCJsb2FkXCIsIGluaXQpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn0pKHRoaXMpOyIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xyXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KHJvb3QpKTtcclxuXHR9IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJvb3QuSlNmb3JtTGFiZWwgPSBmYWN0b3J5KHJvb3QpO1xyXG5cdH1cclxufSkodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMud2luZG93IHx8IHRoaXMuZ2xvYmFsLCBmdW5jdGlvbiAocm9vdCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vXHJcblx0Ly8gVmFyaWFibGVzXHJcblx0Ly9cclxuXHJcblx0dmFyIEpTZm9ybUxhYmVsID0gZnVuY3Rpb24oKSB7fSwgLy8gT2JqZWN0IGZvciBwdWJsaWMgQVBJc1xyXG5cdFx0dHJhbnNpdGlvbnNTdXBwb3J0ZWQgPSAoJ3RyYW5zaXRpb24nIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSkgfHwgKCdXZWJraXRUcmFuc2l0aW9uJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUpLCAvL0lFIDEwKywgQ2hyb21lIDErLCBTYWZhcmkgMy4yKywgRkYgNCsgYW5kIE9wZXJhIDEyK1xyXG5cdFx0c3VwcG9ydHMgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgJiYgISFyb290LmFkZEV2ZW50TGlzdGVuZXIgJiYgISF0cmFuc2l0aW9uc1N1cHBvcnRlZCwgLy8gRmVhdHVyZSB0ZXN0XHJcblx0XHRldmVudFRpbWVvdXQsXHJcblx0XHRkZWZhdWx0cyA9IHtcclxuXHRcdFx0aW5pdENsYXNzOiAnanMtZm9ybWxhYmVsLXBsdWdpbicsXHJcblx0XHRcdGNhbGxiYWNrQmVmb3JlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNhbGxiYWNrQWZ0ZXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2NvcGU6IGRvY3VtZW50LFxyXG5cdFx0XHRzZWxlY3RvcjogJ2lucHV0JyxcclxuXHRcdFx0Zm9jdXNDb2xvcjogXCIjMGVhZWU4XCIsXHJcblx0XHRcdGJsdXJDb2xvcjogXCIjYTNhMmEwXCJcclxuXHRcdH0sXHJcblx0XHRzZXR0aW5nczsgLy9zZXR0aW5ncyBvYmplY3QgcmVzdWx0IGZyb20gbWVyZ2luZyBkZWZhdWx0IGFuZCBvcHRpb25zIChnaXZlbiBhdCBpbml0aWFsaXphdGlvbikgb2JqZWN0cyBcclxuXHJcblx0Ly/Cp1xyXG5cdC8vIE1ldGhvZHNcclxuXHQvL1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHNpbXBsZSBmb3JFYWNoKCkgaW1wbGVtZW50YXRpb24gZm9yIEFycmF5cywgT2JqZWN0cyBhbmQgTm9kZUxpc3RzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gY29sbGVjdGlvbiBDb2xsZWN0aW9uIG9mIGl0ZW1zIHRvIGl0ZXJhdGVcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVyYXRpb25cclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gc2NvcGUgT2JqZWN0L05vZGVMaXN0L0FycmF5IHRoYXQgZm9yRWFjaCBpcyBpdGVyYXRpbmcgb3ZlciAoYWthIGB0aGlzYClcclxuXHQgKi9cclxuXHR2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjYWxsYmFjaywgc2NvcGUpIHtcclxuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY29sbGVjdGlvbikgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XHJcblx0XHRcdGZvciAodmFyIHByb3AgaW4gY29sbGVjdGlvbikge1xyXG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29sbGVjdGlvbiwgcHJvcCkpIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGNvbGxlY3Rpb25bcHJvcF0sIHByb3AsIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbGxlY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRjYWxsYmFjay5jYWxsKHNjb3BlLCBjb2xsZWN0aW9uW2ldLCBpLCBjb2xsZWN0aW9uKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lcmdlIGRlZmF1bHRzIHdpdGggdXNlciBvcHRpb25zXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgRGVmYXVsdCBzZXR0aW5nc1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgb3B0aW9uc1xyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE1lcmdlZCB2YWx1ZXMgb2YgZGVmYXVsdHMgYW5kIG9wdGlvbnNcclxuXHQgKi9cclxuXHR2YXIgZXh0ZW5kID0gZnVuY3Rpb24gKCBkZWZhdWx0cywgb3B0aW9ucyApIHtcclxuXHRcdHZhciBleHRlbmRlZCA9IHt9O1xyXG5cdFx0Zm9yRWFjaChkZWZhdWx0cywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XHJcblx0XHRcdGV4dGVuZGVkW3Byb3BdID0gZGVmYXVsdHNbcHJvcF07XHJcblx0XHR9KTtcclxuXHRcdGZvckVhY2gob3B0aW9ucywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XHJcblx0XHRcdGV4dGVuZGVkW3Byb3BdID0gb3B0aW9uc1twcm9wXTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGV4dGVuZGVkO1xyXG5cdH07XHJcblxyXG5cclxuXHR2YXIgcHJlZml4dHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGNsb3Nlc3QgbWF0Y2hpbmcgZWxlbWVudCB1cCB0aGUgRE9NIHRyZWVcclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gU3RhcnRpbmcgZWxlbWVudFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBTZWxlY3RvciB0byBtYXRjaCBhZ2FpbnN0IChjbGFzcywgSUQsIG9yIGRhdGEgYXR0cmlidXRlKVxyXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW58RWxlbWVudH0gUmV0dXJucyBmYWxzZSBpZiBub3QgbWF0Y2ggZm91bmRcclxuXHQgKi9cclxuXHR2YXIgZ2V0Q2xvc2VzdCA9IGZ1bmN0aW9uIChlbGVtLCBzZWxlY3Rvcikge1xyXG5cdFx0dmFyIGZpcnN0Q2hhciA9IHNlbGVjdG9yLmNoYXJBdCgwKTtcclxuXHRcdGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcclxuXHRcdFx0aWYgKCBmaXJzdENoYXIgPT09ICcuJyApIHtcclxuXHRcdFx0XHRpZiAoIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCBzZWxlY3Rvci5zdWJzdHIoMSkgKSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICggZmlyc3RDaGFyID09PSAnIycgKSB7XHJcblx0XHRcdFx0aWYgKCBlbGVtLmlkID09PSBzZWxlY3Rvci5zdWJzdHIoMSkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWxlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoIGZpcnN0Q2hhciA9PT0gJ1snICkge1xyXG5cdFx0XHRcdGlmICggZWxlbS5oYXNBdHRyaWJ1dGUoIHNlbGVjdG9yLnN1YnN0cigxLCBzZWxlY3Rvci5sZW5ndGggLSAyKSApICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBIaWRlIExhYmVscyBpZiBwbGFjZWhvbGRlciBpcyBwcmVzZW50ZWQsIHNob3cgaWYgb3RoZXJ3aXNlXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcmV0dXJuIHtOdWxsfEVsZW1lbnR9IFJldHVybnMgbGFiZWwgYXNzY2lvYXRlZCB3aXRoIGVsZW1lbnQgb3IgbnVsbCBpZiBubyBmb3VuZGVkIFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBTZWxlY3RvciB0byBtYXRjaCBhZ2FpbnN0XHJcblx0ICogQHBhcmFtIHtBcnJheXxPYmplY3R8Tm9kZUxpc3R9IHNjb3BlIE9iamVjdC9Ob2RlTGlzdC9BcnJheSB0aGF0IGZvckVhY2ggaXMgaXRlcmF0aW5nIG92ZXIgKGFrYSBgdGhpc2ApXHJcblx0ICovXHJcblx0dmFyIGhpZGVMYWJlbHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHBhcmVudCkge1xyXG5cdFx0dmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHRmb3JFYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihlLGkpe1xyXG5cdFx0XHQvLyBnZXQgbGFiZWwgYW5kIHBsYWNlaG9sZGVyIGZvciB0aGUgaW5wdXRcclxuXHRcdFx0dmFyIGxhYmVsID0gZ2V0TGFiZWwoZSksXHJcblx0XHRcdFx0cGxhY2Vob2xkZXIgPSBlLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTsgXHJcblxyXG5cdFx0XHQvLyBoaWRlIHRoZSBsYWJlbCBvbmx5IGlmIHRoZXJlIGlzIGEgcGxhY2Vob2xkZXIgXHJcblx0XHRcdGlmIChwbGFjZWhvbGRlciAhPT0gbnVsbCAmJiBwbGFjZWhvbGRlciAhPT0gJycpIHtcclxuXHRcdFx0XHRsYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSwgcGFyZW50KTtcclxuXHJcblx0fTtcclxuXHJcblx0dmFyIHByZWZpeCA9IGZ1bmN0aW9uKHJ1bGUsIHZhbHVlKXtcclxuXHRcdHZhciBkb21QcmVmaXhlcyA9ICd3ZWJraXQgbW96IE8gbXMnLnNwbGl0KCcgJyksXHJcbiAgICBcdFx0ZGVjbGFyYXRpb25zID0gW10sXHJcbiAgICBcdFx0dmFsdWUgPSB2YWx1ZSB8fCAwO1xyXG4gICAgXHRmb3IgKHZhciBpID0gMDsgaSA8IGRvbVByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBcdFx0dmFyIHN0cmluZyA9ICctJyArIGRvbVByZWZpeGVzW2ldICsgJy0nICsgcnVsZSArICc6JyArIHZhbHVlICsgJzsnO1xyXG5cdFx0XHRkZWNsYXJhdGlvbnMucHVzaChzdHJpbmcpO1xyXG4gICAgXHR9XHJcblxyXG4gICAgXHRjb25zb2xlLmxvZyhkZWNsYXJhdGlvbnMuam9pbihcIiBcIikpO1xyXG5cclxuICAgIFx0XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGEgbGFiZWwgYXNzb2NpYXRlZCB3aXRoIGEgc3BlY2lmaWMgaW5vdXRcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWwgZWxlbWVudCB0byBtYXRjaCBhZ2FpbnN0XHJcblx0ICogQHJldHVybiB7TnVsbHxFbGVtZW50fSBSZXR1cm5zIGxhYmVsIGFzc2Npb2F0ZWQgd2l0aCBlbGVtZW50IG9yIG51bGwgaWYgbm8gZm91bmRlZCBcclxuXHQgKi9cclxuXHR2YXIgZ2V0TGFiZWwgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHQgICB2YXIgaWQgPSBlbC5pZCxcclxuXHQgICBcdFx0bGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGFiZWwnKTtcclxuXHQgICBmb3IoIHZhciBpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKyApIHtcclxuXHQgICAgICBpZiAobGFiZWxzW2ldLmdldEF0dHJpYnV0ZSgnZm9yJykgPT09IGlkKVxyXG5cdCAgICAgICAgICAgcmV0dXJuIGxhYmVsc1tpXTtcclxuXHQgICB9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlIGV2ZW50c1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0dmFyIGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0dmFyIHRvZ2dsZSA9IGV2ZW50LnRhcmdldDtcclxuXHRcdHZhciBjbG9zZXN0ID0gZ2V0Q2xvc2VzdCh0b2dnbGUsICdbZGF0YS1zb21lLXNlbGVjdG9yXScpO1xyXG5cdFx0aWYgKCBjbG9zZXN0ICkge1xyXG5cdFx0XHQvLyBydW4gbWV0aG9kc1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coJ015IHBsdWdpbiBoYXMgYmVlbiBjbGlja2VkIScpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9uIHdpbmRvdyBzY3JvbGwgYW5kIHJlc2l6ZSwgb25seSBydW4gZXZlbnRzIGF0IGEgcmF0ZSBvZiAxNWZwcyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZXZlbnRUaW1lb3V0IFRpbWVvdXQgZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNldHRpbmdzXHJcblx0ICovXHJcblx0dmFyIGV2ZW50VGhyb3R0bGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCAhZXZlbnRUaW1lb3V0ICkge1xyXG5cdFx0XHRldmVudFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGV2ZW50VGltZW91dCA9IG51bGw7XHJcblx0XHRcdFx0YWN0dWFsTWV0aG9kKCBzZXR0aW5ncyApO1xyXG5cdFx0XHR9LCA2Nik7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGVzdHJveSB0aGUgY3VycmVudCBpbml0aWFsaXphdGlvbi5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0SlNmb3JtTGFiZWwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0Ly8gSWYgcGx1Z2luIGlzbid0IGFscmVhZHkgaW5pdGlhbGl6ZWQsIHN0b3BcclxuXHRcdGlmICggIXNldHRpbmdzICkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIFJlbW92ZSBpbml0IGNsYXNzIGZvciBjb25kaXRpb25hbCBDU1NcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBzZXR0aW5ncy5pbml0Q2xhc3MgKTtcclxuXHJcblx0XHQvLyBAdG9kbyBVbmRvIGFueSBvdGhlciBpbml0IGZ1bmN0aW9ucy4uLlxyXG5cclxuXHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdFx0Ly8gUmVzZXQgdmFyaWFibGVzXHJcblx0XHRzZXR0aW5ncyA9IG51bGw7XHJcblx0XHRldmVudFRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHJcblx0fTtcclxuXHJcblx0XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplIFBsdWdpblxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIHNldHRpbmdzXHJcblx0ICovXHJcblx0SlNmb3JtTGFiZWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblxyXG5cdFx0Ly8gZmVhdHVyZSB0ZXN0XHJcblx0XHRpZiAoICFzdXBwb3J0cyApIHJldHVybjtcclxuXHJcblx0XHQvLyBEZXN0cm95IGFueSBleGlzdGluZyBpbml0aWFsaXphdGlvbnNcclxuXHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cclxuXHRcdC8vIE1lcmdlIHVzZXIgb3B0aW9ucyB3aXRoIGRlZmF1bHRzXHJcblx0XHRzZXR0aW5ncyA9IGV4dGVuZCggZGVmYXVsdHMsIG9wdGlvbnMgfHwge30gKTtcclxuXHJcblx0XHRzZXR0aW5ncy5jYWxsYmFja0JlZm9yZSgndHJhbnNmb3JtJyk7XHJcblxyXG5cdFx0cHJlZml4KCd0cmFuc2Zvcm0nKTtcclxuXHJcblx0XHQvLyBBZGQgY2xhc3MgdG8gSFRNTCBlbGVtZW50IHRvIGFjdGl2YXRlIGNvbmRpdGlvbmFsIENTU1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoIHNldHRpbmdzLmluaXRDbGFzcyApO1xyXG5cclxuXHRcdGhpZGVMYWJlbHMoc2V0dGluZ3Muc2VsZWN0b3IsIHNldHRpbmdzLnNjb3BlKTtcclxuXHJcblx0XHQvLyBAdG9kbyBEbyBzb21ldGhpbmcuLi5cclxuXHJcblx0XHQvLyBMaXN0ZW4gZm9yIGV2ZW50c1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcblx0XHRzZXR0aW5ncy5jYWxsYmFja0FmdGVyKCk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8vXHJcblx0Ly8gUHVibGljIEFQSXNcclxuXHQvL1xyXG5cclxuXHRyZXR1cm4gSlNmb3JtTGFiZWw7XHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
