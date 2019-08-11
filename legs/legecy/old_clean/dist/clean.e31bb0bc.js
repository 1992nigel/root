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
},{"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.58909d32.svg","assets/gui/gui_link_grid_white.svg"],"assets/gui/gui_link_grid_white.svg"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.8b15c689.svg","assets/gui/gui_link_menu_white.svg"],"assets/gui/gui_link_menu_white.svg"],"./assets/gui/gui_link_sign_up_white.svg":[["gui_link_sign_up_white.86d9072f.svg","assets/gui/gui_link_sign_up_white.svg"],"assets/gui/gui_link_sign_up_white.svg"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.fc375cc1.svg","assets/gui/gui_link_sign_in_white.svg"],"assets/gui/gui_link_sign_in_white.svg"],"./assets/gui/gui_link_post_white.svg":[["gui_link_post_white.ef6a2eb5.svg","assets/gui/gui_link_post_white.svg"],"assets/gui/gui_link_post_white.svg"],"./assets/gui/gui_link_message_white.svg":[["gui_link_message_white.8222fa8d.svg","assets/gui/gui_link_message_white.svg"],"assets/gui/gui_link_message_white.svg"],"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.2afa39a6.svg","assets/gui/gui_link_home_white.svg"],"assets/gui/gui_link_home_white.svg"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.23391bca.svg","assets/gui/gui_link_gear_white.svg"],"assets/gui/gui_link_gear_white.svg"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.2fd07b39.svg","assets/gui/gui_link_house_white.svg"],"assets/gui/gui_link_house_white.svg"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.27850d9e.svg","assets/gui/gui_link_close_white.svg"],"assets/gui/gui_link_close_white.svg"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.de148a15.svg","assets/gui/gui_link_min_white.svg"],"assets/gui/gui_link_min_white.svg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.f033010f.svg","assets/gui/gui_link_max_white.svg"],"assets/gui/gui_link_max_white.svg"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.179c3b09.svg","assets/gui/gui_link_dots_white.svg"],"assets/gui/gui_link_dots_white.svg"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.a1d8f80c.svg","assets/gui/gui_interaction_button_1.svg"],"assets/gui/gui_interaction_button_1.svg"],"./assets/gui/gui_interaction_button_start.svg":[["gui_interaction_button_start.5cb2f15d.svg","assets/gui/gui_interaction_button_start.svg"],"assets/gui/gui_interaction_button_start.svg"],"./assets/gui/gui_interaction_button_learn.svg":[["gui_interaction_button_learn.0a53d1d8.svg","assets/gui/gui_interaction_button_learn.svg"],"assets/gui/gui_interaction_button_learn.svg"],"./assets/gui/gui_interaction_text_or.svg":[["gui_interaction_text_or.2d029656.svg","assets/gui/gui_interaction_text_or.svg"],"assets/gui/gui_interaction_text_or.svg"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.63c56e34.svg","assets/gui/gui_interaction_text_press.svg"],"assets/gui/gui_interaction_text_press.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.e0631923.svg","assets/gui/gui_stage_desk.svg"],"assets/gui/gui_stage_desk.svg"],"./assets/gui/gui_character_message_box.svg":[["gui_character_message_box.47192970.svg","assets/gui/gui_character_message_box.svg"],"assets/gui/gui_character_message_box.svg"],"./assets/gui/gui_character.svg":[["gui_character.5f9cd7ac.svg","assets/gui/gui_character.svg"],"assets/gui/gui_character.svg"],"./assets/gui/gui_character_right_1.svg":[["gui_character_right_1.c745c328.svg","assets/gui/gui_character_right_1.svg"],"assets/gui/gui_character_right_1.svg"],"./assets/gui/gui_character_right_2.svg":[["gui_character_right_2.5cfcf5ac.svg","assets/gui/gui_character_right_2.svg"],"assets/gui/gui_character_right_2.svg"],"./assets/gui/gui_character_right_3.svg":[["gui_character_right_3.8dc2166e.svg","assets/gui/gui_character_right_3.svg"],"assets/gui/gui_character_right_3.svg"],"./assets/gui/gui_character_right_4.svg":[["gui_character_right_4.d7c48548.svg","assets/gui/gui_character_right_4.svg"],"assets/gui/gui_character_right_4.svg"],"./assets/gui/gui_character_left_1.svg":[["gui_character_left_1.c87b49f6.svg","assets/gui/gui_character_left_1.svg"],"assets/gui/gui_character_left_1.svg"],"./assets/gui/gui_character_left_2.svg":[["gui_character_left_2.61be681d.svg","assets/gui/gui_character_left_2.svg"],"assets/gui/gui_character_left_2.svg"],"./assets/gui/gui_character_left_3.svg":[["gui_character_left_3.056adc88.svg","assets/gui/gui_character_left_3.svg"],"assets/gui/gui_character_left_3.svg"],"./assets/gui/gui_character_left_4.svg":[["gui_character_left_4.aae0b84b.svg","assets/gui/gui_character_left_4.svg"],"assets/gui/gui_character_left_4.svg"],"./assets/gui/gui_character_face.svg":[["gui_character_face.38e227be.svg","assets/gui/gui_character_face.svg"],"assets/gui/gui_character_face.svg"],"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/socials/twitter_handdrawn.svg":[["twitter_handdrawn.4dd6e273.svg","assets/socials/twitter_handdrawn.svg"],"assets/socials/twitter_handdrawn.svg"],"./assets/socials/twitch_handdrawn.svg":[["twitch_handdrawn.a0ceaf56.svg","assets/socials/twitch_handdrawn.svg"],"assets/socials/twitch_handdrawn.svg"],"./assets/socials/youtube_handdrawn.svg":[["youtube_handdrawn.24d23384.svg","assets/socials/youtube_handdrawn.svg"],"assets/socials/youtube_handdrawn.svg"],"./assets/socials/instagram_handdrawn.svg":[["instagram_handdrawn.f326c03a.svg","assets/socials/instagram_handdrawn.svg"],"assets/socials/instagram_handdrawn.svg"],"./assets/socials/facebook_handdrawn.svg":[["facebook_handdrawn.2a2e1213.svg","assets/socials/facebook_handdrawn.svg"],"assets/socials/facebook_handdrawn.svg"],"./assets/gradient/grey_top.svg":[["grey_top.d8e034e1.svg","assets/gradient/grey_top.svg"],"assets/gradient/grey_top.svg"],"./assets/gradient/white_top.svg":[["white_top.ce87e304.svg","assets/gradient/white_top.svg"],"assets/gradient/white_top.svg"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var default_state = {
  app: {
    route: '',
    url: '',
    local: {},
    dev_mode: true,
    time: '',
    onload_time: '',
    feature_posts_limit: 0,
    posts_start: 1,
    posts_limit: 3,
    refs: false,
    sort: 'likes',
    view: 'grid',
    author: 'nigel',
    tag: 'science',
    tags: ['yo'],
    content: false,
    user: {},
    score: {
      current: {
        met: 0,
        area: 0
      },
      leaderboard: []
    }
  },
  data: {
    firebase: {},
    local: true
  },
  motion: {
    duration: 0,
    frame: 1,
    framerate: 24,
    rate: 1000,
    scene: 0,
    instances: {
      grid_64: 0,
      loading: false,
      sequence: 0,
      fold: 0,
      start: false,
      // This is now the "Start" stage
      learn: false,
      // This is now the "Learn" stage,
      scrolling: false,
      scrolled_top: false,
      scrolled_bottom: false,
      blog_scrolled_top: false,
      blog_scrolled_bottom: false,
      // This is now the "Scrolling" stage,
      hide: false // This is now the route or page state,

    }
  },
  events: {
    mouse: {
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
  ux: {
    platform: {
      is_Desktop: false,
      is_Mobile: false
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
  },
  ui: {
    colors: {
      draft: {
        transform: false,
        opacity: false,
        display: false
      },
      two_tone: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    stage: {
      cardboard_color: {
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      },
      cardboard_bg: {
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      },
      cardboard_mg: {
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      },
      cardboard_fg: {
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      },
      cardboard: {
        scene: 1,
        set: 0,
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      }
    },
    interaction: {
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
      player_1: {
        transform: false,
        opacity: false,
        display: false,
        clientX: 6,
        clientY: 4,
        height: 4,
        width: 1,
        stance: 5,
        angle: 'left',
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
      player_2: {
        transform: false,
        opacity: false,
        display: false,
        clientX: 6,
        clientY: 4,
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
      enemy: {
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
  }
};

var from_Import = function from_Import() {
  console.log('from state');
};

var _default = {
  from_Import: from_Import,
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
  var state = _index.default.Handle_return_state();

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

var Generate_new_li_post = function Generate_new_li_post(data_Object) {
  var state = _index.default.Handle_return_state();

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
      document.getElementById('modal_gradient_bottom_container').innerHTML = '';
      document.getElementById('modal_gradient_bottom_container').innerHTML = "\n                  ".concat(data_Object.id, "\n                ");
      state.app.url = data_Object.id;
      state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
      history.pushState({}, null, "/p/" + state.app.url); //from_index.firebase_like_Listings(data_Object.id);
    });
  }

  ;

  if (data_Object.child == 'roster') {
    element.addEventListener("click", function (event) {
      alert('roster');
      document.getElementById('modal_gradient_bottom_container').innerHTML = '';
      document.getElementById('modal_gradient_bottom_container').innerHTML = "\n                  ".concat(data_Object.id, "\n                ");
      state.app.url = data_Object.username;
      state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
      history.pushState({}, null, state.app.url); //from_index.firebase_like_Listings(data_Object.id);
    });
  }

  ;
  /*
  element.children[1].children[3].addEventListener("click", function(event) {
      from_index.deleteWhoListings(data_Object.child, data_Object.id);
  });
  */

  return element;
}; // Handles


var Toggle_functions_IF_State = function Toggle_functions_IF_State(function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) {
  var state = _index.default.Handle_return_state(); // Function Check # 1


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
  var state = _index.default.Handle_return_state();

  var MANIPULATED = document.getElementById(id_Tag);

  if (MANIPULATED != null) {
    if (Ui_State == true) {
      if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {
        // remove item after buffer
        setTimeout(function () {
          MANIPULATED.classList.remove(addThisClass_if_state_false);
          MANIPULATED.classList.add(addThisClass_if_state_true);
        }, 0);
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
        }, 0);
        return;
      }

      ;
    }

    ;
  }

  ;
};

var Toggle_display_and_opacity_on_with_no_delay = function Toggle_display_and_opacity_on_with_no_delay(id) {
  var state = _index.default.Handle_return_state();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('display_none');
        MANIPULATED.classList.add('display');
      }, 0); // remove item after buffer

      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_0');
        MANIPULATED.classList.add('opacity_1');
      }, 1);
      return;
    }

    ;
  }

  ;
};

var Toggle_display_and_opacity_off_with_delay = function Toggle_display_and_opacity_off_with_delay(id) {
  var state = _index.default.Handle_return_state();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 0); // remove item after buffer

      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 101);
      return;
    }

    ;
  }

  ;
}; // 1000 ms delay for bg items


var Toggle_stages_display_and_opacity_on_with_no_delay = function Toggle_stages_display_and_opacity_on_with_no_delay(id) {
  var state = _index.default.Handle_return_state();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('display_none');
        MANIPULATED.classList.add('display');
      }, 0); // remove item after buffer

      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_0');
        MANIPULATED.classList.add('opacity_1');
      }, 1);
      return;
    }

    ;
  }

  ;
};

var Toggle_stages_display_and_opacity_off_with_delay = function Toggle_stages_display_and_opacity_off_with_delay(id) {
  var state = _index.default.Handle_return_state();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 1000); // remove item after buffer

      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 1001);
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
  Toggle_stages_display_and_opacity_off_with_delay: Toggle_stages_display_and_opacity_off_with_delay
};
exports.default = _default;
},{"../index.js":"index.js"}],"imports/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _functions = _interopRequireDefault(require("./functions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element_lead = function element_lead(x) {
  var data = "\n  <div id=\"element_lead\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n      " + x + "\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_full = function element_full(x) {
  var data = "\n  <div id=\"element_full\" class=\"position_relative width_100vw height_100vh float_left margin_auto\">\n      " + x + "\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_flex = function element_flex(x) {
  var data = "\n  <div id=\"element_flex\" class=\"position_relative width_100vw float_left margin_auto\">\n      " + x + "\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_fold = function element_fold(x) {
  var data = "\n  <div id=\"element_fold\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_grey color_white\">\n      " + x + "\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_modal_gradient_right = function element_modal_gradient_right() {
  var data = "\n  <div id=\"element_modal_gradient_right\" class=\"transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto\">\n\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_overflow_y = function element_overflow_y() {
  var data = "\n\n    <div id=\"element_overflow_y\" class=\"position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1\">\n        <div class=\"position_relative width_100 float_left\">\n\n          <div id=\"bg-character\" class=\"gui_character position_relative width_100 height_25vw margin_auto\"></div>\n          <div id=\"bg-character\" class=\"gui_character position_relative width_100 height_25vw margin_auto\"></div>\n          <div id=\"bg-character\" class=\"gui_character position_relative width_100 height_25vw margin_auto\"></div>\n\n        </div>\n    </div>\n\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_overflow_x = function element_overflow_x() {
  var data = "\n    <div id=\"element_overflow_x\"  class=\"position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow\">\n      <div class=\"position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n        <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n        \n        <div id=\"bg-character\" class=\"gui_character position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n        <div id=\"bg-character\" class=\"gui_character position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n        <div id=\"bg-character\" class=\"gui_character position_relative width_50vw height_25vw margin_auto\"></div>\n\n        </div>\n      </div>\n    </div>\n\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var lead_calc = function lead_calc() {
  var data = "\n\n    \n                    <div id=\"lead_container\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto\">\n\n                        <div id=\"fold_top_left\" class=\"position_absolute top_0 left_0 height_33 width_33 margin_auto\">\n                            <div class=\"position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\">\n                                <div class=\"gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"fold_top\" class=\"position_absolute top_0 left_0 right_0 height_33 width_33 margin_auto\">\n                            <div class=\"position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\">\n                                <div class=\"gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"fold_top_right\" class=\"position_absolute top_0 right_0 height_33 width_33 margin_auto\">\n                            <div class=\"position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\">\n                                <div class=\"gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"fold_center_left\" class=\"position_absolute top_0 bottom_0 left_0 height_33 width_33 margin_auto\">\n                            <div class=\"position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\">\n                                <div class=\"gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                            </div>\n                        </div>\n                        \n                        <div id=\"fold_center\" class=\"position_absolute top_0 bottom_0 left_0 right_0 height_33 width_33 margin_auto\">\n                            <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                            <div id=\"logo_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n\n                        </div>\n\n                        <div id=\"fold_center_right\" class=\"position_absolute top_0 bottom_0 right_0 height_33 width_33 margin_auto\">\n                            <div class=\"position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\">\n                                <div class=\"gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"fold_bottom_left\" class=\"position_absolute bottom_0 left_0 height_33 width_33 margin_auto\">\n                            <div class=\"position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\">\n                                <div class=\"gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"fold_bottom\" class=\"position_absolute bottom_0 left_0 right_0 height_33 width_33 margin_auto\">\n                                                        \n                              <div id=\"filler\" class=\"position_relative height_33 width_100 margin_auto float_left\">\n                              </div>\n\n                              <div class=\"position_relative height_33 width_100 margin_auto float_left\">\n\n                                <div class=\"position_absolute right_100 top_0 bottom_0 height_100 width_33flex margin_auto float_left\">\n                                  <div id=\"vr_interaction_text_press\" class=\"gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\"></div>                                  \n                                </div>\n\n                                <div class=\"position_relative height_100 width_33flex margin_auto float_left\">\n                                    \n                                    <div class=\"position_absolute bottom_100 left_0 right_0 height_50 width_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                      <div class=\"position_relative height_50 width_100 margin_auto float_left\">\n                                          <div id=\"vr_interaction_text_press\" class=\"gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\"></div>\n                                      </div>\n                                    </div>\n\n                                    <div id=\"vr_interaction_button_start\" class=\"gui_interaction_button_start position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n\n                                    <div class=\"position_absolute top_100 left_0 right_0 height_50 width_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                      <div class=\"position_relative height_50 width_100 margin_auto float_left\">\n                                          <div id=\"vr_interaction_text_press\" class=\"gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\"></div>\n                                      </div>\n                                    </div>\n\n                                </div>\n                                <div class=\"position_relative height_100 width_33flex margin_auto float_left\">\n                                    <div class=\"gui_interaction_text_or position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                                </div>\n                                <div class=\"position_relative height_100 width_33flex margin_auto float_left\">\n                                    \n                                    <div class=\"position_absolute bottom_100 left_0 right_0 height_50 width_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                      <div class=\"position_relative height_50 width_100 margin_auto float_left\">\n                                          <div id=\"vr_interaction_text_press\" class=\"gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\"></div>\n                                      </div>\n                                    </div>\n\n                                    <div id=\"vr_interaction_button_learn\" class=\"gui_interaction_button_learn position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                                \n                                    <div class=\"position_absolute top_100 left_0 right_0 height_50 width_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                      <div class=\"position_relative height_50 width_100 margin_auto float_left\">\n                                          <div id=\"vr_interaction_text_press\" class=\"gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\"></div>\n                                      </div>\n                                    </div>\n\n                                </div>\n\n                              </div>\n                        </div>\n\n                        <div id=\"fold_bottom_right\" class=\"position_absolute bottom_0 right_0 height_33 width_33 margin_auto\">\n                            <div class=\"position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto\">\n                                <div class=\"gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                    </div>\n\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_nav_border = function element_nav_border() {
  var data = "\n    \n      <div id=\"modal_nav_top\" class=\"z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top0 display_none opacity_0 bg_grey\">\n         <div id=\"modal_nav_top_container\" class=\"\">\n         </div>\n         <div id=\"hover_item_top\" class=\"position_relative float_left height_100 width_6025 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div id=\"bg-character\" class=\"gui_link_menu_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 1\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_1\" class=\"position_relative float_left height_100 width_1205 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div id=\"logo_type\" class=\"\">\n                  </div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 2\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_2\" class=\"position_relative float_left height_100 width_6025 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div id=\"bg-character\" class=\"gui_link_house_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 3\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_3\" class=\"position_relative float_left height_100 width_6025 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div id=\"bg-character\" class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 4\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_4\" class=\"position_relative float_left height_100 width_1205 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 5\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_5\" class=\"position_relative float_left height_100 width_1205 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 6\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_6\" class=\"position_relative float_left height_100 width_1205 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div class=\"gui_link_post_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 7\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_7\" class=\"position_relative float_left height_100 width_1205 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div class=\"gui_link_sign_up_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 8\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_8\" class=\"position_relative float_left height_100 width_1205 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 9\n               </div>\n            </div>\n         </div>\n         <div id=\"modal_nav_top_link_9\" class=\"position_relative float_left height_100 width_6025 \">\n            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey\">\n                  <div class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n               </div>\n            </div>\n            <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n               <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                inside nav 10\n               </div>\n            </div>\n         </div>\n      </div>\n\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var _default = {
  element_lead: element_lead,
  element_full: element_full,
  element_flex: element_flex,
  element_fold: element_fold,
  element_modal_gradient_right: element_modal_gradient_right,
  element_overflow_x: element_overflow_x,
  element_overflow_y: element_overflow_y,
  lead_calc: lead_calc
};
exports.default = _default;
},{"./functions":"imports/functions.js"}],"imports/components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_components_handled = function get_components_handled() {
  var state = _index.default.Handle_return_state();

  var components = [// anchors
  {
    component: 'gui_top',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'gui_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top_left.transform // component_state_opacity:  state.ui.gui.top_left.opacity

  }, {
    component: 'gui_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top_right.transform // component_state_opacity:  state.ui.gui.top_right.opacity

  }, {
    component: 'gui_bottom',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'gui_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom_left.transform // component_state_opacity:  state.ui.gui.bottom_left.opacity

  }, {
    component: 'gui_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom_right.transform // component_state_opacity:  state.ui.gui.bottom_right.opacity

  }, {
    component: 'gui_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'gui_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, // gradient
  {
    component: 'component_app_modal_element_gradient_top',
    component_state_transform: state.ui.modal.gradient.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.top.transform // component_state_opacity:  state.ui.modal.gradient.top.opacity

  }, {
    component: 'component_app_modal_element_gradient_bottom',
    component_state_transform: state.ui.modal.gradient.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.bottom.transform // component_state_opacity:  state.ui.modal.gradient.bottom.opacity

  }, {
    component: 'component_app_modal_element_gradient_left',
    component_state_transform: state.ui.modal.gradient.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.left.transform // component_state_opacity:  state.ui.modal.gradient.top.opacity

  }, {
    component: 'component_app_modal_element_gradient_right',
    component_state_transform: state.ui.modal.gradient.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.right.transform // component_state_opacity:  state.ui.modal.gradient.top.opacity

  }, // morph
  {
    component: 'component_app_modal_element_morph_top',
    component_state_transform: state.ui.modal.morph.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.top.transform // component_state_opacity:  state.ui.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_bottom',
    component_state_transform: state.ui.modal.morph.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.bottom.transform // component_state_opacity:  state.ui.modal.morph.bottom.opacity

  }, {
    component: 'component_app_modal_element_morph_left',
    component_state_transform: state.ui.modal.morph.left.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.left.transform // component_state_opacity:  state.ui.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_right',
    component_state_transform: state.ui.modal.morph.right.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.right.transform // component_state_opacity:  state.ui.modal.morph.top.opacity

  }, // navs
  {
    component: 'modal_nav_top',
    component_state_transform: state.ui.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.top.transform // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, {
    component: 'modal_nav_bottom',
    component_state_transform: state.ui.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.bottom.transform // component_state_opacity:  state.ui.modal.nav.bottom.opacity

  }, {
    component: 'modal_nav_left',
    component_state_transform: state.ui.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.left.transform // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, {
    component: 'modal_nav_right',
    component_state_transform: state.ui.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.right.transform // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, // menu
  {
    component: 'component_app_modal_element_menu_top',
    component_state_transform: state.ui.modal.menu.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.top.transform // component_state_opacity:  state.ui.modal.menu.top.opacity

  }, {
    component: 'component_app_modal_element_menu_bottom',
    component_state_transform: state.ui.modal.menu.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.bottom.transform // component_state_opacity:  state.ui.modal.menu.bottom.opacity

  }, {
    component: 'component_app_modal_element_menu_left',
    component_state_transform: state.ui.modal.menu.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.left.transform // component_state_opacity:  state.ui.modal.menu.left.opacity

  }, {
    component: 'component_app_modal_element_menu_right',
    component_state_transform: state.ui.modal.menu.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.right.transform // component_state_opacity:  state.ui.modal.menu.right.opacity

  }, // page
  {
    component: 'component_app_modal_element_page_top',
    component_state_transform: state.ui.modal.page.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.top.transform // component_state_opacity:  state.ui.modal.page.top.opacity

  }, {
    component: 'component_app_modal_element_page_bottom',
    component_state_transform: state.ui.modal.page.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.bottom.transform // component_state_opacity:  state.ui.modal.page.bottom.opacity

  }, {
    component: 'component_app_modal_element_page_left',
    component_state_transform: state.ui.modal.page.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.left.transform // component_state_opacity:  state.ui.modal.page.left.opacity

  }, {
    component: 'component_app_modal_element_page_right',
    component_state_transform: state.ui.modal.page.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.right.transform // component_state_opacity:  state.ui.modal.page.right.opacity

  }, {
    component: 'component_app_modal_element_pop_top',
    component_state_transform: state.ui.modal.pop.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.top.transform // component_state_opacity:  state.ui.modal.pop.top.opacity

  }, {
    component: 'component_app_modal_element_pop_bottom',
    component_state_transform: state.ui.modal.pop.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.bottom.transform // component_state_opacity:  state.ui.modal.pop.bottom.opacity

  }, {
    component: 'component_app_modal_element_pop_left',
    component_state_transform: state.ui.modal.pop.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.left.transform // component_state_opacity:  state.ui.modal.pop.left.opacity

  }, {
    component: 'component_app_modal_element_pop_right',
    component_state_transform: state.ui.modal.pop.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.right.transform // component_state_opacity:  state.ui.modal.pop.right.opacity

  }];
  return components;
};

var _default = {
  get_components_handled: get_components_handled
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
  state = _index.default.Handle_return_state();

  if (event) {
    state.events.scroll.history.push({
      event: event
    });
    console.log('state.events.scroll.history');
    console.log(state.events.scroll.history);
  }

  ;
};

var handle_Function_Mouse_Move = function handle_Function_Mouse_Move(event) {
  state = _index.default.Handle_return_state();
  state.events.mouse.status.enter = true;
  state.events.mouse.status.leave = false;

  if (event) {
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
  state = _index.default.Handle_return_state();
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
  state = _index.default.Handle_return_state();
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
  state = _index.default.Handle_return_state();
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
  state = _index.default.Handle_return_state();
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
  state = _index.default.Handle_return_state();

  if (event) {
    state.events.key.history.push([{
      keyCode: event.keyCode
    }]);
    console.log('state.events.key.history');
    console.log(state.events.key.history);

    if (event.keyCode == 27) {
      _index.default.Handle_model_reset();
    }

    ;

    if (event.keyCode == 81) {
      _index.default.Handle_ui_reset();
    }

    ;

    if (event.keyCode == 37) {
      //alert('shift');
      state.ui.interaction.player_1.angle = 'left';
      state.ui.interaction.player_1.clientX -= 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 38) {
      //alert('shift');
      state.ui.interaction.player_1.clientY -= 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 39) {
      //alert('shift');
      state.ui.interaction.player_1.angle = 'right';
      state.ui.interaction.player_1.clientX += 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 40) {
      //alert('shift');
      state.ui.interaction.player_1.clientY += 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 51) {//state.ui.modal.pop.top.transform = true;
      //state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
    }

    ;

    if (event.keyCode == 87) {
      //alert('shift');
      state.ui.interaction.vr.clientY += 1;
    }

    ;

    if (event.keyCode == 83) {
      //alert('shift');
      state.ui.interaction.vr.clientY -= 1;
    }

    ;

    if (event.keyCode == 68) {
      //alert('shift');
      state.ui.interaction.vr.clientX += 1;
    }

    ;

    if (event.keyCode == 65) {
      //alert('shift');
      state.ui.interaction.vr.clientX -= 1;
    }

    ;
  }

  ;
};

var handle_Function_Key_Up = function handle_Function_Key_Up(event) {
  state = _index.default.Handle_return_state();

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
  state = _index.default.Handle_return_state();

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
  state = _index.default.Handle_return_state();

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
  state = _index.default.Handle_return_state();

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
  state = _index.default.Handle_return_state();
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
  state = _index.default.Handle_return_state();
  state.events.motion.event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
  state.events.motion.event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
  state.events.motion.event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;
};

var Handle_return_state_from_events = function Handle_return_state_from_events() {
  return state;
};

var _default = {
  state: state,
  Handle_return_state_from_events: Handle_return_state_from_events,
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

var _elements = _interopRequireDefault(require("./imports/elements"));

var _functions = _interopRequireDefault(require("./imports/functions"));

var _components = _interopRequireDefault(require("./imports/components"));

var _events = _interopRequireDefault(require("./imports/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//priorities
// - user log
// - local onboarding
// - crud
// - url check
// - record all actions
// - stream (all, route & between users)
// Imports
var state = _state.default.default_state;
state.ux.platform.is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
state.ux.platform.is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var root = document.getElementById('root');
var scrollable = document.getElementById('scrollable');
var status = document.getElementById('status');
var components;
var cardboard = document.getElementById('cardboard'); // Initialization

var config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
}; // Functions

firebase.initializeApp(config);
var firebase_data_has_been_updated_and_is_now_writeable;
var firebase_has_responsed_with_this_updated_data;
var first_firebase_check;
var newest_created_id;
var first_time_user;
var Handle_return_state;
var Handle_display_with_delay;
var handle_time;
var handle_ui;
var empty_ols;
var handle_refresh_fire_data;
var firebase_add_listings;
var firebase_library;
var find_sort;
var sorted_firebase_library;
var handle_firebase_render_to_view;
var handle_repeated_fire_data_validation;
var handle_onboarding;

var _handle_URL;

var validated_user;
var validated_user_is_logged;
var check_localStorage;
var firebase_login;
var firebase_logout;
var Handle_get_state_from_events;
var handle_events;
var Handle_render_data_value;
var Handle_ui_reset;
var Handle_model_reset;
newest_created_id = 0;
first_time_user = false;
first_firebase_check = true;
firebase_library = [];
validated_user = {};
validated_user_is_logged = false;

Handle_return_state = function Handle_return_state() {
  return state;
};

Handle_display_with_delay = function Handle_display_with_delay() {
  components = _components.default.get_components_handled();

  for (var i = 0; i < components.length; i++) {
    // console.log(components[i].component);
    // console.log(components[i].component_state);
    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions.default.Toggle_functions_IF_State(_functions.default.Toggle_display_and_opacity_on_with_no_delay, _functions.default.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
    }

    ;
  }

  ;
};

handle_time = function handle_time() {
  // 1/sec loop
  (function () {
    var interval = 0;
    setInterval(function () {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var date = new Date();
      state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
      state.data.onload_time = state.data.time;
      state.motion.duration++;
      console.log('duration: ' + state.motion.duration);
    }, 1000);
  })();
};

handle_ui = function handle_ui() {
  // 24/fps loop
  (function () {
    var interval = 0;
    setInterval(function () {
      if (document.getElementById('container_playable_character') != null) {
        var container_playable_character = document.getElementById('container_playable_character');
        container_playable_character.style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.interaction.player_1.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.clientX * state.ux.dimensions.width8 + 'px;';
      }

      ; //stage
      // vr

      if (document.getElementById('vr_mg') != null) {
        document.getElementById('vr_mg').style = "transform: translate3d(" + state.ui.interaction.vr.clientX * 100 + "%, " + state.ui.interaction.vr.clientY * 100 + "%, 0);";
      }

      ; //Handle_display_with_delay();

      state.motion.frame += 1; //console.log(state.motion.frame)
    }, 1000 / state.motion.framerate);
  })();
};

empty_ols = function empty_ols() {
  firebase_library = [];

  if (document.getElementById('firebase_library_ol') != null) {
    document.getElementById('firebase_library_ol').innerHTML = '';
  }

  ;

  if (document.getElementById('filtered_library_by_title_ol') != null) {
    document.getElementById('filtered_library_by_title_ol').innerHTML = '';
  }

  ;

  if (document.getElementById('sorted_library_by_time_up_ol') != null) {
    document.getElementById('sorted_library_by_time_up_ol').innerHTML = '';
  }

  ;

  if (document.getElementById('sorted_library_by_time_down_ol') != null) {
    document.getElementById('sorted_library_by_time_down_ol').innerHTML = '';
  }

  ;
};

handle_refresh_fire_data = function handle_refresh_fire_data() {
  empty_ols();
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
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
}; // firebase actions


firebase_add_listings = function firebase_add_listings(child) {
  var already_used = false;

  for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
    var user_being_made = state.data.firebase.gnougn.library[i];

    if (user_being_made.child == 'roster') {
      if (user_being_made.username == document.getElementById('create_user_username').value) {
        already_used = true;
      }

      ;
    }

    ;
  }

  ;

  if (validated_user.id != null) {
    var current_second = new Date().getTime() / 1000;
    var default_item; // library default

    if (child == 'library') {
      default_item = {
        child: "library",
        id: 0,
        likes: 0,
        views: 0,
        username: validated_user.username,
        password: validated_user.password,
        title: document.getElementById('create_post_title').value,
        tags: [document.getElementById('create_post_tag').value],
        time: current_second,
        authors: ["" + "".concat(validated_user.username) + ""]
      };
    }

    ; // object

    if (child == 'library') {
      // Firebase References
      // Firebase Database
      var rootRef = firebase.database().ref();
      var gnougnRef = rootRef.child('gnougn');
      var Ref = gnougnRef.child('library'); // update key of added object

      Ref.push(default_item).then(function (snap) {
        var key = snap.key;
        newest_created_id = key;
        console.log('from addListing' + key); // update created item with snap.key

        Ref.child(key).update({
          id: key
        }); // Set firebase data

        setTimeout(function () {
          handle_refresh_fire_data();
        }, 0);
      });
      document.getElementById('create_post_title').value = "";
      document.getElementById('create_post_tag').value = "";
      document.getElementById('create_user_username').value = "";
      document.getElementById('create_user_password').value = "";
    }

    ; // roster default

    if (child == 'roster' && already_used == false) {
      alert('username not use');
      default_item = {
        child: "roster",
        id: 0,
        likes: 0,
        views: 0,
        title: document.getElementById('create_user_username').value,
        tags: ['developer', 'designer', 'illustrator', 'animator', 'strategist', 'content'],
        username: document.getElementById('create_user_username').value,
        password: document.getElementById('create_user_password').value,
        time: current_second,
        authors: ["" + "".concat(validated_user.username) + ""]
      };
    }

    ; // object

    if (child == 'roster' && already_used == true) {
      alert('username already in use');
    }

    ; // validation rejection

    if (child == 'roster' && already_used == false) {
      // Firebase References
      // Firebase Database
      var _rootRef = firebase.database().ref();

      var _gnougnRef = _rootRef.child('gnougn');

      var _Ref = _gnougnRef.child('library'); // update key of added object


      _Ref.push(default_item).then(function (snap) {
        var key = snap.key;
        newest_created_id = key;
        console.log('from addListing' + key); // update created item with snap.key

        _Ref.child(key).update({
          id: key
        }); // Set firebase data


        setTimeout(function () {
          handle_refresh_fire_data();
        }, 0);
      });

      document.getElementById('create_post_title').value = "";
      document.getElementById('create_post_tag').value = "";
      document.getElementById('create_user_username').value = "";
      document.getElementById('create_user_password').value = "";
    }

    ; // messages default

    if (child == 'messages') {
      default_item = {
        child: "messages",
        id: 0,
        likes: 0,
        views: 0,
        title: document.getElementById('create_messages').value,
        username: validated_user.username,
        time: current_second,
        tags: [''],
        authors: ['']
      };
    }

    ; // object

    if (child == 'messages') {
      // Firebase References
      // Firebase Database
      var _rootRef2 = firebase.database().ref();

      var _gnougnRef2 = _rootRef2.child('gnougn');

      var _Ref2 = _gnougnRef2.child('library'); // update key of added object


      _Ref2.push(default_item).then(function (snap) {
        var key = snap.key;
        newest_created_id = key;
        console.log('from addListing' + key); // update created item with snap.key

        _Ref2.child(key).update({
          id: key
        }); // Set firebase data


        setTimeout(function () {
          handle_refresh_fire_data();
        }, 0);
      });

      document.getElementById('create_post_title').value = "";
      document.getElementById('create_post_tag').value = "";
      document.getElementById('create_user_username').value = "";
      document.getElementById('create_user_password').value = "";
    }

    ; // stream default

    if (child == 'stream') {
      default_item = {
        child: "stream",
        id: 0,
        likes: 0,
        views: 0,
        title: document.getElementById('create_stream').value,
        username: validated_user.username,
        time: current_second,
        tags: [''],
        authors: ['']
      };
    }

    ; // object

    if (child == 'stream') {
      // Firebase References
      // Firebase Database
      var _rootRef3 = firebase.database().ref();

      var _gnougnRef3 = _rootRef3.child('gnougn');

      var _Ref3 = _gnougnRef3.child('library'); // update key of added object


      _Ref3.push(default_item).then(function (snap) {
        var key = snap.key;
        newest_created_id = key;
        console.log('from addListing' + key); // update created item with snap.key

        _Ref3.child(key).update({
          id: key
        }); // Set firebase data


        setTimeout(function () {
          handle_refresh_fire_data();
        }, 0);
      });

      document.getElementById('create_post_title').value = "";
      document.getElementById('create_post_tag').value = "";
      document.getElementById('create_user_username').value = "";
      document.getElementById('create_user_password').value = "";
    }

    ; // activity default

    if (child == 'activity') {
      default_item = {
        child: "activity",
        id: 0,
        likes: 0,
        views: 0,
        title: document.getElementById('create_activity').value,
        username: validated_user.username,
        time: current_second,
        tags: [''],
        authors: ['']
      };
    }

    ; // object

    if (child == 'activity') {
      // Firebase References
      // Firebase Database
      var _rootRef4 = firebase.database().ref();

      var _gnougnRef4 = _rootRef4.child('gnougn');

      var _Ref4 = _gnougnRef4.child('library'); // update key of added object


      _Ref4.push(default_item).then(function (snap) {
        var key = snap.key;
        newest_created_id = key;
        console.log('from addListing' + key); // update created item with snap.key

        _Ref4.child(key).update({
          id: key
        }); // Set firebase data


        setTimeout(function () {
          handle_refresh_fire_data();
        }, 0);
      });

      document.getElementById('create_post_title').value = "";
      document.getElementById('create_post_tag').value = "";
      document.getElementById('create_user_username').value = "";
      document.getElementById('create_user_password').value = "";
    }

    ; // interaction default

    if (child == 'interaction') {
      default_item = {
        child: "interaction",
        id: 0,
        likes: 0,
        views: 0,
        title: document.getElementById('create_interaction').value,
        username: validated_user.username,
        time: current_second,
        tags: [''],
        authors: ['']
      };
    }

    ; // object

    if (child == 'interaction') {
      // Firebase References
      // Firebase Database
      var _rootRef5 = firebase.database().ref();

      var _gnougnRef5 = _rootRef5.child('gnougn');

      var _Ref5 = _gnougnRef5.child('library'); // update key of added object


      _Ref5.push(default_item).then(function (snap) {
        var key = snap.key;
        newest_created_id = key;
        console.log('from addListing' + key); // update created item with snap.key

        _Ref5.child(key).update({
          id: key
        }); // Set firebase data


        setTimeout(function () {
          handle_refresh_fire_data();
        }, 0);
      });

      document.getElementById('create_post_title').value = "";
      document.getElementById('create_post_tag').value = "";
      document.getElementById('create_user_username').value = "";
      document.getElementById('create_user_password').value = "";
    }

    ;
  }

  ;
};

find_sort = function find_sort(mode) {
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

sorted_firebase_library = function sorted_firebase_library(x) {
  return firebase_library.sort(find_sort(x));
};

handle_firebase_render_to_view = function handle_firebase_render_to_view() {
  // render library
  (function () {
    setTimeout(function () {
      if (firebase_has_responsed_with_this_updated_data != null) {
        // create array
        if (firebase_library != null) {
          for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
            firebase_library.push(state.data.firebase.gnougn.library[i]);
          }

          ;
        }

        ; // render array

        for (var i = 0; i < firebase_library.length; i++) {
          document.getElementById('firebase_library_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_library[i])));
        }

        ; // create array

        var filtered_library_by_title = [];

        for (var i = 0; i < firebase_library.length; i++) {
          if (firebase_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
            filtered_library_by_title.push(firebase_library[i]);
          }

          ;
          console.log('filtered_library_by_title[i]');
          console.log(filtered_library_by_title[i]);
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          document.getElementById('filtered_library_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'roster') {
            document.getElementById('filtered_library_child_roster_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'interaction') {
            document.getElementById('filtered_library_child_interaction_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'activity') {
            document.getElementById('filtered_library_child_activity_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'messages') {
            document.getElementById('filtered_library_child_messages_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'stream') {
            document.getElementById('filtered_library_child_stream_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'library') {
            document.getElementById('filtered_library_child_library_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // create array

        var sorted_library_by_time_up = [];

        for (var i = 0; i < sorted_firebase_library('timeup').length; i++) {
          sorted_library_by_time_up.push(sorted_firebase_library('timeup')[i]);
        }

        ; // render array

        for (var i = 0; i < sorted_library_by_time_up.length; i++) {
          document.getElementById('sorted_library_by_time_up_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(sorted_library_by_time_up[i])));
        }

        ; // create array

        var sorted_library_by_time_down = [];

        for (var i = 0; i < sorted_firebase_library('timedown').length; i++) {
          sorted_library_by_time_down.push(sorted_firebase_library('timedown')[i]);
        }

        ; // render array

        for (var i = 0; i < sorted_library_by_time_down.length; i++) {
          document.getElementById('sorted_library_by_time_down_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(sorted_library_by_time_down[i])));
        }

        ; // interaction (if person is visition your page)
        // render array

        document.getElementById('container_enemy').innerHTML = "";

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'roster') {
            document.getElementById('container_enemy').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "<div id=\"enemy\" class=\"gui_character\"></div>")));
          }

          ;
        }

        ; // if new user

        if (validated_user_is_logged == false && localStorage.username == "placeholder_user") {
          document.getElementById('validated_user_info').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "<div id=\"validated_user_info\" class=\"\">validated_user_info: please sign up </div>")));
          document.getElementById('validated_user_info_followers').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "<div id=\"validated_user_info_followers\" class=\"\">validated_user_info_followers: please sign up </div>")));
          document.getElementById('validated_user_info_following').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "<div id=\"validated_user_info_following\" class=\"\">validated_user_info_following: please sign up </div>")));
          document.getElementById('validated_user_info_recents').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "<div id=\"validated_user_info_recents\" class=\"\">validated_user_info_recents: please sign up </div>")));
        }

        ; // if logged out

        if (validated_user_is_logged == false && localStorage.username != "placeholder_user") {
          document.getElementById('container_playable_character_svg').innerHTML = "";
        }

        ;

        if (validated_user_is_logged == false && localStorage.username != "placeholder_user") {
          document.getElementById('validated_user_info').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "<div id=\"validated_user_info\" class=\"\">validated_user_info: please sign back in </div>")));
        }

        ; // if logged in

        if (validated_user_is_logged == true) {
          document.getElementById('validated_user_info').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "<div id=\"validated_user_info\" class=\"\">validated_user_info: signed in: ".concat(validated_user.username, " </div>"))));
        }

        ;

        if (validated_user_is_logged == true) {
          document.getElementById('container_playable_character_svg').innerHTML = "";
        }

        ;

        if (validated_user_is_logged == true) {
          document.getElementById('container_playable_character_svg').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "<div id=\"character\" class=\"gui_character_1 width_100 height_100\"></div>")));
        }

        ; // user stats
        // if logged out

        if (validated_user_is_logged == false) {
          document.getElementById('validated_user_info_y_status').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "validated_user_info_y_status: please sign back in")));
        }

        ;

        if (validated_user_is_logged == false) {
          document.getElementById('validated_user_info_x_status').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "validated_user_info_x_status: please sign back in")));
        }

        ;

        if (validated_user_is_logged == false) {
          document.getElementById('modal_nav_top_link_10').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "                \n                                   <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                      <div class=\"position_absolute bottom_0 left_0 width_100 height_100\">\n                                         <div class=\"gui_link_sign_up_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                      </div>\n                                   </div>\n                                   <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                      <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                                         inside nav 10\n                                      </div>\n                                   </div>\n                               ")));

          if (document.getElementById('modal_nav_top_link_10') != null) {
            document.getElementById('modal_nav_top_link_10').addEventListener('click', function (event) {
              alert('sign in/up page');
              state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
            });
          }

          ;
        }

        ; // if logged in

        if (validated_user_is_logged == true) {
          document.getElementById('validated_user_info_y_status').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "")));
        }

        ;

        if (validated_user_is_logged == true) {
          document.getElementById('validated_user_info_x_status').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "")));
        }

        ;

        if (validated_user_is_logged == true) {
          document.getElementById('modal_nav_top_link_10').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n                                    <div class=\"position_absolute top_0 left_0 height_100 width_100 bg_white\">\n                                      <div class=\"position_absolute bottom_0 left_0 width_100 height_100\">\n                                         <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_100 height_100 margin_auto\"></div>\n\n                                         <div class=\"gui_character_face position_absolute top_1vh left_1vh width_1vh height_1vh bg_pink margin_auto\"></div>\n\n                                      </div>\n                                   </div>\n                                   <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                      <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink\">\n                                         inside nav 9 (information regarding signed_in user)\n                                      </div>\n                                   </div>\n                               ")));

          if (document.getElementById('modal_nav_top_link_10') != null) {
            document.getElementById('modal_nav_top_link_10').addEventListener('click', function (event) {
              alert('modal_nav_top_link_10');
              state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform; // fill page container

              document.getElementById('modal_page_right_container').innerHTML = "";
              document.getElementById('modal_page_right_container').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_lead('user info page')));
              document.getElementById('modal_page_right_container').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n                                        \n                                            user info page\n\n\n                                        ")));
              state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
            });
          }

          ;
        }

        ;
      }

      ;
    });
  })();
};

handle_repeated_fire_data_validation = setInterval(function () {
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
        //console.clear();
        //clearInterval(handle_repeated_fire_data_validation);
        setTimeout(function () {
          check_localStorage();
          handle_firebase_render_to_view(); //console.clear();

          console.log('contected!');
        }, 0);

        if (first_firebase_check == true) {
          //Handle_check_route('/home');
          first_firebase_check = false;
          console.log('first firebase load!!!'); // timeout

          setTimeout(function () {
            state.app.route = 'loaded';

            _handle_URL();
          }, 1000);
        }

        ;
        console.log(firebase_has_responsed_with_this_updated_data.gnougn);
      }

      ;
    }

    ;
  }

  ;
}, 1000 / 24);

firebase_login = function firebase_login() {
  var selected_username = document.getElementById('element_login_username').value;
  var selected_password = document.getElementById('element_login_password').value;

  for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
    // local user matched
    if (state.data.firebase.gnougn.library[i].child == 'roster') {
      if (state.data.firebase.gnougn.library[i].username == selected_username) {
        (function () {
          if (state.data.firebase.gnougn.library[i].password == selected_password) {
            alert('logging in: ' + selected_username + selected_password);
            validated_user = state.data.firebase.gnougn.library[i];
            localStorage.setItem("user", validated_user);
            localStorage.setItem("username", selected_username);
            localStorage.setItem("password", selected_password);
            localStorage.setItem("signed_in", "true");
            validated_user_is_logged = true;
            handle_onboarding();
            return;
          }

          ;

          if (state.data.firebase.gnougn.library[i].password != selected_password) {
            alert('not logging in: ' + selected_username + selected_password);
            localStorage.setItem("username", "placeholder_user");
            localStorage.setItem("password", "1234");
            localStorage.setItem("signed_in", "false");
          }

          ;
        })();
      }

      ;
    }

    ;
  }

  ;
  handle_refresh_fire_data();
};

firebase_logout = function firebase_logout() {
  alert('logging out');
  var selected_username = document.getElementById('element_login_username').value;
  var selected_password = document.getElementById('element_login_password').value;
  localStorage.setItem("username", localStorage.username);
  localStorage.setItem("password", localStorage.password);
  localStorage.setItem("signed_in", "false");
  validated_user_is_logged = false;
  handle_onboarding();
  handle_refresh_fire_data();
};

var shortcut_new_user = function shortcut_new_user() {
  document.getElementById('status').innerHTML = 'onboard-new'; // lead

  document.getElementById('lead').innerHTML = "";
  document.getElementById('lead').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n                <div class=\"position_absolute top_0 left_0 height_33vh width_33vw margin_auto\">\n                    <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                    <div id=\"logo_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>                    \n                </div>\n            "))); // logged user

  document.getElementById('logged_user').innerHTML = "";
  document.getElementById('logged_user').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n                you are a new user huh!\n            ")));
  Handle_display_with_delay();
  Handle_render_data_value();
};

var shortcut_new_user_still_unlogged = function shortcut_new_user_still_unlogged() {
  // o.o.o. status
  document.getElementById('status').innerHTML = 'onboard-please-sign-up'; // lead

  document.getElementById('lead').innerHTML = "";
  document.getElementById('lead').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.lead_calc())); // logged user

  document.getElementById('logged_user').innerHTML = "";
  document.getElementById('logged_user').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n            \n                welcome back new user, please sign up?\n\n\n            "))); // set state

  state.ui.gui.top_left.transform = true; // state.ui.gui.top_right.transform = true;
  // state.ui.gui.bottom_left.transform = true;
  // state.ui.gui.bottom_right.transform = true;
  // timed events

  setTimeout(function () {
    state.ui.modal.pop.top.transform = true;
    Handle_display_with_delay();
    Handle_render_data_value();
  }, 1000); // events added after render

  if (document.getElementById('vr_interaction_button_start') != null) {
    document.getElementById('vr_interaction_button_start').addEventListener('click', function (event) {
      'vr_interaction_button_start';
      document.getElementById('lead').innerHTML = ""; //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
    });
  }

  ;

  if (document.getElementById('vr_interaction_button_learn') != null) {
    document.getElementById('vr_interaction_button_learn').addEventListener('click', function (event) {
      'vr_interaction_button_learn';
      document.getElementById('lead').innerHTML = ""; //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
    });
  }

  ;

  if (document.getElementById('fold_top_left') != null) {
    document.getElementById('fold_top_left').addEventListener('click', function (event) {
      alert('fold_top_left');
    });
  }

  ;

  if (document.getElementById('fold_top') != null) {
    document.getElementById('fold_top').addEventListener('click', function (event) {
      alert('fold_top');
    });
  }

  ;

  if (document.getElementById('fold_top_right') != null) {
    document.getElementById('fold_top_right').addEventListener('click', function (event) {
      alert('fold_top_right');
    });
  }

  ;

  if (document.getElementById('fold_center_left') != null) {
    document.getElementById('fold_center_left').addEventListener('click', function (event) {
      alert('fold_center_left');
      state.ui.modal.morph.left.transform = !state.ui.modal.morph.left.transform;
    });
  }

  ;

  if (document.getElementById('fold_center') != null) {
    document.getElementById('fold_center').addEventListener('click', function (event) {
      alert('fold_center');
    });
  }

  ;

  if (document.getElementById('fold_center_right') != null) {
    document.getElementById('fold_center_right').addEventListener('click', function (event) {
      alert('fold_center_right');
      state.ui.modal.morph.right.transform = !state.ui.modal.morph.right.transform;
    });
  }

  ;

  if (document.getElementById('fold_bottom_left') != null) {
    document.getElementById('fold_bottom_left').addEventListener('click', function (event) {
      alert('fold_bottom_left');
      state.ui.modal.morph.bottom.transform = !state.ui.modal.morph.bottom.transform;
    });
  }

  ;

  if (document.getElementById('fold_bottom') != null) {
    document.getElementById('fold_bottom').addEventListener('click', function (event) {
      alert('fold_bottom');
    });
  }

  ;

  if (document.getElementById('fold_bottom_right') != null) {
    document.getElementById('fold_bottom_right').addEventListener('click', function (event) {
      alert('fold_bottom_right');
      state.ui.modal.morph.top.transform = !state.ui.modal.morph.top.transform;
    });
  }

  ;
  Handle_display_with_delay();
  Handle_render_data_value();
};

var shortcut_old_user_still_unlogged = function shortcut_old_user_still_unlogged() {
  // o.o.o. status
  document.getElementById('status').innerHTML = 'onboard-unlogged'; // lead

  document.getElementById('lead').innerHTML = "";
  document.getElementById('lead').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n            <div class=\"position_absolute top_0 left_0 height_50vh width_50vw margin_auto\">\n                <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                <div id=\"logo_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>                \n            </div>\n        "))); // logged user

  document.getElementById('logged_user').innerHTML = "";
  document.getElementById('logged_user').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n            \n                you are not logged in!\n\n\n            "))); // events added after render

  if (document.getElementById('vr_interaction_button') != null) {
    document.getElementById('vr_interaction_button').addEventListener('click', function (event) {
      //alert('vr_interaction_button');
      document.getElementById('lead').innerHTML = ""; //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
    });
  }

  ;
  Handle_display_with_delay();
  Handle_render_data_value();
};

var shortcut_old_user_logged = function shortcut_old_user_logged() {
  // o.o.o. status
  document.getElementById('status').innerHTML = 'onboard-logged'; // lead

  document.getElementById('lead').innerHTML = "";
  document.getElementById('lead').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "      \n            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                <div id=\"row-logo-mark_filler\"></div>\n                <div id=\"row-logo-mark-type\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n            </div>\n            ")));
  document.getElementById('lead').appendChild(_elements.default.element_overflow_y());
  document.getElementById('lead').appendChild(_elements.default.element_overflow_x()); // logged user

  document.getElementById('logged_user').innerHTML = "";
  document.getElementById('logged_user').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n                you are logged in!\n            "))); // interaction (if person is visition your page)

  document.getElementById('vr_mg_center').innerHTML = ""; // render array of user room items

  var vr_mg_center_loading_scene = "\n        <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n          <div id=\"container_object\" class=\"position_absolute bottom_0 left_1205vw width_33vw height_33vh\">\n             <div id=\"object\" class=\"gui_stage_tv width_100 height_100\"></div>\n          </div>\n          <div id=\"container_object\" class=\"position_absolute top_0 right_0 left_0 width_33vw height_33vh\">\n             <div id=\"object\" class=\"gui_stage_lights width_100 height_100\"></div>\n          </div>\n          <div id=\"container_object\" class=\"position_absolute bottom_0 right_1205vw width_33vw height_33vh\">\n             <div id=\"object\" class=\"gui_stage_desk width_100 height_100\"></div>\n          </div>\n        </div>\n        landing2 Center Mid\n    ";
  document.getElementById('vr_mg_center').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "".concat(vr_mg_center_loading_scene)))); // interaction (if person is visiting your page)

  document.getElementById('vr_branding').innerHTML = ""; // render scene

  var vr_branding_loading_scene = "\n                    <div class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto\">\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto\">\n                              <div id=\"logo_mark\" class=\"gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                              <div id=\"row-logo-mark-type_filler\"></div>\n                              \n                              <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                  <div id=\"gui_interaction_button_1_filler\"></div>\n                              </div>\n                          </div>\n                      </div>\n    ";
  document.getElementById('vr_branding').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "".concat(vr_branding_loading_scene)))); // events added after render

  if (document.getElementById('vr_interaction_button') != null) {
    document.getElementById('vr_interaction_button').addEventListener('click', function (event) {
      //alert('vr_interaction_button');
      document.getElementById('lead').innerHTML = ""; //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
    });
  }

  ;
  Handle_display_with_delay();
  Handle_render_data_value();
}; // handles


handle_onboarding = function handle_onboarding() {
  //alert('onboard');
  // if new user
  if (first_time_user == true && validated_user_is_logged == false && localStorage.username == "placeholder_user") {
    shortcut_new_user();
  }

  ; // if new user - still unlogged

  if (first_time_user == false && validated_user_is_logged == false && localStorage.username == "placeholder_user") {
    shortcut_new_user_still_unlogged();
  }

  ; // if logged out

  if (first_time_user == false && validated_user_is_logged == false && localStorage.username != "placeholder_user") {
    shortcut_old_user_still_unlogged();
  }

  ; // if logged in

  if (first_time_user == false && validated_user_is_logged == true && localStorage.username != "placeholder_user") {
    shortcut_old_user_logged();
  }

  ;
};

_handle_URL = function handle_URL() {
  //alert('handle_URL')
  setTimeout(function () {
    // console.log(location);
    // console.log(location.pathname);
    var parts = location.pathname.split('/'); // console.log(parts);
    // back to fold for page change

    window.scrollTo(0, 0);
    console.log('done routing');

    if (parts[1] != null) {
      //alert(parts[1]);
      if (parts[1] == '') {
        //alert('going to just home');
        state.app.url = parts[1];
        console.log('state.app.url: ' + state.app.url);
      }

      ;

      if (parts[1] != 'p' && parts[1] != '') {
        //alert('going to user');
        state.app.url = parts[1];
        console.log('state.app.url: ' + state.app.url);
      }

      ;

      if (parts[1] == 'p') {//alert('going to post');
      }

      ;
    }

    ;

    if (parts[2] != null) {
      console.log(parts[2]);
    }

    ;

    if (state.app.route == '') {
      var yup = "\n              <div id=\"vr_bg\" class=\"opacity_005\">\n                  <div id=\"row_accent_noise\"></div>\n              </div>\n\n              <div id=\"vr_mg\" class=\"transform_translate3d_top0  position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box easing_01\">\n              \n                 <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh \">\n                    <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                       </div>\n                       landing1 Left Top\n                    </div>\n                    <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                       </div>\n                       landing2 Left Center\n                    </div>\n                    <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                       </div>\n                       landing2 Left Bottom\n                    </div>\n                 </div>\n                 <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh\">\n                    <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                       </div>\n                       landing1 Center Top\n                    </div>\n                    <div id=\"vr_mg_center\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       \n                    </div>\n                    <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                       </div>\n                       landing2 Center Bottom\n                    </div>\n                 </div>\n                 <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh\">\n                    <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                       </div>\n                       landing1 Right Top\n                    </div>\n                    <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                       </div>\n                       landing2 Right Mid\n                    </div>\n                    <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                       <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                       </div>\n                       landing2 Right Bottom\n                    </div>\n                 </div>\n\n              </div>\n\n              <div id=\"vr_fg\" class=\"\">\n\n                  <div id=\"container_enemy\" class=\"position_absolute\">\n                      \n                  </div>\n\n                  <div id=\"container_playable_character\" class=\"position_absolute \">\n\n                      <div class=\"gui_character_message_box position_absolute bottom_100 left_0 right_0 height_100 width_100 margin_auto\">\n                      </div>\n\n                      <div id=\"container_playable_character_svg\" class=\"position_absolute width_100 height_100 \">\n                      </div>\n\n                  </div>\n\n              </div>\n\n              <div id=\"vr_branding\" class=\"\">\n                  \n              </div>\n              ";
      cardboard.innerHTML = yup;
      document.getElementById('status').innerHTML = 'blank, check localStorage!'; // interaction (if person is visition your page)
      // render scene

      var vr_branding_loading_scene = "\n                <div class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto\">\n                    <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto\">\n                      <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                      <div id=\"row-logo-mark-type_filler\"></div>\n                      \n                      <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                          <div id=\"gui_interaction_button_1_filler\"></div>\n                      </div>\n                  </div>\n              </div>\n            ";
      document.getElementById('vr_branding').innerHTML = "";
      document.getElementById('vr_branding').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "".concat(vr_branding_loading_scene)))); // timeout

      setTimeout(function () {
        state.app.route = 'loading';

        _handle_URL();
      }, 1000);
    }

    ;

    if (state.app.route == 'loading') {
      document.getElementById('status').innerHTML = 'loading'; // interaction (if person is visition your page)
      // render scene

      var _vr_branding_loading_scene = "\n                    <div class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto\">\n            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto\">\n                  <div id=\"logo_mark\" class=\"gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                  <div id=\"row-logo-mark-type_filler\"></div>\n                  \n                  <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                      <div id=\"gui_interaction_button_1_filler\"></div>\n                  </div>\n              </div>\n              </div>\n            ";
      document.getElementById('vr_branding').innerHTML = "";
      document.getElementById('vr_branding').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "".concat(_vr_branding_loading_scene))));
      handle_repeated_fire_data_validation;
      /*
          setTimeout( () => {
              state.app.route = 'loaded'
              handle_URL();
          }, 1000);
      */
    }

    ;

    if (state.app.route == 'loaded') {
      document.getElementById('status').innerHTML = 'loaded'; // interaction (if person is visition your page)
      // render scene

      var _vr_branding_loading_scene2 = "\n                    <div class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto\">\n            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto\">\n                  <div id=\"logo_mark\" class=\"gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                  <div id=\"row-logo-mark-type_filler\"></div>\n                  \n                  <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                      <div id=\"gui_interaction_button_1_filler\"></div>\n                  </div>\n              </div>\n              </div>\n            ";
      document.getElementById('vr_branding').innerHTML = "";
      document.getElementById('vr_branding').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "".concat(_vr_branding_loading_scene2)))); // timeout

      setTimeout(function () {
        state.app.route = 'done';

        _handle_URL();
      }, 1000);
    }

    ;

    if (state.app.route == 'done') {
      document.getElementById('status').innerHTML = 'done'; // interaction (if person is visition your page)
      // render scene

      var _vr_branding_loading_scene3 = "\n                    <div class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto\">\n            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto\">\n                  <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                  <div id=\"row-logo-mark-type_filler\"></div>\n                  \n                  <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                      <div id=\"gui_interaction_button_1_filler\"></div>\n                  </div>\n              </div>\n              </div>\n            ";
      document.getElementById('vr_branding').innerHTML = "";
      document.getElementById('vr_branding').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "".concat(_vr_branding_loading_scene3)))); // timeout

      setTimeout(function () {
        state.app.route = 'home';

        _handle_URL();
      }, 1000);
    }

    ;

    if (state.app.route == 'home') {
      document.getElementById('status').innerHTML = 'home'; // interaction (if person is visition your page)
      // render scene

      var _vr_branding_loading_scene4 = "\n                    <div class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto\">\n            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto\">\n                  <div id=\"logo_mark\" class=\"gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                  <div id=\"row-logo-mark-type_filler\"></div>\n                  \n                  <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                      <div id=\"gui_interaction_button_1_filler\"></div>\n                  </div>\n              </div>\n              </div>\n            ";
      document.getElementById('vr_branding').innerHTML = "";
      document.getElementById('vr_branding').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "".concat(_vr_branding_loading_scene4))));

      if (scrollable != null) {
        scrollable.appendChild(_elements.default.element_lead("\n                <div id=\"lead\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto\">\n                    \n                </div>\n\n                "));
        scrollable.appendChild(_elements.default.element_fold("\n\n                <div id=\"element_full\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto\">\n                        \n                    <h2>Featured</h2>\n\n                    <h2>Summary</h2>\n\n                </div>\n\n                "));
        scrollable.appendChild(_elements.default.element_full("\n                <div id=\"element_full\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto\">\n                                  \n                    <div id=\"logged_user\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto\">\n                            \n                    </div>\n                    \n                </div>\n\n                "));
        scrollable.appendChild(_elements.default.element_full("\n                <div id=\"element_full\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto\">\n                                            \n                    <h2>who</h2>\n\n                    modal_nav_top_link_9: menu right\n                    \n                    <h2>what</h2>\n                    \n                    <h2>when</h2>\n                    \n                    <h2>where</h2>\n\n                    <h2>why</h2>\n                    \n                    <h2>how</h2>\n\n                </div>\n\n                "));
        scrollable.appendChild(_elements.default.element_full("\n                <div id=\"element_full\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto\">\n                        \n                    <h2>Summary</h2>\n\n                    <h2>Credits</h2>\n                                               \n                    <div id=\"signal\">my baby moms</div>\n                    <div id=\"signal\">The dude that made reddit</div>\n                    <div id=\"signal\">g4TV</div>\n                    <div id=\"signal\">Rebel Fm</div>\n                    <div id=\"signal\">Adam Sessler</div>\n                    <div id=\"signal\">CoryX</div>\n                    <div id=\"signal\">Tony Ferguson</div>\n                    <div id=\"signal\">Henry Cejudo</div>\n                    <div id=\"signal\">Plants vs Zombies</div>\n\n                </div>\n\n                "));
      }

      ;

      if (document.getElementById('modal_menu_right_container') != null) {
        document.getElementById('modal_menu_right_container').appendChild(_elements.default.element_flex("\n\n                <h2>Controls:</h2>\n                <div id=\"signal\">page_top: all info</div>\n                <div id=\"signal\">page_bottom: see post</div>\n                <div id=\"signal\">pop_top: create post</div>\n                <div id=\"signal\">pop_bottom: create user</div>\n\n                <h6>component_app_status_transform_nav_top</h6>\n                <div id=\"component_app_status_transform_nav_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_nav_left</h6>\n                <div id=\"component_app_status_transform_nav_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_nav_bottom</h6>\n                <div id=\"component_app_status_transform_nav_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_nav_right</h6>\n                <div id=\"component_app_status_transform_nav_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_page_top</h6>\n                <div id=\"component_app_status_transform_page_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_page_left</h6>\n                <div id=\"component_app_status_transform_page_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_page_bottom</h6>\n                <div id=\"component_app_status_transform_page_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_page_right</h6>\n                <div id=\"component_app_status_transform_page_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_pop_top</h6>\n                <div id=\"component_app_status_transform_pop_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_pop_left</h6>\n                <div id=\"component_app_status_transform_pop_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_pop_bottom</h6>\n                <div id=\"component_app_status_transform_pop_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_pop_right</h6>\n                <div id=\"component_app_status_transform_pop_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gradient_top</h6>\n                <div id=\"component_app_status_transform_gradient_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gradient_left</h6>\n                <div id=\"component_app_status_transform_gradient_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gradient_bottom</h6>\n                <div id=\"component_app_status_transform_gradient_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gradient_right</h6>\n                <div id=\"component_app_status_transform_gradient_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_morph_top</h6>\n                <div id=\"component_app_status_transform_morph_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_morph_left</h6>\n                <div id=\"component_app_status_transform_morph_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_morph_bottom</h6>\n                <div id=\"component_app_status_transform_morph_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_morph_right</h6>\n                <div id=\"component_app_status_transform_morph_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_menu_top</h6>\n                <div id=\"component_app_status_transform_menu_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_menu_left</h6>\n                <div id=\"component_app_status_transform_menu_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_menu_bottom</h6>\n                <div id=\"component_app_status_transform_menu_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_menu_right</h6>\n                <div id=\"component_app_status_transform_menu_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gui_top</h6>\n                <div id=\"component_app_status_transform_gui_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gui_top_left</h6>\n                <div id=\"component_app_status_transform_gui_top_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gui_top_right</h6>\n                <div id=\"component_app_status_transform_gui_top_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gui_left</h6>\n                <div id=\"component_app_status_transform_gui_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gui_bottom</h6>\n                <div id=\"component_app_status_transform_gui_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gui_bottom_left</h6>\n                <div id=\"component_app_status_transform_gui_bottom_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gui_bottom_right</h6>\n                <div id=\"component_app_status_transform_gui_bottom_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                <h6>component_app_status_transform_gui_right</h6>\n                <div id=\"component_app_status_transform_gui_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n\n                "));
      }

      ;

      if (document.getElementById('modal_page_top_container') != null) {
        document.getElementById('modal_page_top_container').innerHTML = "\n\n                    <h1 class=\"width_100 float_left\">validated_user_info</h1>\n                    <div id=\"validated_user_info\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1 class=\"width_100 float_left\">validated_user_info_followers</h1>\n                    <div id=\"validated_user_info_followers\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1 class=\"width_100 float_left\">validated_user_info_following</h1>\n                    <div id=\"validated_user_info_following\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1 class=\"width_100 float_left\">validated_user_info_recents</h1>\n                    <div id=\"validated_user_info_recents\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1 class=\"width_100 float_left\">validated_user_info_x_status</h1>\n                    <div id=\"validated_user_info_x_status\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1 class=\"width_100 float_left\">validated_user_info_y_status</h1>\n                    <div id=\"validated_user_info_y_status\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h2 class=\"width_100 float_left\">Login</h2>\n                    <input id=\"element_login_username\" type=\"text\" placeholder=\"element_login_username\" class=\"width_100 float_left\" />\n                    <input id=\"element_login_password\" type=\"text\" placeholder=\"element_login_password\" class=\"width_100 float_left\" />\n                    <div id=\"element_login\" class=\"width_100 float_left\">login</div>\n                    <div id=\"element_logout\" class=\"width_100 float_left\">logout</div>\n\n                    <h2 class=\"width_100 float_left\">Create User</h2>\n                    <input id=\"create_user_username\" type=\"text\" placeholder=\"create_user_username\" class=\"width_100 float_left\" />\n                    <input id=\"create_user_password\" type=\"text\" placeholder=\"create_user_password\" class=\"width_100 float_left\" />\n                    <div id=\"element_addRoster\" class=\"width_100 float_left\">element_addRoster</div>\n\n                    <h2 class=\"width_100 float_left\">Create Post</h2>\n                    <input id=\"create_post_title\" type=\"text\" placeholder=\"create_post_title\" class=\"width_100 float_left\" />\n                    <input id=\"create_post_tag\" type=\"text\" placeholder=\"create_post_tag\" class=\"width_100 float_left\" />\n                    <div id=\"element_addListing\" class=\"width_100 float_left\">element_addListing</div>\n\n                    <h2 class=\"width_100 float_left\">Activity(All|Followers|Following|You)</h2>\n\n                    <h2 class=\"width_100 float_left\">Activity</h2>\n                    <input id=\"create_activity\" type=\"text\" placeholder=\"create_Activity\" class=\"width_100 float_left\" />\n\n                    <div id=\"element_addActivity\" class=\"width_100 float_left\">element_addActivity</div>\n\n                    <h2 class=\"width_100 float_left\">Interaction</h2>\n                    <input id=\"create_interaction\" type=\"text\" placeholder=\"create_interaction\" class=\"width_100 float_left\" />\n\n                    <div id=\"element_addInteraction\" class=\"width_100 float_left\">element_addInteraction</div>\n\n                    <h2 class=\"width_100 float_left\">Messages</h2>\n                    <input id=\"create_messages\" type=\"text\" placeholder=\"create_messages\" class=\"width_100 float_left\" />\n\n                    <div id=\"element_addMessages\" class=\"width_100 float_left\">element_addMessages</div>\n\n                    <h2 class=\"width_100 float_left\">Stream</h2>\n                    <input id=\"create_stream\" type=\"text\" placeholder=\"create_stream\" class=\"width_100 float_left\" />\n\n                    <div id=\"element_addStream\" class=\"width_100 float_left\">element_addStream</div>\n\n\n                    <h1>filter by title</h1>\n                    <input id=\"element_input_filter\" type=\"text\" placeholder=\"element_input_filter\" class=\"width_100 float_left\" />\n\n                    <h1>firebase_library_ol</h1>\n                    <div id=\"firebase_library_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>filtered_library_by_title_ol</h1>\n                    <div id=\"filtered_library_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>filtered_library_child_library_by_title_ol</h1>\n                    <div id=\"filtered_library_child_library_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>filtered_library_child_roster_by_title_ol</h1>\n                    <div id=\"filtered_library_child_roster_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>filtered_library_child_messages_by_title_ol</h1>\n                    <div id=\"filtered_library_child_messages_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>filtered_library_child_stream_by_title_ol</h1>\n                    <div id=\"filtered_library_child_stream_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>filtered_library_child_interaction_by_title_ol</h1>\n                    <div id=\"filtered_library_child_interaction_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>filtered_library_child_activity_by_title_ol</h1>\n                    <div id=\"filtered_library_child_activity_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>sorted_library_by_time_up_ol</h1>\n                    <div id=\"sorted_library_by_time_up_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <h1>sorted_library_by_time_down_ol</h1>\n                    <div id=\"sorted_library_by_time_down_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n                    <div id=\"signal\">\n                        <h2 class=\"width_100 float_left\">\n                            event_route:\n                        </h2>\n                        <div id=\"event_route\">".concat('you are at: ' + state.app.url, "</div></div>\n\n                    <h1>Platform</h1>\n                    <div id=\"signal\">is_Desktop: <div id=\"is_Desktop\"></div></div>\n                    <div id=\"signal\">is_Mobile: <div id=\"is_Mobile\"></div></div>\n                    <div id=\"signal\">ux_dimensions_height: <div id=\"ux_dimensions_height\"></div></div>\n                    <div id=\"signal\">ux_dimensions_width: <div id=\"ux_dimensions_width\"></div></div>\n                    <div id=\"signal\">ux_browser_height: <div id=\"ux_browser_height\"></div></div>\n                    <div id=\"signal\">ux_browser_width: <div id=\"ux_browser_width\"></div></div>\n                    <div id=\"signal\">ux_screen_height: <div id=\"ux_screen_height\"></div></div>\n                    <div id=\"signal\">ux_screen_width: <div id=\"ux_screen_width\"></div></div>\n\n                    <h1>Device</h1>\n                    <h2>Gravity</h2>\n                    <div id=\"signal\">event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div></div>\n                    <div id=\"signal\">event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div></div>\n                    <div id=\"signal\">event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div></div>\n\n                    <h2>VR</h2>\n                    <div id=\"signal\">last_action: <div id=\"last_action\"></div></div>\n\n                    <h2>Positions</h2>\n                    <div id=\"signal\">event_alpha: <div id=\"event_alpha\"></div></div>\n                    <div id=\"signal\">event_beta: <div id=\"event_beta\"></div></div>\n                    <div id=\"signal\">event_gamma: <div id=\"event_gamma\"></div></div>\n\n                    <h2>Orientation</h2>\n                    <div id=\"signal\">event_portrait: <div id=\"event_portrait\"></div></div>\n                    <div id=\"signal\">event_landscape: <div id=\"event_landscape\"></div></div>\n\n                    <h2>Orientations</h2>\n                    <div id=\"signal\">event_orientation: <div id=\"event_orientation\"></div></div>\n\n                    <h2>Events</h2>\n                    <div id=\"signal\">history_scroll: <div id=\"history_scroll\"></div></div>\n                    <div id=\"signal\">history_mouse: <div id=\"history_mouse\"></div></div>\n                    <div id=\"signal\">history_mouse_enter: <div id=\"history_mouse_enter\"></div></div>\n                    <div id=\"signal\">history_mouse_leave: <div id=\"history_mouse_leave\"></div></div>\n                    <div id=\"signal\">history_mouse_up: <div id=\"history_mouse_up\"></div></div>\n                    <div id=\"signal\">history_mouse_down: <div id=\"history_mouse_down\"></div></div>\n                    <div id=\"signal\">history_mouse_up_move: <div id=\"history_mouse_up_move\"></div></div>\n                    <div id=\"signal\">history_mouse_down_move: <div id=\"history_mouse_down_move\"></div></div>\n                    <div id=\"signal\">history_mouse_drag_drop: <div id=\"history_mouse_drag_drop\"></div></div>\n                    <div id=\"signal\">history_key: <div id=\"history_key\"></div></div>\n                    <div id=\"signal\">history_key_up: <div id=\"history_key_up\"></div></div>\n                    <div id=\"signal\">history_touch: <div id=\"history_touch\"></div></div>\n                    <div id=\"signal\">history_touch_start: <div id=\"history_touch_start\"></div></div>\n                    <div id=\"signal\">history_touch_end: <div id=\"history_touch_end\"></div></div>\n                    <div id=\"signal\">history_touch_drag_drop: <div id=\"history_touch_drag_drop\"></div></div>\n                    <div id=\"signal\">current_frame_motion: <div id=\"current_frame_motion\"></div></div>\n                    <div id=\"signal\">current_duration: <div id=\"current_duration\"></div></div>\n                    <div id=\"signal\">time_onload: <div id=\"time_onload\"></div></div>\n                    <div id=\"signal\">time: <div id=\"time\"></div></div>\n\n                    <h2>Game Character</h2>\n\n                    <div id=\"signal\">interaction_character_clientX: <div id=\"interaction_character_clientX\"></div></div>\n                    <div id=\"signal\">interaction_character_clientY: <div id=\"interaction_character_clientY\"></div></div>\n                    \n                    <h2>Game Dice</h2>\n\n                    <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                    <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n                    \n                    <h2>Game Snake</h2>\n\n                    <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                    <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n                    \n                    <h2>Game Bounce</h2>\n\n                    <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                    <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n\n                    <h2>Game Pen & Pencils</h2>\n\n                    <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                    <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n                    \n                    <h2>Game Unlock/lock</h2>\n\n                    <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                    <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n                ");
      }

      ;
      handle_refresh_fire_data();
      handle_events(); // timeout

      setTimeout(function () {
        state.app.route = 'onboard';

        _handle_URL();
      }, 1000);
    }

    ;

    if (state.app.route == 'onboard') {
      handle_onboarding();
    }

    ;
  }, 0);
};

check_localStorage = function check_localStorage() {
  var placeholder_user = {
    "username": "placeholder_user",
    "password": "1234",
    "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg",
    "signed_in": "false"
  };

  if (localStorage.user == null) {
    first_time_user = true;
    localStorage.setItem("user", placeholder_user);
    localStorage.setItem("username", placeholder_user.username);
    localStorage.setItem("password", placeholder_user.password);
    localStorage.setItem("signed_in", "false"); //alert('welcome first timer');

    return;
  }

  ;

  if (localStorage.user != null) {
    //alert('welcome back');
    //alert('welcome ' + 'returning user: ' + localStorage.username + '!');
    var roster_library = state.data.firebase.gnougn.library;

    for (var i = 0; i < roster_library.length; i++) {
      if (roster_library[i].child == "roster") {
        // local user matched but is just a null user returning, offer user to create account
        if (roster_library[i].username == localStorage.username && localStorage.username == "placeholder_user") {//alert('welcome back, create an account');
        }

        ; // local user matched and is an ACTUAL user

        if (roster_library[i].username == localStorage.username && localStorage.username != "placeholder_user") {
          //alert('user matches local');
          if (localStorage.signed_in == "true") {
            //alert(roster_library[i].username + ' or ' + localStorage.username + ', sign this back in');
            if (roster_library[i].password == localStorage.password) {
              validated_user = roster_library[i]; //alert('password matched! ' + 'signing in: ' + validated_user.id + ', ' + validated_user.username + '! validated_user id: ' + validated_user.id + '!');

              validated_user_is_logged = true;
              localStorage.signed_in = true; //alert('validated_user_is_logged: ' + validated_user_is_logged);
              //alert('localStorage.signed_in: ' + localStorage.signed_in);
            }
          }

          ;

          if (localStorage.signed_in == "false") {//alert('offer to sign: ' + roster_library[i].username + ' or ' + localStorage.username + ', back in!');
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

Handle_get_state_from_events = function Handle_get_state_from_events() {
  state = _events.default.Handle_return_state_from_events(); //alert('state.ui.modal.nav.left.transform: ' + state.ui.modal.nav.left.transform);

  Handle_display_with_delay();
  Handle_render_data_value();
};

handle_events = function handle_events() {
  if (scrollable != null) {
    // scroll
    scrollable.addEventListener('scroll', function (event) {
      _events.default.handle_Function_Scroll(event);

      Handle_get_state_from_events();
    }); // events

    root.addEventListener('keydown', function (event) {
      _events.default.handle_Function_Key_Down(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('keyup', function (event) {
      _events.default.handle_Function_Key_Up(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mousemove', function (event) {
      _events.default.handle_Function_Mouse_Move(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mouseenter', function (event) {
      _events.default.handle_Function_Mouse_Enter(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mouseleave', function (event) {
      _events.default.handle_Function_Mouse_Leave(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mouseup', function (event) {
      _events.default.handle_Function_Mouse_Up(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mousedown', function (event) {
      _events.default.handle_Function_Mouse_Down(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('click', function (event) {
      Handle_get_state_from_events();
    });
    root.addEventListener('touchmove', function (event) {
      _events.default.handle_Function_Touch_Move(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('touchstart', function (event) {
      _events.default.handle_Function_Touch_Start(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('touchend', function (event) {
      _events.default.handle_Function_Touch_End(event);

      Handle_get_state_from_events();
    });
  }

  ; // login

  if (document.getElementById('element_login') != null) {
    document.getElementById('element_login').addEventListener('click', function (event) {
      firebase_login();
    });
  }

  ;

  if (document.getElementById('element_login_username') != null) {
    document.getElementById('element_login_username').addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        firebase_login();
      }

      ;
    });
  }

  ;

  if (document.getElementById('element_login_password') != null) {
    document.getElementById('element_login_password').addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        firebase_login();
      }

      ;
    });
  }

  ; // logout

  if (document.getElementById('element_logout') != null) {
    document.getElementById('element_logout').addEventListener('click', function (event) {
      firebase_logout();
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

  if (document.getElementById('element_addListing') != null) {
    document.getElementById('element_addListing').addEventListener('click', function (event) {
      firebase_add_listings('library');
    });
  }

  ; // create

  if (document.getElementById('element_addRoster') != null) {
    document.getElementById('element_addRoster').addEventListener('click', function (event) {
      firebase_add_listings('roster');
    });
  }

  ;

  if (document.getElementById('element_addMessages') != null) {
    document.getElementById('element_addMessages').addEventListener('click', function (event) {
      firebase_add_listings('messages');
    });
  }

  ;

  if (document.getElementById('element_addStream') != null) {
    document.getElementById('element_addStream').addEventListener('click', function (event) {
      firebase_add_listings('stream');
    });
  }

  ;

  if (document.getElementById('element_addActivity') != null) {
    document.getElementById('element_addActivity').addEventListener('click', function (event) {
      firebase_add_listings('activity');
    });
  }

  ;

  if (document.getElementById('element_addInteraction') != null) {
    document.getElementById('element_addInteraction').addEventListener('click', function (event) {
      firebase_add_listings('interaction');
    });
  }

  ;

  if (document.getElementById('gui_top_left') != null) {
    document.getElementById('gui_top_left').addEventListener('click', function (event) {
      alert('gui_top_left');
      state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
    });
  }

  ;

  if (document.getElementById('gui_top') != null) {
    document.getElementById('gui_top').addEventListener('click', function (event) {
      alert('gui_top');
      state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
    });
  }

  ;

  if (document.getElementById('gui_top_right') != null) {
    document.getElementById('gui_top_right').addEventListener('click', function (event) {
      alert('gui_top_right');
      state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform;
      state.ui.gui.top.transform = !state.ui.gui.top.transform;
      state.ui.gui.top_right.transform = !state.ui.gui.top_right.transform;
      state.ui.gui.left.transform = !state.ui.gui.left.transform;
      state.ui.gui.right.transform = !state.ui.gui.right.transform;
      state.ui.gui.bottom_left.transform = !state.ui.gui.bottom_left.transform;
      state.ui.gui.bottom.transform = !state.ui.gui.bottom.transform;
      state.ui.gui.bottom_right.transform = !state.ui.gui.bottom_right.transform;
    });
  }

  ;

  if (document.getElementById('gui_left') != null) {
    document.getElementById('gui_left').addEventListener('click', function (event) {
      alert('gui_left');
      state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
    });
  }

  ;

  if (document.getElementById('gui_right') != null) {
    document.getElementById('gui_right').addEventListener('click', function (event) {
      alert('gui_right');
      state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
    });
  }

  ;

  if (document.getElementById('gui_bottom_left') != null) {
    document.getElementById('gui_bottom_left').addEventListener('click', function (event) {
      alert('gui_bottom_left');
    });
  }

  ;

  if (document.getElementById('gui_bottom') != null) {
    document.getElementById('gui_bottom').addEventListener('click', function (event) {
      alert('gui_bottom');
      state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
    });
  }

  ;

  if (document.getElementById('gui_bottom_right') != null) {
    document.getElementById('gui_bottom_right').addEventListener('click', function (event) {
      alert('gui_bottom_right');
    });
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_top') != null) {
    // gui - top
    document.getElementById('component_app_status_transform_gui_top').addEventListener("click", function (event) {
      state.ui.gui.top.transform = !state.ui.gui.top.transform;
    }); // gui - top_left

    document.getElementById('component_app_status_transform_gui_top_left').addEventListener("click", function (event) {
      state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform;
    }); // gui - top_right

    document.getElementById('component_app_status_transform_gui_top_right').addEventListener("click", function (event) {
      state.ui.gui.top_right.transform = !state.ui.gui.top_right.transform;
    }); // gui - left

    document.getElementById('component_app_status_transform_gui_left').addEventListener("click", function (event) {
      state.ui.gui.left.transform = !state.ui.gui.left.transform;
    }); // gui - bottom

    document.getElementById('component_app_status_transform_gui_bottom').addEventListener("click", function (event) {
      state.ui.gui.bottom.transform = !state.ui.gui.bottom.transform;
    }); // gui - bottom_left

    document.getElementById('component_app_status_transform_gui_bottom_left').addEventListener("click", function (event) {
      state.ui.gui.bottom_left.transform = !state.ui.gui.bottom_left.transform;
    }); // gui - bottom_right

    document.getElementById('component_app_status_transform_gui_bottom_right').addEventListener("click", function (event) {
      state.ui.gui.bottom_right.transform = !state.ui.gui.bottom_right.transform;
    }); // gui - right

    document.getElementById('component_app_status_transform_gui_right').addEventListener("click", function (event) {
      state.ui.gui.right.transform = !state.ui.gui.right.transform;
    });
  }

  ;

  if (document.getElementById('component_app_status_transform_nav_top') != null) {
    // nav - top
    document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function (event) {
      state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
    }); // nav - left

    document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function (event) {
      state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
    }); // nav - bottom

    document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function (event) {
      state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
    }); // nav - right

    document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function (event) {
      state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform;
    });
  }

  ;

  if (document.getElementById('component_app_status_transform_page_top') != null) {
    // page - top
    document.getElementById('component_app_status_transform_page_top').addEventListener("click", function (event) {
      state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
    }); // page - left

    document.getElementById('component_app_status_transform_page_left').addEventListener("click", function (event) {
      state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
    }); // page - bottom

    document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function (event) {
      state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
    }); // page - right

    document.getElementById('component_app_status_transform_page_right').addEventListener("click", function (event) {
      state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
    });
  }

  ; // menu

  if (document.getElementById('component_app_status_transform_menu_top') != null) {
    // menu - top
    document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function (event) {
      state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;
    }); // menu - left

    document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function (event) {
      state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
    }); // menu - bottom

    document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function (event) {
      state.ui.modal.menu.bottom.transform = !state.ui.modal.menu.bottom.transform;
    }); // menu - right

    document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function (event) {
      state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
    });
  }

  ; // pop

  if (document.getElementById('component_app_status_transform_pop_top') != null) {
    // pop - top
    document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function (event) {
      state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
    }); // pop - left

    document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function (event) {
      state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
    }); // pop - bottom

    document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function (event) {
      state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
    }); // pop - right

    document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function (event) {
      state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
    });
  }

  ; // gradient

  if (document.getElementById('component_app_status_transform_gradient_top') != null) {
    // gradient - top
    document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function (event) {
      state.ui.modal.gradient.top.transform = !state.ui.modal.gradient.top.transform;
    }); // gradient - left

    document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function (event) {
      state.ui.modal.gradient.left.transform = !state.ui.modal.gradient.left.transform;
    }); // gradient - bottom

    document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function (event) {
      state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
    }); // gradient - right

    document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function (event) {
      state.ui.modal.gradient.right.transform = !state.ui.modal.gradient.right.transform;
    });
  }

  ; // morph

  if (document.getElementById('component_app_status_transform_morph_top') != null) {
    // morph - top
    document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function (event) {
      state.ui.modal.morph.top.transform = !state.ui.modal.morph.top.transform;
    }); // morph - left

    document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function (event) {
      state.ui.modal.morph.left.transform = !state.ui.modal.morph.left.transform;
    }); // morph - bottom

    document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function (event) {
      state.ui.modal.morph.bottom.transform = !state.ui.modal.morph.bottom.transform;
    }); // morph - right

    document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function (event) {
      state.ui.modal.morph.right.transform = !state.ui.modal.morph.right.transform;
    });
  }

  ; // nav

  if (document.getElementById('modal_nav_top_link_1') != null) {
    document.getElementById('modal_nav_top_link_1').addEventListener('click', function (event) {
      alert('modal_nav_top_link_1');
      handle_onboarding();
      handle_refresh_fire_data();
      state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
    });
  }

  ;

  if (document.getElementById('modal_nav_top_link_2') != null) {
    document.getElementById('modal_nav_top_link_2').addEventListener('click', function (event) {
      alert('modal_nav_top_link_2');
      state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
    });
  }

  ;

  if (document.getElementById('modal_nav_top_link_3') != null) {
    document.getElementById('modal_nav_top_link_3').addEventListener('click', function (event) {
      alert('modal_nav_top_link_3');
      state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;
    });
  }

  ; // route: about

  if (document.getElementById('modal_nav_top_link_4') != null) {
    document.getElementById('modal_nav_top_link_4').addEventListener('click', function (event) {
      alert('modal_nav_top_link_4');
      state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform; // fill page container

      document.getElementById('modal_page_bottom_container').innerHTML = "";
      document.getElementById('modal_page_bottom_container').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_lead("\n                        <div id=\"about_character\" class=\"gui_character_1 width_100 height_100 float_left\"></div>\n                    ")));
      document.getElementById('modal_page_bottom_container').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', "\n                    \n                        about page\n\n                        <div id=\"about_character\" class=\"gui_character_1 width_25 height_25vh float_left\"></div>\n                        <div id=\"about_character\" class=\"gui_character_1 width_25 height_25vh float_left\"></div>\n                        <div id=\"about_character\" class=\"gui_character_1 width_25 height_25vh float_left\"></div>\n                        <div id=\"about_character\" class=\"gui_character_1 width_25 height_25vh float_left\"></div>\n\n\n                    ")));
    });
  }

  ;

  if (document.getElementById('modal_nav_top_link_5') != null) {
    document.getElementById('modal_nav_top_link_5').addEventListener('click', function (event) {
      alert('modal_nav_top_link_5');
    });
  }

  ;

  if (document.getElementById('modal_nav_top_link_6') != null) {
    document.getElementById('modal_nav_top_link_6').addEventListener('click', function (event) {
      alert('modal_nav_top_link_6');
      state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
    });
  }

  ; // user logged info

  if (document.getElementById('modal_nav_top_link_7') != null) {
    document.getElementById('modal_nav_top_link_7').addEventListener('click', function (event) {
      alert('modal_nav_top_link_7'); //state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
    });
  }

  ;

  if (document.getElementById('modal_nav_top_link_8') != null) {
    document.getElementById('modal_nav_top_link_8').addEventListener('click', function (event) {
      alert('modal_nav_top_link_8');
      state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
    });
  }

  ;

  if (document.getElementById('modal_nav_top_link_9') != null) {
    document.getElementById('modal_nav_top_link_9').addEventListener('click', function (event) {
      alert('modal_nav_top_link_9');
      state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
    });
  }

  ;
  /*
  if (document.getElementById('modal_nav_top_link_10') != null) {
      document.getElementById('modal_nav_top_link_10').addEventListener('click', (event) => {
          
          alert('modal_nav_top_link_10');
          state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
           // fill page container
          document.getElementById('modal_page_right_container').innerHTML = ``;
          document.getElementById('modal_page_right_container').appendChild(
              functions.Generate_new_fragment.appendChild(
              elements.element_lead('user info page')
              )
          );
           document.getElementById('modal_page_right_container').appendChild(
              functions.Generate_new_fragment.appendChild(
              functions.Generate_new_div('', '', `
                  
                      user info page
                    `)
              )
          );
           state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
       });
  };
  */

  if (document.getElementById('modal_nav_top_link_11') != null) {
    document.getElementById('modal_nav_top_link_11').addEventListener('click', function (event) {
      alert('modal_nav_top_link_11');
      state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
    });
  }

  ; // page events

  if (document.getElementById('modal_page_top_close') != null) {
    document.getElementById('modal_page_top_close').addEventListener('click', function (event) {
      alert('modal_page_top_close');
    });
  }

  ; // menu events

  if (document.getElementById('modal_menu_top_close') != null) {
    document.getElementById('modal_menu_top_close').addEventListener('click', function (event) {
      alert('modal_menu_top_close');
    });
  }

  ; // pop events

  if (document.getElementById('modal_pop_top_close') != null) {
    document.getElementById('modal_pop_top_close').addEventListener('click', function (event) {
      alert('modal_pop_top_close');
      state.ui.modal.pop.top.transform = false;
    });
  }

  ;
};

Handle_render_data_value = function Handle_render_data_value() {
  // gui
  if (document.getElementById('component_app_status_transform_gui_top') != null) {
    document.getElementById('component_app_status_transform_gui_top').innerHTML = state.ui.gui.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_top_left') != null) {
    document.getElementById('component_app_status_transform_gui_top_left').innerHTML = state.ui.gui.top_left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_top_right') != null) {
    document.getElementById('component_app_status_transform_gui_top_right').innerHTML = state.ui.gui.top_right.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_left') != null) {
    document.getElementById('component_app_status_transform_gui_left').innerHTML = state.ui.gui.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom') != null) {
    document.getElementById('component_app_status_transform_gui_bottom').innerHTML = state.ui.gui.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom_left') != null) {
    document.getElementById('component_app_status_transform_gui_bottom_left').innerHTML = state.ui.gui.bottom_left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom_right') != null) {
    document.getElementById('component_app_status_transform_gui_bottom_right').innerHTML = state.ui.gui.bottom_right.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_right') != null) {
    document.getElementById('component_app_status_transform_gui_right').innerHTML = state.ui.gui.right.transform;
  }

  ; // modal nav

  if (document.getElementById('component_app_status_transform_nav_top') != null) {
    document.getElementById('component_app_status_transform_nav_top').innerHTML = state.ui.modal.nav.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_nav_left') != null) {
    document.getElementById('component_app_status_transform_nav_left').innerHTML = state.ui.modal.nav.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_nav_bottom') != null) {
    document.getElementById('component_app_status_transform_nav_bottom').innerHTML = state.ui.modal.nav.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_nav_right') != null) {
    document.getElementById('component_app_status_transform_nav_right').innerHTML = state.ui.modal.nav.right.transform;
  }

  ; // modal page

  if (document.getElementById('component_app_status_transform_page_top') != null) {
    document.getElementById('component_app_status_transform_page_top').innerHTML = state.ui.modal.page.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_page_left') != null) {
    document.getElementById('component_app_status_transform_page_left').innerHTML = state.ui.modal.page.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_page_bottom') != null) {
    document.getElementById('component_app_status_transform_page_bottom').innerHTML = state.ui.modal.page.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_page_right') != null) {
    document.getElementById('component_app_status_transform_page_right').innerHTML = state.ui.modal.page.right.transform;
  }

  ; // modal menu

  if (document.getElementById('component_app_status_transform_menu_top') != null) {
    document.getElementById('component_app_status_transform_menu_top').innerHTML = state.ui.modal.menu.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_menu_left') != null) {
    document.getElementById('component_app_status_transform_menu_left').innerHTML = state.ui.modal.menu.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_menu_bottom') != null) {
    document.getElementById('component_app_status_transform_menu_bottom').innerHTML = state.ui.modal.menu.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_menu_right') != null) {
    document.getElementById('component_app_status_transform_menu_right').innerHTML = state.ui.modal.menu.right.transform;
  }

  ; // modal morph

  if (document.getElementById('component_app_status_transform_morph_top') != null) {
    document.getElementById('component_app_status_transform_morph_top').innerHTML = state.ui.modal.morph.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_morph_left') != null) {
    document.getElementById('component_app_status_transform_morph_left').innerHTML = state.ui.modal.morph.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_morph_bottom') != null) {
    document.getElementById('component_app_status_transform_morph_bottom').innerHTML = state.ui.modal.morph.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_morph_right') != null) {
    document.getElementById('component_app_status_transform_morph_right').innerHTML = state.ui.modal.morph.right.transform;
  }

  ; // modal gradient

  if (document.getElementById('component_app_status_transform_gradient_top') != null) {
    document.getElementById('component_app_status_transform_gradient_top').innerHTML = state.ui.modal.gradient.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gradient_left') != null) {
    document.getElementById('component_app_status_transform_gradient_left').innerHTML = state.ui.modal.gradient.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gradient_bottom') != null) {
    document.getElementById('component_app_status_transform_gradient_bottom').innerHTML = state.ui.modal.gradient.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gradient_right') != null) {
    document.getElementById('component_app_status_transform_gradient_right').innerHTML = state.ui.modal.gradient.right.transform;
  }

  ; // modal pop

  if (document.getElementById('component_app_status_transform_pop_top') != null) {
    document.getElementById('component_app_status_transform_pop_top').innerHTML = state.ui.modal.pop.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pop_left') != null) {
    document.getElementById('component_app_status_transform_pop_left').innerHTML = state.ui.modal.pop.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pop_bottom') != null) {
    document.getElementById('component_app_status_transform_pop_bottom').innerHTML = state.ui.modal.pop.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pop_right') != null) {
    document.getElementById('component_app_status_transform_pop_right').innerHTML = state.ui.modal.pop.right.transform;
  }

  ; // ux

  if (document.getElementById('is_Desktop') != null) {
    document.getElementById('is_Desktop').innerHTML = state.ux.platform.is_Desktop;
  }

  ;

  if (document.getElementById('is_Mobile') != null) {
    document.getElementById('is_Mobile').innerHTML = state.ux.platform.is_Mobile;
  }

  ;

  if (document.getElementById('history_scroll') != null) {
    document.getElementById('history_scroll').innerHTML = state.events.scroll.history;
  }

  ;

  if (document.getElementById('history_mouse') != null) {
    document.getElementById('history_mouse').innerHTML = state.events.mouse.history;
  }

  ;

  if (document.getElementById('history_mouse_enter') != null) {
    document.getElementById('history_mouse_enter').innerHTML = state.events.mouse_enter.history;
  }

  ;

  if (document.getElementById('history_mouse_leave') != null) {
    document.getElementById('history_mouse_leave').innerHTML = state.events.mouse_leave.history;
  }

  ;

  if (document.getElementById('history_mouse_up') != null) {
    document.getElementById('history_mouse_up').innerHTML = state.events.mouse_up.history;
  }

  ;

  if (document.getElementById('history_mouse_down') != null) {
    document.getElementById('history_mouse_down').innerHTML = state.events.mouse_down.history;
  }

  ;

  if (document.getElementById('history_mouse_up_move') != null) {
    document.getElementById('history_mouse_up_move').innerHTML = state.events.mouse_up_move.history;
  }

  ;

  if (document.getElementById('history_mouse_down_move') != null) {
    document.getElementById('history_mouse_down_move').innerHTML = state.events.mouse_down_move.history;
  }

  ;

  if (document.getElementById('history_mouse_drag_drop') != null) {
    document.getElementById('history_mouse_drag_drop').innerHTML = state.events.mouse_drag_drop.history;
  }

  ;

  if (document.getElementById('history_key') != null) {
    document.getElementById('history_key').innerHTML = state.events.key.history;
  }

  ;

  if (document.getElementById('history_key_up') != null) {
    document.getElementById('history_key_up').innerHTML = state.events.key_up.history;
  }

  ;

  if (document.getElementById('history_touch') != null) {
    document.getElementById('history_touch').innerHTML = state.events.touch.history;
  }

  ;

  if (document.getElementById('history_touch_start') != null) {
    document.getElementById('history_touch_start').innerHTML = state.events.touch_start.history;
  }

  ;

  if (document.getElementById('history_touch_end') != null) {
    document.getElementById('history_touch_end').innerHTML = state.events.touch_end.history;
  }

  ;

  if (document.getElementById('history_touch_drag_drop') != null) {
    document.getElementById('history_touch_drag_drop').innerHTML = state.events.touch_drag_drop.history;
  }

  ;

  if (document.getElementById('current_frame_motion') != null) {
    document.getElementById('current_frame_motion').innerHTML = state.motion.frame;
  }

  ;

  if (document.getElementById('current_duration') != null) {
    document.getElementById('current_duration').innerHTML = state.motion.duration;
  }

  ;

  if (document.getElementById('time') != null) {
    document.getElementById('time').innerHTML = state.data.time;
  }

  ;

  if (document.getElementById('time_onload') != null) {
    document.getElementById('time_onload').innerHTML = state.data.onload_time;
  }

  ;

  if (document.getElementById('ux_dimensions_height') != null) {
    document.getElementById('ux_dimensions_height').innerHTML = state.ux.dimensions.height;
  }

  ;

  if (document.getElementById('ux_dimensions_width') != null) {
    document.getElementById('ux_dimensions_width').innerHTML = state.ux.dimensions.width;
  }

  ;

  if (document.getElementById('ux_browser_height') != null) {
    document.getElementById('ux_browser_height').innerHTML = state.ux.browser.height;
  }

  ;

  if (document.getElementById('ux_browser_width') != null) {
    document.getElementById('ux_browser_width').innerHTML = state.ux.browser.width;
  }

  ;

  if (document.getElementById('ux_screen_height') != null) {
    document.getElementById('ux_screen_height').innerHTML = state.ux.screen.height;
  }

  ;

  if (document.getElementById('ux_screen_width') != null) {
    document.getElementById('ux_screen_width').innerHTML = state.ux.screen.width;
  }

  ; // interaction

  if (document.getElementById('interaction_character_clientX') != null) {
    document.getElementById('interaction_character_clientX').innerHTML = state.ui.interaction.player_1.clientX;
  }

  ;

  if (document.getElementById('interaction_character_clientY') != null) {
    document.getElementById('interaction_character_clientY').innerHTML = state.ui.interaction.player_1.clientY;
  }

  ; // events

  if (document.getElementById('event_accelerationIncludingGravity_x') != null) {
    document.getElementById('event_accelerationIncludingGravity_x').innerHTML = state.events.motion.event_accelerationIncludingGravity_x;
  }

  ;

  if (document.getElementById('event_accelerationIncludingGravity_y') != null) {
    document.getElementById('event_accelerationIncludingGravity_y').innerHTML = state.events.motion.event_accelerationIncludingGravity_y;
  }

  ;

  if (document.getElementById('event_accelerationIncludingGravity_z') != null) {
    document.getElementById('event_accelerationIncludingGravity_z').innerHTML = state.events.motion.event_accelerationIncludingGravity_z;
  }

  ;

  if (document.getElementById('last_action') != null) {
    if (state.events.motion.event_accelerationIncludingGravity_x > 8) {
      document.getElementById('last_action').innerHTML = 'shook right';
    }

    ;

    if (state.events.motion.event_accelerationIncludingGravity_x < -8) {
      document.getElementById('last_action').innerHTML = 'shook left';
    }

    ;

    if (state.events.motion.event_accelerationIncludingGravity_y > 8) {
      document.getElementById('last_action').innerHTML = 'upside down';
    }

    ;

    if (state.events.motion.event_accelerationIncludingGravity_y < -8) {
      document.getElementById('last_action').innerHTML = 'rightside up';
    }

    ;

    if (state.events.motion.event_accelerationIncludingGravity_z > 8) {
      document.getElementById('last_action').innerHTML = 'overhead';
    }

    ;

    if (state.events.motion.event_accelerationIncludingGravity_z < -8) {
      document.getElementById('last_action').innerHTML = 'laid flat';
    }

    ;
  }

  ;

  if (document.getElementById('event_alpha') != null) {
    document.getElementById('event_alpha').innerHTML = state.events.motion.event_alpha;
  }

  ;

  if (document.getElementById('event_beta') != null) {
    document.getElementById('event_beta').innerHTML = state.events.motion.event_beta;
  }

  ;

  if (document.getElementById('event_gamma') != null) {
    document.getElementById('event_gamma').innerHTML = state.events.motion.event_gamma;
  }

  ;

  if (state.ux.orientation.is_Landscape) {
    if (document.getElementById('event_portrait') != null) {
      document.getElementById('event_portrait').innerHTML = "'this is not portrait.'";
    }

    ;

    if (document.getElementById('event_landscape') != null) {
      document.getElementById('event_landscape').innerHTML = "'this is landscape.'";
    }

    ;
  }

  ;

  if (state.ux.orientation.is_Portrait) {
    if (document.getElementById('event_portrait') != null) {
      document.getElementById('event_portrait').innerHTML = "'this is portrait.'";
    }

    ;

    if (document.getElementById('event_landscape') != null) {
      document.getElementById('event_landscape').innerHTML = "'this is not landscape.'";
    }

    ;
  }

  ;

  if (document.getElementById('event_orientation') != null) {
    if (state.events.motion.orientation_string == 0) {
      document.getElementById('event_orientation').innerHTML = 'Portrait Mode, Home Button bottom';
    } else if (state.events.motion.orientation_string == 90) {
      document.getElementById('event_orientation').innerHTML = 'Landscape Mode, Home Button right';
    } else if (state.events.motion.orientation_string == -90) {
      document.getElementById('event_orientation').innerHTML = 'Landscape Mode, Home Button left';
    } else if (state.events.motion.orientation_string == 180) {
      document.getElementById('event_orientation').innerHTML = 'Portrait Mode, Home Button top';
    }
  }

  ;
};

Handle_model_reset = function Handle_model_reset() {
  state.ui.modal.gradient.top.transform = false;
  state.ui.modal.gradient.left.transform = false;
  state.ui.modal.gradient.bottom.transform = false;
  state.ui.modal.gradient.right.transform = false;
  state.ui.modal.morph.top.transform = false;
  state.ui.modal.morph.left.transform = false;
  state.ui.modal.morph.bottom.transform = false;
  state.ui.modal.morph.right.transform = false;
  state.ui.modal.pop.top.transform = false;
  state.ui.modal.pop.left.transform = false;
  state.ui.modal.pop.bottom.transform = false;
  state.ui.modal.pop.right.transform = false;
  state.ui.modal.page.top.transform = false;
  state.ui.modal.page.left.transform = false;
  state.ui.modal.page.bottom.transform = false;
  state.ui.modal.page.right.transform = false;
  state.ui.modal.menu.top.transform = false;
  state.ui.modal.menu.left.transform = false;
  state.ui.modal.menu.bottom.transform = false;
  state.ui.modal.menu.right.transform = false;
  state.ui.modal.nav.top.transform = false;
  state.ui.modal.nav.left.transform = false;
  state.ui.modal.nav.bottom.transform = false;
  state.ui.modal.nav.right.transform = false;
};

Handle_ui_reset = function Handle_ui_reset() {
  state.ui.modal.gradient.top.transform = false;
  state.ui.modal.gradient.left.transform = false;
  state.ui.modal.gradient.bottom.transform = false;
  state.ui.modal.gradient.right.transform = false;
  state.ui.modal.morph.top.transform = false;
  state.ui.modal.morph.left.transform = false;
  state.ui.modal.morph.bottom.transform = false;
  state.ui.modal.morph.right.transform = false;
  state.ui.modal.pop.top.transform = false;
  state.ui.modal.pop.left.transform = false;
  state.ui.modal.pop.bottom.transform = false;
  state.ui.modal.pop.right.transform = false;
  state.ui.modal.page.top.transform = false;
  state.ui.modal.page.left.transform = false;
  state.ui.modal.page.bottom.transform = false;
  state.ui.modal.page.right.transform = false;
  state.ui.modal.menu.top.transform = false;
  state.ui.modal.menu.left.transform = false;
  state.ui.modal.menu.bottom.transform = false;
  state.ui.modal.menu.right.transform = false;
  state.ui.modal.nav.top.transform = false;
  state.ui.modal.nav.left.transform = false;
  state.ui.modal.nav.bottom.transform = false;
  state.ui.modal.nav.right.transform = false;
  state.ui.gui.top.transform = false;
  state.ui.gui.top_left.transform = true;
  state.ui.gui.top_right.transform = false;
  state.ui.gui.bottom.transform = false;
  state.ui.gui.bottom_left.transform = false;
  state.ui.gui.bottom_right.transform = false;
  state.ui.gui.left.transform = false;
  state.ui.gui.right.transform = false;
}; // hooks


window.onload = function () {
  handle_time();
  handle_ui();
  handle_refresh_fire_data();

  _handle_URL();

  _events.default.handle_Function_Device_Resize(event);
};

window.onresize = function () {
  _events.default.handle_Function_Device_Resize(event);

  console.log('Handle_get_state_from_events');
  Handle_get_state_from_events();
  Handle_render_data_value();
};

window.ondevicemotion = function (event) {
  _events.default.handle_Function_Device_Motion(event);

  console.log('Handle_get_state_from_events');
  Handle_get_state_from_events();
  Handle_render_data_value();
};

window.ondeviceorientation = function (event) {
  state.events.motion.event_alpha = event.alpha;
  state.events.motion.event_beta = event.beta;
  state.events.motion.event_gamma = event.gamma;
  Handle_get_state_from_events();
  Handle_render_data_value();
};

window.onorientationchange = function () {
  state.events.motion.orientation_string = orientation;
  Handle_get_state_from_events();
  Handle_render_data_value();
};

window.onbeforeunload = function () {//alert('leaving');
};

var _default = {
  Handle_return_state: Handle_return_state,
  Handle_ui_reset: Handle_ui_reset,
  Handle_model_reset: Handle_model_reset
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/state":"imports/state.js","./imports/elements":"imports/elements.js","./imports/functions":"imports/functions.js","./imports/components":"imports/components.js","./imports/events":"imports/events.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50772" + '/');

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
//# sourceMappingURL=/clean.e31bb0bc.map