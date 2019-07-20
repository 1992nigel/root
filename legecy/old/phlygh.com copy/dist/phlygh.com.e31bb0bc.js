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
},{"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/gradient/grey_top.svg":[["grey_top.d8e034e1.svg","assets/gradient/grey_top.svg"],"assets/gradient/grey_top.svg"],"./assets/gradient/white_top.svg":[["white_top.ce87e304.svg","assets/gradient/white_top.svg"],"assets/gradient/white_top.svg"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"partials/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var state = '';
var dragging = false;
var root = document.getElementById('root');
var is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
setTimeout(function () {
  // Desktop
  if (is_Desktop) {
    root.addEventListener('wheel', function (event) {});
    root.addEventListener('mousemove', function (event) {
      state = _index.default.Handle_return_state(); // console.log('mousemove only');
      // console.log(event);

      console.log('mousemove: event.clientX: ' + event.clientX);
      console.log('mousemove: event.clientY: ' + event.clientY);
      state.events.mouse.clientX = event.clientX;
      state.events.mouse.clientY = event.clientY;
      state.events.mouse.movetimer = 0;
    });
    root.addEventListener('mousedown', function (event) {});
    root.addEventListener('mouseup', function (event) {});
    root.addEventListener('mouseenter', function (event) {});
    root.addEventListener('mouseleave', function (event) {});
    root.addEventListener('keydown', function (event) {
      state = _index.default.Handle_return_state();
      console.log(event.keyCode);
      event.preventDefault();
    });
    root.addEventListener('keyup', function (event) {
      state = _index.default.Handle_return_state();
      console.log(event.keyCode);
      event.preventDefault();

      if (event.keyCode == 27) {
        _index.default.Handle_check_route();
      }

      ;

      if (event.keyCode == 13) {
        state.app.dark_mode = !state.app.dark_mode;

        _index.default.ui_check();
      }

      ;
    });
  }

  ; // Mobile

  if (is_Mobile) {
    root.addEventListener('touchmove', function (event) {
      state = _index.default.Handle_return_state();
    });
    root.addEventListener("touchstart", function (event) {
      state = _index.default.Handle_return_state();
      state.app.dark_mode = !state.app.dark_mode;

      _index.default.ui_check();
    });
    root.addEventListener("touchend", function (event) {});
  }

  ;

  window.ondevicemotion = function (event) {
    state = _index.default.Handle_return_state(); // event.accelerationIncludingGravity.x
    // event.accelerationIncludingGravity.y
    // event.accelerationIncludingGravity.z
    ///alert('event.accelerationIncludingGravity.x: ' + event.accelerationIncludingGravity.x);
    ///alert('event.accelerationIncludingGravity.y: ' + event.accelerationIncludingGravity.y);
    ///alert('event.accelerationIncludingGravity.z: ' + event.accelerationIncludingGravity.z);

    var event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
    var event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
    var event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

    if (document.getElementById('event_accelerationIncludingGravity_x') != null) {}

    ;

    if (document.getElementById('event_accelerationIncludingGravity_y') != null) {}

    ;

    if (document.getElementById('event_accelerationIncludingGravity_z') != null) {}

    ;

    _index.default.Handle_get_state_from_events();
  };

  window.ondeviceorientation = function (event) {
    state = _index.default.Handle_return_state(); // event.alpha
    // event.beta
    // event.gamma
    ///alert('event.alpha: ' + event.alpha);
    ///alert('event.beta: ' + event.beta);
    ///alert('event.gamma: ' + event.gamma);

    var event_alpha = event.alpha;
    var event_beta = event.beta;
    var event_gamma = event.gamma;

    if (document.getElementById('event_alpha') != null) {
      document.getElementById('event_alpha').innerHTML = event_alpha;
      state.events.touch.alpha = event_alpha;
    }

    ;

    if (document.getElementById('event_beta') != null) {
      document.getElementById('event_beta').innerHTML = event_beta;
      state.events.touch.beta = event_beta;
    }

    ;

    if (document.getElementById('event_gamma') != null) {
      document.getElementById('event_gamma').innerHTML = event_gamma;
      state.events.touch.gamma = event_gamma;
    }

    ;
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    var success = function success(pos) {
      var crd = pos.coords;

      if (document.getElementById('location') != null) {
        document.getElementById('location').innerHTML = "Your current position is: Latitude : ".concat(crd.latitude, " Longitude: ").concat(crd.longitude, " More or less ").concat(crd.accuracy, " meters.");
      }

      ;
    };

    var error = function error(err) {
      console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
    };

    navigator.geolocation.getCurrentPosition(success, error, options); // get new state from events and sent it to index

    _index.default.Handle_get_state_from_events();
  };
}(), 1000);

var Handle_return_state_from_events = function Handle_return_state_from_events() {
  return state;
};

var _default = {
  state: state,
  Handle_return_state_from_events: Handle_return_state_from_events
};
exports.default = _default;
},{"../index.js":"index.js"}],"index.js":[function(require,module,exports) {
// Rules
'use strict'; // Imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style.scss"));

var _events = _interopRequireDefault(require("./partials/events"));

var _touch;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var events;
events = _events.default;
var state = {
  app: {
    route: '/',
    dark_mode: false
  },
  data: {
    dev_mode: false,
    time: '',
    firebase: {},
    wordpress: {},
    feature_posts_limit: 1,
    posts_start: 1,
    posts_limit: 3,
    refs: false,
    sort: 'likes',
    view: 'grid',
    feature_style: 'all',
    types: [{
      title: 'null'
    }],
    category: 'all',
    sub_category: 'all',
    tag: 'all',
    content: false,
    user: {},
    score: {
      current: {
        met: 0,
        area: 0
      },
      leaderboard: []
    },
    local: true
  },
  events: {
    eights: {
      clientX: 0,
      clientY: 0
    },
    mouse: {
      click: {
        clientX: 0,
        clientY: 0
      },
      clientX: 0,
      clientY: 0,
      up: true,
      down: false,
      drop_start: {
        clientX: 0,
        clientY: 0
      },
      drop_end: {
        clientX: 0,
        clientY: 0
      },
      drop: {
        clientX: 0,
        clientY: 0
      },
      drag: {
        clientX: 0,
        clientY: 0
      },
      pen: {
        clientX: 0,
        clientY: 0
      },
      pencil: {
        clientX: 0,
        clientY: 0
      },
      enter: true,
      leave: false,
      entertimer: 0,
      leavetimer: 0,
      movetimer: 0,
      mousemove: false,
      uptimer: 0,
      automation: {
        increase: true,
        decrease: false
      },
      absolute: 0,
      alpha: 0,
      beta: 0,
      gamma: 0,
      acceleration: {
        x: 0,
        y: 0,
        z: 0
      },
      accelerationIncludingGravity: {
        x: 0,
        y: 0,
        z: 0
      },
      rotationRate: {
        alpha: 0,
        beta: 0,
        gamma: 0
      },
      interval: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    touch: (_touch = {
      radiusX: 0,
      radiusY: 0,
      click: {
        clientX: 0,
        clientY: 0
      },
      start: {
        clientX: 0,
        clientY: 0
      },
      end: {
        clientX: 0,
        clientY: 0
      }
    }, _defineProperty(_touch, "click", {
      clientX: 0,
      clientY: 0
    }), _defineProperty(_touch, "clientX", 0), _defineProperty(_touch, "clientY", 0), _defineProperty(_touch, "up", true), _defineProperty(_touch, "down", false), _defineProperty(_touch, "drop", {
      clientX: 0,
      clientY: 0
    }), _defineProperty(_touch, "drag", {
      clientX: 0,
      clientY: 0
    }), _defineProperty(_touch, "dragDistanceX", 0), _defineProperty(_touch, "dragDistanceY", 0), _defineProperty(_touch, "enter", true), _defineProperty(_touch, "leave", false), _defineProperty(_touch, "entertimer", 0), _defineProperty(_touch, "leavetimer", 0), _defineProperty(_touch, "timer", 0), _defineProperty(_touch, "automation", {
      increase: true,
      decrease: false
    }), _defineProperty(_touch, "absolute", 0), _defineProperty(_touch, "alpha", 0), _defineProperty(_touch, "beta", 0), _defineProperty(_touch, "gamma", 0), _defineProperty(_touch, "acceleration", {
      x: 0,
      y: 0,
      z: 0
    }), _defineProperty(_touch, "accelerationIncludingGravity", {
      x: 0,
      y: 0,
      z: 0
    }), _defineProperty(_touch, "rotationRate", {
      alpha: 0,
      beta: 0,
      gamma: 0
    }), _defineProperty(_touch, "interval", {
      x: 0,
      y: 0,
      z: 0
    }), _touch),
    key: {
      keys: [],
      pressed: {
        key_tildy: false,
        key_1: false,
        key_2: false,
        key_3: false,
        key_4: false,
        key_5: false,
        key_6: false,
        key_7: false,
        key_8: false,
        key_9: false,
        key_0: false,
        key_space: false,
        key_arrow_left: false,
        key_arrow_right: false
      },
      last_key: 0,
      up: true,
      down: false,
      timer: 0,
      automation: {
        increase: true,
        decrease: false
      }
    }
  },
  ux: {
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
  }
};

var Handle_return_state = function Handle_return_state() {
  return state;
};

var Handle_get_state_from_events = function Handle_get_state_from_events() {
  state = _events.default.Handle_return_state_from_events();
}; // Initialization


var config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
}; // Functions

firebase.initializeApp(config);
var fb_writeable = false;
var fb_response = {};
var root = document.getElementById('root');
var is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var Generate_new_fragment = document.createDocumentFragment();

var Generate_new_div = function Generate_new_div(data_Object, id_String, class_String) {
  var ELEMENT = document.createElement('div');
  ELEMENT.setAttribute("id", id_String);

  if (class_String) {
    ELEMENT.classList = class_String;
  }

  ;

  if (class_String) {
    ELEMENT.classList = class_String;
  }

  ;

  if (data_Object != null) {
    ELEMENT.innerHTML = "\n            ".concat(data_Object, "\n        ");
  }

  ;
  return ELEMENT;
};

var Generate_new_li = function Generate_new_li(data_Object, id_String, class_String) {
  var ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", id_String);

  if (class_String) {
    ELEMENT.classList = class_String;
  }

  ;

  if (class_String) {
    ELEMENT.classList = class_String;
  }

  ;

  if (data_Object != null) {
    ELEMENT.innerHTML = "\n            <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n              ".concat(data_Object, "\n            </div>\n        ");
  }

  ;
  return ELEMENT;
};

console.log('hello world');

var HANDLE_looping_accent = function HANDLE_looping_accent() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    var loop = true;
    var animation = setInterval(function () {
      if (interval == 1) {
        if (document.getElementById('row_accent_noise') != null) {
          document.getElementById('row_accent_noise').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_1';
        }

        ;
      }

      ;

      if (interval == 2) {
        if (document.getElementById('row_accent_noise') != null) {
          document.getElementById('row_accent_noise').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_2';
        }

        ;
      }

      ;

      if (interval == 3) {
        if (document.getElementById('row_accent_noise') != null) {
          document.getElementById('row_accent_noise').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_3';
        }

        ;
      }

      ;

      if (interval == 4) {
        if (document.getElementById('row_accent_noise') != null) {
          document.getElementById('row_accent_noise').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_4';
        }

        ;

        if (loop == false) {
          clearInterval(animation);
        }

        ;

        if (loop == true) {
          interval = 0;
        }

        ;
      }

      ;

      if (interval == 1) {
        if (document.getElementById('row_accent_noise_white') != null) {
          document.getElementById('row_accent_noise_white').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_white_1';
        }

        ;
      }

      ;

      if (interval == 2) {
        if (document.getElementById('row_accent_noise_white') != null) {
          document.getElementById('row_accent_noise_white').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_white_2';
        }

        ;
      }

      ;

      if (interval == 3) {
        if (document.getElementById('row_accent_noise_white') != null) {
          document.getElementById('row_accent_noise_white').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_white_3';
        }

        ;
      }

      ;

      if (interval == 4) {
        if (document.getElementById('row_accent_noise_white') != null) {
          document.getElementById('row_accent_noise_white').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_white_4';
        }

        ;

        if (loop == false) {
          clearInterval(animation);
        }

        ;

        if (loop == true) {
          interval = 0;
        }

        ;
      }

      ;
      interval += 1;
    }, 1000 / 12);
  })();
};

var HANDLE_looping_logo_mark = function HANDLE_looping_logo_mark() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    setInterval(function () {
      if (state.app.dark_mode == false) {
        if (interval == 1) {
          if (document.getElementById('row-logo-mark') != null) {
            document.getElementById('row-logo-mark').classList = "\n                                    gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
          }

          ;
        }

        ;

        if (interval == 2) {
          if (document.getElementById('row-logo-mark') != null) {
            document.getElementById('row-logo-mark').classList = "\n                                    gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
          }

          ;
        }

        ;

        if (interval == 3) {
          if (document.getElementById('row-logo-mark') != null) {
            document.getElementById('row-logo-mark').classList = "\n                                    gui_logo_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
          }

          ;
        }

        ;

        if (interval == 4) {
          if (document.getElementById('row-logo-mark') != null) {
            document.getElementById('row-logo-mark').classList = "\n                                    gui_logo_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
          }

          ;
          interval = 0;
        }

        ;
      }

      ;

      if (state.app.dark_mode == true) {
        if (interval == 1) {
          if (document.getElementById('row-logo-mark') != null) {
            document.getElementById('row-logo-mark').classList = "\n                                    gui_logo_white_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
          }

          ;
        }

        ;

        if (interval == 2) {
          if (document.getElementById('row-logo-mark') != null) {
            document.getElementById('row-logo-mark').classList = "\n                                    gui_logo_white_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
          }

          ;
        }

        ;

        if (interval == 3) {
          if (document.getElementById('row-logo-mark') != null) {
            document.getElementById('row-logo-mark').classList = "\n                                    gui_logo_white_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
          }

          ;
        }

        ;

        if (interval == 4) {
          if (document.getElementById('row-logo-mark') != null) {
            document.getElementById('row-logo-mark').classList = "\n                                    gui_logo_white_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
          }

          ;
          interval = 0;
        }

        ;
      }

      ;
      interval += 1;
    }, 1000 / 12);
  })();
};

var HANDLE_looping_logo_type = function HANDLE_looping_logo_type() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    setInterval(function () {
      if (state.app.dark_mode == false) {
        if (interval == 1) {
          if (document.getElementById('row-logo-type') != null) {
            document.getElementById('row-logo-type').classList = "\n                                    gui_nav_logo_type position_relative calc_5vw_height width_25 margin_205vw\n                                ";
          }

          ;
        }

        ;

        if (interval == 2) {
          if (document.getElementById('row-logo-type') != null) {
            document.getElementById('row-logo-type').classList = "\n                                    gui_nav_logo_type position_relative calc_5vw_height width_25 margin_205vw\n                                ";
          }

          ;
        }

        ;

        if (interval == 3) {
          if (document.getElementById('row-logo-type') != null) {
            document.getElementById('row-logo-type').classList = "\n                                    gui_nav_logo_type position_relative calc_5vw_height width_25 margin_205vw\n                                ";
          }

          ;
        }

        ;

        if (interval == 4) {
          if (document.getElementById('row-logo-type') != null) {
            document.getElementById('row-logo-type').classList = "\n                                    gui_nav_logo_type position_relative calc_5vw_height width_25 margin_205vw\n                                ";
          }

          ;
          interval = 0;
        }

        ;
      }

      ;

      if (state.app.dark_mode == true) {
        if (interval == 1) {
          if (document.getElementById('row-logo-type') != null) {
            document.getElementById('row-logo-type').classList = "\n                                    gui_nav_logo_white_type position_relative calc_5vw_height width_25 margin_205vw\n                                ";
          }

          ;
        }

        ;

        if (interval == 2) {
          if (document.getElementById('row-logo-type') != null) {
            document.getElementById('row-logo-type').classList = "\n                                    gui_nav_logo_white_type position_relative calc_5vw_height width_25 margin_205vw\n                                ";
          }

          ;
        }

        ;

        if (interval == 3) {
          if (document.getElementById('row-logo-type') != null) {
            document.getElementById('row-logo-type').classList = "\n                                    gui_nav_logo_white_type position_relative calc_5vw_height width_25 margin_205vw\n                                ";
          }

          ;
        }

        ;

        if (interval == 4) {
          if (document.getElementById('row-logo-type') != null) {
            document.getElementById('row-logo-type').classList = "\n                                    gui_nav_logo_white_type position_relative calc_5vw_height width_25 margin_205vw\n                                ";
          }

          ;
          interval = 0;
        }

        ;
      }

      ;
      interval += 1;
    }, 1000 / 12);
  })();
};

var Handle_check_route = function Handle_check_route(route) {
  route = state.app.route;

  (function () {
    if (route == '/') {
      if (document.getElementById('content') != null) {
        document.getElementById('content').innerHTML = "";

        if (is_Desktop) {
          var route_background;
          route_background = "\n\n                            <div id=\"after_fold_1\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\">\n                            </div>\n                            <div id=\"after_fold_2\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\">\n                            </div>\n\n                            <div class=\"position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\"></div>\n\n                                <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\"></div>\n\n                            </div>\n\n                            <div class=\"position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\"></div>\n\n                                <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\"></div>\n                                \n                            </div>\n                            \n                        ";
          var route_content = "route_content";
          var scrolling_content = "scrolling_content";
          document.getElementById('content').innerHTML += route_background + scrolling_content;
        }

        ;

        if (is_Mobile) {
          var _route_background;

          _route_background = "\n\n                            <div id=\"after_fold_1\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\">\n                            </div>\n                            <div id=\"after_fold_2\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\">\n                            </div>\n\n                            <div class=\"position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\"></div>\n\n                                <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\"></div>\n\n                            </div>\n\n                            <div class=\"position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\"></div>\n\n                                <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\"></div>\n                                \n                            </div>\n                            \n                        ";
          var _route_content = "route_content";
          var _scrolling_content = "scrolling_content";
          document.getElementById('content').innerHTML += _route_background + _scrolling_content;
        }

        ;
      }

      ; // console.log(state.data.firebase.gnougn.roster[i]);

      if (document.getElementById('bg') != null) {
        document.getElementById('bg').innerHTML = "";
        var content = "\n\n                    <div id=\"row-noise\" class=\"opacity_005\">\n                        <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                        <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                    </div>\n\n                    <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                        <div id=\"row-logo-mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                        <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                        </div>\n                    </div>\n\n                ";
        document.getElementById('bg').appendChild(Generate_new_fragment.appendChild(Generate_new_div(content, "iding the content", "position_absolute top_0 left_0 width_100vw height_100vh")));
      }

      ;

      if (document.getElementById('component_app_modals') != null) {
        document.getElementById('component_app_modals').innerHTML = "";

        var _content;

        if (is_Desktop) {
          _content = "\n\n                        <div id=\"modal_nav_top_left\" class=\"width_100vw float_left position_absolute top_0 height_1205vw\">\n                            <div id=\"row-logo-type\" class=\"\">\n                            </div>\n                        </div>\n\n                    ";
        }

        ;

        if (is_Mobile) {
          _content = "\n\n                        <div id=\"modal_nav_top_left\" class=\"width_100vw float_left position_absolute top_0 bg_white height_1205vw\">\n                            <div id=\"row-logo-type\" class=\"\">\n                            </div>\n                        </div>\n\n                    ";
        }

        ;
        document.getElementById('component_app_modals').appendChild(Generate_new_fragment.appendChild(Generate_new_div(_content, "modal_nav", "position_fixed top_0 left_0")));
      }

      ;
      setTimeout(function () {}, 101);
    }

    ;
  })();
};

var ui_check = function ui_check() {
  if (state.app.dark_mode == false) {
    document.getElementById('row-noise').innerHTML = "\n            <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n            <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n        ";
    document.getElementById('after_fold_1').classList = 'position_relative width_100vw height_100vh float_left margin_auto gradient_white_top';
    document.getElementById('after_fold_2').classList = 'position_relative width_100vw height_100vh float_left margin_auto bg_white';
    root.classList = 'position_relative width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_white';

    if (is_Desktop) {
      document.getElementById('modal_nav_top_left').classList = 'width_100vw float_left position_absolute top_0 height_1205vw';
    }

    ;

    if (is_Mobile) {
      document.getElementById('modal_nav_top_left').classList = 'width_100vw float_left position_absolute top_0 bg_white height_1205vw';
    }

    ;
  }

  ;

  if (state.app.dark_mode == true) {
    document.getElementById('row-noise').innerHTML = "\n            <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n            <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n        ";
    document.getElementById('after_fold_1').classList = 'position_relative width_100vw height_100vh float_left margin_auto gradient_grey_top';
    document.getElementById('after_fold_2').classList = 'position_relative width_100vw height_100vh float_left margin_auto bg_grey';
    root.classList = 'position_relative width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_grey';

    if (is_Desktop) {
      document.getElementById('modal_nav_top_left').classList = 'width_100vw float_left position_absolute top_0 height_1205vw';
    }

    ;

    if (is_Mobile) {
      document.getElementById('modal_nav_top_left').classList = 'width_100vw float_left position_absolute top_0 bg_grey height_1205vw';
    }

    ;
  }

  ;
};

var addEvents = function addEvents() {
  if (document.getElementById('gui_input_2') != null) {
    document.getElementById('gui_input_2').addEventListener('click', function (event) {
      var name = document.getElementById('gui_input_1').value;
      alert("Welcome" + name + ", thanks for stoping by, you're early. Thanks for the support. Come back next week. Nigel's got an update coming up.");
    });
  }

  ;
};

window.onload = function () {
  HANDLE_looping_accent();
  HANDLE_looping_logo_mark();
  HANDLE_looping_logo_type(); // console.log(state.data.firebase.gnougn.roster[i]);

  if (document.getElementById('wp_content') != null) {
    document.getElementById('wp_content').appendChild(Generate_new_fragment.appendChild(Generate_new_li("wp_content from wp_content", "iding the content", "classing the content")));
  }

  ; //console.log(state.ui.interaction.dice);
  //console.log(state.ui.interaction.random);

  (function () {
    setInterval(function () {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var date = new Date();
      state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds(); //console.log(state.data.time);

      if (state.events.mouse.mousemove == true) {
        state.events.mouse.movetimer += 1;
      }

      ;

      if (state.events.mouse.movetimer == 10) {//alert('too long');
      }

      ;
      console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
    }, 1000);
  })();

  Handle_check_route();
  ui_check();
  addEvents();
}; // Exports


var _default = {
  Handle_return_state: Handle_return_state,
  Handle_get_state_from_events: Handle_get_state_from_events,
  ui_check: ui_check,
  Handle_check_route: Handle_check_route
};
exports.default = _default;
},{"./style.scss":"style.scss","./partials/events":"partials/events.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51933" + '/');

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
//# sourceMappingURL=/phlygh.com.e31bb0bc.map