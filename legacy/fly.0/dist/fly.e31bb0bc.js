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
},{"./assets/gui/gui_wit_boys.svg":[["gui_wit_boys.0de10b7f.svg","assets/gui/gui_wit_boys.svg"],"assets/gui/gui_wit_boys.svg"],"./assets/gui/gui_wit_logo.svg":[["gui_wit_logo.fb8b3b16.svg","assets/gui/gui_wit_logo.svg"],"assets/gui/gui_wit_logo.svg"],"./assets/gui/gui_wit_logo_dark.svg":[["gui_wit_logo_dark.22e2ad7b.svg","assets/gui/gui_wit_logo_dark.svg"],"assets/gui/gui_wit_logo_dark.svg"],"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.58909d32.svg","assets/gui/gui_link_grid_white.svg"],"assets/gui/gui_link_grid_white.svg"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.8b15c689.svg","assets/gui/gui_link_menu_white.svg"],"assets/gui/gui_link_menu_white.svg"],"./assets/gui/gui_link_sign_up_white.svg":[["gui_link_sign_up_white.86d9072f.svg","assets/gui/gui_link_sign_up_white.svg"],"assets/gui/gui_link_sign_up_white.svg"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.fc375cc1.svg","assets/gui/gui_link_sign_in_white.svg"],"assets/gui/gui_link_sign_in_white.svg"],"./assets/gui/gui_link_post_white.svg":[["gui_link_post_white.ef6a2eb5.svg","assets/gui/gui_link_post_white.svg"],"assets/gui/gui_link_post_white.svg"],"./assets/gui/gui_link_message_white.svg":[["gui_link_message_white.8222fa8d.svg","assets/gui/gui_link_message_white.svg"],"assets/gui/gui_link_message_white.svg"],"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.2afa39a6.svg","assets/gui/gui_link_home_white.svg"],"assets/gui/gui_link_home_white.svg"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.23391bca.svg","assets/gui/gui_link_gear_white.svg"],"assets/gui/gui_link_gear_white.svg"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.2fd07b39.svg","assets/gui/gui_link_house_white.svg"],"assets/gui/gui_link_house_white.svg"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.27850d9e.svg","assets/gui/gui_link_close_white.svg"],"assets/gui/gui_link_close_white.svg"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.de148a15.svg","assets/gui/gui_link_min_white.svg"],"assets/gui/gui_link_min_white.svg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.f033010f.svg","assets/gui/gui_link_max_white.svg"],"assets/gui/gui_link_max_white.svg"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.179c3b09.svg","assets/gui/gui_link_dots_white.svg"],"assets/gui/gui_link_dots_white.svg"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.a1d8f80c.svg","assets/gui/gui_interaction_button_1.svg"],"assets/gui/gui_interaction_button_1.svg"],"./assets/gui/gui_interaction_button_start.svg":[["gui_interaction_button_start.5cb2f15d.svg","assets/gui/gui_interaction_button_start.svg"],"assets/gui/gui_interaction_button_start.svg"],"./assets/gui/gui_interaction_button_learn.svg":[["gui_interaction_button_learn.0a53d1d8.svg","assets/gui/gui_interaction_button_learn.svg"],"assets/gui/gui_interaction_button_learn.svg"],"./assets/gui/gui_interaction_text_or.svg":[["gui_interaction_text_or.2d029656.svg","assets/gui/gui_interaction_text_or.svg"],"assets/gui/gui_interaction_text_or.svg"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.63c56e34.svg","assets/gui/gui_interaction_text_press.svg"],"assets/gui/gui_interaction_text_press.svg"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.82c915ba.svg","assets/gui/gui_stage_tv.svg"],"assets/gui/gui_stage_tv.svg"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.8ba7e55c.svg","assets/gui/gui_stage_lights.svg"],"assets/gui/gui_stage_lights.svg"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.e0631923.svg","assets/gui/gui_stage_desk.svg"],"assets/gui/gui_stage_desk.svg"],"./assets/gui/gui_character_message_box.svg":[["gui_character_message_box.47192970.svg","assets/gui/gui_character_message_box.svg"],"assets/gui/gui_character_message_box.svg"],"./assets/gui/gui_character_right_1.svg":[["gui_character_right_1.c745c328.svg","assets/gui/gui_character_right_1.svg"],"assets/gui/gui_character_right_1.svg"],"./assets/gui/gui_character_right_2.svg":[["gui_character_right_2.5cfcf5ac.svg","assets/gui/gui_character_right_2.svg"],"assets/gui/gui_character_right_2.svg"],"./assets/gui/gui_character_right_3.svg":[["gui_character_right_3.8dc2166e.svg","assets/gui/gui_character_right_3.svg"],"assets/gui/gui_character_right_3.svg"],"./assets/gui/gui_character_right_4.svg":[["gui_character_right_4.d7c48548.svg","assets/gui/gui_character_right_4.svg"],"assets/gui/gui_character_right_4.svg"],"./assets/gui/gui_character_left_1.svg":[["gui_character_left_1.c87b49f6.svg","assets/gui/gui_character_left_1.svg"],"assets/gui/gui_character_left_1.svg"],"./assets/gui/gui_character_left_2.svg":[["gui_character_left_2.61be681d.svg","assets/gui/gui_character_left_2.svg"],"assets/gui/gui_character_left_2.svg"],"./assets/gui/gui_character_left_3.svg":[["gui_character_left_3.056adc88.svg","assets/gui/gui_character_left_3.svg"],"assets/gui/gui_character_left_3.svg"],"./assets/gui/gui_character_left_4.svg":[["gui_character_left_4.aae0b84b.svg","assets/gui/gui_character_left_4.svg"],"assets/gui/gui_character_left_4.svg"],"./assets/gui/gui_character_right_face.svg":[["gui_character_right_face.42766739.svg","assets/gui/gui_character_right_face.svg"],"assets/gui/gui_character_right_face.svg"],"./assets/gui/gui_character_left_face.svg":[["gui_character_left_face.f15e919d.svg","assets/gui/gui_character_left_face.svg"],"assets/gui/gui_character_left_face.svg"],"./assets/gui/gui_input_1.svg":[["gui_input_1.3b20b648.svg","assets/gui/gui_input_1.svg"],"assets/gui/gui_input_1.svg"],"./assets/gui/gui_input_2.svg":[["gui_input_2.b2fbf5af.svg","assets/gui/gui_input_2.svg"],"assets/gui/gui_input_2.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.e92e5d93.svg","assets/gui/gui_logo_mark_1.svg"],"assets/gui/gui_logo_mark_1.svg"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.64a2ff84.svg","assets/gui/gui_logo_mark_2.svg"],"assets/gui/gui_logo_mark_2.svg"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.c02cdb4a.svg","assets/gui/gui_logo_mark_3.svg"],"assets/gui/gui_logo_mark_3.svg"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.3ea86068.svg","assets/gui/gui_logo_mark_4.svg"],"assets/gui/gui_logo_mark_4.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.62e2fcd9.svg","assets/gui/gui_logo_white_mark_1.svg"],"assets/gui/gui_logo_white_mark_1.svg"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.6bda12f7.svg","assets/gui/gui_logo_white_mark_2.svg"],"assets/gui/gui_logo_white_mark_2.svg"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.de52181a.svg","assets/gui/gui_logo_white_mark_3.svg"],"assets/gui/gui_logo_white_mark_3.svg"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.7689d7b4.svg","assets/gui/gui_logo_white_mark_4.svg"],"assets/gui/gui_logo_white_mark_4.svg"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.e034fff4.svg","assets/gui/gui_logo_white_type.svg"],"assets/gui/gui_logo_white_type.svg"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.4751973c.svg","assets/gui/gui_nav_logo_type.svg"],"assets/gui/gui_nav_logo_type.svg"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.a7e5dfbd.svg","assets/gui/gui_nav_logo_white_type.svg"],"assets/gui/gui_nav_logo_white_type.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/accent/noise_2.svg":[["noise_2.3b003770.svg","assets/accent/noise_2.svg"],"assets/accent/noise_2.svg"],"./assets/accent/noise_3.svg":[["noise_3.cff25858.svg","assets/accent/noise_3.svg"],"assets/accent/noise_3.svg"],"./assets/accent/noise_4.svg":[["noise_4.795c4870.svg","assets/accent/noise_4.svg"],"assets/accent/noise_4.svg"],"./assets/accent/noise_white_1.svg":[["noise_white_1.a4316137.svg","assets/accent/noise_white_1.svg"],"assets/accent/noise_white_1.svg"],"./assets/accent/noise_white_2.svg":[["noise_white_2.68e0b95a.svg","assets/accent/noise_white_2.svg"],"assets/accent/noise_white_2.svg"],"./assets/accent/noise_white_3.svg":[["noise_white_3.32445b35.svg","assets/accent/noise_white_3.svg"],"assets/accent/noise_white_3.svg"],"./assets/accent/noise_white_4.svg":[["noise_white_4.60db05bb.svg","assets/accent/noise_white_4.svg"],"assets/accent/noise_white_4.svg"],"./assets/socials/twitter_handdrawn.svg":[["twitter_handdrawn.4dd6e273.svg","assets/socials/twitter_handdrawn.svg"],"assets/socials/twitter_handdrawn.svg"],"./assets/socials/twitch_handdrawn.svg":[["twitch_handdrawn.a0ceaf56.svg","assets/socials/twitch_handdrawn.svg"],"assets/socials/twitch_handdrawn.svg"],"./assets/socials/youtube_handdrawn.svg":[["youtube_handdrawn.24d23384.svg","assets/socials/youtube_handdrawn.svg"],"assets/socials/youtube_handdrawn.svg"],"./assets/socials/instagram_handdrawn.svg":[["instagram_handdrawn.f326c03a.svg","assets/socials/instagram_handdrawn.svg"],"assets/socials/instagram_handdrawn.svg"],"./assets/socials/facebook_handdrawn.svg":[["facebook_handdrawn.2a2e1213.svg","assets/socials/facebook_handdrawn.svg"],"assets/socials/facebook_handdrawn.svg"],"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.6dec167e.woff","assets/fonts/Silkscreen.ttf.woff"],"assets/fonts/Silkscreen.ttf.woff"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.a45ae991.svg","assets/fonts/Silkscreen.ttf.svg"],"assets/fonts/Silkscreen.ttf.svg"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.be6987ea.eot","assets/fonts/Silkscreen.ttf.eot"],"assets/fonts/Silkscreen.ttf.eot"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imports/events.js":[function(require,module,exports) {
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
    //state.events.scroll.history.push({event});
    //console.log('state.events.scroll.history');
    //console.log(state.events.scroll.history);
    // scrolling
    console.log("event.target.scrollingElement.clientWidth: " + event.target.scrollingElement.clientWidth);
    console.log('event.target.scrollingElement.clientWidth: ' + event.target.scrollingElement.clientWidth);
    console.log('event.target.scrollingElement.clientHeight: ' + event.target.scrollingElement.clientHeight);
    console.log('event.target.scrollingElement.scrollLeft: ' + event.target.scrollingElement.scrollLeft);
    console.log('event.target.scrollingElement.scrollTop: ' + event.target.scrollingElement.scrollTop);
    console.log('event.target.scrollingElement.scrollWidth: ' + event.target.scrollingElement.scrollWidth);
    console.log('event.target.scrollingElement.scrollHeight: ' + event.target.scrollingElement.scrollHeight);
    console.log('event.target.scrollingElement.scrollHeight: ' + event.target.scrollingElement.scrollTop); //alert('yup');
    // scrolling

    console.log("event.target.scrollingElement.clientWidth: " + event.target.scrollingElement.clientWidth);
    console.log("event.target.scrollingElement.clientHeight: " + event.target.scrollingElement.clientHeight);
    console.log("event.target.scrollingElement.scrollLeft: " + event.target.scrollingElement.scrollLeft);
    console.log("event.target.scrollingElement.scrollTop: " + event.target.scrollingElement.scrollTop);
    console.log("event.target.scrollingElement.scrollWidth: " + event.target.scrollingElement.scrollWidth);
    console.log("event.target.scrollingElement.scrollHeight: " + event.target.scrollingElement.scrollHeight);
  }

  ;
};

var handle_Function_Mouse_Move = function handle_Function_Mouse_Move(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Move');
};

var handle_Function_Mouse_Enter = function handle_Function_Mouse_Enter(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Enter');
};

var handle_Function_Mouse_Leave = function handle_Function_Mouse_Leave(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Leave');
};

var handle_Function_Mouse_Up = function handle_Function_Mouse_Up(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Up');
};

var handle_Function_Mouse_Down = function handle_Function_Mouse_Down(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Mouse_Down');
};

var handle_Function_Key_Down = function handle_Function_Key_Down(event) {
  state = _index.default.handle_ReturnState();

  if (event.keyCode == 27) {
    setTimeout(function () {
      window.scrollTo(0, 0);
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
    state.interaction.playable.angle = 0;
    state.interaction.playable.clientX -= 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 38) {
    //alert('shift');
    state.interaction.playable.stance = 1;
    state.interaction.playable.clientY -= 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 39) {
    //alert('shift');
    state.interaction.playable.angle = 1;
    state.interaction.playable.clientX += 1 / 8;
    event.preventDefault();
  }

  ;

  if (event.keyCode == 40) {
    //alert('shift');
    state.interaction.playable.stance = 0;
    state.interaction.playable.clientY += 1 / 8;
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
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Key_Up');
};

var handle_Function_Touch_Move = function handle_Function_Touch_Move(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Touch_Move');
};

var handle_Function_Touch_Start = function handle_Function_Touch_Start(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Touch_Start');
};

var handle_Function_Touch_End = function handle_Function_Touch_End(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Touch_End');
};

var handle_Function_Device_Resize = function handle_Function_Device_Resize(event) {
  state = _index.default.handle_ReturnState();
  console.log('handle_Function_Device_Resize');
};

var handle_Function_Device_Motion = function handle_Function_Device_Motion(event) {
  state = _index.default.handle_ReturnState();
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
    component_state_transform: !state.modal.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.gui.top.transform // component_state_opacity:  state.modal.gui.top.opacity

  }, {
    component: 'gui_top_left',
    component_state_transform: !state.modal.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.gui.top_left.transform // component_state_opacity:  state.modal.gui.top_left.opacity

  }, {
    component: 'gui_top_right',
    component_state_transform: !state.modal.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.gui.top_right.transform // component_state_opacity:  state.modal.gui.top_right.opacity

  }, {
    component: 'gui_bottom',
    component_state_transform: !state.modal.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.gui.bottom.transform // component_state_opacity:  state.modal.gui.bottom.opacity

  }, {
    component: 'gui_bottom_left',
    component_state_transform: !state.modal.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.gui.bottom_left.transform // component_state_opacity:  state.modal.gui.bottom_left.opacity

  }, {
    component: 'gui_bottom_right',
    component_state_transform: !state.modal.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.gui.bottom_right.transform // component_state_opacity:  state.modal.gui.bottom_right.opacity

  }, {
    component: 'gui_left',
    component_state_transform: !state.modal.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.gui.left.transform // component_state_opacity:  state.modal.gui.top.opacity

  }, {
    component: 'gui_right',
    component_state_transform: !state.modal.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.gui.right.transform // component_state_opacity:  state.modal.gui.top.opacity

  }, // gradient
  {
    component: 'component_app_modal_element_gradient_top',
    component_state_transform: !state.modal.gradient.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.gradient.top.transform // component_state_opacity:  state.modal.gradient.top.opacity

  }, {
    component: 'component_app_modal_element_gradient_bottom',
    component_state_transform: !state.modal.gradient.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.gradient.bottom.transform // component_state_opacity:  state.modal.gradient.bottom.opacity

  }, {
    component: 'component_app_modal_element_gradient_left',
    component_state_transform: !state.modal.gradient.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.gradient.left.transform // component_state_opacity:  state.modal.gradient.top.opacity

  }, {
    component: 'component_app_modal_element_gradient_right',
    component_state_transform: !state.modal.gradient.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.gradient.right.transform // component_state_opacity:  state.modal.gradient.top.opacity

  }, // morph
  {
    component: 'component_app_modal_element_morph_top',
    component_state_transform: !state.modal.morph.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.morph.top.transform // component_state_opacity:  state.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_bottom',
    component_state_transform: !state.modal.morph.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.morph.bottom.transform // component_state_opacity:  state.modal.morph.bottom.opacity

  }, {
    component: 'component_app_modal_element_morph_left',
    component_state_transform: !state.modal.morph.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.morph.left.transform // component_state_opacity:  state.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_right',
    component_state_transform: !state.modal.morph.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.morph.right.transform // component_state_opacity:  state.modal.morph.top.opacity

  }, // navs
  {
    component: 'header',
    component_state_transform: !state.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.nav.top.transform // component_state_opacity:  state.modal.nav.top.opacity

  }, {
    component: 'footer',
    component_state_transform: !state.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.nav.bottom.transform // component_state_opacity:  state.modal.nav.bottom.opacity

  }, {
    component: 'modal_nav_left',
    component_state_transform: !state.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.nav.left.transform // component_state_opacity:  state.modal.nav.top.opacity

  }, {
    component: 'modal_nav_right',
    component_state_transform: !state.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.nav.right.transform // component_state_opacity:  state.modal.nav.top.opacity

  }, // menu
  {
    component: 'component_app_modal_element_menu_top',
    component_state_transform: !state.modal.menu.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.menu.top.transform // component_state_opacity:  state.modal.menu.top.opacity

  }, {
    component: 'component_app_modal_element_menu_bottom',
    component_state_transform: !state.modal.menu.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.menu.bottom.transform // component_state_opacity:  state.modal.menu.bottom.opacity

  }, {
    component: 'component_app_modal_element_menu_left',
    component_state_transform: !state.modal.menu.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.menu.left.transform // component_state_opacity:  state.modal.menu.left.opacity

  }, {
    component: 'component_app_modal_element_menu_right',
    component_state_transform: !state.modal.menu.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.menu.right.transform // component_state_opacity:  state.modal.menu.right.opacity

  }, // page
  {
    component: 'component_app_modal_element_page_top',
    component_state_transform: !state.modal.page.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.page.top.transform // component_state_opacity:  state.modal.page.top.opacity

  }, {
    component: 'component_app_modal_element_page_bottom',
    component_state_transform: !state.modal.page.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.page.bottom.transform // component_state_opacity:  state.modal.page.bottom.opacity

  }, {
    component: 'component_app_modal_element_page_left',
    component_state_transform: !state.modal.page.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.page.left.transform // component_state_opacity:  state.modal.page.left.opacity

  }, {
    component: 'component_app_modal_element_page_right',
    component_state_transform: !state.modal.page.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.page.right.transform // component_state_opacity:  state.modal.page.right.opacity

  }, {
    component: 'component_app_modal_element_pop_top',
    component_state_transform: !state.modal.pop.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.pop.top.transform // component_state_opacity:  state.modal.pop.top.opacity

  }, {
    component: 'component_app_modal_element_pop_bottom',
    component_state_transform: !state.modal.pop.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.pop.bottom.transform // component_state_opacity:  state.modal.pop.bottom.opacity

  }, {
    component: 'component_app_modal_element_pop_left',
    component_state_transform: !state.modal.pop.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.pop.left.transform // component_state_opacity:  state.modal.pop.left.opacity

  }, {
    component: 'component_app_modal_element_pop_right',
    component_state_transform: !state.modal.pop.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.pop.right.transform // component_state_opacity:  state.modal.pop.right.opacity

  }, {
    component: 'component_app_modal_element_pip_top',
    component_state_transform: !state.modal.pip.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.pip.top.transform // component_state_opacity:  state.modal.pip.top.opacity

  }, {
    component: 'component_app_modal_element_pip_bottom',
    component_state_transform: !state.modal.pip.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top_0',
    component_state_display: state.modal.pip.bottom.transform // component_state_opacity:  state.modal.pip.bottom.opacity

  }, {
    component: 'component_app_modal_element_pip_left',
    component_state_transform: !state.modal.pip.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.pip.left.transform // component_state_opacity:  state.modal.pip.left.opacity

  }, {
    component: 'component_app_modal_element_pip_right',
    component_state_transform: !state.modal.pip.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left_0',
    component_state_display: state.modal.pip.right.transform // component_state_opacity:  state.modal.pip.right.opacity

  }];
  return components;
};

var _default = {
  get_components_handled: get_components_handled
};
exports.default = _default;
},{"../index.js":"index.js"}],"imports/functions.js":[function(require,module,exports) {
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
},{"../index.js":"index.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style.scss"));

var _events = _interopRequireDefault(require("./imports/events"));

var _components = _interopRequireDefault(require("./imports/components"));

var _functions = _interopRequireDefault(require("./imports/functions"));

var _ux;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      clientX: -1,
      clientY: -1
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
    sequence_game_intro: 0
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
  }
};
var dev_mode = false;
state.ux.platform.is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
state.ux.platform.is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var components; // Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
  authDomain: "phlygh-cd16b.firebaseapp.com",
  databaseURL: "https://phlygh-cd16b.firebaseio.com",
  projectId: "phlygh-cd16b",
  storageBucket: "phlygh-cd16b.appspot.com",
  messagingSenderId: "415995628382",
  appId: "1:415995628382:web:0295bf4137f3f5fd"
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
var stored_auth_user_cred = {};
var valid_user;
var valid_users_posts;
var valid_signed_in;
var db_users;
var upload_details = "";
var html = document.getElementById('html');
var body = document.getElementById('body');
var header = document.getElementById('header');
var posts_guides; // make auth ref

var auth = firebase.auth(); // make firestore ref

var db = firebase.firestore(); // listenforauth state changes

auth.onAuthStateChanged(function (auth_user) {
  console.log('onAuthStateChanged');

  if (auth_user == null) {
    stored_auth_user_cred = {}; // valid info render

    document.getElementById('valid_user_details').innerHTML = ""; // sign up / auth / create user

    document.getElementById('signup_form').innerHTML = "\n\t        <div>\n\t\t        <h6>sign up</h6>\n\n                <label for=\"signup_email\">email:</label>\n\t\t        <input placeholder=\"signup_email\" type=\"email\" id=\"signup_email\" required />\n                <label for=\"signup_password\">password:</label>\n\t\t        <input placeholder=\"signup_password\" type=\"password\" id=\"signup_password\" required />\n                <label for=\"signup_nickname\">nickname:</label>\n\t\t        <input placeholder=\"signup_nickname\" type=\"text\" id=\"signup_nickname\" required />\n                <label for=\"signup_username\">username:</label>\n\t\t        <input placeholder=\"signup_username\" type=\"text\" id=\"signup_username\" required />\n                <label for=\"signup_twitter\">twitter:</label>\n\t\t        <input placeholder=\"signup_twitter\" type=\"text\" id=\"signup_twitter\" required />\n                <label for=\"signup_video\">video:</label>\n\t\t        <input placeholder=\"signup_video\" type=\"text\" id=\"signup_video\" required />\n\t\t        <button id=\"signup_submit\" class=\"\">sign up</button>\n\t\t      </div>\n      \t";

    var _signup_email = document.getElementById('signup_email');

    var _signup_password = document.getElementById('signup_password');

    var signup_submit = document.getElementById('signup_submit');

    var _signup_nickname = document.getElementById('signup_nickname');

    var _signup_username = document.getElementById('signup_username');

    var _signup_twitter = document.getElementById('signup_twitter');

    var _signup_video = document.getElementById('signup_video');

    signup_submit.addEventListener('click', function (event) {
      event.preventDefault();
      auth.createUserWithEmailAndPassword(_signup_email.value, _signup_password.value).then(function (cred) {
        db_create_user(cred);
      });
    }); // sign in / auth

    document.getElementById('signin_form').innerHTML = "\n\n\t\t      <div>\n\t\t      <h6>sign in</h6>\n                <label for=\"signin_email\">email:</label>\n\t\t        <input placeholder=\"signin_email\" type=\"email\" id=\"signin_email\" required />\n                <label for=\"signin_password\">password:</label>\n\t\t        <input placeholder=\"signin_password\" type=\"password\" id=\"signin_password\" required />\n\t\t        <button id=\"signin_submit\" class=\"\">sign in</button>\n\t\t      </div>\n\t    ";
    var signin_email = document.getElementById('signin_email');
    var signin_password = document.getElementById('signin_password');
    var signin_submit = document.getElementById('signin_submit');
    signin_submit.addEventListener('click', function (event) {
      event.preventDefault();
      auth.signInWithEmailAndPassword(signin_email.value, signin_password.value).then(function (cred) {
        signin_email.value = "";
        signin_password.value = "";
      });
    });
    document.getElementById('upload_form').innerHTML = "";
    document.getElementById('create_form').innerHTML = "";
    document.getElementById('edit_form').innerHTML = "";
    document.getElementById('signout_form').innerHTML = "";
    console.log('firebase has connected');
    update_db();
  }

  ;

  if (auth_user != null) {
    stored_auth_user_cred = auth_user;
    document.getElementById('valid_user_details').innerHTML = "";
    document.getElementById('signup_form').innerHTML = "";
    document.getElementById('signin_form').innerHTML = ""; // upload

    document.getElementById('upload_form').innerHTML = "\n\t\t\t<div>\n\t\t\t<h6>upload</h6>\n\t\t\t<p id=\"upload_progress\">images only</p>\n\t\t\t<label id=\"create_upload\" for=\"fileButton\">Select file</label>\n\t\t\t<progress value=\"0\" max=\"100\" id=\"uploader\">0%</progress>\n\t\t\t<input class=\"display_none\" type=\"file\" value=\"upload\" id=\"fileButton\" accept=\"image/*\" title=\"&nbsp;\"/>\n\t\t\t<div id=\"upload_details\"></div>\n\t\t\t</div>\n\t\t";
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
          document.getElementById('upload_details').innerHTML += "\n\t\t\t\t\t\t\t<div id=\"uploaded_image\" style=\"background-image: url(".concat(upload_details, ")\">\n\t\t\t\t\t\t\t</div>");
        });
      });
    }); // create post

    document.getElementById('create_form').innerHTML = "\n\t\t\t<div>\n\t\t\t<h6>create</h6>\n\t\t\t<input placeholder=\"title\" type=\"text\" id=\"create_title\" value=\"post title\" required />\n\t\t\t<input placeholder=\"child\" type=\"text\" id=\"create_child\" value=\"roster\" required />\n\t\t\t<input placeholder=\"content\" type=\"text\" id=\"create_content\" value=\"???\" required />\n\t\t\t<input placeholder=\"video\" type=\"text\" id=\"create_video\" value=\"https://www.youtube.com/embed/jYqRiKu7gY0\" required />\n\t\t\t<button id=\"create_submit\" class=\"\">create_submit</button>\n\t\t\t</div>\n\t\t";
    var create_form = document.getElementById('create_form');
    var create_title = document.getElementById('create_title');
    var create_child = document.getElementById('create_child');
    var create_content = document.getElementById('create_content');
    var create_video = document.getElementById('create_video');
    var create_submit = document.getElementById('create_submit');
    create_submit.addEventListener('click', function (event) {
      event.preventDefault();
      var date = new Date();
      var ref = db.collection('guides').doc();
      var id = ref.id;
      var featured_image;

      if (upload_details == "") {
        featured_image = "https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg";
      }

      ;
      db.collection('guides').doc(ref.id).set({
        title: create_title.value,
        child: create_child.value,
        content: create_content.value,
        image: featured_image,
        video: create_video.value,
        likes: 0,
        views: 0,
        time: date.getTime(),
        id: ref.id,
        author_id: valid_user.id
      }).then(function () {
        console.log('guide made');
        create_title.value = "";
        create_child.value = "";
        create_content.value = "";
        update_db();
      }).catch(function (err) {
        console.log(err.message);
      });
    }); // edit valid user

    document.getElementById('edit_form').innerHTML = "\n\t\t\t<div>\n\t\t\t<h6>edit profile</h6>\n\t\t\t<input placeholder=\"edit_username\" type=\"text\" id=\"edit_username\"/>\n\t\t\t<input placeholder=\"edit_nickname\" type=\"text\" id=\"edit_nickname\"/>\n\t\t\t<input placeholder=\"edit_twitter\" type=\"text\" id=\"edit_twitter\"/>\n\n\t\t\t<button id=\"edit_submit\" class=\"\">edit</button>\n\t\t\t<h6>delete profile</h6>\n\t\t\t<button id=\"delete_submit\" class=\"\">delete</button>\n\t\t\t</div>\n       \t";
    var edit_submit = document.getElementById('edit_submit');
    edit_submit.addEventListener('click', function (event) {
      event.preventDefault();
      db_edit("users", stored_auth_user_cred.uid);
    }); // delete / un-auth

    var delete_submit = document.getElementById('delete_submit');
    delete_submit.addEventListener('click', function (event) {
      event.preventDefault();
      db_delete("users", stored_auth_user_cred.uid);
    }); // signout / un-auth

    document.getElementById('signout_form').innerHTML = "\n\t\t\t<div>\n\t\t\t<h6>sign out</h6>\n\t\t\t<button id=\"signout_submit\" class=\"\">sign out</button>\n\t\t\t</div>\n      \t"; // signout / un-auth

    var signout_submit = document.getElementById('signout_submit');
    signout_submit.addEventListener('click', function (event) {
      event.preventDefault();
      auth.signOut().then(function () {
        console.log('logged out');
      });
    });
    console.log('firebase has connected');
    update_db();
  }

  ;
});

var handle_add_device_events = function handle_add_device_events() {
  if (document.getElementById('footer_tabs_1') != null) {
    document.getElementById('footer_tabs_1').addEventListener("click", function (event) {
      state.modal.gradient.top.transform = !state.modal.gradient.top.transform;
    });
  }

  ;

  if (document.getElementById('footer_tabs_2') != null) {
    document.getElementById('footer_tabs_2').addEventListener("click", function (event) {
      state.modal.gradient.bottom.transform = !state.modal.gradient.bottom.transform;
    });
  }

  ;

  if (document.getElementById('footer_tabs_3') != null) {
    document.getElementById('footer_tabs_3').addEventListener("click", function (event) {
      state.modal.gradient.left.transform = !state.modal.gradient.left.transform;
    });
  }

  ;

  if (document.getElementById('footer_tabs_4') != null) {
    document.getElementById('footer_tabs_4').addEventListener("click", function (event) {
      state.modal.gradient.right.transform = !state.modal.gradient.right.transform;
    });
  }

  ;

  if (document.getElementById('footer_tabs_5') != null) {
    document.getElementById('footer_tabs_5').addEventListener("click", function (event) {
      state.modal.pop.top.transform = !state.modal.pop.top.transform;
    });
  }

  ;

  if (document.getElementById('footer_tabs_6') != null) {
    document.getElementById('footer_tabs_6').addEventListener("click", function (event) {
      state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
    });
  }

  ;

  if (document.getElementById('footer_tabs_7') != null) {
    document.getElementById('footer_tabs_7').addEventListener("click", function (event) {
      state.modal.pop.left.transform = !state.modal.pop.left.transform;
    });
  }

  ;

  if (document.getElementById('footer_tabs_8') != null) {
    document.getElementById('footer_tabs_8').addEventListener("click", function (event) {
      state.modal.pop.right.transform = !state.modal.pop.right.transform;
    });
  }

  ;

  if (document.getElementById('shortcut_after_load') != null) {
    document.getElementById('shortcut_after_load').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('shortcut_after_load');
      }

      ;
      handle_render();
    });
  }

  ;

  if (document.getElementById('link_home_mark') != null) {
    document.getElementById('link_home_mark').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('link_home_mark');
      }

      ;
      state.modal.page.top.transform = !state.modal.page.top.transform;
      handle_render();
    });
  }

  ;

  if (document.getElementById('header_link_1') != null) {
    document.getElementById('header_link_1').addEventListener('click', function (event) {
      state.modal.page.top.transform = !state.modal.page.top.transform;
    });
  }

  ;

  if (document.getElementById('header_link_2') != null) {
    document.getElementById('header_link_2').addEventListener('click', function (event) {
      state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
    });
  }

  ;

  if (document.getElementById('header_link_3') != null) {
    document.getElementById('header_link_3').addEventListener('click', function (event) {
      state.modal.page.left.transform = !state.modal.page.left.transform;
    });
  }

  ;

  if (document.getElementById('header_link_4') != null) {
    document.getElementById('header_link_4').addEventListener('click', function (event) {
      state.modal.page.right.transform = !state.modal.page.right.transform;
    });
  }

  ;

  if (document.getElementById('header_link_5') != null) {
    document.getElementById('header_link_5').addEventListener('click', function (event) {
      state.modal.page.right.transform = !state.modal.page.right.transform;
    });
  }

  ;

  if (document.getElementById('header_link_6') != null) {
    document.getElementById('header_link_6').addEventListener('click', function (event) {
      state.modal.page.right.transform = !state.modal.page.right.transform;
    });
  }

  ;

  if (document.getElementById('header_link_7') != null) {
    document.getElementById('header_link_7').addEventListener('click', function (event) {
      state.modal.page.right.transform = !state.modal.page.right.transform;
    });
  }

  ;

  if (document.getElementById('header_link_8') != null) {
    document.getElementById('header_link_8').addEventListener('click', function (event) {
      state.modal.page.right.transform = !state.modal.page.right.transform;
    });
  }

  ;

  if (document.getElementById('gui_top_left') != null) {
    document.getElementById('gui_top_left').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('gui_top_left');
      }

      ;
      state.modal.menu.left.transform = !state.modal.menu.left.transform;
      state.modal.gui.top_right.transform = true;
      state.data.dark_mode = state.data.dark_mode;
      handle_render();
    });
  }

  ;

  if (document.getElementById('gui_top') != null) {
    document.getElementById('gui_top').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('gui_top');
      }

      ;
      handle_render();
    });
  }

  ;

  if (document.getElementById('gui_top_right') != null) {
    document.getElementById('gui_top_right').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('gui_top_right');
      }

      ; //modal_gui_activate_all();
    });
  }

  ;

  if (document.getElementById('user_settings') != null) {
    document.getElementById('user_settings').addEventListener("click", function (event) {
      state.modal.page.right.transform = !state.modal.page.right.transform;
    });
  }

  ;

  if (document.getElementById('gui_left') != null) {
    document.getElementById('gui_left').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('gui_left');
      }

      ;
      state.modal.menu.left.transform = !state.modal.menu.left.transform;
    });
  }

  ;

  if (document.getElementById('gui_right') != null) {
    document.getElementById('gui_right').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('gui_right');
      }

      ;
      state.modal.menu.right.transform = !state.modal.menu.right.transform;
    });
  }

  ;

  if (document.getElementById('gui_bottom_left') != null) {
    document.getElementById('gui_bottom_left').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('gui_bottom_left');
      }

      ;
    });
  }

  ;

  if (document.getElementById('gui_bottom') != null) {
    document.getElementById('gui_bottom').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('gui_bottom');
      }

      ;
      state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
    });
  }

  ;

  if (document.getElementById('gui_bottom_right') != null) {
    document.getElementById('gui_bottom_right').addEventListener('click', function (event) {
      if (dev_mode == true) {
        alert('gui_bottom_right');
      }

      ;
    });
  }

  ;
};

var handle_add_status_events = function handle_add_status_events() {
  if (document.getElementById('component_app_status_transform_gui_top') != null) {
    // gui - top
    document.getElementById('component_app_status_transform_gui_top').addEventListener("click", function (event) {
      state.modal.gui.top.transform = !state.modal.gui.top.transform;
    }); // gui - top_left

    document.getElementById('component_app_status_transform_gui_top_left').addEventListener("click", function (event) {
      state.modal.gui.top_left.transform = !state.modal.gui.top_left.transform;
    }); // gui - top_right

    document.getElementById('component_app_status_transform_gui_top_right').addEventListener("click", function (event) {
      state.modal.gui.top_right.transform = !state.modal.gui.top_right.transform;
    }); // gui - left

    document.getElementById('component_app_status_transform_gui_left').addEventListener("click", function (event) {
      state.modal.gui.left.transform = !state.modal.gui.left.transform;
    }); // gui - bottom

    document.getElementById('component_app_status_transform_gui_bottom').addEventListener("click", function (event) {
      state.modal.gui.bottom.transform = !state.modal.gui.bottom.transform;
    }); // gui - bottom_left

    document.getElementById('component_app_status_transform_gui_bottom_left').addEventListener("click", function (event) {
      state.modal.gui.bottom_left.transform = !state.modal.gui.bottom_left.transform;
    }); // gui - bottom_right

    document.getElementById('component_app_status_transform_gui_bottom_right').addEventListener("click", function (event) {
      state.modal.gui.bottom_right.transform = !state.modal.gui.bottom_right.transform;
    }); // gui - right

    document.getElementById('component_app_status_transform_gui_right').addEventListener("click", function (event) {
      state.modal.gui.right.transform = !state.modal.gui.right.transform;
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

  if (document.getElementById('component_app_status_transform_pip_top') != null) {
    // pip - top
    document.getElementById('component_app_status_transform_pip_top').addEventListener("click", function (event) {
      state.modal.pip.top.transform = !state.modal.pip.top.transform;
    }); // pip - left

    document.getElementById('component_app_status_transform_pip_left').addEventListener("click", function (event) {
      state.modal.pip.left.transform = !state.modal.pip.left.transform;
    }); // pip - bottom

    document.getElementById('component_app_status_transform_pip_bottom').addEventListener("click", function (event) {
      state.modal.pip.bottom.transform = !state.modal.pip.bottom.transform;
    }); // pip - right

    document.getElementById('component_app_status_transform_pip_right').addEventListener("click", function (event) {
      state.modal.pip.right.transform = !state.modal.pip.right.transform;
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

var handle_onload_time = function handle_onload_time() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date();
  state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
  state.data.onload_time = state.data.time;
  handle_render();
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
      console.log('duration: ' + state.motion.duration); //handle_render_data_value();
    }, 1000);
  })();
};

var update_db = function update_db() {
  get_db_guides();
  get_db_users();
};

var db_create_user = function db_create_user(cred) {
  var date = new Date();
  var featured_image;

  if (upload_details == "") {
    featured_image = "https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg";
  }

  ; // create user after auth

  db.collection('users').doc(cred.user.uid).set({
    id: cred.user.uid,
    email: cred.user.email,
    child: 'user',
    username: signup_username.value,
    nickname: signup_nickname.value,
    twitter: signup_twitter.value,
    created: date.getTime(),
    image: featured_image,
    video: signup_video.value,
    follows: [{
      id: cred.user.uid
    }],
    followers: [{
      id: cred.user.uid
    }]
  }).then(function () {
    stored_auth_user_cred = cred;
    signup_email.value = "";
    signup_password.value = "";
    signup_twitter.value = "";
    signup_video.value = "";
    signup_username.value = "";
    signup_nickname.value = "";
  }).catch(function (err) {
    console.log(err.message);
  });
}; // edit


var db_edit = function db_edit(collection, deletable_id) {
  console.log(deletable_id);
  var date = new Date();
  db.collection(collection).doc(deletable_id).update({
    id: deletable_id,
    email: valid_user.email,
    //child: document.getElementById('child').value,
    username: document.getElementById('edit_username').value,
    nickname: document.getElementById('edit_nickname').value,
    twitter: document.getElementById('edit_twitter').value
  }).then(function () {
    //document.getElementById('child').value = ``,
    document.getElementById('edit_username').value = "", document.getElementById('edit_nickname').value = "", document.getElementById('edit_twitter').value = "", alert("Document successfully written!");
  }).catch(function (error) {
    console.error("Error writing document: ", error);
  });
}; // delete user


var db_delete = function db_delete(collection, deletable_id) {
  console.log(deletable_id);
  db.collection(collection).doc(deletable_id).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
};

var handle_render_data_value = function handle_render_data_value() {
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
}; // generate


var Generate_new_li_post = function Generate_new_li_post(data_Object) {
  var element = document.createElement('li');

  if (data_Object.child != 'user') {
    if (data_Object.title != null) {
      element.setAttribute("id", data_Object.title);
    }

    ;

    if (data_Object.title != null) {
      element.classList = data_Object.title + ' post bg_grey';
    }

    ;

    if (data_Object != null) {
      element.innerHTML += "\n                        \n                        <div id=\"post_actions\" class=\"position_absolute top_0 left_0 height_5vw width_5vw\">\n                            <div class=\"position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey\">\n                                <div id=\"\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                            </div>\n                        </div>\n\n\t          \t\t\t<p class=\"title\">".concat(data_Object.title, ": ").concat(data_Object.child, "</p>\n\n                        <img class=\"post_image\" src=\"").concat(data_Object.image, "\" alt=\"").concat(data_Object.username, "\"/>\n\n\t          \t\t\t<div class=\"post_image\" style=\"background-image: url(").concat(data_Object.image, ")\">\n                        \n\t\t\t                <button>edit</button>\n\n                            <p class=\"\">photo bg:<a href=\"").concat(data_Object.author_id, "\">").concat(data_Object.author_id, "</a></p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"post_edit\">\n\n\t\t\t                <button>save</button>\n\t\t\t                <button>edit</button>\n\t\t\t                <button>edit</button>\n\t\t\t                <button>edit</button>\n\t\t\t                <button>edit</button>\n\t\t\t                <button>edit</button>\n\t\t\t                <button>edit</button>\n\t\t\t                <button>edit</button>\n\n\t\t\t\t\t\t</div>\n\n                        <iframe title=\"").concat(data_Object.title, "\" width=\"100%\" height=\"315\" src=\"").concat(data_Object.video, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                       \n                        <p class=\"\">info:</p>\n\n                        <div class=\"post_hover_info hover_show position_relative float_left width_100\">\n                \n                            <p class=\"\">video:<a href=\"").concat(data_Object.video, "\">").concat(data_Object.video, "</a></p>\n                            <p class=\"\">child: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.child, "</a></p>\n                            <p class=\"\">time: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.time, "</a></p>\n                            <p class=\"\">title: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.title, "</a></p>\n                            <p class=\"\">likes: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.likes, "</a></p>\n                            <p class=\"\">views: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.views, "</a></p>\n                            <p class=\"\">author_id: <a href=\"").concat(data_Object.author_id, "\">").concat(data_Object.author_id, "</a></p>\n\n                       </div>\n\n\t              ");
    }

    ;

    if (data_Object.id != null) {
      element.innerHTML += "\n\t                  <p class=\"\">id:".concat(data_Object.id, "</p>\n\t              ");
    }

    ;

    if (data_Object != null) {
      element.innerHTML += "\n\t\t\t\t\t<div class=\"post_crud\">\n\t\t                <button>like?</button>\n\t\t                <button>dislike?</button>\n\t\t                <button>rate 1- 3?</button>\n\t\t                <button>re\"tweet\"?</button>\n\t\t                <button>share</button>\n\t\t                <button>open</button>\n\t\t                <button>edit</button>\n\t\t                <button>save</button>\n                    </div>\n\t              ";
    }

    ; // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    element.addEventListener("click", function (event) {
      alert('not user'); // from posts to pop

      history.pushState("", document.title, "/");
      window.history.pushState('', '', 'p/' + data_Object.id);
      check_state();
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>author_id: ".concat(data_Object.author_id, "</p>");
      state.modal.pop.top.transform = true; // from pop to page

      document.getElementById('component_app_modal_element_pop_top_content').addEventListener("click", function (event) {
        state.modal.pop.top.transform = false;
        state.modal.page.top.transform = true;
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = '';
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>author_id: ".concat(data_Object.author_id, "</p>"); // from page to pip

        document.getElementById('component_app_modal_element_page_top_content').addEventListener("click", function (event) {
          state.modal.page.top.transform = false;
          state.modal.pip.top.transform = true;
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML = '';
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>author_id: ".concat(data_Object.author_id, "</p>"); // from pip to gradient

          document.getElementById('component_app_modal_element_pip_top_content').addEventListener("click", function (event) {
            state.modal.pip.top.transform = false;
            state.modal.gradient.top.transform = true;
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML = '';
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>author_id: ".concat(data_Object.author_id, "</p>"); // from gradient to morph

            document.getElementById('component_app_modal_element_gradient_top_content').addEventListener("click", function (event) {
              state.modal.gradient.top.transform = false;
              state.modal.morph.top.transform = true;
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML = '';
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>title: ".concat(data_Object.title, "</p>");
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>author_id: ".concat(data_Object.author_id, "</p>"); // from morph to ?

              document.getElementById('component_app_modal_element_morph_top_content').addEventListener("click", function (event) {
                state.modal.morph.top.transform = false;
                alert('morph clicked');
              });
            });
          });
        });
      });
    });
  }

  ;

  if (data_Object.child == 'user') {
    if (data_Object.id != null) {
      element.setAttribute("id", data_Object.id);
    }

    ;

    if (data_Object.id != null) {
      element.classList = data_Object.id + ' user bg_grey';
    }

    ;

    if (data_Object != null) {
      element.innerHTML += "\n                        \n                        <div id=\"post_actions\" class=\"position_absolute top_0 left_0 height_5vw width_5vw\">\n                            <div class=\"position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey\">\n                                <div id=\"\" class=\"gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto\"></div>\n                            </div>\n                        </div>\n                        \n                        <p class=\"title\">".concat(data_Object.username, ": ").concat(data_Object.child, "</p>\n\n                            <iframe title=\"").concat(data_Object.title, "\" width=\"100%\" height=\"315\" src=\"").concat(data_Object.video, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                            \n                        <img class=\"post_image\" src=\"").concat(data_Object.image, "\" alt=\"").concat(data_Object.username, "\"/>\n\n\t          \t\t\t<div class=\"post_image\" style=\"background-image: url(").concat(data_Object.image, ")\">\n\n\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n                            <p class=\"\">photo bg:<a href=\"").concat(data_Object.username, "\">").concat(data_Object.username, "</a></p>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"post_edit\">\n\n\t\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\n\t\t\t\t\t\t\t</div>\n\n                      <p class=\"\">info:</p>\n\n             <div class=\"post_hover_info hover_show position_relative float_left width_100\">\n                \n                      <p class=\"\">username: <a href=\"").concat(data_Object.video, "\">").concat(data_Object.username, "</a></p>\n                   <p class=\"\">video:<a href=\"").concat(data_Object.video, "\">").concat(data_Object.video, "</a></p>\n                            <p class=\"\">child: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.child, "</a></p>\n                            <p class=\"\">time: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.time, "</a></p>\n                            <p class=\"\">title: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.title, "</a></p>\n                            <p class=\"\">likes: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.likes, "</a></p>\n                            <p class=\"\">views: <a href=\"").concat(data_Object.title, "\">").concat(data_Object.views, "</a></p>\n                            <p class=\"\">author_id: <a href=\"").concat(data_Object.author_id, "\">").concat(data_Object.author_id, "</a></p>\n\n                      <p class=\"\">video:<a href=\"").concat(data_Object.video, "\">").concat(data_Object.video, "</a></p>\n                      <p class=\"\">child: <a href=\"").concat(data_Object.video, "\">").concat(data_Object.child, "</a></p>\n                      <p class=\"\">created: <a href=\"").concat(data_Object.video, "\">").concat(data_Object.created, "</a></p>\n                      <p class=\"\">twitter: <a href=\"").concat(data_Object.video, "\">").concat(data_Object.twitter, "</a></p>\n                      <p class=\"\">nickname: <a href=\"").concat(data_Object.video, "\">").concat(data_Object.nickname, "</a></p>\n\n             </div>\n\n\t              ");
    }

    ;

    if (data_Object.id != null) {
      element.innerHTML += "\n\t                  <p class=\"\">id:".concat(data_Object.id, "</p>\n\t              ");
    }

    ;

    if (data_Object != null) {
      element.innerHTML += "\n\t\t\t\t\t<div class=\"post_crud\">\n\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t\t                <button><div class=\"gui_logo_mark position_relative height_100 width_100 margin_auto\"></div></button>\n\t                </div>\n\t              ";
    }

    ; // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    element.addEventListener("click", function (event) {
      alert('user'); // from posts to pop

      history.pushState("", document.title, "/");
      window.history.pushState('', '', data_Object.username);
      check_state();
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>email: ".concat(data_Object.email, "</p>");
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>nickname: ".concat(data_Object.nickname, "</p>");
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>twitter: ".concat(data_Object.twitter, "</p>");
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += "<p>username: ".concat(data_Object.username, "</p>");
      state.modal.pop.top.transform = true; // from pop to page

      document.getElementById('component_app_modal_element_pop_top_content').addEventListener("click", function (event) {
        state.modal.pop.top.transform = false;
        state.modal.page.top.transform = true;
        document.getElementById('component_app_modal_element_page_top_content').innerHTML = '';
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>email: ".concat(data_Object.email, "</p>");
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>nickname: ".concat(data_Object.nickname, "</p>");
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>twitter: ".concat(data_Object.twitter, "</p>");
        document.getElementById('component_app_modal_element_page_top_content').innerHTML += "<p>username: ".concat(data_Object.username, "</p>"); // from page to pip

        document.getElementById('component_app_modal_element_page_top_content').addEventListener("click", function (event) {
          state.modal.page.top.transform = false;
          state.modal.pip.top.transform = true;
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML = '';
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>email: ".concat(data_Object.email, "</p>");
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>nickname: ".concat(data_Object.nickname, "</p>");
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>twitter: ".concat(data_Object.twitter, "</p>");
          document.getElementById('component_app_modal_element_pip_top_content').innerHTML += "<p>username: ".concat(data_Object.username, "</p>"); // from pip to gradient

          document.getElementById('component_app_modal_element_pip_top_content').addEventListener("click", function (event) {
            state.modal.pip.top.transform = false;
            state.modal.gradient.top.transform = true;
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML = '';
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>email: ".concat(data_Object.email, "</p>");
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>nickname: ".concat(data_Object.nickname, "</p>");
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>twitter: ".concat(data_Object.twitter, "</p>");
            document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += "<p>username: ".concat(data_Object.username, "</p>"); // from gradient to morph

            document.getElementById('component_app_modal_element_gradient_top_content').addEventListener("click", function (event) {
              state.modal.gradient.top.transform = false;
              state.modal.morph.top.transform = true;
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML = '';
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>id: ".concat(data_Object.id, "</p>");
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>email: ".concat(data_Object.email, "</p>");
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>nickname: ".concat(data_Object.nickname, "</p>");
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>twitter: ".concat(data_Object.twitter, "</p>");
              document.getElementById('component_app_modal_element_morph_top_content').innerHTML += "<p>username: ".concat(data_Object.username, "</p>"); // from morph to ?

              document.getElementById('component_app_modal_element_morph_top_content').addEventListener("click", function (event) {
                state.modal.morph.top.transform = false;
                alert('morph clicked');
              });
            });
          });
        });
      });
    });
  }

  ;
  /*
  element.children[1].children[3].addEventListener("click", function(event) {
  });
  */

  return element;
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
}; // sort


var fb_sorted_library = function fb_sorted_library(the_arr, x) {
  return the_arr.sort(find_sort(x));
}; // get


var get_db_guides = function get_db_guides() {
  //db.settings({timestampsInSnapshots: true});
  db.collection('guides').get().then(function (snapshot) {
    console.log('snapshot.docs: ');
    console.log(snapshot.docs);
    posts_guides = [];
    document.getElementById('posts_random').innerHTML = "";
    snapshot.docs.forEach(function (doc) {
      var items = doc.data();
      posts_guides.push(items);
    });
    fb_sorted_library(posts_guides, 'timedown').forEach(function (post) {
      document.getElementById('posts_random').appendChild(Generate_new_li_post(post));
    });
    console.log('posts_guides');
    console.log(posts_guides);
  });
}; // get


var get_db_users = function get_db_users() {
  //db.settings({timestampsInSnapshots: true});
  db.collection('users').get().then(function (snapshot) {
    console.log('snapshot.docs: ');
    console.log(snapshot.docs);
    document.getElementById('db_all_users').innerHTML = "";
    db_users = [];
    snapshot.docs.forEach(function (doc) {
      var items = doc.data();
      db_users.push(items);
    });
    db_users.forEach(function (post) {
      document.getElementById('db_all_users').appendChild(Generate_new_li_post(post));
    });

    if (stored_auth_user_cred.uid != null) {
      console.log('stored_auth_user_cred.uid: ' + stored_auth_user_cred.uid); // match auth user with database collection: users

      valid_user = {};
      valid_users_posts = [];
      valid_signed_in = false; // match auth and valid user

      for (var i = 0; i < db_users.length; i++) {
        if (db_users[i].id == stored_auth_user_cred.uid) {
          console.log('check match from db_users[i]');
          console.log(db_users[i]);
          valid_user = db_users[i];
          valid_signed_in = true;
        }
      }

      ; // match post by valid user

      for (var i = 0; i < posts_guides.length; i++) {
        if (valid_user.id == posts_guides[i].author_id) {
          //alert('found post by user: ' + posts_guides[i]);
          valid_users_posts.push(posts_guides[i]);
        }
      } // match followers


      var valid_users_followers = [];

      for (var i = 0; i < db_users.length; i++) {
        for (var x = 0; x < valid_user.followers.length; x++) {
          console.log('does: ' + db_users[i].id + ' and ' + valid_user.followers[x].id);

          if (db_users[i].id == valid_user.followers[x].id) {
            valid_users_followers.push(db_users[i]);
          }

          ;
        }

        ;
      }

      ; // match follows

      var valid_users_follows = [];

      for (var i = 0; i < db_users.length; i++) {
        for (var x = 0; x < valid_user.follows.length; x++) {
          console.log('does: ' + db_users[i].id + ' and ' + valid_user.follows[x].id);

          if (db_users[i].id == valid_user.follows[x].id) {
            valid_users_follows.push(db_users[i]);
          }

          ;
        }

        ;
      }

      ;

      if (valid_signed_in) {
        document.getElementById('user_settings').style = "background-image: url(".concat(valid_user.image, ")");
        document.getElementById('valid_user_details').innerHTML = "<h6>valid_user_details</h6>";
        document.getElementById('valid_user_details').innerHTML += "<p>id: ".concat(valid_user.id, "</p>");
        document.getElementById('valid_user_details').innerHTML += "<p>email: ".concat(valid_user.email, "</p>");
        document.getElementById('valid_user_details').innerHTML += "<p>nickname: ".concat(valid_user.nickname, "</p>");
        document.getElementById('valid_user_details').innerHTML += "<p>twitter: ".concat(valid_user.twitter, "</p>");
        document.getElementById('valid_user_details').innerHTML += "<p>username: ".concat(valid_user.username, "</p>"); // render matched post

        document.getElementById('valid_user_posts_title').innerHTML = "<h6>valid user's posts</h6>";
        valid_users_posts.forEach(function (post) {
          document.getElementById('valid_user_posts').appendChild(Generate_new_li_post(post));
        }); // follows

        document.getElementById('valid_user_follows').innerHTML = "<h6>valid user's follows</h6>";
        valid_users_follows.forEach(function (post) {
          document.getElementById('valid_user_follows').appendChild(Generate_new_li_post(post));
        }); // followers

        document.getElementById('valid_user_followers').innerHTML = "<h6>valid user's followers</h6>";
        valid_users_followers.forEach(function (post) {
          document.getElementById('valid_user_followers').appendChild(Generate_new_li_post(post));
        });
        console.log('valid_user');
        console.log(valid_user);
      }

      ;
    }

    ;
    check_url();
  });
}; // play


var play_lead = function play_lead() {
  if (state.data.scene == 0) {
    clear_scene_Interval();
    document.getElementById('lead_content').innerHTML = "\n     \t<div id=\"logo_mark\" class=\"leaveBottomvh animated025 gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_50 width_50 margin_auto\"></div> \n        ";
    document.getElementById('lead_control').innerHTML = "\n                <div id=\"next\" class=\"position_absolute top_0 bottom_0 right_0 bg_grey color_white height_1205vw line_height_1205vw font_size_1205vw margin_auto\">next</div>\n                <div id=\"last\" class=\"position_absolute top_0 bottom_0 left_0 bg_grey color_white height_1205vw line_height_1205vw font_size_1205vw margin_auto\">last</div>\n        ";
  }

  ;

  if (state.data.scene == 1) {
    sequence_game_intro();
  }

  ;

  if (state.data.scene == 2) {
    sequence_game_intro();
  }

  ; // events

  if (state.data.scene == 0) {
    if (document.getElementById('next') != null) {
      document.getElementById('next').addEventListener('click', function (event) {
        //alert('next');
        state.data.scene += 1;
        play_lead();
      });
    }

    ;

    if (document.getElementById('last') != null) {
      document.getElementById('last').addEventListener('click', function (event) {
        //alert('last');
        state.data.scene -= 1;
        play_lead();
      });
    }

    ;
  }

  ;
}; // intervals


var act_after_check_url = function act_after_check_url() {
  state.data.route += 1;
  console.log(state.data.route);

  if (state.data.route == 1) {
    console.log('db loaded, url checked, local?, url: ' + state.data.onload_url);
    console.log('posts_guides');
    console.log(fb_sorted_library(posts_guides, 'timedown'));
    console.log('db_users');
    console.log(fb_sorted_library(db_users, 'timedown'));
    document.getElementById('load_bar_container_border').classList = "easing_01 position_absolute bottom_0 left_0 margin_auto width_1205 height_100 float_left"; // refresh library

    setTimeout(function () {
      handle_onload_time();
      handle_time();
      handle_add_device_events();
      handle_add_status_events();
      act_after_check_url();
    }, 250);
  }

  ;

  if (state.data.route == 2) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_absolute bottom_0 left_0 margin_auto width_25 height_100 float_left"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 500);
  }

  ;

  if (state.data.route == 3) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_absolute bottom_0 left_0 margin_auto width_3705 height_100 float_left"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 1);
  }

  ;

  if (state.data.route == 4) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_absolute bottom_0 left_0 margin_auto width_50 height_100 float_left"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 1);
  }

  ;

  if (state.data.route == 5) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_absolute bottom_0 left_0 margin_auto width_6205 height_100 float_left"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 1);
  }

  ;

  if (state.data.route == 6) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_absolute bottom_0 left_0 margin_auto width_75 height_100 float_left"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 1);
  }

  ;

  if (state.data.route == 7) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_absolute bottom_0 left_0 margin_auto width_8705 height_100 float_left"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 250);
  }

  ;

  if (state.data.route == 8) {
    document.getElementById('load_bar_container_border').classList = "easing_01 position_absolute bottom_0 left_0 margin_auto width_100 height_100 float_left";
    console.log('done loading'); // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 1000);
  }

  ;

  if (state.data.route == 9) {
    document.getElementById('load_bar_container').classList = "animated1 leaveBottomvh position_fixed bottom_0 left_0 margin_auto width_100 height_1vh float_left z_index_1"; // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 1000);
  }

  ;

  if (state.data.route == 10) {
    document.getElementById('logo_mark').classList = "gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_50 width_50 margin_auto";
    document.getElementById('load_bar_container').classList = "display_none bottom_0 left_0 margin_auto width_100 height_1vh float_left z_index_1";

    if (state.ux.platform.is_Desktop == true) {
      modal_reset();
    }

    ;

    if (state.ux.platform.is_Mobile == true) {
      modal_mobile_home();
    }

    ;
    handle_render(); // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 1000);
  }

  ;

  if (state.data.route == 11) {
    play_lead();
    /*
       if (state.data.onload_url == 'home') {
           sound_effect_beep.play();
           setTimeout(function() {
               state.modal.pop.top.transform = true;
           }, 5000);
       };
        if (state.data.onload_url == 'post') {
           sound_effect_beep.play();
           setTimeout(function() {
               state.modal.pop.top.transform = true;
           }, 5000);
       };
        if (state.data.onload_url == 'user') {
           sound_effect_beep.play();
           setTimeout(function() {
               state.modal.pop.top.transform = true;
           }, 5000);
       };
    */

    sound_effect_beep.play(); // refresh library

    setTimeout(function () {
      act_after_check_url();
    }, 100);
  }

  ;
}; // sequence


var sequence_game_intro = function sequence_game_intro() {
  // execute on timeout
  if (state.data.game == 0) {
    setTimeout(function () {
      state.data.game += 1;
      document.getElementById('lead_content').innerHTML = "\n\n            <div id=\"lead_scene\" class=\"\">\n                <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto\">\n                    <div id=\"logo_mark\" class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                </div>\n\n                <div class=\"position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto\">\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                </div>\n\n            </div>\n            ";
      sequence_game_intro();
    }, 1000);
  }

  ; // execute on timeout

  if (state.data.game == 1) {
    setTimeout(function () {
      state.data.game += 1;
      document.getElementById('lead_content').innerHTML = "\n\n            ";
      sequence_game_intro();
    }, 1000);
  }

  ; // execute on timeout

  if (state.data.game == 2) {
    setTimeout(function () {
      state.data.game += 1;
      document.getElementById('lead_content').innerHTML = "\n\n            <div id=\"lead_scene\" class=\"\">\n                <div class=\"position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto\">\n                    <div id=\"logo_mark\" class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                </div>\n\n                <div class=\"position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto\">\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                    <div class=\"position_relative height_100 width_1205 margin_auto float_left\">\n                        <div class=\"gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto\"></div>\n                    </div>\n                </div>\n\n            </div>\n            ";
      sequence_game_intro();
    }, 1000);
  }

  ; // execute on timeout

  if (state.data.game == 3) {
    setTimeout(function () {
      scene_cardboard();
      state.data.game = 0;
    }, 1000);
  }

  ;
};

var clear_scene_Interval = function clear_scene_Interval() {
  if (dev_mode) {
    alert('clear_scene_Interval');
  }

  ;
  clearInterval(run_scene_Interval);
  state.motion.frame = 0;
};

var run_scene_Interval; // scene

var scene_cardboard = function scene_cardboard() {
  // execute on timeout
  document.getElementById('lead_content').innerHTML = "            \n\t      <div id=\"cardboard\" class=\"position_relative float_left width_100vw height_100 overflow_hidden\">\n\t         \n\t         <div bg=\"vr_bg\" class=\"transform_translate3d_top0 position_absolute top_0 left_0 right_0 width_100 height_100 opacity_005\">\n\t            <div id=\"row_accent_noise\"></div>\n\t         </div>\n\n\t         <div id=\"vr_mg\" class=\"transform_translate3d_top0 position_absolute top_0 left_0 right_0 width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box easing_01\">\n\t            <div id=\"column1\" class=\"position_relative float_left width_100 height_100 \">\n\t               <div id=\"vr_mg_Left_Top\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  vr_mg Left Top\n\t               </div>\n\t               <div id=\"vr_mg_Left_Center\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  vr_mg Left Center\n\t               </div>\n\t               <div id=\"vr_mg_Left_Bottom\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  vr_mg Left Bottom\n\t               </div>\n\t            </div>\n\t            <div id=\"column2\" class=\"position_relative float_left width_100 height_100\">\n\t               <div id=\"vr_mg_Center_Top\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  vr_mg Center Top\n\t               </div>\n\t               <div id=\"vr_mg_Center_Mid\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  <div id=\"vr_mg_Center_Mid_scene\" class=\"width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden \">\n\t                     <div id=\"container_object\" class=\"animated1 delay2 enterTopBounce position_absolute bottom_0 left_1205vw width_33vw height_33vw\">\n\t                        <div id=\"object\" class=\"gui_stage_tv width_100 height_100\"></div>\n\t                     </div>\n\t                     <div id=\"container_object\" class=\"animated1 delay2 enterTopBounce position_absolute top_0 right_0 left_0 width_33vw height_33vw\">\n\t                        <div id=\"object\" class=\"gui_stage_lights width_100 height_100\"></div>\n\t                     </div>\n\t                     <div id=\"container_object\" class=\"animated1 delay2 enterTopBounce position_absolute bottom_0 right_1205vw width_33vw height_33vw\">\n\t                        <div id=\"object\" class=\"gui_stage_desk width_100 height_100\"></div>\n\t                     </div>\n\t                  </div>\n\t                  vr_mg Center Mid\n\t               </div>\n\t               <div id=\"vr_mg_Center_Bottom\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  vr_mg Center Bottom\n\t               </div>\n\t            </div>\n\t            <div id=\"column3\" class=\"position_relative float_left width_100 height_100\">\n\t               <div id=\"vr_mg_Right_Top\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  vr_mg Right Top\n\t               </div>\n\t               <div id=\"vr_mg_Right_Mid\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  vr_mg Right Mid\n\t               </div>\n\t               <div id=\"vr_mg_Right_Bottom\" class=\"width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box\">\n\t                  vr_mg Right Bottom\n\t               </div>\n\t            </div>\n\t         </div>\n\n\t         <div id=\"vr_fg\" class=\"transform_translate3d_top0 position_absolute top_0 left_0 right_0 width_100 height_100\">\n\t          \n\t            <div id=\"validated_user_enemy_character\">\n\t                  \n\t              <div id=\"enemy_character\" class=\"position_absolute animated1 delay2 enterTopBounce\">\n\t                  <div id=\"enemy_character_svg\" class=\"gui_character_1 width_100 height_100\"></div>\n\t              </div>\n\n\t            </div>\n\n\t            <div id=\"validated_user_playable_character\">\n\t                  \n\t              <div id=\"playable_character\" class=\"position_absolute animated1 delay2 enterTopBounce\">\n\t                  <div id=\"playable_character_svg\" class=\"gui_character_1 width_100 height_100\"></div>\n\t              </div>\n\n\t            </div>\n\n\t            <div id=\"player_1_playable_character\">\n\t                  \n\t              <div id=\"player_1_character\" class=\"position_absolute animated1 delay2 enterTopBounce\">\n\t                  <div id=\"player_1_character_svg\" class=\"gui_character_1 width_100 height_100\"></div>\n\t              </div>\n\n\t            </div>\n\n\t            <div id=\"player_2_playable_character\">\n\t              \n\t              <div id=\"player_2_character\" class=\"position_absolute animated1 delay2 enterTopBounce\">\n\t                  <div id=\"player_2_character_svg\" class=\"gui_character_1 width_100 height_100\"></div>\n\t              </div>\n\n\t            </div>\n\t            \n\t         </div>\n\n\t      </div>\n\t";
  run_scene_Interval = setInterval(function () {
    if (document.getElementById('cardboard') != null) {
      document.getElementById('cardboard').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
    }

    ; // vr

    if (document.getElementById('vr_mg') != null) {
      document.getElementById('vr_mg').style = "transform: translate3d(" + state.interaction.vr.clientX * 100 + "%, " + state.interaction.vr.clientY * 100 + "%, 0);";
    }

    ;
    state.motion.frame += 1;
    console.log(state.motion.frame);
  }, 1000 / state.motion.framerate);
}; // after db user


var check_url = function check_url() {
  var parts = location.pathname.split('/');
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);

  if (parts[1] != null) {
    if (parts[1] == '') {
      console.log('just stay at the home page');
      state.data.onload_url = 'home';
      document.title = "home??";
    }

    ;

    if (parts[1] == 'p') {
      console.log('going to post page');

      if (parts[2] != null) {
        console.log('post id: ' + parts[2]);

        for (var i = 0; i < posts_guides.length; i++) {
          console.log(posts_guides[i]);

          if (posts_guides[i].id == parts[2]) {
            console.log('post found: ' + posts_guides[i]);
            state.data.onload_url = 'post';
            document.title = posts_guides[i].title;
          }
        }

        ;
      }

      ;
    }

    ;

    if (parts[1] != 'p' && parts[1] != '') {
      console.log('going to user page');

      if (parts[1] != null) {
        console.log('user id: ' + parts[1]);

        for (var i = 0; i < db_users.length; i++) {
          console.log(db_users[i]);

          if (db_users[i].nickname == parts[1]) {
            console.log('user found: ' + db_users[i]);
            state.data.onload_url = 'user';
            document.title = db_users[i].email;
          }
        }

        ;
      }

      ;
    }

    ;
  }

  ;
  act_after_check_url();
};

var check_state = function check_state() {
  var parts = location.pathname.split('/');
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);

  if (parts[1] != null) {
    if (parts[1] == '') {
      console.log('just stay at the home page');
      state.data.onload_url = 'home';
      document.title = "home??";
    }

    ;

    if (parts[1] == 'p') {
      console.log('going to post page');

      if (parts[2] != null) {
        console.log('post id: ' + parts[2]);

        for (var i = 0; i < posts_guides.length; i++) {
          console.log(posts_guides[i]);

          if (posts_guides[i].id == parts[2]) {
            console.log('post found: ' + posts_guides[i]);
            state.data.onload_url = 'post';
            document.title = posts_guides[i].title;
          }
        }

        ;
      }

      ;
    }

    ;

    if (parts[1] != 'p' && parts[1] != '') {
      console.log('going to user page');

      if (parts[1] != null) {
        console.log('user id: ' + parts[1]);

        for (var i = 0; i < db_users.length; i++) {
          console.log(db_users[i]);

          if (db_users[i].nickname == parts[1]) {
            console.log('user found: ' + db_users[i]);
            state.data.onload_url = 'user';
            document.title = db_users[i].email;
          }
        }

        ;
      }

      ;
    }

    ;
  }

  ;
};

var handle_ui = function handle_ui() {
  if (state.data.onload_url == 'home') {}

  ; // handle_ui

  if (valid_signed_in == true) {
    document.getElementById('signup_form').classList = "display_none";
    document.getElementById('signin_form').classList = "display_none";
    document.getElementById('upload_form').classList = "";
    document.getElementById('create_form').classList = "";
    document.getElementById('edit_form').classList = "";
    document.getElementById('signout_form').classList = "";
  }

  ; // handle_ui

  if (valid_signed_in == false) {
    document.getElementById('signup_form').classList = "";
    document.getElementById('signin_form').classList = "";
    document.getElementById('upload_form').classList = "display_none";
    document.getElementById('create_form').classList = "display_none";
    document.getElementById('edit_form').classList = "display_none";
    document.getElementById('signout_form').classList = "display_none";
  }

  ;

  if (state.modal.menu.left.transform == true) {
    if (document.getElementById('gui_top_left_icon') != null) {
      document.getElementById('gui_top_left_icon').classList = "gui_link_menu_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto";
    }

    ;
  }

  ;

  if (state.modal.menu.left.transform == false) {
    if (document.getElementById('gui_top_left_icon') != null) {
      document.getElementById('gui_top_left_icon').classList = "position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto";
    }

    ;
  }

  ;

  if (document.getElementById('lead_container') != null) {
    document.getElementById('lead_container').style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;';
  }

  ;

  if (state.data.dark_mode == true) {
    if (body != null) {
      body.classList = "easing_01 color_white bg_grey";
    }

    ;

    if (document.getElementById('scene') != null) {
      document.getElementById('scene').classList = "bg_grey width_100 height_100 position_fixed top_0 left_0 right_0 float_left z_index_-1";
    }

    ;
  }

  ;

  if (state.data.dark_mode == false) {
    if (body != null) {
      body.classList = "easing_01 color_grey bg_white";
    }

    ;

    if (document.getElementById('scene') != null) {
      document.getElementById('scene').classList = "bg_white width_100 height_100 position_fixed top_0 left_0 right_0 float_left z_index_-1";
    }

    ;
  }

  ;

  if (state.modal.menu.left.transform != false || state.modal.menu.right.transform != false || state.modal.menu.top.transform != false || state.modal.menu.bottom.transform != false) {
    if (html != null) {
      html.classList = "overflow_hidden";
    }

    ;
  }

  ;

  if (state.modal.page.top.transform == true) {
    if (document.getElementById('link_home_mark') != null) {
      document.getElementById('link_home_mark').classList = "position_relative height_100 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.top.transform == false) {
    if (document.getElementById('link_home_mark') != null) {
      document.getElementById('link_home_mark').classList = "position_relative height_100 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.page.top.transform == true) {
    if (document.getElementById('header_link_1') != null) {
      document.getElementById('header_link_1').classList = "position_relative height_100 width_1205 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.top.transform == false) {
    if (document.getElementById('header_link_1') != null) {
      document.getElementById('header_link_1').classList = "position_relative height_100 width_1205 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.page.bottom.transform == true) {
    if (document.getElementById('header_link_2') != null) {
      document.getElementById('header_link_2').classList = "position_relative height_100 width_1205 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.bottom.transform == false) {
    if (document.getElementById('header_link_2') != null) {
      document.getElementById('header_link_2').classList = "position_relative height_100 width_1205 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.page.left.transform == true) {
    if (document.getElementById('header_link_3') != null) {
      document.getElementById('header_link_3').classList = "position_relative height_100 width_1205 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.left.transform == false) {
    if (document.getElementById('header_link_3') != null) {
      document.getElementById('header_link_3').classList = "position_relative height_100 width_1205 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.page.right.transform == true) {
    if (document.getElementById('header_link_4') != null) {
      document.getElementById('header_link_4').classList = "position_relative height_100 width_6025 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.right.transform == false) {
    if (document.getElementById('header_link_4') != null) {
      document.getElementById('header_link_4').classList = "position_relative height_100 width_6025 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.page.right.transform == true) {
    if (document.getElementById('header_link_5') != null) {
      document.getElementById('header_link_5').classList = "position_relative height_100 width_6025 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.right.transform == false) {
    if (document.getElementById('header_link_5') != null) {
      document.getElementById('header_link_5').classList = "position_relative height_100 width_6025 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.page.right.transform == true) {
    if (document.getElementById('header_link_6') != null) {
      document.getElementById('header_link_6').classList = "position_relative height_100 width_6025 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.right.transform == false) {
    if (document.getElementById('header_link_6') != null) {
      document.getElementById('header_link_6').classList = "position_relative height_100 width_6025 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.page.right.transform == true) {
    if (document.getElementById('header_link_7') != null) {
      document.getElementById('header_link_7').classList = "position_relative height_100 width_6025 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.right.transform == false) {
    if (document.getElementById('header_link_7') != null) {
      document.getElementById('header_link_7').classList = "position_relative height_100 width_6025 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.page.right.transform == true) {
    if (document.getElementById('header_link_8') != null) {
      document.getElementById('header_link_8').classList = "position_relative height_100 width_6025 margin_auto float_left bg_white";
    }
  }

  ;

  if (state.modal.page.right.transform == false) {
    if (document.getElementById('header_link_8') != null) {
      document.getElementById('header_link_8').classList = "position_relative height_100 width_6025 margin_auto float_left bg_grey";
    }
  }

  ;

  if (state.modal.gradient.top.transform == true) {
    if (document.getElementById('footer_tabs_1') != null) {
      document.getElementById('footer_tabs_1').classList = "footer_link bg_white";
    }
  }

  ;

  if (state.modal.gradient.top.transform == false) {
    if (document.getElementById('footer_tabs_1') != null) {
      document.getElementById('footer_tabs_1').classList = "footer_link bg_grey";
    }
  }

  ;

  if (state.modal.gradient.bottom.transform == true) {
    if (document.getElementById('footer_tabs_2') != null) {
      document.getElementById('footer_tabs_2').classList = "footer_link bg_white";
    }
  }

  ;

  if (state.modal.gradient.bottom.transform == false) {
    if (document.getElementById('footer_tabs_2') != null) {
      document.getElementById('footer_tabs_2').classList = "footer_link bg_grey";
    }
  }

  ;

  if (state.modal.gradient.left.transform == true) {
    if (document.getElementById('footer_tabs_3') != null) {
      document.getElementById('footer_tabs_3').classList = "footer_link bg_white";
    }
  }

  ;

  if (state.modal.gradient.left.transform == false) {
    if (document.getElementById('footer_tabs_3') != null) {
      document.getElementById('footer_tabs_3').classList = "footer_link bg_grey";
    }
  }

  ;

  if (state.modal.gradient.right.transform == true) {
    if (document.getElementById('footer_tabs_4') != null) {
      document.getElementById('footer_tabs_4').classList = "footer_link bg_white";
    }
  }

  ;

  if (state.modal.gradient.right.transform == false) {
    if (document.getElementById('footer_tabs_4') != null) {
      document.getElementById('footer_tabs_4').classList = "footer_link bg_grey";
    }
  }

  ;

  if (state.modal.pop.top.transform == true) {
    if (document.getElementById('footer_tabs_5') != null) {
      document.getElementById('footer_tabs_5').classList = "footer_link bg_white";
    }
  }

  ;

  if (state.modal.pop.top.transform == false) {
    if (document.getElementById('footer_tabs_5') != null) {
      document.getElementById('footer_tabs_5').classList = "footer_link bg_grey";
    }
  }

  ;

  if (state.modal.pop.bottom.transform == true) {
    if (document.getElementById('footer_tabs_6') != null) {
      document.getElementById('footer_tabs_6').classList = "footer_link bg_white";
    }
  }

  ;

  if (state.modal.pop.bottom.transform == false) {
    if (document.getElementById('footer_tabs_6') != null) {
      document.getElementById('footer_tabs_6').classList = "footer_link bg_grey";
    }
  }

  ;

  if (state.modal.pop.left.transform == true) {
    if (document.getElementById('footer_tabs_7') != null) {
      document.getElementById('footer_tabs_7').classList = "footer_link bg_white";
    }
  }

  ;

  if (state.modal.pop.left.transform == false) {
    if (document.getElementById('footer_tabs_7') != null) {
      document.getElementById('footer_tabs_7').classList = "footer_link bg_grey";
    }
  }

  ;

  if (state.modal.pop.right.transform == true) {
    if (document.getElementById('footer_tabs_8') != null) {
      document.getElementById('footer_tabs_8').classList = "footer_link bg_white";
    }
  }

  ;

  if (state.modal.pop.right.transform == false) {
    if (document.getElementById('footer_tabs_8') != null) {
      document.getElementById('footer_tabs_8').classList = "footer_link bg_grey";
    }
  }

  ;

  if (state.modal.menu.right.transform == false) {
    if (html != null) {
      html.classList = "";
    }

    ;
  }

  ;

  if (state.ux.orientation.is_Landscape == true) {
    if (body != null) {//body.classList += ``
    }

    ;

    if (header != null) {//header.classList += ``
    }

    ;
  }

  ;

  if (state.ux.orientation.is_Landscape == false) {
    if (body != null) {//body.classList += ``
    }

    ;

    if (header != null) {//header.classList += ``
    }

    ;
  }

  ;
};

var handle_render = function handle_render() {
  handle_ui();
  handle_display_with_delay();
  handle_transform();
  handle_render_data_value();
};

var handle_ReturnedState_fromEvents = function handle_ReturnedState_fromEvents() {
  state = _events.default.handle_ReturnState_fromEvents();
  console.log('handle_ReturnedState_fromEvents');
  handle_render();
};

var modal_reset = function modal_reset() {
  state.modal.nav.top.transform = false;
  state.modal.nav.bottom.transform = false;
  state.modal.nav.left.transform = false;
  state.modal.nav.right.transform = false;
  state.modal.pip.top.transform = false;
  state.modal.pip.bottom.transform = false;
  state.modal.pip.left.transform = false;
  state.modal.pip.right.transform = false;
  state.modal.page.top.transform = false;
  state.modal.page.bottom.transform = false;
  state.modal.page.left.transform = false;
  state.modal.page.right.transform = false;
  state.modal.gradient.top.transform = false;
  state.modal.gradient.bottom.transform = false;
  state.modal.gradient.left.transform = false;
  state.modal.gradient.right.transform = false;
  state.modal.morph.top.transform = false;
  state.modal.morph.bottom.transform = false;
  state.modal.morph.left.transform = false;
  state.modal.morph.right.transform = false;
  state.modal.pop.top.transform = false;
  state.modal.pop.bottom.transform = false;
  state.modal.pop.left.transform = false;
  state.modal.pop.right.transform = false;
  state.modal.menu.top.transform = false;
  state.modal.menu.bottom.transform = false;
  state.modal.menu.left.transform = false;
  state.modal.menu.right.transform = false;
  state.modal.gui.top.transform = false;
  state.modal.gui.top_left.transform = true;
  state.modal.gui.top_right.transform = false;
  state.modal.gui.left.transform = false;
  state.modal.gui.right.transform = false;
  state.modal.gui.bottom.transform = false;
  state.modal.gui.bottom_left.transform = false;
  state.modal.gui.bottom_right.transform = false;
  handle_render();
};

var modal_mobile_home = function modal_mobile_home() {
  state.modal.nav.top.transform = true;
  state.modal.nav.bottom.transform = true;
  state.modal.nav.left.transform = false;
  state.modal.nav.right.transform = false;
  state.modal.pip.top.transform = false;
  state.modal.pip.bottom.transform = false;
  state.modal.pip.left.transform = false;
  state.modal.pip.right.transform = false;
  state.modal.page.top.transform = false;
  state.modal.page.bottom.transform = false;
  state.modal.page.left.transform = false;
  state.modal.page.right.transform = false;
  state.modal.gradient.top.transform = false;
  state.modal.gradient.bottom.transform = false;
  state.modal.gradient.left.transform = false;
  state.modal.gradient.right.transform = false;
  state.modal.morph.top.transform = false;
  state.modal.morph.bottom.transform = false;
  state.modal.morph.left.transform = false;
  state.modal.morph.right.transform = false;
  state.modal.pop.top.transform = false;
  state.modal.pop.bottom.transform = false;
  state.modal.pop.left.transform = false;
  state.modal.pop.right.transform = false;
  state.modal.menu.top.transform = false;
  state.modal.menu.bottom.transform = false;
  state.modal.menu.left.transform = false;
  state.modal.menu.right.transform = false;
  state.modal.gui.top.transform = false;
  state.modal.gui.top_left.transform = true;
  state.modal.gui.top_right.transform = false;
  state.modal.gui.left.transform = false;
  state.modal.gui.right.transform = false;
  state.modal.gui.bottom.transform = false;
  state.modal.gui.bottom_left.transform = false;
  state.modal.gui.bottom_right.transform = false;
  handle_render();
};

var modal_gui_activate_all = function modal_gui_activate_all() {
  state.modal.gui.top.transform = true;
  state.modal.gui.top_left.transform = true;
  state.modal.gui.top_right.transform = true;
  state.modal.gui.bottom.transform = true;
  state.modal.gui.bottom_left.transform = true;
  state.modal.gui.bottom_right.transform = true;
  state.modal.gui.left.transform = true;
  state.modal.gui.right.transform = true;
  handle_render();
};

var handle_ReturnState = function handle_ReturnState() {
  return state;
}; // scroll


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
}); // inital

document.addEventListener("DOMContentLoaded", function (event) {
  window.scrollTo(0, 0);
});
window.addEventListener("load", function (event) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});
window.addEventListener("resize", function (event) {
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
  console.log(state.ux);
});
window.addEventListener("ondevicemotion", function (event) {
  _events.default.handle_Function_Device_Motion(event);

  handle_ReturnedState_fromEvents();
});
window.addEventListener("ondeviceorientation", function (event) {
  state.events.motion.event_alpha = event.alpha;
  state.events.motion.event_beta = event.beta;
  state.events.motion.event_gamma = event.gamma;
});
window.addEventListener("onorientationchange", function (event) {
  var _state$ux2;

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
  }, _defineProperty(_state$ux2, "platform", {
    is_Desktop: false,
    is_Mobile: false
  }), _defineProperty(_state$ux2, "browser", {
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
  state.events.motion.orientation_string = orientation;
  console.log('orientation');
  console.log(orientation);
});
window.addEventListener("onbeforeunload", function (event) {});
var _default = {
  handle_ReturnState: handle_ReturnState,
  modal_reset: modal_reset
};
exports.default = _default;
},{"./style.scss":"style.scss","./imports/events":"imports/events.js","./imports/components":"imports/components.js","./imports/functions":"imports/functions.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64285" + '/');

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
//# sourceMappingURL=/fly.e31bb0bc.map