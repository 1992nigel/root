// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.6dec167e.woff","assets/fonts/Silkscreen.ttf.woff"],"assets/fonts/Silkscreen.ttf.woff"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.a45ae991.svg","assets/fonts/Silkscreen.ttf.svg"],"assets/fonts/Silkscreen.ttf.svg"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.be6987ea.eot","assets/fonts/Silkscreen.ttf.eot"],"assets/fonts/Silkscreen.ttf.eot"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ux;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var default_state = {
  url: '/',
  data: {
    firebase: {},
    wordpress: {},
    validated_user_is_logged: '',
    validated_user: '',
    returning_user: '',
    url: '',
    routes: 'null, ',
    route: 0,
    newly_created_ID: 0
  },
  motion: {
    duration: 0,
    frame: 1,
    framerate: 24,
    rate: 1000,
    sequence_game: 0
  },
  events: {
    mouse: {
      current: {
        clientX: 0,
        clientY: 0
      },
      status: {
        enter: true,
        leave: false,
        up: true,
        down: false
      },
      history: [],
      timer: 0
    },
    mouse_enter: {
      history: [],
      timer: 0
    },
    mouse_leave: {
      history: [],
      timer: 0
    },
    mouse_up: {
      history: [],
      timer: 0
    },
    mouse_down: {
      history: [],
      timer: 0
    },
    mouse_up_move: {
      history: [],
      timer: 0
    },
    mouse_down_move: {
      history: [],
      timer: 0
    },
    mouse_drag_drop: {
      history: [],
      timer: 0
    },
    touch: {
      history: [],
      timer: 0
    },
    touch_start: {
      history: [],
      timer: 0
    },
    touch_end: {
      history: [],
      timer: 0
    },
    touch_drag_drop: {
      history: [],
      timer: 0
    },
    scroll: {
      history: [],
      timer: 0
    },
    key: {
      history: [],
      timer: 0
    },
    key_up: {
      history: [],
      timer: 0
    },
    motion: {
      event_accelerationIncludingGravity_x: 0,
      event_accelerationIncludingGravity_y: 0,
      event_accelerationIncludingGravity_z: 0,
      orientation_string: '',
      event_alpha: '',
      event_beta: '',
      event_gamma: ''
    }
  },
  ux: (_ux = {
    platform: {
      is_Desktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
      is_Mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    },
    orientation: {
      is_Landscape: window.innerHeight < window.innerWidth,
      is_Portrait: window.innerHeight > window.innerWidth
    },
    browser: {
      height: window.outerHeight,
      width: window.outerWidth
    },
    window: {
      height: window.innerHeight,
      width: window.innerWidth
    },
    screen: {
      height: window.screen.height,
      width: window.screen.width,
      orientation: window.screen.orientation
    },
    dimensions: {
      current: 8,
      height: window.innerHeight,
      width: window.innerWidth,
      height8: window.innerHeight / 8,
      width8: window.innerWidth / 8,
      height16: window.innerHeight / 16,
      width16: window.innerWidth / 16,
      height32: window.innerHeight / 32,
      width32: window.innerWidth / 32,
      height64: window.innerHeight / 64,
      width64: window.innerWidth / 64,
      height128: window.innerHeight / 128,
      width128: window.innerWidth / 128,
      height256: window.innerHeight / 256,
      width256: window.innerWidth / 256
    }
  }, _defineProperty(_ux, "platform", {
    is_Desktop: false,
    is_Mobile: false
  }), _defineProperty(_ux, "browser", {
    height: window.outerHeight,
    width: window.outerWidth
  }), _defineProperty(_ux, "window", {
    height: window.innerHeight,
    width: window.innerWidth
  }), _defineProperty(_ux, "screen", {
    height: window.screen.height,
    width: window.screen.width,
    orientation: window.screen.orientation
  }), _defineProperty(_ux, "dimensions", {
    current: 8,
    height: window.innerHeight,
    width: window.innerWidth,
    height8: window.innerHeight / 8,
    width8: window.innerWidth / 8,
    height16: window.innerHeight / 16,
    width16: window.innerWidth / 16,
    height32: window.innerHeight / 32,
    width32: window.innerWidth / 32,
    height64: window.innerHeight / 64,
    width64: window.innerWidth / 64,
    height128: window.innerHeight / 128,
    width128: window.innerWidth / 128,
    height256: window.innerHeight / 256,
    width256: window.innerWidth / 256
  }), _ux),
  interaction: {
    root: {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollWidth: 0,
      scrollTop: 0,
      scrollLeft: 0,
      component_app_gui_scroll_y_position: 0,
      wheel: 'still',
      wheels: 0,
      isWheeling: false
    },
    key: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 1,
      yaxis: 1,
      height: 2,
      width: 2,
      action: {
        breathing: false,
        blinking: true,
        standing: false,
        walking: false,
        sitting: false,
        left: true,
        right: false
      }
    },
    keyhole: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 5,
      yaxis: 4,
      height: 2,
      width: 2,
      action: {
        breathing: false,
        blinking: true,
        walking: false,
        sitting: false,
        left: true,
        right: false
      }
    },
    playable: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 4,
      height: 4,
      width: 1,
      idle: {
        floating: false,
        sneak: false,
        standing: true,
        lean: false,
        deep_lean: false,
        squat: false,
        sitting: false,
        bend: false,
        deep_squat: false,
        crawl: false,
        prone: false,
        dead: false
      },
      action: {
        jumping: false,
        punching: false,
        kicking: false,
        shooting: false,
        grabing: false,
        blocking: false
      },
      status: {
        jumped: false,
        punched: false,
        kicked: false,
        shot: false,
        grabbed: false,
        blocked: false
      },
      weapon: {
        hands: false,
        paint: false,
        shoes: true,
        gun: true
      },
      cycles: {
        growth: false,
        shrink: false,
        walking: false,
        running: false,
        stunned: false
      }
    },
    player_1: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 4,
      height: 4,
      width: 1,
      idle: {
        floating: false,
        sneak: false,
        standing: true,
        lean: false,
        deep_lean: false,
        squat: false,
        sitting: false,
        bend: false,
        deep_squat: false,
        crawl: false,
        prone: false,
        dead: false
      },
      action: {
        jumping: false,
        punching: false,
        kicking: false,
        shooting: false,
        grabing: false,
        blocking: false
      },
      status: {
        jumped: false,
        punched: false,
        kicked: false,
        shot: false,
        grabbed: false,
        blocked: false
      },
      weapon: {
        hands: false,
        paint: false,
        shoes: true,
        gun: true
      },
      cycles: {
        growth: false,
        shrink: false,
        walking: true,
        running: false,
        stunned: false
      }
    },
    player_2: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 4,
      height: 4,
      width: 1,
      idle: {
        floating: false,
        sneak: false,
        standing: true,
        lean: false,
        deep_lean: false,
        squat: false,
        sitting: false,
        bend: false,
        deep_squat: false,
        crawl: false,
        prone: false,
        dead: false
      },
      action: {
        jumping: false,
        punching: false,
        kicking: false,
        shooting: false,
        grabing: false,
        blocking: false
      },
      status: {
        jumped: false,
        punched: false,
        kicked: false,
        shot: false,
        grabbed: false,
        blocked: false
      },
      weapon: {
        hands: false,
        paint: false,
        shoes: true,
        gun: true
      },
      cycles: {
        growth: false,
        shrink: false,
        walking: true,
        running: false,
        stunned: false
      }
    },
    enemy: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 4,
      height: 4,
      width: 1,
      idle: {
        floating: false,
        sneak: false,
        standing: true,
        lean: false,
        deep_lean: false,
        squat: false,
        sitting: false,
        bend: false,
        deep_squat: false,
        crawl: false,
        prone: false,
        dead: false
      },
      action: {
        jumping: false,
        punching: false,
        kicking: false,
        shooting: false,
        grabing: false,
        blocking: false
      },
      status: {
        jumped: false,
        punched: false,
        kicked: false,
        shot: false,
        grabbed: false,
        blocked: false
      },
      weapon: {
        hands: false,
        paint: false,
        shoes: true,
        gun: true
      },
      cycles: {
        growth: false,
        shrink: false,
        walking: true,
        running: false,
        stunned: false
      }
    },
    vr: {
      transform: false,
      opacity: false,
      display: false,
      clientX: -1,
      clientY: -1,
      height: 4,
      width: 1,
      stance: 5,
      clientX_increase: false,
      clientY_increase: false,
      clientX_auto: true,
      clientY_auto: false,
      idle: {
        floating: false,
        sneak: false,
        standing: true,
        lean: false,
        deep_lean: false,
        squat: false,
        sitting: false,
        bend: false,
        deep_squat: false,
        crawl: false,
        prone: false,
        dead: false
      },
      action: {
        jumping: false,
        punching: false,
        kicking: false,
        shooting: false,
        grabing: false,
        blocking: false
      },
      status: {
        jumped: false,
        punched: false,
        kicked: false,
        shot: false,
        grabbed: false,
        blocked: false
      },
      weapon: {
        hands: false,
        paint: false,
        shoes: true,
        gun: true
      },
      cycles: {
        growth: false,
        shrink: false,
        walking: false,
        running: false,
        stunned: false
      }
    },
    bridge: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 1,
      width: 1,
      stance: 5,
      idle: {
        floating: false,
        sneak: false,
        standing: true,
        lean: false,
        deep_lean: false,
        squat: false,
        sitting: false,
        bend: false,
        deep_squat: false,
        crawl: false,
        prone: false,
        dead: false
      },
      action: {
        jumping: false,
        punching: false,
        kicking: false,
        shooting: false,
        grabing: false,
        blocking: false
      },
      status: {
        jumped: false,
        punched: false,
        kicked: false,
        shot: false,
        grabbed: false,
        blocked: false
      },
      weapon: {
        hands: false,
        paint: false,
        shoes: true,
        gun: true
      },
      cycles: {
        growth: false,
        shrink: false,
        walking: true,
        running: false,
        stunned: false
      }
    },
    logo: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: -1,
      yaxis: -4,
      height: 8,
      width: 4
    },
    helper: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: -1,
      yaxis: -4,
      height: 8,
      width: 4
    },
    pen: [],
    pencil: [],
    dice: Math.floor(Math.random() * 6) + 1,
    random: Math.floor(Math.random() * 100) + 1,
    bullets: [],
    hands: {
      transform: false,
      opacity: false,
      display: false,
      speed: 1,
      xaxis: 3,
      xaxisascending: true,
      yaxis: 1,
      yaxisascending: true
    },
    track_x: {
      transform: false,
      opacity: false,
      display: false,
      speed: 1,
      xaxis: 3,
      xaxisascending: true,
      yaxis: 1,
      yaxisascending: true
    },
    track_y: {
      transform: false,
      opacity: false,
      display: false,
      speed: 1,
      xaxis: 3,
      xaxisascending: true,
      yaxis: 1,
      yaxisascending: true
    },
    ball: {
      transform: false,
      opacity: false,
      display: false,
      speed: 1,
      xaxis: 3,
      xaxisascending: true,
      yaxis: 1,
      yaxisascending: true
    },
    bounce: {
      transform: false,
      opacity: false,
      display: false,
      speed: 1,
      xaxis: 3,
      xaxisascending: true,
      yaxis: 1,
      yaxisascending: true
    },
    snake: {
      create: false,
      direction: 'up',
      snakes: [{
        clientX: 0,
        clientY: 0,
        clientXGrow: false,
        clientYGrow: false
      }]
    },
    parallax: {
      xaxis: 0,
      yaxis: 0
    }
  },
  gui: {
    top: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 0,
      width: 0
    },
    top_left: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 0,
      width: 0
    },
    top_right: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 0,
      width: 0
    },
    bottom: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 0,
      width: 0
    },
    bottom_left: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 0,
      width: 0
    },
    bottom_right: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 0,
      width: 0
    },
    left: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 0,
      width: 0
    },
    right: {
      transform: false,
      opacity: false,
      display: false,
      xaxis: 0,
      yaxis: 0,
      height: 0,
      width: 0
    }
  },
  modal: {
    pip: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    pop: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    page: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    fade: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    gradient: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    morph: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    menu: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    overlay: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    nav: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    corner: {
      top: {
        transform: false,
        opacity: false,
        display: false
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false
      },
      left: {
        transform: false,
        opacity: false,
        display: false
      },
      right: {
        transform: false,
        opacity: false,
        display: false
      }
    }
  }
};
var _default = {
  default_state: default_state
};
exports.default = _default;
},{}],"imports/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = '';

var handle_Function_Scroll = function handle_Function_Scroll(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    //state.events.scroll.history.push({event});
    //console.log('state.events.scroll.history');
    //console.log(state.events.scroll.history);
    // scrolling
    console.log("event.target.scrollingElement.clientWidth: " + event.target.scrollingElement.clientWidth);
    console.log('event.target.scrollingElement.clientWidth: ' + event.target.scrollingElement.clientWidth);
    console.log('event.target.scrollingElement.clientHeight: ' + event.target.scrollingElement.clientHeight);
    console.log('event.target.scrollingElement.scrollLeft: ' + event.target.scrollingElement.scrollLeft);
    console.log('event.target.scrollingElement.scrollTop: ' + event.target.scrollingElement.scrollTop);
    console.log('event.target.scrollingElement.scrollWidth: ' + event.target.scrollingElement.scrollWidth);
    console.log('event.target.scrollingElement.scrollHeight: ' + event.target.scrollingElement.scrollHeight);
    console.log('event.target.scrollingElement.scrollHeight: ' + event.target.scrollingElement.scrollTop); //alert('yup');
    // scrolling

    console.log("event.target.scrollingElement.clientWidth: " + event.target.scrollingElement.clientWidth);
    console.log("event.target.scrollingElement.clientHeight: " + event.target.scrollingElement.clientHeight);
    console.log("event.target.scrollingElement.scrollLeft: " + event.target.scrollingElement.scrollLeft);
    console.log("event.target.scrollingElement.scrollTop: " + event.target.scrollingElement.scrollTop);
    console.log("event.target.scrollingElement.scrollWidth: " + event.target.scrollingElement.scrollWidth);
    console.log("event.target.scrollingElement.scrollHeight: " + event.target.scrollingElement.scrollHeight);
  }

  ;
};

var handle_Function_Device_Orientation_Change = function handle_Function_Device_Orientation_Change(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Device_Orientation_Change');
};

var handle_Function_Device_DOMContentLoaded = function handle_Function_Device_DOMContentLoaded(event) {
  var _state$ux;

  window.scrollTo(0, 0);
  state = _index.default.handle_ReturnState();
  state.ux = (_state$ux = {
    platform: {
      is_Desktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
      is_Mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    },
    orientation: {
      is_Landscape: window.innerHeight < window.innerWidth,
      is_Portrait: window.innerHeight > window.innerWidth
    },
    browser: {
      height: window.outerHeight,
      width: window.outerWidth
    },
    window: {
      height: window.innerHeight,
      width: window.innerWidth
    },
    screen: {
      height: window.screen.height,
      width: window.screen.width,
      orientation: window.screen.orientation
    },
    dimensions: {
      current: 8,
      height: window.innerHeight,
      width: window.innerWidth,
      height8: window.innerHeight / 8,
      width8: window.innerWidth / 8,
      height16: window.innerHeight / 16,
      width16: window.innerWidth / 16,
      height32: window.innerHeight / 32,
      width32: window.innerWidth / 32,
      height64: window.innerHeight / 64,
      width64: window.innerWidth / 64,
      height128: window.innerHeight / 128,
      width128: window.innerWidth / 128,
      height256: window.innerHeight / 256,
      width256: window.innerWidth / 256
    }
  }, _defineProperty(_state$ux, "platform", {
    is_Desktop: false,
    is_Mobile: false
  }), _defineProperty(_state$ux, "browser", {
    height: window.outerHeight,
    width: window.outerWidth
  }), _defineProperty(_state$ux, "window", {
    height: window.innerHeight,
    width: window.innerWidth
  }), _defineProperty(_state$ux, "screen", {
    height: window.screen.height,
    width: window.screen.width,
    orientation: window.screen.orientation
  }), _defineProperty(_state$ux, "dimensions", {
    current: 8,
    height: window.innerHeight,
    width: window.innerWidth,
    height8: window.innerHeight / 8,
    width8: window.innerWidth / 8,
    height16: window.innerHeight / 16,
    width16: window.innerWidth / 16,
    height32: window.innerHeight / 32,
    width32: window.innerWidth / 32,
    height64: window.innerHeight / 64,
    width64: window.innerWidth / 64,
    height128: window.innerHeight / 128,
    width128: window.innerWidth / 128,
    height256: window.innerHeight / 256,
    width256: window.innerWidth / 256
  }), _state$ux);

  if (document.getElementById('lead') != null) {
    document.getElementById('lead').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  _index.default.act_after_check_url();

  console.log('handle_Function_Device_DOMContentLoaded');
};

var handle_Function_Device_Resize = function handle_Function_Device_Resize(event) {
  var _state$ux2;

  state = _index.default.handle_ReturnState();
  state.ux = (_state$ux2 = {
    platform: {
      is_Desktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
      is_Mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    },
    orientation: {
      is_Landscape: window.innerHeight < window.innerWidth,
      is_Portrait: window.innerHeight > window.innerWidth
    },
    browser: {
      height: window.outerHeight,
      width: window.outerWidth
    },
    window: {
      height: window.innerHeight,
      width: window.innerWidth
    },
    screen: {
      height: window.screen.height,
      width: window.screen.width,
      orientation: window.screen.orientation
    },
    dimensions: {
      current: 8,
      height: window.innerHeight,
      width: window.innerWidth,
      height8: window.innerHeight / 8,
      width8: window.innerWidth / 8,
      height16: window.innerHeight / 16,
      width16: window.innerWidth / 16,
      height32: window.innerHeight / 32,
      width32: window.innerWidth / 32,
      height64: window.innerHeight / 64,
      width64: window.innerWidth / 64,
      height128: window.innerHeight / 128,
      width128: window.innerWidth / 128,
      height256: window.innerHeight / 256,
      width256: window.innerWidth / 256
    }
  }, _defineProperty(_state$ux2, "platform", {
    is_Desktop: false,
    is_Mobile: false
  }), _defineProperty(_state$ux2, "browser", {
    height: window.outerHeight,
    width: window.outerWidth
  }), _defineProperty(_state$ux2, "window", {
    height: window.innerHeight,
    width: window.innerWidth
  }), _defineProperty(_state$ux2, "screen", {
    height: window.screen.height,
    width: window.screen.width,
    orientation: window.screen.orientation
  }), _defineProperty(_state$ux2, "dimensions", {
    current: 8,
    height: window.innerHeight,
    width: window.innerWidth,
    height8: window.innerHeight / 8,
    width8: window.innerWidth / 8,
    height16: window.innerHeight / 16,
    width16: window.innerWidth / 16,
    height32: window.innerHeight / 32,
    width32: window.innerWidth / 32,
    height64: window.innerHeight / 64,
    width64: window.innerWidth / 64,
    height128: window.innerHeight / 128,
    width128: window.innerWidth / 128,
    height256: window.innerHeight / 256,
    width256: window.innerWidth / 256
  }), _state$ux2);
  console.log('handle_Function_Device_Resize');
};

var handle_Function_Device_Orientation = function handle_Function_Device_Orientation(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Device_Orientation');
};

var handle_Function_Device_Load = function handle_Function_Device_Load(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Device_Load');
};

var handle_Function_Mouse_Move = function handle_Function_Mouse_Move(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Move');
};

var handle_Function_Mouse_Enter = function handle_Function_Mouse_Enter(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Enter');
};

var handle_Function_Mouse_Leave = function handle_Function_Mouse_Leave(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Leave');
};

var handle_Function_Mouse_Up = function handle_Function_Mouse_Up(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Up');
};

var handle_Function_Mouse_Down = function handle_Function_Mouse_Down(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Down');
};

var handle_Function_Key_Down = function handle_Function_Key_Down(event) {
  state = _index.default.handle_ReturnState();

  if (event.keyCode == 27) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);

    _index.default.modal_reset();
  }

  ;

  if (event.keyCode == 13) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
    state.data.dark_mode = !state.data.dark_mode;
    state.modal.gui.top_right.transform = !state.modal.gui.top_right.transform;
    state.modal.nav.top.transform = !state.modal.nav.top.transform;
    state.modal.menu.right.transform = !state.modal.menu.right.transform;
  }

  ;

  if (event.keyCode == 37) {
    //alert('shift');
    state.interaction.playable.angle = 0;
    state.interaction.playable.clientX -= 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 38) {
    //alert('shift');
    state.interaction.playable.stance = 1;
    state.interaction.playable.clientY -= 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 39) {
    //alert('shift');
    state.interaction.playable.angle = 1;
    state.interaction.playable.clientX += 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 40) {
    //alert('shift');
    state.interaction.playable.stance = 0;
    state.interaction.playable.clientY += 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 87) {
    //alert('w');
    state.interaction.vr.clientY += 1;
  }

  ;

  if (event.keyCode == 83) {
    //alert('s');
    state.interaction.vr.clientY -= 1;
  }

  ;

  if (event.keyCode == 68) {
    //alert('d');
    state.interaction.vr.clientX += 1;
  }

  ;

  if (event.keyCode == 65) {
    //alert('a');
    state.interaction.vr.clientX -= 1;
  }

  ;
  console.log('handle_Function_Key_Down');
};

var handle_Function_Key_Up = function handle_Function_Key_Up(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Key_Up');
};

var handle_Function_Touch_Move = function handle_Function_Touch_Move(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Touch_Move');
};

var handle_Function_Touch_Start = function handle_Function_Touch_Start(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Touch_Start');
};

var handle_Function_Touch_End = function handle_Function_Touch_End(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Touch_End');
};

var handle_Function_Device_Motion = function handle_Function_Device_Motion(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Device_Motion');
};

var handle_ReturnState_fromEvents = function handle_ReturnState_fromEvents() {
  return state;
};

var _default = {
  state: state,
  handle_ReturnState_fromEvents: handle_ReturnState_fromEvents,
  handle_Function_Key_Down: handle_Function_Key_Down,
  handle_Function_Key_Up: handle_Function_Key_Up,
  handle_Function_Mouse_Move: handle_Function_Mouse_Move,
  handle_Function_Touch_Move: handle_Function_Touch_Move,
  handle_Function_Touch_Start: handle_Function_Touch_Start,
  handle_Function_Touch_End: handle_Function_Touch_End,
  handle_Function_Scroll: handle_Function_Scroll,
  handle_Function_Device_Resize: handle_Function_Device_Resize,
  handle_Function_Device_Motion: handle_Function_Device_Motion,
  handle_Function_Mouse_Enter: handle_Function_Mouse_Enter,
  handle_Function_Mouse_Leave: handle_Function_Mouse_Leave,
  handle_Function_Mouse_Up: handle_Function_Mouse_Up,
  handle_Function_Mouse_Down: handle_Function_Mouse_Down,
  handle_Function_Device_Load: handle_Function_Device_Load,
  handle_Function_Device_DOMContentLoaded: handle_Function_Device_DOMContentLoaded,
  handle_Function_Device_Orientation: handle_Function_Device_Orientation,
  handle_Function_Device_Orientation_Change: handle_Function_Device_Orientation_Change
};
exports.default = _default;
},{"../index.js":"index.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style.scss"));

var _state = _interopRequireDefault(require("./imports/state"));

var _events = _interopRequireDefault(require("./imports/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382",
  appId: "1:415995628382:web:0295bf4137f3f5fd"
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig); // make auth ref

var auth = firebase.auth(); // make firestore ref

var db = firebase.firestore(); // listenforauth state changes

var validated_auth_user;
auth.onAuthStateChanged(function (auth_user) {
  console.log('onAuthStateChanged');

  if (auth_user == null) {
    console.log(auth_user);
    get_db_users();
  }

  ;

  if (auth_user != null) {
    validated_auth_user = auth_user;
    console.log(auth_user);
    get_db_users();
  }

  ;
}); // get

var db_users = [];

var get_db_users = function get_db_users() {
  //db.settings({timestampsInSnapshots: true});
  db.collection('users').get().then(function (snapshot) {
    console.log('snapshot.docs: ');
    console.log(snapshot.docs);
    document.getElementById('db_users').innerHTML = "";
    db_users = [];
    snapshot.docs.forEach(function (doc) {
      var snap_doc = doc.data();
      db_users.push(snap_doc);
    });
    db_users.forEach(function (post) {
      console.log(post);
      document.getElementById('db_users').innerHTML += "\n                <li class=\"user_post\">\n                    <div class=\"post_featured_image\" style=\"background-image: url(".concat(post.image, ")\"></div>\n                    \n                    <div class=\"user_post_title\"><p>").concat(post.id, "</p></div>\n                    <div class=\"user_post_author_image_block\">\n                        <div class=\"post_author_image\" style=\"background-image: url(").concat(post.image, ")\"></div>\n                        <div class=\"user_post_author_block\">\n                            <div class=\"user_post_info_1\">").concat(post.id, "</div>\n                            <div class=\"user_post_info_2\">").concat(post.id, "</div>\n                            <div class=\"user_post_stats\"><div class=\"user_post_stat_1\">").concat(post.username, "</div><div class=\"user_post_stat_2\">").concat(post.username, "</div><div class=\"user_post_stat_3\">").concat(post.username, "</div><div class=\"user_post_stat_4\">").concat(post.username, "</div><div class=\"user_post_stat_5\">").concat(post.username, "</div><div class=\"user_post_stat_6\">").concat(post.username, "</div></div>\n                        </div>\n                        <div class=\"user_post_flag_block\"></div>\n                    </div>\n\n                    <div class=\"user_post_hide hover_hide\"><p>more info</p></div>\n                    <div class=\"user_post_show hover_show\">\n                        <iframe title=\"").concat(post.title, "\" width=\"100%\" height=\"315\" src=\"").concat(post.video, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                        <img class=\"post_image\" src=\"").concat(post.image, "\" alt=\"").concat(post.username, "\"/>\n                    </div>\n                </li>\n            ");
    });
  });
}; // intervals


var load_status = 0;

var act_after_check_url = function act_after_check_url() {
  console.log('act_after_check_url');
  console.log(load_status);

  if (load_status == 0) {
    document.getElementById('lead').innerHTML = "\n            <div id=\"lead_load_bar\" class=\"width_0 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01\">\n\n            </div>\n        "; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 1) {
    document.getElementById('lead_load_bar').classList = "width_1205 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 2) {
    document.getElementById('lead_load_bar').classList = "width_25 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 3) {
    document.getElementById('lead_load_bar').classList = "width_3705 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 4) {
    document.getElementById('lead_load_bar').classList = "width_50 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 5) {
    document.getElementById('lead_load_bar').classList = "width_6205 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 6) {
    document.getElementById('lead_load_bar').classList = "width_75 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 7) {
    document.getElementById('lead_load_bar').classList = "width_8705 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 8) {
    document.getElementById('lead_load_bar').classList = "width_100 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 9) {
    document.getElementById('lead_load_bar').classList = "transform_translate3d_top_100 width_100 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 10) {
    document.getElementById('lead_load_bar').classList = ""; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;

  if (load_status == 11) {
    document.getElementById('lead').innerHTML = "\n            <input id=\"input_search\" type=\"text\" class=\"width_100 height_1205vw position_relative bg_green overflow_hidden easing_01\"/>\n        "; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;
  load_status += 1;
};

var file = 'index.js';
console.log(file);
var state = _state.default.default_state;
var body = document.getElementById('body');

var handle_ReturnState = function handle_ReturnState() {
  return state;
};

var handle_ReturnedState_fromEvents = function handle_ReturnedState_fromEvents() {
  state = _events.default.handle_ReturnState_fromEvents();
  console.log('event!');
}; // scroll


body.addEventListener('scroll', function (event) {
  _events.default.handle_Function_Scroll(event);

  handle_ReturnedState_fromEvents();
}); // events

body.addEventListener('keydown', function (event) {
  _events.default.handle_Function_Key_Down(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('keyup', function (event) {
  _events.default.handle_Function_Key_Up(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('mousemove', function (event) {
  _events.default.handle_Function_Mouse_Move(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('mouseenter', function (event) {
  _events.default.handle_Function_Mouse_Enter(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('mouseleave', function (event) {
  _events.default.handle_Function_Mouse_Leave(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('mouseup', function (event) {
  _events.default.handle_Function_Mouse_Up(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('mousedown', function (event) {
  _events.default.handle_Function_Mouse_Down(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('click', function (event) {
  _events.default.handle_Function_Mouse_Down(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('touchmove', function (event) {
  _events.default.handle_Function_Touch_Move(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('touchstart', function (event) {
  _events.default.handle_Function_Touch_Start(event);

  handle_ReturnedState_fromEvents();
});
body.addEventListener('touchend', function (event) {
  _events.default.handle_Function_Touch_End(event);

  handle_ReturnedState_fromEvents();
});
document.addEventListener("DOMContentLoaded", function (event) {
  _events.default.handle_Function_Device_DOMContentLoaded(event);

  handle_ReturnedState_fromEvents();
});
window.addEventListener("load", function (event) {
  _events.default.handle_Function_Device_Load(event);

  handle_ReturnedState_fromEvents();
});
window.addEventListener("resize", function (event) {
  _events.default.handle_Function_Device_Resize(event);

  handle_ReturnedState_fromEvents();
});
window.addEventListener("ondevicemotion", function (event) {
  _events.default.handle_Function_Device_Motion(event);

  handle_ReturnedState_fromEvents();
});
window.addEventListener("ondeviceorientation", function (event) {
  _events.default.handle_Function_Device_Orientation(event);

  handle_ReturnedState_fromEvents();
});
window.addEventListener("onorientationchange", function (event) {
  _events.default.handle_Function_Device_Orientation_Change(event);

  handle_ReturnedState_fromEvents();
});
window.addEventListener("onbeforeunload", function (event) {});
var _default = {
  file: file,
  handle_ReturnState: handle_ReturnState,
  act_after_check_url: act_after_check_url
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/state":"imports/state.js","./imports/events":"imports/events.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57574" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/fly.e31bb0bc.map