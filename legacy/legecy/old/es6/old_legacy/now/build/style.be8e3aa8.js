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
})({371:[function(require,module,exports) {
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
},{}],370:[function(require,module,exports) {
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
},{"./bundle-url":371}],2:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./assets/fonts/Amatic-SC/AmaticSC-Regular.ttf":200,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2":198,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff":199,"./assets/gui/iphone_cta_lined_left_buttons.svg":6,"./assets/gui/iphone_cta_lined_right_buttons.svg":7,"./assets/gui/iphone_cta_horizontal_lined_bottom_buttons.svg":9,"./assets/gui/gui_logo_social_instagram.svg":8,"./assets/gui/gui_logo_social_twitch.svg":10,"./assets/gui/gui_logo_social_facebook.svg":11,"./assets/gui/gui_logo_social_youtube.svg":12,"./assets/gui/gui_logo_social_twitter.svg":14,"./assets/gui/gui_audio.svg":13,"./assets/gui/gui_audio_on.svg":15,"./assets/gui/gui_audio_off.svg":16,"./assets/gui/gui_create.svg":18,"./assets/gui/gui_button_hire.svg":17,"./assets/gui/gui_button_help.svg":19,"./assets/gui/gui_button_signin.svg":20,"./assets/gui/gui_button_signup.svg":21,"./assets/gui/gui_button_signout.svg":22,"./assets/gui/nownigel_gui_logo_type.svg":23,"./assets/gui/nownigel_gui_logo_type_1.svg":24,"./assets/gui/nownigel_gui_logo_type_2.svg":25,"./assets/gui/nownigel_gui_logo_type_3.svg":26,"./assets/gui/nownigel_gui_logo_type_4.svg":27,"./assets/gui/nownigel_gui_logo_mark.svg":28,"./assets/gui/hands.svg":29,"./assets/gui/circle.svg":30,"./assets/gui/circle_hover.svg":31,"./assets/gui/desktop_cta_buttons.svg":32,"./assets/gui/desktop_cta_lined_buttons.svg":33,"./assets/gui/desktop_cta_horizontal_buttons.svg":34,"./assets/gui/desktop_cta_horizontal_lined_buttons.svg":35,"./assets/gui/desktop_cta_horizontal_lined_bottom_buttons.svg":36,"./assets/gui/gui_logo.svg":37,"./assets/gui/gui_logo_full.svg":38,"./assets/gui/gui_logo_stamp.svg":39,"./assets/gui/gui_logo_links.svg":40,"./assets/gui/gui_logo_stand_in.svg":41,"./assets/gui/gui_move_note.svg":42,"./assets/gui/gui_logo_navs.svg":43,"./assets/gui/gui_logo_navs_hover.svg":44,"./assets/gui/gui_dots.svg":45,"./assets/gui/gui_dots_hover.svg":46,"./assets/gui/gui_vert_dots.svg":47,"./assets/gui/gui_vert_dots_hover.svg":48,"./assets/gui/gui_vert_colon.svg":49,"./assets/gui/gui_vert_colon_hover.svg":50,"./assets/gui/about_type.svg":51,"./assets/gui/gui_i.svg":52,"./assets/gui/gui_i_circle.svg":53,"./assets/gui/gui_circle.svg":54,"./assets/gui/gui_circle_hover.svg":55,"./assets/gui/gui_button_enter.svg":57,"./assets/gui/gui_button_start.svg":56,"./assets/gui/gui_button_learn.svg":58,"./assets/gui/gui_or.svg":59,"./assets/gui/gui_close.svg":60,"./assets/gui/gui_close_hover.svg":61,"./assets/gui/gui_dash.svg":62,"./assets/gui/gui_user_blank.svg":63,"./assets/gui/gui_search.svg":64,"./assets/gui/gui_scroll.svg":65,"./assets/gui/gui_arrow_left.svg":66,"./assets/gui/gui_arrow_top_left.svg":67,"./assets/gui/gui_arrow_bottom_left.svg":68,"./assets/gui/gui_arrow_top.svg":69,"./assets/gui/gui_arrow_bottom.svg":70,"./assets/gui/gui_arrow_right.svg":71,"./assets/gui/gui_arrow_top_right.svg":72,"./assets/gui/gui_arrow_bottom_right.svg":73,"./assets/gui/accent_noise_1.svg":74,"./assets/gui/accent_noise_2.svg":75,"./assets/gui/accent_noise_3.svg":76,"./assets/gui/accent_noise_4.svg":77,"./assets/effect/effect_vignette.svg":81,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_left.svg":78,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_right.svg":79,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200.svg":80,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_closer.svg":82,"./assets/load/letters_n_1.svg":91,"./assets/load/letters_n_2.svg":83,"./assets/load/letters_n_3.svg":86,"./assets/load/letters_n_4.svg":85,"./assets/load/letters_n_5.svg":84,"./assets/load/letters_n_6.svg":87,"./assets/load/letters_n_7.svg":88,"./assets/load/letters_n_8.svg":119,"./assets/load/letters_n_9.svg":89,"./assets/load/letters_n_10.svg":90,"./assets/load/letters_n_11.svg":122,"./assets/load/letters_n_12.svg":92,"./assets/load/letters_n_13.svg":93,"./assets/load/letters_n_14.svg":94,"./assets/load/letters_n_15.svg":95,"./assets/load/letters_n_16.svg":96,"./assets/load/letters_n_17.svg":97,"./assets/load/letters_n_18.svg":98,"./assets/load/letters_n_19.svg":99,"./assets/load/letters_n_20.svg":100,"./assets/load/letters_n_21.svg":101,"./assets/load/letters_n_22.svg":102,"./assets/load/letters_n_23.svg":103,"./assets/load/letters_n_24.svg":104,"./assets/load/letters_n_25.svg":105,"./assets/load/letters_n_26.svg":106,"./assets/load/letters_n_27.svg":107,"./assets/load/letters_n_28.svg":108,"./assets/load/letters_misc.svg":109,"./assets/load/hand_pencil_center.svg":110,"./assets/load/hand_pencil_center_bottom_left.svg":111,"./assets/load/hand_pencil_center_bottom_right.svg":112,"./assets/load/hand_pencil_center_top_right.svg":113,"./assets/load/hand_pencil_center_top_left.svg":114,"./assets/load/hand_pencil_bottom_left.svg":115,"./assets/load/hand_pencil_top_right.svg":116,"./assets/load/hand_pencil_top_left.svg":117,"./assets/load/hand_pencil_bottom_right.svg":118,"./assets/frames/attacked_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_1.svg":201,"./assets/frames/attacked_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_2.svg":202,"./assets/frames/attacked_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_3.svg":203,"./assets/frames/attacked_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_4.svg":204,"./assets/frames/attacked_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_1.svg":206,"./assets/frames/attacked_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_2.svg":205,"./assets/frames/attacked_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_3.svg":207,"./assets/frames/attacked_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_4.svg":208,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg":209,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg":214,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg":210,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg":211,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg":212,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg":213,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg":215,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg":217,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg":216,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg":218,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg":226,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg":219,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg":220,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg":221,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg":222,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg":223,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg":224,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg":225,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0.svg":121,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_1.svg":120,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_2.svg":123,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_3.svg":125,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_4.svg":124,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_5.svg":126,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_6.svg":127,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_7.svg":128,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_8.svg":129,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_9.svg":130,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_10.svg":131,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_11.svg":147,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_12.svg":132,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_13.svg":133,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_14.svg":134,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_15.svg":135,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_16.svg":137,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_17.svg":136,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_18.svg":138,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_19.svg":140,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_20.svg":139,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_21.svg":141,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_22.svg":142,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_23.svg":143,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_24.svg":144,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_25.svg":146,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_26.svg":145,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_27.svg":148,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_28.svg":150,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_29.svg":151,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_30.svg":149,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_31.svg":152,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_32.svg":154,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_33.svg":153,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_34.svg":155,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_35.svg":156,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_36.svg":157,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_37.svg":158,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_38.svg":159,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_39.svg":160,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_40.svg":164,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_41.svg":161,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_42.svg":162,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_43.svg":163,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_44.svg":165,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_45.svg":167,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_46.svg":166,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_47.svg":168,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_48.svg":169,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_49.svg":171,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_50.svg":170,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_51.svg":173,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_52.svg":174,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_53.svg":172,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_54.svg":193,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_55.svg":175,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_56.svg":176,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_57.svg":177,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_58.svg":178,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_59.svg":179,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_60.svg":180,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_61.svg":181,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_62.svg":182,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_63.svg":183,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_64.svg":184,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg":187,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg":185,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg":186,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg":188,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg":190,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg":189,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg":191,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg":192,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right.svg":227,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_1.svg":244,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_2.svg":228,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_3.svg":230,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_4.svg":229,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left.svg":231,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_1.svg":232,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_2.svg":233,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_3.svg":234,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_4.svg":235,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_1.svg":236,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_2.svg":237,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_3.svg":238,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_4.svg":239,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_1.svg":240,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_2.svg":241,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_3.svg":242,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_4.svg":243,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_1.svg":245,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_2.svg":247,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_3.svg":246,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_4.svg":248,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_1.svg":276,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_2.svg":250,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_3.svg":249,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_4.svg":251,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_1.svg":254,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_2.svg":252,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_3.svg":253,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_4.svg":255,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_1.svg":256,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_2.svg":257,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_3.svg":263,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_4.svg":258,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_1.svg":260,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_2.svg":259,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_3.svg":261,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_4.svg":262,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_1.svg":264,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_2.svg":265,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_3.svg":266,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_4.svg":267,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_1.svg":268,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_2.svg":270,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_3.svg":269,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_4.svg":271,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_1.svg":273,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_2.svg":272,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_3.svg":274,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_4.svg":275,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg":278,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg":301,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg":277,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg":280,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg":279,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg":281,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg":282,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg":284,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg":283,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg":285,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg":287,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg":286,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_13.svg":288,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_14.svg":289,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_15.svg":291,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_16.svg":290,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_17.svg":292,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_18.svg":293,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_19.svg":294,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_20.svg":295,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_21.svg":296,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_22.svg":297,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_23.svg":298,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_24.svg":299,"./assets/frames/loading/painter.svg":300,"./assets/frames/loading/painter_1.svg":302,"./assets/frames/loading/white_wall.svg":303,"./assets/frames/loading/egg_wall.svg":304,"./assets/frames/loading/wall_1.svg":305,"./assets/frames/loading/wall_2.svg":306,"./assets/frames/loading/wall_3.svg":307,"./assets/frames/loading/wall_4.svg":308,"./assets/frames/loading/wall_5.svg":309,"./assets/frames/loading/wall_6.svg":310,"./assets/frames/loading/wall_7.svg":311,"./assets/frames/loading/wall_8.svg":312,"./assets/frames/loading/gui_paint_hand_1.svg":313,"./assets/frames/loading/gui_paint_hand_2.svg":314,"./assets/frames/loading/gui_paint_hand_3.svg":315,"./assets/frames/loading/gui_paint_hand_4.svg":316,"./assets/frames/loading/gui_paint_hand_5.svg":317,"./assets/frames/loading/gui_paint_hand_6.svg":318,"./assets/frames/loading/gui_paint_hand_7.svg":319,"./assets/frames/loading/gui_paint_hand_8.svg":320,"./assets/frames/loading/gui_paint_hand_9.svg":321,"./assets/frames/loading/gui_paint_hand_10.svg":322,"./assets/frames/loading/gui_paint_hand_11.svg":323,"./assets/frames/loading/gui_paint_hand_12.svg":324,"./assets/frames/loading/gui_paint_hand_13.svg":325,"./assets/frames/loading/gui_paint_hand_14.svg":326,"./assets/frames/loading/gui_paint_hand_15.svg":327,"./assets/frames/loading/gui_paint_hand_16.svg":328,"./assets/frames/loading/gui_paint_hand_17.svg":329,"./assets/frames/loading/gui_paint_hand_18.svg":330,"./assets/frames/loading/gui_paint_hand_19.svg":331,"./assets/frames/loading/gui_paint_hand_20.svg":332,"./assets/frames/loading/gui_paint_hand_21.svg":333,"./assets/frames/loading/gui_paint_hand_22.svg":334,"./assets/frames/loading/gui_paint_hand_23.svg":335,"./assets/frames/loading/gui_paint_hand_24.svg":336,"./assets/frames/loading/gui_paint_1.svg":337,"./assets/frames/loading/gui_paint_2.svg":338,"./assets/frames/loading/gui_paint_3.svg":339,"./assets/frames/loading/gui_paint_4.svg":340,"./assets/frames/loading/gui_paint_5.svg":341,"./assets/frames/loading/gui_paint_6.svg":342,"./assets/frames/loading/gui_paint_7.svg":343,"./assets/frames/loading/gui_paint_8.svg":344,"./assets/frames/loading/gui_paint_9.svg":345,"./assets/frames/loading/gui_paint_10.svg":346,"./assets/frames/loading/gui_paint_11.svg":347,"./assets/frames/loading/gui_paint_12.svg":348,"./assets/pieces/particles/particles_health.svg":349,"./assets/pieces/stage/stage_grid.svg":351,"./assets/pieces/stage/stage_perspective.svg":350,"./assets/pieces/stage/stage_workspace.svg":352,"./assets/pieces/stage/stage_floor.svg":353,"./assets/pieces/stage/stage_door_closed.svg":354,"./assets/pieces/stage/stage_door_opened.svg":355,"./assets/pieces/stage/stage_wall.svg":356,"./assets/pieces/stage/stage_lines.svg":357,"./assets/pieces/stage/stage_lines_1.svg":358,"./assets/pieces/stage/stage_lines_2.svg":359,"./assets/pieces/stage/stage_lines_3.svg":360,"./assets/pieces/stage/stage_lines_wall.svg":361,"./assets/gui/gui_paint_top.svg":194,"./assets/gui/gui_paint_bottom.svg":195,"./assets/gui/gui_paint_right.svg":196,"./assets/gui/gui_paint_left.svg":197,"./assets/pieces/faces/face_nigel.svg":362,"./assets/pieces/faces/face_maisie.svg":363,"./assets/pieces/furniture/piece_desk_mg.svg":364,"./assets/pieces/furniture/piece_desk_bg.svg":365,"./assets/pieces/furniture/pieces_office_shoplight_on_bg.svg":366,"./assets/pieces/furniture/pieces_office_shoplight_off_bg.svg":367,"./assets/pieces/furniture/pieces_office_shoplight_off.svg":368,"./assets/pieces/furniture/pieces_office_shoplight_on.svg":369,"./assets/gui_cursor_handdrawn.svg":4,"./assets/gui_cursor_handdrawn_active.svg":5,"_css_loader":370}],380:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51961' + '/');
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
},{}],382:[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  var id = bundles[bundles.length - 1];

  return Promise.all(bundles.slice(0, -1).map(loadBundle)).then(function () {
    return require(id);
  });
}

var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;

var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.modules[id] = [function (require, module) {
          module.exports = resolved;
        }, {}];
      }

      return resolved;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":371}],0:[function(require,module,exports) {
var b=require(382);b.load([["AmaticSC-Regular.2aacce55.ttf",200],["amaticsc-regular-webfont.f1ad37f2.woff2",198],["amaticsc-regular-webfont.8026775f.woff",199],["iphone_cta_lined_left_buttons.7eef3678.svg",6],["iphone_cta_lined_right_buttons.8f95a98f.svg",7],["iphone_cta_horizontal_lined_bottom_buttons.db9ad6e0.svg",9],["gui_logo_social_instagram.c739d0f4.svg",8],["gui_logo_social_twitch.7b70d191.svg",10],["gui_logo_social_facebook.49d64ff1.svg",11],["gui_logo_social_youtube.67a8b5f2.svg",12],["gui_logo_social_twitter.16fe6c43.svg",14],["gui_audio.e7b365c9.svg",13],["gui_audio_on.562b21aa.svg",15],["gui_audio_off.fe6af782.svg",16],["gui_create.50308f55.svg",18],["gui_button_hire.180025e2.svg",17],["gui_button_help.281676f5.svg",19],["gui_button_signin.f1f4850f.svg",20],["gui_button_signup.39b55f9a.svg",21],["gui_button_signout.e0b72198.svg",22],["nownigel_gui_logo_type.d01c5fce.svg",23],["nownigel_gui_logo_type_1.53bf2f1d.svg",24],["nownigel_gui_logo_type_2.2c5703c0.svg",25],["nownigel_gui_logo_type_3.ae074d98.svg",26],["nownigel_gui_logo_type_4.2efb190b.svg",27],["nownigel_gui_logo_mark.a4349b2a.svg",28],["hands.90fc2cf5.svg",29],["circle.1e401b70.svg",30],["circle_hover.d6e72b7b.svg",31],["desktop_cta_buttons.b8926284.svg",32],["desktop_cta_lined_buttons.883b74f2.svg",33],["desktop_cta_horizontal_buttons.f426bf01.svg",34],["desktop_cta_horizontal_lined_buttons.4ed8bcd8.svg",35],["desktop_cta_horizontal_lined_bottom_buttons.bf7f8563.svg",36],["gui_logo.46404a27.svg",37],["gui_logo_full.2511616f.svg",38],["gui_logo_stamp.3c34ca92.svg",39],["gui_logo_links.5c7586b2.svg",40],["gui_logo_stand_in.80ac9f1a.svg",41],["gui_move_note.0e641229.svg",42],["gui_logo_navs.d06d4fa7.svg",43],["gui_logo_navs_hover.109c9ad5.svg",44],["gui_dots.82e89634.svg",45],["gui_dots_hover.b948d165.svg",46],["gui_vert_dots.19fea050.svg",47],["gui_vert_dots_hover.bf6ca68c.svg",48],["gui_vert_colon.32c7c773.svg",49],["gui_vert_colon_hover.40a9d089.svg",50],["about_type.228fe0b9.svg",51],["gui_i.b26a3154.svg",52],["gui_i_circle.1bae684b.svg",53],["gui_circle.19e6f57b.svg",54],["gui_circle_hover.9f6e8fa8.svg",55],["gui_button_enter.7a68fbbb.svg",57],["gui_button_start.dc8973f7.svg",56],["gui_button_learn.339c5e9f.svg",58],["gui_or.60a78a11.svg",59],["gui_close.8b2cc02c.svg",60],["gui_close_hover.3517b02d.svg",61],["gui_dash.7437af15.svg",62],["gui_user_blank.812209c6.svg",63],["gui_search.2da5f8db.svg",64],["gui_scroll.77355624.svg",65],["gui_arrow_left.7c26c412.svg",66],["gui_arrow_top_left.e184fc62.svg",67],["gui_arrow_bottom_left.5e599f74.svg",68],["gui_arrow_top.341f9da7.svg",69],["gui_arrow_bottom.c961805a.svg",70],["gui_arrow_right.141be5a8.svg",71],["gui_arrow_top_right.f41fe8db.svg",72],["gui_arrow_bottom_right.fe04f92c.svg",73],["accent_noise_1.592a120b.svg",74],["accent_noise_2.0e37fd44.svg",75],["accent_noise_3.1bf2c19f.svg",76],["accent_noise_4.8d707bbf.svg",77],["effect_vignette.26d6f94b.svg",81],["nownigel_gui_interaction_hands_0_0_depth_200_left.80feec92.svg",78],["nownigel_gui_interaction_hands_0_0_depth_200_right.679b878b.svg",79],["nownigel_gui_interaction_hands_0_0_depth_200.77ff1ef3.svg",80],["nownigel_gui_interaction_hands_0_0_depth_200_closer.f4ed0d31.svg",82],["letters_n_1.248625d4.svg",91],["letters_n_2.8c599dd9.svg",83],["letters_n_3.632d41c7.svg",86],["letters_n_4.590f71a5.svg",85],["letters_n_5.580376d4.svg",84],["letters_n_6.5bf53e8a.svg",87],["letters_n_7.8c5c1606.svg",88],["letters_n_8.fc9cd8bf.svg",119],["letters_n_9.c4babdd6.svg",89],["letters_n_10.04134ccf.svg",90],["letters_n_11.7481c304.svg",122],["letters_n_12.63805aa3.svg",92],["letters_n_13.d8ce560f.svg",93],["letters_n_14.cdffdc9e.svg",94],["letters_n_15.adf3faac.svg",95],["letters_n_16.b69d038f.svg",96],["letters_n_17.1f70fb45.svg",97],["letters_n_18.c259d831.svg",98],["letters_n_19.1e10b462.svg",99],["letters_n_20.46b9aab8.svg",100],["letters_n_21.ecb20df4.svg",101],["letters_n_22.7717af92.svg",102],["letters_n_23.dadf6ff9.svg",103],["letters_n_24.15043138.svg",104],["letters_n_25.9a115346.svg",105],["letters_n_26.b5e4fcd1.svg",106],["letters_n_27.73e64ced.svg",107],["letters_n_28.5ccf1804.svg",108],["letters_misc.c14b96ae.svg",109],["hand_pencil_center.bab08782.svg",110],["hand_pencil_center_bottom_left.db72207d.svg",111],["hand_pencil_center_bottom_right.3e5a44f4.svg",112],["hand_pencil_center_top_right.f093df7c.svg",113],["hand_pencil_center_top_left.b3eedbd2.svg",114],["hand_pencil_bottom_left.5313084a.svg",115],["hand_pencil_top_right.ffd49593.svg",116],["hand_pencil_top_left.59c84805.svg",117],["hand_pencil_bottom_right.38543295.svg",118],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_1.54735cd8.svg",201],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_2.d67e0831.svg",202],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_3.2588b75a.svg",203],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_4.4c52982d.svg",204],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_1.686322e0.svg",206],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_2.bde09863.svg",205],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_3.a99436a0.svg",207],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_4.12a6ac62.svg",208],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.3ae00ce2.svg",209],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.b708698c.svg",214],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.1ba788e0.svg",210],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.09b44cf8.svg",211],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.eaa364cb.svg",212],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.827dfd07.svg",213],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.b4204b3c.svg",215],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.d2b5706a.svg",217],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.d24e775f.svg",216],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.826877e5.svg",218],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.31b18af7.svg",226],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.210003b3.svg",219],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.411bc6f5.svg",220],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.341f697e.svg",221],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.1bb8b852.svg",222],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.7813097b.svg",223],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.89284a0c.svg",224],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.ca9c78c0.svg",225],["nownigel_gui_interaction_man_0_16_depth_200_face_0.45b68f34.svg",121],["nownigel_gui_interaction_man_0_16_depth_200_face_1.016ff3d3.svg",120],["nownigel_gui_interaction_man_0_16_depth_200_face_2.81c947af.svg",123],["nownigel_gui_interaction_man_0_16_depth_200_face_3.57c88408.svg",125],["nownigel_gui_interaction_man_0_16_depth_200_face_4.19e22b0c.svg",124],["nownigel_gui_interaction_man_0_16_depth_200_face_5.070759e0.svg",126],["nownigel_gui_interaction_man_0_16_depth_200_face_6.27376045.svg",127],["nownigel_gui_interaction_man_0_16_depth_200_face_7.e60b3293.svg",128],["nownigel_gui_interaction_man_0_16_depth_200_face_8.6bb146f5.svg",129],["nownigel_gui_interaction_man_0_16_depth_200_face_9.f97418c2.svg",130],["nownigel_gui_interaction_man_0_16_depth_200_face_10.84dab9b5.svg",131],["nownigel_gui_interaction_man_0_16_depth_200_face_11.a2291e65.svg",147],["nownigel_gui_interaction_man_0_16_depth_200_face_12.e0517f1c.svg",132],["nownigel_gui_interaction_man_0_16_depth_200_face_13.29115f6d.svg",133],["nownigel_gui_interaction_man_0_16_depth_200_face_14.3f7188dd.svg",134],["nownigel_gui_interaction_man_0_16_depth_200_face_15.b13e6abf.svg",135],["nownigel_gui_interaction_man_0_16_depth_200_face_16.9c82fedd.svg",137],["nownigel_gui_interaction_man_0_16_depth_200_face_17.51c5a89a.svg",136],["nownigel_gui_interaction_man_0_16_depth_200_face_18.75d5731a.svg",138],["nownigel_gui_interaction_man_0_16_depth_200_face_19.292e12d9.svg",140],["nownigel_gui_interaction_man_0_16_depth_200_face_20.d14397f7.svg",139],["nownigel_gui_interaction_man_0_16_depth_200_face_21.caaabb48.svg",141],["nownigel_gui_interaction_man_0_16_depth_200_face_22.bd354f5c.svg",142],["nownigel_gui_interaction_man_0_16_depth_200_face_23.527c8a83.svg",143],["nownigel_gui_interaction_man_0_16_depth_200_face_24.6c514d6d.svg",144],["nownigel_gui_interaction_man_0_16_depth_200_face_25.e8346fec.svg",146],["nownigel_gui_interaction_man_0_16_depth_200_face_26.52f8c8d3.svg",145],["nownigel_gui_interaction_man_0_16_depth_200_face_27.4393a082.svg",148],["nownigel_gui_interaction_man_0_16_depth_200_face_28.4392d73b.svg",150],["nownigel_gui_interaction_man_0_16_depth_200_face_29.1bf74992.svg",151],["nownigel_gui_interaction_man_0_16_depth_200_face_30.5638714e.svg",149],["nownigel_gui_interaction_man_0_16_depth_200_face_31.7d99eec3.svg",152],["nownigel_gui_interaction_man_0_16_depth_200_face_32.5f87debc.svg",154],["nownigel_gui_interaction_man_0_16_depth_200_face_33.3a119006.svg",153],["nownigel_gui_interaction_man_0_16_depth_200_face_34.43862a83.svg",155],["nownigel_gui_interaction_man_0_16_depth_200_face_35.f68a79a9.svg",156],["nownigel_gui_interaction_man_0_16_depth_200_face_36.efc776a6.svg",157],["nownigel_gui_interaction_man_0_16_depth_200_face_37.e0d6f7d5.svg",158],["nownigel_gui_interaction_man_0_16_depth_200_face_38.ebecb5bd.svg",159],["nownigel_gui_interaction_man_0_16_depth_200_face_39.4f087078.svg",160],["nownigel_gui_interaction_man_0_16_depth_200_face_40.3d7a2431.svg",164],["nownigel_gui_interaction_man_0_16_depth_200_face_41.0ed3af55.svg",161],["nownigel_gui_interaction_man_0_16_depth_200_face_42.b203345f.svg",162],["nownigel_gui_interaction_man_0_16_depth_200_face_43.a4c46426.svg",163],["nownigel_gui_interaction_man_0_16_depth_200_face_44.1ebdb8c6.svg",165],["nownigel_gui_interaction_man_0_16_depth_200_face_45.939a00fb.svg",167],["nownigel_gui_interaction_man_0_16_depth_200_face_46.e5f57c5b.svg",166],["nownigel_gui_interaction_man_0_16_depth_200_face_47.49aafa8e.svg",168],["nownigel_gui_interaction_man_0_16_depth_200_face_48.e81b6af2.svg",169],["nownigel_gui_interaction_man_0_16_depth_200_face_49.f8020646.svg",171],["nownigel_gui_interaction_man_0_16_depth_200_face_50.953ef9af.svg",170],["nownigel_gui_interaction_man_0_16_depth_200_face_51.101e1db7.svg",173],["nownigel_gui_interaction_man_0_16_depth_200_face_52.b37199ec.svg",174],["nownigel_gui_interaction_man_0_16_depth_200_face_53.b1ae6b12.svg",172],["nownigel_gui_interaction_man_0_16_depth_200_face_54.9a53a550.svg",193],["nownigel_gui_interaction_man_0_16_depth_200_face_55.c3a14fb7.svg",175],["nownigel_gui_interaction_man_0_16_depth_200_face_56.947d2b6f.svg",176],["nownigel_gui_interaction_man_0_16_depth_200_face_57.bde2d4f0.svg",177],["nownigel_gui_interaction_man_0_16_depth_200_face_58.71fab513.svg",178],["nownigel_gui_interaction_man_0_16_depth_200_face_59.377cf2d5.svg",179],["nownigel_gui_interaction_man_0_16_depth_200_face_60.31d532d7.svg",180],["nownigel_gui_interaction_man_0_16_depth_200_face_61.f7a6490c.svg",181],["nownigel_gui_interaction_man_0_16_depth_200_face_62.ffb1cca9.svg",182],["nownigel_gui_interaction_man_0_16_depth_200_face_63.88b7bf32.svg",183],["nownigel_gui_interaction_man_0_16_depth_200_face_64.6c086313.svg",184],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.eb321389.svg",187],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.bbac7e85.svg",185],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.b480334f.svg",186],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.c747b11b.svg",188],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.83e4ae6c.svg",190],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.00159161.svg",189],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.a37e6cf6.svg",191],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.b052a6b6.svg",192],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right.d9aeb3a0.svg",227],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_1.82e7399e.svg",244],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_2.c76f4b4d.svg",228],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_3.ad8230d2.svg",230],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_4.8420f409.svg",229],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left.19d55f54.svg",231],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_1.72038291.svg",232],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_2.afea0ef2.svg",233],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_3.4643eca9.svg",234],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_4.cb6f7679.svg",235],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_1.740343e7.svg",236],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_2.9df686f0.svg",237],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_3.b662ec2b.svg",238],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_4.9f1f7cfc.svg",239],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_1.6a911dd2.svg",240],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_2.cd4e99f0.svg",241],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_3.8ca2cb43.svg",242],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_4.a7daba32.svg",243],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_1.407484f1.svg",245],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_2.cd399212.svg",247],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_3.af5de013.svg",246],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_4.066a017f.svg",248],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_1.2e81dccc.svg",276],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_2.67c027c0.svg",250],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_3.1636e5c5.svg",249],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_4.9c77ca79.svg",251],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_1.5fbf9c66.svg",254],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_2.85059f24.svg",252],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_3.d8b42a08.svg",253],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_4.38e54b8d.svg",255],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_1.2893b4d5.svg",256],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_2.66dea4d2.svg",257],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_3.68cd71c4.svg",263],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_4.9fe90dca.svg",258],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_1.206918cd.svg",260],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_2.4d090d61.svg",259],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_3.76f256a1.svg",261],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_4.bb296807.svg",262],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_1.c5385ac9.svg",264],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_2.82860643.svg",265],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_3.9fc033b4.svg",266],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_4.bd2ce721.svg",267],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_1.163c8bed.svg",268],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_2.1620e378.svg",270],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_3.879eedca.svg",269],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_4.8d915119.svg",271],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_1.94d80ff1.svg",273],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_2.b5a556f6.svg",272],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_3.f2988bc0.svg",274],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_4.d5b1d58a.svg",275],["nownigel_gui_interaction_hands_0_0_depth_200_1.a7d2a646.svg",278],["nownigel_gui_interaction_hands_0_0_depth_200_2.60e4bb6d.svg",301],["nownigel_gui_interaction_hands_0_0_depth_200_3.127ef4d5.svg",277],["nownigel_gui_interaction_hands_0_0_depth_200_4.bb3d567c.svg",280],["nownigel_gui_interaction_hands_0_0_depth_200_5.28ea0be5.svg",279],["nownigel_gui_interaction_hands_0_0_depth_200_6.6225ae98.svg",281],["nownigel_gui_interaction_hands_0_0_depth_200_7.986cade0.svg",282],["nownigel_gui_interaction_hands_0_0_depth_200_8.2b0c9612.svg",284],["nownigel_gui_interaction_hands_0_0_depth_200_9.8a778f27.svg",283],["nownigel_gui_interaction_hands_0_0_depth_200_10.67227946.svg",285],["nownigel_gui_interaction_hands_0_0_depth_200_11.4a29aed2.svg",287],["nownigel_gui_interaction_hands_0_0_depth_200_12.d68608b5.svg",286],["nownigel_gui_interaction_hands_0_0_depth_200_13.003f3544.svg",288],["nownigel_gui_interaction_hands_0_0_depth_200_14.358d0bdb.svg",289],["nownigel_gui_interaction_hands_0_0_depth_200_15.9b2f9c4b.svg",291],["nownigel_gui_interaction_hands_0_0_depth_200_16.dfe7f1b9.svg",290],["nownigel_gui_interaction_hands_0_0_depth_200_17.94fe2df4.svg",292],["nownigel_gui_interaction_hands_0_0_depth_200_18.6f2a08c8.svg",293],["nownigel_gui_interaction_hands_0_0_depth_200_19.7716860d.svg",294],["nownigel_gui_interaction_hands_0_0_depth_200_20.920280f8.svg",295],["nownigel_gui_interaction_hands_0_0_depth_200_21.8a4ed287.svg",296],["nownigel_gui_interaction_hands_0_0_depth_200_22.9fe2876c.svg",297],["nownigel_gui_interaction_hands_0_0_depth_200_23.1f6e2c71.svg",298],["nownigel_gui_interaction_hands_0_0_depth_200_24.99a4f086.svg",299],["painter.5654c5d7.svg",300],["painter_1.f927d5e4.svg",302],["white_wall.55959065.svg",303],["egg_wall.537ce7ea.svg",304],["wall_1.ad428be1.svg",305],["wall_2.dc691bb5.svg",306],["wall_3.68ec3a6a.svg",307],["wall_4.b8aeb95c.svg",308],["wall_5.cbc89c8a.svg",309],["wall_6.04702453.svg",310],["wall_7.54a5aa08.svg",311],["wall_8.18bc9d50.svg",312],["gui_paint_hand_1.0f526dd8.svg",313],["gui_paint_hand_2.1191ac1a.svg",314],["gui_paint_hand_3.43e60db0.svg",315],["gui_paint_hand_4.298cdf3a.svg",316],["gui_paint_hand_5.d85a5b91.svg",317],["gui_paint_hand_6.67a5374f.svg",318],["gui_paint_hand_7.124d5e5f.svg",319],["gui_paint_hand_8.c3d489db.svg",320],["gui_paint_hand_9.0b1793dc.svg",321],["gui_paint_hand_10.9c316b5e.svg",322],["gui_paint_hand_11.7f278d26.svg",323],["gui_paint_hand_12.2d6bf600.svg",324],["gui_paint_hand_13.18378a7d.svg",325],["gui_paint_hand_14.69c0aed6.svg",326],["gui_paint_hand_15.6acb925c.svg",327],["gui_paint_hand_16.0a8b052f.svg",328],["gui_paint_hand_17.b7f799b5.svg",329],["gui_paint_hand_18.a63c8599.svg",330],["gui_paint_hand_19.1534730c.svg",331],["gui_paint_hand_20.d71a0feb.svg",332],["gui_paint_hand_21.03110ce5.svg",333],["gui_paint_hand_22.ff599353.svg",334],["gui_paint_hand_23.c51ec411.svg",335],["gui_paint_hand_24.faa67cd4.svg",336],["gui_paint_1.0d3cab5b.svg",337],["gui_paint_2.c690757c.svg",338],["gui_paint_3.d5707f42.svg",339],["gui_paint_4.9158f493.svg",340],["gui_paint_5.ab750f0d.svg",341],["gui_paint_6.4b0fead1.svg",342],["gui_paint_7.8c711b8e.svg",343],["gui_paint_8.89905dfd.svg",344],["gui_paint_9.3de4b28d.svg",345],["gui_paint_10.b7030b48.svg",346],["gui_paint_11.e2c57bd2.svg",347],["gui_paint_12.7603f7fd.svg",348],["particles_health.8f25696f.svg",349],["stage_grid.e64b9967.svg",351],["stage_perspective.f9e7b2e3.svg",350],["stage_workspace.bd7c26c6.svg",352],["stage_floor.c1e984fa.svg",353],["stage_door_closed.51f683cc.svg",354],["stage_door_opened.c739b875.svg",355],["stage_wall.1fabfec0.svg",356],["stage_lines.32339579.svg",357],["stage_lines_1.7245c668.svg",358],["stage_lines_2.ee2ba8cb.svg",359],["stage_lines_3.eac17043.svg",360],["stage_lines_wall.67a16e61.svg",361],["gui_paint_top.3d01f690.svg",194],["gui_paint_bottom.ce20cb3d.svg",195],["gui_paint_right.d1bb9833.svg",196],["gui_paint_left.e4a1270e.svg",197],["face_nigel.974b1ddb.svg",362],["face_maisie.148a681f.svg",363],["piece_desk_mg.958a3cda.svg",364],["piece_desk_bg.bcdf4c88.svg",365],["pieces_office_shoplight_on_bg.13f11e07.svg",366],["pieces_office_shoplight_off_bg.1c43ff82.svg",367],["pieces_office_shoplight_off.7f3da795.svg",368],["pieces_office_shoplight_on.649090c2.svg",369],["gui_cursor_handdrawn.b8084bd9.svg",4],["gui_cursor_handdrawn_active.77bf8bd3.svg",5]]);
},{}]},{},[380,0], null)