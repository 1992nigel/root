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
},{"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.58909d32.svg","assets/gui/gui_link_grid_white.svg"],"assets/gui/gui_link_grid_white.svg"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.8b15c689.svg","assets/gui/gui_link_menu_white.svg"],"assets/gui/gui_link_menu_white.svg"],"./assets/gui/gui_link_sign_up_white.svg":[["gui_link_sign_up_white.86d9072f.svg","assets/gui/gui_link_sign_up_white.svg"],"assets/gui/gui_link_sign_up_white.svg"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.fc375cc1.svg","assets/gui/gui_link_sign_in_white.svg"],"assets/gui/gui_link_sign_in_white.svg"],"./assets/gui/gui_link_post_white.svg":[["gui_link_post_white.ef6a2eb5.svg","assets/gui/gui_link_post_white.svg"],"assets/gui/gui_link_post_white.svg"],"./assets/gui/gui_link_message_white.svg":[["gui_link_message_white.8222fa8d.svg","assets/gui/gui_link_message_white.svg"],"assets/gui/gui_link_message_white.svg"],"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.2afa39a6.svg","assets/gui/gui_link_home_white.svg"],"assets/gui/gui_link_home_white.svg"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.23391bca.svg","assets/gui/gui_link_gear_white.svg"],"assets/gui/gui_link_gear_white.svg"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.2fd07b39.svg","assets/gui/gui_link_house_white.svg"],"assets/gui/gui_link_house_white.svg"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.27850d9e.svg","assets/gui/gui_link_close_white.svg"],"assets/gui/gui_link_close_white.svg"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.de148a15.svg","assets/gui/gui_link_min_white.svg"],"assets/gui/gui_link_min_white.svg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.f033010f.svg","assets/gui/gui_link_max_white.svg"],"assets/gui/gui_link_max_white.svg"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.179c3b09.svg","assets/gui/gui_link_dots_white.svg"],"assets/gui/gui_link_dots_white.svg"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.a1d8f80c.svg","assets/gui/gui_interaction_button_1.svg"],"assets/gui/gui_interaction_button_1.svg"],"./assets/gui/gui_interaction_button_start.svg":[["gui_interaction_button_start.5cb2f15d.svg","assets/gui/gui_interaction_button_start.svg"],"assets/gui/gui_interaction_button_start.svg"],"./assets/gui/gui_interaction_button_learn.svg":[["gui_interaction_button_learn.0a53d1d8.svg","assets/gui/gui_interaction_button_learn.svg"],"assets/gui/gui_interaction_button_learn.svg"],"./assets/gui/gui_interaction_text_or.svg":[["gui_interaction_text_or.2d029656.svg","assets/gui/gui_interaction_text_or.svg"],"assets/gui/gui_interaction_text_or.svg"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.63c56e34.svg","assets/gui/gui_interaction_text_press.svg"],"assets/gui/gui_interaction_text_press.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.e0631923.svg","assets/gui/gui_stage_desk.svg"],"assets/gui/gui_stage_desk.svg"],"./assets/gui/gui_character_message_box.svg":[["gui_character_message_box.47192970.svg","assets/gui/gui_character_message_box.svg"],"assets/gui/gui_character_message_box.svg"],"./assets/gui/gui_character_right_1.svg":[["gui_character_right_1.c745c328.svg","assets/gui/gui_character_right_1.svg"],"assets/gui/gui_character_right_1.svg"],"./assets/gui/gui_character_right_2.svg":[["gui_character_right_2.5cfcf5ac.svg","assets/gui/gui_character_right_2.svg"],"assets/gui/gui_character_right_2.svg"],"./assets/gui/gui_character_right_3.svg":[["gui_character_right_3.8dc2166e.svg","assets/gui/gui_character_right_3.svg"],"assets/gui/gui_character_right_3.svg"],"./assets/gui/gui_character_right_4.svg":[["gui_character_right_4.d7c48548.svg","assets/gui/gui_character_right_4.svg"],"assets/gui/gui_character_right_4.svg"],"./assets/gui/gui_character_left_1.svg":[["gui_character_left_1.c87b49f6.svg","assets/gui/gui_character_left_1.svg"],"assets/gui/gui_character_left_1.svg"],"./assets/gui/gui_character_left_2.svg":[["gui_character_left_2.61be681d.svg","assets/gui/gui_character_left_2.svg"],"assets/gui/gui_character_left_2.svg"],"./assets/gui/gui_character_left_3.svg":[["gui_character_left_3.056adc88.svg","assets/gui/gui_character_left_3.svg"],"assets/gui/gui_character_left_3.svg"],"./assets/gui/gui_character_left_4.svg":[["gui_character_left_4.aae0b84b.svg","assets/gui/gui_character_left_4.svg"],"assets/gui/gui_character_left_4.svg"],"./assets/gui/gui_character_right_face.svg":[["gui_character_right_face.42766739.svg","assets/gui/gui_character_right_face.svg"],"assets/gui/gui_character_right_face.svg"],"./assets/gui/gui_character_left_face.svg":[["gui_character_left_face.f15e919d.svg","assets/gui/gui_character_left_face.svg"],"assets/gui/gui_character_left_face.svg"],"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/socials/twitter_handdrawn.svg":[["twitter_handdrawn.4dd6e273.svg","assets/socials/twitter_handdrawn.svg"],"assets/socials/twitter_handdrawn.svg"],"./assets/socials/twitch_handdrawn.svg":[["twitch_handdrawn.a0ceaf56.svg","assets/socials/twitch_handdrawn.svg"],"assets/socials/twitch_handdrawn.svg"],"./assets/socials/youtube_handdrawn.svg":[["youtube_handdrawn.24d23384.svg","assets/socials/youtube_handdrawn.svg"],"assets/socials/youtube_handdrawn.svg"],"./assets/socials/instagram_handdrawn.svg":[["instagram_handdrawn.f326c03a.svg","assets/socials/instagram_handdrawn.svg"],"assets/socials/instagram_handdrawn.svg"],"./assets/socials/facebook_handdrawn.svg":[["facebook_handdrawn.2a2e1213.svg","assets/socials/facebook_handdrawn.svg"],"assets/socials/facebook_handdrawn.svg"],"./assets/gradient/grey_top.svg":[["grey_top.d8e034e1.svg","assets/gradient/grey_top.svg"],"assets/gradient/grey_top.svg"],"./assets/gradient/white_top.svg":[["white_top.ce87e304.svg","assets/gradient/white_top.svg"],"assets/gradient/white_top.svg"],"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.6dec167e.woff","assets/fonts/Silkscreen.ttf.woff"],"assets/fonts/Silkscreen.ttf.woff"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.a45ae991.svg","assets/fonts/Silkscreen.ttf.svg"],"assets/fonts/Silkscreen.ttf.svg"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.be6987ea.eot","assets/fonts/Silkscreen.ttf.eot"],"assets/fonts/Silkscreen.ttf.eot"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/functions.js":[function(require,module,exports) {
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
  var state = _index.default.Handle_return_state();

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
  var state = _index.default.Handle_return_state();

  var element = document.createElement('li');
  element.setAttribute("id", data_Object.title);
  element.classList = data_Object.title;
  element.innerHTML = "\n        ".concat('title: ' + data_Object.title, "\n      ");
  element.addEventListener("click", function (event) {
    alert('going to wp url: seo play');
  });
  return element;
};

var Generate_new_li_post = function Generate_new_li_post(data_Object) {
  var state = _index.default.Handle_return_state();

  var element = document.createElement('li');

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

  if (data_Object != null) {
    element.innerHTML += "\n                <button>like?</button>\n                <button>dislike?</button>\n                <button>rate 1- 3?</button>\n                <button>re\"tweet\"?</button>\n                <button>save</button>\n              ";
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  if (data_Object.child != 'roster') {
    element.addEventListener("click", function (event) {
      alert('not roster');
      document.getElementById('modal_gradient_bottom_container').innerHTML = '';
      document.getElementById('modal_gradient_bottom_container').innerHTML = "\n                  ".concat(data_Object.id, "\n                ");
      state.app.url = data_Object.id;
      state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
      history.pushState({}, null, "/p/" + state.app.url); //from_index.firebase_like_Listings(data_Object.id);
    });
  }

  ;

  if (data_Object.child == 'roster') {
    element.addEventListener("click", function (event) {
      alert('roster');
      document.getElementById('modal_gradient_bottom_container').innerHTML = '';
      document.getElementById('modal_gradient_bottom_container').innerHTML = "\n                  ".concat(data_Object.id, "\n                ");
      state.app.url = data_Object.username;
      state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
      history.pushState({}, null, state.app.url); //from_index.firebase_like_Listings(data_Object.id);
    });
  }

  ;
  /*
  element.children[1].children[3].addEventListener("click", function(event) {
      from_index.deleteWhoListings(data_Object.child, data_Object.id);
  });
  */

  return element;
}; // Handles


var Toggle_functions_IF_State = function Toggle_functions_IF_State(function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) {
  var state = _index.default.Handle_return_state(); // Function Check # 1


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
  var state = _index.default.Handle_return_state();

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
  var state = _index.default.Handle_return_state();

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
  var state = _index.default.Handle_return_state();

  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 101); // remove item after buffer

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
  var state = _index.default.Handle_return_state();

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
  var state = _index.default.Handle_return_state();

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
},{"../index.js":"index.js"}],"imports/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _functions = _interopRequireDefault(require("./functions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element_root_divs = function element_root_divs() {
  var data = "\n\n            <div id=\"lead_section\" class=\"width_100 height_100vh overflow_hidden position_relative margin_auto float_left\">\n            </div>\n            <div id=\"dummy_content\" class=\"bg_white width_100 position_relative margin_auto float_left\">\n               <h1 class=\"sm_text\">Our socials</h1>\n               <h2 class=\"sm_text\">Be sure to follow us everywhere.</h2>\n               <h3 class=\"sm_text\">Youtbe, Twitch, Instgram, Facebook, Twitter.</h3>\n               <h4 class=\"sm_text\">Social media accounts handle by nigel himself</h4>\n               <h5 class=\"sm_text\">New orginal media (Photos, videos and Graphics) everyday</h5>\n               <h6 class=\"sm_text\">Join out social team team by visting <a href=\"http://antenuh.com\">antenuh.com</a></h6>\n               <a class=\"tumblr-share-button\" href=\"https://www.tumblr.com/share\"></a>\n               <iframe src=\"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fnownigel.com&layout=button&size=large&appId=703372606507486&width=73&height=28\" width=\"73\" height=\"28\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allow=\"encrypted-media\"></iframe>\n               <a class=\"twitter-share-button\"\n                  href=\"https://twitter.com/nownigel\"\n                  data-size=\"large\">\n               Tweet</a>\n               <a class=\"twitter-share-button\"\n                  href=\"https://twitter.com/intent/tweet?text=nownigel.com\"\n                  data-size=\"large\">\n               Tweet</a>\n               <a class=\"twitter-share-button\"\n                  href=\"https://twitter.com/intent/tweet?text=Hello%20world\">\n               Tweet</a>\n               <a class=\"twitter-share-button\"\n                  href=\"https://twitter.com/intent/tweet?text=Hello%20world\"\n                  data-size=\"large\">\n               Tweet</a>\n               <a href=\"https://twitter.com/intent/tweet?in_reply_to=463440424141459456\">Reply</a>\n               <a href=\"https://twitter.com/intent/retweet?tweet_id=463440424141459456\">Retweet</a>\n               <a href=\"https://twitter.com/intent/like?tweet_id=463440424141459456\">Like</a>\n            </div>\n\n             <div class=\"width_100 overflow_hidden position_relative margin_auto float_left\">\n                <script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n                <!-- Responsive ad -->\n                <ins class=\"adsbygoogle\"\n                   style=\"display:block\"\n                   data-ad-client=\"ca-pub-3909705375565088\"\n                   data-ad-slot=\"4471920918\"\n                   data-ad-format=\"auto\"\n                   data-full-width-responsive=\"true\"></ins>\n                <script>\n                   (adsbygoogle = window.adsbygoogle || []).push({});\n                </script>\n             </div>\n\n            <div id=\"info_content\" class=\"bg_white width_100 position_relative margin_auto float_left\">\n               <h1 class=\"sm_text\">Our Content</h1>\n               <h2 class=\"sm_text\">updated Videos, Photos, Graphics and social highlights. </h2>\n               <h3 class=\"sm_text\">From Youtube, Twitch, Instgram, Facebook, Twitter.</h3>\n               <h4 class=\"sm_text\">currated with help from you, nigel and our team</h4>\n               <h5 class=\"sm_text\">New orginal media (Photos, videos and Graphics) everyday</h5>\n               <h6 class=\"sm_text\">Join out social team team by visting <a href=\"http://antenuh.com\">antenuh.com</a></h6>\n            </div>\n\n             <div class=\"width_100 overflow_hidden position_relative margin_auto float_left\">\n                <script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n                <!-- Responsive ad -->\n                <ins class=\"adsbygoogle\"\n                   style=\"display:block\"\n                   data-ad-client=\"ca-pub-3909705375565088\"\n                   data-ad-slot=\"4471920918\"\n                   data-ad-format=\"auto\"\n                   data-full-width-responsive=\"true\"></ins>\n                <script>\n                   (adsbygoogle = window.adsbygoogle || []).push({});\n                </script>\n             </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_scene_1 = function element_scene_1() {
  var data = "\n\n        <div class=\"position_absolute bottom_0 left_0 margin_auto gui_character_right_face width_1205 height_100vh\"></div>\n        <div class=\"position_absolute bottom_0 right_0 margin_auto gui_character_left_face width_1205 height_100vh\"></div>\n\n        <div class=\"position_absolute bottom_0 left_0 margin_auto gui_character_right_1 width_1205 height_100vh\"></div>\n        <div class=\"position_absolute bottom_0 right_0 margin_auto gui_character_left_1 width_1205 height_100vh\"></div>\n\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_animation_bg = function element_animation_bg() {
  var data = "\n\n\n      <div id=\"bg_section\" class=\"width_100 height_100vh overflow_hidden position_fixed top_0 left_0 right_0 bottom_0 margin_auto z_index_-1\">\n\n      </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  element.addEventListener("click", function (event) {
    // timeout
    setTimeout(function () {
      alert('bg_section'); //document.getElementById('lead_scene_container').innerHTML = '';
      //document.getElementById('lead_scene_container').appendChild(element_lead_scene_1('lead_scene_container!!!'));
    }, 2000);
  });
  return element;
};

var element_lead_scene = function element_lead_scene() {
  var data = "\n    <div id=\"lead_scene\">\n     \n      <div id=\"lead_scene_container\">\n\n      </div>\n\n      <div id=\"lead_scene_controls\">\n        <p>last</p>\n        <p>next</p>\n      </div>\n\n    </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  element.addEventListener("click", function (event) {
    // timeout
    setTimeout(function () {
      alert('lead_scene_container');
      document.getElementById('lead_scene_container').innerHTML = '';
      document.getElementById('lead_scene_container').appendChild(element_lead_scene_1('lead_scene_container!!!'));
    }, 2000);
  });
  return element;
};

var element_lead_scene_1 = function element_lead_scene_1(x) {
  var data = "\n  <div id=\"lead_scene_1\">\n     <section>\n       <h1>Nownigel</h1> ".concat(x, "\n       <h2>Nigel is an engineer, digital artist and content creator</h2>\n       <h3>Last updated: 2019</h3>\n       <h4>Youtube, Twitch, Twitter, Instagram, Facebook, Spotify</h4>\n       <h5>Users & Creators</h5>\n       <h6>all the content</h6>\n       <p>Every <u>site feature</u> is voted on at the <b>end of <i>each</i> week</b></p>\n    </section>\n\n    <section>\n      <h1>Search</h1>\n      <input id=\"username_here_please\" type=\"text\" placeholder=\"username_here_please\" class=\"width_100 float_left\" />\n      <button>search</button>\n    </section>\n    </div>\n  ");

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var element_fold = function element_fold(x) {
  var data = "\n  <div id=\"fold_section\">\n    <h2>Status Controls:</h2>\n\n    <h6>component_app_status_transform_nav_top</h6>\n    <div id=\"component_app_status_transform_nav_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_nav_left</h6>\n    <div id=\"component_app_status_transform_nav_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_nav_bottom</h6>\n    <div id=\"component_app_status_transform_nav_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_nav_right</h6>\n    <div id=\"component_app_status_transform_nav_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_page_top</h6>\n    <div id=\"component_app_status_transform_page_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_page_left</h6>\n    <div id=\"component_app_status_transform_page_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_page_bottom</h6>\n    <div id=\"component_app_status_transform_page_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_page_right</h6>\n    <div id=\"component_app_status_transform_page_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_pop_top</h6>\n    <div id=\"component_app_status_transform_pop_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_pop_left</h6>\n    <div id=\"component_app_status_transform_pop_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_pop_bottom</h6>\n    <div id=\"component_app_status_transform_pop_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_pop_right</h6>\n    <div id=\"component_app_status_transform_pop_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gradient_top</h6>\n    <div id=\"component_app_status_transform_gradient_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gradient_left</h6>\n    <div id=\"component_app_status_transform_gradient_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gradient_bottom</h6>\n    <div id=\"component_app_status_transform_gradient_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gradient_right</h6>\n    <div id=\"component_app_status_transform_gradient_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_morph_top</h6>\n    <div id=\"component_app_status_transform_morph_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_morph_left</h6>\n    <div id=\"component_app_status_transform_morph_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_morph_bottom</h6>\n    <div id=\"component_app_status_transform_morph_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_morph_right</h6>\n    <div id=\"component_app_status_transform_morph_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_menu_top</h6>\n    <div id=\"component_app_status_transform_menu_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_menu_left</h6>\n    <div id=\"component_app_status_transform_menu_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_menu_bottom</h6>\n    <div id=\"component_app_status_transform_menu_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_menu_right</h6>\n    <div id=\"component_app_status_transform_menu_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gui_top</h6>\n    <div id=\"component_app_status_transform_gui_top\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gui_top_left</h6>\n    <div id=\"component_app_status_transform_gui_top_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gui_top_right</h6>\n    <div id=\"component_app_status_transform_gui_top_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gui_left</h6>\n    <div id=\"component_app_status_transform_gui_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gui_bottom</h6>\n    <div id=\"component_app_status_transform_gui_bottom\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gui_bottom_left</h6>\n    <div id=\"component_app_status_transform_gui_bottom_left\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gui_bottom_right</h6>\n    <div id=\"component_app_status_transform_gui_bottom_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n    <h6>component_app_status_transform_gui_right</h6>\n    <div id=\"component_app_status_transform_gui_right\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n\n        <h1 class=\"width_100 float_left\">validated_user_info</h1>\n        <div id=\"validated_user_info\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1 class=\"width_100 float_left\">validated_user_info_followers</h1>\n        <div id=\"validated_user_info_followers\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1 class=\"width_100 float_left\">validated_user_info_following</h1>\n        <div id=\"validated_user_info_following\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1 class=\"width_100 float_left\">validated_user_info_recents</h1>\n        <div id=\"validated_user_info_recents\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1 class=\"width_100 float_left\">validated_user_info_x_status</h1>\n        <div id=\"validated_user_info_x_status\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1 class=\"width_100 float_left\">validated_user_info_y_status</h1>\n        <div id=\"validated_user_info_y_status\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h2 class=\"width_100 float_left\">Login</h2>\n        <input id=\"element_login_username\" type=\"text\" placeholder=\"element_login_username\" class=\"width_100 float_left\" />\n        <input id=\"element_login_password\" type=\"text\" placeholder=\"element_login_password\" class=\"width_100 float_left\" />\n        <div id=\"element_login\" class=\"width_100 float_left\">login</div>\n        <div id=\"element_logout\" class=\"width_100 float_left\">logout</div>\n\n        <h2 class=\"width_100 float_left\">Create User</h2>\n        <input id=\"create_user_username\" type=\"text\" placeholder=\"create_user_username\" class=\"width_100 float_left\" />\n        <input id=\"create_user_password\" type=\"text\" placeholder=\"create_user_password\" class=\"width_100 float_left\" />\n        <div id=\"element_addRoster\" class=\"width_100 float_left\">element_addRoster</div>\n\n        <h2 class=\"width_100 float_left\">Create Post</h2>\n        <input id=\"create_post_title\" type=\"text\" placeholder=\"create_post_title\" class=\"width_100 float_left\" />\n        <input id=\"create_post_tag\" type=\"text\" placeholder=\"create_post_tag\" class=\"width_100 float_left\" />\n        <div id=\"element_addListing\" class=\"width_100 float_left\">element_addListing</div>\n\n        <h2 class=\"width_100 float_left\">Activity(All|Followers|Following|You)</h2>\n\n        <h2 class=\"width_100 float_left\">Activity</h2>\n        <input id=\"create_activity\" type=\"text\" placeholder=\"create_Activity\" class=\"width_100 float_left\" />\n\n        <div id=\"element_addActivity\" class=\"width_100 float_left\">element_addActivity</div>\n\n        <h2 class=\"width_100 float_left\">Interaction</h2>\n        <input id=\"create_interaction\" type=\"text\" placeholder=\"create_interaction\" class=\"width_100 float_left\" />\n\n        <div id=\"element_addInteraction\" class=\"width_100 float_left\">element_addInteraction</div>\n\n        <h2 class=\"width_100 float_left\">Messages</h2>\n        <input id=\"create_messages\" type=\"text\" placeholder=\"create_messages\" class=\"width_100 float_left\" />\n\n        <div id=\"element_addMessages\" class=\"width_100 float_left\">element_addMessages</div>\n\n        <h2 class=\"width_100 float_left\">Stream</h2>\n        <input id=\"create_stream\" type=\"text\" placeholder=\"create_stream\" class=\"width_100 float_left\" />\n\n        <div id=\"element_addStream\" class=\"width_100 float_left\">element_addStream</div>\n\n\n        <h1>filter by title</h1>\n        <input id=\"element_input_filter\" type=\"text\" placeholder=\"element_input_filter\" class=\"width_100 float_left\" />\n\n        <h1>wp_library_ol</h1>\n        <div id=\"wp_library_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>firebase_library_ol</h1>\n        <div id=\"firebase_library_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>filtered_library_by_title_ol</h1>\n        <div id=\"filtered_library_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>filtered_library_child_library_by_title_ol</h1>\n        <div id=\"filtered_library_child_library_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>filtered_library_child_roster_by_title_ol</h1>\n        <div id=\"filtered_library_child_roster_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>filtered_library_child_messages_by_title_ol</h1>\n        <div id=\"filtered_library_child_messages_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>filtered_library_child_stream_by_title_ol</h1>\n        <div id=\"filtered_library_child_stream_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>filtered_library_child_interaction_by_title_ol</h1>\n        <div id=\"filtered_library_child_interaction_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>filtered_library_child_activity_by_title_ol</h1>\n        <div id=\"filtered_library_child_activity_by_title_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>sorted_library_by_time_up_ol</h1>\n        <div id=\"sorted_library_by_time_up_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <h1>sorted_library_by_time_down_ol</h1>\n        <div id=\"sorted_library_by_time_down_ol\" class=\"width_100 position_relative margin_auto float_left\"></div>\n\n        <div id=\"signal\">\n            <h2 class=\"width_100 float_left\">\n                event_route:\n            </h2>\n            <div id=\"event_route\"></div>\n          </div>\n\n        <h1>Platform</h1>\n        <div id=\"signal\">is_Desktop: <div id=\"is_Desktop\"></div></div>\n        <div id=\"signal\">is_Mobile: <div id=\"is_Mobile\"></div></div>\n        <div id=\"signal\">ux_dimensions_height: <div id=\"ux_dimensions_height\"></div></div>\n        <div id=\"signal\">ux_dimensions_width: <div id=\"ux_dimensions_width\"></div></div>\n        <div id=\"signal\">ux_browser_height: <div id=\"ux_browser_height\"></div></div>\n        <div id=\"signal\">ux_browser_width: <div id=\"ux_browser_width\"></div></div>\n        <div id=\"signal\">ux_screen_height: <div id=\"ux_screen_height\"></div></div>\n        <div id=\"signal\">ux_screen_width: <div id=\"ux_screen_width\"></div></div>\n\n        <h1>Device</h1>\n        <h2>Gravity</h2>\n        <div id=\"signal\">event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div></div>\n        <div id=\"signal\">event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div></div>\n        <div id=\"signal\">event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div></div>\n\n        <h2>VR</h2>\n        <div id=\"signal\">last_action: <div id=\"last_action\"></div></div>\n\n        <h2>Positions</h2>\n        <div id=\"signal\">event_alpha: <div id=\"event_alpha\"></div></div>\n        <div id=\"signal\">event_beta: <div id=\"event_beta\"></div></div>\n        <div id=\"signal\">event_gamma: <div id=\"event_gamma\"></div></div>\n\n        <h2>Orientation</h2>\n        <div id=\"signal\">event_portrait: <div id=\"event_portrait\"></div></div>\n        <div id=\"signal\">event_landscape: <div id=\"event_landscape\"></div></div>\n\n        <h2>Orientations</h2>\n        <div id=\"signal\">event_orientation: <div id=\"event_orientation\"></div></div>\n\n        <h2>Events</h2>\n        <h3>Scroll</h3>\n        <div id=\"signal\">history_scroll: <div id=\"history_scroll\"></div></div>\n        <h3>Mouse</h3>\n        <div id=\"signal\">current_mouse: <div id=\"current_mouse\"></div></div>\n        <div id=\"signal\">history_mouse: <div id=\"history_mouse\"></div></div>\n        <div id=\"signal\">history_mouse_enter: <div id=\"history_mouse_enter\"></div></div>\n        <div id=\"signal\">history_mouse_leave: <div id=\"history_mouse_leave\"></div></div>\n        <div id=\"signal\">history_mouse_up: <div id=\"history_mouse_up\"></div></div>\n        <div id=\"signal\">history_mouse_down: <div id=\"history_mouse_down\"></div></div>\n        <div id=\"signal\">history_mouse_up_move: <div id=\"history_mouse_up_move\"></div></div>\n        <div id=\"signal\">history_mouse_down_move: <div id=\"history_mouse_down_move\"></div></div>\n        <div id=\"signal\">history_mouse_drag_drop: <div id=\"history_mouse_drag_drop\"></div></div>\n        <div id=\"signal\">history_key: <div id=\"history_key\"></div></div>\n        <div id=\"signal\">history_key_up: <div id=\"history_key_up\"></div></div>\n        <div id=\"signal\">history_touch: <div id=\"history_touch\"></div></div>\n        <div id=\"signal\">history_touch_start: <div id=\"history_touch_start\"></div></div>\n        <div id=\"signal\">history_touch_end: <div id=\"history_touch_end\"></div></div>\n        <div id=\"signal\">history_touch_drag_drop: <div id=\"history_touch_drag_drop\"></div></div>\n        <div id=\"signal\">current_frame_motion: <div id=\"current_frame_motion\"></div></div>\n        <div id=\"signal\">current_duration: <div id=\"current_duration\"></div></div>\n        <div id=\"signal\">time_onload: <div id=\"time_onload\"></div></div>\n        <div id=\"signal\">time: <div id=\"time\"></div></div>\n\n        <h2>Game Character</h2>\n\n        <div id=\"signal\">interaction_character_clientX: <div id=\"interaction_character_clientX\"></div></div>\n        <div id=\"signal\">interaction_character_clientY: <div id=\"interaction_character_clientY\"></div></div>\n        \n        <h2>Game Dice</h2>\n\n        <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n        <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n        \n        <h2>Game Snake</h2>\n\n        <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n        <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n        \n        <h2>Game Bounce</h2>\n\n        <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n        <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n\n        <h2>Game Pen & Pencils</h2>\n\n        <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n        <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n        \n        <h2>Game Unlock/lock</h2>\n\n        <div id=\"signal\">interaction_clientX: <div id=\"interaction_clientX\"></div></div>\n        <div id=\"signal\">interaction_clientY: <div id=\"interaction_clientY\"></div></div>\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  element.addEventListener("click", function (event) {
    // timeout
    setTimeout(function () {
      alert('fold_section'); //document.getElementById('lead_scene_container').innerHTML = '';
      //document.getElementById('lead_scene_container').appendChild(element_lead_scene_1('lead_scene_container!!!'));
    }, 2000);
  });
  return element;
};

var element_div = function element_div(x) {
  var data = "\n  <div id=\"element_div\" class=\"position_relative width_100 float_left margin_auto\">\n      " + x + "\n  </div>\n  ";

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var _default = {
  element_lead_scene: element_lead_scene,
  element_lead_scene_1: element_lead_scene_1,
  element_animation_bg: element_animation_bg,
  element_scene_1: element_scene_1,
  element_fold: element_fold,
  element_div: element_div,
  element_root_divs: element_root_divs
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
      //alert('Handle_ui_reset');
      _index.default.Handle_ui_reset();
    }

    ;

    if (event.keyCode == 81) {}

    ;

    if (event.keyCode == 37) {
      //alert('shift');
      state.interaction.player_1.angle = 'left';
      state.interaction.player_1.clientX -= 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 38) {
      //alert('shift');
      state.interaction.player_1.clientY -= 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 39) {
      //alert('shift');
      state.interaction.player_1.angle = 'right';
      state.interaction.player_1.clientX += 1 / 8;
      event.preventDefault();
    }

    ;

    if (event.keyCode == 40) {
      //alert('shift');
      state.interaction.player_1.clientY += 1 / 8;
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
  state = _index.default.Handle_return_state();

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
},{"../index.js":"index.js"}],"imports/components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_components_handled = function get_components_handled() {
  var state = _index.default.Handle_return_state();

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
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.gui.bottom_left.transform // component_state_opacity:  state.gui.bottom_left.opacity

  }, {
    component: 'gui_bottom_right',
    component_state_transform: !state.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
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
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.morph.left.transform // component_state_opacity:  state.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_right',
    component_state_transform: !state.modal.morph.right.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.modal.morph.right.transform // component_state_opacity:  state.modal.morph.top.opacity

  }, // navs
  {
    component: 'modal_nav_top',
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

var _elements = _interopRequireDefault(require("./imports/elements"));

var _events = _interopRequireDefault(require("./imports/events"));

var _components = _interopRequireDefault(require("./imports/components"));

var _ux;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sound_1 = document.getElementById('componentSound');
var root = document.getElementById('root');
var Handle_render_data_value;
var Handle_get_state_from_events;
var handle_events;
var find_sort;
var sorted_firebase_library;
var handle_firebase_render_to_view;
var Handle_display_with_delay;
var Handle_ui_update;
var Handle_transform;
var handle_firebase_events;
var Handle_ui_reset;
var firebase_library = [];
var wp_library = [];
var components;
var state = {
  data: {
    firebase: {},
    wordpress: {}
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
  }
};
state.ux.platform.is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
state.ux.platform.is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var url = ''; // Initialization

var config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
}; // Functions

var getJSON = function getJSON(url, callback) {
  console.log('getJSON');
  console.log('getJSON');
  console.log('getJSON');
  console.log('getJSON');
  console.log('getJSON');
  console.log('getJSON');
  console.log('getJSON');
  console.log('getJSON');
  console.log('getJSON');
  console.log('getJSON');
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

firebase.initializeApp(config);
var firebase_data_has_been_updated_and_is_now_writeable = false;
var firebase_has_responsed_with_this_updated_data = {};

var handle_refresh_fire_data = function handle_refresh_fire_data() {
  firebase_library = [];
  wp_library = [];

  if (document.getElementById('wp_library_ol') != null) {
    document.getElementById('wp_library_ol').innerHTML = '';
  }

  ;

  if (document.getElementById('firebase_library_ol') != null) {
    document.getElementById('firebase_library_ol').innerHTML = '';
  }

  ;

  if (document.getElementById('filtered_library_by_title_ol') != null) {
    document.getElementById('filtered_library_by_title_ol').innerHTML = '';
  }

  ;

  if (document.getElementById('sorted_library_by_time_up_ol') != null) {
    document.getElementById('sorted_library_by_time_up_ol').innerHTML = '';
  }

  ;

  if (document.getElementById('sorted_library_by_time_down_ol') != null) {
    document.getElementById('sorted_library_by_time_down_ol').innerHTML = '';
  }

  ;
  var rootRef = firebase.database().ref();
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
        console.log('contected!');
        root.appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_div('firebase_has_responsed_with_this_updated_data: WHAT IT DO BABY!')));
        setTimeout(function () {
          check_localStorage();
          handle_firebase_render_to_view();
          console.log('contected!');
        }, 0);
      }

      ;
    }

    ;
  }

  ;

  if (document.getElementById('wp_library_ol') != null) {
    if (document.getElementById('wp_library_ol').innerHTML == '') {
      handle_refresh_fire_data();
    }

    ;
  }

  ;
}, 1000 / 24);

Handle_ui_update = function Handle_ui_update() {
  Handle_display_with_delay();
  Handle_transform();
  Handle_render_data_value();
};

Handle_get_state_from_events = function Handle_get_state_from_events() {
  state = _events.default.Handle_return_state_from_events(); //alert('state.modal.nav.left.transform: ' + state.modal.nav.left.transform);

  Handle_ui_update();
};

handle_events = function handle_events() {
  if (root != null) {
    // scroll
    root.addEventListener('scroll', function (event) {
      _events.default.handle_Function_Scroll(event);

      Handle_get_state_from_events();
    }); // events

    root.addEventListener('keydown', function (event) {
      _events.default.handle_Function_Key_Down(event);

      Handle_get_state_from_events(); //sound_1.play();
    });
    root.addEventListener('keyup', function (event) {
      _events.default.handle_Function_Key_Up(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mousemove', function (event) {
      _events.default.handle_Function_Mouse_Move(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mouseenter', function (event) {
      _events.default.handle_Function_Mouse_Enter(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mouseleave', function (event) {
      _events.default.handle_Function_Mouse_Leave(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mouseup', function (event) {
      _events.default.handle_Function_Mouse_Up(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('mousedown', function (event) {//events.handle_Function_Mouse_Down(event);
      //Handle_get_state_from_events();
    });
    root.addEventListener('click', function (event) {
      _events.default.handle_Function_Mouse_Down(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('touchmove', function (event) {
      _events.default.handle_Function_Touch_Move(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('touchstart', function (event) {
      _events.default.handle_Function_Touch_Start(event);

      Handle_get_state_from_events();
    });
    root.addEventListener('touchend', function (event) {
      _events.default.handle_Function_Touch_End(event);

      Handle_get_state_from_events();
    });
  }

  ;
};

find_sort = function find_sort(mode) {
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

sorted_firebase_library = function sorted_firebase_library(x) {
  return firebase_library.sort(find_sort(x));
};

Handle_display_with_delay = function Handle_display_with_delay() {
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

Handle_transform = function Handle_transform() {
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

handle_firebase_render_to_view = function handle_firebase_render_to_view() {
  // render library
  (function () {
    setTimeout(function () {
      if (firebase_has_responsed_with_this_updated_data != null) {
        // create array
        if (wp_library != null) {
          for (var i = 0; i < state.data.wordpress.length; i++) {
            wp_library.push(state.data.wordpress[i]);
          }

          ;
        }

        ; // render array

        for (var i = 0; i < wp_library.length; i++) {
          document.getElementById('wp_library_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_wp_li_post(wp_library[i])));
        }

        ; // create array

        if (firebase_library != null) {
          for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
            firebase_library.push(state.data.firebase.gnougn.library[i]);
          }

          ;
        }

        ; // render array

        for (var i = 0; i < firebase_library.length; i++) {
          document.getElementById('firebase_library_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(firebase_library[i])));
        }

        ; // create array

        var filtered_library_by_title = [];

        for (var i = 0; i < firebase_library.length; i++) {
          if (firebase_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
            filtered_library_by_title.push(firebase_library[i]);
          }

          ;
          console.log('filtered_library_by_title[i]');
          console.log(filtered_library_by_title[i]);
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          document.getElementById('filtered_library_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'roster') {
            document.getElementById('filtered_library_child_roster_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'interaction') {
            document.getElementById('filtered_library_child_interaction_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'activity') {
            document.getElementById('filtered_library_child_activity_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'messages') {
            document.getElementById('filtered_library_child_messages_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'stream') {
            document.getElementById('filtered_library_child_stream_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // render array

        for (var i = 0; i < filtered_library_by_title.length; i++) {
          if (filtered_library_by_title[i].child == 'library') {
            document.getElementById('filtered_library_child_library_by_title_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(filtered_library_by_title[i])));
          }

          ;
        }

        ; // create array

        var sorted_library_by_time_up = [];

        for (var i = 0; i < sorted_firebase_library('timeup').length; i++) {
          sorted_library_by_time_up.push(sorted_firebase_library('timeup')[i]);
        }

        ; // render array

        for (var i = 0; i < sorted_library_by_time_up.length; i++) {
          document.getElementById('sorted_library_by_time_up_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(sorted_library_by_time_up[i])));
        }

        ; // create array

        var sorted_library_by_time_down = [];

        for (var i = 0; i < sorted_firebase_library('timedown').length; i++) {
          sorted_library_by_time_down.push(sorted_firebase_library('timedown')[i]);
        }

        ; // render array

        for (var i = 0; i < sorted_library_by_time_down.length; i++) {
          document.getElementById('sorted_library_by_time_down_ol').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li_post(sorted_library_by_time_down[i])));
        }

        ;
      }

      ;
    });
  })();
};

handle_firebase_events = function handle_firebase_events() {
  // login
  if (document.getElementById('element_login') != null) {
    document.getElementById('element_login').addEventListener('click', function (event) {
      firebase_login();
    });
  }

  ;

  if (document.getElementById('element_login_username') != null) {
    document.getElementById('element_login_username').addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        firebase_login();
      }

      ;
    });
  }

  ;

  if (document.getElementById('element_login_password') != null) {
    document.getElementById('element_login_password').addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        firebase_login();
      }

      ;
    });
  }

  ; // logout

  if (document.getElementById('element_logout') != null) {
    document.getElementById('element_logout').addEventListener('click', function (event) {
      firebase_logout();
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

  if (document.getElementById('element_addMessages') != null) {
    document.getElementById('element_addMessages').addEventListener('click', function (event) {
      firebase_add_listings('messages');
    });
  }

  ;

  if (document.getElementById('element_addStream') != null) {
    document.getElementById('element_addStream').addEventListener('click', function (event) {
      firebase_add_listings('stream');
    });
  }

  ;

  if (document.getElementById('element_addActivity') != null) {
    document.getElementById('element_addActivity').addEventListener('click', function (event) {
      firebase_add_listings('activity');
    });
  }

  ;

  if (document.getElementById('element_addInteraction') != null) {
    document.getElementById('element_addInteraction').addEventListener('click', function (event) {
      firebase_add_listings('interaction');
    });
  }

  ;
};

var handle_gui_events = function handle_gui_events() {
  if (document.getElementById('gui_top_left') != null) {
    document.getElementById('gui_top_left').addEventListener('click', function (event) {
      //alert('gui_top_left');
      state.gui.top_right.transform = !state.gui.top_right.transform;
      Handle_ui_update();
    });
  }

  ;

  if (document.getElementById('gui_top') != null) {
    document.getElementById('gui_top').addEventListener('click', function (event) {
      //alert('gui_top');
      state.modal.page.top.transform = !state.modal.page.top.transform;
      Handle_ui_update();
    });
  }

  ;

  if (document.getElementById('gui_top_right') != null) {
    document.getElementById('gui_top_right').addEventListener('click', function (event) {
      //alert('gui_top_right');
      state.gui.top_left.transform = !state.gui.top_left.transform;
      state.gui.top.transform = !state.gui.top.transform;
      state.gui.top_right.transform = !state.gui.top_right.transform;
      state.gui.left.transform = !state.gui.left.transform;
      state.gui.right.transform = !state.gui.right.transform;
      state.gui.bottom_left.transform = !state.gui.bottom_left.transform;
      state.gui.bottom.transform = !state.gui.bottom.transform;
      state.gui.bottom_right.transform = !state.gui.bottom_right.transform;
      Handle_ui_update();
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
};

var handle_gui_status_events = function handle_gui_status_events() {
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

Handle_render_data_value = function Handle_render_data_value() {
  // gui
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
    document.getElementById('interaction_character_clientX').innerHTML = state.interaction.player_1.clientX;
  }

  ;

  if (document.getElementById('interaction_character_clientY') != null) {
    document.getElementById('interaction_character_clientY').innerHTML = state.interaction.player_1.clientY;
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

var animation_bg = function animation_bg() {
  // timeout
  setTimeout(function () {
    root.appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_animation_bg()));
  }, 1000); // timeout

  setTimeout(function () {
    document.getElementById('bg_section').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_scene_1()));
  }, 2000); // timeout

  setTimeout(function () {
    document.getElementById('bg_section').innerHTML = '';
  }, 3000); // timeout

  setTimeout(function () {
    document.getElementById('bg_section').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_scene_1()));
  }, 4000); // timeout

  setTimeout(function () {
    document.getElementById('bg_section').innerHTML = '';
  }, 5000);
};

var animation_lead = function animation_lead() {
  if (document.getElementById('lead_section') != null) {
    // timeout
    setTimeout(function () {
      document.getElementById('lead_section').innerHTML = '';
      document.getElementById('lead_section').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_lead_scene('element_lead!!!')));
    }, 0);
  }

  ;
};

var animation_fold = function animation_fold() {
  if (document.getElementById('fold_section') != null) {
    // timeout
    setTimeout(function () {
      document.getElementById('fold_section').innerHTML = '';
      document.getElementById('fold_section').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_fold()));
    }, 0);
  }

  ;
};

var Handle_return_state = function Handle_return_state() {
  return state;
};

var handle_URL = function handle_URL() {
  setTimeout(function () {
    var parts = location.pathname.split('/');
    window.scrollTo(0, 0);

    if (url == '') {
      root.appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_root_divs('home!!!'))); // timeout

      setTimeout(function () {
        console.log('handle_URL: welcome to the site');
        url = 'loading';
        handle_URL();
      }, 1000);
    }

    ;

    if (url == 'loading') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: now site loading');
        url = 'loaded';
        handle_URL();
      }, 1000);
    }

    ;

    if (url == 'loaded') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: site loaded');
        url = 'done';
        handle_URL();
      }, 1000);
    }

    ;

    if (url == 'done') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: site done loading');
        url = 'welcome';
        handle_URL();
      }, 1000);
    }

    ;

    if (url == 'welcome') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: welcome');
        url = 'redirect';
        handle_URL();
      }, 1000);
    }

    ;

    if (url == 'redirect') {
      console.log('handle_URL: redirect');

      if (parts[1] != null) {
        if (parts[1] == '') {
          console.log('just stay at the home page'); //url = parts[1];
          //console.log('url: ' + url );

          animation_bg();
          animation_lead();
          animation_fold();
          handle_refresh_fire_data();
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
      setTimeout(function () {
        handle_events();
        handle_gui_events();
        handle_gui_status_events();
        handle_firebase_events();
      }, 1000);
    }

    ;
  }, 0);
};

var check_localStorage = function check_localStorage() {
  var placeholder_user = {
    "username": "placeholder_user",
    "password": "1234",
    "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg",
    "signed_in": "false"
  };

  if (localStorage.user == null) {
    localStorage.setItem("user", placeholder_user);
    localStorage.setItem("username", placeholder_user.username);
    localStorage.setItem("password", placeholder_user.password);
    localStorage.setItem("signed_in", "false");
    console.log('welcome first timer');
    return;
  }

  ;

  if (localStorage.user != null) {
    console.log('welcome bax');
  }

  ;
};

Handle_ui_reset = function Handle_ui_reset() {
  // disactives
  state.modal.gradient.top.transform = false;
  state.modal.gradient.left.transform = false;
  state.modal.gradient.bottom.transform = false;
  state.modal.gradient.right.transform = false;
  state.modal.morph.top.transform = false;
  state.modal.morph.left.transform = false;
  state.modal.morph.bottom.transform = false;
  state.modal.morph.right.transform = false;
  state.modal.pop.top.transform = false;
  state.modal.pop.left.transform = false;
  state.modal.pop.bottom.transform = false;
  state.modal.pop.right.transform = false;
  state.modal.page.top.transform = false;
  state.modal.page.left.transform = false;
  state.modal.page.bottom.transform = false;
  state.modal.page.right.transform = false;
  state.modal.menu.top.transform = false;
  state.modal.menu.left.transform = false;
  state.modal.menu.bottom.transform = false;
  state.modal.menu.right.transform = false;
  state.modal.nav.top.transform = false;
  state.modal.nav.left.transform = false;
  state.modal.nav.bottom.transform = false;
  state.modal.nav.right.transform = false;
  state.gui.top.transform = false;
  state.gui.top_left.transform = false;
  state.gui.top_right.transform = false;
  state.gui.bottom.transform = false;
  state.gui.bottom_left.transform = false;
  state.gui.bottom_right.transform = false;
  state.gui.left.transform = false;
  state.gui.right.transform = false; // active

  state.gui.top_left.transform = true;
}; // hooks


window.onload = function () {
  alert('crud, components, shortcuts, sort, previews, page, pop');
  console.log('nownigel');
  check_localStorage();
  handle_refresh_fire_data();
  handle_repeated_fire_data_validation;
  handle_URL(); //sound_1.play();

  getJSON('https://antenuh.com/feed/json', function (err, data) {
    console.log('getJSON');
    console.log('getJSON');
    console.log('getJSON');
    console.log('getJSON');
    console.log('getJSON');
    console.log('getJSON');
    console.log('getJSON');
    console.log('getJSON');
    console.log('getJSON');
    console.log('getJSON');

    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      console.log('wp count: ' + data.items);
      state.data.wordpress = data.items;

      for (var i = 0; i < state.data.wordpress.length; i++) {
        var wp_post = state.data.wordpress[i];
        console.log('wp_post new');
        console.log(wp_post);
      }

      ;
    }

    ;
  });

  if (document.getElementById('form_submit') != null) {
    // Set firebase data
    setTimeout(function () {
      document.getElementById('form_submit').children[0].children[0].children[3].addEventListener('click', function (event) {
        alert('form_submit');
      });
    }, 5000);
  }

  ;
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
  Handle_return_state: Handle_return_state,
  Handle_ui_reset: Handle_ui_reset
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/functions":"imports/functions.js","./imports/elements":"imports/elements.js","./imports/events":"imports/events.js","./imports/components":"imports/components.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54836" + '/');

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
//# sourceMappingURL=/clean_nownigel.e31bb0bc.map