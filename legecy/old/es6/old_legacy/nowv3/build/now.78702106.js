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
})({334:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var default_state = {

    app: {
        route: 'null'
    },

    data: {
        dev_mode: false,
        time: '',
        firebase: {},
        wordpress: {},
        feature_posts_limit: 1,
        posts_start: 1,
        posts_limit: 2,
        refs: false,
        sort: 'likes',
        view: 'grid',
        feature_style: 'all',
        type: 'all',
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

    animation: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000,
        scene: 0,
        instances: {
            sixty_four: 0,
            loading: false,
            loaded: false,
            // staging
            key_pressed: false,
            cursor_moved: false,
            scrolled: false,
            // This is now the "HOME" Stage
            scrolled_once: false,
            scrolling: false,
            start: false,
            // This is now the "Start" stage
            learn: false,
            // This is now the "Learn" stage,
            hide: false,
            // This is now the route or page state,
            outdoor1_9: 0, // see anchors
            office1_6: 0, // see anchors
            scrolled_top: false,
            scrolled_bottom: false,
            blog_scrolled_top: false,
            blog_scrolled_bottom: false
        }
    },

    events: {

        mouse: {
            game_bit: {
                clientX: 0,
                clientY: 0
            },
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
            timer: 0,
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
        touch: {
            click: {
                clientX: 0,
                clientY: 0
            },
            clientX: 0,
            clientY: 0,
            up: true,
            down: false,
            drop: {
                clientX: 0,
                clientY: 0
            },
            drag: {
                clientX: 0,
                clientY: 0
            },
            dragDistanceX: 0,
            dragDistanceY: 0,
            enter: true,
            leave: false,
            entertimer: 0,
            leavetimer: 0,
            timer: 0,
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

        colors: {
            bg_black: {
                transform: false,
                opacity: false,
                display: false
            },
            bg_green: {
                transform: false,
                opacity: false,
                display: false
            },
            container_8: {
                transform: false,
                opacity: false,
                display: false
            },
            load_light_yellow_0: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            noise: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            grid_cross: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            grid_depth: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            depth_90: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            loading: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            loaded: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            begin: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            onboarding: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            introduction: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            home: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            horizontal: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            },
            verticle: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4
            }

        },

        stage: {
            null: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },
            loading: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },
            loaded: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },

            home: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },

            introduction: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },

            fold: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },

            enter: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },

            outroduction: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },

            onboarding: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4
            },

            enneagon: {
                roomed: false,
                which_roomed: 'center',
                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0
            }

        },

        blog: {
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

        route: {
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

        pause: {
            transform: false,
            opacity: false,
            display: false
        },

        timeout: {
            transform: false,
            opacity: false,
            display: false
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
                xaxis: -8,
                yaxis: -10,
                height: 16,
                width: 8,
                idle: {
                    floating: false,
                    standing: false,
                    blinking: true,
                    sitting: false,
                    bend: false,
                    prone: false,
                    attacked: false
                },
                action: {
                    jumping: false,
                    punching: false,
                    kicking: false,
                    shooting: false,
                    grabing: false,
                    blocking: false,
                    left: true,
                    right: false
                },
                motion: {
                    walking: false
                }
            },

            enemy: {
                speed: 1,
                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                xaxisascending: true,
                yaxis: .5,
                height: 4,
                width: 2,
                yaxisascending: true,
                actions: {
                    jump: false
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

            parallax_y: {
                layer1: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer2: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer3: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer4: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer5: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer6: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer7: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer8: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                }
            },

            parallax_x: {
                layer1: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer2: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer3: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer4: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer5: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer6: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer7: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                },
                layer8: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow: false,
                    clientYGrow: false
                }
            }
        },

        gui: {

            top: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            top_left: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            top_right: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom_left: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom_right: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            left: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            right: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
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

from_Import();

exports.default = {
    from_Import: from_Import,
    default_state: default_state
};
},{}],339:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = "";

var element_scroll_y_events = function element_scroll_y_events(id, info) {
  var component = "\n      <div id=\"" + id + "\" class=\"position_absolute top_0 width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1\">\n        <div class=\"position_relative width_100 float_left\">\n          " + info + "\n        </div>\n      </div>\n    ";

  setTimeout(function () {
    document.getElementById(id).addEventListener("scroll", function (event) {
      console.log(event);
      //alert('yup');

      // scrolling
      console.log("event.srcElement.clientWidth: " + event.srcElement.clientWidth);
      console.log("event.srcElement.clientHeight: " + event.srcElement.clientHeight);
      console.log("event.srcElement.scrollLeft: " + event.srcElement.scrollLeft);
      console.log("event.srcElement.scrollTop: " + event.srcElement.scrollTop);
      console.log("event.srcElement.scrollWidth: " + event.srcElement.scrollWidth);
      console.log("event.srcElement.scrollHeight: " + event.srcElement.scrollHeight);

      state = _index2.default.Handle_return_state();

      state.ui.route.clientHeight = event.srcElement.clientHeight;
      state.ui.route.clientWidth = event.srcElement.clientWidth;

      state.ui.route.scrollHeight = event.srcElement.scrollHeight;
      state.ui.route.scrollWidth = event.srcElement.scrollWidth;

      state.ui.route.scrollTop = event.srcElement.scrollTop;
      state.ui.route.scrollLeft = event.srcElement.scrollLeft;

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
      }

      // instances
      if (event.srcElement.scrollTop > state.ui.route.component_app_gui_scroll_y_position) {
        console.log("state.ui.route.component_app_gui_scroll_y_position increasing");
        console.log("instance: wheel up");
      }

      if (event.srcElement.scrollTop < state.ui.route.component_app_gui_scroll_y_position) {
        console.log("state.ui.route.component_app_gui_scroll_y_position decreasing");
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
        alert("component_app_modal_element_page_top_content: instance: footer met");
      }

      state.ui.route.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

      console.log("scroll");
      console.log(event);

      _index2.default.Handle_get_state_from_events();
    }, false);
  }, 101);

  return component;
};

var menu_sub = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Nigel\n                  </div>\n              </div>\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div  id=\"route_workshop_2\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Maisie\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";

var element_after_menu_about = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div id=\"route_about_1\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  \n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                    <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Brand\n                  </div>\n\n                  " + menu_sub + "\n\n              </div>\n\n              <div id=\"route_about_2\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Products\n                  </div>\n                  " + menu_sub + "\n              </div>\n\n              <div id=\"route_about_3\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Office\n                  </div>\n                  " + menu_sub + "\n              </div>\n\n              <div id=\"route_about_4\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Staff\n                  </div>\n                  " + menu_sub + "\n              </div>\n\n              <div id=\"route_about_5\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Locations\n                  </div>\n                  " + menu_sub + "\n              </div>\n\n              <div id=\"route_about_6\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Process\n                  </div>\n                  " + menu_sub + "\n              </div>\n\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";

var anchor_menu_left = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";

var anchor_menu_top = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";

var anchor_menu_bottom = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";

var anchor_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";

var component_app_content_root = function component_app_content_root() {
  var component = "\n\n      <div id=\"section_1\" class=\"position_relative width_100 height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n        <div class=\"position_relative max_width width_100 calc_25vh_height margin_auto float_left\">\n\n          <div id=\"logo_filler\" class=\"display_none opacity_0 position_absolute bottom_0 top_0 left_0 right_0 width_40 height_40vh margin_auto float_left\">\n\n              <div id=\"fold_logo\" class=\"position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left\">\n\n              </div>\n\n              <div class=\"position_absolute width_100 top_100 left_0 right_0 margin_auto\">\n\n                  <div id=\"fold_buttons\" class=\"easing_01 display_none opacity_0 position_relative width_100 margin_auto float_left\">\n                    \n                      <div class=\"position_relative margin_auto float_left display_flex_flow  width_100\">\n\n                          <div id=\"gui_start_buttons\" class=\"gui_button_start position_relative width_6025vw height_1205vh float_left\">\n                          </div>\n\n                          <div class=\"gui_or position_relative width_30125vw height_1205vh float_left\">\n                          </div>\n                          \n                          <div id=\"gui_learn_buttons\" class=\"gui_button_learn position_relative width_6025vw height_1205vh float_left\">\n                          </div>\n\n                      </div>\n\n                  </div>\n\n                  <div id=\"start_buttons\" class=\"easing_01 display_none opacity_0 position_relative width_100 margin_auto float_left\">\n                    \n                      <div class=\"position_relative margin_auto float_left display_flex_flow  width_100\">\n                          <div class=\"gui_button_start position_relative width_6025vw height_1205vh float_left\">\n                          </div>\n                      </div>\n\n                  </div>\n\n                  <div id=\"learn_buttons\" class=\"easing_01 display_none opacity_0 position_relative width_100 margin_auto float_left\">\n                    \n                      <div class=\"position_relative margin_auto float_left display_flex_flow  width_100\">\n                          <div id=\"gui_learn_buttons\" class=\"gui_button_learn position_relative width_6025vw height_1205vh float_left\">\n                          </div>\n                      </div>\n\n                  </div>\n\n                  <div id=\"fold_scroll\" class=\"easing_01 display_none opacity_0 position_absolute top_100 left_0 right_0 width_100 margin_auto\">\n                      <div class=\"position_relative margin_auto float_left display_flex_flow  width_100\">\n                          <div class=\"gui_scroll pulse infinite animated1 position_relative width_6025vw height_1205vh float_left\">\n                          </div>\n                      </div>\n                  </div>\n\n                  <div id=\"fold_scroll_again\" class=\"easing_01 display_none opacity_0 position_absolute top_100 left_0 right_0 width_100 margin_auto\">\n                      <div class=\"position_relative margin_auto float_left display_flex_flow  width_100\">\n                          <div class=\"gui_arrow_bottom pulse infinite animated1 position_relative width_6025vw height_1205vh float_left\">\n                          </div>\n                      </div>\n                  </div>\n\n              </div>\n\n              <div id=\"fold_note\" class=\"easing_01 display_none opacity_0 position_absolute width_100 height_100 top_100 left_0 right_0 margin_auto float_left\">\n                  <div class=\" position_absolute width_25 height_25 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note\">\n                  </div>\n              </div>\n\n          </div>\n\n          <div id=\"start_ctas\" class=\"easing_01 display_none opacity_0 position_absolute bottom_0 top_0 right_0 width_60 height_100 margin_auto float_left\">\n            \n            <div class=\"position_relative width_100 height_50 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"position_relative width_50 height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"position_relative calc_5vh margin_auto float_left\">\n                \n                  <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left\">\n                    \n                    <div class=\"width_100 height_25 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                      \n                      <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                        <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                          \n                        </div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"width_100 height_75 float_left position_relative float_left margin_auto\">\n                      \n                      <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          \n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                      </div>\n\n                      <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          \n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div class=\"position_relative width_50 height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"position_relative calc_5vh margin_auto float_left\">\n        \n                  <div class=\"position_relative width_100 height_50 margin_auto float_left\">\n                    \n\n                    <div class=\"width_100 height_25 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                      \n                      <div class=\"width_6025vw height_100 float_left position_relative float_left margin_auto z_index_7\">\n                        <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                          \n                        </div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"width_100 height_75 float_left position_relative float_left margin_auto\">\n\n                      <div class=\"width_100 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                        \n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto\">\n                              \n                          <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              \n                            <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                          </div>\n\n                          <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              \n                            <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                          </div>\n\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"position_relative width_100 height_50 margin_auto float_left\">\n                    \n\n                    <div class=\"width_100 height_25 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                      \n                      <div class=\"width_6025vw height_100 float_left position_relative float_left margin_auto z_index_7\">\n                        <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                          \n                        </div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"width_100 height_75 float_left position_relative float_left margin_auto\">\n\n                      <div class=\"width_100 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                        \n                        <div class=\"width_33 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                        <div class=\"width_33 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                        <div class=\"width_33 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_relative width_100 height_50 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div class=\"position_relative calc_5vh margin_auto float_left\">\n              \n                <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left\">\n                    \n                  <div class=\"position_relative margin_auto float_left display_flex_flow height_50 width_100\">\n\n                    <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left\">\n                          \n\n                          <div class=\"height_100 width_25 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                          </div>\n\n\n                          <div class=\"height_100 width_75 float_left position_relative float_left margin_auto\">\n                            \n                            <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                \n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                            </div>\n\n                            <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                \n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                            </div>\n\n                          </div>\n\n                        </div>\n                    \n                  </div>\n\n                  <div class=\"position_relative margin_auto float_left display_flex_flow height_50 width_100\">\n\n                    <div class=\"position_relative margin_auto float_left display_flex_flow height_100 width_50\">\n\n                        <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"position_relative margin_auto float_left display_flex_flow height_100 width_50\">\n\n                        <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n          <div id=\"learn_ctas\" class=\"easing_01 display_none opacity_0 position_absolute bottom_0 top_0 left_0 width_60 height_100 bg_yellow margin_auto float_left\">\n            \n            <div class=\"position_relative width_100 height_50 margin_auto float_left\">\n              <div class=\"position_relative calc_5vh bg_yellow margin_auto float_left\">\n              \n              </div>\n            </div>\n\n            <div class=\"position_relative width_100 height_50 margin_auto float_left\">\n              <div class=\"position_relative calc_5vh bg_yellow margin_auto float_left\">\n              \n              </div>\n            </div>\n            \n          </div>\n\n          <div id=\"scrolling_ctas\" class=\"easing_01 display_none opacity_0 position_absolute top_0 left_0 width_100 height_25vh bg_green margin_auto float_left\">\n            \n          </div>\n\n        </div>\n      </div>\n\n      <div id=\"section_2\" class=\"position_relative width_100 height_100vh gradient_yellow_bottom float_left display_flex_flow\">\n            \n      </div>\n\n      <div id=\"section_3\" class=\"position_relative width_100 height_100vh bg_yellow float_left display_flex_flow\">\n              \n          <div class=\"gui_dash position_absolute bottom_0 top_0 left_0 right_0 width_50 height_50 margin_auto float_left\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 left_0 width_100 height_100 gradient_yellow_left float_left display_flex_flow\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 right_0 width_100 height_100 gradient_yellow_right float_left display_flex_flow\">\n          </div>\n\n\n            <div class=\"easing_01 position_absolute width_100 height_100 bottom_0 left_0 right_0 margin_auto float_left\">\n              \n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n            </div>\n\n      </div>\n\n      <div id=\"section_4\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Action #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Match Loggin & Local</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled Bottom Blog</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Timed Nav vanish</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded + cursor_moved</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"section_5\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_6\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_7\" class=\"position_relative width_100 height_100vh margin_auto gui_paint_bottom float_left\">\n      \n      </div>\n\n      <div id=\"section_8\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n  ";

  return component;
};

var component_app_content_blog = function component_app_content_blog() {
  var element = "\n\n    \n        <div id=\"component_app_content_blog\" class=\"position_relative width_100 height_100vh overflow_y scrollbary  scrollbary-scrollbar-light-yellow-9 scrollbary-yellow bg_yellow float_left\">\n          \n\n          <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n              \n              <div class=\"position_relative width_100 max_width height_50vh bg_yellow margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n                \n              </div>\n\n          </div>\n\n          <div id=\"wp_component_feature_posts\" class=\"position_relative width_100 bg_white float_left\">\n              \n              <div id=\"element_ol_firebase_library_feature\" class=\"position_relative width_100 float_left\"></div>\n\n          </div>\n\n          <div id=\"wp_component_posts\" class=\"position_relative width_100 bg_white float_left\">\n                  \n              <div class=\"position_relative width_100 float_left display_flex_flow\">\n                \n                  <div id=\"wp_component_blog\" class=\"position_relative float_left display_flex_flow\">\n\n                      <div id=\"element_ol_firebase_library\" class=\"position_relative width_100 float_left\"></div>\n\n                      <b>roster</b><br>\n\n                      <div id=\"element_ol_firebase_roster\" class=\"position_relative width_100 float_left\"></div>\n\n                      <div id=\"element_ol_firebase_partners\" class=\"position_relative width_100 float_left\"></div>\n\n                      <div id=\"element_ol_firebase_abilities\" class=\"position_relative width_100 float_left\"></div>\n\n                      <div id=\"element_ol_firebase_skills\" class=\"position_relative width_100 float_left\"></div>\n\n                      <div id=\"element_ol_firebase_services\" class=\"position_relative width_100 float_left\"></div>\n\n                  </div>\n\n                  <div id=\"wp_component_sidebar\" class=\"position_relative width_100 height_100vh float_left display_flex_flow bg_white\">\n                    <div class=\"position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n\n                      <div class=\"position_relative calc_4vh_width padding_1vh border_1vh_yellow float_left display_flex_flow\">\n\n                          <br>\n                          <b>Create new library post</b><br>\n                          <input type=\"text\" id=\"element_input_title\" placeholder=\"new title\" class=\"position_relative width_100 float_left\" /><br>\n\n                          <input type=\"text\" id=\"element_input_type\" placeholder=\"new type\" class=\"position_relative width_100 float_left\" /><br>\n\n                          <input type=\"text\" id=\"element_input_subtitle\" placeholder=\"new subtitle\" class=\"position_relative width_100 float_left\" /><br>\n\n                          <input type=\"text\" id=\"element_input_paragraph\" placeholder=\"new paragraph\" class=\"position_relative width_100 float_left\" /><br>\n\n                          <input type=\"text\" id=\"element_input_category\" placeholder=\"new category\" class=\"position_relative width_100 float_left\" /><br>\n\n                          <input type=\"text\" id=\"element_input_sub_category\" placeholder=\"new sub category\" class=\"position_relative width_100 float_left\" /><br>\n\n                          <input type=\"text\" id=\"element_input_feature_style\" placeholder=\"new feature_style\" class=\"position_relative width_100 float_left\" /><br>\n\n                          <input type=\"text\" id=\"element_input_tag\" placeholder=\"new tag\" class=\"position_relative width_100 float_left\" /><br>\n                          \n                          <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_create\">create library post</button>\n                          </div>\n\n                      </div>\n\n                      <div class=\"position_relative calc_4vh_width padding_1vh border_1vh_yellow float_left display_flex_flow\">\n\n                          <br>\n                          <b>Filter post</b><br>\n                          <input type=\"text\" id=\"element_input_filter\" placeholder=\"by title\" class=\"position_relative width_100 float_left\" /><br>\n                          \n                          <br>\n                          <b>Limit post</b><br>\n                          <input type=\"text\" id=\"element_input_limit\" placeholder=\"how many post would you like to see\" value=\"6\" class=\"position_relative width_100 float_left\" /><br>\n                          \n                          <br>  \n                          <b>Sort post</b><br>\n                          <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_sorting_type_viewsup\">views up</button>\n                            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_sorting_type_viewsdown\">views down</button>\n                            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_sorting_type_likesup\">likes up</button>\n                            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_sorting_type_likesdown\">likes down</button>\n                            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_sorting_type_timeup\">time up</button>\n                            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_sorting_type_timedown\">time down</button>\n                          </div>\n\n                          <br>\n                          <b>Change view</b><br>\n                          <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_view_grid\">grid</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_view_card\">card</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_view_list\">list</button><br>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_view_thumbs\">thumbs</button><br>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_view_full\">full</button><br>\n                          </div>\n\n                          <b>Change type</b><br>\n                          <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_type_abilities\">abilities</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_type_skills\">skills</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_type_services\">services</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_type_roster\">roster</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_type_partners\">partners</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_type_library\">library</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_type_all\">all</button>\n                          </div>\n\n                          <b>Change category</b><br>\n                          <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_category_development\">development</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_category_design\">design</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_category_graphics\">graphics</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_category_motion\">motion</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_category_strategy\">strategy</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_category_content\">content</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_category_all\">all</button>\n                          </div>\n\n                          <b>Change style</b><br>\n                          <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_feature_style_all\">all</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_feature_style_ux\">ux</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_feature_style_video\">video</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_feature_style_code\">code</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_feature_style_read\">read</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_feature_style_graphic\">graphic</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_feature_style_photo\">photo</button>\n                          <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"element_input_feature_style_gallery\">gallery</button>\n                          </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n\n              </div>\n\n          </div>\n\n        </div>\n    ";

  return element;
};

var element_guis = function element_guis() {
  var element = "\n\n      <div id=\"component_app_gui_top_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed top_0 left_0 margin_auto z_index_10\">\n\n          <div class=\"enterTop animated1 position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_menu\" class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                " + element_after_menu_about + "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class=\"enterTop animated1 position_relative margin_auto width_6025vw height_1205vh float_left transform_translate3d_left0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left\">\n              \n              <div id=\"icon_logo\" class=\"gui_logo position_relative width_100 height_100 margin_auto top_-05vh float_left\"></div>\n\n            </div>\n\n          </div>\n\n          <div class=\"enterTop animated1 position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_search\" class=\"gui_search position_relative width_50 height_50 float_left\">\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class=\"enterTop animated1 position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_back\" class=\"gui_arrow_left position_relative width_75 height_50 float_left\">\n              </div>\n\n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"component_app_gui_top_center\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed calc_25vh_width top_0 left_0 right_0 margin_auto z_index_10\">\n\n      </div>\n\n      <div id=\"component_app_gui_top_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_10vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_10\">\n\n        <div id=\"icon_sign_out\" class=\"display_none opacity_0 width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_signout width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            " + element_after_menu_about + "\n          </div>\n        </div>\n\n        <div id=\"icon_sign_in\" class=\"display_none opacity_0 width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_signin width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            " + element_after_menu_about + "\n          </div>\n        </div>\n\n        <div id=\"icon_sign_up\" class=\"display_none opacity_0 width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_signup width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            " + element_after_menu_about + "\n          </div>\n        </div>\n        \n        <div class=\"position_relative width_6025vw height_1205vh float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n          <div id=\"icon_dots\" class=\"gui_dots position_relative width_50 height_50 float_left\">\n            " + element_after_menu_about + "\n          </div>\n        </div>\n\n        <div id=\"icon_dashboard\" class=\"display_none opacity_0 width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"user_thumb\" class=\"gui_user_blank width_50 height_50 float_left position_relative float_left margin_auto\"></div>\n            " + element_after_menu_about + "\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 right_0 margin_auto z_index_10\">\n\n      </div>\n\n      <div id=\"component_app_gui_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 left_0 margin_auto z_index_10\">\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed bottom_0 left_0 margin_auto z_index_10\">\n        \n        <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n        <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n        <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n        <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_center\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed calc_25vh_width bottom_0 left_0 right_0 margin_auto z_index_10\">\n        \n        <div class=\"width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n          <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div class=\"gui_button_hire width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n              \n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_10\">\n\n        <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n        <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n        <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n        <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n        <div class=\"enterTop animated1 position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div id=\"icon_up\" class=\"gui_arrow_top position_relative width_75 height_50 float_left\">\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    ";

  return element;
};

var value_ui_controls = "\n\n\n        <div class=\"position_relative width_100 float_left\">\n        <div class=\"position_relative calc_5vh margin_205vh float_left\">\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">events:</div>\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            Usual Events\n            </div>\n\n            <div class=\"position_relative font_size_2vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            time: <div id=\"time\"></div>\n            </div>\n\n\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n              64\n            </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse:</div>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_X: <div id=\"mouse_up_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_Y: <div id=\"mouse_up_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_X: <div id=\"mouse_down_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_Y: <div id=\"mouse_down_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up: <div id=\"mouse_up\"></div>\n            </p>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            click_position: <div id=\"click_position\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            wheel_direction: <div id=\"wheel_direction\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse down track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXstart: <div id=\"mousedragDistanceXstart\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYstart: <div id=\"mousedragDistanceYstart\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse up track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXend: <div id=\"mousedragDistanceXend\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYend: <div id=\"mousedragDistanceYend\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drag:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragX: <div id=\"dragX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragY: <div id=\"dragY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pen:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penX: <div id=\"penX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penY: <div id=\"penY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pencil:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilX: <div id=\"pencilX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilY: <div id=\"pencilY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_start:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_end:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">ux:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">dimensions:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_dimensions_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_dimensions_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">browser:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_browser_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_browser_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">Timer:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_leave: <div id=\"timer_mouse_leave\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_key_up: <div id=\"timer_key_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_up: <div id=\"timer_mouse_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            keys: <div id=\"key_keys\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key down: <div id=\"key_key_down\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key up: <div id=\"key_key_up\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Absolute: \n  <div id=\"component_app_status_state_events_mouse_absolute\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Alpha: \n  <div id=\"component_app_status_state_events_mouse_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Beta: \n  <div id=\"component_app_status_state_events_mouse_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Gamma: \n  <div id=\"component_app_status_state_events_mouse_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.x: \n  <div id=\"component_app_status_state_events_mouse_acceleration_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.y: \n  <div id=\"component_app_status_state_events_mouse_acceleration_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.z: \n  <div id=\"component_app_status_state_events_mouse_acceleration_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.x: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.y: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.z: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Alpha: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Beta: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Gamma: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            rotationAngle: <div id=\"rotationAngle\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusX: <div id=\"radiusX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusY: <div id=\"radiusY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceX: <div id=\"dragDistanceX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceY: <div id=\"dragDistanceY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXStart: <div id=\"dragDistanceXStart\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYStart: <div id=\"dragDistanceYStart\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXEnd: <div id=\"dragDistanceXEnd\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYEnd: <div id=\"dragDistanceYEnd\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_X: <div id=\"touch_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_Y: <div id=\"touch_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_X: <div id=\"touch_page_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_Y: <div id=\"touch_page_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touches: <div id=\"touches\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_X: <div id=\"touch_start_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_Y: <div id=\"touch_start_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_force: <div id=\"touch_start_force\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_X: <div id=\"touch_end_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_Y: <div id=\"touch_end_client_Y\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone Only:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_force: <div id=\"touch_end_force\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad VR:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last_action: <div id=\"last_action\"></div>\n            </p>\n\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad Oriontation:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_alpha: <div id=\"event_alpha\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_beta: <div id=\"event_beta\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_gamma: <div id=\"event_gamma\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">Component API:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientHeight (Container Height): <div id=\"scroll_clientHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientWidth: <div id=\"scroll_clientWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollHeight (Max Scroll Height): <div id=\"scroll_scrollHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollWidth: <div id=\"scroll_scrollWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollTop (Current Scroll): <div id=\"scroll_scrollTop\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollLeft: <div id=\"scroll_scrollLeft\"></div>\n            </p>\n\n\n        \n  <div class=\"position_relative width_100 float_left \">\n  UI state:\n  </div>\n  <div class=\"position_relative width_100 float_left\">\n  Route State (Onboarding, Form, Search, Interaction):\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Setting:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Accent:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Effect:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Pieces:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Particles:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Interaction:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Characters:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">enemies: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Route:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Materials: \n  <div id=\"route\" class=\" position_relative display opacity_1\">materials</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Gui:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">logo: \n  <div id=\"component_app_status_display_gui_element_logo\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">arrows: \n  <div id=\"component_app_status_display_gui_element_arrows\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">buttons: \n  <div id=\"component_app_status_display_gui_element_buttons\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_10vh\">Modal:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pop</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pip</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">nav</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">page</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">menu</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">morph</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">corner</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">gradient</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">fade</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">overlay</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  </div>\n  </div>\n  ";

var element_nav_top = "\n    <div id=\"component_app_modal_element_nav_top\" class=\"easing_01 display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 margin_auto height_1205vh calc_20vh_width z_index_6 \">\n      \n      <div class=\"position_relative webkit_box_pack_center webkit_box_align display_webkit_box width_100 z_index_1 float_left\">\n          \n        <div class=\"margin_auto position_relative float_left z_index_1 \">\n\n          <div id=\"routes\" class=\"margin_auto position_relative float_left z_index_1 \">\n\n              <div class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div id=\"route_about\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\">\n\n                    <div id=\"route_about_icon\" class=\"circle position_absolute right_100 top_0 bottom_0 width_10 height_100 margin_1025vh float_left\">\n                      " + anchor_menu_right + "\n                    </div>\n\n                  </div>\n\n                  " + element_after_menu_about + "\n\n                </div>\n\n              </div>\n\n              <div class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_team\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                " + element_after_menu_about + "\n\n                </div>\n              </div>\n\n              <div class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_library\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                " + element_after_menu_about + "\n\n                </div>\n              </div>\n\n              <div class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_abilities\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                " + element_after_menu_about + "\n                \n                </div>\n              </div>\n\n              <div class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_partners\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                " + element_after_menu_about + "\n                \n                </div>\n              </div>\n\n              <div class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_services\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                " + element_after_menu_about + "\n\n                </div>\n              </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n    ";

var element_nav_left = "\n    <div id=\"component_app_modal_element_nav_left\" class=\"easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_6 margin_auto\">\n      \n      <div class=\"position_absolute bottom_0 left_0 right_0 float_left calc_02vh display_flex_flow border_01vh_black\">\n      </div>\n      \n    </div>\n    ";

var element_nav_bottom = "\n    <div id=\"component_app_modal_element_nav_bottom\" class=\"easing_01 transform_translate3d_top0 display_none opacity_0 position_fixed bottom_0 left_0 right_0 height_10vh width_100 z_index_6 display_flex_flow margin_auto\">\n      \n    </div>\n    ";

var element_nav_right = "\n    <div id=\"component_app_modal_element_nav_right\" class=\"easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 bottom_0 right_0 height_100 width_10vh z_index_6 margin_auto\">\n      \n    </div>\n    ";

var element_page_top = "\n    <div id=\"component_app_modal_element_page_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_6 margin_auto\">\n      <div id=\"component_app_modal_element_page_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n        \n        <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n        </div>\n\n      </div>\n\n    </div>\n    ";

var element_page_left = "\n    <div id=\"component_app_modal_element_page_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_6 margin_auto\">\n      <div id=\"component_app_modal_element_page_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n        " + component_app_content_blog() + "\n      </div>\n    </div>\n    ";

var element_page_bottom = "\n    <div id=\"component_app_modal_element_page_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_page_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n        \n\n      </div>\n    </div>\n    ";

var element_page_right = "\n    <div id=\"component_app_modal_element_page_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_page_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n        <div id=\"dashboard_posts\" class=\"position_relative width_100 float_left\"></div>\n      </div>\n    </div>\n    ";

var element_pop_top = "\n    <div id=\"component_app_modal_element_pop_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6\">\n      <div id=\"component_app_modal_element_pop_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n    ";

var element_pop_left = "\n  <div id=\"component_app_modal_element_pop_left\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pop_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh margin_auto max_width \">\n        \n\n    </div>\n  </div>\n  ";

var element_pop_bottom = "\n    <div id=\"component_app_modal_element_pop_bottom\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_pop_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 z_index_6 margin_auto bg_white\">\n            \n            <div class=\"easing_01 face_nigel position_absolute width_100 height_100 bottom_0 left_0 right_0 margin_auto float_left\">\n            </div>\n\n            <div id=\"fold_continue\" class=\"easing_01 position_absolute width_100 height_1205vh bottom_0 bg_yellow box_shadow_top_1vh_dark left_0 right_0 margin_auto float_left\">\n                \n                <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                    \n                    <div class=\"display_flex_flow position_relative margin_auto float_left\">\n                      \n                      <p class=\"line_height_1205vh font_size_6025vh float_left position_relative\">\n                        press\n                      </p>\n                      \n                      <div class=\"position_relative margin_auto float_left\">\n                          <div class=\"gui_button_enter position_relative width_1205vh height_1205vh float_left\">\n                          </div>\n                      </div>\n\n                      <p class=\"line_height_1205vh font_size_6025vh float_left position_relative\">\n                        to continue.\n                      </p>\n\n                    </div>\n\n                </div>\n            \n            </div>\n\n      </div>\n    </div>\n  ";

var element_pop_right = "\n  <div id=\"component_app_modal_element_pop_right\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pop_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden bg_yellow border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_6 margin_auto\">\n      \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n\n                    <br>\n                    <b>Create new user</b><br>\n                    <input type=\"text\" id=\"new_username\" placeholder=\"new username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"new_password\" placeholder=\"new password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_create_user\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create user</button>\n                    </div>\n\n                    <br>\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_login\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">login user</button>\n                    </div>\n\n                </div>\n\n    </div>\n  </div>\n  ";

var element_pip_top = "\n    <div id=\"component_app_modal_element_pip_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6\">\n      <div id=\"component_app_modal_element_pip_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n    ";

var element_pip_left = "\n  <div id=\"component_app_modal_element_pip_left\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pip_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n  </div>\n  ";

var element_pip_bottom = "\n    <div id=\"component_app_modal_element_pip_bottom\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_pip_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n  ";

var element_pip_right = "\n  <div id=\"component_app_modal_element_pip_right\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pip_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n  </div>\n  ";

var element_morph_top = "\n    <div id=\"component_app_modal_element_morph_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";

var element_morph_left = "\n    <div id=\"component_app_modal_element_morph_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";

var element_morph_bottom = "\n    <div id=\"component_app_modal_element_morph_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";

var element_morph_right = "\n    <div id=\"component_app_modal_element_morph_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";

var element_corner_top = "\n    <div id=\"component_app_modal_element_corner_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";

var element_corner_left = "\n    <div id=\"component_app_modal_element_corner_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";

var element_corner_bottom = "\n    <div id=\"component_app_modal_element_corner_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";

var element_corner_right = "\n    <div id=\"component_app_modal_element_corner_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";

var element_menu_top = "\n    <div id=\"component_app_modal_element_menu_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh_width height_25vh margin_auto z_index_6\">\n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>\n   ";

var element_menu_left = "\n    <div id=\"component_app_modal_element_menu_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh_height width_25vw margin_auto z_index_6\">      \n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>";

var element_menu_bottom = "\n    <div id=\"component_app_modal_element_menu_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh_width height_25vh margin_auto z_index_6\">\n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>\n    ";

var element_menu_right = "\n    <div id=\"component_app_modal_element_menu_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh_height width_25vw margin_auto z_index_6\">\n       \n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            " + value_ui_controls + "\n          </div>\n        </div>\n    </div>\n    ";

var element_fade_top = "\n    <div id=\"component_app_modal_element_fade_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";

var element_fade_left = "\n    <div id=\"component_app_modal_element_fade_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";

var element_fade_bottom = "\n    <div id=\"component_app_modal_element_fade_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";

var element_fade_right = "\n    <div id=\"component_app_modal_element_fade_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";

var element_overlay_top = "\n    <div id=\"component_app_modal_element_overlay_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";

var element_overlay_left = "\n    <div id=\"component_app_modal_element_overlay_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";

var element_overlay_bottom = "\n    <div id=\"component_app_modal_element_overlay_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";

var element_overlay_right = "\n    <div id=\"component_app_modal_element_overlay_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";

var element_gradient_top = "\n    <div id=\"component_app_modal_element_gradient_top\" class=\"bg_yellow easing_1 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_6\">\n\n      <div class=\"position_absolute top_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto\">\n        <div class=\"position_absolute top_-1vh left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_bottom\"></div>\n      </div>\n\n    </div>\n    ";

var element_gradient_left = "\n    <div id=\"component_app_modal_element_gradient_left\" class=\"bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100vw height_100vh margin_auto z_index_6\">\n    \n      <div class=\"position_absolute left_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_right\"></div>\n\n</div>\n    ";

var element_gradient_bottom = "\n    <div id=\"component_app_modal_element_gradient_bottom\" class=\"bg_yellow easing_1 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_6\">\n    \n      <div class=\"position_absolute bottom_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_top\"></div>\n\n    </div>\n    ";

var element_gradient_right = "\n    <div id=\"component_app_modal_element_gradient_right\" class=\"bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto z_index_6\">\n    \n      <div class=\"position_absolute right_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_left\"></div>\n    \n    </div>\n    ";

exports.default = {
  component_app_content_root: component_app_content_root,
  element_guis: element_guis,
  value_ui_controls: value_ui_controls,

  // modals
  element_nav_top: element_nav_top,
  element_nav_left: element_nav_left,
  element_nav_bottom: element_nav_bottom,
  element_nav_right: element_nav_right,
  element_pip_top: element_pip_top,
  element_pip_left: element_pip_left,
  element_pip_bottom: element_pip_bottom,
  element_pip_right: element_pip_right,
  element_pop_top: element_pop_top,
  element_pop_left: element_pop_left,
  element_pop_bottom: element_pop_bottom,
  element_pop_right: element_pop_right,
  element_page_top: element_page_top,
  element_page_left: element_page_left,
  element_page_bottom: element_page_bottom,
  element_page_right: element_page_right,
  element_menu_top: element_menu_top,
  element_menu_left: element_menu_left,
  element_menu_bottom: element_menu_bottom,
  element_menu_right: element_menu_right,
  element_morph_top: element_morph_top,
  element_morph_left: element_morph_left,
  element_morph_bottom: element_morph_bottom,
  element_morph_right: element_morph_right,
  element_fade_top: element_fade_top,
  element_fade_left: element_fade_left,
  element_fade_bottom: element_fade_bottom,
  element_fade_right: element_fade_right,
  element_gradient_top: element_gradient_top,
  element_gradient_left: element_gradient_left,
  element_gradient_bottom: element_gradient_bottom,
  element_gradient_right: element_gradient_right,
  element_corner_top: element_corner_top,
  element_corner_left: element_corner_left,
  element_corner_bottom: element_corner_bottom,
  element_corner_right: element_corner_right,
  element_overlay_top: element_overlay_top,
  element_overlay_left: element_overlay_left,
  element_overlay_bottom: element_overlay_bottom,
  element_overlay_right: element_overlay_right,

  element_scroll_y_events: element_scroll_y_events,
  element_after_menu_about: element_after_menu_about,

  anchor_menu_left: anchor_menu_left,
  anchor_menu_top: anchor_menu_top,
  anchor_menu_bottom: anchor_menu_bottom,
  anchor_menu_right: anchor_menu_right
};
},{"../index.js":3}],336:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

var _elements = require('./elements');

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';

var from_Import = function from_Import() {
    console.log('from functions');
};

function test(fruit) {
    // extract conditions to array
    var redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

    if (redFruits.includes(fruit)) {
        throw 'red';
    }
}

// rest parameters
function add() {
    var result = 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var arg = _step.value;
            result += arg;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
}

console.log(add(1)); // returns 1
console.log(add(1, 2)); // returns 3
console.log(add(1, 2, 3, 4, 5)); // returns 15

var arr = ["Joy", "Wangari", "Warugu"];
var newArr = ["joykare"].concat(arr);
console.log(newArr);

var x = 20;
x = 50;

console.log(x); // SyntaxError: identifier "x" has already been declared.

// A Common Scope Gotcha
// If stamement do not have local sc
if (true) {
    var foo = 5;
};

console.log(foo); // 5

var countVowels = function countVowels(str) {
    return Array.from(str).filter(function (letter) {
        return 'aeiou'.includes(letter);
    }).length;
};

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0

function randomFunction() {
    console.log(this);
}

var newObj = {
    description: "This is a new Object"
};

console.log(randomFunction.bind(newObj)());
console.log(randomFunction.call(newObj));
console.log(randomFunction.apply(newObj));

var drSeuss = '\n  My name is Sam I Am ' + 1 + '\n  I do not like green eggs and ham\n  Lunchtime is here\n  Come and eat\n';

console.log(drSeuss);

// filter
function fishy(colors) {
    // use Array filter to find fruits in color
    var fishes = [{ name: 'apple', color: 'red' }, { name: 'strawberry', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'pineapple', color: 'yellow' }, { name: 'grape', color: 'purple' }, { name: 'plum', color: 'purple' }];

    return fishes.filter(function (f) {
        return f.color == color;
    });
}

// EVERY
function test(colors) {
    var fruits = [{ name: 'apple', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'grape', color: 'purple' }];

    // condition: short way, all fruits must be red
    var isAllRed = fruits.every(function (f) {
        return f.color == 'red';
    });

    console.log(isAllRed); // false
};

// SOME
function emu(colors) {
    var niggas = [{ name: 'apple', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'grape', color: 'purple' }];

    // condition: if any fruit is red
    var isAnyRed = fruits.some(function (f) {
        return f.color == 'red';
    });

    console.log(isAnyRed); // true
};

// es5
var es5sayHello = function es5sayHello() {
    return 'hello!';
};

// es6 with explicit return
var explicitsayHello = function explicitsayHello() {
    return 'hello!';
};

// es6 with implicit return
var implicitsayHello = function implicitsayHello() {
    return 'hello';
};

// Default Parameters in ES6
var garage = function garage() {
    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Mustang';
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'blue';
    var car = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Ford';

    console.log(model);
    console.log(color);
    console.log(car);
};

var ninjas = {
    description: "This is a new Object",
    randomFunction: function randomFunction() {
        var that = this;

        return function () {
            console.log(that);
        };
    }
};

ninjas.randomFunction()();

// 5. Functions
var Generate_new_fragment = document.createDocumentFragment();

var Generate_new_div = function Generate_new_div(innerHTML, classString, idString, index) {
    var g = document.createElement('div');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g;
};

var Generate_new_link = function Generate_new_link(innerHTML, classString, idString, index) {
    var g = document.createElement('a');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g;
};

var Generate_new_span = function Generate_new_span(innerHTML, classString, idString, index) {
    var g = document.createElement('span');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g;
};

var Generate_new_li = function Generate_new_li(data) {
    console.log(data.title);
    var ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", data.title);
    ELEMENT.classList = data.title;

    state = _index2.default.Handle_return_state();

    if (data != null) {

        ELEMENT.innerHTML = '\n        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">\n          \n          <div id="post_block_1" style="\n           background-image: url(' + data.feature_image_src + '); background-size: cover;" class="width_100 height_100 position_relative float_left">\n          \n            <div id="post_block_3">\n              <p>likes:' + data.likes + '</p>\n              <p>dislikes:' + data.dislikes + '</p>\n            </div>\n\n          </div>\n\n          <div id="post_block_2">\n            <p>likes:' + data.likes + '</p>\n            <p>dislikes:' + data.dislikes + '</p>\n          </div>\n\n          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">\n            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>\n            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>\n            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>\n            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>\n          </div>\n\n        </div>\n\n      ';
    };

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].children[2].children[0].addEventListener("click", function (event) {
        _index2.default.likeWhoListings('library', data.id);
    });

    ELEMENT.children[0].children[2].children[1].addEventListener("click", function (event) {
        _index2.default.dislikeWhoListings('library', data.id);
    });

    ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {
        _index2.default.viewWhoListings('library', data.id);
    });

    ELEMENT.children[0].children[2].children[3].addEventListener("click", function (event) {
        _index2.default.deleteWhoListings('library', data.id);
    });

    ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {

        var preview = function preview() {

            // function start (preview)
            var post_preview_from_li_link = '';
            var preview_content = '';
            var preview_scrolling_container = '';
            var preview_bg_container = '\n                    <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1">\n                    </div>\n\n                    <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_black opacity_01 z_index_1">                \n                    </div>\n\n                    <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh z_index_1">\n                 \n                        <div class="position_absolute top_0 left_0 margin_auto width_205vh height_205vh z_index_1">\n                            <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_left width_50 height_50 z_index_1">\n                            </div>\n                        </div>\n\n                        <div class="position_absolute top_0 right_0 margin_auto width_205vh height_205vh z_index_1">\n                            <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_right width_50 height_50 z_index_1">\n                            </div>\n                        </div>\n\n                        <div class="position_absolute bottom_0 left_0 margin_auto width_205vh height_205vh z_index_1">\n                            <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_left width_50 height_50 z_index_1">\n                            </div>\n                        </div>\n\n                        <div class="position_absolute bottom_0 right_0 margin_auto width_205vh height_205vh z_index_1">\n                            <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_right width_50 height_50 z_index_1">\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div style="background-image: url(' + data.feature_image_src + '); background-size: cover;" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1">\n                 \n                    </div>\n                  \n                ';
            var preview_title_container = '\n                    <div class="position_absolute top_0 left_0 right_0 float_left width_100 height_10vh bg_blue margin_auto z_index_2 text_align_center box_shadow_bottom_1vh_dark font_size_5vh line_height_10vh border_01vh_dark_yellow_9 ">\n                        ' + data.title + ' ' + data.type + '\n                    </div>\n                ';
            var preview_control_container = '<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_pop_top_content_close' + number + '" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_pop_top_content_enter' + number + '" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>';

            preview_content = '\n                  <div class="position_relative float_left width_100 height_50vh margin_auto">\n                      ' + data.title + ' ' + data.type + '\n                  </div>\n\n                  <div class="position_relative float_left width_100 height_50vh margin_auto">\n                      ' + data.title + ' ' + data.type + '\n                  </div>\n                  \n                  <div class="position_relative float_left width_100 height_50vh margin_auto">\n                      ' + data.title + ' ' + data.type + '\n                  </div>\n\n                  <div class="position_relative float_left width_100 height_50vh margin_auto">\n                      ' + data.title + ' ' + data.type + '\n                  </div>\n                  \n                  <div class="position_relative float_left width_100 height_50vh margin_auto">\n                      ' + data.title + ' ' + data.type + '\n                  </div>\n\n                  <div class="position_relative float_left width_100 height_50vh margin_auto">\n                      ' + data.title + ' ' + data.type + '\n                  </div>\n                ';

            preview_scrolling_container = _elements2.default.element_scroll_y_events('element_scroll_y_events_pop', preview_content);
            post_preview_from_li_link = '<div class="position_absolute width_100 height_100 margin_auto">' + preview_bg_container + '\n                <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh overflow_hidden margin_205vh z_index_1">\n                ' + preview_title_container + '<div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh z_index_1">' + preview_scrolling_container + '</div></div>' + preview_control_container + '</div>';

            preview_container.innerHTML = post_preview_from_li_link;

            state.ui.modal.pop.top.display = true;

            setTimeout(function () {
                state.ui.modal.pop.top.transform = false;
            }, 101);

            // add event listeners
            setTimeout(function () {

                document.getElementById('component_app_modal_element_pop_top_content_close' + number + '').addEventListener('click', function (event) {
                    // function start (Preview close)
                    state.ui.modal.pop.top.display = true;
                    state.ui.modal.pop.top.transform = true;
                });

                page();
            }, 101);
        };

        var page = function page() {
            // ON TO DETAIL
            document.getElementById('component_app_modal_element_pop_top_content_enter' + number + '').addEventListener('click', function (event) {

                // function start (Detail)
                var post_detail_from_li_link = '';

                var detail_content = '\n                          \n                          <div class="position_relative float_left width_100 height_100vh margin_auto">\n                              PAGE\n                          </div>\n                          \n                          <div class="position_relative float_left width_100 height_100vh margin_auto">\n                              ' + data.title + ' <div class="position_relative float_left width_100 margin_auto"></div>\n                          </div>\n\n                        ';

                var route_background = '';

                var foreground_content = '';

                var scrolling_container = _elements2.default.element_scroll_y_events('element_scroll_y_events_page', detail_content);

                var control_container = '<div class="position_absolute bottom_0 top_0 right_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_page_top_content_close' + number + '" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_page_top_content_enter' + number + '" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>';

                post_detail_from_li_link = '\n                            <div style="background-image: url(' + data.feature_image_src + '); background-size: cover;" id="post_detail_from_li_link" class="position_absolute width_100 height_100vh margin_auto">\n                                \n                                ' + route_background + '\n                                <div id="scrolling_container">\n                                ' + scrolling_container + '\n                                </div>\n                                ' + control_container + '\n                                ' + foreground_content + '\n\n                            </div>';

                page_container.innerHTML = post_detail_from_li_link;

                state.ui.modal.page.top.display = true;

                setTimeout(function () {
                    state.ui.modal.page.top.transform = false;
                }, 101);

                overlay();
            });
        };

        var overlay = function overlay() {
            // add event listeners
            setTimeout(function () {

                document.getElementById('component_app_modal_element_page_top_content_close' + number + '').addEventListener('click', function (event) {
                    // function start (Preview close)
                    state.ui.modal.page.top.display = true;
                    state.ui.modal.page.top.transform = true;
                });

                // ON TO overlay
                document.getElementById('component_app_modal_element_page_top_content_enter' + number + '').addEventListener('click', function (event) {

                    // overlay 
                    state.ui.modal.overlay.top.display = true;
                    state.ui.modal.overlay.top.transform = true;

                    // function start (Detail)
                    var post_overlay_from_li_link = '';
                    var overlay_content = '\n                                    \n                                    <div class="position_relative float_left width_100 height_100vh margin_auto">\n                                        overlay\n                                    </div>\n                                    \n                                    <div class="position_relative float_left width_100 height_100vh margin_auto">\n                                        ' + data.title + ' <div class="position_relative float_left width_100 margin_auto"></div>\n                                    </div>\n\n                                ';

                    var overlay_scrolling_container = '';
                    var control_container = '<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_overlay_top_content_close' + number + '" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_overlay_top_content_enter' + number + '" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>';

                    overlay_scrolling_container = _elements2.default.element_scroll_y_events('element_scroll_y_events_overlay', overlay_content);
                    post_overlay_from_li_link = '<div style="background-image: url(' + data.feature_image_src + '); background-size: cover;" id="post_overlay_from_li_link" class="position_absolute width_100 height_100vh margin_auto">' + overlay_scrolling_container + control_container + '</div>';

                    overlay_container.innerHTML = post_overlay_from_li_link;

                    state.ui.modal.overlay.top.display = true;

                    setTimeout(function () {
                        state.ui.modal.overlay.top.transform = false;
                    }, 101);

                    // add event listeners
                    setTimeout(function () {
                        document.getElementById('component_app_modal_element_overlay_top_content_close' + number + '').addEventListener('click', function (event) {

                            // function start (Preview close)
                            state.ui.modal.overlay.top.display = true;
                            state.ui.modal.overlay.top.transform = true;
                        });

                        // ON TO pip
                        document.getElementById('component_app_modal_element_overlay_top_content_enter' + number + '').addEventListener('click', function (event) {

                            pip();
                        });
                    }, 101);
                });
            }, 101);
        };

        var pip = function pip() {
            // pip 
            state.ui.modal.pip.bottom.display = true;
            state.ui.modal.pip.bottom.transform = true;

            // function start (Detail)
            var post_pip_from_li_link = '';
            var pip_content = '\n                    \n                    <div class="position_relative float_left width_100 height_100vh margin_auto">\n                        \n                    </div>\n                    \n                    <div class="position_relative float_left width_100 height_100vh margin_auto">\n                        ' + data.title + ' <div class="position_relative float_left width_100 margin_auto"></div>\n                    </div>\n\n                ';

            var pip_scrolling_container = '';
            var pip_control_container = '<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_pip_bottom_content_close' + number + '" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_pip_bottom_content_enter' + number + '" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>';

            pip_scrolling_container = _elements2.default.element_scroll_y_events('element_scroll_y_events_pip', pip_content);
            post_pip_from_li_link = '<div style="background-image: url(' + data.feature_image_src + '); background-size: cover;" id="post_pip_from_li_link" class="position_absolute width_100 height_100vh margin_auto">' + pip_scrolling_container + '</div>' + pip_control_container;

            pip_container.innerHTML = post_pip_from_li_link;

            state.ui.modal.pip.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.pip.bottom.transform = false;
            }, 101);

            // add event listeners
            setTimeout(function () {
                document.getElementById('component_app_modal_element_pip_bottom_content_close' + number + '').addEventListener('click', function (event) {

                    // function start (Preview close)
                    state.ui.modal.pip.bottom.display = true;
                    state.ui.modal.pip.bottom.transform = true;
                });

                // ON TO DONE
                document.getElementById('component_app_modal_element_pip_bottom_content_enter' + number + '').addEventListener('click', function (event) {

                    alert('DONE!');
                });
            }, 101);
        };

        // function start (Preview)
        var number = Math.floor(Math.random() * 101000000000000 + 1);

        var preview_container = document.getElementById('component_app_modal_element_pop_top_content');
        var page_container = document.getElementById('component_app_modal_element_page_top_content');
        var overlay_container = document.getElementById('component_app_modal_element_overlay_top_content');
        var pip_container = document.getElementById('component_app_modal_element_pip_bottom_content');

        preview();
    });

    return ELEMENT;
};

// Handles
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
            };
        };

        if (Ui_State == false) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

                // remove item after buffer
                setTimeout(function () {
                    MANIPULATED.classList.add(addThisClass_if_state_false);
                    MANIPULATED.classList.remove(addThisClass_if_state_true);
                }, 1);

                return;
            };
        };
    };
};

var Toggle_display_and_opacity_on_with_no_delay = function Toggle_display_and_opacity_on_with_no_delay(id) {

    var MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

            // remove item immediatly
            setTimeout(function () {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            // remove item after buffer
            setTimeout(function () {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');
            }, 100);

            return;
        };
    };
};

var Toggle_display_and_opacity_off_with_delay = function Toggle_display_and_opacity_off_with_delay(id) {

    var MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function () {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 0);

            // remove item after buffer
            setTimeout(function () {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 100);

            return;
        };
    };
};

from_Import();

exports.default = {
    from_Import: from_Import,
    Generate_new_link: Generate_new_link,
    Generate_new_fragment: Generate_new_fragment,
    Generate_new_div: Generate_new_div,
    Generate_new_span: Generate_new_span,
    Generate_new_li: Generate_new_li,
    Toggle_functions_IF_State: Toggle_functions_IF_State,
    Toggle_classes_IF_State: Toggle_classes_IF_State,
    Toggle_display_and_opacity_on_with_no_delay: Toggle_display_and_opacity_on_with_no_delay,
    Toggle_display_and_opacity_off_with_delay: Toggle_display_and_opacity_off_with_delay
};
},{"../index.js":3,"./elements":339}],335:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = ''; // Imports

var dragging = false;

setTimeout(function () {

    // Desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

        if (document.getElementById('output') != null) {
            var theGamepad = navigator.getGamepads()[0];
            (function () {

                var hasGamePad = false;
                var updateEvent = null;

                var out = document.getElementById("output");

                var canGame = function canGame() {
                    return "getGamepads" in navigator;
                };

                var trimToThree = function trimToThree(n) {
                    return Math.round(n * 1000) / 1000;
                };

                var reportOnGamepad = function reportOnGamepad() {
                    var html = "";
                    theGamepad = navigator.getGamepads()[0];
                    html += "Name: " + theGamepad.id + "<br/><br/>";
                    for (var i = 0; i < theGamepad.buttons.length; i++) {
                        var val = trimToThree(theGamepad.buttons[i].value);
                        var isPressed = theGamepad.buttons[i].pressed;
                        html += 'Button ' + (i + 1) + ' : ' + val + ' ' + isPressed;
                        html += "<br/>";
                    }
                    html += "<br />";
                    for (var i = 0; i < theGamepad.axes.length; i += 2) {
                        html += "<br />Stick " + (Math.ceil(i / 2) + 1) + ": <br />";
                        var x = trimToThree(theGamepad.axes[i]);
                        var y = trimToThree(theGamepad.axes[i + 1]);
                        html += 'X: ' + x + '<br />';
                        html += 'Y: ' + y + '<br/>';
                    }
                    out.innerHTML = html;
                };

                if (canGame()) {
                    var prompt = "To begin using your gamepad, connect it and press any button!";
                    output.innerHTML = prompt;

                    window.addEventListener("gamepadconnected", function () {
                        hasGamePad = true;
                        out.innerHTML = "Gamepad connected!";
                        updateEvent = window.setInterval(reportOnGamepad, 1000 / 60);
                    });

                    window.addEventListener("gamepaddisconnected", function () {
                        hasGamePad = false;
                        out.innerHTML = prompt;
                        window.clearInterval(updateEvent);
                    });
                }

                var rumbleStrong = function rumbleStrong(intensity) {
                    if (!navigator.getGamepads()[0]) return;
                    navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
                        duration: 500,
                        strongMagnitude: intensity,
                        weakMagnitude: 0,
                        startDelay: 0
                    });
                };

                var rumbleWeak = function rumbleWeak(intensity) {
                    if (!navigator.getGamepads()[0]) return;
                    navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
                        duration: 500,
                        strongMagnitude: 0,
                        weakMagnitude: intensity,
                        startDelay: 0
                    });
                };

                var rumbleBoth = function rumbleBoth(intensity) {
                    if (!navigator.getGamepads()[0]) return;
                    navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
                        duration: 500,
                        strongMagnitude: intensity,
                        weakMagnitude: intensity,
                        startDelay: 0
                    });
                };

                document.getElementById('rumbleStrong').addEventListener('click', function (event) {
                    rumbleStrong(1);
                });

                document.getElementById('rumbleWeak').addEventListener('click', function (event) {
                    rumbleWeak(1);
                });

                document.getElementById('rumbleBoth').addEventListener('click', function (event) {
                    rumbleBoth(1);
                    alert('rumbleBoth');
                });

                document.getElementById('rumbleStrong_less').addEventListener('click', function (event) {
                    rumbleStrong(0.25);
                });

                document.getElementById('rumbleWeak_less').addEventListener('click', function (event) {
                    rumbleWeak(0.25);
                });

                document.getElementById('rumbleBoth_less').addEventListener('click', function (event) {
                    rumbleBoth(0.25);
                });
            })();
        }

        document.getElementById('component_app_body').addEventListener('click', function (event) {

            state = _index2.default.Handle_return_state();

            // console.log('state in events');
            state.events.mouse.click.clientX = event.clientX;
            state.events.mouse.click.clientY = event.clientY;
            console.log(state.events.mouse.click.clientX);
            console.log(state.events.mouse.click.clientY);
            console.log('click');

            // x axis: 1
            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:1 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 1;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
                };
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:1 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 2;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
                };
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:1 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 3;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
                };
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:1 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 4;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
                };
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:1 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 5;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
                };
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:1 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 6;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
                };
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:1 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 7;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
                };
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:1 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 8;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
                };
            };

            // x axis: 2

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:2 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:2 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 2;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:2 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 3;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:2 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 4;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:2 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 5;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:2 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 6;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:2 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 7;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:2 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 8;
            };

            // x axis: 3
            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:3 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:3 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 2;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:3 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 3;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:3 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 4;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:3 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 5;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:3 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 6;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:3 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 7;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:3 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 8;
            };

            // x axis: 4
            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:4 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:4 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 2;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:4 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 3;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:4 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 4;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:4 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 5;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:4 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 6;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:4 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 7;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:4 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 8;
            };

            // x axis: 5
            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:5 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:5 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 2;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:5 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 3;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:5 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 4;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:5 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 5;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:5 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 6;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:5 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 7;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:5 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 8;
            };

            // x axis: 6

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:6 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:6 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 2;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:6 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 3;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:6 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 4;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:6 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 5;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:6 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 6;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:6 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 7;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:6 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 8;
            };

            // x axis: 7
            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:7 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:7 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 2;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:7 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 3;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:7 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 4;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:7 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 5;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:7 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 6;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:7 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 7;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:7 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 8;
            };

            // x axis: 8
            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:8 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:8 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 2;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:8 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 3;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:8 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 4;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:8 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 5;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:8 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 6;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:8 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.office1_6 = 2;

                _index2.default.check_door();
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:8 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 8;
            };

            _index2.default.Handle_get_state_from_events();
        });

        document.getElementById('component_app_body').addEventListener('wheel', function (event) {
            state = _index2.default.Handle_return_state();

            // console.log('state in events');
            console.log('wheel');

            if (event.deltaY < 0) {
                console.log('wheel up');

                if (document.getElementById('wheel_direction') != null) {
                    document.getElementById('wheel_direction').innerHTML = 'up';
                    console.log("instance: wheel up");
                    _index2.default.event_wheel_up();
                };
            };

            if (event.deltaY > 0) {
                console.log('wheel down');
                state.ui.root.wheels += 1;
                console.log('wheels: ' + state.ui.root.wheels);

                if (document.getElementById('wheel_direction') != null) {
                    document.getElementById('wheel_direction').innerHTML = 'down';
                    console.log("instance: wheel down");
                    _index2.default.event_wheel_down();
                };

                // wheeled
                if (state.ui.root.wheels >= 1) {

                    if (state.animation.instances.loaded == true && state.animation.instances.cursor_moved == true && state.animation.instances.key_pressed == true && state.animation.instances.scrolled == false && state.animation.instances.scrolling == false && state.animation.instances.start == false && state.animation.instances.learn == false) {
                        _index2.default.HANDLE_animation_scrolled();
                        state.ui.root.wheels = 0;

                        setTimeout(function () {
                            state.ui.root.isWheeling = true;
                        }, 1500);

                        return;
                    };
                };

                // wheeled powerful
                if (state.ui.root.wheels >= 1) {
                    if (state.animation.instances.loaded == true && state.animation.instances.cursor_moved == true && state.animation.instances.key_pressed == true && state.animation.instances.scrolled == true && state.animation.instances.scrolling == false && state.animation.instances.start == false && state.animation.instances.learn == false) {

                        if (state.ui.root.isWheeling == true) {
                            _index2.default.HANDLE_animation_scrolled_down();
                            state.ui.root.wheels = 0;
                        };

                        return;
                    };
                };
            };

            _index2.default.Handle_get_state_from_events();
        });

        document.getElementById('component_app_body').addEventListener('keydown', function (event) {
            state = _index2.default.Handle_return_state();
            // console.log('state in events');
            console.log('keydown');

            var keyCode = event.keyCode;
            console.log('keyCode: ' + keyCode);
            console.log('keys held: ');
            console.log(state.events.key.keys);

            var matched = false;

            for (var i = 0; i < state.events.key.keys.length; i++) {
                if (state.events.key.keys[i] == event.keyCode) {
                    matched = true;
                };
            };

            if (matched == false) {
                state.events.key.keys.push(event.keyCode);
            };

            // esc
            if (keyCode == 27) {
                console.log('esc');
                _index2.default.sound1.play();
                // key_pressed
                _index2.default.HANDLE_animation_key_pressed();
            };

            // NEXT LINE
            // `
            if (keyCode == 192) {
                console.log('tildy');
                // from_index.HANDLE_animation_null();
                state.ui.interaction.player_1.idle.sitting = !state.ui.interaction.player_1.idle.sitting;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.blinking = false;
            };
            // one
            if (keyCode == 49) {
                console.log('1');
                // from_index.HANDLE_animation_1();
                state.ui.interaction.player_1.idle.standing = !state.ui.interaction.player_1.idle.standing;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.blinking = false;
            };
            // two
            if (keyCode == 50) {
                console.log('2');
                // from_index.HANDLE_animation_2();
                state.ui.interaction.player_1.idle.blinking = !state.ui.interaction.player_1.idle.blinking;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.standing = false;
            };
            // three
            if (keyCode == 51) {
                console.log('3');
                // from_index.HANDLE_animation_3();
            };
            // four
            if (keyCode == 52) {
                console.log('4');
                // from_index.HANDLE_animation_4();
            };
            // five
            if (keyCode == 53) {
                console.log('5');
                // from_index.HANDLE_animation_5();
            };
            // six
            if (keyCode == 54) {
                console.log('6');
                // from_index.HANDLE_animation_6();
            };
            // seven
            if (keyCode == 55) {
                console.log('7');

                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.shooting = true;
                };

                // from_index.HANDLE_animation_7();
            };
            // eight
            if (keyCode == 56) {
                console.log('8');
                // from_index.HANDLE_animation_8();
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.grabing = true;
                };
            };

            // nine
            if (keyCode == 57) {
                console.log('9');
                // from_index.HANDLE_animation_9();

                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.blocking = true;
                };
            };

            // zero
            if (keyCode == 48) {
                console.log('0');
                // from_index.HANDLE_animation_0();
            };

            // -
            if (keyCode == 189) {
                console.log('-');
                //from_index.HANDLE_animation_minus();
                state.ui.interaction.player_1.height -= 1;
                state.ui.interaction.player_1.width -= 1;
            };

            // =
            if (keyCode == 187) {
                console.log('+');
                //from_index.HANDLE_animation_plus();
                state.ui.interaction.player_1.height += 1;
                state.ui.interaction.player_1.width += 1;
            };

            // =
            if (keyCode == 8) {
                console.log('delete');
                _index2.default.HANDLE_animation_delete();
            };

            // NEXT LINE
            // tab
            if (keyCode == 9) {
                console.log('delete');
                _index2.default.HANDLE_animation_tab();
            };

            // q
            if (keyCode == 81) {
                //from_index.HANDLE_animation_q();
                _index2.default.HANDLE_animation_modals_hide();
            };

            // w
            if (keyCode == 87) {
                //from_index.HANDLE_animation_w();

                if (state.ui.interaction.player_1.idle.blinking == true) {
                    state.ui.interaction.player_1.idle.floating = true;
                    state.ui.interaction.player_1.idle.blinking = false;
                    state.ui.interaction.player_1.idle.standing = false;
                    state.ui.interaction.player_1.idle.sitting = false;
                    state.ui.interaction.player_1.idle.bend = false;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = true;
                    state.ui.interaction.player_1.idle.standing = false;
                    state.ui.interaction.player_1.idle.sitting = false;
                    state.ui.interaction.player_1.idle.bend = false;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }

                if (state.ui.interaction.player_1.idle.sitting == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = false;
                    state.ui.interaction.player_1.idle.standing = true;
                    state.ui.interaction.player_1.idle.sitting = false;
                    state.ui.interaction.player_1.idle.bend = false;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }

                if (state.ui.interaction.player_1.idle.bend == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = false;
                    state.ui.interaction.player_1.idle.standing = false;
                    state.ui.interaction.player_1.idle.sitting = true;
                    state.ui.interaction.player_1.idle.bend = false;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }

                if (state.ui.interaction.player_1.idle.prone == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = false;
                    state.ui.interaction.player_1.idle.standing = false;
                    state.ui.interaction.player_1.idle.sitting = false;
                    state.ui.interaction.player_1.idle.bend = true;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }
            };

            //e
            if (keyCode == 69) {
                _index2.default.HANDLE_animation_e();
            };

            //r
            if (keyCode == 82) {
                _index2.default.HANDLE_animation_r();
            };

            //t
            if (keyCode == 84) {
                _index2.default.HANDLE_animation_t();
            };

            //y
            if (keyCode == 89) {
                _index2.default.HANDLE_animation_y();
            };

            // u
            if (keyCode == 85) {
                _index2.default.HANDLE_animation_u();
            };

            //i
            if (keyCode == 73) {
                _index2.default.HANDLE_animation_i();
            };

            //o
            if (keyCode == 79) {
                _index2.default.HANDLE_animation_o();
            };

            //p
            if (keyCode == 80) {
                _index2.default.HANDLE_animation_p();
            };

            //[
            if (keyCode == 219) {
                _index2.default.HANDLE_animation_left_bracket();
            };

            //]
            if (keyCode == 221) {
                _index2.default.HANDLE_animation_right_bracket();
            };

            //\
            if (keyCode == 220) {
                _index2.default.HANDLE_animation_forward_slash();
            };

            // NEXT LINE

            // caps lock
            if (keyCode == 220) {};

            // a
            if (keyCode == 65) {};

            // s
            if (keyCode == 83) {

                if (state.ui.interaction.player_1.idle.floating == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = true;
                    state.ui.interaction.player_1.idle.standing = false;
                    state.ui.interaction.player_1.idle.sitting = false;
                    state.ui.interaction.player_1.idle.bend = false;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }

                if (state.ui.interaction.player_1.idle.blinking == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = false;
                    state.ui.interaction.player_1.idle.standing = true;
                    state.ui.interaction.player_1.idle.sitting = false;
                    state.ui.interaction.player_1.idle.bend = false;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }

                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = false;
                    state.ui.interaction.player_1.idle.standing = false;
                    state.ui.interaction.player_1.idle.sitting = true;
                    state.ui.interaction.player_1.idle.bend = false;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }

                if (state.ui.interaction.player_1.idle.sitting == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = false;
                    state.ui.interaction.player_1.idle.standing = false;
                    state.ui.interaction.player_1.idle.sitting = false;
                    state.ui.interaction.player_1.idle.bend = true;
                    state.ui.interaction.player_1.idle.prone = false;
                    return;
                }

                if (state.ui.interaction.player_1.idle.bend == true) {
                    state.ui.interaction.player_1.idle.floating = false;
                    state.ui.interaction.player_1.idle.blinking = false;
                    state.ui.interaction.player_1.idle.standing = false;
                    state.ui.interaction.player_1.idle.sitting = false;
                    state.ui.interaction.player_1.idle.bend = false;
                    state.ui.interaction.player_1.idle.prone = true;
                    return;
                }
            };

            // d
            if (keyCode == 68) {};

            // f
            if (keyCode == 70) {};

            // g
            if (keyCode == 71) {};

            // h
            if (keyCode == 72) {};

            // j
            if (keyCode == 74) {};

            // k
            if (keyCode == 75) {};

            // l
            if (keyCode == 76) {};

            // ;
            if (keyCode == 186) {};

            // '
            if (keyCode == 222) {};

            // enter

            if (keyCode == 13) {
                console.log('enter');
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.punching = true;
                };
            };

            // NEXTLINE

            // shift left
            if (event.code == 'ShiftLeft') {};

            // shift right
            if (event.code == 'ShiftRight') {};

            // shift
            if (keyCode == 16) {
                state.data.dev_mode = !state.data.dev_mode;
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.kicking = true;
                };
            };

            // z
            if (keyCode == 90) {};

            // x
            if (keyCode == 88) {};

            // c
            if (keyCode == 67) {};

            // v
            if (keyCode == 86) {};

            // b
            if (keyCode == 66) {};

            // n
            if (keyCode == 78) {};

            // m
            if (keyCode == 77) {};

            // ,
            if (keyCode == 188) {};

            // .
            if (keyCode == 190) {};

            // /
            if (keyCode == 191) {};

            // NEXT LINE

            // control
            if (keyCode == 17) {};

            // alt
            if (keyCode == 18) {};

            // command
            if (keyCode == 91) {};

            // command right
            if (keyCode == 93) {};

            // space
            if (keyCode == 32) {
                console.log('spacebar');

                state.data.local = !state.data.local;
                //state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform;

                state.ui.gui.top_left.display = !state.ui.gui.top_left.display;
                state.ui.gui.top_right.display = !state.ui.gui.top_right.display;

                //from_index.HANDLE_animation_resize();
                state.events.key.pressed.key_space = true;

                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.yaxis = 1;
                    state.ui.interaction.player_1.action.jumping = true;
                    state.ui.interaction.player_1.action.punching = false;
                };

                var bullet = {
                    clientX: state.ui.interaction.player_1.xaxis,
                    clientY: state.ui.interaction.player_1.yaxis
                };

                state.ui.interaction.snake.create = true;
            };

            // arrow left
            if (keyCode == 37) {
                state.events.key.pressed.key_arrow_left = true;
                state.ui.interaction.player_1.action.left = true;
                state.ui.interaction.player_1.action.right = false;

                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.motion.walking = true;
                };

                //snake
                state.ui.interaction.snake.direction = 'left';

                // parallax
                state.ui.interaction.parallax_x.layer1.clientX -= 1;
                state.ui.interaction.parallax_x.layer2.clientX -= 1;
                state.ui.interaction.parallax_x.layer3.clientX -= 1;
                state.ui.interaction.parallax_x.layer4.clientX -= 1;
                state.ui.interaction.parallax_x.layer5.clientX -= 1;
                state.ui.interaction.parallax_x.layer6.clientX -= 1;
                state.ui.interaction.parallax_x.layer7.clientX -= 1;
                state.ui.interaction.parallax_x.layer8.clientX -= 1;
            };

            // arrow right
            if (keyCode == 39) {
                state.events.key.pressed.key_arrow_right = true;
                state.ui.interaction.player_1.action.left = false;
                state.ui.interaction.player_1.action.right = true;

                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.motion.walking = true;
                };

                //snake
                state.ui.interaction.snake.direction = 'right';
                // parallax
                state.ui.interaction.parallax_x.layer1.clientX += 1;
                state.ui.interaction.parallax_x.layer2.clientX += 1;
                state.ui.interaction.parallax_x.layer3.clientX += 1;
                state.ui.interaction.parallax_x.layer4.clientX += 1;
                state.ui.interaction.parallax_x.layer5.clientX += 1;
                state.ui.interaction.parallax_x.layer6.clientX += 1;
                state.ui.interaction.parallax_x.layer7.clientX += 1;
                state.ui.interaction.parallax_x.layer8.clientX += 1;
            };

            // arrow up
            if (keyCode == 38) {
                state.ui.interaction.player_1.yaxis += .25;

                state.ui.stage.enneagon.yaxis += 1;
                state.ui.interaction.snake.direction = 'up';

                state.ui.interaction.parallax_y.layer1.clientY += 1;
                state.ui.interaction.parallax_y.layer2.clientY += 1;
                state.ui.interaction.parallax_y.layer3.clientY += 1;
                state.ui.interaction.parallax_y.layer4.clientY += 1;
                state.ui.interaction.parallax_y.layer5.clientY += 1;
                state.ui.interaction.parallax_y.layer6.clientY += 1;
                state.ui.interaction.parallax_y.layer7.clientY += 1;
                state.ui.interaction.parallax_y.layer8.clientY += 1;
            };

            // arrow down
            if (keyCode == 40) {
                state.ui.interaction.player_1.yaxis -= .25;

                state.ui.stage.enneagon.yaxis -= 1;
                state.ui.interaction.snake.direction = 'down';

                state.ui.interaction.parallax_y.layer1.clientY -= 1;
                state.ui.interaction.parallax_y.layer2.clientY -= 1;
                state.ui.interaction.parallax_y.layer3.clientY -= 1;
                state.ui.interaction.parallax_y.layer4.clientY -= 1;
                state.ui.interaction.parallax_y.layer5.clientY -= 1;
                state.ui.interaction.parallax_y.layer6.clientY -= 1;
                state.ui.interaction.parallax_y.layer7.clientY -= 1;
                state.ui.interaction.parallax_y.layer8.clientY -= 1;
            };

            if (document.getElementById('key_keys') != null) {
                document.getElementById('key_keys').innerHTML = state.events.key.keys;
            }

            if (document.getElementById('key_key_down') != null) {
                document.getElementById('key_key_down').innerHTML = event.keyCode;
            }

            _index2.default.Handle_get_state_from_events();
        });

        document.getElementById('component_app_body').addEventListener('keyup', function (event) {
            state = _index2.default.Handle_return_state();
            // console.log('state in events');
            console.log('keyup');

            state = _index2.default.Handle_return_state();
            console.log('event: keyup');
            console.log(event);
            var index = state.events.key.keys.indexOf(event.keyCode);
            var keyCode = event.keyCode;

            //state.animation.scene = (state.animation.scene + 1);
            //alert(state.animation.scene);

            if (index > -1) {
                state.events.key.keys.splice(index, 1);
            };

            if (document.getElementById('key_keys') != null) {
                document.getElementById('key_keys').innerHTML = state.events.key.keys;
            }

            if (document.getElementById('key_key_up') != null) {
                document.getElementById('key_key_up').innerHTML = keyCode;
            }

            // arrow left
            if (keyCode == 37) {
                state.events.key.pressed.key_arrow_left = false;
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.motion.walking = false;
                }
            };

            // arrow right
            if (keyCode == 39) {
                state.events.key.pressed.key_arrow_right = false;
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.motion.walking = false;
                }
            };

            if (keyCode == 13) {
                console.log('enter');
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.punching = false;
                };
            };

            if (keyCode == 16) {
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.kicking = false;
                };
            };

            if (keyCode == 55) {
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.shooting = false;
                };
            };

            if (keyCode == 56) {
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.grabing = false;
                };
            };

            if (keyCode == 57) {
                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.blocking = false;
                };
            };

            if (keyCode == 32) {
                console.log('spacebar');
                state.events.key.pressed.key_space = false;

                if (state.ui.interaction.player_1.idle.standing == true) {
                    state.ui.interaction.player_1.action.jumping = false;
                    state.ui.interaction.player_1.action.punching = false;
                    state.ui.interaction.player_1.yaxis = 0;
                };
            };

            _index2.default.Handle_get_state_from_events();
        });

        var myFunction = function myFunction(x) {
            console.log(x);
        };

        window.addEventListener("scroll", myFunction(event));

        document.getElementById('component_app_body').addEventListener('mousemove', function (event) {

            state = _index2.default.Handle_return_state();

            console.log('mousemove only');
            console.log(event);

            console.log('mousemove: event.clientX: ' + event.clientX);
            console.log('mousemove: event.clientY: ' + event.clientY);

            state.events.mouse.clientX = event.clientX;
            state.events.mouse.clientY = event.clientY;

            // cursor enter
            if (state.animation.instances.loaded == true && state.animation.instances.cursor_moved == false) {
                _index2.default.HANDLE_animation_cursor_moved();
            };

            // x axis: 1
            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:1 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 1;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
                };

                state.animation.instances.sixty_four = 1;
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:1 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 2;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
                };

                state.animation.instances.sixty_four = 9;
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:1 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 3;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
                };

                state.animation.instances.sixty_four = 17;
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:1 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 4;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
                };

                state.animation.instances.sixty_four = 25;
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:1 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 5;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
                };

                state.animation.instances.sixty_four = 33;
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:1 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 6;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
                };

                state.animation.instances.sixty_four = 41;
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:1 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 7;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
                };

                state.animation.instances.sixty_four = 49;
            };

            if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:1 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 8;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
                };

                state.animation.instances.sixty_four = 57;
            };

            // x axis: 2

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:2 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 2;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:2 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 10;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:2 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 18;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:2 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 26;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:2 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 34;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:2 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 42;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:2 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 50;
            };

            if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:2 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 58;
            };

            // x axis: 3
            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:3 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 3;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:3 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 11;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:3 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 19;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:3 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 27;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:3 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 35;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:3 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 43;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:3 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 51;
            };

            if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:3 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 59;
            };

            // x axis: 4
            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:4 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 4;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:4 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 12;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:4 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 20;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:4 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 28;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:4 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 36;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:4 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 44;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:4 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 52;
            };

            if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:4 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 60;
            };

            // x axis: 5
            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:5 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 5;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:5 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 13;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:5 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 21;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:5 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 29;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:5 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 37;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:5 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 45;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:5 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 53;
            };

            if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:5 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 61;
            };

            // x axis: 6

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:6 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 6;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:6 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 14;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:6 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 22;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:6 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 30;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:6 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 38;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:6 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 46;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:6 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 54;
            };

            if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:6 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 62;
            };

            // x axis: 7
            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:7 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 7;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:7 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 15;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:7 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 23;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:7 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 31;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:7 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 39;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:7 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 47;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:7 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 55;
            };

            if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:7 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 63;
            };

            // x axis: 8
            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:8 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 8;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:8 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 16;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:8 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 24;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:8 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 32;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:8 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 40;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:8 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 48;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:8 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 56;
            };

            if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:8 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 64;
            };

            if (document.getElementById('mouse_client_X') != null) {
                document.getElementById('mouse_client_X').innerHTML = state.events.mouse.clientX;

                if (state.events.mouse.up == true) {
                    document.getElementById('mousedragDistanceXend').innerHTML = state.events.mouse.clientX;
                    if (state.data.dev_mode == true) {
                        state.events.mouse.pencil.clientX = state.events.mouse.clientX;
                    };
                };

                if (state.events.mouse.up == false) {
                    state.events.mouse.drag.clientX = state.events.mouse.clientX;
                    if (state.data.dev_mode == true) {
                        state.events.mouse.pen.clientX = state.events.mouse.clientX;
                    };
                    document.getElementById('mousedragDistanceXstart').innerHTML = state.events.mouse.clientX;
                };
            }

            if (document.getElementById('mouse_client_Y') != null) {
                document.getElementById('mouse_client_Y').innerHTML = state.events.mouse.clientY;

                if (state.events.mouse.up == true) {
                    document.getElementById('mousedragDistanceYend').innerHTML = state.events.mouse.clientY;

                    if (state.data.dev_mode == true) {
                        state.events.mouse.pencil.clientY = state.events.mouse.clientY;
                    };
                };

                if (state.events.mouse.up == false) {

                    if (state.data.dev_mode == true) {
                        state.events.mouse.drag.clientY = state.events.mouse.clientY;
                        state.events.mouse.pen.clientY = state.events.mouse.clientY;
                    };

                    document.getElementById('mousedragDistanceYstart').innerHTML = state.events.mouse.clientY;
                };
            }

            if (state.events.mouse.down == true) {
                console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
                console.log('mousemove + mousedown: event.clientY: ' + event.clientY);

                if (dragging == true) {

                    state.events.mouse.drop_start.clientX = event.clientX;
                    state.events.mouse.drop_start.clientY = event.clientY;
                    dragging = false;
                };

                document.getElementById('mouse_down_client_X').innerHTML = state.events.mouse.clientX;
                document.getElementById('mouse_down_client_Y').innerHTML = state.events.mouse.clientY;

                document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

                var new_pencil = {
                    clientX: event.clientX,
                    clientY: event.clientY
                };

                if (state.data.dev_mode == true) {
                    state.ui.interaction.pencil.push(new_pencil);
                };

                state.ui.interaction.key.xaxis = state.events.mouse.game_bit.clientX;
                state.ui.interaction.key.yaxis = state.events.mouse.game_bit.clientY;

                if (document.getElementById('component_app_gui_key') != null) {
                    var component_app_gui_key = document.getElementById('component_app_gui_key');
                    component_app_gui_key.style = 'height: ' + state.ui.interaction.key.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.key.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + (state.ui.interaction.key.yaxis - 1) * state.ux.dimensions.height8 + 'px;' + 'left: ' + (state.ui.interaction.key.xaxis - 1) * state.ux.dimensions.width8 + 'px;';
                };
            };

            if (state.events.mouse.up == true) {
                console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
                console.log('mousemove + mousedown: event.clientY: ' + event.clientY);

                document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

                var new_pen = {
                    clientX: event.clientX,
                    clientY: event.clientY
                };

                if (state.data.dev_mode == true) {
                    state.ui.interaction.pen.push(new_pen);
                };

                if (document.getElementById('mouse_client_X') != null) {
                    document.getElementById('mouse_up_client_X').innerHTML = state.events.mouse.clientX;
                }

                if (document.getElementById('mouse_client_Y') != null) {
                    document.getElementById('mouse_up_client_Y').innerHTML = state.events.mouse.clientY;
                }
            };

            if (document.getElementById('track_x') != null) {
                document.getElementById('track_x').style = 'top: ' + 0 + 'px; \
            left: ' + state.events.mouse.clientX + 'px ;';
            };
            if (document.getElementById('track_y') != null) {
                document.getElementById('track_y').style = 'top: ' + state.events.mouse.clientY + 'px; \
            left: ' + 0 + 'px ;';
            };

            // gui
            if (document.getElementById('component_app_interaction_hands') != null) {
                var component_app_interaction_hands = document.getElementById('component_app_interaction_hands');
                component_app_interaction_hands.style = 'height: ' + state.ux.dimensions.height / 8 + 'px;' + 'width: ' + state.ux.dimensions.width / 8 + 'px;' + 'top: ' + state.events.mouse.clientY + 'px;' + 'left: ' + state.events.mouse.clientX + 'px;';
            };
            _index2.default.Handle_get_state_from_events();
        });

        // Mouse Down
        document.getElementById('component_app_body').addEventListener('mousedown', function (event) {

            state = _index2.default.Handle_return_state();

            console.log('mousedown: event.clientX: ' + event.clientX);
            console.log('mousedown: event.clientY: ' + event.clientY);
            state.events.mouse.up = false;
            state.events.mouse.down = true;
            dragging = true;

            /* dragging!!!
            console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
            console.log('mousemove + mousedown: event.clientY: ' + event.clientY);
             state.events.mouse.drop_start.clientX = event.clientX;
            state.events.mouse.drop_start.clientY = event.clientY;
              document.getElementById('mouse_down_client_X').innerHTML = (state.events.mouse.clientX)
            document.getElementById('mouse_down_client_Y').innerHTML = (state.events.mouse.clientY)
             */

            document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

            _index2.default.Handle_get_state_from_events();
        });

        // Mouse Up
        document.getElementById('component_app_body').addEventListener('mouseup', function (event) {

            state = _index2.default.Handle_return_state();

            console.log('mouseup: event.clientX: ' + event.clientX);
            console.log('mouseup: event.clientY: ' + event.clientY);
            state.events.mouse.up = true;
            state.events.mouse.down = false;
            dragging = false;

            if (dragging == false) {

                state.events.mouse.drop_end.clientX = event.clientX;
                state.events.mouse.drop_end.clientY = event.clientY;

                state.events.mouse.drop.clientX = state.events.mouse.drop_start.clientX - state.events.mouse.drop_end.clientX;
                state.events.mouse.drop.clientY = state.events.mouse.drop_start.clientY - state.events.mouse.drop_end.clientY;
            };

            /* dragging!!!
            console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
            console.log('mousemove + mousedown: event.clientY: ' + event.clientY);
             state.events.mouse.drop_end.clientX = event.clientX;
            state.events.mouse.drop_end.clientY = event.clientY;
             state.events.mouse.drop.clientX = (state.events.mouse.drop_start.clientX - state.events.mouse.drop_end.clientX);
            state.events.mouse.drop.clientY = (state.events.mouse.drop_start.clientY - state.events.mouse.drop_end.clientY);
            */

            document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

            _index2.default.Handle_get_state_from_events();
        });

        document.getElementById('component_app_body').addEventListener('mouseenter', function (event) {
            state = _index2.default.Handle_return_state();
            state.events.mouse.enter = true;
            state.events.mouse.leave = false;

            // console.log('state in events');
            console.log('mouseenter');
            _index2.default.Handle_get_state_from_events();
        });

        document.getElementById('component_app_body').addEventListener('mouseleave', function (event) {
            state = _index2.default.Handle_return_state();
            state.events.mouse.enter = false;
            state.events.mouse.leave = true;

            // console.log('state in events');
            console.log('mouseleave');
            _index2.default.Handle_get_state_from_events();
        });
    };

    // Mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

        // if can touch

        // long touch

        // ES 6 (and above)
        document.getElementById('component_app_body').addEventListener('touchmove', function (event) {

            state = _index2.default.Handle_return_state();

            if (document.getElementById('track_x') != null) {
                document.getElementById('track_x').style = 'top: ' + 0 + 'px; \
            left: ' + state.events.touch.clientX + 'px ;';
            };
            if (document.getElementById('track_y') != null) {
                document.getElementById('track_y').style = 'top: ' + state.events.touch.clientY + 'px; \
            left: ' + 0 + 'px ;';
            };

            //alert('touchmove');

            console.log('event.changedTouches[0].page');
            console.log(event.changedTouches[0].pageX);
            console.log(event.changedTouches[0].pageY);

            if (document.getElementById('touch_page_X') != null) {
                document.getElementById('touch_page_Y').innerHTML = event.changedTouches[0].pageY;
                document.getElementById('touch_page_X').innerHTML = event.changedTouches[0].pageX;
            };

            console.log('event.changedTouches[0].client');
            console.log(event.changedTouches[0].clientX);
            console.log(event.changedTouches[0].clientY);

            if (document.getElementById('touch_client_Y') != null) {
                document.getElementById('touch_client_Y').innerHTML = event.changedTouches[0].clientY;
                document.getElementById('touch_client_X').innerHTML = event.changedTouches[0].clientX;
            };

            //64

            // x axis: 1
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:1 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 1;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
                };

                state.animation.instances.sixty_four = 1;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:1 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 2;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
                };

                state.animation.instances.sixty_four = 9;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:1 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 3;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
                };

                state.animation.instances.sixty_four = 17;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:1 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 4;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
                };

                state.animation.instances.sixty_four = 25;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:1 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 5;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
                };

                state.animation.instances.sixty_four = 33;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:1 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 6;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
                };

                state.animation.instances.sixty_four = 41;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:1 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 7;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
                };

                state.animation.instances.sixty_four = 49;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:1 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 8;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
                };

                state.animation.instances.sixty_four = 57;
            };

            // x axis: 2

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:2 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 2;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:2 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 10;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:2 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 18;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:2 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 26;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:2 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 34;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:2 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 42;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:2 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 50;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:2 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 58;
            };

            // x axis: 3
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:3 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 3;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:3 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 11;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:3 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 19;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:3 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 27;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:3 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 35;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:3 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 43;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:3 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 51;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:3 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 59;
            };

            // x axis: 4
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:4 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 4;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:4 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 12;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:4 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 20;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:4 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 28;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:4 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 36;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:4 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 44;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:4 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 52;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:4 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 60;
            };

            // x axis: 5
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:5 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:5 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 13;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:5 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 21;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:5 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 29;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:5 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 37;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:5 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 45;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:5 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 53;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:5 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 61;
            };

            // x axis: 6

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:6 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 6;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:6 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 14;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:6 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 22;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:6 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 30;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:6 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 38;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:6 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 46;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:6 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 54;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:6 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 62;
            };

            // x axis: 7
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:7 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 7;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:7 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 15;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:7 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 23;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:7 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 31;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:7 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 39;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:7 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 47;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:7 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 55;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:7 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 63;
            };

            // x axis: 8
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:8 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 8;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:8 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 16;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:8 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 24;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:8 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 32;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:8 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 40;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:8 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 48;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:8 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 56;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:8 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 64;
            };

            _index2.default.Handle_get_state_from_events();
        });

        document.getElementById('component_app_body').addEventListener("touchstart", function (event) {

            state = _index2.default.Handle_return_state();

            _index2.default.HANDLE_animation_cursor_moved();

            if (document.getElementById('track_x') != null) {
                document.getElementById('track_x').style = 'top: ' + 0 + 'px; \
            left: ' + state.events.touch.clientX + 'px ;';
            };
            if (document.getElementById('track_y') != null) {
                document.getElementById('track_y').style = 'top: ' + state.events.touch.clientY + 'px; \
            left: ' + 0 + 'px ;';
            };

            state.events.touch.clientX = event.touches[0].clientX;
            state.events.touch.clientY = event.touches[0].clientY;

            state.events.mouse.enter = true;
            state.events.mouse.leave = false;

            state.ui.timeout.display = false;
            state.events.mouse.leavetimer = 0;

            // x axis: 1
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:1 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 1;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
                };

                state.animation.instances.sixty_four = 1;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:1 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 2;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
                };

                state.animation.instances.sixty_four = 9;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:1 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 3;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
                };

                state.animation.instances.sixty_four = 17;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:1 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 4;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
                };

                state.animation.instances.sixty_four = 25;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:1 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 5;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
                };

                state.animation.instances.sixty_four = 33;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:1 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 6;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
                };

                state.animation.instances.sixty_four = 41;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:1 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 7;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
                };

                state.animation.instances.sixty_four = 49;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:1 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 8;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
                };

                state.animation.instances.sixty_four = 57;
            };

            // x axis: 2

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:2 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 2;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:2 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 10;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:2 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 18;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:2 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 26;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:2 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 34;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:2 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 42;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:2 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 50;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:2 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 58;
            };

            // x axis: 3
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:3 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 3;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:3 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 11;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:3 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 19;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:3 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 27;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:3 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 35;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:3 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 43;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:3 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 51;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:3 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 59;
            };

            // x axis: 4
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:4 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 4;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:4 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 12;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:4 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 20;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:4 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 28;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:4 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 36;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:4 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 44;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:4 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 52;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:4 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 60;
            };

            // x axis: 5
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:5 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 1;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:5 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 13;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:5 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 21;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:5 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 29;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:5 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 37;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:5 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 45;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:5 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 53;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:5 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 61;
            };

            // x axis: 6

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:6 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 6;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:6 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 14;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:6 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 22;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:6 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 30;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:6 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 38;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:6 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 46;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:6 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 54;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:6 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 62;
            };

            // x axis: 7
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:7 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 7;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:7 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 15;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:7 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 23;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:7 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 31;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:7 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 39;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:7 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 47;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:7 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 55;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:7 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 63;
            };

            // x axis: 8
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:8 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 8;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:8 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 16;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:8 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 24;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:8 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 32;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:8 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 40;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:8 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 48;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:8 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 56;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:8 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 64;
            };

            // cursor enter
            if (state.animation.instances.loaded == true && state.animation.instances.cursor_moved == false) {
                _index2.default.HANDLE_animation_cursor_moved();
            }

            // see index for timed events of pause/timeout
            //alert('touchstart');
            console.log(event.touches[0]);

            if (document.getElementById('touches') != null) {
                document.getElementById('touches').innerHTML = event.touches.length;
                document.getElementById('touch_start_client_X').innerHTML = event.touches[0].clientX;
                document.getElementById('dragDistanceXStart').innerHTML = event.touches[0].clientX;
                document.getElementById('touch_start_client_Y').innerHTML = event.touches[0].clientY;
                document.getElementById('dragDistanceYStart').innerHTML = event.touches[0].clientY;
                document.getElementById('touch_start_force').innerHTML = event.touches[0].force;
            }

            state.ui.interaction.key.xaxis = state.events.mouse.game_bit.clientX;
            state.ui.interaction.key.yaxis = state.events.mouse.game_bit.clientY;

            if (document.getElementById('component_app_gui_key') != null) {
                var component_app_gui_key = document.getElementById('component_app_gui_key');
                component_app_gui_key.style = 'height: ' + state.ui.interaction.key.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.key.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + (state.ui.interaction.key.yaxis - 1) * state.ux.dimensions.height8 + 'px;' + 'left: ' + (state.ui.interaction.key.xaxis - 1) * state.ux.dimensions.width8 + 'px;';
            };

            _index2.default.Handle_get_state_from_events();
        });

        document.getElementById('component_app_body').addEventListener("touchend", function (event) {

            state = _index2.default.Handle_return_state();

            state.events.mouse.enter = false;
            state.events.mouse.leave = true;

            // see index for timed events of pause/timeout
            //alert('touchend');
            console.log(event.changedTouches[0]);

            // x axis: 1
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:1 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 1;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
                };

                state.animation.instances.sixty_four = 1;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:1 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 2;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
                };

                state.animation.instances.sixty_four = 9;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:1 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 3;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
                };

                state.animation.instances.sixty_four = 17;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:1 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 4;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
                };

                state.animation.instances.sixty_four = 25;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:1 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 5;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
                };

                state.animation.instances.sixty_four = 33;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:1 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 6;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
                };

                state.animation.instances.sixty_four = 41;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:1 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 7;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
                };

                state.animation.instances.sixty_four = 49;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:1 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 1;
                state.events.mouse.game_bit.clientY = 8;

                if (document.getElementById('click_position') != null) {
                    document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
                };

                state.animation.instances.sixty_four = 57;
            };

            // x axis: 2

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:2 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 2;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:2 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 10;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:2 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 18;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:2 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 26;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:2 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 34;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:2 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 42;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:2 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 50;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:2 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 2;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 58;
            };

            // x axis: 3
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:3 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 3;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:3 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 11;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:3 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 19;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:3 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 27;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:3 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 35;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:3 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 43;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:3 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 51;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:3 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 3;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 59;
            };

            // x axis: 4
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:4 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 4;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:4 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 12;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:4 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 20;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:4 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 28;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:4 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 36;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:4 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 44;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:4 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 52;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:4 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 4;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 60;
            };

            // x axis: 5
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:5 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 5;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:5 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 13;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:5 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 21;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:5 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 29;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:5 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 37;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:5 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 45;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:5 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 53;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:5 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 5;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 61;
            };

            // x axis: 6

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:6 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 6;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:6 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 14;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:6 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 22;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:6 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 30;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:6 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 38;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:6 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 46;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:6 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 54;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:6 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 6;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 62;
            };

            // x axis: 7
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:7 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 7;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:7 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 15;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:7 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 23;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:7 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 31;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:7 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 39;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:7 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 47;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:7 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 55;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:7 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 7;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 63;
            };

            // x axis: 8
            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
                console.log('mouse is in clientX:8 x clientY:1 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 1;

                state.animation.instances.sixty_four = 8;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
                console.log('mouse is in clientX:8 x clientY:2 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 2;

                state.animation.instances.sixty_four = 16;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
                console.log('mouse is in clientX:8 x clientY:3 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 3;

                state.animation.instances.sixty_four = 24;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
                console.log('mouse is in clientX:8 x clientY:4 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 4;

                state.animation.instances.sixty_four = 32;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
                console.log('mouse is in clientX:8 x clientY:5 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 5;

                state.animation.instances.sixty_four = 40;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
                console.log('mouse is in clientX:8 x clientY:6 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 6;

                state.animation.instances.sixty_four = 48;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
                console.log('mouse is in clientX:8 x clientY:7 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 7;

                state.animation.instances.sixty_four = 56;
            };

            if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
                console.log('mouse is in clientX:8 x clientY:8 grid');
                state.events.mouse.game_bit.clientX = 8;
                state.events.mouse.game_bit.clientY = 8;

                state.animation.instances.sixty_four = 64;
            };

            if (document.getElementById('touch_end_client_X') != null) {
                document.getElementById('touch_end_client_X').innerHTML = event.changedTouches[0].clientX;
                document.getElementById('touch_end_client_Y').innerHTML = event.changedTouches[0].clientY;
                document.getElementById('touch_end_force').innerHTML = event.changedTouches[0].force;
            }
            state.events.touch.dragDistanceX = event.changedTouches[0].clientX - state.events.touch.clientX;
            state.events.touch.dragDistanceY = event.changedTouches[0].clientY - state.events.touch.clientY;

            console.log('event.changedTouches[0].rotationAngle');
            console.log(event.changedTouches[0].rotationAngle);

            if (document.getElementById('rotationAngle') != null) {
                document.getElementById('rotationAngle').innerHTML = event.changedTouches[0].rotationAngle;
            };

            console.log('event.changedTouches[0].radius');
            console.log(event.changedTouches[0].radiusX);
            if (document.getElementById('radiusX') != null) {
                document.getElementById('radiusX').innerHTML = event.changedTouches[0].radiusX;
            };

            console.log(event.changedTouches[0].radiusY);
            if (document.getElementById('radiusY') != null) {
                document.getElementById('radiusY').innerHTML = event.changedTouches[0].radiusY;
            };

            console.log('state.events.touch.dragDistance');
            console.log(state.events.touch.dragDistanceX);
            if (document.getElementById('dragDistanceX') != null) {
                document.getElementById('dragDistanceX').innerHTML = state.events.touch.dragDistanceX;
                document.getElementById('dragDistanceXEnd').innerHTML = event.changedTouches[0].clientX;
            };

            console.log(state.events.touch.dragDistanceY);
            if (document.getElementById('dragDistanceY') != null) {
                document.getElementById('dragDistanceY').innerHTML = state.events.touch.dragDistanceY;
                document.getElementById('dragDistanceYEnd').innerHTML = event.changedTouches[0].clientY;
            };

            if (state.events.touch.dragDistanceX < -250) {
                alert('dragDistanceX < -250, left');
            }

            if (state.events.touch.dragDistanceX > 250) {
                alert('dragDistanceX > 250, right');
            }

            if (state.events.touch.dragDistanceY > 250) {
                alert('dragDistanceY > 250 up');
                _index2.default.HANDLE_animation_scrolled();
                _index2.default.event_wheel_up();
            }

            if (state.events.touch.dragDistanceY < -250) {
                alert('dragDistanceY < -250 down');
                _index2.default.HANDLE_animation_scrolled_down();
                _index2.default.event_wheel_down();
            }

            _index2.default.Handle_get_state_from_events();
        });

        window.ondevicemotion = function (event) {

            state = _index2.default.Handle_return_state();

            // event.accelerationIncludingGravity.x
            // event.accelerationIncludingGravity.y
            // event.accelerationIncludingGravity.z
            ///alert('event.accelerationIncludingGravity.x: ' + event.accelerationIncludingGravity.x);
            ///alert('event.accelerationIncludingGravity.y: ' + event.accelerationIncludingGravity.y);
            ///alert('event.accelerationIncludingGravity.z: ' + event.accelerationIncludingGravity.z);

            var event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
            var event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
            var event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

            if (document.getElementById('event_accelerationIncludingGravity_x') != null) {
                document.getElementById('event_accelerationIncludingGravity_x').innerHTML = event_accelerationIncludingGravity_x;

                if (event.accelerationIncludingGravity.x > 8) {
                    document.getElementById('last_action').innerHTML = 'shook right';
                };

                if (event.accelerationIncludingGravity.x < -8) {
                    document.getElementById('last_action').innerHTML = 'shook left';

                    // key_pressed
                    if (state.animation.instances.loaded == true && state.animation.instances.scrolled == false) {
                        alert('shook left');
                    };
                };
            };

            if (document.getElementById('event_accelerationIncludingGravity_y') != null) {
                document.getElementById('event_accelerationIncludingGravity_y').innerHTML = event_accelerationIncludingGravity_y;

                if (event.accelerationIncludingGravity.y > 8) {
                    document.getElementById('last_action').innerHTML = 'upside down';
                };

                if (event.accelerationIncludingGravity.y < -8) {
                    document.getElementById('last_action').innerHTML = 'rightside up';
                };
            };

            if (document.getElementById('event_accelerationIncludingGravity_z') != null) {
                document.getElementById('event_accelerationIncludingGravity_z').innerHTML = event_accelerationIncludingGravity_z;

                if (event.accelerationIncludingGravity.z > 8) {
                    document.getElementById('last_action').innerHTML = 'overhead';
                };

                if (event.accelerationIncludingGravity.z < -8) {
                    document.getElementById('last_action').innerHTML = 'laid flat';
                };
            };

            _index2.default.Handle_get_state_from_events();
        };

        window.ondeviceorientation = function (event) {

            state = _index2.default.Handle_return_state();

            // event.alpha
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
                state.events.mouse.alpha = event_alpha;
            };

            if (document.getElementById('event_beta') != null) {
                document.getElementById('event_beta').innerHTML = event_beta;
                state.events.mouse.beta = event_beta;
            };

            if (document.getElementById('event_gamma') != null) {
                document.getElementById('event_gamma').innerHTML = event_gamma;
                state.events.mouse.gamma = event_gamma;
            };

            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            var success = function success(pos) {
                var crd = pos.coords;

                if (document.getElementById('location') != null) {
                    document.getElementById('location').innerHTML = 'Your current position is: Latitude : ' + crd.latitude + ' Longitude: ' + crd.longitude + ' More or less ' + crd.accuracy + ' meters.';
                };
            };

            var error = function error(err) {
                console.warn('ERROR(' + err.code + '): ' + err.message);
            };

            navigator.geolocation.getCurrentPosition(success, error, options);

            _index2.default.Handle_get_state_from_events();
        };
    };
}(), 1000);

var Handle_return_state_from_events = function Handle_return_state_from_events() {
    return state;
};

exports.default = {
    state: state,
    Handle_return_state_from_events: Handle_return_state_from_events
};
},{"../index.js":3}],337:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elements = require('./elements');

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';

var colors = [{
  parent: 'component_app_animation_background',
  id: '',
  classList: '',
  innerHTML: '\n        \n      <div id="animation_layer_bg">\n\n        <div id="color_layer" class="bg_light_yellow_1 position_absolute bottom_0 right_0 margin_auto width_100 height_100"></div>\n\n        <div id="paint_animation" class="display_none opacity_0 easing_01 position_absolute bottom_0 right_0 margin_auto width_100 height_100 display_webkit_box webkit_box_pack_center webkit_box_align ">\n          \n            <div id="paint_animation_paint_can_hand_svg" class="position_absolute bottom_0 right_0 margin_auto width_100 height_100">\n            </div>\n            <div id="paint_animation_paint_can_svg" class="position_absolute bottom_0 right_0 margin_auto width_100 height_100">\n            </div>\n\n            <div id="paint_animation_svg_4" class="position_absolute bottom_0 right_0 margin_auto width_100 height_100">\n            </div>\n\n            <div id="opacity" class="opacity_01">\n              <div class="delay3 animated8 fadeIn easing_01 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto stage_grid"></div>\n              <div class="delay3 animated8 fadeIn easing_01 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto stage_perspective"></div>\n            </div>\n\n            <div id="opacity" class="">\n              <div id="stage_layer" class="animated1 fadeIn display_none opacity_0 easing_01 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">\n\n\n                  <div id="enneagon" class="easing_1 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">\n                    <div id="top_left" class="easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto bg_pink"></div>\n                    <div id="top_right" class="easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto bg_pink"></div>\n                    <div id="top" class="easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto bg_pink"></div>\n                    <div id="left" class="easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto bg_pink"></div>\n                    \n                    <div id="center" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">\n                      \n                      <div id="stage_layer_svg" class="animated1 enterBottom delay8 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_3"></div>\n                      <div id="stage_layer_svg" class="animated1 enterBottom delay1 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines"></div>\n                      <div id="stage_layer_svg" class="animated1 enterLeft delay1 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_1"></div>\n                      <div id="stage_layer_svg" class="animated1 enterRight delay1 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_2"></div>\n                      <div id="stage_layer_svg" class="grow_seven_eights delay1 animated4 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_wall"></div>\n\n                      <div id="set_layer_1" class="display_none opacity_0 easing_01 position_absolute top_0 left_0 margin_auto width_100 height_100">\n                        <div id="set_layer_1_door" class="gui_stage_door_closed position_absolute top_0 left_0 margin_auto width_100 height_100"></div>\n                      </div>\n                    \n                    </div>\n\n                    <div id="right" class="easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto bg_green"></div>\n                    <div id="bottom" class="easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto bg_green"></div>\n                    <div id="bottom_left" class="easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto bg_green"></div>\n                    <div id="bottom_right" class="easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto bg_green"></div>\n                  </div>\n\n\n              </div>\n            </div>\n      \n            <div id="paint_logo" class="position_absolute bottom_0 right_0 top_0 left_0 margin_auto width_100 height_100">\n\n              <div id="paint_animation_svg_2_misc" class="animated1 delay4 enterTop load_letters_misc position_absolute bottom_0 right_0 top_0 left_0 margin_auto width_100 height_100">\n              </div>\n\n              <div id="paint_animation_svg_2" class="position_absolute bottom_0 right_0 top_0 left_0 margin_auto width_100 height_100">\n              </div>\n\n            </div>\n\n            <div id="paint_animation_svg_5" class="position_absolute bottom_0 left_0 right_0 margin_auto width_100 height_100">\n            </div>\n            \n            <div id="hand_draw" class="delay3 animated4 enterLeftLeaveRight delay1 position_absolute bottom_1205 left_0 margin_auto width_100 height_100">\n              <div class="infinite animated1 pulse_around hand_pencil_bottom_left position_absolute bottom_0 left_0 margin_auto width_100 height_100">\n              </div>\n            </div>\n\n            <div id="hand_draw" class="delay3 animated4 enterRightLeaveLeft delay1  position_absolute top_1205 left_0 margin_auto width_100 height_100">\n              <div class="infinite animated1 pulse_around hand_pencil_top_right position_absolute bottom_0 left_0 margin_auto width_100 height_100">\n              </div>\n            </div>\n\n            <div id="hand_draw" class="delay3 animated4 enterTopLeaveBottom delay1  position_absolute top_0 left_1205 margin_auto width_100 height_100">\n              <div class="infinite animated1 pulse_around hand_pencil_top_left position_absolute bottom_0 left_0 margin_auto width_100 height_100">\n              </div>\n            </div>\n\n            <div id="hand_draw" class="delay3 animated4 enterBottomLeaveTop delay1  position_absolute bottom_0 right_1205 margin_auto width_100 height_100">\n              <div class="infinite animated1 pulse_around hand_pencil_bottom_right position_absolute bottom_0 left_0 margin_auto width_100 height_100">\n              </div>\n            </div>\n\n            <div id="opacity" class="opacity_01">\n              <div id="texture_layer" class="delay4 animated1 fadeIn display_none opacity_0 easing_01 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto accent_noise_1 opacity_01"></div>\n            </div>\n      \n        </div>\n      \n      </div>\n\n    '
}, {

  parent: 'component_app_animation_midground',
  id: '',
  classList: '',
  innerHTML: '\n   \n      <div id="layer_fg_1_logo" class="display_none position_absolute bottom_0 top_0 left_0 right_0 width_33 height_33 margin_auto float_left">\n\n      </div>\n\n    '

}, {
  parent: 'component_app_animation_foreground',
  id: '',
  classList: '',
  innerHTML: '\n\n      <div id="animation_layer_fg">\n\n        <div id="bullets_container" class="display_none opacity_0 easing_01 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n        </div> \n\n        <div id="pen_container" class="display_none opacity_0 easing_01 position_absolute width_100vw height_100vh margin_auto">\n        </div> \n\n        <div id="pencil_container" class="display_none opacity_0 easing_01 position_absolute width_100vw height_100vh margin_auto">\n        </div> \n\n        <div id="snakes_container" class="display_none opacity_0 easing_01 position_absolute width_100vw height_100vh margin_auto">\n        </div> \n        <div id="component_app_interaction_enemy" class="display_none opacity_0 easing_01 circle position_absolute margin_auto"></div>\n\n        <div id="layer_fg_1_man_motion" class="">\n\n          <div id="layer_fg_2_man" class="display_none opacity_0 float_left position_absolute bottom_0 left_0 width_100 height_100 margin_auto ">\n            \n            <div id="particles_health" class=" float_left position_absolute bottom_100 left_0 right_0 width_25 height_100 margin_auto ">\n            </div>\n\n            <div id="layer_fg_2_player_svg" class="float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ">\n            </div>\n\n          </div>\n\n        </div>\n    \n        <div id="layer_bg_1_pieces" class="display_none opacity_0 easing_01 position_absolute top_-205vh right_25 margin_auto width_40vh height_40vh">\n          <div id="animation_fourground_furniture_layer_8_svg" class="pieces_office_shoplight_on_bg position_absolute top_0 left_0 margin_auto width_100 height_100"></div>\n        </div>\n\n\n        <div id="two_hands" class="display_none opacity_0 animated4 pulse_around infinite nownigel_gui_interaction_hands_0_0_depth_200 position_absolute bottom_-205vh left_0 right_0 margin_auto width_100 height_50">\n        </div>\n\n        <div id="opacity" class="opacity_05">\n          <div id="effect_layer" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto effect_vignette"></div>\n        </div>\n\n      </div>\n\n    '
}, {
  parent: 'component_app_content',
  id: '',
  classList: '',
  innerHTML: '\n\n      ' + _elements2.default.component_app_content_root() + '\n\n    '
}, {
  parent: 'component_app_modals',
  id: '',
  classList: '',
  innerHTML: '\n    <div id="layer_modals">\n      ' + _elements2.default.element_page_left + '\n      \n      ' + _elements2.default.element_pop_top + '\n      ' + _elements2.default.element_pop_left + '\n      ' + _elements2.default.element_pop_bottom + '\n      ' + _elements2.default.element_pop_right + '\n\n      ' + _elements2.default.element_page_top + '\n      ' + _elements2.default.element_page_bottom + '\n      ' + _elements2.default.element_page_right + '\n\n      ' + _elements2.default.element_morph_top + '\n      ' + _elements2.default.element_morph_left + '\n      ' + _elements2.default.element_morph_bottom + '\n      ' + _elements2.default.element_morph_right + '\n\n      ' + _elements2.default.element_fade_top + '\n      ' + _elements2.default.element_fade_left + '\n      ' + _elements2.default.element_fade_bottom + '\n      ' + _elements2.default.element_fade_right + '\n\n      ' + _elements2.default.element_gradient_top + '\n      ' + _elements2.default.element_gradient_left + '\n      ' + _elements2.default.element_gradient_bottom + '\n      ' + _elements2.default.element_gradient_right + '\n\n      ' + _elements2.default.element_corner_top + '\n      ' + _elements2.default.element_corner_left + '\n      ' + _elements2.default.element_corner_bottom + '\n      ' + _elements2.default.element_corner_right + '\n\n      ' + _elements2.default.element_overlay_top + '\n      ' + _elements2.default.element_overlay_left + '\n      ' + _elements2.default.element_overlay_bottom + '\n      ' + _elements2.default.element_overlay_right + '\n\n      ' + _elements2.default.element_pip_top + '\n      ' + _elements2.default.element_pip_left + '\n      ' + _elements2.default.element_pip_bottom + '\n      ' + _elements2.default.element_pip_right + '\n\n      ' + _elements2.default.element_menu_top + '\n      ' + _elements2.default.element_menu_left + '\n      ' + _elements2.default.element_menu_bottom + '\n      ' + _elements2.default.element_menu_right + '\n\n      ' + _elements2.default.element_nav_top + '\n      ' + _elements2.default.element_nav_left + '\n      ' + _elements2.default.element_nav_bottom + '\n      ' + _elements2.default.element_nav_right + '\n    </div>\n\n    '
}, {
  parent: 'component_app_guis',
  id: '',
  classList: '',
  innerHTML: '\n\n      <div id="layer_guis">\n        <div id="preloader"></div>\n      </div>\n\n\n        ' + _elements2.default.element_guis() + '\n\n        <div id="component_app_gui_arrows" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto float_left width_100 height_100">\n\n          <div id="component_app_gui_arrows_top" class="easing_01 display_none opacity_0 position_absolute top_6025 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">\n\n            <div class="gui_arrow_top position_relative width_50 height_50 margin_auto float_left"></div>\n\n          </div>\n\n          <div id="component_app_gui_arrows_top_right" class="easing_01 display_none opacity_0 position_absolute top_6025 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">\n\n            <div class="gui_arrow_top_right position_relative width_50 height_50 margin_auto float_left"></div>\n\n          </div>\n\n          <div id="component_app_gui_arrows_top_left" class="easing_01 display_none opacity_0 position_absolute top_6025 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">\n\n            <div class="gui_arrow_top_left position_relative width_50 height_50 margin_auto float_left"></div>\n\n          </div>\n\n          <div id="component_app_gui_arrows_right" class="easing_01 display_none opacity_0 position_absolute top_0 bottom_0 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">\n\n            <div class="gui_arrow_right position_relative width_50 height_50 margin_auto float_left"></div>\n\n          </div>\n\n          <div id="component_app_gui_arrows_left" class="easing_01 display_none opacity_0 position_absolute top_0 bottom_0 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">\n\n            <div class="gui_arrow_left position_relative width_50 height_50 margin_auto float_left"></div>\n\n          </div>\n\n          <div id="component_app_gui_arrows_bottom" class="easing_01 display_none opacity_0 position_absolute bottom_6025 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">\n\n            <div class="gui_arrow_bottom position_relative width_50 height_50 margin_auto float_left"></div>\n\n          </div>\n\n          <div id="component_app_gui_arrows_bottom_right" class="easing_01 display_none opacity_0 position_absolute bottom_6025 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">\n\n            <div class="gui_arrow_bottom_right position_relative width_50 height_50 margin_auto float_left"></div>\n\n          </div>\n\n          <div id="component_app_gui_arrows_bottom_left" class="easing_01 display_none opacity_0 position_absolute bottom_6025 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">\n\n            <div class="gui_arrow_bottom_left position_relative width_50 height_50 margin_auto float_left"></div>\n\n          </div>\n\n        </div>\n\n          <div id="anchor_right" class="display_none opacity_0 easing_01 position_fixed top_0 bottom_0 right_6025vh margin_auto float_left width_6025vh height_40vh z_index_10">\n       \n            <a href="#1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_right + '\n            </a>\n\n            <a href="#2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_right + '\n            </a>\n            <a href="#3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_right + '\n            </a>\n            <a href="#4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_right + '\n            </a>\n            <a href="#5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_right + '\n            </a>\n            <a href="#6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_right + '\n            </a>\n            <a href="#7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_right + '\n            </a>\n            <a href="#8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_right + '\n            </a>\n            \n          </div>\n\n          <div id="anchor_bottom" class="display_none opacity_0 easing_01 position_fixed bottom_3vh left_0 right_0 margin_auto float_left width_40vh height_6025vh z_index_10">\n       \n            <a href="#1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_top + '\n            </a>\n            <a href="#2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_top + '\n            </a>\n            <a href="#3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_top + '\n            </a>\n            <a href="#4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_top + '\n            </a>\n            <a href="#5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_top + '\n            </a>\n            <a href="#6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_top + '\n            </a>\n            <a href="#7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_top + '\n            </a>\n            <a href="#8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_top + '\n            </a>\n            \n          </div>\n\n          <div id="anchor_top" class="display_none opacity_0 easing_01 position_fixed top_3vh left_0 right_0 margin_auto float_left width_40vh height_6025vh z_index_10">\n       \n            <a href="#1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_bottom + '\n            </a>\n            <a href="#2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_bottom + '\n            </a>\n            <a href="#3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_bottom + '\n            </a>\n            <a href="#4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_bottom + '\n            </a>\n            <a href="#5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_bottom + '\n            </a>\n            <a href="#6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_bottom + '\n            </a>\n            <a href="#7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_bottom + '\n            </a>\n            <a href="#8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_bottom + '\n            </a>\n            \n          </div>\n\n          <div id="anchor_left" class="display_none opacity_0 easing_01 position_fixed top_0 bottom_0 left_6025vh margin_auto float_left width_6025vh height_40vh z_index_10">\n       \n            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_left + '\n            </a>\n            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_left + '\n            </a>\n            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_left + '\n            </a>\n            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_left + '\n            </a>\n            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_left + '\n            </a>\n            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_left + '\n            </a>\n            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_left + '\n            </a>\n            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">\n              ' + _elements2.default.anchor_menu_left + '\n            </a>\n            \n          </div>\n\n          <div id="component_app_interaction_hands" class="easing_01 width_205vh height_205vh position_absolute margin_auto">\n            <div id="component_app_interaction_hand" class="easing_01 bottom_50 right_50 hands width_100 height_100 position_absolute margin_auto"></div>\n          </div>\n\n          <div id="track_y" class="easing_01 gui_dash width_205vh height_205vh position_absolute margin_auto"></div>\n          <div id="track_x" class="easing_01 gui_dash width_205vh height_205vh position_absolute margin_auto"></div>\n            \n          <div id="fold_pause" class="easing_01 display_none opacity_0 height_100vh width_100 float_left position_fixed top_0 left_0 margin_auto z_index_10 ">\n            \n            <div class="easing_01 opacity_1 height_100 width_100 float_left position_absolute top_0 left_0 margin_auto z_index_10 bg_pink ">\n\n              <div id="componentShape" class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_100vh width_100">\n                  <div id="componentCube" class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto">\n                      <figure class="front bg_yellow">\n                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>\n                      </figure>\n                      <figure class="back bg_pink">\n                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>\n                      </figure>\n                      <figure class="right bg_green">\n                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>\n                      </figure>\n                      <figure class="left bg_yellow">\n                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>\n                      </figure>\n                      <figure class="top bg_yellow">\n                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>\n                      </figure>\n                      <figure class="bottom bg2-5">\n                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>\n                      </figure>\n                  </div>\n              </div>\n\n              <div id="bounce" class="easing_01 gui_dash width_205vh height_205vh position_absolute margin_auto"></div>\n                  \n              <div id="parallax_X_Layer1" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_X_Layer2" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_X_Layer3" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_X_Layer4" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_X_Layer5" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_X_Layer6" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_X_Layer7" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_X_Layer8" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div>\n\n              <div id="parallax_Y_Layer1" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_Y_Layer2" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_Y_Layer3" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_Y_Layer4" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_Y_Layer5" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_Y_Layer6" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_Y_Layer7" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n                      \n              <div id="parallax_Y_Layer8" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">\n              </div> \n              \n              <div id="element_ball" class="easing_01 width_100 height_100 position_absolute margin_auto">\n                <div id="ball" class="easing_01 circle width_10vh height_10vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>      \n              </div>  \n          \n              <div id="component_app_gui_key" class="easing_01 position_absolute margin_auto">\n                <div class="easing_01 gui_dash width_100 height_100 bottom_0 right_0 position_absolute margin_auto"></div>\n              </div>\n\n              <div id="component_app_gui_keyhole" class="easing_01 position_absolute margin_auto">\n                <div class="easing_01 gui_dash width_100 height_100 bottom_0 right_0 position_absolute margin_auto">\n                  <div class="easing_01 gui_button_enter width_100 height_100 bottom_0 right_100 position_absolute margin_auto"></div>\n                </div>\n              </div>\n\n            </div>\n\n            <div id="fold_timeout" class="easing_01 display_none opacity_0 height_100vh width_100 float_left position_fixed top_0 left_0 margin_auto z_index_10 ">\n              <div class="easing_01 opacity_05 height_100 width_100 float_left position_absolute top_0 left_0 margin_auto z_index_10 bg_green ">\n              </div>\n            </div>\n          </div>\n\n    '
}];
exports.default = {
  colors: colors
};
},{"./elements":339}],338:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_components_handled = function get_components_handled() {

    var state = _index2.default.Handle_return_state();

    var components = [
    // dev mode

    {
        component: 'bullets_container',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.data.dev_mode
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'pen_container',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.data.dev_mode
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'pencil_container',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.data.dev_mode
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'snakes_container',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.data.dev_mode
        // component_state_opacity:  state.animation.instances.loading
    },
    //dev modes end
    {
        component: 'icon_dashboard',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: localStorage.user != 'null'
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'icon_sign_in',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: localStorage.user == 'null'
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'icon_sign_up',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: localStorage.user == 'null'
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'icon_sign_out',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: localStorage.user != 'null'
        // component_state_opacity:  state.animation.instances.loading
    },

    // loading or loaded
    {
        component: 'paint_animation',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loading || state.animation.instances.loaded
        // component_state_opacity:  state.animation.instances.loading
    },

    // instamce: after load and stay

    {
        component: 'color_layer',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loading || state.animation.instances.loaded
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'texture_layer',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loading || state.animation.instances.loaded
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'stage_layer',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loaded
        // component_state_opacity:  state.animation.instances.loading
    },

    // loaded

    {
        component: 'two_hands',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.start || state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'load_painter',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loading
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'grid',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loaded
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'perspective',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loaded
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'logo_filler',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loaded
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'layer_fg_2_man',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loading || state.animation.instances.loaded
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor moved + NOT scrolled
    {
        component: 'fold_buttons',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.cursor_moved && !state.animation.instances.scrolling && !state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor NOT moved 
    {
        component: 'fold_note',
        //component_state_transform: state.animation.instances.loading,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.loaded && !state.animation.instances.cursor_moved && !state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor moved + NOT scrolled
    {
        component: 'fold_scroll',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.cursor_moved && !state.animation.instances.scrolled && !state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor moved + NOT scrolled
    {
        component: 'fold_scroll_again',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.cursor_moved && state.animation.instances.scrolled && !state.animation.instances.scrolling && !state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor moved + NOT scrolled + start
    {
        component: 'scrolling_ctas',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.cursor_moved && state.animation.instances.scrolling && !state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor moved + NOT scrolled + start
    {
        component: 'start_buttons',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.cursor_moved && !state.animation.instances.scrolling && state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor moved + NOT scrolled + start
    {
        component: 'start_ctas',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.cursor_moved && !state.animation.instances.scrolling && state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor moved + NOT scrolled + start
    {
        component: 'learn_buttons',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.cursor_moved && !state.animation.instances.scrolling && !state.animation.instances.start && state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: loaded + cursor moved + NOT scrolled + start
    {
        component: 'learn_ctas',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.cursor_moved && !state.animation.instances.scrolling && !state.animation.instances.start && state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // instance: key pressed + cursor moved + scrolled
    {
        component: 'set_layer_1',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.scrolled
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'layer_bg_1_pieces',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.start
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'component_app_interaction_enemy',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.start
        // component_state_opacity:  state.animation.instances.loading
    },

    // instamce: learn
    // anchors
    {
        component: 'anchor_bottom',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.start
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'anchor_right',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.scrolled && state.animation.instances.scrolling && !state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'anchor_left',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.scrolled && !state.animation.instances.scrolling && !state.animation.instances.start && !state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    }, {
        component: 'anchor_top',
        //component_state_transform: state.animation.instances.loading,
        // component_state_transform_true: 'transform_translate3d_top_100',
        // component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.animation.instances.learn
        // component_state_opacity:  state.animation.instances.loading
    },

    // GUIS
    {
        component: 'component_app_gui_arrows_top',
        //component_state_transform: !state.ui.gui.top_left.display,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.top.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'component_app_gui_arrows_top_left',
        //component_state_transform: !state.ui.gui.top_left.display,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.top_left.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'component_app_gui_arrows_top_right',
        //component_state_transform: !state.ui.gui.top_left.display,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.top_right.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'component_app_gui_arrows_bottom',
        //component_state_transform: !state.ui.gui.top_left.display,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.bottom.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'component_app_gui_arrows_bottom_left',
        //component_state_transform: !state.ui.gui.top_left.display,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.bottom_left.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'component_app_gui_arrows_bottom_right',
        //component_state_transform: !state.ui.gui.top_left.display,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.bottom_right.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'component_app_gui_arrows_left',
        //component_state_transform: !state.ui.gui.top_left.display,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.left.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'component_app_gui_arrows_right',
        //component_state_transform: !state.ui.gui.top_left.display,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.right.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'fold_pause',
        component_state_transform: state.ui.pause.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.pause.display
        // component_state_opacity:  state.ui.pause.opacity
    }, {
        component: 'fold_timeout',
        component_state_transform: state.ui.timeout.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.timeout.display
        // component_state_opacity:  state.ui.timeout.opacity
    }, {
        component: 'component_app_gui_bottom_center',
        //component_state_transform: state.ui.gui.bottom.transform,
        //component_state_transform_true: 'transform_translate3d_top100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.bottom.display
        // component_state_opacity:  state.ui.gui.bottom.opacity
    }, {
        component: 'component_app_gui_bottom_left',
        //component_state_transform: state.ui.gui.bottom_left.transform,
        //component_state_transform_true: 'transform_translate3d_top100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.bottom_left.display
        // component_state_opacity:  state.ui.gui.bottom_left.opacity
    }, {
        component: 'component_app_gui_bottom_right',
        //component_state_transform: state.ui.gui.bottom_right.transform,
        //component_state_transform_true: 'transform_translate3d_top100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.bottom_right.display
        // component_state_opacity:  state.ui.gui.bottom_right.opacity
    }, {
        component: 'component_app_gui_top_center',
        //component_state_transform: state.ui.gui.top.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.top.display
        // component_state_opacity:  state.ui.gui.top.opacity
    }, {
        component: 'component_app_gui_top_left',
        //component_state_transform: state.ui.gui.top_left.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.top_left.display
        // component_state_opacity:  state.ui.gui.top_left.opacity
    }, {
        component: 'component_app_gui_top_right',
        //component_state_transform: state.ui.gui.top_right.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.gui.top_right.display
        // component_state_opacity:  state.ui.gui.top_right.opacity
    }, {
        component: 'component_app_gui_left',
        //component_state_transform: state.ui.gui.left.transform,
        //component_state_transform_true: 'transform_translate3d_left_100',
        //component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.gui.left.display
        // component_state_opacity:  state.ui.gui.left.opacity
    }, {
        component: 'component_app_gui_right',
        //component_state_transform: state.ui.gui.right.transform,
        //component_state_transform_true: 'transform_translate3d_left100',
        //component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.gui.right.display
        // component_state_opacity:  state.ui.gui.right.opacity
    },

    // structures
    {
        component: 'grid_cross',
        component_state_transform: state.ui.colors.grid_cross.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.colors.grid_cross.display
        // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
    }, {
        component: 'grid_depth',
        component_state_transform: state.ui.colors.grid_depth.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.colors.grid_depth.display
        // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
    }, {
        component: 'grid_depth_360',
        component_state_transform: state.ui.colors.grid_cross.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.colors.grid_cross.display
        // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
    }, {
        component: 'grid_depth_720',
        component_state_transform: state.ui.colors.grid_depth.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.colors.grid_depth.display
        // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
    },

    // background pieces
    {
        component: 'grid_depth_90_floor',
        component_state_transform: state.ui.colors.grid_cross.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.colors.grid_cross.display
        // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
    }, {
        component: 'grid_depth_630_floor',
        component_state_transform: state.ui.colors.grid_cross.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.colors.grid_cross.display
        // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
    }, {
        component: 'grid_depth_720_floor',
        component_state_transform: state.ui.colors.grid_cross.transform,
        //component_state_transform_true: 'transform_translate3d_top_100',
        //component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.colors.grid_cross.display
        // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
    },

    // midground pieces

    // foreground pieces

    // modal
    {
        component: 'component_app_modal_element_nav_top',
        component_state_transform: state.ui.modal.nav.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.nav.top.display
        // component_state_opacity:  state.ui.modal.nav.top.opacity
    }, {
        component: 'component_app_modal_element_nav_bottom',
        component_state_transform: state.ui.modal.nav.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.nav.bottom.display
        // component_state_opacity:  state.ui.modal.nav.bottom.opacity
    }, {
        component: 'component_app_modal_element_nav_left',
        component_state_transform: state.ui.modal.nav.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.nav.left.display
        // component_state_opacity:  state.ui.modal.nav.left.opacity
    }, {
        component: 'component_app_modal_element_nav_right',
        component_state_transform: state.ui.modal.nav.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.nav.right.display
        // component_state_opacity:  state.ui.modal.nav.right.opacity
    }, {
        component: 'component_app_modal_element_page_top',
        component_state_transform: state.ui.modal.page.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.page.top.display
        // component_state_opacity:  state.ui.modal.page.top.opacity
    }, {
        component: 'component_app_modal_element_page_bottom',
        component_state_transform: state.ui.modal.page.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.page.bottom.display
        // component_state_opacity:  state.ui.modal.page.bottom.opacity
    }, {
        component: 'component_app_modal_element_page_left',
        component_state_transform: state.ui.modal.page.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.page.left.display
        // component_state_opacity:  state.ui.modal.page.left.opacity
    }, {
        component: 'component_app_modal_element_page_right',
        component_state_transform: state.ui.modal.page.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.page.right.display
        // component_state_opacity:  state.ui.modal.page.right.opacity
    }, {
        component: 'component_app_modal_element_pop_top',
        component_state_transform: state.ui.modal.pop.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.pop.top.display
        // component_state_opacity:  state.ui.modal.pop.top.opacity
    }, {
        component: 'component_app_modal_element_pop_bottom',
        component_state_transform: state.ui.modal.pop.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.pop.bottom.display
        // component_state_opacity:  state.ui.modal.pop.bottom.opacity
    }, {
        component: 'component_app_modal_element_pop_left',
        component_state_transform: state.ui.modal.pop.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.pop.left.display
        // component_state_opacity:  state.ui.modal.pop.left.opacity
    }, {
        component: 'component_app_modal_element_pop_right',
        component_state_transform: state.ui.modal.pop.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.pop.right.display
        // component_state_opacity:  state.ui.modal.pop.right.opacity
    }, {
        component: 'component_app_modal_element_pip_top',
        component_state_transform: state.ui.modal.pip.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.pip.top.display
        // component_state_opacity:  state.ui.modal.pip.top.opacity
    }, {
        component: 'component_app_modal_element_pip_bottom',
        component_state_transform: state.ui.modal.pip.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.pip.bottom.display
        // component_state_opacity:  state.ui.modal.pip.bottom.opacity
    }, {
        component: 'component_app_modal_element_pip_left',
        component_state_transform: state.ui.modal.pip.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.pip.left.display
        // component_state_opacity:  state.ui.modal.pip.left.opacity
    }, {
        component: 'component_app_modal_element_pip_right',
        component_state_transform: state.ui.modal.pip.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.pip.right.display
        // component_state_opacity:  state.ui.modal.pip.right.opacity
    }, {
        component: 'component_app_modal_element_overlay_top',
        component_state_transform: state.ui.modal.overlay.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.overlay.top.display
        // component_state_opacity:  state.ui.modal.overlay.top.opacity
    }, {
        component: 'component_app_modal_element_overlay_bottom',
        component_state_transform: state.ui.modal.overlay.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.overlay.bottom.display
        // component_state_opacity:  state.ui.modal.overlay.bottom.opacity
    }, {
        component: 'component_app_modal_element_overlay_left',
        component_state_transform: state.ui.modal.overlay.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.overlay.left.display
        // component_state_opacity:  state.ui.modal.overlay.left.opacity
    }, {
        component: 'component_app_modal_element_overlay_right',
        component_state_transform: state.ui.modal.overlay.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.overlay.right.display
        // component_state_opacity:  state.ui.modal.overlay.right.opacity
    }, {
        component: 'component_app_modal_element_gradient_top',
        component_state_transform: state.ui.modal.gradient.top.transform,
        component_state_transform_true: 'transform_translate3d_top_200',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.gradient.top.display
        // component_state_opacity:  state.ui.modal.gradient.top.opacity
    }, {
        component: 'component_app_modal_element_gradient_bottom',
        component_state_transform: state.ui.modal.gradient.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top200',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.gradient.bottom.display
        // component_state_opacity:  state.ui.modal.gradient.bottom.opacity
    }, {
        component: 'component_app_modal_element_gradient_left',
        component_state_transform: state.ui.modal.gradient.left.transform,
        component_state_transform_true: 'transform_translate3d_left_200',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.gradient.left.display
        // component_state_opacity:  state.ui.modal.gradient.left.opacity
    }, {
        component: 'component_app_modal_element_gradient_right',
        component_state_transform: state.ui.modal.gradient.right.transform,
        component_state_transform_true: 'transform_translate3d_left200',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.gradient.right.display
        // component_state_opacity:  state.ui.modal.gradient.right.opacity
    }, {
        component: 'component_app_modal_element_menu_top',
        component_state_transform: state.ui.modal.menu.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.menu.top.display
        // component_state_opacity:  state.ui.modal.menu.top.opacity
    }, {
        component: 'component_app_modal_element_menu_bottom',
        component_state_transform: state.ui.modal.menu.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.menu.bottom.display
        // component_state_opacity:  state.ui.modal.menu.bottom.opacity
    }, {
        component: 'component_app_modal_element_menu_left',
        component_state_transform: state.ui.modal.menu.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.menu.left.display
        // component_state_opacity:  state.ui.modal.menu.left.opacity
    }, {
        component: 'component_app_modal_element_menu_right',
        component_state_transform: state.ui.modal.menu.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.menu.right.display
        // component_state_opacity:  state.ui.modal.menu.right.opacity
    }, {
        component: 'component_app_modal_element_fade_top',
        component_state_transform: state.ui.modal.fade.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.fade.top.display
        // component_state_opacity:  state.ui.modal.fade.top.opacity
    }, {
        component: 'component_app_modal_element_fade_bottom',
        component_state_transform: state.ui.modal.fade.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.fade.bottom.display
        // component_state_opacity:  state.ui.modal.fade.bottom.opacity
    }, {
        component: 'component_app_modal_element_fade_left',
        component_state_transform: state.ui.modal.fade.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.fade.left.display
        // component_state_opacity:  state.ui.modal.fade.left.opacity
    }, {
        component: 'component_app_modal_element_fade_right',
        component_state_transform: state.ui.modal.fade.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.fade.right.display
        // component_state_opacity:  state.ui.modal.fade.right.opacity
    }, {
        component: 'component_app_modal_element_morph_top',
        component_state_transform: state.ui.modal.morph.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.morph.top.display
        // component_state_opacity:  state.ui.modal.morph.top.opacity
    }, {
        component: 'component_app_modal_element_morph_bottom',
        component_state_transform: state.ui.modal.morph.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.morph.bottom.display
        // component_state_opacity:  state.ui.modal.morph.bottom.opacity
    }, {
        component: 'component_app_modal_element_morph_left',
        component_state_transform: state.ui.modal.morph.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.morph.left.display
        // component_state_opacity:  state.ui.modal.morph.left.opacity
    }, {
        component: 'component_app_modal_element_morph_right',
        component_state_transform: state.ui.modal.morph.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.morph.right.display
        // component_state_opacity:  state.ui.modal.morph.right.opacity
    }, {
        component: 'component_app_modal_element_corner_top',
        component_state_transform: state.ui.modal.corner.top.transform,
        component_state_transform_true: 'transform_translate3d_top_100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.corner.top.display
        // component_state_opacity:  state.ui.modal.corner.top.opacity
    }, {
        component: 'component_app_modal_element_corner_bottom',
        component_state_transform: state.ui.modal.corner.bottom.transform,
        component_state_transform_true: 'transform_translate3d_top100',
        component_state_transform_false: 'transform_translate3d_top0',
        component_state_display: state.ui.modal.corner.bottom.display
        // component_state_opacity:  state.ui.modal.corner.bottom.opacity
    }, {
        component: 'component_app_modal_element_corner_left',
        component_state_transform: state.ui.modal.corner.left.transform,
        component_state_transform_true: 'transform_translate3d_left_100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.corner.left.display
        // component_state_opacity:  state.ui.modal.corner.left.opacity
    }, {
        component: 'component_app_modal_element_corner_right',
        component_state_transform: state.ui.modal.corner.right.transform,
        component_state_transform_true: 'transform_translate3d_left100',
        component_state_transform_false: 'transform_translate3d_left0',
        component_state_display: state.ui.modal.corner.right.display
        // component_state_opacity:  state.ui.modal.corner.right.opacity
    }];

    return components;
};

exports.default = {
    get_components_handled: get_components_handled

};
},{"../index.js":3}],340:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values_update = function values_update() {

    var state = _index2.default.Handle_return_state();

    if (document.getElementById('score_current_area') != null) {
        document.getElementById('score_current_area').innerText = 'area: ' + state.data.score.current.area;
        document.getElementById('score_current_met').innerText = 'met: ' + state.data.score.current.met;
        document.getElementById('score_current_user').innerText = 'user: ' + state.data.score.current.met;
        document.getElementById('score_current_fans').innerText = 'fans: ' + state.data.score.current.met;
        document.getElementById('score_current_messages').innerText = 'messages: ' + state.data.score.current.met;
        document.getElementById('score_current_likes').innerText = 'data: ' + state.data.score.current.met;
        document.getElementById('score_current_data').innerText = 'data: ' + state.data.score.current.met;
    };

    if (document.getElementById('component_app_status_state_events_mouse_game_bit_clientX') != null) {
        document.getElementById('component_app_status_state_events_mouse_game_bit_clientX').innerText = state.events.mouse.game_bit.clientX;
    };

    if (document.getElementById('component_app_status_state_events_mouse_game_bit_clientY') != null) {
        document.getElementById('component_app_status_state_events_mouse_game_bit_clientY').innerText = state.events.mouse.game_bit.clientY;
    };

    // page
    if (document.getElementById('component_app_status_display_page_top') != null) {
        document.getElementById('component_app_status_display_page_top').innerText = state.ui.modal.page.top.display;
    };

    if (document.getElementById('component_app_status_opacity_page_top') != null) {
        document.getElementById('component_app_status_opacity_page_top').innerText = state.ui.modal.page.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_page_top') != null) {
        document.getElementById('component_app_status_transform_page_top').innerText = state.ui.modal.page.top.transform;
    };

    if (document.getElementById('component_app_status_display_page_bottom') != null) {
        document.getElementById('component_app_status_display_page_bottom').innerText = state.ui.modal.page.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_page_bottom') != null) {
        document.getElementById('component_app_status_opacity_page_bottom').innerText = state.ui.modal.page.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_page_bottom') != null) {
        document.getElementById('component_app_status_transform_page_bottom').innerText = state.ui.modal.page.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_page_left') != null) {
        document.getElementById('component_app_status_display_page_left').innerText = state.ui.modal.page.left.display;
    };

    if (document.getElementById('component_app_status_opacity_page_left') != null) {
        document.getElementById('component_app_status_opacity_page_left').innerText = state.ui.modal.page.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_page_left') != null) {
        document.getElementById('component_app_status_transform_page_left').innerText = state.ui.modal.page.left.transform;
    };

    if (document.getElementById('component_app_status_display_page_right') != null) {
        document.getElementById('component_app_status_display_page_right').innerText = state.ui.modal.page.right.display;
    };

    if (document.getElementById('component_app_status_opacity_page_right') != null) {
        document.getElementById('component_app_status_opacity_page_right').innerText = state.ui.modal.page.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_page_right') != null) {
        document.getElementById('component_app_status_transform_page_right').innerText = state.ui.modal.page.right.transform;
    };

    // pop

    if (document.getElementById('component_app_status_display_pop_top') != null) {
        document.getElementById('component_app_status_display_pop_top').innerText = state.ui.modal.pop.top.display;
    };

    if (document.getElementById('component_app_status_opacity_pop_top') != null) {
        document.getElementById('component_app_status_opacity_pop_top').innerText = state.ui.modal.pop.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_pop_top') != null) {
        document.getElementById('component_app_status_transform_pop_top').innerText = state.ui.modal.pop.top.transform;
    };

    if (document.getElementById('component_app_status_display_pop_bottom') != null) {
        document.getElementById('component_app_status_display_pop_bottom').innerText = state.ui.modal.pop.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_pop_bottom') != null) {
        document.getElementById('component_app_status_opacity_pop_bottom').innerText = state.ui.modal.pop.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_pop_bottom') != null) {
        document.getElementById('component_app_status_transform_pop_bottom').innerText = state.ui.modal.pop.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_pop_left') != null) {
        document.getElementById('component_app_status_display_pop_left').innerText = state.ui.modal.pop.left.display;
    };

    if (document.getElementById('component_app_status_opacity_pop_left') != null) {
        document.getElementById('component_app_status_opacity_pop_left').innerText = state.ui.modal.pop.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_pop_left') != null) {
        document.getElementById('component_app_status_transform_pop_left').innerText = state.ui.modal.pop.left.transform;
    };

    if (document.getElementById('component_app_status_display_pop_right') != null) {
        document.getElementById('component_app_status_display_pop_right').innerText = state.ui.modal.pop.right.display;
    };

    if (document.getElementById('component_app_status_opacity_pop_right') != null) {
        document.getElementById('component_app_status_opacity_pop_right').innerText = state.ui.modal.pop.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_pop_right') != null) {
        document.getElementById('component_app_status_transform_pop_right').innerText = state.ui.modal.pop.right.transform;
    };

    // pip

    if (document.getElementById('component_app_status_display_pip_top') != null) {
        document.getElementById('component_app_status_display_pip_top').innerText = state.ui.modal.pip.top.display;
    };

    if (document.getElementById('component_app_status_opacity_pip_top') != null) {
        document.getElementById('component_app_status_opacity_pip_top').innerText = state.ui.modal.pip.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_pip_top') != null) {
        document.getElementById('component_app_status_transform_pip_top').innerText = state.ui.modal.pip.top.transform;
    };

    if (document.getElementById('component_app_status_display_pip_bottom') != null) {
        document.getElementById('component_app_status_display_pip_bottom').innerText = state.ui.modal.pip.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_pip_bottom') != null) {
        document.getElementById('component_app_status_opacity_pip_bottom').innerText = state.ui.modal.pip.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_pip_bottom') != null) {
        document.getElementById('component_app_status_transform_pip_bottom').innerText = state.ui.modal.pip.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_pip_left') != null) {
        document.getElementById('component_app_status_display_pip_left').innerText = state.ui.modal.pip.left.display;
    };

    if (document.getElementById('component_app_status_opacity_pip_left') != null) {
        document.getElementById('component_app_status_opacity_pip_left').innerText = state.ui.modal.pip.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_pip_left') != null) {
        document.getElementById('component_app_status_transform_pip_left').innerText = state.ui.modal.pip.left.transform;
    };

    if (document.getElementById('component_app_status_display_pip_right') != null) {
        document.getElementById('component_app_status_display_pip_right').innerText = state.ui.modal.pip.right.display;
    };

    if (document.getElementById('component_app_status_opacity_pip_right') != null) {
        document.getElementById('component_app_status_opacity_pip_right').innerText = state.ui.modal.pip.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_pip_right') != null) {
        document.getElementById('component_app_status_transform_pip_right').innerText = state.ui.modal.pip.right.transform;
    };

    // overlay

    if (document.getElementById('component_app_status_display_overlay_top') != null) {
        document.getElementById('component_app_status_display_overlay_top').innerText = state.ui.modal.overlay.top.display;
    };

    if (document.getElementById('component_app_status_opacity_overlay_top') != null) {
        document.getElementById('component_app_status_opacity_overlay_top').innerText = state.ui.modal.overlay.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_overlay_top') != null) {
        document.getElementById('component_app_status_transform_overlay_top').innerText = state.ui.modal.overlay.top.transform;
    };

    if (document.getElementById('component_app_status_display_overlay_bottom') != null) {
        document.getElementById('component_app_status_display_overlay_bottom').innerText = state.ui.modal.overlay.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_overlay_bottom') != null) {
        document.getElementById('component_app_status_opacity_overlay_bottom').innerText = state.ui.modal.overlay.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_overlay_bottom') != null) {
        document.getElementById('component_app_status_transform_overlay_bottom').innerText = state.ui.modal.overlay.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_overlay_left') != null) {
        document.getElementById('component_app_status_display_overlay_left').innerText = state.ui.modal.overlay.left.display;
    };

    if (document.getElementById('component_app_status_opacity_overlay_left') != null) {
        document.getElementById('component_app_status_opacity_overlay_left').innerText = state.ui.modal.overlay.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_overlay_left') != null) {
        document.getElementById('component_app_status_transform_overlay_left').innerText = state.ui.modal.overlay.left.transform;
    };

    if (document.getElementById('component_app_status_display_overlay_right') != null) {
        document.getElementById('component_app_status_display_overlay_right').innerText = state.ui.modal.overlay.right.display;
    };

    if (document.getElementById('component_app_status_opacity_overlay_right') != null) {
        document.getElementById('component_app_status_opacity_overlay_right').innerText = state.ui.modal.overlay.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_overlay_right') != null) {
        document.getElementById('component_app_status_transform_overlay_right').innerText = state.ui.modal.overlay.right.transform;
    };

    // menu

    if (document.getElementById('component_app_status_display_menu_top') != null) {
        document.getElementById('component_app_status_display_menu_top').innerText = state.ui.modal.menu.top.display;
    };

    if (document.getElementById('component_app_status_opacity_menu_top') != null) {
        document.getElementById('component_app_status_opacity_menu_top').innerText = state.ui.modal.menu.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_menu_top') != null) {
        document.getElementById('component_app_status_transform_menu_top').innerText = state.ui.modal.menu.top.transform;
    };

    if (document.getElementById('component_app_status_display_menu_bottom') != null) {
        document.getElementById('component_app_status_display_menu_bottom').innerText = state.ui.modal.menu.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_menu_bottom') != null) {
        document.getElementById('component_app_status_opacity_menu_bottom').innerText = state.ui.modal.menu.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_menu_bottom') != null) {
        document.getElementById('component_app_status_transform_menu_bottom').innerText = state.ui.modal.menu.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_menu_left') != null) {
        document.getElementById('component_app_status_display_menu_left').innerText = state.ui.modal.menu.left.display;
    };

    if (document.getElementById('component_app_status_opacity_menu_left') != null) {
        document.getElementById('component_app_status_opacity_menu_left').innerText = state.ui.modal.menu.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_menu_left') != null) {
        document.getElementById('component_app_status_transform_menu_left').innerText = state.ui.modal.menu.left.transform;
    };

    if (document.getElementById('component_app_status_display_menu_right') != null) {
        document.getElementById('component_app_status_display_menu_right').innerText = state.ui.modal.menu.right.display;
    };

    if (document.getElementById('component_app_status_opacity_menu_right') != null) {
        document.getElementById('component_app_status_opacity_menu_right').innerText = state.ui.modal.menu.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_menu_right') != null) {
        document.getElementById('component_app_status_transform_menu_right').innerText = state.ui.modal.menu.right.transform;
    };

    // fade

    if (document.getElementById('component_app_status_display_fade_top') != null) {
        document.getElementById('component_app_status_display_fade_top').innerText = state.ui.modal.fade.top.display;
    };

    if (document.getElementById('component_app_status_opacity_fade_top') != null) {
        document.getElementById('component_app_status_opacity_fade_top').innerText = state.ui.modal.fade.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_fade_top') != null) {
        document.getElementById('component_app_status_transform_fade_top').innerText = state.ui.modal.fade.top.transform;
    };

    if (document.getElementById('component_app_status_display_fade_bottom') != null) {
        document.getElementById('component_app_status_display_fade_bottom').innerText = state.ui.modal.fade.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_fade_bottom') != null) {
        document.getElementById('component_app_status_opacity_fade_bottom').innerText = state.ui.modal.fade.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_fade_bottom') != null) {
        document.getElementById('component_app_status_transform_fade_bottom').innerText = state.ui.modal.fade.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_fade_left') != null) {
        document.getElementById('component_app_status_display_fade_left').innerText = state.ui.modal.fade.left.display;
    };

    if (document.getElementById('component_app_status_opacity_fade_left') != null) {
        document.getElementById('component_app_status_opacity_fade_left').innerText = state.ui.modal.fade.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_fade_left') != null) {
        document.getElementById('component_app_status_transform_fade_left').innerText = state.ui.modal.fade.left.transform;
    };

    if (document.getElementById('component_app_status_display_fade_right') != null) {
        document.getElementById('component_app_status_display_fade_right').innerText = state.ui.modal.fade.right.display;
    };

    if (document.getElementById('component_app_status_opacity_fade_right') != null) {
        document.getElementById('component_app_status_opacity_fade_right').innerText = state.ui.modal.fade.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_fade_right') != null) {
        document.getElementById('component_app_status_transform_fade_right').innerText = state.ui.modal.fade.right.transform;
    };

    // corner

    if (document.getElementById('component_app_status_display_corner_top') != null) {
        document.getElementById('component_app_status_display_corner_top').innerText = state.ui.modal.corner.top.display;
    };

    if (document.getElementById('component_app_status_opacity_corner_top') != null) {
        document.getElementById('component_app_status_opacity_corner_top').innerText = state.ui.modal.corner.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_corner_top') != null) {
        document.getElementById('component_app_status_transform_corner_top').innerText = state.ui.modal.corner.top.transform;
    };

    if (document.getElementById('component_app_status_display_corner_bottom') != null) {
        document.getElementById('component_app_status_display_corner_bottom').innerText = state.ui.modal.corner.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_corner_bottom') != null) {
        document.getElementById('component_app_status_opacity_corner_bottom').innerText = state.ui.modal.corner.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_corner_bottom') != null) {
        document.getElementById('component_app_status_transform_corner_bottom').innerText = state.ui.modal.corner.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_corner_left') != null) {
        document.getElementById('component_app_status_display_corner_left').innerText = state.ui.modal.corner.left.display;
    };

    if (document.getElementById('component_app_status_opacity_corner_left') != null) {
        document.getElementById('component_app_status_opacity_corner_left').innerText = state.ui.modal.corner.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_corner_left') != null) {
        document.getElementById('component_app_status_transform_corner_left').innerText = state.ui.modal.corner.left.transform;
    };

    if (document.getElementById('component_app_status_display_corner_right') != null) {
        document.getElementById('component_app_status_display_corner_right').innerText = state.ui.modal.corner.right.display;
    };

    if (document.getElementById('component_app_status_opacity_corner_right') != null) {
        document.getElementById('component_app_status_opacity_corner_right').innerText = state.ui.modal.corner.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_corner_right') != null) {
        document.getElementById('component_app_status_transform_corner_right').innerText = state.ui.modal.corner.right.transform;
    };

    // morph

    if (document.getElementById('component_app_status_display_morph_top') != null) {
        document.getElementById('component_app_status_display_morph_top').innerText = state.ui.modal.morph.top.display;
    };

    if (document.getElementById('component_app_status_opacity_morph_top') != null) {
        document.getElementById('component_app_status_opacity_morph_top').innerText = state.ui.modal.morph.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_morph_top') != null) {
        document.getElementById('component_app_status_transform_morph_top').innerText = state.ui.modal.morph.top.transform;
    };

    if (document.getElementById('component_app_status_display_morph_bottom') != null) {
        document.getElementById('component_app_status_display_morph_bottom').innerText = state.ui.modal.morph.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_morph_bottom') != null) {
        document.getElementById('component_app_status_opacity_morph_bottom').innerText = state.ui.modal.morph.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_morph_bottom') != null) {
        document.getElementById('component_app_status_transform_morph_bottom').innerText = state.ui.modal.morph.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_morph_left') != null) {
        document.getElementById('component_app_status_display_morph_left').innerText = state.ui.modal.morph.left.display;
    };

    if (document.getElementById('component_app_status_opacity_morph_left') != null) {
        document.getElementById('component_app_status_opacity_morph_left').innerText = state.ui.modal.morph.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_morph_left') != null) {
        document.getElementById('component_app_status_transform_morph_left').innerText = state.ui.modal.morph.left.transform;
    };

    if (document.getElementById('component_app_status_display_morph_right') != null) {
        document.getElementById('component_app_status_display_morph_right').innerText = state.ui.modal.morph.right.display;
    };

    if (document.getElementById('component_app_status_opacity_morph_right') != null) {
        document.getElementById('component_app_status_opacity_morph_right').innerText = state.ui.modal.morph.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_morph_right') != null) {
        document.getElementById('component_app_status_transform_morph_right').innerText = state.ui.modal.morph.right.transform;
    };

    // gradient

    if (document.getElementById('component_app_status_display_gradient_top') != null) {
        document.getElementById('component_app_status_display_gradient_top').innerText = state.ui.modal.gradient.top.display;
    };

    if (document.getElementById('component_app_status_opacity_gradient_top') != null) {
        document.getElementById('component_app_status_opacity_gradient_top').innerText = state.ui.modal.gradient.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_gradient_top') != null) {
        document.getElementById('component_app_status_transform_gradient_top').innerText = state.ui.modal.gradient.top.transform;
    };

    if (document.getElementById('component_app_status_display_gradient_bottom') != null) {
        document.getElementById('component_app_status_display_gradient_bottom').innerText = state.ui.modal.gradient.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_gradient_bottom') != null) {
        document.getElementById('component_app_status_opacity_gradient_bottom').innerText = state.ui.modal.gradient.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_gradient_bottom') != null) {
        document.getElementById('component_app_status_transform_gradient_bottom').innerText = state.ui.modal.gradient.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_gradient_left') != null) {
        document.getElementById('component_app_status_display_gradient_left').innerText = state.ui.modal.gradient.left.display;
    };

    if (document.getElementById('component_app_status_opacity_gradient_left') != null) {
        document.getElementById('component_app_status_opacity_gradient_left').innerText = state.ui.modal.gradient.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_gradient_left') != null) {
        document.getElementById('component_app_status_transform_gradient_left').innerText = state.ui.modal.gradient.left.transform;
    };

    if (document.getElementById('component_app_status_display_gradient_right') != null) {
        document.getElementById('component_app_status_display_gradient_right').innerText = state.ui.modal.gradient.right.display;
    };

    if (document.getElementById('component_app_status_opacity_gradient_right') != null) {
        document.getElementById('component_app_status_opacity_gradient_right').innerText = state.ui.modal.gradient.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_gradient_right') != null) {
        document.getElementById('component_app_status_transform_gradient_right').innerText = state.ui.modal.gradient.right.transform;
    };

    // nav

    if (document.getElementById('component_app_status_display_nav_top') != null) {
        document.getElementById('component_app_status_display_nav_top').innerText = state.ui.modal.nav.top.display;
    };

    if (document.getElementById('component_app_status_opacity_nav_top') != null) {
        document.getElementById('component_app_status_opacity_nav_top').innerText = state.ui.modal.nav.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_nav_top') != null) {
        document.getElementById('component_app_status_transform_nav_top').innerText = state.ui.modal.nav.top.transform;
    };

    if (document.getElementById('component_app_status_display_nav_bottom') != null) {
        document.getElementById('component_app_status_display_nav_bottom').innerText = state.ui.modal.nav.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_nav_bottom') != null) {
        document.getElementById('component_app_status_opacity_nav_bottom').innerText = state.ui.modal.nav.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_nav_bottom') != null) {
        document.getElementById('component_app_status_transform_nav_bottom').innerText = state.ui.modal.nav.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_nav_left') != null) {
        document.getElementById('component_app_status_display_nav_left').innerText = state.ui.modal.nav.left.display;
    };

    if (document.getElementById('component_app_status_opacity_nav_left') != null) {
        document.getElementById('component_app_status_opacity_nav_left').innerText = state.ui.modal.nav.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_nav_left') != null) {
        document.getElementById('component_app_status_transform_nav_left').innerText = state.ui.modal.nav.left.transform;
    };

    if (document.getElementById('component_app_status_display_nav_right') != null) {
        document.getElementById('component_app_status_display_nav_right').innerText = state.ui.modal.nav.right.display;
    };

    if (document.getElementById('component_app_status_opacity_nav_right') != null) {
        document.getElementById('component_app_status_opacity_nav_right').innerText = state.ui.modal.nav.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_nav_right') != null) {
        document.getElementById('component_app_status_transform_nav_right').innerText = state.ui.modal.nav.right.transform;
    };

    // browser

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_ux_browser_height').innerText = state.ux.browser.height;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_ux_browser_width').innerText = state.ux.browser.width;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_ux_dimensions_height').innerText = state.ux.dimensions.height;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_ux_dimensions_width').innerText = state.ux.dimensions.width;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_clientX').innerHTML = state.events.mouse.clientX;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_clientY').innerHTML = state.events.mouse.clientY;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_drop_start_clientX').innerHTML = state.events.mouse.drop_start.clientX;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_drop_start_clientY').innerHTML = state.events.mouse.drop_start.clientY;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_drop_end_clientX').innerHTML = state.events.mouse.drop_end.clientX;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_drop_end_clientY').innerHTML = state.events.mouse.drop_end.clientY;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_drop_clientX').innerHTML = state.events.mouse.drop.clientX;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_drop_clientY').innerHTML = state.events.mouse.drop.clientY;
    };

    if (document.getElementById('dragX') != null) {
        document.getElementById('dragX').innerHTML = state.events.mouse.drag.clientX;
    };

    if (document.getElementById('dragY') != null) {
        document.getElementById('dragY').innerHTML = state.events.mouse.drag.clientY;
    };

    if (document.getElementById('penX') != null) {
        document.getElementById('penX').innerHTML = state.events.mouse.pen.clientX;
    };

    if (document.getElementById('penY') != null) {
        document.getElementById('penY').innerHTML = state.events.mouse.pen.clientY;
    };

    if (document.getElementById('pencilX') != null) {
        document.getElementById('pencilX').innerHTML = state.events.mouse.pencil.clientX;
    };

    if (document.getElementById('pencilY') != null) {
        document.getElementById('pencilY').innerHTML = state.events.mouse.pencil.clientY;
    };

    if (document.getElementById('component_app_status_state_events_mouse_x_axis') != null) {
        document.getElementById('component_app_status_state_events_mouse_x_axis').innerHTML = state.events.mouse.x_axis;
    };

    if (document.getElementById('component_app_status_state_events_mouse_y_axis') != null) {
        document.getElementById('component_app_status_state_events_mouse_y_axis').innerHTML = state.events.mouse.y_axis;
    };

    if (document.getElementById('component_app_status_state_events_mouse_absolute') != null) {
        document.getElementById('component_app_status_state_events_mouse_absolute').innerHTML = state.events.mouse.absolute;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x').innerHTML = state.events.mouse.accelerationIncludingGravity.x;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_y').innerHTML = state.events.mouse.accelerationIncludingGravity.y;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_z').innerHTML = state.events.mouse.accelerationIncludingGravity.z;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_acceleration_x').innerHTML = state.events.mouse.acceleration.x;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_acceleration_y').innerHTML = state.events.mouse.acceleration.y;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_acceleration_z').innerHTML = state.events.mouse.acceleration.z;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_rotationRate_alpha').innerHTML = state.events.mouse.rotationRate.alpha;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_rotationRate_beta').innerHTML = state.events.mouse.rotationRate.beta;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_rotationRate_gamma').innerHTML = state.events.mouse.rotationRate.gamma;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_alpha').innerHTML = state.events.mouse.alpha;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_beta').innerHTML = state.events.mouse.beta;
    };

    if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
        document.getElementById('component_app_status_state_events_mouse_gamma').innerHTML = state.events.mouse.gamma;
    };
};

var from_Import = function from_Import() {
    var a = 'from_Import';
    return a;
};

exports.default = {
    values_update: values_update,
    from_Import: from_Import
};
},{"../index.js":3}],341:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';

// floating
var floating_right_frame = 1;
var floating_left_frame = 1;

// blinking
//??

// standing
var standing_right_frame = 1;
var standing_left_frame = 1;

//sitting
var sitting_right_frame = 1;
var sitting_left_frame = 1;

// bend
var bend_right_frame = 1;
var bend_left_frame = 1;

// prone
var prone_right_frame = 1;
var prone_left_frame = 1;

// walking
var layer_fg_2_player_svg_frame = 1;
var layer_fg_3_player_svg_frame = 1;

var attacked_right_frame = 1;
var attacked_left_frame = 1;

var jumping_right_frame = 1;
var jumping_left_frame = 1;

var punching_right_frame = 1;
var punching_left_frame = 1;

var kicking_right_frame = 1;
var kicking_left_frame = 1;

var shooting_right_frame = 1;
var shooting_left_frame = 1;

var grabing_right_frame = 1;
var grabing_left_frame = 1;

var blocking_right_frame = 1;
var blocking_left_frame = 1;

var Handle_ui = function Handle_ui() {

    state = _index2.default.Handle_return_state();

    // loaded {
    if (state.animation.instances.loaded && !state.animation.instances.start && !state.animation.instances.learn && !state.animation.instances.hide) {
        if (document.getElementById('paint_logo') != null) {
            document.getElementById('paint_logo').classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left';
            document.getElementById('logo_filler').classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_40vh margin_auto float_left';
        }
    }

    // Start
    if (state.animation.instances.loaded && state.animation.instances.start && !state.animation.instances.learn && !state.animation.instances.hide) {
        if (document.getElementById('paint_logo') != null) {
            document.getElementById('paint_logo').classList = 'position_absolute bottom_0 top_0 left_0 width_40 height_40vh margin_auto float_left';
            document.getElementById('logo_filler').classList = 'position_absolute bottom_0 top_0 left_0 width_40 height_40vh margin_auto float_left';
        }
    }

    // Learn
    if (state.animation.instances.loaded && !state.animation.instances.start && state.animation.instances.learn && !state.animation.instances.hide) {
        if (document.getElementById('paint_logo') != null) {
            document.getElementById('paint_logo').classList = 'position_absolute bottom_0 top_0 right_0 width_40 height_40vh margin_auto float_left';
            document.getElementById('logo_filler').classList = 'position_absolute bottom_0 top_0 right_0 width_40 height_40vh margin_auto float_left';
        }
    }

    // Route Hide
    if (state.animation.instances.loaded && !state.animation.instances.start && !state.animation.instances.learn && state.animation.instances.hide) {
        if (document.getElementById('paint_logo') != null) {
            document.getElementById('paint_logo').classList = 'position_absolute bottom_0 top_0 right_0 left_0 opacity_05 width_40 height_40vh margin_auto float_left';
            document.getElementById('logo_filler').classList = 'position_absolute bottom_0 top_0 right_0 left_0 opacity_05 width_40 height_40vh margin_auto float_left';
        }
    }

    document.getElementById('parallax_X_Layer1').style = 'bottom: ' + state.ui.interaction.parallax_x.layer1.clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.parallax_x.layer1.clientX * state.ux.dimensions.width8 * (1 / 8 * 1) + 'px';
    document.getElementById('parallax_X_Layer2').style = 'bottom: ' + state.ui.interaction.parallax_x.layer2.clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.parallax_x.layer2.clientX * state.ux.dimensions.width8 * (1 / 8 * 2) + 'px';
    document.getElementById('parallax_X_Layer3').style = 'bottom: ' + state.ui.interaction.parallax_x.layer3.clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.parallax_x.layer3.clientX * state.ux.dimensions.width8 * (1 / 8 * 3) + 'px';
    document.getElementById('parallax_X_Layer4').style = 'bottom: ' + state.ui.interaction.parallax_x.layer4.clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.parallax_x.layer4.clientX * state.ux.dimensions.width8 * (1 / 8 * 4) + 'px';
    document.getElementById('parallax_X_Layer5').style = 'bottom: ' + state.ui.interaction.parallax_x.layer5.clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.parallax_x.layer5.clientX * state.ux.dimensions.width8 * (1 / 8 * 5) + 'px';
    document.getElementById('parallax_X_Layer6').style = 'bottom: ' + state.ui.interaction.parallax_x.layer6.clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.parallax_x.layer6.clientX * state.ux.dimensions.width8 * (1 / 8 * 6) + 'px';
    document.getElementById('parallax_X_Layer7').style = 'bottom: ' + state.ui.interaction.parallax_x.layer7.clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.parallax_x.layer5.clientX * state.ux.dimensions.width8 * (1 / 8 * 7) + 'px';
    document.getElementById('parallax_X_Layer8').style = 'bottom: ' + state.ui.interaction.parallax_x.layer8.clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.parallax_x.layer6.clientX * state.ux.dimensions.width8 * (1 / 8 * 8) + 'px';

    document.getElementById('parallax_Y_Layer1').style = 'bottom: ' + state.ui.interaction.parallax_y.layer1.clientY * state.ux.dimensions.height8 * (1 / 8 * 1) + 'px; left: ' + state.ui.interaction.parallax_y.layer1.clientX * state.ux.dimensions.width8 + 'px';
    document.getElementById('parallax_Y_Layer2').style = 'bottom: ' + state.ui.interaction.parallax_y.layer2.clientY * state.ux.dimensions.height8 * (1 / 8 * 2) + 'px; left: ' + state.ui.interaction.parallax_y.layer2.clientX * state.ux.dimensions.width8 + 'px';
    document.getElementById('parallax_Y_Layer3').style = 'bottom: ' + state.ui.interaction.parallax_y.layer3.clientY * state.ux.dimensions.height8 * (1 / 8 * 3) + 'px; left: ' + state.ui.interaction.parallax_y.layer3.clientX * state.ux.dimensions.width8 + 'px';
    document.getElementById('parallax_Y_Layer4').style = 'bottom: ' + state.ui.interaction.parallax_y.layer4.clientY * state.ux.dimensions.height8 * (1 / 8 * 4) + 'px; left: ' + state.ui.interaction.parallax_y.layer4.clientX * state.ux.dimensions.width8 + 'px';
    document.getElementById('parallax_Y_Layer5').style = 'bottom: ' + state.ui.interaction.parallax_y.layer5.clientY * state.ux.dimensions.height8 * (1 / 8 * 5) + 'px; left: ' + state.ui.interaction.parallax_y.layer5.clientX * state.ux.dimensions.width8 + 'px';
    document.getElementById('parallax_Y_Layer6').style = 'bottom: ' + state.ui.interaction.parallax_y.layer6.clientY * state.ux.dimensions.height8 * (1 / 8 * 6) + 'px; left: ' + state.ui.interaction.parallax_y.layer6.clientX * state.ux.dimensions.width8 + 'px';
    document.getElementById('parallax_Y_Layer7').style = 'bottom: ' + state.ui.interaction.parallax_y.layer7.clientY * state.ux.dimensions.height8 * (1 / 8 * 7) + 'px; left: ' + state.ui.interaction.parallax_y.layer5.clientX * state.ux.dimensions.width8 + 'px';
    document.getElementById('parallax_Y_Layer8').style = 'bottom: ' + state.ui.interaction.parallax_y.layer8.clientY * state.ux.dimensions.height8 * (1 / 8 * 8) + 'px; left: ' + state.ui.interaction.parallax_y.layer6.clientX * state.ux.dimensions.width8 + 'px';

    // empty bullets container
    document.getElementById('bullets_container').innerHTML = '';

    for (var i = 0; i < state.ui.interaction.bullets.length; i++) {
        console.log('state.ui.interaction.bullets from for loop: ' + state.ui.interaction.bullets[i]);
        document.getElementById('bullets_container').innerHTML += '<div style=" bottom: ' + state.ui.interaction.bullets[i].clientY + 'px; left: ' + state.ui.interaction.bullets[i].clientX + 'px;' + '" class="position_absolute width_1205vw height_1205vh bg_green"></div>';
        state.ui.interaction.bullets[i].clientX += 1;
        state.ui.interaction.bullets[i].clientY += 1;
    };

    // empty pen container
    document.getElementById('pen_container').innerHTML = '';

    for (var i = 0; i < state.ui.interaction.pen.length; i++) {
        console.log('state.ui.interaction.pen from for loop: ' + state.ui.interaction.pen[i]);
        document.getElementById('pen_container').innerHTML += '<div style=" top: ' + state.ui.interaction.pen[i].clientY + 'px; left: ' + state.ui.interaction.pen[i].clientX + 'px;' + '" class="position_absolute width_1vw height_1vh bg_green"></div>';
    };

    // empty pencil container
    document.getElementById('pencil_container').innerHTML = '';

    for (var i = 0; i < state.ui.interaction.pencil.length; i++) {
        console.log('state.ui.interaction.pencil from for loop: ' + state.ui.interaction.pencil[i]);
        document.getElementById('pen_container').innerHTML += '<div style=" top: ' + state.ui.interaction.pencil[i].clientY + 'px; left: ' + state.ui.interaction.pencil[i].clientX + 'px;' + '" class="position_absolute width_1vw height_1vh bg_pink"></div>';
    };

    // snake
    document.getElementById('snakes_container').innerHTML = '';
    var snakes_amount = state.ui.interaction.snake.snakes.length;

    if (state.ui.interaction.snake.direction == 'right') {

        var new_snake = {
            clientX: state.ui.interaction.snake.snakes[0].clientX + 1,
            clientY: state.ui.interaction.snake.snakes[0].clientY
        };

        state.ui.interaction.snake.snakes.unshift(new_snake);
    }

    if (state.ui.interaction.snake.direction == 'left') {
        var _new_snake = {
            clientX: state.ui.interaction.snake.snakes[0].clientX - 1,
            clientY: state.ui.interaction.snake.snakes[0].clientY
        };

        state.ui.interaction.snake.snakes.unshift(_new_snake);
    }

    if (state.ui.interaction.snake.direction == 'up') {

        var _new_snake2 = {
            clientX: state.ui.interaction.snake.snakes[0].clientX,
            clientY: state.ui.interaction.snake.snakes[0].clientY + 1
        };

        state.ui.interaction.snake.snakes.unshift(_new_snake2);
    }

    if (state.ui.interaction.snake.direction == 'down') {
        var _new_snake3 = {
            clientX: state.ui.interaction.snake.snakes[0].clientX,
            clientY: state.ui.interaction.snake.snakes[0].clientY - 1
        };

        state.ui.interaction.snake.snakes.unshift(_new_snake3);
    }

    if (state.ui.interaction.snake.create == false) {
        state.ui.interaction.snake.snakes.pop();
    };

    for (var i = 0; i < state.ui.interaction.snake.snakes.length; i++) {

        document.getElementById('snakes_container').innerHTML += '<div style=" bottom: ' + state.ui.interaction.snake.snakes[i].clientY * state.ux.dimensions.height8 + 'px; left: ' + state.ui.interaction.snake.snakes[i].clientX * state.ux.dimensions.width8 + 'px;' + '" class="position_absolute width_1205vw height_1205vh bg_pink"></div>';
    };

    state.ui.interaction.snake.create = false;

    //64
    if (document.getElementById('componentCube') != null) {
        document.getElementById('componentCube');
        componentCube.style = 'transform: translateZ( -12.5vh ); transform: rotateY(' + state.events.mouse.game_bit.clientX * 45 + 'deg ) rotateX( ' + -state.events.mouse.game_bit.clientY * 45 + 'deg )';
    };

    if (state.animation.instances.sixty_four == 5) {

        document.getElementById('animation_fourground_furniture_layer_8_svg').classList.remove('pieces_office_shoplight_off_bg');
        document.getElementById('animation_fourground_furniture_layer_8_svg').classList.add('pieces_office_shoplight_on_bg');
    };

    if (state.animation.instances.sixty_four != 5) {

        document.getElementById('animation_fourground_furniture_layer_8_svg').classList.add('pieces_office_shoplight_off_bg');
        document.getElementById('animation_fourground_furniture_layer_8_svg').classList.remove('pieces_office_shoplight_on_bg');
    };

    // key hole
    if (state.ui.interaction.keyhole.xaxis == state.ui.interaction.key.xaxis && state.ui.interaction.keyhole.yaxis == state.ui.interaction.key.yaxis) {
        //alert('unlocked');

        state.ui.pause.display = false;

        state.ui.interaction.key.xaxis = 0;
        state.ui.interaction.key.yaxis = 0;
    };

    // set positions
    if (document.getElementById('enemy') != null) {
        document.getElementById('enemy').style = 'height: ' + state.ui.interaction.enemy.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.enemy.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.enemy.yaxis * state.ux.dimensions.height8 + 'px;' + 'right: ' + state.ui.interaction.enemy.xaxis * state.ux.dimensions.width8 + 'px;';
    };

    // game events
    if (document.getElementById('layer_fg_1_man_motion') != null) {

        if (state.animation.instances.loading == true) {
            // player walking and pause
            if (state.ui.interaction.player_1.xaxis < 16) {
                if (state.ui.interaction.player_1.action.left == true && state.ui.interaction.player_1.motion.walking == true) {
                    //state.ui.interaction.player_1.xaxis += (1/8);
                };
            };

            if (state.ui.interaction.player_1.xaxis > -8) {
                if (state.ui.interaction.player_1.action.right == true && state.ui.interaction.player_1.motion.walking == true) {
                    //state.ui.interaction.player_1.xaxis -= (1/8);
                };
            };

            if (state.ui.interaction.player_1.xaxis >= 16) {
                //state.ui.interaction.player_1.xaxis = 16;
                //alert('walked out left');
            };

            if (state.ui.interaction.player_1.xaxis <= -8) {
                //state.ui.interaction.player_1.xaxis = -8;
                //alert('walked out right');
            };
        };

        // reset player & control enneagon
        if (state.animation.instances.start == true) {

            // player walking and pause
            if (state.ui.interaction.player_1.xaxis < 16) {
                if (state.ui.interaction.player_1.action.left == true && state.ui.interaction.player_1.motion.walking == true) {
                    state.ui.interaction.player_1.xaxis += 1 / 8;
                };
            };

            if (state.ui.interaction.player_1.xaxis > -8) {
                if (state.ui.interaction.player_1.action.right == true && state.ui.interaction.player_1.motion.walking == true) {
                    state.ui.interaction.player_1.xaxis -= 1 / 8;
                };
            };

            // left to center
            if (state.ui.stage.enneagon.roomed == true && state.ui.stage.enneagon.which_roomed == 'left' && state.ui.interaction.player_1.action.right == true) {
                if (state.ui.interaction.player_1.xaxis == -1) {
                    state.ui.stage.enneagon.roomed = false;
                    state.ui.stage.enneagon.which_roomed = 'center';
                    state.ui.stage.enneagon.xaxis = 0;
                    state.ui.stage.enneagon.yaxis = 0;
                    state.ui.interaction.player_1.xaxis = 7;
                };
            }

            // right to center
            if (state.ui.stage.enneagon.roomed == true && state.ui.stage.enneagon.which_roomed == 'right' && state.ui.interaction.player_1.action.left == true) {
                if (state.ui.interaction.player_1.xaxis == 7) {
                    state.ui.stage.enneagon.roomed = false;
                    state.ui.stage.enneagon.which_roomed = 'center';
                    state.ui.stage.enneagon.xaxis = 0;
                    state.ui.stage.enneagon.yaxis = 0;
                    state.ui.interaction.player_1.xaxis = -1;
                };
            }

            // center to left
            if (state.ui.stage.enneagon.roomed == false && state.ui.stage.enneagon.which_roomed == 'center' && state.ui.interaction.player_1.action.left == true) {
                if (state.ui.interaction.player_1.xaxis == 7) {
                    state.ui.stage.enneagon.roomed = true;
                    state.ui.stage.enneagon.which_roomed = 'left';
                    state.ui.stage.enneagon.xaxis = 1;
                    state.ui.stage.enneagon.yaxis = 0;
                    state.ui.interaction.player_1.xaxis = -1;
                };
            }

            // center to right
            if (state.ui.stage.enneagon.roomed == false && state.ui.stage.enneagon.which_roomed == 'center' && state.ui.interaction.player_1.action.right == true) {
                if (state.ui.interaction.player_1.xaxis == -1) {
                    state.ui.stage.enneagon.roomed = true;
                    state.ui.stage.enneagon.which_roomed = 'right';
                    state.ui.stage.enneagon.xaxis = -1;
                    state.ui.stage.enneagon.yaxis = 0;
                    state.ui.interaction.player_1.xaxis = 7;
                };
            }

            // center room
            if (state.ui.stage.enneagon.roomed == false && state.ui.stage.enneagon.which_roomed == 'center') {
                if (state.ui.interaction.player_1.xaxis < 6 && state.ui.interaction.player_1.xaxis > 0) {
                    state.ui.stage.enneagon.xaxis = 0;
                    state.ui.stage.enneagon.yaxis = 0;
                };
            }
        };

        if (state.animation.instances.learn == true) {
            // player walking and pause
            if (state.ui.interaction.player_1.xaxis < 7.25) {
                if (state.ui.interaction.player_1.action.left == true && state.ui.interaction.player_1.motion.walking == true) {
                    state.ui.interaction.player_1.xaxis += 1 / 8;
                };
            };

            if (state.ui.interaction.player_1.xaxis > -.25) {
                if (state.ui.interaction.player_1.action.right == true && state.ui.interaction.player_1.motion.walking == true) {
                    state.ui.interaction.player_1.xaxis -= 1 / 8;
                };
            };

            if (state.ui.interaction.player_1.xaxis >= 7.25) {
                state.ui.interaction.player_1.xaxis = 7.25;
                //alert('walked out left');
            };

            if (state.ui.interaction.player_1.xaxis <= -.25) {
                state.ui.interaction.player_1.xaxis = -.25;
                //alert('walked out right');
            };
        };

        if ((state.animation.instances.start == true || state.animation.instances.learn == true) && state.ui.interaction.player_1.xaxis == state.ui.interaction.enemy.xaxis) {
            //alert('game event');
            document.getElementById('particles_health').classList = 'particles_health float_left position_absolute bottom_100 left_0 right_0 width_100 height_25 margin_auto';
            state.ui.modal.menu.bottom.display = true;
            state.ui.modal.menu.bottom.transform = false;
        };

        if ((state.animation.instances.start == true || state.animation.instances.learn == true) && state.ui.interaction.player_1.xaxis != state.ui.interaction.enemy.xaxis) {
            //alert('game event');
            document.getElementById('particles_health').classList = 'float_left position_absolute bottom_100 left_0 right_0 width_100 height_25 margin_auto';
            state.ui.modal.menu.bottom.display = true;
            state.ui.modal.menu.bottom.transform = true;
        };

        // set style
        document.getElementById('layer_fg_1_man_motion').classList = 'position_absolute margin_auto';
        document.getElementById('layer_fg_1_man_motion').style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.player_1.yaxis * state.ux.dimensions.height8 + 'px;' + 'right: ' + state.ui.interaction.player_1.xaxis * state.ux.dimensions.width8 + 'px;';
    };

    // floating right
    if (state.ui.interaction.player_1.idle.floating == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_' + floating_right_frame + ' pulse infinite animated1 float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (floating_right_frame == 4) {
                floating_right_frame = 0;
            };
            floating_right_frame += 1;
        };
    };

    // floating left
    if (state.ui.interaction.player_1.idle.floating == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_' + floating_left_frame + ' pulse infinite animated1 float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (floating_left_frame == 4) {
                floating_left_frame = 0;
            };
            floating_left_frame += 1;
        };
    };

    // blinking
    // mouse around
    if (state.ui.interaction.player_1.idle.blinking == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').classList = 'float_left easing_01 position_absolute bottom_0 right_0 width_100 height_100 margin_auto ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_' + state.animation.instances.sixty_four;
        };
    };

    // standing right NOT jumping (breathing loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.idle.bend == false && state.ui.interaction.player_1.motion.walking == false && state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_' + standing_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (standing_right_frame == 4) {
                standing_right_frame = 0;
            };
            standing_right_frame += 1;
        };
    };

    // standing left NOT jumping (breathing loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.idle.bend == false && state.ui.interaction.player_1.motion.walking == false && state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_' + standing_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (standing_left_frame == 4) {
                standing_left_frame = 0;
            };
            standing_left_frame += 1;
        };
    };

    // attacked right
    if (state.ui.interaction.player_1.idle.attacked == true && state.ui.interaction.player_1.idle.bend == false && state.ui.interaction.player_1.motion.walking == false && state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_' + attacked_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (attacked_right_frame == 4) {
                attacked_right_frame = 0;
            };
            attacked_right_frame += 1;
        };
    };

    // attacked left
    if (state.ui.interaction.player_1.idle.attacked == true && state.ui.interaction.player_1.idle.bend == false && state.ui.interaction.player_1.motion.walking == false && state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_' + attacked_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (attacked_left_frame == 4) {
                attacked_left_frame = 0;
            };
            attacked_left_frame += 1;
        };
    };

    // sitting right
    if (state.ui.interaction.player_1.idle.sitting == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_' + sitting_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (sitting_right_frame == 4) {
                sitting_right_frame = 0;
            };
            sitting_right_frame += 1;
        };
    };

    // sitting left
    if (state.ui.interaction.player_1.idle.sitting == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_' + sitting_left_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (sitting_left_frame == 4) {
                sitting_left_frame = 0;
            };

            sitting_left_frame += 1;
        };
    };

    // 1
    // bend right NOT jumping (bend loop)
    if (state.ui.interaction.player_1.idle.bend == true && state.ui.interaction.player_1.idle.standing == false && state.ui.interaction.player_1.motion.walking == false && state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_' + bend_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (bend_right_frame == 4) {
                bend_right_frame = 0;
            };

            bend_right_frame += 1;
        };
    };

    // 1
    // bend left NOT jumping (bend loop)
    if (state.ui.interaction.player_1.idle.bend == true && state.ui.interaction.player_1.idle.standing == false && state.ui.interaction.player_1.motion.walking == false && state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_' + bend_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (bend_left_frame == 4) {
                bend_left_frame = 0;
            };

            bend_left_frame += 1;
        };
    };

    // prone right
    if (state.ui.interaction.player_1.idle.prone == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_' + prone_right_frame + ' pulse infinite animated1 float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (prone_right_frame == 4) {
                prone_right_frame = 0;
            };
            prone_right_frame += 1;
        };
    };

    // prone left
    if (state.ui.interaction.player_1.idle.prone == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_' + prone_left_frame + ' pulse infinite animated1 float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (prone_left_frame == 4) {
                prone_left_frame = 0;
            };
            prone_left_frame += 1;
        };
    };

    // actions

    // 1
    // jumpming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.jumping == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'animated025 infinite pulse nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_' + jumping_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (jumping_right_frame < 4) {
                jumping_right_frame += 1;
            };
        };
    };

    // 1
    // jumpming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.jumping == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'animated025 infinite pulse nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_' + jumping_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (jumping_left_frame < 4) {
                jumping_left_frame += 1;
            };
        };
    };

    // 1
    // punchming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.punching == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_' + punching_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (punching_right_frame == 4) {
                punching_right_frame = 0;
            };
            punching_right_frame += 1;
        };
    };

    // 1
    // punchming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.punching == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_' + punching_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (punching_left_frame == 4) {
                punching_left_frame = 0;
            };
            punching_left_frame += 1;
        };
    };

    // 1
    // kickming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.kicking == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_' + kicking_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (kicking_right_frame == 4) {
                kicking_right_frame = 0;
            };
            kicking_right_frame += 1;
        };
    };

    // 1
    // kickming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.kicking == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_' + kicking_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (kicking_left_frame == 4) {
                kicking_left_frame = 0;
            };
            kicking_left_frame += 1;
        };
    };

    // 1
    // shootming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.shooting == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_' + shooting_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (shooting_right_frame == 4) {
                shooting_right_frame = 0;
            };
            shooting_right_frame += 1;
        };
    };

    // 1
    // shootming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.shooting == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_' + shooting_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (shooting_left_frame == 4) {
                shooting_left_frame = 0;
            };
            shooting_left_frame += 1;
        };
    };

    // 1
    // grabming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.grabing == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_' + grabing_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (grabing_right_frame == 4) {
                grabing_right_frame = 0;
            };
            grabing_right_frame += 1;
        };
    };

    // 1
    // grabming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.grabing == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_' + grabing_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (grabing_left_frame == 4) {
                grabing_left_frame = 0;
            };
            grabing_left_frame += 1;
        };
    };

    // 1
    // blockming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.blocking == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_' + blocking_right_frame + ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (blocking_right_frame == 4) {
                blocking_right_frame = 0;
            };
            blocking_right_frame += 1;
        };
    };

    // 1
    // blockming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.blocking == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_' + blocking_left_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (blocking_left_frame == 4) {
                blocking_left_frame = 0;
            };
            blocking_left_frame += 1;
        };
    };

    // 2
    // walking left (loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.motion.walking == true && state.ui.interaction.player_1.action.left == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_' + layer_fg_2_player_svg_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (layer_fg_2_player_svg_frame == 9) {
                layer_fg_2_player_svg_frame = 0;
            };
            layer_fg_2_player_svg_frame += 1;
        };
    };

    // 3
    // walking right (loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.motion.walking == true && state.ui.interaction.player_1.action.right == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').innerHTML = '';

            document.getElementById('layer_fg_2_player_svg').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_' + layer_fg_3_player_svg_frame + ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ';

            if (layer_fg_3_player_svg_frame == 9) {
                layer_fg_3_player_svg_frame = 0;
            };
            layer_fg_3_player_svg_frame += 1;
        };
    };

    if (state.ui.interaction.player_1.xaxis > 0 && state.ui.interaction.player_1.xaxis < 1) {

        _index2.default.check_door();
    };

    // wheel
    if (state.animation.instances.scrolling == false && state.animation.instances.start == false && state.animation.instances.learn == false) {

        setTimeout(function () {

            document.getElementById('component_app_scrolling').classList.remove('overflow_y');
            document.getElementById('component_app_scrolling').classList.add('overflow_hidden');
        }, 101);
    };

    if (state.animation.instances.scrolling == true && state.animation.instances.start == false && state.animation.instances.learn == false) {

        setTimeout(function () {

            document.getElementById('component_app_scrolling').classList.remove('overflow_hidden');
            document.getElementById('component_app_scrolling').classList.add('overflow_y');
        }, 101);
    };

    // mouse
    if (state.events.mouse.up == true) {

        if (document.getElementById('component_app_interaction_hands') != null) {
            document.getElementById('component_app_interaction_hand').classList.add('hands');
        };
    };

    if (state.events.mouse.up == false) {

        if (document.getElementById('component_app_interaction_hands') != null) {};
    };

    // gui
    if (document.getElementById('component_app_pieces_office_shoplights') != null) {
        var component_app_pieces_office_shoplights = document.getElementById('component_app_pieces_office_shoplights');
        component_app_pieces_office_shoplights.style = 'height: ' + state.ui.stage.shoplight.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.stage.shoplight.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.stage.shoplight.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.stage.shoplight.xaxis * state.ux.dimensions.width8 + 'px;';
    };

    if (document.getElementById('component_app_gui_keyhole') != null) {
        var component_app_gui_keyhole = document.getElementById('component_app_gui_keyhole');
        component_app_gui_keyhole.style = 'height: ' + state.ui.interaction.keyhole.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.keyhole.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + (state.ui.interaction.keyhole.yaxis - 1) * state.ux.dimensions.height8 + 'px;' + 'left: ' + (state.ui.interaction.keyhole.xaxis - 1) * state.ux.dimensions.width8 + 'px;';
    };

    // 10 is half the size of the element_ball
    // It center the positioning point to the center of the element_ball
    if (document.getElementById('element_ball') != null) {
        document.getElementById('element_ball').style.bottom = state.events.mouse.gamma / 360 * 100 * 4 + "%";
        document.getElementById('element_ball').style.left = state.events.mouse.beta / 360 * 100 * 4 + "%";
    };

    // interaction
    // - game
    // - player_1

    // Enemy
    if (document.getElementById('component_app_interaction_enemy') != null) {
        document.getElementById('component_app_interaction_enemy').style = 'height: ' + state.ui.interaction.enemy.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.enemy.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.enemy.yaxis * state.ux.dimensions.height8 + 'px;' + 'right: ' + state.ui.interaction.enemy.xaxis * state.ux.dimensions.width8 + 'px;';
    };

    if (document.getElementById('bounce') != null) {
        document.getElementById('bounce').style = 'top: ' + state.ui.interaction.bounce.yaxis * state.ux.dimensions.height8 + 'px; \
            right: ' + state.ui.interaction.bounce.xaxis * state.ux.dimensions.width8 + 'px ;';
    };

    //stage
    // Enneagon
    if (document.getElementById('enneagon') != null) {
        document.getElementById('enneagon').style = "transform: translate3d(" + state.ui.stage.enneagon.xaxis * 100 + "%, " + state.ui.stage.enneagon.yaxis * 100 + "%, 0);";
    };

    if (state.events.mouse != null) {};
};

exports.default = {
    Handle_ui: Handle_ui
};
},{"../index.js":3}],3:[function(require,module,exports) {

// Imports
'use strict';

// Imports

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _state = require('./partials/state');

var _state2 = _interopRequireDefault(_state);

var _functions = require('./partials/functions');

var _functions2 = _interopRequireDefault(_functions);

var _events = require('./partials/events');

var _events2 = _interopRequireDefault(_events);

var _defaults = require('./partials/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _components = require('./partials/components');

var _components2 = _interopRequireDefault(_components);

var _elements = require('./partials/elements');

var _elements2 = _interopRequireDefault(_elements);

var _values = require('./partials/values');

var _values2 = _interopRequireDefault(_values);

var _ui = require('./partials/ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Declaration
var state = void 0;
// import imported_generators from './partials/generators';

var functions = void 0;
var defaults = void 0;
var components = void 0;
var first_load = true;
var sound1 = document.getElementById('componentSound');

// Assignment
state = _state2.default.default_state;
functions = _functions2.default;
defaults = _defaults2.default;
components = _components2.default;

// Initialization
var config = {
    apiKey: "AIzaSyDXIXMGC_38yav7wo7E5A8ZwGK7vNavpxk",
    authDomain: "gnougn-efdc5.firebaseapp.com",
    databaseURL: "https://gnougn-efdc5.firebaseio.com",
    projectId: "gnougn-efdc5",
    storageBucket: "gnougn-efdc5.appspot.com",
    messagingSenderId: "668732840020"
};

// Functions
firebase.initializeApp(config);

// Closures

// Create
var addListings = function addListings(child) {

    var current_second = new Date().getTime() / 1000;
    var default_item = {};

    if (child == 'library') {
        default_item = {
            id: 0,
            time: current_second,
            title: document.getElementById('element_input_title').value,
            feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            subtitle: document.getElementById('element_input_subtitle').value,
            paragraph: document.getElementById('element_input_paragraph').value,
            category: document.getElementById('element_input_category').value,
            subcategory: document.getElementById('element_input_sub_category').value,
            feature_style: document.getElementById('element_input_feature_style').value,
            tag: document.getElementById('element_input_tag').value,
            type: document.getElementById('element_input_type').value,
            views: 0,
            likes: 0,
            dislikes: 0
        };
    };

    if (child == 'roster') {
        default_item = {
            id: 0,
            time: current_second,
            username: document.getElementById('new_username').value,
            password: document.getElementById('new_password').value,
            feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0
        };
    };

    document.getElementById('element_input_title').value = '';

    // Firebase References
    // Firebase Database
    var rootRef = firebase.database().ref();
    var gnougnRef = rootRef.child('gnougn');
    var Ref = gnougnRef.child(child);

    Ref.push(default_item).then(function (snap) {
        var key = snap.key;
        console.log('from addListing' + key);
        // update created item with snap.key
        Ref.child(key).update({
            id: key
        });

        // Set firebase data
        setTimeout(function () {
            Handle_Firebase_Refs_and_Render();
        }, 0);
    });
};

// Delete
var deleteWhoListings = function deleteWhoListings(child, id) {

    // Firebase References
    // Firebase Database
    var rootRef = firebase.database().ref();
    var gnougnRef = rootRef.child('gnougn');
    var Ref = gnougnRef.child(child);
    console.log(id, 'from deleteWhoListings service');
    Ref.child(id).remove();

    // Set firebase data
    setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

// Update
var likeWhoListings = function likeWhoListings(child, id) {

    // Firebase References
    // Firebase Database
    var rootRef = firebase.database().ref();
    var gnougnRef = rootRef.child('gnougn');
    var Ref = gnougnRef.child(child);
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function (snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);
    // Set firebase data
    setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

// Update
var dislikeWhoListings = function dislikeWhoListings(child, id) {

    // Firebase References
    // Firebase Database
    var rootRef = firebase.database().ref();
    var gnougnRef = rootRef.child('gnougn');
    var Ref = gnougnRef.child(child);
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function (snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes -= 1;

    Ref.child(id).set(changeThisValue);

    console.log(id);
    console.log(changeThisValue);

    // Set firebase data
    setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

// Update
var viewWhoListings = function viewWhoListings(child, id) {

    // Firebase References
    // Firebase Database
    var rootRef = firebase.database().ref();
    var gnougnRef = rootRef.child('gnougn');
    var Ref = gnougnRef.child(child);
    console.log(id, 'from viewWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function (snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.views += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);
    // Set firebase data
    setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

var sorting_type = 'likesup';

var find_sorting_type = function find_sorting_type() {

    if (document.getElementById('element_input_sorting_type_views') != null) {

        if (document.getElementById('element_input_sorting_type_likesup').checked == true) {
            sorting_type = 'likesup';
        };

        if (document.getElementById('element_input_sorting_type_likesdown').checked == true) {
            sorting_type = 'likesdown';
        };

        if (document.getElementById('element_input_sorting_type_timeup').checked == true) {
            sorting_type = 'timeup';
        };

        if (document.getElementById('element_input_sorting_type_timedown').checked == true) {
            sorting_type = 'timedown';
        };

        if (document.getElementById('element_input_sorting_type_viewsup').checked == true) {
            sorting_type = 'viewsup';
        };

        if (document.getElementById('element_input_sorting_type_viewsdown').checked == true) {
            sorting_type = 'viewsdown';
        };
    };
};

var find_sort = function find_sort() {

    if (sorting_type == 'likesup' || '') {
        if (document.getElementById('element_input_sorting_type_likesup') != null) {

            if (sorting_type == 'likesup') {
                return function (a, b) {
                    return a.likes - b.likes;
                };
            };
        };
    };

    if (sorting_type == 'likesdown' || '') {
        if (document.getElementById('element_input_sorting_type_likesup') != null) {

            if (sorting_type == 'likesdown') {
                return function (a, b) {
                    return b.likes - a.likes;
                };
            };
        };
    };

    if (sorting_type == 'viewsup') {
        if (document.getElementById('element_input_sorting_type_likesup') != null) {

            if (sorting_type == 'viewsup' || '') {
                return function (a, b) {
                    return a.views - b.views;
                };
            };
        };
    };

    if (sorting_type == 'viewsdown') {
        if (document.getElementById('element_input_sorting_type_likesup') != null) {

            if (sorting_type == 'viewsdown') {
                return function (a, b) {
                    return b.views - a.views;
                };
            };
        };
    };

    if (sorting_type == 'timeup') {
        if (document.getElementById('element_input_sorting_type_likesup') != null) {

            if (sorting_type == 'timeup') {
                return function (a, b) {
                    return b.time - a.time;
                };
            };
        };
    };

    if (sorting_type == 'timedown') {
        if (document.getElementById('element_input_sorting_type_likesup') != null) {

            if (sorting_type == 'timedown' || '') {
                return function (a, b) {
                    return a.time - b.time;
                };
            };
        };
    };
};

var find_view = function find_view() {

    if (state.data.view == '') {
        state.data.view = 'grid';
    };

    document.getElementById('wp_component_blog').classList.remove('grid');
    document.getElementById('wp_component_blog').classList.remove('list');
    document.getElementById('wp_component_blog').classList.remove('card');
    document.getElementById('wp_component_blog').classList.remove('full');
    document.getElementById('wp_component_blog').classList.remove('thumbs');

    if (state.data.view == 'grid') {
        document.getElementById('wp_component_blog').classList.add('grid');
    };

    if (state.data.view == 'card') {
        document.getElementById('wp_component_blog').classList.add('card');
    };

    if (state.data.view == 'list') {
        document.getElementById('wp_component_blog').classList.add('list');
    };

    if (state.data.view == 'thumbs') {
        document.getElementById('wp_component_blog').classList.add('thumbs');
    };

    if (state.data.view == 'full') {
        document.getElementById('wp_component_blog').classList.add('full');
    };
};

var find_limit = function find_limit() {

    if (document.getElementById('element_input_limit') != null) {
        state.data.posts_limit = document.getElementById('element_input_limit').value;
    };
};

var find_type = function find_type() {

    if (state.data.type == '') {
        state.data.type = 'all';
    };

    document.getElementById('wp_component_feature_posts').classList.remove('type_skills');
    document.getElementById('wp_component_feature_posts').classList.remove('type_services');
    document.getElementById('wp_component_feature_posts').classList.remove('type_partner');
    document.getElementById('wp_component_feature_posts').classList.remove('type_abilities');
    document.getElementById('wp_component_feature_posts').classList.remove('type_roster');
    document.getElementById('wp_component_feature_posts').classList.remove('type_library');

    if (state.data.type == 'library') {
        document.getElementById('wp_component_feature_posts').classList.add('type_library');
    };

    if (state.data.type == 'skills') {
        document.getElementById('wp_component_feature_posts').classList.add('type_skills');
    };

    if (state.data.type == 'services') {
        document.getElementById('wp_component_feature_posts').classList.add('type_services');
    };

    if (state.data.type == 'partners') {
        document.getElementById('wp_component_feature_posts').classList.add('type_partners');
    };

    if (state.data.type == 'abilities') {
        document.getElementById('wp_component_feature_posts').classList.add('type_abilities');
    };

    if (state.data.type == 'roster') {
        document.getElementById('wp_component_feature_posts').classList.add('type_roster');
    };
};

if (document.getElementById('component_app_body') != null) {
    console.log('component_app_body' + 'is live');
};

var Handle_Firebase_Refs_and_Render = function Handle_Firebase_Refs_and_Render() {
    console.log('Handle_Firebase_Refs');
    var rootRef = firebase.database().ref();
    var gnougnRef = rootRef.child('gnougn');
    var wordpressRef = gnougnRef.child('wordpress');
    console.log('Handle_Firebase_Refs');

    (function () {
        rootRef.on('value', function (snapshot) {
            var obj = snapshot.val();
            state.data.firebase = obj;
            console.log('state.data.firebase');
            console.log(state.data.firebase);
        });

        state.data.refs = false;
    })();

    // set firebase data
    (function () {

        var Handle_Repeat_Firebase_Validation = setInterval(function () {

            // repeat until refs are set
            if (state.data.refs == false) {

                var temp = state.data.firebase;
                // console.log('firbase objects -> firbase array');

                if (temp.gnougn.abilities != null) {
                    // abilities
                    // set objects to array - part 1

                    var result_abilities = Object.keys(temp.gnougn.abilities).map(function (key) {
                        return temp.gnougn.abilities[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.abilities = result_abilities;
                    // console.log('abilities');
                    // console.log(temp.gnougn.abilities);
                };

                if (temp.gnougn.library != null) {
                    // library
                    // set objects to array - part 1
                    var result_library = Object.keys(temp.gnougn.library).map(function (key) {
                        return temp.gnougn.library[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.library = result_library;
                    // console.log('library');
                    // console.log(temp.gnougn.library);
                };

                if (temp.gnougn.partners != null) {
                    // partners
                    // set objects to array - part 1
                    var result_partners = Object.keys(temp.gnougn.partners).map(function (key) {
                        return temp.gnougn.partners[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.partners = result_partners;
                    // console.log('partners');
                    // console.log(temp.gnougn.partners);
                };

                if (temp.gnougn.services != null) {
                    // services
                    // set objects to array - part 1
                    var result_services = Object.keys(temp.gnougn.services).map(function (key) {
                        return temp.gnougn.services[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.services = result_services;
                    // console.log('services');
                    // console.log(temp.gnougn.services);
                };

                if (temp.gnougn.roster != null) {
                    // roster
                    // set objects to array - part 1
                    var result_roster = Object.keys(temp.gnougn.roster).map(function (key) {
                        return temp.gnougn.roster[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.roster = result_roster;
                    // console.log('roster');
                    // console.log(temp.gnougn.roster);
                };

                if (temp.gnougn.skills != null) {
                    // skills
                    // set objects to array - part 1
                    var result_skills = Object.keys(temp.gnougn.skills).map(function (key) {
                        return temp.gnougn.skills[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.skills = result_skills;
                    // console.log('skills');
                    // console.log(temp.gnougn.skills);
                };

                if (temp.gnougn.skills != null) {

                    console.log(temp.gnougn);

                    // Render listtings to front_end
                    setTimeout(function () {

                        state.data.refs = true;

                        if (first_load == true) {

                            first_load = false;

                            console.clear();

                            // check ui state
                            setTimeout(function () {

                                // re-INIT
                                HANDLE_animation();

                                // re_check
                                setInterval(function () {
                                    Handle_check_states();
                                    document.firstElementChild.style.zoom = "reset";
                                }, 1000 / state.animation.framerate);
                            }, 1);
                        };

                        // check ui state
                        setTimeout(function () {
                            Handle_firebase_render();
                            console.clear();
                        }, 2);
                    }, 0);
                };
            };
        }, 0);
    })();
};

var Handle_firebase_render = function Handle_firebase_render() {

    // render library
    (function () {

        setTimeout(function () {

            if (document.getElementById('element_input_filter') != null) {

                // *********************** "Order of operations" ************************

                // 1.) set array
                var array = state.data.firebase;

                // 2.) sort array
                find_sorting_type();
                find_view();
                find_type();
                find_limit();

                var array_gnougn_library = array.gnougn.library.sort(find_sort());
                var filtered_array_gnougn_library = [];

                // 3.) filter array
                for (var i = 0; i < array_gnougn_library.length; i++) {

                    // 3 options
                    if (array_gnougn_library[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                        filtered_array_gnougn_library.push(array_gnougn_library[i]);
                    };
                };

                // Library
                document.getElementById('element_ol_firebase_library').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < filtered_array_gnougn_library.length; i++) {

                    if (i >= state.data.posts_start && i < state.data.posts_limit) {
                        document.getElementById('element_ol_firebase_library').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(filtered_array_gnougn_library[i])));
                    };
                }

                // Library Featured
                document.getElementById('element_ol_firebase_library_feature').innerHTML = '';

                // 5.) fill ol element to feature limit
                for (var i = 0; i < state.data.feature_posts_limit; i++) {
                    document.getElementById('element_ol_firebase_library_feature').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(filtered_array_gnougn_library[i])));
                }

                // dashboard posts
                // 4.) empty ol element
                if (document.getElementById('dashboard_posts') != null) {
                    document.getElementById('dashboard_posts').innerHTML = '';

                    // 5.) fill ol element to feature limit
                    for (var i = 0; i < array_gnougn_library.length; i++) {
                        // console.log(filtered_array_gnougn_library[i]);
                        document.getElementById('dashboard_posts').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(filtered_array_gnougn_library[i])));
                    }
                };

                // about_posts
                // 4.) empty ol element
                if (document.getElementById('about_posts') != null) {
                    document.getElementById('about_posts').innerHTML = '';

                    // 5.) fill ol element to feature limit
                    for (var i = 0; i < array_gnougn_library.length; i++) {
                        // console.log(filtered_array_gnougn_library[i]);
                        document.getElementById('about_posts').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(filtered_array_gnougn_library[i])));
                    }
                };

                // Roster
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_roster').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
                    // console.log(state.data.firebase.gnougn.roster[i]);
                    document.getElementById('element_ol_firebase_roster').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(state.data.firebase.gnougn.roster[i])));
                }

                // partners
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_partners').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.partners.length; i++) {
                    // console.log(state.data.firebase.gnougn.partners[i]);
                    document.getElementById('element_ol_firebase_partners').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(state.data.firebase.gnougn.partners[i])));
                }

                // Abilities
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_abilities').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.abilities.length; i++) {
                    // console.log(state.data.firebase.gnougn.abilities[i]);
                    document.getElementById('element_ol_firebase_abilities').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(state.data.firebase.gnougn.abilities[i])));
                }

                // services
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_services').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.services.length; i++) {
                    // console.log(state.data.firebase.gnougn.services[i]);
                    document.getElementById('element_ol_firebase_services').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(state.data.firebase.gnougn.services[i])));
                }

                // skills
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_skills').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.skills.length; i++) {
                    // console.log(state.data.firebase.gnougn.skills[i]);
                    document.getElementById('element_ol_firebase_skills').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(state.data.firebase.gnougn.skills[i])));
                }
            };
        }, 0);
    })();

    state.data.refs = true;
};

var Handle_render = function Handle_render() {

    for (var i = 0; i < defaults.colors.length; i++) {
        console.log('defaults.colors[i]: ' + defaults.colors[i]);
        document.getElementById(defaults.colors[i].parent).appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')));
    };
};

var Handle_check_route = function Handle_check_route(route) {
    state.app.route = route;

    if (route == 'home') {

        var intro_container = '';
        var route_background = '';
        var detail_content = '';
        var foreground_content = '';

        document.getElementById('component_app_modal_element_page_top_content').innerHTML = intro_container + route_background + detail_content + foreground_content;

        Handle_Firebase_Refs_and_Render();
    }

    if (route == 'about') {

        var _intro_container = '';
        var _route_background = '';
        var _detail_content = _elements2.default.element_scroll_y_events('element_scroll_y_events_route', '\n                    <div id="about_posts" class="position_relative width_100 float_left"></div>\n                    <div class="position_relative width_100 height_100vh bg_white float_left margin_auto">about page</div>\n                    <div class="position_relative width_100 height_100vh bg_white float_left margin_auto">about page</div>\n                ');
        var _foreground_content = '';

        document.getElementById('component_app_modal_element_page_top_content').innerHTML = _intro_container + _route_background + _detail_content + _foreground_content;

        Handle_Firebase_Refs_and_Render();
    }
};

var values_update = function values_update() {
    _values2.default.values_update();
};

var Handle_EventListeners = function Handle_EventListeners() {

    // defaults
    if (document.getElementById('component_app_scrolling') != null) {
        document.getElementById('component_app_scrolling').addEventListener("scroll", function (event) {

            console.log(event);
            //alert('yup');

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

            var currY = event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight) * 100;
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
                    alert('scrolled_bottom met');
                };
            };

            if (document.getElementById('scroll_clientHeight') != null) {
                document.getElementById('scroll_clientHeight').innerHTML = event.srcElement.clientHeight;
            }

            if (document.getElementById('scroll_clientWidth') != null) {
                document.getElementById('scroll_clientWidth').innerHTML = event.srcElement.clientWidth;
            }

            if (document.getElementById('scroll_scrollHeight') != null) {
                document.getElementById('scroll_scrollHeight').innerHTML = event.srcElement.scrollHeight;
            }

            if (document.getElementById('scroll_scrollWidth') != null) {
                document.getElementById('scroll_scrollWidth').innerHTML = event.srcElement.scrollWidth;
            }

            if (document.getElementById('scroll_scrollTop') != null) {
                document.getElementById('scroll_scrollTop').innerHTML = event.srcElement.scrollTop;
            };

            if (document.getElementById('scroll_scrollLeft') != null) {
                document.getElementById('scroll_scrollLeft').innerHTML = event.srcElement.scrollLeft;
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

            if (event.srcElement.scrollTop > 1 && !(event.srcElement.scrollHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
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

            if (event.srcElement.scrollHeight - event.srcElement.clientHeight > event.srcElement.scrollTop + event.srcElement.offsetHeight) {
                console.log('instance: 100vh before bottom not met');
                // gui change
            };

            if (event.srcElement.scrollHeight - event.srcElement.clientHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
                console.log('instance: 100vh before bottom met');
                // gui change
            };

            if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                alert("instance: footer met");
            }

            state.ui.root.component_app_gui_scroll_y_position = event.srcElement.scrollTop;
        }, false);
    }

    // bottomblog
    if (document.getElementById('component_app_content_blog') != null) {
        document.getElementById('component_app_content_blog').addEventListener("scroll", function (event) {

            console.log(event);
            //alert('yup');

            // scrolling
            console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
            console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
            console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
            console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
            console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
            console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

            state.ui.blog.clientHeight = event.srcElement.clientHeight;
            state.ui.blog.clientWidth = event.srcElement.clientWidth;

            state.ui.blog.scrollHeight = event.srcElement.scrollHeight;
            state.ui.blog.scrollWidth = event.srcElement.scrollWidth;

            state.ui.blog.scrollTop = event.srcElement.scrollTop;
            state.ui.blog.scrollLeft = event.srcElement.scrollLeft;

            var currY = event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight) * 100;
            console.log(currY);

            if (currY == 0) {

                if (state.animation.instances.scrolled_top == true) {
                    alert('scrolled_top met');
                };
            };

            if (currY == 100) {

                if (state.animation.instances.scrolled_bottom == true) {
                    alert('scrolled_bottom met');
                };
            };

            /*
             Value update
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
            */

            // instances      
            if (event.srcElement.scrollTop > state.ui.blog.component_app_gui_scroll_y_position) {
                console.log('state.ui.blog.component_app_gui_scroll_y_position increasing');
                console.log("instance: wheel up");
            }

            if (event.srcElement.scrollTop < state.ui.blog.component_app_gui_scroll_y_position) {
                console.log('state.ui.blog.component_app_gui_scroll_y_position decreasing');
                console.log("instance: wheel down");
            }

            if (event.srcElement.scrollTop === 0) {
                console.log("instance: top of page");
                // gui change
            }

            if (event.srcElement.scrollTop > 1 && !(event.srcElement.scrollHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
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

            if (event.srcElement.scrollHeight - event.srcElement.clientHeight > event.srcElement.scrollTop + event.srcElement.offsetHeight) {
                console.log('instance: 100vh before bottom not met');
                // gui change
            };

            if (event.srcElement.scrollHeight - event.srcElement.clientHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
                console.log('instance: 100vh before bottom met');
                // gui change
            };

            if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                alert("instance: footer met");
            }

            state.ui.blog.component_app_gui_scroll_y_position = event.srcElement.scrollTop;
        }, false);
    }

    // gui
    if (document.getElementById('gui_start_buttons') != null) {
        document.getElementById('gui_start_buttons').addEventListener("click", function (event) {

            HANDLE_animation_start();
        });
    };

    if (document.getElementById('gui_learn_buttons') != null) {
        document.getElementById('gui_learn_buttons').addEventListener("click", function (event) {

            HANDLE_animation_learn();
        });
    };

    // Blog Actions

    var event_style = function event_style() {

        if (sorting_type == 'viewsup') {
            document.getElementById('element_input_sorting_type_viewsup').classList.add('bg_pink');
            document.getElementById('element_input_sorting_type_viewsup').classList.remove('bg_yellow');
        };

        if (sorting_type != 'viewsup') {
            document.getElementById('element_input_sorting_type_viewsup').classList.remove('bg_pink');
            document.getElementById('element_input_sorting_type_viewsup').classList.add('bg_yellow');
        };

        if (sorting_type == 'viewsdown') {
            document.getElementById('element_input_sorting_type_viewsdown').classList.add('bg_pink');
            document.getElementById('element_input_sorting_type_viewsdown').classList.remove('bg_yellow');
        };

        if (sorting_type != 'viewsdown') {
            document.getElementById('element_input_sorting_type_viewsdown').classList.remove('bg_pink');
            document.getElementById('element_input_sorting_type_viewsdown').classList.add('bg_yellow');
        };

        if (sorting_type == 'timeup') {
            document.getElementById('element_input_sorting_type_timeup').classList.add('bg_pink');
            document.getElementById('element_input_sorting_type_timeup').classList.remove('bg_yellow');
        };

        if (sorting_type != 'timeup') {
            document.getElementById('element_input_sorting_type_timeup').classList.remove('bg_pink');
            document.getElementById('element_input_sorting_type_timeup').classList.add('bg_yellow');
        };

        if (sorting_type == 'timedown') {
            document.getElementById('element_input_sorting_type_timedown').classList.add('bg_pink');
            document.getElementById('element_input_sorting_type_timedown').classList.remove('bg_yellow');
        };

        if (sorting_type != 'timedown') {
            document.getElementById('element_input_sorting_type_timedown').classList.remove('bg_pink');
            document.getElementById('element_input_sorting_type_timedown').classList.add('bg_yellow');
        };

        if (sorting_type == 'likesup') {
            document.getElementById('element_input_sorting_type_likesup').classList.add('bg_pink');
            document.getElementById('element_input_sorting_type_likesup').classList.remove('bg_yellow');
        };

        if (sorting_type != 'likesup') {
            document.getElementById('element_input_sorting_type_likesup').classList.remove('bg_pink');
            document.getElementById('element_input_sorting_type_likesup').classList.add('bg_yellow');
        };

        if (sorting_type == 'likesdown') {
            document.getElementById('element_input_sorting_type_likesdown').classList.add('bg_pink');
            document.getElementById('element_input_sorting_type_likesdown').classList.remove('bg_yellow');
        };

        if (sorting_type != 'likesdown') {
            document.getElementById('element_input_sorting_type_likesdown').classList.remove('bg_pink');
            document.getElementById('element_input_sorting_type_likesdown').classList.add('bg_yellow');
        };

        if (state.data.type == 'all') {
            document.getElementById('element_input_type_all').classList.add('bg_pink');
            document.getElementById('element_input_type_all').classList.remove('bg_yellow');
        };

        if (state.data.type != 'all') {
            document.getElementById('element_input_type_all').classList.remove('bg_pink');
            document.getElementById('element_input_type_all').classList.add('bg_yellow');
        };

        if (state.data.type == 'abilities') {
            document.getElementById('element_input_type_abilities').classList.add('bg_pink');
            document.getElementById('element_input_type_abilities').classList.remove('bg_yellow');
        };

        if (state.data.type != 'abilities') {
            document.getElementById('element_input_type_abilities').classList.remove('bg_pink');
            document.getElementById('element_input_type_abilities').classList.add('bg_yellow');
        };

        if (state.data.type == 'library') {
            document.getElementById('element_input_type_library').classList.add('bg_pink');
            document.getElementById('element_input_type_library').classList.remove('bg_yellow');
        };

        if (state.data.type != 'library') {
            document.getElementById('element_input_type_library').classList.remove('bg_pink');
            document.getElementById('element_input_type_library').classList.add('bg_yellow');
        };

        if (state.data.type == 'roster') {
            document.getElementById('element_input_type_roster').classList.add('bg_pink');
            document.getElementById('element_input_type_roster').classList.remove('bg_yellow');
        };

        if (state.data.type != 'roster') {
            document.getElementById('element_input_type_roster').classList.remove('bg_pink');
            document.getElementById('element_input_type_roster').classList.add('bg_yellow');
        };

        if (state.data.type == 'partners') {
            document.getElementById('element_input_type_partners').classList.add('bg_pink');
            document.getElementById('element_input_type_partners').classList.remove('bg_yellow');
        };

        if (state.data.type != 'partners') {
            document.getElementById('element_input_type_partners').classList.remove('bg_pink');
            document.getElementById('element_input_type_partners').classList.add('bg_yellow');
        };

        if (state.data.type == 'services') {
            document.getElementById('element_input_type_services').classList.add('bg_pink');
            document.getElementById('element_input_type_services').classList.remove('bg_yellow');
        };

        if (state.data.type != 'services') {
            document.getElementById('element_input_type_services').classList.remove('bg_pink');
            document.getElementById('element_input_type_services').classList.add('bg_yellow');
        };

        if (state.data.type == 'skills') {
            document.getElementById('element_input_type_skills').classList.add('bg_pink');
            document.getElementById('element_input_type_skills').classList.remove('bg_yellow');
        };

        if (state.data.type != 'skills') {
            document.getElementById('element_input_type_skills').classList.remove('bg_pink');
            document.getElementById('element_input_type_skills').classList.add('bg_yellow');
        };

        // category
        if (state.data.category == 'all') {
            document.getElementById('element_input_category_all').classList.add('bg_pink');
            document.getElementById('element_input_category_all').classList.remove('bg_yellow');
        };

        if (state.data.category != 'all') {
            document.getElementById('element_input_category_all').classList.remove('bg_pink');
            document.getElementById('element_input_category_all').classList.add('bg_yellow');
        };

        if (state.data.category == 'development') {
            document.getElementById('element_input_category_development').classList.add('bg_pink');
            document.getElementById('element_input_category_development').classList.remove('bg_yellow');
        };

        if (state.data.category != 'development') {
            document.getElementById('element_input_category_development').classList.remove('bg_pink');
            document.getElementById('element_input_category_development').classList.add('bg_yellow');
        };

        if (state.data.category == 'design') {
            document.getElementById('element_input_category_design').classList.add('bg_pink');
            document.getElementById('element_input_category_design').classList.remove('bg_yellow');
        };

        if (state.data.category != 'design') {
            document.getElementById('element_input_category_design').classList.remove('bg_pink');
            document.getElementById('element_input_category_design').classList.add('bg_yellow');
        };

        if (state.data.category == 'graphics') {
            document.getElementById('element_input_category_graphics').classList.add('bg_pink');
            document.getElementById('element_input_category_graphics').classList.remove('bg_yellow');
        };

        if (state.data.category != 'graphics') {
            document.getElementById('element_input_category_graphics').classList.remove('bg_pink');
            document.getElementById('element_input_category_graphics').classList.add('bg_yellow');
        };

        if (state.data.category == 'motion') {
            document.getElementById('element_input_category_motion').classList.add('bg_pink');
            document.getElementById('element_input_category_motion').classList.remove('bg_yellow');
        };

        if (state.data.category != 'motion') {
            document.getElementById('element_input_category_motion').classList.remove('bg_pink');
            document.getElementById('element_input_category_motion').classList.add('bg_yellow');
        };

        if (state.data.category == 'strategy') {
            document.getElementById('element_input_category_strategy').classList.add('bg_pink');
            document.getElementById('element_input_category_strategy').classList.remove('bg_yellow');
        };

        if (state.data.category != 'strategy') {
            document.getElementById('element_input_category_strategy').classList.remove('bg_pink');
            document.getElementById('element_input_category_strategy').classList.add('bg_yellow');
        };

        if (state.data.category == 'content') {
            document.getElementById('element_input_category_content').classList.add('bg_pink');
            document.getElementById('element_input_category_content').classList.remove('bg_yellow');
        };

        if (state.data.category != 'content') {
            document.getElementById('element_input_category_content').classList.remove('bg_pink');
            document.getElementById('element_input_category_content').classList.add('bg_yellow');
        };

        // views
        if (state.data.view == 'full') {
            document.getElementById('element_input_view_full').classList.add('bg_pink');
            document.getElementById('element_input_view_full').classList.remove('bg_yellow');
        };

        if (state.data.view != 'full') {
            document.getElementById('element_input_view_full').classList.remove('bg_pink');
            document.getElementById('element_input_view_full').classList.add('bg_yellow');
        };

        if (state.data.view == 'thumbs') {
            document.getElementById('element_input_view_thumbs').classList.add('bg_pink');
            document.getElementById('element_input_view_thumbs').classList.remove('bg_yellow');
        };

        if (state.data.view != 'thumbs') {
            document.getElementById('element_input_view_thumbs').classList.remove('bg_pink');
            document.getElementById('element_input_view_thumbs').classList.add('bg_yellow');
        };

        if (state.data.view == 'list') {
            document.getElementById('element_input_view_list').classList.add('bg_pink');
            document.getElementById('element_input_view_list').classList.remove('bg_yellow');
        };

        if (state.data.view != 'list') {
            document.getElementById('element_input_view_list').classList.remove('bg_pink');
            document.getElementById('element_input_view_list').classList.add('bg_yellow');
        };

        if (state.data.view == 'grid') {
            document.getElementById('element_input_view_grid').classList.add('bg_pink');
            document.getElementById('element_input_view_grid').classList.remove('bg_yellow');
        };

        if (state.data.view != 'grid') {
            document.getElementById('element_input_view_grid').classList.remove('bg_pink');
            document.getElementById('element_input_view_grid').classList.add('bg_yellow');
        };

        if (state.data.view == 'card') {
            document.getElementById('element_input_view_card').classList.add('bg_pink');
            document.getElementById('element_input_view_card').classList.remove('bg_yellow');
        };

        if (state.data.view != 'card') {
            document.getElementById('element_input_view_card').classList.remove('bg_pink');
            document.getElementById('element_input_view_card').classList.add('bg_yellow');
        };

        if (state.data.feature_style == 'all') {
            document.getElementById('element_input_feature_style_all').classList.add('bg_pink');
            document.getElementById('element_input_feature_style_all').classList.remove('bg_yellow');
        };

        if (state.data.feature_style != 'all') {
            document.getElementById('element_input_feature_style_all').classList.remove('bg_pink');
            document.getElementById('element_input_feature_style_all').classList.add('bg_yellow');
        };

        if (state.data.feature_style == 'ux') {
            document.getElementById('element_input_feature_style_ux').classList.add('bg_pink');
            document.getElementById('element_input_feature_style_ux').classList.remove('bg_yellow');
        };

        if (state.data.feature_style != 'ux') {
            document.getElementById('element_input_feature_style_ux').classList.remove('bg_pink');
            document.getElementById('element_input_feature_style_ux').classList.add('bg_yellow');
        };

        if (state.data.feature_style == 'video') {
            document.getElementById('element_input_feature_style_video').classList.add('bg_pink');
            document.getElementById('element_input_feature_style_video').classList.remove('bg_yellow');
        };

        if (state.data.feature_style != 'video') {
            document.getElementById('element_input_feature_style_video').classList.remove('bg_pink');
            document.getElementById('element_input_feature_style_video').classList.add('bg_yellow');
        };

        if (state.data.feature_style == 'read') {
            document.getElementById('element_input_feature_style_read').classList.add('bg_pink');
            document.getElementById('element_input_feature_style_read').classList.remove('bg_yellow');
        };

        if (state.data.feature_style != 'read') {
            document.getElementById('element_input_feature_style_read').classList.remove('bg_pink');
            document.getElementById('element_input_feature_style_read').classList.add('bg_yellow');
        };

        if (state.data.feature_style == 'code') {
            document.getElementById('element_input_feature_style_code').classList.add('bg_pink');
            document.getElementById('element_input_feature_style_code').classList.remove('bg_yellow');
        };

        if (state.data.feature_style != 'code') {
            document.getElementById('element_input_feature_style_code').classList.remove('bg_pink');
            document.getElementById('element_input_feature_style_code').classList.add('bg_yellow');
        };

        if (state.data.feature_style == 'graphic') {
            document.getElementById('element_input_feature_style_graphic').classList.add('bg_pink');
            document.getElementById('element_input_feature_style_graphic').classList.remove('bg_yellow');
        };

        if (state.data.feature_style != 'graphic') {
            document.getElementById('element_input_feature_style_graphic').classList.remove('bg_pink');
            document.getElementById('element_input_feature_style_graphic').classList.add('bg_yellow');
        };

        if (state.data.feature_style == 'photo') {
            document.getElementById('element_input_feature_style_photo').classList.add('bg_pink');
            document.getElementById('element_input_feature_style_photo').classList.remove('bg_yellow');
        };

        if (state.data.feature_style != 'photo') {
            document.getElementById('element_input_feature_style_photo').classList.remove('bg_pink');
            document.getElementById('element_input_feature_style_photo').classList.add('bg_yellow');
        };

        if (state.data.feature_style == 'gallery') {
            document.getElementById('element_input_feature_style_gallery').classList.add('bg_pink');
            document.getElementById('element_input_feature_style_gallery').classList.remove('bg_yellow');
        };

        if (state.data.feature_style != 'gallery') {
            document.getElementById('element_input_feature_style_gallery').classList.remove('bg_pink');
            document.getElementById('element_input_feature_style_gallery').classList.add('bg_yellow');
        };
    };

    // type
    if (document.getElementById('element_input_type_all') != null) {
        document.getElementById('element_input_type_all').addEventListener("click", function (event) {
            state.data.type = 'all';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_type_library') != null) {
        document.getElementById('element_input_type_library').addEventListener("click", function (event) {
            state.data.type = 'library';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_type_services') != null) {
        document.getElementById('element_input_type_services').addEventListener("click", function (event) {
            state.data.type = 'services';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_type_roster') != null) {
        document.getElementById('element_input_type_roster').addEventListener("click", function (event) {
            state.data.type = 'roster';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_type_skills') != null) {
        document.getElementById('element_input_type_skills').addEventListener("click", function (event) {
            state.data.type = 'skills';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_type_abilities') != null) {
        document.getElementById('element_input_type_abilities').addEventListener("click", function (event) {
            state.data.type = 'abilities';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_type_partners') != null) {
        document.getElementById('element_input_type_partners').addEventListener("click", function (event) {
            state.data.type = 'partners';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    // categories

    if (document.getElementById('element_input_category_development') != null) {
        document.getElementById('element_input_category_development').addEventListener("click", function (event) {
            state.data.category = 'development';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_category_design') != null) {
        document.getElementById('element_input_category_design').addEventListener("click", function (event) {
            state.data.category = 'design';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_category_graphics') != null) {
        document.getElementById('element_input_category_graphics').addEventListener("click", function (event) {
            state.data.category = 'graphics';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_category_motion') != null) {
        document.getElementById('element_input_category_motion').addEventListener("click", function (event) {
            state.data.category = 'motion';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_category_strategy') != null) {
        document.getElementById('element_input_category_strategy').addEventListener("click", function (event) {
            state.data.category = 'strategy';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_category_content') != null) {
        document.getElementById('element_input_category_content').addEventListener("click", function (event) {
            state.data.category = 'content';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    // sort
    if (document.getElementById('element_input_sorting_type_viewsup') != null) {
        document.getElementById('element_input_sorting_type_viewsup').addEventListener("click", function (event) {
            sorting_type = 'viewsup';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_sorting_type_viewsdown') != null) {
        document.getElementById('element_input_sorting_type_viewsdown').addEventListener("click", function (event) {
            sorting_type = 'viewsdown';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_sorting_type_likesup') != null) {
        document.getElementById('element_input_sorting_type_likesup').addEventListener("click", function (event) {
            sorting_type = 'likesup';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_sorting_type_likesdown') != null) {
        document.getElementById('element_input_sorting_type_likesdown').addEventListener("click", function (event) {
            sorting_type = 'likesdown';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_sorting_type_timeup') != null) {
        document.getElementById('element_input_sorting_type_timeup').addEventListener("click", function (event) {
            sorting_type = 'timeup';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_sorting_type_timedown') != null) {
        document.getElementById('element_input_sorting_type_timedown').addEventListener("click", function (event) {
            sorting_type = 'timedown';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    // limit
    if (document.getElementById('element_input_limit') != null) {
        document.getElementById('element_input_limit').addEventListener("keyup", function (event) {
            Handle_Firebase_Refs_and_Render();
        });
    };

    // post type
    if (document.getElementById('element_input_feature_style_all') != null) {
        document.getElementById('element_input_feature_style_all').addEventListener("click", function (event) {
            state.data.feature_style = 'all';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_feature_style_ux') != null) {
        document.getElementById('element_input_feature_style_ux').addEventListener("click", function (event) {
            state.data.feature_style = 'ux';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };
    if (document.getElementById('element_input_feature_style_video') != null) {
        document.getElementById('element_input_feature_style_video').addEventListener("click", function (event) {
            state.data.feature_style = 'video';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };
    if (document.getElementById('element_input_feature_style_code') != null) {
        document.getElementById('element_input_feature_style_code').addEventListener("click", function (event) {
            state.data.feature_style = 'code';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };
    if (document.getElementById('element_input_feature_style_read') != null) {
        document.getElementById('element_input_feature_style_read').addEventListener("click", function (event) {
            state.data.feature_style = 'read';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };
    if (document.getElementById('element_input_feature_style_graphic') != null) {
        document.getElementById('element_input_feature_style_graphic').addEventListener("click", function (event) {
            state.data.feature_style = 'graphic';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };
    if (document.getElementById('element_input_feature_style_photo') != null) {
        document.getElementById('element_input_feature_style_photo').addEventListener("click", function (event) {
            state.data.feature_style = 'photo';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };
    if (document.getElementById('element_input_feature_style_gallery') != null) {
        document.getElementById('element_input_feature_style_gallery').addEventListener("click", function (event) {
            state.data.feature_style = 'gallery';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    // filter by title
    if (document.getElementById('element_input_filter') != null) {
        document.getElementById('element_input_filter').addEventListener('keydown', function (event) {
            // filter library
            setTimeout(function () {
                Handle_Firebase_Refs_and_Render();
            }, 0);
        });
    };

    // create post
    if (document.getElementById('element_input_create') != null) {
        document.getElementById('element_input_create').addEventListener('click', function (event) {
            addListings('library');
        });
    };

    // create user
    if (document.getElementById('element_create_user') != null) {
        document.getElementById('element_create_user').addEventListener('click', function (event) {
            addListings('roster');
        });
    };

    // login
    if (document.getElementById('element_user_login') != null) {
        document.getElementById('element_user_login').addEventListener('click', function (event) {

            for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
                var trying_username = document.getElementById('username').value;
                var trying_password = document.getElementById('password').value;
                if (state.data.firebase.gnougn.roster[i].username == trying_username) {

                    var validate_username = true;
                    var validated_user = state.data.firebase.gnougn.roster[i];

                    if (validated_user.password == trying_password) {

                        var validate_password = true;
                        state.data.user = validated_user;
                        localStorage.setItem("user", state.data.user);
                        localStorage.setItem("username", state.data.user.username);
                        localStorage.setItem("password", state.data.user.password);

                        //alert(state.data.user.username);
                        //alert(localStorage.user);
                        //alert(state.data.user.feature_image_src);

                        document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')';
                    };
                };
            };
        });
    };

    /*
         element_input_title
        element_input_subtitle
        element_input_paragraph
        element_input_category
        element_input_sub_category
        element_input_feature_style
        element_input_tag
        element_input_type
     */

    if (document.getElementById('element_input_type') != null) {
        document.getElementById('element_input_type').addEventListener('keydown', function (event) {});
    };

    // change view
    if (document.getElementById('element_input_view_grid') != null) {
        document.getElementById('element_input_view_grid').addEventListener('click', function (event) {
            event_style();
            state.data.view = 'grid';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_view_card') != null) {
        document.getElementById('element_input_view_card').addEventListener('click', function (event) {

            state.data.view = 'card';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_view_list') != null) {
        document.getElementById('element_input_view_list').addEventListener('click', function (event) {

            state.data.view = 'list';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_view_thumbs') != null) {
        document.getElementById('element_input_view_thumbs').addEventListener('click', function (event) {

            state.data.view = 'thumbs';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('element_input_view_full') != null) {
        document.getElementById('element_input_view_full').addEventListener('click', function (event) {

            state.data.view = 'full';
            event_style();
            Handle_Firebase_Refs_and_Render();
        });
    };

    // Gui Actions

    if (document.getElementById('component_app_gui_top_left') != null) {
        document.getElementById('component_app_gui_top_left').addEventListener("mouseenter", function (event) {
            state.ui.gui.top_left.transform = false;
        });
    };

    if (document.getElementById('component_app_gui_top') != null) {
        document.getElementById('component_app_gui_top').addEventListener("mouseenter", function (event) {
            state.ui.gui.top.transform = false;
        });
    };

    if (document.getElementById('component_app_gui_top_right') != null) {
        document.getElementById('component_app_gui_top_right').addEventListener("mouseenter", function (event) {
            state.ui.gui.top_right.transform = false;
        });
    };

    if (document.getElementById('component_app_gui_left') != null) {
        document.getElementById('component_app_gui_left').addEventListener("mouseenter", function (event) {
            state.ui.gui.left.transform = false;
        });
    };

    if (document.getElementById('component_app_gui_right') != null) {
        document.getElementById('component_app_gui_right').addEventListener("mouseenter", function (event) {
            state.ui.gui.right.transform = false;
        });
    };

    if (document.getElementById('component_app_gui_bottom_left') != null) {
        document.getElementById('component_app_gui_bottom_left').addEventListener("mouseenter", function (event) {
            state.ui.gui.bottom_left.transform = false;
        });
    };

    if (document.getElementById('component_app_gui_bottom') != null) {
        document.getElementById('component_app_gui_bottom').addEventListener("mouseenter", function (event) {
            state.ui.gui.bottom.transform = false;
        });
    };

    if (document.getElementById('component_app_gui_bottom_right') != null) {
        document.getElementById('component_app_gui_bottom_right').addEventListener("mouseenter", function (event) {
            state.ui.gui.bottom_right.transform = false;
        });
    };

    if (document.getElementById('component_app_gui_top_left') != null) {
        document.getElementById('component_app_gui_top_left').addEventListener("mouseleave", function (event) {
            state.ui.gui.top_left.transform = true;
        });
    };

    if (document.getElementById('component_app_gui_top') != null) {
        document.getElementById('component_app_gui_top').addEventListener("mouseleave", function (event) {
            state.ui.gui.top.transform = true;
        });
    };

    if (document.getElementById('component_app_gui_top_right') != null) {
        document.getElementById('component_app_gui_top_right').addEventListener("mouseleave", function (event) {
            state.ui.gui.top_right.transform = true;
        });
    };

    if (document.getElementById('component_app_gui_left') != null) {
        document.getElementById('component_app_gui_left').addEventListener("mouseleave", function (event) {
            state.ui.gui.left.transform = true;
        });
    };

    if (document.getElementById('component_app_gui_right') != null) {
        document.getElementById('component_app_gui_right').addEventListener("mouseleave", function (event) {
            state.ui.gui.right.transform = true;
        });
    };

    if (document.getElementById('component_app_gui_bottom_left') != null) {
        document.getElementById('component_app_gui_bottom_left').addEventListener("mouseleave", function (event) {
            state.ui.gui.bottom_left.transform = true;
        });
    };

    if (document.getElementById('component_app_gui_bottom') != null) {
        document.getElementById('component_app_gui_bottom').addEventListener("mouseleave", function (event) {
            state.ui.gui.bottom.transform = true;
        });
    };

    if (document.getElementById('component_app_gui_bottom_right') != null) {
        document.getElementById('component_app_gui_bottom_right').addEventListener("mouseleave", function (event) {
            state.ui.gui.bottom_right.transform = true;
        });
    };

    // Route Actions

    if (document.getElementById('route_home') != null) {
        document.getElementById('route_home').addEventListener("click", function (event) {
            Handle_check_route('home');
        });
    };

    if (document.getElementById('route_team') != null) {
        document.getElementById('route_team').addEventListener("click", function (event) {
            Handle_check_route('team');
        });
    };

    if (document.getElementById('route_team_1') != null) {
        document.getElementById('route_team_1').addEventListener("click", function (event) {
            Handle_check_route('team_1');
        });
    };

    if (document.getElementById('route_team_2') != null) {
        document.getElementById('route_team_2').addEventListener("click", function (event) {
            Handle_check_route('team_2');
        });
    };

    if (document.getElementById('route_team_3') != null) {
        document.getElementById('route_team_3').addEventListener("click", function (event) {
            Handle_check_route('team_3');
        });
    };

    if (document.getElementById('route_team_4') != null) {
        document.getElementById('route_team_4').addEventListener("click", function (event) {
            Handle_check_route('team_4');
        });
    };

    if (document.getElementById('route_team_5') != null) {
        document.getElementById('route_team_5').addEventListener("click", function (event) {
            Handle_check_route('team_5');
        });
    };

    if (document.getElementById('route_team_6') != null) {
        document.getElementById('route_team_6').addEventListener("click", function (event) {
            Handle_check_route('team_6');
        });
    };

    if (document.getElementById('route_library') != null) {
        document.getElementById('route_library').addEventListener("click", function (event) {
            Handle_check_route('library');
        });
    };

    if (document.getElementById('route_library_1') != null) {
        document.getElementById('route_library_1').addEventListener("click", function (event) {
            Handle_check_route('library_1');
        });
    };

    if (document.getElementById('route_library_2') != null) {
        document.getElementById('route_library_2').addEventListener("click", function (event) {
            Handle_check_route('library_2');
        });
    };

    if (document.getElementById('route_library_3') != null) {
        document.getElementById('route_library_3').addEventListener("click", function (event) {
            Handle_check_route('library_3');
        });
    };

    if (document.getElementById('route_library_4') != null) {
        document.getElementById('route_library_4').addEventListener("click", function (event) {
            Handle_check_route('library_4');
        });
    };

    if (document.getElementById('route_library_5') != null) {
        document.getElementById('route_library_5').addEventListener("click", function (event) {
            Handle_check_route('library_5');
        });
    };

    if (document.getElementById('route_library_6') != null) {
        document.getElementById('route_library_6').addEventListener("click", function (event) {
            Handle_check_route('library_6');
        });
    };

    if (document.getElementById('route_abilities') != null) {
        document.getElementById('route_abilities').addEventListener("click", function (event) {
            Handle_check_route('abilities');
        });
    };

    if (document.getElementById('route_abilities_1') != null) {
        document.getElementById('route_abilities_1').addEventListener("click", function (event) {
            Handle_check_route('abilities_1');
        });
    };

    if (document.getElementById('route_abilities_2') != null) {
        document.getElementById('route_abilities_2').addEventListener("click", function (event) {
            Handle_check_route('abilities_2');
        });
    };

    if (document.getElementById('route_abilities_3') != null) {
        document.getElementById('route_abilities_3').addEventListener("click", function (event) {
            Handle_check_route('abilities_3');
        });
    };

    if (document.getElementById('route_abilities_4') != null) {
        document.getElementById('route_abilities_4').addEventListener("click", function (event) {
            Handle_check_route('abilities_4');
        });
    };

    if (document.getElementById('route_abilities_5') != null) {
        document.getElementById('route_abilities_5').addEventListener("click", function (event) {
            Handle_check_route('abilities_5');
        });
    };

    if (document.getElementById('route_abilities_6') != null) {
        document.getElementById('route_abilities_6').addEventListener("click", function (event) {
            Handle_check_route('abilities_6');
        });
    };

    if (document.getElementById('route_services') != null) {
        document.getElementById('route_services').addEventListener("click", function (event) {
            Handle_check_route('services');
        });
    };

    if (document.getElementById('route_services_1') != null) {
        document.getElementById('route_services_1').addEventListener("click", function (event) {
            Handle_check_route('services_1');
        });
    };

    if (document.getElementById('route_services_2') != null) {
        document.getElementById('route_services_2').addEventListener("click", function (event) {
            Handle_check_route('services_2');
        });
    };

    if (document.getElementById('route_services_3') != null) {
        document.getElementById('route_services_3').addEventListener("click", function (event) {
            Handle_check_route('services_3');
        });
    };

    if (document.getElementById('route_services_4') != null) {
        document.getElementById('route_services_4').addEventListener("click", function (event) {
            Handle_check_route('services_4');
        });
    };

    if (document.getElementById('route_services_5') != null) {
        document.getElementById('route_services_5').addEventListener("click", function (event) {
            Handle_check_route('services_5');
        });
    };

    if (document.getElementById('route_services_6') != null) {
        document.getElementById('route_services_6').addEventListener("click", function (event) {
            Handle_check_route('services_6');
        });
    };

    if (document.getElementById('route_workshop') != null) {
        document.getElementById('route_workshop').addEventListener("click", function (event) {
            Handle_check_route('workshop');
        });
    };

    if (document.getElementById('route_workshop_1') != null) {
        document.getElementById('route_workshop_1').addEventListener("click", function (event) {
            Handle_check_route('workshop_1');
        });
    };

    if (document.getElementById('route_workshop_2') != null) {
        document.getElementById('route_workshop_2').addEventListener("click", function (event) {
            Handle_check_route('workshop_2');
        });
    };

    if (document.getElementById('route_workshop_3') != null) {
        document.getElementById('route_workshop_3').addEventListener("click", function (event) {
            Handle_check_route('workshop_3');
        });
    };

    if (document.getElementById('route_workshop_4') != null) {
        document.getElementById('route_workshop_4').addEventListener("click", function (event) {
            Handle_check_route('workshop_4');
        });
    };

    if (document.getElementById('route_workshop_5') != null) {
        document.getElementById('route_workshop_5').addEventListener("click", function (event) {
            Handle_check_route('workshop_5');
        });
    };

    if (document.getElementById('route_workshop_6') != null) {
        document.getElementById('route_workshop_6').addEventListener("click", function (event) {
            Handle_check_route('workshop_6');
        });
    };

    if (document.getElementById('route_partners') != null) {
        document.getElementById('route_partners').addEventListener("click", function (event) {
            Handle_check_route('partners');
        });
    };

    if (document.getElementById('route_partners_1') != null) {
        document.getElementById('route_partners_1').addEventListener("click", function (event) {
            Handle_check_route('partners_1');
        });
    };

    if (document.getElementById('route_partners_2') != null) {
        document.getElementById('route_partners_2').addEventListener("click", function (event) {
            Handle_check_route('partners_2');
        });
    };

    if (document.getElementById('route_partners_3') != null) {
        document.getElementById('route_partners_3').addEventListener("click", function (event) {
            Handle_check_route('partners_3');
        });
    };

    if (document.getElementById('route_partners_4') != null) {
        document.getElementById('route_partners_4').addEventListener("click", function (event) {
            Handle_check_route('partners_4');
        });
    };

    if (document.getElementById('route_partners_5') != null) {
        document.getElementById('route_partners_5').addEventListener("click", function (event) {
            Handle_check_route('partners_5');
        });
    };

    if (document.getElementById('route_partners_6') != null) {
        document.getElementById('route_partners_6').addEventListener("click", function (event) {
            Handle_check_route('partners_6');
        });
    };

    if (document.getElementById('route_about') != null) {
        document.getElementById('route_about').addEventListener("click", function (event) {

            if (state.app.route != 'about') {

                Handle_check_route('about');

                document.getElementById('route_about_icon').classList.remove('circle');
                document.getElementById('route_about_icon').classList.add('gui_close');

                HANDLE_animation_hide();

                state.ui.modal.page.top.display = true;

                setTimeout(function () {
                    state.ui.modal.page.top.transform = false;
                }, 101);

                return;
            }

            if (state.app.route == 'about') {

                Handle_check_route('home');

                document.getElementById('route_about_icon').classList.add('circle');
                document.getElementById('route_about_icon').classList.remove('gui_close');

                Handle_Firebase_Refs_and_Render();

                HANDLE_animation_unhide();

                state.ui.modal.page.top.transform = true;

                setTimeout(function () {
                    state.ui.modal.page.top.display = false;
                }, 101);

                return;
            }
        });
    };

    if (document.getElementById('route_about_1') != null) {
        document.getElementById('route_about_1').addEventListener("click", function (event) {
            Handle_check_route('about_1');
        });
    };

    if (document.getElementById('route_about_2') != null) {
        document.getElementById('route_about_2').addEventListener("click", function (event) {
            Handle_check_route('about_2');
        });
    };

    if (document.getElementById('route_about_3') != null) {
        document.getElementById('route_about_3').addEventListener("click", function (event) {
            Handle_check_route('about_3');
        });
    };

    if (document.getElementById('route_about_4') != null) {
        document.getElementById('route_about_4').addEventListener("click", function (event) {
            Handle_check_route('about_4');
        });
    };

    if (document.getElementById('route_about_5') != null) {
        document.getElementById('route_about_5').addEventListener("click", function (event) {
            Handle_check_route('about_5');
        });
    };

    if (document.getElementById('route_about_6') != null) {
        document.getElementById('route_about_6').addEventListener("click", function (event) {
            Handle_check_route('about_6');
        });
    };

    if (document.getElementById('route_about_all') != null) {
        document.getElementById('route_about_all').addEventListener("click", function (event) {
            Handle_check_route('about_all');
        });
    };

    if (document.getElementById('route_team_all') != null) {
        document.getElementById('route_team_all').addEventListener("click", function (event) {
            Handle_check_route('team_all');
        });
    };

    if (document.getElementById('route_library_all') != null) {
        document.getElementById('route_library_all').addEventListener("click", function (event) {
            Handle_check_route('library_all');
        });
    };

    if (document.getElementById('route_abilities_all') != null) {
        document.getElementById('route_abilities_all').addEventListener("click", function (event) {
            Handle_check_route('abilities_all');
        });
    };

    if (document.getElementById('route_partners_all') != null) {
        document.getElementById('route_partners_all').addEventListener("click", function (event) {
            Handle_check_route('partners_all');
        });
    };

    if (document.getElementById('route_services_all') != null) {
        document.getElementById('route_services_all').addEventListener("click", function (event) {
            Handle_check_route('services_all');
        });
    };

    if (document.getElementById('route_workshop_all') != null) {
        document.getElementById('route_workshop_all').addEventListener("click", function (event) {
            Handle_check_route('workshop_all');
        });
    };

    if (document.getElementById('route_about_cta') != null) {
        document.getElementById('route_about_cta').addEventListener("click", function (event) {
            Handle_check_route('about_cta');
        });
    };

    if (document.getElementById('route_services_cta') != null) {
        document.getElementById('route_services_cta').addEventListener("click", function (event) {
            Handle_check_route('services_cta');
        });
    };

    if (document.getElementById('route_partners_cta') != null) {
        document.getElementById('route_partners_cta').addEventListener("click", function (event) {
            Handle_check_route('partners_cta');
        });
    };

    if (document.getElementById('route_abilities_cta') != null) {
        document.getElementById('route_abilities_cta').addEventListener("click", function (event) {
            Handle_check_route('abilities_cta');
        });
    };

    if (document.getElementById('route_library_cta') != null) {
        document.getElementById('route_library_cta').addEventListener("click", function (event) {
            Handle_check_route('library_cta');
        });
    };

    if (document.getElementById('route_workshop_cta') != null) {
        document.getElementById('route_workshop_cta').addEventListener("click", function (event) {
            Handle_check_route('workshop_cta');
        });
    };

    if (document.getElementById('route_team_cta') != null) {
        document.getElementById('route_team_cta').addEventListener("click", function (event) {
            Handle_check_route('team_cta');
        });
    };

    // Gui Button Actions
    if (document.getElementById('icon_menu') != null) {
        document.getElementById('icon_menu').addEventListener("click", function (event) {

            if (document.getElementById('icon_menu').classList.contains('gui_logo_navs')) {

                // style
                document.getElementById('icon_menu').classList.remove('gui_logo_navs');
                document.getElementById('icon_menu').classList.add('gui_close');

                // navs
                state.ui.modal.nav.top.display = true;
                state.ui.modal.nav.top.transform = true;

                // menu
                state.ui.modal.menu.left.display = true;

                setTimeout(function () {
                    state.ui.modal.menu.left.transform = false;
                }, 101);
            } else {

                // menu closed
                // style
                document.getElementById('icon_menu').classList.remove('gui_close');
                document.getElementById('icon_menu').classList.add('gui_logo_navs');

                // nav
                state.ui.modal.nav.top.display = true;
                state.ui.modal.nav.top.transform = false;

                // menu
                state.ui.modal.menu.left.transform = true;

                setTimeout(function () {
                    state.ui.modal.menu.left.display = false;
                }, 101);
            };
        });
    };

    if (document.getElementById('icon_dots') != null) {
        document.getElementById('icon_dots').addEventListener("click", function (event) {

            if (document.getElementById('icon_dots').classList.contains('gui_dots')) {

                // style
                document.getElementById('icon_dots').classList.remove('gui_dots');
                document.getElementById('icon_dots').classList.add('gui_close');

                // menu
                state.ui.modal.menu.right.display = true;

                setTimeout(function () {
                    state.ui.modal.menu.right.transform = false;
                }, 101);
            } else {

                // menu closed
                // style
                document.getElementById('icon_dots').classList.remove('gui_close');
                document.getElementById('icon_dots').classList.add('gui_dots');

                // menu
                state.ui.modal.menu.right.transform = true;

                setTimeout(function () {
                    state.ui.modal.menu.right.display = false;
                }, 101);
            };
        });
    };

    if (document.getElementById('icon_logo') != null) {
        document.getElementById('icon_logo').addEventListener("click", function (event) {

            HANDLE_animation_null();
            HANDLE_animation_gui_default();
            HANDLE_animation_modals_default();
        });
    };

    if (document.getElementById('icon_back') != null) {
        document.getElementById('icon_back').addEventListener("click", function (event) {

            HANDLE_animation_back_to_key_pressed();
        });
    };

    if (document.getElementById('icon_up') != null) {
        document.getElementById('icon_up').addEventListener("click", function (event) {

            HANDLE_animation_back_to_up();
        });
    };

    if (document.getElementById('icon_search') != null) {
        document.getElementById('icon_search').addEventListener("click", function (event) {

            //document.getElementById('component_app_modal_element_page_left_content').innerHTML = imported_elements.component_app_content_blog();

            state.ui.modal.page.left.display = true;

            setTimeout(function () {
                state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
            }, 101);
        });
    };

    if (document.getElementById('icon_create') != null) {
        document.getElementById('icon_create').addEventListener("click", function (event) {

            //alert('yup again');

            if (state.ui.modal.page.bottom.transform == true) {
                //document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = imported_elements.route_components();
            };

            state.ui.modal.page.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
            }, 101);
        });
    };

    if (document.getElementById('icon_sign_in') != null) {
        document.getElementById('icon_sign_in').addEventListener("click", function (event) {

            state.ui.modal.pop.right.display = true;

            setTimeout(function () {
                state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
            }, 101);

            //Handle_logged();               
        });
    };

    if (document.getElementById('icon_sign_up') != null) {
        document.getElementById('icon_sign_up').addEventListener("click", function (event) {

            //document.getElementById('component_app_modal_element_pop_right_content').innerHTML = imported_elements.element_scroll_y(imported_elements.sign_up_content());

            state.ui.modal.pop.right.display = true;

            setTimeout(function () {
                state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
            }, 101);

            //Handle_logged();
        });
    };

    if (document.getElementById('icon_sign_out') != null) {
        document.getElementById('icon_sign_out').addEventListener("click", function (event) {

            localStorage.user = 'null';

            state.ui.modal.pop.right.display = true;

            setTimeout(function () {
                state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
            }, 101);

            //Handle_logged();
        });
    };

    if (document.getElementById('icon_dashboard') != null) {
        document.getElementById('icon_dashboard').addEventListener("click", function (event) {

            HANDLE_animation_hide();

            state.ui.modal.page.right.display = true;

            setTimeout(function () {
                state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
            }, 101);

            Handle_Firebase_Refs_and_Render();
        });
    };

    if (document.getElementById('icon_location') != null) {
        document.getElementById('icon_location').addEventListener("click", function (event) {

            //document.getElementById('component_app_modal_element_page_top_content').innerHTML = <div id="dashboard_posts"></div>;

            state.ui.modal.page.top.display = true;

            setTimeout(function () {
                state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            }, 101);
        });
    };

    if (document.getElementById('icon_qr') != null) {
        document.getElementById('icon_qr').addEventListener("click", function (event) {

            //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.qr_content());

            state.ui.modal.page.top.display = true;

            setTimeout(function () {
                state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            }, 101);
        });
    };

    if (document.getElementById('icon_hire') != null) {
        document.getElementById('icon_hire').addEventListener("click", function (event) {

            //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.hire_content());

            state.ui.modal.page.top.display = true;

            setTimeout(function () {
                state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            }, 101);
        });
    };

    if (document.getElementById('icon_help') != null) {
        document.getElementById('icon_help').addEventListener("click", function (event) {

            //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.user_content());

            state.ui.modal.page.top.display = true;

            setTimeout(function () {
                state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            }, 101);
        });
    };

    if (document.getElementById('icon_audio') != null) {
        document.getElementById('icon_audio').addEventListener("click", function (event) {

            //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.sign_in_content());

            state.ui.modal.page.top.display = true;

            setTimeout(function () {
                state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            }, 101);
        });
    };

    if (document.getElementById('icon_info') != null) {
        document.getElementById('icon_info').addEventListener("click", function (event) {
            //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.pagination_form_content());

            state.ui.modal.page.top.display = true;

            setTimeout(function () {
                state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            }, 101);
        });
    };

    // dev mode actions
    if (document.getElementById('component_route_roster_page_bottom_temp') != null) {

        document.getElementById('component_route_roster_page_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.display = true;
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });

        document.getElementById('component_route_services_page_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.display = true;
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });

        document.getElementById('component_route_library_page_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.display = true;
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });

        document.getElementById('component_route_partners_page_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.display = true;
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });

        document.getElementById('component_route_abilities_page_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.display = true;
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });
    };

    if (document.getElementById('component_gradient_top_temp') != null) {

        document.getElementById('component_gradient_top_temp').addEventListener("click", function (event) {
            state.ui.modal.gradient.top.display = true;

            setTimeout(function () {
                state.ui.modal.gradient.top.transform = false;
            }, 1000);
        });

        document.getElementById('component_gradient_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.gradient.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.gradient.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_gradient_right_temp').addEventListener("click", function (event) {
            state.ui.modal.gradient.right.display = true;

            setTimeout(function () {
                state.ui.modal.gradient.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_gradient_left_temp').addEventListener("click", function (event) {
            state.ui.modal.gradient.left.display = true;

            setTimeout(function () {
                state.ui.modal.gradient.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_menu_top_temp').addEventListener("click", function (event) {
            state.ui.modal.menu.top.display = true;

            setTimeout(function () {
                state.ui.modal.menu.top.transform = false;
            }, 1000);
        });

        document.getElementById('component_menu_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.menu.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.menu.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_menu_right_temp').addEventListener("click", function (event) {
            state.ui.modal.menu.right.display = true;

            setTimeout(function () {
                state.ui.modal.menu.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_menu_left_temp').addEventListener("click", function (event) {
            state.ui.modal.menu.left.display = true;

            setTimeout(function () {
                state.ui.modal.menu.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_fade_top_temp').addEventListener("click", function (event) {
            state.ui.modal.fade.top.display = true;

            setTimeout(function () {
                state.ui.modal.fade.top.transform = false;
            }, 1000);
        });

        document.getElementById('component_fade_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.fade.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.fade.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_fade_right_temp').addEventListener("click", function (event) {
            state.ui.modal.fade.right.display = true;

            setTimeout(function () {
                state.ui.modal.fade.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_fade_left_temp').addEventListener("click", function (event) {
            state.ui.modal.fade.left.display = true;

            setTimeout(function () {
                state.ui.modal.fade.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_corner_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.corner.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.corner.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_corner_right_temp').addEventListener("click", function (event) {
            state.ui.modal.corner.right.display = true;

            setTimeout(function () {
                state.ui.modal.corner.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_corner_left_temp').addEventListener("click", function (event) {
            state.ui.modal.corner.left.display = true;

            setTimeout(function () {
                state.ui.modal.corner.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_morph_top_temp').addEventListener("click", function (event) {
            state.ui.modal.morph.top.display = true;

            setTimeout(function () {
                state.ui.modal.morph.top.transform = false;
            }, 1000);
        });

        document.getElementById('component_morph_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.morph.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.morph.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_morph_right_temp').addEventListener("click", function (event) {
            state.ui.modal.morph.right.display = true;

            setTimeout(function () {
                state.ui.modal.morph.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_morph_left_temp').addEventListener("click", function (event) {
            state.ui.modal.morph.left.display = true;

            setTimeout(function () {
                state.ui.modal.morph.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_nav_top_temp').addEventListener("click", function (event) {
            state.ui.modal.nav.top.display = true;

            setTimeout(function () {
                state.ui.modal.nav.top.transform = false;
            }, 1000);
        });

        document.getElementById('component_nav_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.nav.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.nav.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_nav_right_temp').addEventListener("click", function (event) {
            state.ui.modal.nav.right.display = true;

            setTimeout(function () {
                state.ui.modal.nav.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_nav_left_temp').addEventListener("click", function (event) {
            state.ui.modal.nav.left.display = true;

            setTimeout(function () {
                state.ui.modal.nav.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_overlay_top_temp').addEventListener("click", function (event) {
            state.ui.modal.overlay.top.display = true;

            setTimeout(function () {
                state.ui.modal.overlay.top.transform = false;
            }, 1000);
        });

        document.getElementById('component_overlay_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.overlay.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.overlay.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_overlay_right_temp').addEventListener("click", function (event) {
            state.ui.modal.overlay.right.display = true;

            setTimeout(function () {
                state.ui.modal.overlay.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_overlay_left_temp').addEventListener("click", function (event) {
            state.ui.modal.overlay.left.display = true;

            setTimeout(function () {
                state.ui.modal.overlay.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_pop_top_temp').addEventListener("click", function (event) {
            state.ui.modal.pop.top.display = true;

            setTimeout(function () {
                state.ui.modal.pop.top.transform = false;
            }, 1000);
        });

        document.getElementById('component_pop_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.pop.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.pop.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_pop_right_temp').addEventListener("click", function (event) {
            state.ui.modal.pop.right.display = true;

            setTimeout(function () {
                state.ui.modal.pop.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_pop_left_temp').addEventListener("click", function (event) {
            state.ui.modal.pop.left.display = true;

            setTimeout(function () {
                state.ui.modal.pop.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_page_top_temp').addEventListener("click", function (event) {
            state.ui.modal.page.top.display = true;

            setTimeout(function () {
                state.ui.modal.page.top.transform = false;
            }, 1000);
        });

        document.getElementById('component_page_bottom_temp').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.display = true;

            setTimeout(function () {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);
        });

        document.getElementById('component_page_right_temp').addEventListener("click", function (event) {
            state.ui.modal.page.right.display = true;

            setTimeout(function () {
                state.ui.modal.page.right.transform = false;
            }, 1000);
        });

        document.getElementById('component_page_left_temp').addEventListener("click", function (event) {
            state.ui.modal.page.left.display = true;

            setTimeout(function () {
                state.ui.modal.page.left.transform = false;
            }, 1000);
        });

        document.getElementById('component_app_gui_top_left').addEventListener("click", function (event) {});

        document.getElementById('component_app_gui_top_right').addEventListener("click", function (event) {});

        document.getElementById('component_app_gui_top_center').addEventListener("click", function (event) {});

        document.getElementById('component_app_gui_left').addEventListener("click", function (event) {
            state.ui.modal.pop.left.display = true;
            state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
        });

        document.getElementById('component_app_gui_right').addEventListener("click", function (event) {
            state.ui.modal.pop.right.display = true;
            state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
        });

        document.getElementById('component_app_gui_bottom_center').addEventListener("click", function (event) {
            state.ui.modal.pop.bottom.display = true;
            state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
        });

        document.getElementById('component_app_gui_bottom_left').addEventListener("click", function (event) {
            state.ui.modal.pop.top.display = true;
            state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
        });

        document.getElementById('component_app_gui_bottom_right').addEventListener("click", function (event) {
            state.ui.modal.pop.top.display = true;
            state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
        });
    };

    if (document.getElementById('component_app_status_display_nav_top') != null) {

        document.getElementById('component_app_status_display_nav_top').addEventListener("click", function (event) {
            state.ui.modal.nav.top.display = !state.ui.modal.nav.top.display;
        });

        document.getElementById('component_app_status_opacity_nav_top').addEventListener("click", function (event) {
            state.ui.modal.nav.top.opacity = !state.ui.modal.nav.top.opacity;
        });

        document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function (event) {
            state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
        });

        // nav - left
        document.getElementById('component_app_status_display_nav_left').addEventListener("click", function (event) {
            state.ui.modal.nav.left.display = !state.ui.modal.nav.left.display;
        });

        document.getElementById('component_app_status_opacity_nav_left').addEventListener("click", function (event) {
            state.ui.modal.nav.left.opacity = !state.ui.modal.nav.left.opacity;
        });

        document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function (event) {
            state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
        });

        // nav - bottom
        document.getElementById('component_app_status_display_nav_bottom').addEventListener("click", function (event) {
            state.ui.modal.nav.bottom.display = !state.ui.modal.nav.bottom.display;
        });

        document.getElementById('component_app_status_opacity_nav_bottom').addEventListener("click", function (event) {
            state.ui.modal.nav.bottom.opacity = !state.ui.modal.nav.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function (event) {
            state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
        });

        // nav - right
        document.getElementById('component_app_status_display_nav_right').addEventListener("click", function (event) {
            state.ui.modal.nav.right.display = !state.ui.modal.nav.right.display;
        });

        document.getElementById('component_app_status_opacity_nav_right').addEventListener("click", function (event) {
            state.ui.modal.nav.right.opacity = !state.ui.modal.nav.right.opacity;
        });

        document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function (event) {
            state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform;
        });

        // pop - top
        document.getElementById('component_app_status_display_pop_top').addEventListener("click", function (event) {
            state.ui.modal.pop.top.display = !state.ui.modal.pop.top.display;
        });

        document.getElementById('component_app_status_opacity_pop_top').addEventListener("click", function (event) {
            state.ui.modal.pop.top.opacity = !state.ui.modal.pop.top.opacity;
        });

        document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function (event) {
            state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
        });

        // pop - left
        document.getElementById('component_app_status_display_pop_left').addEventListener("click", function (event) {
            state.ui.modal.pop.left.display = !state.ui.modal.pop.left.display;
        });

        document.getElementById('component_app_status_opacity_pop_left').addEventListener("click", function (event) {
            state.ui.modal.pop.left.opacity = !state.ui.modal.pop.left.opacity;
        });

        document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function (event) {
            state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
        });

        // pop - bottom
        document.getElementById('component_app_status_display_pop_bottom').addEventListener("click", function (event) {
            state.ui.modal.pop.bottom.display = !state.ui.modal.pop.bottom.display;
        });

        document.getElementById('component_app_status_opacity_pop_bottom').addEventListener("click", function (event) {
            state.ui.modal.pop.bottom.opacity = !state.ui.modal.pop.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function (event) {
            state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
        });

        // pop - right
        document.getElementById('component_app_status_display_pop_right').addEventListener("click", function (event) {
            state.ui.modal.pop.right.display = !state.ui.modal.pop.right.display;
        });

        document.getElementById('component_app_status_opacity_pop_right').addEventListener("click", function (event) {
            state.ui.modal.pop.right.opacity = !state.ui.modal.pop.right.opacity;
        });

        document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function (event) {
            state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
        });

        // pip - top
        document.getElementById('component_app_status_display_pip_top').addEventListener("click", function (event) {
            state.ui.modal.pip.top.display = !state.ui.modal.pip.top.display;
        });

        document.getElementById('component_app_status_opacity_pip_top').addEventListener("click", function (event) {
            state.ui.modal.pip.top.opacity = !state.ui.modal.pip.top.opacity;
        });

        document.getElementById('component_app_status_transform_pip_top').addEventListener("click", function (event) {
            state.ui.modal.pip.top.transform = !state.ui.modal.pip.top.transform;
        });

        // pip - left
        document.getElementById('component_app_status_display_pip_left').addEventListener("click", function (event) {
            state.ui.modal.pip.left.display = !state.ui.modal.pip.left.display;
        });

        document.getElementById('component_app_status_opacity_pip_left').addEventListener("click", function (event) {
            state.ui.modal.pip.left.opacity = !state.ui.modal.pip.left.opacity;
        });

        document.getElementById('component_app_status_transform_pip_left').addEventListener("click", function (event) {
            state.ui.modal.pip.left.transform = !state.ui.modal.pip.left.transform;
        });

        // pip - bottom
        document.getElementById('component_app_status_display_pip_bottom').addEventListener("click", function (event) {
            state.ui.modal.pip.bottom.display = !state.ui.modal.pip.bottom.display;
        });

        document.getElementById('component_app_status_opacity_pip_bottom').addEventListener("click", function (event) {
            state.ui.modal.pip.bottom.opacity = !state.ui.modal.pip.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_pip_bottom').addEventListener("click", function (event) {
            state.ui.modal.pip.bottom.transform = !state.ui.modal.pip.bottom.transform;
        });

        // pip - right
        document.getElementById('component_app_status_display_pip_right').addEventListener("click", function (event) {
            state.ui.modal.pip.right.display = !state.ui.modal.pip.right.display;
        });

        document.getElementById('component_app_status_opacity_pip_right').addEventListener("click", function (event) {
            state.ui.modal.pip.right.opacity = !state.ui.modal.pip.right.opacity;
        });

        document.getElementById('component_app_status_transform_pip_right').addEventListener("click", function (event) {
            state.ui.modal.pip.right.transform = !state.ui.modal.pip.right.transform;
        });

        // page - top
        document.getElementById('component_app_status_display_page_top').addEventListener("click", function (event) {
            state.ui.modal.page.top.display = !state.ui.modal.page.top.display;
        });

        document.getElementById('component_app_status_opacity_page_top').addEventListener("click", function (event) {
            state.ui.modal.page.top.opacity = !state.ui.modal.page.top.opacity;
        });

        document.getElementById('component_app_status_transform_page_top').addEventListener("click", function (event) {
            state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
        });

        // page - left
        document.getElementById('component_app_status_display_page_left').addEventListener("click", function (event) {
            state.ui.modal.page.left.display = !state.ui.modal.page.left.display;
        });

        document.getElementById('component_app_status_opacity_page_left').addEventListener("click", function (event) {
            state.ui.modal.page.left.opacity = !state.ui.modal.page.left.opacity;
        });

        document.getElementById('component_app_status_transform_page_left').addEventListener("click", function (event) {
            state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
        });

        // page - bottom
        document.getElementById('component_app_status_display_page_bottom').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.display = !state.ui.modal.page.bottom.display;
        });

        document.getElementById('component_app_status_opacity_page_bottom').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.opacity = !state.ui.modal.page.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function (event) {
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });

        // page - right
        document.getElementById('component_app_status_display_page_right').addEventListener("click", function (event) {
            state.ui.modal.page.right.display = !state.ui.modal.page.right.display;
        });

        document.getElementById('component_app_status_opacity_page_right').addEventListener("click", function (event) {
            state.ui.modal.page.right.opacity = !state.ui.modal.page.right.opacity;
        });

        document.getElementById('component_app_status_transform_page_right').addEventListener("click", function (event) {
            state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
        });

        // morph - top
        document.getElementById('component_app_status_display_morph_top').addEventListener("click", function (event) {
            state.ui.modal.morph.top.display = !state.ui.modal.morph.top.display;
        });

        document.getElementById('component_app_status_opacity_morph_top').addEventListener("click", function (event) {
            state.ui.modal.morph.top.opacity = !state.ui.modal.morph.top.opacity;
        });

        document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function (event) {
            state.ui.modal.morph.top.transform = !state.ui.modal.morph.top.transform;
        });

        // morph - left
        document.getElementById('component_app_status_display_morph_left').addEventListener("click", function (event) {
            state.ui.modal.morph.left.display = !state.ui.modal.morph.left.display;
        });

        document.getElementById('component_app_status_opacity_morph_left').addEventListener("click", function (event) {
            state.ui.modal.morph.left.opacity = !state.ui.modal.morph.left.opacity;
        });

        document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function (event) {
            state.ui.modal.morph.left.transform = !state.ui.modal.morph.left.transform;
        });

        // morph - bottom
        document.getElementById('component_app_status_display_morph_bottom').addEventListener("click", function (event) {
            state.ui.modal.morph.bottom.display = !state.ui.modal.morph.bottom.display;
        });

        document.getElementById('component_app_status_opacity_morph_bottom').addEventListener("click", function (event) {
            state.ui.modal.morph.bottom.opacity = !state.ui.modal.morph.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function (event) {
            state.ui.modal.morph.bottom.transform = !state.ui.modal.morph.bottom.transform;
        });

        // morph - right
        document.getElementById('component_app_status_display_morph_right').addEventListener("click", function (event) {
            state.ui.modal.morph.right.display = !state.ui.modal.morph.right.display;
        });

        document.getElementById('component_app_status_opacity_morph_right').addEventListener("click", function (event) {
            state.ui.modal.morph.right.opacity = !state.ui.modal.morph.right.opacity;
        });

        document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function (event) {
            state.ui.modal.morph.right.transform = !state.ui.modal.morph.right.transform;
        });

        // corner - top
        document.getElementById('component_app_status_display_corner_top').addEventListener("click", function (event) {
            state.ui.modal.corner.top.display = !state.ui.modal.corner.top.display;
        });

        document.getElementById('component_app_status_opacity_corner_top').addEventListener("click", function (event) {
            state.ui.modal.corner.top.opacity = !state.ui.modal.corner.top.opacity;
        });

        document.getElementById('component_app_status_transform_corner_top').addEventListener("click", function (event) {
            state.ui.modal.corner.top.transform = !state.ui.modal.corner.top.transform;
        });

        // corner - left
        document.getElementById('component_app_status_display_corner_left').addEventListener("click", function (event) {
            state.ui.modal.corner.left.display = !state.ui.modal.corner.left.display;
        });

        document.getElementById('component_app_status_opacity_corner_left').addEventListener("click", function (event) {
            state.ui.modal.corner.left.opacity = !state.ui.modal.corner.left.opacity;
        });

        document.getElementById('component_app_status_transform_corner_left').addEventListener("click", function (event) {
            state.ui.modal.corner.left.transform = !state.ui.modal.corner.left.transform;
        });

        // corner - bottom
        document.getElementById('component_app_status_display_corner_bottom').addEventListener("click", function (event) {
            state.ui.modal.corner.bottom.display = !state.ui.modal.corner.bottom.display;
        });

        document.getElementById('component_app_status_opacity_corner_bottom').addEventListener("click", function (event) {
            state.ui.modal.corner.bottom.opacity = !state.ui.modal.corner.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_corner_bottom').addEventListener("click", function (event) {
            state.ui.modal.corner.bottom.transform = !state.ui.modal.corner.bottom.transform;
        });

        // corner - right
        document.getElementById('component_app_status_display_corner_right').addEventListener("click", function (event) {
            state.ui.modal.corner.right.display = !state.ui.modal.corner.right.display;
        });

        document.getElementById('component_app_status_opacity_corner_right').addEventListener("click", function (event) {
            state.ui.modal.corner.right.opacity = !state.ui.modal.corner.right.opacity;
        });

        document.getElementById('component_app_status_transform_corner_right').addEventListener("click", function (event) {
            state.ui.modal.corner.right.transform = !state.ui.modal.corner.right.transform;
        });

        // fade - top
        document.getElementById('component_app_status_display_fade_top').addEventListener("click", function (event) {
            state.ui.modal.fade.top.display = !state.ui.modal.fade.top.display;
        });

        document.getElementById('component_app_status_opacity_fade_top').addEventListener("click", function (event) {
            state.ui.modal.fade.top.opacity = !state.ui.modal.fade.top.opacity;
        });

        document.getElementById('component_app_status_transform_fade_top').addEventListener("click", function (event) {
            state.ui.modal.fade.top.transform = !state.ui.modal.fade.top.transform;
            alert('component_app_status_transform_fade_top:' + state.ui.modal.fade.top.transform);
        });

        // fade - left
        document.getElementById('component_app_status_display_fade_left').addEventListener("click", function (event) {
            state.ui.modal.fade.left.display = !state.ui.modal.fade.left.display;
        });

        document.getElementById('component_app_status_opacity_fade_left').addEventListener("click", function (event) {
            state.ui.modal.fade.left.opacity = !state.ui.modal.fade.left.opacity;
        });

        document.getElementById('component_app_status_transform_fade_left').addEventListener("click", function (event) {
            state.ui.modal.fade.left.transform = !state.ui.modal.fade.left.transform;
        });

        // fade - bottom
        document.getElementById('component_app_status_display_fade_bottom').addEventListener("click", function (event) {
            state.ui.modal.fade.bottom.display = !state.ui.modal.fade.bottom.display;
        });

        document.getElementById('component_app_status_opacity_fade_bottom').addEventListener("click", function (event) {
            state.ui.modal.fade.bottom.opacity = !state.ui.modal.fade.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_fade_bottom').addEventListener("click", function (event) {
            state.ui.modal.fade.bottom.transform = !state.ui.modal.fade.bottom.transform;
        });

        // fade - right
        document.getElementById('component_app_status_display_fade_right').addEventListener("click", function (event) {
            state.ui.modal.fade.right.display = !state.ui.modal.fade.right.display;
        });

        document.getElementById('component_app_status_opacity_fade_right').addEventListener("click", function (event) {
            state.ui.modal.fade.right.opacity = !state.ui.modal.fade.right.opacity;
        });

        document.getElementById('component_app_status_transform_fade_right').addEventListener("click", function (event) {
            state.ui.modal.fade.right.transform = !state.ui.modal.fade.right.transform;
        });

        // gradient - top
        document.getElementById('component_app_status_display_gradient_top').addEventListener("click", function (event) {
            state.ui.modal.gradient.top.display = !state.ui.modal.gradient.top.display;
        });

        document.getElementById('component_app_status_opacity_gradient_top').addEventListener("click", function (event) {
            state.ui.modal.gradient.top.opacity = !state.ui.modal.gradient.top.opacity;
        });

        document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function (event) {
            state.ui.modal.gradient.top.transform = !state.ui.modal.gradient.top.transform;
        });

        // gradient - left
        document.getElementById('component_app_status_display_gradient_left').addEventListener("click", function (event) {
            state.ui.modal.gradient.left.display = !state.ui.modal.gradient.left.display;
        });

        document.getElementById('component_app_status_opacity_gradient_left').addEventListener("click", function (event) {
            state.ui.modal.gradient.left.opacity = !state.ui.modal.gradient.left.opacity;
        });

        document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function (event) {
            state.ui.modal.gradient.left.transform = !state.ui.modal.gradient.left.transform;
        });

        // gradient - bottom
        document.getElementById('component_app_status_display_gradient_bottom').addEventListener("click", function (event) {
            state.ui.modal.gradient.bottom.display = !state.ui.modal.gradient.bottom.display;
        });

        document.getElementById('component_app_status_opacity_gradient_bottom').addEventListener("click", function (event) {
            state.ui.modal.gradient.bottom.opacity = !state.ui.modal.gradient.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function (event) {
            state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
        });

        // gradient - right
        document.getElementById('component_app_status_display_gradient_right').addEventListener("click", function (event) {
            state.ui.modal.gradient.right.display = !state.ui.modal.gradient.right.display;
        });

        document.getElementById('component_app_status_opacity_gradient_right').addEventListener("click", function (event) {
            state.ui.modal.gradient.right.opacity = !state.ui.modal.gradient.right.opacity;
        });

        document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function (event) {
            state.ui.modal.gradient.right.transform = !state.ui.modal.gradient.right.transform;
        });

        // menu - top
        document.getElementById('component_app_status_display_menu_top').addEventListener("click", function (event) {
            state.ui.modal.menu.top.display = !state.ui.modal.menu.top.display;
        });

        document.getElementById('component_app_status_opacity_menu_top').addEventListener("click", function (event) {
            state.ui.modal.menu.top.opacity = !state.ui.modal.menu.top.opacity;
        });

        document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function (event) {
            state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;
        });

        // menu - left
        document.getElementById('component_app_status_display_menu_left').addEventListener("click", function (event) {
            state.ui.modal.menu.left.display = !state.ui.modal.menu.left.display;
        });

        document.getElementById('component_app_status_opacity_menu_left').addEventListener("click", function (event) {
            state.ui.modal.menu.left.opacity = !state.ui.modal.menu.left.opacity;
        });

        document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function (event) {
            state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
        });

        // menu - bottom
        document.getElementById('component_app_status_display_menu_bottom').addEventListener("click", function (event) {
            state.ui.modal.menu.bottom.display = !state.ui.modal.menu.bottom.display;
        });

        document.getElementById('component_app_status_opacity_menu_bottom').addEventListener("click", function (event) {
            state.ui.modal.menu.bottom.opacity = !state.ui.modal.menu.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function (event) {
            state.ui.modal.menu.bottom.transform = !state.ui.modal.menu.bottom.transform;
        });

        // menu - right
        document.getElementById('component_app_status_display_menu_right').addEventListener("click", function (event) {
            state.ui.modal.menu.right.display = !state.ui.modal.menu.right.display;
        });

        document.getElementById('component_app_status_opacity_menu_right').addEventListener("click", function (event) {
            state.ui.modal.menu.right.opacity = !state.ui.modal.menu.right.opacity;
        });

        document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function (event) {
            state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
        });

        // overlay - top
        document.getElementById('component_app_status_display_overlay_top').addEventListener("click", function (event) {
            state.ui.modal.overlay.top.display = !state.ui.modal.overlay.top.display;
        });

        document.getElementById('component_app_status_opacity_overlay_top').addEventListener("click", function (event) {
            state.ui.modal.overlay.top.opacity = !state.ui.modal.overlay.top.opacity;
        });

        document.getElementById('component_app_status_transform_overlay_top').addEventListener("click", function (event) {
            state.ui.modal.overlay.top.transform = !state.ui.modal.overlay.top.transform;
        });

        // overlay - left
        document.getElementById('component_app_status_display_overlay_left').addEventListener("click", function (event) {
            state.ui.modal.overlay.left.display = !state.ui.modal.overlay.left.display;
        });

        document.getElementById('component_app_status_opacity_overlay_left').addEventListener("click", function (event) {
            state.ui.modal.overlay.left.opacity = !state.ui.modal.overlay.left.opacity;
        });

        document.getElementById('component_app_status_transform_overlay_left').addEventListener("click", function (event) {
            state.ui.modal.overlay.left.transform = !state.ui.modal.overlay.left.transform;
        });

        // overlay - bottom
        document.getElementById('component_app_status_display_overlay_bottom').addEventListener("click", function (event) {
            state.ui.modal.overlay.bottom.display = !state.ui.modal.overlay.bottom.display;
        });

        document.getElementById('component_app_status_opacity_overlay_bottom').addEventListener("click", function (event) {
            state.ui.modal.overlay.bottom.opacity = !state.ui.modal.overlay.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_overlay_bottom').addEventListener("click", function (event) {
            state.ui.modal.overlay.bottom.transform = !state.ui.modal.overlay.bottom.transform;
        });

        // overlay - right
        document.getElementById('component_app_status_display_overlay_right').addEventListener("click", function (event) {
            state.ui.modal.overlay.right.display = !state.ui.modal.overlay.right.display;
        });

        document.getElementById('component_app_status_opacity_overlay_right').addEventListener("click", function (event) {
            state.ui.modal.overlay.right.opacity = !state.ui.modal.overlay.right.opacity;
        });

        document.getElementById('component_app_status_transform_overlay_right').addEventListener("click", function (event) {
            state.ui.modal.overlay.right.transform = !state.ui.modal.overlay.right.transform;
        });
    };
};

var Handle_display_with_delay = function Handle_display_with_delay() {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if (document.getElementById(components[i].component) != null) {
            _functions2.default.Toggle_functions_IF_State(_functions2.default.Toggle_display_and_opacity_on_with_no_delay, _functions2.default.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
        };
    };
};

var Handle_transform = function Handle_transform() {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if (document.getElementById(components[i].component) != null) {
            _functions2.default.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
        };
    };
};

var Handle_opacity = function Handle_opacity() {

    for (var i = 0; i < components.length; i++) {

        // colors
        if (document.getElementById(components[i].component) != null) {
            _functions2.default.Toggle_classes_IF_State('opacity_0', 'opacity_1', components[i].component, components[i].component_state_opacity);
        };
    };
};

var Handle_init = function Handle_init() {
    //console.log('Handle_init');
};

var HANDLE_animation_resize = function HANDLE_animation_resize() {

    if (document.getElementById('component_app_animation').classList.contains('calc_25vh')) {

        document.getElementById('component_app_animation').classList.remove('calc_25vh');
        document.getElementById('component_app_animation').classList.remove('border_radius_1vh');
        document.getElementById('component_app_animation').classList.remove('box_shadow_bottom_left_1vh_dark');
        document.getElementById('component_app_animation').classList.remove('border_01vh_dark_yellow_9');
        document.getElementById('component_app_animation').classList.add('width_100');
        document.getElementById('component_app_animation').classList.add('height_100');
        return;
    };

    if (document.getElementById('component_app_animation').classList.contains('width_100')) {

        document.getElementById('component_app_animation').classList.add('calc_25vh');
        document.getElementById('component_app_animation').classList.add('border_radius_1vh');
        document.getElementById('component_app_animation').classList.add('box_shadow_bottom_left_1vh_dark');
        document.getElementById('component_app_animation').classList.add('border_01vh_dark_yellow_9');
        document.getElementById('component_app_animation').classList.remove('width_100');
        document.getElementById('component_app_animation').classList.remove('height_100');
        return;
    };
};

var HANDLE_animation_gui_default = function HANDLE_animation_gui_default() {

    // modals
    state.ui.gui.top_left.display = true;
    state.ui.gui.top.display = false;
    state.ui.gui.top_right.display = false;
    state.ui.gui.bottom_left.display = false;
    state.ui.gui.bottom.display = false;
    state.ui.gui.bottom_right.display = false;
    state.ui.gui.right.display = false;
    state.ui.gui.left.display = false;

    // modals
    setTimeout(function () {
        state.ui.gui.top_left.tranform = false;
        state.ui.gui.top.tranform = true;
        state.ui.gui.top_right.tranform = true;
        state.ui.gui.bottom_left.tranform = true;
        state.ui.gui.bottom.tranform = true;
        state.ui.gui.bottom_right.tranform = true;
        state.ui.gui.right.tranform = true;
        state.ui.gui.left.tranform = true;
    }, 101);
};

var HANDLE_animation_gui_cursor_moved = function HANDLE_animation_gui_cursor_moved() {

    // modals
    state.ui.gui.top_left.display = true;
    state.ui.gui.top.display = false;
    state.ui.gui.top_right.display = true;
    state.ui.gui.bottom_left.display = false;
    state.ui.gui.bottom.display = false;
    state.ui.gui.bottom_right.display = false;
    state.ui.gui.right.display = false;
    state.ui.gui.left.display = false;

    // modals
    setTimeout(function () {
        state.ui.gui.top_left.tranform = false;
        state.ui.gui.top.tranform = true;
        state.ui.gui.top_right.tranform = false;
        state.ui.gui.bottom_left.tranform = true;
        state.ui.gui.bottom.tranform = true;
        state.ui.gui.bottom_right.tranform = true;
        state.ui.gui.right.tranform = true;
        state.ui.gui.left.tranform = true;
    }, 101);
};

var HANDLE_animation_gui_key_pressed = function HANDLE_animation_gui_key_pressed() {

    // modals
    state.ui.gui.top_left.display = true;
    state.ui.gui.top.display = false;
    state.ui.gui.top_right.display = true;
    state.ui.gui.bottom_left.display = true;
    state.ui.gui.bottom.display = false;
    state.ui.gui.bottom_right.display = true;
    state.ui.gui.right.display = false;
    state.ui.gui.left.display = false;

    // modals
    setTimeout(function () {
        state.ui.gui.top_left.tranform = false;
        state.ui.gui.top.tranform = true;
        state.ui.gui.top_right.tranform = false;
        state.ui.gui.bottom_left.tranform = false;
        state.ui.gui.bottom.tranform = true;
        state.ui.gui.bottom_right.tranform = false;
        state.ui.gui.right.tranform = true;
        state.ui.gui.left.tranform = true;
    }, 101);
};

var HANDLE_animation_gui_start = function HANDLE_animation_gui_start() {

    // modals
    state.ui.gui.top_left.display = true;

    state.ui.gui.top.display = false;
    state.ui.gui.top_right.display = true;
    state.ui.gui.bottom_left.display = true;
    state.ui.gui.bottom.display = false;
    state.ui.gui.bottom_right.display = true;
    state.ui.gui.right.display = false;
    state.ui.gui.left.display = false;

    // modals
    setTimeout(function () {
        state.ui.gui.top_left.tranform = false;

        state.ui.gui.top.tranform = true;
        state.ui.gui.top_right.tranform = false;
        state.ui.gui.bottom_left.tranform = false;
        state.ui.gui.bottom.tranform = true;
        state.ui.gui.bottom_right.tranform = false;
        state.ui.gui.right.tranform = true;
        state.ui.gui.left.tranform = true;
    }, 101);
};

var HANDLE_animation_gui_learn = function HANDLE_animation_gui_learn() {

    // modals
    state.ui.gui.top_left.display = false;

    state.ui.gui.top.display = true;
    state.ui.gui.top_right.display = false;
    state.ui.gui.bottom_left.display = false;
    state.ui.gui.bottom.display = true;
    state.ui.gui.bottom_right.display = false;
    state.ui.gui.right.display = true;
    state.ui.gui.left.display = true;

    // modals
    setTimeout(function () {
        state.ui.gui.top_left.tranform = true;

        state.ui.gui.top.tranform = false;
        state.ui.gui.top_right.tranform = true;
        state.ui.gui.bottom_left.tranform = true;
        state.ui.gui.bottom.tranform = false;
        state.ui.gui.bottom_right.tranform = true;
        state.ui.gui.right.tranform = false;
        state.ui.gui.left.tranform = false;
    }, 101);
};

var HANDLE_animation_modals_default = function HANDLE_animation_modals_default() {

    state.ui.modal.nav.left.transform = true;
    state.ui.modal.nav.right.transform = true;
    state.ui.modal.nav.top.transform = true;
    state.ui.modal.nav.bottom.transform = true;

    state.ui.modal.page.left.transform = true;
    state.ui.modal.page.right.transform = true;
    state.ui.modal.page.top.transform = true;
    state.ui.modal.page.bottom.transform = true;

    state.ui.modal.pop.left.transform = true;
    state.ui.modal.pop.right.transform = true;
    state.ui.modal.pop.top.transform = true;
    state.ui.modal.pop.bottom.transform = true;

    state.ui.modal.pip.left.transform = true;
    state.ui.modal.pip.right.transform = true;
    state.ui.modal.pip.top.transform = true;
    state.ui.modal.pip.bottom.transform = true;

    state.ui.modal.morph.left.transform = true;
    state.ui.modal.morph.right.transform = true;
    state.ui.modal.morph.top.transform = true;
    state.ui.modal.morph.bottom.transform = true;

    state.ui.modal.corner.left.transform = true;
    state.ui.modal.corner.right.transform = true;
    state.ui.modal.corner.top.transform = true;
    state.ui.modal.corner.bottom.transform = true;

    state.ui.modal.fade.left.transform = true;
    state.ui.modal.fade.right.transform = true;
    state.ui.modal.fade.top.transform = true;
    state.ui.modal.fade.bottom.transform = true;

    state.ui.modal.gradient.left.transform = true;
    state.ui.modal.gradient.right.transform = true;
    state.ui.modal.gradient.top.transform = true;
    state.ui.modal.gradient.bottom.transform = true;

    state.ui.modal.overlay.left.transform = true;
    state.ui.modal.overlay.right.transform = true;
    state.ui.modal.overlay.top.transform = true;
    state.ui.modal.overlay.bottom.transform = true;

    setTimeout(function () {

        state.ui.modal.nav.left.display = false;
        state.ui.modal.nav.right.display = false;
        state.ui.modal.nav.top.display = false;
        state.ui.modal.nav.bottom.display = false;

        state.ui.modal.page.left.display = false;
        state.ui.modal.page.right.display = false;
        state.ui.modal.page.top.display = false;
        state.ui.modal.page.bottom.display = false;

        state.ui.modal.pop.left.display = false;
        state.ui.modal.pop.right.display = false;
        state.ui.modal.pop.top.display = false;
        state.ui.modal.pop.bottom.display = false;

        state.ui.modal.pip.left.display = false;
        state.ui.modal.pip.right.display = false;
        state.ui.modal.pip.top.display = false;
        state.ui.modal.pip.bottom.display = false;

        state.ui.modal.morph.left.display = false;
        state.ui.modal.morph.right.display = false;
        state.ui.modal.morph.top.display = false;
        state.ui.modal.morph.bottom.display = false;

        state.ui.modal.corner.left.display = false;
        state.ui.modal.corner.right.display = false;
        state.ui.modal.corner.top.display = false;
        state.ui.modal.corner.bottom.display = false;

        state.ui.modal.fade.left.display = false;
        state.ui.modal.fade.right.display = false;
        state.ui.modal.fade.top.display = false;
        state.ui.modal.fade.bottom.display = false;

        state.ui.modal.gradient.left.display = false;
        state.ui.modal.gradient.right.display = false;
        state.ui.modal.gradient.top.display = false;
        state.ui.modal.gradient.bottom.display = false;

        state.ui.modal.overlay.left.display = false;
        state.ui.modal.overlay.right.display = false;
        state.ui.modal.overlay.top.display = false;
        state.ui.modal.overlay.bottom.display = false;
    }, 101);
};

var HANDLE_animation_modals_hide = function HANDLE_animation_modals_hide() {

    state.ui.modal.nav.left.transform = true;
    state.ui.modal.nav.right.transform = true;
    state.ui.modal.nav.top.transform = true;
    state.ui.modal.nav.bottom.transform = true;

    state.ui.modal.page.left.transform = true;
    state.ui.modal.page.right.transform = true;
    state.ui.modal.page.top.transform = true;
    state.ui.modal.page.bottom.transform = true;

    state.ui.modal.pop.left.transform = true;
    state.ui.modal.pop.right.transform = true;
    state.ui.modal.pop.top.transform = true;
    state.ui.modal.pop.bottom.transform = true;

    state.ui.modal.pip.left.transform = true;
    state.ui.modal.pip.right.transform = true;
    state.ui.modal.pip.top.transform = true;
    state.ui.modal.pip.bottom.transform = true;

    state.ui.modal.morph.left.transform = true;
    state.ui.modal.morph.right.transform = true;
    state.ui.modal.morph.top.transform = true;
    state.ui.modal.morph.bottom.transform = true;

    state.ui.modal.corner.left.transform = true;
    state.ui.modal.corner.right.transform = true;
    state.ui.modal.corner.top.transform = true;
    state.ui.modal.corner.bottom.transform = true;

    state.ui.modal.fade.left.transform = true;
    state.ui.modal.fade.right.transform = true;
    state.ui.modal.fade.top.transform = true;
    state.ui.modal.fade.bottom.transform = true;

    state.ui.modal.gradient.left.transform = true;
    state.ui.modal.gradient.right.transform = true;
    state.ui.modal.gradient.top.transform = true;
    state.ui.modal.gradient.bottom.transform = true;

    state.ui.modal.overlay.left.transform = true;
    state.ui.modal.overlay.right.transform = true;
    state.ui.modal.overlay.top.transform = true;
    state.ui.modal.overlay.bottom.transform = true;

    state.ui.modal.menu.left.transform = true;
    state.ui.modal.menu.right.transform = true;
    state.ui.modal.menu.top.transform = true;
    state.ui.modal.menu.bottom.transform = true;

    state.ui.modal.nav.left.display = false;
    state.ui.modal.nav.right.display = false;
    state.ui.modal.nav.top.display = false;
    state.ui.modal.nav.bottom.display = false;

    state.ui.modal.page.left.display = false;
    state.ui.modal.page.right.display = false;
    state.ui.modal.page.top.display = false;
    state.ui.modal.page.bottom.display = false;

    state.ui.modal.pop.left.display = false;
    state.ui.modal.pop.right.display = false;
    state.ui.modal.pop.top.display = false;
    state.ui.modal.pop.bottom.display = false;

    state.ui.modal.pip.left.display = false;
    state.ui.modal.pip.right.display = false;
    state.ui.modal.pip.top.display = false;
    state.ui.modal.pip.bottom.display = false;

    state.ui.modal.morph.left.display = false;
    state.ui.modal.morph.right.display = false;
    state.ui.modal.morph.top.display = false;
    state.ui.modal.morph.bottom.display = false;

    state.ui.modal.corner.left.display = false;
    state.ui.modal.corner.right.display = false;
    state.ui.modal.corner.top.display = false;
    state.ui.modal.corner.bottom.display = false;

    state.ui.modal.fade.left.display = false;
    state.ui.modal.fade.right.display = false;
    state.ui.modal.fade.top.display = false;
    state.ui.modal.fade.bottom.display = false;

    state.ui.modal.gradient.left.display = false;
    state.ui.modal.gradient.right.display = false;
    state.ui.modal.gradient.top.display = false;
    state.ui.modal.gradient.bottom.display = false;

    state.ui.modal.overlay.left.display = false;
    state.ui.modal.overlay.right.display = false;
    state.ui.modal.overlay.top.display = false;
    state.ui.modal.overlay.bottom.display = false;

    state.ui.modal.menu.left.display = false;
    state.ui.modal.menu.right.display = false;
    state.ui.modal.menu.top.display = false;
    state.ui.modal.menu.bottom.display = false;
};

var HANDLE_animation_gui_hide = function HANDLE_animation_gui_hide() {

    // modals
    state.ui.gui.top_left.display = false;
    state.ui.gui.top.display = false;
    state.ui.gui.top_right.display = false;
    state.ui.gui.bottom_left.display = false;
    state.ui.gui.bottom.display = false;
    state.ui.gui.bottom_right.display = false;
    state.ui.gui.right.display = false;
    state.ui.gui.left.display = false;
};

var HANDLE_animation_gui_show = function HANDLE_animation_gui_show() {

    // modals
    state.ui.gui.top_left.display = true;
    state.ui.gui.top.display = true;
    state.ui.gui.top_right.display = true;
    state.ui.gui.bottom_left.display = true;
    state.ui.gui.bottom.display = true;
    state.ui.gui.bottom_right.display = true;
    state.ui.gui.right.display = true;
    state.ui.gui.left.display = true;
};

var HANDLE_animation_gui_tranform = function HANDLE_animation_gui_tranform() {

    // modals
    state.ui.gui.top_left.tranform = true;
    state.ui.gui.top.tranform = true;
    state.ui.gui.top_right.tranform = true;
    state.ui.gui.bottom_left.tranform = true;
    state.ui.gui.bottom.tranform = true;
    state.ui.gui.bottom_right.tranform = true;
    state.ui.gui.right.tranform = true;
    state.ui.gui.left.tranform = true;
};

var HANDLE_animation_gui_untranform = function HANDLE_animation_gui_untranform() {

    // modals
    state.ui.gui.top_left.tranform = false;
    state.ui.gui.top.tranform = false;
    state.ui.gui.top_right.tranform = false;
    state.ui.gui.bottom_left.tranform = false;
    state.ui.gui.bottom.tranform = false;
    state.ui.gui.bottom_right.tranform = false;
    state.ui.gui.right.tranform = false;
    state.ui.gui.left.tranform = false;
};

var HANDLE_animation_null = function HANDLE_animation_null() {

    // setting
    state.animation.instances.office1_6 = 0;

    //interaction
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;

    state.animation.instances.key_pressed = false;
    state.animation.instances.cursor_moved = false;
    state.animation.instances.scrolled = false;

    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;

    state.ui.root.isWheeling = false;

    document.getElementById('component_app_scrolling').scrollTop = 0;
    document.getElementById('component_app_scrolling').classList.add('overflow_hidden');
    document.getElementById('component_app_scrolling').classList.remove('overflow_y');
};

var HANDLE_animation_loading = function HANDLE_animation_loading() {

    state.animation.instances.loading = true;
    state.animation.instances.loaded = false;

    state.ui.interaction.player_1.height = 4;
    state.ui.interaction.player_1.width = 2;
    state.ui.interaction.player_1.yaxis = 0;
    state.ui.interaction.player_1.xaxis = -4;
};

var HANDLE_animation_paint_drop_hand = function HANDLE_animation_paint_drop_hand() {

    (function () {
        var loop = false;
        var current_frame = 1;

        var start_animation = setInterval(function () {

            var MANIPULATED = document.getElementById('paint_animation_paint_can_hand_svg');

            if (MANIPULATED != null) {
                MANIPULATED.innerHTML = '';
                if (current_frame == 1) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_1';
                };
                if (current_frame == 2) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_2';
                };
                if (current_frame == 3) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_3';
                };
                if (current_frame == 4) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_4';
                };
                if (current_frame == 5) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_5';
                };
                if (current_frame == 6) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_6';
                };
                if (current_frame == 7) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_7';
                };
                if (current_frame == 8) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_8';
                };
                if (current_frame == 9) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_9';
                };
                if (current_frame == 10) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_10';
                };
                if (current_frame == 11) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_11';
                };
                if (current_frame == 12) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_12';
                };
                if (current_frame == 13) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_24';
                };
                if (current_frame == 14) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_23';
                };
                if (current_frame == 15) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_22';
                };
                if (current_frame == 16) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_21';
                };
                if (current_frame == 17) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_20';
                };
                if (current_frame == 18) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_19';
                };
                if (current_frame == 19) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_18';
                };
                if (current_frame == 20) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_17';
                };
                if (current_frame == 21) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_16';
                };
                if (current_frame == 22) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_15';
                };
                if (current_frame == 23) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_14';
                };
                if (current_frame == 24) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_13';
                };
                if (current_frame == 25) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' ';

                    if (loop == true) {
                        current_frame = 0;
                    };

                    if (loop == false) {
                        clearInterval(start_animation);
                    };
                };

                current_frame += 1;
            }
        }, 1000 / state.animation.framerate);
    })();
};

var HANDLE_animation_paint_drop = function HANDLE_animation_paint_drop() {

    (function () {
        var loop = false;
        var current_frame = 1;

        var start_animation = setInterval(function () {

            var MANIPULATED = document.getElementById('paint_animation_paint_can_svg');

            if (MANIPULATED != null) {
                MANIPULATED.innerHTML = '';
                if (current_frame == 1) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_1';
                };
                if (current_frame == 2) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_2';
                };
                if (current_frame == 3) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_3';
                };
                if (current_frame == 4) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_4';
                };
                if (current_frame == 5) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_5';
                };
                if (current_frame == 6) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_6';
                };
                if (current_frame == 7) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_7';
                };
                if (current_frame == 8) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_8';
                };
                if (current_frame == 9) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_9';
                };
                if (current_frame == 10) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_10';
                };
                if (current_frame == 11) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_11';
                };
                if (current_frame == 12) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_12';
                };
                if (current_frame == 13) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_13';
                };
                if (current_frame == 14) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_14';
                };
                if (current_frame == 15) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_15';
                };
                if (current_frame == 16) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_16';
                };
                if (current_frame == 17) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_17';
                };
                if (current_frame == 18) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_18';
                };
                if (current_frame == 19) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_19';
                };
                if (current_frame == 20) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_20';
                };
                if (current_frame == 21) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_21';
                };
                if (current_frame == 22) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_22';
                };
                if (current_frame == 23) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_23';
                };
                if (current_frame == 24) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_24';

                    if (loop == true) {
                        current_frame = 0;
                    };

                    if (loop == false) {
                        clearInterval(start_animation);
                    };
                };

                current_frame += 1;
            }
        }, 1000 / state.animation.framerate);
    })();
};

var HANDLE_animation_loading_logo = function HANDLE_animation_loading_logo() {

    (function () {
        var loop = true;
        var current_frame = 1;

        var start_animation = setInterval(function () {

            var MANIPULATED = document.getElementById('paint_animation_svg_2');

            if (MANIPULATED != null) {
                MANIPULATED.innerHTML = '';
                if (current_frame == 1) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_1';
                };
                if (current_frame == 2) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_2';
                };
                if (current_frame == 3) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_3';
                };
                if (current_frame == 4) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_4';
                };
                if (current_frame == 5) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_5';
                };
                if (current_frame == 6) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_6';
                };
                if (current_frame == 7) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_7';
                };
                if (current_frame == 8) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_8';
                };
                if (current_frame == 9) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_9';
                };
                if (current_frame == 10) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_10';
                };
                if (current_frame == 11) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_11';
                };
                if (current_frame == 12) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_12';
                };
                if (current_frame == 13) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_13';
                };
                if (current_frame == 14) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_14';
                };
                if (current_frame == 15) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_15';
                };
                if (current_frame == 16) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_16';
                };
                if (current_frame == 17) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_17';
                };
                if (current_frame == 18) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_18';
                };
                if (current_frame == 19) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_19';
                };
                if (current_frame == 20) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_20';
                };
                if (current_frame == 21) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_21';
                };
                if (current_frame == 22) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_22';
                };
                if (current_frame == 23) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_23';
                };
                if (current_frame == 23) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_23';
                };
                if (current_frame == 24) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_24';
                };
                if (current_frame == 25) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_25';
                };
                if (current_frame == 26) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_26';
                };
                if (current_frame == 27) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_27';
                };
                if (current_frame == 28) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left ' + ' load_letters_n_28';

                    if (loop == true) {
                        current_frame = 24;
                    };

                    if (loop == false) {
                        clearInterval(start_animation);
                    };
                };

                current_frame += 1;
            }
        }, 1000 / state.animation.framerate);
    })();
};

var HANDLE_animation_loading_player_motion = function HANDLE_animation_loading_player_motion() {

    (function () {
        var loop = false;
        var current_frame = -1;

        var start_animation = setInterval(function () {

            if (current_frame == -1) {

                // inital stand off screen
                // idle
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.attacked = true;

                // motion
                state.ui.interaction.player_1.motion.walking = false;

                // action
                state.ui.interaction.player_1.action.left = false;
                state.ui.interaction.player_1.action.right = true;

                state.ui.interaction.player_1.height = 4;
                state.ui.interaction.player_1.width = 4;
                state.ui.interaction.player_1.yaxis = 8;
                state.ui.interaction.player_1.xaxis = 5.5;
            };

            if (current_frame == 24 * 0) {
                state.ui.interaction.player_1.height = 4;
                state.ui.interaction.player_1.width = 4;
                state.ui.interaction.player_1.yaxis = 8;
                state.ui.interaction.player_1.xaxis = 5.5;
            };

            if (current_frame >= 24 * 0 && current_frame <= 24 * 2) {

                if (state.ui.interaction.player_1.yaxis >= -8) {
                    state.ui.interaction.player_1.yaxis -= 1 / 8;
                };
            };

            if (current_frame == 24 * 5) {
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = true;
                state.ui.interaction.player_1.idle.attacked = false;

                // motion
                state.ui.interaction.player_1.motion.walking = true;

                // action
                state.ui.interaction.player_1.action.left = false;
                state.ui.interaction.player_1.action.right = true;
            };

            if (current_frame >= 24 * 5 && current_frame < 24 * 10) {

                // add until 
                if (state.ui.interaction.player_1.xaxis > -6) {
                    state.ui.interaction.player_1.xaxis -= 1 / 8;
                };

                if (state.ui.interaction.player_1.yaxis > -10) {
                    state.ui.interaction.player_1.yaxis -= 1 / 8;

                    if (state.ui.interaction.player_1.yaxis == -10) {

                        // inital stand off screen
                        // idle
                        state.ui.interaction.player_1.idle.blinking = true;
                        state.ui.interaction.player_1.idle.standing = false;

                        // motion
                        state.ui.interaction.player_1.motion.walking = false;

                        // action
                        state.ui.interaction.player_1.action.left = true;
                        state.ui.interaction.player_1.action.right = false;
                    };
                };

                if (state.ui.interaction.player_1.height < 16) {
                    state.ui.interaction.player_1.height += 1 / 8;
                };

                if (state.ui.interaction.player_1.width < 16) {
                    state.ui.interaction.player_1.width += 1 / 8;
                };
            };

            if (current_frame == 24 * 10) {

                if (loop == true) {

                    current_frame = 0;
                };

                if (loop == false) {
                    clearInterval(start_animation);
                };
            };

            current_frame += 1;
        }, 1000 / state.animation.framerate);
    })();
};

var HANDLE_animation_wall = function HANDLE_animation_wall() {

    (function () {
        var loop = false;
        var current_frame = 1;

        var start_animation = setInterval(function () {

            var MANIPULATED = document.getElementById('wall');

            if (MANIPULATED != null) {
                MANIPULATED.innerHTML = '';

                if (current_frame == 1) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' bg_yellow';
                };
                if (current_frame == 2) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' wall_8';
                };
                if (current_frame == 3) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' wall_7';
                };
                if (current_frame == 4) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' wall_6';
                };
                if (current_frame == 5) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' wall_5';
                };
                if (current_frame == 6) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' wall_4';
                };
                if (current_frame == 7) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' wall_3';
                };

                if (current_frame == 8) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' wall_2';
                };

                if (current_frame == 9) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' wall_1';

                    if (loop == true) {
                        current_frame = 0;
                    };

                    if (loop == false) {
                        clearInterval(start_animation);
                    };
                };

                current_frame += 1;
            }
        }, 4000 / state.animation.framerate);
    })();
};

var HANDLE_animation_paint_wall = function HANDLE_animation_paint_wall() {

    (function () {
        var loop = false;
        var current_frame = 1;

        var start_animation = setInterval(function () {

            var MANIPULATED = document.getElementById('paint_animation_svg_4');

            if (MANIPULATED != null) {
                MANIPULATED.innerHTML = '';

                if (current_frame == 1) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_1';
                };
                if (current_frame == 2) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_2';
                };
                if (current_frame == 3) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_3';
                };
                if (current_frame == 4) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_4';
                };
                if (current_frame == 5) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_5';
                };
                if (current_frame == 6) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_6';
                };
                if (current_frame == 7) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_7';
                };

                if (current_frame == 8) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_8';
                };

                if (current_frame == 9) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_9';
                };

                if (current_frame == 10) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_10';
                };

                if (current_frame == 11) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_11';
                };

                if (current_frame == 12) {
                    MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_12';

                    if (loop == true) {
                        current_frame = 0;
                    };

                    if (loop == false) {
                        clearInterval(start_animation);
                    };
                };

                current_frame += 1;
            }
        }, 1000 / state.animation.framerate);
    })();
};

var HANDLE_animation_loaded = function HANDLE_animation_loaded() {

    //interaction
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;

    // gui    
    HANDLE_animation_gui_default();
};

var HANDLE_animation_cursor_moved = function HANDLE_animation_cursor_moved() {

    // setting

    // motion

    //interaction
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;

    state.animation.instances.cursor_moved = true;
    state.animation.instances.key_pressed = false;
    state.animation.instances.scrolled = false;

    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;

    state.ui.root.isWheeling = false;

    // gui    
    HANDLE_animation_gui_cursor_moved();

    // models
    HANDLE_animation_modals_hide();

    state.ui.modal.pop.bottom.display = true;

    setTimeout(function () {
        state.ui.modal.pop.bottom.transform = false;
    }, 2000);

    document.getElementById('component_app_scrolling').scrollTop = 0;
    document.getElementById('component_app_scrolling').classList.add('overflow_hidden');
    document.getElementById('component_app_scrolling').classList.remove('overflow_y');
};

var HANDLE_animation_key_pressed = function HANDLE_animation_key_pressed() {

    // setting

    // motion

    //interaction
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;

    state.animation.instances.cursor_moved = true;
    state.animation.instances.key_pressed = true;
    state.animation.instances.scrolled = false;

    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;

    // interaction
    state.ui.interaction.player_1.height = 16;
    state.ui.interaction.player_1.width = 16;
    state.ui.interaction.player_1.xaxis = -6;
    state.ui.interaction.player_1.yaxis = -10;

    state.ui.interaction.player_1.idle.blinking = true;
    state.ui.interaction.player_1.idle.standing = false;

    // gui    
    HANDLE_animation_gui_key_pressed();

    // models
    HANDLE_animation_modals_default();
};

var HANDLE_animation_back_to_key_pressed = function HANDLE_animation_back_to_key_pressed() {

    // setting

    // motion

    //interaction
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;

    state.animation.instances.cursor_moved = true;
    state.animation.instances.key_pressed = true;
    state.animation.instances.scrolled = false;

    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;

    // interaction
    state.ui.interaction.player_1.height = 16;
    state.ui.interaction.player_1.width = 4;
    state.ui.interaction.player_1.yaxis = -10;
    state.ui.interaction.player_1.xaxis = -8;

    state.ui.interaction.player_1.idle.blinking = true;
    state.ui.interaction.player_1.idle.standing = false;

    state.ui.root.isWheeling = false;

    // gui    
    // HANDLE_animation_gui_cursor_moved();

    // models
    // HANDLE_animation_modals_hide();

    document.getElementById('component_app_scrolling').scrollTop = 0;
    document.getElementById('component_app_scrolling').classList.add('overflow_hidden');
    document.getElementById('component_app_scrolling').classList.remove('overflow_y');
};

var HANDLE_animation_back_to_up = function HANDLE_animation_back_to_up() {
    document.getElementById('component_app_scrolling').scrollTop = 0;
    document.getElementById('component_app_scrolling').classList.add('overflow_hidden');
    document.getElementById('component_app_scrolling').classList.remove('overflow_y');
};

var HANDLE_animation_scrolled = function HANDLE_animation_scrolled() {

    // setting

    // motion

    //interaction
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;

    state.animation.instances.cursor_moved = true;
    state.animation.instances.key_pressed = true;
    state.animation.instances.scrolled = true;

    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;

    // interaction
    state.ui.interaction.player_1.height = 16;
    state.ui.interaction.player_1.width = 4;
    state.ui.interaction.player_1.yaxis = -10;
    state.ui.interaction.player_1.xaxis = -8;

    state.ui.interaction.player_1.idle.blinking = false;
    state.ui.interaction.player_1.idle.standing = true;

    // gui    
    HANDLE_animation_gui_cursor_moved();

    // models
    HANDLE_animation_modals_default();
};

var HANDLE_animation_scrolled_up = function HANDLE_animation_scrolled_up() {

    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;

    // interaction
    state.ui.interaction.player_1.height = 16;
    state.ui.interaction.player_1.width = 4;
    state.ui.interaction.player_1.yaxis = -10;
    state.ui.interaction.player_1.xaxis = -8;

    // gui    
    HANDLE_animation_gui_cursor_moved();

    // models
    HANDLE_animation_modals_default();
};

var HANDLE_animation_scrolled_down = function HANDLE_animation_scrolled_down() {

    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = true;

    // interaction
    state.ui.interaction.player_1.height = 4;
    state.ui.interaction.player_1.width = 2;
    state.ui.interaction.player_1.yaxis = 0;
    state.ui.interaction.player_1.xaxis = 1;

    // gui    
    HANDLE_animation_gui_cursor_moved();

    // models
    HANDLE_animation_modals_default();
};

var HANDLE_animation_start = function HANDLE_animation_start() {

    //interaction
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;

    state.animation.instances.key_pressed = true;
    state.animation.instances.cursor_moved = true;
    state.animation.instances.scrolled = true;

    state.animation.instances.start = true;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;

    state.ui.interaction.player_1.idle.standing = true;
    state.ui.interaction.player_1.idle.blinking = false;

    state.ui.interaction.player_1.action.right = false;
    state.ui.interaction.player_1.action.left = true;

    state.ui.interaction.player_1.height = 4;
    state.ui.interaction.player_1.width = 2;
    state.ui.interaction.player_1.yaxis = 0;
    state.ui.interaction.player_1.xaxis = 1;

    // gui    
    HANDLE_animation_gui_start();

    // models
    HANDLE_animation_modals_hide();

    // menu
    state.ui.modal.nav.top.display = true;

    setTimeout(function () {
        state.ui.modal.nav.top.transform = false;
    }, 101);
};

var HANDLE_animation_learn = function HANDLE_animation_learn() {

    // motion

    //interaction
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;

    state.animation.instances.key_pressed = true;
    state.animation.instances.cursor_moved = true;
    state.animation.instances.scrolled = true;

    state.animation.instances.start = false;
    state.animation.instances.learn = true;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;

    state.ui.interaction.player_1.idle.standing = true;
    state.ui.interaction.player_1.idle.blinking = false;

    state.ui.interaction.player_1.action.right = true;
    state.ui.interaction.player_1.action.left = false;

    state.ui.interaction.player_1.height = 4;
    state.ui.interaction.player_1.width = 2;
    state.ui.interaction.player_1.yaxis = 0;
    state.ui.interaction.player_1.xaxis = 7;

    // gui    
    HANDLE_animation_gui_learn();

    // models
    HANDLE_animation_modals_hide();
};

// on routes
var HANDLE_animation_hide = function HANDLE_animation_hide() {

    // animation bg
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;
    state.animation.instances.cursor_moved = true;
    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;
    state.animation.instances.hide = true; // mulzi
};

// returning from routes
var HANDLE_animation_unhide = function HANDLE_animation_unhide() {

    // animation bg
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;
    state.animation.instances.cursor_moved = true;
    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;
    state.animation.instances.hide = false; // mulzi
};

var check_door = function check_door() {
    if (document.getElementById('set_layer_1_door').classList.contains('gui_stage_door_closed')) {

        document.getElementById('set_layer_1_door').classList.remove('gui_stage_door_closed');
        document.getElementById('set_layer_1_door').classList.add('gui_stage_door_opened');
        return;
    };

    if (document.getElementById('set_layer_1_door').classList.contains('width_100')) {

        document.getElementById('set_layer_1_door').classList.add('gui_stage_door_closed');
        document.getElementById('set_layer_1_door').classList.remove('gui_stage_door_opened');
        return;
    };
};

var event_wheel_up = function event_wheel_up() {
    state.ui.root.wheel = 'up';
};

var event_wheel_down = function event_wheel_down() {
    state.ui.root.wheel = 'down';
};

var HANDLE_animation_accent = function HANDLE_animation_accent() {
    // Accent Layer
    (function () {
        var loop = true;
        var interval = 1;
        var start_animation = setInterval(function () {
            var MANIPULATED = document.getElementById('texture_layer');

            if (MANIPULATED != null) {
                MANIPULATED.innerHTML = '';
                if (interval == 1) {
                    MANIPULATED.classList.remove('accent_noise_1');
                    MANIPULATED.classList.remove('accent_noise_2');
                    MANIPULATED.classList.remove('accent_noise_3');
                    MANIPULATED.classList.remove('accent_noise_4');
                    MANIPULATED.classList.add('accent_noise_1');
                };
                if (interval == 2) {
                    MANIPULATED.classList.remove('accent_noise_1');
                    MANIPULATED.classList.remove('accent_noise_2');
                    MANIPULATED.classList.remove('accent_noise_3');
                    MANIPULATED.classList.remove('accent_noise_4');
                    MANIPULATED.classList.add('accent_noise_4');
                };
                if (interval == 3) {
                    MANIPULATED.classList.remove('accent_noise_1');
                    MANIPULATED.classList.remove('accent_noise_2');
                    MANIPULATED.classList.remove('accent_noise_3');
                    MANIPULATED.classList.remove('accent_noise_4');
                    MANIPULATED.classList.add('accent_noise_3');
                };
                if (interval == 4) {
                    MANIPULATED.classList.remove('accent_noise_1');
                    MANIPULATED.classList.remove('accent_noise_2');
                    MANIPULATED.classList.remove('accent_noise_3');
                    MANIPULATED.classList.remove('accent_noise_4');
                    MANIPULATED.classList.add('accent_noise_2');

                    if (loop == true) {
                        interval = 0;
                    };

                    if (loop == false) {
                        clearInterval(start_animation);
                    };
                };

                interval += 1;
            }
        }, 1000 / state.animation.framerate);
    })();
};

var HANDLE_animation_gui_logo_type = function HANDLE_animation_gui_logo_type() {
    // Accent Layer
    (function () {
        var loop = true;
        var interval = 1;
        var start_animation = setInterval(function () {
            var MANIPULATED = document.getElementById('gui_logo_type_svg');

            if (MANIPULATED != null) {
                MANIPULATED.innerHTML = '';
                if (interval == 1) {
                    MANIPULATED.classList = 'nownigel_gui_logo_type_1 position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left';
                };
                if (interval == 2) {
                    MANIPULATED.classList = 'nownigel_gui_logo_type_2 position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left';
                };
                if (interval == 3) {
                    MANIPULATED.classList = 'nownigel_gui_logo_type_3 position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left';
                };
                if (interval == 4) {
                    MANIPULATED.classList = 'nownigel_gui_logo_type_4 position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left';

                    if (loop == true) {
                        interval = 0;
                    };

                    if (loop == false) {
                        clearInterval(start_animation);
                    };
                };

                interval += 1;
            }
        }, 2000 / state.animation.framerate);
    })();
};

var HANDLE_animation = function HANDLE_animation() {

    // overall site frames by 24 frames
    (function () {
        var interval = -96;
        setInterval(function () {

            // before "96 frames (4 seconds)"
            if (interval == -96) {
                HANDLE_pre_loader();
            };

            // After "48 frames" exc..
            if (interval == 0) {
                HANDLE_animation_loading();
            };

            // 5 seconds of loading for preloading images
            if (interval == 24 * 1) {
                HANDLE_animation_paint_drop_hand();
            };

            if (interval == 24 * 1.5) {
                HANDLE_animation_paint_drop();
            };

            if (interval == 24 * 2.5) {
                HANDLE_animation_paint_wall();
            };

            if (interval == 24 * 3) {
                HANDLE_animation_accent();
                HANDLE_animation_loading_player_motion();
            };

            if (interval == 24 * 4) {
                HANDLE_animation_loading_logo();
            };

            if (interval == 24 * 5) {};

            if (interval == 24 * 6) {};

            if (interval == 24 * 7) {};

            if (interval == 24 * 8) {};

            if (interval == 24 * 9) {};

            if (interval == 24 * 10) {};

            // 5 seconds of loading for preloading images
            if (interval == 24 * 11) {};
            if (interval == 24 * 12) {
                HANDLE_animation_loaded();
            };
            interval += 1;
            //console.log('current frame is: ' + interval);
        }, 1000 / state.animation.framerate);
    })();
};

var HANDLE_pre_loader = function HANDLE_pre_loader() {

    (function () {
        var loop = false;
        var loops = 0;
        var current_frame = 1;

        var start_animation = setInterval(function () {

            var MANIPULATED = document.getElementById('preloader');

            if (MANIPULATED != null) {

                if (current_frame == 1) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_1';
                };

                if (current_frame == 2) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_2';
                };

                if (current_frame == 3) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_3';
                };

                if (current_frame == 4) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_4';
                };

                if (current_frame == 5) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_5';
                };

                if (current_frame == 6) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_6';
                };

                if (current_frame == 7) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_7';
                };

                if (current_frame == 8) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_8';
                };

                if (current_frame == 9) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_9';
                };

                if (current_frame == 10) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_10';
                };

                if (current_frame == 11) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_11';
                };

                if (current_frame == 12) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_12';
                };

                if (current_frame == 13) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_13';
                };

                if (current_frame == 14) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_14';
                };

                if (current_frame == 15) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_15';
                };

                if (current_frame == 16) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_16';
                };

                if (current_frame == 17) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_17';
                };

                if (current_frame == 18) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_18';
                };

                if (current_frame == 19) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_19';
                };

                if (current_frame == 20) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_20';
                };

                if (current_frame == 21) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_21';
                };

                if (current_frame == 22) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_22';
                };

                if (current_frame == 23) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_23';
                };

                if (current_frame == 24) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_24';
                };

                if (current_frame == 25) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_25';
                };

                if (current_frame == 26) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_26';
                };

                if (current_frame == 27) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_27';
                };

                if (current_frame == 28) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_28';
                };

                if (current_frame == 29) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_29';
                };

                if (current_frame == 30) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_30';
                };

                if (current_frame == 31) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_31';
                };

                if (current_frame == 32) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_32';
                };

                if (current_frame == 33) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_33';
                };

                if (current_frame == 34) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_34';
                };

                if (current_frame == 35) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_35';
                };

                if (current_frame == 36) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_36';
                };

                if (current_frame == 37) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_37';
                };

                if (current_frame == 38) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_38';
                };

                if (current_frame == 39) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_39';
                };

                if (current_frame == 40) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_40';
                };

                if (current_frame == 41) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_41';
                };

                if (current_frame == 42) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_42';
                };

                if (current_frame == 43) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_43';
                };

                if (current_frame == 44) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_44';
                };

                if (current_frame == 45) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_45';
                };

                if (current_frame == 46) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_46';
                };

                if (current_frame == 47) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_47';
                };

                if (current_frame == 48) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_48';
                };

                if (current_frame == 49) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_49';
                };

                if (current_frame == 50) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_50';
                };

                if (current_frame == 51) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_51';
                };

                if (current_frame == 52) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_52';
                };

                if (current_frame == 53) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_53';
                };

                if (current_frame == 54) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_54';
                };

                if (current_frame == 55) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_55';
                };

                if (current_frame == 56) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_56';
                };

                if (current_frame == 57) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_57';
                };

                if (current_frame == 58) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_58';
                };

                if (current_frame == 59) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_59';
                };

                if (current_frame == 60) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_60';
                };

                if (current_frame == 61) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_61';
                };

                if (current_frame == 62) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_62';
                };

                if (current_frame == 63) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_63';
                };

                if (current_frame == 64) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_64';
                };

                if (current_frame == 65) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_1';
                };

                if (current_frame == 66) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_2';
                };

                if (current_frame == 67) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_3';
                };

                if (current_frame == 68) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_4';
                };

                if (current_frame == 69) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1';
                };

                if (current_frame == 70) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2';
                };

                if (current_frame == 71) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3';
                };

                if (current_frame == 72) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4';
                };

                if (current_frame == 73) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5';
                };

                if (current_frame == 74) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6';
                };

                if (current_frame == 75) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7';
                };

                if (current_frame == 76) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8';
                };

                if (current_frame == 77) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9';
                };

                if (current_frame == 78) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1';
                };

                if (current_frame == 79) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2';
                };

                if (current_frame == 80) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3';
                };

                if (current_frame == 81) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4';
                };

                if (current_frame == 82) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5';
                };

                if (current_frame == 83) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6';
                };

                if (current_frame == 84) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7';
                };

                if (current_frame == 85) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8';
                };

                if (current_frame == 86) {
                    MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9';
                };

                /*
                if (current_frame == 87) {
                    MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3');
                };
                 if (current_frame == 88) {
                    MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1');
                };
                 if (current_frame == 89) {
                    MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2');
                };
                */

                if (current_frame == 86) {

                    if (loop == true) {
                        current_frame = 0;
                        loops += 1;
                    };

                    if (loop == false) {
                        clearInterval(start_animation);
                    };
                };

                current_frame += 1;
            }
        }, 1000 / state.animation.framerate);
    })();
};

var Handle_check_states = function Handle_check_states() {
    //console.log('Handle_check_states');
    components = _components2.default.get_components_handled();
    _ui2.default.Handle_ui();
    Handle_display_with_delay();
    Handle_opacity();
    Handle_transform();
    Handle_init();
};

var Handle_return_state = function Handle_return_state() {
    return state;
};

var Handle_get_state_from_events = function Handle_get_state_from_events() {
    state = _events2.default.Handle_return_state_from_events();
    values_update();
    console.log('state in index from events');
    // console.log(state);
};

// resize
var resize = function resize() {

    // alert('onresize');

    console.log('yup');

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

    Handle_get_state_from_events();
};

// Lifecycle hooks
var onload = function onload() {

    // garage('monster', 'monster');
    console.log(localStorage);
    console.log(localStorage.user);
    console.log(window);
    console.log(screen);
    console.log(screen.height);
    console.log(screen.width);
    console.log(navigator);
    console.log(history);
    console.log(history.length);
    console.log(location);
    console.log(location.pathname);

    // render view
    Handle_render();

    // render firebase data
    Handle_Firebase_Refs_and_Render();

    // render route: null
    Handle_check_route(state.app.route);

    // add events
    Handle_EventListeners();

    // start animations
    //HANDLE_animation();

    // Localize data
    if (localStorage.user == null) {
        alert('welcome first timer');
        localStorage.setItem("user", 'null');
    };

    // start timer
    (function () {
        var int = 0;
        setInterval(function () {

            console.log(state.events.key.keys);

            if (state.events.key.keys.length == 0) {
                state.events.key.up = true;
                state.events.key.down = false;
            };

            if (state.events.key.keys.length != 0) {
                state.events.key.up = false;
                state.events.key.down = true;
            };

            if (state.events.key.up == true) {
                state.events.key.timer -= 1;
                console.log('state.events.key.timer: ' + state.events.key.timer);

                if (document.getElementById('timer_key_up') != null) {
                    document.getElementById('timer_key_up').innerHTML = state.events.key.timer;
                }
            }

            if (state.events.key.up == false) {
                state.events.key.timer += 1;
                console.log('state.events.key.timer: ' + state.events.key.timer);

                if (document.getElementById('timer_key_up') != null) {
                    document.getElementById('timer_key_up').innerHTML = state.events.key.timer;
                }
            }

            if (state.events.mouse.up == true) {
                state.events.mouse.timer -= 1;
                console.log('state.events.mouse.timer: ' + state.events.mouse.timer);

                if (document.getElementById('timer_mouse_up') != null) {
                    document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.timer;
                }
            }

            if (state.events.mouse.up == false) {
                state.events.mouse.timer += 1;
                console.log('state.events.mouse.timer: ' + state.events.mouse.timer);

                if (document.getElementById('timer_mouse_up') != null) {
                    document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.timer;
                }
            }

            // desktop
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                if (state.events.mouse.enter == true) {

                    state.events.mouse.leavetimer = 0;
                    state.ui.timeout.display = false;

                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

                    if (document.getElementById('timer_mouse_leave') != null) {
                        document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
                    }
                }

                if (state.events.mouse.enter == false) {

                    state.events.mouse.leavetimer += 1;
                    state.ui.pause.display = true;

                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

                    if (document.getElementById('timer_mouse_leave') != null) {
                        document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
                    }
                }

                if (state.events.mouse.leavetimer == 5) {
                    state.ui.timeout.display = true;
                };
            };

            // Mobile
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                if (state.events.mouse.enter == true) {

                    state.events.mouse.leavetimer = 0;

                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

                    if (document.getElementById('timer_mouse_leave') != null) {
                        document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
                    }
                }

                if (state.events.mouse.enter == false) {

                    state.events.mouse.leavetimer += 1;

                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

                    if (document.getElementById('timer_mouse_leave') != null) {
                        document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
                    }
                }

                if (state.events.mouse.leavetimer == 30) {
                    state.uipause.display = true;
                };

                if (state.events.mouse.leavetimer == 60) {
                    state.uitimeout.display = true;
                };
            };

            int += 1;
            console.log(int);
        }, 1000);
    })();

    // alert(state.ui.interaction.dice);
    // alert(state.ui.interaction.random);
    // get date
    // get date
    (function () {
        setInterval(function () {

            if (document.getElementById('time') != null) {

                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var date = new Date();
                state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
                console.log(state.data.time);
                document.getElementById('time').innerText = state.data.time;
            };
        }, 1000);
    })();

    /* 1000 ms */
    // Bounce
    // Enemy
    (function () {
        var frame = 1;
        setInterval(function () {

            (function () {

                if (state.ui.interaction.bounce.yaxis == 0) {
                    state.ui.interaction.bounce.yaxisascending = true;
                }

                if (state.ui.interaction.bounce.yaxis == state.ux.dimensions.current - 1) {
                    state.ui.interaction.bounce.yaxisascending = false;
                }

                if (state.ui.interaction.bounce.xaxis == 0) {
                    state.ui.interaction.bounce.xaxisascending = true;
                }

                if (state.ui.interaction.bounce.xaxis == state.ux.dimensions.current - 1) {
                    state.ui.interaction.bounce.xaxisascending = false;
                }

                if (state.ui.interaction.bounce.yaxisascending == false) {
                    state.ui.interaction.bounce.yaxis -= 1;
                }

                if (state.ui.interaction.bounce.yaxisascending == true) {
                    state.ui.interaction.bounce.yaxis += 1;
                }

                if (state.ui.interaction.bounce.xaxisascending == false) {
                    state.ui.interaction.bounce.xaxis -= 1;
                }

                if (state.ui.interaction.bounce.xaxisascending == true) {
                    state.ui.interaction.bounce.xaxis += 1;
                }
            })();

            (function () {

                if (state.ui.interaction.enemy.xaxis == 0) {
                    state.ui.interaction.enemy.xaxisascending = true;
                }

                if (state.ui.interaction.enemy.xaxis == state.ux.dimensions.current - 1) {
                    state.ui.interaction.enemy.xaxisascending = false;
                }

                if (state.ui.interaction.enemy.xaxisascending == false) {
                    state.ui.interaction.enemy.xaxis -= 1;
                }

                if (state.ui.interaction.enemy.xaxisascending == true) {
                    state.ui.interaction.enemy.xaxis += 1;
                }

                if (state.ui.interaction.player_1.xaxis == state.ui.interaction.enemy.xaxis && state.ui.interaction.player_1.yaxis == state.ui.interaction.enemy.yaxis) {
                    // alert('Game over');
                };
            })();
        }, 1000);
    })();

    /* 500 ms */
    // wheels
    (function () {
        var frame = 1;
        setInterval(function () {

            (function () {
                state.ui.root.wheels = 0;
                state.ui.root.wheel = 'still';
            })();
        }, 100);
    })();

    // check local data
    //Handle_logged();
};

window.onload = function () {
    console.log('onload');
    onload();
};

window.onresize = function () {
    console.log('resize');
    resize();
};

// Exports
exports.default = {
    Handle_firebase_render: Handle_firebase_render,
    Handle_Firebase_Refs_and_Render: Handle_Firebase_Refs_and_Render,
    Handle_return_state: Handle_return_state,
    Handle_get_state_from_events: Handle_get_state_from_events,
    Handle_check_route: Handle_check_route,
    deleteWhoListings: deleteWhoListings,
    likeWhoListings: likeWhoListings,
    dislikeWhoListings: dislikeWhoListings,
    viewWhoListings: viewWhoListings,
    HANDLE_animation: HANDLE_animation,
    HANDLE_animation_null: HANDLE_animation_null,
    HANDLE_animation_gui_default: HANDLE_animation_gui_default,
    HANDLE_animation_modals_default: HANDLE_animation_modals_default,
    HANDLE_animation_modals_hide: HANDLE_animation_modals_hide,
    HANDLE_animation_gui_hide: HANDLE_animation_gui_hide,
    HANDLE_animation_gui_show: HANDLE_animation_gui_show,
    HANDLE_animation_gui_tranform: HANDLE_animation_gui_tranform,
    HANDLE_animation_gui_untranform: HANDLE_animation_gui_untranform,
    HANDLE_animation_key_pressed: HANDLE_animation_key_pressed,
    HANDLE_animation_cursor_moved: HANDLE_animation_cursor_moved,
    HANDLE_animation_scrolled: HANDLE_animation_scrolled,
    HANDLE_animation_scrolled_up: HANDLE_animation_scrolled_up,
    HANDLE_animation_scrolled_down: HANDLE_animation_scrolled_down,
    sound1: sound1,
    event_wheel_up: event_wheel_up,
    event_wheel_down: event_wheel_down,
    check_door: check_door
};
},{"./partials/state":334,"./partials/functions":336,"./partials/events":335,"./partials/defaults":337,"./partials/components":338,"./partials/elements":339,"./partials/values":340,"./partials/ui":341}],379:[function(require,module,exports) {
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
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50631' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
        parents.push(+k);
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
},{}]},{},[379,3], null)
//# sourceMappingURL=/now.78702106.map