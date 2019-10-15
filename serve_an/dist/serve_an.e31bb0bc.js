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
},{"./assets/gui/gui_character_face_left_blink_1.svg":[["gui_character_face_left_blink_1.e7521a02.svg","assets/gui/gui_character_face_left_blink_1.svg"],"assets/gui/gui_character_face_left_blink_1.svg"],"./assets/gui/gui_character_face_left_blink_2.svg":[["gui_character_face_left_blink_2.f5bedfe7.svg","assets/gui/gui_character_face_left_blink_2.svg"],"assets/gui/gui_character_face_left_blink_2.svg"],"./assets/gui/gui_character_face_left_blink_3.svg":[["gui_character_face_left_blink_3.ee9cbd44.svg","assets/gui/gui_character_face_left_blink_3.svg"],"assets/gui/gui_character_face_left_blink_3.svg"],"./assets/gui/gui_character_face_left_blink_4.svg":[["gui_character_face_left_blink_4.6af47493.svg","assets/gui/gui_character_face_left_blink_4.svg"],"assets/gui/gui_character_face_left_blink_4.svg"],"./assets/gui/gui_character_face_left_blink_5.svg":[["gui_character_face_left_blink_5.ddfc6b5a.svg","assets/gui/gui_character_face_left_blink_5.svg"],"assets/gui/gui_character_face_left_blink_5.svg"],"./assets/gui/gui_character_face_left_blink_6.svg":[["gui_character_face_left_blink_6.76e1ae24.svg","assets/gui/gui_character_face_left_blink_6.svg"],"assets/gui/gui_character_face_left_blink_6.svg"],"./assets/gui/gui_text_continue.svg":[["gui_text_continue.14bbfa95.svg","assets/gui/gui_text_continue.svg"],"assets/gui/gui_text_continue.svg"],"./assets/gui/gui_text_loaded.svg":[["gui_text_loaded.60900b05.svg","assets/gui/gui_text_loaded.svg"],"assets/gui/gui_text_loaded.svg"],"./assets/gui/gui_text_loaded_1.svg":[["gui_text_loaded_1.8b2f8cdf.svg","assets/gui/gui_text_loaded_1.svg"],"assets/gui/gui_text_loaded_1.svg"],"./assets/gui/gui_text_loaded_2.svg":[["gui_text_loaded_2.91531183.svg","assets/gui/gui_text_loaded_2.svg"],"assets/gui/gui_text_loaded_2.svg"],"./assets/gui/gui_text_loaded_3.svg":[["gui_text_loaded_3.991795c2.svg","assets/gui/gui_text_loaded_3.svg"],"assets/gui/gui_text_loaded_3.svg"],"./assets/gui/gui_text_loaded_4.svg":[["gui_text_loaded_4.8f14c048.svg","assets/gui/gui_text_loaded_4.svg"],"assets/gui/gui_text_loaded_4.svg"],"./assets/gui/gui_text_loading.svg":[["gui_text_loading.4b760cbc.svg","assets/gui/gui_text_loading.svg"],"assets/gui/gui_text_loading.svg"],"./assets/gui/gui_text_loading_1.svg":[["gui_text_loading_1.b761b4af.svg","assets/gui/gui_text_loading_1.svg"],"assets/gui/gui_text_loading_1.svg"],"./assets/gui/gui_text_loading_2.svg":[["gui_text_loading_2.0b494cde.svg","assets/gui/gui_text_loading_2.svg"],"assets/gui/gui_text_loading_2.svg"],"./assets/gui/gui_text_loading_3.svg":[["gui_text_loading_3.9e46e494.svg","assets/gui/gui_text_loading_3.svg"],"assets/gui/gui_text_loading_3.svg"],"./assets/gui/gui_text_loading_4.svg":[["gui_text_loading_4.30ac31ff.svg","assets/gui/gui_text_loading_4.svg"],"assets/gui/gui_text_loading_4.svg"],"./assets/gui/logo/type/gui_logo_type.svg":[["gui_logo_type.dada253c.svg","assets/gui/logo/type/gui_logo_type.svg"],"assets/gui/logo/type/gui_logo_type.svg"],"./assets/gui/logo/type/gui_logo_type_1.svg":[["gui_logo_type_1.cb0590d0.svg","assets/gui/logo/type/gui_logo_type_1.svg"],"assets/gui/logo/type/gui_logo_type_1.svg"],"./assets/gui/logo/type/gui_logo_type_2.svg":[["gui_logo_type_2.2ab02c6a.svg","assets/gui/logo/type/gui_logo_type_2.svg"],"assets/gui/logo/type/gui_logo_type_2.svg"],"./assets/gui/logo/type/gui_logo_type_3.svg":[["gui_logo_type_3.1e559c99.svg","assets/gui/logo/type/gui_logo_type_3.svg"],"assets/gui/logo/type/gui_logo_type_3.svg"],"./assets/gui/logo/type/gui_logo_type_4.svg":[["gui_logo_type_4.9febe8f2.svg","assets/gui/logo/type/gui_logo_type_4.svg"],"assets/gui/logo/type/gui_logo_type_4.svg"],"./assets/gui/gui_buttons.svg":[["gui_buttons.e92ced32.svg","assets/gui/gui_buttons.svg"],"assets/gui/gui_buttons.svg"],"./assets/gui/gui_character_face_left.svg":[["gui_character_face_left.e013aa5a.svg","assets/gui/gui_character_face_left.svg"],"assets/gui/gui_character_face_left.svg"],"./assets/gui/logo/mark/gui_wall_1.svg":[["gui_wall_1.9835003a.svg","assets/gui/logo/mark/gui_wall_1.svg"],"assets/gui/logo/mark/gui_wall_1.svg"],"./assets/gui/logo/mark/gui_wall_2.svg":[["gui_wall_2.aec3ad79.svg","assets/gui/logo/mark/gui_wall_2.svg"],"assets/gui/logo/mark/gui_wall_2.svg"],"./assets/gui/logo/mark/gui_wall_3.svg":[["gui_wall_3.e15ff0b1.svg","assets/gui/logo/mark/gui_wall_3.svg"],"assets/gui/logo/mark/gui_wall_3.svg"],"./assets/gui/logo/mark/gui_wall_4.svg":[["gui_wall_4.6745d876.svg","assets/gui/logo/mark/gui_wall_4.svg"],"assets/gui/logo/mark/gui_wall_4.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_1.svg":[["gui_character_face_vomit_left_shadow_1.4961d216.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_1.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_1.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_2.svg":[["gui_character_face_vomit_left_shadow_2.96b02201.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_2.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_2.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_3.svg":[["gui_character_face_vomit_left_shadow_3.f8b433ac.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_3.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_3.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_4.svg":[["gui_character_face_vomit_left_shadow_4.801013c7.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_4.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_4.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_5.svg":[["gui_character_face_vomit_left_shadow_5.3fcbea65.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_5.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_5.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_6.svg":[["gui_character_face_vomit_left_shadow_6.754dfb70.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_6.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_6.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow.svg":[["gui_character_face_left_shadow.43a8ba68.svg","assets/gui/logo/mark/gui_character_face_left_shadow.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow_1.svg":[["gui_character_face_left_shadow_1.b0fb65d9.svg","assets/gui/logo/mark/gui_character_face_left_shadow_1.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow_1.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow_2.svg":[["gui_character_face_left_shadow_2.60859a62.svg","assets/gui/logo/mark/gui_character_face_left_shadow_2.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow_2.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow_3.svg":[["gui_character_face_left_shadow_3.5146f4f5.svg","assets/gui/logo/mark/gui_character_face_left_shadow_3.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow_3.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow_4.svg":[["gui_character_face_left_shadow_4.558674e1.svg","assets/gui/logo/mark/gui_character_face_left_shadow_4.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow_4.svg"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.63c56e34.svg","assets/gui/gui_interaction_text_press.svg"],"assets/gui/gui_interaction_text_press.svg"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.8b15c689.svg","assets/gui/gui_link_menu_white.svg"],"assets/gui/gui_link_menu_white.svg"],"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.58909d32.svg","assets/gui/gui_link_grid_white.svg"],"assets/gui/gui_link_grid_white.svg"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.fc375cc1.svg","assets/gui/gui_link_sign_in_white.svg"],"assets/gui/gui_link_sign_in_white.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_character_body_right_8.svg":[["gui_character_body_right_8.6008b897.svg","assets/gui/gui_character_body_right_8.svg"],"assets/gui/gui_character_body_right_8.svg"],"./assets/gui/gui_character_body_right_7.svg":[["gui_character_body_right_7.e008fe94.svg","assets/gui/gui_character_body_right_7.svg"],"assets/gui/gui_character_body_right_7.svg"],"./assets/gui/gui_character_body_right_6.svg":[["gui_character_body_right_6.44953eae.svg","assets/gui/gui_character_body_right_6.svg"],"assets/gui/gui_character_body_right_6.svg"],"./assets/gui/gui_character_body_right_5.svg":[["gui_character_body_right_5.9dcd1061.svg","assets/gui/gui_character_body_right_5.svg"],"assets/gui/gui_character_body_right_5.svg"],"./assets/gui/gui_character_body_right_4.svg":[["gui_character_body_right_4.d8249778.svg","assets/gui/gui_character_body_right_4.svg"],"assets/gui/gui_character_body_right_4.svg"],"./assets/gui/gui_character_body_right_3.svg":[["gui_character_body_right_3.39393cf8.svg","assets/gui/gui_character_body_right_3.svg"],"assets/gui/gui_character_body_right_3.svg"],"./assets/gui/gui_character_body_right_2.svg":[["gui_character_body_right_2.3d940bbe.svg","assets/gui/gui_character_body_right_2.svg"],"assets/gui/gui_character_body_right_2.svg"],"./assets/gui/gui_character_body_right_1.svg":[["gui_character_body_right_1.fe23b40a.svg","assets/gui/gui_character_body_right_1.svg"],"assets/gui/gui_character_body_right_1.svg"],"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.6dec167e.woff","assets/fonts/Silkscreen.ttf.woff"],"assets/fonts/Silkscreen.ttf.woff"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.a45ae991.svg","assets/fonts/Silkscreen.ttf.svg"],"assets/fonts/Silkscreen.ttf.svg"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.be6987ea.eot","assets/fonts/Silkscreen.ttf.eot"],"assets/fonts/Silkscreen.ttf.eot"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = '';
var drag_from = {};
var drop_to = {};

var handle_Function_Scroll = function handle_Function_Scroll(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    var scroll = {
      clientWidth: event.target.scrollingElement.clientWidth,
      clientHeight: event.target.scrollingElement.clientHeight,
      scrollLeft: event.target.scrollingElement.scrollLeft,
      scrollTop: event.target.scrollingElement.scrollTop,
      scrollWidth: event.target.scrollingElement.scrollWidth,
      scrollHeight: event.target.scrollingElement.scrollHeight
    };
    state.events.scroll.history.push(scroll);
    console.log('state.events.scroll.history');
    console.log(state.events.scroll.history); // scrolling

    console.log("event.target.scrollingElement.clientWidth: " + event.target.scrollingElement.clientWidth);
    console.log('event.target.scrollingElement.clientWidth: ' + event.target.scrollingElement.clientWidth);
    console.log('event.target.scrollingElement.clientHeight: ' + event.target.scrollingElement.clientHeight);
    console.log('event.target.scrollingElement.scrollLeft: ' + event.target.scrollingElement.scrollLeft);
    console.log('event.target.scrollingElement.scrollTop: ' + event.target.scrollingElement.scrollTop);
    console.log('event.target.scrollingElement.scrollWidth: ' + event.target.scrollingElement.scrollWidth);
    console.log('event.target.scrollingElement.scrollHeight: ' + event.target.scrollingElement.scrollHeight); //alert('yup');
    // scrolling

    console.log("event.target.scrollingElement.clientWidth: " + event.target.scrollingElement.clientWidth);
    console.log("event.target.scrollingElement.clientHeight: " + event.target.scrollingElement.clientHeight);
    console.log("event.target.scrollingElement.scrollLeft: " + event.target.scrollingElement.scrollLeft);
    console.log("event.target.scrollingElement.scrollTop: " + event.target.scrollingElement.scrollTop);
    console.log("event.target.scrollingElement.scrollWidth: " + event.target.scrollingElement.scrollWidth);
    console.log("event.target.scrollingElement.scrollHeight: " + event.target.scrollingElement.scrollHeight); // set state

    state.interaction.root.clientHeight = state.ux.dimensions.height;
    state.interaction.root.clientWidth = state.ux.dimensions.width;
    state.interaction.root.scrollHeight = event.target.scrollingElement.scrollHeight;
    state.interaction.root.scrollWidth = event.target.scrollingElement.scrollWidth;
    state.interaction.root.scrollTop = event.target.scrollingElement.scrollTop;
    state.interaction.root.scrollLeft = event.target.scrollingElement.scrollLeft; // check states
    // is wheel up or down?

    if (state.interaction.root.scrollTop > state.interaction.root.component_app_gui_scroll_y_position) {
      console.log("state.interaction.root.component_app_gui_scroll_y_position increasing");
      console.log("instance: wheel down");
      state.interaction.root.wheel_up = false;
      state.interaction.root.wheel_down = true;
    }

    if (state.interaction.root.scrollTop < state.interaction.root.component_app_gui_scroll_y_position) {
      console.log("state.interaction.root.component_app_gui_scroll_y_position decreasing");
      console.log("instance: wheel up");
      state.interaction.root.wheel_up = true;
      state.interaction.root.wheel_down = false;
    }

    if (state.interaction.root.scrollTop === 0) {
      console.log("instance: wheel up");
      state.interaction.root.wheel_up = true;
      state.interaction.root.wheel_down = false;
    } // is scrolling started?


    if (state.interaction.root.scrollTop > 1) {
      console.log("instance: scrolling started");
      state.interaction.root.scrolling_started = true;
    }

    if (state.interaction.root.scrollTop == 0) {
      console.log("instance: scrolling started");
      state.interaction.root.scrolling_started = false;
    } // is inside lead?


    if (state.interaction.root.scrollTop < state.interaction.root.clientHeight) {
      console.log("instance: inside lead");
      state.interaction.root.inside_lead = true;
      state.interaction.root.past_lead = false;
    } // is past lead?


    if (state.interaction.root.scrollTop > state.interaction.root.clientHeight) {
      console.log("instance: past lead");
      state.interaction.root.inside_lead = false;
      state.interaction.root.past_lead = true;
    } // is at right before footer?


    if (state.interaction.root.clientHeight + state.interaction.root.scrollTop < state.interaction.root.scrollHeight - state.interaction.root.clientHeight) {
      console.log("instance: 100vh before bottom met");
      state.interaction.root.before_footer = true;
    }

    if (state.interaction.root.clientHeight + state.interaction.root.scrollTop > state.interaction.root.scrollHeight - state.interaction.root.clientHeight) {
      console.log("instance: 100vh before bottom met");
      state.interaction.root.before_footer = false;
    } // is at footer?


    if (state.interaction.root.scrollHeight - state.interaction.root.scrollTop > state.interaction.root.clientHeight) {
      console.log("component_app_modal_element_page_top_content: instance: footer met");
      state.interaction.root.inside_footer = false;
    }

    if (state.interaction.root.scrollHeight - state.interaction.root.scrollTop <= state.interaction.root.clientHeight) {
      console.log("component_app_modal_element_page_top_content: instance: footer met");
      state.interaction.root.inside_footer = true;
    }

    state.interaction.root.component_app_gui_scroll_y_position = state.interaction.root.scrollTop;
  }

  ;
};

var handle_Function_Device_Orientation_Change = function handle_Function_Device_Orientation_Change(event) {
  state = _index.default.handle_ReturnState();
  state.events.motion.orientation_string = orientation;
  state.events.motion.orientation_string_history.push({
    event: event
  });
  console.log('state.events.motion.orientation_string_history');
  console.log(state.events.motion.orientation_string_history);
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
  }, _defineProperty(_state$ux, "browser", {
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
  }, _defineProperty(_state$ux2, "browser", {
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

  if (document.getElementById('lead') != null) {
    document.getElementById('lead').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;
  console.log('handle_Function_Device_Resize');
};

var handle_Function_Device_Orientation = function handle_Function_Device_Orientation(event) {
  state = _index.default.handle_ReturnState();
  state.events.motion.event_alpha = event.alpha;
  state.events.motion.event_beta = event.beta;
  state.events.motion.event_gamma = event.gamma;
  state.events.motion.orientation_history.push({
    event: event
  });
  console.log('state.events.motion.orientation_history');
  console.log(state.events.motion.orientation_history);
  console.log('handle_Function_Device_Orientation');
};

var handle_Function_Device_Load = function handle_Function_Device_Load(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Device_Load');
};

var handle_Function_Mouse_Move = function handle_Function_Mouse_Move(event) {
  state = _index.default.handle_ReturnState();
  var mouse = {
    clientX: event.clientX,
    clientY: event.clientY
  };
  state.events.mouse.status.enter = true;
  state.events.mouse.status.leave = false;

  if (event) {
    state.events.mouse.current.clientX = event.clientX;
    state.events.mouse.current.clientY = event.clientY;
    state.events.mouse.history.push(mouse);

    if (state.events.mouse.status.up == true) {
      state.events.mouse_up_move.history.push(mouse);
    }

    ;

    if (state.events.mouse.status.down == true) {
      state.events.mouse_down_move.history.push(mouse);
    }

    ;
    console.log('state.events.mouse.history');
    console.log(state.events.mouse.history);
  }

  ;
  console.log('handle_Function_Mouse_Move');
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
  console.log('handle_Function_Mouse_Enter');
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
  console.log('handle_Function_Mouse_Leave');
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
  console.log('handle_Function_Mouse_Up');
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
  console.log('handle_Function_Mouse_Down');
};

var handle_Function_Key_Down = function handle_Function_Key_Down(event) {
  state = _index.default.handle_ReturnState(); // console.log('state in events');

  console.log('keydown');
  var keyCode = event.keyCode;
  console.log('keyCode: ' + keyCode);
  console.log('keys held: ');
  console.log(state.events.keys_held.history);
  var matched = false;

  for (var i = 0; i < state.events.keys_held.history.length; i++) {
    if (state.events.keys_held.history[i] == event.keyCode) {
      matched = true;
    }

    ;
  }

  ;

  if (matched == false) {
    state.events.keys_held.history.push(event.keyCode);
  }

  ;
  state.events.key.history.push([{
    keyCode: event.keyCode
  }]);
  console.log('state.events.key.history');
  console.log(state.events.key.history);

  if (event.keyCode == 27) {
    setTimeout(function () {//window.scrollTo(0, 0);
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
    state.interaction.player_1.angle = 0;
    state.interaction.player_1.clientX -= 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 38) {
    //alert('shift');
    state.interaction.player_1.stance = 1;
    state.interaction.player_1.clientY -= 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 39) {
    //alert('shift');
    state.interaction.player_1.angle = 1;
    state.interaction.player_1.clientX += 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 40) {
    //alert('shift');
    state.interaction.player_1.stance = 0;
    state.interaction.player_1.clientY += 1 / 8;
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
  state = _index.default.handle_ReturnState(); // console.log('state in events');

  console.log('keyup');
  console.log('event: keyup');
  console.log(event);
  var index = state.events.keys_held.history.indexOf(event.keyCode); //state.animation.scene = (state.animation.scene + 1);
  //alert(state.animation.scene);

  if (index > -1) {
    state.events.keys_held.history.splice(index, 1);
  }

  ;

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

var handle_Function_Device_Motion = function handle_Function_Device_Motion(event) {
  var _state$ux3;

  state = _index.default.handle_ReturnState();
  state.ux = (_state$ux3 = {
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
  }, _defineProperty(_state$ux3, "browser", {
    height: window.outerHeight,
    width: window.outerWidth
  }), _defineProperty(_state$ux3, "window", {
    height: window.innerHeight,
    width: window.innerWidth
  }), _defineProperty(_state$ux3, "screen", {
    height: window.screen.height,
    width: window.screen.width,
    orientation: window.screen.orientation
  }), _defineProperty(_state$ux3, "dimensions", {
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
  }), _state$ux3);
  state.events.motion.history.push([{
    event_accelerationIncludingGravity_x: event.accelerationIncludingGravity.x,
    event_accelerationIncludingGravity_y: event.accelerationIncludingGravity.y,
    event_accelerationIncludingGravity_z: event.accelerationIncludingGravity.z
  }]);
  state.events.motion.event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
  state.events.motion.event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
  state.events.motion.event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;
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
},{"../index.js":"index.js"}],"imports/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var state;

var gen = function gen(x) {
  var component = document.createElement('div');

  if (x == 'basics') {
    var identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify;
    component.innerHTML = "\n      <div id=\"elements_".concat(identify, "\">\n          \n              <p class=\" \">search</p>\n              <input id=\"element_input_filter\" type=\"text\" placeholder=\"element_input_filter\" class=\"width_100 float_left\" />\n              \n              <p class=\" \">searched posts_filtered</p>\n              <div id=\"posts_filtered_container\">\n                <div id=\"posts_filtered\"></div>\n              </div>\n\n              <p class=\" \">posts_all</p>\n\n              <div id=\"posts_all_container\">\n                <div id=\"posts_all\"></div>\n              </div>\n\n              <p class=\" \">user only posts</p>\n\n              <div id=\"posts_all_user_only_container\">\n                <div id=\"posts_all_user_only\"></div>\n              </div>\n\n               <ul id=\"firebase\">\n                  <div id=\"modal-signup\">\n                  </div>\n\n                  <div id=\"modal-signin\">\n                  </div>\n\n                  <div id=\"modal-account\">\n                     <form id=\"account-form\">\n                       <p>modal-account</p>\n                       <div id=\"account-details\" class=\"account-details\"><p>account-details<p></div>\n                       <div id=\"upload_form\"></div>\n                     </form>\n                  </div>\n\n                  <div id=\"modal-create\">\n\n                  </div>\n\n                  <div id=\"modal-edit\">                     \n                  </div>\n\n\n               </ul>\n\n          <div class=\"info_scroll_x\">\n               \n               <div class=\"position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n\n                   <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n                      <div class=\"element_overflow_x_scene\">\n\n                        <div class=\"info_scroll_y\">\n                           <div class=\"container position_relative\nwidth_100 height_100vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                              <div id=\"menu_buffer\" class=\"width_100 float_left\"></div>\n\n                              <p class=\" \">pages & post</p>\n                              \n                              <div class=\"width_100 position_relative margin_auto float_left  \">(json data recieved from wordpress app) Use this to create <a href=\"#\">data sorts</a>, <a href=\"#\">data from logged user</a> and <a href=\"#\">data based on location</a> </div>\n                              \n                              <div id=\"signal\">\n                                 site_routes: \n                                 <div id=\"site_routes\"></div>\n                              </div>\n\n                              <a id=\"a_big_loading\" class=\"a_big\" href=\"#\">loading</a>\n                              <a id=\"a_big_home\" class=\"a_big\" href=\"#\">home</a>\n                              <a id=\"a_big_latest\" class=\"a_big\" href=\"#\">latest</a>\n                              <a id=\"a_big_start\" class=\"a_big\" href=\"#\">start game</a>\n                              <a id=\"a_big_learn\" class=\"a_big\" href=\"#\">learn game</a>\n                              <a id=\"a_big_planner\" class=\"a_big\" href=\"#\">planner</a>\n                              <a id=\"a_big_contact\" class=\"a_big\" href=\"#\">contact</a>\n                              <a id=\"a_big_welcome\" class=\"a_big\" href=\"#\">welcome</a>\n\n                              <div id=\"signal\">\n                                 history_route: \n                                 <div id=\"history_route\"></div>\n                              </div>\n                              <div id=\"signal\">\n                                 current_route: \n                                 <div id=\"current_route\"></div>\n                              </div>\n                              <div id=\"signal\">\n                                 previous_route: \n                                 <div id=\"previous_route\"></div>\n                              </div>\n                              <div id=\"signal\">\n                                 next_route: \n                                 <div id=\"next_route\"></div>\n                              </div>\n                              \n                           </div>\n                        </div>\n\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                 \n                               <h3>instructions</h3>\n                                <p>mouse</p>\n\n                                <div id=\"signal\">mousemove while up: <div id=\"\">pencil</div></div>\n                                <div id=\"signal\">mousemove while down: <div id=\"\">pen</div></div>\n                                <div id=\"signal\">click to: <div id=\"\">roll dice</div></div>\n\n                                <p>keys</p>\n\n                                <div id=\"signal\">esc key: <div id=\"\">ui reset</div></div>\n                                <div id=\"signal\">q key: <div id=\"\">model reset</div></div>\n\n                                <div id=\"signal\">left arrow: <div id=\"\">increases interaction_character_clientX</div></div>\n                                <div id=\"signal\">right arrow: <div id=\"\">decreases interaction_character_clientX</div></div>\n                                <div id=\"signal\">up arrow: <div id=\"\">increases interaction_character_clientY</div></div>\n                                <div id=\"signal\">down arrow: <div id=\"\">decreases interaction_character_clientY</div></div>\n                                \n                                <div id=\"signal\">w key: <div id=\"\">increases vr x-axis</div></div>\n                                <div id=\"signal\">a key: <div id=\"\">decreases vr x-axis</div></div>\n                                <div id=\"signal\">s key: <div id=\"\">increases vr y-axis</div></div>\n                                <div id=\"signal\">d key: <div id=\"\">decreases vr y-axis</div></div>\n                                \n                                            \n\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                      \n                                <h3>interaction</h3>\n                                 <div id=\"signal\">dice_history: <div id=\"dice_history\"></div></div>                                           \n                                 <div id=\"signal\">snake_history: <div id=\"snake_history\"></div></div>\n                                 <div id=\"signal\">bounce_history: <div id=\"bounce_history\"></div></div>\n                                 <div id=\"signal\">pen_history: <div id=\"pen_history\"></div></div>\n                                 <div id=\"signal\">pencil_history: <div id=\"pencil_history\"></div></div>\n\n\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                      \n                            <h3>game</h3>\n                             <div id=\"signal\">screen level: <div id=\"level\"></div></div>\n                             <div id=\"signal\">screen pause: <div id=\"pause\"></div></div>\n                             <div id=\"signal\">screen timeout: <div id=\"timeout\"></div></div>\n\n                             <div id=\"signal\">stat HP: <div id=\"HP\"></div></div>\n                             <div id=\"signal\">stat Mana: <div id=\"Mana\"></div></div>\n                             <div id=\"signal\">stat points: <div id=\"points\"></div></div>\n                             \n                             <div id=\"signal\">character height: <div id=\"interaction_character_height\"></div></div>\n                             <div id=\"signal\">character width: <div id=\"interaction_character_width\"></div></div>\n                             <div id=\"signal\">character clientX: <div id=\"interaction_character_clientX\"></div></div>\n                             <div id=\"signal\">character clientY: <div id=\"interaction_character_clientY\"></div></div>\n                               \n                             <div id=\"signal\">vr clientX: <div id=\"state.interaction.vr.clientX\"></div></div>\n                             <div id=\"signal\">vr clientY: <div id=\"state.interaction.vr.clientY\"></div></div>\n\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                      \n                               <h3>latest</h3>\n                               <div id=\"signal\">latest_scroll: <div id=\"latest_scroll\"></div></div>\n\n                              <div id=\"signal\">scroll_clientHeight: <div id=\"scroll_clientHeight\">0</div></div>\n                              <div id=\"signal\">scroll_clientWidth: <div id=\"scroll_clientWidth\">0</div></div>\n                              <div id=\"signal\">scroll_scrollHeight: <div id=\"scroll_scrollHeight\">0</div></div>\n                              <div id=\"signal\">scroll_scrollWidth: <div id=\"scroll_scrollWidth\">0</div></div>\n                              <div id=\"signal\">scroll_scrollTop: <div id=\"scroll_scrollTop\">0</div></div>\n                              <div id=\"signal\">scroll_scrollLeft: <div id=\"scroll_scrollLeft\">0</div></div>\n\n                               <div id=\"signal\">latest_mouse: <div id=\"latest_mouse\"></div></div>\n                               <div id=\"signal\">latest_mouse_enter: <div id=\"latest_mouse_enter\"></div></div>\n                               <div id=\"signal\">latest_mouse_leave: <div id=\"latest_mouse_leave\"></div></div>\n                               <div id=\"signal\">latest_mouse_up: <div id=\"latest_mouse_up\"></div></div>\n                               <div id=\"signal\">latest_mouse_down: <div id=\"latest_mouse_down\"></div></div>\n                               <div id=\"signal\">latest_mouse_up_move: <div id=\"latest_mouse_up_move\"></div></div>\n                               <div id=\"signal\">latest_mouse_down_move: <div id=\"latest_mouse_down_move\"></div></div>\n                               <div id=\"signal\">latest_mouse_drag_drop: <div id=\"latest_mouse_drag_drop\"></div></div>\n                               <div id=\"signal\">latest_key: <div id=\"latest_key\"></div></div>\n                               <div id=\"signal\">latest_key_up: <div id=\"latest_key_up\"></div></div>\n                               <div id=\"signal\">latest_touch: <div id=\"latest_touch\"></div></div>\n                               <div id=\"signal\">latest_touch_start: <div id=\"latest_touch_start\"></div></div>\n                               <div id=\"signal\">latest_touch_end: <div id=\"latest_touch_end\"></div></div>\n                               <div id=\"signal\">latest_touch_drag_drop: <div id=\"latest_touch_drag_drop\"></div></div>\n\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                      \n                               <h3>current</h3>\n                               <div id=\"signal\">current_scroll: <div id=\"current_scroll\"></div></div>\n\n                              <div id=\"signal\">scroll_clientHeight: <div id=\"scroll_clientHeight\">0</div></div>\n                              <div id=\"signal\">scroll_clientWidth: <div id=\"scroll_clientWidth\">0</div></div>\n                              <div id=\"signal\">scroll_scrollHeight: <div id=\"scroll_scrollHeight\">0</div></div>\n                              <div id=\"signal\">scroll_scrollWidth: <div id=\"scroll_scrollWidth\">0</div></div>\n                              <div id=\"signal\">scroll_scrollTop: <div id=\"scroll_scrollTop\">0</div></div>\n                              <div id=\"signal\">scroll_scrollLeft: <div id=\"scroll_scrollLeft\">0</div></div>\n\n                               <div id=\"signal\">current_mouse: <div id=\"current_mouse\"></div></div>\n                               <div id=\"signal\">current_mouse_enter: <div id=\"current_mouse_enter\"></div></div>\n                               <div id=\"signal\">current_mouse_leave: <div id=\"current_mouse_leave\"></div></div>\n                               <div id=\"signal\">current_mouse_up: <div id=\"current_mouse_up\"></div></div>\n                               <div id=\"signal\">current_mouse_down: <div id=\"current_mouse_down\"></div></div>\n                               <div id=\"signal\">current_mouse_up_move: <div id=\"current_mouse_up_move\"></div></div>\n                               <div id=\"signal\">current_mouse_down_move: <div id=\"current_mouse_down_move\"></div></div>\n                               <div id=\"signal\">current_mouse_drag_drop: <div id=\"current_mouse_drag_drop\"></div></div>\n                               <div id=\"signal\">current_key: <div id=\"current_key\"></div></div>\n                               <div id=\"signal\">current_key_up: <div id=\"current_key_up\"></div></div>\n                               <div id=\"signal\">current_touch: <div id=\"current_touch\"></div></div>\n                               <div id=\"signal\">current_touch_start: <div id=\"current_touch_start\"></div></div>\n                               <div id=\"signal\">current_touch_end: <div id=\"current_touch_end\"></div></div>\n                               <div id=\"signal\">current_touch_drag_drop: <div id=\"current_touch_drag_drop\"></div></div>\n\n                            </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                      \n                               <h3>history</h3>\n                               <div id=\"signal\">history_scroll: <div id=\"history_scroll\"></div></div>\n\n                              <div id=\"signal\">scroll_clientHeight: <div id=\"scroll_clientHeight\">0</div></div>\n                              <div id=\"signal\">scroll_clientWidth: <div id=\"scroll_clientWidth\">0</div></div>\n                              <div id=\"signal\">scroll_scrollHeight: <div id=\"scroll_scrollHeight\">0</div></div>\n                              <div id=\"signal\">scroll_scrollWidth: <div id=\"scroll_scrollWidth\">0</div></div>\n                              <div id=\"signal\">scroll_scrollTop: <div id=\"scroll_scrollTop\">0</div></div>\n                              <div id=\"signal\">scroll_scrollLeft: <div id=\"scroll_scrollLeft\">0</div></div>\n\n                               <div id=\"signal\">history_mouse: <div id=\"history_mouse\"></div></div>\n                               <div id=\"signal\">history_mouse_enter: <div id=\"history_mouse_enter\"></div></div>\n                               <div id=\"signal\">history_mouse_leave: <div id=\"history_mouse_leave\"></div></div>\n                               <div id=\"signal\">history_mouse_up: <div id=\"history_mouse_up\"></div></div>\n                               <div id=\"signal\">history_mouse_down: <div id=\"history_mouse_down\"></div></div>\n                               <div id=\"signal\">history_mouse_up_move: <div id=\"history_mouse_up_move\"></div></div>\n                               <div id=\"signal\">history_mouse_down_move: <div id=\"history_mouse_down_move\"></div></div>\n                               <div id=\"signal\">history_mouse_drag_drop: <div id=\"history_mouse_drag_drop\"></div></div>\n                               <div id=\"signal\">history_key: <div id=\"history_key\"></div></div>\n                               <div id=\"signal\">history_key_up: <div id=\"history_key_up\"></div></div>\n                               <div id=\"signal\">history_touch: <div id=\"history_touch\"></div></div>\n                               <div id=\"signal\">history_touch_start: <div id=\"history_touch_start\"></div></div>\n                               <div id=\"signal\">history_touch_end: <div id=\"history_touch_end\"></div></div>\n                               <div id=\"signal\">history_touch_drag_drop: <div id=\"history_touch_drag_drop\"></div></div>\n\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                                                     \n                               <h3>Time</h3>\n                              <div class=\"width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw\">(json data recieved from wordpress app) Use this to create <a href=\"#\">data sorts</a>, <a href=\"#\">data from logged user</a> and <a href=\"#\">data based on location</a> </div>\n                                    \n                              <div id=\"signal\">current_frame_motion: <div id=\"current_frame_motion\"></div></div>\n                              <div id=\"signal\">current_duration: <div id=\"current_duration\"></div></div>\n                              <div id=\"signal\">time_onload: <div id=\"time_onload\"></div></div>\n                              <div id=\"signal\">time: <div id=\"time\"></div></div>\n\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                    \n                             <h3>Gravity</h3>\n                             <div id=\"signal\">event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div></div>\n                             <div id=\"signal\">event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div></div>\n                             <div id=\"signal\">event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div></div>\n\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                    \n                             <h3>Vr</h3>\n                             <div id=\"signal\">last_action: <div id=\"last_action\"></div></div>\n\n                            </div>\n                        </div>\n                      </div>\n                      \n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n                                    \n                             <h3>Positions</h3>\n                             <div id=\"signal\">event_alpha: <div id=\"event_alpha\"></div></div>\n                             <div id=\"signal\">event_beta: <div id=\"event_beta\"></div></div>\n                             <div id=\"signal\">event_gamma: <div id=\"event_gamma\"></div></div>\n\n                            </div>\n                        </div>\n                      </div>\n                      \n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 float_left\">\n\n                             <h3>Orientation</h3>\n                             <div id=\"signal\">event_portrait: <div id=\"event_portrait\"></div></div>\n                             <div id=\"signal\">event_landscape: <div id=\"event_landscape\"></div></div>\n                             <div id=\"signal\">event_orientation: <div id=\"event_orientation\"></div></div>\n                            </div>\n\n                        </div>\n                      </div>\n\n                       <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100vw height_100 margin_auto float_left\">\n                           <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                       </div>\n                       <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100vw height_100 margin_auto float_left\">\n                           <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                       </div>\n                       <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100vw height_100 margin_auto float_left\">\n                           <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                       </div>\n                       <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100vw height_100 margin_auto float_left\">\n                           <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                       </div>\n                       <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100vw height_100 margin_auto float_left\">\n                           <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                       </div>\n                       <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100vw height_100 margin_auto float_left\">\n                           <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                       </div>\n                       <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100vw height_100 margin_auto float_left\">\n                           <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                       </div>\n                   </div>\n               </div>\n               \n          </div>\n\n          <div id=\"info_scroll_mix\">\n\n            <div id=\"preview_info_scroll_x\">\n\n                <div class=\"position_relative float_left calc_2vw border_1vw_grey\">\n                    \n                    <div id=\"element_overflow_x\"  class=\"position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow\">\n                        <div class=\"position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarxhidden inline_flex\">\n                            <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100vw height_100 margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100vw height_100 margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100vw height_100 margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100vw height_100 margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100vw height_100 margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100vw height_100 margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100vw height_100 margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100vw height_100 margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n\n                        </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div id=\"preview_info_scroll_y\">\n\n                <div class=\"position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n                    \n                    \n                        <div class=\"position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbaryhidden\">\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                        </div>\n\n\n                </div>\n\n            </div>\n\n            <div id=\"preview_info_scroll_y_2\">\n\n                <div class=\"position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n                    \n                    \n                        <div class=\"position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbaryhidden\">\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                            <div id=\"bg-character\" class=\"gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left\">\n                                <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\"></div>\n                            </div>\n\n                        </div>\n\n\n                </div>\n\n            </div>\n          </div>\n          \n          <div id=\"info_scroll_y_text\" class=\"\">\n             <div class=\"container scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                <p class=\"p_big\">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n                </p>\n\n             </div>\n          </div>\n\n          <div class=\"info_scroll_x\">\n               <div class=\"position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n                   <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div class=\"position_relative float_left border_1vw_grey bg_white padding_205vw\">\n                              <p class=\"font_size_5vw line_height_5vw text_align_center float_left\">Scene</p>\n                            </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div class=\"position_relative float_left border_1vw_grey bg_white padding_205vw\">\n                              <p class=\"font_size_5vw line_height_5vw text_align_center float_left\">Scene</p>\n                              <p class=\"font_size_5vw line_height_5vw text_align_center float_left\">Another</p>\n\n                              \n                            </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div class=\"position_relative float_left\">\n\n                               <h3>Title, Center</h3>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                              \n                            </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div class=\"position_relative float_left width_50 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n                              <div class=\"position_relative float_left calc_2vw margin_1vw\">\n\n                                <div class=\"position_relative float_left calc_2vw border_1vw_grey bg_white\">\n\n                                   <h3>Title, Center</h3>\n                                    <p>1: title</p>\n                                    <p>2: level</p>\n                                    <p>3: actions</p>\n                                    <p>4: reactions</p>\n                                    <p>5: relation</p>\n                                    <p>6: game over</p>\n                                  \n                                </div>\n                                \n                              </div>\n                              \n                            </div>\n\n                            <div class=\"position_relative float_left width_50 display_webkit_box webkit_box_pack_center webkit_box_align\">\n                               \n                              <div class=\"position_relative float_left calc_2vw margin_1vw\">\n\n                                <div class=\"position_relative float_left calc_2vw border_1vw_grey bg_white\">\n\n                                   <h3>Title, Center</h3>\n                                    <p>1: title</p>\n                                    <p>2: level</p>\n                                    <p>3: actions</p>\n                                    <p>4: reactions</p>\n                                    <p>5: relation</p>\n                                    <p>6: game over</p>\n                                  \n                                </div>\n\n                              </div>\n                              \n                            </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div class=\"position_relative float_left width_50 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n                                <div class=\"position_relative float_left calc_2vw border_1vw_grey bg_white\">\n\n                                   <h3>Title, Center</h3>\n                                    <p>1: title</p>\n                                    <p>2: level</p>\n                                    <p>3: actions</p>\n                                    <p>4: reactions</p>\n                                    <p>5: relation</p>\n                                    <p>6: game over</p>\n                                  \n                              </div>\n                              \n                            </div>\n\n                            <div class=\"position_relative float_left width_50 display_webkit_box webkit_box_pack_center webkit_box_align\">\n                               \n                                <div class=\"position_relative float_left calc_2vw border_1vw_grey bg_white\">\n\n                                   <h3>Title, Center</h3>\n                                    <p>1: title</p>\n                                    <p>2: level</p>\n                                    <p>3: actions</p>\n                                    <p>4: reactions</p>\n                                    <p>5: relation</p>\n                                    <p>6: game over</p>\n                                  \n                                </div>\n                              \n                            </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div class=\"position_relative float_left width_50\">\n\n                               <h3>Title, Center</h3>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                              \n                            </div>\n\n                            <div class=\"position_relative float_left width_50\">\n\n                               <h3>Title, Center</h3>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                              \n                            </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"position_relative width_50 height_100 overflow_y scrollbaryhidden float_left\">\n\n                              <div class=\"position_absolute bottom_0 left_0 calc_6vw padding_2vw border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n                                </p>\n\n                              </div>\n                                            \n\n                            </div>\n                            <div class=\"position_relative width_50 height_100 overflow_y scrollbaryhidden float_left\">\n                              \n                                <div class=\"position_absolute bottom_0 left_0 calc_6vw padding_2vw border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow\">\n\n                                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n                                  </p>\n\n                               </div>\n\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"element_overflow_x_scene\">\n                        <div class=\"position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white\">\n                            <div class=\"width_50 height_100 overflow_y scrollbaryhidden float_left\">\n                                 \n                               <h3>Title, Left Scroll</h3>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                            \n\n                            </div>\n                            <div class=\"width_50 height_100 overflow_y scrollbaryhidden float_left\">\n                                 \n                               <h3>Title, Left Scroll</h3>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                <p>1: title</p>\n                                <p>2: level</p>\n                                <p>3: actions</p>\n                                <p>4: reactions</p>\n                                <p>5: relation</p>\n                                <p>6: game over</p>\n                                            \n\n                            </div>\n                        </div>\n                      </div>\n\n                   </div>\n               </div>\n          </div>\n\n          <!-- socials \n\n\n        -->\n</div>\n    ");
  }

  ;
  return component;
};

var _default = {
  gen: gen
};
exports.default = _default;
},{"../index.js":"index.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style.scss"));

var _events = _interopRequireDefault(require("./imports/events"));

var _elements = _interopRequireDefault(require("./imports/elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

 *Order or operation*

1. Links
    
    '/'

    '/p/:id'
    (post.id === req.params.id)

    '/:id'
    (post.title === req.params.id)

2. onAuthStateChanged

3. DOMContentLoaded
    opening.appendChild
    sequence_Load
    get_dimensions
    handle_play_DOMContentLoaded

4. load
    auth_buffer
    check_for_auth_after_load
        handle_firebase_events
        handle_if_AUTH
            handle_ANIMATION_AUTOMATION (looping animation)
            handle_if_AUTH_checked_CLICK_SCENE_1 (clickable)

    Still has to:
        correct looping animation assets so no player_1 overlapping
        - refreash after sign in/out/register exc.
        - routes?!
        - easy asset change
        - after post/user made
        - Events
        - Modals
        - Guis
        - Game shots
        - sorts
        - filter types
        - card views
            - is_Mobile vs isDesktop
        - home page/route vs post vs users
        - image upload
        - signed in/out ui
            - user_logged_in

        - animation of assets on 24fps loop handle_ANIMATION_AUTOMATION
            player_1
            gui_stage_tv
            gui_stage_lights
            mark
            facer
            logo

5. Scene (interval controlled transition)

6. Shots (Views with events)

7. Set
    - gui_stage_tv
    - gui_stage_lights

*/

/* to dos

    check_ui_after_auth DONE!
    valid users posts!
*/
// Imports
var dev_mode = false;
var checkmark = 0;
var tiny_height = 0;
var tiny_width = 0;
var body = document.getElementById('body');
var auth_has_been_checked = false;
var stored_auth_user_cred = {};
var posts_guides = [];
var upload_details = ""; // Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDE41kN8BeObYTbfb1Ymp9HrZAXD5OZqFQ",
  authDomain: "antenuh-9d2ca.firebaseapp.com",
  databaseURL: "https://antenuh-9d2ca.firebaseio.com",
  projectId: "antenuh-9d2ca",
  storageBucket: "antenuh-9d2ca.appspot.com",
  messagingSenderId: "56750865675",
  appId: "1:56750865675:web:26f53c0aa771186245b60e",
  measurementId: "G-R9DE6SKETE"
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics(); // make auth ref

var auth = firebase.auth(); // make firestore ref

var db = firebase.firestore(); // listenforauth state changes

auth.onAuthStateChanged(function (logged_auth_user) {
  console.log('onAuthStateChanged');

  if (logged_auth_user == null) {
    //alert('logged_auth_user == null');
    get_db_guides();
    console.log('please login');
    auth_has_been_checked = true;
  }

  ;

  if (logged_auth_user != null) {
    //alert('logged_auth_user != null');
    stored_auth_user_cred = logged_auth_user;
    get_db_guides();
    console.log('logined in: ' + stored_auth_user_cred.uid);
    auth_has_been_checked = true;
  }

  ;
});
var post_view = 'card';
var dark_view = false;
var state = {
  data: {
    onload_url: '',
    scene: 0,
    route: 0,
    game: 0,
    time: 0,
    onload_time: 0,
    dark_mode: 0
  },
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
      clientY: 0,
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
      clientX: 0,
      clientY: 0,
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
      clientY: 0,
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
      clientY: 0,
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
    vomit: {
      frame: 1,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
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
    bridge_1: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
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
    bridge_2: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
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
    bridge_3: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
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
    bridge_4: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
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
    bridge_5: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
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
    bridge_6: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
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
    bridge_7: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
      height: 4,
      width: 4,
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
    bridge_8: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
      height: 4,
      width: 8,
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
    bridge_9: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 6,
      clientY: 0,
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
  ux: {
    platform: {
      is_Desktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
      is_Mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    },
    orientation: {
      is_Landscape: window.innerHeight < window.innerWidth,
      is_Portrait: window.innerHeight > window.innerWidth,
      post_view: post_view,
      dark_view: dark_view
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
  modal: {
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
    keys_held: {
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
  }
};

if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
  tiny_height = state.ux.dimensions.height;
}

;

if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
  tiny_width = state.ux.dimensions.width;
}

;
state.ux.platform.is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
state.ux.platform.is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
console.log('index.js from nownigel');

var handle_time = function handle_time() {
  // 1/sec loop
  (function () {
    var interval = 0;
    setInterval(function () {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var date = new Date();
      state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
      state.motion.duration++;
      console.log('duration: ' + state.motion.duration); //handle_render_data_value();
    }, 1000);
  })();
};

var shot_action_single_vomit = function shot_action_single_vomit() {
  if (document.getElementById('shot_1') != null) {
    var shot_1 = document.getElementById('shot_1');
    shot_1.innerHTML = "\n            <div id=\"shot_2_character_1\" class=\"\"></div>\n            <div id=\"shot_2_wall\" class=\"\"></div>\n        ";
  }

  ; // shot_2_character_1 single

  (function () {
    var interval = 1;
    var play = setInterval(function () {
      // shot 2
      if (document.getElementById('shot_2_character_1') != null) {
        document.getElementById('shot_2_character_1').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_' + interval + ' position_absolute margin_auto ';

        if (interval == 7) {
          interval = 0;
        }

        ;
        interval += 1;
      }

      ;

      if (interval == 7) {
        clearInterval(play);
      }

      ;
    }, 1000 / 12);
    play;
  })();
};
/*

let handle_if_AUTH_checked_CLICK_SCENE_1 = () => {
    alert('handle_if_AUTH_checked_CLICK_SCENE_1');
    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                    
                    if (document.getElementById('shots') != null) {
                        shot_start_of_authing();

                    };

                };

                if (interval == 24 * 1) {
                    
                    if (document.getElementById('shots') != null) {
                        shot_mid_of_authing();

                    };

                };
               
                if (interval == 24 * 2) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        shot_end_of_authing();
                    };

                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let handle_if_AUTH_checked_CLICK_SCENE_2 = () => {
    alert('handle_if_AUTH_checked_CLICK_SCENE_2');
    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                    
                    if (document.getElementById('shots') != null) {
                        shot_start_of_authing();

                    };

                };
                
                if (interval == 24 * 1) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        shot_end_of_authing();
                    };

                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let handle_if_AUTH_checked_CLICK_SCENE_3 = () => {
    alert('handle_if_AUTH_checked_CLICK_SCENE_3');
    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                    
                    if (document.getElementById('shots') != null) {
                        shot_start_of_authing();

                    };

                };
                
                if (interval == 24 * 1) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        shot_end_of_authing();
                    };

                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};


let shot_game_start = () => {
    
    if (document.getElementById('set') != null) {
        let set = document.getElementById('set');
        set.innerHTML = `
            <div id="gui_stage_tv" class=""></div>
            <div id="gui_stage_lights" class=""></div>
        `
    };

    if (document.getElementById('scene') != null) {
        let scene = document.getElementById('scene');
        scene.innerHTML = `
            <div id="player_1" class=""></div>
            <div id="mark" class=""></div>
            <div id="logo" class=""></div>
        `
    };
}

let shot_game_end = () => {
    
    if (document.getElementById('set') != null) {
        let set = document.getElementById('set');
        set.innerHTML = `
        `
    };

    if (document.getElementById('scene') != null) {
        let scene = document.getElementById('scene');
        scene.innerHTML = `
        `
    };
}


let shot_action_single_wall = () => {

    //alert('shot_action_single_wall');

    if (document.getElementById('shot_1') != null) {
    };

    // 24/fps loop
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_wall') != null) {

                    document.getElementById('shot_2_wall').classList = (' width_100 height_100 top_0 right_0 bottom_0 left_0 gui_wall_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 6) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                if (interval == 6) {
                    clearInterval(play)
                };

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let shot_action_single_vomit = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
            <div id="shot_2_character_1" class=""></div>
            <div id="shot_2_wall" class=""></div>
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_1') != null) {

                    document.getElementById('shot_2_character_1').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 7) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 7) {
                    clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_enter = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="animated1 enterBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_action_single_enter_character" class=""></div>
            <div id="shot_action_single_enter_logo" class=""></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_enter_character') != null) {

                    document.getElementById('shot_action_single_enter_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_enter_logo') != null) {

                    document.getElementById('shot_action_single_enter_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_idle = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_action_single_idle_character" class=""></div>
            <div id="shot_action_single_idle_logo" class=""></div>
        </div>
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_idle_character') != null) {

                    document.getElementById('shot_action_single_idle_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_idle_logo') != null) {

                    document.getElementById('shot_action_single_idle_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_leave = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="animated1 leaveBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_action_single_leave_character" class=""></div>
            <div id="shot_action_single_leave_logo" class=""></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_leave_character') != null) {

                    document.getElementById('shot_action_single_leave_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_leave_logo') != null) {

                    document.getElementById('shot_action_single_leave_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_blank = () => {

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        `

        let element = document.createElement('div');

        element.setAttribute("id", `shot_1`);
        element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
        element.innerHTML = `
            <div id="nigga_click"></div>
        `
        element.addEventListener("click", function(event) {
            act_4();
        });

        document.getElementById('shots').appendChild(
            element
        );

    };

}

let shot_action_single_blink = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
            <div id="vomit_face" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto"></div>
        `
    };

    // vomit_face single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('vomit_face') != null) {

                    document.getElementById('vomit_face').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 7) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 7) {
                    clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}


let shot_at_animation_begin_1 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_2 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_3 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_4 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

            <div class="animated1 enterBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_logo_type_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_5 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_logo_type_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_6 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        
        <div id="shot_facer_button_character_1"></div>
        <div id="shot_facer_button_character_2"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_to_scene_facer_button = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="shot_facer_button_character_1"></div>
        <div id="shot_facer_button_character_2"></div>
        <div id="shot_facer_button_character_3"></div>
    `
    element.addEventListener("click", function(event) {
        act_4();
    });

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_to_scene_1 = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="shot_1_character_1"></div>
        <div id="shot_1_character_2"></div>
        <div id="shot_1_character_3"></div>
        <div id="shot_1_character_4"></div>
        <div id="shot_1_character_5"></div>
        <div id="shot_1_character_6"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );

    document.getElementById('shot_1_character_3').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_1();
    });
    document.getElementById('shot_1_character_4').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_2();
    });
    document.getElementById('shot_1_character_5').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_3();
    });
    document.getElementById('shot_1_character_6').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_3();
    });
}

let action_shot_single_1 = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_wall') != null) {

                    document.getElementById('shot_2_wall').classList = (' width_100 height_100 top_0 right_0 bottom_0 left_0 gui_wall_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 6) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                if (interval == 6) {
                    clearInterval(play)
                };

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let action_shot_mix = () => {

    
    // 24/fps loop
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_1') != null) {

                    document.getElementById('shot_2_character_1').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_'+state.interaction.vomit.frame+ ' position_absolute margin_auto ');
                            
                    if (state.interaction.vomit.frame == 6) {
                        state.interaction.vomit.frame = 0;
                        action_shot_single_1();
                    };
                
                    state.interaction.vomit.frame += 1;
                };

                interval += 1;

                if (interval == 12) {
                    clearInterval(play)
                };

            }, (500));

            play;
    })();
}

let shot_to_scene_2 = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="shot_2_wall"></div>
        <div id="shot_2_character_1"></div>
        <div id="shot_2_character_2"></div>
        <div id="shot_2_character_3"></div>
        <div id="shot_2_character_4"></div>
        <div id="shot_2_character_5"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );

    document.getElementById('shot_2_character_3').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_1();
    });
    document.getElementById('shot_2_character_4').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_2();
    });
    document.getElementById('shot_2_character_5').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_3();
    });

    action_shot_mix();

}

let shot_start_of_authing = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="start_graphic_1" class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
        <div id="start_graphic_2" class="width_50 height_50 gui_logo_type_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_mid_of_authing = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="start_graphic_1" class="animated1 leaveTop width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
        <div id="start_graphic_2" class="animated1 leaveTop width_50 height_50 gui_logo_type_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_end_of_authing = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="facer_1"></div>
        <div id="facer_2"></div>
        <div id="facer_buttons"></div>
    `


    document.getElementById('shots').appendChild(
        element
    );


    // facer_buttons
    
    if (document.getElementById('facer_buttons') != null) {
        document.getElementById('facer_buttons').addEventListener("click", function(event) {
            alert('yup facer_buttons');

            if (document.getElementById('set') != null) {
                let set = document.getElementById('set');
                set.innerHTML = `
                    <div id="gui_stage_tv" class=""></div>
                    <div id="gui_stage_lights" class=""></div>
                `
            };

            if (document.getElementById('scene') != null) {
                let scene = document.getElementById('scene');
                scene.innerHTML = `
                    <div id="player_1" class=""></div>
                    <div id="mark" class=""></div>
                    <div id="logo" class=""></div>
                `
            };

            shot_to_scene_facer_button();
        });
    }
}

let act_4_shot_enter = () => {

    
    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="animated1 enterBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="act_4_enter_character" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto"></div>
            <div id="act_4_enter_logo" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_enter_character') != null) {

                    document.getElementById('act_4_enter_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_enter_logo') != null) {

                    document.getElementById('act_4_enter_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let act_4_shot_mid = () => {

    
    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="act_4_shot_mid_character" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto"></div>
            <div id="act_4_shot_mid_logo" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_mid_character') != null) {

                    document.getElementById('act_4_shot_mid_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_mid_logo') != null) {

                    document.getElementById('act_4_shot_mid_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let act_4_shot_ending = () => {

    
    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="animated1 leaveBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="act_4_shot_ending_character" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto"></div>
            <div id="act_4_shot_ending_logo" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_ending_character') != null) {

                    document.getElementById('act_4_shot_ending_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_ending_logo') != null) {

                    document.getElementById('act_4_shot_ending_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let act_4_shot_buttons = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="act_4_shot_buttons_button_1" class=""></div>
            <div id="act_4_shot_buttons_button_2" class=""></div>
            <div id="act_4_shot_buttons_button_3" class=""></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_buttons_button_1') != null) {

                    document.getElementById('act_4_shot_buttons_button_1').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_continue '+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_buttons_button_2') != null) {

                    document.getElementById('act_4_shot_buttons_button_2').classList = (' width_33 height_50 top_0 right_0 bottom_0 gui_text_continue '+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_buttons_button_3') != null) {

                    document.getElementById('act_4_shot_buttons_button_3').classList = (' width_33 height_50 top_0 bottom_0 left_0 gui_text_continue '+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let act_4 = () => {
    //alert('act_4');
    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                    
                    if (document.getElementById('shots') != null) {
                        act_4_shot_enter();

                    };

                };
                
                if (interval == 24 * 1) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        act_4_shot_mid();
                    };
                };

                if (interval == 24 * 2) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        act_4_shot_ending();
                    };
                };


                if (interval == 24 * 3) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        act_4_shot_buttons();
                    };

                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

*/


var shot_TEXT_load_ACTION_leaveBottom = function shot_TEXT_load_ACTION_leaveBottom() {
  var shots = document.getElementById('shots');
  shots.innerHTML = "";
  var element = document.createElement('div');
  element.setAttribute("id", "shot_1");
  element.classList = "width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute";
  element.innerHTML = "\n        <div id=\"\" class=\"\">\n\n            <div class=\"animated1 leaveBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute\">\n                <div id=\"shot_TEXT_load_ACTION_leaveBottom\" class=\"width_50 height_50  top_0 right_0 bottom_0 left_0 margin_auto position_absolute\"></div>\n            </div>\n\n        </div>\n    ";
  document.getElementById('shots').appendChild(element); // shot_TEXT_load_ACTION_leaveBottom loop

  (function () {
    var interval = 0;
    var play = setInterval(function () {
      // shot 2
      if (document.getElementById('shot_TEXT_load_ACTION_leaveBottom') != null) {
        document.getElementById('shot_TEXT_load_ACTION_leaveBottom').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_' + interval + ' position_absolute margin_auto ';

        if (interval == 4) {
          interval = 0;
        }

        ;
        interval += 1;
      }

      ;
      /*
      if (interval == 4) {
          clearInterval(play)
      };
      */
    }, 1000 / state.motion.framerate);
    play;
  })();
};

var shot_action_preloader = function shot_action_preloader() {
  var preloader = document.getElementById('preloader');
  preloader.innerHTML = "";
  var element = document.createElement('div');
  element.setAttribute("id", "preloader_1");
  element.classList = "width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute";
  element.innerHTML = "\n        <div class=\" width_100 height_100 bottom_0 left_0 margin_auto position_absolute\">\n            <div id=\"shot_action_preloader\" class=\"width_50 height_50 gui_text_loading_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute\"></div>\n        </div>\n    ";
  element.addEventListener("click", function (event) {
    alert('shot_1 yup');
  });
  document.getElementById('preloader').appendChild(element); // shot_1_character_1 loop

  (function () {
    var interval = 1;
    var play = setInterval(function () {
      // shot 2
      if (document.getElementById('shot_action_preloader') != null) {
        // loading
        if (interval == 1) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 2) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 3) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 4) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_4 position_absolute margin_auto ';
        }

        ; // loaded

        if (interval == 5) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 6) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 7) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 8) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_4 position_absolute margin_auto ';
        }

        ; // face

        if (interval == 9) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 10) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 11) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 12) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_4 position_absolute margin_auto ';
        }

        ; // logo

        if (interval == 13) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 14) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 15) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 16) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_4 position_absolute margin_auto ';
        }

        ; // blink

        if (interval == 17) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 18) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 19) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 20) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_4 position_absolute margin_auto ';
        }

        ; // vomit

        if (interval == 21) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 22) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 23) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 24) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_4 position_absolute margin_auto ';
        }

        ;

        if (interval == 25) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_5 position_absolute margin_auto ';
        }

        ;

        if (interval == 26) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_6 position_absolute margin_auto ';
        }

        ; // wall

        if (interval == 27) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_wall_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 28) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_wall_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 29) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_wall_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 30) {
          document.getElementById('shot_action_preloader').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_wall_4 position_absolute margin_auto ';
        }

        ;
        interval += 1;
      }

      ;

      if (interval == 31) {
        document.getElementById('shot_action_preloader').classList = ' ';
        has_loaded = true;
        clearInterval(play);
      }

      ;
    }, 1000 / state.motion.framerate);
    play;
  })();
};

var shot_action_single_loading = function shot_action_single_loading() {
  var shots = document.getElementById('shots');
  shots.innerHTML = "";
  var element = document.createElement('div');
  element.setAttribute("id", "shot_1");
  element.classList = "width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute";
  element.innerHTML = "\n        <div class=\" width_100 height_100 bottom_0 left_0 margin_auto position_absolute\">\n            <div id=\"gui_text_loading\" class=\"width_50 height_50 gui_text_loading_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute\"></div>\n        </div>\n    ";
  element.addEventListener("click", function (event) {
    alert('shot_1 yup');
  });
  document.getElementById('shots').appendChild(element); // shot_1_character_1 loop

  (function () {
    var interval = 0;
    var play = setInterval(function () {
      // shot 2
      if (document.getElementById('gui_text_loading') != null) {
        document.getElementById('gui_text_loading').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_' + interval + ' position_absolute margin_auto ';

        if (interval == 4) {
          interval = 0;
        }

        ;
        interval += 1;
      }

      ;
      /*
      if (interval == 4) {
          clearInterval(play)
      };
      */
    }, 1000 / state.motion.framerate);
    play;
  })();
};

var shot_action_single_loaded = function shot_action_single_loaded() {
  var shots = document.getElementById('shots');
  shots.innerHTML = "";
  var element = document.createElement('div');
  element.setAttribute("id", "shot_1");
  element.classList = "width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute";
  element.innerHTML = "\n        \n            <div class=\"width_100 height_100 bottom_0 left_0 margin_auto position_absolute\">\n                <div id=\"gui_text_loaded\" class=\"width_50 height_50 gui_text_loaded_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute\"></div>\n            </div>\n\n    ";
  element.addEventListener("click", function (event) {
    alert('shot_1 yup');
  });
  document.getElementById('shots').appendChild(element); // shot_1_character_1 loop

  (function () {
    var interval = 0;
    var play = setInterval(function () {
      // shot 2
      if (document.getElementById('gui_text_loaded') != null) {
        document.getElementById('gui_text_loaded').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_' + interval + ' position_absolute margin_auto ';

        if (interval == 4) {
          interval = 0;
        }

        ;
        interval += 1;
      }

      ;
      /*
      if (interval == 4) {
          clearInterval(play)
      };
      */
    }, 1000 / state.motion.framerate);
    play;
  })();
};

var handle_play_DOMContentLoaded = function handle_play_DOMContentLoaded() {
  document.getElementById('opening').appendChild(_elements.default.gen('basics'));
  get_dimensions(); // 24/fps loop

  var fps = 24;
  var loading_buffer = .5;

  (function () {
    var interval = 0;
    var play = setInterval(function () {
      if (interval == 0) {
        if (document.getElementById('shots') != null) {
          shot_action_preloader();
        }

        ;
      }

      ;

      if (interval < fps) {
        if (document.getElementById('shots') != null) {
          shot_action_single_loading();
        }

        ;
      }

      ;

      if (interval == fps * loading_buffer) {
        if (document.getElementById('shots') != null) {
          shot_action_single_loaded();
        }

        ;
        clearInterval(play);
      }

      ; //check "load" for next scene
      //console.log('handle_play_DOMContentLoaded: ' + interval);

      interval += 1;
    }, 1000 / state.motion.framerate);
    play;
  })();
};

var handle_ANIMATION_AUTOMATION = function handle_ANIMATION_AUTOMATION() {
  // 24/fps loop
  (function () {
    var interval = 0;
    setInterval(function () {
      if (state.ux.platform.is_Desktop == true) {}

      ; // start loops

      if (document.getElementById('player_1') != null) {
        // svg classlist
        if (state.interaction.player_1.stance == 0) {
          if (state.interaction.player_1.angle == 0) {
            document.getElementById('player_1').classList = ' width_100 height_100 gui_character_body_right_' + state.interaction.player_1.frame + ' position_absolute margin_auto ';
          }

          ;

          if (state.interaction.player_1.angle == 1) {
            document.getElementById('player_1').classList = ' width_100 height_100 gui_character_body_right_' + state.interaction.player_1.frame + ' position_absolute margin_auto ';
          }

          ;
        }

        ; // automated motion

        if (state.interaction.player_1.cycles.walking == true) {
          // stance: up
          if (state.interaction.player_1.stance == 3) {
            // player walking and pause
            if (state.interaction.player_1.clientY < 3) {
              state.interaction.player_1.clientY += 1 / 32;
            }

            ;
          }

          ; // stance: down

          if (state.interaction.player_1.stance == 2) {
            // player walking and pause
            if (state.interaction.player_1.clientY > -4) {
              state.interaction.player_1.clientY -= 1 / 32;
            }

            ;
          }

          ; // stance: right

          if (state.interaction.player_1.stance == 1) {
            // player walking and pause
            if (state.interaction.player_1.clientX < 8) {
              state.interaction.player_1.clientX += 1 / 32;
            }

            ;
          }

          ; // stance: left

          if (state.interaction.player_1.stance == 0) {
            // player walking and pause
            if (state.interaction.player_1.clientX > 0) {
              state.interaction.player_1.clientX -= 1 / 32;
            }

            ;
          }

          ;
        }

        ; // left

        if (state.interaction.player_1.clientX <= 0 && state.interaction.player_1.cycles.walking == true) {
          state.interaction.player_1.clientX = 0; //state.interaction.player_1.cycles.walking = false;
          // reset face

          state.interaction.player_1.stance = 1; // auto walk

          state.interaction.player_1.clientX += 1 / 32;
        }

        ; // right

        if (state.interaction.player_1.clientX >= 7 && state.interaction.player_1.cycles.walking == true) {
          state.interaction.player_1.clientX = 7; //state.interaction.player_1.cycles.walking = false;
          // reset face

          state.interaction.player_1.stance = 0; // auto walk

          state.interaction.player_1.clientX -= 1 / 32;
        }

        ; // automated moving
        // size & position

        var player_1 = document.getElementById('player_1');
        player_1.style = 'height: ' + state.interaction.player_1.height * (tiny_height / 8) + 'px;' + 'width: ' + state.interaction.player_1.width * (tiny_width / 8) + 'px;' + 'bottom: ' + state.interaction.player_1.clientY * (tiny_height / 8) + 'px;' + 'left: ' + state.interaction.player_1.clientX * (tiny_width / 8) + 'px;';
      }

      ; // frame reset

      if (state.interaction.player_1.frame == 4) {
        state.interaction.player_1.frame = 0;
      }

      ; // frame increase

      state.interaction.player_1.frame += 1;
      state.motion.frame += 1; //console.log('state.motion.frame: ' + state.motion.frame)
    }, 1000 / state.motion.framerate);
  })();
};

var act_3 = function act_3() {
  // 24/fps loop !! initial !!
  (function () {
    var interval = 0;
    var play = setInterval(function () {
      if (interval == 24 * 0) {
        if (document.getElementById('shots') != null) {
          //alert('shot_TEXT_load_ACTION_leaveBottom');
          shot_TEXT_load_ACTION_leaveBottom();

          if (dev_mode) {
            checkmark += 1;
            alert(checkmark + '/6 (act_3.0)');
            shot_action_single_vomit();
          }

          ;
        }

        ;
      }

      ;

      if (interval == 24 * 1) {
        if (document.getElementById('shots') != null) {
          if (dev_mode) {
            checkmark += 1;
            alert(checkmark + '/6 (act_3.1?)');
            shot_action_single_vomit();
          }

          ;
        }

        ;
      }

      ;
      /*
       if ( interval == (24 * 1)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_game_start');
              shot_game_start();
          };
      };
       if ( interval == (24 * 4)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_game_start');
              shot_game_end();
          };
      };
       if ( interval == (24 * 4)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_blink()
              //shot_home();
          };
      };
       if ( interval == (24 * 6)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_vomit()
              //shot_home();
          };
      };
       if ( interval == (24 * 8)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_blink()
              //shot_home();
          };
      };
       if ( interval == (24 * 10)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_vomit()
              //shot_home();
          };
      };
       if ( interval == (24 * 12)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_wall();
              //shot_home();
          };
      };
       if ( interval == (24 * 14)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_enter()
              //shot_home();
          };
      };
       if ( interval == (24 * 16)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_idle()
              //shot_home();
          };
      };
       if ( interval == (24 * 18)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_leave()
              //shot_home();
          };
      };
       if ( interval == (24 * 20)) {
          if (document.getElementById('shots') != null) {
              //alert('shot_TEXT_load_ACTION_leaveBottom');
              shot_action_single_blank()
              //shot_home();
          };
      };
       */
      //console.log('handle_if_AUTH: ' + interval);

      interval += 1;
    }, 1000 / state.motion.framerate);
    play;
  })();
};

var handle_INITIAL_LOOP = function handle_INITIAL_LOOP() {
  if (dev_mode) {
    checkmark += 1;
    alert(checkmark + '/6 (handle_INITIAL_LOOP) Begin after handle_firebase_events, handle_ANIMATION_AUTOMATION');
  }

  ;
  check_local_user();
  act_3();
}; // after DOM, LOAD, AUTH (handle_if_AUTH_ACT_1)


var handle_if_AUTH_ACT_2 = function handle_if_AUTH_ACT_2() {
  // add single events
  handle_firebase_events(); // crank up the 24fps machine

  handle_ANIMATION_AUTOMATION();

  if (dev_mode) {
    checkmark += 1;
    alert(checkmark + '/6 ( after dom, load, auth_has_been_checked, handle_firebase_events && handle_ANIMATION_AUTOMATION)');
  }

  ; // start sequence of scenes for localStorage.user!!!
  // localStorage.user new_unlogged vs returning_unlogged 

  handle_INITIAL_LOOP();
}; // sorting


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

var fb_sorted_library = function fb_sorted_library(the_arr, x) {
  return the_arr.sort(find_sort(x));
};

var filtered_posts_guides = [];

var handle_firebase_events = function handle_firebase_events() {
  // filter by title
  if (document.getElementById('element_input_filter') != null) {
    document.getElementById('element_input_filter').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        get_db_guides();
      }, 0);
    });
  }

  ; // post view controls

  if (document.getElementById('pop_bottom') != null) {
    document.getElementById('pop_bottom').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
        get_dimensions();
      }, 0);
    });
  }

  ; // post view controls

  if (document.getElementById('pop_top') != null) {
    document.getElementById('pop_top').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        state.modal.pop.top.transform = !state.modal.pop.top.transform;
        get_dimensions();
      }, 0);
    });
  }

  ; // post view controls

  if (document.getElementById('pop_left') != null) {
    document.getElementById('pop_left').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        state.modal.pop.left.transform = !state.modal.pop.left.transform;
        get_dimensions();
      }, 0);
    });
  }

  ; // post view controls

  if (document.getElementById('pop_right') != null) {
    document.getElementById('pop_right').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        state.modal.pop.right.transform = !state.modal.pop.right.transform;
        get_dimensions();
      }, 0);
    });
  }

  ; // post view controls

  if (document.getElementById('view_card') != null) {
    document.getElementById('view_card').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        post_view = 'card';
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('view_list') != null) {
    document.getElementById('view_list').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        post_view = 'list';
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('view_numbered') != null) {
    document.getElementById('view_numbered').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        post_view = 'numbered';
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('view_read') != null) {
    document.getElementById('view_read').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        post_view = 'read';
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('view_fifth') != null) {
    document.getElementById('view_fifth').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        post_view = 'fifth';
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('view_sixth') != null) {
    document.getElementById('view_sixth').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        post_view = 'sixth';
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('view_eighth') != null) {
    document.getElementById('view_eighth').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        post_view = 'eighth';
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('dark_view_toggle') != null) {
    document.getElementById('dark_view_toggle').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('interactions_button_1') != null) {
    document.getElementById('interactions_button_1').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        //dark_view = !dark_view;
        state.modal.pop.top.transform = !state.modal.pop.top.transform;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('interactions_button_2') != null) {
    document.getElementById('interactions_button_2').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        modal_reset();
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('interactions_button_3') != null) {
    document.getElementById('interactions_button_3').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        modal_reset();
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('interactions_button_4') != null) {
    document.getElementById('interactions_button_4').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        modal_reset();
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('a_big_loading') != null) {
    document.getElementById('a_big_loading').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('a_big_home') != null) {
    document.getElementById('a_big_home').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('a_big_latest') != null) {
    document.getElementById('a_big_latest').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('a_big_start') != null) {
    document.getElementById('a_big_start').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('a_big_learn') != null) {
    document.getElementById('a_big_learn').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('a_big_planner') != null) {
    document.getElementById('a_big_planner').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('a_big_contact') != null) {
    document.getElementById('a_big_contact').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;

  if (document.getElementById('a_big_welcome') != null) {
    document.getElementById('a_big_welcome').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        dark_view = !dark_view;
        get_dimensions();
      }, 0);
    });
  }

  ;
};

var valid_user = {};
var user_logged_in = false;

var check_ui_after_auth = function check_ui_after_auth() {
  // if logged
  if (user_logged_in == true) {
    //alert('user_logged_in == true, : ' + valid_user.id);
    localStorage.setItem("user", "logged_user");
    localStorage.setItem("user_id", valid_user.id);
    document.getElementById('account-details').innerHTML = "\n            id: ".concat(valid_user.id, "\n            title: ").concat(valid_user.title, "\n            email: ").concat(valid_user.email, "\n        ");
    document.getElementById('modal-edit').innerHTML = "\n            \n                     <form id=\"edit-form\">\n                        <p>edit profile</p>\n                        <input placeholder=\"title\" type=\"text\" id=\"title\"/>\n                        <div id=\"edit_button\" class=\"\">edit</div>\n\n                        <div id=\"signout\" alt=\"sign out\">\n                           sign out\n                        </div>\n                        <div id=\"delete_button\" alt=\"sign out\">\n                           delete\n                        </div>\n\n                     </form> \n        ";
    document.getElementById('modal-create').innerHTML = "\n            <form id=\"create-form\">\n                <p>modal-create</p>\n                \n                <input class=\"display_none\" type=\"file\" value=\"upload\" id=\"fileButton\" accept=\"image/*\" title=\"&nbsp;\"/>\n                <input placeholder=\"title\" type=\"text\" id=\"create_title\" required />\n                <input placeholder=\"child\" type=\"text\" id=\"create_child\" required />\n                <input placeholder=\"content\" type=\"text\" id=\"create_content\" required />\n                <progress value=\"0\" max=\"100\" id=\"uploader\">0%</progress>\n                <p id=\"upload_progress\">images only</p>\n                <label for=\"fileButton\">Select file</label>\n                <div id=\"upload_details\"></div>\n                <div id=\"create_button\" class=\"\">create</div>\n             </form>\n        ";
    document.getElementById('modal-signup').innerHTML = "";
    document.getElementById('modal-signin').innerHTML = "";
  }

  ; // if not logged

  if (user_logged_in == false) {
    //alert('user_logged_in == false');
    document.getElementById('account-details').innerHTML = "please log in";
    document.getElementById('modal-edit').innerHTML = "";
    document.getElementById('modal-create').innerHTML = "";
    document.getElementById('modal-signup').innerHTML = "\n            \n                     <form id=\"signup-form\">\n                     <p>modal-signup</p>\n                        <input placeholder=\"email\" type=\"email\" id=\"signup-email\" required />\n                        <input placeholder=\"password\" type=\"password\" id=\"signup-password\" required />\n                        <div id=\"signup_submit\" class=\"\">sign up</div>\n                     </form>\n        ";
    document.getElementById('modal-signin').innerHTML = "\n            \n            <form id=\"signin-form\">\n                <p>modal-signin</p>\n                <input placeholder=\"signin-email\" type=\"signin-email\" id=\"signin-email\" required />\n                <input placeholder=\"signin-password\" type=\"signin-password\" id=\"signin-password\" required />\n                <div id=\"signin\" class=\"\">sign in</div>\n            </form>\n        ";
  }

  ;

  if (document.getElementById('signup-form') != null) {
    // sign up / auth / create user
    var signup_form = document.getElementById('signup-form');

    var _signup_email = document.getElementById('signup-email');

    var _signup_password = document.getElementById('signup-password');

    var signup_submit = document.getElementById('signup_submit');
    signup_submit.addEventListener('click', function (event) {
      event.preventDefault();
      auth.createUserWithEmailAndPassword(_signup_email.value, _signup_password.value).then(function (cred) {
        db_create_user(cred);
      });
    });
  }

  ;

  if (document.getElementById('signin-form') != null) {
    // sign in / auth
    var signin_form = document.getElementById('signin-form');
    var signin_email = document.getElementById('signin-email');
    var signin_password = document.getElementById('signin-password');
    var signin = document.getElementById('signin');
    signin.addEventListener('click', function (event) {
      event.preventDefault();
      auth.signInWithEmailAndPassword(signin_email.value, signin_password.value).then(function (cred) {
        signin_email.value = "";
        signin_password.value = "";
      });
    });
  }

  ;

  if (document.getElementById('uploader') != null) {
    // upload
    var uploader = document.getElementById('uploader');
    var upload_progress = document.getElementById('upload_progress');
    var fileButton = document.getElementById('fileButton');
    fileButton.addEventListener('change', function (event) {
      // assign metadata
      var metadata = {
        customMetadata: {
          'location': 'Yosemite, CA, USA',
          'activity': 'Hiking'
        }
      }; // get file

      var file = event.target.files[0]; // create a storage ref

      var storageRef = firebase.storage().ref('sweet_gifs/' + file.name); // upload file

      var task = storageRef.put(file, metadata); // upload progress bar

      task.on('state_changed', function progress(snapshot) {
        var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log('Upload is ' + progress + '% done');
        uploader.value = progress;
        upload_progress.innerHTML = progress;
      }, function error(err) {}, function complete(snapshot) {
        setTimeout(function () {
          uploader.value = 0;
          upload_progress.innerHTML = "";
        }, 2000); // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          upload_details = downloadURL;
          document.getElementById('upload_details').innerHTML = "upload complete, available at: ".concat(upload_details);
          document.getElementById('upload_details').innerHTML += "\n                        <div id=\"uploaded_image\" style=\"background-image: url(".concat(upload_details, ")\">\n                        </div>");
        });
      });
    });
  }

  ;

  if (document.getElementById('signout') != null) {
    // signout / un-auth
    var signout = document.getElementById('signout');
    signout.addEventListener('click', function (event) {
      event.preventDefault();
      auth.signOut().then(function () {
        alert('signout');
        console.log('logged out');
        user_logged_in = false;
        localStorage.setItem("user", "unlogged_user");
        localStorage.setItem("user_id", localStorage.user);
        get_db_guides();
      });
    });
  }

  ;

  if (document.getElementById('edit_button') != null) {
    document.getElementById('edit_button').addEventListener('click', function (event) {
      event.preventDefault();
      db_update_user("users", stored_auth_user_cred.uid);
    });
    document.getElementById('delete_button').addEventListener('click', function (event) {
      event.preventDefault();
      db_delete_user("users", stored_auth_user_cred.uid);
    });
    document.getElementById('create_button').addEventListener('click', function (event) {
      event.preventDefault();
      db_create_post("users");
    });
  }

  ;

  if (dev_mode) {
    checkmark += 1;
    alert(checkmark + '/6 (check_ui_after_auth -> FB CRUD, AUTH, AUTO SIGNED, DATA RENDERED)');
  }

  ;
}; // retrieve


var get_db_guides = function get_db_guides() {
  //db.settings({timestampsInSnapshots: true});
  db.collection('users').get().then(function (snapshot) {
    console.log('snapshot.docs: ');
    console.log(snapshot.docs);
    posts_guides = [];
    filtered_posts_guides = [];
    document.getElementById('posts_all').innerHTML = "";
    document.getElementById('posts_filtered').innerHTML = "";
    snapshot.docs.forEach(function (doc) {
      var items = doc.data();
      posts_guides.push(items);
    });

    if (stored_auth_user_cred.uid != null) {
      console.log('stored_auth_user_cred.uid');
      console.log(stored_auth_user_cred.uid);
      console.log('posts_guides');
      console.log(posts_guides); // match auth user with database collection: users

      valid_user = {}; //valid_user_post = [];

      user_logged_in = false;
      console.log('check match from posts_guides[i]');

      for (var i = 0; i < posts_guides.length; i++) {
        console.log(posts_guides[i]);

        if (posts_guides[i].id == stored_auth_user_cred.uid) {
          valid_user = posts_guides[i];
          user_logged_in = true;
        }
      }

      ;
      /*
      for (var i = 0; i < posts_guides.length; i++) {
             console.log('posts_guides[i]');
             console.log(posts_guides[i]);
           if (valid_user.id == posts_guides[i].author_id) {
             alert('found post by user: ' + posts_guides[i]);
              valid_user_post.push(posts_guides[i]);
          }
      }
       for (var i = 0; i < valid_user_post.length; i++) { 
         console.log(valid_user_post[i]);
      };
       valid_user_post.forEach(post => {
          document.getElementById('posts_users').appendChild(
              elements.Generate_new_li_post(post)
          );
      });
      */

      console.log('valid_user');
      console.log(valid_user);
    }

    ; // set ui depending on user log status

    check_ui_after_auth();
    /*
    fb_sorted_library(posts_guides, 'timedown').forEach(post => {
        document.getElementById('posts_random').appendChild(
            elements.Generate_new_li_post(post)
        );
    });
    */
    // render SORTED post to view 

    fb_sorted_library(posts_guides, 'titleup').forEach(function (post) {
      console.log(post);
      var element = document.createElement('div');
      element.setAttribute("id", "post");
      element.classList = "width_100 margin_auto position_relative float_left";
      element.innerHTML = "\n                <div class=\"feat_img\">\n                    <div class=\"container\"></div>\n                </div>\n                <h2>\n                    post title: ".concat(post.title, "\n                </h2>\n                <p>\n                    post id: ").concat(post.id, "\n                </p>\n                <a href=\"https://antenuh.com/p/").concat(post.id, "\">see post</a>\n            ");
      element.addEventListener("click", function (event) {
        alert('post');
        post_up = !post_up;
        get_classes();
      });
      document.getElementById('posts_all').appendChild(element);
    }); //  FILTERED BY TITLE

    if (filtered_posts_guides != null) {
      for (var i = 0; i < posts_guides.length; i++) {
        if ( // title filter
        posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value) || // if filter
        posts_guides[i].id.toString().includes(document.getElementById('element_input_filter').value)) {
          filtered_posts_guides.push(posts_guides[i]);
        }

        ;
        console.log('filtered_posts_guides[i]');
        console.log(filtered_posts_guides[i]);
      }

      ;
    }

    ; // render SORTED && FILTERED BY TITLE post to view 

    fb_sorted_library(filtered_posts_guides, 'titleup').forEach(function (post) {
      console.log(post);
      var element = document.createElement('div');
      element.setAttribute("id", "post");
      element.classList = "width_100 margin_auto position_relative float_left";
      element.innerHTML = "".concat(post.id, "\n            ");
      element.addEventListener("click", function (event) {
        alert('delete post');
        db_delete_user("users", post.id);
      });
      document.getElementById('posts_filtered').appendChild(element);
    }); //  FILTERED BY TITLE *USER ONLY*

    var filtered_posts_guides_user_only = [];

    if (filtered_posts_guides_user_only != null) {
      for (var i = 0; i < posts_guides.length; i++) {
        if ( // title filter
        posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value) && // if filter
        posts_guides[i].child == 'user') {
          filtered_posts_guides_user_only.push(posts_guides[i]);
        }

        ;
        console.log('filtered_posts_guides_user_only[i]');
        console.log(filtered_posts_guides_user_only[i]);
      }

      ;
    }

    ; // render SORTED post to view 

    document.getElementById('posts_all_user_only').innerHTML = "";
    fb_sorted_library(filtered_posts_guides_user_only, 'titleup').forEach(function (post) {
      console.log(post);
      var element = document.createElement('div');
      element.setAttribute("id", "post");
      element.classList = "width_100 margin_auto position_relative float_left";
      element.innerHTML = "\n                <div class=\"feat_img\">\n                    <div class=\"container\"></div>\n                </div>\n                <h2>\n                    user title: ".concat(post.title, "\n                </h2>\n                <p>\n                    user id: ").concat(post.id, "\n                </p>\n                <a href=\"https://antenuh.com/p/").concat(post.id, "\">see post</a>\n            ");
      element.addEventListener("click", function (event) {
        alert('post');
        post_up = !post_up;
        get_classes();
      });
      document.getElementById('posts_all_user_only').appendChild(element);
    });
    console.log('posts_guides');
    console.log(posts_guides);
  });
}; // create post


var db_create_post = function db_create_post() {
  var date = new Date();
  var ref = db.collection('users').doc();
  var id = ref.id;
  var featured_image;

  if (upload_details == "") {
    featured_image = "https://firebasestorage.googleapis.com/v0/b/nownigel-67004.appspot.com/o/sweet_gifs%2FE813A0D5-E695-4AA8-B761-6D340C271F5D.jpeg?alt=media&token=0b501f8f-8fd4-43bd-a2ee-6ddeac61b78c";
  }

  ;
  var create_title = document.getElementById('create_title');
  var create_child = document.getElementById('create_child');
  var create_content = document.getElementById('create_content');
  db.collection('users').doc(ref.id).set({
    title: create_title.value,
    child: create_child.value,
    content: create_content.value,
    image: featured_image,
    video: create_content.value,
    likes: 0,
    views: 0,
    time: date.getTime(),
    id: ref.id,
    author_id: stored_auth_user_cred.uid,
    email: stored_auth_user_cred.email
  }).then(function () {
    console.log('guide made');
    create_title.value = "";
    create_child.value = "";
    create_content.value = "";
    get_db_guides();
  }).catch(function (err) {
    console.log(err.message);
  });
}; // create user


var db_create_user = function db_create_user(cred) {
  // create user after auth
  db.collection('users').doc(cred.user.uid).set({
    id: cred.user.uid,
    email: cred.user.email,
    title: cred.user.email,
    child: 'user'
  }).then(function () {
    console.log(cred);
    console.log(cred.user.uid);
    console.log(cred.user.email);
    console.log(cred.user.metadata.creationTime);
    console.log(cred.user.metadata.lastSignInTime);
    console.log(cred.additionalUserInfo.isNewUser);
    stored_auth_user_cred = cred;
    signup_email.value = "";
    signup_password.value = "";
    get_db_guides();
  }).catch(function (err) {
    console.log(err.message);
  });
}; // update user


var db_update_user = function db_update_user(collection, deletable_id) {
  console.log(deletable_id);
  var date = new Date();
  db.collection(collection).doc(deletable_id).set({
    id: deletable_id,
    email: stored_auth_user_cred.email,
    title: document.getElementById('title').value
  }).then(function () {
    document.getElementById('title').value = "", alert("Document successfully written!");
    get_db_guides();
  }).catch(function (error) {
    console.error("Error writing document: ", error);
  });
}; // delete user


var db_delete_user = function db_delete_user(collection, deletable_id) {
  console.log(deletable_id);
  db.collection(collection).doc(deletable_id).delete().then(function () {
    console.log("Document successfully deleted!");
    get_db_guides();
  }).catch(function (error) {
    console.error("Error removing document: ", error);
    get_db_guides();
  });
};

var handle_ReturnState = function handle_ReturnState() {
  return state;
};

var handle_update = function handle_update() {
  if (document.getElementById("scroll_clientHeight") != null) {
    document.getElementById("scroll_clientHeight").innerHTML = state.interaction.root.clientHeight;
  }

  if (document.getElementById("scroll_clientWidth") != null) {
    document.getElementById("scroll_clientWidth").innerHTML = state.interaction.root.clientWidth;
  }

  if (document.getElementById("scroll_scrollHeight") != null) {
    document.getElementById("scroll_scrollHeight").innerHTML = state.interaction.root.scrollHeight;
  }

  if (document.getElementById("scroll_scrollWidth") != null) {
    document.getElementById("scroll_scrollWidth").innerHTML = state.interaction.root.scrollWidth;
  }

  if (document.getElementById("scroll_scrollTop") != null) {
    document.getElementById("scroll_scrollTop").innerHTML = state.interaction.root.scrollTop;
  }

  if (document.getElementById("scroll_scrollLeft") != null) {
    document.getElementById("scroll_scrollLeft").innerHTML = state.interaction.root.scrollLeft;
  } // gui


  if (document.getElementById('component_app_status_transform_gui_top') != null) {
    document.getElementById('component_app_status_transform_gui_top').innerHTML = state.modal.gui.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_top_left') != null) {
    document.getElementById('component_app_status_transform_gui_top_left').innerHTML = state.modal.gui.top_left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_top_right') != null) {
    document.getElementById('component_app_status_transform_gui_top_right').innerHTML = state.modal.gui.top_right.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_left') != null) {
    document.getElementById('component_app_status_transform_gui_left').innerHTML = state.modal.gui.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom') != null) {
    document.getElementById('component_app_status_transform_gui_bottom').innerHTML = state.modal.gui.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom_left') != null) {
    document.getElementById('component_app_status_transform_gui_bottom_left').innerHTML = state.modal.gui.bottom_left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom_right') != null) {
    document.getElementById('component_app_status_transform_gui_bottom_right').innerHTML = state.modal.gui.bottom_right.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_right') != null) {
    document.getElementById('component_app_status_transform_gui_right').innerHTML = state.modal.gui.right.transform;
  }

  ; // modal nav

  if (document.getElementById('component_app_status_transform_nav_top') != null) {
    document.getElementById('component_app_status_transform_nav_top').innerHTML = state.modal.nav.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_nav_left') != null) {
    document.getElementById('component_app_status_transform_nav_left').innerHTML = state.modal.nav.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_nav_bottom') != null) {
    document.getElementById('component_app_status_transform_nav_bottom').innerHTML = state.modal.nav.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_nav_right') != null) {
    document.getElementById('component_app_status_transform_nav_right').innerHTML = state.modal.nav.right.transform;
  }

  ; // modal pip

  if (document.getElementById('component_app_status_transform_pip_top') != null) {
    document.getElementById('component_app_status_transform_pip_top').innerHTML = state.modal.pip.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pip_left') != null) {
    document.getElementById('component_app_status_transform_pip_left').innerHTML = state.modal.pip.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pip_bottom') != null) {
    document.getElementById('component_app_status_transform_pip_bottom').innerHTML = state.modal.pip.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pip_right') != null) {
    document.getElementById('component_app_status_transform_pip_right').innerHTML = state.modal.pip.right.transform;
  }

  ; // modal page

  if (document.getElementById('component_app_status_transform_page_top') != null) {
    document.getElementById('component_app_status_transform_page_top').innerHTML = state.modal.page.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_page_left') != null) {
    document.getElementById('component_app_status_transform_page_left').innerHTML = state.modal.page.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_page_bottom') != null) {
    document.getElementById('component_app_status_transform_page_bottom').innerHTML = state.modal.page.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_page_right') != null) {
    document.getElementById('component_app_status_transform_page_right').innerHTML = state.modal.page.right.transform;
  }

  ; // modal menu

  if (document.getElementById('component_app_status_transform_menu_top') != null) {
    document.getElementById('component_app_status_transform_menu_top').innerHTML = state.modal.menu.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_menu_left') != null) {
    document.getElementById('component_app_status_transform_menu_left').innerHTML = state.modal.menu.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_menu_bottom') != null) {
    document.getElementById('component_app_status_transform_menu_bottom').innerHTML = state.modal.menu.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_menu_right') != null) {
    document.getElementById('component_app_status_transform_menu_right').innerHTML = state.modal.menu.right.transform;
  }

  ; // modal morph

  if (document.getElementById('component_app_status_transform_morph_top') != null) {
    document.getElementById('component_app_status_transform_morph_top').innerHTML = state.modal.morph.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_morph_left') != null) {
    document.getElementById('component_app_status_transform_morph_left').innerHTML = state.modal.morph.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_morph_bottom') != null) {
    document.getElementById('component_app_status_transform_morph_bottom').innerHTML = state.modal.morph.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_morph_right') != null) {
    document.getElementById('component_app_status_transform_morph_right').innerHTML = state.modal.morph.right.transform;
  }

  ; // modal gradient

  if (document.getElementById('component_app_status_transform_gradient_top') != null) {
    document.getElementById('component_app_status_transform_gradient_top').innerHTML = state.modal.gradient.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gradient_left') != null) {
    document.getElementById('component_app_status_transform_gradient_left').innerHTML = state.modal.gradient.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gradient_bottom') != null) {
    document.getElementById('component_app_status_transform_gradient_bottom').innerHTML = state.modal.gradient.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gradient_right') != null) {
    document.getElementById('component_app_status_transform_gradient_right').innerHTML = state.modal.gradient.right.transform;
  }

  ; // modal pop

  if (document.getElementById('component_app_status_transform_pop_top') != null) {
    document.getElementById('component_app_status_transform_pop_top').innerHTML = state.modal.pop.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pop_left') != null) {
    document.getElementById('component_app_status_transform_pop_left').innerHTML = state.modal.pop.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pop_bottom') != null) {
    document.getElementById('component_app_status_transform_pop_bottom').innerHTML = state.modal.pop.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_pop_right') != null) {
    document.getElementById('component_app_status_transform_pop_right').innerHTML = state.modal.pop.right.transform;
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
};

var post_up = false;

var get_classes = function get_classes() {
  var class_this = document.getElementById('root');

  if (post_up == true) {
    class_this.classList += " post_up";
  }

  ;

  if (post_up == false) {
    class_this.classList -= " post_up";
  }

  ;
};

var ui_check = function ui_check() {
  if (state.ux.platform.is_Desktop) {
    state.interaction.player_1.width = 1;
    state.interaction.player_1.height = 4;
  }

  ;

  if (state.ux.platform.is_Mobile) {
    state.interaction.player_1.width = 8;
    state.interaction.player_1.height = 8;
  }

  ;

  if (state.ux.orientation.is_Landscape) {
    body.classList += " is_Landscape";
  }

  ;

  if (state.ux.orientation.is_Portrait) {
    body.classList += " is_Portrait";
  }

  ;

  if (state.modal.pop.left.transform == true) {
    body.classList += " modal_pop_left";
  }

  ;

  if (state.modal.pop.right.transform == true) {
    body.classList += " modal_pop_right";
  }

  ;

  if (state.modal.pop.bottom.transform == true) {
    body.classList += " modal_pop_bottom";
  }

  ;

  if (state.modal.pop.top.transform == true) {
    body.classList += " modal_pop_top";
  }

  ;

  if (state.ux.orientation.post_view == 'card') {
    body.classList += " card";
  }

  ;

  if (state.ux.orientation.post_view == 'list') {
    body.classList += " list";
  }

  ;

  if (state.ux.orientation.post_view == 'numbered') {
    body.classList += " numbered";
  }

  ;

  if (state.ux.orientation.post_view == 'read') {
    body.classList += " read";
  }

  ;

  if (state.ux.orientation.post_view == 'fifth') {
    body.classList += " fifth";
  }

  ;

  if (state.ux.orientation.post_view == 'sixth') {
    body.classList += " sixth";
  }

  ;

  if (state.ux.orientation.post_view == 'eighth') {
    body.classList += " eighth";
  }

  ;

  if (state.ux.orientation.dark_view == true) {
    body.classList += " dark";
  }

  ;

  if (state.ux.orientation.dark_view == false) {
    body.classList += " light";
  }

  ;
  console.log('resize');
  console.log(state.ux);
};

var get_dimensions = function get_dimensions() {
  state.ux = {
    platform: {
      is_Desktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
      is_Mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    },
    orientation: {
      is_Landscape: window.innerHeight < window.innerWidth,
      is_Portrait: window.innerHeight > window.innerWidth,
      post_view: post_view,
      dark_view: dark_view
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

  if (state.ux.platform.is_Desktop) {
    tiny_height = state.ux.dimensions.height;
    console.log('tiny_height: ' + tiny_height);
    tiny_width = state.ux.dimensions.width;
    console.log('tiny_width: ' + tiny_width);
    body.classList = "is_Desktop";
  }

  ;

  if (state.ux.platform.is_Mobile) {
    if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
      tiny_height = state.ux.dimensions.height;
      console.log('tiny_height: ' + tiny_height);
    }

    ;

    if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
      tiny_width = state.ux.dimensions.width;
      console.log('tiny_width: ' + tiny_width);
    }

    ;
    body.classList = "is_Mobile";
  }

  ;

  if (body != null) {
    body.style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  if (document.getElementById('outro') != null) {
    document.getElementById('outro').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  if (document.getElementById('credits') != null) {
    document.getElementById('credits').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  if (document.getElementById('interactions') != null) {
    document.getElementById('interactions').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  if (state.ux.platform.is_Desktop) {
    if (document.getElementById('lead') != null) {
      document.getElementById('lead').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
    }

    ;

    if (document.getElementById('shots') != null) {
      document.getElementById('shots').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
    }

    ;

    if (document.getElementById('scene') != null) {
      document.getElementById('scene').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
    }

    ;

    if (document.getElementById('set') != null) {
      document.getElementById('set').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
    }

    ;
  }

  ;

  if (state.ux.platform.is_Mobile) {
    if (document.getElementById('lead') != null) {
      document.getElementById('lead').style = 'height: ' + tiny_height + 'px;' + 'width: ' + tiny_width + 'px;';
    }

    ;

    if (document.getElementById('shots') != null) {
      document.getElementById('shots').style = 'height: ' + tiny_height + 'px;' + 'width: ' + tiny_width + 'px;';
    }

    ;

    if (document.getElementById('scene') != null) {
      document.getElementById('scene').style = 'height: ' + tiny_height + 'px;' + 'width: ' + tiny_width + 'px;';
    }

    ;

    if (document.getElementById('set') != null) {
      document.getElementById('set').style = 'height: ' + tiny_height + 'px;' + 'width: ' + tiny_width + 'px;';
    }

    ;
  }

  ;
  console.log('resize');
  console.log(state.ux);
  ui_check();
};

var handle_ReturnedState_fromEvents = function handle_ReturnedState_fromEvents() {
  state = _events.default.handle_ReturnState_fromEvents();
  get_dimensions();
  handle_update();
};

var check_for_auth_after_load = function check_for_auth_after_load() {
  console.log('load'); //has_loaded = true;

  var auth_buffer = .5;
  setTimeout(function () {
    body.scrollTo(0, 0);
  }, 0);
  handle_time(); // 24/fps loop

  (function () {
    var interval = 0;
    var play = setInterval(function () {
      if (interval > 24 * auth_buffer) {
        // proceed after firebase auth check && has_loaded
        if (auth_has_been_checked == true && has_loaded == true) {
          handle_if_AUTH_ACT_2();
          clearInterval(play);
        }

        ;
      }

      ;
      console.log('check_for_auth_after_load: ' + interval);
      interval += 1;
    }, 1000 / state.motion.framerate);
    play;
  })();
};

var modal_reset = function modal_reset() {
  state.modal.pop.top.transform = false;
  state.modal.pop.left.transform = false;
  state.modal.pop.right.transform = false;
  state.modal.pop.bottom.transform = false;
  shot_to_scene_2();
};

var check_local_user = function check_local_user() {
  // if returning user
  if (localStorage.user == 'new_unlogged' && localStorage.user_id == 'xxx') {
    if (dev_mode) {
      checkmark += 1;
      alert(checkmark + '/6) welcome back new user, handle_INITIAL_LOOP, if returning user');
    }

    ; //act_3();
  }

  ; // if returning new unlogged user

  if (localStorage.user == 'new_unlogged' && localStorage.user_id == 'xxx') {
    if (dev_mode) {
      checkmark += 1;
      alert(checkmark + '/6) welcome: ' + localStorage.user + ' , handle_INITIAL_LOOP, if returning new unlogged user');
    }

    ; //act_3();
  }

  ; // if returning unlogged user

  if (localStorage.user == 'unlogged_user' && localStorage.user_id != 'xxx') {
    if (dev_mode) {
      checkmark += 1;
      alert(checkmark + '/6) welcome: ' + localStorage.user + ' , handle_INITIAL_LOOP, if returning unlogged user');
    }

    ; //act_3();
  }

  ; // if returning logged user

  if (localStorage.user == 'logged_user' && localStorage.user_id != 'xxx') {
    if (dev_mode) {
      checkmark += 1;
      alert(checkmark + '/6) welcome: ' + localStorage.user + ' , handle_INITIAL_LOOP, if returning logged user');
    }

    ; //act_3();
  }

  ; // if first timer

  if (localStorage.user == null) {
    if (dev_mode) {
      alert(checkmark + '/6) welcome first timer, handle_INITIAL_LOOP, if first timer');
    }

    ;
    localStorage.setItem("user", "new_unlogged");
    localStorage.setItem("user_id", "xxx"); //act_3();
  }

  ;
  state.data.onload_time = state.data.time;
};

var has_loaded = false; // inital

document.addEventListener("DOMContentLoaded", function (event) {
  console.log('DOMContentLoaded');
  handle_play_DOMContentLoaded();

  if (dev_mode) {
    checkmark += 1;
    alert(checkmark + '/6 (handle_play_DOMContentLoaded)');
  }

  ;
});
window.addEventListener("load", function (event) {
  check_for_auth_after_load();

  if (dev_mode) {
    checkmark += 1;
    alert(checkmark + '/6 (window.addEventListener("load")');
  }

  ;
});
window.addEventListener("resize", function (event) {
  get_dimensions();
}); // scroll

window.addEventListener('scroll', function (event) {
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
"";
window.addEventListener("devicemotion", function (event) {
  _events.default.handle_Function_Device_Motion(event);

  handle_ReturnedState_fromEvents();
});
window.addEventListener("deviceorientation", function (event) {
  state.events.motion.event_alpha = event.alpha;
  state.events.motion.event_beta = event.beta;
  state.events.motion.event_gamma = event.gamma; //alert('change');
});
window.addEventListener("orientationchange", function (event) {
  tiny_height = 0;
  tiny_width = 0;
  alert('orientationchange');
  get_dimensions();
  state.events.motion.orientation_string = state.ux.screen.orientation;
  console.log('state.ux.screen.orientation');
  console.log(state.ux.screen.orientation);
});
window.addEventListener("beforeunload", function (event) {});
var _default = {
  handle_ReturnState: handle_ReturnState,
  modal_reset: modal_reset
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/events":"imports/events.js","./imports/elements":"imports/elements.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62524" + '/');

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
//# sourceMappingURL=/serve_an.e31bb0bc.map