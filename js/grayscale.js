/*!
 * Start Bootstrap - Grayscale v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
 */
function init() {
    var e = { zoom: 15, disableDefaultUI: !0, scrollwheel: !1, draggable: !1};
}! function(e) {
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = e(this.hash);
            if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
                return e("html, body").animate({ scrollTop: t.offset().top - 48 }, 1e3, "easeInOutExpo"), !1
        }
    }),
    e(".js-scroll-trigger").click(function() { e(".navbar-collapse").collapse("hide") }), e("body").scrollspy({ target: "#mainNav", offset: 54 });
    var t = function() { e("#mainNav").offset().top > 100 ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink") };
    t(), e(window).scroll(t)
}(jQuery);
