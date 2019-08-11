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
},{"./assets/graphics/gui/gui_search.svg":[["gui_search.af9fb3c0.svg","assets/graphics/gui/gui_search.svg"],"assets/graphics/gui/gui_search.svg"],"./assets/graphics/gui/gui_circle.svg":[["gui_circle.616d0ce2.svg","assets/graphics/gui/gui_circle.svg"],"assets/graphics/gui/gui_circle.svg"],"./assets/graphics/gui/gui_dots.svg":[["gui_dots.42a6445c.svg","assets/graphics/gui/gui_dots.svg"],"assets/graphics/gui/gui_dots.svg"],"./assets/graphics/gui/gui_vert_dots.svg":[["gui_vert_dots.2a27b5ae.svg","assets/graphics/gui/gui_vert_dots.svg"],"assets/graphics/gui/gui_vert_dots.svg"],"./assets/graphics/gui/gui_vert_colon.svg":[["gui_vert_colon.407acd4e.svg","assets/graphics/gui/gui_vert_colon.svg"],"assets/graphics/gui/gui_vert_colon.svg"],"./assets/graphics/gui/gui_audio.svg":[["gui_audio.2ac1ef0d.svg","assets/graphics/gui/gui_audio.svg"],"assets/graphics/gui/gui_audio.svg"],"./assets/graphics/gui/gui_audio_on.svg":[["gui_audio_on.a3c535d2.svg","assets/graphics/gui/gui_audio_on.svg"],"assets/graphics/gui/gui_audio_on.svg"],"./assets/graphics/gui/gui_audio_off.svg":[["gui_audio_off.494c8e2b.svg","assets/graphics/gui/gui_audio_off.svg"],"assets/graphics/gui/gui_audio_off.svg"],"./assets/graphics/gui/gui_logo_social_instagram.svg":[["gui_logo_social_instagram.bdca9dd6.svg","assets/graphics/gui/gui_logo_social_instagram.svg"],"assets/graphics/gui/gui_logo_social_instagram.svg"],"./assets/graphics/gui/gui_logo_social_twitch.svg":[["gui_logo_social_twitch.1e99fcd8.svg","assets/graphics/gui/gui_logo_social_twitch.svg"],"assets/graphics/gui/gui_logo_social_twitch.svg"],"./assets/graphics/gui/gui_logo_social_facebook.svg":[["gui_logo_social_facebook.653f6b6b.svg","assets/graphics/gui/gui_logo_social_facebook.svg"],"assets/graphics/gui/gui_logo_social_facebook.svg"],"./assets/graphics/gui/gui_logo_social_youtube.svg":[["gui_logo_social_youtube.40389e90.svg","assets/graphics/gui/gui_logo_social_youtube.svg"],"assets/graphics/gui/gui_logo_social_youtube.svg"],"./assets/graphics/gui/gui_logo_social_twitter.svg":[["gui_logo_social_twitter.e74a5829.svg","assets/graphics/gui/gui_logo_social_twitter.svg"],"assets/graphics/gui/gui_logo_social_twitter.svg"],"./assets/graphics/gui/gui_icon_close.svg":[["gui_icon_close.e725ee34.svg","assets/graphics/gui/gui_icon_close.svg"],"assets/graphics/gui/gui_icon_close.svg"],"./assets/graphics/gui/gui_icon_menu.svg":[["gui_icon_menu.de83c4a1.svg","assets/graphics/gui/gui_icon_menu.svg"],"assets/graphics/gui/gui_icon_menu.svg"],"./assets/graphics/gui/gui_text_register.svg":[["gui_text_register.17dc54a9.svg","assets/graphics/gui/gui_text_register.svg"],"assets/graphics/gui/gui_text_register.svg"],"./assets/graphics/gui/gui_text_login.svg":[["gui_text_login.77537a58.svg","assets/graphics/gui/gui_text_login.svg"],"assets/graphics/gui/gui_text_login.svg"],"./assets/graphics/gui/gui_text_logout.svg":[["gui_text_logout.00dfc0f0.svg","assets/graphics/gui/gui_text_logout.svg"],"assets/graphics/gui/gui_text_logout.svg"],"./assets/graphics/gui/gui_text_key.svg":[["gui_text_key.e5e4d90a.svg","assets/graphics/gui/gui_text_key.svg"],"assets/graphics/gui/gui_text_key.svg"],"./assets/graphics/gui/gui_text_scroll.svg":[["gui_text_scroll.7a5d59fd.svg","assets/graphics/gui/gui_text_scroll.svg"],"assets/graphics/gui/gui_text_scroll.svg"],"./assets/graphics/gui/gui_text_mousemove.svg":[["gui_text_mousemove.281e0af2.svg","assets/graphics/gui/gui_text_mousemove.svg"],"assets/graphics/gui/gui_text_mousemove.svg"],"./assets/graphics/gui/gui_text_mouseenter.svg":[["gui_text_mouseenter.19ff5fc3.svg","assets/graphics/gui/gui_text_mouseenter.svg"],"assets/graphics/gui/gui_text_mouseenter.svg"],"./assets/graphics/gui/gui_text_home.svg":[["gui_text_home.2bba67cd.svg","assets/graphics/gui/gui_text_home.svg"],"assets/graphics/gui/gui_text_home.svg"],"./assets/graphics/gui/gui_text_about.svg":[["gui_text_about.c90a7bc6.svg","assets/graphics/gui/gui_text_about.svg"],"assets/graphics/gui/gui_text_about.svg"],"./assets/graphics/gui/gui_text_skills.svg":[["gui_text_skills.5ebc2b2a.svg","assets/graphics/gui/gui_text_skills.svg"],"assets/graphics/gui/gui_text_skills.svg"],"./assets/graphics/gui/gui_text_abilities.svg":[["gui_text_abilities.b7e24d5f.svg","assets/graphics/gui/gui_text_abilities.svg"],"assets/graphics/gui/gui_text_abilities.svg"],"./assets/graphics/gui/gui_text_services.svg":[["gui_text_services.5c85ce9b.svg","assets/graphics/gui/gui_text_services.svg"],"assets/graphics/gui/gui_text_services.svg"],"./assets/graphics/gui/gui_text_library.svg":[["gui_text_library.459266d6.svg","assets/graphics/gui/gui_text_library.svg"],"assets/graphics/gui/gui_text_library.svg"],"./assets/graphics/gui/gui_text_workshop.svg":[["gui_text_workshop.f795b4c1.svg","assets/graphics/gui/gui_text_workshop.svg"],"assets/graphics/gui/gui_text_workshop.svg"],"./assets/graphics/gui/gui_text_blog.svg":[["gui_text_blog.df4490fe.svg","assets/graphics/gui/gui_text_blog.svg"],"assets/graphics/gui/gui_text_blog.svg"],"./assets/graphics/gui/gui_buttons.svg":[["gui_buttons.634521a3.svg","assets/graphics/gui/gui_buttons.svg"],"assets/graphics/gui/gui_buttons.svg"],"./assets/graphics/gui/gui_button_start.svg":[["gui_button_start.b39e46e6.svg","assets/graphics/gui/gui_button_start.svg"],"assets/graphics/gui/gui_button_start.svg"],"./assets/graphics/gui/gui_button_learn.svg":[["gui_button_learn.7f4205aa.svg","assets/graphics/gui/gui_button_learn.svg"],"assets/graphics/gui/gui_button_learn.svg"],"./assets/graphics/gui/gui_button_or.svg":[["gui_button_or.30afa276.svg","assets/graphics/gui/gui_button_or.svg"],"assets/graphics/gui/gui_button_or.svg"],"./assets/graphics/gui/gui_container_tall.svg":[["gui_container_tall.350afce4.svg","assets/graphics/gui/gui_container_tall.svg"],"assets/graphics/gui/gui_container_tall.svg"],"./assets/graphics/gui/gui_gradient_purple_top.svg":[["gui_gradient_purple_top.13516e0f.svg","assets/graphics/gui/gui_gradient_purple_top.svg"],"assets/graphics/gui/gui_gradient_purple_top.svg"],"./assets/graphics/gui/gui_gradient_purple_bottom.svg":[["gui_gradient_purple_bottom.85f8f52c.svg","assets/graphics/gui/gui_gradient_purple_bottom.svg"],"assets/graphics/gui/gui_gradient_purple_bottom.svg"],"./assets/graphics/gui/gui_hori_bottom.svg":[["gui_hori_bottom.55ad783e.svg","assets/graphics/gui/gui_hori_bottom.svg"],"assets/graphics/gui/gui_hori_bottom.svg"],"./assets/graphics/gui/gui_vert_left.svg":[["gui_vert_left.93c27118.svg","assets/graphics/gui/gui_vert_left.svg"],"assets/graphics/gui/gui_vert_left.svg"],"./assets/graphics/gui/gui_hr_vert.svg":[["gui_hr_vert.feeedb19.svg","assets/graphics/gui/gui_hr_vert.svg"],"assets/graphics/gui/gui_hr_vert.svg"],"./assets/graphics/gui/gui_hr_vert_1.svg":[["gui_hr_vert_1.697f4c33.svg","assets/graphics/gui/gui_hr_vert_1.svg"],"assets/graphics/gui/gui_hr_vert_1.svg"],"./assets/graphics/gui/gui_hr_hori.svg":[["gui_hr_hori.a8413fc4.svg","assets/graphics/gui/gui_hr_hori.svg"],"assets/graphics/gui/gui_hr_hori.svg"],"./assets/graphics/gui/gui_hr_hori_1.svg":[["gui_hr_hori_1.c4ddf1a9.svg","assets/graphics/gui/gui_hr_hori_1.svg"],"assets/graphics/gui/gui_hr_hori_1.svg"],"./assets/graphics/gui/gui_logo.svg":[["gui_logo.fc15c25d.svg","assets/graphics/gui/gui_logo.svg"],"assets/graphics/gui/gui_logo.svg"],"./assets/graphics/gui/gui_logo_combo.svg":[["gui_logo_combo.b46c21b0.svg","assets/graphics/gui/gui_logo_combo.svg"],"assets/graphics/gui/gui_logo_combo.svg"],"./assets/graphics/gui/gui_logo_combo_1.svg":[["gui_logo_combo_1.3ad4aa90.svg","assets/graphics/gui/gui_logo_combo_1.svg"],"assets/graphics/gui/gui_logo_combo_1.svg"],"./assets/graphics/gui/gui_logo_combo_2.svg":[["gui_logo_combo_2.70cce457.svg","assets/graphics/gui/gui_logo_combo_2.svg"],"assets/graphics/gui/gui_logo_combo_2.svg"],"./assets/graphics/gui/gui_logo_combo_3.svg":[["gui_logo_combo_3.17ea7d92.svg","assets/graphics/gui/gui_logo_combo_3.svg"],"assets/graphics/gui/gui_logo_combo_3.svg"],"./assets/graphics/gui/gui_logo_combo_4.svg":[["gui_logo_combo_4.9ec79eca.svg","assets/graphics/gui/gui_logo_combo_4.svg"],"assets/graphics/gui/gui_logo_combo_4.svg"],"./assets/graphics/gui/gui_logo_mark.svg":[["gui_logo_mark.acaee54d.svg","assets/graphics/gui/gui_logo_mark.svg"],"assets/graphics/gui/gui_logo_mark.svg"],"./assets/graphics/gui/gui_logo_type.svg":[["gui_logo_type.6dfe5768.svg","assets/graphics/gui/gui_logo_type.svg"],"assets/graphics/gui/gui_logo_type.svg"],"./assets/graphics/gui/gui_icon_vr.svg":[["gui_icon_vr.73c77c5c.svg","assets/graphics/gui/gui_icon_vr.svg"],"assets/graphics/gui/gui_icon_vr.svg"],"./assets/graphics/gui/gui_icon_tv.svg":[["gui_icon_tv.fee69b58.svg","assets/graphics/gui/gui_icon_tv.svg"],"assets/graphics/gui/gui_icon_tv.svg"],"./assets/graphics/gui/gui_icon_ipad.svg":[["gui_icon_ipad.53ac03b2.svg","assets/graphics/gui/gui_icon_ipad.svg"],"assets/graphics/gui/gui_icon_ipad.svg"],"./assets/graphics/gui/gui_icon_iphone.svg":[["gui_icon_iphone.992e2fd3.svg","assets/graphics/gui/gui_icon_iphone.svg"],"assets/graphics/gui/gui_icon_iphone.svg"],"./assets/graphics/gui/gui_icon_imac.svg":[["gui_icon_imac.fc17d60e.svg","assets/graphics/gui/gui_icon_imac.svg"],"assets/graphics/gui/gui_icon_imac.svg"],"./assets/graphics/gui/gui_icon_watch.svg":[["gui_icon_watch.c6df14f2.svg","assets/graphics/gui/gui_icon_watch.svg"],"assets/graphics/gui/gui_icon_watch.svg"],"./assets/graphics/gui/avatar_maisie.svg":[["avatar_maisie.9c6bca52.svg","assets/graphics/gui/avatar_maisie.svg"],"assets/graphics/gui/avatar_maisie.svg"],"./assets/graphics/gui/avatar_nigel.svg":[["avatar_nigel.f35b665b.svg","assets/graphics/gui/avatar_nigel.svg"],"assets/graphics/gui/avatar_nigel.svg"],"./assets/graphics/gui/avatar_icon_maisie.svg":[["avatar_icon_maisie.1bcdceb6.svg","assets/graphics/gui/avatar_icon_maisie.svg"],"assets/graphics/gui/avatar_icon_maisie.svg"],"./assets/graphics/effect/vignette.svg":[["vignette.6b7662eb.svg","assets/graphics/effect/vignette.svg"],"assets/graphics/effect/vignette.svg"],"./assets/graphics/accent/noise_1.svg":[["noise_1.e88a58ae.svg","assets/graphics/accent/noise_1.svg"],"assets/graphics/accent/noise_1.svg"],"./assets/graphics/accent/noise_2.svg":[["noise_2.bad23d80.svg","assets/graphics/accent/noise_2.svg"],"assets/graphics/accent/noise_2.svg"],"./assets/graphics/accent/noise_3.svg":[["noise_3.a677e625.svg","assets/graphics/accent/noise_3.svg"],"assets/graphics/accent/noise_3.svg"],"./assets/graphics/accent/noise_4.svg":[["noise_4.b131b146.svg","assets/graphics/accent/noise_4.svg"],"assets/graphics/accent/noise_4.svg"],"./assets/fonts/Amatic-SC/AmaticSC-Regular.ttf":[["AmaticSC-Regular.02ca8f80.ttf","assets/fonts/Amatic-SC/AmaticSC-Regular.ttf"],"assets/fonts/Amatic-SC/AmaticSC-Regular.ttf"],"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2":[["amaticsc-regular-webfont.daf1d2a7.woff2","assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2"],"assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2"],"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff":[["amaticsc-regular-webfont.1226460a.woff","assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff"],"assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"partials/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = "";

var route_dashboard_not_logged = function route_dashboard_not_logged() {
  var content = "\n        <div id=\"dashboard_posts\" class=\"position_relative width_100 height_100vh bg_green float_left\">\n          please sign in\n        </div>\n      ";
  return content;
};

var route_dashboard = function route_dashboard(data) {
  var content = "\n      <div id=\"route_dashboard\" class=\"position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n\n        <div id=\"post_block_1\" style=\"\n        background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_100vh position_relative float_left\">\n        </div>\n\n        <div id=\"dashboard_posts\" class=\"position_relative width_100 height_100vh bg_green float_left\">\n        </div>\n\n        <b>your library</b><br>\n        <div id=\"element_ol_firebase_user_library\" class=\"position_relative width_100 float_left\"></div>\n      \n        <b>subs library</b><br>\n        <div id=\"element_ol_firebase_user_subs_library\" class=\"position_relative width_100 float_left\"></div>\n\n      </div>\n      ");
  return content;
};

var element_scroll_y_events = function element_scroll_y_events(id, info) {
  var component = "\n    <div id=\"".concat(id, "\" class=\"position_absolute top_0 width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1\">\n      <div class=\"position_relative width_100 float_left\">\n        ").concat(info, "\n      </div>\n    </div>\n  ");
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

var menu_sub = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n  </div>\n";
var element_after_sign_in = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n  </div>\n";
var element_after_sign_up = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n  </div>\n";
var element_after_menu_about = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n  </div>\n";
var element_after_logo_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left height_1205vh width_85vw hover_show\">\n  </div>\n";
var element_after_social_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left height_1205vh width_3705vw hover_show\">\n  </div>\n";
var element_after_logo_menu_bottom = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n  </div>\n";
var element_after_dots = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh top_100 right_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n  </div>\n";
var element_after_vert_dots = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh bottom_100 right_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n  </div>\n";
var element_after_social_type = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh bottom_100 left_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n  </div>\n";
var element_after_menu = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_100 float_left hover_show\">\n  </div>\n";
var element_after_social = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_0 bottom_100 float_left hover_show\">\n  </div>\n";
var element_after_meta = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_0 bottom_100 float_left hover_show\">\n  </div>\n";
var element_after_search = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_0 top_100 float_left hover_show\">\n  </div>\n";
var element_after_create = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n  </div>\n";
var element_user_info = "\n<div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n\n</div>\n";
var element_after_icon_back = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left hover_show\">\n  </div>\n";
var element_after_menu_dashboard = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 float_left hover_show\">\n  </div>\n";
var element_after_extra = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 bottom_0 margin_auto float_left hover_show\">\n  </div>\n";
var element_after_back_up = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 float_left hover_show\">\n  </div>\n";
var anchor_menu_left = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_top = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_bottom = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var element_after_button_menu_left = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Our Product\n                  </span>\n              </span>\n\n           </div>\n        </div>\n     </span>\n\n     <div class=\"gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n  </span>\n";
var element_after_button_menu_center = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </span>\n              </span>\n\n           </div>\n        </div>\n    </span>\n\n  </span>\n";
var element_after_button_menu_right = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh right_-100 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_yellow\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Our Product\n                  </span>\n              </span>\n\n\n           </div>\n        </div>\n     </span>\n\n     <div class=\"gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n  </span>\n";

var folds = function folds() {
  var content = "\n      <div id=\"folds\" class=\"display_none opacity_0 transform_translate3d_top0 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n      \n      </div>\n      ";
  return content;
};

var component_app_content_root = function component_app_content_root() {
  var component = "\n\n      <div id=\"section_1\" class=\"position_relative width_100 height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n        <div id=\"cardboard_fold\" class=\"easing_01 width_100 height_100 bottom_0 right_0 position_absolute margin_auto\">\n          \n          <div id=\"top_left\" class=\"easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top_right\" class=\"easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top\" class=\"easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"left\" class=\"easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto\">\n\n          </div>\n\n          <div id=\"left_outside\" class=\"easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"center\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n            ".concat(folds(), "\n\n          </div>\n\n          <div id=\"right\" class=\"easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom\" class=\"easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_left\" class=\"easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_right\" class=\"easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto\">\n\n          </div>\n        \n        </div>\n\n      </div>\n\n      <div id=\"transition_1\" class=\"position_relative width_100 height_100vh top_1vh gui_paint_top float_left display_flex_flow\">\n            \n      </div>\n\n      <div id=\"section_2\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n        <div class=\"position_relative max_width width_100 height_100vh margin_auto float_left\">\n          \n          \n          <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n          <!-- Responsive Pink -->\n          <ins class=\"adsbygoogle\"\n               style=\"display:block\"\n               data-ad-client=\"ca-pub-3909705375565088\"\n               data-ad-slot=\"6572891219\"\n               data-ad-format=\"auto\"\n               data-full-width-responsive=\"true\"></ins>\n          <script>\n          (adsbygoogle = window.adsbygoogle || []).push({});\n          </script>\n\n        </div>\n      </div>\n\n      <div id=\"section_3\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left display_flex_flow\">\n              \n          <div class=\"gui_logo position_absolute bottom_0 top_0 left_0 right_0 width_50 height_50 margin_auto float_left\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 left_-75 width_100 height_100 gui_paint_right float_left display_flex_flow\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 right_-75 width_100 height_100 gui_paint_left float_left display_flex_flow\">\n          </div>\n\n\n            <div class=\"easing_01 position_absolute width_100 height_100 bottom_0 left_0 right_0 margin_auto float_left\">\n              \n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n            </div>\n\n      </div>\n\n      <div id=\"section_4\" class=\"position_relative width_100 height_auto bg_yellow margin_auto float_left display_flex_flow\">\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Action #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Match Loggin & Local</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled Bottom Blog</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Timed Nav vanish</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded + cursor_moved</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"section_5\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_6\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_7\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"transition_2\" class=\"position_relative width_100 height_100vh gui_paint_bottom top_-1vh margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_8\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n  ");
  return component;
};

var element_guis = function element_guis() {
  var element = ""; // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    element = "\n\n        <div id=\"component_app_gui_toast_top_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_1205vh left_6025vw margin_auto z_index_8\">\n\n          <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_create position_relative width_50 height_50 float_left\">\n                ".concat(element_after_create, "\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_toast_top_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_1205vh right_6025vw margin_auto z_index_8\">\n\n          <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_create position_relative width_50 height_50 float_left\">\n                ").concat(element_after_create, "\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_toast_bottom_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed bottom_1205vh left_6025vw margin_auto z_index_8\">\n\n          <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_create position_relative width_50 height_50 float_left\">\n                ").concat(element_after_create, "\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_toast_bottom_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed bottom_1205vh right_6025vw margin_auto z_index_8\">\n\n          <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_create position_relative width_50 height_50 float_left\">\n                ").concat(element_after_create, "\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_top_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_0 left_0 margin_auto z_index_8\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div id=\"icon_menu\" class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto width_6025vw height_1205vh float_left transform_translate3d_left0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left\">\n                \n                <div id=\"icon_logo\" class=\"gui_logo position_relative width_100 height_100 margin_auto top_-05vh float_left\">\n                  ").concat(element_after_logo_menu_right, "\n                  ").concat(element_after_logo_menu_bottom, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"search_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div id=\"icon_search\" class=\"gui_search position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_search, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div id=\"icon_back\" class=\"gui_arrow_left position_relative width_75 height_50 float_left\">\n                  ").concat(element_after_icon_back, "\n                </div>\n\n              </div>\n\n            </div>\n\n        </div>\n\n        <div id=\"component_app_gui_top_center\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed calc_50vh_width top_0 left_0 right_0 margin_auto z_index_8\">\n\n          <div class=\"width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_top_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_8\">\n          \n          <div id=\"user_related\">\n\n\n            <div id=\"icon_dashboard\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                <div id=\"user_thumb\" class=\"gui_avatar width_50 height_50 float_left position_relative float_left margin_auto\"></div>\n                ").concat(element_after_menu_dashboard, "\n                ").concat(element_user_info, "\n              </div>\n            </div>\n\n            <div id=\"gui_route\" class=\"position_relative width_6025vw height_1205vh float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                <div id=\"icon_dots\" class=\"gui_dots position_relative width_50 height_50 float_left\">\n                \n                </div>\n                ").concat(element_after_dots, "\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 right_0 margin_auto z_index_8 display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n                <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    \n                    <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                      ").concat(element_after_menu, "\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n                <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    \n                    <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                      ").concat(element_after_menu, "\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n                <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    \n                    <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                      ").concat(element_after_menu, "\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n                <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    \n                    <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                      ").concat(element_after_menu, "\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n                <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    \n                    <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                      ").concat(element_after_menu, "\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n                <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    \n                    <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                      ").concat(element_after_menu, "\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n\n            </div>\n\n        </div>\n\n        <div id=\"component_app_gui_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 left_0 margin_auto z_index_8 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n          <div class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_bottom_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed bottom_0 left_0 margin_auto z_index_8\">\n          \n          <div id=\"social_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                ").concat(element_after_social_type, "\n                ").concat(element_after_social_menu_right, "\n            </div>\n          </div>\n\n          <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div class=\"gui_vert_colon width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n            </div>\n          </div>\n\n          <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_twitter\" class=\"gui_twitter width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n            </div>\n          </div>\n\n          <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_twitch\" class=\"gui_twitch width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n            </div>\n          </div>\n\n          <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_facebook\" class=\"gui_facebook width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n            </div>\n          </div>\n\n          <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_youtube\" class=\"gui_youtube width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n            </div>\n          </div>\n\n          <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_instagram\" class=\"gui_instagram width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n            </div>\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_bottom_center\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed calc_50vh_width bottom_0 left_0 right_0 margin_auto z_index_8\">\n          \n          <div class=\"width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"component_app_gui_bottom_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_8\">\n\n          <div id=\"meta_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_up\" class=\"gui_arrow_top position_relative width_75 height_50 float_left\">\n                \n              </div>\n              ").concat(element_after_back_up, "\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_vert_dots\" class=\"gui_vert_dots width_50 height_50 float_left position_relative float_left margin_auto\">\n                \n              </div>\n              ").concat(element_after_vert_dots, "\n                ").concat(element_after_extra, "\n\n            </div>\n          </div>\n\n        </div>\n\n      ");
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {}

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {}

  ;
  return element;
};

var value_ui_controls = "\n\n\n        <div class=\"position_relative width_100 float_left\">\n        <div class=\"position_relative calc_5vh margin_205vh float_left\">\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">events:</div>\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            Usual Events\n            </div>\n\n            <div class=\"position_relative font_size_2vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            time: <div id=\"time\"></div>\n            </div>\n\n\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n              64\n            </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse:</div>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_X: <div id=\"mouse_up_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_Y: <div id=\"mouse_up_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_X: <div id=\"mouse_down_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_Y: <div id=\"mouse_down_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up: <div id=\"mouse_up\"></div>\n            </p>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            click_position: <div id=\"click_position\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            wheel_direction: <div id=\"wheel_direction\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse down track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXstart: <div id=\"mousedragDistanceXstart\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYstart: <div id=\"mousedragDistanceYstart\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse up track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXend: <div id=\"mousedragDistanceXend\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYend: <div id=\"mousedragDistanceYend\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drag:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragX: <div id=\"dragX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragY: <div id=\"dragY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pen:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penX: <div id=\"penX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penY: <div id=\"penY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pencil:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilX: <div id=\"pencilX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilY: <div id=\"pencilY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_start:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_end:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">ux:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">dimensions:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_dimensions_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_dimensions_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">browser:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_browser_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_browser_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">Timer:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_leave: <div id=\"timer_mouse_leave\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_key_up: <div id=\"timer_key_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_up: <div id=\"timer_mouse_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            keys: <div id=\"key_keys\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key down: <div id=\"key_key_down\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key up: <div id=\"key_key_up\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Absolute: \n  <div id=\"component_app_status_state_events_mouse_absolute\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Alpha: \n  <div id=\"component_app_status_state_events_mouse_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Beta: \n  <div id=\"component_app_status_state_events_mouse_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Gamma: \n  <div id=\"component_app_status_state_events_mouse_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.x: \n  <div id=\"component_app_status_state_events_mouse_acceleration_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.y: \n  <div id=\"component_app_status_state_events_mouse_acceleration_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.z: \n  <div id=\"component_app_status_state_events_mouse_acceleration_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.x: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.y: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.z: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Alpha: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Beta: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Gamma: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            rotationAngle: <div id=\"rotationAngle\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusX: <div id=\"radiusX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusY: <div id=\"radiusY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceX: <div id=\"dragDistanceX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceY: <div id=\"dragDistanceY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXStart: <div id=\"dragDistanceXStart\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYStart: <div id=\"dragDistanceYStart\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXEnd: <div id=\"dragDistanceXEnd\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYEnd: <div id=\"dragDistanceYEnd\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_X: <div id=\"touch_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_Y: <div id=\"touch_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_X: <div id=\"touch_page_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_Y: <div id=\"touch_page_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touches: <div id=\"touches\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_X: <div id=\"touch_start_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_Y: <div id=\"touch_start_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_force: <div id=\"touch_start_force\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_X: <div id=\"touch_end_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_Y: <div id=\"touch_end_client_Y\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone Only:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_force: <div id=\"touch_end_force\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad VR:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last_action: <div id=\"last_action\"></div>\n            </p>\n\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad Oriontation:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_alpha: <div id=\"event_alpha\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_beta: <div id=\"event_beta\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_gamma: <div id=\"event_gamma\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">Component API:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientHeight (Container Height): <div id=\"scroll_clientHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientWidth: <div id=\"scroll_clientWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollHeight (Max Scroll Height): <div id=\"scroll_scrollHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollWidth: <div id=\"scroll_scrollWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollTop (Current Scroll): <div id=\"scroll_scrollTop\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollLeft: <div id=\"scroll_scrollLeft\"></div>\n            </p>\n\n\n        \n  <div class=\"position_relative width_100 float_left \">\n  UI state:\n  </div>\n  <div class=\"position_relative width_100 float_left\">\n  Route State (Onboarding, Form, Search, Interaction):\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Setting:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Accent:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Effect:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Pieces:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Particles:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Interaction:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Characters:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">enemies: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Route:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Materials: \n  <div id=\"route\" class=\" position_relative display opacity_1\">materials</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Gui:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">logo: \n  <div id=\"component_app_status_display_gui_element_logo\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">arrows: \n  <div id=\"component_app_status_display_gui_element_arrows\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">buttons: \n  <div id=\"component_app_status_display_gui_element_buttons\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_10vh\">Modal:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pop</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pip</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">nav</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">page</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">menu</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">morph</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">corner</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">gradient</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">fade</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">overlay</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  </div>\n  </div>\n  ";
var element_anchor_left = "\n      <div id=\"anchor-left\" class=\"position_fixed bottom_0 top_0 left_90375vw margin_auto width_30125vw calc_25vh_height z_index_1\">\n                \n        <div id=\"nav_item\" class=\"position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div id=\"nav_item\" class=\"position_relative float_left z_index_1\">\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              \n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              \n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n\n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              \n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              \n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              \n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              \n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute top_0 bottom_0 left_100 margin_auto height_100 width_1vh\">\n          <div class=\"position_absolute bottom_0 left_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100\">\n          </div>\n        </div>\n\n      </div>\n";
var element_anchor_right = "\n\n      <div id=\"anchor-right\" class=\"position_fixed bottom_0 top_0 right_90375vw margin_auto width_30125vw calc_25vh_height z_index_1\">\n        \n        <div id=\"nav_item\" class=\"position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div id=\"nav_item\" class=\"position_relative float_left z_index_1\">\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n\n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh\">\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute top_0 bottom_0 right_100 margin_auto height_100 width_1vh\">\n          <div class=\"position_absolute bottom_0 right_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100\">\n          </div>\n        </div>\n\n      </div>\n";

var element_anchor_top = function element_anchor_top() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n\n          <div id=\"anchor-top\" class=\"position_fixed top_1205vh left_0 right_0 margin_auto height_90375vh width_100 z_index_1\">\n            \n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_90375vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"hover_hide position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_show position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                    \n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                </div>\n                \n                <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100\">\n              <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100\">\n              </div>\n            </div>\n\n          </div>\n\n        ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n\n          <div id=\"anchor-top\" class=\"position_fixed top_6025vh left_0 right_0 margin_auto height_6025vh width_100 z_index_1\">\n            \n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_imac calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_vr calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_iphone calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_tv calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_ipad calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_watch calc_1vw\">\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100\">\n              <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100\">\n              </div>\n            </div>\n\n          </div>\n\n        ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n\n          <div id=\"anchor-top\" class=\"position_fixed top_6025vh left_0 right_0 margin_auto height_6025vh width_100 z_index_1\">\n            \n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_90375vw_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_imac calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_vr calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_iphone calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_tv calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_ipad calc_1vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n                <div class=\"position_relative float_left margin_05vw gui_icon_watch calc_1vw\">\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100\">\n              <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100\">\n              </div>\n            </div>\n\n          </div>\n\n        ";
  }

  ;
  return return_this;
};

var element_anchor_bottom = function element_anchor_bottom() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n\n          <div id=\"anchor-bottom\" class=\"position_fixed bottom_1205vh left_0 right_0 margin_auto height_90375vh width_100 z_index_1\">\n        \n\n        <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_90375vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"hover_show position_relative float_left margin_025vw gui_icon_imac calc_05vw\">\n            </div>\n            \n            <div class=\"hover_hide position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n            </div>\n            \n            <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n            </div>\n            \n            <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n            </div>\n            \n            <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n            </div>\n            \n            <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n\n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n            </div>\n            \n            <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100\">\n          <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100\">\n          </div>\n        </div>\n\n      </div>\n\n        ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n\n          <div id=\"anchor-bottom\" class=\"position_fixed bottom_6025vh left_0 right_0 margin_auto height_6025vh width_100 z_index_1\">\n        \n\n        <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_imac calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_vr calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_iphone calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_tv calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_ipad calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n\n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_watch calc_1vw\">\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100\">\n          <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100\">\n          </div>\n        </div>\n\n      </div>\n\n        ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n\n          <div id=\"anchor-bottom\" class=\"position_fixed bottom_6025vh left_0 right_0 margin_auto height_6025vh width_100 z_index_1\">\n        \n\n        <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_90375vw_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_imac calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_vr calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_iphone calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_tv calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_ipad calc_1vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n\n          <div class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n\n            <div class=\"position_relative float_left margin_05vw gui_icon_watch calc_1vw\">\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100\">\n          <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100\">\n          </div>\n        </div>\n\n      </div>\n\n        ";
  }

  ;
  return return_this;
};

var element_nav_bottom = function element_nav_bottom() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-bottom\" class=\"position_fixed bottom_0 left_0 right_0 margin_auto height_1205vh width_100 z_index_6\">\n            \n            <div id=\"spacer\" class=\"position_relative float_left margin_auto height_1205vh z_index_1\">\n              <div class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n              </div>\n              <div class=\"position_relative float_left margin_auto height_1205vh width_6025vw\">\n              </div>\n            </div>\n\n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_1205vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n            \n                <div class=\"position_relative float_left margin_025vh gui_logo_type calc_05vh\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n                \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw\">\n                    </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw\">\n                    </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw\">\n                    </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw\">\n                    </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw\">\n                    </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"nav_item\" class=\"position_relative float_right margin_auto height_1205vh z_index_1\">\n              \n              <div id=\"spacer\" class=\"position_relative float_left margin_auto height_1205vh width_6025vw\">\n              </div>\n\n              <div id=\"spacer\" class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100\">\n              <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100\">\n              </div>\n            </div>\n\n          </div>\n        ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-bottom\" class=\"position_fixed bottom_0 left_0 right_0 margin_auto height_6025vh width_100 z_index_6\">\n            \n            <div id=\"nav_item\" class=\"position_relative float_left margin_auto height_6025vh z_index_1\">\n              <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              </div>\n              <div class=\"position_relative float_left margin_auto gui_logo height_6025vh width_6025vw\">\n              </div>\n            </div>\n\n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_1vw gui_icon_imac calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_1vw gui_icon_vr calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_1vw gui_icon_iphone calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_1vw gui_icon_tv calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n              \n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_1vw gui_icon_ipad calc_2vw\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"nav_item\" class=\"position_relative float_right margin_auto height_6025vh z_index_1\">\n              \n              <div class=\"position_relative float_left margin_auto gui_logo_type height_6025vh width_6025vw\">\n              </div>\n\n              <div id=\"space\" class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100\">\n              <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100\">\n              </div>\n            </div>\n\n          </div>\n        ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-bottom\" class=\"position_fixed bottom_0 left_0 right_0 margin_auto height_6025vh width_100 z_index_6\">\n        \n        <div id=\"nav_item\" class=\"position_relative float_left margin_auto height_6025vh z_index_1\">\n          <div class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n          </div>\n          <div class=\"position_relative float_left margin_auto gui_logo height_6025vh width_6025vw\">\n          </div>\n        </div>\n\n\n        <div id=\"nav_item\" class=\"position_absolute bottom_0 right_0 margin_auto height_6025vh calc_90375vw_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n            <div class=\"position_relative float_left margin_1vw gui_icon_imac calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n            <div class=\"position_relative float_left margin_1vw gui_icon_vr calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n            <div class=\"position_relative float_left margin_1vw gui_icon_iphone calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n            <div class=\"position_relative float_left margin_1vw gui_icon_tv calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n          \n          <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n            <div class=\"position_relative float_left margin_1vw gui_icon_ipad calc_2vw\">\n            </div>\n\n          </div>\n\n          <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n            </div>\n          </div>\n\n          <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n            <div class=\"position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"nav_item\" class=\"position_relative float_right margin_auto height_6025vh z_index_1\">\n          \n          <div class=\"position_relative float_left margin_auto gui_logo_type height_6025vh width_6025vw\">\n          </div>\n\n          <div id=\"space\" class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100\">\n          <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100\">\n          </div>\n        </div>\n\n      </div>\n        ";
  }

  ;
  return return_this;
};

var element_gui_top_left = function element_gui_top_left() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n        \n          <div id=\"gui_top_left\" class=\"position_fixed top_0 left_0 float_left margin_auto height_1205vh z_index_6\">\n\n            <div id=\"space\" class=\"position_relative float_left margin_auto height_1205vh width_1vw\">\n            </div>\n\n            <div id=\"icon_column\" class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div id=\"button_menu\" class=\"position_relative float_left margin_auto gui_icon_menu calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n            <div id=\"space\" class=\"position_relative float_left margin_auto height_1205vh width_1vw\">\n            </div>\n\n            <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n              <div class=\"position_relative float_left margin_025vh calc_05vh\">\n\n                  <div class=\"hover_show position_relative float_left margin_025vh gui_text_home calc_05vh\">\n                  </div>\n                  \n                  <div id=\"logo_column\" class=\"hover_hide position_relative float_left margin_025vh gui_logo_type calc_05vh\">\n                  </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n      ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n      ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n      ";
  }

  ;
  return return_this;
};

var element_gui_top_right = function element_gui_top_right() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n        \n          <div id=\"gui_top_right\" class=\"position_fixed top_0 right_0 float_right margin_auto height_1205vh z_index_6\">\n\n            <div id=\"route_dashboard\" class=\"position_relative float_left margin_auto avatar_icon_maisie height_1205vh width_6025vw\">\n\n              <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                  <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                    \n                    <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                          <div id=\"element_user_sign_in\" class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                            <div class=\"position_relative float_left margin_05vh gui_text_login calc_1vh\">\n                            </div>\n\n                          </div>\n\n                          <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                            </div>\n                          </div>\n\n                          <div id=\"element_user_sign_out\" class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                            <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white\">\n\n                        <p class=\"bg_yellow width_100 float_left\">are you logged in?</p>\n                        <div id=\"users_username\"></div>\n                        <p class=\"bg_yellow width_100 float_left\">username?</p>\n                        <input id=\"username\" type=\"text\" placeholder=\"username\" class=\"width_100 bg_pink float_left\" />\n                        <p class=\"bg_yellow width_100 float_left\">password?</p>\n                        <input id=\"password\" type=\"text\" placeholder=\"password\" class=\"width_100 bg_pink float_left\" />\n\n                      </div>\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                          <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                            <div class=\"position_relative float_left margin_05vh gui_text_register calc_1vh\">\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"space\" class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n            </div>\n\n          </div>\n      ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n      ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n      ";
  }

  ;
  return return_this;
};

var element_gui_bottom_left = function element_gui_bottom_left() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n        \n          <div id=\"gui_bottom_left\" class=\"position_fixed bottom_0 left_0 float_left margin_auto height_1205vh z_index_6\">\n\n            <div id=\"space\" class=\"position_relative float_left margin_auto height_1205vh width_1vw\">\n            </div>\n\n            <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n              <div class=\"position_relative float_left margin_025vh calc_05vh\">\n\n                  <div class=\"hover_show position_relative float_left margin_025vh gui_text_home calc_05vh\">\n                  </div>\n                  \n                  <div class=\"hover_hide position_relative float_left margin_025vh gui_logo_type calc_05vh\">\n                  </div>\n\n              </div>\n\n            </div>\n\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_social_facebook calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_social_youtube calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_social_instagram calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_social_twitter calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_social_twitch calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_social_instagram calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_audio calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n            \n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_audio_on calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_audio_off calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_dots calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_vert_dots calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_vert_colon calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_search calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n            <div id=\"social\" class=\"hover_show position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n              <div class=\"position_relative float_left margin_auto gui_circle calc_1vw margin_05vw\">\n\n              </div>\n\n            </div>\n\n          </div>\n\n      ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n      ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n      ";
  }

  ;
  return return_this;
};

var element_gui_bottom_right = function element_gui_bottom_right() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n        \n          <div id=\"gui_bottom_right\" class=\"position_fixed bottom_0 right_0 float_right margin_auto height_1205vh z_index_6\">\n\n            <div id=\"route_dashboard\" class=\"position_relative float_left margin_auto avatar_icon_maisie height_1205vh width_6025vw\">\n\n              <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                  <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                    \n                    <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                          <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                            <div class=\"position_relative float_left margin_05vh gui_text_login calc_1vh\">\n                            </div>\n\n                          </div>\n\n                          <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                            </div>\n                          </div>\n\n                          <div id=\"element_user_sign_out\" class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                            <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white\">\n\n                        <p class=\"bg_yellow width_100 float_left\">are you logged in?</p>\n                        <div id=\"users_username\"></div>\n                        <p class=\"bg_yellow width_100 float_left\">username?</p>\n                        <input id=\"username\" type=\"text\" placeholder=\"username\" class=\"width_100 bg_pink float_left\" />\n                        <p class=\"bg_yellow width_100 float_left\">password?</p>\n                        <input id=\"password\" type=\"text\" placeholder=\"password\" class=\"width_100 bg_pink float_left\" />\n\n                      </div>\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                          <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                            <div class=\"position_relative float_left margin_05vh gui_text_register calc_1vh\">\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"space\" class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n            </div>\n\n          </div>\n      ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n      ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n      ";
  }

  ;
  return return_this;
};

var element_nav_top = function element_nav_top() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-top\" class=\"position_fixed top_0 left_0 right_0 margin_auto height_1205vh width_100 z_index_1\">\n            \n            <div id=\"nav_item\" class=\"position_relative float_left margin_auto height_1205vh z_index_1\">\n\n              <div class=\"position_relative float_left margin_auto height_1205vh width_1vw\">\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n                <div class=\"position_relative float_left margin_auto calc_1vw margin_05vw\">\n\n                </div>\n\n              </div>\n\n              <div id=\"space\" class=\"position_relative float_left margin_auto height_1205vh width_1vw\">\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh calc_05vh\">\n\n                    <div class=\"hover_show position_relative float_left margin_025vh calc_05vh\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_025vh calc_05vh\">\n                    </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_1205vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n\n              <div id=\"route_blog\" class=\"position_relative float_left margin_auto\">\n\n                <div class=\"hover_hide position_relative float_left margin_auto height_1205vh width_6025vw\">\n\n                  <div class=\"position_relative float_left margin_auto gui_text_blog calc_2vw margin_1vw\">\n                  </div>\n\n                </div>\n                \n                <div class=\"hover_show position_relative float_left margin_auto height_100 width_6025vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_logo_mark calc_05vh\">\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"nav-top_items\">\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                  </div>\n                </div>\n\n                <div id=\"route_who\" class=\"position_relative float_left margin_auto height_100 width_90375vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_text_about calc_05vh\">\n\n                    <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                          \n                          <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                            </div>\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                            </div>\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                            </div>\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                                <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                  </div>\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                            </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n                <div id=\"route_what\" class=\"position_relative float_left margin_auto height_100 width_90375vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_text_services calc_05vh\">\n\n                    <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                          \n                          <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                            \n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                                <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                  </div>\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                            </div>\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                                <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                  </div>\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                            </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n                \n                <div id=\"route_when\" class=\"position_relative float_left margin_auto height_100 width_90375vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_text_library calc_05vh\">\n\n\n                    <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                      <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                          \n                          <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                  </div>\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                                <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                  </div>\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                                <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                  </div>\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                                <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                  </div>\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                                <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                  </div>\n                                </div>\n\n                                <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                  <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                  </div>\n\n                                </div>\n\n                            </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n                \n                <div id=\"route_where\" class=\"position_relative float_left margin_auto height_100 width_90375vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_text_skills calc_05vh\">\n                  </div>\n\n                </div>\n\n                <div id=\"route_why\" class=\"position_relative float_left margin_auto height_100 width_90375vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_text_abilities calc_05vh\">\n                  </div>\n\n                </div>\n                \n                <div id=\"route_how\" class=\"position_relative float_left margin_auto height_100 width_90375vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_text_workshop calc_05vh\">\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div id=\"\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n\n                  <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                        \n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                              <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_login calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"nav_item\" class=\"position_relative float_right margin_auto height_1205vh\">\n\n              <div class=\"position_relative float_left margin_auto height_1205vh width_6025vw\">\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n              </div>\n\n            </div>\n\n            <div id=\"nav-top_items_hr\" class=\"position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100\">\n              <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100\">\n              </div>\n            </div>\n\n          </div>\n        ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-top\" class=\"position_fixed top_0 left_0 right_0 margin_auto height_1205vh width_100 z_index_6 bg_white\">\n            \n            <div id=\"nav_item\" class=\"position_relative float_left margin_auto height_1205vh z_index_1\">\n\n              <div class=\"position_relative float_left margin_auto height_1205vh width_1vw\">\n              </div>\n\n              <div id=\"column\" class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n\n                <div id=\"button_menu\" class=\"position_relative float_left margin_auto gui_icon_menu calc_1vw margin_05vw\">\n\n                </div>\n\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_1205vh width_1vw\">\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div id=\"column\" class=\"position_relative float_left margin_025vh gui_logo_type calc_05vh\">\n\n                </div>\n\n                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                  <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                    <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white\">\n                      \n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                            <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                              </div>\n\n                            </div>\n\n                            <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n                <div id=\"column\" class=\"hover_show position_absolute left_100 top_0 bottom_0 float_left margin_auto height_1205vh width_6025vw\">\n\n                  <div class=\"position_relative float_left margin_auto gui_logo_mark calc_2vw margin_1vw\">\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_1205vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n\n\n              <div id=\"route_home\" class=\"position_relative float_left margin_auto\">\n\n                <div class=\"hover_hide position_relative float_left margin_auto height_1205vh width_6025vw\">\n\n                  <div class=\"position_relative float_left margin_auto gui_logo_mark calc_2vw margin_1vw\">\n                  </div>\n\n                </div>\n                \n                <div class=\"hover_show position_relative float_left margin_auto height_100 width_6025vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_text_home calc_05vh\">\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div id=\"route_who\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_about calc_05vh\">\n\n                  <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                        \n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"route_what\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_services calc_05vh\">\n\n                  <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                        \n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                          \n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n              \n              <div id=\"route_when\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_library calc_05vh\">\n\n\n                  <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                        \n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n              \n              <div id=\"route_where\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_skills calc_05vh\">\n                </div>\n\n              </div>\n\n              \n              <div id=\"route_why\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_abilities calc_05vh\">\n                </div>\n\n              </div>\n              \n              <div id=\"route_how\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_workshop calc_05vh\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div id=\"\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n\n                  <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                        \n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                              <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_login calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"nav_item\" class=\"position_relative float_right margin_auto height_1205vh z_index_1\">\n\n              <div id=\"route_dashboard\" class=\"position_relative float_left margin_auto avatar_icon_maisie height_1205vh width_6025vw\">\n\n                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                  <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                    <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                      \n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                            <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_login calc_1vh\">\n                              </div>\n\n                            </div>\n\n                            <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                              </div>\n                            </div>\n\n                            <div id=\"element_user_sign_out\" class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white\">\n\n                          <p class=\"bg_yellow width_100 float_left\">are you logged in?</p>\n                          <div id=\"users_username\"></div>\n                          <p class=\"bg_yellow width_100 float_left\">username?</p>\n                          <input id=\"username\" type=\"text\" placeholder=\"username\" class=\"width_100 bg_pink float_left\" />\n                          <p class=\"bg_yellow width_100 float_left\">password?</p>\n                          <input id=\"password\" type=\"text\" placeholder=\"password\" class=\"width_100 bg_pink float_left\" />\n\n                        </div>\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                            <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_register calc_1vh\">\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"space\" class=\"position_relative float_left margin_auto height_1205vh width_30125vw\">\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100\">\n              <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100\">\n              </div>\n            </div>\n\n          </div>\n        ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-top\" class=\"position_fixed top_0 left_0 right_0 margin_auto height_6025vh width_100 z_index_6 bg_white\">\n            \n            <div id=\"nav_item\" class=\"position_relative float_left margin_auto height_6025vh z_index_1\">\n\n              <div class=\"position_relative float_left margin_auto height_6025vh width_1vw\">\n              </div>\n\n              <div id=\"column\" class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n\n                <div id=\"button_menu\" class=\"position_relative float_left margin_auto gui_icon_menu calc_1vw margin_05vw\">\n\n                </div>\n\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_6025vh width_1vw\">\n              </div>\n\n              <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div id=\"column\" class=\"position_relative float_left margin_025vh gui_logo_type calc_05vh\">\n\n                </div>\n\n                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                  <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                    <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white\">\n                      \n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                            <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                              </div>\n\n                            </div>\n\n                            <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n                <div id=\"column\" class=\"hover_show position_absolute left_100 top_0 bottom_0 float_left margin_auto height_6025vh width_6025vw\">\n\n                  <div class=\"position_relative float_left margin_auto gui_logo_mark calc_2vw margin_1vw\">\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_90375vw_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n\n\n              <div id=\"route_home\" class=\"position_relative float_left margin_auto\">\n\n                <div class=\"hover_hide position_relative float_left margin_auto height_6025vh width_6025vw\">\n\n                  <div class=\"position_relative float_left margin_auto gui_logo_mark calc_2vw margin_1vw\">\n                  </div>\n\n                </div>\n                \n                <div class=\"hover_show position_relative float_left margin_auto height_100 width_6025vw\">\n\n                  <div class=\"position_relative float_left margin_025vh gui_text_home calc_05vh\">\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div id=\"route_who\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n                  \n                      <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                      </div>\n                      \n                      <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw\">\n                      </div>\n\n                      <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                          <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                            \n                            <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                              <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                    <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                    </div>\n\n                                  </div>\n\n                              </div>\n\n                              <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                    <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                    </div>\n\n                                  </div>\n\n                              </div>\n\n                              <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                    <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                    </div>\n\n                                  </div>\n\n                              </div>\n\n                              <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                    <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                    </div>\n\n                                  </div>\n\n                                  <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                    <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                    </div>\n                                  </div>\n\n                                  <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                    <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                    </div>\n\n                                  </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"route_what\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_services calc_05vh\">\n\n                  <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                        \n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                          \n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n              \n              <div id=\"route_when\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_library calc_05vh\">\n\n\n                  <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                        \n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                                </div>\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_30125vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n              \n              <div id=\"route_where\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_skills calc_05vh\">\n                </div>\n\n              </div>\n\n              \n              <div id=\"route_why\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_abilities calc_05vh\">\n                </div>\n\n              </div>\n              \n              <div id=\"route_how\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_025vh gui_text_workshop calc_05vh\">\n                </div>\n\n              </div>\n\n              <div id=\"hr\" class=\"position_relative float_left margin_auto height_100 width_30125vw\">\n                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                </div>\n              </div>\n\n              <div id=\"\" class=\"position_relative float_left margin_auto height_100 width_6025vw\">\n\n                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n\n                  <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                        \n                        <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                          <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                              <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_login calc_1vh\">\n                                </div>\n\n                              </div>\n\n                              <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                                <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                                </div>\n\n                              </div>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"nav_item\" class=\"position_relative float_right margin_auto height_6025vh z_index_1\">\n\n              <div id=\"route_dashboard\" class=\"position_relative float_left margin_auto avatar_icon_maisie height_6025vh width_6025vw\">\n\n                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right\">\n\n                  <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                    <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                      \n                      <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark\">\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                            <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_login calc_1vh\">\n                              </div>\n\n                            </div>\n\n                            <div id=\"hr\" class=\"position_relative float_left margin_auto height_6025vw width_30125vw\">\n                              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw\">\n                              </div>\n                            </div>\n\n                            <div id=\"element_user_sign_out\" class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_logout calc_1vh\">\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white\">\n\n                          <p class=\"bg_yellow width_100 float_left\">are you logged in?</p>\n                          <div id=\"users_username\"></div>\n                          <p class=\"bg_yellow width_100 float_left\">username?</p>\n                          <input id=\"username\" type=\"text\" placeholder=\"username\" class=\"width_100 bg_pink float_left\" />\n                          <p class=\"bg_yellow width_100 float_left\">password?</p>\n                          <input id=\"password\" type=\"text\" placeholder=\"password\" class=\"width_100 bg_pink float_left\" />\n\n                        </div>\n\n                        <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white\">\n\n                            <div class=\"position_relative float_left margin_auto height_6025vw width_6025vw\">\n\n                              <div class=\"position_relative float_left margin_05vh gui_text_register calc_1vh\">\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div id=\"space\" class=\"position_relative float_left margin_auto height_6025vh width_30125vw\">\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100\">\n              <div class=\"position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100\">\n              </div>\n            </div>\n\n          </div>\n        ";
  }

  ;
  return return_this;
};

var element_nav_left = function element_nav_left() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-left\" class=\"position_fixed bottom_0 top_0 left_0 margin_auto width_6025vw calc_25vh_height z_index_6\">\n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n              \n              <div id=\"nav_item\" class=\"position_relative float_left z_index_1\">\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_icon_watch calc_2vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_logo_type calc_05vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n\n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute top_0 bottom_0 left_100 margin_auto height_100 width_1vh\">\n              <div class=\"position_absolute bottom_0 left_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100\">\n              </div>\n            </div>\n\n          </div>\n        ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-left\" class=\"position_fixed bottom_0 top_0 left_0 margin_auto width_6025vw calc_25vh_height z_index_6\">\n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n              \n              <div id=\"nav_item\" class=\"position_relative float_left z_index_1\">\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_icon_watch calc_2vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_logo_type calc_05vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n\n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute top_0 bottom_0 left_100 margin_auto height_100 width_1vh\">\n              <div class=\"position_absolute bottom_0 left_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100\">\n              </div>\n            </div>\n\n          </div>\n        ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n          <div id=\"nav-left\" class=\"position_fixed bottom_0 top_0 left_0 margin_auto width_6025vw calc_25vh_height z_index_6\">\n\n            <div id=\"nav_item\" class=\"position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n              \n              <div id=\"nav_item\" class=\"position_relative float_left z_index_1\">\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_icon_watch calc_2vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_logo_type calc_05vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n\n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n                <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n                  <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n                  </div>\n                </div>\n                \n                <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n                  \n                    <div class=\"hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw\">\n                    </div>\n                    \n                    <div class=\"hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw\">\n                    </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"position_absolute top_0 bottom_0 left_100 margin_auto height_100 width_1vh\">\n              <div class=\"position_absolute bottom_0 left_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100\">\n              </div>\n            </div>\n\n          </div>\n        ";
  }

  ;
  return return_this;
};

;

var element_nav_right = function element_nav_right() {
  var return_this = ''; // adaptive render!
  // desktop

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n\n        <div id=\"nav-right\" class=\"position_fixed bottom_0 top_0 right_0 margin_auto width_6025vw calc_25vh_height z_index_6\">\n        \n        <div id=\"nav_item\" class=\"position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div id=\"nav_item\" class=\"position_relative float_left z_index_1\">\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n\n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute top_0 bottom_0 right_100 margin_auto height_100 width_1vh\">\n          <div class=\"position_absolute bottom_0 right_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100\">\n          </div>\n        </div>\n      </div>\n\n        ";
  }

  ; // ipad

  if (/iPad/i.test(navigator.userAgent)) {
    return_this = "\n\n        <div id=\"nav-right\" class=\"position_fixed bottom_0 top_0 right_0 margin_auto width_6025vw calc_25vh_height z_index_6\">\n        \n        <div id=\"nav_item\" class=\"position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div id=\"nav_item\" class=\"position_relative float_left z_index_1\">\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n\n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute top_0 bottom_0 right_100 margin_auto height_100 width_1vh\">\n          <div class=\"position_absolute bottom_0 right_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100\">\n          </div>\n        </div>\n      </div>\n\n        ";
  }

  ; // iphone

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return_this = "\n\n        <div id=\"nav-right\" class=\"position_fixed bottom_0 top_0 right_0 margin_auto width_6025vw calc_25vh_height z_index_6\">\n        \n        <div id=\"nav_item\" class=\"position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1\">\n          \n          <div id=\"nav_item\" class=\"position_relative float_left z_index_1\">\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n\n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n            <div id=\"hr\" class=\"position_relative float_left margin_auto height_1vh width_100\">\n              <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100\">\n              </div>\n            </div>\n            \n            <div class=\"position_relative float_left margin_auto height_90375vh width_6025vw\">\n              <div class=\"position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh\">\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"position_absolute top_0 bottom_0 right_100 margin_auto height_100 width_1vh\">\n          <div class=\"position_absolute bottom_0 right_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100\">\n          </div>\n        </div>\n      </div>\n\n        ";
  }

  ;
  return return_this;
};

var element_page_top = "\n    <div id=\"component_app_modal_element_page_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_5 margin_auto bg_white\">\n      <div id=\"component_app_modal_element_page_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n        \n      </div>\n\n    </div>\n    ";
var element_page_left = "\n    <div id=\"component_app_modal_element_page_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_1 margin_auto\">\n      <div id=\"component_app_modal_element_page_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_1 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_page_bottom = "\n    <div id=\"component_app_modal_element_page_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_5\">\n      <div id=\"component_app_modal_element_page_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\"> \n\n                    <div id=\"fold\" class=\"position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left\">\n\n                        <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                        \n                            <div id=\"x-1\" class=\"width_100vw height_100vh float_left position_relative z_index_1\">\n                                    \n                                <div class=\"position_absolute height_100vh width_100 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y\">\n                                                                        \n                                      <div id=\"page_right_nav_filler\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative\">\n                                      </div>\n\n                                      <div id=\"blog_controls\" class=\"position_relative width_100 z_index_1 float_left bg_purple\">\n\n                                                <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white\">\n\n                                                  <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white\">\n\n                                                <p class=\"bg_yellow width_100 float_left\">less_posts_value?</p>\n                                                <button id=\"less_posts\" class=\"width_100 float_left\">less_posts</button>\n                                                <div id=\"less_posts_value\"></div>\n                                                <p class=\"bg_yellow width_100 float_left\">more_posts_value?</p>\n                                                <button id=\"more_posts\" class=\"width_100 float_left\">more_posts</button>\n                                                <div id=\"more_posts_value\"></div>\n\n                                                <p class=\"bg_yellow width_100 float_left\">sort by type?</p>\n                                                <input id=\"element_input_sorting_type\" type=\"text\" placeholder=\"element_input_sorting_type\" class=\"width_100 bg_pink float_left\" />\n                                                <p class=\"bg_yellow width_100 float_left\">blog style?</p>\n                                                <input id=\"element_input_style\" type=\"text\" placeholder=\"element_input_style\" class=\"width_100 bg_pink float_left\" />\n\n                                                <p class=\"bg_yellow width_100 float_left\">element_input_filter?</p>\n                                                <input id=\"element_input_filter\" type=\"text\" placeholder=\"element_input_filter\" class=\"width_100 bg_pink float_left\" />\n\n                                                  </div>\n\n                                              </div>\n\n                                      </div>\n\n                                      <div id=\"blog\" class=\"position_relative width_100 z_index_1 float_left bg_purple overflow_x_hidden\">\n\n                                                <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_10vw_width margin_5vw border_radius_1vh text_align_center float_right bg_white\">\n\n                                                  <div id=\"spacer\" class=\"position_relative margin_auto easing_01 calc_10vw_width margin_5vw border_radius_1vh text_align_center float_right bg_white\">\n\n                                                  <h1>element_ol_firebase_filtered_library</h1>\n                                                  <ol id=\"element_ol_firebase_filtered_library\"></ol>\n                                                  \n                                                  <h1>library_posts_logged</h1>\n                                                  <ol id=\"library_posts_logged\"></ol>\n\n                                                  <h1>library_posts_advance_filter</h1>\n                                                  <ol id=\"library_posts_advance_filter\"></ol>\n\n                                                  <h2>element_ol_firebase_library</h2>\n                                                  <ol id=\"element_ol_firebase_library\"></ol>\n\n                                                  <h2>element_ol_firebase_library</h2>\n                                                  <ol id=\"element_ol_firebase_roster\"></ol>\n\n                                                  <h2>element_ol_firebase_library</h2>\n                                                  <ol id=\"element_ol_firebase_abilities\"></ol>\n\n                                                  <h2>element_ol_firebase_library</h2>\n                                                  <ol id=\"element_ol_firebase_partners\"></ol>\n\n                                                  <h2>element_ol_firebase_library</h2>\n                                                  <ol id=\"element_ol_firebase_services\"></ol>\n\n                                                  <h2>element_ol_firebase_library</h2>\n                                                  <ol id=\"element_ol_firebase_skills\"></ol>\n                                                </div>\n\n                                        </div>\n\n                                      </div>\n\n\n                                    <div class=\"bg_purple width_100\">\n\n\n            <div id=\"page_right_nav_filler\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative\">\n            </div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose title</h1>\n            <input id=\"element_input_filter\" class=\"width_100\" placeholder=\"filter by: title\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose types</h1>\n            <input id=\"element_input_types\" class=\"width_100\" placeholder=\"adds types\" type=\"text\" name=\"\"/>\n            <div id=\"types\"></div>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose username for post</h1>\n            <input id=\"element_input_post_username\" class=\"width_100\" placeholder=\"element_input_post_username\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose blog post style</h1>\n            <input id=\"element_input_style\" class=\"width_100\" placeholder=\"element_input_style\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Library inputs</h1>\n            <input id=\"create_library_input_title\" class=\"width_100\" placeholder=\"create_library_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_subtitle\" class=\"width_100\" placeholder=\"create_library_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_paragraph\" class=\"width_100\" placeholder=\"create_library_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_category\" class=\"width_100\" placeholder=\"create_library_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_sub_category\" class=\"width_100\" placeholder=\"create_library_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_feature_style\" class=\"width_100\" placeholder=\"create_library_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_tag\" class=\"width_100\" placeholder=\"create_library_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_type\" class=\"width_100\" placeholder=\"create_library_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_feature_image_src\" class=\"width_100\" placeholder=\"create_library_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n\n            <div id=\"element_input_create_library\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create library post</div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Create Roster</h1>\n            <input id=\"new_username\" class=\"width_100\" placeholder=\"username\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"new_password\" class=\"width_100\" placeholder=\"password\" type=\"text\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_roster\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create roster user</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">services inputs</h1>\n            <input id=\"create_services_input_title\" class=\"width_100\" placeholder=\"create_services_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_subtitle\" class=\"width_100\" placeholder=\"create_services_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_paragraph\" class=\"width_100\" placeholder=\"create_services_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_category\" class=\"width_100\" placeholder=\"create_services_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_sub_category\" class=\"width_100\" placeholder=\"create_services_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_feature_style\" class=\"width_100\" placeholder=\"create_services_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_tag\" class=\"width_100\" placeholder=\"create_services_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_type\" class=\"width_100\" placeholder=\"create_services_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_feature_image_src\" class=\"width_100\" placeholder=\"create_services_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_services\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create service post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">abilities inputs</h1>\n            <input id=\"create_abilities_input_title\" class=\"width_100\" placeholder=\"create_abilities_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_subtitle\" class=\"width_100\" placeholder=\"create_abilities_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_paragraph\" class=\"width_100\" placeholder=\"create_abilities_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_category\" class=\"width_100\" placeholder=\"create_abilities_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_sub_category\" class=\"width_100\" placeholder=\"create_abilities_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_feature_style\" class=\"width_100\" placeholder=\"create_abilities_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_tag\" class=\"width_100\" placeholder=\"create_abilities_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_type\" class=\"width_100\" placeholder=\"create_abilities_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_feature_image_src\" class=\"width_100\" placeholder=\"create_abilities_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_abilities\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create abilities post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">skills inputs</h1>\n            <input id=\"create_skills_input_title\" class=\"width_100\" placeholder=\"create_skills_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_subtitle\" class=\"width_100\" placeholder=\"create_skills_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_paragraph\" class=\"width_100\" placeholder=\"create_skills_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_category\" class=\"width_100\" placeholder=\"create_skills_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_sub_category\" class=\"width_100\" placeholder=\"create_skills_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_feature_style\" class=\"width_100\" placeholder=\"create_skills_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_tag\" class=\"width_100\" placeholder=\"create_skills_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_type\" class=\"width_100\" placeholder=\"create_skills_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_feature_image_src\" class=\"width_100\" placeholder=\"create_skills_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_skills\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create skills post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">partners inputs</h1>\n            <input id=\"create_partners_input_title\" class=\"width_100\" placeholder=\"create_partners_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_subtitle\" class=\"width_100\" placeholder=\"create_partners_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_paragraph\" class=\"width_100\" placeholder=\"create_partners_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_category\" class=\"width_100\" placeholder=\"create_partners_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_sub_category\" class=\"width_100\" placeholder=\"create_partners_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_feature_style\" class=\"width_100\" placeholder=\"create_partners_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_tag\" class=\"width_100\" placeholder=\"create_partners_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_type\" class=\"width_100\" placeholder=\"create_partners_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_feature_image_src\" class=\"width_100\" placeholder=\"create_partners_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_partners\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create partners post</div>\n\n\n                                    </div>\n                                    \n                                    <div class=\"bg_pink height_100vh width_100\">\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                    </div>\n                                    \n                                    <div class=\"bg_pink height_100vh width_100\">\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                    </div>          \n\n                                    <div class=\"height_100vh width_100\">\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"position_fixed top_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1\">\n\n                        <div id=\"misc_menu\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100\">\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100\">\n\n                              <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                                \n                                <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark\">\n\n                                    <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n\n                                    </div>\n\n                                </div>\n\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                        <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                            <div class=\"position_relative float_left\" >\n                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Who Nav 1</p>\n\n                                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                                        <div class=\"position_relative pseudo_arrow_top_left_outside_white border_radius_1vh box_shadow_hover_none box_shadow_bottom_right_1vw_dark webkit_box_pack_center webkit_box_align display_webkit_box padding_1vh bg_yellow\">\n                                                    \n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n\n                                        </div>\n\n\n                                </div>\n\n                            </div>\n\n                            <div class=\"position_relative float_left\" >\n                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Who Nav 1</p>\n\n                                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                      <div class=\"position_relative display_flex_flow height_100 pseudo_arrow_top_left_outside_white\">\n                                        \n                                        <div class=\"position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark\">\n                                                    \n                                            <div class=\"position_relative float_left margin_025vh text_align_center\">\n\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n\n                                            </div>\n\n                                        </div>\n\n                                      </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n\n      </div>\n    </div>\n    ";
var element_page_right = "\n    <div id=\"component_app_modal_element_page_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_1\">\n      <div id=\"component_app_modal_element_page_right_content\" class=\"position_relative width_100 height_100 bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left z_index_0 \">\n\n      </div>\n    </div>\n    ";
var element_pop_top = "\n    <div id=\"component_app_modal_element_pop_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_5\">\n      <div id=\"component_app_modal_element_pop_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n      </div>\n    </div>\n    ";
var element_pop_left = "\n  <div id=\"component_app_modal_element_pop_left\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n    <div id=\"component_app_modal_element_pop_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh margin_auto max_width \">\n        \n\n\n    </div>\n  </div>\n  ";
var element_pop_bottom = "\n    <div id=\"component_app_modal_element_pop_bottom\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n      <div id=\"component_app_modal_element_pop_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto bg_white\">\n            \n\n      </div>\n    </div>\n  ";
var element_pop_right = "\n  <div id=\"component_app_modal_element_pop_right\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n    <div id=\"component_app_modal_element_pop_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden bg_yellow border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_1 margin_auto\">\n      \n\n    </div>\n  </div>\n  ";
var element_pip_top = "\n    <div id=\"component_app_modal_element_pip_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_5\">\n      <div id=\"component_app_modal_element_pip_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n    ";
var element_pip_left = "\n  <div id=\"component_app_modal_element_pip_left\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n    <div id=\"component_app_modal_element_pip_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n  </div>\n  ";
var element_pip_bottom = "\n    <div id=\"component_app_modal_element_pip_bottom\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n      <div id=\"component_app_modal_element_pip_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n  ";
var element_pip_right = "\n  <div id=\"component_app_modal_element_pip_right\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n    <div id=\"component_app_modal_element_pip_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n  </div>\n  ";
var element_morph_top = "\n    <div id=\"component_app_modal_element_morph_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n   ";
var element_morph_left = "\n    <div id=\"component_app_modal_element_morph_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_1\">\n    </div>\n   ";
var element_morph_bottom = "\n    <div id=\"component_app_modal_element_morph_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n   ";
var element_morph_right = "\n    <div id=\"component_app_modal_element_morph_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n   ";
var element_corner_top = "\n    <div id=\"component_app_modal_element_corner_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n   ";
var element_corner_left = "\n    <div id=\"component_app_modal_element_corner_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_1\">\n    </div>\n   ";
var element_corner_bottom = "\n    <div id=\"component_app_modal_element_corner_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n   ";
var element_corner_right = "\n    <div id=\"component_app_modal_element_corner_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n   ";
var element_menu_top = "\n    <div id=\"component_app_modal_element_menu_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_25vh margin_auto z_index_1 bg_white\">\n\n    </div>\n   ";
var element_menu_left = "\n    <div id=\"component_app_modal_element_menu_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh_height width_25vw margin_auto z_index_1 bg_white\">      \n        <div class=\"position_absolute top_0 bottom_0 right_0 calc_6025vw margin_auto float_left\">\n          <div class=\"position_relative calc_2vw border_1vw_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n            <div class=\"position_relative calc_5vw padding_205vw float_left\">\n              <div class=\"font_size_5vw line_height_10vw width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n              <div class=\"font_size_5vw line_height_10vw width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n              <div class=\"font_size_5vw line_height_10vw width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n              <div class=\"font_size_5vw line_height_10vw width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n              <div class=\"font_size_5vw line_height_10vw width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n              <div class=\"font_size_5vw line_height_10vw width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            </div>\n          </div>\n        </div>\n\n    </div>";
var element_menu_bottom = "\n    <div id=\"component_app_modal_element_menu_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh_width height_25vh margin_auto z_index_1\">\n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>\n    ";
var element_menu_right = "\n    <div id=\"component_app_modal_element_menu_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh_height width_25vw margin_auto z_index_1\">\n       \n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            ".concat(value_ui_controls, "\n          </div>\n        </div>\n\n    </div>\n    ");
var element_fade_top = "\n    <div id=\"component_app_modal_element_fade_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n    ";
var element_fade_left = "\n    <div id=\"component_app_modal_element_fade_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_1\">\n    </div>\n    ";
var element_fade_bottom = "\n    <div id=\"component_app_modal_element_fade_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n    ";
var element_fade_right = "\n    <div id=\"component_app_modal_element_fade_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_1\">\n    </div>\n    ";
var element_overlay_top = "\n    <div id=\"component_app_modal_element_overlay_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_left = "\n    <div id=\"component_app_modal_element_overlay_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_5\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_bottom = "\n    <div id=\"component_app_modal_element_overlay_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_right = "\n    <div id=\"component_app_modal_element_overlay_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_5\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_gradient_top = "\n    <div id=\"component_app_modal_element_gradient_top\" class=\"bg_yellow easing_1 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_1\">\n\n      <div class=\"position_absolute top_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto\">\n        <div class=\"position_absolute top_-1vh left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_bottom\"></div>\n      </div>\n\n    </div>\n    ";
var element_gradient_left = "\n    <div id=\"component_app_modal_element_gradient_left\" class=\"bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100vw height_100vh margin_auto z_index_1\">\n    \n      <div class=\"position_absolute left_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_right\"></div>\n\n</div>\n    ";
var element_gradient_bottom = "\n    <div id=\"component_app_modal_element_gradient_bottom\" class=\"bg_yellow easing_1 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_1\">\n    \n      <div class=\"position_absolute bottom_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_top\"></div>\n\n    </div>\n    ";
var element_gradient_right = "\n    <div id=\"component_app_modal_element_gradient_right\" class=\"bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto z_index_1\">\n    \n      <div class=\"position_absolute right_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_left\"></div>\n    \n    </div>\n    ";
var _default = {
  component_app_content_root: component_app_content_root,
  element_guis: element_guis,
  value_ui_controls: value_ui_controls,
  // routes
  route_dashboard: route_dashboard,
  // modals
  element_anchor_left: element_anchor_left,
  element_anchor_right: element_anchor_right,
  element_anchor_top: element_anchor_top,
  element_anchor_bottom: element_anchor_bottom,
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
  anchor_menu_right: anchor_menu_right,
  element_gui_top_left: element_gui_top_left,
  element_gui_top_right: element_gui_top_right,
  element_gui_bottom_left: element_gui_bottom_left,
  element_gui_bottom_right: element_gui_bottom_right
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

var from_Import = function from_Import() {}; // 5. Functions


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
    if (data.child == 'library') {
      ELEMENT.innerHTML = "\n                <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n                  \n                  <div id=\"post_block_1\" style=\"\n                   background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_25vh position_relative float_left\">\n                  \n                    <div id=\"post_block_3\">\n\n                      <h1>Meta:</h1>\n                      <p class=\"width_100\">title:").concat(data.id, "</p>\n                      \n                    </div>\n\n                  </div>\n\n                  <div id=\"post_block_2\" class=\"hover_show\" >\n                      <h1>Meta:</h1>\n                      <p>id:").concat(data.id, "</p>\n                  </div>\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n                  </div>\n\n                </div>\n\n            ");
    }

    ;

    if (data.child == 'roster') {
      ELEMENT.innerHTML = "\n                <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n                  \n                  <div id=\"post_block_1\" style=\"\n                   background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_25vh position_relative float_left\">\n                  \n                    <div id=\"post_block_3\">\n\n                      <h1>Meta:</h1>\n                      <p class=\"width_100\">title:").concat(data.id, "</p>\n                      \n                    </div>\n\n                  </div>\n\n                  <div id=\"post_block_2\" class=\"hover_show\" >\n                      <h1>Meta:</h1>\n                      <p>id:").concat(data.id, "</p>\n                      <p>id:").concat(data.username, "</p>\n                      <p>id:").concat(data.password, "</p>\n                  </div>\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n                  </div>\n\n                </div>\n\n            ");
    }

    ;

    if (data.child == 'skills') {
      ELEMENT.innerHTML = "\n                <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n                  \n                  <div id=\"post_block_1\" style=\"\n                   background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_25vh position_relative float_left\">\n                  \n                    <div id=\"post_block_3\">\n\n                      <h1>Meta:</h1>\n                      <p class=\"width_100\">title:").concat(data.id, "</p>\n                      \n                    </div>\n\n                  </div>\n\n                  <div id=\"post_block_2\" class=\"hover_show\" >\n                      <h1>Meta:</h1>\n                      <p>id:").concat(data.id, "</p>\n                  </div>\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n                  </div>\n\n                </div>\n\n            ");
    }

    ;

    if (data.child == 'abilities') {
      ELEMENT.innerHTML = "\n                <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n                  \n                  <div id=\"post_block_1\" style=\"\n                   background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_25vh position_relative float_left\">\n                  \n                    <div id=\"post_block_3\">\n\n                      <h1>Meta:</h1>\n                      <p class=\"width_100\">title:").concat(data.id, "</p>\n                      \n                    </div>\n\n                  </div>\n\n                  <div id=\"post_block_2\" class=\"hover_show\" >\n                      <h1>Meta:</h1>\n                      <p>id:").concat(data.id, "</p>\n                  </div>\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n                  </div>\n\n                </div>\n\n            ");
    }

    ;

    if (data.child == 'services') {
      ELEMENT.innerHTML = "\n                <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n                  \n                  <div id=\"post_block_1\" style=\"\n                   background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_25vh position_relative float_left\">\n                  \n                    <div id=\"post_block_3\">\n\n                      <h1>Meta:</h1>\n                      <p class=\"width_100\">title:").concat(data.id, "</p>\n                      \n                    </div>\n\n                  </div>\n\n                  <div id=\"post_block_2\" class=\"hover_show\" >\n                      <h1>Meta:</h1>\n                      <p>id:").concat(data.id, "</p>\n                  </div>\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n                  </div>\n\n                </div>\n\n            ");
    }

    ;

    if (data.child == 'partners') {
      ELEMENT.innerHTML = "\n                <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n                  \n                  <div id=\"post_block_1\" style=\"\n                   background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_25vh position_relative float_left\">\n                  \n                    <div id=\"post_block_3\">\n\n                      <h1>Meta:</h1>\n                      <p class=\"width_100\">title:").concat(data.id, "</p>\n                      \n                    </div>\n\n                  </div>\n\n                  <div id=\"post_block_2\" class=\"hover_show\" >\n                      <h1>Meta:</h1>\n                      <p>id:").concat(data.id, "</p>\n                  </div>\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n                  </div>\n\n                </div>\n\n            ");
    }

    ;
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.children[0].children[2].children[0].addEventListener("click", function (event) {
    _index.default.likeWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[2].children[1].addEventListener("click", function (event) {
    _index.default.dislikeWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {
    _index.default.viewWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[2].children[3].addEventListener("click", function (event) {
    _index.default.deleteWhoListings(data.child, data.id);
  }); // view!!!

  ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {
    //alert('viewed');
    var preview = function preview() {
      // function start (preview)
      var post_preview_from_li_link = '';
      var preview_content = '';
      var preview_scrolling_container = '';
      var preview_bg_container = "\n              <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1\">\n              </div>\n\n              <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_black opacity_01 z_index_1\">                \n              </div>\n\n              <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh z_index_1\">\n           \n                  <div class=\"position_absolute top_0 left_0 margin_auto width_205vh height_205vh z_index_1\">\n                      <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_left width_50 height_50 z_index_1\">\n                      </div>\n                  </div>\n\n                  <div class=\"position_absolute top_0 right_0 margin_auto width_205vh height_205vh z_index_1\">\n                      <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_right width_50 height_50 z_index_1\">\n                      </div>\n                  </div>\n\n                  <div class=\"position_absolute bottom_0 left_0 margin_auto width_205vh height_205vh z_index_1\">\n                      <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_left width_50 height_50 z_index_1\">\n                      </div>\n                  </div>\n\n                  <div class=\"position_absolute bottom_0 right_0 margin_auto width_205vh height_205vh z_index_1\">\n                      <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_right width_50 height_50 z_index_1\">\n                      </div>\n                  </div>\n\n              </div>\n\n              <div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1\">\n           \n              </div>\n            \n          ");
      var preview_title_container = "\n              <div class=\"position_absolute top_0 left_0 right_0 float_left width_100 height_10vh bg_blue margin_auto z_index_2 text_align_center box_shadow_bottom_1vh_dark font_size_5vh line_height_10vh border_01vh_dark_yellow_9 \">\n                  ".concat(data.title, " ").concat(data.type, "\n              </div>\n          ");
      var preview_control_container = "<div class=\"position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_pop_top_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_pop_top_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
      preview_content = "\n            <div class=\"position_relative float_left width_100 height_50vh bg_yellow margin_auto\">\n                ".concat(data.title, " ").concat(data.type, "\n            </div>\n\n            <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                ").concat(data.title, " ").concat(data.type, "\n            </div>\n            \n            <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                ").concat(data.title, " ").concat(data.type, "\n            </div>\n\n            <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                ").concat(data.title, " ").concat(data.type, "\n            </div>\n            \n            <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                ").concat(data.title, " ").concat(data.type, "\n            </div>\n\n            <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                ").concat(data.title, " ").concat(data.type, "\n            </div>\n          ");
      preview_scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_pop', preview_content);
      post_preview_from_li_link = "<div class=\"position_absolute width_100 height_100 margin_auto\">".concat(preview_bg_container, "\n          <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh overflow_hidden margin_205vh z_index_1\">\n          ").concat(preview_title_container, "<div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh z_index_1\">").concat(preview_scrolling_container, "</div></div>").concat(preview_control_container, "</div>");
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
        var detail_content = "\n                    \n                    <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                        PAGE\n                    </div>\n                    \n                    <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                        ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n                    </div>\n\n                  ");
        var route_background = "";
        var foreground_content = "";

        var scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_page', detail_content);

        var control_container = "<div class=\"position_absolute bottom_0 top_0 right_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_page_top_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_page_top_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
        post_detail_from_li_link = "\n                      <div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" id=\"post_detail_from_li_link\" class=\"position_absolute width_100 height_100vh margin_auto\">\n                          \n                          ").concat(route_background, "\n                          <div id=\"scrolling_container\">\n                          ").concat(scrolling_container, "\n                          </div>\n                          ").concat(control_container, "\n                          ").concat(foreground_content, "\n\n                      </div>");
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
          var overlay_content = "\n                              \n                              <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                                  overlay\n                              </div>\n                              \n                              <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                                  ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n                              </div>\n\n                          ");
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
      var pip_content = "\n              \n              <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                  \n              </div>\n              \n              <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                  ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n              </div>\n\n          ");
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
      }, 1);
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
      }, 101);
      return;
    }

    ;
  }

  ;
}; // 1000 ms delay for bg items


var Toggle_stages_display_and_opacity_on_with_no_delay = function Toggle_stages_display_and_opacity_on_with_no_delay(id) {
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
  Toggle_display_and_opacity_off_with_delay: Toggle_display_and_opacity_off_with_delay,
  Toggle_stages_display_and_opacity_on_with_no_delay: Toggle_stages_display_and_opacity_on_with_no_delay,
  Toggle_stages_display_and_opacity_off_with_delay: Toggle_stages_display_and_opacity_off_with_delay
};
exports.default = _default;
},{"../index.js":"index.js","./elements":"partials/elements.js"}],"partials/components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ui_components = function ui_components() {
  var state = _index.default.Handle_return_state();

  var return_these = [// anchors
  // anchors
  {
    component: 'anchor_top',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'anchor_bottom',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'anchor_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'anchor_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, // toast
  {
    component: 'component_app_gui_toast_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top_left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_toast_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top_right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_toast_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom_left.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_toast_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom_right.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, // GUIS
  {
    component: 'component_app_gui_arrows_top',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_arrows_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top_left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_arrows_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top_right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_arrows_bottom',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_arrows_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom_left.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_arrows_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom_right.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_arrows_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_arrows_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_bottom_center',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom.display // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.bottom_left.display // component_state_opacity:  state.ui.gui.bottom_left.opacity

  }, {
    component: 'component_app_gui_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.bottom_right.display // component_state_opacity:  state.ui.gui.bottom_right.opacity

  }, {
    component: 'component_app_gui_top_center',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top.display // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.top_left.display // component_state_opacity:  state.ui.gui.top_left.opacity

  }, {
    component: 'component_app_gui_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.top_right.display // component_state_opacity:  state.ui.gui.top_right.opacity

  }, {
    component: 'component_app_gui_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.left.display // component_state_opacity:  state.ui.gui.left.opacity

  }, {
    component: 'component_app_gui_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.right.display // component_state_opacity:  state.ui.gui.right.opacity

  }, // modal
  {
    component: 'component_app_modal_element_nav_top',
    component_state_transform: state.ui.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.top.display // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, {
    component: 'component_app_modal_element_nav_bottom',
    component_state_transform: state.ui.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.bottom.display // component_state_opacity:  state.ui.modal.nav.bottom.opacity

  }, {
    component: 'component_app_modal_element_nav_left',
    component_state_transform: state.ui.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.left.display // component_state_opacity:  state.ui.modal.nav.left.opacity

  }, {
    component: 'component_app_modal_element_nav_right',
    component_state_transform: state.ui.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.right.display // component_state_opacity:  state.ui.modal.nav.right.opacity

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

  }, {
    component: 'component_app_modal_element_pip_top',
    component_state_transform: state.ui.modal.pip.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pip.top.display // component_state_opacity:  state.ui.modal.pip.top.opacity

  }, {
    component: 'component_app_modal_element_pip_bottom',
    component_state_transform: state.ui.modal.pip.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pip.bottom.display // component_state_opacity:  state.ui.modal.pip.bottom.opacity

  }, {
    component: 'component_app_modal_element_pip_left',
    component_state_transform: state.ui.modal.pip.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pip.left.display // component_state_opacity:  state.ui.modal.pip.left.opacity

  }, {
    component: 'component_app_modal_element_pip_right',
    component_state_transform: state.ui.modal.pip.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pip.right.display // component_state_opacity:  state.ui.modal.pip.right.opacity

  }, {
    component: 'component_app_modal_element_overlay_top',
    component_state_transform: state.ui.modal.overlay.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.overlay.top.display // component_state_opacity:  state.ui.modal.overlay.top.opacity

  }, {
    component: 'component_app_modal_element_overlay_bottom',
    component_state_transform: state.ui.modal.overlay.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.overlay.bottom.display // component_state_opacity:  state.ui.modal.overlay.bottom.opacity

  }, {
    component: 'component_app_modal_element_overlay_left',
    component_state_transform: state.ui.modal.overlay.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.overlay.left.display // component_state_opacity:  state.ui.modal.overlay.left.opacity

  }, {
    component: 'component_app_modal_element_overlay_right',
    component_state_transform: state.ui.modal.overlay.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.overlay.right.display // component_state_opacity:  state.ui.modal.overlay.right.opacity

  }, {
    component: 'component_app_modal_element_gradient_top',
    component_state_transform: state.ui.modal.gradient.top.transform,
    component_state_transform_true: 'transform_translate3d_top_200',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.top.display // component_state_opacity:  state.ui.modal.gradient.top.opacity

  }, {
    component: 'component_app_modal_element_gradient_bottom',
    component_state_transform: state.ui.modal.gradient.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top200',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.bottom.display // component_state_opacity:  state.ui.modal.gradient.bottom.opacity

  }, {
    component: 'component_app_modal_element_gradient_left',
    component_state_transform: state.ui.modal.gradient.left.transform,
    component_state_transform_true: 'transform_translate3d_left_200',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.left.display // component_state_opacity:  state.ui.modal.gradient.left.opacity

  }, {
    component: 'component_app_modal_element_gradient_right',
    component_state_transform: state.ui.modal.gradient.right.transform,
    component_state_transform_true: 'transform_translate3d_left200',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.right.display // component_state_opacity:  state.ui.modal.gradient.right.opacity

  }, {
    component: 'component_app_modal_element_menu_top',
    component_state_transform: state.ui.modal.menu.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.top.display // component_state_opacity:  state.ui.modal.menu.top.opacity

  }, {
    component: 'component_app_modal_element_menu_bottom',
    component_state_transform: state.ui.modal.menu.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.bottom.display // component_state_opacity:  state.ui.modal.menu.bottom.opacity

  }, {
    component: 'component_app_modal_element_menu_left',
    component_state_transform: state.ui.modal.menu.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.left.display // component_state_opacity:  state.ui.modal.menu.left.opacity

  }, {
    component: 'component_app_modal_element_menu_right',
    component_state_transform: state.ui.modal.menu.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.right.display // component_state_opacity:  state.ui.modal.menu.right.opacity

  }, {
    component: 'component_app_modal_element_fade_top',
    component_state_transform: state.ui.modal.fade.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.fade.top.display // component_state_opacity:  state.ui.modal.fade.top.opacity

  }, {
    component: 'component_app_modal_element_fade_bottom',
    component_state_transform: state.ui.modal.fade.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.fade.bottom.display // component_state_opacity:  state.ui.modal.fade.bottom.opacity

  }, {
    component: 'component_app_modal_element_fade_left',
    component_state_transform: state.ui.modal.fade.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.fade.left.display // component_state_opacity:  state.ui.modal.fade.left.opacity

  }, {
    component: 'component_app_modal_element_fade_right',
    component_state_transform: state.ui.modal.fade.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.fade.right.display // component_state_opacity:  state.ui.modal.fade.right.opacity

  }, {
    component: 'component_app_modal_element_morph_top',
    component_state_transform: state.ui.modal.morph.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.top.display // component_state_opacity:  state.ui.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_bottom',
    component_state_transform: state.ui.modal.morph.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.bottom.display // component_state_opacity:  state.ui.modal.morph.bottom.opacity

  }, {
    component: 'component_app_modal_element_morph_left',
    component_state_transform: state.ui.modal.morph.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.left.display // component_state_opacity:  state.ui.modal.morph.left.opacity

  }, {
    component: 'component_app_modal_element_morph_right',
    component_state_transform: state.ui.modal.morph.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.right.display // component_state_opacity:  state.ui.modal.morph.right.opacity

  }, {
    component: 'component_app_modal_element_corner_top',
    component_state_transform: state.ui.modal.corner.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.corner.top.display // component_state_opacity:  state.ui.modal.corner.top.opacity

  }, {
    component: 'component_app_modal_element_corner_bottom',
    component_state_transform: state.ui.modal.corner.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.corner.bottom.display // component_state_opacity:  state.ui.modal.corner.bottom.opacity

  }, {
    component: 'component_app_modal_element_corner_left',
    component_state_transform: state.ui.modal.corner.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.corner.left.display // component_state_opacity:  state.ui.modal.corner.left.opacity

  }, {
    component: 'component_app_modal_element_corner_right',
    component_state_transform: state.ui.modal.corner.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.corner.right.display // component_state_opacity:  state.ui.modal.corner.right.opacity

  }];
  return return_these;
};

var _default = {
  ui_components: ui_components
};
exports.default = _default;
},{"../index.js":"index.js"}],"index.js":[function(require,module,exports) {
// Rules
'use strict'; // Imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style"));

var _functions = _interopRequireDefault(require("./partials/functions"));

var _components = _interopRequireDefault(require("./partials/components"));

var _elements = _interopRequireDefault(require("./partials/elements"));

var _touch;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Declaration
var functions;
var ui_components;
var sorting_type = 'timeup';
var matching_categories = [{
  name: 'cats'
}];
var sorted_library;
var filtered_library; // Assignment

functions = _functions.default;
console.log('hello world');
var state = {
  app: {
    route: '/'
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
    sort: 'likes',
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
  animation: {
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
    touch_8: {
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
      movetimer: 0,
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
      parallax: {
        xaxis: 0,
        yaxis: 0
      }
    },
    gui: {
      fold: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
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
};
var user_logged = false;
var root = document.getElementById('root');
var is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent); // Initialization

var config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
}; // Functions

firebase.initializeApp(config);
var fb_writeable = false;
var fb_response = {};
/*

video packages:

gnougn (all)
knewest (tops)
genres: phukngi (graphics) colorleague (design) phlygh (dev) antenuh (motion) bognie (content) hiyr (strategy)
specifics: phryid (video - video games) collabration (video - video games)
product (video, song, sounds, loops, podcast, exc)
types: rate the?, top 10, commercial break
Lengths: 
talent - nownigel, maisie, john
*/
// Create

var addListings = function addListings(child) {
  var current_second = new Date().getTime() / 1000;
  var default_item;

  if (child == 'library') {
    default_item = {
      id: 0,
      categories: [{
        name: 'cats'
      }],
      subcategories: [{
        name: 'cats'
      }],
      tags: [{
        name: 'cats'
      }],
      types: [{
        name: 'cats'
      }],
      genres: [{
        name: 'cats'
      }],
      hashtag: [{
        name: 'cats'
      }],
      liked_by: [{
        id: state.data.user.id
      }],
      authors: [{
        id: state.data.user.id
      }],
      child: child,
      time: current_second,
      username: state.data.user.username,
      password: state.data.user.password,
      title: "nice",
      feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
      views: 0,
      likes: 0,
      dislikes: 0,
      subs: [{
        id: state.data.user.id
      }]
    };
  }

  ;

  if (child == 'roster') {
    default_item = {
      id: 0,
      categories: [{
        name: 'cats'
      }],
      subcategories: [{
        name: 'cats'
      }],
      tags: [{
        name: 'cats'
      }],
      types: [{
        name: 'cats'
      }],
      genres: [{
        name: 'cats'
      }],
      hashtag: [{
        name: 'cats'
      }],
      liked_by: [{
        id: state.data.user.id
      }],
      authors: [{
        id: state.data.user.id
      }],
      child: child,
      time: current_second,
      username: state.data.user.username,
      password: state.data.user.password,
      title: "nice",
      feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
      views: 0,
      likes: 0,
      dislikes: 0,
      subs: [{
        id: state.data.user.id
      }]
    };
  }

  ;

  if (child == 'services') {
    default_item = {
      id: 0,
      categories: [{
        name: 'cats'
      }],
      subcategories: [{
        name: 'cats'
      }],
      tags: [{
        name: 'cats'
      }],
      types: [{
        name: 'cats'
      }],
      genres: [{
        name: 'cats'
      }],
      hashtag: [{
        name: 'cats'
      }],
      liked_by: [{
        id: state.data.user.id
      }],
      authors: [{
        id: state.data.user.id
      }],
      child: child,
      time: current_second,
      username: state.data.user.username,
      password: state.data.user.password,
      title: "nice",
      feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
      views: 0,
      likes: 0,
      dislikes: 0,
      subs: [{
        id: state.data.user.id
      }]
    };
  }

  ;

  if (child == 'skills') {
    default_item = {
      id: 0,
      categories: [{
        name: 'cats'
      }],
      subcategories: [{
        name: 'cats'
      }],
      tags: [{
        name: 'cats'
      }],
      types: [{
        name: 'cats'
      }],
      genres: [{
        name: 'cats'
      }],
      hashtag: [{
        name: 'cats'
      }],
      liked_by: [{
        id: state.data.user.id
      }],
      authors: [{
        id: state.data.user.id
      }],
      child: child,
      time: current_second,
      username: state.data.user.username,
      password: state.data.user.password,
      title: "nice",
      feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
      views: 0,
      likes: 0,
      dislikes: 0,
      subs: [{
        id: state.data.user.id
      }]
    };
  }

  ;

  if (child == 'abilities') {
    default_item = {
      id: 0,
      categories: [{
        name: 'cats'
      }],
      subcategories: [{
        name: 'cats'
      }],
      tags: [{
        name: 'cats'
      }],
      types: [{
        name: 'cats'
      }],
      genres: [{
        name: 'cats'
      }],
      hashtag: [{
        name: 'cats'
      }],
      liked_by: [{
        id: state.data.user.id
      }],
      authors: [{
        id: state.data.user.id
      }],
      child: child,
      time: current_second,
      username: state.data.user.username,
      password: state.data.user.password,
      title: "nice",
      feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
      views: 0,
      likes: 0,
      dislikes: 0,
      subs: [{
        id: state.data.user.id
      }]
    };
  }

  ;

  if (child == 'partners') {
    default_item = {
      id: 0,
      categories: [{
        name: 'cats'
      }],
      subcategories: [{
        name: 'cats'
      }],
      tags: [{
        name: 'cats'
      }],
      types: [{
        name: 'cats'
      }],
      genres: [{
        name: 'cats'
      }],
      hashtag: [{
        name: 'cats'
      }],
      liked_by: [{
        id: state.data.user.id
      }],
      authors: [{
        id: state.data.user.id
      }],
      child: child,
      time: current_second,
      username: state.data.user.username,
      password: state.data.user.password,
      title: "nice",
      feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
      views: 0,
      likes: 0,
      dislikes: 0,
      subs: [{
        id: state.data.user.id
      }]
    };
  }

  ; // Firebase References
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
  var Ref = gnougnRef.child(child);
  console.log(id, 'from likeWhoListings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  changeThisValue.likes += 1;
  Ref.child(id).set(changeThisValue);
  console.log(id); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
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

  setTimeout(function () {// Handle_Firebase_Refs_and_Render();
  }, 0);
};

var Handle_Firebase_Refs_and_Render = function Handle_Firebase_Refs_and_Render() {
  if (document.getElementById('element_ol_firebase_library') != null) {
    document.getElementById('element_ol_firebase_library').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_roster') != null) {
    document.getElementById('element_ol_firebase_roster').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_skills') != null) {
    document.getElementById('element_ol_firebase_skills').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_services') != null) {
    document.getElementById('element_ol_firebase_services').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_partners') != null) {
    document.getElementById('element_ol_firebase_partners').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_abilities') != null) {
    document.getElementById('element_ol_firebase_abilities').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_filtered_library') != null) {
    document.getElementById('element_ol_firebase_filtered_library').innerHTML = '';
  }

  ;

  if (document.getElementById('library_posts_advance_filter') != null) {
    document.getElementById('library_posts_advance_filter').innerHTML = '';
  }

  ;
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var wordpressRef = gnougnRef.child('wordpress');
  console.log('Handle_Firebase_Refs_and_Render');
  fb_writeable = true;
  fb_response = {};

  (function () {
    rootRef.on('value', function (snapshot) {
      var obj = snapshot.val();
      state.data.firebase = obj;
      console.log('state.data.firebase');
      console.log(state.data.firebase);
    });
  })();
};

var Handle_firebase_render = function Handle_firebase_render() {
  // render library
  (function () {
    setTimeout(function () {
      if (fb_response != null) {
        find_view();
        sorted_library = fb_response.gnougn.library.sort(find_sort());
        filtered_library = [];

        for (var i = 0; i < fb_response.gnougn.library.length; i++) {
          // console.log(state.data.firebase.gnougn.library[i]);
          document.getElementById('element_ol_firebase_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.library[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.roster.length; i++) {
          // console.log(state.data.firebase.gnougn.roster[i]);
          document.getElementById('element_ol_firebase_roster').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.roster[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.abilities.length; i++) {
          // console.log(state.data.firebase.gnougn.abilities[i]);
          document.getElementById('element_ol_firebase_abilities').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.abilities[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.skills.length; i++) {
          // console.log(state.data.firebase.gnougn.skills[i]);
          document.getElementById('element_ol_firebase_skills').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.skills[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.services.length; i++) {
          // console.log(state.data.firebase.gnougn.services[i]);
          document.getElementById('element_ol_firebase_services').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.services[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.partners.length; i++) {
          // console.log(state.data.firebase.gnougn.partners[i]);
          document.getElementById('element_ol_firebase_partners').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.partners[i])));
        }

        ; //  filter by title

        for (var i = 0; i < sorted_library.length; i++) {
          if (sorted_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
            filtered_library.push(sorted_library[i]);
          }

          ;
        }

        ; // render

        for (var i = 0; i < filtered_library.length; i++) {
          // pagination hack
          if (i < state.data.feature_posts_limit) {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_filtered_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_library[i])));
          }

          ;
        }

        ; // library post - filtered by authors & title

        if (document.getElementById('library_posts_advance_filter') != null) {
          document.getElementById('library_posts_advance_filter').innerHTML = ''; // render

          for (var i = 0; i < filtered_library.length; i++) {
            var does_Type_Match = false;
            var does_Username_Match = false; // if any types match

            for (var type_index = 0; type_index < state.data.types.length; type_index++) {
              //alert( state.data.types[type_index].title);
              for (var post_index = 0; post_index < filtered_library[i].types.length; post_index++) {
                //alert( filtered_library[i].types[post_index].title);
                if (filtered_library[i].types[post_index].title == state.data.types[type_index].title) {
                  does_Type_Match = true;
                }

                ; // pagination hack

                if (does_Type_Match) {
                  // console.log(state.data.firebase.gnougn.roster[i]);
                  document.getElementById('library_posts_advance_filter').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_library[i])));
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

        if (document.getElementById('library_posts_logged') != null) {
          document.getElementById('library_posts_logged').innerHTML = ''; // render

          for (var i = 0; i < filtered_library.length; i++) {
            var _does_Type_Match = false;
            var _does_Username_Match = false; //alert( state.data.types[type_index].title);

            for (var post_index = 0; post_index < filtered_library[i].authors.length; post_index++) {
              //alert( filtered_library[i].types[post_index].title);
              if (filtered_library[i].authors[post_index].id == state.data.user.id) {
                _does_Username_Match = true;
              }

              ; // pagination hack

              if (_does_Username_Match) {
                // console.log(state.data.firebase.gnougn.roster[i]);
                document.getElementById('library_posts_logged').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_library[i])));
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
    }, 0);
  })();
};

var Handle_Repeat_Firebase_Validation = setInterval(function () {
  if (fb_writeable == true) {
    fb_response = state.data.firebase;

    if (fb_response.gnougn.library != null) {
      // only once!
      fb_writeable = false; // once firebase server responds, instead of a clearInterval, we use -> !writable

      console.log('Handle_Repeat_Firebase_Validation'); // arrat made from object key

      var result_library = Object.keys(fb_response.gnougn.library).map(function (key) {
        return fb_response.gnougn.library[key];
      });
      fb_response.gnougn.library = result_library; // arrat made from object key

      var result_abilities = Object.keys(fb_response.gnougn.abilities).map(function (key) {
        return fb_response.gnougn.abilities[key];
      });
      fb_response.gnougn.abilities = result_abilities; // arrat made from object key

      var result_partners = Object.keys(fb_response.gnougn.partners).map(function (key) {
        return fb_response.gnougn.partners[key];
      });
      fb_response.gnougn.partners = result_partners; // arrat made from object key

      var result_services = Object.keys(fb_response.gnougn.services).map(function (key) {
        return fb_response.gnougn.services[key];
      });
      fb_response.gnougn.services = result_services; // arrat made from object key

      var result_roster = Object.keys(fb_response.gnougn.roster).map(function (key) {
        return fb_response.gnougn.roster[key];
      });
      fb_response.gnougn.roster = result_roster; // arrat made from object key

      var result_skills = Object.keys(fb_response.gnougn.skills).map(function (key) {
        return fb_response.gnougn.skills[key];
      });
      fb_response.gnougn.skills = result_skills;

      if (fb_writeable == false) {
        console.clear(); //clearInterval(Handle_Repeat_Firebase_Validation);

        check_local_user();
        setTimeout(function () {
          Handle_firebase_render(); //console.clear();

          console.log('contected!');
        }, 0);
        console.log(fb_response.gnougn);
      }

      ;
    }

    ;
  }

  ;
}, 1000 / 120);
var instance = {
  mouseenter: false,
  mouseleave: false,
  pastlead: false,
  startedscrolling: false // events

};
setTimeout(function () {
  // Desktop
  if (is_Desktop) {
    root.addEventListener('mousemove', function (event) {
      state.events.mouse.movetimer = 0;
    });
    root.addEventListener('mouseleave', function (event) {
      instance.mouseleave = true;
      instance.mouseenter = false;
    });
    root.addEventListener('mouseenter', function (event) {
      instance.mouseenter = true;
      instance.mouseleave = false;
    });
    root.addEventListener('mousedown', function (event) {
      state.events.mouse.movetimer = 0;
    });
    root.addEventListener('mouseup', function (event) {});
    window.addEventListener('scroll', function (event) {
      state.events.mouse.movetimer = 0;
      console.log(event); //alert('yup');
      // scrolling

      console.log('document.body.clientWidth: ' + document.body.clientWidth);
      console.log('document.body.clientHeight: ' + document.body.clientHeight);
      console.log('document.body.scrollLeft: ' + document.body.scrollLeft);
      console.log('document.body.scrollTop: ' + document.body.scrollTop);
      console.log('document.body.scrollWidth: ' + document.body.scrollWidth);
      console.log('document.body.scrollHeight: ' + document.body.scrollHeight);
      state.ui.root.clientHeight = document.body.clientHeight;
      state.ui.root.clientWidth = document.body.clientWidth;
      state.ui.root.scrollHeight = document.body.scrollHeight;
      state.ui.root.scrollWidth = document.body.scrollWidth;
      state.ui.root.scrollTop = document.body.scrollTop;
      state.ui.root.scrollLeft = document.body.scrollLeft; // instances      

      if (document.body.scrollTop > state.ui.root.component_app_gui_scroll_y_position) {
        console.log('state.ui.root.component_app_gui_scroll_y_position increasing');
        console.log("instance: wheel up");
      }

      if (document.body.scrollTop < state.ui.root.component_app_gui_scroll_y_position) {
        console.log('state.ui.root.component_app_gui_scroll_y_position decreasing');
        console.log("instance: wheel down");
      }

      if (document.body.scrollTop === 0) {
        //alert("instance: top");
        instance.startedscrolling = false;
      }

      if (document.body.scrollTop > 0) {
        //alert("instance: top");
        instance.startedscrolling = true;
      }

      if (document.body.scrollTop < document.body.clientHeight) {
        console.log('instance: inside lead');
      }

      if (document.body.scrollTop > document.body.clientHeight) {
        console.log('instance: past lead');
        instance.pastlead = true;
      }

      if (!(document.body.scrollTop > document.body.clientHeight)) {
        console.log('instance: not past lead');
        instance.pastlead = false;
      }

      if (document.body.scrollHeight - document.body.clientHeight < document.body.scrollTop + document.body.offsetHeight) {
        console.log('instance: 100vh before bottom met');
      }

      if (document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight) {
        alert("component_app_modal_element_page_top_content: instance: footer met");
      }

      state.ui.root.component_app_gui_scroll_y_position = document.body.scrollTop;
    });
    root.addEventListener('wheel', function (event) {
      state.events.mouse.movetimer = 0;
      console.log('wheel');

      if (event.deltaY < 0) {
        console.log('wheel up');
        state.ui.root.wheel = 'up';
      }

      ;

      if (event.deltaY > 0) {
        console.log('wheel down');
        state.ui.root.wheel = 'down';
      }

      ;
    });
    root.addEventListener('keydown', function (event) {
      var keyCode = event.keyCode; // space

      if (keyCode == 32) {
        addListings('library'); //addListings('roster');

        addListings('services');
        addListings('partners');
        addListings('abilities');
        addListings('skills');
      }

      ; // escape

      if (keyCode == 27) {
        Handle_check_route('route_home', '');
        state.ui.modal.page.top.display = false;
        state.ui.modal.page.top.transform = true;
        state.ui.modal.page.bottom.display = false;
        state.ui.modal.page.bottom.transform = true;
      }

      ; // 1

      if (keyCode == 49) {//alert(state.ui.modal.page.top.transform);
        //document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        //document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // 2

      if (keyCode == 50) {
        document.getElementById('action-mousemoved').classList.add('opacity_1');
        document.getElementById('action-mousemoved').classList.remove('opacity_0');
      }

      ; // 3

      if (keyCode == 51) {
        document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // 4

      if (keyCode == 52) {
        document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // 5

      if (keyCode == 53) {
        document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // 6

      if (keyCode == 54) {
        document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // 7

      if (keyCode == 55) {
        document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // 8

      if (keyCode == 56) {
        document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // 9

      if (keyCode == 57) {
        document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // 0

      if (keyCode == 48) {
        document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');
      }

      ; // q

      if (keyCode == 81) {
        document.getElementById('action-mouse-not-moved').classList.remove('opacity_1');
        document.getElementById('action-mouse-not-moved').classList.add('opacity_0');
        document.getElementById('action-mousemoved').classList.remove('opacity_1');
        document.getElementById('action-mousemoved').classList.add('opacity_0');
        document.getElementById('action-not-entered').classList.remove('opacity_1');
        document.getElementById('action-not-entered').classList.add('opacity_0');
        document.getElementById('action-not-keyed').classList.remove('opacity_1');
        document.getElementById('action-not-keyed').classList.add('opacity_0');
        document.getElementById('action-not-scrolled').classList.remove('opacity_1');
        document.getElementById('action-not-scrolled').classList.add('opacity_0');
      }

      ;
    });
    root.addEventListener('keyup', function (event) {});
  }

  ; // Mobile

  if (is_Mobile) {
    root.addEventListener('touchmove', function (event) {
      state.events.mouse.movetimer = 0;
    });
    root.addEventListener("touchstart", function (event) {
      state.events.mouse.movetimer = 0;
      instance.mouseleave = false;
      instance.mouseenter = true;
    });
    root.addEventListener("touchend", function (event) {
      state.events.mouse.movetimer = 0;
      instance.mouseleave = true;
      instance.mouseenter = false;
    });
  }

  ;

  window.ondevicemotion = function (event) {};

  window.ondeviceorientation = function (event) {};
});

var Handle_Timers = function Handle_Timers() {
  // start timer
  (function () {
    var int = 0;
    setInterval(function () {
      console.log(state.events.key.keys); // desktop

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        state.events.mouse.movetimer += 1;
        console.log('state.events.mouse.timer: ' + state.events.mouse.movetimer);

        if (document.getElementById('timer_mouse_up') != null) {
          document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.movetimer;
        }

        ;

        if (state.events.mouse.up == true) {
          state.events.mouse.uptimer -= 1;
          console.log('state.events.mouse.timer: ' + state.events.mouse.uptimer);

          if (document.getElementById('timer_mouse_up') != null) {
            document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.uptimer;
          }
        }

        ;

        if (state.events.mouse.up == false) {
          state.events.mouse.uptimer += 1;
          console.log('state.events.mouse.timer: ' + state.events.mouse.uptimer);

          if (document.getElementById('timer_mouse_up') != null) {
            document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.uptimer;
          }
        }

        ;

        if (state.events.mouse.enter == true) {
          state.events.mouse.leavetimer = 0;
          console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
          }
        }

        ;

        if (state.events.mouse.enter == false) {
          state.events.mouse.leavetimer += 1;
          console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
          }
        }

        ;

        if (state.events.mouse.leavetimer == 5) {
          console.log('timeout active');
        }

        ;
      }

      ; // mobile

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        state.events.mouse.movetimer += 1;
        console.log('state.events.mouse.timer: ' + state.events.mouse.movetimer);

        if (document.getElementById('timer_mouse_up') != null) {
          document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.movetimer;
        }

        ;

        if (state.events.mouse.up == true) {
          state.events.mouse.uptimer -= 1;
          console.log('state.events.mouse.timer: ' + state.events.mouse.uptimer);

          if (document.getElementById('timer_mouse_up') != null) {
            document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.uptimer;
          }
        }

        ;

        if (state.events.mouse.up == false) {
          state.events.mouse.uptimer += 1;
          console.log('state.events.mouse.timer: ' + state.events.mouse.uptimer);

          if (document.getElementById('timer_mouse_up') != null) {
            document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.uptimer;
          }
        }

        ;

        if (state.events.mouse.enter == true) {
          state.events.mouse.leavetimer = 0;
          console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
          }
        }

        ;

        if (state.events.mouse.enter == false) {
          state.events.mouse.leavetimer += 1;
          console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
          }
        }

        ;

        if (state.events.mouse.leavetimer == 5) {
          console.log('timeout active');
        }

        ;
      }

      ;

      if (state.events.mouse.movetimer == 10) {
        console.log('10 secs');
      }

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

var Handle_check_route = function Handle_check_route(route, info) {
  state.app.route = route;
  setTimeout(function () {
    // null
    if (state.app.route == 'null') {
      // set state
      state.ui.modal.page.top.display = false;
      state.ui.modal.page.top.transform = true;
      document.getElementById('models').innerHTML = "\n\n                ".concat(_elements.default.element_page_bottom, "\n                ").concat(_elements.default.element_page_left, "\n                ").concat(_elements.default.element_page_right, "\n\n                ").concat(_elements.default.element_pop_top, "\n                ").concat(_elements.default.element_pop_left, "\n                ").concat(_elements.default.element_pop_bottom, "\n                ").concat(_elements.default.element_pop_right, "\n\n                ").concat(_elements.default.element_page_top, "\n\n                ").concat(_elements.default.element_morph_top, "\n                ").concat(_elements.default.element_morph_left, "\n                ").concat(_elements.default.element_morph_bottom, "\n                ").concat(_elements.default.element_morph_right, "\n\n                ").concat(_elements.default.element_fade_top, "\n                ").concat(_elements.default.element_fade_left, "\n                ").concat(_elements.default.element_fade_bottom, "\n                ").concat(_elements.default.element_fade_right, "\n\n                ").concat(_elements.default.element_gradient_top, "\n                ").concat(_elements.default.element_gradient_left, "\n                ").concat(_elements.default.element_gradient_bottom, "\n                ").concat(_elements.default.element_gradient_right, "\n\n                ").concat(_elements.default.element_corner_top, "\n                ").concat(_elements.default.element_corner_left, "\n                ").concat(_elements.default.element_corner_bottom, "\n                ").concat(_elements.default.element_corner_right, "\n\n                ").concat(_elements.default.element_overlay_top, "\n                ").concat(_elements.default.element_overlay_left, "\n                ").concat(_elements.default.element_overlay_bottom, "\n                ").concat(_elements.default.element_overlay_right, "\n\n                ").concat(_elements.default.element_pip_top, "\n                ").concat(_elements.default.element_pip_left, "\n                ").concat(_elements.default.element_pip_bottom, "\n                ").concat(_elements.default.element_pip_right, "\n\n                ").concat(_elements.default.element_menu_top, "\n                ").concat(_elements.default.element_menu_left, "\n                ").concat(_elements.default.element_menu_bottom, "\n                ").concat(_elements.default.element_menu_right, "\n\n                ").concat(_elements.default.element_anchor_top(), "\n                ").concat(_elements.default.element_anchor_left, "\n                ").concat(_elements.default.element_anchor_bottom(), "\n                ").concat(_elements.default.element_anchor_right, "\n\n                ").concat(_elements.default.element_nav_top(), "\n                ").concat(_elements.default.element_nav_left(), "\n                ").concat(_elements.default.element_nav_bottom(), "\n                ").concat(_elements.default.element_nav_right(), "\n\n                ").concat(_elements.default.element_gui_top_left(), "\n                ").concat(_elements.default.element_gui_top_right(), "\n                ").concat(_elements.default.element_gui_bottom_left(), "\n                ").concat(_elements.default.element_gui_bottom_right(), "\n\n\n                "); // adaptive render!
      // desktop

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('fold_container').innerHTML = "\n\n                    <div id=\"fold_desktop\" class=\"height_100vh width_100vw top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                        <p class=\"float_left position_relative width_100\">fold_desktop</p>\n                    </div>\n\n                ";
      }

      ; // ipad

      if (/iPad/i.test(navigator.userAgent)) {
        document.getElementById('fold_container').innerHTML = "\n\n                    <div id=\"fold_ipad\" class=\"height_100vh width_100vw top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                        <p class=\"float_left position_relative width_100\">fold_ipad</p>\n                    </div>\n\n                ";
      }

      ; // iphone

      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('fold_container').innerHTML = "\n\n                    <div id=\"fold_iphone\" class=\"height_100vh width_100vw top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                        <p class=\"float_left position_relative width_100\">fold_iphone</p>\n                    </div>\n\n                ";
      }

      ; // add routes events

      setTimeout(function () {
        // filter by title
        if (document.getElementById('element_input_filter') != null) {
          document.getElementById('element_input_filter').addEventListener('keydown', function (event) {
            // filter library
            setTimeout(function () {
              Handle_Firebase_Refs_and_Render();
            }, 0);
          });
        }

        ; // button_menu post

        if (document.getElementById('button_menu') != null) {
          document.getElementById('button_menu').addEventListener('click', function (event) {
            state.ui.modal.menu.left.display = !state.ui.modal.menu.left.display;
            state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
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

        ; // Gui Button Actions

        if (document.getElementById('element_input_sorting_type') != null) {
          document.getElementById('element_input_sorting_type').addEventListener("keydown", function (event) {
            //alert('element_input_sorting_type');
            find_sort();
          });
        }

        ; // Gui Button Actions

        if (document.getElementById('element_input_style') != null) {
          document.getElementById('element_input_style').addEventListener("keydown", function (event) {
            //alert('element_input_style');
            find_view();
          });
        }

        ; // sign_in

        if (document.getElementById('element_user_sign_in') != null) {
          document.getElementById('element_user_sign_in').addEventListener('click', function (event) {
            sign_in();
          });
        }

        ; // sign_out

        if (document.getElementById('element_user_sign_out') != null) {
          document.getElementById('element_user_sign_out').addEventListener('click', function (event) {
            sign_out_ui();
          });
        }

        ; // Gui Button Actions

        if (document.getElementById('fold_desktop') != null) {
          document.getElementById('fold_desktop').addEventListener("click", function (event) {
            alert('fold_desktop');
          });
        }

        ; // Gui Button Actions

        if (document.getElementById('route_home') != null) {
          document.getElementById('route_home').addEventListener("click", function (event) {
            console.log('route_home');
            Handle_check_route('route_home', '');
          });
        }

        ;

        if (document.getElementById('route_blog') != null) {
          document.getElementById('route_blog').addEventListener("click", function (event) {
            console.log('route_blog');
            Handle_check_route('route_blog', '');
          });
        }

        ;

        if (document.getElementById('route_dashboard') != null) {
          document.getElementById('route_dashboard').addEventListener("click", function (event) {
            console.log('route_dashboard');
            Handle_check_route('route_dashboard', '');
          });
        }

        ;

        if (document.getElementById('route_who') != null) {
          document.getElementById('route_who').addEventListener("click", function (event) {
            console.log('route_who');
            Handle_check_route('route_who', '');
          });
        }

        ;

        if (document.getElementById('route_what') != null) {
          document.getElementById('route_what').addEventListener("click", function (event) {
            console.log('route_what');
            Handle_check_route('route_what', '');
          });
        }

        ;

        if (document.getElementById('route_when') != null) {
          document.getElementById('route_when').addEventListener("click", function (event) {
            console.log('route_when');
            Handle_check_route('route_when', '');
          });
        }

        ;

        if (document.getElementById('route_where') != null) {
          document.getElementById('route_where').addEventListener("click", function (event) {
            console.log('route_where');
            Handle_check_route('route_where', '');
          });
        }

        ;

        if (document.getElementById('route_why') != null) {
          document.getElementById('route_why').addEventListener("click", function (event) {
            console.log('route_why');
            Handle_check_route('route_why', '');
          });
        }

        ;

        if (document.getElementById('route_how') != null) {
          document.getElementById('route_how').addEventListener("click", function (event) {
            console.log('route_how');
            Handle_check_route('route_how', '');
          });
        }

        ;
      }, 100); // fill data

      Handle_Firebase_Refs_and_Render();
    }

    ; // home

    if (state.app.route == 'route_home') {
      // set state
      state.ui.modal.page.top.display = false;
      state.ui.modal.page.top.transform = true; // adaptive render!
      // desktop

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "";
      }

      ; // ipad

      if (/iPad/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "";
      }

      ; // iphone

      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "";
      }

      ;
    }

    ; // route_who

    if (state.app.route == 'route_blog') {
      state.ui.modal.page.bottom.display = true;
      state.ui.modal.page.bottom.transform = false;
    }

    ; // route_who

    if (state.app.route == 'route_who') {
      state.ui.modal.page.top.display = true;
      state.ui.modal.page.top.transform = false; // page
      // desktop

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                    <div id=\"fold\" class=\"position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left\">\n\n                        <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                        \n                            <div id=\"x-1\" class=\"width_100vw height_100vh float_left position_relative z_index_1\">\n                                    \n                                <div class=\"position_absolute height_100vh width_100 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y\">\n                                                                        \n                                    <div class=\"bg_white height_100vh width_100\">\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                    </div>\n                                    \n                                    <div class=\"bg_pink height_100vh width_100\">\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                    </div>\n                                    \n                                    <div class=\"bg_pink height_100vh width_100\">\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                    </div>          \n\n                                    <div class=\"height_100vh width_100\">\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"position_fixed top_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1\">\n\n                        <div id=\"misc_menu\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100\">\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100\">\n\n                              <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                                \n                                <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark\">\n\n                                    <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">who sub menu 1</p>\n\n                                    </div>\n\n                                </div>\n\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                        <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                            <div class=\"position_relative float_left\" >\n                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Who Nav 1</p>\n\n                                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                                        <div class=\"position_relative pseudo_arrow_top_left_outside_white border_radius_1vh box_shadow_hover_none box_shadow_bottom_right_1vw_dark webkit_box_pack_center webkit_box_align display_webkit_box padding_1vh bg_yellow\">\n                                                    \n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n                                                <div class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover</div>\n\n                                        </div>\n\n\n                                </div>\n\n                            </div>\n\n                            <div class=\"position_relative float_left\" >\n                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Who Nav 1</p>\n\n                                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                      <div class=\"position_relative display_flex_flow height_100 pseudo_arrow_top_left_outside_white\">\n                                        \n                                        <div class=\"position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark\">\n                                                    \n                                            <div class=\"position_relative float_left margin_025vh text_align_center\">\n\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">hover 1</p>\n\n                                            </div>\n\n                                        </div>\n\n                                      </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                ";
      }

      ; // ipad

      if (/iPad/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                        <div id=\"route_who_ipad\" class=\" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            <p>route_who_desktop</p>\n                        </div>\n                ";
      }

      ; // iphone

      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                        <div id=\"route_who_iphone\" class=\" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            <p>route_who_desktop</p>\n                        </div>\n                ";
      }

      ;
    }

    ; // route_who

    if (state.app.route == 'route_what') {
      state.ui.modal.page.top.display = true;
      state.ui.modal.page.top.transform = false; // page
      // desktop

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                    <div id=\"fold\" class=\"position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left\">\n\n                        <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                        \n                            <div id=\"x-1\" class=\"width_100vw height_100vh float_left position_relative z_index_1\">\n                                    \n                                <div class=\"position_absolute float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n\n                                    <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                    \n                                        <div id=\"x-layer\" class=\"width_33vw height_50vh float_left position_relative float_left margin_auto\">\n\n                                        </div>\n\n                                        <div id=\"x-layer\" class=\"bg_pink width_33vw height_50vh float_left position_relative float_left margin_auto\">\n\n                                            <div class=\"position_absolute height_100 width_100 right_100 top_0 bottom_0 margin_auto z_index_0\">\n                                                \n                                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_logo height_33vh width_100\">\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"x-layer\" class=\"bg_yellow width_33vw height_50vh float_left position_relative float_left margin_auto\">\n                                        </div>\n\n                                        <div id=\"x-layer\" class=\"bg_pink width_33vw height_50vh float_left position_relative float_left margin_auto\">\n                                        </div>\n\n                                        <div id=\"x-layer\" class=\"bg_yellow width_33vw height_50vh float_left position_relative float_left margin_auto\">\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                                <div id=\"route_dashboard\" class=\"height_50 width_50 bottom_0 right_0 position_absolute margin_auto\">\n                                    \n                                    <div id=\"route_dashboard\" class=\" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                                        <p>dashboard</p>\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"position_fixed top_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1\">\n\n                        <div id=\"misc_menu\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100\">\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100\">\n\n                              <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                                \n                                <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark\">\n\n                                    <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">User</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">List</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Trending</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Interaction</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Upload</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n\n                                    </div>\n\n                                </div>\n\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                        <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                            <div class=\"position_relative float_left\" >\n                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n\n                                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                      <div class=\"position_relative display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white\">\n                                        \n                                        <div class=\"position_relative display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark\">\n                                                    \n                                            <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n\n                                            </div>\n\n                                        </div>\n\n                                      </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                            <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                            <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                            <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                            <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n\n                        </div>\n\n                    </div>\n\n                ";
      }

      ; // ipad

      if (/iPad/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                        <div id=\"route_who_ipad\" class=\" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            <p>route_who_desktop</p>\n                        </div>\n                ";
      }

      ; // iphone

      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                        <div id=\"route_who_iphone\" class=\" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            <p>route_who_desktop</p>\n                        </div>\n                ";
      }

      ;
    }

    ; // route_who

    if (state.app.route == 'route_dashboard') {
      state.ui.modal.page.top.display = true;
      state.ui.modal.page.top.transform = false;
      var user_subs = '';

      for (var i = 0; i < state.data.user.subs.length; i++) {
        console.log(state.data.user.subs[i]);
        user_subs += state.data.user.subs[i].id;
      }

      ; // page
      // desktop

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                    <div id=\"fold\" class=\"position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left\">\n\n                        <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                        \n                            <div id=\"x-1\" class=\"width_100vw height_100vh float_left position_relative z_index_1\">\n                                    \n                                <div class=\"position_absolute height_100vh width_33 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y\">\n                                    \n                                    <div class=\"height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n                                    \n                                    <div class=\"position_relative bg_white height_100vh width_100\">\n\n                                        <div class=\"position_absolute height_100vh width_100 bottom_100 left_0 right_0 margin_auto z_index_0\">\n                                            \n                                            <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_logo height_33vh width_100\">\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n                                    \n                                    \n                                    <div class=\"bg_white height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n                                    \n                                    <div class=\"bg_pink height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n                                    \n                                    <div class=\"bg_pink height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"bg_purple height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>          \n\n                                    <div class=\"height_100vh width_100\">\n\n                                        <div class=\"width_100 z_index_1\">\n                                            YOOOOOOOOOOOO!\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"position_absolute float_left width_100 height_33vh top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex\">\n\n                                    <div class=\"height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align\">\n                                    \n                                        <div class=\"width_33vw height_33vh float_left position_relative float_left margin_auto\">\n\n                                        </div>\n\n                                        <div class=\"bg_pink width_33vw height_33vh float_left position_relative float_left margin_auto\">\n\n                                            <div class=\"position_absolute height_100 width_100 right_100 top_0 bottom_0 margin_auto z_index_0\">\n                                                \n                                                <div class=\"position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_logo height_33vh width_100\">\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"bg_yellow width_33vw height_33vh float_left position_relative float_left margin_auto\">\n                                        </div>\n\n                                        <div class=\"bg_pink width_33vw height_33vh float_left position_relative float_left margin_auto\">\n                                        </div>\n\n                                        <div class=\"bg_yellow width_33vw height_33vh float_left position_relative float_left margin_auto\">\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                                <div id=\"route_dashboard\" class=\"height_67 width_67 bottom_0 right_0 position_absolute margin_auto\">\n                                        \n                                    <div class=\"position_absolute height_100 width_67 top_0 right_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y\">\n\n                                        <h2>identity</h2>\n                                        ".concat(state.data.user.child, "\n                                        ").concat(state.data.user.feature_image_src, "\n                                        ").concat(state.data.user.id, "\n                                        \n                                        <h2>log</h2>\n                                        ").concat(state.data.user.username, "\n                                        ").concat(state.data.user.password, "\n                                        \n                                        <h2>stats</h2>\n                                        ").concat(state.data.user.likes, "\n                                        ").concat(state.data.user.dislikes, "\n\n                                        <h2>history</h2>\n                                        ").concat(state.data.user.time, "\n                                        ").concat(state.data.user.views, "\n\n                                        <h2>career</h2>\n\n\n                                        ").concat(user_subs, "\n\n                                        <div id=\"japan\"></div>\n\n                                        <p>types</p>\n                                        <p>tags</p>\n                                        <p>categories</p>\n                                        <p>sub categories</p>\n\n                                        <h2>rating</h2>\n                                        <p>liked by</p>\n                                        <p>liked of (subs)</p>\n\n                                    </div>\n\n                                    <div class=\"position_absolute height_100 width_33 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y\">\n\n                                        <h2>identity</h2>\n                                        ").concat(state.data.user.child, "\n                                        ").concat(state.data.user.feature_image_src, "\n                                        ").concat(state.data.user.id, "\n                                        \n                                        <h2>log</h2>\n                                        ").concat(state.data.user.username, "\n                                        ").concat(state.data.user.password, "\n                                        \n                                        <h2>stats</h2>\n                                        ").concat(state.data.user.likes, "\n                                        ").concat(state.data.user.dislikes, "\n\n                                        <h2>history</h2>\n                                        ").concat(state.data.user.time, "\n                                        ").concat(state.data.user.views, "\n\n                                        <h2>career</h2>\n\n\n                                        ").concat(user_subs, "\n\n                                        <div id=\"japan\"></div>\n\n                                        <p>types</p>\n                                        <p>tags</p>\n                                        <p>categories</p>\n                                        <p>sub categories</p>\n\n                                        <h2>rating</h2>\n                                        <p>liked by</p>\n                                        <p>liked of (subs)</p>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"position_fixed top_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1\">\n\n                        <div id=\"misc_menu\" class=\"hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100\">\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100\">\n\n                              <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                                \n                                <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark\">\n\n                                    <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n\n                                    </div>\n\n                                </div>\n\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                        <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                            <div class=\"position_relative float_left\" >\n                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Home</p>\n\n                                <div id=\"column\" class=\"hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                      <div class=\"position_relative display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white\">\n                                        \n                                        <div class=\"position_relative display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark\">\n                                                    \n                                            <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">User</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">List</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Trending</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Interaction</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Upload</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                                            </div>\n\n                                        </div>\n\n                                      </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">User</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">List</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Trending</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Interaction</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Upload</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"position_fixed bottom_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1\">\n\n                        <div id=\"misc_menu\" class=\"hover_show position_absolute bottom_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100\">\n\n                            <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100\">\n\n                              <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white\">\n                                \n                                <div class=\"position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark\">\n\n                                    <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Story</p>\n\n                                    </div>\n\n                                </div>\n\n                              </div>\n\n                            </div>\n\n                        </div>\n\n                        <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                            <div class=\"position_relative float_left\" >\n                                <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Home</p>\n\n                                <div id=\"column\" class=\"hover_show position_absolute bottom_100 left_0 margin_auto easing_01 text_align_center float_right\">\n\n                                    <div id=\"spacer\" class=\"position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                      <div class=\"position_relative display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white\">\n                                        \n                                        <div class=\"position_relative display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark\">\n                                                    \n                                            <div class=\"position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100\">\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">User</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">List</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Trending</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Interaction</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Upload</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n                                            </div>\n\n                                        </div>\n\n                                      </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">User</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">List</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Trending</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Interaction</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Upload</p>\n                                        <p class=\"position_relative line-height_30125vh font-size_30125vh margin_1vh float_left\">Zoning</p>\n\n                        </div>\n\n                    </div>\n\n                ");
      }

      ; // ipad

      if (/iPad/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                        <div id=\"route_who_ipad\" class=\" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            <p>route_who_desktop</p>\n                        </div>\n                ";
      }

      ; // iphone

      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = "\n\n                        <div id=\"route_who_iphone\" class=\" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            <p>route_who_desktop</p>\n                        </div>\n                ";
      }

      ; // render
      // library post - filtered by authors & title

      if (document.getElementById('japan') != null) {
        document.getElementById('japan').innerHTML = ''; // render

        for (var i = 0; i < filtered_library.length; i++) {
          var does_Type_Match = false;
          var does_Username_Match = false; //alert( state.data.types[type_index].title);

          for (var post_index = 0; post_index < filtered_library[i].authors.length; post_index++) {
            //alert( filtered_library[i].types[post_index].title);
            if (filtered_library[i].authors[post_index].id == state.data.user.id) {
              does_Username_Match = true; //alert('match');
            }

            ; // pagination hack

            if (does_Username_Match) {
              // console.log(state.data.firebase.gnougn.roster[i]);
              document.getElementById('japan').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_library[i])));
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
  }, 0);
};

var local_checked = false;

var check_local_user = function check_local_user() {
  // Localize data
  if (localStorage.username == null) {
    //alert('welcome first timer');
    user_logged = false;
    document.getElementById('users_username').innerHTML = 'Welcome <u>new user!</u> Please sign up or Log in.';
    return;
  }

  ; // Localize data

  if (localStorage.username == 'null') {
    //alert('welcome back, login please');
    user_logged = false;
    document.getElementById('users_username').innerHTML = 'Welcome back <u>returning user!</u> please login';
    return;
  }

  ;

  if (localStorage.username != 'null') {
    //alert('welcome back: ' + localStorage.username);
    user_logged = true;

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

          if (local_checked == false) {
            sign_in_ui();
          }

          ;
          local_checked = true;
        }

        ;
      }

      ;
    }

    ;
  }

  ;
};

var sign_in = function sign_in() {
  for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
    console.log(state.data.firebase.gnougn.roster[i]);
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
};

var sign_in_ui = function sign_in_ui() {
  //alert('you are now signed in: ' + state.data.user.username);
  user_logged = true;
  document.getElementById('users_username').innerHTML = 'Hello ' + "".concat(state.data.user.username) + '!';
  Handle_Firebase_Refs_and_Render();
};

var sign_out_ui = function sign_out_ui() {
  //alert('see you next time: ' + localStorage.username);
  document.getElementById('users_username').innerHTML = 'See you next time, ' + "".concat(state.data.user.username);
  state.data.user = default_user;
  user_logged = false;
  localStorage.setItem("user", default_user);
  localStorage.setItem("username", default_user.username);
  localStorage.setItem("password", default_user.password);
  Handle_Firebase_Refs_and_Render();
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
};

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

var HANDLE_looping_accent = function HANDLE_looping_accent() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    var loop = true;
    var animation = setInterval(function () {
      if (interval == 1) {
        if (document.getElementById('accent') != null) {
          document.getElementById('accent').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_1';
        }

        ;
      }

      ;

      if (interval == 2) {
        if (document.getElementById('accent') != null) {
          document.getElementById('accent').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_2';
        }

        ;
      }

      ;

      if (interval == 3) {
        if (document.getElementById('accent') != null) {
          document.getElementById('accent').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_3';
        }

        ;
      }

      ;

      if (interval == 4) {
        if (document.getElementById('accent') != null) {
          document.getElementById('accent').classList = 'position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_4';
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

var HANDLE_looping_svg = function HANDLE_looping_svg() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    setInterval(function () {
      if (interval == 1) {
        if (document.getElementById('row-logo') != null) {
          document.getElementById('row-logo').classList = "\n                                gui_logo_combo_1 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box\n                            ";
        }

        ;
      }

      ;

      if (interval == 2) {
        if (document.getElementById('row-logo') != null) {
          document.getElementById('row-logo').classList = "\n                                gui_logo_combo_2 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box\n                            ";
        }

        ;
      }

      ;

      if (interval == 3) {
        if (document.getElementById('row-logo') != null) {
          document.getElementById('row-logo').classList = "\n                                gui_logo_combo_3 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box\n                            ";
        }

        ;
      }

      ;

      if (interval == 4) {
        if (document.getElementById('row-logo') != null) {
          document.getElementById('row-logo').classList = "\n                                gui_logo_combo_4 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box\n                            ";
        }

        ;
        interval = 0;
      }

      ;
      interval += 1;
    }, 1000 / 12);
  })();
};

var HANDLE_inital_load = function HANDLE_inital_load() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    var loop = false;
    var animation = setInterval(function () {
      if (interval == 0) {
        HANDLE_looping_svg();
      }

      ;

      if (interval == 1) {
        HANDLE_looping_accent();
      }

      ;

      if (interval == 2) {
        Handle_check_route('null', '');

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

var Handle_transform = function Handle_transform() {
  // console.log('Handle_transform');
  for (var i = 0; i < ui_components.length; i++) {
    // console.log('ui_components.length: ' + ui_components.length );
    if (document.getElementById(ui_components[i].component) != null) {
      // console.log('ui_components[i].component: ' + ui_components[i].component );
      _functions.default.Toggle_classes_IF_State(ui_components[i].component_state_transform_false, ui_components[i].component_state_transform_true, ui_components[i].component, ui_components[i].component_state_transform);
    }

    ;
  }

  ;
};

var Handle_display_with_delay = function Handle_display_with_delay() {
  // console.log('Handle_display_with_delay');
  for (var i = 0; i < ui_components.length; i++) {
    if (document.getElementById(ui_components[i].component) != null) {
      _functions.default.Toggle_functions_IF_State(_functions.default.Toggle_display_and_opacity_on_with_no_delay, _functions.default.Toggle_display_and_opacity_off_with_delay, ui_components[i].component, ui_components[i].component_state_display);
    }

    ;
  }

  ;
};

var HANDLE_looping_check_states = function HANDLE_looping_check_states() {
  (function () {
    setInterval(function () {
      ui_components = _components.default.ui_components();
      Handle_display_with_delay();
      Handle_transform();

      if (document.getElementById('nav-top') != null) {
        if (state.events.mouse.movetimer >= 6) {
          document.getElementById('pause').classList.add('display');
          document.getElementById('pause').classList.remove('display_none');
        }

        if (state.events.mouse.movetimer < 6) {
          document.getElementById('pause').classList.remove('display');
          document.getElementById('pause').classList.add('display_none');
        }

        if (instance.mouseleave == true || state.events.mouse.movetimer >= 4) {
          document.getElementById('nav-top').classList.remove('display');
          document.getElementById('nav-top').classList.add('display_none');
          document.getElementById('nav-bottom').classList.remove('display');
          document.getElementById('nav-bottom').classList.add('display_none');
        }

        if (instance.mouseleave == true || state.events.mouse.movetimer >= 2) {
          document.getElementById('nav-left').classList.remove('display');
          document.getElementById('nav-left').classList.add('display_none');
          document.getElementById('nav-right').classList.remove('display');
          document.getElementById('nav-right').classList.add('display_none');
          document.getElementById('anchor-top').classList.remove('display');
          document.getElementById('anchor-top').classList.add('display_none');
          document.getElementById('anchor-left').classList.remove('display');
          document.getElementById('anchor-left').classList.add('display_none');
          document.getElementById('anchor-right').classList.remove('display');
          document.getElementById('anchor-right').classList.add('display_none');
          document.getElementById('anchor-bottom').classList.remove('display');
          document.getElementById('anchor-bottom').classList.add('display_none');
        }

        if (instance.mouseenter == true && state.events.mouse.movetimer < 2) {
          document.getElementById('nav-top').classList.add('display');
          document.getElementById('nav-top').classList.remove('display_none');
          document.getElementById('nav-bottom').classList.add('display');
          document.getElementById('nav-bottom').classList.remove('display_none');
          document.getElementById('nav-left').classList.add('display');
          document.getElementById('nav-left').classList.remove('display_none');
          document.getElementById('nav-right').classList.add('display');
          document.getElementById('nav-right').classList.remove('display_none');
          document.getElementById('anchor-top').classList.add('display');
          document.getElementById('anchor-top').classList.remove('display_none');
          document.getElementById('anchor-left').classList.add('display');
          document.getElementById('anchor-left').classList.remove('display_none');
          document.getElementById('anchor-right').classList.add('display');
          document.getElementById('anchor-right').classList.remove('display_none');
          document.getElementById('anchor-bottom').classList.add('display');
          document.getElementById('anchor-bottom').classList.remove('display_none');
        }

        if (state.ui.root.wheel == 'up') {
          document.getElementById('nav-top_items').classList.add('display');
          document.getElementById('nav-top_items').classList.remove('display_none');
          document.getElementById('nav-top_items_hr').classList.add('display');
          document.getElementById('nav-top_items_hr').classList.remove('display_none');
          document.getElementById('anchor-top').classList.remove('display');
          document.getElementById('anchor-top').classList.add('display_none');
          document.getElementById('anchor-bottom').classList.add('display');
          document.getElementById('anchor-bottom').classList.remove('display_none');
        }

        if (state.ui.root.wheel == 'down') {
          document.getElementById('anchor-top').classList.add('display');
          document.getElementById('anchor-top').classList.remove('display_none');
          document.getElementById('anchor-bottom').classList.remove('display');
          document.getElementById('anchor-bottom').classList.add('display_none');
        }

        if (state.ui.root.wheel == 'down' && instance.pastlead == true) {
          document.getElementById('nav-top_items').classList.remove('display');
          document.getElementById('nav-top_items').classList.add('display_none');
          document.getElementById('nav-top_items_hr').classList.remove('display');
          document.getElementById('nav-top_items_hr').classList.add('display_none');
        }

        if (state.ui.modal.menu.left.display == true) {
          document.getElementById('button_menu').classList.add('gui_icon_close');
          document.getElementById('button_menu').classList.remove('gui_icon_menu');
        }

        if (state.ui.modal.menu.left.display == false) {
          document.getElementById('button_menu').classList.remove('gui_icon_close');
          document.getElementById('button_menu').classList.add('gui_icon_menu');
        }

        if (instance.mouseenter == true && instance.pastlead == false) {
          document.getElementById('logo_column').classList.add('gui_logo_type');
          document.getElementById('logo_column').classList.remove('gui_logo_mark');
        }

        if (instance.mouseenter == true && instance.pastlead == true) {
          document.getElementById('logo_column').classList.remove('gui_logo_type');
          document.getElementById('logo_column').classList.add('gui_logo_mark');
        }

        if (instance.mouseenter == true && instance.startedscrolling == false && state.events.mouse.movetimer < 2) {
          document.getElementById('nav-left').classList.add('display');
          document.getElementById('nav-left').classList.remove('display_none');
          document.getElementById('nav-right').classList.add('display');
          document.getElementById('nav-right').classList.remove('display_none');
          document.getElementById('nav-bottom').classList.add('display');
          document.getElementById('nav-bottom').classList.remove('display_none');
        }

        if (instance.mouseenter == true && instance.startedscrolling == true) {
          document.getElementById('nav-left').classList.remove('display');
          document.getElementById('nav-left').classList.add('display_none');
          document.getElementById('nav-right').classList.remove('display');
          document.getElementById('nav-right').classList.add('display_none');
          document.getElementById('anchor-left').classList.remove('display');
          document.getElementById('anchor-left').classList.add('display_none');
          document.getElementById('anchor-right').classList.remove('display');
          document.getElementById('anchor-right').classList.add('display_none');
          document.getElementById('nav-bottom').classList.remove('display');
          document.getElementById('nav-bottom').classList.add('display_none');
        }

        if (state.app.route == 'route_dashboard') {
          document.getElementById('nav-left').classList.remove('display');
          document.getElementById('nav-left').classList.add('display_none');
          document.getElementById('nav-right').classList.remove('display');
          document.getElementById('nav-right').classList.add('display_none');
          document.getElementById('nav-bottom').classList.remove('display');
          document.getElementById('nav-bottom').classList.add('display_none');
        }

        if (state.ui.modal.pop.top.display == true) {
          document.getElementById('anchor-top').classList.remove('display');
          document.getElementById('anchor-top').classList.add('display_none');
          document.getElementById('anchor-bottom').classList.remove('display');
          document.getElementById('anchor-bottom').classList.add('display_none');
        } // route_who


        if (state.app.route == 'route_blog') {
          document.getElementById('nav-left').classList.remove('display');
          document.getElementById('nav-left').classList.add('display_none');
          document.getElementById('nav-right').classList.remove('display');
          document.getElementById('nav-right').classList.add('display_none');
          document.getElementById('nav-bottom').classList.remove('display');
          document.getElementById('nav-bottom').classList.add('display_none');
        }

        ;

        if (instance.mouseenter == true && instance.startedscrolling == false) {
          document.getElementById('anchor-top').classList.add('display');
          document.getElementById('anchor-top').classList.remove('display_none');
        }

        ;
      }
    }, 101);
  })();
};

window.onload = function () {
  HANDLE_inital_load();
  Handle_Timers();
  HANDLE_looping_check_states();
  Handle_Repeat_Firebase_Validation; //Handle_Firebase_Refs_and_Render();
  //check_local_user();
};

var Handle_return_state = function Handle_return_state() {
  return state;
}; // Exports


var _default = {
  likeWhoListings: likeWhoListings,
  dislikeWhoListings: dislikeWhoListings,
  viewWhoListings: viewWhoListings,
  deleteWhoListings: deleteWhoListings,
  Handle_return_state: Handle_return_state
};
exports.default = _default;
},{"./style":"style.scss","./partials/functions":"partials/functions.js","./partials/components":"partials/components.js","./partials/elements":"partials/elements.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63317" + '/');

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