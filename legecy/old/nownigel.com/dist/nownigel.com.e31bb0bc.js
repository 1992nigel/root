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
      history: [],
      timer: 0
    },
    touch: {
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
    motion: {
      event_accelerationIncludingGravity_x: 0,
      event_accelerationIncludingGravity_y: 0,
      event_accelerationIncludingGravity_z: 0
    }
  },
  ux: {
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
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.scss"));

var _state = _interopRequireDefault(require("./imports/state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
// Initalization
var root;
var state;
var config;
var fb_writeable;
var fb_response;
var is_Desktop;
var is_Mobile;
var is_Landscape;
var is_Portrait;
var Generate_new_fragment;
var Generate_new_div;
var Generate_new_li;
var Generate_new_post;
var Generate_validated_user;
var handle_UI;
var handle_Accents;
var handle_Events;
var handle_Values;
var handle_Render;
var handle_Modals;
var handle_Time;
var handle_Function_Mouse_Move;
var handle_Function_Key_Press;
var handle_Function_Touch_Move;
var handle_Function_Scroll;
var handle_Hooks;
var handle_Motion;

var _handle_Route;

var handle_URL;
var handle_ID; // Assignment

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
is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
is_Landscape = window.innerHeight < window.innerWidth;
is_Portrait = window.innerHeight > window.innerWidth;
state = _state.default.default_state; // Targets

root = document.getElementById('root'); // placeholder data

var noise_frame = 0;
var chracter_frame = 0; // Functions

firebase.initializeApp(config);
var default_user = {
  "username": "null_local_user",
  "password": "xxx",
  "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg"
};
var validated_user = {};
var validated_user_data = {};
var is_logged = false;
var first_time_user = true; // Create

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

var filtered_library_by_title; // Handles

Generate_new_fragment = document.createDocumentFragment();

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
      ELEMENT.addEventListener("click", function (event) {
        document.getElementById('modal_page_left_container').innerHTML = "";
        document.getElementById('modal_page_left_container').appendChild(Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div')));
        state.ui.modal.page.left.transform = false;
        handle_UI();
      });
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
      ELEMENT.addEventListener("click", function (event) {
        document.getElementById('modal_page_right_container').innerHTML = "";
        document.getElementById('modal_page_right_container').appendChild(Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div')));
        state.ui.modal.page.right.transform = false;
        handle_UI();
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
};

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
        if (state.data.firebase.gnougn.library[i].username == localStorage.username && localStorage.username == "null_local_user") {//alert('welcome back, create an account');
        }

        ; // local user matched

        if (state.data.firebase.gnougn.library[i].username == localStorage.username && localStorage.username != "null_local_user") {
          //alert('user matches local');
          //alert('is_logged: ' + is_logged);
          //alert('localStorage.signed_in: ' + localStorage.signed_in);
          if (localStorage.signed_in == "true") {
            //alert(state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', sign this back in');
            if (state.data.firebase.gnougn.library[i].password == localStorage.password) {
              validated_user = state.data.firebase.gnougn.library[i]; //alert('password match');
              //alert('signing in: ' + validated_user.id + ', ' + validated_user.username);                            
              //alert('validated_user id: ' + validated_user.id);

              is_logged = true;
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

        ; //alert('filter library')
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
          //Handle_check_route('/home');
          site_first_load = false;
          check_local_user();
          alert('first_time_user: ' + first_time_user);
          alert('is_logged: ' + is_logged);
          handle_URL();
          handle_ID();
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
        }, 1);
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
        }, 1);
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
      }, 100);
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
      }, 100);
      return;
    }

    ;
  }

  ;
};

var Handle_display_with_delay = function Handle_display_with_delay() {
  for (var i = 0; i < components.length; i++) {
    // console.log(components[i].component);
    // console.log(components[i].component_state);
    // colors
    if (document.getElementById(components[i].component) != null) {
      Toggle_functions_IF_State(Toggle_display_and_opacity_on_with_no_delay, Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
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
      Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
    }

    ;
  }

  ;
};

var components;

handle_UI = function handle_UI() {
  components = [{
    component: 'fold_timeout',
    component_state_transform: state.ui.gui.fold.timeout.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.fold.timeout.display // component_state_opacity:  state.ui.gui.fold.timeout.opacity

  }, {
    component: 'modal_nav_top',
    component_state_transform: state.ui.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.top.display // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, {
    component: 'modal_nav_left',
    component_state_transform: state.ui.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.left.display // component_state_opacity:  state.ui.modal.nav.left.opacity

  }, {
    component: 'modal_nav_bottom',
    component_state_transform: state.ui.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.bottom.display // component_state_opacity:  state.ui.modal.nav.bottom.opacity

  }, {
    component: 'modal_nav_right',
    component_state_transform: state.ui.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.right.display // component_state_opacity:  state.ui.modal.nav.right.opacity

  }, {
    component: 'modal_page_top',
    component_state_transform: state.ui.modal.page.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.top.display // component_state_opacity:  state.ui.modal.page.top.opacity

  }, {
    component: 'modal_page_left',
    component_state_transform: state.ui.modal.page.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.left.display // component_state_opacity:  state.ui.modal.page.left.opacity

  }, {
    component: 'modal_page_bottom',
    component_state_transform: state.ui.modal.page.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.bottom.display // component_state_opacity:  state.ui.modal.page.bottom.opacity

  }, {
    component: 'modal_page_right',
    component_state_transform: state.ui.modal.page.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.right.display // component_state_opacity:  state.ui.modal.page.right.opacity

  }];
  Handle_display_with_delay();
  Handle_transform();

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

  ;

  if (document.getElementById('container_character') != null) {
    var container_character = document.getElementById('container_character');
    container_character.style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.interaction.player_1.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.clientX * state.ux.dimensions.width8 + 'px;';
  }

  ; // enemy

  if (document.getElementById('container_enemy') != null) {
    var container_enemy = document.getElementById('container_enemy');
    container_enemy.style = 'height: ' + state.ui.interaction.player_2.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_2.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.interaction.player_2.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_2.clientX * state.ux.dimensions.width8 + 'px;';
  }

  ; //stage
  // vr

  if (document.getElementById('vr_mg') != null) {
    document.getElementById('vr_mg').style = "transform: translate3d(" + state.ui.interaction.vr.clientX * 100 + "%, " + state.ui.interaction.vr.clientY * 100 + "%, 0);";
  }

  ; // gui

  if (document.getElementById('component_app_interaction_hands') != null) {
    var component_app_interaction_hands = document.getElementById('component_app_interaction_hands');
    component_app_interaction_hands.style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;' + 'bottom: ' + 0 + 'px;' + 'left: ' + state.events.mouse.drop.clientX + 'px;';
  }

  ;

  if (document.getElementById('bounce') != null) {
    document.getElementById('bounce').style = 'top: ' + state.ui.interaction.bounce.yaxis * state.ux.dimensions.height8 + 'px; \
            left: ' + state.ui.interaction.bounce.xaxis * state.ux.dimensions.width8 + 'px ;';
  }

  ;

  if (document.getElementById('track_x') != null) {
    document.getElementById('track_x').style = 'top: ' + 0 + 'px; \
            left: ' + state.events.mouse.clientX + 'px ;';
  }

  ;

  if (document.getElementById('track_y') != null) {
    document.getElementById('track_y').style = 'top: ' + state.events.mouse.clientY + 'px; \
            left: ' + 0 + 'px ;';
  }

  ;
};

handle_Accents = function handle_Accents() {
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
};

handle_Function_Scroll = function handle_Function_Scroll(event) {
  if (event) {
    state.events.scroll.history.push({
      event: event
    });
    console.log('state.events.scroll.history');
    console.log(state.events.scroll.history); //alert(window.scrollY);
    //alert(window.scrollX);

    console.log('window.scrollY: ' + window.scrollY);
    console.log('window.scrollX: ' + window.scrollX);
    console.log('document.documentElement.clientWidth: ' + document.documentElement.clientWidth);
    console.log('document.documentElement.clientHeight: ' + document.documentElement.clientHeight);
    console.log('document.documentElement.scrollLeft: ' + document.documentElement.scrollLeft);
    console.log('document.documentElement.scrollTop: ' + document.documentElement.scrollTop);
    console.log('document.documentElement.scrollWidth: ' + document.documentElement.scrollWidth);
    console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollHeight);
    console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollTop);
  }

  ;
  handle_Values();
  handle_Render();
};

handle_Function_Mouse_Move = function handle_Function_Mouse_Move(event) {
  if (event) {
    console.log(event.clientX);
    console.log(event.clientY);
    state.events.mouse.history.push([{
      clientX: event.clientX,
      clientY: event.clientY
    }]);
    console.log('state.events.mouse.history');
    console.log(state.events.mouse.history);
  }

  ;
  handle_Values();
  handle_Render();
};

handle_Function_Key_Press = function handle_Function_Key_Press(event) {
  if (event) {
    //alert(event.keyCode);
    state.events.key.history.push([{
      keyCode: event.keyCode
    }]);
    console.log('state.events.key.history');
    console.log(state.events.key.history);

    if (event.keyCode == 13) {
      state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
    }

    ;

    if (event.keyCode == 16) {
      //alert('shift');
      state.ui.interaction.player_1.clientX += 1;
      state.ui.interaction.player_1.clientY += 1;
      state.ui.gui.fold.timeout.transform = !state.ui.gui.fold.timeout.transform;
      state.ui.gui.fold.timeout.display = !state.ui.gui.fold.timeout.display;
      state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform;
      state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
      state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
      state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
      state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
      state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
      state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
      state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
    }

    ;

    if (event.keyCode == 27) {
      alert('state.app.url: about -> back_home' + state.app.url);
      state.app.url = 'back_home';
      alert('state.app.url: about -> back_home' + state.app.url);

      _handle_Route();

      state.ui.gui.fold.timeout.transform = true;
      state.ui.gui.fold.timeout.display = false;
      state.ui.modal.nav.right.transform = true;
      state.ui.modal.nav.left.transform = true;
      state.ui.modal.nav.top.transform = true;
      state.ui.modal.nav.bottom.transform = true;
      state.ui.modal.page.right.transform = true;
      state.ui.modal.page.left.transform = true;
      state.ui.modal.page.top.transform = true;
      state.ui.modal.page.bottom.transform = true;
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

    ; //command

    if (event.keyCode == 91) {}

    ; //space

    if (event.keyCode == 32) {}

    ; //command

    if (event.keyCode == 93) {}

    ; //option

    if (event.keyCode == 18) {}

    ;
  }

  ;
  handle_UI();
  handle_Values();
  handle_Render();
};

handle_Function_Touch_Move = function handle_Function_Touch_Move(event) {
  if (event) {
    console.log(event.touches[0].clientX);
    console.log(event.touches[0].clientY);
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
  handle_Values();
  handle_Render();
};

handle_Time = function handle_Time() {
  setInterval(function () {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();

    if (document.getElementById('time') != null) {
      document.getElementById('time').innerHTML = state.data.time;
    }

    ;
  }, 1000);
}; // adding events


handle_Events = function handle_Events() {
  // Desktop
  if (is_Desktop) {
    window.addEventListener('scroll', function (event) {
      handle_Function_Scroll(event);
    });
    root.addEventListener('mousemove', function (event) {
      handle_Function_Mouse_Move(event);
    });
    /*
    root.addEventListener('keypress', (event) => {
        handle_Function_Key_Press(event);
    });
    */

    root.addEventListener('keydown', function (event) {
      handle_Function_Key_Press(event);
    });
  }

  ; // Mobile

  if (is_Mobile) {
    window.addEventListener('scroll', function (event) {
      handle_Function_Scroll(event);
    });
    root.addEventListener('touchmove', function (event) {
      handle_Function_Touch_Move(event);
    });
  }

  ;
}; // get platform values


handle_Values = function handle_Values() {
  is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  is_Landscape = window.innerHeight < window.innerWidth;
  is_Portrait = window.innerHeight > window.innerWidth;
  state.ux = {
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

handle_Modals = function handle_Modals() {
  // setting divs
  if (document.getElementById('component_app_modals') != null) {
    document.getElementById('component_app_modals').innerHTML = "";
    var content;
    content = "\n\n            <div id=\"modal_page_top\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vh transform_translate3d_top0 easing_01\">\n               <div id=\"modal_page_top_container\" class=\"width_100 height_100 float_left position_relative bg_white\">\n               </div>\n            </div>\n            <div id=\"modal_page_bottom\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vh transform_translate3d_top0 easing_01\">\n               <div id=\"modal_page_bottom_container\" class=\"width_100 height_100 float_left position_relative bg_white\">\n               </div>\n            </div>\n            <div id=\"modal_page_left\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vh transform_translate3d_left0 easing_01\">\n               <div id=\"modal_page_left_container\" class=\"width_100 height_100 float_left position_relative bg_white\">\n               </div>\n            </div>\n            <div id=\"modal_page_right\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vh transform_translate3d_left0 easing_01\">\n               <div id=\"modal_page_right_container\" class=\"width_100 height_100 float_left position_relative bg_white\">\n               </div>\n            </div>\n\n            <div id=\"modal_nav_top\" class=\"z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top0 easing_01\">\n               <div id=\"modal_nav_top_container\" class=\"\">\n               </div>\n               <div id=\"hover_item_top\" class=\"position_relative float_left height_100 width_6025 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"row-logo-type\" class=\"\">\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_house_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div class=\"gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_1205 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div class=\"gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_top_0\" class=\"position_relative float_left height_100 width_6025 easing_01\">\n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div class=\"gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n                  <div class=\"hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink\">\n                     </div>\n                  </div>\n               </div>\n            </div>\n            <div id=\"modal_nav_bottom\" class=\"z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top0 easing_01\">\n               <div id=\"modal_nav_bottom_container\" class=\"\">\n               </div>\n               <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_close_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_min_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_bottom_0\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item_bottom\" class=\"position_relative float_left height_100 width_20 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n            </div>\n            <div id=\"modal_nav_left\" class=\"z_index_6 width_6025vw float_left position_fixed top_0 height_100 transform_translate3d_left0 easing_01\">\n               <div id=\"modal_nav_left_container\" class=\"\">\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n            </div>\n            <div id=\"modal_nav_right\" class=\"z_index_6 width_6025vw float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left0 easing_01\">\n               <div id=\"modal_nav_right_container\" class=\"\">\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n               <div id=\"hover_item\" class=\"position_relative float_left height_20 width_100 easing_01\">\n                  \n                  <div class=\"position_absolute bottom_0 left_0 height_100 width_100 bg_white\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                        <div id=\"bg-character\" class=\"gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                     </div>\n                  </div>\n\n                  <div class=\"hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw\">\n                     <div class=\"position_absolute bottom_0 left_0 calc_2vh border_1vh_grey\">\n                     </div>\n                  </div>\n               </div>\n            </div>\n\n        ";
    document.getElementById('component_app_modals').appendChild(Generate_new_fragment.appendChild(Generate_new_div(content, "modal_nav", "position_fixed top_0 left_0"))); // filter by title

    setTimeout(function () {
      if (document.getElementById('hover_item_top') != null) {
        document.getElementById('hover_item_top').addEventListener('click', function (event) {
          // filter library
          setTimeout(function () {
            state.app.dark_mode = !state.app.dark_mode;
            alert(state.app.dark_mode);
            handle_UI();
          }, 0);
        });
      }

      ;

      if (document.getElementById('hover_item_bottom') != null) {
        document.getElementById('hover_item_bottom').addEventListener('click', function (event) {
          // filter library
          setTimeout(function () {
            state.app.dark_mode = !state.app.dark_mode;
            alert(state.app.dark_mode);
            handle_UI();
          }, 0);
        });
      }

      ;

      if (document.getElementById('row-logo-type') != null) {
        document.getElementById('row-logo-type').addEventListener('click', function (event) {
          // filter library
          setTimeout(function () {
            state.app.dark_mode = !state.app.dark_mode;
            console.log(state.app.dark_mode);
            handle_UI();
          }, 0);
        });
      }

      ;

      if (document.getElementById('row-toggle') != null) {
        document.getElementById('row-toggle').addEventListener('click', function (event) {
          // filter library
          setTimeout(function () {
            state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
            handle_UI();
          }, 0);
        });
      }

      ;
    }, 101);
  }

  ;
}; // render values to route div


handle_Render = function handle_Render() {
  if (document.getElementById('is_Desktop') != null) {
    document.getElementById('is_Desktop').innerHTML = is_Desktop;
  }

  ;

  if (document.getElementById('is_Mobile') != null) {
    document.getElementById('is_Mobile').innerHTML = is_Mobile;
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

  if (document.getElementById('history_key') != null) {
    document.getElementById('history_key').innerHTML = state.events.key.history;
  }

  ;

  if (document.getElementById('history_touch') != null) {
    document.getElementById('history_touch').innerHTML = state.events.touch.history;
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

  ;

  if (document.getElementById('interaction_character_clientX') != null) {
    document.getElementById('interaction_character_clientX').innerHTML = state.ui.interaction.player_1.clientX;
  }

  ;

  if (document.getElementById('interaction_character_clientY') != null) {
    document.getElementById('interaction_character_clientY').innerHTML = state.ui.interaction.player_1.clientY;
  }

  ;
}; // home, user or post/page


handle_URL = function handle_URL() {
  console.log(location);
  console.log(location.pathname);
  var parts = location.pathname.split('/'); //alert(parts[1]);
  //alert(parts[2]);
  // if no url

  if (parts[1] == '' || parts[1] == null) {
    state.app.url = '/'; //alert('url == /');
  }

  ; // if any url besides read or about -- assume this is a user page

  if (parts[1] != '' && parts[1] != '/' && (parts[1] != 'read' || parts[1] != 'about')) {
    state.app.url = parts[1]; //alert('url != read');

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
      if (state.data.firebase.gnougn.library[i].username == parts[1]) {
        alert('user: ' + parts[1]); //fill div with user data

        if (parts[1] != 'read' || parts[1] != 'about') {
          alert('user page: ' + state.app.url);
          document.getElementById('fold_user_page').innerHTML = "\n                        <div id=\"fold_user_page_link\">".concat(state.app.url, "</div>\n                    ");
          document.getElementById('fold_user_page_link').addEventListener("click", function (event) {
            alert("fold_user_page_link");
          });
        }

        ;
      }

      ;
    }

    ;
  }

  ; // if url read

  if (parts[1] == 'read') {
    state.app.url = 'read'; //alert('url == read');
  }

  ; // if url about

  if (parts[1] == 'about') {
    state.app.url = 'about'; //alert('url == read');
  }

  ;
}; // user id or page id


handle_ID = function handle_ID() {
  console.log(location);
  console.log(location.pathname);
  var parts = location.pathname.split('/');

  if (parts[1] != null) {
    if (parts[1] != null) {
      //state.app.url = parts[1];
      //alert('url:' + parts[1]);
      if (parts[2] != null) {
        //alert('id: ' + parts[2])
        state.app.id = parts[2];

        if (parts[1] == 'read') {
          state.app.id = parts[2]; //alert('read id: ' + state.app.id);
        }

        ;

        for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
          if (state.data.firebase.gnougn.library[i].id == parts[2]) {
            alert('post page: ' + state.app.id);
            document.getElementById('fold_post_page').innerHTML = "\n                            <div id=\"fold_post_page_link\">".concat(state.app.id, "</div>\n                        ");
            document.getElementById('fold_post_page_link').addEventListener("click", function (event) {
              alert("fold_post_page_link");
            });
          }

          ;
        }

        ;
      }

      ;

      if (parts[2] == null) {
        if (parts[1] == 'read') {
          alert('no read id');
        }

        ;
      }

      ;
    }

    ;
  }

  ;
}; // adding events


handle_Hooks = function handle_Hooks() {
  window.onresize = function () {
    handle_Values();
  };
};

handle_Motion = function handle_Motion() {
  // framerate loop
  (function () {
    var interval = 0;
    setInterval(function () {
      handle_UI();
      console.log('current frame is: ' + interval);

      if (interval == state.motion.framerate * 0) {
        console.log('0 seconds have passed.');
      }

      ;

      if (interval == state.motion.framerate * 10) {
        console.log('10 seconds have passed.');
      }

      ;

      if (state.ui.interaction.player_1.clientX == state.ui.interaction.player_2.clientX && state.ui.interaction.player_1.clientY == state.ui.interaction.player_2.clientY) {//alert('game over');
      }

      ;
      interval += 1;
      state.motion.frame = interval;
      console.log('state.motion.frame: ' + state.motion.frame);
    }, 1000 / state.motion.framerate);
  })(); // 12 fps


  (function () {
    var interval = 0;
    setInterval(function () {
      handle_Accents();
    }, 1000 / 12);
  })(); // 1 sec loop


  (function () {
    var interval = 0;
    setInterval(function () {
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

var HANDLE_looping_logo_mark = function HANDLE_looping_logo_mark() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    setInterval(function () {
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
      interval += 1;
    }, 1000 / 12);
  })();
};

var HANDLE_looping_logo_mark_type = function HANDLE_looping_logo_mark_type() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    setInterval(function () {
      if (interval == 1) {
        if (document.getElementById('row_logo_mark_type') != null) {
          document.getElementById('row_logo_mark_type').classList = "\n                                    gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
        }

        ;
      }

      ;

      if (interval == 2) {
        if (document.getElementById('row_logo_mark_type') != null) {
          document.getElementById('row_logo_mark_type').classList = "\n                                    gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
        }

        ;
      }

      ;

      if (interval == 3) {
        if (document.getElementById('row_logo_mark_type') != null) {
          document.getElementById('row_logo_mark_type').classList = "\n                                    gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
        }

        ;
      }

      ;

      if (interval == 4) {
        if (document.getElementById('row_logo_mark_type') != null) {
          document.getElementById('row_logo_mark_type').classList = "\n                                    gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto ";
        }

        ;
        interval = 0;
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
      if (interval == 1) {
        if (document.getElementById('row-logo-type') != null) {
          document.getElementById('row-logo-type').classList = "\n                                    gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto ";
        }

        ;
      }

      ;

      if (interval == 2) {
        if (document.getElementById('row-logo-type') != null) {
          document.getElementById('row-logo-type').classList = "\n                                    gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto ";
        }

        ;
      }

      ;

      if (interval == 3) {
        if (document.getElementById('row-logo-type') != null) {
          document.getElementById('row-logo-type').classList = "\n                                    gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto ";
        }

        ;
      }

      ;

      if (interval == 4) {
        if (document.getElementById('row-logo-type') != null) {
          document.getElementById('row-logo-type').classList = "\n                                    gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto ";
        }

        ;
        interval = 0;
      }

      ;
      interval += 1;
    }, 1000 / 12);
  })();
}; // null, loading, loaded, home, user, post, page


_handle_Route = function handle_Route() {
  (function () {
    if (state.app.url == '/') {
      root.innerHTML = "\n                /\n            ";
      setTimeout(function () {
        state.app.url = '/loading';

        _handle_Route(state.app.url);
      }, 0);
      handle_Hooks();
      handle_Events();
      handle_Motion();
    }

    ;

    if (state.app.url == '/loading') {
      root.innerHTML = "\n\n                <div id=\"cardboard\" class=\"width_100 height_100 position_fixed float_left\">\n\n\t                <div class=\"position_absolute width_100 height_100 top_0 left_0\">\n\t\t                <div id=\"loading_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 margin_auto width_33 height_33\"></div>\n\t                </div>\n\t                loading\n                </div>\n            ";
      setTimeout(function () {
        state.app.url = '/loaded';

        _handle_Route(state.app.url);
      }, 1000);
    }

    ;

    if (state.app.url == '/loaded') {
      root.innerHTML = "\n                \n                <div id=\"cardboard\" class=\"width_100 height_100 position_fixed float_left\">\n\n\t                <div class=\"position_absolute width_100 height_100 top_0 left_0\">\n\t\t                <div id=\"loading_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 margin_auto width_33 height_33\"></div>\n\t                </div>\n\t                loaded\n                </div>\n            ";
      setTimeout(function () {
        state.app.url = '/home';

        _handle_Route(state.app.url);
      }, 1000);
    }

    ;

    if (state.app.url == '/home') {
      alert('home'); // inital firebase check

      handle_refresh_fire_data();
      handle_repeated_fire_data_validation;
      root.innerHTML = "\n\n                <div id=\"cardboard\" class=\"width_100 height_100 position_fixed float_left\">\n\n\t                <div bg=\"vr_bg\" class=\"opacity_005\">\n                        <div id=\"row_accent_noise\"></div>\n                    </div>\n\n                    <div id=\"vr_mg\" class=\"transform_translate3d_top0 easing_01 position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box\">\n                    </div>\n\n                    <div id=\"vr_fg\" class=\"\">\n\n                    </div>\n\n                    <div id=\"vr_interaction\" class=\"\">\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div id=\"row-logo-mark-type_filler\"></div>\n                            \n                            <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1_filler\"></div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div id=\"scrollable\" class=\"width_100 position_relative float_left\">\n\n\t                <div id=\"fold\" class=\"width_100 height_100 position_relative float_left\">\n\n                        <div id=\"fold_timeout\" class=\"width_100 height_100 position_absolute transform_translate3d_top0 float_left\">\n                        </div>\n\n                        <div id=\"fold_routing\" class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark_filler\"></div>\n                            <div id=\"row_logo_mark_type\" class=\"gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            \n                            <div class=\" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1\" class=\"gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <div id=\"fold_interaction\" class=\"\">\n                        </div>\n\n                        <div id=\"fold_user_page\">\n                        </div>\n\n                        <div id=\"fold_post_page\">\n                        </div>\n\n\t                </div>\n\t             \n\t                <h1>Platform</h1>\n\t                <div id=\"signal\">is_Desktop: <div id=\"is_Desktop\"></div></div>\n\t                <div id=\"signal\">is_Mobile: <div id=\"is_Mobile\"></div></div>\n\t                <div id=\"signal\">ux_dimensions_height: <div id=\"ux_dimensions_height\"></div></div>\n\t                <div id=\"signal\">ux_dimensions_width: <div id=\"ux_dimensions_width\"></div></div>\n\t                <div id=\"signal\">ux_browser_height: <div id=\"ux_browser_height\"></div></div>\n\t                <div id=\"signal\">ux_browser_width: <div id=\"ux_browser_width\"></div></div>\n\t                <div id=\"signal\">ux_screen_height: <div id=\"ux_screen_height\"></div></div>\n\t                <div id=\"signal\">ux_screen_width: <div id=\"ux_screen_width\"></div></div>\n\n\t                <h1>Game State</h1>\n\t                <div id=\"signal\">interaction_character_clientX: <div id=\"interaction_character_clientX\"></div></div>\n\t                <div id=\"signal\">interaction_character_clientY: <div id=\"interaction_character_clientY\"></div></div>\n\n\t                <h1>UI State</h1>\n\t                <div id=\"signal\">nav_top: <div id=\"nav_top\"></div></div>\n\n\t                <h1>Route</h1>\n\t                <div id=\"home\">home</div>\n\n\t                <h1>Time</h1>\n\t                <div id=\"signal\">time: <div id=\"time\"></div></div>\n\t                <div id=\"signal\">time_onload: <div id=\"time_onload\"></div></div>\n\n\t                <h1>motion</h1>\n\t                <div id=\"signal\">current_frame_motion: <div id=\"current_frame_motion\"></div></div>\n\t                <div id=\"signal\">current_duration: <div id=\"current_duration\"></div></div>\n\n\t                <h1>Scroll</h1>\n\t                <h2>Scrolling root</h2>\n\t                <div id=\"signal\">history_scroll: <div id=\"history_scroll\"></div></div>\n\n\t                <h1>Mouse</h1>\n\t                <h2>Mousemove</h2>\n\t                <div id=\"signal\">history_mouse: <div id=\"history_mouse\"></div></div>\n\n\t                <h1>Key</h1>\n\t                <h2>Keypress</h2>\n\t                <div id=\"signal\">history_key: <div id=\"history_key\"></div></div>\n\n\t                <h1>Touch</h1>\n\t                <h2>Touches</h2>\n\t                <div id=\"signal\">history_touch: <div id=\"history_touch\"></div></div>\n\n\t                <h1>Orientation</h1>\n\t                <h2>Gravity</h2>\n\t                <div id=\"signal\">event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div></div>\n\t                <div id=\"signal\">event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div></div>\n\t                <div id=\"signal\">event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div></div>\n\n\t                <h2>VR</h2>\n\t                <div id=\"signal\">last_action: <div id=\"last_action\"></div></div>\n\n\t                <h2>Positions</h2>\n\t                <div id=\"signal\">event_alpha: <div id=\"event_alpha\"></div></div>\n\t                <div id=\"signal\">event_beta: <div id=\"event_beta\"></div></div>\n\t                <div id=\"signal\">event_gamma: <div id=\"event_gamma\"></div></div>\n\n\t                <h2>Pos of device</h2>\n\t                <div id=\"signal\">event_portrait: <div id=\"event_portrait\"></div></div>\n\t                <div id=\"signal\">event_landscape: <div id=\"event_landscape\"></div></div>\n\n\t                <h2>Orientations</h2>\n\t                <div id=\"signal\">event_orientation: <div id=\"event_orientation\"></div></div>\n                    <div id=\"bg_gradient\" class=\"position_relative width_100vw height_100vh float_left margin_auto gradient_white_top\"></div>\n                    <div id=\"bg\" class=\"position_relative width_100vw height_100vh float_left margin_auto bg_white\"></div>\n\n                    <h1>Blog</h1>\n\n                    <h2>Filtering</h2>\n                    <input id=\"element_input_filter\" type=\"text\" placeholder=\"element_input_filter\" class=\"width_100 float_left\" />\n\n                    <h2>Login</h2>\n                    <input id=\"element_login_username\" type=\"text\" placeholder=\"element_login_username\" class=\"width_100 float_left\" />\n                    <input id=\"element_login_password\" type=\"text\" placeholder=\"element_login_password\" class=\"width_100 float_left\" />\n\n                    <h2>Create User</h2>\n                    <input id=\"create_user_username\" type=\"text\" placeholder=\"create_user_username\" class=\"width_100 float_left\" />\n                    <input id=\"create_user_password\" type=\"text\" placeholder=\"create_user_password\" class=\"width_100 float_left\" />\n\n                    <h2>Create Post</h2>\n                    <input id=\"create_post_title\" type=\"text\" placeholder=\"create_post_title\" class=\"width_100 float_left\" />\n                    <input id=\"create_post_tag\" type=\"text\" placeholder=\"create_post_tag\" class=\"width_100 float_left\" />\n\n                    <h2>Buttons</h2>\n                    <div id=\"element_refresh\">refresh</div>\n                    <div id=\"element_login\">login</div>\n                    <div id=\"element_logout\">logout</div>\n                    <div id=\"element_addListing\">element_addListing</div>\n                    <div id=\"element_addRoster\">element_addRoster</div>\n\n                    <h2>Post: All</h2>\n                    <div id=\"element_ol_firebase_all\" class=\"position_relative width_100vw float_left margin_auto bg_white\"></div>\n                    <h2>Post: Library</h2>\n                    <div id=\"element_ol_firebase_all_library\" class=\"position_relative width_100vw float_left margin_auto bg_white\"></div>\n                    <h2>Post: Roster</h2>\n                    <div id=\"element_ol_firebase_all_users\" class=\"position_relative width_100vw float_left margin_auto bg_white\"></div>\n                    <h2>Post: Logged In User</h2>\n                    <div id=\"element_ol_firebase_validated_user\" class=\"position_relative width_100vw float_left margin_auto bg_white\"></div>\n        \n                </div>\n\n                <div id=\"component_app_modals\"></div>\n            "; // add events
      // clickable

      if (document.getElementById('home') != null) {
        document.getElementById('home').addEventListener("click", function (event) {
          alert("home");
        });
      }

      ; // control fold & vr

      if (document.getElementById('gui_interaction_button_1') != null) {
        document.getElementById('gui_interaction_button_1').addEventListener('click', function (event) {
          alert("gui_interaction_button_1");
          state.app.url = 'about';

          _handle_Route();
        });
      }

      ; // filter by title

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

      ; // create

      if (document.getElementById('element_addRoster') != null) {
        document.getElementById('element_addRoster').addEventListener('click', function (event) {
          addListings('roster');
        });
      }

      ; // fill in modals

      handle_Modals(); // start animations

      HANDLE_looping_logo_type();
      HANDLE_looping_logo_mark();
      HANDLE_looping_logo_mark_type();
    }

    ;

    if (state.app.url == 'about') {
      alert('about');

      if (document.getElementById('fold_routing') != null) {
        document.getElementById('fold_routing').innerHTML = "";
      }

      ;

      if (document.getElementById('vr_bg') != null) {
        document.getElementById('vr_bg').innerHTML = "";
      }

      ;

      if (document.getElementById('vr_mg_center') != null) {
        document.getElementById('vr_mg_center').innerHTML = "";
      }

      ;

      if (document.getElementById('vr_fg') != null) {
        document.getElementById('vr_fg').innerHTML = "\n\n                            <div id=\"container_enemy\" class=\"position_absolute\">\n                                <div id=\"enemy\" class=\"gui_character\"></div>\n                            </div>\n\n                            <div id=\"container_character\" class=\"position_absolute easing_01\">\n                                <div id=\"character\" class=\"gui_character\"></div>\n                            </div>\n                        ";
      }

      ;

      if (document.getElementById('vr_mg') != null) {
        document.getElementById('vr_mg').innerHTML = "\n\n                           <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh easing_01\">\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing1 Left Top\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Left Center\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Left Bottom\n                              </div>\n                           </div>\n                           <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh\">\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing1 Center Top\n                              </div>\n                              <div id=\"vr_mg_center\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                    <div id=\"container_object\" class=\"position_absolute bottom_0 left_1205vw width_33vw height_33vh\">\n                                       <div id=\"object\" class=\"gui_stage_tv width_100 height_100\"></div>\n                                    </div>\n                                    <div id=\"container_object\" class=\"position_absolute top_0 right_0 left_0 width_33vw height_33vh\">\n                                       <div id=\"object\" class=\"gui_stage_lights width_100 height_100\"></div>\n                                    </div>\n                                    <div id=\"container_object\" class=\"position_absolute bottom_0 right_1205vw width_33vw height_33vh\">\n                                       <div id=\"object\" class=\"gui_stage_desk width_100 height_100\"></div>\n                                    </div>\n                                 </div>\n                                 landing2 Center Mid\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Center Bottom\n                              </div>\n                           </div>\n                           <div id=\"column1\" class=\"position_relative float_left width_100vw height_100vh\">\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing1 Right Top\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Right Mid\n                              </div>\n                              <div class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                 <div class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n                                 </div>\n                                 landing2 Right Bottom\n                              </div>\n                           </div>\n\n                        ";
      }

      ;

      if (document.getElementById('vr_interaction') != null) {
        document.getElementById('vr_interaction').innerHTML = "\n\n                        <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\">\n                            <div id=\"row-logo-mark\" class=\"gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto\"></div>\n                            <div id=\"row-logo-mark-type_filler\"></div>\n                            \n                            <div class=\"position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto\">\n                                <div id=\"gui_interaction_button_1_filler\"></div>\n                            </div>\n                        </div>\n                    ";
      }

      ;

      if (document.getElementById('fold_interaction') != null) {
        document.getElementById('fold_interaction').innerHTML = "\n\n                            <div id=\"element_scroll_y_scrollbar_styled\" class=\"position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1\">\n                                <div class=\"position_relative width_100 float_left\">\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_100 height_25vw margin_auto\"></div>\n\n                                </div>\n                            </div>\n\n                            <div class=\"position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow\">\n                                <div class=\"position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n                                    <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                    \n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n\n                                    <div id=\"bg-character\" class=\"gui_character_1 position_relative width_50vw height_25vw margin_auto\"></div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        ";
      }

      ;
    }

    ;

    if (state.app.url == 'back_home') {
      alert('back_home');

      if (document.getElementById('fold_routing') != null) {
        document.getElementById('fold_routing').innerHTML = "";
      }

      ;

      if (document.getElementById('vr_bg') != null) {
        document.getElementById('vr_bg').innerHTML = "";
      }

      ;

      if (document.getElementById('vr_mg_center') != null) {
        document.getElementById('vr_mg_center').innerHTML = "";
      }

      ;

      if (document.getElementById('vr_fg') != null) {
        document.getElementById('vr_fg').innerHTML = "";
      }

      ;

      if (document.getElementById('vr_mg') != null) {
        document.getElementById('vr_mg').innerHTML = "";
      }

      ;

      if (document.getElementById('vr_interaction') != null) {
        document.getElementById('vr_interaction').innerHTML = "";
      }

      ;

      if (document.getElementById('fold_interaction') != null) {
        document.getElementById('fold_interaction').innerHTML = "";
      }

      ;
    }

    ;
  })();

  handle_Values();
  handle_Render();

  if (document.getElementById('time_onload') != null) {
    document.getElementById('time_onload').innerHTML = state.data.time;
  }

  ; // back to fold for page change

  window.scrollTo(0, 0);
};

window.onload = function () {
  alert('sword');
  handle_Time();
  state.app.url = '/';

  _handle_Route();
};

window.onresize = function () {
  console.log('state.ux.dimensions.width: ' + state.ux.dimensions.width);
  console.log('state.ux.dimensions.height: ' + state.ux.dimensions.height);
  console.log('state.ux.dimensions.width8: ' + state.ux.dimensions.width8);
  console.log('state.ux.dimensions.height8: ' + state.ux.dimensions.height8);
};

window.ondevicemotion = function (event) {
  var event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
  var event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
  var event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

  if (document.getElementById('event_accelerationIncludingGravity_x') != null) {
    document.getElementById('event_accelerationIncludingGravity_x').innerHTML = event_accelerationIncludingGravity_x;

    if (event.accelerationIncludingGravity.x > 8) {
      document.getElementById('last_action').innerHTML = 'shook right';
    }

    ;

    if (event.accelerationIncludingGravity.x < -8) {
      document.getElementById('last_action').innerHTML = 'shook left';
    }

    ;
  }

  ;

  if (document.getElementById('event_accelerationIncludingGravity_y') != null) {
    document.getElementById('event_accelerationIncludingGravity_y').innerHTML = event_accelerationIncludingGravity_y;

    if (event.accelerationIncludingGravity.y > 8) {
      document.getElementById('last_action').innerHTML = 'upside down';
    }

    ;

    if (event.accelerationIncludingGravity.y < -8) {
      document.getElementById('last_action').innerHTML = 'rightside up';
    }

    ;
  }

  ;

  if (document.getElementById('event_accelerationIncludingGravity_z') != null) {
    document.getElementById('event_accelerationIncludingGravity_z').innerHTML = event_accelerationIncludingGravity_z;

    if (event.accelerationIncludingGravity.z > 8) {
      document.getElementById('last_action').innerHTML = 'overhead';
    }

    ;

    if (event.accelerationIncludingGravity.z < -8) {
      document.getElementById('last_action').innerHTML = 'laid flat';
    }

    ;
  }

  ;
};

window.ondeviceorientation = function (event) {
  var event_alpha = event.alpha;
  var event_beta = event.beta;
  var event_gamma = event.gamma;

  if (document.getElementById('event_alpha') != null) {
    document.getElementById('event_alpha').innerHTML = event_alpha;
  }

  ;

  if (document.getElementById('event_beta') != null) {
    document.getElementById('event_beta').innerHTML = event_beta;
  }

  ;

  if (document.getElementById('event_gamma') != null) {
    document.getElementById('event_gamma').innerHTML = event_gamma;
  }

  ;

  if (is_Landscape) {
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

  if (is_Portrait) {
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
};

window.onorientationchange = function () {
  var orientation_string = 'n/a';

  if (orientation == 0) {
    orientation_string = 'Portrait Mode, Home Button bottom';
  } else if (orientation == 90) {
    orientation_string = 'Landscape Mode, Home Button right';
  } else if (orientation == -90) {
    orientation_string = 'Landscape Mode, Home Button left';
  } else if (orientation == 180) {
    orientation_string = 'Portrait Mode, Home Button top';
  }

  if (document.getElementById('event_orientation') != null) {
    document.getElementById('event_orientation').innerHTML = orientation_string;
  }

  ;
};

console.log(state);

_state.default.from_Import();
},{"./style.scss":"style.scss","./imports/state":"imports/state.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55707" + '/');

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
//# sourceMappingURL=/nownigel.com.e31bb0bc.map