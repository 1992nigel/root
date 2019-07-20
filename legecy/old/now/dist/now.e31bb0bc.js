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
},{"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.2afa39a6.svg","assets/gui/gui_link_home_white.svg"],"assets/gui/gui_link_home_white.svg"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.23391bca.svg","assets/gui/gui_link_gear_white.svg"],"assets/gui/gui_link_gear_white.svg"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.2fd07b39.svg","assets/gui/gui_link_house_white.svg"],"assets/gui/gui_link_house_white.svg"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.27850d9e.svg","assets/gui/gui_link_close_white.svg"],"assets/gui/gui_link_close_white.svg"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.de148a15.svg","assets/gui/gui_link_min_white.svg"],"assets/gui/gui_link_min_white.svg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.f033010f.svg","assets/gui/gui_link_max_white.svg"],"assets/gui/gui_link_max_white.svg"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.179c3b09.svg","assets/gui/gui_link_dots_white.svg"],"assets/gui/gui_link_dots_white.svg"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.a1d8f80c.svg","assets/gui/gui_interaction_button_1.svg"],"assets/gui/gui_interaction_button_1.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.e0631923.svg","assets/gui/gui_stage_desk.svg"],"assets/gui/gui_stage_desk.svg"],"./assets/gui/gui_character.svg":[["gui_character.5f9cd7ac.svg","assets/gui/gui_character.svg"],"assets/gui/gui_character.svg"],"./assets/gui/gui_character_right_1.svg":[["gui_character_right_1.c745c328.svg","assets/gui/gui_character_right_1.svg"],"assets/gui/gui_character_right_1.svg"],"./assets/gui/gui_character_right_2.svg":[["gui_character_right_2.5cfcf5ac.svg","assets/gui/gui_character_right_2.svg"],"assets/gui/gui_character_right_2.svg"],"./assets/gui/gui_character_right_3.svg":[["gui_character_right_3.8dc2166e.svg","assets/gui/gui_character_right_3.svg"],"assets/gui/gui_character_right_3.svg"],"./assets/gui/gui_character_right_4.svg":[["gui_character_right_4.d7c48548.svg","assets/gui/gui_character_right_4.svg"],"assets/gui/gui_character_right_4.svg"],"./assets/gui/gui_character_left_1.svg":[["gui_character_left_1.c87b49f6.svg","assets/gui/gui_character_left_1.svg"],"assets/gui/gui_character_left_1.svg"],"./assets/gui/gui_character_left_2.svg":[["gui_character_left_2.61be681d.svg","assets/gui/gui_character_left_2.svg"],"assets/gui/gui_character_left_2.svg"],"./assets/gui/gui_character_left_3.svg":[["gui_character_left_3.056adc88.svg","assets/gui/gui_character_left_3.svg"],"assets/gui/gui_character_left_3.svg"],"./assets/gui/gui_character_left_4.svg":[["gui_character_left_4.aae0b84b.svg","assets/gui/gui_character_left_4.svg"],"assets/gui/gui_character_left_4.svg"],"./assets/gui/gui_character_face.svg":[["gui_character_face.38e227be.svg","assets/gui/gui_character_face.svg"],"assets/gui/gui_character_face.svg"],"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/gradient/grey_top.svg":[["grey_top.d8e034e1.svg","assets/gradient/grey_top.svg"],"assets/gradient/grey_top.svg"],"./assets/gradient/white_top.svg":[["white_top.ce87e304.svg","assets/gradient/white_top.svg"],"assets/gradient/white_top.svg"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var default_state = {
  app: {
    route: 'null',
    dev_mode: true,
    time: '',
    feature_posts_limit: 1,
    posts_start: 1,
    posts_limit: 7,
    refs: false,
    sort: 'likes',
    view: 'grid',
    feature_style: 'all',
    types: [],
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
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      top_left: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      top_right: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      bottom: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      bottom_left: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      bottom_right: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      left: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      right: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      fold: {
        timeout: {
          transform: false,
          opacity: false,
          display: false
        }
      }
    },
    modal: {
      pip: {
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
      pop: {
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
      },
      fade: {
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
      gradient: {
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
      morph: {
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
      menu: {
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
      overlay: {
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
      corner: {
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

var state = '';
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
    ELEMENT.innerHTML = "\n            ".concat(data_Object, "\n        ");
  }

  ;
  return ELEMENT;
};

var Generate_new_post = function Generate_new_post(data_Object, id_String, class_String) {
  var ELEMENT = document.createElement('div');
  ELEMENT.setAttribute("id", id_String);
  ELEMENT.classList = "position_relative float_left calc_2vw_width border_1vw_grey bg_white ";

  if (data_Object != null) {
    if (data_Object.child == 'library') {
      if (data_Object.title) {
        ELEMENT.innerHTML += "\n                            \n                        <div id=\"post_component\" class=\"position_relative float_right height_20vw width_100\">\n                            \n                            <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey\">\n                                    Post stats\n                                </div>\n                            </div>\n\n                            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_green\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey\">\n                                    <div id=\"bg-character\" class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                </div>\n                            </div>\n\n                            <div class=\"hover_show position_absolute top_100 left_0 height_6025vw width_100\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey\">\n                                    Post interaction\n                                </div>\n                            </div>\n\n                        </div>\n\n                    ";
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
      ELEMENT.addEventListener("click", function (event) {
        state = _index.default.Handle_return_state();
        document.getElementById('component_app_modal_element_pop_left_component_here').innerHTML = "";
        document.getElementById('component_app_modal_element_pop_left_component_here').appendChild(Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div')));
        document.getElementById('component_app_modal_element_pop_left_component_here').appendChild(Generate_new_fragment.appendChild(Generate_new_div("<div class=\" width_100 height_100vh float_left position_relative\"></div>", 'Generate_new_div')));
        state.ui.modal.pop.left.transform = false;
        state.ui.modal.pop.left.display = true;

        _index.default.Handle_ui_from_functions();
      });
    }

    ;

    if (data_Object.child == 'roster') {
      if (data_Object.username) {
        ELEMENT.innerHTML += "\n                            \n                        <div id=\"post_component\" class=\"position_relative float_right height_20vw width_100\">\n                            \n                            <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey\">\n                                    Post stats\n                                </div>\n                            </div>\n\n                            <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_green\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey\">\n                                    <div id=\"bg-character\" class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                </div>\n                            </div>\n\n                            <div class=\"hover_show position_absolute top_100 left_0 height_6025vw width_100\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey\">\n                                    Post interaction\n                                </div>\n                            </div>\n\n                        </div>\n\n                    ";
      }

      ;

      if (data_Object.username) {
        ELEMENT.innerHTML += "\n                            <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                                username: ".concat(data_Object.username, "\n                            </div>\n                    ");
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
      ELEMENT.addEventListener("click", function (event) {
        state = _index.default.Handle_return_state();
        document.getElementById('component_app_modal_element_pop_left_component_here').innerHTML = "";
        document.getElementById('component_app_modal_element_pop_left_component_here').appendChild(Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div')));
        document.getElementById('component_app_modal_element_pop_left_component_here').appendChild(Generate_new_fragment.appendChild(Generate_new_div("<div class=\" width_100 height_100vh float_left position_relative\"></div>", 'Generate_new_div')));
        state.ui.modal.pop.left.transform = false;
        state.ui.modal.pop.left.display = true;

        _index.default.Handle_ui_from_functions();
      });
    }

    ;
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.children[0].addEventListener("click", function (event) {//alert(data_Object);
  });
  var CONTAINER_ELEMENT = document.createElement('li');
  CONTAINER_ELEMENT.setAttribute("id", id_String);
  CONTAINER_ELEMENT.classList = "position_relative float_left width_33flex";
  CONTAINER_ELEMENT.appendChild(Generate_new_fragment.appendChild(ELEMENT));
  return CONTAINER_ELEMENT;
};

var Generate_test = function Generate_test() {
  var ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", 'Generate_test');
  ELEMENT.classList = "width_100 float_left position_relative";
  ELEMENT.innerHTML = "test"; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.addEventListener("click", function (event) {//alert("Generate_test");
  });
  return ELEMENT;
};

var Generate_validated_user = function Generate_validated_user(data_Object, id_String, class_String) {
  var ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", id_String);
  ELEMENT.classList = "width_100 float_left position_relative";

  if (data_Object != null) {
    if (data_Object.username) {
      ELEMENT.innerHTML += "\n\n                <div id=\"post_component\" class=\"position_relative float_right height_10vw width_100\">\n                    \n                    <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                            <div id=\"bg-character\" class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                        </div>\n                    </div>\n\n                    <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        </div>\n                    </div>\n\n                </div>\n\n                <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                    username: ".concat(data_Object.username, "\n                </div>\n                ");
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

  ELEMENT.children[0].addEventListener("click", function (event) {//alert(data_Object);
  });
  return ELEMENT;
}; // Handles


var Toggle_functions_IF_State = function Toggle_functions_IF_State(function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) {
  // Function Check # 1
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
      }, 0);
      return;
    }

    ;
  }

  ;
};

var Toggle_display_and_opacity_off_with_delay = function Toggle_display_and_opacity_off_with_delay(id) {
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
      }, 0);
      return;
    }

    ;
  }

  ;
};

var HANDLE_looping_logo_mark = function HANDLE_looping_logo_mark() {
  state = _index.default.Handle_return_state(); // overall site frames by 24 frames

  (function () {
    var interval = 0;
    setInterval(function () {
      if (interval == 1) {
        if (document.getElementById('logo_mark') != null) {
          document.getElementById('logo_mark').classList = "\n                                    gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
        }

        ;
      }

      ;

      if (interval == 2) {
        if (document.getElementById('logo_mark') != null) {
          document.getElementById('logo_mark').classList = "\n                                    gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
        }

        ;
      }

      ;

      if (interval == 3) {
        if (document.getElementById('logo_mark') != null) {
          document.getElementById('logo_mark').classList = "\n                                    gui_logo_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
        }

        ;
      }

      ;

      if (interval == 4) {
        if (document.getElementById('logo_mark') != null) {
          document.getElementById('logo_mark').classList = "\n                                    gui_logo_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
        }

        ;
        interval = 0;
      }

      ;
      interval += 1;
    }, 1000 / 12);
  })();
};

var Handle_return_state_from_functions = function Handle_return_state_from_functions() {
  return state;
};

var _default = {
  Handle_return_state_from_functions: Handle_return_state_from_functions,
  HANDLE_looping_logo_mark: HANDLE_looping_logo_mark,
  Toggle_functions_IF_State: Toggle_functions_IF_State,
  Toggle_classes_IF_State: Toggle_classes_IF_State,
  Toggle_display_and_opacity_on_with_no_delay: Toggle_display_and_opacity_on_with_no_delay,
  Toggle_display_and_opacity_off_with_delay: Toggle_display_and_opacity_off_with_delay,
  Generate_new_fragment: Generate_new_fragment,
  Generate_new_div: Generate_new_div,
  Generate_new_li: Generate_new_li,
  Generate_new_post: Generate_new_post,
  Generate_validated_user: Generate_validated_user,
  Generate_test: Generate_test
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

var handle_Function_Key_Press = function handle_Function_Key_Press(event) {
  state = _index.default.Handle_return_state();

  if (event) {
    state.events.key.history.push([{
      keyCode: event.keyCode
    }]);
    console.log('state.events.key.history');
    console.log(state.events.key.history);

    if (event.keyCode == 27) {
      _index.default.handle_Route('local_user_check');
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

    if (event.keyCode == 27) {
      _index.default.handle_Route('home');
    }

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
  handle_Function_Key_Press: handle_Function_Key_Press,
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
},{"../index.js":"index.js"}],"imports/components.js":[function(require,module,exports) {
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
    component_state_display: !state.ui.gui.top.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'gui_bottom',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'gui_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'gui_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, // anchors
  {
    component: 'modal_nav_top',
    component_state_transform: state.ui.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.modal.nav.top.transform // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, {
    component: 'modal_nav_bottom',
    component_state_transform: state.ui.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.modal.nav.bottom.transform // component_state_opacity:  state.ui.modal.nav.bottom.opacity

  }, {
    component: 'modal_nav_left',
    component_state_transform: state.ui.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.modal.nav.left.transform // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, {
    component: 'modal_nav_right',
    component_state_transform: state.ui.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.modal.nav.right.transform // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, {
    component: 'component_app_modal_element_page_top',
    component_state_transform: state.ui.modal.page.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.top.display // component_state_opacity:  state.ui.modal.page.top.opacity

  }, {
    component: 'component_app_modal_element_page_bottom',
    component_state_transform: state.ui.modal.page.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.bottom.display // component_state_opacity:  state.ui.modal.page.bottom.opacity

  }, {
    component: 'component_app_modal_element_page_left',
    component_state_transform: state.ui.modal.page.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.left.display // component_state_opacity:  state.ui.modal.page.left.opacity

  }, {
    component: 'component_app_modal_element_page_right',
    component_state_transform: state.ui.modal.page.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.right.display // component_state_opacity:  state.ui.modal.page.right.opacity

  }, {
    component: 'component_app_modal_element_pop_top',
    component_state_transform: state.ui.modal.pop.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.top.display // component_state_opacity:  state.ui.modal.pop.top.opacity

  }, {
    component: 'component_app_modal_element_pop_bottom',
    component_state_transform: state.ui.modal.pop.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.bottom.display // component_state_opacity:  state.ui.modal.pop.bottom.opacity

  }, {
    component: 'component_app_modal_element_pop_left',
    component_state_transform: state.ui.modal.pop.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.left.display // component_state_opacity:  state.ui.modal.pop.left.opacity

  }, {
    component: 'component_app_modal_element_pop_right',
    component_state_transform: state.ui.modal.pop.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.right.display // component_state_opacity:  state.ui.modal.pop.right.opacity

  }];
  return components;
};

var _default = {
  get_components_handled: get_components_handled
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

var _components = _interopRequireDefault(require("./imports/components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
// Initalization
var root;
var state;
var config;
var functions;
var events;

var _handle_Route;

var is_Desktop;
var is_Mobile;
var is_Landscape;
var is_Portrait;
var components;
var fb_writeable;
var fb_response; // Assignment

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
var site_first_load = true;
var firebase_data_has_been_updated_and_is_now_writeable;
var firebase_has_responsed_with_this_updated_data;
root = document.getElementById('root');
state = _state.default.default_state;
functions = _functions.default;
events = _events.default;
state.ux.platform.is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
state.ux.platform.is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
is_Landscape = window.innerHeight < window.innerWidth;
is_Portrait = window.innerHeight > window.innerWidth;
components = _components.default; // Functions

firebase.initializeApp(config);
var default_user = {
  "username": "null_local_user",
  "password": "xxx",
  "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg"
};

var addListings = function addListings(child) {
  if (validated_user.id != null) {
    var current_second = new Date().getTime() / 1000;
    var default_item;

    if (child == 'library') {
      default_item = {
        child: "library",
        id: 0,
        username: "null_post",
        password: "xxx",
        title: document.getElementById('create_post_title').value,
        tags: [document.getElementById('create_post_tag').value],
        time: current_second,
        authors: ["" + "".concat(validated_user.id) + ""]
      };
    }

    ;

    if (child == 'roster') {
      default_item = {
        child: "roster",
        id: 0,
        username: document.getElementById('create_user_username').value,
        password: document.getElementById('create_user_password').value,
        title: document.getElementById('create_post_title').value,
        tags: [document.getElementById('create_post_tag').value],
        time: current_second,
        authors: ["" + "".concat(validated_user.id) + ""]
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
  }

  ;
  document.getElementById('create_post_title').value = "";
  document.getElementById('create_post_tag').value = "";
  document.getElementById('create_user_username').value = "";
  document.getElementById('create_user_password').value = "";
};

var validated_user = {};
var validated_user_data = {};
var is_logged = false;
var first_time_user = true;
var is_null_user = true;
var filtered_library_by_title;

var handle_URL = function handle_URL() {
  //alert('handle_URL')
  setTimeout(function () {
    console.log(location);
    console.log(location.pathname);
    var parts = location.pathname.split('/');
    console.log(parts);

    if (parts[1] != '' && parts[1] != 'home') {
      //alert('shouldnt be home:' +  parts[1])
      history.pushState({}, null, parts[1]);
      var parts = location.pathname.split('/');

      _handle_Route('local_user_check');

      _handle_Route(parts[1]);

      return;
    }

    ;

    if (parts[1] == '' || parts[1] == 'home') {
      setTimeout(function () {
        _handle_Route('local_user_check'); //alert('you are already home: ' + parts[1]); // home

      }, 2500);
    }

    ;

    if (parts[2] != null) {//root.innerHTML = (parts[2]);
    }

    ; // back to fold for page change

    window.scrollTo(0, 0);
    console.log('done routing');
  }, 0);
};

var handle_empty_list = function handle_empty_list() {
  filtered_library_by_title = [];

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

var sorted_library = function sorted_library(x) {
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
          document.getElementById('element_ol_firebase_all').appendChild(functions.Generate_new_fragment.appendChild(functions.Generate_new_post(filtered_library_by_title[i])));
        }

        ; // filtered library

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'library') {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_all_library').appendChild(functions.Generate_new_fragment.appendChild(functions.Generate_new_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // filtered roster

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          if (sorted_library(state.data.sort)[i].child == 'roster') {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_all_users').appendChild(functions.Generate_new_fragment.appendChild(functions.Generate_new_post(sorted_library(state.data.sort)[i])));
          }

          ;
        }

        ;

        if (validated_user.id != null) {
          document.getElementById('element_ol_firebase_validated_user').appendChild(functions.Generate_new_fragment.appendChild(functions.Generate_validated_user(validated_user)));
        }

        ;

        if (validated_user.id == null) {
          document.getElementById('element_ol_firebase_validated_user').innerHTML = "please sign in";
        }

        ; //alert('filter library')
      }

      ;
    }, 0);
  })();
};

var handle_refresh_fire_data = function handle_refresh_fire_data() {
  handle_empty_list();
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
        //console.clear();
        //clearInterval(handle_repeated_fire_data_validation);
        setTimeout(function () {
          handle_firebase_render_to_view(); //console.clear();
          //alert('contected!');
        }, 0);

        if (site_first_load == true) {
          //Handle_check_route('/home');
          site_first_load = false;
          check_local_user(); //alert('first_time_user: ' + first_time_user);
          //alert('is_logged: ' + is_logged);

          handle_URL(); //handle_ID();
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
    is_logged = false;
    first_time_user = true;
    console.log(localStorage.user);
    console.log('localStorage.user.username');
    console.log(localStorage.user.username);
    console.log('localStorage.user.password');
    console.log(localStorage.user.password); //alert('welcome new user!');

    return;
  }

  ; // or from login

  if (localStorage.user != null) {
    first_time_user = false; //alert('welcome ' + 'returning user: ' + localStorage.username + '!');

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
      if (state.data.firebase.gnougn.library[i].child == "roster") {
        // local user matched
        if (state.data.firebase.gnougn.library[i].username == localStorage.username && localStorage.username == "null_local_user") {
          //alert('welcome back, create an account');
          is_null_user = true;
        }

        ; // local user matched

        if (state.data.firebase.gnougn.library[i].username == localStorage.username && localStorage.username != "null_local_user") {
          //alert('user matches local');
          if (localStorage.signed_in == "true") {
            //alert(state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', sign this back in');
            if (state.data.firebase.gnougn.library[i].password == localStorage.password) {
              validated_user = state.data.firebase.gnougn.library[i]; //alert('password match');
              //alert('signing in: ' + validated_user.id + ', ' + validated_user.username);                            
              //alert('validated_user id: ' + validated_user.id);

              is_logged = true;
              localStorage.signed_in = true; //alert('is_logged: ' + is_logged);
              //alert('localStorage.signed_in: ' + localStorage.signed_in);
            }
          }

          ;

          if (localStorage.signed_in == "false") {
            //alert('offer to sign: ' + state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', back in!');
            is_null_user = false;
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
}; // null, loading, loaded, home, user, post, page


_handle_Route = function handle_Route(x) {
  state.app.url = x;

  if (state.app.url == '/') {
    // start asset preloader
    setTimeout(function () {
      _handle_Route('loading');
    }, 0);
  }

  ;

  if (state.app.url == 'loading') {
    root.innerHTML = 'you are loading'; // start asset preloader

    setTimeout(function () {
      _handle_Route('loaded');
    }, 0);
  }

  ;

  if (state.app.url == 'loaded') {
    root.innerHTML = 'you are loaded'; // start asset preloader

    setTimeout(function () {
      _handle_Route('done');
    }, 0);
  }

  ;

  if (state.app.url == 'done') {
    root.innerHTML = 'you are done'; // start asset preloader

    setTimeout(function () {
      _handle_Route('home');
    }, 0);
  }

  ;

  if (state.app.url == 'home') {
    setTimeout(function () {
      root.innerHTML = "\n\n                    <div id=\"cardboard\" class=\"width_100 height_100 position_fixed float_left\">\n\n                        <div bg=\"vr_bg\" class=\"opacity_005\">\n                            <div id=\"row_accent_noise\"></div>\n                        </div>\n\n                        <div id=\"vr_mg\" class=\"transform_translate3d_top0  position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box\">\n                        \n                           <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh \">\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing1 Left Top\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Left Center\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Left Bottom\n                              </div>\n                           </div>\n                           <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh\">\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing1 Center Top\n                              </div>\n                              <div id=\"vr_mg_center\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                    <div id=\"container_object\" class=\"position_absolute bottom_0 left_1205vw width_33vw height_33vh\">\n                                       <div id=\"object\" class=\"gui_stage_tv width_100 height_100\"></div>\n                                    </div>\n                                    <div id=\"container_object\" class=\"position_absolute top_0 right_0 left_0 width_33vw height_33vh\">\n                                       <div id=\"object\" class=\"gui_stage_lights width_100 height_100\"></div>\n                                    </div>\n                                    <div id=\"container_object\" class=\"position_absolute bottom_0 right_1205vw width_33vw height_33vh\">\n                                       <div id=\"object\" class=\"gui_stage_desk width_100 height_100\"></div>\n                                    </div>\n                                 </div>\n                                 landing2 Center Mid\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Center Bottom\n                              </div>\n                           </div>\n                           <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh\">\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing1 Right Top\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Right Mid\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Right Bottom\n                              </div>\n                           </div>\n\n                        </div>\n\n                        <div id=\"vr_fg\" class=\"\">\n\n                            <div id=\"container_enemy\" class=\"position_absolute\">\n                                <div id=\"enemy\" class=\"gui_character\"></div>\n                            </div>\n\n                            <div id=\"container_character\" class=\"position_absolute \">\n                                <div id=\"character\" class=\"gui_character\"></div>\n                            </div>\n\n                        </div>\n\n\n                        <div id=\"vr_branding\" class=\"\">\n                            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                                <div id=\"row-logo-mark-type_filler\"></div>\n                                \n                                <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                    <div id=\"gui_interaction_button_1_filler\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    <div id=\"scrollable\" class=\"position_relative height_100vh width_100vw margin_auto overflow_y\">\n                        \n                        <div class=\"position_relative width_100vw margin_auto\">\n                            \n                            <div id=\"fold\" class=\"position_relative height_100vh width_100vw margin_auto\">\n\n                                <div id=\"fold_interaction\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\">\n                                    \n                                    <div id=\"fold_interaction_home\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                                        <div id=\"row-logo-mark_filler\"></div>\n                                        <div id=\"row_logo_mark_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                                        \n                                        <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                            <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto\"></div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                            </div>\n                            <div id=\"signal\">element_ol_firebase_all: <div id=\"element_ol_firebase_all\"></div></div>\n                            <div id=\"signal\">element_ol_firebase_all_library: <div id=\"element_ol_firebase_all_library\"></div></div>\n                            <div id=\"signal\">element_ol_firebase_all_users: <div id=\"element_ol_firebase_all_users\"></div></div>\n                            <div id=\"signal\">element_ol_firebase_validated_user: <div id=\"element_ol_firebase_validated_user\"></div></div>\n                            <input id=\"element_input_filter\" type=\"text\" placeholder=\"element_input_filter\" class=\"width_100 float_left\" />\n\n                    <h2 class=\"width_100 float_left\">Login</h2>\n                    <input id=\"element_login_username\" type=\"text\" placeholder=\"element_login_username\" class=\"width_100 float_left\" />\n                    <input id=\"element_login_password\" type=\"text\" placeholder=\"element_login_password\" class=\"width_100 float_left\" />\n\n                    <h2 class=\"width_100 float_left\">Create User</h2>\n                    <input id=\"create_user_username\" type=\"text\" placeholder=\"create_user_username\" class=\"width_100 float_left\" />\n                    <input id=\"create_user_password\" type=\"text\" placeholder=\"create_user_password\" class=\"width_100 float_left\" />\n\n                    <h2 class=\"width_100 float_left\">Create Post</h2>\n                    <input id=\"create_post_title\" type=\"text\" placeholder=\"create_post_title\" class=\"width_100 float_left\" />\n                    <input id=\"create_post_tag\" type=\"text\" placeholder=\"create_post_tag\" class=\"width_100 float_left\" />\n\n                    <h2 class=\"width_100 float_left\">Buttons</h2>\n                    <div id=\"element_refresh\" class=\"width_100 float_left\">refresh</div>\n                    <div id=\"element_login\" class=\"width_100 float_left\">login</div>\n                    <div id=\"element_logout\" class=\"width_100 float_left\">logout</div>\n                    <div id=\"element_addListing\" class=\"width_100 float_left\">element_addListing</div>\n                    <div id=\"element_addRoster\" class=\"width_100 float_left\">element_addRoster</div>\n\n                            <div id=\"signal\">event_route: <div id=\"event_route\">".concat('you are at: ' + state.app.url, "</div></div>\n\n                            <h1>Platform</h1>\n                            <div id=\"signal\">is_Desktop: <div id=\"is_Desktop\"></div></div>\n                            <div id=\"signal\">is_Mobile: <div id=\"is_Mobile\"></div></div>\n                            <div id=\"signal\">ux_dimensions_height: <div id=\"ux_dimensions_height\"></div></div>\n                            <div id=\"signal\">ux_dimensions_width: <div id=\"ux_dimensions_width\"></div></div>\n                            <div id=\"signal\">ux_browser_height: <div id=\"ux_browser_height\"></div></div>\n                            <div id=\"signal\">ux_browser_width: <div id=\"ux_browser_width\"></div></div>\n                            <div id=\"signal\">ux_screen_height: <div id=\"ux_screen_height\"></div></div>\n                            <div id=\"signal\">ux_screen_width: <div id=\"ux_screen_width\"></div></div>\n\n                            <h1>Device</h1>\n                            <h2>Gravity</h2>\n                            <div id=\"signal\">event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div></div>\n                            <div id=\"signal\">event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div></div>\n                            <div id=\"signal\">event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div></div>\n\n                            <h2>VR</h2>\n                            <div id=\"signal\">last_action: <div id=\"last_action\"></div></div>\n\n                            <h2>Positions</h2>\n                            <div id=\"signal\">event_alpha: <div id=\"event_alpha\"></div></div>\n                            <div id=\"signal\">event_beta: <div id=\"event_beta\"></div></div>\n                            <div id=\"signal\">event_gamma: <div id=\"event_gamma\"></div></div>\n\n                            <h2>Orientation</h2>\n                            <div id=\"signal\">event_portrait: <div id=\"event_portrait\"></div></div>\n                            <div id=\"signal\">event_landscape: <div id=\"event_landscape\"></div></div>\n\n                            <h2>Orientations</h2>\n                            <div id=\"signal\">event_orientation: <div id=\"event_orientation\"></div></div>\n\n                            <h2>Events</h2>\n                            <div id=\"signal\">history_scroll: <div id=\"history_scroll\"></div></div>\n                            <div id=\"signal\">history_mouse: <div id=\"history_mouse\"></div></div>\n                            <div id=\"signal\">history_mouse_enter: <div id=\"history_mouse_enter\"></div></div>\n                            <div id=\"signal\">history_mouse_leave: <div id=\"history_mouse_leave\"></div></div>\n                            <div id=\"signal\">history_mouse_up: <div id=\"history_mouse_up\"></div></div>\n                            <div id=\"signal\">history_mouse_down: <div id=\"history_mouse_down\"></div></div>\n                            <div id=\"signal\">history_mouse_up_move: <div id=\"history_mouse_up_move\"></div></div>\n                            <div id=\"signal\">history_mouse_down_move: <div id=\"history_mouse_down_move\"></div></div>\n                            <div id=\"signal\">history_mouse_drag_drop: <div id=\"history_mouse_drag_drop\"></div></div>\n                            <div id=\"signal\">history_key: <div id=\"history_key\"></div></div>\n                            <div id=\"signal\">history_key_up: <div id=\"history_key_up\"></div></div>\n                            <div id=\"signal\">history_touch: <div id=\"history_touch\"></div></div>\n                            <div id=\"signal\">history_touch_start: <div id=\"history_touch_start\"></div></div>\n                            <div id=\"signal\">history_touch_end: <div id=\"history_touch_end\"></div></div>\n                            <div id=\"signal\">history_touch_drag_drop: <div id=\"history_touch_drag_drop\"></div></div>\n                            <div id=\"signal\">current_frame_motion: <div id=\"current_frame_motion\"></div></div>\n                            <div id=\"signal\">current_duration: <div id=\"current_duration\"></div></div>\n                            <div id=\"signal\">time_onload: <div id=\"time_onload\"></div></div>\n                            <div id=\"signal\">time: <div id=\"time\"></div></div>\n\n                            <h2>Game Character</h2>\n\n                            <div id=\"signal\">interaction_character_clientX: <div id=\"interaction_character_clientX\"></div></div>\n                            <div id=\"signal\">interaction_character_clientY: <div id=\"interaction_character_clientY\"></div></div>\n                            \n                            <h2>Game Dice</h2>\n\n                            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n                            \n                            <h2>Game Snake</h2>\n\n                            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n                            \n                            <h2>Game Bounce</h2>\n\n                            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n\n                            <h2>Game Pen & Pencils</h2>\n\n                            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n                            \n                            <h2>Game Unlock/lock</h2>\n\n                            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n                            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n\n                            <h2>Inspired By:</h2>\n\n                            <div id=\"signal\">my baby moms</div>\n                            <div id=\"signal\">The dude that made reddit</div>\n                            <div id=\"signal\">g4TV</div>\n                            <div id=\"signal\">Rebel Fm</div>\n                            <div id=\"signal\">Adam Sessler</div>\n                            <div id=\"signal\">CoryX</div>\n                            <div id=\"signal\">Tony Ferguson</div>\n                            <div id=\"signal\">Henry Cejudo</div>\n                            <div id=\"signal\">Plants vs Zombies</div>\n\n\n                        <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                            values:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total follows:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total followers:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total retweeted:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total retweet:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total likes:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total liked:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total dislikes:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total disliked:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total flags:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total flagged:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total views:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total viewed:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            post count:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total comments made:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total comments recieved:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total replys made:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total replys recieved:\n                        </div>\n\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total message made:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total message recieved:\n                        </div>\n\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total stream messages made:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total stream messages recieved:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            total time logged:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            last login:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            sign up date:\n                        </div>\n                        <div id=\"post_component\" class=\"font_size_5vw width_100 float_left position_relative display opacity_1\">\n                            history:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history follows:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history followers:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history flypaper:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history flyer:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history likes:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history dislikes:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history flags:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history views:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history of post made:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history of comments made:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history of stream messages:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history of stream mentions:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history of views:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history of logins:\n                        </div>\n                        <div id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                            history of logouts:\n                        </div>\n                                                            \n                        </div>\n\n                        <div id=\"bg_gradient\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\"></div>\n                    \n                        <div id=\"bg\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\"></div>\n\n                        <div class=\"position_relative height_100vh width_100vw float_left margin_auto bg_grey\">\n                        </div>\n\n                    </div>\n\n                    <div id=\"gui_controls\">\n\n                        <div id=\"gui_top\" class=\"z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top0 display_none opacity_0\">\n                           <div id=\"gui_top_container\" class=\"\">\n                           </div>\n                           <div id=\"hover_item_top\" class=\"position_relative float_left height_100 width_6025 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"logo_type\" class=\"\">\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_house_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div id=\"gui_bottom\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top0 display_none opacity_0\">\n                           <div id=\"gui_bottom_container\" class=\"\">\n                           </div>\n                           <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_close_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_min_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_bottom\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div id=\"gui_left\" class=\"z_index_6 width_6025vw float_left position_fixed top_0 height_100 transform_translate3d_left0 display_none opacity_0\">\n                           <div id=\"gui_left_container\" class=\"\">\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div id=\"gui_right\" class=\"z_index_6 width_6025vw float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left0 display_none opacity_0\">\n                           <div id=\"gui_right_container\" class=\"\">\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n\n                    </div>\n\n                    <div id=\"modals\" class=\"\">\n\n                        <div id=\"modal_nav_top\" class=\"z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top0 display_none opacity_0\">\n                           <div id=\"modal_nav_top_container\" class=\"\">\n                           </div>\n                           <div id=\"hover_item_top\" class=\"position_relative float_left height_100 width_6025 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"logo_type\" class=\"\">\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_house_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 \">\n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div id=\"modal_nav_bottom\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top0 display_none opacity_0\">\n                           <div id=\"modal_nav_bottom_container\" class=\"\">\n                           </div>\n                           <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_close_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_min_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item_bottom\" class=\"position_relative float_left height_100 width_20 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div id=\"modal_nav_left\" class=\"z_index_6 width_6025vw float_left position_fixed top_0 height_100 transform_translate3d_left0 display_none opacity_0\">\n                           <div id=\"modal_nav_left_container\" class=\"\">\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div id=\"modal_nav_right\" class=\"z_index_6 width_6025vw float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left0 display_none opacity_0\">\n                           <div id=\"modal_nav_right_container\" class=\"\">\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                           <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 \">\n                              \n                              <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                    <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                                 </div>\n                              </div>\n\n                              <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                                 <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n\n                        <div id=\"component_app_modal_element_pop_top\" class=\"position_fixed transform_translate3d_top0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0 \">\n\n                            <div id=\"component_here\" class=\"position_absolute bottom_0 left_0 calc_25vh margin_1205vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1\">\n                                <div class=\"position_relative width_100 float_left\">\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n                                </div>\n                            </div>\n\n                        </div>\n                        <div id=\"component_app_modal_element_pop_bottom\" class=\"position_fixed transform_translate3d_top0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0 \">\n\n                            <div id=\"component_here\" class=\"position_absolute bottom_0 left_0 calc_25vh margin_1205vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1\">\n                                <div class=\"position_relative width_100 float_left\">\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n                                </div>\n                            </div>\n\n                        </div>\n                        <div id=\"component_app_modal_element_pop_left\" class=\"position_fixed transform_translate3d_left0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0 \">\n\n                            <div id=\"component_app_modal_element_pop_left_style\" class=\"position_absolute bottom_0 left_0 top_0 right_0 calc_25vh margin_auto float_right display opacity_1 bg_white border_01vw_black\">\n                                <div id=\"component_app_modal_element_pop_left_component_here\" class=\"position_absolute bottom_0 left_0 top_0 right_0 calc_02vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1 bg_white\">\n                                </div>\n                            </div>\n\n                            <div class=\"position_absolute bottom_0 left_0 width_25 height_25\">\n                                <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_100 margin_auto\"></div>\n                            </div>\n\n                        </div>\n                        <div id=\"component_app_modal_element_pop_right\" class=\"position_fixed transform_translate3d_left0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0 \">\n\n                            <div id=\"component_here\" class=\"position_absolute bottom_0 left_0 calc_25vh margin_1205vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1\">\n                                <div class=\"position_relative width_100 float_left\">\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div id=\"component_app_modal_element_page_top\" class=\"position_fixed transform_translate3d_top0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0\">\n                        </div>\n                        <div id=\"component_app_modal_element_page_bottom\" class=\"position_fixed transform_translate3d_top0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0\">\n                        </div>\n                        <div id=\"component_app_modal_element_page_left\" class=\"position_fixed transform_translate3d_left0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0\">\n                        </div>\n                        <div id=\"component_app_modal_element_page_right\" class=\"position_fixed transform_translate3d_left0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0\">\n                        </div>\n\n                    </div>\n                ");
      document.getElementById('scrollable').addEventListener('scroll', function (event) {
        events.handle_Function_Scroll(event);
        Handle_get_state_from_events();
      });
      document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {
        //alert('going gui_interaction_button_1')
        _handle_Route('local_user_check');
      }); // filter by title

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
          //alert('element_login');
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

      ; // create

      if (document.getElementById('element_addRoster') != null) {
        document.getElementById('element_addRoster').addEventListener('click', function (event) {
          addListings('roster');
        });
      }

      ; // inital firebase check

      handle_refresh_fire_data();
      handle_repeated_fire_data_validation; // inital gui

      Handle_ui_reset();
      setTimeout(function () {
        state.ui.gui.top.transform = false;
        state.ui.gui.top.display = true;
        Handle_ui();
      }, 1000);
      setTimeout(function () {
        state.ui.modal.nav.top.transform = false;
        state.ui.modal.nav.top.display = true;
        state.ui.modal.pop.top.transform = false;
        state.ui.modal.pop.top.display = true;
        Handle_ui();
      }, 2000);
    }, 0);

    if (document.getElementById('time_onload') != null) {
      document.getElementById('time_onload').innerHTML = state.data.time;
    }

    ; // functions fired at "home"

    Handle_transform();
    Handle_display_with_delay();
    functions.HANDLE_looping_logo_mark();
  }

  ;

  if (state.app.url == 'local_user_check') {
    if (first_time_user == true) {
      //alert('first_time_user == true');
      document.getElementById('vr_branding').innerHTML = "\n\n                    <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                        <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                        <div id=\"row-logo-mark-type_filler\"></div>\n                        \n                        <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"gui_interaction_button_1_filler\"></div>\n                        </div>\n                    </div>\n                    ";
      document.getElementById('fold_interaction').innerHTML = "\n\n                    <div id=\"first_time_user_true\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                        <div id=\"row-logo-mark_filler\"></div>\n                        <div id=\"row_logo_mark_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                        \n                        <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto\"></div>\n                        </div>\n                    </div>\n\n                ";
      document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {
        //alert('next route from local_user_check: first_time_user == true');
        _handle_Route('local_user_check');
      });
    }

    ;

    if (first_time_user == false) {
      if (is_logged == true) {
        //alert('is_logged == true');
        document.getElementById('vr_branding').innerHTML = "\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div id=\"row-logo-mark-type_filler\"></div>\n                            \n                            <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1_filler\"></div>\n                            </div>\n                        </div>\n\n                    ";
        document.getElementById('fold_interaction').innerHTML = "\n\n                        <div id=\"is_logged_true\">\n                            <div class=\"position_absolute top_0 right_0 calc_25vw_height calc_25vw_width margin_auto\">\n\n                                <div class=\"gui_logo_mark position_relative height_50 width_100 float_left margin_auto\"></div>                                \n                            \n                                <div class=\"position_relative height_50 width_100 float_left margin_auto\">\n                                    <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_relative float_left width_100 height_100 margin_auto\"></div>\n                                </div>\n                            \n                            </div>\n\n                            <div id=\"element_scroll_y_scrollbar_styled\" class=\"position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1\">\n                                <div class=\"position_relative width_100 float_left\">\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n                                </div>\n                            </div>\n\n                            <div class=\"position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow\">\n                                <div class=\"position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n                                    <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                    \n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    "; // events fro route: home

        if (document.getElementById('gui_interaction_button_1') != null) {
          document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {//alert('next route from local_user_check: is_logged == true');
          });
        }

        ;
      }

      ;

      if (is_logged == false) {
        //alert('is_logged == false');
        if (localStorage.username == "null_local_user") {
          //alert('you are null_local_user, corrent? please sign up');
          document.getElementById('vr_branding').innerHTML = "\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div id=\"row-logo-mark-type_filler\"></div>\n                            \n                            <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1_filler\"></div>\n                            </div>\n                        </div>\n                        ";
          document.getElementById('fold_interaction').innerHTML = "\n\n                            <div id=\"is_logged_false\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"row-logo-mark_filler\"></div>\n                                <div id=\"row_logo_mark_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                                \n                                <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                    <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto\"></div>\n                                </div>\n                            </div>\n\n                        ";
          document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {//alert('next route from local_user_check: is_logged == true');
          });
        }

        ;

        if (localStorage.username != "null_local_user") {
          //alert('you are ' + localStorage.username + ', corrent? please sign back in.');
          document.getElementById('vr_branding').innerHTML = "\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div id=\"row-logo-mark-type_filler\"></div>\n                            \n                            <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1_filler\"></div>\n                            </div>\n                        </div>\n                        ";
          document.getElementById('fold_interaction').innerHTML = "\n\n                            <div id=\"is_logged_false\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"row-logo-mark_filler\"></div>\n                                <div id=\"row_logo_mark_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                                \n                                <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                    <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto\"></div>\n                                </div>\n                            </div>\n\n                        ";
          document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {//alert('next route from local_user_check: is_logged == true');
          });
        }

        ;
      }

      ;
    }

    ;
    alert('local_user_check');
    window.scrollTo(0, 0);
  }

  ;

  if (state.app.url == 'users') {
    setTimeout(function () {
      document.getElementById('fold').innerHTML = "\n\n                    <div id=\"fold_interaction\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                        <div id=\"row-logo-mark_filler\"></div>\n                        <div id=\"row_logo_mark_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                        \n                        <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto\"></div>\n                        </div>\n                    </div>\n\n                ";
      document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {
        _handle_Route('local_user_check');
      });
    });
  }

  ;

  if (state.app.url == 'users_start') {
    setTimeout(function () {
      document.getElementById('fold').innerHTML = "\n                    \n                        <div id=\"vr_interaction\" class=\"\">\n                            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"logo_mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                                <div id=\"row-logo-mark-type_filler\"></div>\n                                \n                                <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                    <div id=\"gui_interaction_button_1_filler\"></div>\n                                </div>\n                            </div>\n\n                            <div id=\"element_scroll_y_scrollbar_styled\" class=\"position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1\">\n                                <div class=\"position_relative width_100 float_left\">\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n                                </div>\n                            </div>\n\n                            <div class=\"position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow\">\n                                <div class=\"position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n                                    <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                    \n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    ";
      document.getElementById('vr_interaction').addEventListener('click', function (event) {
        _handle_Route('local_user_check');
      });
    });
  }

  ; // back to fold for page change

  window.scrollTo(0, 0);
};

var Handle_ui_reset = function Handle_ui_reset() {
  // gui
  state.ui.gui.top.transform = true;
  state.ui.gui.top.display = false;
  state.ui.gui.bottom.transform = true;
  state.ui.gui.bottom.display = false;
  state.ui.gui.left.transform = true;
  state.ui.gui.left.display = false;
  state.ui.gui.right.transform = true;
  state.ui.gui.right.display = false;
  state.ui.modal.nav.top.transform = true;
  state.ui.modal.nav.top.display = false;
  state.ui.modal.nav.bottom.transform = true;
  state.ui.modal.nav.bottom.display = false;
  state.ui.modal.nav.left.transform = true;
  state.ui.modal.nav.left.display = false;
  state.ui.modal.nav.right.transform = true;
  state.ui.modal.nav.right.display = false;
  state.ui.modal.page.top.transform = true;
  state.ui.modal.page.top.display = false;
  state.ui.modal.page.bottom.transform = true;
  state.ui.modal.page.bottom.display = false;
  state.ui.modal.page.left.transform = true;
  state.ui.modal.page.left.display = false;
  state.ui.modal.page.right.transform = true;
  state.ui.modal.page.right.display = false;
  state.ui.modal.pop.top.transform = true;
  state.ui.modal.pop.top.display = false;
  state.ui.modal.pop.bottom.transform = true;
  state.ui.modal.pop.bottom.display = false;
  state.ui.modal.pop.left.transform = true;
  state.ui.modal.pop.left.display = false;
  state.ui.modal.pop.right.transform = true;
  state.ui.modal.pop.right.display = false;
};

var Handle_data_value = function Handle_data_value() {
  // ux
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
}; // placeholder data


var noise_frame = 0;
var chracter_frame = 0;

var handle_Motion = function handle_Motion() {
  // framerate loop
  (function () {
    var interval = 0;
    setInterval(function () {
      state.motion.frame += 1;
      Handle_data_value();

      if (document.getElementById('row_accent_noise') != null) {
        document.getElementById('row_accent_noise').innerHTML = '';
        document.getElementById('row_accent_noise').classList = 'accent_noise_' + noise_frame + ' position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 ';

        if (noise_frame == 4) {
          noise_frame = 0;
        }

        ;
        noise_frame += 1;
      }

      ;

      if (document.getElementById('character') != null) {
        document.getElementById('character').innerHTML = '';

        if (state.ui.interaction.player_1.angle == 'left') {
          document.getElementById('character').classList = 'gui_character_left_' + chracter_frame + ' position_absolute margin_auto width_100 height_100 ';
        }

        ;

        if (state.ui.interaction.player_1.angle == 'right') {
          document.getElementById('character').classList = 'gui_character_right_' + chracter_frame + ' position_absolute margin_auto width_100 height_100 ';
        }

        ;

        if (chracter_frame == 4) {
          chracter_frame = 0;
        }

        ;
        chracter_frame += 1;
      }

      ;

      if (document.getElementById('enemy') != null) {
        document.getElementById('enemy').innerHTML = '';
        document.getElementById('enemy').classList = 'gui_character_' + chracter_frame + ' position_absolute margin_auto width_100 height_100 ';

        if (chracter_frame == 4) {
          chracter_frame = 0;
        }

        ;
        chracter_frame += 1;
      }

      ; // set positions
      // character

      if (document.getElementById('container_character') != null) {
        var container_character = document.getElementById('container_character');
        container_character.style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.interaction.player_1.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.clientX * state.ux.dimensions.width8 + 'px;';
      }

      ; // enemy

      if (document.getElementById('container_enemy') != null) {
        var container_enemy = document.getElementById('container_enemy');
        container_enemy.style = 'height: ' + state.ui.interaction.player_2.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_2.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.interaction.player_2.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_2.clientX * state.ux.dimensions.width8 + 'px;';
      }

      ; // vr

      if (document.getElementById('vr_mg') != null) {
        document.getElementById('vr_mg').style = "transform: translate3d(" + state.ui.interaction.vr.clientX * 100 + "%, " + state.ui.interaction.vr.clientY * 100 + "%, 0);";
      }

      ;
    }, 1000 / state.motion.framerate);
  })(); // 1 sec loop


  (function () {
    var interval = 0;
    setInterval(function () {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var date = new Date();
      state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
      state.motion.duration++;
      console.log('duration: ' + state.motion.duration); // automation

      if (state.ui.interaction.player_2.clientX == 0) {
        state.ui.interaction.player_2.clientX_auto = true;
      }

      ;

      if (state.ui.interaction.player_2.clientX == 7) {
        state.ui.interaction.player_2.clientX_auto = false;
      }

      ;

      if (state.ui.interaction.player_2.clientY == 0) {
        state.ui.interaction.player_2.clientY_auto = true;
      }

      ;

      if (state.ui.interaction.player_2.clientY == 7) {
        state.ui.interaction.player_2.clientY_auto = false;
      }

      ; // motion

      if (state.ui.interaction.player_2.clientX_auto == true) {
        state.ui.interaction.player_2.clientX += 1;
      }

      ;

      if (state.ui.interaction.player_2.clientX_auto == false) {
        state.ui.interaction.player_2.clientX -= 1;
      }

      ;

      if (state.ui.interaction.player_2.clientY_auto == true) {
        state.ui.interaction.player_2.clientY += 1;
      }

      ;

      if (state.ui.interaction.player_2.clientY_auto == false) {
        state.ui.interaction.player_2.clientY -= 1;
      }

      ;
    }, 1000);
  })();
};

var Handle_return_state = function Handle_return_state() {
  return state;
};

var Handle_display_with_delay = function Handle_display_with_delay() {
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

var Handle_transform = function Handle_transform() {
  for (var i = 0; i < components.length; i++) {
    // console.log(components[i].component);
    // console.log(components[i].component_state);
    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions.default.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
    }

    ;
  }

  ;
};

var Handle_get_state_from_events = function Handle_get_state_from_events() {
  components = _components.default.get_components_handled();
  state = events.Handle_return_state_from_events();
  console.log(state);
  console.log(components);
  Handle_transform();
  Handle_display_with_delay();
};

var Handle_ui_from_functions = function Handle_ui_from_functions() {
  components = _components.default.get_components_handled();
  state = functions.Handle_return_state_from_functions();
  Handle_transform();
  Handle_display_with_delay();
};

var Handle_ui = function Handle_ui() {
  components = _components.default.get_components_handled();
  state = functions.Handle_return_state_from_functions();
  Handle_transform();
  Handle_display_with_delay();
}; // events


root.addEventListener('keydown', function (event) {
  events.handle_Function_Key_Press(event);
  console.log('Handle_get_state_from_events');
  Handle_get_state_from_events();
});
root.addEventListener('keyup', function (event) {
  events.handle_Function_Key_Up(event);
  console.log('Handle_get_state_from_events');
  Handle_get_state_from_events();
});
root.addEventListener('mousemove', function (event) {
  events.handle_Function_Mouse_Move(event);
  Handle_get_state_from_events();
});
root.addEventListener('mouseenter', function (event) {
  events.handle_Function_Mouse_Enter(event);
  Handle_get_state_from_events();
});
root.addEventListener('mouseleave', function (event) {
  events.handle_Function_Mouse_Leave(event);
  Handle_get_state_from_events();
});
root.addEventListener('mouseup', function (event) {
  events.handle_Function_Mouse_Up(event);
  Handle_get_state_from_events();
});
root.addEventListener('mousedown', function (event) {
  events.handle_Function_Mouse_Down(event);
  Handle_get_state_from_events();
});
root.addEventListener('touchmove', function (event) {
  events.handle_Function_Touch_Move(event);
  Handle_get_state_from_events();
});
root.addEventListener('touchstart', function (event) {
  events.handle_Function_Touch_Start(event);
  Handle_get_state_from_events();
});
root.addEventListener('touchend', function (event) {
  events.handle_Function_Touch_End(event);
  Handle_get_state_from_events();
});

window.onload = function () {
  state.app.url = '/';

  _handle_Route('/');

  handle_Motion();
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
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date();
  state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
};

window.onresize = function () {
  events.handle_Function_Device_Resize(event);
  console.log('Handle_get_state_from_events');
  Handle_get_state_from_events();
};

window.ondevicemotion = function (event) {
  events.handle_Function_Device_Motion(event);
  console.log('Handle_get_state_from_events');
  Handle_get_state_from_events();
};

window.ondeviceorientation = function (event) {
  state.events.motion.event_alpha = event.alpha;
  state.events.motion.event_beta = event.beta;
  state.events.motion.event_gamma = event.gamma;
};

window.onorientationchange = function () {
  state.events.motion.orientation_string = orientation;
};

window.onbeforeunload = function () {
  alert('leaving');
};

console.log(state);

_state.default.from_Import();

var _default = {
  Handle_return_state: Handle_return_state,
  handle_Route: _handle_Route,
  Handle_ui_from_functions: Handle_ui_from_functions,
  Handle_ui_reset: Handle_ui_reset
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/state":"imports/state.js","./imports/functions":"imports/functions.js","./imports/events":"imports/events.js","./imports/components":"imports/components.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55337" + '/');

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
//# sourceMappingURL=/now.e31bb0bc.map