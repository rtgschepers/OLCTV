/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery)
}(this, function (t, e) {
    "use strict";
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function r() {
        return (r = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
    }

    for (var o, s, a, l, c, h, f, u, d, p, g, m, _, v, E, y, b, T, C, w, I, A, D, S, O, N, k = function (t) {
        var e = !1;

        function n(e) {
            var n = this, r = !1;
            return t(this).one(i.TRANSITION_END, function () {
                r = !0
            }), setTimeout(function () {
                r || i.triggerTransitionEnd(n)
            }, e), this
        }

        var i = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, getSelectorFromElement: function (e) {
                var n, i = e.getAttribute("data-target");
                i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return t(document).find(i).length > 0 ? i : null
                } catch (t) {
                    return null
                }
            }, reflow: function (t) {
                return t.offsetHeight
            }, triggerTransitionEnd: function (n) {
                t(n).trigger(e.end)
            }, supportsTransitionEnd: function () {
                return Boolean(e)
            }, isElement: function (t) {
                return (t[0] || t).nodeType
            }, typeCheckConfig: function (t, e, n) {
                for (var r in n)if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var o = n[r], s = e[r], a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                    if (!new RegExp(o).test(a))throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                }
                var l
            }
        };
        return e = ("undefined" == typeof window || !window.QUnit) && {end: "transitionend"}, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
            bindType: e.end,
            delegateType: e.end,
            handle: function (e) {
                if (t(e.target).is(this))return e.handleObj.handler.apply(this, arguments)
            }
        }), i
    }(e = e && e.hasOwnProperty("default") ? e.default : e), L = (s = "alert", l = "." + (a = "bs.alert"), c = (o = e).fn[s], h = {
        CLOSE: "close" + l,
        CLOSED: "closed" + l,
        CLICK_DATA_API: "click" + l + ".data-api"
    }, f = "alert", u = "fade", d = "show", p = function () {
        function t(t) {
            this._element = t
        }

        var e = t.prototype;
        return e.close = function (t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }, e.dispose = function () {
            o.removeData(this._element, a), this._element = null
        }, e._getRootElement = function (t) {
            var e = k.getSelectorFromElement(t), n = !1;
            return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n
        }, e._triggerCloseEvent = function (t) {
            var e = o.Event(h.CLOSE);
            return o(t).trigger(e), e
        }, e._removeElement = function (t) {
            var e = this;
            o(t).removeClass(d), k.supportsTransitionEnd() && o(t).hasClass(u) ? o(t).one(k.TRANSITION_END, function (n) {
                return e._destroyElement(t, n)
            }).emulateTransitionEnd(150) : this._destroyElement(t)
        }, e._destroyElement = function (t) {
            o(t).detach().trigger(h.CLOSED).remove()
        }, t._jQueryInterface = function (e) {
            return this.each(function () {
                var n = o(this), i = n.data(a);
                i || (i = new t(this), n.data(a, i)), "close" === e && i[e](this)
            })
        }, t._handleDismiss = function (t) {
            return function (e) {
                e && e.preventDefault(), t.close(this)
            }
        }, i(t, null, [{
            key: "VERSION", get: function () {
                return "4.0.0"
            }
        }]), t
    }(), o(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), o.fn[s] = p._jQueryInterface, o.fn[s].Constructor = p, o.fn[s].noConflict = function () {
        return o.fn[s] = c, p._jQueryInterface
    }, p), P = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", C = "focus", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', A = "input", D = ".active", S = ".btn", O = {
        CLICK_DATA_API: "click" + v + E,
        FOCUS_BLUR_DATA_API: "focus" + v + E + " blur" + v + E
    }, N = function () {
        function t(t) {
            this._element = t
        }

        var e = t.prototype;
        return e.toggle = function () {
            var t = !0, e = !0, n = g(this._element).closest(I)[0];
            if (n) {
                var i = g(this._element).find(A)[0];
                if (i) {
                    if ("radio" === i.type)if (i.checked && g(this._element).hasClass(b))t = !1; else {
                        var r = g(n).find(D)[0];
                        r && g(r).removeClass(b)
                    }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))return;
                        i.checked = !g(this._element).hasClass(b), g(i).trigger("change")
                    }
                    i.focus(), e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b)
        }, e.dispose = function () {
            g.removeData(this._element, _), this._element = null
        }, t._jQueryInterface = function (e) {
            return this.each(function () {
                var n = g(this).data(_);
                n || (n = new t(this), g(this).data(_, n)), "toggle" === e && n[e]()
            })
        }, i(t, null, [{
            key: "VERSION", get: function () {
                return "4.0.0"
            }
        }]), t
    }(), g(document).on(O.CLICK_DATA_API, w, function (t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle")
    }).on(O.FOCUS_BLUR_DATA_API, w, function (t) {
        var e = g(t.target).closest(S)[0];
        g(e).toggleClass(C, /^focus(in)?$/.test(t.type))
    }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () {
        return g.fn[m] = y, N._jQueryInterface
    }, N), x = function (t) {
        var e = "carousel", n = "bs.carousel", o = "." + n, s = t.fn[e], a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, c = "next", h = "prev", f = "left", u = "right", d = {
            SLIDE: "slide" + o,
            SLID: "slid" + o,
            KEYDOWN: "keydown" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o,
            TOUCHEND: "touchend" + o,
            LOAD_DATA_API: "load" + o + ".data-api",
            CLICK_DATA_API: "click" + o + ".data-api"
        }, p = "carousel", g = "active", m = "slide", _ = "carousel-item-right", v = "carousel-item-left", E = "carousel-item-next", y = "carousel-item-prev", b = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, T = function () {
            function s(e, n) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(b.INDICATORS)[0], this._addEventListeners()
            }

            var T = s.prototype;
            return T.next = function () {
                this._isSliding || this._slide(c)
            }, T.nextWhenVisible = function () {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, T.prev = function () {
                this._isSliding || this._slide(h)
            }, T.pause = function (e) {
                e || (this._isPaused = !0), t(this._element).find(b.NEXT_PREV)[0] && k.supportsTransitionEnd() && (k.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, T.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, T.to = function (e) {
                var n = this;
                this._activeElement = t(this._element).find(b.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))if (this._isSliding)t(this._element).one(d.SLID, function () {
                    return n.to(e)
                }); else {
                    if (i === e)return this.pause(), void this.cycle();
                    var r = e > i ? c : h;
                    this._slide(r, this._items[e])
                }
            }, T.dispose = function () {
                t(this._element).off(o), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, T._getConfig = function (t) {
                return t = r({}, a, t), k.typeCheckConfig(e, t, l), t
            }, T._addEventListeners = function () {
                var e = this;
                this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(d.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, T._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, T._getItemIndex = function (e) {
                return this._items = t.makeArray(t(e).parent().find(b.ITEM)), this._items.indexOf(e)
            }, T._getItemByDirection = function (t, e) {
                var n = t === c, i = t === h, r = this._getItemIndex(e), o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap)return e;
                var s = (r + (t === h ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, T._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e), r = this._getItemIndex(t(this._element).find(b.ACTIVE_ITEM)[0]), o = t.Event(d.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: r,
                    to: i
                });
                return t(this._element).trigger(o), o
            }, T._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    t(this._indicatorsElement).find(b.ACTIVE).removeClass(g);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(g)
                }
            }, T._slide = function (e, n) {
                var i, r, o, s = this, a = t(this._element).find(b.ACTIVE_ITEM)[0], l = this._getItemIndex(a), h = n || a && this._getItemByDirection(e, a), p = this._getItemIndex(h), T = Boolean(this._interval);
                if (e === c ? (i = v, r = E, o = f) : (i = _, r = y, o = u), h && t(h).hasClass(g))this._isSliding = !1; else if (!this._triggerSlideEvent(h, o).isDefaultPrevented() && a && h) {
                    this._isSliding = !0, T && this.pause(), this._setActiveIndicatorElement(h);
                    var C = t.Event(d.SLID, {relatedTarget: h, direction: o, from: l, to: p});
                    k.supportsTransitionEnd() && t(this._element).hasClass(m) ? (t(h).addClass(r), k.reflow(h), t(a).addClass(i), t(h).addClass(i), t(a).one(k.TRANSITION_END, function () {
                        t(h).removeClass(i + " " + r).addClass(g), t(a).removeClass(g + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                            return t(s._element).trigger(C)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(h).addClass(g), this._isSliding = !1, t(this._element).trigger(C)), T && this.cycle()
                }
            }, s._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n), o = r({}, a, t(this).data());
                    "object" == typeof e && (o = r({}, o, e));
                    var l = "string" == typeof e ? e : o.slide;
                    if (i || (i = new s(this, o), t(this).data(n, i)), "number" == typeof e)i.to(e); else if ("string" == typeof l) {
                        if ("undefined" == typeof i[l])throw new TypeError('No method named "' + l + '"');
                        i[l]()
                    } else o.interval && (i.pause(), i.cycle())
                })
            }, s._dataApiClickHandler = function (e) {
                var i = k.getSelectorFromElement(this);
                if (i) {
                    var o = t(i)[0];
                    if (o && t(o).hasClass(p)) {
                        var a = r({}, t(o).data(), t(this).data()), l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1), s._jQueryInterface.call(t(o), a), l && t(o).data(n).to(l), e.preventDefault()
                    }
                }
            }, i(s, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return a
                }
            }]), s
        }();
        return t(document).on(d.CLICK_DATA_API, b.DATA_SLIDE, T._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
            t(b.DATA_RIDE).each(function () {
                var e = t(this);
                T._jQueryInterface.call(e, e.data())
            })
        }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
            return t.fn[e] = s, T._jQueryInterface
        }, T
    }(e), R = function (t) {
        var e = "collapse", n = "bs.collapse", o = "." + n, s = t.fn[e], a = {
            toggle: !0,
            parent: ""
        }, l = {toggle: "boolean", parent: "(string|element)"}, c = {
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            CLICK_DATA_API: "click" + o + ".data-api"
        }, h = "show", f = "collapse", u = "collapsing", d = "collapsed", p = "width", g = "height", m = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, _ = function () {
            function o(e, n) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = t(m.DATA_TOGGLE), r = 0; r < i.length; r++) {
                    var o = i[r], s = k.getSelectorFromElement(o);
                    null !== s && t(s).filter(e).length > 0 && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var s = o.prototype;
            return s.toggle = function () {
                t(this._element).hasClass(h) ? this.hide() : this.show()
            }, s.show = function () {
                var e, i, r = this;
                if (!this._isTransitioning && !t(this._element).hasClass(h) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(m.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (i = t(e).not(this._selector).data(n)) && i._isTransitioning))) {
                    var s = t.Event(c.SHOW);
                    if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                        e && (o._jQueryInterface.call(t(e).not(this._selector), "hide"), i || t(e).data(n, null));
                        var a = this._getDimension();
                        t(this._element).removeClass(f).addClass(u), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = function () {
                            t(r._element).removeClass(u).addClass(f).addClass(h), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(c.SHOWN)
                        };
                        if (k.supportsTransitionEnd()) {
                            var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                            t(this._element).one(k.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[p] + "px"
                        } else l()
                    }
                }
            }, s.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(h)) {
                    var n = t.Event(c.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", k.reflow(this._element), t(this._element).addClass(u).removeClass(f).removeClass(h), this._triggerArray.length > 0)for (var r = 0; r < this._triggerArray.length; r++) {
                            var o = this._triggerArray[r], s = k.getSelectorFromElement(o);
                            if (null !== s)t(s).hasClass(h) || t(o).addClass(d).attr("aria-expanded", !1)
                        }
                        this.setTransitioning(!0);
                        var a = function () {
                            e.setTransitioning(!1), t(e._element).removeClass(u).addClass(f).trigger(c.HIDDEN)
                        };
                        this._element.style[i] = "", k.supportsTransitionEnd() ? t(this._element).one(k.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                    }
                }
            }, s.setTransitioning = function (t) {
                this._isTransitioning = t
            }, s.dispose = function () {
                t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, s._getConfig = function (t) {
                return (t = r({}, a, t)).toggle = Boolean(t.toggle), k.typeCheckConfig(e, t, l), t
            }, s._getDimension = function () {
                return t(this._element).hasClass(p) ? p : g
            }, s._getParent = function () {
                var e = this, n = null;
                k.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return t(n).find(i).each(function (t, n) {
                    e._addAriaAndCollapsedClass(o._getTargetFromElement(n), [n])
                }), n
            }, s._addAriaAndCollapsedClass = function (e, n) {
                if (e) {
                    var i = t(e).hasClass(h);
                    n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                }
            }, o._getTargetFromElement = function (e) {
                var n = k.getSelectorFromElement(e);
                return n ? t(n)[0] : null
            }, o._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this), s = i.data(n), l = r({}, a, i.data(), "object" == typeof e && e);
                    if (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1), s || (s = new o(this, l), i.data(n, s)), "string" == typeof e) {
                        if ("undefined" == typeof s[e])throw new TypeError('No method named "' + e + '"');
                        s[e]()
                    }
                })
            }, i(o, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return a
                }
            }]), o
        }();
        return t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this), r = k.getSelectorFromElement(this);
            t(r).each(function () {
                var e = t(this), r = e.data(n) ? "toggle" : i.data();
                _._jQueryInterface.call(e, r)
            })
        }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
            return t.fn[e] = s, _._jQueryInterface
        }, _
    }(e), j = "undefined" != typeof window && "undefined" != typeof document, H = ["Edge", "Trident", "Firefox"], M = 0, W = 0; W < H.length; W += 1)if (j && navigator.userAgent.indexOf(H[W]) >= 0) {
        M = 1;
        break
    }
    var U = j && window.Promise ? function (t) {
        var e = !1;
        return function () {
            e || (e = !0, window.Promise.resolve().then(function () {
                e = !1, t()
            }))
        }
    } : function (t) {
        var e = !1;
        return function () {
            e || (e = !0, setTimeout(function () {
                e = !1, t()
            }, M))
        }
    };

    function B(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function F(t, e) {
        if (1 !== t.nodeType)return [];
        var n = getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function K(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function V(t) {
        if (!t)return document.body;
        switch (t.nodeName) {
            case"HTML":
            case"BODY":
                return t.ownerDocument.body;
            case"#document":
                return t.body
        }
        var e = F(t), n = e.overflow, i = e.overflowX, r = e.overflowY;
        return /(auto|scroll)/.test(n + r + i) ? t : V(K(t))
    }

    function Q(t) {
        var e = t && t.offsetParent, n = e && e.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === F(e, "position") ? Q(e) : e : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function Y(t) {
        return null !== t.parentNode ? Y(t.parentNode) : t
    }

    function G(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, r = n ? e : t, o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(r))return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Q(s.firstElementChild) !== s ? Q(l) : l;
        var c = Y(t);
        return c.host ? G(c.host, e) : G(t, Y(e).host)
    }

    function q(t) {
        var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e]
        }
        return t[e]
    }

    function z(t, e) {
        var n = "x" === e ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    var X = void 0, Z = function () {
        return void 0 === X && (X = -1 !== navigator.appVersion.indexOf("MSIE 10")), X
    };

    function J(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Z() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }

    function $() {
        var t = document.body, e = document.documentElement, n = Z() && getComputedStyle(e);
        return {height: J("Height", t, e, n), width: J("Width", t, e, n)}
    }

    var tt = function (t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, et = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), nt = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }, it = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function rt(t) {
        return it({}, t, {right: t.left + t.width, bottom: t.top + t.height})
    }

    function ot(t) {
        var e = {};
        if (Z())try {
            e = t.getBoundingClientRect();
            var n = q(t, "top"), i = q(t, "left");
            e.top += n, e.left += i, e.bottom += n, e.right += i
        } catch (t) {
        } else e = t.getBoundingClientRect();
        var r = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }, o = "HTML" === t.nodeName ? $() : {}, s = o.width || t.clientWidth || r.right - r.left, a = o.height || t.clientHeight || r.bottom - r.top, l = t.offsetWidth - s, c = t.offsetHeight - a;
        if (l || c) {
            var h = F(t);
            l -= z(h, "x"), c -= z(h, "y"), r.width -= l, r.height -= c
        }
        return rt(r)
    }

    function st(t, e) {
        var n = Z(), i = "HTML" === e.nodeName, r = ot(t), o = ot(e), s = V(t), a = F(e), l = parseFloat(a.borderTopWidth, 10), c = parseFloat(a.borderLeftWidth, 10), h = rt({
            top: r.top - o.top - l,
            left: r.left - o.left - c,
            width: r.width,
            height: r.height
        });
        if (h.marginTop = 0, h.marginLeft = 0, !n && i) {
            var f = parseFloat(a.marginTop, 10), u = parseFloat(a.marginLeft, 10);
            h.top -= l - f, h.bottom -= l - f, h.left -= c - u, h.right -= c - u, h.marginTop = f, h.marginLeft = u
        }
        return (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (h = function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = q(e, "top"), r = q(e, "left"), o = n ? -1 : 1;
            return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
        }(h, e)), h
    }

    function at(t, e, n, i) {
        var r, o, s, a, l, c, h, f = {top: 0, left: 0}, u = G(t, e);
        if ("viewport" === i)o = (r = u).ownerDocument.documentElement, s = st(r, o), a = Math.max(o.clientWidth, window.innerWidth || 0), l = Math.max(o.clientHeight, window.innerHeight || 0), c = q(o), h = q(o, "left"), f = rt({
            top: c - s.top + s.marginTop,
            left: h - s.left + s.marginLeft,
            width: a,
            height: l
        }); else {
            var d = void 0;
            "scrollParent" === i ? "BODY" === (d = V(K(e))).nodeName && (d = t.ownerDocument.documentElement) : d = "window" === i ? t.ownerDocument.documentElement : i;
            var p = st(d, u);
            if ("HTML" !== d.nodeName || function t(e) {
                    var n = e.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === F(e, "position") || t(K(e)))
                }(u))f = p; else {
                var g = $(), m = g.height, _ = g.width;
                f.top += p.top - p.marginTop, f.bottom = m + p.top, f.left += p.left - p.marginLeft, f.right = _ + p.left
            }
        }
        return f.left += n, f.top += n, f.right -= n, f.bottom -= n, f
    }

    function lt(t, e, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))return t;
        var s = at(n, i, o, r), a = {
            top: {width: s.width, height: e.top - s.top},
            right: {width: s.right - e.right, height: s.height},
            bottom: {width: s.width, height: s.bottom - e.bottom},
            left: {width: e.left - s.left, height: s.height}
        }, l = Object.keys(a).map(function (t) {
            return it({key: t}, a[t], {area: (e = a[t], e.width * e.height)});
            var e
        }).sort(function (t, e) {
            return e.area - t.area
        }), c = l.filter(function (t) {
            var e = t.width, i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight
        }), h = c.length > 0 ? c[0].key : l[0].key, f = t.split("-")[1];
        return h + (f ? "-" + f : "")
    }

    function ct(t, e, n) {
        return st(n, G(e, n))
    }

    function ht(t) {
        var e = getComputedStyle(t), n = parseFloat(e.marginTop) + parseFloat(e.marginBottom), i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {width: t.offsetWidth + i, height: t.offsetHeight + n}
    }

    function ft(t) {
        var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t]
        })
    }

    function ut(t, e, n) {
        n = n.split("-")[0];
        var i = ht(t), r = {
            width: i.width,
            height: i.height
        }, o = -1 !== ["right", "left"].indexOf(n), s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[ft(a)], r
    }

    function dt(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function pt(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function (t, e, n) {
            if (Array.prototype.findIndex)return t.findIndex(function (t) {
                return t[e] === n
            });
            var i = dt(t, function (t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(t, "name", n))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && B(n) && (e.offsets.popper = rt(e.offsets.popper), e.offsets.reference = rt(e.offsets.reference), e = n(e, t))
        }), e
    }

    function gt(t, e) {
        return t.some(function (t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }

    function mt(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
            var r = e[i], o = r ? "" + r + n : t;
            if ("undefined" != typeof document.body.style[o])return o
        }
        return null
    }

    function _t(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function vt(t, e, n, i) {
        n.updateBound = i, _t(t).addEventListener("resize", n.updateBound, {passive: !0});
        var r = V(t);
        return function t(e, n, i, r) {
            var o = "BODY" === e.nodeName, s = o ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {passive: !0}), o || t(V(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function Et() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, _t(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function yt(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function bt(t, e) {
        Object.keys(e).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && yt(e[n]) && (i = "px"), t.style[n] = e[n] + i
        })
    }

    function Tt(t, e, n) {
        var i = dt(t, function (t) {
            return t.name === e
        }), r = !!i && t.some(function (t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!r) {
            var o = "`" + e + "`", s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    var Ct = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], wt = Ct.slice(3);

    function It(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = wt.indexOf(t), i = wt.slice(n + 1).concat(wt.slice(0, n));
        return e ? i.reverse() : i
    }

    var At = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

    function Dt(t, e, n, i) {
        var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i), s = t.split(/(\+|\-)/).map(function (t) {
            return t.trim()
        }), a = s.indexOf(dt(s, function (t) {
            return -1 !== t.search(/,|\s/)
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/, c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map(function (t, i) {
            var r = (1 === i ? !o : o) ? "height" : "width", s = !1;
            return t.reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
            }, []).map(function (t) {
                return function (t, e, n, i) {
                    var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
                    if (!o)return t;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case"%p":
                                a = n;
                                break;
                            case"%":
                            case"%r":
                            default:
                                a = i
                        }
                        return rt(a)[e] / 100 * o
                    }
                    if ("vh" === s || "vw" === s)return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(t, r, e, n)
            })
        })).forEach(function (t, e) {
            t.forEach(function (n, i) {
                yt(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }), r
    }

    var St = {
        placement: "bottom", eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (t) {
                    var e = t.placement, n = e.split("-")[0], i = e.split("-")[1];
                    if (i) {
                        var r = t.offsets, o = r.reference, s = r.popper, a = -1 !== ["bottom", "top"].indexOf(n), l = a ? "left" : "top", c = a ? "width" : "height", h = {
                            start: nt({}, l, o[l]),
                            end: nt({}, l, o[l] + o[c] - s[c])
                        };
                        t.offsets.popper = it({}, s, h[i])
                    }
                    return t
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (t, e) {
                    var n = e.offset, i = t.placement, r = t.offsets, o = r.popper, s = r.reference, a = i.split("-")[0], l = void 0;
                    return l = yt(+n) ? [+n, 0] : Dt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (t, e) {
                    var n = e.boundariesElement || Q(t.instance.popper);
                    t.instance.reference === n && (n = Q(n));
                    var i = at(t.instance.popper, t.instance.reference, e.padding, n);
                    e.boundaries = i;
                    var r = e.priority, o = t.offsets.popper, s = {
                        primary: function (t) {
                            var n = o[t];
                            return o[t] < i[t] && !e.escapeWithReference && (n = Math.max(o[t], i[t])), nt({}, t, n)
                        }, secondary: function (t) {
                            var n = "right" === t ? "left" : "top", r = o[n];
                            return o[t] > i[t] && !e.escapeWithReference && (r = Math.min(o[n], i[t] - ("right" === t ? o.width : o.height))), nt({}, n, r)
                        }
                    };
                    return r.forEach(function (t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        o = it({}, o, s[e](t))
                    }), t.offsets.popper = o, t
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (t) {
                    var e = t.offsets, n = e.popper, i = e.reference, r = t.placement.split("-")[0], o = Math.floor, s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top", c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (t, e) {
                    var n;
                    if (!Tt(t.instance.modifiers, "arrow", "keepTogether"))return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                        if (!(i = t.instance.popper.querySelector(i)))return t
                    } else if (!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var r = t.placement.split("-")[0], o = t.offsets, s = o.popper, a = o.reference, l = -1 !== ["left", "right"].indexOf(r), c = l ? "height" : "width", h = l ? "Top" : "Left", f = h.toLowerCase(), u = l ? "left" : "top", d = l ? "bottom" : "right", p = ht(i)[c];
                    a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]), t.offsets.popper = rt(t.offsets.popper);
                    var g = a[f] + a[c] / 2 - p / 2, m = F(t.instance.popper), _ = parseFloat(m["margin" + h], 10), v = parseFloat(m["border" + h + "Width"], 10), E = g - t.offsets.popper[f] - _ - v;
                    return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (nt(n = {}, f, Math.round(E)), nt(n, u, ""), n), t
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (t, e) {
                    if (gt(t.instance.modifiers, "inner"))return t;
                    if (t.flipped && t.placement === t.originalPlacement)return t;
                    var n = at(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement), i = t.placement.split("-")[0], r = ft(i), o = t.placement.split("-")[1] || "", s = [];
                    switch (e.behavior) {
                        case At.FLIP:
                            s = [i, r];
                            break;
                        case At.CLOCKWISE:
                            s = It(i);
                            break;
                        case At.COUNTERCLOCKWISE:
                            s = It(i, !0);
                            break;
                        default:
                            s = e.behavior
                    }
                    return s.forEach(function (a, l) {
                        if (i !== a || s.length === l + 1)return t;
                        i = t.placement.split("-")[0], r = ft(i);
                        var c, h = t.offsets.popper, f = t.offsets.reference, u = Math.floor, d = "left" === i && u(h.right) > u(f.left) || "right" === i && u(h.left) < u(f.right) || "top" === i && u(h.bottom) > u(f.top) || "bottom" === i && u(h.top) < u(f.bottom), p = u(h.left) < u(n.left), g = u(h.right) > u(n.right), m = u(h.top) < u(n.top), _ = u(h.bottom) > u(n.bottom), v = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && _, E = -1 !== ["top", "bottom"].indexOf(i), y = !!e.flipVariations && (E && "start" === o && p || E && "end" === o && g || !E && "start" === o && m || !E && "end" === o && _);
                        (d || v || y) && (t.flipped = !0, (d || v) && (i = s[l + 1]), y && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = it({}, t.offsets.popper, ut(t.instance.popper, t.offsets.reference, t.placement)), t = pt(t.instance.modifiers, t, "flip"))
                    }), t
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (t) {
                    var e = t.placement, n = e.split("-")[0], i = t.offsets, r = i.popper, o = i.reference, s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = ft(e), t.offsets.popper = rt(r), t
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (t) {
                    if (!Tt(t.instance.modifiers, "hide", "preventOverflow"))return t;
                    var e = t.offsets.reference, n = dt(t.instance.modifiers, function (t) {
                        return "preventOverflow" === t.name
                    }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide)return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide)return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (t, e) {
                    var n = e.x, i = e.y, r = t.offsets.popper, o = dt(t.instance.modifiers, function (t) {
                        return "applyStyle" === t.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== o ? o : e.gpuAcceleration, a = ot(Q(t.instance.popper)), l = {position: r.position}, c = {
                        left: Math.floor(r.left),
                        top: Math.floor(r.top),
                        bottom: Math.floor(r.bottom),
                        right: Math.floor(r.right)
                    }, h = "bottom" === n ? "top" : "bottom", f = "right" === i ? "left" : "right", u = mt("transform"), d = void 0, p = void 0;
                    if (p = "bottom" === h ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && u)l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[h] = 0, l[f] = 0, l.willChange = "transform"; else {
                        var g = "bottom" === h ? -1 : 1, m = "right" === f ? -1 : 1;
                        l[h] = p * g, l[f] = d * m, l.willChange = h + ", " + f
                    }
                    var _ = {"x-placement": t.placement};
                    return t.attributes = it({}, _, t.attributes), t.styles = it({}, l, t.styles), t.arrowStyles = it({}, t.offsets.arrow, t.arrowStyles), t
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (t) {
                    var e, n;
                    return bt(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
                        !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                    }), t.arrowElement && Object.keys(t.arrowStyles).length && bt(t.arrowElement, t.arrowStyles), t
                }, onLoad: function (t, e, n, i, r) {
                    var o = ct(0, e, t), s = lt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s), bt(e, {position: "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, Ot = function () {
        function t(e, n) {
            var i = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            tt(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            }, this.update = U(this.update.bind(this)), this.options = it({}, t.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(it({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                i.options.modifiers[e] = it({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                return it({name: t}, i.options.modifiers[t])
            }).sort(function (t, e) {
                return t.order - e.order
            }), this.modifiers.forEach(function (t) {
                t.enabled && B(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
        }

        return et(t, [{
            key: "update", value: function () {
                return function () {
                    if (!this.state.isDestroyed) {
                        var t = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                        t.offsets.reference = ct(this.state, this.popper, this.reference), t.placement = lt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = ut(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = pt(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                    }
                }.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return function () {
                    return this.state.isDestroyed = !0, gt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[mt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return function () {
                    this.state.eventsEnabled || (this.state = vt(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return Et.call(this)
            }
        }]), t
    }();
    Ot.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ot.placements = Ct, Ot.Defaults = St;
    var Nt = function (t) {
        var e = "dropdown", n = "bs.dropdown", o = "." + n, s = t.fn[e], a = new RegExp("38|40|27"), l = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            CLICK: "click" + o,
            CLICK_DATA_API: "click" + o + ".data-api",
            KEYDOWN_DATA_API: "keydown" + o + ".data-api",
            KEYUP_DATA_API: "keyup" + o + ".data-api"
        }, c = "disabled", h = "show", f = "dropup", u = "dropright", d = "dropleft", p = "dropdown-menu-right", g = "dropdown-menu-left", m = "position-static", _ = '[data-toggle="dropdown"]', v = ".dropdown form", E = ".dropdown-menu", y = ".navbar-nav", b = ".dropdown-menu .dropdown-item:not(.disabled)", T = "top-start", C = "top-end", w = "bottom-start", I = "bottom-end", A = "right-start", D = "left-start", S = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        }, O = {offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)"}, N = function () {
            function s(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var v = s.prototype;
            return v.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass(c)) {
                    var e = s._getParentFromElement(this._element), n = t(this._menu).hasClass(h);
                    if (s._clearMenus(), !n) {
                        var i = {relatedTarget: this._element}, r = t.Event(l.SHOW, i);
                        if (t(e).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof Ot)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                t(e).hasClass(f) && (t(this._menu).hasClass(g) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(m), this._popper = new Ot(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(e).closest(y).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(h), t(e).toggleClass(h).trigger(t.Event(l.SHOWN, i))
                        }
                    }
                }
            }, v.dispose = function () {
                t.removeData(this._element, n), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, v.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, v._addEventListeners = function () {
                var e = this;
                t(this._element).on(l.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, v._getConfig = function (n) {
                return n = r({}, this.constructor.Default, t(this._element).data(), n), k.typeCheckConfig(e, n, this.constructor.DefaultType), n
            }, v._getMenuElement = function () {
                if (!this._menu) {
                    var e = s._getParentFromElement(this._element);
                    this._menu = t(e).find(E)[0]
                }
                return this._menu
            }, v._getPlacement = function () {
                var e = t(this._element).parent(), n = w;
                return e.hasClass(f) ? (n = T, t(this._menu).hasClass(p) && (n = C)) : e.hasClass(u) ? n = A : e.hasClass(d) ? n = D : t(this._menu).hasClass(p) && (n = I), n
            }, v._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0
            }, v._getPopperConfig = function () {
                var t = this, e = {};
                return "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset, {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                }
            }, s._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n);
                    if (i || (i = new s(this, "object" == typeof e ? e : null), t(this).data(n, i)), "string" == typeof e) {
                        if ("undefined" == typeof i[e])throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, s._clearMenus = function (e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))for (var i = t.makeArray(t(_)), r = 0; r < i.length; r++) {
                    var o = s._getParentFromElement(i[r]), a = t(i[r]).data(n), c = {relatedTarget: i[r]};
                    if (a) {
                        var f = a._menu;
                        if (t(o).hasClass(h) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
                            var u = t.Event(l.HIDE, c);
                            t(o).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), t(f).removeClass(h), t(o).removeClass(h).trigger(t.Event(l.HIDDEN, c)))
                        }
                    }
                }
            }, s._getParentFromElement = function (e) {
                var n, i = k.getSelectorFromElement(e);
                return i && (n = t(i)[0]), n || e.parentNode
            }, s._dataApiKeydownHandler = function (e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(E).length)) : a.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(c))) {
                    var n = s._getParentFromElement(this), i = t(n).hasClass(h);
                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var r = t(n).find(b).get();
                        if (0 !== r.length) {
                            var o = r.indexOf(e.target);
                            38 === e.which && o > 0 && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var l = t(n).find(_)[0];
                            t(l).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, i(s, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return S
                }
            }, {
                key: "DefaultType", get: function () {
                    return O
                }
            }]), s
        }();
        return t(document).on(l.KEYDOWN_DATA_API, _, N._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API, E, N._dataApiKeydownHandler).on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, N._clearMenus).on(l.CLICK_DATA_API, _, function (e) {
            e.preventDefault(), e.stopPropagation(), N._jQueryInterface.call(t(this), "toggle")
        }).on(l.CLICK_DATA_API, v, function (t) {
            t.stopPropagation()
        }), t.fn[e] = N._jQueryInterface, t.fn[e].Constructor = N, t.fn[e].noConflict = function () {
            return t.fn[e] = s, N._jQueryInterface
        }, N
    }(e), kt = function (t) {
        var e = "bs.modal", n = "." + e, o = t.fn.modal, s = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, a = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, l = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            FOCUSIN: "focusin" + n,
            RESIZE: "resize" + n,
            CLICK_DISMISS: "click.dismiss" + n,
            KEYDOWN_DISMISS: "keydown.dismiss" + n,
            MOUSEUP_DISMISS: "mouseup.dismiss" + n,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
            CLICK_DATA_API: "click.bs.modal.data-api"
        }, c = "modal-scrollbar-measure", h = "modal-backdrop", f = "modal-open", u = "fade", d = "show", p = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, g = function () {
            function o(e, n) {
                this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }

            var g = o.prototype;
            return g.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, g.show = function (e) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    k.supportsTransitionEnd() && t(this._element).hasClass(u) && (this._isTransitioning = !0);
                    var i = t.Event(l.SHOW, {relatedTarget: e});
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(l.CLICK_DISMISS, p.DATA_DISMISS, function (t) {
                        return n.hide(t)
                    }), t(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                        t(n._element).one(l.MOUSEUP_DISMISS, function (e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return n._showElement(e)
                    }))
                }
            }, g.hide = function (e) {
                var n = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = t.Event(l.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = k.supportsTransitionEnd() && t(this._element).hasClass(u);
                        r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(l.FOCUSIN), t(this._element).removeClass(d), t(this._element).off(l.CLICK_DISMISS), t(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? t(this._element).one(k.TRANSITION_END, function (t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }, g.dispose = function () {
                t.removeData(this._element, e), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, g.handleUpdate = function () {
                this._adjustDialog()
            }, g._getConfig = function (t) {
                return t = r({}, s, t), k.typeCheckConfig("modal", t, a), t
            }, g._showElement = function (e) {
                var n = this, i = k.supportsTransitionEnd() && t(this._element).hasClass(u);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && k.reflow(this._element), t(this._element).addClass(d), this._config.focus && this._enforceFocus();
                var r = t.Event(l.SHOWN, {relatedTarget: e}), o = function () {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                };
                i ? t(this._dialog).one(k.TRANSITION_END, o).emulateTransitionEnd(300) : o()
            }, g._enforceFocus = function () {
                var e = this;
                t(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, g._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
            }, g._setResizeEvent = function () {
                var e = this;
                this._isShown ? t(window).on(l.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : t(window).off(l.RESIZE)
            }, g._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(l.HIDDEN)
                })
            }, g._removeBackdrop = function () {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, g._showBackdrop = function (e) {
                var n = this, i = t(this._element).hasClass(u) ? u : "";
                if (this._isShown && this._config.backdrop) {
                    var r = k.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = h, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(l.CLICK_DISMISS, function (t) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), r && k.reflow(this._backdrop), t(this._backdrop).addClass(d), !e)return;
                    if (!r)return void e();
                    t(this._backdrop).one(k.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(d);
                    var o = function () {
                        n._removeBackdrop(), e && e()
                    };
                    k.supportsTransitionEnd() && t(this._element).hasClass(u) ? t(this._backdrop).one(k.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                } else e && e()
            }, g._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, g._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, g._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, g._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    t(p.FIXED_CONTENT).each(function (n, i) {
                        var r = t(i)[0].style.paddingRight, o = t(i).css("padding-right");
                        t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), t(p.STICKY_CONTENT).each(function (n, i) {
                        var r = t(i)[0].style.marginRight, o = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    }), t(p.NAVBAR_TOGGLER).each(function (n, i) {
                        var r = t(i)[0].style.marginRight, o = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(o) + e._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight, i = t("body").css("padding-right");
                    t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, g._resetScrollbar = function () {
                t(p.FIXED_CONTENT).each(function (e, n) {
                    var i = t(n).data("padding-right");
                    "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                }), t(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function (e, n) {
                    var i = t(n).data("margin-right");
                    "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var e = t("body").data("padding-right");
                "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
            }, g._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = c, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var s = t(this).data(e), a = r({}, o.Default, t(this).data(), "object" == typeof n && n);
                    if (s || (s = new o(this, a), t(this).data(e, s)), "string" == typeof n) {
                        if ("undefined" == typeof s[n])throw new TypeError('No method named "' + n + '"');
                        s[n](i)
                    } else a.show && s.show(i)
                })
            }, i(o, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return s
                }
            }]), o
        }();
        return t(document).on(l.CLICK_DATA_API, p.DATA_TOGGLE, function (n) {
            var i, o = this, s = k.getSelectorFromElement(this);
            s && (i = t(s)[0]);
            var a = t(i).data(e) ? "toggle" : r({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
            var c = t(i).one(l.SHOW, function (e) {
                e.isDefaultPrevented() || c.one(l.HIDDEN, function () {
                    t(o).is(":visible") && o.focus()
                })
            });
            g._jQueryInterface.call(t(i), a, this)
        }), t.fn.modal = g._jQueryInterface, t.fn.modal.Constructor = g, t.fn.modal.noConflict = function () {
            return t.fn.modal = o, g._jQueryInterface
        }, g
    }(e), Lt = function (t) {
        var e = "tooltip", n = "bs.tooltip", o = "." + n, s = t.fn[e], a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), l = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }, c = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, h = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, f = "show", u = "out", d = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            INSERTED: "inserted" + o,
            CLICK: "click" + o,
            FOCUSIN: "focusin" + o,
            FOCUSOUT: "focusout" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o
        }, p = "fade", g = "show", m = ".tooltip-inner", _ = ".arrow", v = "hover", E = "focus", y = "click", b = "manual", T = function () {
            function s(t, e) {
                if ("undefined" == typeof Ot)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }

            var T = s.prototype;
            return T.enable = function () {
                this._isEnabled = !0
            }, T.disable = function () {
                this._isEnabled = !1
            }, T.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, T.toggle = function (e) {
                if (this._isEnabled)if (e) {
                    var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                    i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(g))return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, T.dispose = function () {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, T.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display"))throw new Error("Please use show on visible elements");
                var n = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(n);
                    var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !i)return;
                    var r = this.getTipElement(), o = k.getUID(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(p);
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement, l = this._getAttachment(a);
                    this.addAttachmentClass(l);
                    var c = !1 === this.config.container ? document.body : t(this.config.container);
                    t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ot(this.element, r, {
                        placement: l,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: _},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), t(r).addClass(g), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                    var h = function () {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === u && e._leave(null, e)
                    };
                    k.supportsTransitionEnd() && t(this.tip).hasClass(p) ? t(this.tip).one(k.TRANSITION_END, h).emulateTransitionEnd(s._TRANSITION_DURATION) : h()
                }
            }, T.hide = function (e) {
                var n = this, i = this.getTipElement(), r = t.Event(this.constructor.Event.HIDE), o = function () {
                    n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                };
                t(this.element).trigger(r), r.isDefaultPrevented() || (t(i).removeClass(g), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[E] = !1, this._activeTrigger[v] = !1, k.supportsTransitionEnd() && t(this.tip).hasClass(p) ? t(i).one(k.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
            }, T.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, T.isWithContent = function () {
                return Boolean(this.getTitle())
            }, T.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, T.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, T.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(m), this.getTitle()), e.removeClass(p + " " + g)
            }, T.setElementContent = function (e, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
            }, T.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, T._getAttachment = function (t) {
                return c[t.toUpperCase()]
            }, T._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n)t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    }); else if (n !== b) {
                        var i = n === v ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN, r = n === v ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                    t(e.element).closest(".modal").on("hide.bs.modal", function () {
                        return e.hide()
                    })
                }), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, T._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, T._enter = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? E : v] = !0), t(n.getTipElement()).hasClass(g) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === f && n.show()
                }, n.config.delay.show) : n.show())
            }, T._leave = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? E : v] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = u, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    n._hoverState === u && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, T._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)if (this._activeTrigger[t])return !0;
                return !1
            }, T._getConfig = function (n) {
                return "number" == typeof(n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), k.typeCheckConfig(e, n, this.constructor.DefaultType), n
            }, T._getDelegateConfig = function () {
                var t = {};
                if (this.config)for (var e in this.config)this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, T._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }, T._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, T._fixTransition = function () {
                var e = this.getTipElement(), n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(p), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, s._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n), r = "object" == typeof e && e;
                    if ((i || !/dispose|hide/.test(e)) && (i || (i = new s(this, r), t(this).data(n, i)), "string" == typeof e)) {
                        if ("undefined" == typeof i[e])throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, i(s, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return h
                }
            }, {
                key: "NAME", get: function () {
                    return e
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return n
                }
            }, {
                key: "Event", get: function () {
                    return d
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return o
                }
            }, {
                key: "DefaultType", get: function () {
                    return l
                }
            }]), s
        }();
        return t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
            return t.fn[e] = s, T._jQueryInterface
        }, T
    }(e), Pt = function (t) {
        var e = "popover", n = "bs.popover", o = "." + n, s = t.fn[e], a = new RegExp("(^|\\s)bs-popover\\S+", "g"), l = r({}, Lt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), c = r({}, Lt.DefaultType, {content: "(string|element|function)"}), h = "fade", f = "show", u = ".popover-header", d = ".popover-body", p = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            INSERTED: "inserted" + o,
            CLICK: "click" + o,
            FOCUSIN: "focusin" + o,
            FOCUSOUT: "focusout" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o
        }, g = function (r) {
            var s, g;

            function m() {
                return r.apply(this, arguments) || this
            }

            g = r, (s = m).prototype = Object.create(g.prototype), s.prototype.constructor = s, s.__proto__ = g;
            var _ = m.prototype;
            return _.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, _.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }, _.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, _.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(u), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(h + " " + f)
            }, _._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, _._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }, m._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n), r = "object" == typeof e ? e : null;
                    if ((i || !/destroy|hide/.test(e)) && (i || (i = new m(this, r), t(this).data(n, i)), "string" == typeof e)) {
                        if ("undefined" == typeof i[e])throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, i(m, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return l
                }
            }, {
                key: "NAME", get: function () {
                    return e
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return n
                }
            }, {
                key: "Event", get: function () {
                    return p
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return o
                }
            }, {
                key: "DefaultType", get: function () {
                    return c
                }
            }]), m
        }(Lt);
        return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
            return t.fn[e] = s, g._jQueryInterface
        }, g
    }(e), xt = function (t) {
        var e = "scrollspy", n = "bs.scrollspy", o = "." + n, s = t.fn[e], a = {
            offset: 10,
            method: "auto",
            target: ""
        }, l = {offset: "number", method: "string", target: "(string|element)"}, c = {
            ACTIVATE: "activate" + o,
            SCROLL: "scroll" + o,
            LOAD_DATA_API: "load" + o + ".data-api"
        }, h = "dropdown-item", f = "active", u = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, d = "offset", p = "position", g = function () {
            function s(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(c.SCROLL, function (t) {
                    return i._process(t)
                }), this.refresh(), this._process()
            }

            var g = s.prototype;
            return g.refresh = function () {
                var e = this, n = this._scrollElement === this._scrollElement.window ? d : p, i = "auto" === this._config.method ? n : this._config.method, r = i === p ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
                    var n, o = k.getSelectorFromElement(e);
                    if (o && (n = t(o)[0]), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height)return [t(n)[i]().top + r, o]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, g.dispose = function () {
                t.removeData(this._element, n), t(this._scrollElement).off(o), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, g._getConfig = function (n) {
                if ("string" != typeof(n = r({}, a, n)).target) {
                    var i = t(n.target).attr("id");
                    i || (i = k.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                }
                return k.typeCheckConfig(e, n, l), n
            }, g._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, g._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, g._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, g._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, g._activate = function (e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",");
                n = n.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var i = t(n.join(","));
                i.hasClass(h) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(f), i.addClass(f)) : (i.addClass(f), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(f), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(f)), t(this._scrollElement).trigger(c.ACTIVATE, {relatedTarget: e})
            }, g._clear = function () {
                t(this._selector).filter(u.ACTIVE).removeClass(f)
            }, s._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n);
                    if (i || (i = new s(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                        if ("undefined" == typeof i[e])throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, i(s, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }, {
                key: "Default", get: function () {
                    return a
                }
            }]), s
        }();
        return t(window).on(c.LOAD_DATA_API, function () {
            for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--;) {
                var i = t(e[n]);
                g._jQueryInterface.call(i, i.data())
            }
        }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
            return t.fn[e] = s, g._jQueryInterface
        }, g
    }(e), Rt = function (t) {
        var e = ".bs.tab", n = t.fn.tab, r = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            CLICK_DATA_API: "click.bs.tab.data-api"
        }, o = "dropdown-menu", s = "active", a = "disabled", l = "fade", c = "show", h = ".dropdown", f = ".nav, .list-group", u = ".active", d = "> li > .active", p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', g = ".dropdown-toggle", m = "> .dropdown-menu .active", _ = function () {
            function e(t) {
                this._element = t
            }

            var n = e.prototype;
            return n.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s) || t(this._element).hasClass(a))) {
                    var n, i, o = t(this._element).closest(f)[0], l = k.getSelectorFromElement(this._element);
                    if (o) {
                        var c = "UL" === o.nodeName ? d : u;
                        i = (i = t.makeArray(t(o).find(c)))[i.length - 1]
                    }
                    var h = t.Event(r.HIDE, {relatedTarget: this._element}), p = t.Event(r.SHOW, {relatedTarget: i});
                    if (i && t(i).trigger(h), t(this._element).trigger(p), !p.isDefaultPrevented() && !h.isDefaultPrevented()) {
                        l && (n = t(l)[0]), this._activate(this._element, o);
                        var g = function () {
                            var n = t.Event(r.HIDDEN, {relatedTarget: e._element}), o = t.Event(r.SHOWN, {relatedTarget: i});
                            t(i).trigger(n), t(e._element).trigger(o)
                        };
                        n ? this._activate(n, n.parentNode, g) : g()
                    }
                }
            }, n.dispose = function () {
                t.removeData(this._element, "bs.tab"), this._element = null
            }, n._activate = function (e, n, i) {
                var r = this, o = ("UL" === n.nodeName ? t(n).find(d) : t(n).children(u))[0], s = i && k.supportsTransitionEnd() && o && t(o).hasClass(l), a = function () {
                    return r._transitionComplete(e, o, i)
                };
                o && s ? t(o).one(k.TRANSITION_END, a).emulateTransitionEnd(150) : a()
            }, n._transitionComplete = function (e, n, i) {
                if (n) {
                    t(n).removeClass(c + " " + s);
                    var r = t(n.parentNode).find(m)[0];
                    r && t(r).removeClass(s), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(s), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), k.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
                    var a = t(e).closest(h)[0];
                    a && t(a).find(g).addClass(s), e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), r = i.data("bs.tab");
                    if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n])throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0"
                }
            }]), e
        }();
        return t(document).on(r.CLICK_DATA_API, p, function (e) {
            e.preventDefault(), _._jQueryInterface.call(t(this), "show")
        }), t.fn.tab = _._jQueryInterface, t.fn.tab.Constructor = _, t.fn.tab.noConflict = function () {
            return t.fn.tab = n, _._jQueryInterface
        }, _
    }(e);
    !function (t) {
        if ("undefined" == typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = k, t.Alert = L, t.Button = P, t.Carousel = x, t.Collapse = R, t.Dropdown = Nt, t.Modal = kt, t.Popover = Pt, t.Scrollspy = xt, t.Tab = Rt, t.Tooltip = Lt, Object.defineProperty(t, "__esModule", {value: !0})
});
//# sourceMappingURL=bootstrap.bundle.min.js.map