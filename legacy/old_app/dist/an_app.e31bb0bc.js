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
},{"./assets/gui/gui_wit_boys.svg":[["gui_wit_boys.0de10b7f.svg","assets/gui/gui_wit_boys.svg"],"assets/gui/gui_wit_boys.svg"],"./assets/gui/gui_wit_logo.svg":[["gui_wit_logo.fb8b3b16.svg","assets/gui/gui_wit_logo.svg"],"assets/gui/gui_wit_logo.svg"],"./assets/gui/gui_wit_logo_dark.svg":[["gui_wit_logo_dark.22e2ad7b.svg","assets/gui/gui_wit_logo_dark.svg"],"assets/gui/gui_wit_logo_dark.svg"],"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.58909d32.svg","assets/gui/gui_link_grid_white.svg"],"assets/gui/gui_link_grid_white.svg"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.8b15c689.svg","assets/gui/gui_link_menu_white.svg"],"assets/gui/gui_link_menu_white.svg"],"./assets/gui/gui_link_sign_up_white.svg":[["gui_link_sign_up_white.86d9072f.svg","assets/gui/gui_link_sign_up_white.svg"],"assets/gui/gui_link_sign_up_white.svg"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.fc375cc1.svg","assets/gui/gui_link_sign_in_white.svg"],"assets/gui/gui_link_sign_in_white.svg"],"./assets/gui/gui_link_post_white.svg":[["gui_link_post_white.ef6a2eb5.svg","assets/gui/gui_link_post_white.svg"],"assets/gui/gui_link_post_white.svg"],"./assets/gui/gui_link_message_white.svg":[["gui_link_message_white.8222fa8d.svg","assets/gui/gui_link_message_white.svg"],"assets/gui/gui_link_message_white.svg"],"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.2afa39a6.svg","assets/gui/gui_link_home_white.svg"],"assets/gui/gui_link_home_white.svg"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.23391bca.svg","assets/gui/gui_link_gear_white.svg"],"assets/gui/gui_link_gear_white.svg"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.2fd07b39.svg","assets/gui/gui_link_house_white.svg"],"assets/gui/gui_link_house_white.svg"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.27850d9e.svg","assets/gui/gui_link_close_white.svg"],"assets/gui/gui_link_close_white.svg"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.de148a15.svg","assets/gui/gui_link_min_white.svg"],"assets/gui/gui_link_min_white.svg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.f033010f.svg","assets/gui/gui_link_max_white.svg"],"assets/gui/gui_link_max_white.svg"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.179c3b09.svg","assets/gui/gui_link_dots_white.svg"],"assets/gui/gui_link_dots_white.svg"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.a1d8f80c.svg","assets/gui/gui_interaction_button_1.svg"],"assets/gui/gui_interaction_button_1.svg"],"./assets/gui/gui_interaction_button_start.svg":[["gui_interaction_button_start.5cb2f15d.svg","assets/gui/gui_interaction_button_start.svg"],"assets/gui/gui_interaction_button_start.svg"],"./assets/gui/gui_interaction_button_learn.svg":[["gui_interaction_button_learn.0a53d1d8.svg","assets/gui/gui_interaction_button_learn.svg"],"assets/gui/gui_interaction_button_learn.svg"],"./assets/gui/gui_interaction_text_or.svg":[["gui_interaction_text_or.2d029656.svg","assets/gui/gui_interaction_text_or.svg"],"assets/gui/gui_interaction_text_or.svg"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.63c56e34.svg","assets/gui/gui_interaction_text_press.svg"],"assets/gui/gui_interaction_text_press.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.e0631923.svg","assets/gui/gui_stage_desk.svg"],"assets/gui/gui_stage_desk.svg"],"./assets/gui/gui_character_message_box.svg":[["gui_character_message_box.47192970.svg","assets/gui/gui_character_message_box.svg"],"assets/gui/gui_character_message_box.svg"],"./assets/gui/gui_character_right_1.svg":[["gui_character_right_1.c745c328.svg","assets/gui/gui_character_right_1.svg"],"assets/gui/gui_character_right_1.svg"],"./assets/gui/gui_character_right_2.svg":[["gui_character_right_2.5cfcf5ac.svg","assets/gui/gui_character_right_2.svg"],"assets/gui/gui_character_right_2.svg"],"./assets/gui/gui_character_right_3.svg":[["gui_character_right_3.8dc2166e.svg","assets/gui/gui_character_right_3.svg"],"assets/gui/gui_character_right_3.svg"],"./assets/gui/gui_character_right_4.svg":[["gui_character_right_4.d7c48548.svg","assets/gui/gui_character_right_4.svg"],"assets/gui/gui_character_right_4.svg"],"./assets/gui/gui_character_left_1.svg":[["gui_character_left_1.c87b49f6.svg","assets/gui/gui_character_left_1.svg"],"assets/gui/gui_character_left_1.svg"],"./assets/gui/gui_character_left_2.svg":[["gui_character_left_2.61be681d.svg","assets/gui/gui_character_left_2.svg"],"assets/gui/gui_character_left_2.svg"],"./assets/gui/gui_character_left_3.svg":[["gui_character_left_3.056adc88.svg","assets/gui/gui_character_left_3.svg"],"assets/gui/gui_character_left_3.svg"],"./assets/gui/gui_character_left_4.svg":[["gui_character_left_4.aae0b84b.svg","assets/gui/gui_character_left_4.svg"],"assets/gui/gui_character_left_4.svg"],"./assets/gui/gui_character_right_face.svg":[["gui_character_right_face.42766739.svg","assets/gui/gui_character_right_face.svg"],"assets/gui/gui_character_right_face.svg"],"./assets/gui/gui_character_left_face.svg":[["gui_character_left_face.f15e919d.svg","assets/gui/gui_character_left_face.svg"],"assets/gui/gui_character_left_face.svg"],"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/socials/twitter_handdrawn.svg":[["twitter_handdrawn.4dd6e273.svg","assets/socials/twitter_handdrawn.svg"],"assets/socials/twitter_handdrawn.svg"],"./assets/socials/twitch_handdrawn.svg":[["twitch_handdrawn.a0ceaf56.svg","assets/socials/twitch_handdrawn.svg"],"assets/socials/twitch_handdrawn.svg"],"./assets/socials/youtube_handdrawn.svg":[["youtube_handdrawn.24d23384.svg","assets/socials/youtube_handdrawn.svg"],"assets/socials/youtube_handdrawn.svg"],"./assets/socials/instagram_handdrawn.svg":[["instagram_handdrawn.f326c03a.svg","assets/socials/instagram_handdrawn.svg"],"assets/socials/instagram_handdrawn.svg"],"./assets/socials/facebook_handdrawn.svg":[["facebook_handdrawn.2a2e1213.svg","assets/socials/facebook_handdrawn.svg"],"assets/socials/facebook_handdrawn.svg"],"./assets/gradient/grey_top.svg":[["grey_top.d8e034e1.svg","assets/gradient/grey_top.svg"],"assets/gradient/grey_top.svg"],"./assets/gradient/white_top.svg":[["white_top.ce87e304.svg","assets/gradient/white_top.svg"],"assets/gradient/white_top.svg"],"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.6dec167e.woff","assets/fonts/Silkscreen.ttf.woff"],"assets/fonts/Silkscreen.ttf.woff"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.a45ae991.svg","assets/fonts/Silkscreen.ttf.svg"],"assets/fonts/Silkscreen.ttf.svg"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.be6987ea.eot","assets/fonts/Silkscreen.ttf.eot"],"assets/fonts/Silkscreen.ttf.eot"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/state.js":[function(require,module,exports) {
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
},{}],"imports/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var state = '';
var Generate_new_fragment = document.createDocumentFragment();

var Generate_new_div = function Generate_new_div(id_String, class_String, data_Object) {
  var state = _index.default.handle_ReturnState();

  var element = document.createElement('div');

  if (id_String != null) {
    element.setAttribute("id", id_String);
  }

  ;

  if (id_String != null) {
    if (class_String) {
      element.classList = class_String;
    }

    ;
  }

  ;

  if (data_Object != null) {
    element.innerHTML = "\n            ".concat(data_Object, "\n        ");
  }

  ;
  return element;
};

var Generate_new_wp_li_post = function Generate_new_wp_li_post(data_Object) {
  var state = _index.default.handle_ReturnState();

  var element = document.createElement('li');
  element.setAttribute("id", data_Object.title);
  element.classList = data_Object.title;
  element.innerHTML = "\n        ".concat('title: ' + data_Object.title, "\n      ");
  element.addEventListener("click", function (event) {
    alert('going to wp url: seo play');
  });
  return element;
};

var Generate_new_li_post = function Generate_new_li_post(data_Object) {
  var state = _index.default.handle_ReturnState();

  var element = document.createElement('li');

  if (data_Object.title != null) {
    element.setAttribute("id", data_Object.title);
  }

  ;

  if (data_Object.title != null) {
    element.classList = data_Object.title;
  }

  ;

  if (data_Object != null) {
    element.innerHTML = "\n                  ".concat('child: ' + data_Object.child, "\n                  ").concat('title: ' + data_Object.title, "\n                  ").concat('time: ' + data_Object.time, "\n                  ").concat('likes: ' + data_Object.likes, "\n                  ").concat('views: ' + data_Object.views, "\n              ");
  }

  ;

  if (data_Object != null) {
    element.innerHTML += "\n                <button>like?</button>\n                <button>dislike?</button>\n                <button>rate 1- 3?</button>\n                <button>re\"tweet\"?</button>\n                <button>save</button>\n              ";
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  if (data_Object.child != 'roster') {
    element.addEventListener("click", function (event) {
      alert('not roster');
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = "\n                  ".concat(data_Object.id, "\n                ");
      state.data.routes = +data_Object.id;
      state.data.route = data_Object.id;
      state.data.url = data_Object.id;
      state.modal.pop.top.transform = !state.modal.pop.top.transform;
      history.replaceState({}, null, state.data.url); //from_index.firebase_like_Listings(data_Object.id);
    });
  }

  ;

  if (data_Object.child == 'roster') {
    element.addEventListener("click", function (event) {
      alert('roster');
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = "\n                  ".concat(data_Object.username, "\n                ");
      state.data.routes = +data_Object.username;
      state.data.route = data_Object.username;
      state.data.url = data_Object.username;
      state.modal.pop.top.transform = !state.modal.pop.top.transform;
      history.replaceState({}, null, state.data.url); //from_index.firebase_like_Listings(data_Object.id);
    });
  }

  ;
  /*
  element.children[1].children[3].addEventListener("click", function(event) {
      from_index.deleteWhoListings(data_Object.child, data_Object.id);
  });
  */

  return element;
}; // handles


var Toggle_functions_IF_State = function Toggle_functions_IF_State(function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) {
  var state = _index.default.handle_ReturnState(); // Function Check # 1


  (function () {
    if (Ui_State == true) {
      function_one_if_state_true(id_tag);
    }

    if (Ui_State == false) {
      function_two_if_state_false(id_tag);
    }
  })();
};

var Toggle_classes_IF_State = function Toggle_classes_IF_State(addThisClass_if_state_false, addThisClass_if_state_true, id_Tag, Ui_State) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id_Tag);

  if (MANIPULATED != null) {
    if (Ui_State == true) {
      if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {
        // remove item after buffer
        setTimeout(function () {
          MANIPULATED.classList.remove(addThisClass_if_state_false);
          MANIPULATED.classList.add(addThisClass_if_state_true);
        }, 10);
        return;
      }

      ;
    }

    ;

    if (Ui_State == false) {
      if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {
        // remove item after buffer
        setTimeout(function () {
          MANIPULATED.classList.add(addThisClass_if_state_false);
          MANIPULATED.classList.remove(addThisClass_if_state_true);
        }, 10);
        return;
      }

      ;
    }

    ;
  }

  ;
};

var Toggle_display_and_opacity_on_with_no_delay = function Toggle_display_and_opacity_on_with_no_delay(id) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display_none')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('display_none');
        MANIPULATED.classList.add('display');
      }, 0);
      return;
    }

    ;
  }

  ;
};

var Toggle_display_and_opacity_off_with_delay = function Toggle_display_and_opacity_off_with_delay(id) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display')) {
      // remove item after buffer
      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 102);
      return;
    }

    ;
  }

  ;
}; // 1000 ms delay for bg items


var Toggle_stages_display_and_opacity_on_with_no_delay = function Toggle_stages_display_and_opacity_on_with_no_delay(id) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display_none')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('display_none');
        MANIPULATED.classList.add('display');
      }, 0);
      /* remove item after buffer
      setTimeout(function() {
          MANIPULATED.classList.remove('opacity_0');
          MANIPULATED.classList.add('opacity_1');
       }, 1);
      */

      return;
    }

    ;
  }

  ;
};

var Toggle_stages_display_and_opacity_off_with_delay = function Toggle_stages_display_and_opacity_off_with_delay(id) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 1000); // remove item after buffer

      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 1000);
      return;
    }

    ;
  }

  ;
};

var _default = {
  Generate_new_fragment: Generate_new_fragment,
  Generate_new_div: Generate_new_div,
  Generate_new_li_post: Generate_new_li_post,
  Toggle_functions_IF_State: Toggle_functions_IF_State,
  Toggle_classes_IF_State: Toggle_classes_IF_State,
  Toggle_display_and_opacity_on_with_no_delay: Toggle_display_and_opacity_on_with_no_delay,
  Toggle_display_and_opacity_off_with_delay: Toggle_display_and_opacity_off_with_delay,
  Toggle_stages_display_and_opacity_on_with_no_delay: Toggle_stages_display_and_opacity_on_with_no_delay,
  Toggle_stages_display_and_opacity_off_with_delay: Toggle_stages_display_and_opacity_off_with_delay,
  Generate_new_wp_li_post: Generate_new_wp_li_post
};
exports.default = _default;
},{"../index.js":"index.js"}],"imports/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var state = '';
var drag_from = {};
var drop_to = {};

var handle_Function_Scroll = function handle_Function_Scroll(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    state.events.scroll.history.push({
      event: event
    });
    console.log('state.events.scroll.history');
    console.log(state.events.scroll.history);
    console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
    console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
    console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
    console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
    console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
    console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);
    console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollTop);
    console.log(event); //alert('yup');
    // scrolling

    console.log("event.srcElement.clientWidth: " + event.srcElement.clientWidth);
    console.log("event.srcElement.clientHeight: " + event.srcElement.clientHeight);
    console.log("event.srcElement.scrollLeft: " + event.srcElement.scrollLeft);
    console.log("event.srcElement.scrollTop: " + event.srcElement.scrollTop);
    console.log("event.srcElement.scrollWidth: " + event.srcElement.scrollWidth);
    console.log("event.srcElement.scrollHeight: " + event.srcElement.scrollHeight);
    state.interaction.root.clientHeight = event.srcElement.clientHeight;
    state.interaction.root.clientWidth = event.srcElement.clientWidth;
    state.interaction.root.scrollHeight = event.srcElement.scrollHeight;
    state.interaction.root.scrollWidth = event.srcElement.scrollWidth;
    state.interaction.root.scrollTop = event.srcElement.scrollTop;
    state.interaction.root.scrollLeft = event.srcElement.scrollLeft;

    if (document.getElementById("scroll_clientHeight") != null) {
      document.getElementById("scroll_clientHeight").innerHTML = event.srcElement.clientHeight;
    }

    if (document.getElementById("scroll_clientWidth") != null) {
      document.getElementById("scroll_clientWidth").innerHTML = event.srcElement.clientWidth;
    }

    if (document.getElementById("scroll_scrollHeight") != null) {
      document.getElementById("scroll_scrollHeight").innerHTML = event.srcElement.scrollHeight;
    }

    if (document.getElementById("scroll_scrollWidth") != null) {
      document.getElementById("scroll_scrollWidth").innerHTML = event.srcElement.scrollWidth;
    }

    if (document.getElementById("scroll_scrollTop") != null) {
      document.getElementById("scroll_scrollTop").innerHTML = event.srcElement.scrollTop;
    }

    if (document.getElementById("scroll_scrollLeft") != null) {
      document.getElementById("scroll_scrollLeft").innerHTML = event.srcElement.scrollLeft;
    } // instances


    if (event.srcElement.scrollTop > state.interaction.root.component_app_gui_scroll_y_position) {
      console.log("state.interaction.root.component_app_gui_scroll_y_position increasing");
      console.log("instance: wheel up");
    }

    if (event.srcElement.scrollTop < state.interaction.root.component_app_gui_scroll_y_position) {
      console.log("state.interaction.root.component_app_gui_scroll_y_position decreasing");
      console.log("instance: wheel up");
    }

    if (event.srcElement.scrollTop === 0) {
      console.log("instance: wheel up");
    }

    if (event.srcElement.scrollTop > 1 && !(event.srcElement.scrollHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
      console.log("instance: scrolling started");
    }

    if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
      console.log("instance: inside lead");
    }

    if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
      console.log("instance: past lead");
    }

    if (event.srcElement.scrollHeight - event.srcElement.clientHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
      console.log("instance: 100vh before bottom met");
    }

    if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
      console.log("component_app_modal_element_page_top_content: instance: footer met");
    }

    state.interaction.root.component_app_gui_scroll_y_position = event.srcElement.scrollTop;
  }

  ;
};

var handle_Function_Mouse_Move = function handle_Function_Mouse_Move(event) {
  state = _index.default.handle_ReturnState();
  state.events.mouse.status.enter = true;
  state.events.mouse.status.leave = false;

  if (event) {
    state.events.mouse.current.clientX = event.clientX;
    state.events.mouse.current.clientY = event.clientY;
    state.events.mouse.history.push([{
      clientX: event.clientX,
      clientY: event.clientY
    }]);

    if (state.events.mouse.status.up == true) {
      state.events.mouse_up_move.history.push([{
        clientX: event.clientX,
        clientY: event.clientY
      }]);
    }

    ;

    if (state.events.mouse.status.down == true) {
      state.events.mouse_down_move.history.push([{
        clientX: event.clientX,
        clientY: event.clientY
      }]);
    }

    ;
    console.log('state.events.mouse.history');
    console.log(state.events.mouse.history);
  }

  ;
};

var handle_Function_Mouse_Enter = function handle_Function_Mouse_Enter(event) {
  state = _index.default.handle_ReturnState();
  state.events.mouse.status.enter = true;
  state.events.mouse.status.leave = false;

  if (event) {
    state.events.mouse_enter.history.push([{
      clientX: event.clientX,
      clientY: event.clientY
    }]);
    console.log('state.events.mouse_enter.history');
    console.log(state.events.mouse_enter.history);
  }

  ;
};

var handle_Function_Mouse_Leave = function handle_Function_Mouse_Leave(event) {
  state = _index.default.handle_ReturnState();
  state.events.mouse.status.enter = false;
  state.events.mouse.status.leave = true;

  if (event) {
    state.events.mouse_leave.history.push([{
      clientX: event.clientX,
      clientY: event.clientY
    }]);
    console.log('state.events.mouse_leave.history');
    console.log(state.events.mouse_leave.history);
  }

  ;
};

var handle_Function_Mouse_Up = function handle_Function_Mouse_Up(event) {
  state = _index.default.handle_ReturnState();
  state.events.mouse.status.up = true;
  state.events.mouse.status.down = false;

  if (event) {
    state.events.mouse_up.history.push([{
      clientX: event.clientX,
      clientY: event.clientY
    }]);
    console.log('state.events.mouse_up.history');
    console.log(state.events.mouse_up.history);
    drag_from = {
      clientX: event.clientX,
      clientY: event.clientY
    };
    state.events.mouse_drag_drop.history.push([{
      drag: {
        drag_from: drag_from
      },
      drop: {
        drop_to: drop_to
      }
    }]);
    console.log('state.events.mouse_drag_drop.history');
    console.log(state.events.mouse_drag_drop.history);
  }

  ;
};

var handle_Function_Mouse_Down = function handle_Function_Mouse_Down(event) {
  state = _index.default.handle_ReturnState();
  state.events.mouse.status.up = false;
  state.events.mouse.status.down = true;

  if (event) {
    state.events.mouse_down.history.push([{
      clientX: event.clientX,
      clientY: event.clientY
    }]);
    drop_to = {
      clientX: event.clientX,
      clientY: event.clientY
    };
    console.log('state.events.mouse_down.history');
    console.log(state.events.mouse_down.history);
  }

  ;
};

var handle_Function_Key_Down = function handle_Function_Key_Down(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    state.events.key.history.push([{
      keyCode: event.keyCode
    }]);
    console.log('state.events.key.history');
    console.log(state.events.key.history);

    if (event.keyCode == 13) {
      state.motion.sequence_game = 0;

      _index.default.handle_Sequence_Game_Enter();
    }

    ;

    if (event.keyCode == 32) {
      state.motion.sequence_game = 0;

      _index.default.handle_Sequence_Game_Exit();
    }

    ;

    if (event.keyCode == 27) {
      //alert('handle_ui_reset');
      _index.default.handle_ui_reset();
    }

    ;

    if (event.keyCode == 81) {
      _index.default.handle_modal_reset();
    }

    ;

    if (event.keyCode == 37) {
      //alert('left');
      state.data.route += 1;
      state.interaction.playable.angle = 0;
      state.interaction.playable.clientX -= 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 38) {
      //alert('up');
      state.data.route -= 1;
      state.interaction.playable.stance = 1;
      state.interaction.playable.clientY -= 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 39) {
      //alert('right');
      state.data.route -= 1;
      state.interaction.playable.angle = 1;
      state.interaction.playable.clientX += 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 40) {
      //alert('down');
      state.data.route += 1;
      state.interaction.playable.stance = 0;
      state.interaction.playable.clientY += 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 51) {//state.ui.modal.pop.top.transform = true;
      //state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
    }

    ;

    if (event.keyCode == 87) {
      //alert('shift');
      state.interaction.vr.clientY += 1;
    }

    ;

    if (event.keyCode == 83) {
      //alert('shift');
      state.interaction.vr.clientY -= 1;
    }

    ;

    if (event.keyCode == 68) {
      //alert('shift');
      state.interaction.vr.clientX += 1;
    }

    ;

    if (event.keyCode == 65) {
      //alert('shift');
      state.interaction.vr.clientX -= 1;
    }

    ;
  }

  ;
};

var handle_Function_Key_Up = function handle_Function_Key_Up(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    state.events.key_up.history.push([{
      keyCode: event.keyCode
    }]);
    console.log('state.events.key_up.history');
    console.log(state.events.key_up.history);

    if (event.keyCode == 27) {}

    ;
  }

  ;
};

var handle_Function_Touch_Move = function handle_Function_Touch_Move(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    state.events.touch.history.push({
      force: event.touches[0].force,
      clientY: event.touches[0].clientY,
      clientX: event.touches[0].clientX
    });
    state.events.touch.touches = event.touches.length;
    console.log('state.events.touch.history');
    console.log(state.events.touch.history);
  }

  ;
};

var handle_Function_Touch_Start = function handle_Function_Touch_Start(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    state.events.touch_start.history.push({
      force: event.touches[0].force,
      clientY: event.touches[0].clientY,
      clientX: event.touches[0].clientX
    });
    drag_from = {
      clientX: event.clientX,
      clientY: event.clientY
    };
    console.log('state.events.touch_start.history');
    console.log(state.events.touch_start.history);
  }

  ;
};

var handle_Function_Touch_End = function handle_Function_Touch_End(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    state.events.touch_end.history.push({
      force: event.changedTouches[0].force,
      clientY: event.changedTouches[0].clientY,
      clientX: event.changedTouches[0].clientX
    });
    drop_to = {
      clientX: event.clientX,
      clientY: event.clientY
    };
    state.events.touch_drag_drop.history.push([{
      drag: {
        drag_from: drag_from
      },
      drop: {
        drop_to: drop_to
      }
    }]);
    console.log('state.events.touch_end.history');
    console.log(state.events.touch_end.history);
  }

  ;
};

var handle_Function_Device_Resize = function handle_Function_Device_Resize(event) {
  state = _index.default.handle_ReturnState();
  state.ux = {
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
  };
};

var handle_Function_Device_Motion = function handle_Function_Device_Motion(event) {
  state = _index.default.handle_ReturnState();
  state.events.motion.event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
  state.events.motion.event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
  state.events.motion.event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;
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
  handle_Function_Mouse_Down: handle_Function_Mouse_Down
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

var _functions = _interopRequireDefault(require("./imports/functions"));

var _events = _interopRequireDefault(require("./imports/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Initialization
var config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
};

var gen_Div = function gen_Div(id, classname, data) {
  var element = document.createElement('div');

  if (id != null) {
    element.setAttribute("id", id);
  }

  ;

  if (id != null) {
    if (classname) {
      element.classList = classname;
    }

    ;
  }

  ;

  if (data != null) {
    element.innerHTML = "\n            ".concat(data, "\n        ");
  }

  ;
  return element;
};

var state;
var dev;
var buffer;
var load_buffer;
var root;
var header;
var footer;
var ui;

var _sequence_Load;

var handle_add_element_events;
var handle_add_platform_events;
var handle_ReturnedState_fromEvents;
var fb_writable;
var fb_response;
var fb_refresh;
var fb_validation;
var fb_inital_load;
var fb_render;
var wp_writable;
var wp_json;
var wp_refresh;
var fb_library = [];
var wp_library = [];
var wp_filtered_library_by_title = [];
var firebase_filtered_library_by_title = [];
var sorted_library_by_time_up = [];
var load_bar_container = document.getElementById('load_bar_container');
var load_bar_container_border = document.getElementById('load_bar_container_border');
var load_bar_container_size = document.getElementById('load_bar_container_size');
var footer_top = document.getElementById('footer_top');
var footer_bottom = document.getElementById('footer_bottom');
var footer_left = document.getElementById('footer_left');
var footer_right = document.getElementById('footer_right');

var handle_ReturnState = function handle_ReturnState() {
  return state;
};

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
        return a.time - b.time;
      };
    }

    ;
  }

  ;

  if (mode == 'titleup') {
    if (mode == 'titleup') {
      return function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      };
    }

    ;
  }

  ;

  if (mode == 'titledown') {
    if (mode == 'titledown') {
      return function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      };
    }

    ;
  }

  ;
};

var sorted_library = function sorted_library(x) {
  return firebase_filtered_library_by_title.sort(find_sort(x));
}; // assignment


state = _state.default.default_state;
dev = false;
buffer = document.getElementById('buffer');
load_buffer = document.getElementById('load_buffer');
root = document.getElementById('root');
header = document.getElementById('header');
footer = document.getElementById('footer'); // Functions

firebase.initializeApp(config);
fb_writable = false;
fb_response = {};

fb_refresh = function fb_refresh() {
  var rootRef = firebase.database().ref();
  fb_writable = true;
  fb_response = {};

  (function () {
    rootRef.on('value', function (snapshot) {
      var obj = snapshot.val();
      state.data.firebase = obj;
      console.log('fb_refresh(): has updated -> state.data.firebase');
      console.log(state.data.firebase);
    });
  })();
};

fb_render = function fb_render() {
  // render library
  (function () {
    setTimeout(function () {
      //handle_empty_list();
      document.getElementById('wp_library_ol').innerHTML = "";
      document.getElementById('fb_library_ol').innerHTML = "";
      document.getElementById('filtered_library_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_library_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_roster_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_interaction_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_activity_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_messages_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_stream_by_title_ol').innerHTML = "";
      document.getElementById('sorted_library_by_time_up_ol').innerHTML = "";
      document.getElementById('filtered_wp_library_by_title_ol').innerHTML = "";
      wp_library = [];
      fb_library = [];
      wp_filtered_library_by_title = [];
      firebase_filtered_library_by_title = [];
      sorted_library_by_time_up = [];

      if (fb_response != null) {
        // create array
        if (document.getElementById('wp_library_ol') != null) {
          for (var i = 0; i < state.data.wordpress.length; i++) {
            wp_library.push(state.data.wordpress[i]);
          }

          ; // render array

          for (var i = 0; i < wp_library.length; i++) {
            document.getElementById('wp_library_ol').appendChild(_functions.default.Generate_new_wp_li_post(wp_library[i]));
          }

          ;
        }

        ; // create array

        if (document.getElementById('fb_library_ol') != null) {
          for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
            fb_library.push(state.data.firebase.gnougn.library[i]);
          }

          ; // render array

          for (var i = 0; i < fb_library.length; i++) {
            document.getElementById('fb_library_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
          }

          ;
        }

        ; // create array

        if (document.getElementById('filtered_wp_library_by_title_ol') != null) {
          for (var i = 0; i < wp_library.length; i++) {
            if (wp_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
              wp_filtered_library_by_title.push(wp_library[i]);
            }

            ;
            console.log('wp_filtered_library_by_title[i]');
            console.log(wp_filtered_library_by_title[i]);
          }

          ;
        }

        ; // render array

        for (var i = 0; i < wp_filtered_library_by_title.length; i++) {
          document.getElementById('filtered_wp_library_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(wp_filtered_library_by_title[i])));
        }

        ; // create array

        if (document.getElementById('filtered_library_by_title_ol') != null) {
          for (var i = 0; i < fb_library.length; i++) {
            if (fb_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
              firebase_filtered_library_by_title.push(fb_library[i]);
            }

            ;
            console.log('firebase_filtered_library_by_title[i]');
            console.log(firebase_filtered_library_by_title[i]);
          }

          ;
        }

        ; // render array

        for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
          document.getElementById('filtered_library_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_filtered_library_by_title[i])));
        }

        ; // render array

        for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
          if (firebase_filtered_library_by_title[i].child == 'roster') {
            document.getElementById('filtered_library_child_roster_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
          if (firebase_filtered_library_by_title[i].child == 'interaction') {
            document.getElementById('filtered_library_child_interaction_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
          if (firebase_filtered_library_by_title[i].child == 'activity') {
            document.getElementById('filtered_library_child_activity_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
          if (firebase_filtered_library_by_title[i].child == 'messages') {
            document.getElementById('filtered_library_child_messages_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
          if (firebase_filtered_library_by_title[i].child == 'stream') {
            document.getElementById('filtered_library_child_stream_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
          if (firebase_filtered_library_by_title[i].child == 'library') {
            document.getElementById('filtered_library_child_library_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_filtered_library_by_title[i])));
          }

          ;
        }

        ; // create array

        for (var i = 0; i < sorted_library('timeup').length; i++) {
          sorted_library_by_time_up.push(sorted_library('timeup')[i]);
        }

        ; // render array

        for (var i = 0; i < sorted_library_by_time_up.length; i++) {
          document.getElementById('sorted_library_by_time_up_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(sorted_library_by_time_up[i])));
        }

        ;
      }

      ;
    }, 0);
  })();
};

fb_validation = setInterval(function () {
  if (fb_writable == true && wp_writable == true) {
    fb_response = state.data.firebase; // target "gnougn" library

    if (fb_response.gnougn.library != null) {
      // "stops" setInterval
      fb_writable = false;
      wp_writable = false;
      var result_library = Object.keys(fb_response.gnougn.library).map(function (key) {
        return fb_response.gnougn.library[key];
      }); // we got an array from fb data

      fb_response.gnougn.library = result_library;
      console.log('fb_validation(): has updated -> fb_response.gnougn.library');
      console.log(fb_response.gnougn.library);

      if (fb_writable == false) {
        setTimeout(function () {
          //handle_localStorage();
          fb_render(); //console.clear();

          if (dev) {
            alert('connected!');
          }

          ;
          setTimeout(function () {
            _sequence_Load();
          }, 1000);
        }, 0);

        if (localStorage.username == 'local_user') {
          if (dev) {
            alert('this is a new local user: ' + localStorage.username);
          }

          ;
        }

        ;

        if (localStorage.username != 'local_user') {
          if (dev) {
            alert('this is a not new local user: ' + localStorage.username);
          }

          ; //local_login();
        }

        ;

        if (fb_inital_load == true) {
          fb_inital_load = false;

          if (dev) {
            alert('first firebase load');
          }

          ;
          return;
        }

        ;

        if (fb_inital_load == false) {
          if (dev) {
            alert('not first firebase load');
          }

          ;
          return;
        }

        ;
      }

      ;
    }

    ;
  }

  ;
  /*
   if (fb_writable == true) {
       fb_response = state.data.firebase;
       // target "gnougn" library
      if ((fb_response.gnougn.library) != null) {
          
          // "stops" setInterval
          fb_writable = false;
          let result_library = Object.keys(
              fb_response.gnougn.library).map(
              function(key) {
                  return fb_response.gnougn.library[key];
              }
          );
          
          // we got an array from fb data
          fb_response.gnougn.library = result_library;
          console.log('fb_validation(): has updated -> fb_response.gnougn.library');
          console.log(fb_response.gnougn.library);
           if (fb_writable == false) {
               setTimeout(function() {
                  //handle_localStorage();
                  fb_render();
                  //console.clear();
                  if (dev) {
                      alert('connected!');
                  };
                   setTimeout(() => {
                      sequence_Load();
                  }, 1000);
               }, 0);
               if(localStorage.username == 'local_user') {
                  if (dev) {
                      alert('this is a new local user: ' + localStorage.username);
                  };
              };
               if(localStorage.username != 'local_user') {
                  if (dev) {
                      alert('this is a not new local user: ' + localStorage.username);
                  };
                  //local_login();
              };
               if (fb_inital_load == true) {
                  fb_inital_load = false;
                  if (dev) {
                      alert('first firebase load');
                  };
                  return;
              };
               if (fb_inital_load == false) {
                  if (dev) {
                      alert('not first firebase load');
                  };
                  return;
              };
           };
       };
   };
  */
}, 1000 / 24);
fb_inital_load = true;
wp_writable = false;

wp_json = function wp_json(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
};

wp_refresh = function wp_refresh() {
  wp_json('https://antenuh.com/feed/json', function (err, data) {
    console.log('wp_json');

    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      console.log('wp count: ' + data.items);
      state.data.wordpress = data.items;

      for (var i = 0; i < state.data.wordpress.length; i++) {
        var wp_post = state.data.wordpress[i];
        console.log(wp_post);
      }

      ;
      wp_writable = true;
    }

    ;
  });
};

ui = function ui() {
  if (load_buffer != null) {
    load_buffer.style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  if (buffer != null) {
    buffer.style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  if (root != null) {
    root.style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  if (footer != null) {
    footer.style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;
};

if (dev) {
  console.log('index.js');
}

;

_sequence_Load = function sequence_Load() {
  state.data.route += 1;
  console.log(state.data.route);

  if (state.data.route == 1) {
    // fill with firebase data
    fb_refresh();
    wp_refresh();
    fb_validation;
    ui();
    console.log('1) preload fb');
    console.log('2) fb validated');
    console.log('3) preload login check');
    console.log('4) set modals to validated user data');
    console.log('8) add events');
    console.log('9) load bar leaves');
    load_bar_container_border.classList = "easing_01 position_relative margin_auto width_1205 height_1vw float_left easing_1";
    /* see "fb_validation"
    setTimeout(() => {
        sequence_Load();
    }, 1000);
    */
  }

  ;

  if (state.data.route == 2) {
    load_bar_container_border.classList = "easing_01 position_relative margin_auto width_25 height_1vw float_left easing_1";
    setTimeout(function () {
      _sequence_Load();
    }, 1);
  }

  ;

  if (state.data.route == 3) {
    load_bar_container_border.classList = "easing_01 position_relative margin_auto width_3705 height_1vw float_left easing_1";
    setTimeout(function () {
      _sequence_Load();
    }, 1);
  }

  ;

  if (state.data.route == 4) {
    load_bar_container_border.classList = "easing_01 position_relative margin_auto width_50 height_1vw float_left easing_1";
    setTimeout(function () {
      _sequence_Load();
    }, 1);
  }

  ;

  if (state.data.route == 5) {
    load_bar_container_border.classList = "easing_01 position_relative margin_auto width_6205 height_1vw float_left easing_1";
    setTimeout(function () {
      _sequence_Load();
    }, 1);
  }

  ;

  if (state.data.route == 6) {
    load_bar_container_border.classList = "easing_01 position_relative margin_auto width_75 height_1vw float_left easing_1";
    setTimeout(function () {
      _sequence_Load();
    }, 1);
  }

  ;

  if (state.data.route == 7) {
    load_bar_container_border.classList = "easing_01 position_relative margin_auto width_8705 height_1vw float_left easing_1";
    setTimeout(function () {
      _sequence_Load();
    }, 1);
  }

  ;

  if (state.data.route == 8) {
    load_bar_container_border.classList = "position_relative margin_auto width_100 height_1vw float_left easing_1"; // add events

    handle_add_element_events();
    handle_add_platform_events();
    setTimeout(function () {
      _sequence_Load();
    }, 1);
  }

  ;

  if (state.data.route == 9) {
    load_bar_container.classList = "animated1 leaveBottom position_fixed bottom_0 margin_auto width_100 height_1vw float_left z_index_1";
    setTimeout(function () {
      _sequence_Load();
    }, 1000);
  }

  ;

  if (state.data.route == 10) {
    //buffer.classList = `display_none position_relative float_left width_100vw height_100 bg_white`
    load_buffer.classList = "display_none position_relative float_left width_100vw height_100 bg_white";
    setTimeout(function () {
      _sequence_Load();
    }, 1000);
  }

  ;

  if (state.data.route == 11) {
    //footer_top.classList = `position_absolute bg_grey float_left height_1vw width_100 top_0 left_0 right_0 margin_auto z_index_2`
    //footer_bottom.classList = `position_absolute bg_grey float_left height_1vw width_100 bottom_0 left_0 right_0 margin_auto z_index_2`
    //footer_left.classList = `position_absolute bg_grey float_left width_1vw height_100 top_0 left_0 margin_auto z_index_2`
    //footer_right.classList = `position_absolute bg_grey float_left width_1vw height_100 bottom_0 right_0 margin_auto z_index_2`
    //load_bar_container_size.classList = `position_relative margin_auto width_100 height_1vh float_left easing_1`
    setTimeout(function () {
      _sequence_Load();
    }, 1);
  }

  ;
};

handle_ReturnedState_fromEvents = function handle_ReturnedState_fromEvents() {
  state = _events.default.handle_ReturnState_fromEvents(); //handle_update();
};

handle_add_element_events = function handle_add_element_events() {
  if (root != null) {
    if (document.getElementById('element_input_filter') != null) {
      document.getElementById('element_input_filter').addEventListener('keydown', function (event) {
        // filter library
        setTimeout(function () {
          fb_render();
        }, 0);
      });
    }

    ;

    if (document.getElementById('element_input_refresh') != null) {
      document.getElementById('element_input_refresh').addEventListener('click', function (event) {
        // refresh library
        setTimeout(function () {
          fb_refresh();
          wp_refresh();
        }, 0);
      });
    }

    ;
  }

  ;
};

handle_add_platform_events = function handle_add_platform_events() {
  if (root != null) {
    // scroll
    document.getElementById('scrollable_x').addEventListener('scroll', function (event) {
      _events.default.handle_Function_Scroll(event);

      handle_ReturnedState_fromEvents();
    });
    document.getElementById('scrollable_y').addEventListener('scroll', function (event) {
      _events.default.handle_Function_Scroll(event);

      handle_ReturnedState_fromEvents();
    }); // events

    body.addEventListener('keydown', function (event) {
      _events.default.handle_Function_Key_Down(event);

      handle_ReturnedState_fromEvents(); //sound_1.play();
    });
    body.addEventListener('keyup', function (event) {
      _events.default.handle_Function_Key_Up(event);

      handle_ReturnedState_fromEvents();
    });
    root.addEventListener('mousemove', function (event) {
      _events.default.handle_Function_Mouse_Move(event);

      handle_ReturnedState_fromEvents();
    });
    root.addEventListener('mouseenter', function (event) {
      _events.default.handle_Function_Mouse_Enter(event);

      handle_ReturnedState_fromEvents();
    });
    root.addEventListener('mouseleave', function (event) {
      _events.default.handle_Function_Mouse_Leave(event);

      handle_ReturnedState_fromEvents();
    });
    root.addEventListener('mouseup', function (event) {
      _events.default.handle_Function_Mouse_Up(event);

      handle_ReturnedState_fromEvents();
    });
    root.addEventListener('mousedown', function (event) {//events.handle_Function_Mouse_Down(event);
      //handle_ReturnedState_fromEvents();
    });
    root.addEventListener('click', function (event) {
      _events.default.handle_Function_Mouse_Down(event);

      handle_ReturnedState_fromEvents();
    });
    root.addEventListener('touchmove', function (event) {
      _events.default.handle_Function_Touch_Move(event);

      handle_ReturnedState_fromEvents();
    });
    root.addEventListener('touchstart', function (event) {
      _events.default.handle_Function_Touch_Start(event);

      handle_ReturnedState_fromEvents();
    });
    root.addEventListener('touchend', function (event) {
      _events.default.handle_Function_Touch_End(event);

      handle_ReturnedState_fromEvents();
    });
  }

  ;
};

window.onload = function () {
  _sequence_Load();

  var element = "\n        "; //root.appendChild(gen_Div('root_id', 'root_class', element));
};

window.onresize = function () {
  var _state$ux;

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
  console.log('resize');
  ui();
};

window.ondevicemotion = function (event) {};

window.ondeviceorientation = function (event) {};

window.onorientationchange = function () {};

window.onbeforeunload = function () {};

var _default = {
  handle_ReturnState: handle_ReturnState
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/state":"imports/state.js","./imports/functions":"imports/functions.js","./imports/events":"imports/events.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49963" + '/');

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
//# sourceMappingURL=/an_app.e31bb0bc.map