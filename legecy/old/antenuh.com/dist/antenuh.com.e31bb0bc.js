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
},{"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.scss"));

var _touch;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var root;
var state;
var is_Desktop;
var is_Mobile;
var is_Landscape;
var is_Portrait;
var handle_device_values;
var handle_inital_events;
var handle_time;
var handle_looping_accent;
var handle_animations;

var _handle_check_route;

var handle_init; // assignment

root = document.getElementById('root');
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
      clicks: [],
      clicked: false,
      up: {
        clientX: 0,
        clientY: 0
      },
      down: {
        clientX: 0,
        clientY: 0
      },
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
      touch_history: [],
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
      key_history: [],
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
  animation: {
    duration: 0,
    frame: 1,
    framerate: 24,
    rate: 1000,
    scene: 0
  }
}; // functions

handle_inital_events = function handle_inital_events() {
  if (is_Desktop) {
    window.addEventListener('scroll', function (event) {
      alert(window.scrollY);
      alert(window.scrollX);
      console.log('document.documentElement.clientWidth: ' + document.documentElement.clientWidth);
      console.log('document.documentElement.clientHeight: ' + document.documentElement.clientHeight);
      console.log('document.documentElement.scrollLeft: ' + document.documentElement.scrollLeft);
      console.log('document.documentElement.scrollTop: ' + document.documentElement.scrollTop);
      console.log('document.documentElement.scrollWidth: ' + document.documentElement.scrollWidth);
      console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollHeight);
      console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollTop);
      /*
           // scrolling
          console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
          console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
          console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
          console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
          console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
          console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);
           state.ui.root.clientHeight = event.srcElement.clientHeight;
          state.ui.root.clientWidth = event.srcElement.clientWidth;
           state.ui.root.scrollHeight = event.srcElement.scrollHeight;
          state.ui.root.scrollWidth = event.srcElement.scrollWidth;
           state.ui.root.scrollTop = event.srcElement.scrollTop;
          state.ui.root.scrollLeft = event.srcElement.scrollLeft;
           var currY = ((event.srcElement.scrollTop) / (event.srcElement.scrollHeight - event.srcElement.clientHeight) * 100) ;
          console.log(currY);
           if (currY == 0) {
              state.animation.instances.scrolled_top = true;
              state.animation.instances.scrolled_bottom = false;
               if (state.animation.instances.scrolled_top == true) {
                  alert('scrolled_top met');
                  HANDLE_animation_scrolled_up();
              };
           };
            if (currY == 100) {
              state.animation.instances.scrolled_top = false;
              state.animation.instances.scrolled_bottom = true;
               if (state.animation.instances.scrolled_bottom == true) {
                  alert('scrolled_bottom met')
              };
          };
           if ((document.getElementById('scroll_clientHeight')) != null) {
              document.getElementById('scroll_clientHeight').innerHTML = (event.srcElement.clientHeight)
          }
           if ((document.getElementById('scroll_clientWidth')) != null) {
              document.getElementById('scroll_clientWidth').innerHTML = (event.srcElement.clientWidth)
          }
           if ((document.getElementById('scroll_scrollHeight')) != null) {
              document.getElementById('scroll_scrollHeight').innerHTML = (event.srcElement.scrollHeight)
          }
           if ((document.getElementById('scroll_scrollWidth')) != null) {
              document.getElementById('scroll_scrollWidth').innerHTML = (event.srcElement.scrollWidth)
          }
           if ((document.getElementById('scroll_scrollTop')) != null) {
              document.getElementById('scroll_scrollTop').innerHTML = (event.srcElement.scrollTop);
            };
           if ((document.getElementById('scroll_scrollLeft')) != null) {
              document.getElementById('scroll_scrollLeft').innerHTML = (event.srcElement.scrollLeft)
          }
           // instances      
          if (event.srcElement.scrollTop > state.ui.root.component_app_gui_scroll_y_position) {
              console.log('state.ui.root.component_app_gui_scroll_y_position increasing');
              console.log("instance: wheel up");
          }
           if (event.srcElement.scrollTop < state.ui.root.component_app_gui_scroll_y_position) {
              console.log('state.ui.root.component_app_gui_scroll_y_position decreasing');
              console.log("instance: wheel down");
          }
           if (event.srcElement.scrollTop === 0) {
              console.log("instance: top of page");
              // gui change
          }
           if (event.srcElement.scrollTop > 1 && !((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight))) {
              console.log('instance: scrolling started');
              // gui change
          }
           if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
              console.log('instance: inside lead');
              // gui change
          };
           if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
              console.log('instance: past lead');
              // gui change
          }
           if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) > (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
              console.log('instance: 100vh before bottom not met');
              // gui change
          };
           if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
              console.log('instance: 100vh before bottom met');
              // gui change
          };
           if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
              alert("instance: footer met");
          }
          */
    });
    root.addEventListener('wheel', function (event) {
      if (event.deltaY < 0) {
        console.log('wheel up');

        if (document.getElementById('wheel_direction') != null) {
          document.getElementById('wheel_direction').innerHTML = 'up';
        }

        ;
      }

      ;

      if (event.deltaY > 0) {
        console.log('wheel down');

        if (document.getElementById('wheel_direction') != null) {
          document.getElementById('wheel_direction').innerHTML = 'down';
        }

        ;
      }

      ;
    });
    root.addEventListener('mousedown', function (event) {
      state.events.mouse.clicks.push({
        clientX: event.clientX,
        clientY: event.clientX
      });

      if (document.getElementById('clicks') != null) {
        document.getElementById('clicks').innerHTML = state.events.mouse.clicks.length;
      }

      ;
      state.events.mouse.clicked = true;
      state.events.mouse.down.clientX = event.clientX;
      state.events.mouse.down.clientY = event.clientY;

      if (document.getElementById('mouse_client_clicked') != null) {
        document.getElementById('mouse_client_clicked').innerHTML = state.events.mouse.clicked;
      }

      if (document.getElementById('mouse_client_clicked_X') != null) {
        document.getElementById('mouse_client_clicked_X').innerHTML = state.events.mouse.down.clientX;
      }

      if (document.getElementById('mouse_client_clicked_Y') != null) {
        document.getElementById('mouse_client_clicked_Y').innerHTML = state.events.mouse.down.clientY;
      }
    });
    root.addEventListener('mouseup', function (event) {
      state.events.mouse.clicked = false;
      state.events.mouse.up.clientX = event.clientX;
      state.events.mouse.up.clientY = event.clientY;

      if (document.getElementById('mouse_client_clicked') != null) {
        document.getElementById('mouse_client_clicked').innerHTML = state.events.mouse.clicked;
      }

      if (document.getElementById('mouse_client_not_clicked_X') != null) {
        document.getElementById('mouse_client_not_clicked_X').innerHTML = state.events.mouse.up.clientX;
      }

      if (document.getElementById('mouse_client_not_clicked_Y') != null) {
        document.getElementById('mouse_client_not_clicked_Y').innerHTML = state.events.mouse.up.clientY;
      }

      state.events.mouse.clicked = false;
      state.events.mouse.drag.clientX = state.events.mouse.drop_start.clientX - state.events.mouse.drop_end.clientX;
      state.events.mouse.drag.clientY = state.events.mouse.drop_start.clientY - state.events.mouse.drop_end.clientY;

      if (document.getElementById('mouse_client_drag_distance_X') != null) {
        document.getElementById('mouse_client_drag_distance_X').innerHTML = state.events.mouse.drag.clientX;
      }

      if (document.getElementById('mouse_client_drag_distance_Y') != null) {
        document.getElementById('mouse_client_drag_distance_Y').innerHTML = state.events.mouse.drag.clientY;
      }
    });
    root.addEventListener('mousemove', function (event) {
      state.events.mouse.clientX = event.clientX;
      state.events.mouse.clientY = event.clientY;

      if (document.getElementById('mouse_client_X') != null) {
        document.getElementById('mouse_client_X').innerHTML = state.events.mouse.clientX;
      }

      if (document.getElementById('mouse_client_Y') != null) {
        document.getElementById('mouse_client_Y').innerHTML = state.events.mouse.clientY;
      }

      if (state.events.mouse.clicked == true) {
        state.events.mouse.drop_start.clientX = event.clientX;
        state.events.mouse.drop_start.clientY = event.clientY;

        if (document.getElementById('mouse_client_drag_distance_X_start') != null) {
          document.getElementById('mouse_client_drag_distance_X_start').innerHTML = state.events.mouse.drop_start.clientX;
        }

        if (document.getElementById('mouse_client_drag_distance_Y_start') != null) {
          document.getElementById('mouse_client_drag_distance_Y_start').innerHTML = state.events.mouse.drop_start.clientY;
        }
      }

      ;

      if (state.events.mouse.clicked == false) {
        state.events.mouse.drop_end.clientX = event.clientX;
        state.events.mouse.drop_end.clientY = event.clientY;

        if (document.getElementById('mouse_client_drag_distance_X_end') != null) {
          document.getElementById('mouse_client_drag_distance_X_end').innerHTML = state.events.mouse.drop_end.clientX;
        }

        if (document.getElementById('mouse_client_drag_distance_Y_end') != null) {
          document.getElementById('mouse_client_drag_distance_Y_end').innerHTML = state.events.mouse.drop_end.clientY;
        }
      }

      ;
    });
    root.addEventListener('mouseenter', function (event) {
      state.events.mouse.enter = true;
      state.events.mouse.leave = false;

      if (document.getElementById('mouse_enter') != null) {
        document.getElementById('mouse_enter').innerHTML = state.events.mouse.enter;
      }

      ;
    });
    root.addEventListener('mouseleave', function (event) {
      state.events.mouse.enter = false;
      state.events.mouse.leave = true;

      if (document.getElementById('mouse_enter') != null) {
        document.getElementById('mouse_enter').innerHTML = state.events.mouse.enter;
      }

      ;
    });
    root.addEventListener('keydown', function (event) {
      var current_keyCode = event.keyCode;
      console.log(current_keyCode);
      console.log('keyCode: ' + current_keyCode);
      console.log('keys held: ');
      console.log(state.events.key.keys);
      var matched = false;

      for (var i = 0; i < state.events.key.keys.length; i++) {
        if (state.events.key.keys[i] == current_keyCode) {
          matched = true;
        }

        ;
      }

      ;

      if (matched == false) {
        state.events.key.keys.push(current_keyCode);
      }

      ;
      state.events.key.key_history.push({
        keyCode: current_keyCode
      });

      if (document.getElementById('key_history') != null) {
        document.getElementById('key_history').innerHTML = state.events.key.key_history.length;
      }

      ;
      console.log(state.events.key.keys);

      if (document.getElementById('event_keydown') != null) {
        document.getElementById('event_keydown').innerHTML = "'yes.'";
      }

      ;

      if (document.getElementById('event_latest_keydown') != null) {
        document.getElementById('event_latest_keydown').innerHTML = current_keyCode;
      }

      ;
    });
    root.addEventListener('keyup', function (event) {
      var current_keyCode = event.keyCode;
      var index = state.events.key.keys.indexOf(current_keyCode);

      if (index > -1) {
        state.events.key.keys.splice(index, 1);
      }

      ;
      console.log(current_keyCode);

      if (document.getElementById('event_keydown') != null) {
        if (state.events.key.keys.length == 0) {
          document.getElementById('event_keydown').innerHTML = "'no.'";
        }

        ;
      }

      ;

      if (document.getElementById('event_latest_keyup') != null) {
        document.getElementById('event_latest_keyup').innerHTML = current_keyCode;
      }

      ;
    });
  }

  ; // Mobile

  if (is_Mobile) {
    root.addEventListener('scroll', function (event) {
      console.log("event.srcElement.scrollTop: " + event.srcElement.scrollTop);
    });
    root.addEventListener('touchmove', function (event) {});
    root.addEventListener("touchstart", function (event) {
      //alert('touchstart');
      console.log(event.touches[0]);

      if (document.getElementById('total_touches') != null) {
        document.getElementById('total_touches').innerHTML = event.touches.length;
        document.getElementById('touch_start_client_X').innerHTML = event.touches[0].clientX;
        document.getElementById('dragDistanceXStart').innerHTML = event.touches[0].clientX;
        document.getElementById('touch_start_client_Y').innerHTML = event.touches[0].clientY;
        document.getElementById('dragDistanceYStart').innerHTML = event.touches[0].clientY;
        document.getElementById('touch_start_force').innerHTML = event.touches[0].force;
      }

      state.events.touch.clientX = event.touches[0].clientX;
      state.events.touch.clientY = event.touches[0].clientY;
      state.events.touch.touch_history.push({
        clientY: event.touches[0].clientY,
        clientX: event.touches[0].clientX
      });

      if (document.getElementById('touch_history') != null) {
        document.getElementById('touch_history').innerHTML = state.events.touch.touch_history.length;
      }

      ;
    });
    root.addEventListener("touchend", function (event) {});
  }

  ;
};

handle_time = function handle_time() {
  setInterval(function () {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds(); //console.log(state.data.time);

    if (state.events.mouse.enter == true) {
      state.events.mouse.movetimer += 1;
    }

    ;

    if (state.events.mouse.enter == false) {
      state.events.mouse.movetimer -= 1;
    }

    ;

    if (state.events.mouse.movetimer == 10) {//alert('too long');
    }

    ;
    console.log('state.events.key.timer: ' + state.events.key.timer);

    if (document.getElementById('touch_timer') != null) {
      document.getElementById('touch_timer').innerHTML = state.events.key.timer;
    }

    ;
    console.log('state.events.key.timer: ' + state.events.key.timer);

    if (document.getElementById('key_pressedtimer') != null) {
      document.getElementById('key_pressedtimer').innerHTML = state.events.key.timer;
    }

    ;
    console.log('state.events.key.timer: ' + state.events.key.timer);

    if (document.getElementById('key_heldtimer') != null) {
      document.getElementById('key_heldtimer').innerHTML = state.events.key.timer;
    }

    ;
    console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);

    if (document.getElementById('mouse_dragtimer') != null) {
      document.getElementById('mouse_dragtimer').innerHTML = state.events.mouse.movetimer;
    }

    ;
    console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);

    if (document.getElementById('mouse_clicktimer') != null) {
      document.getElementById('mouse_clicktimer').innerHTML = state.events.mouse.movetimer;
    }

    ;
    console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);

    if (document.getElementById('mouse_entertimer') != null) {
      document.getElementById('mouse_entertimer').innerHTML = state.events.mouse.movetimer;
    }

    ;
    console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);

    if (document.getElementById('mouse_movetimer') != null) {
      document.getElementById('mouse_movetimer').innerHTML = state.events.mouse.movetimer;
    }

    ;
    console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);

    if (document.getElementById('touch_timer') != null) {
      document.getElementById('touch_timer').innerHTML = state.events.mouse.movetimer;
    }

    ;
    console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);

    if (document.getElementById('key_pressedtimer') != null) {
      document.getElementById('key_pressedtimer').innerHTML = state.events.mouse.movetimer;
    }

    ;
    console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);

    if (document.getElementById('key_heldtimer') != null) {
      document.getElementById('key_heldtimer').innerHTML = state.events.mouse.movetimer;
    }

    ;
  }, 1000);
};

handle_looping_accent = function handle_looping_accent() {
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

handle_animations = function handle_animations() {
  (function () {
    var interval = 0;
    setInterval(function () {
      console.log('current frame is: ' + interval);

      if (interval == state.animation.framerate * 0) {
        console.log('0 seconds have passed.');
        handle_time();
      }

      ;

      if (interval == state.animation.framerate * 1) {
        console.log('1 seconds have passed.');
      }

      ;

      if (interval == state.animation.framerate * 10) {
        console.log('10 seconds have passed.');
      }

      ;

      if (interval == state.animation.framerate * 30) {
        console.log('30 seconds have passed.');
      }

      ;

      if (interval == state.animation.framerate * 60) {
        console.log('10 seconds have passed.');
      }

      ;
      interval += 1;
    }, 1000 / state.animation.framerate);
  })();
};

_handle_check_route = function handle_check_route(route) {
  (function () {
    if (route == '/') {
      alert('/');
      setTimeout(function () {
        state.app.route = '/loading';

        _handle_check_route(state.app.route);
      }, 2000);
    }

    ;

    if (route == '/loading') {
      root.innerHTML = "\n                loading\n            ";
      setTimeout(function () {
        state.app.route = '/loaded';

        _handle_check_route(state.app.route);
      }, 2000);
    }

    ;

    if (route == '/loaded') {
      root.innerHTML = "\n                loaded\n            ";
      setTimeout(function () {
        state.app.route = '/home';

        _handle_check_route(state.app.route);
      }, 2000);
    }

    ;

    if (route == '/home') {
      root.innerHTML = "\n                <div id=\"row_accent_noise\"></div>\n                <div id=\"home\">home</div>\n\n                <div id=\"event_orientation_signal\">is_Desktop: <div id=\"is_Desktop\"></div></div>\n                <div id=\"event_orientation_signal\">is_Mobile: <div id=\"is_Mobile\"></div></div>\n\n                <div id=\"event_orientation_signal\">event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div></div>\n                <div id=\"event_orientation_signal\">event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div></div>\n                <div id=\"event_orientation_signal\">event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div></div>\n\n                <div id=\"event_orientation_signal\">event_alpha: <div id=\"event_alpha\"></div></div>\n                <div id=\"event_orientation_signal\">event_beta: <div id=\"event_beta\"></div></div>\n                <div id=\"event_orientation_signal\">event_gamma: <div id=\"event_gamma\"></div></div>\n                <div id=\"event_orientation_signal\">event_landscape: <div id=\"event_landscape\"></div></div>\n                <div id=\"event_orientation_signal\">event_portrait: <div id=\"event_portrait\"></div></div>\n                <div id=\"event_orientation_signal\">event_orientation: <div id=\"event_orientation\"></div></div>\n\n                <div id=\"total_touches_signal\">total_touches: <div id=\"total_touches\"></div></div>\n                <div id=\"touch_history_signal\">touch_history: <div id=\"touch_history\"></div></div>\n                <div id=\"touch_start_client_X_signal\">touch_start_client_X: <div id=\"touch_start_client_X\"></div></div>\n                <div id=\"dragDistanceXStart_signal\">dragDistanceXStart: <div id=\"dragDistanceXStart\"></div></div>\n                <div id=\"touch_start_client_Y_signal\">touch_start_client_Y: <div id=\"touch_start_client_Y\"></div></div>\n                <div id=\"dragDistanceYStart_signal\">dragDistanceYStart: <div id=\"dragDistanceYStart\"></div></div>\n                <div id=\"touch_start_force_signal\">touch_start_force: <div id=\"touch_start_force\"></div></div>\n\n                <div id=\"event_keydown_signal\">event keydown: <div id=\"event_keydown\"></div></div>\n                <div id=\"event_latest_keyup_signal\">event keyup: <div id=\"event_latest_keyup\"></div></div>\n                <div id=\"event_latest_keydown_signal\">event keydown: <div id=\"event_latest_keydown\"></div></div>\n\n                <div id=\"wheel_direction_signal\">event wheel_direction: <div id=\"wheel_direction\"></div></div>\n                <div id=\"clicks_signal\">event clicks: <div id=\"clicks\"></div></div>\n                <div id=\"key_history_signal\">event key_history: <div id=\"key_history\"></div></div>\n\n                <div id=\"mouse_enter_signal\">event mouse_enter: <div id=\"mouse_enter\"></div></div>\n                <div id=\"mouse_movetimer_signal\">event mouse_movetimer: <div id=\"mouse_movetimer\"></div></div>\n                <div id=\"mouse_entertimer_signal\">event mouse_entertimer: <div id=\"mouse_entertimer\"></div></div>\n                <div id=\"mouse_dragtimer_signal\">event mouse_dragtimer: <div id=\"mouse_dragtimer\"></div></div>\n                <div id=\"mouse_clicktimer_signal\">event mouse_clicktimer: <div id=\"mouse_clicktimer\"></div></div>\n                \n                <div id=\"touch_timer_signal\">event touch_timer: <div id=\"touch_timer\"></div></div>\n                <div id=\"key_pressedtimer_signal\">event key_pressedtimer: <div id=\"key_pressedtimer\"></div></div>\n                <div id=\"key_heldtimer_signal\">event key_heldtimer: <div id=\"key_heldtimer\"></div></div>\n                <div id=\"mouse_client_clicked_signal\">event mouse_client_clicked: <div id=\"mouse_client_clicked\"></div></div>\n\n                <div id=\"mouse_client_clicked_X_signal\">event mouse_client_clicked_X: <div id=\"mouse_client_clicked_X\"></div></div>\n                <div id=\"mouse_client_clicked_Y_signal\">event mouse_client_clicked_Y: <div id=\"mouse_client_clicked_Y\"></div></div>\n\n                <div id=\"mouse_client_not_clicked_X_signal\">event mouse_client_not_clicked_X: <div id=\"mouse_client_not_clicked_X\"></div></div>\n                <div id=\"mouse_client_not_clicked_Y_signal\">event mouse_client_not_clicked_Y: <div id=\"mouse_client_not_clicked_Y\"></div></div>\n\n                <div id=\"mouse_client_X_signal\">event mouse_client_X: <div id=\"mouse_client_X\"></div></div>\n                <div id=\"mouse_client_Y_signal\">event mouse_client_Y: <div id=\"mouse_client_Y\"></div></div>\n\n                <div id=\"mouse_client_drag_distance_X_start_signal\">event mouse_client_drag_distance_X_start: <div id=\"mouse_client_drag_distance_X_start\"></div></div>\n                <div id=\"mouse_client_drag_distance_Y_start_signal\">event mouse_client_drag_distance_Y_start: <div id=\"mouse_client_drag_distance_Y_start\"></div></div>\n\n                <div id=\"mouse_client_drag_distance_X_end_signal\">event mouse_client_drag_distance_X_end: <div id=\"mouse_client_drag_distance_X_end\"></div></div>\n                <div id=\"mouse_client_drag_distance_Y_end_signal\">event mouse_client_drag_distance_Y_end: <div id=\"mouse_client_drag_distance_Y_end\"></div></div>\n\n                <div id=\"mouse_client_drag_distance_X_signal\">event mouse_client_drag_distance_X: <div id=\"mouse_client_drag_distance_X\"></div></div>\n                <div id=\"mouse_client_drag_distance_Y_signal\">event mouse_client_drag_distance_Y: <div id=\"mouse_client_drag_distance_Y\"></div></div>\n\n            ";
      document.getElementById('home').addEventListener("click", function (event) {
        alert("home");
      });
    }

    ;
  })();

  handle_device_values();
  window.scrollTo(0, 0);
};

handle_init = function handle_init() {
  (function () {
    var interval = 0;
    setInterval(function () {
      console.log('current frame is: ' + interval);

      if (interval == state.animation.framerate * 0) {
        console.log('0 seconds have passed.');
        handle_animations();
      }

      ;

      if (interval == state.animation.framerate * 1) {
        console.log('1 seconds have passed.');
      }

      ;

      if (interval == state.animation.framerate * 10) {
        console.log('10 seconds have passed.');
      }

      ;

      if (interval == state.animation.framerate * 30) {
        console.log('30 seconds have passed.');
      }

      ;

      if (interval == state.animation.framerate * 60) {
        console.log('10 seconds have passed.');
      }

      ;
      interval += 1;
    }, 1000 / state.animation.framerate);
  })();
};

handle_device_values = function handle_device_values() {
  is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

  if (document.getElementById('is_Desktop') != null) {
    document.getElementById('is_Desktop').innerHTML = is_Desktop;
  }

  ;

  if (document.getElementById('is_Mobile') != null) {
    document.getElementById('is_Mobile').innerHTML = is_Mobile;
  }

  ;
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
}; // init


window.onload = function () {
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

  _handle_check_route(state.app.route);

  handle_device_values();
  handle_inital_events();
  handle_init();
};

window.onresize = function () {
  handle_device_values();
  console.log('state.ux.dimensions.width: ' + state.ux.dimensions.width);
  console.log('state.ux.dimensions.height: ' + state.ux.dimensions.height);
  console.log('state.ux.dimensions.width8: ' + state.ux.dimensions.width8);
  console.log('state.ux.dimensions.height8: ' + state.ux.dimensions.height8);
};

window.ondevicemotion = function (event) {
  handle_device_values();
  var event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
  var event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
  var event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

  if (document.getElementById('event_accelerationIncludingGravity_x') != null) {
    document.getElementById('event_accelerationIncludingGravity_x').innerHTML = event_accelerationIncludingGravity_x;
  }

  ;

  if (document.getElementById('event_accelerationIncludingGravity_y') != null) {
    document.getElementById('event_accelerationIncludingGravity_y').innerHTML = event_accelerationIncludingGravity_y;
  }

  ;

  if (document.getElementById('event_accelerationIncludingGravity_z') != null) {
    document.getElementById('event_accelerationIncludingGravity_z').innerHTML = event_accelerationIncludingGravity_z;
  }

  ;
};

window.ondeviceorientation = function (event) {
  handle_device_values();
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
},{"./style.scss":"style.scss"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52412" + '/');

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
//# sourceMappingURL=/antenuh.com.e31bb0bc.map