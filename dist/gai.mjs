var img$2 = "data:image/png;base64,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jIwM7d69288LgSKDe7CAgqpQoYJSU1MVGRl5yc9PnTqlcePGKTExkbCCNSVKlNDzzz+vAQMGXPZ7DU+fPq1OnTpp3759FtYBjsc9WEBBhISEaMGCBWrRosUlP09NTdXTTz+tn3/+2dIy4FJ33HGHJk2apAoVKvzud99++63i4+OVnZ1tYRngaB7eGgQK4E9/+tMlcXXs2DENGzZMAwYMIK4QUNLS0tS2bdvLfl1OrVq19Je//MXCKsD5uAcLyKcInvDWAAAD50lEQVS6devqzTffVGhoqCRpzZo16tevn7Zu3Wp5GXB558+fV3Jysnbv3q2WLVuqRIkSv/2uXr162rdvn3bt2mVxIeA43IMF5EepUqW0YsUKVa5cWVlZWRo3bpwSEhJszwLyrHz58nr99dfVunXr33525swZdenSRT/88IPFZYCj8BYhkB8vvfSSKleurG3btqlTp07EFYLO4cOH9cADD2js2LE6e/asJCksLEyzZs1SeHi45XWAcxBYQB5169ZNvXr10oQJE9S9e3f9+OOPticBBZKbm6uEhAR16tRJO3bskCRVqVJFkydPvuwnDgHkH/dgAXkQGxurcePGaciQIVqyZAlfzgxHOHHihJKSkhQeHq4GDRqoatWq8nq92rBhg+1pQLDjHizgWtxut4YMGaL58+fr9OnTtucAPtGhQwe9/vrrioyM1PDhw5WcnGx7EhDMeA4WcC0lS5b87V4VwMkqVqyot99+WzVr1lTXrl256R0oOAILAPBfoaGhGjVqlOLj4xUfH6/MzEzbk4BgRGABAH6vZcuW6tGjh8aOHaucnBzbc4BgQ2ABAC6vXLlyatSoEfdjAflHYAEArsztdis0NFTnz5+3PQUIJh7CCgBwRR6PRx6Px/YMIOjw/CsAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADD3JIu2h4BAADgIBf/HzKVqPl91gZiAAAAAElFTkSuQmCC";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e%3csvg width='53' height='53' viewBox='0 0 14.022916 14.022917' version='1.1' id='svg1' inkscape:version='1.3.2 (091e20e%2c 2023-11-25)' sodipodi:docname='gemini-insert-icon.svg' inkscape:export-filename='gemini-inset-icon.png' inkscape:export-xdpi='96' inkscape:export-ydpi='96' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3e %3csodipodi:namedview id='namedview1' pagecolor='white' bordercolor='black' borderopacity='0.25' inkscape:showpageshadow='2' inkscape:pageopacity='0.0' inkscape:pagecheckerboard='true' inkscape:deskcolor='%23d1d1d1' inkscape:document-units='px' inkscape:zoom='3.6780415' inkscape:cx='61.037919' inkscape:cy='67.155305' inkscape:window-width='1704' inkscape:window-height='1127' inkscape:window-x='100' inkscape:window-y='1159' inkscape:window-maximized='0' inkscape:current-layer='layer1' /%3e %3cdefs id='defs1' /%3e %3cg inkscape:label='Layer 1' inkscape:groupmode='layer' id='layer1'%3e %3crect style='display:none%3bfill:black%3bstroke:black%3bstroke-width:0.01' id='rect1' width='14.012917' height='14.012917' x='0.0050000018' y='0.0049999976' /%3e %3cpath id='path1' style='fill:black%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.264583%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='m 13.012508%2c13.272509 c 0%2c0 -3.5759556%2c-2.307175 -6.0010493%2c-2.358612 -2.6673662%2c-0.05657 -6.26105039%2c2.098607 -6.26105039%2c2.098607 0%2c0 2.36925789%2c-3.5759479 2.42069399%2c-6.0010462 0.056572%2c-2.6673595 -2.1606951%2c-6.26105063 -2.1606951%2c-6.26105063 0%2c0 3.5759521%2c2.41176333 6.0010515%2c2.46319863 2.6673605%2c0.056572 6.2610503%2c-2.2032008 6.2610503%2c-2.2032008 0%2c0 -2.334512%2c3.5759536 -2.38595%2c6.0010528 -0.05657%2c2.667361 2.125949%2c6.2610512 2.125949%2c6.2610512 z' sodipodi:nodetypes='cccscscsc' /%3e %3cpath id='path1-8' style='fill:white%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.264583%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='m 13.012508%2c13.272509 c 0%2c0 -3.5759585%2c-3.9345896 -6.0010521%2c-3.9860277 -2.6673662%2c-0.056573 -6.26104759%2c3.7260227 -6.26104759%2c3.7260227 0%2c0 3.89461389%2c-3.5759453 3.94604999%2c-6.0010436 0.056572%2c-2.6673595 -3.6860511%2c-6.26105323 -3.6860511%2c-6.26105323 0%2c0 3.5759493%2c3.94443513 6.0010487%2c3.99587043 2.6673605%2c0.056572 6.2610531%2c-3.7358726 6.2610531%2c-3.7358726 0%2c0 -3.911256%2c3.5759562 -3.9626921%2c6.0010554 -0.056572%2c2.667361 3.7026911%2c6.2610486 3.7026911%2c6.2610486 z' sodipodi:nodetypes='cccscscsc' /%3e %3c/g%3e%3c/svg%3e";

var en$1 = {
	"gai.entry.name": "GAI",
	"gai.entry.description": "Play with Google generative AI, Gemini!"
};
var ja$1 = {
	"gai.entry.name": "GAI",
	"gai.entry.description": "Google生成AI、Geminiと遊ぼう!"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"gai.entry.name": "GAI",
	"gai.entry.description": "GoogleせいせいAI、Geminiとあそぼう!"
}
};

/**
 * This is an extension for Xcratch.
 */


/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
var version = 'v0.6.0';
var entry = {
  get name() {
    return formatMessage$1({
      id: 'gai.entry.name',
      defaultMessage: 'GAI',
      description: 'name of the extension'
    });
  },
  extensionId: 'gai',
  extensionURL: 'https://yokobond.github.io/xcx-gai/dist/gai.mjs',
  collaborator: 'Yengawa Lab',
  iconURL: img$2,
  insetIconURL: img$1,
  get description() {
    return "".concat(formatMessage$1({
      defaultMessage: 'Play with Google generative AI, Gemini!',
      description: 'Description for this extension',
      id: 'gai.entry.description'
    }), " (").concat(version, ")");
  },
  tags: ['function', 'image', 'sound', 'text', 'ai'],
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://yokobond.github.io/xcx-gai/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof$2(o) {
  "@babel/helpers - typeof";

  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$2(o);
}

function toPrimitive$1(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$2(i) ? i : String(i);
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof$1 = {exports: {}};

(function (module) {
  function _typeof(o) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof$1);
var _typeofExports = _typeof$1.exports;

(function (module) {
  var _typeof = _typeofExports["default"];
  function _regeneratorRuntime() {

    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return e;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function define(t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function value(t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      "catch": function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$1);
var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntimeExports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof$2(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

/**
 * Types of block
 * @enum {string}
 */
var BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',
  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',
  /**
   * Command block
   */
  COMMAND: 'command',
  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',
  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',
  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',
  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',
  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType;
var BlockType$1 = /*@__PURE__*/getDefaultExportFromCjs(blockType);

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',
  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',
  /**
   * Numeric value with color picker
   */
  COLOR: 'color',
  /**
   * Numeric value with text field
   */
  NUMBER: 'number',
  /**
   * String value with text field
   */
  STRING: 'string',
  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',
  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',
  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image'
};
var argumentType = ArgumentType;
var ArgumentType$1 = /*@__PURE__*/getDefaultExportFromCjs(argumentType);

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

var Color$1 = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }
  _createClass(Color, null, [{
    key: "RGB_BLACK",
    get:
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */

    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */

    /** @type {RGBObject} */
    function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }

    /** @type {RGBObject} */
  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }

    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */
  }, {
    key: "decimalToHex",
    value: function decimalToHex(decimal) {
      if (decimal < 0) {
        decimal += 0xFFFFFF + 1;
      }
      var hex = Number(decimal).toString(16);
      hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
      return hex;
    }

    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "decimalToRgb",
    value: function decimalToRgb(decimal) {
      var a = decimal >> 24 & 0xFF;
      var r = decimal >> 16 & 0xFF;
      var g = decimal >> 8 & 0xFF;
      var b = decimal & 0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a > 0 ? a : 255
      };
    }

    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */
  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      return Color.decimalToHex(Color.rgbToDecimal(rgb));
    }

    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */
  }, {
    key: "rgbToDecimal",
    value: function rgbToDecimal(rgb) {
      return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }

    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */
  }, {
    key: "hexToDecimal",
    value: function hexToDecimal(hex) {
      return Color.rgbToDecimal(Color.hexToRgb(hex));
    }

    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var h = hsv.h % 360;
      if (h < 0) h += 360;
      var s = Math.max(0, Math.min(hsv.s, 1));
      var v = Math.max(0, Math.min(hsv.v, 1));
      var i = Math.floor(h / 60);
      var f = h / 60 - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }
      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }

    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */
  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var r = rgb.r / 255;
      var g = rgb.g / 255;
      var b = rgb.b / 255;
      var x = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b);

      // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
      var h = 0;
      var s = 0;
      if (x !== v) {
        var f = r === x ? g - b : g === x ? b - r : r - g;
        var i = r === x ? 3 : g === x ? 5 : 1;
        h = (i - f / (v - x)) * 60 % 360;
        s = (v - x) / v;
      }
      return {
        h: h,
        s: s,
        v: v
      };
    }

    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */
  }, {
    key: "mixRgb",
    value: function mixRgb(rgb0, rgb1, fraction1) {
      if (fraction1 <= 0) return rgb0;
      if (fraction1 >= 1) return rgb1;
      var fraction0 = 1 - fraction1;
      return {
        r: fraction0 * rgb0.r + fraction1 * rgb1.r,
        g: fraction0 * rgb0.g + fraction1 * rgb1.g,
        b: fraction0 * rgb0.b + fraction1 * rgb1.b
      };
    }
  }]);
  return Color;
}();
var color$3 = Color$1;

var Color = color$3;

/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */
var Cast = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }
  _createClass(Cast, null, [{
    key: "toNumber",
    value:
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    function toNumber(value) {
      // If value is already a number we don't need to coerce it with
      // Number().
      if (typeof value === 'number') {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        if (Number.isNaN(value)) {
          return 0;
        }
        return value;
      }
      if (typeof value === 'string') {
        // Replace full-width numbers with half-width ones.
        value = value.replace(/[０-９＋．ｅ]/g, function (s) {
          return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
        value = value.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
      }
      var n = Number(value);
      if (Number.isNaN(n)) {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
      }
      return n;
    }

    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */
  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      // Already a boolean?
      if (typeof value === 'boolean') {
        return value;
      }
      if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if (value === '' || value === '0' || value.toLowerCase() === 'false') {
          return false;
        }
        // All other strings treated as true.
        return true;
      }
      // Coerce other values and numbers.
      return Boolean(value);
    }

    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */
  }, {
    key: "toString",
    value: function toString(value) {
      return String(value).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    }

    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */
  }, {
    key: "toRgbColorList",
    value: function toRgbColorList(value) {
      var color = Cast.toRgbColorObject(value);
      return [color.r, color.g, color.b];
    }

    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */
  }, {
    key: "toRgbColorObject",
    value: function toRgbColorObject(value) {
      var color;
      if (typeof value === 'string' && value.substring(0, 1) === '#') {
        color = Color.hexToRgb(value);

        // If the color wasn't *actually* a hex color, cast to black
        if (!color) color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
      } else {
        color = Color.decimalToRgb(Cast.toNumber(value));
      }
      return color;
    }

    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */
  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }

    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */
  }, {
    key: "compare",
    value: function compare(v1, v2) {
      var n1 = Number(v1);
      var n2 = Number(v2);
      if (n1 === 0 && Cast.isWhiteSpace(v1)) {
        n1 = NaN;
      } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
        n2 = NaN;
      }
      if (isNaN(n1) || isNaN(n2)) {
        // At least one argument can't be converted to a number.
        // Scratch compares strings as case insensitive.
        var s1 = Cast.toString(v1).toLowerCase();
        var s2 = Cast.toString(v2).toLowerCase();
        if (s1 < s2) {
          return -1;
        } else if (s1 > s2) {
          return 1;
        }
        return 0;
      }
      // Handle the special case of Infinity
      if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
        return 0;
      }
      // Compare as numbers.
      return n1 - n2;
    }

    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */
  }, {
    key: "isInt",
    value: function isInt(val) {
      // Values that are already numbers.
      if (typeof val === 'number') {
        if (isNaN(val)) {
          // NaN is considered an integer.
          return true;
        }
        // True if it's "round" (e.g., 2.0 and 2).
        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        // `True` and `false` always represent integer after Scratch cast.
        return true;
      } else if (typeof val === 'string') {
        // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
      }
      return false;
    }
  }, {
    key: "LIST_INVALID",
    get: function get() {
      return 'INVALID';
    }
  }, {
    key: "LIST_ALL",
    get: function get() {
      return 'ALL';
    }

    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */
  }, {
    key: "toListIndex",
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
        }
        if (index === 'last') {
          if (length > 0) {
            return length;
          }
          return Cast.LIST_INVALID;
        } else if (index === 'random' || index === 'any') {
          if (length > 0) {
            return 1 + Math.floor(Math.random() * length);
          }
          return Cast.LIST_INVALID;
        }
      }
      index = Math.floor(Cast.toNumber(index));
      if (index < 1 || index > length) {
        return Cast.LIST_INVALID;
      }
      return index;
    }
  }]);
  return Cast;
}();
var cast = Cast;
var Cast$1 = /*@__PURE__*/getDefaultExportFromCjs(cast);

var web = {exports: {}};

var minilog$2 = {exports: {}};

function M() {
  this._events = {};
}
M.prototype = {
  on: function on(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function removeListener(ev, cb) {
    var e = this._events[ev] || [],
      i;
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      if (e[i] === cb || e[i].cb === cb) {
        e.splice(i, 1);
      }
    }
  },
  removeAllListeners: function removeAllListeners(ev) {
    if (!ev) {
      this._events = {};
    } else {
      this._events[ev] && (this._events[ev] = []);
    }
  },
  listeners: function listeners(ev) {
    return this._events ? this._events[ev] || [] : [];
  },
  emit: function emit(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1),
      i,
      e = this._events[ev] || [];
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      e[i].apply(this, args);
    }
    return this;
  },
  when: function when(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function once(ev, cb, when) {
    if (!cb) return this;
    function c() {
      if (!when) this.removeListener(ev, c);
      if (cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function (dest) {
  var o = M.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var microee$1 = M;

var microee = microee$1;

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform$4() {}
microee.mixin(Transform$4);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform$4.prototype.write = function (name, level, args) {
  this.emit('item', name, level, args);
};
Transform$4.prototype.end = function () {
  this.emit('end');
  this.removeAllListeners();
};
Transform$4.prototype.pipe = function (dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);
  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() {
    !dest._isStdio && dest.end();
  }
  s.on('item', onItem);
  s.on('end', onEnd);
  s.when('unpipe', function (from) {
    var match = from === dest || typeof from == 'undefined';
    if (match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });
  return dest;
};
Transform$4.prototype.unpipe = function (from) {
  this.emit('unpipe', from);
  return this;
};
Transform$4.prototype.format = function (dest) {
  throw new Error(['Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:', 'var Minilog = require(\'minilog\');', 'Minilog', '  .pipe(Minilog.backends.console.formatClean)', '  .pipe(Minilog.backends.console);'].join('\n'));
};
Transform$4.mixin = function (dest) {
  var o = Transform$4.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var transform = Transform$4;

// default filter
var Transform$3 = transform;
var levelMap = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};
function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}
Transform$3.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function (name, level) {
  this._white.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function (name, level) {
  this._black.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};
Filter.prototype.clear = function () {
  this._white = [];
  this._black = [];
  return this;
};
function test(rule, name) {
  // use .test for RegExps
  return rule.n.test ? rule.n.test(name) : rule.n == name;
}
Filter.prototype.test = function (name, level) {
  var i,
    len = Math.max(this._white.length, this._black.length);
  for (i = 0; i < len; i++) {
    if (this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if (this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};
Filter.prototype.write = function (name, level, args) {
  if (!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};
var filter = Filter;

(function (module, exports) {
  var Transform = transform,
    Filter = filter;
  var log = new Transform(),
    slice = Array.prototype.slice;
  exports = module.exports = function create(name) {
    var o = function o() {
      log.write(name, undefined, slice.call(arguments));
      return o;
    };
    o.debug = function () {
      log.write(name, 'debug', slice.call(arguments));
      return o;
    };
    o.info = function () {
      log.write(name, 'info', slice.call(arguments));
      return o;
    };
    o.warn = function () {
      log.write(name, 'warn', slice.call(arguments));
      return o;
    };
    o.error = function () {
      log.write(name, 'error', slice.call(arguments));
      return o;
    };
    o.log = o.debug; // for interface compliance with Node and browser consoles
    o.suggest = exports.suggest;
    o.format = log.format;
    return o;
  };

  // filled in separately
  exports.defaultBackend = exports.defaultFormatter = null;
  exports.pipe = function (dest) {
    return log.pipe(dest);
  };
  exports.end = exports.unpipe = exports.disable = function (from) {
    return log.unpipe(from);
  };
  exports.Transform = Transform;
  exports.Filter = Filter;
  // this is the default filter that's applied when .enable() is called normally
  // you can bypass it completely and set up your own pipes
  exports.suggest = new Filter();
  exports.enable = function () {
    if (exports.defaultFormatter) {
      return log.pipe(exports.suggest) // filter
      .pipe(exports.defaultFormatter) // formatter
      .pipe(exports.defaultBackend); // backend
    }
    return log.pipe(exports.suggest) // filter
    .pipe(exports.defaultBackend); // formatter
  };
})(minilog$2, minilog$2.exports);
var minilogExports = minilog$2.exports;

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue: '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color$2(fg, isInverse) {
  if (isInverse) {
    return 'color: #fff; background: ' + hex[fg] + ';';
  } else {
    return 'color: ' + hex[fg] + ';';
  }
}
var util = color$2;

var Transform$2 = transform,
  color$1 = util;
var colors$1 = {
    debug: ['cyan'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$2 = new Transform$2();
logger$2.write = function (name, level, args) {
  var fn = console.log;
  if (console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, ['%c' + name + ' %c' + level, color$1('gray'), color$1.apply(color$1, colors$1[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$2.pipe = function () {};
var color_1 = logger$2;

var Transform$1 = transform,
  color = util,
  colors = {
    debug: ['gray'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$1 = new Transform$1();
logger$1.write = function (name, level, args) {
  var fn = console.log;
  if (level != 'debug' && console[level]) {
    fn = console[level];
  }
  var i = 0;
  if (level != 'info') {
    for (; i < args.length; i++) {
      if (typeof args[i] != 'string') break;
    }
    fn.apply(console, ['%c' + name + ' ' + args.slice(0, i).join(' '), color.apply(color, colors[level])].concat(args.slice(i)));
  } else {
    fn.apply(console, ['%c' + name, color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$1.pipe = function () {};
var minilog$1 = logger$1;

var Transform = transform;
var newlines = /\n+$/,
  logger = new Transform();
logger.write = function (name, level, args) {
  var i = args.length - 1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if (console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if (JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if (args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for (i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch (e) {}
    console.log(args.join(' '));
  }
};
logger.formatters = ['color', 'minilog'];
logger.color = color_1;
logger.minilog = minilog$1;
var console_1 = logger;

var array;
var hasRequiredArray;
function requireArray() {
  if (hasRequiredArray) return array;
  hasRequiredArray = 1;
  var Transform = transform,
    cache = [];
  var logger = new Transform();
  logger.write = function (name, level, args) {
    cache.push([name, level, args]);
  };

  // utility functions
  logger.get = function () {
    return cache;
  };
  logger.empty = function () {
    cache = [];
  };
  array = logger;
  return array;
}

var localstorage;
var hasRequiredLocalstorage;
function requireLocalstorage() {
  if (hasRequiredLocalstorage) return localstorage;
  hasRequiredLocalstorage = 1;
  var Transform = transform,
    cache = false;
  var logger = new Transform();
  logger.write = function (name, level, args) {
    if (typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;
    try {
      if (!cache) {
        cache = window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : [];
      }
      cache.push([new Date().toString(), name, level, args]);
      window.localStorage.minilog = JSON.stringify(cache);
    } catch (e) {}
  };
  localstorage = logger;
  return localstorage;
}

var jquery_simple;
var hasRequiredJquery_simple;
function requireJquery_simple() {
  if (hasRequiredJquery_simple) return jquery_simple;
  hasRequiredJquery_simple = 1;
  var Transform = transform;
  var cid = new Date().valueOf().toString(36);
  function AjaxLogger(options) {
    this.url = options.url || '';
    this.cache = [];
    this.timer = null;
    this.interval = options.interval || 30 * 1000;
    this.enabled = true;
    this.jQuery = window.jQuery;
    this.extras = {};
  }
  Transform.mixin(AjaxLogger);
  AjaxLogger.prototype.write = function (name, level, args) {
    if (!this.timer) {
      this.init();
    }
    this.cache.push([name, level].concat(args));
  };
  AjaxLogger.prototype.init = function () {
    if (!this.enabled || !this.jQuery) return;
    var self = this;
    this.timer = setTimeout(function () {
      var i,
        logs = [],
        ajaxData,
        url = self.url;
      if (self.cache.length == 0) return self.init();
      // Test each log line and only log the ones that are valid (e.g. don't have circular references).
      // Slight performance hit but benefit is we log all valid lines.
      for (i = 0; i < self.cache.length; i++) {
        try {
          JSON.stringify(self.cache[i]);
          logs.push(self.cache[i]);
        } catch (e) {}
      }
      if (self.jQuery.isEmptyObject(self.extras)) {
        ajaxData = JSON.stringify({
          logs: logs
        });
        url = self.url + '?client_id=' + cid;
      } else {
        ajaxData = JSON.stringify(self.jQuery.extend({
          logs: logs
        }, self.extras));
      }
      self.jQuery.ajax(url, {
        type: 'POST',
        cache: false,
        processData: false,
        data: ajaxData,
        contentType: 'application/json',
        timeout: 10000
      }).success(function (data, status, jqxhr) {
        if (data.interval) {
          self.interval = Math.max(1000, data.interval);
        }
      }).error(function () {
        self.interval = 30000;
      }).always(function () {
        self.init();
      });
      self.cache = [];
    }, this.interval);
  };
  AjaxLogger.prototype.end = function () {};

  // wait until jQuery is defined. Useful if you don't control the load order.
  AjaxLogger.jQueryWait = function (onDone) {
    if (typeof window !== 'undefined' && (window.jQuery || window.$)) {
      return onDone(window.jQuery || window.$);
    } else if (typeof window !== 'undefined') {
      setTimeout(function () {
        AjaxLogger.jQueryWait(onDone);
      }, 200);
    }
  };
  jquery_simple = AjaxLogger;
  return jquery_simple;
}

(function (module, exports) {
  var Minilog = minilogExports;
  var oldEnable = Minilog.enable,
    oldDisable = Minilog.disable,
    isChrome = typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent),
    console = console_1;

  // Use a more capable logging backend if on Chrome
  Minilog.defaultBackend = isChrome ? console.minilog : console;

  // apply enable inputs from localStorage and from the URL
  if (typeof window != 'undefined') {
    try {
      Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
    } catch (e) {}
    if (window.location && window.location.search) {
      var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
      match && Minilog.enable(decodeURIComponent(match[1]));
    }
  }

  // Make enable also add to localStorage
  Minilog.enable = function () {
    oldEnable.call(Minilog, true);
    try {
      window.localStorage['minilogSettings'] = JSON.stringify(true);
    } catch (e) {}
    return this;
  };
  Minilog.disable = function () {
    oldDisable.call(Minilog);
    try {
      delete window.localStorage.minilogSettings;
    } catch (e) {}
    return this;
  };
  exports = module.exports = Minilog;
  exports.backends = {
    array: requireArray(),
    browser: Minilog.defaultBackend,
    localStorage: requireLocalstorage(),
    jQuery: requireJquery_simple()
  };
})(web, web.exports);
var webExports = web.exports;

var minilog = webExports;
minilog.enable();
var log = minilog('vm');
var log$1 = /*@__PURE__*/getDefaultExportFromCjs(log);

var en = {
	"gai.name": "GAI",
	"gai.generate": "generate [PROMPT]",
	"gai.generateDefault": "What is AI?",
	"gai.costumeData": "costume data [COSTUME]",
	"gai.backdropData": "backdrop data [BACKDROP]",
	"gai.snapshotData": "snapshot data",
	"gai.soundData": "sound data [SOUND]",
	"gai.startListening": "start listening",
	"gai.stopListening": "stop listening",
	"gai.listenedData": "listened data",
	"gai.chat": "chat [PROMPT]",
	"gai.chatDefault": "Hello Gemini!",
	"gai.chatHistory": "chat history",
	"gai.startChat": "start chat with history [HISTORY]",
	"gai.embeddingFor": "embedding of [CONTENT] for [TASK_TYPE]",
	"gai.embeddingTaskTypeMenu.retrievalQuery": "Retrieval query",
	"gai.embeddingTaskTypeMenu.retrievalDocument": "Retrieval document",
	"gai.embeddingTaskTypeMenu.semanticSimilarity": "Semantic similarity",
	"gai.embeddingTaskTypeMenu.classification": "Classification",
	"gai.embeddingTaskTypeMenu.clustering": "Clustering",
	"gai.embeddingDistanceOf": "[METRIC] of [VECTOR_A] and [VECTOR_B]",
	"gai.distanceMetricMenu.dotProduct": "Dot product",
	"gai.distanceMetricMenu.euclidean": "Euclidean distance",
	"gai.responseText": "response draft #[CANDIDATE_INDEX] text",
	"gai.responseSafetyRating": "response #[CANDIDATE_INDEX] safety rating [HARM_CATEGORY]",
	"gai.setSafetyRating": "set [HARM_CATEGORY] to [BLOCK_THRESHOLD]",
	"gai.whenPartialResponseReceived": "when partial response received",
	"gai.partialResponseText": "partial response text",
	"gai.setGenerativeModel": "use model [MODEL_CODE] for generative",
	"gai.getGenerativeModel": "generative model",
	"gai.setEmbeddingModel": "use model [MODEL_CODE] for embedding",
	"gai.getEmbeddingModel": "embedding model",
	"gai.setGenerationConfig": "set generation [CONFIG] to [VALUE]",
	"gai.generationConfigMenu.maxOutputTokens": "Max output tokens",
	"gai.generationConfigMenu.candidateCount": "Candidate count",
	"gai.generationConfigMenu.stopSequences": "Stop sequences",
	"gai.generationConfigMenu.temperature": "Temperature",
	"gai.generationConfigMenu.topP": "Top P",
	"gai.generationConfigMenu.topK": "Top K",
	"gai.generationConfig": "generation [CONFIG]",
	"gai.countTokensAs": "count tokens [CONTENT] as [REQUEST_TYPE]",
	"gai.countTokensRequestTypeMenu.generate": "generate",
	"gai.countTokensRequestTypeMenu.chat": "chat",
	"gai.harmCategoryMenu.hateSpeech": "Hate speech",
	"gai.harmCategoryMenu.sexuallyExplicit": "Sexually explicit",
	"gai.harmCategoryMenu.harassment": "Harassment",
	"gai.harmCategoryMenu.dangerousContent": "Dangerous content",
	"gai.harmCategorySettingMenu.all": "All harm categories",
	"gai.harmBlockThresholdMenu.unspecified": "Unspecified",
	"gai.harmBlockThresholdMenu.blockMost": "Block most",
	"gai.harmBlockThresholdMenu.blockSome": "Block some",
	"gai.harmBlockThresholdMenu.blockFew": "Block few",
	"gai.harmBlockThresholdMenu.blockNone": "Block none",
	"gai.askApiKey": "ask API key",
	"gai.setApiKey": "set API key to [KEY]",
	"gai.apiKey": "API key",
	"gai.apiKeyDialog.message": "set API key",
	"gai.apiKeyDialog.howToGetApiKey": "get API key",
	"gai.apiKeyDialog.cancel": "cancel",
	"gai.apiKeyDialog.set": "set"
};
var ja = {
	"gai.name": "GAI",
	"gai.generate": "生成[PROMPT]",
	"gai.generateDefault": "AIとは?",
	"gai.costumeData": "コスチューム[COSTUME]のデータ",
	"gai.backdropData": "背景[BACKDROP]のデータ",
	"gai.snapshotData": "スナップショットのデータ",
	"gai.soundData": "音[SOUND]のデータ",
	"gai.startListening": "聞き取り開始",
	"gai.stopListening": "聞き取り終了",
	"gai.listenedData": "聞き取ったデータ",
	"gai.chat": "対話[PROMPT]",
	"gai.chatDefault": "こんにちはジェミニ！",
	"gai.chatHistory": "対話履歴",
	"gai.startChat": "[HISTORY]に続けて対話を始める",
	"gai.embeddingFor": "[CONTENT]の[TASK_TYPE]の埋め込み表現",
	"gai.embeddingTaskTypeMenu.retrievalQuery": "検索の質問として",
	"gai.embeddingTaskTypeMenu.retrievalDocument": "検索される文書として",
	"gai.embeddingTaskTypeMenu.semanticSimilarity": "似た意味を探すため",
	"gai.embeddingTaskTypeMenu.classification": "分類のため",
	"gai.embeddingTaskTypeMenu.clustering": "クラスタリングのため",
	"gai.embeddingDistanceOf": "[VECTOR_A]と[VECTOR_B]の[METRIC]",
	"gai.distanceMetricMenu.dotProduct": "内積",
	"gai.distanceMetricMenu.euclidean": "ユークリッド距離",
	"gai.responseText": "回答候補[CANDIDATE_INDEX]",
	"gai.responseSafetyRating": "回答候補[CANDIDATE_INDEX]の[HARM_CATEGORY]のレベル",
	"gai.setSafetyRating": "[HARM_CATEGORY]の[BLOCK_THRESHOLD]",
	"gai.whenPartialResponseReceived": "回答の一部を受け取ったとき",
	"gai.partialResponseText": "回答の一部",
	"gai.setGenerativeModel": "生成のモデルに[MODEL_CODE]を使う",
	"gai.getGenerativeModel": "生成のモデル",
	"gai.setEmbeddingModel": "埋め込み表現のモデルに[MODEL_CODE]を使う",
	"gai.getEmbeddingModel": "埋め込み表現のモデル",
	"gai.setGenerationConfig": "生成の[CONFIG]を[VALUE]にする",
	"gai.generationConfigMenu.maxOutputTokens": "最大トークン数",
	"gai.generationConfigMenu.candidateCount": "回答候補の数",
	"gai.generationConfigMenu.stopSequences": "ストップシーケンス",
	"gai.generationConfigMenu.temperature": "温度",
	"gai.generationConfigMenu.topP": "Top P",
	"gai.generationConfigMenu.topK": "Top K",
	"gai.generationConfig": "生成の[CONFIG]",
	"gai.countTokensAs": "[REQUEST_TYPE][CONTENT]のトークン数",
	"gai.countTokensRequestTypeMenu.generate": "生成",
	"gai.countTokensRequestTypeMenu.chat": "対話",
	"gai.harmCategoryMenu.hateSpeech": "ヘイトスピーチ",
	"gai.harmCategoryMenu.sexuallyExplicit": "露骨な性的表現",
	"gai.harmCategoryMenu.harassment": "ハラスメント",
	"gai.harmCategoryMenu.dangerousContent": "危険な内容",
	"gai.harmCategorySettingMenu.all": "すべての危険な内容",
	"gai.harmBlockThresholdMenu.unspecified": "設定をしない",
	"gai.harmBlockThresholdMenu.blockMost": "ほとんどをブロックする",
	"gai.harmBlockThresholdMenu.blockSome": "一部をブロックする",
	"gai.harmBlockThresholdMenu.blockFew": "少しをブロックする",
	"gai.harmBlockThresholdMenu.blockNone": "ブロックをしない",
	"gai.askApiKey": "APIキーを聞く",
	"gai.setApiKey": "APIキーを[KEY]にする",
	"gai.apiKey": "APIキー",
	"gai.apiKeyDialog.message": "APIキーを設定してください",
	"gai.apiKeyDialog.howToGetApiKey": "APIキーを取得",
	"gai.apiKeyDialog.cancel": "キャンセル",
	"gai.apiKeyDialog.set": "設定"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"gai.name": "GAI",
	"gai.generate": "せいせい[PROMPT]",
	"gai.generateDefault": "AIとは?",
	"gai.costumeData": "コスチューム[COSTUME]の データ",
	"gai.backdropData": "はいけい[BACKDROP]の データ",
	"gai.snapshotData": "スナップショット の データ",
	"gai.soundData": "おと[SOUND]の データ",
	"gai.startListening": "ききとり かいし",
	"gai.stopListening": "ききとり しゅうりょう",
	"gai.listenedData": "ききとった データ",
	"gai.chat": "たいわ[PROMPT]",
	"gai.chatDefault": "こんにちはジェミニ！",
	"gai.chatHistory": "たいわ の きろく",
	"gai.startChat": "[HISTORY]に つづけて たいわ を はじめる",
	"gai.embeddingFor": "[CONTENT]の[TASK_TYPE]の うめこみひょうげん",
	"gai.embeddingTaskTypeMenu.retrievalQuery": "けんさく の しつもん として",
	"gai.embeddingTaskTypeMenu.retrievalDocument": "けんさく される ぶんしょ として",
	"gai.embeddingTaskTypeMenu.semanticSimilarity": "にた いみ を さがす ため",
	"gai.embeddingTaskTypeMenu.classification": "ぶんるい の ため",
	"gai.embeddingTaskTypeMenu.clustering": "クラスタリング の ため",
	"gai.embeddingDistanceOf": "[VECTOR_A]と[VECTOR_B]の[METRIC]",
	"gai.distanceMetricMenu.dotProduct": "ないせき",
	"gai.distanceMetricMenu.euclidean": "ユークリッド きょり",
	"gai.responseText": "かいとうこうほ[CANDIDATE_INDEX]",
	"gai.responseSafetyRating": "かいとうこうほ[CANDIDATE_INDEX]の[HARM_CATEGORY]の レベル",
	"gai.setSafetyRating": "[HARM_CATEGORY]の[BLOCK_THRESHOLD]",
	"gai.whenPartialResponseReceived": "かいとう の いちぶ を うけとった とき",
	"gai.partialResponseText": "かいとう の いちぶ",
	"gai.setGenerativeModel": "せいせい の モデル に[MODEL_CODE]を つかう",
	"gai.getGenerativeModel": "せいせい の モデル",
	"gai.setEmbeddingModel": "うめこみひょうげん の モデル に[MODEL_CODE]を つかう",
	"gai.getEmbeddingModel": "うめこみひょうげん の モデル",
	"gai.setGenerationConfig": "せいせい の[CONFIG]を[VALUE]に する",
	"gai.generationConfigMenu.maxOutputTokens": "さいだいトークンすう",
	"gai.generationConfigMenu.candidateCount": "かいとうこうほ の かず",
	"gai.generationConfigMenu.stopSequences": "ストップシーケンス",
	"gai.generationConfigMenu.temperature": "おんど",
	"gai.generationConfigMenu.topP": "トップP",
	"gai.generationConfigMenu.topK": "トップK",
	"gai.generationConfig": "せいせい の[CONFIG]",
	"gai.countTokensAs": "[REQUEST_TYPE][CONTENT]の トークンすう",
	"gai.countTokensRequestTypeMenu.generate": "せいせい",
	"gai.countTokensRequestTypeMenu.chat": "たいわ",
	"gai.harmCategoryMenu.hateSpeech": "ヘイトスピーチ",
	"gai.harmCategoryMenu.sexuallyExplicit": "ろこつな せいてき ひょうげん",
	"gai.harmCategoryMenu.harassment": "ハラスメント",
	"gai.harmCategoryMenu.dangerousContent": "きけんな ないよう",
	"gai.harmCategorySettingMenu.all": "すべて の きけんな ないよう",
	"gai.harmBlockThresholdMenu.unspecified": "せってい を しない",
	"gai.harmBlockThresholdMenu.blockMost": "ほとんど を ブロックする",
	"gai.harmBlockThresholdMenu.blockSome": "いちぶ を ブロックする",
	"gai.harmBlockThresholdMenu.blockFew": "すこし を ブロックする",
	"gai.harmBlockThresholdMenu.blockNone": "ブロック を しない",
	"gai.askApiKey": "APIキー を きく",
	"gai.setApiKey": "APIキー を[KEY]に する",
	"gai.apiKey": "APIキー",
	"gai.apiKeyDialog.message": "APIキー を せってい してください",
	"gai.apiKeyDialog.howToGetApiKey": "APIキー を しゅとく",
	"gai.apiKeyDialog.cancel": "キャンセル",
	"gai.apiKeyDialog.set": "せってい"
}
};

var img = "data:image/png;base64,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";

/**
 * Whether debug mode is enabled.
 * @type {boolean}
 */
var DEBUG;

/**
 * Check if debug mode is enabled.
 * @returns {boolean} - true if debug mode is enabled.
 */
var checkDebugMode = function checkDebugMode() {
  if (typeof DEBUG !== 'undefined') {
    return DEBUG;
  }
  try {
    var urlParams = new URLSearchParams(window.location.href.split('?')[1].toLowerCase());
    if (urlParams.get('debug') === 'true' || urlParams.get('debug') === '') {
      DEBUG = true;
    } else {
      DEBUG = false;
    }
  } catch (error) {
    // ignore
  }
  return DEBUG;
};

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// dynamic import
var GoogleGenerativeAI;
_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
  var _yield$import;
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return import( /* webpackIgnore: true */
        'https://esm.run/@google/generative-ai');
      case 2:
        _yield$import = _context.sent;
        GoogleGenerativeAI = _yield$import.GoogleGenerativeAI;
      case 4:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();
var HarmCategory = {
  HARM_CATEGORY_UNSPECIFIED: 'HARM_CATEGORY_UNSPECIFIED',
  HARM_CATEGORY_HATE_SPEECH: 'HARM_CATEGORY_HATE_SPEECH',
  HARM_CATEGORY_SEXUALLY_EXPLICIT: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
  HARM_CATEGORY_HARASSMENT: 'HARM_CATEGORY_HARASSMENT',
  HARM_CATEGORY_DANGEROUS_CONTENT: 'HARM_CATEGORY_DANGEROUS_CONTENT'
};
var HarmBlockThreshold = {
  HARM_BLOCK_THRESHOLD_UNSPECIFIED: 'HARM_BLOCK_THRESHOLD_UNSPECIFIED',
  BLOCK_LOW_AND_ABOVE: 'BLOCK_LOW_AND_ABOVE',
  BLOCK_MEDIUM_AND_ABOVE: 'BLOCK_MEDIUM_AND_ABOVE',
  BLOCK_ONLY_HIGH: 'BLOCK_ONLY_HIGH',
  BLOCK_NONE: 'BLOCK_NONE'
};
var EmbeddingTaskType = {
  TASK_TYPE_UNSPECIFIED: 'TASK_TYPE_UNSPECIFIED',
  RETRIEVAL_QUERY: 'RETRIEVAL_QUERY',
  RETRIEVAL_DOCUMENT: 'RETRIEVAL_DOCUMENT',
  SEMANTIC_SIMILARITY: 'SEMANTIC_SIMILARITY',
  CLASSIFICATION: 'CLASSIFICATION',
  CLUSTERING: 'CLUSTERING'
};

/**
 * Get text of the first candidate from response.
 * @param {object} response - response from generative ai
 * @return {string} response text
 */
var getTextFromResponse = function getTextFromResponse(response) {
  if (!response) {
    return '';
  }
  if (typeof response === 'string') {
    return response;
  }
  var textStrings = [];
  if (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts) {
    var _iterator = _createForOfIteratorHelper$1(response.candidates[0].content.parts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var part = _step.value;
        if (part.text) {
          textStrings.push(part.text);
        }
        if (part.executableCode) {
          textStrings.push("\n```python\n".concat(part.executableCode.code, "\n```\n"));
        }
        if (part.codeExecutionResult) {
          textStrings.push("\n```\n".concat(part.codeExecutionResult.output, "\n```\n"));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (textStrings.length > 0) {
    return textStrings.join('');
  }
  return '';
};
var GEMINI_ADAPTERS = {};
var GeminiAdapter = /*#__PURE__*/function () {
  function GeminiAdapter(target) {
    _classCallCheck$1(this, GeminiAdapter);
    this.target = target;
    GeminiAdapter.ADAPTERS[target.id] = this;
    this.sdk = null;
    this.modelCode = Object.assign({}, GeminiAdapter.MODEL_CODE);
    this.models = {};
    this.modelParams = {
      generationConfig: {},
      safetySettings: []
    };
    this.chatSession = null;
    this.lastResponse = null;
    this.lastPartialResponse = null;
    this.requesting = false;
  }

  /**
   * Get SDK. Initialize if not exists.
   * @returns {GoogleGenerativeAI} - SDK
   */
  _createClass$1(GeminiAdapter, [{
    key: "getSDK",
    value: function getSDK() {
      if (!this.sdk) {
        this.sdk = new GoogleGenerativeAI(GeminiAdapter.getApiKey());
      }
      return this.sdk;
    }

    /**
     * Get model for data type.
     * @param {string} type - type of model ['generative' | 'embedding' | 'qa']
     * @returns {GenerativeModel} - model
     */
  }, {
    key: "getModelFor",
    value: function getModelFor(type) {
      var modelParams = this.getModelParams();
      var requestOptions = {};
      if (GeminiAdapter.baseUrl) {
        requestOptions.baseUrl = GeminiAdapter.baseUrl;
      }
      var model = this.getSDK().getGenerativeModel({
        model: this.modelCode[type],
        generationConfig: modelParams.generationConfig,
        safetySettings: modelParams.safetySettings
      }, requestOptions);
      return model;
    }

    /**
     * Get model parameters.
     * @returns {object} - model parameters
     */
  }, {
    key: "getModelParams",
    value: function getModelParams() {
      return this.modelParams;
    }

    /**
     * Count tokens by model.
     * @param {Array.<string | object>} content - content to AI
     * @param {string} requestType - type of request {'generate' | 'chat'}
     * @returns {Promise<number>} - a Promise that resolves when the tokens are counted
     */
  }, {
    key: "countTokensAs",
    value: (function () {
      var _countTokensAs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(content, requestType) {
        var model, result, history, messageContent, contents;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              model = this.getModelFor('generative');
              if (!(requestType === 'generate')) {
                _context2.next = 7;
                break;
              }
              _context2.next = 4;
              return model.countTokens(content);
            case 4:
              result = _context2.sent;
              _context2.next = 16;
              break;
            case 7:
              if (!(requestType === 'chat')) {
                _context2.next = 16;
                break;
              }
              _context2.next = 10;
              return this.getChatHistory();
            case 10:
              history = _context2.sent;
              messageContent = {
                role: 'user',
                parts: [{
                  text: content[0]
                }] // chat message is always a string at API v1
              };
              contents = [].concat(_toConsumableArray(history), [messageContent]);
              _context2.next = 15;
              return model.countTokens({
                contents: contents
              });
            case 15:
              result = _context2.sent;
            case 16:
              return _context2.abrupt("return", result.totalTokens);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function countTokensAs(_x, _x2) {
        return _countTokensAs.apply(this, arguments);
      }
      return countTokensAs;
    }()
    /**
     * Get chat history.
     * @returns {Promise<Content[]>} - a Promise that resolves when the history is received
     */
    )
  }, {
    key: "getChatHistory",
    value: function getChatHistory() {
      if (!this.chatSession) {
        return Promise.resolve([]);
      }
      return this.chatSession.getHistory();
    }

    /**
     * Check if target is requesting to AI.
     * @returns {boolean} - whether target is requesting to AI
     */
  }, {
    key: "isRequesting",
    value: function isRequesting() {
      return this.requesting;
    }

    /**
     * Set whether target is requesting to AI.
     * @param {boolean} requesting - whether target is requesting to AI
     * @returns {void}
     */
  }, {
    key: "setRequesting",
    value: function setRequesting(requesting) {
      this.requesting = requesting;
    }

    /**
     * Get last response from AI.
     * @returns {GenerateContentResponse} - last response
     */
  }, {
    key: "getLastResponse",
    value: function getLastResponse() {
      return this.lastResponse;
    }

    /**
     * Set last response from AI.
     * @param {GenerateContentResponse} response - last response
     * @returns {void}
     */
  }, {
    key: "setLastResponse",
    value: function setLastResponse(response) {
      this.lastResponse = response;
    }

    /**
     * Set last partial response from AI.
     * @param {EnhancedGenerateContentResponse} response - last partial response
     * @returns {void}
     */
  }, {
    key: "setLastPartialResponse",
    value: function setLastPartialResponse(response) {
      this.lastPartialResponse = response;
    }

    /**
     * Get last partial response from AI.
     * @returns {EnhancedGenerateContentResponse} - last partial response
     */
  }, {
    key: "getLastPartialResponse",
    value: function getLastPartialResponse() {
      return this.lastPartialResponse;
    }

    /**
     * Convert content parts to Gemini AI format.
     * @param {Array.<string | object>} contentParts - content to convert
     * @returns {Array.<string | object>} - content to Gemini AI
     */
  }, {
    key: "convertContentParts",
    value: function convertContentParts(contentParts) {
      return contentParts.map(function (p) {
        if (p.type === 'text') {
          return {
            text: p.data
          };
        } else if (p.type === 'dataURL') {
          return {
            inlineData: {
              data: p.data.split(',')[1],
              mimeType: p.data.substring(p.data.indexOf(':') + 1, p.data.indexOf(';'))
            }
          };
        }
        return p;
      });
    }

    /**
     * Send generator type prompt to AI.
     * @param {Array.<string | object>} contentParts - prompt to AI
     * @param {boolean} isStreaming - whether to get stream
     * @returns {Promise<GenerateContentResult>} - a Promise that resolves when the prompt is sent
     */
  }, {
    key: "requestGenerate",
    value: function requestGenerate(contentParts, isStreaming) {
      var model = this.getModelFor('generative');
      var geminiContentParts = this.convertContentParts(contentParts);
      if (isStreaming) {
        return model.generateContentStream(geminiContentParts);
      }
      return model.generateContent(geminiContentParts);
    }

    /**
     * Start chat.
     * @param {Array.<string>} history - history of chat
     * @returns {void}
     */
  }, {
    key: "startChat",
    value: function startChat(history) {
      var model = this.getModelFor('generative');
      this.chatSession = model.startChat(_objectSpread({
        history: history
      }, this.getModelParams()));
    }

    /**
     * Send chat message to AI.
     * @param {string} contentParts - message to AI
     * @param {boolean} isStreaming - whether to get stream
     * @returns {Promise<GenerateContentResult>} - a Promise that resolves when the message is sent
     */
  }, {
    key: "requestChat",
    value: function requestChat(contentParts, isStreaming) {
      if (!this.chatSession) {
        this.startChat([]);
      }
      var geminiContentParts = this.convertContentParts(contentParts);
      if (isStreaming) {
        return this.chatSession.sendMessageStream(geminiContentParts);
      }
      return this.chatSession.sendMessage(geminiContentParts);
    }

    /**
     * Request embedding of content.
     * @param {Array.<string> | string} contentParts - content to AI
     * @param {string} taskType - type of task {EmbeddingTaskType}
     * @returns {Promise<Array<number>>} - a Promise that resolves when the embedding is received
     */
  }, {
    key: "requestEmbedding",
    value: (function () {
      var _requestEmbedding = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(contentParts, taskType) {
        var toEmbed, cache, key, model, result;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!contentParts || !contentParts.length)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return", []);
            case 2:
              toEmbed = contentParts.reduce(function (acc, p) {
                if (p.type === 'text') {
                  return acc + p.data;
                }
                // ignore non-text content
                return acc;
              }, '');
              if (!this.embeddingCache) {
                this.embeddingCache = {};
              }
              if (!this.embeddingCache[taskType]) {
                this.embeddingCache[taskType] = {};
              }
              cache = this.embeddingCache[taskType];
              key = toEmbed;
              if (!cache[key]) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return", cache[key]);
            case 9:
              model = this.getModelFor('embedding');
              _context3.next = 12;
              return model.embedContent(toEmbed, taskType);
            case 12:
              result = _context3.sent;
              cache[key] = result.embedding.values;
              return _context3.abrupt("return", result.embedding.values);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function requestEmbedding(_x3, _x4) {
        return _requestEmbedding.apply(this, arguments);
      }
      return requestEmbedding;
    }())
  }], [{
    key: "ADAPTERS",
    get:
    /**
     * Get models.
     * @returns {object} - models with target.id as key
     * @static
     */
    function get() {
      return GEMINI_ADAPTERS;
    }

    /**
     * Default model code for each data type.
     * @returns {object} model code for data type
     */
  }, {
    key: "existsForTarget",
    value:
    /**
     * Check if Gemini AI exists for target.
     * @param {Target} target - target to check
     * @returns {boolean} - whether Gemini AI exists for target
     * @static
     * @public
     */
    function existsForTarget(target) {
      return !!GeminiAdapter.ADAPTERS[target.id];
    }

    /**
     * Get Gemini AI for target. Initialize if not exists.
     * @param {Target} target - target to get Gemini AI
     * @returns {GeminiAdapter} - Gemini AI
     */
  }, {
    key: "getForTarget",
    value: function getForTarget(target) {
      var ai = GeminiAdapter.ADAPTERS[target.id];
      if (ai) {
        return ai;
      }
      return new GeminiAdapter(target);
    }

    /**
     * Remove Gemini AI for target.
     * @param {Target} target - target to remove Gemini AI
     * @returns {void}
     */
  }, {
    key: "removeForTarget",
    value: function removeForTarget(target) {
      delete GeminiAdapter.ADAPTERS[target.id];
    }

    /**
     * Remove all Gemini Adapter.
     */
  }, {
    key: "removeAllAdapter",
    value: function removeAllAdapter() {
      Object.keys(GeminiAdapter.ADAPTERS).forEach(function (key) {
        delete GeminiAdapter.ADAPTERS[key];
      });
    }

    /**
     * Get API key.
     * @returns {string} - API key
     */
  }, {
    key: "getApiKey",
    value: function getApiKey() {
      return GoogleGenerativeAI.apiKey;
    }

    /**
     * Set API key.
     * @param {string} key - API key
     * @returns {void}
     */
  }, {
    key: "setApiKey",
    value: function setApiKey(key) {
      GoogleGenerativeAI.apiKey = key;
    }

    /**
     * Base URL for Gemini AI.
     * @type {string}
     */
  }]);
  return GeminiAdapter;
}();
_defineProperty(GeminiAdapter, "MODEL_CODE", {
  generative: 'gemini-1.5-flash',
  embedding: 'text-embedding-004'
});
_defineProperty(GeminiAdapter, "baseUrl", 'https://generativelanguage.googleapis.com');

/**
 * This module provides a set of utility functions for working with costumes.
 * @module costume-util
 */

/**
 * Convert full-width characters to half-width characters.
 * @param {string} str - string to convert
 * @returns {string} - converted string
 */
var convertToHalfWidthInt = function convertToHalfWidthInt(str) {
  return str.replace(/[０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  }).replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
};

/**
 * Convert array index from one-base to zero-base.
 * If index is negative, it is converted from the end of the array.
 * Returns most close index if index is out of range.
 * @param {number} index - one-base array index
 * @param {number} length - array length
 * @returns {number | undefined} - converted array index
 */
var convertToZeroBaseIndex = function convertToZeroBaseIndex(index, length) {
  if (length === 0) {
    return;
  }
  if (index > length) {
    return length - 1;
  }
  if (index < 0) {
    index = length + index;
    if (index < 0) {
      return 0;
    }
  } else {
    index--;
  }
  return index;
};

/**
 * Convert costume to dataURL.
 * @param {!object} costume - costume
 * @param {string?} format - format of the dataURL default is 'png'
 * @returns {Promise<string>} - a Promise that resolves when the image is converted
 */
var costumeToDataURL = function costumeToDataURL(costume) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'png';
  if (costume.asset.dataFormat === format) {
    return Promise.resolve(costume.asset.encodeDataURI());
  }
  var blob = new Blob([costume.asset.data], {
    type: costume.asset.assetType.contentType
  });
  var imageElement = new Image();
  imageElement.src = URL.createObjectURL(blob);
  return new Promise(function (resolve) {
    imageElement.onload = function (e) {
      URL.revokeObjectURL(imageElement.src);
      var img = e.target;
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      var imageData = canvas.toDataURL("image/".concat(format));
      resolve(imageData);
    };
  });
};

/**
 * Get costume by name or number.
 * If costumeName was not found and it is a number, it is treated as a one-base index.
 * Then that index was a negative number, it is treated as a zero-base index from the end of the costume list.
 * @param {!Target} target - target to get costume
 * @param {string} costumeName - name or number of the costume
 * @returns {object | undefined} - costume
 */
var getCostumeByNameOrNumber = function getCostumeByNameOrNumber(target, costumeName) {
  var costumeArray = target.getCostumes();
  var costume = costumeArray.find(function (c) {
    return c.name === costumeName;
  });
  if (!costume) {
    var costumeNumber = parseInt(convertToHalfWidthInt(costumeName), 10);
    if (!isNaN(costumeNumber) && costumeNumber !== 0) {
      var costumeIndex = convertToZeroBaseIndex(costumeNumber, costumeArray.length);
      if (typeof costumeIndex !== 'undefined') {
        costume = costumeArray[costumeIndex];
      }
    }
  }
  return costume;
};

/**
 * Add image as a costume.
 * @param {Target} target - target to add costume
 * @param {string} dataURL - image data
 * @param {Runtime} runtime - runtime
 * @param {string} imageName - name of the costume
 * @param {VirtualMachine} vm - virtual machine
 * @returns {Promise} - a Promise that resolves when the image is added
*/
var addImageAsCostume = function addImageAsCostume(target, dataURL, runtime) {
  var imageName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'costume';
  var vm = arguments.length > 4 ? arguments[4] : undefined;
  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
  var assetType;
  var dataFormat;
  if (mimeString === 'image/svg+xml') {
    assetType = runtime.storage.AssetType.ImageVector;
    dataFormat = runtime.storage.DataFormat.SVG;
  } else if (mimeString === 'image/jpeg') {
    assetType = runtime.storage.AssetType.ImageBitmap;
    dataFormat = runtime.storage.DataFormat.JPG;
  } else if (mimeString === 'image/png') {
    assetType = runtime.storage.AssetType.ImageBitmap;
    dataFormat = runtime.storage.DataFormat.PNG;
  } else {
    return Promise.reject(new Error("Unsupported image type: ".concat(mimeString)));
  }
  // Convert base64 to raw binary data held in a dataURL.
  // @see https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
  var byteString;
  if (dataURL.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURL.split(',')[1]);
  } else {
    byteString = decodeURI(dataURL.split(',')[1]);
  }
  var data = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    data[i] = byteString.charCodeAt(i);
  }
  var asset = runtime.storage.createAsset(assetType, dataFormat, data, null, true // generate md5
  );
  var newCostume = {
    name: imageName,
    dataFormat: dataFormat,
    asset: asset,
    md5: "".concat(asset.assetId, ".").concat(dataFormat),
    assetId: asset.assetId
  };
  var currentCostumeIndex = target.currentCostume;
  if (vm) {
    return vm.addCostume(newCostume.md5, newCostume, target.id).then(function () {
      target.setCostume(currentCostumeIndex);
      runtime.emitProjectChanged();
    });
  }
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = function () {
      resolve(image);
      image.onload = null;
      image.onerror = null;
    };
    image.onerror = function () {
      reject(new Error('Costume load failed. Asset could not be read.'));
      image.onload = null;
      image.onerror = null;
    };
    image.src = asset.encodeDataURI();
  }).then(function (imageElem) {
    var canvas = document.createElement('canvas');
    canvas.width = imageElem.width;
    canvas.height = imageElem.height;
    var context = canvas.getContext('2d');
    context.drawImage(imageElem, 0, 0);
    newCostume.skinId = runtime.renderer.createBitmapSkin(canvas, newCostume.bitmapResolution);
    var renderSize = runtime.renderer.getSkinSize(newCostume.skinId);
    // Actual size, since all bitmaps are resolution 2
    newCostume.size = [renderSize[0] * 2, renderSize[1] * 2];
    var rotationCenter = runtime.renderer.getSkinRotationCenter(newCostume.skinId);
    // Actual rotation center, since all bitmaps are resolution 2
    newCostume.rotationCenterX = rotationCenter[0] * 2;
    newCostume.rotationCenterY = rotationCenter[1] * 2;
    newCostume.bitmapResolution = 2;
  }).then(function () {
    target.addCostume(newCostume);
    target.setCostume(currentCostumeIndex);
    runtime.emitProjectChanged();
  });
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Parse content parts text.
 * @param {string} contentPartsText - content parts text
 * @returns {string[]} - content part directives
 */
var parseContentPartsText = function parseContentPartsText(contentPartsText) {
  var parser = /(.*?)[\s\u3000"'`[{(,.]*(data:\w+\/[\w+-]+;base64,[a-zA-Z0-9+/=]+)[\s\u3000"'`\]}),.]*|(.*)/gi;
  var contentPartDirectives = [];
  var matches = contentPartsText.matchAll(parser);
  var _iterator = _createForOfIteratorHelper(matches),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var match = _step.value;
      if (match[1]) contentPartDirectives.push(match[1]);
      if (match[2]) contentPartDirectives.push(match[2]);
      if (match[3]) contentPartDirectives.push(match[3]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return contentPartDirectives;
};

/**
 * Interpret content part directives.
 * @param {string[]} contentPartDirectives - content part directives
 * @param {Target} requester - target which is requesting to AI
 * @param {Runtime} runtime - runtime
 * @returns {object[]} - content parts
 */
var interpretContentPartDirectives = function interpretContentPartDirectives(contentPartDirectives) {
  return contentPartDirectives.map(function (directive) {
    if (directive.trim().match(/data:\w+\/[\w+-]+;base64,[a-zA-Z0-9+/=]+/)) {
      return {
        type: 'dataURL',
        data: directive
      };
    }
    return {
      type: 'text',
      data: directive
    };
  });
};

/**
 * Interpret content parts text.
 * @param {string} contentPartsText - content parts text
 * @returns {object[]} - content parts
 */
var interpretContentPartsText = function interpretContentPartsText(contentPartsText) {
  var contentPartDirectives = parseContentPartsText(contentPartsText);
  var contentParts = interpretContentPartDirectives(contentPartDirectives);
  return contentParts;
};

/**
 * Applies a function to each element of an array and returns the results in a new array.
 * @param {function} func - function to apply
 * @param {Array} arg1 - array to map over
 * @param {Array} arg2 - array to map over
 * @returns {Array} - mapped array
 */
var zipWith = function zipWith(func, arg1, arg2) {
  var arg2Length = arg2.length;
  return (arg1.length <= arg2Length ? arg1 : arg1.slice(0, arg2Length)).map(function (x, i) {
    return func(x, arg2[i]);
  });
};

/**
 * Computes the euclidean distance between two vectors.
 * @param {number[]} vectorA - vector A
 * @param {number[]} vectorB - vector B
 * @returns {number} - euclidean distance
 * @see {@link https://en.wikipedia.org/wiki/Euclidean_distance}
 */
var euclideanDistance = function euclideanDistance(vectorA, vectorB) {
  return Math.hypot.apply(Math, _toConsumableArray(zipWith(function (a, b) {
    return a - b;
  }, vectorA, vectorB)));
};

/**
 * Computes the dot product of two vectors.
 * @param {number[]} vectorA - vector A
 * @param {number[]} vectorB - vector B
 * @returns {number} - dot product
 */
var dotProduct = function dotProduct(vectorA, vectorB) {
  return zipWith(function (a, b) {
    return a * b;
  }, vectorA, vectorB).reduce(function (a, b) {
    return a + b;
  }, 0);
};

function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(r) { var n = this.s.return; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, throw: function _throw(r) { var n = this.s.return; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
var formatMessage = function formatMessage(messageData) {
  return messageData.default;
};

/**
 * Setup format-message for this extension.
 */
var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();
  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};
var EXTENSION_ID = 'gai';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
var extensionURL = 'https://yokobond.github.io/xcx-gai/dist/gai.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
var GeminiBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for Gemini.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function GeminiBlocks(runtime) {
    var _this = this;
    _classCallCheck$1(this, GeminiBlocks);
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;
    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
    runtime.on('EXTENSION_ADDED', this.onExtensionAdded.bind(this));
    this.runtime.on('PROJECT_STOP_ALL', function () {
      _this.stopListening();
    });
  }
  _createClass$1(GeminiBlocks, [{
    key: "onExtensionAdded",
    value: function onExtensionAdded(extensionInfo) {
      if (extensionInfo.id === 'gai') {
        checkDebugMode();
      }
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
  }, {
    key: "getInfo",
    value: function getInfo() {
      setupTranslations();
      return {
        id: GeminiBlocks.EXTENSION_ID,
        name: GeminiBlocks.EXTENSION_NAME,
        extensionURL: GeminiBlocks.extensionURL,
        blockIconURI: img,
        showStatusButton: false,
        blocks: [{
          opcode: 'generate',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.generate',
            default: 'generate [PROMPT]',
            description: 'generate block text of GAI'
          }),
          func: 'generate',
          arguments: {
            PROMPT: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'gai.generateDefault',
                default: 'What is AI?',
                description: 'default generate prompt for Gemini'
              })
            }
          }
        }, {
          opcode: 'chat',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.chat',
            default: 'chat [PROMPT]',
            description: 'chat block text of GAI'
          }),
          func: 'chat',
          arguments: {
            PROMPT: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'gai.chatDefault',
                default: 'Hello Gemini!',
                description: 'default chat prompt for GAI'
              })
            }
          }
        }, {
          opcode: 'chatHistory',
          blockType: BlockType$1.REPORTER,
          text: formatMessage({
            id: 'gai.chatHistory',
            default: 'chat history',
            description: 'chat history block text for Gemini'
          }),
          disableMonitor: true,
          func: 'chatHistory',
          arguments: {}
        }, {
          opcode: 'startChat',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.startChat',
            default: 'start chat with history [HISTORY]',
            description: 'start chat for Gemini'
          }),
          func: 'startChat',
          arguments: {
            HISTORY: {
              type: ArgumentType$1.STRING,
              defaultValue: ' '
            }
          }
        }, '---', {
          opcode: 'responseText',
          blockType: BlockType$1.REPORTER,
          text: formatMessage({
            id: 'gai.responseText',
            default: 'response draft #[CANDIDATE_INDEX]',
            description: 'last result of Gemini'
          }),
          disableMonitor: true,
          func: 'responseText',
          arguments: {
            CANDIDATE_INDEX: {
              type: ArgumentType$1.NUMBER,
              menu: 'responseCandidateIndexMenu'
            }
          }
        }, {
          opcode: 'responseSafetyRating',
          blockType: BlockType$1.REPORTER,
          text: formatMessage({
            id: 'gai.responseSafetyRating',
            default: 'response #[CANDIDATE_INDEX] safety rating [HARM_CATEGORY]',
            description: 'last result text for Gemini'
          }),
          disableMonitor: true,
          func: 'responseSafetyRating',
          arguments: {
            CANDIDATE_INDEX: {
              type: ArgumentType$1.NUMBER,
              menu: 'responseCandidateIndexMenu'
            },
            HARM_CATEGORY: {
              type: ArgumentType$1.STRING,
              menu: 'harmCategoryMenu'
            }
          }
        }, {
          opcode: 'whenPartialResponseReceived',
          blockType: BlockType$1.EVENT,
          text: formatMessage({
            id: 'gai.whenPartialResponseReceived',
            default: 'when partial response received',
            description: 'when partial response received for Gemini'
          }),
          isEdgeActivated: false,
          shouldRestartExistingThreads: true
        }, {
          opcode: 'partialResponseText',
          blockType: BlockType$1.REPORTER,
          text: formatMessage({
            id: 'gai.partialResponseText',
            default: 'partial response text',
            description: 'partial response text of Gemini'
          }),
          disableMonitor: true,
          func: 'partialResponseText',
          arguments: {}
        }, '---', {
          opcode: 'costumeData',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.costumeData',
            default: 'costume data [COSTUME]'
          }),
          func: 'costumeData',
          arguments: {
            COSTUME: {
              type: ArgumentType$1.STRING,
              menu: 'costumeMenu'
            }
          }
        }, {
          opcode: 'backdropData',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.backdropData',
            default: 'backdrop data [BACKDROP]'
          }),
          func: 'backdropData',
          arguments: {
            BACKDROP: {
              type: ArgumentType$1.STRING,
              menu: 'backdropMenu'
            }
          }
        }, {
          opcode: 'snapshotData',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.snapshotData',
            default: 'snapshot data',
            description: 'snapshotData block text for Gemini'
          }),
          func: 'snapshotData',
          arguments: {}
        }, {
          opcode: 'soundData',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.soundData',
            default: 'sound data [SOUND]',
            description: 'soundData block text for Gemini'
          }),
          func: 'soundData',
          arguments: {
            SOUND: {
              type: ArgumentType$1.STRING,
              menu: 'soundMenu'
            }
          }
        }, {
          opcode: 'startListening',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.startListening',
            default: 'start listening',
            description: 'startListening block text for Gemini'
          }),
          func: 'startListening',
          arguments: {}
        }, {
          opcode: 'stopListening',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.stopListening',
            default: 'stop listening',
            description: 'stopListening block text for Gemini'
          }),
          func: 'stopListening',
          arguments: {}
        }, {
          opcode: 'listenedData',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.listenedData',
            default: 'listened data',
            description: 'listenedData block text for Gemini'
          }),
          func: 'listenedData',
          arguments: {}
        }, '---', {
          opcode: 'setSafetyRating',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.setSafetyRating',
            default: 'set [HARM_CATEGORY] to [BLOCK_THRESHOLD]',
            description: 'set safety rating for Gemini'
          }),
          disableMonitor: true,
          func: 'setSafetyRating',
          arguments: {
            HARM_CATEGORY: {
              type: ArgumentType$1.STRING,
              menu: 'harmCategorySettingMenu'
            },
            BLOCK_THRESHOLD: {
              type: ArgumentType$1.STRING,
              menu: 'harmBlockThresholdMenu'
            }
          }
        }, {
          opcode: 'setGenerationConfig',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.setGenerationConfig',
            default: 'set generation [CONFIG] to [VALUE]',
            description: 'set generation config block text for Gemini'
          }),
          func: 'setGenerationConfig',
          arguments: {
            CONFIG: {
              type: ArgumentType$1.STRING,
              menu: 'generationConfigMenu'
            },
            VALUE: {
              type: ArgumentType$1.NUMBER,
              defaultValue: 1
            }
          }
        }, {
          opcode: 'generationConfig',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.generationConfig',
            default: 'generation [CONFIG]',
            description: 'generation config block text for Gemini'
          }),
          func: 'generationConfig',
          arguments: {
            CONFIG: {
              type: ArgumentType$1.STRING,
              menu: 'generationConfigMenu'
            }
          }
        }, {
          opcode: 'countTokensAs',
          blockType: BlockType$1.REPORTER,
          text: formatMessage({
            id: 'gai.countTokensAs',
            default: 'count tokens [CONTENT] as [REQUEST_TYPE]',
            description: 'count tokens block text for Gemini'
          }),
          func: 'countTokensAs',
          arguments: {
            CONTENT: {
              type: ArgumentType$1.STRING,
              defaultValue: ' '
            },
            REQUEST_TYPE: {
              type: ArgumentType$1.STRING,
              menu: 'countTokensRequestTypeMenu'
            }
          }
        }, {
          opcode: 'setGenerativeModel',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.setGenerativeModel',
            default: 'use model [MODEL_CODE] for generative',
            description: 'generative model code setting block for Gemini'
          }),
          func: 'setGenerativeModel',
          arguments: {
            MODEL_CODE: {
              type: ArgumentType$1.STRING,
              defaultValue: GeminiAdapter.MODEL_CODE.generative
            }
          }
        }, {
          opcode: 'getGenerativeModel',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.getGenerativeModel',
            default: 'generative model',
            description: 'generative model block text for Gemini'
          }),
          func: 'getGenerativeModel',
          arguments: {}
        }, '---', {
          opcode: 'embeddingFor',
          blockType: BlockType$1.REPORTER,
          text: formatMessage({
            id: 'gai.embeddingFor',
            default: 'embedding of [CONTENT] for [TASK_TYPE]',
            description: 'embed block text for Gemini'
          }),
          func: 'embeddingFor',
          arguments: {
            CONTENT: {
              type: ArgumentType$1.STRING,
              defaultValue: ' '
            },
            TASK_TYPE: {
              type: ArgumentType$1.STRING,
              menu: 'embeddingTaskTypeMenu'
            }
          }
        }, {
          opcode: 'embeddingDistanceOf',
          blockType: BlockType$1.REPORTER,
          text: formatMessage({
            id: 'gai.embeddingDistanceOf',
            default: '[METRIC] of [VECTOR_A] and [VECTOR_B]',
            description: 'vector distance block text for Gemini'
          }),
          func: 'embeddingDistanceOf',
          arguments: {
            METRIC: {
              type: ArgumentType$1.STRING,
              menu: 'distanceMetricMenu'
            },
            VECTOR_A: {
              type: ArgumentType$1.STRING,
              defaultValue: '1,1,1'
            },
            VECTOR_B: {
              type: ArgumentType$1.STRING,
              defaultValue: '1,2,3'
            }
          }
        }, '---', {
          opcode: 'setEmbeddingModel',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.setEmbeddingModel',
            default: 'use model [MODEL_CODE] for embedding',
            description: 'embedding model code setting block for Gemini'
          }),
          func: 'setEmbeddingModel',
          arguments: {
            MODEL_CODE: {
              type: ArgumentType$1.STRING,
              defaultValue: GeminiAdapter.MODEL_CODE.embedding
            }
          }
        }, {
          opcode: 'getEmbeddingModel',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.getEmbeddingModel',
            default: 'embedding model',
            description: 'embedding model block text for Gemini'
          }),
          func: 'getEmbeddingModel',
          arguments: {}
        }, '---', {
          opcode: 'askApiKey',
          blockType: BlockType$1.COMMAND,
          blockAllThreads: true,
          text: formatMessage({
            id: 'gai.askApiKey',
            default: 'ask API key',
            description: 'ask API key for Gemini'
          }),
          func: 'askApiKey',
          arguments: {}
        }, {
          opcode: 'apiKey',
          hideFromPalette: true,
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.apiKey',
            default: 'API key',
            description: 'API key for Gemini'
          }),
          func: 'apiKey',
          arguments: {}
        }, {
          opcode: 'setApiKey',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.setApiKey',
            default: 'set API key to [KEY]',
            description: 'set API key for Gemini'
          }),
          func: 'setApiKey',
          arguments: {
            KEY: {
              type: ArgumentType$1.STRING,
              defaultValue: ' ',
              description: 'API key for Gemini'
            }
          }
        }, {
          opcode: 'setBaseUrl',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'gai.setBaseUrl',
            default: 'set base URL to [URL]',
            description: 'set base URL for Gemini'
          }),
          func: 'setBaseUrl',
          arguments: {
            URL: {
              type: ArgumentType$1.STRING,
              defaultValue: GeminiAdapter.baseUrl,
              description: 'default base URL for Gemini'
            }
          }
        }, {
          opcode: 'baseUrl',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.baseUrl',
            default: 'base URL',
            description: 'base URL for Gemini'
          }),
          func: 'baseUrl',
          arguments: {}
        }],
        menus: {
          costumeMenu: {
            acceptReporters: true,
            items: 'getCostumeMenu'
          },
          backdropMenu: {
            acceptReporters: true,
            items: 'getBackdropMenu'
          },
          soundMenu: {
            acceptReporters: true,
            items: 'getSoundMenu'
          },
          responseCandidateIndexMenu: {
            acceptReporters: true,
            items: 'getResponseCandidateIndexMenu'
          },
          harmCategorySettingMenu: {
            acceptReporters: false,
            items: 'getHarmCategorySettingMenu'
          },
          harmCategoryMenu: {
            acceptReporters: false,
            items: 'getHarmCategoryMenu'
          },
          harmBlockThresholdMenu: {
            acceptReporters: false,
            items: 'getHarmBlockThresholdMenu'
          },
          generationConfigMenu: {
            acceptReporters: false,
            items: 'getGenerationConfigMenu'
          },
          countTokensRequestTypeMenu: {
            acceptReporters: false,
            items: 'getCountTokensRequestTypeMenu'
          },
          distanceMetricMenu: {
            acceptReporters: false,
            items: 'getEmbeddingDistanceMetricMenu'
          },
          embeddingTaskTypeMenu: {
            acceptReporters: false,
            items: 'getEmbeddingTaskTypeMenu'
          }
        }
      };
    }
  }, {
    key: "getCostumeMenu",
    value: function getCostumeMenu() {
      var menu = [];
      var target = this.runtime.getEditingTarget();
      if (!target) {
        return menu;
      }
      var costumes = target.sprite.costumes;
      for (var i = 0; i < costumes.length; i++) {
        menu.push({
          text: costumes[i].name,
          value: costumes[i].name
        });
      }
      return menu;
    }
  }, {
    key: "getBackdropMenu",
    value: function getBackdropMenu() {
      var menu = [];
      var target = this.runtime.getTargetForStage();
      var backdrops = target.sprite.costumes;
      for (var i = 0; i < backdrops.length; i++) {
        menu.push({
          text: backdrops[i].name,
          value: backdrops[i].name
        });
      }
      return menu;
    }
  }, {
    key: "getSoundMenu",
    value: function getSoundMenu() {
      var menu = [];
      var target = this.runtime.getEditingTarget();
      if (!target) {
        return [''];
      }
      var sounds = target.sprite.sounds;
      for (var i = 0; i < sounds.length; i++) {
        menu.push({
          text: sounds[i].name,
          value: sounds[i].name
        });
      }
      if (sounds.length === 0) {
        return [''];
      }
      return menu;
    }
  }, {
    key: "getResponseCandidateIndexMenu",
    value: function getResponseCandidateIndexMenu() {
      var menu = [{
        text: '1',
        value: '1'
      }];
      var target = this.runtime.getEditingTarget();
      if (!target) {
        return menu;
      }
      var ai = this.getAI(target);
      var modelParams = ai.getModelParams();
      if (!modelParams) {
        return menu;
      }
      if (!modelParams.generationConfig) {
        return menu;
      }
      var candidateCount = modelParams.generationConfig.candidateCount;
      for (var i = 1; i < candidateCount; i++) {
        menu.push({
          text: String(i + 1),
          value: String(i + 1)
        });
      }
      return menu;
    }
  }, {
    key: "getHarmCategoryMenu",
    value: function getHarmCategoryMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.harmCategoryMenu.hateSpeech',
          default: 'Hate Speech',
          description: 'harm category menu item for hate speech in Gemini'
        }),
        value: HarmCategory.HARM_CATEGORY_HATE_SPEECH
      }, {
        text: formatMessage({
          id: 'gai.harmCategoryMenu.sexuallyExplicit',
          default: 'Sexually Explicit',
          description: 'harm category menu item for sexually explicit in Gemini'
        }),
        value: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT
      }, {
        text: formatMessage({
          id: 'gai.harmCategoryMenu.harassment',
          default: 'Harassment',
          description: 'harm category menu item for harassment in Gemini'
        }),
        value: HarmCategory.HARM_CATEGORY_HARASSMENT
      }, {
        text: formatMessage({
          id: 'gai.harmCategoryMenu.dangerousContent',
          default: 'Dangerous Content',
          description: 'harm category menu item for dangerous content in Gemini'
        }),
        value: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT
      }];
      return menu;
    }
  }, {
    key: "getHarmCategorySettingMenu",
    value: function getHarmCategorySettingMenu() {
      var menu = this.getHarmCategoryMenu();
      menu.unshift({
        text: formatMessage({
          id: 'gai.harmCategorySettingMenu.all',
          default: 'All Harm Categories',
          description: 'harm category menu item for all in Gemini'
        }),
        value: 'ALL'
      });
      return menu;
    }
  }, {
    key: "getHarmBlockThresholdMenu",
    value: function getHarmBlockThresholdMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.unspecified',
          default: 'Unspecified',
          description: 'harm block threshold menu item for unspecified in Gemini'
        }),
        value: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED
      }, {
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.blockMost',
          default: 'Block most',
          description: 'harm block threshold menu item for block most in Gemini'
        }),
        value: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
      }, {
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.blockSome',
          default: 'Block some',
          description: 'harm block threshold menu item for block some in Gemini'
        }),
        value: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
      }, {
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.blockFew',
          default: 'Block few',
          description: 'harm block threshold menu item for block few in Gemini'
        }),
        value: HarmBlockThreshold.BLOCK_ONLY_HIGH
      }, {
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.blockNone',
          default: 'Block None',
          description: 'harm block threshold menu item for block none in Gemini'
        }),
        value: HarmBlockThreshold.BLOCK_NONE
      }];
      return menu;
    }
  }, {
    key: "getGenerationConfigMenu",
    value: function getGenerationConfigMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.generationConfigMenu.temperature',
          default: 'Temperature',
          description: 'generation config menu item for temperature in Gemini'
        }),
        value: 'temperature'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.topP',
          default: 'Top P',
          description: 'generation config menu item for top P in Gemini'
        }),
        value: 'topP'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.topK',
          default: 'Top K',
          description: 'generation config menu item for top K in Gemini'
        }),
        value: 'topK'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.maxOutputTokens',
          default: 'Max Output Tokens',
          description: 'generation config menu item for max output tokens in Gemini'
        }),
        value: 'maxOutputTokens'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.candidateCount',
          default: 'Candidate Count',
          description: 'generation config menu item for candidate count in Gemini'
        }),
        value: 'candidateCount'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.stopSequences',
          default: 'Stop Sequences',
          description: 'generation config menu item for stop sequences in Gemini'
        }),
        value: 'stopSequences'
      }];
      return menu;
    }
  }, {
    key: "getCountTokensRequestTypeMenu",
    value: function getCountTokensRequestTypeMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.countTokensRequestTypeMenu.generate',
          default: 'Generate',
          description: 'count tokens request type menu item for generate in Gemini'
        }),
        value: 'generate'
      }, {
        text: formatMessage({
          id: 'gai.countTokensRequestTypeMenu.chat',
          default: 'Chat',
          description: 'count tokens request type menu item for chat in Gemini'
        }),
        value: 'chat'
      }];
      return menu;
    }
  }, {
    key: "getEmbeddingDistanceMetricMenu",
    value: function getEmbeddingDistanceMetricMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.distanceMetricMenu.dotProduct',
          default: 'Dot Product',
          description: 'distance metric menu item for dot product in Gemini'
        }),
        value: 'dotProduct'
      }, {
        text: formatMessage({
          id: 'gai.distanceMetricMenu.euclidean',
          default: 'Euclidean Distance',
          description: 'distance metric menu item for euclidean in Gemini'
        }),
        value: 'euclidean'
      }];
      return menu;
    }
  }, {
    key: "getEmbeddingTaskTypeMenu",
    value: function getEmbeddingTaskTypeMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.retrievalQuery',
          default: 'Retrieval Query',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.RETRIEVAL_QUERY
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.retrievalDocument',
          default: 'Retrieval Document',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.RETRIEVAL_DOCUMENT
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.semanticSimilarity',
          default: 'Semantic Similarity',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.SEMANTIC_SIMILARITY
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.classification',
          default: 'Classification',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.CLASSIFICATION
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.clustering',
          default: 'Clustering',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.CLUSTERING
      }];
      return menu;
    }

    /**
     * @param {Target} target - the target to get the AI
     * @return {GeminiAdapter} - the AI for the target
     */
  }, {
    key: "getAI",
    value: function getAI(target) {
      return GeminiAdapter.getForTarget(target);
    }

    /**
     * Get partial response text from last result.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - partial response text
     */
  }, {
    key: "partialResponseText",
    value: function partialResponseText(args, util) {
      var target = util.target;
      if (!GeminiAdapter.existsForTarget(target)) {
        return '';
      }
      var ai = GeminiAdapter.getForTarget(target);
      var response = ai.getLastPartialResponse();
      if (!response) {
        return '';
      }
      return getTextFromResponse(response);
    }

    /**
     * Whether the block is using in the target.
     * @param {string} blockOpcode - block opcode
     * @param {Target} target - the target to check
     * @returns {boolean} - whether the block is using in the target
     */
  }, {
    key: "blockIsUsingInTarget",
    value: function blockIsUsingInTarget(blockOpcode, target) {
      var executableBlocks = target.blocks._blocks;
      for (var block in executableBlocks) {
        if (executableBlocks[block].opcode === blockOpcode) {
          return true;
        }
      }
      return false;
    }

    /**
     * Request content to AI and get streaming result.
     * @param {object} prompt - prompt object
     * @param {Target} target - the target to get the AI
     * @param {string} requestType - request type {'generate' | 'chat'}
     * @returns {Promise<string>} - a Promise that resolves response text
     * @private
     */
  }, {
    key: "requestContentStream",
    value: (function () {
      var _requestContentStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(prompt, target, requestType) {
        var ai, streamingResult, _totalResponse, _streamingResult, partialResponseStream, totalResponseReceived, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, partialResponse, totalResponse;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              ai = this.getAI(target);
              _context.prev = 1;
              if (!(requestType === 'generate')) {
                _context.next = 8;
                break;
              }
              _context.next = 5;
              return ai.requestGenerate(prompt, true);
            case 5:
              streamingResult = _context.sent;
              _context.next = 15;
              break;
            case 8:
              if (!(requestType === 'chat')) {
                _context.next = 14;
                break;
              }
              _context.next = 11;
              return ai.requestChat(prompt, true);
            case 11:
              streamingResult = _context.sent;
              _context.next = 15;
              break;
            case 14:
              throw new Error("unknown request type: ".concat(requestType));
            case 15:
              _context.next = 24;
              break;
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](1);
              _totalResponse = _context.t0.message;
              ai.setLastPartialResponse(_totalResponse);
              this.runtime.startHats('gai_whenPartialResponseReceived', null, target);
              ai.setLastResponse(_totalResponse);
              return _context.abrupt("return", getTextFromResponse(_totalResponse));
            case 24:
              _streamingResult = streamingResult, partialResponseStream = _streamingResult.stream, totalResponseReceived = _streamingResult.response;
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context.prev = 27;
              _iterator = _asyncIterator(partialResponseStream);
            case 29:
              _context.next = 31;
              return _iterator.next();
            case 31:
              if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                _context.next = 39;
                break;
              }
              partialResponse = _step.value;
              if (DEBUG) log$1.log(partialResponse);
              ai.setLastPartialResponse(partialResponse);
              this.runtime.startHats('gai_whenPartialResponseReceived', null, target);
            case 36:
              _iteratorAbruptCompletion = false;
              _context.next = 29;
              break;
            case 39:
              _context.next = 45;
              break;
            case 41:
              _context.prev = 41;
              _context.t1 = _context["catch"](27);
              _didIteratorError = true;
              _iteratorError = _context.t1;
            case 45:
              _context.prev = 45;
              _context.prev = 46;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context.next = 50;
                break;
              }
              _context.next = 50;
              return _iterator.return();
            case 50:
              _context.prev = 50;
              if (!_didIteratorError) {
                _context.next = 53;
                break;
              }
              throw _iteratorError;
            case 53:
              return _context.finish(50);
            case 54:
              return _context.finish(45);
            case 55:
              _context.next = 57;
              return totalResponseReceived;
            case 57:
              totalResponse = _context.sent;
              if (DEBUG) log$1.log(totalResponse);
              ai.setLastResponse(totalResponse);
              return _context.abrupt("return", getTextFromResponse(totalResponse));
            case 61:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 17], [27, 41, 45, 55], [46,, 50, 54]]);
      }));
      function requestContentStream(_x, _x2, _x3) {
        return _requestContentStream.apply(this, arguments);
      }
      return requestContentStream;
    }()
    /**
     * Request content to AI.
     * @param {string} prompt - prompt text to AI
     * @param {Target} target - the target to get the AI
     * @param {string} requestType - request type {'generate' | 'chat'}
     * @returns {Promise<string>} - a Promise that resolves response text
     * @private
     */
    )
  }, {
    key: "requestContent",
    value: (function () {
      var _requestContent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(prompt, target, requestType) {
        var ai, result, response;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              ai = this.getAI(target);
              _context2.prev = 1;
              if (!(requestType === 'generate')) {
                _context2.next = 8;
                break;
              }
              _context2.next = 5;
              return ai.requestGenerate(prompt, false);
            case 5:
              result = _context2.sent;
              _context2.next = 15;
              break;
            case 8:
              if (!(requestType === 'chat')) {
                _context2.next = 14;
                break;
              }
              _context2.next = 11;
              return ai.requestChat(prompt, false);
            case 11:
              result = _context2.sent;
              _context2.next = 15;
              break;
            case 14:
              throw new Error("unknown request type: ".concat(requestType));
            case 15:
              _context2.next = 20;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](1);
              result = {
                response: _context2.t0.message
              };
            case 20:
              response = result.response;
              ai.setLastResponse(response);
              if (DEBUG) log$1.log(response);
              return _context2.abrupt("return", getTextFromResponse(response));
            case 24:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 17]]);
      }));
      function requestContent(_x4, _x5, _x6) {
        return _requestContent.apply(this, arguments);
      }
      return requestContent;
    }())
  }, {
    key: "requestToAI",
    value: function requestToAI(promptText, target, requestType, util) {
      var ai = this.getAI(target);
      if (ai.isRequesting()) {
        util.yield();
        return;
      }
      ai.setRequesting(true);
      var prompt = interpretContentPartsText(promptText);
      if (this.blockIsUsingInTarget('gai_whenPartialResponseReceived', target)) {
        return this.requestContentStream(prompt, target, requestType).finally(function () {
          ai.setRequesting(false);
        });
      }
      return this.requestContent(prompt, target, requestType).finally(function () {
        ai.setRequesting(false);
      });
    }

    /**
     * Request AI to generate content.
     * @param {object} args - the block's arguments.
     * @param {string} args.PROMPT - prompt to AI
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     */
  }, {
    key: "generate",
    value: function generate(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 'API key is not set.';
      }
      var promptText = Cast$1.toString(args.PROMPT);
      var requestType = 'generate';
      var target = util.target;
      return this.requestToAI(promptText, target, requestType, util);
    }

    /**
     * Chat to AI. Start chat if not started.
     * @param {object} args - the block's arguments.
     * @param {string} args.PROMPT - message to AI
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     */
  }, {
    key: "chat",
    value: function chat(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 'API key is not set.';
      }
      var promptText = Cast$1.toString(args.PROMPT);
      var requestType = 'chat';
      var target = util.target;
      return this.requestToAI(promptText, target, requestType, util);
    }

    /**
     * Return costume data URL.
     * @param {object} args - the block's arguments.
     * @param {string} args.COSTUME - costume name
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - data URL of the costume
     */
  }, {
    key: "costumeData",
    value: function costumeData(args, util) {
      var costumeName = Cast$1.toString(args.COSTUME);
      var target = util.target;
      var costume = getCostumeByNameOrNumber(target, costumeName);
      if (!costume) {
        return '';
      }
      return costumeToDataURL(costume).then(function (dataURL) {
        return " ".concat(dataURL, " ");
      });
    }

    /**
     * Return backdrop data directive.
     * @param {object} args - the block's arguments.
     * @param {string} args.BACKDROP - backdrop name
     * @returns {string} - backdrop data directive
     */
  }, {
    key: "backdropData",
    value: function backdropData(args) {
      var backdropName = Cast$1.toString(args.BACKDROP);
      var stage = this.runtime.getTargetForStage();
      var backdrop = getCostumeByNameOrNumber(stage, backdropName);
      if (!backdrop) {
        return '';
      }
      return costumeToDataURL(backdrop).then(function (dataURL) {
        return " ".concat(dataURL, " ");
      });
    }

    /**
     * Return snapshot data directive.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves snapshot data URL
     */
  }, {
    key: "snapshotData",
    value: function snapshotData(args, util) {
      var _this2 = this;
      var runtime = this.runtime;
      var requester = util.target;
      return new Promise(function (resolve) {
        _this2.runtime.renderer.requestSnapshot(function (imageDataURL) {
          if (DEBUG) {
            addImageAsCostume(requester, imageDataURL, runtime, 'snapshot', runtime.vm).catch(function (e) {
              console.error(e);
            });
          }
          resolve(" ".concat(imageDataURL, " "));
        });
      });
    }

    /**
     * Return sound data directive.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - sound data URL
     */
  }, {
    key: "soundData",
    value: function soundData(args, util) {
      var soundName = Cast$1.toString(args.SOUND);
      var target = util.target;
      var sounds = target.sprite.sounds;
      var sound;
      for (var i = 0; i < sounds.length; i++) {
        if (sounds[i].name === soundName) {
          sound = sounds[i];
          break;
        }
      }
      if (!sound) {
        return '';
      }
      return " ".concat(sound.asset.encodeDataURI(), " ");
    }

    /**
     * Start sound recorder.
     * @returns {Promise} - a Promise that resolves when recorder is started
     * or rejects if user denies access to microphone.
     */
  }, {
    key: "startSoundRecorder",
    value: function startSoundRecorder() {
      var _this3 = this;
      return navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(function (stream) {
        _this3.runtime.emitMicListening(true);
        var mediaRecorder = new MediaRecorder(stream);
        _this3.soundRecorder = mediaRecorder;
        _this3.soundRecorderChunks = [];
        mediaRecorder.ondataavailable = function (event) {
          _this3.soundRecorderChunks.push(event.data);
        };
        mediaRecorder.start();
        _this3.listeningTimeout = setTimeout(function () {
          _this3.stopSoundRecorder();
        }, 60 * 1000);
      });
    }

    /**
     * Stop sound recorder.
     * @returns {?Promise<string>} - a Promise that resolves when recorder is stopped
     * and recorded sound data URL is returned
     */
  }, {
    key: "stopSoundRecorder",
    value: function stopSoundRecorder() {
      var _this4 = this;
      if (this.listeningTimeout) {
        clearTimeout(this.listeningTimeout);
        this.listeningTimeout = null;
      }
      if (this.soundRecorder) {
        return new Promise(function (resolve) {
          _this4.soundRecorder.onstop = function () {
            _this4.runtime.emitMicListening(false);
            var audioBlob = new Blob(_this4.soundRecorderChunks, {
              type: 'audio/wav'
            });
            var reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = function () {
              var dataURL = reader.result;
              _this4.recordedSoundData = dataURL;
              _this4.isListening = false;
              _this4.soundRecorder = null;
              resolve(dataURL);
            };
          };
          _this4.soundRecorder.stop();
        });
      }
      return null;
    }

    /**
     * Start listening from microphone.
     * @returns {Promise} - a Promise that resolves when recorder is started
     */
  }, {
    key: "startListening",
    value: function startListening() {
      var _this5 = this;
      if (this.isListening) {
        return;
      }
      this.isListening = true;
      return this.startSoundRecorder().catch(function (e) {
        log$1.warn('Failed to start listening', e);
        _this5.isListening = false;
      });
    }

    /**
     * Stop listening from microphone.
     * @returns {?Promise<string>} - a Promise that resolves when recorder is stopped
     */
  }, {
    key: "stopListening",
    value: function stopListening() {
      if (!this.isListening) {
        return;
      }
      if (this.soundRecorder) {
        return this.stopSoundRecorder();
      }
    }

    /**
     * Listened data.
     * @returns {string} - recorded sound data URL
     */
  }, {
    key: "listenedData",
    value: function listenedData() {
      if (this.recordedSoundData) {
        return " ".concat(this.recordedSoundData, " ");
      }
      return '';
    }

    /**
     * Chat history.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves chat history
     */
  }, {
    key: "chatHistory",
    value: function chatHistory(args, util) {
      var target = util.target;
      if (!GeminiAdapter.existsForTarget(target)) {
        return '';
      }
      var ai = GeminiAdapter.getForTarget(target);
      return ai.getChatHistory().then(function (history) {
        if (!history) {
          return '';
        }
        return JSON.stringify(history).slice(1, -1);
      });
    }

    /**
     * Start chat with history.
     * @param {object} args - the block's arguments.
     * @param {string} args.HISTORY - contents of the history of chat
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "startChat",
    value: function startChat(args, util) {
      var target = util.target;
      var historyText = String(args.HISTORY).trim();
      try {
        var history = JSON.parse("[".concat(historyText, "]"));
        this.getAI(target).startChat(history);
      } catch (error) {
        log$1.error("startChat: ".concat(error.message));
        return error.message;
      }
    }

    /**
     * Get response text from last result.
     * @param {object} args - the block's arguments.
     * @param {string} args.CANDIDATE_INDEX - index of candidate
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - response text
     */
  }, {
    key: "responseText",
    value: function responseText(args, util) {
      var target = util.target;
      if (!GeminiAdapter.existsForTarget(target)) {
        return '';
      }
      var ai = GeminiAdapter.getForTarget(target);
      var response = ai.getLastResponse(target);
      if (!response) {
        return '';
      }
      if (typeof response === 'string') {
        return response;
      }
      try {
        var candidateIndex = parseInt(args.CANDIDATE_INDEX, 10);
        if (!response.candidates) {
          if (response.promptFeedback.blockReason) {
            var blockReason = response.promptFeedback.blockReason;
            var blockReasons = response.promptFeedback.safetyRatings.filter(function (r) {
              return r.probability !== 'NEGLIGIBLE';
            });
            return "prompt was blocked: ".concat(blockReason, " (").concat(JSON.stringify(blockReasons), ")");
          }
          return "no candidate #".concat(candidateIndex);
        }
        var candidate = response.candidates[candidateIndex - 1];
        if (!candidate) {
          return "no candidate #".concat(candidateIndex);
        }
        if (!candidate.content) {
          if (candidate.finishReason === 'SAFETY') {
            return "finished by safety: ".concat(JSON.stringify(candidate.safetyRatings));
          }
          return candidate.finishReason;
        }
        return candidate.content.parts[0].text;
      } catch (error) {
        log$1.error("responseText: ".concat(error.message));
        return error.message;
      }
    }

    /**
     * Get response safety rating from last result.
     * @param {object} args - the block's arguments.
     * @param {string} args.CANDIDATE_INDEX - index of candidate
     * @param {string} args.HARM_CATEGORY - harm category
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - response safety rating
     */
  }, {
    key: "responseSafetyRating",
    value: function responseSafetyRating(args, util) {
      var target = util.target;
      if (!GeminiAdapter.existsForTarget(target)) {
        return '';
      }
      var ai = GeminiAdapter.getForTarget(target);
      var response = ai.getLastResponse();
      if (!response) {
        return '';
      }
      try {
        var candidateIndex = parseInt(args.CANDIDATE_INDEX, 10);
        if (!response.candidates) {
          if (response.promptFeedback.blockReason) {
            var blockReason = response.promptFeedback.blockReason;
            var blockReasons = response.promptFeedback.safetyRatings.filter(function (r) {
              return r.probability !== 'NEGLIGIBLE';
            });
            return "prompt was blocked: ".concat(blockReason, " (").concat(JSON.stringify(blockReasons), ")");
          }
          return "no candidate #".concat(candidateIndex);
        }
        var candidate = response.candidates[candidateIndex - 1];
        var category = args.HARM_CATEGORY;
        var rating = candidate.safetyRatings.find(function (r) {
          return r.category === category;
        });
        if (!rating) {
          return "";
        }
        var probabilityText = rating.probability;
        switch (probabilityText) {
          case 'HARM_PROBABILITY_UNSPECIFIED':
            probabilityText = 'Unspecified';
            break;
          case 'NEGLIGIBLE':
            probabilityText = 'Negligible';
            break;
          case 'LOW':
            probabilityText = 'Low';
            break;
          case 'MEDIUM':
            probabilityText = 'Medium';
            break;
          case 'HIGH':
            probabilityText = 'High';
            break;
          default:
            break;
        }
        return probabilityText;
      } catch (error) {
        log$1.error("responseSafetyRating: ".concat(error.message));
        return error.message;
      }
    }

    /**
     * Set safety rating.
     * @param {object} args - the block's arguments.
     * @param {string} args.HARM_CATEGORY - harm category
     * @param {string} args.BLOCK_THRESHOLD - block threshold
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "setSafetyRating",
    value: function setSafetyRating(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      var modelParams = ai.getModelParams();
      var harmCategory = args.HARM_CATEGORY;
      var harmBlockThreshold = args.BLOCK_THRESHOLD;
      var setParams = function setParams(category, threshold) {
        var safetyRating = {
          category: category,
          threshold: threshold
        };
        var index = modelParams.safetySettings.findIndex(function (r) {
          return r.category === category;
        });
        if (index >= 0) {
          modelParams.safetySettings[index] = safetyRating;
        } else {
          modelParams.safetySettings.push(safetyRating);
        }
      };
      if (harmCategory === 'ALL') {
        Object.keys(HarmCategory).forEach(function (category) {
          if (category === 'HARM_CATEGORY_UNSPECIFIED') return;
          setParams(category, harmBlockThreshold);
        });
      } else {
        setParams(harmCategory, harmBlockThreshold);
      }
    }

    /**
     * Set generation config.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONFIG - config key
     * @param {string} args.VALUE - config value
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "setGenerationConfig",
    value: function setGenerationConfig(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      var modelParams = ai.getModelParams();
      var configKey = args.CONFIG;
      var configValue = args.VALUE;
      switch (configKey) {
        case 'maxOutputTokens':
          configValue = Math.max(1, parseInt(Cast$1.toString(configValue), 10));
          break;
        case 'candidateCount':
          configValue = Math.max(1, parseInt(Cast$1.toString(configValue), 10));
          break;
        case 'stopSequences':
          configValue = Cast$1.toString(configValue).split(',').map(function (s) {
            return s.trim();
          });
          break;
        case 'temperature':
          configValue = Math.max(0.0, Math.min(1.0, Cast$1.toNumber(configValue)));
          break;
        case 'topP':
          configValue = Math.max(0.0, Math.min(1.0, Cast$1.toNumber(configValue)));
          break;
        case 'topK':
          configValue = Math.max(1, parseInt(Cast$1.toNumber(configValue), 10));
          break;
        default:
          return "unknown config key: ".concat(configKey);
      }
      if (configValue === '') {
        delete modelParams.generationConfig[configKey];
        return "delete ".concat(configKey);
      }
      modelParams.generationConfig[configKey] = configValue;
    }

    /**
     * Get generation config.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONFIG - config key
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - config value
     */
  }, {
    key: "generationConfig",
    value: function generationConfig(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      var modelParams = ai.getModelParams();
      var configKey = args.CONFIG;
      var configValue = modelParams.generationConfig[configKey];
      if (configValue === null || typeof configValue === 'undefined') {
        return '';
      }
      return configValue;
    }

    /**
     * Get embedding of content.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTENT - content
     * @param {string} args.TASK_TYPE - task type
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves embedding
     */
  }, {
    key: "embeddingFor",
    value: function embeddingFor(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 'API key is not set.';
      }
      var target = util.target;
      util.runtime;
      var ai = this.getAI(target);
      if (ai.isRequesting()) {
        util.yield();
        return;
      }
      ai.setRequesting(true);
      var contentText = Cast$1.toString(args.CONTENT).trim();
      var content = interpretContentPartsText(contentText);
      var taskType = args.TASK_TYPE;
      return ai.requestEmbedding(content, taskType).then(function (embedding) {
        var jsonText = JSON.stringify(embedding);
        var result = jsonText.substring(1, jsonText.length - 1);
        return result;
      }).catch(function (error) {
        log$1.error("embeddingFor: ".concat(error.message));
        return error.message;
      }).finally(function () {
        ai.setRequesting(false);
      });
    }

    /**
     * Calculate similarity of two vectors.
     * @param {object} args - the block's arguments.
     * @param {string} args.METRIC - metric {'dotProduct' | 'euclidean'}
     * @param {string} args.VECTOR_A - vector A
     * @param {string} args.VECTOR_B - vector B
     * @returns {number} - dot product
     */
  }, {
    key: "embeddingDistanceOf",
    value: function embeddingDistanceOf(args) {
      var metric = args.METRIC;
      var vectorA = String(args.VECTOR_A).split(',').map(function (s) {
        return parseFloat(s);
      });
      var vectorB = String(args.VECTOR_B).split(',').map(function (s) {
        return parseFloat(s);
      });
      if (vectorA.length !== vectorB.length) return 'error: not same length';
      if (vectorA.every(function (x) {
        return x === 0;
      }) || vectorB.every(function (x) {
        return x === 0;
      })) return 'error: zero vector';
      var result = '';
      switch (metric) {
        case 'dotProduct':
          result = dotProduct(vectorA, vectorB);
          break;
        case 'euclidean':
          result = euclideanDistance(vectorA, vectorB);
          break;
        default:
          return 'error: unknown metric';
      }
      return result;
    }

    /**
     * Set API key and reset AI.
     * @param {object} args - the block's arguments.
     * @param {string} args.KEY - API key
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "setApiKey",
    value: function setApiKey(args) {
      var apiKey = Cast$1.toString(args.KEY).trim();
      GeminiAdapter.setApiKey(apiKey);
      GeminiAdapter.removeAllAdapter();
    }

    /**
     * Get API key.
     * @returns {string} - API key
     * @deprecated
     */
  }, {
    key: "apiKey",
    value: function apiKey() {
      return '';
    }

    /**
     * Set base URL and reset AI.
     * @param {object} args - the block's arguments.
     * @param {string} args.URL - base URL
     * @returns {string} - message
     */
  }, {
    key: "setBaseUrl",
    value: function setBaseUrl(args) {
      var baseUrl = Cast$1.toString(args.URL).trim();
      if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
        return 'error: invalid URL';
      }
      GeminiAdapter.baseUrl = baseUrl;
      GeminiAdapter.removeAllAdapter();
      return "set base URL: ".concat(baseUrl);
    }

    /**
     * Get base URL.
     * @returns {string} - base URL
     */
  }, {
    key: "baseUrl",
    value: function baseUrl() {
      return GeminiAdapter.baseUrl;
    }

    /**
     * Count tokens as request type.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTENT - content
     * @param {string} args.REQUEST_TYPE - request type {'generate' | 'chat'}
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<number>} - a Promise that resolves token count
     */
  }, {
    key: "countTokensAs",
    value: function countTokensAs(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 'API key is not set.';
      }
      var target = util.target;
      var ai = this.getAI(target);
      if (ai.isRequesting()) {
        util.yield();
        return;
      }
      ai.setRequesting(true);
      var contentText = Cast$1.toString(args.CONTENT);
      var content = interpretContentPartsText(contentText, target, this.runtime);
      var requestType = args.REQUEST_TYPE;
      return ai.countTokensAs(content, requestType).catch(function (error) {
        log$1.error(error);
        return error.message;
      }).finally(function () {
        ai.setRequesting(false);
      });
    }

    /**
     * Set generative model code.
     * @param {object} args - the block's arguments.
     * @param {string} args.MODEL_CODE - model code
     * @param {object} util - utility object provided by the runtime.
     */
  }, {
    key: "setGenerativeModel",
    value: function setGenerativeModel(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      ai.modelCode.generative = args.MODEL_CODE;
    }

    /**
     * Get generative model code.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model code
     */
  }, {
    key: "getGenerativeModel",
    value: function getGenerativeModel(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      return ai.modelCode.generative;
    }

    /**
     * Set embedding model code.
     * @param {object} args - the block's arguments.
     * @param {string} args.MODEL_CODE - model code
     * @param {object} util - utility object provided by the runtime.
     */
  }, {
    key: "setEmbeddingModel",
    value: function setEmbeddingModel(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      ai.modelCode.embedding = args.MODEL_CODE;
    }

    /**
     * Get embedding model code.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model code
     */
  }, {
    key: "getEmbeddingModel",
    value: function getEmbeddingModel(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      return ai.modelCode.embedding;
    }

    /**
     * Open dialog to input API key by user.
     * @param {string} [defaultApiKey=''] - default API key
     * @returns {Promise<string>?} - a Promise that resolves API key or null if canceled
     */
  }, {
    key: "openApiKeyDialog",
    value: function openApiKeyDialog() {
      var _this6 = this;
      var defaultApiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (this.apiKeyDialogOpened) {
        // prevent to open multiple dialogs
        return null;
      }
      this.apiKeyDialogOpened = true;
      var inputDialog = document.createElement('dialog');
      inputDialog.style.padding = '0px';
      var dialogFace = document.createElement('div');
      dialogFace.style.padding = '16px';
      inputDialog.appendChild(dialogFace);
      var label = document.createTextNode(formatMessage({
        id: 'gai.apiKeyDialog.message',
        default: 'set API key',
        description: 'label of API key input dialog for gemini'
      }));
      dialogFace.appendChild(label);
      // Dialog form
      var apiKeyForm = document.createElement('form');
      apiKeyForm.setAttribute('method', 'dialog');
      apiKeyForm.style.margin = '8px';
      apiKeyForm.addEventListener('submit', function (e) {
        e.preventDefault();
      });
      dialogFace.appendChild(apiKeyForm);
      // API select
      var apiKeyInput = document.createElement('input');
      apiKeyInput.setAttribute('type', 'text');
      apiKeyInput.setAttribute('id', 'apiKeyInput');
      apiKeyInput.setAttribute('size', '50');
      apiKeyInput.setAttribute('value', defaultApiKey);
      apiKeyForm.appendChild(apiKeyInput);
      // Cancel button
      var cancelButton = document.createElement('button');
      cancelButton.textContent = formatMessage({
        id: 'gai.apiKeyDialog.cancel',
        default: 'cancel',
        description: 'cancel button on groupID input dialog for gemini'
      });
      cancelButton.style.margin = '8px';
      dialogFace.appendChild(cancelButton);
      // OK button
      var confirmButton = document.createElement('button');
      confirmButton.textContent = formatMessage({
        id: 'gai.apiKeyDialog.set',
        default: 'set',
        description: 'set button on API key input dialog for gemini'
      });
      confirmButton.style.margin = '8px';
      dialogFace.appendChild(confirmButton);
      dialogFace.appendChild(document.createElement('br'));
      dialogFace.appendChild(document.createTextNode(' ('));
      var getApiKeyLink = document.createElement('a');
      getApiKeyLink.textContent = formatMessage({
        id: 'gai.apiKeyDialog.howToGetApiKey',
        default: 'get API key',
        description: 'link to get API key for gemini'
      });
      getApiKeyLink.setAttribute('href', 'https://ai.google.dev/gemini-api/docs/api-key');
      getApiKeyLink.setAttribute('target', '_blank');
      dialogFace.appendChild(getApiKeyLink);
      dialogFace.appendChild(document.createTextNode(')'));
      return new Promise(function (resolve) {
        // Add onClick action
        var confirmed = function confirmed() {
          var inputValue = apiKeyInput.value.trim();
          resolve(inputValue);
        };
        confirmButton.onclick = confirmed;
        var canceled = function canceled() {
          resolve(null);
        };
        cancelButton.onclick = canceled;
        inputDialog.addEventListener('keydown', function (e) {
          if (e.code === 'Enter') {
            confirmed();
          }
          if (e.code === 'Escape') {
            canceled();
          }
        });
        document.body.appendChild(inputDialog);
        inputDialog.showModal();
      }).finally(function () {
        document.body.removeChild(inputDialog);
        _this6.apiKeyDialogOpened = false;
      });
    }

    /**
     * Ask user to input API key.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "askApiKey",
    value: function askApiKey(args, util) {
      if (this.apiKeyDialogOpened) {
        util.yield();
        return;
      }
      var prevApiKey = GeminiAdapter.getApiKey();
      return this.openApiKeyDialog(prevApiKey).then(function (apiKey) {
        if (apiKey === null) {
          // canceled
          return 'canceled by user';
        }
        if (apiKey !== prevApiKey) {
          GeminiAdapter.setApiKey(apiKey);
          GeminiAdapter.removeAllAdapter();
        }
        return apiKey;
      });
    }
  }], [{
    key: "formatMessage",
    set:
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    function set(formatter) {
      formatMessage = formatter;
      if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
  }, {
    key: "EXTENSION_NAME",
    get: function get() {
      return formatMessage({
        id: 'gai.name',
        default: 'GAI',
        description: 'name of google generative AI extension'
      });
    }

    /**
     * @return {string} - the ID of this extension.
     */
  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */,
    set: function set(url) {
      extensionURL = url;
    }
  }]);
  return GeminiBlocks;
}();

export { GeminiBlocks as blockClass, entry };
//# sourceMappingURL=gai.mjs.map
