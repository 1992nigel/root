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
},{"./assets/graphics/gui/gui_search.svg":[["gui_search.af9fb3c0.svg","assets/graphics/gui/gui_search.svg"],"assets/graphics/gui/gui_search.svg"],"./assets/graphics/gui/gui_circle.svg":[["gui_circle.616d0ce2.svg","assets/graphics/gui/gui_circle.svg"],"assets/graphics/gui/gui_circle.svg"],"./assets/graphics/gui/gui_icon_view.svg":[["gui_icon_view.031df1c0.svg","assets/graphics/gui/gui_icon_view.svg"],"assets/graphics/gui/gui_icon_view.svg"],"./assets/graphics/gui/gui_icon_like.svg":[["gui_icon_like.e07e68e5.svg","assets/graphics/gui/gui_icon_like.svg"],"assets/graphics/gui/gui_icon_like.svg"],"./assets/graphics/gui/gui_icon_dislike.svg":[["gui_icon_dislike.f9f29024.svg","assets/graphics/gui/gui_icon_dislike.svg"],"assets/graphics/gui/gui_icon_dislike.svg"],"./assets/graphics/gui/gui_icon_delete.svg":[["gui_icon_delete.aaa110f4.svg","assets/graphics/gui/gui_icon_delete.svg"],"assets/graphics/gui/gui_icon_delete.svg"],"./assets/graphics/gui/gui_dots.svg":[["gui_dots.42a6445c.svg","assets/graphics/gui/gui_dots.svg"],"assets/graphics/gui/gui_dots.svg"],"./assets/graphics/gui/gui_vert_dots.svg":[["gui_vert_dots.2a27b5ae.svg","assets/graphics/gui/gui_vert_dots.svg"],"assets/graphics/gui/gui_vert_dots.svg"],"./assets/graphics/gui/gui_vert_colon.svg":[["gui_vert_colon.407acd4e.svg","assets/graphics/gui/gui_vert_colon.svg"],"assets/graphics/gui/gui_vert_colon.svg"],"./assets/graphics/gui/gui_audio.svg":[["gui_audio.2ac1ef0d.svg","assets/graphics/gui/gui_audio.svg"],"assets/graphics/gui/gui_audio.svg"],"./assets/graphics/gui/gui_audio_on.svg":[["gui_audio_on.a3c535d2.svg","assets/graphics/gui/gui_audio_on.svg"],"assets/graphics/gui/gui_audio_on.svg"],"./assets/graphics/gui/gui_audio_off.svg":[["gui_audio_off.494c8e2b.svg","assets/graphics/gui/gui_audio_off.svg"],"assets/graphics/gui/gui_audio_off.svg"],"./assets/graphics/gui/gui_logo_social_instagram.svg":[["gui_logo_social_instagram.bdca9dd6.svg","assets/graphics/gui/gui_logo_social_instagram.svg"],"assets/graphics/gui/gui_logo_social_instagram.svg"],"./assets/graphics/gui/gui_logo_social_twitch.svg":[["gui_logo_social_twitch.1e99fcd8.svg","assets/graphics/gui/gui_logo_social_twitch.svg"],"assets/graphics/gui/gui_logo_social_twitch.svg"],"./assets/graphics/gui/gui_logo_social_facebook.svg":[["gui_logo_social_facebook.653f6b6b.svg","assets/graphics/gui/gui_logo_social_facebook.svg"],"assets/graphics/gui/gui_logo_social_facebook.svg"],"./assets/graphics/gui/gui_logo_social_youtube.svg":[["gui_logo_social_youtube.40389e90.svg","assets/graphics/gui/gui_logo_social_youtube.svg"],"assets/graphics/gui/gui_logo_social_youtube.svg"],"./assets/graphics/gui/gui_logo_social_twitter.svg":[["gui_logo_social_twitter.e74a5829.svg","assets/graphics/gui/gui_logo_social_twitter.svg"],"assets/graphics/gui/gui_logo_social_twitter.svg"],"./assets/graphics/gui/gui_icon_close.svg":[["gui_icon_close.e725ee34.svg","assets/graphics/gui/gui_icon_close.svg"],"assets/graphics/gui/gui_icon_close.svg"],"./assets/graphics/gui/gui_icon_menu.svg":[["gui_icon_menu.de83c4a1.svg","assets/graphics/gui/gui_icon_menu.svg"],"assets/graphics/gui/gui_icon_menu.svg"],"./assets/graphics/gui/gui_text_register.svg":[["gui_text_register.17dc54a9.svg","assets/graphics/gui/gui_text_register.svg"],"assets/graphics/gui/gui_text_register.svg"],"./assets/graphics/gui/gui_text_login.svg":[["gui_text_login.77537a58.svg","assets/graphics/gui/gui_text_login.svg"],"assets/graphics/gui/gui_text_login.svg"],"./assets/graphics/branding/logo_mark.svg":[["logo_mark.2bb67398.svg","assets/graphics/branding/logo_mark.svg"],"assets/graphics/branding/logo_mark.svg"],"./assets/graphics/gui/gui_text_logout.svg":[["gui_text_logout.00dfc0f0.svg","assets/graphics/gui/gui_text_logout.svg"],"assets/graphics/gui/gui_text_logout.svg"],"./assets/graphics/gui/gui_text_key.svg":[["gui_text_key.e5e4d90a.svg","assets/graphics/gui/gui_text_key.svg"],"assets/graphics/gui/gui_text_key.svg"],"./assets/graphics/gui/gui_text_scroll.svg":[["gui_text_scroll.7a5d59fd.svg","assets/graphics/gui/gui_text_scroll.svg"],"assets/graphics/gui/gui_text_scroll.svg"],"./assets/graphics/gui/gui_text_mousemove.svg":[["gui_text_mousemove.281e0af2.svg","assets/graphics/gui/gui_text_mousemove.svg"],"assets/graphics/gui/gui_text_mousemove.svg"],"./assets/graphics/gui/gui_text_mouseenter.svg":[["gui_text_mouseenter.19ff5fc3.svg","assets/graphics/gui/gui_text_mouseenter.svg"],"assets/graphics/gui/gui_text_mouseenter.svg"],"./assets/graphics/gui/gui_text_home.svg":[["gui_text_home.2bba67cd.svg","assets/graphics/gui/gui_text_home.svg"],"assets/graphics/gui/gui_text_home.svg"],"./assets/graphics/gui/gui_text_about.svg":[["gui_text_about.c90a7bc6.svg","assets/graphics/gui/gui_text_about.svg"],"assets/graphics/gui/gui_text_about.svg"],"./assets/graphics/gui/gui_text_skills.svg":[["gui_text_skills.5ebc2b2a.svg","assets/graphics/gui/gui_text_skills.svg"],"assets/graphics/gui/gui_text_skills.svg"],"./assets/graphics/gui/gui_text_abilities.svg":[["gui_text_abilities.b7e24d5f.svg","assets/graphics/gui/gui_text_abilities.svg"],"assets/graphics/gui/gui_text_abilities.svg"],"./assets/graphics/gui/gui_text_services.svg":[["gui_text_services.5c85ce9b.svg","assets/graphics/gui/gui_text_services.svg"],"assets/graphics/gui/gui_text_services.svg"],"./assets/graphics/gui/gui_text_library.svg":[["gui_text_library.459266d6.svg","assets/graphics/gui/gui_text_library.svg"],"assets/graphics/gui/gui_text_library.svg"],"./assets/graphics/gui/gui_text_workshop.svg":[["gui_text_workshop.f795b4c1.svg","assets/graphics/gui/gui_text_workshop.svg"],"assets/graphics/gui/gui_text_workshop.svg"],"./assets/graphics/gui/gui_text_blog.svg":[["gui_text_blog.df4490fe.svg","assets/graphics/gui/gui_text_blog.svg"],"assets/graphics/gui/gui_text_blog.svg"],"./assets/graphics/gui/gui_buttons.svg":[["gui_buttons.634521a3.svg","assets/graphics/gui/gui_buttons.svg"],"assets/graphics/gui/gui_buttons.svg"],"./assets/graphics/gui/gui_button_start.svg":[["gui_button_start.b39e46e6.svg","assets/graphics/gui/gui_button_start.svg"],"assets/graphics/gui/gui_button_start.svg"],"./assets/graphics/gui/gui_button_learn.svg":[["gui_button_learn.7f4205aa.svg","assets/graphics/gui/gui_button_learn.svg"],"assets/graphics/gui/gui_button_learn.svg"],"./assets/graphics/gui/gui_button_or.svg":[["gui_button_or.30afa276.svg","assets/graphics/gui/gui_button_or.svg"],"assets/graphics/gui/gui_button_or.svg"],"./assets/graphics/gui/gui_container_tall.svg":[["gui_container_tall.350afce4.svg","assets/graphics/gui/gui_container_tall.svg"],"assets/graphics/gui/gui_container_tall.svg"],"./assets/graphics/gui/gui_bg_purple.svg":[["gui_bg_purple.bf5bab99.svg","assets/graphics/gui/gui_bg_purple.svg"],"assets/graphics/gui/gui_bg_purple.svg"],"./assets/graphics/gui/gui_gradient_purple_top.svg":[["gui_gradient_purple_top.13516e0f.svg","assets/graphics/gui/gui_gradient_purple_top.svg"],"assets/graphics/gui/gui_gradient_purple_top.svg"],"./assets/graphics/gui/gui_gradient_purple_bottom.svg":[["gui_gradient_purple_bottom.85f8f52c.svg","assets/graphics/gui/gui_gradient_purple_bottom.svg"],"assets/graphics/gui/gui_gradient_purple_bottom.svg"],"./assets/graphics/gui/gui_hori_bottom.svg":[["gui_hori_bottom.55ad783e.svg","assets/graphics/gui/gui_hori_bottom.svg"],"assets/graphics/gui/gui_hori_bottom.svg"],"./assets/graphics/gui/gui_vert_left.svg":[["gui_vert_left.93c27118.svg","assets/graphics/gui/gui_vert_left.svg"],"assets/graphics/gui/gui_vert_left.svg"],"./assets/graphics/gui/gui_hr_vert.svg":[["gui_hr_vert.feeedb19.svg","assets/graphics/gui/gui_hr_vert.svg"],"assets/graphics/gui/gui_hr_vert.svg"],"./assets/graphics/gui/gui_hr_vert_1.svg":[["gui_hr_vert_1.697f4c33.svg","assets/graphics/gui/gui_hr_vert_1.svg"],"assets/graphics/gui/gui_hr_vert_1.svg"],"./assets/graphics/gui/gui_hr_hori.svg":[["gui_hr_hori.a8413fc4.svg","assets/graphics/gui/gui_hr_hori.svg"],"assets/graphics/gui/gui_hr_hori.svg"],"./assets/graphics/gui/gui_hr_hori_1.svg":[["gui_hr_hori_1.c4ddf1a9.svg","assets/graphics/gui/gui_hr_hori_1.svg"],"assets/graphics/gui/gui_hr_hori_1.svg"],"./assets/graphics/gui/gui_logo.svg":[["gui_logo.fc15c25d.svg","assets/graphics/gui/gui_logo.svg"],"assets/graphics/gui/gui_logo.svg"],"./assets/graphics/gui/gui_logo_combo.svg":[["gui_logo_combo.b46c21b0.svg","assets/graphics/gui/gui_logo_combo.svg"],"assets/graphics/gui/gui_logo_combo.svg"],"./assets/graphics/gui/gui_logo_combo_1.svg":[["gui_logo_combo_1.3ad4aa90.svg","assets/graphics/gui/gui_logo_combo_1.svg"],"assets/graphics/gui/gui_logo_combo_1.svg"],"./assets/graphics/gui/gui_logo_combo_2.svg":[["gui_logo_combo_2.70cce457.svg","assets/graphics/gui/gui_logo_combo_2.svg"],"assets/graphics/gui/gui_logo_combo_2.svg"],"./assets/graphics/gui/gui_logo_combo_3.svg":[["gui_logo_combo_3.17ea7d92.svg","assets/graphics/gui/gui_logo_combo_3.svg"],"assets/graphics/gui/gui_logo_combo_3.svg"],"./assets/graphics/gui/gui_logo_combo_4.svg":[["gui_logo_combo_4.9ec79eca.svg","assets/graphics/gui/gui_logo_combo_4.svg"],"assets/graphics/gui/gui_logo_combo_4.svg"],"./assets/graphics/gui/gui_logo_mark.svg":[["gui_logo_mark.acaee54d.svg","assets/graphics/gui/gui_logo_mark.svg"],"assets/graphics/gui/gui_logo_mark.svg"],"./assets/graphics/gui/gui_logo_type.svg":[["gui_logo_type.6dfe5768.svg","assets/graphics/gui/gui_logo_type.svg"],"assets/graphics/gui/gui_logo_type.svg"],"./assets/graphics/gui/gui_icon_vr.svg":[["gui_icon_vr.73c77c5c.svg","assets/graphics/gui/gui_icon_vr.svg"],"assets/graphics/gui/gui_icon_vr.svg"],"./assets/graphics/gui/gui_icon_tv.svg":[["gui_icon_tv.fee69b58.svg","assets/graphics/gui/gui_icon_tv.svg"],"assets/graphics/gui/gui_icon_tv.svg"],"./assets/graphics/gui/gui_icon_ipad.svg":[["gui_icon_ipad.53ac03b2.svg","assets/graphics/gui/gui_icon_ipad.svg"],"assets/graphics/gui/gui_icon_ipad.svg"],"./assets/graphics/gui/gui_icon_iphone.svg":[["gui_icon_iphone.992e2fd3.svg","assets/graphics/gui/gui_icon_iphone.svg"],"assets/graphics/gui/gui_icon_iphone.svg"],"./assets/graphics/gui/gui_icon_imac.svg":[["gui_icon_imac.fc17d60e.svg","assets/graphics/gui/gui_icon_imac.svg"],"assets/graphics/gui/gui_icon_imac.svg"],"./assets/graphics/gui/gui_icon_watch.svg":[["gui_icon_watch.c6df14f2.svg","assets/graphics/gui/gui_icon_watch.svg"],"assets/graphics/gui/gui_icon_watch.svg"],"./assets/graphics/gui/avatar_maisie.svg":[["avatar_maisie.9c6bca52.svg","assets/graphics/gui/avatar_maisie.svg"],"assets/graphics/gui/avatar_maisie.svg"],"./assets/graphics/gui/avatar_nigel.svg":[["avatar_nigel.f35b665b.svg","assets/graphics/gui/avatar_nigel.svg"],"assets/graphics/gui/avatar_nigel.svg"],"./assets/graphics/gui/avatar_icon_maisie.svg":[["avatar_icon_maisie.1bcdceb6.svg","assets/graphics/gui/avatar_icon_maisie.svg"],"assets/graphics/gui/avatar_icon_maisie.svg"],"./assets/graphics/gui/avatar_icon_nigel.svg":[["avatar_icon_nigel.e50cfd32.svg","assets/graphics/gui/avatar_icon_nigel.svg"],"assets/graphics/gui/avatar_icon_nigel.svg"],"./assets/graphics/effect/vignette.svg":[["vignette.6b7662eb.svg","assets/graphics/effect/vignette.svg"],"assets/graphics/effect/vignette.svg"],"./assets/graphics/accent/noise_1.svg":[["noise_1.e88a58ae.svg","assets/graphics/accent/noise_1.svg"],"assets/graphics/accent/noise_1.svg"],"./assets/graphics/accent/noise_2.svg":[["noise_2.bad23d80.svg","assets/graphics/accent/noise_2.svg"],"assets/graphics/accent/noise_2.svg"],"./assets/graphics/accent/noise_3.svg":[["noise_3.a677e625.svg","assets/graphics/accent/noise_3.svg"],"assets/graphics/accent/noise_3.svg"],"./assets/graphics/accent/noise_4.svg":[["noise_4.b131b146.svg","assets/graphics/accent/noise_4.svg"],"assets/graphics/accent/noise_4.svg"],"./assets/fonts/Amatic-SC/AmaticSC-Regular.ttf":[["AmaticSC-Regular.02ca8f80.ttf","assets/fonts/Amatic-SC/AmaticSC-Regular.ttf"],"assets/fonts/Amatic-SC/AmaticSC-Regular.ttf"],"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2":[["amaticsc-regular-webfont.daf1d2a7.woff2","assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2"],"assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2"],"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff":[["amaticsc-regular-webfont.1226460a.woff","assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff"],"assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"partials/elements.js":[function(require,module,exports) {
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
var element_page_bottom = "\n    <div id=\"component_app_modal_element_page_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_5\">\n      <div id=\"component_app_modal_element_page_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      </div>\n    </div>\n    ";
var element_page_right = "\n    <div id=\"component_app_modal_element_page_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_1\">\n      <div id=\"component_app_modal_element_page_right_content\" class=\"position_relative width_100 height_100 bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left z_index_0 \">\n      </div>\n    </div>\n    ";
var element_pop_top = "\n    <div id=\"component_app_modal_element_pop_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_5\">\n      <div id=\"component_app_modal_element_pop_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n      </div>\n    </div>\n    ";
var element_pop_left = "\n  <div id=\"component_app_modal_element_pop_left\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n    <div id=\"component_app_modal_element_pop_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh margin_auto max_width \">\n    </div>\n  </div>\n  ";
var element_pop_bottom = "\n    <div id=\"component_app_modal_element_pop_bottom\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n      <div id=\"component_app_modal_element_pop_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto bg_white\">\n      </div>\n    </div>\n  ";
var element_pop_right = "\n  <div id=\"component_app_modal_element_pop_right\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5\">\n    <div id=\"component_app_modal_element_pop_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden bg_yellow border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_1 margin_auto\">\n    </div>\n  </div>\n  ";
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

var from_Import = function from_Import() {};

var get_author_info = function get_author_info(prop_id) {
  for (var roster_i = 0; roster_i < state.data.firebase.gnougn.roster.length; roster_i++) {
    console.log(state.data.firebase.gnougn.roster[roster_i]);

    if (state.data.firebase.gnougn.roster[roster_i].id == prop_id) {
      return state.data.firebase.gnougn.roster[roster_i];
    }

    ;
  }

  ;
}; // 5. Functions


var Generate_new_fragment = document.createDocumentFragment();

var Generate_new_div = function Generate_new_div(innerHTML, classString, idString, index) {
  var g = document.createElement('div');
  g.setAttribute("id", idString);
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

var Generate_new_li = function Generate_new_li(data, misc, classString) {
  console.log('title:' + data.title);
  var ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", data.title);

  if (classString) {
    ELEMENT.classList = classString;
  }

  ;
  state = _index.default.Handle_return_state();
  var post_authors = ' '; // post authors

  if (data.authors != null) {
    for (var i = 0; i < data.authors.length; i++) {}

    ;
  }

  ;
  console.log(post_authors);

  if (data != null) {
    if (data.child == 'library') {
      ELEMENT.innerHTML = "\n                <li id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n                  \n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <p class=\"width_100 font_size_30125vw bg_pink\">id:".concat(data.id, "</p>\n                    <p class=\"width_100 font_size_30125vw bg_pink\">title:").concat(data.title, "</p>\n                    <p class=\"width_100 font_size_30125vw bg_pink\">views:").concat(data.views, "</p>\n                    <p class=\"width_100 font_size_30125vw bg_pink\">likes:").concat(data.likes, "</p>\n                    <p class=\"width_100\">child:").concat(data.child, "</p>\n                  </div>\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n                  </div>\n\n                </li>\n            ");

      for (var roster_i = 0; roster_i < data.authors.length; roster_i++) {
        //alert(data.authors[roster_i]);
        ELEMENT.innerHTML += "\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">";
        ELEMENT.innerHTML += "".concat("author: " + data.authors[roster_i]);

        for (var library_i = 0; library_i < state.data.firebase.gnougn.library.length; library_i++) {
          ELEMENT.innerHTML += "\n                        <div id=\"comment\" class=\"position_relative width_100 float_left display_flex_flow\">".concat("post: " + state.data.firebase.gnougn.library[library_i].title, "</div>");
        }

        ;
        ELEMENT.innerHTML += "\n                  </div>";
      }

      ; // comments

      for (var comment_i = 0; comment_i < data.comments.length; comment_i++) {
        //alert(data.comments[comment_i]);
        var COMMENT = document.createElement('li');
        COMMENT.innerHTML += "\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">";
        COMMENT.innerHTML += "".concat("comment " + ": # " + [comment_i] + " - " + data.comments[comment_i].id + ", content: " + data.comments[comment_i].content);

        if (data.comments[comment_i].replies != null) {
          for (var reply_i = 0; reply_i < data.comments[comment_i].replies.length; reply_i++) {
            COMMENT.innerHTML += "<div id=\"reply_comment\" class=\"position_relative width_100 float_left display_flex_flow hover_show\">".concat("reply, id: " + data.comments[comment_i].replies[reply_i].id + "content: " + data.comments[comment_i].replies[reply_i].content, "</div>");
          }

          ;
        }

        ;
        COMMENT.innerHTML += "\n                  </div>";
        ELEMENT.appendChild(COMMENT);
      }

      ;
    }

    ;

    if (data.child == 'roster') {
      var preview_tags = "";
      var preview_data = "";
      preview_data = "\n                <li id=\"post_component\" class=\"width_100 float_left position_relative display opacity_1\">\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <p class=\"width_100 font_size_30125vw bg_pink\">id:".concat(data.id, "</p>\n                    <p class=\"width_100 font_size_30125vw bg_pink\">title:").concat(data.title, "</p>\n                    <p class=\"width_100 font_size_30125vw bg_pink\">views:").concat(data.views, "</p>\n                    <p class=\"width_100 font_size_30125vw bg_pink\">likes:").concat(data.likes, "</p>\n                    <p class=\"width_100\">child:").concat(data.child, "</p>\n                  </div>\n\n                  <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n                    <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n                  </div>\n\n                </li>\n            ");
      ELEMENT.innerHTML = "".concat(preview_data + preview_tags); // comments

      for (var comment_i = 0; comment_i < data.comments.length; comment_i++) {
        //alert(data.comments[comment_i]);
        ELEMENT.innerHTML += "".concat("comment: " + data.comments[comment_i].id + ", content: " + data.comments[comment_i].content);

        if (data.comments[comment_i].replies != null) {
          for (var reply_i = 0; reply_i < data.comments[comment_i].replies.length; reply_i++) {
            ELEMENT.innerHTML += "<div id=\"reply_comment\" class=\"position_relative width_100 float_left display_flex_flow\">".concat("reply, id: " + data.comments[comment_i].replies[reply_i].id + "content: " + data.comments[comment_i].replies[reply_i].content, "</div>");
          }

          ;
        }

        ;
      }

      ;
    }

    ;
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.children[0].children[1].children[0].addEventListener("click", function (event) {
    _index.default.likeWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[1].children[1].addEventListener("click", function (event) {
    _index.default.dislikeWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[1].children[2].addEventListener("click", function (event) {
    _index.default.viewWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[1].children[3].addEventListener("click", function (event) {
    _index.default.deleteWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[1].children[2].addEventListener("click", function (event) {});
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
},{"../index.js":"index.js","./elements":"partials/elements.js"}],"index.js":[function(require,module,exports) {
'use strict'; // Imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style"));

var _functions = _interopRequireDefault(require("./partials/functions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var local_checked = false;
var user_logged = false;
var first_load = true;
var sorting_type = 'timeup';
var sorted_library;
var filtered_library;
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
  }
}; // Declaration

var functions; // Assignment

functions = _functions.default;
var default_user = {
  "username": "null_local_user",
  "password": "xxx",
  "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg"
};
var validated_user = {};
var validated_user_data = {};
var is_logged = false;

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
    console.log(localStorage.user);
    console.log('localStorage.user.username');
    console.log(localStorage.user.username);
    console.log('localStorage.user.password');
    console.log(localStorage.user.password);
    alert('welcome new user!');
    return;
  }

  ;

  if (localStorage.user != null) {
    //alert('welcome ' + 'returning user!');
    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
      // local user matched
      if (state.data.firebase.gnougn.library[i].username == localStorage.username && localStorage.username == "null_local_user") {//alert('create an account');
      }

      ; // local user matched

      if (state.data.firebase.gnougn.library[i].username == localStorage.username && localStorage.username != "null_local_user") {
        //alert('user matches local');
        is_logged = localStorage.signed_in; //alert('is_logged: ' + is_logged);
        //alert('localStorage.signed_in: ' + localStorage.signed_in);

        if (localStorage.signed_in == "true") {
          //alert(state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', sign this back in');
          if (state.data.firebase.gnougn.library[i].password == localStorage.password) {
            //alert('password match');
            alert('signing in: ' + state.data.firebase.gnougn.library[i].id + ', ' + state.data.firebase.gnougn.library[i].username);
            validated_user = state.data.firebase.gnougn.library[i];
          }
        }

        ;

        if (localStorage.signed_in == "false") {
          alert('offer to sign: ' + state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', back in!');
        }

        ;
      }

      ;
    }

    ;
    return;
  }

  ;
}; // Initialization


var config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
}; // Functions

var firebase_data_has_been_updated_and_is_now_writeable;
var firebase_has_responsed_with_this_updated_data;
firebase.initializeApp(config);

var find_sort = function find_sort(mode) {
  if (mode == null) {
    if (document.getElementById('element_input_sorting_type') == null) {
      sorting_type = 'likesup';
    }

    if (document.getElementById('element_input_sorting_type') != null) {
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
    }

    ;
  }

  ;

  if (mode != null) {
    sorting_type = mode;
  }

  ;

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
        return Math.abs(a.time - b.time);
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

var handle_empty_list = function handle_empty_list() {
  if (document.getElementById('element_ol_firebase_all') != null) {
    document.getElementById('element_ol_firebase_all').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_library') != null) {
    document.getElementById('element_ol_firebase_library').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_library_roster') != null) {
    document.getElementById('element_ol_firebase_library_roster').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_filtered_library') != null) {
    document.getElementById('element_ol_firebase_filtered_library').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_sorted_library') != null) {
    document.getElementById('element_ol_firebase_sorted_library').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_logged_user') != null) {
    document.getElementById('element_ol_firebase_logged_user').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_logged_user_follows_user_library') != null) {
    document.getElementById('element_ol_firebase_logged_user_follows_user_library').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_logged_user_followers_user_library') != null) {
    document.getElementById('element_ol_firebase_logged_user_followers_user_library').innerHTML = '';
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

var handle_firebase_render_to_view = function handle_firebase_render_to_view() {
  // render library
  (function () {
    setTimeout(function () {
      if (firebase_has_responsed_with_this_updated_data != null) {
        //  sort
        sorted_library = firebase_has_responsed_with_this_updated_data.gnougn.library.sort(find_sort()); // render sort

        for (var i = 0; i < sorted_library.length; i++) {
          // pagination hack
          if (i < state.data.feature_posts_limit) {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_sorted_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(sorted_library[i])));
          }

          ;
        }

        ; //  filter sorted_library by title && child

        filtered_library = [];

        for (var i = 0; i < sorted_library.length; i++) {
          if (sorted_library[i].child == 'library') {
            if (sorted_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
              filtered_library.push(sorted_library[i]);
            }

            ;
          }

          ;
        }

        ; // render sorted_library filter by title && child

        for (var i = 0; i < filtered_library.length; i++) {
          // pagination hack
          if (i < state.data.feature_posts_limit) {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_filtered_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_library[i])));
          }

          ;
        }

        ; // render all

        for (var i = 0; i < firebase_has_responsed_with_this_updated_data.gnougn.library.length; i++) {
          // in state
          console.log(state.data.firebase.gnougn.library[i]); // immediatly from response

          console.log(firebase_has_responsed_with_this_updated_data.gnougn.library[i]);

          if (firebase_has_responsed_with_this_updated_data.gnougn.library[i].child == 'library') {
            document.getElementById('element_ol_firebase_all').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(firebase_has_responsed_with_this_updated_data.gnougn.library[i])));
          }

          ;
        }

        ; // render library

        for (var i = 0; i < firebase_has_responsed_with_this_updated_data.gnougn.library.length; i++) {
          // in state
          console.log(state.data.firebase.gnougn.library[i]); // immediatly from response

          console.log(firebase_has_responsed_with_this_updated_data.gnougn.library[i]);

          if (firebase_has_responsed_with_this_updated_data.gnougn.library[i].child == 'library') {
            document.getElementById('element_ol_firebase_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(firebase_has_responsed_with_this_updated_data.gnougn.library[i])));
          }

          ;
        }

        ; // render roster

        for (var i = 0; i < firebase_has_responsed_with_this_updated_data.gnougn.library.length; i++) {
          // in state
          console.log(state.data.firebase.gnougn.library[i]); // immediatly from response

          console.log(firebase_has_responsed_with_this_updated_data.gnougn.library[i]);

          if (firebase_has_responsed_with_this_updated_data.gnougn.library[i].child == 'roster') {
            document.getElementById('element_ol_firebase_library_roster').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(firebase_has_responsed_with_this_updated_data.gnougn.library[i])));
          }

          ;
        }

        ; // render validated user info (misc == true [using algorithm])

        for (var i = 0; i < firebase_has_responsed_with_this_updated_data.gnougn.library.length; i++) {
          if (validated_user.id == firebase_has_responsed_with_this_updated_data.gnougn.library[i].id) {
            //alert(validated_user.id);
            document.getElementById('element_ol_firebase_logged_user').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(firebase_has_responsed_with_this_updated_data.gnougn.library[i], true)));
            validated_user_data = firebase_has_responsed_with_this_updated_data.gnougn.library[i];

            for (var i = 0; i < firebase_has_responsed_with_this_updated_data.gnougn.library.length; i++) {
              if (firebase_has_responsed_with_this_updated_data.gnougn.library[i].child == 'library') {
                for (var ii = 0; ii < firebase_has_responsed_with_this_updated_data.gnougn.library[i].authors.length; ii++) {
                  if (firebase_has_responsed_with_this_updated_data.gnougn.library[i].authors == validated_user_data.id) {
                    //alert('match: ' + firebase_has_responsed_with_this_updated_data.gnougn.library[i]);
                    document.getElementById('element_ol_firebase_logged_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(firebase_has_responsed_with_this_updated_data.gnougn.library[i], true)));
                  }
                }

                ;
              }

              ;
            }

            ;
          }

          ;
        }

        ; // render validated user follows info

        for (var cc = 0; cc < validated_user.follows.length; cc++) {
          var follows_user = validated_user.follows;
          document.getElementById('element_ol_firebase_logged_user_follows_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div("".concat(follows_user.length + ' follows'), 'follows', "".concat(follows_user[cc] + '_follows_container'), 'follows')));

          for (var bb = 0; bb < follows_user.length; bb++) {
            //alert(follows_user);
            console.log(validated_user.follows);
            document.getElementById('element_ol_firebase_logged_user_follows_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div("".concat('follower #: ' + [i] + '-' + follows_user[bb]), 'follows', "".concat(follows_user[bb] + '_title'), 'follows')));
            document.getElementById('element_ol_firebase_logged_user_follows_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div("".concat('see ' + follows_user[bb] + 'post'), 'follows', "".concat(follows_user[bb] + '_follows_list'), 'follows')));
            var all_posts = firebase_has_responsed_with_this_updated_data.gnougn.library;

            for (var pp = 0; pp < all_posts.length; pp++) {
              console.log('does: ' + follows_user[bb] + ' match ' + all_posts[pp].title + "?");
              var does_post_match_follows = false;

              for (var ppaa = 0; ppaa < all_posts[pp].authors.length; ppaa++) {
                if (all_posts[pp].authors[ppaa] == follows_user[bb]) {
                  does_post_match_follows = true; //alert('FOUND: ' + follows_user[bb] + ' match ' + all_posts[pp].title + "?");
                }

                ;
              }

              ;

              if (does_post_match_follows == true) {
                document.getElementById("".concat(follows_user[bb] + '_follows_list')).appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(firebase_has_responsed_with_this_updated_data.gnougn.library[pp], true, 'hover_show')));
              }
            }

            ;
          }

          ;
        }

        ; // render validated user followers info

        for (var cc = 0; cc < validated_user.followers.length; cc++) {
          var followers_user = validated_user.followers;
          document.getElementById('element_ol_firebase_logged_user_followers_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div("".concat(followers_user.length + ' followers'), 'followers', "".concat(followers_user[cc] + '_followers_list'), 'followers')));

          for (var bb = 0; bb < followers_user.length; bb++) {
            //alert(followers_user);
            console.log(validated_user.followers);
            document.getElementById('element_ol_firebase_logged_user_followers_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div("".concat('follower #: ' + [i] + '-' + followers_user[bb]), 'followers', "".concat(followers_user[bb] + '_followers_list'), 'followers')));
            var _all_posts = firebase_has_responsed_with_this_updated_data.gnougn.library;

            for (var pp = 0; pp < _all_posts.length; pp++) {
              console.log('does: ' + followers_user[bb] + ' match ' + _all_posts[pp].title + "?");
              var does_post_match_followers = false;

              for (var ppaa = 0; ppaa < _all_posts[pp].authors.length; ppaa++) {
                if (_all_posts[pp].authors[ppaa] == followers_user[bb]) {
                  does_post_match_followers = true; //alert('FOUND: ' + followers_user[bb] + ' match ' + all_posts[pp].title + "?");
                }

                ;
              }

              ;

              if (does_post_match_followers == true) {
                document.getElementById("".concat(followers_user[bb] + '_followers_list')).appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(firebase_has_responsed_with_this_updated_data.gnougn.library[pp], true, 'hover_show')));
              }
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

        if (first_load == true) {
          check_local_user();
          first_load = false;
        }

        ;
        setTimeout(function () {
          handle_firebase_render_to_view(); //console.clear();
          //alert('contected!');
        }, 0);
        console.log(firebase_has_responsed_with_this_updated_data.gnougn);
      }

      ;
    }

    ;
  }

  ;
}, 1000 / 24);

var device_equals_desktop = function device_equals_desktop() {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }

  ;
};

var device_equals_mobile = function device_equals_mobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }

  ;
};

var device_equals_ipad = function device_equals_ipad() {
  if (/iPad/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }

  ;
};

var device_equals_iphone = function device_equals_iphone() {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }

  ;
};

var handle_dice_roll = function handle_dice_roll(max_dice_number) {
  return Math.floor(Math.random() * max_dice_number) + 1;
};

var root = document.getElementById('root');

var handle_time = function handle_time() {
  (function () {
    setInterval(function () {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var date = new Date();
      /*
      let date_sentence_date = days[date.getDay()];
      let date_sentence_month = days[date.getMonth()];
      let date_sentence_day = days(date.getDay());
      let date_sentence_year = days(date.getYear());
      let date_sentence_hours = days(date.getHours());
      let date_sentence_minutes = days(date.getMinutes());
      let date_sentence_seconds = days(date.getSeconds());
      let date_sentence_milliseconds = days(date.getMilliseconds());
      */

      var date_sentence = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
      var date_sentence_date = days[date.getDay()];
      var date_sentence_month = months[date.getMonth()];
      var date_sentence_day = date.getDay();
      var date_sentence_year = date.getFullYear();
      var date_sentence_hours = date.getHours();
      var date_sentence_minutes = date.getMinutes();
      var date_sentence_seconds = date.getSeconds();
      var date_sentence_milliseconds = date.getMilliseconds();
      console.log('date_sentence_date: ' + date_sentence_date);
      console.log('date_sentence_month: ' + date_sentence_month);
      console.log('date_sentence_day: ' + date_sentence_day);
      console.log('date_sentence_year: ' + date_sentence_year);
      console.log('date_sentence_hours: ' + date_sentence_hours);
      console.log('date_sentence_minutes: ' + date_sentence_minutes);
      console.log('date_sentence_seconds: ' + date_sentence_seconds);
      console.log('date_sentence_milliseconds: ' + date_sentence_milliseconds);
      console.log(date_sentence);
      console.log('handle_dice_roll: ' + handle_dice_roll(6));
    }, 1000);
  })();
};

console.log(_style.default);
console.log(device_equals_desktop());
console.log(device_equals_ipad());
console.log(device_equals_iphone());

var delay = function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 2500);
}; // Create


var addListings = function addListings(child) {
  var current_second = new Date().getTime() / 1000;
  var default_item;

  if (child == 'library') {
    default_item = {
      child: "library",
      id: 0,
      password: "xxx",
      title: document.getElementById('create_post_title').value,
      username: "null_post",
      tags: [document.getElementById('create_post_tag').value],
      time: current_second,
      authors: ["" + "".concat(validated_user_data.id) + ""]
    };
  }

  ;

  if (child == 'roster') {
    default_item = {
      child: "roster",
      id: 0,
      password: [document.getElementById('create_user_password').value],
      title: document.getElementById('create_user_username').value,
      username: document.getElementById('create_user_username').value,
      tags: [document.getElementById('create_user_password').value],
      time: current_second,
      authors: ["" + "".concat(validated_user_data.id) + ""]
    };
  }

  ; // Firebase References
  // Firebase Database

  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
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
}; // Delete


var deleteWhoListings = function deleteWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
  console.log(id, 'from deleteWhoListings service');
  Ref.child(id).remove(); // Set firebase data

  setTimeout(function () {
    handle_refresh_fire_data();
  }, 0);
}; // Update


var likeWhoListings = function likeWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
  console.log(id, 'from likeWhoListings service');
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


var dislikeWhoListings = function dislikeWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
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
    handle_refresh_fire_data();
  }, 0);
}; // Update


var viewWhoListings = function viewWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child('library');
  console.log(id, 'from viewWhoListings service');
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
}; // events


setTimeout(function () {
  // Desktop
  if (device_equals_desktop) {
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
        localStorage.setItem("signed_in", "false");
        check_local_user();
      }

      ; // escape

      if (keyCode == 27) {
        localStorage.setItem("signed_in", "true");
        check_local_user();
      }

      ; // 1

      if (keyCode == 49) {
        localStorage.setItem("username", "nigel");
        localStorage.setItem("password", "1234");
      }

      ; // 2

      if (keyCode == 50) {
        localStorage.setItem("username", "null_local_user");
        localStorage.setItem("password", "xxx");
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
    root.addEventListener('keyup', function (event) {}); // filter by title

    if (document.getElementById('element_create_post') != null) {
      document.getElementById('element_create_post').addEventListener('click', function (event) {
        addListings('library');
      });
    }

    ; // filter by title

    if (document.getElementById('element_create_user') != null) {
      document.getElementById('element_create_user').addEventListener('click', function (event) {
        addListings('roster');
      });
    }

    ; // filter by title

    if (document.getElementById('element_login') != null) {
      document.getElementById('element_login').addEventListener('click', function (event) {
        var selected_username = document.getElementById('element_login_username').value;
        var selected_password = document.getElementById('element_login_password').value;
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
              alert('logging in: ' + selected_username + selected_password);
              localStorage.setItem("username", selected_username);
              localStorage.setItem("password", selected_password);
              localStorage.setItem("signed_in", "true");
            }

            ;

            if (state.data.firebase.gnougn.library[i].password != selected_password) {
              alert('not logging in: ' + selected_username + selected_password);
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
        alert('logging out');
        var selected_username = document.getElementById('element_login_username').value;
        var selected_password = document.getElementById('element_login_password').value;
        localStorage.setItem("username", localStorage.username);
        localStorage.setItem("password", "xxx");
        localStorage.setItem("signed_in", "false");
        check_local_user();
      });
    }

    ; // filter by title

    if (document.getElementById('element_null_user') != null) {
      document.getElementById('element_null_user').addEventListener('click', function (event) {
        alert('logging out to null_local_user');
        document.getElementById('element_login_username').value = "null_local_user";
        document.getElementById('element_login_password').value = "xxx";
        localStorage.setItem("username", "null_local_user");
        localStorage.setItem("password", "xxx");
        localStorage.setItem("signed_in", "false");
        check_local_user();
      });
    }

    ;
  }

  ; // Mobile

  if (device_equals_mobile) {
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

var Handle_check_route = function Handle_check_route(route, info) {
  state.app.route = route;
  var route_info = info; // (/ aka home)

  if (state.app.route == '/') {
    alert('you are home');
  }

  ;
};

var handle_inital_load = function handle_inital_load() {
  // overall site frames by 24 frames
  (function () {
    var interval = 0;
    var loop = false;
    var automation = setInterval(function () {
      if (interval == 0) {
        handle_time();
        console.log('interval 0');
      }

      ;

      if (interval == 1) {
        console.log('interval 1');
      }

      ;

      if (interval == 2) {
        console.log('interval 2');

        if (loop == false) {
          clearInterval(automation);
        }

        ;

        if (loop == true) {
          interval = 0;
        }

        ;
      }

      ;
      interval += 1;
    }, 1000);
  })();
};

window.onload = function () {
  handle_inital_load(); //check_local_user();

  handle_refresh_fire_data();
  handle_repeated_fire_data_validation;
  Handle_check_route('/', '');
  alert(localStorage.username);
  alert(localStorage.password);
  alert(localStorage.signed_in);
};

var Handle_return_state = function Handle_return_state() {
  return state;
}; // Exports


var _default = {
  likeWhoListings: likeWhoListings,
  dislikeWhoListings: dislikeWhoListings,
  viewWhoListings: viewWhoListings,
  deleteWhoListings: deleteWhoListings,
  Handle_return_state: Handle_return_state,
  handle_dice_roll: handle_dice_roll
};
exports.default = _default;
},{"./style":"style.scss","./partials/functions":"partials/functions.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52858" + '/');

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
//# sourceMappingURL=/antenuh.e31bb0bc.map