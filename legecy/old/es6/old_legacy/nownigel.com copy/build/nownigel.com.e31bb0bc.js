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
})({"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"partials/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = "";

var route_dashboard_not_logged = function route_dashboard_not_logged() {
  var content = "\n\n        <div id=\"dashboard_posts\" class=\"position_relative width_100 height_100vh bg_green float_left\">\n\n          please sign in\n\n        </div>\n        \n      ";
  return content;
};

var route_dashboard = function route_dashboard(data) {
  var content = "\n\n                    <div id=\"route_dashboard\" class=\"position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n\n        <div id=\"post_block_1\" style=\"\n        background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_100vh position_relative float_left\">\n        </div>\n\n        <div id=\"dashboard_posts\" class=\"position_relative width_100 height_100vh bg_green float_left\">\n        </div>\n\n        <b>your library</b><br>\n        <div id=\"element_ol_firebase_user_library\" class=\"position_relative width_100 float_left\"></div>\n      \n        <b>subs library</b><br>\n        <div id=\"element_ol_firebase_user_subs_library\" class=\"position_relative width_100 float_left\"></div>\n\n      </div>\n      ");
  return content;
};

var element_scroll_y_events = function element_scroll_y_events(id, info) {
  var component = "\n      <div id=\"".concat(id, "\" class=\"position_absolute top_0 width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1\">\n        <div class=\"position_relative width_100 float_left\">\n          ").concat(info, "\n        </div>\n      </div>\n    ");
  setTimeout(function () {
    document.getElementById(id).addEventListener("scroll", function (event) {
      console.log(event); //alert('yup');
      // scrolling

      console.log("event.srcElement.clientWidth: " + event.srcElement.clientWidth);
      console.log("event.srcElement.clientHeight: " + event.srcElement.clientHeight);
      console.log("event.srcElement.scrollLeft: " + event.srcElement.scrollLeft);
      console.log("event.srcElement.scrollTop: " + event.srcElement.scrollTop);
      console.log("event.srcElement.scrollWidth: " + event.srcElement.scrollWidth);
      console.log("event.srcElement.scrollHeight: " + event.srcElement.scrollHeight);
      state = _index.default.Handle_return_state();
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
      } // instances


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

      _index.default.Handle_get_state_from_events();
    }, false);
  }, 101);
  return component;
};

var menu_sub = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Nigel\n                  </div>\n              </div>\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div  id=\"route_workshop_2\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Maisie\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var element_after_sign_in = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">login user</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_sign_up = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n\n                    <br>\n                    <b>Create new user</b><br>\n                    <input type=\"text\" id=\"new_username\" placeholder=\"new username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"new_password\" placeholder=\"new password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_create_user\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create user</button>\n                    </div>\n\n                    <br>\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_menu_about = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div id=\"route_about_1\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  \n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                    <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Brand\n                  </div>\n\n                  ".concat(menu_sub, "\n\n              </div>\n\n              <div id=\"route_about_2\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Products\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_3\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Office\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_4\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Staff\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_5\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Locations\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_6\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Process\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n");
var element_after_menu_logo = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_left_top_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div  class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_vert_dots = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 height_100 text_align_center float_left\">\n          <div class=\" height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_right_top_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    options\n                   </div>\n                </div>\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_menu = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_top_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div  class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_social = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_0 bottom_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_bottom_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    @nownigel\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_meta = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_0 bottom_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_bottom_right_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    Volume: 1 - 100\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_search = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_top_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    type |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    tag |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    category |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    sub categories |\n                  </div>\n                </div>\n\n                <div  class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    date |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_icon_back = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_left_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_location\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ".concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div  id=\"icon_qr\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_audio\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_info\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div  class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_create\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n");
var element_after_menu_dashboard = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_right_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitter\" class=\"gui_twitter width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitch\" class=\"gui_twitch width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_facebook\" class=\"gui_facebook width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_youtube\" class=\"gui_youtube width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_instagram\" class=\"gui_instagram width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var anchor_menu_left = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_top = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_bottom = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";

var component_app_content_root = function component_app_content_root() {
  var component = "\n\n      <div id=\"section_1\" class=\"position_relative width_100 height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n        <div class=\"position_relative max_width width_100 height_100vh margin_auto float_left\">\n          \n          <div id=\"cursor_move_ctas\" class=\"easing_01 display_none opacity_0 position_absolute bottom_0 top_0 right_0 width_100 height_100 margin_auto float_left\">\n            \n            <div id=\"logo_filler\" class=\"position_absolute bottom_0 top_0 left_0 right_0 width_25 height_20vh margin_auto float_left\">\n\n                <div id=\"logo_links_left\" class=\"width_100 height_100 float_left position_absolute top_0 bottom_0 right_100 margin_auto\">\n                  <div class=\"gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n                </div>\n\n                <div id=\"fold_logo\" class=\"gui_logo_full position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left opacity_02\">\n                </div>\n\n                <div id=\"fold_stamp\" class=\"gui_logo_stamp position_absolute bottom_100 right_25 width_100 height_100 margin_auto float_left\">\n                </div>\n\n                <div id=\"logo_links_right\" class=\"width_100 height_100 float_left position_absolute top_0 bottom_0 left_100 margin_auto\">\n                  <div class=\"gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n                </div>\n\n                <div id=\"fold_note\" class=\"position_absolute width_100 height_100 top_100 left_0 right_0 margin_auto float_left\">\n                    <div class=\" position_absolute width_75 height_50 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note\">\n                    </div>\n                </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"key_press_ctas\" class=\"easing_01 display_none opacity_0 position_absolute bottom_0 top_0 right_0 width_100 height_100 margin_auto float_left\">\n            \n            <div id=\"logo_filler\" class=\"position_absolute bottom_0 top_0 left_0 right_0 width_25 height_20vh margin_auto float_left\">\n\n                <div id=\"logo_links_left\" class=\"width_100 height_100 float_left position_absolute top_0 bottom_0 right_100 margin_auto\">\n                  <div class=\"gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n                </div>\n\n                <div id=\"fold_logo\" class=\"gui_logo_full position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left opacity_02\">\n                </div>\n\n                <div id=\"fold_stamp\" class=\"gui_logo_stamp position_absolute bottom_100 right_25 width_100 height_100 margin_auto float_left\">\n                </div>\n\n                <div id=\"logo_links_right\" class=\"width_100 height_100 float_left position_absolute top_0 bottom_0 left_100 margin_auto\">\n                  <div class=\"gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n                </div>\n\n                <div id=\"fold_buttons\" class=\"position_absolute width_100 top_100 left_0 right_0 margin_auto\">\n\n                    <div class=\"easing_01 position_relative width_100 margin_auto float_left\">\n                      \n                        <div class=\"position_relative margin_auto float_left display_flex_flow  width_100\">\n\n                            <div id=\"gui_start_buttons\" class=\"gui_button_start position_relative width_6025vw height_1205vh float_left\">\n                            </div>\n\n                            <div class=\"gui_or position_relative width_30125vw height_1205vh float_left\">\n                            </div>\n                            \n                            <div id=\"gui_learn_buttons\" class=\"gui_button_learn position_relative width_6025vw height_1205vh float_left\">\n                            </div>\n\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"scroll_up_ctas\" class=\"easing_01 display_none opacity_0 position_absolute bottom_0 top_0 right_0 width_100 height_100 margin_auto float_left\">\n            \n            <div id=\"logo_filler\" class=\"position_absolute bottom_0 top_0 left_0 right_0 width_25 height_20vh margin_auto float_left\">\n\n                <div id=\"logo_links_left\" class=\"width_100 height_100 float_left position_absolute top_0 bottom_0 right_100 margin_auto\">\n                  <div class=\"gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n                </div>\n\n                <div id=\"fold_logo\" class=\"gui_logo_full position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left opacity_02\">\n                </div>\n\n                <div id=\"fold_stamp\" class=\"gui_logo_stamp position_absolute bottom_100 right_25 width_100 height_100 margin_auto float_left\">\n                </div>\n\n                <div id=\"logo_links_right\" class=\"width_100 height_100 float_left position_absolute top_0 bottom_0 left_100 margin_auto\">\n                  <div class=\"gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n                </div>\n\n                <div id=\"fold_scroll_again\" class=\"position_absolute top_100 left_0 right_0 width_100 margin_auto\">\n                    <div class=\"position_relative margin_auto float_left display_flex_flow  width_100\">\n                        <div class=\"gui_arrow_bottom pulse infinite animated1 position_relative width_6025vw height_1205vh float_left\">\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"scroll_down_ctas\" class=\"easing_01 display_none opacity_0 position_absolute bottom_0 top_0 right_0 width_100 height_100 margin_auto float_left\">\n            \n            <div id=\"logo_filler\" class=\"position_absolute bottom_0 top_0 left_0 right_0 width_25 height_20vh margin_auto float_left\">\n\n                <div id=\"logo_links_left\" class=\"width_100 height_100 float_left position_absolute top_0 bottom_0 right_100 margin_auto\">\n                  <div class=\"gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n                </div>\n\n                <div id=\"fold_logo\" class=\"gui_logo_full position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left opacity_02\">\n                </div>\n\n                <div id=\"fold_stamp\" class=\"gui_logo_stamp position_absolute bottom_100 right_25 width_100 height_100 margin_auto float_left\">\n                </div>\n\n                <div id=\"logo_links_right\" class=\"width_100 height_100 float_left position_absolute top_0 bottom_0 left_100 margin_auto\">\n                  <div class=\"gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n                </div>\n\n                <div id=\"fold_scroll\" class=\"position_absolute top_100 left_0 right_0 width_100 margin_auto\">\n                    <div class=\"position_relative margin_auto float_left display_flex_flow  width_100\">\n                        <div class=\"gui_scroll pulse infinite animated1 position_relative width_6025vw height_1205vh float_left\">\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"start_ctas\" class=\"easing_01 display_none opacity_0 position_absolute bottom_0 top_0 right_0 width_60 height_100 margin_auto float_left\">\n            \n            <div class=\"position_relative width_100 height_50 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"position_relative width_50 height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"position_relative calc_5vh margin_auto float_left\">\n                \n                  <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left\">\n                    \n                    <div class=\"width_100 height_25 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                      \n                      <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                        <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                          \n                        </div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"width_100 height_75 float_left position_relative float_left margin_auto\">\n                      \n                      <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          \n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                      </div>\n\n                      <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          \n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                            \n                          </div>\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div class=\"position_relative width_50 height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"position_relative calc_5vh margin_auto float_left\">\n        \n                  <div class=\"position_relative width_100 height_50 margin_auto float_left\">\n                    \n\n                    <div class=\"width_100 height_25 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                      \n                      <div class=\"width_6025vw height_100 float_left position_relative float_left margin_auto z_index_7\">\n                        <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                          \n                        </div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"width_100 height_75 float_left position_relative float_left margin_auto\">\n\n                      <div class=\"width_100 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                        \n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto\">\n                              \n                          <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              \n                            <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                          </div>\n\n                          <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              \n                            <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                          </div>\n\n                        </div>\n\n                        <div class=\"width_25 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"position_relative width_100 height_50 margin_auto float_left\">\n                    \n\n                    <div class=\"width_100 height_25 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                      \n                      <div class=\"width_6025vw height_100 float_left position_relative float_left margin_auto z_index_7\">\n                        <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                          <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                          \n                        </div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"width_100 height_75 float_left position_relative float_left margin_auto\">\n\n                      <div class=\"width_100 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                        \n                        <div class=\"width_33 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                        <div class=\"width_33 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                        <div class=\"width_33 height_100 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                          <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                              <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                              \n                            </div>\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_relative width_100 height_50 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"position_relative calc_5vh margin_auto float_left\">\n              \n                <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left\">\n                    \n                  <div class=\"position_relative margin_auto float_left display_flex_flow height_50 width_100\">\n\n                    <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left\">\n                          \n\n                          <div class=\"height_100 width_25 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n                            <div class=\"width_100 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                          </div>\n\n\n                          <div class=\"height_100 width_75 float_left position_relative float_left margin_auto\">\n                            \n                            <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                \n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                            </div>\n\n                            <div class=\"width_100 height_50 float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                \n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                              <div class=\"width_25 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                  <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                  \n                                </div>\n                              </div>\n\n                            </div>\n\n                          </div>\n\n                        </div>\n                    \n                  </div>\n\n                  <div class=\"position_relative margin_auto float_left display_flex_flow height_50 width_100\">\n\n                    <div class=\"position_relative margin_auto float_left display_flex_flow height_100 width_50\">\n\n                        <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"position_relative margin_auto float_left display_flex_flow height_100 width_50\">\n\n                        <div class=\"position_relative calc_02vh border_01vh_black margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                            \n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_about_type width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                            <div class=\"width_20 height_100 float_left position_relative float_left margin_auto z_index_7\">\n                              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                <div class=\"gui_button_help width_75 height_50 float_left position_relative float_left margin_auto\"></div>\n                                \n                              </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"learn_ctas\" class=\"easing_01 display_none opacity_0 position_absolute bottom_0 top_0 left_0 width_60 height_100 bg_yellow margin_auto float_left\">\n            \n            <div class=\"position_relative width_100 height_50 margin_auto float_left\">\n              <div class=\"position_relative calc_5vh bg_yellow margin_auto float_left\">\n              \n              </div>\n            </div>\n\n            <div class=\"position_relative width_100 height_50 margin_auto float_left\">\n              <div class=\"position_relative calc_5vh bg_yellow margin_auto float_left\">\n              \n              </div>\n            </div>\n          </div>\n\n          <div id=\"scrolling_ctas\" class=\"easing_01 display_none opacity_0 position_absolute top_0 left_0 width_100 height_25vh bg_green margin_auto float_left\">\n          </div>\n\n        </div>\n      </div>\n\n      <div id=\"section_2\" class=\"position_relative width_100 height_100vh gradient_yellow_bottom float_left display_flex_flow\">\n            \n      </div>\n\n      <div id=\"section_3\" class=\"position_relative width_100 height_100vh bg_yellow float_left display_flex_flow\">\n              \n          <div class=\"gui_dash position_absolute bottom_0 top_0 left_0 right_0 width_50 height_50 margin_auto float_left\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 left_0 width_100 height_100 gradient_yellow_left float_left display_flex_flow\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 right_0 width_100 height_100 gradient_yellow_right float_left display_flex_flow\">\n          </div>\n\n\n            <div class=\"easing_01 position_absolute width_100 height_100 bottom_0 left_0 right_0 margin_auto float_left\">\n              \n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n            </div>\n\n      </div>\n\n      <div id=\"section_4\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Action #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Match Loggin & Local</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled Bottom Blog</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Timed Nav vanish</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded + cursor_moved</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"section_5\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_6\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_7\" class=\"position_relative width_100 height_100vh margin_auto gui_paint_bottom float_left\">\n      \n      </div>\n\n      <div id=\"section_8\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n  ";
  return component;
};

var element_guis = function element_guis() {
  var element = "\n\n      <div id=\"component_app_gui_top_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed top_0 left_0 margin_auto z_index_10\">\n\n          <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_menu\" class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                ".concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto width_6025vw height_1205vh float_left transform_translate3d_left0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left\">\n              \n              <div id=\"icon_logo\" class=\"gui_logo position_relative width_100 height_100 margin_auto top_-05vh float_left\">\n                ").concat(element_after_menu_logo, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"search_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_search\" class=\"gui_search position_relative width_50 height_50 float_left\">\n                ").concat(element_after_search, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_back\" class=\"gui_arrow_left position_relative width_75 height_50 float_left\">\n                ").concat(element_after_icon_back, "\n              </div>\n\n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"component_app_gui_top_center\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed calc_25vh_width top_0 left_0 right_0 margin_auto z_index_10\">\n\n      </div>\n\n      <div id=\"component_app_gui_top_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_10\">\n\n        <div id=\"icon_sign_out\" class=\"display_none width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_signout width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            ").concat(element_after_menu_about, "\n          </div>\n        </div>\n\n        <div id=\"icon_sign_in\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_signin width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            ").concat(element_after_sign_in, "\n          </div>\n        </div>\n\n        <div id=\"icon_sign_up\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_signup width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            ").concat(element_after_sign_up, "\n          </div>\n        </div>\n        \n        <div id=\"user_related\">\n          <div id=\"gui_route\" class=\"position_relative width_6025vw height_1205vh float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_dots\" class=\"gui_dots position_relative width_50 height_50 float_left\">\n            ").concat(element_after_vert_dots, "\n            </div>\n          </div>\n\n          <div id=\"icon_dashboard\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"user_thumb\" class=\"gui_user_blank width_50 height_50 float_left position_relative float_left margin_auto\"></div>\n              ").concat(element_after_menu_dashboard, "\n            </div>\n          </div>\n\n          <div id=\"gui_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_vert_dots\" class=\"gui_vert_dots width_50 height_50 float_left position_relative float_left margin_auto\">\n              ").concat(element_after_vert_dots, "\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 right_0 margin_auto z_index_10 display_webkit_box webkit_box_pack_center webkit_box_align\">\n          \n          <div class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n              <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n              <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n              <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n              <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n              <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n              <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n          </div>\n\n      </div>\n\n      <div id=\"component_app_gui_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 left_0 margin_auto z_index_10 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n        <div class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto z_index_10\">\n\n            <div id=\"gui_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_1205vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_logo_navs position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed bottom_0 left_0 margin_auto z_index_10\">\n        \n        <div id=\"social_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n            \n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_vert_colon width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_twitter\" class=\"gui_twitter width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_twitch\" class=\"gui_twitch width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_facebook\" class=\"gui_facebook width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_youtube\" class=\"gui_youtube width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_instagram\" class=\"gui_instagram width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n\n\n\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_center\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed calc_25vh_width bottom_0 left_0 right_0 margin_auto z_index_10\">\n        \n        <div class=\"width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n          <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div class=\"gui_button_hire width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n              \n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_10\">\n\n        <div id=\"meta_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_audio width_100 height_50 float_left position_relative float_left margin_auto\">\n            ").concat(element_after_meta, "\n            </div>\n            \n          </div>\n        </div>\n        \n        <div id=\"meta_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_audio_on width_100 height_50 float_left position_relative float_left margin_auto\">\n            ").concat(element_after_meta, "\n            </div>\n            \n          </div>\n        </div>\n\n        <div id=\"meta_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_audio_off width_100 height_50 float_left position_relative float_left margin_auto\">\n            ").concat(element_after_meta, "\n            </div>\n            \n          </div>\n        </div>\n\n        <div id=\"meta_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_i width_100 height_50 float_left position_relative float_left margin_auto\">\n            ").concat(element_after_meta, "\n            </div>\n            \n          </div>\n        </div>\n\n        <div id=\"meta_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_i_circle width_100 height_50 float_left position_relative float_left margin_auto\">\n            ").concat(element_after_meta, "\n            </div>\n            \n          </div>\n        </div>\n\n        <div id=\"meta_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_hire width_100 height_50 float_left position_relative float_left margin_auto\">\n            ").concat(element_after_meta, "\n            </div>\n            \n          </div>\n        </div>\n\n        <div id=\"meta_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\">\n            ").concat(element_after_meta, "\n            </div>\n            \n          </div>\n        </div>\n\n        <div id=\"meta_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\">\n            ").concat(element_after_meta, "\n            </div>\n            \n          </div>\n        </div>\n\n        <div id=\"meta_route\" class=\"enterTop animated1 position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div id=\"icon_up\" class=\"gui_arrow_top position_relative width_75 height_50 float_left\">\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    ");
  return element;
};

var value_ui_controls = "\n\n\n        <div class=\"position_relative width_100 float_left\">\n        <div class=\"position_relative calc_5vh margin_205vh float_left\">\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">events:</div>\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            Usual Events\n            </div>\n\n            <div class=\"position_relative font_size_2vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            time: <div id=\"time\"></div>\n            </div>\n\n\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n              64\n            </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse:</div>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_X: <div id=\"mouse_up_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_Y: <div id=\"mouse_up_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_X: <div id=\"mouse_down_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_Y: <div id=\"mouse_down_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up: <div id=\"mouse_up\"></div>\n            </p>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            click_position: <div id=\"click_position\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            wheel_direction: <div id=\"wheel_direction\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse down track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXstart: <div id=\"mousedragDistanceXstart\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYstart: <div id=\"mousedragDistanceYstart\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse up track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXend: <div id=\"mousedragDistanceXend\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYend: <div id=\"mousedragDistanceYend\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drag:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragX: <div id=\"dragX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragY: <div id=\"dragY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pen:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penX: <div id=\"penX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penY: <div id=\"penY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pencil:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilX: <div id=\"pencilX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilY: <div id=\"pencilY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_start:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_end:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">ux:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">dimensions:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_dimensions_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_dimensions_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">browser:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_browser_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_browser_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">Timer:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_leave: <div id=\"timer_mouse_leave\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_key_up: <div id=\"timer_key_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_up: <div id=\"timer_mouse_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            keys: <div id=\"key_keys\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key down: <div id=\"key_key_down\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key up: <div id=\"key_key_up\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Absolute: \n  <div id=\"component_app_status_state_events_mouse_absolute\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Alpha: \n  <div id=\"component_app_status_state_events_mouse_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Beta: \n  <div id=\"component_app_status_state_events_mouse_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Gamma: \n  <div id=\"component_app_status_state_events_mouse_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.x: \n  <div id=\"component_app_status_state_events_mouse_acceleration_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.y: \n  <div id=\"component_app_status_state_events_mouse_acceleration_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.z: \n  <div id=\"component_app_status_state_events_mouse_acceleration_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.x: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.y: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.z: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Alpha: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Beta: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Gamma: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            rotationAngle: <div id=\"rotationAngle\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusX: <div id=\"radiusX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusY: <div id=\"radiusY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceX: <div id=\"dragDistanceX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceY: <div id=\"dragDistanceY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXStart: <div id=\"dragDistanceXStart\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYStart: <div id=\"dragDistanceYStart\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXEnd: <div id=\"dragDistanceXEnd\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYEnd: <div id=\"dragDistanceYEnd\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_X: <div id=\"touch_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_Y: <div id=\"touch_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_X: <div id=\"touch_page_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_Y: <div id=\"touch_page_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touches: <div id=\"touches\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_X: <div id=\"touch_start_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_Y: <div id=\"touch_start_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_force: <div id=\"touch_start_force\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_X: <div id=\"touch_end_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_Y: <div id=\"touch_end_client_Y\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone Only:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_force: <div id=\"touch_end_force\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad VR:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last_action: <div id=\"last_action\"></div>\n            </p>\n\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad Oriontation:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_alpha: <div id=\"event_alpha\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_beta: <div id=\"event_beta\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_gamma: <div id=\"event_gamma\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">Component API:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientHeight (Container Height): <div id=\"scroll_clientHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientWidth: <div id=\"scroll_clientWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollHeight (Max Scroll Height): <div id=\"scroll_scrollHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollWidth: <div id=\"scroll_scrollWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollTop (Current Scroll): <div id=\"scroll_scrollTop\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollLeft: <div id=\"scroll_scrollLeft\"></div>\n            </p>\n\n\n        \n  <div class=\"position_relative width_100 float_left \">\n  UI state:\n  </div>\n  <div class=\"position_relative width_100 float_left\">\n  Route State (Onboarding, Form, Search, Interaction):\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Setting:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Accent:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Effect:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Pieces:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Particles:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Interaction:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Characters:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">enemies: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Route:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Materials: \n  <div id=\"route\" class=\" position_relative display opacity_1\">materials</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Gui:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">logo: \n  <div id=\"component_app_status_display_gui_element_logo\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">arrows: \n  <div id=\"component_app_status_display_gui_element_arrows\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">buttons: \n  <div id=\"component_app_status_display_gui_element_buttons\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_10vh\">Modal:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pop</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pip</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">nav</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">page</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">menu</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">morph</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">corner</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">gradient</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">fade</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">overlay</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  </div>\n  </div>\n  ";
var element_nav_top = "\n    <div id=\"component_app_modal_element_nav_top\" class=\"easing_01 display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 margin_auto height_1205vh calc_20vh_width z_index_6 \">\n      \n      <div class=\"position_relative webkit_box_pack_center webkit_box_align display_webkit_box width_100 z_index_1 float_left\">\n          \n        <div class=\"margin_auto position_relative float_left z_index_1 \">\n\n          <div id=\"routes\" class=\"margin_auto position_relative float_left z_index_1 \">\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div id=\"route_about\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\">\n\n                    <div id=\"route_about_icon\" class=\"circle position_absolute right_100 top_0 bottom_0 width_10 height_100 margin_1025vh float_left\">\n                      ".concat(anchor_menu_right, "\n                    </div>\n\n                  </div>\n\n                  ").concat(element_after_menu_about, "\n\n                </div>\n\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_team\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_library\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_abilities\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n                \n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_partners\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n                \n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_services\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n    ");
var element_nav_left = "\n    <div id=\"component_app_modal_element_nav_left\" class=\"easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_6 margin_auto\">\n      \n      \n    </div>\n    ";
var element_nav_bottom = "\n    <div id=\"component_app_modal_element_nav_bottom\" class=\"easing_01 transform_translate3d_top0 display_none opacity_0 position_fixed bottom_0 left_0 right_0 height_10vh width_100 z_index_6 margin_auto\">\n      \n    </div>\n    ";
var element_nav_right = "\n    <div id=\"component_app_modal_element_nav_right\" class=\"easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 bottom_0 right_0 height_100 width_10vh z_index_6 margin_auto\">\n      \n    </div>\n    ";
var element_page_top = "\n    <div id=\"component_app_modal_element_page_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_6 margin_auto\">\n      <div id=\"component_app_modal_element_page_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n        \n      </div>\n\n    </div>\n    ";
var element_page_left = "\n    <div id=\"component_app_modal_element_page_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_6 margin_auto\">\n      <div id=\"component_app_modal_element_page_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_page_bottom = "\n    <div id=\"component_app_modal_element_page_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_page_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\"> \n\n      </div>\n    </div>\n    ";
var element_page_right = "\n    <div id=\"component_app_modal_element_page_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_page_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_pop_top = "\n    <div id=\"component_app_modal_element_pop_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6\">\n      <div id=\"component_app_modal_element_pop_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n      </div>\n    </div>\n    ";
var element_pop_left = "\n  <div id=\"component_app_modal_element_pop_left\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pop_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh margin_auto max_width \">\n        \n\n\n    </div>\n  </div>\n  ";
var element_pop_bottom = "\n    <div id=\"component_app_modal_element_pop_bottom\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_pop_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 z_index_6 margin_auto bg_white\">\n            \n\n      </div>\n    </div>\n  ";
var element_pop_right = "\n  <div id=\"component_app_modal_element_pop_right\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pop_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden bg_yellow border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_6 margin_auto\">\n      \n\n    </div>\n  </div>\n  ";
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
var element_menu_top = "\n    <div id=\"component_app_modal_element_menu_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_25vh margin_auto z_index_6\">\n\n    </div>\n   ";
var element_menu_left = "\n    <div id=\"component_app_modal_element_menu_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh_height width_25vw margin_auto z_index_6\">      \n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>";
var element_menu_bottom = "\n    <div id=\"component_app_modal_element_menu_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh_width height_25vh margin_auto z_index_6\">\n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>\n    ";
var element_menu_right = "\n    <div id=\"component_app_modal_element_menu_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh_height width_25vw margin_auto z_index_6\">\n       \n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            ".concat(value_ui_controls, "\n          </div>\n        </div>\n\n    </div>\n    ");
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
var _default = {
  component_app_content_root: component_app_content_root,
  element_guis: element_guis,
  value_ui_controls: value_ui_controls,
  // routes
  route_dashboard: route_dashboard,
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
exports.default = _default;
},{"../index.js":"index.js"}],"partials/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

var _elements = _interopRequireDefault(require("./elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';

var from_Import = function from_Import() {
  console.log('from functions');
}; // 5. Functions


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
  state = _index.default.Handle_return_state();

  if (data != null) {
    var categories = "";
    var subcategories = "";
    var types = "";
    var usernames = "";
    var tags = "";

    for (var i = 0; i < data.categories; i++) {
      categories += "<a href='#'>".concat(data.categories[i], "</a>");
    }

    for (var i = 0; i < data.subcategories; i++) {
      subcategories += "<a href='#'>".concat(data.subcategories[i], "</a>");
    }

    if (data.usernames != null) {
      for (var usernames_index = 0; usernames_index < data.usernames.length; usernames_index++) {
        usernames += "<a href='#'>".concat(data.usernames[usernames_index].username, "</a>");
      }
    }

    ;

    for (var i = 0; i < data.types; i++) {
      types += "<a href='#'>".concat(data.types[i].title, "</a>");
    }

    for (var i = 0; i < data.tags; i++) {
      tags += "<a href='#'>".concat(data.tags[i], "</a>");
    }

    ELEMENT.innerHTML = "\n        <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n          \n          <div id=\"post_block_1\" style=\"\n           background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_100 position_relative float_left\">\n          \n            <div id=\"post_block_3\">\n\n              <h1>Meta:</h1>\n              <p class=\"width_100\">title:").concat(data.title, "</p>\n              \n            </div>\n\n          </div>\n\n          <div id=\"post_block_2\">\n              <h1>Meta:</h1>\n              <p>title:").concat(data.title, "</p>\n              <p>usernames:").concat(usernames, "</p>\n              <p>types:").concat(types, "</p>\n              <p>type:").concat(data.type, "</p>\n              <p>categories:").concat(categories, "</p>\n              <p>subcategories:").concat(subcategories, "</p>\n              <p>tags:").concat(tags, "</p>\n\n              <h1>Stats:</h1>\n              <p>views:").concat(data.views, "</p>\n              <p>likes:").concat(data.likes, "</p>\n              <p>dislikes:").concat(data.dislikes, "</p>\n\n              <h1>Content:</h1>\n              <p>paragraph:").concat(data.paragraph, "</p>\n              <p>feature_image_src:").concat(data.feature_image_src, "</p>\n          </div>\n\n          <div id=\"post_block_4\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"\">like</button>\n            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"\">dislike</button>\n            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"\">view</button>\n            <button class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\" id=\"\">delete</button>\n          </div>\n\n        </div>\n\n      ");
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  setTimeout(function () {
    ELEMENT.children[0].children[2].children[0].addEventListener("click", function (event) {
      _index.default.likeWhoListings('library', data.id);
    });
    ELEMENT.children[0].children[2].children[1].addEventListener("click", function (event) {
      _index.default.dislikeWhoListings('library', data.id);
    });
    ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {
      _index.default.viewWhoListings('library', data.id);
    });
    ELEMENT.children[0].children[2].children[3].addEventListener("click", function (event) {
      _index.default.deleteWhoListings('library', data.id);
    }); // view!!!

    ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {
      var preview = function preview() {
        // function start (preview)
        var post_preview_from_li_link = '';
        var preview_content = '';
        var preview_scrolling_container = '';
        var preview_bg_container = "\n                          <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1\">\n                          </div>\n\n                          <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_black opacity_01 z_index_1\">                \n                          </div>\n\n                          <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh z_index_1\">\n                       \n                              <div class=\"position_absolute top_0 left_0 margin_auto width_205vh height_205vh z_index_1\">\n                                  <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_left width_50 height_50 z_index_1\">\n                                  </div>\n                              </div>\n\n                              <div class=\"position_absolute top_0 right_0 margin_auto width_205vh height_205vh z_index_1\">\n                                  <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_right width_50 height_50 z_index_1\">\n                                  </div>\n                              </div>\n\n                              <div class=\"position_absolute bottom_0 left_0 margin_auto width_205vh height_205vh z_index_1\">\n                                  <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_left width_50 height_50 z_index_1\">\n                                  </div>\n                              </div>\n\n                              <div class=\"position_absolute bottom_0 right_0 margin_auto width_205vh height_205vh z_index_1\">\n                                  <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_right width_50 height_50 z_index_1\">\n                                  </div>\n                              </div>\n\n                          </div>\n\n                          <div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1\">\n                       \n                          </div>\n                        \n                      ");
        var preview_title_container = "\n                          <div class=\"position_absolute top_0 left_0 right_0 float_left width_100 height_10vh bg_blue margin_auto z_index_2 text_align_center box_shadow_bottom_1vh_dark font_size_5vh line_height_10vh border_01vh_dark_yellow_9 \">\n                              ".concat(data.title, " ").concat(data.type, "\n                          </div>\n                      ");
        var preview_control_container = "<div class=\"position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_pop_top_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_pop_top_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
        preview_content = "\n                        <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                            ".concat(data.title, " ").concat(data.type, "\n                        </div>\n\n                        <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                            ").concat(data.title, " ").concat(data.type, "\n                        </div>\n                        \n                        <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                            ").concat(data.title, " ").concat(data.type, "\n                        </div>\n\n                        <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                            ").concat(data.title, " ").concat(data.type, "\n                        </div>\n                        \n                        <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                            ").concat(data.title, " ").concat(data.type, "\n                        </div>\n\n                        <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                            ").concat(data.title, " ").concat(data.type, "\n                        </div>\n                      ");
        preview_scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_pop', preview_content);
        post_preview_from_li_link = "<div class=\"position_absolute width_100 height_100 margin_auto\">".concat(preview_bg_container, "\n                      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh overflow_hidden margin_205vh z_index_1\">\n                      ").concat(preview_title_container, "<div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh z_index_1\">").concat(preview_scrolling_container, "</div></div>").concat(preview_control_container, "</div>");
        preview_container.innerHTML = post_preview_from_li_link;
        state.ui.modal.pop.top.display = true;
        setTimeout(function () {
          state.ui.modal.pop.top.transform = false;
        }, 101); // add event listeners

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
          var detail_content = "\n                                \n                                <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                                    PAGE\n                                </div>\n                                \n                                <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                                    ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n                                </div>\n\n                              ");
          var route_background = "";
          var foreground_content = "";

          var scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_page', detail_content);

          var control_container = "<div class=\"position_absolute bottom_0 top_0 right_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_page_top_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_page_top_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
          post_detail_from_li_link = "\n                                  <div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" id=\"post_detail_from_li_link\" class=\"position_absolute width_100 height_100vh margin_auto\">\n                                      \n                                      ").concat(route_background, "\n                                      <div id=\"scrolling_container\">\n                                      ").concat(scrolling_container, "\n                                      </div>\n                                      ").concat(control_container, "\n                                      ").concat(foreground_content, "\n\n                                  </div>");
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
          }); // ON TO overlay

          document.getElementById('component_app_modal_element_page_top_content_enter' + number + '').addEventListener('click', function (event) {
            // overlay 
            state.ui.modal.overlay.top.display = true;
            state.ui.modal.overlay.top.transform = true; // function start (Detail)

            var post_overlay_from_li_link = '';
            var overlay_content = "\n                                          \n                                          <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                                              overlay\n                                          </div>\n                                          \n                                          <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                                              ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n                                          </div>\n\n                                      ");
            var overlay_scrolling_container = '';
            var control_container = "<div class=\"position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_overlay_top_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_overlay_top_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
            overlay_scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_overlay', overlay_content);
            post_overlay_from_li_link = "<div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" id=\"post_overlay_from_li_link\" class=\"position_absolute width_100 height_100vh margin_auto\">").concat(overlay_scrolling_container).concat(control_container, "</div>");
            overlay_container.innerHTML = post_overlay_from_li_link;
            state.ui.modal.overlay.top.display = true;
            setTimeout(function () {
              state.ui.modal.overlay.top.transform = false;
            }, 101); // add event listeners

            setTimeout(function () {
              document.getElementById('component_app_modal_element_overlay_top_content_close' + number + '').addEventListener('click', function (event) {
                // function start (Preview close)
                state.ui.modal.overlay.top.display = true;
                state.ui.modal.overlay.top.transform = true;
              }); // ON TO pip

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
        state.ui.modal.pip.bottom.transform = true; // function start (Detail)

        var post_pip_from_li_link = '';
        var pip_content = "\n                          \n                          <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                              \n                          </div>\n                          \n                          <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                              ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n                          </div>\n\n                      ");
        var pip_scrolling_container = '';
        var pip_control_container = "<div class=\"position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_pip_bottom_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_pip_bottom_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
        pip_scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_pip', pip_content);
        post_pip_from_li_link = "<div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" id=\"post_pip_from_li_link\" class=\"position_absolute width_100 height_100vh margin_auto\">").concat(pip_scrolling_container, "</div>").concat(pip_control_container);
        pip_container.innerHTML = post_pip_from_li_link;
        state.ui.modal.pip.bottom.display = true;
        setTimeout(function () {
          state.ui.modal.pip.bottom.transform = false;
        }, 101); // add event listeners

        setTimeout(function () {
          document.getElementById('component_app_modal_element_pip_bottom_content_close' + number + '').addEventListener('click', function (event) {
            // function start (Preview close)
            state.ui.modal.pip.bottom.display = true;
            state.ui.modal.pip.bottom.transform = true;
          }); // ON TO DONE

          document.getElementById('component_app_modal_element_pip_bottom_content_enter' + number + '').addEventListener('click', function (event) {
            alert('DONE!');
          });
        }, 101);
      }; // function start (Preview)


      var number = Math.floor(Math.random() * 101000000000000 + 1);
      var preview_container = document.getElementById('component_app_modal_element_pop_top_content');
      var page_container = document.getElementById('component_app_modal_element_page_top_content');
      var overlay_container = document.getElementById('component_app_modal_element_overlay_top_content');
      var pip_container = document.getElementById('component_app_modal_element_pip_bottom_content');
      preview();
    });
  }, 102);
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

from_Import();
var _default = {
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
exports.default = _default;
},{"../index.js":"index.js","./elements":"partials/elements.js"}],"partials/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _touch;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      loaded_1: false,
      loaded_2: false,
      loaded_3: false,
      loaded_4: false,
      loaded_5: false,
      loaded_6: false,
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
        xaxis: 0,
        yaxis: 0,
        height: 4,
        width: 4,
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
          walking: false,
          running: false,
          stunned: false
        }
      },
      player_2: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 4,
        width: 4,
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
var _default = {
  from_Import: from_Import,
  default_state: default_state
};
exports.default = _default;
},{}],"partials/events.js":[function(require,module,exports) {
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
setTimeout(function () {
  // Desktop
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    root.addEventListener('mousemove', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('mousedown', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('mouseup', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('mouseenter', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('mouseleave', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('keydown', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('keyup', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
  }

  ; // Mobile

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.getElementById('component_app_body').addEventListener('touchmove', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    document.getElementById('component_app_body').addEventListener("touchstart", function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    document.getElementById('component_app_body').addEventListener("touchend", function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
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
},{"../index.js":"index.js"}],"partials/defaults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elements = _interopRequireDefault(require("./elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';
var colors = [{
  parent: 'component_app_animation_background',
  id: '',
  classList: '',
  innerHTML: "\n\n    "
}, {
  parent: 'component_app_animation_midground',
  id: '',
  classList: '',
  innerHTML: "\n    "
}, {
  parent: 'component_app_animation_foreground',
  id: '',
  classList: '',
  innerHTML: "\n    "
}, {
  parent: 'component_app_content',
  id: '',
  classList: '',
  innerHTML: "\n\n      ".concat(_elements.default.component_app_content_root(), "\n\n    ")
}, {
  parent: 'component_app_modals',
  id: '',
  classList: '',
  innerHTML: "\n    <div id=\"layer_modals\">\n      ".concat(_elements.default.element_page_left, "\n      \n      ").concat(_elements.default.element_pop_top, "\n      ").concat(_elements.default.element_pop_left, "\n      ").concat(_elements.default.element_pop_bottom, "\n      ").concat(_elements.default.element_pop_right, "\n\n      ").concat(_elements.default.element_page_top, "\n      ").concat(_elements.default.element_page_bottom, "\n      ").concat(_elements.default.element_page_right, "\n\n      ").concat(_elements.default.element_morph_top, "\n      ").concat(_elements.default.element_morph_left, "\n      ").concat(_elements.default.element_morph_bottom, "\n      ").concat(_elements.default.element_morph_right, "\n\n      ").concat(_elements.default.element_fade_top, "\n      ").concat(_elements.default.element_fade_left, "\n      ").concat(_elements.default.element_fade_bottom, "\n      ").concat(_elements.default.element_fade_right, "\n\n      ").concat(_elements.default.element_gradient_top, "\n      ").concat(_elements.default.element_gradient_left, "\n      ").concat(_elements.default.element_gradient_bottom, "\n      ").concat(_elements.default.element_gradient_right, "\n\n      ").concat(_elements.default.element_corner_top, "\n      ").concat(_elements.default.element_corner_left, "\n      ").concat(_elements.default.element_corner_bottom, "\n      ").concat(_elements.default.element_corner_right, "\n\n      ").concat(_elements.default.element_overlay_top, "\n      ").concat(_elements.default.element_overlay_left, "\n      ").concat(_elements.default.element_overlay_bottom, "\n      ").concat(_elements.default.element_overlay_right, "\n\n      ").concat(_elements.default.element_pip_top, "\n      ").concat(_elements.default.element_pip_left, "\n      ").concat(_elements.default.element_pip_bottom, "\n      ").concat(_elements.default.element_pip_right, "\n\n      ").concat(_elements.default.element_menu_top, "\n      ").concat(_elements.default.element_menu_left, "\n      ").concat(_elements.default.element_menu_bottom, "\n      ").concat(_elements.default.element_menu_right, "\n\n      ").concat(_elements.default.element_nav_top, "\n      ").concat(_elements.default.element_nav_left, "\n      ").concat(_elements.default.element_nav_bottom, "\n      ").concat(_elements.default.element_nav_right, "\n    </div>\n\n    ")
}, {
  parent: 'component_app_guis',
  id: '',
  classList: '',
  innerHTML: "\n\n    "
}];
var _default = {
  colors: colors
};
exports.default = _default;
},{"./elements":"partials/elements.js"}],"index.js":[function(require,module,exports) {
// Rules
'use strict'; // Imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.scss");

var _functions = _interopRequireDefault(require("./partials/functions"));

var _state = _interopRequireDefault(require("./partials/state"));

var _events = _interopRequireDefault(require("./partials/events"));

var _defaults = _interopRequireDefault(require("./partials/defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Declaration
var state;
var functions;
var defaults; // Assignment

state = _state.default.default_state;
functions = _functions.default;
defaults = _defaults.default; // Initialization

var config = {
  apiKey: "AIzaSyB8kwtrECmhBW10P4vaKsE9JyE5DdazI-U",
  authDomain: "nownigel-cf9da.firebaseapp.com",
  databaseURL: "https://nownigel-cf9da.firebaseio.com",
  projectId: "nownigel-cf9da",
  storageBucket: "nownigel-cf9da.appspot.com",
  messagingSenderId: "872155363769"
}; // Functions

firebase.initializeApp(config); // init

console.log('hello world');
var first_load = true;
var sorting_type;

var Handle_render = function Handle_render() {
  for (var i = 0; i < defaults.colors.length; i++) {
    console.log('defaults.colors[i]: ' + defaults.colors[i]);
    document.getElementById(defaults.colors[i].parent).appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')));
  }

  ;
};

var check_local_user = function check_local_user() {
  // Localize data
  if (localStorage.username == null) {
    //alert('welcome first timer');
    document.getElementById('users_username').innerHTML = 'Welcome <u>new user!</u> Please sign up or Log in.';
    return;
  }

  ; // Localize data

  if (localStorage.username == 'null') {
    //alert('welcome back, login please');
    document.getElementById('users_username').innerHTML = 'Welcome back <u>returning user!</u> please login';
    return;
  }

  ;

  if (localStorage.username != 'null') {
    //alert('weolcome back: ' + localStorage.username);
    for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
      var trying_username = localStorage.username;
      var trying_password = localStorage.password;

      if (state.data.firebase.gnougn.roster[i].username == trying_username) {
        var validate_username = true;
        var validated_user = state.data.firebase.gnougn.roster[i];

        if (validated_user.password == trying_password) {
          var validate_password = true;
          state.data.user = validated_user;
          localStorage.setItem("user", state.data.user);
          localStorage.setItem("username", state.data.user.username);
          localStorage.setItem("password", state.data.user.password);
          sign_in_ui();
        }

        ;
      }

      ;
    }

    ;
  }

  ;
};

var sign_in_ui = function sign_in_ui() {
  /*
  // set user avatar
  document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'
   // set author page
  document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard(state.data.user);
   document.getElementById('icon_sign_out').classList.remove('display_none')
  document.getElementById('icon_sign_in').classList.add('display_none')
  document.getElementById('icon_sign_up').classList.add('display_none')
  */
  document.getElementById('users_username').innerHTML = 'Hello ' + "".concat(state.data.user.username) + '!'; // render author data

  Handle_Firebase_Refs_and_Render(); // gui

  state.ui.modal.pop.right.transform = true;
  setTimeout(function () {
    state.ui.modal.pop.right.display = !state.ui.modal.pop.right.display;
  }, 101);
};

var sign_out_ui = function sign_out_ui() {
  document.getElementById('users_username').innerHTML = 'See you next time, ' + "".concat(state.data.user.username);
  state.data.user = default_user;
  localStorage.setItem("user", default_user);
  localStorage.setItem("username", default_user.username);
  localStorage.setItem("password", default_user.password);
  /*
  // set user avatar
  document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'
   // set author page
  document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard_not_logged();
   document.getElementById('icon_sign_out').classList.add('display_none')
  document.getElementById('icon_sign_in').classList.remove('display_none')
  document.getElementById('icon_sign_up').classList.remove('display_none')
  */
  // render author data

  Handle_Firebase_Refs_and_Render(); // gui

  state.ui.modal.pop.left.transform = true;
  setTimeout(function () {
    state.ui.modal.pop.left.display = !state.ui.modal.pop.left.display;
  }, 101);
};

var Handle_check_states = function Handle_check_states() {
  console.log('checked ui');
};

sorting_type = 'timeup';

var find_sort = function find_sort() {
  if (document.getElementById('element_input_sorting_type').value == 'likesup' || '') {
    sorting_type = 'likesup';
  }

  if (document.getElementById('element_input_sorting_type').value == 'likesdown') {
    sorting_type = 'likesdown';
  }

  if (document.getElementById('element_input_sorting_type').value == 'viewsup') {
    sorting_type = 'viewsup';
  }

  if (document.getElementById('element_input_sorting_type').value == 'viewsdown') {
    sorting_type = 'viewsdown';
  }

  if (document.getElementById('element_input_sorting_type').value == 'timeup') {
    sorting_type = 'timeup';
  }

  if (document.getElementById('element_input_sorting_type').value == 'timedown') {
    sorting_type = 'timedown';
  }

  if (document.getElementById('element_input_sorting_type').value == 'titleup') {
    sorting_type = 'titleup';
  }

  if (document.getElementById('element_input_sorting_type').value == 'titledown') {
    sorting_type = 'titledown';
  }

  if (sorting_type == 'likesup') {
    if (sorting_type == 'likesup') {
      return function (a, b) {
        return a.likes - b.likes;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'likesdown') {
    if (sorting_type == 'likesdown') {
      return function (a, b) {
        return b.likes - a.likes;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'viewsup') {
    if (sorting_type == 'viewsup') {
      return function (a, b) {
        return a.views - b.views;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'viewsdown') {
    if (sorting_type == 'viewsdown') {
      return function (a, b) {
        return b.views - a.views;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'timeup') {
    if (sorting_type == 'timeup') {
      return function (a, b) {
        return b.time - a.time;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'timedown') {
    if (sorting_type == 'timedown') {
      return function (a, b) {
        return a.time - b.time;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'titleup') {
    if (sorting_type == 'titleup') {
      return function (a, b) {
        return b.title - a.title;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'titledown') {
    if (sorting_type == 'titledown') {
      return function (a, b) {
        return a.title - b.title;
      };
    }

    ;
  }

  ;
};

var find_view = function find_view() {
  document.getElementById('root').classList.remove('grid');
  document.getElementById('root').classList.remove('list');
  document.getElementById('root').classList.remove('card');
  document.getElementById('root').classList.remove('full');
  document.getElementById('root').classList.remove('thumbs');

  if (document.getElementById('element_input_style').value == 'grid' || document.getElementById('element_input_style').value == '') {
    document.getElementById('root').classList.add('grid');
  }

  ;

  if (document.getElementById('element_input_style').value == 'card') {
    document.getElementById('root').classList.add('card');
  }

  ;

  if (document.getElementById('element_input_style').value == 'list') {
    document.getElementById('root').classList.add('list');
  }

  ;

  if (document.getElementById('element_input_style').value == 'thumbs') {
    document.getElementById('root').classList.add('thumbs');
  }

  ;

  if (document.getElementById('element_input_style').value == 'full') {
    document.getElementById('root').classList.add('full');
  }

  ;
};

var find_limit = function find_limit() {
  if (document.getElementById('element_input_limit') != null) {
    state.data.posts_limit = document.getElementById('element_input_limit').value;
  }

  ;
}; // Closures


var default_post = {
  "dislikes": 0,
  "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg",
  "id": "007",
  "likes": 0,
  "password": "null",
  "subs": [{
    "username": "null"
  }],
  "time": 1.550374996382E9,
  "title": "nigel johnson",
  "categories": ["null"],
  "subcategories": ["null"],
  "tags": ["null"],
  "types": [{
    "title": "null"
  }],
  "username": "null",
  "views": 0
};
var default_user = {
  "dislikes": 0,
  "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg",
  "id": "007",
  "likes": 0,
  "password": "null",
  "subs": [{
    "username": "null"
  }],
  "time": 1.550374996382E9,
  "title": "nigel johnson",
  "categories": ["null"],
  "subcategories": ["null"],
  "tags": ["null"],
  "types": [{
    "title": "null"
  }],
  "username": "null",
  "views": 0
}; // Create

var addListings = function addListings(child) {
  var current_second = new Date().getTime() / 1000;
  var default_item = {};

  if (state.data.user.username != null) {
    if (child == 'library') {
      var _default_item;

      default_item = (_default_item = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_library_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_library_input_subtitle').value,
        paragraph: document.getElementById('create_library_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_library_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_library_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_library_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_library_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_library_input_type').value, "'")]
      }, _defineProperty(_default_item, "feature_image_src", document.getElementById('create_library_input_feature_image_src').value), _defineProperty(_default_item, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item, "views", 0), _defineProperty(_default_item, "likes", 0), _defineProperty(_default_item, "dislikes", 0), _default_item);
    }

    ;

    if (child == 'partners') {
      var _default_item2;

      default_item = (_default_item2 = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_partners_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_partners_input_subtitle').value,
        paragraph: document.getElementById('create_partners_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_partners_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_partners_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_partners_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_partners_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_partners_input_type').value, "'")]
      }, _defineProperty(_default_item2, "feature_image_src", document.getElementById('create_partners_input_feature_image_src').value), _defineProperty(_default_item2, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item2, "views", 0), _defineProperty(_default_item2, "likes", 0), _defineProperty(_default_item2, "dislikes", 0), _default_item2);
    }

    ;

    if (child == 'services') {
      var _default_item3;

      default_item = (_default_item3 = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_services_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_services_input_subtitle').value,
        paragraph: document.getElementById('create_services_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_services_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_services_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_services_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_services_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_services_input_type').value, "'")]
      }, _defineProperty(_default_item3, "feature_image_src", document.getElementById('create_services_input_feature_image_src').value), _defineProperty(_default_item3, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item3, "views", 0), _defineProperty(_default_item3, "likes", 0), _defineProperty(_default_item3, "dislikes", 0), _default_item3);
    }

    ;

    if (child == 'abilities') {
      var _default_item4;

      default_item = (_default_item4 = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_abilities_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_abilities_input_subtitle').value,
        paragraph: document.getElementById('create_abilities_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_abilities_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_abilities_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_abilities_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_abilities_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_abilities_input_type').value, "'")]
      }, _defineProperty(_default_item4, "feature_image_src", document.getElementById('create_abilities_input_feature_image_src').value), _defineProperty(_default_item4, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item4, "views", 0), _defineProperty(_default_item4, "likes", 0), _defineProperty(_default_item4, "dislikes", 0), _default_item4);
    }

    ;

    if (child == 'skills') {
      var _default_item5;

      default_item = (_default_item5 = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_skills_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_skills_input_subtitle').value,
        paragraph: document.getElementById('create_skills_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_skills_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_skills_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_skills_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_skills_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_skills_input_type').value, "'")]
      }, _defineProperty(_default_item5, "feature_image_src", document.getElementById('create_skills_input_feature_image_src').value), _defineProperty(_default_item5, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item5, "views", 0), _defineProperty(_default_item5, "likes", 0), _defineProperty(_default_item5, "dislikes", 0), _default_item5);
    }

    ;
  }

  ;

  if (child == 'roster') {
    default_item = {
      id: 0,
      time: current_second,
      username: document.getElementById('new_username').value,
      password: document.getElementById('new_password').value,
      feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
      views: 0,
      likes: 0,
      dislikes: 0,
      subs: [{
        username: "nully"
      }],
      categories: ["null"],
      subcategories: ["null"],
      tags: ["null"],
      types: [{
        "title": "null"
      }]
    };
  }

  ;
  document.getElementById('create_library_input_title').value = '';
  document.getElementById('create_services_input_title').value = '';
  document.getElementById('create_abilities_input_title').value = '';
  document.getElementById('create_skills_input_title').value = '';
  document.getElementById('create_partners_input_title').value = ''; // Firebase References
  // Firebase Database

  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child(child);
  Ref.push(default_item).then(function (snap) {
    var key = snap.key;
    console.log('from addListing' + key); // update created item with snap.key

    Ref.child(key).update({
      id: key
    }); // Set firebase data

    setTimeout(function () {
      Handle_Firebase_Refs_and_Render();
    }, 0);
  });
}; // more_posts


var less_posts = function less_posts() {
  state.data.posts_start -= 1;
  state.data.posts_limit -= 1; // Set firebase data

  document.getElementById('less_posts_value').innerHTML = state.data.posts_start;
  document.getElementById('more_posts_value').innerHTML = state.data.posts_limit;
  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

var more_posts = function more_posts() {
  state.data.posts_start += 1;
  state.data.posts_limit += 1; // Set firebase data

  document.getElementById('less_posts_value').innerHTML = state.data.posts_start;
  document.getElementById('more_posts_value').innerHTML = state.data.posts_limit;
  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
}; // Delete


var deleteWhoListings = function deleteWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child(child);
  console.log(id, 'from deleteWhoListings service');
  Ref.child(id).remove(); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
}; // Update


var likeWhoListings = function likeWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var roster_Ref = gnougnRef.child('roster');
  var Ref = gnougnRef.child(child); // updated post likes

  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  changeThisValue.likes += 1;
  Ref.child(id).set(changeThisValue); // updated roster user liked

  var changeThisRoster_Value;
  roster_Ref.child(state.data.user.id).once('value', function (snap) {
    changeThisRoster_Value = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  var new_liked = []; // if liked post doesnt match a already liked post

  for (var i = 0; i < state.data.user.liked.length; i++) {
    if (changeThisRoster_Value.liked[i].post_id != id) {
      new_liked.push({
        post_id: changeThisRoster_Value.liked[i].post_id
      });
    }

    ;
  }

  ;
  new_liked.push({
    post_id: id
  });
  changeThisRoster_Value.liked = new_liked;
  roster_Ref.child(state.data.user.id).set(changeThisRoster_Value);
  console.log(id); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 101);
}; // Update


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
  console.log(changeThisValue); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
}; // Update


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
  console.log(id); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

var Handle_firebase_render = function Handle_firebase_render() {
  // render library
  (function () {
    setTimeout(function () {
      if (state.data.firebase != null) {
        // *********************** "Order of operations" ************************
        find_view(); // 3.) get types

        document.getElementById('types').innerHTML = '';

        for (var i = 0; i < state.data.types.length; i++) {
          // 3 options
          document.getElementById('types').innerHTML += "".concat(state.data.types[i].title) + ' ';
        }

        ; // 1.) set array

        var array = state.data.firebase;
        var array_gnougn_library = array.gnougn.library.sort(find_sort());
        var filtered_array_gnougn_library = []; // 3.) filter array

        for (var i = 0; i < array_gnougn_library.length; i++) {
          if (array_gnougn_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
            filtered_array_gnougn_library.push(array_gnougn_library[i]);
          }

          ;
        }

        ; // if logged in

        if (localStorage.username != 'null' && !(localStorage.username == 'null') && !(localStorage.username == null)) {
          if (document.getElementById('element_ol_firebase_user_library') != null) {
            document.getElementById('element_ol_firebase_user_library').innerHTML = '';

            for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
              for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                if (filtered_array_gnougn_library[i].usernames[usernames_index].username == state.data.user.username) {
                  if (i >= state.data.posts_start - state.data.posts_start && i < state.data.posts_limit) {
                    document.getElementById('element_ol_firebase_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
                  }

                  ;
                }

                ;
              }

              ;
            }

            ;
          }

          ;
        }

        ; // library post - filtered by user subs
        // if logged in

        if (localStorage.username != 'null' && !(localStorage.username == 'null') && !(localStorage.username == null)) {
          if (document.getElementById('element_ol_firebase_user_subs_library') != null) {
            document.getElementById('element_ol_firebase_user_subs_library').innerHTML = '';

            for (var subs_index = 0; subs_index < state.data.user.subs.length; subs_index++) {
              // subs name
              document.getElementById('element_ol_firebase_user_subs_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div("<h1><u>".concat(state.data.user.subs[subs_index].username, "</u>'s post</h1>"))));

              for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
                for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                  if (filtered_array_gnougn_library[i].usernames[usernames_index].username == state.data.user.subs[subs_index].username) {
                    if (i >= state.data.posts_start - state.data.posts_start && i < state.data.posts_limit) {
                      document.getElementById('element_ol_firebase_user_subs_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
                    }

                    ;
                  }

                  ;
                }

                ;
              }

              ;
            }

            ;
          }

          ;
        }

        ; // library post - filtered by user liked
        // if logged in

        if (localStorage.username != 'null' && !(localStorage.username == 'null') && !(localStorage.username == null)) {
          if (document.getElementById('element_ol_firebase_user_liked_library') != null) {
            document.getElementById('element_ol_firebase_user_liked_library').innerHTML = '';

            for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
              for (var liked_index = 0; liked_index < state.data.user.liked.length; liked_index++) {
                if (filtered_array_gnougn_library[i].id == state.data.user.liked[liked_index].post_id) {
                  document.getElementById('element_ol_firebase_user_liked_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
                }

                ;
              }

              ;
            }

            ;
          }

          ;
        }

        ; // library post - filtered by authors & title

        if (document.getElementById('library_posts_advance_filter') != null) {
          document.getElementById('library_posts_advance_filter').innerHTML = '';

          for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
            // if title match
            if (filtered_array_gnougn_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
              var does_Type_Match = false;
              var does_Username_Match = false; // if any types match

              for (var type_index = 0; type_index < state.data.types.length; type_index++) {
                if (state.data.types[type_index].title.toString().toLowerCase().includes(filtered_array_gnougn_library[i].type)) {
                  does_Type_Match = true;
                }

                ;
              }

              ;

              if (state.data.types.length <= 0) {
                does_Type_Match = true;
              } // if any usernames match


              for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                if (filtered_array_gnougn_library[i].usernames[usernames_index].username.toString().toLowerCase().includes(document.getElementById('element_input_post_username').value)) {
                  does_Username_Match = true;
                }

                ;
              }

              ;

              if (does_Type_Match == true && does_Username_Match == true) {
                if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
                  document.getElementById('library_posts_advance_filter').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
                }

                ;
              }

              ;
              does_Type_Match = false;
              does_Username_Match = false;
            }

            ;
          }

          ;
        }

        ; // feature

        document.getElementById('element_ol_firebase_library_feature').innerHTML = ''; // title filtered after feature

        for (var i = 0; i < array_gnougn_library.length; i++) {
          if (i < state.data.feature_posts_limit) {
            document.getElementById('element_ol_firebase_library_feature').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(array_gnougn_library[i])));
          }

          ;
        }

        ; // Library after feature

        document.getElementById('element_ol_firebase_library_after_feature').innerHTML = ''; // title filtered after feature

        for (var i = 0; i < array_gnougn_library.length; i++) {
          if (i >= state.data.posts_start && i < state.data.posts_limit) {
            document.getElementById('element_ol_firebase_library_after_feature').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(array_gnougn_library[i])));
          }

          ;
        }

        ; // simple searching all by title

        document.getElementById('element_ol_firebase_library').innerHTML = ''; // title filtered after feature

        for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            document.getElementById('element_ol_firebase_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
          }

          ;
        }

        ; // Roster
        // 4.) empty ol element

        document.getElementById('element_ol_firebase_roster').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_roster').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.roster[i])));
          }

          ;
        } // partners
        // 4.) empty ol element


        document.getElementById('element_ol_firebase_partners').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.partners.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.partners[i]);
            document.getElementById('element_ol_firebase_partners').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.partners[i])));
          }

          ;
        } // Abilities
        // 4.) empty ol element


        document.getElementById('element_ol_firebase_abilities').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.abilities.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.abilities[i]);
            document.getElementById('element_ol_firebase_abilities').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.abilities[i])));
          }

          ;
        } // services
        // 4.) empty ol element


        document.getElementById('element_ol_firebase_services').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.services.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.services[i]);
            document.getElementById('element_ol_firebase_services').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.services[i])));
          }

          ;
        } // skills
        // 4.) empty ol element


        document.getElementById('element_ol_firebase_skills').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.skills.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.skills[i]);
            document.getElementById('element_ol_firebase_skills').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.skills[i])));
          }

          ;
        }
      }

      ;
    }, 0);
  })();

  state.data.refs = true;
};

var Handle_Repeat_Firebase_Validation = function Handle_Repeat_Firebase_Validation() {
  setInterval(function () {
    // repeat until refs are set
    if (state.data.refs == false) {
      var temp = state.data.firebase; // console.log('firbase objects -> firbase array');

      if (temp.gnougn.abilities != null) {
        // abilities
        // set objects to array - part 1
        var result_abilities = Object.keys(temp.gnougn.abilities).map(function (key) {
          return temp.gnougn.abilities[key];
        }); // set objects to array - part 2

        temp.gnougn.abilities = result_abilities; // console.log('abilities');
        // console.log(temp.gnougn.abilities);
      }

      ;

      if (temp.gnougn.library != null) {
        // library
        // set objects to array - part 1
        var result_library = Object.keys(temp.gnougn.library).map(function (key) {
          return temp.gnougn.library[key];
        }); // set objects to array - part 2

        temp.gnougn.library = result_library; // console.log('library');
        // console.log(temp.gnougn.library);
      }

      ;

      if (temp.gnougn.partners != null) {
        // partners
        // set objects to array - part 1
        var result_partners = Object.keys(temp.gnougn.partners).map(function (key) {
          return temp.gnougn.partners[key];
        }); // set objects to array - part 2

        temp.gnougn.partners = result_partners; // console.log('partners');
        // console.log(temp.gnougn.partners);
      }

      ;

      if (temp.gnougn.services != null) {
        // services
        // set objects to array - part 1
        var result_services = Object.keys(temp.gnougn.services).map(function (key) {
          return temp.gnougn.services[key];
        }); // set objects to array - part 2

        temp.gnougn.services = result_services; // console.log('services');
        // console.log(temp.gnougn.services);
      }

      ;

      if (temp.gnougn.roster != null) {
        // roster
        // set objects to array - part 1
        var result_roster = Object.keys(temp.gnougn.roster).map(function (key) {
          return temp.gnougn.roster[key];
        }); // set objects to array - part 2

        temp.gnougn.roster = result_roster; // console.log('roster');
        // console.log(temp.gnougn.roster);
      }

      ;

      if (temp.gnougn.skills != null) {
        // skills
        // set objects to array - part 1
        var result_skills = Object.keys(temp.gnougn.skills).map(function (key) {
          return temp.gnougn.skills[key];
        }); // set objects to array - part 2

        temp.gnougn.skills = result_skills; // console.log('skills');
        // console.log(temp.gnougn.skills);
      }

      ; // Render listtings to front_end if firebase respondes

      if (temp.gnougn.skills != null) {
        console.log(temp.gnougn);
        setTimeout(function () {
          state.data.refs = true;

          if (first_load == true) {
            first_load = false; //console.clear();

            clearInterval(Handle_Repeat_Firebase_Validation()); // check ui state

            setTimeout(function () {
              alert('done firebase update'); //Handle_render();

              check_local_user();
              Handle_EventListeners();
              Handle_Timers(); // re_check

              setInterval(function () {
                Handle_check_states();
              }, 1000);
            }, 0);
          }

          ;
          Handle_firebase_render();
        }, 0);
      }

      ;
    }

    ;
  }, 0);
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

  Handle_Repeat_Firebase_Validation();
};

var Handle_return_state = function Handle_return_state() {
  return state;
};

var Handle_get_state_from_events = function Handle_get_state_from_events() {
  state = _events.default.Handle_return_state_from_events(); //values_update();
};

var Handle_EventListeners = function Handle_EventListeners() {
  // filter by title
  if (document.getElementById('element_input_filter') != null) {
    document.getElementById('element_input_filter').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
      }, 0);
    });
  }

  ; // filter by title

  if (document.getElementById('element_input_types') != null) {
    document.getElementById('element_input_types').addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        state.data.types.push({
          title: document.getElementById('element_input_types').value
        }); // filter library

        setTimeout(function () {
          Handle_Firebase_Refs_and_Render();
        }, 0);
      }

      ;
    });
  }

  ; // filter by title

  if (document.getElementById('element_input_post_username') != null) {
    document.getElementById('element_input_post_username').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
      }, 0);
    });
  }

  ; // sort

  if (document.getElementById('element_input_sorting_type') != null) {
    document.getElementById('element_input_sorting_type').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
      }, 0);
    });
  }

  ; // less_posts post

  if (document.getElementById('less_posts') != null) {
    document.getElementById('less_posts').addEventListener('click', function (event) {
      less_posts();
    });
  }

  ; // more_posts post

  if (document.getElementById('more_posts') != null) {
    document.getElementById('more_posts').addEventListener('click', function (event) {
      more_posts();
    });
  }

  ; // create post

  if (document.getElementById('element_input_create_library') != null) {
    document.getElementById('element_input_create_library').addEventListener('click', function (event) {
      addListings('library');
    });
  }

  ; // create user

  if (document.getElementById('element_input_create_roster') != null) {
    document.getElementById('element_input_create_roster').addEventListener('click', function (event) {
      if (document.getElementById('new_username').value == '') {
        alert('new username needed');
      }

      ;

      if (document.getElementById('new_password').value == '') {
        alert('new password needed');
      }

      ;

      if (document.getElementById('new_username').value != '' && document.getElementById('new_password').value != '') {
        addListings('roster');
        document.getElementById('new_username').value = '';
        document.getElementById('new_password').value = '';
      }

      ;
    });
  }

  ; // create services

  if (document.getElementById('element_input_create_services') != null) {
    document.getElementById('element_input_create_services').addEventListener('click', function (event) {
      addListings('services');
    });
  }

  ; // create partners

  if (document.getElementById('element_input_create_partners') != null) {
    document.getElementById('element_input_create_partners').addEventListener('click', function (event) {
      addListings('partners');
    });
  }

  ; // create abilities

  if (document.getElementById('element_input_create_abilities') != null) {
    document.getElementById('element_input_create_abilities').addEventListener('click', function (event) {
      addListings('abilities');
    });
  }

  ; // create skills

  if (document.getElementById('element_input_create_skills') != null) {
    document.getElementById('element_input_create_skills').addEventListener('click', function (event) {
      addListings('skills');
    });
  }

  ; // sign_in

  if (document.getElementById('element_user_sign_in') != null) {
    document.getElementById('element_user_sign_in').addEventListener('click', function (event) {
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
            sign_in_ui();
          }

          ;
        }

        ;
      }

      ;
    });
  }

  ; // sign_out

  if (document.getElementById('element_user_sign_out') != null) {
    document.getElementById('element_user_sign_out').addEventListener('click', function (event) {
      sign_out_ui();
    });
  }

  ;
};

var Handle_Timers = function Handle_Timers() {
  // start timer
  (function () {
    var int = 0;
    setInterval(function () {
      console.log(state.events.key.keys); // desktop

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (state.events.key.keys.length == 0) {
          state.events.key.up = true;
          state.events.key.down = false;
        }

        ;

        if (state.events.key.keys.length != 0) {
          state.events.key.up = false;
          state.events.key.down = true;
        }

        ;

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
        }

        ;
      }

      ; // Mobile

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (state.events.touch.enter == true) {
          state.events.touch.leavetimer = 0;
          console.log('state.events.touch.leavetimer: ' + state.events.touch.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.touch.leavetimer;
          }
        }

        if (state.events.touch.enter == false) {
          state.events.touch.leavetimer += 1;
          console.log('state.events.touch.leavetimer: ' + state.events.touch.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.touch.leavetimer;
          }
        }

        if (state.events.touch.leavetimer == 30) {
          state.uipause.display = true;
        }

        ;

        if (state.events.touch.leavetimer == 60) {
          state.uitimeout.display = true;
        }

        ;
      }

      ;
      int += 1;
      console.log(int);
    }, 1000);
  })(); // console.log(state.ui.interaction.dice);
  // console.log(state.ui.interaction.random);


  (function () {
    setInterval(function () {
      if (document.getElementById('time') != null) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = new Date();
        state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
        console.log(state.data.time);
        document.getElementById('time').innerText = state.data.time;
      }

      ;
    }, 1000);
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
        }

        ;

        if (current_frame == 2) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_2';
        }

        ;

        if (current_frame == 3) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_3';
        }

        ;

        if (current_frame == 4) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_4';
        }

        ;

        if (current_frame == 5) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_5';
        }

        ;

        if (current_frame == 6) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_6';
        }

        ;

        if (current_frame == 7) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_7';
        }

        ;

        if (current_frame == 8) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_8';
        }

        ;

        if (current_frame == 9) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_9';
        }

        ;

        if (current_frame == 10) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_10';
        }

        ;

        if (current_frame == 11) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_11';
        }

        ;

        if (current_frame == 12) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_12';
        }

        ;

        if (current_frame == 13) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_13';
        }

        ;

        if (current_frame == 14) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_14';
        }

        ;

        if (current_frame == 15) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_15';
        }

        ;

        if (current_frame == 16) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_16';
        }

        ;

        if (current_frame == 17) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_17';
        }

        ;

        if (current_frame == 18) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_18';
        }

        ;

        if (current_frame == 19) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_19';
        }

        ;

        if (current_frame == 20) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_20';
        }

        ;

        if (current_frame == 21) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_21';
        }

        ;

        if (current_frame == 22) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_22';
        }

        ;

        if (current_frame == 23) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_23';
        }

        ;

        if (current_frame == 24) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_24';
        }

        ;

        if (current_frame == 25) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_25';
        }

        ;

        if (current_frame == 26) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_26';
        }

        ;

        if (current_frame == 27) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_27';
        }

        ;

        if (current_frame == 28) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_28';
        }

        ;

        if (current_frame == 29) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_29';
        }

        ;

        if (current_frame == 30) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_30';
        }

        ;

        if (current_frame == 31) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_31';
        }

        ;

        if (current_frame == 32) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_32';
        }

        ;

        if (current_frame == 33) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_33';
        }

        ;

        if (current_frame == 34) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_34';
        }

        ;

        if (current_frame == 35) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_35';
        }

        ;

        if (current_frame == 36) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_36';
        }

        ;

        if (current_frame == 37) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_37';
        }

        ;

        if (current_frame == 38) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_38';
        }

        ;

        if (current_frame == 39) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_39';
        }

        ;

        if (current_frame == 40) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_40';
        }

        ;

        if (current_frame == 41) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_41';
        }

        ;

        if (current_frame == 42) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_42';
        }

        ;

        if (current_frame == 43) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_43';
        }

        ;

        if (current_frame == 44) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_44';
        }

        ;

        if (current_frame == 45) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_45';
        }

        ;

        if (current_frame == 46) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_46';
        }

        ;

        if (current_frame == 47) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_47';
        }

        ;

        if (current_frame == 48) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_48';
        }

        ;

        if (current_frame == 49) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_49';
        }

        ;

        if (current_frame == 50) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_50';
        }

        ;

        if (current_frame == 51) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_51';
        }

        ;

        if (current_frame == 52) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_52';
        }

        ;

        if (current_frame == 53) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_53';
        }

        ;

        if (current_frame == 54) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_54';
        }

        ;

        if (current_frame == 55) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_55';
        }

        ;

        if (current_frame == 56) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_56';
        }

        ;

        if (current_frame == 57) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_57';
        }

        ;

        if (current_frame == 58) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_58';
        }

        ;

        if (current_frame == 59) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_59';
        }

        ;

        if (current_frame == 60) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_60';
        }

        ;

        if (current_frame == 61) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_61';
        }

        ;

        if (current_frame == 62) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_62';
        }

        ;

        if (current_frame == 63) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_63';
        }

        ;

        if (current_frame == 64) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_64';
        }

        ;

        if (current_frame == 65) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_1';
        }

        ;

        if (current_frame == 66) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_2';
        }

        ;

        if (current_frame == 67) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_3';
        }

        ;

        if (current_frame == 68) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_4';
        }

        ;

        if (current_frame == 69) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1';
        }

        ;

        if (current_frame == 70) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2';
        }

        ;

        if (current_frame == 71) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3';
        }

        ;

        if (current_frame == 72) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4';
        }

        ;

        if (current_frame == 73) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5';
        }

        ;

        if (current_frame == 74) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6';
        }

        ;

        if (current_frame == 75) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7';
        }

        ;

        if (current_frame == 76) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8';
        }

        ;

        if (current_frame == 77) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9';
        }

        ;

        if (current_frame == 78) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1';
        }

        ;

        if (current_frame == 79) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2';
        }

        ;

        if (current_frame == 80) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3';
        }

        ;

        if (current_frame == 81) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4';
        }

        ;

        if (current_frame == 82) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5';
        }

        ;

        if (current_frame == 83) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6';
        }

        ;

        if (current_frame == 84) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7';
        }

        ;

        if (current_frame == 85) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8';
        }

        ;

        if (current_frame == 86) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9';
        }

        ;
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
          }

          ;

          if (loop == false) {
            clearInterval(start_animation);
          }

          ;
        }

        ;
        current_frame += 1;
      }
    }, 1000 / state.animation.framerate);
  })();
}; // resize


var resize = function resize() {}; // Lifecycle hooks


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
  HANDLE_pre_loader();
  Handle_Firebase_Refs_and_Render();
};

window.onload = function () {
  console.log('onload');
  onload();
};

window.onresize = function () {
  console.log('resize');
  resize();
}; // Exports


var _default = {
  Handle_get_state_from_events: Handle_get_state_from_events,
  Handle_return_state: Handle_return_state,
  addListings: addListings,
  deleteWhoListings: deleteWhoListings,
  likeWhoListings: likeWhoListings,
  dislikeWhoListings: dislikeWhoListings,
  viewWhoListings: viewWhoListings
};
exports.default = _default;
},{"./style.scss":"style.scss","./partials/functions":"partials/functions.js","./partials/state":"partials/state.js","./partials/events":"partials/events.js","./partials/defaults":"partials/defaults.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65360" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/nownigel.com.e31bb0bc.map