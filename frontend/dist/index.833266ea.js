// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eKA5p":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "635c849b833266ea";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lzYRN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router
);
var _navigo = require("navigo");
var _navigoDefault = parcelHelpers.interopDefault(_navigo);
var _home = require("./views/home");
const router = new _navigoDefault.default('/');
router.on("/", _home.Home)// .on("/login", Login)
// .on("/signup", Signup)
.resolve();

},{"navigo":"hCJFH","@parcel/transformer-js/src/esmodule-helpers.js":"dopUt","./views/home":"9wYwb"}],"hCJFH":[function(require,module,exports) {
!function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("Navigo", [], n) : "object" == typeof exports ? exports.Navigo = n() : t.Navigo = n();
}("undefined" != typeof self ? self : this, function() {
    return (function() {
        var t1 = {
            407: function(t2, n2, e2) {
                e2.d(n2, {
                    default: function() {
                        return N1;
                    }
                });
                var o1 = /([:*])(\w+)/g, r1 = /\*/g, i1 = /\/\?/g;
                function a1(t) {
                    return void 0 === t && (t = "/"), v1() ? location.pathname + location.search + location.hash : t;
                }
                function s1(t) {
                    return t.replace(/\/+$/, "").replace(/^\/+/, "");
                }
                function c1(t) {
                    return "string" == typeof t;
                }
                function u(t) {
                    return t && t.indexOf("#") >= 0 && t.split("#").pop() || "";
                }
                function h(t) {
                    var n = s1(t).split(/\?(.*)?$/);
                    return [
                        s1(n[0]),
                        n.slice(1).join("")
                    ];
                }
                function f(t) {
                    for(var n = {
                    }, e = t.split("&"), o = 0; o < e.length; o++){
                        var r = e[o].split("=");
                        if ("" !== r[0]) {
                            var i = decodeURIComponent(r[0]);
                            n[i] ? (Array.isArray(n[i]) || (n[i] = [
                                n[i]
                            ]), n[i].push(decodeURIComponent(r[1] || ""))) : n[i] = decodeURIComponent(r[1] || "");
                        }
                    }
                    return n;
                }
                function l1(t3, n3) {
                    var e3, a = h(s1(t3.currentLocationPath)), l = a[0], p = a[1], d = "" === p ? null : f(p), v = [];
                    if (c1(n3.path)) {
                        if (e3 = "(?:/^|^)" + s1(n3.path).replace(o1, function(t, n, e) {
                            return v.push(e), "([^/]+)";
                        }).replace(r1, "?(?:.*)").replace(i1, "/?([^/]+|)") + "$", "" === s1(n3.path) && "" === s1(l)) return {
                            url: l,
                            queryString: p,
                            hashString: u(t3.to),
                            route: n3,
                            data: null,
                            params: d
                        };
                    } else e3 = n3.path;
                    var g = new RegExp(e3, ""), m = l.match(g);
                    if (m) {
                        var y = c1(n3.path) ? function(t4, n) {
                            return 0 === n.length ? null : t4 ? t4.slice(1, t4.length).reduce(function(t, e, o) {
                                return null === t && (t = {
                                }), t[n[o]] = decodeURIComponent(e), t;
                            }, null) : null;
                        }(m, v) : m.groups ? m.groups : m.slice(1);
                        return {
                            url: s1(l.replace(new RegExp("^" + t3.instance.root), "")),
                            queryString: p,
                            hashString: u(t3.to),
                            route: n3,
                            data: y,
                            params: d
                        };
                    }
                    return !1;
                }
                function p1() {
                    return !("undefined" == typeof window || !window.history || !window.history.pushState);
                }
                function d1(t, n) {
                    return void 0 === t[n] || !0 === t[n];
                }
                function v1() {
                    return "undefined" != typeof window;
                }
                function g1(t5, n) {
                    return void 0 === t5 && (t5 = []), void 0 === n && (n = {
                    }), t5.filter(function(t) {
                        return t;
                    }).forEach(function(t) {
                        [
                            "before",
                            "after",
                            "already",
                            "leave"
                        ].forEach(function(e) {
                            t[e] && (n[e] || (n[e] = []), n[e].push(t[e]));
                        });
                    }), n;
                }
                function m1(t6, n4, e) {
                    var o = n4 || {
                    }, r = 0;
                    !function n() {
                        t6[r] ? Array.isArray(t6[r]) ? (t6.splice.apply(t6, [
                            r,
                            1
                        ].concat(t6[r][0](o) ? t6[r][1] : t6[r][2])), n()) : t6[r](o, function(t) {
                            void 0 === t || !0 === t ? (r += 1, n()) : e && e(o);
                        }) : e && e(o);
                    }();
                }
                function y1(t, n) {
                    void 0 === t.currentLocationPath && (t.currentLocationPath = t.to = a1(t.instance.root)), t.currentLocationPath = t.instance._checkForAHash(t.currentLocationPath), n();
                }
                function _(t, n) {
                    for(var e = 0; e < t.instance.routes.length; e++){
                        var o = l1(t, t.instance.routes[e]);
                        if (o && (t.matches || (t.matches = []), t.matches.push(o), "ONE" === t.resolveOptions.strategy)) return void n();
                    }
                    n();
                }
                function k(t, n) {
                    t.navigateOptions && (void 0 !== t.navigateOptions.shouldResolve && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), void 0 !== t.navigateOptions.silent && console.warn('"silent" is deprecated. Please check the documentation.')), n();
                }
                function O(t, n) {
                    !0 === t.navigateOptions.force ? (t.instance._setCurrent([
                        t.instance._pathToMatchObject(t.to)
                    ]), n(!1)) : n();
                }
                m1.if = function(t, n, e) {
                    return Array.isArray(n) || (n = [
                        n
                    ]), Array.isArray(e) || (e = [
                        e
                    ]), [
                        t,
                        n,
                        e
                    ];
                };
                var w1 = v1(), L1 = p1();
                function b(t, n5) {
                    if (d1(t.navigateOptions, "updateBrowserURL")) {
                        var e = ("/" + t.to).replace(/\/\//g, "/"), o = w1 && t.resolveOptions && !0 === t.resolveOptions.hash;
                        L1 ? (history[t.navigateOptions.historyAPIMethod || "pushState"](t.navigateOptions.stateObj || {
                        }, t.navigateOptions.title || "", o ? "#" + e : e), location && location.hash && (t.instance.__freezeListening = !0, setTimeout(function() {
                            if (!o) {
                                var n = location.hash;
                                location.hash = "", location.hash = n;
                            }
                            t.instance.__freezeListening = !1;
                        }, 1))) : w1 && (window.location.href = t.to);
                    }
                    n5();
                }
                function A1(t7, n6) {
                    var e = t7.instance;
                    e.lastResolved() ? m1(e.lastResolved().map(function(n7) {
                        return function(e, o2) {
                            if (n7.route.hooks && n7.route.hooks.leave) {
                                var r = !1, i = t7.instance.matchLocation(n7.route.path, t7.currentLocationPath, !1);
                                r = "*" !== n7.route.path ? !i : !(t7.matches && t7.matches.find(function(t) {
                                    return n7.route.path === t.route.path;
                                })), d1(t7.navigateOptions, "callHooks") && r ? m1(n7.route.hooks.leave.map(function(n8) {
                                    return function(e, o) {
                                        return n8(function(n) {
                                            !1 === n ? t7.instance.__markAsClean(t7) : o();
                                        }, t7.matches && t7.matches.length > 0 ? 1 === t7.matches.length ? t7.matches[0] : t7.matches : void 0);
                                    };
                                }).concat([
                                    function() {
                                        return o2();
                                    }
                                ])) : o2();
                            } else o2();
                        };
                    }), {
                    }, function() {
                        return n6();
                    }) : n6();
                }
                function P1(t, n) {
                    d1(t.navigateOptions, "updateState") && t.instance._setCurrent(t.matches), n();
                }
                var R1 = [
                    function(t, n9) {
                        var e = t.instance.lastResolved();
                        if (e && e[0] && e[0].route === t.match.route && e[0].url === t.match.url && e[0].queryString === t.match.queryString) return e.forEach(function(n10) {
                            n10.route.hooks && n10.route.hooks.already && d1(t.navigateOptions, "callHooks") && n10.route.hooks.already.forEach(function(n) {
                                return n(t.match);
                            });
                        }), void n9(!1);
                        n9();
                    },
                    function(t, n11) {
                        t.match.route.hooks && t.match.route.hooks.before && d1(t.navigateOptions, "callHooks") ? m1(t.match.route.hooks.before.map(function(n12) {
                            return function(e, o) {
                                return n12(function(n) {
                                    !1 === n ? t.instance.__markAsClean(t) : o();
                                }, t.match);
                            };
                        }).concat([
                            function() {
                                return n11();
                            }
                        ])) : n11();
                    },
                    function(t, n) {
                        d1(t.navigateOptions, "callHandler") && t.match.route.handler(t.match), t.instance.updatePageLinks(), n();
                    },
                    function(t, n13) {
                        t.match.route.hooks && t.match.route.hooks.after && d1(t.navigateOptions, "callHooks") && t.match.route.hooks.after.forEach(function(n) {
                            return n(t.match);
                        }), n13();
                    }
                ], S = [
                    A1,
                    function(t, n) {
                        var e = t.instance._notFoundRoute;
                        if (e) {
                            t.notFoundHandled = !0;
                            var o = h(t.currentLocationPath), r = o[0], i = o[1], a = u(t.to);
                            e.path = s1(r);
                            var c = {
                                url: e.path,
                                queryString: i,
                                hashString: a,
                                data: null,
                                route: e,
                                params: "" !== i ? f(i) : null
                            };
                            t.matches = [
                                c
                            ], t.match = c;
                        }
                        n();
                    },
                    m1.if(function(t) {
                        return t.notFoundHandled;
                    }, R1.concat([
                        P1
                    ]), [
                        function(t, n) {
                            t.resolveOptions && !1 !== t.resolveOptions.noMatchWarning && void 0 !== t.resolveOptions.noMatchWarning || console.warn('Navigo: "' + t.currentLocationPath + "\" didn't match any of the registered routes."), n();
                        },
                        function(t, n) {
                            t.instance._setCurrent(null), n();
                        }
                    ])
                ];
                function E1() {
                    return (E1 = Object.assign || function(t) {
                        for(var n = 1; n < arguments.length; n++){
                            var e = arguments[n];
                            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function x(t, n) {
                    var e = 0;
                    A1(t, function o() {
                        e !== t.matches.length ? m1(R1, E1({
                        }, t, {
                            match: t.matches[e]
                        }), function() {
                            e += 1, o();
                        }) : P1(t, n);
                    });
                }
                function H(t) {
                    t.instance.__markAsClean(t);
                }
                function j() {
                    return (j = Object.assign || function(t) {
                        for(var n = 1; n < arguments.length; n++){
                            var e = arguments[n];
                            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var C = "[data-navigo]";
                function N1(t8, n14) {
                    var e4, o3 = n14 || {
                        strategy: "ONE",
                        hash: !1,
                        noMatchWarning: !1,
                        linksSelector: C
                    }, r2 = this, i2 = "/", d = null, w = [], L = !1, A = p1(), P = v1();
                    function R(t) {
                        return t.indexOf("#") >= 0 && (t = !0 === o3.hash ? t.split("#")[1] || "/" : t.split("#")[0]), t;
                    }
                    function E(t) {
                        return s1(i2 + "/" + s1(t));
                    }
                    function N(t, n, e, o) {
                        return t = c1(t) ? E(t) : t, {
                            name: o || s1(String(t)),
                            path: t,
                            handler: n,
                            hooks: g1(e)
                        };
                    }
                    function U(t9, n15) {
                        if (!r2.__dirty) {
                            r2.__dirty = !0, t9 = t9 ? s1(i2) + "/" + s1(t9) : void 0;
                            var e = {
                                instance: r2,
                                to: t9,
                                currentLocationPath: t9,
                                navigateOptions: {
                                },
                                resolveOptions: j({
                                }, o3, n15)
                            };
                            return m1([
                                y1,
                                _,
                                m1.if(function(t) {
                                    var n = t.matches;
                                    return n && n.length > 0;
                                }, x, S)
                            ], e, H), !!e.matches && e.matches;
                        }
                        r2.__waiting.push(function() {
                            return r2.resolve(t9, n15);
                        });
                    }
                    function q(t10, n16) {
                        if (r2.__dirty) r2.__waiting.push(function() {
                            return r2.navigate(t10, n16);
                        });
                        else {
                            r2.__dirty = !0, t10 = s1(i2) + "/" + s1(t10);
                            var e = {
                                instance: r2,
                                to: t10,
                                navigateOptions: n16 || {
                                },
                                resolveOptions: n16 && n16.resolveOptions ? n16.resolveOptions : o3,
                                currentLocationPath: R(t10)
                            };
                            m1([
                                k,
                                O,
                                _,
                                m1.if(function(t) {
                                    var n = t.matches;
                                    return n && n.length > 0;
                                }, x, S),
                                b,
                                H
                            ], e, H);
                        }
                    }
                    function F() {
                        if (P) return (P ? [].slice.call(document.querySelectorAll(o3.linksSelector || C)) : []).forEach(function(t11) {
                            "false" !== t11.getAttribute("data-navigo") && "_blank" !== t11.getAttribute("target") ? t11.hasListenerAttached || (t11.hasListenerAttached = !0, t11.navigoHandler = function(n17) {
                                if ((n17.ctrlKey || n17.metaKey) && "a" === n17.target.tagName.toLowerCase()) return !1;
                                var e5 = t11.getAttribute("href");
                                if (null == e5) return !1;
                                if (e5.match(/^(http|https)/) && "undefined" != typeof URL) try {
                                    var o = new URL(e5);
                                    e5 = o.pathname + o.search;
                                } catch (t12) {
                                }
                                var i = function(t13) {
                                    if (!t13) return {
                                    };
                                    var n, e6 = t13.split(","), o = {
                                    };
                                    return e6.forEach(function(t14) {
                                        var e = t14.split(":").map(function(t) {
                                            return t.replace(/(^ +| +$)/g, "");
                                        });
                                        switch(e[0]){
                                            case "historyAPIMethod":
                                                o.historyAPIMethod = e[1];
                                                break;
                                            case "resolveOptionsStrategy":
                                                n || (n = {
                                                }), n.strategy = e[1];
                                                break;
                                            case "resolveOptionsHash":
                                                n || (n = {
                                                }), n.hash = "true" === e[1];
                                                break;
                                            case "updateBrowserURL":
                                            case "callHandler":
                                            case "updateState":
                                            case "force":
                                                o[e[0]] = "true" === e[1];
                                        }
                                    }), n && (o.resolveOptions = n), o;
                                }(t11.getAttribute("data-navigo-options"));
                                L || (n17.preventDefault(), n17.stopPropagation(), r2.navigate(s1(e5), i));
                            }, t11.addEventListener("click", t11.navigoHandler)) : t11.hasListenerAttached && t11.removeEventListener("click", t11.navigoHandler);
                        }), r2;
                    }
                    function I(t, n18, e) {
                        var o = w.find(function(n) {
                            return n.name === t;
                        }), r = null;
                        if (o) {
                            if (r = o.path, n18) for(var a in n18)r = r.replace(":" + a, n18[a]);
                            r = r.match(/^\//) ? r : "/" + r;
                        }
                        return r && e && !e.includeRoot && (r = r.replace(new RegExp("^/" + i2), "")), r;
                    }
                    function M(t) {
                        var n = h(s1(t)), o = n[0], r = n[1], i = "" === r ? null : f(r);
                        return {
                            url: o,
                            queryString: r,
                            hashString: u(t),
                            route: N(o, function() {
                            }, [
                                e4
                            ], o),
                            data: null,
                            params: i
                        };
                    }
                    function T(t15, n, e) {
                        return "string" == typeof n && (n = z(n)), n ? (n.hooks[t15] || (n.hooks[t15] = []), n.hooks[t15].push(e), function() {
                            n.hooks[t15] = n.hooks[t15].filter(function(t) {
                                return t !== e;
                            });
                        }) : (console.warn("Route doesn't exists: " + n), function() {
                        });
                    }
                    function z(t) {
                        return "string" == typeof t ? w.find(function(n) {
                            return n.name === E(t);
                        }) : w.find(function(n) {
                            return n.handler === t;
                        });
                    }
                    t8 ? i2 = s1(t8) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'), this.root = i2, this.routes = w, this.destroyed = L, this.current = d, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = function(t) {
                        t.instance.__dirty = !1, t.instance.__waiting.length > 0 && t.instance.__waiting.shift()();
                    }, this.on = function(t, n19, o4) {
                        var r = this;
                        return "object" != typeof t || t instanceof RegExp ? ("function" == typeof t && (o4 = n19, n19 = t, t = i2), w.push(N(t, n19, [
                            e4,
                            o4
                        ])), this) : (Object.keys(t).forEach(function(n) {
                            if ("function" == typeof t[n]) r.on(n, t[n]);
                            else {
                                var o = t[n], i = o.uses, a = o.as, s = o.hooks;
                                w.push(N(n, i, [
                                    e4,
                                    s
                                ], a));
                            }
                        }), this);
                    }, this.off = function(t) {
                        return this.routes = w = w.filter(function(n) {
                            return c1(t) ? s1(n.path) !== s1(t) : "function" == typeof t ? t !== n.handler : String(n.path) !== String(t);
                        }), this;
                    }, this.resolve = U, this.navigate = q, this.navigateByName = function(t, n, e) {
                        var o = I(t, n);
                        return null !== o && (q(o.replace(new RegExp("^/?" + i2), ""), e), !0);
                    }, this.destroy = function() {
                        this.routes = w = [], A && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = L = !0;
                    }, this.notFound = function(t, n) {
                        return r2._notFoundRoute = N("*", t, [
                            e4,
                            n
                        ], "__NOT_FOUND__"), this;
                    }, this.updatePageLinks = F, this.link = function(t) {
                        return "/" + i2 + "/" + s1(t);
                    }, this.hooks = function(t) {
                        return e4 = t, this;
                    }, this.extractGETParameters = function(t) {
                        return h(R(t));
                    }, this.lastResolved = function() {
                        return d;
                    }, this.generate = I, this.getLinkPath = function(t) {
                        return t.getAttribute("href");
                    }, this.match = function(t) {
                        var n = {
                            instance: r2,
                            currentLocationPath: t,
                            to: t,
                            navigateOptions: {
                            },
                            resolveOptions: o3
                        };
                        return _(n, function() {
                        }), !!n.matches && n.matches;
                    }, this.matchLocation = function(t, n, e) {
                        void 0 === n || void 0 !== e && !e || (n = E(n));
                        var o = {
                            instance: r2,
                            to: n,
                            currentLocationPath: n
                        };
                        return y1(o, function() {
                        }), "string" == typeof t && (t = void 0 === e || e ? E(t) : t), l1(o, {
                            name: String(t),
                            path: t,
                            handler: function() {
                            },
                            hooks: {
                            }
                        }) || !1;
                    }, this.getCurrentLocation = function() {
                        return M(s1(a1(i2)).replace(new RegExp("^" + i2), ""));
                    }, this.addBeforeHook = T.bind(this, "before"), this.addAfterHook = T.bind(this, "after"), this.addAlreadyHook = T.bind(this, "already"), this.addLeaveHook = T.bind(this, "leave"), this.getRoute = z, this._pathToMatchObject = M, this._clean = s1, this._checkForAHash = R, this._setCurrent = function(t) {
                        return d = r2.current = t;
                    }, (function() {
                        A && (this.__popstateListener = function() {
                            r2.__freezeListening || U();
                        }, window.addEventListener("popstate", this.__popstateListener));
                    }).call(this), F.call(this);
                }
            }
        }, n1 = {
        };
        function e1(o) {
            if (n1[o]) return n1[o].exports;
            var r = n1[o] = {
                exports: {
                }
            };
            return t1[o](r, r.exports, e1), r.exports;
        }
        return e1.d = function(t, n) {
            for(var o in n)e1.o(n, o) && !e1.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: n[o]
            });
        }, e1.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, e1(407);
    })().default;
});

},{}],"dopUt":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9wYwb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>Home
);
var _app = require("../app");
function Home() {
    document.body.innerHTML = "";
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-div");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        const loginButton = document.createElement("button");
        loginButton.innerText = "Login";
        loginButton.addEventListener('click', ()=>{
            _app.router.navigate("/login");
        });
        buttonContainer.appendChild(loginButton);
        const text = document.createElement("h2");
        text.innerText = "You are not authenticated.";
        buttonContainer.appendChild(text);
        const signupButton = document.createElement("button");
        signupButton.innerText = "Sign Up";
        signupButton.addEventListener('click', ()=>{
            _app.router.navigate("/signup");
        });
        buttonContainer.appendChild(signupButton);
        homeDiv.appendChild(buttonContainer);
    } else {
        const authText = document.createElement("div");
        authText.classList.add("auth-text");
        authText.innerText = `You're logged in as ${user.username} and your E-Mail is ${user.email}`;
        const logoutBtn = document.createElement("button");
        logoutBtn.innerText = "Logout";
        logoutBtn.addEventListener('click', ()=>{
            localStorage.setItem("user", "null");
            localStorage.setItem("token", "null");
            Home();
        });
        authText.appendChild(logoutBtn);
        homeDiv.appendChild(authText);
    }
    document.body.appendChild(homeDiv);
}

},{"../app":"lzYRN","@parcel/transformer-js/src/esmodule-helpers.js":"dopUt"}]},["eKA5p","lzYRN"], "lzYRN", "parcelRequire10c2")

//# sourceMappingURL=index.833266ea.js.map
