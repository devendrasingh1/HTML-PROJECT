
/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var f=p[u].split("="),l=f[0].replace(d,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t.read?t.read(m,l):t(m,l)||m.replace(d,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}return o.get=o.set=o,o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});

/* docReady is a single plain javascript function that provides a method of scheduling one or more javascript functions to run at some later point when the DOM has finished loading. */
!function(t,e){"use strict";function n(){if(!a){a=!0;for(var t=0;t<o.length;t++)o[t].fn.call(window,o[t].ctx);o=[]}}function d(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var o=[],a=!1,c=!1;e[t]=function(t,e){return a?void setTimeout(function(){t(e)},1):(o.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",n)),c=!0)))}}("docReady",window);

// exit modal window
if (typeof popup_style == 'undefined') {
	var popup_style = "popup-light";
}

if (typeof popup_glow == 'undefined') {
	var popup_glow = "glow-red";
}		

var thePopup = '<div id="popup_exit" class="popup-modal '+ popup_style +'"><div class="modal-offer '+ popup_glow +'"><div class="modal-content"><div class="modal-text" id="popupText"></div></div></div></div><div class="popup_overlay"></div>';

var current_href = window.location.hostname;
var PreventExitSplash = false;

function getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
getUrlParameter("p") === "0" ? PreventExitSplash = true : PreventExitSplash = false;

// classes for text colors in <span class=""></span>: text-red, text-green, text-white, text-yellow
var alert_lang = {
		en: "english-text",
		fr: "french-text",
		de: "deutch-text",
		nl: "dutch-tekst",
		it: "it-text",
		es: "spanish-text",
		no: "norsk-text",
		dk: "danish-text",
		da: "da-text",
		fi: "finish-text",
		tr: "turkish-text",
		pt: "portugese-text",
		pl: "polish-text",
		cz: "tjech-text",
		cs: "cs-text",
		hu: "hungarian-text",
		sk: "slowak-text",
		ro: "romanian-text",
		gr: "greek-text",
		el: "israeli-text",
		ru: "russian-text",
		id: "id-text",
		th: "thais-text",
		vn: "vietnamese-text",
		vi: "vi-text",		
		bg: "bulgarian-text",
		rs: "serbian-text",
		sr: "sr-text",
		ph: "philipine-text",
		fl: "fl-text",		
		hr: "croat-text",
		se: "swedish-text",
		sv: "sv-text",
		ms: "ms-text",
		my: "my-text",
		ka: "ka-text",
		gr: "gr-text",
		lv: "lv-text",
		jp: "japanse-text",
		ja: "ja-text",
		et: "et-text",
		ar: "ar-text",
		zh: "zh-text",		
		ee: "ee-text"
		

};


/* Start: language detection */
function trans_available(trObj, lang) {
	if (trObj[lang]) {
		return lang;
	} else {
		console.log("Translation not Found: " + lang);
		return "en"; // set to "en" when detected language is not in translation
	}
}

function detect_lang() {
	var cur_lang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

	if (cur_lang == "zh-CN") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-SG") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-MY") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-CHS") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-HK") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-MO") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-TW") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-CHT") {
		cur_lang = "zh-Hant";
	} else if (cur_lang.length > 2) {
		cur_lang = cur_lang[0] + cur_lang[1];
	}
	return trans_available(alert_lang, cur_lang);
}

if (!lang) {
    var lang = detect_lang();
}
/* End: language detection */

var exitsplashpage =  getUrlWithParam('x=3');
var exitsplashmessage = alert_lang[lang] ? alert_lang[lang] :  alert_lang["en"];

function getUrlWithParam(param)
{
	var url = window.location.href;
				
	if (url.includes("x="))
	{
		url = url.replace(/(x=)[0-9]{1,2}/,param)
	}
	else
	{
		url = url + "&" + param;
	}
				
	return url; 
}

/**
 * Add cookie IsNotUnique on page closing event to detect unique visitors.
*/
function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}
function DisplayExitSplash() {
    if (PreventExitSplash == false) {
        // setting cookie and expires of the cookie
        //Cookies.set('IsNotUnique', 'true', {expires: 7});

        appendHtml(document.body, thePopup);
        document.getElementById("popup_exit").style.display = "block";
        document.getElementsByClassName("popup_overlay")[0].style.display = "block";
        document.getElementById("popupText").innerHTML = exitsplashmessage;

		
        setTimeout(function () {
            PreventExitSplash = true;
            window.location.href = exitsplashpage;
        }, 500);
		

	    var exitsplashmessageText = exitsplashmessage.replace(/<br\s*[\/]?>/gi, '\n').replace(/(<([^>]+)>)/ig,'');

        return exitsplashmessageText;
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

function addClickEvent(a, i, func) {
    if (typeof a[i].onclick != 'function') {
        a[i].onclick = func;
    }
}

var a = document.getElementsByTagName('A');

for (var i = 0; i < a.length; i++) {
    if (a[i].target !== '_blank') {
        addClickEvent(a, i, function () {
            PreventExitSplash = true;
        });
    } else {
        addClickEvent(a, i, function () {
            PreventExitSplash = false;
        });
    }
}

var disablelinksfunc = function() {
    var a = document.getElementsByTagName('A');
    for (var i = 0; i < a.length; i++) {
        if (a[i].target !== '_blank') {
            addClickEvent(a, i, function() {
                PreventExitSplash = true;
            });
        } else {
            addClickEvent(a, i, function() {
                PreventExitSplash = false;
            });
        }
    }
};

addLoadEvent(disablelinksfunc);

var disableformsfunc = function() {
    var f = document.getElementsByTagName('FORM');
    for (var i = 0; i < f.length; i++) {
        if (!f[i].onclick) {
            f[i].onclick = function() {
                PreventExitSplash = true;
            }
        } else if (!f[i].onsubmit) {
            f[i].onsubmit = function() {
                PreventExitSplash = true;
            }
        }
    }
};

addLoadEvent(disableformsfunc);

docReady(function() {
    if ('1' == '1') {
        window.onbeforeunload = DisplayExitSplash;
    }
});