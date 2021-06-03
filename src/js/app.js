/*! For license information please see app.js.LICENSE.txt */ ! function (e) {
    function t(t) {
        for (var o, a, s = t[0], c = t[1], l = t[2], f = 0, h = []; f < s.length; f++) a = s[f], Object.prototype.hasOwnProperty.call(r, a) && r[a] && h.push(r[a][0]), r[a] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        for (u && u(t); h.length;) h.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== r[c] && (o = !1)
            }
            o && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }
    var o = {},
        r = {
            main: 0
        },
        i = [];

    function a(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = o, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) a.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var l = 0; l < s.length; l++) t(s[l]);
    var u = c;
    i.push(["./src/index.js", "vendors"]), n()
}({
    "./src/css/app.scss": function (e, t, n) {},
    "./src/index.js": function (e, t, n) {
        "use strict";
        n.r(t),
            function (e) {
                var t = n("./node_modules/smoothscroll-polyfill/dist/smoothscroll.js"),
                    o = n.n(t),
                    r = n("./node_modules/gsap/index.js"),
                    i = n("./node_modules/gsap/ScrollToPlugin.js"),
                    a = n("./node_modules/gsap/ScrollTrigger.js"),
                    s = n("./node_modules/@dogstudio/highway/build/highway.module.js"),
                    c = (n("./node_modules/intersection-observer/intersection-observer.js"), n("./src/js/highway/transition/default-transition.js")),
                    l = n("./src/js/highway/transition/home-transition.js"),
                    u = n("./src/js/highway/transition/about-transition.js"),
                    f = n("./src/js/highway/transition/work-transition.js"),
                    h = (n("./src/css/app.scss"), n("./src/js/menu/menu.js")),
                    d = n("./src/js/custom-cursor/custom-cursor.js"),
                    m = n("./src/js/theme/theme.js"),
                    p = n("./src/js/pre-load/pre-load.js"),
                    v = n("./src/js/home/home.js"),
                    y = n("./src/js/about/about.js"),
                    g = n("./src/js/work/work-detail.js");
                o.a.polyfill(), r.a.registerPlugin(i.a, a.a), r.a.config({
                    nullTargetWarn: !1
                });
                var w = window.APP || {};
                e(document).ready((function () {
                    window.APP = w, w.cursor = new d.a, w.theme = new m.a, w.menu = new h.a, e(".home_page,.work_page")[0] && setTimeout((function () {
                        w.home = new v.a
                    }), 200), e(".about_page")[0] && setTimeout((function () {
                        w.about = new y.a
                    }), 200), e(".work_detail_page")[0] && setTimeout((function () {
                        w.workDetail = new g.a
                    }), 200), window.screen.width < 768 && setTimeout((function () {
                        var t = location.hash;
                        t ? requestAnimationFrame((function () {
                            setTimeout((function () {
                                window.scroll({
                                    top: e(t).offset().top - e(".left-header").outerHeight() - 10,
                                    left: 0,
                                    behavior: "smooth"
                                })
                            }), 500)
                        })) : window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        }), e('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function (t) {
                            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                                var n = e(this.hash);
                                (n = n.length ? n : e("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), requestAnimationFrame((function () {
                                    window.scroll({
                                        top: n.offset().top - e(".left-header").outerHeight() - 10,
                                        left: 0,
                                        behavior: "smooth"
                                    })
                                })))
                            }
                        }))
                    }), 500)
                })), document.onreadystatechange = function () {
                    "interactive" == document.readyState && (e(".home_page")[0] ? (window.screen.width > 767 && e("#news, #contacts, .scrollToContact").attr("href", "javascript:void(0);"), window.screen.width < 768 && (e("#contacts, .scrollToContact").attr("href", "#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#news").attr("href", "#thoughts"), e("#q-intro-scroll + .scrollTo").attr("href", "#portfolio"))) : (e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#q-intro-scroll + .scrollTo").attr("href", "javascript:void(0);"), e("#news").attr("href", "index.html#thoughts")), window.APP = w, w.preload = new p.a)
                };
                var b = new s.a.Core({
                    transitions: {
                        default: c.a,
                        home: l.a,
                        about: u.a,
                        work: l.a,
                        workDetail: f.a
                    }
                });
                b.on("NAVIGATE_END", (function (t) {
                    t.to;
                    e(".home_page")[0] ? (window.screen.width > 767 && e("#news, #contacts, .scrollToContact").attr("href", "javascript:void(0);"), window.screen.width < 768 && (e("#contacts, .scrollToContact").attr("href", "#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#news").attr("href", "#thoughts"), e("#q-intro-scroll + .scrollTo").attr("href", "#portfolio"))) : (e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#q-intro-scroll + .scrollTo").attr("href", "javascript:void(0);"), e("#news").attr("href", "index.html#thoughts")), window.screen.width < 768 && setTimeout((function () {
                        var t = location.hash;
                        t ? requestAnimationFrame((function () {
                            setTimeout((function () {
                                window.scroll({
                                    top: e(t).offset().top - e(".left-header").outerHeight() - 10,
                                    left: 0,
                                    behavior: "smooth"
                                })
                            }), 500)
                        })) : window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        }), e('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function (t) {
                            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                                var n = e(this.hash);
                                (n = n.length ? n : e("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), requestAnimationFrame((function () {
                                    window.scroll({
                                        top: n.offset().top - e(".left-header").outerHeight() - 10,
                                        left: 0,
                                        behavior: "smooth"
                                    })
                                })))
                            }
                        }))
                    }), 500)
                })), b.on("NAVIGATE_IN", (function (t) {
                    t.to;
                    window.screen.width < 768 && setTimeout((function () {
                        var t = location.hash;
                        t ? requestAnimationFrame((function () {
                            setTimeout((function () {
                                window.scroll({
                                    top: e(t).offset().top - e(".left-header").outerHeight() - 10,
                                    left: 0,
                                    behavior: "smooth"
                                })
                            }), 500)
                        })) : window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        }), e('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function (t) {
                            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                                var n = e(this.hash);
                                (n = n.length ? n : e("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), requestAnimationFrame((function () {
                                    window.scroll({
                                        top: n.offset().top - e(".left-header").outerHeight() - 10,
                                        left: 0,
                                        behavior: "smooth"
                                    })
                                })))
                            }
                        }))
                    }), 500)
                }))
            }.call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/about.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return y
            }));
            var o = n("./node_modules/gsap/index.js"),
                r = n("./node_modules/gsap/ScrollTrigger.js"),
                i = n("./node_modules/smooth-scrollbar/index.js"),
                a = n("./src/js/scroll-plugin/HorizontalScrollPlugin.js"),
                s = n("./src/js/about/who-we-are/who-we-are.js"),
                c = n("./src/js/about/we-believe/we-believe.js"),
                l = n("./src/js/about/team-screens/team-screens.js"),
                u = n("./src/js/about/our-strength/our-strength.js"),
                f = n("./src/js/about/services-blk/services-blk.js"),
                h = n("./src/js/about/behind-nika/behind-nika.js"),
                d = n("./src/js/about/line-svg-animation/line-svg-animation.js"),
                m = n("./src/js/about/to-be-good/to-be-good.js"),
                p = n("./src/js/about/contact-form/contact-form.js");

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            o.a.registerPlugin(r.a), i.a.use(a.a);
            var y = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.init(), window.screen.width > 767 && (this._init, this._bind, this.sections = {
                        behind_nika: new s.a,
                        contact_us: new p.a,
                        svg_animation: new d.a,
                        ourStrengths: new s.a,
                        services_blk: new s.a,
                        teamScreens: new l.a,
                        to_be_good: new m.a,
                        weBelieve: new c.a,
                        whoWeAre: new s.a
                    }, this.bind(), e(".kill_delayedCall").click((function (e) {
                        this._init = null, this._bind = null
                    })))
                }
                var n, r, a;
                return n = t, (r = [{
                    key: "init",
                    value: function () {
                        var t = this;
                        e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#news").attr("href", "index.html#thoughts"), window.screen.width < 768 && (o.a.to(".projectTitle_wrap.who-we-are", {
                            duration: 1,
                            x: "1%",
                            scrollTrigger: {
                                trigger: ".projectTitle_wrap.who-we-are",
                                start: "top " + e(".projectTitle_wrap.who-we-are").offset().top,
                                end: "bottom top",
                                scrub: !0
                            },
                            ease: "none"
                        }), o.a.fromTo(".ourStrength_blk .projectTitle_wrap", {
                            x: "30%"
                        }, {
                            duration: 1,
                            x: "-30%",
                            scrollTrigger: {
                                trigger: ".ourStrength_blk .projectTitle_wrap",
                                start: "top bottom",
                                end: "bottom top",
                                scrub: !0
                            },
                            ease: "none"
                        })), window.screen.width > 767 && (this._init = function () {
                            t._scroll = i.a.init(document.querySelector(".scroll-area", {
                                continuousScrolling: !1,
                                damping: .2,
                                plugins: {
                                    horizontalScroll: {
                                        events: [/wheel/]
                                    }
                                }
                            })), i.a.detachStyle(), window.location.hash = "";
                            var e = location.hash;
                            e && requestAnimationFrame((function () {
                                var t = this;
                                setTimeout((function () {
                                    t._scroll.scrollIntoView(document.querySelector(e), {
                                        offsetTop: -t._scroll.containerEl.scrollTop
                                    })
                                }), 500)
                            }))
                        }, this._init())
                    }
                }, {
                    key: "bind",
                    value: function () {
                        var e = this;
                        window.screen.width > 7670 && (this._bind = function () {
                            e._scroll.addListener((function (t) {
                                var n = 100 * t.offset.x / t.limit.x;
                                n <= 30 && e.sections.whoWeAre.animate(t), n >= 10 && n <= 100 && e.sections.to_be_good.animate(n, 10, 100), n <= 40 && e.sections.teamScreens.animate(n), n >= 23 && e.sections.ourStrengths.animate(), n >= 40 && e.sections.services_blk.animate(), n >= 60 && e.sections.behind_nika.animate(), n >= 90 && e.sections.contact_us.animate()
                            })), e.sections.svg_animation.elem.anchor.click((function (t) {
                                t.preventDefault(), window.location.hash = "services", e._scroll.scrollIntoView(document.querySelector(".services_panel"))
                            }))
                        }, this._bind())
                    }
                }]) && v(n.prototype, r), a && v(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/behind-nika/behind-nika.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return s
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e) {
                return function (e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var s = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elem = [].concat(r(e(".behindNika h2")), r(e(".behindNikaPro .profileList")), [e(".abtbehindNikaPro_wrap")]), this.init(), this.isVisible = !1
                }
                var n, i, s;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        o.a.set(this.elem, {
                            autoAlpha: 0,
                            x: "-=10"
                        })
                    }
                }, {
                    key: "animate",
                    value: function () {
                        var e = this;
                        this.isVisible || o.a.to(this.elem, {
                            autoAlpha: 1,
                            x: 0,
                            duration: .8,
                            stagger: .6,
                            onComplete: function () {
                                e.isVisible = !0
                            }
                        })
                    }
                }]) && a(n.prototype, i), s && a(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/contact-form/contact-form.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elems = [e("#contactUs .contactFormWrap"), e("#contactUs .socialLinks")], this.isVisible = !1, this.init()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        o.a.set(this.elems, {
                            autoAlpha: 0,
                            x: "-=5"
                        })
                    }
                }, {
                    key: "animate",
                    value: function () {
                        var e = this;
                        this.isVisible || o.a.to(this.elems, {
                            duration: .9,
                            stagger: .1,
                            autoAlpha: 1,
                            x: 0,
                            onComplete: function () {
                                e.isVisible = !0
                            }
                        })
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/line-svg-animation/line-svg-animation.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elem = {
                        svg: e("#q-intro-scroll .st0"),
                        anchor: e("#q-intro-scroll a")
                    }, this.init()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        o.a.timeline().fromTo(this.elem.svg, {
                            "stroke-dashoffset": 430
                        }, {
                            "stroke-dashoffset": 0,
                            duration: .65
                        }).yoyo(!0).repeatDelay(1).repeat(-1), o.a.timeline().fromTo(this.elem.svg, {
                            autoAlpha: 1,
                            x: "-=20"
                        }, {
                            autoAlpha: 1,
                            x: 0,
                            duration: .65
                        }).yoyo(!0).repeatDelay(1).repeat(-1)
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/our-strength/our-strength.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return s
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e) {
                return function (e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var s = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elems = [e(".ourStrength_wrap h4"), e(".ourStrength h3")].concat(r(e(".ourStrength p"))), this.isVisible = !1, this.init()
                }
                var n, i, s;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        o.a.set(this.elems, {
                            autoAlpha: 0,
                            x: "-=8"
                        })
                    }
                }, {
                    key: "animate",
                    value: function () {
                        var e = this;
                        this.isVisible || o.a.to(this.elems, {
                            autoAlpha: 1,
                            x: 0,
                            duration: .8,
                            stagger: .6,
                            onComplete: function () {
                                e.isVisible = !0
                            }
                        })
                    }
                }]) && a(n.prototype, i), s && a(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/services-blk/services-blk.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return s
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e) {
                return function (e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var s = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elem = [e(".services_blk_wrap h4")].concat(r(e(".servicesList_wrap .servicesList"))), this.init(), this.isVisible = !1
                }
                var n, i, s;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        o.a.set(this.elem, {
                            autoAlpha: 0,
                            x: "-=10"
                        })
                    }
                }, {
                    key: "animate",
                    value: function () {
                        var e = this;
                        this.isVisible || o.a.to(this.elem, {
                            duration: .8,
                            autoAlpha: 1,
                            x: 0,
                            stagger: .2,
                            onComplete: function () {
                                e.isVisible = !0
                            }
                        })
                    }
                }]) && a(n.prototype, i), s && a(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/team-screens/team-screens.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elem = e(".teamScreensList"), this.init()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        this.TL = o.a.timeline({
                            paused: !0
                        }), this.TL.to(this.elem, {
                            duration: 1,
                            y: "-=200vh",
                            ease: "none"
                        })
                    }
                }, {
                    key: "animate",
                    value: function (e) {
                        this.TL.progress(e / 40)
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/to-be-good/to-be-good.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elem = e(".to-be-good, #contactUs .projectTitle"), this.singleHeight = document.querySelector(".to-be-good .projectTitle_wrap").scrollWidth / e(".to-be-good h2").length, this.position = {
                        previous: 0,
                        current: 0
                    }, this.init()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        o.a.set(this.elem, {
                            y: this.singleHeight
                        }), this.TL = o.a.timeline().to(this.elem, {
                            duration: 15,
                            y: "".concat(2 * this.singleHeight),
                            ease: "none"
                        }).pause()
                    }
                }, {
                    key: "animate",
                    value: function (e, t, n) {
                        var o = (e - t) / (n - t);
                        this.TL.progress(o)
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/we-believe/we-believe.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return s
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e) {
                return function (e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var s = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elem = [].concat(r(e(".we-believe .aboutCom-title")), r(e(".we-believe .abtintroblk_wrap"))), this.isVisible = !1, this.bind()
                }
                var n, i, s;
                return n = t, (i = [{
                    key: "bind",
                    value: function () {
                        var e = this;
                        this.isVisible || o.a.fromTo(this.elem, {
                            autoAlpha: 0,
                            x: "-=10"
                        }, {
                            autoAlpha: 1,
                            x: 0,
                            delay: .5,
                            stagger: .5,
                            duration: .8,
                            onComplete: function () {
                                e.isVisible = !0
                            }
                        })
                    }
                }]) && a(n.prototype, i), s && a(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/about/who-we-are/who-we-are.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elem = e(".who-we-are")
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "animate",
                    value: function (e) {
                        o.a.to(this.elem, {
                            duration: .4,
                            x: .5 * e.offset.x
                        })
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/custom-cursor/custom-cursor.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.$els = {
                        document: e(document),
                        cursor: e(".custom-cursors")
                    }, this.bindEvents()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "bindEvents",
                    value: function () {
                        var e = this;
                        this.$els.document.mousemove((function (t) {
                            o.a.to(e.$els.cursor, {
                                duration: 1,
                                x: t.clientX,
                                y: t.clientY,
                                ease: "power3.out"
                            })
                        }))
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/highway/transition/about-transition.js": function (e, t, n) {
        "use strict";
        (function (e) {
            var o = n("./node_modules/@dogstudio/highway/build/highway.module.js"),
                r = n("./node_modules/gsap/index.js"),
                i = (n("./src/js/menu/menu.js"), n("./src/js/about/about.js"));

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function l(e, t) {
                return (l = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = h(e);
                    if (t) {
                        var r = h(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return f(this, n)
                }
            }

            function f(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var d = function (t) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t)
                }(h, t);
                var n, o, a, f = u(h);

                function h() {
                    return s(this, h), f.apply(this, arguments)
                }
                return n = h, (o = [{
                    key: "in",
                    value: function (t) {
                        var n = t.from,
                            o = (t.to, t.done);
                        n.remove(), setTimeout((function () {
                            new i.a
                        }), 300), setTimeout((function () {
                            var t = document.querySelectorAll(".preload-container");
                            r.a.timeline({
                                delay: .5,
                                onComplete: function () {
                                    e(".home_page")[0] ? e("#news, #contacts, .scrollToContact").attr("href", "javascript:void(0);") : (e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#news").attr("href", "index.html#thoughts")), o()
                                }
                            }).fromTo(t, {
                                css: {
                                    "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                                }
                            }, {
                                css: {
                                    "transform-origin": "top right",
                                    "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                                },
                                duration: 1,
                                stagger: -.03,
                                ease: "power3.inOut"
                            })
                        }), 500)
                    }
                }, {
                    key: "out",
                    value: function (t) {
                        t.from;
                        var n = t.done;
                        e("#closeNavbar, .kill_delayedCall").trigger("click");
                        var o = document.querySelectorAll(".preload-container");
                        r.a.timeline({
                            onComplete: function () {
                                r.a.globalTimeline.clear(), n()
                            }
                        }).fromTo(o, {
                            css: {
                                "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            }
                        }, {
                            css: {
                                "transform-origin": "top right",
                                "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                            },
                            duration: 1,
                            stagger: .03,
                            ease: "power3.inOut"
                        })
                    }
                }]) && c(n.prototype, o), a && c(n, a), h
            }(o.a.Transition);
            t.a = d
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/highway/transition/default-transition.js": function (e, t, n) {
        "use strict";
        (function (e) {
            var o = n("./node_modules/@dogstudio/highway/build/highway.module.js"),
                r = (n("./src/js/menu/menu.js"), n("./node_modules/gsap/index.js"));

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function l(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = f(e);
                    if (t) {
                        var r = f(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return u(this, n)
                }
            }

            function u(e, t) {
                return !t || "object" !== i(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var h = function (t) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(f, t);
                var n, o, i, u = l(f);

                function f() {
                    return a(this, f), u.apply(this, arguments)
                }
                return n = f, (o = [{
                    key: "in",
                    value: function (t) {
                        var n = t.from,
                            o = (t.to, t.done);
                        n.remove();
                        var i = document.querySelectorAll(".preload-container");
                        r.a.timeline({
                            delay: .5,
                            onComplete: function () {
                                e(".home_page")[0] ? e("#news, #contacts, .scrollToContact").attr("href", "javascript:void(0);") : (e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#news").attr("href", "index.html#thoughts")), o()
                            }
                        }).fromTo(i, {
                            css: {
                                "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                            }
                        }, {
                            duration: 1,
                            transformOrigin: "top right",
                            css: {
                                "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            },
                            stagger: -.03,
                            ease: "power3.inOut"
                        })
                    }
                }, {
                    key: "out",
                    value: function (t) {
                        t.from;
                        var n = t.done;
                        e("#closeNavbar").trigger("click");
                        var o = document.querySelectorAll(".preload-container");
                        r.a.timeline({
                            onComplete: n
                        }).fromTo(o, {
                            css: {
                                "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            }
                        }, {
                            duration: 1,
                            transformOrigin: "top right",
                            css: {
                                "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                            },
                            stagger: .03,
                            ease: "power3.inOut"
                        })
                    }
                }]) && s(n.prototype, o), i && s(n, i), f
            }(o.a.Transition);
            t.a = h
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/highway/transition/home-transition.js": function (e, t, n) {
        "use strict";
        (function (e) {
            var o = n("./node_modules/@dogstudio/highway/build/highway.module.js"),
                r = n("./node_modules/gsap/index.js"),
                i = (n("./src/js/menu/menu.js"), n("./src/js/home/home.js"));
            n("./src/js/home/First-Section/revolve-effect.js");

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function l(e, t) {
                return (l = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = h(e);
                    if (t) {
                        var r = h(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return f(this, n)
                }
            }

            function f(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var d = function (t) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t)
                }(h, t);
                var n, o, a, f = u(h);

                function h() {
                    return s(this, h), f.apply(this, arguments)
                }
                return n = h, (o = [{
                    key: "in",
                    value: function (t) {
                        var n = t.from,
                            o = (t.to, t.done);
                        n.remove(), setTimeout((function () {
                            new i.a
                        }), 300), setTimeout((function () {
                            var t = document.querySelectorAll(".preload-container");
                            r.a.timeline({
                                delay: .5,
                                onComplete: function () {
                                    e(".home_page")[0] ? e("#news, #contacts, .scrollToContact").attr("href", "javascript:void(0);") : (e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#news").attr("href", "index.html#thoughts")), o()
                                }
                            }).fromTo(t, {
                                css: {
                                    "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                                }
                            }, {
                                duration: 1,
                                css: {
                                    "transform-origin": "top right",
                                    "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                                },
                                stagger: -.03,
                                ease: "power3.inOut"
                            })
                        }), 500)
                    }
                }, {
                    key: "out",
                    value: function (t) {
                        t.from;
                        var n = t.done;
                        e("#closeNavbar, .kill_delayedCall").trigger("click");
                        var o = document.querySelectorAll(".preload-container");
                        r.a.timeline({
                            onComplete: function () {
                                r.a.globalTimeline.clear(), n()
                            }
                        }).fromTo(o, {
                            css: {
                                "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            }
                        }, {
                            duration: 1,
                            css: {
                                "transform-origin": "top right",
                                "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                            },
                            stagger: .03,
                            ease: "power3.inOut"
                        })
                    }
                }]) && c(n.prototype, o), a && c(n, a), h
            }(o.a.Transition);
            t.a = d
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/highway/transition/work-transition.js": function (e, t, n) {
        "use strict";
        (function (e) {
            var o = n("./node_modules/@dogstudio/highway/build/highway.module.js"),
                r = n("./node_modules/gsap/index.js"),
                i = n("./src/js/work/work-detail.js");
            n("./src/js/menu/menu.js");

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function l(e, t) {
                return (l = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = h(e);
                    if (t) {
                        var r = h(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return f(this, n)
                }
            }

            function f(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var d = function (t) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t)
                }(h, t);
                var n, o, a, f = u(h);

                function h() {
                    return s(this, h), f.apply(this, arguments)
                }
                return n = h, (o = [{
                    key: "in",
                    value: function (t) {
                        var n = t.from,
                            o = t.to,
                            a = t.done;
                        console.log(o), n.remove(), setTimeout((function () {
                            new i.a
                        }), 300), setTimeout((function () {
                            var t = document.querySelectorAll(".preload-container");
                            r.a.timeline({
                                delay: .5,
                                onComplete: function () {
                                    e(".home_page")[0] ? e("#news, #contacts, .scrollToContact").attr("href", "javascript:void(0);") : (e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#news").attr("href", "index.html#thoughts")), a()
                                }
                            }).fromTo(t, {
                                css: {
                                    "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                                }
                            }, {
                                duration: 1,
                                css: {
                                    "transform-origin": "top right",
                                    "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                                },
                                stagger: -.03,
                                ease: "power3.inOut"
                            })
                        }), 500)
                    }
                }, {
                    key: "out",
                    value: function (t) {
                        t.from;
                        var n = t.done;
                        e("#closeNavbar, .kill_delayedCall").trigger("click");
                        var o = document.querySelectorAll(".preload-container");
                        r.a.timeline({
                            onComplete: function () {
                                r.a.globalTimeline.clear(), n()
                            }
                        }).fromTo(o, {
                            css: {
                                "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            }
                        }, {
                            duration: 1,
                            css: {
                                "transform-origin": "top right",
                                "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                            },
                            stagger: .03,
                            ease: "power3.inOut"
                        })
                    }
                }]) && c(n.prototype, o), a && c(n, a), h
            }(o.a.Transition);
            t.a = d
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/home/First-Section/first-section.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return a
            }));
            var o = n("./node_modules/gsap/index.js"),
                r = n("./src/js/home/First-Section/revolve-effect.js");

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var a = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.revolveEffect = new r.a, this.init()
                }
                var n, a, s;
                return n = t, (a = [{
                    key: "init",
                    value: function () {
                        e(".brand-head"), e(".website-head");
                        var t = void 0,
                            n = 0,
                            r = void 0,
                            i = void 0,
                            a = {
                                b: e(".brand-head-image"),
                                w: e(".website-head-image")
                            };

                        function s(e) {
                            n = ++n < e.length ? n : 0, (r = e[n]) && o.a.set(r, {
                                autoAlpha: .2,
                                "z-index": 1
                            }), void 0 !== i && o.a.set(i, {
                                autoAlpha: 0,
                                scale: 1
                            }), i = r
                        }

                        function c() {
                            i && o.a.to(i, {
                                duration: .2,
                                scale: 1.5,
                                autoAlpha: 0,
                                "z-index": "unset",
                                onComplete: function () {
                                    n = 0, i && o.a.set(i, {
                                        scale: 1,
                                        autoAlpha: 0
                                    })
                                }
                            })
                        }
                        this.revolveEffect.animation(), e("body").on("mouseenter", ".brand-head", (function () {
                            var e, l;
                            clearInterval(t), c(), l = "brand", (r = (e = a.b)[n = 0]) && o.a.fromTo(r, {
                                scale: 1.5,
                                autoAlpha: 0
                            }, {
                                duration: .2,
                                scale: 1,
                                autoAlpha: .2,
                                onComplete: function () {
                                    i = r, "website" === l ? setInterval((function () {
                                        s(e)
                                    }), 150) : t = setInterval((function () {
                                        s(e)
                                    }), 150)
                                }
                            })
                        })).on("mouseout", ".brand-head", (function () {
                            setTimeout((function () {
                                clearInterval(t), c()
                            }), 300)
                        }));
                        var l = e(".st0");
                        o.a.timeline().fromTo(l, {
                            "stroke-dashoffset": 430
                        }, {
                            duration: .65,
                            "stroke-dashoffset": 0
                        }).yoyo(!0).repeatDelay(1).repeat(-1), o.a.timeline().fromTo(l, {
                            autoAlpha: 1,
                            x: "-=20"
                        }, {
                            duration: .65,
                            autoAlpha: 1,
                            x: 0
                        }).yoyo(!0).repeatDelay(1).repeat(-1)
                    }
                }]) && i(n.prototype, a), s && i(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/home/First-Section/revolve-effect.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this._interval, this._animate, this._incAndReset, this._delayedCall, this._kill, this.t, this.index = null, this.displacement = null, this.fullAnimationTime = null, this.textStayTime = null, this.wordInTime = null, this.wordOutTime = null, this.reset(), this.init()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "reset",
                    value: function () {
                        this.index = 0, this.displacement = 20, this.fullAnimationTime = 2, this.textStayTime = 1, this.wordInTime = .4, this.wordOutTime = .25
                    }
                }, {
                    key: "init",
                    value: function () {
                        var t = this;
                        this._interval = function (e) {
                            t._animate(), t._delayedCall = o.a.delayedCall(t.fullAnimationTime, t._interval)
                        }, this._animate = function () {
                            var n = e(".revolve-container .revolve-phrase")[t.index],
                                r = e(n).find(".revolve-word");
                            o.a.fromTo(r, {
                                autoAlpha: 0,
                                y: "+=".concat(t.displacement)
                            }, {
                                duration: t.wordInTime,
                                autoAlpha: 1,
                                y: "-=".concat(t.displacement),
                                stagger: t.wordInTime / 2,
                                onComplete: function () {
                                    o.a.delayedCall(t.textStayTime, (function () {
                                        o.a.to(r, {
                                            duration: t.wordInTime,
                                            autoAlpha: 0,
                                            y: "-=".concat(t.displacement),
                                            stagger: t.wordOutTime / 2,
                                            onComplete: function () {
                                                o.a.set(r, {
                                                    y: "+=".concat(t.displacement)
                                                })
                                            }
                                        })
                                    }))
                                }
                            }), t._incAndReset()
                        }, this._incAndReset = function () {
                            t.index++, t.index >= e(".revolve-container .revolve-phrase").length && (t.index = 0)
                        }
                    }
                }, {
                    key: "animation",
                    value: function (e) {
                        var t = this;
                        this.t = setTimeout((function () {
                            t._interval(e)
                        }), 500)
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/home/footer/footer.js": function (e, t, n) {
        "use strict";
        (function (e) {
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            n.d(t, "a", (function () {
                return r
            }));
            var r = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.init()
                }
                var n, r, i;
                return n = t, (r = [{
                    key: "init",
                    value: function () {
                        function t(e, t, n) {
                            var o = e.children,
                                r = 0,
                                i = "";
                            e.innerHTML = e.textContent.replace(/\S+/g, "<n>$&</n>");
                            for (var a = 0; a < o.length; a++) {
                                var s = o[a].getBoundingClientRect().top;
                                r < s && (i += n + t), r = s, i += o[a].textContent + " "
                            }
                            e.innerHTML = i += n
                        }
                        e(".article_inner")[0] && (t(document.querySelectorAll(".article_inner li h3")[0], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[1], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[2], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[3], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[4], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[6], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[7], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[8], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[9], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[10], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[11], "<span>", "</span>"), t(document.querySelectorAll(".article_inner li h3")[12], "<span>", "</span>"))
                    }
                }]) && o(n.prototype, r), i && o(n, i), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/home/home.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return f
            }));
            var o = n("./node_modules/gsap/index.js"),
                r = n("./node_modules/gsap/ScrollTrigger.js"),
                i = n("./src/js/home/hover-effect/js/index.js"),
                a = n("./src/js/home/scroll-bar/scroll-bar.js"),
                s = n("./src/js/home/First-Section/first-section.js"),
                c = n("./src/js/home/last-section/last-section.js"),
                l = n("./src/js/home/footer/footer.js");

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            o.a.registerPlugin(r.a);
            var f = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.hovereffect, this.scroll, this.firstsec, this.lastsec, this.footer, this.run, this.init(), e(".kill_delayedCall").click((function (e) {
                        this.hovereffect = null, this.scroll = null, this.firstsec = null, this.lastsec = null, this.footer = null, this.init = null, this.run = null
                    }))
                }
                var n, r, f;
                return n = t, (r = [{
                    key: "init",
                    value: function () {
                        var t = this;
                        this.run = function () {
                            if (e(".work_page")[0]) {
                                e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#q-intro-scroll .scrollToContact").attr("href", "javascript:void(0);"), e("#news").attr("href", "index.html#thoughts"), window.screen.width > 767 && (t.scroll = new a.a, t.hovereffect = new i.a), t.lastsec = new c.a, t.footer = new l.a;
                                var n = e(".st0");
                                o.a.timeline().fromTo(n, {
                                    "stroke-dashoffset": 430
                                }, {
                                    duration: .65,
                                    "stroke-dashoffset": 0
                                }).yoyo(!0).repeatDelay(1).repeat(-1), o.a.timeline().fromTo(n, {
                                    autoAlpha: 1,
                                    x: "-=20"
                                }, {
                                    duration: .65,
                                    autoAlpha: 1,
                                    x: 0
                                }).yoyo(!0).repeatDelay(1).repeat(-1), window.screen.width < 768 && requestAnimationFrame((function () {
                                    o.a.from("#portfolio .projectTitle_wrap", {
                                        duration: 1,
                                        x: "-15%",
                                        scrollTrigger: {
                                            trigger: "#portfolio .projectTitle_wrap",
                                            start: "top " + e("#portfolio .projectTitle_wrap").offset().top,
                                            end: "bottom top",
                                            scrub: !0
                                        },
                                        ease: "none"
                                    }), o.a.from("#portfolio .projectTitle_wrap h2 span", {
                                        duration: 1,
                                        x: "30%",
                                        scrollTrigger: {
                                            trigger: "#portfolio .projectTitle_wrap",
                                            start: "top " + e("#portfolio .projectTitle_wrap").offset().top,
                                            end: "bottom top",
                                            scrub: !0
                                        },
                                        ease: "none"
                                    })
                                }))
                            }
                            e(".home_page")[0] && (window.screen.width > 767 && e("#news, #contacts, .scrollToContact").attr("href", "javascript:void(0);"), window.screen.width < 768 && (e("#contacts, .scrollToContact").attr("href", "#contactUs"), e("#news").attr("href", "#thoughts"), e("#q-intro-scroll + .scrollTo").attr("href", "#portfolio")), window.screen.width > 767 && (t.hovereffect = new i.a, t.scroll = new a.a), t.firstsec = new s.a, t.lastsec = new c.a, t.footer = new l.a, window.screen.width < 768 && requestAnimationFrame((function () {
                                o.a.to("#ourLatest", {
                                    duration: 1,
                                    x: "+=10%",
                                    scrollTrigger: {
                                        trigger: "#ourLatest",
                                        start: "top " + e("#ourLatest").offset().top,
                                        end: "bottom top",
                                        scrub: !0
                                    },
                                    ease: "none"
                                }), o.a.to("#ourLatest + .section-title", {
                                    duration: 1,
                                    x: "-=10%",
                                    scrollTrigger: {
                                        trigger: "#ourLatest",
                                        start: "top " + e("#ourLatest").offset().top,
                                        end: "bottom top",
                                        scrub: !0
                                    },
                                    ease: "none"
                                }), o.a.fromTo("#thoughts h2.mobile-only", {
                                    duration: 1,
                                    x: "-7%"
                                }, {
                                    x: "7%",
                                    scrollTrigger: {
                                        trigger: "#thoughts",
                                        start: "top bottom",
                                        end: "top top",
                                        scrub: !0
                                    },
                                    ease: "none"
                                })
                            })))
                        }, this.run()
                    }
                }]) && u(n.prototype, r), f && u(n, f), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/home/hover-effect/glsl/shapeShader.glsl": function (e, t, n) {
        "use strict";
        t.a = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nuniform sampler2D u_map;\nuniform sampler2D u_hovermap;\nuniform sampler2D u_shape;\n\nuniform float u_time;\nuniform float u_alpha;\n\nuniform vec2 u_res;\nuniform vec2 u_ratio;\nuniform vec2 u_hoverratio;\nuniform vec2 u_mouse;\nuniform float u_progressHover;\nuniform float u_progressClick;\n\nvarying vec2 v_uv;\n\nvoid main() {\n  vec2 resolution = u_res * PR;\n  vec2 uv = v_uv;\n  vec2 uv_h = v_uv;\n  float time = u_time * 0.05;\n  float progress = u_progressClick;\n  float progressHover = u_progressHover;\n\n  vec2 st = gl_FragCoord.xy / resolution.xy - vec2(.5);\n  st.y *= resolution.y / resolution.x;\n\n  vec2 mouse = vec2((u_mouse.x / u_res.x) * 2. - 1.,-(u_mouse.y / u_res.y) * 2. + 1.) * -.5;\n  mouse.y *= resolution.y / resolution.x;\n\n  uv -= vec2(0.5);\n  uv *= 1. - u_progressHover * 0.03;\n  uv *= u_ratio;\n  uv += vec2(0.5);\n\n  vec2 shapeUv = (st + mouse) * 4.;\n  shapeUv *= 1.5 - (progressHover + progress) * 0.8;\n  shapeUv /= progressHover;\n  shapeUv += vec2(.5);\n\n  vec4 shape = texture2D(u_shape, shapeUv);\n\n  float s = (shape.r) * 3. * (1. - progress);\n  float offX = uv.x + time;\n  float offY = uv.y + time * .2 + cos(time * 2.);\n  float n = snoise(vec3(offX, offY, time) * 5.) + 2.;\n\n  uv_h -= vec2(0.5);\n  uv_h *= 1. - progressHover * 0.05;\n  uv_h *= u_hoverratio;\n  uv_h += vec2(0.5);\n\n  vec4 image = texture2D(u_map, uv + mouse * 0.05 * progressHover * (1. - progress));\n  vec4 hover = texture2D(u_hovermap, uv_h + mouse * 0.5 * progressHover * (1. - progress));\n\n  float pct = smoothstep(.99, 1., clamp(n - s, 0., 1.) + progress);\n\n  vec4 finalImage = mix(image, hover, pct);\n\n  gl_FragColor = vec4(finalImage.rgb, u_alpha) ;\n  // gl_FragColor = vec4(vec3(pct), 1.);\n}\n"
    },
    "./src/js/home/hover-effect/glsl/vertexShader.glsl": function (e, t, n) {
        "use strict";
        t.a = "#define GLSLIFY 1\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    vec3 pos = position;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n"
    },
    "./src/js/home/hover-effect/js/Scene.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        }));
        var o = n("./node_modules/three/build/three.module.js"),
            r = n("./src/js/home/hover-effect/js/Tile.js"),
            i = n("./src/js/home/hover-effect/glsl/shapeShader.glsl");

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var s = i.a,
            c = function () {
                function e(t) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.container = t, this.$tiles = document.querySelectorAll(".slideshow-list__el"), this.W = window.innerWidth, this.H = window.innerHeight, this.mouse = new o.j(0, 0), this.activeTile = null, this.start()
                }
                var t, n, i;
                return t = e, (n = [{
                    key: "start",
                    value: function () {
                        var e = this;
                        this.mainScene = new o.g, this.initCamera(), this.initLights(), this.renderer = new o.k({
                            canvas: this.container,
                            alpha: !0
                        }), this.renderer.setSize(this.W, this.H), this.renderer.setPixelRatio(window.devicePixelRatio), this.tiles = Array.from(this.$tiles).map((function (t) {
                            return new r.a(t, e, .5, s)
                        })), this.update()
                    }
                }, {
                    key: "initCamera",
                    value: function () {
                        var e = 2 * Math.atan(this.H / 2 / 800) * 180 / Math.PI;
                        this.camera = new o.e(e, this.W / this.H, 1, 1e4), this.camera.position.set(0, 0, 800)
                    }
                }, {
                    key: "initLights",
                    value: function () {
                        var e = new o.a(16777215, 2);
                        this.mainScene.add(e)
                    }
                }, {
                    key: "update",
                    value: function () {
                        requestAnimationFrame(this.update.bind(this)), this.tiles.forEach((function (e) {
                            e.update()
                        })), this.renderer.render(this.mainScene, this.camera)
                    }
                }]) && a(t.prototype, n), i && a(t, i), e
            }()
    },
    "./src/js/home/hover-effect/js/Stage.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var o = n("./src/js/home/hover-effect/js/Scene.js");

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var i = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.$els = {
                    scene: document.getElementById("scene")
                }, this.init()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "init",
                value: function () {
                    this.scene = new o.a(this.$els.scene)
                }
            }]) && r(t.prototype, n), i && r(t, i), e
        }()
    },
    "./src/js/home/hover-effect/js/Tile.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return c
            }));
            var o = n("./node_modules/gsap/index.js"),
                r = n("./node_modules/three/build/three.module.js"),
                i = n("./src/js/home/hover-effect/glsl/vertexShader.glsl"),
                a = n("./src/js/home/hover-effect/js/utils/utils.js");

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var c = function () {
                function t(n, o, a, s) {
                    var c = this;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.scene = o, this.$els = {
                        el: n,
                        link: n.querySelector("a")
                    }, this.duration = a, this.mainImage = this.$els.el.querySelector("img"), this.images = [], this.lightImages = [], this.sizes = new r.j(0, 0), this.offset = new r.j(0, 0), this.vertexShader = i.a, this.fragmentShader = s, this.clock = new r.b, this.mouse = new r.j(0, 0), this.scroll = 0, this.prevScroll = 0, this.delta = 0, this.loader = new r.i, this.onChangeImage(), this.bindEvent(), e(".theme-switch").click((function () {
                        c.onChangeImage()
                    }))
                }
                var n, c, l;
                return n = t, (c = [{
                    key: "bindEvent",
                    value: function () {
                        var e = this;
                        window.addEventListener("mousemove", (function (t) {
                            e.onMouseMove(t)
                        })), this.$els.link.addEventListener("mouseenter", (function () {
                            e.onPointerEnter()
                        })), this.$els.link.addEventListener("mouseleave", (function () {
                            e.onPointerLeave()
                        }))
                    }
                }, {
                    key: "onPointerEnter",
                    value: function () {
                        this.isHovering = !0, this.mesh && o.a.to(this.uniforms.u_progressHover, {
                            duration: this.duration,
                            value: 1,
                            ease: "power2.inOut"
                        })
                    }
                }, {
                    key: "onPointerLeave",
                    value: function () {
                        var e = this;
                        this.mesh && o.a.to(this.uniforms.u_progressHover, {
                            duration: this.duration,
                            value: 0,
                            ease: "power2.inOut",
                            onComplete: function () {
                                e.isHovering = !1
                            }
                        })
                    }
                }, {
                    key: "onMouseMove",
                    value: function (e) {
                        o.a.to(this.mouse, {
                            duration: .5,
                            x: e.clientX,
                            y: e.clientY
                        })
                    }
                }, {
                    key: "onChangeImage",
                    value: function () {
                        var t = this;
                        this.images = [], this.lightImages = [], this.scene.mainScene.remove(this.mesh), "dark" !== e(".theme-switch").attr("data-mode") && "dark" !== window.localStorage.getItem("theme") || this.preload([this.mainImage.src, this.mainImage.dataset.hover, "./dist/img/shape.jpg"], this.images, (function () {
                            t.initTile(t.images)
                        })), "light" !== e(".theme-switch").attr("data-mode") && "light" !== window.localStorage.getItem("theme") || this.preload([this.mainImage.src.replace("img", "lightImg"), this.mainImage.dataset.hover.replace("img", "lightImg"), "./dist/img/shape.jpg"], this.lightImages, (function () {
                            t.initTile(t.lightImages)
                        }))
                    }
                }, {
                    key: "initTile",
                    value: function (e) {
                        var t = e[0],
                            n = e[1];
                        this.getBounds(), this.uniforms = {
                            u_alpha: {
                                value: 1
                            },
                            u_map: {
                                type: "t",
                                value: t
                            },
                            u_ratio: {
                                value: Object(a.a)(this.sizes, t.image)
                            },
                            u_hovermap: {
                                type: "t",
                                value: n
                            },
                            u_hoverratio: {
                                value: Object(a.a)(this.sizes, n.image)
                            },
                            u_shape: {
                                value: e[2]
                            },
                            u_mouse: {
                                value: this.mouse
                            },
                            u_progressHover: {
                                value: 0
                            },
                            u_time: {
                                value: this.clock.getElapsedTime()
                            },
                            u_res: {
                                value: new r.j(window.innerWidth, window.innerHeight)
                            }
                        }, this.geometry = new r.f(1, 1, 1, 1), this.material = new r.h({
                            uniforms: this.uniforms,
                            vertexShader: this.vertexShader,
                            fragmentShader: this.fragmentShader,
                            transparent: !0,
                            defines: {
                                PI: Math.PI,
                                PR: window.devicePixelRatio.toFixed(1)
                            }
                        }), this.mesh = new r.d(this.geometry, this.material), this.mesh.position.x = this.offset.x, this.mesh.position.y = this.offset.y, this.mesh.scale.set(this.sizes.x, this.sizes.y, 1), this.scene.mainScene.add(this.mesh), this.mainImage.classList.add("is-loaded")
                    }
                }, {
                    key: "move",
                    value: function () {
                        this.mesh && (this.getBounds(), o.a.set(this.mesh.position, {
                            x: this.offset.x,
                            y: this.offset.y
                        }))
                    }
                }, {
                    key: "update",
                    value: function () {
                        this.mesh && (this.move(), this.isHovering && (this.uniforms.u_time.value += this.clock.getDelta()))
                    }
                }, {
                    key: "getBounds",
                    value: function () {
                        var e = this.mainImage.getBoundingClientRect(),
                            t = e.width,
                            n = e.height,
                            o = e.left,
                            i = e.top;
                        this.sizes.equals(new r.j(t, n)) || this.sizes.set(t, n), this.offset.equals(new r.j(o - window.innerWidth / 2 + t / 2, -i + window.innerHeight / 2 - n / 2)) || this.offset.set(o - window.innerWidth / 2 + t / 2, -i + window.innerHeight / 2 - n / 2)
                    }
                }, {
                    key: "preload",
                    value: function (e, t, n) {
                        var o = this,
                            r = 0,
                            i = e.length;
                        e.forEach((function (e) {
                            ! function (e, n) {
                                var r = o.loader.load(e, n);
                                r.center.set(.5, .5), t.push(r)
                            }(e, (function () {
                                (r += 1) === i && n()
                            }))
                        }))
                    }
                }]) && s(n.prototype, c), l && s(n, l), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/home/hover-effect/js/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var o = n("./src/js/home/hover-effect/js/Stage.js");

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var i = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.init()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "init",
                value: function () {
                    var e = window.APP || {},
                        t = function () {
                            window.APP = e, document.body.contains(document.querySelector("#scene")) && (e.Stage = new o.a)
                        };
                    "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? t() : document.addEventListener("DOMContentLoaded", t)
                }
            }]) && r(t.prototype, n), i && r(t, i), e
        }()
    },
    "./src/js/home/hover-effect/js/utils/utils.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var o = n("./node_modules/three/build/three.module.js"),
            r = function (e, t) {
                var n = e.x,
                    r = e.y,
                    s = t.width,
                    c = t.height,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    u = a(i(o.c.degToRad(l)), [n, r]),
                    f = {
                        w: u[0] / s,
                        h: u[1] / c
                    },
                    h = 1 / Math.max(f.w, f.h);
                return new o.j(f.w * h, f.h * h)
            },
            i = function (e) {
                return [Math.cos(e), -Math.sin(e), Math.sin(e), Math.cos(e)]
            },
            a = function (e, t) {
                var n = e[0],
                    o = e[1],
                    r = e[2],
                    i = e[3],
                    a = t[0],
                    s = t[1];
                return [Math.abs(a * n + s * r), Math.abs(a * o + s * i)]
            }
    },
    "./src/js/home/last-section/last-section.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.init()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        if (e("#verticalSlider")[0]) {
                            var t = e(".item"),
                                n = (document.querySelector("#verticalSlider").scrollHeight, o.a.timeline());
                            n.to(t, {
                                duration: 10,
                                y: -2 * window.innerHeight,
                                ease: "none"
                            }).repeat(-1), e(t).hover((function () {
                                n.pause()
                            }), (function () {
                                n.resume()
                            }))
                        }
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/home/scroll-bar/scroll-bar.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return s
            }));
            var o = n("./node_modules/gsap/index.js"),
                r = n("./node_modules/smooth-scrollbar/index.js"),
                i = n("./src/js/scroll-plugin/HorizontalScrollPlugin.js");

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            r.a.use(i.a);
            var s = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.init(), this.hovereffect
                }
                var n, i, s;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        var t, n = r.a.init(document.querySelector(".scroll-area", {
                            continuousScrolling: !1,
                            damping: .05,
                            plugins: {
                                horizontalScroll: {
                                    events: [/wheel/]
                                }
                            }
                        }));
                        r.a.detachStyle();
                        var i = e(".scrollTo");
                        t = e("#contacts, .header-quote .scrollToContact"), e(".work_page")[0] && (t = e("#contacts, #q-intro-scroll .scrollToContact"));
                        var a = e("#news"),
                            s = document.querySelector("#portfolio"),
                            c = document.querySelector("#contactUs"),
                            l = document.querySelector("#thoughts");
                        i.click((function (e) {
                            e.preventDefault(), n.scrollIntoView(s)
                        })), t.click((function (e) {
                            e.preventDefault(), n.scrollIntoView(c)
                        })), a.click((function (e) {
                            e.preventDefault(), n.scrollIntoView(l)
                        }));
                        var u = e("#ourLatest"),
                            f = o.a.timeline({
                                paused: !0
                            }).fromTo(u, {
                                x: "-=20%"
                            }, {
                                duration: 1,
                                x: "+=50%"
                            }),
                            h = e(".slideshow__progress"),
                            d = e("#contact-wrap-something-text"),
                            m = o.a.timeline({
                                paused: !0
                            }).fromTo(d, {
                                x: "-=15%"
                            }, {
                                duration: 1,
                                x: "+=45%"
                            }),
                            p = !1,
                            v = e(".ar-in-fadeIn"),
                            y = e(".good-thoughts-scroll"),
                            g = o.a.timeline().to(y, {
                                duration: 15,
                                y: "-200vh",
                                ease: "none"
                            }).pause(),
                            w = e(".contact-heading"),
                            b = o.a.timeline().to(w, {
                                duration: 15,
                                x: "-200vh",
                                ease: "none"
                            }).pause();
                        n.addListener((function (t) {
                            var n = 100 * t.offset.x / t.limit.x;
                            if (n >= 10 && n < 50 && (f.progress((n - 10) / 60), o.a.to(h, {
                                    duration: .2,
                                    xPercent: 2 * (n - 5)
                                })), n >= 50 && (p || o.a.fromTo(v, {
                                    xPercent: "-8"
                                }, {
                                    duration: .6,
                                    xPercent: 0,
                                    autoAlpha: 1,
                                    stagger: .5
                                }), p = !0), e(".home_page")[0] && n >= 0 && n <= 100) {
                                t.offset.x;
                                var r = (n - 30) / 100;
                                g.progress(r), b.progress(r)
                            }
                            e(".work_page")[0] && n >= 0 && n <= 100 && (t.offset.x, r = (n - 0) / 100, g.progress(r), b.progress(r)), n > 60 && m.progress(.025 * (n - 60))
                        }));
                        var j = location.hash;
                        j && requestAnimationFrame((function () {
                            setTimeout((function () {
                                n.scrollIntoView(document.querySelector(j), {
                                    offsetTop: -n.containerEl.scrollTop
                                })
                            }), 500)
                        }))
                    }
                }]) && a(n.prototype, i), s && a(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/menu/ham-animation.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return a
            }));
            var o = n("./node_modules/gsap/index.js"),
                r = n("./node_modules/gsap/ScrollToPlugin.js");

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            o.a.registerPlugin(r.a);
            var a = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.init()
                }
                var n, r, a;
                return n = t, (r = [{
                    key: "init",
                    value: function () {
                        var t = e("#openNavbar"),
                            n = e("#closeNavbar,#navigationWrap a"),
                            r = (e("#navigationWrap a"), e("#navigationWrap")),
                            i = e(".nav-container-left li"),
                            a = e(".nav-container-right .wow"),
                            s = e(".nav-container-left h5"),
                            c = e(".cross-in"),
                            l = o.a.timeline({
                                paused: !0
                            });
                        l.add(o.a.to(r, {
                            duration: 1,
                            xPercent: 100,
                            onStart: function () {
                                o.a.set(r, {
                                    "z-index": 200
                                })
                            }
                        })), l.add(o.a.from(i, {
                            duration: .8,
                            autoAlpha: 0,
                            x: "-=20",
                            stagger: .5
                        })), l.add(o.a.from(a, {
                            duration: .8,
                            autoAlpha: 0,
                            x: "-20",
                            stagger: .5
                        })), l.add(o.a.from(s, {
                            duration: .8,
                            autoAlpha: 0,
                            x: "-=20"
                        })), l.add(o.a.from(c, {
                            duration: .4,
                            width: 0,
                            stagger: .5
                        }));
                        var u = !0;
                        t.click((function () {
                            1 == u ? (o.a.set(r, {
                                autoAlpha: 1,
                                onComplete: function () {
                                    l.timeScale(2), l.play()
                                }
                            }), u = !1) : 0 == u && (o.a.to(r, {
                                duration: .5,
                                autoAlpha: 0,
                                ease: "power2.out",
                                onComplete: function () {
                                    l.timeScale(50), l.reverse()
                                }
                            }), u = !0)
                        })), n.click((function () {
                            o.a.to(r, {
                                duration: .5,
                                autoAlpha: 0,
                                ease: "power2.out",
                                onComplete: function () {
                                    l.timeScale(50), l.reverse()
                                }
                            }), u = !0
                        }))
                    }
                }]) && i(n.prototype, r), a && i(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/menu/ham-overlay-animaton.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var o = n("./node_modules/gsap/index.js");

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var i = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.DOM = {
                    el: t
                }, this.DOM.reveal = document.createElement("div"), this.DOM.reveal.className = "hover-reveal__img", this.DOM.reveal.style.cssText = "background-image:url(".concat(this.DOM.el.dataset.img, ")"), document.querySelector(".MenuOverlayBackground").appendChild(this.DOM.reveal), this.initEvents()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "initEvents",
                value: function () {
                    var e = this;
                    this.mouseenterFn = function (t) {
                        e.showImage()
                    }, this.mouseleaveFn = function () {
                        e.hideImage()
                    }, this.DOM.el.addEventListener("mouseenter", this.mouseenterFn), this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn)
                }
            }, {
                key: "showImage",
                value: function () {
                    var e = this;
                    o.a.killTweensOf(this.DOM.reveal), this.tl = o.a.timeline({
                        onStart: function () {
                            o.a.set(e.DOM.reveal, {
                                autoAlpha: 0,
                                scale: 1.5
                            })
                        }
                    }).add("begin").add(o.a.to(this.DOM.reveal, {
                        duration: 1,
                        scale: 1,
                        autoAlpha: .2
                    }), "begin")
                }
            }, {
                key: "hideImage",
                value: function () {
                    var e = this;
                    o.a.killTweensOf(this.DOM.reveal), this.tl = o.a.timeline({
                        onComplete: function () {
                            o.a.set(e.DOM.reveal, {
                                autoAlpha: 0,
                                scale: 1.5
                            })
                        }
                    }).add("begin").add(o.a.to(this.DOM.reveal, {
                        duration: .5,
                        scale: 1.2,
                        autoAlpha: 0
                    }), "begin")
                }
            }]) && r(t.prototype, n), i && r(t, i), e
        }()
    },
    "./src/js/menu/menu.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        }));
        var o = n("./src/js/menu/ham-animation.js"),
            r = n("./src/js/menu/ham-overlay-animaton.js");

        function i(e) {
            return function (e) {
                if (Array.isArray(e)) return a(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var c = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.init()
            }
            var t, n, a;
            return t = e, (n = [{
                key: "init",
                value: function () {
                    new o.a, window.screen.width > 767 && i(document.querySelectorAll(".main_nav a")).forEach((function (e) {
                        return new r.a(e)
                    }))
                }
            }]) && s(t.prototype, n), a && s(t, a), e
        }()
    },
    "./src/js/pre-load/entry-transition.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elems = {
                        clipPathElm: e(".preload-container")
                    }, this.TL = o.a.timeline()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "animate",
                    value: function () {
                        return this.TL.fromTo(this.elems.clipPathElm, {
                            css: {
                                "clip-path": "polygon(0% 0%, 100% 0%, 110% 100%, 0% 100%)"
                            }
                        }, {
                            duration: 1,
                            css: {
                                "transform-origin": "top right",
                                "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            },
                            stagger: -.03,
                            ease: "power3.inOut"
                        }), this.TL
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/pre-load/pre-animation.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return a
            }));
            var o = n("./src/js/pre-load/entry-transition.js"),
                r = n("./node_modules/gsap/index.js");

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var a = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.currentVal = {
                        val: 8
                    }, this.elems = {
                        perText: e(".preload-container #preload-percentage"),
                        perBar: e("#preload-progress-container .preload-progress"),
                        fadeElems: [e("#preload-percentage"), e("#preload-progress-container")],
                        showElems: e("#pre-nika-logo")
                    }, this.called = !1, this.TL = r.a.timeline(), this.entry_transition = new o.a, this.init()
                }
                var n, a, s;
                return n = t, (a = [{
                    key: "init",
                    value: function () {
                        r.a.fromTo(this.elems.fadeElems, {
                            y: "+=10",
                            autoAlpha: 0
                        }, {
                            duration: .6,
                            y: "-=10",
                            autoAlpha: 1
                        })
                    }
                }, {
                    key: "animate",
                    value: function (e) {
                        var t = this;
                        r.a.to(this.currentVal, {
                            duration: 2,
                            val: e,
                            roundProps: "val",
                            onUpdate: function () {
                                t.elems.perText.text("".concat(t.currentVal.val, " %")), r.a.set(t.elems.perBar, {
                                    xPercent: "".concat(t.currentVal.val)
                                })
                            },
                            onComplete: function () {
                                r.a.delayedCall(.3, (function () {
                                    t.timelineStart()
                                }))
                            }
                        })
                    }
                }, {
                    key: "timelineStart",
                    value: function () {
                        this.called || (this.called = !0, this.TL.to(this.elems.fadeElems, {
                            duration: .5,
                            y: "-=10",
                            autoAlpha: 0
                        }).to(this.elems.showElems, .5, {
                            y: "-=50",
                            autoAlpha: 1
                        }).add(this.entry_transition.animate()))
                    }
                }]) && i(n.prototype, a), s && i(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/pre-load/pre-load.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./src/js/pre-load/pre-animation.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.init()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        this.pre_animate = new o.a, this.progress = 0;
                        for (var t = e("*"), n = t.length, r = 0; r < n; r++) this.set_element(t[r], n)
                    }
                }, {
                    key: "set_element",
                    value: function (t, n) {
                        var o = 100 / n;
                        1 == e(t).length && this.pre_animate.animate(this.progress), this.progress = this.progress + o
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/scroll-plugin/HorizontalScrollPlugin.js": function (e, t, n) {
        "use strict";

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t) {
            return (a = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function s(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = l(e);
                if (t) {
                    var r = l(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return c(this, n)
            }
        }

        function c(e, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        n.d(t, "a", (function () {
            return u
        })), n.d(t, "b", (function () {
            return f
        }));
        var u = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t)
                }(l, e);
                var t, n, o, c = s(l);

                function l() {
                    return r(this, l), c.apply(this, arguments)
                }
                return t = l, (n = [{
                    key: "transformDelta",
                    value: function (e, t) {
                        return this.getSpeed(e), 0 == e.x ? {
                            x: e.y,
                            y: e.y
                        } : {
                            x: e.x,
                            y: e.x
                        }
                    }
                }, {
                    key: "getSpeed",
                    value: function (e) {
                        f = 0 == e.x ? e.y : e.x
                    }
                }]) && i(t.prototype, n), o && i(t, o), l
            }(n("./node_modules/smooth-scrollbar/index.js").a.ScrollbarPlugin),
            f = 0;
        u.pluginName = "horizontalScroll", u.defaultOptions = {
            events: []
        }
    },
    "./src/js/theme/theme.js": function (e, t, n) {
        "use strict";
        (function (e) {
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            n.d(t, "a", (function () {
                return r
            }));
            var r = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.$el = e(".theme-switch"), this.init()
                }
                var n, r, i;
                return n = t, (r = [{
                    key: "init",
                    value: function () {
                        e(window).width() < 961 && window.localStorage.setItem("theme", "dark");
                        var t = window.localStorage.getItem("theme");
                        "dark" === t && (e("html").attr("data-theme", "dark"), this.$el.attr("data-mode", "dark")), "light" === t && (e("html").attr("data-theme", "light"), this.$el.attr("data-mode", "light")), this.$el.click((function (t) {
                            var n = e(this),
                                o = n.attr("data-mode"),
                                r = window.localStorage.getItem("theme");
                            "dark" !== o && "dark" !== r || (e("html").attr("data-theme", "light"), n.attr("data-mode", "light"), window.localStorage.setItem("theme", "light")), "light" !== o && "light" !== r || (e("html").attr("data-theme", "dark"), n.attr("data-mode", "dark"), window.localStorage.setItem("theme", "dark"))
                        }));
                        var n = window.localStorage.getItem("cPop");
                        console.log(t), "hide" === n && e(".cookies-notice").remove(), e(".cookies-notice__close-btn").click((function (t) {
                            e(".cookies-notice").addClass("is-closed"), setTimeout((function () {
                                e(".cookies-notice").remove()
                            }), 700), window.localStorage.setItem("cPop", "hide")
                        }))
                    }
                }]) && o(n.prototype, r), i && o(n, i), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/work/fixed-links/fixed-links.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return a
            }));
            var o = n("./node_modules/gsap/index.js"),
                r = n("./src/js/work/next-animation/next-animation.js");

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var a = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elems = {
                        fixedElems: [e(".projectsActions .back-top-list"), e(".projectsActions .website-link")],
                        arrow: e(".projectActions_wrap .nextSection")
                    }, this.lineAnimation = new r.a, this.init(), this.showfixed = !1
                }
                var n, a, s;
                return n = t, (a = [{
                    key: "init",
                    value: function () {
                        o.a.set(this.elems.fixedElems, {
                            autoAlpha: 0
                        }), this.lineAnimation.TL.play(), this.showfixed = !1
                    }
                }, {
                    key: "displayElems",
                    value: function (e) {
                        e < .3 && (this.lineAnimation.TL.paused && this.lineAnimation.TL.seek(0).play(), o.a.to(this.elems.fixedElems, {
                            duraion: .5,
                            autoAlpha: 0
                        }), o.a.to(this.elems.arrow, {
                            duraion: .5,
                            autoAlpha: 1
                        }), this.showfixed = !1), e >= .3 && e < 96 && (this.showfixed || (o.a.to(this.elems.fixedElems, .5, {
                            duraion: .5,
                            autoAlpha: 1,
                            onComplete: function () {
                                this.showfixed = !0
                            }
                        }), o.a.to(this.elems.arrow, {
                            duration: .5,
                            autoAlpha: 0
                        }), this.lineAnimation.TL.pause())), e >= 97 && (o.a.to(this.elems.fixedElems, {
                            duration: .5,
                            autoAlpha: 0
                        }), this.showfixed = !1)
                    }
                }]) && i(n.prototype, a), s && i(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/work/next-animation/next-animation.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.elem = e("#q-intro-scroll .st0"), this.TL = o.a.timeline(), this.initAnimation()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "initAnimation",
                    value: function () {
                        var e = o.a.timeline();
                        e.fromTo(this.elem, {
                            "stroke-dashoffset": 430
                        }, {
                            duration: .65,
                            "stroke-dashoffset": 0
                        }).yoyo(!0).repeatDelay(1).repeat(-1);
                        var t = o.a.timeline();
                        t.fromTo(this.elem, {
                            autoAlpha: 1,
                            x: "-=20"
                        }, {
                            duration: .65,
                            autoAlpha: 1,
                            x: 0
                        }).yoyo(!0).repeatDelay(1).repeat(-1), this.TL.add(e, 0).add(t, 0).pause()
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/work/story-details-wrap/story-details-wrap.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var i = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.el = e(".storyDetails_wrap *"), this.isVisible = !1, this.TL = o.a.timeline({
                        paused: !0
                    }), this.init()
                }
                var n, i, a;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        var e = this;
                        o.a.set(this.el, {
                            autoAlpha: 0,
                            x: "-=5"
                        }), this.TL.to(this.el, {
                            duration: .6,
                            autoAlpha: 1,
                            x: 0,
                            stagger: .4
                        }).eventCallback("onComplete", (function () {
                            e.isVisible = !0
                        }))
                    }
                }]) && r(n.prototype, i), a && r(n, a), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/work/used-in-project/UsedInProject.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return s
            }));
            var o = n("./node_modules/gsap/index.js");

            function r(e) {
                return function (e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var s = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.TL = o.a.timeline({
                        paused: !0
                    }), this.isVisible = !1, this.fisrt = [e(".useIn_wrap h3"), e(".useIn_wrap .useIn_adv_list")[0], e(".useIn_wrap .useIn_adv_list")[1], e(".useIn_wrap p"), e(".authorImg")], this.last = e(".useInRight_wrap"), this.init()
                }
                var n, i, s;
                return n = t, (i = [{
                    key: "init",
                    value: function () {
                        this.hideUsedInProject(), this.initTL()
                    }
                }, {
                    key: "hideUsedInProject",
                    value: function () {
                        o.a.set([].concat(r(this.fisrt), [this.last]), {
                            autoAlpha: 0,
                            x: "-=10"
                        })
                    }
                }, {
                    key: "initTL",
                    value: function () {
                        var e = this;
                        this.TL.to(this.fisrt, {
                            duration: .8,
                            autoAlpha: 1,
                            x: 0,
                            stagger: .6
                        }).to(this.last, {
                            duration: .8,
                            autoAlpha: 1,
                            x: 0
                        }, "-=0.2").eventCallback("onComplete", (function () {
                            e.isVisible = !0
                        }))
                    }
                }]) && a(n.prototype, i), s && a(n, s), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./src/js/work/work-detail.js": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return u
            }));
            var o = n("./node_modules/gsap/index.js"),
                r = n("./node_modules/smooth-scrollbar/index.js"),
                i = n("./src/js/scroll-plugin/HorizontalScrollPlugin.js"),
                a = n("./src/js/work/used-in-project/UsedInProject.js"),
                s = n("./src/js/work/story-details-wrap/story-details-wrap.js"),
                c = n("./src/js/work/fixed-links/fixed-links.js");

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            n("./node_modules/imagesloaded/imagesloaded.js");
            r.a.use(i.a);
            var u = function () {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.$els = {
                        siteScreen: e(".siteScreensList"),
                        storyScreen: e(".storyscreenImg"),
                        projectTitle: e(".projectTitle_wrap"),
                        usedinProject: new a.a,
                        storyDetails: new s.a,
                        fixedLinks: new c.a
                    }, this.init(), window.screen.width > 767 && (this.bindEvents(), this.initSiteScreenTL(), this.initStoryScreenTL(), this._init, this._bindEvents, this._initSiteScreenTL, this._initStoryScreenTL), e(".kill_delayedCall").click((function (e) {
                        this._init = null, this._bindEvents = null, this._initSiteScreenTL = null, this._initStoryScreenTL = null
                    }))
                }
                var n, u, f;
                return n = t, (u = [{
                    key: "init",
                    value: function () {
                        var t = this;
                        e("#contacts, .scrollToContact").attr("href", "index.html#contactUs"), e("#news").attr("href", "index.html#thoughts"), window.screen.width < 768 && requestAnimationFrame((function () {
                            o.a.to(".workDetails .projectTitle_wrap", {
                                duration: 1,
                                x: "-15%",
                                scrollTrigger: {
                                    trigger: ".workDetails .projectTitle_wrap",
                                    start: "top " + e(".workDetails .projectTitle_wrap").offset().top,
                                    end: "bottom top",
                                    scrub: !0
                                },
                                ease: "none"
                            }), o.a.from(".storyPlaceholder", {
                                duration: 1,
                                top: 0,
                                scrollTrigger: {
                                    trigger: ".storyImg_wrap",
                                    start: "top top",
                                    end: "bottom bottom",
                                    scrub: !0
                                },
                                ease: "none"
                            })
                        })), window.screen.width > 767 && (this._init = function () {
                            t._scroll = r.a.init(document.querySelector(".scroll-area", {
                                continuousScrolling: !1,
                                damping: .05,
                                plugins: {
                                    horizontalScroll: {
                                        events: [/wheel/]
                                    }
                                }
                            })), r.a.detachStyle();
                            var e = location.hash;
                            e && requestAnimationFrame((function () {
                                var t = this;
                                setTimeout((function () {
                                    t._scroll.scrollIntoView(document.querySelector(e), {
                                        offsetTop: -t._scroll.containerEl.scrollTop
                                    })
                                }), 500)
                            }))
                        }, this._init())
                    }
                }, {
                    key: "bindEvents",
                    value: function () {
                        var t = this;
                        this._bindEvents = function () {
                            t._scroll.addListener((function (e) {
                                t.onScroll(e)
                            })), e("#q-intro-scroll a").click((function () {
                                t._scroll.scrollIntoView(document.querySelector("#second-section"))
                            }))
                        }, this._bindEvents()
                    }
                }, {
                    key: "onScroll",
                    value: function (e) {
                        var t = 100 * e.offset.x / e.limit.x;
                        this.$els.fixedLinks.displayElems(t, this.projectTitleAnim), t <= 20 && this.projectTitleAnim(), t <= 65 && this.siteScreenTL.progress(t / 65), t >= 35 && (this.$els.storyDetails.isVisible || this.$els.storyDetails.TL.play()), t >= 70 && (this.$els.usedinProject.isVisible || (this.$els.usedinProject.TL.play(), this.$els.usedinProject.TL.timeScale(1 + i.b / 60))), t >= 50 && this.storyScreenTL.progress((t - 50) / 50)
                    }
                }, {
                    key: "initSiteScreenTL",
                    value: function () {
                        var e = this;
                        this._initSiteScreenTL = function () {
                            setTimeout((function () {
                                // var t = document.querySelector(".siteScreens").clientHeight,
                                //     n = document.querySelector(".siteScreensList").clientHeight,
                                //     r = t - n;
                                console.log(t - n), e.siteScreenTL = o.a.timeline({
                                    paused: !0
                                }).to(e.$els.siteScreen, {
                                    duration: 2,
                                    y: r,
                                    ease: "none"
                                })
                            }), 500)
                        }, this._initSiteScreenTL()
                    }
                }, {
                    key: "initStoryScreenTL",
                    value: function () {
                        var e = this;
                        this._initStoryScreenTL = function () {
                            e.storyScreenTL = o.a.timeline({
                                paused: !0
                            }).fromTo(e.$els.storyScreen, {
                                y: "-=50%"
                            }, {
                                duration: 2,
                                y: "+=60%"
                            })
                        }, this._initStoryScreenTL()
                    }
                }, {
                    key: "projectTitleAnim",
                    value: function () {
                        var e = this;
                        this._projectTitleAnim = function () {
                            o.a.to(e.$els.projectTitle, {
                                duaration: .4,
                                x: .5 * e._scroll.offset.x
                            })
                        }, this._projectTitleAnim()
                    }
                }]) && l(n.prototype, u), f && l(n, f), t
            }()
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    }
});
//# sourceMappingURL=app.js.map