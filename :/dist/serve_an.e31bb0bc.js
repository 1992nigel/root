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
},{"./assets/gui/gui_icon_set_1.svg":[["gui_icon_set_1.6d03bc13.svg","assets/gui/gui_icon_set_1.svg"],"assets/gui/gui_icon_set_1.svg"],"./assets/gui/gui_icon_set_2.svg":[["gui_icon_set_2.7eece3af.svg","assets/gui/gui_icon_set_2.svg"],"assets/gui/gui_icon_set_2.svg"],"./assets/gui/gui_icon_set_3.svg":[["gui_icon_set_3.b1a27dfc.svg","assets/gui/gui_icon_set_3.svg"],"assets/gui/gui_icon_set_3.svg"],"./assets/gui/gui_icon_hearts.svg":[["gui_icon_hearts.d20d2683.svg","assets/gui/gui_icon_hearts.svg"],"assets/gui/gui_icon_hearts.svg"],"./assets/gui/gui_icon_hearts_dark.svg":[["gui_icon_hearts_dark.d5a3f3d8.svg","assets/gui/gui_icon_hearts_dark.svg"],"assets/gui/gui_icon_hearts_dark.svg"],"./assets/gui/gui_arrow_left.svg":[["gui_arrow_left.859710f3.svg","assets/gui/gui_arrow_left.svg"],"assets/gui/gui_arrow_left.svg"],"./assets/gui/gui_arrow_left_dark.svg":[["gui_arrow_left_dark.eedb6a25.svg","assets/gui/gui_arrow_left_dark.svg"],"assets/gui/gui_arrow_left_dark.svg"],"./assets/gui/gui_arrow_right.svg":[["gui_arrow_right.91b7aa1a.svg","assets/gui/gui_arrow_right.svg"],"assets/gui/gui_arrow_right.svg"],"./assets/gui/gui_arrow_right_dark.svg":[["gui_arrow_right_dark.86add9ba.svg","assets/gui/gui_arrow_right_dark.svg"],"assets/gui/gui_arrow_right_dark.svg"],"./assets/gui/gui_character_face_left_blink_1.svg":[["gui_character_face_left_blink_1.e7521a02.svg","assets/gui/gui_character_face_left_blink_1.svg"],"assets/gui/gui_character_face_left_blink_1.svg"],"./assets/gui/gui_character_face_left_blink_2.svg":[["gui_character_face_left_blink_2.f5bedfe7.svg","assets/gui/gui_character_face_left_blink_2.svg"],"assets/gui/gui_character_face_left_blink_2.svg"],"./assets/gui/gui_character_face_left_blink_3.svg":[["gui_character_face_left_blink_3.ee9cbd44.svg","assets/gui/gui_character_face_left_blink_3.svg"],"assets/gui/gui_character_face_left_blink_3.svg"],"./assets/gui/gui_character_face_left_blink_4.svg":[["gui_character_face_left_blink_4.6af47493.svg","assets/gui/gui_character_face_left_blink_4.svg"],"assets/gui/gui_character_face_left_blink_4.svg"],"./assets/gui/gui_character_face_left_blink_5.svg":[["gui_character_face_left_blink_5.ddfc6b5a.svg","assets/gui/gui_character_face_left_blink_5.svg"],"assets/gui/gui_character_face_left_blink_5.svg"],"./assets/gui/gui_character_face_left_blink_6.svg":[["gui_character_face_left_blink_6.76e1ae24.svg","assets/gui/gui_character_face_left_blink_6.svg"],"assets/gui/gui_character_face_left_blink_6.svg"],"./assets/gui/gui_text_home.svg":[["gui_text_home.8495f549.svg","assets/gui/gui_text_home.svg"],"assets/gui/gui_text_home.svg"],"./assets/gui/gui_text_continue.svg":[["gui_text_continue.14bbfa95.svg","assets/gui/gui_text_continue.svg"],"assets/gui/gui_text_continue.svg"],"./assets/gui/gui_text_loaded.svg":[["gui_text_loaded.60900b05.svg","assets/gui/gui_text_loaded.svg"],"assets/gui/gui_text_loaded.svg"],"./assets/gui/gui_text_loaded_1.svg":[["gui_text_loaded_1.8b2f8cdf.svg","assets/gui/gui_text_loaded_1.svg"],"assets/gui/gui_text_loaded_1.svg"],"./assets/gui/gui_text_loaded_2.svg":[["gui_text_loaded_2.91531183.svg","assets/gui/gui_text_loaded_2.svg"],"assets/gui/gui_text_loaded_2.svg"],"./assets/gui/gui_text_loaded_3.svg":[["gui_text_loaded_3.991795c2.svg","assets/gui/gui_text_loaded_3.svg"],"assets/gui/gui_text_loaded_3.svg"],"./assets/gui/gui_text_loaded_4.svg":[["gui_text_loaded_4.8f14c048.svg","assets/gui/gui_text_loaded_4.svg"],"assets/gui/gui_text_loaded_4.svg"],"./assets/gui/gui_text_loading.svg":[["gui_text_loading.4b760cbc.svg","assets/gui/gui_text_loading.svg"],"assets/gui/gui_text_loading.svg"],"./assets/gui/gui_text_loading_1.svg":[["gui_text_loading_1.b761b4af.svg","assets/gui/gui_text_loading_1.svg"],"assets/gui/gui_text_loading_1.svg"],"./assets/gui/gui_text_loading_2.svg":[["gui_text_loading_2.0b494cde.svg","assets/gui/gui_text_loading_2.svg"],"assets/gui/gui_text_loading_2.svg"],"./assets/gui/gui_text_loading_3.svg":[["gui_text_loading_3.9e46e494.svg","assets/gui/gui_text_loading_3.svg"],"assets/gui/gui_text_loading_3.svg"],"./assets/gui/gui_text_loading_4.svg":[["gui_text_loading_4.30ac31ff.svg","assets/gui/gui_text_loading_4.svg"],"assets/gui/gui_text_loading_4.svg"],"./assets/gui/logo/type/gui_logo_type.svg":[["gui_logo_type.dada253c.svg","assets/gui/logo/type/gui_logo_type.svg"],"assets/gui/logo/type/gui_logo_type.svg"],"./assets/gui/logo/type/gui_logo_type_1.svg":[["gui_logo_type_1.cb0590d0.svg","assets/gui/logo/type/gui_logo_type_1.svg"],"assets/gui/logo/type/gui_logo_type_1.svg"],"./assets/gui/logo/type/gui_logo_type_2.svg":[["gui_logo_type_2.2ab02c6a.svg","assets/gui/logo/type/gui_logo_type_2.svg"],"assets/gui/logo/type/gui_logo_type_2.svg"],"./assets/gui/logo/type/gui_logo_type_3.svg":[["gui_logo_type_3.1e559c99.svg","assets/gui/logo/type/gui_logo_type_3.svg"],"assets/gui/logo/type/gui_logo_type_3.svg"],"./assets/gui/logo/type/gui_logo_type_4.svg":[["gui_logo_type_4.9febe8f2.svg","assets/gui/logo/type/gui_logo_type_4.svg"],"assets/gui/logo/type/gui_logo_type_4.svg"],"./assets/gui/gui_stage_tv_1.svg":[["gui_stage_tv_1.aa9b17f0.svg","assets/gui/gui_stage_tv_1.svg"],"assets/gui/gui_stage_tv_1.svg"],"./assets/gui/gui_stage_tv_2.svg":[["gui_stage_tv_2.8badfca8.svg","assets/gui/gui_stage_tv_2.svg"],"assets/gui/gui_stage_tv_2.svg"],"./assets/gui/gui_stage_tv_3.svg":[["gui_stage_tv_3.e5999342.svg","assets/gui/gui_stage_tv_3.svg"],"assets/gui/gui_stage_tv_3.svg"],"./assets/gui/gui_stage_tv_4.svg":[["gui_stage_tv_4.2e8f0e53.svg","assets/gui/gui_stage_tv_4.svg"],"assets/gui/gui_stage_tv_4.svg"],"./assets/gui/gui_buttons_1.svg":[["gui_buttons_1.e26c8f6c.svg","assets/gui/gui_buttons_1.svg"],"assets/gui/gui_buttons_1.svg"],"./assets/gui/gui_buttons_2.svg":[["gui_buttons_2.5e939658.svg","assets/gui/gui_buttons_2.svg"],"assets/gui/gui_buttons_2.svg"],"./assets/gui/gui_buttons_3.svg":[["gui_buttons_3.458f7c86.svg","assets/gui/gui_buttons_3.svg"],"assets/gui/gui_buttons_3.svg"],"./assets/gui/gui_buttons_start.svg":[["gui_buttons_start.ac669302.svg","assets/gui/gui_buttons_start.svg"],"assets/gui/gui_buttons_start.svg"],"./assets/gui/gui_buttons_or.svg":[["gui_buttons_or.fe50665c.svg","assets/gui/gui_buttons_or.svg"],"assets/gui/gui_buttons_or.svg"],"./assets/gui/gui_buttons_learn.svg":[["gui_buttons_learn.48ff04e5.svg","assets/gui/gui_buttons_learn.svg"],"assets/gui/gui_buttons_learn.svg"],"./assets/gui/gui_character_face_left.svg":[["gui_character_face_left.e013aa5a.svg","assets/gui/gui_character_face_left.svg"],"assets/gui/gui_character_face_left.svg"],"./assets/gui/logo/mark/gui_wall_1.svg":[["gui_wall_1.9835003a.svg","assets/gui/logo/mark/gui_wall_1.svg"],"assets/gui/logo/mark/gui_wall_1.svg"],"./assets/gui/logo/mark/gui_wall_2.svg":[["gui_wall_2.aec3ad79.svg","assets/gui/logo/mark/gui_wall_2.svg"],"assets/gui/logo/mark/gui_wall_2.svg"],"./assets/gui/logo/mark/gui_wall_3.svg":[["gui_wall_3.e15ff0b1.svg","assets/gui/logo/mark/gui_wall_3.svg"],"assets/gui/logo/mark/gui_wall_3.svg"],"./assets/gui/logo/mark/gui_wall_4.svg":[["gui_wall_4.6745d876.svg","assets/gui/logo/mark/gui_wall_4.svg"],"assets/gui/logo/mark/gui_wall_4.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_1.svg":[["gui_character_face_vomit_left_shadow_1.4961d216.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_1.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_1.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_2.svg":[["gui_character_face_vomit_left_shadow_2.96b02201.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_2.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_2.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_3.svg":[["gui_character_face_vomit_left_shadow_3.f8b433ac.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_3.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_3.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_4.svg":[["gui_character_face_vomit_left_shadow_4.801013c7.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_4.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_4.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_5.svg":[["gui_character_face_vomit_left_shadow_5.3fcbea65.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_5.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_5.svg"],"./assets/gui/logo/mark/gui_character_face_vomit_left_shadow_6.svg":[["gui_character_face_vomit_left_shadow_6.754dfb70.svg","assets/gui/logo/mark/gui_character_face_vomit_left_shadow_6.svg"],"assets/gui/logo/mark/gui_character_face_vomit_left_shadow_6.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow.svg":[["gui_character_face_left_shadow.43a8ba68.svg","assets/gui/logo/mark/gui_character_face_left_shadow.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow_1.svg":[["gui_character_face_left_shadow_1.b0fb65d9.svg","assets/gui/logo/mark/gui_character_face_left_shadow_1.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow_1.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow_2.svg":[["gui_character_face_left_shadow_2.60859a62.svg","assets/gui/logo/mark/gui_character_face_left_shadow_2.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow_2.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow_3.svg":[["gui_character_face_left_shadow_3.5146f4f5.svg","assets/gui/logo/mark/gui_character_face_left_shadow_3.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow_3.svg"],"./assets/gui/logo/mark/gui_character_face_left_shadow_4.svg":[["gui_character_face_left_shadow_4.558674e1.svg","assets/gui/logo/mark/gui_character_face_left_shadow_4.svg"],"assets/gui/logo/mark/gui_character_face_left_shadow_4.svg"],"./assets/gui/gui_interaction_text_help.svg":[["gui_interaction_text_help.6bd92134.svg","assets/gui/gui_interaction_text_help.svg"],"assets/gui/gui_interaction_text_help.svg"],"./assets/gui/gui_interaction_text_for_more.svg":[["gui_interaction_text_for_more.cdf9c2a9.svg","assets/gui/gui_interaction_text_for_more.svg"],"assets/gui/gui_interaction_text_for_more.svg"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.63c56e34.svg","assets/gui/gui_interaction_text_press.svg"],"assets/gui/gui_interaction_text_press.svg"],"./assets/gui/gui_link_settings_white.svg":[["gui_link_settings_white.c17d1d4c.svg","assets/gui/gui_link_settings_white.svg"],"assets/gui/gui_link_settings_white.svg"],"./assets/gui/gui_link_add_white.svg":[["gui_link_add_white.3dff2e17.svg","assets/gui/gui_link_add_white.svg"],"assets/gui/gui_link_add_white.svg"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.8b15c689.svg","assets/gui/gui_link_menu_white.svg"],"assets/gui/gui_link_menu_white.svg"],"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.58909d32.svg","assets/gui/gui_link_grid_white.svg"],"assets/gui/gui_link_grid_white.svg"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.fc375cc1.svg","assets/gui/gui_link_sign_in_white.svg"],"assets/gui/gui_link_sign_in_white.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_character_body_right_8.svg":[["gui_character_body_right_8.6008b897.svg","assets/gui/gui_character_body_right_8.svg"],"assets/gui/gui_character_body_right_8.svg"],"./assets/gui/gui_character_body_right_7.svg":[["gui_character_body_right_7.e008fe94.svg","assets/gui/gui_character_body_right_7.svg"],"assets/gui/gui_character_body_right_7.svg"],"./assets/gui/gui_character_body_right_6.svg":[["gui_character_body_right_6.44953eae.svg","assets/gui/gui_character_body_right_6.svg"],"assets/gui/gui_character_body_right_6.svg"],"./assets/gui/gui_character_body_right_5.svg":[["gui_character_body_right_5.9dcd1061.svg","assets/gui/gui_character_body_right_5.svg"],"assets/gui/gui_character_body_right_5.svg"],"./assets/gui/gui_character_body_right_4.svg":[["gui_character_body_right_4.d8249778.svg","assets/gui/gui_character_body_right_4.svg"],"assets/gui/gui_character_body_right_4.svg"],"./assets/gui/gui_character_body_right_3.svg":[["gui_character_body_right_3.39393cf8.svg","assets/gui/gui_character_body_right_3.svg"],"assets/gui/gui_character_body_right_3.svg"],"./assets/gui/gui_character_body_right_2.svg":[["gui_character_body_right_2.3d940bbe.svg","assets/gui/gui_character_body_right_2.svg"],"assets/gui/gui_character_body_right_2.svg"],"./assets/gui/gui_character_body_right_1.svg":[["gui_character_body_right_1.fe23b40a.svg","assets/gui/gui_character_body_right_1.svg"],"assets/gui/gui_character_body_right_1.svg"],"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.6dec167e.woff","assets/fonts/Silkscreen.ttf.woff"],"assets/fonts/Silkscreen.ttf.woff"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.a45ae991.svg","assets/fonts/Silkscreen.ttf.svg"],"assets/fonts/Silkscreen.ttf.svg"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.be6987ea.eot","assets/fonts/Silkscreen.ttf.eot"],"assets/fonts/Silkscreen.ttf.eot"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var handle_events = function handle_events() {
  var state = _index.default.handle_ReturnState(); // post view controls


  if (document.getElementById('modal_nav_top') != null) {
    document.getElementById('modal_nav_top').addEventListener('click', function (event) {
      // filter library
      setTimeout(function () {
        state.modal.page.top.transform = !state.modal.page.top.transform;

        _index.default.handle_ReturnedState(state);
      }, 0);
    });
  }

  ;
}; // 0


var shot_action_nav = function shot_action_nav() {
  var has_loaded = false;
  var play = document.getElementById('play');
  play.innerHTML = "";
  var element = document.createElement('div');
  element.setAttribute("id", "play_element");
  element.classList = "";
  element.innerHTML = "\n            <div id=\"nav_1\" class=\"animated1 enterTop display_webkit_box webkit_box_pack_center webkit_box_align\">\n                <div id=\"nav_button_1_1\" class=\"display_webkit_box webkit_box_pack_center webkit_box_align\"><div class=\"position_relative gui_link_add_white\n                width_50 height_50 float_left\"></div></div>\n                <div id=\"nav_button_1_2\" class=\"display_webkit_box webkit_box_pack_center webkit_box_align\"><div class=\"position_relative gui_link_menu_white\n                width_50 height_50 float_left\"></div></div>\n                <div id=\"nav_button_1_3\" class=\"display_webkit_box webkit_box_pack_center webkit_box_align\"><div class=\"position_relative gui_link_settings_white\n                width_50 height_50 float_left\"></div></div>\n                <div id=\"nav_button_1_4\" class=\"display_webkit_box webkit_box_pack_center webkit_box_align\"><div class=\"position_relative gui_link_settings_white\n                width_50 height_50 float_left\"></div></div>\n            </div>";
  element.addEventListener("click", function (event) {
    alert('shots yup');
  });
  document.getElementById('play').appendChild(element);
}; // 0


var shot_action_single_vomit = function shot_action_single_vomit() {
  var has_loaded = false;
  var play = document.getElementById('play');
  play.innerHTML = "";
  var element = document.createElement('div');
  element.setAttribute("id", "play_element");
  element.classList = "";
  element.innerHTML = "<div id=\"shot_vomiting_face\" class=\"width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto \"></div>";
  element.addEventListener("click", function (event) {
    alert('shots yup');
  });
  document.getElementById('play').appendChild(element); // shot_vomiting_face single

  (function () {
    var interval = 1;
    var play = setInterval(function () {
      // shot 2
      if (document.getElementById('shot_vomiting_face') != null) {
        document.getElementById('shot_vomiting_face').classList = ' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_' + interval + ' position_absolute margin_auto ';

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

var action_preloader = function action_preloader() {
  var has_loaded = false;
  var preloader = document.getElementById('preloader');
  preloader.innerHTML = "";
  var element = document.createElement('div');
  element.setAttribute("id", "preloader_element");
  element.classList = "";
  element.innerHTML = "<div id=\"action_preloader\" class=\"width_0 height_0 gui_text_loading_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute\"></div>";
  element.addEventListener("click", function (event) {
    alert('shots yup');
  });
  document.getElementById('preloader').appendChild(element); // shots_character_1 loop

  (function () {
    var interval = 1;
    var play = setInterval(function () {
      // shot 2
      if (document.getElementById('action_preloader') != null) {
        // loading
        if (interval == 1) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 2) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 3) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 4) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_4 position_absolute margin_auto ';
        }

        ; // loaded

        if (interval == 5) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 6) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 7) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 8) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_4 position_absolute margin_auto ';
        }

        ; // face

        if (interval == 9) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 10) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 11) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 12) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_4 position_absolute margin_auto ';
        }

        ; // logo

        if (interval == 13) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 14) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 15) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 16) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_4 position_absolute margin_auto ';
        }

        ; // blink

        if (interval == 17) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 18) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 19) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 20) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_4 position_absolute margin_auto ';
        }

        ; // vomit

        if (interval == 21) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 22) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 23) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 24) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_4 position_absolute margin_auto ';
        }

        ;

        if (interval == 25) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_5 position_absolute margin_auto ';
        }

        ;

        if (interval == 26) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_6 position_absolute margin_auto ';
        }

        ; // wall

        if (interval == 27) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_1 position_absolute margin_auto ';
        }

        ;

        if (interval == 28) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_2 position_absolute margin_auto ';
        }

        ;

        if (interval == 29) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_3 position_absolute margin_auto ';
        }

        ;

        if (interval == 30) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_4 position_absolute margin_auto ';
        }

        ; // buttons

        if (interval == 31) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_start position_absolute margin_auto ';
        }

        ;

        if (interval == 32) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_or position_absolute margin_auto ';
        }

        ;

        if (interval == 33) {
          document.getElementById('action_preloader').classList = ' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_learn position_absolute margin_auto ';
        }

        ;
        interval += 1;
      }

      ;

      if (interval == 34) {
        document.getElementById('action_preloader').classList = ' ';
        has_loaded = true;
        clearInterval(play);
      }

      ;
    }, 1000 / 24);
    play;
  })();
};

var _default = {
  action_preloader: action_preloader,
  shot_action_single_vomit: shot_action_single_vomit,
  handle_events: handle_events
};
exports.default = _default;
},{"../index.js":"index.js"}],"imports/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

var _elements = _interopRequireDefault(require("./elements"));

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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
};

var handle_Function_Device_Load = function handle_Function_Device_Load(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Device_Load');

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  if (event.keyCode == 81) {
    //state.modal.pop.top.transform = !state.modal.pop.top.transform;
    state.modal.nav.top.transform = !state.modal.nav.top.transform;

    _index.default.game_start();
  }

  ;

  if (event.keyCode == 27) {
    setTimeout(function () {//window.scrollTo(0, 0);
    }, 0);

    _index.default.modal_reset();
  }

  ;

  if (event.keyCode == 32) {
    state.interaction.player_1.cycles.walking = !state.interaction.player_1.cycles.walking;
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

    _index.default.game_end();
  }

  ;

  if (event.keyCode == 37) {
    //alert('shift');
    state.interaction.player_1.angle = 0;
    state.interaction.player_1.clientX -= 1 / 8;
    state.interaction.cardboard.xaxis -= 1;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 38) {
    //alert('shift');
    state.interaction.player_1.stance = 1;
    state.interaction.player_1.clientY -= 1 / 8;
    state.interaction.cardboard.yaxis -= 1;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 39) {
    //alert('shift');
    state.interaction.player_1.angle = 1;
    state.interaction.player_1.clientX += 1 / 8;
    state.interaction.cardboard.xaxis += 1;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 40) {
    //alert('shift');
    state.interaction.player_1.stance = 0;
    state.interaction.player_1.clientY += 1 / 8;
    state.interaction.cardboard.yaxis += 1;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 49) {
    state.modal.nav.top.transform = !state.modal.nav.top.transform;

    _elements.default.shot_action_single_vomit();
  }

  ;

  if (event.keyCode == 192) {
    _index.default.get_db_guides();
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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

  _index.default.handle_ReturnedState(state);
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
},{"../index.js":"index.js","./elements":"imports/elements.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style.scss"));

var _elements = _interopRequireDefault(require("./imports/elements"));

var _events = _interopRequireDefault(require("./imports/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
// Your web app's Firebase configuration
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

var db = firebase.firestore();
var post_view = "card";
var dark_view = false;
var tiny_height = 0;
var tiny_width = 0;
var state = {
  stored_auth_user_cred: {},
  auth_has_been_checked: false,
  data: {
    url_type: '',
    url_user: '',
    url_post: '',
    upload_details_post: '',
    upload_details: '',
    upload_details_profile: '',
    user_logged_in: false,
    valid_user: {},
    posts: [],
    has_loaded: false,
    onload_url: '',
    scene: 0,
    route: 0,
    game: 0,
    time: 0,
    onload_time: 0,
    dark_mode: 0
  },
  interaction: {
    cardboard: {
      xaxis: 0,
      yaxis: 0
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
    gui_stage_tv: {
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
    player_1: {
      frame: 0,
      stance: 0,
      angle: 0,
      transform: false,
      opacity: false,
      display: false,
      clientX: 1,
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
      post_view: 'card',
      dark_view: false
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
      history: [],
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
state.ux.platform.is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
state.ux.platform.is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
  tiny_height = state.ux.dimensions.height;
}

;

if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
  tiny_width = state.ux.dimensions.width;
}

;

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

  if (state.interaction.cardboard.xaxis == 0 && state.interaction.cardboard.yaxis == 0) {
    body.classList += " center";
  }

  ;

  if (state.interaction.cardboard.xaxis == 0 && state.interaction.cardboard.yaxis == 1) {
    body.classList += " center_bottom";
  }

  ;

  if (state.interaction.cardboard.xaxis == 0 && state.interaction.cardboard.yaxis == -1) {
    body.classList += " center_top";
  }

  ;

  if (state.interaction.cardboard.xaxis == 1 && state.interaction.cardboard.yaxis == 0) {
    body.classList += " center_right";
  }

  ;

  if (state.interaction.cardboard.xaxis == -1 && state.interaction.cardboard.yaxis == 1) {
    body.classList += " bottom_left";
  }

  ;

  if (state.interaction.cardboard.xaxis == -1 && state.interaction.cardboard.yaxis == -1) {
    body.classList += " top_left";
  }

  ;

  if (state.interaction.cardboard.xaxis == -1 && state.interaction.cardboard.yaxis == 0) {
    body.classList += " center_left";
  }

  ;

  if (state.interaction.cardboard.xaxis == 1 && state.interaction.cardboard.yaxis == 1) {
    body.classList += " bottom_right";
  }

  ;

  if (state.interaction.cardboard.xaxis == 1 && state.interaction.cardboard.yaxis == -1) {
    body.classList += " top_right";
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

  if (state.modal.page.top.transform == true) {
    body.classList += " modal_page_top";
  }

  ;

  if (state.modal.page.bottom.transform == true) {
    body.classList += " modal_page_bottom";
  }

  ;

  if (state.modal.page.left.transform == true) {
    body.classList += " modal_page_left";
  }

  ;

  if (state.modal.page.right.transform == true) {
    body.classList += " modal_page_right";
  }

  ;

  if (state.modal.menu.top.transform == true) {
    body.classList += " modal_menu_top";
  }

  ;

  if (state.modal.menu.bottom.transform == true) {
    body.classList += " modal_menu_bottom";
  }

  ;

  if (state.modal.menu.left.transform == true) {
    body.classList += " modal_menu_left";
  }

  ;

  if (state.modal.menu.right.transform == true) {
    body.classList += " modal_menu_right";
  }

  ;

  if (state.modal.nav.top.transform == true) {
    body.classList += " modal_nav_top";
  }

  ;

  if (state.modal.nav.bottom.transform == true) {
    body.classList += " modal_nav_bottom";
  }

  ;

  if (state.modal.nav.left.transform == true) {
    body.classList += " modal_nav_left";
  }

  ;

  if (state.modal.nav.right.transform == true) {
    body.classList += " modal_nav_right";
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
  console.log('ui_check');
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
  /*
  if (body != null) {
      body.style =
          'height: ' + (state.ux.dimensions.height) + 'px;' +
          'width: ' + (state.ux.dimensions.width) + 'px;';
  };
  */

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

    if (document.getElementById('play') != null) {
      document.getElementById('play').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
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

    if (document.getElementById('play') != null) {
      document.getElementById('play').style = 'height: ' + tiny_height + 'px;' + 'width: ' + tiny_width + 'px;';
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
  handle_update();
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

var render_valid_user_data = function render_valid_user_data() {
  // feel in user data
  if (document.getElementById('user_conditional') != null) {
    document.getElementById('user_conditional').innerHTML = "\n        \n            <h2>Profile: ".concat(state.data.valid_user.username, "</h2>\n            id: ").concat(state.data.valid_user.id, "\n            username: ").concat(state.data.valid_user.username, "\n            email: ").concat(state.data.valid_user.email, "\n            photo: <u>").concat(state.data.valid_user.photo, "</u> <br>\n\n            <a href=\"https://antenuh.com/").concat(state.data.valid_user.id, "\">see profile</a>\n        ");
  }

  ;
}; // retrieve


var get_db_guides = function get_db_guides() {
  //alert('get_db_guides');
  //db.settings({timestampsInSnapshots: true});
  db.collection('users').get().then(function (snapshot) {
    console.log('snapshot.docs: ');
    console.log(snapshot.docs);
    state.data.posts = [];
    /*
    filtered_posts_guides = [];
    document.getElementById('posts_all').innerHTML = ``;
    document.getElementById('posts_filtered_sorted').innerHTML = ``;
    document.getElementById('posts_filtered_sorted_type').innerHTML = ``;
    document.getElementById('posts_filtered_sorted_stream').innerHTML = ``;
    document.getElementById('posts_filtered_sorted_category').innerHTML = ``;
    document.getElementById('posts_filtered_sorted_hashtag').innerHTML = ``;
    document.getElementById('posts_filtered').innerHTML = ``;
    */

    snapshot.docs.forEach(function (doc) {
      var items = doc.data();
      state.data.posts.push(items);
    });

    if (state.stored_auth_user_cred.uid == null) {
      console.log('you are NOT an stored_auth_user_cred');
    }

    ;

    if (state.stored_auth_user_cred.uid != null && state.stored_auth_user_cred.uid != 'xxx') {
      console.log('welcome: ' + state.stored_auth_user_cred.uid);
      console.log('state.stored_auth_user_cred.uid: ');
      console.log(state.stored_auth_user_cred.uid);
      console.log('state.data.posts:');
      console.log(state.data.posts); // match auth user with database collection: users

      console.log('check match from state.data.posts[i]');

      for (var i = 0; i < state.data.posts.length; i++) {
        if (state.data.posts[i].id == state.stored_auth_user_cred.uid) {
          state.data.valid_user = state.data.posts[i];
          state.data.user_logged_in = true;
        }
      }

      ;
      render_valid_user_data();

      if (state.data.url_type == 'user') {
        console.log('url_type user');
      }

      ;

      if (state.data.url_type == 'post') {
        console.log('url_type post');
      }

      ;
    }

    ;
    sort_and_create(state.data.posts);
    console.log('state.data.posts');
    console.log(state.data.posts);
  });
}; // retrieve


var sort_and_create = function sort_and_create(x) {
  document.getElementById('posts').innerHTML = ""; // posts_title

  (function () {
    var element = document.createElement('div');
    element.setAttribute("id", "posts_title");
    element.classList = "width_100 margin_auto position_relative float_left text_align_center ";
    element.innerHTML = "POST";
    element.addEventListener("click", function (event) {
      alert('all posts');
    });
    document.getElementById('posts').appendChild(element);
  })(); // valid_user_posts_titleup post


  (function () {
    var element = document.createElement('div');
    element.setAttribute("id", "posts_title");
    element.classList = "width_100 margin_auto position_relative float_left text_align_center ";
    element.innerHTML = "all valid_user_posts_titleup";
    element.addEventListener("click", function (event) {
      alert('valid_user_posts_titleup');
    });
    document.getElementById('posts').appendChild(element);
  })();

  (function () {
    var element = document.createElement('div');
    element.setAttribute("id", "valid_user_posts_titleup");
    element.classList = "width_100 margin_auto position_relative float_left text_align_center ";
    element.innerHTML = "";
    document.getElementById('posts').appendChild(element);
  })();

  fb_sorted_library(x, 'titleup').forEach(function (post) {
    if (post.child == 'post' && post.author_id == state.data.valid_user.id) {
      //console.log(post);
      var element = document.createElement('div');
      element.setAttribute("id", "post");
      element.classList = "width_100 margin_auto position_relative float_left";
      element.innerHTML = "\n\n                        <h2>\n                            post title: ".concat(post.title, "\n                        </h2>\n\n                        <div class=\"feat_img\">\n                            <div class=\"container\"></div>\n                        </div>\n\n                        <p>\n                            post id: ").concat(post.id, "\n                        </p>\n\n                        <a href=\"https://antenuh.com/p/").concat(post.id, "\">see post</a>\n                        \n                        <div id=\"like\"class=\"width_100 height_6025vw position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                \n                            <div class=\"hover_show width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"width_100 height_100 bottom_0 right_0 gui_icon_hearts_dark position_absolute margin_auto\"></div>\n                            </div>\n                            <div class=\"hover_hide width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"width_100 height_100 bottom_0 right_0 gui_icon_hearts position_absolute margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <button>subtoauthor</button>\n                    ");
      element.children[3].addEventListener("click", function (event) {
        alert('see');
      });
      element.children[4].addEventListener("click", function (event) {
        alert('like');
      });
      element.children[5].addEventListener("click", function (event) {
        alert('sub');
      });
      document.getElementById('valid_user_posts_titleup').appendChild(element);
    }

    ;
  }); // posts_titleup_post

  (function () {
    var element = document.createElement('div');
    element.setAttribute("id", "posts_title");
    element.classList = "width_100 margin_auto position_relative float_left text_align_center ";
    element.innerHTML = "posts_titleup_post";
    element.addEventListener("click", function (event) {
      alert('posts_titleup_post');
    });
    document.getElementById('posts').appendChild(element);
  })();

  (function () {
    var element = document.createElement('div');
    element.setAttribute("id", "posts_titleup_post");
    element.classList = "width_100 margin_auto position_relative float_left text_align_center ";
    element.innerHTML = "";
    document.getElementById('posts').appendChild(element);
  })(); // sort && create post
  // render SORTED post to view 


  fb_sorted_library(x, 'titleup').forEach(function (post) {
    if (post.child == 'post') {
      //console.log(post);
      var element = document.createElement('div');
      element.setAttribute("id", "post");
      element.classList = "width_100 margin_auto position_relative float_left";
      element.innerHTML = "\n\n                        <h2>\n                            post title: ".concat(post.title, "\n                        </h2>\n\n                        <div class=\"feat_img\">\n                            <div class=\"container\"></div>\n                        </div>\n\n                        <p>\n                            post id: ").concat(post.id, "\n                        </p>\n\n                        <a href=\"https://antenuh.com/p/").concat(post.id, "\">see post</a>\n                        \n                        <div id=\"like\"class=\"width_100 height_6025vw position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                \n                            <div class=\"hover_show width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"width_100 height_100 bottom_0 right_0 gui_icon_hearts_dark position_absolute margin_auto\"></div>\n                            </div>\n                            <div class=\"hover_hide width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"width_100 height_100 bottom_0 right_0 gui_icon_hearts position_absolute margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <button>subtoauthor</button>\n                    ");
      element.children[3].addEventListener("click", function (event) {
        alert('see');
      });
      element.children[4].addEventListener("click", function (event) {
        alert('like');
      });
      element.children[5].addEventListener("click", function (event) {
        alert('sub');
      });
      document.getElementById('posts_titleup_post').appendChild(element);
    }

    ;
  }); // posts_titleup_user

  (function () {
    var element = document.createElement('div');
    element.setAttribute("id", "posts_title");
    element.classList = "width_100 margin_auto position_relative float_left text_align_center ";
    element.innerHTML = "posts_titleup_user";
    element.addEventListener("click", function (event) {
      alert('posts_titleup_user');
    });
    document.getElementById('posts').appendChild(element);
  })();

  (function () {
    var element = document.createElement('div');
    element.setAttribute("id", "posts_titleup_user");
    element.classList = "width_100 margin_auto position_relative float_left text_align_center ";
    element.innerHTML = "";
    document.getElementById('posts').appendChild(element);
  })(); // sort && create post
  // render SORTED post to view 


  fb_sorted_library(x, 'titleup').forEach(function (post) {
    if (post.child == 'user') {
      //console.log(post);
      var element = document.createElement('div');
      element.setAttribute("id", "post");
      element.classList = "width_100 margin_auto position_relative float_left";
      element.innerHTML = "\n\n                        <h2>\n                            post title: ".concat(post.title, "\n                        </h2>\n\n                        <div class=\"feat_img\">\n                            <div class=\"container\"></div>\n                        </div>\n\n                        <p>\n                            post id: ").concat(post.id, "\n                        </p>\n\n                        <a href=\"https://antenuh.com/").concat(post.id, "\">see post</a>\n                        \n                        <div id=\"like\"class=\"width_100 height_6025vw position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                \n                            <div class=\"hover_show width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"width_100 height_100 bottom_0 right_0 gui_icon_hearts_dark position_absolute margin_auto\"></div>\n                            </div>\n                            <div class=\"hover_hide width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"width_100 height_100 bottom_0 right_0 gui_icon_hearts position_absolute margin_auto\"></div>\n                            </div>\n                        </div>\n\n                        <button>subtoauthor</button>\n                    ");
      element.children[3].addEventListener("click", function (event) {
        alert('see');
      });
      element.children[4].addEventListener("click", function (event) {
        alert('like');
      });
      element.children[5].addEventListener("click", function (event) {
        alert('sub');
      });
      document.getElementById('posts_titleup_user').appendChild(element);
    }

    ;
  });
}; // create user


var db_create_user = function db_create_user(cred) {
  //let username = document.getElementById('user_username').value;
  // create user after auth
  db.collection('users').doc(cred.user.uid).set({
    id: cred.user.uid,
    email: cred.user.email,
    title: cred.user.email,
    setting: {
      dark: state.ux.orientation.dark_view
    },
    child: 'user',
    tagline: '?',
    type: '?',
    category: '?',
    sticky: '?',
    hashtag: '?',
    content: '?',
    photo: cred.user.email,
    youtube: '?',
    twitch: '?',
    twitter: '?',
    spotify: '?',
    instagram: '?',
    vimeo: '?',
    comments: [],
    likes: 0,
    views: 0
  }).then(function () {
    var signup_email = document.getElementById('signup_email');
    var signup_password = document.getElementById('signup_password');
    console.log(cred);
    console.log(cred.user.uid);
    console.log(cred.user.email);
    console.log(cred.user.metadata.creationTime);
    console.log(cred.user.metadata.lastSignInTime);
    console.log(cred.additionalUserInfo.isNewUser);
    state.stored_auth_user_cred = cred;
    signup_email.value = "";
    signup_password.value = "";
    get_db_guides();
    state.data.just_made = "http://antenuh.com/".concat(ref.id);
    alert(state.data.just_made);
  }).catch(function (err) {
    console.log(err.message);
  });
}; // create stream


var db_create_stream = function db_create_stream() {
  var date = new Date();
  var ref = db.collection('users').doc();
  var id = ref.id;

  if (state.data.upload_details_post == "") {
    state.data.upload_details_post = "\n            https://firebasestorage.googleapis.com/v0/b/antenuh-9d2ca.appspot.com/o/sweet_gifs%2Fdownload.jpg?alt=media&token=4af1439e-7b46-4c97-8fae-3b10f6c0a8e1\n        ";
  }

  ;
  var create_stream_message = document.getElementById('create_stream_message');
  db.collection('users').doc(ref.id).set({
    stream_message: create_stream_message.value,
    id: ref.id
  }).then(function () {
    console.log('guide made');

    stream_message: create_stream_message.value;

    create_title.value = "";
    state.data.just_made = "create_stream_message.value";
    alert(state.data.just_made);
    get_db_guides();
  }).catch(function (err) {
    console.log(err.message);
  });
}; // update user


var db_update_user = function db_update_user(collection, deletable_id) {
  console.log(deletable_id);

  if (state.data.upload_details_profile == "") {
    state.data.upload_details_profile = "\n            https://firebasestorage.googleapis.com/v0/b/antenuh-9d2ca.appspot.com/o/sweet_gifs%2Fdownload.jpg?alt=media&token=4af1439e-7b46-4c97-8fae-3b10f6c0a8e1\n        ";
  }

  ;
  var date = new Date();
  db.collection(collection).doc(deletable_id).update({
    photo: state.data.upload_details_profile
  }).then(function () {
    //document.getElementById('user_title').value = ``,
    state.data.just_made = "http://antenuh.com/".concat(deletable_id);
    alert('just updated: ' + state.data.just_made);
    document.getElementById('upload_details_profile').innerHTML = "profile updated!";
    get_db_guides();
  }).catch(function (error) {
    console.error("Error writing document: ", error);
  });
};

var render_logged_data = function render_logged_data() {
  // render
  if (document.getElementById('conditional') != null) {
    document.getElementById('conditional').innerHTML = "\n\n        <h2>Change Profile Pic</h2>\n        <input class=\"display_none\" type=\"file\" value=\"upload\" id=\"fileButton_profile\" accept=\"image/*\" title=\"&nbsp;\"/>\n        <progress value=\"0\" max=\"100\" id=\"uploader_profile\">0%</progress>\n        <p id=\"upload_progress_profile\">images only</p>\n        <label for=\"fileButton_profile\">Select file</label>\n        <div id=\"upload_details_profile\"></div>\n\n        <button id=\"upload_details_profile_edit_button\" class=\"\">Update Profile Pic</button>\n\n        <form id=\"create_form\">\n            <p>modal-create</p>\n            \n            <input class=\"display_none\" type=\"file\" value=\"upload\" id=\"fileButton\" accept=\"image/*\" title=\"&nbsp;\"/>\n            <input placeholder=\"title\" type=\"text\" id=\"create_title\" required />\n            <input placeholder=\"sticky\" type=\"text\" id=\"create_sticky\" required />\n            <input placeholder=\"tagline\" type=\"text\" id=\"create_tagline\" required />\n            <input placeholder=\"hashtag\" type=\"text\" id=\"create_hashtag\" required />\n            <input placeholder=\"type\" type=\"text\" id=\"create_type\" required />\n            <input placeholder=\"category\" type=\"text\" id=\"create_category\" required />\n            <input placeholder=\"content\" type=\"text\" id=\"create_content\" required />\n            <input placeholder=\"youtube\" type=\"text\" id=\"create_youtube\" required />\n            <input placeholder=\"instagram\" type=\"text\" id=\"create_instagram\" required />\n            <input placeholder=\"twitter\" type=\"text\" id=\"create_twitter\" required />\n            <input placeholder=\"twitch\" type=\"text\" id=\"create_twitch\" required />\n            <input placeholder=\"spotify\" type=\"text\" id=\"create_spotify\" required />\n            <input placeholder=\"vimeo\" type=\"text\" id=\"create_vimeo\" required />\n\n            <progress value=\"0\" max=\"100\" id=\"uploader_post\">0%</progress>\n            <p id=\"upload_progress_post\">images only</p>\n            <label for=\"fileButton\">Select file</label>\n            <div id=\"upload_details_post\"></div>\n\n            <button id=\"create_button\" class=\"\">create</button>\n         </form>\n        \n        <form id=\"stream_form\">\n            <p>modal-stream</p>\n            \n            <input placeholder=\"stream_message\" type=\"text\" id=\"create_vimeo\" required />\n\n            <button id=\"stream_button\" class=\"\">stream</button>\n        </form>\n\n        <button id=\"signout\" alt=\"sign out\">\n           sign out\n        </button>\n\n        ";
  }

  ; // events

  if (document.getElementById('signout') != null) {
    // signout / un-auth
    var signout = document.getElementById('signout');
    signout.addEventListener('click', function (event) {
      state.data.user_logged_in = false;
      state.stored_auth_user_cred = {}; //get_db_guides();

      event.preventDefault();
      auth.signOut().then(function () {
        //alert('signout');
        console.log('logged out');
      });
      state.data.user_logged_in = false; //state.stored_auth_user_cred.uid =
      //get_db_guides();
    });
  }

  ;

  if (document.getElementById('stream_button') != null) {
    document.getElementById('stream_button').addEventListener('click', function (event) {
      event.preventDefault();
      db_create_stream();
      document.getElementById('stream_message').innerHTML = "uploaded!";
    });
  }

  ;

  if (document.getElementById('create_button') != null) {
    document.getElementById('create_button').addEventListener('click', function (event) {
      event.preventDefault();
      db_create_post("users");
      document.getElementById('upload_details_post').innerHTML = "uploaded!";
    });
  }

  ;

  if (document.getElementById('upload_details_profile_edit_button') != null) {
    document.getElementById('upload_details_profile_edit_button').addEventListener('click', function (event) {
      event.preventDefault();
      db_update_user("users", state.data.valid_user.id);
    });
  }

  ;

  if (document.getElementById('uploader_profile') != null) {
    // upload
    var uploader_profile = document.getElementById('uploader_profile');
    var upload_progress_profile = document.getElementById('upload_progress_profile');
    var fileButton_profile = document.getElementById('fileButton_profile');
    fileButton_profile.addEventListener('change', function (event) {
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
        uploader_profile.value = progress;
        upload_progress_profile.innerHTML = progress;
      }, function error(err) {}, function complete(snapshot) {
        setTimeout(function () {
          uploader_profile.value = 0;
          upload_progress_profile.innerHTML = "";
        }, 2000); // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          state.data.upload_details_profile = downloadURL;
          document.getElementById('upload_details_profile').innerHTML = "upload complete, available at: ".concat(state.data.upload_details_profile);
          document.getElementById('upload_details_profile').innerHTML += "\n                        <div id=\"uploaded_image_profile\" style=\"background-image: url(".concat(state.data.upload_details_profile, ")\">\n                        </div>");
        });
      });
    });
  }

  ;

  if (document.getElementById('uploader_post') != null) {
    // upload
    var uploader_post = document.getElementById('uploader_post');
    var upload_progress_post = document.getElementById('upload_progress_post');
    var fileButton_post = document.getElementById('fileButton_post');
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
        uploader_post.value = progress;
        upload_progress_post.innerHTML = progress;
      }, function error(err) {}, function complete(snapshot) {
        setTimeout(function () {
          uploader_post.value = 0;
          upload_progress_post.innerHTML = "";
        }, 2000); // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          state.data.upload_details_post = downloadURL;
          document.getElementById('upload_details_post').innerHTML = "upload complete, available at: ".concat(state.data.upload_details_post);
          document.getElementById('upload_details_post').innerHTML += "\n                        <div id=\"uploaded_image_post\" style=\"background-image: url(".concat(state.data.upload_details_post, ")\">\n                        </div>");
        });
      });
    });
  }

  ;
};

var render_unlogged_data = function render_unlogged_data() {
  // render
  if (document.getElementById('conditional') != null) {
    document.getElementById('conditional').innerHTML = "\n\n            <p>sign up</p>\n            <input type=\"text\" id=\"signup_email\" placeholder=\"signup_email\" />\n            <input type=\"text\" id=\"signup_password\" placeholder=\"signup_password\" />\n            <button id=\"signup_submit\" class=\"\">signup_submit\n            </button>\n\n\n            <p>sign in</p>\n            <input placeholder=\"signin_email\" type=\"signin_email\" id=\"signin_email\" required />\n            <input placeholder=\"signin_password\" type=\"signin_password\" id=\"signin_password\" required />\n            <button id=\"signin\" class=\"\">sign in</button>\n\n        ";
  }

  ; // events

  if (document.getElementById('signup_email') != null) {
    // sign up / auth / create user
    var signup_email = document.getElementById('signup_email');
    var signup_password = document.getElementById('signup_password');
    var signup_submit = document.getElementById('signup_submit');
    signup_submit.addEventListener('click', function (event) {
      event.preventDefault();
      auth.createUserWithEmailAndPassword(signup_email.value, signup_password.value).then(function (cred) {
        db_create_user(cred);
      });
    });
  }

  ;

  if (document.getElementById('signin_email') != null) {
    // sign in / auth
    var signin_email = document.getElementById('signin_email');
    var signin_password = document.getElementById('signin_password');
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
}; // listenforauth state changes


auth.onAuthStateChanged(function (logged_auth_user) {
  get_db_guides();
  console.log('onAuthStateChanged: ' + logged_auth_user);
  console.log('auth checked');

  if (logged_auth_user == null) {
    //alert('logged_auth_user == null');
    console.log('please login');
    state.auth_has_been_checked = true;
    render_unlogged_data();
  }

  ;

  if (logged_auth_user != null) {
    //alert('logged_auth_user != null');
    state.stored_auth_user_cred = logged_auth_user;
    console.log('logined in: ' + state.stored_auth_user_cred.uid);
    state.auth_has_been_checked = true;
    render_logged_data();
  }

  ;
});

var handle_ReturnState = function handle_ReturnState() {
  return state;
};

var handle_ReturnedState = function handle_ReturnedState(x) {
  state = x;
  get_dimensions();
}; // inital


document.addEventListener("DOMContentLoaded", function (event) {
  console.log('DOMContentLoaded');
  var url_split = window.location.href.split('/');
  console.log(url_split[2]);
  console.log(url_split[3]); // if a user page

  if (url_split[3] == 'p' && url_split[4] != null && url_split[5] == null) {
    console.log('at post page');
    state.data.url_type = 'post';
    state.data.url_post = url_split[4];
  }

  ; // if a user page

  if (url_split[3] != '' && url_split[4] == null) {
    console.log('at userpage!');
    state.data.url_type = 'user';
    state.data.url_user = url_split[3];
  }

  ; // if a home page

  if (url_split[3] == '') {
    console.log('at homepage!');
    state.data.url_type = 'home';
  }

  ;

  _elements.default.action_preloader();
});
window.addEventListener("load", function (event) {
  // add buffer for "WAIT TILL FB RES with data/ offline mode"
  _elements.default.shot_action_single_vomit();

  _elements.default.handle_events();
});
window.addEventListener("resize", function (event) {
  get_dimensions();
}); // scroll

window.addEventListener('scroll', function (event) {
  _events.default.handle_Function_Scroll(event);
}); // keys

body.addEventListener('keydown', function (event) {
  _events.default.handle_Function_Key_Down(event);
});
body.addEventListener('keyup', function (event) {
  _events.default.handle_Function_Key_Up(event);
});
body.addEventListener('mousemove', function (event) {
  _events.default.handle_Function_Mouse_Move(event);
});
body.addEventListener('mouseenter', function (event) {
  _events.default.handle_Function_Mouse_Enter(event);
});
body.addEventListener('mouseleave', function (event) {
  _events.default.handle_Function_Mouse_Leave(event);
});
body.addEventListener('mouseup', function (event) {
  _events.default.handle_Function_Mouse_Up(event);
});
body.addEventListener('mousedown', function (event) {
  _events.default.handle_Function_Mouse_Down(event);
});
body.addEventListener('click', function (event) {
  _events.default.handle_Function_Mouse_Down(event);
});
body.addEventListener('touchmove', function (event) {
  _events.default.handle_Function_Touch_Move(event);
});
body.addEventListener('touchstart', function (event) {
  _events.default.handle_Function_Touch_Start(event);
});
body.addEventListener('touchend', function (event) {
  _events.default.handle_Function_Touch_End(event);
});
"";
window.addEventListener("devicemotion", function (event) {
  _events.default.handle_Function_Device_Motion(event);
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
/*

window.addEventListener('scroll', (event) => {
    get_dimensions();
});

// events
body.addEventListener('keydown', (event) => {
    get_dimensions();
});

body.addEventListener('keyup', (event) => {
    get_dimensions();
});

body.addEventListener('mousemove', (event) => {
    get_dimensions();
});

body.addEventListener('mouseenter', (event) => {
    get_dimensions();
});

body.addEventListener('mouseleave', (event) => {
    get_dimensions();
});

body.addEventListener('mouseup', (event) => {
    get_dimensions();
});

body.addEventListener('mousedown', (event) => {
    get_dimensions();
});

body.addEventListener('click', (event) => {
    get_dimensions();
});

body.addEventListener('touchmove', (event) => {
    get_dimensions();
});

body.addEventListener('touchstart', (event) => {
    get_dimensions();
});

body.addEventListener('touchend', (event) => {
    get_dimensions();
});
``
window.addEventListener("devicemotion", (event) => {
    get_dimensions();
});

*/

window.addEventListener("deviceorientation", function (event) {//get_dimensions();
});
window.addEventListener("orientationchange", function (event) {
  tiny_height = 0;
  tiny_width = 0;
  get_dimensions();
});
window.addEventListener("beforeunload", function (event) {});
var _default = {
  handle_ReturnState: handle_ReturnState,
  handle_ReturnedState: handle_ReturnedState,
  get_dimensions: get_dimensions,
  db_create_post: db_create_post
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/elements":"imports/elements.js","./imports/events":"imports/events.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50944" + '/');

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