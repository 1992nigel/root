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
},{"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.58909d32.svg","assets/gui/gui_link_grid_white.svg"],"assets/gui/gui_link_grid_white.svg"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.8b15c689.svg","assets/gui/gui_link_menu_white.svg"],"assets/gui/gui_link_menu_white.svg"],"./assets/gui/gui_link_sign_up_white.svg":[["gui_link_sign_up_white.86d9072f.svg","assets/gui/gui_link_sign_up_white.svg"],"assets/gui/gui_link_sign_up_white.svg"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.fc375cc1.svg","assets/gui/gui_link_sign_in_white.svg"],"assets/gui/gui_link_sign_in_white.svg"],"./assets/gui/gui_link_post_white.svg":[["gui_link_post_white.ef6a2eb5.svg","assets/gui/gui_link_post_white.svg"],"assets/gui/gui_link_post_white.svg"],"./assets/gui/gui_link_message_white.svg":[["gui_link_message_white.8222fa8d.svg","assets/gui/gui_link_message_white.svg"],"assets/gui/gui_link_message_white.svg"],"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.2afa39a6.svg","assets/gui/gui_link_home_white.svg"],"assets/gui/gui_link_home_white.svg"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.23391bca.svg","assets/gui/gui_link_gear_white.svg"],"assets/gui/gui_link_gear_white.svg"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.2fd07b39.svg","assets/gui/gui_link_house_white.svg"],"assets/gui/gui_link_house_white.svg"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.27850d9e.svg","assets/gui/gui_link_close_white.svg"],"assets/gui/gui_link_close_white.svg"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.de148a15.svg","assets/gui/gui_link_min_white.svg"],"assets/gui/gui_link_min_white.svg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.f033010f.svg","assets/gui/gui_link_max_white.svg"],"assets/gui/gui_link_max_white.svg"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.179c3b09.svg","assets/gui/gui_link_dots_white.svg"],"assets/gui/gui_link_dots_white.svg"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.a1d8f80c.svg","assets/gui/gui_interaction_button_1.svg"],"assets/gui/gui_interaction_button_1.svg"],"./assets/gui/gui_interaction_button_start.svg":[["gui_interaction_button_start.5cb2f15d.svg","assets/gui/gui_interaction_button_start.svg"],"assets/gui/gui_interaction_button_start.svg"],"./assets/gui/gui_interaction_button_learn.svg":[["gui_interaction_button_learn.0a53d1d8.svg","assets/gui/gui_interaction_button_learn.svg"],"assets/gui/gui_interaction_button_learn.svg"],"./assets/gui/gui_interaction_text_or.svg":[["gui_interaction_text_or.2d029656.svg","assets/gui/gui_interaction_text_or.svg"],"assets/gui/gui_interaction_text_or.svg"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.63c56e34.svg","assets/gui/gui_interaction_text_press.svg"],"assets/gui/gui_interaction_text_press.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.e0631923.svg","assets/gui/gui_stage_desk.svg"],"assets/gui/gui_stage_desk.svg"],"./assets/gui/gui_character_message_box.svg":[["gui_character_message_box.47192970.svg","assets/gui/gui_character_message_box.svg"],"assets/gui/gui_character_message_box.svg"],"./assets/gui/gui_character_right_1.svg":[["gui_character_right_1.c745c328.svg","assets/gui/gui_character_right_1.svg"],"assets/gui/gui_character_right_1.svg"],"./assets/gui/gui_character_right_2.svg":[["gui_character_right_2.5cfcf5ac.svg","assets/gui/gui_character_right_2.svg"],"assets/gui/gui_character_right_2.svg"],"./assets/gui/gui_character_right_3.svg":[["gui_character_right_3.8dc2166e.svg","assets/gui/gui_character_right_3.svg"],"assets/gui/gui_character_right_3.svg"],"./assets/gui/gui_character_right_4.svg":[["gui_character_right_4.d7c48548.svg","assets/gui/gui_character_right_4.svg"],"assets/gui/gui_character_right_4.svg"],"./assets/gui/gui_character_left_1.svg":[["gui_character_left_1.c87b49f6.svg","assets/gui/gui_character_left_1.svg"],"assets/gui/gui_character_left_1.svg"],"./assets/gui/gui_character_left_2.svg":[["gui_character_left_2.61be681d.svg","assets/gui/gui_character_left_2.svg"],"assets/gui/gui_character_left_2.svg"],"./assets/gui/gui_character_left_3.svg":[["gui_character_left_3.056adc88.svg","assets/gui/gui_character_left_3.svg"],"assets/gui/gui_character_left_3.svg"],"./assets/gui/gui_character_left_4.svg":[["gui_character_left_4.aae0b84b.svg","assets/gui/gui_character_left_4.svg"],"assets/gui/gui_character_left_4.svg"],"./assets/gui/gui_character_right_face.svg":[["gui_character_right_face.42766739.svg","assets/gui/gui_character_right_face.svg"],"assets/gui/gui_character_right_face.svg"],"./assets/gui/gui_character_left_face.svg":[["gui_character_left_face.f15e919d.svg","assets/gui/gui_character_left_face.svg"],"assets/gui/gui_character_left_face.svg"],"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/socials/twitter_handdrawn.svg":[["twitter_handdrawn.4dd6e273.svg","assets/socials/twitter_handdrawn.svg"],"assets/socials/twitter_handdrawn.svg"],"./assets/socials/twitch_handdrawn.svg":[["twitch_handdrawn.a0ceaf56.svg","assets/socials/twitch_handdrawn.svg"],"assets/socials/twitch_handdrawn.svg"],"./assets/socials/youtube_handdrawn.svg":[["youtube_handdrawn.24d23384.svg","assets/socials/youtube_handdrawn.svg"],"assets/socials/youtube_handdrawn.svg"],"./assets/socials/instagram_handdrawn.svg":[["instagram_handdrawn.f326c03a.svg","assets/socials/instagram_handdrawn.svg"],"assets/socials/instagram_handdrawn.svg"],"./assets/socials/facebook_handdrawn.svg":[["facebook_handdrawn.2a2e1213.svg","assets/socials/facebook_handdrawn.svg"],"assets/socials/facebook_handdrawn.svg"],"./assets/gradient/grey_top.svg":[["grey_top.d8e034e1.svg","assets/gradient/grey_top.svg"],"assets/gradient/grey_top.svg"],"./assets/gradient/white_top.svg":[["white_top.ce87e304.svg","assets/gradient/white_top.svg"],"assets/gradient/white_top.svg"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/functions.js":[function(require,module,exports) {
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

var _default = {
  Generate_new_fragment: Generate_new_fragment,
  Generate_new_div: Generate_new_div
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

var element_lead = function element_lead(x) {
  var data = "\n    <section>\n       <h1>Nownigel</h1> ".concat(x, "\n       <h2>Nigel is an engineer, digital artist and content creator</h2>\n       <h3>Last updated: 2019</h3>\n       <h4>Youtube, Twitch, Twitter, Instagram, Facebook, Spotify</h4>\n       <h5>Users & Creators</h5>\n       <h6>all the content</h6>\n       <p>Every <u>site feature</u> is voted on at the <b>end of <i>each</i> week</b></p>\n    </section>\n\n    <section>\n      <h1>Search</h1>\n      <input id=\"username_here_please\" type=\"text\" placeholder=\"username_here_please\" class=\"width_100 float_left\" />\n      <button>search</button>\n    </section>\n  ");

  var element = _functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div('', '', data));

  return element;
};

var _default = {
  element_lead: element_lead
};
exports.default = _default;
},{"./functions":"imports/functions.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style.scss"));

var _functions = _interopRequireDefault(require("./imports/functions"));

var _elements = _interopRequireDefault(require("./imports/elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var state = {
  data: {
    firebase: {}
  }
};
var url = ''; // Initialization

var config = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382"
}; // Functions

firebase.initializeApp(config);
var firebase_data_has_been_updated_and_is_now_writeable = false;
var firebase_has_responsed_with_this_updated_data = {};

var handle_refresh_fire_data = function handle_refresh_fire_data() {
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
        console.log(firebase_has_responsed_with_this_updated_data.gnougn);
        document.getElementById('root').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_lead('firebase_has_responsed_with_this_updated_data')));
      }

      ;
    }

    ;
  }

  ;
}, 1000 / 24);

var Handle_return_state = function Handle_return_state() {
  return state;
};

var handle_URL = function handle_URL() {
  setTimeout(function () {
    var parts = location.pathname.split('/');
    window.scrollTo(0, 0);

    if (url == '') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: welcome to the site');
        url = 'loading';
        handle_URL();
      }, 1000 / 6);
    }

    ;

    if (url == 'loading') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: now site loading');
        url = 'loaded';
        handle_URL();
      }, 1000 / 6);
    }

    ;

    if (url == 'loaded') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: site loaded');
        url = 'done';
        handle_URL();
      }, 1000 / 6);
    }

    ;

    if (url == 'done') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: site done loading');
        url = 'welcome';
        handle_URL();
      }, 1000 / 6);
    }

    ;

    if (url == 'welcome') {
      // timeout
      setTimeout(function () {
        console.log('handle_URL: welcome');
        url = 'redirect';
        handle_URL();
      }, 1000 / 6);
    }

    ;

    if (url == 'redirect') {
      console.log('handle_URL: redirect');

      if (parts[1] != null) {
        if (parts[1] == '') {
          console.log('just stay at the home page'); //url = parts[1];
          //console.log('url: ' + url );

          document.getElementById('root').appendChild(_functions.default.Generate_new_fragment.appendChild(_elements.default.element_lead('home!!!')));
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
    localStorage.setItem("signed_in", "false"); //alert('welcome first timer');

    return;
  }

  ;

  if (localStorage.user != null) {//alert('welcome bax')
  }

  ;
}; // hooks


window.onload = function () {
  alert('onload new again');
  check_localStorage();
  handle_refresh_fire_data();
  handle_repeated_fire_data_validation;
  handle_URL();
};

var _default = {
  Handle_return_state: Handle_return_state
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/functions":"imports/functions.js","./imports/elements":"imports/elements.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56797" + '/');

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
//# sourceMappingURL=/clean.e31bb0bc.map