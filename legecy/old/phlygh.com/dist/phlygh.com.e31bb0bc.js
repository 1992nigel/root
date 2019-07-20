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
},{"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.2afa39a6.svg","assets/gui/gui_link_home_white.svg"],"assets/gui/gui_link_home_white.svg"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.23391bca.svg","assets/gui/gui_link_gear_white.svg"],"assets/gui/gui_link_gear_white.svg"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.2fd07b39.svg","assets/gui/gui_link_house_white.svg"],"assets/gui/gui_link_house_white.svg"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.27850d9e.svg","assets/gui/gui_link_close_white.svg"],"assets/gui/gui_link_close_white.svg"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.de148a15.svg","assets/gui/gui_link_min_white.svg"],"assets/gui/gui_link_min_white.svg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.f033010f.svg","assets/gui/gui_link_max_white.svg"],"assets/gui/gui_link_max_white.svg"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.179c3b09.svg","assets/gui/gui_link_dots_white.svg"],"assets/gui/gui_link_dots_white.svg"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.a1d8f80c.svg","assets/gui/gui_interaction_button_1.svg"],"assets/gui/gui_interaction_button_1.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.e0631923.svg","assets/gui/gui_stage_desk.svg"],"assets/gui/gui_stage_desk.svg"],"./assets/gui/gui_character.svg":[["gui_character.5f9cd7ac.svg","assets/gui/gui_character.svg"],"assets/gui/gui_character.svg"],"./assets/gui/gui_character_face.svg":[["gui_character_face.38e227be.svg","assets/gui/gui_character_face.svg"],"assets/gui/gui_character_face.svg"],"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/gradient/grey_top.svg":[["grey_top.d8e034e1.svg","assets/gradient/grey_top.svg"],"assets/gradient/grey_top.svg"],"./assets/gradient/white_top.svg":[["white_top.ce87e304.svg","assets/gradient/white_top.svg"],"assets/gradient/white_top.svg"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"partials/events.js":[function(require,module,exports) {
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
  if (root != null) {
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
        console.log(event.keyCode); //event.preventDefault();
      });
      root.addEventListener('keyup', function (event) {
        state = _index.default.Handle_return_state();
        console.log(event.keyCode); //event.preventDefault();

        if (event.keyCode == 27) {
          _index.default.Handle_check_route('/home');
        }

        ;

        if (event.keyCode == 81) {
          state.ui.modal.nav.top.transform = true;
          state.ui.modal.nav.bottom.transform = true;
          state.ui.modal.nav.left.transform = true;
          state.ui.modal.nav.right.transform = true;
          state.ui.modal.page.top.transform = true;
          state.ui.modal.page.bottom.transform = true;
          state.ui.modal.page.left.transform = true;
          state.ui.modal.page.right.transform = true; //alert(state.ui.modal.nav.bottom.transform);

          _index.default.HANDLE_gui();
        }

        ;

        if (event.keyCode == 13) {
          //state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
          //state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
          state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
          state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform; //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
          //state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
          //state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
          //state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
          //alert(state.ui.modal.nav.bottom.transform);

          _index.default.HANDLE_gui();
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
  }

  ;
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

// Declartaion
var events;
var state;
var Handle_return_state;
var Handle_get_state_from_events;
var config;
var fb_writeable;
var fb_response;
var root;
var is_Desktop;
var is_Mobile;
var Generate_new_fragment;
var Generate_new_div;
var Generate_new_li;
var Generate_new_post;
var Generate_validated_user;
var Generate_post_info_from_author_id;
var HANDLE_animation;
var HANDLE_adaptive;
var HANDLE_gui;
var HANDLE_events;
var HANDLE_content;
var HANDLE_modals;
var HANDLE_physical;
var Handle_check_route;
var filtered_library_by_title = [];
var sorted_library; // Assignment

events = _events.default;
state = {
  app: {
    route: '/',
    url: '/',
    dark_mode: false,
    content: 0
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
    sort: 'timedown',
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
      mousemove: true,
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
  },
  ui: {
    modal: {
      nav: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      page: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      }
    }
  }
};
fb_writeable = false;
fb_response = {}; // Initialization

config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
};
is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var site_first_load = true;
var firebase_data_has_been_updated_and_is_now_writeable;
var firebase_has_responsed_with_this_updated_data;

var find_sort = function find_sort(mode) {
  if (mode == 'likesup') {
    if (mode == 'likesup') {
      return function (a, b) {
        return a.likes - b.likes;
      };
    }

    ;
  }

  ;

  if (mode == 'likesdown') {
    if (mode == 'likesdown') {
      return function (a, b) {
        return b.likes - a.likes;
      };
    }

    ;
  }

  ;

  if (mode == 'viewsup') {
    if (mode == 'viewsup') {
      return function (a, b) {
        return a.views - b.views;
      };
    }

    ;
  }

  ;

  if (mode == 'viewsdown') {
    if (mode == 'viewsdown') {
      return function (a, b) {
        return b.views - a.views;
      };
    }

    ;
  }

  ;

  if (mode == 'timeup') {
    if (mode == 'timeup') {
      return function (a, b) {
        return b.time - a.time;
      };
    }

    ;
  }

  ;

  if (mode == 'timedown') {
    if (mode == 'timedown') {
      return function (a, b) {
        return Math.abs(a.time - b.time);
      };
    }

    ;
  }

  ;

  if (mode == 'titleup') {
    if (mode == 'titleup') {
      return function (a, b) {
        return b.title - a.title;
      };
    }

    ;
  }

  ;

  if (mode == 'titledown') {
    if (mode == 'titledown') {
      return function (a, b) {
        return a.title - b.title;
      };
    }

    ;
  }

  ;
};

var handle_empty_list = function handle_empty_list() {
  filtered_library_by_title = [];

  if (document.getElementById('id_fold') != null) {
    document.getElementById('id_fold').innerHTML = '';
  }

  ;

  if (document.getElementById('url_fold') != null) {
    document.getElementById('url_fold').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_all') != null) {
    document.getElementById('element_ol_firebase_all').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_all_library') != null) {
    document.getElementById('element_ol_firebase_all_library').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_all_users') != null) {
    document.getElementById('element_ol_firebase_all_users').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_validated_user') != null) {
    document.getElementById('element_ol_firebase_validated_user').innerHTML = '';
  }

  ;
};

var handle_refresh_fire_data = function handle_refresh_fire_data() {
  handle_empty_list();
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var wordpressRef = gnougnRef.child('wordpress');
  firebase_data_has_been_updated_and_is_now_writeable = true;
  firebase_has_responsed_with_this_updated_data = {};

  (function () {
    rootRef.on('value', function (snapshot) {
      var obj = snapshot.val();
      state.data.firebase = obj;
      console.log('state.data.firebase');
      console.log(state.data.firebase);
    });
  })();
}; //  sort


sorted_library = function sorted_library(x) {
  return filtered_library_by_title.sort(find_sort(x));
};

var handle_firebase_render_to_view = function handle_firebase_render_to_view() {
  // render library
  (function () {
    setTimeout(function () {
      if (firebase_has_responsed_with_this_updated_data != null) {
        //  filter by title
        if (filtered_library_by_title != null) {
          for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
            if (state.data.firebase.gnougn.library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
              filtered_library_by_title.push(state.data.firebase.gnougn.library[i]);
            }

            ;
            console.log('filtered_library_by_title[i]');
            console.log(filtered_library_by_title[i]);
          }

          ;
        }

        ; // render sort

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          console.log('sorted_library(state.data.sort)[i]');
          console.log(sorted_library(state.data.sort)[i]);
          document.getElementById('element_ol_firebase_all').appendChild(Generate_new_fragment.appendChild(Generate_new_post(filtered_library_by_title[i])));
        }

        ; // filtered library

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'library') {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_all_library').appendChild(Generate_new_fragment.appendChild(Generate_new_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // filtered roster

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          if (sorted_library(state.data.sort)[i].child == 'roster') {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_all_users').appendChild(Generate_new_fragment.appendChild(Generate_new_post(sorted_library(state.data.sort)[i])));
          }

          ;
        }

        ;

        if (validated_user.id != null) {
          document.getElementById('element_ol_firebase_validated_user').appendChild(Generate_new_fragment.appendChild(Generate_validated_user(validated_user)));
        }

        ;

        if (validated_user.id == null) {
          document.getElementById('element_ol_firebase_validated_user').innerHTML = "please sign in";
        }

        ;
        /*
        for (var i = 0; i < filtered_library_by_title.length; i++) {
             // pagination hack
            if ( (i < state.data.feature_posts_limit) ) {
                // console.log(state.data.firebase.gnougn.roster[i]);
                document.getElementById('element_ol_firebase_feature_library').appendChild(
                    imported_functions.Generate_new_fragment.appendChild(
                    imported_functions.Generate_new_li(filtered_library_by_title[i])
                    )
                )
            };
        };
         for (var i = 0; i < filtered_library_by_title.length; i++) {
             // pagination hack
            if ( (i >= (state.data.posts_start)) && (i < state.data.posts_limit) ) {
                // console.log(state.data.firebase.gnougn.roster[i]);
                document.getElementById('element_ol_firebase_after_feature_library').appendChild(
                    imported_functions.Generate_new_fragment.appendChild(
                    imported_functions.Generate_new_li(filtered_library_by_title[i])
                    )
                )
            };
        };
        */
      }

      ;
    }, 0);
  })();
};

var handle_repeated_fire_data_validation = setInterval(function () {
  /*
  
      This is a fail safe that updates the view with the latest firebase data so long
      as the toggle *firebase_data_has_been_updated_and_is_now_writeable* has been activated.
      It will deactive once rendering to the view has been completed!
       - See *handle_refresh_fire_data* for additional infromation on the rules of our fail
      safe that simulates an "open stream of data."
      
      - *handle_refresh_fire_data* will be called in for ocassons:
      1) on load
      2) after any C.R.U.D. actions
      3) every second for notification
      4) every 60 fps for game actions
  
  */
  if (firebase_data_has_been_updated_and_is_now_writeable == true) {
    firebase_has_responsed_with_this_updated_data = state.data.firebase;

    if (firebase_has_responsed_with_this_updated_data.gnougn.library != null) {
      // only once!
      firebase_data_has_been_updated_and_is_now_writeable = false; // once firebase server responds, instead of a clearInterval, we use -> !writable

      console.log('handle_repeated_fire_data_validation'); // arrat made from object key

      var result_library = Object.keys(firebase_has_responsed_with_this_updated_data.gnougn.library).map(function (key) {
        return firebase_has_responsed_with_this_updated_data.gnougn.library[key];
      });
      firebase_has_responsed_with_this_updated_data.gnougn.library = result_library; // now that data has been received

      if (firebase_data_has_been_updated_and_is_now_writeable == false) {
        console.clear(); //clearInterval(handle_repeated_fire_data_validation);

        setTimeout(function () {
          handle_firebase_render_to_view(); //console.clear();
          //alert('contected!');
        }, 0);

        if (site_first_load == true) {
          //alert('site_first_load');
          Handle_check_route('/loaded');
          site_first_load = false;
          HANDLE_modals();
          HANDLE_events();
          HANDLE_animation();
          HANDLE_adaptive();
          HANDLE_gui();
          check_local_user();
        }

        ;
        console.log(firebase_has_responsed_with_this_updated_data.gnougn);
      }

      ;
    }

    ;
  }

  ;
}, 1000 / 24); // Elements

root = document.getElementById('root'); // Functions

firebase.initializeApp(config); // functions

var default_user = {
  "username": "null_local_user",
  "password": "xxx",
  "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg"
};
var validated_user = {};
var validated_user_data = {};
var is_logged = false; // Create

var addListings = function addListings(child) {
  var current_second = new Date().getTime() / 1000;
  var default_item;

  if (child == 'library') {
    default_item = {
      child: "library",
      id: 0,
      password: "xxx",
      title: document.getElementById('create_post_title').value,
      username: "null_post",
      tags: [document.getElementById('create_post_tag').value],
      time: current_second,
      authors: ["" + "".concat(validated_user_data.id) + ""]
    };
  }

  ;

  if (child == 'roster') {
    default_item = {
      child: "roster",
      id: 0,
      password: [document.getElementById('create_user_password').value],
      title: document.getElementById('create_user_username').value,
      username: document.getElementById('create_user_username').value,
      tags: [document.getElementById('create_user_password').value],
      time: current_second,
      authors: ["" + "".concat(validated_user_data.id) + ""]
    };
  }

  ; // Firebase References
  // Firebase Database

  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library'); // update key of added object

  Ref.push(default_item).then(function (snap) {
    var key = snap.key;
    console.log('from addListing' + key); // update created item with snap.key

    Ref.child(key).update({
      id: key
    }); // Set firebase data

    setTimeout(function () {
      handle_refresh_fire_data();
    }, 0);
  });
};

var check_local_user = function check_local_user() {
  console.log(window);
  console.log(screen);
  console.log(screen.height);
  console.log(screen.width);
  console.log(navigator);
  console.log(history);
  console.log(history.length);
  console.log(location);
  console.log(location.pathname);
  console.log(localStorage);

  if (localStorage.user == null) {
    //alert('welcome ' + 'new user!');
    localStorage.setItem("user", default_user);
    localStorage.setItem("username", default_user.username);
    localStorage.setItem("password", default_user.password);
    localStorage.setItem("signed_in", "false");
    is_logged = localStorage.signed_in;
    console.log(localStorage.user);
    console.log('localStorage.user.username');
    console.log(localStorage.user.username);
    console.log('localStorage.user.password');
    console.log(localStorage.user.password); //alert('welcome new user!');

    return;
  }

  ; // or from login

  if (localStorage.user != null) {
    //alert('welcome ' + 'returning user!');
    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
      if (state.data.firebase.gnougn.library[i].child == "roster") {
        // local user matched
        if (state.data.firebase.gnougn.library[i].username == localStorage.username && localStorage.username == "null_local_user") {//alert('welcome back, create an account');
        }

        ; // local user matched

        if (state.data.firebase.gnougn.library[i].username == localStorage.username && localStorage.username != "null_local_user") {
          //alert('user matches local');
          is_logged = localStorage.signed_in; //alert('is_logged: ' + is_logged);
          //alert('localStorage.signed_in: ' + localStorage.signed_in);

          if (localStorage.signed_in == "true") {
            //alert(state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', sign this back in');
            if (state.data.firebase.gnougn.library[i].password == localStorage.password) {
              validated_user = state.data.firebase.gnougn.library[i]; //alert('password match');
              //alert('signing in: ' + validated_user.id + ', ' + validated_user.username);                            
              //alert('validated_user id: ' + validated_user.id);
            }
          }

          ;

          if (localStorage.signed_in == "false") {//alert('offer to sign: ' + state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', back in!')
          }

          ;
        }

        ;
      }

      ;
    }

    ;
    return;
  }

  ;
};

Generate_new_fragment = document.createDocumentFragment();

var Generate_test = function Generate_test() {
  var ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", 'Generate_test');
  ELEMENT.classList = "width_100 float_left position_relative";
  ELEMENT.innerHTML = "test"; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.addEventListener("click", function (event) {
    alert("Generate_test");
  });
  return ELEMENT;
};

var Generate_posts_from_roster_id = function Generate_posts_from_roster_id(x) {
  var return_groups_of_elements = document.createElement('div');
  var selected_library = [];

  if (x != null) {
    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
      var does_this_post_authors_match_roster_id = false;
      var current_library_loop = state.data.firebase.gnougn.library[i];

      for (var ii = 0; ii < current_library_loop.authors.length; ii++) {
        if (current_library_loop.child == "library") {
          var current_library_loop_current_author_loop = current_library_loop.authors[ii];

          if (current_library_loop_current_author_loop == x) {
            does_this_post_authors_match_roster_id = true;
          }

          ;
        }

        ;
      }

      ;

      if (does_this_post_authors_match_roster_id == true) {
        selected_library.push(current_library_loop);
      }

      ;
    }

    ;
  }

  ;

  if (selected_library.length > 0) {
    console.log('selected_library');
    console.log(selected_library);
  }

  ;

  for (var ii = 0; ii < selected_library.length; ii++) {
    var this_post = selected_library[ii];
    var selected_post = document.createElement('div');
    selected_post.setAttribute("id", this_post.id);
    selected_post.classList = "width_100 float_left position_relative";
    selected_post.innerHTML = "".concat('title: ' + this_post.title + 'id: ' + this_post.id);
    selected_post.addEventListener("click", function (event) {
      alert("selected_post");
    });
    return_groups_of_elements.appendChild(Generate_new_fragment.appendChild(selected_post));
  }

  ;
  return return_groups_of_elements;
};

var Generate_authors_from_post_id = function Generate_authors_from_post_id(x) {
  var return_groups_of_elements = document.createElement('li');
  var selected_authors = [];

  if (x != null) {
    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
      if (state.data.firebase.gnougn.library[i].id == x) {
        var selected_library_post = state.data.firebase.gnougn.library[i];

        for (var ii = 0; ii < selected_library_post.authors.length; ii++) {
          selected_authors.push(selected_library_post.authors[ii]);
        }

        ;
      }
    }
  }

  var selected_library = [];

  for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
    var does_this_post_authors_match_roster_id = false;
    var current_library_loop = state.data.firebase.gnougn.library[i];

    if (current_library_loop.child == "roster") {
      for (var ii = 0; ii < selected_authors.length; ii++) {
        if (selected_authors[ii] == current_library_loop.id) {
          does_this_post_authors_match_roster_id = true;
        }

        ;
      }

      ;
    }

    ;

    if (does_this_post_authors_match_roster_id == true) {
      selected_library.push(current_library_loop);
    }

    ;
  }

  ;

  for (var ii = 0; ii < selected_library.length; ii++) {
    var this_post = selected_library[ii];
    var selected_post = document.createElement('li');
    selected_post.setAttribute("id", this_post.id);
    selected_post.classList = "width_100 float_left position_relative";
    selected_post.innerHTML = "".concat('id: ' + this_post.id);
    selected_post.addEventListener("click", function (event) {
      alert("selected_authors_of_post");
    });
    return_groups_of_elements.appendChild(Generate_new_fragment.appendChild(selected_post));
  }

  ;
  return return_groups_of_elements;
};

Generate_new_div = function Generate_new_div(data_Object, id_String, class_String) {
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

Generate_new_li = function Generate_new_li(data_Object, id_String, class_String) {
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
    ELEMENT.innerHTML = "\n            ".concat(data_Object, "\n        ");
  }

  ;
  return ELEMENT;
};

Generate_new_post = function Generate_new_post(data_Object, id_String, class_String) {
  var ELEMENT = document.createElement('div');
  ELEMENT.setAttribute("id", id_String);
  ELEMENT.classList = "position_relative float_left calc_2vw_width border_1vw_grey bg_white ";

  if (data_Object != null) {
    if (data_Object.child == 'library') {
      if (data_Object.title) {
        ELEMENT.innerHTML += "\n                            \n                        <div id=\"post_component\" class=\"position_relative float_right height_20vw width_100 easing_01 easing_01\">\n                            \n                            <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey\">\n                                    Post stats\n                                </div>\n                            </div>\n\n                            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_green\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey\">\n                                    <div id=\"bg-character\" class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                </div>\n                            </div>\n\n                            <div class=\"hover_show position_absolute top_100 left_0 height_6025vw width_100\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey\">\n                                    Post interaction\n                                </div>\n                            </div>\n\n                        </div>\n\n                    ";
      }

      ;

      if (data_Object.title) {
        ELEMENT.innerHTML += "\n                            <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                                title: ".concat(data_Object.title, "\n                            </div>\n                    ");
      }

      ;

      if (data_Object.time) {
        ELEMENT.innerHTML += "\n                            <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                                time: ".concat(data_Object.time, "\n                            </div>\n                    ");
      }

      ;

      if (data_Object.time) {
        ELEMENT.innerHTML += "\n                            <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                                <div>Like/Dislike</div>\n                                <div>Comment</div>\n                                <div>Rate</div>\n                                <div>1</div>\n                                <div>2</div>\n                                <div>3</div>\n                                <div>Delete</div>\n                            </div>\n                    ";
      }

      ;

      if (data_Object.time) {
        ELEMENT.innerHTML += "\n                            <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                                Post Authors:\n                            </div>\n                    ";
      }

      ;
      ELEMENT.appendChild(Generate_new_fragment.appendChild(Generate_authors_from_post_id(data_Object.id)));
    }

    ;

    if (data_Object.child == 'roster') {
      if (data_Object.username) {
        ELEMENT.innerHTML += "\n                            \n                        <div id=\"post_component\" class=\"position_relative float_right height_20vw width_100 easing_01 easing_01\">\n                            \n                            <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey\">\n                                    Post stats\n                                </div>\n                            </div>\n\n                            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_blue\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey\">\n                                    <div id=\"bg-character\" class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                </div>\n                            </div>\n\n                            <div class=\"hover_show position_absolute top_100 left_0 height_6025vw width_100\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey\">\n                                    Post interaction\n                                </div>\n                            </div>\n\n                        </div>\n                    ";
      }

      ;

      if (data_Object.password) {
        ELEMENT.innerHTML += "\n\n                    <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                        Roster:\n                    </div>\n                    ";
      }

      ;

      if (data_Object.password) {
        ELEMENT.innerHTML += "\n\n                    <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                        IDS:\n                    </div>\n                    ";
      }

      ;

      if (data_Object.id) {
        ELEMENT.innerHTML += "\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        id: ".concat(data_Object.id, "\n                    </div>\n                    ");
      }

      ;

      if (data_Object.username) {
        ELEMENT.innerHTML += "\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        username: ".concat(data_Object.username, "\n                    </div>\n                    ");
      }

      ;

      if (data_Object.password) {
        ELEMENT.innerHTML += "\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            password: ".concat(data_Object.password, "\n                        </div>\n                    ");
      }

      ;

      if (data_Object.password) {
        ELEMENT.innerHTML += "\n\n                    <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                        values:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total follows:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total followers:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total retweeted:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total retweet:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total likes:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total liked:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total dislikes:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total disliked:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total flags:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total flagged:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total views:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total viewed:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        post count:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total comments made:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total comments recieved:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total replys made:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total replys recieved:\n                    </div>\n\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total message made:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total message recieved:\n                    </div>\n\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total stream messages made:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total stream messages recieved:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        total time logged:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        last login:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        sign up date:\n                    </div>\n                    ";
      }

      ;

      if (data_Object.password) {
        ELEMENT.innerHTML += "\n                    <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                        history:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history follows:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history followers:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history flypaper:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history flyer:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history likes:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history dislikes:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history flags:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history views:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history of post made:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history of comments made:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history of stream messages:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history of stream mentions:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history of views:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history of logins:\n                    </div>\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        history of logouts:\n                    </div>\n                    ";
      }

      ;

      if (data_Object.time) {
        ELEMENT.innerHTML += "\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        time: ".concat(data_Object.time, "\n                    </div>\n                    ");
      }

      ;

      if (data_Object.password) {
        ELEMENT.innerHTML += "\n\n                    <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                        Interactions:\n                    </div>\n                    ";
      }

      ;

      if (data_Object.time) {
        ELEMENT.innerHTML += "\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            <div>Like/Dislike</div>\n                            <div>Comment</div>\n                            <div>Rate</div>\n                            <div>1</div>\n                            <div>2</div>\n                            <div>3</div>\n                            <div>Delete</div>\n                        </div>\n                    ";
      }

      ;

      if (data_Object.password) {
        ELEMENT.innerHTML += "\n\n                    <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                        Relative:\n                    </div>\n                    ";
      }

      ;

      if (data_Object.password) {
        ELEMENT.innerHTML += "\n\n                    <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                        Similars:\n                    </div>\n                    ";
      }

      ;

      if (data_Object.time) {
        ELEMENT.innerHTML += "\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            <div>by tags of your post (as a creator):</div>\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            <div>by tags of your views (as a viewer):</div>\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            <div>Similar time logged on site:</div>\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            <div>Similar followers on site:</div>\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            <div>Similar comments made on site:</div>\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            <div>Similar comments received on site:</div>\n                        </div>\n                    ";
      }

      ;

      if (data_Object.time) {
        ELEMENT.innerHTML += "\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            <div>Post from author:</div>\n                        </div>\n                    ";
      }

      ;
      ELEMENT.appendChild(Generate_new_fragment.appendChild(Generate_posts_from_roster_id(data_Object.id)));
      ELEMENT.appendChild(Generate_new_fragment.appendChild(Generate_test()));
      ELEMENT.addEventListener("click", function (event) {
        document.getElementById('modal_page_right_container').innerHTML = "";
        document.getElementById('modal_page_right_container').appendChild(Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div')));
        state.ui.modal.page.right.transform = false;
        HANDLE_gui();
      });
    }

    ;
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.children[0].addEventListener("click", function (event) {
    alert(data_Object);
  });
  var CONTAINER_ELEMENT = document.createElement('li');
  CONTAINER_ELEMENT.setAttribute("id", id_String);
  CONTAINER_ELEMENT.classList = "position_relative float_left width_33flex";
  CONTAINER_ELEMENT.appendChild(Generate_new_fragment.appendChild(ELEMENT));
  return CONTAINER_ELEMENT;
};

Generate_validated_user = function Generate_validated_user(data_Object, id_String, class_String) {
  var ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", id_String);
  ELEMENT.classList = "width_100 float_left position_relative";

  if (data_Object != null) {
    if (data_Object.username) {
      ELEMENT.innerHTML += "\n\n                <div id=\"post_component\" class=\"position_relative float_right height_10vw width_100 easing_01 easing_01\">\n                    \n                    <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                        </div>\n                    </div>\n\n                    <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        </div>\n                    </div>\n\n                </div>\n\n                <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                    username: ".concat(data_Object.username, "\n                </div>\n                ");
    }

    ;

    if (data_Object.password) {
      ELEMENT.innerHTML += "\n                    <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                        password: ".concat(data_Object.password, "\n                    </div>\n                ");
    }

    ;

    if (data_Object.time) {
      ELEMENT.innerHTML += "\n                <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                    time: ".concat(data_Object.time, "\n                </div>\n                ");
    }

    ;
    ELEMENT.appendChild(Generate_new_fragment.appendChild(Generate_test()));
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.children[0].addEventListener("click", function (event) {
    alert(data_Object);
  });
  return ELEMENT;
}; // Handling


HANDLE_events = function HANDLE_events() {
  // reacting to a combination of physical & events
  // filter by title
  if (document.getElementById('element_input_sort') != null) {
    document.getElementById('element_input_sort').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        state.data.sort = document.getElementById('element_input_sort').value;
      }, 0);
    });
  }

  ; // filter by title

  if (document.getElementById('element_input_filter') != null) {
    document.getElementById('element_input_filter').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        handle_refresh_fire_data();
      }, 0);
    });
  }

  ; // filter by title

  if (document.getElementById('element_refresh') != null) {
    document.getElementById('element_refresh').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        handle_refresh_fire_data();
      }, 0);
    });
  }

  ; // filter by title

  if (document.getElementById('element_login') != null) {
    document.getElementById('element_login').addEventListener('click', function (event) {
      var selected_username = document.getElementById('element_login_username').value;
      var selected_password = document.getElementById('element_login_password').value;

      for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
        // local user matched
        if (state.data.firebase.gnougn.library[i].username == selected_username) {
          if (state.data.firebase.gnougn.library[i].password == selected_password) {
            //alert('logging in: ' + selected_username + selected_password);
            localStorage.setItem("username", selected_username);
            localStorage.setItem("password", selected_password);
            localStorage.setItem("signed_in", "true");
          }

          ;

          if (state.data.firebase.gnougn.library[i].password != selected_password) {
            //alert('not logging in: ' + selected_username + selected_password);
            localStorage.setItem("username", "null_local_user");
            localStorage.setItem("password", "xxx");
            localStorage.setItem("signed_in", "false");
          }

          ;
        }

        ;
      }

      ;
      check_local_user();
    });
  }

  ; // filter by title

  if (document.getElementById('element_logout') != null) {
    document.getElementById('element_logout').addEventListener('click', function (event) {
      //alert('logging out');
      var selected_username = document.getElementById('element_login_username').value;
      var selected_password = document.getElementById('element_login_password').value;
      localStorage.setItem("username", localStorage.username);
      localStorage.setItem("password", "xxx");
      localStorage.setItem("signed_in", "false");
      validated_user = {};
      check_local_user();
    });
  }

  ; // filter by title

  if (document.getElementById('element_addListing') != null) {
    document.getElementById('element_addListing').addEventListener('click', function (event) {
      addListings('library');
    });
  }

  ;
};

HANDLE_animation = function HANDLE_animation() {
  // loops and darkmode exc.
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
              document.getElementById('row-logo-mark').classList = "\n                                        gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 2) {
            if (document.getElementById('row-logo-mark') != null) {
              document.getElementById('row-logo-mark').classList = "\n                                        gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 3) {
            if (document.getElementById('row-logo-mark') != null) {
              document.getElementById('row-logo-mark').classList = "\n                                        gui_logo_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 4) {
            if (document.getElementById('row-logo-mark') != null) {
              document.getElementById('row-logo-mark').classList = "\n                                        gui_logo_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
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
              document.getElementById('row-logo-mark').classList = "\n                                        gui_logo_white_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 2) {
            if (document.getElementById('row-logo-mark') != null) {
              document.getElementById('row-logo-mark').classList = "\n                                        gui_logo_white_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 3) {
            if (document.getElementById('row-logo-mark') != null) {
              document.getElementById('row-logo-mark').classList = "\n                                        gui_logo_white_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 4) {
            if (document.getElementById('row-logo-mark') != null) {
              document.getElementById('row-logo-mark').classList = "\n                                        gui_logo_white_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
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

  var HANDLE_looping_logo_mark_type = function HANDLE_looping_logo_mark_type() {
    // overall site frames by 24 frames
    (function () {
      var interval = 0;
      setInterval(function () {
        if (state.app.dark_mode == false) {
          if (interval == 1) {
            if (document.getElementById('row-logo-mark-type') != null) {
              document.getElementById('row-logo-mark-type').classList = "\n                                        gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 2) {
            if (document.getElementById('row-logo-mark-type') != null) {
              document.getElementById('row-logo-mark-type').classList = "\n                                        gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 3) {
            if (document.getElementById('row-logo-mark-type') != null) {
              document.getElementById('row-logo-mark-type').classList = "\n                                        gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 4) {
            if (document.getElementById('row-logo-mark-type') != null) {
              document.getElementById('row-logo-mark-type').classList = "\n                                        gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
            interval = 0;
          }

          ;
        }

        ;

        if (state.app.dark_mode == true) {
          if (interval == 1) {
            if (document.getElementById('row-logo-mark-type') != null) {
              document.getElementById('row-logo-mark-type').classList = "\n                                        gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 2) {
            if (document.getElementById('row-logo-mark-type') != null) {
              document.getElementById('row-logo-mark-type').classList = "\n                                        gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 3) {
            if (document.getElementById('row-logo-mark-type') != null) {
              document.getElementById('row-logo-mark-type').classList = "\n                                        gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
            }

            ;
          }

          ;

          if (interval == 4) {
            if (document.getElementById('row-logo-mark-type') != null) {
              document.getElementById('row-logo-mark-type').classList = "\n                                        gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
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
              document.getElementById('row-logo-type').classList = "\n                                        gui_nav_logo_type position_relative float_left calc_1vw margin_05vw\n                                    ";
            }

            ;
          }

          ;

          if (interval == 2) {
            if (document.getElementById('row-logo-type') != null) {
              document.getElementById('row-logo-type').classList = "\n                                        gui_nav_logo_type position_relative float_left calc_1vw margin_05vw\n                                    ";
            }

            ;
          }

          ;

          if (interval == 3) {
            if (document.getElementById('row-logo-type') != null) {
              document.getElementById('row-logo-type').classList = "\n                                        gui_nav_logo_type position_relative float_left calc_1vw margin_05vw\n                                    ";
            }

            ;
          }

          ;

          if (interval == 4) {
            if (document.getElementById('row-logo-type') != null) {
              document.getElementById('row-logo-type').classList = "\n                                        gui_nav_logo_type position_relative float_left calc_1vw margin_05vw\n                                    ";
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
              document.getElementById('row-logo-type').classList = "\n                                        gui_nav_logo_white_type position_relative float_left calc_1vw margin_05vw\n                                    ";
            }

            ;
          }

          ;

          if (interval == 2) {
            if (document.getElementById('row-logo-type') != null) {
              document.getElementById('row-logo-type').classList = "\n                                        gui_nav_logo_white_type position_relative float_left calc_1vw margin_05vw\n                                    ";
            }

            ;
          }

          ;

          if (interval == 3) {
            if (document.getElementById('row-logo-type') != null) {
              document.getElementById('row-logo-type').classList = "\n                                        gui_nav_logo_white_type position_relative float_left calc_1vw margin_05vw\n                                    ";
            }

            ;
          }

          ;

          if (interval == 4) {
            if (document.getElementById('row-logo-type') != null) {
              document.getElementById('row-logo-type').classList = "\n                                        gui_nav_logo_white_type position_relative float_left calc_1vw margin_05vw\n                                    ";
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

  HANDLE_looping_accent();
  HANDLE_looping_logo_mark();
  HANDLE_looping_logo_mark_type();
  HANDLE_looping_logo_type();
};

HANDLE_adaptive = function HANDLE_adaptive() {
  if (is_Desktop) {
    document.getElementById('modal_nav_top_left').classList = 'width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top_0 easing_01';
    document.getElementById('modal_nav_bottom_left').classList = 'width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0 easing_01';
    document.getElementById('modal_nav_left').classList = 'width_1205vh height_100 float_left position_fixed left_0 bottom_0 transform_translate3d_left_0 easing_01';
    document.getElementById('modal_nav_right').classList = 'width_1205vh height_100 float_left position_fixed right_0 bottom_0 transform_translate3d_left_0 easing_01';
    document.getElementById('modal_page_top').classList = 'width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_top_0 easing_01';
    document.getElementById('modal_page_bottom').classList = 'width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_top_0 easing_01';
    document.getElementById('modal_page_left').classList = 'width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_left_0 easing_01';
    document.getElementById('modal_page_right').classList = 'width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_left_0 easing_01';
  }

  ;

  if (is_Mobile) {
    document.getElementById('modal_nav_top_left').classList = 'width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top_0 easing_01';
    document.getElementById('modal_nav_bottom_left').classList = 'width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0 easing_01';
    document.getElementById('modal_nav_left').classList = 'width_1205vh height_100 float_left position_fixed left_0 bottom_0 transform_translate3d_left_0 easing_01';
    document.getElementById('modal_nav_right').classList = 'width_1205vh height_100 float_left position_fixed right_0 bottom_0 transform_translate3d_left_0 easing_01';
    document.getElementById('modal_page_top').classList = 'width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_top_0 easing_01';
    document.getElementById('modal_page_bottom').classList = 'width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_top_0 easing_01';
    document.getElementById('modal_page_left').classList = 'width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_left_0 easing_01';
    document.getElementById('modal_page_right').classList = 'width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_left_0 easing_01';
  }

  ;
};

HANDLE_gui = function HANDLE_gui() {
  if (state.app.dark_mode == false) {
    if (document.getElementById('bg-noise') != null) {
      document.getElementById('bg-noise').classList = 'position_relative height_100vh width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_white';
    }

    ;

    if (root != null) {
      root.classList = 'position_relative width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_white';
    }

    ;

    if (document.getElementById('row-noise') != null) {
      document.getElementById('row-noise').innerHTML = "\n                <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n            ";
    }

    ;

    if (document.getElementById('after_fold_1') != null) {
      document.getElementById('after_fold_1').classList = 'position_relative width_100vw height_100vh float_left margin_auto gradient_white_top';
    }

    ;

    if (document.getElementById('after_fold_2') != null) {
      document.getElementById('after_fold_2').classList = 'position_relative width_100vw height_100vh float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('content') != null) {
      document.getElementById('content').classList = 'position_relative width_100vw float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('element_ol_firebase_all') != null) {
      document.getElementById('element_ol_firebase_all').classList = 'position_relative width_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('element_ol_firebase_all_library') != null) {
      document.getElementById('element_ol_firebase_all_library').classList = 'position_relative width_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('element_ol_firebase_all_users') != null) {
      document.getElementById('element_ol_firebase_all_users').classList = 'position_relative width_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('element_ol_firebase_validated_user') != null) {
      document.getElementById('element_ol_firebase_validated_user').classList = 'position_relative width_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('wp_content') != null) {
      document.getElementById('wp_content').classList = 'position_relative width_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('modal_nav_top_left_container') != null) {
      document.getElementById('modal_nav_top_left_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('modal_nav_bottom_left_container') != null) {
      document.getElementById('modal_nav_bottom_left_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('modal_nav_left_container') != null) {
      document.getElementById('modal_nav_left_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('modal_nav_right_container') != null) {
      document.getElementById('modal_nav_right_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('modal_page_top_container') != null) {
      document.getElementById('modal_page_top_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('modal_page_bottom_container') != null) {
      document.getElementById('modal_page_bottom_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('modal_page_left_container') != null) {
      document.getElementById('modal_page_left_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('modal_page_right_container') != null) {
      document.getElementById('modal_page_right_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey';
    }

    ;
  }

  ;

  if (state.app.dark_mode == true) {
    if (document.getElementById('bg-noise') != null) {
      document.getElementById('bg-noise').classList = 'position_relative height_100vh width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_grey';
    }

    ;

    if (root != null) {
      root.classList = 'position_relative width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_grey';
    }

    ;

    if (document.getElementById('row-noise') != null) {
      document.getElementById('row-noise').innerHTML = "\n                <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n            ";
    }

    ;

    if (document.getElementById('after_fold_1') != null) {
      document.getElementById('after_fold_1').classList = 'position_relative width_100vw height_100vh float_left margin_auto gradient_grey_top';
    }

    ;

    if (document.getElementById('after_fold_2') != null) {
      document.getElementById('after_fold_2').classList = 'position_relative width_100vw height_100vh float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('content') != null) {
      document.getElementById('content').classList = 'position_relative width_100vw float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('element_ol_firebase_all') != null) {
      document.getElementById('element_ol_firebase_all').classList = 'position_relative width_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('element_ol_firebase_all_library') != null) {
      document.getElementById('element_ol_firebase_all_library').classList = 'position_relative width_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('element_ol_firebase_all_users') != null) {
      document.getElementById('element_ol_firebase_all_users').classList = 'position_relative width_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('element_ol_firebase_validated_user') != null) {
      document.getElementById('element_ol_firebase_validated_user').classList = 'position_relative width_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('wp_content') != null) {
      document.getElementById('wp_content').classList = 'position_relative width_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('modal_nav_top_left_container') != null) {
      document.getElementById('modal_nav_top_left_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('modal_nav_bottom_left_container') != null) {
      document.getElementById('modal_nav_bottom_left_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('modal_nav_left_container') != null) {
      document.getElementById('modal_nav_left_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey';
    }

    ;

    if (document.getElementById('modal_nav_right_container') != null) {
      document.getElementById('modal_nav_right_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('modal_page_top_container') != null) {
      document.getElementById('modal_page_top_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('modal_page_bottom_container') != null) {
      document.getElementById('modal_page_bottom_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('modal_page_left_container') != null) {
      document.getElementById('modal_page_left_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white';
    }

    ;

    if (document.getElementById('modal_page_right_container') != null) {
      document.getElementById('modal_page_right_container').classList = 'position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white';
    }

    ;
  }

  ;

  if (is_Desktop) {}

  ;

  if (is_Mobile) {}

  ;

  if (state.ui.modal.nav.top.transform == true) {
    if (document.getElementById('modal_nav_top_left') != null) {
      document.getElementById('modal_nav_top_left').classList.remove('transform_translate3d_top_0');
      document.getElementById('modal_nav_top_left').classList.add('transform_translate3d_top_100');
    }

    ;
  }

  ;

  if (state.ui.modal.nav.top.transform == false) {
    if (document.getElementById('modal_nav_top_left') != null) {
      document.getElementById('modal_nav_top_left').classList.remove('transform_translate3d_top_100');
      document.getElementById('modal_nav_top_left').classList.add('transform_translate3d_top_0');
    }

    ;
  }

  ;

  if (state.ui.modal.nav.bottom.transform == true) {
    if (document.getElementById('modal_nav_bottom_left') != null) {
      document.getElementById('modal_nav_bottom_left').classList.remove('transform_translate3d_top_0');
      document.getElementById('modal_nav_bottom_left').classList.add('transform_translate3d_top100');
    }

    ;
  }

  ;

  if (state.ui.modal.nav.bottom.transform == false) {
    if (document.getElementById('modal_nav_bottom_left') != null) {
      document.getElementById('modal_nav_bottom_left').classList.remove('transform_translate3d_top100');
      document.getElementById('modal_nav_bottom_left').classList.add('transform_translate3d_top_0');
    }

    ;
  }

  ;

  if (state.ui.modal.nav.left.transform == false) {
    if (document.getElementById('modal_nav_right') != null) {
      document.getElementById('modal_nav_right').classList.remove('transform_translate3d_left100');
      document.getElementById('modal_nav_right').classList.add('transform_translate3d_left_0');
    }

    ;
  }

  ;

  if (state.ui.modal.nav.left.transform == true) {
    if (document.getElementById('modal_nav_right') != null) {
      document.getElementById('modal_nav_right').classList.remove('transform_translate3d_left_0');
      document.getElementById('modal_nav_right').classList.add('transform_translate3d_left100');
    }

    ;
  }

  ;

  if (state.ui.modal.nav.right.transform == false) {
    if (document.getElementById('modal_nav_left') != null) {
      document.getElementById('modal_nav_left').classList.remove('transform_translate3d_left_100');
      document.getElementById('modal_nav_left').classList.add('transform_translate3d_left_0');
    }

    ;
  }

  ;

  if (state.ui.modal.nav.right.transform == true) {
    if (document.getElementById('modal_nav_left') != null) {
      document.getElementById('modal_nav_left').classList.remove('transform_translate3d_left_0');
      document.getElementById('modal_nav_left').classList.add('transform_translate3d_left_100');
    }

    ;
  }

  ;

  if (state.ui.modal.page.top.transform == true) {
    if (document.getElementById('modal_page_top') != null) {
      document.getElementById('modal_page_top').classList.remove('transform_translate3d_top_0');
      document.getElementById('modal_page_top').classList.add('transform_translate3d_top_100');
    }

    ;
  }

  ;

  if (state.ui.modal.page.top.transform == false) {
    if (document.getElementById('modal_page_top') != null) {
      document.getElementById('modal_page_top').classList.remove('transform_translate3d_top_100');
      document.getElementById('modal_page_top').classList.add('transform_translate3d_top_0');
    }

    ;
  }

  ;

  if (state.ui.modal.page.bottom.transform == true) {
    if (document.getElementById('modal_page_bottom') != null) {
      document.getElementById('modal_page_bottom').classList.remove('transform_translate3d_top_0');
      document.getElementById('modal_page_bottom').classList.add('transform_translate3d_top100');
    }

    ;
  }

  ;

  if (state.ui.modal.page.bottom.transform == false) {
    if (document.getElementById('modal_page_bottom') != null) {
      document.getElementById('modal_page_bottom').classList.remove('transform_translate3d_top100');
      document.getElementById('modal_page_bottom').classList.add('transform_translate3d_top_0');
    }

    ;
  }

  ;

  if (state.ui.modal.page.left.transform == true) {
    if (document.getElementById('modal_page_left') != null) {
      document.getElementById('modal_page_left').classList.remove('transform_translate3d_left_0');
      document.getElementById('modal_page_left').classList.add('transform_translate3d_left100');
    }

    ;
  }

  ;

  if (state.ui.modal.page.left.transform == false) {
    if (document.getElementById('modal_page_left') != null) {
      document.getElementById('modal_page_left').classList.remove('transform_translate3d_left100');
      document.getElementById('modal_page_left').classList.add('transform_translate3d_left_0');
    }

    ;
  }

  ;

  if (state.ui.modal.page.right.transform == true) {
    if (document.getElementById('modal_page_right') != null) {
      document.getElementById('modal_page_right').classList.remove('transform_translate3d_left_0');
      document.getElementById('modal_page_right').classList.add('transform_translate3d_left_100');
    }

    ;
  }

  ;

  if (state.ui.modal.page.right.transform == false) {
    if (document.getElementById('modal_page_right') != null) {
      document.getElementById('modal_page_right').classList.remove('transform_translate3d_left_100');
      document.getElementById('modal_page_right').classList.add('transform_translate3d_left_0');
    }

    ;
  }

  ;
};

HANDLE_content = function HANDLE_content() {
  if (state.app.content == 0) {
    if (document.getElementById('root') != null) {
      document.getElementById('root').innerHTML += "\n                <div id=\"route_bg\" class=\"position_fixed top_0 left_0 width_100vw height_100vh float_left margin_auto z_index_-1\">\n                </div>\n                <!-- wp content -->\n                <div id=\"front_layer\" class=\"position_relative width_100vw float_left margin_auto z_index_0\">\n                <!-- lead -->\n                <div id=\"url_fold\" class=\"position_relative width_100vw float_left margin_auto\">\n                </div>\n                <!-- lead end -->\n                <!-- lead -->\n                <div id=\"id_fold\" class=\"position_relative width_100vw float_left margin_auto\">\n                </div>\n                <!-- lead end -->\n                <!-- lead -->\n                <div id=\"route_fold\" class=\"position_relative width_100vw float_left margin_auto\">\n                   <!--\n                      <div id=\"bg_filler\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n                      \n                          <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                      \n                              <div id=\"row-logo-mark_filler\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                      \n                              <div id=\"row-logo-text_filler\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                      \n                              <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                  <input id=\"gui_input_1\" type=\"text\" placeholder=\"hello\" class=\"gui_input_1 position_absolute top_0 left_0 right_0 height_33vh width_33vw margin_auto\"/>\n                      \n                                  <div class=\"position_absolute top_100 right_0 left_0 height_100 width_100 margin_auto\">\n                                      <div id=\"gui_input_2\" class=\"gui_input_2 position_absolute top_0 right_0 left_0 height_50 width_50 margin_auto\"></div>\n                                  </div>\n                              </div>\n                      \n                          </div>\n                      \n                      </div>\n                      -->\n                </div>\n                <!-- lead end -->\n                <!-- after lead -->\n                <!-- after lead end -->\n                <div id=\"content\" class=\"position_relative width_100vw float_left margin_auto\"></div>\n                <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                   <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                      <div class=\"position_relative float_left calc_10vw_width margin_5vw\">\n                         <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                            <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                               element_ol_firebase_all\n                            </div>\n                            <div class=\"position_relative width_100 float_left margin_auto\">\n                               <div id=\"element_ol_firebase_all\" class=\"position_relative width_100 float_left margin_auto\"></div>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                   <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                      <div class=\"position_relative float_left calc_10vw_width margin_5vw\">\n                         <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                            <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                               element_ol_firebase_all_library\n                            </div>\n                            <div class=\"position_relative width_100 float_left margin_auto\">\n                               <div id=\"element_ol_firebase_all_library\" class=\"position_relative width_100 float_left margin_auto\"></div>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                   <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                      <div class=\"position_relative float_left calc_10vw_width margin_5vw\">\n                         <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                            <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                               element_ol_firebase_all_users\n                            </div>\n                            <div class=\"position_relative width_100 float_left margin_auto\">\n                               <div id=\"element_ol_firebase_all_users\" class=\"position_relative width_100 float_left margin_auto\"></div>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                   <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                      <div class=\"position_relative float_left calc_10vw_width margin_5vw\">\n                         <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                            <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                               element_ol_firebase_validated_user\n                            </div>\n                            <div class=\"position_relative width_100 float_left margin_auto\">\n                               <div id=\"element_ol_firebase_validated_user\" class=\"position_relative width_100 float_left margin_auto\"></div>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                   <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                      <div class=\"position_relative float_left calc_10vw_width margin_5vw\">\n                         <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                            Sort\n                            <div class=\"position_relative width_100 float_left margin_auto\">\n                               <input id=\"element_input_sort\" type=\"text\" placeholder=\"element_input_sort\" class=\"width_100 float_left\" />\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                   <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                      <div class=\"position_relative float_left calc_10vw_width margin_5vw\">\n                         <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                            <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                               Filtering\n                            </div>\n                            <div class=\"position_relative width_100 float_left margin_auto\">\n                               <input id=\"element_input_filter\" type=\"text\" placeholder=\"element_input_filter\" class=\"width_100 float_left\" />\n                               <input id=\"element_login_username\" type=\"text\" placeholder=\"element_login_username\" class=\"width_100 float_left\" />\n                               <input id=\"element_login_password\" type=\"text\" placeholder=\"element_login_password\" class=\"width_100 float_left\" />\n                               <div id=\"element_refresh\">refresh</div>\n                               <div id=\"element_login\">login</div>\n                               <div id=\"element_logout\">logout</div>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                   <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                      <div class=\"position_relative float_left calc_10vw_width margin_5vw\">\n                         <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                            <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                               create post\n                            </div>\n                            <div class=\"position_relative width_100 float_left margin_auto\">\n                               <input id=\"create_post_title\" type=\"text\" placeholder=\"create_post_title\" class=\"width_100 float_left\" />\n                               <input id=\"create_post_tag\" type=\"text\" placeholder=\"create_post_tag\" class=\"width_100 float_left\" />\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                   <div class=\"position_relative width_100 float_left margin_auto bg_white\">\n                      <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                         <div class=\"position_relative float_left calc_10vw_width margin_5vw\">\n                            <div class=\"position_relative float_left calc_2vw_width border_1vw_grey\">\n                               <div class=\"position_relative width_100 float_left margin_auto\">\n                                  create user\n                               </div>\n                               <div class=\"position_relative width_100 float_left margin_auto\">\n                                  <input id=\"create_user_username\" type=\"text\" placeholder=\"create_user_username\" class=\"width_100 float_left\" />\n                                  <input id=\"create_user_password\" type=\"text\" placeholder=\"create_user_password\" class=\"width_100 float_left\" />\n                               </div>\n                               <div class=\"position_relative width_100 float_left margin_auto\">\n                                  <div id=\"element_addListing\">add listing</div>\n                               </div>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"footer\" class=\"position_relative height_100vh width_100vw float_left margin_auto\"></div>\n                </div>\n                <div id=\"component_app_modals\" class=\"\">\n                </div>\n                <div id=\"loading\" class=\"position_fixed top_0 left_0 height_100vh width_100vw float_left margin_auto bg bg_white\">\n                </div>\n\n            ";
    }

    ;
  }

  ;

  if (state.app.content == 1) {
    if (document.getElementById('route_fold') != null) {
      document.getElementById('route_fold').innerHTML = "";
    }

    ;

    if (document.getElementById('route_bg_content') != null) {
      document.getElementById('route_bg_content').innerHTML = "";
    }

    ;

    if (document.getElementById('fold_content') != null) {
      document.getElementById('fold_content').innerHTML = "";
    }

    ;
  }

  ;
};

HANDLE_modals = function HANDLE_modals() {
  // setting divs
  if (document.getElementById('component_app_modals') != null) {
    document.getElementById('component_app_modals').innerHTML = "";
    var content;

    if (is_Desktop) {
      content = "\n\n                <div id=\"modal_page_top\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0\">\n                   <div id=\"modal_page_top_container\" class=\"\">\n                   </div>\n                </div>\n                <div id=\"modal_page_bottom\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0\">\n                   <div id=\"modal_page_bottom_container\" class=\"\">\n                   </div>\n                </div>\n                <div id=\"modal_page_left\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_left_0\">\n                   <div id=\"modal_page_left_container\" class=\"\">\n                   </div>\n                </div>\n                <div id=\"modal_page_right\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_left_0\">\n                   <div id=\"modal_page_right_container\" class=\"\">\n                   </div>\n                </div>\n                <div id=\"modal_nav_top_left\" class=\"z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top_0 easing_01\">\n                   <div id=\"modal_nav_top_left_container\" class=\"\">\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_6025 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"row-logo-type\" class=\"\">\n                            </div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_6025 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_house_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_6025 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_6025 easing_01\">\n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div id=\"modal_nav_bottom_left\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0\">\n                   <div id=\"modal_nav_bottom_left_container\" class=\"\">\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_close_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_min_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div id=\"modal_nav_left\" class=\"z_index_6 width_1205vh float_left position_fixed top_0 height_100 transform_translate3d_left_0 easing_01\">\n                   <div id=\"modal_nav_left_container\" class=\"\">\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div id=\"modal_nav_right\" class=\"z_index_6 width_1205vh float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left_0\">\n                   <div id=\"modal_nav_right_container\" class=\"\">\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                      \n                      <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                         </div>\n                      </div>\n\n                      <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                         <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n\n            ";
    }

    ;

    if (is_Mobile) {
      content = "\n\n                <div id=\"modal_page_top\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0\">\n                   <div id=\"modal_page_top_container\" class=\"\">\n                   </div>\n                </div>\n                <div id=\"modal_page_bottom\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0\">\n                   <div id=\"modal_page_bottom_container\" class=\"\">\n                   </div>\n                </div>\n                <div id=\"modal_page_left\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0\">\n                   <div id=\"modal_page_left_container\" class=\"\">\n                   </div>\n                </div>\n                <div id=\"modal_page_right\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0\">\n                   <div id=\"modal_page_right_container\" class=\"\">\n                   </div>\n                </div>\n                <div id=\"modal_nav_top_left\" class=\"z_index_6 width_100vw float_left position_fixed top_0 height_1205vw transform_translate3d_top_0 easing_01\">\n                   <div id=\"modal_nav_top_left_container\" class=\"\">\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_705 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_1205 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">                              \n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_20 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">                              \n                           \n                      </div>\n                        <div id=\"row-logo-type\" class=\"\">\n                        </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_20 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_20 easing_01 bg_blue\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_blue\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_20 easing_01 bg_purple\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_purple\">\n                         <div id=\"row-toggle\" class=\"float_right\">\n                            toggle\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div id=\"modal_nav_bottom_left\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0\">\n                   <div id=\"modal_nav_bottom_left_container\" class=\"\">\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_pink\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_pink\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_blue\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_blue\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_orange\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_orange\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_purple\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_purple\">\n                      </div>\n                   </div>\n                </div>\n                <div id=\"modal_nav_left\" class=\"width_1205vh height_100 z_index_6 float_left position_fixed top_0 transform_translate3d_left_0 easing_01\">\n                   <div id=\"modal_nav_left_container\" class=\"\">\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_705 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_1205 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">                              \n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_20 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">                              \n                           \n                      </div>\n                        <div id=\"row-logo-type\" class=\"\">\n                        </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_20 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_20 easing_01 bg_blue\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_blue\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_right height_100 width_20 easing_01 bg_purple\">\n                      <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_purple\">\n                         <div id=\"row-toggle\" class=\"float_right\">\n                            toggle\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div id=\"modal_nav_right\" class=\"z_index_6 width_100vw float_left position_fixed right_0 bottom_0 height_6025vw transform_translate3d_left_0\">\n                   <div id=\"modal_nav_right_container\" class=\"\">\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_pink\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_pink\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_green\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_green\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_blue\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_blue\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_orange\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_orange\">\n                      </div>\n                   </div>\n                   <div id=\"hover_item\" class=\"position_relative float_left height_100 width_20 easing_01 bg_purple\">\n                      <div class=\"hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_purple\">\n                      </div>\n                   </div>\n                </div>\n\n            ";
    }

    ;
    document.getElementById('component_app_modals').appendChild(Generate_new_fragment.appendChild(Generate_new_div(content, "modal_nav", "position_fixed top_0 left_0"))); // filter by title

    setTimeout(function () {
      if (document.getElementById('row-logo-type') != null) {
        document.getElementById('row-logo-type').addEventListener('click', function (event) {
          // filter library
          setTimeout(function () {
            state.app.dark_mode = !state.app.dark_mode;
            HANDLE_gui();
          }, 0);
        });
      }

      ;

      if (document.getElementById('row-toggle') != null) {
        document.getElementById('row-toggle').addEventListener('click', function (event) {
          // filter library
          setTimeout(function () {
            state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
            HANDLE_gui();
          }, 0);
        });
      }

      ;
    }, 101);
  }

  ;
};

HANDLE_physical = function HANDLE_physical() {// set dimensions based on resize
}; // order or operations


Handle_check_route = function Handle_check_route(route) {
  (function () {
    if (route == '/') {
      if (document.getElementById('route_fold') != null) {}

      ; // console.log(state.data.firebase.gnougn.roster[i]);

      if (document.getElementById('route_bg') != null) {}

      ;
      setTimeout(function () {}, 101);
    }

    ;

    if (route == '/loaded') {
      setTimeout(function () {
        // determined by route
        if (document.getElementById('loading') != null) {
          document.getElementById('loading').classList = "";
        }

        ; // determined by route

        if (document.getElementById('route_fold') != null) {
          document.getElementById('route_fold').innerHTML = "";
          var route_background;

          if (is_Desktop) {
            route_background = "\n\n                                <div id=\"fold\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n                                </div>\n                                <div id=\"after_fold_1\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\">\n                                </div>\n                                <div id=\"after_fold_2\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\">\n                                </div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">\n                                        Dane Cook\n                                    </div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">\n                                        Dane Cook\n                                    </div>\n\n                                <div class=\"position_relative width_100vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">A Favor</div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">A Favor</div>\n\n                                </div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">\n                                        Dane Cook\n                                    </div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">\n                                        Dane Cook\n                                    </div>\n\n                                <div class=\"position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">A Favor</div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">A Favor</div>\n\n                                </div>\n\n                                <div class=\"position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">A Favor</div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">A Favor</div>\n                                    \n                                </div>\n                                \n                            ";
          }

          ;

          if (is_Mobile) {
            route_background = "\n\n                                <div id=\"fold\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n                                </div>\n                                <div id=\"after_fold_1\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\">\n                                </div>\n                                <div id=\"after_fold_2\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\">\n                                </div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">\n                                        Dane Cook\n                                    </div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">\n                                        Dane Cook\n                                    </div>\n\n                                <div class=\"position_relative width_100vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">A Favor</div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">A Favor</div>\n\n                                </div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">\n                                        Dane Cook\n                                    </div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">\n                                        Dane Cook\n                                    </div>\n\n                                <div class=\"position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">A Favor</div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">A Favor</div>\n\n                                </div>\n\n                                <div class=\"position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">A Favor</div>\n\n                                    <div id=\"compontent\" class=\"position_relative height_100vh width_100vw float_left margin_auto bg_white\">A Favor</div>\n                                    \n                                </div>\n                                \n                            ";
          }

          ;
          document.getElementById('route_fold').innerHTML += route_background;
        }

        ; // determined by route

        if (document.getElementById('route_bg') != null) {
          document.getElementById('route_bg').innerHTML = "";
          var content = "\n\n                        <div id=\"bg-noise\" class=\"position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n\n                        <div id=\"row-noise\" class=\"opacity_005\">\n                            <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                            <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                        </div>\n\n                        <div id=\"\" class=\"gui_stage_tv position_fixed bottom_0 left_0 width_33vw height_33vh margin_auto\"></div>\n                        <div id=\"\" class=\"gui_stage_lights position_fixed top_0 right_0 left_0 width_33vw height_33vh margin_auto\"></div>\n                        <div id=\"\" class=\"gui_stage_desk position_fixed bottom_0 right_0 left_0 width_50vw height_50vh margin_auto\"></div>\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div id=\"row-logo-mark-type_filler\"></div>\n                            \n                            <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1_filler\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"bg-character\" class=\"gui_character position_fixed bottom_0 right_0 width_50vw height_50vh margin_auto\"></div>\n\n                    ";
          document.getElementById('route_bg').appendChild(Generate_new_fragment.appendChild(Generate_new_div(content, "route_bg_content", "position_absolute top_0 left_0 width_100vw height_100vh")));
        }

        ; // determined by route

        if (document.getElementById('fold') != null) {
          document.getElementById('fold').innerHTML = "";
          var _content = "\n\n                        \n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark_filler\"></div>\n                            <div id=\"row-logo-mark-type\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            \n                            <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"bg-character\" class=\"gui_character position_fixed bottom_0 left_0 width_50vw height_50vh margin_auto\"></div>\n\n\n                        <div id=\"element_scroll_y_scrollbar_styled\" class=\"position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1\">\n                            <div class=\"position_relative width_100 float_left\">\n\n                                <div id=\"bg-character\" class=\"gui_character position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                <div id=\"bg-character\" class=\"gui_character position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                <div id=\"bg-character\" class=\"gui_character position_relative width_100 height_25vw margin_auto\"></div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow\">\n                            <div class=\"position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n                                <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                \n                                <div id=\"bg-character\" class=\"gui_character position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n                                <div id=\"bg-character\" class=\"gui_character position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n                                <div id=\"bg-character\" class=\"gui_character position_relative width_50vw height_25vw margin_auto\"></div>\n\n                                </div>\n                            </div>\n                          </div>\n\n\n                    ";
          document.getElementById('fold').appendChild(Generate_new_fragment.appendChild(Generate_new_div(_content, "fold_content", "position_absolute top_0 left_0 width_100vw height_100vh"))); // filter by title

          if (document.getElementById('gui_interaction_button_1') != null) {
            document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {
              state.app.content = 1;
              HANDLE_content();
            });
          }

          ;
        }

        ;
      }, 0);
      setTimeout(function () {
        if (state.app.url != null) {
          //alert('/loaded url: ' + state.app.url);
          document.getElementById('url_fold').innerHTML += "\n                        ".concat(state.app.url, "\n                    ");

          if (state.app.id != null) {
            //alert('/loaded user id: ' + state.app.id);
            document.getElementById('id_fold').innerHTML += "\n                            ".concat(state.app.id, "\n                        ");
          }

          ;
        }

        ;
      }, 0);
      window.scrollTo(0, 0);
    }

    ;

    if (route == '/home') {
      setTimeout(function () {
        if (document.getElementById('route_fold') != null) {
          document.getElementById('route_fold').innerHTML = "\n\n                        <div id=\"fold\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n                        </div>\n                        <div id=\"after_fold_1\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\">\n                        </div>\n                        <div id=\"after_fold_2\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\">\n                        </div>\n\n                    ";
        }

        ; // console.log(state.data.firebase.gnougn.roster[i]);

        if (document.getElementById('route_bg') != null) {
          document.getElementById('route_bg').innerHTML = "\n\n                        <div id=\"bg-noise\" class=\"position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n\n                        <div id=\"row-noise\" class=\"opacity_005\">\n                            <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                            <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                        </div>\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                            </div>\n                        </div>\n\n                    ";
        }

        ;
      }, 0);
      setTimeout(function () {
        if (document.getElementById('route_fold') != null) {
          document.getElementById('route_fold').innerHTML = "\n\n                        <div id=\"fold\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n                        </div>\n                        <div id=\"after_fold_1\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\">\n                        </div>\n                        <div id=\"after_fold_2\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\">\n                        </div>\n\n                    ";
        }

        ; // console.log(state.data.firebase.gnougn.roster[i]);

        if (document.getElementById('route_bg') != null) {
          document.getElementById('route_bg').innerHTML = "\n\n                        <div id=\"bg-noise\" class=\"position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n\n                        <div id=\"row-noise\" class=\"opacity_005\">\n                            <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                            <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                        </div>\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                            </div>\n                        </div>\n\n                        <div id=\"\" class=\"gui_stage_tv position_fixed bottom_0 left_0 width_33vw height_33vh margin_auto\"></div>\n                        <div id=\"\" class=\"gui_stage_lights position_fixed top_0 right_0 left_0 width_33vw height_33vh margin_auto\"></div>\n                        <div id=\"\" class=\"gui_stage_desk position_fixed bottom_0 right_0 left_0 width_50vw height_50vh margin_auto\"></div>\n\n                        <div id=\"bg-character\" class=\"gui_character position_fixed bottom_0 right_0 width_50vw height_50vh margin_auto\"></div>\n\n\n                    ";
        }

        ;
      }, 2000);
      setTimeout(function () {
        if (document.getElementById('route_fold') != null) {
          document.getElementById('route_fold').innerHTML = "\n\n                        <div id=\"fold\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n                        </div>\n                        <div id=\"after_fold_1\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\">\n                        </div>\n                        <div id=\"after_fold_2\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\">\n                        </div>\n\n                    ";
        }

        ; // console.log(state.data.firebase.gnougn.roster[i]);

        if (document.getElementById('route_bg') != null) {
          document.getElementById('route_bg').innerHTML = "\n\n                        <div id=\"bg-noise\" class=\"position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n\n                        <div id=\"row-noise\" class=\"opacity_005\">\n                            <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                            <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                        </div>\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                            </div>\n                        </div>\n\n                    ";
        }

        ;
      }, 4000);
      setTimeout(function () {
        if (document.getElementById('route_fold') != null) {
          document.getElementById('route_fold').innerHTML = "\n\n                        <div id=\"fold\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n                        </div>\n                        <div id=\"after_fold_1\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\">\n                        </div>\n                        <div id=\"after_fold_2\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\">\n                        </div>\n\n                    ";
        }

        ; // console.log(state.data.firebase.gnougn.roster[i]);

        if (document.getElementById('route_bg') != null) {
          document.getElementById('route_bg').innerHTML = "\n\n                        <div id=\"bg-noise\" class=\"position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n\n                        <div id=\"row-noise\" class=\"opacity_005\">\n                            <div id=\"row_accent_noise\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                            <div id=\"row_accent_noise_white\" class=\"accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto\"></div>\n                        </div>\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                            </div>\n                        </div>\n\n                        <div id=\"\" class=\"gui_stage_tv position_fixed bottom_0 left_0 width_33vw height_33vh margin_auto\"></div>\n                        <div id=\"\" class=\"gui_stage_lights position_fixed top_0 right_0 left_0 width_33vw height_33vh margin_auto\"></div>\n                        <div id=\"\" class=\"gui_stage_desk position_fixed bottom_0 right_0 left_0 width_50vw height_50vh margin_auto\"></div>\n\n                        <div id=\"bg-character\" class=\"gui_character position_fixed bottom_0 right_0 width_50vw height_50vh margin_auto\"></div>\n\n\n                    ";
        }

        ; // determined by route

        if (document.getElementById('fold') != null) {
          document.getElementById('fold').innerHTML = "";
          var content = "\n\n                        \n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark_filler\"></div>\n                            <div id=\"row-logo-mark-type\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            \n                            <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"bg-character\" class=\"gui_character position_fixed bottom_0 left_0 width_50vw height_50vh margin_auto\"></div>\n\n\n                    ";
          document.getElementById('fold').appendChild(Generate_new_fragment.appendChild(Generate_new_div(content, "fold_content", "position_absolute top_0 left_0 width_100vw height_100vh"))); // filter by title

          if (document.getElementById('gui_interaction_button_1') != null) {
            document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {
              state.app.content = 1;
              HANDLE_content();
            });
          }

          ;
        }

        ;
      }, 6000);
      setTimeout(function () {}, 8000);
    }

    ;
  })();
};

Handle_return_state = function Handle_return_state() {
  return state;
};

Handle_get_state_from_events = function Handle_get_state_from_events() {
  state = _events.default.Handle_return_state_from_events();
};

window.onresize = function () {
  //alert('yup')
  HANDLE_gui(); //HANDLE_modals();

  HANDLE_adaptive();
};

window.onload = function () {
  HANDLE_content();
  console.log(location);
  console.log(location.pathname);
  var parts = location.pathname.split('/');

  if (parts[1] == null) {
    state.app.url = '/';
  }

  ;

  if (parts[1] != null) {
    if (parts[1] != null) {
      state.app.url = parts[1]; //alert('url:' + parts[1]);

      if (parts[2] != null) {
        //alert('id: ' + parts[2])
        state.app.id = parts[2];
      }
    }
  }

  ;
  Handle_check_route(state.app.route);
  handle_refresh_fire_data();
  handle_repeated_fire_data_validation; // console.log(state.data.firebase.gnougn.roster[i]);

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
        console.log(state.events.mouse.movetimer);
      }

      ;

      if (state.events.mouse.movetimer == 10) {//alert('too long');
      }

      ;
      console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
    }, 1000);
  })(); //console.log(window);
  //console.log(screen);
  //console.log(screen.height);
  //console.log(screen.width);
  //console.log(navigator);
  //console.log(history);
  //console.log(history.length);
  //console.log(location);
  //console.log(location.pathname);
  //console.log(localStorage);


  localStorage.setItem("state", JSON.stringify(state)); //console.log(localStorage.state);

  var local = JSON.parse(localStorage.state);
  console.log(local.app);
}; // Exports


var _default = {
  Handle_return_state: Handle_return_state,
  Handle_get_state_from_events: Handle_get_state_from_events,
  Handle_check_route: Handle_check_route,
  HANDLE_gui: HANDLE_gui
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53615" + '/');

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