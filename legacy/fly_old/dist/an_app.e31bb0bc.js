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
},{"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.6dec167e.woff","assets/fonts/Silkscreen.ttf.woff"],"assets/fonts/Silkscreen.ttf.woff"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.a45ae991.svg","assets/fonts/Silkscreen.ttf.svg"],"assets/fonts/Silkscreen.ttf.svg"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.be6987ea.eot","assets/fonts/Silkscreen.ttf.eot"],"assets/fonts/Silkscreen.ttf.eot"],"./assets/gui/gui_wit_boys.svg":[["gui_wit_boys.0de10b7f.svg","assets/gui/gui_wit_boys.svg"],"assets/gui/gui_wit_boys.svg"],"./assets/gui/gui_wit_logo.svg":[["gui_wit_logo.fb8b3b16.svg","assets/gui/gui_wit_logo.svg"],"assets/gui/gui_wit_logo.svg"],"./assets/gui/gui_wit_logo_dark.svg":[["gui_wit_logo_dark.22e2ad7b.svg","assets/gui/gui_wit_logo_dark.svg"],"assets/gui/gui_wit_logo_dark.svg"],"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.58909d32.svg","assets/gui/gui_link_grid_white.svg"],"assets/gui/gui_link_grid_white.svg"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.8b15c689.svg","assets/gui/gui_link_menu_white.svg"],"assets/gui/gui_link_menu_white.svg"],"./assets/gui/gui_link_sign_up_white.svg":[["gui_link_sign_up_white.86d9072f.svg","assets/gui/gui_link_sign_up_white.svg"],"assets/gui/gui_link_sign_up_white.svg"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.fc375cc1.svg","assets/gui/gui_link_sign_in_white.svg"],"assets/gui/gui_link_sign_in_white.svg"],"./assets/gui/gui_link_post_white.svg":[["gui_link_post_white.ef6a2eb5.svg","assets/gui/gui_link_post_white.svg"],"assets/gui/gui_link_post_white.svg"],"./assets/gui/gui_link_message_white.svg":[["gui_link_message_white.8222fa8d.svg","assets/gui/gui_link_message_white.svg"],"assets/gui/gui_link_message_white.svg"],"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.2afa39a6.svg","assets/gui/gui_link_home_white.svg"],"assets/gui/gui_link_home_white.svg"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.23391bca.svg","assets/gui/gui_link_gear_white.svg"],"assets/gui/gui_link_gear_white.svg"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.2fd07b39.svg","assets/gui/gui_link_house_white.svg"],"assets/gui/gui_link_house_white.svg"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.27850d9e.svg","assets/gui/gui_link_close_white.svg"],"assets/gui/gui_link_close_white.svg"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.de148a15.svg","assets/gui/gui_link_min_white.svg"],"assets/gui/gui_link_min_white.svg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.f033010f.svg","assets/gui/gui_link_max_white.svg"],"assets/gui/gui_link_max_white.svg"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.179c3b09.svg","assets/gui/gui_link_dots_white.svg"],"assets/gui/gui_link_dots_white.svg"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.a1d8f80c.svg","assets/gui/gui_interaction_button_1.svg"],"assets/gui/gui_interaction_button_1.svg"],"./assets/gui/gui_interaction_button_start.svg":[["gui_interaction_button_start.5cb2f15d.svg","assets/gui/gui_interaction_button_start.svg"],"assets/gui/gui_interaction_button_start.svg"],"./assets/gui/gui_interaction_button_learn.svg":[["gui_interaction_button_learn.0a53d1d8.svg","assets/gui/gui_interaction_button_learn.svg"],"assets/gui/gui_interaction_button_learn.svg"],"./assets/gui/gui_interaction_text_or.svg":[["gui_interaction_text_or.2d029656.svg","assets/gui/gui_interaction_text_or.svg"],"assets/gui/gui_interaction_text_or.svg"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.63c56e34.svg","assets/gui/gui_interaction_text_press.svg"],"assets/gui/gui_interaction_text_press.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.e0631923.svg","assets/gui/gui_stage_desk.svg"],"assets/gui/gui_stage_desk.svg"],"./assets/gui/gui_character_message_box.svg":[["gui_character_message_box.47192970.svg","assets/gui/gui_character_message_box.svg"],"assets/gui/gui_character_message_box.svg"],"./assets/gui/gui_character_right_1.svg":[["gui_character_right_1.c745c328.svg","assets/gui/gui_character_right_1.svg"],"assets/gui/gui_character_right_1.svg"],"./assets/gui/gui_character_right_2.svg":[["gui_character_right_2.5cfcf5ac.svg","assets/gui/gui_character_right_2.svg"],"assets/gui/gui_character_right_2.svg"],"./assets/gui/gui_character_right_3.svg":[["gui_character_right_3.8dc2166e.svg","assets/gui/gui_character_right_3.svg"],"assets/gui/gui_character_right_3.svg"],"./assets/gui/gui_character_right_4.svg":[["gui_character_right_4.d7c48548.svg","assets/gui/gui_character_right_4.svg"],"assets/gui/gui_character_right_4.svg"],"./assets/gui/gui_character_left_1.svg":[["gui_character_left_1.c87b49f6.svg","assets/gui/gui_character_left_1.svg"],"assets/gui/gui_character_left_1.svg"],"./assets/gui/gui_character_left_2.svg":[["gui_character_left_2.61be681d.svg","assets/gui/gui_character_left_2.svg"],"assets/gui/gui_character_left_2.svg"],"./assets/gui/gui_character_left_3.svg":[["gui_character_left_3.056adc88.svg","assets/gui/gui_character_left_3.svg"],"assets/gui/gui_character_left_3.svg"],"./assets/gui/gui_character_left_4.svg":[["gui_character_left_4.aae0b84b.svg","assets/gui/gui_character_left_4.svg"],"assets/gui/gui_character_left_4.svg"],"./assets/gui/gui_character_right_face.svg":[["gui_character_right_face.42766739.svg","assets/gui/gui_character_right_face.svg"],"assets/gui/gui_character_right_face.svg"],"./assets/gui/gui_character_left_face.svg":[["gui_character_left_face.f15e919d.svg","assets/gui/gui_character_left_face.svg"],"assets/gui/gui_character_left_face.svg"],"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/socials/twitter_handdrawn.svg":[["twitter_handdrawn.4dd6e273.svg","assets/socials/twitter_handdrawn.svg"],"assets/socials/twitter_handdrawn.svg"],"./assets/socials/twitch_handdrawn.svg":[["twitch_handdrawn.a0ceaf56.svg","assets/socials/twitch_handdrawn.svg"],"assets/socials/twitch_handdrawn.svg"],"./assets/socials/youtube_handdrawn.svg":[["youtube_handdrawn.24d23384.svg","assets/socials/youtube_handdrawn.svg"],"assets/socials/youtube_handdrawn.svg"],"./assets/socials/instagram_handdrawn.svg":[["instagram_handdrawn.f326c03a.svg","assets/socials/instagram_handdrawn.svg"],"assets/socials/instagram_handdrawn.svg"],"./assets/socials/facebook_handdrawn.svg":[["facebook_handdrawn.2a2e1213.svg","assets/socials/facebook_handdrawn.svg"],"assets/socials/facebook_handdrawn.svg"],"./assets/gradient/grey_top.svg":[["grey_top.d8e034e1.svg","assets/gradient/grey_top.svg"],"assets/gradient/grey_top.svg"],"./assets/gradient/white_top.svg":[["white_top.ce87e304.svg","assets/gradient/white_top.svg"],"assets/gradient/white_top.svg"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var state = '';
var Generate_new_fragment = document.createDocumentFragment();

var Generate_new_div = function Generate_new_div(id_String, class_String, data_Object) {
  var state = _index.default.handle_ReturnState();

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

var Generate_new_wp_li_post = function Generate_new_wp_li_post(data_Object) {
  var state = _index.default.handle_ReturnState();

  var element = document.createElement('li');
  element.setAttribute("id", data_Object.title);
  element.classList = data_Object.title + ' bg_grey';
  var time_parts = data_Object.date_published.split('-');
  var times = data_Object.date_published.split('T');
  var time_year = time_parts[0];
  var time_month = time_parts[1];
  var time_date = time_parts[2].split('T')[0];
  var time_clock = times[1].split('+')[0];
  var time_clock_hours = time_clock.split(':')[0];
  var time_clock_minutes = time_clock.split(':')[1];
  var time_clock_seconds = time_clock.split(':')[2];
  var overall_time = time_year + time_month + time_date + time_clock_hours + time_clock_minutes + time_clock_seconds;
  element.innerHTML = "\n          <a href=\"".concat(data_Object.url, "\"><p class=\"font_size_5vw color_white\">title:").concat(data_Object.title, "</p></a>\n\n          <p class=\"font_size_205vw color_white\">author.name:").concat(data_Object.author.name, "</p>\n          <p class=\"font_size_205vw color_white\">author.avatar:").concat(data_Object.author.avatar, "</p>\n          <p class=\"font_size_205vw color_white\">author.url:").concat(data_Object.author.url, "</p>\n          <p class=\"font_size_205vw color_white\">title:").concat(data_Object.title, "</p>\n          <p class=\"font_size_205vw color_white\">id:").concat(data_Object.id, "</p>\n          <p class=\"font_size_205vw color_white\">url:").concat(data_Object.url, "</p>\n          <p class=\"font_size_205vw color_white\">date_published:").concat(data_Object.date_published, "</p>\n          <p class=\"font_size_205vw color_white\">time_parts:").concat(time_parts[0] + time_parts[1], "</p>\n          <p class=\"font_size_205vw color_white\">times:").concat(times[0], "</p>\n          <p class=\"font_size_205vw color_white\">clock:").concat(times[1], "</p>\n          <p class=\"font_size_205vw color_white\">time_year:").concat(time_year, "</p>\n          <p class=\"font_size_205vw color_white\">time_month:").concat(time_month, "</p>\n          <p class=\"font_size_205vw color_white\">time_date:").concat(time_date, "</p>\n          <p class=\"font_size_205vw color_white\">time_clock_hours:").concat(time_clock_hours, "</p>\n          <p class=\"font_size_205vw color_white\">time_clock_minutes:").concat(time_clock_minutes, "</p>\n          <p class=\"font_size_205vw color_white\">time_clock_seconds:").concat(time_clock_seconds, "</p>\n          <p class=\"font_size_205vw color_white\">overall_time:").concat(overall_time, "</p>\n          <p class=\"font_size_205vw color_white\">content_text:").concat(data_Object.content_text, "</p>\n          <p class=\"font_size_205vw color_white\">content_html:").concat(data_Object.content_html, "</p>\n          <p class=\"font_size_205vw color_white\">image:").concat(data_Object.image, "</p>\n          <p class=\"font_size_205vw color_white\">tags:").concat(data_Object.tags[0], "</p>\n          <p class=\"font_size_205vw color_white\">summary:").concat(data_Object.summary, "</p>\n      ");
  element.addEventListener("click", function (event) {//alert('going to wp url: seo play');
  });
  return element;
};

var Generate_new_li_post = function Generate_new_li_post(data_Object) {
  var state = _index.default.handle_ReturnState();

  var element = document.createElement('li');

  if (data_Object.title != null) {
    element.setAttribute("id", data_Object.title);
  }

  ;

  if (data_Object.title != null) {
    element.classList = data_Object.title + ' bg_grey';
  }

  ;

  if (data_Object != null) {
    element.innerHTML = "\n                  <p class=\"font_size_205vw color_white\">child:".concat(data_Object.child, "</p>\n                  <p class=\"font_size_205vw color_white\">time:").concat(data_Object.time, "</p>\n                  <p class=\"font_size_205vw color_white\">title:").concat(data_Object.title, "</p>\n                  <p class=\"font_size_205vw color_white\">likes:").concat(data_Object.likes, "</p>\n                  <p class=\"font_size_205vw color_white\">views:").concat(data_Object.views, "</p>\n              ");
  }

  ;

  if (data_Object != null) {
    element.innerHTML += "\n                <button>like?</button>\n                <button>dislike?</button>\n                <button>rate 1- 3?</button>\n                <button>re\"tweet\"?</button>\n                <button>save</button>\n              ";
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  if (data_Object.child != 'roster') {
    element.addEventListener("click", function (event) {
      alert('not roster');
      history.pushState("", document.title, "/");
      window.history.pushState('', '', 'p/' + data_Object.id);

      _index.default.check_url();
      /*
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = `
        ${data_Object.id}
      `;
      state.data.routes =+ data_Object.id;
      state.data.route = data_Object.id;
      state.data.url = data_Object.id;
       state.modal.pop.top.transform = !state.modal.pop.top.transform;
      history.replaceState({}, null, state.data.url);
      //from_index.firebase_like_Listings(data_Object.id);
      */

    });
  }

  ;

  if (data_Object.child == 'roster') {
    element.addEventListener("click", function (event) {
      alert('roster');
      history.pushState("", document.title, "/");
      window.history.pushState('', '', data_Object.username);

      _index.default.check_url();
      /*
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = `
        ${data_Object.username}
      `
      state.data.routes =+ data_Object.username;
      state.data.route = data_Object.username;
      state.data.url = data_Object.username;
      
      state.modal.pop.top.transform = !state.modal.pop.top.transform;
      history.replaceState({}, null, state.data.url);
      //from_index.firebase_like_Listings(data_Object.id);
      */

    });
  }

  ;
  /*
  element.children[1].children[3].addEventListener("click", function(event) {
      from_index.deleteWhoListings(data_Object.child, data_Object.id);
  });
  */

  return element;
}; // handles


var Toggle_functions_IF_State = function Toggle_functions_IF_State(function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) {
  var state = _index.default.handle_ReturnState(); // Function Check # 1


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
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id_Tag);

  if (MANIPULATED != null) {
    if (Ui_State == true) {
      if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {
        // remove item after buffer
        setTimeout(function () {
          MANIPULATED.classList.remove(addThisClass_if_state_false);
          MANIPULATED.classList.add(addThisClass_if_state_true);
        }, 10);
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
        }, 10);
        return;
      }

      ;
    }

    ;
  }

  ;
};

var Toggle_display_and_opacity_on_with_no_delay = function Toggle_display_and_opacity_on_with_no_delay(id) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display_none')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('display_none');
        MANIPULATED.classList.add('display');
      }, 0);
      return;
    }

    ;
  }

  ;
};

var Toggle_display_and_opacity_off_with_delay = function Toggle_display_and_opacity_off_with_delay(id) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display')) {
      // remove item after buffer
      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 102);
      return;
    }

    ;
  }

  ;
}; // 1000 ms delay for bg items


var Toggle_stages_display_and_opacity_on_with_no_delay = function Toggle_stages_display_and_opacity_on_with_no_delay(id) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display_none')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('display_none');
        MANIPULATED.classList.add('display');
      }, 0);
      /* remove item after buffer
      setTimeout(function() {
          MANIPULATED.classList.remove('opacity_0');
          MANIPULATED.classList.add('opacity_1');
       }, 1);
      */

      return;
    }

    ;
  }

  ;
};

var Toggle_stages_display_and_opacity_off_with_delay = function Toggle_stages_display_and_opacity_off_with_delay(id) {
  var state = _index.default.handle_ReturnState();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 1000); // remove item after buffer

      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 1000);
      return;
    }

    ;
  }

  ;
};

var _default = {
  Generate_new_fragment: Generate_new_fragment,
  Generate_new_div: Generate_new_div,
  Generate_new_li_post: Generate_new_li_post,
  Toggle_functions_IF_State: Toggle_functions_IF_State,
  Toggle_classes_IF_State: Toggle_classes_IF_State,
  Toggle_display_and_opacity_on_with_no_delay: Toggle_display_and_opacity_on_with_no_delay,
  Toggle_display_and_opacity_off_with_delay: Toggle_display_and_opacity_off_with_delay,
  Toggle_stages_display_and_opacity_on_with_no_delay: Toggle_stages_display_and_opacity_on_with_no_delay,
  Toggle_stages_display_and_opacity_off_with_delay: Toggle_stages_display_and_opacity_off_with_delay,
  Generate_new_wp_li_post: Generate_new_wp_li_post
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
  state = _index.default.handle_ReturnState();

  if (event) {
    state.events.scroll.history.push({
      event: event
    });
    console.log('state.events.scroll.history');
    console.log(state.events.scroll.history);
    console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
    console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
    console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
    console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
    console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
    console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);
    console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollTop);
    console.log(event); //alert('yup');
    // scrolling

    console.log("event.srcElement.clientWidth: " + event.srcElement.clientWidth);
    console.log("event.srcElement.clientHeight: " + event.srcElement.clientHeight);
    console.log("event.srcElement.scrollLeft: " + event.srcElement.scrollLeft);
    console.log("event.srcElement.scrollTop: " + event.srcElement.scrollTop);
    console.log("event.srcElement.scrollWidth: " + event.srcElement.scrollWidth);
    console.log("event.srcElement.scrollHeight: " + event.srcElement.scrollHeight);
    state.interaction.root.clientHeight = event.srcElement.clientHeight;
    state.interaction.root.clientWidth = event.srcElement.clientWidth;
    state.interaction.root.scrollHeight = event.srcElement.scrollHeight;
    state.interaction.root.scrollWidth = event.srcElement.scrollWidth;
    state.interaction.root.scrollTop = event.srcElement.scrollTop;
    state.interaction.root.scrollLeft = event.srcElement.scrollLeft;

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


    if (event.srcElement.scrollTop > state.interaction.root.component_app_gui_scroll_y_position) {
      console.log("state.interaction.root.component_app_gui_scroll_y_position increasing");
      console.log("instance: wheel up");
    }

    if (event.srcElement.scrollTop < state.interaction.root.component_app_gui_scroll_y_position) {
      console.log("state.interaction.root.component_app_gui_scroll_y_position decreasing");
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
      console.log("component_app_modal_element_page_top_content: instance: footer met");
    }

    state.interaction.root.component_app_gui_scroll_y_position = event.srcElement.scrollTop;
  }

  ;
};

var handle_Function_Mouse_Move = function handle_Function_Mouse_Move(event) {
  state = _index.default.handle_ReturnState();
  state.events.mouse.status.enter = true;
  state.events.mouse.status.leave = false;

  if (event) {
    state.events.mouse.current.clientX = event.clientX;
    state.events.mouse.current.clientY = event.clientY;
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
};

var handle_Function_Key_Down = function handle_Function_Key_Down(event) {
  state = _index.default.handle_ReturnState();

  if (event) {
    state.events.key.history.push([{
      keyCode: event.keyCode
    }]);
    console.log('state.events.key.history');
    console.log(state.events.key.history);

    if (event.keyCode == 13) {
      state.motion.sequence_game = 0;

      _index.default.handle_Sequence_Game_Enter();
    }

    ;

    if (event.keyCode == 32) {
      state.motion.sequence_game = 0;

      _index.default.handle_Sequence_Game_Exit();
    }

    ;

    if (event.keyCode == 27) {
      //alert('handle_ui_reset');
      _index.default.handle_ui_reset();
    }

    ;

    if (event.keyCode == 81) {
      _index.default.handle_modal_reset();
    }

    ;

    if (event.keyCode == 37) {
      //alert('left');
      state.data.route += 1;
      state.interaction.playable.angle = 0;
      state.interaction.playable.clientX -= 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 38) {
      //alert('up');
      state.data.route -= 1;
      state.interaction.playable.stance = 1;
      state.interaction.playable.clientY -= 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 39) {
      //alert('right');
      state.data.route -= 1;
      state.interaction.playable.angle = 1;
      state.interaction.playable.clientX += 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 40) {
      //alert('down');
      state.data.route += 1;
      state.interaction.playable.stance = 0;
      state.interaction.playable.clientY += 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 51) {//state.ui.modal.pop.top.transform = true;
      //state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
    }

    ;

    if (event.keyCode == 87) {
      //alert('shift');
      state.interaction.vr.clientY += 1;
    }

    ;

    if (event.keyCode == 83) {
      //alert('shift');
      state.interaction.vr.clientY -= 1;
    }

    ;

    if (event.keyCode == 68) {
      //alert('shift');
      state.interaction.vr.clientX += 1;
    }

    ;

    if (event.keyCode == 65) {
      //alert('shift');
      state.interaction.vr.clientX -= 1;
    }

    ;
  }

  ;
};

var handle_Function_Key_Up = function handle_Function_Key_Up(event) {
  state = _index.default.handle_ReturnState();

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

var handle_Function_Device_Resize = function handle_Function_Device_Resize(event) {
  state = _index.default.handle_ReturnState();
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
  state = _index.default.handle_ReturnState();
  state.events.motion.event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
  state.events.motion.event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
  state.events.motion.event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;
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
  var state = _index.default.handle_ReturnState();

  var components = [// anchors
  {
    component: 'gui_top',
    component_state_transform: !state.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.gui.top.transform // component_state_opacity:  state.gui.top.opacity

  }, {
    component: 'gui_top_left',
    component_state_transform: !state.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.gui.top_left.transform // component_state_opacity:  state.gui.top_left.opacity

  }, {
    component: 'gui_top_right',
    component_state_transform: !state.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.gui.top_right.transform // component_state_opacity:  state.gui.top_right.opacity

  }, {
    component: 'gui_bottom',
    component_state_transform: !state.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.gui.bottom.transform // component_state_opacity:  state.gui.bottom.opacity

  }, {
    component: 'gui_bottom_left',
    component_state_transform: !state.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.gui.bottom_left.transform // component_state_opacity:  state.gui.bottom_left.opacity

  }, {
    component: 'gui_bottom_right',
    component_state_transform: !state.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.gui.bottom_right.transform // component_state_opacity:  state.gui.bottom_right.opacity

  }, {
    component: 'gui_left',
    component_state_transform: !state.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.gui.left.transform // component_state_opacity:  state.gui.top.opacity

  }, {
    component: 'gui_right',
    component_state_transform: !state.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.gui.right.transform // component_state_opacity:  state.gui.top.opacity

  }, // gradient
  {
    component: 'component_app_modal_element_gradient_top',
    component_state_transform: !state.modal.gradient.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.gradient.top.transform // component_state_opacity:  state.modal.gradient.top.opacity

  }, {
    component: 'component_app_modal_element_gradient_bottom',
    component_state_transform: !state.modal.gradient.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.gradient.bottom.transform // component_state_opacity:  state.modal.gradient.bottom.opacity

  }, {
    component: 'component_app_modal_element_gradient_left',
    component_state_transform: !state.modal.gradient.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.gradient.left.transform // component_state_opacity:  state.modal.gradient.top.opacity

  }, {
    component: 'component_app_modal_element_gradient_right',
    component_state_transform: !state.modal.gradient.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.gradient.right.transform // component_state_opacity:  state.modal.gradient.top.opacity

  }, // morph
  {
    component: 'component_app_modal_element_morph_top',
    component_state_transform: !state.modal.morph.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.morph.top.transform // component_state_opacity:  state.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_bottom',
    component_state_transform: !state.modal.morph.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.morph.bottom.transform // component_state_opacity:  state.modal.morph.bottom.opacity

  }, {
    component: 'component_app_modal_element_morph_left',
    component_state_transform: !state.modal.morph.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.morph.left.transform // component_state_opacity:  state.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_right',
    component_state_transform: !state.modal.morph.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.morph.right.transform // component_state_opacity:  state.modal.morph.top.opacity

  }, // navs
  {
    component: 'header',
    component_state_transform: !state.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.nav.top.transform // component_state_opacity:  state.modal.nav.top.opacity

  }, {
    component: 'modal_nav_bottom',
    component_state_transform: !state.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.nav.bottom.transform // component_state_opacity:  state.modal.nav.bottom.opacity

  }, {
    component: 'modal_nav_left',
    component_state_transform: !state.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.nav.left.transform // component_state_opacity:  state.modal.nav.top.opacity

  }, {
    component: 'modal_nav_right',
    component_state_transform: !state.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.nav.right.transform // component_state_opacity:  state.modal.nav.top.opacity

  }, // menu
  {
    component: 'component_app_modal_element_menu_top',
    component_state_transform: !state.modal.menu.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.menu.top.transform // component_state_opacity:  state.modal.menu.top.opacity

  }, {
    component: 'component_app_modal_element_menu_bottom',
    component_state_transform: !state.modal.menu.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.menu.bottom.transform // component_state_opacity:  state.modal.menu.bottom.opacity

  }, {
    component: 'component_app_modal_element_menu_left',
    component_state_transform: !state.modal.menu.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.menu.left.transform // component_state_opacity:  state.modal.menu.left.opacity

  }, {
    component: 'component_app_modal_element_menu_right',
    component_state_transform: !state.modal.menu.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.menu.right.transform // component_state_opacity:  state.modal.menu.right.opacity

  }, // page
  {
    component: 'component_app_modal_element_page_top',
    component_state_transform: !state.modal.page.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.page.top.transform // component_state_opacity:  state.modal.page.top.opacity

  }, {
    component: 'component_app_modal_element_page_bottom',
    component_state_transform: !state.modal.page.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.page.bottom.transform // component_state_opacity:  state.modal.page.bottom.opacity

  }, {
    component: 'component_app_modal_element_page_left',
    component_state_transform: !state.modal.page.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.page.left.transform // component_state_opacity:  state.modal.page.left.opacity

  }, {
    component: 'component_app_modal_element_page_right',
    component_state_transform: !state.modal.page.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.page.right.transform // component_state_opacity:  state.modal.page.right.opacity

  }, {
    component: 'component_app_modal_element_pop_top',
    component_state_transform: !state.modal.pop.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.pop.top.transform // component_state_opacity:  state.modal.pop.top.opacity

  }, {
    component: 'component_app_modal_element_pop_bottom',
    component_state_transform: !state.modal.pop.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.pop.bottom.transform // component_state_opacity:  state.modal.pop.bottom.opacity

  }, {
    component: 'component_app_modal_element_pop_left',
    component_state_transform: !state.modal.pop.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.pop.left.transform // component_state_opacity:  state.modal.pop.left.opacity

  }, {
    component: 'component_app_modal_element_pop_right',
    component_state_transform: !state.modal.pop.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.pop.right.transform // component_state_opacity:  state.modal.pop.right.opacity

  }, {
    component: 'component_app_modal_element_pip_top',
    component_state_transform: !state.modal.pip.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.pip.top.transform // component_state_opacity:  state.modal.pip.top.opacity

  }, {
    component: 'component_app_modal_element_pip_bottom',
    component_state_transform: !state.modal.pip.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.modal.pip.bottom.transform // component_state_opacity:  state.modal.pip.bottom.opacity

  }, {
    component: 'component_app_modal_element_pip_left',
    component_state_transform: !state.modal.pip.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.pip.left.transform // component_state_opacity:  state.modal.pip.left.opacity

  }, {
    component: 'component_app_modal_element_pip_right',
    component_state_transform: !state.modal.pip.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.pip.right.transform // component_state_opacity:  state.modal.pip.right.opacity

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

var _functions = _interopRequireDefault(require("./imports/functions"));

var _events = _interopRequireDefault(require("./imports/events"));

var _components = _interopRequireDefault(require("./imports/components"));

var _ux;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Initialization
var config = {
  apiKey: "AIzaSyBYCrGMkgJrj7-1dXQPEdUb0m6HOzKDObw",
  authDomain: "nownigel-67004.firebaseapp.com",
  databaseURL: "https://nownigel-67004.firebaseio.com",
  projectId: "nownigel-67004",
  storageBucket: "nownigel-67004.appspot.com",
  messagingSenderId: "974220525587",
  appId: "1:974220525587:web:26903039e32829e1"
};
var components;
var selected_wp_id = 0;
var sound_effect_beep = document.getElementById('sound_effect_beep');
var body = document.getElementById('body');
var header = document.getElementById('header');
var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var h3 = document.getElementById('h3');
var h4 = document.getElementById('h4');
var h5 = document.getElementById('h5');
var h6 = document.getElementById('h6');
var wp_inital_load = true;
var fb_inital_load = true;
var state = {
  data: {
    route: 0,
    firebase: {},
    wordpress: {},
    validated_user: {}
  },
  ux: (_ux = {
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
  }, _defineProperty(_ux, "platform", {
    is_Desktop: false,
    is_Mobile: false
  }), _defineProperty(_ux, "browser", {
    height: window.outerHeight,
    width: window.outerWidth
  }), _defineProperty(_ux, "window", {
    height: window.innerHeight,
    width: window.innerWidth
  }), _defineProperty(_ux, "screen", {
    height: window.screen.height,
    width: window.screen.width,
    orientation: window.screen.orientation
  }), _defineProperty(_ux, "dimensions", {
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
  }), _ux),
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
      clientY: 4,
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
      clientX: 6,
      clientY: 4,
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
      clientY: 4,
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
      clientY: 4,
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
  modal: {
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
    }
  }
};

var handle_onload_time = function handle_onload_time() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date();
  state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
  state.data.onload_time = state.data.time;
  handle_update();
};

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
      console.log('duration: ' + state.motion.duration);
      handle_update();
    }, 1000);
  })();
};

var handle_Sequence_Game_Enter = function handle_Sequence_Game_Enter() {
  // execute on timeout
  if (state.motion.sequence_game == 0) {
    setTimeout(function () {
      state.motion.sequence_game += 1;
      document.getElementById('lead').innerHTML = "\n\n            <div id=\"lead_scene\" class=\"\">\n                <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto\">\n                    <div id=\"logo_mark\" class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                </div>\n\n                <div class=\"position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto\">\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                </div>\n\n            </div>\n            ";
      handle_Sequence_Game_Enter();
    }, 1000);
  }

  ; // execute on timeout

  if (state.motion.sequence_game == 1) {
    setTimeout(function () {
      state.motion.sequence_game += 1;
      document.getElementById('lead').innerHTML = "\n\n            ";
      handle_Sequence_Game_Enter();
    }, 1000);
  }

  ; // execute on timeout

  if (state.motion.sequence_game == 2) {
    setTimeout(function () {
      state.motion.sequence_game += 1;
      document.getElementById('lead').innerHTML = "\n\n            <div id=\"lead_scene\" class=\"\">\n                <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto\">\n                    <div id=\"logo_mark\" class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                </div>\n\n                <div class=\"position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto\">\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                </div>\n\n            </div>\n            ";
      handle_Sequence_Game_Enter();
    }, 1000);
  }

  ; // execute on timeout

  if (state.motion.sequence_game == 3) {
    setTimeout(function () {
      state.motion.sequence_game += 1;
      document.getElementById('lead').innerHTML = "\n\n            ";
      handle_Sequence_Game_Enter();
    }, 1000);
  }

  ;
};

var handle_Sequence_Game_Exit = function handle_Sequence_Game_Exit() {
  // execute on timeout
  if (state.motion.sequence_game == 0) {
    setTimeout(function () {
      state.motion.sequence_game += 1;
      document.getElementById('lead').innerHTML = "\n\n            ";
      handle_Sequence_Game_Exit();
    }, 1000);
  }

  ; // execute on timeout

  if (state.motion.sequence_game == 1) {
    setTimeout(function () {
      state.motion.sequence_game += 1;
      document.getElementById('lead').innerHTML = "\n\n            <div id=\"lead_scene\" class=\"\">\n                <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto\">\n                    <div id=\"logo_mark\" class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                </div>\n\n                <div class=\"position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto\">\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                </div>\n\n            </div>\n            ";
      handle_Sequence_Game_Exit();
    }, 1000);
  }

  ; // execute on timeout

  if (state.motion.sequence_game == 2) {
    setTimeout(function () {
      state.motion.sequence_game += 1;
      document.getElementById('lead').innerHTML = "\n\n            ";
      handle_Sequence_Game_Exit();
    }, 1000);
  }

  ; // execute on timeout

  if (state.motion.sequence_game == 3) {
    setTimeout(function () {
      state.motion.sequence_game += 1;
      document.getElementById('lead').innerHTML = "\n\n            <div id=\"lead_scene\" class=\"\">\n                <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto\">\n                    <div id=\"logo_mark\" class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                </div>\n\n                <div class=\"position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto\">\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                </div>\n\n            </div>\n            ";
      handle_Sequence_Game_Exit();
    }, 1000);
  }

  ;
}; // Add


var firebase_add_Listings = function firebase_add_Listings(child) {
  // if create_user_username.value "username" is already used
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

  ; // if user is logged in

  if (state.data.validated_user.id != null) {
    var current_second = new Date().getTime() / 1000;
    var default_item; // wp_to_fb_posts

    if (child == 'wp_to_fb_posts') {
      default_item = {
        child: "library",
        wp_to_fb_posts: document.getElementById('form_submit').children[0].children[0].children[5].children[1].children[0].value,
        id: 0,
        likes: 0,
        views: 0,
        username: state.data.validated_user.username,
        password: state.data.validated_user.password,
        title: document.getElementById('form_submit').children[0].children[0].children[0].children[1].children[0].value,
        tags: [document.getElementById('form_submit').children[0].children[0].children[0].children[1].children[0].value],
        time: current_second,
        authors: ["" + "".concat(state.data.validated_user.username) + ""]
      };
    }

    ;

    if (child == 'wp_to_fb_posts') {
      // Firebase References
      // Firebase Database
      var rootRef = firebase.database().ref();
      var gnougnRef = rootRef.child('gnougn');
      var Ref = gnougnRef.child('library'); // update key of added object

      Ref.push(default_item).then(function (snap) {
        var key = snap.key;
        state.data.newly_created_ID = key;
        console.log('from addListing' + key); // update created item with snap.key

        Ref.child(key).update({
          id: key
        }); // Set firebase data

        setTimeout(function () {
          fb_refresh();
        }, 0);
      });
      document.getElementById('create_post_title').value = "";
      document.getElementById('create_post_tag').value = "";
      document.getElementById('create_user_username').value = "";
      document.getElementById('create_user_password').value = "";
    }

    ; // library

    if (child == 'library') {
      default_item = {
        child: "library",
        id: 0,
        likes: 0,
        views: 0,
        username: state.data.validated_user.username,
        password: state.data.validated_user.password,
        title: document.getElementById('create_post_title').value,
        tags: [document.getElementById('create_post_tag').value],
        time: current_second,
        authors: ["" + "".concat(state.data.validated_user.username) + ""]
      };
    }

    ;

    if (child == 'library') {
      // Firebase References
      // Firebase Database
      var _rootRef = firebase.database().ref();

      var _gnougnRef = _rootRef.child('gnougn');

      var _Ref = _gnougnRef.child('library'); // update key of added object


      _Ref.push(default_item).then(function (snap) {
        var key = snap.key;
        state.data.newly_created_ID = key;
        console.log('from addListing' + key); // update created item with snap.key

        _Ref.child(key).update({
          id: key
        }); // Set firebase data


        setTimeout(function () {
          fb_refresh();
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
        authors: ["" + "".concat(state.data.validated_user.username) + ""]
      };
    }

    ;

    if (child == 'roster' && already_used == false) {
      // Firebase References
      // Firebase Database
      var _rootRef2 = firebase.database().ref();

      var _gnougnRef2 = _rootRef2.child('gnougn');

      var _Ref2 = _gnougnRef2.child('library'); // update key of added object


      _Ref2.push(default_item).then(function (snap) {
        var key = snap.key;
        state.data.newly_created_ID = key;
        console.log('from addListing' + key); // update created item with snap.key

        _Ref2.child(key).update({
          id: key
        }); // Set firebase data


        setTimeout(function () {
          fb_refresh();
        }, 0);
      });

      document.getElementById('create_post_title').value = "";
      document.getElementById('create_post_tag').value = "";
      document.getElementById('create_user_username').value = "";
      document.getElementById('create_user_password').value = "";
    }

    ;

    if (child == 'roster' && already_used == true) {
      alert('username already in use');
    }

    ; // stream chat

    if (child == 'stream') {
      default_item = {
        child: "stream",
        id: 0,
        likes: 0,
        views: 0,
        title: document.getElementById('create_stream').value,
        username: state.data.validated_user.username,
        time: current_second,
        tags: [''],
        authors: ['']
      };
    }

    ;

    if (child == 'stream') {
      // Firebase References
      // Firebase Database
      var _rootRef3 = firebase.database().ref();

      var _gnougnRef3 = _rootRef3.child('gnougn');

      var _Ref3 = _gnougnRef3.child('library'); // update key of added object


      _Ref3.push(default_item).then(function (snap) {
        var key = snap.key;
        state.data.newly_created_ID = key;
        console.log('from addListing' + key); // update created item with snap.key

        _Ref3.child(key).update({
          id: key
        }); // Set firebase data


        setTimeout(function () {
          fb_refresh();
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
    fb_refresh();
  }, 0);
}; // Update Like


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
    fb_refresh();
  }, 0);
}; // Update Dislike


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
    fb_refresh();
  }, 0);
}; // Update View


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
    fb_refresh();
  }, 0);
};

var handle_display_with_delay = function handle_display_with_delay() {
  components = _components.default.get_components_handled();

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

var handle_transform = function handle_transform() {
  components = _components.default.get_components_handled();

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

var handle_ui = function handle_ui() {
  if (localStorage.post_made == true) {
    alert('show recently made post from wp');
  }

  ; //lead animation dependent
  //document.getElementById('vr_mg_Left_Top').innerHTML = ``;
  //document.getElementById('vr_mg_Left_Center').innerHTML = ``;
  //document.getElementById('vr_mg_Left_Bottom').innerHTML = ``;
  //document.getElementById('vr_mg_Center_Top').innerHTML = ``;
  //document.getElementById('vr_mg_Center_Mid').innerHTML = ``;
  //document.getElementById('vr_mg_Center_Bottom').innerHTML = ``;
  //document.getElementById('vr_mg_Right_Top').innerHTML = ``;
  //document.getElementById('vr_mg_Right_Mid').innerHTML = ``;
  //document.getElementById('vr_mg_Right_Bottom').innerHTML = ``;
  //document.getElementById('bg_scene').innerHTML = ``;
  //document.getElementById('lead_scene').innerHTML = ``;
  //document.getElementById('vr_fg').innerHTML = ``;
};

var handle_update = function handle_update() {
  handle_display_with_delay();
  handle_transform();
  handle_ui();
  handle_render_data_value();
};

var handle_ReturnedState_fromEvents = function handle_ReturnedState_fromEvents() {
  state = _events.default.handle_ReturnState_fromEvents();
  handle_update();
};

var handle_render_data_value = function handle_render_data_value() {
  // gui
  if (state.data.validated_user_is_logged) {
    if (document.getElementById('local_validated_user_info') != null) {
      document.getElementById('local_validated_user_info').innerHTML = state.data.validated_user.username;
    }

    ;
  }

  ;

  if (state.data.validated_user_is_logged == false) {
    if (document.getElementById('local_validated_user_info') != null) {
      document.getElementById('local_validated_user_info').innerHTML = 'please login: ' + localStorage.username;
    }

    ;
  }

  ; // gui

  if (document.getElementById('component_app_status_transform_gui_top') != null) {
    document.getElementById('component_app_status_transform_gui_top').innerHTML = state.gui.top.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_top_left') != null) {
    document.getElementById('component_app_status_transform_gui_top_left').innerHTML = state.gui.top_left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_top_right') != null) {
    document.getElementById('component_app_status_transform_gui_top_right').innerHTML = state.gui.top_right.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_left') != null) {
    document.getElementById('component_app_status_transform_gui_left').innerHTML = state.gui.left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom') != null) {
    document.getElementById('component_app_status_transform_gui_bottom').innerHTML = state.gui.bottom.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom_left') != null) {
    document.getElementById('component_app_status_transform_gui_bottom_left').innerHTML = state.gui.bottom_left.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_bottom_right') != null) {
    document.getElementById('component_app_status_transform_gui_bottom_right').innerHTML = state.gui.bottom_right.transform;
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_right') != null) {
    document.getElementById('component_app_status_transform_gui_right').innerHTML = state.gui.right.transform;
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

  if (document.getElementById('history_scroll') != null) {
    document.getElementById('history_scroll').innerHTML = state.events.scroll.history;
  }

  ;

  if (document.getElementById('current_mouse') != null) {
    document.getElementById('current_mouse').innerHTML = 'clientX: ' + state.events.mouse.current.clientX + '. clientY: ' + state.events.mouse.current.clientY + '.';
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
    document.getElementById('interaction_character_clientX').innerHTML = state.interaction.playable.clientX;
  }

  ;

  if (document.getElementById('interaction_character_clientY') != null) {
    document.getElementById('interaction_character_clientY').innerHTML = state.interaction.playable.clientY;
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

  if (document.getElementById('history_route') != null) {
    document.getElementById('history_route').innerHTML = state.data.routes;
  }

  ;

  if (document.getElementById('current_route') != null) {
    document.getElementById('current_route').innerHTML = state.data.route;
  }

  ;
};

var handle_add_status_events = function handle_add_status_events() {
  if (document.getElementById('tab_1') != null) {
    document.getElementById('tab_1').addEventListener('click', function (event) {
      alert('tab_1');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_2') != null) {
    document.getElementById('tab_2').addEventListener('click', function (event) {
      alert('tab_2');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_3') != null) {
    document.getElementById('tab_3').addEventListener('click', function (event) {
      alert('tab_3');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_4') != null) {
    document.getElementById('tab_4').addEventListener('click', function (event) {
      alert('tab_4');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_5') != null) {
    document.getElementById('tab_5').addEventListener('click', function (event) {
      alert('tab_5');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_6') != null) {
    document.getElementById('tab_6').addEventListener('click', function (event) {
      alert('tab_6');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_7') != null) {
    document.getElementById('tab_7').addEventListener('click', function (event) {
      alert('tab_7');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_8') != null) {
    document.getElementById('tab_8').addEventListener('click', function (event) {
      alert('tab_8');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_9') != null) {
    document.getElementById('tab_9').addEventListener('click', function (event) {
      alert('tab_9');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_10') != null) {
    document.getElementById('tab_10').addEventListener('click', function (event) {
      alert('tab_10');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_11') != null) {
    document.getElementById('tab_11').addEventListener('click', function (event) {
      alert('tab_11');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_12') != null) {
    document.getElementById('tab_12').addEventListener('click', function (event) {
      alert('tab_12');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_13') != null) {
    document.getElementById('tab_13').addEventListener('click', function (event) {
      alert('tab_13');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_14') != null) {
    document.getElementById('tab_14').addEventListener('click', function (event) {
      alert('tab_14');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_15') != null) {
    document.getElementById('tab_15').addEventListener('click', function (event) {
      alert('tab_15');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_16') != null) {
    document.getElementById('tab_16').addEventListener('click', function (event) {
      alert('tab_16');
      handle_update();
    });
  }

  ;

  if (document.getElementById('tab_9') != null) {
    document.getElementById('tab_9').addEventListener('click', function (event) {
      alert('tab_9');
      handle_update();
    });
  }

  ;

  if (document.getElementById('gui_top_left') != null) {
    document.getElementById('gui_top_left').addEventListener('click', function (event) {
      //alert('gui_top_left');
      state.gui.top_right.transform = !state.gui.top_right.transform;
      state.modal.nav.top.transform = !state.modal.nav.top.transform;
      state.modal.nav.bottom.transform = !state.modal.nav.bottom.transform;
      state.modal.menu.left.transform = !state.modal.menu.left.transform;
      handle_update();
    });
  }

  ;

  if (document.getElementById('gui_top') != null) {
    document.getElementById('gui_top').addEventListener('click', function (event) {
      //alert('gui_top');
      state.modal.page.top.transform = !state.modal.page.top.transform;
      handle_update();
    });
  }

  ;

  if (document.getElementById('gui_top_right') != null) {
    document.getElementById('gui_top_right').addEventListener('click', function (event) {
      //alert('gui_top_right');
      handle_gui_all();
    });
  }

  ;

  if (document.getElementById('gui_left') != null) {
    document.getElementById('gui_left').addEventListener('click', function (event) {
      alert('gui_left');
      state.modal.menu.left.transform = !state.modal.menu.left.transform;
    });
  }

  ;

  if (document.getElementById('gui_right') != null) {
    document.getElementById('gui_right').addEventListener('click', function (event) {
      alert('gui_right');
      state.modal.menu.right.transform = !state.modal.menu.right.transform;
    });
  }

  ;

  if (document.getElementById('gui_bottom_left') != null) {
    document.getElementById('gui_bottom_left').addEventListener('click', function (event) {
      alert('gui_bottom_left');
    });
  }

  ;

  if (document.getElementById('gui_bottom') != null) {
    document.getElementById('gui_bottom').addEventListener('click', function (event) {
      alert('gui_bottom');
      state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
    });
  }

  ;

  if (document.getElementById('gui_bottom_right') != null) {
    document.getElementById('gui_bottom_right').addEventListener('click', function (event) {
      alert('gui_bottom_right');
    });
  }

  ;

  if (document.getElementById('component_app_status_transform_gui_top') != null) {
    // gui - top
    document.getElementById('component_app_status_transform_gui_top').addEventListener("click", function (event) {
      state.gui.top.transform = !state.gui.top.transform;
    }); // gui - top_left

    document.getElementById('component_app_status_transform_gui_top_left').addEventListener("click", function (event) {
      state.gui.top_left.transform = !state.gui.top_left.transform;
    }); // gui - top_right

    document.getElementById('component_app_status_transform_gui_top_right').addEventListener("click", function (event) {
      state.gui.top_right.transform = !state.gui.top_right.transform;
    }); // gui - left

    document.getElementById('component_app_status_transform_gui_left').addEventListener("click", function (event) {
      state.gui.left.transform = !state.gui.left.transform;
    }); // gui - bottom

    document.getElementById('component_app_status_transform_gui_bottom').addEventListener("click", function (event) {
      state.gui.bottom.transform = !state.gui.bottom.transform;
    }); // gui - bottom_left

    document.getElementById('component_app_status_transform_gui_bottom_left').addEventListener("click", function (event) {
      state.gui.bottom_left.transform = !state.gui.bottom_left.transform;
    }); // gui - bottom_right

    document.getElementById('component_app_status_transform_gui_bottom_right').addEventListener("click", function (event) {
      state.gui.bottom_right.transform = !state.gui.bottom_right.transform;
    }); // gui - right

    document.getElementById('component_app_status_transform_gui_right').addEventListener("click", function (event) {
      state.gui.right.transform = !state.gui.right.transform;
    });
  }

  ;

  if (document.getElementById('component_app_status_transform_nav_top') != null) {
    // nav - top
    document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function (event) {
      state.modal.nav.top.transform = !state.modal.nav.top.transform;
    }); // nav - left

    document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function (event) {
      state.modal.nav.left.transform = !state.modal.nav.left.transform;
    }); // nav - bottom

    document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function (event) {
      state.modal.nav.bottom.transform = !state.modal.nav.bottom.transform;
    }); // nav - right

    document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function (event) {
      state.modal.nav.right.transform = !state.modal.nav.right.transform;
    });
  }

  ;

  if (document.getElementById('component_app_status_transform_page_top') != null) {
    // page - top
    document.getElementById('component_app_status_transform_page_top').addEventListener("click", function (event) {
      state.modal.page.top.transform = !state.modal.page.top.transform;
    }); // page - left

    document.getElementById('component_app_status_transform_page_left').addEventListener("click", function (event) {
      state.modal.page.left.transform = !state.modal.page.left.transform;
    }); // page - bottom

    document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function (event) {
      state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
    }); // page - right

    document.getElementById('component_app_status_transform_page_right').addEventListener("click", function (event) {
      state.modal.page.right.transform = !state.modal.page.right.transform;
    });
  }

  ; // menu

  if (document.getElementById('component_app_status_transform_menu_top') != null) {
    // menu - top
    document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function (event) {
      state.modal.menu.top.transform = !state.modal.menu.top.transform;
    }); // menu - left

    document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function (event) {
      state.modal.menu.left.transform = !state.modal.menu.left.transform;
    }); // menu - bottom

    document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function (event) {
      state.modal.menu.bottom.transform = !state.modal.menu.bottom.transform;
    }); // menu - right

    document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function (event) {
      state.modal.menu.right.transform = !state.modal.menu.right.transform;
    });
  }

  ; // pop

  if (document.getElementById('component_app_status_transform_pop_top') != null) {
    // pop - top
    document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function (event) {
      state.modal.pop.top.transform = !state.modal.pop.top.transform;
    }); // pop - left

    document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function (event) {
      state.modal.pop.left.transform = !state.modal.pop.left.transform;
    }); // pop - bottom

    document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function (event) {
      state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
    }); // pop - right

    document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function (event) {
      state.modal.pop.right.transform = !state.modal.pop.right.transform;
    });
  }

  ; // gradient

  if (document.getElementById('component_app_status_transform_gradient_top') != null) {
    // gradient - top
    document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function (event) {
      state.modal.gradient.top.transform = !state.modal.gradient.top.transform;
    }); // gradient - left

    document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function (event) {
      state.modal.gradient.left.transform = !state.modal.gradient.left.transform;
    }); // gradient - bottom

    document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function (event) {
      state.modal.gradient.bottom.transform = !state.modal.gradient.bottom.transform;
    }); // gradient - right

    document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function (event) {
      state.modal.gradient.right.transform = !state.modal.gradient.right.transform;
    });
  }

  ; // morph

  if (document.getElementById('component_app_status_transform_morph_top') != null) {
    // morph - top
    document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function (event) {
      state.modal.morph.top.transform = !state.modal.morph.top.transform;
    }); // morph - left

    document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function (event) {
      state.modal.morph.left.transform = !state.modal.morph.left.transform;
    }); // morph - bottom

    document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function (event) {
      state.modal.morph.bottom.transform = !state.modal.morph.bottom.transform;
    }); // morph - right

    document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function (event) {
      state.modal.morph.right.transform = !state.modal.morph.right.transform;
    });
  }

  ;
};

var handle_animation = function handle_animation() {
  // 24/fps loop
  (function () {
    var interval = 0;
    setInterval(function () {
      // 10 is half the size of the element_ball
      // It center the positioning point to the center of the element_ball
      if (document.getElementById('element_ball') != null) {
        document.getElementById('element_ball').style.top = state.events.motion.event_gamma / state.ux.dimensions.height * 100 + "%";
        document.getElementById('element_ball').style.left = state.events.motion.event_beta / state.ux.dimensions.width * 100 + "%";
      }

      ;

      if (document.getElementById('bounce') != null) {
        document.getElementById('bounce').style = 'top: ' + state.interaction.bounce.yaxis * state.ux.dimensions.height8 + 'px; \
                    left: ' + state.interaction.bounce.xaxis * state.ux.dimensions.width8 + 'px ;';
      }

      ;

      if (document.getElementById('track_x') != null) {
        document.getElementById('track_x').style = 'top: ' + 0 + 'px; \
                    left: ' + state.events.mouse.current.clientX + 'px ;';
      }

      ;

      if (document.getElementById('track_y') != null) {
        document.getElementById('track_y').style = 'top: ' + state.events.mouse.current.clientY + 'px; \
                    left: ' + 0 + 'px ;';
      }

      ; // check game state

      if (state.interaction.playable.clientX == state.interaction.enemy.clientX) {
        console.log('lost');
      }

      ; // player 1

      if (document.getElementById('playable_character_svg') != null) {
        if (state.interaction.playable.stance == 0) {
          if (state.interaction.playable.angle == 0) {
            document.getElementById('playable_character_svg').classList = ' width_100 height_100 gui_character_left_' + state.interaction.playable.frame + ' position_absolute margin_auto ';
          }

          ;

          if (state.interaction.playable.angle == 1) {
            document.getElementById('playable_character_svg').classList = ' width_100 height_100 gui_character_right_' + state.interaction.playable.frame + ' position_absolute margin_auto ';
          }

          ;
        }

        ;

        if (state.interaction.playable.frame == 4) {
          state.interaction.playable.frame = 0;
        }

        ;
        state.interaction.playable.frame += 1;
      }

      ;

      if (document.getElementById('playable_character') != null) {
        var playable_character = document.getElementById('playable_character');
        playable_character.style = 'height: ' + state.interaction.playable.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.interaction.playable.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.interaction.playable.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.interaction.playable.clientX * state.ux.dimensions.width8 + 'px;';
      }

      ; // player_1
      // motion & stop

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

      ;

      if (document.getElementById('player_1_character_svg') != null) {
        if (state.interaction.player_1.stance == 0) {
          if (state.interaction.player_1.angle == 0) {
            document.getElementById('player_1_character_svg').classList = ' width_100 height_100 gui_character_left_' + state.interaction.player_1.frame + ' position_absolute margin_auto ';
          }

          ;

          if (state.interaction.player_1.angle == 1) {
            document.getElementById('player_1_character_svg').classList = ' width_100 height_100 gui_character_right_' + state.interaction.player_1.frame + ' position_absolute margin_auto ';
          }

          ;
        }

        ;

        if (state.interaction.player_1.frame == 4) {
          state.interaction.player_1.frame = 0;
        }

        ;
        state.interaction.player_1.frame += 1;
      }

      ;

      if (document.getElementById('player_1_character') != null) {
        var player_1_character = document.getElementById('player_1_character');
        player_1_character.style = 'height: ' + state.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.interaction.player_1.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.interaction.player_1.clientX * state.ux.dimensions.width8 + 'px;';
      }

      ; // player_2
      // motion & stop

      if (state.interaction.player_2.cycles.walking == true) {
        // stance: up
        if (state.interaction.player_2.stance == 3) {
          // player walking and pause
          if (state.interaction.player_2.clientY < 3) {
            state.interaction.player_2.clientY += 1 / 16;
          }

          ;
        }

        ; // stance: down

        if (state.interaction.player_2.stance == 2) {
          // player walking and pause
          if (state.interaction.player_2.clientY > -4) {
            state.interaction.player_2.clientY -= 1 / 16;
          }

          ;
        }

        ; // stance: right

        if (state.interaction.player_2.stance == 1) {
          // player walking and pause
          if (state.interaction.player_2.clientX < 8) {
            state.interaction.player_2.clientX += 1 / 16;
          }

          ;
        }

        ; // stance: left

        if (state.interaction.player_2.stance == 0) {
          // player walking and pause
          if (state.interaction.player_2.clientX > 0) {
            state.interaction.player_2.clientX -= 1 / 16;
          }

          ;
        }

        ;
      }

      ; // left

      if (state.interaction.player_2.clientX <= 0 && state.interaction.player_2.cycles.walking == true) {
        state.interaction.player_2.clientX = 0; //state.interaction.player_2.cycles.walking = false;
        // reset face

        state.interaction.player_2.stance = 1; // auto walk

        state.interaction.player_2.clientX += 1 / 16;
      }

      ; // right

      if (state.interaction.player_2.clientX >= 7 && state.interaction.player_2.cycles.walking == true) {
        state.interaction.player_2.clientX = 7; //state.interaction.player_2.cycles.walking = false;
        // reset face

        state.interaction.player_2.stance = 0; // auto walk

        state.interaction.player_2.clientX -= 1 / 16;
      }

      ;

      if (document.getElementById('player_2_character_svg') != null) {
        if (state.interaction.player_2.stance == 0) {
          if (state.interaction.player_2.angle == 0) {
            document.getElementById('player_2_character_svg').classList = ' width_100 height_100 gui_character_left_' + state.interaction.player_2.frame + ' position_absolute margin_auto ';
          }

          ;

          if (state.interaction.player_2.angle == 1) {
            document.getElementById('player_2_character_svg').classList = ' width_100 height_100 gui_character_right_' + state.interaction.player_2.frame + ' position_absolute margin_auto ';
          }

          ;
        }

        ;

        if (state.interaction.player_2.frame == 4) {
          state.interaction.player_2.frame = 0;
        }

        ;
        state.interaction.player_2.frame += 1;
      }

      ;

      if (document.getElementById('player_2_character') != null) {
        var player_2_character = document.getElementById('player_2_character');
        player_2_character.style = 'height: ' + state.interaction.player_2.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.interaction.player_2.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.interaction.player_2.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.interaction.player_2.clientX * state.ux.dimensions.width8 + 'px;';
      }

      ; // enemy
      // motion & stop

      if (state.interaction.enemy.cycles.walking == true) {
        // stance: up
        if (state.interaction.enemy.stance == 3) {
          // player walking and pause
          if (state.interaction.enemy.clientY < 3) {
            state.interaction.enemy.clientY += 1 / 8;
          }

          ;
        }

        ; // stance: down

        if (state.interaction.enemy.stance == 2) {
          // player walking and pause
          if (state.interaction.enemy.clientY > -4) {
            state.interaction.enemy.clientY -= 1 / 8;
          }

          ;
        }

        ; // stance: right

        if (state.interaction.enemy.stance == 1) {
          // player walking and pause
          if (state.interaction.enemy.clientX < 8) {
            state.interaction.enemy.clientX += 1 / 8;
          }

          ;
        }

        ; // stance: left

        if (state.interaction.enemy.stance == 0) {
          // player walking and pause
          if (state.interaction.enemy.clientX > 0) {
            state.interaction.enemy.clientX -= 1 / 8;
          }

          ;
        }

        ;
      }

      ; // left

      if (state.interaction.enemy.clientX <= 0 && state.interaction.enemy.cycles.walking == true) {
        state.interaction.enemy.clientX = 0; //state.interaction.enemy.cycles.walking = false;
        // reset face

        state.interaction.enemy.stance = 1; // auto walk

        state.interaction.enemy.clientX += 1 / 8;
      }

      ; // right

      if (state.interaction.enemy.clientX >= 7 && state.interaction.enemy.cycles.walking == true) {
        state.interaction.enemy.clientX = 7; //state.interaction.enemy.cycles.walking = false;
        // reset face

        state.interaction.enemy.stance = 0; // auto walk

        state.interaction.enemy.clientX -= 1 / 8;
      }

      ;

      if (document.getElementById('enemy_character_svg') != null) {
        if (state.interaction.enemy.stance == 0) {
          if (state.interaction.enemy.angle == 0) {
            document.getElementById('enemy_character_svg').classList = ' width_100 height_100 gui_character_left_' + state.interaction.enemy.frame + ' position_absolute margin_auto ';
          }

          ;

          if (state.interaction.enemy.angle == 1) {
            document.getElementById('enemy_character_svg').classList = ' width_100 height_100 gui_character_right_' + state.interaction.enemy.frame + ' position_absolute margin_auto ';
          }

          ;
        }

        ;

        if (state.interaction.enemy.frame == 4) {
          state.interaction.enemy.frame = 0;
        }

        ;
        state.interaction.enemy.frame += 1;
      }

      ;

      if (document.getElementById('enemy_character') != null) {
        var enemy_character = document.getElementById('enemy_character');
        enemy_character.style = 'height: ' + state.interaction.enemy.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.interaction.enemy.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.interaction.enemy.clientY * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.interaction.enemy.clientX * state.ux.dimensions.width8 + 'px;';
      }

      ; // bounce

      if (state.interaction.bounce.yaxis == 0) {
        state.interaction.bounce.yaxisascending = true;
      }

      ; // yaxisascending: down

      if (state.interaction.bounce.yaxis == 8) {
        state.interaction.bounce.yaxisascending = false;
      }

      ; // xaxisascending: right

      if (state.interaction.bounce.xaxis == 0) {
        state.interaction.bounce.xaxisascending = true;
      }

      ; // xaxisascending: left

      if (state.interaction.bounce.xaxis == 8) {
        state.interaction.bounce.xaxisascending = false;
      }

      ; // yaxisascending: up

      if (state.interaction.bounce.yaxisascending == true) {
        state.interaction.bounce.yaxis += 1 / 8;
      }

      ; // yaxisascending: down

      if (state.interaction.bounce.yaxisascending == false) {
        state.interaction.bounce.yaxis -= 1 / 8;
      }

      ; // xaxisascending: right

      if (state.interaction.bounce.xaxisascending == true) {
        state.interaction.bounce.xaxis += 1 / 8;
      }

      ; // xaxisascending: left

      if (state.interaction.bounce.xaxisascending == false) {
        state.interaction.bounce.xaxis -= 1 / 8;
      }

      ; //stage
      // vr

      if (document.getElementById('vr_mg') != null) {
        document.getElementById('vr_mg').style = "transform: translate3d(" + state.interaction.vr.clientX * 100 + "%, " + state.interaction.vr.clientY * 100 + "%, 0);";
      }

      ;
      state.motion.frame += 1;
      handle_update();
    }, 1000 / state.motion.framerate);
  })();
};

var handle_events = function handle_events() {
  if (body != null) {
    if (document.getElementById('form_submit') != null) {
      // Set firebase data
      setTimeout(function () {
        // wp
        if (document.getElementById('form_login').children[0].children[0] != null) {
          // username
          document.getElementById('form_login').children[0].children[0].children[0].children[1].addEventListener('click', function (event) {//alert(document.getElementById('form_login').children[0].children[0].children[0].children[1].value);
          }); // password

          document.getElementById('form_login').children[0].children[0].children[1].children[1].addEventListener('click', function (event) {//alert(document.getElementById('form_login').children[0].children[0].children[1].children[1].value);
          }); // password

          document.getElementById('form_login').children[0].children[0].children[3].children[0].addEventListener('click', function (event) {
            alert(document.getElementById('form_login').children[0].children[0].children[0].children[1].value);
            alert(document.getElementById('form_login').children[0].children[0].children[1].children[1].value);
          });
        }

        ; // wp register
        // admin

        if (document.getElementById('form_register').children[0] != null) {
          // username
          document.getElementById('form_register').children[0].children[0].children[1].children[1].addEventListener('click', function (event) {
            alert(document.getElementById('form_register').children[0].children[0].children[1].children[1].value);
          });
        }

        ; // wp edit
        // admin

        if (document.getElementById('form_edit').children[1] != null) {
          // username
          document.getElementById('form_edit').children[1].children[0].children[1].children[1].addEventListener('click', function (event) {
            alert(document.getElementById('form_edit').children[1].children[0].children[1].children[1].value);
          });
        }

        ; // admin

        if (document.getElementById('form_edit').children[0] != null) {
          // username
          document.getElementById('form_edit').children[0].children[0].children[1].children[1].addEventListener('click', function (event) {
            alert(document.getElementById('form_edit').children[0].children[0].children[1].children[1].value);
          });
        }

        ; // before post was made

        if (document.getElementById('form_submit').children[0].children[1] != null) {
          document.getElementById('form_submit').children[0].children[1].children[6].addEventListener('click', function (event) {
            localStorage.setItem("post_made", "true");
            localStorage.setItem("last_post_made", random_id);
            firebase_add_Listings('wp_to_fb_posts');
            alert('form_submit');
          });
          document.getElementById('form_submit').children[0].children[1].children[5].children[1].children[0].value = "".concat(random_id);
        }

        ; // after post was made

        if (document.getElementById('form_submit').children[0].children[1] == null) {
          document.getElementById('form_submit').children[0].children[0].children[6].addEventListener('click', function (event) {
            localStorage.setItem("post_made", "true");
            localStorage.setItem("last_post_made", random_id);
            firebase_add_Listings('wp_to_fb_posts');
            alert('form_submit');
          });
          document.getElementById('form_submit').children[0].children[0].children[5].children[1].children[0].value = "".concat(random_id);
        }

        ;
      }, 5000);
    }

    ; // filter by title

    if (document.getElementById('element_addListing') != null) {
      document.getElementById('element_addListing').addEventListener('click', function (event) {
        firebase_add_Listings('library');
      });
    }

    ; // create

    if (document.getElementById('element_addRoster') != null) {
      document.getElementById('element_addRoster').addEventListener('click', function (event) {
        firebase_add_Listings('roster');
      });
    }

    ;

    if (document.getElementById('element_addMessages') != null) {
      document.getElementById('element_addMessages').addEventListener('click', function (event) {
        firebase_add_Listings('messages');
      });
    }

    ;

    if (document.getElementById('element_addStream') != null) {
      document.getElementById('element_addStream').addEventListener('click', function (event) {
        firebase_add_Listings('stream');
      });
    }

    ;

    if (document.getElementById('element_addActivity') != null) {
      document.getElementById('element_addActivity').addEventListener('click', function (event) {
        firebase_add_Listings('activity');
      });
    }

    ;

    if (document.getElementById('element_addInteraction') != null) {
      document.getElementById('element_addInteraction').addEventListener('click', function (event) {
        firebase_add_Listings('interaction');
      });
    }

    ;

    if (document.getElementById('login_submit') != null) {
      document.getElementById('login_submit').addEventListener('click', function (event) {
        // filter library
        setTimeout(function () {
          check_login();
          check_user_input_login();
        }, 0);
      });
    }

    ;

    if (document.getElementById('logout_submit') != null) {
      document.getElementById('logout_submit').addEventListener('click', function (event) {
        // filter library
        setTimeout(function () {
          check_user_input_logout();
        }, 0);
      });
    }

    ;

    if (document.getElementById('wp_input_author_name_filter') != null) {
      document.getElementById('wp_input_author_name_filter').addEventListener('keydown', function (event) {
        // filter library
        setTimeout(function () {
          wp_render();
        }, 0);
      });
    }

    ;

    if (document.getElementById('wp_input_title_filter') != null) {
      document.getElementById('wp_input_title_filter').addEventListener('keydown', function (event) {
        // filter library
        setTimeout(function () {
          wp_render();
        }, 0);
      });
    }

    ;

    if (document.getElementById('fb_input_author_name_filter') != null) {
      document.getElementById('fb_input_author_name_filter').addEventListener('keydown', function (event) {
        // filter library
        setTimeout(function () {
          fb_render();
        }, 0);
      });
    }

    ;

    if (document.getElementById('fb_input_title_filter') != null) {
      document.getElementById('fb_input_title_filter').addEventListener('keydown', function (event) {
        // filter library
        setTimeout(function () {
          fb_render();
        }, 0);
      });
    }

    ; // scroll

    body.addEventListener('scroll', function (event) {}); // events

    body.addEventListener('keydown', function (event) {
      if (event.keyCode == 27) {
        wp_refresh();
        history.pushState("", document.title, "/");
      }

      ;

      if (event.keyCode == 13) {
        state.modal.nav.top.transform = !state.modal.nav.top.transform; //state.modal.pip.top.transform = !state.modal.pip.top.transform;
        //state.modal.pip.bottom.transform = !state.modal.pip.bottom.transform;
        //state.modal.pip.left.transform = !state.modal.pip.left.transform;
        //state.modal.pip.right.transform = !state.modal.pip.right.transform;
        //state.modal.page.top.transform = !state.modal.page.top.transform;
        //state.modal.gradient.top.transform = !state.modal.gradient.top.transform;
        //state.modal.morph.top.transform = !state.modal.morph.top.transform;
        //state.modal.pop.top.transform = !state.modal.pop.top.transform;

        state.modal.menu.left.transform = !state.modal.menu.left.transform; //state.gui.top.transform = !state.gui.top.transform;

        state.gui.top_left.transform = !state.gui.top_left.transform; //state.gui.top_right.transform = !state.gui.top_right.transform;
        //state.gui.left.transform = !state.gui.left.transform;
        //state.gui.right.transform = !state.gui.right.transform;
        //state.gui.bottom.transform = !state.gui.bottom.transform;
        //state.gui.bottom_left.transform = !state.gui.bottom_left.transform;
        //state.gui.bottom_right.transform = !state.gui.bottom_right.transform;

        handle_update(); // filter by title

        if (document.getElementById('element_addListing') != null) {
          document.getElementById('element_addListing').addEventListener('click', function (event) {
            firebase_add_listings('library');
          });
        }

        ;
      }

      ;

      if (event.keyCode == 37) {
        pagination_start += 1;
        check_user_input_login();
      }

      ;

      if (event.keyCode == 38) {
        pagination_end += 1;
        check_user_input_login();
      }

      ;

      if (event.keyCode == 39) {
        pagination_start -= 1;
        check_user_input_login();
      }

      ;

      if (event.keyCode == 40) {
        pagination_end -= 1;
        check_user_input_login();
      }

      ;
    });
    /* scroll
    document.getElementById('scrollable_x').addEventListener('scroll', (event) => {
        events.handle_Function_Scroll(event);
        handle_ReturnedState_fromEvents();
    });
     document.getElementById('scrollable_y').addEventListener('scroll', (event) => {
        events.handle_Function_Scroll(event);
        handle_ReturnedState_fromEvents();
    });
    */
    // events

    body.addEventListener('keydown', function (event) {
      _events.default.handle_Function_Key_Down(event);

      handle_ReturnedState_fromEvents(); //sound_1.play();
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
    body.addEventListener('mousedown', function (event) {//events.handle_Function_Mouse_Down(event);
      //handle_ReturnedState_fromEvents();
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
  }

  ;
};

var sequence_Load = function sequence_Load() {
  state.data.route += 1;
  console.log(state.data.route);

  if (state.data.route == 1) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_relative margin_auto width_1205 height_1vw float_left";
    check_localStorage();
    fb_validation;
    wp_validation;
    /* after fb_validation
    setTimeout(function() {
        sequence_Load();
    }, 0);
    */
  }

  ;

  if (state.data.route == 2) {
    if (selected_wp_id != 0) {
      for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
        if (state.data.firebase.gnougn.library[i].wp_id != null) {
          if (state.data.firebase.gnougn.library[i].wp_id == selected_wp_id) {
            alert('post found');
          }

          ;
        }

        ;
      }

      ;
    }

    ;
    document.getElementById('load_bar_container_border').classList = "easing_01 position_relative margin_auto width_25 height_1vw float_left"; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;

  if (state.data.route == 3) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_relative margin_auto width_3705 height_1vw float_left"; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;

  if (state.data.route == 4) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_relative margin_auto width_50 height_1vw float_left"; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;

  if (state.data.route == 5) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_relative margin_auto width_6205 height_1vw float_left"; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;

  if (state.data.route == 6) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_relative margin_auto width_75 height_1vw float_left"; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;

  if (state.data.route == 7) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_relative margin_auto width_8705 height_1vw float_left"; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;

  if (state.data.route == 8) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_relative margin_auto width_100 height_1vw float_left";
    document.getElementById('logo_mark').classList = "enterBottomvh animated1 delay1 gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto";
    document.getElementById('lead').innerHTML = ""; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;

  if (state.data.route == 9) {
    document.getElementById('load_bar_container').classList = "animated1 leaveBottom position_fixed bottom_0 margin_auto width_100 height_1vw float_left z_index_1"; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 1000);
  }

  ;

  if (state.data.route == 10) {
    document.getElementById('buffer').classList = "display_none position_relative float_left width_100vw height_100 bg_white";
    document.getElementById('cardboard').classList = "width_100 height_100vh position_fixed top_0 left_0 right_0 float_left z_index_-1"; // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;

  if (state.data.route == 11) {
    sound_effect_beep.play(); // refresh library

    setTimeout(function () {
      sequence_Load();
    }, 100);
  }

  ;
};

var wp_json = function wp_json(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
};

var dev = true;
firebase.initializeApp(config); // firebase libraris

var fb_writable = false;
var fb_response = {};
var fb_library = [];
var fb_filtered_library_by_title = [];

var fb_refresh = function fb_refresh() {
  var rootRef = firebase.database().ref();
  fb_writable = true;
  fb_response = {};

  (function () {
    rootRef.on('value', function (snapshot) {
      var obj = snapshot.val();
      state.data.firebase = obj;
      console.log('fb_refresh(): has updated -> state.data.firebase');
      console.log(state.data.firebase);
    });
  })();
};

var fb_render = function fb_render() {
  // render library
  (function () {
    setTimeout(function () {
      //handle_empty_list();
      //document.getElementById('wp_library_ol').innerHTML = ``;
      document.getElementById('fb_sorted_library_by_time_up_ol').innerHTML = "";
      document.getElementById('fb_sorted_library_by_time_down_ol').innerHTML = "";
      document.getElementById('fb_library_ol').innerHTML = "";
      document.getElementById('filtered_library_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_library_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_roster_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_interaction_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_activity_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_messages_by_title_ol').innerHTML = "";
      document.getElementById('filtered_library_child_stream_by_title_ol').innerHTML = "";
      /*
      document.getElementById('sorted_library_by_time_up_ol').innerHTML = ``;
      document.getElementById('filtered_wp_library_by_title_ol').innerHTML = ``;
      */
      //wp_library = [];

      fb_library = []; //wp_filtered_library_by_title = [];

      fb_filtered_library_by_title = []; //sorted_library_by_time_up = [];

      if (fb_response != null) {
        // create array
        if (document.getElementById('fb_library_ol') != null) {
          for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
            fb_library.push(state.data.firebase.gnougn.library[i]);
          }

          ; // render array

          for (var i = 0; i < fb_library.length; i++) {
            document.getElementById('fb_library_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
          }

          ;
        }

        ; // create array

        if (document.getElementById('filtered_library_by_title_ol') != null) {
          for (var i = 0; i < fb_library.length; i++) {
            if (fb_library[i].title.toString().toLowerCase().includes(document.getElementById('fb_input_title_filter').value.toString().toLowerCase()) && fb_library[i].username.toString().toLowerCase().includes(document.getElementById('fb_input_author_name_filter').value.toString().toLowerCase())) {
              fb_filtered_library_by_title.push(fb_library[i]);
            }

            ;
            console.log('fb_filtered_library_by_title[i]');
            console.log(fb_filtered_library_by_title[i]);
          }

          ;
        }

        ; // render array

        for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
          document.getElementById('filtered_library_by_title_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
        }

        ; // render array

        for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
          if (fb_filtered_library_by_title[i].child == 'roster') {
            document.getElementById('filtered_library_child_roster_by_title_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
          if (fb_filtered_library_by_title[i].child == 'interaction') {
            document.getElementById('filtered_library_child_interaction_by_title_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
          if (fb_filtered_library_by_title[i].child == 'activity') {
            document.getElementById('filtered_library_child_activity_by_title_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
          if (fb_filtered_library_by_title[i].child == 'messages') {
            document.getElementById('filtered_library_child_messages_by_title_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
          if (fb_filtered_library_by_title[i].child == 'stream') {
            document.getElementById('filtered_library_child_stream_by_title_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
          if (fb_filtered_library_by_title[i].child == 'library') {
            document.getElementById('filtered_library_child_library_by_title_ol').appendChild(_functions.default.Generate_new_li_post(fb_library[i]));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < fb_sorted_library('timeup').length; i++) {
          document.getElementById('fb_sorted_library_by_time_up_ol').appendChild(_functions.default.Generate_new_li_post(fb_sorted_library('timeup')[i]));
        }

        ; // render array

        for (var i = 0; i < fb_sorted_library('timedown').length; i++) {
          document.getElementById('fb_sorted_library_by_time_down_ol').appendChild(_functions.default.Generate_new_li_post(fb_sorted_library('timedown')[i]));
        }

        ; // refresh library

        check_login();
        check_user_input_login();
      }

      ;
    }, 0);
  })();
};

var fb_validation = setInterval(function () {
  if (fb_writable == true) {
    fb_response = state.data.firebase; // target "gnougn" library

    if (fb_response.gnougn.library != null) {
      // "stops" setInterval
      fb_writable = false;
      var result_library = Object.keys(fb_response.gnougn.library).map(function (key) {
        return fb_response.gnougn.library[key];
      }); // we got an array from fb data

      fb_response.gnougn.library = result_library;
      console.log('fb_validation(): has updated -> fb_response.gnougn.library');
      console.log(fb_response.gnougn.library);

      if (fb_writable == false) {
        setTimeout(function () {
          //handle_localStorage();
          fb_render(); //console.clear();

          if (dev) {//alert('connected!');
          }

          ;
        }, 0);

        if (localStorage.username == 'local_user') {
          if (dev) {//alert('this is a new local user: ' + localStorage.username);
          }

          ;
        }

        ;

        if (localStorage.username != 'local_user') {
          if (dev) {//alert('this is a not new local user: ' + localStorage.username);
          }

          ; //local_login();
        }

        ;

        if (fb_inital_load == true) {
          fb_inital_load = false;

          if (dev) {
            //alert('first firebase load');
            // refresh library
            setTimeout(function () {
              sequence_Load();
            }, 0);
          }

          ;
          return;
        }

        ;

        if (fb_inital_load == false) {
          if (dev) {//alert('not first firebase load');
          }

          ;
          return;
        }

        ;
      }

      ;
    }

    ;
  }

  ;
  /*
   if (fb_writable == true) {
       fb_response = state.data.firebase;
       // target "gnougn" library
      if ((fb_response.gnougn.library) != null) {
          
          // "stops" setInterval
          fb_writable = false;
          let result_library = Object.keys(
              fb_response.gnougn.library).map(
              function(key) {
                  return fb_response.gnougn.library[key];
              }
          );
          
          // we got an array from fb data
          fb_response.gnougn.library = result_library;
          console.log('fb_validation(): has updated -> fb_response.gnougn.library');
          console.log(fb_response.gnougn.library);
           if (fb_writable == false) {
               setTimeout(function() {
                  //handle_localStorage();
                  fb_render();
                  //console.clear();
                  if (dev) {
                      alert('connected!');
                  };
                   setTimeout(() => {
                      sequence_Load();
                  }, 1000);
               }, 0);
               if(localStorage.username == 'local_user') {
                  if (dev) {
                      alert('this is a new local user: ' + localStorage.username);
                  };
              };
               if(localStorage.username != 'local_user') {
                  if (dev) {
                      alert('this is a not new local user: ' + localStorage.username);
                  };
                  //local_login();
              };
               if (fb_inital_load == true) {
                  fb_inital_load = false;
                  if (dev) {
                      alert('first firebase load');
                  };
                  return;
              };
               if (fb_inital_load == false) {
                  if (dev) {
                      alert('not first firebase load');
                  };
                  return;
              };
           };
       };
   };
  */
}, 1000 / 24); // wp libraris

var wp_library = [];
var wp_filtered_library_by_title = [];

var wp_refresh = function wp_refresh() {
  wp_json('https://antenuh.com/feed/json', function (err, data) {
    console.log('wp_json');

    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      console.log('wp count: ' + data.items);
      state.data.wordpress = data.items;

      for (var i = 0; i < state.data.wordpress.length; i++) {
        var wp_post = state.data.wordpress[i];
        console.log(wp_post);
      }

      ;
      wp_writable = true;
    }

    ;
  });
};

var wp_render = function wp_render() {
  // render library
  (function () {
    setTimeout(function () {
      //handle_empty_list();
      document.getElementById('wp_library_ol').innerHTML = "";
      document.getElementById('filtered_wp_library_by_title_ol').innerHTML = "";
      wp_library = [];
      wp_filtered_library_by_title = [];

      if (state.data.wordpress != null) {
        // create array
        if (document.getElementById('wp_library_ol') != null) {
          for (var i = 0; i < state.data.wordpress.length; i++) {
            wp_library.push(state.data.wordpress[i]);
          }

          ; // render array

          for (var i = 0; i < wp_library.length; i++) {
            document.getElementById('wp_library_ol').appendChild(_functions.default.Generate_new_wp_li_post(wp_library[i]));
          }

          ;
        }

        ; // create array

        if (document.getElementById('filtered_wp_library_by_title_ol') != null) {
          for (var i = 0; i < wp_library.length; i++) {
            if (wp_library[i].title.toString().toLowerCase().includes(document.getElementById('wp_input_title_filter').value.toString().toLowerCase()) && wp_library[i].author.name.toString().toLowerCase().includes(document.getElementById('wp_input_author_name_filter').value.toString().toLowerCase())) {
              wp_filtered_library_by_title.push(wp_library[i]);
              console.log('wp_library[i] pushed to wp_filtered_library_by_title');
              console.log(wp_library[i]);
            }

            ;
          }

          ;
        }

        ; // render array

        for (var i = 0; i < wp_filtered_library_by_title.length; i++) {
          document.getElementById('filtered_wp_library_by_title_ol').appendChild(_functions.default.Generate_new_wp_li_post(wp_library[i]));
        }

        ;
      }

      ;
    }, 0);
  })();
};

var wp_writable = false;
var wp_validation = setInterval(function () {
  if (wp_writable == true) {
    // target "gnougn" library
    if (state.data.wordpress != null) {
      // "stops" setInterval
      wp_writable = false;
      var result_library = Object.keys(state.data.wordpress).map(function (key) {
        return state.data.wordpress[key];
      }); // we got an array from fb data

      state.data.wordpress = result_library;
      console.log('wp_validation(): has updated -> state.data.wordpress');
      console.log(state.data.wordpress); // now that wp has been updated

      if (wp_writable == false) {
        setTimeout(function () {
          //handle_localStorage();
          wp_render(); //console.clear();

          if (dev) {//alert('connected!');
          }

          ;
        }, 0);

        if (localStorage.username == 'local_user') {
          if (dev) {//alert('this is a new local user: ' + localStorage.username);
          }

          ;
        }

        ;

        if (localStorage.username != 'local_user') {
          if (dev) {//alert('this is a not new local user: ' + localStorage.username);
          }

          ; //local_login();
        }

        ;

        if (wp_inital_load == true) {
          wp_inital_load = false;

          if (dev) {//alert('first firebase load');
          }

          ;
          return;
        }

        ;

        if (wp_inital_load == false) {
          if (dev) {//alert('not first firebase load');
          }

          ;
          return;
        }

        ;
      }

      ;
    }

    ;
  }

  ;
}, 1000 / 24); // sorting

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

var fb_sorted_library = function fb_sorted_library(x) {
  return fb_filtered_library_by_title.sort(find_sort(x));
};

var wp_sorted_library = function wp_sorted_library(x) {
  return wp_filtered_library_by_title.sort(find_sort(x));
};

var check_localStorage = function check_localStorage() {
  if (localStorage.user == null) {
    var placeholder_user = {
      "username": "local_user",
      "password": "xxx",
      "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg",
      "post_made": "false"
    };
    localStorage.setItem("user", placeholder_user);
    localStorage.setItem("username", placeholder_user.username);
    localStorage.setItem("password", placeholder_user.password);
    localStorage.setItem("post_made", "false"); //alert('welcome first timer');

    return;
  }

  ;

  if (localStorage.user != null && localStorage.username == 'local_user') {
    //alert('welcome bax new user');
    return;
  }

  ;

  if (localStorage.user != null && localStorage.username != 'local_user') {
    document.getElementById('login_username_input').value = localStorage.username;
    document.getElementById('login_password_input').value = localStorage.password; //alert('welcome bax, username: ' + localStorage.username + '. password: ' + localStorage.password);

    return;
  }

  ;
};

var validated_user = {};
var pagination_start = 0;
var pagination_end = 12;

var check_login = function check_login() {
  localStorage.setItem("username", document.getElementById('login_username_input').value);
  localStorage.setItem("password", document.getElementById('login_password_input').value);
};

var check_user_input_login = function check_user_input_login() {
  //alert('check_user_input_login: ' + localStorage.username);
  // render array
  if (localStorage.username != 'local_user') {
    //alert('logging on');
    for (var i = 0; i < fb_library.length; i++) {
      if (fb_library[i].child == 'roster') {
        if (fb_library[i].username == localStorage.username) {
          //alert('username found');
          if (localStorage.password != fb_library[i].password) {
            //alert(localStorage.username + ' your password: ' + localStorage.username + 'is not correct');
            // password does not match
            localStorage.setItem("username", 'local_user');
            localStorage.setItem("password", "xxx");
            localStorage.setItem("post_made", "false");
            document.getElementById('login_user_info').innerHTML = "please retry password: ".concat(localStorage.username);
          }

          ;

          if (localStorage.password == fb_library[i].password) {
            //alert(localStorage.username + ' your password: ' + localStorage.username + 'is correct');
            state.data.validated_user = fb_library[i]; // password match

            localStorage.setItem("user", state.data.validated_user);
            localStorage.setItem("username", state.data.validated_user.username);
            localStorage.setItem("password", state.data.validated_user.password);
            localStorage.setItem("post_made", "false");
            document.getElementById('login_user_info').innerHTML = "welcome back: ".concat(state.data.validated_user.username, "</br>");
            document.getElementById('validated_user').innerHTML = "username: ".concat(state.data.validated_user.username, "</br>");
            document.getElementById('validated_user').innerHTML += "password: ".concat(state.data.validated_user.password, "</br>");
            document.getElementById('validated_user').innerHTML += "avatar: ".concat(state.data.validated_user.avatar, "</br>");
            document.getElementById('validated_user').innerHTML += "shares: ".concat(state.data.validated_user.shares, "</br>");
            document.getElementById('validated_user').innerHTML += "shared: ".concat(state.data.validated_user.shared, "</br>");
            document.getElementById('validated_user').innerHTML += "likes: ".concat(state.data.validated_user.likes, "</br>");
            document.getElementById('validated_user').innerHTML += "liked: ".concat(state.data.validated_user.liked, "</br>");
            document.getElementById('validated_user').innerHTML += "time: ".concat(state.data.validated_user.time, "</br>");
            document.getElementById('validated_user').innerHTML += "lastlog: ".concat(state.data.validated_user.lastlog, "</br>");
            document.getElementById('validated_user').innerHTML += "views: ".concat(state.data.validated_user.views, "</br>");
            document.getElementById('validated_user').innerHTML += "viewed: ".concat(state.data.validated_user.viewed, "</br>");
            document.getElementById('validated_user').innerHTML += "commented: ".concat(state.data.validated_user.commented, "</br>");
            document.getElementById('validated_user').innerHTML += "comments: ".concat(state.data.validated_user.comments.length, "</br>");
            document.getElementById('validated_user').innerHTML += "followers: ".concat(state.data.validated_user.followers.length, "</br>");
            document.getElementById('validated_user').innerHTML += "follows: ".concat(state.data.validated_user.follows.length, "</br>");

            for (var i = 0; i < state.data.validated_user.tags.length; i++) {
              document.getElementById('validated_user').innerHTML += "tag: ".concat(state.data.validated_user.tags[i], "</br>");
            }

            ;

            var random_tag = function random_tag() {
              var tag = Math.floor(Math.random() * state.data.validated_user.tags.length) + 0;
              return tag;
            };

            for (var i = 0; i < pagination_end; i++) {
              if (i > pagination_start) {
                document.getElementById('validated_user').innerHTML += "random tag: ".concat(state.data.validated_user.tags[random_tag()], "</br>");
              }

              ;
            }

            ;
            document.getElementById('validated_user').innerHTML += "views: ".concat(state.data.validated_user.views, "</br>"); // render array

            document.getElementById('validated_user_posts').innerHTML = "";

            for (var i = 0; i < fb_library.length; i++) {
              if (fb_library[i].child == 'library') {
                if (fb_library[i].username == state.data.validated_user.username) {
                  document.getElementById('validated_user_posts').innerHTML += "\n                                <li class=\"bg_grey\">\n                                    <p class=\"font_size_205vw color_white\">title:".concat(fb_library[i].title, "</p>\n                                    <p class=\"font_size_205vw color_white\">time:").concat(fb_library[i].time, "</p>\n                                </li>");
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

    ;
  }

  ;

  if (localStorage.username == 'local_user') {
    document.getElementById('login_user_info').innerHTML = "please create an account or login";
  }

  ;
};

var check_user_input_logout = function check_user_input_logout() {
  var placeholder_user = {
    "username": "local_user",
    "password": "xxx",
    "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg",
    "post_made": "false"
  };
  localStorage.setItem("user", placeholder_user);
  localStorage.setItem("username", placeholder_user.username);
  localStorage.setItem("password", placeholder_user.password);
  localStorage.setItem("post_made", "false");
  document.getElementById('login_user_info').innerHTML = "please log back in: ".concat(state.data.validated_user.username);
  document.getElementById('validated_user').innerHTML = "";
};

var randomize_id = function randomize_id() {
  var id = Math.floor(Math.random() * 999999) + 1;
  return id;
};

var random_id = randomize_id();

var check_url = function check_url() {
  var parts = location.pathname.split('/');
  window.scrollTo(0, 0);
  console.log(parts[1]);

  if (parts[1] != null) {
    if (parts[1] == '') {
      console.log('just stay at the home page'); //h1.innerHTML = `<a href="https://www.nownigel.com">nownigel</a>`
      //h2.innerHTML = `UI / UX engineer, motion artist and graphic designer`
      //h3.innerHTML = `Videos, Graphics and Interactables`
      //h4.innerHTML = `Desktop, Mobile & VR`
      //h5.innerHTML = `Made with Javascript, HTML & CSS`
      //h6.innerHTML = `New all original content everyday`
    }

    ;

    if (parts[1] == 'p') {
      console.log('going to post page');

      if (parts[2] != null) {
        console.log('post id: ' + parts[2]);
      }

      ; //document.getElementsByTagName('meta')["keywords"].content = "fortnite";

      document.getElementsByTagName('meta')["description"].content = "fortnite description";
      document.title = "fortnite is here!";
      h1.innerHTML = "<a href=\"https://www.nownigel.com\">fortnite</a>";
      h2.innerHTML = "UI / UX engineer, motion artist and graphic designer";
      h3.innerHTML = "Videos, Graphics and Interactables";
      h4.innerHTML = "Desktop, Mobile & VR";
      h5.innerHTML = "Made with Javascript, HTML & CSS";
      h6.innerHTML = "New all original content everyday";
    }

    ;

    if (parts[1] == 'x') {
      console.log('going to post page');

      if (parts[2] != null) {
        console.log('post id: ' + parts[2]);
      }

      ; //document.getElementsByTagName('meta')["keywords"].content = "taylor";

      document.getElementsByTagName('meta')["description"].content = "taylor description";
      document.title = "taylor is here!";
      h1.innerHTML = "<a href=\"https://www.nownigel.com\">taylor</a>";
      h2.innerHTML = "UI / UX engineer, motion artist and graphic designer";
      h3.innerHTML = "Videos, Graphics and Interactables";
      h4.innerHTML = "Desktop, Mobile & VR";
      h5.innerHTML = "Made with Javascript, HTML & CSS";
      h6.innerHTML = "New all original content everyday";
    }

    ;

    if (parts[1] != 'p' && parts[1] != '') {
      console.log('going to user page');

      if (parts[1] != null) {
        console.log('user id: ' + parts[1]);
      }

      ;
    }

    ;
  }

  ;
};

var handle_ReturnState = function handle_ReturnState() {
  return state;
};

document.addEventListener("DOMContentLoaded", function () {
  //document.getElementById('cardboard').classList = `width_100 height_100vh position_fixed top_0 left_0 right_0 float_left z_index_-1`
  document.getElementById('bg_scene').classList = "width_100 height_100 position_fixed top_0 left_0 right_0 float_left z_index_-1";
  document.getElementById('load_bar_container').classList = "position_fixed bottom_0 margin_auto width_100 height_1vw float_left z_index_1";
  check_url();
  fb_refresh();
  wp_refresh();
});
window.addEventListener("load", function () {
  //alert('2.0');
  handle_update();
  handle_events();
  handle_add_status_events();
  handle_animation();
  handle_onload_time();
  handle_time();
  var parts = location.pathname.split('/');
  window.scrollTo(0, 0);
  console.log(parts[1]);

  if (parts[1] != null) {
    alert('localStorage.last_post_made' + localStorage.last_post_made);

    if (parts[1] == '') {
      console.log('just stay at the home page');
    }

    ;

    if (parts[1] == 'w') {
      console.log('going to post page');
      alert(document.getElementById('wp_to_fb_posts_id').children[0].children[0].innerHTML);
      selected_wp_id = document.getElementById('wp_to_fb_posts_id').children[0].children[0].innerHTML;
    }

    ;

    if (parts[1] == 'p') {
      console.log('going to post page');

      if (parts[2] != null) {
        console.log('post id: ' + parts[2]);
      }

      ;
    }

    ;

    if (parts[1] != 'p' && parts[1] != '') {
      console.log('going to user page');

      if (parts[1] != null) {
        console.log('user id: ' + parts[1]);
      }

      ;
    }

    ;
  }

  ;
  sequence_Load();
});

window.onresize = function () {
  var _state$ux;

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
  }, _defineProperty(_state$ux, "platform", {
    is_Desktop: false,
    is_Mobile: false
  }), _defineProperty(_state$ux, "browser", {
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
  console.log('resize');
};

window.ondevicemotion = function (event) {};

window.ondeviceorientation = function (event) {};

window.onorientationchange = function () {};

window.onbeforeunload = function () {};

var _default = {
  handle_ReturnState: handle_ReturnState,
  check_url: check_url,
  handle_Sequence_Game_Enter: handle_Sequence_Game_Enter,
  handle_Sequence_Game_Exit: handle_Sequence_Game_Exit
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/functions":"imports/functions.js","./imports/events":"imports/events.js","./imports/components":"imports/components.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49370" + '/');

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
//# sourceMappingURL=/an_app.e31bb0bc.map