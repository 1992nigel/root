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

// Imports
var Generate_new_fragment = document.createDocumentFragment();

var Generate_new_div = function Generate_new_div(id_String, class_String, data_Object) {
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
  var element = document.createElement('li');

  if (data_Object.child == 'library') {
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
  }

  ;

  if (data_Object.child == 'roster') {
    if (data_Object.username != null) {
      element.setAttribute("id", data_Object.username);
    }

    ;

    if (data_Object.username != null) {
      element.classList = data_Object.username;
    }

    ;

    if (data_Object != null) {
      element.innerHTML = "\n                  ".concat('child: ' + data_Object.child, "\n                  ").concat('username: ' + data_Object.username, "\n                  ").concat('password: ' + data_Object.password, "\n                  ").concat('time: ' + data_Object.time, "\n                  ").concat('likes: ' + data_Object.likes, "\n                  ").concat('views: ' + data_Object.views, "\n              ");
    }

    ;
  }

  ;

  if (data_Object.child == 'stream') {
    if (data_Object.username != null) {
      element.setAttribute("id", data_Object.username);
    }

    ;

    if (data_Object.username != null) {
      element.classList = data_Object.username;
    }

    ;

    if (data_Object != null) {
      element.innerHTML = "\n                  ".concat('<div>', "\n                  ", 'child: ' + data_Object.child, "\n                  ").concat('id: ' + data_Object.id, "\n                  ").concat('likes: ' + data_Object.likes, "\n                  ").concat('views: ' + data_Object.views, "\n                  ").concat('username: ' + data_Object.username, "\n                  ").concat('time: ' + data_Object.time, "\n                  ", '</div>', "\n                  ", '<div>', "\n                  ", '<div>like</div>', "\n                  ", '<div>dislike</div>', "\n                  ", '<div>view</div>', "\n                  ", '</div>', "\n              ");
    }

    ; // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    element.children[1].children[0].addEventListener("click", function (event) {
      _index.default.firebase_like_Listings(data_Object.id);
    });
    element.children[1].children[1].addEventListener("click", function (event) {
      _index.default.firebase_dislike_Listings(data_Object.id);
    });
    element.children[1].children[2].addEventListener("click", function (event) {
      _index.default.firebase_view_Listings(data_Object.id);
    });
    /*
    element.children[1].children[3].addEventListener("click", function(event) {
        from_index.deleteWhoListings(data_Object.child, data_Object.id);
    });
    */
  }

  ;
  return element;
};

var _default = {
  Generate_new_fragment: Generate_new_fragment,
  Generate_new_div: Generate_new_div,
  Generate_new_li_post: Generate_new_li_post
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
  var data = "\n  <div id=\"element_lead\" class=\"position_relative width_100vw height_100vh margin_auto\">\n      " + x + "\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_fold = function element_fold(x) {
  var data = "\n  <div id=\"element_fold\" class=\"position_relative width_100vw margin_auto bg_grey color_white\">\n      " + x + "\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_modal_gradient_right = function element_modal_gradient_right() {
  var data = "\n  <div id=\"element_modal_gradient_right\" class=\"transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto\">\n\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var _default = {
  element_lead: element_lead,
  element_fold: element_fold,
  element_modal_gradient_right: element_modal_gradient_right
};
exports.default = _default;
},{"./functions":"imports/functions.js"}],"imports/events.js":[function(require,module,exports) {
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
      _index.default.handle_Route('back_home');
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

var _events = _interopRequireDefault(require("./imports/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var state = _state.default.default_state;
var root = document.getElementById('root');
var scrollable = document.getElementById('scrollable');
var status = document.getElementById('status'); // Initialization

var config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
};
state.ux.platform.is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
state.ux.platform.is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var firebase_data_has_been_updated_and_is_now_writeable;
var firebase_has_responsed_with_this_updated_data;
var site_first_load = true;
var newly_created_ID = 0; // Functions

firebase.initializeApp(config); // 1/sec loop

(function () {
  var interval = 0;
  setInterval(function () {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
    state.motion.duration++;
    console.log('duration: ' + state.motion.duration);
  }, 1000);
})();

state.data.onload_time = state.data.time; // 24/fps loop

(function () {
  var interval = 0;
  setInterval(function () {
    if (document.getElementById('container_character') != null) {
      var container_character = document.getElementById('container_character');
      container_character.style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.interaction.player_1.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.clientX * state.ux.dimensions.width8 + 'px;';
    }

    ; //stage
    // vr

    if (document.getElementById('vr_mg') != null) {
      document.getElementById('vr_mg').style = "transform: translate3d(" + state.ui.interaction.vr.clientX * 100 + "%, " + state.ui.interaction.vr.clientY * 100 + "%, 0);";
    }

    ;
    state.motion.frame += 1; //console.log(state.motion.frame)
  }, 1000 / state.motion.framerate);
})();

var filtered_library_by_title = [];

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
      var parts = location.pathname.split('/'); //handle_Route('local_user_check');
      //alert(parts[1]);

      return;
    }

    ;

    if (parts[1] == '' || parts[1] == 'home') {
      if (parts[1] == '') {
        setTimeout(function () {//alert('you are "home" by default ' + parts[1]); // home
        }, 2500);
      }

      ;

      if (parts[1] == 'home') {
        setTimeout(function () {//alert('you are actually home: ' + parts[1]); // home
        }, 2500);
      }

      ;
    }

    ;

    if (parts[2] != null) {//root.innerHTML = (parts[2]);
    }

    ; // back to fold for page change

    window.scrollTo(0, 0);
    console.log('done routing');
  }, 0);
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

var handle_empty_list = function handle_empty_list() {
  filtered_library_by_title = [];

  if (document.getElementById('element_ol_firebase_stream') != null) {
    document.getElementById('element_ol_firebase_stream').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_feature') != null) {
    document.getElementById('element_ol_firebase_feature').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_pagination') != null) {
    document.getElementById('element_ol_firebase_pagination').innerHTML = '';
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

  if (document.getElementById('element_ol_firebase_validated_user_library') != null) {
    document.getElementById('element_ol_firebase_validated_user_library').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_time_up') != null) {
    document.getElementById('element_ol_firebase_sorted_library_time_up').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_time_down') != null) {
    document.getElementById('element_ol_firebase_sorted_library_time_down').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_likes_up') != null) {
    document.getElementById('element_ol_firebase_sorted_library_likes_up').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_likes_down') != null) {
    document.getElementById('element_ol_firebase_sorted_library_likes_down').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_views_up') != null) {
    document.getElementById('element_ol_firebase_sorted_library_views_up').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_views_down') != null) {
    document.getElementById('element_ol_firebase_sorted_library_views_down').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_title_up') != null) {
    document.getElementById('element_ol_firebase_sorted_library_title_up').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_title_down') != null) {
    document.getElementById('element_ol_firebase_sorted_library_title_down').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_random_tags') != null) {
    document.getElementById('element_ol_firebase_sorted_library_random_tags').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_tags') != null) {
    document.getElementById('element_ol_firebase_sorted_library_tags').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library_authors') != null) {
    document.getElementById('element_ol_firebase_sorted_library_authors').innerHTML = '';
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
  return filtered_library_by_title.sort(find_sort(x));
};

var sorted_library_time_up = function sorted_library_time_up(x) {
  return filtered_library_by_title.sort(find_sort('timeup'));
};

var sorted_library_time_down = function sorted_library_time_down(x) {
  return filtered_library_by_title.sort(find_sort('timedown'));
};

var sorted_library_views_up = function sorted_library_views_up(x) {
  return filtered_library_by_title.sort(find_sort('viewsup'));
};

var sorted_library_views_down = function sorted_library_views_down(x) {
  return filtered_library_by_title.sort(find_sort('viewsdown'));
};

var sorted_library_likes_up = function sorted_library_likes_up(x) {
  return filtered_library_by_title.sort(find_sort('likesup'));
};

var sorted_library_likes_down = function sorted_library_likes_down(x) {
  return filtered_library_by_title.sort(find_sort('likesdown'));
};

var sorted_library_title_up = function sorted_library_title_up(x) {
  return filtered_library_by_title.sort(find_sort('titleup'));
};

var sorted_library_title_down = function sorted_library_title_down(x) {
  return filtered_library_by_title.sort(find_sort('titledown'));
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

        ; // render stream

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          console.log('sorted_library(state.data.sort)[i]');
          console.log(sorted_library(state.data.sort)[i]);

          if (sorted_library(state.data.sort)[i].child == 'stream') {
            document.getElementById('element_ol_firebase_stream').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ;
        document.getElementById('element_ol_firebase_feature').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', state.app.feature_posts_limit))); // render sort

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          console.log('sorted_library(state.data.sort)[i]');
          console.log(sorted_library(state.data.sort)[i]);

          if (i <= state.app.feature_posts_limit) {
            document.getElementById('element_ol_firebase_feature').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ;
        document.getElementById('element_ol_firebase_pagination').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', 'posts_start: ' + state.app.posts_start)));
        document.getElementById('element_ol_firebase_pagination').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', 'posts_limit: ' + state.app.posts_limit))); // render pagination sort

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          console.log('sorted_library(state.data.sort)[i]');
          console.log(sorted_library(state.data.sort)[i]);

          if (i >= state.app.posts_start && i <= state.app.posts_limit) {
            document.getElementById('element_ol_firebase_pagination').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render all sort

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          console.log('sorted_library(state.data.sort)[i]');
          console.log(sorted_library(state.data.sort)[i]);
          document.getElementById('element_ol_firebase_all').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
        }

        ; // render sorted_library_time_up

        for (var i = 0; i < sorted_library_time_up(state.data.sort).length; i++) {
          console.log('sorted_library_time_up(state.data.sort)[i]');
          console.log(sorted_library_time_up(state.data.sort)[i]);

          if (sorted_library_time_up(state.data.sort)[i].child == 'library') {
            document.getElementById('element_ol_firebase_sorted_library_time_up').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render sorted_library_time_down

        for (var i = 0; i < sorted_library_time_down(state.data.sort).length; i++) {
          console.log('sorted_library_time_down(state.data.sort)[i]');
          console.log(sorted_library_time_down(state.data.sort)[i]);

          if (sorted_library_time_down(state.data.sort)[i].child == 'library') {
            document.getElementById('element_ol_firebase_sorted_library_time_down').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render sorted_library_likes_up

        for (var i = 0; i < sorted_library_likes_up(state.data.sort).length; i++) {
          console.log('sorted_library_likes_up(state.data.sort)[i]');
          console.log(sorted_library_likes_up(state.data.sort)[i]);

          if (sorted_library_likes_up(state.data.sort)[i].child == 'library') {
            document.getElementById('element_ol_firebase_sorted_library_likes_up').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render sorted_library_likes_down

        for (var i = 0; i < sorted_library_likes_down(state.data.sort).length; i++) {
          console.log('sorted_library_likes_down(state.data.sort)[i]');
          console.log(sorted_library_likes_down(state.data.sort)[i]);

          if (sorted_library_likes_down(state.data.sort)[i].child == 'library') {
            document.getElementById('element_ol_firebase_sorted_library_likes_down').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render sorted_library_views_up

        for (var i = 0; i < sorted_library_views_up(state.data.sort).length; i++) {
          console.log('sorted_library_views_up(state.data.sort)[i]');
          console.log(sorted_library_views_up(state.data.sort)[i]);

          if (sorted_library_views_up(state.data.sort)[i].child == 'library') {
            document.getElementById('element_ol_firebase_sorted_library_views_up').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render sorted_library_views_down

        for (var i = 0; i < sorted_library_views_down(state.data.sort).length; i++) {
          console.log('sorted_library_views_down(state.data.sort)[i]');
          console.log(sorted_library_views_down(state.data.sort)[i]);

          if (sorted_library_views_down(state.data.sort)[i].child == 'library') {
            document.getElementById('element_ol_firebase_sorted_library_views_down').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render sorted_library_title_up

        for (var i = 0; i < sorted_library_title_up(state.data.sort).length; i++) {
          console.log('sorted_library_title_up(state.data.sort)[i]');
          console.log(sorted_library_title_up(state.data.sort)[i]);

          if (sorted_library_title_up(state.data.sort)[i].child == 'library') {
            document.getElementById('element_ol_firebase_sorted_library_title_up').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render sorted_library_title_down

        for (var i = 0; i < sorted_library_title_down(state.data.sort).length; i++) {
          console.log('sorted_library_title_down(state.data.sort)[i]');
          console.log(sorted_library_title_down(state.data.sort)[i]);

          if (sorted_library_title_down(state.data.sort)[i].child == 'library') {
            document.getElementById('element_ol_firebase_sorted_library_title_down').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ;
        alert('tag selected from users "liked" hashtags: ' + (Math.floor(Math.random() * state.app.tags.length) + 1));
        document.getElementById('element_ol_firebase_sorted_library_random_tags').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', '<h3>element_ol_firebase_sorted_library_random_tags: every liked post enters the hashtags of those post into a lottery tags the made up your "recommendations"! Easy huh<h3>')));

        var shuffle_array = function shuffle_array(array) {
          var currentIndex = array.length,
              temporaryValue,
              randomIndex; // While there remain elements to shuffle...

          while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1; // And swap it with the current element.

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }; // Used like so


        var shuffled_tags = shuffle_array(state.app.tags);
        var shuffled_library = shuffle_array(filtered_library_by_title);
        console.log(shuffled_tags); // render tag included

        for (var iii = 0; iii < shuffled_tags.length; iii++) {
          alert(shuffled_tags[iii]); // render tag included

          (function () {
            for (var i = 0; i < shuffled_library.length; i++) {
              if (shuffled_library[i].child == 'library') {
                var render_it = false;
                var post = shuffled_library[i];

                for (var ii = 0; ii < post.tags.length; ii++) {
                  if (shuffled_tags[iii] == post.tags[ii]) {
                    render_it = true;
                  }

                  ;
                }

                ;

                if (render_it == true) {
                  document.getElementById('element_ol_firebase_sorted_library_random_tags').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i]))); // back to shuffled_tags

                  return;
                }

                ;
              }

              ;
            }

            ;
          })();
        }

        ; // render tag included

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          console.log('sorted_library(state.data.sort)[i]');
          console.log(sorted_library(state.data.sort)[i]);

          if (sorted_library(state.data.sort)[i].child == 'library') {
            var render_it = false;
            var post = sorted_library(state.data.sort)[i];

            for (var ii = 0; ii < post.tags.length; ii++) {
              if (state.app.tag == post.tags[ii]) {
                render_it = true;
              }

              ;
            }

            ;

            if (render_it == true) {
              document.getElementById('element_ol_firebase_sorted_library_tags').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
            }

            ;
          }

          ;
        }

        ; // render author included

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          console.log('sorted_library(state.data.sort)[i]');
          console.log(sorted_library(state.data.sort)[i]);

          if (sorted_library(state.data.sort)[i].child == 'library') {
            var _render_it = false;
            var _post = sorted_library(state.data.sort)[i];

            for (var ii = 0; ii < _post.authors.length; ii++) {
              if (state.app.author == _post.authors[ii]) {
                _render_it = true;
              }

              ;
            }

            ;

            if (_render_it == true) {
              document.getElementById('element_ol_firebase_sorted_library_authors').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
            }

            ;
          }

          ;
        }

        ; // filtered library

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'library') {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_all_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // filtered roster

        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
          if (sorted_library(state.data.sort)[i].child == 'roster') {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_all_users').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(sorted_library(state.data.sort)[i])));
          }

          ;
        }

        ; // validated user

        if (validated_user.id != null) {
          document.getElementById('element_ol_firebase_validated_user').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(validated_user))); // render author included

          for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
            console.log('sorted_library(state.data.sort)[i]');
            console.log(sorted_library(state.data.sort)[i]);

            if (sorted_library(state.data.sort)[i].child == 'library') {
              var _render_it2 = false;
              var _post2 = sorted_library(state.data.sort)[i];

              for (var ii = 0; ii < _post2.authors.length; ii++) {
                if (validated_user.username == _post2.authors[ii]) {
                  _render_it2 = true;
                }

                ;
              }

              ;

              if (_render_it2 == true) {
                document.getElementById('element_ol_firebase_validated_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
              }

              ;
            }

            ;
          }

          ; // render author included

          for (var iii = 0; iii < validated_user.followers.length; iii++) {
            document.getElementById('element_ol_firebase_validated_user_library_followers').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', validated_user.followers[ii])));

            for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
              console.log('sorted_library(state.data.sort)[i]');
              console.log(sorted_library(state.data.sort)[i]);

              if (sorted_library(state.data.sort)[i].child == 'library') {
                var _render_it3 = false;
                var _post3 = sorted_library(state.data.sort)[i];
                var current_follow = validated_user.followers[iii];

                for (var ii = 0; ii < _post3.authors.length; ii++) {
                  if (current_follow == _post3.authors[ii]) {
                    _render_it3 = true;
                  }

                  ;
                }

                ;

                if (_render_it3 == true) {
                  document.getElementById('element_ol_firebase_validated_user_library_followers').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
                }

                ;
              }

              ;
            }

            ;
          }

          ; // render author included

          for (var iii = 0; iii < validated_user.follows.length; iii++) {
            document.getElementById('element_ol_firebase_validated_user_library_follows').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', validated_user.follows[ii])));

            for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
              console.log('sorted_library(state.data.sort)[i]');
              console.log(sorted_library(state.data.sort)[i]);

              if (sorted_library(state.data.sort)[i].child == 'library') {
                var _render_it4 = false;
                var _post4 = sorted_library(state.data.sort)[i];
                var _current_follow = validated_user.follows[iii];

                for (var ii = 0; ii < _post4.authors.length; ii++) {
                  if (_current_follow == _post4.authors[ii]) {
                    _render_it4 = true;
                  }

                  ;
                }

                ;

                if (_render_it4 == true) {
                  document.getElementById('element_ol_firebase_validated_user_library_follows').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
                }

                ;
              }

              ;
            }

            ;
          }

          ;
        }

        ; // not validated

        if (validated_user.id == null) {
          document.getElementById('element_ol_firebase_validated_user').innerHTML = "please sign in";
        }

        ;

        if (validated_user.id == null) {
          document.getElementById('element_ol_firebase_validated_user_library').innerHTML = "please sign in";
        }

        ;

        if (validated_user.id == null) {
          document.getElementById('element_ol_firebase_validated_user_library_followers').innerHTML = "please sign in";
        }

        ;

        if (validated_user.id == null) {
          document.getElementById('element_ol_firebase_validated_user_library_follows').innerHTML = "please sign in";
        }

        ; // newly created

        if (newly_created_ID != 0) {
          alert('newly_created_ID: ' + newly_created_ID);

          for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
            // local user matched
            if (state.data.firebase.gnougn.library[i].id == newly_created_ID) {
              alert('this was just made: ' + state.data.firebase.gnougn.library[i]);
            }
          }

          ;
        }

        ;
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
        //console.clear();
        //clearInterval(handle_repeated_fire_data_validation);
        setTimeout(function () {
          check_localStorage();
          handle_firebase_render_to_view(); //console.clear();

          console.log('contected!');
        }, 0);

        if (site_first_load == true) {
          //Handle_check_route('/home');
          site_first_load = false; //alert('first firebase load');
          //alert('first_time_user: ' + first_time_user);
          //alert('validated_user_is_logged: ' + validated_user_is_logged);

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

var Handle_return_state = function Handle_return_state() {
  return state;
};

var Handle_return_posts = function Handle_return_posts() {
  return sorted_library(state.data.sort);
};

var Handle_get_state_from_events = function Handle_get_state_from_events() {
  state = _events.default.Handle_return_state_from_events();
};

var handle_render = function handle_render(x) {
  if (x == 'home') {
    if (scrollable != null) {
      scrollable.appendChild(_elements.default.element_lead());
      scrollable.appendChild(_elements.default.element_fold("\n\n            <h2 class=\"width_100 float_left\">Activity(All|Followers|Following|You)</h2>\n            <h2 class=\"width_100 float_left\">Stream</h2>\n            <input id=\"create_stream\" type=\"text\" placeholder=\"create_stream\" class=\"width_100 float_left\" />\n            <div id=\"signal\">element_ol_firebase_stream: <div id=\"element_ol_firebase_stream\"></div></div>\n            <div id=\"element_addStream\" class=\"width_100 float_left\">element_addStream</div>\n\n            <h2 class=\"width_100 float_left\">Login</h2>\n            <input id=\"element_login_username\" type=\"text\" placeholder=\"element_login_username\" class=\"width_100 float_left\" />\n            <input id=\"element_login_password\" type=\"text\" placeholder=\"element_login_password\" class=\"width_100 float_left\" />\n            <div id=\"element_login\" class=\"width_100 float_left\">login</div>\n            <div id=\"element_logout\" class=\"width_100 float_left\">logout</div>\n\n            <h2 class=\"width_100 float_left\">Create User</h2>\n            <input id=\"create_user_username\" type=\"text\" placeholder=\"create_user_username\" class=\"width_100 float_left\" />\n            <input id=\"create_user_password\" type=\"text\" placeholder=\"create_user_password\" class=\"width_100 float_left\" />\n            <div id=\"element_addRoster\" class=\"width_100 float_left\">element_addRoster</div>\n\n            <h2 class=\"width_100 float_left\">Create Post</h2>\n            <input id=\"create_post_title\" type=\"text\" placeholder=\"create_post_title\" class=\"width_100 float_left\" />\n            <input id=\"create_post_tag\" type=\"text\" placeholder=\"create_post_tag\" class=\"width_100 float_left\" />\n            <div id=\"element_addListing\" class=\"width_100 float_left\">element_addListing</div>\n\n            <h2 class=\"width_100 float_left\">filter</h2>\n            <input id=\"element_input_filter\" type=\"text\" placeholder=\"element_input_filter\" class=\"width_100 float_left\" />\n\n            <h2 class=\"width_100 float_left\">Buttons</h2>\n            <div id=\"element_refresh\" class=\"width_100 float_left\">refresh</div>\n\n            <h2 class=\"width_100 float_left\">Blogs(All|Sorted|Filtered|Type|Format?)</h2>\n            <h2 class=\"width_100 float_left\">feature post</h2>\n            <div id=\"signal\">element_ol_firebase_feature: <div id=\"element_ol_firebase_feature\"></div></div>\n            <h2 class=\"width_100 float_left\">pagination</h2>\n            <h2 class=\"width_100 float_left\">post limit && post start</h2>\n            <div id=\"signal\">element_ol_firebase_pagination: <div id=\"element_ol_firebase_pagination\"></div></div>\n            <h2 class=\"width_100 float_left\">all</h2>\n            <div id=\"signal\">element_ol_firebase_all: <div id=\"element_ol_firebase_all\"></div></div>\n\n            <h2 class=\"width_100 float_left\">Type</h2>\n            <h2 class=\"width_100 float_left\">Blogs: Library Only</h2>\n            <div id=\"signal\">element_ol_firebase_all_library: <div id=\"element_ol_firebase_all_library\"></div></div>\n            <h2 class=\"width_100 float_left\">Blogs: Roster Only</h2>\n            <div id=\"signal\">element_ol_firebase_all_users: <div id=\"element_ol_firebase_all_users\"></div></div>\n\n            <h2 class=\"width_100 float_left\">Sorted</h2>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_time_up:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_time_up\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_time_down:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_time_down\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_views_up:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_views_up\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_views_down:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_views_down\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_likes_up:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_likes_up\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_likes_down:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_likes_down\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_title_up:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_title_up\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_title_down:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_title_down\"></div></div>\n\n            <h2 class=\"width_100 float_left\">Format</h2>\n\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_random_tags:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_random_tags\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_tags:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_tags\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_sorted_library_authors:\n                </h2>\n                <div id=\"element_ol_firebase_sorted_library_authors\"></div></div>\n\n            <h2 class=\"width_100 float_left\">Validated_user</h2>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_validated_user:\n                </h2>\n                <div id=\"element_ol_firebase_validated_user\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_validated_user_library:\n                </h2>\n                <div id=\"element_ol_firebase_validated_user_library\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_validated_user_library_follows:\n                </h2>\n                <div id=\"element_ol_firebase_validated_user_library_follows\"></div></div>\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    element_ol_firebase_validated_user_library_followers:\n                </h2>\n                <div id=\"element_ol_firebase_validated_user_library_followers\"></div></div>\n\n            <div id=\"signal\">\n                <h2 class=\"width_100 float_left\">\n                    event_route:\n                </h2>\n                <div id=\"event_route\">".concat('you are at: ' + state.app.url, "</div></div>\n\n            <h1>Platform</h1>\n            <div id=\"signal\">is_Desktop: <div id=\"is_Desktop\"></div></div>\n            <div id=\"signal\">is_Mobile: <div id=\"is_Mobile\"></div></div>\n            <div id=\"signal\">ux_dimensions_height: <div id=\"ux_dimensions_height\"></div></div>\n            <div id=\"signal\">ux_dimensions_width: <div id=\"ux_dimensions_width\"></div></div>\n            <div id=\"signal\">ux_browser_height: <div id=\"ux_browser_height\"></div></div>\n            <div id=\"signal\">ux_browser_width: <div id=\"ux_browser_width\"></div></div>\n            <div id=\"signal\">ux_screen_height: <div id=\"ux_screen_height\"></div></div>\n            <div id=\"signal\">ux_screen_width: <div id=\"ux_screen_width\"></div></div>\n\n            <h1>Device</h1>\n            <h2>Gravity</h2>\n            <div id=\"signal\">event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div></div>\n            <div id=\"signal\">event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div></div>\n            <div id=\"signal\">event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div></div>\n\n            <h2>VR</h2>\n            <div id=\"signal\">last_action: <div id=\"last_action\"></div></div>\n\n            <h2>Positions</h2>\n            <div id=\"signal\">event_alpha: <div id=\"event_alpha\"></div></div>\n            <div id=\"signal\">event_beta: <div id=\"event_beta\"></div></div>\n            <div id=\"signal\">event_gamma: <div id=\"event_gamma\"></div></div>\n\n            <h2>Orientation</h2>\n            <div id=\"signal\">event_portrait: <div id=\"event_portrait\"></div></div>\n            <div id=\"signal\">event_landscape: <div id=\"event_landscape\"></div></div>\n\n            <h2>Orientations</h2>\n            <div id=\"signal\">event_orientation: <div id=\"event_orientation\"></div></div>\n\n            <h2>Events</h2>\n            <div id=\"signal\">history_scroll: <div id=\"history_scroll\"></div></div>\n            <div id=\"signal\">history_mouse: <div id=\"history_mouse\"></div></div>\n            <div id=\"signal\">history_mouse_enter: <div id=\"history_mouse_enter\"></div></div>\n            <div id=\"signal\">history_mouse_leave: <div id=\"history_mouse_leave\"></div></div>\n            <div id=\"signal\">history_mouse_up: <div id=\"history_mouse_up\"></div></div>\n            <div id=\"signal\">history_mouse_down: <div id=\"history_mouse_down\"></div></div>\n            <div id=\"signal\">history_mouse_up_move: <div id=\"history_mouse_up_move\"></div></div>\n            <div id=\"signal\">history_mouse_down_move: <div id=\"history_mouse_down_move\"></div></div>\n            <div id=\"signal\">history_mouse_drag_drop: <div id=\"history_mouse_drag_drop\"></div></div>\n            <div id=\"signal\">history_key: <div id=\"history_key\"></div></div>\n            <div id=\"signal\">history_key_up: <div id=\"history_key_up\"></div></div>\n            <div id=\"signal\">history_touch: <div id=\"history_touch\"></div></div>\n            <div id=\"signal\">history_touch_start: <div id=\"history_touch_start\"></div></div>\n            <div id=\"signal\">history_touch_end: <div id=\"history_touch_end\"></div></div>\n            <div id=\"signal\">history_touch_drag_drop: <div id=\"history_touch_drag_drop\"></div></div>\n            <div id=\"signal\">current_frame_motion: <div id=\"current_frame_motion\"></div></div>\n            <div id=\"signal\">current_duration: <div id=\"current_duration\"></div></div>\n            <div id=\"signal\">time_onload: <div id=\"time_onload\"></div></div>\n            <div id=\"signal\">time: <div id=\"time\"></div></div>\n\n            <h2>Game Character</h2>\n\n            <div id=\"signal\">interaction_character_clientX: <div id=\"interaction_character_clientX\"></div></div>\n            <div id=\"signal\">interaction_character_clientY: <div id=\"interaction_character_clientY\"></div></div>\n            \n            <h2>Game Dice</h2>\n\n            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n            \n            <h2>Game Snake</h2>\n\n            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n            \n            <h2>Game Bounce</h2>\n\n            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n\n            <h2>Game Pen & Pencils</h2>\n\n            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n            \n            <h2>Game Unlock/lock</h2>\n\n            <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n            <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n\n            <h2>Inspired By:</h2>\n\n            <div id=\"signal\">my baby moms</div>\n            <div id=\"signal\">The dude that made reddit</div>\n            <div id=\"signal\">g4TV</div>\n            <div id=\"signal\">Rebel Fm</div>\n            <div id=\"signal\">Adam Sessler</div>\n            <div id=\"signal\">CoryX</div>\n            <div id=\"signal\">Tony Ferguson</div>\n            <div id=\"signal\">Henry Cejudo</div>\n            <div id=\"signal\">Plants vs Zombies</div>\n\n\t    \t")));
    }

    ;
  }

  ;

  if (x == 'back_home') {
    if (scrollable != null) {//alert('back_home');
    }

    ;
  }

  ;
};

var handle_events = function handle_events() {
  if (scrollable != null) {
    // scroll
    scrollable.addEventListener('scroll', function (event) {
      _events.default.handle_Function_Scroll(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    }); // events

    root.addEventListener('keydown', function (event) {
      _events.default.handle_Function_Key_Down(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('keyup', function (event) {
      _events.default.handle_Function_Key_Up(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('mousemove', function (event) {
      _events.default.handle_Function_Mouse_Move(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('mouseenter', function (event) {
      _events.default.handle_Function_Mouse_Enter(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('mouseleave', function (event) {
      _events.default.handle_Function_Mouse_Leave(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('mouseup', function (event) {
      _events.default.handle_Function_Mouse_Up(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('mousedown', function (event) {
      _events.default.handle_Function_Mouse_Down(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('touchmove', function (event) {
      _events.default.handle_Function_Touch_Move(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('touchstart', function (event) {
      _events.default.handle_Function_Touch_Start(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
    root.addEventListener('touchend', function (event) {
      _events.default.handle_Function_Touch_End(event);

      Handle_get_state_from_events();
      Handle_render_data_value();
    });
  }

  ;
};

var Handle_render_data_value = function Handle_render_data_value() {
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

var null_user = {
  "username": "null_user",
  "password": "1234",
  "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg"
};
var validated_user = {};
var validated_user_is_logged = false;

var check_localStorage = function check_localStorage() {
  if (localStorage.user == null) {
    localStorage.setItem("user", null_user);
    localStorage.setItem("username", null_user.username);
    localStorage.setItem("password", null_user.password);
    localStorage.setItem("signed_in", "false"); //alert('welcome first timer')

    return;
  }

  ;

  if (localStorage.user != null) {
    //alert('welcome back');
    //first_time_user = false;
    //alert('welcome ' + 'returning user: ' + localStorage.username + '!');
    var roster_library = state.data.firebase.gnougn.library;

    for (var i = 0; i < roster_library.length; i++) {
      if (roster_library[i].child == "roster") {
        // local user matched but is just a null user returning, offer user to create account
        if (roster_library[i].username == localStorage.username && localStorage.username == "null_user") {//alert('welcome back, create an account');
        }

        ; // local user matched and is an ACTUAL user

        if (roster_library[i].username == localStorage.username && localStorage.username != "null_user") {
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

var handle_firebase_events = function handle_firebase_events() {
  // filter by title
  if (document.getElementById('element_input_filter') != null) {
    document.getElementById('element_input_filter').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        handle_refresh_fire_data();
      }, 0);
    });
  }

  ; // empty and render

  if (document.getElementById('element_refresh') != null) {
    document.getElementById('element_refresh').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        handle_refresh_fire_data();
      }, 0);
    });
  }

  ; // login

  if (document.getElementById('element_login') != null) {
    document.getElementById('element_login').addEventListener('click', function (event) {
      firebase_login();
    });
  }

  ; // logout

  if (document.getElementById('element_logout') != null) {
    document.getElementById('element_logout').addEventListener('click', function (event) {
      firebase_logout();
    });
  }

  ; // sort by input field

  if (document.getElementById('element_input_sort') != null) {
    document.getElementById('element_input_sort').addEventListener('keydown', function (event) {
      firebase_sort();
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

  if (document.getElementById('element_addStream') != null) {
    document.getElementById('element_addStream').addEventListener('click', function (event) {
      firebase_add_listings('stream');
    });
  }

  ;
};

var firebase_login = function firebase_login() {
  var selected_username = document.getElementById('element_login_username').value;
  var selected_password = document.getElementById('element_login_password').value;

  for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
    // local user matched
    if (state.data.firebase.gnougn.library[i].username == selected_username) {
      if (state.data.firebase.gnougn.library[i].password == selected_password) {
        alert('logging in: ' + selected_username + selected_password);
        localStorage.setItem("username", selected_username);
        localStorage.setItem("password", selected_password);
        localStorage.setItem("signed_in", "true");
      }

      ;

      if (state.data.firebase.gnougn.library[i].password != selected_password) {
        alert('not logging in: ' + selected_username + selected_password);
        localStorage.setItem("username", "null_user");
        localStorage.setItem("password", "xxx");
        localStorage.setItem("signed_in", "false");
      }

      ;
    }

    ;
  }

  ;
};

var firebase_logout = function firebase_logout() {
  alert('logging out');
  var selected_username = document.getElementById('element_login_username').value;
  var selected_password = document.getElementById('element_login_password').value;
  localStorage.setItem("username", localStorage.username);
  localStorage.setItem("password", "xxx");
  localStorage.setItem("signed_in", "false");
  validated_user = {};
};

var firebase_sort = function firebase_sort() {
  // filter library
  setTimeout(function () {
    state.data.sort = document.getElementById('element_input_sort').value;
  }, 0);
};

var firebase_add_listings = function firebase_add_listings(child) {
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
    var default_item; // library

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

    ;

    if (child == 'library') {
      // Firebase References
      // Firebase Database
      var rootRef = firebase.database().ref();
      var gnougnRef = rootRef.child('gnougn');
      var Ref = gnougnRef.child('library'); // update key of added object

      Ref.push(default_item).then(function (snap) {
        var key = snap.key;
        newly_created_ID = key;
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

    ; // roster

    if (child == 'roster' && already_used == false) {
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

    ;

    if (child == 'roster' && already_used == true) {
      alert('username already in use');
    }

    ;

    if (child == 'roster' && already_used == true) {
      // Firebase References
      // Firebase Database
      var _rootRef = firebase.database().ref();

      var _gnougnRef = _rootRef.child('gnougn');

      var _Ref = _gnougnRef.child('library'); // update key of added object


      _Ref.push(default_item).then(function (snap) {
        var key = snap.key;
        newly_created_ID = key;
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

    ; // stream chat

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

    ;

    if (child == 'stream') {
      // Firebase References
      // Firebase Database
      var _rootRef2 = firebase.database().ref();

      var _gnougnRef2 = _rootRef2.child('gnougn');

      var _Ref2 = _gnougnRef2.child('library'); // update key of added object


      _Ref2.push(default_item).then(function (snap) {
        var key = snap.key;
        newly_created_ID = key;
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

    ;
  }

  ;
}; // Delete


var firebase_delete_Listings = function firebase_delete_Listings(id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
  console.log(id, 'from delete_Listings service');
  Ref.child(id).remove(); // Set firebase data

  setTimeout(function () {
    handle_refresh_fire_data();
  }, 0);
}; // Update


var firebase_like_Listings = function firebase_like_Listings(id) {
  alert(id);
  alert('firebase_like_Listings'); // Firebase References
  // Firebase Database

  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
  console.log(id, 'from like_Listings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  changeThisValue.likes += 1;
  Ref.child(id).set(changeThisValue);
  console.log(id); // Set firebase data

  setTimeout(function () {
    handle_refresh_fire_data();
  }, 0);
}; // Update


var firebase_dislike_Listings = function firebase_dislike_Listings(id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
  console.log(id, 'from like_Listings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  changeThisValue.likes -= 1;
  Ref.child(id).set(changeThisValue);
  console.log(id);
  console.log(changeThisValue); // Set firebase data

  setTimeout(function () {
    handle_refresh_fire_data();
  }, 0);
}; // Update


var firebase_view_Listings = function firebase_view_Listings(id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
  console.log(id, 'from view_Listings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  changeThisValue.views += 1;
  Ref.child(id).set(changeThisValue);
  console.log(id); // Set firebase data

  setTimeout(function () {
    handle_refresh_fire_data();
  }, 0);
}; // null, loading, loaded, home, user, post, page


var handle_Route = function handle_Route(x) {
  state.app.url = x;
  var load_time = 0;

  if (state.app.url == '/') {
    // start asset preloader
    setTimeout(function () {
      handle_Route('loading');
    }, load_time);
  }

  ;

  if (state.app.url == 'loading') {
    status.innerHTML = 'you are loading'; // start asset preloader

    setTimeout(function () {
      handle_Route('loaded');
    }, load_time);
  }

  ;

  if (state.app.url == 'loaded') {
    status.innerHTML = 'you are loaded'; // start asset preloader

    setTimeout(function () {
      handle_Route('done');
    }, load_time);
  }

  ;

  if (state.app.url == 'done') {
    status.innerHTML = 'you are done'; // start asset preloader

    setTimeout(function () {
      handle_Route('home');
    }, load_time);
  }

  ;

  if (state.app.url == 'home') {
    setTimeout(function () {
      status.innerHTML = 'you are home';
      handle_render('home');
      handle_events();
      handle_firebase_events();
    }, 0);
  }

  ;

  if (state.app.url == 'back_home') {
    setTimeout(function () {
      status.innerHTML = 'you are back home';
      handle_render('back_home');
    }, 0);
  }

  ;
};

window.onload = function () {
  handle_refresh_fire_data();
  console.log('onload: ' + 'done');
  console.log(_style.default); //check_localStorage();

  handle_repeated_fire_data_validation;
  handle_Route('/');

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
  Handle_return_posts: Handle_return_posts,
  Handle_return_state: Handle_return_state,
  handle_Route: handle_Route,
  firebase_delete_Listings: firebase_delete_Listings,
  firebase_like_Listings: firebase_like_Listings,
  firebase_dislike_Listings: firebase_dislike_Listings,
  firebase_view_Listings: firebase_view_Listings
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/state":"imports/state.js","./imports/elements":"imports/elements.js","./imports/functions":"imports/functions.js","./imports/events":"imports/events.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54489" + '/');

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
//# sourceMappingURL=/phlygh.e31bb0bc.map