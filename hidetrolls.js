// ==UserScript==
// @name Hide Trolls
// @namespace Violentmonkey Scripts
// @description Hide trolls via nickname
// @grant none
// @author Sergey Smirnov
// @license MIT
// @version 1.0
// @include https://www.newkaliningrad.ru/forum/*]https://www.newkaliningrad.ru/forum/*
// @match https://www.newkaliningrad.ru/forum/*]https://www.newkaliningrad.ru/forum/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// ==/UserScript==
(function (window, undefined) {
    var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window;
    }
    if (w.self != w.top) {
        return;
    }
    jQuery(document).ready(function() {
        jQuery(".topic .post_block").each(function() {
            var nickname = jQuery(this).find(".post_wrap .author a span");
            //nicknames to hide
            if ( (nickname.text() == 'Virgo-ша') || (nickname.text() == 'zt39') || (nickname.text() == 'Rabel')){
              jQuery(this).css('display', 'none');
            }
        });   
    });
    if (/http:\/\/userscripts.org/.test(w.location.href)) {
    }
})(window);