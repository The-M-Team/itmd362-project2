/* eslint-disable */
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-flexbox-flexwrap-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],l=i.split("."),1===l.length?Modernizr[l[0]]=s:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=s),C.push((s?"":"no-")+l.join("-"))}}function o(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?S.className.baseVal=n:S.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?f(s,t||n):s);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(){var e=n.body;return e||(e=l(_?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,i,a,f,u="modernizr",d=l("div"),c=p();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=s?s[r]:u+(r+1),d.appendChild(a);return o=l("style"),o.type="text/css",o.id="s"+u,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=f,S.offsetHeight):d.parentNode.removeChild(d),!!i}function g(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(d(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+d(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,s,o){function f(){d&&(delete E.style,delete E.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=g(e,s);if(!r(u,"undefined"))return u}for(var d,c,p,m,y,v=["modernizr","tspan","samp"];!E.style&&v.length;)d=!0,E.modElem=l(v.shift()),E.style=E.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=E.style[m],i(m,"-")&&(m=a(m)),E.style[m]!==t){if(o||r(s,"undefined"))return f(),"pfx"==n?m:!0;try{E.style[m]=s}catch(h){}if(E.style[m]!=y)return f(),"pfx"==n?m:!0}return f(),!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?y(l,n,s,o):(l=(e+" "+T.join(i+" ")+i).split(" "),u(l,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var S=n.documentElement,_="svg"===S.nodeName.toLowerCase(),b="Moz O ms Webkit",P=x._config.usePrefixes?b.split(" "):[];x._cssomPrefixes=P;var T=x._config.usePrefixes?b.toLowerCase().split(" "):[];x._domPrefixes=T;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),x.testAllProps=v,x.testAllProps=h,Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexwrap",h("flexWrap","wrap",!0)),Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),s(),o(C),delete x.addTest,delete x.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);
/* eslint-enable */
var docCookies={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,o,n,t,r,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(r?"; domain="+r:"")+(t?"; path="+t:"")+(c?"; secure":""),!0},removeItem:function(e,o,n){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(o?"; path="+o:""),!0):!1},hasItem:function(e){return!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e)?!1:new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),o=e.length,n=0;o>n;n++)e[n]=decodeURIComponent(e[n]);return e}};"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=docCookies);

$('html').removeClass('no-js').addClass('js');

$(document).ready(function(){
  $("#purchase-form").hide();
  $("#purchase-button").click(function(){
    $("#purchase-button").hide();
    $("#purchase-form").show();
  });
});

$('#inputs li').on('click', function() {
  $(this).find('input').focus();
});

$('.seats a').on('click', function(e) {
  var selected = [];
  var seats;
  e.preventDefault();
  $(this).toggleClass('selected');
  $('.selected','.rows').each(function(){
   var seat = $(this).attr('href').substring(1);
   selected.push(seat);
    });
});

jQuery(function($) {
  // Define veriables
  var show = {
    name: null,
    date: null,
    time: null
  };
});

  $(".show").click(function() {
    var log = $.trim($(this).text());
    var showClick = {
      raw: log.split("\n")
    };
    show.name = showClick.raw[0];
    show.date = $.trim(eventClick.raw[3]);
    var url = window.location.href.replace(/\/$/, '');
    var lastSeg = url.substr(url.lastIndexOf('#') + 1);
    show.time = url

    Cookies.set('movie', show.name);
    Cookies.set('Date', show.date);
    Cookies.set('time', show.time);

    $(this).attr('href', 'seats');
  });

  $('.ticket-info').append('<li>' + Cookies.get('movie') + '</li>');
  $('.ticket-info').append('<li class="padding">' + Cookies.get('date') + '</li>');
  $('.ticket-info').append('<li>' + Cookies.get('time') + '</li>');

  var creditCard = {
      name: null,
      number: null,
      exp: null,
      zip: null,
      cvv: null
    };

  $('#input .submit').on('click',function formValidation() {
    if (creditCard.name === null) {
      console.log('Credit-Card Name is empty');
      $('#invalid').remove();
      $('#emailadd').append('<li id="invalid">Please enter a name for the card</li>');
    }
    if (creditCard.number === null) {
      console.log('Credit-Card Nunmber is empty');
      $('#invalid').remove();
      $('#emailadd').append('<li id="invalid">Please enter a Number for the card</li>');
    }
    if (creditCard.exp === null) {
      console.log('Credit-Card Expiration date is empty');
      $('#invalid').remove();
      $('#emailadd').append('<li id="invalid">Please enter a Expiry Date for the card</li>');
    }
    if (creditCard.zip === null) {
      console.log('Credit-Card Zip code is empty');
      $('#invalid').remove();
      $('#emailadd').append('<li id="invalid">Please enter a Zip code for the card</li>');
    }
    if (creditCard.cvv === null) {
      console.log('Credit-Card CVV is empty');
      $('#invalid').remove();
      $('#emailadd').append('<li id="invalid">Please enter a CVV for the card</li>');
    });
